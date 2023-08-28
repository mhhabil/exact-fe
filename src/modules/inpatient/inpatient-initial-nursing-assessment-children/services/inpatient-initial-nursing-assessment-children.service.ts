import { ActionService } from '@shared/http-request';
import { IAppRequest} from '@shared/request';
import { UpdateInitialNursingAssessmentChildrenRequest } from '@modules/inpatient/inpatient-initial-nursing-assessment-children/requests/update-initial-nursing-assessment-children.request';
import axios from 'axios';

export class InpatientInitialNursingAssessmentChildrenService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-inap/pengkajian-awal-keperawatan-anak', option);
  }

  update(option: UpdateInitialNursingAssessmentChildrenRequest) {
    return axios.post('/api/rawat-inap/pengkajian-awal-keperawatan-anak/process', option);
  }

  pdfNew(option: IAppRequest) {
    return axios.post('/api/rawat-inap/pengkajian-awal-keperawatan-anak/pdf-new', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-inap/pengkajian-awal-keperawatan-anak/pdf-v3', option);
  }
}
