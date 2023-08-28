import { ICreatePupilOCTResultRequest, CreatePupilOCTResultRequest } from "./create-pupil-oct-result-request";

export interface IUpdatePupilOCTResultRequest extends ICreatePupilOCTResultRequest {
  ID: string;
}

export class UpdatePupilOCTResultRequest extends CreatePupilOCTResultRequest {
  ID: string;

  constructor(request: IUpdatePupilOCTResultRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IUpdatePupilOCTResultRequest) {
    return new UpdatePupilOCTResultRequest(json);
  }
}