import {Body, Controller, Delete, Get, Post, UseGuards} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {CategoryService} from "./category.service";

@Controller('api/v1/categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createCategory(@Body('categoryName') categoryName) {
    return this.categoryService.createCategory({categoryName});
  }

  @Post('get-category')
  async getCategory(@Body('categoryId') categoryId) {
    return this.categoryService.getCategory({categoryId});
  }

  @Get()
  async getAllCategories() {
    return this.categoryService.getAllCategories();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('delete')
  async deleteCategory(@Body('categoryId') categoryId) {
    return this.categoryService.deleteCategory({categoryId});
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('update-category')
  async updateCategory(@Body('categoryId') categoryId, @Body('categoryName') categoryName) {
    return this.categoryService.updateCategory({categoryId, categoryName});
  }
}
