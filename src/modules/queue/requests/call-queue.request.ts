import * as yup from 'yup';

export interface ICallQueueRequest {
  service: string;
  location: string;
  position: string;
}

export class CallQueueRequest {
  service: string;
  location: string;
  position: string;

  constructor(request: ICallQueueRequest) {
    this.service = request.service;
    this.location = request.location;
    this.position = request.position;
  }

  static schema() {
    return yup.object().shape({
      service: yup.string(),
      location: yup.string(),
      position: yup.string(),
    });
  }

  static createFromJson(json: ICallQueueRequest): CallQueueRequest {
    return new CallQueueRequest(json);
  }
}
