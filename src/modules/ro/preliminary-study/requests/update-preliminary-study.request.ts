import { AppRequest, IAppRequest } from '@shared/request';
import * as yup from 'yup';
import { IPreliminaryStudyForm } from '../models/preliminary-study.model';
import { DateTimeConverter } from '@src/shared/datetime-converter';
import { ITreatmentModel } from '@src/modules/site/patient-list/models';

export interface IUpdatePreliminaryStudyRequest extends IAppRequest {
  complaint: string;
  other_complaint: string;

  od_va: string;
  od_false: string;
  od_ph: string;
  od_add: string;
  od_jagger: string;

  od_kml_select: string;
  od_kml_sph: string;
  od_kml_cyl: string;
  od_kml_axis: string;
  od_kml_va: string;
  od_kml_false: string;
  od_kml_add: string;
  od_kml_jagger: string;
  od_kml_pd_jauh: string;
  od_kml_pd_dekat: string;

  od_koreksi_1_select: string;
  od_koreksi_1_sph: string;
  od_koreksi_1_cyl: string;
  od_koreksi_1_axis: string;
  od_koreksi_1_va: string;
  od_koreksi_1_false: string;
  od_koreksi_1_add: string;
  od_koreksi_1_jagger: string;
  od_koreksi_1_pd_jauh: string;
  od_koreksi_1_pd_dekat: string;
  od_koreksi_1_adaptasi: string;

  od_koreksi_2_select: string;
  od_koreksi_2_sph: string;
  od_koreksi_2_cyl: string;
  od_koreksi_2_axis: string;
  od_koreksi_2_va: string;
  od_koreksi_2_false: string;
  od_koreksi_2_add: string;
  od_koreksi_2_jagger: string;
  od_koreksi_2_pd_jauh: string;
  od_koreksi_2_pd_dekat: string;
  od_koreksi_2_adaptasi: string;

  od_kmb_select: string;
  od_kmb_sph: string;
  od_kmb_cyl: string;
  od_kmb_axis: string;
  od_kmb_false: string;
  od_kmb_add: string;
  od_kmb_jagger: string;
  od_kmb_pd_jauh: string;
  od_kmb_pd_dekat: string;

  od_rpl_streak_va_aquity: string;
  od_rpl_streak_sph: string;
  od_rpl_streak_cyl: string;
  od_rpl_streak_axis: string;
  od_rpl_streak_va: string;
  od_rpl_streak_false: string;
  od_rpl_streak_pd_jauh: string;
  od_rpl_streak_adaptasi: string;
  od_rpl_streak_ph: string;

  od_rpl_select: string;
  od_rpl_va_aquity: string;
  od_rpl_sph: string;
  od_rpl_cyl: string;
  od_rpl_axis: string;
  od_rpl_va: string;
  od_rpl_false: string;
  od_rpl_pd_jauh: string;
  od_rpl_adaptasi: string;
  od_rpl_ph: string;

  od_rpl_2_streak_select: string;
  od_rpl_2_streak_va_aquity: string;
  od_rpl_2_streak_sph: string;
  od_rpl_2_streak_cyl: string;
  od_rpl_2_streak_axis: string;
  od_rpl_2_streak_va: string;
  od_rpl_2_streak_false: string;
  od_rpl_2_streak_pd_jauh: string;
  od_rpl_2_streak_adaptasi: string;
  od_rpl_2_streak_ph: string;

  od_rpl_2_select: string;
  od_rpl_2_va_aquity: string;
  od_rpl_2_sph: string;
  od_rpl_2_cyl: string;
  od_rpl_2_axis: string;
  od_rpl_2_va: string;
  od_rpl_2_false: string;
  od_rpl_2_pd_jauh: string;
  od_rpl_2_adaptasi: string;
  od_rpl_2_ph: string;

  od_non_contact: string;
  od_schiotz: string;
  od_tanam_lensa: string;
  od_keterangan_tono: string;

  os_va: string;
  os_false: string;
  os_ph: string;
  os_add: string;
  os_jagger: string;

  os_kml_select: string;
  os_kml_sph: string;
  os_kml_cyl: string;
  os_kml_axis: string;
  os_kml_va: string;
  os_kml_false: string;
  os_kml_add: string;
  os_kml_jagger: string;
  os_kml_pd_jauh: string;
  os_kml_pd_dekat: string;

  os_koreksi_1_select: string;
  os_koreksi_1_sph: string;
  os_koreksi_1_cyl: string;
  os_koreksi_1_axis: string;
  os_koreksi_1_va: string;
  os_koreksi_1_false: string;
  os_koreksi_1_add: string;
  os_koreksi_1_jagger: string;
  os_koreksi_1_pd_jauh: string;
  os_koreksi_1_pd_dekat: string;
  os_koreksi_1_adaptasi: string;

  os_koreksi_2_select: string;
  os_koreksi_2_sph: string;
  os_koreksi_2_cyl: string;
  os_koreksi_2_axis: string;
  os_koreksi_2_va: string;
  os_koreksi_2_false: string;
  os_koreksi_2_add: string;
  os_koreksi_2_jagger: string;
  os_koreksi_2_pd_jauh: string;
  os_koreksi_2_pd_dekat: string;
  os_koreksi_2_adaptasi: string;

  os_kmb_select: string;
  os_kmb_sph: string;
  os_kmb_cyl: string;
  os_kmb_axis: string;
  os_kmb_false: string;
  os_kmb_add: string;
  os_kmb_jagger: string;
  os_kmb_pd_jauh: string;
  os_kmb_pd_dekat: string;

  os_rpl_streak_va_aquity: string;
  os_rpl_streak_sph: string;
  os_rpl_streak_cyl: string;
  os_rpl_streak_axis: string;
  os_rpl_streak_va: string;
  os_rpl_streak_false: string;
  os_rpl_streak_pd_jauh: string;
  os_rpl_streak_adaptasi: string;
  os_rpl_streak_ph: string;

  os_rpl_2_streak_select: string;
  os_rpl_2_streak_va_aquity: string;
  os_rpl_2_streak_sph: string;
  os_rpl_2_streak_cyl: string;
  os_rpl_2_streak_axis: string;
  os_rpl_2_streak_va: string;
  os_rpl_2_streak_false: string;
  os_rpl_2_streak_pd_jauh: string;
  os_rpl_2_streak_adaptasi: string;
  os_rpl_2_streak_ph: string;

  os_rpl_select: string;
  os_rpl_va_aquity: string;
  os_rpl_sph: string;
  os_rpl_cyl: string;
  os_rpl_axis: string;
  os_rpl_va: string;
  os_rpl_false: string;
  os_rpl_pd_jauh: string;
  os_rpl_adaptasi: string;
  os_rpl_ph: string;

  os_rpl_2_select: string;
  os_rpl_2_va_aquity:  string;
  os_rpl_2_sph: string;
  os_rpl_2_cyl: string;
  os_rpl_2_axis: string;
  os_rpl_2_va: string;
  os_rpl_2_false: string;
  os_rpl_2_pd_jauh: string;
  os_rpl_2_adaptasi: string;
  os_rpl_2_ph: string;

  os_non_contact: string;
  os_schiotz: string;
  os_tanam_lensa: string;
  os_keterangan_tono: string;

  note: string;
  signature_ro_officer: string;
  ro_officer_id: string;
}

export class UpdatePreliminaryStudyRequest extends AppRequest {
  complaint: string;
  other_complaint: string;

  od_va: string;
  od_false: string;
  od_ph: string;
  od_add: string;
  od_jagger: string;

  od_kml_select: string;
  od_kml_sph: string;
  od_kml_cyl: string;
  od_kml_axis: string;
  od_kml_va: string;
  od_kml_false: string;
  od_kml_add: string;
  od_kml_jagger: string;
  od_kml_pd_jauh: string;
  od_kml_pd_dekat: string;

  od_koreksi_1_select: string;
  od_koreksi_1_sph: string;
  od_koreksi_1_cyl: string;
  od_koreksi_1_axis: string;
  od_koreksi_1_va: string;
  od_koreksi_1_false: string;
  od_koreksi_1_add: string;
  od_koreksi_1_jagger: string;
  od_koreksi_1_pd_jauh: string;
  od_koreksi_1_pd_dekat: string;
  od_koreksi_1_adaptasi: string;

  od_koreksi_2_select: string;
  od_koreksi_2_sph: string;
  od_koreksi_2_cyl: string;
  od_koreksi_2_axis: string;
  od_koreksi_2_va: string;
  od_koreksi_2_false: string;
  od_koreksi_2_add: string;
  od_koreksi_2_jagger: string;
  od_koreksi_2_pd_jauh: string;
  od_koreksi_2_pd_dekat: string;
  od_koreksi_2_adaptasi: string;

  od_kmb_select: string;
  od_kmb_sph: string;
  od_kmb_cyl: string;
  od_kmb_axis: string;
  od_kmb_false: string;
  od_kmb_add: string;
  od_kmb_jagger: string;
  od_kmb_pd_jauh: string;
  od_kmb_pd_dekat: string;

  od_rpl_streak_va_aquity: string;
  od_rpl_streak_sph: string;
  od_rpl_streak_cyl: string;
  od_rpl_streak_axis: string;
  od_rpl_streak_va: string;
  od_rpl_streak_false: string;
  od_rpl_streak_pd_jauh: string;
  od_rpl_streak_adaptasi: string;
  od_rpl_streak_ph: string;

  od_rpl_select: string;
  od_rpl_va_aquity: string;
  od_rpl_sph: string;
  od_rpl_cyl: string;
  od_rpl_axis: string;
  od_rpl_va: string;
  od_rpl_false: string;
  od_rpl_pd_jauh: string;
  od_rpl_adaptasi: string;
  od_rpl_ph: string;

  od_rpl_2_streak_select: string;
  od_rpl_2_streak_va_aquity: string;
  od_rpl_2_streak_sph: string;
  od_rpl_2_streak_cyl: string;
  od_rpl_2_streak_axis: string;
  od_rpl_2_streak_va: string;
  od_rpl_2_streak_false: string;
  od_rpl_2_streak_pd_jauh: string;
  od_rpl_2_streak_adaptasi: string;
  od_rpl_2_streak_ph: string;

