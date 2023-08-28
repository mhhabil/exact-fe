import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { DateTimeConverter } from '@shared/datetime-converter';

export interface ICreateAssessmentVitalSignsRequest extends IAppRequest {
  waktu_asesmen: string;
  suhu: string;
  nadi: string;
  pernafasan: string;
  tekanan_darah: string;
  oxygen_saturation: string;
  th: string;
  skala_nyeri: string;
  lokasi_id: string;
  kualitas_id: string;
  frekuensi_id: string;
  tindakan_id: string;
  unit: string;
  id_perawat: string;
  ttd_perawat: string;
}

export class CreateAssessmentVitalSignsRequest extends AppRequest {
  waktu_asesmen: string;
  suhu: string;
  nadi: string;
  pernafasan: string;
  tekanan_darah: string;
  oxygen_saturation: string;
  th: string;
  skala_nyeri: string;
  lokasi_id: string;
  kualitas_id: string;
  frekuensi_id: string;
  tindakan_id: string;
  id_perawat: string;
  ttd_perawat: string;

  constructor(model: ICreateAssessmentVitalSignsRequest) {
    super(model);
    this.waktu_asesmen = model.waktu_asesmen;
    this.suhu = model.suhu;
    this.nadi = model.nadi;
    this.pernafasan = model.pernafasan;
    this.tekanan_darah = model.tekanan_darah;
    this.oxygen_saturation = model.oxygen_saturation;
    this.th = model.th;
    this.skala_nyeri = model.skala_nyeri;
    this.lokasi_id = model.lokasi_id;
    this.kualitas_id = model.kualitas_id;
    this.frekuensi_id = model.frekuensi_id;
    this.tindakan_id = model.tindakan_id;
    this.id_perawat = model.id_perawat;
    this.ttd_perawat = model.ttd_perawat;

  }
  normalize() {
    return {
      waktu_asesmen : this.waktu_asesmen ? DateTimeConverter.convertToNormalDatetime(this.waktu_asesmen) : '',
      suhu : this.suhu,
      nadi : this.nadi,
      pernafasan : this.pernafasan,
      tekanan_darah : this.tekanan_darah,
      oxygen_saturation : this.oxygen_saturation,
      th : this.th,
      skala_nyeri : this.skala_nyeri,
      lokasi_id : this.lokasi_id,
      kualitas_id : this.kualitas_id,
      frekuensi_id : this.frekuensi_id,
      tindakan_id : this.tindakan_id,
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
      waktu_asesmen : yup.string(),
      suhu : yup.string(),
      nadi : yup.string(),
      pernafasan : yup.string(),
      tekanan_darah : yup.string(),
      oxygen_saturation : yup.string(),
      th : yup.string(),
      skala_nyeri : yup.string(),
      lokasi_id : yup.string(),
      kualitas_id : yup.string(),
      frekuensi_id : yup.string(),
      tindakan_id : yup.string(),
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
  static createFromJson(json: ICreateAssessmentVitalSignsRequest) {
    return new CreateAssessmentVitalSignsRequest(json);
  }
}
