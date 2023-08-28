import { ActionService } from "@src/shared/http-request";
import axios from "axios";

export class BPJSService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  validate(option: any) {
    return axios.post('/api/bpjs/validate', option);
  }

  getCompanyStatus(companyCode: string) {
    return axios.get(`/api/bpjs/get-i-care-status?company_code=${companyCode}`);
  }
}
