import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { DateTimeConverter } from '@shared/datetime-converter';

export interface ICreateImplementationRiskPatientsRequest extends IAppRequest {
  waktu_implementasi: string;
  pengkajian_awal_check: string;
  rem_tempat_tidur_check: string;
  dalam_jangkauan_check: string;
  tidak_menghalangi_check: string;
  palang_tempat_tidur_check: string;
  penanda_resiko_jatuh_check: string;
  libatkan_keluarga_check: string;
  cepat_menanggapi_check: string;
  memantau_respon_check: string;
  lakukan_pengkajian_ulang_check: string;
  ttd_perawat: string;
  id_perawat: string;
  unit: string;
}

export class CreateImplementationRiskPatientsRequest extends AppRequest {
  waktu_implementasi: string;
  pengkajian_awal_check: string;
  rem_tempat_tidur_check: string;
  dalam_jangkauan_check: string;
  tidak_menghalangi_check: string;
  palang_tempat_tidur_check: string;
  penanda_resiko_jatuh_check: string;
  libatkan_keluarga_check: string;
  cepat_menanggapi_check: string;
  memantau_respon_check: string;
  lakukan_pengkajian_ulang_check: string;
  ttd_perawat: string;
  id_perawat: string;
  unit: string;

  constructor(model: ICreateImplementationRiskPatientsRequest) {
    super(model);
    this.waktu_implementasi = model.waktu_implementasi;
    this.pengkajian_awal_check = model.pengkajian_awal_check;
    this.rem_tempat_tidur_check = model.rem_tempat_tidur_check;
    this.dalam_jangkauan_check = model.dalam_jangkauan_check;
    this.tidak_menghalangi_check = model.tidak_menghalangi_check;
    this.palang_tempat_tidur_check = model.palang_tempat_tidur_check;
    this.penanda_resiko_jatuh_check = model.penanda_resiko_jatuh_check;
    this.libatkan_keluarga_check = model.libatkan_keluarga_check;
    this.cepat_menanggapi_check = model.cepat_menanggapi_check;
    this.memantau_respon_check = model.memantau_respon_check;
    this.lakukan_pengkajian_ulang_check = model.lakukan_pengkajian_ulang_check;
    this.ttd_perawat = model.ttd_perawat;
    this.id_perawat = model.id_perawat;
    this.unit = model.unit;

  }
  normalize() {
    return {
      waktu_implementasi : this.waktu_implementasi ? DateTimeConverter.convertToNormalDatetime(this.waktu_implementasi) : '',
      pengkajian_awal_check : this.pengkajian_awal_check,
      rem_tempat_tidur_check : this.rem_tempat_tidur_check,
      dalam_jangkauan_check : this.dalam_jangkauan_check,
      tidak_menghalangi_check : this.tidak_menghalangi_check,
      palang_tempat_tidur_check : this.palang_tempat_tidur_check,
      penanda_resiko_jatuh_check : this.penanda_resiko_jatuh_check,
      libatkan_keluarga_check : this.libatkan_keluarga_check,
      cepat_menanggapi_check : this.cepat_menanggapi_check,
      memantau_respon_check : this.memantau_respon_check,
      lakukan_pengkajian_ulang_check : this.lakukan_pengkajian_ulang_check,
      ttd_perawat : this.ttd_perawat,
      id_perawat : this.id_perawat,
      unit : this.unit,
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

  static scheme() {
    return yup.object().shape({
      waktu_implementasi : yup.string(),
      pengkajian_awal_check : yup.string(),
      rem_tempat_tidur_check : yup.string(),
      dalam_jangkauan_check : yup.string(),
      tidak_menghalangi_check : yup.string(),
      palang_tempat_tidur_check : yup.string(),
      penanda_resiko_jatuh_check : yup.string(),
      libatkan_keluarga_check : yup.string(),
      cepat_menanggapi_check : yup.string(),
      memantau_respon_check : yup.string(),
      lakukan_pengkajian_ulang_check : yup.string(),
      ttd_perawat : yup.string(),
      id_perawat : yup.string(),
      unit : yup.string(),
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
  static createFromJson(json: ICreateImplementationRiskPatientsRequest) {
    return new CreateImplementationRiskPatientsRequest(json);
  }
}
