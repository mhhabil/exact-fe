import * as yup from 'yup';

import { AppRequest, IAppRequest } from '@src/shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IUpdatePatientHandoverFormRequest extends IAppRequest {
    penanggungjawab: string;
    penanggungjawab_lain: string;
    kesadaran: string;
    luka_operasi: string;
    luka_lain: string;
    td: string;
    rr: string;
    n: string;
    t: string;
    anestesi: string;
    alderette_aktivitas: string;
    alderette_aktivitas_keterangan: string;
    alderette_sirkulasi: string;
    alderette_sirkulasi_keterangan: string;
    alderette_pernafasan: string;
    alderette_pernafasan_keterangan: string;
    alderette_kesadaran: string;
    alderette_kesadaran_keterangan: string;
    alderette_warna_kulit: string;
    alderette_warna_kulit_keterangan: string;
    alderette_score: string;
    steward_kesadaran: string;
    steward_kesadaran_keterangan: string;
    steward_pernafasan: string;
    steward_pernafasan_keterangan: string;
    steward_motorik: string;
    steward_motorik_keterangan: string;
    steward_score: string;
    kesakitan: string;
    mual: string;
    antibiotik: string;
    tetes_mata: string;
    obat_lain: string;
    infus: string;
    minum: string;
    lain_lain: string;
    monitoring_setiap: string;
    monitoring_selama: string;
    pa: string;
    waktu_verifikasi: string;
    ttd_perawat_ranap_rajal: string;
    id_perawat_ranap_rajal: string;
    ttd_perawat_kamar_bedah: string;
    id_perawat_kamar_bedah: string;
}

export class UpdatePatientHandoverFormRequest extends AppRequest  {
    penanggungjawab: string;
    penanggungjawab_lain: string;
    kesadaran: string;
    luka_operasi: string;
    luka_lain: string;
    td: string;
    rr: string;
    n: string;
    t: string;
    anestesi: string;
    alderette_aktivitas: string;
    alderette_aktivitas_keterangan: string;
    alderette_sirkulasi: string;
    alderette_sirkulasi_keterangan: string;
    alderette_pernafasan: string;
    alderette_pernafasan_keterangan: string;
    alderette_kesadaran: string;
    alderette_kesadaran_keterangan: string;
    alderette_warna_kulit: string;
    alderette_warna_kulit_keterangan: string;
    alderette_score: string;
    steward_kesadaran: string;
    steward_kesadaran_keterangan: string;
    steward_pernafasan: string;
    steward_pernafasan_keterangan: string;
    steward_motorik: string;
    steward_motorik_keterangan: string;
    steward_score: string;
    kesakitan: string;
    mual: string;
    antibiotik: string;
    tetes_mata: string;
    obat_lain: string;
    infus: string;
    minum: string;
    lain_lain: string;
    monitoring_setiap: string;
    monitoring_selama: string;
    pa: string;
    waktu_verifikasi: string;
    ttd_perawat_ranap_rajal: string;
    id_perawat_ranap_rajal: string;
    ttd_perawat_kamar_bedah: string;
    id_perawat_kamar_bedah: string;
    constructor(request: IUpdatePatientHandoverFormRequest) {
      super(request);
      this.penanggungjawab = request.penanggungjawab;
      this.penanggungjawab_lain = request.penanggungjawab_lain;
      this.kesadaran = request.kesadaran;
      this.luka_operasi = request.luka_operasi;
      this.luka_lain = request.luka_lain;
      this.td = request.td;
      this.rr = request.rr;
      this.n = request.n;
      this.t = request.t;
      this.anestesi = request.anestesi;
      this.alderette_aktivitas = request.alderette_aktivitas;
      this.alderette_aktivitas_keterangan = request.alderette_aktivitas_keterangan;
      this.alderette_sirkulasi = request.alderette_sirkulasi;
      this.alderette_sirkulasi_keterangan = request.alderette_sirkulasi_keterangan;
      this.alderette_pernafasan = request.alderette_pernafasan;
      this.alderette_pernafasan_keterangan = request.alderette_pernafasan_keterangan;
      this.alderette_kesadaran = request.alderette_kesadaran;
      this.alderette_kesadaran_keterangan = request.alderette_kesadaran_keterangan;
      this.alderette_warna_kulit = request.alderette_warna_kulit;
      this.alderette_warna_kulit_keterangan = request.alderette_warna_kulit_keterangan;
      this.alderette_score = request.alderette_score;
      this.steward_kesadaran = request.steward_kesadaran;
      this.steward_kesadaran_keterangan = request.steward_kesadaran_keterangan;
      this.steward_pernafasan =  request.steward_pernafasan;
      this.steward_pernafasan_keterangan = request.steward_pernafasan_keterangan;
      this.steward_motorik = request.steward_motorik;
      this.steward_motorik_keterangan = request.steward_motorik_keterangan;
      this.steward_score = request.steward_score;
      this.kesakitan = request.kesakitan;
      this.mual = request.mual;
      this.antibiotik = request.antibiotik;
      this.tetes_mata = request.tetes_mata;
      this.obat_lain = request.obat_lain;
      this.infus = request.infus;
      this.minum = request.minum;
      this.lain_lain = request.lain_lain;
      this.monitoring_setiap = request.monitoring_setiap;
      this.monitoring_selama = request.monitoring_selama;
      this.pa = request.pa;
      this.waktu_verifikasi = request.waktu_verifikasi ? DateTimeConverter.convertToNormalDatetime(request.waktu_verifikasi) : '';
      this.ttd_perawat_ranap_rajal = request.ttd_perawat_ranap_rajal;
      this.ttd_perawat_kamar_bedah = request.ttd_perawat_kamar_bedah;
      this.id_perawat_ranap_rajal = request.id_perawat_ranap_rajal;
      this.id_perawat_kamar_bedah =  request.id_perawat_kamar_bedah;
    }

