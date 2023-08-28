
import * as yup from 'yup';
import { DataModel, IDataModel } from '@shared/model';
import { IPreliminaryStudyForm, PreliminaryStudyForm } from '@modules/ro/preliminary-study/models/preliminary-study.model';
import { IMedsPackage, MedsPackage } from '@src/shared/meds-package/models/meds-package.model';

export interface IMedicine {
  Kode_Inventory: string;
  Nama_Inventory: string;
  ID_Satuan: string;
  Nama_Satuan: string;
  Stok: string;
  Harga_Beli: number;
  Harga_Jual: number;
  Nama_Kategori: string;
  Fornas: string;
  Forkit: string;
  Status: number;
}

export class Medicine {
  Kode_Inventory: string;
  Nama_Inventory: string;
  ID_Satuan: string;
  Nama_Satuan: string;
  Stok: string;
  Harga_Beli: number;
  Harga_Jual: number;
  Nama_Kategori: string;
  Fornas: string;
  Forkit: string;
  Status: number;

  constructor(medicine: IMedicine) {
    this.Kode_Inventory = medicine.Kode_Inventory;
    this.Nama_Inventory = medicine.Nama_Inventory;
    this.ID_Satuan = medicine.ID_Satuan;
    this.Nama_Satuan = medicine.Nama_Satuan;
    this.Stok = medicine.Stok;
    this.Harga_Beli = medicine.Harga_Beli;
    this.Harga_Jual = medicine.Harga_Jual;
    this.Nama_Kategori = medicine.Nama_Kategori;
    this.Fornas = medicine.Fornas;
    this.Forkit = medicine.Forkit;
    this.Status = medicine.Status;
  }
}

export interface IHowToUse {
  ID_AturanPakai: number;
  Kode_Cabang: string;
  Tipe_Pelayanan: string;
  Nama: string;
  Keterangan?: string;
  Upd_User: string;
  Upd_Waktu: string;
  Status_Aktif: boolean;
  Kode: string;
  RowNum: string;
  TotalItems: number;
  TotalPage: number;
}

export class HowToUse {
  ID_AturanPakai: number;
  Kode_Cabang: string;
  Tipe_Pelayanan: string;
  Nama: string;
  Keterangan?: string;
  Upd_User: string;
  Upd_Waktu: string;
  Status_Aktif: boolean;
  Kode: string;
  RowNum: string;
  TotalItems: number;
  TotalPage: number;

  constructor(howToUse: IHowToUse) {
    this.ID_AturanPakai = howToUse.ID_AturanPakai;
    this.Kode_Cabang = howToUse.Kode_Cabang;
    this.Tipe_Pelayanan = howToUse.Tipe_Pelayanan;
    this.Nama = howToUse.Nama;
    this.Keterangan = howToUse.Keterangan;
    this.Upd_User = howToUse.Upd_User;
    this.Upd_Waktu = howToUse.Upd_Waktu;
    this.Status_Aktif = howToUse.Status_Aktif;
    this.Kode = howToUse.Kode;
    this.RowNum = howToUse.RowNum;
    this.TotalItems = howToUse.TotalItems;
    this.TotalPage = howToUse.TotalPage;
  }
}

export interface IPrescription {
  key: string;
  Jumlah?: string;
  Catatan?: string;
  ID_Obat: string;
  ID_Satuan?: string;
  Nama_Obat?: string;
  Nama_Satuan: string;
  ID_AturanPakai?: number;
  Kode_AturanPakai: string;
  Nama_AturanPakai?: string;
}

export class Prescription {
  key: any;
  Jumlah: string;
  Catatan: string;
  ID_Obat: string;
  ID_Satuan: string;
  Nama_Obat: string;
  Nama_Satuan: string;
  ID_AturanPakai: number | undefined;
  Kode_AturanPakai: string;
  Nama_AturanPakai: string;

  constructor(prescription: IPrescription) {
    this.key = prescription.key;
    this.Jumlah = (prescription.Jumlah) ? prescription.Jumlah : '';
    this.Catatan = (prescription.Catatan) ? prescription.Catatan : '';
    this.ID_Obat = prescription.ID_Obat;
    this.ID_Satuan = (prescription.ID_Satuan) ? prescription.ID_Satuan : '';
    this.Nama_Obat = (prescription.Nama_Obat) ? prescription.Nama_Obat : '';
    this.Nama_Satuan = prescription.Nama_Satuan;
    this.ID_AturanPakai = (prescription.ID_AturanPakai) ? prescription.ID_AturanPakai : undefined;
    this.Kode_AturanPakai = prescription.Kode_AturanPakai;
    this.Nama_AturanPakai = (prescription.Nama_AturanPakai) ? prescription.Nama_AturanPakai : '';
  }
}

export interface IImage {
  Url_Image: string;
  Name_Image: string;
  Type_Image: string;
  Size_Image: string;
}

export class Image {
  Url_Image: string;
  Name_Image: string;
  Type_Image: string;
  Size_Image: string;

  constructor(image: IImage) {
    this.Url_Image = image.Url_Image;
    this.Name_Image = image.Name_Image;
    this.Type_Image = image.Type_Image;
    this.Size_Image = image.Size_Image;
  }
  static schema() {
    return yup.object().shape({
      Url_Image: yup.string(),
      Name_Image: yup.string(),
      Type_Image: yup.string(),
      Size_Image: yup.string(),
    })
  }

  static convertToCpptImage(image: IImage) {
    return {
      Url_Image_Cppt_Data_O : image.Url_Image ?? '',
      Name_Image_Cppt_Data_O: image.Name_Image ?? '',
      Type_Image_Cppt_Data_O: image.Type_Image ?? '',
      Size_Image_Cppt_Data_O: image.Size_Image ?? '',
    }
  }
}

export interface IPediatric {
  Hes_OD_Hes: string;
  Hes_OS_Hes: string;
  Okn_OD_Okn: string;
  Okn_OS_Okn: string;
  Raf_OD_Raf: string;
  Raf_OS_Raf: string;
  Tac_OD_At_38: string;
  Tac_OD_At_55: string;
  Tac_OD_At_84: string;
  Tac_OS_At_38: string;
  Tac_OS_At_55: string;
  Tac_OS_At_84: string;
  Cover_OD_Cover_1: string;
  Cover_OD_Cover_2: string;
  Cover_OD_Cover_3: string;
  Cover_OD_Cover_4: string;
  Cover_OD_Cover_5: string;
  Cover_OD_Cover_6: string;
  Cover_OD_Cover_Text_1: string;
  Cover_OD_Cover_Text_2: string;
  Cover_OD_Cover_Text_3: string;
  Cover_OD_Cover_Text_4: string;
  Cover_OD_Cover_Text_5: string;
  Cover_OD_Cover_Text_6: string;
  Cover_OS_Cover_1: string;
  Cover_OS_Cover_2: string;
  Cover_OS_Cover_3: string;
  Cover_OS_Cover_4: string;
  Cover_OS_Cover_5: string;
  Cover_OS_Cover_6: string;
  Cover_OS_Cover_Text_1: string;
  Cover_OS_Cover_Text_2: string;
  Cover_OS_Cover_Text_3: string;
  Cover_OS_Cover_Text_4: string;
  Cover_OS_Cover_Text_5: string;
  Cover_OS_Cover_Text_6: string;
  Prisma_OD_Prisma: string;
  Prisma_OS_Prisma: string;
  Randot_OD_Animal: string;
  Randot_OS_Animal: string;
  Rpl_Streak_OD_Va: string;
  Rpl_Streak_OD_Va_Text: string;
  Rpl_Streak_OS_Va: string;
  Rpl_Streak_OS_Va_Text: string;
  Submit_Pediatrik: string;
  Randot_OD_Circles: string;
  Randot_OS_Circles: string;
  Rpl_Streak_OD_False: string;
  Rpl_Streak_OD_False_Text: string;
  Rpl_Streak_OS_False: string;
  Rpl_Streak_OS_False_Text: string;
  Randot_OD_Randot_Form: string;
  Randot_OS_Randot_Form: string;
  Rpl_Streak_OD_Pd_Jauh: string;
  Rpl_Streak_OD_Pd_Jauh_Text: string;
  Rpl_Streak_OS_Pd_Jauh: string;
  Rpl_Streak_OS_Pd_Jauh_Text: string;
  Rpl_Streak_OD_Adaptasi: string;
  Rpl_Streak_OD_Adaptasi_Text: string;
  Rpl_Streak_OS_Adaptasi: string;
  Rpl_Streak_OS_Adaptasi_Text: string;
  Goniometer_OD_Goniometer: string;
  Goniometer_OS_Goniometer: string;
  Nearvision_OD_Nearvision: string;
  Nearvision_OD_Select: string;
  Nearvision_OS_Select: string;
  Nearvision_OS_Nearvision: string;
  Rpl_Streak_OD_Streak_Cyl: string;
  Rpl_Streak_OD_Streak_Sph: string;
  Rpl_Streak_OS_Streak_Cyl: string;
  Rpl_Streak_OS_Streak_Sph: string;
  Cardif_OD_Test_Distance_1: string;
  Cardif_OS_Test_Distance_1: string;
  Rpl_Streak_OD_Streak_Axis: string;
  Rpl_Streak_OS_Streak_Axis: string;
  Cardif_OD_Test_Distance_50: string;
  Cardif_OS_Test_Distance_50: string;

  Cover_Uncover_OD_Ortho_Without_Check: string;
  Cover_Uncover_OS_Ortho_Without_Check: string;
  Cover_Uncover_OD_Ortho_With_Check: string;
  Cover_Uncover_OS_Ortho_With_Check: string;

  Cover_Uncover_OD_Ortho_With_Et_Near: string;
  Cover_Uncover_OD_Ortho_With_Hi_Near: string;
  Cover_Uncover_OD_Ortho_With_Ho_Near: string;
  Cover_Uncover_OD_Ortho_With_Xt_Near: string;
  Cover_Uncover_OD_Ortho_Without_Near: string;
  Cover_Uncover_OS_Ortho_With_Et_Near: string;
  Cover_Uncover_OS_Ortho_With_Hi_Near: string;
  Cover_Uncover_OS_Ortho_With_Ho_Near: string;
  Cover_Uncover_OS_Ortho_With_Xt_Near: string;
  Cover_Uncover_OS_Ortho_Without_Near: string;

  Cover_Uncover_OD_Ortho_Without_Et_Near: string;
  Cover_Uncover_OD_Ortho_Without_Hi_Near: string;
  Cover_Uncover_OD_Ortho_Without_Ho_Near: string;
  Cover_Uncover_OD_Ortho_Without_Xt_Near: string;
  Cover_Uncover_OS_Ortho_Without_Et_Near: string;
  Cover_Uncover_OS_Ortho_Without_Hi_Near: string;
  Cover_Uncover_OS_Ortho_Without_Ho_Near: string;
  Cover_Uncover_OS_Ortho_Without_Xt_Near: string;

  Cover_Uncover_OD_Ortho_With_Et_Distance: string;
  Cover_Uncover_OD_Ortho_With_Hi_Distance: string;
  Cover_Uncover_OD_Ortho_With_Ho_Distance: string;
  Cover_Uncover_OD_Ortho_With_Xt_Distance: string;
  Cover_Uncover_OD_Ortho_Without_Distance: string;
  Cover_Uncover_OS_Ortho_With_Et_Distance: string;
  Cover_Uncover_OS_Ortho_With_Hi_Distance: string;
  Cover_Uncover_OS_Ortho_With_Ho_Distance: string;
  Cover_Uncover_OS_Ortho_With_Xt_Distance: string;
  Cover_Uncover_OS_Ortho_Without_Distance: string;

