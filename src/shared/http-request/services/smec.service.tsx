import HttpService from './http.service';
import getConfig from 'next/config';

class SmecService extends HttpService {
  constructor(overridingConfig: any) {
    const { publicRuntimeConfig } = getConfig();
    overridingConfig.apiHost = publicRuntimeConfig.env?.simrsUrl;
    super(overridingConfig);
  }
}

export default SmecService;
