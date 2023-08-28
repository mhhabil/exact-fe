import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';

export interface IUpdateNursingCarePlanRequest extends IAppRequest {
  diagnosa_medis:  string;
  kamar_id:  string;
  perawat_id:  string;
  nama_perawat:  string;
  tanggal_si:  string;
  diagnosa1_si_check:  string;
  diagnosa1_si_1_check:  string;
  diagnosa1_si_2_check:  string;
  diagnosa1_si_3_check:  string;
  diagnosa2_si_check:  string;
  diagnosa2_si_1_check:  string;
  diagnosa2_si_2_check:  string;
  diagnosa2_si_3_check:  string;
  diagnosa3_si_check:  string;
  diagnosa3_si_1_check:  string;
  diagnosa3_si_2_check:  string;
  tujuan1_si_check:  string;
  tujuan1_si_jam_1:  string;
  tujuan1_si_jam_2:  string;
  tujuan1_si_1_check:  string;
  tujuan1_si_2_check:  string;
  tujuan1_si_3_check:  string;
  tujuan1_si_3_text:  string;
  tujuan2_si_check:  string;
  tujuan2_si_jam_1:  string;
  tujuan2_si_jam_2:  string;
  tujuan2_si_1_check:  string;
  tujuan2_si_2_check:  string;
  tujuan2_si_3_check:  string;
  tujuan2_si_4_check:  string;
  tujuan3_si_check:  string;
  tujuan3_si_text:  string;
  rencana1_si_1_check:  string;
  rencana1_si_2_check:  string;
  rencana1_si_3_check:  string;
  rencana1_si_4_check:  string;
  rencana1_si_5_check:  string;
  rencana1_si_6_check:  string;
  rencana1_si_7_check:  string;
  rencana1_si_8_check:  string;
  rencana2_si_1_check:  string;
  rencana2_si_1_text:  string;
  rencana2_si_2_check:  string;
  rencana2_si_2_text:  string;
  rencana2_si_3_check:  string;
  rencana2_si_3_text:  string;

  tanggal_ps:  string;
  diagnosa1_ps_check:  string;
  diagnosa1_ps_1_check:  string;
  diagnosa1_ps_1_text:  string;
  diagnosa1_ps_2_check:  string;
  diagnosa1_ps_2_text:  string;
  diagnosa1_ps_3_check:  string;
  diagnosa1_ps_3_text:  string;
  diagnosa1_ps_4_check:  string;
  diagnosa1_ps_5_check:  string;
  diagnosa1_ps_6_check:  string;
  tujuan1_ps_check:  string;
  tujuan1_ps_jam_1:  string;
  tujuan1_ps_jam_2:  string;
  tujuan1_ps_1_check:  string;
  tujuan1_ps_2_check:  string;
  tujuan1_ps_3_check:  string;
  tujuan1_ps_4_check:  string;
  rencana1_ps_1_check:  string;
  rencana1_ps_2_check:  string;
  rencana1_ps_3_check:  string;
  rencana1_ps_4_check:  string;
  rencana1_ps_5_check:  string;
  rencana1_ps_6_check:  string;
  rencana1_ps_7_check:  string;
  rencana2_ps_1_check:  string;
  rencana2_ps_1_text:  string;
  rencana2_ps_2_check:  string;
  rencana2_ps_2_text:  string;
  rencana2_ps_3_check:  string;
  rencana2_ps_3_text:  string;
  tanggal_nc:  string;
  diagnosa1_nc_check:  string;
  diagnosa1_nc_1_check:  string;
  diagnosa1_nc_2_check:  string;
  diagnosa1_nc_3_check:  string;
  diagnosa2_nc_check:  string;
  diagnosa2_nc_1_check:  string;
  diagnosa3_nc_check:  string;
  diagnosa3_nc_1_check:  string;
  diagnosa3_nc_2_check:  string;
  diagnosa3_nc_3_check:  string;
  diagnosa3_nc_4_check:  string;
  diagnosa3_nc_5_check:  string;
  diagnosa3_nc_5_text:  string;
  diagnosa4_nc_check:  string;
  diagnosa4_nc_1_check:  string;
  diagnosa5_nc_check:  string;
  diagnosa5_nc_1_check:  string;
  diagnosa5_nc_2_check:  string;
  tujuan1_nc_check:  string;
  tujuan1_nc_jam_1:  string;
  tujuan1_nc_jam_2:  string;
  tujuan1_nc_1_check:  string;
  tujuan1_nc_2_check:  string;
  tujuan1_nc_3_check:  string;
  tujuan1_nc_4_check:  string;
  tujuan1_nc_5_check:  string;
  tujuan1_nc_6_check:  string;
  tujuan1_nc_6_text:  string;
  tujuan2_nc_check:  string;
  tujuan2_nc_jam_1:  string;
  tujuan2_nc_jam_2:  string;
  tujuan2_nc_1_check:  string;
  tujuan2_nc_2_check:  string;
  tujuan2_nc_3_check:  string;
  tujuan2_nc_4_check:  string;
  tujuan3_nc_check:  string;
  tujuan3_nc_jam_1:  string;
  tujuan3_nc_jam_2:  string;
  tujuan3_nc_1_check:  string;
  tujuan3_nc_2_check:  string;
  tujuan3_nc_3_check:  string;
  tujuan3_nc_3_text:  string;
  tujuan4_nc_check:  string;
  rencana1_nc_1_check:  string;
  rencana1_nc_2_check:  string;
  rencana1_nc_3_check:  string;
  rencana1_nc_3_text :  string;
  rencana1_nc_4_check:  string;
  rencana1_nc_5_check:  string;
  rencana1_nc_6_check:  string;
  rencana1_nc_7_check:  string;
  rencana1_nc_8_check:  string;
  rencana1_nc_9_check:  string;
  rencana1_nc_10_check:  string;
  rencana1_nc_11_check:  string;
  rencana1_nc_12_check:  string;
  rencana1_nc_12_text:  string;
  rencana2_nc_1_check:  string;
  rencana2_nc_2_check:  string;
  rencana2_nc_3_check:  string;
  rencana2_nc_3_text:  string;
  tanggal_kd:  string;
  diagnosa1_kd_check:  string;
  diagnosa1_kd_1_check:  string;
  diagnosa1_kd_2_check:  string;
  diagnosa1_kd_3_check:  string;
  diagnosa1_kd_4_check:  string;
  diagnosa2_kd_check:  string;
  diagnosa2_kd_text:  string;
  tujuan1_kd_check:  string;
  tujuan1_kd_jam_1:  string;
  tujuan1_kd_jam_2:  string;
  tujuan1_kd_1_check:  string;
  tujuan1_kd_2_check:  string;
  tujuan2_kd_check:  string;
  tujuan2_kd_jam_1:  string;
  tujuan2_kd_jam_2:  string;
  tujuan2_kd_1_check:  string;
  tujuan2_kd_1_text:  string;
  rencana1_kd_1_check:  string;
  rencana1_kd_2_check:  string;
  rencana1_kd_3_check:  string;
  rencana1_kd_4_check:  string;
  rencana1_kd_5_check:  string;
  rencana1_kd_6_check:  string;
  rencana1_kd_7_check:  string;
  rencana1_kd_7_text:  string;
  rencana2_kd_1_check:  string;
  rencana2_kd_1_text:  string;
  tanggal_it:  string;
  diagnosa1_it_check:  string;
  diagnosa1_it_1_check:  string;
  diagnosa1_it_2_check:  string;
  diagnosa2_it_check:  string;
  diagnosa2_it_1_check:  string;
  diagnosa2_it_2_check:  string;
  diagnosa2_it_3_check:  string;
  diagnosa3_it_check:  string;
  diagnosa3_it_text:  string;
  tujuan1_it_check:  string;
  tujuan1_it_jam_1:  string;
  tujuan1_it_jam_2:  string;
  tujuan1_it_1_check:  string;
  tujuan1_it_2_check:  string;
  tujuan1_it_3_check:  string;
  tujuan1_it_4_check:  string;
  tujuan2_it_check:  string;
  tujuan2_it_jam_1:  string;
  tujuan2_it_jam_2:  string;
  tujuan2_it_1_check:  string;
  tujuan2_it_2_check:  string;
  tujuan2_it_2_text:  string;
  rencana1_it_1_check:  string;
  rencana1_it_2_check:  string;
  rencana1_it_3_check:  string;
  rencana1_it_4_check:  string;
  rencana1_it_5_check:  string;
  rencana1_it_6_check:  string;
  rencana1_it_7_check:  string;
  rencana1_it_8_check:  string;
  rencana1_it_9_check:  string;
  rencana1_it_10_check:  string;
  rencana1_it_10_text:  string;
  rencana2_it_1_check:  string;
  rencana2_it_1_text:  string;
  rencana2_it_2_check:  string;
  rencana2_it_2_text:  string;
  tanggal_psi:  string;
  diagnosa1_psi_check:  string;
  diagnosa1_psi_1_check:  string;
  diagnosa1_psi_2_check:  string;
  diagnosa1_psi_3_check:  string;
  diagnosa1_psi_4_check:  string;
  diagnosa1_psi_5_check:  string;
  diagnosa2_psi_check:  string;
  diagnosa2_psi_1_check:  string;
  diagnosa2_psi_2_check:  string;
  diagnosa2_psi_3_check:  string;
  diagnosa3_psi_check:  string;
  diagnosa3_psi_1_check:  string;
  diagnosa3_psi_2_check:  string;
  diagnosa3_psi_3_check:  string;
  tujuan1_psi_check:  string;
  tujuan1_psi_jam_1:  string;
  tujuan1_psi_jam_2:  string;
  tujuan1_psi_1_check:  string;
  tujuan1_psi_2_check:  string;
  tujuan1_psi_3_check:  string;
  tujuan1_psi_4_check:  string;
  tujuan2_psi_check:  string;
  tujuan2_psi_jam_1:  string;
  tujuan2_psi_jam_2:  string;
  tujuan2_psi_1_check:  string;
  tujuan2_psi_2_check:  string;
  tujuan3_psi_check:  string;
  tujuan3_psi_jam_1:  string;
  tujuan3_psi_jam_2:  string;
  tujuan3_psi_1_check:  string;
  tujuan3_psi_2_check:  string;
  tujuan3_psi_3_check:  string;
  rencana1_psi_1_check:  string;
  rencana1_psi_2_check:  string;
  rencana1_psi_3_check:  string;
  rencana1_psi_4_check:  string;
  rencana1_psi_5_check:  string;
  rencana1_psi_6_check:  string;
  rencana1_psi_7_check:  string;
  rencana1_psi_8_check:  string;
  rencana1_psi_9_check:  string;
  rencana1_psi_10_check:  string;
  rencana1_psi_11_check:  string;
  rencana2_psi_1_check:  string;
  rencana2_psi_2_check:  string;
  rencana2_psi_2_text:  string;
  rencana2_psi_3_check:  string;
  rencana2_psi_3_text:  string;
  tanggal_ps1:  string;
  diagnosa1_ps1_check:  string;
  diagnosa1_ps1_1_check:  string;
  diagnosa1_ps1_1_text:  string;
  diagnosa1_ps1_2_check:  string;
  diagnosa1_ps1_2_text:  string;
  diagnosa1_ps1_3_check:  string;
  diagnosa1_ps1_3_text:  string;
  diagnosa1_ps1_4_check:  string;
  diagnosa1_ps1_5_check:  string;
  tujuan1_ps1_check:  string;
  tujuan1_ps1_1_check:  string;
  tujuan1_ps1_2_check:  string;
  rencana1_ps1_1_check:  string;
  rencana1_ps1_2_check:  string;
  rencana1_ps1_3_check:  string;
  rencana1_ps1_4_check:  string;
  rencana1_ps1_5_check:  string;
  rencana2_ps1_1_check:  string;
  rencana2_ps1_2_check:  string;
  rencana2_ps1_2_text:  string;
  tanggal_si1:  string;
  diagnosa1_si1_check:  string;
  diagnosa1_si1_1_check:  string;
  diagnosa1_si1_2_check:  string;
  diagnosa1_si1_3_check:  string;
  diagnosa1_si1_4_check:  string;
  diagnosa1_si1_5_check:  string;
  tujuan1_si1_check:  string;
  tujuan1_si1_jam_1:  string;
  tujuan1_si1_jam_2:  string;
  tujuan1_si1_1_check:  string;
  tujuan1_si1_2_check:  string;
  tujuan1_si1_3_check:  string;
  tujuan1_si1_3_text:  string;
  rencana1_si1_1_check:  string;
  rencana1_si1_2_check:  string;
  rencana1_si1_3_check:  string;
  rencana1_si1_4_check:  string;
  rencana1_si1_5_check:  string;
  rencana1_si1_6_check:  string;
  rencana1_si1_7_check:  string;
  rencana1_si1_8_check:  string;
  rencana2_si1_1_check:  string;
  rencana2_si1_1_text:  string;
  rencana2_si1_2_check:  string;
  rencana2_si1_2_text:  string;
  rencana2_si1_3_check:  string;
  rencana2_si1_3_text:  string;

}

