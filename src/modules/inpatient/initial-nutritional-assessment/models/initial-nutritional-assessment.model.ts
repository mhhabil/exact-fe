import { DataModel, IDataModel } from '@shared/model';

export interface IInitialNutritionalAssessmentForm {
  Tanggal: string;
  Diagnosa_Masuk: string;
  Diet_Awal: string;
  Bb_Anak: string;
  Tb_Anak: string;
  Bb_0_12_Anak: string;
  Bb_1_13_Anak: string;
  Bb_Ideal_Anak: string;
  Z_Score: string;
  Bb_Dewasa: string;
  Tb_Dewasa: string;
  Bb_Ideal_Dewasa: string;
  IMT: string;
  Status_Gizi: string;
  Status_Gizi_Buruk: string;
  Status_Gizi_Kurang: string;
  Status_Gizi_Baik: string;
  Status_Gizi_Lebih: string;
  Status_Gizi_Obesitas: string;
  Gangguan_Gastro: string;
  Gangguan_Gastro_Ada: any;
  Keterangan_Gizi : string;
  Perubahan_Asupan : string;
  Perubahan_Asupan_Ada : string;
  Faktor_Resiko: string;
  Resiko_Diabetes: string;
  Resiko_Dislipidemia: string;
  Resiko_Gangguan_Ginjal: string;
  Resiko_Gangguan_Jantung: string;
  Resiko_Gangguan_Lain: string;
  Resiko_Gangguan_Lain_Teks: string;
  Resiko_Gastritis: string;
  Resiko_Hipertensi: string;
  Resiko_Kanker: string;
  Resiko_Lainnya: string;
  Resiko_Lainnya_Teks: string;
  Resiko_Luka_Bakar: string;
  Resiko_Stroke: string;
  Resiko_Thyphoid: string;
  Diagnosa_Gizi: string;
  Intervensi: string;
  Monitoring: string;
  Evaluasi: string;
  ID_Petugas_Gizi: string;
  TTD_Petugas_Gizi: string;
  Nama_Petugas_Gizi: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
}

