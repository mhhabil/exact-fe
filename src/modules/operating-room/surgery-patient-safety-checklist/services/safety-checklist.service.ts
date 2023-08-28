import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { UpdateSafetyChecklistRequest } from "../request";
import axios from 'axios';

export class SafetyChecklistService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/ok/safety-checklist', option);
  }

  update(option: UpdateSafetyChecklistRequest) {
    return axios.post('/api/ok/safety-checklist/process', option);
  }

  pdfNew(option: IAppRequest) {
    return axios.post('/api/ok/safety-checklist/pdf-new', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/ok/safety-checklist/pdf-v3', option);
  }
}