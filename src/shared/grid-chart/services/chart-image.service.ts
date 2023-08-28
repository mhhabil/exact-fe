import { ActionService } from '@shared/http-request';
import { IUploadImageRequest } from '@shared/grid-chart/requests';
import axios from 'axios';

export class ChartImageService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  uploadImage(request: IUploadImageRequest) {
    return axios.post('/api/upload/image-cloud', request)
  }
}
