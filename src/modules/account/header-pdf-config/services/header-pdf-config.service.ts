import { ActionService } from '@shared/http-request';
import { IUpdateHeaderPdfConfigRequest } from '../requests';
import axios from 'axios';

export class HeaderPdfConfigService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  get(branchCode: string) {
    return axios.get(`/api/account/pdf-header?company_code=${branchCode}`);
  }

  insert(option: IUpdateHeaderPdfConfigRequest) {
    return axios.post('/api/account/pdf-header', option);
  }
}
