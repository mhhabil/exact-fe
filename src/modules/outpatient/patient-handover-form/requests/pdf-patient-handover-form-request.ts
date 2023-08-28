import { CreatePDFRequest, ICreatePDFRequest } from "@src/shared/pdf/requests/create-pdf.request";
import nilai from "../const/nilai";
import { DateTimeConverter } from "@src/shared/datetime-converter";

export interface IPdfPatientHandoverFormRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string,
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    penanggung_jawab_1: string,
    penanggung_jawab_2: string,
    penanggung_jawab_3: string,
    penanggung_jawab_4: string,
    penanggung_jawab_5: string,
    penanggung_jawab_lain: string,
    kesadaran_1: string,
    kesadaran_2: string,
    kesadaran_3: string,
    kesadaran_4: string,
    luka_operasi_1: string,
    luka_operasi_2: string,
    luka_lain_1: string,
    luka_lain_2: string,
    vital_td: string,
    vital_n: string,
    vital_rr: string,
    vital_t: string,
    dewasa_aktivitas: string,
    dewasa_sirkulasi: string,
    dewasa_pernafasan: string,
    dewasa_kesadaran: string,
    dewasa_kulit: string,
    dewasa_total: string,
    anak_kesadaran: string,
    anak_pernafasan: string,
    anak_motorik: string,
    anak_total: string,
    terapi_sakit: string,
    terapi_mual: string,
    terapi_antibiotik: string,
    terapi_tetes: string,
    terapi_obat: string,
    terapi_infus: string,
    terapi_minum: string,
    terapi_lain: string,
    terapi_monitoring: string,
    selama_monitoring: string,
    pa_1: string,
    pa_2: string,
    waktu_verifikasi: string,
    nama_perawat_penerima: string,
    nama_perawat_penyerahkan: string,
    ttd_perawat_penerima: string,
    ttd_perawat_penyerahkan: string,
    nik: string,
  }
}

export class PdfPatientHandoverFormRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string,
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    penanggung_jawab_1: string,
    penanggung_jawab_2: string,
    penanggung_jawab_3: string,
    penanggung_jawab_4: string,
    penanggung_jawab_5: string,
    penanggung_jawab_lain: string,
    kesadaran_1: string,
    kesadaran_2: string,
    kesadaran_3: string,
    kesadaran_4: string,
    luka_operasi_1: string,
    luka_operasi_2: string,
    luka_lain_1: string,
    luka_lain_2: string,
    vital_td: string,
    vital_n: string,
    vital_rr: string,
    vital_t: string,
    dewasa_aktivitas: string,
    dewasa_sirkulasi: string,
    dewasa_pernafasan: string,
    dewasa_kesadaran: string,
    dewasa_kulit: string,
    dewasa_total: string,
    anak_kesadaran: string,
    anak_pernafasan: string,
    anak_motorik: string,
    anak_total: string,
    terapi_sakit: string,
    terapi_mual: string,
    terapi_antibiotik: string,
    terapi_tetes: string,
    terapi_obat: string,
    terapi_infus: string,
    terapi_minum: string,
    terapi_lain: string,
    terapi_monitoring: string,
    selama_monitoring: string,
    pa_1: string,
    pa_2: string,
    waktu_verifikasi: string,
    nama_perawat_penerima: string,
    nama_perawat_penyerahkan: string,
    ttd_perawat_penerima: string,
    ttd_perawat_penyerahkan: string,
    nik: string,
  }

  constructor(req:  IPdfPatientHandoverFormRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfPatientHandoverFormRequest) {
    return new PdfPatientHandoverFormRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): PdfPatientHandoverFormRequest {
    const getNameScore = (value: any) => {
      const selected = nilai.find((item: any) => item.value === value);
      if (selected) {
        return selected.name;
      } else {
        return ''
      }
    }
    return new PdfPatientHandoverFormRequest({
      emr_id: emrId,
      form_name: 'rawat-jalan_serah-terima-pasien',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        // 'pasien.Tgl_Lahir': val?.pasien?.Tgl_Lahir ?? '',
        "pasien.Tgl_Lahir": DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        penanggung_jawab_1: PdfPatientHandoverFormRequest.getCheckImage(val?.form?.Penanggungjawab === '1'),
        penanggung_jawab_2: PdfPatientHandoverFormRequest.getCheckImage(val?.form?.Penanggungjawab === '2'),
        penanggung_jawab_3: PdfPatientHandoverFormRequest.getCheckImage(val?.form?.Penanggungjawab === '3'),
        penanggung_jawab_4: PdfPatientHandoverFormRequest.getCheckImage(val?.form?.Penanggungjawab === '4'),
        penanggung_jawab_5: PdfPatientHandoverFormRequest.getCheckImage(val?.form?.Penanggungjawab === '5'),
        penanggung_jawab_lain: val?.form?.Penanggungjawab_Lain ?? '',
        kesadaran_1: PdfPatientHandoverFormRequest.getCheckImage(val?.form?.Kesadaran === '1'),
        kesadaran_2: PdfPatientHandoverFormRequest.getCheckImage(val?.form?.Kesadaran === '2'),
        kesadaran_3: PdfPatientHandoverFormRequest.getCheckImage(val?.form?.Kesadaran === '3'),
        kesadaran_4: PdfPatientHandoverFormRequest.getCheckImage(val?.form?.Kesadaran === '4'),
        luka_operasi_1: PdfPatientHandoverFormRequest.getCheckImage(val?.form?.Luka_Operasi === '1'),
        luka_operasi_2: PdfPatientHandoverFormRequest.getCheckImage(val?.form?.Luka_Operasi === '2'),
        luka_lain_1: PdfPatientHandoverFormRequest.getCheckImage(val?.form?.Luka_Lain === '1'),
        luka_lain_2: PdfPatientHandoverFormRequest.getCheckImage(val?.form?.Luka_Lain === '2'),
        vital_td: val?.form?.Td ?? '',
        vital_n: val?.form?.N ?? '',
        vital_rr: val?.form?.Rr ?? '',
        vital_t: val?.form?.T ?? '',
        dewasa_aktivitas: getNameScore(val?.form?.Alderette_Aktivitas),
        dewasa_sirkulasi: getNameScore(val?.form?.Alderette_Sirkulasi),
        dewasa_pernafasan: getNameScore(val?.form?.Alderette_Pernafasan),
        dewasa_kesadaran: getNameScore(val?.form?.Alderette_Kesadaran),
        dewasa_kulit: getNameScore(val?.form?.Alderette_Warna_Kulit),
        dewasa_total: val?.form?.Alderette_Score ?? '',
        anak_kesadaran: getNameScore(val?.form?.Steward_Kesadaran),
        anak_pernafasan: getNameScore(val?.form?.Steward_Pernafasan),
        anak_motorik: getNameScore(val?.form?.Steward_Motorik),
        anak_total: val?.form?.Steward_Score ?? '',
        terapi_sakit: val?.form?.Kesakitan ?? '',
        terapi_mual:  val?.form?.Mual ?? '',
        terapi_antibiotik: val?.form?.Antibiotik ?? '',
        terapi_tetes: val?.form?.Tetes_Mata ?? '',
        terapi_obat: val?.form?.Obat_Lain ?? '',
        terapi_infus: val?.form?.Infus ?? '',
        terapi_minum: val?.form?.Minum ?? '',
        terapi_lain: val?.form?.Lain_lain ?? '',
        terapi_monitoring: val?.form?.Monitoring_Setiap ?? '',
        selama_monitoring: val?.form?.Monitoring_Selama ?? '',
        pa_1: PdfPatientHandoverFormRequest.getCheckImage(val?.form?.Pa === '1'),
        pa_2: PdfPatientHandoverFormRequest.getCheckImage(val?.form?.Pa === '2'),
        waktu_verifikasi: DateTimeConverter.convertToDateTime(val?.form?.Waktu_Verifikasi),
        nama_perawat_penerima: (val?.form?.Nama_Perawat_Ranap_Rajal !== '') ? val?.form?.Nama_Perawat_Ranap_Rajal : undefined,
        nama_perawat_penyerahkan: (val?.form?.Nama_Perawat_Kamar_Bedah !== '') ? val?.form?.Nama_Perawat_Kamar_Bedah : undefined,
        ttd_perawat_penerima: (val?.form?.TTD_Perawat_Ranap_Rajal !== '') ? val?.form?.TTD_Perawat_Ranap_Rajal : undefined,
        ttd_perawat_penyerahkan: (val?.form?.TTD_Perawat_Kamar_Bedah !== '') ? val?.form?.TTD_Perawat_Kamar_Bedah : undefined,
        nik: val?.pasien?.NIK ?? '',
      },
    })
  }
}