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
    this.form_name = request.form_name;
    this.component_id = request.component_id;
    this.image = request.image;
  }

  static createFromJson(json: IUploadImageRequest) {
    return new UploadImageRequest(json);
  }
}
