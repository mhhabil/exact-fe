import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfPerioperativeNursingRecordRajalRequest extends ICreatePDFRequest {
  data: {
  nomor_mr: string,
  'pasien.Nama': string,
  'pasien.Tgl_Lahir': string,
  'pasien.Umur': string,
  'pasien.Jenis_Kelamin': string,
  suhu: string,
  nadi: string,
  rr: string,
  td: string,
  skala_nyeri: string,
  tb: string,
  bb: string,
  status_mental_sadar_penuh: string,
  status_mental_bingung: string,
  status_mental_agitasi: string,
  status_mental_mengantuk: string,
  status_mental_koma: string,
  riwayat_penyakit_tidak_ada: string,
  riwayat_penyakit_hipertensi: string,
  riwayat_penyakit_diabetes: string,
  riwayat_penyakit_hepatitis: string,
  riwayat_penyakit_lain_lain: string,
  riwayat_penyakit_lainya: string,
  pengobatan_saat_ini_tidak_ada: string,
  pengobatan_saat_ini_ada: string,
  pengobatan_saat_ini_ada_4: string,
  alat_bantu_tidak_ada: string,
  alat_bantu_ada: string,
  alat_bantu_ada_5: string,
  operasi_sebelumnya_tidak_ada: string,
  operasi_sebelumnya_ada: string,
  date_operasi_sebeelumnya: string,
  rs_operasi_sebelumnya: string,
  jenis_op_sebelumnya: string,
  alergi_tidak_ada: string,
  alergi_tidak_diketahui: string,
  alergi_ada: string,
  jelaskan_alergi: string,
  pemeriksaan_penunjang_labor: string,
  pemeriksaan_penunjang_rongent: string,
  pemeriksaan_penunjang_ff: string,
  pemeriksaan_penunjang_usg: string,
  pemeriksaan_penunjang_biometri: string,
  pemeriksaan_penunjang_tidak_ada: string,
  pemeriksaan_penunjang_lain_lain: string,
  penunjang_lainya: string,
  verif_ruangan_1: string,
  verif_ruangan_penerima_1: string,
  ket_verif_1: string,
  verif_ruangan_2: string,
  verif_ruangan_penerima_2: string,
  ket_verif_2: string,
  verif_ruangan_3: string,
  verif_ruangan_penerima_3: string,
  ket_verif_3: string,
  verif_ruangan_4: string,
  verif_ruangan_penerima_4: string,
  ket_verif_4: string,
  verif_ruangan_5: string,
  verif_ruangan_penerima_5: string,
  ket_verif_5: string,
  verif_ruangan_6: string,
  verif_ruangan_penerima_6: string,
  ket_verif_6: string,
  verif_ruangan_7: string,
  verif_ruangan_penerima_7: string,
  ket_verif_7: string,
  verif_ruangan_8: string,
  verif_ruangan_penerima_8: string,
  ket_verif_8: string,
  verif_ruangan_9: string,
  verif_ruangan_penerima_9: string,
  ket_verif_9: string,
  fisik_ruangan_1: string,
  fisik_ruangan_penerima_1: string,
  ket_fisik_1: string,
  fisik_ruangan_2: string,
  fisik_ruangan_penerima_2: string,
  ket_fisik_2: string,
  fisik_ruangan_3: string,
  fisik_ruangan_penerima_3: string,
  ket_fisik_3: string,
  fisik_ruangan_4: string,
  fisik_ruangan_penerima_4: string,
  ket_fisik_4: string,
  fisik_ruangan_5: string,
  fisik_ruangan_penerima_5: string,
  ket_fisik_5: string,
  fisik_ruangan_6: string,
  fisik_ruangan_penerima_6: string,
  ket_fisik_6: string,
  fisik_ruangan_7: string,
  fisik_ruangan_penerima_7: string,
  ket_fisik_7: string,
  fisik_ruangan_8: string,
  fisik_ruangan_penerima_8: string,
  ket_fisik_8: string,
  fisik_ruangan_9: string,
  fisik_ruangan_penerima_9: string,
  ket_fisik_9: string,
  nama_perawat_ruangan: string,
  Tanda_Tangan_Perawat_Ruangan: string,
  date_time_perawat_ruangan: string,
  nama_perawat_penerima: string,
  Tanda_Tangan_Perawat_Penerima: string,
  date_time_perawat_penerima: string,
  persiapan_lain_ruangan_1: string,
  persiapan_lain_ruangan_penerima_1: string,
  ket_lain_1: string,
  persiapan_lain_ruangan_2: string,
  persiapan_lain_ruangan_penerima_2: string,
  ket_lain_2: string,
  nik: string,
  }
}

export class PdfPerioperativeNursingRecordRajalRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string,
  'pasien.Nama': string,
  'pasien.Tgl_Lahir': string,
  'pasien.Umur': string,
  'pasien.Jenis_Kelamin': string,
  suhu: string,
  nadi: string,
  rr: string,
  td: string,
  skala_nyeri: string,
  tb: string,
  bb: string,
  status_mental_sadar_penuh: string,
  status_mental_bingung: string,
  status_mental_agitasi: string,
  status_mental_mengantuk: string,
  status_mental_koma: string,
  riwayat_penyakit_tidak_ada: string,
  riwayat_penyakit_hipertensi: string,
  riwayat_penyakit_diabetes: string,
  riwayat_penyakit_hepatitis: string,
  riwayat_penyakit_lain_lain: string,
  riwayat_penyakit_lainya: string,
  pengobatan_saat_ini_tidak_ada: string,
  pengobatan_saat_ini_ada: string,
  pengobatan_saat_ini_ada_4: string,
  alat_bantu_tidak_ada: string,
  alat_bantu_ada: string,
  alat_bantu_ada_5: string,
  operasi_sebelumnya_tidak_ada: string,
  operasi_sebelumnya_ada: string,
  date_operasi_sebeelumnya: string,
  rs_operasi_sebelumnya: string,
  jenis_op_sebelumnya: string,
  alergi_tidak_ada: string,
  alergi_tidak_diketahui: string,
  alergi_ada: string,
  jelaskan_alergi: string,
  pemeriksaan_penunjang_labor: string,
  pemeriksaan_penunjang_rongent: string,
  pemeriksaan_penunjang_ff: string,
  pemeriksaan_penunjang_usg: string,
  pemeriksaan_penunjang_biometri: string,
  pemeriksaan_penunjang_tidak_ada: string,
  pemeriksaan_penunjang_lain_lain: string,
  penunjang_lainya: string,
  verif_ruangan_1: string,
  verif_ruangan_penerima_1: string,
  ket_verif_1: string,
  verif_ruangan_2: string,
  verif_ruangan_penerima_2: string,
  ket_verif_2: string,
  verif_ruangan_3: string,
  verif_ruangan_penerima_3: string,
  ket_verif_3: string,
  verif_ruangan_4: string,
  verif_ruangan_penerima_4: string,
  ket_verif_4: string,
  verif_ruangan_5: string,
  verif_ruangan_penerima_5: string,
  ket_verif_5: string,
  verif_ruangan_6: string,
  verif_ruangan_penerima_6: string,
  ket_verif_6: string,
  verif_ruangan_7: string,
  verif_ruangan_penerima_7: string,
  ket_verif_7: string,
  verif_ruangan_8: string,
  verif_ruangan_penerima_8: string,
  ket_verif_8: string,
  verif_ruangan_9: string,
  verif_ruangan_penerima_9: string,
  ket_verif_9: string,
  fisik_ruangan_1: string,
  fisik_ruangan_penerima_1: string,
  ket_fisik_1: string,
  fisik_ruangan_2: string,
  fisik_ruangan_penerima_2: string,
  ket_fisik_2: string,
  fisik_ruangan_3: string,
  fisik_ruangan_penerima_3: string,
  ket_fisik_3: string,
  fisik_ruangan_4: string,
  fisik_ruangan_penerima_4: string,
  ket_fisik_4: string,
  fisik_ruangan_5: string,
  fisik_ruangan_penerima_5: string,
  ket_fisik_5: string,
  fisik_ruangan_6: string,
  fisik_ruangan_penerima_6: string,
  ket_fisik_6: string,
  fisik_ruangan_7: string,
  fisik_ruangan_penerima_7: string,
  ket_fisik_7: string,
  fisik_ruangan_8: string,
  fisik_ruangan_penerima_8: string,
  ket_fisik_8: string,
  fisik_ruangan_9: string,
  fisik_ruangan_penerima_9: string,
  ket_fisik_9: string,
  nama_perawat_ruangan: string,
  Tanda_Tangan_Perawat_Ruangan: string,
  date_time_perawat_ruangan: string,
  nama_perawat_penerima: string,
  Tanda_Tangan_Perawat_Penerima: string,
  date_time_perawat_penerima: string,
  persiapan_lain_ruangan_1: string,
  persiapan_lain_ruangan_penerima_1: string,
  ket_lain_1: string,
  persiapan_lain_ruangan_2: string,
  persiapan_lain_ruangan_penerima_2: string,
  ket_lain_2: string,
  nik: string,
  }

  constructor(req: IPdfPerioperativeNursingRecordRajalRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfPerioperativeNursingRecordRajalRequest) {
    return new PdfPerioperativeNursingRecordRajalRequest(json);
  }

  static getCheck(validity: boolean) {
    return (validity) ? 'https://bucket.rsmatasmec.com/checklist.jpeg' : 'https://bucket.rsmatasmec.com/kotak-silang.jpg';
  }

  static createPdfRequest(val: any, emrId: string): PdfPerioperativeNursingRecordRajalRequest {
    return new PdfPerioperativeNursingRecordRajalRequest({
      emr_id: emrId,
      form_name: 'rawat-jalan_catatan-keperawatan-peri-operatif-pra-operasi',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        suhu: val?.form?.Suhu ?? '',
        nadi: val?.form?.Nadi ?? '',
        rr: val?.form?.Rr ?? '',
        td: val?.form?.Td ?? '',
        skala_nyeri: val?.form?.Skala_Nyeri ?? '',
        tb: val?.form?.Tb ?? '',
        bb: val?.form?.Bb ?? '',
        status_mental_sadar_penuh: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Status_Mental?.Sadar_Penuh === 1),
        status_mental_bingung: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Status_Mental?.Bingung === 1),
        status_mental_agitasi: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Status_Mental?.Agitasi === 1),
        status_mental_mengantuk: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Status_Mental?.Mengantuk === 1),
        status_mental_koma: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Status_Mental?.Koma === 1),
        riwayat_penyakit_tidak_ada: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Riwayat_Penyakit?.Tidak_Ada === 1),
        riwayat_penyakit_hipertensi: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Riwayat_Penyakit?.Hipertensi === 1),
        riwayat_penyakit_diabetes: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Riwayat_Penyakit?.Diabetes === 1),
        riwayat_penyakit_hepatitis: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Riwayat_Penyakit?.Hepatitis === 1),
        riwayat_penyakit_lain_lain: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Riwayat_Penyakit?.Lain_lain === 1),
        riwayat_penyakit_lainya: val?.form?.Riwayat_Penyakit_Keterangan ?? '',
        pengobatan_saat_ini_tidak_ada: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Pengobatan_Saat_Ini === '0'),
        pengobatan_saat_ini_ada: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Pengobatan_Saat_Ini === '1'),
        pengobatan_saat_ini_ada_4: val?.form?.Pengobatan_Saat_Ini_Keterangan ?? '',
        alat_bantu_tidak_ada: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Alat_Bantu === '0'),
        alat_bantu_ada: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Alat_Bantu === '1'),
        alat_bantu_ada_5: val?.form?.Alat_Bantu_Keterangan ?? '',
        operasi_sebelumnya_tidak_ada: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Operasi_Sebelumnya === '0'),
        operasi_sebelumnya_ada: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Operasi_Sebelumnya === '1'),
        date_operasi_sebeelumnya:  DateTimeConverter.convertToNormalDate(val?.form?.Operasi_Sebelumnya_Tanggal && val?.form?.Operasi_Sebelumnya_Tanggal !== '' ? val?.form?.Operasi_Sebelumnya_Tanggal.substring(0, 10) : ''),
        rs_operasi_sebelumnya: val?.form?.Operasi_Sebelumnya_Di ?? '',
        jenis_op_sebelumnya: val?.form?.Operasi_Sebelumnya_Keterangan ?? '',
        alergi_tidak_ada: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Alergi === '0'),
        alergi_tidak_diketahui: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Alergi === '1'),
        alergi_ada: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Alergi === '2'),
        jelaskan_alergi: val?.form?.Alergi_Keterangan ?? '',
        pemeriksaan_penunjang_labor: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Pemeriksaan_Penunjang?.Laboratorium === 1),
        pemeriksaan_penunjang_rongent: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Pemeriksaan_Penunjang?.Rongent === 1),
        pemeriksaan_penunjang_ff: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Pemeriksaan_Penunjang?.Foto_Fundus === 1),
        pemeriksaan_penunjang_usg: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Pemeriksaan_Penunjang?.USG_Mata === 1),
        pemeriksaan_penunjang_biometri: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Pemeriksaan_Penunjang?.Biometri === 1),
        pemeriksaan_penunjang_tidak_ada: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Pemeriksaan_Penunjang?.Tidak_Ada === 1),
        pemeriksaan_penunjang_lain_lain: PdfPerioperativeNursingRecordRajalRequest.getCheckImage(val?.form?.Pemeriksaan_Penunjang?.Lain_lain === 1),
        penunjang_lainya: val?.form?.Pemeriksaan_Penunjang_Keterangan ?? '',
        verif_ruangan_1: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.form?.Verifikasi_Periksa_Identitas === 1),
        verif_ruangan_penerima_1: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.ok?.Verifikasi_Periksa_Identitas === 1),
        ket_verif_1: val?.form?.Verifikasi_Periksa_Identitas_Keterangan ?? '',
        verif_ruangan_2: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.form?.Verifikasi_Periksa_Gelang === 1),
        verif_ruangan_penerima_2: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.ok?.Verifikasi_Periksa_Gelang === 1),
        ket_verif_2: val?.form?.Verifikasi_Periksa_Gelang_Keterangan ?? '',
        verif_ruangan_3: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.form?.Verifikasi_Surat_Pengantar_Operasi === 1),
        verif_ruangan_penerima_3: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.ok?.Verifikasi_Surat_Pengantar_Operasi === 1),
        ket_verif_3: val?.form?.Verifikasi_Surat_Pengantar_Operasi_Keterangan ?? '',
        verif_ruangan_4: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.form?.Verifikasi_Jenis_Lokasi_Operasi === 1),
        verif_ruangan_penerima_4: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.ok?.Verifikasi_Jenis_Lokasi_Operasi === 1),
        ket_verif_4: val?.form?.Verifikasi_Jenis_Lokasi_Operasi_Keterangan ?? '',
        verif_ruangan_5: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.form?.Verifikasi_Masalah_Bahasa_Komunikasi === 1),
        verif_ruangan_penerima_5: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.ok?.Verifikasi_Masalah_Bahasa_Komunikasi === 1),
        ket_verif_5: val?.form?.Verifikasi_Masalah_Bahasa_Komunikasi_Keterangan ?? '',
        verif_ruangan_6: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.form?.Verifikasi_Surat_Izin_Operasi === 1),
        verif_ruangan_penerima_6: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.ok?.Verifikasi_Surat_Izin_Operasi === 1),
        ket_verif_6: val?.form?.Verifikasi_Surat_Izin_Operasi_Keterangan ?? '',
        verif_ruangan_7: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.form?.Verifikasi_Persetujuan_Anestesi === 1),
        verif_ruangan_penerima_7: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.ok?.Verifikasi_Persetujuan_Anestesi === 1),
        ket_verif_7: val?.form?.Verifikasi_Persetujuan_Anestesi_Keterangan ?? '',
        verif_ruangan_8: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.form?.Verifikasi_Kelengkapan_Resume_Medis === 1),
        verif_ruangan_penerima_8: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.ok?.Verifikasi_Kelengkapan_Resume_Medis === 1),
        ket_verif_8: val?.form?.Verifikasi_Kelengkapan_Resume_Medis_Keterangan ?? '',
        verif_ruangan_9: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.form?.Verifikasi_Kelengkapan_X_Ray === 1),
        verif_ruangan_penerima_9: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.ok?.Verifikasi_Kelengkapan_X_Ray === 1),
        ket_verif_9: val?.form?.Verifikasi_Kelengkapan_X_Ray_Keterangan ?? '',
        fisik_ruangan_1: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.form?.Persiapan_Puasa === 1),
        fisik_ruangan_penerima_1: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.ok?.Persiapan_Puasa === 1),
        ket_fisik_1: val?.form?.Persiapan_Puasa_Keterangan ?? '',
        fisik_ruangan_2: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.form?.Persiapan_Prothese_Luar === 1),
        fisik_ruangan_penerima_2: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.ok?.Persiapan_Prothese_Luar === 1),
        ket_fisik_2: val?.form?.Persiapan_Prothese_Luar_Keterangan ?? '',
        fisik_ruangan_3: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.form?.Persiapan_Prothese_Dalam === 1),
        fisik_ruangan_penerima_3: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.ok?.Persiapan_Prothese_Dalam === 1),
        ket_fisik_3: val?.form?.Persiapan_Prothese_Dalam_Keterangan ?? '',
        fisik_ruangan_4: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.form?.Persiapan_Penjepit_Rambut === 1),
        fisik_ruangan_penerima_4: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.ok?.Persiapan_Penjepit_Rambut === 1),
        ket_fisik_4: val?.form?.Persiapan_Penjepit_Rambut_Keterangan ?? '',
        fisik_ruangan_5: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.form?.Persiapan_Kulit === 1),
        fisik_ruangan_penerima_5: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.ok?.Persiapan_Kulit === 1),
        ket_fisik_5: val?.form?.Persiapan_Kulit_Keterangan ?? '',
        fisik_ruangan_6: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.form?.Persiapan_Alat_Bantu === 1),
        fisik_ruangan_penerima_6: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.ok?.Persiapan_Alat_Bantu === 1),
        ket_fisik_6: val?.form?.Persiapan_Alat_Bantu_Keterangan ?? '',
        fisik_ruangan_7: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.form?.Persiapan_Obat_Disertakan === 1),
        fisik_ruangan_penerima_7: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.ok?.Persiapan_Obat_Disertakan === 1),
        ket_fisik_7: val?.form?.Persiapan_Obat_Disertakan_Keterangan ?? '',
        fisik_ruangan_8: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.form?.Persiapan_Obat_Terakhir_Diberikan === 1),
        fisik_ruangan_penerima_8: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.ok?.Persiapan_Obat_Terakhir_Diberikan === 1),
        ket_fisik_8: val?.form?.Persiapan_Obat_Terakhir_Diberikan_Keterangan ?? '',
        fisik_ruangan_9: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.form?.Persiapan_Vaskuler_Akses === 1),
        fisik_ruangan_penerima_9: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.ok?.Persiapan_Vaskuler_Akses === 1),
        ket_fisik_9: val?.form?.Persiapan_Vaskuler_Akses_Keterangan ?? '',
        nama_perawat_ruangan: (val?.form?.Nama_Perawat_Ruangan !== '') ? val?.form?.Nama_Perawat_Ruangan : undefined,
        Tanda_Tangan_Perawat_Ruangan: (val?.form?.TTD_Perawat_Ruangan !== '') ? val?.form?.TTD_Perawat_Ruangan : undefined,
        date_time_perawat_ruangan: DateTimeConverter.convertToDateTime(val?.form?.Tanggal),
        nama_perawat_penerima: (val?.ok?.Nama_Perawat_Penerima !== '') ? val?.ok?.Nama_Perawat_Penerima : undefined,
        Tanda_Tangan_Perawat_Penerima: (val?.ok?.TTD_Perawat_Penerima !== '') ? val?.ok?.TTD_Perawat_Penerima : undefined,
        date_time_perawat_penerima: val?.ok?.Tanggal ?? '',
        persiapan_lain_ruangan_1: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.form?.Site_Marking === 1),
        persiapan_lain_ruangan_penerima_1: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.ok?.Lain_Site_Marking === 1),
        ket_lain_1: val?.form?.Site_Marking_Keterangan ?? '',
        persiapan_lain_ruangan_2: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.form?.Penjelasan_Singkat === 1),
        persiapan_lain_ruangan_penerima_2: PdfPerioperativeNursingRecordRajalRequest.getCheck(val?.ok?.Lain_Penjelasan_Singkat === 1),
        ket_lain_2: val?.form?.Penjelasan_Singkat_Keterangan ?? '',
        nik: val?.pasien?.NIK ?? '',
      },
    })
  }
}