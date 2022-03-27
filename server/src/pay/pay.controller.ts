import {Body, Controller, Get, Post} from '@nestjs/common';
import {PayService} from "./pay.service";

@Controller('api/v1/pay')
export class PayController {
  constructor(private payService: PayService) {
  }

  @Post()
  async getPayUrl(
    @Body('email') email,
    @Body('productId') productId,
    @Body('amount') amount
  ) {
    return this.payService.getPayUrl({email, productId, amount});
  }

  @Post('get-hook')
  async updateOrder(
    @Body('order_id') orderId,
  ) {
    return this.payService.updateOrder({orderId});
  }

  @Post('get-order')
  async getOrder(
    @Body('order_id') orderId,
  ) {
    return this.payService.getOrder({orderId});
  }
}
