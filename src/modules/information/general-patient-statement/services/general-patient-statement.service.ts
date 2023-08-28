import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { UpdateGeneralPatientStatementRequest } from "../requests/update-general-patient-statement.request";
import axios from "axios";

export class GeneralPatientStatementService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.get(`/api/informasi/surat-pernyataan-pasien-umum?emr_id=${option.emr_id}`)
  }

  update(option: UpdateGeneralPatientStatementRequest) {
    return axios.post('/api/informasi/surat-pernyataan-pasien-umum/process', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/informasi/surat-pernyataan-pasien-umum/pdf-v3', option);
  }
}
