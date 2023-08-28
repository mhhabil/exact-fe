import { IBPRJPdfRequest, IUpdateProofOfOutpatientServicesRequest } from "../requests";
import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import axios from "axios";

export class ProofOfOutpatientService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-jalan/bukti-pelayanan-rawat-jalan', option);
  }

  update(option: IUpdateProofOfOutpatientServicesRequest) {
    return axios.post('/api/rawat-jalan/bukti-pelayanan-rawat-jalan/process', option);
  }

  pdfNew(option: IBPRJPdfRequest) {
    return axios.post('/api/rawat-jalan/bukti-pelayanan-rawat-jalan/pdf-new', option);
  }

}
