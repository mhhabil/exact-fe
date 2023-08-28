import { CreatePDFRequest, ICreatePDFRequest } from "@src/shared/pdf/requests/create-pdf.request";
import { IAppRequest } from "@src/shared/request";
import { IPostoperativeInstructionsModel } from "../models/postoperative-instructions-model";
import { DateTimeConverter } from "@src/shared/datetime-converter";

export interface IPdfPostOperativeInstructionRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string;
    'pasien.Tgl_Lahir': string;
    'pasien.Alamat': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    keluhan_rumah: string;
    tatalaksana_keluhan: string;
    mobilisasi: string;
    anjuran_1: string;
    anjuran_2: string;
    anjuran_3: string;
    anjuran_4: string;
    anjuran_5: string;
    anjuran_6: string;
    anjuran_7: string;
    anjuran_8: string;
    anjuran_8_1: string;
    anjuran_8_2: string;
    anjuran_8_3: string;
    anjuran_8_4: string;
    anjuran_lain: string;
    posisi_tidur_dll: string;
    pendamping_1: string;
    pendamping_2: string;
    pendamping_3: string;
    pendamping_keluarga: string;
    pendamping_lain_lain: string;
    nomor_dihubungi: string;
    jadwal_kontrol: string;
    intruksi_lain_lain: string;
    ttd_pasien_wali: string;
    ttd_dpjp_bedah: string;
    nama_pasien_wali: string;
    nama_dpjp_bedah: string;
    nik: string;
  }
}

export class PdfPostOperativeInstructionRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string;
    'pasien.Tgl_Lahir': string;
    'pasien.Alamat': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    keluhan_rumah: string;
    tatalaksana_keluhan: string;
    mobilisasi: string;
    anjuran_1: string;
    anjuran_2: string;
    anjuran_3: string;
    anjuran_4: string;
    anjuran_5: string;
    anjuran_6: string;
    anjuran_7: string;
    anjuran_8: string;
    anjuran_8_1: string;
    anjuran_8_2: string;
    anjuran_8_3: string;
    anjuran_8_4: string;
    anjuran_lain: string;
    posisi_tidur_dll: string;
    pendamping_1: string;
    pendamping_2: string;
    pendamping_3: string;
    pendamping_keluarga: string;
    pendamping_lain_lain: string;
    nomor_dihubungi: string;
    jadwal_kontrol: string;
    intruksi_lain_lain: string;
    ttd_pasien_wali: string;
    ttd_dpjp_bedah: string;
    nama_pasien_wali: string;
    nama_dpjp_bedah: string;
    nik: string;
  }

  constructor(req: IPdfPostOperativeInstructionRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfPostOperativeInstructionRequest) {
    return new PdfPostOperativeInstructionRequest(json);
  }

  static createPdfRequest(value: any, appReq: IAppRequest) {
    const getPosisi = () => {
      const posisi = !!(value?.form?.Anjuran_Tidur_Telentang === 1 || value?.form?.Anjuran_Tidur_Telungkup === 1 || value?.form?.Anjuran_Tidur_Membungkuk === 1 || value?.form?.Anjuran_Tidur_Dll === 1)
      return posisi
    }
    return new PdfPostOperativeInstructionRequest({
      emr_id: appReq.emr_id,
      form_name: 'ok_instruksi-pasca-bedah',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: value?.nomor_mr ?? '',
        'pasien.Nama': value?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(value?.pasien?.Tgl_Lahir),
        'pasien.Alamat': value?.pasien?.Alamat ?? '',
        'pasien.Umur': this.normalizeAge(value?.umur_lengkap),
        'pasien.Jenis_Kelamin': value?.pasien?.Jenis_Kelamin ?? '',
        keluhan_rumah: value?.form?.Keluhan_Rumah ?? '',
        tatalaksana_keluhan: value?.form?.Terjadi_Rumah ?? '',
        mobilisasi: value?.form?.Mobilisasi ?? '',
        anjuran_1: PdfPostOperativeInstructionRequest.getCheckImage(value?.form?.Anjuran_Kendaraan === 1),
        anjuran_2: PdfPostOperativeInstructionRequest.getCheckImage(value?.form?.Anjuran_Alat_Berat === 1),
        anjuran_3: PdfPostOperativeInstructionRequest.getCheckImage(value?.form?.Anjuran_Alkohol === 1),
        anjuran_4: PdfPostOperativeInstructionRequest.getCheckImage(value?.form?.Anjuran_Ekstremitas === 1),
        anjuran_5: PdfPostOperativeInstructionRequest.getCheckImage(value?.form?.Anjuran_Obat === 1),
        anjuran_6: PdfPostOperativeInstructionRequest.getCheckImage(value?.form?.Anjuran_Lain === 1),
        anjuran_7: PdfPostOperativeInstructionRequest.getCheckImage(value?.form?.Anjuran_Terkena === 1),
        anjuran_8: PdfPostOperativeInstructionRequest.getCheckImage(getPosisi()),
        anjuran_8_1: PdfPostOperativeInstructionRequest.getCheckImage(value?.form?.Anjuran_Tidur_Telentang === 1),
        anjuran_8_2: PdfPostOperativeInstructionRequest.getCheckImage(value?.form?.Anjuran_Tidur_Telungkup === 1),
        anjuran_8_3: PdfPostOperativeInstructionRequest.getCheckImage(value?.form?.Anjuran_Tidur_Membungkuk === 1),
        anjuran_8_4: PdfPostOperativeInstructionRequest.getCheckImage(value?.form?.Anjuran_Tidur_Dll === 1),
        anjuran_lain: value?.form?.Anjuran_Lain_Teks ?? '',
        posisi_tidur_dll: value?.form?.Anjuran_Tidur_Lain_Teks ?? '',
        pendamping_1: PdfPostOperativeInstructionRequest.getCheckImage(value?.form?.Pendamping_Keluarga === 1),
        pendamping_2: PdfPostOperativeInstructionRequest.getCheckImage(value?.form?.Pendamping_Medis === 1),
        pendamping_3: PdfPostOperativeInstructionRequest.getCheckImage(value?.form?.Pendamping_Lain === 1),
        pendamping_keluarga: value?.form?.Pendamping_Keluarga_Teks ?? '',
        pendamping_lain_lain: value?.form?.Pendamping_Lain_Teks ?? '',
        nomor_dihubungi: value?.form?.Nomor_Dihubungi.toString() ?? '',
        jadwal_kontrol: DateTimeConverter.convertToNormalDate(value?.form?.Jadwal_Kontrol),
        intruksi_lain_lain: '',
        ttd_dpjp_bedah: value.form && value.form.TTD_DPJP && value.form.TTD_DPJP !== '' ? value.form.TTD_DPJP : 'https://bucket.rsmatasmec.com/blank.jpeg',
        ttd_pasien_wali: value.form && value.form.TTD_Pasien && value.form.TTD_Pasien !== '' ? value.form.TTD_Pasien : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_dpjp_bedah: value?.form?.Nama_DPJP ?? '',
        nama_pasien_wali: value?.pasien?.Nama ?? '',
        nik: value?.pasien?.NIK ?? '',
      },
    })
  }
}
