import {
  CreatePDFRequest,
  ICreatePDFRequest,
} from "@shared/pdf/requests/create-pdf.request";
import { IAppRequest } from "@src/shared/request";
import citymapping from '@modules/outpatient/proof-of-outpatient-services/const/citymapping';
import { DateTimeConverter } from "@src/shared/datetime-converter";


export interface IPdfAnestheticStatusRequest extends ICreatePDFRequest {
  data: {
  nomor_mr: string;
  'pasien.Nama': string;
  'pasien.Tgl_Lahir': string;
  'pasien.Alamat': string;
  'pasien.Umur': string;
  'pasien.Jenis_Kelamin': string;

  tgl_form : string;
  dpjp_anestesi : string;
  asis_anestesi : string;
  dpjp_bedah : string;
  dx_pra_bedah : string;
  jns_bedah : string;
  dx_pasca_bedah : string;
  ta_1 : string;
  ta_2 : string;
  ta_3 : string;

  tak_1 : string;
  tak_2 : string;
  tak_3 : string;
  tak_4 : string;
  tak_5 : string;
  tak_6 : string;
  tak_7 : string;
  tak_8 : string;
  tak_9 : string;

  t_alat_khusus_lainya : string;
  mon_1 : string;
  text_ekg : string;
  mon_2 : string;
  text_arteri : string;
  mon_3 : string;
  mon_4 : string;
  mon_5 : string;
  mon_6 : string;
  mon_7 : string;
  mon_8 : string;
  text_cvp : string;
  mon_9 : string;
  mon_10 : string;
  mon_11 : string;
  mon_12 : string;
  mon_13 : string;
  monitor_lainya  : string;

  s_fisik_1  : string;
  s_fisik_2  : string;
  s_fisik_3  : string;
  s_fisik_4  : string;
  s_fisik_5  : string;
  s_fisik_6  : string;
  s_fisik_7  : string;

  alergi_ya  : string;
  text_alergi  : string;
  alergi_tidak  : string;
  penyulit_pra_anes : string;

  cek_anes_1  : string;
  cek_anes_2  : string;
  cek_anes_3  : string;
  cek_anes_4  : string;
  cek_anes_5  : string;
  cek_anes_6  : string;
  cek_anes_7  : string;
  jam_pra_induksi  : string;
  kesadaran  : string;
  suhu  : string;
  td  : string;
  o2  : string;
  nadi  : string;
  pra_induksi_lainya  : string;
  rr  : string;
  catatan  : string;
  infus_perifer_1  : string;
  infus_perifer_2  : string;
  infus_perifer_cvc  : string;
  pos_1  : string;
  pos_2  : string;
  pos_3  : string;
  //pos_3_1  : string;
  pos_4  : string;
  pos_4_1  : string;
  pos_4_2  : string;
  pos_5  : string;
  posisi_lainya   : string;

  prem_1  : string;
  prem_2  : string;
  prem_3  : string;

  text_oral  : string;
  text_im  : string;
  text_iv  : string;
  induksi_1  : string;
  text_intravena  : string;
  induksi_2  : string;
  text_inhalasi  : string;
  no_fm  : string;
  no_ett  : string;
  no_lma  : string;
  text_trakh  : string;
  text_bron  : string;
  text_glid  : string;
  text_jalannafas_lainya  : string;
  jenis_ett  : string;
  jenis_lma  : string;
  no_oro  : string;
  ukuran_fiksasi  : string;
  intub_1  : string;
  intub_1_1  : string;
  intub_2  : string;
  intub_2_1  : string;
  intub_2_2  : string;
  intub_2_3  : string;
  intub_3  : string;
  intub_4  : string;
  intub_5  : string;
  text_sulit_intibusai  : string;
  intub_6  : string;
  text_stilet  : string;
  intub_7  : string;
  intub_8  : string;
  intub_9  : string;

  ventilasi_1  : string;
  ventilasi_2  : string;
  ventilasi_3  : string;
  text_tv  : string;
  text_peep  : string;
  text_rr  : string;
  ventilasi_4  : string;

  mon_fisiologis  : string;
  ttd_penata_anes  : string;
  ttd_dr_anes  : string;
  nama_dr_anes  : string;
  nama_penata_anes  : string;

  jam_masuk  : string;
  //serah_terima  : string;
  tv_1  : string;
  td_pulih  : string;
  tv_2  : string;
  nadi_pulih  : string;
  tv_3  : string;
  rr_pulih  : string;
  tv_4  : string;
  tem_pulih  : string;
  sadar_1  : string;
  sadar_2  : string;
  sadar_3  : string;
  nafas_1  : string;
  nafas_2  : string;
  nafas_3  : string;
  vas_pulih  : string;
  penyulit_inta  : string;
  intruksi_khusus  : string;
  jpg_catatan_kamar_pemulihan   : string;
  jam_pulih  : string;
  aktiv  : string;
  sir  : string;
  nafas_d  : string;
  kes_d  : string;
  wrna  : string;
  tot_d  : string;
  skor_vas_d  : string;
  kes_a  : string;
  nafas_a  : string;
  mot  : string;
  tot_a  : string;
  skor_vas_a  : string;
  ke_1  : string;
  ke_2  : string;
  ke_3  : string;
  cttn_khusus_r_pulih   : string;
  ttd_nma_penata_anes   : string;
  nma_penata_anes  : string;
  ttd_nma_dr_anes   : string;
  nma_dr_anes   : string;
  kelola_nyeri   : string;
  penanganan_mual   : string;
  antibiotika   : string;
  obat_lain   : string;
  infus   : string;
  diet_nutrisi   : string;
  pantau_setiap   : string;
  pantau_selama   : string;
  instruksi_pasca_lain  : string;
  ttd_penata_anestesi  : string;
  ttd_dr_anestesi  : string;
  nma_penata_anestesi  : string;
  nma_dr_anestesi  : string;
  mon_fisiologis_1  : string;
  mon_fisiologis_2  : string;
  mon_fisiologis_3  : string;
  nik: string;
  };
}

