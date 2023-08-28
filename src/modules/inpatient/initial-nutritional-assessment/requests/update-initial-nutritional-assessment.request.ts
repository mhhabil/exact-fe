import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';

export interface IUpdateInitialNutritionalAssessmentRequest extends IAppRequest {
  emr_id: string,
  nomor_mr: string,
  id_pelayanan: string,
  kode_cabang: string,
  tipe_pasien: string,
  jenis_pelayanan: string,
  id_dokter: string,
  tanggal: string,
  diagnosa_masuk: string,
  diet_awal: string,
  bb_anak: string,
  tb_anak: string,
  bb_0_12_anak: string,
  bb_1_13_anak: string,
  bb_ideal_anak: string,
  z_score: string,
  bb_dewasa: string,
  tb_dewasa: string,
  bb_ideal_dewasa: string,
  imt: string,
  status_gizi: string,
  status_gizi_buruk: string,
  status_gizi_kurang: string,
  status_gizi_baik: string,
  status_gizi_lebih: string,
  status_gizi_obesitas: string,
  gangguan_gastro: string,
  gangguan_gastro_ada: any,
  gangguan_gastro_ada_mual?: string,
  gangguan_gastro_ada_muntah?: string,
  gangguan_gastro_ada_diare?: string,
  gangguan_gastro_ada_konstipasi?: string,
  gangguan_gastro_ada_anoreksia?: string,
  keterangan_gizi  : string,
  perubahan_asupan : string,
  perubahan_asupan_ada : string,
  faktor_resiko: string,
  resiko_diabetes: string,
  resiko_hipertensi: string,
  resiko_luka_bakar: string,
  resiko_kanker: string,
  resiko_dislipidemia: string,
  resiko_gangguan_ginjal: string,
  resiko_gangguan_lain: string,
  resiko_gangguan_lain_teks: string,
  resiko_gangguan_jantung: string,
  resiko_stroke: string,
  resiko_gastritis: string,
  resiko_thyphoid: string,
  resiko_lainnya: string,
  resiko_lainnya_teks: string,
  diagnosa_gizi: string,
  intervensi: string,
  monitoring: string,
  evaluasi: string,
  nama_petugas_gizi: string,
  id_petugas_gizi: string,
  ttd_petugas_gizi: string,
}

export class UpdateInitialNutritionalAssessmentRequest extends AppRequest {
  tanggal: string;
  diagnosa_masuk: string;
  diet_awal: string;
  bb_anak: string;
  tb_anak: string;
  bb_0_12_anak: string;
  bb_1_13_anak: string;
  bb_ideal_anak: string;
  z_score: string;
  bb_dewasa: string;
  tb_dewasa: string;
  bb_ideal_dewasa: string;
  imt: string;
  status_gizi: string;
  status_gizi_buruk: string;
  status_gizi_kurang: string;
  status_gizi_baik: string;
  status_gizi_lebih: string;
  status_gizi_obesitas: string;
  gangguan_gastro: string;
  gangguan_gastro_ada: any;
  keterangan_gizi  : string;
  perubahan_asupan : string;
  perubahan_asupan_ada : string;
  faktor_resiko: string;
  resiko_diabetes: string;
  resiko_hipertensi: string;
  resiko_luka_bakar: string;
  resiko_kanker: string;
  resiko_dislipidemia: string;
  resiko_gangguan_ginjal: string;
  resiko_gangguan_lain: string;
  resiko_gangguan_lain_teks: string;
  resiko_gangguan_jantung: string;
  resiko_stroke: string;
  resiko_gastritis: string;
  resiko_thyphoid: string;
  resiko_lainnya: string;
  resiko_lainnya_teks: string;
  diagnosa_gizi: string;
  intervensi: string;
  monitoring: string;
  evaluasi: string;
  nama_petugas_gizi: string;
  id_petugas_gizi: string;
  ttd_petugas_gizi: string;