  od_rpl_2_select: string;
  od_rpl_2_va_aquity: string;
  od_rpl_2_sph: string;
  od_rpl_2_cyl: string;
  od_rpl_2_axis: string;
  od_rpl_2_va: string;
  od_rpl_2_false: string;
  od_rpl_2_pd_jauh: string;
  od_rpl_2_adaptasi: string;
  od_rpl_2_ph: string;

  od_non_contact: string;
  od_schiotz: string;
  od_tanam_lensa: string;
  od_keterangan_tono: string;

  os_va: string;
  os_false: string;
  os_ph: string;
  os_add: string;
  os_jagger: string;

  os_kml_select: string;
  os_kml_sph: string;
  os_kml_cyl: string;
  os_kml_axis: string;
  os_kml_va: string;
  os_kml_false: string;
  os_kml_add: string;
  os_kml_jagger: string;
  os_kml_pd_jauh: string;
  os_kml_pd_dekat: string;

  os_koreksi_1_select: string;
  os_koreksi_1_sph: string;
  os_koreksi_1_cyl: string;
  os_koreksi_1_axis: string;
  os_koreksi_1_va: string;
  os_koreksi_1_false: string;
  os_koreksi_1_add: string;
  os_koreksi_1_jagger: string;
  os_koreksi_1_pd_jauh: string;
  os_koreksi_1_pd_dekat: string;
  os_koreksi_1_adaptasi: string;

  os_koreksi_2_select: string;
  os_koreksi_2_sph: string;
  os_koreksi_2_cyl: string;
  os_koreksi_2_axis: string;
  os_koreksi_2_va: string;
  os_koreksi_2_false: string;
  os_koreksi_2_add: string;
  os_koreksi_2_jagger: string;
  os_koreksi_2_pd_jauh: string;
  os_koreksi_2_pd_dekat: string;
  os_koreksi_2_adaptasi: string;

  os_kmb_select: string;
  os_kmb_sph: string;
  os_kmb_cyl: string;
  os_kmb_axis: string;
  os_kmb_false: string;
  os_kmb_add: string;
  os_kmb_jagger: string;
  os_kmb_pd_jauh: string;
  os_kmb_pd_dekat: string;

  os_rpl_streak_va_aquity: string;
  os_rpl_streak_sph: string;
  os_rpl_streak_cyl: string;
  os_rpl_streak_axis: string;
  os_rpl_streak_va: string;
  os_rpl_streak_false: string;
  os_rpl_streak_pd_jauh: string;
  os_rpl_streak_adaptasi: string;
  os_rpl_streak_ph: string;

  os_rpl_2_streak_select: string;
  os_rpl_2_streak_va_aquity: string;
  os_rpl_2_streak_sph: string;
  os_rpl_2_streak_cyl: string;
  os_rpl_2_streak_axis: string;
  os_rpl_2_streak_va: string;
  os_rpl_2_streak_false: string;
  os_rpl_2_streak_pd_jauh: string;
  os_rpl_2_streak_adaptasi: string;
  os_rpl_2_streak_ph: string;

  os_rpl_2_select: string;
  os_rpl_2_va_aquity:  string;
  os_rpl_2_sph: string;
  os_rpl_2_cyl: string;
  os_rpl_2_axis: string;
  os_rpl_2_va: string;
  os_rpl_2_false: string;
  os_rpl_2_pd_jauh: string;
  os_rpl_2_adaptasi: string;
  os_rpl_2_ph: string;

  os_rpl_select: string;
  os_rpl_va_aquity: string;
  os_rpl_sph: string;
  os_rpl_cyl: string;
  os_rpl_axis: string;
  os_rpl_va: string;
  os_rpl_false: string;
  os_rpl_pd_jauh: string;
  os_rpl_adaptasi: string;
  os_rpl_ph: string;

  os_non_contact: string;
  os_schiotz: string;
  os_tanam_lensa: string;
  os_keterangan_tono: string;

  note: string;
  signature_ro_officer: string;
  ro_officer_id: string;

