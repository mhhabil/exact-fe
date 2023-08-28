import { ICreateBiometricExamRequest, CreateBiometricExamRequest } from './create-biometric-exam.request';

export interface IUpdateBiometricRequest extends ICreateBiometricExamRequest {
  ID: string;
}

export class UpdateBiometricRequest extends CreateBiometricExamRequest {
  ID: string;

  constructor(request: IUpdateBiometricRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IUpdateBiometricRequest) {
    return new UpdateBiometricRequest(json);
  }
}
