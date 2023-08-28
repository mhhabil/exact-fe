import { CreateCpptNutritionRequest, ICreateCpptNutritionRequest } from "./create-cppt-nutrition.request";

export interface IUpdateCpptNutritionRequest extends ICreateCpptNutritionRequest {
  ID: string;
}

export class UpdateCpptNutritionRequest extends CreateCpptNutritionRequest {
  ID: string;

  constructor(req: IUpdateCpptNutritionRequest) {
    super(req);
    this.ID = req.ID;
  }

  static createFromJson(json: IUpdateCpptNutritionRequest) {
    return new UpdateCpptNutritionRequest(json);
  }

  normalize() {
    const request = super.normalize();
    return {
      ...request,
      ID: this.ID,
    }
  }
}