  constructor(request: IUpdatePreliminaryStudyRequest) {
    super(request);

    this.complaint = request.complaint;
    this.other_complaint = request.other_complaint;

    this.od_va = request.od_va;
    this.od_false = request.od_false;
    this.od_ph = request.od_ph;
    this.od_add = request.od_add;
    this.od_jagger = request.od_jagger;

    this.od_kml_select = request.od_kml_select;
    this.od_kml_sph = request.od_kml_sph;
    this.od_kml_cyl = request.od_kml_cyl;
    this.od_kml_axis = request.od_kml_axis;
    this.od_kml_va = request.od_kml_va;
    this.od_kml_false = request.od_kml_false;
    this.od_kml_add = request.od_kml_add;
    this.od_kml_jagger = request.od_kml_jagger;
    this.od_kml_pd_jauh = request.od_kml_pd_jauh;
    this.od_kml_pd_dekat = request.od_kml_pd_dekat;

    this.od_koreksi_1_select = request.od_koreksi_1_select;
    this.od_koreksi_1_sph = request.od_koreksi_1_sph;
    this.od_koreksi_1_cyl = request.od_koreksi_1_cyl;
    this.od_koreksi_1_axis = request.od_koreksi_1_axis;
    this.od_koreksi_1_va = request.od_koreksi_1_va;
    this.od_koreksi_1_false = request.od_koreksi_1_false;
    this.od_koreksi_1_add = request.od_koreksi_1_add;
    this.od_koreksi_1_jagger = request.od_koreksi_1_jagger;
    this.od_koreksi_1_pd_jauh = request.od_koreksi_1_pd_jauh;
    this.od_koreksi_1_pd_dekat = request.od_koreksi_1_pd_dekat;
    this.od_koreksi_1_adaptasi = request.od_koreksi_1_adaptasi;

    this.od_koreksi_2_select = request.od_koreksi_2_select;
    this.od_koreksi_2_sph = request.od_koreksi_2_sph;
    this.od_koreksi_2_cyl = request.od_koreksi_2_cyl;
    this.od_koreksi_2_axis = request.od_koreksi_2_axis;
    this.od_koreksi_2_va = request.od_koreksi_2_va;
    this.od_koreksi_2_false = request.od_koreksi_2_false;
    this.od_koreksi_2_add = request.od_koreksi_2_add;
    this.od_koreksi_2_jagger = request.od_koreksi_2_jagger;
    this.od_koreksi_2_pd_jauh = request.od_koreksi_2_pd_jauh;
    this.od_koreksi_2_pd_dekat = request.od_koreksi_2_pd_dekat;
    this.od_koreksi_2_adaptasi = request.od_koreksi_2_adaptasi;

    this.od_kmb_select = request.od_kmb_select;
    this.od_kmb_sph = request.od_kmb_sph;
    this.od_kmb_cyl = request.od_kmb_cyl;
    this.od_kmb_axis = request.od_kmb_axis;
    this.od_kmb_false = request.od_kmb_false;
    this.od_kmb_add = request.od_kmb_add;
    this.od_kmb_jagger = request.od_kmb_jagger;
    this.od_kmb_pd_jauh = request.od_kmb_pd_jauh;
    this.od_kmb_pd_dekat = request.od_kmb_pd_dekat;

    this.od_rpl_streak_va_aquity = request.od_rpl_streak_va_aquity;
    this.od_rpl_streak_sph = request.od_rpl_streak_sph;
    this.od_rpl_streak_cyl = request.od_rpl_streak_cyl;
    this.od_rpl_streak_axis = request.od_rpl_streak_axis;
    this.od_rpl_streak_va = request.od_rpl_streak_va;
    this.od_rpl_streak_false = request.od_rpl_streak_false;
    this.od_rpl_streak_pd_jauh = request.od_rpl_streak_pd_jauh;
    this.od_rpl_streak_adaptasi = request.od_rpl_streak_adaptasi;
    this.od_rpl_streak_ph = request.od_rpl_streak_ph;
    
    this.od_rpl_2_streak_select = request.od_rpl_2_streak_select;
    this.od_rpl_2_streak_va_aquity = request.od_rpl_2_streak_va_aquity;
    this.od_rpl_2_streak_sph =  request.od_rpl_2_streak_sph;
    this.od_rpl_2_streak_cyl = request.od_rpl_2_streak_cyl;
    this.od_rpl_2_streak_axis = request.od_rpl_2_streak_axis;
    this.od_rpl_2_streak_va = request.od_rpl_2_streak_va;
    this.od_rpl_2_streak_false = request.od_rpl_2_streak_false;
    this.od_rpl_2_streak_pd_jauh = request.od_rpl_2_streak_pd_jauh;
    this.od_rpl_2_streak_adaptasi = request.od_rpl_2_streak_adaptasi;
    this.od_rpl_2_streak_ph = request.od_rpl_2_streak_ph;

    this.od_rpl_2_select = request.od_rpl_2_select;
    this.od_rpl_2_va_aquity = request.od_rpl_2_va_aquity;
    this.od_rpl_2_sph = request.od_rpl_2_sph;
    this.od_rpl_2_cyl = request.od_rpl_2_cyl;
    this.od_rpl_2_axis = request.od_rpl_2_axis;
    this.od_rpl_2_va = request.od_rpl_2_va;
    this.od_rpl_2_false = request.od_rpl_2_false;
    this.od_rpl_2_pd_jauh = request.od_rpl_2_pd_jauh;
    this.od_rpl_2_adaptasi = request.od_rpl_2_adaptasi;
    this.od_rpl_2_ph = request.od_rpl_2_ph;

    this.od_rpl_select = request.od_rpl_select;
    this.od_rpl_va_aquity = request.od_rpl_va_aquity;
    this.od_rpl_sph = request.od_rpl_sph;
    this.od_rpl_cyl = request.od_rpl_cyl;
    this.od_rpl_axis = request.od_rpl_axis;
    this.od_rpl_va = request.od_rpl_va;
    this.od_rpl_false = request.od_rpl_false;
    this.od_rpl_pd_jauh = request.od_rpl_pd_jauh;
    this.od_rpl_adaptasi = request.od_rpl_adaptasi;
    this.od_rpl_ph = request.od_rpl_ph;

    this.od_non_contact = request.od_non_contact;
    this.od_schiotz = request.od_schiotz;
    this.od_tanam_lensa = request.od_tanam_lensa;
    this.od_keterangan_tono = request.od_keterangan_tono;

    this.os_va = request.os_va;
    this.os_false = request.os_false;
    this.os_ph = request.os_ph;
    this.os_add = request.os_add;
    this.os_jagger = request.os_jagger;

    this.os_kml_select = request.os_kml_select;
    this.os_kml_sph = request.os_kml_sph;
    this.os_kml_cyl = request.os_kml_cyl;
    this.os_kml_axis = request.os_kml_axis;
    this.os_kml_va = request.os_kml_va;
    this.os_kml_false = request.os_kml_false;
    this.os_kml_add = request.os_kml_add;
    this.os_kml_jagger = request.os_kml_jagger;
    this.os_kml_pd_jauh = request.os_kml_pd_jauh;
    this.os_kml_pd_dekat = request.os_kml_pd_dekat;

    this.os_koreksi_1_select = request.os_koreksi_1_select;
    this.os_koreksi_1_sph = request.os_koreksi_1_sph;
    this.os_koreksi_1_cyl = request.os_koreksi_1_cyl;
    this.os_koreksi_1_axis = request.os_koreksi_1_axis;
    this.os_koreksi_1_va = request.os_koreksi_1_va;
    this.os_koreksi_1_false = request.os_koreksi_1_false;
    this.os_koreksi_1_add = request.os_koreksi_1_add;
    this.os_koreksi_1_jagger = request.os_koreksi_1_jagger;
    this.os_koreksi_1_pd_jauh = request.os_koreksi_1_pd_jauh;
    this.os_koreksi_1_pd_dekat = request.os_koreksi_1_pd_dekat;
    this.os_koreksi_1_adaptasi = request.os_koreksi_1_adaptasi;

    this.os_koreksi_2_select = request.os_koreksi_2_select;
    this.os_koreksi_2_sph = request.os_koreksi_2_sph;
    this.os_koreksi_2_cyl = request.os_koreksi_2_cyl;
    this.os_koreksi_2_axis = request.os_koreksi_2_axis;
    this.os_koreksi_2_va = request.os_koreksi_2_va;
    this.os_koreksi_2_false = request.os_koreksi_2_false;
    this.os_koreksi_2_add = request.os_koreksi_2_add;
    this.os_koreksi_2_jagger = request.os_koreksi_2_jagger;
    this.os_koreksi_2_pd_jauh = request.os_koreksi_2_pd_jauh;
    this.os_koreksi_2_pd_dekat = request.os_koreksi_2_pd_dekat;
    this.os_koreksi_2_adaptasi = request.os_koreksi_2_adaptasi;

    this.os_kmb_select = request.os_kmb_select;
    this.os_kmb_sph = request.os_kmb_sph;
    this.os_kmb_cyl = request.os_kmb_cyl;
    this.os_kmb_axis = request.os_kmb_axis;
    this.os_kmb_false = request.os_kmb_false;
    this.os_kmb_add = request.os_kmb_add;
    this.os_kmb_jagger = request.os_kmb_jagger;
    this.os_kmb_pd_jauh = request.os_kmb_pd_jauh;
    this.os_kmb_pd_dekat = request.os_kmb_pd_dekat;

    this.os_rpl_streak_sph = request.os_rpl_streak_sph;
    this.os_rpl_streak_va_aquity = request.os_rpl_streak_va_aquity;
    this.os_rpl_streak_cyl = request.os_rpl_streak_cyl;
    this.os_rpl_streak_axis = request.os_rpl_streak_axis;
    this.os_rpl_streak_va = request.os_rpl_streak_va;
    this.os_rpl_streak_false = request.os_rpl_streak_false;
    this.os_rpl_streak_pd_jauh = request.os_rpl_streak_pd_jauh;
    this.os_rpl_streak_adaptasi = request.os_rpl_streak_adaptasi;
    this.os_rpl_streak_ph = request.os_rpl_streak_ph;

    this.os_rpl_select = request.os_rpl_select;
    this.os_rpl_va_aquity = request.os_rpl_va_aquity;
    this.os_rpl_sph = request.os_rpl_sph;
    this.os_rpl_cyl = request.os_rpl_cyl;
    this.os_rpl_axis = request.os_rpl_axis;
    this.os_rpl_va = request.os_rpl_va;
    this.os_rpl_false = request.os_rpl_false;
    this.os_rpl_pd_jauh = request.os_rpl_pd_jauh;
    this.os_rpl_adaptasi = request.os_rpl_adaptasi;
    this.os_rpl_ph = request.os_rpl_ph;

    this.os_rpl_2_streak_select =  request.os_rpl_2_streak_select;
    this.os_rpl_2_streak_va_aquity = request.os_rpl_2_streak_va_aquity;
    this.os_rpl_2_streak_sph = request.os_rpl_2_streak_sph;
    this.os_rpl_2_streak_cyl = request.os_rpl_2_streak_cyl;
    this.os_rpl_2_streak_axis = request.os_rpl_2_streak_axis;
    this.os_rpl_2_streak_va = request.os_rpl_2_streak_va;
    this.os_rpl_2_streak_false = request.os_rpl_2_streak_false;
    this.os_rpl_2_streak_pd_jauh = request.os_rpl_2_streak_pd_jauh;
    this.os_rpl_2_streak_adaptasi = request.os_rpl_2_streak_adaptasi;
    this.os_rpl_2_streak_ph = request.os_rpl_2_streak_ph;
  
    this.os_rpl_2_select = request.os_rpl_2_select;
    this.os_rpl_2_va_aquity = request.os_rpl_2_va_aquity;
    this.os_rpl_2_sph = request.os_rpl_2_sph;
    this.os_rpl_2_cyl = request.os_rpl_2_cyl;
    this.os_rpl_2_axis = request.os_rpl_2_axis;
    this.os_rpl_2_va = request.os_rpl_2_va;
    this.os_rpl_2_false = request.os_rpl_2_false;
    this.os_rpl_2_pd_jauh = request.os_rpl_2_pd_jauh;
    this.os_rpl_2_adaptasi = request.os_rpl_2_adaptasi;
    this.os_rpl_2_ph = request.os_rpl_2_ph;

    this.os_non_contact = request.os_non_contact;
    this.os_schiotz = request.os_schiotz;
    this.os_tanam_lensa = request.os_tanam_lensa;
    this.os_keterangan_tono = request.os_keterangan_tono;

    this.note = request.note;
    this.signature_ro_officer = request.signature_ro_officer;
    this.ro_officer_id = request.ro_officer_id;

  }

  static scheme() {
    return yup.object().shape({
      complaint: yup.string(),
      other_complaint: yup.string(),
    });
  }

  static createFromJson(json: IUpdatePreliminaryStudyRequest) {
    return new UpdatePreliminaryStudyRequest(json);
  }

