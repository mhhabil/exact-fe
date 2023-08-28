import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { StorageService } from '@src/shared/local-storage';

const companyCode = StorageService().get('companyCode')?.replace(/"/g, '');
export interface IChangePinRequest extends IAppRequest {
  signature: string;
  new_pin: string;
  verification_pin: string;
  old_pin: string;
}

export class ChangePinRequest extends AppRequest {
  signature: string;
  new_pin: string;
  verification_pin: string;
  old_pin: string;

  constructor(request: IChangePinRequest) {
    super(request);
    this.signature = request.signature;
    this.new_pin = request.new_pin;
    this.verification_pin = request.verification_pin;
    this.old_pin = request.old_pin;
  }

  static schema() {
    return yup.object().shape({
      signature: yup.string(),
      new_pin: yup.string().min(4, 'PIN harus terdiri dari 4 karakter').max(4, 'PIN harus terdiri dari 4 karakter'),
      verification_pin: yup.string().oneOf([yup.ref('new_pin')], 'PIN verifikasi harus sama dengan PIN Baru'),
      old_pin: yup.string().min(4, 'PIN harus terdiri dari 4 karakter').max(4, 'PIN harus terdiri dari 4 karakter'),
    });
  }

  normalize() {
    return {
      "tanda-tangan": this.signature,
      "pin-baru": this.new_pin,
      "pin-verifikasi": this.verification_pin,
      "pin-lama": this.old_pin,
      nomor_mr: null,
      id_pelayanan: null,
      kode_cabang: companyCode ?? '',
      tipe_pasien: null,
      jenis_pelayanan: null,
      id_dokter: null,
      no_sep: null,
    }
  }

  static createFromJson(json: IChangePinRequest) {
    return new ChangePinRequest(json);
  }
}
