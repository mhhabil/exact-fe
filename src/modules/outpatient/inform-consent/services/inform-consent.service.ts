import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { IPdfInformConsentRequest } from "../requests/pdf-inform-consent.request";
import { IUpdateInformConsentRequest } from "../requests";
import axios from "axios";

export class InformConsentService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-jalan/inform-consent', option);
  }

  update(option: IUpdateInformConsentRequest) {
    return axios.post('/api/rawat-jalan/inform-consent/process', option);
  }

  pdfNew(params: IPdfInformConsentRequest) {
    return axios.post('/api/rawat-jalan/inform-consent/pdf-new', params);
  }
}
