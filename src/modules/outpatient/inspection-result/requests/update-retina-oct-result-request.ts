import { ICreateRetinaOCTResultRequest, CreateRetinaOCTResultRequest } from "./create-retina-oct-result-request";

export interface IUpdateRetinaOCTResultRequest extends ICreateRetinaOCTResultRequest {
  ID: string;
}

export class UpdateRetinaOCTResultRequest extends CreateRetinaOCTResultRequest {
  ID: string;

  constructor(request: IUpdateRetinaOCTResultRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IUpdateRetinaOCTResultRequest) {
    return new UpdateRetinaOCTResultRequest(json);
  }
}