import { DateTimeConverter } from "@src/shared/datetime-converter";
import { AppRequest, IAppRequest } from "@src/shared/request";

export interface IUpdateObat {
  kode_obat: any;
  nama_obat: any;
  nama_satuan: any;
  kode_aturanpakai: any;
  rute: any
}

export class UpdateObat {
  kode_obat: any;
  nama_obat: any;
  nama_satuan: any;
  kode_aturanpakai: any;
  rute: any

  constructor(req: IUpdateObat) {
    this.kode_obat = req.kode_obat;
    this.nama_obat = req.nama_obat;
    this.nama_satuan = req.nama_satuan;
    this.kode_aturanpakai = req.kode_aturanpakai;
    this.rute = req.rute;
  }
}

export interface ICreateRecordsOfMedicationOnTime extends IAppRequest {
  waktu: string;
  ttd_pasien: string;
  ttd_perawat: string;
  id_perawat: string;
  obat: Array<IUpdateObat>;
}

export class CreateRecordsOfMedicationOnTime extends AppRequest {
  waktu: string;
  ttd_pasien: string;
  ttd_perawat: string;
  id_perawat: string;
  obat: Array<IUpdateObat>;

  constructor(req: ICreateRecordsOfMedicationOnTime) {
    super(req)
    this.waktu = req.waktu ? DateTimeConverter.convertToNormalDatetime(req.waktu) : '';
    this.ttd_pasien = req.ttd_pasien;
    this.ttd_perawat = req.ttd_perawat;
    this.id_perawat = req.id_perawat;
    this.obat = req.obat && Array.isArray(req.obat) ? req.obat.map(c => new UpdateObat(c)) : [];
  }

  static createFromJson(json: ICreateRecordsOfMedicationOnTime) {
    return new CreateRecordsOfMedicationOnTime(json);
  }
}

export interface IUpdateRecordsOfMedicationOnTime extends ICreateRecordsOfMedicationOnTime {
  id: string;
}

export class UpdateRecordsOfMedicationOnTime extends CreateRecordsOfMedicationOnTime {
  id: string;

  constructor(req: IUpdateRecordsOfMedicationOnTime) {
    super(req);
    this.id = req.id
  }

  static createFromJson(json: IUpdateRecordsOfMedicationOnTime) {
    return new UpdateRecordsOfMedicationOnTime(json);
  }
}

export interface ICreateGivenMeds extends IAppRequest {
  rute: string;
  catatan: string;
  id_obat: string;
  id_aturanpakai: string;
  id_dokter_obat: string;
  ttd_dokter: string;
}

export class CreateGivenMeds extends AppRequest {
  rute: string;
  catatan: string;
  id_obat: string;
  id_aturanpakai: string;
  id_dokter_obat: string;
  ttd_dokter: string;

  constructor(req: ICreateGivenMeds) {
    super(req);
    this.rute = req.rute;
    this.catatan = req.catatan;
    this.id_obat = req.id_obat;
    this.id_aturanpakai = req.id_aturanpakai;
    this.id_dokter_obat = req.id_dokter_obat;
    this.ttd_dokter = req.ttd_dokter;
  }

  static createFromJson(json: ICreateGivenMeds) {
    return new CreateGivenMeds(json);
  }

  static createParams(object: any) {
    return {
      rute: object.route,
      catatan: object.notes,
      id_obat: object.meds_name && object.meds_name.value ? object.meds_name.value : object.meds_name ? object.meds_name : '',
      id_aturanpakai: object.how_to_use && object.how_to_use.id ? object.how_to_use.id : object.how_to_use ? object.how_to_use : '',
      id_dokter_obat: object.id_dokter_obat,
      ttd_dokter: object.ttd_dokter,
    }
  }
}

export interface IUpdateGivenMeds extends ICreateGivenMeds {
  id: string;
}

export class UpdateGivenMeds extends CreateGivenMeds {
  id: string;

  constructor(req: IUpdateGivenMeds) {
    super(req);
    this.id = req.id;
  }

  static createFromJson(json: IUpdateGivenMeds) {
    return new UpdateGivenMeds(json);
  }
}

export interface IValidateRecords extends IAppRequest {
  date: string;
  ttd_apoteker: string;
  id_apoteker: string;
}

export class ValidateRecords extends AppRequest {
  date: string;
  ttd_apoteker: string;
  id_apoteker: string;

  constructor(req: IValidateRecords) {
    super(req);
    this.date = req.date;
    this.ttd_apoteker = req.ttd_apoteker;
    this.id_apoteker = req.id_apoteker;
  }

  static createFromJson(json: IValidateRecords) {
    return new ValidateRecords(json);
  }
}

export interface IPdfCPOTWRequest extends IAppRequest {
  alergi: string;
  rpt: string;
  rpo: string;
}

export class PdfCPOTWRequest extends AppRequest {
  alergi: string;
  rpt: string;
  rpo: string;
  constructor(req: IPdfCPOTWRequest) {
    super(req);
    this.alergi = req.alergi;
    this.rpt = req.rpt;
    this.rpo = req.rpo;
  }

  static createFromJson(json: IPdfCPOTWRequest) {
    return new PdfCPOTWRequest(json);
  }
}

