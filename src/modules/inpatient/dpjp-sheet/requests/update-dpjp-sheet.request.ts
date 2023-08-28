import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';

export interface IUpdateDpjpSheetRequest extends IAppRequest {
 
  pasien_kategori: string;
  pasien_diagnosis: string;
  ttd_dokter_utama: string;
  dokter_utama: string;
  ttd_dokter_ppds: string;
  ppds: string;
  sip: string;
  ttd_dokter_ruangan: string;
  dokter_ruangan: string;
  tanggal_rawat_1: string;
  ttd_dokter_dpjp_1: string;
  dokter_dpjp_1: string;
  tanggal_rawat_2: string;
  ttd_dokter_dpjp_2: string;
  dokter_dpjp_2: string;
  tanggal_rawat_3: string;
  ttd_dokter_dpjp_3: string;
  dokter_dpjp_3: string;
  tanggal_rawat_4: string;
  ttd_dokter_dpjp_4: string;
  dokter_dpjp_4: string;
  tanggal_peralihan: string;
  alasan_peralihan: string;
  peralihan_dpjp: string;
  ttd_dokter_peralihan: string;
  dokter_peralihan: string;
  waktu: string;
  id_petugas: string;
  nama_petugas: string;
  updated_at: string;
  updated_by: string;

}

export class UpdateDpjpSheetRequest extends AppRequest {
  pasien_kategori : string;
  pasien_diagnosis: string;
  ttd_dokter_utama: string;
  dokter_utama: string;
  ttd_dokter_ppds: string;
  ppds: string;
  sip: string;
  ttd_dokter_ruangan: string;
  dokter_ruangan: string;
  tanggal_rawat_1: string;
  ttd_dokter_dpjp_1: string;
  dokter_dpjp_1: string;
  tanggal_rawat_2: string;
  ttd_dokter_dpjp_2: string;
  dokter_dpjp_2: string;
  tanggal_rawat_3: string;
  ttd_dokter_dpjp_3: string;
  dokter_dpjp_3: string;
  tanggal_rawat_4: string;
  ttd_dokter_dpjp_4: string;
  dokter_dpjp_4: string;
  tanggal_peralihan: string;
  alasan_peralihan: string;
  peralihan_dpjp: string;
  ttd_dokter_peralihan: string;
  dokter_peralihan: string;

  constructor(request: IUpdateDpjpSheetRequest) {
    super(request);
    this.pasien_kategori = request.pasien_kategori;
    this.pasien_diagnosis = request.pasien_diagnosis;
    this.ttd_dokter_utama = request.ttd_dokter_utama;
    this.dokter_utama = request.dokter_utama;
    this.ttd_dokter_ppds = request.ttd_dokter_ppds;
    this.ppds = request.ppds;
    this.sip = request.sip;
    this.ttd_dokter_ruangan = request.ttd_dokter_ruangan;
    this.dokter_ruangan  = request.dokter_ruangan;
    this.tanggal_rawat_1 = request.tanggal_rawat_1;
    this.ttd_dokter_dpjp_1  = request.ttd_dokter_dpjp_1;
    this.dokter_dpjp_1 = request.dokter_dpjp_1;
    this.tanggal_rawat_2 = request.tanggal_rawat_2;
    this.ttd_dokter_dpjp_2  = request.ttd_dokter_dpjp_2;
    this.dokter_dpjp_2  = request.dokter_dpjp_2;
    this.tanggal_rawat_3  = request.tanggal_rawat_3;
    this.ttd_dokter_dpjp_3  = request.ttd_dokter_dpjp_3;
    this.dokter_dpjp_3  = request.dokter_dpjp_3;
    this.tanggal_rawat_4  = request.tanggal_rawat_4;
    this.ttd_dokter_dpjp_4  = request.ttd_dokter_dpjp_4;
    this.dokter_dpjp_4 = request.dokter_dpjp_4;
    this.tanggal_peralihan = request.tanggal_peralihan;
    this.alasan_peralihan = request.alasan_peralihan;
    this.peralihan_dpjp = request.peralihan_dpjp;
    this.ttd_dokter_peralihan  = request.ttd_dokter_peralihan;
    this.dokter_peralihan  = request.dokter_peralihan;
  }

