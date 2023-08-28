import { ActionService } from '@shared/http-request';
import { IUploadImageCloudRequest } from '../requests';
import { UploadImageGeneral } from '@shared/signature/requests';
import axios from 'axios';

export class UploadImageCloudService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  uploadImageCloud(request: IUploadImageCloudRequest) {
    return axios.post('/api/upload/image-cloud', request);
  }

  uploadImage(request: UploadImageGeneral) {
    return axios.post('/api/upload/image', request);
  }
}
