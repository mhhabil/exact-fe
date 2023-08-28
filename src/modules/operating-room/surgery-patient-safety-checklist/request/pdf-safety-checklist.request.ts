import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfSafetyChecklistRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    sign_in_time: string,
    time_out_time: string,
    sign_out_time: string,
    sign_in_signed_doctor: string,
    sign_in_signed_stylist: string,
    sign_in_signed_nurse: string,
    time_out_signed_doctor: string,
    time_out_signed_stylist: string,
    time_out_signed_nurse: string,
    sign_out_signed_eye: string,
    sign_out_signed_doctor: string,
    sign_out_signed_stylist: string,
    sign_out_signed_nurse: string,
    sign_out_signed_circular: string,

    sign_in_informed_1: string,
    sign_in_informed_0: string,
    sign_in_sign_1: string,
    sign_in_sign_2: string,
    sign_in_complete_1: string,
    sign_in_complete_2: string,
    sign_in_implant_1: string,
    sign_in_implant_0: string,
    sign_in_implant_2: string,
    sign_in_pulse_oximetry_1: string,
    sign_in_pulse_oximetry_0: string,
    sign_in_allergy_1: string,
    sign_in_allergy_0: string,
    sign_in_breath_1: string,
    sign_in_breath_2: string,
    sign_in_breath_0: string,
    sign_in_bleeding_1: string,
    sign_in_bleeding_2: string,
    sign_in_bleeding_3: string,
    time_out_self_introduction_1: string,
    time_out_self_introduction_0: string,
    time_out_reread_1: string,
    time_out_reread_0: string,
    time_out_prophylaxis_antibiotics_1: string,
    time_out_prophylaxis_antibiotics_0: string,
    time_out_not_routine_1: string,
    time_out_not_routine_2: string,
    time_out_bleeding_1: string,
    time_out_bleeding_0: string,
    time_out_special_anaesthesia_1: string,
    time_out_special_anaesthesia_0: string,
    time_out_sterile_1: string,
    time_out_sterile_0: string,
    time_out_equipment_1: string,
    time_out_equipment_0: string,
    sign_out_name_action_1: string,
    sign_out_name_action_0: string,
    sign_out_equipment_tools_1: string,
    sign_out_equipment_tools_0: string,
    sign_out_labeling_specimen_1: string,
    sign_out_labeling_specimen_0: string,
    sign_out_equipment_problem_1: string,
    sign_out_equipment_problem_0: string,
    sign_out_special_notes_1: string,
    sign_out_special_notes_0: string,
    ttd_sign_in_signed_doctor: string,
    ttd_sign_in_signed_stylist: string,
    ttd_sign_in_signed_nurse: string,
    ttd_time_out_signed_doctor: string,
    ttd_time_out_signed_stylist: string,
    ttd_time_out_signed_nurse: string,
    ttd_sign_out_signed_eye: string,
    ttd_sign_out_signed_doctor: string,
    ttd_sign_out_signed_stylist: string,
    ttd_sign_out_signed_nurse: string,
    ttd_sign_out_signed_circular: string,

    'time-out-not-routine-time': string,
    nik: string,
  }
}

