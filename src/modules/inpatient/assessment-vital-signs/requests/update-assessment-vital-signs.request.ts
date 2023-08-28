import {
  CreateAssessmentVitalSignsRequest,
  ICreateAssessmentVitalSignsRequest,
} from '@modules/inpatient/assessment-vital-signs/requests/create-assessment-vital-signs.request';

export interface IUpdateAssessmentVitalSignsRequest extends ICreateAssessmentVitalSignsRequest {
  ID: string;
  emr_id : string;
}

export class UpdateAssessmentVitalSignsRequest extends CreateAssessmentVitalSignsRequest {
  ID: string;
  emr_id : string;

  constructor(request: IUpdateAssessmentVitalSignsRequest) {
    super(request);
    this.ID = request.ID;
    this.emr_id = request.emr_id;
  }

  static createFromJson(json: IUpdateAssessmentVitalSignsRequest) {
    return new UpdateAssessmentVitalSignsRequest(json);
  }

  normalize() {
    const request = super.normalize();
    return {...request, id: this.ID, emr_id : this.emr_id};
  }
}
