import {
  ICreateHaisSurveillanceInfectionListRequest,
  IHaisSurveillanceInfectionFormRequest,
  IUpdateHaisSurveillanceInfectionListRequest,
} from '../requests';
import { ActionService } from '@shared/http-request';
import { IAppRequest} from '@shared/request';
import { ISortingRequest } from '@src/shared/request/requests/cppt-sort.request';
import axios from 'axios';

export class HaisInfectionSurveillanceService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  showForm(option: IAppRequest) {
    return axios.post('/api/rawat-inap/surveilans-infeksi-hais/form', option);
  }

  updateForm(option: IHaisSurveillanceInfectionFormRequest) {
    return axios.post('/api/rawat-inap/surveilans-infeksi-hais/form/process', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-inap/surveilans-infeksi-hais/pdf-new', option);
  }

  showList(option: ISortingRequest) {
    return axios.post('/api/rawat-inap/surveilans-infeksi-hais/list/item', option);
  }

  createList(option: ICreateHaisSurveillanceInfectionListRequest) {
    return axios.post('/api/rawat-inap/surveilans-infeksi-hais/list/process', option);
  }

  updateList(option: IUpdateHaisSurveillanceInfectionListRequest) {
    return axios.post('/api/rawat-inap/surveilans-infeksi-hais/list/process', option);
  }

  deleteList(option: any) {
    return axios.post('/api/rawat-inap/surveilans-infeksi-hais/list/delete', option);
  }
}
