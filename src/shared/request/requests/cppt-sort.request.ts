import { AppRequest, IAppRequest } from "./app.request";

export interface ISortingRequest extends IAppRequest {
  sort?: string;
}

export class SortingRequest extends AppRequest {
  sort?: string;

  constructor(req: ISortingRequest) {
    super(req);
    this.sort = req.sort;
  }

  static createFromJson(json: ISortingRequest) {
    return new SortingRequest(json);
  }
}
