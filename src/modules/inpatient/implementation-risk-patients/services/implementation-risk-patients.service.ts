import { ActionService } from '@shared/http-request';
import { CreateImplementationRiskPatientsRequest } from '@modules/inpatient/implementation-risk-patients/requests/create-implementation-risk-patients.request';
import { DeleteImplementationRiskPatientsRequest } from '@modules/inpatient/implementation-risk-patients/requests/delete-implementation-risk-patients.request';
import { IAppRequest } from '@shared/request';
import { UpdateImplementationRiskPatientsRequest } from '@modules/inpatient/implementation-risk-patients/requests/update-implementation-risk-patients.request';
import axios from 'axios';

export class ImplementationRiskPatientsService extends ActionService {
  constructor(config = {}) {
    super(config);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-inap/implementasi-pasien-resiko-jatuh/item', option);
  }

  create(option: CreateImplementationRiskPatientsRequest) {
    return axios.post('/api/rawat-inap/implementasi-pasien-resiko-jatuh/process', option);
  }

  update(option: UpdateImplementationRiskPatientsRequest) {
    return axios.post('/api/rawat-inap/implementasi-pasien-resiko-jatuh/process', option);
  }

  delete(option: any) {
    return axios.post('/api/rawat-inap/implementasi-pasien-resiko-jatuh/delete', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-inap/implementasi-pasien-resiko-jatuh/pdf-v3', option);
  }
}
