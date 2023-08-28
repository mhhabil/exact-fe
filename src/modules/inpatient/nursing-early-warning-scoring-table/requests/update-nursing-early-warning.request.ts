import { CreateNursingEarlyWarningRequest, ICreateNursingEarlyWarning } from "./create-nursing-early-warning.request";

export interface IUpdateNursingEarlyWarningRequest extends ICreateNursingEarlyWarning {
  id: string;
}

export class UpdateNursingEarlyWarningRequest extends CreateNursingEarlyWarningRequest {
  id: string;

  constructor(req: IUpdateNursingEarlyWarningRequest) {
    super(req);
    this.id = req.id;
  }

  static createFromJson(json: IUpdateNursingEarlyWarningRequest) {
    return new UpdateNursingEarlyWarningRequest(json);
  }
}
