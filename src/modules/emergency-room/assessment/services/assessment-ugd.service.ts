import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { UpdateAssessmentUgdRequest } from "../requests";
import axios from "axios";

export class AssessmentUgdService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/ugd/assessment-ugd', option);
  }

  update(option: UpdateAssessmentUgdRequest) {
    return axios.post('/api/ugd/assessment-ugd/process', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/ugd/assessment-ugd/pdf-v3', option);
  }
}
