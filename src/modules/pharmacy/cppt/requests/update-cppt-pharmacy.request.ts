import { ICreateCpptPharmacyRequest, CreateCpptPharmacyRequest } from "./create-cppt-pharmacy.request";

export interface IUpdateCpptPharmacyRequest extends ICreateCpptPharmacyRequest {
  ID: string;
}

export class UpdateCpptPharmacyRequest extends CreateCpptPharmacyRequest {
  ID: string;

  constructor(request: IUpdateCpptPharmacyRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IUpdateCpptPharmacyRequest) {
    return new UpdateCpptPharmacyRequest(json);
  }

  normalize(): any {
    const request = super.normalize();
    return {...request, ID: this.ID};
  }
}