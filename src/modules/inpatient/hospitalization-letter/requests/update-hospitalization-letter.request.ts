import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';

export interface IUpdateHospitalizationLetterRequest extends IAppRequest {

  id_dokter: string;
  id_dokter_rawat_inap: string;
  tanggal_tanda_tangan: string;
  indikasi_opname: string;
  anjuran_opname: string;
  diagnosa: string;
  lama_opname: string;
  lama_satuan: string;
  ttd_dokter: string;
  preventif_check: string;
  paliatif_check: string;
  kuratif_check: string;
  rehabilitatif_check: string;
}

export class UpdateHospitalizationLetterRequest extends AppRequest {
  id_dokter: string;
  id_dokter_rawat_inap: string;
  tanggal_tanda_tangan: string;
  indikasi_opname: string;
  anjuran_opname: string;
  diagnosa: string;
  lama_opname: string;
  lama_satuan: string;
  ttd_dokter: string;
  preventif_check: string;
  paliatif_check: string;
  kuratif_check: string;
  rehabilitatif_check: string;
  constructor(request: IUpdateHospitalizationLetterRequest) {
    super(request);

    this.id_dokter = request.id_dokter;
    this.id_dokter_rawat_inap = request.id_dokter_rawat_inap;
    this.tanggal_tanda_tangan = request.tanggal_tanda_tangan;
    this.indikasi_opname = request.indikasi_opname;
    this.anjuran_opname = request.anjuran_opname;
    this.diagnosa = request.diagnosa;
    this.lama_opname = request.lama_opname;
    this.lama_satuan = request.lama_satuan;
    this.ttd_dokter = request.ttd_dokter
    this.preventif_check = request.preventif_check;
    this.paliatif_check = request.paliatif_check;
    this.kuratif_check = request.kuratif_check;
    this.rehabilitatif_check = request.rehabilitatif_check;
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
      id_dokter_rawat_inap : yup.string(),
      tanggal_tanda_tangan : yup.string(),
      indikasi_opname : yup.string(),
      anjuran_opname : yup.string(),
      diagnosa : yup.string(),
      lama_opname : yup.string(),
      lama_satuan : yup.string(),
      ttd_dokter : yup.string(),
      waktu: yup.string(),
      id_petugas: yup.string(),
      nama_petugas: yup.string(),
      updated_at: yup.string(),
      updated_by:  yup.string(),
      preventif_check: yup.string(),
      paliatif_check: yup.string(),
      kuratif_check: yup.string(),
      rehabilitatif_check: yup.string(),
    });
  }
  normalize() {
    return {
      id_dokter_rawat_inap : this.id_dokter_rawat_inap,
      indikasi_opname : this.indikasi_opname,
      anjuran_opname : this.anjuran_opname,
      diagnosa : this.diagnosa,
      lama_opname : this.lama_opname,
      lama_satuan : this.lama_satuan,
      ttd_dokter : this.ttd_dokter,
      tanggal_tanda_tangan: UpdateHospitalizationLetterRequest.convertToNormalDatetime(this.tanggal_tanda_tangan),
      emr_id: this.emr_id,
      nomor_mr: this.nomor_mr,
      id_pelayanan: this.id_pelayanan,
      kode_cabang: this.kode_cabang,
      tipe_pasien: this.tipe_pasien,
      jenis_pelayanan: this.jenis_pelayanan,
      id_dokter: this.id_dokter,
      no_sep: this.no_sep,
      preventif_check: this.preventif_check,
      paliatif_check: this.paliatif_check,
      kuratif_check: this.kuratif_check,
      rehabilitatif_check: this.rehabilitatif_check,
    }
  }

  static convertToNormalDatetime(date: any) {
    const d = new Date(date);
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }
  static createFromJson(json: IUpdateHospitalizationLetterRequest) {
    return new UpdateHospitalizationLetterRequest(json);
  }
}
