import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig();

export interface IHistoryRequest {
  limit?: number;
  offset?: number;
  company_code?: string;
  tgl_awal?: string;
  tgl_akhir?: string;
  id_dokter?: string;
  search?: string;
  search_regex?: string;
}

let date = new Date().toISOString()
date = date.substring(0, 10)

export class HistoryRequest {
  limit: number;
  offset: number;
  company_code?: string;
  tgl_awal: string;
  tgl_akhir: string;
  id_dokter?: string;
  search?: string;
  search_regex?: string;

  constructor(request: IHistoryRequest) {
    this.limit = (request.limit) ? +request.limit : 10;
    this.offset = (request.offset) ? +request.offset : 0;
    this.company_code = (request.company_code) ? request.company_code : '';
    this.tgl_awal = request.tgl_awal ?? date;
    this.tgl_akhir = request.tgl_akhir ?? date;
    this.id_dokter = request.id_dokter;
    this.search = request.search;
    this.search_regex = request.search_regex;
  }

  static createFromJson(json: IHistoryRequest) {
    return new HistoryRequest(json);
  }

  getCurrentPage(): number {
    return (this.offset + this.limit) / this.limit;
  }

  calculateTotalPage(totalRecord: number): number {
    return Math.ceil(totalRecord / this.limit);
  }
}

export interface IHistoryCPPTRequest {
  kode_cabang: string;
  nomor_mr: string;
}

export class HistoryCPPTRequest {
  kode_cabang: string;
  nomor_mr: string;

  constructor(request: IHistoryCPPTRequest) {
    this.kode_cabang = request.kode_cabang;
    this.nomor_mr = request.nomor_mr;
  }

  static createFromJson(json: IHistoryCPPTRequest) {
    return new HistoryCPPTRequest(json);
  }
}
