import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';

export interface IUpdateAnestheticStatusRequest extends IAppRequest {

  id_dpjp_anestesi: string;
  id_asisten_anestesi: string;
  id_dpjp_bedah: string;
  diagnosa_pra_bedah: string;
  jenis_pembedahan: string;
  diagnosis_pasca_bedah: string;
  teknik_anestesi: string;
  teknik_anestesi_lainnya: string;
  teknik_khusus_hipotensi: string;
  teknik_khusus_bronkoskopi: string;
  teknik_khusus_tci: string;
  teknik_khusus_glidescope: string;
  teknik_khusus_cpb: string;
  teknik_khusus_usg: string;
  teknik_khusus_ventilasi: string;
  teknik_khusus_stimulator: string;
  teknik_khusus_lainnya: string;
  teknik_khusus_lainnya_teks: string;
  monitoring_ekg: string;
  monitoring_nibp: string;
  monitoring_cath: string;
  monitoring_arteri: string;
  monitoring_ngt: string;
  monitoring_spo2: string;
  monitoring_etco2: string;
  monitoring_bis: string;
  monitoring_katerer: string;
  monitoring_stetoskop: string;
  monitoring_cvp: string;
  monitoring_temp: string;
  monitoring_lainnya: string;
  monitoring_lainnya_teks: string;
  monitoring_ekg_teks : string;
  monitoring_arteri_teks : string;
  monitoring_cvp_teks: string;
  asa: string;
  alergi: string;
  alergi_keterangan: string;
  penyulit_pra_anestesi: string;
  checklist_inform_consent: string;
  checklist_monitoring: string;
  checklist_obat_anestesi: string;
  checklist_obat_emergensi: string;
  checklist_tatalaksana: string;
  checklist_suction: string;
  checklist_mesin: string;
  pra_induksi_kesadaran: string;
  pra_induksi_tekanan_darah: string;
  pra_induksi_denyut_nadi: string;
  pra_induksi_rr: string;
  pra_induksi_suhu: string;
  pra_induksi_saturasi: string;
  pra_induksi_lainnya: string;
  jam_pra_induksi: string;
  catatan: string;
  infus_perifer_1: string;
  infus_perifer_2: string;
  infus_perifer_3: string;
  posisi: string;
  posisi_lainnya: string;
  premedikasi_oral: string;
  premedikasi_im: string;
  premedikasi_iv: string;
  induksi_intravena: string;
  induksi_inhalasi: string;
  face_mask_no: string;
  oro_no: string;
  ett_no: string;
  ett_jenis: string;
  ett_fiksasi: string;
  lma_no: string;
  lma_jenis: string;
  trakhesotomi: string;
  bronkoskopi_fiber: string;
  glidescope: string;
  tata_laksana_lainnya: string;
  intubasi_sesudah_tidur: string;
  intubasi_blind: string;
  intubasi_oral: string;
  intubasi_nasal: string;
  intubasi_kanan: string;
  intubasi_kiri: string;
  intubasi_trakheostomi: string;
  intubasi_sulit_ventilasi: string;
  intubasi_sulit_ventilasi_teks: string;
  intubasi_sulit_intubasi: string;
  intubasi_sulit_intubasi_teks: string;
  intubasi_dengan_stilet: string;
  intubasi_dengan_stilet_teks: string;
  intubasi_cuff: string;
  intubasi_level_ett: string;
  intubasi_pack: string;
  ventilasi_spontan: string;
  ventilasi_kendali: string;
  ventilasi_ventilator: string;
  ventilasi_ventilator_tv: string;
  ventilasi_ventilator_rr: string;
  ventilasi_ventilator_peep: string;
  ventilasi_lainnya: string;
  ventilasi_lainnya_teks: string;
  ckp_jam_masuk: string;
  ckp_tekanan_darah: string;
  ckp_denyut_nadi: string;
  ckp_rr: string;
  ckp_suhu: string;
  ckp_kesadaran: string;
  ckp_pernafasan: string;
  ckp_penyulit_intra_operatif: string;
  ckp_instruksi_khusus: string;
  grid_chart_data: string;
  grid_chart_img: string;
  vas: string;
  vas_pulih : string;
  jam_keluar_pulih: string;
  aldrette_aktivitas: string;
  aldrette_sirkulasi: string;
  aldrette_pernafasan: string;
  aldrette_kesadaran: string;
  aldrette_warna_kulit: string;
  aldrette_total: string;
  aldrette_skor_vas: string;
  steward_pernafasan: string;
  steward_kesadaran: string;
  steward_motorik: string;
  steward_total: string;
  steward_skor_vas: string;
  pindah_ke: string;
  pindah_ke_lainnya: string;
  catatan_khusus_ruang_pemulihan: string;
  ipa_pengelolaan_nyeri: string;
  ipa_penanganan_mual: string;
  ipa_antibiotik: string;
  ipa_obat: string;
  ipa_infus: string;
  ipa_diet: string;
  ipa_tensi_setiap: string;
  ipa_tensi_selama: string;
  ipa_lainnya: string;
  ttd_penata_anestesi: string;
  id_penata_anestesi: string;
  ttd_dokter_anestesi: string;
  id_dokter_anestesi: string;
  url_image_chart: string;
  name_image_chart: string;
  size_image_chart: string;
  type_image_chart: string;
  json_image_chart: string;
  skala_anestesi: string;
  image_1: string;
  image_2: string;
  image_3: string;
}

