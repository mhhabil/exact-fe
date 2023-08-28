import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { IImage, IPediatric, Image, Pediatric} from '@modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';

export interface IUpdateInpatientMedicalNoteRequest extends IAppRequest {
  keluhan_utama: string,
  anamnesa: string,
  riwayat_penyakit_terdahulu: string,
  riwayat_pemakaian_obat: string,
  riwayat_penyakit_keluarga: string,
  riwayat_pekerjaan: string,
  pekerjaan_zat_berbahaya: string,
  pekerjaan_zat_berbahaya_keterangan: string,
  riwayat_alergi: string,
  kesadaran: string,
  pernafasan: string,
  tekanan_darah: string,
  skala_nyeri: string,
  nadi: string,
  berat_badan: string,
  suhu: string,
  tinggi_badan: string,
  keadaan_umum: string,
  keadaan_gizi: string,
  oedem: string,
  ikterus: string,
  cyanosis : string,
  pengkajian_kepala: string,
  pengkajian_kepala_keterangan: string,
  pengkajian_mata: string,
  pengkajian_mata_keterangan: string,
  pengkajian_tht: string,
  pengkajian_tht_keterangan: string,
  pengkajian_oedem: string,
  pengkajian_oedem_keterangan: string,
  pengkajian_mulut: string,
  pengkajian_mulut_keterangan: string,
  pengkajian_leher: string,
  pengkajian_leher_keterangan: string,
  pengkajian_jantung: string,
  pengkajian_jantung_keterangan: string,
  pengkajian_paru: string,
  pengkajian_paru_keterangan: string,
  pengkajian_dada: string,
  pengkajian_dada_keterangan: string,
  pengkajian_perut: string,
  pengkajian_perut_keterangan: string,
  pengkajian_urogenital: string,
  pengkajian_urogenital_keterangan: string,
  pengkajian_anggota_gerak: string,
  pengkajian_anggota_gerak_keterangan: string,
  pengkajian_status_neurologis: string,
  pengkajian_status_neurologis_keterangan: string,
  pengkajian_muskulos_keletal: string,
  pengkajian_muskulos_keletal_keterangan: string,
  pengkajian_palpebra_superior: string,
  pengkajian_palpebra_superior_keterangan: string,
  pengkajian_palpebra_inferior: string,
  pengkajian_palpebra_inferior_keterangan: string,
  pengkajian_conj_tarsal_superior: string,
  pengkajian_conj_tarsal_superior_keterangan: string,
  pengkajian_conj_tarsal_inferior: string,
  pengkajian_conj_tarsal_inferior_keterangan: string,
  pengkajian_conj_bulbi: string,
  pengkajian_conj_bulbi_keterangan: string,
  pengkajian_cornea: string,
  pengkajian_cornea_keterangan: string,
  pengkajian_coa: string,
  pengkajian_coa_keterangan: string,
  pengkajian_pupil: string,
  pengkajian_pupil_keterangan: string,
  pengkajian_iris: string,
  pengkajian_iris_keterangan: string,
  pengkajian_vitreous: string,
  pengkajian_vitreous_keterangan: string,
  pengkajian_lensa: string,
  pengkajian_lensa_keterangan: string,
  pengkajian_retina: string,
  pengkajian_retina_keterangan: string,
  pemeriksaan_penunjang: string,
  diagnosa: string,
  rencana_pengobatan: string,
  tanggal: string,
  'ttd-dokter': string,
  'id-dokter': string,
  gambar_mata_od: string;
  gambar_mata_os: string;
  gambar_retina_od: string;
  gambar_retina_os: string;
  pediatrik: IPediatric;
  submit_pediatrik: string;
  submit_retina: string;
  pengkajian_posisi: string;
  pengkajian_posisi_keterangan: string;
  pengkajian_pergerakan: string;
  pengkajian_pergerakan_keterangan: string;
  pengkajian_funduscopy: string;
  pengkajian_funduscopy_keterangan: string;
  pengkajian_canthal_medial: string;
  pengkajian_canthal_medial_keterangan: string;
  pengkajian_canthal_lateral: string;
  pengkajian_canthal_lateral_keterangan: string;
  pengkajian_sclera: string;
  pengkajian_sclera_keterangan: string;
  data_objektif_lain: string;
  'nama-obat': string[];
  'aturan-pakai': string[];
  jumlah: string[];
  catatan: string[];
  image_1: IImage;
  image_2: IImage;
  no_berobat: string;
  cppt_id: string;
}

