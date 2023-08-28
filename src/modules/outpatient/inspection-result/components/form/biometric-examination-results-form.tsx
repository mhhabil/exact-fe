import { Button,  Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle, Col, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { CreateBiometricExamRequest, UpdateBiometricRequest } from '../../requests';
import { DateTimeInput, TextInput } from "@src/shared/input";
import { useEffect, useState } from "react";
import { AppRequest } from '@src/shared/request';
import { BiometricExamRequest } from '../../../../outpatient/biometric-examination-results/requests';
import { BiometricModel } from '../../models/inspection-result.model';
import { DicomsModel } from '../../models/dicom-result.model';
import BiometricTemplate from '../../../../outpatient/biometric-examination-results/components/biometric-template';
import Image from 'next/image';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { SubmitButton } from '@src/shared/button';
import { ToolInspectionService } from '../../services';
import biometricList from '../../../../outpatient/biometric-examination-results/const/biometricList';
import router from 'next/router';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useWarnIfUnsavedChanges } from '@src/shared/alert';
import { PdfInspectionResultRequest } from '@modules/outpatient/inspection-result/requests/pdf-inspection-result';
import DicomForm from '../../components/form/dicom-form';
import { DateTimeConverter } from '@src/shared/datetime-converter';


const BiometricExaminationResultsForm = (props: { item?: any | undefined, dicom?: any | undefined, onSuccessSubmit: any, onCancel: any }) => {
  const { item, dicom, onSuccessSubmit, onCancel } = props;
  const unit = 'Pemeriksaan_Biometri';

  const dispatch = useAppDispatch();
  const [processing, setProcessing] = useState<boolean | undefined>(false);
  const { nurses } = useAppSelector(state => state.nurse);
  const { doctors } = useAppSelector(state => state.doctor);
  const { treatment } = useAppSelector(state => state.patient);

  const handleDoctorSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue('ttd-dokter-pemeriksa', image.Signature);
      setValue('id-dokter-pemeriksa', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('ttd-dokter-pemeriksa', image.Signature);
      setValue('id-dokter-pemeriksa', image.ID_Karyawan);
    }
  }

  const handleNurseSigned = (image: SignatureModel) => {
    setValue('ttd-perawat', image.Signature);
    setValue('id-perawat', image.ID_Karyawan);
  }

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }


  const { register, handleSubmit, errors, setValue, getValues, reset, control, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(BiometricExamRequest.schema()),
    defaultValues: {
      od_k1: item?.Od_K1 ?? '',
      od_k2: item?.Od_K2 ?? '',
      od_acd: item?.Od_Acd ?? '',
      od_axl_iol_master: item?.Od_Axl_Iol_Master ?? '',
      od_axl_imersion: item?.Od_Axl_Imersion ?? '',
      od_axl_contact: item?.Od_Axl_Contact ?? '',
      od_fold_asp_iol_master: item?.Od_Fold_Asp_Iol_Master ?? '',
      od_fold_asp_imersion: item?.Od_Fold_Asp_Imersion ?? '',
      od_fold_asp_contact: item?.Od_Fold_Asp_Contact ?? '',
      od_fold_sp_iol_master: item?.Od_Fold_Sp_Iol_Master ?? '',
      od_fold_sp_imersion: item?.Od_Fold_Sp_Imersion ?? '',
      od_fold_sp_contact: item?.Od_Fold_Sp_Contact ?? '',
      od_ca_iol_master: item?.Od_Ca_Iol_Master ?? '',
      od_ca_imersion: item?.Od_Ca_Imersion ?? '',
      od_ca_contact: item?.Od_Ca_Contact ?? '',
      od_cl_iol_master: item?.Od_Cl_Iol_Master ?? '',
      od_cl_imersion: item?.Od_Cl_Imersion ?? '',
      od_cl_contact: item?.Od_Cl_Contact ?? '',
      od_t_ple_iol_master: item?.Od_T_Ple_Iol_Master ?? '',
      od_t_ple_imersion: item?.Od_T_Ple_Imersion ?? '',
      od_t_ple_contact: item?.Od_T_Ple_Contact ?? '',
      od_sys_m_iol_master: item?.Od_Sys_M_Iol_Master ?? '',
      od_sys_m_imersion: item?.Od_Sys_M_Imersion ?? '',
      od_sys_m_contact: item?.Od_Sys_M_Contact ?? '',
      od_sys_t_iol_master: item?.Od_Sys_T_Iol_Master ?? '',
      od_sys_t_imersion: item?.Od_Sys_T_Imersion ?? '',
      od_sys_t_contact: item?.Od_Sys_T_Contact ?? '',
      od_asqelio_iol_master: item?.Od_Asqelio_Iol_Master ?? '',
      od_asqelio_imersion: item?.Od_Asqelio_Imersion ?? '',
      od_asqelio_contact: item?.Od_Asqelio_Contact ?? '',
      od_re_01_iol_master: item?.Od_Re_01_Iol_Master ?? '',
      od_re_01_imersion: item?.Od_Re_01_Imersion ?? '',
      od_re_01_contact: item?.Od_Re_01_Contact ?? '',
      od_rp_11_iol_master: item?.Od_Rp_11_Iol_Master ?? '',
      od_rp_11_imersion: item?.Od_Rp_11_Imersion ?? '',
      od_rp_11_contact: item?.Od_Rp_11_Contact ?? '',
      od_rp_12_iol_master: item?.Od_Rp_12_Iol_Master ?? '',
      od_rp_12_imersion: item?.Od_Rp_12_Imersion ?? '',
      od_rp_12_contact: item?.Od_Rp_12_Contact ?? '',
      od_ra_25_iol_master: item?.Od_Ra_25_Iol_Master ?? '',
      od_ra_25_imersion: item?.Od_Ra_25_Imersion ?? '',
      od_ra_25_contact: item?.Od_Ra_25_Contact ?? '',
      od_soft_hd_plus_iol_master: item?.Od_Soft_HD_PLUS_Iol_Master ?? '',
      od_soft_hd_plus_imersion: item?.Od_Soft_HD_PLUS_Imersion ?? '',
      od_soft_hd_plus_contact: item?.Od_Soft_HD_PLUS_Contact ?? '',
      od_soft_hd_iol_master: item?.Od_Soft_HD_Iol_Master ?? '',
      od_soft_hd_imersion: item?.Od_Soft_HD_Imersion ?? '',
      od_soft_hd_contact: item?.Od_Soft_HD_Contact ?? '',
      od_i_pure_iol_master: item?.Od_I_Pure_Iol_Master ?? '',
      od_i_pure_imersion: item?.Od_I_Pure_Imersion ?? '',
      od_i_pure_contact: item?.Od_I_Pure_Contact ?? '',
      od_lenstec_sbl_iol_master: item?.Od_Lenstec_Sbl_Iol_Master ?? '',
      od_lenstec_sbl_imersion: item?.Od_Lenstec_Sbl_Imersion ?? '',
      od_lenstec_sbl_contact: item?.Od_Lenstec_Sbl_Contact ?? '',
      od_ct_asphina_409mp_iol_master: item?.Od_Ct_Asphina_409mp_Iol_Master ?? '',
      od_ct_asphina_409mp_imersion: item?.Od_Ct_Asphina_409mp_Imersion ?? '',
      od_ct_asphina_409mp_contact: item?.Od_Ct_Asphina_409mp_Contact ?? '',
      od_at_lisa_tri_839mp_iol_master: item?.Od_At_Lisa_Tri_839mp_Iol_Master ?? '',
      od_at_lisa_tri_839mp_imersion: item?.Od_At_Lisa_Tri_839mp_Imersion ?? '',
      od_at_lisa_tri_839mp_contact: item?.Od_At_Lisa_Tri_839mp_Contact ?? '',
      od_nano_fold_iol_master: item?.Od_Nano_fold_Iol_Master ?? '',
      od_nano_fold_imersion: item?.Od_Nano_fold_Imersion ?? '',
      od_nano_fold_contact: item?.Od_Nano_fold_Contact ?? '',
      od_b_lomb_ao_iol_master: item?.Od_B_Lomb_Ao_Iol_Master ?? '',
      od_b_lomb_ao_imersion: item?.Od_B_Lomb_Ao_Imersion ?? '',
      od_b_lomb_ao_contact: item?.Od_B_Lomb_Ao_Contact ?? '',
      od_b_lomb_ao_m160_iol_master: item?.Od_B_Lomb_Ao_M160_Iol_Master ?? '',
      od_b_lomb_ao_m160_imersion: item?.Od_B_Lomb_Ao_M160_Imersion ?? '',
      od_b_lomb_ao_m160_contact: item?.Od_B_Lomb_Ao_M160_Contact ?? '',
      od_innova_aspheric_iol_master: item?.Od_Innova_Aspheric_Iol_Master ?? '',
      od_innova_aspheric_imersion: item?.Od_Innova_Aspheric_Imersion ?? '',
      od_innova_aspheric_contact: item?.Od_Innova_Aspheric_Contact ?? '',
      od_c_flex_iol_master: item?.Od_C_Flex_Iol_Master ?? '',
      od_c_flex_imersion: item?.Od_C_Flex_Imersion ?? '',
      od_c_flex_contact: item?.Od_C_Flex_Contact ?? '',
      od_lentis_mplus_comfort_iol_master: item?.Od_Lentis_Mplus_Comfort_Iol_Master ?? '',
      od_lentis_mplus_comfort_imersion: item?.Od_Lentis_Mplus_Comfort_Imersion ?? '',
      od_lentis_mplus_comfort_contact: item?.Od_Lentis_Mplus_Comfort_Contact ?? '',
      od_lentis_mplus_comfort_toric_iol_master: item?.Od_Lentis_Mplus_Comfort_Toric_Iol_Master ?? '',
      od_lentis_mplus_comfort_toric_imersion: item?.Od_Lentis_Mplus_Comfort_Toric_Imersion ?? '',
      od_lentis_mplus_comfort_toric_contact: item?.Od_Lentis_Mplus_Comfort_Toric_Contact ?? '',
      od_lentis_t_plus_iol_master: item?.Od_Lentis_T_Plus_Iol_Master ?? '',
      od_lentis_t_plus_imersion: item?.Od_Lentis_T_Plus_Imersion ?? '',
      od_lentis_t_plus_contact: item?.Od_Lentis_T_Plus_Contact ?? '',
      od_revive_iol_master: item?.Od_Revive_Iol_Master ?? '',
      od_revive_imersion: item?.Od_Revive_Imersion ?? '',
      od_revive_contact: item?.Od_Revive_Contact ?? '',
      od_lentis_l313_monofocal_iol_master: item?.Od_Lentis_L313_Monofocal_Iol_Master ?? '',
      od_lentis_l313_monofocal_imersion: item?.Od_Lentis_L313_Monofocal_Imersion ?? '',
      od_lentis_l313_monofocal_contact: item?.Od_Lentis_L313_Monofocal_Contact ?? '',
      od_oc_ls_30_iol_master: item?.Od_Oc_Ls_30_Iol_Master ?? '',
      od_oc_ls_30_imersion: item?.Od_Oc_Ls_30_Imersion ?? '',
      od_oc_ls_30_contact: item?.Od_Oc_Ls_30_Contact ?? '',
      od_oc_ls_iol_master: item?.Od_Oc_Ls_Iol_Master ?? '',
      od_oc_ls_imersion: item?.Od_Oc_Ls_Imersion ?? '',
      od_oc_ls_contact: item?.Od_Oc_Ls_Contact ?? '',
      od_oc_ls_15_iol_master: item?.Od_Oc_Ls_15_Iol_Master ?? '',
      od_oc_ls_15_imersion: item?.Od_Oc_Ls_15_Imersion ?? '',
      od_oc_ls_15_contact: item?.Od_Oc_Ls_15_Contact ?? '',
      od_rf_22_l_iol_master: item?.Od_RF_22_L_Iol_Master ?? '',
      od_rf_22_l_imersion: item?.Od_RF_22_L_Imersion ?? '',
      od_rf_22_l_contact: item?.Od_RF_22_L_Contact ?? '',
      od_rf_31_pl_iol_master: item?.Od_RF_31_PL_Iol_Master ?? '',
      od_rf_31_pl_imersion: item?.Od_RF_31_PL_Imersion ?? '',
      od_rf_31_pl_contact: item?.Od_RF_31_PL_Contact ?? '',

      os_k1: item?.Os_K1 ?? '',
      os_k2: item?.Os_K2 ?? '',
      os_acd: item?.Os_Acd ?? '',
      check_os_axl: item?.Check_Os_Axl ?? '',
      os_axl_iol_master: item?.Os_Axl_Iol_Master ?? '',
      os_axl_imersion: item?.Os_Axl_Imersion ?? '',
      os_axl_contact: item?.Os_Axl_Contact ?? '',
      os_fold_asp_iol_master: item?.Os_Fold_Asp_Iol_Master ?? '',
      os_fold_asp_imersion: item?.Os_Fold_Asp_Imersion ?? '',
      os_fold_asp_contact: item?.Os_Fold_Asp_Contact ?? '',
      os_fold_sp_iol_master: item?.Os_Fold_Sp_Iol_Master ?? '',
      os_fold_sp_imersion: item?.Os_Fold_Sp_Imersion ?? '',
      os_fold_sp_contact: item?.Os_Fold_Sp_Contact ?? '',
      os_ca_iol_master: item?.Os_Ca_Iol_Master ?? '',
      os_ca_imersion: item?.Os_Ca_Imersion ?? '',
      os_ca_contact: item?.Os_Ca_Contact ?? '',
      os_cl_iol_master: item?.Os_Cl_Iol_Master ?? '',
      os_cl_imersion: item?.Os_Cl_Imersion ?? '',
      os_cl_contact: item?.Os_Cl_Contact ?? '',
      os_t_ple_iol_master: item?.Os_T_Ple_Iol_Master ?? '',
      os_t_ple_imersion: item?.Os_T_Ple_Imersion ?? '',
      os_t_ple_contact: item?.Os_T_Ple_Contact ?? '',
      os_sys_m_iol_master: item?.Os_Sys_M_Iol_Master ?? '',
      os_sys_m_imersion: item?.Os_Sys_M_Imersion ?? '',
      os_sys_m_contact: item?.Os_Sys_M_Contact ?? '',
      os_sys_t_iol_master: item?.Os_Sys_T_Iol_Master ?? '',
      os_sys_t_imersion: item?.Os_Sys_T_Imersion ?? '',
      os_sys_t_contact: item?.Os_Sys_T_Contact ?? '',
      os_asqelio_iol_master: item?.Os_Asqelio_Iol_Master ?? '',
      os_asqelio_imersion: item?.Os_Asqelio_Imersion ?? '',
      os_asqelio_contact: item?.Os_Asqelio_Contact ?? '',
      os_re_01_iol_master: item?.Os_Re_01_Iol_Master ?? '',
      os_re_01_imersion: item?.Os_Re_01_Imersion ?? '',
      os_re_01_contact: item?.Os_Re_01_Contact ?? '',
      os_rp_11_iol_master: item?.Os_Rp_11_Iol_Master ?? '',
      os_rp_11_imersion: item?.Os_Rp_11_Imersion ?? '',
      os_rp_11_contact: item?.Os_Rp_11_Contact ?? '',
      os_rp_12_iol_master: item?.Os_Rp_12_Iol_Master ?? '',
      os_rp_12_imersion: item?.Os_Rp_12_Imersion ?? '',
      os_rp_12_contact: item?.Os_Rp_12_Contact ?? '',
      os_ra_25_iol_master: item?.Os_Ra_25_Iol_Master ?? '',
      os_ra_25_imersion: item?.Os_Ra_25_Imersion ?? '',
      os_ra_25_contact: item?.Os_Ra_25_Contact ?? '',
      os_soft_hd_plus_iol_master: item?.Os_Soft_HD_PLUS_Iol_Master ?? '',
      os_soft_hd_plus_imersion: item?.Os_Soft_HD_PLUS_Imersion ?? '',
      os_soft_hd_plus_contact: item?.Os_Soft_HD_PLUS_Contact ?? '',
      os_soft_hd_iol_master: item?.Os_Soft_HD_Iol_Master ?? '',
      os_soft_hd_imersion: item?.Os_Soft_HD_Imersion ?? '',
      os_soft_hd_contact: item?.Os_Soft_HD_Contact ?? '',
      os_i_pure_iol_master: item?.Os_I_Pure_Iol_Master ?? '',
      os_i_pure_imersion: item?.Os_I_Pure_Imersion ?? '',
      os_i_pure_contact: item?.Os_I_Pure_Contact ?? '',
      os_lenstec_sbl_iol_master: item?.Os_Lenstec_Sbl_Iol_Master ?? '',
      os_lenstec_sbl_imersion: item?.Os_Lenstec_Sbl_Imersion ?? '',
      os_lenstec_sbl_contact: item?.Os_Lenstec_Sbl_Contact ?? '',
      os_ct_asphina_409mp_iol_master: item?.Os_Ct_Asphina_409mp_Iol_Master ?? '',
      os_ct_asphina_409mp_imersion: item?.Os_Ct_Asphina_409mp_Imersion ?? '',
      os_ct_asphina_409mp_contact: item?.Os_Ct_Asphina_409mp_Contact ?? '',
      os_nano_iol_master: item?.Os_Nano_Iol_Master ?? '',
      os_nano_imersion: item?.Os_Nano_Imersion ?? '',
      os_nano_contact: item?.Os_Nano_Contact ?? '',
      od_nano_iol_master: item?.Od_Nano_Iol_Master ?? '',
      od_nano_imersion: item?.Od_Nano_Imersion ?? '',
      od_nano_contact: item?.Od_Nano_Contact ?? '',
      od_lucidis_iol_master: item?.Od_Lucidis_Iol_Master ?? '',
      od_lucidis_imersion: item?.Od_Lucidis_Imersion ?? '',
      od_lucidis_contact: item?.Od_Lucidis_Contact ?? '',
      os_lentis_l313_monofocal_iol_master: item?.Os_Lentis_L313_Monofocal_Iol_Master ?? '',
      os_lentis_l313_monofocal_imersion: item?.Os_Lentis_L313_Monofocal_Imersion ?? '',
      os_lentis_l313_monofocal_contact: item?.Os_Lentis_L313_Monofocal_Contact ?? '',
      os_nano_fold_iol_master: item?.Os_Nano_fold_Iol_Master ?? '',
      os_nano_fold_imersion: item?.Os_Nano_fold_Imersion ?? '',
      os_nano_fold_contact: item?.Os_Nano_fold_Contact ?? '',
      os_b_lomb_ao_iol_master: item?.Os_B_Lomb_Ao_Iol_Master ?? '',
      os_b_lomb_ao_imersion: item?.Os_B_Lomb_Ao_Imersion ?? '',
      os_b_lomb_ao_contact: item?.Os_B_Lomb_Ao_Contact ?? '',
      os_b_lomb_ao_m160_iol_master: item?.Os_B_Lomb_Ao_M160_Iol_Master ?? '',
      os_b_lomb_ao_m160_imersion: item?.Os_B_Lomb_Ao_M160_Imersion ?? '',
      os_b_lomb_ao_m160_contact: item?.Os_B_Lomb_Ao_M160_Contact ?? '',
      os_innova_aspheric_iol_master: item?.Os_Innova_Aspheric_Iol_Master ?? '',
      os_innova_aspheric_imersion: item?.Os_Innova_Aspheric_Imersion ?? '',
      os_innova_aspheric_contact: item?.Os_Innova_Aspheric_Contact ?? '',
      os_c_flex_iol_master: item?.Os_C_Flex_Iol_Master ?? '',
      os_c_flex_imersion: item?.Os_C_Flex_Imersion ?? '',
      os_c_flex_contact: item?.Os_C_Flex_Contact ?? '',
      os_lentis_mplus_comfort_iol_master: item?.Os_Lentis_Mplus_Comfort_Iol_Master ?? '',
      os_lentis_mplus_comfort_imersion: item?.Os_Lentis_Mplus_Comfort_Imersion ?? '',
      os_lentis_mplus_comfort_contact: item?.Os_Lentis_Mplus_Comfort_Contact ?? '',
      os_lentis_mplus_comfort_toric_iol_master: item?.Os_Lentis_Mplus_Comfort_Toric_Iol_Master ?? '',
      os_lentis_mplus_comfort_toric_imersion: item?.Os_Lentis_Mplus_Comfort_Toric_Imersion ?? '',
      os_lentis_mplus_comfort_toric_contact: item?.Os_Lentis_Mplus_Comfort_Toric_Contact ?? '',
      os_at_lisa_iol_master: item?.Check_Os_Axl ?? '',
      os_at_lisa_imersion: item?.Check_Os_Axl ?? '',
      os_at_lisa_contact: item?.Check_Os_Axl ?? '',
      os_lentis_t_plus_iol_master: item?.Os_Lentis_T_Plus_Iol_Master ?? '',
      os_lentis_t_plus_imersion: item?.Os_Lentis_T_Plus_Imersion ?? '',
      os_lentis_t_plus_contact: item?.Os_Lentis_T_Plus_Contact ?? '',
      os_at_lisa_tri_839mp_iol_master: item?.Os_At_Lisa_Tri_839mp_Iol_Master ?? '',
      os_at_lisa_tri_839mp_imersion: item?.Os_At_Lisa_Tri_839mp_Imersion ?? '',
      os_at_lisa_tri_839mp_contact: item?.Os_At_Lisa_Tri_839mp_Contact ?? '',
      os_revive_iol_master: item?.Os_Revive_Iol_Master ?? '',
      os_revive_imersion: item?.Os_Revive_Imersion ?? '',
      os_revive_contact: item?.Os_Revive_Contact ?? '',
      os_lucidis_iol_master: item?.Os_Lucidis_Iol_Master ?? '',
      os_lucidis_imersion: item?.Os_Lucidis_Imersion ?? '',
      os_lucidis_contact: item?.Os_Lucidis_Contact ?? '',
      os_oc_ls_30_iol_master: item?.Os_Oc_Ls_30_Iol_Master ?? '',
      os_oc_ls_30_imersion: item?.Os_Oc_Ls_30_Imersion ?? '',
      os_oc_ls_30_contact: item?.Os_Oc_Ls_30_Contact ?? '',
      os_oc_ls_iol_master: item?.Os_Oc_Ls_Iol_Master ?? '',
      os_oc_ls_imersion: item?.Os_Oc_Ls_Imersion ?? '',
      os_oc_ls_contact: item?.Os_Oc_Ls_Contact ?? '',
      os_oc_ls_15_iol_master: item?.Os_Oc_Ls_15_Iol_Master ?? '',
      os_oc_ls_15_imersion: item?.Os_Oc_Ls_15_Imersion ?? '',
      os_oc_ls_15_contact: item?.Os_Oc_Ls_15_Contact ?? '',
      os_rf_22_l_iol_master: item?.Os_RF_22_L_Iol_Master ?? '',
      os_rf_22_l_imersion: item?.Os_RF_22_L_Imersion ?? '',
      os_rf_22_l_contact: item?.Os_RF_22_L_Contact ?? '',
      os_rf_31_pl_iol_master: item?.Os_RF_31_PL_Iol_Master ?? '',
      os_rf_31_pl_imersion: item?.Os_RF_31_PL_Imersion ?? '',
      os_rf_31_pl_contact: item?.Os_RF_31_PL_Contact ?? '',

      check_od_asqelio: item?.Check_Od_Asqelio ?? '1',
      check_od_at_lisa_tri_839mp: item?.Check_Od_At_Lisa_Tri_839mp ?? '1',
      check_od_axl: item?.Check_Od_Axl ?? '1',
      check_od_b_lomb_ao: item?.Check_Od_B_Lomb_Ao ?? '',
      check_od_b_lomb_ao_m160: item?.Check_Od_B_Lomb_Ao_M160 ?? '',
      check_od_c_flex: item?.Check_Od_C_Flex ?? '',
      check_od_ca: item?.Check_Od_Ca ?? '1',
      check_od_cl: item?.Check_Od_Cl ?? '1',
      check_od_ct_asphina_409mp: item?.Check_Od_Ct_Asphina_409mp ?? '1',
      check_od_fold_asp: item?.Check_Od_Fold_Asp ?? '1',
      check_od_fold_sp: item?.Check_Od_Fold_Sp ?? '1',
      check_od_i_pure: item?.Check_Od_I_Pure ?? '',
      check_od_innova_aspheric: item?.Check_Od_Innova_Aspheric ?? '',
      check_od_lenstec_sbl: item?.Check_Od_Lenstec_Sbl ?? '1',
      check_od_lentis_l313_monofocal: item?.Check_Od_Lentis_L313_Monofocal ?? '',
      check_od_lentis_mplus_comfort: item?.Check_Od_Lentis_Mplus_Comfort ?? '',
      check_od_lentis_mplus_comfort_toric: item?.Check_Od_Lentis_Mplus_Comfort_Toric ?? '',
      check_od_lentis_t_plus: item?.Check_Od_Lentis_T_Plus ?? '',
      check_od_lucidis: item?.Check_Od_Lucidis ?? '1',
      check_od_nano: item?.Check_Od_Nano ?? '1',
      check_od_nano_fold: item?.Check_Od_Nano_fold ?? '',
      check_od_oc_ls: item?.Check_Od_Oc_Ls ?? '1',
      check_od_oc_ls_15: item?.Check_Od_Oc_Ls_15 ?? '',
      check_od_oc_ls_30: item?.Check_Od_Oc_Ls_30 ?? '1',
      check_od_ra_25: item?.Check_Od_Ra_25 ?? '1',
      check_od_re_01: item?.Check_Od_Re_01 ?? '1',
      check_od_revive: item?.Check_Od_Revive ?? '',
      check_od_rf_22_l: item?.Check_Od_RF_22_L ?? '1',
      check_od_rf_31_pl: item?.Check_Od_RF_31_PL ?? '1',
      check_od_rp_11: item?.Check_Od_Rp_11 ?? '',
      check_od_rp_12: item?.Check_Od_Rp_12 ?? '',
      check_od_soft_hd: item?.Check_Od_Soft_HD ?? '',
      check_od_soft_hd_plus: item?.Check_Od_Soft_HD_PLUS ?? '',
      check_od_sys_m: item?.Check_Od_Sys_M ?? '',
      check_od_sys_t: item?.Check_Od_Sys_T ?? '',
      check_od_t_ple: item?.Check_Od_T_Ple ?? '1',
      check_os_asqelio: item?.Check_Os_Asqelio ?? '1',
      check_os_at_lisa_tri_839mp: item?.Check_Os_At_Lisa_Tri_839mp ?? '1',
      check_os_b_lomb_ao: item?.Check_Os_B_Lomb_Ao ?? '',
      check_os_b_lomb_ao_m160: item?.Check_Os_B_Lomb_Ao_M160 ?? '',
      check_os_c_flex: item?.Check_Os_C_Flex ?? '',
      check_os_ca: item?.Check_Os_Ca ?? '1',
      check_os_cl: item?.Check_Os_Cl ?? '1',
      check_os_ct_asphina_409mp: item?.Check_Os_Ct_Asphina_409mp ?? '1',
      check_os_fold_asp: item?.Check_Os_Fold_Asp ?? '1',
      check_os_fold_sp: item?.Check_Os_Fold_Sp ?? '1',
      check_os_i_pure: item?.Check_Os_I_Pure ?? '',
      check_os_innova_aspheric: item?.Check_Os_Innova_Aspheric ?? '',
      check_os_lenstec_sbl: item?.Check_Os_Lenstec_Sbl ?? '1',
      check_os_lentis_l313_monofocal: item?.Check_Os_Lentis_L313_Monofocal ?? '',
      check_os_lentis_mplus_comfort: item?.Check_Os_Lentis_Mplus_Comfort ?? '',
      check_os_lentis_mplus_comfort_toric: item?.Check_Os_Lentis_Mplus_Comfort_Toric ?? '',
      check_os_lentis_t_plus: item?.Check_Os_Lentis_T_Plus ?? '',
      check_os_lucidis: item?.Check_Os_Lucidis ?? '1',
      check_os_nano: item?.Check_Os_Nano ?? '1',
      check_os_nano_fold: item?.Check_Os_Nano_fold ?? '',
      check_os_oc_ls: item?.Check_Os_Oc_Ls ?? '1',
      check_os_oc_ls_15: item?.Check_Os_Oc_Ls_15 ?? '1',
      check_os_oc_ls_30: item?.Check_Os_Oc_Ls_30 ?? '1',
      check_os_ra_25: item?.Check_Os_Ra_25 ?? '1',
      check_os_re_01: item?.Check_Os_Re_01 ?? '1',
      check_os_revive: item?.Check_Os_Revive ?? '',
      check_os_rf_22_l: item?.Check_Os_RF_22_L ?? '1',
      check_os_rf_31_pl: item?.Check_Os_RF_31_PL ?? '1',
      check_os_rp_11: item?.Check_Os_Rp_11 ?? '',
      check_os_rp_12: item?.Check_Os_Rp_12 ?? '',
      check_os_soft_hd: item?.Check_Os_Soft_HD ?? '',
      check_os_soft_hd_plus: item?.Check_Os_Soft_HD_PLUS ?? '',
      check_os_sys_m: item?.Check_Os_Sys_M ?? '',
      check_os_sys_t: item?.Check_Os_Sys_T ?? '',
      check_os_t_ple: item?.Check_Os_T_Ple ?? '1',
      dokter_pemeriksa_nama: item?.Dokter_Pemeriksa_Nama ?? '',
      dokter_pemeriksa: item?.Dokter_Pemeriksa_Id ?? '',
      perawat_pemeriksa_nama: item?.Perawat_Pemeriksa_Nama ?? '',
      perawat_pemeriksa: item?.Perawat_Pemeriksa_Id ?? '',
      catatan: item?.Catatan ?? '',
      'ttd-tanggal': (item && item && item.TTD_Tanggal) ? item.TTD_Tanggal.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      'ttd-dokter-pemeriksa': item?.TTD_Dokter_Pemeriksa ?? '',
      'id-dokter-pemeriksa': item?.Nama_Dokter_Pemeriksa ?? '',
      'ttd-perawat': item && item.TTD_Perawat ? item.TTD_Perawat : '',
      'id-perawat': item && item.ID_Perawat ? item.ID_Perawat : '',
      od_mata_dioperasi: item?.OD_Mata_Dioperasi ?? '',
      os_mata_dioperasi: item?.OS_Mata_Dioperasi ?? '',
    },
  })

  const handleSubmitForm = (value: any) => {
    if (!treatment) {
      return false;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    if (!item) {
      const params = CreateBiometricExamRequest.createFromJson({...value, ...appRequest, unit });
      ToolInspectionService().create(params)
        .then((response) => {
          if (response && response.data && response.data.data) {
            const params2 = {...appRequest, ID: response.data.data.item_id, itemId: response.data.data.item_id, unit, emr_id: response.data.data.EMR_ID};
            ToolInspectionService().view(params2)
              .then((resp) => {
                const { data } = resp.data;
                ToolInspectionService().pdfv3(PdfInspectionResultRequest.createPdfRequest({ ...data, nomor_mr: appRequest.nomor_mr, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
                  .then((res) => {
                    const { data } = res.data;
                    ToolInspectionService().addPdf({
                      emr_id: appRequest.emr_id,
                      item_id: params2.ID,
                      pdf_url: data?.url ?? '',
                    }).then(() => {
                      if (onSuccessSubmit) {
                        onSuccessSubmit();
                        return true;
                      }
                    });
                  });
              })
          }
        });
    } else {
      const params = UpdateBiometricRequest.createFromJson({...value, ...appRequest, ID: item.ID, itemId: item.ID, unit, emr_id: item.EMR_ID });
      ToolInspectionService().update(params)
        .then(() => {
          const params3 = {...appRequest, ID: item.ID, itemId: item.ID, unit, emr_id: item.EMR_ID};
          ToolInspectionService().view(params3)
            .then((resp) => {
              const { data } = resp.data;
              ToolInspectionService().pdfv3(PdfInspectionResultRequest.createPdfRequest({...data, nomor_mr: appRequest.nomor_mr, umur_lengkap: treatment?.Pasien?.Umur_Lengkap}, appRequest.emr_id))
                .then((res) => {
                  const { data } = res.data;
                  ToolInspectionService().addPdf({
                    emr_id: item.EMR_ID,
                    item_id: params3.ID,
                    pdf_url: data?.url ?? '',
                  }).then(() => {
                    if (onSuccessSubmit) {
                      onSuccessSubmit();
                      return true;
                    }
                  });
                })
            })
        });
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>

      <DicomForm
        dicom={dicom} modality={"BI"}
      />

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
                    <Input
                      id="od_mata_dioperasi"
                      type="checkbox"
                      name="od_mata_dioperasi"
                      className="me-1"
                      value="1"
                      onChange={(e) => {
                        handleCheckboxChange(e)
                      }}
                      defaultChecked={item && item?.OD_Mata_Dioperasi === "1"}
                      innerRef={register("od_mata_dioperasi") as any}
                    />{' '}
                    <Label>Mata Operasi</Label>
                  </tr>
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
                    <Input
                      id="os_mata_dioperasi"
                      type="checkbox"
                      name="os_mata_dioperasi"
                      className="me-1"
                      value="1"
                      onChange={(e) => {
                        handleCheckboxChange(e)
                      }}
                      defaultChecked={item && item?.OS_Mata_Dioperasi === "1"}
                      innerRef={register("os_mata_dioperasi") as any}
                    />{' '}
                    <Label>Mata Operasi</Label>
                  </tr>
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
                            name="os_k1"
                            innerRef={register({ required: true })}
                            invalid={errors.os_k1 && true}
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
                            name="os_k2"
                            innerRef={register({ required: true })}
                            invalid={errors.os_k2 && true}
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
                            name="os_acd"
                            innerRef={register({ required: true })}
                            invalid={errors.os_acd && true}
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
              biometricList && biometricList.map((val: any, key: number) => {
                const paramLeft = item && item[`Check_Od_${val.id}`] ? item[`Check_Od_${val.id}`] : val.checked;
                const paramRight = item && item[`Check_Os_${val.id}`] ? item[`Check_Os_${val.id}`] : val.checked;
                return (
                  <BiometricTemplate
                    key={key}
                    judul={val.name}
                    data={item}
                    defaultChecklistLeft={!!(paramLeft === '1')}
                    defaultChecklistRight={!!(paramRight === '1')}
                    name={val.id}
                    treatmentNumber={treatment ? treatment.ID_Pelayanan : ''}
                    {...{ register, errors, setValue, getValues }}
                  />
                )
              })
            }
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className="form-group" row>
        <Label for="perawat_pemeriksa_nama" md="2" sm="12">Pemeriksa</Label>
        <Col>
          <Input
            className="mt-1"
            type="select"
            id="perawat_pemeriksa"
            name="perawat_pemeriksa"
            innerRef={register()}
          >
            <option value="" disabled={true}>--</option>
            {
              nurses && Array.isArray(nurses) && nurses.map((item: any, key: number) => {
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
          />
        </Col>
      </FormGroup>

      <FormGroup className="form-group" row>
        <DateTimeInput
          name='ttd-tanggal'
          label={`Tanggal`}
          defaultValue='ttd-tanggal'
          md={2}
          {...{ register, errors }}
        />
      </FormGroup>

      <Row className="mt-2">
        <Col>
          <div className="d-flex justify-content-around my-0">
            <Signature
              label="Perawat Pemeriksa"
              type="picker"
              additionalLabel={(item && item.Nama_Perawat && item.Nama_Perawat !== '') ? item.Nama_Perawat : undefined}
              initialImage={(item && item.TTD_Perawat && item.TTD_Perawat !== '') ? item.TTD_Perawat : undefined}
              persons={nurses}
              onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)}
            />
            <Input
              type="hidden"
              name="id-perawat"
              innerRef={register()}
              invalid={errors['id-perawat'] && true}
            />
            <Input
              type="hidden"
              name="ttd-perawat"
              innerRef={register()}
              invalid={errors['ttd-perawat'] && true}
            />
          </div>
        </Col>
        <Col>
          <div className="d-flex justify-content-around my-0">
            <Signature
              label="Dokter Pemeriksa"
              type="picker"
              additionalLabel={(item && item.Nama_Dokter_Pemeriksa && item.Nama_Dokter_Pemeriksa !== '') ? item.Nama_Dokter_Pemeriksa : undefined}
              initialImage={(item && item.TTD_Dokter_Pemeriksa && item.TTD_Dokter_Pemeriksa !== '') ? item.TTD_Dokter_Pemeriksa : undefined}
              persons={doctors}
              unit='dokter'
              onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                if (isFormDoctor) {
                  handleDoctorSigned(assigner, isFormDoctor)
                }
                if (!isFormDoctor) {
                  handleDoctorSigned(assigner)
                }
              }}
            />
            <Input
              type="hidden"
              name="id-dokter-pemeriksa"
              innerRef={register()}
              invalid={errors['id-dokter-pemeriksa'] && true}
            />
            <Input
              type="hidden"
              name="ttd-dokter-pemeriksa"
              innerRef={register()}
              invalid={errors['ttd-dokter-pemeriksa'] && true}
            />
          </div>
        </Col>
      </Row>

      <FormGroup className='form-group mt-0' row>
        <div className='d-flex justify-content-center align-items-center'>
          <Label className='me-1'>Terakhir Disimpan: </Label>
          {/* <Label>{(item && item.Updated_At) ? item.Updated_At : ''}</Label> */}
          <Label>{ `${DateTimeConverter.convertToDateTimeSecond(item?.Updated_At)}` }</Label>
        </div>
      </FormGroup>

      <FormGroup className="d-flex mb-0 justify-content-center">
        <SubmitButton
          label="Simpan"
          buttonColor='primary'
          spinnerStyle={{ width: '1rem', height: '1rem' }}
          spinnerColor='light'
          processing={processing}
        />
        <Button color='warning' onClick={() => {
          if (onCancel) {
            onCancel();
          }
        }}>
          Batal
        </Button>
      </FormGroup>
    </Form>
  )
}

export default BiometricExaminationResultsForm;
