import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { DateTimeInput, TextInput } from "@src/shared/input";
import { useEffect, useState } from "react";
import ToolInspection from "@src/shared/tool-inspection/tool-inspection";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { SubmitButton } from '@src/shared/button';
import PhysicalExamination from './physical-examination';
import FunctionalStatus from './functional-status';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import FallRiskCheck from './fall-risk-check';
import { AppRequest } from '@src/shared/request';
import { UpdateNursingInitialAssessmentRequest } from '../requests';
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import {
  fetchNursingInitialAssessment,
  fetchNursingInitialAssessmentPdf,
  handlePdf,
} from '../stores/nursing-initial-assessment.store';
import { NursingInitialAssessmentService } from '../services';
import { NursingInitialAssessmenttModel } from '../models/nursing-initial-assessment-model';
import {FindPdfRequest, IPdfModel} from '@shared/pdf';
import {PdfNursingInitialAssessmentRequest} from '@modules/outpatient/nursing-initial-assessment/requests/pdf-nursing-initial-assessment.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const NursingInitialAssessment = (props: {data:NursingInitialAssessmenttModel}) => {
  const { data } = props;

  const dispatch = useAppDispatch();
  // const [signaturePerson, setSignaturePerson] = useState(data?.form?.Tanda_Tangan === 'Wali' ? '2' : '1');
  const { nurses } = useAppSelector(state => state.nurse);
  const [processing, setProcessing] = useState<boolean | undefined>(false);
  const { treatment } = useAppSelector(state => state.patient);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const { pdf } = useAppSelector(state => state.nursingInitialAssessment);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchNursingInitialAssessmentPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-jalan_pengkajian-awal-keperawatan_v3' })))
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  const handleNurseInstrumen = (image: SignatureModel) => {
    setValue('signed_nurse_study_in', image.Signature);
    setValue('id_nurse_study_login', image.ID_Karyawan);
  }

  const getResponsibleName = () => {
    if (treatment && data && data.form && data.form.Penanggung_Jawab && data.form.Penanggung_Jawab !== '') {
      if (data.form.Penanggung_Jawab === 'Pasien') {
        return treatment.Pasien.Nama;
      }
      if (data.form.Penanggung_Jawab === 'Wali') {
        return treatment.Wali.Nama;
      }
    } else {
      return '';
    }
  }

  const getResponsibleAddress = () => {
    if (treatment && data && data.form && data.form.Penanggung_Jawab && data.form.Penanggung_Jawab !== '') {
      if (data.form.Penanggung_Jawab === 'Pasien') {
        return treatment.Pasien.Alamat;
      }
      if (data.form.Penanggung_Jawab === 'Wali') {
        return treatment.Wali.Alamat;
      }
    } else {
      return '';
    }
  }

  const getDependenceValue = () => {
    const toolValue: Array<string> = [];
    if (data && data.form && data.form.Ketergantungan_Terhadap) {
      const helpingTools = data.form.Ketergantungan_Terhadap;
      if (helpingTools.Obat_obatan) {
        toolValue.push('1')
      }
      if (helpingTools.Rokok) {
        toolValue.push('2')
      }
      if (helpingTools.Alkohol) {
        toolValue.push('3')
      }
      if (helpingTools.Lain_lain) {
        toolValue.push('4')
      }
    }
    return toolValue;
  }

  const getTypeOfDiseases = () => {
    const toolValue: Array<string> = [];
    if (data && data.form && data.form.Jenis_Penyakit) {
      const helpingTools = data.form.Jenis_Penyakit;
      if (helpingTools.Dm) {
        toolValue.push('1')
      }
      if (helpingTools.Ginjal) {
        toolValue.push('2')
      }
      if (helpingTools.Hati) {
        toolValue.push('3')
      }
      if (helpingTools.Jantung) {
        toolValue.push('4')
      }
      if (helpingTools.Paru) {
        toolValue.push('5')
      }
      if (helpingTools.Stroke) {
        toolValue.push('6')
      }
      if (helpingTools.Kanker) {
        toolValue.push('7')
      }
      if (helpingTools.Penurunan_Imunitas_Geriatri) {
        toolValue.push('8')
      }
      if (helpingTools.Lain_lain) {
        toolValue.push('9')
      }
    }
    return toolValue;
  }

  const { register, handleSubmit, errors, reset, setValue, control } = useForm({
    mode: 'onChange',
    // resolver: yupResolver(UpdateNursingInitialAssessmentRequest.schema()),
    defaultValues: {
      td: data?.form?.Td ?? '',
      bb: data?.form?.Bb ?? '',
      p: data?.form?.P ?? '',
      pulse: data?.form?.Nadi ?? '',
      tb: data?.form?.Tb ?? '',
      temperature: data?.form?.Suhu ?? '',
      awareness: data?.form?.Kesadaran ?? '',
      painful: data?.form?.Nyeri ?? '',
      pain_status: data?.form?.Status_Nyeri ?? '',
      pain_scale: data?.form?.Skala_Nyeri ?? '',
      pain_screening: data?.form?.Skrining_Nyeri ?? '',
      pain_location: data?.form?.Lokasi_Nyeri ?? '',
      pain_duration: data?.form?.Durasi_Nyeri ?? '',
      frequency_pain: data?.form?.Frekwensi_Nyeri ?? '',
      pain_lost: data?.form?.Nyeri_Hilang ?? '',
      pain_missing_other_text: data?.form?.Nyeri_Hilang_Lain_Text ?? '',
      tell_doctor_physical_examination: data?.form?.Beritahu_Dokter_Pemeriksaan_Fisik ?? '',
      notify_doctor_physical_examination_at: (data && data.form && data.form.Beritahu_Dokter_Pemeriksaan_Fisik_Pukul) ? data.form.Beritahu_Dokter_Pemeriksaan_Fisik_Pukul.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      total_score: data?.form?.Total_Skor ?? '',
      result_total_score: data?.form?.Hasil_Total_Skor ?? '',
      result_value: data?.form?.Skor_Risiko_Jatuh ?? '',
      result_text: data?.form?.Keterangan_Risiko_Jatuh ?? '',
      how_to_walk: data?.form?.Cara_Berjalan ?? '',
      holding_support: data?.form?.Memegang_Penopang ?? '',
      tell_doctor_risk_injury: data?.form?.Beritahu_Dokter_Risiko_Cedera ?? '',
      tell_doctor_risk_injury_punch: data?.form?.Beritahu_Dokter_Risiko_Cedera_Waktu ?? '',
      type_operation_experienced: data?.form?.Jenis_Operasi_Dialami ?? '',
      operating_time: data?.form?.Waktu_Operasi ?? '',
      complications: data?.form?.Komplikasi ?? '',
      history_disease_family: data?.form?.Riwayat_Penyakit_Keluarga ?? '',
      have_dependency: data?.form?.Mempunyai_Ketergantungan ?? '',
      dependence_on: getDependenceValue(),
      dependence_on_description: data?.form?.Ketergantungan_Terhadap_Keterangan ?? '',
      dependence_on_explanation: data?.form?.Ketergantungan_Terhadap_Penjelasan ?? '',
      allergy_history: data?.form?.Riwayat_Alergi ?? '',
      history_allergy_description: data?.form?.Riwayat_Alergi_Keterangan ?? '',
      nutrition_down_bb: data?.form?.Nutrisi_Turun_Bb ?? '',
      food_intake: data?.form?.Asupan_Makan ?? '',
      diagnostic_special: data?.form?.Diagnosa_Khusus ?? '',
      types_of_diseases: getTypeOfDiseases(),
      type_disease_description: data?.form?.Jenis_Penyakit_Lain_Keterangan ?? '',
      nutrition_score: data?.form?.Skor_Nutrisi ?? '',
      status_functional: data?.form?.Status_Fungsional ?? '',
      status_functional_description: data?.form?.Status_Fungsional_Keterangan ?? '',
      status_functional_notified_at: data?.form?.Status_Fungsional_Diberitahukan_Pukul ?? '',
      talk: data?.form?.Bicara ?? '',
      talk_text: data?.form?.Bicara_Text ?? '',
      need_translator: data?.form?.Perlu_Penerjemah ?? '',
      need_translator_text: data?.form?.Perlu_Penerjemah_Text ?? '',
      sign_language: data?.form?.Bahasa_Isyarat ?? '',
      barrier_learning: data?.form.Hambatan_Belajar ?? '',
      barriers_learning_text: data?.form?.Hambatan_Belajar_Text ?? '',
      level_of_education: data?.form?.Tingkatan_Pendidikan ?? '',
      level_education_text: data?.form?.Tingkatan_Pendidikan_Text ?? '',
      economic_status: data?.form?.Status_Ekonomi ?? '',
      status_economy_text: data?.form?.Status_Ekonomi_Text ?? '',
      social_status: data?.form?.Status_Sosial ?? '',
      status_psychology: data?.form?.Status_Psikologi ?? '',
      status_psychology_text: data?.form?.Status_Psikologi_Text ?? '',
      mental_state: data?.form?.Status_Mental ?? '',
      status_mental_text: data?.form?.Status_Mental_Text ?? '',
      relationship_patient_family: data?.form?.Hubungan_Pasien_Keluarga ?? '',
      religion: data?.form?.Agama_Id ?? '',
      disturbance_table: data && data.form && data.form.Tabel_Gangguan ? `${data.form.Tabel_Gangguan}` : '',
      table_pain: data && data.form && data.form.Tabel_Nyeri ? `${data.form.Tabel_Nyeri}` : '',
      table_infection: data && data.form && data.form.Tabel_Infeksi ? `${data.form.Tabel_Infeksi}` : '',
      table_fall: data && data.form && data.form.Tabel_Jatuh ? `${data.form.Tabel_Jatuh}` : '',
      tabel_tio: data && data.form && data.form.Tabel_Tio ? `${data.form.Tabel_Tio}` : '',
      table_less_knowledge: data && data.form && data.form.Tabel_Kurang_Pengetahuan ? `${data.form.Tabel_Kurang_Pengetahuan}` : '',
      other_table: data && data.form && data.form.Tabel_Lainnya ? `${data.form.Tabel_Lainnya}` : '',
      table_other_problems: data?.form?.Tabel_Masalah_Lainnya ?? '',
      other_plan_table: data?.form?.Tabel_Rencana_Lainnya ?? '',
      signed_nurse_study_in: data?.form?.TTD_Perawat_Pengkajian_Masuk ?? '',
      id_nurse_study_login: data?.form?.ID_Perawat_Pengkajian_Masuk ?? '',
      face_table: data?.form?.Tabel_Wajah ?? '',
      foot_table: data?.form?.Tabel_Kaki ?? '',
      activity_table: data?.form?.Tabel_Aktifitas ?? '',
      crying_table: data?.form?.Tabel_Menangis ?? '',
      main_complaint: data?.form?.Keluhan_Utama ?? '',
      convenience_table: data?.form?.Tabel_Kenyamanan ?? '',
      person_responsible: data && data.form && data.form.Penanggung_Jawab && data.form.Penanggung_Jawab === 'Wali' ? '2' : '1',
      person_in_charge_name: data && data.form && data.form.Penanggung_Jawab_Nama ? data.form.Penanggung_Jawab_Nama : (data && data.form && data.form.Penanggung_Jawab && data.form.Penanggung_Jawab === 'Wali') ? treatment?.Wali?.Nama : treatment?.Pasien?.Nama,
      person_in_charge_address: data && data.form && data.form.Penanggung_Jawab_Alamat ? data.form.Penanggung_Jawab_Alamat : (data && data.form && data.form.Penanggung_Jawab && data.form.Penanggung_Jawab === 'Wali') ? treatment?.Wali?.Alamat : treatment?.Pasien?.Alamat,
      responsible_relationship: data?.form?.Penanggung_Jawab_Hubungan ?? '',
      tanggal_waktu: (data && data.form && data.form.Tanggal_Waktu) ? data.form.Tanggal_Waktu.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
    },
  })

  const handleProcessing = () => {
    setProcessing(true);
  }

  const handleSubmitForm = (value: any) => {
    if (!treatment) {
      return;
    }
    handleProcessing()
    reset(value);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateNursingInitialAssessmentRequest.createFromJson({...value, ...appRequest});
    dispatch(handlePdf(undefined));
    NursingInitialAssessmentService().update(params)
      .then(() => {
        NursingInitialAssessmentService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            NursingInitialAssessmentService().pdfv3(PdfNursingInitialAssessmentRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
              .then(() => {
                setProcessing(false);
                dispatch(fetchNursingInitialAssessmentPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-jalan_pengkajian-awal-keperawatan_v3' })))
              })
          })
        setProcessing(false);
        dispatch(fetchNursingInitialAssessment(appRequest));
      });
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        {/*yang bertanda tangan dibawah ini sampai nomor 1*/}
        <PhysicalExamination
          data={data}
          {...{ register, errors, setValue }}
        />

        {/* nomor 2 sampai dengan nomor 4 */}
        <FallRiskCheck
          data={data}
          {...{ register, errors, setValue }}
        />

        {/*nomor 5. sampai selesai */}
        <FunctionalStatus
          data={data}
          {...{ register, errors, setValue }}
        />

        <FormGroup className="form-group" row>
          <DateTimeInput
            name='tanggal_waktu'
            label={`Tanggal & Waktu`}
            md={2}
            {...{ register, errors }}
          />
        </FormGroup>
        <Row className="mt-2">
          <Col>
            <Signature
              label="Perawat Instrumen"
              type="picker"
              // additionalLabel={(data && data.form && data.form.Nama_Perawat_Instrumen) ? data.form.Nama_Perawat_Instrumen : ''}
              initialImage={(data && data.form && data.form.TTD_Perawat_Pengkajian_Masuk && data.form.TTD_Perawat_Pengkajian_Masuk !== '') ? data.form.TTD_Perawat_Pengkajian_Masuk : undefined}
              persons={nurses}
              onSigned={(assigner: SignatureModel) => handleNurseInstrumen(assigner)}
            />
            <Input
              type="hidden"
              name="signed_nurse_study_in"
              innerRef={register()}
              invalid={errors.signed_nurse_study_in && true}
            />
            <Input
              type="hidden"
              name="id_nurse_study_login"
              innerRef={register()}
              invalid={errors.id_nurse_study_login && true}
            />
          </Col>
        </Row>
        <FormGroup className="d-flex mb-0 justify-content-center mt-2">
          <SubmitButton
            label="Simpan"
            buttonColor='primary'
            spinnerStyle={{ width: '1rem', height: '1rem' }}
            spinnerColor='light'
            processing={processing}
          />
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
        <FormGroup className="form-group mt-0" row>
          <div className="d-flex justify-content-center align-items-center">
            <Label className="me-1">Terakhir Disimpan: </Label>
            <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
          </div>
        </FormGroup>
      </Form>
    </>
  );
}
export default NursingInitialAssessment;
