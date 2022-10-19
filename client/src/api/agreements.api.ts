/* eslint-disable no-unused-vars */
import axios, {AxiosInstance} from 'axios';
import {
  CreateAgreement,
  DeleteAgreement,
} from '../types/api/agreementApi.types';
import {config} from '../config/config';
/* eslint-enable no-unused-vars */

/* eslint-disable require-jsdoc */

class AgreementsAPI {
  protected readonly instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: `https://${config.ip}/api/v1`,
      withCredentials: true,
    });
  };
  async getAllAgreements() {
    try {
      const result = await this.instance.get('/agreements/');
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteAgreement({token, clauseOfAgrId}: DeleteAgreement) {
    try {
      const result = await this.instance.post('/agreements/delete-agreement', {
        clauseOfAgrId: clauseOfAgrId,
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

  async createAgreement({token, clauseOfAgr}: CreateAgreement) {
    try {
      const result = await this.instance.post('/agreements', {
        clauseOfAgr: clauseOfAgr,
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

export default new AgreementsAPI();
