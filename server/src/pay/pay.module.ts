import { Module } from '@nestjs/common';
import { PayService } from './pay.service';
import { PayController } from './pay.controller';
import {HttpModule} from "@nestjs/axios";
import {SequelizeModule} from "@nestjs/sequelize";
import {Product} from "../models/product.model";
import {Purchase} from "../models/purchase.model";
import {ProductService} from "../product/product.service";
import {Category} from "../models/category.model";

@Module({
  imports: [HttpModule, SequelizeModule.forFeature([Product, Purchase, Category])],
  providers: [PayService, ProductService],
  controllers: [PayController]
})
export class PayModule {}
