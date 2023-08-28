import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { UpdatePerioperativeNursingRecordsRequest } from "../requests";
import axios from "axios";

export class PerioperativeNursingRecordsService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/ok/catatan-keperawatan-pra-operative', option);
  }

  update(option: UpdatePerioperativeNursingRecordsRequest) {
    return axios.post('/api/ok/catatan-keperawatan-pra-operative/process', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/ok/catatan-keperawatan-pra-operative/pdf-v3', option);
  }
}
