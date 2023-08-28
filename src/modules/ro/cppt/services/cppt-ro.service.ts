import { ActionService } from '@shared/http-request';
import { CreateCpptRoRequest } from '@modules/ro/cppt/requests';
import { IAppRequest } from '@shared/request';
import { IRootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import { ISortingRequest } from '@src/shared/request/requests/cppt-sort.request';
import { UpdateCpptRoRequest } from '@modules/ro/cppt/requests/update-cppt-ro.request';
import { ValidateCpptRoRequest } from '@modules/ro/cppt/requests/validate-cppt-ro.request';
import axios from 'axios';

export class CpptRoService extends ActionService {
  constructor(config = {}) {
    super(config);
  }

  show(option: ISortingRequest) {
    return axios.post('/api/ro/cppt/item', option);
  }

  showDay(option: ISortingRequest) {
    return axios.post('/api/ro/cppt/item-day', option);
  }

  create(option: CreateCpptRoRequest) {
    return axios.post('/api/ro/cppt/process', option);
  }

  update(option: UpdateCpptRoRequest) {
    return axios.post('/api/ro/cppt/process', option);
  }

  view(option: any) {
    return axios.post('/api/ro/cppt/view', option);
  }

  delete(option: any) {
    return axios.post('/api/ro/cppt/delete', option);
  }

  pdfNew(option: IRootPDFRequest) {
    return axios.post('/api/ro/cppt/pdf-new', option);
  }

  validate(option: ValidateCpptRoRequest) {
    return axios.post('/api/ro/cppt/validate_process', option);
  }
}
