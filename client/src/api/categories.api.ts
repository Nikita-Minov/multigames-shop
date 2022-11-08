/* eslint-disable no-unused-vars */
import axios, {AxiosInstance} from 'axios';
import {
  AddCategory,
  DeleteCategory,
  GetCategory} from '../types/api/categoriesApi.types';
import {config} from '../config/config';
/* eslint-enable no-unused-vars */

/* eslint-disable require-jsdoc */

class CategoriesAPI {
  protected readonly instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: `${config.ip}/api/v1`,
      withCredentials: true,
    });
  };

  async getCategory({categoryId}: GetCategory) {
    try {
      const result = await this.instance.post('/categories/get-category', {
        categoryId: categoryId,
      });
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllCategories() {
    try {
      const result = await this.instance.get('/categories/');
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteCategory({categoryId, token}: DeleteCategory) {
    try {
      const result = await this.instance.post('/categories/delete', {
        categoryId: categoryId,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
  async addCategory({categoryName, token}: AddCategory) {
    try {
      const result = await this.instance.post('/categories/', {
        categoryName: categoryName,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new CategoriesAPI();
