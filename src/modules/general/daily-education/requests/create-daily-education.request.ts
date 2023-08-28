import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { DateTimeConverter } from '@shared/datetime-converter';

export interface ICreateDailyEducationRequest extends IAppRequest {
  unit: string;
  waktu: string;
  nama: string;
  telepon: string;
  alamat: string;
  uraian: string;
  tanda_tangan: string;
  ttd_pemberi_edukasi: string;
  id_pemberi_edukasi: string;
  pendengar_radio: string;
}

export class CreateDailyEducationRequest extends AppRequest {
  unit: string;
  waktu: string;
  nama: string;
  telepon: string;
  alamat: string;
  uraian: string;
  tanda_tangan: string;
  ttd_pemberi_edukasi: string;
  id_pemberi_edukasi: string;
  pendengar_radio: string;

  constructor(model: ICreateDailyEducationRequest) {
    super(model);

    this.unit = model.unit ?? 'RO';
    this.waktu = model.waktu;
    this.nama = model.nama;
    this.telepon = model.telepon;
    this.alamat = model.alamat;
    this.uraian = model.uraian;
    this.tanda_tangan = model.tanda_tangan;
    this.ttd_pemberi_edukasi = model.ttd_pemberi_edukasi;
    this.id_pemberi_edukasi = model.id_pemberi_edukasi;
    this.pendengar_radio = model.pendengar_radio;
  }

  normalize() {
    return {
      waktu: this.waktu ? DateTimeConverter.convertToNormalDatetime(this.waktu) : '',
      nama: this.nama,
      telepon: this.telepon,
      alamat: this.alamat,
      uraian: this.uraian,
      'tanda-tangan': this.tanda_tangan,
      'ttd-pemberi-edukasi': this.ttd_pemberi_edukasi,
      'id-pemberi-edukasi': this.id_pemberi_edukasi,
      'pendengar-radio': this.pendengar_radio,
      unit: this.unit,
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
      waktu: yup.string(),
      nama: yup.string().required(),
      telepon: yup.string().required(),
      alamat: yup.string().required(),
      uraian: yup.string(),
      'tanda-tangan': yup.string(),
      'ttd-pemberi-edukasi': yup.string(),
      'id-pemberi-edukasi': yup.string(),
      pendengar_radio: yup.string(),
      unit: yup.string(),
    });
  }
  static createFromJson(json: ICreateDailyEducationRequest) {
    return new CreateDailyEducationRequest(json);
  }
}
