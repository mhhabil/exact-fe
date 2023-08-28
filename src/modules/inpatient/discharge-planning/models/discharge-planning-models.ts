import { IProvisionOfInformationFormModel } from "@src/modules/outpatient/inform-consent/models/inform-consent.model";
import { IDataModel, DataModel } from "@src/shared/model";

export interface IBantuan {
  Diet: number;
  Makan: number;
  Mandi: number;
  Minum: number;
  Edukasi: number;
  Berpakaian: number;
  Transportasi: number;
  Menyiapkan_Makanan: number;
}

export class Bantuan {
  Diet: number;
  Makan: number;
  Mandi: number;
  Minum: number;
  Edukasi: number;
  Berpakaian: number;
  Transportasi: number;
  Menyiapkan_Makanan: number;
  constructor(req: IBantuan) {
    this.Diet = req.Diet;
    this.Makan = req.Makan;
    this.Mandi = req.Mandi;
    this.Minum = req.Minum;
    this.Edukasi = req.Edukasi;
    this.Berpakaian = req.Berpakaian;
    this.Transportasi = req.Transportasi;
    this.Menyiapkan_Makanan = req.Menyiapkan_Makanan;
  }
}

export interface IDischargePlanningFormModel {
  Bantuan: IBantuan;
  ID_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  Pasien_Dpjp: string;
  Nama_Dokter_DPJP: string;
  Nama_Petugas: string;
  Nyeri_Kronis: string;
  Pasien_Alasan: string;
  Bantuan_Khusus: string;
  Pasien_Perawat: string;
  Pasien_Tanggal: string;
  Bantuan_Pribadi: string;
  Tinggal_Sendiri: string;
  Waktu_Discharge: string;
  Antisipasi_Pulang: string;
  Pengaruh_Keluarga: string;
  Pengaruh_Keuangan: string;
  Peralatan_Sendiri: string;
  Alat_Bantu_Sendiri: string;
  Membantu_Keperluan: string;
  Pengaruh_Pekerjaan: string;
  Pasien_Perawat_Nama: string;
  Pasien_Diagnosa_Medis: string;
  Nyeri_Kronis_Keterangan: string;
  Bantuan_Khusus_Keterangan: string;
  Bantuan_Pribadi_Keterangan: string;
  Estimasi_Pemulangan_Pasien: string;
  Tinggal_Sendiri_Keterangan: string;
  Antisipasi_Pulang_Keterangan: string;
  Peralatan_Sendiri_Keterangan: string;
  Alat_Bantu_Sendiri_Keterangan: string;
  Membantu_Keperluan_Keterangan: string;
  Edukasi_Kesehatan: string;
  Edukasi_Kesehatan_Keterangan: string;
  Keterampilan_Khusus: string;
  Keterampilan_Khusus_Keterangan: string;
  Jadwal_Kontrol: string;
  Jadwal_Kontrol_Keterangan: string;
  Obat_Pulang_Check: string;
  Obat_Pulang_Waktu: string;
  Obat_Pulang_Keterangan: string;
  Surat_Kontrol_Check: string;
  Surat_Kontrol_Waktu: string;
  Surat_Kontrol_Keterangan: string;
  ID_Perawat_Pengkaji: string;
  Tanda_Tangan_Perawat_Pengkaji: string;
  Nama_Perawat_Pengkaji: string;
  Tanda_Tangan_Pasien: string;
}

