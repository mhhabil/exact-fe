import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { string } from 'prop-types';

export interface IUpdateSafetyChecklistRequest extends IAppRequest {
    sign_in_time: string;
    sign_in_nurse_room: string;
    sign_in_room_stylist: string;
    sign_in_doctor_room: string;
    sign_in_informed: string;
    sign_in_sign: string;
    sign_in_complete: string;
    sign_in_implant: string;
    sign_in_pulse_oximetry: string;
    sign_in_allergy: string;
    sign_in_breath: string;
    sign_in_bleeding: string;
    sign_in_signed_doctor: string;
    sign_in_doctor: string;
    sign_in_signed_stylist: string;
    sign_in_id_stylist: string;
    sign_in_signed_nurse: string;
    sign_in_nurse: string;
    time_out_time: string;
    time_out_nurse_room: string;
    time_out_room_stylist: string;
    time_out_room_doctor: string;
    time_out_room_surgical: string;
    time_out_self_introduction: string;
    time_out_reread: string;
    time_out_prophylaxis_antibiotics: string;
    time_out_not_routine: string;
    time_out_not_routine_time: string;
    time_out_bleeding: string;
    time_out_special_anaesthesia: string;
    time_out_sterile:string;
    time_out_equipment: string;
    time_out_problem: string;
    time_out_result: string;
    time_out_signed_doctor: string;
    time_out_id_doctor: string;
    time_out_signed_stylist: string;
    time_out_id_stylist: string;
    time_out_signed_nurse: string;
    time_out_id_nurse: string;
    sign_out_time: string;
    sign_out_room_nurse: string;
    sign_out_room_stylist: string;
    sign_out_room_doctor: string;
    sign_out_room_surgical: string;
    sign_out_name_action: string;
    sign_out_equipment_tools: string;
    sign_out_labeling_specimen: string;
    sign_out_equipment_problem: string;
    sign_out_special_notes: string;
    sign_out_signed_eye: string;
    sign_out_id_eye: string;
    sign_out_signed_doctor: string;
    sign_out_id_doctor: string;
    sign_out_signed_stylist: string;
    sign_out_id_stylist: string;
    sign_out_signed_nurse: string;
    sign_out_id_nurse: string;
    sign_out_signed_circular: string;
    sign_out_id_circular: string;
}

