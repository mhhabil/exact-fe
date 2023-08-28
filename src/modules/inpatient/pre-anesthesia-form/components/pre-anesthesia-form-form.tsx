import { Button, Col, Form, FormGroup, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { FindPdfRequest, IPdfModel } from '@shared/pdf';
import {
  IUpdatePreAnesthesiaFormRequest,
  UpdatePreAnesthesiaFormRequest,
} from '@modules/inpatient/pre-anesthesia-form/requests/update-pre-anesthesia-form.request';
import preAnesthesiaForm, { fetchPreAnesthesiaForm, fetchPreAnesthesiaFormPdf } from '@modules/inpatient/pre-anesthesia-form/stores/pre-anesthesia-form.store';
import { useEffect, useState } from 'react';
import { AppRequest } from '@shared/request';
import { PdfPreAnesthesiaFormRequest } from '@modules/inpatient/pre-anesthesia-form/requests/pdf-pre-anesthesia-form.request';
import PreAnesthesiaDoctorForm from '@modules/inpatient/pre-anesthesia-form/components/pre-anesthesia-doctor-form';
import { PreAnesthesiaFormModel } from '@modules/inpatient/pre-anesthesia-form/models/pre-anesthesia-form.model';
import PreAnesthesiaFormService from '@modules/inpatient/pre-anesthesia-form/services';
import PreAnesthesiaPatientForm from '@modules/inpatient/pre-anesthesia-form/components/pre-anesthesia-patient-form';
import { SubmitButton } from '@shared/button';
import { handlePdf } from '@modules/inpatient/inpatient-medical-note/stores/inpatient-medical-note.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const PreAnesthesiaFormForm = (props: { data: PreAnesthesiaFormModel }) => {
  const [activeTab, setActiveTab] = useState<string>('1');

  const { data } = props;

  const [processing, setProcessing] = useState(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);

  const { treatment } = useAppSelector(state => state.patient);
  const { pdf } = useAppSelector(state => state.preAnesthesiaForm);

  const toggle = (tab: string) => {
    if (activeTab && activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPreAnesthesiaFormPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pra-anestesi-sedasi' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  const { handleSubmit, register, errors, setValue } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: true,
    resolver: yupResolver(UpdatePreAnesthesiaFormRequest.schema()),
    defaultValues: {
      merokok_radio: data?.form?.Merokok_Radio ?? '',
      merokok_teks: data?.form?.Merokok_Teks ?? '',
      alkohol_radio: data?.form?.Alkohol_Radio ?? '',
      alkohol_teks: data?.form?.Alkohol_Teks ?? '',
      kopi_radio: data?.form?.Kopi_Radio ?? '',
      kopi_teks: data?.form?.Kopi_Teks ?? '',
      olahraga_radio: data?.form?.Olahraga_Radio ?? '',
      olahraga_teks: data?.form?.Olahraga_Teks ?? '',
      obat_resep: data?.form?.Obat_Resep ?? '',
      aspirin_radio: data?.form?.Aspirin_Radio ?? '',
      aspirin_teks: data?.form?.Aspirin_Teks ?? '',
      anti_sakit_radio: data?.form?.Anti_Sakit_Radio ?? '',
      anti_sakit_teks: data?.form?.Anti_Sakit_Teks ?? '',
      obat_bebas: data?.form?.Obat_Bebas ?? '',
      alergi_obat: data?.form?.Alergi_Obat ?? '',
      alergi_makanan: data?.form?.Alergi_Makanan ?? '',
      keluarga_pendarahan_radio: data?.form?.Keluarga_Pendarahan_Radio ?? '',
      keluarga_pembekuan_darah_radio: data?.form?.Keluarga_Pembekuan_Darah_Radio ?? '',
      keluarga_pembiusan_radio: data?.form?.Keluarga_Pembiusan_Radio ?? '',
      keluarga_demam_radio: data?.form?.Keluarga_Demam_Radio ?? '',
      keluarga_diabetes_radio: data?.form?.Keluarga_Diabetes_Radio ?? '',
      keluarga_jantung_radio: data?.form?.Keluarga_Jantung_Radio ?? '',
      keluarga_irama_jantung_radio: data?.form?.Keluarga_Irama_Jantung_Radio ?? '',
      keluarga_hipertensi_radio: data?.form?.Keluarga_Hipertensi_Radio ?? '',
      keluarga_tuberkulosis_radio: data?.form?.Keluarga_Tuberkulosis_Radio ?? '',
      keluarga_lainnya_radio: data?.form?.Keluarga_Lainnya_Radio ?? '',
      keluarga_teks: data?.form?.Keluarga_Teks ?? '',
      pasien_pendarahan_radio: data?.form?.Pasien_Pendarahan_Radio ?? '',
      pasien_pembekuan_darah_radio: data?.form?.Pasien_Pembekuan_Darah_Radio ?? '',
      pasien_maag_radio: data?.form?.Pasien_Maag_Radio ?? '',
      pasien_anemia_radio: data?.form?.Pasien_Anemia_Radio ?? '',
      pasien_jantung_radio: data?.form?.Pasien_Jantung_Radio ?? '',
      pasien_asthma_radio: data?.form?.Pasien_Asthma_Radio ?? '',
      pasien_diabetes_radio: data?.form?.Pasien_Diabetes_Radio ?? '',
      pasien_pingsan_radio: data?.form?.Pasien_Pingsan_Radio ?? '',
      pasien_mengorok_radio: data?.form?.Pasien_Mengorok_Radio ?? '',
      pasien_hepatitis_radio: data?.form?.Pasien_Hepatitis_Radio ?? '',
      pasien_hipertensi_radio: data?.form?.Pasien_Hipertensi_Radio ?? '',
      pasien_lainnya_radio: data?.form?.Pasien_Lainnya_Radio ?? '',
      pasien_kejang_radio: data?.form?.Pasien_Kejang_Radio ?? '',
      pasien_bawaan_radio: data?.form?.Pasien_Bawaan_Radio ?? '',
      pasien_teks: data?.form?.Pasien_Teks ?? '',
      pasien_transfusi: data?.form?.Pasien_Transfusi ?? '',
      pasien_transfusi_teks: data?.form?.Pasien_Transfusi_Teks ?? '',
      pasien_diagnosis_hiv: data?.form?.Pasien_Diagnosis_HIV ?? '',
      pasien_diagnosis_hiv_teks: data?.form?.Pasien_Diagnosis_HIV_Teks ?? '',
      pasien_diagnosis_hiv_hasil: data?.form?.Pasien_Diagnosis_HIV_Hasil ?? '',
      pasien_lensa_kontak: data?.form?.Pasien_Lensa_Kontak ?? '',
      pasien_kacamata: data?.form?.Pasien_Kacamata ?? '',
      pasien_alat_bantu_dengar: data?.form?.Pasien_Alat_Bantu_Dengar ?? '',
      pasien_gigi_palsu: data?.form?.Pasien_Gigi_Palsu ?? '',
      pasien_pakai_lainnya: data?.form?.Pasien_Pakai_Lainnya ?? '',
      pasien_pakai_lainnya_teks: data?.form?.Pasien_Pakai_Lainnya_Teks ?? '',
      riwayat_operasi: data?.form?.Riwayat_Operasi ?? '',
      anestesi_lokal: data?.form?.Anestesi_Lokal ?? '',
      anestesi_regional: data?.form?.Anestesi_Regional ?? '',
      anestesi_umum: data?.form?.Anestesi_Umum ?? '',
      sistem_gigi_radio: data?.form?.Sistem_Gigi_Radio ?? '',
      sistem_mobilisasi_leher_radio: data?.form?.Sistem_Mobilisasi_Leher_Radio ?? '',
      sistem_leher_pendek_radio: data?.form?.Sistem_Leher_Pendek_Radio ?? '',
      sistem_batuk_radio: data?.form?.Sistem_Batuk_Radio ?? '',
      sistem_sesak_napas_radio: data?.form?.Sistem_Sesak_Napas_Radio ?? '',
      sistem_ispa_radio: data?.form?.Sistem_ISPA_Radio ?? '',
      sistem_dada_radio: data?.form?.Sistem_Dada_Radio ?? '',
      sistem_denyut_jantung_radio: data?.form?.Sistem_Denyut_Jantung_Radio ?? '',
      sistem_muntah_radio: data?.form?.Sistem_Muntah_Radio ?? '',
      sistem_pingsan_radio: data?.form?.Sistem_Pingsan_Radio ?? '',
      sistem_stroke_radio: data?.form?.Sistem_Stroke_Radio ?? '',
      sistem_kejang_radio: data?.form?.Sistem_Kejang_Radio ?? '',
      sistem_hamil_radio: data?.form?.Sistem_Hamil_Radio ?? '',
      sistem_tulang_belakang_radio: data?.form?.Sistem_Tulang_Belakang_Radio ?? '',
      sistem_obesitas_radio: data?.form?.Sistem_Obesitas_Radio ?? '',
      sistem_teks: data?.form?.Sistem_Teks ?? '',
      berat_badan: data?.form?.Berat_Badan ?? '',
      tinggi_badan: data?.form?.Tinggi_Badan ?? '',
      tekanan_darah: data?.form?.Tekanan_Darah ?? data?.asesmen?.Vital_Tekanan_Darah ?? data?.ews?.Td ?? '',
      nadi: data?.form?.Nadi ?? data?.asesmen?.Vital_Denyut_Nadi ?? data?.ews?.Nadi ?? '',
      suhu: data?.form?.Suhu ?? data?.asesmen?.Vital_Suhu ?? data?.ews?.Suhu_Tubuh ?? '',
      kajian_teks_mallampati: data?.form?.Kajian_Teks_Mallampati ?? '',
      kajian_teks_gigi_palsu: data?.form?.Kajian_Teks_Gigi_Palsu ?? '',
      kajian_teks_jantung: data?.form?.Kajian_Teks_Jantung ?? '',
      kajian_teks_paru: data?.form?.Kajian_Teks_Paru ?? '',
      kajian_teks_abdomen: data?.form?.Kajian_Teks_Abdomen ?? '',
      kajian_teks_tulang_belakang: data?.form?.Kajian_Teks_Tulang_Belakang ?? '',
      kajian_teks_ekstremitas: data?.form?.Kajian_Teks_Ekstremitas ?? '',
      kajian_teks_neurologi: data?.form?.Kajian_Teks_Neurologi ?? '',
      kajian_teks_keterangan: data?.form?.Kajian_Teks_Keterangan ?? '',
      laboratorium_hb_ht: data?.form?.Laboratorium_Hb_Ht ?? '',
      laboratorium_pt: data?.form?.Laboratorium_Pt ?? '',
      laboratorium_glukosa: data?.form?.Laboratorium_Glukosa ?? '',
      laboratorium_kehamilan: data?.form?.Laboratorium_Kehamilan ?? '',
      laboratorium_kalium: data?.form?.Laboratorium_Kalium ?? '',
      laboratorium_ureum: data?.form?.Laboratorium_Ureum ?? '',
      laboratorium_leukosit: data?.form?.Laboratorium_Leukosit ?? '',
      laboratorium_trombosit: data?.form?.Laboratorium_Trombosit ?? '',
      laboratorium_rontgen: data?.form?.Laboratorium_Rontgen ?? '',
      laboratorium_ekg: data?.form?.Laboratorium_EKG ?? '',
      laboratorium_na_cl: data?.form?.Laboratorium_Na_Cl ?? '',
      laboratorium_kreatinin: data?.form?.Laboratorium_Kreatinin ?? '',
      laboratorium_teks: data?.form?.Laboratorium_Teks ?? '',
      diagnosis_icd_x: data?.form?.Diagnosis_ICD_X ?? '',
      asa_1: data?.form?.ASA_1 ?? '',
      asa_2: data?.form?.ASA_2 ?? '',
      asa_3: data?.form?.ASA_3 ?? '',
      asa_4: data?.form?.ASA_4 ?? '',
      penyulit_lain_radio: data?.form?.Penyulit_Lain_Radio ?? '',
      penyulit_lain_teks: data?.form?.Penyulit_Lain_Teks ?? '',
      catatan_tindak_lanjut: data?.form?.Catatan_Tindak_Lanjut ?? '',
      perencanaan_anestesi_sedasi: data?.form?.Perencanaan_Anestesi_Sedasi ?? '',
      perencanaan_anestesi_sedasi_teks: data?.form?.Perencanaan_Anestesi_Sedasi_Teks ?? '',
      perencanaan_anestesi_ga: data?.form?.Perencanaan_Anestesi_GA ?? '',
      perencanaan_anestesi_ga_teks: data?.form?.Perencanaan_Anestesi_GA_Teks ?? '',
      perencanaan_anestesi_lainnya: data?.form?.Perencanaan_Anestesi_Lainnya ?? '',
      perencanaan_anestesi_lainnya_teks: data?.form?.Perencanaan_Anestesi_Lainnya_Teks ?? '',
      perencanaan_khusus_tidak_ada: data?.form?.Perencanaan_Khusus_Tidak_Ada ?? '',
      perencanaan_khusus_hipotensi: data?.form?.Perencanaan_Khusus_Hipotensi ?? '',
      perencanaan_khusus_ventilasi: data?.form?.Perencanaan_Khusus_Ventilasi ?? '',
      perencanaan_khusus_tci: data?.form?.Perencanaan_Khusus_TCI ?? '',
      perencanaan_khusus_lainnya: data?.form?.Perencanaan_Khusus_Lainnya ?? '',
      perencanaan_khusus_lainnya_teks: data?.form?.Perencanaan_Khusus_Lainnya_Teks ?? '',
      perencanaan_monitoring_ekg_lead: data?.form?.Perencanaan_Monitoring_EKG_Lead ?? '',
      perencanaan_monitoring_ekg_lead_teks: data?.form?.Perencanaan_Monitoring_EKG_Lead_Teks ?? '',
      perencanaan_monitoring_cvp: data?.form?.Perencanaan_Monitoring_CVP ?? '',
      perencanaan_monitoring_cvp_teks: data?.form?.Perencanaan_Monitoring_CVP_Teks ?? '',
      perencanaan_monitoring_arteri_line: data?.form?.Perencanaan_Monitoring_Arteri_Line ?? '',
      perencanaan_monitoring_arteri_line_teks: data?.form?.Perencanaan_Monitoring_Arteri_Line_Teks ?? '',
      perencanaan_monitoring_spo2: data?.form?.Perencanaan_Monitoring_SPO2 ?? '',
      perencanaan_monitoring_et_co2: data?.form?.Perencanaan_Monitoring_ET_CO2 ?? '',
      perencanaan_monitoring_nibp: data?.form?.Perencanaan_Monitoring_NIBP ?? '',
      perencanaan_monitoring_bis: data?.form?.Perencanaan_Monitoring_BIS ?? '',
      perencanaan_monitoring_temp: data?.form?.Perencanaan_Monitoring_Temp ?? '',
      perencanaan_monitoring_lainnya: data?.form?.Perencanaan_Monitoring_Lainnya ?? '',
      perencanaan_monitoring_lainnya_teks: data?.form?.Perencanaan_Monitoring_Lainnya_Teks ?? '',
      perencanaan_alat_khusus_bronchoscopy: data?.form?.Perencanaan_Alat_Khusus_Bronchoscopy ?? '',
      perencanaan_alat_khusus_glidescope: data?.form?.Perencanaan_Alat_Khusus_Glidescope ?? '',
      perencanaan_alat_khusus_usg: data?.form?.Perencanaan_Alat_Khusus_USG ?? '',
      perencanaan_alat_khusus_lainnya: data?.form?.Perencanaan_Alat_Khusus_Lainnya ?? '',
      perencanaan_alat_khusus_lainnya_teks: data?.form?.Perencanaan_Alat_Khusus_Lainnya_Teks ?? '',
      perencanaan_perawatan_rawat_inap: data?.form?.Perencanaan_Perawatan_Rawat_Inap ?? '',
      perencanaan_perawatan_rawat_jalan: data?.form?.Perencanaan_Perawatan_Rawat_Jalan ?? '',
      perencanaan_perawatan_lainnya: data?.form?.Perencanaan_Perawatan_Lainnya ?? '',
      perencanaan_perawatan_lainnya_teks: data?.form?.Perencanaan_Perawatan_Lainnya_Teks ?? '',
      perencanaan_persiapan_puasa: data?.form?.Perencanaan_Persiapan_Puasa ?? '',
      perencanaan_persiapan_puasa_waktu: data?.form?.Perencanaan_Persiapan_Puasa_Waktu ?? '',
      perencanaan_persiapan_pre_medikasi: data?.form?.Perencanaan_Persiapan_Pre_Medikasi ?? '',
      perencanaan_persiapan_pre_medikasi_waktu: data?.form?.Perencanaan_Persiapan_Pre_Medikasi_Waktu ?? '',
      perencanaan_persiapan_transportasi_kamar_bedah: data?.form?.Perencanaan_Persiapan_Transportasi_Kamar_Bedah ?? '',
      perencanaan_persiapan_transportasi_kamar_bedah_waktu: data?.form?.Perencanaan_Persiapan_Transportasi_Kamar_Bedah_Waktu ?? '',
      perencanaan_persiapan_rencana_operasi: data?.form?.Perencanaan_Persiapan_Rencana_Operasi ?? '',
      perencanaan_persiapan_rencana_operasi_waktu: data?.form?.Perencanaan_Persiapan_Rencana_Operasi_Waktu ?? '',
      tanda_tangan_pasien: data?.form?.Tanda_Tangan_Pasien ?? '',
      tanda_tangan_dokter: data?.form?.Tanda_Tangan_Dokter ?? '',
      id_ttd_dokter: data?.form?.ID_TTD_Dokter ?? '',
      catatan_persiapan_text: data?.form?.Catatan_Persiapan_Text ?? '',
    },
  });

  const handleSubmitForm = (value: IUpdatePreAnesthesiaFormRequest) => {
    if (!treatment) {
      return;
    }
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdatePreAnesthesiaFormRequest.createFromJson({
      ...value,
      ...appRequest,
    });
    setProcessing(true);
    dispatch(handlePdf(undefined));
    PreAnesthesiaFormService().update(params)
      .then(() => {
        PreAnesthesiaFormService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            PreAnesthesiaFormService().pdfv3(PdfPreAnesthesiaFormRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
              .then(() => {
                setProcessing(false);
                dispatch(fetchPreAnesthesiaFormPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pra-anestesi-sedasi' })))
              });
          });
        setProcessing(false);
        dispatch(fetchPreAnesthesiaForm(appRequest));
      });
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <Nav tabs>
          <NavItem>
            <NavLink className={(activeTab === '1') ? 'active' : ''} onClick={() => toggle('1')}>
              Pengkajian Pasien
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={(activeTab === '2') ? 'active' : ''} onClick={() => toggle('2')}>
              Pengkajian Dokter
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId='1'>
            <PreAnesthesiaPatientForm register={register} errors={errors} setValue={setValue} data={data} />
          </TabPane>
          <TabPane tabId='2'>
            <PreAnesthesiaDoctorForm register={register} errors={errors} setValue={setValue} data={data} />
          </TabPane>
        </TabContent>
        <Row>
          <Col>
            <FormGroup className="d-flex mb-0 justify-content-center">
              <SubmitButton
                label="Simpan"
                buttonColor='primary'
                spinnerStyle={{ width: '1rem', height: '1rem' }}
                spinnerColor='light'
                processing={processing} />
              {
                pdfData && Array.isArray(pdfData) && pdfData.length > 0 && (
                  <a color='success' href={`${pdfData[0].URL}`} target="_blank" rel="noreferrer">
                    <Button className='me-1' color='success' type='button'>
                      Cetak
                    </Button>
                  </a>
                )
              }
              {
                (!pdfData || (pdfData && Array.isArray(pdfData) && pdfData.length === 0)) && (
                  <Button className='me-1' color='success' type='button' disabled>
                    Cetak
                  </Button>
                )
              }
            </FormGroup>
          </Col>
        </Row>
        <FormGroup className='form-group mt-0' row>
          <div className='d-flex justify-content-center align-items-center'>
            <Label className='me-1'>Terakhir Disimpan:</Label>
            <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
          </div>
        </FormGroup>
      </Form>
    </>
  )
}

export default PreAnesthesiaFormForm;
