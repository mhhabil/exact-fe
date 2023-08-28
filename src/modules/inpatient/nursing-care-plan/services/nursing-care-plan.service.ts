import { ActionService } from '@shared/http-request';
import { IAppRequest} from '@shared/request';
import { UpdateNursingCarePlanRequest } from '@modules/inpatient/nursing-care-plan/requests/update-nursing-care-plan.request';
import axios from 'axios';

export class NursingCarePlanService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  update(option: UpdateNursingCarePlanRequest) {
    return axios.post('/api/rawat-inap/rencana-asuhan-keperawatan/process', option);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-inap/rencana-asuhan-keperawatan', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-inap/rencana-asuhan-keperawatan/pdf-v3', option);
  }
}
