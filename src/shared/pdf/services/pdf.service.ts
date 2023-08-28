import { ActionService } from '@shared/http-request';
import { FindPdfRequest } from '@shared/pdf/requests/find-pdf.request';
import { StorageService } from '@src/shared/local-storage';
import axios from 'axios';
import getConfig from 'next/config';

export class PdfService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  find(option: FindPdfRequest) {
    const { publicRuntimeConfig } = getConfig()
    const token = StorageService().get('accessToken')?.replace(/"/g, '');
    return axios.post(`${publicRuntimeConfig.env.apiv2Url}/file/pdf/find`, option, {
      headers: {
        'x-token': token ?? '',
      },
    });
  }
}
