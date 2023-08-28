import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { UpdatePatientBpjsStatementRequest } from "../requests/update-patient-bpjs-statement.request";
import axios from "axios";

export class PatientBpjsStatementService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.get(`/api/informasi/surat-pernyataan-pasien-bpjs?emr_id=${option.emr_id}`)
  }

  update(option: UpdatePatientBpjsStatementRequest) {
    return axios.post('/api/informasi/surat-pernyataan-pasien-bpjs/process', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/informasi/surat-pernyataan-pasien-bpjs/pdf-v3', option);
  }
}
