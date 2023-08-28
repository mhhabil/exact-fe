import {
  CreateAssessmentVitalSignsRequest,
  ICreateAssessmentVitalSignsRequest,
} from '@modules/inpatient/assessment-vital-signs/requests/create-assessment-vital-signs.request';

export interface IDeleteAssessmentVitalSignsRequest extends ICreateAssessmentVitalSignsRequest {
  ID: string;
}

export class DeleteAssessmentVitalSignsRequest extends CreateAssessmentVitalSignsRequest {
  ID: string;

  constructor(request: IDeleteAssessmentVitalSignsRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IDeleteAssessmentVitalSignsRequest) {
    return new DeleteAssessmentVitalSignsRequest(json);
  }

  normalize() {
    const request = super.normalize();
    return {...request, ID: this.ID};
  }
}