export class UpdateInpatientMedicalNoteRequest extends AppRequest {
  keluhan_utama: string;
  anamnesa: string;
  riwayat_penyakit_terdahulu: string;
  riwayat_pemakaian_obat: string;
  riwayat_penyakit_keluarga: string;
  riwayat_pekerjaan: string;
  pekerjaan_zat_berbahaya: string;
  pekerjaan_zat_berbahaya_keterangan: string;
  riwayat_alergi: string;
  kesadaran: string;
  pernafasan: string;
  tekanan_darah: string;
  skala_nyeri: string;
  nadi: string;
  berat_badan: string;
  suhu: string;
  tinggi_badan: string;
  keadaan_umum: string;
  keadaan_gizi: string;
  oedem: string;
  ikterus: string;
  cyanosis : string;
  pengkajian_kepala: string;
  pengkajian_kepala_keterangan: string;
  pengkajian_mata: string;
  pengkajian_mata_keterangan: string;
  pengkajian_tht: string;
  pengkajian_tht_keterangan: string;
  pengkajian_oedem: string;
  pengkajian_oedem_keterangan: string;
  pengkajian_mulut: string;
  pengkajian_mulut_keterangan: string;
  pengkajian_leher: string;
  pengkajian_leher_keterangan: string;
  pengkajian_jantung: string;
  pengkajian_jantung_keterangan: string;
  pengkajian_paru: string;
  pengkajian_paru_keterangan: string;
  pengkajian_dada: string;
  pengkajian_dada_keterangan: string;
  pengkajian_perut: string;
  pengkajian_perut_keterangan: string;
  pengkajian_urogenital: string;
  pengkajian_urogenital_keterangan: string;
  pengkajian_anggota_gerak: string;
  pengkajian_anggota_gerak_keterangan: string;
  pengkajian_status_neurologis: string;
  pengkajian_status_neurologis_keterangan: string;
  pengkajian_muskulos_keletal: string;
  pengkajian_muskulos_keletal_keterangan: string;
  pengkajian_palpebra_superior: string;
  pengkajian_palpebra_superior_keterangan: string;
  pengkajian_palpebra_inferior: string;
  pengkajian_palpebra_inferior_keterangan: string;
  pengkajian_conj_tarsal_superior: string;
  pengkajian_conj_tarsal_superior_keterangan: string;
  pengkajian_conj_tarsal_inferior: string;
  pengkajian_conj_tarsal_inferior_keterangan: string;
  pengkajian_conj_bulbi: string;
  pengkajian_conj_bulbi_keterangan: string;
  pengkajian_cornea: string;
  pengkajian_cornea_keterangan: string;
  pengkajian_coa: string;
  pengkajian_coa_keterangan: string;
  pengkajian_pupil: string;
  pengkajian_pupil_keterangan: string;
  pengkajian_iris: string;
  pengkajian_iris_keterangan: string;
  pengkajian_vitreous: string;
  pengkajian_vitreous_keterangan: string;
  pengkajian_lensa: string;
  pengkajian_lensa_keterangan: string;
  pengkajian_retina: string;
  pengkajian_retina_keterangan: string;
  pemeriksaan_penunjang: string;
  diagnosa: string;
  rencana_pengobatan: string;
  tanggal: string;
  'ttd-dokter': string;
  'id-dokter': string;
  gambar_mata_od: string;
  gambar_mata_os: string;
  gambar_retina_od: string;
  gambar_retina_os: string;
  pediatrik: IPediatric;
  submit_pediatrik: string;
  submit_retina: string;
  pengkajian_posisi: string;
  pengkajian_posisi_keterangan: string;
  pengkajian_pergerakan: string;
  pengkajian_pergerakan_keterangan: string;
  pengkajian_funduscopy: string;
  pengkajian_funduscopy_keterangan: string;
  pengkajian_canthal_medial: string;
  pengkajian_canthal_medial_keterangan: string;
  pengkajian_canthal_lateral: string;
  pengkajian_canthal_lateral_keterangan: string;
  pengkajian_sclera: string;
  pengkajian_sclera_keterangan: string;
  data_objektif_lain: string;
  'nama-obat': string[];
  'aturan-pakai': string[];
  jumlah: string[];
  catatan: string[];
  image_1: IImage;
  image_2: IImage;
  no_berobat: string;
  cppt_id: string;

