import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { IUpdateApprovalOrRefusalOfAnestheticActionRequest } from "../requests/approval-or-refusal-of-anesthetic-action-request";
import axios from "axios";
import { IPdfApprovalOrRefusalOfAnestheticActionRequest } from "../requests/pdf-approval-or-refusal-of-anesthetic-action-request";

export class ApprovalOrRefusalOfAnestheticActionService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/rawat-inap/persetujuan-atau-penolakan-tindakan-anestesi', option);
  }

  update(option: IUpdateApprovalOrRefusalOfAnestheticActionRequest) {
    return axios.post('/api/rawat-inap/persetujuan-atau-penolakan-tindakan-anestesi/process', option);
  }

  pdfNew(params: IPdfApprovalOrRefusalOfAnestheticActionRequest) {
    return axios.post('/api/rawat-inap/persetujuan-atau-penolakan-tindakan-anestesi/pdf-new', params);
  }
}
