export interface IChangePin {
  PIN: string;
  _id: string;
  ID_Karyawan: string;
  Last_Updated: string;
  Tanda_Tangan: string;
}

export class ChangePin {
  PIN: string;
  _id: string;
  ID_Karyawan: string;
  Last_Updated: string;
  Tanda_Tangan: string;
  constructor(request: IChangePin) {
    this.PIN = request.PIN;
    this._id = request._id;
    this.ID_Karyawan = request.ID_Karyawan;
    this.Last_Updated = request.Last_Updated;
    this.Tanda_Tangan = request.Tanda_Tangan;
  }
}
