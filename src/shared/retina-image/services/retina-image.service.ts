import { ActionService } from '@shared/http-request';
import { IUploadImageRequest } from '@shared/retina-image/requests';
import axios from 'axios';

export class RetinaImageService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  uploadImage(request: IUploadImageRequest) {
    return axios.post('/api/upload/image', request)
  }
}
