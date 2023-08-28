import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IUpdatePerioperativeNursingRecordsRequest extends IAppRequest {
    suhu: string;
    nadi: string;
    rr: string;
    td: string;
    tb: string;
    bb: string;
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
    verifikasi_periksa_identitas_rajal_keterangan: string;
    verifikasi_periksa_gelang: string;
    verifikasi_periksa_gelang_keterangan: string;
    verifikasi_periksa_gelang_rajal_keterangan: string;
    verifikasi_surat_pengantar_operasi: string;
    verifikasi_surat_pengantar_operasi_keterangan: string;
    verifikasi_surat_pengantar_operasi_rajal_keterangan: string;
    verifikasi_jenis_lokasi_operasi: string;
    verifikasi_jenis_lokasi_operasi_keterangan: string;
    verifikasi_jenis_lokasi_operasi_rajal_keterangan: string;
    verifikasi_masalah_bahasa_komunikasi: string;
    verifikasi_masalah_bahasa_komunikasi_keterangan: string;
    verifikasi_masalah_bahasa_komunikasi_rajal_keterangan: string;
    verifikasi_surat_izin_operasi: string;
    verifikasi_surat_izin_operasi_keterangan: string;
    verifikasi_surat_izin_operasi_rajal_keterangan: string;
    verifikasi_persetujuan_anestesi: string;
    verifikasi_persetujuan_anestesi_keterangan: string;
    verifikasi_persetujuan_anestesi_rajal_keterangan: string;
    verifikasi_kelengkapan_resume_medis: string;
    verifikasi_kelengkapan_resume_medis_keterangan: string;
    verifikasi_kelengkapan_resume_medis_rajal_keterangan: string;
    verifikasi_kelengkapan_x_ray: string;
    verifikasi_kelengkapan_x_ray_keterangan: string;
    verifikasi_kelengkapan_x_ray_rajal_keterangan: string;
    persiapan_puasa: string;
    persiapan_puasa_keterangan: string;
    persiapan_puasa_rajal_keterangan: string;
    persiapan_prothese_luar: string;
    persiapan_prothese_luar_keterangan: string;
    persiapan_prothese_luar_rajal_keterangan: string;
    persiapan_prothese_dalam: string;
    persiapan_prothese_dalam_keterangan: string;
    persiapan_prothese_dalam_rajal_keterangan: string;
    persiapan_penjepit_rambut: string;
    persiapan_penjepit_rambut_keterangan: string;
    persiapan_penjepit_rambut_rajal_keterangan: string;
    persiapan_kulit: string;
    persiapan_kulit_keterangan: string;
    persiapan_kulit_rajal_keterangan: string;
    persiapan_alat_bantu: string;
    persiapan_alat_bantu_keterangan: string;
    persiapan_alat_bantu_rajal_keterangan: string;
    persiapan_obat_disertakan: string;
    persiapan_obat_disertakan_keterangan: string;
    persiapan_obat_disertakan_rajal_keterangan: string;
    persiapan_obat_terakhir_diberikan: string;
    persiapan_obat_terakhir_diberikan_keterangan: string;
    persiapan_obat_terakhir_diberikan_rajal_keterangan: string;
    persiapan_vaskuler_akses: string;
    persiapan_vaskuler_akses_keterangan: string;
    persiapan_vaskuler_akses_rajal_keterangan: string;
    lain_site_marking: string;
    lain_penjelasan_singkat: string;
    tanggal: string;
    "ttd-perawat-ruangan": string;
    "id-perawat-ruangan": string;
    "ttd-perawat-penerima": string;
    "id-perawat-penerima":  string;
}

