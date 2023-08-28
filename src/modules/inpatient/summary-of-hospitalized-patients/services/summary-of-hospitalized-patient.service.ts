import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { UpdateSummaryOfHospitalizedPatientRequest } from "../requests";
import axios from "axios";

export class SummaryOfHospitalizedPatientService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-inap/resume-pasien-pulang', option)
  }

  update(option: UpdateSummaryOfHospitalizedPatientRequest) {
    return axios.post('/api/rawat-inap/resume-pasien-pulang/process', option)
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-inap/resume-pasien-pulang/pdf-v3', option)
  }
}
