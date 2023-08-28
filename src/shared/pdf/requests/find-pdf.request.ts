import { AppRequest, IAppRequest } from '@shared/request';
import {ITreatmentModel} from '@modules/site/patient-list/models';

export interface IFindPdfRequest {
  emr_id: string;
  form_name: string;
  job_name?: string;
}

export class FindPdfRequest {
  emr_id: string;
  form_name: string;
  job_name?: string;

  constructor(request: IFindPdfRequest) {
    this.emr_id = request.emr_id;
    this.form_name = request.form_name;
    this.job_name = request.job_name;
  }

  static createFromJson(json: IFindPdfRequest) {
    return new FindPdfRequest(json);
  }
}
