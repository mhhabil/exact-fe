import * as yup from 'yup';
import { AppRequest, IAppRequest } from "@src/shared/request";

export interface IUpdateInpatientFallRiskAssessmentChildren extends IAppRequest {
  waktu_pengkajian: string;
  usia: string;
  jenis_kelamin: string;
  diagnosa: string;
  gangguan_kognitif: string;
  faktor_lingkungan: string;
  respon_operasi: String;
  penggunaan_obat: String;
  keterangan_waktu_pengkajian: String;
  total_skor: String;
  resiko_jatuh: string;
  resiko_jatuh_keterangan:string;
  ttd_petugas: string;
  petugas: string;
  unit_pengkaji: string;
}

export class UpdateInpatientFallRiskAssessmentChildrenRequest extends AppRequest {
  waktu_pengkajian: string;
  usia: string;
  jenis_kelamin: string;
  diagnosa: string;
  gangguan_kognitif: string;
  faktor_lingkungan: string;
  respon_operasi: String;
  penggunaan_obat: String;
  keterangan_waktu_pengkajian: String;
  total_skor: String;
  resiko_jatuh: string;
  resiko_jatuh_keterangan:string;
  ttd_petugas: string;
  petugas: string;
  unit_pengkaji: string;

  constructor(request: IUpdateInpatientFallRiskAssessmentChildren) {
    super(request);
    this.waktu_pengkajian = request.waktu_pengkajian;
    this.usia = request.usia;
    this.jenis_kelamin = request.jenis_kelamin;
    this.diagnosa = request.diagnosa;
    this.gangguan_kognitif = request.gangguan_kognitif;
    this.faktor_lingkungan = request.faktor_lingkungan;
    this.respon_operasi = request.respon_operasi;
    this.penggunaan_obat = request.penggunaan_obat;
    this.keterangan_waktu_pengkajian = request.keterangan_waktu_pengkajian;
    this.total_skor = request.total_skor;
    this.resiko_jatuh = request.resiko_jatuh;
    this.resiko_jatuh_keterangan = request.resiko_jatuh_keterangan;
    this.ttd_petugas = request.ttd_petugas;
    this.petugas = request.petugas;
    this.unit_pengkaji = request.unit_pengkaji;

  }

  static schema() {
    return yup.object().shape({
      emr_id: yup.string(),
      nomor_mr: yup.string(),
      id_pelayanan: yup.string(),
      kode_cabang: yup.string(),
      tipe_pasien: yup.string(),
      jenis_pelayanan: yup.string(),
      id_dokter: yup.string(),
      waktu_pengkajian: yup.string(),
      usia:yup.string(),
      jenis_kelamin:yup.string(),
      diagnosa: yup.string(),
      gangguan_kognitif: yup.string(),
      faktor_lingkungan: yup.string(),
      respon_operasi: yup.string(),
      penggunaan_obat: yup.string(),
      keterangan_waktu_pengkajian: yup.string(),
      total_skor: yup.string(),
      resiko_jatuh: yup.string(),
      resiko_jatuh_keterangan: yup.string(),
      ttd_petugas: yup.string(),
      petugas: yup.string(),
      unit_pengkaji: yup.string(),
    })
  }

  static convertToNormalDatetime(date: any) {
    const d = new Date(date);
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }
  static createFromJson(json: IUpdateInpatientFallRiskAssessmentChildren) {
    return new UpdateInpatientFallRiskAssessmentChildrenRequest(json);
  }

}