export class UpdateSafetyChecklistRequest extends AppRequest {
    sign_in_time: string;
    sign_in_nurse_room: string;
    sign_in_room_stylist: string;
    sign_in_doctor_room: string;
    sign_in_informed: string;
    sign_in_sign: string;
    sign_in_complete: string;
    sign_in_implant: string;
    sign_in_pulse_oximetry: string;
    sign_in_allergy: string;
    sign_in_breath: string;
    sign_in_bleeding: string;
    sign_in_signed_doctor: string;
    sign_in_doctor: string;
    sign_in_signed_stylist: string;
    sign_in_id_stylist: string;
    sign_in_signed_nurse: string;
    sign_in_nurse: string;
    time_out_time: string;
    time_out_nurse_room: string;
    time_out_room_stylist: string;
    time_out_room_doctor: string;
    time_out_room_surgical: string;
    time_out_self_introduction: string;
    time_out_reread: string;
    time_out_prophylaxis_antibiotics: string;
    time_out_not_routine: string;
    time_out_not_routine_time: string;
    time_out_bleeding: string;
    time_out_special_anaesthesia: string;
    time_out_sterile:string;
    time_out_equipment: string;
    time_out_problem: string;
    time_out_result: string;
    time_out_signed_doctor: string;
    time_out_id_doctor: string;
    time_out_signed_stylist: string;
    time_out_id_stylist: string;
    time_out_signed_nurse: string;
    time_out_id_nurse: string;
    sign_out_time: string;
    sign_out_room_nurse: string;
    sign_out_room_stylist: string;
    sign_out_room_doctor: string;
    sign_out_room_surgical: string;
    sign_out_name_action: string;
    sign_out_equipment_tools: string;
    sign_out_labeling_specimen: string;
    sign_out_equipment_problem: string;
    sign_out_special_notes: string;
    sign_out_signed_eye: string;
    sign_out_id_eye: string;
    sign_out_signed_doctor: string;
    sign_out_id_doctor: string;
    sign_out_signed_stylist: string;
    sign_out_id_stylist: string;
    sign_out_signed_nurse: string;
    sign_out_id_nurse: string;
    sign_out_signed_circular: string;
    sign_out_id_circular: string;
    constructor(request: IUpdateSafetyChecklistRequest) {
      super(request);
      this.sign_in_time = request.sign_in_time;
      this.sign_in_nurse_room = request.sign_in_nurse_room;
      this.sign_in_room_stylist = request.sign_in_room_stylist;
      this.sign_in_doctor_room = request.sign_in_doctor_room;
      this.sign_in_informed = request.sign_in_informed;
      this.sign_in_sign = request.sign_in_sign;
      this.sign_in_complete = request.sign_in_complete;
      this.sign_in_implant = request.sign_in_implant;
      this.sign_in_pulse_oximetry = request.sign_in_pulse_oximetry;
      this.sign_in_allergy = request.sign_in_allergy;
      this.sign_in_breath = request.sign_in_breath;
      this.sign_in_bleeding = request.sign_in_bleeding;
      this.sign_in_signed_doctor = request.sign_in_signed_doctor
      this.sign_in_doctor = request.sign_in_doctor;
      this.sign_in_signed_stylist = request.sign_in_signed_stylist;
      this.sign_in_id_stylist = request.sign_in_id_stylist;
      this.sign_in_signed_nurse = request.sign_in_signed_nurse;
      this.sign_in_nurse = request.sign_in_nurse;
      this.time_out_time = request.time_out_time;
      this.time_out_nurse_room = request.time_out_nurse_room;
      this.time_out_room_stylist = request.time_out_room_stylist;
      this.time_out_room_doctor = request.time_out_room_doctor;
      this.time_out_room_surgical = request.time_out_room_surgical;
      this.time_out_self_introduction = request.time_out_self_introduction;
      this.time_out_reread = request.time_out_reread;
      this.time_out_prophylaxis_antibiotics = request.time_out_prophylaxis_antibiotics;
      this.time_out_not_routine = request.time_out_not_routine;
      this.time_out_not_routine_time = request.time_out_not_routine_time;
      this.time_out_bleeding = request.time_out_bleeding;
      this.time_out_special_anaesthesia = request.time_out_special_anaesthesia;
      this.time_out_sterile = request.time_out_sterile;
      this.time_out_equipment = request.time_out_equipment;
      this.time_out_problem = request.time_out_problem;
      this.time_out_result = request.time_out_result;
      this.time_out_signed_doctor = request.time_out_signed_doctor;
      this.time_out_id_doctor = request.time_out_id_doctor;
      this.time_out_signed_stylist = request.time_out_signed_stylist;
      this.time_out_id_stylist = request.time_out_id_stylist
      this.time_out_signed_nurse = request.time_out_signed_nurse;
      this.time_out_id_nurse = request.time_out_id_nurse;
      this.sign_out_time = request.sign_out_time;
      this.sign_out_room_nurse = request.sign_out_room_nurse;
      this.sign_out_room_stylist = request.sign_out_room_stylist;
      this.sign_out_room_doctor = request.sign_out_room_doctor;
      this.sign_out_room_surgical = request.sign_out_room_surgical;
      this.sign_out_name_action = request.sign_out_name_action;
      this.sign_out_equipment_tools = request.sign_out_equipment_tools;
      this.sign_out_labeling_specimen = request.sign_out_labeling_specimen;
      this.sign_out_equipment_problem = request.sign_out_equipment_problem;
      this.sign_out_special_notes = request.sign_out_special_notes;
      this.sign_out_signed_eye = request.sign_out_signed_eye;
      this.sign_out_id_eye = request.sign_out_id_eye;
      this.sign_out_signed_doctor = request.sign_out_signed_doctor;
      this.sign_out_id_doctor = request.sign_out_id_doctor;
      this.sign_out_signed_stylist = request.sign_out_signed_stylist;
      this.sign_out_id_stylist = request.sign_out_id_stylist;
      this.sign_out_signed_nurse = request.sign_out_signed_nurse;
      this.sign_out_id_nurse = request.sign_out_id_nurse;
      this.sign_out_signed_circular = request.sign_out_signed_circular;
      this.sign_out_id_circular = request.sign_out_id_circular;
    }

