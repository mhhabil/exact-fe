import { IHistoryCPPTRequest, IHistoryRequest } from '@modules/history/requests';
import { ActionService } from '@shared/http-request';
import axios from 'axios';

export class HistoryService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  paginate(filter: IHistoryRequest) {
    return axios.post('/api/riwayat', filter);
  }

  getCppt(params: IHistoryCPPTRequest) {
    return axios.post('/api/riwayat/show-cppt', params);
  }
}
