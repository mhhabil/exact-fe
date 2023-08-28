import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { CreatePDFRequest } from '@src/shared/pdf/requests/create-pdf.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';
import { ITreatmentModel } from '@src/modules/site/patient-list/models';

export interface IGridChartRequest {
  sis: Array<string>;
  dis: Array<string>;
  r: Array<string>;
  n: Array<string>;
}

export class GridChartRequest {
  sis: Array<string>;
  dis: Array<string>;
  r: Array<string>;
  n: Array<string>;

  constructor(request: IGridChartRequest) {
    this.sis = (Array.isArray(request.sis) ? request.sis : []);
    this.dis = (Array.isArray(request.dis) ? request.dis : []);
    this.r = (Array.isArray(request.r) ? request.r : []);
    this.n = (Array.isArray(request.n) ? request.n : []);
  }

  static createFromJson(json: IGridChartRequest) {
    return new GridChartRequest(json);
  }

  static schema() {
    return yup.object().shape({
      'grid-chart-data': yup.object().shape({
        sis: yup.array(yup.string()),
        dis: yup.array(yup.string()),
        r: yup.array(yup.string()),
        n: yup.array(yup.string()),
      }).notRequired(),
    })
  }
}

export interface ISurgeryReportPdfRequest {
  emr_id: string;
  nomor_mr: string;
  id_pelayanan: string;
  kode_cabang: string;
  tipe_pasien: string;
  jenis_pelayanan: string;
  id_dokter: string;
  no_sep?: string;
  tanggal_berobat?: string;
  jenis_operasi?: string;
}

export class SurgeryReportPdfRequest {
  emr_id: string;
  nomor_mr: string;
  id_pelayanan: string;
  kode_cabang: string;
  tipe_pasien: string;
  jenis_pelayanan: string;
  id_dokter: string;
  no_sep?: string;
  tanggal_berobat?: string;
  jenis_operasi?: string;

  constructor(request: ISurgeryReportPdfRequest) {
    this.emr_id = request.emr_id;
    this.nomor_mr = request.nomor_mr;
    this.id_pelayanan = request.id_pelayanan;
    this.kode_cabang = request.kode_cabang;
    this.tipe_pasien = request.tipe_pasien;
    this.jenis_pelayanan = request.jenis_pelayanan;
    this.id_dokter = request.id_dokter;
    this.no_sep = request.no_sep;
    this.tanggal_berobat = request.tanggal_berobat;
    this.jenis_operasi = request.jenis_operasi;
  }

  static createFromStore(store: any) {
    return SurgeryReportPdfRequest.createFromJson({
      emr_id: store.EMR_ID,
      nomor_mr: store.No_MR,
      id_pelayanan: store.ID_Pelayanan,
      kode_cabang: store.Kode_Cabang,
      tipe_pasien: store.Tipe_Pasien,
      jenis_pelayanan: store.Jenis_Pelayanan,
      id_dokter: store.ID_Dokter,
      tanggal_berobat: store.Tgl_Berobat,
      jenis_operasi: store.jenis_operasi,
    })
  }

  static createFromJson(json: ISurgeryReportPdfRequest) {
    return new SurgeryReportPdfRequest(json);
  }
}

export interface ISurgeryReportPdfRequestTov3 {
  emr_id: string;
  form_name: string;
  row_filter: string;
  preview: boolean;
  data: any;
}

export class SurgeryReportPdfRequestTov3 {
  emr_id: string;
  form_name: string;
  row_filter: string;
  preview: boolean;
  data: any;

  constructor(req: ISurgeryReportPdfRequestTov3) {
    this.emr_id = req.emr_id;
    this.form_name = req.form_name;
    this.row_filter = req.row_filter ? req.row_filter : '';
    this.preview = req.preview ? req.preview : false;
    this.data = req.data;
  }

  static createFromJson(json: ISurgeryReportPdfRequestTov3) {
    return new SurgeryReportPdfRequestTov3(json);
  }

