import {
  CreateFallRiskAssessementAdultRequest,
  ICreateFallRiskAssessementAdultRequest,
} from '@modules/inpatient/fall-risk-assessement-adult/requests/create-fall-risk-assessement-adult.request';

export interface IUpdateFallRiskAssessementAdultRequest extends ICreateFallRiskAssessementAdultRequest {
  ID: string;
  emr_id : string;
}

export class UpdateFallRiskAssessementAdultRequest extends CreateFallRiskAssessementAdultRequest {
  ID: string;
  emr_id : string;

  constructor(request: IUpdateFallRiskAssessementAdultRequest) {
    super(request);
    this.ID = request.ID;
    this.emr_id = request.emr_id;
  }

  static createFromJson(json: IUpdateFallRiskAssessementAdultRequest) {
    return new UpdateFallRiskAssessementAdultRequest(json);
  }

  normalize() {
    const request = super.normalize();
    return {...request, id: this.ID, emr_id : this.emr_id};
  }
}
