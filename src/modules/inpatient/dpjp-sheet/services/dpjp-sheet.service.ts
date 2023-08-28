import { ActionService } from '@shared/http-request';
import { IAppRequest} from '@shared/request';
import { UpdateDpjpSheetRequest } from '@modules/inpatient/dpjp-sheet/requests/update-dpjp-sheet.request';
import axios from 'axios';

export class DpjpSheetService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  update(option: UpdateDpjpSheetRequest) {
    return axios.post('/api/rawat-inap/lembar-dpjp/process', option);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-inap/lembar-dpjp', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-inap/lembar-dpjp/pdf-v3', option);
  }
}
