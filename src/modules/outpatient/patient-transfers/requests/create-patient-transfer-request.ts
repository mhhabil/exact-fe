import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface ICreatePatientTransferRequest extends IAppRequest {
    id: string
    id_dokter_dpjp: string
    id_dokter_operator: string
    tanggal_transfer: string
    indikasi_transfer: string
    pengantar: string
    penerima: string
    tanggal_masuk_rs: string
    diagnosa: string
    kesadaran: string
    vital_td: string
    vital_n: string
    vital_p: string
    vital_t: string
    vital_sat_o2: string
    visus_od: string
    visus_os: string
    tonometer_od: string
    tonometer_os: string
    skala_nyeri: string
    puasa: string
    waktu_puasa: string
    keluhan: string
    alderette: string
    alderette_aktivitas: string
    alderette_sirkulasi: string
    alderette_pernafasan: string
    alderette_kesadaran: string
    alderette_warna_kulit: string
    alderette_score: string
    steward: string
    steward_kesadaran: string
    steward_pernafasan: string
    steward_motorik: string
    steward_score: string
    pemeriksaan_alat_ekg: string
    pemeriksaan_alat_laboratorium: string
    pemeriksaan_alat_laboratorium_text: string
    pemeriksaan_alat_usg: string
    pemeriksaan_alat_biometri: string
    pemeriksaan_alat_oct_macula: string
    pemeriksaan_alat_thorax_foto: string
    pemeriksaan_alat_ct_scan: string
    pemeriksaan_alat_foto_fundus: string
    pemeriksaan_alat_oct_papil: string
    pemeriksaan_alat_lain_lain: string
    pemeriksaan_alat_lain_text: string
    terapi: string
    rencana: string
    diet: string
    tanda_tangan_perawat_pengantar: string
    id_tanda_tangan_perawat_pengantar: string
    tanda_tangan_perawat_penerima: string
    id_tanda_tangan_perawat_penerima: string
    emr_id: string
    nomor_mr: string
    id_pelayanan: string
    kode_cabang: string
    tipe_pasien: string
    jenis_pelayanan: string
    id_dokter: string
    no_sep: string
    unit: string;
}

export class CreatePatientTransferRequest extends AppRequest {
    id: string
    id_dokter_dpjp: string
    id_dokter_operator: string
    tanggal_transfer: string
    indikasi_transfer: string
    pengantar: string
    penerima: string
    tanggal_masuk_rs: string
    diagnosa: string
    kesadaran: string
    vital_td: string
    vital_n: string
    vital_p: string
    vital_t: string
    vital_sat_o2: string
    visus_od: string
    visus_os: string
    tonometer_od: string
    tonometer_os: string
    skala_nyeri: string
    puasa: string
    waktu_puasa: string
    keluhan: string
    alderette: string
    alderette_aktivitas: string
    alderette_sirkulasi: string
    alderette_pernafasan: string
    alderette_kesadaran: string
    alderette_warna_kulit: string
    alderette_score: string
    steward: string
    steward_kesadaran: string
    steward_pernafasan: string
    steward_motorik: string
    steward_score: string
    pemeriksaan_alat_ekg: string
    pemeriksaan_alat_laboratorium: string
    pemeriksaan_alat_laboratorium_text: string
    pemeriksaan_alat_usg: string
    pemeriksaan_alat_biometri: string
    pemeriksaan_alat_oct_macula: string
    pemeriksaan_alat_thorax_foto: string
    pemeriksaan_alat_ct_scan: string
    pemeriksaan_alat_foto_fundus: string
    pemeriksaan_alat_oct_papil: string
    pemeriksaan_alat_lain_lain: string
    pemeriksaan_alat_lain_text: string
    terapi: string
    rencana: string
    diet: string
    tanda_tangan_perawat_pengantar: string
    id_tanda_tangan_perawat_pengantar: string
    tanda_tangan_perawat_penerima: string
    id_tanda_tangan_perawat_penerima: string
    emr_id: string
    nomor_mr: string
    id_pelayanan: string
    kode_cabang: string
    tipe_pasien: string
    jenis_pelayanan: string
    id_dokter: string
    no_sep: string
    unit: string;
    constructor(request: ICreatePatientTransferRequest) {
      super(request);
      this.id = request.id;
      this.id_dokter_dpjp = request.id_dokter_dpjp;
      this.id_dokter_operator = request.id_dokter_operator;
      this.tanggal_transfer = request.tanggal_transfer ? DateTimeConverter.convertToNormalDatetime(request.tanggal_transfer) : '';
      this.indikasi_transfer = request.indikasi_transfer;
      this.pengantar = request.pengantar;
      this.penerima = request.penerima;
      this.tanggal_masuk_rs = request.tanggal_masuk_rs;
      this.diagnosa = request.diagnosa;
      this.kesadaran = request.kesadaran;
      this.vital_td = request.vital_td;
      this.vital_n = request.vital_n;
      this.vital_p = request.vital_p;
      this.vital_t = request.vital_t;
      this.vital_sat_o2 = request.vital_sat_o2;
      this.visus_od = request.visus_od;
      this.visus_os = request.visus_os;
      this.tonometer_od = request.tonometer_od;
      this.tonometer_os = request.tonometer_os;
      this.skala_nyeri = request.skala_nyeri;
      this.puasa = request.puasa;
      this.waktu_puasa = request.waktu_puasa;
      this.keluhan = request.keluhan;
      this.alderette = request.alderette;
      this.alderette_aktivitas = request.alderette_aktivitas;
      this.alderette_sirkulasi = request.alderette_sirkulasi;
      this.alderette_pernafasan = request.alderette_pernafasan;
      this.alderette_kesadaran = request.alderette_kesadaran;
      this.alderette_warna_kulit = request.alderette_warna_kulit;
      this.alderette_score = request.alderette_score;
      this.steward = request.steward;
      this.steward_kesadaran = request.steward_kesadaran;
      this.steward_pernafasan = request.steward_pernafasan;
      this.steward_motorik = request.steward_motorik;
      this.steward_score = request.steward_score;
      this.pemeriksaan_alat_ekg = request.pemeriksaan_alat_ekg;
      this.pemeriksaan_alat_laboratorium = request.pemeriksaan_alat_laboratorium;
      this.pemeriksaan_alat_laboratorium_text = request.pemeriksaan_alat_laboratorium_text;
      this.pemeriksaan_alat_usg = request.pemeriksaan_alat_usg;
      this.pemeriksaan_alat_biometri = request.pemeriksaan_alat_biometri;
      this.pemeriksaan_alat_oct_macula = request.pemeriksaan_alat_oct_macula;
      this.pemeriksaan_alat_thorax_foto = request.pemeriksaan_alat_thorax_foto;
      this.pemeriksaan_alat_ct_scan = request.pemeriksaan_alat_ct_scan;
      this.pemeriksaan_alat_foto_fundus = request.pemeriksaan_alat_foto_fundus;
      this.pemeriksaan_alat_oct_papil = request.pemeriksaan_alat_oct_papil;
      this.pemeriksaan_alat_lain_lain = request.pemeriksaan_alat_lain_lain;
      this.pemeriksaan_alat_lain_text = request.pemeriksaan_alat_lain_text;
      this.terapi = request.terapi;
      this.rencana = request.rencana;
      this.diet = request.diet;
      this.tanda_tangan_perawat_pengantar = request.tanda_tangan_perawat_pengantar;
      this.id_tanda_tangan_perawat_pengantar = request.id_tanda_tangan_perawat_pengantar;
      this.tanda_tangan_perawat_penerima = request.tanda_tangan_perawat_penerima;
      this.id_tanda_tangan_perawat_penerima = request.id_tanda_tangan_perawat_penerima;
      this.emr_id = request.emr_id;
      this.nomor_mr = request.nomor_mr;
      this.id_pelayanan = request.id_pelayanan;
      this.kode_cabang = request.kode_cabang;
      this.tipe_pasien = request.tipe_pasien;
      this.jenis_pelayanan = request.jenis_pelayanan;
      this.id_dokter = request.id_dokter;
      this.no_sep = request.no_sep;
      this.unit = request.unit;
    }

