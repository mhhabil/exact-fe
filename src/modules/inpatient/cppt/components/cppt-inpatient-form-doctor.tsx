import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, ListGroup, ListGroupItem, Row, Table } from "reactstrap";
import { CPPTPDFRequest, RootPDFRequest } from "@src/shared/request/requests/cppt-pdf.request";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { CreateCpptInpatientDoctorRequest, ICreateCpptInpatientDoctorRequest, UpdateCpptInpatientDoctorRequest } from "../requests";
import { DoctorPreliminaryStudyModel, HowToUse, IDaftarTebus, IPrescription, Medicine } from "@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model";
import { DownloadCloud, FileText, Plus, Trash, X } from "react-feather";
import { Fragment, useCallback, useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";
import { fetchCpptInpatientDayPdf, fetchCpptInpatientPdf, handlePdf, handlePdfAll } from "../stores/cppt-inpatient.store";
import { AppRequest } from "@src/shared/request";
import { ArrayPrescription } from "@src/modules/outpatient/doctor-preliminary-study/requests/update-doctor-preliminary-study.request";
import BaseSelect from 'react-select';
import { CpptInpatientService } from "../services";
import { CreateCpptRoRequest } from "@src/modules/ro/cppt/requests";
import { EyeImage } from "@src/shared/eye-image/components";
import { FindPdfRequest } from "@src/shared/pdf";
import FixRequiredSelect from "@src/shared/input/components/FixRequiredSelect";
import { IDoctorVisit } from "../models/cppt-inpatient.model";
import Image from 'next/image';
import { MedsPackage } from "@src/shared/meds-package/components";
import PediatricForm from "@src/modules/outpatient/doctor-preliminary-study/components/pediatric-form";
import PreliminaryStudyDetail from "@src/modules/ro/preliminary-study/components/preliminary-study-detail";
import { PrescriptionToast } from "@src/shared/alert/components";
import { RetinaImage } from "@src/shared/retina-image/components";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { SubmitButton } from "@src/shared/button";
import { UploadToCloudService } from "@src/shared/upload-cloud-storage/services";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useDropzone } from "react-dropzone";
import { useWarnIfUnsavedChanges } from "@src/shared/alert";
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

