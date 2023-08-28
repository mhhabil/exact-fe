import * as yup from 'yup';

import { AppRequest, IAppRequest } from '@src/shared/request';
import { CreatePDFRequest } from '@src/shared/pdf/requests/create-pdf.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';
import { IPrescription } from '../../doctor-preliminary-study/models/doctor-preliminary-study.model';
import { IProofOfOutpatientServicesModel, IResepObat } from '@modules/outpatient/proof-of-outpatient-services/models/proof-of-outpatient-services.model';
import { ITreatmentModel } from '@src/modules/site/patient-list/models';

import citymapping from '../const/citymapping';

export interface IUpdateProofOfOutpatientServicesRequest extends IAppRequest {
  keluhan: string;
  od_kml_select: string;
  od_kml_va_aquity: string;
  od_kml_sph: string;
  od_kml_cyl: string;
  od_kml_axis: string;
  od_koreksi_1_select: string;
  od_koreksi_1_va_aquity: string;
  od_koreksi_1_sph: string;
  od_koreksi_1_cyl: string;
  od_koreksi_1_axis: string;
  od_koreksi_2_select: string;
  od_koreksi_2_va_aquity: string;
  od_koreksi_2_sph: string;
  od_koreksi_2_cyl: string;
  od_koreksi_2_axis: string;
  od_kmb_select: string;
  od_kmb_va_aquity: string;
  od_kmb_sph: string;
  od_kmb_cyl: string;
  od_kmb_axis: string;
  od_rpl_select: string;
  od_rpl_streak_select: string;
  od_rpl_streak_va_aquity: string;
  od_rpl_streak_sph: string;
  od_rpl_streak_cyl: string;
  od_rpl_streak_axis: string;
  od_rpl_streak_false: string;
  od_rpl_streak_pd_jauh: string;
  od_rpl_streak_adaptasi: string;
  od_rpl_va_aquity: string;
  od_rpl_sph: string;
  od_rpl_cyl: string;
  od_rpl_axis: string;
  od_non_contact: string;
  od_schiotz: string;
  os_kml_select: string;
  os_kml_va_aquity: string;
  os_kml_sph: string;
  os_kml_cyl: string;
  os_kml_axis: string;
  os_koreksi_1_select: string;
  os_koreksi_1_va_aquity: string;
  os_koreksi_1_sph: string;
  os_koreksi_1_cyl: string;
  os_koreksi_1_axis: string;
  os_koreksi_2_select: string;
  os_koreksi_2_va_aquity: string;
  os_koreksi_2_sph: string;
  os_koreksi_2_cyl: string;
  os_koreksi_2_axis: string;
  os_kmb_select: string;
  os_kmb_va_aquity: string;
  os_kmb_sph: string;
  os_kmb_cyl: string;
  os_kmb_axis: string;
  os_rpl_select: string;
  os_rpl_streak_select: string;
  os_rpl_streak_va_aquity: string;
  os_rpl_streak_sph: string;
  os_rpl_streak_cyl: string;
  os_rpl_streak_axis: string;
  os_rpl_streak_false: string;
  os_rpl_streak_pd_jauh: string;
  os_rpl_streak_adaptasi: string;
  os_rpl_va_aquity: string;
  os_rpl_sph: string;
  os_rpl_cyl: string;
  os_rpl_axis: string;
  os_non_contact: string;
  os_schiotz: string;
  kgd: string;
  td: string;
  diagnosa: string;
  terapi: string;
  anjuran: string;
  tanggal_ttd: string;
  tanda_tangan_radio: string;
  tanda_tangan_pasien: string;
  tanda_tangan_wali: string;
  ttd_dokter: string;
  doctor_id: string;
  doctor_sip: string;
}

export class UpdateProofOfOutpatientServicesRequest extends AppRequest {
  keluhan: string;
  od_kml_select: string;
  od_kml_va_aquity: string;
  od_kml_sph: string;
  od_kml_cyl: string;
  od_kml_axis: string;
  od_koreksi_1_select: string;
  od_koreksi_1_va_aquity: string;
  od_koreksi_1_sph: string;
  od_koreksi_1_cyl: string;
  od_koreksi_1_axis: string;
  od_koreksi_2_select: string;
  od_koreksi_2_va_aquity: string;
  od_koreksi_2_sph: string;
  od_koreksi_2_cyl: string;
  od_koreksi_2_axis: string;
  od_kmb_select: string;
  od_kmb_va_aquity: string;
  od_kmb_sph: string;
  od_kmb_cyl: string;
  od_kmb_axis: string;
  od_rpl_select: string;
  od_rpl_streak_select: string;
  od_rpl_streak_va_aquity: string;
  od_rpl_streak_sph: string;
  od_rpl_streak_cyl: string;
  od_rpl_streak_axis: string;
  od_rpl_streak_false: string;
  od_rpl_streak_pd_jauh: string;
  od_rpl_streak_adaptasi: string;
  od_rpl_va_aquity: string;
  od_rpl_sph: string;
  od_rpl_cyl: string;
  od_rpl_axis: string;
  od_non_contact: string;
  od_schiotz: string;
  os_kml_select: string;
  os_kml_va_aquity: string;
  os_kml_sph: string;
  os_kml_cyl: string;
  os_kml_axis: string;
  os_koreksi_1_select: string;
  os_koreksi_1_va_aquity: string;
  os_koreksi_1_sph: string;
  os_koreksi_1_cyl: string;
  os_koreksi_1_axis: string;
  os_koreksi_2_select: string;
  os_koreksi_2_va_aquity: string;
  os_koreksi_2_sph: string;
  os_koreksi_2_cyl: string;
  os_koreksi_2_axis: string;
  os_kmb_select: string;
  os_kmb_va_aquity: string;
  os_kmb_sph: string;
  os_kmb_cyl: string;
  os_kmb_axis: string;
  os_rpl_select: string;
  os_rpl_streak_select: string;
  os_rpl_streak_va_aquity: string;
  os_rpl_streak_sph: string;
  os_rpl_streak_cyl: string;
  os_rpl_streak_axis: string;
  os_rpl_streak_false: string;
  os_rpl_streak_pd_jauh: string;
  os_rpl_streak_adaptasi: string;
  os_rpl_va_aquity: string;
  os_rpl_sph: string;
  os_rpl_cyl: string;
  os_rpl_axis: string;
  os_non_contact: string;
  os_schiotz: string;
  kgd: string;
  td: string;
  diagnosa: string;
  terapi: string;
  anjuran: string;
  tanggal_ttd: string;
  tanda_tangan_radio: string;
  tanda_tangan_pasien: string;
  tanda_tangan_wali: string;
  ttd_dokter: string;
  doctor_id: string;
  doctor_sip: string;

