import { DateTimeConverter } from "@src/shared/datetime-converter";
import { AppRequest, IAppRequest } from "@src/shared/request";
import { IInMeds, IMedsAllergy, IOutMeds, IRoomMeds } from "../models/meds-reconciliation.model";

export interface IMedsAllergyReq {
  nama_obat_alergi: string;
  tingkat: string;
  reaksi_alergi: string;
}

export class MedsAllergyReq {
  nama_obat_alergi: string;
  tingkat: string;
  reaksi_alergi: string;

  constructor(req: IMedsAllergyReq) {
    this.nama_obat_alergi = req.nama_obat_alergi;
    this.tingkat = req.tingkat;
    this.reaksi_alergi = req.reaksi_alergi;
  }

  static createFromModel(model: IMedsAllergy): IMedsAllergyReq {
    return {
      nama_obat_alergi: model.Nama_Obat_Alergi ?? '',
      tingkat: model.Tingkat ?? '',
      reaksi_alergi: model.Reaksi_Alergi ?? '',
    }
  }
}

export interface IInMedsReq {
  nama_obat: string;
  jumlah: string;
  rute: string;
  aturan_pakai: string;
  tindak_lanjut: string;
  perubahan_aturan_pakai: string;
  obat_milik_pasien: string
}

export class InMedsReq {
  nama_obat: string;
  jumlah: string;
  rute: string;
  aturan_pakai: string;
  tindak_lanjut: string;
  perubahan_aturan_pakai: string;
  obat_milik_pasien: string

  constructor(req: IInMedsReq) {
    this.nama_obat = req.nama_obat;
    this.jumlah = req.jumlah;
    this.rute = req.rute;
    this.aturan_pakai = req.aturan_pakai;
    this.tindak_lanjut = req.tindak_lanjut;
    this.perubahan_aturan_pakai = req.perubahan_aturan_pakai;
    this.obat_milik_pasien = req.obat_milik_pasien;
  }

  static createFromModel(model: IInMeds): IInMedsReq {
    return {
      nama_obat: model.Nama_Obat ?? '',
      jumlah: model.Jumlah ?? '',
      rute: model.Rute ?? '',
      aturan_pakai: model.Aturan_Pakai ?? '',
      tindak_lanjut: model.Tindak_Lanjut ?? '',
      perubahan_aturan_pakai: model.Perubahan_Aturan_Pakai ?? '',
      obat_milik_pasien: model.Obat_Milik_Pasien ?? '',
    }
  }
}

export interface IRoomMedsReq {
  nama_obat: string;
  jumlah: string;
  rute: string;
  aturan_pakai: string;
  tindak_lanjut: string;
  perubahan_aturan_pakai: string;
}

export class RoomMedsReq {
  nama_obat: string;
  jumlah: string;
  rute: string;
  aturan_pakai: string;
  tindak_lanjut: string;
  perubahan_aturan_pakai: string;

  constructor(req: IRoomMedsReq) {
    this.nama_obat = req.nama_obat;
    this.jumlah = req.jumlah;
    this.rute = req.rute;
    this.aturan_pakai = req.aturan_pakai;
    this.tindak_lanjut = req.tindak_lanjut;
    this.perubahan_aturan_pakai = req.perubahan_aturan_pakai;
  }

  static createFromModel(model: IRoomMeds): IRoomMedsReq {
    return {
      nama_obat: model.Nama_Obat ?? '',
      jumlah: model.Jumlah ?? '',
      rute: model.Rute ?? '',
      aturan_pakai: model.Aturan_Pakai ?? '',
      tindak_lanjut: model.Tindak_Lanjut ?? '',
      perubahan_aturan_pakai: model.Perubahan_Aturan_Pakai ?? '',
    }
  }
}

export interface IOutMedsReq {
  nama_obat: string;
  jumlah: string;
  rute: string;
  aturan_pakai: string;
  tindak_lanjut: string;
  perubahan_aturan_pakai: string;
  kategori: string;
}

export class OutMedsReq {
  nama_obat: string;
  jumlah: string;
  rute: string;
  aturan_pakai: string;
  tindak_lanjut: string;
  perubahan_aturan_pakai: string;
  kategori: string;

  constructor(req: IOutMedsReq) {
    this.nama_obat = req.nama_obat;
    this.jumlah = req.jumlah;
    this.rute = req.rute;
    this.aturan_pakai = req.aturan_pakai;
    this.tindak_lanjut = req.tindak_lanjut;
    this.perubahan_aturan_pakai = req.perubahan_aturan_pakai;
    this.kategori = req.kategori;
  }

  static createFromModel(model: IOutMeds): IOutMedsReq {
    return {
      nama_obat: model.Nama_Obat ?? '',
      jumlah: model.Jumlah ?? '',
      rute: model.Rute ?? '',
      aturan_pakai: model.Aturan_Pakai ?? '',
      tindak_lanjut: model.Tindak_Lanjut ?? '',
      perubahan_aturan_pakai: model.Perubahan_Aturan_Pakai ?? '',
      kategori: model.Kategori ?? '',
    }
  }
}

