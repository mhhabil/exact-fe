import { IPDFDashFilter, PDFDashFilter } from '../requests';
import { ActionService } from '@shared/http-request';
import { StorageService } from '@src/shared/local-storage';
import axios from 'axios';

import getConfig from 'next/config'

export class PDFDashboardService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  async show(option: IPDFDashFilter) {
    const { publicRuntimeConfig } = getConfig()
    const params = PDFDashFilter.createFromJson(option);
    const token = StorageService().get('accessToken')?.replace(/"/g, '');
    const response = await axios.post(`${publicRuntimeConfig.env.apiv2Url}/file/pdf/dash-item`, option, {
      headers: {
        'x-token': token ?? '',
      },
    });
    response.data.data = {
      ...response.data.data,
      currentPage: params.getCurrentPage(),
      totalPage: params.calculateTotalPage(response.data.data.total),
    }

    return {
      data: (response.data) ? response.data.data : {},
    };
  }

  printSep(option: any) {
    return axios.post('/api/site/get-sep-filename', option);
  }
}
