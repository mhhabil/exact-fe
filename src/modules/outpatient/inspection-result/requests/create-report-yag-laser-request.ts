import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface ICreateReportYagLaserRequest extends IAppRequest {
  unit: string;
  'list-no-berobat': string;
  dokter: string;
  diagnosa_pra_tindakan: string;
  tanggal_tindakan: string;
  lama_tindakan: string;
  mata: string[];
  tanggal_fakoemulsifikasi: string;
  keterangan: string;
  mata_pasien_laser_ditetes: string[];
  power_laser: string;
  jumlah_laser: string;
  lain_lain: string;
  'gambar-mata-od': string;
  'gambar-mata-os': string;
  pasien_ditetes: string[];
  'ttd-perawat-rawat-jalan': string;
  perawat_rawat_jalan: string;
  'ttd-dokter-operator': string;
  dokter_operator: string;
}

export class CreateReportYagLaserRequest extends AppRequest {
  unit: string;
  'list-no-berobat': string;
  dokter: string;
  diagnosa_pra_tindakan: string;
  tanggal_tindakan: string;
  lama_tindakan: string;
  mata: string[];
  tanggal_fakoemulsifikasi: string;
  keterangan: string;
  mata_pasien_laser_ditetes: string[];
  power_laser: string;
  jumlah_laser: string;
  lain_lain: string;
  'gambar-mata-od': string;
  'gambar-mata-os': string;
  pasien_ditetes: string[];
  'ttd-perawat-rawat-jalan': string;
  perawat_rawat_jalan: string;
  'ttd-dokter-operator': string;
  dokter_operator: string;

  constructor(request: ICreateReportYagLaserRequest) {
    super(request);
    this.unit = request.unit;
    this['list-no-berobat'] = request['list-no-berobat'];
    this.dokter = request.dokter;
    this.diagnosa_pra_tindakan = request.diagnosa_pra_tindakan;
    this.tanggal_tindakan = request.tanggal_tindakan ? DateTimeConverter.convertToNormalDatetime(request.tanggal_tindakan) : '';
    this.lama_tindakan = request.lama_tindakan;
    this.mata = request.mata;
    this.tanggal_fakoemulsifikasi = request.tanggal_fakoemulsifikasi ? DateTimeConverter.convertToNormalDatetime(request.tanggal_fakoemulsifikasi) : '';
    this.keterangan = request.keterangan;
    this.mata_pasien_laser_ditetes = request.mata_pasien_laser_ditetes;
    this.power_laser = request.power_laser;
    this.jumlah_laser = request.jumlah_laser;
    this.lain_lain = request.lain_lain;
    this['gambar-mata-od'] = request['gambar-mata-od'];
    this['gambar-mata-os'] = request['gambar-mata-os'];
    this.pasien_ditetes = request.pasien_ditetes;
    this['ttd-perawat-rawat-jalan'] = request['ttd-perawat-rawat-jalan'];
    this.perawat_rawat_jalan = request.perawat_rawat_jalan;
    this['ttd-dokter-operator'] = request['ttd-dokter-operator'];
    this.dokter_operator = request.dokter_operator
  }

  static schema() {
    return yup.object().shape({
      unit: yup.string(),
      'list-no-berobat': yup.string(),
      dokter: yup.string(),
      diagnosa_pra_tindakan: yup.string(),
      tanggal_tindakan: yup.string(),
      lama_tindakan: yup.string(),
      mata: yup.string(),
      tanggal_fakoemulsifikasi: yup.string(),
      keterangan: yup.string(),
      mata_pasien_laser_ditetes: yup.string(),
      power_laser: yup.string(),
      jumlah_laser: yup.string(),
      lain_lain: yup.string(),
      'gambar-mata-od': yup.string(),
      'gambar-mata-os': yup.string(),
      pasien_ditetes: yup.string(),
      'ttd-perawat-rawat-jalan': yup.string(),
      perawat_rawat_jalan: yup.string(),
      'ttd-dokter-operator': yup.string(),
      dokter_operator: yup.string(),
    });
  }

  static createFromJson(json: ICreateReportYagLaserRequest) {
    return new CreateReportYagLaserRequest(json);
  }
}