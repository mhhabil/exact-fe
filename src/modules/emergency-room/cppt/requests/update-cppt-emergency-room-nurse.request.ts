import { CreateCpptEmergencyRoomNurseRequest, ICreateCpptEmergencyRoomNurseRequest } from "./create-cppt-emergency-room-nurse.request";

export interface IUpdateCpptEmergencyRoomNurseRequest extends ICreateCpptEmergencyRoomNurseRequest {
  ID: string;
}

export class UpdateCpptEmergencyRoomNurseRequest extends CreateCpptEmergencyRoomNurseRequest {
  ID: string;

  constructor(request: IUpdateCpptEmergencyRoomNurseRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IUpdateCpptEmergencyRoomNurseRequest) {
    return new UpdateCpptEmergencyRoomNurseRequest(json);
  }

  normalize() {
    const request = super.normalize();
    return {...request, ID: this.ID};
  }
}
