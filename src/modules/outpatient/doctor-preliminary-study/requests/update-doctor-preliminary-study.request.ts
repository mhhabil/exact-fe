import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { CreateCpptRoRequest, ICreateCpptRoRequest } from '@modules/ro/cppt/requests';
import { IDoctorPreliminaryStudyFormModel, IHowToUse, IImage, IPediatric, IPrescription, Image, Pediatric} from '@modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';
import { CreatePDFRequest } from '@src/shared/pdf/requests/create-pdf.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';
import { IPreliminaryStudyForm } from '@src/modules/ro/preliminary-study/models/preliminary-study.model';
import { ITreatmentModel } from '@src/modules/site/patient-list/models';

export interface IUpdateDoctorPreliminaryStudyRequest extends IAppRequest {
  note_note: string;
  suggestion: string;
  how_to_use: Array<string>;
  notes: Array<string>;
  coa_od: string;
  coa_os: string;
  conj_bulbi_od: string;
  conj_bulbi_os: string;
  conj_tarsal_inferior_od: string;
  conj_tarsal_inferior_os: string;
  conj_tarsal_superior_od: string;
  conj_tarsal_superior_os: string;
  cornea_od: string;
  cornea_os: string;
  diagnose: string;
  diagnosa_keseragaman: string;
  funduscopy_od: string;
  funduscopy_os: string;
  od_eye_image: string;
  os_eye_image: string;
  od_retina_image: string;
  os_retina_image: string;
  reviewer_doctor_id: string;
  od_iris: string;
  os_iris: string;
  total: Array<string>;
  complaint: string;
  od_lens: string;
  os_lens: string;
  meds_name: Array<string>;
  od_palpebra_inferior: string;
  os_palpebra_inferior: string;
  od_palpebra_superior: string;
  os_palpebra_superior: string;
  pediatric: IPediatric;
  od_movement: string;
  os_movement: string;
  od_position: string;
  os_position: string;
  od_pupil: string;
  os_pupil: string;
  pediatric_submit: string;
  retina_submit: string;
  date: string;
  therapy: string;
  reviewer_doctor_sign: string;
  od_vitreous: string;
  os_vitreous: string;
  time: string;
  cppt_id: string;
  nearvision_od_select: string;
  kesimpulan_pemeriksaan: string;
  canthal_medial_od: string;
  canthal_medial_os: string;
  canthal_lateral_od: string;
  canthal_lateral_os: string;
  sclera_od: string;
  sclera_os: string;
  data_objektif_lain: string;
  'image-1': IImage;
  'image-2': IImage;
}

export class UpdateDoctorPreliminaryStudyRequest extends AppRequest {
  note_note: string;
  suggestion: string;
  how_to_use: Array<string>;
  notes: Array<string>;
  coa_od: string;
  coa_os: string;
  conj_bulbi_od: string;
  conj_bulbi_os: string;
  conj_tarsal_inferior_od: string;
  conj_tarsal_inferior_os: string;
  conj_tarsal_superior_od: string;
  conj_tarsal_superior_os: string;
  cornea_od: string;
  cornea_os: string;
  diagnose: string;
  diagnosa_keseragaman: string;
  funduscopy_od: string;
  funduscopy_os: string;
  od_eye_image: string;
  os_eye_image: string;
  od_retina_image: string;
  os_retina_image: string;
  reviewer_doctor_id: string;
  od_iris: string;
  os_iris: string;
  total: Array<string>;
  complaint: string;
  od_lens: string;
  os_lens: string;
  meds_name: Array<string>;
  od_palpebra_inferior: string;
  os_palpebra_inferior: string;
  od_palpebra_superior: string;
  os_palpebra_superior: string;
  pediatric: Pediatric;
  od_movement: string;
  os_movement: string;
  od_position: string;
  os_position: string;
  od_pupil: string;
  os_pupil: string;
  pediatric_submit: string;
  retina_submit: string;
  date: string;
  therapy: string;
  reviewer_doctor_sign: string;
  od_vitreous: string;
  os_vitreous: string;
  time: string;
  cppt_id: string;
  nearvision_od_select: string;
  kesimpulan_pemeriksaan: string;
  canthal_medial_od: string;
  canthal_medial_os: string;
  canthal_lateral_od: string;
  canthal_lateral_os: string;
  sclera_od: string;
  sclera_os: string;
  data_objektif_lain: string;
  'image-1': Image;
  'image-2': Image;

  constructor(request: IUpdateDoctorPreliminaryStudyRequest) {
    super(request);
    this.note_note = request.note_note;
    this.suggestion = request.suggestion;
    this.how_to_use = (Array.isArray(request.how_to_use)) ? request.how_to_use : [];
    this.notes = (Array.isArray(request.notes)) ? request.notes : [];
    this.coa_od = request.coa_od;
    this.coa_os = request.coa_os;
    this.conj_bulbi_od = request.conj_bulbi_od;
    this.conj_bulbi_os = request.conj_bulbi_os;
    this.conj_tarsal_inferior_od = request.conj_tarsal_inferior_od;
    this.conj_tarsal_inferior_os = request.conj_tarsal_inferior_os;
    this.conj_tarsal_superior_od = request.conj_tarsal_superior_od;
    this.conj_tarsal_superior_os = request.conj_tarsal_superior_os;
    this.cornea_od = request.cornea_od;
    this.cornea_os = request.cornea_os;
    this.diagnose = request.diagnose;
    this.diagnosa_keseragaman = request.diagnosa_keseragaman;
    this.funduscopy_od = request.funduscopy_od;
    this.funduscopy_os = request.funduscopy_os;
    this.od_eye_image = request.od_eye_image;
    this.os_eye_image = request.os_eye_image;
    this.od_retina_image = request.od_retina_image;
    this.os_retina_image = request.os_retina_image;
    this.reviewer_doctor_id = request.reviewer_doctor_id;
    this.od_iris = request.od_iris;
    this.os_iris = request.os_iris;
    this.total = (Array.isArray(request.total)) ? request.total : [];
    this.complaint = request.complaint;
    this.od_lens = request.od_lens;
    this.os_lens = request.os_lens;
    this.meds_name = (Array.isArray(request.meds_name)) ? request.meds_name : [];
    this.od_palpebra_inferior = request.od_palpebra_inferior;
    this.os_palpebra_inferior = request.os_palpebra_inferior;
    this.od_palpebra_superior = request.od_palpebra_superior;
    this.os_palpebra_superior = request.os_palpebra_superior;
    this.pediatric = request.pediatric;
    this.od_movement = request.od_movement;
    this.os_movement = request.os_movement;
    this.od_position = request.od_position;
    this.os_position = request.os_position;
    this.od_pupil = request.od_pupil;
    this.os_pupil = request.os_pupil;
    this.pediatric_submit = request.pediatric_submit;
    this.retina_submit = request.retina_submit;
    this.date = request.date;
    this.therapy = request.therapy;
    this.reviewer_doctor_sign = request.reviewer_doctor_sign;
    this.od_vitreous = request.od_vitreous;
    this.os_vitreous = request.os_vitreous;
    this.time = request.time;
    this.cppt_id = request.cppt_id;
    this.nearvision_od_select = request.nearvision_od_select;
    this.kesimpulan_pemeriksaan =  request.kesimpulan_pemeriksaan;
    this.canthal_medial_od =  request.canthal_medial_od;
    this.canthal_medial_os =  request.canthal_medial_os;
    this.canthal_lateral_od =  request.canthal_lateral_od;
    this.canthal_lateral_os =  request.canthal_lateral_os;
    this.sclera_od =  request.sclera_od;
    this.sclera_os =  request.sclera_os;
    this.data_objektif_lain =  request.data_objektif_lain;
    this['image-1'] = request['image-1'];
    this['image-2'] = request['image-2'];
  }

