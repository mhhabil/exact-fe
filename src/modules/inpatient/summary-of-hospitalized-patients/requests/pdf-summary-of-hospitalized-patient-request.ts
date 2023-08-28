import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfSummaryOfHospitalizedPatientRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string,
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    ruang_rawat: string,
    tgl_masuk: string,
    tgl_keluar: string,
    indikasi_pasien_dirawat: string,
    diagnosa_masuk: string,
    anamnesa: string,
    waktu_masuk: string,
    pemeriksaan_penunjang: string,
    diagnosa_utama: string,
    diagnosa_sekunder_1: string,
    diagnosa_sekunder_2: string,
    diagnosa_sekunder_3: string,
    diagnosa_sekunder_4: string,
    diagnosa_sekunder_5: string,
    obat_selama_di_rs: string,
    tindakan_selama_di_rs: string,
    kondisi_pulang_berobat_rajal: string,
    kondisi_pulang_sembuh: string,
    kondisi_pulang_atas_permintaan_sendiri: string,
    kondisi_pulang_pindah_rs: string,
    kondisi_pulang_meninggal: string,
    kontrol_selanjutnya: string,
    komorbiditas_sanam: string,
    komorbiditas_bonam: string,
    komorbiditas_dubia: string,
    komorbiditas_dubia_ad_sanam: string,
    komorbiditas_dubia_ad_malam: string,
    obat_di_rumah: string,
    perawatan_mata_di_rumah: string,
    posisi_khusus_dirumah_merunduk: string,
    posisi_khusus_dirumah_setengah_duduk: string,
    posisi_khusus_dirumah_tidakada: string,
    Tanda_Tangan_Dokter: string;
    'form.Nama_Petugas': string,
    tanggal: string,
    Tanda_Tangan_Pasien_Wali: string,
    nama_TTD: string,
    jam: string,
    nik: string,
  }
}

export class PdfSummaryOfHospitalizedPatientRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string,
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    ruang_rawat: string,
    tgl_masuk: string,
    tgl_keluar: string,
    indikasi_pasien_dirawat: string,
    diagnosa_masuk: string,
    anamnesa: string,
    waktu_masuk: string,
    pemeriksaan_penunjang: string,
    diagnosa_utama: string,
    diagnosa_sekunder_1: string,
    diagnosa_sekunder_2: string,
    diagnosa_sekunder_3: string,
    diagnosa_sekunder_4: string,
    diagnosa_sekunder_5: string,
    obat_selama_di_rs: string,
    tindakan_selama_di_rs: string,
    kondisi_pulang_berobat_rajal: string,
    kondisi_pulang_sembuh: string,
    kondisi_pulang_atas_permintaan_sendiri: string,
    kondisi_pulang_pindah_rs: string,
    kondisi_pulang_meninggal: string,
    kontrol_selanjutnya: string,
    komorbiditas_sanam: string,
    komorbiditas_bonam: string,
    komorbiditas_dubia: string,
    komorbiditas_dubia_ad_sanam: string,
    komorbiditas_dubia_ad_malam: string,
    obat_di_rumah: string,
    perawatan_mata_di_rumah: string,
    posisi_khusus_dirumah_merunduk: string,
    posisi_khusus_dirumah_setengah_duduk: string,
    posisi_khusus_dirumah_tidakada: string,
    Tanda_Tangan_Dokter: string;
    'form.Nama_Petugas': string,
    tanggal: string,
    Tanda_Tangan_Pasien_Wali: string,
    nama_TTD: string,
    jam: string,
    nik: string,
  }

  constructor(req: IPdfSummaryOfHospitalizedPatientRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfSummaryOfHospitalizedPatientRequest) {
    return new PdfSummaryOfHospitalizedPatientRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): PdfSummaryOfHospitalizedPatientRequest {
    return new PdfSummaryOfHospitalizedPatientRequest({
      emr_id: emrId,
      form_name: 'rawat-inap_ringkasan-pasien-pulang',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        ruang_rawat: val?.form?.Ruang_Rawat ?? '',
        tgl_masuk: DateTimeConverter.convertToDateTime(val?.form?.Tanggal_Masuk),
        tgl_keluar: DateTimeConverter.convertToDateTime(val?.form?.Tanggal_Keluar),
        indikasi_pasien_dirawat: val?.form?.Pasien_Dirawat ?? '',
        diagnosa_masuk: val?.form?.Diagnosa_Masuk ?? '',
        anamnesa: val?.form?.Anamnesa ?? '',
        waktu_masuk: val?.form?.Pemeriksaan_Fisik ?? '',
        pemeriksaan_penunjang: val?.form?.Pemeriksaan_Penunjang ?? '',
        diagnosa_utama: val?.form?.Diagnosa_Utama ?? '',
        diagnosa_sekunder_1: val?.form?.Diagnosa_Sekunder_1 ?? '',
        diagnosa_sekunder_2: val?.form?.Diagnosa_Sekunder_2 ?? '',
        diagnosa_sekunder_3: val?.form?.Diagnosa_Sekunder_3 ?? '',
        diagnosa_sekunder_4: val?.form?.Diagnosa_Sekunder_4 ?? '',
        diagnosa_sekunder_5: val?.form?.Diagnosa_Sekunder_5 ?? '',
        posisi_khusus_dirumah_merunduk: PdfSummaryOfHospitalizedPatientRequest.getCheckImage(val?.form?.Posisi_Khusus === '1'),
        posisi_khusus_dirumah_setengah_duduk: PdfSummaryOfHospitalizedPatientRequest.getCheckImage(val?.form?.Posisi_Khusus === '2'),
        posisi_khusus_dirumah_tidakada: PdfSummaryOfHospitalizedPatientRequest.getCheckImage(val?.form?.Posisi_Khusus === '3'),
        obat_selama_di_rs: val?.form?.Obat_Rs ?? '',
        tindakan_selama_di_rs: val?.form?.Tindakan ?? '',
        kondisi_pulang_berobat_rajal: PdfSummaryOfHospitalizedPatientRequest.getCheckImage(val?.form?.Kondisi_Pulang === '1'),
        kondisi_pulang_sembuh: PdfSummaryOfHospitalizedPatientRequest.getCheckImage(val?.form?.Kondisi_Pulang === '3'),
        kondisi_pulang_atas_permintaan_sendiri: PdfSummaryOfHospitalizedPatientRequest.getCheckImage(val?.form?.Kondisi_Pulang === '5'),
        kondisi_pulang_pindah_rs: PdfSummaryOfHospitalizedPatientRequest.getCheckImage(val?.form?.Kondisi_Pulang === '2'),
        kondisi_pulang_meninggal: PdfSummaryOfHospitalizedPatientRequest.getCheckImage(val?.form?.Kondisi_Pulang === '4'),
        kontrol_selanjutnya: val?.form?.Anjuran ?? '',
        komorbiditas_sanam: PdfSummaryOfHospitalizedPatientRequest.getCheckImage(val?.form?.Komorbiditas_1 === '1'),
        komorbiditas_bonam: PdfSummaryOfHospitalizedPatientRequest.getCheckImage(val?.form?.Komorbiditas_2 === '1'),
        komorbiditas_dubia: PdfSummaryOfHospitalizedPatientRequest.getCheckImage(val?.form?.Komorbiditas_3 === '1'),
        komorbiditas_dubia_ad_sanam: PdfSummaryOfHospitalizedPatientRequest.getCheckImage(val?.form?.Komorbiditas_4 === '1'),
        komorbiditas_dubia_ad_malam: PdfSummaryOfHospitalizedPatientRequest.getCheckImage(val?.form?.Komorbiditas_5 === '1'),
        obat_di_rumah: val?.form?.Obat_Rumah ?? '',
        perawatan_mata_di_rumah: val?.form?.Mata ?? '',
        Tanda_Tangan_Dokter: (val?.form?.Tanda_Tangan_Petugas !== '') ? val?.form?.Tanda_Tangan_Petugas : undefined,
        'form.Nama_Petugas': (val?.form?.Nama_TTD_Petugas !== '') ? val?.form?.Nama_TTD_Petugas : undefined,
        tanggal: DateTimeConverter.convertToDateTime(val?.form?.Tanggal && val?.form?.Tanggal !== '' ? val?.form?.Tanggal.substring(0, 10) : ''),
        Tanda_Tangan_Pasien_Wali: val?.form?.Tanda_Tangan_Pasien && val?.form?.Tanda_Tangan_Pasien !== '' ? val?.form?.Tanda_Tangan_Pasien : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nama_TTD: val?.pasien?.Nama ?? '',
        jam: val?.form?.Tanggal && val?.form?.Tanggal !== '' ? val?.form?.Tanggal.substring(11, 16) : '',
        nik: val?.pasien?.NIK ?? '',
      },
    })
  }
}