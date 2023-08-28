import * as yup from 'yup';
import { IValidateCpptRoRequest, ValidateCpptRoRequest } from '@modules/ro/cppt/requests/validate-cppt-ro.request';

export interface IValidateCpptOutPatientRequest extends IValidateCpptRoRequest {
  ID: string;
  dokter_dpjp: string;
}

export class ValidateCpptOutPatientRequest extends ValidateCpptRoRequest {
  ID: string;
  dokter_dpjp: string;

  constructor(request: IValidateCpptOutPatientRequest) {
    super(request);
    this.ID = request.ID;
    this.dokter_dpjp = request.dokter_dpjp;
  }

  normalize(): any {
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
    }
  }

  static scheme() {
    return yup.object().shape({
      ID: yup.string(),
    });
  }

  static createFromJson(json: IValidateCpptOutPatientRequest) {
    return new ValidateCpptOutPatientRequest(json);
  }
}
