import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@src/shared/request';

export interface IBiometricExamRequest extends IAppRequest {
  'list-no-berobat': string;
  od_k1: string;
  od_k2: string;
  od_acd: string;
  check_od_axl: string;
  od_axl_iol_master: string;
  od_axl_imersion: string;
  od_axl_contact: string;
  od_fold_asp_iol_master: string;
  od_fold_asp_imersion: string;
  od_fold_asp_contact: string;
  od_fold_sp_iol_master: string;
  od_fold_sp_imersion: string;
  od_fold_sp_contact: string;
  od_ca_iol_master: string;
  od_ca_imersion: string;
  od_ca_contact: string;
  od_cl_iol_master: string;
  od_cl_imersion: string;
  od_cl_contact: string;
  od_t_ple_iol_master: string;
  od_t_ple_imersion: string;
  od_t_ple_contact: string;
  od_sys_m_iol_master: string;
  od_sys_m_imersion: string;
  od_sys_m_contact: string;
  od_sys_t_iol_master: string;
  od_sys_t_imersion: string;
  od_sys_t_contact: string;
  od_asqelio_iol_master: string;
  od_asqelio_imersion: string;
  od_asqelio_contact: string;
  od_re_01_iol_master: string;
  od_re_01_imersion: string;
  od_re_01_contact: string;
  od_rp_11_iol_master: string;
  od_rp_11_imersion: string;
  od_rp_11_contact: string;
  od_ra_25_iol_master: string;
  od_ra_25_imersion: string;
  od_ra_25_contact: string;
  od_soft_hd_plus_iol_master: string;
  od_soft_hd_plus_imersion: string;
  od_soft_hd_plus_contact: string;
  od_soft_hd_iol_master: string;
  od_soft_hd_imersion: string;
  od_soft_hd_contact: string;
  od_i_pure_iol_master: string;
  od_i_pure_imersion: string;
  od_i_pure_contact: string;
  od_lenstec_sbl_iol_master: string;
  od_lenstec_sbl_imersion: string;
  od_lenstec_sbl_contact: string;
  od_ct_asphina_409mp_iol_master: string;
  od_ct_asphina_409mp_imersion: string;
  od_ct_asphina_409mp_contact: string;
  od_nano_iol_master: string;
  od_nano_imersion: string;
  od_nano_contact: string;
  od_oc_ls_30_iol_master: string;
  od_oc_ls_30_imersion: string;
  od_oc_ls_30_contact: string;
  od_oc_ls_15_iol_master: string;
  od_oc_ls_15_imersion: string;
  od_oc_ls_15_contact: string;
  od_lentis_l313_monofocal_iol_master: string;
  od_lentis_l313_monofocal_imersion: string;
  od_lentis_l313_monofocal_contact: string;
  od_nano_fold_iol_master: string;
  od_nano_fold_imersion: string;
  od_nano_fold_contact: string;
  od_b_lomb_ao_iol_master: string;
  od_b_lomb_ao_imersion: string;
  od_b_lomb_ao_contact: string;
  od_b_lomb_ao_m160_iol_master: string;
  od_b_lomb_ao_m160_imersion: string;
  od_b_lomb_ao_m160_contact: string;
  od_innova_aspheric_iol_master: string;
  od_innova_aspheric_imersion: string;
  od_innova_aspheric_contact: string;
  od_c_flex_iol_master: string;
  od_c_flex_imersion: string;
  od_c_flex_contact: string;
  od_lentis_mplus_comfort_iol_master: string;
  od_lentis_mplus_comfort_imersion: string;
  od_lentis_mplus_comfort_contact: string;
  od_lentis_mplus_comfort_toric_iol_master: string;
  od_lentis_mplus_comfort_toric_imersion: string;
  od_lentis_mplus_comfort_toric_contact: string;
  od_at_lisa_iol_master: string;
  od_at_lisa_imersion: string;
  od_at_lisa_contact: string;
  od_lentis_t_plus_iol_master: string;
  od_lentis_t_plus_imersion: string;
  od_lentis_t_plus_contact: string;
  od_at_lisa_tri_839mp_iol_master: string;
  od_at_lisa_tri_839mp_imersion: string;
  od_at_lisa_tri_839mp_contact: string;
  od_revive_iol_master: string;
  od_revive_imersion: string;
  od_revive_contact: string;
  od_lucidis_iol_master: string;
  od_lucidis_imersion: string;
  od_lucidis_contact: string;
  od_oc_ls_iol_master: string;
  od_oc_ls_imersion: string;
  od_oc_ls_contact: string;
  od_rf_22_l_iol_master: string;
  od_rf_22_l_imersion: string;
  od_rf_22_l_contact: string;
  od_rf_31_pl_iol_master: string;
  od_rf_31_pl_imersion: string;
  od_rf_31_pl_contact: string;


