import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { UpdatePatientHandoverFormRequest } from "../requests";
import axios from "axios";

export class PatientHandoverFormService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    let unit = 'rawat-jalan';
    if (option.jenis_pelayanan === 'RawatInap') {
      unit = 'rawat-inap';
    }
    return axios.post(`/api/${unit}/formulir-serah-terima-pasien`, option);
  }

  update(option: UpdatePatientHandoverFormRequest) {
    let unit = 'rawat-jalan';
    if (option.jenis_pelayanan === 'RawatInap') {
      unit = 'rawat-inap';
    }
    return axios.post(`/api/${unit}/formulir-serah-terima-pasien/process`, option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-jalan/formulir-serah-terima-pasien/pdf-v3', option);
  }
}
