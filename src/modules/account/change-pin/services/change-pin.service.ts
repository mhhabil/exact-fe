import { ActionService } from '@shared/http-request';
import { ChangePinRequest } from '@modules/account/change-pin/requests';
import axios from 'axios';

export class ChangePinService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show() {
    return axios.post('/api/account/change-pin');
  }

  update(option: ChangePinRequest) {
    return axios.post('/api/account/change-pin/process', option);
  }

  reset() {
    return axios.post('/api/account/change-pin/process-reset');
  }
}