    static schema() {
      return yup.object().shape({
        penanggungjawab: yup.string(),
        penanggungjawab_lain: yup.string(),
        kesadaran: yup.string(),
        luka_operasi: yup.string(),
        luka_lain: yup.string(),
        td: yup.string(),
        rr: yup.string(),
        n: yup.string(),
        t: yup.string(),
        anestesi: yup.string(),
        alderette_aktivitas: yup.string(),
        alderette_aktivitas_keterangan: yup.string(),
        alderette_sirkulasi: yup.string(),
        alderette_sirkulasi_keterangan: yup.string(),
        alderette_pernafasan: yup.string(),
        alderette_pernafasan_keterangan: yup.string(),
        alderette_kesadaran: yup.string(),
        alderette_kesadaran_keterangan: yup.string(),
        alderette_warna_kulit: yup.string(),
        alderette_warna_kulit_keterangan: yup.string(),
        alderette_score:yup.string(),
        steward_kesadaran: yup.string(),
        steward_kesadaran_keterangan: yup.string(),
        steward_pernafasan: yup.string(),
        steward_pernafasan_keterangan: yup.string(),
        steward_motorik: yup.string(),
        steward_motorik_keterangan: yup.string(),
        steward_score: yup.string(),
        kesakitan: yup.string(),
        mual: yup.string(),
        antibiotik: yup.string(),
        tetes_mata: yup.string(),
        obat_lain: yup.string(),
        infus: yup.string(),
        minum: yup.string(),
        lain_lain: yup.string(),
        monitoring_setiap: yup.string(),
        monitoring_selama: yup.string(),
        pa: yup.string(),
        waktu_verifikasi: yup.string(),
        ttd_perawat_ranap_rajal: yup.string(),
        id_perawat_ranap_rajal: yup.string(),
        ttd_perawat_kamar_bedah: yup.string(),
        id_perawat_kamar_bedah: yup.string(),
      });
    }

    static createFromJson(json: IUpdatePatientHandoverFormRequest) {
      return new UpdatePatientHandoverFormRequest(json);
    }
}
