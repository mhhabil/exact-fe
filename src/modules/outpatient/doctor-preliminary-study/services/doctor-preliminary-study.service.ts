import { CreatePreliminaryCppt, UpdatePreliminaryCppt } from '../requests/update-doctor-preliminary-study.request';
import { ActionService } from '@shared/http-request';
import { IAppRequest} from '@shared/request';
import { UpdateDoctorPreliminaryStudyRequest } from '@modules/outpatient/doctor-preliminary-study/requests';
import axios from 'axios';
import { ICreatePDFRequest } from '@src/shared/pdf/requests/create-pdf.request';

export class DoctorPreliminaryStudyService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-jalan/pengkajian-awal-dokter', option);
  }

  update(option: UpdateDoctorPreliminaryStudyRequest) {
    return axios.post('/api/rawat-jalan/pengkajian-awal-dokter/process', option);
  }

  pdfNew(option: ICreatePDFRequest) {
    return axios.post('/api/rawat-jalan/pengkajian-awal-dokter/pdf-new', option);
  }

  createCppt(option: CreatePreliminaryCppt) {
    return axios.post('/api/rawat-jalan/pengkajian-awal-dokter/cppt-process', option);
  }

  updateCppt(option: UpdatePreliminaryCppt) {
    return axios.post('/api/rawat-jalan/pengkajian-awal-dokter/cppt-process', option);
  }
}
