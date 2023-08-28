import { ActionService } from '@shared/http-request';
import { IAppRequest} from '@shared/request';
import { UpdateInpatientInitialNursingAssessmentRequest } from '@modules/inpatient/inpatient-initial-nursing-assessment/requests/update-inpatient-initial-nursing-assessment.request';
import axios from 'axios';

export class InpatientInitialNursingAssessmentService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-inap/pengkajian-awal-keperawatan', option);
  }

  update(option: UpdateInpatientInitialNursingAssessmentRequest) {
    return axios.post('/api/rawat-inap/pengkajian-awal-keperawatan/process', option);
  }

  pdfNew(option: IAppRequest) {
    return axios.post('/api/rawat-inap/pengkajian-awal-keperawatan/pdf-new', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-inap/pengkajian-awal-keperawatan/pdf-v3', option);
  }
}
