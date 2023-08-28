import { CreateCpptNutritionRequest, UpdateCpptNutritionRequest } from '../requests';
import { ActionService } from '@shared/http-request';
import { IRootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import { ISortingRequest } from '@src/shared/request/requests/cppt-sort.request';
import axios from 'axios';

export class CpptNutritionService extends ActionService {
  constructor(config = {}) {
    super(config);
  }

  show(option: ISortingRequest) {
    return axios.post('/api/gizi/cppt/item', option);
  }

  showDay(option: ISortingRequest) {
    return axios.post('/api/gizi/cppt/item-day', option);
  }

  create(option: CreateCpptNutritionRequest) {
    return axios.post('/api/gizi/cppt/process', option);
  }

  update(option: UpdateCpptNutritionRequest) {
    return axios.post('/api/gizi/cppt/process', option);
  }
  delete(option: any) {
    return axios.post('/api/gizi/cppt/delete', option);
  }

  pdfNew(option: IRootPDFRequest) {
    return axios.post('/api/gizi/cppt/pdf-new', option);
  }
}