export class UpdatePerioperativeNursingRecordsRequest extends AppRequest {
    suhu: string;
    nadi: string;
    rr: string;
    td: string;
    tb: string;
    bb: string;
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
    verifikasi_periksa_identitas_rajal_keterangan: string;
    verifikasi_periksa_gelang: string;
    verifikasi_periksa_gelang_keterangan: string;
    verifikasi_periksa_gelang_rajal_keterangan: string;
    verifikasi_surat_pengantar_operasi: string;
    verifikasi_surat_pengantar_operasi_keterangan: string;
    verifikasi_surat_pengantar_operasi_rajal_keterangan: string;
    verifikasi_jenis_lokasi_operasi: string;
    verifikasi_jenis_lokasi_operasi_keterangan: string;
    verifikasi_jenis_lokasi_operasi_rajal_keterangan: string;
    verifikasi_masalah_bahasa_komunikasi: string;
    verifikasi_masalah_bahasa_komunikasi_keterangan: string;
    verifikasi_masalah_bahasa_komunikasi_rajal_keterangan: string;
    verifikasi_surat_izin_operasi: string;
    verifikasi_surat_izin_operasi_keterangan: string;
    verifikasi_surat_izin_operasi_rajal_keterangan: string;
    verifikasi_persetujuan_anestesi: string;
    verifikasi_persetujuan_anestesi_keterangan: string;
    verifikasi_persetujuan_anestesi_rajal_keterangan: string;
    verifikasi_kelengkapan_resume_medis: string;
    verifikasi_kelengkapan_resume_medis_keterangan: string;
    verifikasi_kelengkapan_resume_medis_rajal_keterangan: string;
    verifikasi_kelengkapan_x_ray: string;
    verifikasi_kelengkapan_x_ray_keterangan: string;
    verifikasi_kelengkapan_x_ray_rajal_keterangan: string;
    persiapan_puasa: string;
    persiapan_puasa_keterangan: string;
    persiapan_puasa_rajal_keterangan: string;
    persiapan_prothese_luar: string;
    persiapan_prothese_luar_keterangan: string;
    persiapan_prothese_luar_rajal_keterangan: string;
    persiapan_prothese_dalam: string;
    persiapan_prothese_dalam_keterangan: string;
    persiapan_prothese_dalam_rajal_keterangan: string;
    persiapan_penjepit_rambut: string;
    persiapan_penjepit_rambut_keterangan: string;
    persiapan_penjepit_rambut_rajal_keterangan: string;
    persiapan_kulit: string;
    persiapan_kulit_keterangan: string;
    persiapan_kulit_rajal_keterangan: string;
    persiapan_alat_bantu: string;
    persiapan_alat_bantu_keterangan: string;
    persiapan_alat_bantu_rajal_keterangan: string;
    persiapan_obat_disertakan: string;
    persiapan_obat_disertakan_keterangan: string;
    persiapan_obat_disertakan_rajal_keterangan: string;
    persiapan_obat_terakhir_diberikan: string;
    persiapan_obat_terakhir_diberikan_keterangan: string;
    persiapan_obat_terakhir_diberikan_rajal_keterangan: string;
    persiapan_vaskuler_akses: string;
    persiapan_vaskuler_akses_keterangan: string;
    persiapan_vaskuler_akses_rajal_keterangan: string;
    lain_site_marking: string;
    lain_penjelasan_singkat: string;
    tanggal: string;
    "ttd-perawat-ruangan": string;
    "id-perawat-ruangan": string;
    "ttd-perawat-penerima": string;
    "id-perawat-penerima":  string;