export class UpdateNursingCarePlanRequest extends AppRequest {

  diagnosa_medis:  string;
  kamar_id:  string;
  perawat_id:  string;
  nama_perawat:  string;
  tanggal_si:  string;
  diagnosa1_si_check:  string;
  diagnosa1_si_1_check:  string;
  diagnosa1_si_2_check:  string;
  diagnosa1_si_3_check:  string;
  diagnosa2_si_check:  string;
  diagnosa2_si_1_check:  string;
  diagnosa2_si_2_check:  string;
  diagnosa2_si_3_check:  string;
  diagnosa3_si_check:  string;
  diagnosa3_si_1_check:  string;
  diagnosa3_si_2_check:  string;
  tujuan1_si_check:  string;
  tujuan1_si_jam_1:  string;
  tujuan1_si_jam_2:  string;
  tujuan1_si_1_check:  string;
  tujuan1_si_2_check:  string;
  tujuan1_si_3_check:  string;
  tujuan1_si_3_text:  string;
  tujuan2_si_check:  string;
  tujuan2_si_jam_1:  string;
  tujuan2_si_jam_2:  string;
  tujuan2_si_1_check:  string;
  tujuan2_si_2_check:  string;
  tujuan2_si_3_check:  string;
  tujuan2_si_4_check:  string;
  tujuan3_si_check:  string;
  tujuan3_si_text:  string;
  rencana1_si_1_check:  string;
  rencana1_si_2_check:  string;
  rencana1_si_3_check:  string;
  rencana1_si_4_check:  string;
  rencana1_si_5_check:  string;
  rencana1_si_6_check:  string;
  rencana1_si_7_check:  string;
  rencana1_si_8_check:  string;
  rencana2_si_1_check:  string;
  rencana2_si_1_text:  string;
  rencana2_si_2_check:  string;
  rencana2_si_2_text:  string;
  rencana2_si_3_check:  string;
  rencana2_si_3_text:  string;

  tanggal_ps:  string;
  diagnosa1_ps_check:  string;
  diagnosa1_ps_1_check:  string;
  diagnosa1_ps_1_text:  string;
  diagnosa1_ps_2_check:  string;
  diagnosa1_ps_2_text:  string;
  diagnosa1_ps_3_check:  string;
  diagnosa1_ps_3_text:  string;
  diagnosa1_ps_4_check:  string;
  diagnosa1_ps_5_check:  string;
  diagnosa1_ps_6_check:  string;
  tujuan1_ps_check:  string;
  tujuan1_ps_jam_1:  string;
  tujuan1_ps_jam_2:  string;
  tujuan1_ps_1_check:  string;
  tujuan1_ps_2_check:  string;
  tujuan1_ps_3_check:  string;
  tujuan1_ps_4_check:  string;
  rencana1_ps_1_check:  string;
  rencana1_ps_2_check:  string;
  rencana1_ps_3_check:  string;
  rencana1_ps_4_check:  string;
  rencana1_ps_5_check:  string;
  rencana1_ps_6_check:  string;
  rencana1_ps_7_check:  string;
  rencana2_ps_1_check:  string;
  rencana2_ps_1_text:  string;
  rencana2_ps_2_check:  string;
  rencana2_ps_2_text:  string;
  rencana2_ps_3_check:  string;
  rencana2_ps_3_text:  string;
  tanggal_nc:  string;
  diagnosa1_nc_check:  string;
  diagnosa1_nc_1_check:  string;
  diagnosa1_nc_2_check:  string;
  diagnosa1_nc_3_check:  string;
  diagnosa2_nc_check:  string;
  diagnosa2_nc_1_check:  string;
  diagnosa3_nc_check:  string;
  diagnosa3_nc_1_check:  string;
  diagnosa3_nc_2_check:  string;
  diagnosa3_nc_3_check:  string;
  diagnosa3_nc_4_check:  string;
  diagnosa3_nc_5_check:  string;
  diagnosa3_nc_5_text:  string;
  diagnosa4_nc_check:  string;
  diagnosa4_nc_1_check:  string;
  diagnosa5_nc_check:  string;
  diagnosa5_nc_1_check:  string;
  diagnosa5_nc_2_check:  string;
  tujuan1_nc_check:  string;
  tujuan1_nc_jam_1:  string;
  tujuan1_nc_jam_2:  string;
  tujuan1_nc_1_check:  string;
  tujuan1_nc_2_check:  string;
  tujuan1_nc_3_check:  string;
  tujuan1_nc_4_check:  string;
  tujuan1_nc_5_check:  string;
  tujuan1_nc_6_check:  string;
  tujuan1_nc_6_text:  string;
  tujuan2_nc_check:  string;
  tujuan2_nc_jam_1:  string;
  tujuan2_nc_jam_2:  string;
  tujuan2_nc_1_check:  string;
  tujuan2_nc_2_check:  string;
  tujuan2_nc_3_check:  string;
  tujuan2_nc_4_check:  string;
  tujuan3_nc_check:  string;
  tujuan3_nc_jam_1:  string;
  tujuan3_nc_jam_2:  string;
  tujuan3_nc_1_check:  string;
  tujuan3_nc_2_check:  string;
  tujuan3_nc_3_check:  string;
  tujuan3_nc_3_text:  string;
  tujuan4_nc_check:  string;
  rencana1_nc_1_check:  string;
  rencana1_nc_2_check:  string;
  rencana1_nc_3_check:  string;
  rencana1_nc_3_text:  string;
  rencana1_nc_4_check:  string;
  rencana1_nc_5_check:  string;
  rencana1_nc_6_check:  string;
  rencana1_nc_7_check:  string;
  rencana1_nc_8_check:  string;
  rencana1_nc_9_check:  string;
  rencana1_nc_10_check:  string;
  rencana1_nc_11_check:  string;
  rencana1_nc_12_check:  string;
  rencana1_nc_12_text:  string;
  rencana2_nc_1_check:  string;
  rencana2_nc_2_check:  string;
  rencana2_nc_3_check:  string;
  rencana2_nc_3_text:  string;
  tanggal_kd:  string;
  diagnosa1_kd_check:  string;
  diagnosa1_kd_1_check:  string;
  diagnosa1_kd_2_check:  string;
  diagnosa1_kd_3_check:  string;
  diagnosa1_kd_4_check:  string;
  diagnosa2_kd_check:  string;
  diagnosa2_kd_text:  string;
  tujuan1_kd_check:  string;
  tujuan1_kd_jam_1:  string;
  tujuan1_kd_jam_2:  string;
  tujuan1_kd_1_check:  string;
  tujuan1_kd_2_check:  string;
  tujuan2_kd_check:  string;
  tujuan2_kd_jam_1:  string;
  tujuan2_kd_jam_2:  string;
  tujuan2_kd_1_check:  string;
  tujuan2_kd_1_text:  string;
  rencana1_kd_1_check:  string;
  rencana1_kd_2_check:  string;
  rencana1_kd_3_check:  string;
  rencana1_kd_4_check:  string;
  rencana1_kd_5_check:  string;
  rencana1_kd_6_check:  string;
  rencana1_kd_7_check:  string;
  rencana1_kd_7_text:  string;
  rencana2_kd_1_check:  string;
  rencana2_kd_1_text:  string;
  tanggal_it:  string;
  diagnosa1_it_check:  string;
  diagnosa1_it_1_check:  string;
  diagnosa1_it_2_check:  string;
  diagnosa2_it_check:  string;
  diagnosa2_it_1_check:  string;
  diagnosa2_it_2_check:  string;
  diagnosa2_it_3_check:  string;
  diagnosa3_it_check:  string;
  diagnosa3_it_text:  string;
  tujuan1_it_check:  string;
  tujuan1_it_jam_1:  string;
  tujuan1_it_jam_2:  string;
  tujuan1_it_1_check:  string;
  tujuan1_it_2_check:  string;
  tujuan1_it_3_check:  string;
  tujuan1_it_4_check:  string;
  tujuan2_it_check:  string;
  tujuan2_it_jam_1:  string;
  tujuan2_it_jam_2:  string;
  tujuan2_it_1_check:  string;
  tujuan2_it_2_check:  string;
  tujuan2_it_2_text:  string;
  rencana1_it_1_check:  string;
  rencana1_it_2_check:  string;
  rencana1_it_3_check:  string;
  rencana1_it_4_check:  string;
  rencana1_it_5_check:  string;
  rencana1_it_6_check:  string;
  rencana1_it_7_check:  string;
  rencana1_it_8_check:  string;
  rencana1_it_9_check:  string;
  rencana1_it_10_check:  string;
  rencana1_it_10_text:  string;
  rencana2_it_1_check:  string;
  rencana2_it_1_text:  string;
  rencana2_it_2_check:  string;
  rencana2_it_2_text:  string;
  tanggal_psi:  string;
  diagnosa1_psi_check:  string;
  diagnosa1_psi_1_check:  string;
  diagnosa1_psi_2_check:  string;
  diagnosa1_psi_3_check:  string;
  diagnosa1_psi_4_check:  string;
  diagnosa1_psi_5_check:  string;
  diagnosa2_psi_check:  string;
  diagnosa2_psi_1_check:  string;
  diagnosa2_psi_2_check:  string;
  diagnosa2_psi_3_check:  string;
  diagnosa3_psi_check:  string;
  diagnosa3_psi_1_check:  string;
  diagnosa3_psi_2_check:  string;
  diagnosa3_psi_3_check:  string;
  tujuan1_psi_check:  string;
  tujuan1_psi_jam_1:  string;
  tujuan1_psi_jam_2:  string;
  tujuan1_psi_1_check:  string;
  tujuan1_psi_2_check:  string;
  tujuan1_psi_3_check:  string;
  tujuan1_psi_4_check:  string;
  tujuan2_psi_check:  string;
  tujuan2_psi_jam_1:  string;
  tujuan2_psi_jam_2:  string;
  tujuan2_psi_1_check:  string;
  tujuan2_psi_2_check:  string;
  tujuan3_psi_check:  string;
  tujuan3_psi_jam_1:  string;
  tujuan3_psi_jam_2:  string;
  tujuan3_psi_1_check:  string;
  tujuan3_psi_2_check:  string;
  tujuan3_psi_3_check:  string;
  rencana1_psi_1_check:  string;
  rencana1_psi_2_check:  string;
  rencana1_psi_3_check:  string;
  rencana1_psi_4_check:  string;
  rencana1_psi_5_check:  string;
  rencana1_psi_6_check:  string;
  rencana1_psi_7_check:  string;
  rencana1_psi_8_check:  string;
  rencana1_psi_9_check:  string;
  rencana1_psi_10_check:  string;
  rencana1_psi_11_check:  string;
  rencana2_psi_1_check:  string;
  rencana2_psi_2_check:  string;
  rencana2_psi_2_text:  string;
  rencana2_psi_3_check:  string;
  rencana2_psi_3_text:  string;
  tanggal_ps1:  string;
  diagnosa1_ps1_check:  string;
  diagnosa1_ps1_1_check:  string;
  diagnosa1_ps1_1_text:  string;
  diagnosa1_ps1_2_check:  string;
  diagnosa1_ps1_2_text:  string;
  diagnosa1_ps1_3_check:  string;
  diagnosa1_ps1_3_text:  string;
  diagnosa1_ps1_4_check:  string;
  diagnosa1_ps1_5_check:  string;
  tujuan1_ps1_check:  string;
  tujuan1_ps1_1_check:  string;
  tujuan1_ps1_2_check:  string;
  rencana1_ps1_1_check:  string;
  rencana1_ps1_2_check:  string;
  rencana1_ps1_3_check:  string;
  rencana1_ps1_4_check:  string;
  rencana1_ps1_5_check:  string;
  rencana2_ps1_1_check:  string;
  rencana2_ps1_2_check:  string;
  rencana2_ps1_2_text:  string;
  tanggal_si1:  string;
  diagnosa1_si1_check:  string;
  diagnosa1_si1_1_check:  string;
  diagnosa1_si1_2_check:  string;
  diagnosa1_si1_3_check:  string;
  diagnosa1_si1_4_check:  string;
  diagnosa1_si1_5_check:  string;
  tujuan1_si1_check:  string;
  tujuan1_si1_jam_1:  string;
  tujuan1_si1_jam_2:  string;
  tujuan1_si1_1_check:  string;
  tujuan1_si1_2_check:  string;
  tujuan1_si1_3_check:  string;
  tujuan1_si1_3_text:  string;
  rencana1_si1_1_check:  string;
  rencana1_si1_2_check:  string;
  rencana1_si1_3_check:  string;
  rencana1_si1_4_check:  string;
  rencana1_si1_5_check:  string;
  rencana1_si1_6_check:  string;
  rencana1_si1_7_check:  string;
  rencana1_si1_8_check:  string;
  rencana2_si1_1_check:  string;
  rencana2_si1_1_text:  string;
  rencana2_si1_2_check:  string;
  rencana2_si1_2_text:  string;
  rencana2_si1_3_check:  string;
  rencana2_si1_3_text:  string;

