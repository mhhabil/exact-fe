import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@src/shared/request';

export interface IUpdatePostoperativeInstructionsRequest extends IAppRequest {
  keluhan_rumah: string;
  terjadi_rumah: string;
  mobilisasi: string;
  anjuran_kendaraan: string;
  anjuran_alat_berat: string;
  anjuran_alkohol: string;
  anjuran_ekstremitas: string;
  anjuran_obat: string;
  anjuran_lain: string;
  anjuran_lain_teks: string;
  anjuran_terkena: string;
  anjuran_tidur_telentang: string;
  anjuran_tidur_telungkup: string;
  anjuran_tidur_membungkuk: string;
  anjuran_tidur_dll: string;
  anjuran_tidur_lain_teks: string;
  anjuran_tidur_eyeshield: string;
  pendamping_keluarga: string;
  pendamping_keluarga_teks: string;
  pendamping_medis: string;
  pendamping_lain: string;
  pendamping_lain_teks: string;
  nomor_dihubungi: string;
  jadwal_kontrol: string;
  lain_lain: string;
  ttd_pasien: string;
  ttd_dpjp: string;
  id_dpjp: string;
}

export class UpdatePostoperativeInstructionsRequest extends AppRequest {
    keluhan_rumah: string;
    terjadi_rumah: string;
    mobilisasi: string;
    anjuran_kendaraan: string;
    anjuran_alat_berat: string;
    anjuran_alkohol: string;
    anjuran_ekstremitas: string;
    anjuran_obat: string;
    anjuran_lain: string;
    anjuran_lain_teks: string;
    anjuran_terkena: string;
    anjuran_tidur_telentang: string;
    anjuran_tidur_telungkup: string;
    anjuran_tidur_membungkuk: string;
    anjuran_tidur_dll: string;
    anjuran_tidur_lain_teks: string;
    anjuran_tidur_eyeshield: string;
    pendamping_keluarga: string;
    pendamping_keluarga_teks: string;
    pendamping_medis: string;
    pendamping_lain: string;
    pendamping_lain_teks: string;
    nomor_dihubungi: string;
    jadwal_kontrol: string;
    lain_lain: string;
    ttd_pasien: string;
    ttd_dpjp: string;
    id_dpjp: string;
    constructor(request: IUpdatePostoperativeInstructionsRequest) {
      super(request);
      this.keluhan_rumah = request.keluhan_rumah;
      this.terjadi_rumah = request.terjadi_rumah;
      this.mobilisasi = request.mobilisasi;
      this.anjuran_kendaraan = request.anjuran_kendaraan;
      this.anjuran_alat_berat = request.anjuran_alat_berat;
      this.anjuran_alkohol = request.anjuran_alkohol;
      this.anjuran_ekstremitas = request.anjuran_ekstremitas;
      this.anjuran_obat = request.anjuran_obat;
      this.anjuran_lain = request.anjuran_lain;
      this.anjuran_lain_teks = request.anjuran_lain_teks;
      this.anjuran_terkena = request.anjuran_terkena;
      this.anjuran_tidur_telentang = request.anjuran_tidur_telentang;
      this.anjuran_tidur_telungkup = request.anjuran_tidur_telungkup;
      this.anjuran_tidur_membungkuk = request.anjuran_tidur_membungkuk;
      this.anjuran_tidur_dll = request.anjuran_tidur_dll;
      this.anjuran_tidur_lain_teks = request.anjuran_tidur_lain_teks;
      this.anjuran_tidur_eyeshield = request.anjuran_tidur_eyeshield;
      this.pendamping_keluarga = request.pendamping_keluarga;
      this.pendamping_keluarga_teks = request.pendamping_keluarga_teks;
      this.pendamping_medis = request.pendamping_medis;
      this.pendamping_lain = request.pendamping_lain;
      this.pendamping_lain_teks = request.pendamping_lain_teks;
      this.nomor_dihubungi = request.nomor_dihubungi;
      this.jadwal_kontrol = request.jadwal_kontrol;
      this.lain_lain = request.lain_lain;
      this.ttd_pasien = request.ttd_pasien;
      this.ttd_dpjp = request.ttd_dpjp;
      this.id_dpjp = request.id_dpjp;
    }

    static schema() {
      return yup.object().shape({
        keluhan_rumah: yup.string(),
        terjadi_rumah: yup.string(),
        mobilisasi: yup.string(),
        anjuran_kendaraan: yup.string(),
        anjuran_alat_berat: yup.string(),
        anjuran_alkohol: yup.string(),
        anjuran_ekstremitas: yup.string(),
        anjuran_obat: yup.string(),
        anjuran_lain: yup.string(),
        anjuran_lain_teks: yup.string(),
        anjuran_terkena: yup.string(),
        anjuran_tidur_telentang: yup.string(),
        anjuran_tidur_telungkup: yup.string(),
        anjuran_tidur_membungkuk: yup.string(),
        anjuran_tidur_dll: yup.string(),
        anjuran_tidur_lain_teks: yup.string(),
        anjuran_tidur_eyeshield: yup.string(),
        pendamping_keluarga: yup.string(),
        pendamping_keluarga_teks: yup.string(),
        pendamping_medis: yup.string(),
        pendamping_lain: yup.string(),
        pendamping_lain_teks: yup.string(),
        nomor_dihubungi: yup.string(),
        jadwal_kontrol: yup.string(),
        lain_lain: yup.string(),
        ttd_pasien: yup.string(),
        ttd_dpjp: yup.string(),
        id_dpjp: yup.string(),
      });
    }

    static createFromJson(json: IUpdatePostoperativeInstructionsRequest) {
      return new UpdatePostoperativeInstructionsRequest(json);
    }
}
