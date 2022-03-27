import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Product} from "../models/product.model";
import {Category} from "../models/category.model";

@Module({
  imports: [SequelizeModule.forFeature([Product, Category])],
  providers: [ProductService],
  controllers: [ProductController],
  exports: [ProductService],
})
export class ProductModule {}
