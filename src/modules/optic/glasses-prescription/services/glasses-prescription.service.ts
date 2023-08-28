import { ActionService } from '@shared/http-request';
import { IAppRequest} from '@shared/request';
import { UpdateGlassesPrescriptionRequest } from '@src/modules/optic/glasses-prescription/requests';
import axios from 'axios';

export class GlassesPrescriptionService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-jalan/resep-kacamata', option);
  }

  update(option: UpdateGlassesPrescriptionRequest) {
    return axios.post('/api/rawat-jalan/resep-kacamata/process', option);
  }

  pdfNew(option: IAppRequest) {
    return axios.post('/api/rawat-jalan/resep-kacamata/pdf-new', option);
  }

  generate(option: IAppRequest) {
    return axios.post('/api/rawat-jalan/resep-kacamata/generate', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-jalan/resep-kacamata/pdf-v3', option);
  }
}
