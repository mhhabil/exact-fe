import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';

export interface IValidateCpptRoRequest extends IAppRequest {
  ID: string;
  dokter_dpjp: string;
}

export class ValidateCpptRoRequest extends AppRequest {
  ID: string;
  dokter_dpjp: string;

  constructor(request: IValidateCpptRoRequest) {
    super(request);
    this.ID = request.ID;
    this.dokter_dpjp = request.dokter_dpjp;
  }

  normalize() {
    return {
      nomor_mr: this.nomor_mr,
      id_pelayanan: this.id_pelayanan,
      kode_cabang: this.kode_cabang,
      tipe_pasien: this.tipe_pasien,
      jenis_pelayanan: this.jenis_pelayanan,
      id_dokter: this.id_dokter,
      no_sep: this.no_sep,
      ID: this.ID,
      dokter_dpjp: this.dokter_dpjp,
      emr_id: this.emr_id,
    }
  }

  static scheme() {
    return yup.object().shape({
      ID: yup.string(),
    });
  }

  static createFromJson(json: IValidateCpptRoRequest) {
    return new ValidateCpptRoRequest(json);
  }
}
