import {ConflictException, ForbiddenException, Injectable, NotFoundException} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {lastValueFrom, map, tap} from "rxjs";
import {InjectModel} from "@nestjs/sequelize";
import {Purchase} from "../models/purchase.model";
import {Product} from "../models/product.model";
import {ProductService} from "../product/product.service";
import {appendFileSync, unlinkSync, writeFileSync} from 'fs';
import * as crypto from 'node:crypto';

@Injectable()
export class PayService {
  constructor(private httpService: HttpService,
              private productService: ProductService,
              @InjectModel(Purchase) private purchaseRepository: typeof Purchase,
              @InjectModel(Product) private productRepository: typeof Product) {}


  async getPayUrl({email, amount, productId}: {email: string; productId: number; amount: number;}) {
    const product = await this.productRepository.findOne({where: {productId}});
    if(amount > product.inStock) throw new ConflictException('We don\'t have that many products in stock!');
    function makeid()
    {
      let text = "";
      let possible = "abcdefghijklmnopqrstuvwxyz";

      for(let i=0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    };
    const stringId = makeid();
    await this.purchaseRepository.create({
    purchaseName: `Покупка ${product.productName} в количестве ${amount} шт.`,
    purchaseAmount: amount,
    email,
    sum: product.productPrice*amount,
    orderId: stringId,
    status: false,
    productId,
    date: new Date(),
    });
    const resObs =  this.httpService.get('https://api.ipify.org/?format=json')
    const res = await (await lastValueFrom(resObs)).data;
    console.log(res.ip);
    const data = `wallet_to=${process.env.LAVA_WALLET}&sum=${product.productPrice*amount}.00&order_id=${stringId}&hook_url=${process.env.HOOK_URL}&success_url=${process.env.SUCCESS_URL + stringId}&fail_url=${process.env.FAIL_URL}&merchant_name=Покупка ${product.productName} в количестве ${amount} шт.&subtract=1`;
    console.log(process.env.PAY_KEY);
    const payData = {
      amount: product.productPrice*amount,
      email,
      shopId: 32739,
      nonce: +new Date(),
      ip: res.ip,
      i: 12,
      paymentId: stringId,
      currency: 'RUB',
      success_url: process.env.SUCCESS_URL + stringId,
    };
    const stringData = this.parametersToString(payData);
    const newStringData = stringData.slice(0, stringData.length-1)
    console.log(newStringData);
    console.log(crypto.createHmac('sha256', `${process.env.PAY_KEY}`)
        .update(newStringData)
        .digest('hex'))
    try {
      const orderObj = await this.httpService.post('https://api.freekassa.ru/v1/orders/create', {
        ...payData,
        signature: crypto.createHmac('sha256', `${process.env.PAY_KEY}`)

            // updating data
            .update(newStringData)

            // Encoding to be used
            .digest('hex')
      });
      const orderObjRes = await (await lastValueFrom(orderObj)).data;
      return orderObjRes.location;
    } catch(e) {
      console.error(e);
    }

  }

  async updateOrder(body: any) {
    const purchase = await this.purchaseRepository.findOne({where: {orderId: body.MERCHANT_ORDER_ID}});
    const soldProducts = await this.productService.soldProduct({productId: purchase.productId, amount: purchase.purchaseAmount});
    let arr = [];
    let newArr = arr.concat(soldProducts.soldAccounts);
    await this.purchaseRepository.update({data: newArr, status: true}, {where: {orderId: body.MERCHANT_ORDER_ID}});
    const date = new Date();
    appendFileSync('./src/log.txt', `\n[${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${date.getHours()}-${date.getSeconds()}] ${purchase.email} купил ${purchase.purchaseName} за ${purchase.sum}р.`);
    return 'YES';
  }

  async getOrder({orderId}: {orderId: string}) {
    const order = await this.purchaseRepository.findOne({where: {orderId}});
    if(!order) throw new NotFoundException('Order not found!');
    if(!order.status) throw new ForbiddenException('Order not paid!');
    return {
      orderName: order.purchaseName,
      amount: order.purchaseAmount,
      email: order.email,
      date: order.date,
      data: order.data,
      price: order.sum,
    }
  }

  async deleteLogFile() {
    unlinkSync('./src/log.txt');
    writeFileSync('./src/log.txt', '');
  }

  private parametersToString(body): string {
    let parametersString = '';
    const keys = Object.keys(body).sort();

    if (Array.isArray(body)) {
      keys.sort((a, b) => Number(a) - Number(b));
    }

    for (const key of keys) {
      let value = body[key];

      if (key === 'signature') {
        continue;
      }

      if (value === null || value === undefined) {
        value = '';
      }

      if (typeof value === 'object' && value !== null) {
        value = this.parametersToString(value);
      }

      parametersString += `${value}|`;
    }
    return parametersString;
  }
}
