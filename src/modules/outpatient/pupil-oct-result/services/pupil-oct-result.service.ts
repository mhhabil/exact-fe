import { ActionService } from '@shared/http-request';
import { IAppRequest} from '@shared/request';
import { UpdatePupilOCTResultRequest } from '@modules/outpatient/pupil-oct-result/requests';
import axios from 'axios';

export class PupilOCTResultService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-jalan/hasil-oct-pupil', option);
  }

  update(option: UpdatePupilOCTResultRequest) {
    return axios.post('/api/rawat-jalan/hasil-oct-pupil/process', option);
  }

  pdfNew(option: IAppRequest) {
    return axios.post('/api/rawat-jalan/hasil-oct-pupil/pdf-new', option);
  }
}
