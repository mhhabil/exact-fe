import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@src/shared/request';
import { IHowToUse, IPrescription, IProofOfOutpatientServicesEmergencyRoomFormModel, IProofOfOutpatientServicesEmergencyRoomModel } from '../models/proof-of-outpatient-services-emergency-room.model';
import { ITreatmentModel } from '@src/modules/site/patient-list/models';
import citymapping from '@src/modules/outpatient/proof-of-outpatient-services/const/citymapping';
import { CreatePDFRequest } from '@src/shared/pdf/requests/create-pdf.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IArrayPrescriptionUGD {
  'nama-obat': Array<string>;
  jumlah: Array<string>;
  'aturan-pakai': Array<string>;
  catatan: Array<string>;
}

export class ArrayPrescriptionUGD {
  'nama-obat': Array<string>;
  jumlah: Array<string>;
  'aturan-pakai': Array<string>;
  catatan: Array<string>;

  constructor(request: IArrayPrescriptionUGD) {
    this['nama-obat'] = request['nama-obat'];
    this.jumlah = request.jumlah;
    this['aturan-pakai'] = request['aturan-pakai'];
    this.catatan = request.catatan;
  }

  static createFromJson(json: IArrayPrescriptionUGD) {
    return new ArrayPrescriptionUGD(json);
  }

  static createFromForm(formValue: any, htu: Array<IHowToUse>): IArrayPrescriptionUGD | undefined {
    if (formValue && formValue && Array.isArray(formValue)) {
      let meds_name: Array<string> = [];
      let total: Array<string> = [];
      let how_to_use: Array<string> = [];
      let notes: Array<string> = [];
      for (let i = 0; i < formValue.length; i++) {
        meds_name = [...meds_name, formValue[i]['nama-obat'].value];
        total = [...total, formValue[i].jumlah];
        how_to_use = [...how_to_use, formValue[i]['aturan-pakai'].id];
        notes = [...notes, formValue[i].catatan];
      }
      return ArrayPrescriptionUGD.createFromJson({ 'nama-obat': meds_name, jumlah:total, 'aturan-pakai': how_to_use, catatan:notes });
    }
    return undefined;
  }
}


export interface IUpdateProofOfOutpatientServicesEmergencyRoomRequest extends IAppRequest {
  keluhan: string;
  od_eye_image: string;
  od_va: string;
  od_false: string;
  od_ph: string;
  od_add: string;
  od_jagger: string;
  od_non_contact: string;
  od_schiotz: string;
  od_tanam_lensa: string;
  od_keterangan_tono: string;
  os_eye_image: string;
  os_va: string;
  os_false: string;
  os_ph: string;
  os_add: string;
  os_jagger: string;
  os_non_contact: string;
  os_schiotz: string;
  os_tanam_lensa: string;
  os_keterangan_tono: string;
  kgd: string;
  td: string;
  diagnosa: string;
  terapi: string;
  anjuran: string;
  'nama-obat': Array<string>;
  jumlah: Array<string>;
  catatan: Array<string>;
  'aturan-pakai': Array<string>;
  tanggal_ttd: string;
  tanda_tangan_radio: string;
  tanda_tangan_pasien: string;
  tanda_tangan_wali: string;
  ttd_dokter: string;
  doctor_id: string;
  doctor_sip: string;
}

export class UpdateProofOfOutpatientServicesEmergencyRoomRequest extends AppRequest {
  keluhan: string;
  od_eye_image: string;
  od_va: string;
  od_false: string;
  od_ph: string;
  od_add: string;
  od_jagger: string;
  od_non_contact: string;
  od_schiotz: string;
  od_tanam_lensa: string;
  od_keterangan_tono: string;
  os_eye_image: string;
  os_va: string;
  os_false: string;
  os_ph: string;
  os_add: string;
  os_jagger: string;
  os_non_contact: string;
  os_schiotz: string;
  os_tanam_lensa: string;
  os_keterangan_tono: string;
  kgd: string;
  td: string;
  diagnosa: string;
  terapi: string;
  anjuran: string;
  'nama-obat': Array<string>;
  jumlah: Array<string>;
  catatan: Array<string>;
  'aturan-pakai': Array<string>;
  tanggal_ttd: string;
  tanda_tangan_radio: string;
  tanda_tangan_pasien: string;
  tanda_tangan_wali: string;
  ttd_dokter: string;
  doctor_id: string;
  doctor_sip: string;