  Cover_Uncover_OD_Ortho_Without_Et_Distance: string;
  Cover_Uncover_OD_Ortho_Without_Hi_Distance: string;
  Cover_Uncover_OD_Ortho_Without_Ho_Distance: string;
  Cover_Uncover_OD_Ortho_Without_Xt_Distance: string;
  Cover_Uncover_OS_Ortho_Without_Et_Distance: string;
  Cover_Uncover_OS_Ortho_Without_Hi_Distance: string;
  Cover_Uncover_OS_Ortho_Without_Ho_Distance: string;
  Cover_Uncover_OS_Ortho_Without_Xt_Distance: string;

  Cover_Uncover_OD_Ortho_With_Et_Near_Lain_Text: string;
  Cover_Uncover_OD_Ortho_With_Hi_Near_Lain_Text: string;
  Cover_Uncover_OD_Ortho_With_Ho_Near_Lain_Text: string;
  Cover_Uncover_OD_Ortho_With_Xt_Near_Lain_Text: string;
  Cover_Uncover_OD_Ortho_Without_Near_Lain_Text: string;
  Cover_Uncover_OS_Ortho_With_Et_Near_Lain_Text: string;
  Cover_Uncover_OS_Ortho_With_Hi_Near_Lain_Text: string;
  Cover_Uncover_OS_Ortho_With_Ho_Near_Lain_Text: string;
  Cover_Uncover_OS_Ortho_With_Xt_Near_Lain_Text: string;
  Cover_Uncover_OS_Ortho_Without_Near_Lain_Text: string;

  Cover_Uncover_OD_Ortho_Without_Et_Near_Lain_Text: string;
  Cover_Uncover_OD_Ortho_Without_Hi_Near_Lain_Text: string;
  Cover_Uncover_OD_Ortho_Without_Ho_Near_Lain_Text: string;
  Cover_Uncover_OD_Ortho_Without_Xt_Near_Lain_Text: string;
  Cover_Uncover_OS_Ortho_Without_Et_Near_Lain_Text: string;
  Cover_Uncover_OS_Ortho_Without_Hi_Near_Lain_Text: string;
  Cover_Uncover_OS_Ortho_Without_Ho_Near_Lain_Text: string;
  Cover_Uncover_OS_Ortho_Without_Xt_Near_Lain_Text: string;

  Cover_Uncover_OD_Ortho_With_Et_Distance_Lain_Text: string;
  Cover_Uncover_OD_Ortho_With_Hi_Distance_Lain_Text: string;
  Cover_Uncover_OD_Ortho_With_Ho_Distance_Lain_Text: string;
  Cover_Uncover_OD_Ortho_With_Xt_Distance_Lain_Text: string;
  Cover_Uncover_OD_Ortho_Without_Distance_Lain_Text: string;
  Cover_Uncover_OS_Ortho_With_Et_Distance_Lain_Text: string;
  Cover_Uncover_OS_Ortho_With_Hi_Distance_Lain_Text: string;
  Cover_Uncover_OS_Ortho_With_Ho_Distance_Lain_Text: string;
  Cover_Uncover_OS_Ortho_With_Xt_Distance_Lain_Text: string;
  Cover_Uncover_OS_Ortho_Without_Distance_Lain_Text: string;

  Cover_Uncover_OD_Ortho_Without_Et_Distance_Lain_Text: string;
  Cover_Uncover_OD_Ortho_Without_Hi_Distance_Lain_Text: string;
  Cover_Uncover_OD_Ortho_Without_Ho_Distance_Lain_Text: string;
  Cover_Uncover_OD_Ortho_Without_Xt_Distance_Lain_Text: string;
  Cover_Uncover_OS_Ortho_Without_Et_Distance_Lain_Text: string;
  Cover_Uncover_OS_Ortho_Without_Hi_Distance_Lain_Text: string;
  Cover_Uncover_OS_Ortho_Without_Ho_Distance_Lain_Text: string;
  Cover_Uncover_OS_Ortho_Without_Xt_Distance_Lain_Text: string;

  Okn_ODS_Okn: string;
  Raf_ODS_Raf: string;

  Prisma_OD_Prisma_With_Et_Near: string;
  Prisma_OD_Prisma_With_Et_Near_Lain_Text: string;
  Prisma_OD_Prisma_With_Hi_Near: string;
  Prisma_OD_Prisma_With_Hi_Near_Lain_Text: string;
  Prisma_OD_Prisma_With_Ho_Near: string;
  Prisma_OD_Prisma_With_Ho_Near_Lain_Text: string;
  Prisma_OD_Prisma_With_Xt_Near: string;
  Prisma_OD_Prisma_With_Xt_Near_Lain_Text: string;
  Prisma_OD_Prisma_Without_Near: string;
  Prisma_OD_Prisma_Without_Near_Lain_Text: string;
  Prisma_OS_Prisma_With_Et_Near: string;
  Prisma_OS_Prisma_With_Et_Near_Lain_Text: string;
  Prisma_OS_Prisma_With_Hi_Near: string;
  Prisma_OS_Prisma_With_Hi_Near_Lain_Text: string;
  Prisma_OS_Prisma_With_Ho_Near: string;
  Prisma_OS_Prisma_With_Ho_Near_Lain_Text: string;
  Prisma_OS_Prisma_With_Xt_Near: string;
  Prisma_OS_Prisma_With_Xt_Near_Lain_Text: string;
  Prisma_OS_Prisma_Without_Near: string;
  Prisma_OS_Prisma_Without_Near_Lain_Text: string;
  Prisma_OD_Prisma_Without_Et_Near: string;
  Prisma_OD_Prisma_Without_Et_Near_Lain_Text: string;
  Prisma_OD_Prisma_Without_Hi_Near: string;
  Prisma_OD_Prisma_Without_Hi_Near_Lain_Text: string;
  Prisma_OD_Prisma_Without_Ho_Near: string;
  Prisma_OD_Prisma_Without_Ho_Near_Lain_Text: string;
  Prisma_OD_Prisma_Without_Xt_Near: string;
  Prisma_OD_Prisma_Without_Xt_Near_Lain_Text: string;
  Prisma_OS_Prisma_Without_Et_Near: string;
  Prisma_OS_Prisma_Without_Et_Near_Lain_Text: string;
  Prisma_OS_Prisma_Without_Hi_Near: string;
  Prisma_OS_Prisma_Without_Hi_Near_Lain_Text: string;
  Prisma_OS_Prisma_Without_Ho_Near: string;
  Prisma_OS_Prisma_Without_Ho_Near_Lain_Text: string;
  Prisma_OS_Prisma_Without_Xt_Near: string;
  Prisma_OS_Prisma_Without_Xt_Near_Lain_Text: string;
  Prisma_OD_Prisma_With_Et_Distance: string;
  Prisma_OD_Prisma_With_Et_Distance_Lain_Text: string;
  Prisma_OD_Prisma_With_Hi_Distance: string;
  Prisma_OD_Prisma_With_Hi_Distance_Lain_Text: string;
  Prisma_OD_Prisma_With_Ho_Distance: string;
  Prisma_OD_Prisma_With_Ho_Distance_Lain_Text: string;
  Prisma_OD_Prisma_With_Xt_Distance: string;
  Prisma_OD_Prisma_With_Xt_Distance_Lain_Text: string;
  Prisma_OD_Prisma_Without_Distance: string;
  Prisma_OD_Prisma_Without_Distance_Lain_Text: string;
  Prisma_OS_Prisma_With_Et_Distance: string;
  Prisma_OS_Prisma_With_Et_Distance_Lain_Text: string;
  Prisma_OS_Prisma_With_Hi_Distance: string;
  Prisma_OS_Prisma_With_Hi_Distance_Lain_Text: string;
  Prisma_OS_Prisma_With_Ho_Distance: string;
  Prisma_OS_Prisma_With_Ho_Distance_Lain_Text: string;
  Prisma_OS_Prisma_With_Xt_Distance: string;
  Prisma_OS_Prisma_With_Xt_Distance_Lain_Text: string;
  Prisma_OD_Prisma_Without_Et_Distance: string;
  Prisma_OD_Prisma_Without_Et_Distance_Lain_Text: string;
  Prisma_OD_Prisma_Without_Hi_Distance: string;
  Prisma_OD_Prisma_Without_Hi_Distance_Lain_Text: string;
  Prisma_OD_Prisma_Without_Ho_Distance: string;
  Prisma_OD_Prisma_Without_Ho_Distance_Lain_Text: string;
  Prisma_OD_Prisma_Without_Xt_Distance: string;
  Prisma_OD_Prisma_Without_Xt_Distance_Lain_Text: string;
  Prisma_OS_Prisma_Without_Et_Distance: string;
  Prisma_OS_Prisma_Without_Et_Distance_Lain_Text: string;
  Prisma_OS_Prisma_Without_Hi_Distance: string;
  Prisma_OS_Prisma_Without_Hi_Distance_Lain_Text: string;
  Prisma_OS_Prisma_Without_Ho_Distance: string;
  Prisma_OS_Prisma_Without_Ho_Distance_Lain_Text: string;
  Prisma_OS_Prisma_Without_Xt_Distance: string;
  Prisma_OS_Prisma_Without_Xt_Distance_Lain_Text: string;
  Ptosis_OD_FIP: string;
  Ptosis_OS_FIP: string;
  Ptosis_OD_MRD: string;
  Ptosis_OS_MRD: string;
  Ptosis_OD_LA: string;
  Ptosis_OS_LA: string;

  TNO_Stereoskopis_ODS_1: string;
  TNO_Stereoskopis_ODS_2: string;
  TNO_Stereoskopis_ODS_3: string;
  TNO_Stereoskopis_ODS_4: string;
  TNO_Stereoskopis_ODS_5: string;

  Goniometer_ODS_Goniometer: string;
  Goniometer_ODS_Right_Check: string;
  Goniometer_ODS_Left_Check: string;
  VOD: string;
  VOS: string;
  VOD_Text: string;
  VOS_Text: string;
}

export class Pediatric {
  Hes_OD_Hes: string;
  Hes_OS_Hes: string;
  Okn_OD_Okn: string;
  Okn_OS_Okn: string;
  Raf_OD_Raf: string;
  Raf_OS_Raf: string;
  Tac_OD_At_38: string;
  Tac_OD_At_55: string;
  Tac_OD_At_84: string;
  Tac_OS_At_38: string;
  Tac_OS_At_55: string;
  Tac_OS_At_84: string;
  Cover_OD_Cover_1: string;
  Cover_OD_Cover_2: string;
  Cover_OD_Cover_3: string;
  Cover_OD_Cover_4: string;
  Cover_OD_Cover_5: string;
  Cover_OD_Cover_6: string;
  Cover_OD_Cover_Text_1: string;
  Cover_OD_Cover_Text_2: string;
  Cover_OD_Cover_Text_3: string;
  Cover_OD_Cover_Text_4: string;
  Cover_OD_Cover_Text_5: string;
  Cover_OD_Cover_Text_6: string;
  Cover_OS_Cover_1: string;
  Cover_OS_Cover_2: string;
  Cover_OS_Cover_3: string;
  Cover_OS_Cover_4: string;
  Cover_OS_Cover_5: string;
  Cover_OS_Cover_6: string;
  Cover_OS_Cover_Text_1: string;
  Cover_OS_Cover_Text_2: string;
  Cover_OS_Cover_Text_3: string;
  Cover_OS_Cover_Text_4: string;
  Cover_OS_Cover_Text_5: string;
  Cover_OS_Cover_Text_6: string;
  Prisma_OD_Prisma: string;
  Prisma_OS_Prisma: string;
  Randot_OD_Animal: string;
  Randot_OS_Animal: string;
  Rpl_Streak_OD_Va: string;
  Rpl_Streak_OD_Va_Text: string;
  Rpl_Streak_OS_Va: string;
  Rpl_Streak_OS_Va_Text: string;
  Submit_Pediatrik: string;
  Randot_OD_Circles: string;
  Randot_OS_Circles: string;
  Rpl_Streak_OD_False: string;
  Rpl_Streak_OD_False_Text: string;
  Rpl_Streak_OS_False: string;
  Rpl_Streak_OS_False_Text: string;
  Randot_OD_Randot_Form: string;
  Randot_OS_Randot_Form: string;
  Rpl_Streak_OD_Pd_Jauh: string;
  Rpl_Streak_OD_Pd_Jauh_Text: string;
  Rpl_Streak_OS_Pd_Jauh: string;
  Rpl_Streak_OS_Pd_Jauh_Text: string;
  Rpl_Streak_OD_Adaptasi: string;
  Rpl_Streak_OD_Adaptasi_Text: string;
  Rpl_Streak_OS_Adaptasi: string;
  Rpl_Streak_OS_Adaptasi_Text: string;
  Goniometer_OD_Goniometer: string;
  Goniometer_OS_Goniometer: string;
  Nearvision_OD_Nearvision: string;
  Nearvision_OD_Select: string;
  Nearvision_OS_Select: string;
  Nearvision_OS_Nearvision: string;
  Rpl_Streak_OD_Streak_Cyl: string;
  Rpl_Streak_OD_Streak_Sph: string;
  Rpl_Streak_OS_Streak_Cyl: string;
  Rpl_Streak_OS_Streak_Sph: string;
  Cardif_OD_Test_Distance_1: string;
  Cardif_OS_Test_Distance_1: string;
  Rpl_Streak_OD_Streak_Axis: string;
  Rpl_Streak_OS_Streak_Axis: string;
  Cardif_OD_Test_Distance_50: string;
  Cardif_OS_Test_Distance_50: string;