  static createPdfRequest(val: any, emrId: any, treatment: ITreatmentModel): ISurgeryReportPdfRequestTov3 {
    const check = 'https://bucket.rsmatasmec.com/checklist.jpeg';
    const uncheck = 'https://bucket.rsmatasmec.com/blank.jpeg';
    return {
      emr_id: emrId,
      form_name: 'ok_laporan-pembedahan-lokal-intravitreal_v3',
      row_filter: '',
      preview: false,
      data: {
        'pasien.Umur': CreatePDFRequest.normalizeAge(val?.umur_lengkap),
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(treatment?.Pasien?.Tgl_Lahir),
        tanggal_pembedahan: DateTimeConverter.convertToNormalDate(val?.Tanggal_Pembedahan),
        lokal_injeksi_intravitreal_injeksi_lain_teks: (val?.Lokal_Injeksi_Intravitreal_Injeksi_5 === '1') ? val.Lokal_Injeksi_Intravitreal_Injeksi_Lain_Teks : '',

        opsi_kanan: val.Pembedahan_Opsi_Kanan && val.Pembedahan_Opsi_Kanan === 1 ? check : uncheck,
        opsi_kiri: val.Pembedahan_Opsi_Kiri && val.Pembedahan_Opsi_Kiri === 1 ? check : uncheck,
        opsi_emergensi: val.Pembedahan_Opsi_Emergency && val.Pembedahan_Opsi_Emergency === 1 ? check : uncheck,
        opsi_elektif: val.Pembedahan_Opsi_Elektif && val.Pembedahan_Opsi_Elektif === 1 ? check : uncheck,
        stiker_lensa: val.Url_Image_Stiker && val.Url_Image_Stiker !== '' ? val.Url_Image_Stiker : null,
        pembedahan_1: val.Jenis_Pembedahan && val.Jenis_Pembedahan === '1' ? check : uncheck,
        pembedahan_2: val.Jenis_Pembedahan && val.Jenis_Pembedahan === '2' ? check : uncheck,
        pembedahan_3: val.Jenis_Pembedahan && val.Jenis_Pembedahan === '3' ? check : uncheck,
        pembedahan_4: val.Jenis_Pembedahan && val.Jenis_Pembedahan === '4' ? check : uncheck,
        operasi_ke1: val.Operasi_Ke && val.Operasi_Ke === '1' ? check : uncheck,
        operasi_ke2: val.Operasi_Ke && val.Operasi_Ke === '2' ? check : uncheck,
        profilaksis_ya: val.Profilaksis && val.Profilaksis === '1' ? check : uncheck,
        profilaksis_tidak: val.Profilaksis && val.Profilaksis === '0' ? check : uncheck,
        anestesi_topikal: val.Anestesi_Topikal && val.Anestesi_Topikal === 1 ? check : uncheck,
        anestesi_infiltrasi: val.Anestesi_Infiltrasi && val.Anestesi_Infiltrasi === 1 ? check : uncheck,
        anestesi_field: val.Anestesi_Field_Block && val.Anestesi_Field_Block === 1 ? check : uncheck,
        anestesi_infiltrasi_tipe1: val.Anestesi_Infiltrasi_Tipe && val.Anestesi_Infiltrasi_Tipe === '1' ? check : uncheck,
        anestesi_infiltrasi_tipe2: val.Anestesi_Infiltrasi_Tipe && val.Anestesi_Infiltrasi_Tipe === '2' ? check : uncheck,
        anestesi_field_tipe1: val.Anestesi_Field_Block_Tipe && val.Anestesi_Field_Block_Tipe === '1' ? check : uncheck,
        anestesi_field_tipe2: val.Anestesi_Field_Block_Tipe && val.Anestesi_Field_Block_Tipe === '2' ? check : uncheck,
        lokasi_od: val.Lokasi_OD && val.Lokasi_OD === 1 ? check : uncheck,
        lokasi_os: val.Lokasi_OS && val.Lokasi_OS === 1 ? check : uncheck,
        cairan_injeksi: val.Lokal_Injeksi_Intravitreal_Tipe ?? '',
        injeksi_tipe1: val.Lokal_Injeksi_Intravitreal_Tipe_1 && val.Lokal_Injeksi_Intravitreal_Tipe_1 === '1' ? check : uncheck,
        injeksi_tipe2: val.Lokal_Injeksi_Intravitreal_Tipe_2 && val.Lokal_Injeksi_Intravitreal_Tipe_2 === '1' ? check : uncheck,
        injeksi_tipe3: val.Lokal_Injeksi_Intravitreal_Tipe_3 && val.Lokal_Injeksi_Intravitreal_Tipe_3 === '1' ? check : uncheck,
        injeksi_tipe4: val.Lokal_Injeksi_Intravitreal_Tipe_4 && val.Lokal_Injeksi_Intravitreal_Tipe_4 === '1' ? check : uncheck,
        injeksi_tipe5: val.Lokal_Injeksi_Intravitreal_Tipe_5 && val.Lokal_Injeksi_Intravitreal_Tipe_5 === '1' ? check : uncheck,
        injeksi_tipe6: val.Lokal_Injeksi_Intravitreal_Tipe_6 && val.Lokal_Injeksi_Intravitreal_Tipe_6 === '1' ? check : uncheck,
        injeksi_tipe7: val.Lokal_Injeksi_Intravitreal_Tipe_7 && val.Lokal_Injeksi_Intravitreal_Tipe_7 === '1' ? check : uncheck,
        injeksi_1: val.Lokal_Injeksi_Intravitreal_0 && val.Lokal_Injeksi_Intravitreal_0 === 1 ? check : uncheck,
        injeksi_2: val.Lokal_Injeksi_Intravitreal_1 && val.Lokal_Injeksi_Intravitreal_1 === 1 ? check : uncheck,
        injeksi_3: val.Lokal_Injeksi_Intravitreal_2 && val.Lokal_Injeksi_Intravitreal_2 === 1 ? check : uncheck,
        injeksi_4: val.Lokal_Injeksi_Intravitreal_3 && val.Lokal_Injeksi_Intravitreal_3 === 1 ? check : uncheck,
        injeksi_5: val.Lokal_Injeksi_Intravitreal_4 && val.Lokal_Injeksi_Intravitreal_4 === 1 ? check : uncheck,
        injeksi_6: val.Lokal_Injeksi_Intravitreal_5 && val.Lokal_Injeksi_Intravitreal_5 === 1 ? check : uncheck,
        injeksi_7: val.Lokal_Injeksi_Intravitreal_6 && val.Lokal_Injeksi_Intravitreal_6 === 1 ? check : uncheck,
        injeksi_8: val.Lokal_Injeksi_Intravitreal_7 && val.Lokal_Injeksi_Intravitreal_7 === 1 ? check : uncheck,
        injeksi_9: val.Lokal_Injeksi_Intravitreal_8 && val.Lokal_Injeksi_Intravitreal_8 === 1 ? check : uncheck,
        injeksi_pengukuran1: val.Lokal_Injeksi_Intravitreal_Pengukuran && val.Lokal_Injeksi_Intravitreal_Pengukuran === '1' ? check : uncheck,
        injeksi_pengukuran2: val.Lokal_Injeksi_Intravitreal_Pengukuran && val.Lokal_Injeksi_Intravitreal_Pengukuran === '2' ? check : uncheck,
        injeksi_pengukuran3: val.Lokal_Injeksi_Intravitreal_Pengukuran && val.Lokal_Injeksi_Intravitreal_Pengukuran === '3' ? check : uncheck,
        injeksi_injeksi1: val.Lokal_Injeksi_Intravitreal_Injeksi_1 && val.Lokal_Injeksi_Intravitreal_Injeksi_1 === '1' ? check : uncheck,
        injeksi_injeksi2: val.Lokal_Injeksi_Intravitreal_Injeksi_2 && val.Lokal_Injeksi_Intravitreal_Injeksi_2 === '1' ? check : uncheck,
        injeksi_injeksi3: val.Lokal_Injeksi_Intravitreal_Injeksi_3 && val.Lokal_Injeksi_Intravitreal_Injeksi_3 === '1' ? check : uncheck,
        injeksi_injeksi4: val.Lokal_Injeksi_Intravitreal_Injeksi_4 && val.Lokal_Injeksi_Intravitreal_Injeksi_4 === '1' ? check : uncheck,
        injeksi_injeksi5: val.Lokal_Injeksi_Intravitreal_Injeksi_6 && val.Lokal_Injeksi_Intravitreal_Injeksi_6 === '1' ? check : uncheck,
        injeksi_injeksi6: val.Lokal_Injeksi_Intravitreal_Injeksi_5 && val.Lokal_Injeksi_Intravitreal_Injeksi_5 === '1' ? check : uncheck,
        injeksi_ditetes1: val.Lokal_Injeksi_Intravitreal_Diteteskan_1 && val.Lokal_Injeksi_Intravitreal_Diteteskan_1 === 1 ? check : uncheck,
        injeksi_ditetes2: val.Lokal_Injeksi_Intravitreal_Diteteskan_2 && val.Lokal_Injeksi_Intravitreal_Diteteskan_2 === 1 ? check : uncheck,
        komplikasi1: val.Penyakit_Komplikasi && val.Penyakit_Komplikasi === '1' ? check : uncheck,
        komplikasi2: val.Penyakit_Komplikasi && val.Penyakit_Komplikasi === '2' ? check : uncheck,
        grafik: val.Grid_Chart_Img && val.Grid_Chart_Img !== '' ? val.Grid_Chart_Img : 'https://bucket.rsmatasmec.com/grafik-anestesi.jpeg',
        ttd_dokter: val.TTD_Dokter && val.TTD_Dokter !== '' ? val.TTD_Dokter : null,
        ttd_perawat: val.TTD_Perawat && val.TTD_Perawat !== '' ? val.TTD_Perawat : null,
        nik: val?.pasien?.NIK ?? '',
      },
    }
  }
}

