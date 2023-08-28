interface IMetadata {
  code: number;
  message: string;
  branch_name: string;
  branch_code: string;
}

class Metadata {
  code: number;
  message: string;
  branch_name: string;
  branch_code: string;

  constructor(req: IMetadata) {
    this.code = req.code;
    this.message = req.message;
    this.branch_name = req.branch_name;
    this.branch_code = req.branch_code;
  }
}

interface IResponseValidate {
  url: string;
}

class ResponseValidate {
  url: string;

  constructor(req: IResponseValidate) {
    this.url = req.url;
  }
}

export interface IBPJSValidateModel {
  metadata: IMetadata;
  response?: IResponseValidate;
}

export class BPJSValidateModel {
  metadata: IMetadata;
  response?: IResponseValidate;

  constructor(model: IBPJSValidateModel) {
    this.metadata = model.metadata;
    if (model.response) {
      this.response = model.response;
    }
  }
}
