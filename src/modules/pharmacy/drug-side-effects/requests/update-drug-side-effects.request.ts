import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';

export interface IUpdateDrugSideEffectsRequest extends IAppRequest {

  terjadi_efek_samping_obat: string;
  jenis_kelamin: string;
  status_hamil: string;
  suku_check: string;
  nama_suku: string;
  berat_badan_check: string;
  berat_badan: string;
  diagnosa_utama: string;
  kesudahan_penyakit_utama: string;
  riwayat_hati_check: string;
  riwayat_ginjal_check: string;
  riwayat_lain_check: string;
  riwayat_lain_text: string;
  bentuk_manifestasi_eso: string;
  tanggal_mula_terjadi: string;
  tanggal_kesudahan: string;
  kesudahan_eso: string;
  riwayat_eso_sebelum: string;
  waktu: string;
  id_petugas: string;
  nama_petugas: string;
  updated_at: string;
  updated_by: string;

  keterangan_tambahan:  string;
  algoritma_naranjo_1:  string;
  algoritma_naranjo_2:  string;
  algoritma_naranjo_3:  string;
  algoritma_naranjo_4:  string;
  algoritma_naranjo_5:  string;
  algoritma_naranjo_6:  string;
  algoritma_naranjo_7:  string;
  algoritma_naranjo_8:  string;
  algoritma_naranjo_9:  string;
  algoritma_naranjo_10:  string;
  total_skor:  string;
  id_pelapor:  string;
  ttd_pelapor:  string;
  
  obat_diterima: Array<string>;

}

export class UpdateDrugSideEffectsRequest extends AppRequest {
  terjadi_efek_samping_obat: string;
  jenis_kelamin: string;
  status_hamil: string;
  suku_check: string;
  nama_suku: string;
  berat_badan_check: string;
  berat_badan: string;
  diagnosa_utama: string;
  kesudahan_penyakit_utama: string;
  riwayat_hati_check: string;
  riwayat_ginjal_check: string;
  riwayat_lain_check: string;
  riwayat_lain_text: string;
  bentuk_manifestasi_eso: string;
  tanggal_mula_terjadi: string;
  tanggal_kesudahan: string;
  kesudahan_eso: string;
  riwayat_eso_sebelum: string;

  keterangan_tambahan:  string;
  algoritma_naranjo_1:  string;
  algoritma_naranjo_2:  string;
  algoritma_naranjo_3:  string;
  algoritma_naranjo_4:  string;
  algoritma_naranjo_5:  string;
  algoritma_naranjo_6:  string;
  algoritma_naranjo_7:  string;
  algoritma_naranjo_8:  string;
  algoritma_naranjo_9:  string;
  algoritma_naranjo_10:  string;
  total_skor:  string;
  id_pelapor:  string;
  ttd_pelapor:  string;

  waktu: string;
  id_petugas: string;
  nama_petugas: string;
  updated_at: string;
  updated_by: string;
  
  obat_diterima: Array<string>;


  constructor(request: IUpdateDrugSideEffectsRequest) {
    super(request);

    this.terjadi_efek_samping_obat  = request.terjadi_efek_samping_obat;
    this.jenis_kelamin  = request.jenis_kelamin;
    this.status_hamil  = request.status_hamil;
    this.suku_check  = request.suku_check;
    this.nama_suku  = request.nama_suku;
    this.berat_badan_check  = request.berat_badan_check;
    this.berat_badan  = request.berat_badan;
    this.diagnosa_utama  = request.diagnosa_utama;
    this.kesudahan_penyakit_utama  = request.kesudahan_penyakit_utama
    this.riwayat_hati_check  = request.riwayat_hati_check;
    this.riwayat_ginjal_check  = request.riwayat_ginjal_check;
    this.riwayat_lain_check  = request.riwayat_lain_check;
    this.riwayat_lain_text  = request.riwayat_lain_text;
    this.bentuk_manifestasi_eso  = request.bentuk_manifestasi_eso;
    this.tanggal_mula_terjadi  = request.tanggal_mula_terjadi;
    this.tanggal_kesudahan  = request.tanggal_kesudahan;
    this.kesudahan_eso  = request.kesudahan_eso;
    this.riwayat_eso_sebelum  = request.riwayat_eso_sebelum;

    this.keterangan_tambahan  =  request.keterangan_tambahan;
    this.algoritma_naranjo_1 =  request.algoritma_naranjo_1;
    this.algoritma_naranjo_2 =  request.algoritma_naranjo_2;
    this.algoritma_naranjo_3 =  request.algoritma_naranjo_3;
    this.algoritma_naranjo_4 =  request.algoritma_naranjo_4;
    this.algoritma_naranjo_5 =  request.algoritma_naranjo_5;
    this.algoritma_naranjo_6 =  request.algoritma_naranjo_6;
    this.algoritma_naranjo_7 =  request.algoritma_naranjo_7;
    this.algoritma_naranjo_8 =  request.algoritma_naranjo_8;
    this.algoritma_naranjo_9 =  request.algoritma_naranjo_9;
    this.algoritma_naranjo_10 =  request.algoritma_naranjo_10;
    this.total_skor =  request.total_skor;
    this.id_pelapor =  request.id_pelapor;
    this.ttd_pelapor =  request.ttd_pelapor;
    this.obat_diterima =  request.obat_diterima;
    this.waktu  = request.waktu
    this.id_petugas  = request.id_petugas;
    this.nama_petugas  = request.nama_petugas;
    this.updated_at  = request.updated_at;
    this.updated_by = request.updated_by;

  }

