import { ActionService } from '@shared/http-request';
import { IPatientFilterRequest } from '@modules/site/patient-list/requests/patient-filter.request';
import { ITreatmentFilterRequest } from '@modules/site/patient-list/requests';
import axios from 'axios';

export class PatientService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  get() {
    //
  }

  paginate(filter: IPatientFilterRequest) {
    return axios.post('/api/site/get-data-pasien', filter);
  }

  paginateConsultation(filter: IPatientFilterRequest) {
    return axios.post('/api/site/get-data-pasien-konsul', filter);
  }

  getPaginatedTreatments(filter: ITreatmentFilterRequest) {
    return axios.post('/api/site/get-data-berobat', filter);
  }

  getLastTreatment(option: any) {
    return axios.post('/api/site/get-berobat-terakhir', option);
  }
}
