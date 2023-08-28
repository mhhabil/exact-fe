import { IPatientModel, PatientModel } from "@src/shared/model";


export interface IBiometricModel {
  ID: string;
  EMR_ID: string;
  Od_K1: string;
  Od_K2: string;
  Od_Acd: string;
  Os_K1: string;
  Os_K2: string;
  Os_Acd: string;
  Dokter_Pemeriksa_Nama: string;
  Dokter_Pemeriksa_Id: string;
  Perawat_Pemeriksa_Nama: string;
  ID_Perawat: string;
  TTD_Perawat: string;
  Perawat_Pemeriksa_Id: string;
  Catatan: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  TTD_Tanggal: string;
  TTD_Dokter_Pemeriksa: string;
  Nama_Dokter_Pemeriksa: string;
  Updated_At: string;
  Updated_By: string;
  Od_Axl_Iol_Master: string;
  Os_Axl_Iol_Master: string;
  Check_Od_Axl: string;
  Check_Os_Axl: string;
  Od_Axl_Imersion: string;
  Os_Axl_Imersion: string;
  Od_Axl_Contact: string;
  Os_Axl_Contact: string;
  Od_Fold_Asp_Iol_Master: string;
  Os_Fold_Asp_Iol_Master: string;
  Check_Od_Fold_Asp: string;
  Check_Os_Fold_Asp: string;
  Od_Fold_Asp_Imersion: string;
  Os_Fold_Asp_Imersion: string;
  Od_Fold_Asp_Contact: string;
  Os_Fold_Asp_Contact: string;
  Od_Fold_Sp_Iol_Master: string;
  Os_Fold_Sp_Iol_Master: string;
  Check_Od_Fold_Sp: string;
  Check_Os_Fold_Sp: string;
  Od_Fold_Sp_Imersion: string;
  Os_Fold_Sp_Imersion: string;
  Od_Fold_Sp_Contact: string;
  Os_Fold_Sp_Contact: string;
  Od_Ca_Iol_Master: string;
  Os_Ca_Iol_Master: string;
  Check_Od_Ca: string;
  Check_Os_Ca: string;
  Od_Ca_Imersion: string;
  Os_Ca_Imersion: string;
  Od_Ca_Contact: string;
  Os_Ca_Contact: string;
  Od_Cl_Iol_Master: string;
  Os_Cl_Iol_Master: string;
  Check_Od_Cl: string;
  Check_Os_Cl: string;
  Od_Cl_Imersion: string;
  Os_Cl_Imersion: string;
  Od_Cl_Contact: string;
  Os_Cl_Contact: string;
  Check_Od_T_Ple: string;
  Check_Os_T_Ple: string;
  Check_Od_Sys_M: string;
  Check_Os_Sys_M: string;
  Check_Od_Sys_T: string;
  Check_Os_Sys_T: string;
  Od_Asqelio_Iol_Master: string;
  Os_Asqelio_Iol_Master: string;
  Check_Od_Asqelio: string;
  Check_Os_Asqelio: string;
  Od_Asqelio_Imersion: string;
  Os_Asqelio_Imersion: string;
  Od_Asqelio_Contact: string;
  Os_Asqelio_Contact: string;
  Od_Re_01_Iol_Master: string;
  Os_Re_01_Iol_Master: string;
  Check_Od_Re_01: string;
  Check_Os_Re_01: string;
  Od_Re_01_Imersion: string;
  Os_Re_01_Imersion: string;
  Od_Re_01_Contact: string;
  Os_Re_01_Contact: string;
  Check_Od_Rp_11: string;
  Check_Os_Rp_11: string;
  Check_Od_Rp_12: string;
  Check_Os_Rp_12: string;
  Od_Ra_25_Iol_Master: string;
  Os_Ra_25_Iol_Master: string;
  Check_Od_Ra_25: string;
  Check_Os_Ra_25: string;
  Od_Ra_25_Imersion: string;
  Os_Ra_25_Imersion: string;
  Od_Ra_25_Contact: string;
  Os_Ra_25_Contact: string;
  Check_Od_Soft_HD_PLUS: string;
  Check_Os_Soft_HD_PLUS: string;
  Check_Od_Soft_HD: string;
  Check_Os_Soft_HD: string;
  Check_Od_I_Pure: string;
  Check_Os_I_Pure: string;
  Od_Lenstec_Sbl_Iol_Master: string;
  Os_Lenstec_Sbl_Iol_Master: string;
  Check_Od_Lenstec_Sbl: string;
  Check_Os_Lenstec_Sbl: string;
  Od_Lenstec_Sbl_Imersion: string;
  Os_Lenstec_Sbl_Imersion: string;
  Od_Lenstec_Sbl_Contact: string;
  Os_Lenstec_Sbl_Contact: string;
  Od_Ct_Asphina_409mp_Iol_Master: string;
  Os_Ct_Asphina_409mp_Iol_Master: string;
  Check_Od_Ct_Asphina_409mp: string;
  Check_Os_Ct_Asphina_409mp: string;
  Od_Ct_Asphina_409mp_Imersion: string;
  Os_Ct_Asphina_409mp_Imersion: string;
  Od_Ct_Asphina_409mp_Contact: string;
  Os_Ct_Asphina_409mp_Contact: string;
  Od_Nano_Iol_Master: string;
  Os_Nano_Iol_Master: string;
  Check_Od_Nano: string;
  Check_Os_Nano: string;
  Od_Nano_Imersion: string;
  Os_Nano_Imersion: string;
  Od_Nano_Contact: string;
  Os_Nano_Contact: string;
  Od_Oc_Ls_30_Iol_Master: string;
  Check_Od_Oc_Ls_30: string;
  Check_Os_Oc_Ls_30: string;
  Od_Oc_Ls_30_Imersion: string;
  Od_Oc_Ls_30_Contact: string;
  Od_Oc_Ls_15_Iol_Master: string;
  Check_Od_Oc_Ls_15: string;
  Check_Os_Oc_Ls_15: string;
  Od_Oc_Ls_15_Imersion: string;
  Od_Oc_Ls_15_Contact: string;
  Check_Od_Oc_Ls: string;
  Check_Os_Oc_Ls: string;
  Check_Od_Lentis_L313_Monofocal: string;
  Check_Os_Lentis_L313_Monofocal: string;
  Check_Od_Nano_fold: string;
  Check_Os_Nano_fold: string;
  Check_Od_B_Lomb_Ao: string;
  Check_Os_B_Lomb_Ao: string;
  Check_Od_B_Lomb_Ao_M160: string;
  Check_Os_B_Lomb_Ao_M160: string;
  Check_Od_Innova_Aspheric: string;
  Check_Os_Innova_Aspheric: string;
  Check_Od_C_Flex: string;
  Check_Os_C_Flex: string;
  Check_Od_Lentis_Mplus_Comfort: string;
  Check_Os_Lentis_Mplus_Comfort: string;
  Check_Od_Lentis_Mplus_Comfort_Toric: string;
  Check_Os_Lentis_Mplus_Comfort_Toric: string;
  Check_Od_At_Lisa: string;
  Check_Os_At_Lisa: string;
  Check_Od_Lentis_T_Plus: string;
  Check_Os_Lentis_T_Plus: string;
  Od_At_Lisa_Tri_839mp_Iol_Master: string;
  Os_At_Lisa_Tri_839mp_Iol_Master: string;
  Check_Od_At_Lisa_Tri_839mp: string;
  Check_Os_At_Lisa_Tri_839mp: string;
  Od_At_Lisa_Tri_839mp_Imersion: string;
  Os_At_Lisa_Tri_839mp_Imersion: string;
  Od_At_Lisa_Tri_839mp_Contact: string;
  Os_At_Lisa_Tri_839mp_Contact: string;
  Check_Od_Revive: string;
  Check_Os_Revive: string;
  Check_Od_Lucidis: string;
  Check_Os_Lucidis: string;
  Check_Od_RF_31_PL: string;
  Check_Os_RF_31_PL: string;
  Check_Od_RF_22_L: string;
  Check_Os_RF_22_L: string;
  Od_Lucidis_Iol_Master: string;
  Os_Lucidis_Iol_Master: string;
  Od_Lucidis_Imersion: string;
  Os_Lucidis_Imersion: string;
  Od_Lucidis_Contact: string;
  Os_Lucidis_Contact: string;
  Os_Oc_Ls_30_Iol_Master: string;
  Os_Oc_Ls_30_Imersion: string;
  Os_Oc_Ls_30_Contact: string;
  Od_Oc_Ls_Iol_Master: string;
  Os_Oc_Ls_Iol_Master: string;
  Od_Oc_Ls_Imersion: string;
  Os_Oc_Ls_Imersion: string;
  Od_Oc_Ls_Contact: string;
  Os_Oc_Ls_Contact: string;
  Os_Oc_Ls_15_Iol_Master: string;
  Os_Oc_Ls_15_Imersion: string;
  Os_Oc_Ls_15_Contact: string;
  Od_RF_31_PL_Iol_Master: string;
  Os_RF_31_PL_Iol_Master: string;
  Od_RF_31_PL_Imersion: string;
  Os_RF_31_PL_Imersion: string;
  Od_RF_31_PL_Contact: string;
  Os_RF_31_PL_Contact: string;
  Od_RF_22_L_Iol_Master: string;
  Os_RF_22_L_Iol_Master: string;
  Od_RF_22_L_Imersion: string;
  Os_RF_22_L_Imersion: string;
  Od_RF_22_L_Contact: string;
  Os_RF_22_L_Contact: string;
  ID_Dokter_Pemeriksa: string;
  Os_Innova_Aspheric_Iol_Master: string;
  Os_Innova_Aspheric_Imersion: string;
  Os_Innova_Aspheric_Contact: string;
  Os_C_Flex_Iol_Master: string;
  Os_C_Flex_Imersion: string;
  Os_C_Flex_Contact: string;
  Os_Lentis_Mplus_Comfort_Iol_Master: string;
  Os_Lentis_Mplus_Comfort_Imersion: string;
  Os_Lentis_Mplus_Comfort_Contact: string;
  Nama: string;
  Od_T_Ple_Iol_Master: string;
  Od_T_Ple_Imersion: string;
  Od_T_Ple_Contact: string;
  Od_Sys_M_Iol_Master: string;
  Od_Sys_M_Imersion: string;
  Od_Sys_M_Contact: string;
  Od_Sys_T_Iol_Master: string;
  Od_Sys_T_Imersion: string;
  Od_Sys_T_Contact: string;
  Od_Rp_11_Iol_Master: string;
  Od_Rp_11_Imersion: string;
  Od_Rp_11_Contact: string;
  Od_Rp_12_Iol_Master: string;
  Od_Rp_12_Imersion: string;
  Od_Rp_12_Contact: string;
  Od_Soft_HD_PLUS_Iol_Master: string;
  Od_Soft_HD_PLUS_Imersion: string;
  Od_Soft_HD_PLUS_Contact: string;
  Od_Soft_HD_Iol_Master: string;
  Od_Soft_HD_Imersion: string;
  Od_Soft_HD_Contact: string;
  Od_I_Pure_Iol_Master: string;
  Od_I_Pure_Imersion: string;
  Od_I_Pure_Contact: string;
  Od_Nano_fold_Iol_Master: string;
  Od_Nano_fold_Imersion: string;
  Od_Nano_fold_Contact: string;
  Od_B_Lomb_Ao_Iol_Master: string;
  Od_B_Lomb_Ao_Imersion: string;
  Od_B_Lomb_Ao_Contact: string;
  Od_B_Lomb_Ao_M160_Iol_Master: string;
  Od_B_Lomb_Ao_M160_Imersion: string;
  Od_B_Lomb_Ao_M160_Contact: string;
  Od_Innova_Aspheric_Iol_Master: string;
  Od_Innova_Aspheric_Imersion: string;
  Od_Innova_Aspheric_Contact: string;
  Od_C_Flex_Iol_Master: string;
  Od_C_Flex_Imersion: string;
  Od_C_Flex_Contact: string;
  Od_Lentis_Mplus_Comfort_Iol_Master: string;
  Od_Lentis_Mplus_Comfort_Imersion: string;
  Od_Lentis_Mplus_Comfort_Contact: string;
  Od_Lentis_Mplus_Comfort_Toric_Iol_Master: string;
  Od_Lentis_Mplus_Comfort_Toric_Imersion: string;
  Od_Lentis_Mplus_Comfort_Toric_Contact: string;
  Od_Lentis_T_Plus_Iol_Master: string;
  Od_Lentis_T_Plus_Imersion: string;
  Od_Lentis_T_Plus_Contact: string;
  Od_Revive_Iol_Master: string;
  Od_Revive_Imersion: string;
  Od_Revive_Contact: string;
  Od_Lentis_L313_Monofocal_Iol_Master: string;
  Od_Lentis_L313_Monofocal_Imersion: string;
  Od_Lentis_L313_Monofocal_Contact: string;
  Os_T_Ple_Iol_Master: string;
  Os_T_Ple_Imersion: string;
  Os_T_Ple_Contact: string;
  Os_Sys_M_Iol_Master: string;
  Os_Sys_M_Imersion: string;
  Os_Sys_M_Contact: string;
  Os_Sys_T_Iol_Master: string;
  Os_Sys_T_Imersion: string;
  Os_Sys_T_Contact: string;
  Os_Rp_11_Iol_Master: string;
  Os_Rp_11_Imersion: string;
  Os_Rp_11_Contact: string;
  Os_Rp_12_Iol_Master: string;
  Os_Rp_12_Imersion: string;
  Os_Rp_12_Contact: string;
  Os_Soft_HD_PLUS_Iol_Master: string;
  Os_Soft_HD_PLUS_Imersion: string;
  Os_Soft_HD_PLUS_Contact: string;
  Os_Soft_HD_Iol_Master: string;
  Os_Soft_HD_Imersion: string;
  Os_Soft_HD_Contact: string;
  Os_I_Pure_Iol_Master: string;
  Os_I_Pure_Imersion: string;
  Os_I_Pure_Contact: string;
  Os_Lentis_L313_Monofocal_Iol_Master: string;
  Os_Lentis_L313_Monofocal_Imersion: string;
  Os_Lentis_L313_Monofocal_Contact: string;
  Os_Nano_fold_Iol_Master: string;
  Os_Nano_fold_Imersion: string;
  Os_Nano_fold_Contact: string;
  Os_B_Lomb_Ao_Iol_Master: string;
  Os_B_Lomb_Ao_Imersion: string;
  Os_B_Lomb_Ao_Contact: string;
  Os_B_Lomb_Ao_M160_Iol_Master: string;
  Os_B_Lomb_Ao_M160_Imersion: string;
  Os_B_Lomb_Ao_M160_Contact: string;
  Os_Lentis_Mplus_Comfort_Toric_Iol_Master: string;
  Os_Lentis_Mplus_Comfort_Toric_Imersion: string;
  Os_Lentis_Mplus_Comfort_Toric_Contact: string;
  Os_Lentis_T_Plus_Iol_Master: string;
  Os_Lentis_T_Plus_Imersion: string;
  Os_Lentis_T_Plus_Contact: string;
  Os_Revive_Iol_Master: string;
  Os_Revive_Imersion: string;
  Os_Revive_Contact: string;
  OD_Mata_Dioperasi: string;
  OS_Mata_Dioperasi: string;
  PDF?: string;
}

