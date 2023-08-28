import { CreateGivenMeds, IUpdateRecordsOfMedicationOnTime, UpdateGivenMeds } from "../requests";
import { ICreateGivenMeds, ICreateRecordsOfMedicationOnTime, IUpdateGivenMeds, IValidateRecords } from "../requests/update-records-of-medication-on-time.request";
import { ActionService } from "@src/shared/http-request";
import { IAppRequest } from "@src/shared/request";
import { ISortingRequest } from "@src/shared/request/requests/cppt-sort.request";
import axios from "axios";

export class RecordsOfMedicationOnTimeService extends ActionService {
  constructor(overridingConfig = {}) {
    super(overridingConfig);
  }

  show(option: ISortingRequest) {
    return axios.post('/api/farmasi/pemberian-obat', option);
  }

  create(option: ICreateRecordsOfMedicationOnTime) {
    return axios.post('/api/farmasi/pemberian-obat/process', option);
  }

  update(option:  IUpdateRecordsOfMedicationOnTime) {
    return axios.post('/api/farmasi/pemberian-obat/process', option);
  }

  delete(option: any) {
    return axios.post('/api/farmasi/pemberian-obat/delete', option);
  }

  pdfNew(option: any) {
    return axios.post('/api/farmasi/pemberian-obat/pdf-new', option);
  }

  validate(option: IValidateRecords) {
    return axios.post('/api/farmasi/pemberian-obat/validate', option);
  }

  getMeds(option: IAppRequest) {
    return axios.get(`/api/farmasi/pemberian-obat/meds?emr_id=${option.emr_id}`);
  }

  createMeds(option: ICreateGivenMeds) {
    return axios.post('/api/farmasi/pemberian-obat/meds/process', option);
  }

  updateMeds(option: IUpdateGivenMeds) {
    return axios.post('/api/farmasi/pemberian-obat/meds/process', option);
  }

  deleteMeds(option: any) {
    return axios.post('/api/farmasi/pemberian-obat/meds/delete', option);
  }

}
