import * as yup from 'yup';

import { AppRequest, IAppRequest } from '@src/shared/request';

export interface IUpdateChecklistPraOperasi extends IAppRequest {
    bb: string;
    tb: string;
    td: string;
    nadi: string;
    rr: string;
    t: string;
    sat: string;
    inform_consent_bedah: string;
    inform_consent: string;
    hamil: string;
    izin_sterilisasi: string;
    gelang_pengenal: string;
    gelang_alergi: string;
    implant: string;
    ekg: string;
    foto_fundus: string;
    usg_mata: string;
    biometri: string;
    makula: string;
    laboratorium: string;
    radiologi: string;
    resiko_jatuh: string;
    jenis_pasien: string;
    puasa: string;
    puasa_keterangan: string;
    anestesi: string;
    dokter_id: string;
    alergi: string;
    alergi_keterangan: string;
    pre_medikasi: string;
    gigi_palsu: string;
    lensa: string;
    perhiasan: string;
    rambut: string;
    kosmetik: string;
    kandung_kemih: string;
    gliserin: string;
    pembedahan: string;
    persiapan_darah: string;
    persiapan_darah_keterangan: string;
    golongan_darah: string;
    rhesus_fektor: string;
    kondisi_kulit_id: string;
    jenis_cairan: string;
    cairan_masuk: string;
    jam_mulai: string;
    needle_no: string;
    lokasi: string;
    infus_dipasang: string;
    pemeriksaan_lainnya: string;
    catatan_perawat: string;
    tanggal: string;
    "tanda-tangan-perawat-pengantar": string;
    "id-tanda-tangan-perawat-pengantar": string;
    "tanda-tangan-perawat-penerima": string;
    "id-tanda-tangan-perawat-penerima": string;
    "tanda-tangan-kepala-bedah": string;
    "id-tanda-tangan-kepala-bedah": string;
}

export class UpdateChecklistPraOperasi extends AppRequest {
    bb: string;
    tb: string;
    td: string;
    nadi: string;
    rr: string;
    t: string;
    sat: string;
    inform_consent_bedah: string;
    inform_consent: string;
    hamil: string;
    izin_sterilisasi: string;
    gelang_pengenal: string;
    gelang_alergi: string;
    implant: string;
    ekg: string;
    foto_fundus: string;
    usg_mata: string;
    biometri: string;
    makula: string;
    laboratorium: string;
    radiologi: string;
    resiko_jatuh: string;
    jenis_pasien: string;
    puasa: string;
    puasa_keterangan: string;
    anestesi: string;
    dokter_id: string;
    alergi: string;
    alergi_keterangan: string;
    pre_medikasi: string;
    gigi_palsu: string;
    lensa: string;
    perhiasan: string;
    rambut: string;
    kosmetik: string;
    kandung_kemih: string;
    gliserin: string;
    pembedahan: string;
    persiapan_darah: string;
    persiapan_darah_keterangan: string;
    golongan_darah: string;
    rhesus_fektor: string;
    kondisi_kulit_id: string;
    jenis_cairan: string;
    cairan_masuk: string;
    jam_mulai: string;
    needle_no: string;
    lokasi: string;
    infus_dipasang: string;
    pemeriksaan_lainnya: string;
    catatan_perawat: string;
    tanggal: string;
    "tanda-tangan-perawat-pengantar": string;
    "id-tanda-tangan-perawat-pengantar": string;
    "tanda-tangan-perawat-penerima": string;
    "id-tanda-tangan-perawat-penerima": string;
    "tanda-tangan-kepala-bedah": string;
    "id-tanda-tangan-kepala-bedah": string;

