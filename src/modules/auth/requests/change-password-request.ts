import * as yup from 'yup';

export interface IChangePasswordRequest {
  old_password: string;
  new_password: string;
  confirm_password: string;
}

export class ChangePasswordRequest {
  old_password: string;
  new_password: string;
  confirm_password: string;

  constructor(request: IChangePasswordRequest) {
    this.old_password = request.old_password;
    this.new_password = request.new_password;
    this.confirm_password = request.confirm_password;
  }

  static schema() {
    return yup.object().shape({
      old_password: yup.string(),
      new_password: yup.string().min(8, 'Password harus terdiri dari minimal 8 karakter').matches(/^(?=.*[A-Z])(?=.*[0-9])/, 'Password harus terdiri dari minimal 1 angka dan 1 huruf kapital'),
      confirm_password: yup.string().oneOf([yup.ref('new_password')], 'Password verifikasi harus sama dengan Password Baru'),
    });
  }
}
