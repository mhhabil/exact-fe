import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { DateTimeConverter } from '@shared/datetime-converter';

export interface ICreateNursingEarlyWarning extends IAppRequest {
  tanggal_konsul: string;
  rr: string;
  score_rr: string;
  nadi: string;
  score_nadi: string;
  td: string;
  td_1: string;
  score_td: string
  suhu: string;
  score_suhu:string;
  tk:string;
  score_tk: string;
  perilaku: string;
  score_perilaku: string;
  kardiovaskular: string;
  score_kardiovaskular: string;
  total_skor: string;
  keterangan: string;
  tipe_ews: string;
  ttd_perawat: string;
  id_perawat: string;
}

export class CreateNursingEarlyWarningRequest extends AppRequest {
  tanggal_konsul: string;
  rr: string;
  score_rr: string;
  nadi: string;
  score_nadi: string;
  td: string;
  td_1: string;
  score_td: string
  suhu: string;
  score_suhu:string;
  tk:string;
  score_tk: string;
  perilaku: string;
  score_perilaku: string;
  kardiovaskular: string;
  score_kardiovaskular: string;
  total_skor: string;
  keterangan: string;
  tipe_ews: string;
  ttd_perawat: string;
  id_perawat: string;

  constructor(request: ICreateNursingEarlyWarning) {
    super(request);
    this.tanggal_konsul = request.tanggal_konsul ? DateTimeConverter.convertToNormalDatetime(request.tanggal_konsul) : '';
    this.rr = request.rr;
    this.score_rr = request.score_rr;
    this.nadi = request.nadi;
    this.score_nadi = request.score_nadi;
    this.td = request.td;
    this.td_1 = request.td_1;
    this.score_td = request.score_td;
    this.suhu = request.suhu;
    this.score_suhu = request.score_suhu;
    this.tk = request.tk;
    this.score_tk = request.score_tk;
    this.perilaku = request.perilaku;
    this.score_perilaku = request.score_perilaku;
    this.kardiovaskular = request.kardiovaskular;
    this.score_kardiovaskular = request.score_kardiovaskular;
    this.total_skor = request.total_skor;
    this.keterangan = request.keterangan;
    this.tipe_ews = request.tipe_ews;
    this.ttd_perawat = request.ttd_perawat;
    this.id_perawat = request.id_perawat
  }

  static schema() {
    return yup.object().shape({
      tanggal_konsul: yup.string(),
      rr: yup.string(),
      score_rr: yup.string(),
      nadi: yup.string(),
      score_nadi: yup.string(),
      td: yup.string(),
      td_1: yup.string(),
      score_td: yup.string(),
      suhu: yup.string(),
      score_suhu:yup.string(),
      tk:yup.string(),
      score_tk: yup.string(),
      perilaku: yup.string(),
      score_perilaku: yup.string(),
      kardiovaskular: yup.string(),
      score_kardiovaskular: yup.string(),
      total_skor: yup.string(),
      keterangan: yup.string(),
      tipe_ews: yup.string(),
    })
  }

  static convertToNormalDatetime(date: any) {
    const d = new Date(date);
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }
  static createFromJson(json: ICreateNursingEarlyWarning) {
    return new CreateNursingEarlyWarningRequest(json);
  }

}