  constructor(form: IUpdateProofOfOutpatientServicesRequest) {
    super(form);
    this.keluhan = form.keluhan;
    this.od_kml_select = form.od_kml_select ? 'on' : '';
    this.od_kml_va_aquity = form.od_kml_va_aquity;
    this.od_kml_sph = form.od_kml_sph;
    this.od_kml_cyl = form.od_kml_cyl;
    this.od_kml_axis = form.od_kml_axis;
    this.od_koreksi_1_select = form.od_koreksi_1_select ? 'on' : '';
    this.od_koreksi_1_va_aquity = form.od_koreksi_1_va_aquity;
    this.od_koreksi_1_sph = form.od_koreksi_1_sph;
    this.od_koreksi_1_cyl = form.od_koreksi_1_cyl;
    this.od_koreksi_1_axis = form.od_koreksi_1_axis;
    this.od_koreksi_2_select = form.od_koreksi_2_select ? 'on' : '';
    this.od_koreksi_2_va_aquity = form.od_koreksi_2_va_aquity;
    this.od_koreksi_2_sph = form.od_koreksi_2_sph;
    this.od_koreksi_2_cyl = form.od_koreksi_2_cyl;
    this.od_koreksi_2_axis = form.od_koreksi_2_axis;
    this.od_kmb_select = form.od_kmb_select ? 'on' : '';
    this.od_kmb_va_aquity = form.od_kmb_va_aquity;
    this.od_kmb_sph = form.od_kmb_sph;
    this.od_kmb_cyl = form.od_kmb_cyl;
    this.od_kmb_axis = form.od_kmb_axis;
    this.od_rpl_select = form.od_rpl_select ? 'on' : '';
    this.od_rpl_streak_select = form.od_rpl_streak_select ? 'on' : '';
    this.od_rpl_streak_va_aquity = form.od_rpl_streak_va_aquity;
    this.od_rpl_streak_sph = form.od_rpl_streak_sph;
    this.od_rpl_streak_cyl = form.od_rpl_streak_cyl;
    this.od_rpl_streak_axis = form.od_rpl_streak_axis;
    this.od_rpl_streak_false = form.od_rpl_streak_false;
    this.od_rpl_streak_pd_jauh = form.od_rpl_streak_pd_jauh;
    this.od_rpl_streak_adaptasi = form.od_rpl_streak_adaptasi;
    this.od_rpl_va_aquity = form.od_rpl_va_aquity;
    this.od_rpl_sph = form.od_rpl_sph;
    this.od_rpl_cyl = form.od_rpl_cyl;
    this.od_rpl_axis = form.od_rpl_axis;
    this.od_non_contact = form.od_non_contact
    this.od_schiotz = form.od_schiotz;
    this.os_kml_select = form.os_kml_select ? 'on' : '';
    this.os_kml_va_aquity = form.os_kml_va_aquity;
    this.os_kml_sph = form.os_kml_sph;
    this.os_kml_cyl = form.os_kml_cyl;
    this.os_kml_axis = form.os_kml_axis;
    this.os_koreksi_1_select = form.os_koreksi_1_select ? 'on' : '';
    this.os_koreksi_1_va_aquity = form.os_koreksi_1_va_aquity;
    this.os_koreksi_1_sph = form.os_koreksi_1_sph;
    this.os_koreksi_1_cyl = form.os_koreksi_1_cyl;
    this.os_koreksi_1_axis = form.os_koreksi_1_axis;
    this.os_koreksi_2_select = form.os_koreksi_2_select ? 'on' : '';
    this.os_koreksi_2_va_aquity = form.os_koreksi_2_va_aquity;
    this.os_koreksi_2_sph = form.os_koreksi_2_sph;
    this.os_koreksi_2_cyl = form.os_koreksi_2_cyl;
    this.os_koreksi_2_axis = form.os_koreksi_2_axis;
    this.os_kmb_select = form.os_kmb_select ? 'on' : '';
    this.os_kmb_va_aquity = form.os_kmb_va_aquity;
    this.os_kmb_sph = form.os_kmb_sph;
    this.os_kmb_cyl = form.os_kmb_cyl;
    this.os_kmb_axis = form.os_kmb_axis;
    this.os_rpl_select = form.os_rpl_select ? 'on' : '';
    this.os_rpl_streak_select = form.os_rpl_streak_select ? 'on' : '';
    this.os_rpl_streak_va_aquity = form.os_rpl_streak_va_aquity;
    this.os_rpl_streak_sph = form.os_rpl_streak_sph;
    this.os_rpl_streak_cyl = form.os_rpl_streak_cyl;
    this.os_rpl_streak_axis = form.os_rpl_streak_axis;
    this.os_rpl_streak_false = form.os_rpl_streak_false;
    this.os_rpl_streak_pd_jauh = form.os_rpl_streak_pd_jauh;
    this.os_rpl_streak_adaptasi = form.os_rpl_streak_adaptasi;
    this.os_rpl_va_aquity = form.os_rpl_va_aquity;
    this.os_rpl_sph = form.os_rpl_sph;
    this.os_rpl_cyl = form.os_rpl_cyl;
    this.os_rpl_axis = form.os_rpl_axis;
    this.os_non_contact = form.os_non_contact;
    this.os_schiotz = form.os_schiotz;
    this.kgd = form.kgd;
    this.td = form.td;
    this.diagnosa = form.diagnosa;
    this.terapi = form.terapi;
    this.anjuran = form.anjuran;
    this.tanggal_ttd = form.tanggal_ttd;
    this.tanda_tangan_radio = form.tanda_tangan_radio;
    this.tanda_tangan_pasien = form.tanda_tangan_pasien;
    this.tanda_tangan_wali = form.tanda_tangan_wali;
    this.ttd_dokter = form.ttd_dokter;
    this.doctor_id = form.doctor_id;
    this.doctor_sip = form.doctor_sip;
  }
  static schema() {
    return yup.object().shape({
      keluhan: yup.string(),
      od_kml_select: yup.string(),
      od_kml_va_aquity: yup.string(),
      od_kml_sph: yup.string(),
      od_kml_cyl: yup.string(),
      od_kml_axis: yup.string(),
      od_koreksi_1_select: yup.string(),
      od_koreksi_1_va_aquity: yup.string(),
      od_koreksi_1_sph: yup.string(),
      od_koreksi_1_cyl: yup.string(),
      od_koreksi_1_axis: yup.string(),
      od_koreksi_2_select: yup.string(),
      od_koreksi_2_va_aquity: yup.string(),
      od_koreksi_2_sph: yup.string(),
      od_koreksi_2_cyl: yup.string(),
      od_koreksi_2_axis: yup.string(),
      od_kmb_select: yup.string(),
      od_kmb_va_aquity: yup.string(),
      od_kmb_sph: yup.string(),
      od_kmb_cyl: yup.string(),
      od_kmb_axis: yup.string(),
      od_rpl_select: yup.string(),
      od_rpl_streak_select: yup.string(),
      od_rpl_streak_va_aquity: yup.string(),
      od_rpl_streak_sph: yup.string(),
      od_rpl_streak_cyl: yup.string(),
      od_rpl_streak_axis: yup.string(),
      od_rpl_streak_false: yup.string(),
      od_rpl_streak_pd_jauh: yup.string(),
      od_rpl_streak_adaptasi: yup.string(),
      od_rpl_va_aquity: yup.string(),
      od_rpl_sph: yup.string(),
      od_rpl_cyl: yup.string(),
      od_rpl_axis: yup.string(),
      od_non_contact: yup.string(),
      od_schiotz: yup.string(),
      os_kml_select: yup.string(),
      os_kml_va_aquity: yup.string(),
      os_kml_sph: yup.string(),
      os_kml_cyl: yup.string(),
      os_kml_axis: yup.string(),
      os_koreksi_1_select: yup.string(),
      os_koreksi_1_va_aquity: yup.string(),
      os_koreksi_1_sph: yup.string(),
      os_koreksi_1_cyl: yup.string(),
      os_koreksi_1_axis: yup.string(),
      os_koreksi_2_select: yup.string(),
      os_koreksi_2_va_aquity: yup.string(),
      os_koreksi_2_sph: yup.string(),
      os_koreksi_2_cyl: yup.string(),
      os_koreksi_2_axis: yup.string(),
      os_kmb_select: yup.string(),
      os_kmb_va_aquity: yup.string(),
      os_kmb_sph: yup.string(),
      os_kmb_cyl: yup.string(),
      os_kmb_axis: yup.string(),
      os_rpl_select: yup.string(),
      os_rpl_streak_select: yup.string(),
      os_rpl_streak_va_aquity: yup.string(),
      os_rpl_streak_sph: yup.string(),
      os_rpl_streak_cyl: yup.string(),
      os_rpl_streak_axis: yup.string(),
      os_rpl_streak_false: yup.string(),
      os_rpl_streak_pd_jauh: yup.string(),
      os_rpl_streak_adaptasi: yup.string(),
      os_rpl_va_aquity: yup.string(),
      os_rpl_sph: yup.string(),
      os_rpl_cyl: yup.string(),
      os_rpl_axis: yup.string(),
      os_non_contact: yup.string(),
      os_schiotz: yup.string(),
      kgd: yup.string(),
      td: yup.string(),
      diagnosa: yup.string(),
      terapi: yup.string(),
      anjuran: yup.string(),
      tanggal_ttd: yup.string(),
      tanda_tangan_radio: yup.string(),
      tanda_tangan_pasien: yup.string(),
      tanda_tangan_wali: yup.string(),
      ttd_dokter: yup.string(),
      doctor_id: yup.string(),
      doctor_sip: yup.string(),
    });
  }