    constructor(peri: IUpdatePerioperativeNursingRecordsRequest) {
      super(peri);
      this.suhu = peri.suhu;
      this.nadi = peri.nadi;
      this.rr = peri.rr;
      this.td = peri.td;
      this.tb = peri.tb;
      this.bb = peri.bb;
      this.skala_nyeri = peri.skala_nyeri;
      this.status_mental =  peri.status_mental;
      this.riwayat_penyakit = peri.riwayat_penyakit;
      this.riwayat_penyakit_keterangan = peri.riwayat_penyakit_keterangan;
      this.pengobatan_saat_ini =  peri.pengobatan_saat_ini;
      this.pengobatan_saat_ini_keterangan = peri.pengobatan_saat_ini_keterangan;
      this.alat_bantu = peri.alat_bantu;
      this.alat_bantu_keterangan = peri.alat_bantu_keterangan;
      this.operasi_sebelumnya = peri.operasi_sebelumnya;
      this.operasi_sebelumnya_keterangan = peri.operasi_sebelumnya_keterangan;
      this.operasi_sebelumnya_tanggal = peri.operasi_sebelumnya_tanggal;
      this.operasi_sebelumnya_di = peri.operasi_sebelumnya_di;
      this.alergi = peri.alergi;
      this.alergi_keterangan = peri.alergi_keterangan;
      this.pemeriksaan_penunjang = peri.pemeriksaan_penunjang;
      this.pemeriksaan_penunjang_keterangan = peri.pemeriksaan_penunjang_keterangan;
      this.verifikasi_periksa_identitas = peri.verifikasi_periksa_identitas;
      this.verifikasi_periksa_identitas_keterangan = peri.verifikasi_periksa_identitas_keterangan;
      this.verifikasi_periksa_identitas_rajal_keterangan = peri.verifikasi_periksa_identitas_rajal_keterangan;
      this.verifikasi_periksa_gelang = peri.verifikasi_periksa_gelang;
      this.verifikasi_periksa_gelang_keterangan = peri.verifikasi_periksa_gelang_keterangan;
      this.verifikasi_periksa_gelang_rajal_keterangan = peri.verifikasi_periksa_gelang_rajal_keterangan;
      this.verifikasi_surat_pengantar_operasi = peri.verifikasi_surat_pengantar_operasi;
      this.verifikasi_surat_pengantar_operasi_keterangan = peri.verifikasi_surat_pengantar_operasi_keterangan;
      this.verifikasi_surat_pengantar_operasi_rajal_keterangan = peri.verifikasi_surat_pengantar_operasi_rajal_keterangan;
      this.verifikasi_jenis_lokasi_operasi = peri.verifikasi_jenis_lokasi_operasi;
      this.verifikasi_jenis_lokasi_operasi_keterangan = peri.verifikasi_jenis_lokasi_operasi_keterangan;
      this.verifikasi_jenis_lokasi_operasi_rajal_keterangan = peri.verifikasi_jenis_lokasi_operasi_rajal_keterangan;
      this.verifikasi_masalah_bahasa_komunikasi = peri.verifikasi_masalah_bahasa_komunikasi;
      this.verifikasi_masalah_bahasa_komunikasi_keterangan = peri.verifikasi_masalah_bahasa_komunikasi_keterangan;
      this.verifikasi_masalah_bahasa_komunikasi_rajal_keterangan = peri.verifikasi_masalah_bahasa_komunikasi_rajal_keterangan;
      this.verifikasi_surat_izin_operasi = peri.verifikasi_surat_izin_operasi;
      this.verifikasi_surat_izin_operasi_keterangan = peri.verifikasi_surat_izin_operasi_keterangan;
      this.verifikasi_surat_izin_operasi_rajal_keterangan = peri.verifikasi_surat_izin_operasi_rajal_keterangan;
      this.verifikasi_persetujuan_anestesi = peri.verifikasi_persetujuan_anestesi;
      this.verifikasi_persetujuan_anestesi_keterangan = peri.verifikasi_persetujuan_anestesi_keterangan;
      this.verifikasi_persetujuan_anestesi_rajal_keterangan = peri.verifikasi_persetujuan_anestesi_rajal_keterangan;
      this.verifikasi_kelengkapan_resume_medis = peri.verifikasi_kelengkapan_resume_medis;
      this.verifikasi_kelengkapan_resume_medis_keterangan = peri.verifikasi_kelengkapan_resume_medis_keterangan;
      this.verifikasi_kelengkapan_resume_medis_rajal_keterangan = peri.verifikasi_kelengkapan_resume_medis_rajal_keterangan;
      this.verifikasi_kelengkapan_x_ray = peri.verifikasi_kelengkapan_x_ray;
      this.verifikasi_kelengkapan_x_ray_keterangan = peri.verifikasi_kelengkapan_x_ray_keterangan;
      this.verifikasi_kelengkapan_x_ray_rajal_keterangan = peri.verifikasi_kelengkapan_x_ray_rajal_keterangan;
      this.persiapan_puasa = peri.persiapan_puasa;
      this.persiapan_puasa_keterangan = peri.persiapan_puasa_keterangan;
      this.persiapan_puasa_rajal_keterangan = peri.persiapan_puasa_rajal_keterangan;
      this.persiapan_prothese_luar = peri.persiapan_prothese_luar;
      this.persiapan_prothese_luar_keterangan = peri.persiapan_prothese_luar_keterangan;
      this.persiapan_prothese_luar_rajal_keterangan = peri.persiapan_prothese_luar_rajal_keterangan;
      this.persiapan_prothese_dalam = peri.persiapan_prothese_dalam;
      this.persiapan_prothese_dalam_keterangan = peri.persiapan_prothese_dalam_keterangan;
      this.persiapan_prothese_dalam_rajal_keterangan = peri.persiapan_prothese_dalam_rajal_keterangan;
      this.persiapan_penjepit_rambut = peri.persiapan_penjepit_rambut;
      this.persiapan_penjepit_rambut_keterangan = peri.persiapan_penjepit_rambut_keterangan;
      this.persiapan_penjepit_rambut_rajal_keterangan = peri.persiapan_penjepit_rambut_rajal_keterangan;
      this.persiapan_kulit = peri.persiapan_kulit;
      this.persiapan_kulit_keterangan = peri.persiapan_kulit_keterangan;
      this.persiapan_kulit_rajal_keterangan = peri.persiapan_kulit_rajal_keterangan;
      this.persiapan_alat_bantu = peri.persiapan_alat_bantu;
      this.persiapan_alat_bantu_keterangan = peri.persiapan_alat_bantu_keterangan;
      this.persiapan_alat_bantu_rajal_keterangan = peri.persiapan_alat_bantu_rajal_keterangan;
      this.persiapan_obat_disertakan = peri.persiapan_obat_disertakan;
      this.persiapan_obat_disertakan_keterangan = peri.persiapan_obat_disertakan_keterangan;
      this.persiapan_obat_disertakan_rajal_keterangan = peri.persiapan_obat_disertakan_rajal_keterangan;
      this.persiapan_obat_terakhir_diberikan = peri.persiapan_obat_terakhir_diberikan;
      this.persiapan_obat_terakhir_diberikan_keterangan = peri.persiapan_obat_terakhir_diberikan_keterangan;
      this.persiapan_obat_terakhir_diberikan_rajal_keterangan = peri.persiapan_obat_terakhir_diberikan_rajal_keterangan;
      this.persiapan_vaskuler_akses = peri.persiapan_vaskuler_akses;
      this.persiapan_vaskuler_akses_keterangan = peri.persiapan_vaskuler_akses_keterangan;
      this.persiapan_vaskuler_akses_rajal_keterangan = peri.persiapan_vaskuler_akses_rajal_keterangan;
      this.lain_site_marking = peri.lain_site_marking;
      this.lain_penjelasan_singkat = peri.lain_penjelasan_singkat;
      this.tanggal = peri.tanggal ? DateTimeConverter.convertToNormalDatetime(peri.tanggal) : '';
      this["ttd-perawat-ruangan"] = peri['ttd-perawat-ruangan'];
      this["id-perawat-ruangan"] = peri['id-perawat-ruangan'];
      this["ttd-perawat-penerima"] = peri['ttd-perawat-penerima'];
      this["id-perawat-penerima"]  = peri['id-perawat-penerima'];
    }

