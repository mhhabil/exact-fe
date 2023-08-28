import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { DateTimeConverter } from '@shared/datetime-converter';

export interface ICreatePainMonitoringRequest extends IAppRequest {
  waktu_monitor: string;
  temperatur: string;
  nadi: string;
  rr: string;
  tekanan_darah: string;
  skala_nyeri: string;
  lokasi_nyeri: string;
  tindakan: string;
  id_perawat: string;
  ttd_perawat: string;
  unit: string;
}

export class CreatePainMonitoringRequest extends AppRequest {
  waktu_monitor: string;
  temperatur: string;
  nadi: string;
  rr: string;
  tekanan_darah: string;
  skala_nyeri: string;
  lokasi_nyeri: string;
  tindakan: string;
  id_perawat: string;
  ttd_perawat: string;

  constructor(model: ICreatePainMonitoringRequest) {
    super(model);
    this.waktu_monitor = model.waktu_monitor;
    this.temperatur = model.temperatur;
    this.nadi = model.nadi;
    this.rr = model.rr;
    this.tekanan_darah = model.tekanan_darah;
    this.skala_nyeri = model.skala_nyeri;
    this.lokasi_nyeri = model.lokasi_nyeri;
    this.tindakan = model.tindakan;
    this.id_perawat = model.id_perawat;
    this.ttd_perawat = model.ttd_perawat;
  }
  normalize() {
    return {
      waktu_monitor : this.waktu_monitor ? DateTimeConverter.convertToNormalDatetime(this.waktu_monitor) : '',
      temperatur : this.temperatur,
      nadi : this.nadi,
      rr : this.rr,
      tekanan_darah : this.tekanan_darah,
      skala_nyeri : this.skala_nyeri,
      lokasi_nyeri : this.lokasi_nyeri,
      tindakan : this.tindakan,
      id_perawat : this.id_perawat,
      ttd_perawat : this.ttd_perawat,
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
      waktu_monitor : yup.string(),
      temperatur : yup.string(),
      nadi : yup.string(),
      rr : yup.string(),
      tekanan_darah : yup.string(),
      skala_nyeri : yup.string(),
      lokasi_nyeri : yup.string(),
      tindakan : yup.string(),
      id_perawat : yup.string(),
      ttd_perawat : yup.string(),
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
  static createFromJson(json: ICreatePainMonitoringRequest) {
    return new CreatePainMonitoringRequest(json);
  }
}
