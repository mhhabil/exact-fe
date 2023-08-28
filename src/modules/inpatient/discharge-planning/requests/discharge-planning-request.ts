import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@src/shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IUpdateDischargePlanningRequest extends IAppRequest {
  pasien_dm: string;
  pasien_dpjp: string;
  waktu_masuk_rs: string;
  pasien_alasan: string;
  pasien_perawat: string;
  pasien_tanggal: string;
  pasien_discharge: string;
  pasien_estimasi: string;
  keterangan_pasien: string;
  keterangan_pekerjaan: string;
  keterangan_keuangan: string;
  keterangan_antisipasi: string;
  keterangan_antisipasi_keterangan: string;
  uraian_value: string[];
  keterangan_membantu_keperluan: string;
  keterangan_membantu_keperluan_keterangan: string;
  keterangan_tinggal_sendiri: string;
  keterangan_tinggal_sendiri_keterangan: string;
  keterangan_peralatan_sendiri: string;
  keterangan_peralatan_sendiri_keterangan: string;
  keterangan_alat_bantu_sendiri: string;
  keterangan_alat_bantu_sendiri_keterangan: string;
  keterangan_bantuan_khusus: string;
  keterangan_bantuan_khusus_keterangan: string;
  keterangan_bantuan_pribadi: string;
  keterangan_bantuan_pribadi_keterangan: string;
  keterangan_nyeri_kronis: string;
  keterangan_nyeri_kronis_keterangan: string;
  edukasi_kesehatan: string;
  edukasi_kesehatan_keterangan: string;
  keterampilan_khusus: string;
  keterampilan_khusus_keterangan: string;
  jadwal_kontrol: string;
  jadwal_kontrol_keterangan: string;
  obat_pulang_check: string;
  obat_pulang_waktu: string;
  obat_pulang_keterangan: string;
  surat_kontrol_check: string;
  surat_kontrol_waktu: string;
  surat_kontrol_keterangan: string;
  id_perawat_pengkaji: string;
  tanda_tangan_perawat_pengkaji: string;
  tanda_tangan_pasien: string;
}

export class UpdateDischargePlanningRequest extends AppRequest {
  pasien_dm: string;
  pasien_dpjp: string;
  waktu_masuk_rs: string;
  pasien_alasan: string;
  pasien_perawat: string;
  pasien_tanggal: string;
  pasien_discharge: string;
  pasien_estimasi: string;
  keterangan_pasien: string;
  keterangan_pekerjaan: string;
  keterangan_keuangan: string;
  keterangan_antisipasi: string;
  keterangan_antisipasi_keterangan: string;
  uraian_value: string[];
  keterangan_membantu_keperluan: string;
  keterangan_membantu_keperluan_keterangan: string;
  keterangan_tinggal_sendiri: string;
  keterangan_tinggal_sendiri_keterangan: string;
  keterangan_peralatan_sendiri: string;
  keterangan_peralatan_sendiri_keterangan: string;
  keterangan_alat_bantu_sendiri: string;
  keterangan_alat_bantu_sendiri_keterangan: string;
  keterangan_bantuan_khusus: string;
  keterangan_bantuan_khusus_keterangan: string;
  keterangan_bantuan_pribadi: string;
  keterangan_bantuan_pribadi_keterangan: string;
  keterangan_nyeri_kronis: string;
  keterangan_nyeri_kronis_keterangan: string;
  edukasi_kesehatan: string;
  edukasi_kesehatan_keterangan: string;
  keterampilan_khusus: string;
  keterampilan_khusus_keterangan: string;
  jadwal_kontrol: string;
  jadwal_kontrol_keterangan: string;
  obat_pulang_check: string;
  obat_pulang_waktu: string;
  obat_pulang_keterangan: string;
  surat_kontrol_check: string;
  surat_kontrol_waktu: string;
  surat_kontrol_keterangan: string;
  id_perawat_pengkaji: string;
  tanda_tangan_perawat_pengkaji: string;
  tanda_tangan_pasien: string;
  constructor(req: IUpdateDischargePlanningRequest) {
    super(req);
    this.pasien_dm = req.pasien_dm;
    this.pasien_dpjp = req.pasien_dpjp;
    this.waktu_masuk_rs = req.waktu_masuk_rs;
    this.pasien_alasan = req.pasien_alasan;
    this.pasien_perawat = req.pasien_perawat;
    this.pasien_tanggal = req.pasien_tanggal ? DateTimeConverter.convertToNormalDatetime(req.pasien_tanggal) : '';
    this.pasien_discharge = req.pasien_discharge ? DateTimeConverter.convertToNormalDatetime(req.pasien_discharge) : '';
    this.pasien_estimasi = req.pasien_estimasi ? DateTimeConverter.convertToNormalDatetime(req.pasien_estimasi) : '';
    this.keterangan_pasien = req.keterangan_pasien;
    this.keterangan_pekerjaan = req.keterangan_pekerjaan;
    this.keterangan_keuangan = req.keterangan_keuangan;
    this.keterangan_antisipasi = req.keterangan_antisipasi;
    this.keterangan_antisipasi_keterangan = req.keterangan_antisipasi_keterangan;
    this.uraian_value = req.uraian_value;
    this.keterangan_membantu_keperluan = req.keterangan_membantu_keperluan;
    this.keterangan_membantu_keperluan_keterangan = req.keterangan_membantu_keperluan_keterangan;
    this.keterangan_tinggal_sendiri = req.keterangan_tinggal_sendiri;
    this.keterangan_tinggal_sendiri_keterangan = req.keterangan_tinggal_sendiri_keterangan;
    this.keterangan_peralatan_sendiri = req.keterangan_peralatan_sendiri;
    this.keterangan_peralatan_sendiri_keterangan = req.keterangan_peralatan_sendiri_keterangan;
    this.keterangan_alat_bantu_sendiri = req.keterangan_alat_bantu_sendiri;
    this.keterangan_alat_bantu_sendiri_keterangan = req.keterangan_alat_bantu_sendiri_keterangan;
    this.keterangan_bantuan_khusus = req.keterangan_bantuan_khusus;
    this.keterangan_bantuan_khusus_keterangan = req.keterangan_bantuan_khusus_keterangan;
    this.keterangan_bantuan_pribadi = req.keterangan_bantuan_pribadi;
    this.keterangan_bantuan_pribadi_keterangan = req.keterangan_bantuan_pribadi_keterangan;
    this.keterangan_nyeri_kronis = req.keterangan_nyeri_kronis;
    this.keterangan_nyeri_kronis_keterangan = req.keterangan_nyeri_kronis_keterangan;
    this.edukasi_kesehatan = req.edukasi_kesehatan;
    this.edukasi_kesehatan_keterangan = req.edukasi_kesehatan_keterangan;
    this.keterampilan_khusus = req.keterampilan_khusus;
    this.keterampilan_khusus_keterangan = req.keterampilan_khusus_keterangan;
    this.jadwal_kontrol = req.jadwal_kontrol;
    this.jadwal_kontrol_keterangan = req.jadwal_kontrol_keterangan;
    this.obat_pulang_check = req.obat_pulang_check;
    this.obat_pulang_waktu = req.obat_pulang_waktu;
    this.obat_pulang_keterangan = req.obat_pulang_keterangan;
    this.surat_kontrol_check = req.surat_kontrol_check;
    this.surat_kontrol_waktu = req.surat_kontrol_waktu;
    this.surat_kontrol_keterangan = req.surat_kontrol_keterangan;
    this.id_perawat_pengkaji = req.id_perawat_pengkaji;
    this.tanda_tangan_perawat_pengkaji = req.tanda_tangan_perawat_pengkaji;
    this.tanda_tangan_pasien = req.tanda_tangan_pasien;
  }

