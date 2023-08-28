import { ActionService } from '@shared/http-request';
import { CreatePainMonitoringRequest } from '@modules/inpatient/pain-monitoring/requests/create-pain-monitoring.request';
import { DeletePainMonitoringRequest } from '@modules/inpatient/pain-monitoring/requests/delete-pain-monitoring.request';
import { IAppRequest } from '@shared/request';
import { UpdatePainMonitoringRequest } from '@modules/inpatient/pain-monitoring/requests/update-pain-monitoring.request';
import axios from 'axios';

export class PainMonitoringService extends ActionService {
  constructor(config = {}) {
    super(config);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-inap/monitoring-skala-nyeri/item', option);
  }

  create(option: CreatePainMonitoringRequest) {
    return axios.post('/api/rawat-inap/monitoring-skala-nyeri/process', option);
  }

  update(option: UpdatePainMonitoringRequest) {
    return axios.post('/api/rawat-inap/monitoring-skala-nyeri/process', option);
  }

  delete(option: any) {
    return axios.post('/api/rawat-inap/monitoring-skala-nyeri/delete', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-inap/monitoring-skala-nyeri/pdf-v3', option);
  }
}