  os_k1: string;
  os_k2: string;
  os_acd: string;
  check_os_axl: string;
  os_axl_iol_master: string;
  os_axl_imersion: string;
  os_axl_contact: string;
  os_fold_asp_iol_master: string;
  os_fold_asp_imersion: string;
  os_fold_asp_contact: string;
  os_fold_sp_iol_master: string;
  os_fold_sp_imersion: string;
  os_fold_sp_contact: string;
  os_ca_iol_master: string;
  os_ca_imersion: string;
  os_ca_contact: string;
  os_cl_iol_master: string;
  os_cl_imersion: string;
  os_cl_contact: string;
  os_t_ple_iol_master: string;
  os_t_ple_imersion: string;
  os_t_ple_contact: string;
  os_sys_m_iol_master: string;
  os_sys_m_imersion: string;
  os_sys_m_contact: string;
  os_sys_t_iol_master: string;
  os_sys_t_imersion: string;
  os_sys_t_contact: string;
  os_asqelio_iol_master: string;
  os_asqelio_imersion: string;
  os_asqelio_contact: string;
  os_re_01_iol_master: string;
  os_re_01_imersion: string;
  os_re_01_contact: string;
  os_rp_11_iol_master: string;
  os_rp_11_imersion: string;
  os_rp_11_contact: string;
  os_ra_25_iol_master: string;
  os_ra_25_imersion: string;
  os_ra_25_contact: string;
  os_soft_hd_plus_iol_master: string;
  os_soft_hd_plus_imersion: string;
  os_soft_hd_plus_contact: string;
  os_soft_hd_iol_master: string;
  os_soft_hd_imersion: string;
  os_soft_hd_contact: string;
  os_i_pure_iol_master: string;
  os_i_pure_imersion: string;
  os_i_pure_contact: string;
  os_lenstec_sbl_iol_master: string;
  os_lenstec_sbl_imersion: string;
  os_lenstec_sbl_contact: string;
  os_ct_asphina_409mp_iol_master: string;
  os_ct_asphina_409mp_imersion: string;
  os_ct_asphina_409mp_contact: string;
  os_nano_iol_master: string;
  os_nano_imersion: string;
  os_nano_contact: string;
  os_lentis_l313_monofocal_iol_master: string;
  os_lentis_l313_monofocal_imersion: string;
  os_lentis_l313_monofocal_contact: string;
  os_nano_fold_iol_master: string;
  os_nano_fold_imersion: string;
  os_nano_fold_contact: string;
  os_b_lomb_ao_iol_master: string;
  os_b_lomb_ao_imersion: string;
  os_b_lomb_ao_contact: string;
  os_b_lomb_ao_m160_iol_master: string;
  os_b_lomb_ao_m160_imersion: string;
  os_b_lomb_ao_m160_contact: string;
  os_innova_aspheric_iol_master: string;
  os_innova_aspheric_imersion: string;
  os_innova_aspheric_contact: string;
  os_c_flex_iol_master: string;
  os_c_flex_imersion: string;
  os_c_flex_contact: string;
  os_lentis_mplus_comfort_iol_master: string;
  os_lentis_mplus_comfort_imersion: string;
  os_lentis_mplus_comfort_contact: string;
  os_lentis_mplus_comfort_toric_iol_master: string;
  os_lentis_mplus_comfort_toric_imersion: string;
  os_lentis_mplus_comfort_toric_contact: string;
  os_at_lisa_iol_master: string;
  os_at_lisa_imersion: string;
  os_at_lisa_contact: string;
  os_lentis_t_plus_iol_master: string;
  os_lentis_t_plus_imersion: string;
  os_lentis_t_plus_contact: string;
  os_at_lisa_tri_839mp_iol_master: string;
  os_at_lisa_tri_839mp_imersion: string;
  os_at_lisa_tri_839mp_contact: string;
  os_revive_iol_master: string;
  os_revive_imersion: string;
  os_revive_contact: string;
  os_lucidis_iol_master: string;
  os_lucidis_imersion: string;
  os_lucidis_contact: string;
  os_oc_ls_30_iol_master: string;
  os_oc_ls_30_imersion: string;
  os_oc_ls_30_contact: string;
  os_oc_ls_iol_master: string;
  os_oc_ls_imersion: string;
  os_oc_ls_contact: string;
  os_oc_ls_15_iol_master: string;
  os_oc_ls_15_imersion: string;
  os_oc_ls_15_contact: string;
  os_rf_22_l_iol_master: string;
  os_rf_22_l_imersion: string;
  os_rf_22_l_contact: string;
  os_rf_31_pl_iol_master: string;
  os_rf_31_pl_imersion: string;
  os_rf_31_pl_contact: string;

  dokter_pemeriksa: string;
  catatan: string;
  ttd_tanggal: string;
  'ttd-dokter-pemeriksa': string;
  'id-dokter-pemeriksa': string;
}

export class BiometricExamRequest extends AppRequest {
  'list-no-berobat': string;
  od_k1: string;
  od_k2: string;
  od_acd: string;
  check_od_axl: string;
  od_axl_iol_master: string;
  od_axl_imersion: string;
  od_axl_contact: string;
  od_fold_asp_iol_master: string;
  od_fold_asp_imersion: string;
  od_fold_asp_contact: string;
  od_fold_sp_iol_master: string;
  od_fold_sp_imersion: string;
  od_fold_sp_contact: string;
  od_ca_iol_master: string;
  od_ca_imersion: string;
  od_ca_contact: string;
  od_cl_iol_master: string;
  od_cl_imersion: string;
  od_cl_contact: string;
  od_t_ple_iol_master: string;
  od_t_ple_imersion: string;
  od_t_ple_contact: string;
  od_sys_m_iol_master: string;
  od_sys_m_imersion: string;
  od_sys_m_contact: string;
  od_sys_t_iol_master: string;
  od_sys_t_imersion: string;
  od_sys_t_contact: string;
  od_asqelio_iol_master: string;
  od_asqelio_imersion: string;
  od_asqelio_contact: string;
  od_re_01_iol_master: string;
  od_re_01_imersion: string;
  od_re_01_contact: string;
  od_rp_11_iol_master: string;
  od_rp_11_imersion: string;
  od_rp_11_contact: string;
  od_ra_25_iol_master: string;
  od_ra_25_imersion: string;
  od_ra_25_contact: string;
  od_soft_hd_plus_iol_master: string;
  od_soft_hd_plus_imersion: string;
  od_soft_hd_plus_contact: string;
  od_soft_hd_iol_master: string;
  od_soft_hd_imersion: string;
  od_soft_hd_contact: string;
  od_i_pure_iol_master: string;
  od_i_pure_imersion: string;
  od_i_pure_contact: string;
  od_lenstec_sbl_iol_master: string;
  od_lenstec_sbl_imersion: string;
  od_lenstec_sbl_contact: string;
  od_ct_asphina_409mp_iol_master: string;
  od_ct_asphina_409mp_imersion: string;
  od_ct_asphina_409mp_contact: string;
  od_nano_iol_master: string;
  od_nano_imersion: string;
  od_nano_contact: string;
  od_oc_ls_30_iol_master: string;
  od_oc_ls_30_imersion: string;
  od_oc_ls_30_contact: string;
  od_oc_ls_15_iol_master: string;
  od_oc_ls_15_imersion: string;
  od_oc_ls_15_contact: string;
  od_lentis_l313_monofocal_iol_master: string;
  od_lentis_l313_monofocal_imersion: string;
  od_lentis_l313_monofocal_contact: string;
  od_nano_fold_iol_master: string;
  od_nano_fold_imersion: string;
  od_nano_fold_contact: string;
  od_b_lomb_ao_iol_master: string;
  od_b_lomb_ao_imersion: string;
  od_b_lomb_ao_contact: string;
  od_b_lomb_ao_m160_iol_master: string;
  od_b_lomb_ao_m160_imersion: string;
  od_b_lomb_ao_m160_contact: string;
  od_innova_aspheric_iol_master: string;
  od_innova_aspheric_imersion: string;
  od_innova_aspheric_contact: string;
  od_c_flex_iol_master: string;
  od_c_flex_imersion: string;
  od_c_flex_contact: string;
  od_lentis_mplus_comfort_iol_master: string;
  od_lentis_mplus_comfort_imersion: string;
  od_lentis_mplus_comfort_contact: string;
  od_lentis_mplus_comfort_toric_iol_master: string;
  od_lentis_mplus_comfort_toric_imersion: string;
  od_lentis_mplus_comfort_toric_contact: string;
  od_at_lisa_iol_master: string;
  od_at_lisa_imersion: string;
  od_at_lisa_contact: string;
  od_lentis_t_plus_iol_master: string;
  od_lentis_t_plus_imersion: string;
  od_lentis_t_plus_contact: string;
  od_at_lisa_tri_839mp_iol_master: string;
  od_at_lisa_tri_839mp_imersion: string;
  od_at_lisa_tri_839mp_contact: string;
  od_revive_iol_master: string;
  od_revive_imersion: string;
  od_revive_contact: string;
  od_lucidis_iol_master: string;
  od_lucidis_imersion: string;
  od_lucidis_contact: string;
  od_oc_ls_iol_master: string;
  od_oc_ls_imersion: string;
  od_oc_ls_contact: string;
  od_rf_22_l_iol_master: string;
  od_rf_22_l_imersion: string;
  od_rf_22_l_contact: string;
  od_rf_31_pl_iol_master: string;
  od_rf_31_pl_imersion: string;
  od_rf_31_pl_contact: string;