  static schema() {
    return yup.object().shape({
      terjadi_efek_samping_obat: yup.string(),
      jenis_kelamin: yup.string(),
      status_hamil: yup.string(),
      suku_check: yup.string(),
      nama_suku: yup.string(),
      berat_badan_check: yup.string(),
      berat_badan: yup.string(),
      diagnosa_utama: yup.string(),
      kesudahan_penyakit_utama: yup.string(),
      riwayat_hati_check: yup.string(),
      riwayat_ginjal_check: yup.string(),
      riwayat_lain_check: yup.string(),
      riwayat_lain_text: yup.string(),
      bentuk_manifestasi_eso: yup.string(),
      tanggal_mula_terjadi: yup.string(),
      tanggal_kesudahan: yup.string(),
      kesudahan_eso: yup.string(),
      riwayat_eso_sebelum: yup.string(),

      keterangan_tambahan: yup.string(),
      algoritma_naranjo_1: yup.string(),
      algoritma_naranjo_2: yup.string(),
      algoritma_naranjo_3: yup.string(),
      algoritma_naranjo_4: yup.string(),
      algoritma_naranjo_5: yup.string(),
      algoritma_naranjo_6: yup.string(),
      algoritma_naranjo_7: yup.string(),
      algoritma_naranjo_8: yup.string(),
      algoritma_naranjo_9: yup.string(),
      algoritma_naranjo_10: yup.string(),
      total_skor: yup.string(),
      id_pelapor: yup.string(),
      ttd_pelapor: yup.string(),

      waktu: yup.string(),
      id_petugas: yup.string(),
      nama_petugas: yup.string(),
      updated_at: yup.string(),
      updated_by: yup.string(),

    });
  }
  
  normalize() {
    return {

      terjadi_efek_samping_obat: this.terjadi_efek_samping_obat,
      jenis_kelamin: this.jenis_kelamin,
      status_hamil: this.status_hamil,
      suku_check: this.suku_check,
      nama_suku: this.nama_suku,
      berat_badan_check: this.berat_badan_check,
      berat_badan: this.berat_badan,
      diagnosa_utama: this.diagnosa_utama,
      kesudahan_penyakit_utama: this.kesudahan_penyakit_utama,
      riwayat_hati_check: this.riwayat_hati_check,
      riwayat_ginjal_check: this.riwayat_ginjal_check,
      riwayat_lain_check: this.riwayat_lain_check,
      riwayat_lain_text: this.riwayat_lain_text,
      bentuk_manifestasi_eso: this.bentuk_manifestasi_eso,
      tanggal_mula_terjadi:  UpdateDrugSideEffectsRequest.convertToNormalDatetime(this.tanggal_mula_terjadi),
      tanggal_kesudahan: UpdateDrugSideEffectsRequest.convertToNormalDatetime(this.tanggal_kesudahan),
      kesudahan_eso: this.kesudahan_eso,
      riwayat_eso_sebelum: this.riwayat_eso_sebelum,

      keterangan_tambahan: this.keterangan_tambahan,
      algoritma_naranjo_1: this.algoritma_naranjo_1,
      algoritma_naranjo_2: this.algoritma_naranjo_2,
      algoritma_naranjo_3: this.algoritma_naranjo_3,
      algoritma_naranjo_4: this.algoritma_naranjo_4,
      algoritma_naranjo_5: this.algoritma_naranjo_5,
      algoritma_naranjo_6: this.algoritma_naranjo_6,
      algoritma_naranjo_7: this.algoritma_naranjo_7,
      algoritma_naranjo_8: this.algoritma_naranjo_8,
      algoritma_naranjo_9: this.algoritma_naranjo_9,
      algoritma_naranjo_10: this.algoritma_naranjo_10,
      waktu: UpdateDrugSideEffectsRequest.convertToNormalDatetime(this.waktu),
      total_skor: this.total_skor,
      id_pelapor: this.id_pelapor,
      ttd_pelapor: this.ttd_pelapor,
      obat_diterima : this.obat_diterima,
      emr_id: this.emr_id,
      nomor_mr: this.nomor_mr,
      id_pelayanan: this.id_pelayanan,
      kode_cabang: this.kode_cabang,
      tipe_pasien: this.tipe_pasien,
      jenis_pelayanan: this.jenis_pelayanan,
      id_dokter: this.id_dokter,
      no_sep: this.no_sep,
    }
  }
  

  static convertToNormalDatetime(date: any) {
    const d = new Date(date);
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }
  static createFromJson(json: IUpdateDrugSideEffectsRequest) {
    return new UpdateDrugSideEffectsRequest(json);
  }
}
