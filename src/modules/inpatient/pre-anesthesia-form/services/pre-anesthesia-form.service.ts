import { ActionService } from '@shared/http-request';
import { IAppRequest} from '@shared/request';
import { UpdatePreAnesthesiaFormRequest } from '@modules/inpatient/pre-anesthesia-form/requests/update-pre-anesthesia-form.request';
import axios from 'axios';

export class PreAnesthesiaFormService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-inap/formulir-pra-anestesi', option);
  }

  update(option: UpdatePreAnesthesiaFormRequest) {
    return axios.post('/api/rawat-inap/formulir-pra-anestesi/process', option);
  }

  pdfNew(option: IAppRequest) {
    return axios.post('/api/rawat-inap/formulir-pra-anestesi/pdf-new', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-inap/formulir-pra-anestesi/pdf-v3', option);
  }
}