    static schema() {
      return yup.object().shape({
        id: yup.string(),
        id_dokter_dpjp: yup.string(),
        id_dokter_operator: yup.string(),
        tanggal_transfer: yup.string(),
        indikasi_transfer: yup.string(),
        pengantar: yup.string(),
        penerima: yup.string(),
        tanggal_masuk_rs: yup.string(),
        diagnosa: yup.string(),
        kesadaran: yup.string(),
        vital_td: yup.string(),
        vital_n: yup.string(),
        vital_p: yup.string(),
        vital_t: yup.string(),
        vital_sat_o2: yup.string(),
        visus_od: yup.string(),
        visus_os: yup.string(),
        tonometer_od: yup.string(),
        tonometer_os: yup.string(),
        skala_nyeri: yup.string(),
        puasa: yup.string(),
        waktu_puasa: yup.string(),
        keluhan: yup.string(),
        alderette: yup.string(),
        alderette_aktivitas: yup.string(),
        alderette_sirkulasi: yup.string(),
        alderette_pernafasan: yup.string(),
        alderette_kesadaran: yup.string(),
        alderette_warna_kulit: yup.string(),
        alderette_score: yup.string(),
        steward: yup.string(),
        steward_kesadaran: yup.string(),
        steward_pernafasan: yup.string(),
        steward_motorik: yup.string(),
        steward_score: yup.string(),
        pemeriksaan_alat_ekg: yup.string(),
        pemeriksaan_alat_laboratorium: yup.string(),
        pemeriksaan_alat_laboratorium_text: yup.string(),
        pemeriksaan_alat_usg: yup.string(),
        pemeriksaan_alat_biometri: yup.string(),
        pemeriksaan_alat_oct_macula: yup.string(),
        pemeriksaan_alat_thorax_foto: yup.string(),
        pemeriksaan_alat_ct_scan: yup.string(),
        pemeriksaan_alat_foto_fundus: yup.string(),
        pemeriksaan_alat_oct_papil: yup.string(),
        pemeriksaan_alat_lain_lain: yup.string(),
        pemeriksaan_alat_lain_text: yup.string(),
        terapi: yup.string(),
        rencana: yup.string(),
        diet: yup.string(),
        tanda_tangan_perawat_pengantar: yup.string(),
        id_tanda_tangan_perawat_pengantar: yup.string(),
        tanda_tangan_perawat_penerima: yup.string(),
        id_tanda_tangan_perawat_penerima: yup.string(),
        emr_id: yup.string(),
        nomor_mr: yup.string(),
        id_pelayanan: yup.string(),
        kode_cabang: yup.string(),
        tipe_pasien: yup.string(),
        jenis_pelayanan: yup.string(),
        id_dokter: yup.string(),
        no_sep: yup.string(),
      });
    }

    static createFromJson(json: ICreatePatientTransferRequest) {
      return new CreatePatientTransferRequest(json);
    }
}