export class PdfSafetyChecklistRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    sign_in_time: string,
    time_out_time: string,
    sign_out_time: string,
    sign_in_signed_doctor: string,
    sign_in_signed_stylist: string,
    sign_in_signed_nurse: string,
    time_out_signed_doctor: string,
    time_out_signed_stylist: string,
    time_out_signed_nurse: string,
    sign_out_signed_eye: string,
    sign_out_signed_doctor: string,
    sign_out_signed_stylist: string,
    sign_out_signed_nurse: string,
    sign_out_signed_circular: string,

    sign_in_informed_1: string,
    sign_in_informed_0: string,
    sign_in_sign_1: string,
    sign_in_sign_2: string,
    sign_in_complete_1: string,
    sign_in_complete_2: string,
    sign_in_implant_1: string,
    sign_in_implant_0: string,
    sign_in_implant_2: string,
    sign_in_pulse_oximetry_1: string,
    sign_in_pulse_oximetry_0: string,
    sign_in_allergy_1: string,
    sign_in_allergy_0: string,
    sign_in_breath_1: string,
    sign_in_breath_2: string,
    sign_in_breath_0: string,
    sign_in_bleeding_1: string,
    sign_in_bleeding_2: string,
    sign_in_bleeding_3: string,
    time_out_self_introduction_1: string,
    time_out_self_introduction_0: string,
    time_out_reread_1: string,
    time_out_reread_0: string,
    time_out_prophylaxis_antibiotics_1: string,
    time_out_prophylaxis_antibiotics_0: string,
    time_out_not_routine_1: string,
    time_out_not_routine_2: string,
    time_out_bleeding_1: string,
    time_out_bleeding_0: string,
    time_out_special_anaesthesia_1: string,
    time_out_special_anaesthesia_0: string,
    time_out_sterile_1: string,
    time_out_sterile_0: string,
    time_out_equipment_1: string,
    time_out_equipment_0: string,
    sign_out_name_action_1: string,
    sign_out_name_action_0: string,
    sign_out_equipment_tools_1: string,
    sign_out_equipment_tools_0: string,
    sign_out_labeling_specimen_1: string,
    sign_out_labeling_specimen_0: string,
    sign_out_equipment_problem_1: string,
    sign_out_equipment_problem_0: string,
    sign_out_special_notes_1: string,
    sign_out_special_notes_0: string,
    ttd_sign_in_signed_doctor: string,
    ttd_sign_in_signed_stylist: string,
    ttd_sign_in_signed_nurse: string,
    ttd_time_out_signed_doctor: string,
    ttd_time_out_signed_stylist: string,
    ttd_time_out_signed_nurse: string,
    ttd_sign_out_signed_eye: string,
    ttd_sign_out_signed_doctor: string,
    ttd_sign_out_signed_stylist: string,
    ttd_sign_out_signed_nurse: string,
    ttd_sign_out_signed_circular: string,

    'time-out-not-routine-time': string,
    nik: string,
  }

  constructor(req: IPdfSafetyChecklistRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfSafetyChecklistRequest) {
    return new PdfSafetyChecklistRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): PdfSafetyChecklistRequest {
    return new PdfSafetyChecklistRequest({
      emr_id: emrId,
      form_name: 'ok_checklist-keselamatan_v3',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        sign_in_time: val?.form?.Sign_In_Waktu ?? '',
        time_out_time: val?.form?.Time_Out_Waktu ?? '',
        sign_out_time: val?.form?.Sign_Out_Waktu ?? '',
        sign_in_signed_doctor: val?.form?.Sign_In_Nama_Dokter ?? '',
        sign_in_signed_stylist: val?.form?.Sign_In_Nama_Penata ?? '',
        sign_in_signed_nurse: val?.form?.Sign_In_Nama_Perawat ?? '',
        time_out_signed_doctor: val?.form?.Time_Out_Nama_Dokter ?? '',
        time_out_signed_stylist: val?.form?.Time_Out_Nama_Penata ?? '',
        time_out_signed_nurse: val?.form?.Time_Out_Nama_Perawat ?? '',
        sign_out_signed_eye: val?.form?.Sign_Out_Nama_Mata ?? '',
        sign_out_signed_doctor: val?.form?.Sign_Out_Nama_Dokter ?? '',
        sign_out_signed_stylist: val?.form?.Sign_Out_Nama_Penata ?? '',
        sign_out_signed_nurse: val?.form?.Sign_Out_Nama_Perawat ?? '',
        sign_out_signed_circular: val?.form?.Sign_Out_Nama_Sirkuler ?? '',

        sign_in_informed_1: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_In_Informed === 1),
        sign_in_informed_0: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_In_Informed === 0),
        sign_in_sign_1: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_In_Tanda === 1),
        sign_in_sign_2: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_In_Tanda === 0),
        sign_in_complete_1: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_In_Lengkap === 1),
        sign_in_complete_2: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_In_Lengkap === 0),
        sign_in_implant_1: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_In_Implan === 1),
        sign_in_implant_0: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_In_Implan === 0),
        sign_in_implant_2: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_In_Implan === 2),
        sign_in_pulse_oximetry_1: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_In_Pulse_Oksimetri === 1),
        sign_in_pulse_oximetry_0: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_In_Pulse_Oksimetri === 0),
        sign_in_allergy_1: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_In_Alergi === 1),
        sign_in_allergy_0: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_In_Alergi === 0),
        sign_in_breath_1: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_In_Pernafasan === 1),
        sign_in_breath_2: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_In_Pernafasan === 2),
        sign_in_breath_0: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_In_Pernafasan === 0),
        sign_in_bleeding_1: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_In_Pendarahan === 1),
        sign_in_bleeding_2: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_In_Pendarahan === 2),
        sign_in_bleeding_3: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_In_Pendarahan === 0),
        time_out_self_introduction_1: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Time_Out_Perkenalan_Diri === 1),
        time_out_self_introduction_0: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Time_Out_Perkenalan_Diri === 0),
        time_out_reread_1: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Time_Out_Baca_Ulang === 1),
        time_out_reread_0: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Time_Out_Baca_Ulang === 0),
        time_out_prophylaxis_antibiotics_1: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Time_Out_Profilaksis_Antibiotik === 1),
        time_out_prophylaxis_antibiotics_0: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Time_Out_Profilaksis_Antibiotik === 0),
        time_out_not_routine_1: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Time_Out_Tidak_Rutin === 1),
        time_out_not_routine_2: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Time_Out_Tidak_Rutin === 0),
        time_out_bleeding_1: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Time_Out_Pendarahan === 1),
        time_out_bleeding_0: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Time_Out_Pendarahan === 0),
        time_out_special_anaesthesia_1: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Time_Out_Anestesi_Khusus === 1),
        time_out_special_anaesthesia_0: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Time_Out_Anestesi_Khusus === 0),
        time_out_sterile_1: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Time_Out_Steril === 1),
        time_out_sterile_0: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Time_Out_Steril === 0),
        time_out_equipment_1: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Time_Out_Peralatan === 1),
        time_out_equipment_0: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Time_Out_Peralatan === 0),
        sign_out_name_action_1: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_Out_Nama_Tindakan === 1),
        sign_out_name_action_0: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_Out_Nama_Tindakan === 0),
        sign_out_equipment_tools_1: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_Out_Kelengkapan_Alat === 1),
        sign_out_equipment_tools_0: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_Out_Kelengkapan_Alat === 0),
        sign_out_labeling_specimen_1: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_Out_Pelabelan_Spesimen === 1),
        sign_out_labeling_specimen_0: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_Out_Pelabelan_Spesimen === 0),
        sign_out_equipment_problem_1: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_Out_Masalah_Peralatan === 1),
        sign_out_equipment_problem_0: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_Out_Masalah_Peralatan === 0),
        sign_out_special_notes_1: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_Out_Catatan_Khusus === 1),
        sign_out_special_notes_0: PdfSafetyChecklistRequest.getCheckImage(val?.form?.Sign_Out_Catatan_Khusus === 0),

        ttd_sign_in_signed_doctor: (val?.form?.Sign_In_TTD_Dokter && val?.form?.Sign_In_TTD_Dokter !== '') ? val?.form?.Sign_In_TTD_Dokter : undefined,
        ttd_sign_in_signed_stylist: (val?.form?.Sign_In_TTD_Penata && val?.form?.Sign_In_TTD_Penata !== '') ? val?.form?.Sign_In_TTD_Penata : undefined,
        ttd_sign_in_signed_nurse: (val?.form?.Sign_In_TTD_Perawat && val?.form?.Sign_In_TTD_Perawat !== '') ? val?.form?.Sign_In_TTD_Perawat : undefined,
        ttd_time_out_signed_doctor: (val?.form?.Time_Out_TTD_Dokter && val?.form?.Time_Out_TTD_Dokter !== '') ? val?.form?.Time_Out_TTD_Dokter : undefined,
        ttd_time_out_signed_stylist: (val?.form?.Time_Out_TTD_Penata && val?.form?.Time_Out_TTD_Penata !== '') ? val?.form?.Time_Out_TTD_Penata : undefined,
        ttd_time_out_signed_nurse: (val?.form?.Time_Out_TTD_Perawat && val?.form?.Time_Out_TTD_Perawat !== '') ? val?.form?.Time_Out_TTD_Perawat : undefined,
        ttd_sign_out_signed_eye: (val?.form?.Sign_Out_TTD_Mata && val?.form?.Sign_Out_TTD_Mata !== '') ? val?.form?.Sign_Out_TTD_Mata : undefined,
        ttd_sign_out_signed_doctor: (val?.form?.Sign_Out_TTD_Dokter && val?.form?.Sign_Out_TTD_Dokter !== '') ? val?.form?.Sign_Out_TTD_Dokter : undefined,
        ttd_sign_out_signed_stylist: (val?.form?.Sign_Out_TTD_Penata && val?.form?.Sign_Out_TTD_Penata !== '') ? val?.form?.Sign_Out_TTD_Penata : undefined,
        ttd_sign_out_signed_nurse: (val?.form?.Sign_Out_TTD_Perawat && val?.form?.Sign_Out_TTD_Perawat !== '') ? val?.form?.Sign_Out_TTD_Perawat : undefined,
        ttd_sign_out_signed_circular: (val?.form?.Sign_Out_TTD_Sirkuler && val?.form?.Sign_Out_TTD_Sirkuler !== '') ? val?.form?.Sign_Out_TTD_Sirkuler : undefined,

        'time-out-not-routine-time': (val?.form?.Time_Out_Tidak_Rutin === 1) ? (val?.form?.Time_Out_Tidak_Rutin_Waktu ?? '') : '',
        nik: val?.pasien?.NIK ?? '',
      },
    })
  }
}