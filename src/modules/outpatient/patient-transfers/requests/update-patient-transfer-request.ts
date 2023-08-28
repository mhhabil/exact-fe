import { ICreatePatientTransferRequest, CreatePatientTransferRequest } from "./create-patient-transfer-request";

export interface IUpdatePatientTransferRequest extends ICreatePatientTransferRequest {
    id: string;
}

export class UpdatePatientTransferRequest extends CreatePatientTransferRequest {
    id: string;

    constructor(request: IUpdatePatientTransferRequest) {
      super(request);
      this.id = request.id;
    }

    static createFromJson(json: IUpdatePatientTransferRequest) {
      return new UpdatePatientTransferRequest(json);
    }
}
