import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { DateTimeInput, TextInput } from '@shared/input';
import { FindPdfRequest, IPdfModel } from '@shared/pdf';
import {
  IUpdateInpatientMedicalNoteRequest,
  UpdateInpatientMedicalNoteRequest,
} from '@modules/inpatient/inpatient-medical-note/requests/update-inpatient-medical-note.request';
import {
  fetchInpatientMedicalNote,
  fetchInpatientMedicalNotePdf,
  handlePdf,
} from '@modules/inpatient/inpatient-medical-note/stores/inpatient-medical-note.store';
import { useEffect, useState } from 'react';
import { AppRequest } from '@shared/request';
import { ArrayPrescription } from "@src/modules/outpatient/doctor-preliminary-study/requests/update-doctor-preliminary-study.request";
import { DateTimeConverter } from '@src/shared/datetime-converter';
import EyesAssessment from './eyes-assessment';
import GeneralAssessment from './general-assessment';
import ImageEditors from './image-editors';
import { InpatientMedicalNote } from '@modules/inpatient/inpatient-medical-note/models/inpatient-medical-note.model';
import InpatientMedicalNoteService  from '@modules/inpatient/inpatient-medical-note/services';
import {PdfInpatientMedicalNoteRequest} from '@modules/inpatient/inpatient-medical-note/requests/pdf-inpatient-medical-note.request';
import PediatricForm from '@src/modules/outpatient/doctor-preliminary-study/components/pediatric-form';
import PrescriptionForm from './prescription-form';
import { Signature } from '@shared/signature/components';
import { SignatureModel } from '@shared/signature/models/signature.model';
import { SubmitButton } from '@shared/button';
import UploadImages from './upload-images';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