  normalize() {
    return {
      keluhan: this.complaint,
      "keluhan-lain": this.other_complaint,

      "od-va": this.od_va,
      "od-false": this.od_false,
      "od-ph": this.od_ph,
      "od-add": this.od_add,
      "od-jagger": this.od_jagger,
      "od-kml-select": (this.od_kml_select) ? 'on' : undefined,
      "od-kml-sph": this.od_kml_sph,
      "od-kml-cyl": this.od_kml_cyl,
      "od-kml-axis": this.od_kml_axis,
      "od-kml-va": this.od_kml_va,
      "od-kml-false": this.od_kml_false,
      "od-kml-add": this.od_kml_add,
      "od-kml-jagger": this.od_kml_jagger,
      "od-kml-pd-jauh": this.od_kml_pd_jauh,
      "od-kml-pd-dekat": this.od_kml_pd_dekat,
      "od-koreksi-1-select": (this.od_koreksi_1_select) ? 'on' : undefined,
      "od-koreksi-1-sph": this.od_koreksi_1_sph,
      "od-koreksi-1-cyl": this.od_koreksi_1_cyl,
      "od-koreksi-1-axis": this.od_koreksi_1_axis,
      "od-koreksi-1-va": this.od_koreksi_1_va,
      "od-koreksi-1-false": this.od_koreksi_1_false,
      "od-koreksi-1-add": this.od_koreksi_1_add,
      "od-koreksi-1-jagger": this.od_koreksi_1_jagger,
      "od-koreksi-1-pd-jauh": this.od_koreksi_1_pd_jauh,
      "od-koreksi-1-pd-dekat": this.od_koreksi_1_pd_dekat,
      "od-koreksi-1-adaptasi": this.od_koreksi_1_adaptasi,
      "od-koreksi-2-select": (this.od_koreksi_2_select) ? 'on' : undefined,
      "od-koreksi-2-sph": this.od_koreksi_2_sph,
      "od-koreksi-2-cyl": this.od_koreksi_2_cyl,
      "od-koreksi-2-axis": this.od_koreksi_2_axis,
      "od-koreksi-2-va": this.od_koreksi_2_va,
      "od-koreksi-2-false": this.od_koreksi_2_false,
      "od-koreksi-2-add": this.od_koreksi_2_add,
      "od-koreksi-2-jagger": this.od_koreksi_2_jagger,
      "od-koreksi-2-pd-jauh": this.od_koreksi_2_pd_jauh,
      "od-koreksi-2-pd-dekat": this.od_koreksi_2_pd_dekat,
      "od-koreksi-2-adaptasi": this.od_koreksi_2_adaptasi,
      "od-kmb-select": (this.od_kmb_select) ? 'on' : undefined,
      "od-kmb-sph": this.od_kmb_sph,
      "od-kmb-cyl": this.od_kmb_cyl,
      "od-kmb-axis": this.od_kmb_axis,
      "od-kmb-false": this.od_kmb_false,
      "od-kmb-add": this.od_kmb_add,
      "od-kmb-jagger": this.od_kmb_jagger,
      "od-kmb-pd-jauh": this.od_kmb_pd_jauh,
      "od-kmb-pd-dekat": this.od_kmb_pd_dekat,

      "od-rpl-streak-select": (this.od_rpl_select) ? 'on' : undefined,
      "od-rpl-streak-va-aquity": this.od_rpl_streak_va_aquity,
      "od-rpl-streak-sph": this.od_rpl_streak_sph,
      "od-rpl-streak-cyl": this.od_rpl_streak_cyl,
      "od-rpl-streak-axis": this.od_rpl_streak_axis,
      "od-rpl-streak-va": this.od_rpl_streak_va,
      "od-rpl-streak-false": this.od_rpl_streak_false,
      "od-rpl-streak-pd-jauh": this.od_rpl_streak_pd_jauh,
      "od-rpl-streak-adaptasi": this.od_rpl_streak_adaptasi,
      "od-rpl-streak-ph": this.od_rpl_streak_ph,

      "od-rpl-streak-2-select": (this.od_rpl_2_select) ? 'on' : undefined,
      "od-rpl-streak-2-va-aquity": this.od_rpl_2_streak_va_aquity,
      "od-rpl-streak-2-sph": this.od_rpl_2_streak_sph,
      "od-rpl-streak-2-cyl": this.od_rpl_2_streak_cyl,
      "od-rpl-streak-2-axis": this.od_rpl_2_streak_axis,
      "od-rpl-streak-2-va": this.od_rpl_2_streak_va,
      "od-rpl-streak-2-false": this.od_rpl_2_streak_false,
      "od-rpl-streak-2-pd-jauh": this.od_rpl_2_streak_pd_jauh,
      "od-rpl-streak-2-adaptasi": this.od_rpl_2_streak_adaptasi,
      "od-rpl-streak-2-ph": this.od_rpl_2_streak_ph,

      "od-rpl-select": (this.od_rpl_select) ? 'on' : undefined,
      "od-rpl-va-aquity": this.od_rpl_va_aquity,
      "od-rpl-sph": this.od_rpl_sph,
      "od-rpl-cyl": this.od_rpl_cyl,
      "od-rpl-axis": this.od_rpl_axis,
      "od-rpl-va": this.od_rpl_va,
      "od-rpl-false": this.od_rpl_false,
      "od-rpl-pd-jauh": this.od_rpl_pd_jauh,
      "od-rpl-adaptasi": this.od_rpl_adaptasi,
      "od-rpl-ph": this.od_rpl_ph,
      "od-non-contact": this.od_non_contact,
      "od-schiotz": this.od_schiotz,
      "od-tanam-lensa": this.od_tanam_lensa,

      "od-rpl-2-select": (this.od_rpl_2_select) ? 'on' : undefined,
      "od-rpl-2-va-aquity": this.od_rpl_2_va_aquity,
      "od-rpl-2-sph": this.od_rpl_2_sph,
      "od-rpl-2-cyl": this.od_rpl_2_cyl,
      "od-rpl-2-axis": this.od_rpl_2_axis,
      "od-rpl-2-va": this.od_rpl_2_va,
      "od-rpl-2-false": this.od_rpl_2_false,
      "od-rpl-2-pd-jauh": this.od_rpl_2_pd_jauh,
      "od-rpl-2-adaptasi": this.od_rpl_2_adaptasi,
      "od-rpl-2-ph": this.od_rpl_2_ph,
      'od-keterangan-tono': this.od_keterangan_tono,

      "os-va": this.os_va,
      "os-false": this.os_false,
      "os-ph": this.os_ph,
      "os-add": this.os_add,
      "os-jagger": this.os_jagger,
      "os-kml-select": (this.os_kml_select) ? 'on' : undefined,
      "os-kml-sph": this.os_kml_sph,
      "os-kml-cyl": this.os_kml_cyl,
      "os-kml-axis": this.os_kml_axis,
      "os-kml-va": this.os_kml_va,
      "os-kml-false": this.os_kml_false,
      "os-kml-add": this.os_kml_add,
      "os-kml-jagger": this.os_kml_jagger,
      "os-kml-pd-jauh": this.os_kml_pd_jauh,
      "os-kml-pd-dekat": this.os_kml_pd_dekat,
      "os-koreksi-1-select": (this.os_koreksi_1_select) ? 'on' : undefined,
      "os-koreksi-1-sph": this.os_koreksi_1_sph,
      "os-koreksi-1-cyl": this.os_koreksi_1_cyl,
      "os-koreksi-1-axis": this.os_koreksi_1_axis,
      "os-koreksi-1-va": this.os_koreksi_1_va,
      "os-koreksi-1-false": this.os_koreksi_1_false,
      "os-koreksi-1-add": this.os_koreksi_1_add,
      "os-koreksi-1-jagger": this.os_koreksi_1_jagger,
      "os-koreksi-1-pd-jauh": this.os_koreksi_1_pd_jauh,
      "os-koreksi-1-pd-dekat": this.os_koreksi_1_pd_dekat,
      "os-koreksi-1-adaptasi": this.os_koreksi_1_adaptasi,
      "os-koreksi-2-select": (this.os_koreksi_2_select) ? 'on' : undefined,
      "os-koreksi-2-sph": this.os_koreksi_2_sph,
      "os-koreksi-2-cyl": this.os_koreksi_2_cyl,
      "os-koreksi-2-axis": this.os_koreksi_2_axis,
      "os-koreksi-2-va": this.os_koreksi_2_va,
      "os-koreksi-2-false": this.os_koreksi_2_false,
      "os-koreksi-2-add": this.os_koreksi_2_add,
      "os-koreksi-2-jagger": this.os_koreksi_2_jagger,
      "os-koreksi-2-pd-jauh": this.os_koreksi_2_pd_jauh,
      "os-koreksi-2-pd-dekat": this.os_koreksi_2_pd_dekat,
      "os-koreksi-2-adaptasi": this.os_koreksi_2_adaptasi,
      "os-kmb-select": (this.os_kmb_select) ? 'on' : undefined,
      "os-kmb-sph": this.os_kmb_sph,
      "os-kmb-cyl": this.os_kmb_cyl,
      "os-kmb-axis": this.os_kmb_axis,
      "os-kmb-false": this.os_kmb_false,
      "os-kmb-add": this.os_kmb_add,
      "os-kmb-jagger": this.os_kmb_jagger,
      "os-kmb-pd-jauh": this.os_kmb_pd_jauh,
      "os-kmb-pd-dekat": this.os_kmb_pd_dekat,
      "os-rpl-streak-select": (this.os_rpl_select) ? 'on' : undefined,
      "os-rpl-streak-va-aquity": this.os_rpl_streak_va_aquity,
      "os-rpl-streak-sph": this.os_rpl_streak_sph,
      "os-rpl-streak-cyl": this.os_rpl_streak_cyl,
      "os-rpl-streak-axis": this.os_rpl_streak_axis,
      "os-rpl-streak-va": this.os_rpl_streak_va,
      "os-rpl-streak-false": this.os_rpl_streak_false,
      "os-rpl-streak-pd-jauh": this.os_rpl_streak_pd_jauh,
      "os-rpl-streak-adaptasi": this.os_rpl_streak_adaptasi,
      "os-rpl-streak-ph": this.os_rpl_streak_ph,

      "os-rpl-streak-2-select": (this.os_rpl_2_select) ? 'on' : undefined,
      "os-rpl-streak-2-va-aquity": this.os_rpl_2_streak_va_aquity,
      "os-rpl-streak-2-sph": this.os_rpl_2_streak_sph,
      "os-rpl-streak-2-cyl": this.os_rpl_2_streak_cyl,
      "os-rpl-streak-2-axis": this.os_rpl_2_streak_axis,
      "os-rpl-streak-2-va": this.os_rpl_2_streak_va,
      "os-rpl-streak-2-false": this.os_rpl_2_streak_false,
      "os-rpl-streak-2-pd-jauh": this.os_rpl_2_streak_pd_jauh,
      "os-rpl-streak-2-adaptasi": this.os_rpl_2_streak_adaptasi,
      "os-rpl-streak-2-ph": this.os_rpl_2_streak_ph,

      "os-rpl-select": (this.os_rpl_select) ? 'on' : undefined,
      "os-rpl-va-aquity": this.os_rpl_va_aquity,
      "os-rpl-sph": this.os_rpl_sph,
      "os-rpl-cyl": this.os_rpl_cyl,
      "os-rpl-axis": this.os_rpl_axis,
      "os-rpl-va": this.os_rpl_va,
      "os-rpl-false": this.os_rpl_false,
      "os-rpl-pd-jauh": this.os_rpl_pd_jauh,
      "os-rpl-adaptasi": this.os_rpl_adaptasi,
      "os-rpl-ph": this.os_rpl_ph,

      "os-rpl-2-select": (this.os_rpl_2_select) ? 'on' : undefined,
      "os-rpl-2-va-aquity": this.os_rpl_2_va_aquity,
      "os-rpl-2-sph": this.os_rpl_2_sph,
      "os-rpl-2-cyl": this.os_rpl_2_cyl,
      "os-rpl-2-axis": this.os_rpl_2_axis,
      "os-rpl-2-va": this.os_rpl_2_va,
      "os-rpl-2-false": this.os_rpl_2_false,
      "os-rpl-2-pd-jauh": this.os_rpl_2_pd_jauh,
      "os-rpl-2-adaptasi": this.os_rpl_2_adaptasi,
      "os-rpl-2-ph": this.os_rpl_2_ph,

      "os-non-contact": this.os_non_contact,
      "os-schiotz": this.os_schiotz,
      "os-tanam-lensa": this.os_tanam_lensa,
      'os-keterangan-tono': this.os_keterangan_tono,

      "catatan-lain": this.note,
      "ttd-petugas-ro": this.signature_ro_officer,
      "id-petugas-ro": this.ro_officer_id,
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
}

export class CreatePDFData {
  static createPdfRequest(ro: IPreliminaryStudyForm, treatment: ITreatmentModel) {
    return {
      'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(treatment?.Pasien?.Tgl_Lahir),
      complaint: ro && ro.Keluhan ? ro.Keluhan : ro && ro.Keluhan_Lain ? ro.Keluhan_Lain : '',
      create_date_and_time: DateTimeConverter.convertToDateTimeSecond(ro?.Updated_At),
      isJsonO_VA: !!((ro?.OD?.VA !== '' || ro?.OS?.VA !== '')),
      isJsonO_False: !!((ro?.OD?.False !== '' || ro?.OS?.False !== '')),
      isJsonO_PH: !!((ro?.OD?.PH !== '' || ro?.OS?.PH !== '')),
      isJsonO_Addisi: !!((ro?.OD?.Add !== '' || ro?.OS?.Add !== '')),
      isJsonO_Jagger: !!((ro?.OD?.Jagger !== '' || ro?.OS?.Jagger !== '')),
      isJsonO_KML: !!(ro && (ro.OD?.KML?.Select === 'on' || ro.OS?.KML?.Select === 'on')),
      OD_KML: `Sph: ${ro?.OD?.KML?.Sph} Cyl. ${ro?.OD?.KML?.Cyl} x ${ro?.OD?.KML?.Axis}`,
      OS_KML: `Sph: ${ro?.OS?.KML?.Sph} Cyl. ${ro?.OS?.KML?.Cyl} x ${ro?.OS?.KML?.Axis}`,
      isJsonO_KML_VA: !!(ro && ro.OD && ro.OS && ro.OD.KML && ro.OS.KML && ((ro.OD.KML.VA && ro.OD.KML.VA !== '') || (ro.OS.KML.VA && ro.OS.KML.VA !== '') || (ro.OD.KML.Va && ro.OD.KML.Va !== '') || (ro.OS.KML.Va && ro.OS.KML.Va !== ''))),
      JsonO_OD_KML_VA: ro?.OD?.KML?.VA ? ro?.OD?.KML?.VA : ro?.OD?.KML?.Va ? ro?.OD?.KML?.Va : '',
      JsonO_OS_KML_VA: ro?.OS?.KML?.VA ? ro?.OS?.KML?.VA : ro?.OS?.KML?.Va ? ro?.OS?.KML?.Va : '',
      isJsonO_KML_PD_Jauh: !!(ro?.OD?.KML?.Pd_Jauh !== '' || ro?.OS?.KML?.Pd_Jauh !== ''),
      isJsonO_KML_PD_Dekat: !!(ro?.OD?.KML?.Pd_Dekat !== '' || ro?.OS?.KML?.Pd_Dekat !== ''),
      isJsonO_KML_False: !!(ro?.OD?.KML?.False !== '' || ro?.OS?.KML?.False !== ''),
      isJsonO_KML_Addisi: !!(ro?.OD?.KML?.Add !== '' || ro?.OS?.KML?.Add !== ''),
      isJsonO_KML_Axis: !!(ro?.OD?.KML?.Axis !== '' || ro?.OS?.KML?.Axis !== ''),
      isJsonO_KML_Jagger: !!(ro?.OD?.KML?.Jagger !== '' || ro?.OS?.KML?.Jagger !== ''),
      isJsonO_Koreksi1: !!(ro.OD?.Koreksi_1?.Select === 'on' || ro.OS?.Koreksi_1?.Select === 'on'),
      OD_Koreksi1: `Sph: ${ro?.OD?.Koreksi_1?.Sph} Cyl. ${ro?.OD?.Koreksi_1?.Cyl} x ${ro?.OD?.Koreksi_1?.Axis}`,
      OS_Koreksi1: `Sph: ${ro?.OS?.Koreksi_1?.Sph} Cyl. ${ro?.OS?.Koreksi_1?.Cyl} x ${ro?.OS?.Koreksi_1?.Axis}`,
      isJsonO_Koreksi1_VA: !!(ro && ro.OD && ro.OS && ro.OD.Koreksi_1 && ro.OS.Koreksi_1 && ((ro.OD.Koreksi_1.VA && ro.OD.Koreksi_1.VA !== '') || (ro.OS.Koreksi_1.VA && ro.OS.Koreksi_1.VA !== '') || (ro.OD.Koreksi_1.Va && ro.OD.Koreksi_1.Va !== '') || (ro.OS.Koreksi_1.Va && ro.OS.Koreksi_1.Va !== ''))),
      JsonO_OD_Koreksi1_VA: ro?.OD?.Koreksi_1?.VA ? ro?.OD?.Koreksi_1?.VA : ro?.OD?.Koreksi_1?.Va ? ro?.OD?.Koreksi_1?.Va : '',
      JsonO_OS_Koreksi1_VA: ro?.OS?.Koreksi_1?.VA ? ro?.OS?.Koreksi_1?.VA : ro?.OS?.Koreksi_1?.Va ? ro?.OS?.Koreksi_1?.Va : '',
      isJsonO_Koreksi1_PD_Jauh: !!(ro?.OD?.Koreksi_1?.Pd_Jauh !== '' || ro?.OS?.Koreksi_1?.Pd_Jauh !== ''),
      isJsonO_Koreksi1_PD_Dekat: !!(ro?.OD?.Koreksi_1?.Pd_Dekat !== '' || ro?.OS?.Koreksi_1?.Pd_Dekat !== ''),
      isJsonO_Koreksi1_False: !!(ro?.OD?.Koreksi_1?.False !== '' || ro?.OS?.Koreksi_1?.False !== ''),
      isJsonO_Koreksi1_Addisi: !!(ro?.OD?.Koreksi_1?.Add !== '' || ro?.OS?.Koreksi_1?.Add !== ''),
      isJsonO_Koreksi1_Axis: !!(ro?.OD?.Koreksi_1?.Axis !== '' || ro?.OS?.Koreksi_1?.Axis !== ''),
      isJsonO_Koreksi1_Jagger: !!(ro?.OD?.Koreksi_1?.Jagger !== '' || ro?.OS?.Koreksi_1?.Jagger !== ''),
      isJsonO_Koreksi1_Adaptasi: !!(ro?.OD?.Koreksi_1?.Adaptasi !== '' || ro?.OS?.Koreksi_1?.Adaptasi !== ''),
      isJsonO_Koreksi2: !!(ro.OD?.Koreksi_2?.Select === 'on' || ro.OS?.Koreksi_2?.Select === 'on'),
      OD_Koreksi2: `Sph: ${ro?.OD?.Koreksi_2?.Sph} Cyl. ${ro?.OD?.Koreksi_2?.Cyl} x ${ro?.OD?.Koreksi_2?.Axis}`,
      OS_Koreksi2: `Sph: ${ro?.OS?.Koreksi_2?.Sph} Cyl. ${ro?.OS?.Koreksi_2?.Cyl} x ${ro?.OS?.Koreksi_2?.Axis}`,
      isJsonO_Koreksi2_VA: !!(ro && ro.OD && ro.OS && ro.OD.Koreksi_2 && ro.OS.Koreksi_2 && ((ro.OD.Koreksi_2.VA && ro.OD.Koreksi_2.VA !== '') || (ro.OS.Koreksi_2.VA && ro.OS.Koreksi_2.VA !== '') || (ro.OD.Koreksi_2.Va && ro.OD.Koreksi_2.Va !== '') || (ro.OS.Koreksi_2.Va && ro.OS.Koreksi_2.Va !== ''))),
      JsonO_OD_Koreksi2_VA: ro?.OD?.Koreksi_2?.VA ? ro?.OD?.Koreksi_2?.VA : ro?.OD?.Koreksi_2?.Va ? ro?.OD?.Koreksi_2?.Va : '',
      JsonO_OS_Koreksi2_VA: ro?.OS?.Koreksi_2?.VA ? ro?.OS?.Koreksi_2?.VA : ro?.OS?.Koreksi_2?.Va ? ro?.OS?.Koreksi_2?.Va : '',
      isJsonO_Koreksi2_PD_Jauh: !!(ro?.OD?.Koreksi_2?.Pd_Jauh !== '' || ro?.OS?.Koreksi_2?.Pd_Jauh !== ''),
      isJsonO_Koreksi2_PD_Dekat: !!(ro?.OD?.Koreksi_2?.Pd_Dekat !== '' || ro?.OS?.Koreksi_2?.Pd_Dekat !== ''),
      isJsonO_Koreksi2_False: !!(ro?.OD?.Koreksi_2?.False !== '' || ro?.OS?.Koreksi_2?.False !== ''),
      isJsonO_Koreksi2_Addisi: !!(ro?.OD?.Koreksi_2?.Add !== '' || ro?.OS?.Koreksi_2?.Add !== ''),
      isJsonO_Koreksi2_Axis: !!(ro?.OD?.Koreksi_2?.Axis !== '' || ro?.OS?.Koreksi_2?.Axis !== ''),
      isJsonO_Koreksi2_Jagger: !!(ro?.OD?.Koreksi_2?.Jagger !== '' || ro?.OS?.Koreksi_2?.Jagger !== ''),
      isJsonO_Koreksi2_Adaptasi: !!(ro?.OD?.Koreksi_2?.Adaptasi !== '' || ro?.OS?.Koreksi_2?.Adaptasi !== ''),
      isJsonO_KMB: !!(ro.OD?.KMB?.Select === 'on' || ro.OS?.KMB?.Select === 'on'),
      OD_KMB: `Sph: ${ro?.OD?.KMB?.Sph} Cyl. ${ro?.OD?.KMB?.Cyl} x ${ro?.OD?.KMB?.Axis}`,
      OS_KMB: `Sph: ${ro?.OS?.KMB?.Sph} Cyl. ${ro?.OS?.KMB?.Cyl} x ${ro?.OS?.KMB?.Axis}`,
      isJsonO_KMB_PD_Jauh: !!(ro?.OD?.KMB?.Pd_Jauh !== '' || ro?.OS?.KMB?.Pd_Jauh !== ''),
      isJsonO_KMB_PD_Dekat: !!(ro?.OD?.KMB?.Pd_Dekat !== '' || ro?.OS?.KMB?.Pd_Dekat !== ''),
      isJsonO_KMB_False: !!(ro?.OD?.KMB?.False !== '' || ro?.OS?.KMB?.False !== ''),
      isJsonO_KMB_Addisi: !!(ro?.OD?.KMB?.Add !== '' || ro?.OS?.KMB?.Add !== ''),
      isJsonO_KMB_Axis: !!(ro?.OD?.KMB?.Axis !== '' || ro?.OS?.KMB?.Axis !== ''),
      isJsonO_KMB_Jagger: !!(ro?.OD?.KMB?.Jagger !== '' || ro?.OS?.KMB?.Jagger !== ''),

      // rplstreak
      isJsonO_RPL: !!(ro.OD?.RPL_Streak?.Select === 'on' || ro.OS?.RPL_Streak?.Select === 'on'),
      isJsonO_RPL_SR_VA: !!(ro?.OD?.RPL_Streak?.Va_Aquity !== '' || ro?.OS?.RPL_Streak?.Va_Aquity !== ''),
      isJsonO_RPL_SR: !!(ro.OD?.RPL_Streak?.Select === 'on' || ro.OS?.RPL_Streak?.Select === 'on'),
      OD_RPL_SR: `Sph: ${ro?.OD?.RPL_Streak?.Sph} Cyl. ${ro?.OD?.RPL_Streak?.Cyl} x ${ro?.OD?.RPL_Streak?.Axis}`,
      OS_RPL_SR: `Sph: ${ro?.OS?.RPL_Streak?.Sph} Cyl. ${ro?.OS?.RPL_Streak?.Cyl} x ${ro?.OS?.RPL_Streak?.Axis}`,
      isJsonO_RPL_SR_Visus_Akhir: !!(ro && ro.OD && ro.OS && ro.OD.RPL_Streak && ro.OS.RPL_Streak && ((ro.OD.RPL_Streak.VA && ro.OD.RPL_Streak.VA !== '') || (ro.OS.RPL_Streak.VA && ro.OS.RPL_Streak.VA !== '') || (ro.OD.RPL_Streak.Va && ro.OD.RPL_Streak.Va !== '') || (ro.OS.RPL_Streak.Va && ro.OS.RPL_Streak.Va !== ''))),
      JsonO_OD_RPL_SR_Visus_Akhir: ro?.OD?.RPL_Streak?.VA ? ro?.OD?.RPL_Streak?.VA : ro?.OD?.RPL_Streak?.Va ? ro?.OD?.RPL_Streak?.Va : '',
      JsonO_OS_RPL_SR_Visus_Akhir: ro?.OS?.RPL_Streak?.VA ? ro?.OS?.RPL_Streak?.VA : ro?.OS?.RPL_Streak?.Va ? ro?.OS?.RPL_Streak?.Va : '',
      isJsonO_RPL_SR_PD_Jauh: !!(ro?.OD?.RPL_Streak?.Pd_Jauh !== '' || ro?.OS?.RPL_Streak?.Pd_Jauh !== ''),
      isJsonO_RPL_SR_False: !!(ro?.OD?.RPL_Streak?.False !== '' || ro?.OS?.RPL_Streak?.False !== ''),
      isJsonO_RPL_SR_Axis: !!(ro?.OD?.RPL_Streak?.Axis !== '' || ro?.OS?.RPL_Streak?.Axis !== ''),
      isJsonO_RPL_SR_Adaptasi: !!(ro?.OD?.RPL_Streak?.Adaptasi !== '' || ro?.OS?.RPL_Streak?.Adaptasi !== ''),
      isJsonO_RPL_SR_PH: !!(ro && ro.OD && ro.OS && ro.OD.RPL_Streak && ro.OS.RPL_Streak && ((ro.OD.RPL_Streak.PH && ro.OD.RPL_Streak.PH !== '') || (ro.OS.RPL_Streak.PH && ro.OS.RPL_Streak.PH !== '') || (ro.OD.RPL_Streak.PH && ro.OD.RPL_Streak.PH !== '') || (ro.OS.RPL_Streak.PH && ro.OS.RPL_Streak.PH !== ''))),
      JsonO_OD_RPL_SR_PH: ro?.OD?.RPL_Streak?.PH ? ro?.OD?.RPL_Streak?.PH : ro?.OD?.RPL_Streak?.PH ? ro?.OD?.RPL_Streak?.PH : '',
      JsonO_OS_RPL_SR_PH: ro?.OS?.RPL_Streak?.PH ? ro?.OS?.RPL_Streak?.PH : ro?.OS?.RPL_Streak?.PH ? ro?.OS?.RPL_Streak?.PH : '',

      // rplstreak2
      isJsonO_RPL2: !!(ro.OD?.RPL_Streak_2?.Select === 'on' || ro.OS?.RPL_Streak_2?.Select === 'on'),
      isJsonO_RPL2_SR_VA: !!(ro && ro.OD && ro.OS && ro.OD.RPL_Streak_2 && ro.OS.RPL_Streak_2 && ((ro.OD.RPL_Streak_2.Va_Aquity && ro.OD.RPL_Streak_2.Va_Aquity !== '') || (ro.OS.RPL_Streak_2.Va_Aquity && ro.OS.RPL_Streak_2.Va_Aquity !== '') || (ro.OD.RPL_Streak_2.Va_Aquity && ro.OD.RPL_Streak_2.Va_Aquity !== '') || (ro.OS.RPL_Streak_2.Va_Aquity && ro.OS.RPL_Streak_2.Va_Aquity !== ''))),
      JsonO_OD_RPL2_SR_VA: ro?.OD?.RPL_Streak_2?.Va_Aquity ? ro?.OD?.RPL_Streak_2?.Va_Aquity : ro?.OD?.RPL_Streak_2?.Va_Aquity ? ro?.OD?.RPL_Streak_2?.Va_Aquity : '',
      JsonO_OS_RPL2_SR_VA: ro?.OS?.RPL_Streak_2?.Va_Aquity ? ro?.OS?.RPL_Streak_2?.Va_Aquity : ro?.OS?.RPL_Streak_2?.Va_Aquity ? ro?.OS?.RPL_Streak_2?.Va_Aquity : '',

      isJsonO_RPL2_SR: !!(ro.OD?.RPL_Streak_2?.Select === 'on' || ro.OS?.RPL_Streak_2?.Select === 'on'),
      OD_RPL2_SR: `Sph: ${ro?.OD?.RPL_Streak_2?.Sph} Cyl. ${ro?.OD?.RPL_Streak_2?.Cyl} x ${ro?.OD?.RPL_Streak_2?.Axis}`,
      OS_RPL2_SR: `Sph: ${ro?.OS?.RPL_Streak_2?.Sph} Cyl. ${ro?.OS?.RPL_Streak_2?.Cyl} x ${ro?.OS?.RPL_Streak_2?.Axis}`,
      isJsonO_RPL2_SR_Visus_Akhir: !!(ro && ro.OD && ro.OS && ro.OD.RPL_Streak_2 && ro.OS.RPL_Streak_2 && ((ro.OD.RPL_Streak_2.VA && ro.OD.RPL_Streak_2.VA !== '') || (ro.OS.RPL_Streak_2.VA && ro.OS.RPL_Streak_2.VA !== '') || (ro.OD.RPL_Streak_2.Va && ro.OD.RPL_Streak_2.Va !== '') || (ro.OS.RPL_Streak_2.Va && ro.OS.RPL_Streak_2.Va !== ''))),
      JsonO_OD_RPL2_SR_Visus_Akhir: ro?.OD?.RPL_Streak_2?.VA ? ro?.OD?.RPL_Streak_2?.VA : ro?.OD?.RPL_Streak_2?.Va ? ro?.OD?.RPL_Streak_2?.Va : '',
      JsonO_OS_RPL2_SR_Visus_Akhir: ro?.OS?.RPL_Streak_2?.VA ? ro?.OS?.RPL_Streak_2?.VA : ro?.OS?.RPL_Streak_2?.Va ? ro?.OS?.RPL_Streak_2?.Va : '',

      isJsonO_RPL2_SR_PD_Jauh: !!(ro && ro.OD && ro.OS && ro.OD.RPL_Streak_2 && ro.OS.RPL_Streak_2 && ((ro.OD.RPL_Streak_2.Pd_Jauh && ro.OD.RPL_Streak_2.Pd_Jauh !== '') || (ro.OS.RPL_Streak_2.Pd_Jauh && ro.OS.RPL_Streak_2.Pd_Jauh !== '') || (ro.OD.RPL_Streak_2.Pd_Jauh && ro.OD.RPL_Streak_2.Pd_Jauh !== '') || (ro.OS.RPL_Streak_2.Pd_Jauh && ro.OS.RPL_Streak_2.Pd_Jauh !== ''))),
      JsonO_OD_RPL2_SR_PD_Jauh: ro?.OD?.RPL_Streak_2?.Pd_Jauh ? ro?.OD?.RPL_Streak_2?.Pd_Jauh : ro?.OD?.RPL_Streak_2?.Pd_Jauh ? ro?.OD?.RPL_Streak_2?.Pd_Jauh : '',
      JsonO_OS_RPL2_SR_PD_Jauh: ro?.OS?.RPL_Streak_2?.Pd_Jauh ? ro?.OS?.RPL_Streak_2?.Pd_Jauh : ro?.OS?.RPL_Streak_2?.Pd_Jauh ? ro?.OS?.RPL_Streak_2?.Pd_Jauh : '',

      isJsonO_RPL2_SR_False: !!(ro && ro.OD && ro.OS && ro.OD.RPL_Streak_2 && ro.OS.RPL_Streak_2 && ((ro.OD.RPL_Streak_2.False && ro.OD.RPL_Streak_2.False !== '') || (ro.OS.RPL_Streak_2.False && ro.OS.RPL_Streak_2.False !== '') || (ro.OD.RPL_Streak_2.False && ro.OD.RPL_Streak_2.False !== '') || (ro.OS.RPL_Streak_2.False && ro.OS.RPL_Streak_2.False !== ''))),
      JsonO_OD_RPL2_SR_False: ro?.OD?.RPL_Streak_2?.False ? ro?.OD?.RPL_Streak_2?.False : ro?.OD?.RPL_Streak_2?.False ? ro?.OD?.RPL_Streak_2?.False : '',
      JsonO_OS_RPL2_SR_False: ro?.OS?.RPL_Streak_2?.False ? ro?.OS?.RPL_Streak_2?.False : ro?.OS?.RPL_Streak_2?.False ? ro?.OS?.RPL_Streak_2?.False : '',

      isJsonO_RPL2_SR_Axis: !!(ro && ro.OD && ro.OS && ro.OD.RPL_Streak_2 && ro.OS.RPL_Streak_2 && ((ro.OD.RPL_Streak_2.Axis && ro.OD.RPL_Streak_2.Axis !== '') || (ro.OS.RPL_Streak_2.Axis && ro.OS.RPL_Streak_2.Axis !== '') || (ro.OD.RPL_Streak_2.Axis && ro.OD.RPL_Streak_2.Axis !== '') || (ro.OS.RPL_Streak_2.Axis && ro.OS.RPL_Streak_2.Axis !== ''))),
      JsonO_OD_RPL2_SR_Axis: ro?.OD?.RPL_Streak_2?.Axis ? ro?.OD?.RPL_Streak_2?.Axis : ro?.OD?.RPL_Streak_2?.Axis ? ro?.OD?.RPL_Streak_2?.Axis : '',
      JsonO_OS_RPL2_SR_Axis: ro?.OS?.RPL_Streak_2?.Axis ? ro?.OS?.RPL_Streak_2?.Axis : ro?.OS?.RPL_Streak_2?.Axis ? ro?.OS?.RPL_Streak_2?.Axis : '',

      isJsonO_RPL2_SR_Adaptasi: !!(ro && ro.OD && ro.OS && ro.OD.RPL_Streak_2 && ro.OS.RPL_Streak_2 && ((ro.OD.RPL_Streak_2.Adaptasi && ro.OD.RPL_Streak_2.Adaptasi !== '') || (ro.OS.RPL_Streak_2.Adaptasi && ro.OS.RPL_Streak_2.Adaptasi !== '') || (ro.OD.RPL_Streak_2.Adaptasi && ro.OD.RPL_Streak_2.Adaptasi !== '') || (ro.OS.RPL_Streak_2.Adaptasi && ro.OS.RPL_Streak_2.Adaptasi !== ''))),
      JsonO_OD_RPL2_SR_Adaptasi: ro?.OD?.RPL_Streak_2?.Adaptasi ? ro?.OD?.RPL_Streak_2?.Adaptasi : ro?.OD?.RPL_Streak_2?.Adaptasi ? ro?.OD?.RPL_Streak_2?.Adaptasi : '',
      JsonO_OS_RPL2_SR_Adaptasi: ro?.OS?.RPL_Streak_2?.Adaptasi ? ro?.OS?.RPL_Streak_2?.Adaptasi : ro?.OS?.RPL_Streak_2?.Adaptasi ? ro?.OS?.RPL_Streak_2?.Adaptasi : '',

      isJsonO_RPL2_SR_PH: !!(ro && ro.OD && ro.OS && ro.OD.RPL_Streak_2 && ro.OS.RPL_Streak_2 && ((ro.OD.RPL_Streak_2.PH && ro.OD.RPL_Streak_2.PH !== '') || (ro.OS.RPL_Streak_2.PH && ro.OS.RPL_Streak_2.PH !== '') || (ro.OD.RPL_Streak_2.PH && ro.OD.RPL_Streak_2.PH !== '') || (ro.OS.RPL_Streak_2.PH && ro.OS.RPL_Streak_2.PH !== ''))),
      JsonO_OD_RPL2_SR_PH: ro?.OD?.RPL_Streak_2?.PH ? ro?.OD?.RPL_Streak_2?.PH : ro?.OD?.RPL_Streak_2?.PH ? ro?.OD?.RPL_Streak_2?.PH : '',
      JsonO_OS_RPL2_SR_PH: ro?.OS?.RPL_Streak_2?.PH ? ro?.OS?.RPL_Streak_2?.PH : ro?.OS?.RPL_Streak_2?.PH ? ro?.OS?.RPL_Streak_2?.PH : '',

      // rplref
      isJsonO_RPL_RS_VA: !!(ro?.OD?.RPL?.Va_Aquity !== '' || ro?.OS?.RPL?.Va_Aquity !== ''),
      isJsonO_RPL_RS: !!(ro.OD?.RPL?.Select === 'on' || ro.OS?.RPL?.Select === 'on'),
      OD_RPL_RS: `Sph: ${ro?.OD?.RPL?.Sph} Cyl. ${ro?.OD?.RPL?.Cyl} x ${ro?.OD?.RPL?.Axis}`,
      OS_RPL_RS: `Sph: ${ro?.OS?.RPL?.Sph} Cyl. ${ro?.OS?.RPL?.Cyl} x ${ro?.OS?.RPL?.Axis}`,
      isJsonO_RPL_RS_Visus_Akhir: !!(ro && ro.OD && ro.OS && ro.OD.RPL && ro.OS.RPL && ((ro.OD.RPL.VA && ro.OD.RPL.VA !== '') || (ro.OS.RPL.VA && ro.OS.RPL.VA !== '') || (ro.OD.RPL.Va && ro.OD.RPL.Va !== '') || (ro.OS.RPL.Va && ro.OS.RPL.Va !== ''))),
      JsonO_OD_RPL_RS_Visus_Akhir: ro?.OD?.RPL?.VA ? ro?.OD?.RPL?.VA : ro?.OD?.RPL?.Va ? ro?.OD?.RPL?.Va : '',
      JsonO_OS_RPL_RS_Visus_Akhir: ro?.OS?.RPL?.VA ? ro?.OS?.RPL?.VA : ro?.OS?.RPL?.Va ? ro?.OS?.RPL?.Va : '',
      isJsonO_RPL_RS_PD_Jauh: !!(ro?.OD?.RPL?.Pd_Jauh !== '' || ro?.OS?.RPL?.Pd_Jauh !== ''),
      isJsonO_RPL_RS_False: !!(ro?.OD?.RPL?.False !== '' || ro?.OS?.RPL?.False !== ''),
      isJsonO_RPL_RS_Axis: !!(ro?.OD?.RPL?.Axis !== '' || ro?.OS?.RPL?.Axis !== ''),
      isJsonO_RPL_RS_Adaptasi: !!(ro?.OD?.RPL?.Adaptasi !== '' || ro?.OS?.RPL?.Adaptasi !== ''),
      isJsonO_RPL_RS_PH: !!(ro && ro.OD && ro.OS && ro.OD.RPL && ro.OS.RPL && ((ro.OD.RPL.PH && ro.OD.RPL.PH !== '') || (ro.OS.RPL.PH && ro.OS.RPL.PH !== '') || (ro.OD.RPL.PH && ro.OD.RPL.PH !== '') || (ro.OS.RPL.PH && ro.OS.RPL.PH !== ''))),
      JsonO_OD_RPL_RS_PH: ro?.OD?.RPL?.PH ? ro?.OD?.RPL?.PH : ro?.OD?.RPL?.PH ? ro?.OD?.RPL?.PH : '',
      JsonO_OS_RPL_RS_PH: ro?.OS?.RPL?.PH ? ro?.OS?.RPL?.PH : ro?.OS?.RPL?.PH ? ro?.OS?.RPL?.PH : '',

      // rplref2
      isJsonO_RPL2_RS_VA: !!(ro && ro.OD && ro.OS && ro.OD.RPL_2 && ro.OS.RPL_2 && ((ro.OD.RPL_2.Va_Aquity && ro.OD.RPL_2.Va_Aquity !== '') || (ro.OS.RPL_2.Va_Aquity && ro.OS.RPL_2.Va_Aquity !== '') || (ro.OD.RPL_2.Va_Aquity && ro.OD.RPL_2.Va_Aquity !== '') || (ro.OS.RPL_2.Va_Aquity && ro.OS.RPL_2.Va_Aquity !== ''))),
      JsonO_OD_RPL2_RS_VA: ro?.OD?.RPL_2?.Va_Aquity ? ro?.OD?.RPL_2?.Va_Aquity : ro?.OD?.RPL_2?.Va_Aquity ? ro?.OD?.RPL_2?.Va_Aquity : '',
      JsonO_OS_RPL2_RS_VA: ro?.OS?.RPL_2?.Va_Aquity ? ro?.OS?.RPL_2?.Va_Aquity : ro?.OS?.RPL_2?.Va_Aquity ? ro?.OS?.RPL_2?.Va_Aquity : '',

      isJsonO_RPL2_RS: !!(ro.OD?.RPL_2?.Select === 'on' || ro.OS?.RPL_2?.Select === 'on'),
      OD_RPL2_RS: `Sph: ${ro?.OD?.RPL_2?.Sph} Cyl. ${ro?.OD?.RPL_2?.Cyl} x ${ro?.OD?.RPL_2?.Axis}`,
      OS_RPL2_RS: `Sph: ${ro?.OS?.RPL_2?.Sph} Cyl. ${ro?.OS?.RPL_2?.Cyl} x ${ro?.OS?.RPL_2?.Axis}`,
      isJsonO_RPL2_RS_Visus_Akhir: !!(ro && ro.OD && ro.OS && ro.OD.RPL_2 && ro.OS.RPL_2 && ((ro.OD.RPL_2.VA && ro.OD.RPL_2.VA !== '') || (ro.OS.RPL_2.VA && ro.OS.RPL_2.VA !== '') || (ro.OD.RPL_2.Va && ro.OD.RPL_2.Va !== '') || (ro.OS.RPL_2.Va && ro.OS.RPL_2.Va !== ''))),
      JsonO_OD_RPL2_RS_Visus_Akhir: ro?.OD?.RPL_2?.VA ? ro?.OD?.RPL_2?.VA : ro?.OD?.RPL_2?.Va ? ro?.OD?.RPL_2?.Va : '',
      JsonO_OS_RPL2_RS_Visus_Akhir: ro?.OS?.RPL_2?.VA ? ro?.OS?.RPL_2?.VA : ro?.OS?.RPL_2?.Va ? ro?.OS?.RPL_2?.Va : '',

      isJsonO_RPL2_RS_PD_Jauh: !!(ro && ro.OD && ro.OS && ro.OD.RPL_2 && ro.OS.RPL_2 && ((ro.OD.RPL_2.Pd_Jauh && ro.OD.RPL_2.Pd_Jauh !== '') || (ro.OS.RPL_2.Pd_Jauh && ro.OS.RPL_2.Pd_Jauh !== '') || (ro.OD.RPL_2.Pd_Jauh && ro.OD.RPL_2.Pd_Jauh !== '') || (ro.OS.RPL_2.Pd_Jauh && ro.OS.RPL_2.Pd_Jauh !== ''))),
      JsonO_OD_RPL2_RS_PD_Jauh: ro?.OD?.RPL_2?.Pd_Jauh ? ro?.OD?.RPL_2?.Pd_Jauh : ro?.OD?.RPL_2?.Pd_Jauh ? ro?.OD?.RPL_2?.Pd_Jauh : '',
      JsonO_OS_RPL2_RS_PD_Jauh: ro?.OS?.RPL_2?.Pd_Jauh ? ro?.OS?.RPL_2?.Pd_Jauh : ro?.OS?.RPL_2?.Pd_Jauh ? ro?.OS?.RPL_2?.Pd_Jauh : '',

      isJsonO_RPL2_RS_False: !!(ro && ro.OD && ro.OS && ro.OD.RPL_2 && ro.OS.RPL_2 && ((ro.OD.RPL_2.False && ro.OD.RPL_2.False !== '') || (ro.OS.RPL_2.False && ro.OS.RPL_2.False !== '') || (ro.OD.RPL_2.False && ro.OD.RPL_2.False !== '') || (ro.OS.RPL_2.False && ro.OS.RPL_2.False !== ''))),
      JsonO_OD_RPL2_RS_False: ro?.OD?.RPL_2?.False ? ro?.OD?.RPL_2?.False : ro?.OD?.RPL_2?.False ? ro?.OD?.RPL_2?.False : '',
      JsonO_OS_RPL2_RS_False: ro?.OS?.RPL_2?.False ? ro?.OS?.RPL_2?.False : ro?.OS?.RPL_2?.False ? ro?.OS?.RPL_2?.False : '',

      isJsonO_RPL2_RS_Axis: !!(ro && ro.OD && ro.OS && ro.OD.RPL_2 && ro.OS.RPL_2 && ((ro.OD.RPL_2.Axis && ro.OD.RPL_2.Axis !== '') || (ro.OS.RPL_2.Axis && ro.OS.RPL_2.Axis !== '') || (ro.OD.RPL_2.Axis && ro.OD.RPL_2.Axis !== '') || (ro.OS.RPL_2.Axis && ro.OS.RPL_2.Axis !== ''))),
      JsonO_OD_RPL2_RS_Axis: ro?.OD?.RPL_2?.Axis ? ro?.OD?.RPL_2?.Axis : ro?.OD?.RPL_2?.Axis ? ro?.OD?.RPL_2?.Axis : '',
      JsonO_OS_RPL2_RS_Axis: ro?.OS?.RPL_2?.Axis ? ro?.OS?.RPL_2?.Axis : ro?.OS?.RPL_2?.Axis ? ro?.OS?.RPL_2?.Axis : '',

      isJsonO_RPL2_RS_Adaptasi: !!(ro && ro.OD && ro.OS && ro.OD.RPL_2 && ro.OS.RPL_2 && ((ro.OD.RPL_2.Adaptasi && ro.OD.RPL_2.Adaptasi !== '') || (ro.OS.RPL_2.Adaptasi && ro.OS.RPL_2.Adaptasi !== '') || (ro.OD.RPL_2.Adaptasi && ro.OD.RPL_2.Adaptasi !== '') || (ro.OS.RPL_2.Adaptasi && ro.OS.RPL_2.Adaptasi !== ''))),
      JsonO_OD_RPL2_RS_Adaptasi: ro?.OD?.RPL_2?.Adaptasi ? ro?.OD?.RPL_2?.Adaptasi : ro?.OD?.RPL_2?.Adaptasi ? ro?.OD?.RPL_2?.Adaptasi : '',
      JsonO_OS_RPL2_RS_Adaptasi: ro?.OS?.RPL_2?.Adaptasi ? ro?.OS?.RPL_2?.Adaptasi : ro?.OS?.RPL_2?.Adaptasi ? ro?.OS?.RPL_2?.Adaptasi : '',

      isJsonO_RPL2_RS_PH: !!(ro && ro.OD && ro.OS && ro.OD.RPL_2 && ro.OS.RPL_2 && ((ro.OD.RPL_2.PH && ro.OD.RPL_2.PH !== '') || (ro.OS.RPL_2.PH && ro.OS.RPL_2.PH !== '') || (ro.OD.RPL_2.PH && ro.OD.RPL_2.PH !== '') || (ro.OS.RPL_2.PH && ro.OS.RPL_2.PH !== ''))),
      JsonO_OD_RPL2_RS_PH: ro?.OD?.RPL_2?.PH ? ro?.OD?.RPL_2?.PH : ro?.OD?.RPL_2?.PH ? ro?.OD?.RPL_2?.PH : '',
      JsonO_OS_RPL2_RS_PH: ro?.OS?.RPL_2?.PH ? ro?.OS?.RPL_2?.PH : ro?.OS?.RPL_2?.PH ? ro?.OS?.RPL_2?.PH : '',

      tandaTanganPerawat: ro.TTD_Petugas_RO && ro.TTD_Petugas_RO !== '' ? ro.TTD_Petugas_RO : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
      namaPerawat: ro.Nama_Petugas_RO ?? '',
      // od_ket_tono: ro?.OD?.Keterangan_Tono ?? '',
      // os_ket_tono: ro?.OS?.Keterangan_Tono ?? '',

      isJsonO_Non_Contact: !!(ro && ro.OD && ro.OS && ((ro.OD.Non_Contact && ro.OD.Non_Contact !== '') || (ro.OS?.Non_Contact && ro.OS.Non_Contact !== '') || (ro.OD.Non_Contact && ro.OD.Non_Contact !== '') || (ro.OS?.Non_Contact && ro.OS.Non_Contact !== ''))),
      JsonO_OD_Non_Contact: ro?.OD?.Non_Contact ? ro?.OD?.Non_Contact : ro?.OD?.Non_Contact ? ro?.OD?.Non_Contact : '',
      JsonO_OS_Non_Contact: ro?.OS?.Non_Contact ? ro?.OS?.Non_Contact : ro?.OS?.Non_Contact ? ro?.OS?.Non_Contact : '',

      isJsonO_Keterangan: !!(ro && ro.OD && ro.OS && ((ro.OD.Tanam_Lensa && ro.OD.Tanam_Lensa !== '') || (ro.OS?.Tanam_Lensa && ro.OS.Tanam_Lensa !== '') || (ro.OD.Tanam_Lensa && ro.OD.Tanam_Lensa !== '') || (ro.OS?.Tanam_Lensa && ro.OS.Tanam_Lensa !== ''))),
      JsonO_OD_Keterangan: ro?.OD?.Tanam_Lensa ? ro?.OD?.Tanam_Lensa : ro?.OD?.Tanam_Lensa ? ro?.OD?.Tanam_Lensa : '',
      JsonO_OS_Keterangan: ro?.OS?.Tanam_Lensa ? ro?.OS?.Tanam_Lensa : ro?.OS?.Tanam_Lensa ? ro?.OS?.Tanam_Lensa : '',

      isJsonO_Schiotz: !!(ro && ro.OD && ro.OS && ((ro.OD.Schiotz && ro.OD.Schiotz !== '') || (ro.OS?.Schiotz && ro.OS.Schiotz !== '') || (ro.OD.Schiotz && ro.OD.Schiotz !== '') || (ro.OS?.Schiotz && ro.OS.Schiotz !== ''))),
      JsonO_OD_Schiotz: ro?.OD?.Schiotz ? ro?.OD?.Schiotz : ro?.OD?.Schiotz ? ro?.OD?.Schiotz : '',
      JsonO_OS_Schiotz: ro?.OS?.Schiotz ? ro?.OS?.Schiotz : ro?.OS?.Schiotz ? ro?.OS?.Schiotz : '',

      isJsonO_Keterangan_Tono: !!(ro && ro.OD && ro.OS && ((ro.OD.Keterangan_Tono && ro.OD.Keterangan_Tono !== '') || (ro.OS?.Keterangan_Tono && ro.OS.Keterangan_Tono !== '') || (ro.OD.Keterangan_Tono && ro.OD.Keterangan_Tono !== '') || (ro.OS?.Keterangan_Tono && ro.OS.Keterangan_Tono !== ''))),
      JsonO_OD_Keterangan_Tono: ro?.OD?.Keterangan_Tono ? ro?.OD?.Keterangan_Tono : ro?.OD?.Keterangan_Tono ? ro?.OD?.Keterangan_Tono : '',
      JsonO_OS_Keterangan_Tono: ro?.OS?.Keterangan_Tono ? ro?.OS?.Keterangan_Tono : ro?.OS?.Keterangan_Tono ? ro?.OS?.Keterangan_Tono : '',

      isJsonO_Catatan_Lainnya: !!(ro && ((ro.Catatan_Lain && ro.Catatan_Lain !== ''))),
      JsonO_OD_Catatan_Lainnya: ro?.Catatan_Lain ? ro?.Catatan_Lain : ro?.Catatan_Lain ? ro?.Catatan_Lain : '',
      nik: treatment?.Pasien?.NIK ?? '',

    }
  }
}
