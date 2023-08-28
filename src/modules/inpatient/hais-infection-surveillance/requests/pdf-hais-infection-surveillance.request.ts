import { CreatePDFRequest, ICreatePDFRequest } from "@src/shared/pdf/requests/create-pdf.request";
import { IAppRequest } from "@src/shared/request";
import { IHaisSurveillanceInfectionFormDetail } from "../models/hais-infection-surveillance-form.model";
import { IHaisSurveillanceInfectionListDetail } from "../models/hais-infection-surveillance-list.model";
import { ITreatmentModel } from "@src/modules/site/patient-list/models";
import { DateTimeConverter } from "@src/shared/datetime-converter";

export interface IPdfHaisInfectionSurveillanceRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string;
    'pasien.Tgl_Lahir': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    ruangan_hais: string;
    jenis_kelamin_laki: string;
    jenis_kelamin_perempuan: string;
    tanggal_berobat: string;
    diagnosa_masuk: string;
    alasan_masuk_rumah: string;
    alasan_masuk_rujukan: string;
    vena_sentral: string;
    vena_perifer: string;
    lokasi_1: string;
    lokasi_2: string;
    mulai_1: string;
    mulai_2: string;
    sampai_1: string;
    sampai_2: string;
    sum_1: string;
    sum_2: string;
    infeksi_1: string;
    infeksi_2: string;
    catatan_1: string;
    catatan_2: string;
    tindakan_alkes_lain: string;
    lokasi_3: string;
    mulai_3: string;
    sampai_3: string;
    sum_3: string;
    infeksi_3: string;
    catatan_3: string;
    hbs_positif: string;
    hbs_negatif: string;
    hbs_tidak: string;
    hcv_positif: string;
    hcv_negatif: string;
    hcv_tidak: string;
    hiv_positif: string;
    hiv_negatif: string;
    hiv_tidak: string;
    penyakit_lain: string;
    lab_leukocyt: string;
    lab_led: string;
    lab_lain_lain: string;
    hasil_radiologi: string;
    merokok_ya: string;
    merokok_tidak: string;
    steroid_ya: string;
    steroid_tidak: string;
    operasi_ya: string;
    operasi_tidak: string;
    pengencer_ya: string;
    pengencer_tidak: string;
    mandi_ya: string;
    mandi_tidak: string;
    makeup_ya: string;
    makeup_tidak: string;
    gula_201: string;
    gula_199: string;
    suhu_39: string;
    suhu_37: string;
    infeksi_mata: string;
    infeksi_tht: string;
    infeksi_mulut_gigi: string;
    infeksi_paru: string;
    infeksi_kulit: string;
    infeksi_gi_track: string;
    checkbox_infeksi_lain: string;
    infeksi_lainnya: string;
    saat_ini_dm: string;
    saat_ini_hipertensi: string;
    saat_ini_ggk: string;
    saat_ini_sepsis: string;
    riwayat_pasien_sekarang: string;
    jenis_cito: string;
    jenis_elektif: string;
    asa_1: string;
    asa_2: string;
    asa_3: string;
    asa_4: string;
    asa_5: string;
    anestesi_ga: string;
    anestesi_lokal: string;
    operator_anestesi: string;
    kelembapan_udara: string;
    suhu_ruangan: string;
    komplikasi_ya: string;
    komplikasi_tidak: string;
    profilaksis_ya: string;
    profilaksis_tidak: string;
    obat_profilaksis: string;
    antibiotik_ya: string;
    antibiotik_tidak: string;
    obat_antibiotik: string;
    dosis: string;
    jam_diberikan: string;
    probe_laser: string;
    tubing_vitrectomy: string;
    desinfeksi_chlorhexidine: string;
    desinfeksi_povidone: string;
    desinfeksi_alkohol: string;
    jahitan_ya: string;
    jahitan_tidak: string;
    indikator_luar: string;
    indikator_dalam: string;
    indikator_tidak_ada: string;
    sterilisasi_ya: string;
    sterilisasi_tidak: string;
    inisial_dr: string;
    asisten_op: string;
    urutan_op: string;
    implant_ya: string;
    implant_tidak: string;
    lama_op: string;
    ruang_op_1: string;
    ruang_op_2: string;
    ruang_op_3: string;
    ruang_op_4: string;
    klasifikasi_1: string;
    klasifikasi_2: string;
    klasifikasi_3: string;
    klasifikasi_4: string;
    prosedur_op: string;
    kualifikasi_dokter_bedah: string;
    jumlah_staf: string;
    diagnosa_akhir: string;
    tanggal_pasien_keluar: string;
    keluar_pulang: string;
    keluar_meninggal: string;
    keluar_pindah: string;
    pindah_faskes: string;
    ttd_perawat: string;
    ttd_ipcn: string;
    nama_perawat_penanggungjawab: string;
    nama_perawat_ipcn: string;
    tgl_0?: string;
    tgl_1?: string;
    tgl_2?: string;
    tgl_3?: string;
    tgl_4?: string;
    tgl_5?: string;
    tgl_6?: string;
    tgl_7?: string;
    tgl_8?: string;
    tgl_9?: string;
    tgl_10?: string;
    tgl_11?: string;
    tgl_12?: string;
    tgl_13?: string;
    tgl_14?: string;
    tgl_15?: string;
    tgl_16?: string;
    tgl_17?: string;
    tgl_18?: string;
    tgl_19?: string;
    tgl_20?: string;
    tgl_21?: string;
    tgl_22?: string;
    tgl_23?: string;
    tgl_24?: string;
    tgl_25?: string;
    tgl_26?: string;
    tgl_27?: string;
    tgl_28?: string;
    tgl_29?: string;
    tgl_30?: string;
    tgl_31?: string;
    krs_0?: string;
    krs_1?: string;
    krs_2?: string;
    krs_3?: string;
    krs_4?: string;
    krs_5?: string;
    krs_6?: string;
    krs_7?: string;
    krs_8?: string;
    krs_9?: string;
    krs_10?: string;
    krs_11?: string;
    krs_12?: string;
    krs_13?: string;
    krs_14?: string;
    krs_15?: string;
    krs_16?: string;
    krs_17?: string;
    krs_18?: string;
    krs_19?: string;
    krs_20?: string;
    krs_21?: string;
    krs_22?: string;
    krs_23?: string;
    krs_24?: string;
    krs_25?: string;
    krs_26?: string;
    krs_27?: string;
    krs_28?: string;
    krs_29?: string;
    krs_30?: string;
    krs_31?: string;
    kontrol_0?: string;
    kontrol_1?: string;
    kontrol_2?: string;
    kontrol_3?: string;
    kontrol_4?: string;
    kontrol_5?: string;
    kontrol_6?: string;
    kontrol_7?: string;
    kontrol_8?: string;
    kontrol_9?: string;
    kontrol_10?: string;
    kontrol_11?: string;
    kontrol_12?: string;
    kontrol_13?: string;
    kontrol_14?: string;
    kontrol_15?: string;
    kontrol_16?: string;
    kontrol_17?: string;
    kontrol_18?: string;
    kontrol_19?: string;
    kontrol_20?: string;
    kontrol_21?: string;
    kontrol_22?: string;
    kontrol_23?: string;
    kontrol_24?: string;
    kontrol_25?: string;
    kontrol_26?: string;
    kontrol_27?: string;
    kontrol_28?: string;
    kontrol_29?: string;
    kontrol_30?: string;
    kontrol_31?: string;
    kasa_0?: string;
    kasa_1?: string;
    kasa_2?: string;
    kasa_3?: string;
    kasa_4?: string;
    kasa_5?: string;
    kasa_6?: string;
    kasa_7?: string;
    kasa_8?: string;
    kasa_9?: string;
    kasa_10?: string;
    kasa_11?: string;
    kasa_12?: string;
    kasa_13?: string;
    kasa_14?: string;
    kasa_15?: string;
    kasa_16?: string;
    kasa_17?: string;
    kasa_18?: string;
    kasa_19?: string;
    kasa_20?: string;
    kasa_21?: string;
    kasa_22?: string;
    kasa_23?: string;
    kasa_24?: string;
    kasa_25?: string;
    kasa_26?: string;
    kasa_27?: string;
    kasa_28?: string;
    kasa_29?: string;
    kasa_30?: string;
    kasa_31?: string;
    eyeshild_0?: string;
    eyeshild_1?: string;
    eyeshild_2?: string;
    eyeshild_3?: string;
    eyeshild_4?: string;
    eyeshild_5?: string;
    eyeshild_6?: string;
    eyeshild_7?: string;
    eyeshild_8?: string;
    eyeshild_9?: string;
    eyeshild_10?: string;
    eyeshild_11?: string;
    eyeshild_12?: string;
    eyeshild_13?: string;
    eyeshild_14?: string;
    eyeshild_15?: string;
    eyeshild_16?: string;
    eyeshild_17?: string;
    eyeshild_18?: string;
    eyeshild_19?: string;
    eyeshild_20?: string;
    eyeshild_21?: string;
    eyeshild_22?: string;
    eyeshild_23?: string;
    eyeshild_24?: string;
    eyeshild_25?: string;
    eyeshild_26?: string;
    eyeshild_27?: string;
    eyeshild_28?: string;
    eyeshild_29?: string;
    eyeshild_30?: string;
    eyeshild_31?: string;
    antibiotik_topical_0?: string;
    antibiotik_topical_1?: string;
    antibiotik_topical_2?: string;
    antibiotik_topical_3?: string;
    antibiotik_topical_4?: string;
    antibiotik_topical_5?: string;
    antibiotik_topical_6?: string;
    antibiotik_topical_7?: string;
    antibiotik_topical_8?: string;
    antibiotik_topical_9?: string;
    antibiotik_topical_10?: string;
    antibiotik_topical_11?: string;
    antibiotik_topical_12?: string;
    antibiotik_topical_13?: string;
    antibiotik_topical_14?: string;
    antibiotik_topical_15?: string;
    antibiotik_topical_16?: string;
    antibiotik_topical_17?: string;
    antibiotik_topical_18?: string;
    antibiotik_topical_19?: string;
    antibiotik_topical_20?: string;
    antibiotik_topical_21?: string;
    antibiotik_topical_22?: string;
    antibiotik_topical_23?: string;
    antibiotik_topical_24?: string;
    antibiotik_topical_25?: string;
    antibiotik_topical_26?: string;
    antibiotik_topical_27?: string;
    antibiotik_topical_28?: string;
    antibiotik_topical_29?: string;
    antibiotik_topical_30?: string;
    antibiotik_topical_31?: string;
    antibiotik_oral_0?: string;
    antibiotik_oral_1?: string;
    antibiotik_oral_2?: string;
    antibiotik_oral_3?: string;
    antibiotik_oral_4?: string;
    antibiotik_oral_5?: string;
    antibiotik_oral_6?: string;
    antibiotik_oral_7?: string;
    antibiotik_oral_8?: string;
    antibiotik_oral_9?: string;
    antibiotik_oral_10?: string;
    antibiotik_oral_11?: string;
    antibiotik_oral_12?: string;
    antibiotik_oral_13?: string;
    antibiotik_oral_14?: string;
    antibiotik_oral_15?: string;
    antibiotik_oral_16?: string;
    antibiotik_oral_17?: string;
    antibiotik_oral_18?: string;
    antibiotik_oral_19?: string;
    antibiotik_oral_20?: string;
    antibiotik_oral_21?: string;
    antibiotik_oral_22?: string;
    antibiotik_oral_23?: string;
    antibiotik_oral_24?: string;
    antibiotik_oral_25?: string;
    antibiotik_oral_26?: string;
    antibiotik_oral_27?: string;
    antibiotik_oral_28?: string;
    antibiotik_oral_29?: string;
    antibiotik_oral_30?: string;
    antibiotik_oral_31?: string;
    mata_kena_air_0?: string;
    mata_kena_air_1?: string;
    mata_kena_air_2?: string;
    mata_kena_air_3?: string;
    mata_kena_air_4?: string;
    mata_kena_air_5?: string;
    mata_kena_air_6?: string;
    mata_kena_air_7?: string;
    mata_kena_air_8?: string;
    mata_kena_air_9?: string;
    mata_kena_air_10?: string;
    mata_kena_air_11?: string;
    mata_kena_air_12?: string;
    mata_kena_air_13?: string;
    mata_kena_air_14?: string;
    mata_kena_air_15?: string;
    mata_kena_air_16?: string;
    mata_kena_air_17?: string;
    mata_kena_air_18?: string;
    mata_kena_air_19?: string;
    mata_kena_air_20?: string;
    mata_kena_air_21?: string;
    mata_kena_air_22?: string;
    mata_kena_air_23?: string;
    mata_kena_air_24?: string;
    mata_kena_air_25?: string;
    mata_kena_air_26?: string;
    mata_kena_air_27?: string;
    mata_kena_air_28?: string;
    mata_kena_air_29?: string;
    mata_kena_air_30?: string;
    mata_kena_air_31?: string;
    mata_kena_asap_0?: string;
    mata_kena_asap_1?: string;
    mata_kena_asap_2?: string;
    mata_kena_asap_3?: string;
    mata_kena_asap_4?: string;
    mata_kena_asap_5?: string;
    mata_kena_asap_6?: string;
    mata_kena_asap_7?: string;
    mata_kena_asap_8?: string;
    mata_kena_asap_9?: string;
    mata_kena_asap_10?: string;
    mata_kena_asap_11?: string;
    mata_kena_asap_12?: string;
    mata_kena_asap_13?: string;
    mata_kena_asap_14?: string;
    mata_kena_asap_15?: string;
    mata_kena_asap_16?: string;
    mata_kena_asap_17?: string;
    mata_kena_asap_18?: string;
    mata_kena_asap_19?: string;
    mata_kena_asap_20?: string;
    mata_kena_asap_21?: string;
    mata_kena_asap_22?: string;
    mata_kena_asap_23?: string;
    mata_kena_asap_24?: string;
    mata_kena_asap_25?: string;
    mata_kena_asap_26?: string;
    mata_kena_asap_27?: string;
    mata_kena_asap_28?: string;
    mata_kena_asap_29?: string;
    mata_kena_asap_30?: string;
    mata_kena_asap_31?: string;
    mata_kena_debu_0?: string;
    mata_kena_debu_1?: string;
    mata_kena_debu_2?: string;
    mata_kena_debu_3?: string;
    mata_kena_debu_4?: string;
    mata_kena_debu_5?: string;
    mata_kena_debu_6?: string;
    mata_kena_debu_7?: string;
    mata_kena_debu_8?: string;
    mata_kena_debu_9?: string;
    mata_kena_debu_10?: string;
    mata_kena_debu_11?: string;
    mata_kena_debu_12?: string;
    mata_kena_debu_13?: string;
    mata_kena_debu_14?: string;
    mata_kena_debu_15?: string;
    mata_kena_debu_16?: string;
    mata_kena_debu_17?: string;
    mata_kena_debu_18?: string;
    mata_kena_debu_19?: string;
    mata_kena_debu_20?: string;
    mata_kena_debu_21?: string;
    mata_kena_debu_22?: string;
    mata_kena_debu_23?: string;
    mata_kena_debu_24?: string;
    mata_kena_debu_25?: string;
    mata_kena_debu_26?: string;
    mata_kena_debu_27?: string;
    mata_kena_debu_28?: string;
    mata_kena_debu_29?: string;
    mata_kena_debu_30?: string;
    mata_kena_debu_31?: string;
    gda_0?: string;
    gda_1?: string;
    gda_2?: string;
    gda_3?: string;
    gda_4?: string;
    gda_5?: string;
    gda_6?: string;
    gda_7?: string;
    gda_8?: string;
    gda_9?: string;
    gda_10?: string;
    gda_11?: string;
    gda_12?: string;
    gda_13?: string;
    gda_14?: string;
    gda_15?: string;
    gda_16?: string;
    gda_17?: string;
    gda_18?: string;
    gda_19?: string;
    gda_20?: string;
    gda_21?: string;
    gda_22?: string;
    gda_23?: string;
    gda_24?: string;
    gda_25?: string;
    gda_26?: string;
    gda_27?: string;
    gda_28?: string;
    gda_29?: string;
    gda_30?: string;
    gda_31?: string;
    kabur_0?: string;
    kabur_1?: string;
    kabur_2?: string;
    kabur_3?: string;
    kabur_4?: string;
    kabur_5?: string;
    kabur_6?: string;
    kabur_7?: string;
    kabur_8?: string;
    kabur_9?: string;
    kabur_10?: string;
    kabur_11?: string;
    kabur_12?: string;
    kabur_13?: string;
    kabur_14?: string;
    kabur_15?: string;
    kabur_16?: string;
    kabur_17?: string;
    kabur_18?: string;
    kabur_19?: string;
    kabur_20?: string;
    kabur_21?: string;
    kabur_22?: string;
    kabur_23?: string;
    kabur_24?: string;
    kabur_25?: string;
    kabur_26?: string;
    kabur_27?: string;
    kabur_28?: string;
    kabur_29?: string;
    kabur_30?: string;
    kabur_31?: string;
    mata_merah_0?: string;
    mata_merah_1?: string;
    mata_merah_2?: string;
    mata_merah_3?: string;
    mata_merah_4?: string;
    mata_merah_5?: string;
    mata_merah_6?: string;
    mata_merah_7?: string;
    mata_merah_8?: string;
    mata_merah_9?: string;
    mata_merah_10?: string;
    mata_merah_11?: string;
    mata_merah_12?: string;
    mata_merah_13?: string;
    mata_merah_14?: string;
    mata_merah_15?: string;
    mata_merah_16?: string;
    mata_merah_17?: string;
    mata_merah_18?: string;
    mata_merah_19?: string;
    mata_merah_20?: string;
    mata_merah_21?: string;
    mata_merah_22?: string;
    mata_merah_23?: string;
    mata_merah_24?: string;
    mata_merah_25?: string;
    mata_merah_26?: string;
    mata_merah_27?: string;
    mata_merah_28?: string;
    mata_merah_29?: string;
    mata_merah_30?: string;
    mata_merah_31?: string;
    nyeri_0?: string;
    nyeri_1?: string;
    nyeri_2?: string;
    nyeri_3?: string;
    nyeri_4?: string;
    nyeri_5?: string;
    nyeri_6?: string;
    nyeri_7?: string;
    nyeri_8?: string;
    nyeri_9?: string;
    nyeri_10?: string;
    nyeri_11?: string;
    nyeri_12?: string;
    nyeri_13?: string;
    nyeri_14?: string;
    nyeri_15?: string;
    nyeri_16?: string;
    nyeri_17?: string;
    nyeri_18?: string;
    nyeri_19?: string;
    nyeri_20?: string;
    nyeri_21?: string;
    nyeri_22?: string;
    nyeri_23?: string;
    nyeri_24?: string;
    nyeri_25?: string;
    nyeri_26?: string;
    nyeri_27?: string;
    nyeri_28?: string;
    nyeri_29?: string;
    nyeri_30?: string;
    nyeri_31?: string;
    tio_0?: string;
    tio_1?: string;
    tio_2?: string;
    tio_3?: string;
    tio_4?: string;
    tio_5?: string;
    tio_6?: string;
    tio_7?: string;
    tio_8?: string;
    tio_9?: string;
    tio_10?: string;
    tio_11?: string;
    tio_12?: string;
    tio_13?: string;
    tio_14?: string;
    tio_15?: string;
    tio_16?: string;
    tio_17?: string;
    tio_18?: string;
    tio_19?: string;
    tio_20?: string;
    tio_21?: string;
    tio_22?: string;
    tio_23?: string;
    tio_24?: string;
    tio_25?: string;
    tio_26?: string;
    tio_27?: string;
    tio_28?: string;
    tio_29?: string;
    tio_30?: string;
    tio_31?: string;
    odem_kornea_0?: string;
    odem_kornea_1?: string;
    odem_kornea_2?: string;
    odem_kornea_3?: string;
    odem_kornea_4?: string;
    odem_kornea_5?: string;
    odem_kornea_6?: string;
    odem_kornea_7?: string;
    odem_kornea_8?: string;
    odem_kornea_9?: string;
    odem_kornea_10?: string;
    odem_kornea_11?: string;
    odem_kornea_12?: string;
    odem_kornea_13?: string;
    odem_kornea_14?: string;
    odem_kornea_15?: string;
    odem_kornea_16?: string;
    odem_kornea_17?: string;
    odem_kornea_18?: string;
    odem_kornea_19?: string;
    odem_kornea_20?: string;
    odem_kornea_21?: string;
    odem_kornea_22?: string;
    odem_kornea_23?: string;
    odem_kornea_24?: string;
    odem_kornea_25?: string;
    odem_kornea_26?: string;
    odem_kornea_27?: string;
    odem_kornea_28?: string;
    odem_kornea_29?: string;
    odem_kornea_30?: string;
    odem_kornea_31?: string;
    flare_0?: string;
    flare_1?: string;
    flare_2?: string;
    flare_3?: string;
    flare_4?: string;
    flare_5?: string;
    flare_6?: string;
    flare_7?: string;
    flare_8?: string;
    flare_9?: string;
    flare_10?: string;
    flare_11?: string;
    flare_12?: string;
    flare_13?: string;
    flare_14?: string;
    flare_15?: string;
    flare_16?: string;
    flare_17?: string;
    flare_18?: string;
    flare_19?: string;
    flare_20?: string;
    flare_21?: string;
    flare_22?: string;
    flare_23?: string;
    flare_24?: string;
    flare_25?: string;
    flare_26?: string;
    flare_27?: string;
    flare_28?: string;
    flare_29?: string;
    flare_30?: string;
    flare_31?: string;
    hipopion_0?: string;
    hipopion_1?: string;
    hipopion_2?: string;
    hipopion_3?: string;
    hipopion_4?: string;
    hipopion_5?: string;
    hipopion_6?: string;
    hipopion_7?: string;
    hipopion_8?: string;
    hipopion_9?: string;
    hipopion_10?: string;
    hipopion_11?: string;
    hipopion_12?: string;
    hipopion_13?: string;
    hipopion_14?: string;
    hipopion_15?: string;
    hipopion_16?: string;
    hipopion_17?: string;
    hipopion_18?: string;
    hipopion_19?: string;
    hipopion_20?: string;
    hipopion_21?: string;
    hipopion_22?: string;
    hipopion_23?: string;
    hipopion_24?: string;
    hipopion_25?: string;
    hipopion_26?: string;
    hipopion_27?: string;
    hipopion_28?: string;
    hipopion_29?: string;
    hipopion_30?: string;
    hipopion_31?: string;
    membran_0?: string;
    membran_1?: string;
    membran_2?: string;
    membran_3?: string;
    membran_4?: string;
    membran_5?: string;
    membran_6?: string;
    membran_7?: string;
    membran_8?: string;
    membran_9?: string;
    membran_10?: string;
    membran_11?: string;
    membran_12?: string;
    membran_13?: string;
    membran_14?: string;
    membran_15?: string;
    membran_16?: string;
    membran_17?: string;
    membran_18?: string;
    membran_19?: string;
    membran_20?: string;
    membran_21?: string;
    membran_22?: string;
    membran_23?: string;
    membran_24?: string;
    membran_25?: string;
    membran_26?: string;
    membran_27?: string;
    membran_28?: string;
    membran_29?: string;
    membran_30?: string;
    membran_31?: string;
    pupil_tidak_bulat_0?: string;
    pupil_tidak_bulat_1?: string;
    pupil_tidak_bulat_2?: string;
    pupil_tidak_bulat_3?: string;
    pupil_tidak_bulat_4?: string;
    pupil_tidak_bulat_5?: string;
    pupil_tidak_bulat_6?: string;
    pupil_tidak_bulat_7?: string;
    pupil_tidak_bulat_8?: string;
    pupil_tidak_bulat_9?: string;
    pupil_tidak_bulat_10?: string;
    pupil_tidak_bulat_11?: string;
    pupil_tidak_bulat_12?: string;
    pupil_tidak_bulat_13?: string;
    pupil_tidak_bulat_14?: string;
    pupil_tidak_bulat_15?: string;
    pupil_tidak_bulat_16?: string;
    pupil_tidak_bulat_17?: string;
    pupil_tidak_bulat_18?: string;
    pupil_tidak_bulat_19?: string;
    pupil_tidak_bulat_20?: string;
    pupil_tidak_bulat_21?: string;
    pupil_tidak_bulat_22?: string;
    pupil_tidak_bulat_23?: string;
    pupil_tidak_bulat_24?: string;
    pupil_tidak_bulat_25?: string;
    pupil_tidak_bulat_26?: string;
    pupil_tidak_bulat_27?: string;
    pupil_tidak_bulat_28?: string;
    pupil_tidak_bulat_29?: string;
    pupil_tidak_bulat_30?: string;
    pupil_tidak_bulat_31?: string;
    kekeruhan_vitreus_0?: string;
    kekeruhan_vitreus_1?: string;
    kekeruhan_vitreus_2?: string;
    kekeruhan_vitreus_3?: string;
    kekeruhan_vitreus_4?: string;
    kekeruhan_vitreus_5?: string;
    kekeruhan_vitreus_6?: string;
    kekeruhan_vitreus_7?: string;
    kekeruhan_vitreus_8?: string;
    kekeruhan_vitreus_9?: string;
    kekeruhan_vitreus_10?: string;
    kekeruhan_vitreus_11?: string;
    kekeruhan_vitreus_12?: string;
    kekeruhan_vitreus_13?: string;
    kekeruhan_vitreus_14?: string;
    kekeruhan_vitreus_15?: string;
    kekeruhan_vitreus_16?: string;
    kekeruhan_vitreus_17?: string;
    kekeruhan_vitreus_18?: string;
    kekeruhan_vitreus_19?: string;
    kekeruhan_vitreus_20?: string;
    kekeruhan_vitreus_21?: string;
    kekeruhan_vitreus_22?: string;
    kekeruhan_vitreus_23?: string;
    kekeruhan_vitreus_24?: string;
    kekeruhan_vitreus_25?: string;
    kekeruhan_vitreus_26?: string;
    kekeruhan_vitreus_27?: string;
    kekeruhan_vitreus_28?: string;
    kekeruhan_vitreus_29?: string;
    kekeruhan_vitreus_30?: string;
    kekeruhan_vitreus_31?: string;
    kultur_0?: string;
    kultur_1?: string;
    kultur_2?: string;
    kultur_3?: string;
    kultur_4?: string;
    kultur_5?: string;
    kultur_6?: string;
    kultur_7?: string;
    kultur_8?: string;
    kultur_9?: string;
    kultur_10?: string;
    kultur_11?: string;
    kultur_12?: string;
    kultur_13?: string;
    kultur_14?: string;
    kultur_15?: string;
    kultur_16?: string;
    kultur_17?: string;
    kultur_18?: string;
    kultur_19?: string;
    kultur_20?: string;
    kultur_21?: string;
    kultur_22?: string;
    kultur_23?: string;
    kultur_24?: string;
    kultur_25?: string;
    kultur_26?: string;
    kultur_27?: string;
    kultur_28?: string;
    kultur_29?: string;
    kultur_30?: string;
    kultur_31?: string;
    dx_endoftalmitis_0?: string;
    dx_endoftalmitis_1?: string;
    dx_endoftalmitis_2?: string;
    dx_endoftalmitis_3?: string;
    dx_endoftalmitis_4?: string;
    dx_endoftalmitis_5?: string;
    dx_endoftalmitis_6?: string;
    dx_endoftalmitis_7?: string;
    dx_endoftalmitis_8?: string;
    dx_endoftalmitis_9?: string;
    dx_endoftalmitis_10?: string;
    dx_endoftalmitis_11?: string;
    dx_endoftalmitis_12?: string;
    dx_endoftalmitis_13?: string;
    dx_endoftalmitis_14?: string;
    dx_endoftalmitis_15?: string;
    dx_endoftalmitis_16?: string;
    dx_endoftalmitis_17?: string;
    dx_endoftalmitis_18?: string;
    dx_endoftalmitis_19?: string;
    dx_endoftalmitis_20?: string;
    dx_endoftalmitis_21?: string;
    dx_endoftalmitis_22?: string;
    dx_endoftalmitis_23?: string;
    dx_endoftalmitis_24?: string;
    dx_endoftalmitis_25?: string;
    dx_endoftalmitis_26?: string;
    dx_endoftalmitis_27?: string;
    dx_endoftalmitis_28?: string;
    dx_endoftalmitis_29?: string;
    dx_endoftalmitis_30?: string;
    dx_endoftalmitis_31?: string;
    ket_1_1?: string;
    ket_1_2?: string;
    ket_1_3?: string;
    ket_1_4?: string;
    ket_1_5?: string;
    ket_1_6?: string;
    ket_1_7?: string;
    ket_1_8?: string;
    ket_1_9?: string;
    ket_1_10?: string;
    ket_1_11?: string;
    ket_1_12?: string;
    ket_1_13?: string;
    ket_1_14?: string;
    ket_1_15?: string;
    ket_1_16?: string;
    ket_2_17?: string;
    ket_2_18?: string;
    ket_2_19?: string;
    ket_2_20?: string;
    ket_2_21?: string;
    ket_2_22?: string;
    ket_2_23?: string;
    ket_2_24?: string;
    ket_2_25?: string;
    ket_2_26?: string;
    ket_2_27?: string;
    ket_2_28?: string;
    ket_2_29?: string;
    ket_2_30?: string;
    ket_2_31?: string;
    ket_2_32?: string;
    date: string;
    time: string;
    Tanda_Tangan_Perawat_IPCLN: string;
    nik: string;
  }
}

export class PdfHaisInfectionSurveillanceRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string;
    'pasien.Tgl_Lahir': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    ruangan_hais: string;
    jenis_kelamin_laki: string;
    jenis_kelamin_perempuan: string;
    tanggal_berobat: string;
    diagnosa_masuk: string;
    alasan_masuk_rumah: string;
    alasan_masuk_rujukan: string;
    vena_sentral: string;
    vena_perifer: string;
    lokasi_1: string;
    lokasi_2: string;
    mulai_1: string;
    mulai_2: string;
    sampai_1: string;
    sampai_2: string;
    sum_1: string;
    sum_2: string;
    infeksi_1: string;
    infeksi_2: string;
    catatan_1: string;
    catatan_2: string;
    tindakan_alkes_lain: string;
    lokasi_3: string;
    mulai_3: string;
    sampai_3: string;
    sum_3: string;
    infeksi_3: string;
    catatan_3: string;
    hbs_positif: string;
    hbs_negatif: string;
    hbs_tidak: string;
    hcv_positif: string;
    hcv_negatif: string;
    hcv_tidak: string;
    hiv_positif: string;
    hiv_negatif: string;
    hiv_tidak: string;
    penyakit_lain: string;
    lab_leukocyt: string;
    lab_led: string;
    lab_lain_lain: string;
    hasil_radiologi: string;
    merokok_ya: string;
    merokok_tidak: string;
    steroid_ya: string;
    steroid_tidak: string;
    operasi_ya: string;
    operasi_tidak: string;
    pengencer_ya: string;
    pengencer_tidak: string;
    mandi_ya: string;
    mandi_tidak: string;
    makeup_ya: string;
    makeup_tidak: string;
    gula_201: string;
    gula_199: string;
    suhu_39: string;
    suhu_37: string;
    infeksi_mata: string;
    infeksi_tht: string;
    infeksi_mulut_gigi: string;
    infeksi_paru: string;
    infeksi_kulit: string;
    infeksi_gi_track: string;
    checkbox_infeksi_lain: string;
    infeksi_lainnya: string;
    saat_ini_dm: string;
    saat_ini_hipertensi: string;
    saat_ini_ggk: string;
    saat_ini_sepsis: string;
    riwayat_pasien_sekarang: string;
    jenis_cito: string;
    jenis_elektif: string;
    asa_1: string;
    asa_2: string;
    asa_3: string;
    asa_4: string;
    asa_5: string;
    anestesi_ga: string;
    anestesi_lokal: string;
    operator_anestesi: string;
    kelembapan_udara: string;
    suhu_ruangan: string;
    komplikasi_ya: string;
    komplikasi_tidak: string;
    profilaksis_ya: string;
    profilaksis_tidak: string;
    obat_profilaksis: string;
    antibiotik_ya: string;
    antibiotik_tidak: string;
    obat_antibiotik: string;
    dosis: string;
    jam_diberikan: string;
    probe_laser: string;
    tubing_vitrectomy: string;
    desinfeksi_chlorhexidine: string;
    desinfeksi_povidone: string;
    desinfeksi_alkohol: string;
    jahitan_ya: string;
    jahitan_tidak: string;
    indikator_luar: string;
    indikator_dalam: string;
    indikator_tidak_ada: string;
    sterilisasi_ya: string;
    sterilisasi_tidak: string;
    inisial_dr: string;
    asisten_op: string;
    urutan_op: string;
    implant_ya: string;
    implant_tidak: string;
    lama_op: string;
    ruang_op_1: string;
    ruang_op_2: string;
    ruang_op_3: string;
    ruang_op_4: string;
    klasifikasi_1: string;
    klasifikasi_2: string;
    klasifikasi_3: string;
    klasifikasi_4: string;
    prosedur_op: string;
    kualifikasi_dokter_bedah: string;
    jumlah_staf: string;
    diagnosa_akhir: string;
    tanggal_pasien_keluar: string;
    keluar_pulang: string;
    keluar_meninggal: string;
    keluar_pindah: string;
    pindah_faskes: string;
    ttd_perawat: string;
    ttd_ipcn: string;
    nama_perawat_penanggungjawab: string;
    nama_perawat_ipcn: string;
    tgl_0?: string;
    tgl_1?: string;
    tgl_2?: string;
    tgl_3?: string;
    tgl_4?: string;
    tgl_5?: string;
    tgl_6?: string;
    tgl_7?: string;
    tgl_8?: string;
    tgl_9?: string;
    tgl_10?: string;
    tgl_11?: string;
    tgl_12?: string;
    tgl_13?: string;
    tgl_14?: string;
    tgl_15?: string;
    tgl_16?: string;
    tgl_17?: string;
    tgl_18?: string;
    tgl_19?: string;
    tgl_20?: string;
    tgl_21?: string;
    tgl_22?: string;
    tgl_23?: string;
    tgl_24?: string;
    tgl_25?: string;
    tgl_26?: string;
    tgl_27?: string;
    tgl_28?: string;
    tgl_29?: string;
    tgl_30?: string;
    tgl_31?: string;
    krs_0?: string;
    krs_1?: string;
    krs_2?: string;
    krs_3?: string;
    krs_4?: string;
    krs_5?: string;
    krs_6?: string;
    krs_7?: string;
    krs_8?: string;
    krs_9?: string;
    krs_10?: string;
    krs_11?: string;
    krs_12?: string;
    krs_13?: string;
    krs_14?: string;
    krs_15?: string;
    krs_16?: string;
    krs_17?: string;
    krs_18?: string;
    krs_19?: string;
    krs_20?: string;
    krs_21?: string;
    krs_22?: string;
    krs_23?: string;
    krs_24?: string;
    krs_25?: string;
    krs_26?: string;
    krs_27?: string;
    krs_28?: string;
    krs_29?: string;
    krs_30?: string;
    krs_31?: string;
    kontrol_0?: string;
    kontrol_1?: string;
    kontrol_2?: string;
    kontrol_3?: string;
    kontrol_4?: string;
    kontrol_5?: string;
    kontrol_6?: string;
    kontrol_7?: string;
    kontrol_8?: string;
    kontrol_9?: string;
    kontrol_10?: string;
    kontrol_11?: string;
    kontrol_12?: string;
    kontrol_13?: string;
    kontrol_14?: string;
    kontrol_15?: string;
    kontrol_16?: string;
    kontrol_17?: string;
    kontrol_18?: string;
    kontrol_19?: string;
    kontrol_20?: string;
    kontrol_21?: string;
    kontrol_22?: string;
    kontrol_23?: string;
    kontrol_24?: string;
    kontrol_25?: string;
    kontrol_26?: string;
    kontrol_27?: string;
    kontrol_28?: string;
    kontrol_29?: string;
    kontrol_30?: string;
    kontrol_31?: string;
    kasa_0?: string;
    kasa_1?: string;
    kasa_2?: string;
    kasa_3?: string;
    kasa_4?: string;
    kasa_5?: string;
    kasa_6?: string;
    kasa_7?: string;
    kasa_8?: string;
    kasa_9?: string;
    kasa_10?: string;
    kasa_11?: string;
    kasa_12?: string;
    kasa_13?: string;
    kasa_14?: string;
    kasa_15?: string;
    kasa_16?: string;
    kasa_17?: string;
    kasa_18?: string;
    kasa_19?: string;
    kasa_20?: string;
    kasa_21?: string;
    kasa_22?: string;
    kasa_23?: string;
    kasa_24?: string;
    kasa_25?: string;
    kasa_26?: string;
    kasa_27?: string;
    kasa_28?: string;
    kasa_29?: string;
    kasa_30?: string;
    kasa_31?: string;
    eyeshild_0?: string;
    eyeshild_1?: string;
    eyeshild_2?: string;
    eyeshild_3?: string;
    eyeshild_4?: string;
    eyeshild_5?: string;
    eyeshild_6?: string;
    eyeshild_7?: string;
    eyeshild_8?: string;
    eyeshild_9?: string;
    eyeshild_10?: string;
    eyeshild_11?: string;
    eyeshild_12?: string;
    eyeshild_13?: string;
    eyeshild_14?: string;
    eyeshild_15?: string;
    eyeshild_16?: string;
    eyeshild_17?: string;
    eyeshild_18?: string;
    eyeshild_19?: string;
    eyeshild_20?: string;
    eyeshild_21?: string;
    eyeshild_22?: string;
    eyeshild_23?: string;
    eyeshild_24?: string;
    eyeshild_25?: string;
    eyeshild_26?: string;
    eyeshild_27?: string;
    eyeshild_28?: string;
    eyeshild_29?: string;
    eyeshild_30?: string;
    eyeshild_31?: string;
    antibiotik_topical_0?: string;
    antibiotik_topical_1?: string;
    antibiotik_topical_2?: string;
    antibiotik_topical_3?: string;
    antibiotik_topical_4?: string;
    antibiotik_topical_5?: string;
    antibiotik_topical_6?: string;
    antibiotik_topical_7?: string;
    antibiotik_topical_8?: string;
    antibiotik_topical_9?: string;
    antibiotik_topical_10?: string;
    antibiotik_topical_11?: string;
    antibiotik_topical_12?: string;
    antibiotik_topical_13?: string;
    antibiotik_topical_14?: string;
    antibiotik_topical_15?: string;
    antibiotik_topical_16?: string;
    antibiotik_topical_17?: string;
    antibiotik_topical_18?: string;
    antibiotik_topical_19?: string;
    antibiotik_topical_20?: string;
    antibiotik_topical_21?: string;
    antibiotik_topical_22?: string;
    antibiotik_topical_23?: string;
    antibiotik_topical_24?: string;
    antibiotik_topical_25?: string;
    antibiotik_topical_26?: string;
    antibiotik_topical_27?: string;
    antibiotik_topical_28?: string;
    antibiotik_topical_29?: string;
    antibiotik_topical_30?: string;
    antibiotik_topical_31?: string;
    antibiotik_oral_0?: string;
    antibiotik_oral_1?: string;
    antibiotik_oral_2?: string;
    antibiotik_oral_3?: string;
    antibiotik_oral_4?: string;
    antibiotik_oral_5?: string;
    antibiotik_oral_6?: string;
    antibiotik_oral_7?: string;
    antibiotik_oral_8?: string;
    antibiotik_oral_9?: string;
    antibiotik_oral_10?: string;
    antibiotik_oral_11?: string;
    antibiotik_oral_12?: string;
    antibiotik_oral_13?: string;
    antibiotik_oral_14?: string;
    antibiotik_oral_15?: string;
    antibiotik_oral_16?: string;
    antibiotik_oral_17?: string;
    antibiotik_oral_18?: string;
    antibiotik_oral_19?: string;
    antibiotik_oral_20?: string;
    antibiotik_oral_21?: string;
    antibiotik_oral_22?: string;
    antibiotik_oral_23?: string;
    antibiotik_oral_24?: string;
    antibiotik_oral_25?: string;
    antibiotik_oral_26?: string;
    antibiotik_oral_27?: string;
    antibiotik_oral_28?: string;
    antibiotik_oral_29?: string;
    antibiotik_oral_30?: string;
    antibiotik_oral_31?: string;
    mata_kena_air_0?: string;
    mata_kena_air_1?: string;
    mata_kena_air_2?: string;
    mata_kena_air_3?: string;
    mata_kena_air_4?: string;
    mata_kena_air_5?: string;
    mata_kena_air_6?: string;
    mata_kena_air_7?: string;
    mata_kena_air_8?: string;
    mata_kena_air_9?: string;
    mata_kena_air_10?: string;
    mata_kena_air_11?: string;
    mata_kena_air_12?: string;
    mata_kena_air_13?: string;
    mata_kena_air_14?: string;
    mata_kena_air_15?: string;
    mata_kena_air_16?: string;
    mata_kena_air_17?: string;
    mata_kena_air_18?: string;
    mata_kena_air_19?: string;
    mata_kena_air_20?: string;
    mata_kena_air_21?: string;
    mata_kena_air_22?: string;
    mata_kena_air_23?: string;
    mata_kena_air_24?: string;
    mata_kena_air_25?: string;
    mata_kena_air_26?: string;
    mata_kena_air_27?: string;
    mata_kena_air_28?: string;
    mata_kena_air_29?: string;
    mata_kena_air_30?: string;
    mata_kena_air_31?: string;
    mata_kena_asap_0?: string;
    mata_kena_asap_1?: string;
    mata_kena_asap_2?: string;
    mata_kena_asap_3?: string;
    mata_kena_asap_4?: string;
    mata_kena_asap_5?: string;
    mata_kena_asap_6?: string;
    mata_kena_asap_7?: string;
    mata_kena_asap_8?: string;
    mata_kena_asap_9?: string;
    mata_kena_asap_10?: string;
    mata_kena_asap_11?: string;
    mata_kena_asap_12?: string;
    mata_kena_asap_13?: string;
    mata_kena_asap_14?: string;
    mata_kena_asap_15?: string;
    mata_kena_asap_16?: string;
    mata_kena_asap_17?: string;
    mata_kena_asap_18?: string;
    mata_kena_asap_19?: string;
    mata_kena_asap_20?: string;
    mata_kena_asap_21?: string;
    mata_kena_asap_22?: string;
    mata_kena_asap_23?: string;
    mata_kena_asap_24?: string;
    mata_kena_asap_25?: string;
    mata_kena_asap_26?: string;
    mata_kena_asap_27?: string;
    mata_kena_asap_28?: string;
    mata_kena_asap_29?: string;
    mata_kena_asap_30?: string;
    mata_kena_asap_31?: string;
    mata_kena_debu_0?: string;
    mata_kena_debu_1?: string;
    mata_kena_debu_2?: string;
    mata_kena_debu_3?: string;
    mata_kena_debu_4?: string;
    mata_kena_debu_5?: string;
    mata_kena_debu_6?: string;
    mata_kena_debu_7?: string;
    mata_kena_debu_8?: string;
    mata_kena_debu_9?: string;
    mata_kena_debu_10?: string;
    mata_kena_debu_11?: string;
    mata_kena_debu_12?: string;
    mata_kena_debu_13?: string;
    mata_kena_debu_14?: string;
    mata_kena_debu_15?: string;
    mata_kena_debu_16?: string;
    mata_kena_debu_17?: string;
    mata_kena_debu_18?: string;
    mata_kena_debu_19?: string;
    mata_kena_debu_20?: string;
    mata_kena_debu_21?: string;
    mata_kena_debu_22?: string;
    mata_kena_debu_23?: string;
    mata_kena_debu_24?: string;
    mata_kena_debu_25?: string;
    mata_kena_debu_26?: string;
    mata_kena_debu_27?: string;
    mata_kena_debu_28?: string;
    mata_kena_debu_29?: string;
    mata_kena_debu_30?: string;
    mata_kena_debu_31?: string;
    gda_0?: string;
    gda_1?: string;
    gda_2?: string;
    gda_3?: string;
    gda_4?: string;
    gda_5?: string;
    gda_6?: string;
    gda_7?: string;
    gda_8?: string;
    gda_9?: string;
    gda_10?: string;
    gda_11?: string;
    gda_12?: string;
    gda_13?: string;
    gda_14?: string;
    gda_15?: string;
    gda_16?: string;
    gda_17?: string;
    gda_18?: string;
    gda_19?: string;
    gda_20?: string;
    gda_21?: string;
    gda_22?: string;
    gda_23?: string;
    gda_24?: string;
    gda_25?: string;
    gda_26?: string;
    gda_27?: string;
    gda_28?: string;
    gda_29?: string;
    gda_30?: string;
    gda_31?: string;
    kabur_0?: string;
    kabur_1?: string;
    kabur_2?: string;
    kabur_3?: string;
    kabur_4?: string;
    kabur_5?: string;
    kabur_6?: string;
    kabur_7?: string;
    kabur_8?: string;
    kabur_9?: string;
    kabur_10?: string;
    kabur_11?: string;
    kabur_12?: string;
    kabur_13?: string;
    kabur_14?: string;
    kabur_15?: string;
    kabur_16?: string;
    kabur_17?: string;
    kabur_18?: string;
    kabur_19?: string;
    kabur_20?: string;
    kabur_21?: string;
    kabur_22?: string;
    kabur_23?: string;
    kabur_24?: string;
    kabur_25?: string;
    kabur_26?: string;
    kabur_27?: string;
    kabur_28?: string;
    kabur_29?: string;
    kabur_30?: string;
    kabur_31?: string;
    mata_merah_0?: string;
    mata_merah_1?: string;
    mata_merah_2?: string;
    mata_merah_3?: string;
    mata_merah_4?: string;
    mata_merah_5?: string;
    mata_merah_6?: string;
    mata_merah_7?: string;
    mata_merah_8?: string;
    mata_merah_9?: string;
    mata_merah_10?: string;
    mata_merah_11?: string;
    mata_merah_12?: string;
    mata_merah_13?: string;
    mata_merah_14?: string;
    mata_merah_15?: string;
    mata_merah_16?: string;
    mata_merah_17?: string;
    mata_merah_18?: string;
    mata_merah_19?: string;
    mata_merah_20?: string;
    mata_merah_21?: string;
    mata_merah_22?: string;
    mata_merah_23?: string;
    mata_merah_24?: string;
    mata_merah_25?: string;
    mata_merah_26?: string;
    mata_merah_27?: string;
    mata_merah_28?: string;
    mata_merah_29?: string;
    mata_merah_30?: string;
    mata_merah_31?: string;
    nyeri_0?: string;
    nyeri_1?: string;
    nyeri_2?: string;
    nyeri_3?: string;
    nyeri_4?: string;
    nyeri_5?: string;
    nyeri_6?: string;
    nyeri_7?: string;
    nyeri_8?: string;
    nyeri_9?: string;
    nyeri_10?: string;
    nyeri_11?: string;
    nyeri_12?: string;
    nyeri_13?: string;
    nyeri_14?: string;
    nyeri_15?: string;
    nyeri_16?: string;
    nyeri_17?: string;
    nyeri_18?: string;
    nyeri_19?: string;
    nyeri_20?: string;
    nyeri_21?: string;
    nyeri_22?: string;
    nyeri_23?: string;
    nyeri_24?: string;
    nyeri_25?: string;
    nyeri_26?: string;
    nyeri_27?: string;
    nyeri_28?: string;
    nyeri_29?: string;
    nyeri_30?: string;
    nyeri_31?: string;
    tio_0?: string;
    tio_1?: string;
    tio_2?: string;
    tio_3?: string;
    tio_4?: string;
    tio_5?: string;
    tio_6?: string;
    tio_7?: string;
    tio_8?: string;
    tio_9?: string;
    tio_10?: string;
    tio_11?: string;
    tio_12?: string;
    tio_13?: string;
    tio_14?: string;
    tio_15?: string;
    tio_16?: string;
    tio_17?: string;
    tio_18?: string;
    tio_19?: string;
    tio_20?: string;
    tio_21?: string;
    tio_22?: string;
    tio_23?: string;
    tio_24?: string;
    tio_25?: string;
    tio_26?: string;
    tio_27?: string;
    tio_28?: string;
    tio_29?: string;
    tio_30?: string;
    tio_31?: string;
    odem_kornea_0?: string;
    odem_kornea_1?: string;
    odem_kornea_2?: string;
    odem_kornea_3?: string;
    odem_kornea_4?: string;
    odem_kornea_5?: string;
    odem_kornea_6?: string;
    odem_kornea_7?: string;
    odem_kornea_8?: string;
    odem_kornea_9?: string;
    odem_kornea_10?: string;
    odem_kornea_11?: string;
    odem_kornea_12?: string;
    odem_kornea_13?: string;
    odem_kornea_14?: string;
    odem_kornea_15?: string;
    odem_kornea_16?: string;
    odem_kornea_17?: string;
    odem_kornea_18?: string;
    odem_kornea_19?: string;
    odem_kornea_20?: string;
    odem_kornea_21?: string;
    odem_kornea_22?: string;
    odem_kornea_23?: string;
    odem_kornea_24?: string;
    odem_kornea_25?: string;
    odem_kornea_26?: string;
    odem_kornea_27?: string;
    odem_kornea_28?: string;
    odem_kornea_29?: string;
    odem_kornea_30?: string;
    odem_kornea_31?: string;
    flare_0?: string;
    flare_1?: string;
    flare_2?: string;
    flare_3?: string;
    flare_4?: string;
    flare_5?: string;
    flare_6?: string;
    flare_7?: string;
    flare_8?: string;
    flare_9?: string;
    flare_10?: string;
    flare_11?: string;
    flare_12?: string;
    flare_13?: string;
    flare_14?: string;
    flare_15?: string;
    flare_16?: string;
    flare_17?: string;
    flare_18?: string;
    flare_19?: string;
    flare_20?: string;
    flare_21?: string;
    flare_22?: string;
    flare_23?: string;
    flare_24?: string;
    flare_25?: string;
    flare_26?: string;
    flare_27?: string;
    flare_28?: string;
    flare_29?: string;
    flare_30?: string;
    flare_31?: string;
    hipopion_0?: string;
    hipopion_1?: string;
    hipopion_2?: string;
    hipopion_3?: string;
    hipopion_4?: string;
    hipopion_5?: string;
    hipopion_6?: string;
    hipopion_7?: string;
    hipopion_8?: string;
    hipopion_9?: string;
    hipopion_10?: string;
    hipopion_11?: string;
    hipopion_12?: string;
    hipopion_13?: string;
    hipopion_14?: string;
    hipopion_15?: string;
    hipopion_16?: string;
    hipopion_17?: string;
    hipopion_18?: string;
    hipopion_19?: string;
    hipopion_20?: string;
    hipopion_21?: string;
    hipopion_22?: string;
    hipopion_23?: string;
    hipopion_24?: string;
    hipopion_25?: string;
    hipopion_26?: string;
    hipopion_27?: string;
    hipopion_28?: string;
    hipopion_29?: string;
    hipopion_30?: string;
    hipopion_31?: string;
    membran_0?: string;
    membran_1?: string;
    membran_2?: string;
    membran_3?: string;
    membran_4?: string;
    membran_5?: string;
    membran_6?: string;
    membran_7?: string;
    membran_8?: string;
    membran_9?: string;
    membran_10?: string;
    membran_11?: string;
    membran_12?: string;
    membran_13?: string;
    membran_14?: string;
    membran_15?: string;
    membran_16?: string;
    membran_17?: string;
    membran_18?: string;
    membran_19?: string;
    membran_20?: string;
    membran_21?: string;
    membran_22?: string;
    membran_23?: string;
    membran_24?: string;
    membran_25?: string;
    membran_26?: string;
    membran_27?: string;
    membran_28?: string;
    membran_29?: string;
    membran_30?: string;
    membran_31?: string;
    pupil_tidak_bulat_0?: string;
    pupil_tidak_bulat_1?: string;
    pupil_tidak_bulat_2?: string;
    pupil_tidak_bulat_3?: string;
    pupil_tidak_bulat_4?: string;
    pupil_tidak_bulat_5?: string;
    pupil_tidak_bulat_6?: string;
    pupil_tidak_bulat_7?: string;
    pupil_tidak_bulat_8?: string;
    pupil_tidak_bulat_9?: string;
    pupil_tidak_bulat_10?: string;
    pupil_tidak_bulat_11?: string;
    pupil_tidak_bulat_12?: string;
    pupil_tidak_bulat_13?: string;
    pupil_tidak_bulat_14?: string;
    pupil_tidak_bulat_15?: string;
    pupil_tidak_bulat_16?: string;
    pupil_tidak_bulat_17?: string;
    pupil_tidak_bulat_18?: string;
    pupil_tidak_bulat_19?: string;
    pupil_tidak_bulat_20?: string;
    pupil_tidak_bulat_21?: string;
    pupil_tidak_bulat_22?: string;
    pupil_tidak_bulat_23?: string;
    pupil_tidak_bulat_24?: string;
    pupil_tidak_bulat_25?: string;
    pupil_tidak_bulat_26?: string;
    pupil_tidak_bulat_27?: string;
    pupil_tidak_bulat_28?: string;
    pupil_tidak_bulat_29?: string;
    pupil_tidak_bulat_30?: string;
    pupil_tidak_bulat_31?: string;
    kekeruhan_vitreus_0?: string;
    kekeruhan_vitreus_1?: string;
    kekeruhan_vitreus_2?: string;
    kekeruhan_vitreus_3?: string;
    kekeruhan_vitreus_4?: string;
    kekeruhan_vitreus_5?: string;
    kekeruhan_vitreus_6?: string;
    kekeruhan_vitreus_7?: string;
    kekeruhan_vitreus_8?: string;
    kekeruhan_vitreus_9?: string;
    kekeruhan_vitreus_10?: string;
    kekeruhan_vitreus_11?: string;
    kekeruhan_vitreus_12?: string;
    kekeruhan_vitreus_13?: string;
    kekeruhan_vitreus_14?: string;
    kekeruhan_vitreus_15?: string;
    kekeruhan_vitreus_16?: string;
    kekeruhan_vitreus_17?: string;
    kekeruhan_vitreus_18?: string;
    kekeruhan_vitreus_19?: string;
    kekeruhan_vitreus_20?: string;
    kekeruhan_vitreus_21?: string;
    kekeruhan_vitreus_22?: string;
    kekeruhan_vitreus_23?: string;
    kekeruhan_vitreus_24?: string;
    kekeruhan_vitreus_25?: string;
    kekeruhan_vitreus_26?: string;
    kekeruhan_vitreus_27?: string;
    kekeruhan_vitreus_28?: string;
    kekeruhan_vitreus_29?: string;
    kekeruhan_vitreus_30?: string;
    kekeruhan_vitreus_31?: string;
    kultur_0?: string;
    kultur_1?: string;
    kultur_2?: string;
    kultur_3?: string;
    kultur_4?: string;
    kultur_5?: string;
    kultur_6?: string;
    kultur_7?: string;
    kultur_8?: string;
    kultur_9?: string;
    kultur_10?: string;
    kultur_11?: string;
    kultur_12?: string;
    kultur_13?: string;
    kultur_14?: string;
    kultur_15?: string;
    kultur_16?: string;
    kultur_17?: string;
    kultur_18?: string;
    kultur_19?: string;
    kultur_20?: string;
    kultur_21?: string;
    kultur_22?: string;
    kultur_23?: string;
    kultur_24?: string;
    kultur_25?: string;
    kultur_26?: string;
    kultur_27?: string;
    kultur_28?: string;
    kultur_29?: string;
    kultur_30?: string;
    kultur_31?: string;
    dx_endoftalmitis_0?: string;
    dx_endoftalmitis_1?: string;
    dx_endoftalmitis_2?: string;
    dx_endoftalmitis_3?: string;
    dx_endoftalmitis_4?: string;
    dx_endoftalmitis_5?: string;
    dx_endoftalmitis_6?: string;
    dx_endoftalmitis_7?: string;
    dx_endoftalmitis_8?: string;
    dx_endoftalmitis_9?: string;
    dx_endoftalmitis_10?: string;
    dx_endoftalmitis_11?: string;
    dx_endoftalmitis_12?: string;
    dx_endoftalmitis_13?: string;
    dx_endoftalmitis_14?: string;
    dx_endoftalmitis_15?: string;
    dx_endoftalmitis_16?: string;
    dx_endoftalmitis_17?: string;
    dx_endoftalmitis_18?: string;
    dx_endoftalmitis_19?: string;
    dx_endoftalmitis_20?: string;
    dx_endoftalmitis_21?: string;
    dx_endoftalmitis_22?: string;
    dx_endoftalmitis_23?: string;
    dx_endoftalmitis_24?: string;
    dx_endoftalmitis_25?: string;
    dx_endoftalmitis_26?: string;
    dx_endoftalmitis_27?: string;
    dx_endoftalmitis_28?: string;
    dx_endoftalmitis_29?: string;
    dx_endoftalmitis_30?: string;
    dx_endoftalmitis_31?: string;
    ket_1_1?: string;
    ket_1_2?: string;
    ket_1_3?: string;
    ket_1_4?: string;
    ket_1_5?: string;
    ket_1_6?: string;
    ket_1_7?: string;
    ket_1_8?: string;
    ket_1_9?: string;
    ket_1_10?: string;
    ket_1_11?: string;
    ket_1_12?: string;
    ket_1_13?: string;
    ket_1_14?: string;
    ket_1_15?: string;
    ket_1_16?: string;
    ket_2_17?: string;
    ket_2_18?: string;
    ket_2_19?: string;
    ket_2_20?: string;
    ket_2_21?: string;
    ket_2_22?: string;
    ket_2_23?: string;
    ket_2_24?: string;
    ket_2_25?: string;
    ket_2_26?: string;
    ket_2_27?: string;
    ket_2_28?: string;
    ket_2_29?: string;
    ket_2_30?: string;
    ket_2_31?: string;
    ket_2_32?: string;
    date: string;
    time: string;
    Tanda_Tangan_Perawat_IPCLN: string;
    nik: string;
  }

  constructor(req: IPdfHaisInfectionSurveillanceRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfHaisInfectionSurveillanceRequest) {
    return new PdfHaisInfectionSurveillanceRequest(json);
  }

  static createPdfRequest(formData: IHaisSurveillanceInfectionFormDetail, listData: Array<IHaisSurveillanceInfectionListDetail>, appReq: IAppRequest, treatment: ITreatmentModel): PdfHaisInfectionSurveillanceRequest {
    const lastIndex = listData.length && listData.length > 0 ? listData.length - 1 : undefined;
    const plusData: any = {}
    const dates = [
      'tgl_0',
      'tgl_1',
      'tgl_2',
      'tgl_3',
      'tgl_4',
      'tgl_5',
      'tgl_6',
      'tgl_7',
      'tgl_8',
      'tgl_9',
      'tgl_10',
      'tgl_11',
      'tgl_12',
      'tgl_13',
      'tgl_14',
      'tgl_15',
      'tgl_16',
      'tgl_17',
      'tgl_18',
      'tgl_19',
      'tgl_20',
      'tgl_21',
      'tgl_22',
      'tgl_23',
      'tgl_24',
      'tgl_25',
      'tgl_26',
      'tgl_27',
      'tgl_28',
      'tgl_29',
      'tgl_30',
      'tgl_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[dates[i]] = listData && listData[i] && listData[i].Waktu ? listData[i].Waktu.substring(0, 9) : ''
    }

    const krss = [
      'krs_0',
      'krs_1',
      'krs_2',
      'krs_3',
      'krs_4',
      'krs_5',
      'krs_6',
      'krs_7',
      'krs_8',
      'krs_9',
      'krs_10',
      'krs_11',
      'krs_12',
      'krs_13',
      'krs_14',
      'krs_15',
      'krs_16',
      'krs_17',
      'krs_18',
      'krs_19',
      'krs_20',
      'krs_21',
      'krs_22',
      'krs_23',
      'krs_24',
      'krs_25',
      'krs_26',
      'krs_27',
      'krs_28',
      'krs_29',
      'krs_30',
      'krs_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[krss[i]] = PdfHaisInfectionSurveillanceRequest.getCheckImageList(!!(listData && listData[i] && listData[i].KRS && listData[i].KRS === 1));
    }

    const controls = [
      'kontrol_0',
      'kontrol_1',
      'kontrol_2',
      'kontrol_3',
      'kontrol_4',
      'kontrol_5',
      'kontrol_6',
      'kontrol_7',
      'kontrol_8',
      'kontrol_9',
      'kontrol_10',
      'kontrol_11',
      'kontrol_12',
      'kontrol_13',
      'kontrol_14',
      'kontrol_15',
      'kontrol_16',
      'kontrol_17',
      'kontrol_18',
      'kontrol_19',
      'kontrol_20',
      'kontrol_21',
      'kontrol_22',
      'kontrol_23',
      'kontrol_24',
      'kontrol_25',
      'kontrol_26',
      'kontrol_27',
      'kontrol_28',
      'kontrol_29',
      'kontrol_30',
      'kontrol_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[controls[i]] = PdfHaisInfectionSurveillanceRequest.getCheckImageList(!!(listData && listData[i] && listData[i].Kontrol && listData[i].Kontrol === 1));
    }

    const kasas = [
      'kasa_0',
      'kasa_1',
      'kasa_2',
      'kasa_3',
      'kasa_4',
      'kasa_5',
      'kasa_6',
      'kasa_7',
      'kasa_8',
      'kasa_9',
      'kasa_10',
      'kasa_11',
      'kasa_12',
      'kasa_13',
      'kasa_14',
      'kasa_15',
      'kasa_16',
      'kasa_17',
      'kasa_18',
      'kasa_19',
      'kasa_20',
      'kasa_21',
      'kasa_22',
      'kasa_23',
      'kasa_24',
      'kasa_25',
      'kasa_26',
      'kasa_27',
      'kasa_28',
      'kasa_29',
      'kasa_30',
      'kasa_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[kasas[i]] = PdfHaisInfectionSurveillanceRequest.getCheckImageList(!!(listData && listData[i] && listData[i].Pelindung_Kasa && listData[i].Pelindung_Kasa === 1));
    }

    const eyeshields = [
      'eyeshild_0',
      'eyeshild_1',
      'eyeshild_2',
      'eyeshild_3',
      'eyeshild_4',
      'eyeshild_5',
      'eyeshild_6',
      'eyeshild_7',
      'eyeshild_8',
      'eyeshild_9',
      'eyeshild_10',
      'eyeshild_11',
      'eyeshild_12',
      'eyeshild_13',
      'eyeshild_14',
      'eyeshild_15',
      'eyeshild_16',
      'eyeshild_17',
      'eyeshild_18',
      'eyeshild_19',
      'eyeshild_20',
      'eyeshild_21',
      'eyeshild_22',
      'eyeshild_23',
      'eyeshild_24',
      'eyeshild_25',
      'eyeshild_26',
      'eyeshild_27',
      'eyeshild_28',
      'eyeshild_29',
      'eyeshild_30',
      'eyeshild_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[eyeshields[i]] = PdfHaisInfectionSurveillanceRequest.getCheckImageList(!!(listData && listData[i] && listData[i].Pelindung_Eyeshield && listData[i].Pelindung_Eyeshield === 1));
    }

    const antibioticTopics = [
      'antibiotik_topical_0',
      'antibiotik_topical_1',
      'antibiotik_topical_2',
      'antibiotik_topical_3',
      'antibiotik_topical_4',
      'antibiotik_topical_5',
      'antibiotik_topical_6',
      'antibiotik_topical_7',
      'antibiotik_topical_8',
      'antibiotik_topical_9',
      'antibiotik_topical_10',
      'antibiotik_topical_11',
      'antibiotik_topical_12',
      'antibiotik_topical_13',
      'antibiotik_topical_14',
      'antibiotik_topical_15',
      'antibiotik_topical_16',
      'antibiotik_topical_17',
      'antibiotik_topical_18',
      'antibiotik_topical_19',
      'antibiotik_topical_20',
      'antibiotik_topical_21',
      'antibiotik_topical_22',
      'antibiotik_topical_23',
      'antibiotik_topical_24',
      'antibiotik_topical_25',
      'antibiotik_topical_26',
      'antibiotik_topical_27',
      'antibiotik_topical_28',
      'antibiotik_topical_29',
      'antibiotik_topical_30',
      'antibiotik_topical_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[antibioticTopics[i]] = PdfHaisInfectionSurveillanceRequest.getCheckImageList(!!(listData && listData[i] && listData[i].Antibiotik_Topikal && listData[i].Antibiotik_Topikal === 1));
    }

    const antibioticOrals = [
      'antibiotik_oral_0',
      'antibiotik_oral_1',
      'antibiotik_oral_2',
      'antibiotik_oral_3',
      'antibiotik_oral_4',
      'antibiotik_oral_5',
      'antibiotik_oral_6',
      'antibiotik_oral_7',
      'antibiotik_oral_8',
      'antibiotik_oral_9',
      'antibiotik_oral_10',
      'antibiotik_oral_11',
      'antibiotik_oral_12',
      'antibiotik_oral_13',
      'antibiotik_oral_14',
      'antibiotik_oral_15',
      'antibiotik_oral_16',
      'antibiotik_oral_17',
      'antibiotik_oral_18',
      'antibiotik_oral_19',
      'antibiotik_oral_20',
      'antibiotik_oral_21',
      'antibiotik_oral_22',
      'antibiotik_oral_23',
      'antibiotik_oral_24',
      'antibiotik_oral_25',
      'antibiotik_oral_26',
      'antibiotik_oral_27',
      'antibiotik_oral_28',
      'antibiotik_oral_29',
      'antibiotik_oral_30',
      'antibiotik_oral_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[antibioticOrals[i]] = PdfHaisInfectionSurveillanceRequest.getCheckImageList(!!(listData && listData[i] && listData[i].Antibiotik_Oral && listData[i].Antibiotik_Oral === 1));
    }

    const eyeWaters = [
      'mata_kena_air_0',
      'mata_kena_air_1',
      'mata_kena_air_2',
      'mata_kena_air_3',
      'mata_kena_air_4',
      'mata_kena_air_5',
      'mata_kena_air_6',
      'mata_kena_air_7',
      'mata_kena_air_8',
      'mata_kena_air_9',
      'mata_kena_air_10',
      'mata_kena_air_11',
      'mata_kena_air_12',
      'mata_kena_air_13',
      'mata_kena_air_14',
      'mata_kena_air_15',
      'mata_kena_air_16',
      'mata_kena_air_17',
      'mata_kena_air_18',
      'mata_kena_air_19',
      'mata_kena_air_20',
      'mata_kena_air_21',
      'mata_kena_air_22',
      'mata_kena_air_23',
      'mata_kena_air_24',
      'mata_kena_air_25',
      'mata_kena_air_26',
      'mata_kena_air_27',
      'mata_kena_air_28',
      'mata_kena_air_29',
      'mata_kena_air_30',
      'mata_kena_air_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[eyeWaters[i]] = PdfHaisInfectionSurveillanceRequest.getCheckImageList(!!(listData && listData[i] && listData[i].Mata_Air && listData[i].Mata_Air === 1));
    }

    const eyeSmokes = [
      'mata_kena_asap_0',
      'mata_kena_asap_1',
      'mata_kena_asap_2',
      'mata_kena_asap_3',
      'mata_kena_asap_4',
      'mata_kena_asap_5',
      'mata_kena_asap_6',
      'mata_kena_asap_7',
      'mata_kena_asap_8',
      'mata_kena_asap_9',
      'mata_kena_asap_10',
      'mata_kena_asap_11',
      'mata_kena_asap_12',
      'mata_kena_asap_13',
      'mata_kena_asap_14',
      'mata_kena_asap_15',
      'mata_kena_asap_16',
      'mata_kena_asap_17',
      'mata_kena_asap_18',
      'mata_kena_asap_19',
      'mata_kena_asap_20',
      'mata_kena_asap_21',
      'mata_kena_asap_22',
      'mata_kena_asap_23',
      'mata_kena_asap_24',
      'mata_kena_asap_25',
      'mata_kena_asap_26',
      'mata_kena_asap_27',
      'mata_kena_asap_28',
      'mata_kena_asap_29',
      'mata_kena_asap_30',
      'mata_kena_asap_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[eyeSmokes[i]] = PdfHaisInfectionSurveillanceRequest.getCheckImageList(!!(listData && listData[i] && listData[i].Mata_Asap && listData[i].Mata_Asap === 1));
    }

    const eyeDusts = [
      'mata_kena_debu_0',
      'mata_kena_debu_1',
      'mata_kena_debu_2',
      'mata_kena_debu_3',
      'mata_kena_debu_4',
      'mata_kena_debu_5',
      'mata_kena_debu_6',
      'mata_kena_debu_7',
      'mata_kena_debu_8',
      'mata_kena_debu_9',
      'mata_kena_debu_10',
      'mata_kena_debu_11',
      'mata_kena_debu_12',
      'mata_kena_debu_13',
      'mata_kena_debu_14',
      'mata_kena_debu_15',
      'mata_kena_debu_16',
      'mata_kena_debu_17',
      'mata_kena_debu_18',
      'mata_kena_debu_19',
      'mata_kena_debu_20',
      'mata_kena_debu_21',
      'mata_kena_debu_22',
      'mata_kena_debu_23',
      'mata_kena_debu_24',
      'mata_kena_debu_25',
      'mata_kena_debu_26',
      'mata_kena_debu_27',
      'mata_kena_debu_28',
      'mata_kena_debu_29',
      'mata_kena_debu_30',
      'mata_kena_debu_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[eyeDusts[i]] = PdfHaisInfectionSurveillanceRequest.getCheckImageList(!!(listData && listData[i] && listData[i].Mata_Debu && listData[i].Mata_Debu === 1));
    }

    const gdas = [
      'gda_0',
      'gda_1',
      'gda_2',
      'gda_3',
      'gda_4',
      'gda_5',
      'gda_6',
      'gda_7',
      'gda_8',
      'gda_9',
      'gda_10',
      'gda_11',
      'gda_12',
      'gda_13',
      'gda_14',
      'gda_15',
      'gda_16',
      'gda_17',
      'gda_18',
      'gda_19',
      'gda_20',
      'gda_21',
      'gda_22',
      'gda_23',
      'gda_24',
      'gda_25',
      'gda_26',
      'gda_27',
      'gda_28',
      'gda_29',
      'gda_30',
      'gda_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[gdas[i]] = PdfHaisInfectionSurveillanceRequest.getCheckImageList(!!(listData && listData[i] && listData[i].GDA && listData[i].GDA === 1));
    }

    const blurs = [
      'kabur_0',
      'kabur_1',
      'kabur_2',
      'kabur_3',
      'kabur_4',
      'kabur_5',
      'kabur_6',
      'kabur_7',
      'kabur_8',
      'kabur_9',
      'kabur_10',
      'kabur_11',
      'kabur_12',
      'kabur_13',
      'kabur_14',
      'kabur_15',
      'kabur_16',
      'kabur_17',
      'kabur_18',
      'kabur_19',
      'kabur_20',
      'kabur_21',
      'kabur_22',
      'kabur_23',
      'kabur_24',
      'kabur_25',
      'kabur_26',
      'kabur_27',
      'kabur_28',
      'kabur_29',
      'kabur_30',
      'kabur_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[blurs[i]] = PdfHaisInfectionSurveillanceRequest.getCheckImageList(!!(listData && listData[i] && listData[i].IDO_Kabur && listData[i].IDO_Kabur === 1));
    }

    const redEyes = [
      'mata_merah_0',
      'mata_merah_1',
      'mata_merah_2',
      'mata_merah_3',
      'mata_merah_4',
      'mata_merah_5',
      'mata_merah_6',
      'mata_merah_7',
      'mata_merah_8',
      'mata_merah_9',
      'mata_merah_10',
      'mata_merah_11',
      'mata_merah_12',
      'mata_merah_13',
      'mata_merah_14',
      'mata_merah_15',
      'mata_merah_16',
      'mata_merah_17',
      'mata_merah_18',
      'mata_merah_19',
      'mata_merah_20',
      'mata_merah_21',
      'mata_merah_22',
      'mata_merah_23',
      'mata_merah_24',
      'mata_merah_25',
      'mata_merah_26',
      'mata_merah_27',
      'mata_merah_28',
      'mata_merah_29',
      'mata_merah_30',
      'mata_merah_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[redEyes[i]] = PdfHaisInfectionSurveillanceRequest.getCheckImageList(!!(listData && listData[i] && listData[i].IDO_Merah && listData[i].IDO_Merah === 1));
    }

    const pains = [
      'nyeri_0',
      'nyeri_1',
      'nyeri_2',
      'nyeri_3',
      'nyeri_4',
      'nyeri_5',
      'nyeri_6',
      'nyeri_7',
      'nyeri_8',
      'nyeri_9',
      'nyeri_10',
      'nyeri_11',
      'nyeri_12',
      'nyeri_13',
      'nyeri_14',
      'nyeri_15',
      'nyeri_16',
      'nyeri_17',
      'nyeri_18',
      'nyeri_19',
      'nyeri_20',
      'nyeri_21',
      'nyeri_22',
      'nyeri_23',
      'nyeri_24',
      'nyeri_25',
      'nyeri_26',
      'nyeri_27',
      'nyeri_28',
      'nyeri_29',
      'nyeri_30',
      'nyeri_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[pains[i]] = PdfHaisInfectionSurveillanceRequest.getCheckImageList(!!(listData && listData[i] && listData[i].IDO_Nyeri && listData[i].IDO_Nyeri === 1));
    }

    const tios = [
      'tio_0',
      'tio_1',
      'tio_2',
      'tio_3',
      'tio_4',
      'tio_5',
      'tio_6',
      'tio_7',
      'tio_8',
      'tio_9',
      'tio_10',
      'tio_11',
      'tio_12',
      'tio_13',
      'tio_14',
      'tio_15',
      'tio_16',
      'tio_17',
      'tio_18',
      'tio_19',
      'tio_20',
      'tio_21',
      'tio_22',
      'tio_23',
      'tio_24',
      'tio_25',
      'tio_26',
      'tio_27',
      'tio_28',
      'tio_29',
      'tio_30',
      'tio_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[tios[i]] = listData && listData[i] && listData[i].IDO_TIO ? listData[i].IDO_TIO : '';
    }

    const odems = [
      'odem_kornea_0',
      'odem_kornea_1',
      'odem_kornea_2',
      'odem_kornea_3',
      'odem_kornea_4',
      'odem_kornea_5',
      'odem_kornea_6',
      'odem_kornea_7',
      'odem_kornea_8',
      'odem_kornea_9',
      'odem_kornea_10',
      'odem_kornea_11',
      'odem_kornea_12',
      'odem_kornea_13',
      'odem_kornea_14',
      'odem_kornea_15',
      'odem_kornea_16',
      'odem_kornea_17',
      'odem_kornea_18',
      'odem_kornea_19',
      'odem_kornea_20',
      'odem_kornea_21',
      'odem_kornea_22',
      'odem_kornea_23',
      'odem_kornea_24',
      'odem_kornea_25',
      'odem_kornea_26',
      'odem_kornea_27',
      'odem_kornea_28',
      'odem_kornea_29',
      'odem_kornea_30',
      'odem_kornea_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[odems[i]] = PdfHaisInfectionSurveillanceRequest.getCheckImageList(!!(listData && listData[i] && listData[i].IDO_Odem_Kornea && listData[i].IDO_Odem_Kornea === 1));
    }

    const flares = [
      'flare_0',
      'flare_1',
      'flare_2',
      'flare_3',
      'flare_4',
      'flare_5',
      'flare_6',
      'flare_7',
      'flare_8',
      'flare_9',
      'flare_10',
      'flare_11',
      'flare_12',
      'flare_13',
      'flare_14',
      'flare_15',
      'flare_16',
      'flare_17',
      'flare_18',
      'flare_19',
      'flare_20',
      'flare_21',
      'flare_22',
      'flare_23',
      'flare_24',
      'flare_25',
      'flare_26',
      'flare_27',
      'flare_28',
      'flare_29',
      'flare_30',
      'flare_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[flares[i]] = PdfHaisInfectionSurveillanceRequest.getCheckImageList(!!(listData && listData[i] && listData[i].IDO_Flare && listData[i].IDO_Flare === 1));
    }

    const hipopions = [
      'hipopion_0',
      'hipopion_1',
      'hipopion_2',
      'hipopion_3',
      'hipopion_4',
      'hipopion_5',
      'hipopion_6',
      'hipopion_7',
      'hipopion_8',
      'hipopion_9',
      'hipopion_10',
      'hipopion_11',
      'hipopion_12',
      'hipopion_13',
      'hipopion_14',
      'hipopion_15',
      'hipopion_16',
      'hipopion_17',
      'hipopion_18',
      'hipopion_19',
      'hipopion_20',
      'hipopion_21',
      'hipopion_22',
      'hipopion_23',
      'hipopion_24',
      'hipopion_25',
      'hipopion_26',
      'hipopion_27',
      'hipopion_28',
      'hipopion_29',
      'hipopion_30',
      'hipopion_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[hipopions[i]] = PdfHaisInfectionSurveillanceRequest.getCheckImageList(!!(listData && listData[i] && listData[i].IDO_Hiporpion && listData[i].IDO_Hiporpion === 1));
    }

    const membrans = [
      'membran_0',
      'membran_1',
      'membran_2',
      'membran_3',
      'membran_4',
      'membran_5',
      'membran_6',
      'membran_7',
      'membran_8',
      'membran_9',
      'membran_10',
      'membran_11',
      'membran_12',
      'membran_13',
      'membran_14',
      'membran_15',
      'membran_16',
      'membran_17',
      'membran_18',
      'membran_19',
      'membran_20',
      'membran_21',
      'membran_22',
      'membran_23',
      'membran_24',
      'membran_25',
      'membran_26',
      'membran_27',
      'membran_28',
      'membran_29',
      'membran_30',
      'membran_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[membrans[i]] = PdfHaisInfectionSurveillanceRequest.getCheckImageList(!!(listData && listData[i] && listData[i].IDO_Membran && listData[i].IDO_Membran === 1));
    }

    const pupils = [
      'pupil_tidak_bulat_0',
      'pupil_tidak_bulat_1',
      'pupil_tidak_bulat_2',
      'pupil_tidak_bulat_3',
      'pupil_tidak_bulat_4',
      'pupil_tidak_bulat_5',
      'pupil_tidak_bulat_6',
      'pupil_tidak_bulat_7',
      'pupil_tidak_bulat_8',
      'pupil_tidak_bulat_9',
      'pupil_tidak_bulat_10',
      'pupil_tidak_bulat_11',
      'pupil_tidak_bulat_12',
      'pupil_tidak_bulat_13',
      'pupil_tidak_bulat_14',
      'pupil_tidak_bulat_15',
      'pupil_tidak_bulat_16',
      'pupil_tidak_bulat_17',
      'pupil_tidak_bulat_18',
      'pupil_tidak_bulat_19',
      'pupil_tidak_bulat_20',
      'pupil_tidak_bulat_21',
      'pupil_tidak_bulat_22',
      'pupil_tidak_bulat_23',
      'pupil_tidak_bulat_24',
      'pupil_tidak_bulat_25',
      'pupil_tidak_bulat_26',
      'pupil_tidak_bulat_27',
      'pupil_tidak_bulat_28',
      'pupil_tidak_bulat_29',
      'pupil_tidak_bulat_30',
      'pupil_tidak_bulat_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[pupils[i]] = PdfHaisInfectionSurveillanceRequest.getCheckImageList(!!(listData && listData[i] && listData[i].IDO_Pupil && listData[i].IDO_Pupil === 1));
    }

    const vitreuss = [
      'kekeruhan_vitreus_0',
      'kekeruhan_vitreus_1',
      'kekeruhan_vitreus_2',
      'kekeruhan_vitreus_3',
      'kekeruhan_vitreus_4',
      'kekeruhan_vitreus_5',
      'kekeruhan_vitreus_6',
      'kekeruhan_vitreus_7',
      'kekeruhan_vitreus_8',
      'kekeruhan_vitreus_9',
      'kekeruhan_vitreus_10',
      'kekeruhan_vitreus_11',
      'kekeruhan_vitreus_12',
      'kekeruhan_vitreus_13',
      'kekeruhan_vitreus_14',
      'kekeruhan_vitreus_15',
      'kekeruhan_vitreus_16',
      'kekeruhan_vitreus_17',
      'kekeruhan_vitreus_18',
      'kekeruhan_vitreus_19',
      'kekeruhan_vitreus_20',
      'kekeruhan_vitreus_21',
      'kekeruhan_vitreus_22',
      'kekeruhan_vitreus_23',
      'kekeruhan_vitreus_24',
      'kekeruhan_vitreus_25',
      'kekeruhan_vitreus_26',
      'kekeruhan_vitreus_27',
      'kekeruhan_vitreus_28',
      'kekeruhan_vitreus_29',
      'kekeruhan_vitreus_30',
      'kekeruhan_vitreus_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[vitreuss[i]] = PdfHaisInfectionSurveillanceRequest.getCheckImageList(!!(listData && listData[i] && listData[i].IDO_Kekeruhan && listData[i].IDO_Kekeruhan === 1));
    }

    const cultures = [
      'kultur_0',
      'kultur_1',
      'kultur_2',
      'kultur_3',
      'kultur_4',
      'kultur_5',
      'kultur_6',
      'kultur_7',
      'kultur_8',
      'kultur_9',
      'kultur_10',
      'kultur_11',
      'kultur_12',
      'kultur_13',
      'kultur_14',
      'kultur_15',
      'kultur_16',
      'kultur_17',
      'kultur_18',
      'kultur_19',
      'kultur_20',
      'kultur_21',
      'kultur_22',
      'kultur_23',
      'kultur_24',
      'kultur_25',
      'kultur_26',
      'kultur_27',
      'kultur_28',
      'kultur_29',
      'kultur_30',
      'kultur_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[cultures[i]] = PdfHaisInfectionSurveillanceRequest.getCheckImageList(!!(listData && listData[i] && listData[i].IDO_Kultur && listData[i].IDO_Kultur === 1));
    }

    const dxs = [
      'dx_endoftalmitis_0',
      'dx_endoftalmitis_1',
      'dx_endoftalmitis_2',
      'dx_endoftalmitis_3',
      'dx_endoftalmitis_4',
      'dx_endoftalmitis_5',
      'dx_endoftalmitis_6',
      'dx_endoftalmitis_7',
      'dx_endoftalmitis_8',
      'dx_endoftalmitis_9',
      'dx_endoftalmitis_10',
      'dx_endoftalmitis_11',
      'dx_endoftalmitis_12',
      'dx_endoftalmitis_13',
      'dx_endoftalmitis_14',
      'dx_endoftalmitis_15',
      'dx_endoftalmitis_16',
      'dx_endoftalmitis_17',
      'dx_endoftalmitis_18',
      'dx_endoftalmitis_19',
      'dx_endoftalmitis_20',
      'dx_endoftalmitis_21',
      'dx_endoftalmitis_22',
      'dx_endoftalmitis_23',
      'dx_endoftalmitis_24',
      'dx_endoftalmitis_25',
      'dx_endoftalmitis_26',
      'dx_endoftalmitis_27',
      'dx_endoftalmitis_28',
      'dx_endoftalmitis_29',
      'dx_endoftalmitis_30',
      'dx_endoftalmitis_31',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[dxs[i]] = PdfHaisInfectionSurveillanceRequest.getCheckImageList(!!(listData && listData[i] && listData[i].IDO_Dx && listData[i].IDO_Dx === 1));
    }

    const keterangans = [
      'ket_1_1',
      'ket_1_2',
      'ket_1_3',
      'ket_1_4',
      'ket_1_5',
      'ket_1_6',
      'ket_1_7',
      'ket_1_8',
      'ket_1_9',
      'ket_1_10',
      'ket_1_11',
      'ket_1_12',
      'ket_1_13',
      'ket_1_14',
      'ket_1_15',
      'ket_1_16',
      'ket_2_17',
      'ket_2_18',
      'ket_2_19',
      'ket_2_20',
      'ket_2_21',
      'ket_2_22',
      'ket_2_23',
      'ket_2_24',
      'ket_2_25',
      'ket_2_26',
      'ket_2_27',
      'ket_2_28',
      'ket_2_29',
      'ket_2_30',
      'ket_2_31',
      'ket_2_32',
    ]

    for (let i = 0; i < dates.length; i += 1) {
      plusData[keterangans[i]] = listData && listData[i] && listData[i].Keterangan ? listData[i].Keterangan : '';
    }


    return new PdfHaisInfectionSurveillanceRequest({
      emr_id: appReq.emr_id,
      form_name: 'rawat-inap_formulir-surveilans-infeksi-hais',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: appReq?.nomor_mr ?? '',
        'pasien.Nama': treatment?.Pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(treatment?.Pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(treatment?.Pasien?.Umur_Lengkap),
        'pasien.Jenis_Kelamin': treatment?.Pasien?.Jenis_Kelamin ?? '',
        ruangan_hais: formData?.Ruangan_Hais ?? '',
        jenis_kelamin_laki: PdfHaisInfectionSurveillanceRequest.getCheckImage(treatment?.Pasien?.Jenis_Kelamin === 'Laki-Laki'),
        jenis_kelamin_perempuan: PdfHaisInfectionSurveillanceRequest.getCheckImage(treatment?.Pasien?.Jenis_Kelamin === 'Perempuan'),
        tanggal_berobat: DateTimeConverter.convertToDateTime(formData?.Tanggal_Berobat),
        diagnosa_masuk: formData?.Diagnosa_Masuk ?? '',
        alasan_masuk_rumah: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Asal_Masuk === '1'),
        alasan_masuk_rujukan: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Asal_Masuk === '2'),
        vena_sentral: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Vena_Sentral_Check === '1'),
        vena_perifer: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Vena_Perifer_Check === '1'),
        lokasi_1: formData?.Lokasi_VS ?? '',
        lokasi_2: formData?.Lokasi_VP ?? '',
        mulai_1: DateTimeConverter.convertToDateTime(formData?.Mulai_VS),
        mulai_2: DateTimeConverter.convertToDateTime(formData?.Mulai_VP),
        sampai_1: DateTimeConverter.convertToDateTime(formData?.Selesai_VS),
        sampai_2: DateTimeConverter.convertToDateTime(formData?.Selesai_VP),
        sum_1: formData?.Total_Hari_VS ?? '',
        sum_2: formData?.Total_Hari_VP ?? '',
        infeksi_1: DateTimeConverter.convertToDateTime(formData?.Tanggal_Infeksi_VS),
        infeksi_2: DateTimeConverter.convertToDateTime(formData?.Tanggal_Infeksi_VP),
        catatan_1: formData?.Catatan_VS ?? '',
        catatan_2: formData?.Catatan_VP ?? '',
        tindakan_alkes_lain: formData?.Tindakan_Alkes_Lain ?? '',
        lokasi_3: formData?.Lokasi_Lain ?? '',
        mulai_3: DateTimeConverter.convertToDateTime(formData?.Mulai_Lain),
        sampai_3: DateTimeConverter.convertToDateTime(formData?.Selesai_Lain),
        sum_3: formData?.Total_Hari_Lain ?? '',
        infeksi_3: DateTimeConverter.convertToDateTime(formData?.Tanggal_Infeksi_Lain),
        catatan_3: formData?.Catatan_Lain ?? '',
        hbs_positif: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.HBS_Ag === '1'),
        hbs_negatif: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.HBS_Ag === '2'),
        hbs_tidak: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.HBS_Ag === '3'),
        hcv_positif: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Anti_HCV === '1'),
        hcv_negatif: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Anti_HCV === '2'),
        hcv_tidak: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Anti_HCV === '3'),
        hiv_positif: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Anti_HIV === '1'),
        hiv_negatif: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Anti_HIV === '2'),
        hiv_tidak: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Anti_HIV === '3'),
        penyakit_lain: formData?.Faktor_Penyakit_Lain ?? '',
        lab_leukocyt: formData?.Lab_Leukocyt ?? '',
        lab_led: formData?.Lab_LED ?? '',
        lab_lain_lain: formData?.Lab_Lain ?? '',
        hasil_radiologi: formData?.Hasil_Radiologi ?? '',
        merokok_ya: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Merokok === '1'),
        merokok_tidak: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Merokok === '2'),
        steroid_ya: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Steroid_Jangka_Panjang === '1'),
        steroid_tidak: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Steroid_Jangka_Panjang === '2'),
        operasi_ya: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Operasi_Karena_Trauma === '1'),
        operasi_tidak: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Operasi_Karena_Trauma === '2'),
        pengencer_ya: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Obat_Pengencer_Darah === '1'),
        pengencer_tidak: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Obat_Pengencer_Darah === '2'),
        mandi_ya: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Mandi_Sebelum_Operasi === '1'),
        mandi_tidak: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Mandi_Sebelum_Operasi === '2'),
        makeup_ya: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Memakai_Make_Up === '1'),
        makeup_tidak: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Memakai_Make_Up === '2'),
        gula_201: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Gula_Darah === '1'),
        gula_199: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Gula_Darah === '2'),
        suhu_39: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Suhu_Pasien === '1'),
        suhu_37: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Suhu_Pasien === '2'),
        infeksi_mata: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Infeksi_Mata_Check === '1'),
        infeksi_tht: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Infeksi_THT_Check === '1'),
        infeksi_mulut_gigi: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Infeksi_Mulut_Check === '1'),
        infeksi_paru: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Infeksi_Paru_Check === '1'),
        infeksi_kulit: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Infeksi_Kulit_Check === '1'),
        infeksi_gi_track: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Infeksi_GI_Check === '1'),
        checkbox_infeksi_lain: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Infeksi_Lainnya_Check === '1'),
        infeksi_lainnya: formData?.Infeksi_Lainnya_Text ?? '',
        saat_ini_dm: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Penyakit_DM_Check === '1'),
        saat_ini_hipertensi: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Penyakit_Hipertensi_Check === '1'),
        saat_ini_ggk: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Penyakit_GGK_Check === '1'),
        saat_ini_sepsis: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Penyakit_Sepsis_Check === '1'),
        riwayat_pasien_sekarang: formData?.Riwayat_Pasien_Sekarang ?? '',
        jenis_cito: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Jenis_Operasi === '1'),
        jenis_elektif: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Jenis_Operasi === '2'),
        asa_1: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.ASA_Score === '1'),
        asa_2: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.ASA_Score === '2'),
        asa_3: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.ASA_Score === '3'),
        asa_4: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.ASA_Score === '4'),
        asa_5: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.ASA_Score === '5'),
        anestesi_ga: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Jenis_Anestesi === '1'),
        anestesi_lokal: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Jenis_Anestesi === '2'),
        operator_anestesi: formData?.Operator_Anestesi ?? '',
        kelembapan_udara: formData?.Kelembapan_Udara ?? '',
        suhu_ruangan: formData?.Suhu_Ruangan ?? '',
        komplikasi_ya: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Komplikasi_Saat_Operasi === '1'),
        komplikasi_tidak: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Komplikasi_Saat_Operasi === '2'),
        profilaksis_ya: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Profilaksis === '1'),
        profilaksis_tidak: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Profilaksis === '2'),
        obat_profilaksis: formData?.Obat_Profilaksis ?? '',
        antibiotik_ya: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Antibiotik_Tambahan === '1'),
        antibiotik_tidak: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Antibiotik_Tambahan === '2'),
        obat_antibiotik: formData?.Obat_Antibiotik ?? '',
        dosis: formData?.Dosis_Antibiotik ?? '',
        jam_diberikan: formData?.Jam_Diberikan_Antibiotik ?? '',
        probe_laser: formData?.Probe_Laser ?? '',
        tubing_vitrectomy: formData?.Tubing_Vitrectomy ?? '',
        desinfeksi_chlorhexidine: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Chlorhexidine_Check === '1'),
        desinfeksi_povidone: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Povidone_Iodine_Check === '1'),
        desinfeksi_alkohol: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Alkohol_70_Check === '1'),
        jahitan_ya: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Jahitan === '1'),
        jahitan_tidak: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Jahitan === '2'),
        indikator_luar: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Indikator_Instrumen === '1'),
        indikator_dalam: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Indikator_Instrumen === '2'),
        indikator_tidak_ada: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Indikator_Instrumen === '3'),
        sterilisasi_ya: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Sterilisasi_CSSD === '1'),
        sterilisasi_tidak: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Sterilisasi_CSSD === '2'),
        inisial_dr: formData?.Inisial_Dr ?? '',
        asisten_op: formData?.Asisten_Op ?? '',
        urutan_op: formData?.Urutan_Op ?? '',
        implant_ya: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Implant === '1'),
        implant_tidak: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Implant === '2'),
        lama_op: formData?.Lama_Op ?? '',
        ruang_op_1: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Ruang_Operasi === '1'),
        ruang_op_2: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Ruang_Operasi === '2'),
        ruang_op_3: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Ruang_Operasi === '3'),
        ruang_op_4: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Ruang_Operasi === '4'),
        klasifikasi_1: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Klasifikasi_Luka === '1'),
        klasifikasi_2: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Klasifikasi_Luka === '2'),
        klasifikasi_3: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Klasifikasi_Luka === '3'),
        klasifikasi_4: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Klasifikasi_Luka === '4'),
        prosedur_op: formData?.Prosedur_Op ?? '',
        kualifikasi_dokter_bedah: formData?.Kualifikasi_Dokter_Bedah ?? '',
        jumlah_staf: formData?.Jumlah_Staf ?? '',
        diagnosa_akhir: formData?.Diagnosa_Akhir ?? '',
        tanggal_pasien_keluar: DateTimeConverter.convertToDateTime(formData?.Tanggal_Pasien_Keluar),
        keluar_pulang: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Cara_Pasien_Keluar === '1'),
        keluar_meninggal: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Cara_Pasien_Keluar === '2'),
        keluar_pindah: PdfHaisInfectionSurveillanceRequest.getCheckImage(formData?.Cara_Pasien_Keluar === '3'),
        pindah_faskes: formData?.Nama_Pindah_Faskes ?? '',
        ttd_perawat: formData && formData.TTD_Perawat && formData.TTD_Perawat !== '' ? formData.TTD_Perawat : 'https://bucket.rsmatasmec.com/blank.jpeg',
        ttd_ipcn: formData && formData.TTD_Perawat_IPCN && formData.TTD_Perawat_IPCN !== '' ? formData.TTD_Perawat_IPCN : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_perawat_penanggungjawab: formData?.Nama_Perawat ?? '',
        nama_perawat_ipcn: formData?.Nama_Perawat_IPCN ?? '',
        date: lastIndex && listData[lastIndex] && listData[lastIndex].Waktu ? listData[lastIndex].Waktu.substring(0, 9) : '',
        time: lastIndex && listData[lastIndex] && listData[lastIndex].Waktu ? listData[lastIndex].Waktu.substring(11, 15) : '',
        Tanda_Tangan_Perawat_IPCLN: formData && formData.TTD_Perawat_IPCN && formData.TTD_Perawat_IPCN !== '' ? formData.TTD_Perawat_IPCN : 'https://bucket.rsmatasmec.com/blank.jpeg',
        ...plusData,
        nik: treatment?.Pasien?.NIK ?? '',
      },
    })
  }

  static getCheckImageList(validity: boolean) {
    return (validity) ? 'https://bucket.rsmatasmec.com/checklist.jpeg' : undefined;
  }
}
