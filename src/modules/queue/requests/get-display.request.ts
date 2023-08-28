import * as yup from 'yup';

export interface IGetDisplayRequest {
  company_code: string;
  place_id: string;
  station_id: string;
  service_type: string;
}

export class GetDisplayRequest {
  company_code: string;
  place_id: string;
  station_id: string;
  service_type: string;

  constructor(request: IGetDisplayRequest) {
    this.company_code = request.company_code;
    this.place_id = request.place_id;
    this.station_id = request.station_id;
    this.service_type = request.service_type;
  }

  static createFromJson(json: IGetDisplayRequest): GetDisplayRequest {
    return new GetDisplayRequest(json);
  }
}
