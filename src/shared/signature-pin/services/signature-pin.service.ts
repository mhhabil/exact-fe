import { ActionService } from '@shared/http-request';
import { IUploadImagePinRequest } from '../requests';
import axios from 'axios';

export class SignaturePinService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  uploadImage(request: IUploadImagePinRequest) {
    return axios.post('/api/upload/image-pin', request)
  }
}
