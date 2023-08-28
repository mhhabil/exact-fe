export interface ISignatureModel {
  Last_Updated: string;
  PIN: string;
  Signature: string;
  ID_Karyawan: string;
}

export class SignatureModel {
  Last_Updated: string;
  PIN: string;
  Signature: string;
  ID_Karyawan: string;

  constructor(signature: ISignatureModel) {
    this.Last_Updated = signature.Last_Updated;
    this.PIN = signature.PIN;
    this.Signature = signature.Signature;
    this.ID_Karyawan = signature.ID_Karyawan;
  }
}
