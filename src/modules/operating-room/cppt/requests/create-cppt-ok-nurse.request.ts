import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPicture {
  Url_Image_Cppt_Ok: string;
  Name_Image_Cppt_Ok: string;
  Type_Image_Cppt_Ok: string;
  Size_Image_Cppt_Ok: any;
}

export class Picture {
  Url_Image_Cppt_Ok: string;
  Name_Image_Cppt_Ok: string;
  Type_Image_Cppt_Ok: string;
  Size_Image_Cppt_Ok: any;

  constructor(req: IPicture) {
    this.Url_Image_Cppt_Ok = req.Url_Image_Cppt_Ok;
    this.Name_Image_Cppt_Ok = req.Name_Image_Cppt_Ok;
    this.Type_Image_Cppt_Ok = req.Type_Image_Cppt_Ok;
    this.Size_Image_Cppt_Ok = req.Size_Image_Cppt_Ok;
  }

  static scheme() {
    return yup.object().shape({
      Url_Image_Cppt_Ok: yup.string(),
      Name_Image_Cppt_Ok: yup.string(),
      Type_Image_Cppt_Ok: yup.string(),
      Size_Image_Cppt_Ok: yup.mixed(),
    })
  }
}
export interface ICreateCpptOkNurseRequest extends IAppRequest {
  unit: string;
  data_s: string;
  data_o: string;
  data_a: string;
  data_p: string;
  instruksi_ppa: string;
  picture: IPicture;
  waktu: string;
  id_perawat_cppt: string;
  ttd_perawat_cppt: string;
  id_dokter_pengkaji: string;
  ttd_dokter_pengkaji: string;
}

export class CreateCpptOkNurseRequest extends AppRequest {
  unit: string;
  data_s: string;
  data_o: string;
  data_a: string;
  data_p: string;
  instruksi_ppa: string;
  picture: Picture;
  waktu: string;
  id_perawat_cppt: string;
  ttd_perawat_cppt: string;
  id_dokter_pengkaji: string;
  ttd_dokter_pengkaji: string;

  constructor(request: ICreateCpptOkNurseRequest) {
    super(request);

    this.unit = request.unit ?? 'OK';
    this.data_s = request.data_s;
    this.data_o = request.data_o;
    this.data_a = request.data_a;
    this.data_p = request.data_p;
    this.instruksi_ppa = request.instruksi_ppa;
    this.picture = request.picture;
    this.waktu = request.waktu;
    this.id_perawat_cppt = request.id_perawat_cppt;
    this.ttd_perawat_cppt = request.ttd_perawat_cppt;
    this.id_dokter_pengkaji = request.id_dokter_pengkaji;
    this.ttd_dokter_pengkaji = request.ttd_dokter_pengkaji;
  }

  normalize() {
    return {
      'data-s': this.data_s,
      'data-o': this.data_o,
      'data-a': this.data_a,
      'data-p': this.data_p,
      'instruksi-ppa': this.instruksi_ppa,
      picture: this.picture,
      waktu: this.waktu ? DateTimeConverter.convertToNormalDatetime(this.waktu) : '',
      'id-perawat-cppt': this.id_perawat_cppt ?? '',
      'ttd-perawat-cppt': this.ttd_perawat_cppt ?? '',
      'id-dokter-pengkaji': this.id_dokter_pengkaji ?? '',
      'ttd-dokter-pengkaji': this.ttd_dokter_pengkaji ?? '',
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
      data_s: yup.string().required(),
      data_o: yup.string().required(),
      data_a: yup.string().required(),
      waktu: yup.string().required(),
      // data_a_text: yup.string(),
      // data_p: yup.string(),
      // instruksi_ppa: yup.string(),
      // waktu: yup.string(),
      // id_perawat_cppt: yup.string(),
      // ttd_perawat_cppt: yup.string(),
      // id_dokter_pengkaji: yup.string(),
      // ttd_dokter_pengkaji: yup.string(),
    });
  }

  static createFromJson(json: ICreateCpptOkNurseRequest) {
    return new CreateCpptOkNurseRequest(json);
  }
}