export class UpdateAnestheticStatusRequest extends AppRequest {

  id_dpjp_anestesi: string;
  id_asisten_anestesi: string;
  id_dpjp_bedah: string;
  diagnosa_pra_bedah: string;
  jenis_pembedahan: string;
  diagnosis_pasca_bedah: string;
  teknik_anestesi: string;
  teknik_anestesi_lainnya: string;
  teknik_khusus_hipotensi: string;
  teknik_khusus_bronkoskopi: string;
  teknik_khusus_tci: string;
  teknik_khusus_glidescope: string;
  teknik_khusus_cpb: string;
  teknik_khusus_usg: string;
  teknik_khusus_ventilasi: string;
  teknik_khusus_stimulator: string;
  teknik_khusus_lainnya: string;
  teknik_khusus_lainnya_teks: string;
  monitoring_ekg: string;
  monitoring_nibp: string;
  monitoring_cath: string;
  monitoring_arteri: string;
  monitoring_ngt: string;
  monitoring_spo2: string;
  monitoring_etco2: string;
  monitoring_bis: string;
  monitoring_katerer: string;
  monitoring_stetoskop: string;
  monitoring_cvp: string;
  monitoring_temp: string;
  monitoring_lainnya: string;
  monitoring_lainnya_teks: string;
  monitoring_ekg_teks : string;
  monitoring_arteri_teks : string;
  monitoring_cvp_teks: string;
  asa: string;
  alergi: string;
  alergi_keterangan: string;
  penyulit_pra_anestesi: string;
  checklist_inform_consent: string;
  checklist_monitoring: string;
  checklist_obat_anestesi: string;
  checklist_obat_emergensi: string;
  checklist_tatalaksana: string;
  checklist_suction: string;
  checklist_mesin: string;
  pra_induksi_kesadaran: string;
  pra_induksi_tekanan_darah: string;
  pra_induksi_denyut_nadi: string;
  pra_induksi_rr: string;
  pra_induksi_suhu: string;
  pra_induksi_saturasi: string;
  pra_induksi_lainnya: string;
  jam_pra_induksi: string;
  catatan: string;
  infus_perifer_1: string;
  infus_perifer_2: string;
  infus_perifer_3: string;
  posisi: string;
  posisi_lainnya: string;
  premedikasi_oral: string;
  premedikasi_im: string;
  premedikasi_iv: string;
  induksi_intravena: string;
  induksi_inhalasi: string;
  face_mask_no: string;
  oro_no: string;
  ett_no: string;
  ett_jenis: string;
  ett_fiksasi: string;
  lma_no: string;
  lma_jenis: string;
  trakhesotomi: string;
  bronkoskopi_fiber: string;
  glidescope: string;
  tata_laksana_lainnya: string;
  intubasi_sesudah_tidur: string;
  intubasi_blind: string;
  intubasi_oral: string;
  intubasi_nasal: string;
  intubasi_kanan: string;
  intubasi_kiri: string;
  intubasi_trakheostomi: string;
  intubasi_sulit_ventilasi: string;
  intubasi_sulit_ventilasi_teks: string;
  intubasi_sulit_intubasi: string;
  intubasi_sulit_intubasi_teks: string;
  intubasi_dengan_stilet: string;
  intubasi_dengan_stilet_teks: string;
  intubasi_cuff: string;
  intubasi_level_ett: string;
  intubasi_pack: string;
  ventilasi_spontan: string;
  ventilasi_kendali: string;
  ventilasi_ventilator: string;
  ventilasi_ventilator_tv: string;
  ventilasi_ventilator_rr: string;
  ventilasi_ventilator_peep: string;
  ventilasi_lainnya: string;
  ventilasi_lainnya_teks: string;
  ckp_jam_masuk: string;
  ckp_tekanan_darah: string;
  ckp_denyut_nadi: string;
  ckp_rr: string;
  ckp_suhu: string;
  ckp_kesadaran: string;
  ckp_pernafasan: string;
  ckp_penyulit_intra_operatif: string;
  ckp_instruksi_khusus: string;
  grid_chart_data: string;
  grid_chart_img: string;
  vas: string;
  vas_pulih : string;
  jam_keluar_pulih: string;
  aldrette_aktivitas: string;
  aldrette_sirkulasi: string;
  aldrette_pernafasan: string;
  aldrette_kesadaran: string;
  aldrette_warna_kulit: string;
  aldrette_total: string;
  aldrette_skor_vas: string;
  steward_pernafasan: string;
  steward_kesadaran: string;
  steward_motorik: string;
  steward_total: string;
  steward_skor_vas: string;
  pindah_ke: string;
  pindah_ke_lainnya: string;
  catatan_khusus_ruang_pemulihan: string;
  ipa_pengelolaan_nyeri: string;
  ipa_penanganan_mual: string;
  ipa_antibiotik: string;
  ipa_obat: string;
  ipa_infus: string;
  ipa_diet: string;
  ipa_tensi_setiap: string;
  ipa_tensi_selama: string;
  ipa_lainnya: string;
  ttd_penata_anestesi: string;
  id_penata_anestesi: string;
  ttd_dokter_anestesi: string;
  id_dokter_anestesi: string;
  url_image_chart: string;
  name_image_chart: string;
  size_image_chart: string;
  type_image_chart: string;
  json_image_chart: string;
  skala_anestesi: string;
  image_1: string;
  image_2: string;
  image_3: string;