  normalize() {
    return {
      keluhan: this.keluhan,
      'od-kml-select': this.od_kml_select,
      'od-koreksi-1-select': this.od_koreksi_1_select,
      'od-koreksi-2-select': this.od_koreksi_2_select,
      'od-kmb-select': this.od_kmb_select,
      'od-rpl-select': this.od_rpl_select,
      'od-rpl-streak-select': this.od_rpl_streak_select,
      'os-kml-select': this.os_kml_select,
      'os-koreksi-1-select': this.os_koreksi_1_select,
      'os-koreksi-2-select': this.os_koreksi_2_select,
      'os-kmb-select': this.os_kmb_select,
      'os-rpl-select': this.os_rpl_select,
      'os-rpl-streak-select': this.os_rpl_streak_select,
      kgd: this.kgd,
      td: this.td,
      diagnosa: this.diagnosa,
      terapi: this.terapi,
      anjuran: this.anjuran,
      'tanggal-ttd': this.tanggal_ttd ? DateTimeConverter.convertToNormalDatetime(this.tanggal_ttd) : '',
      'tanda-tangan-radio': this.tanda_tangan_radio,
      'tanda-tangan-pasien': this.tanda_tangan_pasien,
      'tanda-tangan-wali': this.tanda_tangan_wali,
      'ttd-dokter': this.ttd_dokter,
      'id-dokter': this.doctor_id,
      'sip-dokter': this.doctor_sip,
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

  static createFromJson(json: IUpdateProofOfOutpatientServicesRequest) {
    return new UpdateProofOfOutpatientServicesRequest(json);
  }
}

export interface IBPRJPdfRequest {
  emr_id: string;
  form_name: string;
  row_filter: string;
  preview: boolean;
  data: any;
}

export class BPRJPdfRequest {
  emr_id: string;
  form_name: string;
  row_filter: string;
  preview: boolean;
  data: any;

  constructor(req: IBPRJPdfRequest) {
    this.emr_id = req.emr_id;
    this.form_name = req.form_name;
    this.row_filter = req.row_filter;
    this.preview = req.preview;
    this.data = req.data;
  }

  static createFromJson(json: IBPRJPdfRequest) {
    return new BPRJPdfRequest(json);
  }

  static createPdfRequest(value: IProofOfOutpatientServicesModel, treatment: ITreatmentModel) {
    const resep = value.tebus_obat && value.tebus_obat.Daftar_Tebus && Array.isArray(value.tebus_obat.Daftar_Tebus) && value.tebus_obat.Daftar_Tebus.length > 0 ? value.tebus_obat.Daftar_Tebus : [];
    const newResep = resep.map((item: IResepObat, key: number) => {
      return {
        no: `${key + 1}`,
        namaObat: item.Nama_Obat,
        namaSatuan: item.Nama_Satuan,
        jumlah: item.Jumlah,
        aturanPakai: item.Nama_AturanPakai,
        catatan: item.Catatan,
      }
    });
    const getDiagnoseValue = () => {
      const diagnose = (value && value.pengkajian_awal && value.pengkajian_awal.Diagnosa) ? value.pengkajian_awal.Diagnosa : (value && value.pengkajian_awal && value.pengkajian_awal.Data_A) ? value.pengkajian_awal.Data_A : ''
      if (treatment && treatment.Penanganan && treatment.Penanganan === 'Operasi') {
        const condition = !!(value.laporan_pembedahan && value.laporan_pembedahan.Diagnosa_Pra_Bedah && value.laporan_pembedahan.Diagnosa_Pra_Bedah !== '')
        if (condition) {
          return value.laporan_pembedahan.Diagnosa_Pra_Bedah;
        } else {
          return diagnose;
        }
      } else {
        return diagnose;
      }
    }
    const getCity = (companyCode: string) => {
      const selected = citymapping.find((item: any) => item.company_code === companyCode);
      if (selected) {
        return selected.city;
      } else {
        return '';
      }
    }

    const isTtdPasien = !!(value.form && value.form.Tanda_Tangan_Radio && value.form.Tanda_Tangan_Radio === '1' && value.form.Tanda_Tangan_Pasien && value.form.Tanda_Tangan_Pasien !== '');
    const isTtdWali = !!(value.form && value.form.Tanda_Tangan_Radio && value.form.Tanda_Tangan_Radio === '2' && value.form.Tanda_Tangan_Wali && value.form.Tanda_Tangan_Wali !== '');
    return {
      emr_id: value.EMR_ID,
      form_name: "rawat-jalan_bukti-pelayanan-rawat-jalan",
      row_filter: "",
      preview: false,
      data: {
        'pasien.Umur': CreatePDFRequest.normalizeAge(treatment?.Pasien?.Umur_Lengkap),
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(treatment?.Pasien?.Tgl_Lahir),
        complaint: value.ro && value.ro.Keluhan ? value.ro.Keluhan : value.ro && value.ro.Keluhan_Lain ? value.ro.Keluhan_Lain : '',
        isJsonO_VA: !!(value.ro && (value?.ro?.OD?.VA !== '' || value?.ro?.OS?.VA !== '')),
        isJsonO_False: !!(value.ro && (value?.ro?.OD?.False !== '' || value?.ro?.OS?.False !== '')),
        isJsonO_PH: !!(value.ro && (value?.ro?.OD?.PH !== '' || value?.ro?.OS?.PH !== '')),
        isJsonO_Add: !!(value.ro && (value?.ro?.OD?.Add !== '' || value?.ro?.OS?.Add !== '')),
        isJsonO_Jagger: !!(value.ro && (value?.ro?.OD?.Jagger !== '' || value?.ro?.OS?.Jagger !== '')),
        isJsonO_KML: !!(value.form && (value?.form?.OD?.KML?.Select === 'on' || value?.form?.OS?.KML?.Select === 'on')),
        OD_KML: `Sph: ${value?.ro?.OD?.KML?.Sph} Cyl. ${value?.ro?.OD?.KML?.Cyl} x ${value?.ro?.OD?.KML?.Axis}`,
        OS_KML: `Sph: ${value?.ro?.OS?.KML?.Sph} Cyl. ${value?.ro?.OS?.KML?.Cyl} x ${value?.ro?.OS?.KML?.Axis}`,
        isJsonO_KML_VA: !!(value.ro?.OD?.KML?.VA !== '' || value.ro?.OS?.KML?.VA !== '' || value.ro?.OD?.KML?.Va !== '' || value.ro?.OS?.KML?.Va !== ''),
        JsonO_OD_KML_VA: value?.ro?.OD?.KML?.VA ? value?.ro?.OD?.KML?.VA : value?.ro?.OD?.KML?.Va ? value?.ro?.OD?.KML?.Va : '',
        JsonO_OS_KML_VA: value?.ro?.OS?.KML?.VA ? value?.ro?.OS?.KML?.VA : value?.ro?.OS?.KML?.Va ? value?.ro?.OS?.KML?.Va : '',
        isJsonO_KML_PD_Jauh: !!(value?.ro?.OD?.KML?.Pd_Jauh !== '' || value?.ro?.OS?.KML?.Pd_Jauh !== ''),
        isJsonO_KML_PD_Dekat: !!(value?.ro?.OD?.KML?.Pd_Dekat !== '' || value?.ro?.OS?.KML?.Pd_Dekat !== ''),
        isJsonO_KML_False: !!(value?.ro?.OD?.KML?.False !== '' || value?.ro?.OS?.KML?.False !== ''),
        isJsonO_KML_Addisi: !!(value?.ro?.OD?.KML?.Add !== '' || value?.ro?.OS?.KML?.Add !== ''),
        isJsonO_KML_Axis: !!(value?.ro?.OD?.KML?.Axis !== '' || value?.ro?.OS?.KML?.Axis !== ''),
        isJsonO_KML_Jagger: !!(value?.ro?.OD?.KML?.Jagger !== '' || value?.ro?.OS?.KML?.Jagger !== ''),
        isJsonO_Koreksi1: !!(value?.form?.OD?.Koreksi_1?.Select === 'on' || value?.form?.OS?.Koreksi_1?.Select === 'on'),
        OD_Koreksi1: `Sph: ${value?.ro?.OD?.Koreksi_1?.Sph} Cyl. ${value?.ro?.OD?.Koreksi_1?.Cyl} x ${value?.ro?.OD?.Koreksi_1?.Axis}`,
        OS_Koreksi1: `Sph: ${value?.ro?.OS?.Koreksi_1?.Sph} Cyl. ${value?.ro?.OS?.Koreksi_1?.Cyl} x ${value?.ro?.OS?.Koreksi_1?.Axis}`,
        isJsonO_Koreksi1_VA: !!(value.ro?.OD?.Koreksi_1?.VA !== '' || value.ro?.OS?.Koreksi_1?.VA !== '' || value.ro?.OD?.Koreksi_1?.Va !== '' || value.ro?.OS?.Koreksi_1?.Va !== ''),
        JsonO_OD_Koreksi1_VA: value?.ro?.OD?.Koreksi_1?.VA ? value?.ro?.OD?.Koreksi_1?.VA : value?.ro?.OD?.Koreksi_1?.Va ? value?.ro?.OD?.Koreksi_1?.Va : '',
        JsonO_OS_Koreksi1_VA: value?.ro?.OS?.Koreksi_1?.VA ? value?.ro?.OS?.Koreksi_1?.VA : value?.ro?.OS?.Koreksi_1?.Va ? value?.ro?.OS?.Koreksi_1?.Va : '',
        isJsonO_Koreksi1_PD_Jauh: !!(value?.ro?.OD?.Koreksi_1?.Pd_Jauh !== '' || value?.ro?.OS?.Koreksi_1?.Pd_Jauh !== ''),
        isJsonO_Koreksi1_PD_Dekat: !!(value?.ro?.OD?.Koreksi_1?.Pd_Dekat !== '' || value?.ro?.OS?.Koreksi_1?.Pd_Dekat !== ''),
        isJsonO_Koreksi1_False: !!(value?.ro?.OD?.Koreksi_1?.False !== '' || value?.ro?.OS?.Koreksi_1?.False !== ''),
        isJsonO_Koreksi1_Addisi: !!(value?.ro?.OD?.Koreksi_1?.Add !== '' || value?.ro?.OS?.Koreksi_1?.Add !== ''),
        isJsonO_Koreksi1_Axis: !!(value?.ro?.OD?.Koreksi_1?.Axis !== '' || value?.ro?.OS?.Koreksi_1?.Axis !== ''),
        isJsonO_Koreksi1_Jagger: !!(value?.ro?.OD?.Koreksi_1?.Jagger !== '' || value?.ro?.OS?.Koreksi_1?.Jagger !== ''),
        isJsonO_Koreksi1_Adaptasi: !!(value?.ro?.OD?.Koreksi_1?.Adaptasi !== '' || value?.ro?.OS?.Koreksi_1?.Adaptasi !== ''),
        isJsonO_Koreksi2: !!(value?.form?.OD?.Koreksi_2?.Select === 'on' || value?.form?.OS?.Koreksi_2?.Select === 'on'),
        OD_Koreksi2: `Sph: ${value?.ro?.OD?.Koreksi_2?.Sph} Cyl. ${value?.ro?.OD?.Koreksi_2?.Cyl} x ${value?.ro?.OD?.Koreksi_2?.Axis}`,
        OS_Koreksi2: `Sph: ${value?.ro?.OS?.Koreksi_2?.Sph} Cyl. ${value?.ro?.OS?.Koreksi_2?.Cyl} x ${value?.ro?.OS?.Koreksi_2?.Axis}`,
        isJsonO_Koreksi2_VA: !!(value.ro?.OD?.Koreksi_2?.VA !== '' || value.ro?.OS?.Koreksi_2?.VA !== '' || value.ro?.OD?.Koreksi_2?.Va !== '' || value.ro?.OS?.Koreksi_2?.Va !== ''),
        JsonO_OD_Koreksi2_VA: value?.ro?.OD?.Koreksi_2?.VA ? value?.ro?.OD?.Koreksi_2?.VA : value?.ro?.OD?.Koreksi_2?.Va ? value?.ro?.OD?.Koreksi_2?.Va : '',
        JsonO_OS_Koreksi2_VA: value?.ro?.OS?.Koreksi_2?.VA ? value?.ro?.OS?.Koreksi_2?.VA : value?.ro?.OS?.Koreksi_2?.Va ? value?.ro?.OS?.Koreksi_2?.Va : '',
        isJsonO_Koreksi2_PD_Jauh: !!(value?.ro?.OD?.Koreksi_2?.Pd_Jauh !== '' || value?.ro?.OS?.Koreksi_2?.Pd_Jauh !== ''),
        isJsonO_Koreksi2_PD_Dekat: !!(value?.ro?.OD?.Koreksi_2?.Pd_Dekat !== '' || value?.ro?.OS?.Koreksi_2?.Pd_Dekat !== ''),
        isJsonO_Koreksi2_False: !!(value?.ro?.OD?.Koreksi_2?.False !== '' || value?.ro?.OS?.Koreksi_2?.False !== ''),
        isJsonO_Koreksi2_Addisi: !!(value?.ro?.OD?.Koreksi_2?.Add !== '' || value?.ro?.OS?.Koreksi_2?.Add !== ''),
        isJsonO_Koreksi2_Axis: !!(value?.ro?.OD?.Koreksi_2?.Axis !== '' || value?.ro?.OS?.Koreksi_2?.Axis !== ''),
        isJsonO_Koreksi2_Jagger: !!(value?.ro?.OD?.Koreksi_2?.Jagger !== '' || value?.ro?.OS?.Koreksi_2?.Jagger !== ''),
        isJsonO_Koreksi2_Adaptasi: !!(value?.ro?.OD?.Koreksi_2?.Adaptasi !== '' || value?.ro?.OS?.Koreksi_2?.Adaptasi !== ''),
        isJsonO_KMB: !!(value?.form?.OD?.KMB?.Select === 'on' || value?.form?.OS?.KMB?.Select === 'on'),
        OD_KMB: `Sph: ${value?.ro?.OD?.KMB?.Sph} Cyl. ${value?.ro?.OD?.KMB?.Cyl} x ${value?.ro?.OD?.KMB?.Axis}`,
        OS_KMB: `Sph: ${value?.ro?.OS?.KMB?.Sph} Cyl. ${value?.ro?.OS?.KMB?.Cyl} x ${value?.ro?.OS?.KMB?.Axis}`,
        isJsonO_KMB_PD_Jauh: !!(value?.ro?.OD?.KMB?.Pd_Jauh !== '' || value?.ro?.OS?.KMB?.Pd_Jauh !== ''),
        isJsonO_KMB_PD_Dekat: !!(value?.ro?.OD?.KMB?.Pd_Dekat !== '' || value?.ro?.OS?.KMB?.Pd_Dekat !== ''),
        isJsonO_KMB_False: !!(value?.ro?.OD?.KMB?.False !== '' || value?.ro?.OS?.KMB?.False !== ''),
        isJsonO_KMB_Addisi: !!(value?.ro?.OD?.KMB?.Add !== '' || value?.ro?.OS?.KMB?.Add !== ''),
        isJsonO_KMB_Axis: !!(value?.ro?.OD?.KMB?.Axis !== '' || value?.ro?.OS?.KMB?.Axis !== ''),
        isJsonO_KMB_Jagger: !!(value?.ro?.OD?.KMB?.Jagger !== '' || value?.ro?.OS?.KMB?.Jagger !== ''),

        isJsonO_RPL: !!(value?.form?.OD?.RPL?.Select === 'on' || value?.form?.OS?.RPL?.Select === 'on' || value?.form?.OD?.RPL_Streak?.Select === 'on' || value?.form?.OS?.RPL_Streak?.Select === 'on'),
        isJsonO_RPL_SR_VA: !!(value?.ro?.OD?.RPL_Streak?.Va_Aquity !== '' || value?.ro?.OS?.RPL_Streak?.Va_Aquity !== ''),
        isJsonO_RPL_SR: !!(value?.ro?.OD?.RPL_Streak?.Select === 'on' || value?.ro?.OS?.RPL_Streak?.Select === 'on'),
        OD_RPL_SR: `Sph: ${value?.ro?.OD?.RPL_Streak?.Sph} Cyl. ${value?.ro?.OD?.RPL_Streak?.Cyl} x ${value?.ro?.OD?.RPL_Streak?.Axis}`,
        OS_RPL_SR: `Sph: ${value?.ro?.OS?.RPL_Streak?.Sph} Cyl. ${value?.ro?.OS?.RPL_Streak?.Cyl} x ${value?.ro?.OS?.RPL_Streak?.Axis}`,
        
        isJsonO_RPL_SR_Visus_Akhir: !!(value.ro?.OD?.RPL_Streak?.VA !== '' || value.ro?.OS?.RPL_Streak?.VA !== '' || value.ro?.OD?.RPL_Streak?.Va !== '' || value.ro?.OS?.RPL_Streak?.Va !== ''),
        JsonO_OD_RPL_SR_Visus_Akhir: value?.ro?.OD?.RPL_Streak?.VA ? value?.ro?.OD?.RPL_Streak?.VA : value?.ro?.OD?.RPL_Streak?.Va ? value?.ro?.OD?.RPL_Streak?.Va : '',
        JsonO_OS_RPL_SR_Visus_Akhir: value?.ro?.OS?.RPL_Streak?.VA ? value?.ro?.OS?.RPL_Streak?.VA : value?.ro?.OS?.RPL_Streak?.Va ? value?.ro?.OS?.RPL_Streak?.Va : '',
        isJsonO_RPL_SR_PD_Jauh: !!(value?.ro?.OD?.RPL_Streak?.Pd_Jauh !== '' || value?.ro?.OS?.RPL_Streak?.Pd_Jauh !== ''),
        isJsonO_RPL_SR_False: !!(value?.ro?.OD?.RPL_Streak?.False !== '' || value?.ro?.OS?.RPL_Streak?.False !== ''),
        isJsonO_RPL_SR_Axis: !!(value?.ro?.OD?.RPL_Streak?.Axis !== '' || value?.ro?.OS?.RPL_Streak?.Axis !== ''),
        isJsonO_RPL_SR_Adaptasi: !!(value?.ro?.OD?.RPL_Streak?.Adaptasi !== '' || value?.ro?.OS?.RPL_Streak?.Adaptasi !== ''),

        isJsonO_RPL2: !!(value?.ro?.OD?.RPL_2?.Select === 'on' || value?.ro?.OS?.RPL_2?.Select === 'on' || value?.ro?.OD?.RPL_Streak_2?.Select === 'on' || value?.ro?.OS?.RPL_Streak_2?.Select === 'on'),
        isJsonO_RPL2_SR_VA: !!(value.ro?.OD?.RPL_Streak_2?.Va_Aquity !== '' || value.ro?.OS?.RPL_Streak_2?.Va_Aquity !== '' || value.ro?.OD?.RPL_Streak_2?.Va_Aquity !== '' || value.ro?.OS?.RPL_Streak_2?.Va_Aquity !== ''),
        JsonO_OD_RPL2_SR_VA: value?.ro?.OD?.RPL_Streak_2?.Va_Aquity ? value?.ro?.OD?.RPL_Streak_2?.Va_Aquity : value?.ro?.OD?.RPL_Streak_2?.Va_Aquity ? value?.ro?.OD?.RPL_Streak_2?.Va_Aquity : '',
        JsonO_OS_RPL2_SR_VA: value?.ro?.OS?.RPL_Streak_2?.Va_Aquity ? value?.ro?.OS?.RPL_Streak_2?.Va_Aquity : value?.ro?.OS?.RPL_Streak_2?.Va_Aquity ? value?.ro?.OS?.RPL_Streak_2?.Va_Aquity : '',

        isJsonO_RPL2_SR: !!(value?.ro?.OD?.RPL_Streak_2?.Select === 'on' || value?.ro?.OS?.RPL_Streak_2?.Select === 'on'),
        OD_RPL2_SR: `Sph: ${value?.ro?.OD?.RPL_Streak_2?.Sph} Cyl. ${value?.ro?.OD?.RPL_Streak_2?.Cyl} x ${value?.ro?.OD?.RPL_Streak_2?.Axis}`,
        OS_RPL2_SR: `Sph: ${value?.ro?.OS?.RPL_Streak_2?.Sph} Cyl. ${value?.ro?.OS?.RPL_Streak_2?.Cyl} x ${value?.ro?.OS?.RPL_Streak_2?.Axis}`,

        isJsonO_RPL2_SR_Visus_Akhir: !!(value.ro?.OD?.RPL_Streak_2?.VA !== '' || value.ro?.OS?.RPL_Streak_2?.VA !== '' || value.ro?.OD?.RPL_Streak_2?.Va !== '' || value.ro?.OS?.RPL_Streak_2?.Va !== ''),
        JsonO_OD_RPL2_SR_Visus_Akhir: value?.ro?.OD?.RPL_Streak_2?.VA ? value?.ro?.OD?.RPL_Streak_2?.VA : value?.ro?.OD?.RPL_Streak_2?.Va ? value?.ro?.OD?.RPL_Streak_2?.Va : '',
        JsonO_OS_RPL2_SR_Visus_Akhir: value?.ro?.OS?.RPL_Streak_2?.VA ? value?.ro?.OS?.RPL_Streak_2?.VA : value?.ro?.OS?.RPL_Streak_2?.Va ? value?.ro?.OS?.RPL_Streak_2?.Va : '',

        isJsonO_RPL2_SR_PD_Jauh: !!(value.ro?.OD?.RPL_Streak_2?.Pd_Jauh !== '' || value.ro?.OS?.RPL_Streak_2?.Pd_Jauh !== '' || value.ro?.OD?.RPL_Streak_2?.Pd_Jauh !== '' || value.ro?.OS?.RPL_Streak_2?.Pd_Jauh !== ''),
        JsonO_OD_RPL2_SR_PD_Jauh: value?.ro?.OD?.RPL_Streak_2?.Pd_Jauh ? value?.ro?.OD?.RPL_Streak_2?.Pd_Jauh : value?.ro?.OD?.RPL_Streak_2?.Pd_Jauh ? value?.ro?.OD?.RPL_Streak_2?.Pd_Jauh : '',
        JsonO_OS_RPL2_SR_PD_Jauh: value?.ro?.OS?.RPL_Streak_2?.Pd_Jauh ? value?.ro?.OS?.RPL_Streak_2?.Pd_Jauh : value?.ro?.OS?.RPL_Streak_2?.Pd_Jauh ? value?.ro?.OS?.RPL_Streak_2?.Pd_Jauh : '',

        isJsonO_RPL2_SR_False: !!(value.ro?.OD?.RPL_Streak_2?.False !== '' || value.ro?.OS?.RPL_Streak_2?.False !== '' || value.ro?.OD?.RPL_Streak_2?.False !== '' || value.ro?.OS?.RPL_Streak_2?.False !== ''),
        JsonO_OD_RPL2_SR_False: value?.ro?.OD?.RPL_Streak_2?.False ? value?.ro?.OD?.RPL_Streak_2?.False : value?.ro?.OD?.RPL_Streak_2?.False ? value?.ro?.OD?.RPL_Streak_2?.False : '',
        JsonO_OS_RPL2_SR_False: value?.ro?.OS?.RPL_Streak_2?.False ? value?.ro?.OS?.RPL_Streak_2?.False : value?.ro?.OS?.RPL_Streak_2?.False ? value?.ro?.OS?.RPL_Streak_2?.False : '',

        isJsonO_RPL2_SR_Axis: !!(value.ro?.OD?.RPL_Streak_2?.Axis !== '' || value.ro?.OS?.RPL_Streak_2?.Axis !== '' || value.ro?.OD?.RPL_Streak_2?.Axis !== '' || value.ro?.OS?.RPL_Streak_2?.Axis !== ''),
        JsonO_OD_RPL2_SR_Axis: value?.ro?.OD?.RPL_Streak_2?.Axis ? value?.ro?.OD?.RPL_Streak_2?.Axis : value?.ro?.OD?.RPL_Streak_2?.Axis ? value?.ro?.OD?.RPL_Streak_2?.Axis : '',
        JsonO_OS_RPL2_SR_Axis: value?.ro?.OS?.RPL_Streak_2?.Axis ? value?.ro?.OS?.RPL_Streak_2?.Axis : value?.ro?.OS?.RPL_Streak_2?.Axis ? value?.ro?.OS?.RPL_Streak_2?.Axis : '',

        isJsonO_RPL2_SR_Adaptasi: !!(value.ro?.OD?.RPL_Streak_2?.Adaptasi !== '' || value.ro?.OS?.RPL_Streak_2?.Adaptasi !== '' || value.ro?.OD?.RPL_Streak_2?.Adaptasi !== '' || value.ro?.OS?.RPL_Streak_2?.Adaptasi !== ''),
        JsonO_OD_RPL2_SR_Adaptasi: value?.ro?.OD?.RPL_Streak_2?.Adaptasi ? value?.ro?.OD?.RPL_Streak_2?.Adaptasi : value?.ro?.OD?.RPL_Streak_2?.Adaptasi ? value?.ro?.OD?.RPL_Streak_2?.Adaptasi : '',
        JsonO_OS_RPL2_SR_Adaptasi: value?.ro?.OS?.RPL_Streak_2?.Adaptasi ? value?.ro?.OS?.RPL_Streak_2?.Adaptasi : value?.ro?.OS?.RPL_Streak_2?.Adaptasi ? value?.ro?.OS?.RPL_Streak_2?.Adaptasi : '',

        isJsonO_RPL2_SR_PH: !!(value.ro?.OD?.RPL_Streak_2?.PH !== '' || value.ro?.OS?.RPL_Streak_2?.PH !== '' || value.ro?.OD?.RPL_Streak_2?.PH !== '' || value.ro?.OS?.RPL_Streak_2?.PH !== ''),
        JsonO_OD_RPL2_SR_PH: value?.ro?.OD?.RPL_Streak_2?.PH ? value?.ro?.OD?.RPL_Streak_2?.PH : value?.ro?.OD?.RPL_Streak_2?.PH ? value?.ro?.OD?.RPL_Streak_2?.PH : '',
        JsonO_OS_RPL2_SR_PH: value?.ro?.OS?.RPL_Streak_2?.PH ? value?.ro?.OS?.RPL_Streak_2?.PH : value?.ro?.OS?.RPL_Streak_2?.PH ? value?.ro?.OS?.RPL_Streak_2?.PH : '',

        isJsonO_RPL_RS_VA: !!(value?.ro?.OD?.RPL?.Va_Aquity !== '' || value?.ro?.OS?.RPL?.Va_Aquity !== ''),
        isJsonO_RPL_RS: !!(value?.form?.OD?.RPL?.Select === 'on' || value?.form?.OS?.RPL?.Select === 'on'),
        OD_RPL_RS: `Sph: ${value?.ro?.OD?.RPL?.Sph} Cyl. ${value?.ro?.OD?.RPL?.Cyl} x ${value?.ro?.OD?.RPL?.Axis}`,
        OS_RPL_RS: `Sph: ${value?.ro?.OS?.RPL?.Sph} Cyl. ${value?.ro?.OS?.RPL?.Cyl} x ${value?.ro?.OS?.RPL?.Axis}`,
        isJsonO_RPL_RS_Visus_Akhir: !!(value.ro?.OD?.RPL?.VA !== '' || value.ro?.OS?.RPL?.VA !== '' || value.ro?.OD?.RPL?.Va !== '' || value.ro?.OS?.RPL?.Va !== ''),
        JsonO_OD_RPL_RS_Visus_Akhir: value?.ro?.OD?.RPL?.VA ? value?.ro?.OD?.RPL?.VA : value?.ro?.OD?.RPL?.Va ? value?.ro?.OD?.RPL?.Va : '',
        JsonO_OS_RPL_RS_Visus_Akhir: value?.ro?.OS?.RPL?.VA ? value?.ro?.OS?.RPL?.VA : value?.ro?.OS?.RPL?.Va ? value?.ro?.OS?.RPL?.Va : '',
        isJsonO_RPL_RS_PD_Jauh: !!(value?.ro?.OD?.RPL?.Pd_Jauh !== '' || value?.ro?.OS?.RPL?.Pd_Jauh !== ''),
        isJsonO_RPL_RS_False: !!(value?.ro?.OD?.RPL?.False !== '' || value?.ro?.OS?.RPL?.False !== ''),
        isJsonO_RPL_RS_Axis: !!(value?.ro?.OD?.RPL?.Axis !== '' || value?.ro?.OS?.RPL?.Axis !== ''),
        isJsonO_RPL_RS_Adaptasi: !!(value?.ro?.OD?.RPL?.Adaptasi !== '' || value?.ro?.OS?.RPL?.Adaptasi !== ''),

        isJsonO_RPL2_RS_VA: !!(value.ro?.OD?.RPL_2?.Va_Aquity !== '' || value.ro?.OS?.RPL_2?.Va_Aquity !== '' || value.ro?.OD?.RPL_2?.Va_Aquity !== '' || value.ro?.OS?.RPL_2?.Va_Aquity !== ''),
        JsonO_OD_RPL2_RS_VA: value?.ro?.OD?.RPL_2?.Va_Aquity ? value?.ro?.OD?.RPL_2?.Va_Aquity : value?.ro?.OD?.RPL_2?.Va_Aquity ? value?.ro?.OD?.RPL_2?.Va_Aquity : '',
        JsonO_OS_RPL2_RS_VA: value?.ro?.OS?.RPL_2?.Va_Aquity ? value?.ro?.OS?.RPL_2?.Va_Aquity : value?.ro?.OS?.RPL_2?.Va_Aquity ? value?.ro?.OS?.RPL_2?.Va_Aquity : '',

        isJsonO_RPL2_RS: !!(value?.ro?.OD?.RPL_2?.Select === 'on' || value?.ro?.OS?.RPL_2?.Select === 'on'),
        OD_RPL2_RS: `Sph: ${value?.ro?.OD?.RPL_2?.Sph} Cyl. ${value?.ro?.OD?.RPL_2?.Cyl} x ${value?.ro?.OD?.RPL_2?.Axis}`,
        OS_RPL2_RS: `Sph: ${value?.ro?.OS?.RPL_2?.Sph} Cyl. ${value?.ro?.OS?.RPL_2?.Cyl} x ${value?.ro?.OS?.RPL_2?.Axis}`,

        isJsonO_RPL2_RS_Visus_Akhir: !!(value.ro?.OD?.RPL_2?.VA !== '' || value.ro?.OS?.RPL_2?.VA !== '' || value.ro?.OD?.RPL_2?.Va !== '' || value.ro?.OS?.RPL_2?.Va !== ''),
        JsonO_OD_RPL2_RS_Visus_Akhir: value?.ro?.OD?.RPL_2?.VA ? value?.ro?.OD?.RPL_2?.VA : value?.ro?.OD?.RPL_2?.Va ? value?.ro?.OD?.RPL_2?.Va : '',
        JsonO_OS_RPL2_RS_Visus_Akhir: value?.ro?.OS?.RPL_2?.VA ? value?.ro?.OS?.RPL_2?.VA : value?.ro?.OS?.RPL_2?.Va ? value?.ro?.OS?.RPL_2?.Va : '',

        isJsonO_RPL2_RS_PD_Jauh: !!(value.ro?.OD?.RPL_2?.Pd_Jauh !== '' || value.ro?.OS?.RPL_2?.Pd_Jauh !== '' || value.ro?.OD?.RPL_2?.Pd_Jauh !== '' || value.ro?.OS?.RPL_2?.Pd_Jauh !== ''),
        JsonO_OD_RPL2_RS_PD_Jauh: value?.ro?.OD?.RPL_2?.Pd_Jauh ? value?.ro?.OD?.RPL_2?.Pd_Jauh : value?.ro?.OD?.RPL_2?.Pd_Jauh ? value?.ro?.OD?.RPL_2?.Pd_Jauh : '',
        JsonO_OS_RPL2_RS_PD_Jauh: value?.ro?.OS?.RPL_2?.Pd_Jauh ? value?.ro?.OS?.RPL_2?.Pd_Jauh : value?.ro?.OS?.RPL_2?.Pd_Jauh ? value?.ro?.OS?.RPL_2?.Pd_Jauh : '',

        isJsonO_RPL2_RS_False: !!(value.ro?.OD?.RPL_2?.False !== '' || value.ro?.OS?.RPL_2?.False !== '' || value.ro?.OD?.RPL_2?.False !== '' || value.ro?.OS?.RPL_2?.False !== ''),
        JsonO_OD_RPL2_RS_False: value?.ro?.OD?.RPL_2?.False ? value?.ro?.OD?.RPL_2?.False : value?.ro?.OD?.RPL_2?.False ? value?.ro?.OD?.RPL_2?.False : '',
        JsonO_OS_RPL2_RS_False: value?.ro?.OS?.RPL_2?.False ? value?.ro?.OS?.RPL_2?.False : value?.ro?.OS?.RPL_2?.False ? value?.ro?.OS?.RPL_2?.False : '',

        isJsonO_RPL2_RS_Axis: !!(value.ro?.OD?.RPL_2?.Axis !== '' || value.ro?.OS?.RPL_2?.Axis !== '' || value.ro?.OD?.RPL_2?.Axis !== '' || value.ro?.OS?.RPL_2?.Axis !== ''),
        JsonO_OD_RPL2_RS_Axis: value?.ro?.OD?.RPL_2?.Axis ? value?.ro?.OD?.RPL_2?.Axis : value?.ro?.OD?.RPL_2?.Axis ? value?.ro?.OD?.RPL_2?.Axis : '',
        JsonO_OS_RPL2_RS_Axis: value?.ro?.OS?.RPL_2?.Axis ? value?.ro?.OS?.RPL_2?.Axis : value?.ro?.OS?.RPL_2?.Axis ? value?.ro?.OS?.RPL_2?.Axis : '',

        isJsonO_RPL2_RS_Adaptasi: !!(value.ro?.OD?.RPL_2?.Adaptasi !== '' || value.ro?.OS?.RPL_2?.Adaptasi !== '' || value.ro?.OD?.RPL_2?.Adaptasi !== '' || value.ro?.OS?.RPL_2?.Adaptasi !== ''),
        JsonO_OD_RPL2_RS_Adaptasi: value?.ro?.OD?.RPL_2?.Adaptasi ? value?.ro?.OD?.RPL_2?.Adaptasi : value?.ro?.OD?.RPL_2?.Adaptasi ? value?.ro?.OD?.RPL_2?.Adaptasi : '',
        JsonO_OS_RPL2_RS_Adaptasi: value?.ro?.OS?.RPL_2?.Adaptasi ? value?.ro?.OS?.RPL_2?.Adaptasi : value?.ro?.OS?.RPL_2?.Adaptasi ? value?.ro?.OS?.RPL_2?.Adaptasi : '',

        isJsonO_RPL2_RS_PH: !!(value.ro?.OD?.RPL_2?.PH !== '' || value.ro?.OS?.RPL_2?.PH !== '' || value.ro?.OD?.RPL_2?.PH !== '' || value.ro?.OS?.RPL_2?.PH !== ''),
        JsonO_OD_RPL2_RS_PH: value?.ro?.OD?.RPL_2?.PH ? value?.ro?.OD?.RPL_2?.PH : value?.ro?.OD?.RPL_2?.PH ? value?.ro?.OD?.RPL_2?.PH : '',
        JsonO_OS_RPL2_RS_PH: value?.ro?.OS?.RPL_2?.PH ? value?.ro?.OS?.RPL_2?.PH : value?.ro?.OS?.RPL_2?.PH ? value?.ro?.OS?.RPL_2?.PH : '',

        isJsonO_Non_Contact: !!(value.ro?.OD?.Non_Contact !== '' || value.ro?.OS?.Non_Contact !== '' || value.ro?.OD?.Non_Contact !== '' || value.ro?.OS?.Non_Contact !== ''),
        od_non_contact: value?.ro?.OD?.Non_Contact ? value?.ro?.OD?.Non_Contact : value?.ro?.OD?.Non_Contact ? value?.ro?.OD?.Non_Contact : '',
        os_non_contact: value?.ro?.OS?.Non_Contact ? value?.ro?.OS?.Non_Contact : value?.ro?.OS?.Non_Contact ? value?.ro?.OS?.Non_Contact : '',

        isJsonO_Keterangan: !!(value.ro?.OD?.Tanam_Lensa !== '' || value.ro?.OS?.Tanam_Lensa !== '' || value.ro?.OD?.Tanam_Lensa !== '' || value.ro?.OS?.Tanam_Lensa !== ''),
        od_tanam_lensa: value?.ro?.OD?.Tanam_Lensa ? value?.ro?.OD?.Tanam_Lensa : value?.ro?.OD?.Tanam_Lensa ? value?.ro?.OD?.Tanam_Lensa : '',
        os_tanam_lensa: value?.ro?.OS?.Tanam_Lensa ? value?.ro?.OS?.Tanam_Lensa : value?.ro?.OS?.Tanam_Lensa ? value?.ro?.OS?.Tanam_Lensa : '',

        isJsonO_Schiotz: !!(value.ro?.OD?.Schiotz !== '' || value.ro?.OS?.Schiotz !== '' || value.ro?.OD?.Schiotz !== '' || value.ro?.OS?.Schiotz !== ''),
        od_schiotz: value?.ro?.OD?.Schiotz ? value?.ro?.OD?.Schiotz : value?.ro?.OD?.Schiotz ? value?.ro?.OD?.Schiotz : '',
        os_schiotz: value?.ro?.OS?.Schiotz ? value?.ro?.OS?.Schiotz : value?.ro?.OS?.Schiotz ? value?.ro?.OS?.Schiotz : '',

        isJsonO_Keterangan_Tono: !!(value.ro?.OD?.Keterangan_Tono !== '' || value.ro?.OS?.Keterangan_Tono !== '' || value.ro?.OD?.Keterangan_Tono !== '' || value.ro?.OS?.Keterangan_Tono !== ''),
        JsonO_OD_Keterangan_Tono: value?.ro?.OD?.Keterangan_Tono ? value?.ro?.OD?.Keterangan_Tono : value?.ro?.OD?.Keterangan_Tono ? value?.ro?.OD?.Keterangan_Tono : '',
        JsonO_OS_Keterangan_Tono: value?.ro?.OS?.Keterangan_Tono ? value?.ro?.OS?.Keterangan_Tono : value?.ro?.OS?.Keterangan_Tono ? value?.ro?.OS?.Keterangan_Tono : '',

        isJsonO_Catatan_Lainnya: !!(value.ro?.Catatan_Lain !== ''),
        JsonO_OD_Catatan_Lainnya: value?.ro?.Catatan_Lain ? value?.ro?.Catatan_Lain : value?.ro?.Catatan_Lain ? value?.ro?.Catatan_Lain : '',

        isResep: !!(value.tebus_obat && value.tebus_obat.Status_Tebus && value.tebus_obat.Status_Tebus === '1' && value.tebus_obat.Daftar_Tebus && Array.isArray(value.tebus_obat.Daftar_Tebus) && value.tebus_obat.Daftar_Tebus.length > 0),
        kota: getCity(treatment.Kode_Cabang),
        form_date: DateTimeConverter.convertToNormalDate(value.form.Tanggal_TTD),
        diagnose: getDiagnoseValue(),
        therapy: (value && value.pengkajian_awal && value.pengkajian_awal.Terapi) ? value.pengkajian_awal.Terapi : value.pengkajian_awal.Data_P ? value.pengkajian_awal.Data_P : '',
        suggestion: (value && value.pengkajian_awal && value.pengkajian_awal.Anjuran) ? value.pengkajian_awal.Anjuran : '',
        pasienWali: isTtdPasien ? 'Pasien' : isTtdWali ? 'Wali' : '',
        namaPasienWali_ttd: value.form && value.form.Tanda_Tangan_Radio && value.form.Tanda_Tangan_Radio === '1' && value.form.Tanda_Tangan_Pasien && value.form.Tanda_Tangan_Pasien !== '' && treatment ? treatment.Pasien.Nama : value.form && value.form.Tanda_Tangan_Radio && value.form.Tanda_Tangan_Radio === '2' && value.form.Tanda_Tangan_Wali && value.form.Tanda_Tangan_Wali !== '' && treatment ? treatment.Wali.Nama : '',
        Mata_OD: value.pengkajian_awal && value.pengkajian_awal.Gambar_Mata_OD && value.pengkajian_awal.Gambar_Mata_OD !== '' ? value.pengkajian_awal.Gambar_Mata_OD : 'https://bucket.rsmatasmec.com/eye-clean.jpeg',
        Mata_OS: value.pengkajian_awal && value.pengkajian_awal.Gambar_Mata_OS && value.pengkajian_awal.Gambar_Mata_OS !== '' ? value.pengkajian_awal.Gambar_Mata_OS : 'https://bucket.rsmatasmec.com/eye-clean.jpeg',
        gambarPasienWali_ttd: value.form && value.form.Tanda_Tangan_Radio && value.form.Tanda_Tangan_Radio === '1' && value.form.Tanda_Tangan_Pasien && value.form.Tanda_Tangan_Pasien !== '' ? value.form.Tanda_Tangan_Pasien : value.form.Tanda_Tangan_Wali && value.form.Tanda_Tangan_Wali !== '' ? value.form.Tanda_Tangan_Wali : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        gambarDokter_ttd: value.form && value.form.TTD_Dokter && value.form.TTD_Dokter !== '' ? value.form.TTD_Dokter : '',
        resep: newResep,
        nik: treatment?.Pasien?.NIK ?? '',
      },
    }
  }
}