const CpptInpatientFormDoctor = (props: { doctorPreliminaryStudy: DoctorPreliminaryStudyModel | any, cpptRanap?: any, onSuccessSubmit?: any, onCancel?: any, action?: any, copy?: boolean, visits: Array<IDoctorVisit> }) => {

  const { doctorPreliminaryStudy, cpptRanap, onSuccessSubmit, onCancel, action, copy, visits  } = props;
  const dispatch = useAppDispatch();
  const [processing, setProcessing] = useState(false);
  const { doctors } = useAppSelector(state => state.doctor);
  const { treatment } = useAppSelector(state => state.patient);
  const { consultationLinkRanap } = useAppSelector(state => state.cpptInpatient);
  const [signatureErr, setSignatureErr] = useState({ error: false, message: '' });
  const [datasErr, setDatasErr] = useState({ error: false, message: '' });
  const [dataoErr, setDataoErr] = useState({ error: false, message: '' });
  const [dataAErr, setDataAErr] = useState({ error: false, message: '' });
  const [dataPErr, setDataPErr] = useState({ error: false, message: '' });
  const [timeErr, setTimeErr] = useState({ error: false, message: '' });
  const [files, setFiles] = useState<any>([])
  const [recipe, setRecipe] = useState<any>(cpptRanap && cpptRanap.Resep ? cpptRanap.Resep : consultationLinkRanap && consultationLinkRanap.Balas_Resep ? consultationLinkRanap.Balas_Resep : []);
  const [allowFill, setAllowFill] = useState<boolean>(!!(cpptRanap && cpptRanap.ID_Berobat && cpptRanap.ID_Berobat !== ''))

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
      id_berobat: cpptRanap?.ID_Berobat ?? '',
      data_s: (cpptRanap && cpptRanap.Data_S) ? cpptRanap.Data_S : doctorPreliminaryStudy?.formRO?.ID_Keluhan === 'Lain-lain' ? doctorPreliminaryStudy.formRO.Keluhan_Lain : doctorPreliminaryStudy?.formRO?.Keluhan ? doctorPreliminaryStudy?.formRO?.Keluhan : '',
      data_o: cpptRanap?.Data_O ?? '',
      data_a: cpptRanap?.Data_A ?? '',
      data_a_text: cpptRanap?.Data_A_Text ?? '',
      data_p: cpptRanap && cpptRanap.Data_P ? cpptRanap.Data_P : consultationLinkRanap && consultationLinkRanap.Anjuran ? consultationLinkRanap.Anjuran : '',
      anjuran: cpptRanap?.Anjuran ?? '',
      instruksi_ppa: cpptRanap?.Instruksi_PPA ?? '',
      waktu: copy ? convertDatetimeToUTC() : cpptRanap && cpptRanap.Waktu ? cpptRanap.Waktu : convertDatetimeToUTC(),
      id_perawat_cppt: cpptRanap?.Id_Perawat_Cppt ?? '',
      ttd_perawat_cppt: cpptRanap?.TTD_Perawat_Cppt ?? '',
      gambar_mata_od: cpptRanap?.Gambar_Mata_OD ?? undefined,
      gambar_mata_os: cpptRanap?.Gambar_Mata_OS ?? undefined,
      gambar_retina_od: cpptRanap?.Gambar_Retina_OD ?? undefined,
      gambar_retina_os: cpptRanap?.Gambar_Retina_OS ?? undefined,
      id_dokter_pengkaji: cpptRanap?.Id_Dokter_Pengkaji ?? '',
      ttd_dokter_pengkaji: cpptRanap?.TTD_Dokter_Pengkaji ?? '',
      retina_submit: cpptRanap?.Submit_Retina ?? 0,
      eye_submit: cpptRanap?.Submit_Mata ?? 0,
      pediatric_submit: cpptRanap?.Submit_Pediatrik ?? 0,
      picture_data_o: {
        Url_Image_Cppt_Data_O: cpptRanap && cpptRanap.Picture_Data_O && cpptRanap.Picture_Data_O.Url_Image_Cppt_Data_O ? cpptRanap.Picture_Data_O.Url_Image_Cppt_Data_O : '',
        Name_Image_Cppt_Data_O: cpptRanap && cpptRanap.Picture_Data_O && cpptRanap.Picture_Data_O.Name_Image_Cppt_Data_O ? cpptRanap.Picture_Data_O.Name_Image_Cppt_Data_O : '',
        Type_Image_Cppt_Data_O: cpptRanap && cpptRanap.Picture_Data_O && cpptRanap.Picture_Data_O.Type_Image_Cppt_Data_O ? cpptRanap.Picture_Data_O.Type_Image_Cppt_Data_O : '',
        Size_Image_Cppt_Data_O: cpptRanap && cpptRanap.Picture_Data_O && cpptRanap.Picture_Data_O.Size_Image_Cppt_Data_O ? cpptRanap.Picture_Data_O.Size_Image_Cppt_Data_O : '',
      },
      pediatric: {
        Hes_OD_Hes: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Hes_OD_Hes) ? cpptRanap.Pediatrik.Hes_OD_Hes : '',
        Hes_OS_Hes: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Hes_OS_Hes) ? cpptRanap.Pediatrik.Hes_OS_Hes : '',
        Okn_OD_Okn: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Okn_OD_Okn) ? cpptRanap.Pediatrik.Okn_OD_Okn : '',
        Okn_OS_Okn: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Okn_OS_Okn) ? cpptRanap.Pediatrik.Okn_OS_Okn : '',
        Raf_OD_Raf: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Raf_OD_Raf) ? cpptRanap.Pediatrik.Raf_OD_Raf : '',
        Raf_OS_Raf: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Raf_OS_Raf) ? cpptRanap.Pediatrik.Raf_OS_Raf : '',
        Tac_OD_At_38: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Tac_OD_At_38) ? cpptRanap.Pediatrik.Tac_OD_At_38 : '',
        Tac_OD_At_55: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Tac_OD_At_55) ? cpptRanap.Pediatrik.Tac_OD_At_55 : '',
        Tac_OD_At_84: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Tac_OD_At_84) ? cpptRanap.Pediatrik.Tac_OD_At_84 : '',
        Tac_OS_At_38: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Tac_OS_At_38) ? cpptRanap.Pediatrik.Tac_OS_At_38 : '',
        Tac_OS_At_55: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Tac_OS_At_55) ? cpptRanap.Pediatrik.Tac_OS_At_55 : '',
        Tac_OS_At_84: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Tac_OS_At_84) ? cpptRanap.Pediatrik.Tac_OS_At_84 : '',
        Cover_OD_Cover_1: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OD_Cover_1) ? cpptRanap.Pediatrik.Cover_OD_Cover_1 : '0',
        Cover_OD_Cover_Text_1: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OD_Cover_Text_1) ? cpptRanap.Pediatrik.Cover_OD_Cover_Text_1 : '',
        Cover_OD_Cover_2: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OD_Cover_2) ? cpptRanap.Pediatrik.Cover_OD_Cover_2 : '0',
        Cover_OD_Cover_Text_2: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OD_Cover_Text_2) ? cpptRanap.Pediatrik.Cover_OD_Cover_Text_2 : '',
        Cover_OD_Cover_3: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OD_Cover_3) ? cpptRanap.Pediatrik.Cover_OD_Cover_3 : '0',
        Cover_OD_Cover_Text_3: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OD_Cover_Text_3) ? cpptRanap.Pediatrik.Cover_OD_Cover_Text_3 : '',
        Cover_OD_Cover_4: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OD_Cover_4) ? cpptRanap.Pediatrik.Cover_OD_Cover_4 : '0',
        Cover_OD_Cover_Text_4: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OD_Cover_Text_4) ? cpptRanap.Pediatrik.Cover_OD_Cover_Text_4 : '',
        Cover_OD_Cover_5: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OD_Cover_5) ? cpptRanap.Pediatrik.Cover_OD_Cover_5 : '0',
        Cover_OD_Cover_Text_5: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OD_Cover_Text_5) ? cpptRanap.Pediatrik.Cover_OD_Cover_Text_5 : '',
        Cover_OD_Cover_6: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OD_Cover_6) ? cpptRanap.Pediatrik.Cover_OD_Cover_6 : '0',
        Cover_OD_Cover_Text_6: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OD_Cover_Text_6) ? cpptRanap.Pediatrik.Cover_OD_Cover_Text_6 : '',
        Cover_OS_Cover_1: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OS_Cover_1) ? cpptRanap.Pediatrik.Cover_OS_Cover_1 : '0',
        Cover_OS_Cover_Text_1: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OS_Cover_Text_1) ? cpptRanap.Pediatrik.Cover_OS_Cover_Text_1 : '',
        Cover_OS_Cover_2: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OS_Cover_2) ? cpptRanap.Pediatrik.Cover_OS_Cover_2 : '0',
        Cover_OS_Cover_Text_2: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OS_Cover_Text_2) ? cpptRanap.Pediatrik.Cover_OS_Cover_Text_2 : '',
        Cover_OS_Cover_3: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OS_Cover_3) ? cpptRanap.Pediatrik.Cover_OS_Cover_3 : '0',
        Cover_OS_Cover_Text_3: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OS_Cover_Text_3) ? cpptRanap.Pediatrik.Cover_OS_Cover_Text_3 : '',
        Cover_OS_Cover_4: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OS_Cover_4) ? cpptRanap.Pediatrik.Cover_OS_Cover_4 : '0',
        Cover_OS_Cover_Text_4: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OS_Cover_Text_4) ? cpptRanap.Pediatrik.Cover_OS_Cover_Text_4 : '',
        Cover_OS_Cover_5: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OS_Cover_5) ? cpptRanap.Pediatrik.Cover_OS_Cover_5 : '0',
        Cover_OS_Cover_Text_5: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OS_Cover_Text_5) ? cpptRanap.Pediatrik.Cover_OS_Cover_Text_5 : '',
        Cover_OS_Cover_6: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OS_Cover_6) ? cpptRanap.Pediatrik.Cover_OS_Cover_6 : '0',
        Cover_OS_Cover_Text_6: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cover_OS_Cover_Text_6) ? cpptRanap.Pediatrik.Cover_OS_Cover_Text_6 : '',
        Cover_Uncover_OD_Ortho_With_Et_Near: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Et_Near ?? '',
        Cover_Uncover_OD_Ortho_With_Hi_Near: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Hi_Near ?? '',
        Cover_Uncover_OD_Ortho_With_Ho_Near: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Ho_Near ?? '',
        Cover_Uncover_OD_Ortho_With_Xt_Near: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Xt_Near ?? '',
        Cover_Uncover_OD_Ortho_Without_Near: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Near ?? '',
        Cover_Uncover_OS_Ortho_With_Et_Near: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Et_Near ?? '',
        Cover_Uncover_OS_Ortho_With_Hi_Near: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Hi_Near ?? '',
        Cover_Uncover_OS_Ortho_With_Ho_Near: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Ho_Near ?? '',
        Cover_Uncover_OS_Ortho_With_Xt_Near: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Xt_Near ?? '',
        Cover_Uncover_OS_Ortho_Without_Near: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Near ?? '',

        Cover_Uncover_OD_Ortho_Without_Et_Near: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Et_Near ?? '',
        Cover_Uncover_OD_Ortho_Without_Hi_Near: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Hi_Near ?? '',
        Cover_Uncover_OD_Ortho_Without_Ho_Near: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Ho_Near ?? '',
        Cover_Uncover_OD_Ortho_Without_Xt_Near: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Xt_Near ?? '',
        Cover_Uncover_OS_Ortho_Without_Et_Near: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Et_Near ?? '',
        Cover_Uncover_OS_Ortho_Without_Hi_Near: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Hi_Near ?? '',
        Cover_Uncover_OS_Ortho_Without_Ho_Near: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Ho_Near ?? '',
        Cover_Uncover_OS_Ortho_Without_Xt_Near: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Xt_Near ?? '',

        Cover_Uncover_OD_Ortho_With_Et_Distance: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Et_Distance ?? '',
        Cover_Uncover_OD_Ortho_With_Hi_Distance: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Hi_Distance ?? '',
        Cover_Uncover_OD_Ortho_With_Ho_Distance: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Ho_Distance ?? '',
        Cover_Uncover_OD_Ortho_With_Xt_Distance: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Xt_Distance ?? '',
        Cover_Uncover_OD_Ortho_Without_Distance: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Distance ?? '',
        Cover_Uncover_OS_Ortho_With_Et_Distance: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Et_Distance ?? '',
        Cover_Uncover_OS_Ortho_With_Hi_Distance: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Hi_Distance ?? '',
        Cover_Uncover_OS_Ortho_With_Ho_Distance: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Ho_Distance ?? '',
        Cover_Uncover_OS_Ortho_With_Xt_Distance: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Xt_Distance ?? '',
        Cover_Uncover_OS_Ortho_Without_Distance: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Distance ?? '',

        Cover_Uncover_OD_Ortho_Without_Et_Distance: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Et_Distance ?? '',
        Cover_Uncover_OD_Ortho_Without_Hi_Distance: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Hi_Distance ?? '',
        Cover_Uncover_OD_Ortho_Without_Ho_Distance: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Ho_Distance ?? '',
        Cover_Uncover_OD_Ortho_Without_Xt_Distance: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Xt_Distance ?? '',
        Cover_Uncover_OS_Ortho_Without_Et_Distance: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Et_Distance ?? '',
        Cover_Uncover_OS_Ortho_Without_Hi_Distance: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Hi_Distance ?? '',
        Cover_Uncover_OS_Ortho_Without_Ho_Distance: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Ho_Distance ?? '',
        Cover_Uncover_OS_Ortho_Without_Xt_Distance: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Xt_Distance ?? '',
        Cover_Uncover_OD_Ortho_With_Et_Near_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Et_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_With_Hi_Near_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Hi_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_With_Ho_Near_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Ho_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_With_Xt_Near_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Xt_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Near_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Et_Near_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Et_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Hi_Near_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Hi_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Ho_Near_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Ho_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Xt_Near_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Xt_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Near_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Near_Lain_Text ?? '',

        Cover_Uncover_OD_Ortho_Without_Et_Near_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Et_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Hi_Near_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Hi_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Ho_Near_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Ho_Near_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Xt_Near_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Xt_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Et_Near_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Et_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Hi_Near_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Hi_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Ho_Near_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Ho_Near_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Xt_Near_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Xt_Near_Lain_Text ?? '',

        Cover_Uncover_OD_Ortho_With_Et_Distance_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Et_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_With_Hi_Distance_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Hi_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_With_Ho_Distance_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Ho_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_With_Xt_Distance_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Xt_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Distance_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Et_Distance_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Et_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Hi_Distance_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Hi_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Ho_Distance_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Ho_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_With_Xt_Distance_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Xt_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Distance_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Distance_Lain_Text ?? '',

        Cover_Uncover_OD_Ortho_Without_Et_Distance_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Et_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Hi_Distance_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Hi_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Ho_Distance_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Ho_Distance_Lain_Text ?? '',
        Cover_Uncover_OD_Ortho_Without_Xt_Distance_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Xt_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Et_Distance_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Et_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Hi_Distance_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Hi_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Ho_Distance_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Ho_Distance_Lain_Text ?? '',
        Cover_Uncover_OS_Ortho_Without_Xt_Distance_Lain_Text: cpptRanap?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Xt_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Et_Near: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_With_Et_Near ?? '',
        Prisma_OD_Prisma_With_Hi_Near: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_With_Hi_Near ?? '',
        Prisma_OD_Prisma_With_Ho_Near: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_With_Ho_Near ?? '',
        Prisma_OD_Prisma_With_Xt_Near: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_With_Xt_Near ?? '',
        Prisma_OD_Prisma_Without_Near: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_Without_Near ?? '',
        Prisma_OS_Prisma_With_Et_Near: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_With_Et_Near ?? '',
        Prisma_OS_Prisma_With_Hi_Near: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_With_Hi_Near ?? '',
        Prisma_OS_Prisma_With_Ho_Near: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_With_Ho_Near ?? '',
        Prisma_OS_Prisma_With_Xt_Near: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_With_Xt_Near ?? '',
        Prisma_OS_Prisma_Without_Near: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_Without_Near ?? '',
        Prisma_OD_Prisma_Without_Et_Near: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_Without_Et_Near ?? '',
        Prisma_OD_Prisma_Without_Hi_Near: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_Without_Hi_Near ?? '',
        Prisma_OD_Prisma_Without_Ho_Near: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_Without_Ho_Near ?? '',
        Prisma_OD_Prisma_Without_Xt_Near: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Near ?? '',
        Prisma_OS_Prisma_Without_Et_Near: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_Without_Et_Near ?? '',
        Prisma_OS_Prisma_Without_Hi_Near: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_Without_Hi_Near ?? '',
        Prisma_OS_Prisma_Without_Ho_Near: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_Without_Ho_Near ?? '',
        Prisma_OS_Prisma_Without_Xt_Near: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_Without_Xt_Near ?? '',
        Prisma_OD_Prisma_With_Et_Distance: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_With_Et_Distance ?? '',
        Prisma_OD_Prisma_With_Hi_Distance: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_With_Hi_Distance ?? '',
        Prisma_OD_Prisma_With_Ho_Distance: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_With_Ho_Distance ?? '',
        Prisma_OD_Prisma_With_Xt_Distance: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_With_Xt_Distance ?? '',
        Prisma_OD_Prisma_Without_Distance: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_Without_Distance ?? '',
        Prisma_OS_Prisma_With_Et_Distance: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_With_Et_Distance ?? '',
        Prisma_OS_Prisma_With_Hi_Distance: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_With_Hi_Distance ?? '',
        Prisma_OS_Prisma_With_Ho_Distance: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_With_Ho_Distance ?? '',
        Prisma_OS_Prisma_With_Xt_Distance: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_With_Xt_Distance ?? '',
        Prisma_OD_Prisma_Without_Et_Distance: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_Without_Et_Distance ?? '',
        Prisma_OD_Prisma_Without_Hi_Distance: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_Without_Hi_Distance ?? '',
        Prisma_OD_Prisma_Without_Ho_Distance: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_Without_Ho_Distance ?? '',
        Prisma_OD_Prisma_Without_Xt_Distance: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Distance ?? '',
        Prisma_OS_Prisma_Without_Et_Distance: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_Without_Et_Distance ?? '',
        Prisma_OS_Prisma_Without_Hi_Distance: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_Without_Hi_Distance ?? '',
        Prisma_OS_Prisma_Without_Ho_Distance: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_Without_Ho_Distance ?? '',
        Prisma_OS_Prisma_Without_Xt_Distance: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_Without_Xt_Distance ?? '',
        Prisma_OD_Prisma_With_Et_Near_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_With_Et_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Hi_Near_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_With_Hi_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Ho_Near_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_With_Ho_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Xt_Near_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_With_Xt_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Near_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_Without_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Et_Near_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_With_Et_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Hi_Near_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_With_Hi_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Ho_Near_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_With_Ho_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Xt_Near_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_With_Xt_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Near_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_Without_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Et_Near_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_Without_Et_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Hi_Near_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_Without_Hi_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Ho_Near_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_Without_Ho_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Xt_Near_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Et_Near_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_Without_Et_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Hi_Near_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_Without_Hi_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Ho_Near_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_Without_Ho_Near_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Xt_Near_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_Without_Xt_Near_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Et_Distance_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_With_Et_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Hi_Distance_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_With_Hi_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Ho_Distance_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_With_Ho_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_With_Xt_Distance_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_With_Xt_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Distance_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_Without_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Et_Distance_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_With_Et_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Hi_Distance_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_With_Hi_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Ho_Distance_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_With_Ho_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_With_Xt_Distance_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_With_Xt_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Et_Distance_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_Without_Et_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Hi_Distance_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_Without_Hi_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Ho_Distance_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_Without_Ho_Distance_Lain_Text ?? '',
        Prisma_OD_Prisma_Without_Xt_Distance_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Et_Distance_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_Without_Et_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Hi_Distance_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_Without_Hi_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Ho_Distance_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_Without_Ho_Distance_Lain_Text ?? '',
        Prisma_OS_Prisma_Without_Xt_Distance_Lain_Text: cpptRanap?.Pediatrik?.Prisma_OS_Prisma_Without_Xt_Distance_Lain_Text ?? '',
        Randot_OD_Animal: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Randot_OD_Animal) ? cpptRanap.Pediatrik.Randot_OD_Animal : '',
        Randot_OS_Animal: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Randot_OS_Animal) ? cpptRanap.Pediatrik.Randot_OS_Animal : '',
        Rpl_Streak_OD_Va: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OD_Va) ? cpptRanap.Pediatrik.Rpl_Streak_OD_Va : '',
        Rpl_Streak_OD_Va_Text: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OD_Va_Text) ? cpptRanap.Pediatrik.Rpl_Streak_OD_Va_Text : '',
        Rpl_Streak_OS_Va: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OS_Va) ? cpptRanap.Pediatrik.Rpl_Streak_OS_Va : '',
        Rpl_Streak_OS_Va_Text: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OS_Va_Text) ? cpptRanap.Pediatrik.Rpl_Streak_OS_Va_Text : '',
        Submit_Pediatrik: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Submit_Pediatrik) ? cpptRanap.Pediatrik.Submit_Pediatrik : '',
        Randot_OD_Circles: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Randot_OD_Circles) ? cpptRanap.Pediatrik.Randot_OD_Circles : '',
        Randot_OS_Circles: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Randot_OS_Circles) ? cpptRanap.Pediatrik.Randot_OS_Circles : '',
        Rpl_Streak_OD_False: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OD_False) ? cpptRanap.Pediatrik.Rpl_Streak_OD_False : '',
        Rpl_Streak_OD_False_Text: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OD_False_Text) ? cpptRanap.Pediatrik.Rpl_Streak_OD_False_Text : '',
        Rpl_Streak_OS_False: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OS_False) ? cpptRanap.Pediatrik.Rpl_Streak_OS_False : '',
        Rpl_Streak_OS_False_Text: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OS_False_Text) ? cpptRanap.Pediatrik.Rpl_Streak_OS_False_Text : '',
        Randot_OD_Randot_Form: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Randot_OD_Randot_Form) ? cpptRanap.Pediatrik.Randot_OD_Randot_Form : '',
        Randot_OS_Randot_Form: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Randot_OS_Randot_Form) ? cpptRanap.Pediatrik.Randot_OS_Randot_Form : '',
        Rpl_Streak_OD_Pd_Jauh: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OD_Pd_Jauh) ? cpptRanap.Pediatrik.Rpl_Streak_OD_Pd_Jauh : '',
        Rpl_Streak_OD_Pd_Jauh_Text: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OD_Pd_Jauh_Text) ? cpptRanap.Pediatrik.Rpl_Streak_OD_Pd_Jauh_Text : '',
        Rpl_Streak_OS_Pd_Jauh: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OS_Pd_Jauh) ? cpptRanap.Pediatrik.Rpl_Streak_OS_Pd_Jauh : '',
        Rpl_Streak_OS_Pd_Jauh_Text: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OS_Pd_Jauh_Text) ? cpptRanap.Pediatrik.Rpl_Streak_OS_Pd_Jauh_Text : '',
        Rpl_Streak_OD_Adaptasi: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OD_Adaptasi) ? cpptRanap.Pediatrik.Rpl_Streak_OD_Adaptasi : '',
        Rpl_Streak_OD_Adaptasi_Text: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OD_Adaptasi_Text) ? cpptRanap.Pediatrik.Rpl_Streak_OD_Adaptasi_Text : '',
        Rpl_Streak_OS_Adaptasi: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OS_Adaptasi) ? cpptRanap.Pediatrik.Rpl_Streak_OS_Adaptasi : '',
        Rpl_Streak_OS_Adaptasi_Text: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OS_Adaptasi_Text) ? cpptRanap.Pediatrik.Rpl_Streak_OS_Adaptasi_Text : '',
        Goniometer_OD_Goniometer: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Goniometer_OD_Goniometer) ? cpptRanap.Pediatrik.Goniometer_OD_Goniometer : '',
        Goniometer_OS_Goniometer: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Goniometer_OS_Goniometer) ? cpptRanap.Pediatrik.Goniometer_OS_Goniometer : '',
        Nearvision_OD_Nearvision: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Nearvision_OD_Nearvision) ? cpptRanap.Pediatrik.Nearvision_OD_Nearvision : '',
        // Nearvision_OD_Select: (data && cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Nearvision_OD_Select) ? cpptRanap.Pediatrik.Nearvision_OD_Select : '',
        Nearvision_OD_Select: cpptRanap && cpptRanap.Pediatrik?.Nearvision_OD_Select ? cpptRanap.Pediatrik?.Nearvision_OD_Select : cpptRanap && cpptRanap.Pediatrik?.Nearvision_OD_Nearvision && cpptRanap.Pediatrik?.Nearvision_OD_Nearvision !== '' ? 'Lain-lain' : '',
        Nearvision_OS_Nearvision: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Nearvision_OS_Nearvision) ? cpptRanap.Pediatrik.Nearvision_OS_Nearvision : '',
        Nearvision_OS_Select: cpptRanap && cpptRanap.Pediatrik?.Nearvision_OS_Select ? cpptRanap.Pediatrik?.Nearvision_OS_Select : cpptRanap && cpptRanap.Pediatrik?.Nearvision_OS_Nearvision && cpptRanap.Pediatrik?.Nearvision_OS_Nearvision !== '' ? 'Lain-lain' : '',
        Rpl_Streak_OD_Streak_Cyl: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OD_Streak_Cyl) ? cpptRanap.Pediatrik.Rpl_Streak_OD_Streak_Cyl : '',
        Rpl_Streak_OD_Streak_Sph: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OD_Streak_Sph) ? cpptRanap.Pediatrik.Rpl_Streak_OD_Streak_Sph : '',
        Rpl_Streak_OS_Streak_Cyl: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OS_Streak_Cyl) ? cpptRanap.Pediatrik.Rpl_Streak_OS_Streak_Cyl : '',
        Rpl_Streak_OS_Streak_Sph: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OS_Streak_Sph) ? cpptRanap.Pediatrik.Rpl_Streak_OS_Streak_Sph : '',
        Cardif_OD_Test_Distance_1: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cardif_OD_Test_Distance_1) ? cpptRanap.Pediatrik.Cardif_OD_Test_Distance_1 : '',
        Cardif_OS_Test_Distance_1: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cardif_OS_Test_Distance_1) ? cpptRanap.Pediatrik.Cardif_OS_Test_Distance_1 : '',
        Rpl_Streak_OD_Streak_Axis: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OD_Streak_Axis) ? cpptRanap.Pediatrik.Rpl_Streak_OD_Streak_Axis : '',
        Rpl_Streak_OS_Streak_Axis: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Rpl_Streak_OS_Streak_Axis) ? cpptRanap.Pediatrik.Rpl_Streak_OS_Streak_Axis : '',
        Cardif_OD_Test_Distance_50: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cardif_OD_Test_Distance_50) ? cpptRanap.Pediatrik.Cardif_OD_Test_Distance_50 : '',
        Cardif_OS_Test_Distance_50: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Cardif_OS_Test_Distance_50) ? cpptRanap.Pediatrik.Cardif_OS_Test_Distance_50 : '',
        Ptosis_OD_FIP: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Ptosis_OD_FIP) ? cpptRanap.Pediatrik.Ptosis_OD_FIP : '',
        Ptosis_OS_FIP: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Ptosis_OS_FIP) ? cpptRanap.Pediatrik.Ptosis_OS_FIP : '',
        Ptosis_OD_MRD: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Ptosis_OD_MRD) ? cpptRanap.Pediatrik.Ptosis_OD_MRD : '',
        Ptosis_OS_MRD: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Ptosis_OS_MRD) ? cpptRanap.Pediatrik.Ptosis_OS_MRD : '',
        Ptosis_OD_LA: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Ptosis_OD_LA) ? cpptRanap.Pediatrik.Ptosis_OD_LA : '',
        Ptosis_OS_LA: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Ptosis_OS_LA) ? cpptRanap.Pediatrik.Ptosis_OS_LA : '',
        TNO_Stereoskopis_ODS_1: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.TNO_Stereoskopis_ODS_1) ? cpptRanap.Pediatrik.TNO_Stereoskopis_ODS_1 : '',
        TNO_Stereoskopis_ODS_2: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.TNO_Stereoskopis_ODS_2) ? cpptRanap.Pediatrik.TNO_Stereoskopis_ODS_2 : '',
        TNO_Stereoskopis_ODS_3: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.TNO_Stereoskopis_ODS_3) ? cpptRanap.Pediatrik.TNO_Stereoskopis_ODS_3 : '',
        TNO_Stereoskopis_ODS_4: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.TNO_Stereoskopis_ODS_4) ? cpptRanap.Pediatrik.TNO_Stereoskopis_ODS_4 : '',
        TNO_Stereoskopis_ODS_5: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.TNO_Stereoskopis_ODS_5) ? cpptRanap.Pediatrik.TNO_Stereoskopis_ODS_5 : '',
        Goniometer_ODS_Goniometer: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Goniometer_ODS_Goniometer) ? cpptRanap.Pediatrik.Goniometer_ODS_Goniometer : '',
        Goniometer_ODS_Right_Check: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Goniometer_ODS_Right_Check) ? cpptRanap.Pediatrik.Goniometer_ODS_Right_Check : '',
        Goniometer_ODS_Left_Check: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.Goniometer_ODS_Left_Check) ? cpptRanap.Pediatrik.Goniometer_ODS_Left_Check : '',
        VOD: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.VOD) ? cpptRanap.Pediatrik.VOD : '',
        VOS: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.VOS) ? cpptRanap.Pediatrik.VOS : '',
        VOD_Text: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.VOD_Text) ? cpptRanap.Pediatrik.VOD_Text : '',
        VOS_Text: (cpptRanap && cpptRanap.Pediatrik && cpptRanap.Pediatrik.VOS_Text) ? cpptRanap.Pediatrik.VOS_Text : '',
      },
    },
  });

  const { isDirty } = formState;

  useWarnIfUnsavedChanges(isDirty, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  const { fields, append, remove, insert } = useFieldArray({ name: 'resep', control })

  useEffect(() => {
    if (cpptRanap) {
      if (cpptRanap.Submit_Pediatrik && cpptRanap.Submit_Pediatrik === 0) {
        setShowPediatric(false);
      } else if (cpptRanap.Submit_Pediatrik === 1) {
        setShowPediatric(true);
      }

      if (cpptRanap.Submit_Mata && cpptRanap.Submit_Mata === 0) {
        setShowEye(false);
      } else if (cpptRanap.Submit_Mata === 1) {
        setShowEye(true);
      }

      if (cpptRanap.Submit_Retina && cpptRanap.Submit_Retina === 0) {
        setShowRetina(false);
      } else if (cpptRanap.Submit_Retina === 1) {
        setShowRetina(true);
      }
    }
  }, [cpptRanap])

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
          form_name: 'cppt/rawat-inap',
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

  useEffect(() => {
    if (cpptRanap && cpptRanap.Picture_Data_O && cpptRanap.Picture_Data_O.Url_Image_Cppt_Data_O && cpptRanap.Picture_Data_O.Url_Image_Cppt_Data_O !== '') {
      setFiles([
        {
          name: `${cpptRanap.Picture_Data_O.Name_Image_Cppt_Data_O}`,
          size: cpptRanap.Picture_Data_O.Size_Image_Cppt_Data_O,
          url_real: cpptRanap.Picture_Data_O.Url_Image_Cppt_Data_O,
        },
      ])
    }
    if (cpptRanap && cpptRanap.ID_Berobat && cpptRanap.ID_Berobat !== '' && action && action === 'update') {
      setValue('id_berobat', cpptRanap.ID_Berobat);
    }
  }, [cpptRanap]);

  const renderFilePreview = (file: any) => {
    if (file.url_real) {
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

  const handleVisitChange = (e: any) => {
    if (e.target.value !== '') {
      setAllowFill(true);
    } else {
      setAllowFill(false);
    }
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
        toast.success(
          <PrescriptionToast error={false} message='Resep berhasil terkirim ke SIMRS.'/>,
          { transition: Slide, icon: false, hideProgressBar: true, autoClose: 7000, position: toast.POSITION.TOP_CENTER, className: 'bg-success' },
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

  const handleSubmitForm = (value: ICreateCpptInpatientDoctorRequest) => {
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
        setTimeErr({ error: true, message: 'Waktu harus diisi' })
        document.getElementById('waktu')?.focus()
        return;
      }
      if (value.ttd_dokter_pengkaji === '') {
        setSignatureErr({ error: true, message: 'Tanda tangan harus diisi' });
        alert('Data SOAP tidak lengkap');
        return;
      }
      if (value.data_s === '') {
        setDatasErr({ error: true, message: 'S harus diisi' });
        alert('Data SOAP tidak lengkap');
        return;
      }
      if (value.data_o === '') {
        setDataoErr({ error: true, message: 'O harus diisi' });
        alert('Data SOAP tidak lengkap');
        return;
      }
      if (value.data_a === '') {
        setDataAErr({ error: true, message: 'A harus diisi' });
        alert('Data SOAP tidak lengkap');
        return;
      }
      if (value.data_p === '' && value.anjuran === '') {
        setDataPErr({ error: true, message: 'P harus diisi' });
        alert('Data SOAP tidak lengkap');
        return;
      }
    }
    setProcessing(true);
    reset(value);
    const appRequest = AppRequest.createFromStore(treatment);
    if (!cpptRanap || (action && action === 'create')) {
      const resep = value.resep;
      const prescriptionModel = ArrayPrescription.createFromForm(resep, doctorPreliminaryStudy?.aturan_pakai);
      const params = CreateCpptInpatientDoctorRequest.createFromJson({...value, ...appRequest, data_o_json: doctorPreliminaryStudy.form, ...prescriptionModel, is_form_doctor: true });
      CpptInpatientService().create(params)
        .then((response: any) => {
          storeToastPrescription(response)
          dispatch(handlePdfAll(undefined));
          dispatch(handlePdf(undefined));
          CpptInpatientService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
            CpptInpatientService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptInpatientPdf(FindPdfRequest.createFromJson({
                emr_id: treatment.EMR_ID,
                form_name: 'cppt_v3',
              })))
            }).catch(() => {
              setProcessing(false);
            })
          });
          CpptInpatientService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
            CpptInpatientService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptInpatientDayPdf(FindPdfRequest.createFromJson({
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
      const params = UpdateCpptInpatientDoctorRequest.createFromJson({...value, ...appRequest, data_o_json: cpptRanap.Data_O_Json, ID: cpptRanap.ID, emr_id: cpptRanap.EMR_ID, ...prescriptionModel, is_form_doctor: true });
      CpptInpatientService().update(params)
        .then((response: any) => {
          storeToastPrescription(response);
          dispatch(handlePdfAll(undefined));
          if (cpptRanap.EMR_ID === treatment.EMR_ID) {
            dispatch(handlePdf(undefined));
            CpptInpatientService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
              const { records } = resp.data.data;
              const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
              const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
              CpptInpatientService().pdfNew(pdfParams).then(() => {
                dispatch(fetchCpptInpatientDayPdf(FindPdfRequest.createFromJson({
                  emr_id: treatment.EMR_ID,
                  form_name: 'cppt_day_v3',
                })))
              }).catch(() => {
                setProcessing(false);
              })
            });
          }
          CpptInpatientService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
            CpptInpatientService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptInpatientPdf(FindPdfRequest.createFromJson({
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
        {
          !allowFill ? (
            <Row className="align-items-center">
              <Col>
                <Label className="text-danger">Pilih data visit dokter terlebih dahulu sebelum input CPPT baru!!</Label>
              </Col>
            </Row>
          ) : (
            null
          )
        }
        <Row className="align-items-center mb-1">
          <Col sm='1'>
            <Label>Pilih Visit</Label>
          </Col>
          <Col sm='5'>
            <Input
              type="select"
              className="my-2"
              style={(cpptRanap && cpptRanap.ID_Berobat && cpptRanap.ID_Berobat !== '' && action && action === 'update') ? { pointerEvents: 'none', opacity: '0.4' } : {}}
              name="id_berobat"
              onChange={(e) => handleVisitChange(e)}
              readOnly={!!(cpptRanap && cpptRanap.ID_Berobat && cpptRanap.ID_Berobat !== '' && action && action === 'update')}
              innerRef={register({ required: true })}
            >
              <option value="" disabled>--</option>
              {
                visits.map((item: IDoctorVisit, key: number) => (
                  <option value={item.ID_Berobat} key={key}>{`${item.ID_Berobat} (${item.Dokter_Nama}, ${item.Waktu_Visit})`}</option>
                ))
              }
            </Input>
          </Col>
        </Row>
        {
          allowFill ? (
            <>
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
                    <PediatricForm register={register} errors={errors} setValue={setValue} getValues={getValues} defaultSelected={showPediatric} data={cpptRanap?.Pediatrik}/>
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
                <div {...getFilesProps()} className="dropzone my-3">
                  <input name="logo" placeholder='Logo'  {...getInputFilesProps()} />
                  <div className="d-flex align-items-center justify-content-center flex-column">
                    <DownloadCloud size="50" />
                    <h5>Drop Files here or click to upload</h5>
                    <p className="text-secondary">
                Drop Files here or click browse through your machine
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
              </FormGroup>
              <FormGroup className="form-group">
                <Row>
                  <Col md='2'></Col>
                  <Col md="10">
                    {
                      showEye && (
                        <div className="d-flex justify-content-around">
                          <EyeImage onSaved={(image: any) => setValue('gambar_mata_od', image)} component="cppt_out_patient_left" formName="gambar_mata_od" initialImage={(cpptRanap && cpptRanap.Gambar_Mata_OD && cpptRanap.Gambar_Mata_OD !== '') ? cpptRanap.Gambar_Mata_OD : undefined} />
                          <EyeImage onSaved={(image: any) => setValue('gambar_mata_os', image)} component="cppt_out_patient_right" formName="gambar_mata_os" initialImage={(cpptRanap && cpptRanap.Gambar_Mata_OS && cpptRanap.Gambar_Mata_OS !== '') ? cpptRanap.Gambar_Mata_OS : undefined} />
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
                          <RetinaImage onSaved={(image: any) => setValue('gambar_retina_od', image)} type="right"  component="cppt_out_patient_retina_left" formName="gambar_retina_od" initialImage={(cpptRanap && cpptRanap.Gambar_Retina_OD && cpptRanap.Gambar_Retina_OD !== '') ? cpptRanap.Gambar_Retina_OD : undefined} />
                          <RetinaImage onSaved={(image: any) => setValue('gambar_retina_os', image)} type="left"  component="cppt_out_patient_retina_right" formName="gambar_retina_os" initialImage={(cpptRanap && cpptRanap.Gambar_Retina_OS && cpptRanap.Gambar_Retina_OS !== '') ? cpptRanap.Gambar_Retina_OS : undefined} />
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
                  doctorPreliminaryStudy && cpptRanap && cpptRanap.formFarmasi && cpptRanap.formFarmasi.Status_Tebus && cpptRanap.formFarmasi.Status_Tebus === '1' && !copy ? (
                    <>
                      <Table bordered style={{ width: '100%' }}>
                        <thead>
                          <tr style={{ textAlign: 'center' }}>
                            <td style={{ width: '5%' }}><b>No</b></td>
                            <td style={{ width: '40%' }}><b>{`Nama & Dosis`}</b></td>
                            <td><b>Satuan</b></td>
                            <td style={{ width: '100px' }}><b>Jumlah</b></td>
                            <td style={{ width: '25%' }}><b>Aturan Pakai</b></td>
                            <td style={{ width: '30%' }}><b>Catatan</b></td>
                            <td style={{ width: '5%' }}></td>
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
                                    style={{ width: '40px', marginLeft: '25%' }}
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
                          <td style={{ width: '5%' }}><b>No</b></td>
                          <td style={{ width: '35%' }}><b>{`Nama & Dosis`}</b></td>
                          <td><b>Satuan</b></td>
                          <td><b>Jumlah</b></td>
                          <td style={{ width: '22%' }}><b>Aturan Pakai</b></td>
                          <td style={{ width: '30%' }}><b>Catatan</b></td>
                          <td style={{ width: '5%' }}></td>
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
                                    style={{ width: '40px', marginLeft: '20%' }}
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
                  cpptRanap && cpptRanap.formFarmasi && cpptRanap.formFarmasi.Status_Tebus && cpptRanap.formFarmasi.Status_Tebus === '1' && !copy ? (
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
                  cpptRanap && cpptRanap.formFarmasi && cpptRanap.formFarmasi.Status_Tebus && cpptRanap.formFarmasi.Status_Tebus === '1' && (
                    <>
                      <Label className='text-danger mt-2'>
                  *Resep yang sudah ditebus
                      </Label>
                      <Table bordered style={{ width: '100%' }}>
                        <thead>
                          <tr style={{ textAlign: 'center' }}>
                            <td style={{ width: '5%' }}><b>No</b></td>
                            <td style={{ width: '30%' }}><b>{`Nama & Dosis`}</b></td>
                            <td style={{ width: '10%' }}><b>Satuan</b></td>
                            <td><b>Jumlah</b></td>
                            <td style={{ width: '35%' }}><b>Aturan Pakai</b></td>
                            <td style={{ width: '32%' }}><b>Catatan</b></td>
                          </tr>
                        </thead>
                        <tbody>
                          {cpptRanap && cpptRanap.formFarmasi && cpptRanap.formFarmasi.Daftar_Tebus && Array.isArray(cpptRanap.formFarmasi.Daftar_Tebus) && cpptRanap.formFarmasi.Daftar_Tebus.length > 0 && cpptRanap.formFarmasi.Daftar_Tebus.map((item: IDaftarTebus, key: number) => (
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
              <div className="d-flex justify-content-around my-1">
                <Signature
                  label="Dokter"
                  type="picker"
                  unit='dokter'
                  persons={doctors}
                  initialImage={(cpptRanap && cpptRanap.TTD_Dokter_Pengkaji && cpptRanap.TTD_Dokter_Pengkaji !== '') ? cpptRanap.TTD_Dokter_Pengkaji : undefined}
                  additionalLabel={(cpptRanap) ? cpptRanap.Nama_Dokter_Pengkaji : undefined}
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
                  <p style={{ fontSize: '10pt' }} className='text-danger fw-bold text-center'>{signatureErr.message}</p>
                )
              }
            </>
          ) : (
            null
          )
        }
        <FormGroup className="d-flex mb-0 justify-content-center">
          <SubmitButton
            buttonColor='primary'
            spinnerColor='light'
            processing={processing}
            disabled={!allowFill}
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

export default CpptInpatientFormDoctor;
