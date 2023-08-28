import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { DateTimeInput, TextInput } from "@src/shared/input";
import { useForm } from 'react-hook-form';
import { Signature } from '@src/shared/signature/components';
import BiometricTemplateDisabled from './biometric-template-disabled';
import { SubmitButton } from '@src/shared/button';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import biometricList from '../const/biometricList';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { BiometricModel } from '../../inspection-result/models/inspection-result.model';
import Image from 'next/image'
import { useState } from 'react';
import { SignatureModel } from '@src/shared/signature/models/signature.model';

const BiometricExamDetail = (props: { data: any, item?: any | undefined, }) => {
  const { data, item } = props;

  const dispatch = useAppDispatch();
  const { doctors } = useAppSelector(state => state.doctor);
  const { treatment } = useAppSelector(state => state.patient);

  const { register, handleSubmit, errors, setValue, getValues, reset, control } = useForm({
    mode: 'onChange',
    defaultValues: {
      od_k1: data?.Od_K1 ?? '',
      od_k2: data?.Od_K2 ?? '',
      od_acd: data?.Od_Acd ?? '',
      od_axl_iol_master: data?.Od_Axl_Iol_Master ?? '',
      od_axl_imersion: data?.Od_Axl_Imersion ?? '',
      od_axl_contact: data?.Od_Axl_Contact ?? '',
      od_fold_asp_iol_master: data?.Od_Fold_Asp_Iol_Master ?? '',
      od_fold_asp_imersion: data?.Od_Fold_Asp_Imersion ?? '',
      od_fold_asp_contact: data?.Od_Fold_Asp_Contact ?? '',
      od_fold_sp_iol_master: data?.Od_Fold_Sp_Iol_Master ?? '',
      od_fold_sp_imersion: data?.Od_Fold_Sp_Imersion ?? '',
      od_fold_sp_contact: data?.Od_Fold_Sp_Contact ?? '',
      od_ca_iol_master: data?.Od_Ca_Iol_Master ?? '',
      od_ca_imersion: data?.Od_Ca_Imersion ?? '',
      od_ca_contact: data?.Od_Ca_Contact ?? '',
      od_cl_iol_master: data?.Od_Cl_Iol_Master ?? '',
      od_cl_imersion: data?.Od_Cl_Imersion ?? '',
      od_cl_contact: data?.Od_Cl_Contact ?? '',
      od_t_ple_iol_master: data?.Od_T_Ple_Iol_Master ?? '',
      od_t_ple_imersion: data?.Od_T_Ple_Imersion ?? '',
      od_t_ple_contact: data?.Od_T_Ple_Contact ?? '',
      od_sys_m_iol_master: data?.Od_Sys_M_Iol_Master ?? '',
      od_sys_m_imersion: data?.Od_Sys_M_Imersion ?? '',
      od_sys_m_contact: data?.Od_Sys_M_Contact ?? '',
      od_sys_t_iol_master: data?.Od_Sys_T_Iol_Master ?? '',
      od_sys_t_imersion: data?.Od_Sys_T_Imersion ?? '',
      od_sys_t_contact: data?.Od_Sys_T_Contact ?? '',
      od_asqelio_iol_master: data?.Od_Asqelio_Iol_Master ?? '',
      od_asqelio_imersion: data?.Od_Asqelio_Imersion ?? '',
      od_asqelio_contact: data?.Od_Asqelio_Contact ?? '',
      od_re_01_iol_master: data?.Od_Re_01_Iol_Master ?? '',
      od_re_01_imersion: data?.Od_Re_01_Imersion ?? '',
      od_re_01_contact: data?.Od_Re_01_Contact ?? '',
      od_rp_11_iol_master: data?.Od_Rp_11_Iol_Master ?? '',
      od_rp_11_imersion: data?.Od_Rp_11_Imersion ?? '',
      od_rp_11_contact: data?.Od_Rp_11_Contact ?? '',
      od_ra_25_iol_master: data?.Od_Ra_25_Iol_Master ?? '',
      od_ra_25_imersion: data?.Od_Ra_25_Imersion ?? '',
      od_ra_25_contact: data?.Od_Ra_25_Contact ?? '',
      od_soft_hd_plus_iol_master: data?.Od_Soft_HD_PLUS_Iol_Master ?? '',
      od_soft_hd_plus_imersion: data?.Od_Soft_HD_PLUS_Imersion ?? '',
      od_soft_hd_plus_contact: data?.Od_Soft_HD_PLUS_Contact ?? '',
      od_soft_hd_iol_master: data?.Od_Soft_HD_Iol_Master ?? '',
      od_soft_hd_imersion: data?.Od_Soft_HD_Imersion ?? '',
      od_soft_hd_contact: data?.Od_Soft_HD_Contact ?? '',
      od_i_pure_iol_master: data?.Od_I_Pure_Iol_Master ?? '',
      od_i_pure_imersion: data?.Od_I_Pure_Imersion ?? '',
      od_i_pure_contact: data?.Od_I_Pure_Contact ?? '',
      od_lenstec_sbl_iol_master: data?.Od_Lenstec_Sbl_Iol_Master ?? '',
      od_lenstec_sbl_imersion: data?.Od_Lenstec_Sbl_Imersion ?? '',
      od_lenstec_sbl_contact: data?.Od_Lenstec_Sbl_Contact ?? '',
      od_ct_asphina_409mp_iol_master: data?.Od_Ct_Asphina_409mp_Iol_Master ?? '',
      od_ct_asphina_409mp_imersion: data?.Od_Ct_Asphina_409mp_Imersion ?? '',
      od_ct_asphina_409mp_contact: data?.Od_Ct_Asphina_409mp_Contact ?? '',
      od_at_lisa_tri_839mp_iol_master: data?.Od_At_Lisa_Tri_839mp_Iol_Master ?? '',
      od_at_lisa_tri_839mp_imersion: data?.Od_At_Lisa_Tri_839mp_Imersion ?? '',
      od_at_lisa_tri_839mp_contact: data?.Od_At_Lisa_Tri_839mp_Contact ?? '',
      od_nano_fold_iol_master: data?.Od_Nano_fold_Iol_Master ?? '',
      od_nano_fold_imersion: data?.Od_Nano_fold_Imersion ?? '',
      od_nano_fold_contact: data?.Od_Nano_fold_Contact ?? '',
      od_b_lomb_ao_iol_master: data?.Od_B_Lomb_Ao_Iol_Master ?? '',
      od_b_lomb_ao_imersion: data?.Od_B_Lomb_Ao_Imersion ?? '',
      od_b_lomb_ao_contact: data?.Od_B_Lomb_Ao_Contact ?? '',
      od_b_lomb_ao_m160_iol_master: data?.Od_B_Lomb_Ao_M160_Iol_Master ?? '',
      od_b_lomb_ao_m160_imersion: data?.Od_B_Lomb_Ao_M160_Imersion ?? '',
      od_b_lomb_ao_m160_contact: data?.Od_B_Lomb_Ao_M160_Contact ?? '',
      od_innova_aspheric_iol_master: data?.Od_Innova_Aspheric_Iol_Master ?? '',
      od_innova_aspheric_imersion: data?.Od_Innova_Aspheric_Imersion ?? '',
      od_innova_aspheric_contact: data?.Od_Innova_Aspheric_Contact ?? '',
      od_c_flex_iol_master: data?.Od_C_Flex_Iol_Master ?? '',
      od_c_flex_imersion: data?.Od_C_Flex_Imersion ?? '',
      od_c_flex_contact: data?.Od_C_Flex_Contact ?? '',
      od_lentis_mplus_comfort_iol_master: data?.Od_Lentis_Mplus_Comfort_Iol_Master ?? '',
      od_lentis_mplus_comfort_imersion: data?.Od_Lentis_Mplus_Comfort_Imersion ?? '',
      od_lentis_mplus_comfort_contact: data?.Od_Lentis_Mplus_Comfort_Contact ?? '',
      od_lentis_mplus_comfort_toric_iol_master: data?.Od_Lentis_Mplus_Comfort_Toric_Iol_Master ?? '',
      od_lentis_mplus_comfort_toric_imersion: data?.Od_Lentis_Mplus_Comfort_Toric_Imersion ?? '',
      od_lentis_mplus_comfort_toric_contact: data?.Od_Lentis_Mplus_Comfort_Toric_Contact ?? '',
      od_lentis_t_plus_iol_master: data?.Od_Lentis_T_Plus_Iol_Master ?? '',
      od_lentis_t_plus_imersion: data?.Od_Lentis_T_Plus_Imersion ?? '',
      od_lentis_t_plus_contact: data?.Od_Lentis_T_Plus_Contact ?? '',
      od_revive_iol_master: data?.Od_Revive_Iol_Master ?? '',
      od_revive_imersion: data?.Od_Revive_Imersion ?? '',
      od_revive_contact: data?.Od_Revive_Contact ?? '',
      od_lentis_l313_monofocal_iol_master: data?.Od_Lentis_L313_Monofocal_Iol_Master ?? '',
      od_lentis_l313_monofocal_imersion: data?.Od_Lentis_L313_Monofocal_Imersion ?? '',
      od_lentis_l313_monofocal_contact: data?.Od_Lentis_L313_Monofocal_Contact ?? '',
      od_oc_ls_30_iol_master: data?.Od_Oc_Ls_30_Iol_Master ?? '',
      od_oc_ls_30_imersion: data?.Od_Oc_Ls_30_Imersion ?? '',
      od_oc_ls_30_contact: data?.Od_Oc_Ls_30_Contact ?? '',
      od_oc_ls_iol_master: data?.Od_Oc_Ls_Iol_Master ?? '',
      od_oc_ls_imersion: data?.Od_Oc_Ls_Imersion ?? '',
      od_oc_ls_contact: data?.Od_Oc_Ls_Contact ?? '',
      od_oc_ls_15_iol_master: data?.Od_Oc_Ls_15_Iol_Master ?? '',
      od_oc_ls_15_imersion: data?.Od_Oc_Ls_15_Imersion ?? '',
      od_oc_ls_15_contact: data?.Od_Oc_Ls_15_Contact ?? '',
      od_rf_22_l_iol_master: data?.Od_RF_22_L_Iol_Master ?? '',
      od_rf_22_l_imersion: data?.Od_RF_22_L_Imersion ?? '',
      od_rf_22_l_contact: data?.Od_RF_22_L_Contact ?? '',
      od_rf_31_pl_iol_master: data?.Od_RF_31_PL_Iol_Master ?? '',
      od_rf_31_pl_imersion: data?.Od_RF_31_PL_Imersion ?? '',
      od_rf_31_pl_contact: data?.Od_RF_31_PL_Contact ?? '',

      os_k1: data?.Os_K1 ?? '',
      os_k2: data?.Os_K2 ?? '',
      os_acd: data?.Os_Acd ?? '',
      check_os_axl: data?.Check_Os_Axl ?? '',
      os_axl_iol_master: data?.Os_Axl_Iol_Master ?? '',
      os_axl_imersion: data?.Os_Axl_Imersion ?? '',
      os_axl_contact: data?.Os_Axl_Contact ?? '',
      os_fold_asp_iol_master: data?.Os_Fold_Asp_Iol_Master ?? '',
      os_fold_asp_imersion: data?.Os_Fold_Asp_Imersion ?? '',
      os_fold_asp_contact: data?.Os_Fold_Asp_Contact ?? '',
      os_fold_sp_iol_master: data?.Os_Fold_Sp_Iol_Master ?? '',
      os_fold_sp_imersion: data?.Os_Fold_Sp_Imersion ?? '',
      os_fold_sp_contact: data?.Os_Fold_Sp_Contact ?? '',
      os_ca_iol_master: data?.Os_Ca_Iol_Master ?? '',
      os_ca_imersion: data?.Os_Ca_Imersion ?? '',
      os_ca_contact: data?.Os_Ca_Contact ?? '',
      os_cl_iol_master: data?.Os_Cl_Iol_Master ?? '',
      os_cl_imersion: data?.Os_Cl_Imersion ?? '',
      os_cl_contact: data?.Os_Cl_Contact ?? '',
      os_t_ple_iol_master: data?.Os_T_Ple_Iol_Master ?? '',
      os_t_ple_imersion: data?.Os_T_Ple_Imersion ?? '',
      os_t_ple_contact: data?.Os_T_Ple_Contact ?? '',
      os_sys_m_iol_master: data?.Os_Sys_M_Iol_Master ?? '',
      os_sys_m_imersion: data?.Os_Sys_M_Imersion ?? '',
      os_sys_m_contact: data?.Os_Sys_M_Contact ?? '',
      os_sys_t_iol_master: data?.Os_Sys_T_Iol_Master ?? '',
      os_sys_t_imersion: data?.Os_Sys_T_Imersion ?? '',
      os_sys_t_contact: data?.Os_Sys_T_Contact ?? '',
      os_asqelio_iol_master: data?.Os_Asqelio_Iol_Master ?? '',
      os_asqelio_imersion: data?.Os_Asqelio_Imersion ?? '',
      os_asqelio_contact: data?.Os_Asqelio_Contact ?? '',
      os_re_01_iol_master: data?.Os_Re_01_Iol_Master ?? '',
      os_re_01_imersion: data?.Os_Re_01_Imersion ?? '',
      os_re_01_contact: data?.Os_Re_01_Contact ?? '',
      os_rp_11_iol_master: data?.Os_Rp_11_Iol_Master ?? '',
      os_rp_11_imersion: data?.Os_Rp_11_Imersion ?? '',
      os_rp_11_contact: data?.Os_Rp_11_Contact ?? '',
      os_ra_25_iol_master: data?.Os_Ra_25_Iol_Master ?? '',
      os_ra_25_imersion: data?.Os_Ra_25_Imersion ?? '',
      os_ra_25_contact: data?.Os_Ra_25_Contact ?? '',
      os_soft_hd_plus_iol_master: data?.Os_Soft_HD_PLUS_Iol_Master ?? '',
      os_soft_hd_plus_imersion: data?.Os_Soft_HD_PLUS_Imersion ?? '',
      os_soft_hd_plus_contact: data?.Os_Soft_HD_PLUS_Contact ?? '',
      os_soft_hd_iol_master: data?.Os_Soft_HD_Iol_Master ?? '',
      os_soft_hd_imersion: data?.Os_Soft_HD_Imersion ?? '',
      os_soft_hd_contact: data?.Os_Soft_HD_Contact ?? '',
      os_i_pure_iol_master: data?.Os_I_Pure_Iol_Master ?? '',
      os_i_pure_imersion: data?.Os_I_Pure_Imersion ?? '',
      os_i_pure_contact: data?.Os_I_Pure_Contact ?? '',
      os_lenstec_sbl_iol_master: data?.Os_Lenstec_Sbl_Iol_Master ?? '',
      os_lenstec_sbl_imersion: data?.Os_Lenstec_Sbl_Imersion ?? '',
      os_lenstec_sbl_contact: data?.Os_Lenstec_Sbl_Contact ?? '',
      os_ct_asphina_409mp_iol_master: data?.Os_Ct_Asphina_409mp_Iol_Master ?? '',
      os_ct_asphina_409mp_imersion: data?.Os_Ct_Asphina_409mp_Imersion ?? '',
      os_ct_asphina_409mp_contact: data?.Os_Ct_Asphina_409mp_Contact ?? '',
      os_nano_iol_master: data?.Os_Nano_Iol_Master ?? '',
      os_nano_imersion: data?.Os_Nano_Imersion ?? '',
      os_nano_contact: data?.Os_Nano_Contact ?? '',
      od_nano_iol_master: data?.Od_Nano_Iol_Master ?? '',
      od_nano_imersion: data?.Od_Nano_Imersion ?? '',
      od_nano_contact: data?.Od_Nano_Contact ?? '',
      od_lucidis_iol_master: data?.Od_Lucidis_Iol_Master ?? '',
      od_lucidis_imersion: data?.Od_Lucidis_Imersion ?? '',
      od_lucidis_contact: data?.Od_Lucidis_Contact ?? '',
      os_lentis_l313_monofocal_iol_master: data?.Os_Lentis_L313_Monofocal_Iol_Master ?? '',
      os_lentis_l313_monofocal_imersion: data?.Os_Lentis_L313_Monofocal_Imersion ?? '',
      os_lentis_l313_monofocal_contact: data?.Os_Lentis_L313_Monofocal_Contact ?? '',
      os_nano_fold_iol_master: data?.Os_Nano_fold_Iol_Master ?? '',
      os_nano_fold_imersion: data?.Os_Nano_fold_Imersion ?? '',
      os_nano_fold_contact: data?.Os_Nano_fold_Contact ?? '',
      os_b_lomb_ao_iol_master: data?.Os_B_Lomb_Ao_Iol_Master ?? '',
      os_b_lomb_ao_imersion: data?.Os_B_Lomb_Ao_Imersion ?? '',
      os_b_lomb_ao_contact: data?.Os_B_Lomb_Ao_Contact ?? '',
      os_b_lomb_ao_m160_iol_master: data?.Os_B_Lomb_Ao_M160_Iol_Master ?? '',
      os_b_lomb_ao_m160_imersion: data?.Os_B_Lomb_Ao_M160_Imersion ?? '',
      os_b_lomb_ao_m160_contact: data?.Os_B_Lomb_Ao_M160_Contact ?? '',
      os_innova_aspheric_iol_master: data?.Os_Innova_Aspheric_Iol_Master ?? '',
      os_innova_aspheric_imersion: data?.Os_Innova_Aspheric_Imersion ?? '',
      os_innova_aspheric_contact: data?.Os_Innova_Aspheric_Contact ?? '',
      os_c_flex_iol_master: data?.Os_C_Flex_Iol_Master ?? '',
      os_c_flex_imersion: data?.Os_C_Flex_Imersion ?? '',
      os_c_flex_contact: data?.Os_C_Flex_Contact ?? '',
      os_lentis_mplus_comfort_iol_master: data?.Os_Lentis_Mplus_Comfort_Iol_Master ?? '',
      os_lentis_mplus_comfort_imersion: data?.Os_Lentis_Mplus_Comfort_Imersion ?? '',
      os_lentis_mplus_comfort_contact: data?.Os_Lentis_Mplus_Comfort_Contact ?? '',
      os_lentis_mplus_comfort_toric_iol_master: data?.Os_Lentis_Mplus_Comfort_Toric_Iol_Master ?? '',
      os_lentis_mplus_comfort_toric_imersion: data?.Os_Lentis_Mplus_Comfort_Toric_Imersion ?? '',
      os_lentis_mplus_comfort_toric_contact: data?.Os_Lentis_Mplus_Comfort_Toric_Contact ?? '',
      os_at_lisa_iol_master: data?.Check_Os_Axl ?? '',
      os_at_lisa_imersion: data?.Check_Os_Axl ?? '',
      os_at_lisa_contact: data?.Check_Os_Axl ?? '',
      os_lentis_t_plus_iol_master: data?.Os_Lentis_T_Plus_Iol_Master ?? '',
      os_lentis_t_plus_imersion: data?.Os_Lentis_T_Plus_Imersion ?? '',
      os_lentis_t_plus_contact: data?.Os_Lentis_T_Plus_Contact ?? '',
      os_at_lisa_tri_839mp_iol_master: data?.Os_At_Lisa_Tri_839mp_Iol_Master ?? '',
      os_at_lisa_tri_839mp_imersion: data?.Os_At_Lisa_Tri_839mp_Imersion ?? '',
      os_at_lisa_tri_839mp_contact: data?.Os_At_Lisa_Tri_839mp_Contact ?? '',
      os_revive_iol_master: data?.Os_Revive_Iol_Master ?? '',
      os_revive_imersion: data?.Os_Revive_Imersion ?? '',
      os_revive_contact: data?.Os_Revive_Contact ?? '',
      os_lucidis_iol_master: data?.Os_Lucidis_Iol_Master ?? '',
      os_lucidis_imersion: data?.Os_Lucidis_Imersion ?? '',
      os_lucidis_contact: data?.Os_Lucidis_Contact ?? '',
      os_oc_ls_30_iol_master: data?.Os_Oc_Ls_30_Iol_Master ?? '',
      os_oc_ls_30_imersion: data?.Os_Oc_Ls_30_Imersion ?? '',
      os_oc_ls_30_contact: data?.Os_Oc_Ls_30_Contact ?? '',
      os_oc_ls_iol_master: data?.Os_Oc_Ls_Iol_Master ?? '',
      os_oc_ls_imersion: data?.Os_Oc_Ls_Imersion ?? '',
      os_oc_ls_contact: data?.Os_Oc_Ls_Contact ?? '',
      os_oc_ls_15_iol_master: data?.Os_Oc_Ls_15_Iol_Master ?? '',
      os_oc_ls_15_imersion: data?.Os_Oc_Ls_15_Imersion ?? '',
      os_oc_ls_15_contact: data?.Os_Oc_Ls_15_Contact ?? '',
      os_rf_22_l_iol_master: data?.Os_RF_22_L_Iol_Master ?? '',
      os_rf_22_l_imersion: data?.Os_RF_22_L_Imersion ?? '',
      os_rf_22_l_contact: data?.Os_RF_22_L_Contact ?? '',
      os_rf_31_pl_iol_master: data?.Os_RF_31_PL_Iol_Master ?? '',
      os_rf_31_pl_imersion: data?.Os_RF_31_PL_Imersion ?? '',
      os_rf_31_pl_contact: data?.Os_RF_31_PL_Contact ?? '',

      check_od_asqelio: data?.Check_Od_Asqelio ?? '1',
      check_od_at_lisa_tri_839mp: data?.Check_Od_At_Lisa_Tri_839mp ?? '1',
      check_od_axl: data?.Check_Od_Axl ?? '1',
      check_od_b_lomb_ao: data?.Check_Od_B_Lomb_Ao ?? '',
      check_od_b_lomb_ao_m160: data?.Check_Od_B_Lomb_Ao_M160 ?? '',
      check_od_c_flex: data?.Check_Od_C_Flex ?? '',
      check_od_ca: data?.Check_Od_Ca ?? '1',
      check_od_cl: data?.Check_Od_Cl ?? '1',
      check_od_ct_asphina_409mp: data?.Check_Od_Ct_Asphina_409mp ?? '1',
      check_od_fold_asp: data?.Check_Od_Fold_Asp ?? '1',
      check_od_fold_sp: data?.Check_Od_Fold_Sp ?? '1',
      check_od_i_pure: data?.Check_Od_I_Pure ?? '',
      check_od_innova_aspheric: data?.Check_Od_Innova_Aspheric ?? '',
      check_od_lenstec_sbl: data?.Check_Od_Lenstec_Sbl ?? '1',
      check_od_lentis_l313_monofocal: data?.Check_Od_Lentis_L313_Monofocal ?? '',
      check_od_lentis_mplus_comfort: data?.Check_Od_Lentis_Mplus_Comfort ?? '',
      check_od_lentis_mplus_comfort_toric: data?.Check_Od_Lentis_Mplus_Comfort_Toric ?? '',
      check_od_lentis_t_plus: data?.Check_Od_Lentis_T_Plus ?? '',
      check_od_lucidis: data?.Check_Od_Lucidis ?? '1',
      check_od_nano: data?.Check_Od_Nano ?? '1',
      check_od_nano_fold: data?.Check_Od_Nano_fold ?? '',
      check_od_oc_ls: data?.Check_Od_Oc_Ls ?? '1',
      check_od_oc_ls_15: data?.Check_Od_Oc_Ls_15 ?? '',
      check_od_oc_ls_30: data?.Check_Od_Oc_Ls_30 ?? '1',
      check_od_ra_25: data?.Check_Od_Ra_25 ?? '1',
      check_od_re_01: data?.Check_Od_Re_01 ?? '1',
      check_od_revive: data?.Check_Od_Revive ?? '',
      check_od_rf_22_l: data?.Check_Od_RF_22_L ?? '1',
      check_od_rf_31_pl: data?.Check_Od_RF_31_PL ?? '1',
      check_od_rp_11: data?.Check_Od_Rp_11 ?? '',
      check_od_soft_hd: data?.Check_Od_Soft_HD ?? '',
      check_od_soft_hd_plus: data?.Check_Od_Soft_HD_PLUS ?? '',
      check_od_sys_m: data?.Check_Od_Sys_M ?? '',
      check_od_sys_t: data?.Check_Od_Sys_T ?? '',
      check_od_t_ple: data?.Check_Od_T_Ple ?? '1',
      check_os_asqelio: data?.Check_Os_Asqelio ?? '1',
      check_os_at_lisa_tri_839mp: data?.Check_Os_At_Lisa_Tri_839mp ?? '1',
      check_os_b_lomb_ao: data?.Check_Os_B_Lomb_Ao ?? '',
      check_os_b_lomb_ao_m160: data?.Check_Os_B_Lomb_Ao_M160 ?? '',
      check_os_c_flex: data?.Check_Os_C_Flex ?? '',
      check_os_ca: data?.Check_Os_Ca ?? '1',
      check_os_cl: data?.Check_Os_Cl ?? '1',
      check_os_ct_asphina_409mp: data?.Check_Os_Ct_Asphina_409mp ?? '1',
      check_os_fold_asp: data?.Check_Os_Fold_Asp ?? '1',
      check_os_fold_sp: data?.Check_Os_Fold_Sp ?? '1',
      check_os_i_pure: data?.Check_Os_I_Pure ?? '',
      check_os_innova_aspheric: data?.Check_Os_Innova_Aspheric ?? '',
      check_os_lenstec_sbl: data?.Check_Os_Lenstec_Sbl ?? '1',
      check_os_lentis_l313_monofocal: data?.Check_Os_Lentis_L313_Monofocal ?? '',
      check_os_lentis_mplus_comfort: data?.Check_Os_Lentis_Mplus_Comfort ?? '',
      check_os_lentis_mplus_comfort_toric: data?.Check_Os_Lentis_Mplus_Comfort_Toric ?? '',
      check_os_lentis_t_plus: data?.Check_Os_Lentis_T_Plus ?? '',
      check_os_lucidis: data?.Check_Os_Lucidis ?? '1',
      check_os_nano: data?.Check_Os_Nano ?? '1',
      check_os_nano_fold: data?.Check_Os_Nano_fold ?? '',
      check_os_oc_ls: data?.Check_Os_Oc_Ls ?? '1',
      check_os_oc_ls_15: data?.Check_Os_Oc_Ls_15 ?? '1',
      check_os_oc_ls_30: data?.Check_Os_Oc_Ls_30 ?? '1',
      check_os_ra_25: data?.Check_Os_Ra_25 ?? '1',
      check_os_re_01: data?.Check_Os_Re_01 ?? '1',
      check_os_revive: data?.Check_Os_Revive ?? '',
      check_os_rf_22_l: data?.Check_Os_RF_22_L ?? '1',
      check_os_rf_31_pl: data?.Check_Os_RF_31_PL ?? '1',
      check_os_rp_11: data?.Check_Os_Rp_11 ?? '',
      check_os_soft_hd: data?.Check_Os_Soft_HD ?? '',
      check_os_soft_hd_plus: data?.Check_Os_Soft_HD_PLUS ?? '',
      check_os_sys_m: data?.Check_Os_Sys_M ?? '',
      check_os_sys_t: data?.Check_Os_Sys_T ?? '',
      check_os_t_ple: data?.Check_Os_T_Ple ?? '1',
      dokter_pemeriksa_nama: data?.Dokter_Pemeriksa_Nama ?? '',
      dokter_pemeriksa: data?.Dokter_Pemeriksa_Id ?? '',
      catatan: data?.Catatan ?? '',
      // ttd_tanggal: data?.TTD_Tanggal ?? '',
      ttd_tanggal: (data && data.TTD_Tanggal) ? data.TTD_Tanggal.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      'ttd-dokter-pemeriksa': data?.TTD_Dokter_Pemeriksa ?? '',
      // 'ttd-dokter-pemeriksa': (data && data.form && data.form.TTD_Dokter_Pemeriksa) ? data.form.TTD_Dokter_Pemeriksa : '',
      'id-dokter-pemeriksa': data?.ID_Dokter_Pemeriksa ?? '',
      // 'id-dokter-pemeriksa': (data && data.form && data.form.ID_Dokter_Pemeriksa) ? data.form.ID_Dokter_Pemeriksa : '',
    },
  })

  const handleDoctorSigned = (image: SignatureModel) => {
    setValue('ttd-dokter-pemeriksa', image.Signature);
    setValue('id-dokter-pemeriksa', image.ID_Karyawan);
  }

  const handleSubmitForm = (value: any) => {
    
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <Table borderless style={{ width: '100%' }}>
        <h4 className="mt-4">Form Hasil Pemeriksaan Alat Biometri</h4>
        <tbody className='mt-4'>
          <tr className='mt-4'>
            <td className='mt-4'>
              <Row>
                <b style={{ textAlign: 'center' }}>OD</b>
                <b style={{ textAlign: 'center' }}>Keratometri</b>
              </Row>
              <Row style={{ marginTop: '15px' }}>
                <Table>
                  <tr>
                    <td>
                      <div className="me-1">
                        <Label style={{ marginLeft: '10px' }}>K1</Label>
                      </div>
                    </td>
                    <td>
                      <Row>
                        <Col>
                          <Input
                            type="text"
                            style={{ width: '300px', marginLeft: '-30px' }}
                            name="od_k1"
                            innerRef={register({ required: true })}
                            invalid={errors.od_k1 && true}
                            readOnly
                          />
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="me-1">
                        <Label style={{ marginLeft: '10px' }}>K2</Label>
                      </div>
                    </td>
                    <td>
                      <Row>
                        <Col>
                          <Input
                            type="text"
                            style={{ width: '300px', marginLeft: '-30px' }}
                            name="od_k2"
                            innerRef={register({ required: true })}
                            invalid={errors.od_k2 && true}
                            readOnly
                          />
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="me-1">
                        <Label style={{ marginLeft: '10px' }}>ACD</Label>
                      </div>
                    </td>
                    <td>
                      <Row>
                        <Col>
                          <Input
                            type="text"
                            style={{ width: '300px', marginLeft: '-30px' }}
                            name="od_acd"
                            innerRef={register({ required: true })}
                            invalid={errors.od_acd && true}
                            readOnly
                          />
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </Table>
              </Row>
            </td>
            <td>
              <Row>
                <b style={{ textAlign: 'center' }}>OS</b>
                <b style={{ textAlign: 'center' }}>Keratometri</b>
              </Row>
              <Row style={{ marginTop: '15px' }}>
                <Table>
                  <tr>
                    <td>
                      <div className="me-1">
                        <Label style={{ marginLeft: '10px' }}>K1</Label>
                      </div>
                    </td>
                    <td>
                      <Row>
                        <Col>
                          <Input
                            type="text"
                            style={{ width: '300px' }}
                            name="os_k1"
                            innerRef={register({ required: true })}
                            invalid={errors.os_k1 && true}
                            readOnly
                          />
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="me-1">
                        <Label style={{ marginLeft: '10px' }}>K2</Label>
                      </div>
                    </td>
                    <td>
                      <Row>
                        <Col>
                          <Input
                            type="text"
                            style={{ width: '300px' }}
                            name="os_k2"
                            innerRef={register({ required: true })}
                            invalid={errors.os_k2 && true}
                            readOnly
                          />
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="me-1">
                        <Label style={{ marginLeft: '10px' }}>ACD</Label>
                      </div>
                    </td>
                    <td>
                      <Row>
                        <Col>
                          <Input
                            type="text"
                            style={{ width: '300px' }}
                            name="os_acd"
                            innerRef={register({ required: true })}
                            invalid={errors.os_acd && true}
                            readOnly
                          />
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </Table>
              </Row>
            </td>
          </tr>
        </tbody>
      </Table>

      <FormGroup className="form-group" row>
        <Row>
          <Col>
            {
              biometricList && biometricList.map((val: any, key: number) => (
                <BiometricTemplateDisabled
                  key={key}
                  judul={val.name}
                  data={data}
                  defaultChecklistLeft={(data && data[`Check_Od_${val.id}`] && data[`Check_Od_${val.id}`] === '1') || val.checked}
                  defaultChecklistRight={(data && data[`Check_Os_${val.id}`] && data[`Check_Os_${val.id}`] === '1') || val.checked}
                  name={val.id}
                  treatmentNumber={treatment ? treatment.ID_Pelayanan : ''}
                  {...{ register, errors, setValue, getValues }}
                />
              ))
            }
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className="form-group" row>
        <Label for="dokter_pemeriksa_nama" md="2" sm="12">Pemeriksa</Label>
        <Col>
          <Input
            className="mt-1"
            type="select"
            id="dokter_pemeriksa"
            name="dokter_pemeriksa"
            innerRef={register()}
            disabled
          >
            <option value="" disabled={true}>--</option>
            {
              doctors && Array.isArray(doctors) && doctors.map((item: any, key: number) => {
                return <option value={item.ID_Karyawan} key={key}>{ item.Nama }</option>;
              })
            }
          </Input>
        </Col>
      </FormGroup>

      <FormGroup className="form-group" row>
        <Label for="result_description" md="2" sm="12">Catatan</Label>
        <Col>
          <Input
            type="textarea"
            id="catatan"
            name="catatan"
            innerRef={register({ required: true })}
            invalid={errors.catatan && true}
            readOnly
          />
        </Col>
      </FormGroup>

      <FormGroup className="form-group" row>
        <DateTimeInput
          name='ttd_tanggal'
          label={`Tanggal`}
          defaultValue='ttd_tanggal'
          md={2}
          readOnly
          {...{ register, errors }}
        />
      </FormGroup>

      <FormGroup className='form-group'>
        <Table borderless style={{ width: '100%' }}>
          <tr>
            <td style={{ width: '25%' }}><b>Tanda Tangan Dokter Pemeriksa :</b></td>
            <td style={{ width: '60%' }}>
              <Signature
                label="Dokter"
                additionalLabel={(data?.Dokter_Pemeriksa_Nama !== '') ? data?.Dokter_Pemeriksa_Nama : undefined}
                type="picker"
                disabled
                initialImage={(data?.TTD_Dokter_Pemeriksa ?? '') ? data?.TTD_Dokter_Pemeriksa ?? '' : undefined}
                persons={doctors}
                onSigned={(assigner: SignatureModel) => handleDoctorSigned(assigner)} />
              <Input
                type="hidden"
                name="ttd-dokter-pemeriksa"
                innerRef={register({ required: true })}
                invalid={errors["ttd-dokter-pemeriksa"] && true}
              />
              <Input
                type="hidden"
                name="id-dokter-pemeriksa"
                innerRef={register({ required: true })}
                invalid={errors["id-dokter-pemeriksa"] && true}
              />
            </td>
            <td style={{ width: '20%' }}></td>
          </tr>
        </Table>
      </FormGroup>
    </Form>
  )
}

export default BiometricExamDetail;
