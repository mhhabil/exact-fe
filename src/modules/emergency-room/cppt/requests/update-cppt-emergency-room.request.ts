import { CreateCpptEmergencyRoomRequest, ICreateCpptEmergencyRoomRequest } from "./create-cppt-emergency-room.request";

export interface IUpdateCpptEmergencyRoomRequest extends ICreateCpptEmergencyRoomRequest {
  ID: string;
}

export class UpdateCpptEmergencyRoomRequest extends CreateCpptEmergencyRoomRequest {
  ID: string;

  constructor(request: IUpdateCpptEmergencyRoomRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IUpdateCpptEmergencyRoomRequest) {
    return new UpdateCpptEmergencyRoomRequest(json);
  }

  normalize(): any {
    const request = super.normalize();
    return {...request, ID: this.ID};
  }
}
