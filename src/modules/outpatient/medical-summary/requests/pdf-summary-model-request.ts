import { AppRequest, IAppRequest } from "@src/shared/request";

export interface IUp {
  date: string;
  dokter_rawat: string;
  nama_tindakan: string;
}

export class Up {
  date: string;
  dokter_rawat: string;
  nama_tindakan: string;

  constructor(req: IUp) {
    this.date = req.date;
    this.dokter_rawat = req.dokter_rawat;
    this.nama_tindakan = req.nama_tindakan;
  }
}

export interface IDown {
  tgl: string;
  nama_dokter: string;
  diagnosa: string;
  terapi: string;
  keterangan: string;
}

export class Down {
  tgl: string;
  nama_dokter: string;
  diagnosa: string;
  terapi: string;
  keterangan: string;

  constructor(req: IDown) {
    this.tgl = req.tgl;
    this.nama_dokter = req.nama_dokter;
    this.diagnosa = req.diagnosa;
    this.terapi = req.terapi;
    this.keterangan = req.keterangan;
  }
}

export interface IUpdateResumeMedisPdf extends IAppRequest {
  'pasien.Nama': string;
  'pasien.Tgl_Lahir': string;
  'pasien.Umur': string;
  'pasien.Jenis_Kelamin': string;
  up: Array<IUp>;
  down: Array<IDown>;
  nik: string;
}

export class UpdateResumeMedisPdf extends AppRequest {
  'pasien.Nama': string;
  'pasien.Tgl_Lahir': string;
  'pasien.Umur': string;
  'pasien.Jenis_Kelamin': string;
  up: Array<IUp>;
  down: Array<IDown>;
  nik: string;

  constructor(req: IUpdateResumeMedisPdf) {
    super(req);
    this["pasien.Jenis_Kelamin"] = req["pasien.Jenis_Kelamin"];
    this["pasien.Nama"] = req["pasien.Nama"];
    this["pasien.Tgl_Lahir"] = req["pasien.Tgl_Lahir"];
    this["pasien.Umur"] = req["pasien.Umur"];
    this.up = req.up && Array.isArray(req.up) ? req.up.map(c => new Up(c)) : [];
    this.down = req.down && Array.isArray(req.down) ? req.down.map(c => new Down(c)) : [];
    this.nik = req.nik;
  }

  static createFromJson(json: IUpdateResumeMedisPdf) {
    return new UpdateResumeMedisPdf(json);
  }
}