export interface ISurgeryReportGeneralRequest extends IAppRequest {
  operation_type: string;
  operator_doctor_id: string;
  anesthesia_doctor_id: string;
  nurse_doctor_id: string;
  nurse_doctor_operator_assistant_id: string;
  circular_nurse_id: string;
  pre_surgery_diagnose: string;
  post_surgery_cmb_diagnose: string;
  post_surgery_diagnose: string;
  surgery_date: string;
  surgery_duration: string;
  surgery_description: string;
  surgery_action: string;
  inventory_code: string;
  image_sticker_url: string;
  image_sticker_name: string;
  image_sticker_type: string;
  image_sticker_size: string;
  number_of_implants: string;
  ya_text_prophylaxis: string;
  antibiotics_type: string;
  antibiotics_time: string;
  anesthesia_scale: string;
  img_grid_chart: string;
  data_grid_chart: string;
  meds: string;
  complication_disease_text: string;
  intraoperative_consultation: string;
  ya_text_hipersensitivity_response: string;
  ya_text_toxic_event: string;
  patology_tissue_date: string;
  kind_of_tissue: string;
  local_phaco_eye_image: string;
  option_surgery_right: string;
  option_surgery_left: string;
  option_surgery_emergency: string;
  option_surgery_elektif: string;
  us_absolute_1: string;
  us_absolute_2: string;
  us_absolute_3: string;
  us_absolute_4: string;
  us_absolute_5: string;
  us_absolute_6: string;
  us_elapsed_1: string;
  us_elapsed_2: string;
  us_elapsed_3: string;
  us_elapsed_4: string;
  us_elapsed_5: string;
  us_elapsed_6: string;
  local_injection_intravitreal_other_injection_text: string;
  local_custom_description: string;
  local_chalazion_image_pre: string;
  local_chalazion_image_post: string;
  local_hordeolum_image_pre: string;
  local_hordeolum_image_post: string;
  local_pterygium_image_pre: string;
  local_pterygium_image_post: string;
  general_custom_description: string;
  general_phaco_eye_image: string;
  us_absolute_up_1: string;
  us_absolute_up_2: string;
  us_absolute_up_3: string;
  us_absolute_up_4: string;
  us_absolute_up_5: string;
  us_absolute_up_6: string;
  us_elapsed_up_1: string;
  us_elapsed_up_2: string;
  us_elapsed_up_3: string;
  us_elapsed_up_4: string;
  us_elapsed_up_5: string;
  us_elapsed_up_6: string;
  doctor_signature: string;
  doctor_id: string;
  nurse_signature: string;
  nurse_id: string;
}