export class BiometricModel {
  ID: string;
  EMR_ID: string;
  Od_K1: string;
  Od_K2: string;
  Od_Acd: string;
  Os_K1: string;
  Os_K2: string;
  Os_Acd: string;
  Nama: string;
  Dokter_Pemeriksa_Nama: string;
  Dokter_Pemeriksa_Id: string;
  Perawat_Pemeriksa_Nama: string;
  Perawat_Pemeriksa_Id: string;
  ID_Perawat: string;
  TTD_Perawat: string;
  Catatan: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  TTD_Tanggal: string;
  TTD_Dokter_Pemeriksa: string;
  Nama_Dokter_Pemeriksa: string;
  Updated_At: string;
  Updated_By: string;
  Od_Axl_Iol_Master: string;
  Os_Axl_Iol_Master: string;
  Check_Od_Axl: string;
  Check_Os_Axl: string;
  Od_Axl_Imersion: string;
  Os_Axl_Imersion: string;
  Od_Axl_Contact: string;
  Os_Axl_Contact: string;
  Od_Fold_Asp_Iol_Master: string;
  Os_Fold_Asp_Iol_Master: string;
  Check_Od_Fold_Asp: string;
  Check_Os_Fold_Asp: string;
  Od_Fold_Asp_Imersion: string;
  Os_Fold_Asp_Imersion: string;
  Od_Fold_Asp_Contact: string;
  Os_Fold_Asp_Contact: string;
  Od_Fold_Sp_Iol_Master: string;
  Os_Fold_Sp_Iol_Master: string;
  Check_Od_Fold_Sp: string;
  Check_Os_Fold_Sp: string;
  Od_Fold_Sp_Imersion: string;
  Os_Fold_Sp_Imersion: string;
  Od_Fold_Sp_Contact: string;
  Os_Fold_Sp_Contact: string;
  Od_Ca_Iol_Master: string;
  Os_Ca_Iol_Master: string;
  Check_Od_Ca: string;
  Check_Os_Ca: string;
  Od_Ca_Imersion: string;
  Os_Ca_Imersion: string;
  Od_Ca_Contact: string;
  Os_Ca_Contact: string;
  Od_Cl_Iol_Master: string;
  Os_Cl_Iol_Master: string;
  Check_Od_Cl: string;
  Check_Os_Cl: string;
  Od_Cl_Imersion: string;
  Os_Cl_Imersion: string;
  Od_Cl_Contact: string;
  Os_Cl_Contact: string;
  Check_Od_T_Ple: string;
  Check_Os_T_Ple: string;
  Check_Od_Sys_M: string;
  Check_Os_Sys_M: string;
  Check_Od_Sys_T: string;
  Check_Os_Sys_T: string;
  Od_Asqelio_Iol_Master: string;
  Os_Asqelio_Iol_Master: string;
  Check_Od_Asqelio: string;
  Check_Os_Asqelio: string;
  Od_Asqelio_Imersion: string;
  Os_Asqelio_Imersion: string;
  Od_Asqelio_Contact: string;
  Os_Asqelio_Contact: string;
  Od_Re_01_Iol_Master: string;
  Os_Re_01_Iol_Master: string;
  Check_Od_Re_01: string;
  Check_Os_Re_01: string;
  Od_Re_01_Imersion: string;
  Os_Re_01_Imersion: string;
  Od_Re_01_Contact: string;
  Os_Re_01_Contact: string;
  Check_Od_Rp_11: string;
  Check_Os_Rp_11: string;
  Check_Od_Rp_12: string;
  Check_Os_Rp_12: string;
  Od_Ra_25_Iol_Master: string;
  Os_Ra_25_Iol_Master: string;
  Check_Od_Ra_25: string;
  Check_Os_Ra_25: string;
  Od_Ra_25_Imersion: string;
  Os_Ra_25_Imersion: string;
  Od_Ra_25_Contact: string;
  Os_Ra_25_Contact: string;
  Check_Od_Soft_HD_PLUS: string;
  Check_Os_Soft_HD_PLUS: string;
  Check_Od_Soft_HD: string;
  Check_Os_Soft_HD: string;
  Check_Od_I_Pure: string;
  Check_Os_I_Pure: string;
  Od_Lenstec_Sbl_Iol_Master: string;
  Os_Lenstec_Sbl_Iol_Master: string;
  Check_Od_Lenstec_Sbl: string;
  Check_Os_Lenstec_Sbl: string;
  Od_Lenstec_Sbl_Imersion: string;
  Os_Lenstec_Sbl_Imersion: string;
  Od_Lenstec_Sbl_Contact: string;
  Os_Lenstec_Sbl_Contact: string;
  Od_Ct_Asphina_409mp_Iol_Master: string;
  Os_Ct_Asphina_409mp_Iol_Master: string;
  Check_Od_Ct_Asphina_409mp: string;
  Check_Os_Ct_Asphina_409mp: string;
  Od_Ct_Asphina_409mp_Imersion: string;
  Os_Ct_Asphina_409mp_Imersion: string;
  Od_Ct_Asphina_409mp_Contact: string;
  Os_Ct_Asphina_409mp_Contact: string;
  Od_Nano_Iol_Master: string;
  Os_Nano_Iol_Master: string;
  Check_Od_Nano: string;
  Check_Os_Nano: string;
  Od_Nano_Imersion: string;
  Os_Nano_Imersion: string;
  Od_Nano_Contact: string;
  Os_Nano_Contact: string;
  Od_Oc_Ls_30_Iol_Master: string;
  Check_Od_Oc_Ls_30: string;
  Check_Os_Oc_Ls_30: string;
  Od_Oc_Ls_30_Imersion: string;
  Od_Oc_Ls_30_Contact: string;
  Od_Oc_Ls_15_Iol_Master: string;
  Check_Od_Oc_Ls_15: string;
  Check_Os_Oc_Ls_15: string;
  Od_Oc_Ls_15_Imersion: string;
  Od_Oc_Ls_15_Contact: string;
  Check_Od_Oc_Ls: string;
  Check_Os_Oc_Ls: string;
  Check_Od_Lentis_L313_Monofocal: string;
  Check_Os_Lentis_L313_Monofocal: string;
  Check_Od_Nano_fold: string;
  Check_Os_Nano_fold: string;
  Check_Od_B_Lomb_Ao: string;
  Check_Os_B_Lomb_Ao: string;
  Check_Od_B_Lomb_Ao_M160: string;
  Check_Os_B_Lomb_Ao_M160: string;
  Check_Od_Innova_Aspheric: string;
  Check_Os_Innova_Aspheric: string;
  Check_Od_C_Flex: string;
  Check_Os_C_Flex: string;
  Check_Od_Lentis_Mplus_Comfort: string;
  Check_Os_Lentis_Mplus_Comfort: string;
  Check_Od_Lentis_Mplus_Comfort_Toric: string;
  Check_Os_Lentis_Mplus_Comfort_Toric: string;
  Check_Od_At_Lisa: string;
  Check_Os_At_Lisa: string;
  Check_Od_Lentis_T_Plus: string;
  Check_Os_Lentis_T_Plus: string;
  Od_At_Lisa_Tri_839mp_Iol_Master: string;
  Os_At_Lisa_Tri_839mp_Iol_Master: string;
  Check_Od_At_Lisa_Tri_839mp: string;
  Check_Os_At_Lisa_Tri_839mp: string;
  Od_At_Lisa_Tri_839mp_Imersion: string;
  Os_At_Lisa_Tri_839mp_Imersion: string;
  Od_At_Lisa_Tri_839mp_Contact: string;
  Os_At_Lisa_Tri_839mp_Contact: string;
  Check_Od_Revive: string;
  Check_Os_Revive: string;
  Check_Od_Lucidis: string;
  Check_Os_Lucidis: string;
  Check_Od_RF_31_PL: string;
  Check_Os_RF_31_PL: string;
  Check_Od_RF_22_L: string;
  Check_Os_RF_22_L: string;
  Od_Lucidis_Iol_Master: string;
  Os_Lucidis_Iol_Master: string;
  Od_Lucidis_Imersion: string;
  Os_Lucidis_Imersion: string;
  Od_Lucidis_Contact: string;
  Os_Lucidis_Contact: string;
  Os_Oc_Ls_30_Iol_Master: string;
  Os_Oc_Ls_30_Imersion: string;
  Os_Oc_Ls_30_Contact: string;
  Od_Oc_Ls_Iol_Master: string;
  Os_Oc_Ls_Iol_Master: string;
  Od_Oc_Ls_Imersion: string;
  Os_Oc_Ls_Imersion: string;
  Od_Oc_Ls_Contact: string;
  Os_Oc_Ls_Contact: string;
  Os_Oc_Ls_15_Iol_Master: string;
  Os_Oc_Ls_15_Imersion: string;
  Os_Oc_Ls_15_Contact: string;
  Od_RF_31_PL_Iol_Master: string;
  Os_RF_31_PL_Iol_Master: string;
  Od_RF_31_PL_Imersion: string;
  Os_RF_31_PL_Imersion: string;
  Od_RF_31_PL_Contact: string;
  Os_RF_31_PL_Contact: string;
  Od_RF_22_L_Iol_Master: string;
  Os_RF_22_L_Iol_Master: string;
  Od_RF_22_L_Imersion: string;
  Os_RF_22_L_Imersion: string;
  Od_RF_22_L_Contact: string;
  Os_RF_22_L_Contact: string;
  ID_Dokter_Pemeriksa: string;
  Os_Innova_Aspheric_Iol_Master: string;
  Os_Innova_Aspheric_Imersion: string;
  Os_Innova_Aspheric_Contact: string;
  Os_C_Flex_Iol_Master: string;
  Os_C_Flex_Imersion: string;
  Os_C_Flex_Contact: string;
  Os_Lentis_Mplus_Comfort_Iol_Master: string;
  Os_Lentis_Mplus_Comfort_Imersion: string;
  Os_Lentis_Mplus_Comfort_Contact: string;
  Od_T_Ple_Iol_Master: string;
  Od_T_Ple_Imersion: string;
  Od_T_Ple_Contact: string;
  Od_Sys_M_Iol_Master: string;
  Od_Sys_M_Imersion: string;
  Od_Sys_M_Contact: string;
  Od_Sys_T_Iol_Master: string;
  Od_Sys_T_Imersion: string;
  Od_Sys_T_Contact: string;
  Od_Rp_11_Iol_Master: string;
  Od_Rp_11_Imersion: string;
  Od_Rp_11_Contact: string;
  Od_Rp_12_Iol_Master: string;
  Od_Rp_12_Imersion: string;
  Od_Rp_12_Contact: string;
  Od_Soft_HD_PLUS_Iol_Master: string;
  Od_Soft_HD_PLUS_Imersion: string;
  Od_Soft_HD_PLUS_Contact: string;
  Od_Soft_HD_Iol_Master: string;
  Od_Soft_HD_Imersion: string;
  Od_Soft_HD_Contact: string;
  Od_I_Pure_Iol_Master: string;
  Od_I_Pure_Imersion: string;
  Od_I_Pure_Contact: string;
  Od_Nano_fold_Iol_Master: string;
  Od_Nano_fold_Imersion: string;
  Od_Nano_fold_Contact: string;
  Od_B_Lomb_Ao_Iol_Master: string;
  Od_B_Lomb_Ao_Imersion: string;
  Od_B_Lomb_Ao_Contact: string;
  Od_B_Lomb_Ao_M160_Iol_Master: string;
  Od_B_Lomb_Ao_M160_Imersion: string;
  Od_B_Lomb_Ao_M160_Contact: string;
  Od_Innova_Aspheric_Iol_Master: string;
  Od_Innova_Aspheric_Imersion: string;
  Od_Innova_Aspheric_Contact: string;
  Od_C_Flex_Iol_Master: string;
  Od_C_Flex_Imersion: string;
  Od_C_Flex_Contact: string;
  Od_Lentis_Mplus_Comfort_Iol_Master: string;
  Od_Lentis_Mplus_Comfort_Imersion: string;
  Od_Lentis_Mplus_Comfort_Contact: string;
  Od_Lentis_Mplus_Comfort_Toric_Iol_Master: string;
  Od_Lentis_Mplus_Comfort_Toric_Imersion: string;
  Od_Lentis_Mplus_Comfort_Toric_Contact: string;
  Od_Lentis_T_Plus_Iol_Master: string;
  Od_Lentis_T_Plus_Imersion: string;
  Od_Lentis_T_Plus_Contact: string;
  Od_Revive_Iol_Master: string;
  Od_Revive_Imersion: string;
  Od_Revive_Contact: string;
  Od_Lentis_L313_Monofocal_Iol_Master: string;
  Od_Lentis_L313_Monofocal_Imersion: string;
  Od_Lentis_L313_Monofocal_Contact: string;
  Os_T_Ple_Iol_Master: string;
  Os_T_Ple_Imersion: string;
  Os_T_Ple_Contact: string;
  Os_Sys_M_Iol_Master: string;
  Os_Sys_M_Imersion: string;
  Os_Sys_M_Contact: string;
  Os_Sys_T_Iol_Master: string;
  Os_Sys_T_Imersion: string;
  Os_Sys_T_Contact: string;
  Os_Rp_11_Iol_Master: string;
  Os_Rp_11_Imersion: string;
  Os_Rp_11_Contact: string;
  Os_Rp_12_Iol_Master: string;
  Os_Rp_12_Imersion: string;
  Os_Rp_12_Contact: string;
  Os_Soft_HD_PLUS_Iol_Master: string;
  Os_Soft_HD_PLUS_Imersion: string;
  Os_Soft_HD_PLUS_Contact: string;
  Os_Soft_HD_Iol_Master: string;
  Os_Soft_HD_Imersion: string;
  Os_Soft_HD_Contact: string;
  Os_I_Pure_Iol_Master: string;
  Os_I_Pure_Imersion: string;
  Os_I_Pure_Contact: string;
  Os_Lentis_L313_Monofocal_Iol_Master: string;
  Os_Lentis_L313_Monofocal_Imersion: string;
  Os_Lentis_L313_Monofocal_Contact: string;
  Os_Nano_fold_Iol_Master: string;
  Os_Nano_fold_Imersion: string;
  Os_Nano_fold_Contact: string;
  Os_B_Lomb_Ao_Iol_Master: string;
  Os_B_Lomb_Ao_Imersion: string;
  Os_B_Lomb_Ao_Contact: string;
  Os_B_Lomb_Ao_M160_Iol_Master: string;
  Os_B_Lomb_Ao_M160_Imersion: string;
  Os_B_Lomb_Ao_M160_Contact: string;
  Os_Lentis_Mplus_Comfort_Toric_Iol_Master: string;
  Os_Lentis_Mplus_Comfort_Toric_Imersion: string;
  Os_Lentis_Mplus_Comfort_Toric_Contact: string;
  Os_Lentis_T_Plus_Iol_Master: string;
  Os_Lentis_T_Plus_Imersion: string;
  Os_Lentis_T_Plus_Contact: string;
  Os_Revive_Iol_Master: string;
  Os_Revive_Imersion: string;
  Os_Revive_Contact: string;
  OD_Mata_Dioperasi: string;
  OS_Mata_Dioperasi: string;
  PDF?: string;

