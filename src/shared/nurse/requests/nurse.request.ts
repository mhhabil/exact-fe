export interface INurseRequest {
  kode_cabang: string;
  tipe_pasien: string;
}

export class NurseRequest {
  kode_cabang: string;
  tipe_pasien: string;

  constructor(req: INurseRequest) {
    this.kode_cabang = req.kode_cabang;
    this.tipe_pasien = req.tipe_pasien;
  }
}