export class SurgeryReportGeneralRequest extends AppRequest {
  operation_type: string;
  operator_doctor_id: string;
  anesthesia_doctor_id: string;
  nurse_doctor_id: string;
  nurse_doctor_operator_assistant_id: string;
  circular_nurse_id: string;
  pre_surgery_diagnose: string;
  post_surgery_cmb_diagnose: string;
  post_surgery_diagnose: string;
  surgery_date: string;
  surgery_duration: string;
  surgery_description: string;
  surgery_action: string;
  inventory_code: string;
  option_surgery_right: string;
  option_surgery_left: string;
  option_surgery_emergency: string;
  option_surgery_elektif: string;
  image_sticker_url: string;
  image_sticker_name: string;
  image_sticker_type: string;
  image_sticker_size: string;
  number_of_implants: string;
  ya_text_prophylaxis: string;
  antibiotics_type: string;
  antibiotics_time: string;
  anesthesia_scale: string;
  img_grid_chart: string;
  data_grid_chart: string;
  meds: string;
  complication_disease_text: string;
  intraoperative_consultation: string;
  ya_text_hipersensitivity_response: string;
  ya_text_toxic_event: string;
  patology_tissue_date: string;
  kind_of_tissue: string;
  local_phaco_eye_image: string;
  us_absolute_1: string;
  us_absolute_2: string;
  us_absolute_3: string;
  us_absolute_4: string;
  us_absolute_5: string;
  us_absolute_6: string;
  us_elapsed_1: string;
  us_elapsed_2: string;
  us_elapsed_3: string;
  us_elapsed_4: string;
  us_elapsed_5: string;
  us_elapsed_6: string;
  local_injection_intravitreal_other_injection_text: string;
  local_custom_description: string;
  local_chalazion_image_pre: string;
  local_chalazion_image_post: string;
  local_hordeolum_image_pre: string;
  local_hordeolum_image_post: string;
  local_pterygium_image_pre: string;
  local_pterygium_image_post: string;
  general_custom_description: string;
  general_phaco_eye_image: string;
  us_absolute_up_1: string;
  us_absolute_up_2: string;
  us_absolute_up_3: string;
  us_absolute_up_4: string;
  us_absolute_up_5: string;
  us_absolute_up_6: string;
  us_elapsed_up_1: string;
  us_elapsed_up_2: string;
  us_elapsed_up_3: string;
  us_elapsed_up_4: string;
  us_elapsed_up_5: string;
  us_elapsed_up_6: string;
  doctor_signature: string;
  doctor_id: string;
  nurse_signature: string;
  nurse_id: string;