    static schema() {
      return yup.object().shape({
        sign_in_time: yup.string(),
        sign_in_nurse_room: yup.string(),
        sign_in_room_stylist: yup.string(),
        sign_in_doctor_room: yup.string(),
        sign_in_informed: yup.string(),
        sign_in_sign: yup.string(),
        sign_in_complete: yup.string(),
        sign_in_implant: yup.string(),
        sign_in_pulse_oximetry: yup.string(),
        sign_in_allergy: yup.string(),
        sign_in_breath: yup.string(),
        sign_in_bleeding: yup.string(),
        sign_in_signed_doctor: yup.string(),
        sign_in_doctor: yup.string(),
        sign_in_signed_stylist: yup.string(),
        sign_in_id_stylist: yup.string(),
        sign_in_signed_nurse: yup.string(),
        sign_in_nurse:yup.string(),
        time_out_time: yup.string(),
        time_out_nurse_room: yup.string(),
        time_out_room_stylist: yup.string(),
        time_out_room_doctor: yup.string(),
        time_out_room_surgical: yup.string(),
        time_out_self_introduction: yup.string(),
        time_out_reread: yup.string(),
        time_out_prophylaxis_antibiotics: yup.string(),
        time_out_not_routine: yup.string(),
        time_out_not_routine_time: yup.string(),
        time_out_bleeding: yup.string(),
        time_out_special_anaesthesia: yup.string(),
        time_out_sterile: yup.string(),
        time_out_equipment: yup.string(),
        time_out_problem: yup.string(),
        time_out_result: yup.string(),
        time_out_signed_doctor: yup.string(),
        time_out_id_doctor: yup.string(),
        time_out_signed_stylist: yup.string(),
        time_out_id_stylist: yup.string(),
        time_out_signed_nurse: yup.string(),
        time_out_id_nurse: yup.string(),
        sign_out_time: yup.string(),
        sign_out_room_nurse: yup.string(),
        sign_out_room_stylist: yup.string(),
        sign_out_room_doctor: yup.string(),
        sign_out_room_surgical: yup.string(),
        sign_out_name_action:yup.string(),
        sign_out_equipment_tools: yup.string(),
        sign_out_labeling_specimen: yup.string(),
        sign_out_equipment_problem: yup.string(),
        sign_out_special_notes: yup.string(),
        sign_out_signed_eye: yup.string(),
        sign_out_id_eye: yup.string(),
        sign_out_signed_doctor: yup.string(),
        sign_out_id_doctor: yup.string(),
        sign_out_signed_stylist: yup.string(),
        sign_out_id_stylist: yup.string(),
        sign_out_signed_nurse: yup.string(),
        sign_out_id_nurse: yup.string(),
        sign_out_signed_circular: yup.string(),
        sign_out_id_circular: yup.string(),
      });
    }

