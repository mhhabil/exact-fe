import { ActionService } from '@shared/http-request';
import { IAppRequest} from '@shared/request';
import { UpdateInformationRequest } from '@shared/header/requests';
import axios from 'axios';

export class PatientInformationService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  getDetail(option: IAppRequest) {
    return axios.get(`/api/site/get-informasi-pasien?emr_id=${option.emr_id}`);
  }

  updateAllergy(option: UpdateInformationRequest) {
    return axios.post('/api/site/update-informasi', option);
  }

  getMedsRpo(option: IAppRequest) {
    return axios.get(`/api/site/get-medicine?company_code=${option.kode_cabang}&patient_type=${option.tipe_pasien}`)
  }
}
