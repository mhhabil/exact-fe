import { ActionService } from '@shared/http-request';
import { IAppRequest } from '@shared/request';
import { ICreatePDFRequest } from '@src/shared/pdf/requests/create-pdf.request';
import { UpdatePreliminaryStudyRequest } from '@modules/ro/preliminary-study/requests';
import axios from 'axios';

export class PreliminaryStudyService extends ActionService {
  constructor(config = {}) {
    super(config);
  }

  show(option: IAppRequest) {
    return axios.post('/api/ro/pengkajian-awal', option);
  }

  update(option: UpdatePreliminaryStudyRequest) {
    return axios.post('/api/ro/pengkajian-awal/process', option);
  }

  pdfNew(option: ICreatePDFRequest) {
    return axios.post('/api/ro/pengkajian-awal/pdf-new', option);
  }
}
