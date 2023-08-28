import { ActionService } from '@shared/http-request';
import { IAppRequest} from '@shared/request';
import { UpdateDrugSideEffectsRequest } from '@modules/pharmacy/drug-side-effects/requests/update-drug-side-effects.request';
import axios from 'axios';

export class DrugSideEffectsService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  update(option: UpdateDrugSideEffectsRequest) {
    return axios.post('/api/farmasi/pelaporan-efek-samping-obat/process', option);
  }

  show(option: IAppRequest) {
    return axios.post('/api/farmasi/pelaporan-efek-samping-obat', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/farmasi/pelaporan-efek-samping-obat/pdf-v3', option);
  }
}
