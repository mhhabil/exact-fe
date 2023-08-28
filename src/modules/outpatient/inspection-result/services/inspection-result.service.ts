import { CreateBiometricExamRequest, UpdateBiometricRequest } from '../requests';
import { ActionService } from '@shared/http-request';
import { IAppRequest } from '@shared/request';
import axios from 'axios';

export class ToolInspectionService extends ActionService {
  constructor(config = {}) {
    super(config);
  }

  // show(option: any) {
  //   let unit = 'hasil-pemeriksaan';
  //   if (option.jenis === 'TindakanYag') {
  //     unit = 'TindakanYag';
  //   }
  //   return axios.post(`/api/${unit}/hasil-pemeriksaan/item`, option);
  // }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-jalan/hasil-pemeriksaan/item', option);
  }

  create(option: any) {
    return axios.post('/api/rawat-jalan/hasil-pemeriksaan/process', option);
  }

  update(option: any) {
    return axios.post('/api/rawat-jalan/hasil-pemeriksaan/process', option);
  }

  view(option: any) {
    return axios.post('/api/rawat-jalan/hasil-pemeriksaan/view', option);
  }

  delete(option: any) {
    return axios.post('/api/rawat-jalan/hasil-pemeriksaan/delete', option);
  }

  pdfNew(option: any) {
    return axios.post('/api/rawat-jalan/hasil-pemeriksaan/pdf-new', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-jalan/hasil-pemeriksaan/pdf-v3', option);
  }

  addPdf(option: any) {
    return axios.post('/api/rawat-jalan/hasil-pemeriksaan/add-pdf', option);
  }
}
