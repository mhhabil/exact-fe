import {
  CreateCpptInpatientDoctorRequest,
  CreateCpptInpatientNurseRequest,
  UpdateCpptInpatientDoctorRequest,
  UpdateCpptInpatientNurseRequest,
} from '../requests';
import { ActionService } from '@shared/http-request';
import { IAppRequest } from '@src/shared/request';
import { IRootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import { ISortingRequest } from '@src/shared/request/requests/cppt-sort.request';
import axios from 'axios';

export class CpptInpatientService extends ActionService {
  constructor(config = {}) {
    super(config);
  }

  show(option: ISortingRequest) {
    return axios.post('/api/rawat-inap/cppt/item', option);
  }

  showDay(option: ISortingRequest) {
    return axios.post('/api/rawat-inap/cppt/item-day', option);
  }

  create(option: CreateCpptInpatientDoctorRequest) {
    return axios.post('/api/rawat-inap/cppt/process', option);
  }

  createNurse(option: CreateCpptInpatientNurseRequest) {
    return axios.post('/api/rawat-inap/cppt/process-nurse', option);
  }

  update(option: UpdateCpptInpatientDoctorRequest) {
    return axios.post('/api/rawat-inap/cppt/process', option);
  }

  updateNurse(option: UpdateCpptInpatientNurseRequest) {
    return axios.post('/api/rawat-inap/cppt/process-nurse', option);
  }

  delete(option: any) {
    return axios.post('/api/rawat-inap/cppt/delete', option);
  }

  pdfNew(option: IRootPDFRequest) {
    return axios.post('/api/rawat-inap/cppt/pdf-new', option);
  }

  getVisit(option: IAppRequest) {
    return axios.post(`/api/rawat-inap/cppt/get-visit?emr_id=${option.emr_id}`)
  }
}
