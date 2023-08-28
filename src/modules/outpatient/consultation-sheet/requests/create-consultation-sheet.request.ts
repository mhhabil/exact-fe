import { DateTimeConverter } from "@src/shared/datetime-converter";
import { AppRequest, IAppRequest } from "@src/shared/request";

export interface ICreateConsultationSheetRequest extends IAppRequest {
  tab: string;
  rumah_sakit_tujuan: string;
  dokter_konsul_eksternal: string;
  tanggal_konsul: string;
  diagnosa: string;
  terapi: string;
  yth_dokter_konsul_id: string;
  status_konsultasi: string;
  'aturan-pakai': Array<string>;
  catatan: Array<string>;
  jumlah: Array<string>;
  'nama-obat': Array<string>;
  ttd_dokter_konsultasi: string;
  id_dokter_konsultasi: string;
  tanggal_balas: string;
  anjuran: string;
  yth_dokter_balas_id: string;
  ttd_dokter_balas_konsultasi: string;
  id_dokter_balas_konsultasi: string;
  cppt_id: string;
}

export class CreateConsultationSheetRequest extends AppRequest {
  tab: string;
  rumah_sakit_tujuan: string;
  dokter_konsul_eksternal: string;
  tanggal_konsul: string;
  diagnosa: string;
  terapi: string;
  yth_dokter_konsul_id: string;
  status_konsultasi: string;
  'aturan-pakai': Array<string>;
  catatan: Array<string>;
  jumlah: Array<string>;
  'nama-obat': Array<string>;
  ttd_dokter_konsultasi: string;
  id_dokter_konsultasi: string;
  tanggal_balas: string;
  anjuran: string;
  yth_dokter_balas_id: string;
  ttd_dokter_balas_konsultasi: string;
  id_dokter_balas_konsultasi: string;
  cppt_id: string;

  constructor(req: ICreateConsultationSheetRequest) {
    super(req);
    this.tab = req.tab;
    this.rumah_sakit_tujuan = req.rumah_sakit_tujuan;
    this.dokter_konsul_eksternal = req.dokter_konsul_eksternal;
    this.tanggal_konsul = req.tanggal_konsul ? DateTimeConverter.convertToNormalDatetime(req.tanggal_konsul) : '';
    this.diagnosa = req.diagnosa;
    this.terapi = req.terapi;
    this.yth_dokter_konsul_id = req.yth_dokter_konsul_id;
    this.status_konsultasi = req.status_konsultasi;
    this["aturan-pakai"] = req["aturan-pakai"] && Array.isArray(req["aturan-pakai"]) ? req["aturan-pakai"] : [];
    this.catatan = req.catatan && Array.isArray(req.catatan) ? req.catatan : [];
    this.jumlah = req.jumlah && Array.isArray(req.jumlah) ? req.jumlah : [];
    this["nama-obat"] = req["nama-obat"] && Array.isArray(req["nama-obat"]) ? req["nama-obat"] : [];
    this.ttd_dokter_konsultasi = req.ttd_dokter_konsultasi;
    this.id_dokter_konsultasi = req.id_dokter_konsultasi;
    this.tanggal_balas = req.tanggal_balas ? DateTimeConverter.convertToNormalDatetime(req.tanggal_balas) : '';
    this.anjuran = req.anjuran;
    this.yth_dokter_balas_id = req.yth_dokter_balas_id;
    this.ttd_dokter_balas_konsultasi = req.ttd_dokter_balas_konsultasi;
    this.id_dokter_balas_konsultasi = req.id_dokter_balas_konsultasi;
    this.cppt_id = req.cppt_id;
  }

  static createFromJson(json: ICreateConsultationSheetRequest) {
    return new CreateConsultationSheetRequest(json);
  }
}

export interface IArrayPrescription {
  'nama-obat': Array<string>;
  jumlah: Array<string>;
  'aturan-pakai': Array<string>;
  catatan: Array<string>;
}
export class ArrayPrescription {
  'nama-obat': Array<string>;
  jumlah: Array<string>;
  'aturan-pakai': Array<string>;
  catatan: Array<string>;

  constructor(request: IArrayPrescription) {
    this["nama-obat"] = request["nama-obat"];
    this.jumlah = request.jumlah;
    this["aturan-pakai"] = request["aturan-pakai"];
    this.catatan = request.catatan;
  }

  static createFromJson(json: IArrayPrescription) {
    return new ArrayPrescription(json);
  }

  static createFromForm(formValue: any): IArrayPrescription | undefined {
    if (formValue && formValue && Array.isArray(formValue)) {
      let meds_name: Array<string> = [];
      let total: Array<string> = [];
      let how_to_use: Array<string> = [];
      let notes: Array<string> = [];
      for (let i = 0; i < formValue.length; i++) {
        meds_name = [...meds_name, formValue[i].meds_name.value];
        total = [...total, formValue[i].total];
        how_to_use = [...how_to_use, formValue[i].how_to_use.id];
        notes = [...notes, formValue[i].notes];
      }
      return ArrayPrescription.createFromJson({ 'nama-obat': meds_name, jumlah: total, 'aturan-pakai': how_to_use, catatan: notes });
    }
    return undefined;
  }
}
