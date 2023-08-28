import {
  CreatePDFRequest,
  ICreatePDFRequest,
} from "@shared/pdf/requests/create-pdf.request";
import { IAppRequest } from "@src/shared/request";

export interface IPdfNursingCarePlanRequest extends ICreatePDFRequest {
data: {
nomor_mr: string;
'pasien.Nama': string;
'pasien.Tgl_Lahir': string;
'pasien.Alamat': string;
'pasien.Umur': string;
'pasien.Jenis_Kelamin': string;
diagnosa_medis : string;
perawat : string;
kamar_ranap : string;

tanggal_1 : string;
tanggal_2 : string;
tanggal_3 : string;
tanggal_4 : string;
tanggal_5 : string;
tanggal_6 : string;
tanggal_7 : string;
tanggal_8 : string;

sistem_imunitas_1 : string;
sistem_imunitas_1_1 : string;
sistem_imunitas_1_2 : string;
sistem_imunitas_1_3 : string;
sistem_imunitas_2 : string;
sistem_imunitas_2_1 : string;
sistem_imunitas_2_2 : string;
sistem_imunitas_2_3 : string;
sistem_imunitas_3 : string;
sistem_imunitas_3_1 : string;
sistem_imunitas_3_2 : string;

persepsi_sensori_1 : string;
persepsi_sensori_1_1 : string;
persepsi_sensori_1_2 : string;
persepsi_sensori_1_3 : string;
persepsi_sensori_1_4 : string;
persepsi_sensori_1_5 : string;
persepsi_sensori_1_6 : string;
persepsi_sensori_post_op : string;
persepsi_sensori_infeksi : string;
persepsi_sensori_tio : string;

nutrisi_cairan_1 : string;
nutrisi_cairan_1_1 : string;
nutrisi_cairan_1_2 : string;
nutrisi_cairan_1_3 : string;
nutrisi_cairan_2 : string;
nutrisi_cairan_2_1 : string;
nutrisi_cairan_3 : string;
nutrisi_cairan_3_1 : string;
nutrisi_cairan_3_2 : string;
nutrisi_cairan_3_3 : string;
nutrisi_cairan_3_4 : string;
nutrisi_cairan_3_5 : string;
nutrisi_cairan_4 : string;
nutrisi_cairan_4_1 : string;
nutrisi_cairan_5 : string;
nutrisi_cairan_5_1 : string;
nutrisi_cairan_5_2 : string;
perubahan_nutrisi_kurang_lainya : string;

kebersihan_diri_1 : string;
kebersihan_diri_1_1 : string;
kebersihan_diri_1_2 : string;
kebersihan_diri_1_3 : string;
kebersihan_diri_1_4 : string;
kebersihan_diri_2 : string;
kebersihan_diri_lainya : string;

istirahat_tidur_1 : string;
istirahat_tidur_1_1 : string;
istirahat_tidur_1_2 : string;
istirahat_tidur_2 : string;
istirahat_tidur_2_1 : string;
istirahat_tidur_2_2 : string;
istirahat_tidur_2_3 : string
istirahat_tidur_3 : string;
istirahat_tidur_lainya  : string;

psikososial_1 : string;
psikososial_1_1 : string;
psikososial_1_2 : string;
psikososial_1_3 : string;
psikososial_1_4 : string;
psikososial_1_5 : string
psikososial_2 : string;
psikososial_2_1 : string;
psikososial_2_2 : string;
psikososial_2_3 : string
psikososial_3 : string;
psikososial_3_1 : string;
psikososial_3_2 : string;
psikososial_3_3 : string;

persepsi_sensori_penglihatan_1 : string;
persepsi_sensori_penglihatan_1_1 : string;
persepsi_sensori_penglihatan_1_2 : string;
persepsi_sensori_penglihatan_1_3 : string;
persepsi_sensori_penglihatan_1_4 : string;
persepsi_sensori_penglihatan_1_5 : string;
persepsi_sensori_penglihatan_post_op : string;
persepsi_sensori_penglihatan_infeksi : string;
persepsi_sensori_penglihatan_tio : string;


sistem_imunitas1 : string;
sistem_imunitas1_1 : string;
sistem_imunitas1_2 : string;
sistem_imunitas1_3 : string;
sistem_imunitas1_4 : string;
sistem_imunitas1_5 : string;

tujuan_1_1 : string;
tujuan_1_1_1 : string;
tujuan_1_1_2 : string;
tujuan_1_1_3 : string;
infeksi_tidak_terjait_lainya : string;
infeksi_jam_1  : string;
infeksi_jam_2  : string;
tujuan_1_2 : string;
tujuan_1_2_1 : string;
tujuan_1_2_2 : string;
tujuan_1_2_3 : string;
tujuan_1_2_4 : string;
normothermia1_jam_1  : string;
normothermia1_jam_2  : string;
tujuan_1_3 : string;
tujuan_dan_kriteria_lainya : string;

tujuan_2_1 : string;
tujuan_2_1_1 : string;
tujuan_2_1_2 : string;
tujuan_2_1_3 : string;
tujuan_2_1_4 : string;
nyeri_jam_1  : string;
nyeri_jam_2  : string;

tujuan_3_1 : string;
tujuan_3_1_1 : string;
tujuan_3_1_2 : string;
tujuan_3_1_3 : string;
tujuan_3_1_4 : string;
tujuan_3_1_5 : string;
tujuan_3_1_6 : string;
tujuan_3_2 : string;
tujuan_3_2_1 : string;
tujuan_3_2_2 : string;
tujuan_3_2_3 : string;
tujuan_3_2_4 : string;
tujuan_3_3 : string;
tujuan_3_3_1 : string;
tujuan_3_3_2 : string;
tujuan_3_3_3 : string;
tujuan_3_4 : string;

keseimbangan_elektrolit_jam_1  : string;
keseimbangan_elektrolit_jam_2  : string;
keseimbangan_elektrolit_lainya  : string;
normothermia3_jam_1  : string;
normothermia3_jam_2  : string;
kebutuhan_nutri_jam_1  : string;
kebutuhan_nutri_jam_2  : string;
kebutuhan_nutrisi_lainya  : string;

tujuan_4_1 : string;
tujuan_4_1_1 : string;
tujuan_4_1_2 : string;
tujuan_4_2 : string;
tujuan_4_2_1 : string;
perawatan_optimal_jam_1  : string;
perawatan_optimal_jam_2  : string;
aktifitas_harian_jam_1  : string;
aktifitas_harian_jam_2  : string;
aktifitas_harian_lainya : string;

tujuan_5_1 : string;
tujuan_5_1_1 : string;
tujuan_5_1_2 : string;
tujuan_5_1_3 : string;
tujuan_5_1_4 : string;
tujuan_5_2 : string;
tujuan_5_2_1 : string;
tujuan_5_2_2 : string;
pola_tidur_jam_1  : string;
pola_tidur_jam_2  : string;
tidur_cukup_jam_1  : string;
tidur_cukup_jam_2  : string;
tidur_cukup_lainya : string;


tujuan_6_1 : string;
tujuan_6_1_1 : string;
tujuan_6_1_2 : string;
tujuan_6_1_3 : string;
tujuan_6_1_4 : string;
tujuan_6_2 : string;
tujuan_6_2_1 : string;
tujuan_6_2_2 : string;
tujuan_6_3 : string;
tujuan_6_3_1 : string;
tujuan_6_3_2 : string;
tujuan_6_3_3 : string;
cemas_berkurang_jam_1 : string;
cemas_berkurang_jam_2 : string;
coping_efektif_jam_1 : string;
coping_efektif_jam_2 : string;
harga_diri_jam_1 : string;
harga_diri_jam_2 : string;


tujuan_7_1 : string;
tujuan_7_1_1 : string;
tujuan_7_1_2 : string;

tujuan_8_1 : string;
tujuan_8_1_1 : string;
tujuan_8_1_2 : string;
tujuan_8_1_3 : string;
infeksi_menurun_lainya : string;

mandiri_1_1 : string;
mandiri_1_2 : string;
mandiri_1_3 : string;
mandiri_1_4 : string;
mandiri_1_5 : string;
mandiri_1_6 : string;
mandiri_1_7 : string;
mandiri_1_8 : string;

mandiri_2_1 : string;
mandiri_2_2 : string;
mandiri_2_3 : string;
mandiri_2_4 : string;
mandiri_2_5 : string;
mandiri_2_6 : string;
mandiri_2_7 : string;

mandiri_3_1 : string;
mandiri_3_2 : string;
mandiri_3_3 : string;
mandiri_3_4 : string;
mandiri_3_5 : string;
mandiri_3_6 : string;
mandiri_3_7 : string;
mandiri_3_8 : string;
mandiri_3_9 : string;
mandiri_3_10 : string;
mandiri_3_11 : string;
mandiri_3_12 : string;
makanan_diet : string;
mandiri_3_lainya : string;

mandiri_4_1 : string;
mandiri_4_2 : string;
mandiri_4_3 : string;
mandiri_4_4 : string;
mandiri_4_5 : string;
mandiri_4_6 : string;
mandiri_4_7 : string;
mandiri_4_lainya : string;

mandiri_5_1 : string;
mandiri_5_2 : string;
mandiri_5_3 : string;
mandiri_5_4 : string;
mandiri_5_5 : string;
mandiri_5_6 : string;
mandiri_5_7 : string;
mandiri_5_8 : string;
mandiri_5_9 : string;
mandiri_5_10 : string;

mandiri_6_1 : string;
mandiri_6_2 : string;
mandiri_6_3 : string;
mandiri_6_4 : string;
mandiri_6_5 : string;
mandiri_6_6 : string;
mandiri_6_7 : string;
mandiri_6_8 : string;
mandiri_6_9 : string;
mandiri_6_10 : string;
mandiri_6_11 : string;

mandiri_7_1 : string;
mandiri_7_2 : string;
mandiri_7_3 : string;
mandiri_7_4 : string;
mandiri_7_5 : string;

mandiri_8_1 : string;
mandiri_8_2 : string;
mandiri_8_3 : string;
mandiri_8_4 : string;
mandiri_8_5 : string;
mandiri_8_6 : string;
mandiri_8_7 : string;
mandiri_8_8 : string;

kolaborasi_1_1  : string;
kolaborasi_1_2  : string;
kolaborasi_1_3  : string;
kolaborasi_1_1_ket : string;
kolaborasi_1_2_ket : string;
kolaborasi_1_3_ket : string;


kolaborasi_2_1  : string;
kolaborasi_2_2  : string;
kolaborasi_2_3  : string;
kolaborasi_2_1_ket : string;
kolaborasi_2_2_ket : string;
kolaborasi_2_3_ket : string;

kolaborasi_3_1  : string;
kolaborasi_3_2  : string;
kolaborasi_3_3  : string;
kolaborasi_3_lainya : string;

kolaborasi_4_1  : string;
kolaborasi_4_1_ket : string;

kolaborasi_5_1  : string;
kolaborasi_5_2  : string;
kolaborasi_5_1_ket : string;
kolaborasi_5_2_ket : string;

kolaborasi_6_1  : string;
kolaborasi_6_2  : string;
kolaborasi_6_lainya_1 : string;
kolaborasi_6_lainya_2 : string;

kolaborasi_7_1  : string;
kolaborasi_7_2  : string;
kolaborasi_7_lainya : string;

kolaborasi_8_1  : string;
kolaborasi_8_2  : string;
kolaborasi_8_3  : string;
kolaborasi_8_1_ket : string;
kolaborasi_8_2_ket : string;
kolaborasi_8_3_ket : string;
nik: string;
};
}