  Cover_Uncover_OD_Ortho_Without_Check: string;
  Cover_Uncover_OS_Ortho_Without_Check: string;
  Cover_Uncover_OD_Ortho_With_Check: string;
  Cover_Uncover_OS_Ortho_With_Check: string;

  Cover_Uncover_OD_Ortho_With_Et_Near: string;
  Cover_Uncover_OD_Ortho_With_Hi_Near: string;
  Cover_Uncover_OD_Ortho_With_Ho_Near: string;
  Cover_Uncover_OD_Ortho_With_Xt_Near: string;
  Cover_Uncover_OD_Ortho_Without_Near: string;
  Cover_Uncover_OS_Ortho_With_Et_Near: string;
  Cover_Uncover_OS_Ortho_With_Hi_Near: string;
  Cover_Uncover_OS_Ortho_With_Ho_Near: string;
  Cover_Uncover_OS_Ortho_With_Xt_Near: string;
  Cover_Uncover_OS_Ortho_Without_Near: string;

  Cover_Uncover_OD_Ortho_Without_Et_Near: string;
  Cover_Uncover_OD_Ortho_Without_Hi_Near: string;
  Cover_Uncover_OD_Ortho_Without_Ho_Near: string;
  Cover_Uncover_OD_Ortho_Without_Xt_Near: string;
  Cover_Uncover_OS_Ortho_Without_Et_Near: string;
  Cover_Uncover_OS_Ortho_Without_Hi_Near: string;
  Cover_Uncover_OS_Ortho_Without_Ho_Near: string;
  Cover_Uncover_OS_Ortho_Without_Xt_Near: string;

  Cover_Uncover_OD_Ortho_With_Et_Distance: string;
  Cover_Uncover_OD_Ortho_With_Hi_Distance: string;
  Cover_Uncover_OD_Ortho_With_Ho_Distance: string;
  Cover_Uncover_OD_Ortho_With_Xt_Distance: string;
  Cover_Uncover_OD_Ortho_Without_Distance: string;
  Cover_Uncover_OS_Ortho_With_Et_Distance: string;
  Cover_Uncover_OS_Ortho_With_Hi_Distance: string;
  Cover_Uncover_OS_Ortho_With_Ho_Distance: string;
  Cover_Uncover_OS_Ortho_With_Xt_Distance: string;
  Cover_Uncover_OS_Ortho_Without_Distance: string;

  Cover_Uncover_OD_Ortho_Without_Et_Distance: string;
  Cover_Uncover_OD_Ortho_Without_Hi_Distance: string;
  Cover_Uncover_OD_Ortho_Without_Ho_Distance: string;
  Cover_Uncover_OD_Ortho_Without_Xt_Distance: string;
  Cover_Uncover_OS_Ortho_Without_Et_Distance: string;
  Cover_Uncover_OS_Ortho_Without_Hi_Distance: string;
  Cover_Uncover_OS_Ortho_Without_Ho_Distance: string;
  Cover_Uncover_OS_Ortho_Without_Xt_Distance: string;

  Cover_Uncover_OD_Ortho_With_Et_Near_Lain_Text: string;
  Cover_Uncover_OD_Ortho_With_Hi_Near_Lain_Text: string;
  Cover_Uncover_OD_Ortho_With_Ho_Near_Lain_Text: string;
  Cover_Uncover_OD_Ortho_With_Xt_Near_Lain_Text: string;
  Cover_Uncover_OD_Ortho_Without_Near_Lain_Text: string;
  Cover_Uncover_OS_Ortho_With_Et_Near_Lain_Text: string;
  Cover_Uncover_OS_Ortho_With_Hi_Near_Lain_Text: string;
  Cover_Uncover_OS_Ortho_With_Ho_Near_Lain_Text: string;
  Cover_Uncover_OS_Ortho_With_Xt_Near_Lain_Text: string;
  Cover_Uncover_OS_Ortho_Without_Near_Lain_Text: string;

  Cover_Uncover_OD_Ortho_Without_Et_Near_Lain_Text: string;
  Cover_Uncover_OD_Ortho_Without_Hi_Near_Lain_Text: string;
  Cover_Uncover_OD_Ortho_Without_Ho_Near_Lain_Text: string;
  Cover_Uncover_OD_Ortho_Without_Xt_Near_Lain_Text: string;
  Cover_Uncover_OS_Ortho_Without_Et_Near_Lain_Text: string;
  Cover_Uncover_OS_Ortho_Without_Hi_Near_Lain_Text: string;
  Cover_Uncover_OS_Ortho_Without_Ho_Near_Lain_Text: string;
  Cover_Uncover_OS_Ortho_Without_Xt_Near_Lain_Text: string;

  Cover_Uncover_OD_Ortho_With_Et_Distance_Lain_Text: string;
  Cover_Uncover_OD_Ortho_With_Hi_Distance_Lain_Text: string;
  Cover_Uncover_OD_Ortho_With_Ho_Distance_Lain_Text: string;
  Cover_Uncover_OD_Ortho_With_Xt_Distance_Lain_Text: string;
  Cover_Uncover_OD_Ortho_Without_Distance_Lain_Text: string;
  Cover_Uncover_OS_Ortho_With_Et_Distance_Lain_Text: string;
  Cover_Uncover_OS_Ortho_With_Hi_Distance_Lain_Text: string;
  Cover_Uncover_OS_Ortho_With_Ho_Distance_Lain_Text: string;
  Cover_Uncover_OS_Ortho_With_Xt_Distance_Lain_Text: string;
  Cover_Uncover_OS_Ortho_Without_Distance_Lain_Text: string;

  Cover_Uncover_OD_Ortho_Without_Et_Distance_Lain_Text: string;
  Cover_Uncover_OD_Ortho_Without_Hi_Distance_Lain_Text: string;
  Cover_Uncover_OD_Ortho_Without_Ho_Distance_Lain_Text: string;
  Cover_Uncover_OD_Ortho_Without_Xt_Distance_Lain_Text: string;
  Cover_Uncover_OS_Ortho_Without_Et_Distance_Lain_Text: string;
  Cover_Uncover_OS_Ortho_Without_Hi_Distance_Lain_Text: string;
  Cover_Uncover_OS_Ortho_Without_Ho_Distance_Lain_Text: string;
  Cover_Uncover_OS_Ortho_Without_Xt_Distance_Lain_Text: string;

  Okn_ODS_Okn: string;
  Raf_ODS_Raf: string;

  Prisma_OD_Prisma_With_Et_Near: string;
  Prisma_OD_Prisma_With_Et_Near_Lain_Text: string;
  Prisma_OD_Prisma_With_Hi_Near: string;
  Prisma_OD_Prisma_With_Hi_Near_Lain_Text: string;
  Prisma_OD_Prisma_With_Ho_Near: string;
  Prisma_OD_Prisma_With_Ho_Near_Lain_Text: string;
  Prisma_OD_Prisma_With_Xt_Near: string;
  Prisma_OD_Prisma_With_Xt_Near_Lain_Text: string;
  Prisma_OD_Prisma_Without_Near: string;
  Prisma_OD_Prisma_Without_Near_Lain_Text: string;
  Prisma_OS_Prisma_With_Et_Near: string;
  Prisma_OS_Prisma_With_Et_Near_Lain_Text: string;
  Prisma_OS_Prisma_With_Hi_Near: string;
  Prisma_OS_Prisma_With_Hi_Near_Lain_Text: string;
  Prisma_OS_Prisma_With_Ho_Near: string;
  Prisma_OS_Prisma_With_Ho_Near_Lain_Text: string;
  Prisma_OS_Prisma_With_Xt_Near: string;
  Prisma_OS_Prisma_With_Xt_Near_Lain_Text: string;
  Prisma_OS_Prisma_Without_Near: string;
  Prisma_OS_Prisma_Without_Near_Lain_Text: string;
  Prisma_OD_Prisma_Without_Et_Near: string;
  Prisma_OD_Prisma_Without_Et_Near_Lain_Text: string;
  Prisma_OD_Prisma_Without_Hi_Near: string;
  Prisma_OD_Prisma_Without_Hi_Near_Lain_Text: string;
  Prisma_OD_Prisma_Without_Ho_Near: string;
  Prisma_OD_Prisma_Without_Ho_Near_Lain_Text: string;
  Prisma_OD_Prisma_Without_Xt_Near: string;
  Prisma_OD_Prisma_Without_Xt_Near_Lain_Text: string;
  Prisma_OS_Prisma_Without_Et_Near: string;
  Prisma_OS_Prisma_Without_Et_Near_Lain_Text: string;
  Prisma_OS_Prisma_Without_Hi_Near: string;
  Prisma_OS_Prisma_Without_Hi_Near_Lain_Text: string;
  Prisma_OS_Prisma_Without_Ho_Near: string;
  Prisma_OS_Prisma_Without_Ho_Near_Lain_Text: string;
  Prisma_OS_Prisma_Without_Xt_Near: string;
  Prisma_OS_Prisma_Without_Xt_Near_Lain_Text: string;
  Prisma_OD_Prisma_With_Et_Distance: string;
  Prisma_OD_Prisma_With_Et_Distance_Lain_Text: string;
  Prisma_OD_Prisma_With_Hi_Distance: string;
  Prisma_OD_Prisma_With_Hi_Distance_Lain_Text: string;
  Prisma_OD_Prisma_With_Ho_Distance: string;
  Prisma_OD_Prisma_With_Ho_Distance_Lain_Text: string;
  Prisma_OD_Prisma_With_Xt_Distance: string;
  Prisma_OD_Prisma_With_Xt_Distance_Lain_Text: string;
  Prisma_OD_Prisma_Without_Distance: string;
  Prisma_OD_Prisma_Without_Distance_Lain_Text: string;
  Prisma_OS_Prisma_With_Et_Distance: string;
  Prisma_OS_Prisma_With_Et_Distance_Lain_Text: string;
  Prisma_OS_Prisma_With_Hi_Distance: string;
  Prisma_OS_Prisma_With_Hi_Distance_Lain_Text: string;
  Prisma_OS_Prisma_With_Ho_Distance: string;
  Prisma_OS_Prisma_With_Ho_Distance_Lain_Text: string;
  Prisma_OS_Prisma_With_Xt_Distance: string;
  Prisma_OS_Prisma_With_Xt_Distance_Lain_Text: string;
  Prisma_OD_Prisma_Without_Et_Distance: string;
  Prisma_OD_Prisma_Without_Et_Distance_Lain_Text: string;
  Prisma_OD_Prisma_Without_Hi_Distance: string;
  Prisma_OD_Prisma_Without_Hi_Distance_Lain_Text: string;
  Prisma_OD_Prisma_Without_Ho_Distance: string;
  Prisma_OD_Prisma_Without_Ho_Distance_Lain_Text: string;
  Prisma_OD_Prisma_Without_Xt_Distance: string;
  Prisma_OD_Prisma_Without_Xt_Distance_Lain_Text: string;
  Prisma_OS_Prisma_Without_Et_Distance: string;
  Prisma_OS_Prisma_Without_Et_Distance_Lain_Text: string;
  Prisma_OS_Prisma_Without_Hi_Distance: string;
  Prisma_OS_Prisma_Without_Hi_Distance_Lain_Text: string;
  Prisma_OS_Prisma_Without_Ho_Distance: string;
  Prisma_OS_Prisma_Without_Ho_Distance_Lain_Text: string;
  Prisma_OS_Prisma_Without_Xt_Distance: string;
  Prisma_OS_Prisma_Without_Xt_Distance_Lain_Text: string;
  Ptosis_OD_FIP: string;
  Ptosis_OS_FIP: string;
  Ptosis_OD_MRD: string;
  Ptosis_OS_MRD: string;
  Ptosis_OD_LA: string;
  Ptosis_OS_LA: string;

