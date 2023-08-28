import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { IUpdateProofOfOutpatientServicesEmergencyRoomRequest } from "../requests";
import axios from "axios";
import { IBPRJUGDPdfRequest } from "../requests/proof-of-outpatient-services-emergency-room.request";

export class ProofOfOutpatientServicesEmergencyRoom extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: IAppRequest) {
    return axios.post('/api/ugd/bukti-pelayanan-rawat-jalan', option);
  }

  update(option: IUpdateProofOfOutpatientServicesEmergencyRoomRequest) {
    return axios.post('/api/ugd/bukti-pelayanan-rawat-jalan/process', option);
  }

  pdfNew(option: IBPRJUGDPdfRequest) {
    return axios.post('/api/ugd/bukti-pelayanan-rawat-jalan/pdf-new', option);
  }
}
