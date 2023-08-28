import { ActionService } from '@shared/http-request';
import { IAppRequest} from '@shared/request';
import { UpdatePatientIdentityRequest } from '@modules/information/patient-identity/requests';
import axios from 'axios';

export class PatientIdentityService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/informasi/identitas-pasien', option);
  }

  update(option: UpdatePatientIdentityRequest) {
    return axios.post('/api/informasi/identitas-pasien/process', option);
  }

  pdfNew(option: IAppRequest) {
    return axios.post('/api/informasi/identitas-pasien/pdf-new', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/informasi/identitas-pasien/pdf-v3', option);
  }
}