  static schema() {
    return yup.object().shape({
      pasien_dm: yup.string(),
      pasien_dpjp: yup.string(),
      waktu_masuk_rs: yup.string(),
      pasien_alesan: yup.string(),
      pasien_perawat: yup.string(),
      pasien_tanggal: yup.string(),
      pasien_discharge: yup.string(),
      pasien_estimasi: yup.string(),
      keterangan_pasien: yup.string(),
      keterangan_pekerjaan: yup.string(),
      keterangan_keuangan: yup.string(),
      keterangan_antisipasi: yup.string(),
      keterangan_antisipasi_keterangan: yup.string(),
      uraian_value: yup.string(),
      keterangan_membantu_keperluan: yup.string(),
      keterangan_membantu_keperluan_keterangan: yup.string(),
      keterangan_tinggal_sendiri: yup.string(),
      keterangan_tinggal_sendiri_keterangan: yup.string(),
      keterangan_peralatan_sendiri: yup.string(),
      keterangan_peralatan_sendiri_keterangan: yup.string(),
      keterangan_alat_bantu_sendiri: yup.string(),
      keterangan_alat_bantu_sendiri_keterangan: yup.string(),
      keterangan_bantuan_khusus: yup.string(),
      keterangan_bantuan_khusus_keterangan: yup.string(),
      keterangan_bantuan_pribadi: yup.string(),
      keterangan_bantuan_pribadi_keterangan: yup.string(),
      keterangan_nyeri_kronis: yup.string(),
      keterangan_nyeri_kronis_keterangan: yup.string(),
      edukasi_kesehatan: yup.string(),
      edukasi_kesehatan_keterangan: yup.string(),
      keterampilan_khusus: yup.string(),
      keterampilan_khusus_keterangan: yup.string(),
      jadwal_kontrol: yup.string(),
      jadwal_kontrol_keterangan: yup.string(),
      obat_pulang_check: yup.string(),
      obat_pulang_waktu: yup.string(),
      obat_pulang_keterangan: yup.string(),
      surat_kontrol_check: yup.string(),
      surat_kontrol_waktu: yup.string(),
      surat_kontrol_keterangan: yup.string(),
      id_perawat_pengkaji: yup.string(),
      tanda_tangan_perawat_pengkaji: yup.string(),
      tanda_tangan_pasien: yup.string(),
    });
  }

  static createFromJson(json: IUpdateDischargePlanningRequest) {
    return new UpdateDischargePlanningRequest(json);
  }
}
