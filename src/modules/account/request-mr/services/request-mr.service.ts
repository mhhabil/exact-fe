import { IApproveMRActionRequest, IBaseRecordRequest, IGrantAccessMRRequest, IListMRFilterRequest, IRequestMRActionRequest, IRequestMRPatientRequest } from '@modules/account/request-mr/requests';
import { ActionService } from '@shared/http-request';
import { ITreatmentFilterRequest } from '@modules/site/patient-list/requests';
import axios from 'axios';

export class RequestMRService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  get() {
    //
  }

  grantAccess(option: IGrantAccessMRRequest) {
    return axios.post('/api/account/request-mr/grant-access', option);
  }

  getListMr(option: IListMRFilterRequest) {
    return axios.post('/api/account/request-mr/get-list-mr', option);
  }

  request(option: IRequestMRActionRequest) {
    return axios.post('/api/account/request-mr/request', option);
  }

  approve(option: IApproveMRActionRequest) {
    return axios.post('/api/account/request-mr/approve', option);
  }

  getPendingRequest(filter: IBaseRecordRequest) {
    return axios.post('/api/account/request-mr/get-pending-request', filter);
  }

  getApprovedRequest(filter: IBaseRecordRequest) {
    return axios.post('/api/account/request-mr/get-approved-request', filter);
  }

  getRequestHistory(filter: IBaseRecordRequest) {
    return axios.post('/api/account/request-mr/get-request-history', filter);
  }

  getAllOfficers(branchCode: string) {
    return axios.post('/api/account/all-petugas', { kode_cabang: branchCode });
  }

  paginate(filter: IRequestMRPatientRequest) {
    return axios.post('/api/account/request-mr/get-data-pasien', filter);
  }

  getPaginatedTreatments(filter: ITreatmentFilterRequest) {
    return axios.post('/api/site/get-data-berobat', filter);
  }

  getLastTreatment(option: any) {
    return axios.post('/api/site/get-berobat-terakhir', option);
  }
}