  os_k1: string;
  os_k2: string;
  os_acd: string;
  check_os_axl: string;
  os_axl_iol_master: string;
  os_axl_imersion: string;
  os_axl_contact: string;
  os_fold_asp_iol_master: string;
  os_fold_asp_imersion: string;
  os_fold_asp_contact: string;
  os_fold_sp_iol_master: string;
  os_fold_sp_imersion: string;
  os_fold_sp_contact: string;
  os_ca_iol_master: string;
  os_ca_imersion: string;
  os_ca_contact: string;
  os_cl_iol_master: string;
  os_cl_imersion: string;
  os_cl_contact: string;
  os_t_ple_iol_master: string;
  os_t_ple_imersion: string;
  os_t_ple_contact: string;
  os_sys_m_iol_master: string;
  os_sys_m_imersion: string;
  os_sys_m_contact: string;
  os_sys_t_iol_master: string;
  os_sys_t_imersion: string;
  os_sys_t_contact: string;
  os_asqelio_iol_master: string;
  os_asqelio_imersion: string;
  os_asqelio_contact: string;
  os_re_01_iol_master: string;
  os_re_01_imersion: string;
  os_re_01_contact: string;
  os_rp_11_iol_master: string;
  os_rp_11_imersion: string;
  os_rp_11_contact: string;
  os_ra_25_iol_master: string;
  os_ra_25_imersion: string;
  os_ra_25_contact: string;
  os_soft_hd_plus_iol_master: string;
  os_soft_hd_plus_imersion: string;
  os_soft_hd_plus_contact: string;
  os_soft_hd_iol_master: string;
  os_soft_hd_imersion: string;
  os_soft_hd_contact: string;
  os_i_pure_iol_master: string;
  os_i_pure_imersion: string;
  os_i_pure_contact: string;
  os_lenstec_sbl_iol_master: string;
  os_lenstec_sbl_imersion: string;
  os_lenstec_sbl_contact: string;
  os_ct_asphina_409mp_iol_master: string;
  os_ct_asphina_409mp_imersion: string;
  os_ct_asphina_409mp_contact: string;
  os_nano_iol_master: string;
  os_nano_imersion: string;
  os_nano_contact: string;
  os_lentis_l313_monofocal_iol_master: string;
  os_lentis_l313_monofocal_imersion: string;
  os_lentis_l313_monofocal_contact: string;
  os_nano_fold_iol_master: string;
  os_nano_fold_imersion: string;
  os_nano_fold_contact: string;
  os_b_lomb_ao_iol_master: string;
  os_b_lomb_ao_imersion: string;
  os_b_lomb_ao_contact: string;
  os_b_lomb_ao_m160_iol_master: string;
  os_b_lomb_ao_m160_imersion: string;
  os_b_lomb_ao_m160_contact: string;
  os_innova_aspheric_iol_master: string;
  os_innova_aspheric_imersion: string;
  os_innova_aspheric_contact: string;
  os_c_flex_iol_master: string;
  os_c_flex_imersion: string;
  os_c_flex_contact: string;
  os_lentis_mplus_comfort_iol_master: string;
  os_lentis_mplus_comfort_imersion: string;
  os_lentis_mplus_comfort_contact: string;
  os_lentis_mplus_comfort_toric_iol_master: string;
  os_lentis_mplus_comfort_toric_imersion: string;
  os_lentis_mplus_comfort_toric_contact: string;
  os_at_lisa_iol_master: string;
  os_at_lisa_imersion: string;
  os_at_lisa_contact: string;
  os_lentis_t_plus_iol_master: string;
  os_lentis_t_plus_imersion: string;
  os_lentis_t_plus_contact: string;
  os_at_lisa_tri_839mp_iol_master: string;
  os_at_lisa_tri_839mp_imersion: string;
  os_at_lisa_tri_839mp_contact: string;
  os_revive_iol_master: string;
  os_revive_imersion: string;
  os_revive_contact: string;
  os_lucidis_iol_master: string;
  os_lucidis_imersion: string;
  os_lucidis_contact: string;
  os_oc_ls_30_iol_master: string;
  os_oc_ls_30_imersion: string;
  os_oc_ls_30_contact: string;
  os_oc_ls_iol_master: string;
  os_oc_ls_imersion: string;
  os_oc_ls_contact: string;
  os_oc_ls_15_iol_master: string;
  os_oc_ls_15_imersion: string;
  os_oc_ls_15_contact: string;
  os_rf_22_l_iol_master: string;
  os_rf_22_l_imersion: string;
  os_rf_22_l_contact: string;
  os_rf_31_pl_iol_master: string;
  os_rf_31_pl_imersion: string;
  os_rf_31_pl_contact: string;

