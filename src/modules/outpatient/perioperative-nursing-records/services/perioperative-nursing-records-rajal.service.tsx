import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { UpdatePerioperativeNursingRecordsRajalRequest } from "../requests";
import axios from "axios";

export class PerioperativeNursingRecordsRajalService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    let unit = 'rawat-jalan';
    if (option.jenis_pelayanan === 'RawatInap') {
      unit = 'rawat-inap';
    }
    return axios.post(`/api/${unit}/catatan-keperawatan-peri-operative`, option);
  }

  update(option: UpdatePerioperativeNursingRecordsRajalRequest) {
    let unit = 'rawat-jalan';
    if (option.jenis_pelayanan === 'RawatInap') {
      unit = 'rawat-inap';
    }
    return axios.post(`/api/${unit}/catatan-keperawatan-peri-operative/process`, option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-jalan/catatan-keperawatan-peri-operative/pdf-v3', option);
  }
}
