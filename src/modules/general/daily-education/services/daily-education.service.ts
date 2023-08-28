import { ActionService } from '@shared/http-request';
import { CreateDailyEducationRequest } from '@modules/general/daily-education/requests/create-daily-education.request';
import { IAppRequest } from '@shared/request';
import { UpdateDailyEducationRequest } from '@modules/general/daily-education/requests/update-daily-education.request';
import axios from 'axios';

export class DailyEducationService extends ActionService {
  constructor(config = {}) {
    super(config);
  }

  show(option: IAppRequest) {
    return axios.post('/api/informasi/edukasi-harian/item', option);
  }

  create(option: CreateDailyEducationRequest) {
    return axios.post('/api/informasi/edukasi-harian/process', option);
  }

  update(option: UpdateDailyEducationRequest) {
    return axios.post('/api/informasi/edukasi-harian/process', option);
  }

  view(option: any) {
    return axios.post('/api/informasi/edukasi-harian/view', option);
  }

  delete(option: any) {
    return axios.post('/api/informasi/edukasi-harian/delete', option);
  }

  pdfNew(option: IAppRequest) {
    return axios.post('/api/informasi/edukasi-harian/pdf-new', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/informasi/edukasi-harian/pdf-v3', option);
  }
}
