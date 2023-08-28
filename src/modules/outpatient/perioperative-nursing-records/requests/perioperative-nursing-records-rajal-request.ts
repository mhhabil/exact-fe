import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IUpdatePerioperativeNursingRecordsRajalRequest extends IAppRequest {
    suhu: string;
    nadi: string;
    rr: string;
    td: string;
    tb: string;
    bb: string;
    kgd: string;
    skala_nyeri: string;
    status_mental: string[];
    riwayat_penyakit: string[];
    riwayat_penyakit_keterangan: string;
    pengobatan_saat_ini: string;
    pengobatan_saat_ini_keterangan: string;
    alat_bantu:  string
    alat_bantu_keterangan: string;
    operasi_sebelumnya: string;
    operasi_sebelumnya_keterangan: string;
    operasi_sebelumnya_tanggal: string;
    operasi_sebelumnya_di: string;
    alergi: string;
    alergi_keterangan: string;
    pemeriksaan_penunjang: string[];
    pemeriksaan_penunjang_keterangan: string;
    verifikasi_periksa_identitas: string;
    verifikasi_periksa_identitas_keterangan: string;
    verifikasi_periksa_gelang: string;
    verifikasi_periksa_gelang_keterangan: string;
    verifikasi_surat_pengantar_operasi: string;
    verifikasi_surat_pengantar_operasi_keterangan: string;
    verifikasi_jenis_lokasi_operasi: string;
    verifikasi_jenis_lokasi_operasi_keterangan: string;
    verifikasi_masalah_bahasa_komunikasi: string;
    verifikasi_masalah_bahasa_komunikasi_keterangan: string;
    verifikasi_surat_izin_operasi: string;
    verifikasi_surat_izin_operasi_keterangan: string;
    verifikasi_persetujuan_anestesi: string;
    verifikasi_persetujuan_anestesi_keterangan: string;
    verifikasi_kelengkapan_resume_medis: string;
    verifikasi_kelengkapan_resume_medis_keterangan: string;
    verifikasi_kelengkapan_x_ray: string;
    verifikasi_kelengkapan_x_ray_keterangan: string;
    persiapan_puasa: string;
    persiapan_puasa_keterangan: string;
    persiapan_prothese_luar: string;
    persiapan_prothese_luar_keterangan: string;
    persiapan_prothese_dalam: string;
    persiapan_prothese_dalam_keterangan: string;
    persiapan_penjepit_rambut: string;
    persiapan_penjepit_rambut_keterangan: string;
    persiapan_kulit: string;
    persiapan_kulit_keterangan: string;
    persiapan_alat_bantu: string;
    persiapan_alat_bantu_keterangan: string;
    persiapan_obat_disertakan: string;
    persiapan_obat_disertakan_keterangan: string;
    persiapan_obat_terakhir_diberikan: string;
    persiapan_obat_terakhir_diberikan_keterangan: string;
    persiapan_vaskuler_akses: string;
    persiapan_vaskuler_akses_keterangan: string;
    tanggal: string;
    site_marking: string;
    site_marking_keterangan: string;
    penjelasan_singkat: string;
    penjelasan_singkat_keterangan: string;
    "ttd-perawat-ruangan": string;
    "id-perawat-ruangan": string;
    "ttd-perawat-penerima": string;
    "id-perawat-penerima":  string;
}

