import {
  CreateFallRiskAssessementChildrenRequest,
  ICreateFallRiskAssessementChildrenRequest,
} from '@modules/inpatient/fall-risk-assessment-children/requests/create-fall-risk-assessement-children.request';

export interface IDeleteFallRiskAssessementChildrenRequest extends ICreateFallRiskAssessementChildrenRequest {
  ID: string;
}

export class DeleteFallRiskAssessementChildrenRequest extends CreateFallRiskAssessementChildrenRequest {
  ID: string;

  constructor(request: IDeleteFallRiskAssessementChildrenRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IDeleteFallRiskAssessementChildrenRequest) {
    return new DeleteFallRiskAssessementChildrenRequest(json);
  }

  normalize() {
    const request = super.normalize();
    return {...request, ID: this.ID};
  }
}