export class InitialNutritionalAssessmentForm {
  Tanggal: string;
  Diagnosa_Masuk: string;
  Diet_Awal: string;
  Bb_Anak: string;
  Tb_Anak: string;
  Bb_0_12_Anak: string;
  Bb_1_13_Anak: string;
  Bb_Ideal_Anak: string;
  Z_Score: string;
  Bb_Dewasa: string;
  Tb_Dewasa: string;
  Bb_Ideal_Dewasa: string;
  IMT: string;
  Status_Gizi: string;
  Status_Gizi_Buruk: string;
  Status_Gizi_Kurang: string;
  Status_Gizi_Baik: string;
  Status_Gizi_Lebih: string;
  Status_Gizi_Obesitas: string;
  Gangguan_Gastro: string;
  Gangguan_Gastro_Ada: any;
  Keterangan_Gizi : string;
  Perubahan_Asupan : string;
  Perubahan_Asupan_Ada : string;
  Faktor_Resiko: string;
  Resiko_Diabetes: string;
  Resiko_Dislipidemia: string;
  Resiko_Gangguan_Ginjal: string;
  Resiko_Gangguan_Jantung: string;
  Resiko_Gangguan_Lain: string;
  Resiko_Gangguan_Lain_Teks: string;
  Resiko_Gastritis: string;
  Resiko_Hipertensi: string;
  Resiko_Kanker: string;
  Resiko_Lainnya: string;
  Resiko_Lainnya_Teks: string;
  Resiko_Luka_Bakar: string;
  Resiko_Stroke: string;
  Resiko_Thyphoid: string;
  Diagnosa_Gizi: string;
  Intervensi: string;
  Monitoring: string;
  Evaluasi: string;
  ID_Petugas_Gizi: string;
  TTD_Petugas_Gizi: string;
  Nama_Petugas_Gizi: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  constructor(form: IInitialNutritionalAssessmentForm) {
    this.Tanggal = form.Tanggal;
    this.Diagnosa_Masuk = form.Diagnosa_Masuk;
    this.Diet_Awal = form.Diet_Awal;
    this.Bb_Anak = form.Bb_Anak;
    this.Tb_Anak = form.Tb_Anak;
    this.Bb_0_12_Anak = form.Bb_0_12_Anak;
    this.Bb_1_13_Anak = form.Bb_1_13_Anak;
    this.Bb_Ideal_Anak = form.Bb_Ideal_Anak;
    this.Z_Score = form.Z_Score;
    this.Bb_Dewasa = form.Bb_Dewasa;
    this.Tb_Dewasa = form.Tb_Dewasa;
    this.Bb_Ideal_Dewasa = form.Bb_Ideal_Dewasa;
    this.IMT = form.IMT;
    this.Status_Gizi = form.Status_Gizi;
    this.Status_Gizi_Buruk = form.Status_Gizi_Buruk;
    this.Status_Gizi_Kurang = form.Status_Gizi_Kurang;
    this.Status_Gizi_Baik = form.Status_Gizi_Baik;
    this.Status_Gizi_Lebih = form.Status_Gizi_Lebih;
    this.Status_Gizi_Obesitas = form.Status_Gizi_Obesitas;
    this.Gangguan_Gastro = form.Gangguan_Gastro;
    this.Gangguan_Gastro_Ada = form.Gangguan_Gastro_Ada;
    this.Keterangan_Gizi = form.Keterangan_Gizi;
    this.Perubahan_Asupan = form.Perubahan_Asupan;
    this.Perubahan_Asupan_Ada = form.Perubahan_Asupan_Ada;
    this.Faktor_Resiko = form.Faktor_Resiko;
    this.Resiko_Diabetes = form.Resiko_Diabetes;
    this.Resiko_Dislipidemia = form.Resiko_Dislipidemia;
    this.Resiko_Gangguan_Ginjal = form.Resiko_Gangguan_Ginjal;
    this.Resiko_Gangguan_Jantung = form.Resiko_Gangguan_Jantung;
    this.Resiko_Gangguan_Lain = form.Resiko_Gangguan_Lain;
    this.Resiko_Gangguan_Lain_Teks = form.Resiko_Gangguan_Lain_Teks;
    this.Resiko_Gastritis = form.Resiko_Gastritis;
    this.Resiko_Hipertensi = form.Resiko_Hipertensi;
    this.Resiko_Kanker = form.Resiko_Kanker;
    this.Resiko_Lainnya = form.Resiko_Lainnya;
    this.Resiko_Lainnya_Teks = form.Resiko_Lainnya_Teks;
    this.Resiko_Luka_Bakar = form.Resiko_Luka_Bakar;
    this.Resiko_Stroke = form.Resiko_Stroke;
    this.Resiko_Thyphoid = form.Resiko_Thyphoid;
    this.Diagnosa_Gizi = form.Diagnosa_Gizi;
    this.Intervensi = form.Intervensi;
    this.Monitoring = form.Monitoring;
    this.Evaluasi = form.Evaluasi;
    this.ID_Petugas_Gizi = form.ID_Petugas_Gizi;
    this.TTD_Petugas_Gizi = form.TTD_Petugas_Gizi;
    this.Nama_Petugas_Gizi = form.Nama_Petugas_Gizi;
    this.ID_Petugas = form.ID_Petugas;
    this.Nama_Petugas = form.Nama_Petugas;
    this.Updated_At = form.Updated_At;
    this.Updated_By = form.Updated_By;
  }
}

export interface IInitialNutritionalAssessment extends IDataModel {
  form: IInitialNutritionalAssessmentForm;
}

export class InitialNutritionalAssessment extends DataModel {
  form?: InitialNutritionalAssessmentForm;
  constructor(model: IInitialNutritionalAssessment) {
    super(model);
    if (model.form) {
      this.form = new InitialNutritionalAssessmentForm(model.form);
    }
  }
}