  TNO_Stereoskopis_ODS_1: string;
  TNO_Stereoskopis_ODS_2: string;
  TNO_Stereoskopis_ODS_3: string;
  TNO_Stereoskopis_ODS_4: string;
  TNO_Stereoskopis_ODS_5: string;

  Goniometer_ODS_Goniometer: string;
  Goniometer_ODS_Right_Check: string;
  Goniometer_ODS_Left_Check: string;
  VOD: string;
  VOS: string;
  VOD_Text: string;
  VOS_Text: string;

  constructor(pediatric: IPediatric) {
    this.Hes_OD_Hes = pediatric.Hes_OD_Hes;
    this.Hes_OS_Hes = pediatric.Hes_OS_Hes;
    this.Okn_OD_Okn = pediatric.Okn_OD_Okn;
    this.Okn_OS_Okn = pediatric.Okn_OS_Okn;
    this.Raf_OD_Raf = pediatric.Raf_OD_Raf;
    this.Raf_OS_Raf = pediatric.Raf_OS_Raf;
    this.Tac_OD_At_38 = pediatric.Tac_OD_At_38;
    this.Tac_OD_At_55 = pediatric.Tac_OD_At_55;
    this.Tac_OD_At_84 = pediatric.Tac_OD_At_84;
    this.Tac_OS_At_38 = pediatric.Tac_OS_At_38;
    this.Tac_OS_At_55 = pediatric.Tac_OS_At_55;
    this.Tac_OS_At_84 = pediatric.Tac_OS_At_84;
    this.Cover_OD_Cover_1 = pediatric.Cover_OD_Cover_1;
    this.Cover_OD_Cover_2 = pediatric.Cover_OD_Cover_2;
    this.Cover_OD_Cover_3 = pediatric.Cover_OD_Cover_3;
    this.Cover_OD_Cover_4 = pediatric.Cover_OD_Cover_4;
    this.Cover_OD_Cover_5 = pediatric.Cover_OD_Cover_5;
    this.Cover_OD_Cover_6 = pediatric.Cover_OD_Cover_6;
    this.Cover_OD_Cover_Text_1 = pediatric.Cover_OD_Cover_Text_1;
    this.Cover_OD_Cover_Text_2 = pediatric.Cover_OD_Cover_Text_2;
    this.Cover_OD_Cover_Text_3 = pediatric.Cover_OD_Cover_Text_3;
    this.Cover_OD_Cover_Text_4 = pediatric.Cover_OD_Cover_Text_4;
    this.Cover_OD_Cover_Text_5 = pediatric.Cover_OD_Cover_Text_5;
    this.Cover_OD_Cover_Text_6 = pediatric.Cover_OD_Cover_Text_6;
    this.Cover_OS_Cover_1 = pediatric.Cover_OS_Cover_1;
    this.Cover_OS_Cover_2 = pediatric.Cover_OS_Cover_2;
    this.Cover_OS_Cover_3 = pediatric.Cover_OS_Cover_3;
    this.Cover_OS_Cover_4 = pediatric.Cover_OS_Cover_4;
    this.Cover_OS_Cover_5 = pediatric.Cover_OS_Cover_5;
    this.Cover_OS_Cover_6 = pediatric.Cover_OS_Cover_6;
    this.Cover_OS_Cover_Text_1 = pediatric.Cover_OS_Cover_Text_1;
    this.Cover_OS_Cover_Text_2 = pediatric.Cover_OS_Cover_Text_2;
    this.Cover_OS_Cover_Text_3 = pediatric.Cover_OS_Cover_Text_3;
    this.Cover_OS_Cover_Text_4 = pediatric.Cover_OS_Cover_Text_4;
    this.Cover_OS_Cover_Text_5 = pediatric.Cover_OS_Cover_Text_5;
    this.Cover_OS_Cover_Text_6 = pediatric.Cover_OS_Cover_Text_6;
    this.Prisma_OD_Prisma = pediatric.Prisma_OD_Prisma;
    this.Prisma_OS_Prisma = pediatric.Prisma_OS_Prisma;
    this.Randot_OD_Animal = pediatric.Randot_OD_Animal;
    this.Randot_OS_Animal = pediatric.Randot_OS_Animal;
    this.Rpl_Streak_OD_Va = pediatric.Rpl_Streak_OD_Va;
    this.Rpl_Streak_OD_Va_Text = pediatric.Rpl_Streak_OD_Va_Text;
    this.Rpl_Streak_OS_Va = pediatric.Rpl_Streak_OS_Va;
    this.Rpl_Streak_OS_Va_Text = pediatric.Rpl_Streak_OS_Va_Text;
    this.Submit_Pediatrik = pediatric.Submit_Pediatrik;
    this.Randot_OD_Circles = pediatric.Randot_OD_Circles;
    this.Randot_OS_Circles = pediatric.Randot_OS_Circles;
    this.Rpl_Streak_OD_False = pediatric.Rpl_Streak_OD_False;
    this.Rpl_Streak_OD_False_Text = pediatric.Rpl_Streak_OD_False_Text;
    this.Rpl_Streak_OS_False = pediatric.Rpl_Streak_OS_False;
    this.Rpl_Streak_OS_False_Text = pediatric.Rpl_Streak_OS_False_Text;
    this.Randot_OD_Randot_Form = pediatric.Randot_OD_Randot_Form;
    this.Randot_OS_Randot_Form = pediatric.Randot_OS_Randot_Form;
    this.Rpl_Streak_OD_Pd_Jauh = pediatric.Rpl_Streak_OD_Pd_Jauh;
    this.Rpl_Streak_OD_Pd_Jauh_Text = pediatric.Rpl_Streak_OD_Pd_Jauh_Text;
    this.Rpl_Streak_OS_Pd_Jauh = pediatric.Rpl_Streak_OS_Pd_Jauh;
    this.Rpl_Streak_OS_Pd_Jauh_Text = pediatric.Rpl_Streak_OS_Pd_Jauh_Text;
    this.Rpl_Streak_OD_Adaptasi = pediatric.Rpl_Streak_OD_Adaptasi;
    this.Rpl_Streak_OD_Adaptasi_Text = pediatric.Rpl_Streak_OD_Adaptasi_Text;
    this.Rpl_Streak_OS_Adaptasi = pediatric.Rpl_Streak_OS_Adaptasi;
    this.Rpl_Streak_OS_Adaptasi_Text = pediatric.Rpl_Streak_OS_Adaptasi_Text;
    this.Goniometer_OD_Goniometer = pediatric.Goniometer_OD_Goniometer;
    this.Goniometer_OS_Goniometer = pediatric.Goniometer_OS_Goniometer;
    this.Nearvision_OD_Nearvision = pediatric.Nearvision_OD_Nearvision;
    this.Nearvision_OD_Select = pediatric.Nearvision_OD_Select;
    this.Nearvision_OS_Select = pediatric.Nearvision_OS_Select;
    this.Nearvision_OS_Nearvision = pediatric.Nearvision_OS_Nearvision;
    this.Rpl_Streak_OD_Streak_Cyl = pediatric.Rpl_Streak_OD_Streak_Cyl;
    this.Rpl_Streak_OD_Streak_Sph = pediatric.Rpl_Streak_OD_Streak_Sph;
    this.Rpl_Streak_OS_Streak_Cyl = pediatric.Rpl_Streak_OS_Streak_Cyl;
    this.Rpl_Streak_OS_Streak_Sph = pediatric.Rpl_Streak_OS_Streak_Sph;
    this.Cardif_OD_Test_Distance_1 = pediatric.Cardif_OD_Test_Distance_1;
    this.Cardif_OS_Test_Distance_1 = pediatric.Cardif_OS_Test_Distance_1;
    this.Rpl_Streak_OD_Streak_Axis = pediatric.Rpl_Streak_OD_Streak_Axis;
    this.Rpl_Streak_OS_Streak_Axis = pediatric.Rpl_Streak_OS_Streak_Axis;
    this.Cardif_OD_Test_Distance_50 = pediatric.Cardif_OD_Test_Distance_50;
    this.Cardif_OS_Test_Distance_50 = pediatric.Cardif_OS_Test_Distance_50;

    this.Cover_Uncover_OD_Ortho_Without_Check = pediatric.Cover_Uncover_OD_Ortho_Without_Check;
    this.Cover_Uncover_OS_Ortho_Without_Check = pediatric.Cover_Uncover_OS_Ortho_Without_Check;
    this.Cover_Uncover_OD_Ortho_With_Check = pediatric.Cover_Uncover_OD_Ortho_With_Check;
    this.Cover_Uncover_OS_Ortho_With_Check = pediatric.Cover_Uncover_OS_Ortho_With_Check;

    this.Cover_Uncover_OD_Ortho_With_Et_Near = pediatric.Cover_Uncover_OD_Ortho_With_Et_Near;
    this.Cover_Uncover_OD_Ortho_With_Hi_Near = pediatric.Cover_Uncover_OD_Ortho_With_Hi_Near;
    this.Cover_Uncover_OD_Ortho_With_Ho_Near = pediatric.Cover_Uncover_OD_Ortho_With_Ho_Near;
    this.Cover_Uncover_OD_Ortho_With_Xt_Near = pediatric.Cover_Uncover_OD_Ortho_With_Xt_Near;
    this.Cover_Uncover_OD_Ortho_Without_Near = pediatric.Cover_Uncover_OD_Ortho_Without_Near;
    this.Cover_Uncover_OS_Ortho_With_Et_Near = pediatric.Cover_Uncover_OS_Ortho_With_Et_Near;
    this.Cover_Uncover_OS_Ortho_With_Hi_Near = pediatric.Cover_Uncover_OS_Ortho_With_Hi_Near;
    this.Cover_Uncover_OS_Ortho_With_Ho_Near = pediatric.Cover_Uncover_OS_Ortho_With_Ho_Near;
    this.Cover_Uncover_OS_Ortho_With_Xt_Near = pediatric.Cover_Uncover_OS_Ortho_With_Xt_Near;
    this.Cover_Uncover_OS_Ortho_Without_Near = pediatric.Cover_Uncover_OS_Ortho_Without_Near;

    this.Cover_Uncover_OD_Ortho_Without_Et_Near = pediatric.Cover_Uncover_OD_Ortho_Without_Et_Near;
    this.Cover_Uncover_OD_Ortho_Without_Hi_Near = pediatric.Cover_Uncover_OD_Ortho_Without_Hi_Near;
    this.Cover_Uncover_OD_Ortho_Without_Ho_Near = pediatric.Cover_Uncover_OD_Ortho_Without_Ho_Near;
    this.Cover_Uncover_OD_Ortho_Without_Xt_Near = pediatric.Cover_Uncover_OD_Ortho_Without_Xt_Near;
    this.Cover_Uncover_OS_Ortho_Without_Et_Near = pediatric.Cover_Uncover_OS_Ortho_Without_Et_Near;
    this.Cover_Uncover_OS_Ortho_Without_Hi_Near = pediatric.Cover_Uncover_OS_Ortho_Without_Hi_Near;
    this.Cover_Uncover_OS_Ortho_Without_Ho_Near = pediatric.Cover_Uncover_OS_Ortho_Without_Ho_Near;
    this.Cover_Uncover_OS_Ortho_Without_Xt_Near = pediatric.Cover_Uncover_OS_Ortho_Without_Xt_Near;

    this.Cover_Uncover_OD_Ortho_With_Et_Distance = pediatric.Cover_Uncover_OD_Ortho_With_Et_Distance;
    this.Cover_Uncover_OD_Ortho_With_Hi_Distance = pediatric.Cover_Uncover_OD_Ortho_With_Hi_Distance;
    this.Cover_Uncover_OD_Ortho_With_Ho_Distance = pediatric.Cover_Uncover_OD_Ortho_With_Ho_Distance;
    this.Cover_Uncover_OD_Ortho_With_Xt_Distance = pediatric.Cover_Uncover_OD_Ortho_With_Xt_Distance;
    this.Cover_Uncover_OD_Ortho_Without_Distance = pediatric.Cover_Uncover_OD_Ortho_Without_Distance;
    this.Cover_Uncover_OS_Ortho_With_Et_Distance = pediatric.Cover_Uncover_OS_Ortho_With_Et_Distance;
    this.Cover_Uncover_OS_Ortho_With_Hi_Distance = pediatric.Cover_Uncover_OS_Ortho_With_Hi_Distance;
    this.Cover_Uncover_OS_Ortho_With_Ho_Distance = pediatric.Cover_Uncover_OS_Ortho_With_Ho_Distance;
    this.Cover_Uncover_OS_Ortho_With_Xt_Distance = pediatric.Cover_Uncover_OS_Ortho_With_Xt_Distance;
    this.Cover_Uncover_OS_Ortho_Without_Distance = pediatric.Cover_Uncover_OS_Ortho_Without_Distance;

    this.Cover_Uncover_OD_Ortho_Without_Et_Distance = pediatric.Cover_Uncover_OD_Ortho_Without_Et_Distance;
    this.Cover_Uncover_OD_Ortho_Without_Hi_Distance = pediatric.Cover_Uncover_OD_Ortho_Without_Hi_Distance;
    this.Cover_Uncover_OD_Ortho_Without_Ho_Distance = pediatric.Cover_Uncover_OD_Ortho_Without_Ho_Distance;
    this.Cover_Uncover_OD_Ortho_Without_Xt_Distance = pediatric.Cover_Uncover_OD_Ortho_Without_Xt_Distance;
    this.Cover_Uncover_OS_Ortho_Without_Et_Distance = pediatric.Cover_Uncover_OS_Ortho_Without_Et_Distance;
    this.Cover_Uncover_OS_Ortho_Without_Hi_Distance = pediatric.Cover_Uncover_OS_Ortho_Without_Hi_Distance;
    this.Cover_Uncover_OS_Ortho_Without_Ho_Distance = pediatric.Cover_Uncover_OS_Ortho_Without_Ho_Distance;
    this.Cover_Uncover_OS_Ortho_Without_Xt_Distance = pediatric.Cover_Uncover_OS_Ortho_Without_Xt_Distance;

    this.Cover_Uncover_OD_Ortho_With_Et_Near_Lain_Text = pediatric.Cover_Uncover_OD_Ortho_With_Et_Near_Lain_Text;
    this.Cover_Uncover_OD_Ortho_With_Hi_Near_Lain_Text = pediatric.Cover_Uncover_OD_Ortho_With_Hi_Near_Lain_Text;
    this.Cover_Uncover_OD_Ortho_With_Ho_Near_Lain_Text = pediatric.Cover_Uncover_OD_Ortho_With_Ho_Near_Lain_Text;
    this.Cover_Uncover_OD_Ortho_With_Xt_Near_Lain_Text = pediatric.Cover_Uncover_OD_Ortho_With_Xt_Near_Lain_Text;
    this.Cover_Uncover_OD_Ortho_Without_Near_Lain_Text = pediatric.Cover_Uncover_OD_Ortho_Without_Near_Lain_Text;
    this.Cover_Uncover_OS_Ortho_With_Et_Near_Lain_Text = pediatric.Cover_Uncover_OS_Ortho_With_Et_Near_Lain_Text;
    this.Cover_Uncover_OS_Ortho_With_Hi_Near_Lain_Text = pediatric.Cover_Uncover_OS_Ortho_With_Hi_Near_Lain_Text;
    this.Cover_Uncover_OS_Ortho_With_Ho_Near_Lain_Text = pediatric.Cover_Uncover_OS_Ortho_With_Ho_Near_Lain_Text;
    this.Cover_Uncover_OS_Ortho_With_Xt_Near_Lain_Text = pediatric.Cover_Uncover_OS_Ortho_With_Xt_Near_Lain_Text;
    this.Cover_Uncover_OS_Ortho_Without_Near_Lain_Text = pediatric.Cover_Uncover_OS_Ortho_Without_Near_Lain_Text;

    this.Cover_Uncover_OD_Ortho_Without_Et_Near_Lain_Text = pediatric.Cover_Uncover_OD_Ortho_Without_Et_Near_Lain_Text;
    this.Cover_Uncover_OD_Ortho_Without_Hi_Near_Lain_Text = pediatric.Cover_Uncover_OD_Ortho_Without_Hi_Near_Lain_Text;
    this.Cover_Uncover_OD_Ortho_Without_Ho_Near_Lain_Text = pediatric.Cover_Uncover_OD_Ortho_Without_Ho_Near_Lain_Text;
    this.Cover_Uncover_OD_Ortho_Without_Xt_Near_Lain_Text = pediatric.Cover_Uncover_OD_Ortho_Without_Xt_Near_Lain_Text;
    this.Cover_Uncover_OS_Ortho_Without_Et_Near_Lain_Text = pediatric.Cover_Uncover_OS_Ortho_Without_Et_Near_Lain_Text;
    this.Cover_Uncover_OS_Ortho_Without_Hi_Near_Lain_Text = pediatric.Cover_Uncover_OS_Ortho_Without_Hi_Near_Lain_Text;
    this.Cover_Uncover_OS_Ortho_Without_Ho_Near_Lain_Text = pediatric.Cover_Uncover_OS_Ortho_Without_Ho_Near_Lain_Text;
    this.Cover_Uncover_OS_Ortho_Without_Xt_Near_Lain_Text = pediatric.Cover_Uncover_OS_Ortho_Without_Xt_Near_Lain_Text;

    this.Cover_Uncover_OD_Ortho_With_Et_Distance_Lain_Text = pediatric.Cover_Uncover_OD_Ortho_With_Et_Distance_Lain_Text;
    this.Cover_Uncover_OD_Ortho_With_Hi_Distance_Lain_Text = pediatric.Cover_Uncover_OD_Ortho_With_Hi_Distance_Lain_Text;
    this.Cover_Uncover_OD_Ortho_With_Ho_Distance_Lain_Text = pediatric.Cover_Uncover_OD_Ortho_With_Ho_Distance_Lain_Text;
    this.Cover_Uncover_OD_Ortho_With_Xt_Distance_Lain_Text = pediatric.Cover_Uncover_OD_Ortho_With_Xt_Distance_Lain_Text;
    this.Cover_Uncover_OD_Ortho_Without_Distance_Lain_Text = pediatric.Cover_Uncover_OD_Ortho_Without_Distance_Lain_Text;
    this.Cover_Uncover_OS_Ortho_With_Et_Distance_Lain_Text = pediatric.Cover_Uncover_OS_Ortho_With_Et_Distance_Lain_Text;
    this.Cover_Uncover_OS_Ortho_With_Hi_Distance_Lain_Text = pediatric.Cover_Uncover_OS_Ortho_With_Hi_Distance_Lain_Text;
    this.Cover_Uncover_OS_Ortho_With_Ho_Distance_Lain_Text = pediatric.Cover_Uncover_OS_Ortho_With_Ho_Distance_Lain_Text;
    this.Cover_Uncover_OS_Ortho_With_Xt_Distance_Lain_Text = pediatric.Cover_Uncover_OS_Ortho_With_Xt_Distance_Lain_Text;
    this.Cover_Uncover_OS_Ortho_Without_Distance_Lain_Text = pediatric.Cover_Uncover_OS_Ortho_Without_Distance_Lain_Text;

    this.Cover_Uncover_OD_Ortho_Without_Et_Distance_Lain_Text = pediatric.Cover_Uncover_OD_Ortho_Without_Et_Distance_Lain_Text;
    this.Cover_Uncover_OD_Ortho_Without_Hi_Distance_Lain_Text = pediatric.Cover_Uncover_OD_Ortho_Without_Hi_Distance_Lain_Text;
    this.Cover_Uncover_OD_Ortho_Without_Ho_Distance_Lain_Text = pediatric.Cover_Uncover_OD_Ortho_Without_Ho_Distance_Lain_Text;
    this.Cover_Uncover_OD_Ortho_Without_Xt_Distance_Lain_Text = pediatric.Cover_Uncover_OD_Ortho_Without_Xt_Distance_Lain_Text;
    this.Cover_Uncover_OS_Ortho_Without_Et_Distance_Lain_Text = pediatric.Cover_Uncover_OS_Ortho_Without_Et_Distance_Lain_Text;
    this.Cover_Uncover_OS_Ortho_Without_Hi_Distance_Lain_Text = pediatric.Cover_Uncover_OS_Ortho_Without_Hi_Distance_Lain_Text;
    this.Cover_Uncover_OS_Ortho_Without_Ho_Distance_Lain_Text = pediatric.Cover_Uncover_OS_Ortho_Without_Ho_Distance_Lain_Text;
    this.Cover_Uncover_OS_Ortho_Without_Xt_Distance_Lain_Text = pediatric.Cover_Uncover_OS_Ortho_Without_Xt_Distance_Lain_Text;


    this.Okn_ODS_Okn = pediatric.Okn_ODS_Okn;
    this.Raf_ODS_Raf = pediatric.Raf_ODS_Raf;
    this.Prisma_OD_Prisma_With_Et_Near = pediatric.Prisma_OD_Prisma_With_Et_Near;
    this.Prisma_OD_Prisma_With_Hi_Near = pediatric.Prisma_OD_Prisma_With_Hi_Near;
    this.Prisma_OD_Prisma_With_Ho_Near = pediatric.Prisma_OD_Prisma_With_Ho_Near;
    this.Prisma_OD_Prisma_With_Xt_Near = pediatric.Prisma_OD_Prisma_With_Xt_Near;
    this.Prisma_OD_Prisma_Without_Near = pediatric.Prisma_OD_Prisma_Without_Near;
    this.Prisma_OS_Prisma_With_Et_Near = pediatric.Prisma_OS_Prisma_With_Et_Near;
    this.Prisma_OS_Prisma_With_Hi_Near = pediatric.Prisma_OS_Prisma_With_Hi_Near;
    this.Prisma_OS_Prisma_With_Ho_Near = pediatric.Prisma_OS_Prisma_With_Ho_Near;
    this.Prisma_OS_Prisma_With_Xt_Near = pediatric.Prisma_OS_Prisma_With_Xt_Near;
    this.Prisma_OS_Prisma_Without_Near = pediatric.Prisma_OS_Prisma_Without_Near;
    this.Prisma_OD_Prisma_Without_Et_Near = pediatric.Prisma_OD_Prisma_Without_Et_Near;
    this.Prisma_OD_Prisma_Without_Hi_Near = pediatric.Prisma_OD_Prisma_Without_Hi_Near;
    this.Prisma_OD_Prisma_Without_Ho_Near = pediatric.Prisma_OD_Prisma_Without_Ho_Near;
    this.Prisma_OD_Prisma_Without_Xt_Near = pediatric.Prisma_OD_Prisma_Without_Xt_Near;
    this.Prisma_OS_Prisma_Without_Et_Near = pediatric.Prisma_OS_Prisma_Without_Et_Near;
    this.Prisma_OS_Prisma_Without_Hi_Near = pediatric.Prisma_OS_Prisma_Without_Hi_Near;
    this.Prisma_OS_Prisma_Without_Ho_Near = pediatric.Prisma_OS_Prisma_Without_Ho_Near;
    this.Prisma_OS_Prisma_Without_Xt_Near = pediatric.Prisma_OS_Prisma_Without_Xt_Near;
    this.Prisma_OD_Prisma_With_Et_Distance = pediatric.Prisma_OD_Prisma_With_Et_Distance;
    this.Prisma_OD_Prisma_With_Hi_Distance = pediatric.Prisma_OD_Prisma_With_Hi_Distance;
    this.Prisma_OD_Prisma_With_Ho_Distance = pediatric.Prisma_OD_Prisma_With_Ho_Distance;
    this.Prisma_OD_Prisma_With_Xt_Distance = pediatric.Prisma_OD_Prisma_With_Xt_Distance;
    this.Prisma_OD_Prisma_Without_Distance = pediatric.Prisma_OD_Prisma_Without_Distance;
    this.Prisma_OS_Prisma_With_Et_Distance = pediatric.Prisma_OS_Prisma_With_Et_Distance;
    this.Prisma_OS_Prisma_With_Hi_Distance = pediatric.Prisma_OS_Prisma_With_Hi_Distance;
    this.Prisma_OS_Prisma_With_Ho_Distance = pediatric.Prisma_OS_Prisma_With_Ho_Distance;
    this.Prisma_OS_Prisma_With_Xt_Distance = pediatric.Prisma_OS_Prisma_With_Xt_Distance;
    this.Prisma_OD_Prisma_Without_Et_Distance = pediatric.Prisma_OD_Prisma_Without_Et_Distance;
    this.Prisma_OD_Prisma_Without_Hi_Distance = pediatric.Prisma_OD_Prisma_Without_Hi_Distance;
    this.Prisma_OD_Prisma_Without_Ho_Distance = pediatric.Prisma_OD_Prisma_Without_Ho_Distance;
    this.Prisma_OD_Prisma_Without_Xt_Distance = pediatric.Prisma_OD_Prisma_Without_Xt_Distance;
    this.Prisma_OS_Prisma_Without_Et_Distance = pediatric.Prisma_OS_Prisma_Without_Et_Distance;
    this.Prisma_OS_Prisma_Without_Hi_Distance = pediatric.Prisma_OS_Prisma_Without_Hi_Distance;
    this.Prisma_OS_Prisma_Without_Ho_Distance = pediatric.Prisma_OS_Prisma_Without_Ho_Distance;
    this.Prisma_OS_Prisma_Without_Xt_Distance = pediatric.Prisma_OS_Prisma_Without_Xt_Distance;
    this.Prisma_OD_Prisma_With_Et_Near_Lain_Text = pediatric.Prisma_OD_Prisma_With_Et_Near_Lain_Text;
    this.Prisma_OD_Prisma_With_Hi_Near_Lain_Text = pediatric.Prisma_OD_Prisma_With_Hi_Near_Lain_Text;
    this.Prisma_OD_Prisma_With_Ho_Near_Lain_Text = pediatric.Prisma_OD_Prisma_With_Ho_Near_Lain_Text;
    this.Prisma_OD_Prisma_With_Xt_Near_Lain_Text = pediatric.Prisma_OD_Prisma_With_Xt_Near_Lain_Text;
    this.Prisma_OD_Prisma_Without_Near_Lain_Text = pediatric.Prisma_OD_Prisma_Without_Near_Lain_Text;
    this.Prisma_OS_Prisma_With_Et_Near_Lain_Text = pediatric.Prisma_OS_Prisma_With_Et_Near_Lain_Text;
    this.Prisma_OS_Prisma_With_Hi_Near_Lain_Text = pediatric.Prisma_OS_Prisma_With_Hi_Near_Lain_Text;
    this.Prisma_OS_Prisma_With_Ho_Near_Lain_Text = pediatric.Prisma_OS_Prisma_With_Ho_Near_Lain_Text;
    this.Prisma_OS_Prisma_With_Xt_Near_Lain_Text = pediatric.Prisma_OS_Prisma_With_Xt_Near_Lain_Text;
    this.Prisma_OS_Prisma_Without_Near_Lain_Text = pediatric.Prisma_OS_Prisma_Without_Near_Lain_Text;
    this.Prisma_OD_Prisma_Without_Et_Near_Lain_Text = pediatric.Prisma_OD_Prisma_Without_Et_Near_Lain_Text;
    this.Prisma_OD_Prisma_Without_Hi_Near_Lain_Text = pediatric.Prisma_OD_Prisma_Without_Hi_Near_Lain_Text;
    this.Prisma_OD_Prisma_Without_Ho_Near_Lain_Text = pediatric.Prisma_OD_Prisma_Without_Ho_Near_Lain_Text;
    this.Prisma_OD_Prisma_Without_Xt_Near_Lain_Text = pediatric.Prisma_OD_Prisma_Without_Xt_Near_Lain_Text;
    this.Prisma_OS_Prisma_Without_Et_Near_Lain_Text = pediatric.Prisma_OS_Prisma_Without_Et_Near_Lain_Text;
    this.Prisma_OS_Prisma_Without_Hi_Near_Lain_Text = pediatric.Prisma_OS_Prisma_Without_Hi_Near_Lain_Text;
    this.Prisma_OS_Prisma_Without_Ho_Near_Lain_Text = pediatric.Prisma_OS_Prisma_Without_Ho_Near_Lain_Text;
    this.Prisma_OS_Prisma_Without_Xt_Near_Lain_Text = pediatric.Prisma_OS_Prisma_Without_Xt_Near_Lain_Text;
    this.Prisma_OD_Prisma_With_Et_Distance_Lain_Text = pediatric.Prisma_OD_Prisma_With_Et_Distance_Lain_Text;
    this.Prisma_OD_Prisma_With_Hi_Distance_Lain_Text = pediatric.Prisma_OD_Prisma_With_Hi_Distance_Lain_Text;
    this.Prisma_OD_Prisma_With_Ho_Distance_Lain_Text = pediatric.Prisma_OD_Prisma_With_Ho_Distance_Lain_Text;
    this.Prisma_OD_Prisma_With_Xt_Distance_Lain_Text = pediatric.Prisma_OD_Prisma_With_Xt_Distance_Lain_Text;
    this.Prisma_OD_Prisma_Without_Distance_Lain_Text = pediatric.Prisma_OD_Prisma_Without_Distance_Lain_Text;
    this.Prisma_OS_Prisma_With_Et_Distance_Lain_Text = pediatric.Prisma_OS_Prisma_With_Et_Distance_Lain_Text;
    this.Prisma_OS_Prisma_With_Hi_Distance_Lain_Text = pediatric.Prisma_OS_Prisma_With_Hi_Distance_Lain_Text;
    this.Prisma_OS_Prisma_With_Ho_Distance_Lain_Text = pediatric.Prisma_OS_Prisma_With_Ho_Distance_Lain_Text;
    this.Prisma_OS_Prisma_With_Xt_Distance_Lain_Text = pediatric.Prisma_OS_Prisma_With_Xt_Distance_Lain_Text;
    this.Prisma_OD_Prisma_Without_Et_Distance_Lain_Text = pediatric.Prisma_OD_Prisma_Without_Et_Distance_Lain_Text;
    this.Prisma_OD_Prisma_Without_Hi_Distance_Lain_Text = pediatric.Prisma_OD_Prisma_Without_Hi_Distance_Lain_Text;
    this.Prisma_OD_Prisma_Without_Ho_Distance_Lain_Text = pediatric.Prisma_OD_Prisma_Without_Ho_Distance_Lain_Text;
    this.Prisma_OD_Prisma_Without_Xt_Distance_Lain_Text = pediatric.Prisma_OD_Prisma_Without_Xt_Distance_Lain_Text;
    this.Prisma_OS_Prisma_Without_Et_Distance_Lain_Text = pediatric.Prisma_OS_Prisma_Without_Et_Distance_Lain_Text;
    this.Prisma_OS_Prisma_Without_Hi_Distance_Lain_Text = pediatric.Prisma_OS_Prisma_Without_Hi_Distance_Lain_Text;
    this.Prisma_OS_Prisma_Without_Ho_Distance_Lain_Text = pediatric.Prisma_OS_Prisma_Without_Ho_Distance_Lain_Text;
    this.Prisma_OS_Prisma_Without_Xt_Distance_Lain_Text = pediatric.Prisma_OS_Prisma_Without_Xt_Distance_Lain_Text;
    this.Ptosis_OD_FIP = pediatric.Ptosis_OD_FIP;
    this.Ptosis_OS_FIP = pediatric.Ptosis_OS_FIP;
    this.Ptosis_OD_MRD = pediatric.Ptosis_OD_MRD;
    this.Ptosis_OS_MRD = pediatric.Ptosis_OS_MRD;
    this.Ptosis_OD_LA = pediatric.Ptosis_OD_LA;
    this.Ptosis_OS_LA = pediatric.Ptosis_OS_LA;

    this.TNO_Stereoskopis_ODS_1 = pediatric.TNO_Stereoskopis_ODS_1;
    this.TNO_Stereoskopis_ODS_2 = pediatric.TNO_Stereoskopis_ODS_2;
    this.TNO_Stereoskopis_ODS_3 = pediatric.TNO_Stereoskopis_ODS_3;
    this.TNO_Stereoskopis_ODS_4 = pediatric.TNO_Stereoskopis_ODS_4;
    this.TNO_Stereoskopis_ODS_5 = pediatric.TNO_Stereoskopis_ODS_5;

    this.Goniometer_ODS_Goniometer = pediatric.Goniometer_ODS_Goniometer;
    this.Goniometer_ODS_Right_Check = pediatric.Goniometer_ODS_Right_Check;
    this.Goniometer_ODS_Left_Check = pediatric.Goniometer_ODS_Left_Check;
    this.VOD = pediatric.VOD;
    this.VOS = pediatric.VOS;
    this.VOD_Text = pediatric.VOD_Text;
    this.VOS_Text = pediatric.VOS_Text;

  }

