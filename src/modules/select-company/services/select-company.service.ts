import { ActionService } from '@shared/http-request';
import axios from 'axios';

export class SelectCompanyService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  get() {
    return axios.get('/api/account/get-companies');
  }
}
