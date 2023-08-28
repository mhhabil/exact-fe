import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { DateTimeConverter } from '@shared/datetime-converter';

export interface ICreateFallRiskAssessementChildrenRequest extends IAppRequest {
  waktu_pengkajian: string;
  usia: string;
  jenis_kelamin: string;
  diagnosa: string;
  gangguan_kognitif: string;
  faktor_lingkungan: string;
  respon_operasi: string;
  penggunaan_obat: string;
  keterangan_waktu_pengkajian: string;
  total_skor: string;
  resiko_jatuh: string;
  resiko_jatuh_keterangan: string;
  ttd_petugas: string;
  petugas: string;
  unit_pengkaji: string;
  usia_radio: string;
  jenis_kelamin_radio: string;
  diagnosa_radio: string;
  gangguan_kognitif_radio: string;
  faktor_lingkungan_radio: string;
  respon_operasi_radio: string;
  penggunaan_obat_radio: string;
  ruangan: string;
  lembar: string;
  unit: string;
}


export class CreateFallRiskAssessementChildrenRequest extends AppRequest {
  waktu_pengkajian: string;
  usia: string;
  jenis_kelamin: string;
  diagnosa: string;
  gangguan_kognitif: string;
  faktor_lingkungan: string;
  respon_operasi: string;
  penggunaan_obat: string;
  keterangan_waktu_pengkajian: string;
  total_skor: string;
  resiko_jatuh: string;
  resiko_jatuh_keterangan: string;
  ttd_petugas: string;
  petugas: string;
  unit_pengkaji: string;
  usia_radio: string;
  jenis_kelamin_radio: string;
  diagnosa_radio: string;
  gangguan_kognitif_radio: string;
  faktor_lingkungan_radio: string;
  respon_operasi_radio: string;
  penggunaan_obat_radio: string;
  ruangan: string;
  lembar: string;
  unit: string;

  constructor(model: ICreateFallRiskAssessementChildrenRequest) {
    super(model);

    this.waktu_pengkajian = model.waktu_pengkajian;
    this.usia = model.usia;
    this.jenis_kelamin = model.jenis_kelamin;
    this.diagnosa = model.diagnosa;
    this.gangguan_kognitif = model.gangguan_kognitif;
    this.faktor_lingkungan = model.faktor_lingkungan;
    this.respon_operasi = model.respon_operasi;
    this.penggunaan_obat = model.penggunaan_obat;
    this.keterangan_waktu_pengkajian = model.keterangan_waktu_pengkajian;
    this.total_skor = model.total_skor;
    this.resiko_jatuh = model.resiko_jatuh;
    this.resiko_jatuh_keterangan = model.resiko_jatuh_keterangan;
    this.ttd_petugas = model.ttd_petugas;
    this.petugas = model.petugas;
    this.unit_pengkaji = model.unit_pengkaji;
    this.usia_radio = model.usia_radio;
    this.jenis_kelamin_radio = model.jenis_kelamin_radio;
    this.diagnosa_radio = model.diagnosa_radio;
    this.gangguan_kognitif_radio = model.gangguan_kognitif_radio;
    this.faktor_lingkungan_radio = model.faktor_lingkungan_radio;
    this.respon_operasi_radio = model.respon_operasi_radio;
    this.penggunaan_obat_radio = model.penggunaan_obat_radio;
    this.ruangan = model.ruangan;
    this.lembar = model.lembar;
    this.unit = model.unit;

  }
  normalize() {
    return {
      waktu_pengkajian : this.waktu_pengkajian ? DateTimeConverter.convertToNormalDatetime(this.waktu_pengkajian) : '',
      usia :  this.usia,
      jenis_kelamin :  this.jenis_kelamin,
      diagnosa :  this.diagnosa,
      gangguan_kognitif :  this.gangguan_kognitif,
      faktor_lingkungan :  this.faktor_lingkungan,
      respon_operasi :  this.respon_operasi,
      penggunaan_obat :  this.penggunaan_obat,
      keterangan_waktu_pengkajian :  this.keterangan_waktu_pengkajian,
      total_skor :  this.total_skor,
      resiko_jatuh :  this.resiko_jatuh,
      resiko_jatuh_keterangan :  this.resiko_jatuh_keterangan,
      ttd_petugas :  this.ttd_petugas,
      petugas :  this.petugas,
      unit_pengkaji :  this.unit_pengkaji,
      usia_radio :  this.usia_radio,
      jenis_kelamin_radio :  this.jenis_kelamin_radio,
      diagnosa_radio :  this.diagnosa_radio,
      gangguan_kognitif_radio :  this.gangguan_kognitif_radio,
      faktor_lingkungan_radio :  this.faktor_lingkungan_radio,
      respon_operasi_radio :  this.respon_operasi_radio,
      penggunaan_obat_radio :  this.penggunaan_obat_radio,
      ruangan :  this.ruangan,
      lembar : this.lembar,
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
      usia: yup.string(),
      jenis_kelamin: yup.string(),
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
      usia_radio: yup.string(),
      jenis_kelamin_radio: yup.string(),
      diagnosa_radio: yup.string(),
      gangguan_kognitif_radio: yup.string(),
      faktor_lingkungan_radio: yup.string(),
      respon_operasi_radio: yup.string(),
      penggunaan_obat_radio: yup.string(),
      ruangan: yup.string(),
      lembar: yup.string(),
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

  static createFromJson(json: ICreateFallRiskAssessementChildrenRequest) {
    return new CreateFallRiskAssessementChildrenRequest(json);
  }
}
