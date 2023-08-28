import { ActionService } from '@shared/http-request';
import { INurseRequest } from '../requests/nurse.request';
import axios from 'axios';

export class NurseService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }
  get(option: INurseRequest) {
    return axios.post('/api/account/perawat', option);
  }
}
