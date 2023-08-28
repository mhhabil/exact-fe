import { ActionService } from '@shared/http-request';
import { IAppRequest } from '@shared/request';
import axios from 'axios';
import { CreatePatientTransferRequest } from '../requests/create-patient-transfer-request';
import { UpdatePatientTransferRequest } from '../requests/update-patient-transfer-request';

export class PatientTransferService extends ActionService {
  constructor(config = {}) {
    super(config);
  }

  show(option: IAppRequest) {
    return axios.get(`/api/rawat-jalan/transfer-pasien/item?emr_id=${option.emr_id}`);
  }

  create(option: CreatePatientTransferRequest) {
    return axios.post('/api/rawat-jalan/transfer-pasien/process', option);
  }

  update(option: UpdatePatientTransferRequest) {
    return axios.post('/api/rawat-jalan/transfer-pasien/process', option);
  }

  view(option: any) {
    return axios.post('/api/rawat-jalan/transfer-pasien/view', option);
  }

  delete(option: any) {
    return axios.post('/api/rawat-jalan/transfer-pasien/delete', option);
  }

  pdf(option: any) {
    return axios.post('/api/rawat-jalan/transfer-pasien/pdf', option);
  }

}