  static schema() {
    return yup.object().shape({
      Hes_OD_Hes: yup.string(),
      Hes_OS_Hes: yup.string(),
      Okn_OD_Okn: yup.string(),
      Okn_OS_Okn: yup.string(),
      Raf_OD_Raf: yup.string(),
      Raf_OS_Raf: yup.string(),
      Tac_OD_At_38: yup.string(),
      Tac_OD_At_55: yup.string(),
      Tac_OD_At_84: yup.string(),
      Tac_OS_At_38: yup.string(),
      Tac_OS_At_55: yup.string(),
      Tac_OS_At_84: yup.string(),
      Cover_OD_Cover_1: yup.string(),
      Cover_OD_Cover_2: yup.string(),
      Cover_OD_Cover_3: yup.string(),
      Cover_OD_Cover_4: yup.string(),
      Cover_OD_Cover_5: yup.string(),
      Cover_OD_Cover_6: yup.string(),
      Cover_OD_Cover_Text_1: yup.string(),
      Cover_OD_Cover_Text_2: yup.string(),
      Cover_OD_Cover_Text_3: yup.string(),
      Cover_OD_Cover_Text_4: yup.string(),
      Cover_OD_Cover_Text_5: yup.string(),
      Cover_OD_Cover_Text_6: yup.string(),
      Cover_OS_Cover_1: yup.string(),
      Cover_OS_Cover_2: yup.string(),
      Cover_OS_Cover_3: yup.string(),
      Cover_OS_Cover_4: yup.string(),
      Cover_OS_Cover_5: yup.string(),
      Cover_OS_Cover_6: yup.string(),
      Cover_OS_Cover_Text_1: yup.string(),
      Cover_OS_Cover_Text_2: yup.string(),
      Cover_OS_Cover_Text_3: yup.string(),
      Cover_OS_Cover_Text_4: yup.string(),
      Cover_OS_Cover_Text_5: yup.string(),
      Cover_OS_Cover_Text_6: yup.string(),
      Prisma_OD_Prisma: yup.string(),
      Prisma_OS_Prisma: yup.string(),
      Randot_OD_Animal: yup.string(),
      Randot_OS_Animal: yup.string(),
      Rpl_Streak_OD_Va: yup.string(),
      Rpl_Streak_OD_Va_Text: yup.string(),
      Rpl_Streak_OS_Va: yup.string(),
      Rpl_Streak_OS_Va_Text: yup.string(),
      Submit_Pediatrik: yup.string(),
      Randot_OD_Circles: yup.string(),
      Randot_OS_Circles: yup.string(),
      Rpl_Streak_OD_False: yup.string(),
      Rpl_Streak_OD_False_Text: yup.string(),
      Rpl_Streak_OS_False: yup.string(),
      Rpl_Streak_OS_False_Text: yup.string(),
      Randot_OD_Randot_Form: yup.string(),
      Randot_OS_Randot_Form: yup.string(),
      Rpl_Streak_OD_Pd_Jauh: yup.string(),
      Rpl_Streak_OD_Pd_Jauh_Text: yup.string(),
      Rpl_Streak_OS_Pd_Jauh: yup.string(),
      Rpl_Streak_OS_Pd_Jauh_Text: yup.string(),
      Rpl_Streak_OD_Adaptasi: yup.string(),
      Rpl_Streak_OD_Adaptasi_Text: yup.string(),
      Rpl_Streak_OS_Adaptasi: yup.string(),
      Rpl_Streak_OS_Adaptasi_Text: yup.string(),
      Goniometer_OD_Goniometer: yup.string(),
      Goniometer_OS_Goniometer: yup.string(),
      Nearvision_OD_Nearvision: yup.string(),
      Nearvision_OD_Select: yup.string(),
      Nearvision_OS_Select: yup.string(),
      Nearvision_OS_Nearvision: yup.string(),
      Rpl_Streak_OD_Streak_Cyl: yup.string(),
      Rpl_Streak_OD_Streak_Sph: yup.string(),
      Rpl_Streak_OS_Streak_Cyl: yup.string(),
      Rpl_Streak_OS_Streak_Sph: yup.string(),
      Cardif_OD_Test_Distance_1: yup.string(),
      Cardif_OS_Test_Distance_1: yup.string(),
      Rpl_Streak_OD_Streak_Axis: yup.string(),
      Rpl_Streak_OS_Streak_Axis: yup.string(),
      Cardif_OD_Test_Distance_50: yup.string(),
      Cardif_OS_Test_Distance_50: yup.string(),

      Cover_Uncover_OD_Ortho_With_Check : yup.string(),
      Cover_Uncover_OS_Ortho_With_Check : yup.string(),
      Cover_Uncover_OD_Ortho_Without_Check : yup.string(),
      Cover_Uncover_OS_Ortho_Without_Check : yup.string(),

      Cover_Uncover_OD_Ortho_With_Et_Near : yup.string(),
      Cover_Uncover_OD_Ortho_With_Hi_Near : yup.string(),
      Cover_Uncover_OD_Ortho_With_Ho_Near : yup.string(),
      Cover_Uncover_OD_Ortho_With_Xt_Near : yup.string(),
      Cover_Uncover_OD_Ortho_Without_Near : yup.string(),
      Cover_Uncover_OS_Ortho_With_Et_Near : yup.string(),
      Cover_Uncover_OS_Ortho_With_Hi_Near : yup.string(),
      Cover_Uncover_OS_Ortho_With_Ho_Near : yup.string(),
      Cover_Uncover_OS_Ortho_With_Xt_Near : yup.string(),
      Cover_Uncover_OS_Ortho_Without_Near : yup.string(),

      Cover_Uncover_OD_Ortho_Without_Et_Near : yup.string(),
      Cover_Uncover_OD_Ortho_Without_Hi_Near : yup.string(),
      Cover_Uncover_OD_Ortho_Without_Ho_Near : yup.string(),
      Cover_Uncover_OD_Ortho_Without_Xt_Near : yup.string(),
      Cover_Uncover_OS_Ortho_Without_Et_Near : yup.string(),
      Cover_Uncover_OS_Ortho_Without_Hi_Near : yup.string(),
      Cover_Uncover_OS_Ortho_Without_Ho_Near : yup.string(),
      Cover_Uncover_OS_Ortho_Without_Xt_Near : yup.string(),

      Cover_Uncover_OD_Ortho_With_Et_Distance : yup.string(),
      Cover_Uncover_OD_Ortho_With_Hi_Distance : yup.string(),
      Cover_Uncover_OD_Ortho_With_Ho_Distance : yup.string(),
      Cover_Uncover_OD_Ortho_With_Xt_Distance : yup.string(),
      Cover_Uncover_OD_Ortho_Without_Distance : yup.string(),
      Cover_Uncover_OS_Ortho_With_Et_Distance : yup.string(),
      Cover_Uncover_OS_Ortho_With_Hi_Distance : yup.string(),
      Cover_Uncover_OS_Ortho_With_Ho_Distance : yup.string(),
      Cover_Uncover_OS_Ortho_With_Xt_Distance : yup.string(),
      Cover_Uncover_OS_Ortho_Without_Distance : yup.string(),

      Cover_Uncover_OD_Ortho_Without_Et_Distance : yup.string(),
      Cover_Uncover_OD_Ortho_Without_Hi_Distance : yup.string(),
      Cover_Uncover_OD_Ortho_Without_Ho_Distance : yup.string(),
      Cover_Uncover_OD_Ortho_Without_Xt_Distance : yup.string(),
      Cover_Uncover_OS_Ortho_Without_Et_Distance : yup.string(),
      Cover_Uncover_OS_Ortho_Without_Hi_Distance : yup.string(),
      Cover_Uncover_OS_Ortho_Without_Ho_Distance : yup.string(),
      Cover_Uncover_OS_Ortho_Without_Xt_Distance : yup.string(),

      Okn_ODS_Okn : yup.string(),
      Raf_ODS_Raf : yup.string(),

      Prisma_OD_Prisma_With_Et_Near: yup.string(),
      Prisma_OD_Prisma_With_Hi_Near: yup.string(),
      Prisma_OD_Prisma_With_Ho_Near: yup.string(),
      Prisma_OD_Prisma_With_Xt_Near: yup.string(),
      Prisma_OD_Prisma_Without_Near: yup.string(),
      Prisma_OS_Prisma_With_Et_Near: yup.string(),
      Prisma_OS_Prisma_With_Hi_Near: yup.string(),
      Prisma_OS_Prisma_With_Ho_Near: yup.string(),
      Prisma_OS_Prisma_With_Xt_Near: yup.string(),
      Prisma_OS_Prisma_Without_Near: yup.string(),
      Prisma_OD_Prisma_Without_Et_Near: yup.string(),
      Prisma_OD_Prisma_Without_Hi_Near: yup.string(),
      Prisma_OD_Prisma_Without_Ho_Near: yup.string(),
      Prisma_OD_Prisma_Without_Xt_Near: yup.string(),
      Prisma_OS_Prisma_Without_Et_Near: yup.string(),
      Prisma_OS_Prisma_Without_Hi_Near: yup.string(),
      Prisma_OS_Prisma_Without_Ho_Near: yup.string(),
      Prisma_OS_Prisma_Without_Xt_Near: yup.string(),
      Prisma_OD_Prisma_With_Et_Distance: yup.string(),
      Prisma_OD_Prisma_With_Hi_Distance: yup.string(),
      Prisma_OD_Prisma_With_Ho_Distance: yup.string(),
      Prisma_OD_Prisma_With_Xt_Distance: yup.string(),
      Prisma_OD_Prisma_Without_Distance: yup.string(),
      Prisma_OS_Prisma_With_Et_Distance: yup.string(),
      Prisma_OS_Prisma_With_Hi_Distance: yup.string(),
      Prisma_OS_Prisma_With_Ho_Distance: yup.string(),
      Prisma_OS_Prisma_With_Xt_Distance: yup.string(),
      Prisma_OD_Prisma_Without_Et_Distance: yup.string(),
      Prisma_OD_Prisma_Without_Hi_Distance: yup.string(),
      Prisma_OD_Prisma_Without_Ho_Distance: yup.string(),
      Prisma_OD_Prisma_Without_Xt_Distance: yup.string(),
      Prisma_OS_Prisma_Without_Et_Distance: yup.string(),
      Prisma_OS_Prisma_Without_Hi_Distance: yup.string(),
      Prisma_OS_Prisma_Without_Ho_Distance: yup.string(),
      Prisma_OS_Prisma_Without_Xt_Distance: yup.string(),
      Ptosis_OD_FIP: yup.string(),
      Ptosis_OS_FIP: yup.string(),
      Ptosis_OD_MRD: yup.string(),
      Ptosis_OS_MRD: yup.string(),
      Ptosis_OD_LA: yup.string(),
      Ptosis_OS_LA: yup.string(),

      TNO_Stereoskopis_ODS_1: yup.string(),
      TNO_Stereoskopis_ODS_2: yup.string(),
      TNO_Stereoskopis_ODS_3: yup.string(),
      TNO_Stereoskopis_ODS_4: yup.string(),
      TNO_Stereoskopis_ODS_5: yup.string(),

      Goniometer_ODS_Goniometer: yup.string(),
      Goniometer_ODS_Right_Check: yup.string(),
      Goniometer_ODS_Left_Check: yup.string(),
      VOD: yup.string(),
      VOS: yup.string(),
      VOD_Text: yup.string(),
      VOS_Text: yup.string(),

    });
  }
}

