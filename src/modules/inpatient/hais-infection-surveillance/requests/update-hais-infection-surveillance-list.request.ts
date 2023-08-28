import { CreateHaisSurveillanceInfectionListRequest, ICreateHaisSurveillanceInfectionListRequest } from "./create-hais-infection-surveillance-list.request";

export interface IUpdateHaisSurveillanceInfectionListRequest extends ICreateHaisSurveillanceInfectionListRequest {
  id: string;
}

export class UpdateHaisSurveillanceInfectionListRequest extends CreateHaisSurveillanceInfectionListRequest {
  id: string;
  constructor(req: IUpdateHaisSurveillanceInfectionListRequest) {
    super(req);
    this.id = req.id;
  }

  static createFromJson(json: IUpdateHaisSurveillanceInfectionListRequest) {
    return new UpdateHaisSurveillanceInfectionListRequest(json);
  }
}