  dokter_pemeriksa: string;
  catatan: string;
  ttd_tanggal: string;
  'ttd-dokter-pemeriksa': string;
  'id-dokter-pemeriksa': string;

  constructor(request: IBiometricExamRequest) {
    super(request);
    this['list-no-berobat'] = request['list-no-berobat'];
    this.od_k1 = request.od_k1;
    this.od_k2 = request.od_k2;
    this.od_acd = request.od_acd;
    this.check_od_axl = request.check_od_axl;
    this.od_axl_iol_master = request.od_axl_iol_master;
    this.od_axl_imersion = request.od_axl_imersion;
    this.od_axl_contact = request.od_axl_contact;
    this.od_fold_asp_iol_master = request.od_fold_asp_iol_master;
    this.od_fold_asp_imersion = request.od_fold_asp_imersion;
    this.od_fold_asp_contact = request.od_fold_asp_contact;
    this.od_fold_sp_iol_master = request.od_fold_sp_iol_master;
    this.od_fold_sp_imersion = request.od_fold_sp_imersion;
    this.od_fold_sp_contact = request.od_fold_sp_contact;
    this.od_ca_iol_master = request.od_ca_iol_master;
    this.od_ca_imersion = request.od_ca_imersion;
    this.od_ca_contact = request.od_ca_contact;
    this.od_cl_iol_master = request.od_cl_iol_master;
    this.od_cl_imersion = request.od_cl_imersion;
    this.od_cl_contact = request.od_cl_contact;
    this.od_t_ple_iol_master = request.od_t_ple_iol_master;
    this.od_t_ple_imersion = request.od_t_ple_imersion;
    this.od_t_ple_contact = request.od_t_ple_contact;
    this.od_sys_m_iol_master = request.od_sys_m_iol_master;
    this.od_sys_m_imersion = request.od_sys_m_imersion;
    this.od_sys_m_contact = request.od_sys_m_contact;
    this.od_sys_t_iol_master = request.od_sys_t_iol_master;
    this.od_sys_t_imersion = request.od_sys_t_imersion;
    this.od_sys_t_contact = request.od_sys_t_contact;
    this.od_asqelio_iol_master = request.od_asqelio_iol_master;
    this.od_asqelio_imersion = request.od_asqelio_imersion;
    this.od_asqelio_contact = request.od_asqelio_contact;
    this.od_re_01_iol_master = request.od_re_01_iol_master;
    this.od_re_01_imersion = request.od_re_01_imersion;
    this.od_re_01_contact = request.od_re_01_contact;
    this.od_rp_11_iol_master = request.od_rp_11_iol_master;
    this.od_rp_11_imersion = request.od_rp_11_imersion;
    this.od_rp_11_contact = request.od_rp_11_contact;
    this.od_ra_25_iol_master = request.od_ra_25_iol_master;
    this.od_ra_25_imersion = request.od_ra_25_imersion;
    this.od_ra_25_contact = request.od_ra_25_contact;
    this.od_soft_hd_plus_iol_master = request.od_soft_hd_plus_iol_master;
    this.od_soft_hd_plus_imersion = request.od_soft_hd_plus_imersion;
    this.od_soft_hd_plus_contact = request.od_soft_hd_plus_contact;
    this.od_soft_hd_iol_master = request.od_soft_hd_iol_master;
    this.od_soft_hd_imersion = request.od_soft_hd_imersion;
    this.od_soft_hd_contact = request.od_soft_hd_contact;
    this.od_i_pure_iol_master = request.od_i_pure_iol_master;
    this.od_i_pure_imersion = request.od_i_pure_imersion;
    this.od_i_pure_contact = request.od_i_pure_contact;
    this.od_lenstec_sbl_iol_master = request.od_lenstec_sbl_iol_master;
    this.od_lenstec_sbl_imersion = request.od_lenstec_sbl_imersion;
    this.od_lenstec_sbl_contact = request.od_lenstec_sbl_contact;
    this.od_ct_asphina_409mp_iol_master = request.od_ct_asphina_409mp_iol_master;
    this.od_ct_asphina_409mp_imersion = request.od_ct_asphina_409mp_imersion;
    this.od_ct_asphina_409mp_contact = request.od_ct_asphina_409mp_contact;
    this.od_nano_iol_master = request.od_nano_iol_master;
    this.od_nano_imersion = request.od_nano_imersion;
    this.od_nano_contact = request.od_nano_contact;
    this.od_oc_ls_30_iol_master = request.od_oc_ls_30_iol_master;
    this.od_oc_ls_30_imersion = request.od_oc_ls_30_imersion;
    this.od_oc_ls_30_contact = request.od_oc_ls_30_contact;
    this.od_oc_ls_15_iol_master = request.od_oc_ls_15_iol_master;
    this.od_oc_ls_15_imersion = request.od_oc_ls_15_imersion;
    this.od_oc_ls_15_contact = request.od_oc_ls_15_contact;
    this.od_lentis_l313_monofocal_iol_master = request.od_lentis_l313_monofocal_iol_master;
    this.od_lentis_l313_monofocal_imersion = request.od_lentis_l313_monofocal_imersion;
    this.od_lentis_l313_monofocal_contact = request.od_lentis_l313_monofocal_contact;
    this.od_nano_fold_iol_master = request.od_nano_fold_iol_master;
    this.od_nano_fold_imersion = request.od_nano_fold_imersion;
    this.od_nano_fold_contact = request.od_nano_fold_contact;
    this.od_b_lomb_ao_iol_master = request.od_b_lomb_ao_iol_master;
    this.od_b_lomb_ao_imersion = request.od_b_lomb_ao_imersion;
    this.od_b_lomb_ao_contact = request.od_b_lomb_ao_contact;
    this.od_b_lomb_ao_m160_iol_master = request.od_b_lomb_ao_m160_iol_master;
    this.od_b_lomb_ao_m160_imersion = request.od_b_lomb_ao_m160_imersion;
    this.od_b_lomb_ao_m160_contact = request.od_b_lomb_ao_m160_contact;
    this.od_innova_aspheric_iol_master = request.od_innova_aspheric_iol_master;
    this.od_innova_aspheric_imersion = request.od_innova_aspheric_imersion;
    this.od_innova_aspheric_contact = request.od_innova_aspheric_contact;
    this.od_c_flex_iol_master = request.od_c_flex_iol_master;
    this.od_c_flex_imersion = request.od_c_flex_imersion;
    this.od_c_flex_contact = request.od_c_flex_contact;
    this.od_lentis_mplus_comfort_iol_master = request.od_lentis_mplus_comfort_iol_master;
    this.od_lentis_mplus_comfort_imersion = request.od_lentis_mplus_comfort_imersion;
    this.od_lentis_mplus_comfort_contact = request.od_lentis_mplus_comfort_contact;
    this.od_lentis_mplus_comfort_toric_iol_master = request.od_lentis_mplus_comfort_toric_iol_master;
    this.od_lentis_mplus_comfort_toric_imersion = request.od_lentis_mplus_comfort_toric_imersion;
    this.od_lentis_mplus_comfort_toric_contact = request.od_lentis_mplus_comfort_toric_contact;
    this.od_at_lisa_iol_master = request.od_at_lisa_iol_master;
    this.od_at_lisa_imersion = request.od_at_lisa_imersion;
    this.od_at_lisa_contact = request.od_at_lisa_contact;
    this.od_lentis_t_plus_iol_master = request.od_lentis_t_plus_iol_master;
    this.od_lentis_t_plus_imersion = request.od_lentis_t_plus_imersion;
    this.od_lentis_t_plus_contact = request.od_lentis_t_plus_contact;
    this.od_at_lisa_tri_839mp_iol_master = request.od_at_lisa_tri_839mp_iol_master;
    this.od_at_lisa_tri_839mp_imersion = request.od_at_lisa_tri_839mp_imersion;
    this.od_at_lisa_tri_839mp_contact = request.od_at_lisa_tri_839mp_contact;
    this.od_revive_iol_master = request.od_revive_iol_master;
    this.od_revive_imersion = request.od_revive_imersion;
    this.od_revive_contact = request.od_revive_contact;
    this.od_lucidis_iol_master = request.od_lucidis_iol_master;
    this.od_lucidis_imersion = request.od_lucidis_imersion;
    this.od_lucidis_contact = request.od_lucidis_contact;
    this.od_oc_ls_iol_master = request.od_oc_ls_iol_master;
    this.od_oc_ls_imersion = request.od_oc_ls_imersion;
    this.od_oc_ls_contact = request.od_oc_ls_contact;
    this.od_rf_22_l_iol_master = request.od_rf_22_l_iol_master;
    this.od_rf_22_l_imersion = request.od_rf_22_l_imersion;
    this.od_rf_22_l_contact = request.od_rf_22_l_contact;
    this.od_rf_31_pl_iol_master = request.od_rf_31_pl_iol_master;
    this.od_rf_31_pl_imersion = request.od_rf_31_pl_imersion;
    this.od_rf_31_pl_contact = request.od_rf_31_pl_contact;

    this.os_k1 = request.os_k1;
    this.os_k2 = request.os_k2;
    this.os_acd = request.os_acd;
    this.check_os_axl = request.check_os_axl;
    this.os_axl_iol_master = request.os_axl_iol_master;
    this.os_axl_imersion = request.os_axl_imersion;
    this.os_axl_contact = request.os_axl_contact;
    this.os_fold_asp_iol_master = request.os_fold_asp_iol_master;
    this.os_fold_asp_imersion = request.os_fold_asp_imersion;
    this.os_fold_asp_contact = request.os_fold_asp_contact;
    this.os_fold_sp_iol_master = request.os_fold_sp_iol_master;
    this.os_fold_sp_imersion = request.os_fold_sp_imersion;
    this.os_fold_sp_contact = request.os_fold_sp_contact;
    this.os_ca_iol_master = request.os_ca_iol_master;
    this.os_ca_imersion = request.os_ca_imersion;
    this.os_ca_contact = request.os_ca_contact;
    this.os_cl_iol_master = request.os_cl_iol_master;
    this.os_cl_imersion = request.os_cl_imersion;
    this.os_cl_contact = request.os_cl_contact;
    this.os_t_ple_iol_master = request.os_t_ple_iol_master;
    this.os_t_ple_imersion = request.os_t_ple_imersion;
    this.os_t_ple_contact = request.os_t_ple_contact;
    this.os_sys_m_iol_master = request.os_sys_m_iol_master;
    this.os_sys_m_imersion = request.os_sys_m_imersion;
    this.os_sys_m_contact = request.os_sys_m_contact;
    this.os_sys_t_iol_master = request.os_sys_t_iol_master;
    this.os_sys_t_imersion = request.os_sys_t_imersion;
    this.os_sys_t_contact = request.os_sys_t_contact;
    this.os_asqelio_iol_master = request.os_asqelio_iol_master;
    this.os_asqelio_imersion = request.os_asqelio_imersion;
    this.os_asqelio_contact = request.os_asqelio_contact;
    this.os_re_01_iol_master = request.os_re_01_iol_master;
    this.os_re_01_imersion = request.os_re_01_imersion;
    this.os_re_01_contact = request.os_re_01_contact;
    this.os_rp_11_iol_master = request.os_rp_11_iol_master;
    this.os_rp_11_imersion = request.os_rp_11_imersion;
    this.os_rp_11_contact = request.os_rp_11_contact;
    this.os_ra_25_iol_master = request.os_ra_25_iol_master;
    this.os_ra_25_imersion = request.os_ra_25_imersion;
    this.os_ra_25_contact = request.os_ra_25_contact;
    this.os_soft_hd_plus_iol_master = request.os_soft_hd_plus_iol_master;
    this.os_soft_hd_plus_imersion = request.os_soft_hd_plus_imersion;
    this.os_soft_hd_plus_contact = request.os_soft_hd_plus_contact;
    this.os_soft_hd_iol_master = request.os_soft_hd_iol_master;
    this.os_soft_hd_imersion = request.os_soft_hd_imersion;
    this.os_soft_hd_contact = request.os_soft_hd_contact;
    this.os_i_pure_iol_master = request.os_i_pure_iol_master;
    this.os_i_pure_imersion = request.os_i_pure_imersion;
    this.os_i_pure_contact = request.os_i_pure_contact;
    this.os_lenstec_sbl_iol_master = request.os_lenstec_sbl_iol_master;
    this.os_lenstec_sbl_imersion = request.os_lenstec_sbl_imersion;
    this.os_lenstec_sbl_contact = request.os_lenstec_sbl_contact;
    this.os_ct_asphina_409mp_iol_master = request.os_ct_asphina_409mp_iol_master;
    this.os_ct_asphina_409mp_imersion = request.os_ct_asphina_409mp_imersion;
    this.os_ct_asphina_409mp_contact = request.os_ct_asphina_409mp_contact;
    this.os_nano_iol_master = request.os_nano_iol_master;
    this.os_nano_imersion = request.os_nano_imersion;
    this.os_nano_contact = request.os_nano_contact;
    this.os_lentis_l313_monofocal_iol_master = request.os_lentis_l313_monofocal_iol_master;
    this.os_lentis_l313_monofocal_imersion = request.os_lentis_l313_monofocal_imersion;
    this.os_lentis_l313_monofocal_contact = request.os_lentis_l313_monofocal_contact;
    this.os_nano_fold_iol_master = request.os_nano_fold_iol_master;
    this.os_nano_fold_imersion = request.os_nano_fold_imersion;
    this.os_nano_fold_contact = request.os_nano_fold_contact;
    this.os_b_lomb_ao_iol_master = request.os_b_lomb_ao_iol_master;
    this.os_b_lomb_ao_imersion = request.os_b_lomb_ao_imersion;
    this.os_b_lomb_ao_contact = request.os_b_lomb_ao_contact;
    this.os_b_lomb_ao_m160_iol_master = request.os_b_lomb_ao_m160_iol_master;
    this.os_b_lomb_ao_m160_imersion = request.os_b_lomb_ao_m160_imersion;
    this.os_b_lomb_ao_m160_contact = request.os_b_lomb_ao_m160_contact;
    this.os_innova_aspheric_iol_master = request.os_innova_aspheric_iol_master;
    this.os_innova_aspheric_imersion = request.os_innova_aspheric_imersion;
    this.os_innova_aspheric_contact = request.os_innova_aspheric_contact;
    this.os_c_flex_iol_master = request.os_c_flex_iol_master;
    this.os_c_flex_imersion = request.os_c_flex_imersion;
    this.os_c_flex_contact = request.os_c_flex_contact;
    this.os_lentis_mplus_comfort_iol_master = request.os_lentis_mplus_comfort_iol_master;
    this.os_lentis_mplus_comfort_imersion = request.os_lentis_mplus_comfort_imersion;
    this.os_lentis_mplus_comfort_contact = request.os_lentis_mplus_comfort_contact;
    this.os_lentis_mplus_comfort_toric_iol_master = request.os_lentis_mplus_comfort_toric_iol_master;
    this.os_lentis_mplus_comfort_toric_imersion = request.os_lentis_mplus_comfort_toric_imersion;
    this.os_lentis_mplus_comfort_toric_contact = request.os_lentis_mplus_comfort_toric_contact;
    this.os_at_lisa_iol_master = request.os_at_lisa_iol_master;
    this.os_at_lisa_imersion = request.os_at_lisa_imersion;
    this.os_at_lisa_contact = request.os_at_lisa_contact;
    this.os_lentis_t_plus_iol_master = request.os_lentis_t_plus_iol_master;
    this.os_lentis_t_plus_imersion = request.os_lentis_t_plus_imersion;
    this.os_lentis_t_plus_contact = request.os_lentis_t_plus_contact;
    this.os_at_lisa_tri_839mp_iol_master = request.os_at_lisa_tri_839mp_iol_master;
    this.os_at_lisa_tri_839mp_imersion = request.os_at_lisa_tri_839mp_imersion;
    this.os_at_lisa_tri_839mp_contact = request.os_at_lisa_tri_839mp_contact;
    this.os_revive_iol_master = request.os_revive_iol_master;
    this.os_revive_imersion = request.os_revive_imersion;
    this.os_revive_contact = request.os_revive_contact;
    this.os_lucidis_iol_master = request.os_lucidis_iol_master;
    this.os_lucidis_imersion = request.os_lucidis_imersion;
    this.os_lucidis_contact = request.os_lucidis_contact;
    this.os_oc_ls_30_iol_master = request.os_oc_ls_30_iol_master;
    this.os_oc_ls_30_imersion = request.os_oc_ls_30_imersion;
    this.os_oc_ls_30_contact = request.os_oc_ls_30_contact;
    this.os_oc_ls_iol_master = request.os_oc_ls_iol_master;
    this.os_oc_ls_imersion = request.os_oc_ls_imersion;
    this.os_oc_ls_contact = request.os_oc_ls_imersion;
    this.os_oc_ls_15_iol_master = request.os_oc_ls_15_iol_master;
    this.os_oc_ls_15_imersion = request.os_oc_ls_15_imersion;
    this.os_oc_ls_15_contact = request.os_oc_ls_15_contact;
    this.os_rf_22_l_iol_master = request.os_rf_22_l_iol_master;
    this.os_rf_22_l_imersion = request.os_rf_22_l_imersion;
    this.os_rf_22_l_contact = request.os_rf_22_l_contact;
    this.os_rf_31_pl_iol_master = request.os_rf_31_pl_iol_master;
    this.os_rf_31_pl_imersion = request.os_rf_31_pl_imersion;
    this.os_rf_31_pl_contact = request.os_rf_31_pl_contact;
    this.dokter_pemeriksa = request.dokter_pemeriksa;
    this.catatan = request.catatan;
    this.ttd_tanggal = request.ttd_tanggal;
    this['ttd-dokter-pemeriksa'] = request['ttd-dokter-pemeriksa'];
    this['id-dokter-pemeriksa'] = request['id-dokter-pemeriksa'];
  }

