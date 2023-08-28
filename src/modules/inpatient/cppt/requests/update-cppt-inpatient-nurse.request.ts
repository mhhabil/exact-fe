import { CreateCpptInpatientNurseRequest, ICreateCpptInpatientNurseRequest } from "./create-cppt-inpatient-nurse.request";

export interface IUpdateCpptInpatientNurseRequest extends ICreateCpptInpatientNurseRequest {
  ID: string;
}

export class UpdateCpptInpatientNurseRequest extends CreateCpptInpatientNurseRequest {
  ID: string;

  constructor(req: IUpdateCpptInpatientNurseRequest) {
    super(req);
    this.ID = req.ID;
  }

  static createFromJson(json: IUpdateCpptInpatientNurseRequest) {
    return new UpdateCpptInpatientNurseRequest(json);
  }

  normalize() {
    const request = super.normalize();
    return { ...request, ID: this.ID };
  }
}
