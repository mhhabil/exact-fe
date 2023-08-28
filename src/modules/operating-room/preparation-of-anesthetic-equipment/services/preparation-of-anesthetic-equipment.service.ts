import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { UpdatePreparationOfAnestheticEquipmentRequest } from "../requests";
import axios from "axios";

export class PreparationOfAnestheticEquipmentService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/ok/persiapan-peralatan-anestesi', option);
  }

  update(option: UpdatePreparationOfAnestheticEquipmentRequest) {
    return axios.post('/api/ok/persiapan-peralatan-anestesi/process', option);
  }

  pdfv3(option: any) {
    return axios.post('/api/ok/persiapan-peralatan-anestesi/pdf-v3', option);
  }
}
