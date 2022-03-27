/* eslint-disable no-unused-vars */
import axios, {AxiosInstance} from 'axios';
/* eslint-enable no-unused-vars */

interface GetPayUrl {
  email: string;
  productId: number;
  amount: number;
}

interface GetOrder {
  orderId: string;
}

/* eslint-disable require-jsdoc */

class AgreementsAPI {
  protected readonly instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3001/api/v1/',
      withCredentials: true,
    });
  };
  async getPayUrl({email, productId, amount}: GetPayUrl) {
    try {
      const result = await this.instance.post('/pay', {
        email: email,
        productId: productId,
        amount: amount,
      });
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getOrder({orderId}: GetOrder) {
    try {
      const result = await this.instance.post('/pay/get-order', {
        order_id: orderId,
      });
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AgreementsAPI();
