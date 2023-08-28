import { ICreateReportYagLaserRequest, CreateReportYagLaserRequest } from "./create-report-yag-laser-request";

export interface IUpdateReportYagLaserRequest extends ICreateReportYagLaserRequest {
  ID: string;
}

export class UpdateReportYagLaserRequest extends CreateReportYagLaserRequest {
  ID: string;

  constructor(request: IUpdateReportYagLaserRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IUpdateReportYagLaserRequest) {
    return new UpdateReportYagLaserRequest(json);
  }
}