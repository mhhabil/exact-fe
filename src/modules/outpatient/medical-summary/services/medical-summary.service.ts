import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import axios from "axios";

export class MedicalSummaryService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-jalan/ringkasan-medis-rawat-jalan', option);
  }

  update(option: any) {
    return axios.post('/api/rawat-jalan/ringkasan-medis-rawat-jalan/process', option);
  }
}
