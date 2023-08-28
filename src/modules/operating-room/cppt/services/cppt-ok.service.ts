import { ActionService } from '@shared/http-request';
import { CreateCpptOkNurseRequest } from '@modules/operating-room/cppt/requests/create-cppt-ok-nurse.request';
import { CreateCpptOkRequest } from '@modules/operating-room/cppt/requests/create-cppt-ok.request';
import { IAppRequest } from '@shared/request';
import { IRootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import { ISortingRequest } from '@src/shared/request/requests/cppt-sort.request';
import { UpdateCpptOkNurseRequest } from '@modules/operating-room/cppt/requests/update-cppt-ok-nurse.request';
import { UpdateCpptOkRequest } from '@modules/operating-room/cppt/requests/update-cppt-ok.request';
import { ValidateCpptOkRequest } from '@modules/operating-room/cppt/requests/validate-cppt-ok.request';
import axios from 'axios';

export class CpptOkService extends ActionService {
  constructor(config = {}) {
    super(config);
  }

  show(option: ISortingRequest) {
    return axios.post('/api/ok/cppt/item', option);
  }

  showDay(option: ISortingRequest) {
    return axios.post('/api/ok/cppt/item-day', option);
  }

  create(option: CreateCpptOkRequest) {
    return axios.post('/api/ok/cppt/process', option);
  }

  createNurse(option: CreateCpptOkNurseRequest) {
    return axios.post('/api/ok/cppt/process-nurse', option);
  }

  update(option: UpdateCpptOkRequest) {
    return axios.post('/api/ok/cppt/process', option);
  }

  updateNurse(option: UpdateCpptOkNurseRequest) {
    return axios.post('/api/ok/cppt/process-nurse', option);
  }

  view(option: any) {
    return axios.post('/api/ok/cppt/view', option);
  }

  delete(option: any) {
    return axios.post('/api/ok/cppt/delete', option);
  }

  pdfNew(option: IRootPDFRequest) {
    return axios.post('/api/ok/cppt/pdf-new', option);
  }

  validate(option: ValidateCpptOkRequest) {
    return axios.post('/api/ok/cppt/validate_process', option);
  }
}
