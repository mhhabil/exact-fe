import * as yup from 'yup';

import { AppRequest, IAppRequest } from '@src/shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IUpdateAssesmenPraOperasi extends IAppRequest {
    td: string;
    nadi: string;
    rr: string;
    suhu: string;
    skala_nyeri: string;
    alergi: string;
    alergi_keterangan: string;
    penyakit_peserta: Array<string>;
    penyakit_peserta_keterangan: string;
    pengobatan_saat_ini: Array<string>;
    pengobatan_saat_ini_lain: string;
    tonometri: string;
    biometri: string;
    usg_mata: string;
    foto_fundus: string;
    oct_makula: string;
    dll: string;
    hasil_konsultasi: string;
    persediaan_darah: string;
    persetujuan: string;
    anestesi: string;
    jenis_kasus: string;
    diagnosa: string;
    rencana_operasi: string;
    tanggal_operasi: string;
    ahli_bedah: string;
    tanggal: string;
    ttd_dokter: string;
    id_dokter_ttd: string;
    undefined: string;
}

export class UpdateAssesmenPraOperasi extends AppRequest {
    td: string;
    nadi: string;
    rr: string;
    suhu: string;
    skala_nyeri: string;
    alergi: string;
    alergi_keterangan: string;
    penyakit_peserta: Array<string>;
    penyakit_peserta_keterangan: string;
    pengobatan_saat_ini: Array<string>;
    pengobatan_saat_ini_lain: string;
    tonometri: string;
    biometri: string;
    usg_mata: string;
    foto_fundus: string;
    oct_makula: string;
    dll: string;
    hasil_konsultasi: string;
    persediaan_darah: string;
    persetujuan: string;
    anestesi: string;
    jenis_kasus: string;
    diagnosa: string;
    rencana_operasi: string;
    tanggal_operasi: string;
    ahli_bedah:  string;
    tanggal: string;
    ttd_dokter: string;
    id_dokter_ttd: string;
    undefined: string;
    constructor(request: IUpdateAssesmenPraOperasi) {
      super(request);
      this.td = request.td;
      this.nadi = request.nadi;
      this.rr = request.rr;
      this.suhu = request.suhu;
      this.skala_nyeri = request.skala_nyeri;
      this.alergi = request.alergi;
      this.alergi_keterangan = request.alergi_keterangan;
      this.penyakit_peserta = request.penyakit_peserta;
      this.penyakit_peserta_keterangan = request.penyakit_peserta_keterangan;
      this.pengobatan_saat_ini = request.pengobatan_saat_ini;
      this.pengobatan_saat_ini_lain = request.pengobatan_saat_ini_lain;
      this.tonometri = request.tonometri;
      this.biometri = request.biometri;
      this.usg_mata = request.usg_mata;
      this.foto_fundus = request.foto_fundus;
      this.oct_makula = request.oct_makula;
      this.dll = request.dll;
      this.hasil_konsultasi = request.hasil_konsultasi;
      this.persediaan_darah = request.persediaan_darah;
      this.persetujuan = request.persetujuan;
      this.anestesi = request.anestesi;
      this.jenis_kasus = request.jenis_kasus;
      this.diagnosa = request.diagnosa;
      this.rencana_operasi = request.rencana_operasi;
      this.tanggal_operasi = request.tanggal_operasi ? DateTimeConverter.convertToNormalDatetime(request.tanggal_operasi) : '';
      this.ahli_bedah = request.ahli_bedah;
      this.tanggal = request.tanggal ?  DateTimeConverter.convertToNormalDatetime(request.tanggal) : '';
      this.ttd_dokter = request.ttd_dokter;
      this.id_dokter_ttd = request.id_dokter_ttd;
      this.undefined = request.undefined;
    }

    static schema() {
      return yup.object().shape({
        td: yup.string(),
        nadi: yup.string(),
        rr: yup.string(),
        suhu: yup.string(),
        skala_nyeri: yup.string(),
        alergi: yup.string(),
        alergi_keterangan: yup.string(),
        penyakit_peserta: yup.string(),
        penyakit_peserta_keterangan: yup.string(),
        pengobatan_saat_ini: yup.string(),
        pengobatan_saat_ini_lain: yup.string(),
        tonometri: yup.string(),
        biometri: yup.string(),
        usg_mata: yup.string(),
        foto_fundus: yup.string(),
        oct_makula: yup.string(),
        dll: yup.string(),
        hasil_konsultasi: yup.string(),
        persediaan_darah: yup.string(),
        persetujuan: yup.string(),
        anestesi: yup.string(),
        jenis_kasus: yup.string(),
        diagnosa: yup.string(),
        rencana_operasi: yup.string(),
        tanggal_operasi: yup.string(),
        ahli_bedah: yup.string(),
        tanggal: yup.string(),
        ttd_dokter: yup.string(),
        id_dokter_ttd: yup.string(),
        undefined: yup.string(),
      });
    }

    static createFromJson(json: IUpdateAssesmenPraOperasi) {
      return new UpdateAssesmenPraOperasi(json);
    }
}
