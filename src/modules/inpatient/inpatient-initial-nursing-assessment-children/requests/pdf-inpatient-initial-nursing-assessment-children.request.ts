import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { InpatientInitialNursingAssessmentChildren } from '@modules/inpatient/inpatient-initial-nursing-assessment-children/models/inpatient-initial-nursing-assessment-chiildren.model';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfInpatientInitialNursingAssessmentChildrenRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string | number,
    'pasien.Jenis_Kelamin': string,

    tgl: string;
    jam: string;
    Nama_wali: string;
    hubungan_wali: string;
    Keluhan_utama: string;
    riwayat_penyakit_skrg: string;
    riwayat_penyakit_terdahulu: string;
    riwayat_pengobatan: string;
    jenis_riw_op: string;
    lama_kehamilan: string;
    ket_komplikasi_ya: string;
    ket_neonatus_ya: string;
    ket_maternal_ya: string;
    imunisasi1_lainya: string;
    imunisasi2_lainya: string;
    bb_lahir: string;
    pb_lahir: string;
    asi: string;
    makan: string;
    berjalan: string;
    tengkurap: string;
    duduk: string;
    merangkak: string;
    berdiri: string;
    pf_td: string;
    pf_suhu: string;
    pf_p: string;
    pf_nadi: string;
    pf_bb: string;
    pf_tb: string;
    alergi: string;
    ketgori_nilai_gizi: string;
    Total: string;
    tdr_malam: string;
    tdr_siang: string;
    mkn_1: string;
    mkn_2: string;
    mkn_3: string;
    mkn_4: string;
    mkn_5: string;
    mkn_6: string;
    mandi_1: string;
    mandi_2: string;
    mandi_3: string;
    mandi_4: string;
    mandi_5: string;
    mandi_6: string;
    rawat_1: string;
    rawat_2: string;
    rawat_3: string;
    rawat_4: string;
    rawat_5: string;
    rawat_6: string;
    pakaian_1: string;
    pakaian_2: string;
    pakaian_3: string;
    pakaian_4: string;
    pakaian_5: string;
    pakaian_6: string;
    bak_1: string;
    bak_2: string;
    bak_3: string;
    bak_4: string;
    bak_5: string;
    bak_6: string;
    bab_1: string;
    bab_2: string;
    bab_3: string;
    bab_4: string;
    bab_5: string;
    bab_6: string;
    toilet_1: string;
    toilet_2: string;
    toilet_3: string;
    toilet_4: string;
    toilet_5: string;
    toilet_6: string;
    tf_1: string;
    tf_2: string;
    tf_3: string;
    tf_4: string;
    tf_5: string;
    tf_6: string;
    mobilitas_1: string;
    mobilitas_2: string;
    mobilitas_3: string;
    mobilitas_4: string;
    mobilitas_5: string;
    mobilitas_6: string;
    tangga_1: string;
    tangga_2: string;
    tangga_3: string;
    tangga_4: string;
    tangga_5: string;
    tangga_6: string;
    total_1: string;
    total_2: string;
    total_3: string;
    total_4: string;
    total_5: string;
    total_6: string;
    "gangguan bicara": string;
    bahasa_penterjemah: string;
    hambatan_belajar: string;
    pendidikan: string;
    masalah_prilaku: string;
    prilaku_kekerasan: string;
    agama: string;
    keyakinan: string;
    nilai_nilai: string;
    spiritual: string;
    selama_keperawatan: string;
    masalah_keperawatan: string;
    rencana_keperawatan: string;
    date: string;
    time: string;
    "form.Nama_Perawat_pengkaji": string;
    total_gizi: string;
    penyebab: string;
    kualitas: string;
    lokasi: string;
    skala: string;
    durasi: string;
    total: string;

    pasien: string;
    wali: string;
    op_tidak: string;
    op_ya: string;
    hipertensi: string;
    asma: string;
    db: string;
    hepatitis: string;
    glaukoma: string;
    stroke: string;
    riwayat_penyakit_keluarga: string;
    komplikasi_tidak: string;
    komplikasi_ya: string;
    neonatus_tidak: string;
    neonatus_ya: string;
    maternal_tidak: string;
    maternal_ya: string;
    BCG: string;
    HepatitisBI: string;
    DPTI: string;
    Campak: string;
    Lainya_imunisasi1: string;
    PolioI: string;
    HepatitisBII: string;
    DPTII: string;
    MMR: string;
    PolioII: string;
    HepatitisBIII: string;
    DPTIII: string;
    Lainya_imunisasi2: string;
    PolioIII: string;
    Varicela: string;
    Typhus: string;
    Influenza: string;
    asesmen1_ya: string;
    asesmen2_ya: string;
    asesmen3_ya: string;
    asesmen4_ya: string;
    asesmen5_ya: string;
    asesmen6_ya: string;
    asesmen7_ya: string;
    asesmen8_ya: string;
    asesmen9_ya: string;
    asesmen10_ya: string;
    asesmen11_ya: string;
    asesmen12_ya: string;
    asesmen1_tidak: string;
    asesmen2_tidak: string;
    asesmen3_tidak: string;
    asesmen4_tidak: string;
    asesmen5_tidak: string;
    asesmen6_tidak: string;
    asesmen7_tidak: string;
    asesmen8_tidak: string;
    asesmen9_tidak: string;
    asesmen10_tidak: string;
    asesmen11_tidak: string;
    asesmen12_tidak: string;
    alergi_tidak: string;
    alergi_tidak_diketahui: string;
    alergi_ya: string;
    nyeri_ya: string;
    nyeri_tidak: string;
    flacc: string;
    wb: string;
    wajah0: string;
    wajah1: string;
    wajah2: string;
    kaki0: string;
    kaki1: string;
    kaki2: string;
    aktivitas0: string;
    aktivitas1: string;
    aktivitas2: string;
    menangis0: string;
    menangis1: string;
    menangis2: string;
    kenyamanan0: string;
    kenyamanan1: string;
    kenyamanan2: string;
    skala1: string;
    skala2: string;
    skala3: string;
    skala4: string;
    skala5: string;
    skala6: string;
    skala7: string;
    skala8: string;
    skala9: string;
    skala10: string;
    nutrisi1_ya: string;
    nutrisi2_ya: string;
    nutrisi3_ya: string;
    nutrisi4_ya: string;
    nutrisi1_tidak: string;
    nutrisi2_tidak: string;
    nutrisi3_tidak: string;
    nutrisi4_tidak: string;
    keterbatasan_tidak: string;
    keterbatasan_ya: string;
    Nyeri_Otot: string;
    Kaku_Otot: string;
    Lemah_Otot: string;
    Nyeri_Sendi: string;
    Bengkak_Sendi: string;
    Inkoordinasi: string;
    Kelemahan: string;
    Amputasi: string;
    Deformitas: string;
    Parese: string;
    kesulitantdr_ya: string;
    kesulitantdr_tidak: string;
    jatuh_tidak_resiko: string;
    jatuh_resiko_rendah: string;
    jatuh_resiko_tinggi: string;
    bicara_normal: string;
    bicara_gangguan: string;
    penterjemah_tidak: string;
    penterjemah_ya: string;
    isyarat_tidak: string;
    isyarat_ya: string;
    hambatan_tidak: string;
    hambatan_ya: string;
    tk: string;
    sd: string;
    smp: string;
    sma: string;
    akademi: string;
    sarjana: string;
    pendidikan_lain: string;
    status_sosial1: string;
    status_sosial2: string;
    status_sosial3: string;
    status_sosial4: string;
    status_psikologis1: string;
    status_psikologis2: string;
    status_psikologis3: string;
    status_psikologis4: string;
    status_psikologis5: string;
    status_mental1: string;
    status_mental2: string;
    status_mental3: string;
    sosial_baik: string;
    sosial_tidak_baik: string;
    gangguang_pengelihatan: string;
    penurunan_kesadaran: string;
    nyeri: string;
    infeksi: string;
    intake: string;
    resiko_jatuh: string;
    Hiperthermia: string;
    tio: string;
    kurang_pengetahuan: string;
    cm: string;
    apatis: string;
    somnolent: string;
    soporocoma: string;
    koma: string;

    Tanda_Tangan_Perawat_pengkaji: string;
    nik: string,
  }
}