  constructor(request: IBiometricModel) {
    this.ID = request.ID;
    this.EMR_ID = request.EMR_ID;
    this.Od_K1 = request.Od_K1;
    this.Od_K2 = request.Od_K2;
    this.Od_Acd = request.Od_Acd;
    this.Os_K1 = request.Os_K1;
    this.Os_K2 = request.Os_K2;
    this.Os_Acd = request.Os_Acd;
    this.Nama = request.Nama;
    this.Dokter_Pemeriksa_Nama = request.Dokter_Pemeriksa_Nama;
    this.Dokter_Pemeriksa_Id = request.Dokter_Pemeriksa_Id;
    this.Perawat_Pemeriksa_Nama = request.Perawat_Pemeriksa_Nama;
    this.Perawat_Pemeriksa_Id = request.Perawat_Pemeriksa_Id;
    this.ID_Perawat = request.ID_Perawat;
    this.TTD_Perawat = request.TTD_Perawat;
    this.Catatan = request.Catatan;
    this.ID_Petugas = request.ID_Petugas;
    this.Nama_Petugas = request.Nama_Petugas;
    this.TTD_Tanggal = request.TTD_Tanggal;
    this.TTD_Dokter_Pemeriksa = request.TTD_Dokter_Pemeriksa;
    this.Nama_Dokter_Pemeriksa = request.Nama_Dokter_Pemeriksa;
    this.Updated_At = request.Updated_At;
    this.Updated_By = request.Updated_By;
    this.Od_Axl_Iol_Master = request.Od_Axl_Iol_Master;
    this.Os_Axl_Iol_Master = request.Os_Axl_Iol_Master;
    this.Check_Od_Axl = request.Check_Od_Axl;
    this.Check_Os_Axl = request.Check_Os_Axl;
    this.Od_Axl_Imersion = request.Od_Axl_Imersion;
    this.Os_Axl_Imersion = request.Os_Axl_Imersion;
    this.Od_Axl_Contact = request.Od_Axl_Contact;
    this.Os_Axl_Contact = request.Os_Axl_Contact;
    this.Od_Fold_Asp_Iol_Master = request.Od_Fold_Asp_Iol_Master;
    this.Os_Fold_Asp_Iol_Master = request.Os_Fold_Asp_Iol_Master;
    this.Check_Od_Fold_Asp = request.Check_Od_Fold_Asp;
    this.Check_Os_Fold_Asp = request.Check_Os_Fold_Asp;
    this.Od_Fold_Asp_Imersion = request.Od_Fold_Asp_Imersion;
    this.Os_Fold_Asp_Imersion = request.Os_Fold_Asp_Imersion;
    this.Od_Fold_Asp_Contact = request.Od_Fold_Asp_Contact;
    this.Os_Fold_Asp_Contact = request.Os_Fold_Asp_Contact;
    this.Od_Fold_Sp_Iol_Master = request.Od_Fold_Sp_Iol_Master;
    this.Os_Fold_Sp_Iol_Master = request.Os_Fold_Sp_Iol_Master;
    this.Check_Od_Fold_Sp = request.Check_Od_Fold_Sp;
    this.Check_Os_Fold_Sp = request.Check_Os_Fold_Sp;
    this.Od_Fold_Sp_Imersion = request.Od_Fold_Sp_Imersion;
    this.Os_Fold_Sp_Imersion = request.Os_Fold_Sp_Imersion;
    this.Od_Fold_Sp_Contact = request.Od_Fold_Sp_Contact;
    this.Os_Fold_Sp_Contact = request.Os_Fold_Sp_Contact;
    this.Od_Ca_Iol_Master = request.Od_Ca_Iol_Master;
    this.Os_Ca_Iol_Master = request.Os_Ca_Iol_Master;
    this.Check_Od_Ca = request.Check_Od_Ca;
    this.Check_Os_Ca = request.Check_Os_Ca;
    this.Od_Ca_Imersion = request.Od_Ca_Imersion;
    this.Os_Ca_Imersion = request.Os_Ca_Imersion;
    this.Od_Ca_Contact = request.Od_Ca_Contact;
    this.Os_Ca_Contact = request.Os_Ca_Contact;
    this.Od_Cl_Iol_Master = request.Od_Cl_Iol_Master;
    this.Os_Cl_Iol_Master = request.Os_Cl_Iol_Master;
    this.Check_Od_Cl = request.Check_Od_Cl;
    this.Check_Os_Cl = request.Check_Os_Cl;
    this.Od_Cl_Imersion = request.Od_Cl_Imersion;
    this.Os_Cl_Imersion = request.Os_Cl_Imersion;
    this.Od_Cl_Contact = request.Od_Cl_Contact;
    this.Os_Cl_Contact = request.Os_Cl_Contact;
    this.Check_Od_T_Ple = request.Check_Od_T_Ple;
    this.Check_Os_T_Ple = request.Check_Os_T_Ple;
    this.Check_Od_Sys_M = request.Check_Od_Sys_M;
    this.Check_Os_Sys_M = request.Check_Os_Sys_M;
    this.Check_Od_Sys_T = request.Check_Od_Sys_T;
    this.Check_Os_Sys_T = request.Check_Os_Sys_T;
    this.Od_Asqelio_Iol_Master = request.Od_Asqelio_Iol_Master;
    this.Os_Asqelio_Iol_Master = request.Os_Asqelio_Iol_Master;
    this.Check_Od_Asqelio = request.Check_Od_Asqelio;
    this.Check_Os_Asqelio = request.Check_Os_Asqelio;
    this.Od_Asqelio_Imersion = request.Od_Asqelio_Imersion;
    this.Os_Asqelio_Imersion = request.Os_Asqelio_Imersion;
    this.Od_Asqelio_Contact = request.Od_Asqelio_Contact;
    this.Os_Asqelio_Contact = request.Os_Asqelio_Contact;
    this.Od_Re_01_Iol_Master = request.Od_Re_01_Iol_Master;
    this.Os_Re_01_Iol_Master = request.Os_Re_01_Iol_Master;
    this.Check_Od_Re_01 = request.Check_Od_Re_01;
    this.Check_Os_Re_01 = request.Check_Os_Re_01;
    this.Od_Re_01_Imersion = request.Od_Re_01_Imersion;
    this.Os_Re_01_Imersion = request.Os_Re_01_Imersion;
    this.Od_Re_01_Contact = request.Od_Re_01_Contact;
    this.Os_Re_01_Contact = request.Os_Re_01_Contact;
    this.Check_Od_Rp_11 = request.Check_Od_Rp_11;
    this.Check_Os_Rp_11 = request.Check_Os_Rp_11;
    this.Check_Od_Rp_12 = request.Check_Od_Rp_12;
    this.Check_Os_Rp_12 = request.Check_Os_Rp_12;
    this.Od_Ra_25_Iol_Master = request.Od_Ra_25_Iol_Master;
    this.Os_Ra_25_Iol_Master = request.Os_Ra_25_Iol_Master;
    this.Check_Od_Ra_25 = request.Check_Od_Ra_25;
    this.Check_Os_Ra_25 = request.Check_Os_Ra_25;
    this.Od_Ra_25_Imersion = request.Od_Ra_25_Imersion;
    this.Os_Ra_25_Imersion = request.Os_Ra_25_Imersion;
    this.Od_Ra_25_Contact = request.Od_Ra_25_Contact;
    this.Os_Ra_25_Contact = request.Os_Ra_25_Contact;
    this.Check_Od_Soft_HD_PLUS = request.Check_Od_Soft_HD_PLUS;
    this.Check_Os_Soft_HD_PLUS = request.Check_Os_Soft_HD_PLUS;
    this.Check_Od_Soft_HD = request.Check_Od_Soft_HD;
    this.Check_Os_Soft_HD = request.Check_Os_Soft_HD;
    this.Check_Od_I_Pure = request.Check_Od_I_Pure;
    this.Check_Os_I_Pure = request.Check_Os_I_Pure;
    this.Od_Lenstec_Sbl_Iol_Master = request.Od_Lenstec_Sbl_Iol_Master;
    this.Os_Lenstec_Sbl_Iol_Master = request.Os_Lenstec_Sbl_Iol_Master;
    this.Check_Od_Lenstec_Sbl = request.Check_Od_Lenstec_Sbl;
    this.Check_Os_Lenstec_Sbl = request.Check_Os_Lenstec_Sbl;
    this.Od_Lenstec_Sbl_Imersion = request.Od_Lenstec_Sbl_Imersion;
    this.Os_Lenstec_Sbl_Imersion = request.Os_Lenstec_Sbl_Imersion;
    this.Od_Lenstec_Sbl_Contact = request.Od_Lenstec_Sbl_Contact;
    this.Os_Lenstec_Sbl_Contact = request.Os_Lenstec_Sbl_Contact;
    this.Od_Ct_Asphina_409mp_Iol_Master = request.Od_Ct_Asphina_409mp_Iol_Master;
    this.Os_Ct_Asphina_409mp_Iol_Master = request.Os_Ct_Asphina_409mp_Iol_Master;
    this.Check_Od_Ct_Asphina_409mp = request.Check_Od_Ct_Asphina_409mp;
    this.Check_Os_Ct_Asphina_409mp = request.Check_Os_Ct_Asphina_409mp;
    this.Od_Ct_Asphina_409mp_Imersion = request.Od_Ct_Asphina_409mp_Imersion;
    this.Os_Ct_Asphina_409mp_Imersion = request.Os_Ct_Asphina_409mp_Imersion;
    this.Od_Ct_Asphina_409mp_Contact = request.Od_Ct_Asphina_409mp_Contact;
    this.Os_Ct_Asphina_409mp_Contact = request.Os_Ct_Asphina_409mp_Contact;
    this.Od_Nano_Iol_Master = request.Od_Nano_Iol_Master;
    this.Os_Nano_Iol_Master = request.Os_Nano_Iol_Master;
    this.Check_Od_Nano = request.Check_Od_Nano;
    this.Check_Os_Nano = request.Check_Os_Nano;
    this.Od_Nano_Imersion = request.Od_Nano_Imersion;
    this.Os_Nano_Imersion = request.Os_Nano_Imersion;
    this.Od_Nano_Contact = request.Od_Nano_Contact;
    this.Os_Nano_Contact = request.Os_Nano_Contact;
    this.Od_Oc_Ls_30_Iol_Master = request.Od_Oc_Ls_30_Iol_Master;
    this.Check_Od_Oc_Ls_30 = request.Check_Od_Oc_Ls_30;
    this.Check_Os_Oc_Ls_30 = request.Check_Os_Oc_Ls_30;
    this.Od_Oc_Ls_30_Imersion = request.Od_Oc_Ls_30_Imersion;
    this.Od_Oc_Ls_30_Contact = request.Od_Oc_Ls_30_Contact;
    this.Od_Oc_Ls_15_Iol_Master = request.Od_Oc_Ls_15_Iol_Master;
    this.Check_Od_Oc_Ls_15 = request.Check_Od_Oc_Ls_15;
    this.Check_Os_Oc_Ls_15 = request.Check_Os_Oc_Ls_15;
    this.Od_Oc_Ls_15_Imersion = request.Od_Oc_Ls_15_Imersion;
    this.Od_Oc_Ls_15_Contact = request.Od_Oc_Ls_15_Contact;
    this.Check_Od_Oc_Ls = request.Check_Od_Oc_Ls;
    this.Check_Os_Oc_Ls = request.Check_Os_Oc_Ls;
    this.Check_Od_Lentis_L313_Monofocal = request.Check_Od_Lentis_L313_Monofocal;
    this.Check_Os_Lentis_L313_Monofocal = request.Check_Os_Lentis_L313_Monofocal;
    this.Check_Od_Nano_fold = request.Check_Od_Nano_fold;
    this.Check_Os_Nano_fold = request.Check_Os_Nano_fold;
    this.Check_Od_B_Lomb_Ao = request.Check_Od_B_Lomb_Ao;
    this.Check_Os_B_Lomb_Ao = request.Check_Os_B_Lomb_Ao;
    this.Check_Od_B_Lomb_Ao_M160 = request.Check_Od_B_Lomb_Ao_M160;
    this.Check_Os_B_Lomb_Ao_M160 = request.Check_Os_B_Lomb_Ao_M160;
    this.Check_Od_Innova_Aspheric = request.Check_Od_Innova_Aspheric;
    this.Check_Os_Innova_Aspheric = request.Check_Os_Innova_Aspheric;
    this.Check_Od_C_Flex = request.Check_Od_C_Flex;
    this.Check_Os_C_Flex = request.Check_Os_C_Flex;
    this.Check_Od_Lentis_Mplus_Comfort = request.Check_Od_Lentis_Mplus_Comfort;
    this.Check_Os_Lentis_Mplus_Comfort = request.Check_Os_Lentis_Mplus_Comfort;
    this.Check_Od_Lentis_Mplus_Comfort_Toric = request.Check_Od_Lentis_Mplus_Comfort_Toric;
    this.Check_Os_Lentis_Mplus_Comfort_Toric = request.Check_Os_Lentis_Mplus_Comfort_Toric;
    this.Check_Od_At_Lisa = request.Check_Od_At_Lisa;
    this.Check_Os_At_Lisa = request.Check_Os_At_Lisa;
    this.Check_Od_Lentis_T_Plus = request.Check_Od_Lentis_T_Plus;
    this.Check_Os_Lentis_T_Plus = request.Check_Os_Lentis_T_Plus;
    this.Od_At_Lisa_Tri_839mp_Iol_Master = request.Od_At_Lisa_Tri_839mp_Iol_Master;
    this.Os_At_Lisa_Tri_839mp_Iol_Master = request.Os_At_Lisa_Tri_839mp_Iol_Master;
    this.Check_Od_At_Lisa_Tri_839mp = request.Check_Od_At_Lisa_Tri_839mp;
    this.Check_Os_At_Lisa_Tri_839mp = request.Check_Os_At_Lisa_Tri_839mp;
    this.Od_At_Lisa_Tri_839mp_Imersion = request.Od_At_Lisa_Tri_839mp_Imersion;
    this.Os_At_Lisa_Tri_839mp_Imersion = request.Os_At_Lisa_Tri_839mp_Imersion;
    this.Od_At_Lisa_Tri_839mp_Contact = request.Od_At_Lisa_Tri_839mp_Contact;
    this.Os_At_Lisa_Tri_839mp_Contact = request.Os_At_Lisa_Tri_839mp_Contact;
    this.Check_Od_Revive = request.Check_Od_Revive;
    this.Check_Os_Revive = request.Check_Os_Revive;
    this.Check_Od_Lucidis = request.Check_Od_Lucidis;
    this.Check_Os_Lucidis = request.Check_Os_Lucidis;
    this.Check_Od_RF_31_PL = request.Check_Od_RF_31_PL;
    this.Check_Os_RF_31_PL = request.Check_Os_RF_31_PL;
    this.Check_Od_RF_22_L = request.Check_Od_RF_22_L;
    this.Check_Os_RF_22_L = request.Check_Os_RF_22_L;
    this.Od_Lucidis_Iol_Master = request.Od_Lucidis_Iol_Master;
    this.Os_Lucidis_Iol_Master = request.Os_Lucidis_Iol_Master;
    this.Od_Lucidis_Imersion = request.Od_Lucidis_Imersion;
    this.Os_Lucidis_Imersion = request.Os_Lucidis_Imersion;
    this.Od_Lucidis_Contact = request.Od_Lucidis_Contact;
    this.Os_Lucidis_Contact = request.Os_Lucidis_Contact;
    this.Os_Oc_Ls_30_Iol_Master = request.Os_Oc_Ls_30_Iol_Master;
    this.Os_Oc_Ls_30_Imersion = request.Os_Oc_Ls_30_Imersion;
    this.Os_Oc_Ls_30_Contact = request.Os_Oc_Ls_30_Contact;
    this.Od_Oc_Ls_Iol_Master = request.Od_Oc_Ls_Iol_Master;
    this.Os_Oc_Ls_Iol_Master = request.Os_Oc_Ls_Iol_Master;
    this.Od_Oc_Ls_Imersion = request.Od_Oc_Ls_Imersion;
    this.Os_Oc_Ls_Imersion = request.Os_Oc_Ls_Imersion;
    this.Od_Oc_Ls_Contact = request.Od_Oc_Ls_Contact;
    this.Os_Oc_Ls_Contact = request.Os_Oc_Ls_Contact;
    this.Os_Oc_Ls_15_Iol_Master = request.Os_Oc_Ls_15_Iol_Master;
    this.Os_Oc_Ls_15_Imersion = request.Os_Oc_Ls_15_Imersion;
    this.Os_Oc_Ls_15_Contact = request.Os_Oc_Ls_15_Contact;
    this.Od_RF_31_PL_Iol_Master = request.Od_RF_31_PL_Iol_Master;
    this.Os_RF_31_PL_Iol_Master = request.Os_RF_31_PL_Iol_Master;
    this.Od_RF_31_PL_Imersion = request.Od_RF_31_PL_Imersion;
    this.Os_RF_31_PL_Imersion = request.Os_RF_31_PL_Imersion;
    this.Od_RF_31_PL_Contact = request.Od_RF_31_PL_Contact;
    this.Os_RF_31_PL_Contact = request.Os_RF_31_PL_Contact;
    this.Od_RF_22_L_Iol_Master = request.Od_RF_22_L_Iol_Master;
    this.Os_RF_22_L_Iol_Master = request.Os_RF_22_L_Iol_Master;
    this.Od_RF_22_L_Imersion = request.Od_RF_22_L_Imersion;
    this.Os_RF_22_L_Imersion = request.Os_RF_22_L_Imersion;
    this.Od_RF_22_L_Contact = request.Od_RF_22_L_Contact;
    this.Os_RF_22_L_Contact = request.Os_RF_22_L_Contact;
    this.ID_Dokter_Pemeriksa = request.ID_Dokter_Pemeriksa;
    this.Os_Innova_Aspheric_Iol_Master = request.Os_Innova_Aspheric_Iol_Master;
    this.Os_Innova_Aspheric_Imersion = request.Os_Innova_Aspheric_Imersion;
    this.Os_Innova_Aspheric_Contact = request.Os_Innova_Aspheric_Contact;
    this.Os_C_Flex_Iol_Master = request.Os_C_Flex_Iol_Master;
    this.Os_C_Flex_Imersion = request.Os_C_Flex_Imersion;
    this.Os_C_Flex_Contact = request.Os_C_Flex_Contact;
    this.Os_Lentis_Mplus_Comfort_Iol_Master = request.Os_Lentis_Mplus_Comfort_Iol_Master;
    this.Os_Lentis_Mplus_Comfort_Imersion = request.Os_Lentis_Mplus_Comfort_Imersion;
    this.Os_Lentis_Mplus_Comfort_Contact = request.Os_Lentis_Mplus_Comfort_Contact;
    this.Od_T_Ple_Iol_Master = request.Od_T_Ple_Iol_Master
    this.Od_T_Ple_Imersion = request.Od_T_Ple_Imersion
    this.Od_T_Ple_Contact = request.Od_T_Ple_Contact
    this.Od_Sys_M_Iol_Master = request.Od_Sys_M_Iol_Master
    this.Od_Sys_M_Imersion = request.Od_Sys_M_Imersion
    this.Od_Sys_M_Contact = request.Od_Sys_M_Contact
    this.Od_Sys_T_Iol_Master = request.Od_Sys_T_Iol_Master
    this.Od_Sys_T_Imersion = request.Od_Sys_T_Imersion
    this.Od_Sys_T_Contact = request.Od_Sys_T_Contact
    this.Od_Rp_11_Iol_Master = request.Od_Rp_11_Iol_Master
    this.Od_Rp_11_Imersion = request.Od_Rp_11_Imersion
    this.Od_Rp_11_Contact = request.Od_Rp_11_Contact
    this.Od_Rp_12_Iol_Master = request.Od_Rp_12_Iol_Master;
    this.Od_Rp_12_Imersion = request.Od_Rp_12_Imersion;
    this.Od_Rp_12_Contact = request.Od_Rp_12_Contact;
    this.Od_Soft_HD_PLUS_Iol_Master = request.Od_Soft_HD_PLUS_Iol_Master
    this.Od_Soft_HD_PLUS_Imersion = request.Od_Soft_HD_PLUS_Imersion
    this.Od_Soft_HD_PLUS_Contact = request.Od_Soft_HD_PLUS_Contact
    this.Od_Soft_HD_Iol_Master = request.Od_Soft_HD_Iol_Master
    this.Od_Soft_HD_Imersion = request.Od_Soft_HD_Imersion
    this.Od_Soft_HD_Contact = request.Od_Soft_HD_Contact
    this.Od_I_Pure_Iol_Master = request.Od_I_Pure_Iol_Master
    this.Od_I_Pure_Imersion = request.Od_I_Pure_Imersion
    this.Od_I_Pure_Contact = request.Od_I_Pure_Contact
    this.Od_Nano_fold_Iol_Master = request.Od_Nano_fold_Iol_Master
    this.Od_Nano_fold_Imersion = request.Od_Nano_fold_Imersion
    this.Od_Nano_fold_Contact = request.Od_Nano_fold_Contact
    this.Od_B_Lomb_Ao_Iol_Master = request.Od_B_Lomb_Ao_Iol_Master
    this.Od_B_Lomb_Ao_Imersion = request.Od_B_Lomb_Ao_Imersion
    this.Od_B_Lomb_Ao_Contact = request.Od_B_Lomb_Ao_Contact
    this.Od_B_Lomb_Ao_M160_Iol_Master = request.Od_B_Lomb_Ao_M160_Iol_Master
    this.Od_B_Lomb_Ao_M160_Imersion = request.Od_B_Lomb_Ao_M160_Imersion
    this.Od_B_Lomb_Ao_M160_Contact = request.Od_B_Lomb_Ao_M160_Contact
    this.Od_Innova_Aspheric_Iol_Master = request.Od_Innova_Aspheric_Iol_Master
    this.Od_Innova_Aspheric_Imersion = request.Od_Innova_Aspheric_Imersion
    this.Od_Innova_Aspheric_Contact = request.Od_Innova_Aspheric_Contact
    this.Od_C_Flex_Iol_Master = request.Od_C_Flex_Iol_Master
    this.Od_C_Flex_Imersion = request.Od_C_Flex_Imersion
    this.Od_C_Flex_Contact = request.Od_C_Flex_Contact
    this.Od_Lentis_Mplus_Comfort_Iol_Master = request.Od_Lentis_Mplus_Comfort_Iol_Master
    this.Od_Lentis_Mplus_Comfort_Imersion = request.Od_Lentis_Mplus_Comfort_Imersion
    this.Od_Lentis_Mplus_Comfort_Contact = request.Od_Lentis_Mplus_Comfort_Contact
    this.Od_Lentis_Mplus_Comfort_Toric_Iol_Master = request.Od_Lentis_Mplus_Comfort_Toric_Iol_Master
    this.Od_Lentis_Mplus_Comfort_Toric_Imersion = request.Od_Lentis_Mplus_Comfort_Toric_Imersion
    this.Od_Lentis_Mplus_Comfort_Toric_Contact = request.Od_Lentis_Mplus_Comfort_Toric_Contact
    this.Od_Lentis_T_Plus_Iol_Master = request.Od_Lentis_T_Plus_Iol_Master
    this.Od_Lentis_T_Plus_Imersion = request.Od_Lentis_T_Plus_Imersion
    this.Od_Lentis_T_Plus_Contact = request.Od_Lentis_T_Plus_Contact
    this.Od_Revive_Iol_Master = request.Od_Revive_Iol_Master
    this.Od_Revive_Imersion = request.Od_Revive_Imersion
    this.Od_Revive_Contact = request.Od_Revive_Contact
    this.Od_Lentis_L313_Monofocal_Iol_Master = request.Od_Lentis_L313_Monofocal_Iol_Master
    this.Od_Lentis_L313_Monofocal_Imersion = request.Od_Lentis_L313_Monofocal_Imersion
    this.Od_Lentis_L313_Monofocal_Contact = request.Od_Lentis_L313_Monofocal_Contact
    this.Os_T_Ple_Iol_Master = request.Os_T_Ple_Iol_Master
    this.Os_T_Ple_Imersion = request.Os_T_Ple_Imersion
    this.Os_T_Ple_Contact = request.Os_T_Ple_Contact
    this.Os_Sys_M_Iol_Master = request.Os_Sys_M_Iol_Master
    this.Os_Sys_M_Imersion = request.Os_Sys_M_Imersion
    this.Os_Sys_M_Contact = request.Os_Sys_M_Contact
    this.Os_Sys_T_Iol_Master = request.Os_Sys_T_Iol_Master
    this.Os_Sys_T_Imersion = request.Os_Sys_T_Imersion
    this.Os_Sys_T_Contact = request.Os_Sys_T_Contact
    this.Os_Rp_11_Iol_Master = request.Os_Rp_11_Iol_Master
    this.Os_Rp_11_Imersion = request.Os_Rp_11_Imersion
    this.Os_Rp_11_Contact = request.Os_Rp_11_Contact
    this.Os_Rp_12_Iol_Master = request.Os_Rp_12_Iol_Master
    this.Os_Rp_12_Imersion = request.Os_Rp_12_Imersion
    this.Os_Rp_12_Contact = request.Os_Rp_12_Contact
    this.Os_Soft_HD_PLUS_Iol_Master = request.Os_Soft_HD_PLUS_Iol_Master
    this.Os_Soft_HD_PLUS_Imersion = request.Os_Soft_HD_PLUS_Imersion
    this.Os_Soft_HD_PLUS_Contact = request.Os_Soft_HD_PLUS_Contact
    this.Os_Soft_HD_Iol_Master = request.Os_Soft_HD_Iol_Master
    this.Os_Soft_HD_Imersion = request.Os_Soft_HD_Imersion
    this.Os_Soft_HD_Contact = request.Os_Soft_HD_Contact
    this.Os_I_Pure_Iol_Master = request.Os_I_Pure_Iol_Master
    this.Os_I_Pure_Imersion = request.Os_I_Pure_Imersion
    this.Os_I_Pure_Contact = request.Os_I_Pure_Contact
    this.Os_Lentis_L313_Monofocal_Iol_Master = request.Os_Lentis_L313_Monofocal_Iol_Master
    this.Os_Lentis_L313_Monofocal_Imersion = request.Os_Lentis_L313_Monofocal_Imersion
    this.Os_Lentis_L313_Monofocal_Contact = request.Os_Lentis_L313_Monofocal_Contact
    this.Os_Nano_fold_Iol_Master = request.Os_Nano_fold_Iol_Master
    this.Os_Nano_fold_Imersion = request.Os_Nano_fold_Imersion
    this.Os_Nano_fold_Contact = request.Os_Nano_fold_Contact
    this.Os_B_Lomb_Ao_Iol_Master = request.Os_B_Lomb_Ao_Iol_Master
    this.Os_B_Lomb_Ao_Imersion = request.Os_B_Lomb_Ao_Imersion
    this.Os_B_Lomb_Ao_Contact = request.Os_B_Lomb_Ao_Contact
    this.Os_B_Lomb_Ao_M160_Iol_Master = request.Os_B_Lomb_Ao_M160_Iol_Master
    this.Os_B_Lomb_Ao_M160_Imersion = request.Os_B_Lomb_Ao_M160_Imersion
    this.Os_B_Lomb_Ao_M160_Contact = request.Os_B_Lomb_Ao_M160_Contact
    this.Os_Lentis_Mplus_Comfort_Toric_Iol_Master = request.Os_Lentis_Mplus_Comfort_Toric_Iol_Master
    this.Os_Lentis_Mplus_Comfort_Toric_Imersion = request.Os_Lentis_Mplus_Comfort_Toric_Imersion
    this.Os_Lentis_Mplus_Comfort_Toric_Contact = request.Os_Lentis_Mplus_Comfort_Toric_Contact
    this.Os_Lentis_T_Plus_Iol_Master = request.Os_Lentis_T_Plus_Iol_Master
    this.Os_Lentis_T_Plus_Imersion = request.Os_Lentis_T_Plus_Imersion
    this.Os_Lentis_T_Plus_Contact = request.Os_Lentis_T_Plus_Contact
    this.Os_Revive_Iol_Master = request.Os_Revive_Iol_Master
    this.Os_Revive_Imersion = request.Os_Revive_Imersion
    this.Os_Revive_Contact = request.Os_Revive_Contact
    this.OD_Mata_Dioperasi = request.OD_Mata_Dioperasi
    this.OS_Mata_Dioperasi = request.OS_Mata_Dioperasi
    this.PDF = request.PDF
  }
}

export interface IToolInspectionModel {
  EMR_ID: string;
  total: number;
  totalFiltered: number;
  pasien: IPatientModel,
  records: any[],
  dicoms: any[],
}

export class ToolInspectionModel {
  EMR_ID: string;
  total: number;
  totalFiltered: number;
  pasien: IPatientModel;
  records: BiometricModel[] = [];
  dicoms: any[];

  constructor(tool: IToolInspectionModel) {
    this.EMR_ID = tool.EMR_ID;
    this.total = tool.total;
    this.totalFiltered = tool.totalFiltered;
    this.pasien = new PatientModel(tool.pasien);
    this.records = tool.records && Array.isArray(tool.records) ? tool.records : [];
    this.dicoms = tool.dicoms && Array.isArray(tool.dicoms) ? tool.dicoms : [];
  }
}
