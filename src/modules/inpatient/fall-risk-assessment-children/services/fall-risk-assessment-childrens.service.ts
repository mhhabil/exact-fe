import { ActionService } from '@shared/http-request';
import { CreateFallRiskAssessementChildrenRequest } from '@modules/inpatient/fall-risk-assessment-children/requests/create-fall-risk-assessement-children.request';
import { DeleteFallRiskAssessementChildrenRequest } from '@modules/inpatient/fall-risk-assessment-children/requests/delete-fall-risk-assessement-children.request';
import { IAppRequest } from '@shared/request';
import { UpdateFallRiskAssessementChildrenRequest } from '@modules/inpatient/fall-risk-assessment-children/requests/update-fall-risk-assessement-children.request';
import axios from 'axios';

export class FallRiskAssessementChildrenService extends ActionService {
  constructor(config = {}) {
    super(config);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-inap/pengkajian-resiko-jatuh-anak', option);
  }

  create(option: CreateFallRiskAssessementChildrenRequest) {
    return axios.post('/api/rawat-inap/pengkajian-resiko-jatuh-anak/process', option);
  }

  update(option: UpdateFallRiskAssessementChildrenRequest) {
    return axios.post('/api/rawat-inap/pengkajian-resiko-jatuh-anak/process', option);
  }

  delete(option: any) {
    return axios.post('/api/rawat-inap/pengkajian-resiko-jatuh-anak/delete', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-inap/pengkajian-resiko-jatuh-anak/pdf-v3', option);
  }
}