const InitialMedicalNoteForm = (props: { data: InpatientMedicalNote}) => {
  const { data } = props;
  const { doctors } = useAppSelector(state => state.doctor);

  const [processing, setProcessing] = useState(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);

  const { treatment } = useAppSelector(state => state.patient);
  const { pdf } = useAppSelector(state => state.inpatientMedicalNote);

  const [doctorFill, setDoctorFill] = useState<boolean>(!!(data.form && data.form.No_Berobat && data.form.No_Berobat !== ''))

  const dispatch = useAppDispatch();

  const handleDoctorSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue('id-dokter', image.ID_Karyawan);
      setValue('ttd-dokter', image.Signature);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('id-dokter', image.ID_Karyawan);
      setValue('ttd-dokter', image.Signature);
    }
  }


  useEffect(() => {
    if (treatment) {
      dispatch(fetchInpatientMedicalNotePdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_catatan-medis-awal' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  const getKesimpulan = () => {
    if (data?.inform_consent?.Diagnosis === 'custom') {
      return data?.inform_consent?.Diagnosis_Custom;
    } else  {
      return data?.inform_consent?.Diagnosis
    }
  }

  const { handleSubmit, register, errors, setValue, getValues, control} = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: true,
    resolver: yupResolver(UpdateInpatientMedicalNoteRequest.schema()),
    defaultValues: {
      keluhan_utama: data?.form?.Keluhan_Utama,
      anamnesa: data?.form?.Anamnesa,
      riwayat_penyakit_terdahulu: data?.form?.Riwayat_Penyakit_Terdahulu,
      riwayat_pemakaian_obat: data?.form?.Riwayat_Pemakaian_Obat,
      riwayat_penyakit_keluarga: data?.form?.Riwayat_Penyakit_Keluarga,
      riwayat_pekerjaan: data?.form?.Riwayat_Pekerjaan,
      pekerjaan_zat_berbahaya: data?.form?.Pekerjaan_Zat_Berbahaya,
      pekerjaan_zat_berbahaya_keterangan: data?.form?.Pekerjaan_Zat_Berbahaya_Keterangan,
      riwayat_alergi: data?.form?.Riwayat_Alergi,
      kesadaran: data?.form?.Kesadaran,
      pernafasan: data?.form?.Pernafasan ?? data?.asesmen?.Vital_Respiratory_Rate ?? data?.ews?.Rr ?? '',
      tekanan_darah: data?.form?.Tekanan_Darah ?? data?.asesmen?.Vital_Tekanan_Darah ?? data?.ews?.Td ?? '',
      skala_nyeri: data?.form?.Skala_Nyeri,
      nadi: data?.form?.Nadi ?? data?.asesmen?.Vital_Denyut_Nadi ?? data?.ews?.Nadi ?? '',
      berat_badan: data?.form?.Berat_Badan,
      suhu: data?.form?.Suhu ?? data?.asesmen?.Vital_Suhu ?? data?.ews?.Suhu_Tubuh ?? '',
      tinggi_badan: data?.form?.Tinggi_Badan,
      keadaan_umum: data?.form?.Keadaan_Umum,
      keadaan_gizi: data?.form?.Keadaan_Gizi,
      oedem: data?.form?.Oedem,
      ikterus: data?.form?.Ikterus,
      cyanosis: data?.form?.Cyanosis,
      pengkajian_kepala: data?.form?.Pengkajian_Kepala,
      pengkajian_kepala_keterangan: data?.form?.Pengkajian_Kepala_Keterangan,
      pengkajian_mata: data?.form?.Pengkajian_Mata,
      pengkajian_mata_keterangan: data?.form?.Pengkajian_Mata_Keterangan,
      pengkajian_tht: data?.form?.Pengkajian_Tht,
      pengkajian_tht_keterangan: data?.form?.Pengkajian_Tht_Keterangan,
      pengkajian_oedem: data?.form?.Pengkajian_Oedem,
      pengkajian_oedem_keterangan: data?.form?.Pengkajian_Oedem_Keterangan,
      pengkajian_mulut: data?.form?.Pengkajian_Mulut,
      pengkajian_mulut_keterangan: data?.form?.Pengkajian_Mulut_Keterangan,
      pengkajian_leher: data?.form?.Pengkajian_Leher,
      pengkajian_leher_keterangan: data?.form?.Pengkajian_Leher_Keterangan,
      pengkajian_jantung: data?.form?.Pengkajian_Jantung,
      pengkajian_jantung_keterangan: data?.form?.Pengkajian_Jantung_Keterangan,
      pengkajian_paru: data?.form?.Pengkajian_Paru,
      pengkajian_paru_keterangan: data?.form?.Pengkajian_Paru_Keterangan,
      pengkajian_dada: data?.form?.Pengkajian_Dada,
      pengkajian_dada_keterangan: data?.form?.Pengkajian_Dada_Keterangan,
      pengkajian_perut: data?.form?.Pengkajian_Perut,
      pengkajian_perut_keterangan: data?.form?.Pengkajian_Perut_Keterangan,
      pengkajian_urogenital: data?.form?.Pengkajian_Urogenital,
      pengkajian_urogenital_keterangan: data?.form?.Pengkajian_Urogenital_Keterangan,
      pengkajian_anggota_gerak: data?.form?.Pengkajian_Anggota_Gerak,
      pengkajian_anggota_gerak_keterangan: data?.form?.Pengkajian_Anggota_Gerak_Keterangan,
      pengkajian_status_neurologis: data?.form?.Pengkajian_Status_Neurologis,
      pengkajian_status_neurologis_keterangan: data?.form?.Pengkajian_Status_Neurologis_Keterangan,
      pengkajian_muskulos_keletal: data?.form?.Pengkajian_Muskulos_Keletal,
      pengkajian_muskulos_keletal_keterangan: data?.form?.Pengkajian_Muskulos_Keletal_Keterangan,
      pengkajian_palpebra_superior: data?.form?.Pengkajian_Palpebra_Superior,
      pengkajian_palpebra_superior_keterangan: data?.form?.Pengkajian_Palpebra_Superior_Keterangan,
      pengkajian_palpebra_inferior: data?.form?.Pengkajian_Palpebra_Inferior,
      pengkajian_palpebra_inferior_keterangan: data?.form?.Pengkajian_Palpebra_Inferior_Keterangan,
      pengkajian_conj_tarsal_superior: data?.form?.Pengkajian_Conj_Tarsal_Superior,
      pengkajian_conj_tarsal_superior_keterangan: data?.form?.Pengkajian_Conj_Tarsal_Superior_Keterangan,
      pengkajian_conj_tarsal_inferior: data?.form?.Pengkajian_Conj_Tarsal_Inferior,
      pengkajian_conj_tarsal_inferior_keterangan: data?.form?.Pengkajian_Conj_Tarsal_Inferior_Keterangan,
      pengkajian_conj_bulbi: data?.form?.Pengkajian_Conj_Bulbi,
      pengkajian_conj_bulbi_keterangan: data?.form?.Pengkajian_Conj_Bulbi_Keterangan,
      pengkajian_posisi: data?.form?.Pengkajian_Posisi,
      pengkajian_posisi_keterangan: data?.form?.Pengkajian_Posisi_Keterangan,
      pengkajian_pergerakan: data?.form?.Pengkajian_Pergerakan,
      pengkajian_pergerakan_keterangan: data?.form?.Pengkajian_Pergerakan_Keterangan,
      pengkajian_funduscopy: data?.form?.Pengkajian_Funduscopy,
      pengkajian_funduscopy_keterangan: data?.form?.Pengkajian_Funduscopy_Keterangan,
      pengkajian_canthal_medial: data?.form?.Pengkajian_Canthal_Medial,
      pengkajian_canthal_medial_keterangan: data?.form?.Pengkajian_Canthal_Medial_Keterangan,
      pengkajian_canthal_lateral: data?.form?.Pengkajian_Canthal_Lateral,
      pengkajian_canthal_lateral_keterangan: data?.form?.Pengkajian_Canthal_Lateral_Keterangan,
      pengkajian_sclera: data?.form?.Pengkajian_Sclera,
      pengkajian_sclera_keterangan: data?.form?.Pengkajian_Sclera_Keterangan,
      data_objektif_lain: data?.form?.Data_Objektif_Lain,
      pengkajian_cornea: data?.form?.Pengkajian_Cornea,
      pengkajian_cornea_keterangan: data?.form?.Pengkajian_Cornea_Keterangan,
      pengkajian_coa: data?.form?.Pengkajian_Coa,
      pengkajian_coa_keterangan: data?.form?.Pengkajian_Coa_Keterangan,
      pengkajian_pupil: data?.form?.Pengkajian_Pupil,
      pengkajian_pupil_keterangan: data?.form?.Pengkajian_Pupil_Keterangan,
      pengkajian_iris: data?.form?.Pengkajian_Iris,
      pengkajian_iris_keterangan: data?.form?.Pengkajian_Iris_Keterangan,
      pengkajian_vitreous: data?.form?.Pengkajian_Vitreous,
      pengkajian_vitreous_keterangan: data?.form?.Pengkajian_Vitreous_Keterangan,
      pengkajian_lensa: data?.form?.Pengkajian_Lensa,
      pengkajian_lensa_keterangan: data?.form?.Pengkajian_Lensa_Keterangan,
      pengkajian_retina: data?.form?.Pengkajian_Retina,
      pengkajian_retina_keterangan: data?.form?.Pengkajian_Retina_Keterangan,
      pemeriksaan_penunjang: data?.form?.Pemeriksaan_Penunjang,
      diagnosa: data?.form?.Diagnosa || getKesimpulan(),
      rencana_pengobatan: data?.form?.Rencana_Pengobatan,
      gambar_mata_od: data?.form?.Gambar_Mata_OD,
      gambar_mata_os: data?.form?.Gambar_Mata_OS,
      gambar_retina_od: data?.form?.Gambar_Retina_OD,
      gambar_retina_os: data?.form?.Gambar_Retina_OS,
      submit_retina: data?.form?.Submit_Retina,
      pediatric: {
        Hes_OD_Hes: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Hes_OD_Hes) ? data.form.Pediatrik.Hes_OD_Hes : '',
        Hes_OS_Hes: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Hes_OS_Hes) ? data.form.Pediatrik.Hes_OS_Hes : '',
        Okn_OD_Okn: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Okn_OD_Okn) ? data.form.Pediatrik.Okn_OD_Okn : '',
        Okn_OS_Okn: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Okn_OS_Okn) ? data.form.Pediatrik.Okn_OS_Okn : '',
        Raf_OD_Raf: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Raf_OD_Raf) ? data.form.Pediatrik.Raf_OD_Raf : '',
        Raf_OS_Raf: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Raf_OS_Raf) ? data.form.Pediatrik.Raf_OS_Raf : '',
        Tac_OD_At_38: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Tac_OD_At_38) ? data.form.Pediatrik.Tac_OD_At_38 : '',
        Tac_OD_At_55: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Tac_OD_At_55) ? data.form.Pediatrik.Tac_OD_At_55 : '',
        Tac_OD_At_84: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Tac_OD_At_84) ? data.form.Pediatrik.Tac_OD_At_84 : '',
        Tac_OS_At_38: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Tac_OS_At_38) ? data.form.Pediatrik.Tac_OS_At_38 : '',
        Tac_OS_At_55: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Tac_OS_At_55) ? data.form.Pediatrik.Tac_OS_At_55 : '',
        Tac_OS_At_84: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Tac_OS_At_84) ? data.form.Pediatrik.Tac_OS_At_84 : '',
        Cover_OD_Cover_1: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OD_Cover_1) ? data.form.Pediatrik.Cover_OD_Cover_1 : '0',
        Cover_OD_Cover_2: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OD_Cover_2) ? data.form.Pediatrik.Cover_OD_Cover_2 : '0',
        Cover_OD_Cover_3: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OD_Cover_3) ? data.form.Pediatrik.Cover_OD_Cover_3 : '0',
        Cover_OD_Cover_4: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OD_Cover_4) ? data.form.Pediatrik.Cover_OD_Cover_4 : '0',
        Cover_OD_Cover_5: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OD_Cover_5) ? data.form.Pediatrik.Cover_OD_Cover_5 : '0',
        Cover_OD_Cover_6: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OD_Cover_6) ? data.form.Pediatrik.Cover_OD_Cover_6 : '0',
        Cover_OD_Cover_Text_1: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OD_Cover_Text_1) ? data.form.Pediatrik.Cover_OD_Cover_Text_1 : '',
        Cover_OD_Cover_Text_2: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OD_Cover_Text_2) ? data.form.Pediatrik.Cover_OD_Cover_Text_2 : '',
        Cover_OD_Cover_Text_3: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OD_Cover_Text_3) ? data.form.Pediatrik.Cover_OD_Cover_Text_3 : '',
        Cover_OD_Cover_Text_4: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OD_Cover_Text_4) ? data.form.Pediatrik.Cover_OD_Cover_Text_4 : '',
        Cover_OD_Cover_Text_5: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OD_Cover_Text_5) ? data.form.Pediatrik.Cover_OD_Cover_Text_5 : '',
        Cover_OD_Cover_Text_6: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OD_Cover_Text_6) ? data.form.Pediatrik.Cover_OD_Cover_Text_6 : '',
        Cover_OS_Cover_1: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OS_Cover_1) ? data.form.Pediatrik.Cover_OS_Cover_1 : '0',
        Cover_OS_Cover_2: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OS_Cover_2) ? data.form.Pediatrik.Cover_OS_Cover_2 : '0',
        Cover_OS_Cover_3: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OS_Cover_3) ? data.form.Pediatrik.Cover_OS_Cover_3 : '0',
        Cover_OS_Cover_4: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OS_Cover_4) ? data.form.Pediatrik.Cover_OS_Cover_4 : '0',
        Cover_OS_Cover_5: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OS_Cover_5) ? data.form.Pediatrik.Cover_OS_Cover_5 : '0',
        Cover_OS_Cover_6: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OS_Cover_6) ? data.form.Pediatrik.Cover_OS_Cover_6 : '0',
        Cover_OS_Cover_Text_1: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OS_Cover_Text_1) ? data.form.Pediatrik.Cover_OS_Cover_Text_1 : '',
        Cover_OS_Cover_Text_2: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OS_Cover_Text_2) ? data.form.Pediatrik.Cover_OS_Cover_Text_2 : '',
        Cover_OS_Cover_Text_3: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OS_Cover_Text_3) ? data.form.Pediatrik.Cover_OS_Cover_Text_3 : '',
        Cover_OS_Cover_Text_4: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OS_Cover_Text_4) ? data.form.Pediatrik.Cover_OS_Cover_Text_4 : '',
        Cover_OS_Cover_Text_5: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OS_Cover_Text_5) ? data.form.Pediatrik.Cover_OS_Cover_Text_5 : '',
        Cover_OS_Cover_Text_6: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cover_OS_Cover_Text_6) ? data.form.Pediatrik.Cover_OS_Cover_Text_6 : '',
        Prisma_OD_Prisma: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Prisma_OD_Prisma) ? data.form.Pediatrik.Prisma_OD_Prisma : '',
        Prisma_OS_Prisma: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Prisma_OS_Prisma) ? data.form.Pediatrik.Prisma_OS_Prisma : '',
        Randot_OD_Animal: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Randot_OD_Animal) ? data.form.Pediatrik.Randot_OD_Animal : '',
        Randot_OS_Animal: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Randot_OS_Animal) ? data.form.Pediatrik.Randot_OS_Animal : '',
        Rpl_Streak_OD_Va: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OD_Va) ? data.form.Pediatrik.Rpl_Streak_OD_Va : '',
        Rpl_Streak_OD_Va_Text: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OD_Va_Text) ? data.form.Pediatrik.Rpl_Streak_OD_Va_Text : '',
        Rpl_Streak_OS_Va: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OS_Va) ? data.form.Pediatrik.Rpl_Streak_OS_Va : '',
        Rpl_Streak_OS_Va_Text: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OS_Va_Text) ? data.form.Pediatrik.Rpl_Streak_OS_Va_Text : '',
        Submit_Pediatrik: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Submit_Pediatrik) ? data.form.Pediatrik.Submit_Pediatrik : '',
        Randot_OD_Circles: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Randot_OD_Circles) ? data.form.Pediatrik.Randot_OD_Circles : '',
        Randot_OS_Circles: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Randot_OS_Circles) ? data.form.Pediatrik.Randot_OS_Circles : '',
        Rpl_Streak_OD_False: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OD_False) ? data.form.Pediatrik.Rpl_Streak_OD_False : '',
        Rpl_Streak_OD_False_Text: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OD_False_Text) ? data.form.Pediatrik.Rpl_Streak_OD_False_Text : '',
        Rpl_Streak_OS_False: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OS_False) ? data.form.Pediatrik.Rpl_Streak_OS_False : '',
        Rpl_Streak_OS_False_Text: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OS_False_Text) ? data.form.Pediatrik.Rpl_Streak_OS_False_Text : '',
        Randot_OD_Randot_Form: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Randot_OD_Randot_Form) ? data.form.Pediatrik.Randot_OD_Randot_Form : '',
        Randot_OS_Randot_Form: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Randot_OS_Randot_Form) ? data.form.Pediatrik.Randot_OS_Randot_Form : '',
        Rpl_Streak_OD_Pd_Jauh: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OD_Pd_Jauh) ? data.form.Pediatrik.Rpl_Streak_OD_Pd_Jauh : '',
        Rpl_Streak_OD_Pd_Jauh_Text: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OD_Pd_Jauh_Text) ? data.form.Pediatrik.Rpl_Streak_OD_Pd_Jauh_Text : '',
        Rpl_Streak_OS_Pd_Jauh: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OS_Pd_Jauh) ? data.form.Pediatrik.Rpl_Streak_OS_Pd_Jauh : '',
        Rpl_Streak_OS_Pd_Jauh_Text: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OS_Pd_Jauh_Text) ? data.form.Pediatrik.Rpl_Streak_OS_Pd_Jauh_Text : '',
        Rpl_Streak_OD_Adaptasi: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OD_Adaptasi) ? data.form.Pediatrik.Rpl_Streak_OD_Adaptasi : '',
        Rpl_Streak_OD_Adaptasi_Text: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OD_Adaptasi_Text) ? data.form.Pediatrik.Rpl_Streak_OD_Adaptasi_Text : '',
        Rpl_Streak_OS_Adaptasi: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OS_Adaptasi) ? data.form.Pediatrik.Rpl_Streak_OS_Adaptasi : '',
        Rpl_Streak_OS_Adaptasi_Text: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OS_Adaptasi_Text) ? data.form.Pediatrik.Rpl_Streak_OS_Adaptasi_Text : '',
        Goniometer_OD_Goniometer: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Goniometer_OD_Goniometer) ? data.form.Pediatrik.Goniometer_OD_Goniometer : '',
        Goniometer_OS_Goniometer: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Goniometer_OS_Goniometer) ? data.form.Pediatrik.Goniometer_OS_Goniometer : '',
        Nearvision_OD_Nearvision: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Nearvision_OD_Nearvision) ? data.form.Pediatrik.Nearvision_OD_Nearvision : '',
        Nearvision_OD_Select: data.form && data.form.Pediatrik?.Nearvision_OD_Select ? data.form.Pediatrik?.Nearvision_OD_Select : data.form && data.form.Pediatrik?.Nearvision_OD_Nearvision && data.form.Pediatrik?.Nearvision_OD_Nearvision !== '' ? 'Lain-lain' : '',
        Nearvision_OS_Nearvision: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Nearvision_OS_Nearvision) ? data.form.Pediatrik.Nearvision_OS_Nearvision : '',
        Nearvision_OS_Select: data.form && data.form.Pediatrik?.Nearvision_OS_Select ? data.form.Pediatrik?.Nearvision_OS_Select : data.form && data.form.Pediatrik?.Nearvision_OS_Nearvision && data.form.Pediatrik?.Nearvision_OS_Nearvision !== '' ? 'Lain-lain' : '',
        Rpl_Streak_OD_Streak_Cyl: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OD_Streak_Cyl) ? data.form.Pediatrik.Rpl_Streak_OD_Streak_Cyl : '',
        Rpl_Streak_OD_Streak_Sph: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OD_Streak_Sph) ? data.form.Pediatrik.Rpl_Streak_OD_Streak_Sph : '',
        Rpl_Streak_OS_Streak_Cyl: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OS_Streak_Cyl) ? data.form.Pediatrik.Rpl_Streak_OS_Streak_Cyl : '',
        Rpl_Streak_OS_Streak_Sph: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OS_Streak_Sph) ? data.form.Pediatrik.Rpl_Streak_OS_Streak_Sph : '',
        Cardif_OD_Test_Distance_1: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cardif_OD_Test_Distance_1) ? data.form.Pediatrik.Cardif_OD_Test_Distance_1 : '',
        Cardif_OS_Test_Distance_1: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cardif_OS_Test_Distance_1) ? data.form.Pediatrik.Cardif_OS_Test_Distance_1 : '',
        Rpl_Streak_OD_Streak_Axis: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OD_Streak_Axis) ? data.form.Pediatrik.Rpl_Streak_OD_Streak_Axis : '',
        Rpl_Streak_OS_Streak_Axis: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Rpl_Streak_OS_Streak_Axis) ? data.form.Pediatrik.Rpl_Streak_OS_Streak_Axis : '',
        Cardif_OD_Test_Distance_50: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cardif_OD_Test_Distance_50) ? data.form.Pediatrik.Cardif_OD_Test_Distance_50 : '',
        Cardif_OS_Test_Distance_50: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Cardif_OS_Test_Distance_50) ? data.form.Pediatrik.Cardif_OS_Test_Distance_50 : '',
        Cover_Uncover_OD_Ortho_Without_Check: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Check ?? '',
        Cover_Uncover_OS_Ortho_Without_Check: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Check ?? '',
        Cover_Uncover_OD_Ortho_With_Check: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Check ?? '',
        Cover_Uncover_OS_Ortho_With_Check: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Check ?? '',
        Cover_Uncover_OD_Ortho_With_Et_Near: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Et_Near ?? '',
        Cover_Uncover_OD_Ortho_With_Hi_Near: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Hi_Near ?? '',
        Cover_Uncover_OD_Ortho_With_Ho_Near: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Ho_Near ?? '',
        Cover_Uncover_OD_Ortho_With_Xt_Near: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Xt_Near ?? '',
        Cover_Uncover_OD_Ortho_Without_Near: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Near ?? '',
        Cover_Uncover_OS_Ortho_With_Et_Near: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Et_Near ?? '',
        Cover_Uncover_OS_Ortho_With_Hi_Near: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Hi_Near ?? '',
        Cover_Uncover_OS_Ortho_With_Ho_Near: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Ho_Near ?? '',
        Cover_Uncover_OS_Ortho_With_Xt_Near: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Xt_Near ?? '',
        Cover_Uncover_OS_Ortho_Without_Near: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Near ?? '',
        Cover_Uncover_OD_Ortho_Without_Et_Near: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Et_Near ?? '',
        Cover_Uncover_OD_Ortho_Without_Hi_Near: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Hi_Near ?? '',
        Cover_Uncover_OD_Ortho_Without_Ho_Near: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Ho_Near ?? '',
        Cover_Uncover_OD_Ortho_Without_Xt_Near: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Xt_Near ?? '',
        Cover_Uncover_OS_Ortho_Without_Et_Near: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Et_Near ?? '',
        Cover_Uncover_OS_Ortho_Without_Hi_Near: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Hi_Near ?? '',
        Cover_Uncover_OS_Ortho_Without_Ho_Near: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Ho_Near ?? '',
        Cover_Uncover_OS_Ortho_Without_Xt_Near: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Xt_Near ?? '',

        Cover_Uncover_OD_Ortho_With_Et_Distance: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Et_Distance ?? '',
        Cover_Uncover_OD_Ortho_With_Hi_Distance: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Hi_Distance ?? '',
        Cover_Uncover_OD_Ortho_With_Ho_Distance: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Ho_Distance ?? '',
        Cover_Uncover_OD_Ortho_With_Xt_Distance: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Xt_Distance ?? '',
        Cover_Uncover_OD_Ortho_Without_Distance: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Distance ?? '',
        Cover_Uncover_OS_Ortho_With_Et_Distance: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Et_Distance ?? '',
        Cover_Uncover_OS_Ortho_With_Hi_Distance: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Hi_Distance ?? '',
        Cover_Uncover_OS_Ortho_With_Ho_Distance: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Ho_Distance ?? '',
        Cover_Uncover_OS_Ortho_With_Xt_Distance: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Xt_Distance ?? '',
        Cover_Uncover_OS_Ortho_Without_Distance: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Distance ?? '',
        Cover_Uncover_OD_Ortho_Without_Et_Distance: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Et_Distance ?? '',
        Cover_Uncover_OD_Ortho_Without_Hi_Distance: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Hi_Distance ?? '',
        Cover_Uncover_OD_Ortho_Without_Ho_Distance: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Ho_Distance ?? '',
        Cover_Uncover_OD_Ortho_Without_Xt_Distance: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Xt_Distance ?? '',
        Cover_Uncover_OS_Ortho_Without_Et_Distance: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Et_Distance ?? '',
        Cover_Uncover_OS_Ortho_Without_Hi_Distance: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Hi_Distance ?? '',
        Cover_Uncover_OS_Ortho_Without_Ho_Distance: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Ho_Distance ?? '',
        Cover_Uncover_OS_Ortho_Without_Xt_Distance: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Xt_Distance ?? '',
        Cover_Uncover_OD_Ortho_With_Et_Near_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Et_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_With_Hi_Near_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Hi_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_With_Ho_Near_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Ho_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_With_Xt_Near_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Xt_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Near_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Et_Near_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Et_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Hi_Near_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Hi_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Ho_Near_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Ho_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Xt_Near_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Xt_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Near_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Et_Near_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Et_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Hi_Near_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Hi_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Ho_Near_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Ho_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Xt_Near_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Xt_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Et_Near_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Et_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Hi_Near_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Hi_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Ho_Near_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Ho_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Xt_Near_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Xt_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_With_Et_Distance_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Et_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_With_Hi_Distance_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Hi_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_With_Ho_Distance_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Ho_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_With_Xt_Distance_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Xt_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Distance_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Et_Distance_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Et_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Hi_Distance_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Hi_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Ho_Distance_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Ho_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Xt_Distance_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Xt_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Distance_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Et_Distance_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Et_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Hi_Distance_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Hi_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Ho_Distance_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Ho_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Xt_Distance_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Xt_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Et_Distance_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Et_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Hi_Distance_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Hi_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Ho_Distance_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Ho_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Xt_Distance_Lain_Text: data?.form?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Xt_Distance_Lain_Text ?? '',
        Okn_ODS_Okn: data?.form?.Pediatrik?.Okn_ODS_Okn ?? '',
        Raf_ODS_Raf: data?.form?.Pediatrik?.Raf_ODS_Raf ?? '',
        Prisma_OD_Prisma_With_Et_Near: data?.form?.Pediatrik?.Prisma_OD_Prisma_With_Et_Near ?? '',
        Prisma_OD_Prisma_With_Hi_Near: data?.form?.Pediatrik?.Prisma_OD_Prisma_With_Hi_Near ?? '',
        Prisma_OD_Prisma_With_Ho_Near: data?.form?.Pediatrik?.Prisma_OD_Prisma_With_Ho_Near ?? '',
        Prisma_OD_Prisma_With_Xt_Near: data?.form?.Pediatrik?.Prisma_OD_Prisma_With_Xt_Near ?? '',
        Prisma_OD_Prisma_Without_Near: data?.form?.Pediatrik?.Prisma_OD_Prisma_Without_Near ?? '',
        Prisma_OS_Prisma_With_Et_Near: data?.form?.Pediatrik?.Prisma_OS_Prisma_With_Et_Near ?? '',
        Prisma_OS_Prisma_With_Hi_Near: data?.form?.Pediatrik?.Prisma_OS_Prisma_With_Hi_Near ?? '',
        Prisma_OS_Prisma_With_Ho_Near: data?.form?.Pediatrik?.Prisma_OS_Prisma_With_Ho_Near ?? '',
        Prisma_OS_Prisma_With_Xt_Near: data?.form?.Pediatrik?.Prisma_OS_Prisma_With_Xt_Near ?? '',
        Prisma_OS_Prisma_Without_Near: data?.form?.Pediatrik?.Prisma_OS_Prisma_Without_Near ?? '',
        Prisma_OD_Prisma_Without_Et_Near: data?.form?.Pediatrik?.Prisma_OD_Prisma_Without_Et_Near ?? '',
        Prisma_OD_Prisma_Without_Hi_Near: data?.form?.Pediatrik?.Prisma_OD_Prisma_Without_Hi_Near ?? '',
        Prisma_OD_Prisma_Without_Ho_Near: data?.form?.Pediatrik?.Prisma_OD_Prisma_Without_Ho_Near ?? '',
        Prisma_OD_Prisma_Without_Xt_Near: data?.form?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Near ?? '',
        Prisma_OS_Prisma_Without_Et_Near: data?.form?.Pediatrik?.Prisma_OS_Prisma_Without_Et_Near ?? '',
        Prisma_OS_Prisma_Without_Hi_Near: data?.form?.Pediatrik?.Prisma_OS_Prisma_Without_Hi_Near ?? '',
        Prisma_OS_Prisma_Without_Ho_Near: data?.form?.Pediatrik?.Prisma_OS_Prisma_Without_Ho_Near ?? '',
        Prisma_OS_Prisma_Without_Xt_Near: data?.form?.Pediatrik?.Prisma_OS_Prisma_Without_Xt_Near ?? '',
        Prisma_OD_Prisma_With_Et_Distance: data?.form?.Pediatrik?.Prisma_OD_Prisma_With_Et_Distance ?? '',
        Prisma_OD_Prisma_With_Hi_Distance: data?.form?.Pediatrik?.Prisma_OD_Prisma_With_Hi_Distance ?? '',
        Prisma_OD_Prisma_With_Ho_Distance: data?.form?.Pediatrik?.Prisma_OD_Prisma_With_Ho_Distance ?? '',
        Prisma_OD_Prisma_With_Xt_Distance: data?.form?.Pediatrik?.Prisma_OD_Prisma_With_Xt_Distance ?? '',
        Prisma_OD_Prisma_Without_Distance: data?.form?.Pediatrik?.Prisma_OD_Prisma_Without_Distance ?? '',
        Prisma_OS_Prisma_With_Et_Distance: data?.form?.Pediatrik?.Prisma_OD_Prisma_With_Et_Distance ?? '',
        Prisma_OS_Prisma_With_Hi_Distance: data?.form?.Pediatrik?.Prisma_OS_Prisma_With_Hi_Distance ?? '',
        Prisma_OS_Prisma_With_Ho_Distance: data?.form?.Pediatrik?.Prisma_OS_Prisma_With_Ho_Distance ?? '',
        Prisma_OS_Prisma_With_Xt_Distance: data?.form?.Pediatrik?.Prisma_OS_Prisma_With_Xt_Distance ?? '',
        Prisma_OD_Prisma_Without_Et_Distance: data?.form?.Pediatrik?.Prisma_OD_Prisma_Without_Et_Distance ?? '',
        Prisma_OD_Prisma_Without_Hi_Distance: data?.form?.Pediatrik?.Prisma_OD_Prisma_Without_Hi_Distance ?? '',
        Prisma_OD_Prisma_Without_Ho_Distance: data?.form?.Pediatrik?.Prisma_OD_Prisma_Without_Ho_Distance ?? '',
        Prisma_OD_Prisma_Without_Xt_Distance: data?.form?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Distance ?? '',
        Prisma_OS_Prisma_Without_Et_Distance: data?.form?.Pediatrik?.Prisma_OS_Prisma_Without_Et_Distance ?? '',
        Prisma_OS_Prisma_Without_Hi_Distance: data?.form?.Pediatrik?.Prisma_OS_Prisma_Without_Hi_Distance ?? '',
        Prisma_OS_Prisma_Without_Ho_Distance: data?.form?.Pediatrik?.Prisma_OS_Prisma_Without_Ho_Distance ?? '',
        Prisma_OS_Prisma_Without_Xt_Distance: data?.form?.Pediatrik?.Prisma_OS_Prisma_Without_Xt_Distance ?? '',
        Prisma_OD_Prisma_With_Et_Near_Lain_Text: data?.form?.Pediatrik?.Prisma_OD_Prisma_With_Et_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Hi_Near_Lain_Text: data?.form?.Pediatrik?.Prisma_OD_Prisma_With_Hi_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Ho_Near_Lain_Text: data?.form?.Pediatrik?.Prisma_OD_Prisma_With_Ho_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Xt_Near_Lain_Text: data?.form?.Pediatrik?.Prisma_OD_Prisma_With_Xt_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Near_Lain_Text: data?.form?.Pediatrik?.Prisma_OD_Prisma_Without_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Et_Near_Lain_Text: data?.form?.Pediatrik?.Prisma_OS_Prisma_With_Et_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Hi_Near_Lain_Text: data?.form?.Pediatrik?.Prisma_OS_Prisma_With_Hi_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Ho_Near_Lain_Text: data?.form?.Pediatrik?.Prisma_OS_Prisma_With_Ho_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Xt_Near_Lain_Text: data?.form?.Pediatrik?.Prisma_OS_Prisma_With_Xt_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Near_Lain_Text: data?.form?.Pediatrik?.Prisma_OS_Prisma_Without_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Et_Near_Lain_Text: data?.form?.Pediatrik?.Prisma_OD_Prisma_Without_Et_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Hi_Near_Lain_Text: data?.form?.Pediatrik?.Prisma_OD_Prisma_Without_Hi_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Ho_Near_Lain_Text: data?.form?.Pediatrik?.Prisma_OD_Prisma_Without_Ho_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Xt_Near_Lain_Text: data?.form?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Et_Near_Lain_Text: data?.form?.Pediatrik?.Prisma_OS_Prisma_Without_Et_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Hi_Near_Lain_Text: data?.form?.Pediatrik?.Prisma_OS_Prisma_Without_Hi_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Ho_Near_Lain_Text: data?.form?.Pediatrik?.Prisma_OS_Prisma_Without_Ho_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Xt_Near_Lain_Text: data?.form?.Pediatrik?.Prisma_OS_Prisma_Without_Xt_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Et_Distance_Lain_Text: data?.form?.Pediatrik?.Prisma_OD_Prisma_With_Et_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Hi_Distance_Lain_Text: data?.form?.Pediatrik?.Prisma_OD_Prisma_With_Hi_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Ho_Distance_Lain_Text: data?.form?.Pediatrik?.Prisma_OD_Prisma_With_Ho_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Xt_Distance_Lain_Text: data?.form?.Pediatrik?.Prisma_OD_Prisma_With_Xt_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Distance_Lain_Text: data?.form?.Pediatrik?.Prisma_OD_Prisma_Without_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Et_Distance_Lain_Text: data?.form?.Pediatrik?.Prisma_OD_Prisma_With_Et_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Hi_Distance_Lain_Text: data?.form?.Pediatrik?.Prisma_OS_Prisma_With_Hi_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Ho_Distance_Lain_Text: data?.form?.Pediatrik?.Prisma_OS_Prisma_With_Ho_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Xt_Distance_Lain_Text: data?.form?.Pediatrik?.Prisma_OS_Prisma_With_Xt_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Et_Distance_Lain_Text: data?.form?.Pediatrik?.Prisma_OD_Prisma_Without_Et_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Hi_Distance_Lain_Text: data?.form?.Pediatrik?.Prisma_OD_Prisma_Without_Hi_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Ho_Distance_Lain_Text: data?.form?.Pediatrik?.Prisma_OD_Prisma_Without_Ho_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Xt_Distance_Lain_Text: data?.form?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Et_Distance_Lain_Text: data?.form?.Pediatrik?.Prisma_OS_Prisma_Without_Et_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Hi_Distance_Lain_Text: data?.form?.Pediatrik?.Prisma_OS_Prisma_Without_Hi_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Ho_Distance_Lain_Text: data?.form?.Pediatrik?.Prisma_OS_Prisma_Without_Ho_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Xt_Distance_Lain_Text: data?.form?.Pediatrik?.Prisma_OS_Prisma_Without_Xt_Distance_Lain_Text ?? '',
        Ptosis_OD_FIP: data?.form?.Pediatrik?.Ptosis_OD_FIP ?? '',
        Ptosis_OS_FIP: data?.form?.Pediatrik?.Ptosis_OS_FIP ?? '',
        Ptosis_OD_MRD: data?.form?.Pediatrik?.Ptosis_OD_MRD ?? '',
        Ptosis_OS_MRD: data?.form?.Pediatrik?.Ptosis_OS_MRD ?? '',
        Ptosis_OD_LA: data?.form?.Pediatrik?.Ptosis_OD_LA ?? '',
        Ptosis_OS_LA: data?.form?.Pediatrik?.Ptosis_OS_LA ?? '',

        TNO_Stereoskopis_ODS_1: data?.form?.Pediatrik?.TNO_Stereoskopis_ODS_1  ?? '',
        TNO_Stereoskopis_ODS_2: data?.form?.Pediatrik?.TNO_Stereoskopis_ODS_2  ?? '',
        TNO_Stereoskopis_ODS_3: data?.form?.Pediatrik?.TNO_Stereoskopis_ODS_3  ?? '',
        TNO_Stereoskopis_ODS_4: data?.form?.Pediatrik?.TNO_Stereoskopis_ODS_4  ?? '',
        TNO_Stereoskopis_ODS_5: data?.form?.Pediatrik?.TNO_Stereoskopis_ODS_5  ?? '',
        Goniometer_ODS_Goniometer: data?.form?.Pediatrik?.Goniometer_ODS_Goniometer   ?? '',
        Goniometer_ODS_Right_Check: data?.form?.Pediatrik?.Goniometer_ODS_Right_Check  ?? '',
        Goniometer_ODS_Left_Check: data?.form?.Pediatrik?.Goniometer_ODS_Left_Check  ?? '',
        VOD: data?.form?.Pediatrik?.VOD  ?? '',
        VOS: data?.form?.Pediatrik?.VOS   ?? '',
        VOD_Text: data?.form?.Pediatrik?.VOD_Text  ?? '',
        VOS_Text: data?.form?.Pediatrik?.VOS_Text  ?? '',
      },
      pediatric_submit: data?.form?.Submit_Pediatrik ?? '0',
      image_1: {
        Url_Image: (data && data?.form && data?.form?.Image_1 && data?.form?.Image_1?.Url_Image) ? data?.form.Image_1?.Url_Image : '',
        Name_Image: (data && data?.form && data?.form?.Image_1 && data?.form?.Image_1?.Name_Image) ? data?.form?.Image_1?.Name_Image : '',
        Type_Image: (data && data?.form && data?.form?.Image_1 && data?.form?.Image_1?.Type_Image) ? data?.form?.Image_1?.Type_Image : '',
        Size_Image: (data && data?.form && data?.form?.Image_1 && data?.form?.Image_1?.Size_Image) ? data?.form?.Image_1?.Size_Image : '',
      },
      image_2: {
        Url_Image: (data && data?.form && data?.form?.Image_2 && data?.form?.Image_2?.Url_Image) ? data?.form.Image_2?.Url_Image : '',
        Name_Image: (data && data?.form && data?.form?.Image_2 && data?.form?.Image_2?.Name_Image) ? data?.form?.Image_2?.Name_Image : '',
        Type_Image: (data && data?.form && data?.form?.Image_2 && data?.form?.Image_2?.Type_Image) ? data?.form?.Image_2?.Type_Image : '',
        Size_Image: (data && data?.form && data?.form?.Image_2 && data?.form?.Image_2?.Size_Image) ? data?.form?.Image_2?.Size_Image : '',
      },
      tanggal: data?.form?.Tanggal,
      'ttd-dokter': data?.form?.TTD_Dokter,
      'id-dokter': data?.form?.ID_Dokter,
      no_berobat: data?.form?.No_Berobat,
      cppt_id: data?.form?.CPPT_ID,
    },
  });


  const handleRadioChange = (e: any) => {
    setValue(e.target.name, e.target.value);
  }


  const handleSubmitForm = (value: IUpdateInpatientMedicalNoteRequest | any) => {
    if (!treatment) {
      return;
    }
    const appRequest = AppRequest.createFromStore(treatment);
    const resep = value.resep;
    const prescriptionModel = ArrayPrescription.createFromForm(resep, data?.aturan_pakai);
    const prescriptionRequest = UpdateInpatientMedicalNoteRequest.createPrescription(prescriptionModel);
    const params = UpdateInpatientMedicalNoteRequest.createFromJson({
      ...value,
      ...appRequest,
      submit_pediatrik: value.pediatric_submit,
      pediatrik: value.pediatric,
      ...prescriptionRequest,
    });
    setProcessing(true);
    dispatch(handlePdf(undefined));
    InpatientMedicalNoteService().update(params)
      .then(() => {
        InpatientMedicalNoteService().show(appRequest)
          .then((response) => {
            if (response && response.data && response.data.data) {
              InpatientMedicalNoteService().pdfv3(PdfInpatientMedicalNoteRequest.createPdfRequest({ ...response.data.data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
                .then(() => {
                  setProcessing(false);
                  dispatch(fetchInpatientMedicalNotePdf(FindPdfRequest.createFromJson({
                    emr_id: treatment.EMR_ID,
                    form_name: 'rawat-inap_catatan-medis-awal',
                  })));
                  return true;
                }).finally(() => {
                  dispatch(fetchInpatientMedicalNote(appRequest));
                  setProcessing(false);
                },
                )
            }
          })
      });
  }

  const handleVisitChange = (e: any) => {
    if (e.target.value !== '') {
      setDoctorFill(true);
    } else {
      setDoctorFill(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <Card className="border-1">
        <CardBody>
          <Input
            type='hidden'
            name='cppt_id'
            innerRef={register()}
          />
          <FormGroup className="form-group">
            <TextInput name="keluhan_utama" label="Keluhan Utama" {...{ register, errors }} />
          </FormGroup>
          <FormGroup className="form-group">
            <TextInput name="anamnesa" label="Anamnesa" {...{ register, errors }} />
          </FormGroup>
          <FormGroup className="form-group">
            <TextInput name="riwayat_penyakit_terdahulu" label="Riwayat Penyakit Terdahulu (Termasuk Riwayat Operasi)" {...{ register, errors }} />
          </FormGroup>
          <FormGroup className="form-group">
            <TextInput name="riwayat_pemakaian_obat" label="Riwayat Pemakaian Obat" {...{ register, errors }} />
          </FormGroup>
          <FormGroup className="form-group">
            <TextInput name="riwayat_penyakit_keluarga" label="Riwayat Pemakaian Dalam Keluarga" {...{ register, errors }} />
          </FormGroup>
          <FormGroup className='form-group'>
            <TextInput name='riwayat_pekerjaan' label='Riwayat Pekerjaan' {...{ register, errors}} />
          </FormGroup>
          <div className="col-form-label fw-bolder">Apakah Pekerjaan Pasien Berhubungan Dengan Zat-zat Berbahaya (contoh: Kimia, Gas, Dll)</div>
          <Row>
            <Col md="6">
              <Row>
                <Col md="auto">
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="pekerjaan_zat_berbahaya"
                      className="me-1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data?.form?.Pekerjaan_Zat_Berbahaya === '0'}
                      value="0"
                      innerRef={register('pekerjaan_zat_berbahaya') as any}
                    />{' '}
                    <Label check>
                      Tidak
                    </Label>
                  </FormGroup>
                </Col>
                <Col>
                  <Row>
                    <Col md="auto">
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="pekerjaan_zat_berbahaya"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data?.form?.Pekerjaan_Zat_Berbahaya === '1'}
                          value="1"
                          innerRef={register('pekerjaan_zat_berbahaya') as any}
                        />{' '}
                        <Label check>
                          Ya, sebutkan
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup className="form-group">
                        <TextInput name="pekerjaan_zat_berbahaya_keterangan" nolabel {...{ register, errors }} />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <FormGroup className="form-group" row>
            <TextInput name="riwayat_alergi" label="Riwayat Alergi" {...{ register, errors }} />
          </FormGroup>
          <Row className="mt-1">
            <Col>
              <FormGroup className="form-group" row>
                <TextInput name="kesadaran" label="Kesadaran" md="4" {...{ register, errors }} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="form-group" row>
                <TextInput name="pernafasan" label="Pernapasan" md="4" {...{ register, errors }} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup className="form-group" row>
                <TextInput name="tekanan_darah" label="TD" md="4" {...{ register, errors }} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="form-group" row>
                <TextInput name="skala_nyeri" label="Skala Nyeri" md="4" {...{ register, errors }} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup className="form-group" row>
                <TextInput name="nadi" label="HR" md="4" {...{ register, errors }} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="form-group" row>
                <TextInput name="berat_badan" label="Berat Badan" md="4" {...{ register, errors }} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup className="form-group" row>
                <TextInput name="suhu" label="T" md="4" {...{ register, errors }} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="form-group" row>
                <TextInput name="tinggi_badan" label="Tinggi Badan" md="4" {...{ register, errors }} />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md="6">
              <Row>
                <Col md="4">
                  <div className="col-form-label fw-bolder">Keadaan Umum</div>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="keadaan_umum"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data?.form?.Keadaan_Umum === '0'}
                          value="0"
                          innerRef={register('keadaan_umum') as any}
                        />{' '}
                        <Label check>
                          Baik
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="keadaan_umum"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data?.form?.Keadaan_Gizi === '1'}
                          value="1"
                          innerRef={register('keadaan_umum') as any}
                        />{' '}
                        <Label check>
                          Sedang
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="keadaan_umum"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data?.form?.Keadaan_Umum === '2'}
                          value="2"
                          innerRef={register('keadaan_umum') as any}
                        />{' '}
                        <Label check>
                          Buruk
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col md="6">
              <Row>
                <Col md="4">
                  <div className="col-form-label fw-bolder">Keadaan Gizi</div>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="keadaan_gizi"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data?.form?.Keadaan_Gizi === '0'}
                          value="0"
                          innerRef={register('keadaan_gizi') as any}
                        />{' '}
                        <Label check>
                          Baik
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="keadaan_gizi"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data?.form?.Keadaan_Gizi === '1'}
                          value="1"
                          innerRef={register('keadaan_gizi') as any}
                        />{' '}
                        <Label check>
                          Sedang
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="keadaan_gizi"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data?.form?.Keadaan_Gizi === '2'}
                          value="2"
                          innerRef={register('keadaan_gizi') as any}
                        />{' '}
                        <Label check>
                          Buruk
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col md="6">
              <Row>
                <Col md="4">
                  <div className="col-form-label fw-bolder">Oedem</div>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="oedem"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data?.form?.Oedem === '0'}
                          value="0"
                          innerRef={register('oedem') as any}
                        />{' '}
                        <Label check>
                          Tidak Ada
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="oedem"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data?.form?.Oedem === '1'}
                          value="1"
                          innerRef={register('oedem') as any}
                        />{' '}
                        <Label check>
                          Ada
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col md="6">
              <Row>
                <Col md="4">
                  <div className="col-form-label fw-bolder">Ikterus</div>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="ikterus"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data?.form?.Ikterus === '0'}
                          value="0"
                          innerRef={register('ikterus') as any}
                        />{' '}
                        <Label check>
                          Tidak Ada
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="ikterus"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data?.form?.Ikterus === '1'}
                          value="1"
                          innerRef={register('ikterus') as any}
                        />{' '}
                        <Label check>
                          Ada
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col md="6">
              <Row>
                <Col md="4">
                  <div className="col-form-label fw-bolder">Cyanosis</div>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="cyanosis"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data?.form?.Cyanosis === '0'}
                          value="0"
                          innerRef={register('cyanosis') as any}
                        />{' '}
                        <Label check>
                          Tidak Ada
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="cyanosis"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data?.form?.Cyanosis === '1'}
                          value="1"
                          innerRef={register('cyanosis') as any}
                        />{' '}
                        <Label check>
                          Ada
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

        </CardBody>
      </Card>

      <Card className='border-1 my-1'>
        <CardBody>
          <FormGroup className='form-group' row>
            <Col md='2'>
              <Label>Pilih Visit</Label>
            </Col>
            <Col md='3'>
              <Input
                type='select'
                id='id-berobat'
                name='no_berobat'
                onChange={(e) => handleVisitChange(e)}
                style={(data.form && data.form.CPPT_ID && data.form.CPPT_ID !== '') ? { pointerEvents: 'none', opacity: '0.4' } : {}}
                innerRef={register()}
              >
                <option value=''>--</option>
                {
                  data.visits && Array.isArray(data.visits) && data.visits.map((item, key) => (
                    <option key={key} value={item.ID_Berobat}>{`${item.ID_Berobat} (${item.Dokter_Nama}, ${item.Waktu_Visit})`}</option>
                  ))
                }
              </Input>
            </Col>
          </FormGroup>
        </CardBody>
      </Card>

      {
        doctorFill ? (
          <>
            <GeneralAssessment
              {...{register, errors, setValue, data}}
            />

            <EyesAssessment
              {...{register, errors, setValue, data}}
            />

            <UploadImages
              {...{register, errors, setValue, data}}
            />

            <PediatricForm
              defaultSelected={!!(data.form && data.form.Submit_Pediatrik && data.form.Submit_Pediatrik === '1')}
              data={data.form && data.form.Pediatrik ? data.form.Pediatrik : undefined}
              {...{ register, errors, setValue, getValues }}
            />

            <ImageEditors
              {...{register, errors, setValue, data}}
            />

            <Card className="border-1 my-2">
              <CardBody>
                <FormGroup className="form-group" row>
                  <TextInput name="pemeriksaan_penunjang" label="Pemeriksaan Penunjang" md="3" {...{ register, errors }} />
                </FormGroup>
                <FormGroup className="form-group" row>
                  <TextInput name="diagnosa" label="Diagnosa" md="3" {...{ register, errors }} />
                </FormGroup>
                <FormGroup className="form-group" row>
                  <TextInput name="rencana_pengobatan" label="Rencana Pengobatan" md="3" {...{ register, errors }} />
                </FormGroup>
                <PrescriptionForm
                  {...{register, setValue, data, control}}
                />
                <FormGroup className="form-group" row>
                  <DateTimeInput name="tanggal" label="Tanggal" md="3" {...{ register, errors }} />
                </FormGroup>
              </CardBody>
            </Card>
          </>
        ) : (
          null
        )
      }
      <Card className='border-1 my-1'>
        <CardBody>
          <Row className="mb-2">
            <Col className="d-flex justify-content-center">
              <div>
                <Signature
                  label="Dokter"
                  type="picker"
                  defaultPerson={data?.form?.Nama_Dokter ?? ''}
                  initialImage={(data?.form?.TTD_Dokter !== '') ? data?.form?.TTD_Dokter : undefined}
                  additionalLabel={(data?.form?.Nama_Dokter && data?.form?.Nama_Dokter !== '') ? data?.form?.Nama_Dokter : undefined}
                  persons={doctors}
                  pickerTitle="Dokter"
                  unit='dokter'
                  onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                    if (isFormDoctor) {
                      handleDoctorSigned(assigner, isFormDoctor)
                    }
                    if (!isFormDoctor) {
                      handleDoctorSigned(assigner)
                    }
                  }}
                />
                <Input
                  type="hidden"
                  name="id-dokter"
                  innerRef={register({ required: true })}
                  invalid={errors['id-dokter'] && true} />
                <Input
                  type="hidden"
                  name="ttd-dokter"
                  innerRef={register({ required: true })}
                  invalid={errors['ttd-dokter'] && true} />
              </div>
            </Col>
          </Row>
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
              <Label className='me-1'>Terakhir Disimpan: </Label>
              <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
            </div>
          </FormGroup>
        </CardBody>
      </Card>
    </Form>
  )
}

export default InitialMedicalNoteForm;
