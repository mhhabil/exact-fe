import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { IUpdateDischargePlanningRequest, UpdateDischargePlanningRequest } from "../requests";
import axios from "axios";

export class DischargePlanningService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-inap/rencana-pemulangan-pasien', option)
  }

  update(option: IUpdateDischargePlanningRequest) {
    return axios.post('/api/rawat-inap/rencana-pemulangan-pasien/process', option)
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-inap/rencana-pemulangan-pasien/pdf-v3', option)
  }
}
