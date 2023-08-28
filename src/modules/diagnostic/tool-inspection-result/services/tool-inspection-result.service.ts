import { IDeletePacs, IGenerateDicom } from '../requests';
import { ActionService } from '@shared/http-request';
import { ISortingRequest } from '@src/shared/request/requests/cppt-sort.request';
import { StorageService } from '@src/shared/local-storage';
import axios from 'axios';
import getConfig from 'next/config'

export class ToolInspectionResultService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  getDicom(option: ISortingRequest) {
    return axios.post('/api/diagnostik/hasil-pemeriksaan-alat/dicom-search', option);
  }

  getModality() {
    return axios.get('/api/diagnostik/hasil-pemeriksaan-alat/modality-list');
  }

  uploadPacs(request: any) {
    const { publicRuntimeConfig } = getConfig()
    const token = StorageService().get('accessToken')?.replace(/"/g, '');
    return axios.post(`${publicRuntimeConfig.env.apiv2Url}/file/dicom/upload-image`, request, {
      headers: {
        'x-token': token ?? '',
      },
    });
  }

  generateOriginal(request: IGenerateDicom) {
    return axios.post('/api/diagnostik/hasil-pemeriksaan-alat/dicom-generate-original', request)
  }

  deletePacs(request: IDeletePacs) {
    return axios.post('/api/diagnostik/hasil-pemeriksaan-alat/delete-pacs', request);
  }

  pdfNew(option: any) {
    return axios.post('/api/diagnostik/hasil-pemeriksaan-alat/pdf-new', option);
  }

  getOriginalImg(request: any) {
    return axios.post('/api/diagnostik/hasil-pemeriksaan-alat/get-original-img', request);
  }

  addPdf(request: any) {
    return axios.post('/api/diagnostik/hasil-pemeriksaan-alat/add-pdf', request);
  }

  generateDicomPdf(request: IGenerateDicom) {
    return axios.post('/api/diagnostik/hasil-pemeriksaan-alat/dicom-pdf', request);
  }
}
