export interface IDoctorRequest {
  kode_cabang: string;
  tipe_pasien: string;
}

export class DoctorRequest {
  kode_cabang: string;
  tipe_pasien: string;

  constructor(req: IDoctorRequest) {
    this.kode_cabang = req.kode_cabang;
    this.tipe_pasien = req.tipe_pasien;
  }
}
