import { StorageService } from '@src/shared/local-storage';

const companyCode = StorageService().get('companyCode')?.replace(/"/g, '');

const normalDate = () => {
  const d = new Date();
  const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`
  return dateFormat;
}
export interface IPatientFilterRequest {
  kode_cabang?: string;
  limit?: number;
  offset?: number;
  tgl_mulai?: string;
  tgl_selesai?: string;
  isDokter?: number;
  tipe_pasien?: string;
  isRM?: number;
  search?: string;
  search_regex?: string;
  isOther?: number;
}

export class PatientFilterRequest {
  kode_cabang: string;
  limit: number;
  offset: number;
  tgl_mulai: string;
  tgl_selesai: string;
  tipe_pasien: string;
  isDokter: number;
  isRM: number;
  search?: string;
  search_regex?: string;
  isOther: number;

  constructor(request: IPatientFilterRequest) {
    this.kode_cabang = request.kode_cabang ? request.kode_cabang : companyCode ? companyCode : '';
    this.limit = (request.limit) ? +request.limit : 25;
    this.offset = (request.offset) ? +request.offset : 0;
    this.tgl_mulai = request.tgl_mulai ?? normalDate();
    this.tgl_selesai = request.tgl_selesai ?? normalDate();
    this.tipe_pasien = request.tipe_pasien ?? '';
    this.isDokter = request.isDokter ?? 0;
    this.isRM = request.isRM ?? 1;
    this.search = request.search;
    this.search_regex = request.search_regex;
    this.isOther = request.isOther ?? 1;
  }

  getCurrentPage(): number {
    return (this.offset + this.limit) / this.limit;
  }

  calculateTotalPage(totalRecord: number): number {
    return Math.ceil(totalRecord / this.limit);
  }

  static createFromJson(json: IPatientFilterRequest) {
    return new PatientFilterRequest(json);
  }
}