  constructor(request: IUpdateInpatientMedicalNoteRequest) {
    super(request);
    this.keluhan_utama = request.keluhan_utama;
    this.anamnesa = request.anamnesa;
    this.riwayat_penyakit_terdahulu = request.riwayat_penyakit_terdahulu;
    this.riwayat_pemakaian_obat = request.riwayat_pemakaian_obat;
    this.riwayat_penyakit_keluarga = request.riwayat_penyakit_keluarga;
    this.riwayat_pekerjaan = request.riwayat_pekerjaan;
    this.pekerjaan_zat_berbahaya = request.pekerjaan_zat_berbahaya;
    this.pekerjaan_zat_berbahaya_keterangan = request.pekerjaan_zat_berbahaya_keterangan;
    this.riwayat_alergi = request.riwayat_alergi;
    this.kesadaran = request.kesadaran;
    this.pernafasan = request.pernafasan;
    this.tekanan_darah = request.tekanan_darah;
    this.skala_nyeri = request.skala_nyeri;
    this.nadi = request.nadi;
    this.berat_badan = request.berat_badan;
    this.suhu = request.suhu;
    this.tinggi_badan = request.tinggi_badan;
    this.keadaan_umum = request.keadaan_umum;
    this.keadaan_gizi = request.keadaan_gizi;
    this.oedem = request.oedem;
    this.ikterus = request.ikterus;
    this.cyanosis = request.cyanosis;
    this.pengkajian_kepala = request.pengkajian_kepala;
    this.pengkajian_kepala_keterangan = request.pengkajian_kepala_keterangan;
    this.pengkajian_mata = request.pengkajian_mata;
    this.pengkajian_mata_keterangan = request.pengkajian_mata_keterangan;
    this.pengkajian_tht = request.pengkajian_tht;
    this.pengkajian_tht_keterangan = request.pengkajian_tht_keterangan;
    this.pengkajian_oedem = request.pengkajian_oedem;
    this.pengkajian_oedem_keterangan = request.pengkajian_oedem_keterangan;
    this.pengkajian_mulut = request.pengkajian_mulut;
    this.pengkajian_mulut_keterangan = request.pengkajian_mulut_keterangan;
    this.pengkajian_leher = request.pengkajian_leher;
    this.pengkajian_leher_keterangan = request.pengkajian_leher_keterangan;
    this.pengkajian_jantung = request.pengkajian_jantung;
    this.pengkajian_jantung_keterangan = request.pengkajian_jantung_keterangan;
    this.pengkajian_paru = request.pengkajian_paru;
    this.pengkajian_paru_keterangan = request.pengkajian_paru_keterangan;
    this.pengkajian_dada = request.pengkajian_dada;
    this.pengkajian_dada_keterangan = request.pengkajian_dada_keterangan;
    this.pengkajian_perut = request.pengkajian_perut;
    this.pengkajian_perut_keterangan = request.pengkajian_perut_keterangan;
    this.pengkajian_urogenital = request.pengkajian_urogenital;
    this.pengkajian_urogenital_keterangan = request.pengkajian_urogenital_keterangan;
    this.pengkajian_anggota_gerak = request.pengkajian_anggota_gerak;
    this.pengkajian_anggota_gerak_keterangan = request.pengkajian_anggota_gerak_keterangan;
    this.pengkajian_status_neurologis = request.pengkajian_status_neurologis;
    this.pengkajian_status_neurologis_keterangan = request.pengkajian_status_neurologis_keterangan;
    this.pengkajian_muskulos_keletal = request.pengkajian_muskulos_keletal;
    this.pengkajian_muskulos_keletal_keterangan = request.pengkajian_muskulos_keletal_keterangan;
    this.pengkajian_palpebra_superior = request.pengkajian_palpebra_superior;
    this.pengkajian_palpebra_superior_keterangan = request.pengkajian_palpebra_superior_keterangan;
    this.pengkajian_palpebra_inferior = request.pengkajian_palpebra_inferior;
    this.pengkajian_palpebra_inferior_keterangan = request.pengkajian_palpebra_inferior_keterangan;
    this.pengkajian_conj_tarsal_superior = request.pengkajian_conj_tarsal_superior;
    this.pengkajian_conj_tarsal_superior_keterangan = request.pengkajian_conj_tarsal_superior_keterangan;
    this.pengkajian_conj_tarsal_inferior = request.pengkajian_conj_tarsal_inferior;
    this.pengkajian_conj_tarsal_inferior_keterangan = request.pengkajian_conj_tarsal_inferior_keterangan;
    this.pengkajian_conj_bulbi = request.pengkajian_conj_bulbi;
    this.pengkajian_conj_bulbi_keterangan = request.pengkajian_conj_bulbi_keterangan;
    this.pengkajian_cornea = request.pengkajian_cornea;
    this.pengkajian_cornea_keterangan = request.pengkajian_cornea_keterangan;
    this.pengkajian_coa = request.pengkajian_coa;
    this.pengkajian_coa_keterangan = request.pengkajian_coa_keterangan;
    this.pengkajian_pupil = request.pengkajian_pupil;
    this.pengkajian_pupil_keterangan = request.pengkajian_pupil_keterangan;
    this.pengkajian_iris = request.pengkajian_iris;
    this.pengkajian_iris_keterangan = request.pengkajian_iris_keterangan;
    this.pengkajian_vitreous = request.pengkajian_vitreous;
    this.pengkajian_vitreous_keterangan = request.pengkajian_vitreous_keterangan;
    this.pengkajian_lensa = request.pengkajian_lensa;
    this.pengkajian_lensa_keterangan = request.pengkajian_lensa_keterangan;
    this.pengkajian_retina = request.pengkajian_retina;
    this.pengkajian_retina_keterangan = request.pengkajian_retina_keterangan;
    this.pemeriksaan_penunjang = request.pemeriksaan_penunjang;
    this.diagnosa = request.diagnosa;
    this.rencana_pengobatan = request.rencana_pengobatan;
    this.tanggal = request.tanggal;
    this['ttd-dokter'] = request['ttd-dokter'];
    this['id-dokter'] = request['id-dokter'];
    this.gambar_mata_od = request.gambar_mata_od;
    this.gambar_mata_os = request.gambar_mata_os;
    this.gambar_retina_od = request.gambar_retina_od;
    this.gambar_retina_os = request.gambar_retina_os;
    this.pengkajian_posisi = request.pengkajian_posisi;
    this.pengkajian_posisi_keterangan = request.pengkajian_posisi_keterangan;
    this.pengkajian_pergerakan = request.pengkajian_pergerakan;
    this.pengkajian_pergerakan_keterangan = request.pengkajian_pergerakan_keterangan;
    this.pengkajian_funduscopy = request.pengkajian_funduscopy;
    this.pengkajian_funduscopy_keterangan = request.pengkajian_funduscopy_keterangan;
    this.pengkajian_canthal_medial = request.pengkajian_canthal_medial;
    this.pengkajian_canthal_medial_keterangan = request.pengkajian_canthal_medial_keterangan;
    this.pengkajian_canthal_lateral = request.pengkajian_canthal_lateral;
    this.pengkajian_canthal_lateral_keterangan = request.pengkajian_canthal_lateral_keterangan;
    this.pengkajian_sclera = request.pengkajian_sclera;
    this.pengkajian_sclera_keterangan = request.pengkajian_sclera_keterangan;
    this.pediatrik = request.pediatrik;
    this.submit_pediatrik = request.submit_pediatrik;
    this.submit_retina = request.submit_retina;
    this.data_objektif_lain = request.data_objektif_lain;
    this.image_1 = request.image_1;
    this.image_2 = request.image_2;
    this.no_berobat = request.no_berobat;
    this['nama-obat'] = request['nama-obat'];
    this['aturan-pakai'] = request['aturan-pakai'];
    this.catatan = request.catatan;
    this.jumlah = request.jumlah;
    this.cppt_id = request.cppt_id;

  }

