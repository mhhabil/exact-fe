import { ICreateFundusPhotoExaminationRequest, CreateFundusPhotoExaminationRequest } from "./create-fundus-photo-examination.request";

export interface IUpdateFundusPhotoExaminationRequest extends ICreateFundusPhotoExaminationRequest {
  ID: string;
}

export class UpdateFundusPhotoExaminationRequest extends CreateFundusPhotoExaminationRequest {
  ID: string;

  constructor(request: IUpdateFundusPhotoExaminationRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IUpdateFundusPhotoExaminationRequest) {
    return new UpdateFundusPhotoExaminationRequest(json);
  }
}