  constructor(request: IUpdateAnestheticStatusRequest) {
    super(request);

    this.id_dpjp_anestesi  = request.id_dpjp_anestesi;
    this.id_asisten_anestesi  = request.id_asisten_anestesi;
    this.id_dpjp_bedah  = request.id_dpjp_bedah;
    this.diagnosa_pra_bedah  = request.diagnosa_pra_bedah;
    this.jenis_pembedahan  = request.jenis_pembedahan;
    this.diagnosis_pasca_bedah  = request.diagnosis_pasca_bedah;
    this.teknik_anestesi  = request.teknik_anestesi;
    this.teknik_anestesi_lainnya  = request.teknik_anestesi_lainnya;
    this.teknik_khusus_hipotensi  = request.teknik_khusus_hipotensi;
    this.teknik_khusus_bronkoskopi  = request.teknik_khusus_bronkoskopi;
    this.teknik_khusus_tci  = request.teknik_khusus_tci;
    this.teknik_khusus_glidescope  = request.teknik_khusus_glidescope;
    this.teknik_khusus_cpb  = request.teknik_khusus_cpb;
    this.teknik_khusus_usg  = request.teknik_khusus_usg;
    this.teknik_khusus_ventilasi  = request.teknik_khusus_ventilasi;
    this.teknik_khusus_stimulator  = request.teknik_khusus_stimulator;
    this.teknik_khusus_lainnya  = request.teknik_khusus_lainnya;
    this.teknik_khusus_lainnya_teks  = request.teknik_khusus_lainnya_teks;
    this.monitoring_ekg  = request.monitoring_ekg;
    this.monitoring_nibp  = request.monitoring_nibp;
    this.monitoring_cath  = request.monitoring_cath;
    this.monitoring_arteri  = request.monitoring_arteri;
    this.monitoring_ngt  = request.monitoring_ngt;
    this.monitoring_spo2  = request.monitoring_spo2;
    this.monitoring_etco2  = request.monitoring_etco2;
    this.monitoring_bis  = request.monitoring_bis;
    this.monitoring_katerer  = request.monitoring_katerer;
    this.monitoring_stetoskop  = request.monitoring_stetoskop;
    this.monitoring_cvp  = request.monitoring_cvp;
    this.monitoring_temp  = request.monitoring_temp;
    this.monitoring_lainnya  = request.monitoring_lainnya;
    this.monitoring_lainnya_teks  = request.monitoring_lainnya_teks;
    this.monitoring_ekg_teks  = request.monitoring_ekg_teks;
    this.monitoring_arteri_teks  = request.monitoring_arteri_teks;
    this.monitoring_cvp_teks  = request.monitoring_cvp_teks;
    this.asa  = request.asa;
    this.alergi  = request.alergi;
    this.alergi_keterangan  = request.alergi_keterangan;
    this.penyulit_pra_anestesi  = request.penyulit_pra_anestesi;
    this.checklist_inform_consent  = request.checklist_inform_consent;
    this.checklist_monitoring  = request.checklist_monitoring;
    this.checklist_obat_anestesi  = request.checklist_obat_anestesi;
    this.checklist_obat_emergensi  = request.checklist_obat_emergensi;
    this.checklist_tatalaksana  = request.checklist_tatalaksana;
    this.checklist_suction  = request.checklist_suction;
    this.checklist_mesin  = request.checklist_mesin;
    this.pra_induksi_kesadaran  = request.pra_induksi_kesadaran;
    this.pra_induksi_tekanan_darah  = request.pra_induksi_tekanan_darah;
    this.pra_induksi_denyut_nadi  = request.pra_induksi_denyut_nadi;
    this.pra_induksi_rr  = request.pra_induksi_rr;
    this.pra_induksi_suhu  = request.pra_induksi_suhu;
    this.pra_induksi_saturasi  = request.pra_induksi_saturasi;
    this.pra_induksi_lainnya  = request.pra_induksi_lainnya;
    this.jam_pra_induksi  = request.jam_pra_induksi;
    this.catatan  = request.catatan;
    this.infus_perifer_1  = request.infus_perifer_1;
    this.infus_perifer_2  = request.infus_perifer_2;
    this.infus_perifer_3  = request.infus_perifer_3;
    this.posisi  = request.posisi;
    this.posisi_lainnya  = request.posisi_lainnya;
    this.premedikasi_oral  = request.premedikasi_oral;
    this.premedikasi_im  = request.premedikasi_im;
    this.premedikasi_iv  = request.premedikasi_iv;
    this.induksi_intravena  = request.induksi_intravena;
    this.induksi_inhalasi  = request.induksi_inhalasi;
    this.face_mask_no  = request.face_mask_no;
    this.oro_no  = request.oro_no;
    this.ett_no  = request.ett_no;
    this.ett_jenis  = request.ett_jenis;
    this.ett_fiksasi  = request.ett_fiksasi;
    this.lma_no  = request.lma_no;
    this.lma_jenis  = request.lma_jenis;
    this.trakhesotomi  = request.trakhesotomi;
    this.bronkoskopi_fiber  = request.bronkoskopi_fiber;
    this.glidescope  = request.glidescope;
    this.tata_laksana_lainnya  = request.tata_laksana_lainnya;
    this.intubasi_sesudah_tidur  = request.intubasi_sesudah_tidur;
    this.intubasi_blind  = request.intubasi_blind;
    this.intubasi_oral  = request.intubasi_oral;
    this.intubasi_nasal  = request.intubasi_nasal;
    this.intubasi_kanan  = request.intubasi_kanan;
    this.intubasi_kiri  = request.intubasi_kiri;
    this.intubasi_trakheostomi  = request.intubasi_trakheostomi;
    this.intubasi_sulit_ventilasi  = request.intubasi_sulit_ventilasi;
    this.intubasi_sulit_ventilasi_teks  = request.intubasi_sulit_ventilasi_teks;
    this.intubasi_sulit_intubasi  = request.intubasi_sulit_intubasi;
    this.intubasi_sulit_intubasi_teks  = request.intubasi_sulit_intubasi_teks;
    this.intubasi_dengan_stilet  = request.intubasi_dengan_stilet;
    this.intubasi_dengan_stilet_teks  = request.intubasi_dengan_stilet_teks;
    this.intubasi_cuff  = request.intubasi_cuff;
    this.intubasi_level_ett  = request.intubasi_level_ett;
    this.intubasi_pack  = request.intubasi_pack;
    this.ventilasi_spontan  = request.ventilasi_spontan;
    this.ventilasi_kendali  = request.ventilasi_kendali;
    this.ventilasi_ventilator  = request.ventilasi_ventilator;
    this.ventilasi_ventilator_tv  = request.ventilasi_ventilator_tv;
    this.ventilasi_ventilator_rr  = request.ventilasi_ventilator_rr;
    this.ventilasi_ventilator_peep  = request.ventilasi_ventilator_peep;
    this.ventilasi_lainnya  = request.ventilasi_lainnya;
    this.ventilasi_lainnya_teks  = request.ventilasi_lainnya_teks;
    this.ckp_jam_masuk  = request.ckp_jam_masuk;
    this.ckp_tekanan_darah  = request.ckp_tekanan_darah;
    this.ckp_denyut_nadi  = request.ckp_denyut_nadi;
    this.ckp_rr  = request.ckp_rr;
    this.ckp_suhu  = request.ckp_suhu;
    this.ckp_kesadaran  = request.ckp_kesadaran;
    this.ckp_pernafasan  = request.ckp_pernafasan;
    this.ckp_penyulit_intra_operatif  = request.ckp_penyulit_intra_operatif;
    this.ckp_instruksi_khusus  = request.ckp_instruksi_khusus;
    this.grid_chart_data  = request.grid_chart_data;
    this.grid_chart_img  = request.grid_chart_img;
    this.vas  = request.vas;
    this.vas_pulih  = request.vas_pulih;
    this.jam_keluar_pulih  = request.jam_keluar_pulih;
    this.aldrette_aktivitas  = request.aldrette_aktivitas;
    this.aldrette_sirkulasi  = request.aldrette_sirkulasi;
    this.aldrette_pernafasan  = request.aldrette_pernafasan;
    this.aldrette_kesadaran  = request.aldrette_kesadaran;
    this.aldrette_warna_kulit  = request.aldrette_warna_kulit;
    this.aldrette_total  = request.aldrette_total;
    this.aldrette_skor_vas  = request.aldrette_skor_vas;
    this.steward_pernafasan  = request.steward_pernafasan;
    this.steward_kesadaran  = request.steward_kesadaran;
    this.steward_motorik  = request.steward_motorik;
    this.steward_total  = request.steward_total;
    this.steward_skor_vas  = request.steward_skor_vas;
    this.pindah_ke  = request.pindah_ke;
    this.pindah_ke_lainnya  = request.pindah_ke_lainnya;
    this.catatan_khusus_ruang_pemulihan  = request.catatan_khusus_ruang_pemulihan;
    this.ipa_pengelolaan_nyeri  = request.ipa_pengelolaan_nyeri;
    this.ipa_penanganan_mual  = request.ipa_penanganan_mual;
    this.ipa_antibiotik  = request.ipa_antibiotik;
    this.ipa_obat  = request.ipa_obat;
    this.ipa_infus  = request.ipa_infus;
    this.ipa_diet  = request.ipa_diet;
    this.ipa_tensi_setiap  = request.ipa_tensi_setiap;
    this.ipa_tensi_selama  = request.ipa_tensi_selama;
    this.ipa_lainnya  = request.ipa_lainnya;
    this.ttd_penata_anestesi  = request.ttd_penata_anestesi;
    this.id_penata_anestesi  = request.id_penata_anestesi;
    this.ttd_dokter_anestesi  = request.ttd_dokter_anestesi;
    this.id_dokter_anestesi  = request.id_dokter_anestesi;
    this.url_image_chart = request.url_image_chart;
    this.name_image_chart = request.name_image_chart;
    this.size_image_chart = request.size_image_chart;
    this.type_image_chart = request.type_image_chart;
    this.json_image_chart = request.json_image_chart;
    this.skala_anestesi = request.skala_anestesi;
    this.image_1 = request.image_1;
    this.image_2 = request.image_2;
    this.image_3 = request.image_3;

  }

