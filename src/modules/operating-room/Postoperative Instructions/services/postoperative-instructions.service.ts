import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { UpdatePostoperativeInstructionsRequest } from "../requests";
import axios from "axios";

export class PostoperativeInstructionsService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/ok/instruksi-pasca-bedah', option);
  }

  update(option: UpdatePostoperativeInstructionsRequest) {
    return axios.post('/api/ok/instruksi-pasca-bedah/process', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/ok/instruksi-pasca-bedah/pdf-v3', option);
  }
}
