import {
  CreateFallRiskAssessementChildrenRequest,
  ICreateFallRiskAssessementChildrenRequest,
} from '@modules/inpatient/fall-risk-assessment-children/requests/create-fall-risk-assessement-children.request';

export interface IUpdateFallRiskAssessementChildrenRequest extends ICreateFallRiskAssessementChildrenRequest {
  ID: string;
  emr_id : string;
}

export class UpdateFallRiskAssessementChildrenRequest extends CreateFallRiskAssessementChildrenRequest {
  ID: string;
  emr_id : string;

  constructor(request: IUpdateFallRiskAssessementChildrenRequest) {
    super(request);
    this.ID = request.ID;
    this.emr_id = request.emr_id;
  }

  static createFromJson(json: IUpdateFallRiskAssessementChildrenRequest) {
    return new UpdateFallRiskAssessementChildrenRequest(json);
  }

  normalize() {
    const request = super.normalize();
    return {...request, id: this.ID, emr_id : this.emr_id};
  }
}
