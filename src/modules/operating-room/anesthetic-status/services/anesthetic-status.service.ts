import { ActionService } from '@shared/http-request';
import { IAppRequest} from '@shared/request';
import { UpdateAnestheticStatusRequest } from '@modules/operating-room/anesthetic-status/requests/update-anesthetic-status.request';
import axios from 'axios';

export class AnestheticStatusService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  update(option: UpdateAnestheticStatusRequest) {
    return axios.post('/api/ok/status-anestesi/process', option);
  }

  show(option: IAppRequest) {
    return axios.post('/api/ok/status-anestesi', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/ok/status-anestesi/pdf-v3', option);
  }
}
