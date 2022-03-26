import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  ForbiddenException,
  Get,
  Put,
} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {ProductService} from "./product.service";
@Controller('/api/v1/products')
export class ProductController {
  constructor(private productService: ProductService) {
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createProduct(
    @Body('productName') productName,
    @Body('productPrice') productPrice,
    @Body('data') data,
    @Body('categoryId') categoryId,
    @Body('description') description,
    @Body('photos') photos,
    @Request() req,
  ) {
    if (!req.user.isAdmin) throw new ForbiddenException('You do not have sufficient permissions for this action!');
    const parsedPhotos = photos.arr;
    const parsedData = data.accounts;
    console.log(parsedData)
    return await this.productService.createProduct({
      productPrice,
      productName,
      description,
      data: parsedData,
      photos: parsedPhotos,
      categoryId
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('delete-product')
  async deleteProduct(
    @Body('productId') productId,
    @Request() req,
  ) {
    if(!req.user.isAdmin) throw new ForbiddenException('You do not have sufficient permissions for this action!');
    await this.productService.deleteProduct({productId})
    return {statusCode: 201, message: 'Product was deleted!'};
  }

  @Get()
  async getAllProducts() {
    return await this.productService.getAllProducts();
  }

  @Post('get-product')
  async getProduct(@Body('productId') productId) {
    return await this.productService.getProduct({productId});
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('sold')
  async soldProduct(@Body('productId') productId, @Body('amount') amount) {
    return await this.productService.soldProduct({productId, amount});
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('add-data')
  async addDataProduct(@Body('data') data, @Body('productId') productId) {
    return await this.productService.addDataProduct({data, productId});
  }
  //
  // @UseGuards(AuthGuard('jwt'))
  // @Put()
  // async updateProduct(@Body('productName') productName,
  //                     @Body('productPrice') productPrice,
  //                     @Body('categoryId') categoryId,
  //                     @Body('description') description,
  //                     @Body('productId') productId) {
  //   await this.productService.updateProduct({productPrice, description, productName, categoryId, productId});
  //   return {statusCode: 200, message: 'Product updated!'}
  // }
}