  constructor(request: IUpdateInitialNutritionalAssessmentRequest) {
    super(request);

    this.tanggal = request.tanggal;
    this.diagnosa_masuk = request.diagnosa_masuk;
    this.diet_awal = request.diet_awal;
    this.bb_anak = request.bb_anak;
    this.tb_anak = request.tb_anak;
    this.bb_0_12_anak = request.bb_0_12_anak;
    this.bb_1_13_anak = request.bb_1_13_anak;
    this.bb_ideal_anak = request.bb_ideal_anak;
    this.z_score = request.z_score;
    this.bb_dewasa = request.bb_dewasa;
    this.tb_dewasa = request.tb_dewasa;
    this.bb_ideal_dewasa = request.bb_ideal_dewasa;
    this.imt = request.imt;
    this.status_gizi = request.status_gizi;
    this.status_gizi_buruk = request.status_gizi_buruk;
    this.status_gizi_kurang = request.status_gizi_kurang;
    this.status_gizi_baik = request.status_gizi_baik;
    this.status_gizi_lebih = request.status_gizi_lebih;
    this.status_gizi_obesitas = request.status_gizi_obesitas;
    this.gangguan_gastro = request.gangguan_gastro;
    this.gangguan_gastro_ada = request.gangguan_gastro_ada;
    this.perubahan_asupan = request.perubahan_asupan;
    this.perubahan_asupan_ada = request.perubahan_asupan_ada;
    this.keterangan_gizi = request.keterangan_gizi;
    this.faktor_resiko = request.faktor_resiko;
    this.resiko_diabetes = request.resiko_diabetes;
    this.resiko_hipertensi = request.resiko_hipertensi;
    this.resiko_luka_bakar = request.resiko_luka_bakar;
    this.resiko_kanker = request.resiko_kanker;
    this.resiko_dislipidemia = request.resiko_dislipidemia;
    this.resiko_gangguan_ginjal = request.resiko_gangguan_ginjal;
    this.resiko_gangguan_lain = request.resiko_gangguan_lain;
    this.resiko_gangguan_lain_teks = request.resiko_gangguan_lain_teks;
    this.resiko_gangguan_jantung = request.resiko_gangguan_jantung;
    this.resiko_stroke = request.resiko_stroke;
    this.resiko_gastritis = request.resiko_gastritis;
    this.resiko_thyphoid = request.resiko_thyphoid;
    this.resiko_lainnya = request.resiko_lainnya;
    this.resiko_lainnya_teks = request.resiko_lainnya_teks;
    this.diagnosa_gizi = request.diagnosa_gizi;
    this.intervensi = request.intervensi;
    this.monitoring = request.monitoring;
    this.evaluasi = request.evaluasi;
    this.nama_petugas_gizi = request.nama_petugas_gizi;
    this.id_petugas_gizi = request.id_petugas_gizi;
    this.ttd_petugas_gizi = request.ttd_petugas_gizi
  }

  static schema() {
    return yup.object().shape({
      tanggal: yup.string(),
      diagnosa_masuk: yup.string(),
      diet_awal: yup.string(),
      bb_anak: yup.string(),
      tb_anak: yup.string(),
      bb_0_12_anak: yup.string(),
      bb_1_13_anak: yup.string(),
      bb_ideal_anak: yup.string(),
      imt: yup.string(),
      z_score: yup.string(),
      bb_dewasa: yup.string(),
      tb_dewasa: yup.string(),
      bb_ideal_dewasa: yup.string(),
      status_gizi_buruk: yup.string(),
      status_gizi_kurang: yup.string(),
      status_gizi_baik: yup.string(),
      status_gizi_lebih: yup.string(),
      status_gizi_obesitas: yup.string(),
      gangguan_gastro: yup.string(),
      gangguan_gastro_ada_mual: yup.string(),
      gangguan_gastro_ada_muntah: yup.string(),
      gangguan_gastro_ada_diare: yup.string(),
      gangguan_gastro_ada_konstipasi: yup.string(),
      gangguan_gastro_ada_anoreksia: yup.string(),
      keterangan : yup.string(),
      perubahan_asupan : yup.string(),
      perubahan_asupan_ada : yup.string(),
      faktor_resiko: yup.string(),
      resiko_diabetes: yup.string(),
      resiko_hipertensi: yup.string(),
      resiko_luka_bakar: yup.string(),
      resiko_kanker: yup.string(),
      resiko_dislipidemia: yup.string(),
      resiko_gangguan_ginjal: yup.string(),
      resiko_gangguan_lain: yup.string(),
      resiko_gangguan_lain_teks: yup.string(),
      resiko_gangguan_jantung: yup.string(),
      resiko_stroke: yup.string(),
      resiko_gastritis: yup.string(),
      resiko_thyphoid: yup.string(),
      resiko_lainnya: yup.string(),
      resiko_lainnya_teks: yup.string(),
      diagnosa_gizi: yup.string(),
      intervensi: yup.string(),
      monitoring: yup.string(),
      evaluasi: yup.string(),
      nama_petugas_gizi: yup.string(),
      id_petugas_gizi: yup.string(),
      ttd_petugas_gizi: yup.string(),
    });
  }

  static convertToNormalDatetime(date: any) {
    const d = new Date(date);
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }
  static createFromJson(json: IUpdateInitialNutritionalAssessmentRequest) {
    return new UpdateInitialNutritionalAssessmentRequest(json);
  }
}
