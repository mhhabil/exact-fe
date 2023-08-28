import { ActionService } from '@shared/http-request';
import { IAppRequest } from '@shared/request';
import { IRootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import { ISortingRequest } from '@src/shared/request/requests/cppt-sort.request';
import axios from 'axios';
import { CreateCpptEmergencyRoomRequest } from '../requests/create-cppt-emergency-room.request';
import { CreateCpptEmergencyRoomNurseRequest } from '../requests/create-cppt-emergency-room-nurse.request';
import { UpdateCpptEmergencyRoomRequest } from '../requests/update-cppt-emergency-room.request';
import { UpdateCpptEmergencyRoomNurseRequest } from '../requests/update-cppt-emergency-room-nurse.request';
import { ValidateCpptEmergencyRoomRequest } from '../requests/validate-cppt-emergency-room.request';

export class CpptEmergencyRoomService extends ActionService {
  constructor(config = {}) {
    super(config);
  }

  show(option: ISortingRequest) {
    return axios.post('/api/ugd/cppt/item', option);
  }

  showDay(option: ISortingRequest) {
    return axios.post('/api/ugd/cppt/item-day', option);
  }

  create(option: CreateCpptEmergencyRoomRequest) {
    return axios.post('/api/ugd/cppt/process', option);
  }

  createNurse(option: CreateCpptEmergencyRoomNurseRequest) {
    return axios.post('/api/ugd/cppt/process-nurse', option);
  }

  update(option: UpdateCpptEmergencyRoomRequest) {
    return axios.post('/api/ugd/cppt/process', option);
  }

  updateNurse(option: UpdateCpptEmergencyRoomNurseRequest) {
    return axios.post('/api/ugd/cppt/process-nurse', option);
  }

  view(option: any) {
    return axios.post('/api/ugd/cppt/view', option);
  }

  delete(option: any) {
    return axios.post('/api/ugd/cppt/delete', option);
  }

  pdfNew(option: IRootPDFRequest) {
    return axios.post('/api/ugd/cppt/pdf-new', option);
  }

  validate(option: ValidateCpptEmergencyRoomRequest) {
    return axios.post('/api/ugd/cppt/validate_process', option);
  }
}
