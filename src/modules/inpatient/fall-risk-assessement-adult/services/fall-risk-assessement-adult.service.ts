import { ActionService } from '@shared/http-request';
import { CreateFallRiskAssessementAdultRequest } from '@modules/inpatient/fall-risk-assessement-adult/requests/create-fall-risk-assessement-adult.request';
import { DeleteFallRiskAssessementAdultRequest } from '@modules/inpatient/fall-risk-assessement-adult/requests/delete-fall-risk-assessement-adult.request';
import { IAppRequest } from '@shared/request';
import { UpdateFallRiskAssessementAdultRequest } from '@modules/inpatient/fall-risk-assessement-adult/requests/update-fall-risk-assessement-adult.request';
import axios from 'axios';

export class FallRiskAssessementAdultService extends ActionService {
  constructor(config = {}) {
    super(config);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-inap/pengkajian-risiko-jatuh-dewasa/item', option);
  }

  create(option: CreateFallRiskAssessementAdultRequest) {
    return axios.post('/api/rawat-inap/pengkajian-risiko-jatuh-dewasa/process', option);
  }

  update(option: UpdateFallRiskAssessementAdultRequest) {
    return axios.post('/api/rawat-inap/pengkajian-risiko-jatuh-dewasa/process', option);
  }

  delete(option: any) {
    return axios.post('/api/rawat-inap/pengkajian-risiko-jatuh-dewasa/delete', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-inap/pengkajian-risiko-jatuh-dewasa/pdf-v3', option);
  }
}
