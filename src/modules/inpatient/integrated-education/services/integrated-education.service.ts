import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { UpdateIntegratedEducationRequest } from "../requests";
import axios from "axios";

export class IntegratedEducationService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.get(`/api/rawat-inap/edukasi-terintegrasi/?emr_id=${option.emr_id}`);
  }

  update(option: UpdateIntegratedEducationRequest) {
    return axios.post('/api/rawat-inap/edukasi-terintegrasi/process', option)
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-inap/edukasi-terintegrasi/pdf-v3', option)
  }
}