  static schema() {
    return yup.object().shape({
      note_note: yup.string(),
      suggestion: yup.string(),
      how_to_use: yup.array().of(yup.string()),
      notes: yup.array().of(yup.string()),
      coa_od: yup.string(),
      coa_os: yup.string(),
      conj_bulbi_od: yup.string(),
      conj_bulbi_os: yup.string(),
      conj_tarsal_inferior_od: yup.string(),
      conj_tarsal_inferior_os: yup.string(),
      conj_tarsal_superior_od: yup.string(),
      conj_tarsal_superior_os: yup.string(),
      cornea_od: yup.string(),
      cornea_os: yup.string(),
      diagnose: yup.string(),
      diagnosa_keseragaman: yup.string(),
      funduscopy_od: yup.string(),
      funduscopy_os: yup.string(),
      od_eye_image: yup.string(),
      os_eye_image: yup.string(),
      od_retina_image: yup.string(),
      os_retina_image: yup.string(),
      reviewer_doctor_id: yup.string(),
      od_iris: yup.string(),
      os_iris: yup.string(),
      total: yup.array().of(yup.string()),
      complaint: yup.string(),
      od_lens: yup.string(),
      os_lens: yup.string(),
      meds_name: yup.array().of(yup.string()),
      od_palpebra_inferior: yup.string(),
      os_palpebra_inferior: yup.string(),
      od_palpebra_superior: yup.string(),
      os_palpebra_superior: yup.string(),
      pediatric: Pediatric.schema(),
      od_movement: yup.string(),
      os_movement: yup.string(),
      od_position: yup.string(),
      os_position: yup.string(),
      od_pupil: yup.string(),
      os_pupil: yup.string(),
      pediatric_submit: yup.string(),
      retina_submit: yup.string(),
      date: yup.string(),
      therapy: yup.string(),
      reviewer_doctor_sign: yup.string(),
      od_vitreous: yup.string(),
      os_vitreous: yup.string(),
      time: yup.string(),
      cppt_id: yup.string(),
      nearvision_od_select: yup.string(),
      kesimpulan_pemeriksaan: yup.string(),
      canthal_medial_od: yup.string(),
      canthal_medial_os: yup.string(),
      canthal_lateral_od: yup.string(),
      canthal_lateral_os: yup.string(),
      sclera_od: yup.string(),
      sclera_os: yup.string(),
      data_objektif_lain: yup.string(),
      'image-1': Image.schema(),
      'image-2': Image.schema(),
    });
  }

  static createFromJson(json: IUpdateDoctorPreliminaryStudyRequest) {
    return new UpdateDoctorPreliminaryStudyRequest(json);
  }

  static createDataOtoString(json: IUpdateDoctorPreliminaryStudyRequest) {
    let dataO = ''

    if (json.od_position && json.od_position !== '') {
      dataO = dataO.concat(`Posisi OD : ${json.od_position}\n`);
    }
    if (json.os_position && json.os_position !== '') {
      dataO = dataO.concat(`Posisi OS : ${json.os_position}\n`);
    }
    if (json.od_movement && json.od_movement !== '') {
      dataO = dataO.concat(`Pergerakan OD : ${json.od_movement}\n`);
    }
    if (json.os_movement && json.os_movement !== '') {
      dataO = dataO.concat(`Pergerakan OS : ${json.os_movement}\n`);
    }
    if (json.od_palpebra_superior && json.od_palpebra_superior !== '') {
      dataO = dataO.concat(`Palpebra Superior OD : ${json.od_palpebra_superior}\n`);
    }
    if (json.os_palpebra_superior && json.os_palpebra_superior !== '') {
      dataO = dataO.concat(`Palpebra Superior OS : ${json.os_palpebra_superior}\n`);
    }
    if (json.od_palpebra_inferior && json.od_palpebra_inferior !== '') {
      dataO = dataO.concat(`Palpebra Inferior OD : ${json.od_palpebra_inferior}\n`);
    }
    if (json.os_palpebra_inferior && json.os_palpebra_inferior !== '') {
      dataO = dataO.concat(`Palpebra Inferior OS : ${json.os_palpebra_inferior}\n`);
    }
    if (json.conj_tarsal_superior_od && json.conj_tarsal_superior_od !== '') {
      dataO = dataO.concat(`Conj. Tarsal Superior OD : ${json.conj_tarsal_superior_od}\n`);
    }
    if (json.conj_tarsal_superior_os && json.conj_tarsal_superior_os !== '') {
      dataO = dataO.concat(`Conj. Tarsal Superior OS : ${json.conj_tarsal_superior_os}\n`);
    }
    if (json.conj_tarsal_inferior_od && json.conj_tarsal_inferior_od !== '') {
      dataO = dataO.concat(`Conj. Tarsal Inferior OD : ${json.conj_tarsal_inferior_od}\n`);
    }
    if (json.conj_tarsal_inferior_os && json.conj_tarsal_inferior_os !== '') {
      dataO = dataO.concat(`Conj. Tarsal Inferior OS : ${json.conj_tarsal_inferior_os}\n`);
    }
    if (json.conj_bulbi_od && json.conj_bulbi_od !== '') {
      dataO = dataO.concat(`Conj. Bulbi OD : ${json.conj_bulbi_od}\n`);
    }
    if (json.conj_bulbi_os && json.conj_bulbi_os !== '') {
      dataO = dataO.concat(`Conj. Bulbi OS : ${json.conj_bulbi_os}\n`);
    }
    if (json.cornea_od && json.cornea_od !== '') {
      dataO = dataO.concat(`Cornea OD : ${json.cornea_od}\n`);
    }
    if (json.cornea_os && json.cornea_os !== '') {
      dataO = dataO.concat(`Cornea OS : ${json.cornea_os}\n`);
    }
    if (json.coa_od && json.coa_od !== '') {
      dataO = dataO.concat(`C.O.A OD : ${json.coa_od}\n`);
    }
    if (json.coa_os && json.coa_os !== '') {
      dataO = dataO.concat(`C.O.A OS : ${json.coa_os}\n`);
    }
    if (json.od_pupil && json.od_pupil !== '') {
      dataO = dataO.concat(`Pupil OD : ${json.od_pupil}\n`)
    }
    if (json.os_pupil && json.os_pupil !== '') {
      dataO = dataO.concat(`Pupil OS : ${json.os_pupil}\n`)
    }
    if (json.od_iris && json.od_iris !== '') {
      dataO = dataO.concat(`Iris OD : ${json.od_iris}\n`)
    }
    if (json.os_iris && json.os_iris !== '') {
      dataO = dataO.concat(`Iris OS : ${json.os_iris}\n`)
    }
    if (json.od_lens && json.od_lens !== '') {
      dataO = dataO.concat(`Lensa OD : ${json.od_lens}\n`)
    }
    if (json.os_lens && json.os_lens !== '') {
      dataO = dataO.concat(`Lensa OS : ${json.os_lens}\n`)
    }
    if (json.od_vitreous && json.od_vitreous !== '') {
      dataO = dataO.concat(`Vitreous OD : ${json.od_vitreous}\n`)
    }
    if (json.os_vitreous && json.os_vitreous !== '') {
      dataO = dataO.concat(`Vitreous OS : ${json.os_vitreous}\n`)
    }
    if (json.funduscopy_od && json.funduscopy_od !== '') {
      dataO = dataO.concat(`Funduscopy OD : ${json.funduscopy_od}\n`)
    }
    if (json.funduscopy_os && json.funduscopy_os !== '') {
      dataO = dataO.concat(`Funduscopy OS : ${json.funduscopy_os}\n`)
    }
    if (json.canthal_medial_od && json.canthal_medial_od !== '') {
      dataO = dataO.concat(`Canthal Medial OD : ${json.canthal_medial_od}\n`)
    }
    if (json.canthal_medial_os && json.canthal_medial_os !== '') {
      dataO = dataO.concat(`Canthal Medial OS : ${json.canthal_medial_os}\n`)
    }
    if (json.canthal_lateral_od  && json.canthal_lateral_od !== '') {
      dataO = dataO.concat(`Canthal Lateral OD : ${json.canthal_lateral_od}\n`)
    }
    if (json.canthal_lateral_os  && json.canthal_lateral_os !== '') {
      dataO = dataO.concat(`Canthal Lateral OS : ${json.canthal_lateral_os}\n`)
    }
    if (json.sclera_od  && json.sclera_od !== '') {
      dataO = dataO.concat(`Sclera OD : ${json.sclera_od}\n`)
    }
    if (json.sclera_os && json.sclera_os !== '') {
      dataO = dataO.concat(`Sclera OS : ${json.sclera_os}\n`)
    }
    if (json.data_objektif_lain && json.data_objektif_lain !== '') {
      dataO = dataO.concat(`Data Objektif Lainnya : ${json.data_objektif_lain}\n`)
    }
    return dataO;
  }