export interface IUpdateMedsReconciliationRequest extends IAppRequest {
  riwayat_pemakaian_obat: Array<string>;
  alergi_obat_radio: string;
  alergi_obat: Array<IMedsAllergyReq>;
  unit_masuk_rs: string;
  id_ka_unit_masuk_rs: string;
  waktu_masuk_rs: string;
  obat_saat_masuk_rs: Array<IInMedsReq>;
  id_perawat_masuk_rs: string;
  ttd_perawat_masuk_rs: string;
  ttd_pasien_masuk_rs: string;
  id_dokter_masuk_rs: string;
  ttd_dokter_masuk_rs: string;
  id_apoteker_masuk_rs: string;
  ttd_apoteker_masuk_rs: string;
  unit_ruangan_1: string;
  id_ka_unit_ruangan_1: string;
  waktu_ruangan_1: string;
  obat_ruangan_1: Array<IRoomMedsReq>;
  id_perawat_ruangan_1: string;
  ttd_perawat_ruangan_1: string;
  id_dokter_ruangan_1: string;
  ttd_dokter_ruangan_1: string;
  ttd_pasien_ruangan_1: string;
  id_apoteker_ruangan_1: string;
  ttd_apoteker_ruangan_1: string;
  unit_ruangan_2: string;
  id_ka_unit_ruangan_2: string;
  waktu_ruangan_2: string;
  obat_ruangan_2: Array<IRoomMedsReq>;
  id_perawat_ruangan_2: string;
  ttd_perawat_ruangan_2: string;
  id_dokter_ruangan_2: string;
  ttd_dokter_ruangan_2: string;
  ttd_pasien_ruangan_2: string;
  id_apoteker_ruangan_2: string;
  ttd_apoteker_ruangan_2: string;
  unit_keluar: string;
  id_ka_unit_keluar: string;
  waktu_keluar: string;
  obat_keluar: Array<IOutMedsReq>;
  id_perawat_keluar: string;
  ttd_perawat_keluar: string;
  id_dokter_keluar: string;
  ttd_dokter_keluar: string;
  ttd_pasien_keluar: string;
  id_apoteker_keluar: string;
  ttd_apoteker_keluar: string;
}

export class UpdateMedsReconciliationRequest extends AppRequest {
  riwayat_pemakaian_obat: Array<string>;
  alergi_obat_radio: string;
  alergi_obat: Array<IMedsAllergyReq>;
  unit_masuk_rs: string;
  id_ka_unit_masuk_rs: string;
  waktu_masuk_rs: string;
  obat_saat_masuk_rs: Array<IInMedsReq>;
  id_perawat_masuk_rs: string;
  ttd_perawat_masuk_rs: string;
  ttd_pasien_masuk_rs: string;
  id_dokter_masuk_rs: string;
  ttd_dokter_masuk_rs: string;
  id_apoteker_masuk_rs: string;
  ttd_apoteker_masuk_rs: string;
  unit_ruangan_1: string;
  id_ka_unit_ruangan_1: string;
  waktu_ruangan_1: string;
  obat_ruangan_1: Array<IRoomMedsReq>;
  id_perawat_ruangan_1: string;
  ttd_perawat_ruangan_1: string;
  id_dokter_ruangan_1: string;
  ttd_dokter_ruangan_1: string;
  ttd_pasien_ruangan_1: string;
  id_apoteker_ruangan_1: string;
  ttd_apoteker_ruangan_1: string;
  unit_ruangan_2: string;
  id_ka_unit_ruangan_2: string;
  waktu_ruangan_2: string;
  obat_ruangan_2: Array<IRoomMedsReq>;
  id_perawat_ruangan_2: string;
  ttd_perawat_ruangan_2: string;
  id_dokter_ruangan_2: string;
  ttd_dokter_ruangan_2: string;
  ttd_pasien_ruangan_2: string;
  id_apoteker_ruangan_2: string;
  ttd_apoteker_ruangan_2: string;
  unit_keluar: string;
  id_ka_unit_keluar: string;
  waktu_keluar: string;
  obat_keluar: Array<IOutMedsReq>;
  id_perawat_keluar: string;
  ttd_perawat_keluar: string;
  id_dokter_keluar: string;
  ttd_dokter_keluar: string;
  ttd_pasien_keluar: string;
  id_apoteker_keluar: string;
  ttd_apoteker_keluar: string;