    constructor(request: IUpdateChecklistPraOperasi) {
      super(request);
      this.bb = request.bb;
      this.tb = request.tb;
      this.td = request.td;
      this.nadi = request.nadi;
      this.rr = request.rr;
      this.t = request.t;
      this.sat = request.sat;
      this.inform_consent_bedah = request.inform_consent_bedah;
      this.inform_consent = request.inform_consent;
      this.hamil = request.hamil;
      this.izin_sterilisasi = request.izin_sterilisasi;
      this.gelang_pengenal = request.gelang_pengenal;
      this.gelang_alergi = request.gelang_alergi;
      this.implant = request.implant;
      this.ekg = request.ekg;
      this.foto_fundus = request.foto_fundus;
      this.usg_mata = request.usg_mata;
      this.biometri = request.biometri;
      this.makula = request.makula;
      this.laboratorium = request.laboratorium;
      this.radiologi =  request.radiologi;
      this.resiko_jatuh = request.resiko_jatuh;
      this.jenis_pasien = request.jenis_pasien;
      this.puasa = request.puasa;
      this.puasa_keterangan = request.puasa_keterangan;
      this.anestesi = request.anestesi;
      this.dokter_id = request.dokter_id;
      this.alergi = request.alergi;
      this.alergi_keterangan = request.alergi_keterangan;
      this.pre_medikasi = request.pre_medikasi;
      this.gigi_palsu = request.gigi_palsu;
      this.lensa = request.lensa;
      this.perhiasan = request.perhiasan;
      this.rambut = request.rambut;
      this.kosmetik = request.kosmetik;
      this.kandung_kemih = request.kandung_kemih;
      this.gliserin = request.gliserin;
      this.pembedahan = request.pembedahan;
      this.persiapan_darah = request.persiapan_darah;
      this.persiapan_darah_keterangan = request.persiapan_darah_keterangan;
      this.golongan_darah = request.golongan_darah;
      this.rhesus_fektor = request.rhesus_fektor;
      this.kondisi_kulit_id = request.kondisi_kulit_id;
      this.jenis_cairan = request.jenis_cairan;
      this.cairan_masuk = request.cairan_masuk;
      this.jam_mulai =  request.jam_mulai;
      this.needle_no = request.needle_no;
      this.lokasi = request.lokasi;
      this.infus_dipasang = request.infus_dipasang;
      this.pemeriksaan_lainnya = request.pemeriksaan_lainnya;
      this.catatan_perawat = request.catatan_perawat;
      this.tanggal = request.tanggal;
      this['tanda-tangan-perawat-pengantar'] = request['tanda-tangan-perawat-pengantar'];
      this['id-tanda-tangan-perawat-pengantar'] = request['id-tanda-tangan-perawat-pengantar'];
      this['tanda-tangan-perawat-penerima'] = request['tanda-tangan-perawat-penerima'];
      this['id-tanda-tangan-perawat-penerima'] = request['id-tanda-tangan-perawat-penerima'];
      this['tanda-tangan-kepala-bedah'] = request['tanda-tangan-kepala-bedah'];
      this['id-tanda-tangan-kepala-bedah'] = request['id-tanda-tangan-kepala-bedah'];
    }

    static schema() {
      return yup.object().shape({
        bb: yup.string(),
        tb: yup.string(),
        td: yup.string(),
        nadi: yup.string(),
        rr: yup.string(),
        t: yup.string(),
        sat: yup.string(),
        inform_consent_bedah: yup.string(),
        inform_consent: yup.string(),
        hamil: yup.string(),
        izin_sterilisasi: yup.string(),
        gelang_pengenal: yup.string(),
        gelang_alergi: yup.string(),
        implant: yup.string(),
        ekg: yup.string(),
        foto_fundus: yup.string(),
        usg_mata: yup.string(),
        biometri: yup.string(),
        makula: yup.string(),
        laboratorium: yup.string(),
        radiologi: yup.string(),
        resiko_jatuh: yup.string(),
        jenis_pasien: yup.string(),
        puasa: yup.string(),
        puasa_keterangan: yup.string(),
        anestesi: yup.string(),
        dokter_id: yup.string(),
        alergi: yup.string(),
        alergi_keterangan: yup.string(),
        pre_medikasi: yup.string(),
        gigi_palsu: yup.string(),
        lensa: yup.string(),
        perhiasan: yup.string(),
        rambut: yup.string(),
        kosmetik: yup.string(),
        kandung_kemih: yup.string(),
        gliserin: yup.string(),
        pembedahan: yup.string(),
        persiapan_darah: yup.string(),
        persiapan_darah_keterangan: yup.string(),
        golongan_darah: yup.string(),
        rhesus_fektor: yup.string(),
        kondisi_kulit_id: yup.string(),
        jenis_cairan: yup.string(),
        cairan_masuk: yup.string(),
        jam_mulai: yup.string(),
        needle_no: yup.string(),
        lokasi: yup.string(),
        infus_dipasang: yup.string(),
        pemeriksaan_lainnya: yup.string(),
        catatan_perawat: yup.string(),
        tanggal: yup.string(),
        "tanda-tangan-perawat-pengantar": yup.string(),
        "id-tanda-tangan-perawat-pengantar": yup.string(),
        "tanda-tangan-perawat-penerima": yup.string(),
        "id-tanda-tangan-perawat-penerima": yup.string(),
        "tanda-tangan-kepala-bedah": yup.string(),
        "id-tanda-tangan-kepala-bedah": yup.string(),
      });
    }

    static createFromJson(json: IUpdateChecklistPraOperasi) {
      return new UpdateChecklistPraOperasi(json);
    }
}
