import { CreateConsultationSheetRequest, IPdfConsultationSheetRequest, UpdateConsultationSheetRequest } from '../requests';
import { ActionService } from '@shared/http-request';
import { ISortingRequest } from '@src/shared/request/requests/cppt-sort.request';
import axios from 'axios';

export class ConsultationSheetService extends ActionService {
  constructor(config = {}) {
    super(config);
  }

  show(option: ISortingRequest) {
    return axios.post('/api/rawat-jalan/lembar-konsultasi/item', option);
  }

  create(option: CreateConsultationSheetRequest) {
    return axios.post('/api/rawat-jalan/lembar-konsultasi/process', option);
  }

  update(option: UpdateConsultationSheetRequest) {
    return axios.post('/api/rawat-jalan/lembar-konsultasi/process', option);
  }

  delete(option: any) {
    return axios.post('/api/rawat-jalan/lembar-konsultasi/delete', option);
  }

  view(option: any) {
    return axios.post('/api/rawat-jalan/lembar-konsultasi/view', option);
  }

  pdfNew(option: IPdfConsultationSheetRequest) {
    return axios.post('/api/rawat-jalan/lembar-konsultasi/pdf-new', option);
  }
}
