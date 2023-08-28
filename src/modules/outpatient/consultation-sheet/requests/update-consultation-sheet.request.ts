import { CreateConsultationSheetRequest, ICreateConsultationSheetRequest } from "./create-consultation-sheet.request";

export interface IUpdateConsultationSheetRequest extends ICreateConsultationSheetRequest {
  id: string;
}

export class UpdateConsultationSheetRequest extends CreateConsultationSheetRequest {
  id: string;

  constructor(req: IUpdateConsultationSheetRequest) {
    super(req);
    this.id = req.id;
  }

  static createFromJson(json: IUpdateConsultationSheetRequest) {
    return new UpdateConsultationSheetRequest(json);
  }
}
