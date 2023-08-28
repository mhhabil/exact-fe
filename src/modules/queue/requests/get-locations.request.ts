export interface IGetLocationRequest {
  company_code?: string;
  status?: number;
  service_type: string;
}

export class GetLocationsRequest {
  company_code?: string;
  status?: number;
  service_type: string;

  constructor(request: IGetLocationRequest) {
    this.company_code = request.company_code;
    this.status = (request.status) ?? 2;
    this.service_type = request.service_type;
  }

  static createFromJson(json: IGetLocationRequest) {
    return new GetLocationsRequest(json);
  }
}
