import { ActionService } from '@shared/http-request';
import { IAppRequest} from '@shared/request';
import { UpdateInpatientMedicalNoteRequest } from '@modules/inpatient/inpatient-medical-note/requests/update-inpatient-medical-note.request';
import axios from 'axios';

export class InpatientMedicalNoteService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-inap/catatan-medis-awal', option);
  }

  update(option: UpdateInpatientMedicalNoteRequest) {
    return axios.post('/api/rawat-inap/catatan-medis-awal/process', option);
  }

  pdfNew(option: IAppRequest) {
    return axios.post('/api/rawat-inap/catatan-medis-awal/pdf-new', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-inap/catatan-medis-awal/pdf-v3', option);
  }
}
