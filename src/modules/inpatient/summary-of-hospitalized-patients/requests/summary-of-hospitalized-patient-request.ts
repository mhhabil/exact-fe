import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface  IUpdateSummaryOfHospitalizedPatientRequest extends IAppRequest {
  pasien_dirawat: string;
  komorbiditas_1: string;
  komorbiditas_2: string;
  komorbiditas_3: string;
  komorbiditas_4: string;
  komorbiditas_5: string;
  mata: string;
  posisi_khusus: string;
  tanggal_masuk: string;
  tanggal_keluar: string;
  diagnosa_masuk: string;
  anamnesa: string;
  pemeriksaan_fisik: string;
  pemeriksaan_penunjang: string;
  diagnosa_utama: string;
  diagnosa_sekunder_1: string;
  diagnosa_sekunder_2: string;
  diagnosa_sekunder_3: string;
  diagnosa_sekunder_4: string;
  diagnosa_sekunder_5: string;
  obat_rs: string;
  tindakan: string;
  kondisi_pulang: string;
  anjuran: string;
  obat_rumah: string;
  tanggal: string;
  tanda_tangan_petugas: string;
  tanda_tangan_pasien: string;
  id_ttd_petugas: string;
  undefined: string;
  ruang_rawat: string;
}

export class UpdateSummaryOfHospitalizedPatientRequest extends AppRequest {
  pasien_dirawat: string;
  komorbiditas_1: string;
  komorbiditas_2: string;
  komorbiditas_3: string;
  komorbiditas_4: string;
  komorbiditas_5: string;
  mata: string;
  posisi_khusus: string;
  tanggal_masuk: string;
  tanggal_keluar: string;
  diagnosa_masuk: string;
  anamnesa: string;
  pemeriksaan_fisik: string;
  pemeriksaan_penunjang: string;
  diagnosa_utama: string;
  diagnosa_sekunder_1: string;
  diagnosa_sekunder_2: string;
  diagnosa_sekunder_3: string;
  diagnosa_sekunder_4: string;
  diagnosa_sekunder_5: string;
  obat_rs: string;
  tindakan: string;
  kondisi_pulang: string;
  anjuran: string;
  obat_rumah: string;
  tanggal: string;
  tanda_tangan_petugas: string;
  tanda_tangan_pasien: string;
  id_ttd_petugas: string;
  undefined: string;
  ruang_rawat: string;

  constructor(request: IUpdateSummaryOfHospitalizedPatientRequest) {
    super(request);
    this.pasien_dirawat = request.pasien_dirawat;
    this.komorbiditas_1 = request.komorbiditas_1;
    this.komorbiditas_2 = request.komorbiditas_2;
    this.komorbiditas_3 = request.komorbiditas_3;
    this.komorbiditas_4 = request.komorbiditas_4;
    this.komorbiditas_5 = request.komorbiditas_5;
    this.mata = request.mata
    this.posisi_khusus = request.posisi_khusus;
    this.tanggal_masuk = request.tanggal_masuk ? DateTimeConverter.convertToNormalDatetime(request.tanggal_masuk) : '';
    this.tanggal_keluar = request.tanggal_keluar ? DateTimeConverter.convertToNormalDatetime(request.tanggal_keluar) : '';
    this.diagnosa_masuk = request.diagnosa_masuk;
    this.anamnesa = request.anamnesa;
    this.pemeriksaan_fisik = request.pemeriksaan_fisik;
    this.pemeriksaan_penunjang = request.pemeriksaan_penunjang;
    this.diagnosa_utama = request.diagnosa_utama;
    this.diagnosa_sekunder_1 = request.diagnosa_sekunder_1;
    this.diagnosa_sekunder_2 = request.diagnosa_sekunder_2;
    this.diagnosa_sekunder_3 = request.diagnosa_sekunder_3;
    this.diagnosa_sekunder_4 = request.diagnosa_sekunder_4;
    this.diagnosa_sekunder_5 = request.diagnosa_sekunder_5;
    this.obat_rs = request.obat_rs;
    this.tindakan = request.tindakan;
    this.kondisi_pulang = request.kondisi_pulang;
    this.anjuran = request.anjuran;
    this.obat_rumah = request.obat_rumah;
    this.tanggal = request.tanggal;
    this.tanda_tangan_petugas = request.tanda_tangan_petugas;
    this.tanda_tangan_pasien = request.tanda_tangan_pasien;
    this.id_ttd_petugas = request.id_ttd_petugas;
    this.undefined = request.undefined;
    this.ruang_rawat = request.ruang_rawat;
  }

  static schema() {
    return yup.object().shape({
      pasien_dirawat: yup.string(),
      komorbiditas_1: yup.string(),
      komorbiditas_2: yup.string(),
      komorbiditas_3: yup.string(),
      komorbiditas_4: yup.string(),
      komorbiditas_5: yup.string(),
      mata: yup.string(),
      posisi_khusus: yup.string(),
      tanggal_masuk: yup.string(),
      tanggal_keluar: yup.string(),
      diagnosa_masuk: yup.string(),
      anamnesa: yup.string(),
      pemeriksaan_fisik: yup.string(),
      pemeriksaan_penunjang: yup.string(),
      diagnosa_utama: yup.string(),
      diagnosa_sekunder_1: yup.string(),
      diagnosa_sekunder_2: yup.string(),
      diagnosa_sekunder_3: yup.string(),
      diagnosa_sekunder_4: yup.string(),
      diagnosa_sekunder_5: yup.string(),
      obat_rs: yup.string(),
      tindakan: yup.string(),
      kondisi_pulang: yup.string(),
      anjuran: yup.string(),
      obat_rumah: yup.string(),
      tanggal: yup.string(),
      tanda_tangan_petugas: yup.string(),
      tanda_tangan_pasien:  yup.string(),
      id_ttd_petugas: yup.string(),
      undefined: yup.string(),
      ruang_rawat: yup.string(),
    });
  }

  static createFromJson(json: IUpdateSummaryOfHospitalizedPatientRequest) {
    return new UpdateSummaryOfHospitalizedPatientRequest(json);
  }
}