  static schema() {
    return yup.object().shape({
      "list-no-berobat":  yup.string(),
      od_k1: yup.string(),
      od_k2: yup.string(),
      od_acd: yup.string(),
      check_od_axl: yup.string(),
      od_axl_iol_master: yup.string(),
      od_axl_imersion: yup.string(),
      od_axl_contact: yup.string(),
      od_fold_asp_iol_master: yup.string(),
      od_fold_asp_imersion: yup.string(),
      od_fold_asp_contact: yup.string(),
      od_fold_sp_iol_master: yup.string(),
      od_fold_sp_imersion: yup.string(),
      od_fold_sp_contact: yup.string(),
      od_ca_iol_master: yup.string(),
      od_ca_imersion: yup.string(),
      od_ca_contact: yup.string(),
      od_cl_iol_master: yup.string(),
      od_cl_imersion: yup.string(),
      od_cl_contact: yup.string(),
      od_t_ple_iol_master: yup.string(),
      od_t_ple_imersion: yup.string(),
      od_t_ple_contact: yup.string(),
      od_sys_m_iol_master: yup.string(),
      od_sys_m_imersion: yup.string(),
      od_sys_m_contact: yup.string(),
      od_sys_t_iol_master: yup.string(),
      od_sys_t_imersion: yup.string(),
      od_sys_t_contact: yup.string(),
      od_asqelio_iol_master: yup.string(),
      od_asqelio_imersion: yup.string(),
      od_asqelio_contact: yup.string(),
      od_re_01_iol_master: yup.string(),
      od_re_01_imersion: yup.string(),
      od_re_01_contact: yup.string(),
      od_rp_11_iol_master: yup.string(),
      od_rp_11_imersion: yup.string(),
      od_rp_11_contact: yup.string(),
      od_ra_25_iol_master: yup.string(),
      od_ra_25_imersion: yup.string(),
      od_ra_25_contact: yup.string(),
      od_soft_hd_plus_iol_master: yup.string(),
      od_soft_hd_plus_imersion: yup.string(),
      od_soft_hd_plus_contact: yup.string(),
      od_soft_hd_iol_master: yup.string(),
      od_soft_hd_imersion: yup.string(),
      od_soft_hd_contact: yup.string(),
      od_i_pure_iol_master: yup.string(),
      od_i_pure_imersion: yup.string(),
      od_i_pure_contact: yup.string(),
      od_lenstec_sbl_iol_master: yup.string(),
      od_lenstec_sbl_imersion: yup.string(),
      od_lenstec_sbl_contact: yup.string(),
      od_ct_asphina_409mp_iol_master: yup.string(),
      od_ct_asphina_409mp_imersion: yup.string(),
      od_ct_asphina_409mp_contact: yup.string(),
      od_nano_iol_master: yup.string(),
      od_nano_imersion: yup.string(),
      od_nano_contact: yup.string(),
      od_oc_ls_30_iol_master: yup.string(),
      od_oc_ls_30_imersion: yup.string(),
      od_oc_ls_30_contact: yup.string(),
      od_oc_ls_15_iol_master: yup.string(),
      od_oc_ls_15_imersion: yup.string(),
      od_oc_ls_15_contact: yup.string(),
      od_lentis_l313_monofocal_iol_master: yup.string(),
      od_lentis_l313_monofocal_imersion: yup.string(),
      od_lentis_l313_monofocal_contact: yup.string(),
      od_nano_fold_iol_master: yup.string(),
      od_nano_fold_imersion: yup.string(),
      od_nano_fold_contact: yup.string(),
      od_b_lomb_ao_iol_master: yup.string(),
      od_b_lomb_ao_imersion: yup.string(),
      od_b_lomb_ao_contact: yup.string(),
      od_b_lomb_ao_m160_iol_master: yup.string(),
      od_b_lomb_ao_m160_imersion: yup.string(),
      od_b_lomb_ao_m160_contact: yup.string(),
      od_innova_aspheric_iol_master: yup.string(),
      od_innova_aspheric_imersion: yup.string(),
      od_innova_aspheric_contact: yup.string(),
      od_c_flex_iol_master: yup.string(),
      od_c_flex_imersion: yup.string(),
      od_c_flex_contact: yup.string(),
      od_lentis_mplus_comfort_iol_master: yup.string(),
      od_lentis_mplus_comfort_imersion: yup.string(),
      od_lentis_mplus_comfort_contact: yup.string(),
      od_lentis_mplus_comfort_toric_iol_master: yup.string(),
      od_lentis_mplus_comfort_toric_imersion: yup.string(),
      od_lentis_mplus_comfort_toric_contact: yup.string(),
      od_at_lisa_iol_master: yup.string(),
      od_at_lisa_imersion: yup.string(),
      od_at_lisa_contact: yup.string(),
      od_lentis_t_plus_iol_master: yup.string(),
      od_lentis_t_plus_imersion: yup.string(),
      od_lentis_t_plus_contact: yup.string(),
      od_at_lisa_tri_839mp_iol_master: yup.string(),
      od_at_lisa_tri_839mp_imersion: yup.string(),
      od_at_lisa_tri_839mp_contact: yup.string(),
      od_revive_iol_master: yup.string(),
      od_revive_imersion: yup.string(),
      od_revive_contact: yup.string(),
      od_lucidis_iol_master: yup.string(),
      od_lucidis_imersion: yup.string(),
      od_lucidis_contact: yup.string(),
      od_oc_ls_iol_master: yup.string(),
      od_oc_ls_imersion: yup.string(),
      od_oc_ls_contact: yup.string(),
      od_rf_22_l_iol_master: yup.string(),
      od_rf_22_l_imersion: yup.string(),
      od_rf_22_l_contact: yup.string(),
      od_rf_31_pl_iol_master: yup.string(),
      od_rf_31_pl_imersion: yup.string(),
      od_rf_31_pl_contact: yup.string(),

      os_k1: yup.string(),
      os_k2: yup.string(),
      os_acd: yup.string(),
      check_os_axl: yup.string(),
      os_axl_iol_master: yup.string(),
      os_axl_imersion: yup.string(),
      os_axl_contact: yup.string(),
      os_fold_asp_iol_master: yup.string(),
      os_fold_asp_imersion: yup.string(),
      os_fold_asp_contact: yup.string(),
      os_fold_sp_iol_master: yup.string(),
      os_fold_sp_imersion: yup.string(),
      os_fold_sp_contact: yup.string(),
      os_ca_iol_master: yup.string(),
      os_ca_imersion: yup.string(),
      os_ca_contact: yup.string(),
      os_cl_iol_master: yup.string(),
      os_cl_imersion: yup.string(),
      os_cl_contact: yup.string(),
      os_t_ple_iol_master: yup.string(),
      os_t_ple_imersion: yup.string(),
      os_t_ple_contact: yup.string(),
      os_sys_m_iol_master: yup.string(),
      os_sys_m_imersion: yup.string(),
      os_sys_m_contact: yup.string(),
      os_sys_t_iol_master: yup.string(),
      os_sys_t_imersion: yup.string(),
      os_sys_t_contact: yup.string(),
      os_asqelio_iol_master: yup.string(),
      os_asqelio_imersion: yup.string(),
      os_asqelio_contact: yup.string(),
      os_re_01_iol_master: yup.string(),
      os_re_01_imersion: yup.string(),
      os_re_01_contact: yup.string(),
      os_rp_11_iol_master: yup.string(),
      os_rp_11_imersion: yup.string(),
      os_rp_11_contact: yup.string(),
      os_ra_25_iol_master: yup.string(),
      os_ra_25_imersion: yup.string(),
      os_ra_25_contact: yup.string(),
      os_soft_hd_plus_iol_master: yup.string(),
      os_soft_hd_plus_imersion: yup.string(),
      os_soft_hd_plus_contact: yup.string(),
      os_soft_hd_iol_master: yup.string(),
      os_soft_hd_imersion: yup.string(),
      os_soft_hd_contact: yup.string(),
      os_i_pure_iol_master: yup.string(),
      os_i_pure_imersion: yup.string(),
      os_i_pure_contact: yup.string(),
      os_lenstec_sbl_iol_master: yup.string(),
      os_lenstec_sbl_imersion: yup.string(),
      os_lenstec_sbl_contact: yup.string(),
      os_ct_asphina_409mp_iol_master: yup.string(),
      os_ct_asphina_409mp_imersion: yup.string(),
      os_ct_asphina_409mp_contact: yup.string(),
      os_nano_iol_master: yup.string(),
      os_nano_imersion: yup.string(),
      os_nano_contact: yup.string(),
      os_lentis_l313_monofocal_iol_master: yup.string(),
      os_lentis_l313_monofocal_imersion: yup.string(),
      os_lentis_l313_monofocal_contact: yup.string(),
      os_nano_fold_iol_master: yup.string(),
      os_nano_fold_imersion: yup.string(),
      os_nano_fold_contact: yup.string(),
      os_b_lomb_ao_iol_master: yup.string(),
      os_b_lomb_ao_imersion: yup.string(),
      os_b_lomb_ao_contact: yup.string(),
      os_b_lomb_ao_m160_iol_master: yup.string(),
      os_b_lomb_ao_m160_imersion: yup.string(),
      os_b_lomb_ao_m160_contact: yup.string(),
      os_innova_aspheric_iol_master: yup.string(),
      os_innova_aspheric_imersion: yup.string(),
      os_innova_aspheric_contact: yup.string(),
      os_c_flex_iol_master: yup.string(),
      os_c_flex_imersion: yup.string(),
      os_c_flex_contact: yup.string(),
      os_lentis_mplus_comfort_iol_master: yup.string(),
      os_lentis_mplus_comfort_imersion: yup.string(),
      os_lentis_mplus_comfort_contact: yup.string(),
      os_lentis_mplus_comfort_toric_iol_master: yup.string(),
      os_lentis_mplus_comfort_toric_imersion: yup.string(),
      os_lentis_mplus_comfort_toric_contact: yup.string(),
      os_at_lisa_iol_master: yup.string(),
      os_at_lisa_imersion: yup.string(),
      os_at_lisa_contact: yup.string(),
      os_lentis_t_plus_iol_master: yup.string(),
      os_lentis_t_plus_imersion: yup.string(),
      os_lentis_t_plus_contact: yup.string(),
      os_at_lisa_tri_839mp_iol_master: yup.string(),
      os_at_lisa_tri_839mp_imersion: yup.string(),
      os_at_lisa_tri_839mp_contact: yup.string(),
      os_revive_iol_master: yup.string(),
      os_revive_imersion: yup.string(),
      os_revive_contact: yup.string(),
      os_lucidis_iol_master: yup.string(),
      os_lucidis_imersion: yup.string(),
      os_lucidis_contact: yup.string(),
      os_oc_ls_30_iol_master: yup.string(),
      os_oc_ls_30_imersion: yup.string(),
      os_oc_ls_30_contact: yup.string(),
      os_oc_ls_iol_master: yup.string(),
      os_oc_ls_imersion: yup.string(),
      os_oc_ls_contact: yup.string(),
      os_oc_ls_15_iol_master: yup.string(),
      os_oc_ls_15_imersion: yup.string(),
      os_oc_ls_15_contact: yup.string(),
      os_rf_22_l_iol_master: yup.string(),
      os_rf_22_l_imersion: yup.string(),
      os_rf_22_l_contact: yup.string(),
      os_rf_31_pl_iol_master: yup.string(),
      os_rf_31_pl_imersion: yup.string(),
      os_rf_31_pl_contact: yup.string(),
      dokter_pemeriksa: yup.string(),
      catatan: yup.string(),
      ttd_tanggal: yup.string(),
      "ttd-dokter-pemeriksa": yup.string(),
      "id-dokter-pemeriksa": yup.string(),
    });
  }

  static createFromJson(json: IBiometricExamRequest) {
    return new BiometricExamRequest(json);
  }
}
