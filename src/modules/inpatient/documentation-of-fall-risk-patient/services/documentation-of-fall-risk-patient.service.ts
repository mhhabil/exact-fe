import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { UpdateDocumentationOfFallRiskPatientRequest } from "../requests";
import axios from "axios";

export class DocumentationOfFallRiskPatientService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-inap/dokumentasi-pemberian-informasi-pasien-jatuh', option)
  }

  update(option: UpdateDocumentationOfFallRiskPatientRequest) {
    return axios.post('/api/rawat-inap/dokumentasi-pemberian-informasi-pasien-jatuh/process', option)
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-inap/dokumentasi-pemberian-informasi-pasien-jatuh/pdf-v3', option)
  }
}