export class UpdatePerioperativeNursingRecordsRajalRequest extends AppRequest {
    suhu: string;
    nadi: string;
    rr: string;
    td: string;
    tb: string;
    bb: string;
    kgd: string;
    skala_nyeri: string;
    status_mental: string[];
    riwayat_penyakit: string[];
    riwayat_penyakit_keterangan: string;
    pengobatan_saat_ini: string;
    pengobatan_saat_ini_keterangan: string;
    alat_bantu:  string
    alat_bantu_keterangan: string;
    operasi_sebelumnya: string;
    operasi_sebelumnya_keterangan: string;
    operasi_sebelumnya_tanggal: string;
    operasi_sebelumnya_di: string;
    alergi: string;
    alergi_keterangan: string;
    pemeriksaan_penunjang: string[];
    pemeriksaan_penunjang_keterangan: string;
    verifikasi_periksa_identitas: string;
    verifikasi_periksa_identitas_keterangan: string;
    verifikasi_periksa_gelang: string;
    verifikasi_periksa_gelang_keterangan: string;
    verifikasi_surat_pengantar_operasi: string;
    verifikasi_surat_pengantar_operasi_keterangan: string;
    verifikasi_jenis_lokasi_operasi: string;
    verifikasi_jenis_lokasi_operasi_keterangan: string;
    verifikasi_masalah_bahasa_komunikasi: string;
    verifikasi_masalah_bahasa_komunikasi_keterangan: string;
    verifikasi_surat_izin_operasi: string;
    verifikasi_surat_izin_operasi_keterangan: string;
    verifikasi_persetujuan_anestesi: string;
    verifikasi_persetujuan_anestesi_keterangan: string;
    verifikasi_kelengkapan_resume_medis: string;
    verifikasi_kelengkapan_resume_medis_keterangan: string;
    verifikasi_kelengkapan_x_ray: string;
    verifikasi_kelengkapan_x_ray_keterangan: string;
    persiapan_puasa: string;
    persiapan_puasa_keterangan: string;
    persiapan_prothese_luar: string;
    persiapan_prothese_luar_keterangan: string;
    persiapan_prothese_dalam: string;
    persiapan_prothese_dalam_keterangan: string;
    persiapan_penjepit_rambut: string;
    persiapan_penjepit_rambut_keterangan: string;
    persiapan_kulit: string;
    persiapan_kulit_keterangan: string;
    persiapan_alat_bantu: string;
    persiapan_alat_bantu_keterangan: string;
    persiapan_obat_disertakan: string;
    persiapan_obat_disertakan_keterangan: string;
    persiapan_obat_terakhir_diberikan: string;
    persiapan_obat_terakhir_diberikan_keterangan: string;
    persiapan_vaskuler_akses: string;
    persiapan_vaskuler_akses_keterangan: string;
    tanggal: string;
    site_marking: string;
    site_marking_keterangan: string;
    penjelasan_singkat: string;
    penjelasan_singkat_keterangan: string;
    "ttd-perawat-ruangan": string;
    "id-perawat-ruangan": string;
    "ttd-perawat-penerima": string;
    "id-perawat-penerima":  string;

