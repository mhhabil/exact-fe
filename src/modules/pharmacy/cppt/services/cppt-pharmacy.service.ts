import { ActionService } from "@src/shared/http-request";
import { CreateCpptPharmacyRequest } from "../requests/create-cppt-pharmacy.request";
import { IAppRequest } from "@src/shared/request";
import { IRootPDFRequest } from "@src/shared/request/requests/cppt-pdf.request";
import { ISortingRequest } from "@src/shared/request/requests/cppt-sort.request";
import { UpdateCpptPharmacyRequest } from "../requests/update-cppt-pharmacy.request";
import { ValidateCpptPharmacyRequest } from "../requests/validate-cppt-pharmacy.request";
import axios from "axios";

export class CpptPharmacyService extends ActionService {
  constructor(config = {}) {
    super(config);
  }

  show(option: ISortingRequest) {
    return axios.post('/api/farmasi/cppt/item', option);
  }

  showDay(option: ISortingRequest) {
    return axios.post('/api/farmasi/cppt/item-day', option);
  }

  create(option: CreateCpptPharmacyRequest) {
    return axios.post('/api/farmasi/cppt/process', option);
  }

  update(option: UpdateCpptPharmacyRequest) {
    return axios.post('/api/farmasi/cppt/process', option);
  }

  view(option: any) {
    return axios.post('/api/farmasi/cppt/view', option);
  }

  delete(option: any) {
    return axios.post('/api/farmasi/cppt/delete', option);
  }

  pdfNew(option: IRootPDFRequest) {
    return axios.post('/api/farmasi/cppt/pdf-new', option);
  }

  validate(option: ValidateCpptPharmacyRequest) {
    return axios.post('/api/farmasi/cppt/validate_process', option);
  }
}