import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Product} from "../models/product.model";
import { AddDataProductDto } from './dto/add-data-product.dto';
import {CreateProductDto} from "./dto/create-product.dto";
import {DeleteProductDto} from "./dto/delete-product.dto";
import {SoldProductDto} from "./dto/sold-product.dto";
import {Category} from "../models/category.model";

interface GetProductDto {
  productId: number;
}

interface UpdateProductDto {
  productName: string;
  productPrice: number;
  description: string;
  productId: number;
  categoryId: number;
}

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product) private productRepository: typeof Product,
              @InjectModel(Category) private categoryRepository: typeof Category) {
  }
  async createProduct({productName, productPrice, data, description, photos, categoryId}: CreateProductDto) {
    const foundCategory = await this.categoryRepository.findOne({where: {categoryId: categoryId}});
    if(!foundCategory) throw new NotFoundException('This category does not exist!');
    return await this.productRepository.create({productName, productPrice, data, categoryId, description, category: foundCategory.categoryName, photos, inStock: data.length})
  }

  async deleteProduct({productId}: DeleteProductDto) {
    const product = await this.productRepository.findOne({where: {productId: productId}});
    if(!product) throw new NotFoundException('No product found with this ID!');
    return await this.productRepository.destroy({where: {productId: productId}});
  }

  async getAllProducts() {
    const products = await this.productRepository.findAll();
    if(!products.length) throw new NotFoundException('Products not found!');
    const mappedProducts = products.map((el) => {
      return {
        productId: el.productId,
        productName: el.productName,
        sales: el.sales,
        description: el.description,
        category: el.category,
        photos: el.photos,
        productPrice: el.productPrice,
        inStock: el.inStock,
      }
    })
    return mappedProducts;
  }

  async getProduct({productId}: GetProductDto) {
    const product = await this.productRepository.findOne({where: {productId}});
    if(!product) throw new NotFoundException('Product not found!');
    return {
      productId: product.productId,
      productName: product.productName,
      sales: product.sales,
      description: product.description,
      category: product.category,
      photos: product.photos,
      productPrice: product.productPrice,
      inStock: product.inStock,
    };
  }

  async soldProduct({productId, amount}: SoldProductDto) {
    const product = await this.productRepository.findOne({where: {productId: productId}});
    if(!product) throw new NotFoundException('No product found with this ID!');
    if(!product.data.length) throw new BadRequestException('This product is currently out of stock!');
    if(product.data.length < amount) throw new BadRequestException('This number of accounts is not available!');
    let soldAccounts = [];
    for(let i = 0; i < amount; i++) {
      const soldProduct = product.data.pop();
      soldAccounts.push(soldProduct);
    }
    await this.productRepository.update({inStock: product.inStock - amount, sales: product.sales + Number(amount), data: product.data}, {where: {productId}});
    return {statusCode: 201, message: 'Product sold!', soldAccounts};
  }

  async addDataProduct({data, productId}: AddDataProductDto) {
    const product = await this.productRepository.findOne({where: {productId: productId}});
    if(!product) throw new NotFoundException('No product found with this ID!');
    product.data.push(data);
    await this.productRepository.update({data: product.data, inStock: product.inStock + 1}, {where: {productId}});
    return {statusCode: 201, message: 'Product added successfully!'};
  }

  // async updateProduct({productName, description, productPrice, productId, categoryId}: UpdateProductDto) {
  //   const product = await this.productRepository.findOne({where: {productId}});
  //   if(!product) throw new NotFoundException('No product found with this ID!');
  //   const foundCategory = await this.categoryRepository.findOne({where: {categoryId: categoryId}});
  //   if(!foundCategory) throw new NotFoundException('This category does not exist!');
  //   return await this.productRepository.update({productName, description, category: foundCategory.categoryName, productPrice, categoryId}, {where: {productId}});
  // }
}