  normalize() {
    return {
      "catatan-note": this.note_note,
      anjuran: this.suggestion,
      "aturan-pakai": (Array.isArray(this.how_to_use)) ? this.how_to_use : [],
      catatan: (Array.isArray(this.notes)) ? this.notes : [],
      "coa-od": this.coa_od,
      "coa-os": this.coa_os,
      "conj-bulbi-od": this.conj_bulbi_od,
      "conj-bulbi-os": this.conj_bulbi_os,
      "conj-tarsal-inferior-od": this.conj_tarsal_inferior_od,
      "conj-tarsal-inferior-os": this.conj_tarsal_inferior_os,
      "conj-tarsal-superior-od": this.conj_tarsal_superior_od,
      "conj-tarsal-superior-os": this.conj_tarsal_superior_os,
      "cornea-od": this.cornea_od,
      "cornea-os": this.cornea_os,
      diagnosa: this.diagnose,
      'diagnosa-keseragaman': this.diagnosa_keseragaman,
      "funduscopy-od": this.funduscopy_od,
      "funduscopy-os": this.funduscopy_os,
      "gambar-mata-od": this.od_eye_image,
      "gambar-mata-os": this.os_eye_image,
      "gambar-retina-od": this.od_retina_image,
      "gambar-retina-os": this.os_retina_image,
      "id-dokter-pengkaji": this.reviewer_doctor_id,
      "iris-od": this.od_iris,
      "iris-os": this.os_iris,
      jumlah: (Array.isArray(this.total)) ? this.total : [],
      keluhan: this.complaint,
      "lensa-od": this.od_lens,
      "lensa-os": this.os_lens,
      "nama-obat": (Array.isArray(this.meds_name)) ? this.meds_name : [],
      "palpebra-inferior-od": this.od_palpebra_inferior,
      "palpebra-inferior-os": this.os_palpebra_inferior,
      "palpebra-superior-od": this.od_palpebra_superior,
      "palpebra-superior-os": this.os_palpebra_superior,
      pediatrik: this.pediatric,
      "pergerakan-od": this.od_movement,
      "pergerakan-os": this.os_movement,
      "posisi-od": this.od_position,
      "posisi-os": this.os_position,
      "pupil-od": this.od_pupil,
      "pupil-os": this.os_pupil,
      "submit-pediatrik": this.pediatric_submit,
      "submit-retina": this.retina_submit,
      tanggal: UpdateDoctorPreliminaryStudyRequest.convertToNormalDatetime(this.date),
      terapi: this.therapy,
      "ttd-dokter-pengkaji": this.reviewer_doctor_sign,
      "vitreous-od": this.od_vitreous,
      "vitreous-os": this.os_vitreous,
      'nearvision-od-select': this.nearvision_od_select,
      kesimpulan_pemeriksaan : this.kesimpulan_pemeriksaan,
      'canthal-medial-od': this.canthal_medial_od,
      'canthal-medial-os': this.canthal_medial_os,
      'canthal-lateral-od': this.canthal_lateral_od,
      'canthal-lateral-os': this.canthal_lateral_os,
      'sclera-od': this.sclera_od,
      'sclera-os': this.sclera_os,
      'data-objektif-lain': this.data_objektif_lain,
      'image-1': this['image-1'],
      'image-2': this['image-2'],
      waktu: this.time,
      emr_id: this.emr_id,
      nomor_mr: this.nomor_mr,
      id_pelayanan: this.id_pelayanan,
      kode_cabang: this.kode_cabang,
      tipe_pasien: this.tipe_pasien,
      jenis_pelayanan: this.jenis_pelayanan,
      id_dokter: this.id_dokter,
      no_sep: this.no_sep,
      cppt_id: this.cppt_id,
    }
  }

  static convertToNormalDatetime(date: any) {
    const d = new Date(date);
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }
}

export interface IArrayPrescription {
  meds_name: Array<string>;
  total: Array<string>;
  how_to_use: Array<string>;
  notes: Array<string>;
}

export class ArrayPrescription {
  meds_name: Array<string>;
  total: Array<string>;
  how_to_use: Array<string>;
  notes: Array<string>;

  constructor(request: IArrayPrescription) {
    this.meds_name = request.meds_name;
    this.total = request.total;
    this.how_to_use = request.how_to_use;
    this.notes = request.notes;
  }

  static createFromJson(json: IArrayPrescription) {
    return new ArrayPrescription(json);
  }

  static createFromForm(formValue: any, htu: Array<IHowToUse>): IArrayPrescription | undefined {
    if (formValue && formValue && Array.isArray(formValue)) {
      let meds_name: Array<string> = [];
      let total: Array<string> = [];
      let how_to_use: Array<string> = [];
      let notes: Array<string> = [];
      for (let i = 0; i < formValue.length; i++) {
        meds_name = [...meds_name, formValue[i].meds_name.value];
        total = [...total, formValue[i].total];
        how_to_use = [...how_to_use, formValue[i].how_to_use.id];
        notes = [...notes, formValue[i].notes];
      }
      return ArrayPrescription.createFromJson({ meds_name, total, how_to_use, notes });
    }
    return undefined;
  }
}

export interface ICreatePreliminaryCppt extends ICreateCpptRoRequest {
  resep?: any
  unit: string;
  anjuran: string;
  gambar_mata_od: string;
  gambar_mata_os: string;
  gambar_retina_od: string;
  gambar_retina_os: string;
  eye_submit: string;
  retina_submit: string;
  pediatric: any;
  'picture-data-o': any;
  'image-2': any;
  how_to_use?: Array<string>;
  notes?: Array<string>;
  total?: Array<string>;
  meds_name?: Array<string>;
  is_form_doctor: boolean;
  pediatric_submit: string;
  is_create_from_preliminary?: boolean;
}

export class CreatePreliminaryCppt extends CreateCpptRoRequest {
  resep?: any
  unit: string;
  anjuran: string;
  gambar_mata_od: string;
  gambar_mata_os: string;
  gambar_retina_od: string;
  gambar_retina_os: string;
  pediatric: any;
  'picture-data-o': any;
  'image-2': any;
  eye_submit: string;
  retina_submit: string;
  how_to_use?: Array<string>;
  notes?: Array<string>;
  total?: Array<string>;
  meds_name?: Array<string>;
  is_form_doctor: boolean;
  pediatric_submit: string;
  is_create_from_preliminary?: boolean;

  constructor(request: ICreatePreliminaryCppt) {
    super(request);
    this.resep = request.resep;
    this.unit = request.unit ?? 'RawatJalan';
    this.anjuran = request.anjuran;
    this.gambar_mata_od = request.gambar_mata_od;
    this.gambar_mata_os = request.gambar_mata_os;
    this.gambar_retina_od = request.gambar_retina_od;
    this.gambar_retina_os = request.gambar_retina_os;
    this.eye_submit = request.eye_submit;
    this.retina_submit = request.retina_submit;
    this.pediatric = request.pediatric;
    this['picture-data-o'] = request['picture-data-o'];
    this['image-2'] = request['image-2'];
    this.how_to_use = (request.how_to_use && Array.isArray(request.how_to_use)) ? request.how_to_use : [];
    this.notes = (request.notes && Array.isArray(request.notes)) ? request.notes : [];
    this.total = (request.total && Array.isArray(request.total)) ? request.total : [];
    this.meds_name = (request.meds_name && Array.isArray(request.meds_name)) ? request.meds_name : [];
    this.is_form_doctor = true; // request.is_form_doctor;
    this.pediatric_submit = request.pediatric_submit;
    this.is_create_from_preliminary = request.is_create_from_preliminary;
  }

