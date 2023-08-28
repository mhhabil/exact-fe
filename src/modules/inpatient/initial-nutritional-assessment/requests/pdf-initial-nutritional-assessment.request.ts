import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { InitialNutritionalAssessment } from '@modules/inpatient/initial-nutritional-assessment/models/initial-nutritional-assessment.model';
import dietawal from '../const/dietawal';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfInitialNutritionalAssessmentRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string | number,
    'pasien.Jenis_Kelamin': string,
    date: string,
    time: string,
    diagnosa_masuk: string,
    diet_awal: string,
    bb_anak: string,
    tb_anak: string,
    bb_0_12_anak: string,
    bb_1_13_anak: string,
    bb_ideal_anak: string,
    z_score: string,
    bb_dewasa: string,
    tb_dewasa: string,
    bb_ideal_dewasa: string,
    imt: string,
    status_gizi: string,
    status_gizi_buruk: string,
    status_gizi_kurang: string,
    status_gizi_baik: string,
    status_gizi_lebih: string,
    status_gizi_obesitas: string,
    gangguan_gastro: string,
    gangguan_gastro_ada: any,
    gangguan_gastro_ada_mual?: string,
    gangguan_gastro_ada_muntah?: string,
    gangguan_gastro_ada_diare?: string,
    gangguan_gastro_ada_konstipasi?: string,
    gangguan_gastro_ada_anoreksia?: string,
    perubahan_asupan_tidak_ada : string,
    perubahan_asupan_ada : string,
    perubahan_asupan_1 : string,
    perubahan_asupan_2 : string,
    keterangan_gizi : string,
    faktor_resiko_tidak_ada: string,
    faktor_resiko_ada: string,
    resiko_diabetes: string,
    resiko_hipertensi: string,
    resiko_luka_bakar: string,
    resiko_kanker: string,
    resiko_dislipidemia: string,
    resiko_gangguan_ginjal: string,
    resiko_gangguan_lain: string,
    resiko_gangguan_lain_teks: string,
    resiko_gangguan_jantung: string,
    resiko_stroke: string,
    resiko_gastritis: string,
    resiko_thyphoid: string,
    resiko_lainnya: string,
    resiko_lainnya_teks: string,
    diagnosa_gizi: string,
    intervensi: string,
    monitoring: string,
    evaluasi: string,
    nama_petugas_gizi: string,
    id_petugas_gizi: string,
    ttd_petugas_gizi: string,
    nik: string,
  }
}

export class PdfInitialNutritionalAssessmentRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string | number,
    'pasien.Jenis_Kelamin': string,
    date: string,
    time: string,
    diagnosa_masuk: string,
    diet_awal: string,
    bb_anak: string,
    tb_anak: string,
    bb_0_12_anak: string,
    bb_1_13_anak: string,
    bb_ideal_anak: string,
    z_score: string,
    bb_dewasa: string,
    tb_dewasa: string,
    bb_ideal_dewasa: string,
    imt: string,
    status_gizi: string,
    status_gizi_buruk: string,
    status_gizi_kurang: string,
    status_gizi_baik: string,
    status_gizi_lebih: string,
    status_gizi_obesitas: string,
    gangguan_gastro: string,
    gangguan_gastro_ada: any,
    gangguan_gastro_ada_mual?: string,
    gangguan_gastro_ada_muntah?: string,
    gangguan_gastro_ada_diare?: string,
    gangguan_gastro_ada_konstipasi?: string,
    gangguan_gastro_ada_anoreksia?: string,
    perubahan_asupan_tidak_ada : string,
    perubahan_asupan_ada : string,
    perubahan_asupan_1 : string,
    perubahan_asupan_2 : string,
    keterangan_gizi : string,
    faktor_resiko_tidak_ada: string,
    faktor_resiko_ada: string,
    resiko_diabetes: string,
    resiko_hipertensi: string,
    resiko_luka_bakar: string,
    resiko_kanker: string,
    resiko_dislipidemia: string,
    resiko_gangguan_ginjal: string,
    resiko_gangguan_lain: string,
    resiko_gangguan_lain_teks: string,
    resiko_gangguan_jantung: string,
    resiko_stroke: string,
    resiko_gastritis: string,
    resiko_thyphoid: string,
    resiko_lainnya: string,
    resiko_lainnya_teks: string,
    diagnosa_gizi: string,
    intervensi: string,
    monitoring: string,
    evaluasi: string,
    nama_petugas_gizi: string,
    id_petugas_gizi: string,
    ttd_petugas_gizi: string,
    nik: string,
  }

  constructor(req: IPdfInitialNutritionalAssessmentRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfInitialNutritionalAssessmentRequest) {
    return new PdfInitialNutritionalAssessmentRequest(json);
  }

  static createPdfRequest(val: InitialNutritionalAssessment, emrId: string): PdfInitialNutritionalAssessmentRequest {

    const getDietAwal = (codes: string) => {
      const selected = dietawal.find((item: any) => item.value === codes);
      if (selected) {
        return selected.name;
      } else {
        return '';
      }
    } 

    const formatTime = (dateNow: any) => {
      if (dateNow !== "") {
        const d = new Date(dateNow);
        const dateFormat = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
        return dateFormat;
      } else {
        return '';
      }
    }

    const formatDate = (dateNow: any) => {
      if (dateNow !== "") {
        const d = new Date(dateNow);
        const dateFormat = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear().toString().padStart(4, '0')}`
        return dateFormat;
      } else {
        return '';
      }
    }

    const formatDateIndo = (dateNow: any) => {
      if (dateNow !== "") {
        const d = new Date(dateNow);
        const dateFormat = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear().toString().padStart(4, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
        return dateFormat;
      } else {
        return '';
      }
    }


    return new PdfInitialNutritionalAssessmentRequest({
      emr_id: emrId,
      form_name: 'rawat-inap_pengkajian-awal-gizi',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': val?.pasien?.Umur ?? '',
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',

        date: formatDate(val?.form?.Tanggal ?? ''),
        time: formatTime(val?.form?.Tanggal ?? ''),
        diagnosa_masuk: val?.form?.Diagnosa_Masuk ?? '',
        diet_awal: getDietAwal(val?.form?.Diet_Awal ?? ''),
        bb_anak: val?.form?.Bb_Anak ?? '',
        tb_anak: val?.form?.Tb_Anak ?? '',
        bb_0_12_anak: val?.form?.Bb_0_12_Anak ?? '',
        bb_1_13_anak: val?.form?.Bb_1_13_Anak ?? '',
        bb_ideal_anak: val?.form?.Bb_Ideal_Anak ?? '',
        z_score: val?.form?.Z_Score ?? '',
        bb_dewasa: val?.form?.Bb_Dewasa ?? '',
        tb_dewasa: val?.form?.Tb_Dewasa ?? '',
        bb_ideal_dewasa: val?.form?.Bb_Ideal_Dewasa ?? '',
        imt: val?.form?.IMT ?? '',
        status_gizi: val?.form?.Status_Gizi ?? '',
        status_gizi_buruk: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Status_Gizi === '1'),
        status_gizi_kurang: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Status_Gizi === '2'),
        status_gizi_baik: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Status_Gizi === '3'),
        status_gizi_lebih: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Status_Gizi === '4'),
        status_gizi_obesitas: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Status_Gizi === '5'),
        gangguan_gastro: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Gangguan_Gastro === '0'),
        gangguan_gastro_ada: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Gangguan_Gastro === '1'),
        gangguan_gastro_ada_mual: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Gangguan_Gastro_Ada?.mual  === '1'),
        gangguan_gastro_ada_muntah: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Gangguan_Gastro_Ada?.muntah  === '1'),
        gangguan_gastro_ada_diare: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Gangguan_Gastro_Ada?.diare  === '1'),
        gangguan_gastro_ada_konstipasi: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Gangguan_Gastro_Ada?.konstipasi  === '1'),
        gangguan_gastro_ada_anoreksia: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Gangguan_Gastro_Ada?.anoreksia  === '1'),
        perubahan_asupan_tidak_ada : PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Perubahan_Asupan  !== '1'),
        perubahan_asupan_ada : PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Perubahan_Asupan_Ada  === '1'),
        perubahan_asupan_1 : PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Perubahan_Asupan  === '1'),
        perubahan_asupan_2 : PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Perubahan_Asupan  === '2'),
        keterangan_gizi :  val?.form?.Keterangan_Gizi ?? '',
        faktor_resiko_tidak_ada: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Faktor_Resiko  !== '1'),
        faktor_resiko_ada: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Faktor_Resiko === '1'),
        resiko_diabetes: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Resiko_Diabetes === '1'),
        resiko_hipertensi: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Resiko_Hipertensi === '1'),
        resiko_luka_bakar: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Resiko_Luka_Bakar === '1'),
        resiko_kanker: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Resiko_Kanker === '1'),
        resiko_dislipidemia: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Resiko_Dislipidemia === '1'),
        resiko_gangguan_ginjal: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Resiko_Gangguan_Ginjal === '1'),
        resiko_gangguan_lain: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Resiko_Gangguan_Lain === '1'),
        resiko_gangguan_lain_teks: val?.form?.Resiko_Gangguan_Lain_Teks ?? '',
        resiko_gangguan_jantung: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Resiko_Gangguan_Jantung === '1'),
        resiko_stroke: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Resiko_Stroke === '1'),
        resiko_gastritis: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Resiko_Gastritis === '1'),
        resiko_thyphoid: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Resiko_Thyphoid === '1'),
        resiko_lainnya: PdfInitialNutritionalAssessmentRequest.getCheckImage(val?.form?.Resiko_Lainnya === '1'),
        resiko_lainnya_teks: val?.form?.Resiko_Lainnya_Teks ?? '',
        diagnosa_gizi: val?.form?.Diagnosa_Gizi ?? '',
        intervensi: val?.form?.Intervensi ?? '',
        monitoring: val?.form?.Monitoring ?? '',
        evaluasi: val?.form?.Evaluasi ?? '',
        nama_petugas_gizi: val?.form?.Nama_Petugas_Gizi ?? '',
        id_petugas_gizi: val?.form?.ID_Petugas_Gizi ?? '',
        ttd_petugas_gizi: val?.form?.TTD_Petugas_Gizi ?? '',
        nik: val?.pasien?.NIK ?? '',

      },
    })
  }
}
