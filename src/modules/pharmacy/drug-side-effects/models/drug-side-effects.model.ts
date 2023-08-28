import { DataModel, IDataModel } from '@shared/model';
import { HowToUse, IHowToUse, IMedicine, IPrescription, Medicine } from "@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model";


export interface IObatDiterima {
  id: string;
  key : string;
  Nama_Obat: string;
  Satuan: string;
  No_Bets: string;
  Aturan_Pakai: string;
  Tanggal_Mulai: string;
  Tanggal_Selesai: string;
  Obat_Dicurigai_Check: string;
}

export class ObatDiterima {
  id: string;
  key : string;
  Nama_Obat: string;
  Satuan: string;
  No_Bets: string;
  Aturan_Pakai: string;
  Tanggal_Mulai: string;
  Tanggal_Selesai: string;
  Obat_Dicurigai_Check: string;

  constructor(obatditerima: IObatDiterima) {
    this.id = obatditerima.id;
    this.key = obatditerima.key;
    this.Nama_Obat = obatditerima.Nama_Obat;
    this.Satuan = obatditerima.Satuan;
    this.No_Bets = obatditerima.No_Bets;
    this.Aturan_Pakai = obatditerima.Aturan_Pakai;
    this.Tanggal_Mulai = obatditerima.Tanggal_Mulai;
    this.Tanggal_Selesai = obatditerima.Tanggal_Selesai;
    this.Obat_Dicurigai_Check = obatditerima.Obat_Dicurigai_Check;
  }
}

export interface IDrugSideEffectsModel {
  Terjadi_Efek_Samping_Obat: string;
  Jenis_Kelamin: string;
  Status_Hamil: string;
  Suku_Check: string;
  Nama_Suku: string;
  Berat_Badan_Check: string;
  Berat_Badan: string;
  Diagnosa_Utama: string;
  Kesudahan_Penyakit_Utama: string;
  Riwayat_Hati_Check: string ;
  Riwayat_Ginjal_Check: string ;
  Riwayat_Lain_Check: string ;
  Riwayat_Lain_Text: string ;
  Bentuk_Manifestasi_ESO: string;
  Tanggal_Mula_Terjadi: string ;
  Tanggal_Kesudahan: string ;
  Kesudahan_ESO: string ;
  Riwayat_ESO_Sebelum: string ;


   Keterangan_Tambahan: string ;
   Algoritma_Naranjo_1: string ;
   Algoritma_Naranjo_2: string ;
   Algoritma_Naranjo_3: string ;
   Algoritma_Naranjo_4: string ;
   Algoritma_Naranjo_5: string ;
   Algoritma_Naranjo_6: string ;
   Algoritma_Naranjo_7: string ;
   Algoritma_Naranjo_8: string ;
   Algoritma_Naranjo_9: string ;
   Algoritma_Naranjo_10: string ;
   Total_Skor: string ;
   ID_Pelapor: string ;
   TTD_Pelapor: string ;
   Nama_Pelapor: string ;
   
   Obat_Diterima: Array<IObatDiterima>;

  Waktu: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
}

export class DrugSideEffectsModel {

  Terjadi_Efek_Samping_Obat: string;
  Jenis_Kelamin: string;
  Status_Hamil: string;
  Suku_Check: string;
  Nama_Suku: string;
  Berat_Badan_Check: string;
  Berat_Badan: string;
  Diagnosa_Utama: string;
  Kesudahan_Penyakit_Utama: string;
  Riwayat_Hati_Check: string ;
  Riwayat_Ginjal_Check: string ;
  Riwayat_Lain_Check: string ;
  Riwayat_Lain_Text: string ;
  Bentuk_Manifestasi_ESO: string;
  Tanggal_Mula_Terjadi: string ;
  Tanggal_Kesudahan: string ;
  Kesudahan_ESO: string ;
  Riwayat_ESO_Sebelum: string ;

   Keterangan_Tambahan: string ;
   Algoritma_Naranjo_1: string ;
   Algoritma_Naranjo_2: string ;
   Algoritma_Naranjo_3: string ;
   Algoritma_Naranjo_4: string ;
   Algoritma_Naranjo_5: string ;
   Algoritma_Naranjo_6: string ;
   Algoritma_Naranjo_7: string ;
   Algoritma_Naranjo_8: string ;
   Algoritma_Naranjo_9: string ;
   Algoritma_Naranjo_10: string ;
   Total_Skor: string ;
   ID_Pelapor: string ;
   TTD_Pelapor: string ;
   Nama_Pelapor: string ;
   
