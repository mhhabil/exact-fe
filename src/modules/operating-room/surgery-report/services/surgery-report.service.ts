import { ActionService } from '@shared/http-request';
import { IAppRequest} from '@shared/request';
import { ISurgeryReportPdfRequestTov3 } from '../requests/surgery-report-general.request';
import axios from 'axios';

export class SurgeryReportService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/ok/laporan-pembedahan', option);
  }

  update(option: any) {
    return axios.post('/api/ok/laporan-pembedahan/process', option);
  }

  pdfNew(option: IAppRequest) {
    return axios.post('/api/ok/laporan-pembedahan/pdf-new', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/ok/laporan-pembedahan/pdf-v3', option);
  }
}
