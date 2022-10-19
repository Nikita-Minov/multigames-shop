/* eslint-disable no-unused-vars */
import axios, {AxiosInstance} from 'axios';
import {
  AddData,
  CreateProduct,
  DeleteProduct,
  GetProduct,
} from '../types/api/productsApi.types';
import {config} from '../config/config';
/* eslint-enable no-unused-vars */

/* eslint-disable require-jsdoc */

class ProductsAPI {
  protected readonly instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: `https://${config.ip}/api/v1`,
      withCredentials: true,
    });
  };
  async getAllProducts() {
    try {
      const result = await this.instance.get('/products');
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getProduct({productId}: GetProduct) {
    try {
      const result = await this.instance.post('/products/get-product', {
        productId: productId,
      });
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduct({token, productId}: DeleteProduct) {
    try {
      const result = await this.instance.post('/products/delete-product', {
        productId: productId,
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

  async createProduct({
    token,
    categoryId,
    data,
    description,
    photos,
    productName,
    productPrice,
  }: CreateProduct) {
    try {
      const result = await this.instance.post('/products/', {
        categoryId: categoryId,
        data: data,
        description: description,
        photos: photos,
        productName: productName,
        productPrice: productPrice,
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

  async addData({
    token,
    productId,
    data,
  }: AddData) {
    try {
      const result = await this.instance.post('/products/add-data', {
        productId: productId,
        data: data,
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

export default new ProductsAPI();
