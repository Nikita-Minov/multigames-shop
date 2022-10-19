/* eslint-disable no-unused-vars */
import axios, {AxiosInstance} from 'axios';
import {config} from '../config/config';
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
      baseURL: `https://${config.ip}/api/v1`,
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
      console.log(result.data);
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

  async getLog(token: string) {
    try {
      const result = await this.instance.get('/pay/log', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'responseType': 'blob',
        },
      });
      const blob = new Blob(
          [result.data],
          {type: result.headers['text/plain'],
          });

      const downloadUrl = window.URL.createObjectURL(blob);
      const linkUrl = document.createElement('a');

      linkUrl.download = downloadUrl;
      linkUrl.href = downloadUrl;
      document.body.appendChild(linkUrl);
      linkUrl.click();
      document.body.removeChild(linkUrl);
      linkUrl.remove();
      return downloadUrl;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteLog(token: string) {
    try {
      const result = await this.instance.get('/pay/delete-log', {
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

export default new AgreementsAPI();
