import { ICreateRetinaLaserActionReportRequest, CreateRetinaLaserActionReportRequest } from "./create-retina-laser-action-report-request";

export interface IUpdateRetinaLaserActionReportRequest extends ICreateRetinaLaserActionReportRequest {
  ID: string;
}

export class UpdateRetinaLaserActionReportRequest extends CreateRetinaLaserActionReportRequest {
  ID: string;

  constructor(request : IUpdateRetinaLaserActionReportRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IUpdateRetinaLaserActionReportRequest) {
    return new UpdateRetinaLaserActionReportRequest(json);
  }
}