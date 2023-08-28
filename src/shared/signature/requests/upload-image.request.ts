import { AppRequest, IAppRequest } from '@shared/request';

export interface IUploadImageRequest extends IAppRequest {
  form_name?: string;
  component_id?: string;
  image: string;
}

export class UploadImageRequest extends AppRequest {
  form_name?: string;
  component_id?: string;
  image: string;

  constructor(request: IUploadImageRequest) {
    super(request);
    this.component_id = request.component_id
    this.form_name = request.form_name;
    this.image = request.image;
  }

  static createFromJson(json: IUploadImageRequest) {
    return new UploadImageRequest(json);
  }
}

export interface IUploadImageGeneral {
  component_id: string;
  company_code: string;
  image: string;
}

export class UploadImageGeneral {
  component_id: string;
  company_code: string;
  image: string;

  constructor(req: IUploadImageGeneral) {
    this.component_id = req.component_id;
    this.company_code = req.company_code;
    this.image = req.image;
  }

  static createFromJson(json: IUploadImageGeneral) {
    return new UploadImageGeneral(json);
  }
}
