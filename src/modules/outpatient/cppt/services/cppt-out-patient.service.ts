import { ActionService } from '@shared/http-request';
import { CreateCpptOutPatientNurseRequest } from '@modules/outpatient/cppt/requests/create-cppt-out-patient-nurse.request';
import { CreateCpptOutPatientRequest } from '@modules/outpatient/cppt/requests/create-cppt-out-patient.request';
import { IAppRequest } from '@shared/request';
import { IRootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import { ISortingRequest } from '@src/shared/request/requests/cppt-sort.request';
import { UpdateCpptOutPatientNurseRequest } from '@modules/outpatient/cppt/requests/update-cppt-out-patient-nurse.request';
import { UpdateCpptOutPatientRequest } from '@modules/outpatient/cppt/requests/update-cppt-out-patient.request';
import { ValidateCpptOutPatientRequest } from '@modules/outpatient/cppt/requests/validate-cppt-out-patient.request';
import axios from 'axios';

export class CpptOutPatientService extends ActionService {
  constructor(config = {}) {
    super(config);
  }

  show(option: ISortingRequest) {
    return axios.post('/api/rawat-jalan/cppt/item', option);
  }

  showDay(option: ISortingRequest) {
    return axios.post('/api/rawat-jalan/cppt/item-day', option);
  }

  create(option: CreateCpptOutPatientRequest) {
    return axios.post('/api/rawat-jalan/cppt/process', option);
  }

  createNurse(option: CreateCpptOutPatientNurseRequest) {
    return axios.post('/api/rawat-jalan/cppt/process-nurse', option);
  }

  update(option: UpdateCpptOutPatientRequest) {
    return axios.post('/api/rawat-jalan/cppt/process', option);
  }

  updateNurse(option: UpdateCpptOutPatientNurseRequest) {
    return axios.post('/api/rawat-jalan/cppt/process-nurse', option);
  }

  view(option: any) {
    return axios.post('/api/rawat-jalan/cppt/view', option);
  }

  delete(option: any) {
    return axios.post('/api/rawat-jalan/cppt/delete', option);
  }

  pdfNew(option: IRootPDFRequest) {
    return axios.post('/api/rawat-jalan/cppt/pdf-new', option);
  }

  validate(option: ValidateCpptOutPatientRequest) {
    return axios.post('/api/rawat-jalan/cppt/validate_process', option);
  }
}