  constructor(request: ISurgeryReportGeneralRequest) {
    super(request);
    this.operation_type = request.operation_type;
    this.operator_doctor_id = request.operator_doctor_id;
    this.anesthesia_doctor_id = request.anesthesia_doctor_id;
    this.nurse_doctor_id = request.nurse_doctor_id;
    this.nurse_doctor_operator_assistant_id = request.nurse_doctor_operator_assistant_id;
    this.circular_nurse_id = request.circular_nurse_id;
    this.pre_surgery_diagnose = request.pre_surgery_diagnose;
    this.post_surgery_cmb_diagnose = request.post_surgery_cmb_diagnose;
    this.post_surgery_diagnose = request.post_surgery_diagnose;
    this.surgery_date = request.surgery_date;
    this.surgery_duration = request.surgery_duration;
    this.surgery_description = request.surgery_description;
    this.surgery_action = request.surgery_action;
    this.inventory_code = request.inventory_code;
    this.option_surgery_elektif = request.option_surgery_elektif;
    this.option_surgery_emergency = request.option_surgery_emergency;
    this.option_surgery_left = request.option_surgery_left;
    this.option_surgery_right = request.option_surgery_right;
    this.image_sticker_url = request.image_sticker_url;
    this.image_sticker_name = request.image_sticker_name;
    this.image_sticker_type = request.image_sticker_type;
    this.image_sticker_size = request.image_sticker_size;
    this.number_of_implants = request.number_of_implants;
    this.ya_text_prophylaxis = request.ya_text_prophylaxis;
    this.antibiotics_type = request.antibiotics_type;
    this.antibiotics_time = request.antibiotics_time;
    this.anesthesia_scale = request.anesthesia_scale;
    this.img_grid_chart = request.img_grid_chart;
    this.data_grid_chart = request.data_grid_chart;
    this.meds = request.meds;
    this.complication_disease_text = request.complication_disease_text;
    this.intraoperative_consultation = request.intraoperative_consultation;
    this.ya_text_hipersensitivity_response = request.ya_text_hipersensitivity_response;
    this.ya_text_toxic_event = request.ya_text_toxic_event;
    this.patology_tissue_date = request.patology_tissue_date;
    this.kind_of_tissue = request.kind_of_tissue;
    this.local_phaco_eye_image = request.local_phaco_eye_image;
    this.us_absolute_1 = request.us_absolute_1;
    this.us_absolute_2 = request.us_absolute_2;
    this.us_absolute_3 = request.us_absolute_3;
    this.us_absolute_4 = request.us_absolute_4;
    this.us_absolute_5 = request.us_absolute_5;
    this.us_absolute_6 = request.us_absolute_6;
    this.us_elapsed_1 = request.us_elapsed_1;
    this.us_elapsed_2 = request.us_elapsed_2;
    this.us_elapsed_3 = request.us_elapsed_3;
    this.us_elapsed_4 = request.us_elapsed_4;
    this.us_elapsed_5 = request.us_elapsed_5;
    this.us_elapsed_6 = request.us_elapsed_6;
    this.local_injection_intravitreal_other_injection_text = request.local_injection_intravitreal_other_injection_text;
    this.local_custom_description = request.local_custom_description;
    this.local_chalazion_image_pre = request.local_chalazion_image_pre;
    this.local_chalazion_image_post = request.local_chalazion_image_post;
    this.local_hordeolum_image_pre = request.local_hordeolum_image_pre;
    this.local_hordeolum_image_post = request.local_hordeolum_image_post;
    this.local_pterygium_image_pre = request.local_pterygium_image_pre;
    this.local_pterygium_image_post = request.local_pterygium_image_post;
    this.general_custom_description = request.general_custom_description;
    this.general_phaco_eye_image = request.general_phaco_eye_image;
    this.us_absolute_up_1 = request.us_absolute_up_1;
    this.us_absolute_up_2 = request.us_absolute_up_2;
    this.us_absolute_up_3 = request.us_absolute_up_3;
    this.us_absolute_up_4 = request.us_absolute_up_4;
    this.us_absolute_up_5 = request.us_absolute_up_5;
    this.us_absolute_up_6 = request.us_absolute_up_6;
    this.us_elapsed_up_1 = request.us_elapsed_up_1;
    this.us_elapsed_up_2 = request.us_elapsed_up_2;
    this.us_elapsed_up_3 = request.us_elapsed_up_3;
    this.us_elapsed_up_4 = request.us_elapsed_up_4;
    this.us_elapsed_up_5 = request.us_elapsed_up_5;
    this.us_elapsed_up_6 = request.us_elapsed_up_6;
    this.doctor_signature = request.doctor_signature;
    this.doctor_id = request.doctor_id;
    this.nurse_signature = request.nurse_signature;
    this.nurse_id = request.nurse_id;
  }

