import { ICreateVisualFieldResultsRequest, CreateVisualFieldResultsRequest } from "./create-visual-field-test-results-request";

export interface IUpdateVisualFieldResultsRequest extends ICreateVisualFieldResultsRequest {
  ID: string;
}

export class UpdateVisualFieldResultsRequest extends CreateVisualFieldResultsRequest {
  ID: string;

  constructor(request: IUpdateVisualFieldResultsRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IUpdateVisualFieldResultsRequest) {
    return new UpdateVisualFieldResultsRequest(json);
  }
}