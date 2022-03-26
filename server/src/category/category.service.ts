import {ConflictException, ForbiddenException, Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Category} from "../models/category.model";
import {CreateCategoryDto} from "./dto/create-category.dto";
import {DeleteCategoryDto} from "./dto/delete-category.dto";
import {UpdateCategoryDto} from "./dto/update-category.dto";
import {Product} from '../models/product.model';

interface GetCategoryDto {
  categoryId: number;
}

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private categoryRepository: typeof Category,
              @InjectModel(Product) private productRepository: typeof Product) {
  }
  async createCategory ({categoryName}: CreateCategoryDto) {
    const category = await this.categoryRepository.findOne({where: {categoryName}});
    if(category) throw new ConflictException('This category already exists!');
    return await this.categoryRepository.create({categoryName});
  }

  async getAllCategories() {
    const categories = await this.categoryRepository.findAll();
    if(!categories.length) throw new NotFoundException('Categories not found!');
    const mappedCategories = categories.map((el) => {
      return {
        categoryId: el.categoryId,
        categoryName: el.categoryName,
      }
    })
    return mappedCategories;
  }

  async deleteCategory({categoryId}: DeleteCategoryDto) {
    const category = await this.categoryRepository.findOne({where: {categoryId}});
    if(!category) throw new NotFoundException('No category found!');
    const product = await this.productRepository.findOne({where: {categoryId}});
    if(product) throw new ForbiddenException('You can\'t delete a category that products use!');
    await this.categoryRepository.destroy({where: {categoryId}});
    return {statusCode: 200, message: 'Category deleted!'}
  }
  //
  // async updateCategory({categoryId, categoryName}: UpdateCategoryDto) {
  //   const category = await this.categoryRepository.findOne({where: {categoryId}});
  //   if(!category) throw new NotFoundException('No category found!');
  //   await this.categoryRepository.update({categoryName: categoryName}, {where: {categoryId}});
  //   return {statusCode: 200, message: 'Category updated!'}
  // }

  async getCategory({categoryId}: GetCategoryDto) {
    const category = await this.categoryRepository.findOne({where: {categoryId}});
    if (!category) throw new NotFoundException('No category found!');
    return {
      categoryId: category.categoryId,
      categoryName: category.categoryName,
    };
  }
}