    constructor(request: IUpdatePerioperativeNursingRecordsRajalRequest) {
      super(request);
      this.suhu = request.suhu;
      this.nadi = request.nadi;
      this.rr = request.rr;
      this.td = request.td;
      this.tb = request.tb;
      this.bb = request.bb;
      this.kgd = request.kgd;
      this.skala_nyeri = request.skala_nyeri;
      this.status_mental =  request.status_mental;
      this.riwayat_penyakit = request.riwayat_penyakit;
      this.riwayat_penyakit_keterangan = request.riwayat_penyakit_keterangan;
      this.pengobatan_saat_ini =  request.pengobatan_saat_ini;
      this.pengobatan_saat_ini_keterangan = request.pengobatan_saat_ini_keterangan;
      this.alat_bantu = request.alat_bantu;
      this.alat_bantu_keterangan = request.alat_bantu_keterangan;
      this.operasi_sebelumnya = request.operasi_sebelumnya;
      this.operasi_sebelumnya_keterangan = request.operasi_sebelumnya_keterangan;
      this.operasi_sebelumnya_tanggal = request.operasi_sebelumnya_tanggal ? DateTimeConverter.convertToNormalDatetime(request.operasi_sebelumnya_tanggal) : '';
      this.operasi_sebelumnya_di = request.operasi_sebelumnya_di;
      this.alergi = request.alergi;
      this.alergi_keterangan = request.alergi_keterangan;
      this.pemeriksaan_penunjang = request.pemeriksaan_penunjang;
      this.pemeriksaan_penunjang_keterangan = request.pemeriksaan_penunjang_keterangan;
      this.verifikasi_periksa_identitas = request.verifikasi_periksa_identitas;
      this.verifikasi_periksa_identitas_keterangan = request.verifikasi_periksa_identitas_keterangan;
      this.verifikasi_periksa_gelang = request.verifikasi_periksa_gelang;
      this.verifikasi_periksa_gelang_keterangan = request.verifikasi_periksa_gelang_keterangan;
      this.verifikasi_surat_pengantar_operasi = request.verifikasi_surat_pengantar_operasi;
      this.verifikasi_surat_pengantar_operasi_keterangan = request.verifikasi_surat_pengantar_operasi_keterangan;
      this.verifikasi_jenis_lokasi_operasi = request.verifikasi_jenis_lokasi_operasi;
      this.verifikasi_jenis_lokasi_operasi_keterangan = request.verifikasi_jenis_lokasi_operasi_keterangan;
      this.verifikasi_masalah_bahasa_komunikasi = request.verifikasi_masalah_bahasa_komunikasi;
      this.verifikasi_masalah_bahasa_komunikasi_keterangan = request.verifikasi_masalah_bahasa_komunikasi_keterangan;
      this.verifikasi_surat_izin_operasi = request.verifikasi_surat_izin_operasi;
      this.verifikasi_surat_izin_operasi_keterangan = request.verifikasi_surat_izin_operasi_keterangan;
      this.verifikasi_persetujuan_anestesi = request.verifikasi_persetujuan_anestesi;
      this.verifikasi_persetujuan_anestesi_keterangan = request.verifikasi_persetujuan_anestesi_keterangan;
      this.verifikasi_kelengkapan_resume_medis = request.verifikasi_kelengkapan_resume_medis;
      this.verifikasi_kelengkapan_resume_medis_keterangan = request.verifikasi_kelengkapan_resume_medis_keterangan;
      this.verifikasi_kelengkapan_x_ray = request.verifikasi_kelengkapan_x_ray;
      this.verifikasi_kelengkapan_x_ray_keterangan = request.verifikasi_kelengkapan_x_ray_keterangan;
      this.persiapan_puasa = request.persiapan_puasa;
      this.persiapan_puasa_keterangan = request.persiapan_puasa_keterangan;
      this.persiapan_prothese_luar = request.persiapan_prothese_luar;
      this.persiapan_prothese_luar_keterangan = request.persiapan_prothese_luar_keterangan;
      this.persiapan_prothese_dalam = request.persiapan_prothese_dalam;
      this.persiapan_prothese_dalam_keterangan = request.persiapan_prothese_dalam_keterangan;
      this.persiapan_penjepit_rambut = request.persiapan_penjepit_rambut;
      this.persiapan_penjepit_rambut_keterangan = request.persiapan_penjepit_rambut_keterangan;
      this.persiapan_kulit = request.persiapan_kulit;
      this.persiapan_kulit_keterangan = request.persiapan_kulit_keterangan;
      this.persiapan_alat_bantu = request.persiapan_alat_bantu;
      this.persiapan_alat_bantu_keterangan = request.persiapan_alat_bantu_keterangan;
      this.persiapan_obat_disertakan = request.persiapan_obat_disertakan;
      this.persiapan_obat_disertakan_keterangan = request.persiapan_obat_disertakan_keterangan;
      this.persiapan_obat_terakhir_diberikan = request.persiapan_obat_terakhir_diberikan;
      this.persiapan_obat_terakhir_diberikan_keterangan = request.persiapan_obat_terakhir_diberikan_keterangan;
      this.persiapan_vaskuler_akses = request.persiapan_vaskuler_akses;
      this.persiapan_vaskuler_akses_keterangan = request.persiapan_vaskuler_akses_keterangan;
      this.tanggal = request.tanggal ? DateTimeConverter.convertToNormalDatetime(request.tanggal) : '';
      this.site_marking = request.site_marking;
      this.site_marking_keterangan = request.site_marking_keterangan;
      this.penjelasan_singkat = request.penjelasan_singkat;
      this.penjelasan_singkat_keterangan = request.penjelasan_singkat_keterangan;
      this["ttd-perawat-ruangan"] = request['ttd-perawat-ruangan'];
      this["id-perawat-ruangan"] = request['id-perawat-ruangan'];
      this["ttd-perawat-penerima"] = request['ttd-perawat-penerima'];
      this["id-perawat-penerima"]  = request['id-perawat-penerima'];
    }