  constructor(request: IUpdateNursingCarePlanRequest) {
    super(request);

    this.diagnosa_medis  =  request.diagnosa_medis;
    this.kamar_id  =  request.kamar_id;
    this.perawat_id  =  request.perawat_id;
    this.nama_perawat  =  request.nama_perawat;
    this.tanggal_si  =  request.tanggal_si;
    this.diagnosa1_si_check  =  request.diagnosa1_si_check;
    this.diagnosa1_si_1_check  =  request.diagnosa1_si_1_check;
    this.diagnosa1_si_2_check  =  request.diagnosa1_si_2_check;
    this.diagnosa1_si_3_check  =  request.diagnosa1_si_3_check;
    this.diagnosa2_si_check  =  request.diagnosa2_si_check;
    this.diagnosa2_si_1_check  =  request.diagnosa2_si_1_check;
    this.diagnosa2_si_2_check  =  request.diagnosa2_si_2_check;
    this.diagnosa2_si_3_check  =  request.diagnosa2_si_3_check;
    this.diagnosa3_si_check  =  request.diagnosa3_si_check;
    this.diagnosa3_si_1_check  =  request.diagnosa3_si_1_check;
    this.diagnosa3_si_2_check  =  request.diagnosa3_si_2_check;
    this.tujuan1_si_check  =  request.tujuan1_si_check;
    this.tujuan1_si_jam_1  =  request.tujuan1_si_jam_1;
    this.tujuan1_si_jam_2  =  request.tujuan1_si_jam_2;
    this.tujuan1_si_1_check  =  request.tujuan1_si_1_check;
    this.tujuan1_si_2_check  =  request.tujuan1_si_2_check;
    this.tujuan1_si_3_check  =  request.tujuan1_si_3_check;
    this.tujuan1_si_3_text  =  request.tujuan1_si_3_text;
    this.tujuan2_si_check  =  request.tujuan2_si_check;
    this.tujuan2_si_jam_1  =  request.tujuan2_si_jam_1;
    this.tujuan2_si_jam_2  =  request.tujuan2_si_jam_2;
    this.tujuan2_si_1_check  =  request.tujuan2_si_1_check;
    this.tujuan2_si_2_check  =  request.tujuan2_si_2_check;
    this.tujuan2_si_3_check  =  request.tujuan2_si_3_check;
    this.tujuan2_si_4_check  =  request.tujuan2_si_4_check;
    this.tujuan3_si_check  =  request.tujuan3_si_check;
    this.tujuan3_si_text =  request.tujuan3_si_text;
    this.rencana1_si_1_check  =  request.rencana1_si_1_check;
    this.rencana1_si_2_check  =  request.rencana1_si_2_check;
    this.rencana1_si_3_check  =  request.rencana1_si_3_check;
    this.rencana1_si_4_check  =  request.rencana1_si_3_check;
    this.rencana1_si_5_check  =  request.rencana1_si_5_check;
    this.rencana1_si_6_check  =  request.rencana1_si_6_check;
    this.rencana1_si_7_check  =  request.rencana1_si_7_check;
    this.rencana1_si_8_check  =  request.rencana1_si_8_check;
    this.rencana2_si_1_check  =  request.rencana2_si_1_check;
    this.rencana2_si_1_text  =  request.rencana2_si_1_text;
    this.rencana2_si_2_check  =  request.rencana2_si_2_check;
    this.rencana2_si_2_text  =  request.rencana2_si_2_text;
    this.rencana2_si_3_check  =  request.rencana2_si_3_check;
    this.rencana2_si_3_text  =  request.rencana2_si_3_text;

    this.tanggal_ps  =  request.tanggal_ps;
    this.diagnosa1_ps_check  =  request.diagnosa1_ps_check;
    this.diagnosa1_ps_1_check  =  request.diagnosa1_ps_1_check;
    this.diagnosa1_ps_1_text  =  request.diagnosa1_ps_1_text;
    this.diagnosa1_ps_2_check  =  request.diagnosa1_ps_2_check;
    this.diagnosa1_ps_2_text  =  request.diagnosa1_ps_2_text;
    this.diagnosa1_ps_3_check  =  request.diagnosa1_ps_3_check;
    this.diagnosa1_ps_3_text  =  request.diagnosa1_ps_3_text;
    this.diagnosa1_ps_4_check  =  request.diagnosa1_ps_4_check;
    this.diagnosa1_ps_5_check  =  request.diagnosa1_ps_5_check;
    this.diagnosa1_ps_6_check  =  request.diagnosa1_ps_6_check;
    this.tujuan1_ps_check  =  request.tujuan1_ps_check;
    this.tujuan1_ps_jam_1  =  request.tujuan1_ps_jam_1;
    this.tujuan1_ps_jam_2  =  request.tujuan1_ps_jam_2;
    this.tujuan1_ps_1_check  =  request.tujuan1_ps_1_check;
    this.tujuan1_ps_2_check  =  request.tujuan1_ps_2_check;
    this.tujuan1_ps_3_check  =  request.tujuan1_ps_3_check;
    this.tujuan1_ps_4_check  =  request.tujuan1_ps_4_check;
    this.rencana1_ps_1_check  =  request.rencana1_ps_1_check;
    this.rencana1_ps_2_check  =  request.rencana1_ps_2_check;
    this.rencana1_ps_3_check  =  request.rencana1_ps_3_check;
    this.rencana1_ps_4_check  =  request.rencana1_ps_4_check;
    this.rencana1_ps_5_check  =  request.rencana1_ps_5_check;
    this.rencana1_ps_6_check  =  request.rencana1_ps_6_check;
    this.rencana1_ps_7_check  =  request.rencana1_ps_7_check;
    this.rencana2_ps_1_check  =  request.rencana2_ps_1_check;
    this.rencana2_ps_1_text  =  request.rencana2_ps_1_text;
    this.rencana2_ps_2_check  =  request.rencana2_ps_2_check;
    this.rencana2_ps_2_text  =  request.rencana2_ps_2_text;
    this.rencana2_ps_3_check  =  request.rencana2_ps_3_check;
    this.rencana2_ps_3_text  =  request.rencana2_ps_3_text;
    this.tanggal_nc  =  request.tanggal_nc;
    this.diagnosa1_nc_check  =  request.diagnosa1_nc_check;
    this.diagnosa1_nc_1_check  =  request.diagnosa1_nc_1_check;
    this.diagnosa1_nc_2_check  =  request.diagnosa1_nc_2_check;
    this.diagnosa1_nc_3_check  =  request.diagnosa1_nc_3_check;
    this.diagnosa2_nc_check  =  request.diagnosa2_nc_check;
    this.diagnosa2_nc_1_check  =  request.diagnosa2_nc_1_check;
    this.diagnosa3_nc_check  =  request.diagnosa3_nc_check;
    this.diagnosa3_nc_1_check  =  request.diagnosa3_nc_1_check;
    this.diagnosa3_nc_2_check  =  request.diagnosa3_nc_2_check;
    this.diagnosa3_nc_3_check  =  request.diagnosa3_nc_3_check;
    this.diagnosa3_nc_4_check  =  request.diagnosa3_nc_4_check;
    this.diagnosa3_nc_5_check  =  request.diagnosa3_nc_5_check;
    this.diagnosa3_nc_5_text  =  request.diagnosa3_nc_5_text;
    this.diagnosa4_nc_check  =  request.diagnosa4_nc_check;
    this.diagnosa4_nc_1_check  =  request.diagnosa4_nc_1_check;
    this.diagnosa5_nc_check  =  request.diagnosa5_nc_check;
    this.diagnosa5_nc_1_check  =  request.diagnosa5_nc_1_check;
    this.diagnosa5_nc_2_check  =  request.diagnosa5_nc_2_check;
    this.tujuan1_nc_check  =  request.tujuan1_nc_check;
    this.tujuan1_nc_jam_1  =  request.tujuan1_nc_jam_1;
    this.tujuan1_nc_jam_2  =  request.tujuan1_nc_jam_2;
    this.tujuan1_nc_1_check  =  request.tujuan1_nc_1_check;
    this.tujuan1_nc_2_check  =  request.tujuan1_nc_2_check;
    this.tujuan1_nc_3_check  =  request.tujuan1_nc_3_check;
    this.tujuan1_nc_4_check  =  request.tujuan1_nc_4_check;
    this.tujuan1_nc_5_check  =  request.tujuan1_nc_5_check;
    this.tujuan1_nc_6_check  =  request.tujuan1_nc_6_check;
    this.tujuan1_nc_6_text  =  request.tujuan1_nc_6_text;
    this.tujuan2_nc_check  =  request.tujuan2_nc_check;
    this.tujuan2_nc_jam_1  =  request.tujuan2_nc_jam_1;
    this.tujuan2_nc_jam_2  =  request.tujuan2_nc_jam_2;
    this.tujuan2_nc_1_check  =  request.tujuan2_nc_1_check;
    this.tujuan2_nc_2_check  =  request.tujuan2_nc_2_check;
    this.tujuan2_nc_3_check  =  request.tujuan2_nc_3_check;
    this.tujuan2_nc_4_check  =  request.tujuan2_nc_4_check;
    this.tujuan3_nc_check  =  request.tujuan3_nc_check;
    this.tujuan3_nc_jam_1  =  request.tujuan3_nc_jam_1;
    this.tujuan3_nc_jam_2  =  request.tujuan3_nc_jam_2;
    this.tujuan3_nc_1_check  =  request.tujuan3_nc_1_check;
    this.tujuan3_nc_2_check  =  request.tujuan3_nc_2_check;
    this.tujuan3_nc_3_check  =  request.tujuan3_nc_3_check;
    this.tujuan3_nc_3_text  =  request.tujuan3_nc_3_text;
    this.tujuan4_nc_check  =  request.tujuan4_nc_check;
    this.rencana1_nc_1_check  =  request.rencana1_nc_1_check;
    this.rencana1_nc_2_check  =  request.rencana1_nc_2_check;
    this.rencana1_nc_3_check  =  request.rencana1_nc_3_check;
    this.rencana1_nc_3_text  =  request.rencana1_nc_3_text;
    this.rencana1_nc_4_check  =  request.rencana1_nc_4_check;
    this.rencana1_nc_5_check  =  request.rencana1_nc_5_check;
    this.rencana1_nc_6_check  =  request.rencana1_nc_6_check;
    this.rencana1_nc_7_check  =  request.rencana1_nc_7_check;
    this.rencana1_nc_8_check  =  request.rencana1_nc_8_check;
    this.rencana1_nc_9_check  =  request.rencana1_nc_9_check;
    this.rencana1_nc_10_check  =  request.rencana1_nc_10_check;
    this.rencana1_nc_11_check  =  request.rencana1_nc_11_check;
    this.rencana1_nc_12_check  =  request.rencana1_nc_12_check;
    this.rencana1_nc_12_text  =  request.rencana1_nc_12_text;
    this.rencana2_nc_1_check  =  request.rencana2_nc_1_check
    this.rencana2_nc_2_check  =  request.rencana2_nc_2_check;
    this.rencana2_nc_3_check  =  request.rencana2_nc_3_check;
    this.rencana2_nc_3_text  =  request.rencana2_nc_3_text;
    this.tanggal_kd  =  request.tanggal_kd;
    this.diagnosa1_kd_check  =  request.diagnosa1_kd_check;
    this.diagnosa1_kd_1_check  =  request.diagnosa1_kd_1_check;
    this.diagnosa1_kd_2_check  =  request.diagnosa1_kd_2_check;
    this.diagnosa1_kd_3_check  =  request.diagnosa1_kd_3_check;
    this.diagnosa1_kd_4_check  =  request.diagnosa1_kd_4_check;
    this.diagnosa2_kd_check  =  request.diagnosa2_kd_check;
    this.diagnosa2_kd_text  =  request.diagnosa2_kd_text;
    this.tujuan1_kd_check  =  request.tujuan1_kd_check;
    this.tujuan1_kd_jam_1  =  request.tujuan1_kd_jam_1;
    this.tujuan1_kd_jam_2  =  request.tujuan1_kd_jam_2;
    this.tujuan1_kd_1_check  =  request.tujuan1_kd_1_check;
    this.tujuan1_kd_2_check  =  request.tujuan1_kd_2_check;
    this.tujuan2_kd_check  =  request.tujuan2_kd_check;
    this.tujuan2_kd_jam_1  =  request.tujuan2_kd_jam_1;
    this.tujuan2_kd_jam_2  =  request.tujuan2_kd_jam_2;
    this.tujuan2_kd_1_check  =  request.tujuan2_kd_1_check;
    this.tujuan2_kd_1_text  =  request.tujuan2_kd_1_text;
    this.rencana1_kd_1_check  =  request.rencana1_kd_1_check;
    this.rencana1_kd_2_check  =  request.rencana1_kd_1_check;
    this.rencana1_kd_3_check  =  request.rencana1_kd_3_check;
    this.rencana1_kd_4_check  =  request.rencana1_kd_3_check;
    this.rencana1_kd_5_check  =  request.rencana1_kd_5_check;
    this.rencana1_kd_6_check  =  request.rencana1_kd_6_check;
    this.rencana1_kd_7_check  =  request.rencana1_kd_7_check;
    this.rencana1_kd_7_text  =  request.rencana1_kd_7_text;
    this.rencana2_kd_1_check  =  request.rencana2_kd_1_check;
    this.rencana2_kd_1_text  =  request.rencana2_kd_1_text;
    this.tanggal_it  =  request.tanggal_it;
    this.diagnosa1_it_check  =  request.diagnosa1_it_check;
    this.diagnosa1_it_1_check  =  request.diagnosa1_it_1_check;
    this.diagnosa1_it_2_check  =  request.diagnosa1_it_2_check;
    this.diagnosa2_it_check  =  request.diagnosa2_it_check;
    this.diagnosa2_it_1_check  =  request.diagnosa2_it_1_check;
    this.diagnosa2_it_2_check  =  request.diagnosa2_it_2_check;
    this.diagnosa2_it_3_check  =  request.diagnosa2_it_3_check;
    this.diagnosa3_it_check  =  request.diagnosa3_it_check;
    this.diagnosa3_it_text  =  request.diagnosa3_it_text;
    this.tujuan1_it_check  =  request.tujuan1_it_check;
    this.tujuan1_it_jam_1  =  request.tujuan1_it_jam_1;
    this.tujuan1_it_jam_2  =  request.tujuan1_it_jam_2;
    this.tujuan1_it_1_check  =  request.tujuan1_it_1_check;
    this.tujuan1_it_2_check  =  request.tujuan1_it_2_check;
    this.tujuan1_it_3_check  =  request.tujuan1_it_3_check;
    this.tujuan1_it_4_check  =  request.tujuan1_it_4_check;
    this.tujuan2_it_check  =  request.tujuan2_it_check;
    this.tujuan2_it_jam_1  =  request.tujuan2_it_jam_1;
    this.tujuan2_it_jam_2  =  request.tujuan2_it_jam_2;
    this.tujuan2_it_1_check  =  request.tujuan2_it_1_check;
    this.tujuan2_it_2_check  =  request.tujuan2_it_1_check;
    this.tujuan2_it_2_text  =  request.tujuan2_it_2_text;
    this.rencana1_it_1_check  =  request.rencana1_it_1_check;
    this.rencana1_it_2_check  =  request.rencana1_it_2_check;
    this.rencana1_it_3_check  =  request.rencana1_it_3_check;
    this.rencana1_it_4_check  =  request.rencana1_it_4_check;
    this.rencana1_it_5_check  =  request.rencana1_it_5_check;
    this.rencana1_it_6_check  =  request.rencana1_it_6_check;
    this.rencana1_it_7_check  =  request.rencana1_it_7_check;
    this.rencana1_it_8_check  =  request.rencana1_it_8_check;
    this.rencana1_it_9_check  =  request.rencana1_it_9_check;
    this.rencana1_it_10_check  =  request.rencana1_it_10_check;
    this.rencana1_it_10_text  =  request.rencana1_it_10_text;
    this.rencana2_it_1_check  =  request.rencana2_it_1_check;
    this.rencana2_it_1_text  =  request.rencana2_it_1_text;
    this.rencana2_it_2_check  =  request.rencana2_it_2_check;
    this.rencana2_it_2_text  =  request.rencana2_it_2_text;

    this.tanggal_psi  =  request.tanggal_psi;
    this.diagnosa1_psi_check  =  request.diagnosa1_psi_check;
    this.diagnosa1_psi_1_check  =  request.diagnosa1_psi_1_check;
    this.diagnosa1_psi_2_check  =  request.diagnosa1_psi_2_check;
    this.diagnosa1_psi_3_check  =  request.diagnosa1_psi_3_check;
    this.diagnosa1_psi_4_check  =  request.diagnosa1_psi_4_check;
    this.diagnosa1_psi_5_check  =  request.diagnosa1_psi_5_check;
    this.diagnosa2_psi_check  =  request.diagnosa2_psi_check;
    this.diagnosa2_psi_1_check  =  request.diagnosa2_psi_1_check;
    this.diagnosa2_psi_2_check  =  request.diagnosa2_psi_2_check;
    this.diagnosa2_psi_3_check  =  request.diagnosa2_psi_3_check;
    this.diagnosa3_psi_check  =  request.diagnosa3_psi_check;
    this.diagnosa3_psi_1_check  =  request.diagnosa3_psi_1_check;
    this.diagnosa3_psi_2_check  =  request.diagnosa3_psi_2_check;
    this.diagnosa3_psi_3_check  =  request.diagnosa3_psi_3_check;
    this.tujuan1_psi_check  =  request.tujuan1_psi_check;
    this.tujuan1_psi_jam_1  =  request.tujuan1_psi_jam_1;
    this.tujuan1_psi_jam_2  =  request.tujuan1_psi_jam_2;
    this.tujuan1_psi_1_check  =  request.tujuan1_psi_1_check;
    this.tujuan1_psi_2_check  =  request.tujuan1_psi_2_check;
    this.tujuan1_psi_3_check  =  request.tujuan1_psi_3_check;
    this.tujuan1_psi_4_check  =  request.tujuan1_psi_4_check;
    this.tujuan2_psi_check  =  request.tujuan2_psi_check;
    this.tujuan2_psi_jam_1  =  request.tujuan2_psi_jam_1;
    this.tujuan2_psi_jam_2  =  request.tujuan2_psi_jam_2;
    this.tujuan2_psi_1_check  =  request.tujuan2_psi_1_check;
    this.tujuan2_psi_2_check  =  request.tujuan2_psi_2_check;
    this.tujuan3_psi_check  =  request.tujuan3_psi_check;
    this.tujuan3_psi_jam_1  =  request.tujuan3_psi_jam_1;
    this.tujuan3_psi_jam_2  =  request.tujuan3_psi_jam_2;
    this.tujuan3_psi_1_check  =  request.tujuan3_psi_1_check;
    this.tujuan3_psi_2_check  =  request.tujuan3_psi_2_check;
    this.tujuan3_psi_3_check  =  request.tujuan3_psi_3_check;
    this.rencana1_psi_1_check  =  request.rencana1_psi_1_check;
    this.rencana1_psi_2_check  =  request.rencana1_psi_2_check;
    this.rencana1_psi_3_check  =  request.rencana1_psi_3_check;
    this.rencana1_psi_4_check  =  request.rencana1_psi_4_check;
    this.rencana1_psi_5_check  =  request.rencana1_psi_5_check;
    this.rencana1_psi_6_check  =  request.rencana1_psi_6_check;
    this.rencana1_psi_7_check  =  request.rencana1_psi_7_check;
    this.rencana1_psi_8_check  =  request.rencana1_psi_8_check;
    this.rencana1_psi_9_check  =  request.rencana1_psi_9_check;
    this.rencana1_psi_10_check  =  request.rencana1_psi_10_check;
    this.rencana1_psi_11_check  =  request.rencana1_psi_11_check;
    this.rencana2_psi_1_check  =  request.rencana2_psi_1_check;
    this.rencana2_psi_2_check  =  request.rencana2_psi_2_check;
    this.rencana2_psi_2_text  =  request.rencana2_psi_2_text;
    this.rencana2_psi_3_check  =  request.rencana2_psi_3_check;
    this.rencana2_psi_3_text  =  request.rencana2_psi_3_text;
    this.tanggal_ps1  =  request.tanggal_ps1;
    this.diagnosa1_ps1_check  =  request.diagnosa1_ps1_check;
    this.diagnosa1_ps1_1_check  =  request.diagnosa1_ps1_1_check;
    this.diagnosa1_ps1_1_text  =  request.diagnosa1_ps1_1_text;
    this.diagnosa1_ps1_2_check  =  request.diagnosa1_ps1_2_check;
    this.diagnosa1_ps1_2_text  =  request.diagnosa1_ps1_2_check;
    this.diagnosa1_ps1_3_check  =  request.diagnosa1_ps1_3_check;
    this.diagnosa1_ps1_3_text  =  request.diagnosa1_ps1_3_text;
    this.diagnosa1_ps1_4_check  =  request.diagnosa1_ps1_4_check;
    this.diagnosa1_ps1_5_check  =  request.diagnosa1_ps1_5_check;
    this.tujuan1_ps1_check  =  request.tujuan1_ps1_check;
    this.tujuan1_ps1_1_check  =  request.tujuan1_ps1_1_check;
    this.tujuan1_ps1_2_check  =  request.tujuan1_ps1_2_check;
    this.rencana1_ps1_1_check  =  request.rencana1_ps1_1_check;
    this.rencana1_ps1_2_check  =  request.rencana1_ps1_2_check;
    this.rencana1_ps1_3_check  =  request.rencana1_ps1_3_check;
    this.rencana1_ps1_4_check  =  request.rencana1_ps1_4_check;
    this.rencana1_ps1_5_check  =  request.rencana1_ps1_5_check;
    this.rencana2_ps1_1_check  =  request.rencana2_ps1_1_check;
    this.rencana2_ps1_2_check  =  request.rencana2_ps1_2_check;
    this.rencana2_ps1_2_text  =  request.rencana2_ps1_2_text;

    this.tanggal_si1  =  request.tanggal_si1;
    this.diagnosa1_si1_check  =  request.diagnosa1_si1_check;
    this.diagnosa1_si1_1_check  =  request.diagnosa1_si1_1_check;
    this.diagnosa1_si1_2_check  =  request.diagnosa1_si1_2_check;
    this.diagnosa1_si1_3_check  =  request.diagnosa1_si1_3_check;
    this.diagnosa1_si1_4_check  =  request.diagnosa1_si1_4_check;
    this.diagnosa1_si1_5_check  =  request.diagnosa1_si1_5_check;
    this.tujuan1_si1_check  =  request.tujuan1_si1_check;
    this.tujuan1_si1_jam_1  =  request.tujuan1_si1_jam_1;
    this.tujuan1_si1_jam_2  =  request.tujuan1_si1_jam_2;
    this.tujuan1_si1_1_check  =  request.tujuan1_si1_1_check;
    this.tujuan1_si1_2_check  =  request.tujuan1_si1_2_check;
    this.tujuan1_si1_3_check  =  request.tujuan1_si1_3_check;
    this.tujuan1_si1_3_text  =  request.tujuan1_si1_3_text;
    this.rencana1_si1_1_check  =  request.rencana1_si1_1_check;
    this.rencana1_si1_2_check  =  request.rencana1_si1_3_check;
    this.rencana1_si1_3_check  =  request.rencana1_si1_3_check;
    this.rencana1_si1_4_check  =  request.rencana1_si1_4_check;
    this.rencana1_si1_5_check  =  request.rencana1_si1_5_check;
    this.rencana1_si1_6_check  =  request.rencana1_si1_6_check;
    this.rencana1_si1_7_check  =  request.rencana1_si1_7_check;
    this.rencana1_si1_8_check  =  request.rencana1_si1_8_check;
    this.rencana2_si1_1_check  =  request.rencana2_si1_1_check;
    this.rencana2_si1_1_text  =  request.rencana2_si1_1_text;
    this.rencana2_si1_2_check  =  request.rencana2_si1_2_check;
    this.rencana2_si1_2_text  =  request.rencana2_si1_2_text;
    this.rencana2_si1_3_check  =  request.rencana2_si1_3_check;
    this.rencana2_si1_3_text  =  request.rencana2_si1_3_text;

    //this.pasien_kategori = request.pasien_kategori;
  }

