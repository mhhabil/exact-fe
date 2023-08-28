import { ActionService } from '@shared/http-request';
import { CreateAssessmentVitalSignsRequest } from '@modules/inpatient/assessment-vital-signs/requests/create-assessment-vital-signs.request';
import { DeleteAssessmentVitalSignsRequest } from '@modules/inpatient/assessment-vital-signs/requests/delete-assessment-vital-signs.request';
import { IAppRequest } from '@shared/request';
import { UpdateAssessmentVitalSignsRequest } from '@modules/inpatient/assessment-vital-signs/requests/update-assessment-vital-signs.request';
import axios from 'axios';

export class AssessmentVitalSignsService extends ActionService {
  constructor(config = {}) {
    super(config);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-inap/asesmen-ulang-tanda-vital/item', option);
  }

  create(option: CreateAssessmentVitalSignsRequest) {
    return axios.post('/api/rawat-inap/asesmen-ulang-tanda-vital/process', option);
  }

  update(option: UpdateAssessmentVitalSignsRequest) {
    return axios.post('/api/rawat-inap/asesmen-ulang-tanda-vital/process', option);
  }
 
  delete(option: any) {
    return axios.post('/api/rawat-inap/asesmen-ulang-tanda-vital/delete', option);
  }
  
  pdfv3(option: any) {
    return axios.post('/api/rawat-inap/asesmen-ulang-tanda-vital/pdf-v3', option);
  }
}