    static schema() {
      return yup.object().shape({
        suhu: yup.string(),
        nadi: yup.string(),
        rr: yup.string(),
        td: yup.string(),
        tb: yup.string(),
        bb: yup.string(),
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
        verifikasi_periksa_identitas_rajal_keterangan: yup.string(),
        verifikasi_periksa_gelang: yup.string(),
        verifikasi_periksa_gelang_keterangan: yup.string(),
        verifikasi_periksa_gelang_rajal_keterangan: yup.string(),
        verifikasi_surat_pengantar_operasi: yup.string(),
        verifikasi_surat_pengantar_operasi_keterangan: yup.string(),
        verifikasi_surat_pengantar_operasi_rajal_keterangan: yup.string(),
        verifikasi_jenis_lokasi_operasi: yup.string(),
        verifikasi_jenis_lokasi_operasi_keterangan: yup.string(),
        verifikasi_jenis_lokasi_operasi_rajal_keterangan: yup.string(),
        verifikasi_masalah_bahasa_komunikasi: yup.string(),
        verifikasi_masalah_bahasa_komunikasi_keterangan: yup.string(),
        verifikasi_masalah_bahasa_komunikasi_rajal_keterangan: yup.string(),
        verifikasi_surat_izin_operasi: yup.string(),
        verifikasi_surat_izin_operasi_keterangan: yup.string(),
        verifikasi_surat_izin_operasi_rajal_keterangan: yup.string(),
        verifikasi_persetujuan_anestesi: yup.string(),
        verifikasi_persetujuan_anestesi_keterangan: yup.string(),
        verifikasi_persetujuan_anestesi_rajal_keterangan: yup.string(),
        verifikasi_kelengkapan_resume_medis: yup.string(),
        verifikasi_kelengkapan_resume_medis_keterangan: yup.string(),
        verifikasi_kelengkapan_resume_medis_rajal_keterangan: yup.string(),
        verifikasi_kelengkapan_x_ray: yup.string(),
        verifikasi_kelengkapan_x_ray_keterangan: yup.string(),
        verifikasi_kelengkapan_x_ray_rajal_keterangan: yup.string(),
        persiapan_puasa: yup.string(),
        persiapan_puasa_keterangan: yup.string(),
        persiapan_puasa_rajal_keterangan: yup.string(),
        persiapan_prothese_luar: yup.string(),
        persiapan_prothese_luar_keterangan: yup.string(),
        persiapan_prothese_luar_rajal_keterangan: yup.string(),
        persiapan_prothese_dalam: yup.string(),
        persiapan_prothese_dalam_keterangan: yup.string(),
        persiapan_prothese_dalam_rajal_keterangan: yup.string(),
        persiapan_penjepit_rambut: yup.string(),
        persiapan_penjepit_rambut_keterangan: yup.string(),
        persiapan_penjepit_rambut_rajal_keterangan: yup.string(),
        persiapan_kulit: yup.string(),
        persiapan_kulit_keterangan: yup.string(),
        persiapan_kulit_rajal_keterangan: yup.string(),
        persiapan_alat_bantu: yup.string(),
        persiapan_alat_bantu_keterangan: yup.string(),
        persiapan_alat_bantu_rajal_keterangan: yup.string(),
        persiapan_obat_disertakan: yup.string(),
        persiapan_obat_disertakan_keterangan: yup.string(),
        persiapan_obat_disertakan_rajal_keterangan: yup.string(),
        persiapan_obat_terakhir_diberikan: yup.string(),
        persiapan_obat_terakhir_diberikan_keterangan: yup.string(),
        persiapan_obat_terakhir_diberikan_rajal_keterangan: yup.string(),
        persiapan_vaskuler_akses: yup.string(),
        persiapan_vaskuler_akses_keterangan: yup.string(),
        persiapan_vaskuler_akses_rajal_keterangan: yup.string(),
        lain_site_marking: yup.string(),
        lain_penjelasan_singkat: yup.string(),
        tanggal: yup.string(),
        "ttd-perawat-ruangan": yup.string(),
        "id-perawat-ruangan": yup.string(),
        "ttd-perawat-penerima": yup.string(),
        "id-perawat-penerima": yup.string(),
      });
    }

    static createFromJson(json: IUpdatePerioperativeNursingRecordsRequest) {
      return new UpdatePerioperativeNursingRecordsRequest(json);
    }
}