  static schema() {
    return yup.object().shape({

      id_dpjp_anestesi : yup.string(),
      id_asisten_anestesi : yup.string(),
      id_dpjp_bedah : yup.string(),
      diagnosa_pra_bedah : yup.string(),
      jenis_pembedahan : yup.string(),
      diagnosis_pasca_bedah : yup.string(),
      teknik_anestesi : yup.string(),
      teknik_anestesi_lainnya : yup.string(),
      teknik_khusus_hipotensi : yup.string(),
      teknik_khusus_bronkoskopi : yup.string(),
      teknik_khusus_tci : yup.string(),
      teknik_khusus_glidescope : yup.string(),
      teknik_khusus_cpb : yup.string(),
      teknik_khusus_usg : yup.string(),
      teknik_khusus_ventilasi : yup.string(),
      teknik_khusus_stimulator : yup.string(),
      teknik_khusus_lainnya : yup.string(),
      teknik_khusus_lainnya_teks : yup.string(),
      monitoring_ekg : yup.string(),
      monitoring_nibp : yup.string(),
      monitoring_cath : yup.string(),
      monitoring_arteri : yup.string(),
      monitoring_ngt : yup.string(),
      monitoring_spo2 : yup.string(),
      monitoring_etco2 : yup.string(),
      monitoring_bis : yup.string(),
      monitoring_katerer : yup.string(),
      monitoring_stetoskop : yup.string(),
      monitoring_cvp : yup.string(),
      monitoring_temp : yup.string(),
      monitoring_lainnya : yup.string(),
      monitoring_lainnya_teks : yup.string(),
      monitoring_ekg_teks  : yup.string(),
      monitoring_arteri_teks  : yup.string(),
      monitoring_cvp_teks  : yup.string(),
      asa : yup.string(),
      alergi : yup.string(),
      alergi_keterangan : yup.string(),
      penyulit_pra_anestesi : yup.string(),
      checklist_inform_consent : yup.string(),
      checklist_monitoring : yup.string(),
      checklist_obat_anestesi : yup.string(),
      checklist_obat_emergensi : yup.string(),
      checklist_tatalaksana : yup.string(),
      checklist_suction : yup.string(),
      checklist_mesin : yup.string(),
      pra_induksi_kesadaran : yup.string(),
      pra_induksi_tekanan_darah : yup.string(),
      pra_induksi_denyut_nadi : yup.string(),
      pra_induksi_rr : yup.string(),
      pra_induksi_suhu : yup.string(),
      pra_induksi_saturasi : yup.string(),
      pra_induksi_lainnya : yup.string(),
      jam_pra_induksi : yup.string(),
      catatan : yup.string(),
      infus_perifer_1 : yup.string(),
      infus_perifer_2 : yup.string(),
      infus_perifer_3 : yup.string(),
      posisi : yup.string(),
      posisi_lainnya : yup.string(),
      premedikasi_oral : yup.string(),
      premedikasi_im : yup.string(),
      premedikasi_iv : yup.string(),
      induksi_intravena : yup.string(),
      induksi_inhalasi : yup.string(),
      face_mask_no : yup.string(),
      oro_no : yup.string(),
      ett_no : yup.string(),
      ett_jenis : yup.string(),
      ett_fiksasi : yup.string(),
      lma_no : yup.string(),
      lma_jenis : yup.string(),
      trakhesotomi : yup.string(),
      bronkoskopi_fiber : yup.string(),
      glidescope : yup.string(),
      tata_laksana_lainnya : yup.string(),
      intubasi_sesudah_tidur : yup.string(),
      intubasi_blind : yup.string(),
      intubasi_oral : yup.string(),
      intubasi_nasal : yup.string(),
      intubasi_kanan : yup.string(),
      intubasi_kiri : yup.string(),
      intubasi_trakheostomi : yup.string(),
      intubasi_sulit_ventilasi : yup.string(),
      intubasi_sulit_ventilasi_teks : yup.string(),
      intubasi_sulit_intubasi : yup.string(),
      intubasi_sulit_intubasi_teks : yup.string(),
      intubasi_dengan_stilet : yup.string(),
      intubasi_dengan_stilet_teks : yup.string(),
      intubasi_cuff : yup.string(),
      intubasi_level_ett : yup.string(),
      intubasi_pack : yup.string(),
      ventilasi_spontan : yup.string(),
      ventilasi_kendali : yup.string(),
      ventilasi_ventilator : yup.string(),
      ventilasi_ventilator_tv : yup.string(),
      ventilasi_ventilator_rr : yup.string(),
      ventilasi_ventilator_peep : yup.string(),
      ventilasi_lainnya : yup.string(),
      ventilasi_lainnya_teks : yup.string(),
      ckp_jam_masuk : yup.string(),
      ckp_tekanan_darah : yup.string(),
      ckp_denyut_nadi : yup.string(),
      ckp_rr : yup.string(),
      ckp_suhu : yup.string(),
      ckp_kesadaran : yup.string(),
      ckp_pernafasan : yup.string(),
      ckp_penyulit_intra_operatif : yup.string(),
      ckp_instruksi_khusus : yup.string(),
      grid_chart_data : yup.string(),
      grid_chart_img : yup.string(),
      vas : yup.string(),
      vas_pulih : yup.string(),
      jam_keluar_pulih : yup.string(),
      aldrette_aktivitas : yup.string(),
      aldrette_sirkulasi : yup.string(),
      aldrette_pernafasan : yup.string(),
      aldrette_kesadaran : yup.string(),
      aldrette_warna_kulit : yup.string(),
      aldrette_total : yup.string(),
      aldrette_skor_vas : yup.string(),
      steward_pernafasan : yup.string(),
      steward_kesadaran : yup.string(),
      steward_motorik : yup.string(),
      steward_total : yup.string(),
      steward_skor_vas : yup.string(),
      pindah_ke : yup.string(),
      pindah_ke_lainnya : yup.string(),
      catatan_khusus_ruang_pemulihan : yup.string(),
      ipa_pengelolaan_nyeri : yup.string(),
      ipa_penanganan_mual : yup.string(),
      ipa_antibiotik : yup.string(),
      ipa_obat : yup.string(),
      ipa_infus : yup.string(),
      ipa_diet : yup.string(),
      ipa_tensi_setiap : yup.string(),
      ipa_tensi_selama : yup.string(),
      ipa_lainnya : yup.string(),
      ttd_penata_anestesi : yup.string(),
      id_penata_anestesi : yup.string(),
      ttd_dokter_anestesi : yup.string(),
      id_dokter_anestesi : yup.string(),
      url_image_chart : yup.string(),
      name_image_chart : yup.string(),
      size_image_chart : yup.string(),
      type_image_chart : yup.string(),
      json_image_chart  : yup.string(),
      skala_anestesi  : yup.string(),
      image_1  : yup.string(),
      image_2  : yup.string(),
      image_3  : yup.string(),
    });
  }

