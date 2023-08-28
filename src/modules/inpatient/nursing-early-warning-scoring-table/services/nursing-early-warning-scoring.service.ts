import { ActionService } from '@shared/http-request';
import { CreateNursingEarlyWarningRequest } from '../requests/create-nursing-early-warning.request';
import { IAppRequest} from '@shared/request';
import { UpdateNursingEarlyWarningRequest } from '../requests';
import axios from 'axios';

export class InpatientInitialNursingEarlyWarningService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-inap/pengkajian-early-warning-scoring', option);
  }

  create(option: CreateNursingEarlyWarningRequest) {
    return axios.post('/api/rawat-inap/pengkajian-early-warning-scoring/process', option);
  }

  update(option: UpdateNursingEarlyWarningRequest) {
    return axios.post('/api/rawat-inap/pengkajian-early-warning-scoring/process', option);
  }

  delete(option: UpdateNursingEarlyWarningRequest) {
    return axios.post('/api/rawat-inap/pengkajian-early-warning-scoring/delete', option);
  }

  pdfNew(option: IAppRequest) {
    return axios.post('/api/rawat-inap/pengkajian-awal-keperawatan/pdf-new', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-inap/pengkajian-awal-keperawatan/pdf-v3', option);
  }
}
