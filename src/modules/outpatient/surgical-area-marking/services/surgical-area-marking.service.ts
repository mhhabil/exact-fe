import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { IPdfSurgicalAreaMarkingRequest } from "../requests/pdf-surgical-area-marking.request";
import { IUpdateSurgicalAreaMarking } from "@modules/outpatient/surgical-area-marking/requests";
import axios from "axios";

export class SurgicalAreaMarkingService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-jalan/penandaan-area-pembedahan', option);
  }

  update(option: IUpdateSurgicalAreaMarking) {
    return axios.post('/api/rawat-jalan/penandaan-area-pembedahan/process', option);
  }

  pdfNew(params: IPdfSurgicalAreaMarkingRequest) {
    return axios.post('/api/rawat-jalan/penandaan-area-pembedahan/pdf-new', params);
  }
}