  constructor(request: IUpdateProofOfOutpatientServicesEmergencyRoomRequest) {
    super(request);
    this.keluhan = request.keluhan;
    this.od_eye_image = request.od_eye_image;
    this.od_va = request.od_va;
    this.od_false = request.od_false;
    this.od_ph = request.od_ph;
    this.od_add = request.od_add;
    this.od_jagger = request.od_jagger;
    this.od_non_contact = request.od_non_contact;
    this.od_schiotz = request.od_schiotz;
    this.od_tanam_lensa = request.od_tanam_lensa;
    this.od_keterangan_tono = request.od_keterangan_tono;
    this.os_eye_image = request.os_eye_image;
    this.os_va = request.os_va;
    this.os_false = request.os_false;
    this.os_ph = request.os_ph;
    this.os_add = request.os_add;
    this.os_jagger = request.os_jagger;
    this.os_non_contact = request.os_non_contact;
    this.os_schiotz = request.os_schiotz;
    this.os_tanam_lensa = request.os_tanam_lensa;
    this.os_keterangan_tono = request.os_keterangan_tono;
    this.kgd = request.kgd;
    this.td = request.td;
    this.diagnosa = request.diagnosa;
    this.terapi = request.terapi;
    this.anjuran = request.anjuran;
    this['nama-obat'] = (Array.isArray(request['nama-obat'])) ? request['nama-obat'] : [];
    this.jumlah = (Array.isArray(request.jumlah)) ? request.jumlah : [];
    this.catatan = (Array.isArray(request.catatan)) ? request.catatan : [];
    this['aturan-pakai'] = (Array.isArray(request['aturan-pakai'])) ? request['aturan-pakai'] : [];
    this.tanggal_ttd = request.tanggal_ttd;
    this.tanda_tangan_radio = request.tanda_tangan_radio;
    this.tanda_tangan_pasien = request.tanda_tangan_pasien;
    this.tanda_tangan_wali = request.tanda_tangan_wali;
    this.ttd_dokter = request.ttd_dokter;
    this.doctor_id = request.doctor_id;
    this.doctor_sip = request.doctor_sip;
  }

  static schema() {
    return yup.object().shape({
      keluhan: yup.string(),
      od_eye_image: yup.string(),
      od_va: yup.string(),
      od_false: yup.string(),
      od_ph: yup.string(),
      od_add: yup.string(),
      od_jagger: yup.string(),
      od_non_contact: yup.string(),
      od_schiotz: yup.string(),
      od_tanam_lensa: yup.string(),
      od_keterangan_tono: yup.string(),
      os_eye_image: yup.string(),
      os_va: yup.string(),
      os_false: yup.string(),
      os_ph: yup.string(),
      os_add: yup.string(),
      os_jagger: yup.string(),
      os_non_contact: yup.string(),
      os_schiotz: yup.string(),
      os_tanam_lensa: yup.string(),
      os_keterangan_tono: yup.string(),
      kgd: yup.string(),
      td: yup.string(),
      diagnosa: yup.string(),
      terapi: yup.string(),
      anjuran: yup.string(),
      'nama-obat': yup.array().of(yup.string()),
      jumlah: yup.array().of(yup.string()),
      catatan: yup.array().of(yup.string()),
      'aturan-pakai': yup.array().of(yup.string()),
      tanggal_ttd: yup.string(),
      tanda_tangan_radio: yup.string(),
      tanda_tangan_pasien: yup.string(),
      tanda_tangan_wali: yup.string(),
      ttd_dokter: yup.string(),
      doctor_id: yup.string(),
      doctor_sip: yup.string(),
    });
  }

  static createFromJson(json: IUpdateProofOfOutpatientServicesEmergencyRoomRequest) {
    return new UpdateProofOfOutpatientServicesEmergencyRoomRequest(json);
  }
}

export interface IBPRJUGDPdfRequest {
  emr_id: string;
  form_name: string;
  row_filter: string;
  preview: boolean;
  data: any;
}

export class BPRJUGDPdfRequest {
  emr_id: string;
  form_name: string;
  row_filter: string;
  preview: boolean;
  data: any;

  constructor(req: IBPRJUGDPdfRequest) {
    this.emr_id = req.emr_id;
    this.form_name = req.form_name;
    this.row_filter = req.row_filter;
    this.preview = req.preview;
    this.data = req.data;
  }

  static createFromJson(json: IBPRJUGDPdfRequest) {
    return new BPRJUGDPdfRequest(json);
  }