    normalize() {
      return {
        "sign-in-waktu": this.sign_in_time,
        "sign-in-ruangan-perawat": this.sign_in_nurse_room,
        "sign-in-ruangan-penata": this.sign_in_room_stylist,
        "sign-in-ruangan-dokter": this.sign_in_doctor_room,
        "sign-in-informed": this.sign_in_informed,
        "sign-in-tanda": this.sign_in_sign,
        "sign-in-lengkap": this.sign_in_complete,
        "sign-in-implan": this.sign_in_implant,
        "sign-in-pulse-oksimetri": this.sign_in_pulse_oximetry,
        "sign-in-alergi": this.sign_in_allergy,
        "sign-in-pernafasan": this.sign_in_breath,
        "sign-in-pendarahan": this.sign_in_bleeding,
        "sign-in-ttd-dokter": this.sign_in_signed_doctor,
        "sign-in-id-dokter": this.sign_in_doctor,
        "sign-in-ttd-penata": this.sign_in_signed_stylist,
        "sign-in-id-penata": this.sign_in_id_stylist,
        "sign-in-ttd-perawat": this.sign_in_signed_nurse,
        "sign-in-id-perawat": this.sign_in_nurse,
        "time-out-waktu": this.time_out_time,
        "time-out-ruangan-perawat": this.time_out_nurse_room,
        "time-out-ruangan-penata": this.time_out_room_stylist,
        "time-out-ruangan-dokter": this.time_out_room_doctor,
        "time-out-ruangan-bedah": this.time_out_room_surgical,
        "time-out-perkenalan-diri": this.time_out_self_introduction,
        "time-out-baca-ulang": this.time_out_reread,
        "time-out-profilaksis-antibiotik": this.time_out_prophylaxis_antibiotics,
        "time-out-tidak-rutin": this.time_out_not_routine,
        "time-out-tidak-rutin-waktu": this.time_out_not_routine_time,
        "time-out-pendarahan": this.time_out_bleeding,
        "time-out-anestesi-khusus": this.time_out_special_anaesthesia,
        "time-out-steril": this.time_out_sterile,
        "time-out-peralatan": this.time_out_equipment,
        "time-out-masalah": this.time_out_problem,
        "time-out-hasil": this.time_out_result,
        "time-out-ttd-dokter": this.time_out_signed_doctor,
        "time-out-id-dokter": this.time_out_id_doctor,
        "time-out-ttd-penata": this.time_out_signed_stylist,
        "time-out-id-penata": this.time_out_id_stylist,
        "time-out-ttd-perawat": this.time_out_signed_nurse,
        "time-out-id-perawat": this.time_out_id_nurse,
        "sign-out-waktu": this.sign_out_time,
        "sign-out-ruangan-perawat": this.sign_out_room_nurse,
        "sign-out-ruangan-penata": this.sign_out_room_stylist,
        "sign-out-ruangan-dokter": this.sign_out_room_doctor,
        "sign-out-ruangan-bedah": this.sign_out_room_surgical,
        "sign-out-nama-tindakan": this.sign_out_name_action,
        "sign-out-kelengkapan-alat": this.sign_out_equipment_tools,
        "sign-out-pelabelan-spesimen": this.sign_out_labeling_specimen,
        "sign-out-masalah-peralatan": this.sign_out_equipment_problem,
        "sign-out-catatan-khusus": this.sign_out_special_notes,
        "sign-out-ttd-mata": this.sign_out_signed_eye,
        "sign-out-id-mata": this.sign_out_id_eye,
        "sign-out-ttd-dokter": this.sign_out_signed_doctor,
        "sign-out-id-dokter": this.sign_out_id_doctor,
        "sign-out-ttd-penata": this.sign_out_signed_stylist,
        "sign-out-id-penata": this.sign_out_id_stylist,
        "sign-out-ttd-perawat": this.sign_out_signed_nurse,
        "sign-out-id-perawat": this.sign_out_id_nurse,
        "sign-out-ttd-sirkuler": this.sign_out_signed_circular,
        "sign-out-id-sirkuler": this.sign_out_id_circular,
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

    static createFromJson(json: IUpdateSafetyChecklistRequest) {
      return new UpdateSafetyChecklistRequest(json);
    }
}