    static schema() {
      return yup.object().shape({
        suhu: yup.string(),
        nadi: yup.string(),
        rr: yup.string(),
        td: yup.string(),
        tb: yup.string(),
        bb: yup.string(),
        kgd: yup.string(),
        skala_nyeri: yup.string(),
        status_mental: yup.string(),
        riwayat_penyakit: yup.string(),
        riwayat_penyakit_keterangan: yup.string(),
        pengobatan_saat_ini: yup.string(),
        pengobatan_saat_ini_keterangan: yup.string(),
        alat_bantu_keterangan: yup.string(),
        operasi_sebelumnya_keterangan: yup.string(),
        operasi_sebelumnya_tanggal: yup.string(),
        operasi_sebelumnya_di: yup.string(),
        alergi_keterangan: yup.string(),
        pemeriksaan_penunjang: yup.string(),
        pemeriksaan_penunjang_keterangan: yup.string(),
        verifikasi_periksa_identitas: yup.string(),
        verifikasi_periksa_identitas_keterangan: yup.string(),
        verifikasi_periksa_gelang: yup.string(),
        verifikasi_periksa_gelang_keterangan: yup.string(),
        verifikasi_surat_pengantar_operasi: yup.string(),
        verifikasi_surat_pengantar_operasi_keterangan: yup.string(),
        verifikasi_jenis_lokasi_operasi: yup.string(),
        verifikasi_jenis_lokasi_operasi_keterangan: yup.string(),
        verifikasi_masalah_bahasa_komunikasi: yup.string(),
        verifikasi_masalah_bahasa_komunikasi_keterangan: yup.string(),
        verifikasi_surat_izin_operasi: yup.string(),
        verifikasi_surat_izin_operasi_keterangan: yup.string(),
        verifikasi_persetujuan_anestesi: yup.string(),
        verifikasi_persetujuan_anestesi_keterangan: yup.string(),
        verifikasi_kelengkapan_resume_medis: yup.string(),
        verifikasi_kelengkapan_resume_medis_keterangan: yup.string(),
        verifikasi_kelengkapan_x_ray: yup.string(),
        verifikasi_kelengkapan_x_ray_keterangan: yup.string(),
        persiapan_puasa: yup.string(),
        persiapan_puasa_keterangan: yup.string(),
        persiapan_prothese_luar: yup.string(),
        persiapan_prothese_luar_keterangan: yup.string(),
        persiapan_prothese_dalam: yup.string(),
        persiapan_prothese_dalam_keterangan: yup.string(),
        persiapan_penjepit_rambut: yup.string(),
        persiapan_penjepit_rambut_keterangan: yup.string(),
        persiapan_kulit: yup.string(),
        persiapan_kulit_keterangan: yup.string(),
        persiapan_alat_bantu: yup.string(),
        persiapan_alat_bantu_keterangan: yup.string(),
        persiapan_obat_disertakan: yup.string(),
        persiapan_obat_disertakan_keterangan: yup.string(),
        persiapan_obat_terakhir_diberikan: yup.string(),
        persiapan_obat_terakhir_diberikan_keterangan: yup.string(),
        persiapan_vaskuler_akses: yup.string(),
        persiapan_vaskuler_akses_keterangan: yup.string(),
        lain_site_marking: yup.string(),
        lain_penjelasan_singkat: yup.string(),
        tanggal: yup.string(),
        site_marking: yup.string(),
        site_marking_keterangan: yup.string(),
        penjelasan_singkat: yup.string(),
        penjelasan_singkat_keterangan: yup.string(),
        "ttd-perawat-ruangan": yup.string(),
        "id-perawat-ruangan": yup.string(),
        "ttd-perawat-penerima": yup.string(),
        "id-perawat-penerima": yup.string(),
      });
    }

    static createFromJson(json: IUpdatePerioperativeNursingRecordsRajalRequest) {
      return new UpdatePerioperativeNursingRecordsRajalRequest(json);
    }
}