export class PdfAnestheticStatusRequest extends CreatePDFRequest {
  data: {
  nomor_mr: string;
  'pasien.Nama': string;
  'pasien.Tgl_Lahir': string;
  'pasien.Alamat': string;
  'pasien.Umur': string;
  'pasien.Jenis_Kelamin': string;

  tgl_form : string;
  dpjp_anestesi : string;
  asis_anestesi : string;
  dpjp_bedah : string;
  dx_pra_bedah : string;
  jns_bedah : string;
  dx_pasca_bedah : string;
  ta_1 : string;
  ta_2 : string;
  ta_3 : string;

  tak_1 : string;
  tak_2 : string;
  tak_3 : string;
  tak_4 : string;
  tak_5 : string;
  tak_6 : string;
  tak_7 : string;
  tak_8 : string;
  tak_9 : string;

  t_alat_khusus_lainya : string;
  mon_1 : string;
  text_ekg : string;
  mon_2 : string;
  text_arteri : string;
  mon_3 : string;
  mon_4 : string;
  mon_5 : string;
  mon_6 : string;
  mon_7 : string;
  mon_8 : string;
  text_cvp : string;
  mon_9 : string;
  mon_10 : string;
  mon_11 : string;
  mon_12 : string;
  mon_13 : string;
  monitor_lainya  : string;

  s_fisik_1  : string;
  s_fisik_2  : string;
  s_fisik_3  : string;
  s_fisik_4  : string;
  s_fisik_5  : string;
  s_fisik_6  : string;
  s_fisik_7  : string;

  alergi_ya  : string;
  text_alergi  : string;
  alergi_tidak  : string;
  penyulit_pra_anes : string;

  cek_anes_1  : string;
  cek_anes_2  : string;
  cek_anes_3  : string;
  cek_anes_4  : string;
  cek_anes_5  : string;
  cek_anes_6  : string;
  cek_anes_7  : string;
  jam_pra_induksi  : string;
  kesadaran  : string;
  suhu  : string;
  td  : string;
  o2  : string;
  nadi  : string;
  pra_induksi_lainya  : string;
  rr  : string;
  catatan  : string;
  infus_perifer_1  : string;
  infus_perifer_2  : string;
  infus_perifer_cvc  : string;
  pos_1  : string;
  pos_2  : string;
  pos_3  : string;
  //pos_3_1  : string;
  pos_4  : string;
  pos_4_1  : string;
  pos_4_2  : string;
  pos_5  : string;
  posisi_lainya   : string;
  prem_1  : string;
  prem_2  : string;
  prem_3  : string;
  text_oral  : string;
  text_im  : string;
  text_iv  : string;
  induksi_1  : string;
  text_intravena  : string;
  induksi_2  : string;
  text_inhalasi  : string;
  no_fm  : string;
  no_ett  : string;
  no_lma  : string;
  text_trakh  : string;
  text_bron  : string;
  text_glid  : string;
  text_jalannafas_lainya  : string;
  jenis_ett  : string;
  jenis_lma  : string;
  no_oro  : string;
  ukuran_fiksasi  : string;
  intub_1  : string;
  intub_1_1  : string;
  intub_2  : string;
  intub_2_1  : string;
  intub_2_2  : string;
  intub_2_3  : string;
  intub_3  : string;
  intub_4  : string;
  intub_5  : string;
  text_sulit_intibusai  : string;
  intub_6  : string;
  text_stilet  : string;
  intub_7  : string;
  intub_8  : string;
  intub_9  : string;

  ventilasi_1  : string;
  ventilasi_2  : string;
  ventilasi_3  : string;
  text_tv  : string;
  text_peep  : string;
  text_rr  : string;
  ventilasi_4  : string;

  mon_fisiologis  : string;
  ttd_penata_anes  : string;
  ttd_dr_anes  : string;
  nama_dr_anes  : string;
  nama_penata_anes  : string;

  jam_masuk  : string;
  //serah_terima  : string;
  tv_1  : string;
  td_pulih  : string;
  tv_2  : string;
  nadi_pulih  : string;
  tv_3  : string;
  rr_pulih  : string;
  tv_4  : string;
  tem_pulih  : string;
  sadar_1  : string;
  sadar_2  : string;
  sadar_3  : string;
  nafas_1  : string;
  nafas_2  : string;
  nafas_3  : string;
  vas_pulih  : string;
  penyulit_inta  : string;
  intruksi_khusus  : string;
  jpg_catatan_kamar_pemulihan   : string;
  jam_pulih  : string;
  aktiv  : string;
  sir  : string;
  nafas_d  : string;
  kes_d  : string;
  wrna  : string;
  tot_d  : string;
  skor_vas_d  : string;
  kes_a  : string;
  nafas_a  : string;
  mot  : string;
  tot_a  : string;
  skor_vas_a  : string;
  ke_1  : string;
  ke_2  : string;
  ke_3  : string;
  cttn_khusus_r_pulih   : string;
  ttd_nma_penata_anes   : string;
  nma_penata_anes  : string;
  ttd_nma_dr_anes   : string;
  nma_dr_anes   : string;
  kelola_nyeri   : string;
  penanganan_mual   : string;
  antibiotika   : string;
  obat_lain   : string;
  infus   : string;
  diet_nutrisi   : string;
  pantau_setiap   : string;
  pantau_selama   : string;
  instruksi_pasca_lain  : string;
  ttd_penata_anestesi  : string;
  ttd_dr_anestesi  : string;
  nma_penata_anestesi  : string;
  nma_dr_anestesi  : string;
  mon_fisiologis_1  : string;
  mon_fisiologis_2  : string;
  mon_fisiologis_3  : string;
  nik: string;
  };

  constructor(req: IPdfAnestheticStatusRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfAnestheticStatusRequest) {
    return new PdfAnestheticStatusRequest(json);
  }

  static createPdfRequest(val: any, appReq: IAppRequest): PdfAnestheticStatusRequest {

    const getCity = (companyCode: string) => {
      const selected = citymapping.find((item: any) => item.company_code === companyCode);
      if (selected) {
        return selected.city;
      } else {
        return '';
      }
    }

    const formatTime = (dateNow: any) => {
      const d = new Date(dateNow);
      const dateFormat = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
      return dateFormat;
    }

    const formatDate = (dateNow: any) => {
      const d = new Date(dateNow);
      const dateFormat = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear().toString().padStart(4, '0')}`
      return dateFormat;
    }

    const formatDateIndo = (dateNow: any) => {
      const d = new Date(dateNow);
      const dateFormat = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear().toString().padStart(4, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
      return dateFormat;
    }

    return new PdfAnestheticStatusRequest({
      emr_id: appReq.emr_id,
      form_name: 'ok_status-anestesi',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.pasien?.No_MR ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Alamat': val?.pasien?.Alamat ?? '',
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',

        tgl_form :  formatDate(appReq.tanggal_berobat)  ?? '',
        dpjp_anestesi : val?.data?.ID_DPJP_Anestesi  ?? '',
        asis_anestesi : val?.data?.ID_Asisten_Anestesi  ?? '',
        dpjp_bedah : val?.data?.ID_DPJP_Bedah  ?? '',
        dx_pra_bedah : val?.data?.Diagnosa_Pra_Bedah  ?? '',
        jns_bedah : val?.data?.Jenis_Pembedahan  ?? '',
        dx_pasca_bedah : val?.data?.Diagnosis_Pasca_Bedah  ?? '',
        ta_1 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Teknik_Anestesi  === '1')  ?? '',
        ta_2 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Teknik_Anestesi  === '2')   ?? '',
        ta_3 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Teknik_Anestesi  === '3')   ?? '',

        tak_1 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Teknik_Khusus_Hipotensi  === '1')  ?? '',
        tak_2 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Teknik_Khusus_TCI  === '1')  ?? '',
        tak_3 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Teknik_Khusus_CPB  === '1')  ?? '',
        tak_4 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Teknik_Khusus_Ventilasi  === '1')  ?? '',
        tak_5 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Teknik_Khusus_Bronkoskopi  === '1')  ?? '',
        tak_6 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Teknik_Khusus_Glidescope  === '1')  ?? '',
        tak_7 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Teknik_Khusus_USG  === '1')  ?? '',
        tak_8 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Teknik_Khusus_Stimulator  === '1')  ?? '',
        tak_9 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Teknik_Khusus_Lainnya  === '1')  ?? '',

        t_alat_khusus_lainya : val?.data?.Teknik_Khusus_Lainnya_Teks  ?? '',

        mon_1 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Monitoring_EKG  === '1')  ?? '',
        text_ekg : val?.data?.Monitoring_EKG_Teks  ?? '',
        mon_2 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Monitoring_Arteri  === '1')  ?? '',
        text_arteri : val?.data?.Monitoring_Arteri_Teks  ?? '',
        mon_3 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Monitoring_EtCO2  === '1')  ?? '',
        mon_4 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Monitoring_Stetoskop  === '1')  ?? '',
        mon_5 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Monitoring_NIBP  === '1')  ?? '',
        mon_6 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Monitoring_NGT  === '1')  ?? '',
        mon_7 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Monitoring_BIS  === '1')  ?? '',
        mon_8 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Monitoring_CVP  === '1')  ?? '',
        text_cvp : val?.data?.Monitoring_CVP_Teks  ?? '',
        mon_9 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Monitoring_Cath  === '1')  ?? '',
        mon_10 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Monitoring_SpO2  === '1')  ?? '',
        mon_11 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Monitoring_Katerer  === '1')  ?? '',
        mon_12 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Monitoring_Temp  === '1')  ?? '',
        mon_13 : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Monitoring_Lainnya  === '1')  ?? '',
        monitor_lainya  : val?.data?.Monitoring_Lainnya_Teks  ?? '',

        s_fisik_1  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.ASA   === 'ASA')  ?? '',
        s_fisik_2  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.ASA   === '1')  ?? '',
        s_fisik_3  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.ASA   === '2')  ?? '',
        s_fisik_4  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.ASA   === '3')  ?? '',
        s_fisik_5  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.ASA   === '4')  ?? '',
        s_fisik_6  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.ASA   === '5')  ?? '',
        s_fisik_7  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.ASA   === 'E')  ?? '',

        alergi_ya  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Alergi  === 'YA')  ?? '',
        text_alergi  : val?.data?.Alergi_Keterangan  ?? '',
        alergi_tidak  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Alergi  === 'TIDAK')  ?? '',
        penyulit_pra_anes   : val?.data?.Penyulit_Pra_Anestesi  ?? '',

        cek_anes_1  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Checklist_Inform_Consent === '1')  ?? '',
        cek_anes_2  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Checklist_Obat_Anestesi === '1')  ?? '',
        cek_anes_3  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Checklist_Tatalaksana === '1')  ?? '',
        cek_anes_4  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Checklist_Mesin === '1')  ?? '',
        cek_anes_5  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Checklist_Monitoring === '1')  ?? '',
        cek_anes_6  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Checklist_Obat_Emergensi === '1')  ?? '',
        cek_anes_7  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Checklist_Suction === '1')  ?? '',

        jam_pra_induksi  : val?.data?.Jam_Pra_Induksi  ?? '',
        kesadaran  : val?.data?.Pra_Induksi_Kesadaran  ?? '',
        suhu  : val?.data?.Pra_Induksi_Suhu  ?? '',
        td  : val?.data?.Pra_Induksi_Tekanan_Darah  ?? '',
        o2  : val?.data?.Pra_Induksi_Saturasi  ?? '',
        nadi  : val?.data?.Pra_Induksi_Denyut_Nadi  ?? '',
        pra_induksi_lainya  : val?.data?.Pra_Induksi_Lainnya  ?? '',
        rr  : val?.data?.Pra_Induksi_RR  ?? '',
        catatan  : val?.data?.Catatan  ?? '',

        infus_perifer_1  : val?.data?.Infus_Perifer_1  ?? '',
        infus_perifer_2  : val?.data?.Infus_Perifer_2  ?? '',
        infus_perifer_cvc  : val?.data?.Infus_Perifer_3  ?? '',

        pos_1  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Posisi === 'Telentang')  ?? '',
        pos_2  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Posisi === 'Lithotomi')  ?? '',
        pos_3  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Posisi === 'Prone')  ?? '',
        //pos_3_1  : val?.data?.  ?? '',
        pos_4  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Posisi  === 'Lateral Kiri' || val?.data?.Posisi  === 'Lateral Kanan')  ?? '',
        pos_4_1  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Posisi === 'Lateral Kiri')  ?? '',
        pos_4_2  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Posisi === 'Lateral Kanan')  ?? '',
        pos_5  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Posisi  === 'Lain-lain')  ?? '',
        posisi_lainya : val?.data?.Posisi_Lainnya  ?? '',

        prem_1  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Premedikasi_Oral !== "") ?? '',
        prem_2  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Premedikasi_IM !== "") ?? '',
        prem_3  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Premedikasi_IV !== "")  ?? '',

        text_oral  : val?.data?.Premedikasi_Oral  ?? '',
        text_im  : val?.data?.Premedikasi_IM  ?? '',
        text_iv  : val?.data?.Premedikasi_IV  ?? '',

        induksi_1  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Induksi_Intravena !== "")  ?? '',
        text_intravena  : val?.data?.Induksi_Intravena  ?? '',
        induksi_2  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Induksi_Inhalasi !== "") ?? '',
        text_inhalasi  : val?.data?.Induksi_Inhalasi  ?? '',

        no_fm  : val?.data?.Face_Mask_No  ?? '',
        no_ett  : val?.data?.ETT_No  ?? '',
        no_lma  : val?.data?.LMA_No  ?? '',

        text_trakh  : val?.data?.Trakhesotomi  ?? '',
        text_bron  : val?.data?.Bronkoskopi_Fiber  ?? '',
        text_glid  : val?.data?.Glidescope  ?? '',
        text_jalannafas_lainya  : val?.data?.Tata_Laksana_Lainnya  ?? '',
        jenis_ett  : val?.data?.ETT_Jenis  ?? '',
        jenis_lma  : val?.data?.LMA_Jenis  ?? '',
        no_oro  : val?.data?.Oro_No  ?? '',
        ukuran_fiksasi  : val?.data?.ETT_Fiksasi  ?? '',

        intub_1  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Intubasi_Sesudah_Tidur === '1')  ?? '',
        intub_1_1  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Intubasi_Blind === '1')  ?? '',
        intub_2  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Intubasi_Oral === '1')  ?? '',
        intub_2_1  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Intubasi_Nasal === '1')  ?? '',
        intub_2_2  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Intubasi_Kanan === '1')  ?? '',
        intub_2_3  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Intubasi_Kiri === '1')  ?? '',
        intub_3  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Intubasi_Trakheostomi === '1')  ?? '',
        intub_4  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Intubasi_Sulit_Ventilasi === '1')  ?? '',
        intub_5  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Intubasi_Sulit_Intubasi === '1')  ?? '',
        text_sulit_intibusai  : val?.data?.Intubasi_Sulit_Intubasi_Teks ?? '',
        intub_6  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Intubasi_Dengan_Stilet === '1')  ?? '',
        text_stilet  : val?.data?.Intubasi_Dengan_Stilet_Teks  ?? '',
        intub_7  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Intubasi_Cuff === '1')  ?? '',
        intub_8  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Intubasi_Level_ETT === '1')  ?? '',
        intub_9  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Intubasi_Pack === '1')  ?? '',

        ventilasi_1  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Ventilasi_Spontan === '1')  ?? '',
        ventilasi_2  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Ventilasi_Kendali === '1')  ?? '',
        ventilasi_3  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Ventilasi_Ventilator === '1')  ?? '',

        text_tv  : val?.data?.Ventilasi_Ventilator_TV  ?? '',
        text_peep  : val?.data?.Ventilasi_Ventilator_PEEP  ?? '',
        text_rr  : val?.data?.Ventilasi_Ventilator_RR  ?? '',
        ventilasi_4  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Ventilasi_Lainnya === '1')  ?? '',

        mon_fisiologis: (val?.data?.Url_Image_Chart !== '') ? val?.data?.Url_Image_Chart : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        ttd_penata_anes: (val?.data?.TTD_Penata_Anestesi !== '') ? val?.data?.TTD_Penata_Anestesi : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        ttd_dr_anes: (val?.data?.TTD_Dokter_Anestesi !== '') ? val?.data?.TTD_Dokter_Anestesi : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nama_dr_anes  : val?.data?.Nama_Dokter_Anestesi  ?? '',
        nama_penata_anes  : val?.data?.Nama_Penata_Anestesi  ?? '',

        jam_masuk  : val?.data?.CKP_Jam_Masuk  ?? '',
        //serah_terima  : val?.data?.  ?? '',
        tv_1  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.CKP_Tekanan_Darah !== "")  ?? '',
        td_pulih  : val?.data?.CKP_Tekanan_Darah  ?? '',
        tv_2  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.CKP_Denyut_Nadi !== "")  ?? '',
        nadi_pulih  : val?.data?.CKP_Denyut_Nadi  ?? '',
        tv_3  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.CKP_RR !== "")  ?? '',
        rr_pulih  : val?.data?.CKP_RR  ?? '',
        tv_4  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.CKP_Suhu !== "")  ?? '',
        tem_pulih  : val?.data?.CKP_Suhu  ?? '',
        sadar_1  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.CKP_Kesadaran === "Sadar Betul")  ?? '',
        sadar_2  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.CKP_Kesadaran === "Belum Sadar")  ?? '',
        sadar_3  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.CKP_Kesadaran === "Tidur Dalam")  ?? '',
        nafas_1  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.CKP_Pernafasan === "Spontan")  ?? '',
        nafas_2  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.CKP_Pernafasan === "Dibantu")  ?? '',
        nafas_3  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.CKP_Pernafasan === "VAS")  ?? '',
        vas_pulih  : val?.data?.VAS_Pulih  ?? '',
        penyulit_inta  : val?.data?.CKP_Penyulit_Intra_Operatif  ?? '',
        intruksi_khusus  : val?.data?.CKP_Instruksi_Khusus  ?? '',
        jpg_catatan_kamar_pemulihan   : (val?.data?.Url_Image_Chart !== '') ? val?.data?.Url_Image_Chart : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        jam_pulih  : val?.data?.Jam_Keluar_Pulih  ?? '',
        aktiv  : val?.data?.Aldrette_Aktivitas  ?? '',
        sir  : val?.data?.Aldrette_Sirkulasi  ?? '',
        nafas_d  : val?.data?.Aldrette_Pernafasan  ?? '',
        kes_d  : val?.data?.Aldrette_Kesadaran  ?? '',
        wrna  : val?.data?.Aldrette_Warna_Kulit  ?? '',
        tot_d  : val?.data?.Aldrette_Total  ?? '',
        skor_vas_d  : val?.data?.Aldrette_Skor_VAS  ?? '',
        kes_a  : val?.data?.Steward_Kesadaran  ?? '',
        nafas_a  : val?.data?.Steward_Pernafasan  ?? '',
        mot  : val?.data?.Steward_Motorik  ?? '',
        tot_a  : val?.data?.Steward_Total  ?? '',
        skor_vas_a  : val?.data?.Steward_Skor_VAS  ?? '',
        ke_1  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Pindah_Ke === "Ruang Rawat")  ?? '',
        ke_2  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Pindah_Ke === "Pulang")  ?? '',
        ke_3  : PdfAnestheticStatusRequest.getCheckImage(val?.data?.Pindah_Ke === "Lain-lain")  ?? '',
        cttn_khusus_r_pulih   : val?.data?.Catatan_Khusus_Ruang_Pemulihan  ?? '',
        ttd_nma_penata_anes   : (val?.data?.TTD_Penata_Anestesi !== '') ? val?.data?.TTD_Penata_Anestesi : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nma_penata_anes  : val?.data?.Nama_Penata_Anestesi  ?? '',
        ttd_nma_dr_anes   : (val?.data?.TTD_Dokter_Anestesi !== '') ? val?.data?.TTD_Dokter_Anestesi : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nma_dr_anes   :  val?.data?.Nama_Dokter_Anestesi  ?? '',
        kelola_nyeri   : val?.data?.IPA_Pengelolaan_Nyeri  ?? '',
        penanganan_mual   : val?.data?.IPA_Penanganan_Mual  ?? '',
        antibiotika   : val?.data?.IPA_Antibiotik  ?? '',
        obat_lain   : val?.data?.IPA_Obat  ?? '',
        infus   : val?.data?.IPA_Infus  ?? '',
        diet_nutrisi   : val?.data?.IPA_Diet  ?? '',
        pantau_setiap   : val?.data?.IPA_Tensi_Setiap  ?? '',
        pantau_selama   : val?.data?.IPA_Tensi_Selama  ?? '',
        instruksi_pasca_lain  : val?.data?.IPA_Lainnya  ?? '',
        ttd_penata_anestesi  : (val?.data?.TTD_Penata_Anestesi !== '') ? val?.data?.TTD_Penata_Anestesi : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        ttd_dr_anestesi  : (val?.data?.TTD_Dokter_Anestesi !== '') ? val?.data?.TTD_Dokter_Anestesi : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nma_penata_anestesi  : val?.data?.Nama_Penata_Anestesi  ?? '',
        nma_dr_anestesi  :  val?.data?.Nama_Dokter_Anestesi  ?? '',
        mon_fisiologis_1 : (val?.data?.Image_1 !== '') ? val?.data?.Image_1 : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        mon_fisiologis_2 : (val?.data?.Image_2 !== '') ? val?.data?.Image_2 : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        mon_fisiologis_3 : (val?.data?.Image_3 !== '') ? val?.data?.Image_3 : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nik:  val?.pasien?.NIK ?? '',
      },
    })
  }
}
