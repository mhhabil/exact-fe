import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface ICreateResultUsgRequest extends IAppRequest {
  unit: string;
  'list-no-berobat': string;
  od_gain: string;
  od_axl: string;
  od_struktur_bola_mata: string;
  od_bentuk_kelainan: string;
  od_lokasi: string;
  od_perlekatan: string;
  od_after_movement: string;
  od_spike: string;
  od_lain_lain: string;
  os_gain: string;
  os_axl: string;
  os_struktur_bola_mata: string;
  os_bentuk_kelainan: string;
  os_lokasi: string;
  os_perlekatan: string;
  os_after_movement: string;
  os_spike: string;
  os_lain_lain: string;
  kesimpulan: string;
  kesimpulan_opt: string;
  'ttd-tanggal': string;
  'ttd-perawat-pemeriksa': string;
  perawat_pemeriksa: string;
  'ttd-dokter-pemeriksa': string;
  dokter_pemeriksa: string;
}

export class CreateResultUsgRequest extends AppRequest {
  unit: string;
  'list-no-berobat': string;
  od_gain: string;
  od_axl: string;
  od_struktur_bola_mata: string;
  od_bentuk_kelainan: string;
  od_lokasi: string;
  od_perlekatan: string;
  od_after_movement: string;
  od_spike: string;
  od_lain_lain: string;
  os_gain: string;
  os_axl: string;
  os_struktur_bola_mata: string;
  os_bentuk_kelainan: string;
  os_lokasi: string;
  os_perlekatan: string;
  os_after_movement: string;
  os_spike: string;
  os_lain_lain: string;
  kesimpulan: string;
  kesimpulan_opt: string;
  'ttd-tanggal': string;
  'ttd-perawat-pemeriksa': string;
  perawat_pemeriksa: string;
  'ttd-dokter-pemeriksa': string;
  dokter_pemeriksa: string;

  constructor(request: ICreateResultUsgRequest) {
    super(request);
    this.unit = request.unit;
    this['list-no-berobat'] = request['list-no-berobat'];
    this.od_gain = request.od_gain;
    this.od_axl = request.od_axl;
    this.od_struktur_bola_mata = request.od_struktur_bola_mata;
    this.od_bentuk_kelainan = request.od_bentuk_kelainan;
    this.od_lokasi = request.od_lokasi;
    this.od_perlekatan = request.od_perlekatan;
    this.od_after_movement = request.od_after_movement;
    this.od_spike = request.od_spike;
    this.od_lain_lain = request.od_lain_lain;
    this.os_gain = request.os_gain;
    this.os_axl = request.os_axl;
    this.os_struktur_bola_mata = request.os_struktur_bola_mata;
    this.os_bentuk_kelainan = request.os_bentuk_kelainan;
    this.os_lokasi = request.os_lokasi;
    this.os_perlekatan = request.os_perlekatan;
    this.os_after_movement = request.os_after_movement;
    this.os_spike = request.os_spike;
    this.os_lain_lain = request.os_lain_lain;
    this.kesimpulan = request.kesimpulan;
    this.kesimpulan_opt = request.kesimpulan_opt;
    this['ttd-tanggal'] = request['ttd-tanggal'] ? DateTimeConverter.convertToNormalDatetime(request['ttd-tanggal']) : '';
    this['ttd-perawat-pemeriksa'] = request['ttd-perawat-pemeriksa'];
    this.perawat_pemeriksa = request.perawat_pemeriksa;
    this['ttd-dokter-pemeriksa'] = request['ttd-dokter-pemeriksa'];
    this.dokter_pemeriksa = request.dokter_pemeriksa;
  }

  static schema() {
    return yup.object().shape({
      'list-no-berobat': yup.string(),
      od_gain: yup.string(),
      od_axl: yup.string(),
      od_struktur_bola_mata: yup.string(),
      od_bentuk_kelainan: yup.string(),
      od_lokasi: yup.string(),
      od_perlekatan: yup.string(),
      od_after_movement: yup.string(),
      od_spike: yup.string(),
      od_lain_lain: yup.string(),
      os_gain: yup.string(),
      os_axl: yup.string(),
      os_struktur_bola_mata: yup.string(),
      os_bentuk_kelainan: yup.string(),
      os_lokasi: yup.string(),
      os_perlekatan: yup.string(),
      os_after_movement: yup.string(),
      os_spike: yup.string(),
      os_lain_lain: yup.string(),
      kesimpulan: yup.string(),
      kesimpulan_opt:  yup.string(),
      'ttd-tanggal': yup.string(),
      'ttd-perawat-pemeriksa': yup.string(),
      perawat_pemeriksa: yup.string(),
      'ttd-dokter-pemeriksa': yup.string(),
      dokter_pemeriksa: yup.string(),
    });
  }

  static createFromJson(json: ICreateResultUsgRequest) {
    return new CreateResultUsgRequest(json);
  }
}