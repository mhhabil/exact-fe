import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface ICreateRetinaLaserActionReportRequest extends IAppRequest {
  unit: string;
  'list-no-berobat': string;
  diagnosa_tindakan: string;
  mata: string[];
  jenis: string;
  obat: string;
  informasi: string;
  mata_pasien_ditetes: string[];
  tindakan_laser: string[];
  spot_size: string;
  durasi: string;
  power: string;
  jumlah_tembakan: string;
  komplikasi: string;
  'gambar-retina-od': string;
  'gambar-retina-os': string;
  noncort_eye_drop: string;
  'ttd-tanggal': string;
  'ttd-perawat-rawat-jalan': string;
  perawat_rawat_jalan: string;
  'ttd-dokter-operator': string;
  dokter_operator: string;
}

export class CreateRetinaLaserActionReportRequest extends AppRequest {
  'list-no-berobat': string;
  unit: string;
  diagnosa_tindakan: string;
  mata: string[];
  jenis: string;
  obat: string;
  informasi: string;
  mata_pasien_ditetes: string[];
  tindakan_laser: string[];
  spot_size: string;
  durasi: string;
  power: string;
  jumlah_tembakan: string;
  komplikasi: string;
  'gambar-retina-od': string;
  'gambar-retina-os': string;
  noncort_eye_drop: string;
  'ttd-tanggal': string;
  'ttd-perawat-rawat-jalan': string;
  perawat_rawat_jalan: string;
  'ttd-dokter-operator': string;
  dokter_operator: string;

  constructor(request: ICreateRetinaLaserActionReportRequest) {
    super(request);
    this.unit = request.unit;
    this['list-no-berobat'] = request['list-no-berobat'];
    this.diagnosa_tindakan = request.diagnosa_tindakan;
    this.mata = request.mata;
    this.jenis = request.jenis;
    this.obat = request.obat;
    this.informasi = request.informasi;
    this.mata_pasien_ditetes = request.mata_pasien_ditetes;
    this.tindakan_laser = request.tindakan_laser;
    this.spot_size = request.spot_size;
    this.durasi = request.durasi;
    this.power = request.power;
    this.jumlah_tembakan = request.jumlah_tembakan;
    this.komplikasi = request.komplikasi;
    this['gambar-retina-od'] = request['gambar-retina-od'];
    this['gambar-retina-os'] = request['gambar-retina-os'];
    this.noncort_eye_drop = request.noncort_eye_drop;
    this['ttd-tanggal'] = request['ttd-tanggal'] ? DateTimeConverter.convertToNormalDatetime(request['ttd-tanggal']) : '';
    this['ttd-perawat-rawat-jalan'] = request['ttd-perawat-rawat-jalan'];
    this.perawat_rawat_jalan = request.perawat_rawat_jalan;
    this['ttd-dokter-operator'] = request['ttd-dokter-operator'];
    this.dokter_operator = request.dokter_operator;
  }

  static schema() {
    return yup.object().shape({
      unit: yup.string(),
      'list-no-berobat': yup.string(),
      diagnosa_tindakan: yup.string(),
      mata: yup.string(),
      jenis: yup.string(),
      obat: yup.string(),
      informasi: yup.string(),
      mata_pasien_ditetes: yup.string(),
      tindakan_laser: yup.string(),
      spot_size: yup.string(),
      durasi: yup.string(),
      power: yup.string(),
      jumlah_tembakan: yup.string(),
      komplikasi: yup.string(),
      'gambar-retina-od': yup.string(),
      'gambar-retina-os': yup.string(),
      noncort_eye_drop: yup.string(),
      'ttd-tanggal': yup.string(),
      'ttd-perawat-rawat-jalan': yup.string(),
      perawat_rawat_jalan: yup.string(),
      'ttd-dokter-operator': yup.string(),
      dokter_operator: yup.string(),
    })
  }

  static createFromJson(json: ICreateRetinaLaserActionReportRequest) {
    return new CreateRetinaLaserActionReportRequest(json);
  }
}