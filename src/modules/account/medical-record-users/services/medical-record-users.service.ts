import { ActionService } from '@shared/http-request';
import { IUpdateMedicalRecordUsersRequest } from '@modules/account/medical-record-users/requests';
import axios from 'axios';

export class MedicalRecordUsersService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  get(branchCode: string) {
    return axios.get(`/api/account/mr-users/get-medical-record-users?branch_code=${branchCode}`);
  }

  getAllOfficers(branchCode: string) {
    return axios.post('/api/account/all-petugas', { kode_cabang: branchCode });
  }

  insert(option: IUpdateMedicalRecordUsersRequest) {
    return axios.post('/api/account/mr-users/update-medical-record-users', option);
  }
}
