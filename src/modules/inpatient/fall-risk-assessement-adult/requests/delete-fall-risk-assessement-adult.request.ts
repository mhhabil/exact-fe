import {
  CreateFallRiskAssessementAdultRequest,
  ICreateFallRiskAssessementAdultRequest,
} from '@modules/inpatient/fall-risk-assessement-adult/requests/create-fall-risk-assessement-adult.request';

export interface IDeleteFallRiskAssessementAdultRequest extends ICreateFallRiskAssessementAdultRequest {
  ID: string;
}

export class DeleteFallRiskAssessementAdultRequest extends CreateFallRiskAssessementAdultRequest {
  ID: string;

  constructor(request: IDeleteFallRiskAssessementAdultRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IDeleteFallRiskAssessementAdultRequest) {
    return new DeleteFallRiskAssessementAdultRequest(json);
  }

  normalize() {
    const request = super.normalize();
    return {...request, ID: this.ID};
  }
}
