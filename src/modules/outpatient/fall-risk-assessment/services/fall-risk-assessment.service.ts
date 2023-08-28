import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { UpdateFallRiskAssessmentRequest } from "../requests";
import axios from "axios";

export class FallRiskAssessmentService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-jalan/risiko-jatuh', option);
  }

  update(option: IAppRequest) {
    return axios.post('/api/rawat-jalan/risiko-jatuh/process', option);
  }

  pdfNew(option: IAppRequest) {
    return axios.post('/api/rawat-jalan/risiko-jatuh/pdf-new', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-jalan/risiko-jatuh/pdf-v3', option);
  }
}