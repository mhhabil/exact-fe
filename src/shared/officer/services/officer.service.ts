import { ActionService } from '@shared/http-request';
import { IAppRequest } from '@shared/request';
import axios from 'axios';

export class OfficerService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  get(option: IAppRequest) {
    return axios.post('/api/account/karyawan', option);
  }
}
