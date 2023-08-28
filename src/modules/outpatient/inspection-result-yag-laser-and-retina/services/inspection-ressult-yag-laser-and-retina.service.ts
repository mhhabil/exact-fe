import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import axios from "axios";

export class InspectionResultYagLaserAndRetinaService extends ActionService {
  constructor(config = {}) {
    super(config);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-jalan/hasil-pemeriksaan-yag-laser-dan-retina/item-laser', option);
  }

  create(option: any) {
    return axios.post('/api/rawat-jalan/hasil-pemeriksaan-yag-laser-dan-retina/process', option);
  }

  update(option: any) {
    return axios.post('/api/rawat-jalan/hasil-pemeriksaan-yag-laser-dan-retina/process', option);
  }

  view(option: any) {
    return axios.post('/api/rawat-jalan/hasil-pemeriksaan-yag-laser-dan-retina/view', option);
  }

  delete(option: any) {
    return axios.post('/api/rawat-jalan/hasil-pemeriksaan-yag-laser-dan-retina/delete', option);
  }

  pdfNew(option: any) {
    return axios.post('/api/rawat-jalan/hasil-pemeriksaan-yag-laser-dan-retina/pdf-new', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/rawat-jalan/hasil-pemeriksaan-yag-laser-dan-retina/pdf-v3', option);
  }

  addPdf(option: any) {
    return axios.post('/api/rawat-jalan/hasil-pemeriksaan-yag-laser-dan-retina/add-pdf', option);
  }
}
