export interface IReactSelect {
  label: string;
  value: string;
}
export interface IVerifyPinRequest {
  employeeId: IReactSelect;
  pin: string;
}

export class VerifyPinRequest {
  employeeId: IReactSelect;
  pin: string;

  constructor(request: IVerifyPinRequest) {
    this.employeeId = request.employeeId;
    this.pin = request.pin;
  }

  static createFromJson(json: IVerifyPinRequest) {
    return new VerifyPinRequest(json);
  }

  normalize() {
    const json: any = {};
    json.pin = this.pin;
    json['employee-id'] = this.employeeId.value;
    return json;
  }
}
