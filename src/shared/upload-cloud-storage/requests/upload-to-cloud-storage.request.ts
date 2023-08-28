export interface IUploadImageCloudRequest {
  emr_id: string;
  component_id: string;
  form_name: string;
  image: any;
}

export class UploadImageCloudRequest {
  emr_id: string;
  component_id: string;
  form_name: string;
  image: any;

  constructor(request: IUploadImageCloudRequest) {
    this.emr_id = request.emr_id;
    this.component_id = request.component_id;
    this.form_name = request.form_name;
    this.image = request.image;
  }

  static createFromJson(json: IUploadImageCloudRequest) {
    return new UploadImageCloudRequest(json);
  }
}