export interface IPrismElse {
  "1": boolean;
  "2": boolean;
  '3': boolean;
  '4': boolean;
  '5': boolean;
  '6': boolean;
  '7': boolean;
  '8': boolean;
  '9': boolean;
  '10': boolean;
  '11': boolean;
  '12': boolean;
  '13': boolean;
  '14': boolean;
  '15': boolean;
  '16': boolean;
  '17': boolean;
  '18': boolean;
  '19': boolean;
  '20': boolean;
  '21': boolean;
  '22': boolean;
  '23': boolean;
  '24': boolean;
  '25': boolean;
  '26': boolean;
  '27': boolean;
  '28': boolean;
  '29': boolean;
  '30': boolean;
  '31': boolean;
  '32': boolean;
}

export interface IDoctorPreliminaryStudyFormModel {
  Catatan_Note: string;
  Resep: Array<IPrescription>;
  COA_OD: string;
  COA_OS: string;
  Terapi: string;
  Anjuran: string;
  Iris_OD: string;
  Iris_OS: string;
  Keluhan: string;
  Diagnosa: string;
  Diagnosa_Keseragaman: string;
  Lensa_OD: string;
  Lensa_OS: string;
  Pupil_OD: string;
  Pupil_OS: string;
  Cornea_OD: string;
  Cornea_OS: string;
  Pediatrik: IPediatric;
  Posisi_OD: string;
  Posisi_OS: string;
  ID_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  Vitreous_OD: string;
  Vitreous_OS: string;
  Nama_Petugas: string;
  Conj_Bulbi_OD: string;
  Conj_Bulbi_OS: string;
  Funduscopy_OD: string;
  Funduscopy_OS: string;
  Pergerakan_OD: string;
  Pergerakan_OS: string;
  Submit_Retina: string;
  Gambar_Mata_OD: string;
  Gambar_Mata_OS: string;
  Gambar_Retina_OD: string;
  Gambar_Retina_OS: string;
  Submit_Pediatrik: string;
  ID_Dokter_Pengkaji: string;
  Tanggal_Pengkajian: string;
  TTD_Dokter_Pengkaji: string;
  Nama_Dokter_Pengkaji: string;
  Palpebra_Inferior_OD: string;
  Palpebra_Inferior_OS: string;
  Palpebra_Superior_OD: string;
  Palpebra_Superior_OS: string;
  Conj_Tarsal_Inferior_OD: string;
  Conj_Tarsal_Inferior_OS: string;
  Conj_Tarsal_Superior_OD: string;
  Conj_Tarsal_Superior_OS: string;
  CPPT_ID: string;
  Kesimpulan_Pemeriksaan: string;
  Canthal_Medial_OD: string;
  Canthal_Medial_OS: string;
  Canthal_Lateral_OD: string;
  Canthal_Lateral_OS: string;
  Sclera_OD: string;
  Sclera_OS: string;
  Data_Objektif_Lain: string;
  Image_1: IImage;
  Image_2: IImage;
}

