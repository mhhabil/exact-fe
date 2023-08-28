import { ActionService } from '@shared/http-request';
import { IDoctorRequest } from '../requests/doctor.request';
import axios from 'axios';

export class DoctorService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }
  get(option: IDoctorRequest) {
    return axios.post('/api/account/dokter', option);
  }
}