export class PdfInpatientInitialNursingAssessmentChildrenRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string | number,
    'pasien.Jenis_Kelamin': string,

    tgl: string;
    jam: string;
    Nama_wali: string;
    hubungan_wali: string;
    Keluhan_utama: string;
    riwayat_penyakit_skrg: string;
    riwayat_penyakit_terdahulu: string;
    riwayat_pengobatan: string;
    jenis_riw_op: string;
    lama_kehamilan: string;
    ket_komplikasi_ya: string;
    ket_neonatus_ya: string;
    ket_maternal_ya: string;
    imunisasi1_lainya: string;
    imunisasi2_lainya: string;
    bb_lahir: string;
    pb_lahir: string;
    asi: string;
    makan: string;
    berjalan: string;
    tengkurap: string;
    duduk: string;
    merangkak: string;
    berdiri: string;
    pf_td: string;
    pf_suhu: string;
    pf_p: string;
    pf_nadi: string;
    pf_bb: string;
    pf_tb: string;
    alergi: string;
    ketgori_nilai_gizi: string;
    Total: string;
    tdr_malam: string;
    tdr_siang: string;
    mkn_1: string;
    mkn_2: string;
    mkn_3: string;
    mkn_4: string;
    mkn_5: string;
    mkn_6: string;
    mandi_1: string;
    mandi_2: string;
    mandi_3: string;
    mandi_4: string;
    mandi_5: string;
    mandi_6: string;
    rawat_1: string;
    rawat_2: string;
    rawat_3: string;
    rawat_4: string;
    rawat_5: string;
    rawat_6: string;
    pakaian_1: string;
    pakaian_2: string;
    pakaian_3: string;
    pakaian_4: string;
    pakaian_5: string;
    pakaian_6: string;
    bak_1: string;
    bak_2: string;
    bak_3: string;
    bak_4: string;
    bak_5: string;
    bak_6: string;
    bab_1: string;
    bab_2: string;
    bab_3: string;
    bab_4: string;
    bab_5: string;
    bab_6: string;
    toilet_1: string;
    toilet_2: string;
    toilet_3: string;
    toilet_4: string;
    toilet_5: string;
    toilet_6: string;
    tf_1: string;
    tf_2: string;
    tf_3: string;
    tf_4: string;
    tf_5: string;
    tf_6: string;
    mobilitas_1: string;
    mobilitas_2: string;
    mobilitas_3: string;
    mobilitas_4: string;
    mobilitas_5: string;
    mobilitas_6: string;
    tangga_1: string;
    tangga_2: string;
    tangga_3: string;
    tangga_4: string;
    tangga_5: string;
    tangga_6: string;
    total_1: string;
    total_2: string;
    total_3: string;
    total_4: string;
    total_5: string;
    total_6: string;
    "gangguan bicara": string;
    bahasa_penterjemah: string;
    hambatan_belajar: string;
    pendidikan: string;
    masalah_prilaku: string;
    prilaku_kekerasan: string;
    agama: string;
    keyakinan: string;
    nilai_nilai: string;
    spiritual: string;
    selama_keperawatan: string;
    masalah_keperawatan: string;
    rencana_keperawatan: string;
    date: string;
    time: string;
    "form.Nama_Perawat_pengkaji": string;
    total_gizi: string;
    penyebab: string;
    kualitas: string;
    lokasi: string;
    skala: string;
    durasi: string;
    total: string;

    pasien: string;
    wali: string;
    op_tidak: string;
    op_ya: string;
    hipertensi: string;
    asma: string;
    db: string;
    hepatitis: string;
    glaukoma: string;
    stroke: string;
    riwayat_penyakit_keluarga: string;
    komplikasi_tidak: string;
    komplikasi_ya: string;
    neonatus_tidak: string;
    neonatus_ya: string;
    maternal_tidak: string;
    maternal_ya: string;
    BCG: string;
    HepatitisBI: string;
    DPTI: string;
    Campak: string;
    Lainya_imunisasi1: string;
    PolioI: string;
    HepatitisBII: string;
    DPTII: string;
    MMR: string;
    PolioII: string;
    HepatitisBIII: string;
    DPTIII: string;
    Lainya_imunisasi2: string;
    PolioIII: string;
    Varicela: string;
    Typhus: string;
    Influenza: string;
    asesmen1_ya: string;
    asesmen2_ya: string;
    asesmen3_ya: string;
    asesmen4_ya: string;
    asesmen5_ya: string;
    asesmen6_ya: string;
    asesmen7_ya: string;
    asesmen8_ya: string;
    asesmen9_ya: string;
    asesmen10_ya: string;
    asesmen11_ya: string;
    asesmen12_ya: string;
    asesmen1_tidak: string;
    asesmen2_tidak: string;
    asesmen3_tidak: string;
    asesmen4_tidak: string;
    asesmen5_tidak: string;
    asesmen6_tidak: string;
    asesmen7_tidak: string;
    asesmen8_tidak: string;
    asesmen9_tidak: string;
    asesmen10_tidak: string;
    asesmen11_tidak: string;
    asesmen12_tidak: string;
    alergi_tidak: string;
    alergi_tidak_diketahui: string;
    alergi_ya: string;
    nyeri_ya: string;
    nyeri_tidak: string;
    flacc: string;
    wb: string;
    wajah0: string;
    wajah1: string;
    wajah2: string;
    kaki0: string;
    kaki1: string;
    kaki2: string;
    aktivitas0: string;
    aktivitas1: string;
    aktivitas2: string;
    menangis0: string;
    menangis1: string;
    menangis2: string;
    kenyamanan0: string;
    kenyamanan1: string;
    kenyamanan2: string;
    skala1: string;
    skala2: string;
    skala3: string;
    skala4: string;
    skala5: string;
    skala6: string;
    skala7: string;
    skala8: string;
    skala9: string;
    skala10: string;
    nutrisi1_ya: string;
    nutrisi2_ya: string;
    nutrisi3_ya: string;
    nutrisi4_ya: string;
    nutrisi1_tidak: string;
    nutrisi2_tidak: string;
    nutrisi3_tidak: string;
    nutrisi4_tidak: string;
    keterbatasan_tidak: string;
    keterbatasan_ya: string;
    Nyeri_Otot: string;
    Kaku_Otot: string;
    Lemah_Otot: string;
    Nyeri_Sendi: string;
    Bengkak_Sendi: string;
    Inkoordinasi: string;
    Kelemahan: string;
    Amputasi: string;
    Deformitas: string;
    Parese: string;
    kesulitantdr_ya: string;
    kesulitantdr_tidak: string;
    jatuh_tidak_resiko: string;
    jatuh_resiko_rendah: string;
    jatuh_resiko_tinggi: string;
    bicara_normal: string;
    bicara_gangguan: string;
    penterjemah_tidak: string;
    penterjemah_ya: string;
    isyarat_tidak: string;
    isyarat_ya: string;
    hambatan_tidak: string;
    hambatan_ya: string;
    tk: string;
    sd: string;
    smp: string;
    sma: string;
    akademi: string;
    sarjana: string;
    pendidikan_lain: string;
    status_sosial1: string;
    status_sosial2: string;
    status_sosial3: string;
    status_sosial4: string;
    status_psikologis1: string;
    status_psikologis2: string;
    status_psikologis3: string;
    status_psikologis4: string;
    status_psikologis5: string;
    status_mental1: string;
    status_mental2: string;
    status_mental3: string;
    sosial_baik: string;
    sosial_tidak_baik: string;
    gangguang_pengelihatan: string;
    penurunan_kesadaran: string;
    nyeri: string;
    infeksi: string;
    intake: string;
    resiko_jatuh: string;
    Hiperthermia: string;
    tio: string;
    kurang_pengetahuan: string;
    cm: string;
    apatis: string;
    somnolent: string;
    soporocoma: string;
    koma: string;

    Tanda_Tangan_Perawat_pengkaji: string;
    nik: string,
  }

  constructor(req: IPdfInpatientInitialNursingAssessmentChildrenRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfInpatientInitialNursingAssessmentChildrenRequest) {
    return new PdfInpatientInitialNursingAssessmentChildrenRequest(json);
  }

  static createPdfRequest(val: InpatientInitialNursingAssessmentChildren, emrId: string): PdfInpatientInitialNursingAssessmentChildrenRequest {
    return new PdfInpatientInitialNursingAssessmentChildrenRequest({
      emr_id: emrId,
      form_name: 'rawat-inap_pengkajian-awal-keperawatan-anak',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': `${val?.pasien?.Umur}` ?? '',
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',

        // tempat_tinggal1: this.getCheckImage(val?.form?.Tempat_Tinggal === '0'),

        tgl: DateTimeConverter.convertToDateTime(val?.form?.Tanggal),
        jam: '',
        Nama_wali: '',
        hubungan_wali: '',
        Keluhan_utama: val?.form?.Keluhan_Utama ?? '',
        riwayat_penyakit_skrg: val?.form?.Riwayat_Penyakit_Sekarang ?? '',
        riwayat_penyakit_terdahulu: val?.form?.Riwayat_Penyakit_Dahulu ?? '',
        riwayat_pengobatan: val?.form?.Riwayat_Pengobatan ?? '',
        jenis_riw_op: '',
        lama_kehamilan: val?.form?.Lama_Kehamilan ?? '',
        ket_komplikasi_ya: val?.form?.Komplikasi_Radio_Ket ?? '',
        ket_neonatus_ya: val?.form?.Neonatus_Radio_Ket ?? '',
        ket_maternal_ya: val?.form?.Maternal_Radio_Ket ?? '',
        imunisasi1_lainya: val?.form?.Imunisasi_Lainnya_1_Teks ?? '',
        imunisasi2_lainya: val?.form?.Imunisasi_Lainnya_2_Teks ?? '',
        bb_lahir: val?.form?.BB_Lahir ?? '',
        pb_lahir: val?.form?.PB_Lahir ?? '',
        asi: val?.form?.ASI_Umur ?? '',
        makan: val?.form?.Makan_Tambahan_Umur ?? '',
        berjalan: val?.form?.Berjalan_Umur ?? '',
        tengkurap: val?.form?.Tengkurap_Umur ?? '',
        duduk: val?.form?.Duduk_Umur ?? '',
        merangkak: val?.form?.Merangkak_Umur ?? '',
        berdiri: val?.form?.Berdiri_Umur ?? '',
        pf_td: val?.form?.PF_TD ?? '',
        pf_suhu: val?.form?.PF_Suhu ?? '',
        pf_p: val?.form?.PF_P ?? '',
        pf_nadi: val?.form?.PF_Nadi ?? '',
        pf_bb: val?.form?.PF_BB ?? '',
        pf_tb: val?.form?.PF_TB ?? '',
        alergi: '',
        ketgori_nilai_gizi: '',
        Total: val?.form?.Total_Skor ?? '',
        tdr_malam: val?.form?.Tidur_Malam ?? '',
        tdr_siang: val?.form?.Tidur_Siang ?? '',
        mkn_1: val?.form?.Makan_1 ?? '',
        mkn_2: val?.form?.Makan_2 ?? '',
        mkn_3: val?.form?.Makan_3 ?? '',
        mkn_4: val?.form?.Makan_4 ?? '',
        mkn_5: val?.form?.Makan_5 ?? '',
        mkn_6: val?.form?.Makan_6 ?? '',
        mandi_1: val?.form?.Mandi_1 ?? '',
        mandi_2: val?.form?.Mandi_2 ?? '',
        mandi_3: val?.form?.Mandi_3 ?? '',
        mandi_4: val?.form?.Mandi_4 ?? '',
        mandi_5: val?.form?.Mandi_5 ?? '',
        mandi_6: val?.form?.Mandi_6 ?? '',
        rawat_1: val?.form?.Rawat_1 ?? '',
        rawat_2: val?.form?.Rawat_2 ?? '',
        rawat_3: val?.form?.Rawat_3 ?? '',
        rawat_4: val?.form?.Rawat_4 ?? '',
        rawat_5: val?.form?.Rawat_5 ?? '',
        rawat_6: val?.form?.Rawat_6 ?? '',
        pakaian_1: val?.form?.Pakaian_1 ?? '',
        pakaian_2: val?.form?.Pakaian_2 ?? '',
        pakaian_3: val?.form?.Pakaian_3 ?? '',
        pakaian_4: val?.form?.Pakaian_4 ?? '',
        pakaian_5: val?.form?.Pakaian_5 ?? '',
        pakaian_6: val?.form?.Pakaian_6 ?? '',
        bak_1: val?.form?.BAK_1 ?? '',
        bak_2: val?.form?.BAK_2 ?? '',
        bak_3: val?.form?.BAK_3 ?? '',
        bak_4: val?.form?.BAK_4 ?? '',
        bak_5: val?.form?.BAK_5 ?? '',
        bak_6: val?.form?.BAK_6 ?? '',
        bab_1: val?.form?.BAB_1 ?? '',
        bab_2: val?.form?.BAB_2 ?? '',
        bab_3: val?.form?.BAB_3 ?? '',
        bab_4: val?.form?.BAB_4 ?? '',
        bab_5: val?.form?.BAB_5 ?? '',
        bab_6: val?.form?.BAB_6 ?? '',
        toilet_1: val?.form?.Toilet_1 ?? '',
        toilet_2: val?.form?.Toilet_2 ?? '',
        toilet_3: val?.form?.Toilet_3 ?? '',
        toilet_4: val?.form?.Toilet_4 ?? '',
        toilet_5: val?.form?.Toilet_5 ?? '',
        toilet_6: val?.form?.Toilet_6 ?? '',
        tf_1: val?.form?.Transfer_1 ?? '',
        tf_2: val?.form?.Transfer_2 ?? '',
        tf_3: val?.form?.Transfer_3 ?? '',
        tf_4: val?.form?.Transfer_4 ?? '',
        tf_5: val?.form?.Transfer_5 ?? '',
        tf_6: val?.form?.Transfer_6 ?? '',
        mobilitas_1: val?.form?.Mobilitas_1 ?? '',
        mobilitas_2: val?.form?.Mobilitas_2 ?? '',
        mobilitas_3: val?.form?.Mobilitas_3 ?? '',
        mobilitas_4: val?.form?.Mobilitas_4 ?? '',
        mobilitas_5: val?.form?.Mobilitas_5 ?? '',
        mobilitas_6: val?.form?.Mobilitas_6 ?? '',
        tangga_1: val?.form?.Tangga_1 ?? '',
        tangga_2: val?.form?.Tangga_2 ?? '',
        tangga_3: val?.form?.Tangga_3 ?? '',
        tangga_4: val?.form?.Tangga_4 ?? '',
        tangga_5: val?.form?.Tangga_5 ?? '',
        tangga_6: val?.form?.Tangga_6 ?? '',
        total_1: val?.form?.Total_1 ?? '',
        total_2: val?.form?.Total_2 ?? '',
        total_3: val?.form?.Total_3 ?? '',
        total_4: val?.form?.Total_4 ?? '',
        total_5: val?.form?.Total_5 ?? '',
        total_6: val?.form?.Total_6 ?? '',
        "gangguan bicara": '',
        bahasa_penterjemah: '',
        hambatan_belajar: '',
        pendidikan: val?.form?.Tingkat_Pendidikan_Lain_Teks ?? '',
        masalah_prilaku: '',
        prilaku_kekerasan: '',
        agama: val?.form?.Agama ?? '',
        keyakinan: val?.form?.Keyakinan ?? '',
        nilai_nilai: val?.form?.Nilai_Nilai ?? '',
        spiritual: val?.form?.Spiritual ?? '',
        selama_keperawatan: val?.form?.Selama_Keperawatan ?? '',
        masalah_keperawatan: val?.form?.Keperawatan_Lainnya_Masalah ?? '',
        rencana_keperawatan: val?.form?.Keperawatan_Lainnya_Rencana ?? '',
        date: DateTimeConverter.convertToNormalDate(val?.form?.Tanggal),
        time: val?.form?.Tanggal && val?.form?.Tanggal !== '' ? val?.form?.Tanggal.substring(11, 16) : '',
        "form.Nama_Perawat_pengkaji": val?.form?.Nama_Perawat_Pengkaji ?? '',
        total_gizi: `${Number(val?.form?.Skrining_Gizi_1 ?? 0) + Number(val?.form?.Skrining_Gizi_2 ?? 0) + Number(val?.form?.Skrining_Gizi_3 ?? 0) + Number(val?.form?.Skrining_Gizi_4 === '1' ? 2 : 0)}`,
        penyebab: val?.form?.Penyebab_Nyeri ?? '',
        kualitas: val?.form?.Kualitas_Nyeri ?? '',
        lokasi: val?.form?.Lokasi_Nyeri ?? '',
        skala: val?.form?.Skala_Nyeri ?? '',
        durasi: val?.form?.Durasi_Nyeri ?? '',
        total: `${Number(val?.form?.Wajah_Radio ?? 0) + Number(val?.form?.Kaki_Radio ?? 0) + Number(val?.form?.Aktivitas_Radio ?? 0) + Number(val?.form?.Menangis_Radio ?? 0) + Number(val?.form?.Kenyamanan_Radio ?? 0)}`,

        pasien: this.getCheckImage(val?.form?.Pengkajian_Diperoleh === '0'),
        wali: this.getCheckImage(val?.form?.Pengkajian_Diperoleh === '1'),
        op_tidak: this.getCheckImage(val?.form?.Riwayat_Operasi_Radio === '0'),
        op_ya: this.getCheckImage(val?.form?.Riwayat_Operasi_Radio === '1'),
        hipertensi: this.getCheckImage(val?.form?.Riwayat_Penyakit_Hipertensi === '1'),
        asma: this.getCheckImage(val?.form?.Riwayat_Penyakit_Asma === '1'),
        db: this.getCheckImage(val?.form?.Riwayat_Penyakit_Diabetes === '1'),
        hepatitis: this.getCheckImage(val?.form?.Riwayat_Penyakit_Hepatitis === '1'),
        glaukoma: this.getCheckImage(val?.form?.Riwayat_Penyakit_Glaukoma === '1'),
        stroke: this.getCheckImage(val?.form?.Riwayat_Penyakit_Stroke === '1'),
        riwayat_penyakit_keluarga: this.getCheckImage(val?.form?.Riwayat_Penyakit_Lainnya === '1'),
        komplikasi_tidak: this.getCheckImage(val?.form?.Komplikasi_Radio === '0'),
        komplikasi_ya: this.getCheckImage(val?.form?.Komplikasi_Radio === '1'),
        neonatus_tidak: this.getCheckImage(val?.form?.Neonatus_Radio === '0'),
        neonatus_ya: this.getCheckImage(val?.form?.Neonatus_Radio === '1'),
        maternal_tidak: this.getCheckImage(val?.form?.Maternal_Radio === '0'),
        maternal_ya: this.getCheckImage(val?.form?.Maternal_Radio === '1'),
        BCG: this.getCheckImage(val?.form?.Imunisasi_BCG === '1'),
        HepatitisBI: this.getCheckImage(val?.form?.Imunisasi_Hepatitis_1 === '1'),
        DPTI: this.getCheckImage(val?.form?.Imunisasi_DPT_1 === '1'),
        Campak: this.getCheckImage(val?.form?.Imunisasi_Campak === '1'),
        Lainya_imunisasi1: this.getCheckImage(val?.form?.Imunisasi_Lainnya_1 === '1'),
        PolioI: this.getCheckImage(val?.form?.Imunisasi_Polio_1 === '1'),
        HepatitisBII: this.getCheckImage(val?.form?.Imunisasi_Hepatitis_2 === '1'),
        DPTII: this.getCheckImage(val?.form?.Imunisasi_DPT_2 === '1'),
        MMR: this.getCheckImage(val?.form?.Imunisasi_MMR === '1'),
        PolioII: this.getCheckImage(val?.form?.Imunisasi_Polio_2 === '1'),
        HepatitisBIII: this.getCheckImage(val?.form?.Imunisasi_Hepatitis_3 === '1'),
        DPTIII: this.getCheckImage(val?.form?.Imunisasi_DPT_3 === '1'),
        Lainya_imunisasi2: this.getCheckImage(val?.form?.Imunisasi_Lainnya_2 === '1'),
        PolioIII: this.getCheckImage(val?.form?.Imunisasi_Polio_3 === '1'),
        Varicela: this.getCheckImage(val?.form?.Imunisasi_Varicela === '1'),
        Typhus: this.getCheckImage(val?.form?.Imunisasi_Typhus === '1'),
        Influenza: this.getCheckImage(val?.form?.Imunisasi_Influenza === '1'),
        asesmen1_ya: this.getCheckImage(val?.form?.Asesmen_Remaja_1 === '1'),
        asesmen2_ya: this.getCheckImage(val?.form?.Asesmen_Remaja_2 === '1'),
        asesmen3_ya: this.getCheckImage(val?.form?.Asesmen_Remaja_3 === '1'),
        asesmen4_ya: this.getCheckImage(val?.form?.Asesmen_Remaja_4 === '1'),
        asesmen5_ya: this.getCheckImage(val?.form?.Asesmen_Remaja_5 === '1'),
        asesmen6_ya: this.getCheckImage(val?.form?.Asesmen_Remaja_6 === '1'),
        asesmen7_ya: this.getCheckImage(val?.form?.Asesmen_Remaja_7 === '1'),
        asesmen8_ya: this.getCheckImage(val?.form?.Asesmen_Remaja_8 === '1'),
        asesmen9_ya: this.getCheckImage(val?.form?.Asesmen_Remaja_9 === '1'),
        asesmen10_ya: this.getCheckImage(val?.form?.Asesmen_Remaja_10 === '1'),
        asesmen11_ya: this.getCheckImage(val?.form?.Asesmen_Remaja_11 === '1'),
        asesmen12_ya: this.getCheckImage(val?.form?.Asesmen_Remaja_12 === '1'),
        asesmen1_tidak: this.getCheckImage(val?.form?.Asesmen_Remaja_1 === '0'),
        asesmen2_tidak: this.getCheckImage(val?.form?.Asesmen_Remaja_2 === '0'),
        asesmen3_tidak: this.getCheckImage(val?.form?.Asesmen_Remaja_3 === '0'),
        asesmen4_tidak: this.getCheckImage(val?.form?.Asesmen_Remaja_4 === '0'),
        asesmen5_tidak: this.getCheckImage(val?.form?.Asesmen_Remaja_5 === '0'),
        asesmen6_tidak: this.getCheckImage(val?.form?.Asesmen_Remaja_6 === '0'),
        asesmen7_tidak: this.getCheckImage(val?.form?.Asesmen_Remaja_7 === '0'),
        asesmen8_tidak: this.getCheckImage(val?.form?.Asesmen_Remaja_8 === '0'),
        asesmen9_tidak: this.getCheckImage(val?.form?.Asesmen_Remaja_9 === '0'),
        asesmen10_tidak: this.getCheckImage(val?.form?.Asesmen_Remaja_10 === '0'),
        asesmen11_tidak: this.getCheckImage(val?.form?.Asesmen_Remaja_11 === '0'),
        asesmen12_tidak: this.getCheckImage(val?.form?.Asesmen_Remaja_12 === '0'),
        alergi_tidak: this.getCheckImage(val?.form?.Alergi_Reaksi_Radio === '0'),
        alergi_tidak_diketahui: this.getCheckImage(val?.form?.Alergi_Reaksi_Radio === '1'),
        alergi_ya: this.getCheckImage(val?.form?.Alergi_Reaksi_Radio === '2'),
        nyeri_ya: this.getCheckImage(val?.form?.Nyeri_Radio === '1'),
        nyeri_tidak: this.getCheckImage(val?.form?.Nyeri_Radio === '0'),
        flacc: this.getCheckImage(val?.form?.Pengkajian_Nyeri === '0'),
        wb: this.getCheckImage(val?.form?.Pengkajian_Nyeri === '1'),
        wajah0: this.getCheckImage(val?.form?.Wajah_Radio === '0'),
        wajah1: this.getCheckImage(val?.form?.Wajah_Radio === '1'),
        wajah2: this.getCheckImage(val?.form?.Wajah_Radio === '2'),
        kaki0: this.getCheckImage(val?.form?.Kaki_Radio === '0'),
        kaki1: this.getCheckImage(val?.form?.Kaki_Radio === '1'),
        kaki2: this.getCheckImage(val?.form?.Kaki_Radio === '2'),
        aktivitas0: this.getCheckImage(val?.form?.Aktivitas_Radio === '0'),
        aktivitas1: this.getCheckImage(val?.form?.Aktivitas_Radio === '1'),
        aktivitas2: this.getCheckImage(val?.form?.Aktivitas_Radio === '2'),
        menangis0: this.getCheckImage(val?.form?.Menangis_Radio === '0'),
        menangis1: this.getCheckImage(val?.form?.Menangis_Radio === '1'),
        menangis2: this.getCheckImage(val?.form?.Menangis_Radio === '2'),
        kenyamanan0: this.getCheckImage(val?.form?.Kenyamanan_Radio === '0'),
        kenyamanan1: this.getCheckImage(val?.form?.Kenyamanan_Radio === '1'),
        kenyamanan2: this.getCheckImage(val?.form?.Kenyamanan_Radio === '2'),
        skala1: this.getCheckImage(val?.form?.Skala_Nyeri_Radio === '1'),
        skala2: this.getCheckImage(val?.form?.Skala_Nyeri_Radio === '2'),
        skala3: this.getCheckImage(val?.form?.Skala_Nyeri_Radio === '3'),
        skala4: this.getCheckImage(val?.form?.Skala_Nyeri_Radio === '4'),
        skala5: this.getCheckImage(val?.form?.Skala_Nyeri_Radio === '5'),
        skala6: this.getCheckImage(val?.form?.Skala_Nyeri_Radio === '6'),
        skala7: this.getCheckImage(val?.form?.Skala_Nyeri_Radio === '7'),
        skala8: this.getCheckImage(val?.form?.Skala_Nyeri_Radio === '8'),
        skala9: this.getCheckImage(val?.form?.Skala_Nyeri_Radio === '9'),
        skala10: this.getCheckImage(val?.form?.Skala_Nyeri_Radio === '10'),
        nutrisi1_ya: this.getCheckImage(val?.form?.Skrining_Gizi_1 === '1'),
        nutrisi2_ya: this.getCheckImage(val?.form?.Skrining_Gizi_2 === '1'),
        nutrisi3_ya: this.getCheckImage(val?.form?.Skrining_Gizi_3 === '1'),
        nutrisi4_ya: this.getCheckImage(val?.form?.Skrining_Gizi_4 === '1'),
        nutrisi1_tidak: this.getCheckImage(val?.form?.Skrining_Gizi_1 === '0'),
        nutrisi2_tidak: this.getCheckImage(val?.form?.Skrining_Gizi_2 === '0'),
        nutrisi3_tidak: this.getCheckImage(val?.form?.Skrining_Gizi_3 === '0'),
        nutrisi4_tidak: this.getCheckImage(val?.form?.Skrining_Gizi_4 === '0'),
        keterbatasan_tidak: this.getCheckImage(val?.form?.Keterbatasan_Gerak_Radio === '0'),
        keterbatasan_ya: this.getCheckImage(val?.form?.Keterbatasan_Gerak_Radio === '1'),
        Nyeri_Otot: this.getCheckImage(val?.form?.Nyeri_Otot === '1'),
        Kaku_Otot: this.getCheckImage(val?.form?.Kaku_Otot === '1'),
        Lemah_Otot: this.getCheckImage(val?.form?.Lemah_Otot === '1'),
        Nyeri_Sendi: this.getCheckImage(val?.form?.Nyeri_Sendi === '1'),
        Bengkak_Sendi: this.getCheckImage(val?.form?.Bengkak_Sendi === '1'),
        Inkoordinasi: this.getCheckImage(val?.form?.Inkoordinasi === '1'),
        Kelemahan: this.getCheckImage(val?.form?.Kelemahan === '1'),
        Amputasi: this.getCheckImage(val?.form?.Amputasi === '1'),
        Deformitas: this.getCheckImage(val?.form?.Deformitas === '1'),
        Parese: this.getCheckImage(val?.form?.Parese === '1'),
        kesulitantdr_ya: this.getCheckImage(val?.form?.Kesulitan_Tidur_Radio === '1'),
        kesulitantdr_tidak: this.getCheckImage(val?.form?.Kesulitan_Tidur_Radio === '0'),
        jatuh_tidak_resiko: this.getCheckImage(val?.form?.Resiko_Jatuh_Radio === '0'),
        jatuh_resiko_rendah: this.getCheckImage(val?.form?.Resiko_Jatuh_Radio === '1'),
        jatuh_resiko_tinggi: this.getCheckImage(val?.form?.Resiko_Jatuh_Radio === '2'),
        bicara_normal: this.getCheckImage(val?.form?.Bicara_Radio === '0'),
        bicara_gangguan: this.getCheckImage(val?.form?.Bicara_Radio === '1'),
        penterjemah_tidak: this.getCheckImage(val?.form?.Perlu_Penerjemah_Radio === '0'),
        penterjemah_ya: this.getCheckImage(val?.form?.Perlu_Penerjemah_Radio === '1'),
        isyarat_tidak: this.getCheckImage(false),
        isyarat_ya: this.getCheckImage(false),
        hambatan_tidak: this.getCheckImage(val?.form?.Hambatan_Belajar_Radio === '0'),
        hambatan_ya: this.getCheckImage(val?.form?.Hambatan_Belajar_Radio === '1'),
        tk: this.getCheckImage(val?.form?.Tingkat_Pendidikan_Radio === '0'),
        sd: this.getCheckImage(val?.form?.Tingkat_Pendidikan_Radio === '1'),
        smp: this.getCheckImage(val?.form?.Tingkat_Pendidikan_Radio === '2'),
        sma: this.getCheckImage(val?.form?.Tingkat_Pendidikan_Radio === '3'),
        akademi: this.getCheckImage(val?.form?.Tingkat_Pendidikan_Radio === '4'),
        sarjana: this.getCheckImage(val?.form?.Tingkat_Pendidikan_Radio === '5'),
        pendidikan_lain: this.getCheckImage(val?.form?.Tingkat_Pendidikan_Radio === '6'),
        status_sosial1: this.getCheckImage(val?.form?.Status_Ekonomi_Radio === '0'),
        status_sosial2: this.getCheckImage(val?.form?.Status_Ekonomi_Radio === '1'),
        status_sosial3: this.getCheckImage(val?.form?.Status_Ekonomi_Radio === '2'),
        status_sosial4: this.getCheckImage(val?.form?.Status_Ekonomi_Radio === '3'),
        status_psikologis1: this.getCheckImage(val?.form?.Status_Psikologi_Radio === '0'),
        status_psikologis2: this.getCheckImage(val?.form?.Status_Psikologi_Radio === '1'),
        status_psikologis3: this.getCheckImage(val?.form?.Status_Psikologi_Radio === '2'),
        status_psikologis4: this.getCheckImage(val?.form?.Status_Psikologi_Radio === '3'),
        status_psikologis5: this.getCheckImage(val?.form?.Status_Psikologi_Radio === '4'),
        status_mental1: this.getCheckImage(val?.form?.Status_Mental_Radio === '0'),
        status_mental2: this.getCheckImage(val?.form?.Status_Mental_Radio === '1'),
        status_mental3: this.getCheckImage(val?.form?.Status_Mental_Radio === '2'),
        sosial_baik: this.getCheckImage(val?.form?.Sosial_Radio === '0'),
        sosial_tidak_baik: this.getCheckImage(val?.form?.Sosial_Radio === '1'),
        gangguang_pengelihatan: this.getCheckImage(val?.form?.Keperawatan_Persepsi_Sensori === '1'),
        penurunan_kesadaran: this.getCheckImage(val?.form?.Keperawatan_Penurunan_Kesadaran === '1'),
        nyeri: this.getCheckImage(val?.form?.Keperawatan_Nyeri === '1'),
        infeksi: this.getCheckImage(val?.form?.Keperawatan_Resiko_Infeksi === '1'),
        intake: this.getCheckImage(val?.form?.Keperawatan_Intake_Output === '1'),
        resiko_jatuh: this.getCheckImage(val?.form?.Keperawatan_Resiko_Jatuh === '1'),
        Hiperthermia: this.getCheckImage(val?.form?.Keperawatan_Hiperthermia === '1'),
        tio: this.getCheckImage(val?.form?.Keperawatan_Tekanan_Intra === '1'),
        kurang_pengetahuan: this.getCheckImage(val?.form?.Keperawatan_Kurang_Pengetahuan === '1'),
        cm: this.getCheckImage(val?.form?.Kesadaran_Radio === '0'),
        apatis: this.getCheckImage(val?.form?.Kesadaran_Radio === '1'),
        somnolent: this.getCheckImage(val?.form?.Kesadaran_Radio === '2'),
        soporocoma: this.getCheckImage(val?.form?.Kesadaran_Radio === '3'),
        koma: this.getCheckImage(val?.form?.Kesadaran_Radio === '4'),
        nik: val?.pasien?.NIK ?? '',

        Tanda_Tangan_Perawat_pengkaji: val.form && val.form.TTD_Perawat_Pengkaji && val.form.TTD_Perawat_Pengkaji !== '' ? val.form.TTD_Perawat_Pengkaji : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
      },
    })
  }
}
