/* eslint-disable no-unused-vars */
import axios, {AxiosInstance} from 'axios';
/* eslint-enable no-unused-vars */

interface GetProduct {
  productId: number;
}

interface DeleteProduct {
  productId: number;
  token: string;
}

interface CreateProduct {
  productName: string;
  productPrice: number;
  data: {
    accounts: Array<string>;
  }
  description: string;
  photos: {
    arr: Array<string>;
  }
  categoryId: number;
  token: string;
}

interface AddData {
  productId: number;
  data: string;
  token: string;
}


/* eslint-disable require-jsdoc */

class ProductsAPI {
  protected readonly instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3001/api/v1/',
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