  static schema() {
    return yup.object().shape({
      emr_id: yup.string(),
      waktu: yup.string(),
      id_petugas: yup.string(),
      nama_petugas: yup.string(),
      updated_at: yup.string(),
      updated_by:  yup.string(),

      diagnosa_medis:  yup.string(),
      kamar_id:  yup.string(),
      perawat_id:  yup.string(),
      nama_perawat:  yup.string(),
      tanggal_si:  yup.string(),
      diagnosa1_si_check:  yup.string(),
      diagnosa1_si_1_check:  yup.string(),
      diagnosa1_si_2_check:  yup.string(),
      diagnosa1_si_3_check:  yup.string(),
      diagnosa2_si_check:  yup.string(),
      diagnosa2_si_1_check:  yup.string(),
      diagnosa2_si_2_check:  yup.string(),
      diagnosa2_si_3_check:  yup.string(),
      diagnosa3_si_check:  yup.string(),
      diagnosa3_si_1_check:  yup.string(),
      diagnosa3_si_2_check:  yup.string(),
      tujuan1_si_check:  yup.string(),
      tujuan1_si_jam_1:  yup.string(),
      tujuan1_si_jam_2:  yup.string(),
      tujuan1_si_1_check:  yup.string(),
      tujuan1_si_2_check:  yup.string(),
      tujuan1_si_3_check:  yup.string(),
      tujuan1_si_3_text:  yup.string(),
      tujuan2_si_check:  yup.string(),
      tujuan2_si_jam_1:  yup.string(),
      tujuan2_si_jam_2:  yup.string(),
      tujuan2_si_1_check:  yup.string(),
      tujuan2_si_2_check:  yup.string(),
      tujuan2_si_3_check:  yup.string(),
      tujuan2_si_4_check:  yup.string(),
      tujuan3_si_check:  yup.string(),
      tujuan3_si_text:  yup.string(),
      rencana1_si_1_check:  yup.string(),
      rencana1_si_2_check:  yup.string(),
      rencana1_si_3_check:  yup.string(),
      rencana1_si_4_check:  yup.string(),
      rencana1_si_5_check:  yup.string(),
      rencana1_si_6_check:  yup.string(),
      rencana1_si_7_check:  yup.string(),
      rencana1_si_8_check:  yup.string(),
      rencana2_si_1_check:  yup.string(),
      rencana2_si_1_text:  yup.string(),
      rencana2_si_2_check:  yup.string(),
      rencana2_si_2_text:  yup.string(),
      rencana2_si_3_check:  yup.string(),
      rencana2_si_3_text:  yup.string(),
      tanggal_ps:  yup.string(),
      diagnosa1_ps_check:  yup.string(),
      diagnosa1_ps_1_check:  yup.string(),
      diagnosa1_ps_1_text:  yup.string(),
      diagnosa1_ps_2_check:  yup.string(),
      diagnosa1_ps_2_text:  yup.string(),
      diagnosa1_ps_3_check:  yup.string(),
      diagnosa1_ps_3_text:  yup.string(),
      diagnosa1_ps_4_check:  yup.string(),
      diagnosa1_ps_5_check:  yup.string(),
      diagnosa1_ps_6_check:  yup.string(),
      tujuan1_ps_check:  yup.string(),
      tujuan1_ps_jam_1:  yup.string(),
      tujuan1_ps_jam_2:  yup.string(),
      tujuan1_ps_1_check:  yup.string(),
      tujuan1_ps_2_check:  yup.string(),
      tujuan1_ps_3_check:  yup.string(),
      tujuan1_ps_4_check:  yup.string(),
      rencana1_ps_1_check:  yup.string(),
      rencana1_ps_2_check:  yup.string(),
      rencana1_ps_3_check:  yup.string(),
      rencana1_ps_4_check:  yup.string(),
      rencana1_ps_5_check:  yup.string(),
      rencana1_ps_6_check:  yup.string(),
      rencana1_ps_7_check:  yup.string(),
      rencana2_ps_1_check:  yup.string(),
      rencana2_ps_1_text:  yup.string(),
      rencana2_ps_2_check:  yup.string(),
      rencana2_ps_2_text:  yup.string(),
      rencana2_ps_3_check:  yup.string(),
      rencana2_ps_3_text:  yup.string(),
      tanggal_nc:  yup.string(),
      diagnosa1_nc_check:  yup.string(),
      diagnosa1_nc_1_check:  yup.string(),
      diagnosa1_nc_2_check:  yup.string(),
      diagnosa1_nc_3_check:  yup.string(),
      diagnosa2_nc_check:  yup.string(),
      diagnosa2_nc_1_check:  yup.string(),
      diagnosa3_nc_check:  yup.string(),
      diagnosa3_nc_1_check:  yup.string(),
      diagnosa3_nc_2_check:  yup.string(),
      diagnosa3_nc_3_check:  yup.string(),
      diagnosa3_nc_4_check:  yup.string(),
      diagnosa3_nc_5_check:  yup.string(),
      diagnosa3_nc_5_text:  yup.string(),
      diagnosa4_nc_check:  yup.string(),
      diagnosa4_nc_1_check:  yup.string(),
      diagnosa5_nc_check:  yup.string(),
      diagnosa5_nc_1_check:  yup.string(),
      diagnosa5_nc_2_check:  yup.string(),
      tujuan1_nc_check:  yup.string(),
      tujuan1_nc_jam_1:  yup.string(),
      tujuan1_nc_jam_2:  yup.string(),
      tujuan1_nc_1_check:  yup.string(),
      tujuan1_nc_2_check:  yup.string(),
      tujuan1_nc_3_check:  yup.string(),
      tujuan1_nc_4_check:  yup.string(),
      tujuan1_nc_5_check:  yup.string(),
      tujuan1_nc_6_check:  yup.string(),
      tujuan1_nc_6_text:  yup.string(),
      tujuan2_nc_check:  yup.string(),
      tujuan2_nc_jam_1:  yup.string(),
      tujuan2_nc_jam_2:  yup.string(),
      tujuan2_nc_1_check:  yup.string(),
      tujuan2_nc_2_check:  yup.string(),
      tujuan2_nc_3_check:  yup.string(),
      tujuan2_nc_4_check:  yup.string(),
      tujuan3_nc_check:  yup.string(),
      tujuan3_nc_jam_1:  yup.string(),
      tujuan3_nc_jam_2:  yup.string(),
      tujuan3_nc_1_check:  yup.string(),
      tujuan3_nc_2_check:  yup.string(),
      tujuan3_nc_3_check:  yup.string(),
      tujuan3_nc_3_text:  yup.string(),
      tujuan4_nc_check:  yup.string(),
      rencana1_nc_1_check:  yup.string(),
      rencana1_nc_2_check:  yup.string(),
      rencana1_nc_3_check:  yup.string(),
      rencana1_nc_3_text:  yup.string(),
      rencana1_nc_4_check:  yup.string(),
      rencana1_nc_5_check:  yup.string(),
      rencana1_nc_6_check:  yup.string(),
      rencana1_nc_7_check:  yup.string(),
      rencana1_nc_8_check:  yup.string(),
      rencana1_nc_9_check:  yup.string(),
      rencana1_nc_10_check:  yup.string(),
      rencana1_nc_11_check:  yup.string(),
      rencana1_nc_12_check:  yup.string(),
      rencana1_nc_12_text:  yup.string(),
      rencana2_nc_1_check:  yup.string(),
      rencana2_nc_2_check:  yup.string(),
      rencana2_nc_3_check:  yup.string(),
      rencana2_nc_3_text:  yup.string(),
      tanggal_kd:  yup.string(),
      diagnosa1_kd_check:  yup.string(),
      diagnosa1_kd_1_check:  yup.string(),
      diagnosa1_kd_2_check:  yup.string(),
      diagnosa1_kd_3_check:  yup.string(),
      diagnosa1_kd_4_check:  yup.string(),
      diagnosa2_kd_check:  yup.string(),
      diagnosa2_kd_text:  yup.string(),
      tujuan1_kd_check:  yup.string(),
      tujuan1_kd_jam_1:  yup.string(),
      tujuan1_kd_jam_2:  yup.string(),
      tujuan1_kd_1_check:  yup.string(),
      tujuan1_kd_2_check:  yup.string(),
      tujuan2_kd_check:  yup.string(),
      tujuan2_kd_jam_1:  yup.string(),
      tujuan2_kd_jam_2:  yup.string(),
      tujuan2_kd_1_check:  yup.string(),
      tujuan2_kd_1_text:  yup.string(),
      rencana1_kd_1_check:  yup.string(),
      rencana1_kd_2_check:  yup.string(),
      rencana1_kd_3_check:  yup.string(),
      rencana1_kd_4_check:  yup.string(),
      rencana1_kd_5_check:  yup.string(),
      rencana1_kd_6_check:  yup.string(),
      rencana1_kd_7_check:  yup.string(),
      rencana1_kd_7_text:  yup.string(),
      rencana2_kd_1_check:  yup.string(),
      rencana2_kd_1_text:  yup.string(),
      tanggal_it:  yup.string(),
      diagnosa1_it_check:  yup.string(),
      diagnosa1_it_1_check:  yup.string(),
      diagnosa1_it_2_check:  yup.string(),
      diagnosa2_it_check:  yup.string(),
      diagnosa2_it_1_check:  yup.string(),
      diagnosa2_it_2_check:  yup.string(),
      diagnosa2_it_3_check:  yup.string(),
      diagnosa3_it_check:  yup.string(),
      diagnosa3_it_text:  yup.string(),
      tujuan1_it_check:  yup.string(),
      tujuan1_it_jam_1:  yup.string(),
      tujuan1_it_jam_2:  yup.string(),
      tujuan1_it_1_check:  yup.string(),
      tujuan1_it_2_check:  yup.string(),
      tujuan1_it_3_check:  yup.string(),
      tujuan1_it_4_check:  yup.string(),
      tujuan2_it_check:  yup.string(),
      tujuan2_it_jam_1:  yup.string(),
      tujuan2_it_jam_2:  yup.string(),
      tujuan2_it_1_check:  yup.string(),
      tujuan2_it_2_check:  yup.string(),
      tujuan2_it_2_text:  yup.string(),
      rencana1_it_1_check:  yup.string(),
      rencana1_it_2_check:  yup.string(),
      rencana1_it_3_check:  yup.string(),
      rencana1_it_4_check:  yup.string(),
      rencana1_it_5_check:  yup.string(),
      rencana1_it_6_check:  yup.string(),
      rencana1_it_7_check:  yup.string(),
      rencana1_it_8_check:  yup.string(),
      rencana1_it_9_check:  yup.string(),
      rencana1_it_10_check:  yup.string(),
      rencana1_it_10_text:  yup.string(),
      rencana2_it_1_check:  yup.string(),
      rencana2_it_1_text:  yup.string(),
      rencana2_it_2_check:  yup.string(),
      rencana2_it_2_text:  yup.string(),
      tanggal_psi:  yup.string(),
      diagnosa1_psi_check:  yup.string(),
      diagnosa1_psi_1_check:  yup.string(),
      diagnosa1_psi_2_check:  yup.string(),
      diagnosa1_psi_3_check:  yup.string(),
      diagnosa1_psi_4_check:  yup.string(),
      diagnosa1_psi_5_check:  yup.string(),
      diagnosa2_psi_check:  yup.string(),
      diagnosa2_psi_1_check:  yup.string(),
      diagnosa2_psi_2_check:  yup.string(),
      diagnosa2_psi_3_check:  yup.string(),
      diagnosa3_psi_check:  yup.string(),
      diagnosa3_psi_1_check:  yup.string(),
      diagnosa3_psi_2_check:  yup.string(),
      diagnosa3_psi_3_check:  yup.string(),
      tujuan1_psi_check:  yup.string(),
      tujuan1_psi_jam_1:  yup.string(),
      tujuan1_psi_jam_2:  yup.string(),
      tujuan1_psi_1_check:  yup.string(),
      tujuan1_psi_2_check:  yup.string(),
      tujuan1_psi_3_check:  yup.string(),
      tujuan1_psi_4_check:  yup.string(),
      tujuan2_psi_check:  yup.string(),
      tujuan2_psi_jam_1:  yup.string(),
      tujuan2_psi_jam_2:  yup.string(),
      tujuan2_psi_1_check:  yup.string(),
      tujuan2_psi_2_check:  yup.string(),
      tujuan3_psi_check:  yup.string(),
      tujuan3_psi_jam_1:  yup.string(),
      tujuan3_psi_jam_2:  yup.string(),
      tujuan3_psi_1_check:  yup.string(),
      tujuan3_psi_2_check:  yup.string(),
      tujuan3_psi_3_check:  yup.string(),
      rencana1_psi_1_check:  yup.string(),
      rencana1_psi_2_check:  yup.string(),
      rencana1_psi_3_check:  yup.string(),
      rencana1_psi_4_check:  yup.string(),
      rencana1_psi_5_check:  yup.string(),
      rencana1_psi_6_check:  yup.string(),
      rencana1_psi_7_check:  yup.string(),
      rencana1_psi_8_check:  yup.string(),
      rencana1_psi_9_check:  yup.string(),
      rencana1_psi_10_check:  yup.string(),
      rencana1_psi_11_check:  yup.string(),
      rencana2_psi_1_check:  yup.string(),
      rencana2_psi_2_check:  yup.string(),
      rencana2_psi_2_text:  yup.string(),
      rencana2_psi_3_check:  yup.string(),
      rencana2_psi_3_text:  yup.string(),
      tanggal_ps1:  yup.string(),
      diagnosa1_ps1_check:  yup.string(),
      diagnosa1_ps1_1_check:  yup.string(),
      diagnosa1_ps1_1_text:  yup.string(),
      diagnosa1_ps1_2_check:  yup.string(),
      diagnosa1_ps1_2_text:  yup.string(),
      diagnosa1_ps1_3_check:  yup.string(),
      diagnosa1_ps1_3_text:  yup.string(),
      diagnosa1_ps1_4_check:  yup.string(),
      diagnosa1_ps1_5_check:  yup.string(),
      tujuan1_ps1_check:  yup.string(),
      tujuan1_ps1_1_check:  yup.string(),
      tujuan1_ps1_2_check:  yup.string(),
      rencana1_ps1_1_check:  yup.string(),
      rencana1_ps1_2_check:  yup.string(),
      rencana1_ps1_3_check:  yup.string(),
      rencana1_ps1_4_check:  yup.string(),
      rencana1_ps1_5_check:  yup.string(),
      rencana2_ps1_1_check:  yup.string(),
      rencana2_ps1_2_check:  yup.string(),
      rencana2_ps1_2_text:  yup.string(),
      tanggal_si1:  yup.string(),
      diagnosa1_si1_check:  yup.string(),
      diagnosa1_si1_1_check:  yup.string(),
      diagnosa1_si1_2_check:  yup.string(),
      diagnosa1_si1_3_check:  yup.string(),
      diagnosa1_si1_4_check:  yup.string(),
      diagnosa1_si1_5_check:  yup.string(),
      tujuan1_si1_check:  yup.string(),
      tujuan1_si1_jam_1:  yup.string(),
      tujuan1_si1_jam_2:  yup.string(),
      tujuan1_si1_1_check:  yup.string(),
      tujuan1_si1_2_check:  yup.string(),
      tujuan1_si1_3_check:  yup.string(),
      tujuan1_si1_3_text:  yup.string(),
      rencana1_si1_1_check:  yup.string(),
      rencana1_si1_2_check:  yup.string(),
      rencana1_si1_3_check:  yup.string(),
      rencana1_si1_4_check:  yup.string(),
      rencana1_si1_5_check:  yup.string(),
      rencana1_si1_6_check:  yup.string(),
      rencana1_si1_7_check:  yup.string(),
      rencana1_si1_8_check:  yup.string(),
      rencana2_si1_1_check:  yup.string(),
      rencana2_si1_1_text:  yup.string(),
      rencana2_si1_2_check:  yup.string(),
      rencana2_si1_2_text:  yup.string(),
      rencana2_si1_3_check:  yup.string(),
      rencana2_si1_3_text:  yup.string(),

    });
  }
  normalize() {
    return {

      diagnosa_medis  :  this.diagnosa_medis,
      kamar_id  :  this.kamar_id,
      perawat_id  :  this.perawat_id,
      nama_perawat  :  this.nama_perawat,
      tanggal_si  :  this.tanggal_si,
      diagnosa1_si_check  :  this.diagnosa1_si_check,
      diagnosa1_si_1_check  :  this.diagnosa1_si_1_check,
      diagnosa1_si_2_check  :  this.diagnosa1_si_2_check,
      diagnosa1_si_3_check  :  this.diagnosa1_si_3_check,
      diagnosa2_si_check  :  this.diagnosa2_si_check,
      diagnosa2_si_1_check  :  this.diagnosa2_si_1_check,
      diagnosa2_si_2_check  :  this.diagnosa2_si_2_check,
      diagnosa2_si_3_check  :  this.diagnosa2_si_3_check,
      diagnosa3_si_check  :  this.diagnosa3_si_check,
      diagnosa3_si_1_check  :  this.diagnosa3_si_1_check,
      diagnosa3_si_2_check  :  this.diagnosa3_si_2_check,
      tujuan1_si_check  :  this.tujuan1_si_check,
      tujuan1_si_jam_1  :  this.tujuan1_si_jam_1,
      tujuan1_si_jam_2  :  this.tujuan1_si_jam_2,
      tujuan1_si_1_check  :  this.tujuan1_si_1_check,
      tujuan1_si_2_check  :  this.tujuan1_si_2_check,
      tujuan1_si_3_check  :  this.tujuan1_si_3_check,
      tujuan1_si_3_text  :  this.tujuan1_si_3_text,
      tujuan2_si_check  :  this.tujuan2_si_check,
      tujuan2_si_jam_1  :  this.tujuan2_si_jam_1,
      tujuan2_si_jam_2  :  this.tujuan2_si_jam_2,
      tujuan2_si_1_check  :  this.tujuan2_si_1_check,
      tujuan2_si_2_check  :  this.tujuan2_si_2_check,
      tujuan2_si_3_check  :  this.tujuan2_si_3_check,
      tujuan2_si_4_check  :  this.tujuan2_si_4_check,
      tujuan3_si_check  :  this.tujuan3_si_check,
      tujuan3_si_text  :  this.tujuan3_si_text,
      rencana1_si_1_check  :  this.rencana1_si_1_check,
      rencana1_si_2_check  :  this.rencana1_si_2_check,
      rencana1_si_3_check  :  this.rencana1_si_3_check,
      rencana1_si_4_check  :  this.rencana1_si_3_check,
      rencana1_si_5_check  :  this.rencana1_si_5_check,
      rencana1_si_6_check  :  this.rencana1_si_6_check,
      rencana1_si_7_check  :  this.rencana1_si_7_check,
      rencana1_si_8_check  :  this.rencana1_si_8_check,
      rencana2_si_1_check  :  this.rencana2_si_1_check,
      rencana2_si_1_text  :  this.rencana2_si_1_text,
      rencana2_si_2_check  :  this.rencana2_si_2_check,
      rencana2_si_2_text  :  this.rencana2_si_2_text,
      rencana2_si_3_check  :  this.rencana2_si_3_check,
      rencana2_si_3_text  :  this.rencana2_si_3_text,
      tanggal_ps  :  this.tanggal_ps,
      diagnosa1_ps_check  :  this.diagnosa1_ps_check,
      diagnosa1_ps_1_check  :  this.diagnosa1_ps_1_check,
      diagnosa1_ps_1_text  :  this.diagnosa1_ps_1_text,
      diagnosa1_ps_2_check  :  this.diagnosa1_ps_2_check,
      diagnosa1_ps_2_text  :  this.diagnosa1_ps_2_text,
      diagnosa1_ps_3_check  :  this.diagnosa1_ps_3_check,
      diagnosa1_ps_3_text  :  this.diagnosa1_ps_3_text,
      diagnosa1_ps_4_check  :  this.diagnosa1_ps_4_check,
      diagnosa1_ps_5_check  :  this.diagnosa1_ps_5_check,
      diagnosa1_ps_6_check  :  this.diagnosa1_ps_6_check,
      tujuan1_ps_check  :  this.tujuan1_ps_check,
      tujuan1_ps_jam_1  :  this.tujuan1_ps_jam_1,
      tujuan1_ps_jam_2  :  this.tujuan1_ps_jam_2,
      tujuan1_ps_1_check  :  this.tujuan1_ps_1_check,
      tujuan1_ps_2_check  :  this.tujuan1_ps_2_check,
      tujuan1_ps_3_check  :  this.tujuan1_ps_3_check,
      tujuan1_ps_4_check  :  this.tujuan1_ps_4_check,
      rencana1_ps_1_check  :  this.rencana1_ps_1_check,
      rencana1_ps_2_check  :  this.rencana1_ps_2_check,
      rencana1_ps_3_check  :  this.rencana1_ps_3_check,
      rencana1_ps_4_check  :  this.rencana1_ps_4_check,
      rencana1_ps_5_check  :  this.rencana1_ps_5_check,
      rencana1_ps_6_check  :  this.rencana1_ps_6_check,
      rencana1_ps_7_check  :  this.rencana1_ps_7_check,
      rencana2_ps_1_check  :  this.rencana2_ps_1_check,
      rencana2_ps_1_text  :  this.rencana2_ps_1_text,
      rencana2_ps_2_check  :  this.rencana2_ps_2_check,
      rencana2_ps_2_text  :  this.rencana2_ps_2_text,
      rencana2_ps_3_check  :  this.rencana2_ps_3_check,
      rencana2_ps_3_text  :  this.rencana2_ps_3_text,
      tanggal_nc  :  this.tanggal_nc,
      diagnosa1_nc_check  :  this.diagnosa1_nc_check,
      diagnosa1_nc_1_check  :  this.diagnosa1_nc_1_check,
      diagnosa1_nc_2_check  :  this.diagnosa1_nc_2_check,
      diagnosa1_nc_3_check  :  this.diagnosa1_nc_3_check,
      diagnosa2_nc_check  :  this.diagnosa2_nc_check,
      diagnosa2_nc_1_check  :  this.diagnosa2_nc_1_check,
      diagnosa3_nc_check  :  this.diagnosa3_nc_check,
      diagnosa3_nc_1_check  :  this.diagnosa3_nc_1_check,
      diagnosa3_nc_2_check  :  this.diagnosa3_nc_2_check,
      diagnosa3_nc_3_check  :  this.diagnosa3_nc_3_check,
      diagnosa3_nc_4_check  :  this.diagnosa3_nc_4_check,
      diagnosa3_nc_5_check  :  this.diagnosa3_nc_5_check,
      diagnosa3_nc_5_text  :  this.diagnosa3_nc_5_text,
      diagnosa4_nc_check  :  this.diagnosa4_nc_check,
      diagnosa4_nc_1_check  :  this.diagnosa4_nc_1_check,
      diagnosa5_nc_check  :  this.diagnosa5_nc_check,
      diagnosa5_nc_1_check  :  this.diagnosa5_nc_1_check,
      diagnosa5_nc_2_check  :  this.diagnosa5_nc_2_check,
      tujuan1_nc_check  :  this.tujuan1_nc_check,
      tujuan1_nc_jam_1  :  this.tujuan1_nc_jam_1,
      tujuan1_nc_jam_2  :  this.tujuan1_nc_jam_2,
      tujuan1_nc_1_check  :  this.tujuan1_nc_1_check,
      tujuan1_nc_2_check  :  this.tujuan1_nc_2_check,
      tujuan1_nc_3_check  :  this.tujuan1_nc_3_check,
      tujuan1_nc_4_check  :  this.tujuan1_nc_4_check,
      tujuan1_nc_5_check  :  this.tujuan1_nc_5_check,
      tujuan1_nc_6_check  :  this.tujuan1_nc_6_check,
      tujuan1_nc_6_text  :  this.tujuan1_nc_6_text,
      tujuan2_nc_check  :  this.tujuan2_nc_check,
      tujuan2_nc_jam_1  :  this.tujuan2_nc_jam_1,
      tujuan2_nc_jam_2  :  this.tujuan2_nc_jam_2,
      tujuan2_nc_1_check  :  this.tujuan2_nc_1_check,
      tujuan2_nc_2_check  :  this.tujuan2_nc_2_check,
      tujuan2_nc_3_check  :  this.tujuan2_nc_3_check,
      tujuan2_nc_4_check  :  this.tujuan2_nc_4_check,
      tujuan3_nc_check  :  this.tujuan3_nc_check,
      tujuan3_nc_jam_1  :  this.tujuan3_nc_jam_1,
      tujuan3_nc_jam_2  :  this.tujuan3_nc_jam_2,
      tujuan3_nc_1_check  :  this.tujuan3_nc_1_check,
      tujuan3_nc_2_check  :  this.tujuan3_nc_2_check,
      tujuan3_nc_3_check  :  this.tujuan3_nc_3_check,
      tujuan3_nc_3_text  :  this.tujuan3_nc_3_text,
      tujuan4_nc_check  :  this.tujuan4_nc_check,
      rencana1_nc_1_check  :  this.rencana1_nc_1_check,
      rencana1_nc_2_check  :  this.rencana1_nc_2_check,
      rencana1_nc_3_check  :  this.rencana1_nc_3_check,
      rencana1_nc_3_text  :  this.rencana1_nc_3_text,
      rencana1_nc_4_check  :  this.rencana1_nc_4_check,
      rencana1_nc_5_check  :  this.rencana1_nc_5_check,
      rencana1_nc_6_check  :  this.rencana1_nc_6_check,
      rencana1_nc_7_check  :  this.rencana1_nc_7_check,
      rencana1_nc_8_check  :  this.rencana1_nc_8_check,
      rencana1_nc_9_check  :  this.rencana1_nc_9_check,
      rencana1_nc_10_check  :  this.rencana1_nc_10_check,
      rencana1_nc_11_check  :  this.rencana1_nc_11_check,
      rencana1_nc_12_check  :  this.rencana1_nc_12_check,
      rencana1_nc_12_text  :  this.rencana1_nc_12_text,
      rencana2_nc_1_check  :  this.rencana2_nc_1_check,
      rencana2_nc_2_check  :  this.rencana2_nc_2_check,
      rencana2_nc_3_check  :  this.rencana2_nc_3_check,
      rencana2_nc_3_text  :  this.rencana2_nc_3_text,
      tanggal_kd  :  this.tanggal_kd,
      diagnosa1_kd_check  :  this.diagnosa1_kd_check,
      diagnosa1_kd_1_check  :  this.diagnosa1_kd_1_check,
      diagnosa1_kd_2_check  :  this.diagnosa1_kd_2_check,
      diagnosa1_kd_3_check  :  this.diagnosa1_kd_3_check,
      diagnosa1_kd_4_check  :  this.diagnosa1_kd_4_check,
      diagnosa2_kd_check  :  this.diagnosa2_kd_check,
      diagnosa2_kd_text  :  this.diagnosa2_kd_text,
      tujuan1_kd_check  :  this.tujuan1_kd_check,
      tujuan1_kd_jam_1  :  this.tujuan1_kd_jam_1,
      tujuan1_kd_jam_2  :  this.tujuan1_kd_jam_2,
      tujuan1_kd_1_check  :  this.tujuan1_kd_1_check,
      tujuan1_kd_2_check  :  this.tujuan1_kd_2_check,
      tujuan2_kd_check  :  this.tujuan2_kd_check,
      tujuan2_kd_jam_1  :  this.tujuan2_kd_jam_1,
      tujuan2_kd_jam_2  :  this.tujuan2_kd_jam_2,
      tujuan2_kd_1_check  :  this.tujuan2_kd_1_check,
      tujuan2_kd_1_text  :  this.tujuan2_kd_1_text,
      rencana1_kd_1_check  :  this.rencana1_kd_1_check,
      rencana1_kd_2_check  :  this.rencana1_kd_1_check,
      rencana1_kd_3_check  :  this.rencana1_kd_3_check,
      rencana1_kd_4_check  :  this.rencana1_kd_3_check,
      rencana1_kd_5_check  :  this.rencana1_kd_5_check,
      rencana1_kd_6_check  :  this.rencana1_kd_6_check,
      rencana1_kd_7_check  :  this.rencana1_kd_7_check,
      rencana1_kd_7_text  :  this.rencana1_kd_7_text,
      rencana2_kd_1_check  :  this.rencana2_kd_1_check,
      rencana2_kd_1_text  :  this.rencana2_kd_1_text,
      tanggal_it  :  this.tanggal_it,
      diagnosa1_it_check  :  this.diagnosa1_it_check,
      diagnosa1_it_1_check  :  this.diagnosa1_it_1_check,
      diagnosa1_it_2_check  :  this.diagnosa1_it_2_check,
      diagnosa2_it_check  :  this.diagnosa2_it_check,
      diagnosa2_it_1_check  :  this.diagnosa2_it_1_check,
      diagnosa2_it_2_check  :  this.diagnosa2_it_2_check,
      diagnosa2_it_3_check  :  this.diagnosa2_it_3_check,
      diagnosa3_it_check  :  this.diagnosa3_it_check,
      diagnosa3_it_text  :  this.diagnosa3_it_text,
      tujuan1_it_check  :  this.tujuan1_it_check,
      tujuan1_it_jam_1  :  this.tujuan1_it_jam_1,
      tujuan1_it_jam_2  :  this.tujuan1_it_jam_2,
      tujuan1_it_1_check  :  this.tujuan1_it_1_check,
      tujuan1_it_2_check  :  this.tujuan1_it_2_check,
      tujuan1_it_3_check  :  this.tujuan1_it_3_check,
      tujuan1_it_4_check  :  this.tujuan1_it_4_check,
      tujuan2_it_check  :  this.tujuan2_it_check,
      tujuan2_it_jam_1  :  this.tujuan2_it_jam_1,
      tujuan2_it_jam_2  :  this.tujuan2_it_jam_2,
      tujuan2_it_1_check  :  this.tujuan2_it_1_check,
      tujuan2_it_2_check  :  this.tujuan2_it_1_check,
      tujuan2_it_2_text  :  this.tujuan2_it_2_text,
      rencana1_it_1_check  :  this.rencana1_it_1_check,
      rencana1_it_2_check  :  this.rencana1_it_2_check,
      rencana1_it_3_check  :  this.rencana1_it_3_check,
      rencana1_it_4_check  :  this.rencana1_it_4_check,
      rencana1_it_5_check  :  this.rencana1_it_5_check,
      rencana1_it_6_check  :  this.rencana1_it_6_check,
      rencana1_it_7_check  :  this.rencana1_it_7_check,
      rencana1_it_8_check  :  this.rencana1_it_8_check,
      rencana1_it_9_check  :  this.rencana1_it_9_check,
      rencana1_it_10_check  :  this.rencana1_it_10_check,
      rencana1_it_10_text  :  this.rencana1_it_10_text,
      rencana2_it_1_check  :  this.rencana2_it_1_check,
      rencana2_it_1_text  :  this.rencana2_it_1_text,
      rencana2_it_2_check  :  this.rencana2_it_2_check,
      rencana2_it_2_text  :  this.rencana2_it_2_text,
      tanggal_psi  :  this.tanggal_psi,
      diagnosa1_psi_check  :  this.diagnosa1_psi_check,
      diagnosa1_psi_1_check  :  this.diagnosa1_psi_1_check,
      diagnosa1_psi_2_check  :  this.diagnosa1_psi_2_check,
      diagnosa1_psi_3_check  :  this.diagnosa1_psi_3_check,
      diagnosa1_psi_4_check  :  this.diagnosa1_psi_4_check,
      diagnosa1_psi_5_check  :  this.diagnosa1_psi_5_check,
      diagnosa2_psi_check  :  this.diagnosa2_psi_check,
      diagnosa2_psi_1_check  :  this.diagnosa2_psi_1_check,
      diagnosa2_psi_2_check  :  this.diagnosa2_psi_2_check,
      diagnosa2_psi_3_check  :  this.diagnosa2_psi_3_check,
      diagnosa3_psi_check  :  this.diagnosa3_psi_check,
      diagnosa3_psi_1_check  :  this.diagnosa3_psi_1_check,
      diagnosa3_psi_2_check  :  this.diagnosa3_psi_2_check,
      diagnosa3_psi_3_check  :  this.diagnosa3_psi_3_check,
      tujuan1_psi_check  :  this.tujuan1_psi_check,
      tujuan1_psi_jam_1  :  this.tujuan1_psi_jam_1,
      tujuan1_psi_jam_2  :  this.tujuan1_psi_jam_2,
      tujuan1_psi_1_check  :  this.tujuan1_psi_1_check,
      tujuan1_psi_2_check  :  this.tujuan1_psi_2_check,
      tujuan1_psi_3_check  :  this.tujuan1_psi_3_check,
      tujuan1_psi_4_check  :  this.tujuan1_psi_4_check,
      tujuan2_psi_check  :  this.tujuan2_psi_check,
      tujuan2_psi_jam_1  :  this.tujuan2_psi_jam_1,
      tujuan2_psi_jam_2  :  this.tujuan2_psi_jam_2,
      tujuan2_psi_1_check  :  this.tujuan2_psi_1_check,
      tujuan2_psi_2_check  :  this.tujuan2_psi_2_check,
      tujuan3_psi_check  :  this.tujuan3_psi_check,
      tujuan3_psi_jam_1  :  this.tujuan3_psi_jam_1,
      tujuan3_psi_jam_2  :  this.tujuan3_psi_jam_2,
      tujuan3_psi_1_check  :  this.tujuan3_psi_1_check,
      tujuan3_psi_2_check  :  this.tujuan3_psi_2_check,
      tujuan3_psi_3_check  :  this.tujuan3_psi_3_check,
      rencana1_psi_1_check  :  this.rencana1_psi_1_check,
      rencana1_psi_2_check  :  this.rencana1_psi_2_check,
      rencana1_psi_3_check  :  this.rencana1_psi_3_check,
      rencana1_psi_4_check  :  this.rencana1_psi_4_check,
      rencana1_psi_5_check  :  this.rencana1_psi_5_check,
      rencana1_psi_6_check  :  this.rencana1_psi_6_check,
      rencana1_psi_7_check  :  this.rencana1_psi_7_check,
      rencana1_psi_8_check  :  this.rencana1_psi_8_check,
      rencana1_psi_9_check  :  this.rencana1_psi_9_check,
      rencana1_psi_10_check  :  this.rencana1_psi_10_check,
      rencana1_psi_11_check  :  this.rencana1_psi_11_check,
      rencana2_psi_1_check  :  this.rencana2_psi_1_check,
      rencana2_psi_2_check  :  this.rencana2_psi_2_check,
      rencana2_psi_2_text  :  this.rencana2_psi_2_text,
      rencana2_psi_3_check  :  this.rencana2_psi_3_check,
      rencana2_psi_3_text  :  this.rencana2_psi_3_text,
      tanggal_ps1  :  this.tanggal_ps1,
      diagnosa1_ps1_check  :  this.diagnosa1_ps1_check,
      diagnosa1_ps1_1_check  :  this.diagnosa1_ps1_1_check,
      diagnosa1_ps1_1_text  :  this.diagnosa1_ps1_1_text,
      diagnosa1_ps1_2_check  :  this.diagnosa1_ps1_2_check,
      diagnosa1_ps1_2_text  :  this.diagnosa1_ps1_2_check,
      diagnosa1_ps1_3_check  :  this.diagnosa1_ps1_3_check,
      diagnosa1_ps1_3_text  :  this.diagnosa1_ps1_3_text,
      diagnosa1_ps1_4_check  :  this.diagnosa1_ps1_4_check,
      diagnosa1_ps1_5_check  :  this.diagnosa1_ps1_5_check,
      tujuan1_ps1_check  :  this.tujuan1_ps1_check,
      tujuan1_ps1_1_check  :  this.tujuan1_ps1_1_check,
      tujuan1_ps1_2_check  :  this.tujuan1_ps1_2_check,
      rencana1_ps1_1_check  :  this.rencana1_ps1_1_check,
      rencana1_ps1_2_check  :  this.rencana1_ps1_2_check,
      rencana1_ps1_3_check  :  this.rencana1_ps1_3_check,
      rencana1_ps1_4_check  :  this.rencana1_ps1_4_check,
      rencana1_ps1_5_check  :  this.rencana1_ps1_5_check,
      rencana2_ps1_1_check  :  this.rencana2_ps1_1_check,
      rencana2_ps1_2_check  :  this.rencana2_ps1_2_check,
      rencana2_ps1_2_text  :  this.rencana2_ps1_2_text,
      tanggal_si1  :  this.tanggal_si1,
      diagnosa1_si1_check  :  this.diagnosa1_si1_check,
      diagnosa1_si1_1_check  :  this.diagnosa1_si1_1_check,
      diagnosa1_si1_2_check  :  this.diagnosa1_si1_2_check,
      diagnosa1_si1_3_check  :  this.diagnosa1_si1_3_check,
      diagnosa1_si1_4_check  :  this.diagnosa1_si1_4_check,
      diagnosa1_si1_5_check  :  this.diagnosa1_si1_5_check,
      tujuan1_si1_check  :  this.tujuan1_si1_check,
      tujuan1_si1_jam_1  :  this.tujuan1_si1_jam_1,
      tujuan1_si1_jam_2  :  this.tujuan1_si1_jam_2,
      tujuan1_si1_1_check  :  this.tujuan1_si1_1_check,
      tujuan1_si1_2_check  :  this.tujuan1_si1_2_check,
      tujuan1_si1_3_check  :  this.tujuan1_si1_3_check,
      tujuan1_si1_3_text  :  this.tujuan1_si1_3_text,
      rencana1_si1_1_check  :  this.rencana1_si1_1_check,
      rencana1_si1_2_check  :  this.rencana1_si1_3_check,
      rencana1_si1_3_check  :  this.rencana1_si1_3_check,
      rencana1_si1_4_check  :  this.rencana1_si1_4_check,
      rencana1_si1_5_check  :  this.rencana1_si1_5_check,
      rencana1_si1_6_check  :  this.rencana1_si1_6_check,
      rencana1_si1_7_check  :  this.rencana1_si1_7_check,
      rencana1_si1_8_check  :  this.rencana1_si1_8_check,
      rencana2_si1_1_check  :  this.rencana2_si1_1_check,
      rencana2_si1_1_text  :  this.rencana2_si1_1_text,
      rencana2_si1_2_check  :  this.rencana2_si1_2_check,
      rencana2_si1_2_text  :  this.rencana2_si1_2_text,
      rencana2_si1_3_check  :  this.rencana2_si1_3_check,
      rencana2_si1_3_text  :  this.rencana2_si1_3_text,

      emr_id: this.emr_id,
      nomor_mr: this.nomor_mr,
      id_pelayanan: this.id_pelayanan,
      kode_cabang: this.kode_cabang,
      tipe_pasien: this.tipe_pasien,
      jenis_pelayanan: this.jenis_pelayanan,
      id_dokter: this.id_dokter,
      no_sep: this.no_sep,
    }
  }

  static convertToNormalDatetime(date: any) {
    const d = new Date(date);
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }
  static createFromJson(json: IUpdateNursingCarePlanRequest) {
    return new UpdateNursingCarePlanRequest(json);
  }
}
