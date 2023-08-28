import { IPdfMedsReconciliationRequest, IUpdateMedsReconciliationRequest } from "../requests";
import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import axios from "axios";

export class MedsReconciliationService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/farmasi/rekonsiliasi-obat', option);
  }

  update(option:  IUpdateMedsReconciliationRequest) {
    return axios.post('/api/farmasi/rekonsiliasi-obat/process', option);
  }

  pdfNew(option: IPdfMedsReconciliationRequest) {
    return axios.post('/api/farmasi/rekonsiliasi-obat/pdf-new', option);
  }
}