export class DoctorPreliminaryStudyFormModel {
  Catatan_Note: string;
  Resep: Array<IPrescription>;
  COA_OD: string;
  COA_OS: string;
  Terapi: string;
  Anjuran: string;
  Iris_OD: string;
  Iris_OS: string;
  Keluhan: string;
  Diagnosa: string;
  Diagnosa_Keseragaman: string;
  Lensa_OD: string;
  Lensa_OS: string;
  Pupil_OD: string;
  Pupil_OS: string;
  Cornea_OD: string;
  Cornea_OS: string;
  Pediatrik: Pediatric;
  Posisi_OD: string;
  Posisi_OS: string;
  ID_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  Vitreous_OD: string;
  Vitreous_OS: string;
  Nama_Petugas: string;
  Conj_Bulbi_OD: string;
  Conj_Bulbi_OS: string;
  Funduscopy_OD: string;
  Funduscopy_OS: string;
  Pergerakan_OD: string;
  Pergerakan_OS: string;
  Submit_Retina: string;
  Gambar_Mata_OD: string;
  Gambar_Mata_OS: string;
  Gambar_Retina_OD: string;
  Gambar_Retina_OS: string;
  Submit_Pediatrik: string;
  ID_Dokter_Pengkaji: string;
  Tanggal_Pengkajian: string;
  TTD_Dokter_Pengkaji: string;
  Nama_Dokter_Pengkaji: string;
  Palpebra_Inferior_OD: string;
  Palpebra_Inferior_OS: string;
  Palpebra_Superior_OD: string;
  Palpebra_Superior_OS: string;
  Conj_Tarsal_Inferior_OD: string;
  Conj_Tarsal_Inferior_OS: string;
  Conj_Tarsal_Superior_OD: string;
  Conj_Tarsal_Superior_OS: string;
  CPPT_ID: string;
  Kesimpulan_Pemeriksaan: string;
  Canthal_Medial_OD: string;
  Canthal_Medial_OS: string;
  Canthal_Lateral_OD: string;
  Canthal_Lateral_OS: string;
  Sclera_OD: string;
  Sclera_OS: string;
  Data_Objektif_Lain: string;
  Image_1: IImage;
  Image_2: IImage;

