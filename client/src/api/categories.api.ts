/* eslint-disable no-unused-vars */
import axios, {AxiosInstance} from 'axios';
/* eslint-enable no-unused-vars */

interface GetCategory {
  categoryId: number;
}

interface DeleteCategory {
  categoryId: number;
  token: string;
}

interface AddCategory {
  categoryName: string;
  token: string;
}

/* eslint-disable require-jsdoc */

class CategoriesAPI {
  protected readonly instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3001/api/v1/',
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