  normalize() {
    return {
      'data-s': this.data_s,
      'data-o': this.data_o,
      'data-a': this.data_a,
      'data-a-text': this.data_a_text,
      'data-p': this.data_p,
      'instruksi-ppa': this.instruksi_ppa,
      waktu: this.waktu ? DateTimeConverter.convertToNormalDatetime(this.waktu) : '',
      'id-perawat-cppt': this.id_perawat_cppt ?? '',
      'ttd-perawat-cppt': this.ttd_perawat_cppt ?? '',
      'id-dokter-pengkaji': this.id_dokter_pengkaji ?? '',
      'ttd-dokter-pengkaji': this.ttd_dokter_pengkaji ?? '',
      'data-o-json': this.data_o_json,
      anjuran: this.anjuran,
      unit: this.unit,
      emr_id: this.emr_id,
      nomor_mr: this.nomor_mr,
      id_pelayanan: this.id_pelayanan,
      kode_cabang: this.kode_cabang,
      tipe_pasien: this.tipe_pasien,
      jenis_pelayanan: this.jenis_pelayanan,
      id_dokter: this.id_dokter,
      no_sep: this.no_sep,
      "aturan-pakai": this.how_to_use,
      catatan: this.notes,
      jumlah: this.total,
      'nama-obat': this.meds_name,
      'gambar-mata-od': this.gambar_mata_od,
      'gambar-mata-os': this.gambar_mata_os,
      'gambar-retina-od': this.gambar_retina_od,
      'gambar-retina-os': this.gambar_retina_os,
      'submit-retina': this.retina_submit,
      'submit-mata': this.eye_submit,
      pediatrik: this.pediatric,
      'picture-data-o': this['picture-data-o'],
      'image-2': this['image-2'],
      'is-form-dokter': this.is_form_doctor,
      'submit-pediatrik': this.pediatric_submit,
      is_create_from_preliminary: this.is_create_from_preliminary,
      'cmb-data-o': this.cmb_data_o,
    }
  }

  static scheme() {
    return yup.object().shape({
      data_s: yup.string().required(),
      data_o: yup.string(),
      data_a: yup.string(),
      data_a_text: yup.string(),
      data_p: yup.string(),
      anjuran: yup.string(),
      instruksi_ppa: yup.string(),
      how_to_use: yup.array().of(yup.string()),
      notes: yup.array().of(yup.string()),
      total: yup.array().of(yup.string()),
      meds_name: yup.array().of(yup.string()),
      waktu: yup.string(),
      id_perawat_cppt: yup.string(),
      ttd_perawat_cppt: yup.string(),
      id_dokter_pengkaji: yup.string(),
      ttd_dokter_pengkaji: yup.string(),
      gambar_mata_od: yup.mixed(),
      gambar_mata_os: yup.mixed(),
      gambar_retina_od: yup.mixed(),
      gambar_retina_os: yup.mixed(),
      pediatric: yup.mixed(),
      'picture-data-o': yup.mixed(),
      'image-2': yup.mixed(),
    });
  }

  static createFromJson(json: ICreatePreliminaryCppt) {
    return new CreatePreliminaryCppt(json);
  }
}

export interface IUpdatePreliminaryCppt extends ICreatePreliminaryCppt {
  ID: string;
}

export class UpdatePreliminaryCppt extends CreatePreliminaryCppt {
  ID: string;

  constructor(request: IUpdatePreliminaryCppt) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IUpdatePreliminaryCppt) {
    return new UpdatePreliminaryCppt(json);
  }

  normalize(): any {
    const request = super.normalize();
    return {...request, ID: this.ID};
  }
}

export class CreatePDFData {

