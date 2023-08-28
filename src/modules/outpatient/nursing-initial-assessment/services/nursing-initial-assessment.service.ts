import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { UpdateNursingInitialAssessmentRequest } from "../requests";
import axios from "axios";

export class NursingInitialAssessmentService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-jalan/pengkajian-awal', option);
  }

  update(option:IAppRequest) {
    return axios.post('/api/rawat-jalan/pengkajian-awal/process', option);
  }

  pdfNew(option: IAppRequest) {
    return axios.post('/api/rawat-jalan/pengkajian-awal/pdf-new', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-jalan/pengkajian-awal/pdf-v3', option);
  }
}
