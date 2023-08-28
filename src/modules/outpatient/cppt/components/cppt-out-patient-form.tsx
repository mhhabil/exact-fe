import {Button, Col, Form, FormFeedback, FormGroup, Input, Label, ListGroup, ListGroupItem, Row, Table} from 'reactstrap';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import {
  CreateCpptOutPatientRequest,
  ICreateCpptOutPatientRequest,
} from '@modules/outpatient/cppt/requests/create-cppt-out-patient.request';
import { DoctorPreliminaryStudyModel, HowToUse, IDaftarTebus, IPrescription, Medicine } from '@modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';
import { DownloadCloud, FileText, Plus, Trash, X } from 'react-feather';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { fetchCpptOutPatientDayPdf, fetchCpptOutPatientPdf, handlePdf, handlePdfAll } from '@modules/outpatient/cppt/stores/cppt-out-patient.store';
import { AppRequest } from '@shared/request';
import { ArrayPrescription } from '../../doctor-preliminary-study/requests/update-doctor-preliminary-study.request';
import BaseSelect from 'react-select';
import { CpptOutPatientService } from '@modules/outpatient/cppt/services';
import { CreateCpptRoRequest } from '@modules/ro/cppt/requests';
import { EyeImage } from '@shared/eye-image/components';
import PediatricForm from '@modules/outpatient/doctor-preliminary-study/components/pediatric-form';
import PreliminaryStudyDetail from '@modules/ro/preliminary-study/components/preliminary-study-detail';
import { RetinaImage } from '@shared/retina-image/components';
import { Signature } from '@shared/signature/components';
import { SignatureModel } from '@shared/signature/models/signature.model';
import { SubmitButton } from '@shared/button';
import { UpdateCpptOutPatientRequest } from '@modules/outpatient/cppt/requests/update-cppt-out-patient.request';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useRouter } from 'next/router';
import { useWarnIfUnsavedChanges } from '@src/shared/alert';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { CPPTPDFRequest, RootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import { Slide, toast } from 'react-toastify'
import { FindPdfRequest } from '@src/shared/pdf';
import FixRequiredSelect from '@shared/input/components/FixRequiredSelect';
import Image from 'next/image'
import { MedsPackage } from '@src/shared/meds-package/components';
import { PrescriptionToast } from '@src/shared/alert/components';
import { UploadToCloudService } from '@src/shared/upload-cloud-storage/services';
import getConfig from 'next/config'
import { useDropzone } from 'react-dropzone';

const aOptions = [
  'Gangguan Penglihatan',
  'Gangguan Rasa Nyaman / Nyeri',
  'Risiko Infeksi',
  'Kurang Pengetahuan',
];

const CpptOutPatientForm = (props: { doctorPreliminaryStudy: DoctorPreliminaryStudyModel | any, cpptRajal?: any, onSuccessSubmit?: any, onCancel?: any, action?: any, copy?: boolean }) => {

  const { officers } = useAppSelector(state => state.officer);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const { doctorPreliminaryStudy, cpptRajal, onSuccessSubmit, onCancel, action, copy } = props;
  const [processing, setProcessing] = useState(false);
  const { doctors } = useAppSelector(state => state.doctor);
  const { treatment } = useAppSelector(state => state.patient);
  const { consultationLinkRajal } = useAppSelector(state => state.cpptOutPatient)
  const [signatureErr, setSignatureErr] = useState({ error: false, message: '' });
  const [datasErr, setDatasErr] = useState({ error: false, message: '' });
  const [dataoErr, setDataoErr] = useState({ error: false, message: '' });
  const [dataAErr, setDataAErr] = useState({ error: false, message: '' });
  const [dataPErr, setDataPErr] = useState({ error: false, message: '' });
  const [timeErr, setTimeErr] = useState({ error: false, message: '' });
  const [files, setFiles] = useState<any>([])
  const [files2, setFiles2] = useState<any>([])
  const [recipe, setRecipe] = useState<any>(cpptRajal && cpptRajal.Resep ? cpptRajal.Resep : consultationLinkRajal && consultationLinkRajal.Balas_Resep ? consultationLinkRajal.Balas_Resep : []);

  const [showEye, setShowEye] = useState<boolean>(false);
  const [showRetina, setShowRetina] = useState<boolean>(false);
  const [showPediatric, setShowPediatric] = useState<boolean>(false);

  const convertDatetimeToUTC = (date?: any) => {
    const d = date ? new Date(date) : new Date();
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}T${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }

  useEffect(() => {
    if (!showEye) {
      setValue('gambar_mata_od', undefined);
      setValue('gambar_mata_os', undefined);
    }
  }, [showEye]);

  useEffect(() => {
    if (!showRetina) {
      setValue('gambar_retina_od', undefined);
      setValue('gambar_retina_os', undefined);
    }
  }, [showRetina]);

  const { register, handleSubmit, errors, setValue, getValues, control, formState, reset, watch } = useForm({
    mode: 'onChange',
    resolver: yupResolver(CreateCpptRoRequest.scheme()),
    defaultValues: {
      data_s: (cpptRajal && cpptRajal.Data_S && cpptRajal.Data_S === 'Lain-lain') ? cpptRajal.Data_S_Lain_Text : cpptRajal && cpptRajal.Data_S && cpptRajal.Data_S !== 'Lain-lain' ? cpptRajal.Data_S : doctorPreliminaryStudy?.formRO?.ID_Keluhan === 'Lain-lain' ? doctorPreliminaryStudy.formRO.Keluhan_Lain : doctorPreliminaryStudy?.formRO?.Keluhan ? doctorPreliminaryStudy?.formRO?.Keluhan : '',
      data_o: cpptRajal?.Data_O ?? '',
      data_a: cpptRajal?.Data_A ?? '',
      data_a_text: cpptRajal?.Data_A_Text ?? '',
      data_p: cpptRajal && cpptRajal.Data_P ? cpptRajal.Data_P : consultationLinkRajal && consultationLinkRajal.Anjuran ? consultationLinkRajal.Anjuran : '',
      anjuran: cpptRajal?.Anjuran ?? '',
      instruksi_ppa: cpptRajal?.Instruksi_PPA ?? '',
      waktu: copy ? convertDatetimeToUTC() : cpptRajal && cpptRajal.Waktu ? cpptRajal.Waktu : convertDatetimeToUTC(),
      id_perawat_cppt: cpptRajal?.Id_Perawat_Cppt ?? '',
      ttd_perawat_cppt: cpptRajal?.TTD_Perawat_Cppt ?? '',
      gambar_mata_od: cpptRajal?.Gambar_Mata_OD ?? undefined,
      gambar_mata_os: cpptRajal?.Gambar_Mata_OS ?? undefined,
      gambar_retina_od: cpptRajal?.Gambar_Retina_OD ?? undefined,
      gambar_retina_os: cpptRajal?.Gambar_Retina_OS ?? undefined,
      id_dokter_pengkaji: cpptRajal?.Id_Dokter_Pengkaji ?? '',
      konsultasi: cpptRajal?.Konsultasi ?? '',
      ttd_dokter_pengkaji: cpptRajal?.TTD_Dokter_Pengkaji ?? '',
      retina_submit: cpptRajal?.Submit_Retina ?? 0,

      eye_submit: cpptRajal?.Submit_Mata ?? 0,
      pediatric_submit: cpptRajal?.Submit_Pediatrik ?? 0,
      picture_data_o: {
        Url_Image_Cppt_Data_O: cpptRajal && cpptRajal.Picture_Data_O && cpptRajal.Picture_Data_O.Url_Image_Cppt_Data_O ? cpptRajal.Picture_Data_O.Url_Image_Cppt_Data_O : '',
        Name_Image_Cppt_Data_O: cpptRajal && cpptRajal.Picture_Data_O && cpptRajal.Picture_Data_O.Name_Image_Cppt_Data_O ? cpptRajal.Picture_Data_O.Name_Image_Cppt_Data_O : '',
        Type_Image_Cppt_Data_O: cpptRajal && cpptRajal.Picture_Data_O && cpptRajal.Picture_Data_O.Type_Image_Cppt_Data_O ? cpptRajal.Picture_Data_O.Type_Image_Cppt_Data_O : '',
        Size_Image_Cppt_Data_O: cpptRajal && cpptRajal.Picture_Data_O && cpptRajal.Picture_Data_O.Size_Image_Cppt_Data_O ? cpptRajal.Picture_Data_O.Size_Image_Cppt_Data_O : '',
      },
      image_2: {
        Url_Image: cpptRajal && cpptRajal.Image_2 && cpptRajal.Image_2.Url_Image ? cpptRajal.Image_2.Url_Image : '',
        Name_Image: cpptRajal && cpptRajal.Image_2 && cpptRajal.Image_2.Name_Image ? cpptRajal.Image_2.Name_Image : '',
        Type_Image: cpptRajal && cpptRajal.Image_2 && cpptRajal.Image_2.Type_Image ? cpptRajal.Image_2.Type_Image : '',
        Size_Image: cpptRajal && cpptRajal.Image_2 && cpptRajal.Image_2.Size_Image ? cpptRajal.Image_2.Size_Image : '',
      },
      pediatric: {
        Hes_OD_Hes: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Hes_OD_Hes) ? cpptRajal.Pediatrik.Hes_OD_Hes : '',
        Hes_OS_Hes: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Hes_OS_Hes) ? cpptRajal.Pediatrik.Hes_OS_Hes : '',
        Okn_OD_Okn: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Okn_OD_Okn) ? cpptRajal.Pediatrik.Okn_OD_Okn : '',
        Okn_OS_Okn: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Okn_OS_Okn) ? cpptRajal.Pediatrik.Okn_OS_Okn : '',
        Raf_OD_Raf: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Raf_OD_Raf) ? cpptRajal.Pediatrik.Raf_OD_Raf : '',
        Raf_OS_Raf: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Raf_OS_Raf) ? cpptRajal.Pediatrik.Raf_OS_Raf : '',
        Okn_ODS_Okn: cpptRajal?.Pediatrik?.Okn_ODS_Okn ?? '',
        Raf_ODS_Raf: cpptRajal?.Pediatrik?.Raf_ODS_Raf ?? '',
        Tac_OD_At_38: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Tac_OD_At_38) ? cpptRajal.Pediatrik.Tac_OD_At_38 : '',
        Tac_OD_At_55: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Tac_OD_At_55) ? cpptRajal.Pediatrik.Tac_OD_At_55 : '',
        Tac_OD_At_84: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Tac_OD_At_84) ? cpptRajal.Pediatrik.Tac_OD_At_84 : '',
        Tac_OS_At_38: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Tac_OS_At_38) ? cpptRajal.Pediatrik.Tac_OS_At_38 : '',
        Tac_OS_At_55: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Tac_OS_At_55) ? cpptRajal.Pediatrik.Tac_OS_At_55 : '',
        Tac_OS_At_84: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Tac_OS_At_84) ? cpptRajal.Pediatrik.Tac_OS_At_84 : '',
        Cover_OD_Cover_1: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OD_Cover_1) ? cpptRajal.Pediatrik.Cover_OD_Cover_1 : '0',
        Cover_OD_Cover_Text_1: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OD_Cover_Text_1) ? cpptRajal.Pediatrik.Cover_OD_Cover_Text_1 : '',
        Cover_OD_Cover_2: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OD_Cover_2) ? cpptRajal.Pediatrik.Cover_OD_Cover_2 : '0',
        Cover_OD_Cover_Text_2: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OD_Cover_Text_2) ? cpptRajal.Pediatrik.Cover_OD_Cover_Text_2 : '',
        Cover_OD_Cover_3: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OD_Cover_3) ? cpptRajal.Pediatrik.Cover_OD_Cover_3 : '0',
        Cover_OD_Cover_Text_3: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OD_Cover_Text_3) ? cpptRajal.Pediatrik.Cover_OD_Cover_Text_3 : '',
        Cover_OD_Cover_4: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OD_Cover_4) ? cpptRajal.Pediatrik.Cover_OD_Cover_4 : '0',
        Cover_OD_Cover_Text_4: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OD_Cover_Text_4) ? cpptRajal.Pediatrik.Cover_OD_Cover_Text_4 : '',
        Cover_OD_Cover_5: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OD_Cover_5) ? cpptRajal.Pediatrik.Cover_OD_Cover_5 : '0',
        Cover_OD_Cover_Text_5: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OD_Cover_Text_5) ? cpptRajal.Pediatrik.Cover_OD_Cover_Text_5 : '',
        Cover_OD_Cover_6: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OD_Cover_6) ? cpptRajal.Pediatrik.Cover_OD_Cover_6 : '0',
        Cover_OD_Cover_Text_6: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OD_Cover_Text_6) ? cpptRajal.Pediatrik.Cover_OD_Cover_Text_6 : '',
        Cover_OS_Cover_1: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OS_Cover_1) ? cpptRajal.Pediatrik.Cover_OS_Cover_1 : '0',
        Cover_OS_Cover_Text_1: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OS_Cover_Text_1) ? cpptRajal.Pediatrik.Cover_OS_Cover_Text_1 : '',
        Cover_OS_Cover_2: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OS_Cover_2) ? cpptRajal.Pediatrik.Cover_OS_Cover_2 : '0',
        Cover_OS_Cover_Text_2: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OS_Cover_Text_2) ? cpptRajal.Pediatrik.Cover_OS_Cover_Text_2 : '',
        Cover_OS_Cover_3: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OS_Cover_3) ? cpptRajal.Pediatrik.Cover_OS_Cover_3 : '0',
        Cover_OS_Cover_Text_3: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OS_Cover_Text_3) ? cpptRajal.Pediatrik.Cover_OS_Cover_Text_3 : '',
        Cover_OS_Cover_4: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OS_Cover_4) ? cpptRajal.Pediatrik.Cover_OS_Cover_4 : '0',
        Cover_OS_Cover_Text_4: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OS_Cover_Text_4) ? cpptRajal.Pediatrik.Cover_OS_Cover_Text_4 : '',
        Cover_OS_Cover_5: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OS_Cover_5) ? cpptRajal.Pediatrik.Cover_OS_Cover_5 : '0',
        Cover_OS_Cover_Text_5: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OS_Cover_Text_5) ? cpptRajal.Pediatrik.Cover_OS_Cover_Text_5 : '',
        Cover_OS_Cover_6: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OS_Cover_6) ? cpptRajal.Pediatrik.Cover_OS_Cover_6 : '0',
        Cover_OS_Cover_Text_6: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cover_OS_Cover_Text_6) ? cpptRajal.Pediatrik.Cover_OS_Cover_Text_6 : '',

        Cover_Uncover_OD_Ortho_Without_Check: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Check ?? '',
        Cover_Uncover_OS_Ortho_Without_Check: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Check ?? '',
        Cover_Uncover_OD_Ortho_With_Check: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Check ?? '',
        Cover_Uncover_OS_Ortho_With_Check: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Check ?? '',

        Cover_Uncover_OD_Ortho_With_Et_Near: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Et_Near ?? '',
        Cover_Uncover_OD_Ortho_With_Hi_Near: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Hi_Near ?? '',
        Cover_Uncover_OD_Ortho_With_Ho_Near: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Ho_Near ?? '',
        Cover_Uncover_OD_Ortho_With_Xt_Near: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Xt_Near ?? '',
        Cover_Uncover_OD_Ortho_Without_Near: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Near ?? '',
        Cover_Uncover_OS_Ortho_With_Et_Near: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Et_Near ?? '',
        Cover_Uncover_OS_Ortho_With_Hi_Near: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Hi_Near ?? '',
        Cover_Uncover_OS_Ortho_With_Ho_Near: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Ho_Near ?? '',
        Cover_Uncover_OS_Ortho_With_Xt_Near: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Xt_Near ?? '',
        Cover_Uncover_OS_Ortho_Without_Near: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Near ?? '',

        Cover_Uncover_OD_Ortho_Without_Et_Near: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Et_Near ?? '',
        Cover_Uncover_OD_Ortho_Without_Hi_Near: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Hi_Near ?? '',
        Cover_Uncover_OD_Ortho_Without_Ho_Near: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Ho_Near ?? '',
        Cover_Uncover_OD_Ortho_Without_Xt_Near: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Xt_Near ?? '',
        Cover_Uncover_OS_Ortho_Without_Et_Near: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Et_Near ?? '',
        Cover_Uncover_OS_Ortho_Without_Hi_Near: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Hi_Near ?? '',
        Cover_Uncover_OS_Ortho_Without_Ho_Near: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Ho_Near ?? '',
        Cover_Uncover_OS_Ortho_Without_Xt_Near: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Xt_Near ?? '',

        Cover_Uncover_OD_Ortho_With_Et_Distance: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Et_Distance ?? '',
        Cover_Uncover_OD_Ortho_With_Hi_Distance: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Hi_Distance ?? '',
        Cover_Uncover_OD_Ortho_With_Ho_Distance: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Ho_Distance ?? '',
        Cover_Uncover_OD_Ortho_With_Xt_Distance: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Xt_Distance ?? '',
        Cover_Uncover_OD_Ortho_Without_Distance: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Distance ?? '',
        Cover_Uncover_OS_Ortho_With_Et_Distance: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Et_Distance ?? '',
        Cover_Uncover_OS_Ortho_With_Hi_Distance: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Hi_Distance ?? '',
        Cover_Uncover_OS_Ortho_With_Ho_Distance: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Ho_Distance ?? '',
        Cover_Uncover_OS_Ortho_With_Xt_Distance: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Xt_Distance ?? '',
        Cover_Uncover_OS_Ortho_Without_Distance: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Distance ?? '',

        Cover_Uncover_OD_Ortho_Without_Et_Distance: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Et_Distance ?? '',
        Cover_Uncover_OD_Ortho_Without_Hi_Distance: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Hi_Distance ?? '',
        Cover_Uncover_OD_Ortho_Without_Ho_Distance: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Ho_Distance ?? '',
        Cover_Uncover_OD_Ortho_Without_Xt_Distance: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Xt_Distance ?? '',
        Cover_Uncover_OS_Ortho_Without_Et_Distance: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Et_Distance ?? '',
        Cover_Uncover_OS_Ortho_Without_Hi_Distance: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Hi_Distance ?? '',
        Cover_Uncover_OS_Ortho_Without_Ho_Distance: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Ho_Distance ?? '',
        Cover_Uncover_OS_Ortho_Without_Xt_Distance: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Xt_Distance ?? '',
        Cover_Uncover_OD_Ortho_With_Et_Near_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Et_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_With_Hi_Near_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Hi_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_With_Ho_Near_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Ho_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_With_Xt_Near_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Xt_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Near_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Et_Near_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Et_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Hi_Near_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Hi_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Ho_Near_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Ho_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Xt_Near_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Xt_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Near_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Near_Lain_Text ?? '',

        Cover_Uncover_OD_Ortho_Without_Et_Near_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Et_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Hi_Near_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Hi_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Ho_Near_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Ho_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Xt_Near_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Xt_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Et_Near_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Et_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Hi_Near_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Hi_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Ho_Near_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Ho_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Xt_Near_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Xt_Near_Lain_Text ?? '',

        Cover_Uncover_OD_Ortho_With_Et_Distance_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Et_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_With_Hi_Distance_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Hi_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_With_Ho_Distance_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Ho_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_With_Xt_Distance_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Xt_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Distance_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Et_Distance_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Et_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Hi_Distance_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Hi_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Ho_Distance_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Ho_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Xt_Distance_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Xt_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Distance_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Distance_Lain_Text ?? '',

        Cover_Uncover_OD_Ortho_Without_Et_Distance_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Et_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Hi_Distance_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Hi_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Ho_Distance_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Ho_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Xt_Distance_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Xt_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Et_Distance_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Et_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Hi_Distance_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Hi_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Ho_Distance_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Ho_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Xt_Distance_Lain_Text: cpptRajal?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Xt_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Et_Near: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_With_Et_Near ?? '',
        Prisma_OD_Prisma_With_Hi_Near: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_With_Hi_Near ?? '',
        Prisma_OD_Prisma_With_Ho_Near: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_With_Ho_Near ?? '',
        Prisma_OD_Prisma_With_Xt_Near: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_With_Xt_Near ?? '',
        Prisma_OD_Prisma_Without_Near: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_Without_Near ?? '',
        Prisma_OS_Prisma_With_Et_Near: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_With_Et_Near ?? '',
        Prisma_OS_Prisma_With_Hi_Near: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_With_Hi_Near ?? '',
        Prisma_OS_Prisma_With_Ho_Near: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_With_Ho_Near ?? '',
        Prisma_OS_Prisma_With_Xt_Near: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_With_Xt_Near ?? '',
        Prisma_OS_Prisma_Without_Near: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_Without_Near ?? '',
        Prisma_OD_Prisma_Without_Et_Near: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_Without_Et_Near ?? '',
        Prisma_OD_Prisma_Without_Hi_Near: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_Without_Hi_Near ?? '',
        Prisma_OD_Prisma_Without_Ho_Near: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_Without_Ho_Near ?? '',
        Prisma_OD_Prisma_Without_Xt_Near: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Near ?? '',
        Prisma_OS_Prisma_Without_Et_Near: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_Without_Et_Near ?? '',
        Prisma_OS_Prisma_Without_Hi_Near: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_Without_Hi_Near ?? '',
        Prisma_OS_Prisma_Without_Ho_Near: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_Without_Ho_Near ?? '',
        Prisma_OS_Prisma_Without_Xt_Near: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_Without_Xt_Near ?? '',
        Prisma_OD_Prisma_With_Et_Distance: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_With_Et_Distance ?? '',
        Prisma_OD_Prisma_With_Hi_Distance: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_With_Hi_Distance ?? '',
        Prisma_OD_Prisma_With_Ho_Distance: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_With_Ho_Distance ?? '',
        Prisma_OD_Prisma_With_Xt_Distance: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_With_Xt_Distance ?? '',
        Prisma_OD_Prisma_Without_Distance: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_Without_Distance ?? '',
        Prisma_OS_Prisma_With_Et_Distance: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_With_Et_Distance ?? '',
        Prisma_OS_Prisma_With_Hi_Distance: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_With_Hi_Distance ?? '',
        Prisma_OS_Prisma_With_Ho_Distance: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_With_Ho_Distance ?? '',
        Prisma_OS_Prisma_With_Xt_Distance: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_With_Xt_Distance ?? '',
        Prisma_OD_Prisma_Without_Et_Distance: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_Without_Et_Distance ?? '',
        Prisma_OD_Prisma_Without_Hi_Distance: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_Without_Hi_Distance ?? '',
        Prisma_OD_Prisma_Without_Ho_Distance: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_Without_Ho_Distance ?? '',
        Prisma_OD_Prisma_Without_Xt_Distance: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Distance ?? '',
        Prisma_OS_Prisma_Without_Et_Distance: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_Without_Et_Distance ?? '',
        Prisma_OS_Prisma_Without_Hi_Distance: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_Without_Hi_Distance ?? '',
        Prisma_OS_Prisma_Without_Ho_Distance: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_Without_Ho_Distance ?? '',
        Prisma_OS_Prisma_Without_Xt_Distance: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_Without_Xt_Distance ?? '',
        Prisma_OD_Prisma_With_Et_Near_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_With_Et_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Hi_Near_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_With_Hi_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Ho_Near_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_With_Ho_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Xt_Near_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_With_Xt_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Near_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_Without_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Et_Near_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_With_Et_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Hi_Near_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_With_Hi_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Ho_Near_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_With_Ho_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Xt_Near_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_With_Xt_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Near_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_Without_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Et_Near_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_Without_Et_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Hi_Near_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_Without_Hi_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Ho_Near_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_Without_Ho_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Xt_Near_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Et_Near_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_Without_Et_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Hi_Near_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_Without_Hi_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Ho_Near_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_Without_Ho_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Xt_Near_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_Without_Xt_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Et_Distance_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_With_Et_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Hi_Distance_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_With_Hi_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Ho_Distance_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_With_Ho_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Xt_Distance_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_With_Xt_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Distance_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_Without_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Et_Distance_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_With_Et_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Hi_Distance_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_With_Hi_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Ho_Distance_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_With_Ho_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Xt_Distance_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_With_Xt_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Et_Distance_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_Without_Et_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Hi_Distance_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_Without_Hi_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Ho_Distance_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_Without_Ho_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Xt_Distance_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Et_Distance_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_Without_Et_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Hi_Distance_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_Without_Hi_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Ho_Distance_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_Without_Ho_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Xt_Distance_Lain_Text: cpptRajal?.Pediatrik?.Prisma_OS_Prisma_Without_Xt_Distance_Lain_Text ?? '',
        Randot_OD_Animal: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Randot_OD_Animal) ? cpptRajal.Pediatrik.Randot_OD_Animal : '',
        Randot_OS_Animal: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Randot_OS_Animal) ? cpptRajal.Pediatrik.Randot_OS_Animal : '',
        Rpl_Streak_OD_Va: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OD_Va) ? cpptRajal.Pediatrik.Rpl_Streak_OD_Va : '',
        Rpl_Streak_OD_Va_Text: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OD_Va_Text) ? cpptRajal.Pediatrik.Rpl_Streak_OD_Va_Text : '',
        Rpl_Streak_OS_Va: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OS_Va) ? cpptRajal.Pediatrik.Rpl_Streak_OS_Va : '',
        Rpl_Streak_OS_Va_Text: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OS_Va_Text) ? cpptRajal.Pediatrik.Rpl_Streak_OS_Va_Text : '',
        Submit_Pediatrik: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Submit_Pediatrik) ? cpptRajal.Pediatrik.Submit_Pediatrik : '',
        Randot_OD_Circles: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Randot_OD_Circles) ? cpptRajal.Pediatrik.Randot_OD_Circles : '',
        Randot_OS_Circles: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Randot_OS_Circles) ? cpptRajal.Pediatrik.Randot_OS_Circles : '',
        Rpl_Streak_OD_False: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OD_False) ? cpptRajal.Pediatrik.Rpl_Streak_OD_False : '',
        Rpl_Streak_OD_False_Text: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OD_False_Text) ? cpptRajal.Pediatrik.Rpl_Streak_OD_False_Text : '',
        Rpl_Streak_OS_False: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OS_False) ? cpptRajal.Pediatrik.Rpl_Streak_OS_False : '',
        Rpl_Streak_OS_False_Text: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OS_False_Text) ? cpptRajal.Pediatrik.Rpl_Streak_OS_False_Text : '',
        Randot_OD_Randot_Form: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Randot_OD_Randot_Form) ? cpptRajal.Pediatrik.Randot_OD_Randot_Form : '',
        Randot_OS_Randot_Form: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Randot_OS_Randot_Form) ? cpptRajal.Pediatrik.Randot_OS_Randot_Form : '',
        Rpl_Streak_OD_Pd_Jauh: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OD_Pd_Jauh) ? cpptRajal.Pediatrik.Rpl_Streak_OD_Pd_Jauh : '',
        Rpl_Streak_OD_Pd_Jauh_Text: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OD_Pd_Jauh_Text) ? cpptRajal.Pediatrik.Rpl_Streak_OD_Pd_Jauh_Text : '',
        Rpl_Streak_OS_Pd_Jauh: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OS_Pd_Jauh) ? cpptRajal.Pediatrik.Rpl_Streak_OS_Pd_Jauh : '',
        Rpl_Streak_OS_Pd_Jauh_Text: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OS_Pd_Jauh_Text) ? cpptRajal.Pediatrik.Rpl_Streak_OS_Pd_Jauh_Text : '',
        Rpl_Streak_OD_Adaptasi: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OD_Adaptasi) ? cpptRajal.Pediatrik.Rpl_Streak_OD_Adaptasi : '',
        Rpl_Streak_OD_Adaptasi_Text: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OD_Adaptasi_Text) ? cpptRajal.Pediatrik.Rpl_Streak_OD_Adaptasi_Text : '',
        Rpl_Streak_OS_Adaptasi: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OS_Adaptasi) ? cpptRajal.Pediatrik.Rpl_Streak_OS_Adaptasi : '',
        Rpl_Streak_OS_Adaptasi_Text: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OS_Adaptasi_Text) ? cpptRajal.Pediatrik.Rpl_Streak_OS_Adaptasi_Text : '',
        Goniometer_OD_Goniometer: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Goniometer_OD_Goniometer) ? cpptRajal.Pediatrik.Goniometer_OD_Goniometer : '',
        Goniometer_OS_Goniometer: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Goniometer_OS_Goniometer) ? cpptRajal.Pediatrik.Goniometer_OS_Goniometer : '',
        Nearvision_OD_Nearvision: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Nearvision_OD_Nearvision) ? cpptRajal.Pediatrik.Nearvision_OD_Nearvision : '',
        // Nearvision_OD_Select: (data && cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Nearvision_OD_Select) ? cpptRajal.Pediatrik.Nearvision_OD_Select : '',
        Nearvision_OD_Select: cpptRajal && cpptRajal.Pediatrik?.Nearvision_OD_Select ? cpptRajal.Pediatrik?.Nearvision_OD_Select : cpptRajal && cpptRajal.Pediatrik?.Nearvision_OD_Nearvision && cpptRajal.Pediatrik?.Nearvision_OD_Nearvision !== '' ? 'Lain-lain' : '',
        Nearvision_OS_Nearvision: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Nearvision_OS_Nearvision) ? cpptRajal.Pediatrik.Nearvision_OS_Nearvision : '',
        Nearvision_OS_Select: cpptRajal && cpptRajal.Pediatrik?.Nearvision_OS_Select ? cpptRajal.Pediatrik?.Nearvision_OS_Select : cpptRajal && cpptRajal.Pediatrik?.Nearvision_OS_Nearvision && cpptRajal.Pediatrik?.Nearvision_OS_Nearvision !== '' ? 'Lain-lain' : '',
        Rpl_Streak_OD_Streak_Cyl: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OD_Streak_Cyl) ? cpptRajal.Pediatrik.Rpl_Streak_OD_Streak_Cyl : '',
        Rpl_Streak_OD_Streak_Sph: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OD_Streak_Sph) ? cpptRajal.Pediatrik.Rpl_Streak_OD_Streak_Sph : '',
        Rpl_Streak_OS_Streak_Cyl: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OS_Streak_Cyl) ? cpptRajal.Pediatrik.Rpl_Streak_OS_Streak_Cyl : '',
        Rpl_Streak_OS_Streak_Sph: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OS_Streak_Sph) ? cpptRajal.Pediatrik.Rpl_Streak_OS_Streak_Sph : '',
        Cardif_OD_Test_Distance_1: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cardif_OD_Test_Distance_1) ? cpptRajal.Pediatrik.Cardif_OD_Test_Distance_1 : '',
        Cardif_OS_Test_Distance_1: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cardif_OS_Test_Distance_1) ? cpptRajal.Pediatrik.Cardif_OS_Test_Distance_1 : '',
        Rpl_Streak_OD_Streak_Axis: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OD_Streak_Axis) ? cpptRajal.Pediatrik.Rpl_Streak_OD_Streak_Axis : '',
        Rpl_Streak_OS_Streak_Axis: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Rpl_Streak_OS_Streak_Axis) ? cpptRajal.Pediatrik.Rpl_Streak_OS_Streak_Axis : '',
        Cardif_OD_Test_Distance_50: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cardif_OD_Test_Distance_50) ? cpptRajal.Pediatrik.Cardif_OD_Test_Distance_50 : '',
        Cardif_OS_Test_Distance_50: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Cardif_OS_Test_Distance_50) ? cpptRajal.Pediatrik.Cardif_OS_Test_Distance_50 : '',
        Ptosis_OD_FIP: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Ptosis_OD_FIP) ? cpptRajal.Pediatrik.Ptosis_OD_FIP : '',
        Ptosis_OS_FIP: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Ptosis_OS_FIP) ? cpptRajal.Pediatrik.Ptosis_OS_FIP : '',
        Ptosis_OD_MRD: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Ptosis_OD_MRD) ? cpptRajal.Pediatrik.Ptosis_OD_MRD : '',
        Ptosis_OS_MRD: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Ptosis_OS_MRD) ? cpptRajal.Pediatrik.Ptosis_OS_MRD : '',
        Ptosis_OD_LA: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Ptosis_OD_LA) ? cpptRajal.Pediatrik.Ptosis_OD_LA : '',
        Ptosis_OS_LA: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Ptosis_OS_LA) ? cpptRajal.Pediatrik.Ptosis_OS_LA : '',
        TNO_Stereoskopis_ODS_1: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.TNO_Stereoskopis_ODS_1) ? cpptRajal.Pediatrik.TNO_Stereoskopis_ODS_1 : '',
        TNO_Stereoskopis_ODS_2: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.TNO_Stereoskopis_ODS_2) ? cpptRajal.Pediatrik.TNO_Stereoskopis_ODS_2 : '',
        TNO_Stereoskopis_ODS_3: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.TNO_Stereoskopis_ODS_3) ? cpptRajal.Pediatrik.TNO_Stereoskopis_ODS_3 : '',
        TNO_Stereoskopis_ODS_4: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.TNO_Stereoskopis_ODS_4) ? cpptRajal.Pediatrik.TNO_Stereoskopis_ODS_4 : '',
        TNO_Stereoskopis_ODS_5: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.TNO_Stereoskopis_ODS_5) ? cpptRajal.Pediatrik.TNO_Stereoskopis_ODS_5 : '',
        Goniometer_ODS_Goniometer: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Goniometer_ODS_Goniometer) ? cpptRajal.Pediatrik.Goniometer_ODS_Goniometer : '',
        Goniometer_ODS_Right_Check: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Goniometer_ODS_Right_Check) ? cpptRajal.Pediatrik.Goniometer_ODS_Right_Check : '',
        Goniometer_ODS_Left_Check: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.Goniometer_ODS_Left_Check) ? cpptRajal.Pediatrik.Goniometer_ODS_Left_Check : '',
        VOD: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.VOD) ? cpptRajal.Pediatrik.VOD : '',
        VOS: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.VOS) ? cpptRajal.Pediatrik.VOS : '',
        VOD_Text: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.VOD_Text) ? cpptRajal.Pediatrik.VOD_Text : '',
        VOS_Text: (cpptRajal && cpptRajal.Pediatrik && cpptRajal.Pediatrik.VOS_Text) ? cpptRajal.Pediatrik.VOS_Text : '',
      },
    },
  });

  const { isDirty } = formState;

  useWarnIfUnsavedChanges(isDirty, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  const { fields, append, remove, insert } = useFieldArray({ name: 'resep', control })

  useEffect(() => {
    if (cpptRajal) {
      if (cpptRajal.Submit_Pediatrik && cpptRajal.Submit_Pediatrik === 0) {
        setShowPediatric(false);
      } else if (cpptRajal.Submit_Pediatrik === 1) {
        setShowPediatric(true);
      }

      if (cpptRajal.Submit_Mata && cpptRajal.Submit_Mata === 0) {
        setShowEye(false);
      } else if (cpptRajal.Submit_Mata === 1) {
        setShowEye(true);
      }

      if (cpptRajal.Submit_Retina && cpptRajal.Submit_Retina === 0) {
        setShowRetina(false);
      } else if (cpptRajal.Submit_Retina === 1) {
        setShowRetina(true);
      }
    }
  }, [cpptRajal])

  useEffect(() => {
    if (recipe && Array.isArray(recipe)) {
      const destructured = recipe.map((item: IPrescription) => {
        return {
          meds_name: item.ID_Obat,
          total: item.Jumlah,
          how_to_use: item.ID_AturanPakai,
          notes: item.Catatan,
          nama_obat: item.Nama_Obat,
          aturan_pakai: item.Kode_AturanPakai,
          satuan: item.Nama_Satuan,
        }
      })
      append(destructured, false);
    }
  }, [recipe])

  const handleAddMedsFromPackage = (items: Array<IPrescription>) => {
    const newRecipe = items.map((item: IPrescription) => {
      return {
        meds_name: item.ID_Obat,
        total: item.Jumlah,
        how_to_use: item.ID_AturanPakai,
        notes: item.Catatan,
        nama_obat: item.Nama_Obat,
        aturan_pakai: item.Kode_AturanPakai,
        satuan: item.Nama_Satuan,
      }
    })
    append(newRecipe);
  }

  const toBase64 = (file: any) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  })

  const { getRootProps: getFilesProps, getInputProps: getInputFilesProps } = useDropzone({ multiple: false,
    accept: 'image/jpg,image/jpeg',
    onDrop: useCallback(acceptedFiles => {
      const toUpload = acceptedFiles.map((file: any) => Object.assign(file));
      toBase64(toUpload[0]).then((base64: any) => {
        if (!treatment) return;
        UploadToCloudService().uploadImageCloud({
          emr_id: treatment.EMR_ID,
          form_name: 'cppt/rawat-jalan',
          component_id: 'picture_data_o',
          image: base64,
        }).then(response => {
          const { data } = response.data;
          const p = {
            Url_Image_Cppt_Data_O: data.signUrl,
            Name_Image_Cppt_Data_O: toUpload[0].name,
            Size_Image_Cppt_Data_O: toUpload[0].size,
            Type_Image_Cppt_Data_O: toUpload[0].type,
          }
          setValue('picture_data_o', p);
        })
      })
      setFiles(toUpload)
    }, [files])})

  const handleRemoveFile = (file: any) => {
    setFiles([]);
    const p = {
      Url_Image_Cppt_Data_O: '',
      Name_Image_Cppt_Data_O: '',
      Size_Image_Cppt_Data_O: '',
      Type_Image_Cppt_Data_O: '',
    }
    setValue('picture_data_o', p);
  }
  
  const { getRootProps: getFilesProps2, getInputProps: getInputFilesProps2 } = useDropzone({ multiple: false,
    accept: 'image/jpg,image/jpeg',
    onDrop: useCallback(acceptedFiles => {
      const toUpload2 = acceptedFiles.map((file: any) => Object.assign(file));
      toBase64(toUpload2[0]).then((base64: any) => {
        if (!treatment) return;
        UploadToCloudService().uploadImageCloud({
          emr_id: treatment.EMR_ID,
          form_name: 'cppt/rawat-jalan',
          component_id: 'image_2',
          image: base64,
        }).then(response => {
          const { data } = response.data;
          const z = {
            Url_Image: data.signUrl,
            Name_Image: toUpload2[0].name,
            Size_Image: toUpload2[0].size,
            Type_Image: toUpload2[0].type,
          }
          setValue('image_2', z);
        })
      })
      setFiles2(toUpload2)
    }, [files2])})

  const handleRemoveFile2 = (file: any) => {
    setFiles2([]);
    const p = {
      Url_Image: '',
      Name_Image: '',
      Size_Image: '',
      Type_Image: '',
    }
    setValue('image_2', p);
  }

  useEffect(() => {
    if (cpptRajal && cpptRajal.Picture_Data_O && cpptRajal.Picture_Data_O.Url_Image_Cppt_Data_O && cpptRajal.Picture_Data_O.Url_Image_Cppt_Data_O !== '') {
      setFiles([
        {
          name: `${cpptRajal.Picture_Data_O.Name_Image_Cppt_Data_O}`,
          size: cpptRajal.Picture_Data_O.Size_Image_Cppt_Data_O,
          url_real: cpptRajal.Picture_Data_O.Url_Image_Cppt_Data_O,
        },
      ])
    }
    if (cpptRajal && cpptRajal.Image_2 && cpptRajal.Image_2.Url_Image && cpptRajal.Image_2.Url_Image !== '') {
      setFiles2([
        {
          name: `${cpptRajal.Image_2.Name_Image}`,
          size: cpptRajal.Image_2.Size_Image,
          url_real: cpptRajal.Image_2.Url_Image,
        },
      ])
    }
  }, [cpptRajal]);

  const renderFilePreview = (file: any) => {
    if (file.url_real) {
      const { publicRuntimeConfig } = getConfig();
      return <Image className='rounded' alt={file.name} src={file.url_real} width='100' height='100' />
    } else if (file.type && file.type.startsWith('image')) {
      return <Image className='rounded' alt={file.name} src={URL.createObjectURL(file)} width='100' height='100' />
    } else {
      return <FileText size='28' />
    }
  }

  const renderFileSize = (size: any) => {
    if (Math.round(size / 100) / 10 > 1000) {
      return `${(Math.round(size / 100) / 10000).toFixed(1)} mb`
    } else {
      return `${(Math.round(size / 100) / 10).toFixed(1)} kb`
    }
  };

  const fileList = files.map((file: any, index: any) => (
    <ListGroupItem key={`${file.name}-${index}`} className='d-flex align-items-center justify-content-between'>
      <div className='file-details d-flex align-items-center'>
        <div className='file-preview me-1'>{renderFilePreview(file)}</div>
        <div>
          <p className='file-name mb-0'>{file.name}</p>
          <p className='file-size mb-0'>{renderFileSize(file.size)}</p>
        </div>
      </div>
      <Button color='danger' outline size='sm' className='btn-icon' onClick={() => handleRemoveFile(file)}>
        <X size={14} color='red' />
      </Button>
    </ListGroupItem>
  ));
  
  const fileList2 = files2.map((file: any, index: any) => (
    <ListGroupItem key={`${file.name}-${index}`} className='d-flex align-items-center justify-content-between'>
      <div className='file-details d-flex align-items-center'>
        <div className='file-preview me-1'>{renderFilePreview(file)}</div>
        <div>
          <p className='file-name mb-0'>{file.name}</p>
          <p className='file-size mb-0'>{renderFileSize(file.size)}</p>
        </div>
      </div>
      <Button color='danger' outline size='sm' className='btn-icon' onClick={() => handleRemoveFile2(file)}>
        <X size={14} color='red' />
      </Button>
    </ListGroupItem>
  ));

  const handleDeleteMed = (index: any) => {
    remove(index);
  }

  const handleAddMed = () => {
    append({ meds_name: '', total: '', how_to_use: '', notes: '', satuan: '' })
  }

  const handleChangeMed = (val: any, i: number) => {
    fields[i].satuan = val.satuan;
    insert(i, fields[i]);
    remove(i);
  }

  const handleDoctorSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue('ttd_dokter_pengkaji', image.Signature);
      setValue('id_dokter_pengkaji', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('ttd_dokter_pengkaji', image.Signature);
      setValue('id_dokter_pengkaji', image.ID_Karyawan);
    }
  }

  const storeToastPrescription = (response: any) => {
    if (response && response.data && response.data.prescription) {
      const presc = response.data.prescription;
      if (!presc.statusCode && presc.message && presc.message === 'socket not found') {
        toast.error(
          <PrescriptionToast error={true} message='Resep gagal terkirim ke SIMRS. Silahkan simpan ulang form!!!'/>,
          { transition: Slide, icon: false, hideProgressBar: true, autoClose: 7000, position: toast.POSITION.TOP_CENTER, className: 'bg-danger' },
        )
      }
      if (presc.statusCode && presc.statusCode === 400) {
        toast.warning(
          <PrescriptionToast error={true} message='Resep gagal terkirim ke SIMRS. Resep sudah ditebus.'/>,
          { transition: Slide, icon: false, hideProgressBar: true, autoClose: 7000, position: toast.POSITION.TOP_CENTER, className: 'bg-warning' },
        )
      }
      if (presc.statusCode && presc.statusCode === 200) {
        toast.info(
          <PrescriptionToast error={false} message='Resep Berhasil Terkirim Ke SIMRS.'/>,
          { transition: Slide, icon: false, hideProgressBar: true, autoClose: 7000, position: toast.POSITION.TOP_CENTER, className: 'bg-success'},
        )
      }
    }
  }

  useEffect(() => {
    if (showRetina) {
      setValue('retina_submit', '1');
    } else if (!showRetina) {
      setValue('retina_submit', '0');
    }
  }, [showRetina])

  useEffect(() => {
    if (showEye) {
      setValue('eye_submit', '1');
    } else if (!showEye) {
      setValue('eye_submit', '0');
    }
  }, [showEye])

  const handleSubmitForm = (value: ICreateCpptOutPatientRequest) => {
    setSignatureErr({ error: false, message: '' });
    setDatasErr({ error: false, message: '' });
    setDataoErr({ error: false, message: '' });
    setDataAErr({ error: false, message: '' });
    setDataPErr({ error: false, message: '' });
    setTimeErr({ error: false, message: '' });
    if (!treatment) {
      return;
    }
    if ((value.ttd_dokter_pengkaji === '' || value.data_s === '' || value.data_o === '' || value.data_a === '' || value.data_p === '' || value.anjuran === '' || value.waktu === '')) {
      if (value.waktu === '') {
        setTimeErr({ error: true, message: 'Waktu harus diisi' });
        document.getElementById('waktu')?.focus()
        return;
      }
      if (value.data_s === '') {
        setDatasErr({ error: true, message: 'S harus diisi' });
        document.getElementById('data_s')?.focus()
        alert('Data SOAP tidak lengkap');
        return;
      }
      if (value.data_o === '') {
        setDataoErr({ error: true, message: 'O harus diisi' });
        document.getElementById('data_o')?.focus()
        alert('Data SOAP tidak lengkap');
        return;
      }
      if (value.data_a === '') {
        setDataAErr({ error: true, message: 'A harus diisi' });
        document.getElementById('data_a')?.focus()
        alert('Data SOAP tidak lengkap');
        return;
      }
      if (value.data_p === '' && value.anjuran === '') {
        setDataPErr({ error: true, message: 'P harus diisi' });
        document.getElementById('data_p')?.focus()
        alert('Data SOAP tidak lengkap');
        return;
      }
      if (value.ttd_dokter_pengkaji === '') {
        setSignatureErr({ error: true, message: 'Tanda Tangan harus diisi' });
        alert('Data SOAP tidak lengkap');
        return;
      }
    }
    setProcessing(true);
    reset(value);
    const appRequest = AppRequest.createFromStore(treatment);
    if (!cpptRajal || (action && action === 'create')) {
      const resep = value.resep;
      const prescriptionModel = ArrayPrescription.createFromForm(resep, doctorPreliminaryStudy?.aturan_pakai);
      const params = CreateCpptOutPatientRequest.createFromJson({...value, ...appRequest, data_o_json: doctorPreliminaryStudy.form, ...prescriptionModel, is_form_doctor: true });
      CpptOutPatientService().create(params)
        .then((response: any) => {
          storeToastPrescription(response);
          dispatch(handlePdfAll(undefined));
          dispatch(handlePdf(undefined));
          CpptOutPatientService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
            CpptOutPatientService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptOutPatientPdf(FindPdfRequest.createFromJson({
                emr_id: treatment.EMR_ID,
                form_name: 'cppt_v3',
              })))
            }).catch(() => {
              setProcessing(false);
            })
          });
          CpptOutPatientService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
            CpptOutPatientService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptOutPatientDayPdf(FindPdfRequest.createFromJson({
                emr_id: treatment.EMR_ID,
                form_name: 'cppt_day_v3',
              })))
            }).catch(() => {
              setProcessing(false);
            })
          });
          if (onSuccessSubmit) {
            onSuccessSubmit();
          }
        });
    } else {
      const resep = value.resep;
      const prescriptionModel = ArrayPrescription.createFromForm(resep, doctorPreliminaryStudy?.aturan_pakai);
      const params = UpdateCpptOutPatientRequest.createFromJson({...value, ...appRequest, data_o_json: cpptRajal.Data_O_Json, ID: cpptRajal.ID, emr_id: cpptRajal.EMR_ID, ...prescriptionModel, is_form_doctor: true });
      console.log("params", params);
      CpptOutPatientService().update(params)
        .then((response: any) => {
          storeToastPrescription(response);
          dispatch(handlePdfAll(undefined));
          if (cpptRajal.EMR_ID === treatment.EMR_ID) {
            dispatch(handlePdf(undefined));
            CpptOutPatientService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
              const { records } = resp.data.data;
              const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
              const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
              CpptOutPatientService().pdfNew(pdfParams).then(() => {
                dispatch(fetchCpptOutPatientDayPdf(FindPdfRequest.createFromJson({
                  emr_id: treatment.EMR_ID,
                  form_name: 'cppt_day_v3',
                })))
              }).catch(() => {
                setProcessing(false);
              })
            });
          }
          CpptOutPatientService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
            CpptOutPatientService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptOutPatientPdf(FindPdfRequest.createFromJson({
                emr_id: treatment.EMR_ID,
                form_name: 'cppt_v3',
              })))
            }).catch(() => {
              setProcessing(false);
            })
          });
          if (onSuccessSubmit) {
            onSuccessSubmit();
          }
        });
    }
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <Input
          type='hidden'
          name='picture_data_o.Url_Image_Cppt_Data_O'
          innerRef={register({ required: true })}
        />
        <Input
          type='hidden'
          name='picture_data_o.Name_Image_Cppt_Data_O'
          innerRef={register({ required: true })}
        />
        <Input
          type='hidden'
          name='picture_data_o.Type_Image_Cppt_Data_O'
          innerRef={register({ required: true })}
        />
        <Input
          type='hidden'
          name='picture_data_o.Size_Image_Cppt_Data_O'
          innerRef={register({ required: true })}
        />
        <Input
          type='hidden'
          name='image_2.Url_Image'
          innerRef={register({ required: true })}
        />
        <Input
          type='hidden'
          name='image_2.Name_Image'
          innerRef={register({ required: true })}
        />
        <Input
          type='hidden'
          name='image_2.Type_Image'
          innerRef={register({ required: true })}
        />
        <Input
          type='hidden'
          name='image_2.Size_Image'
          innerRef={register({ required: true })}
        />
        <Row>
          <Col>
            <h4>Pemeriksaan visus dan refraksi</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            {
              doctorPreliminaryStudy && doctorPreliminaryStudy.formRO && (
                <PreliminaryStudyDetail preliminaryStudy={{ form: doctorPreliminaryStudy.formRO }} />
              )
            }
          </Col>
        </Row>
        <FormGroup className="form-group" row>
          <Input
            id="retina-submit"
            type="hidden"
            name="retina_submit"
            innerRef={register({ required: true })}
            invalid={errors.retina_submit && true} />
          <Input
            id='eye-submit'
            type='hidden'
            name='eye_submit'
            innerRef={register({ required: true })}
            invalid={errors.eye_submit && true}
          />
          <Label md="2">Waktu</Label>
          <Col>
            <Input
              type="datetime-local"
              id="waktu"
              name="waktu"
              innerRef={register({ required: true })}
              invalid={errors.waktu && true} />
          </Col>
          {errors && errors.waktu && <FormFeedback>{errors.waktu.message}</FormFeedback>}
        </FormGroup>
        {
          timeErr && timeErr.error && (
            <Row>
              <Col md='2'></Col>
              <Col>
                <p style={{ fontSize: '10pt' }} className='text-danger'>{timeErr.message}</p>
              </Col>
            </Row>
          )
        }
        <FormGroup className="form-group" row>
          <Label md="2">S</Label>
          <Col>
            <Input
              type="textarea"
              id="data_s"
              name="data_s"
              innerRef={register({ required: true })}
              invalid={errors.data_s && true} />
            <Row>
              <div>
                {
                  datasErr && datasErr.error && (
                    <p style={{ fontSize: '10pt' }} className='text-danger fw-bold text-start mt-1'>{datasErr.message}</p>
                  )
                }
              </div>
            </Row>
          </Col>
        </FormGroup>
        <FormGroup className="form-group">
          <Row>
            <Col>
              <PediatricForm register={register} errors={errors} setValue={setValue} getValues={getValues} defaultSelected={showPediatric} data={cpptRajal?.Pediatrik}/>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">O</Label>
          <Col md="10">
            <Input
              type="textarea"
              id="data_o"
              name="data_o"
              innerRef={register({ required: true })}
              invalid={errors.data_o && true} />
            {
              dataoErr && dataoErr.error && (
                <p style={{ fontSize: '10pt' }} className='text-danger fw-bold text-start mt-1'>{dataoErr.message}</p>
              )
            }
            {errors && errors.data_o && <FormFeedback>{errors.data_o.message}</FormFeedback>}
          </Col>
        </FormGroup>
        <FormGroup className='form-group' row>
          <Col md='6'>
          <div {...getFilesProps()} className="dropzone my-3">
            <input name="logo" placeholder='Logo'  {...getInputFilesProps()} />
            <div className="d-flex align-items-center justify-content-center flex-column">
              <DownloadCloud size="50" />
              <h5>Image I</h5>
              <p className="text-secondary">
              </p>
            </div>
          </div>
          {files.length ? (
            <Fragment>
              <Row>
                <Col md='2'></Col>
                <Col md='10'>
                  <ListGroup className='my-2'>{fileList[0]}</ListGroup>
                </Col>
              </Row>
            </Fragment>
          ) : null}
          </Col>
          <Col md='6'>
          <div {...getFilesProps2()} className="dropzone my-3">
            <input name="logo" placeholder='Logo'  {...getInputFilesProps2()} />
            <div className="d-flex align-items-center justify-content-center flex-column">
              <DownloadCloud size="50" />
              <h5>Image II</h5>
              <p className="text-secondary">
              </p>
            </div>
          </div>
          {files2.length ? (
            <Fragment>
              <Row>
                <Col md='2'></Col>
                <Col md='10'>
                  <ListGroup className='my-2'>{fileList2[0]}</ListGroup>
                </Col>
              </Row>
            </Fragment>
          ) : null}
          </Col>
        </FormGroup>
        <FormGroup className="form-group">
          <Row>
            <Col md='2'></Col>
            <Col md="10">
              {
                showEye && (
                  <div className="d-flex justify-content-around">
                    <EyeImage onSaved={(image: any) => setValue('gambar_mata_od', image)} component="cppt_out_patient_left" formName="gambar_mata_od" initialImage={(cpptRajal && cpptRajal.Gambar_Mata_OD && cpptRajal.Gambar_Mata_OD !== '') ? cpptRajal.Gambar_Mata_OD : undefined} />
                    <EyeImage onSaved={(image: any) => setValue('gambar_mata_os', image)} component="cppt_out_patient_right" formName="gambar_mata_os" initialImage={(cpptRajal && cpptRajal.Gambar_Mata_OS && cpptRajal.Gambar_Mata_OS !== '') ? cpptRajal.Gambar_Mata_OS : undefined} />
                    <Input type="hidden" {...register('gambar_mata_od') as any} />
                    <Input type="hidden" {...register('gambar_mata_os') as any} />
                  </div>
                )
              }
              <Row>
                <Col>
                  {
                    !showEye && <Button type="button" color="primary" size='sm' onClick={() => setShowEye(true)}>+ Gambar Mata</Button>
                  }
                  {
                    showEye && <Button type="button" color="danger" size='sm' onClick={() => setShowEye(false)}>Hapus Gambar Mata</Button>
                  }
                </Col>
              </Row>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup className="form-group">
          <Row>
            <Col md="2">

            </Col>
            <Col md="10">
              {
                showRetina && (
                  <div className="d-flex justify-content-around">
                    <RetinaImage onSaved={(image: any) => setValue('gambar_retina_od', image)} type="right"  component="cppt_out_patient_retina_left" formName="gambar_retina_od" initialImage={(cpptRajal && cpptRajal.Gambar_Retina_OD && cpptRajal.Gambar_Retina_OD !== '') ? cpptRajal.Gambar_Retina_OD : undefined} />
                    <RetinaImage onSaved={(image: any) => setValue('gambar_retina_os', image)} type="left"  component="cppt_out_patient_retina_right" formName="gambar_retina_os" initialImage={(cpptRajal && cpptRajal.Gambar_Retina_OS && cpptRajal.Gambar_Retina_OS !== '') ? cpptRajal.Gambar_Retina_OS : undefined} />
                    <Input type="hidden" {...register('gambar_retina_od') as any} />
                    <Input type="hidden" {...register('gambar_retina_os') as any} />
                  </div>
                )
              }
              <Row>
                <Col>
                  {
                    !showRetina && <Button type="button" color="primary" size='sm' onClick={() => setShowRetina(true)}>+ Gambar Retina</Button>
                  }
                  {
                    showRetina && <Button type="button" color="danger" size='sm' onClick={() => setShowRetina(false)}>Hapus Gambar Retina</Button>
                  }
                </Col>
              </Row>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">A</Label>
          <Col>
            <Input
              type="textarea"
              id="data_a"
              name="data_a"
              innerRef={register({ required: true })}
              invalid={errors.data_a && true} />
            {
              dataAErr && dataAErr.error && (
                <p style={{ fontSize: '10pt' }} className='text-danger fw-bold text-start mt-1'>{dataAErr.message}</p>
              )
            }
            {errors && errors.data_a && <FormFeedback>{errors.data_a.message}</FormFeedback>}
          </Col>
        </FormGroup>
        <FormGroup className="form-group mt-2" row>
          <Label md="2">P</Label>
          <Col>
            <Input
              type="textarea"
              style={{ height: '110px' }}
              id="data_p"
              name="data_p"
              innerRef={register({ required: true })}
              invalid={errors.data_p && true} />
          </Col>
        </FormGroup>
        <FormGroup className="form-group mt-2" row>
          <Label md="2">Anjuran</Label>
          <Col>
            <Input
              type="textarea"
              id="anjuran"
              name="anjuran"
              innerRef={register({ required: true })}
              invalid={errors.anjuran && true} />
            {
              dataPErr && dataPErr.error && (
                <p style={{ fontSize: '10pt' }} className='text-danger fw-bold text-start mt-1'>{dataPErr.message}</p>
              )
            }
            {errors && errors.anjuran && <FormFeedback>{errors.anjuran.message}</FormFeedback>}
          </Col>
        </FormGroup>
        <FormGroup className='form-group mt-2' row>
          {
            doctorPreliminaryStudy && cpptRajal && cpptRajal.formFarmasi && cpptRajal.formFarmasi.Status_Tebus && cpptRajal.formFarmasi.Status_Tebus === '1' && !copy ? (
              <>
                <Table bordered style={{ width: '100%' }}>
                  <thead>
                    <tr style={{ textAlign: 'center' }}>
                      <td className='pt-0' style={{ width: '5%' }}><b>No</b></td>
                      <td className='pt-2' style={{ width: '40%' }}><b>{`Nama & Dosis`}</b></td>
                      <td className='pt-0'><b>Satuan</b></td>
                      <td className='pt-0' style={{ width: '50px' }}><b>Jumlah</b></td>
                      <td className='pt-2' style={{ width: '25%' }}><b>Aturan Pakai</b></td>
                      <td className='pt-2'style={{ width: '30%' }}><b>Catatan</b></td>
                      <td className='pt-0' style={{ width: '5%' }}></td>
                    </tr>
                  </thead>
                  <tbody>
                    {fields && fields.map((rec, i: number) => {
                      return (
                        <tr key={rec.id}>
                          <td>{`${i + 1}`}</td>
                          <td>
                            <Controller
                              control={control}
                              name={`resep[${i}].meds_name` as const}
                              defaultValue={{ label: rec.nama_obat, value: rec.meds_name }}
                              render={({ onChange, name, ref }) => (
                                <BaseSelect
                                  ref={ref}
                                  defaultValue={{ label: rec.nama_obat, value: rec.meds_name }}
                                  options={doctorPreliminaryStudy && doctorPreliminaryStudy?.obat.map((med: Medicine) => ({ label: med.Nama_Inventory, value: med.Kode_Inventory, satuan: med.Nama_Satuan }))}
                                  name={name}
                                  isDisabled
                                  onChange={(val: any) => {
                                    onChange(val);
                                    handleChangeMed(val, i);
                                  } } />
                              )} />
                          </td>
                          <td>
                            {rec.satuan}
                          </td>
                          <td>
                            <Input
                              type='number'
                              name={`resep[${i}].total` as const}
                              defaultValue={rec.total}
                              innerRef={register()}
                              style={{ width: '50px' }}
                              readOnly />
                          </td>
                          <td>
                            <Controller
                              control={control}
                              name={`resep[${i}].how_to_use` as const}
                              defaultValue={{ label: rec.aturan_pakai, value: rec.aturan_pakai, id: rec.how_to_use }}
                              render={({ onChange, name, ref }) => (
                                <BaseSelect
                                  ref={ref}
                                  defaultValue={{ label: rec.aturan_pakai, value: rec.aturan_pakai, id: rec.how_to_use }}
                                  options={doctorPreliminaryStudy && doctorPreliminaryStudy?.aturan_pakai.map((med: HowToUse) => ({ label: med.Kode, value: med.Kode, id: med.ID_AturanPakai }))}
                                  name={name}
                                  isDisabled
                                  onChange={(val: any) => {
                                    onChange(val);
                                  } } />
                              )} />
                          </td>
                          <td>
                            <Input
                              type='text'
                              name={`resep[${i}].notes` as const}
                              defaultValue={rec.notes}
                              readOnly
                              innerRef={register()} />
                          </td>
                          <td>
                            <Button style={{ padding: '4px' }} color='danger' type='button' disabled>
                              <Trash size={15} />
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table></>
            ) : (
              <Table bordered style={{ width: '100%' }}>
                <thead>
                  <tr style={{ textAlign: 'center' }}>
                    <td className='pt-0' style={{ width: '5%' }}><b>No</b></td>
                    <td className='pt-2' style={{ width: '40%' }}><b>{`Nama & Dosis`}</b></td>
                    <td className='pt-0'><b>Satuan</b></td>
                    <td className='pt-0' style={{ width: '50px' }}><b>Jumlah</b></td>
                    <td className='pt-2' style={{ width: '25%' }}><b>Aturan Pakai</b></td>
                    <td className='pt-2'style={{ width: '30%' }}><b>Catatan</b></td>
                    <td className='pt-0' style={{ width: '5%' }}></td>
                  </tr>
                </thead>
                <tbody>
                  {
                    fields && fields.map((rec, i: number) => {
                      return (
                        <tr key={rec.id}>
                          <td className='pt-0'>{`${i + 1}`}</td>
                          <td className='pt-2'>
                            <Controller
                              control={control}
                              name={`resep[${i}].meds_name`}
                              defaultValue={{ label: rec.nama_obat, value: rec.meds_name }}
                              render={({ onChange, name, ref }) => (
                                <Fragment>
                                  <FixRequiredSelect
                                    {...props}
                                    required={true}
                                    name={name}
                                    defaultValue={{ label: rec.nama_obat, value: rec.meds_name }}
                                    onChange={(val: any) => {
                                      onChange(val);
                                      handleChangeMed(val, i);
                                    }}
                                    SelectComponent={BaseSelect}
                                    options={doctorPreliminaryStudy && doctorPreliminaryStudy?.obat.map((med: Medicine) => ({ label: med.Nama_Inventory, value: med.Kode_Inventory, satuan: med.Nama_Satuan }))}
                                  />
                                </Fragment>
                              )}
                            />
                          </td>
                          <td className='pt-0'>
                            {
                              rec.satuan
                            }
                          </td>
                          <td className='pt-0'>
                            <Input
                              type='number'
                              name={`resep[${i}].total`}
                              defaultValue={rec.total}
                              innerRef={register()}
                              style={{ width: '50px' }}
                              required
                            />
                          </td>
                          <td className='pt-2'>
                            <Controller
                              control={control}
                              name={`resep[${i}].how_to_use`}
                              defaultValue={{ label: rec.aturan_pakai, value: rec.aturan_pakai, id: rec.how_to_use }}
                              render={({ onChange, name, ref }) => (
                                <Fragment>
                                  <FixRequiredSelect
                                    {...props}
                                    required={true}
                                    name={name}
                                    defaultValue={{ label: rec.aturan_pakai, value: rec.aturan_pakai, id: rec.how_to_use }}
                                    onChange={(val: any) => {
                                      onChange(val);
                                    }}
                                    SelectComponent={BaseSelect}
                                    options={doctorPreliminaryStudy && doctorPreliminaryStudy.aturan_pakai.map((med: HowToUse) => ({ label: med.Kode, value: med.Kode, id: med.ID_AturanPakai }))}
                                  />
                                </Fragment>
                              )}
                            />
                          </td>
                          <td className='pt-0'>
                            <Input
                              type='text'
                              name={`resep[${i}].notes`}
                              defaultValue={rec.notes}
                              innerRef={register()}
                            />
                          </td>
                          <td>
                            <Button style={{ padding: '4px' }} color='danger' type='button' onClick={ () => handleDeleteMed(i)}>
                              <Trash size={15} />
                            </Button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </Table>
            )
          }
        </FormGroup>
        <FormGroup>
          {
            cpptRajal && cpptRajal.formFarmasi && cpptRajal.formFarmasi.Status_Tebus && cpptRajal.formFarmasi.Status_Tebus === '1' && !copy ? (
              <>
                <Button style={{ padding: '4px', marginTop: '8px' }} color='primary' type='button' className='me-1' disabled>
                  <Plus size={15} />
                  Tambah Obat
                </Button>
                <MedsPackage
                  disabled
                  data={doctorPreliminaryStudy.paket_obat ? doctorPreliminaryStudy.paket_obat : undefined}
                  allMeds={doctorPreliminaryStudy.obat ? doctorPreliminaryStudy.obat : undefined}
                  allHtu={doctorPreliminaryStudy.aturan_pakai ? doctorPreliminaryStudy.aturan_pakai : undefined}
                  onSelectPackage={(selected: any) => handleAddMedsFromPackage(selected)}
                />
              </>
            ) : (
              <>
                <Button style={{ padding: '4px', marginTop: '8px' }} color='primary' type='button' className='me-1' onClick={() => handleAddMed()}>
                  <Plus size={15} />
                  Tambah Obat
                </Button>
                <MedsPackage
                  data={doctorPreliminaryStudy.paket_obat ? doctorPreliminaryStudy.paket_obat : undefined}
                  allMeds={doctorPreliminaryStudy.obat ? doctorPreliminaryStudy.obat : undefined}
                  allHtu={doctorPreliminaryStudy.aturan_pakai ? doctorPreliminaryStudy.aturan_pakai : undefined}
                  onSelectPackage={(selected: any) => handleAddMedsFromPackage(selected)}
                />
              </>
            )
          }
        </FormGroup>
        <FormGroup>
          {
            cpptRajal && cpptRajal.formFarmasi && cpptRajal.formFarmasi.Status_Tebus && cpptRajal.formFarmasi.Status_Tebus === '1' && (
              <>
                <Label className='text-danger mt-2'>
                  *Resep yang sudah ditebus
                </Label>
                <Table bordered style={{ width: '100%' }}>
                  <thead>
                    <tr style={{ textAlign: 'center' }}>
                      <td className='pt-0' style={{ width: '5%' }}><b>No</b></td>
                      <td className='pt-2' style={{ width: '40%' }}><b>{`Nama & Dosis`}</b></td>
                      <td className='pt-0'><b>Satuan</b></td>
                      <td className='pt-0' style={{ width: '50px' }}><b>Jumlah</b></td>
                      <td className='pt-2' style={{ width: '25%' }}><b>Aturan Pakai</b></td>
                      <td className='pt-2'style={{ width: '30%' }}><b>Catatan</b></td>
                    </tr>
                  </thead>
                  <tbody>
                    {cpptRajal && cpptRajal.formFarmasi && cpptRajal.formFarmasi.Daftar_Tebus && Array.isArray(cpptRajal.formFarmasi.Daftar_Tebus) && cpptRajal.formFarmasi.Daftar_Tebus.length > 0 && cpptRajal.formFarmasi.Daftar_Tebus.map((item: IDaftarTebus, key: number) => (
                      <tr key={key}>
                        <td>{`${key + 1}`}</td>
                        <td>{item.Nama_Obat}</td>
                        <td>{item.Nama_Satuan}</td>
                        <td>{item.Jumlah}</td>
                        <td>{item.Kode_AturanPakai}</td>
                        <td>{item.Catatan}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table></>
            )
          }
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">Instruksi PPA</Label>
          <Col>
            <Input
              type="textarea"
              id="instruksi_ppa"
              name="instruksi_ppa"
              innerRef={register({ required: true })}
              invalid={errors.instruksi_ppa && true} />
          </Col>
          {errors && errors.instruksi_ppa && <FormFeedback>{errors.instruksi_ppa.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-group mt-2" row>
          <Label md="2">Konsultasi</Label>
          <Col>
            <Input
              type="textarea"
              id="konsultasi"
              name="konsultasi"
              innerRef={register({ required: false })}
              readOnly
              invalid={errors.konsultasi && true} />
          </Col>
          {errors && errors.konsultasi && <FormFeedback>{errors.konsultasi.message}</FormFeedback>}
        </FormGroup>
        <div className="d-flex justify-content-around my-1">
          <Signature
            label="Dokter"
            type="picker"
            unit='dokter'
            persons={doctors}
            initialImage={(cpptRajal && cpptRajal.TTD_Dokter_Pengkaji && cpptRajal.TTD_Dokter_Pengkaji !== '') ? cpptRajal.TTD_Dokter_Pengkaji : undefined}
            additionalLabel={(cpptRajal) ? cpptRajal.Nama_Dokter_Pengkaji : undefined}
            onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
              if (isFormDoctor) {
                handleDoctorSigned(assigner, isFormDoctor)
              }
              if (!isFormDoctor) {
                handleDoctorSigned(assigner)
              }
            }} />
          <Input
            type="hidden"
            name="id_dokter_pengkaji"
            innerRef={register({ required: true })}
            invalid={errors.id_dokter_pengkaji && true} />
          <Input
            type="hidden"
            name="ttd_dokter_pengkaji"
            innerRef={register({ required: true })}
            invalid={errors.ttd_dokter_pengkaji && true} />
        </div>
        {
          signatureErr && signatureErr.error && (
            <div>
              <p style={{ fontSize: '10pt' }} className='text-danger fw-bold text-center'>{signatureErr.message}</p>
            </div>
          )
        }
        <FormGroup className="d-flex mb-0 justify-content-center">
          <SubmitButton
            buttonColor='primary'
            spinnerColor='light'
            processing={processing}
            label="Simpan"
            spinnerStyle={{ width: '1rem', height: '1rem' }}
          />
          <Button color="warning" type="button" onClick={() => {
            if (onCancel) {
              onCancel();
            }
          }}>Cancel</Button>
        </FormGroup>
      </Form>
    </Fragment>
  )
}

export default CpptOutPatientForm;
