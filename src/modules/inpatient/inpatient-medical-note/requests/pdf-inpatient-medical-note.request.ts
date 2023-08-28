import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { InpatientMedicalNote } from '@modules/inpatient/inpatient-medical-note/models/inpatient-medical-note.model';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfInpatientMedicalNoteRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string | number,
    'pasien.Jenis_Kelamin': string,
    keluhan_utama: string,
    anamnesa: string,
    rpt: string,
    rpo: string,
    rpdk: string,
    riwayat_pekerjaan: string,
    zat_zat_berbahaya: string,
    riwayat_alergi: string,
    kesadaran: string,
    keadaan_umum: string,
    tekanan_darah: string,
    keadaan_gizi: string,
    nadi: string,
    oedem: string,
    suhu: string,
    ikterus: string,
    pernapasan: string,
    cyanosis: string,
    skala_nyeri: string,
    bb: string,
    tb: string,
    kepala: string,
    mata: string,
    tht: string,
    oedem_pu: string,
    mulut: string,
    leher: string,
    jantung: string,
    paru: string,
    dada_payudara: string,
    perut: string,
    urogenital: string,
    anggota_gerak: string,
    status_neurologis: string,
    muskuloskeletal: string,
    palpebra_superior: string,
    palpebra_inferior: string,
    tarsal_superior: string,
    tarsal_inferior: string,
    bulbi: string,
    cornea: string,
    coa: string,
    pupil: string,
    iris: string,
    vitreous: string,
    lensa: string,
    retina: string,
    pemeriksaan_penunjang: string,
    diagnosa: string,
    rencana_pengobatan: string,
    tanggal: string,
    jam: string,
    nama_dokter: string,

    zat_berbahaya_tidak: string,
    zat_berbahaya_ya: string,
    ttd_dokter?: string,

    kepala_normal: string,
    mata_normal: string,
    tht_normal: string,
    oedem_normal: string,
    mulut_normal: string,
    leher_normal: string,
    jantung_normal: string,
    paru_normal: string,
    dada_payudara_normal: string,
    perut_normal: string,
    urogenital_normal: string,
    anggota_gerak_normal: string,
    status_neurologis_normal: string,
    muskuloskeletal_normal: string,
    palpebra_superior_normal: string,
    palpebra_inferior_normal: string,
    tarsal_superior_normal: string,
    tarsal_inferior_normal: string,
    bulbi_normal: string,
    cornea_normal: string,
    coa_normal: string,
    pupil_normal: string,
    iris_normal: string,
    vitreous_normal: string,
    lensa_normal: string,
    retina_normal: string,

    kepala_tidak_normal: string,
    mata_tidak_normal: string,
    tht_tidak_normal: string,
    oedem_tidak_normal: string,
    mulut_tidak_normal: string,
    leher_tidak_normal: string,
    jantung_tidak_normal: string,
    paru_tidak_normal: string,
    dada_payudara_tidak_normal: string,
    perut_tidak_normal: string,
    urogenital_tidak_normal: string,
    anggota_gerak_tidak_normal: string,
    status_neurologis_tidak_normal: string,
    muskuloskeletal_tidak_normal: string,
    palpebra_superior_tidak_normal: string,
    palpebra_inferior_tidak_normal: string,
    tarsal_superior_tidak_normal: string,
    tarsal_inferior_tidak_normal: string,
    bulbi_tidak_normal: string,
    cornea_tidak_normal: string,
    coa_tidak_normal: string,
    pupil_tidak_normal: string,
    iris_tidak_normal: string,
    vitreous_tidak_normal: string,
    lensa_tidak_normal: string,
    retina_tidak_normal: string,
    nik: string,
  }
}

export class PdfInpatientMedicalNoteRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string | number,
    'pasien.Jenis_Kelamin': string,
    keluhan_utama: string,
    anamnesa: string,
    rpt: string,
    rpo: string,
    rpdk: string,
    riwayat_pekerjaan: string,
    zat_zat_berbahaya: string,
    riwayat_alergi: string,
    kesadaran: string,
    keadaan_umum: string,
    tekanan_darah: string,
    keadaan_gizi: string,
    nadi: string,
    oedem: string,
    suhu: string,
    ikterus: string,
    pernapasan: string,
    cyanosis: string,
    skala_nyeri: string,
    bb: string,
    tb: string,
    kepala: string,
    mata: string,
    tht: string,
    oedem_pu: string,
    mulut: string,
    leher: string,
    jantung: string,
    paru: string,
    dada_payudara: string,
    perut: string,
    urogenital: string,
    anggota_gerak: string,
    status_neurologis: string,
    muskuloskeletal: string,
    palpebra_superior: string,
    palpebra_inferior: string,
    tarsal_superior: string,
    tarsal_inferior: string,
    bulbi: string,
    cornea: string,
    coa: string,
    pupil: string,
    iris: string,
    vitreous: string,
    lensa: string,
    retina: string,
    pemeriksaan_penunjang: string,
    diagnosa: string,
    rencana_pengobatan: string,
    tanggal: string,
    jam: string,
    nama_dokter: string,

    zat_berbahaya_tidak: string,
    zat_berbahaya_ya: string,
    ttd_dokter?: string,

    kepala_normal: string,
    mata_normal: string,
    tht_normal: string,
    oedem_normal: string,
    mulut_normal: string,
    leher_normal: string,
    jantung_normal: string,
    paru_normal: string,
    dada_payudara_normal: string,
    perut_normal: string,
    urogenital_normal: string,
    anggota_gerak_normal: string,
    status_neurologis_normal: string,
    muskuloskeletal_normal: string,
    palpebra_superior_normal: string,
    palpebra_inferior_normal: string,
    tarsal_superior_normal: string,
    tarsal_inferior_normal: string,
    bulbi_normal: string,
    cornea_normal: string,
    coa_normal: string,
    pupil_normal: string,
    iris_normal: string,
    vitreous_normal: string,
    lensa_normal: string,
    retina_normal: string,

    kepala_tidak_normal: string,
    mata_tidak_normal: string,
    tht_tidak_normal: string,
    oedem_tidak_normal: string,
    mulut_tidak_normal: string,
    leher_tidak_normal: string,
    jantung_tidak_normal: string,
    paru_tidak_normal: string,
    dada_payudara_tidak_normal: string,
    perut_tidak_normal: string,
    urogenital_tidak_normal: string,
    anggota_gerak_tidak_normal: string,
    status_neurologis_tidak_normal: string,
    muskuloskeletal_tidak_normal: string,
    palpebra_superior_tidak_normal: string,
    palpebra_inferior_tidak_normal: string,
    tarsal_superior_tidak_normal: string,
    tarsal_inferior_tidak_normal: string,
    bulbi_tidak_normal: string,
    cornea_tidak_normal: string,
    coa_tidak_normal: string,
    pupil_tidak_normal: string,
    iris_tidak_normal: string,
    vitreous_tidak_normal: string,
    lensa_tidak_normal: string,
    retina_tidak_normal: string,
    nik: string,
  }

  constructor(req: IPdfInpatientMedicalNoteRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfInpatientMedicalNoteRequest) {
    return new PdfInpatientMedicalNoteRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): PdfInpatientMedicalNoteRequest {

    const formatDateIndo = (dateNow: any) => {
      if (dateNow !== "") {
        const d = new Date(dateNow);
        const dateFormat = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear().toString().padStart(4, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
        return dateFormat;
      } else {
        return '';
      }
    }

    const formatDate = (dateNow: any) => {
      const d = new Date(dateNow);
      const dateFormat = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear().toString().padStart(4, '0')}`
      return dateFormat;
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

    const formatAda = (value: any) => {
      if (value === "0") {
        return 'Tidak Ada';
      } else if (value === "1") {
        return 'Ada';
      } else {
        return '';
      }
    }

    const formatKeadaan = (value: any) => {
      if (value === "0") {
        return 'Baik';
      } else if (value === "1") {
        return 'Sedang';
      } else if (value === "2") {
        return 'Buruk';
      } else {
        return '';
      }
    }


    return new PdfInpatientMedicalNoteRequest({
      emr_id: emrId,
      form_name: 'rawat-inap_catatan-medis-awal',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': formatDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        keluhan_utama: val?.form?.Keluhan_Utama ?? '',
        anamnesa: val?.form?.Anamnesa ?? '',
        rpt: val?.form?.Riwayat_Penyakit_Terdahulu ?? '',
        rpo: val?.form?.Riwayat_Pemakaian_Obat ?? '',
        rpdk: val?.form?.Riwayat_Penyakit_Keluarga ?? '',
        riwayat_pekerjaan: val?.form?.Riwayat_Pekerjaan ?? '',
        zat_zat_berbahaya: val?.form?.Pekerjaan_Zat_Berbahaya_Keterangan ?? '',
        riwayat_alergi: val?.form?.Riwayat_Alergi ?? '',
        kesadaran: val?.form?.Kesadaran ?? '',
        keadaan_umum: formatKeadaan(val?.form?.Keadaan_Umum ?? ''),
        tekanan_darah: val?.form?.Tekanan_Darah ?? '',
        keadaan_gizi: formatKeadaan(val?.form?.Keadaan_Gizi ?? ''),
        nadi: val?.form?.Nadi ?? '',
        oedem: formatAda(val?.form?.Oedem ?? ''),
        suhu: val?.form?.Suhu ?? '',
        ikterus: formatAda(val?.form?.Ikterus ?? ''),
        pernapasan: val?.form?.Pernafasan ?? '',
        cyanosis: formatAda(val?.form?.Cyanosis ?? ''),
        skala_nyeri: val?.form?.Skala_Nyeri ?? '',
        bb: val?.form?.Berat_Badan ?? '',
        tb: val?.form?.Tinggi_Badan ?? '',
        kepala: val?.form?.Pengkajian_Kepala_Keterangan ?? '',
        mata: val?.form?.Pengkajian_Mata_Keterangan ?? '',
        tht: val?.form?.Pengkajian_Tht_Keterangan ?? '',
        oedem_pu: val?.form?.Pengkajian_Kepala_Keterangan ?? '',
        mulut: val?.form?.Pengkajian_Mulut_Keterangan ?? '',
        leher: val?.form?.Pengkajian_Leher_Keterangan ?? '',
        jantung: val?.form?.Pengkajian_Jantung_Keterangan ?? '',
        paru: val?.form?.Pengkajian_Paru_Keterangan ?? '',
        dada_payudara: val?.form?.Pengkajian_Dada_Keterangan ?? '',
        perut: val?.form?.Pengkajian_Perut_Keterangan ?? '',
        urogenital: val?.form?.Pengkajian_Urogenital_Keterangan ?? '',
        anggota_gerak: val?.form?.Pengkajian_Anggota_Gerak_Keterangan ?? '',
        status_neurologis: val?.form?.Pengkajian_Status_Neurologis_Keterangan ?? '',
        muskuloskeletal: val?.form?.Pengkajian_Muskulos_Keletal_Keterangan ?? '',
        palpebra_superior: val?.form?.Pengkajian_Palpebra_Superior_Keterangan ?? '',
        palpebra_inferior: val?.form?.Pengkajian_Palpebra_Inferior_Keterangan ?? '',
        tarsal_superior: val?.form?.Pengkajian_Conj_Tarsal_Superior_Keterangan ?? '',
        tarsal_inferior: val?.form?.Pengkajian_Conj_Tarsal_Inferior_Keterangan ?? '',
        bulbi: val?.form?.Pengkajian_Conj_Bulbi_Keterangan ?? '',
        cornea: val?.form?.Pengkajian_Cornea_Keterangan ?? '',
        coa: val?.form?.Pengkajian_Coa_Keterangan ?? '',
        pupil: val?.form?.Pengkajian_Pupil_Keterangan ?? '',
        iris: val?.form?.Pengkajian_Iris_Keterangan ?? '',
        vitreous: val?.form?.Pengkajian_Vitreous_Keterangan ?? '',
        lensa: val?.form?.Pengkajian_Lensa_Keterangan ?? '',
        retina: val?.form?.Pengkajian_Retina_Keterangan ?? '',
        pemeriksaan_penunjang: val?.form?.Pemeriksaan_Penunjang ?? '',
        diagnosa: val?.form?.Diagnosa ?? '',
        rencana_pengobatan: val?.form?.Rencana_Pengobatan ?? '',
        tanggal: formatDate(val?.form?.Tanggal ?? ''),
        jam: formatTime(val?.form?.Tanggal ?? ''),
        nama_dokter: val?.form?.Nama_Dokter ?? '',

        zat_berbahaya_tidak: this.getCheckImage(val?.form?.Pekerjaan_Zat_Berbahaya === '0'),
        zat_berbahaya_ya: this.getCheckImage(val?.form?.Pekerjaan_Zat_Berbahaya === '1'),
        ttd_dokter: (val?.form?.TTD_Dokter && val?.form?.TTD_Dokter !== '') ? val?.form?.TTD_Dokter : undefined,

        kepala_normal: this.getCheckImage(val?.form?.Pengkajian_Kepala === '0'),
        mata_normal: this.getCheckImage(val?.form?.Pengkajian_Mata === '0'),
        tht_normal: this.getCheckImage(val?.form?.Pengkajian_Tht === '0'),
        oedem_normal: this.getCheckImage(val?.form?.Pengkajian_Oedem === '0'),
        mulut_normal: this.getCheckImage(val?.form?.Pengkajian_Mulut === '0'),
        leher_normal: this.getCheckImage(val?.form?.Pengkajian_Leher === '0'),
        jantung_normal: this.getCheckImage(val?.form?.Pengkajian_Jantung === '0'),
        paru_normal: this.getCheckImage(val?.form?.Pengkajian_Paru === '0'),
        dada_payudara_normal: this.getCheckImage(val?.form?.Pengkajian_Dada === '0'),
        perut_normal: this.getCheckImage(val?.form?.Pengkajian_Perut === '0'),
        urogenital_normal: this.getCheckImage(val?.form?.Pengkajian_Urogenital === '0'),
        anggota_gerak_normal: this.getCheckImage(val?.form?.Pengkajian_Anggota_Gerak === '0'),
        status_neurologis_normal: this.getCheckImage(val?.form?.Pengkajian_Status_Neurologis === '0'),
        muskuloskeletal_normal: this.getCheckImage(val?.form?.Pengkajian_Muskulos_Keletal === '0'),
        palpebra_superior_normal: this.getCheckImage(val?.form?.Pengkajian_Palpebra_Superior === '0'),
        palpebra_inferior_normal: this.getCheckImage(val?.form?.Pengkajian_Palpebra_Inferior === '0'),
        tarsal_superior_normal: this.getCheckImage(val?.form?.Pengkajian_Conj_Tarsal_Superior === '0'),
        tarsal_inferior_normal: this.getCheckImage(val?.form?.Pengkajian_Conj_Tarsal_Inferior === '0'),
        bulbi_normal: this.getCheckImage(val?.form?.Pengkajian_Conj_Bulbi === '0'),
        cornea_normal: this.getCheckImage(val?.form?.Pengkajian_Cornea === '0'),
        coa_normal: this.getCheckImage(val?.form?.Pengkajian_Coa === '0'),
        pupil_normal: this.getCheckImage(val?.form?.Pengkajian_Pupil === '0'),
        iris_normal: this.getCheckImage(val?.form?.Pengkajian_Vitreous === '0'),
        vitreous_normal: this.getCheckImage(val?.form?.Pengkajian_Vitreous === '0'),
        lensa_normal: this.getCheckImage(val?.form?.Pengkajian_Lensa === '0'),
        retina_normal: this.getCheckImage(val?.form?.Pengkajian_Retina === '0'),

        kepala_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Kepala === '1'),
        mata_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Mata === '1'),
        tht_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Tht === '1'),
        oedem_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Oedem === '1'),
        mulut_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Mulut === '1'),
        leher_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Leher === '1'),
        jantung_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Jantung === '1'),
        paru_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Paru === '1'),
        dada_payudara_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Dada === '1'),
        perut_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Perut === '1'),
        urogenital_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Urogenital === '1'),
        anggota_gerak_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Anggota_Gerak === '1'),
        status_neurologis_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Status_Neurologis === '1'),
        muskuloskeletal_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Muskulos_Keletal === '1'),
        palpebra_superior_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Palpebra_Superior === '1'),
        palpebra_inferior_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Palpebra_Inferior === '1'),
        tarsal_superior_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Conj_Tarsal_Superior === '1'),
        tarsal_inferior_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Conj_Tarsal_Inferior === '1'),
        bulbi_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Conj_Bulbi === '1'),
        cornea_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Cornea === '1'),
        coa_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Coa === '1'),
        pupil_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Pupil === '1'),
        iris_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Vitreous === '1'),
        vitreous_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Vitreous === '1'),
        lensa_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Lensa === '1'),
        retina_tidak_normal: this.getCheckImage(val?.form?.Pengkajian_Retina === '1'),
        nik: val?.pasien?.NIK ?? '',
      },
    })
  }
}
