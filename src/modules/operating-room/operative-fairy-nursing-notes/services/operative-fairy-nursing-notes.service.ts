import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { IUpdateOperativeFairyNursingNotesRequest } from "../requests";
import axios from "axios";

export class OperativeFairyNursingNotesService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/ok/catatan-keperawatan-intra', option);
  }

  update(option: IUpdateOperativeFairyNursingNotesRequest) {
    return axios.post('/api/ok/catatan-keperawatan-intra/process', option);
  }

  pdfNew(option: IAppRequest) {
    return axios.post('/api/ok/catatan-keperawatan-intra/pdf-new', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/ok/catatan-keperawatan-intra/pdf-v3', option);
  }
}