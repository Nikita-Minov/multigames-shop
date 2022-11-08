/* eslint-disable no-unused-vars */
import axios, {AxiosInstance} from 'axios';
import {LoginUser, RegisterUser} from '../types/api/usersApi.types';
import {config} from '../config/config';
/* eslint-enable no-unused-vars */

/* eslint-disable require-jsdoc */

class UsersAPI {
  protected readonly instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: `${config.ip}/api/v1`,
      withCredentials: true,
    });
  };
  async register({password, username}: RegisterUser) {
    try {
      const result = await this.instance.post('/users', {
        password: password,
        username: username,
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async login({username, password}: LoginUser) {
    try {
      const result = await this.instance.post('/auth', {
        username: username,
        password: password,
      });
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }

  async profile(payload: {token: string}) {
    try {
      const result = await this.instance.get('/auth/profile', {
        headers: {
          'Authorization': `Bearer ${payload.token}`,
        },
      });
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UsersAPI();