   Obat_Diterima: Array<IObatDiterima>;

  Waktu: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;

  constructor(form: IDrugSideEffectsModel) {
    this.Terjadi_Efek_Samping_Obat = form.Terjadi_Efek_Samping_Obat;
    this.Jenis_Kelamin = form.Jenis_Kelamin;
    this.Status_Hamil = form.Status_Hamil;
    this.Suku_Check = form.Suku_Check;
    this.Nama_Suku = form.Nama_Suku;
    this.Berat_Badan_Check = form.Berat_Badan_Check;
    this.Berat_Badan = form.Berat_Badan;
    this.Diagnosa_Utama = form.Berat_Badan;
    this.Kesudahan_Penyakit_Utama = form.Kesudahan_Penyakit_Utama;
    this.Riwayat_Hati_Check = form.Riwayat_Hati_Check;
    this.Riwayat_Ginjal_Check = form.Riwayat_Ginjal_Check;
    this.Riwayat_Lain_Check = form.Riwayat_Lain_Check;
    this.Riwayat_Lain_Text = form.Riwayat_Lain_Text;
    this.Bentuk_Manifestasi_ESO = form.Bentuk_Manifestasi_ESO;
    this.Tanggal_Mula_Terjadi = form.Tanggal_Mula_Terjadi;
    this.Tanggal_Kesudahan = form.Tanggal_Kesudahan;
    this.Kesudahan_ESO = form.Kesudahan_ESO;
    this.Riwayat_ESO_Sebelum = form.Riwayat_ESO_Sebelum;

    this.Keterangan_Tambahan = form.Keterangan_Tambahan;
    this.Algoritma_Naranjo_1 = form.Algoritma_Naranjo_1;
    this.Algoritma_Naranjo_2 = form.Algoritma_Naranjo_2;
    this.Algoritma_Naranjo_3 = form.Algoritma_Naranjo_3;
    this.Algoritma_Naranjo_4 = form.Algoritma_Naranjo_4;
    this.Algoritma_Naranjo_5 = form.Algoritma_Naranjo_5;
    this.Algoritma_Naranjo_6 = form.Algoritma_Naranjo_6;
    this.Algoritma_Naranjo_7 = form.Algoritma_Naranjo_7;
    this.Algoritma_Naranjo_8 = form.Algoritma_Naranjo_8;
    this.Algoritma_Naranjo_9 = form.Algoritma_Naranjo_9;
    this.Algoritma_Naranjo_10 = form.Algoritma_Naranjo_10;
    this.Total_Skor = form.Total_Skor;
    this.ID_Pelapor = form.ID_Pelapor;
    this.TTD_Pelapor = form.TTD_Pelapor;
    this.Nama_Pelapor = form.Nama_Pelapor;
    
    this.Obat_Diterima = form.Obat_Diterima;
    
    this.Waktu = form.Waktu;
    this.ID_Petugas = form.ID_Petugas;
    this.Nama_Petugas = form.Nama_Petugas;
    this.Updated_At = form.Updated_At;
    this.Updated_By = form.Updated_By;
  }
}

export interface IDrugSideEffectsModel extends IDataModel {
  form: IDrugSideEffectsModel;
  obat: Array<IMedicine>;
  aturan_pakai: Array<IHowToUse>;
}

export class DrugSideEffects extends DataModel {
  form?: DrugSideEffectsModel;
  obat?: Array<IMedicine>;
  aturan_pakai?: Array<IHowToUse>;
  
  constructor(model: IDrugSideEffectsModel) {
    super(model);
    if (model.form) {
      this.form = new DrugSideEffectsModel(model.form);
      this.obat = (Array.isArray(model.obat)) ? model.obat.map((a) => new Medicine(a)) : [];
      this.aturan_pakai = (Array.isArray(model.aturan_pakai)) ? model.aturan_pakai.map((a) => new HowToUse(a)) : [];
    }
  }
}

