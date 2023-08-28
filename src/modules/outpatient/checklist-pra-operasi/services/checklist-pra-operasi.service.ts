import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { UpdateChecklistPraOperasi } from "../requests";
import axios from "axios";

export class ChecklistPraOperasiService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    let unit = 'rawat-jalan';
    if (option.jenis_pelayanan === 'RawatInap') {
      unit = 'rawat-inap';
    }
    return axios.post(`/api/${unit}/checklist-pra-operasi`, option);
  }

  update(option:  UpdateChecklistPraOperasi) {
    let unit = 'rawat-jalan';
    if (option.jenis_pelayanan === 'RawatInap') {
      unit = 'rawat-inap';
    }
    return axios.post(`/api/${unit}/checklist-pra-operasi/process`, option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-jalan/checklist-pra-operasi/pdf-v3', option);
  }
}
