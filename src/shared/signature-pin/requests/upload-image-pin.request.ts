export interface IUploadImagePinRequest {
  image: any;
}

export class UploadImagePinRequest {
  image: any;

  constructor(request: IUploadImagePinRequest) {
    this.image = request.image;
  }

  static createFromJson(json: IUploadImagePinRequest) {
    return new UploadImagePinRequest(json);
  }
}