export class DischargePlanningFormModel {
  Bantuan: IBantuan;
  ID_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  Pasien_Dpjp: string;
  Nama_Dokter_DPJP: string;
  Nama_Petugas: string;
  Nyeri_Kronis: string;
  Pasien_Alasan: string;
  Bantuan_Khusus: string;
  Pasien_Perawat: string;
  Pasien_Tanggal: string;
  Bantuan_Pribadi: string;
  Tinggal_Sendiri: string;
  Waktu_Discharge: string;
  Antisipasi_Pulang: string;
  Pengaruh_Keluarga: string;
  Pengaruh_Keuangan: string;
  Peralatan_Sendiri: string;
  Alat_Bantu_Sendiri: string;
  Membantu_Keperluan: string;
  Pengaruh_Pekerjaan: string;
  Pasien_Perawat_Nama: string;
  Pasien_Diagnosa_Medis: string;
  Nyeri_Kronis_Keterangan: string;
  Bantuan_Khusus_Keterangan: string;
  Bantuan_Pribadi_Keterangan: string;
  Estimasi_Pemulangan_Pasien: string;
  Tinggal_Sendiri_Keterangan: string;
  Antisipasi_Pulang_Keterangan: string;
  Peralatan_Sendiri_Keterangan: string;
  Alat_Bantu_Sendiri_Keterangan: string;
  Membantu_Keperluan_Keterangan: string;
  Edukasi_Kesehatan: string;
  Edukasi_Kesehatan_Keterangan: string;
  Keterampilan_Khusus: string;
  Keterampilan_Khusus_Keterangan: string;
  Jadwal_Kontrol: string;
  Jadwal_Kontrol_Keterangan: string;
  Obat_Pulang_Check: string;
  Obat_Pulang_Waktu: string;
  Obat_Pulang_Keterangan: string;
  Surat_Kontrol_Check: string;
  Surat_Kontrol_Waktu: string;
  Surat_Kontrol_Keterangan: string;
  ID_Perawat_Pengkaji: string;
  Tanda_Tangan_Perawat_Pengkaji: string;
  Nama_Perawat_Pengkaji: string;
  Tanda_Tangan_Pasien: string;
  constructor(request: IDischargePlanningFormModel) {
    this.Bantuan = request.Bantuan;
    this.ID_Petugas = request.ID_Petugas;
    this.Updated_At = request.Updated_At;
    this.Updated_By = request.Updated_By;
    this.Pasien_Dpjp = request.Pasien_Dpjp;
    this.Nama_Dokter_DPJP = request.Nama_Dokter_DPJP;
    this.Nama_Petugas = request.Nama_Petugas;
    this.Nyeri_Kronis = request.Nyeri_Kronis;
    this.Pasien_Alasan = request.Pasien_Alasan;
    this.Bantuan_Khusus = request.Bantuan_Khusus;
    this.Pasien_Perawat = request.Pasien_Perawat;
    this.Pasien_Tanggal = request.Pasien_Tanggal;
    this.Bantuan_Pribadi = request.Bantuan_Pribadi;
    this.Tinggal_Sendiri = request.Tinggal_Sendiri;
    this.Waktu_Discharge = request.Waktu_Discharge;
    this.Antisipasi_Pulang = request.Antisipasi_Pulang;
    this.Pengaruh_Keluarga = request.Pengaruh_Keluarga;
    this.Pengaruh_Keuangan = request.Pengaruh_Keuangan;
    this.Peralatan_Sendiri = request.Peralatan_Sendiri;
    this.Alat_Bantu_Sendiri = request.Alat_Bantu_Sendiri;
    this.Membantu_Keperluan = request.Membantu_Keperluan;
    this.Pengaruh_Pekerjaan = request.Pengaruh_Pekerjaan;
    this.Pasien_Perawat_Nama = request.Pasien_Perawat_Nama;
    this.Pasien_Diagnosa_Medis = request.Pasien_Diagnosa_Medis;
    this.Nyeri_Kronis_Keterangan = request.Nyeri_Kronis_Keterangan;
    this.Bantuan_Khusus_Keterangan = request.Bantuan_Khusus_Keterangan;
    this.Bantuan_Pribadi_Keterangan = request.Bantuan_Pribadi_Keterangan;
    this.Estimasi_Pemulangan_Pasien = request.Estimasi_Pemulangan_Pasien;
    this.Tinggal_Sendiri_Keterangan = request.Tinggal_Sendiri_Keterangan;
    this.Antisipasi_Pulang_Keterangan = request.Antisipasi_Pulang_Keterangan;
    this.Peralatan_Sendiri_Keterangan = request.Peralatan_Sendiri_Keterangan;
    this.Alat_Bantu_Sendiri_Keterangan = request.Alat_Bantu_Sendiri_Keterangan;
    this.Membantu_Keperluan_Keterangan = request.Membantu_Keperluan_Keterangan;
    this.Edukasi_Kesehatan = request.Edukasi_Kesehatan;
    this.Edukasi_Kesehatan_Keterangan = request.Edukasi_Kesehatan_Keterangan;
    this.Keterampilan_Khusus = request.Keterampilan_Khusus;
    this.Keterampilan_Khusus_Keterangan = request.Keterampilan_Khusus_Keterangan;
    this.Jadwal_Kontrol = request.Jadwal_Kontrol;
    this.Jadwal_Kontrol_Keterangan = request.Jadwal_Kontrol_Keterangan;
    this.Obat_Pulang_Check = request.Obat_Pulang_Check;
    this.Obat_Pulang_Waktu = request.Obat_Pulang_Waktu;
    this.Obat_Pulang_Keterangan = request.Obat_Pulang_Keterangan;
    this.Surat_Kontrol_Check = request.Surat_Kontrol_Check;
    this.Surat_Kontrol_Waktu = request.Surat_Kontrol_Waktu;
    this.Surat_Kontrol_Keterangan = request.Surat_Kontrol_Keterangan;
    this.ID_Perawat_Pengkaji  =  request.ID_Perawat_Pengkaji;
    this.Tanda_Tangan_Perawat_Pengkaji = request.Tanda_Tangan_Perawat_Pengkaji;
    this.Nama_Perawat_Pengkaji = request.Nama_Perawat_Pengkaji;
    this.Tanda_Tangan_Pasien = request.Tanda_Tangan_Pasien;
  }
}

export interface IDischargePlanningModel extends IDataModel {
  form: IDischargePlanningFormModel;
  cppt: any;
  inform_consent: IProvisionOfInformationFormModel;
}

export class DischargePlanningModel extends DataModel {
  form: IDischargePlanningFormModel;
  cppt: any;
  inform_consent: IProvisionOfInformationFormModel;
  constructor(request: IDischargePlanningModel) {
    super(request);
    this.form = request.form;
    this.cppt = request.cppt;
    this.inform_consent = request.inform_consent;
  }
}
