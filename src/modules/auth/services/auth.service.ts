import axios from 'axios';

import { IChangePasswordRequest, IEmployeeDetailRequest, LoginRequest } from '../requests';

import { HttpService } from '@shared/http-request';

export class AuthService extends HttpService {
  login(request: LoginRequest) {
    return axios.post('/api/account/signin', request);
  }

  detail(request: IEmployeeDetailRequest) {
    return axios.post('/api/account/detail', request);
  }

  changePassword(request: IChangePasswordRequest) {
    return axios.post('/api/account/change-password', request);
  }

  getIpAddress() {
    return axios.get('/api/account/get-ip-address');
  }

  static create(overridingConfig = {}) {
    return new AuthService(overridingConfig);
  }
}