  constructor(doctorPreliminaryForm: IDoctorPreliminaryStudyFormModel) {
    this.Catatan_Note = doctorPreliminaryForm.Catatan_Note;
    this.Resep = doctorPreliminaryForm.Resep;
    this.COA_OD = doctorPreliminaryForm.COA_OD;
    this.COA_OS = doctorPreliminaryForm.COA_OS;
    this.Terapi = doctorPreliminaryForm.Terapi;
    this.Anjuran = doctorPreliminaryForm.Anjuran;
    this.Iris_OD = doctorPreliminaryForm.Iris_OD;
    this.Iris_OS = doctorPreliminaryForm.Iris_OS;
    this.Keluhan = doctorPreliminaryForm.Keluhan;
    this.Diagnosa = doctorPreliminaryForm.Diagnosa;
    this.Diagnosa_Keseragaman = doctorPreliminaryForm.Diagnosa_Keseragaman;
    this.Lensa_OD = doctorPreliminaryForm.Lensa_OD;
    this.Lensa_OS = doctorPreliminaryForm.Lensa_OS;
    this.Pupil_OD = doctorPreliminaryForm.Pupil_OD;
    this.Pupil_OS = doctorPreliminaryForm.Pupil_OS;
    this.Cornea_OD = doctorPreliminaryForm.Cornea_OD;
    this.Cornea_OS = doctorPreliminaryForm.Cornea_OS;
    this.Pediatrik = doctorPreliminaryForm.Pediatrik;
    this.Posisi_OD = doctorPreliminaryForm.Posisi_OD;
    this.Posisi_OS = doctorPreliminaryForm.Posisi_OS;
    this.ID_Petugas = doctorPreliminaryForm.ID_Petugas;
    this.Updated_At = doctorPreliminaryForm.Updated_At;
    this.Updated_By = doctorPreliminaryForm.Updated_By;
    this.Vitreous_OD = doctorPreliminaryForm.Vitreous_OD;
    this.Vitreous_OS = doctorPreliminaryForm.Vitreous_OS;
    this.Nama_Petugas = doctorPreliminaryForm.Nama_Petugas;
    this.Conj_Bulbi_OD = doctorPreliminaryForm.Conj_Bulbi_OD;
    this.Conj_Bulbi_OS = doctorPreliminaryForm.Conj_Bulbi_OS;
    this.Funduscopy_OD = doctorPreliminaryForm.Funduscopy_OD;
    this.Funduscopy_OS = doctorPreliminaryForm.Funduscopy_OS;
    this.Pergerakan_OD = doctorPreliminaryForm.Pergerakan_OD;
    this.Pergerakan_OS = doctorPreliminaryForm.Pergerakan_OS;
    this.Submit_Retina = doctorPreliminaryForm.Submit_Retina;
    this.Gambar_Mata_OD = doctorPreliminaryForm.Gambar_Mata_OD;
    this.Gambar_Mata_OS = doctorPreliminaryForm.Gambar_Mata_OS;
    this.Gambar_Retina_OD = doctorPreliminaryForm.Gambar_Retina_OD;
    this.Gambar_Retina_OS = doctorPreliminaryForm.Gambar_Retina_OS;
    this.Submit_Pediatrik = doctorPreliminaryForm.Submit_Pediatrik;
    this.ID_Dokter_Pengkaji = doctorPreliminaryForm.ID_Dokter_Pengkaji;
    this.Tanggal_Pengkajian = doctorPreliminaryForm.Tanggal_Pengkajian;
    this.TTD_Dokter_Pengkaji = doctorPreliminaryForm.TTD_Dokter_Pengkaji;
    this.Nama_Dokter_Pengkaji = doctorPreliminaryForm.Nama_Dokter_Pengkaji;
    this.Palpebra_Inferior_OD = doctorPreliminaryForm.Palpebra_Inferior_OD;
    this.Palpebra_Inferior_OS = doctorPreliminaryForm.Palpebra_Inferior_OS;
    this.Palpebra_Superior_OD = doctorPreliminaryForm.Palpebra_Superior_OD;
    this.Palpebra_Superior_OS = doctorPreliminaryForm.Palpebra_Superior_OS;
    this.Conj_Tarsal_Inferior_OD = doctorPreliminaryForm.Conj_Tarsal_Inferior_OD;
    this.Conj_Tarsal_Inferior_OS = doctorPreliminaryForm.Conj_Tarsal_Inferior_OS;
    this.Conj_Tarsal_Superior_OD = doctorPreliminaryForm.Conj_Tarsal_Superior_OD;
    this.Conj_Tarsal_Superior_OS = doctorPreliminaryForm.Conj_Tarsal_Superior_OS;
    this.CPPT_ID = doctorPreliminaryForm.CPPT_ID;
    this.Kesimpulan_Pemeriksaan = doctorPreliminaryForm.Kesimpulan_Pemeriksaan;
    this.Canthal_Medial_OD = doctorPreliminaryForm.Canthal_Medial_OD;
    this.Canthal_Medial_OS = doctorPreliminaryForm.Canthal_Medial_OS;
    this.Canthal_Lateral_OD = doctorPreliminaryForm.Canthal_Lateral_OD;
    this.Canthal_Lateral_OS = doctorPreliminaryForm.Canthal_Lateral_OS;
    this.Sclera_OD = doctorPreliminaryForm.Sclera_OD;
    this.Sclera_OS = doctorPreliminaryForm.Sclera_OS;
    this.Data_Objektif_Lain = doctorPreliminaryForm.Data_Objektif_Lain;
    this.Image_1 = doctorPreliminaryForm.Image_1;
    this.Image_2 = doctorPreliminaryForm.Image_2;
  }
}

export interface IDaftarTebus {
  Catatan: string;
  ID_AturanPakai: string;
  ID_Satuan: string;
  Jumlah: string;
  Kode_AturanPakai: string;
  Kode_Obat: string;
  Nama_AturanPakai: string;
  Nama_Obat: string;
  Nama_Satuan: string;
}

export interface IFormFarmasi {
  Daftar_Tebus: Array<IDaftarTebus>;
  Keterangan: string;
  Status_Tebus: string;
  Waktu_Tebus: string;
}

export class FormFarmasi {
  Daftar_Tebus: Array<IDaftarTebus>;
  Keterangan: string;
  Status_Tebus: string;
  Waktu_Tebus: string;

  constructor(req: IFormFarmasi) {
    this.Daftar_Tebus = req.Daftar_Tebus;
    this.Keterangan = req.Keterangan;
    this.Status_Tebus = req.Status_Tebus;
    this.Waktu_Tebus = req.Waktu_Tebus;
  }
}

export interface IDoctorPreliminaryStudyModel extends IDataModel {
  form: IDoctorPreliminaryStudyFormModel;
  formRO: IPreliminaryStudyForm;
  formFarmasi: IFormFarmasi;
  isDefault: boolean;
  obat: Array<IMedicine>;
  aturan_pakai: Array<IHowToUse>;
  paket_obat: Array<IMedsPackage>;
}

export class DoctorPreliminaryStudyModel extends DataModel {
  form: DoctorPreliminaryStudyFormModel;
  formRO: PreliminaryStudyForm;
  formFarmasi: FormFarmasi;
  isDefault: boolean;
  obat: Array<IMedicine>;
  aturan_pakai: Array<IHowToUse>;
  paket_obat: Array<IMedsPackage>;

  constructor(doctorPreliminary: IDoctorPreliminaryStudyModel) {
    super(doctorPreliminary);
    this.form = doctorPreliminary.form;
    this.formRO = doctorPreliminary.formRO;
    this.formFarmasi = doctorPreliminary.formFarmasi;
    this.isDefault = doctorPreliminary.isDefault;
    this.obat = (Array.isArray(doctorPreliminary.obat)) ? doctorPreliminary.obat.map((a) => new Medicine(a)) : [];
    this.aturan_pakai = (Array.isArray(doctorPreliminary.aturan_pakai)) ? doctorPreliminary.aturan_pakai.map((a) => new HowToUse(a)) : [];
    this.paket_obat = (Array.isArray(doctorPreliminary.paket_obat)) ? doctorPreliminary.paket_obat.map((a) => new MedsPackage(a)) : [];
  }

  static createFromJson(json: IDoctorPreliminaryStudyModel) {
    return new DoctorPreliminaryStudyModel(json);
  }
}