  static createFromJson(json: ISurgeryReportGeneralRequest) {
    return new SurgeryReportGeneralRequest(json);
  }

  normalize() {
    return {
      "jenis-operasi": this.operation_type,
      "id-dokter-operator": this.operator_doctor_id,
      "id-dokter-anestesi": this.anesthesia_doctor_id,
      "id-perawat-dokter": this.nurse_doctor_id,
      "id-perawat-dokter-asisten-operator": this.nurse_doctor_operator_assistant_id,
      "id-perawat-sirkular": this.circular_nurse_id,
      "diagnosa-pra-bedah": this.pre_surgery_diagnose,
      "cmb-diagnosa-pasca-bedah": this.post_surgery_cmb_diagnose,
      "diagnosa-pasca-bedah": this.post_surgery_diagnose,
      "tanggal-pembedahan": this.surgery_date,
      "keterangan-pembedahan": this.surgery_description,
      "tindakan-pembedahan": this.surgery_action,
      "kode-inventory": this.inventory_code,
      "url-image-stiker": this.image_sticker_url,
      "name-image-stiker": this.image_sticker_name,
      "type-image-stiker": this.image_sticker_type,
      "size-image-stiker": this.image_sticker_size,
      jml_implant: this.number_of_implants,
      "profilaksis-ya-teks": this.ya_text_prophylaxis,
      "antibiotik-jenis": this.antibiotics_type,
      "antibiotik-waktu": this.antibiotics_time,
      "skala-anestesi": this.anesthesia_scale,
      "grid-chart-img": this.img_grid_chart,
      "grid-chart-data": this.data_grid_chart,
      "obat-obat": this.meds,
      "pembedahan-opsi-kanan": this.option_surgery_right,
      "pembedahan-opsi-kiri": this.option_surgery_left,
      "pembedahan-opsi-emergency": this.option_surgery_emergency,
      "pembedahan-opsi-elektif": this.option_surgery_elektif,
      "penyakit-komplikasi-teks": this.complication_disease_text,
      "konsultasi-intra-operatif": this.intraoperative_consultation,
      "responhipersensitivitas-ya-teks": this.ya_text_hipersensitivity_response,
      "kejadiantoksikasi-ya-teks": this.ya_text_toxic_event,
      "tanggal-jaringan-patologi": this.patology_tissue_date,
      "macam-jaringan": this.kind_of_tissue,
      "lokal-phaco-gambar-mata": this.local_phaco_eye_image,
      "us-absolute-1": this.us_absolute_1,
      "us-absolute-2": this.us_absolute_2,
      "us-absolute-3": this.us_absolute_3,
      "us-absolute-4": this.us_absolute_4,
      "us-absolute-5": this.us_absolute_5,
      "us-absolute-6": this.us_absolute_6,
      "us-elapsed-1": this.us_elapsed_1,
      "us-elapsed-2": this.us_elapsed_2,
      "us-elapsed-3": this.us_elapsed_3,
      "us-elapsed-4": this.us_elapsed_4,
      "us-elapsed-5": this.us_elapsed_5,
      "us-elapsed-6": this.us_elapsed_6,
      "lokal-injeksi-intravitreal-injeksi-lain-teks": this.local_injection_intravitreal_other_injection_text,
      "lokal-custom-keterangan": this.local_custom_description,
      "lokal-chalazion-gambar-pra": this.local_chalazion_image_pre,
      "lokal-chalazion-gambar-pasca": this.local_chalazion_image_post,
      "lokal-hordeolum-gambar-pra": this.local_hordeolum_image_pre,
      "lokal-hordeolum-gambar-pasca": this.local_hordeolum_image_post,
      "lokal-pterygium-gambar-pra": this.local_pterygium_image_pre,
      "lokal-pterygium-gambar-pasca": this.local_pterygium_image_post,
      "umum-custom-keterangan": this.general_custom_description,
      "umum-phaco-gambar-mata": this.general_phaco_eye_image,
      "us-absolute-up-1": this.us_absolute_up_1,
      "us-absolute-up-2": this.us_absolute_up_2,
      "us-absolute-up-3": this.us_absolute_up_3,
      "us-absolute-up-4": this.us_absolute_up_4,
      "us-absolute-up-5": this.us_absolute_up_5,
      "us-absolute-up-6": this.us_absolute_up_6,
      "us-elapsed-up-1": this.us_elapsed_up_1,
      "us-elapsed-up-2": this.us_elapsed_up_2,
      "us-elapsed-up-3": this.us_elapsed_up_3,
      "us-elapsed-up-4": this.us_elapsed_up_4,
      "us-elapsed-up-5": this.us_elapsed_up_5,
      "us-elapsed-up-6": this.us_elapsed_up_6,
      "ttd-dokter": this.doctor_signature,
      "id-dokter": this.doctor_id,
      "ttd-perawat": this.nurse_signature,
      "id-perawat": this.nurse_id,
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
