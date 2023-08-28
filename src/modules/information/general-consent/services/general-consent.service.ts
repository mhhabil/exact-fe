import { ActionService } from '@shared/http-request';
import { IAppRequest} from '@shared/request';
import { UpdateGeneralConsentRequest } from '@modules/information/general-consent/requests';
import axios from 'axios';

export class GeneralConsentService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/informasi/general-consent', option);
  }

  update(option: UpdateGeneralConsentRequest) {
    return axios.post('/api/informasi/general-consent/process', option);
  }

  pdfNew(option: IAppRequest) {
    return axios.post('/api/informasi/general-consent/pdf-new', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/informasi/general-consent/pdf-v3', option);
  }
}
