import { ActionService } from '@shared/http-request';
import { IAppRequest} from '@shared/request';
import { UpdateHospitalizationLetterRequest } from '@modules/inpatient/hospitalization-letter/requests/update-hospitalization-letter.request';
import axios from 'axios';

export class HospitalizationLetterService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  update(option: UpdateHospitalizationLetterRequest) {
    return axios.post('/api/rawat-inap/surat-perintah-rawat-inap/process', option);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-inap/surat-perintah-rawat-inap', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-inap/surat-perintah-rawat-inap/pdf-v3', option);
  }
}