  static createPdfRequest(value: IProofOfOutpatientServicesEmergencyRoomModel, treatment: ITreatmentModel) {
    const resep = value.form.Resep && Array.isArray(value.form.Resep) && value.form.Resep.length > 0 ? value.form.Resep : [];
    const newResep = resep.map((item: IPrescription, key: number) => {
      return {
        no: `${key + 1}`,
        namaObat: item.Nama_Obat,
        namaSatuan: item.Nama_Satuan,
        jumlah: item.Jumlah,
        aturanPakai: item.Nama_AturanPakai,
        catatan: item.Catatan,
      }
    });
    const getCity = (companyCode: string) => {
      const selected = citymapping.find((item: any) => item.company_code === companyCode);
      if (selected) {
        return selected.city;
      } else {
        return '';
      }
    }

    const isTtdPasien = !!(value && value.form.Tanda_Tangan_Radio && value.form.Tanda_Tangan_Radio === '1' && value.form.Tanda_Tangan_Pasien && value.form.Tanda_Tangan_Pasien !== '');
    const isTtdWali = !!(value && value.form.Tanda_Tangan_Radio && value.form.Tanda_Tangan_Radio === '2' && value.form.Tanda_Tangan_Wali && value.form.Tanda_Tangan_Wali !== '');
    return {
      emr_id: value.EMR_ID,
      form_name: "ugd_bukti-pelayanan-rawat-jalan",
      row_filter: "",
      preview: false,
      data: {
        nomor_mr: value?.nomor_mr ?? '',
        'pasien.Nama': value?.pasien?.Nama ?? '',
        'pasien.Umur': CreatePDFRequest.normalizeAge(treatment?.Pasien?.Umur_Lengkap),
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(treatment?.Pasien?.Tgl_Lahir),
        'pasien.Jenis_Kelamin': value?.pasien?.Jenis_Kelamin ?? '',
        complaint: value.form.Keluhan ?? '',
        isJsonO_VA: !!(value.form && (value?.form?.OD?.VA !== '' || value?.form?.OS?.VA !== '')),
        JsonO_OD_VA: value?.form?.OD?.VA ? value?.form?.OD?.VA : value?.form?.OD?.VA ? value?.form?.OD?.VA : '',
        JsonO_OS_VA: value?.form?.OS?.VA ? value?.form?.OS?.VA : value?.form?.OS?.VA ? value?.form?.OS?.VA : '',

        isJsonO_False: !!(value.form && (value?.form?.OD?.False !== '' || value?.form?.OS?.False !== '')),
        JsonO_OD_False: value?.form?.OD?.False ? value?.form?.OD?.False : value?.form?.OD?.False ? value?.form?.OD?.False : '',
        JsonO_OS_False: value?.form?.OS?.False ? value?.form?.OS?.False : value?.form?.OS?.False ? value?.form?.OS?.False : '',

        isJsonO_PH: !!(value.form && (value?.form?.OD?.PH !== '' || value?.form?.OS?.PH !== '')),
        JsonO_OD_PH: value?.form?.OD?.PH ? value?.form?.OD?.PH : value?.form?.OD?.PH ? value?.form?.OD?.PH : '',
        JsonO_OS_PH: value?.form?.OS?.PH ? value?.form?.OS?.PH : value?.form?.OS?.PH ? value?.form?.OS?.PH : '',

        isJsonO_Add: !!(value.form && (value?.form?.OD?.Add !== '' || value?.form?.OS?.Add !== '')),
        JsonO_OD_Add: value?.form?.OD?.Add ? value?.form?.OD?.Add : value?.form?.OD?.Add ? value?.form?.OD?.Add : '',
        JsonO_OS_Add: value?.form?.OS?.Add ? value?.form?.OS?.Add : value?.form?.OS?.Add ? value?.form?.OS?.Add : '',

        isJsonO_Jagger: !!(value.form && (value?.form?.OD?.Jagger !== '' || value?.form?.OS?.Jagger !== '')),
        JsonO_OD_Jagger: value?.form?.OD?.Jagger ? value?.form?.OD?.Jagger : value?.form?.OD?.Jagger ? value?.form?.OD?.Jagger : '',
        JsonO_OS_Jagger: value?.form?.OS?.Jagger ? value?.form?.OS?.Jagger : value?.form?.OS?.Jagger ? value?.form?.OS?.Jagger : '',

        isJsonO_Non_Contact: !!(value?.form?.OD?.Non_Contact !== '' || value?.form?.OS?.Non_Contact !== '' || value?.form?.OD?.Non_Contact !== '' || value?.form?.OS?.Non_Contact !== ''),
        od_non_contact: value?.form?.OD?.Non_Contact ? value?.form?.OD?.Non_Contact : value?.form?.OD?.Non_Contact ? value?.form?.OD?.Non_Contact : '',
        os_non_contact: value?.form?.OS?.Non_Contact ? value?.form?.OS?.Non_Contact : value?.form?.OS?.Non_Contact ? value?.form?.OS?.Non_Contact : '',

        isJsonO_Keterangan: !!(value?.form?.OD?.Tanam_Lensa !== '' || value?.form?.OS?.Tanam_Lensa !== '' || value?.form?.OD?.Tanam_Lensa !== '' || value?.form?.OS?.Tanam_Lensa !== ''),
        od_tanam_lensa: value?.form?.OD?.Tanam_Lensa ? value?.form?.OD?.Tanam_Lensa : value?.form?.OD?.Tanam_Lensa ? value?.form?.OD?.Tanam_Lensa : '',
        os_tanam_lensa: value?.form?.OS?.Tanam_Lensa ? value?.form?.OS?.Tanam_Lensa : value?.form?.OS?.Tanam_Lensa ? value?.form?.OS?.Tanam_Lensa : '',

        isJsonO_Schiotz: !!(value?.form?.OD?.Schiotz !== '' || value?.form?.OS?.Schiotz !== '' || value?.form?.OD?.Schiotz !== '' || value?.form?.OS?.Schiotz !== ''),
        od_schiotz: value?.form?.OD?.Schiotz ? value?.form?.OD?.Schiotz : value?.form?.OD?.Schiotz ? value?.form?.OD?.Schiotz : '',
        os_schiotz: value?.form?.OS?.Schiotz ? value?.form?.OS?.Schiotz : value?.form?.OS?.Schiotz ? value?.form?.OS?.Schiotz : '',

        isJsonO_Keterangan_Tono: !!(value?.form?.OD?.Keterangan_Tono !== '' || value?.form?.OS?.Keterangan_Tono !== '' || value?.form?.OD?.Keterangan_Tono !== '' || value?.form?.OS?.Keterangan_Tono !== ''),
        JsonO_OD_Keterangan_Tono: value?.form?.OD?.Keterangan_Tono ? value?.form?.OD?.Keterangan_Tono : value?.form?.OD?.Keterangan_Tono ? value?.form?.OD?.Keterangan_Tono : '',
        JsonO_OS_Keterangan_Tono: value?.form?.OS?.Keterangan_Tono ? value?.form?.OS?.Keterangan_Tono : value?.form?.OS?.Keterangan_Tono ? value?.form?.OS?.Keterangan_Tono : '',

        // isJsonO_Catatan_Lainnya: !!(value.ro?.Catatan_Lain !== ''),
        // JsonO_OD_Catatan_Lainnya: value?.ro?.Catatan_Lain ? value?.ro?.Catatan_Lain : value?.ro?.Catatan_Lain ? value?.ro?.Catatan_Lain : '',

        kgd: value.form.KGD ?? '',
        td:  value.form.TD ?? '',
        isResep: !!(value.form?.Resep && Array.isArray(value.form.Resep) && value.form.Resep.length > 0),
        kota: getCity(treatment.Kode_Cabang),
        form_date: DateTimeConverter.convertToNormalDate(value.form.Tanggal_TTD),
        diagnose: value.form.Diagnosa ?? '',
        therapy: value.form.Terapi ?? '',
        suggestion: value.form.Anjuran ?? '',
        nik: value?.pasien?.NIK ?? '',
        pasienWali: isTtdPasien ? 'Pasien' : isTtdWali ? 'Wali' : '',
        namaPasienWali_ttd: value.form && value.form.Tanda_Tangan_Radio && value.form.Tanda_Tangan_Radio === '1' && value.form.Tanda_Tangan_Pasien && value.form.Tanda_Tangan_Pasien !== '' && treatment ? treatment.Pasien.Nama : value && value.form.Tanda_Tangan_Radio && value.form.Tanda_Tangan_Radio === '2' && value.form.Tanda_Tangan_Wali && value.form.Tanda_Tangan_Wali !== '' && treatment ? treatment.Wali.Nama : '',
        Mata_OD: value.form && value.form?.OD?.Eye_Image && value.form?.OD.Eye_Image !== '' ? value.form?.OD.Eye_Image : 'https://bucket.rsmatasmec.com/eye-clean.jpeg',
        Mata_OS: value.form && value.form?.OS?.Eye_Image && value.form?.OS.Eye_Image !== '' ? value.form?.OS.Eye_Image : 'https://bucket.rsmatasmec.com/eye-clean.jpeg',
        gambarPasienWali_ttd: value.form && value.form.Tanda_Tangan_Radio && value.form.Tanda_Tangan_Radio === '1' && value.form.Tanda_Tangan_Pasien && value.form.Tanda_Tangan_Pasien !== '' ? value.form.Tanda_Tangan_Pasien : value.form.Tanda_Tangan_Wali && value.form.Tanda_Tangan_Wali !== '' ? value.form.Tanda_Tangan_Wali : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        gambarDokter_ttd: value.form && value.form.TTD_Dokter && value.form.TTD_Dokter !== '' ? value.form.TTD_Dokter : '',
        resep: newResep,
        namaDokter_ttd: (value?.form?.Nama_Dokter !== '') ? value?.form?.Nama_Dokter : undefined,
        SIP: value.form.SIP_Dokter ?? '',
      },
    }
  }
}
