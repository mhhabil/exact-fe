import { ActionService } from '@shared/http-request';
import { IAppRequest} from '@shared/request';
import { UpdateInitialNutritionalAssessmentRequest } from '@modules/inpatient/initial-nutritional-assessment/requests/update-initial-nutritional-assessment.request';
import axios from 'axios';

export class InitialNutritionalAssessmentService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-inap/pengkajian-awal-gizi', option);
  }

  update(option: UpdateInitialNutritionalAssessmentRequest) {
    return axios.post('/api/rawat-inap/pengkajian-awal-gizi/process', option);
  }

  pdfNew(option: IAppRequest) {
    return axios.post('/api/rawat-inap/pengkajian-awal-gizi/pdf-new', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-inap/pengkajian-awal-gizi/pdf-v3', option);
  }
}
