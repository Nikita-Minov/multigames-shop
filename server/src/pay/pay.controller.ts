import {Body, Controller, Get, Post, StreamableFile, Response, UseGuards} from '@nestjs/common';
import {PayService} from "./pay.service";
import {createReadStream} from "fs";
import {join} from 'path';
import {AuthGuard} from "@nestjs/passport";

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

  @UseGuards(AuthGuard('jwt'))
  @Get('log')
  getFile(@Response({ passthrough: true }) res): StreamableFile {
    const file = createReadStream(join(process.cwd(), './src/log.txt'));
    res.set({
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="log.txt"',
    });
    return new StreamableFile(file);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('delete-log')
  deleteLog() {
    return this.payService.deleteLogFile();
  }
}
