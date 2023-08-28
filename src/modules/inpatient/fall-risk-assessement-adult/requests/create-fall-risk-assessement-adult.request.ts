import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { DateTimeConverter } from '@shared/datetime-converter';

export interface ICreateFallRiskAssessementAdultRequest extends IAppRequest {
  waktu_pengkajian: string;
  riwayat_jatuh: string;
  riwayat_jatuh_radio: string;
  diagnosa_sekunder: string;
  diagnosa_sekunder_radio: string;
  alat_bantu_jalan: string;
  alat_bantu_jalan_radio: string;
  pasien_diinfus: string;
  pasien_diinfus_radio: string;
  cara_berjalan: string;
  cara_berjalan_radio: string;
  kondisi_mental: string;
  kondisi_mental_radio: string;
  keterangan_waktu_pengkajian: string;
  total_skor: string;
  resiko_jatuh: string;
  resiko_jatuh_keterangan: string;
  ruangan : string;
  lembar : string;
  id_perawat: string;
  ttd_perawat: string;
  unit: string;
}


export class CreateFallRiskAssessementAdultRequest extends AppRequest {
  waktu_pengkajian: string;
  riwayat_jatuh: string;
  riwayat_jatuh_radio: string;
  diagnosa_sekunder: string;
  diagnosa_sekunder_radio: string;
  alat_bantu_jalan: string;
  alat_bantu_jalan_radio: string;
  pasien_diinfus: string;
  pasien_diinfus_radio: string;
  cara_berjalan: string;
  cara_berjalan_radio: string;
  kondisi_mental: string;
  kondisi_mental_radio: string;
  keterangan_waktu_pengkajian: string;
  total_skor: string;
  resiko_jatuh: string;
  resiko_jatuh_keterangan: string;
  ruangan : string;
  lembar : string;
  id_perawat: string;
  ttd_perawat: string;
  unit: string;
  
  constructor(model: ICreateFallRiskAssessementAdultRequest) {
    super(model);

    this.waktu_pengkajian = model.waktu_pengkajian;
    this.riwayat_jatuh = model.riwayat_jatuh;
    this.riwayat_jatuh_radio = model.riwayat_jatuh_radio;
    this.diagnosa_sekunder = model.diagnosa_sekunder;
    this.diagnosa_sekunder_radio = model.diagnosa_sekunder_radio;
    this.alat_bantu_jalan = model.alat_bantu_jalan;
    this.alat_bantu_jalan_radio = model.alat_bantu_jalan_radio;
    this.pasien_diinfus = model.pasien_diinfus;
    this.pasien_diinfus_radio = model.pasien_diinfus_radio;
    this.cara_berjalan = model.cara_berjalan;
    this.cara_berjalan_radio = model.cara_berjalan_radio;
    this.kondisi_mental = model.kondisi_mental;
    this.kondisi_mental_radio = model.kondisi_mental_radio;
    this.keterangan_waktu_pengkajian = model.keterangan_waktu_pengkajian;
    this.ruangan = model.ruangan;
    this.lembar = model.lembar;
    this.total_skor = model.total_skor;
    this.resiko_jatuh = model.resiko_jatuh;
    this.resiko_jatuh_keterangan = model.resiko_jatuh_keterangan;
    this.id_perawat = model.id_perawat;
    this.ttd_perawat = model.ttd_perawat;
    this.unit = model.unit;


  }
  normalize() {
    return {
      waktu_pengkajian : this.waktu_pengkajian ? DateTimeConverter.convertToNormalDatetime(this.waktu_pengkajian) : '',
      riwayat_jatuh:  this.riwayat_jatuh,
      riwayat_jatuh_radio:  this.riwayat_jatuh_radio,
      diagnosa_sekunder:  this.diagnosa_sekunder,
      diagnosa_sekunder_radio:  this.diagnosa_sekunder_radio,
      alat_bantu_jalan:  this.alat_bantu_jalan,
      alat_bantu_jalan_radio:  this.alat_bantu_jalan_radio,
      pasien_diinfus:  this.pasien_diinfus,
      pasien_diinfus_radio:  this.pasien_diinfus_radio,
      cara_berjalan:  this.cara_berjalan,
      cara_berjalan_radio:  this.cara_berjalan_radio,
      kondisi_mental:  this.kondisi_mental,
      kondisi_mental_radio:  this.kondisi_mental_radio,
      keterangan_waktu_pengkajian:  this.keterangan_waktu_pengkajian,
      total_skor:  this.total_skor,
      resiko_jatuh:  this.resiko_jatuh,
      resiko_jatuh_keterangan:  this.resiko_jatuh_keterangan,
      ruangan : this.ruangan,
      lembar : this.lembar,
      id_perawat:  this.id_perawat,
      ttd_perawat:  this.ttd_perawat,
      unit: this.unit,
      emr_id : this.emr_id,
      nomor_mr : this.nomor_mr,
      id_pelayanan : this.id_pelayanan,
      kode_cabang : this.kode_cabang,
      tipe_pasien : this.tipe_pasien,
      jenis_pelayanan : this.jenis_pelayanan,
      id_dokter : this.id_dokter,
      no_sep : this.no_sep,
    }
  }

  static scheme() {
    return yup.object().shape({
      waktu_pengkajian: yup.string(),
      riwayat_jatuh: yup.string(),
      riwayat_jatuh_radio: yup.string(),
      diagnosa_sekunder: yup.string(),
      diagnosa_sekunder_radio: yup.string(),
      alat_bantu_jalan: yup.string(),
      alat_bantu_jalan_radio: yup.string(),
      pasien_diinfus: yup.string(),
      pasien_diinfus_radio: yup.string(),
      cara_berjalan: yup.string(),
      cara_berjalan_radio: yup.string(),
      kondisi_mental: yup.string(),
      kondisi_mental_radio: yup.string(),
      keterangan_waktu_pengkajian: yup.string(),
      total_skor: yup.string(),
      resiko_jatuh: yup.string(),
      resiko_jatuh_keterangan: yup.string(),
      ruangan : yup.string(),
      lembar : yup.string(),
      id_perawat: yup.string(),
      ttd_perawat: yup.string(),
      unit: yup.string(),

      emr_id : yup.string(),
      nomor_mr : yup.string(),
      id_pelayanan : yup.string(),
      kode_cabang : yup.string(),
      tipe_pasien : yup.string(),
      jenis_pelayanan : yup.string(),
      id_dokter : yup.string(),
      no_sep : yup.string(),
    });
  }

  static createFromJson(json: ICreateFallRiskAssessementAdultRequest) {
    return new CreateFallRiskAssessementAdultRequest(json);
  }
}
