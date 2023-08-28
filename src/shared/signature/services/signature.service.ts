import { IUploadImageRequest, IVerifyPinRequest } from '@shared/signature/requests';
import { ActionService } from '@shared/http-request';
import axios from 'axios';

export class SignatureService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  uploadImage(request: IUploadImageRequest) {
    return axios.post('/api/upload/image', request)
  }

  verifyPin(option: IVerifyPinRequest) {
    return axios.post('/api/account/verify-pin', option);
  }

  verifyTanpaPin(option: IVerifyPinRequest) {
    return axios.post('/api/account/tanpa-verify-pin', option);
  }
}
