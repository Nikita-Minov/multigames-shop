import {ConflictException, ForbiddenException, Injectable, NotFoundException} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {map, tap} from "rxjs";
import {InjectModel} from "@nestjs/sequelize";
import {Purchase} from "../models/purchase.model";
import {Product} from "../models/product.model";
import {ProductService} from "../product/product.service";
import {appendFileSync, unlinkSync, writeFileSync} from 'fs';

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
    })
    const data = `wallet_to=${process.env.LAVA_WALLET}&sum=${product.productPrice*amount}.00&order_id=${stringId}&hook_url=${process.env.HOOK_URL}&success_url=${process.env.SUCCESS_URL + stringId}&fail_url=${process.env.FAIL_URL}&merchant_name=Покупка ${product.productName} в количестве ${amount} шт.&subtract=1`;
    return this.httpService.post('https://api.lava.ru/invoice/create', data, {
      headers: {
        'Authorization': process.env.LAVA_JWT,
      }}).pipe(
      tap((resp) => console.log(resp)),
      map((resp) => resp.data.url),
      tap((url) => console.log(url)),
    );
  }

  async updateOrder({orderId}: {orderId: string}) {
    const purchase = await this.purchaseRepository.findOne({where: {orderId}});
    const soldProducts = await this.productService.soldProduct({productId: purchase.productId, amount: purchase.purchaseAmount});
    let arr = [];
    let newArr = arr.concat(soldProducts.soldAccounts);
    await this.purchaseRepository.update({data: newArr, status: true}, {where: {orderId}});
    const date = new Date();
    appendFileSync('./src/log.txt', `\n[${date.getFullYear()}-${date.getMonth()}-${date.getDay()}-${date.getHours()}-${date.getSeconds()}] ${purchase.email} купил ${purchase.purchaseName} за ${purchase.sum}р.`);
    return {status: 200};
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
}