export class PdfNursingCarePlanRequest extends CreatePDFRequest {
data: {
nomor_mr: string;
'pasien.Nama': string;
'pasien.Tgl_Lahir': string;
'pasien.Alamat': string;
'pasien.Umur': string;
'pasien.Jenis_Kelamin': string;

tanggal_1 : string;
tanggal_2 : string;
tanggal_3 : string;
tanggal_4 : string;
tanggal_5 : string;
tanggal_6 : string;
tanggal_7 : string;
tanggal_8 : string;

diagnosa_medis : string;
perawat : string;
kamar_ranap : string;
sistem_imunitas_1 : string;
sistem_imunitas_1_1 : string;
sistem_imunitas_1_2 : string;
sistem_imunitas_1_3 : string;
sistem_imunitas_2 : string;
sistem_imunitas_2_1 : string;
sistem_imunitas_2_2 : string;
sistem_imunitas_2_3 : string;
sistem_imunitas_3 : string;
sistem_imunitas_3_1 : string;
sistem_imunitas_3_2 : string;

persepsi_sensori_1 : string;
persepsi_sensori_1_1 : string;
persepsi_sensori_1_2 : string;
persepsi_sensori_1_3 : string;
persepsi_sensori_1_4 : string;
persepsi_sensori_1_5 : string;
persepsi_sensori_1_6 : string;
persepsi_sensori_post_op : string;
persepsi_sensori_infeksi : string;
persepsi_sensori_tio : string;

nutrisi_cairan_1 : string;
nutrisi_cairan_1_1 : string;
nutrisi_cairan_1_2 : string;
nutrisi_cairan_1_3 : string;
nutrisi_cairan_2 : string;
nutrisi_cairan_2_1 : string;
nutrisi_cairan_3 : string;
nutrisi_cairan_3_1 : string;
nutrisi_cairan_3_2 : string;
nutrisi_cairan_3_3 : string;
nutrisi_cairan_3_4 : string;
nutrisi_cairan_3_5 : string;
nutrisi_cairan_4 : string;
nutrisi_cairan_4_1 : string;
nutrisi_cairan_5 : string;
nutrisi_cairan_5_1 : string;
nutrisi_cairan_5_2 : string;
perubahan_nutrisi_kurang_lainya : string;

kebersihan_diri_1 : string;
kebersihan_diri_1_1 : string;
kebersihan_diri_1_2 : string;
kebersihan_diri_1_3 : string;
kebersihan_diri_1_4 : string;
kebersihan_diri_2 : string;
kebersihan_diri_lainya : string;

istirahat_tidur_1 : string;
istirahat_tidur_1_1 : string;
istirahat_tidur_1_2 : string;
istirahat_tidur_2 : string;
istirahat_tidur_2_1 : string;
istirahat_tidur_2_2 : string;
istirahat_tidur_2_3 : string
istirahat_tidur_3 : string;
istirahat_tidur_lainya  : string;

psikososial_1 : string;
psikososial_1_1 : string;
psikososial_1_2 : string;
psikososial_1_3 : string;
psikososial_1_4 : string;
psikososial_1_5 : string
psikososial_2 : string;
psikososial_2_1 : string;
psikososial_2_2 : string;
psikososial_2_3 : string
psikososial_3 : string;
psikososial_3_1 : string;
psikososial_3_2 : string;
psikososial_3_3 : string;

persepsi_sensori_penglihatan_1 : string;
persepsi_sensori_penglihatan_1_1 : string;
persepsi_sensori_penglihatan_1_2 : string;
persepsi_sensori_penglihatan_1_3 : string;
persepsi_sensori_penglihatan_1_4 : string;
persepsi_sensori_penglihatan_1_5 : string;
persepsi_sensori_penglihatan_post_op : string;
persepsi_sensori_penglihatan_infeksi : string;
persepsi_sensori_penglihatan_tio : string;

sistem_imunitas1 : string;
sistem_imunitas1_1 : string;
sistem_imunitas1_2 : string;
sistem_imunitas1_3 : string;
sistem_imunitas1_4 : string;
sistem_imunitas1_5 : string;

tujuan_1_1 : string;
tujuan_1_1_1 : string;
tujuan_1_1_2 : string;
tujuan_1_1_3 : string;
infeksi_tidak_terjait_lainya : string;
infeksi_jam_1  : string;
infeksi_jam_2  : string;
tujuan_1_2 : string;
tujuan_1_2_1 : string;
tujuan_1_2_2 : string;
tujuan_1_2_3 : string;
tujuan_1_2_4 : string;
normothermia1_jam_1  : string;
normothermia1_jam_2  : string;
tujuan_1_3 : string;
tujuan_dan_kriteria_lainya : string;

tujuan_2_1 : string;
tujuan_2_1_1 : string;
tujuan_2_1_2 : string;
tujuan_2_1_3 : string;
tujuan_2_1_4 : string;
nyeri_jam_1  : string;
nyeri_jam_2  : string;

tujuan_3_1 : string;
tujuan_3_1_1 : string;
tujuan_3_1_2 : string;
tujuan_3_1_3 : string;
tujuan_3_1_4 : string;
tujuan_3_1_5 : string;
tujuan_3_1_6 : string;
tujuan_3_2 : string;
tujuan_3_2_1 : string;
tujuan_3_2_2 : string;
tujuan_3_2_3 : string;
tujuan_3_2_4 : string;
tujuan_3_3 : string;
tujuan_3_3_1 : string;
tujuan_3_3_2 : string;
tujuan_3_3_3 : string;
tujuan_3_4 : string;
keseimbangan_elektrolit_jam_1  : string;
keseimbangan_elektrolit_jam_2  : string;
keseimbangan_elektrolit_lainya  : string;
normothermia3_jam_1  : string;
normothermia3_jam_2  : string;
kebutuhan_nutri_jam_1  : string;
kebutuhan_nutri_jam_2  : string;
kebutuhan_nutrisi_lainya  : string;


tujuan_4_1 : string;
tujuan_4_1_1 : string;
tujuan_4_1_2 : string;
tujuan_4_2 : string;
tujuan_4_2_1 : string;
perawatan_optimal_jam_1  : string;
perawatan_optimal_jam_2  : string;
aktifitas_harian_jam_1  : string;
aktifitas_harian_jam_2  : string;
aktifitas_harian_lainya : string;


tujuan_5_1 : string;
tujuan_5_1_1 : string;
tujuan_5_1_2 : string;
tujuan_5_1_3 : string;
tujuan_5_1_4 : string;
tujuan_5_2 : string;
tujuan_5_2_1 : string;
tujuan_5_2_2 : string;
pola_tidur_jam_1  : string;
pola_tidur_jam_2  : string;
tidur_cukup_jam_1  : string;
tidur_cukup_jam_2  : string;
tidur_cukup_lainya : string;

tujuan_6_1 : string;
tujuan_6_1_1 : string;
tujuan_6_1_2 : string;
tujuan_6_1_3 : string;
tujuan_6_1_4 : string;
tujuan_6_2 : string;
tujuan_6_2_1 : string;
tujuan_6_2_2 : string;
tujuan_6_3 : string;
tujuan_6_3_1 : string;
tujuan_6_3_2 : string;
tujuan_6_3_3 : string;
cemas_berkurang_jam_1 : string;
cemas_berkurang_jam_2 : string;
coping_efektif_jam_1 : string;
coping_efektif_jam_2 : string;
harga_diri_jam_1 : string;
harga_diri_jam_2 : string;

tujuan_7_1 : string;
tujuan_7_1_1 : string;
tujuan_7_1_2 : string;

tujuan_8_1 : string;
tujuan_8_1_1 : string;
tujuan_8_1_2 : string;
tujuan_8_1_3 : string;
infeksi_menurun_lainya : string;

mandiri_1_1 : string;
mandiri_1_2 : string;
mandiri_1_3 : string;
mandiri_1_4 : string;
mandiri_1_5 : string;
mandiri_1_6 : string;
mandiri_1_7 : string;
mandiri_1_8 : string;

mandiri_2_1 : string;
mandiri_2_2 : string;
mandiri_2_3 : string;
mandiri_2_4 : string;
mandiri_2_5 : string;
mandiri_2_6 : string;
mandiri_2_7 : string;

mandiri_3_1 : string;
mandiri_3_2 : string;
mandiri_3_3 : string;
mandiri_3_4 : string;
mandiri_3_5 : string;
mandiri_3_6 : string;
mandiri_3_7 : string;
mandiri_3_8 : string;
mandiri_3_9 : string;
mandiri_3_10 : string;
mandiri_3_11 : string;
mandiri_3_12 : string;
makanan_diet : string;
mandiri_3_lainya : string;

mandiri_4_1 : string;
mandiri_4_2 : string;
mandiri_4_3 : string;
mandiri_4_4 : string;
mandiri_4_5 : string;
mandiri_4_6 : string;
mandiri_4_7 : string;
mandiri_4_lainya : string;


mandiri_5_1 : string;
mandiri_5_2 : string;
mandiri_5_3 : string;
mandiri_5_4 : string;
mandiri_5_5 : string;
mandiri_5_6 : string;
mandiri_5_7 : string;
mandiri_5_8 : string;
mandiri_5_9 : string;
mandiri_5_10 : string;

mandiri_6_1 : string;
mandiri_6_2 : string;
mandiri_6_3 : string;
mandiri_6_4 : string;
mandiri_6_5 : string;
mandiri_6_6 : string;
mandiri_6_7 : string;
mandiri_6_8 : string;
mandiri_6_9 : string;
mandiri_6_10 : string;
mandiri_6_11 : string;

mandiri_7_1 : string;
mandiri_7_2 : string;
mandiri_7_3 : string;
mandiri_7_4 : string;
mandiri_7_5 : string;

mandiri_8_1 : string;
mandiri_8_2 : string;
mandiri_8_3 : string;
mandiri_8_4 : string;
mandiri_8_5 : string;
mandiri_8_6 : string;
mandiri_8_7 : string;
mandiri_8_8 : string;

kolaborasi_1_1  : string;
kolaborasi_1_2  : string;
kolaborasi_1_3  : string;
kolaborasi_1_1_ket : string;
kolaborasi_1_2_ket : string;
kolaborasi_1_3_ket : string;

kolaborasi_2_1  : string;
kolaborasi_2_2  : string;
kolaborasi_2_3  : string;
kolaborasi_2_1_ket : string;
kolaborasi_2_2_ket : string;
kolaborasi_2_3_ket : string;

kolaborasi_3_1  : string;
kolaborasi_3_2  : string;
kolaborasi_3_3  : string;
kolaborasi_3_lainya : string;

kolaborasi_4_1  : string;
kolaborasi_4_1_ket : string;

kolaborasi_5_1  : string;
kolaborasi_5_2  : string;
kolaborasi_5_1_ket : string;
kolaborasi_5_2_ket : string;

kolaborasi_6_1  : string;
kolaborasi_6_2  : string;
kolaborasi_6_lainya_1 : string;
kolaborasi_6_lainya_2 : string;

kolaborasi_7_1  : string;
kolaborasi_7_2  : string;
kolaborasi_7_lainya : string;

kolaborasi_8_1  : string;
kolaborasi_8_2  : string;
kolaborasi_8_3  : string;
kolaborasi_8_1_ket : string;
kolaborasi_8_2_ket : string;
kolaborasi_8_3_ket : string;
nik: string
};

constructor(req: IPdfNursingCarePlanRequest) {
  super(req);
  this.data = req.data;
}

static createFromJson(json: IPdfNursingCarePlanRequest) {
  return new PdfNursingCarePlanRequest(json);
}

static createPdfRequest(val: any, appReq: IAppRequest, namaKamar: any): PdfNursingCarePlanRequest {

  const formatDate = (dateNow: any) => {
    const d = new Date(dateNow);
    const dateFormat = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2,
      '0')}-${d.getFullYear().toString().padStart(4, '0')}`
    return dateFormat;
  }

  return new PdfNursingCarePlanRequest({
    emr_id: appReq.emr_id,
    form_name: 'rawat-inap_rencana-asuhan-keperawatan',
    row_filter: '',
    preview: false,
    data: {
      nomor_mr: val?.nomor_mr ?? '',
      'pasien.Nama': val?.pasien?.Nama ?? '',
      'pasien.Tgl_Lahir': formatDate(val?.pasien?.Tgl_Lahir),
      'pasien.Alamat': val?.pasien?.Alamat ?? '',
      'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
      'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
      diagnosa_medis : val?.form?.Diagnosa_Medis ?? '',
      perawat : val?.form?.Nama_Perawat ?? '',
      kamar_ranap : namaKamar ?? '',

      tanggal_1 : formatDate(val?.form?.Tanggal_Si ?? ''),
      tanggal_2 : formatDate(val?.form?.Tanggal_Ps ?? ''),
      tanggal_3 : formatDate(val?.form?.Tanggal_Nc ?? ''),
      tanggal_4 : formatDate(val?.form?.Tanggal_Kd ?? ''),
      tanggal_5 : formatDate(val?.form?.Tanggal_It ?? ''),
      tanggal_6 : formatDate(val?.form?.Tanggal_Psi ?? ''),
      tanggal_7 : formatDate(val?.form?.Tanggal_Ps1 ?? ''),
      tanggal_8 : formatDate(val?.form?.Tanggal_Si1 ?? ''),

      sistem_imunitas_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Si_Check === '1'),
      sistem_imunitas_1_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Si_1_Check === '1'),
      sistem_imunitas_1_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Si_2_Check === '1'),
      sistem_imunitas_1_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Si_3_Check === '1'),

      sistem_imunitas_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa2_Si_Check === '1'),
      sistem_imunitas_2_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa2_Si_1_Check === '1'),
      sistem_imunitas_2_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa2_Si_2_Check === '1'),
      sistem_imunitas_2_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa2_Si_3_Check === '1'),

      sistem_imunitas_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa3_Si_Check === '1'),
      sistem_imunitas_3_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa3_Si_1_Check === '1'),
      sistem_imunitas_3_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa3_Si_2_Check === '1'),

      persepsi_sensori_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Ps_Check === '1'),
      persepsi_sensori_1_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Ps_1_Check === '1'),
      persepsi_sensori_1_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Ps_2_Check === '1'),
      persepsi_sensori_1_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Ps_3_Check === '1'),
      persepsi_sensori_1_4 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Ps_4_Check === '1'),
      persepsi_sensori_1_5 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Ps_5_Check === '1'),
      persepsi_sensori_1_6 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Ps_6_Check === '1'),
      persepsi_sensori_post_op :  val?.form?.Diagnosa1_Ps_1_Text ?? '',
      persepsi_sensori_infeksi :  val?.form?.Diagnosa1_Ps_2_Text ?? '',
      persepsi_sensori_tio :  val?.form?.Diagnosa1_Ps_3_Text ?? '',

      nutrisi_cairan_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Nc_Check === '1'),
      nutrisi_cairan_1_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Nc_1_Check === '1'),
      nutrisi_cairan_1_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Nc_2_Check === '1'),
      nutrisi_cairan_1_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Nc_3_Check === '1'),
      nutrisi_cairan_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa2_Nc_Check === '1'),
      nutrisi_cairan_2_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa2_Nc_1_Check === '1'),
      nutrisi_cairan_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa3_Nc_Check === '1'),
      nutrisi_cairan_3_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa3_Nc_1_Check === '1'),
      nutrisi_cairan_3_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa3_Nc_2_Check === '1'),
      nutrisi_cairan_3_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa3_Nc_3_Check === '1'),
      nutrisi_cairan_3_4 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa3_Nc_4_Check === '1'),
      nutrisi_cairan_3_5 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa3_Nc_5_Check === '1'),
      nutrisi_cairan_4 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa4_Nc_Check === '1'),
      nutrisi_cairan_4_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa4_Nc_1_Check === '1'),
      nutrisi_cairan_5 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa5_Nc_Check === '1'),
      nutrisi_cairan_5_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa5_Nc_1_Check === '1'),
      nutrisi_cairan_5_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa5_Nc_2_Check === '1'),
      perubahan_nutrisi_kurang_lainya : val?.form?.Diagnosa3_Nc_5_Text ?? '',

      kebersihan_diri_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Kd_Check === '1'),
      kebersihan_diri_1_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Kd_1_Check === '1'),
      kebersihan_diri_1_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Kd_2_Check === '1'),
      kebersihan_diri_1_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Kd_3_Check === '1'),
      kebersihan_diri_1_4 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Kd_4_Check === '1'),
      kebersihan_diri_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa2_Kd_Check === '1'),
      kebersihan_diri_lainya : val?.form?.Diagnosa2_Kd_Text ?? '',

      istirahat_tidur_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_It_Check === '1'),
      istirahat_tidur_1_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_It_1_Check === '1'),
      istirahat_tidur_1_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_It_1_Check === '1'),
      istirahat_tidur_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa2_It_Check === '1'),
      istirahat_tidur_2_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa2_It_1_Check === '1'),
      istirahat_tidur_2_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa2_It_2_Check === '1'),
      istirahat_tidur_2_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa2_It_3_Check === '1'),
      istirahat_tidur_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa3_It_Check === '1'),
      istirahat_tidur_lainya  : val?.form?.Diagnosa3_It_Text ?? '',

      psikososial_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Psi_Check === '1'),
      psikososial_1_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Psi_1_Check === '1'),
      psikososial_1_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Psi_2_Check === '1'),
      psikososial_1_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Psi_3_Check === '1'),
      psikososial_1_4 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Psi_4_Check === '1'),
      psikososial_1_5 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Psi_5_Check === '1'),
      psikososial_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa2_Psi_Check === '1'),
      psikososial_2_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa2_Psi_1_Check === '1'),
      psikososial_2_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa2_Psi_2_Check === '1'),
      psikososial_2_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa2_Psi_3_Check === '1'),
      psikososial_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa3_Psi_Check === '1'),
      psikososial_3_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa3_Psi_1_Check === '1'),
      psikososial_3_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa3_Psi_2_Check === '1'),
      psikososial_3_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa3_Psi_3_Check === '1'),

      persepsi_sensori_penglihatan_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Ps1_Check === '1'),
      persepsi_sensori_penglihatan_1_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Ps1_1_Check === '1'),
      persepsi_sensori_penglihatan_1_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Ps1_2_Check === '1'),
      persepsi_sensori_penglihatan_1_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Ps1_3_Check === '1'),
      persepsi_sensori_penglihatan_1_4 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Ps1_4_Check === '1'),
      persepsi_sensori_penglihatan_1_5 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Ps1_5_Check === '1'),
      persepsi_sensori_penglihatan_post_op : val?.form?.Diagnosa1_Ps1_1_Text ?? '',
      persepsi_sensori_penglihatan_infeksi : val?.form?.Diagnosa1_Ps1_2_Text ?? '',
      persepsi_sensori_penglihatan_tio : val?.form?.Diagnosa1_Ps1_3_Text ?? '',

      sistem_imunitas1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Si1_Check === '1'),
      sistem_imunitas1_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Si1_1_Check === '1'),
      sistem_imunitas1_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Si1_2_Check === '1'),
      sistem_imunitas1_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Si1_3_Check === '1'),
      sistem_imunitas1_4 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Si1_4_Check === '1'),
      sistem_imunitas1_5 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Diagnosa1_Si1_5_Check === '1'),

      tujuan_1_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Si_Check === '1'),
      tujuan_1_1_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Si_1_Check === '1'),
      tujuan_1_1_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Si_2_Check === '1'),
      tujuan_1_1_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Si_3_Check === '1'),
      tujuan_1_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan2_Si_Check === '1'),
      tujuan_1_2_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan2_Si_1_Check === '1'),
      tujuan_1_2_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan2_Si_2_Check === '1'),
      tujuan_1_2_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan2_Si_3_Check === '1'),
      tujuan_1_2_4 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan2_Si_4_Check === '1'),
      tujuan_1_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan3_Si_Check === '1'),
      infeksi_tidak_terjait_lainya : val?.form?.Tujuan1_Si_3_Text ?? '',
      infeksi_jam_1  : val?.form?.Tujuan1_Si_Jam_1 ?? '',
      infeksi_jam_2  : val?.form?.Tujuan1_Si_Jam_2 ?? '',
      normothermia1_jam_1  : val?.form?.Tujuan2_Si_Jam_1 ?? '',
      normothermia1_jam_2  : val?.form?.Tujuan2_Si_Jam_2 ?? '',
      tujuan_dan_kriteria_lainya : val?.form?.Tujuan3_Si_Text ?? '',

      tujuan_2_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Ps_Check === '1'),
      tujuan_2_1_1 :  PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Ps_1_Check === '1'),
      tujuan_2_1_2 :  PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Ps_2_Check === '1'),
      tujuan_2_1_3 :  PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Ps_3_Check === '1'),
      tujuan_2_1_4 :  PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Ps_4_Check === '1'),
      nyeri_jam_1  : val?.form?.Tujuan1_Ps_Jam_1 ?? '',
      nyeri_jam_2  : val?.form?.Tujuan1_Ps_Jam_1 ?? '',

      tujuan_3_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Nc_Check === '1'),
      tujuan_3_1_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Nc_1_Check === '1'),
      tujuan_3_1_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Nc_2_Check === '1'),
      tujuan_3_1_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Nc_3_Check === '1'),
      tujuan_3_1_4 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Nc_4_Check === '1'),
      tujuan_3_1_5 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Nc_5_Check === '1'),
      tujuan_3_1_6 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Nc_6_Check === '1'),
      tujuan_3_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan2_Nc_Check === '1'),
      tujuan_3_2_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan2_Nc_1_Check === '1'),
      tujuan_3_2_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan2_Nc_2_Check === '1'),
      tujuan_3_2_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan2_Nc_3_Check === '1'),
      tujuan_3_2_4 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan2_Nc_4_Check === '1'),
      tujuan_3_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan3_Nc_Check === '1'),
      tujuan_3_3_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan3_Nc_1_Check === '1'),
      tujuan_3_3_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan3_Nc_2_Check === '1'),
      tujuan_3_3_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan3_Nc_3_Check === '1'),
      tujuan_3_4 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan4_Nc_Check === '1'),
      keseimbangan_elektrolit_jam_1  : val?.form?.Tujuan1_Nc_Jam_1 ?? '',
      keseimbangan_elektrolit_jam_2  : val?.form?.Tujuan1_Nc_Jam_2 ?? '',
      keseimbangan_elektrolit_lainya  : val?.form?.Tujuan1_Nc_6_Text ?? '',
      normothermia3_jam_1  : val?.form?.Tujuan2_Nc_Jam_1 ?? '',
      normothermia3_jam_2  : val?.form?.Tujuan2_Nc_Jam_2 ?? '',
      kebutuhan_nutri_jam_1  : val?.form?.Tujuan3_Nc_Jam_1 ?? '',
      kebutuhan_nutri_jam_2  : val?.form?.Tujuan3_Nc_Jam_2 ?? '',
      kebutuhan_nutrisi_lainya  : val?.form?.Tujuan3_Nc_3_Text ?? '',


      tujuan_4_1 :  PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Kd_Check === '1'),
      tujuan_4_1_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Kd_1_Check === '1'),
      tujuan_4_1_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Kd_2_Check === '1'),
      tujuan_4_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan2_Kd_Check === '1'),
      tujuan_4_2_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Kd_1_Check === '1'),
      perawatan_optimal_jam_1  : val?.form?.Tujuan1_Kd_Jam_1 ?? '',
      perawatan_optimal_jam_2  : val?.form?.Tujuan1_Kd_Jam_2 ?? '',
      aktifitas_harian_jam_1  : val?.form?.Tujuan2_Kd_Jam_1 ?? '',
      aktifitas_harian_jam_2  : val?.form?.Tujuan2_Kd_Jam_2 ?? '',
      aktifitas_harian_lainya : val?.form?.Tujuan1_Kd_1_Text ?? '',


      tujuan_5_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_It_Check === '1'),
      tujuan_5_1_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_It_1_Check === '1'),
      tujuan_5_1_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_It_2_Check === '1'),
      tujuan_5_1_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_It_3_Check === '1'),
      tujuan_5_1_4 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_It_4_Check === '1'),
      tujuan_5_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan2_It_Check === '1'),
      tujuan_5_2_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan2_It_1_Check === '1'),
      tujuan_5_2_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan2_It_2_Check === '1'),
      pola_tidur_jam_1  : val?.form?.Tujuan1_Kd_Jam_1 ?? '',
      pola_tidur_jam_2  : val?.form?.Tujuan1_Kd_Jam_2 ?? '',
      tidur_cukup_jam_1  : val?.form?.Tujuan2_Kd_Jam_1 ?? '',
      tidur_cukup_jam_2  : val?.form?.Tujuan2_Kd_Jam_2 ?? '',
      tidur_cukup_lainya : val?.form?.Tujuan2_It_2_Text ?? '',

      tujuan_6_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Psi_Check === '1'),
      tujuan_6_1_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Psi_1_Check === '1'),
      tujuan_6_1_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Psi_2_Check === '1'),
      tujuan_6_1_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Psi_3_Check === '1'),
      tujuan_6_1_4 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Psi_4_Check === '1'),
      tujuan_6_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan2_Psi_Check === '1'),
      tujuan_6_2_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan2_Psi_1_Check === '1'),
      tujuan_6_2_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan2_Psi_2_Check === '1'),
      tujuan_6_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan3_Psi_Check === '1'),
      tujuan_6_3_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan3_Psi_1_Check === '1'),
      tujuan_6_3_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan3_Psi_2_Check === '1'),
      tujuan_6_3_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan3_Psi_3_Check === '1'),
      cemas_berkurang_jam_1 : val?.form?.Tujuan1_It_Jam_1 ?? '',
      cemas_berkurang_jam_2 : val?.form?.Tujuan1_It_Jam_2 ?? '',
      coping_efektif_jam_1 : val?.form?.Tujuan2_It_Jam_1 ?? '',
      coping_efektif_jam_2 : val?.form?.Tujuan2_It_Jam_2 ?? '',
      harga_diri_jam_1 : val?.form?.Tujuan3_It_Jam_1 ?? '',
      harga_diri_jam_2 : val?.form?.Tujuan3_It_Jam_2 ?? '',

      tujuan_7_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Ps1_Check === '1'),
      tujuan_7_1_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Ps1_1_Check === '1'),
      tujuan_7_1_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Ps1_2_Check === '1'),

      tujuan_8_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Si1_Check === '1'),
      tujuan_8_1_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Si1_1_Check === '1'),
      tujuan_8_1_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Si1_2_Check === '1'),
      tujuan_8_1_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Tujuan1_Si1_3_Check === '1'),
      infeksi_menurun_lainya : val?.form?.Tujuan1_Si1_3_Text ?? '',

      mandiri_1_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Si_1_Check === '1'),
      mandiri_1_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Si_2_Check === '1'),
      mandiri_1_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Si_3_Check === '1'),
      mandiri_1_4 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Si_4_Check === '1'),
      mandiri_1_5 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Si_5_Check === '1'),
      mandiri_1_6 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Si_6_Check === '1'),
      mandiri_1_7 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Si_7_Check === '1'),
      mandiri_1_8 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Si_8_Check === '1'),

      mandiri_2_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Ps_1_Check === '1'),
      mandiri_2_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Ps_2_Check === '1'),
      mandiri_2_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Ps_3_Check === '1'),
      mandiri_2_4 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Ps_4_Check === '1'),
      mandiri_2_5 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Ps_5_Check === '1'),
      mandiri_2_6 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Ps_6_Check === '1'),
      mandiri_2_7 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Ps_7_Check === '1'),

      mandiri_3_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Nc_1_Check === '1'),
      mandiri_3_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Nc_2_Check === '1'),
      mandiri_3_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Nc_3_Check === '1'),
      mandiri_3_4 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Nc_4_Check === '1'),
      mandiri_3_5 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Nc_5_Check === '1'),
      mandiri_3_6 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Nc_6_Check === '1'),
      mandiri_3_7 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Nc_7_Check === '1'),
      mandiri_3_8 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Nc_8_Check === '1'),
      mandiri_3_9 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Nc_9_Check === '1'),
      mandiri_3_10 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Nc_10_Check === '1'),
      mandiri_3_11 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Nc_11_Check === '1'),
      mandiri_3_12 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Nc_12_Check === '1'),
      makanan_diet : val?.form?.Rencana1_Nc_3_Text ?? '',
      mandiri_3_lainya :  val?.form?.Rencana1_Nc_12_Text ?? '',

      mandiri_4_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Kd_1_Check === '1'),
      mandiri_4_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Kd_2_Check === '1'),
      mandiri_4_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Kd_3_Check === '1'),
      mandiri_4_4 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Kd_4_Check === '1'),
      mandiri_4_5 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Kd_5_Check === '1'),
      mandiri_4_6 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Kd_6_Check === '1'),
      mandiri_4_7 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Kd_7_Check === '1'),
      mandiri_4_lainya : val?.form?.Rencana1_Kd_7_Text ?? '',

      mandiri_5_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_It_1_Check === '1'),
      mandiri_5_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_It_2_Check === '1'),
      mandiri_5_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_It_3_Check === '1'),
      mandiri_5_4 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_It_4_Check === '1'),
      mandiri_5_5 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_It_5_Check === '1'),
      mandiri_5_6 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_It_6_Check === '1'),
      mandiri_5_7 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_It_7_Check === '1'),
      mandiri_5_8 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_It_8_Check === '1'),
      mandiri_5_9 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_It_9_Check === '1'),
      mandiri_5_10 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_It_10_Check === '1'),

      mandiri_6_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Psi_1_Check === '1'),
      mandiri_6_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Psi_2_Check === '1'),
      mandiri_6_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Psi_3_Check === '1'),
      mandiri_6_4 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Psi_4_Check === '1'),
      mandiri_6_5 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Psi_5_Check === '1'),
      mandiri_6_6 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Psi_6_Check === '1'),
      mandiri_6_7 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Psi_7_Check === '1'),
      mandiri_6_8 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Psi_8_Check === '1'),
      mandiri_6_9 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Psi_9_Check === '1'),
      mandiri_6_10 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Psi_10_Check === '1'),
      mandiri_6_11 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Psi_11_Check === '1'),

      mandiri_7_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Ps1_1_Check === '1'),
      mandiri_7_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Ps1_2_Check === '1'),
      mandiri_7_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Ps1_3_Check === '1'),
      mandiri_7_4 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Ps1_4_Check === '1'),
      mandiri_7_5 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Ps1_5_Check === '1'),

      mandiri_8_1 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Si1_1_Check === '1'),
      mandiri_8_2 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Si1_2_Check === '1'),
      mandiri_8_3 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Si1_3_Check === '1'),
      mandiri_8_4 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Si1_4_Check === '1'),
      mandiri_8_5 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Si1_5_Check === '1'),
      mandiri_8_6 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Si1_6_Check === '1'),
      mandiri_8_7 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Si1_7_Check === '1'),
      mandiri_8_8 : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana1_Si1_7_Check === '1'),

      kolaborasi_1_1  : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana2_Si_1_Check === '1'),
      kolaborasi_1_2  : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana2_Si_2_Check === '1'),
      kolaborasi_1_3  : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana2_Si_3_Check === '1'),
      kolaborasi_1_1_ket : val?.form?.Rencana2_Si_1_Text ?? '',
      kolaborasi_1_2_ket : val?.form?.Rencana2_Si_2_Text ?? '',
      kolaborasi_1_3_ket : val?.form?.Rencana2_Si_3_Text ?? '',


      kolaborasi_2_1  : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana2_Ps_1_Check === '1'),
      kolaborasi_2_2  : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana2_Ps_2_Check === '1'),
      kolaborasi_2_3  : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana2_Ps_3_Check === '1'),
      kolaborasi_2_1_ket : val?.form?.Rencana2_Ps_1_Text ?? '',
      kolaborasi_2_2_ket : val?.form?.Rencana2_Ps_2_Text ?? '',
      kolaborasi_2_3_ket : val?.form?.Rencana2_Ps_3_Text ?? '',

      kolaborasi_3_1  : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana2_Nc_1_Check === '1'),
      kolaborasi_3_2  : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana2_Nc_2_Check === '1'),
      kolaborasi_3_3  : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana2_Nc_3_Check === '1'),
      kolaborasi_3_lainya :  val?.form?.Rencana2_Nc_3_Text ?? '',

      kolaborasi_4_1  : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana2_Kd_1_Check === '1'),
      kolaborasi_4_1_ket : val?.form?.Rencana2_Kd_1_Text ?? '',

      kolaborasi_5_1  : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana2_It_1_Check === '1'),
      kolaborasi_5_2  : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana2_It_2_Check === '1'),
      kolaborasi_5_1_ket : val?.form?.Rencana2_It_1_Text ?? '',
      kolaborasi_5_2_ket : val?.form?.Rencana2_It_2_Text ?? '',

      kolaborasi_6_1  : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana2_Psi_1_Check === '1'),
      kolaborasi_6_2  : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana2_Psi_2_Check === '1'),
      kolaborasi_6_lainya_1 : val?.form?.Rencana2_Psi_1_Text ?? '',
      kolaborasi_6_lainya_2 : val?.form?.Rencana2_Psi_2_Text ?? '',

      kolaborasi_7_1  : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana2_Ps1_1_Check === '1'),
      kolaborasi_7_2  : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana2_Ps1_2_Check === '1'),
      kolaborasi_7_lainya : val?.form?.Rencana2_Ps1_2_Text ?? '',

      kolaborasi_8_1  : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana2_Si1_1_Check === '1'),
      kolaborasi_8_2  : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana2_Si1_2_Check === '1'),
      kolaborasi_8_3  : PdfNursingCarePlanRequest.getCheckImage(val?.form?.Rencana2_Si1_3_Check === '1'),
      kolaborasi_8_1_ket : val?.form?.Rencana2_Si1_1_Text ?? '',
      kolaborasi_8_2_ket : val?.form?.Rencana2_Si1_2_Text ?? '',
      kolaborasi_8_3_ket : val?.form?.Rencana2_Si1_3_Text ?? '',
      nik: val?.pasien?.NIK ?? '',
    },
  })


}
}