  constructor(req: IUpdateMedsReconciliationRequest) {
    super(req);
    this.riwayat_pemakaian_obat = req.riwayat_pemakaian_obat && Array.isArray(req.riwayat_pemakaian_obat) ? req.riwayat_pemakaian_obat : [];
    this.alergi_obat_radio = req.alergi_obat_radio;
    this.alergi_obat = req.alergi_obat && Array.isArray(req.alergi_obat) ? req.alergi_obat.map(d => new MedsAllergyReq(d)) : [];
    this.unit_masuk_rs = req.unit_masuk_rs;
    this.id_ka_unit_masuk_rs = req.id_ka_unit_masuk_rs;
    this.waktu_masuk_rs = req.waktu_masuk_rs ? DateTimeConverter.convertToNormalDatetime(req.waktu_masuk_rs) : '';
    this.obat_saat_masuk_rs = req.obat_saat_masuk_rs && Array.isArray(req.obat_saat_masuk_rs) ? req.obat_saat_masuk_rs.map(d => new InMedsReq(d)) : [];
    this.id_perawat_masuk_rs = req.id_perawat_masuk_rs;
    this.ttd_perawat_masuk_rs = req.ttd_perawat_masuk_rs;
    this.ttd_pasien_masuk_rs = req.ttd_pasien_masuk_rs;
    this.id_dokter_masuk_rs = req.id_dokter_masuk_rs;
    this.ttd_dokter_masuk_rs = req.ttd_dokter_masuk_rs;
    this.id_apoteker_masuk_rs = req.id_apoteker_masuk_rs;
    this.ttd_apoteker_masuk_rs = req.ttd_apoteker_masuk_rs;
    this.unit_ruangan_1 = req.unit_ruangan_1;
    this.id_ka_unit_ruangan_1 = req.id_ka_unit_ruangan_1;
    this.waktu_ruangan_1 = req.waktu_ruangan_1 ? DateTimeConverter.convertToNormalDatetime(req.waktu_ruangan_1) : '';
    this.obat_ruangan_1 = req.obat_ruangan_1 && Array.isArray(req.obat_ruangan_1) ? req.obat_ruangan_1.map(d => new RoomMedsReq(d)) : [];
    this.id_perawat_ruangan_1 = req.id_perawat_ruangan_1;
    this.ttd_perawat_ruangan_1 = req.ttd_perawat_ruangan_1;
    this.ttd_pasien_ruangan_1 = req.ttd_pasien_ruangan_1;
    this.id_dokter_ruangan_1 = req.id_dokter_ruangan_1;
    this.ttd_dokter_ruangan_1 = req.ttd_dokter_ruangan_1;
    this.id_apoteker_ruangan_1 = req.id_apoteker_ruangan_1;
    this.ttd_apoteker_ruangan_1 = req.ttd_apoteker_ruangan_1;
    this.unit_ruangan_2 = req.unit_ruangan_2;
    this.id_ka_unit_ruangan_2 = req.id_ka_unit_ruangan_2;
    this.waktu_ruangan_2 = req.waktu_ruangan_2 ? DateTimeConverter.convertToNormalDatetime(req.waktu_ruangan_2) : '';
    this.obat_ruangan_2 = req.obat_ruangan_2 && Array.isArray(req.obat_ruangan_2) ? req.obat_ruangan_2.map(d => new RoomMedsReq(d)) : [];
    this.id_perawat_ruangan_2 = req.id_perawat_ruangan_2;
    this.ttd_perawat_ruangan_2 = req.ttd_perawat_ruangan_2;
    this.ttd_pasien_ruangan_2 = req.ttd_pasien_ruangan_2;
    this.id_dokter_ruangan_2 = req.id_dokter_ruangan_2;
    this.ttd_dokter_ruangan_2 = req.ttd_dokter_ruangan_2;
    this.id_apoteker_ruangan_2 = req.id_apoteker_ruangan_2;
    this.ttd_apoteker_ruangan_2 = req.ttd_apoteker_ruangan_2;
    this.unit_keluar = req.unit_keluar;
    this.id_ka_unit_keluar = req.id_ka_unit_keluar;
    this.waktu_keluar = req.waktu_keluar ? DateTimeConverter.convertToNormalDatetime(req.waktu_keluar) : '';
    this.obat_keluar = req.obat_keluar && Array.isArray(req.obat_keluar) ? req.obat_keluar.map(d => new OutMedsReq(d)) : [];
    this.id_perawat_keluar = req.id_perawat_keluar;
    this.ttd_perawat_keluar = req.ttd_perawat_keluar;
    this.ttd_pasien_keluar = req.ttd_pasien_keluar;
    this.id_dokter_keluar = req.id_dokter_keluar;
    this.ttd_dokter_keluar = req.ttd_dokter_keluar;
    this.id_apoteker_keluar = req.id_apoteker_keluar;
    this.ttd_apoteker_keluar = req.ttd_apoteker_keluar;
  }

  static createFromJson(json: IUpdateMedsReconciliationRequest) {
    return new UpdateMedsReconciliationRequest(json);
  }
}