  static schema() {
    return yup.object().shape({
      keluhan_utama: yup.string(),
      anamnesa: yup.string(),
      riwayat_penyakit_terdahulu: yup.string(),
      riwayat_pemakaian_obat: yup.string(),
      riwayat_penyakit_keluarga: yup.string(),
      pekerjaan_zat_berbahaya: yup.string(),
      pekerjaan_zat_berbahaya_keterangan: yup.string(),
      riwayat_alergi: yup.string(),
      kesadaran: yup.string(),
      pernafasan: yup.string(),
      tekanan_darah: yup.string(),
      skala_nyeri: yup.string(),
      nadi: yup.string(),
      berat_badan: yup.string(),
      suhu: yup.string(),
      tinggi_badan: yup.string(),
      keadaan_umum: yup.string(),
      keadaan_gizi: yup.string(),
      oedem: yup.string(),
      ikterus: yup.string(),
      pengkajian_kepala: yup.string(),
      pengkajian_kepala_keterangan: yup.string(),
      pengkajian_mata: yup.string(),
      pengkajian_mata_keterangan: yup.string(),
      pengkajian_tht: yup.string(),
      pengkajian_tht_keterangan: yup.string(),
      pengkajian_oedem: yup.string(),
      pengkajian_oedem_keterangan: yup.string(),
      pengkajian_mulut: yup.string(),
      pengkajian_mulut_keterangan: yup.string(),
      pengkajian_leher: yup.string(),
      pengkajian_leher_keterangan: yup.string(),
      pengkajian_jantung: yup.string(),
      pengkajian_jantung_keterangan: yup.string(),
      pengkajian_paru: yup.string(),
      pengkajian_paru_keterangan: yup.string(),
      pengkajian_dada: yup.string(),
      pengkajian_dada_keterangan: yup.string(),
      pengkajian_perut: yup.string(),
      pengkajian_perut_keterangan: yup.string(),
      pengkajian_urogenital: yup.string(),
      pengkajian_urogenital_keterangan: yup.string(),
      pengkajian_anggota_gerak: yup.string(),
      pengkajian_anggota_gerak_keterangan: yup.string(),
      pengkajian_status_neurologis: yup.string(),
      pengkajian_status_neurologis_keterangan: yup.string(),
      pengkajian_muskulos_keletal: yup.string(),
      pengkajian_muskulos_keletal_keterangan: yup.string(),
      pengkajian_palpebra_superior: yup.string(),
      pengkajian_palpebra_superior_keterangan: yup.string(),
      pengkajian_palpebra_inferior: yup.string(),
      pengkajian_palpebra_inferior_keterangan: yup.string(),
      pengkajian_conj_tarsal_superior: yup.string(),
      pengkajian_conj_tarsal_superior_keterangan: yup.string(),
      pengkajian_conj_tarsal_inferior: yup.string(),
      pengkajian_conj_tarsal_inferior_keterangan: yup.string(),
      pengkajian_conj_bulbi: yup.string(),
      pengkajian_conj_bulbi_keterangan: yup.string(),
      pengkajian_cornea: yup.string(),
      pengkajian_cornea_keterangan: yup.string(),
      pengkajian_coa: yup.string(),
      pengkajian_coa_keterangan: yup.string(),
      pengkajian_pupil: yup.string(),
      pengkajian_pupil_keterangan: yup.string(),
      pengkajian_iris: yup.string(),
      pengkajian_iris_keterangan: yup.string(),
      pengkajian_vitreous: yup.string(),
      pengkajian_vitreous_keterangan: yup.string(),
      pengkajian_lensa: yup.string(),
      pengkajian_lensa_keterangan: yup.string(),
      pengkajian_retina: yup.string(),
      pengkajian_retina_keterangan: yup.string(),
      pemeriksaan_penunjang: yup.string(),
      diagnosa: yup.string(),
      rencana_pengobatan: yup.string(),
      tanggal: yup.string(),
      'ttd-dokter': yup.string(),
      'id-dokter': yup.string(),
      pengkajian_posisi: yup.string(),
      pengkajian_posisi_keterangan: yup.string(),
      pengkajian_pergerakan: yup.string(),
      pengkajian_pergerakan_keterangan: yup.string(),
      pengkajian_funduscopy: yup.string(),
      pengkajian_funduscopy_keterangan: yup.string(),
      pengkajian_canthal_medial: yup.string(),
      pengkajian_canthal_medial_keterangan: yup.string(),
      pengkajian_canthal_lateral: yup.string(),
      pengkajian_canthal_lateral_keterangan: yup.string(),
      pengkajian_sclera: yup.string(),
      pengkajian_sclera_keterangan: yup.string(),
      gambar_mata_od: yup.string(),
      gambar_mata_os: yup.string(),
      gambar_retina_od: yup.string(),
      gambar_retina_os: yup.string(),
      pediatrik: yup.mixed(),
      submit_pediatrik: yup.string(),
      submit_retina: yup.string(),
      data_objektif_lain: yup.string(),
      image_1: yup.mixed(),
      image_2: yup.mixed(),
      no_berobat: yup.string(),
      'nama-obat': yup.array(yup.string()),
      'aturan-pakai': yup.array(yup.string()),
      jumlah: yup.array(yup.string()),
      catatan: yup.array(yup.string()),
      cppt_id: yup.string(),
    });
  }

  static convertToNormalDatetime(date: any) {
    const d = new Date(date);
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }
  static createFromJson(json: IUpdateInpatientMedicalNoteRequest) {
    return new UpdateInpatientMedicalNoteRequest(json);
  }

  static createPrescription(json: any) {
    return {
      'nama-obat': json.meds_name,
      'aturan-pakai': json.how_to_use,
      jumlah: json.total,
      catatan: json.notes,
    }
  }
}