  normalize() {
    return {

      id_dpjp_anestesi : this.id_dpjp_anestesi,
      id_asisten_anestesi : this.id_asisten_anestesi,
      id_dpjp_bedah : this.id_dpjp_bedah,
      diagnosa_pra_bedah : this.diagnosa_pra_bedah,
      jenis_pembedahan : this.jenis_pembedahan,
      diagnosis_pasca_bedah : this.diagnosis_pasca_bedah,
      teknik_anestesi : this.teknik_anestesi,
      teknik_anestesi_lainnya : this.teknik_anestesi_lainnya,
      teknik_khusus_hipotensi : this.teknik_khusus_hipotensi,
      teknik_khusus_bronkoskopi : this.teknik_khusus_bronkoskopi,
      teknik_khusus_tci : this.teknik_khusus_tci,
      teknik_khusus_glidescope : this.teknik_khusus_glidescope,
      teknik_khusus_cpb : this.teknik_khusus_cpb,
      teknik_khusus_usg : this.teknik_khusus_usg,
      teknik_khusus_ventilasi : this.teknik_khusus_ventilasi,
      teknik_khusus_stimulator : this.teknik_khusus_stimulator,
      teknik_khusus_lainnya : this.teknik_khusus_lainnya,
      teknik_khusus_lainnya_teks : this.teknik_khusus_lainnya_teks,
      monitoring_ekg : this.monitoring_ekg,
      monitoring_nibp : this.monitoring_nibp,
      monitoring_cath : this.monitoring_cath,
      monitoring_arteri : this.monitoring_arteri,
      monitoring_ngt : this.monitoring_ngt,
      monitoring_spo2 : this.monitoring_spo2,
      monitoring_etco2 : this.monitoring_etco2,
      monitoring_bis : this.monitoring_bis,
      monitoring_katerer : this.monitoring_katerer,
      monitoring_stetoskop : this.monitoring_stetoskop,
      monitoring_cvp : this.monitoring_cvp,
      monitoring_temp : this.monitoring_temp,
      monitoring_lainnya : this.monitoring_lainnya,
      monitoring_lainnya_teks : this.monitoring_lainnya_teks,
      monitoring_ekg_teks  : this.monitoring_ekg_teks,
      monitoring_arteri_teks  : this.monitoring_arteri_teks,
      monitoring_cvp_teks  : this.monitoring_cvp_teks,
      asa : this.asa,
      alergi : this.alergi,
      alergi_keterangan : this.alergi_keterangan,
      penyulit_pra_anestesi : this.penyulit_pra_anestesi,
      checklist_inform_consent : this.checklist_inform_consent,
      checklist_monitoring : this.checklist_monitoring,
      checklist_obat_anestesi : this.checklist_obat_anestesi,
      checklist_obat_emergensi : this.checklist_obat_emergensi,
      checklist_tatalaksana : this.checklist_tatalaksana,
      checklist_suction : this.checklist_suction,
      checklist_mesin : this.checklist_mesin,
      pra_induksi_kesadaran : this.pra_induksi_kesadaran,
      pra_induksi_tekanan_darah : this.pra_induksi_tekanan_darah,
      pra_induksi_denyut_nadi : this.pra_induksi_denyut_nadi,
      pra_induksi_rr : this.pra_induksi_rr,
      pra_induksi_suhu : this.pra_induksi_suhu,
      pra_induksi_saturasi : this.pra_induksi_saturasi,
      pra_induksi_lainnya : this.pra_induksi_lainnya,
      jam_pra_induksi : this.jam_pra_induksi,
      catatan : this.catatan,
      infus_perifer_1 : this.infus_perifer_1,
      infus_perifer_2 : this.infus_perifer_2,
      infus_perifer_3 : this.infus_perifer_3,
      posisi : this.posisi,
      posisi_lainnya : this.posisi_lainnya,
      premedikasi_oral : this.premedikasi_oral,
      premedikasi_im : this.premedikasi_im,
      premedikasi_iv : this.premedikasi_iv,
      induksi_intravena : this.induksi_intravena,
      induksi_inhalasi : this.induksi_inhalasi,
      face_mask_no : this.face_mask_no,
      oro_no : this.oro_no,
      ett_no : this.ett_no,
      ett_jenis : this.ett_jenis,
      ett_fiksasi : this.ett_fiksasi,
      lma_no : this.lma_no,
      lma_jenis : this.lma_jenis,
      trakhesotomi : this.trakhesotomi,
      bronkoskopi_fiber : this.bronkoskopi_fiber,
      glidescope : this.glidescope,
      tata_laksana_lainnya : this.tata_laksana_lainnya,
      intubasi_sesudah_tidur : this.intubasi_sesudah_tidur,
      intubasi_blind : this.intubasi_blind,
      intubasi_oral : this.intubasi_oral,
      intubasi_nasal : this.intubasi_nasal,
      intubasi_kanan : this.intubasi_kanan,
      intubasi_kiri : this.intubasi_kiri,
      intubasi_trakheostomi : this.intubasi_trakheostomi,
      intubasi_sulit_ventilasi : this.intubasi_sulit_ventilasi,
      intubasi_sulit_ventilasi_teks : this.intubasi_sulit_ventilasi_teks,
      intubasi_sulit_intubasi : this.intubasi_sulit_intubasi,
      intubasi_sulit_intubasi_teks : this.intubasi_sulit_intubasi_teks,
      intubasi_dengan_stilet : this.intubasi_dengan_stilet,
      intubasi_dengan_stilet_teks : this.intubasi_dengan_stilet_teks,
      intubasi_cuff : this.intubasi_cuff,
      intubasi_level_ett : this.intubasi_level_ett,
      intubasi_pack : this.intubasi_pack,
      ventilasi_spontan : this.ventilasi_spontan,
      ventilasi_kendali : this.ventilasi_kendali,
      ventilasi_ventilator : this.ventilasi_ventilator,
      ventilasi_ventilator_tv : this.ventilasi_ventilator_tv,
      ventilasi_ventilator_rr : this.ventilasi_ventilator_rr,
      ventilasi_ventilator_peep : this.ventilasi_ventilator_peep,
      ventilasi_lainnya : this.ventilasi_lainnya,
      ventilasi_lainnya_teks : this.ventilasi_lainnya_teks,
      ckp_jam_masuk : this.ckp_jam_masuk,
      ckp_tekanan_darah : this.ckp_tekanan_darah,
      ckp_denyut_nadi : this.ckp_denyut_nadi,
      ckp_rr : this.ckp_rr,
      ckp_suhu : this.ckp_suhu,
      ckp_kesadaran : this.ckp_kesadaran,
      ckp_pernafasan : this.ckp_pernafasan,
      ckp_penyulit_intra_operatif : this.ckp_penyulit_intra_operatif,
      ckp_instruksi_khusus : this.ckp_instruksi_khusus,
      grid_chart_data : this.grid_chart_data,
      grid_chart_img : this.grid_chart_img,
      vas : this.vas,
      vas_pulih : this.vas_pulih,
      jam_keluar_pulih : this.jam_keluar_pulih,
      aldrette_aktivitas : this.aldrette_aktivitas,
      aldrette_sirkulasi : this.aldrette_sirkulasi,
      aldrette_pernafasan : this.aldrette_pernafasan,
      aldrette_kesadaran : this.aldrette_kesadaran,
      aldrette_warna_kulit : this.aldrette_warna_kulit,
      aldrette_total : this.aldrette_total,
      aldrette_skor_vas : this.aldrette_skor_vas,
      steward_pernafasan : this.steward_pernafasan,
      steward_kesadaran : this.steward_kesadaran,
      steward_motorik : this.steward_motorik,
      steward_total : this.steward_total,
      steward_skor_vas : this.steward_skor_vas,
      pindah_ke : this.pindah_ke,
      pindah_ke_lainnya : this.pindah_ke_lainnya,
      catatan_khusus_ruang_pemulihan : this.catatan_khusus_ruang_pemulihan,
      ipa_pengelolaan_nyeri : this.ipa_pengelolaan_nyeri,
      ipa_penanganan_mual : this.ipa_penanganan_mual,
      ipa_antibiotik : this.ipa_antibiotik,
      ipa_obat : this.ipa_obat,
      ipa_infus : this.ipa_infus,
      ipa_diet : this.ipa_diet,
      ipa_tensi_setiap : this.ipa_tensi_setiap,
      ipa_tensi_selama : this.ipa_tensi_selama,
      ipa_lainnya : this.ipa_lainnya,
      ttd_penata_anestesi : this.ttd_penata_anestesi,
      id_penata_anestesi : this.id_penata_anestesi,
      ttd_dokter_anestesi : this.ttd_dokter_anestesi,
      id_dokter_anestesi   : this.id_dokter_anestesi,
      url_image_chart : this.url_image_chart,
      name_image_chart : this.name_image_chart,
      size_image_chart : this.size_image_chart,
      type_image_chart : this.type_image_chart,
      json_image_chart : this.json_image_chart,
      skala_anestesi : this.skala_anestesi,
      image_1 : this.image_1,
      image_2 : this.image_2,
      image_3 : this.image_3,

    }
  }

  static convertToNormalDatetime(date: any) {
    const d = new Date(date);
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }
  static createFromJson(json: IUpdateAnestheticStatusRequest) {
    return new UpdateAnestheticStatusRequest(json);
  }
}
