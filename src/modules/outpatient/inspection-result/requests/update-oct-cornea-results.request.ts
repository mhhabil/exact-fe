import { ICreateOctCorneaResultsRequest, CreateOctCorneaResultsRequest } from "./create-oct-cornea-results.request";

export interface IUpdateOctCorneaResultsRequest extends ICreateOctCorneaResultsRequest {
    ID: string;
}

export class UpdateOctCorneaResultsRequest extends CreateOctCorneaResultsRequest {
    ID: string;

    constructor(request: IUpdateOctCorneaResultsRequest) {
      super(request);
      this.ID = request.ID;
    }

    static createFromJson(json: IUpdateOctCorneaResultsRequest) {
      return new UpdateOctCorneaResultsRequest(json);
    }
}
