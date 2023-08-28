export interface ITreatmentFilterRequest {
  kode_cabang: string;
  nomor_mr: string;
}

export class TreatmentFilterRequest {
  kode_cabang: string;
  nomor_mr: string;

  constructor(request: ITreatmentFilterRequest) {
    this.kode_cabang = request.kode_cabang;
    this.nomor_mr = request.nomor_mr;
  }

  static createFromJson(json: ITreatmentFilterRequest) {
    return new TreatmentFilterRequest(json);
  }
}
