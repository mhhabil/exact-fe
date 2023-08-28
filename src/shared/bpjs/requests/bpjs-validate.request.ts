export interface IBPJSValidateRequest {
  branch_code: string;
  param: string;
  employee_id: string;
}

export class BPJSValidateRequest {
  branch_code: string;
  param: string;
  employee_id: string;

  constructor(req: IBPJSValidateRequest) {
    this.branch_code = req.branch_code;
    this.param = req.param;
    this.employee_id = req.employee_id;
  }

  static createFromJson(json: IBPJSValidateRequest) {
    return new BPJSValidateRequest(json);
  }
}
