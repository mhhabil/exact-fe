import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import axios from "axios";

export class TriageFormService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/ugd/formulir-triase', option);
  }

  update(option: any) {
    return axios.post('/api/ugd/formulir-triase/process', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/ugd/formulir-triase/pdf-v3', option);
  }
}