  static createPdfRequest(json: IDoctorPreliminaryStudyFormModel, ro: IPreliminaryStudyForm, treatment: ITreatmentModel): any {
    const resep = json.Resep && Array.isArray(json.Resep) && json.Resep.length > 0 ? json.Resep : [];
    const newResep = resep.map((item: IPrescription, key: number) => {
      return {
        no: `${key + 1}`,
        namaObat: item.Nama_Obat,
        namaSatuan: item.Nama_Satuan,
        jumlah: item.Jumlah,
        aturanPakai: item.Kode_AturanPakai,
        catatan: item.Catatan,
      }
    });

    const getLain = (lainCode: string, lainText: string) => {
      if (lainCode === 'Lain-Lain' || lainCode === 'Lain-lain') {
        return lainText;
      } else {
        return lainCode;
      }
    }

    return {
      'pasien.Umur': CreatePDFRequest.normalizeAge(treatment?.Pasien?.Umur_Lengkap),
      'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(treatment?.Pasien?.Tgl_Lahir),
      create_date_and_time: DateTimeConverter.convertToDateTime(json?.Tanggal_Pengkajian),
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

      // rpl ref subjektif 2
      isJsonO_RPL2_RS_VA: !!(ro && ro.OD && ro.OS && ro.OD.RPL_2 && ro.OS.RPL_2 && ((ro.OD.RPL_2.Va_Aquity && ro.OD.RPL_2.Va_Aquity !== '') || (ro.OS.RPL_2.Va_Aquity && ro.OS.RPL_2.Va_Aquity !== '') || (ro.OD.RPL_2.Va_Aquity && ro.OD.RPL_2.Va_Aquity !== '') || (ro.OS.RPL_2.Va_Aquity && ro.OS.RPL_2.Va_Aquity !== ''))),
      JsonO_OD_RPL2_RS_VA: ro?.OD?.RPL_2?.Va_Aquity ? ro?.OD?.RPL_2?.Va_Aquity : ro?.OD?.RPL_2?.Va_Aquity ? ro?.OD?.RPL_2?.Va_Aquity : '',
      JsonO_OS_RPL2_RS_VA: ro?.OS?.RPL_2?.Va_Aquity ? ro?.OS?.RPL_2?.Va_Aquity : ro?.OS?.RPL_2?.Va_Aquity ? ro?.OS?.RPL_2?.Va_Aquity : '',

      isJsonO_RPL2_RS: !!(ro.OD?.RPL_2?.Select === 'on' || ro.OS?.RPL_2?.Select === 'on'),
      OD_RPL2_RS: `Sph: ${ro?.OD?.RPL_2?.Sph} Cyl. ${ro?.OD?.RPL_2?.Cyl} x ${ro?.OD?.RPL_2?.Axis}`,
      OS_RPL2_RS: `Sph: ${ro?.OS?.RPL_2?.Sph} Cyl. ${ro?.OS?.RPL_2?.Cyl} x ${ro?.OS?.RPL_2?.Axis}`,

      isJsonO_RPL2_RS_Visus_Akhir: !!(ro && ro.OD && ro.OS && ro.OD.RPL_2 && ro.OS.RPL_2 && ((ro.OD.RPL_2.VA && ro.OD.RPL_2.VA !== '') || (ro.OS.RPL_2.VA && ro.OS.RPL_2.VA !== '') || (ro.OD.RPL_2.VA && ro.OD.RPL_2.VA !== '') || (ro.OS.RPL_2.VA && ro.OS.RPL_2.VA !== ''))),
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

      // rpl streak2
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

      MataOD: json.Gambar_Mata_OD && json.Gambar_Mata_OD !== '' ? json.Gambar_Mata_OD : 'https://bucket.rsmatasmec.com/eye-clean.jpeg',
      MataOS: json.Gambar_Mata_OS && json.Gambar_Mata_OS !== '' ? json.Gambar_Mata_OS : 'https://bucket.rsmatasmec.com/eye-clean.jpeg',
      isGambarRetina: !!(json.Submit_Retina && json.Submit_Retina === '1'),
      RetinaOD: json.Gambar_Retina_OD && json.Gambar_Retina_OD !== '' ? json.Gambar_Retina_OD : 'https://bucket.rsmatasmec.com/retina-od.jpg',
      RetinaOS: json.Gambar_Retina_OS && json.Gambar_Retina_OS !== '' ? json.Gambar_Retina_OS : 'https://bucket.rsmatasmec.com/retina-os.jpg',
      isResep: !!(json.Resep && Array.isArray(json.Resep) && json.Resep.length > 0),
      resep: newResep,
      diagnose_keseragaman: json?.Diagnosa_Keseragaman ?? '',
      od_ket_tono: ro?.OD?.Keterangan_Tono ?? '',
      os_ket_tono: ro?.OS?.Keterangan_Tono ?? '',
      tandaTanganDokter: json.TTD_Dokter_Pengkaji && json.TTD_Dokter_Pengkaji !== '' ? json.TTD_Dokter_Pengkaji : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',

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

      isJsonO_pediatrik : !!((json.Submit_Pediatrik === "1")),
      
      isJsonO_cardif : !!((json.Pediatrik.Cardif_OD_Test_Distance_1 !== '' || json.Pediatrik.Cardif_OS_Test_Distance_1 !== '') || (json.Pediatrik.Cardif_OD_Test_Distance_50 !== '' || json.Pediatrik.Cardif_OS_Test_Distance_50 !== '')),
      isJsonO_test_distance1m : !!((json.Pediatrik.Cardif_OD_Test_Distance_1 !== '' || json.Pediatrik.Cardif_OS_Test_Distance_1 !== '')),
      JsonO_OD_test_distance1m : json.Pediatrik.Cardif_OD_Test_Distance_1 ?? '',
      JsonO_OS_test_distance1m : json.Pediatrik.Cardif_OS_Test_Distance_1  ?? '',

      isJsonO_test_distance50m : !!((json.Pediatrik.Cardif_OD_Test_Distance_50 !== '' || json.Pediatrik.Cardif_OS_Test_Distance_50 !== '')),
      JsonO_OD_test_distance50m : json.Pediatrik.Cardif_OD_Test_Distance_50 ?? '',
      JsonO_OS_test_distance50m : json.Pediatrik.Cardif_OS_Test_Distance_50  ?? '',

      isJsonO_tac : !!((json.Pediatrik.Tac_OD_At_38 !== '' || json.Pediatrik.Tac_OS_At_38 !== '') || (json.Pediatrik.Tac_OD_At_55 !== '' || json.Pediatrik.Tac_OS_At_55 !== '') || (json.Pediatrik.Tac_OD_At_84 !== '' || json.Pediatrik.Tac_OS_At_84 !== '')),

      isJsonO_at38cm  : !!((json.Pediatrik.Tac_OD_At_38 !== '' || json.Pediatrik.Tac_OS_At_38 !== '')),
      JsonO_OD_at38cm : json.Pediatrik.Tac_OD_At_38  ?? '',
      JsonO_OS_at38cm : json.Pediatrik.Tac_OS_At_38  ?? '',

      isJsonO_at55cm  : !!((json.Pediatrik.Tac_OD_At_55 !== '' || json.Pediatrik.Tac_OS_At_55 !== '')),
      JsonO_OD_at55cm : json.Pediatrik.Tac_OD_At_55  ?? '',
      JsonO_OS_at55cm : json.Pediatrik.Tac_OS_At_55  ?? '',

      isJsonO_at84cm  : !!((json.Pediatrik.Tac_OD_At_84 !== '' || json.Pediatrik.Tac_OS_At_84 !== '')),
      JsonO_OD_at84cm : json.Pediatrik.Tac_OD_At_84  ?? '',
      JsonO_OS_at84cm : json.Pediatrik.Tac_OS_At_84  ?? '',

      isJsonO_RPL_Ped : !!((json.Pediatrik.Rpl_Streak_OD_Streak_Sph !== '' || json.Pediatrik.Rpl_Streak_OD_Streak_Sph !== '') || (json.Pediatrik.Rpl_Streak_OD_Va !== '' || json.Pediatrik.Rpl_Streak_OS_Va !== '') || (json.Pediatrik.Rpl_Streak_OD_Streak_Axis !== '' || json.Pediatrik.Rpl_Streak_OS_Streak_Axis !== '') || (json.Pediatrik.Rpl_Streak_OD_Pd_Jauh !== '' || json.Pediatrik.Rpl_Streak_OS_Pd_Jauh !== '') || (json.Pediatrik.Rpl_Streak_OD_False !== '' || json.Pediatrik.Rpl_Streak_OS_False !== '') || (json.Pediatrik.Rpl_Streak_OD_Adaptasi !== '' || json.Pediatrik.Rpl_Streak_OS_Adaptasi !== '')),

      isJsonO_RPL_SR_Ped : !!(json.Pediatrik.Rpl_Streak_OD_Streak_Sph !== '' || json.Pediatrik.Rpl_Streak_OS_Streak_Sph !== ''),
      OD_RPL_SR_Ped : `Sph: ${json.Pediatrik.Rpl_Streak_OD_Streak_Sph} Cyl. ${json.Pediatrik.Rpl_Streak_OD_Streak_Cyl} x ${json.Pediatrik.Rpl_Streak_OD_Streak_Axis}`,
      OS_RPL_SR_ped : `Sph: ${json.Pediatrik.Rpl_Streak_OS_Streak_Sph} Cyl. ${json.Pediatrik.Rpl_Streak_OS_Streak_Cyl} x ${json.Pediatrik.Rpl_Streak_OS_Streak_Axis}`,

      isJsonO_RPL_SR_Visus_Akhir_Ped : !!(json.Pediatrik.Rpl_Streak_OD_Va !== '' || json.Pediatrik.Rpl_Streak_OS_Va !== ''),
      JsonO_OD_RPL_SR_Visus_Akhir_Ped : ((json.Pediatrik.Rpl_Streak_OD_Va  ?? '')),
      JsonO_OS_RPL_SR_Visus_Akhir_Ped : ((json.Pediatrik.Rpl_Streak_OS_Va  ?? '')),

      isJsonO_RPL_SR_Axis_Ped  : !!(json.Pediatrik.Rpl_Streak_OD_Streak_Axis !== '' || json.Pediatrik.Rpl_Streak_OS_Streak_Axis !== ''),
      JsonO_OD_RPL_SR_Axis_Ped : ((json.Pediatrik.Rpl_Streak_OD_Streak_Axis  ?? '')),
      JsonO_OS_RPL_SR_Axis_Ped : ((json.Pediatrik.Rpl_Streak_OS_Streak_Axis  ?? '')),

      isJsonO_RPL_SR_PD_Jauh_Ped : !!(json.Pediatrik.Rpl_Streak_OD_Pd_Jauh !== '' || json.Pediatrik.Rpl_Streak_OS_Pd_Jauh !== ''),
      JsonO_OD_RPL_SR_PD_Jauh_Ped : getLain((json.Pediatrik.Rpl_Streak_OD_Pd_Jauh  ?? ''), (json.Pediatrik.Rpl_Streak_OD_Pd_Jauh_Text  ?? '')),
      JsonO_OS_RPL_SR_PD_Jauh_Ped : getLain((json.Pediatrik.Rpl_Streak_OS_Pd_Jauh  ?? ''), (json.Pediatrik.Rpl_Streak_OS_Pd_Jauh_Text  ?? '')),

      isJsonO_RPL_SR_False_Ped : !!(json.Pediatrik.Rpl_Streak_OD_False !== '' || json.Pediatrik.Rpl_Streak_OS_False !== ''),
      JsonO_OD_RPL_SR_False_Ped : getLain((json.Pediatrik.Rpl_Streak_OD_False  ?? ''), (json.Pediatrik.Rpl_Streak_OD_False_Text  ?? '')),
      JsonO_OS_RPL_SR_False_Ped : getLain((json.Pediatrik.Rpl_Streak_OS_False  ?? ''), (json.Pediatrik.Rpl_Streak_OS_False_Text  ?? '')),

      isJsonO_RPL_SR_Adaptasi_Ped : !!(json.Pediatrik.Rpl_Streak_OD_Adaptasi !== '' || json.Pediatrik.Rpl_Streak_OS_Adaptasi !== ''),
      JsonO_OD_RPL_SR_Adaptasi_Ped : getLain((json.Pediatrik.Rpl_Streak_OD_Adaptasi  ?? ''), (json.Pediatrik.Rpl_Streak_OD_Adaptasi_Text  ?? '')),
      JsonO_OS_RPL_SR_Adaptasi_Ped : getLain((json.Pediatrik.Rpl_Streak_OS_Adaptasi  ?? ''), (json.Pediatrik.Rpl_Streak_OS_Adaptasi_Text  ?? '')),

      isJsonO_Ocular_Motility : !!(json.Pediatrik.Cover_OD_Cover_1 !== '' || json.Pediatrik.Cover_OD_Cover_2 !== '' || json.Pediatrik.Cover_OD_Cover_3 !== '' || json.Pediatrik.Cover_OD_Cover_4 !== '' || json.Pediatrik.Cover_OD_Cover_5 !== '' || json.Pediatrik.Cover_OD_Cover_6 !== '' || json.Pediatrik.Cover_OS_Cover_1 !== '' || json.Pediatrik.Cover_OS_Cover_2 !== '' || json.Pediatrik.Cover_OS_Cover_3 !== '' || json.Pediatrik.Cover_OS_Cover_4 !== '' || json.Pediatrik.Cover_OS_Cover_5 !== '' || json.Pediatrik.Cover_OS_Cover_6 !== ''),

      JsonO_OD_Ocular_1 : getLain((json.Pediatrik.Cover_OD_Cover_1  ?? ''), (json.Pediatrik.Cover_OD_Cover_Text_1  ?? '')),
      JsonO_OD_Ocular_2 : getLain((json.Pediatrik.Cover_OD_Cover_2  ?? ''), (json.Pediatrik.Cover_OD_Cover_Text_2  ?? '')),
      JsonO_OD_Ocular_3 : getLain((json.Pediatrik.Cover_OD_Cover_3  ?? ''), (json.Pediatrik.Cover_OD_Cover_Text_3  ?? '')),
      JsonO_OD_Ocular_4 : getLain((json.Pediatrik.Cover_OD_Cover_4  ?? ''), (json.Pediatrik.Cover_OD_Cover_Text_4  ?? '')),
      JsonO_OD_Ocular_5 : getLain((json.Pediatrik.Cover_OD_Cover_5  ?? ''), (json.Pediatrik.Cover_OD_Cover_Text_5  ?? '')),
      JsonO_OD_Ocular_6 : getLain((json.Pediatrik.Cover_OD_Cover_6  ?? ''), (json.Pediatrik.Cover_OD_Cover_Text_6  ?? '')),

      JsonO_OS_Ocular_1 : getLain((json.Pediatrik.Cover_OS_Cover_1  ?? ''), (json.Pediatrik.Cover_OS_Cover_Text_1  ?? '')),
      JsonO_OS_Ocular_2 : getLain((json.Pediatrik.Cover_OS_Cover_2  ?? ''), (json.Pediatrik.Cover_OS_Cover_Text_2  ?? '')),
      JsonO_OS_Ocular_3 : getLain((json.Pediatrik.Cover_OS_Cover_3  ?? ''), (json.Pediatrik.Cover_OS_Cover_Text_3  ?? '')),
      JsonO_OS_Ocular_4 : getLain((json.Pediatrik.Cover_OS_Cover_4  ?? ''), (json.Pediatrik.Cover_OS_Cover_Text_4  ?? '')),
      JsonO_OS_Ocular_5 : getLain((json.Pediatrik.Cover_OS_Cover_5  ?? ''), (json.Pediatrik.Cover_OS_Cover_Text_5  ?? '')),
      JsonO_OS_Ocular_6 : getLain((json.Pediatrik.Cover_OS_Cover_6  ?? ''), (json.Pediatrik.Cover_OS_Cover_Text_6  ?? '')),

      isJsonO_Cover : !!(json.Pediatrik.Cover_Uncover_OD_Ortho_Without_Check !== '' || json.Pediatrik.Cover_Uncover_OS_Ortho_Without_Check !== '' || json.Pediatrik.Cover_Uncover_OD_Ortho_With_Check !== '' || json.Pediatrik.Cover_Uncover_OS_Ortho_With_Check !== '' || (json.Pediatrik.Prisma_OD_Prisma_Without_Xt_Near !== '' || json.Pediatrik.Prisma_OD_Prisma_Without_Et_Near !== '' || json.Pediatrik.Prisma_OD_Prisma_Without_Hi_Near !== '' || json.Pediatrik.Prisma_OD_Prisma_Without_Ho_Near !== '' ||
json.Pediatrik.Prisma_OS_Prisma_Without_Xt_Near !== '' || json.Pediatrik.Prisma_OS_Prisma_Without_Et_Near !== '' || json.Pediatrik.Prisma_OS_Prisma_Without_Hi_Near !== '' || json.Pediatrik.Prisma_OS_Prisma_Without_Ho_Near !== '' ||
json.Pediatrik.Prisma_OD_Prisma_Without_Xt_Distance !== '' || json.Pediatrik.Prisma_OD_Prisma_Without_Et_Distance !== '' || json.Pediatrik.Prisma_OD_Prisma_Without_Hi_Distance !== '' || json.Pediatrik.Prisma_OD_Prisma_Without_Ho_Distance !== '' ||
json.Pediatrik.Prisma_OS_Prisma_Without_Xt_Distance !== '' || json.Pediatrik.Prisma_OS_Prisma_Without_Et_Distance !== '' || json.Pediatrik.Prisma_OS_Prisma_Without_Hi_Distance !== '' || json.Pediatrik.Prisma_OS_Prisma_Without_Ho_Distance !== '' ||
json.Pediatrik.Prisma_OD_Prisma_With_Xt_Near !== '' || json.Pediatrik.Prisma_OD_Prisma_With_Et_Near !== '' || json.Pediatrik.Prisma_OD_Prisma_With_Hi_Near !== '' || json.Pediatrik.Prisma_OD_Prisma_With_Ho_Near !== '' ||
json.Pediatrik.Prisma_OS_Prisma_With_Xt_Near !== '' || json.Pediatrik.Prisma_OS_Prisma_With_Et_Near !== '' || json.Pediatrik.Prisma_OS_Prisma_With_Hi_Near !== '' || json.Pediatrik.Prisma_OS_Prisma_With_Ho_Near !== '' ||
json.Pediatrik.Prisma_OD_Prisma_With_Xt_Distance !== '' || json.Pediatrik.Prisma_OD_Prisma_With_Et_Distance !== '' || json.Pediatrik.Prisma_OD_Prisma_With_Hi_Distance !== '' || json.Pediatrik.Prisma_OD_Prisma_With_Ho_Distance !== '' ||
json.Pediatrik.Prisma_OS_Prisma_With_Xt_Distance !== '' || json.Pediatrik.Prisma_OS_Prisma_With_Et_Distance !== '' || json.Pediatrik.Prisma_OS_Prisma_With_Hi_Distance !== '' || json.Pediatrik.Prisma_OS_Prisma_With_Ho_Distance !== ''
      )),

      isJsonO_Ortho : !!(json.Pediatrik.Cover_Uncover_OD_Ortho_Without_Check !== '' || json.Pediatrik.Cover_Uncover_OS_Ortho_Without_Check !== '' || json.Pediatrik.Cover_Uncover_OD_Ortho_With_Check !== '' || json.Pediatrik.Cover_Uncover_OS_Ortho_With_Check !== ''),
      ortho_without_od : CreatePDFRequest.getCheckImage(json.Pediatrik.Cover_Uncover_OD_Ortho_Without_Check === '1'),
      ortho_without_os : CreatePDFRequest.getCheckImage(json.Pediatrik.Cover_Uncover_OS_Ortho_Without_Check === '1'),
      ortho_with_glass_od  : CreatePDFRequest.getCheckImage(json.Pediatrik.Cover_Uncover_OD_Ortho_With_Check === '1'),
      ortho_with_glass_os  : CreatePDFRequest.getCheckImage(json.Pediatrik.Cover_Uncover_OS_Ortho_With_Check === '1'),

      isJsonO_Prisma : !!(json.Pediatrik.Prisma_OD_Prisma_Without_Xt_Near !== '' || json.Pediatrik.Prisma_OD_Prisma_Without_Et_Near !== '' || json.Pediatrik.Prisma_OD_Prisma_Without_Hi_Near !== '' || json.Pediatrik.Prisma_OD_Prisma_Without_Ho_Near !== '' ||
json.Pediatrik.Prisma_OS_Prisma_Without_Xt_Near !== '' || json.Pediatrik.Prisma_OS_Prisma_Without_Et_Near !== '' || json.Pediatrik.Prisma_OS_Prisma_Without_Hi_Near !== '' || json.Pediatrik.Prisma_OS_Prisma_Without_Ho_Near !== '' ||
json.Pediatrik.Prisma_OD_Prisma_Without_Xt_Distance !== '' || json.Pediatrik.Prisma_OD_Prisma_Without_Et_Distance !== '' || json.Pediatrik.Prisma_OD_Prisma_Without_Hi_Distance !== '' || json.Pediatrik.Prisma_OD_Prisma_Without_Ho_Distance !== '' ||
json.Pediatrik.Prisma_OS_Prisma_Without_Xt_Distance !== '' || json.Pediatrik.Prisma_OS_Prisma_Without_Et_Distance !== '' || json.Pediatrik.Prisma_OS_Prisma_Without_Hi_Distance !== '' || json.Pediatrik.Prisma_OS_Prisma_Without_Ho_Distance !== '' ||
json.Pediatrik.Prisma_OD_Prisma_With_Xt_Near !== '' || json.Pediatrik.Prisma_OD_Prisma_With_Et_Near !== '' || json.Pediatrik.Prisma_OD_Prisma_With_Hi_Near !== '' || json.Pediatrik.Prisma_OD_Prisma_With_Ho_Near !== '' ||
json.Pediatrik.Prisma_OS_Prisma_With_Xt_Near !== '' || json.Pediatrik.Prisma_OS_Prisma_With_Et_Near !== '' || json.Pediatrik.Prisma_OS_Prisma_With_Hi_Near !== '' || json.Pediatrik.Prisma_OS_Prisma_With_Ho_Near !== '' ||
json.Pediatrik.Prisma_OD_Prisma_With_Xt_Distance !== '' || json.Pediatrik.Prisma_OD_Prisma_With_Et_Distance !== '' || json.Pediatrik.Prisma_OD_Prisma_With_Hi_Distance !== '' || json.Pediatrik.Prisma_OD_Prisma_With_Ho_Distance !== '' ||
json.Pediatrik.Prisma_OS_Prisma_With_Xt_Distance !== '' || json.Pediatrik.Prisma_OS_Prisma_With_Et_Distance !== '' || json.Pediatrik.Prisma_OS_Prisma_With_Hi_Distance !== '' || json.Pediatrik.Prisma_OS_Prisma_With_Ho_Distance !== ''
      ),

      JsonO_OD_without_near_xt  : getLain((json.Pediatrik.Prisma_OD_Prisma_Without_Xt_Near ?? ''), (json.Pediatrik.Prisma_OD_Prisma_Without_Xt_Near_Lain_Text ?? '')),
      JsonO_OD_without_near_et  : getLain((json.Pediatrik.Prisma_OD_Prisma_Without_Et_Near ?? ''), (json.Pediatrik.Prisma_OD_Prisma_Without_Et_Near_Lain_Text ?? '')),
      JsonO_OD_without_near_hi  : getLain((json.Pediatrik.Prisma_OD_Prisma_Without_Hi_Near ?? ''), (json.Pediatrik.Prisma_OD_Prisma_Without_Hi_Near_Lain_Text ?? '')),
      JsonO_OD_without_near_ho  : getLain((json.Pediatrik.Prisma_OD_Prisma_Without_Ho_Near ?? ''), (json.Pediatrik.Prisma_OD_Prisma_Without_Ho_Near_Lain_Text ?? '')),

      JsonO_OS_without_near_xt  : getLain((json.Pediatrik.Prisma_OS_Prisma_Without_Xt_Near  ?? ''), (json.Pediatrik.Prisma_OS_Prisma_Without_Xt_Near_Lain_Text  ?? '')),
      JsonO_OS_without_near_et  : getLain((json.Pediatrik.Prisma_OS_Prisma_Without_Et_Near  ?? ''), (json.Pediatrik.Prisma_OS_Prisma_Without_Et_Near_Lain_Text  ?? '')),
      JsonO_OS_without_near_hi  : getLain((json.Pediatrik.Prisma_OS_Prisma_Without_Hi_Near  ?? ''), (json.Pediatrik.Prisma_OS_Prisma_Without_Hi_Near_Lain_Text  ?? '')),
      JsonO_OS_without_near_ho  : getLain((json.Pediatrik.Prisma_OS_Prisma_Without_Ho_Near  ?? ''), (json.Pediatrik.Prisma_OS_Prisma_Without_Ho_Near_Lain_Text  ?? '')),

      JsonO_OD_without_distance_xt  : getLain((json.Pediatrik.Prisma_OD_Prisma_Without_Xt_Distance  ?? ''), (json.Pediatrik.Prisma_OD_Prisma_Without_Xt_Distance_Lain_Text  ?? '')),
      JsonO_OD_without_distance_et  : getLain((json.Pediatrik.Prisma_OD_Prisma_Without_Et_Distance  ?? ''), (json.Pediatrik.Prisma_OD_Prisma_Without_Et_Distance_Lain_Text  ?? '')),
      JsonO_OD_without_distance_hi  : getLain((json.Pediatrik.Prisma_OD_Prisma_Without_Hi_Distance  ?? ''), (json.Pediatrik.Prisma_OD_Prisma_Without_Hi_Distance_Lain_Text  ?? '')),
      JsonO_OD_without_distance_ho  : getLain((json.Pediatrik.Prisma_OD_Prisma_Without_Ho_Distance  ?? ''), (json.Pediatrik.Prisma_OD_Prisma_Without_Ho_Distance_Lain_Text  ?? '')),

      JsonO_OS_without_distance_xt  : getLain((json.Pediatrik.Prisma_OD_Prisma_Without_Xt_Distance  ?? ''), (json.Pediatrik.Prisma_OD_Prisma_Without_Xt_Distance_Lain_Text  ?? '')),
      JsonO_OS_without_distance_et  : getLain((json.Pediatrik.Prisma_OS_Prisma_Without_Et_Distance  ?? ''), (json.Pediatrik.Prisma_OS_Prisma_Without_Et_Distance_Lain_Text  ?? '')),
      JsonO_OS_without_distance_hi  : getLain((json.Pediatrik.Prisma_OS_Prisma_Without_Hi_Distance  ?? ''), (json.Pediatrik.Prisma_OS_Prisma_Without_Hi_Distance_Lain_Text  ?? '')),
      JsonO_OS_without_distance_ho  : getLain((json.Pediatrik.Prisma_OS_Prisma_Without_Ho_Distance  ?? ''), (json.Pediatrik.Prisma_OS_Prisma_Without_Ho_Distance_Lain_Text  ?? '')),

      JsonO_OD_with_near_xt  : getLain((json.Pediatrik.Prisma_OD_Prisma_With_Xt_Near  ?? ''), (json.Pediatrik.Prisma_OD_Prisma_With_Xt_Near_Lain_Text  ?? '')),
      JsonO_OD_with_near_et  : getLain((json.Pediatrik.Prisma_OD_Prisma_With_Et_Near  ?? ''), (json.Pediatrik.Prisma_OD_Prisma_With_Et_Near_Lain_Text  ?? '')),
      JsonO_OD_with_near_hi  : getLain((json.Pediatrik.Prisma_OD_Prisma_With_Hi_Near  ?? ''), (json.Pediatrik.Prisma_OD_Prisma_With_Hi_Near_Lain_Text  ?? '')),
      JsonO_OD_with_near_ho  : getLain((json.Pediatrik.Prisma_OD_Prisma_With_Ho_Near  ?? ''), (json.Pediatrik.Prisma_OD_Prisma_With_Ho_Near_Lain_Text  ?? '')),

      JsonO_OS_with_near_xt  : getLain((json.Pediatrik.Prisma_OS_Prisma_With_Xt_Near  ?? ''), (json.Pediatrik.Prisma_OS_Prisma_With_Xt_Near_Lain_Text  ?? '')),
      JsonO_OS_with_near_et  : getLain((json.Pediatrik.Prisma_OS_Prisma_With_Et_Near  ?? ''), (json.Pediatrik.Prisma_OS_Prisma_With_Et_Near_Lain_Text  ?? '')),
      JsonO_OS_with_near_hi  : getLain((json.Pediatrik.Prisma_OS_Prisma_With_Hi_Near  ?? ''), (json.Pediatrik.Prisma_OS_Prisma_With_Hi_Near_Lain_Text  ?? '')),
      JsonO_OS_with_near_ho  : getLain((json.Pediatrik.Prisma_OS_Prisma_With_Ho_Near  ?? ''), (json.Pediatrik.Prisma_OS_Prisma_With_Ho_Near_Lain_Text  ?? '')),

      JsonO_OD_with_distance_xt  : getLain((json.Pediatrik.Prisma_OD_Prisma_With_Xt_Distance  ?? ''), (json.Pediatrik.Prisma_OD_Prisma_With_Xt_Distance_Lain_Text  ?? '')),
      JsonO_OD_with_distance_et  : getLain((json.Pediatrik.Prisma_OD_Prisma_With_Et_Distance  ?? ''), (json.Pediatrik.Prisma_OD_Prisma_With_Et_Distance_Lain_Text  ?? '')),
      JsonO_OD_with_distance_hi  : getLain((json.Pediatrik.Prisma_OD_Prisma_With_Hi_Distance  ?? ''), (json.Pediatrik.Prisma_OD_Prisma_With_Hi_Distance_Lain_Text  ?? '')),
      JsonO_OD_with_distance_ho  : getLain((json.Pediatrik.Prisma_OD_Prisma_With_Ho_Distance  ?? ''), (json.Pediatrik.Prisma_OD_Prisma_With_Ho_Distance_Lain_Text  ?? '')),

      JsonO_OS_with_distance_xt  : getLain((json.Pediatrik.Prisma_OS_Prisma_With_Xt_Distance  ?? ''), (json.Pediatrik.Prisma_OS_Prisma_With_Xt_Distance_Lain_Text  ?? '')),
      JsonO_OS_with_distance_et  : getLain((json.Pediatrik.Prisma_OS_Prisma_With_Et_Distance  ?? ''), (json.Pediatrik.Prisma_OS_Prisma_With_Et_Distance_Lain_Text  ?? '')),
      JsonO_OS_with_distance_hi  : getLain((json.Pediatrik.Prisma_OS_Prisma_With_Hi_Distance  ?? ''), (json.Pediatrik.Prisma_OS_Prisma_With_Hi_Distance_Lain_Text  ?? '')),
      JsonO_OS_with_distance_ho  : getLain((json.Pediatrik.Prisma_OS_Prisma_With_Ho_Distance  ?? ''), (json.Pediatrik.Prisma_OS_Prisma_With_Ho_Distance_Lain_Text  ?? '')),

      isJsonO_RS : !!(json.Pediatrik.Randot_OD_Circles !== '' || json.Pediatrik.Randot_OD_Randot_Form !== '' || json.Pediatrik.Randot_OD_Animal !== '' || json.Pediatrik.Randot_OS_Circles !== '' || json.Pediatrik.Randot_OS_Randot_Form !== '' || json.Pediatrik.Randot_OS_Animal !== ''),

      isJsonO_Circles :  !!(json.Pediatrik.Randot_OD_Circles !== '' || json.Pediatrik.Randot_OS_Circles !== ''),
      JsonO_OD_RS_Cir : ((json.Pediatrik.Randot_OD_Circles  ?? '')),
      JsonO_OS_RS_Cir : ((json.Pediatrik.Randot_OS_Circles  ?? '')),

      isJsonO_Randot_Form :  !!(json.Pediatrik.Randot_OD_Randot_Form !== '' || json.Pediatrik.Randot_OS_Randot_Form !== ''),
      JsonO_OD_RS_Ran : ((json.Pediatrik.Randot_OD_Randot_Form  ?? '')),
      JsonO_OS_RS_Ran : ((json.Pediatrik.Randot_OS_Randot_Form  ?? '')),

      isJsonO_Animal :  !!(json.Pediatrik.Randot_OD_Animal !== '' || json.Pediatrik.Randot_OS_Animal !== ''),
      JsonO_OD_RS_Ani : ((json.Pediatrik.Randot_OD_Animal  ?? '')),
      JsonO_OS_RS_Ani : ((json.Pediatrik.Randot_OS_Animal  ?? '')),

      isJsonO_OKN_Drum : !!(json.Pediatrik.Okn_ODS_Okn !== ''),
      JsonO_ODS_OKN_Drum : ((json.Pediatrik.Okn_ODS_Okn  ?? '')),

      isJsonO_RAF_ruler : !!(json.Pediatrik.Raf_ODS_Raf !== ''),
      JsonO_ODS_RAF_ruler: ((json.Pediatrik.Raf_ODS_Raf  ?? '')),

      isJsonO_Nearvision :  !!(json.Pediatrik.Nearvision_OD_Select !== '' || json.Pediatrik.Nearvision_OS_Select !== ''),
      JsonO_OD_Nearvision : ((json.Pediatrik.Nearvision_OD_Select ?? '') || (json.Pediatrik.Nearvision_OD_Nearvision  ?? '')),
      JsonO_OS_Nearvision : ((json.Pediatrik.Nearvision_OS_Select ?? '') || (json.Pediatrik.Nearvision_OS_Nearvision  ?? '')),

      isJsonO_Ptosis_FIP : !!(json.Pediatrik.Ptosis_OD_FIP !== '' || json.Pediatrik.Ptosis_OS_FIP !== ''),
      JsonO_OD_Ptosis_FIP : ((json.Pediatrik.Ptosis_OD_FIP  ?? '')),
      JsonO_OS_Ptosis_FIP : ((json.Pediatrik.Ptosis_OS_FIP  ?? '')),

      isJsonO_Ptosis_MRD : !!(json.Pediatrik.Ptosis_OD_MRD !== '' || json.Pediatrik.Ptosis_OS_MRD !== ''),
      JsonO_OD_Ptosis_MRD : ((json.Pediatrik.Ptosis_OD_MRD  ?? '')),
      JsonO_OS_Ptosis_MRD : ((json.Pediatrik.Ptosis_OS_MRD  ?? '')),

      isJsonO_Ptosis_LA : !!(json.Pediatrik.Ptosis_OD_LA !== '' || json.Pediatrik.Ptosis_OS_LA !== ''),
      JsonO_OD_Ptosis_LA : ((json.Pediatrik.Ptosis_OD_LA  ?? '')),
      JsonO_OS_Ptosis_LA : ((json.Pediatrik.Ptosis_OS_LA  ?? '')),

      isJsonO_TNO_stereoskopis : !!(json.Pediatrik.TNO_Stereoskopis_ODS_1 !== '' || json.Pediatrik.TNO_Stereoskopis_ODS_2 !== '' || json.Pediatrik.TNO_Stereoskopis_ODS_3 !== '' || json.Pediatrik.TNO_Stereoskopis_ODS_4 !== '' || json.Pediatrik.TNO_Stereoskopis_ODS_5 !== ''),
      JsonO_TNO_stereoskopis_1 : ((json.Pediatrik.TNO_Stereoskopis_ODS_1  ?? '')),
      JsonO_TNO_stereoskopis_2 : ((json.Pediatrik.TNO_Stereoskopis_ODS_2  ?? '')),
      JsonO_TNO_stereoskopis_3 : ((json.Pediatrik.TNO_Stereoskopis_ODS_3  ?? '')),
      JsonO_TNO_stereoskopis_4 : ((json.Pediatrik.TNO_Stereoskopis_ODS_4  ?? '')),
      JsonO_TNO_stereoskopis_5 : ((json.Pediatrik.TNO_Stereoskopis_ODS_5  ?? '')),
      isJsonO_TNO_1 : !!(json.Pediatrik.TNO_Stereoskopis_ODS_1 !== ''),
      isJsonO_TNO_2 : !!(json.Pediatrik.TNO_Stereoskopis_ODS_2 !== ''),
      isJsonO_TNO_3 : !!(json.Pediatrik.TNO_Stereoskopis_ODS_3 !== ''),
      isJsonO_TNO_4 : !!(json.Pediatrik.TNO_Stereoskopis_ODS_4 !== ''),
      isJsonO_TNO_5 : !!(json.Pediatrik.TNO_Stereoskopis_ODS_5 !== ''),

      isJsonO_Goniometer : !!(json.Pediatrik.Goniometer_ODS_Goniometer !== '' || json.Pediatrik.Goniometer_ODS_Right_Check !== '' || json.Pediatrik.Goniometer_ODS_Left_Check !== ''),
      JsonO_ODS_Goniometer :  ((json.Pediatrik.Goniometer_ODS_Goniometer  ?? '')),
      goniometer_od : CreatePDFRequest.getCheckImage(json.Pediatrik.Goniometer_ODS_Right_Check === '1'),
      goniometer_os : CreatePDFRequest.getCheckImage(json.Pediatrik.Goniometer_ODS_Left_Check === '1'),
      nik: treatment?.Pasien?.NIK ?? '',
      sclera_od :  ((json.Sclera_OD  ?? '')),
      sclera_os :  ((json.Sclera_OS  ?? '')),
      canthal_medial_od  :  ((json.Canthal_Medial_OD  ?? '')),
      canthal_medial_os  :  ((json.Canthal_Medial_OS  ?? '')),
      canthal_lateral_od   :  ((json.Canthal_Lateral_OD  ?? '')),
      canthal_lateral_os :  ((json.Canthal_Lateral_OS  ?? '')),
      data_objektif_lain :  ((json.Data_Objektif_Lain  ?? '')),
      gambar1 : json.Image_1.Url_Image && json.Image_1.Url_Image !== '' ? json.Image_1.Url_Image : null,
      gambar2 : json.Image_2.Url_Image && json.Image_2.Url_Image !== '' ? json.Image_2.Url_Image : null,
      isJsonO_pediatrik_visus : !!((json.Pediatrik.VOD !== '' || json.Pediatrik.VOS !== '')),
      JsonO_OD_visus : getLain((json.Pediatrik.VOD  ?? ''), (json.Pediatrik.VOD_Text  ?? '')),
      JsonO_OS_visus : getLain((json.Pediatrik.VOS  ?? ''), (json.Pediatrik.VOS_Text  ?? '')),
    }
  }
}
