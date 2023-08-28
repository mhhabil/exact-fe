import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { UpdateAssesmenPraOperasi } from "../requests";
import axios from "axios";

export class AssesmentPraOperasiService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/ok/assesmen-pra-operasi', option);
  }

  update(option: UpdateAssesmenPraOperasi) {
    return axios.post('/api/ok/assesmen-pra-operasi/process', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/ok/assesmen-pra-operasi/pdf-v3', option);
  }
}
