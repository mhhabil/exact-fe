import { CreateCpptInpatientDoctorRequest, ICreateCpptInpatientDoctorRequest } from "./create-cppt-inpatient-doctor.request";

export interface IUpdateCpptInpatientDoctorRequest extends ICreateCpptInpatientDoctorRequest {
  ID: string;
}

export class UpdateCpptInpatientDoctorRequest extends CreateCpptInpatientDoctorRequest {
  ID: string;

  constructor(req: IUpdateCpptInpatientDoctorRequest) {
    super(req);
    this.ID = req.ID;
  }

  static createFromJson(json: IUpdateCpptInpatientDoctorRequest) {
    return new UpdateCpptInpatientDoctorRequest(json);
  }

  normalize() {
    const request = super.normalize();
    return { ...request, ID: this.ID };
  }
}