  static schema() {
    return yup.object().shape({
      emr_id: yup.string(),
      nomor_mr: yup.string(),
      id_pelayanan: yup.string(),
      kode_cabang: yup.string(),
      tipe_pasien: yup.string(),
      jenis_pelayanan: yup.string(),
      id_dokter: yup.string(),
      pasien_kategori: yup.string(),
      pasien_diagnosis: yup.string(),
      ttd_dokter_utama: yup.string(),
      dokter_utama: yup.string(),
      ttd_dokter_ppds: yup.string(),
      ppds: yup.string(),
      sip: yup.string(),
      ttd_dokter_ruangan: yup.string(),
      dokter_ruangan: yup.string(),
      tanggal_rawat_1: yup.string(),
      ttd_dokter_dpjp_1: yup.string(),
      dokter_dpjp_1: yup.string(),
      tanggal_rawat_2: yup.string(),
      ttd_dokter_dpjp_2: yup.string(),
      dokter_dpjp_2: yup.string(),
      tanggal_rawat_3: yup.string(),
      ttd_dokter_dpjp_3: yup.string(),
      dokter_dpjp_3: yup.string(),
      tanggal_rawat_4: yup.string(),
      ttd_dokter_dpjp_4: yup.string(),
      dokter_dpjp_4: yup.string(),
      tanggal_peralihan: yup.string(),
      alasan_peralihan: yup.string(),
      peralihan_dpjp: yup.string(),
      ttd_dokter_peralihan: yup.string(),
      dokter_peralihan: yup.string(),
      waktu: yup.string(),
      id_petugas: yup.string(),
      nama_petugas: yup.string(),
      updated_at: yup.string(),
      updated_by:  yup.string(),
    });
  }
  normalize() {
    return {
      pasien_kategori: this.pasien_kategori,
      pasien_diagnosis: this.pasien_diagnosis,
      ttd_dokter_utama: this.ttd_dokter_utama,
      dokter_utama: this.dokter_utama,
      ttd_dokter_ppds: this.ttd_dokter_ppds,
      ppds: this.ppds,
      sip: this.sip,
      ttd_dokter_ruangan: this.ttd_dokter_ruangan,
      dokter_ruangan : this.dokter_ruangan,
      tanggal_rawat_1: UpdateDpjpSheetRequest.convertToNormalDatetime(this.tanggal_rawat_1),
      ttd_dokter_dpjp_1 : this.ttd_dokter_dpjp_1,
      dokter_dpjp_1: this.dokter_dpjp_1,
      tanggal_rawat_2: UpdateDpjpSheetRequest.convertToNormalDatetime(this.tanggal_rawat_2),
      ttd_dokter_dpjp_2 : this.ttd_dokter_dpjp_2,
      dokter_dpjp_2 : this.dokter_dpjp_2,
      tanggal_rawat_3 : UpdateDpjpSheetRequest.convertToNormalDatetime(this.tanggal_rawat_3),
      ttd_dokter_dpjp_3 : this.ttd_dokter_dpjp_3,
      dokter_dpjp_3 : this.dokter_dpjp_3,
      tanggal_rawat_4 : UpdateDpjpSheetRequest.convertToNormalDatetime(this.tanggal_rawat_4),
      ttd_dokter_dpjp_4 : this.ttd_dokter_dpjp_4,
      dokter_dpjp_4: this.dokter_dpjp_4,
      tanggal_peralihan: UpdateDpjpSheetRequest.convertToNormalDatetime(this.tanggal_peralihan),
      alasan_peralihan: this.alasan_peralihan,
      peralihan_dpjp: this.peralihan_dpjp,
      ttd_dokter_peralihan : this.ttd_dokter_peralihan,
      dokter_peralihan : this.dokter_peralihan,
      emr_id: this.emr_id,
      nomor_mr: this.nomor_mr,
      id_pelayanan: this.id_pelayanan,
      kode_cabang: this.kode_cabang,
      tipe_pasien: this.tipe_pasien,
      jenis_pelayanan: this.jenis_pelayanan,
      id_dokter: this.id_dokter,
      no_sep: this.no_sep,
    }
  }

  static convertToNormalDatetime(date: any) {
    const d = new Date(date);
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }
  static createFromJson(json: IUpdateDpjpSheetRequest) {
    return new UpdateDpjpSheetRequest(json);
  }
}
