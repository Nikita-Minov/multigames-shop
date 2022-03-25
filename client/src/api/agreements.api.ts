/* eslint-disable no-unused-vars */
import axios, {AxiosInstance} from 'axios';
/* eslint-enable no-unused-vars */

interface DeleteAgreement {
  token: string;
  clauseOfAgrId: number;
}

interface CreateAgreement {
  token: string;
  clauseOfAgr: string;
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
