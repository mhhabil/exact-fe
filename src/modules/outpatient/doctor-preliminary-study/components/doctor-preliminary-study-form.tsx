import { ArrayPrescription, CreatePDFData, CreatePreliminaryCppt, UpdatePreliminaryCppt } from '@modules/outpatient/doctor-preliminary-study/requests/update-doctor-preliminary-study.request';
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, ListGroup, ListGroupItem, Progress, Row, Table } from "reactstrap";
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { DateTimeInput, TextInput } from '@src/shared/input';
import { DoctorPreliminaryStudyModel, HowToUse, IDaftarTebus, IPrescription, Image as ImageModel, Medicine } from '@modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';
import { DownloadCloud, FileText, Minus,  Plus, Trash, X } from "react-feather";
import { Fragment, useCallback, useEffect, useState } from "react";
import { SpinnerButton, SubmitButton } from '@src/shared/button';
import { fetchDoctorPreliminaryStudyPdf, handlePdf } from '@modules/outpatient/doctor-preliminary-study/stores/doctor-preliminary-study.store';
import BaseSelect from 'react-select';
import { DateTimeConverter } from "@src/shared/datetime-converter";
import { EyeImage } from '@src/shared/eye-image/components';
import { FindPdfRequest } from '@src/shared/pdf';
import { ICareModal } from '@src/shared/bpjs/components';
import Image from 'next/image';
import PediatricForm from './pediatric-form';
import { RetinaImage } from '@src/shared/retina-image/components';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useRouter } from "next/router"
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { IUpdateDoctorPreliminaryStudyRequest, UpdateDoctorPreliminaryStudyRequest } from '../requests';
import { Slide, toast } from 'react-toastify';
import { AppRequest } from '@src/shared/request';
import { BPJSService } from '@src/shared/bpjs/services';
import { BPJSValidateRequest } from '@src/shared/bpjs/requests';
import Compressor from "compressorjs";
import { CreatePDFRequest } from '@src/shared/pdf/requests/create-pdf.request';
import { DoctorPreliminaryStudyService } from '../services';
import FixRequiredSelect from '@shared/input/components/FixRequiredSelect';
import { MedsPackage } from '@src/shared/meds-package/components';
import PreliminaryStudyDetail from '@src/modules/ro/preliminary-study/components/preliminary-study-detail';
import { PrescriptionToast } from '@src/shared/alert/components';
import { UploadToCloudService } from '@src/shared/upload-cloud-storage/services';
import fontSizes from '../consts/font-size';
import { handleAutoSign } from '@modules/outpatient/proof-of-outpatient-services/stores/proof-of-outpatient-services.stores';
import { handleBPJSValidate } from '@src/shared/bpjs/stores/bpjs-validate.store';
import { handleFontSizePAD } from '@src/shared/font-size/stores/font-size.store';
import { useDropzone } from 'react-dropzone';

const DoctorPreliminaryStudyForm = (props: { data: DoctorPreliminaryStudyModel }) => {
  const { data } = props;
  const [files1, setFiles1] = useState<any>([]);
  const [files2, setFiles2] = useState<any>([])
  const dispatch = useAppDispatch();
  const { treatment } = useAppSelector(state => state.patient);
  const { pdf } = useAppSelector(state => state.doctorPreliminaryStudy);
  const { doctors } = useAppSelector(state => state.doctor);
  const { fontSizePAD } = useAppSelector(state => state.fontSize);
  const { bpjsValidate, isICare } = useAppSelector(state => state.bpjsValidate);
  const { userData } = useAppSelector(state => state.auth);
  const { companyCode } = useAppSelector(state => state.selectCompany);
  const router = useRouter();
  const [pdfData, setPdfData] = useState<any>(undefined);
  const [processing, setProcessing] = useState<boolean | undefined>(false);
  const [showPediatric, setShowPediatric] = useState<boolean | undefined>(undefined);
  const [showRetina, setShowRetina] = useState<boolean | undefined>(undefined);
  const [signatureErr, setSignatureErr] = useState({ error: false, message: '' });
  const [recipe, setRecipe] = useState<any>(data && data.form && data.form.Resep ? data.form.Resep : []);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isPdfGenerated, setIsPdfGenerated] = useState<boolean>(false);
  const [inProgress, setInProgress] = useState<any>(undefined);
  const [inProgressImage1, setInProgressImage1] = useState<any>(undefined);
  const [inProgressImage2, setInProgressImage2] = useState<any>(undefined);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [iCareProcessing, setICareProcessing] = useState<boolean>(false);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchDoctorPreliminaryStudyPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-jalan_pengkajian-awal_v3' })));
      dispatch(handleBPJSValidate(undefined));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf)
  }, [pdf])

  useEffect(() => {
    if (data && data.form && data.form.Submit_Pediatrik && data.form.Submit_Pediatrik === '0') {
      setShowPediatric(false);
    } else if (data.form.Submit_Pediatrik === '1') {
      setShowPediatric(true);
    }
    if (data && data.form && data.form.Submit_Retina && data.form.Submit_Retina === '0') {
      setShowRetina(false);
    } else if (data.form.Submit_Retina === '1') {
      setShowRetina(true);
    }
  }, [data]);

  useEffect(() => {
    if (isSubmitted && isPdfGenerated) {
      window.location.reload();
    }
  }, [isSubmitted, isPdfGenerated])

  const { register, unregister, handleSubmit, errors, setValue, getValues, control, formState, reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(UpdateDoctorPreliminaryStudyRequest.schema()),
    defaultValues: {
      note_note: (data && data.form && data.form.Catatan_Note) ? data.form.Catatan_Note : '',
      suggestion: (data && data.form && data.form.Anjuran) ? data.form.Anjuran : '',
      coa_od: (data && data.form && data.form.COA_OD) ? data.form.COA_OD : data.isDefault ? 'DBN' : '',
      coa_os: (data && data.form && data.form.COA_OS) ? data.form.COA_OS : data.isDefault ? 'DBN' : '',
      conj_bulbi_od: (data && data.form && data.form.Conj_Bulbi_OD) ? data.form.Conj_Bulbi_OD : data.isDefault ? 'DBN' : '',
      conj_bulbi_os: (data && data.form && data.form.Conj_Bulbi_OS) ? data.form.Conj_Bulbi_OS : data.isDefault ? 'DBN' : '',
      conj_tarsal_inferior_od: (data && data.form && data.form.Conj_Tarsal_Inferior_OD) ? data.form.Conj_Tarsal_Inferior_OD : data.isDefault ? 'DBN' : '',
      conj_tarsal_inferior_os: (data && data.form && data.form.Conj_Tarsal_Inferior_OS) ? data.form.Conj_Tarsal_Inferior_OS : data.isDefault ? 'DBN' : '',
      conj_tarsal_superior_od: (data && data.form && data.form.Conj_Tarsal_Superior_OD) ? data.form.Conj_Tarsal_Superior_OD : data.isDefault ? 'DBN' : '',
      conj_tarsal_superior_os: (data && data.form && data.form.Conj_Tarsal_Superior_OS) ? data.form.Conj_Tarsal_Superior_OS : data.isDefault ? 'DBN' : '',
      cornea_od: (data && data.form && data.form.Cornea_OD) ? data.form.Cornea_OD : data.isDefault ? 'Jernih' : '',
      cornea_os: (data && data.form && data.form.Cornea_OS) ? data.form.Cornea_OS : data.isDefault ? 'Jernih' : '',
      diagnose: (data && data.form && data.form.Diagnosa) ? data.form.Diagnosa : '',
      diagnosa_keseragaman: (data && data.form && data.form.Diagnosa_Keseragaman) ? data.form.Diagnosa_Keseragaman : '',

      funduscopy_od: (data && data.form && data.form.Funduscopy_OD) ? data.form.Funduscopy_OD : data.isDefault ? 'DBN' : '',
      funduscopy_os: (data && data.form && data.form.Funduscopy_OS) ? data.form.Funduscopy_OS : data.isDefault ? 'DBN' : '',
      od_eye_image: (data && data.form && data.form.Gambar_Mata_OD) ? data.form.Gambar_Mata_OD : '',
      os_eye_image: (data && data.form && data.form.Gambar_Mata_OS) ? data.form.Gambar_Mata_OS : '',
      od_retina_image: (data && data.form && data.form.Gambar_Retina_OD) ? data.form.Gambar_Retina_OD : '',
      os_retina_image: (data && data.form && data.form.Gambar_Retina_OS) ? data.form.Gambar_Retina_OS : '',
      reviewer_doctor_id: (data && data.form && data.form.ID_Dokter_Pengkaji) ? data.form.ID_Dokter_Pengkaji : '',
      od_iris: (data && data.form && data.form.Iris_OD) ? data.form.Iris_OD : data.isDefault ? 'DBN' : '',
      os_iris: (data && data.form && data.form.Iris_OS) ? data.form.Iris_OS : data.isDefault ? 'DBN' : '',
      complaint: (data && data.form && data.form.Keluhan && data.form.Keluhan !== '') ? data.form.Keluhan : ((data?.formRO?.Keluhan ?? '') || (data?.formRO?.Keluhan_Lain ?? '')),
      od_lens: (data && data.form && data.form.Lensa_OD) ? data.form.Lensa_OD : data.isDefault ? 'Jernih' : '',
      os_lens: (data && data.form && data.form.Lensa_OS) ? data.form.Lensa_OS : data.isDefault ? 'Jernih' : '',
      od_palpebra_inferior: (data && data.form && data.form.Palpebra_Inferior_OD) ? data.form.Palpebra_Inferior_OD : data.isDefault ? 'DBN' : '',
      os_palpebra_inferior: (data && data.form && data.form.Palpebra_Inferior_OS) ? data.form.Palpebra_Inferior_OS : data.isDefault ? 'DBN' : '',
      od_palpebra_superior: (data && data.form && data.form.Palpebra_Superior_OD) ? data.form.Palpebra_Superior_OD : data.isDefault ? 'DBN' : '',
      os_palpebra_superior: (data && data.form && data.form.Palpebra_Superior_OS) ? data.form.Palpebra_Superior_OS : data.isDefault ? 'DBN' : '',

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
        // Nearvision_OD_Select: (data && data.form && data.form.Pediatrik && data.form.Pediatrik.Nearvision_OD_Select) ? data.form.Pediatrik.Nearvision_OD_Select : '',
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

      od_movement: (data && data.form && data.form.Pergerakan_OD) ? data.form.Pergerakan_OD : data.isDefault ? 'Baik kesemua arah' : '',
      os_movement: (data && data.form && data.form.Pergerakan_OS) ? data.form.Pergerakan_OS : data.isDefault ? 'Baik kesemua arah' : '',
      od_position: (data && data.form && data.form.Posisi_OD) ? data.form.Posisi_OD : data.isDefault ? 'Ortho' : '',
      os_position: (data && data.form && data.form.Posisi_OS) ? data.form.Posisi_OS : data.isDefault ? 'Ortho' : '',
      od_pupil: (data && data.form && data.form.Pupil_OD) ? data.form.Pupil_OD : data.isDefault ? 'Bulat, Regular, RC +' : '',
      os_pupil: (data && data.form && data.form.Pupil_OS) ? data.form.Pupil_OS : data.isDefault ? 'Bulat, Regular, RC +' : '',
      pediatric_submit: (data && data.form && data.form.Submit_Pediatrik) ? data.form.Submit_Pediatrik : '',
      retina_submit: (data && data.form && data.form.Submit_Retina) ? data.form.Submit_Retina : '',
      date: (data && data.form && data.form.Tanggal_Pengkajian) ? data.form.Tanggal_Pengkajian.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      therapy: (data && data.form && data.form.Terapi) ? data.form.Terapi : '',
      reviewer_doctor_sign: (data && data.form && data.form.TTD_Dokter_Pengkaji) ? data.form.TTD_Dokter_Pengkaji : '',
      od_vitreous: (data && data.form && data.form.Vitreous_OD) ? data.form.Vitreous_OD : data.isDefault ? 'DBN' : '',
      os_vitreous: (data && data.form && data.form.Vitreous_OS) ? data.form.Vitreous_OS : data.isDefault ? 'DBN' : '',
      time: UpdateDoctorPreliminaryStudyRequest.convertToNormalDatetime(new Date()),
      cppt_id: (data && data.form && data.form.CPPT_ID) ? data.form.CPPT_ID : '',
      kesimpulan_pemeriksaan: (data && data.form && data.form.Kesimpulan_Pemeriksaan) ? data.form.Kesimpulan_Pemeriksaan : '',
      data_objektif_lain: (data && data.form && data.form.Data_Objektif_Lain) ? data.form.Data_Objektif_Lain : '',
      canthal_medial_od: (data && data.form && data.form.Canthal_Medial_OD) ? data.form.Canthal_Medial_OD : data.isDefault ? 'DBN' : '',
      canthal_medial_os: (data && data.form && data.form.Canthal_Medial_OS) ? data.form.Canthal_Medial_OS : data.isDefault ? 'DBN' : '',
      canthal_lateral_od: (data && data.form && data.form.Canthal_Lateral_OD) ? data.form.Canthal_Lateral_OD : data.isDefault ? 'DBN' : '',
      canthal_lateral_os: (data && data.form && data.form.Canthal_Lateral_OS) ? data.form.Canthal_Lateral_OS : data.isDefault ? 'DBN' : '',
      sclera_od: (data && data.form && data.form.Sclera_OD) ? data.form.Sclera_OD : data.isDefault ? 'DBN' : '',
      sclera_os: (data && data.form && data.form.Sclera_OS) ? data.form.Sclera_OS : data.isDefault ? 'DBN' : '',
      'image-1': {
        Url_Image: (data && data?.form && data?.form?.Image_1 && data?.form?.Image_1?.Url_Image) ? data?.form.Image_1?.Url_Image : '',
        Name_Image: (data && data?.form && data?.form?.Image_1 && data?.form?.Image_1?.Name_Image) ? data?.form?.Image_1?.Name_Image : '',
        Type_Image: (data && data?.form && data?.form?.Image_1 && data?.form?.Image_1?.Type_Image) ? data?.form?.Image_1?.Type_Image : '',
        Size_Image: (data && data?.form && data?.form?.Image_1 && data?.form?.Image_1?.Size_Image) ? data?.form?.Image_1?.Size_Image : '',
      },
      'image-2': {
        Url_Image: (data && data?.form && data?.form?.Image_2 && data?.form?.Image_2?.Url_Image) ? data?.form.Image_2?.Url_Image : '',
        Name_Image: (data && data?.form && data?.form?.Image_2 && data?.form?.Image_2?.Name_Image) ? data?.form?.Image_2?.Name_Image : '',
        Type_Image: (data && data?.form && data?.form?.Image_2 && data?.form?.Image_2?.Type_Image) ? data?.form?.Image_2?.Type_Image : '',
        Size_Image: (data && data?.form && data?.form?.Image_2 && data?.form?.Image_2?.Size_Image) ? data?.form?.Image_2?.Size_Image : '',
      },

    },
  });

  const toBase64 = (file: any) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  })

  const { getRootProps: getFilesProps1, getInputProps: getInputFilesProps1 } = useDropzone({ multiple: true,
    accept: 'image/jpg,image/jpeg,image/png',
    onDrop: useCallback(acceptedFiles => {
      const toUpload = acceptedFiles.map((file: any) => Object.assign(file));
      setInProgressImage1({ value: 10, label: 'Compressing image', percentage: '10%' })
      new Compressor(toUpload[0], {
        quality: 0.2,
        async success(res: any) {
          setInProgressImage1({ value: 50, label: 'Uploading image', percentage: '50%' })
          toBase64(res).then((base64: any) => {
            if (!treatment) return;
            UploadToCloudService().uploadImageCloud({
              emr_id: treatment.EMR_ID,
              form_name: 'rawat-jalan/pengkajian-awal-dokter',
              component_id: 'image_pengkajian_awal_1',
              image: base64,
            }).then(response => {
              const { data } = response.data;
              const p = {
                Url_Image: data.signUrl,
                Name_Image: toUpload[0].name,
                Size_Image: toUpload[0].size,
                Type_Image: toUpload[0].type,
              }
              setValue('image-1', p);
              const q = {
                Url_Image_Cppt_Data_O: data.signUrl,
                Name_Image_Cppt_Data_O: toUpload[0].name,
                Size_Image_Cppt_Data_O: toUpload[0].size,
                Type_Image_Cppt_Data_O: toUpload[0].type,
              }
              setValue('picture-data-o', q);
              setInProgressImage1({ value: 100, label: 'Image uploaded', percentage: '100%' })
              setTimeout(() => setInProgressImage1(undefined), 3000);
            })
          })

        },
        error(err) {
          console.log(err);
        },
      });
      setFiles1(toUpload)
    }, [files1])})

  const { getRootProps: getFilesProps2, getInputProps: getInputFilesProps2 } = useDropzone({ multiple: true,
    accept: 'image/jpg,image/jpeg,image/png',
    onDrop: useCallback(acceptedFiles => {
      const toUpload2 = acceptedFiles.map((file: any) => Object.assign(file));
      setInProgressImage2({ value: 10, label: 'Compressing image', percentage: '10%' })
      new Compressor(toUpload2[0], {
        quality: 0.2,
        async success(res: any) {
          setInProgressImage2({ value: 50, label: 'Uploading image', percentage: '50%' })
          toBase64(res).then((base64: any) => {
            if (!treatment) return;
            UploadToCloudService().uploadImageCloud({
              emr_id: treatment.EMR_ID,
              form_name: 'rawat-jalan/pengkajian-awal-dokter',
              component_id: 'image_pengkajian_awal_2',
              image: base64,
            }).then(response => {
              const { data } = response.data;
              const z = {
                Url_Image: data.signUrl,
                Name_Image: toUpload2[0].name,
                Size_Image: toUpload2[0].size,
                Type_Image: toUpload2[0].type,
              }
              setValue('image-2', z);
              setInProgressImage2({ value: 100, label: 'Image uploaded', percentage: '100%' })
              setTimeout(() => setInProgressImage2(undefined), 3000);
            })
          })

        },
        error(err) {
          console.log(err);
        },
      });
      setFiles2(toUpload2)
    }, [files2])})

  const handleRemoveFile1 = (file: any) => {
    setFiles1([]);
    const x = {
      Url_Image: '',
      Name_Image: '',
      Size_Image: '',
      Type_Image: '',
    }
    setValue('image-1', x);
    const y = {
      Url_Image_Cppt_Data_O: '',
      Name_Image_Cppt_Data_O: '',
      Size_Image_Cppt_Data_O: '',
      Type_Image_Cppt_Data_O: '',
    }
    setValue('picture-data-o', y);
  }

  const handleRemoveFile2 = (file: any) => {
    setFiles2([]);
    const p = {
      Url_Image: '',
      Name_Image: '',
      Size_Image: '',
      Type_Image: '',
    }
    setValue('image-2', p);
  }

  useEffect(() => {
    if (data && data.form && data.form?.Image_1?.Url_Image) {
      setFiles1([
        {
          Url_Image: `${data.form?.Image_1?.Url_Image}`,
          Name_Image: data.form?.Image_1?.Name_Image,
          Type_Image: data.form?.Image_1?.Type_Image,
          Size_Image: data.form?.Image_1?.Size_Image,
        },
      ])
    }
    if (data && data.form && data.form?.Image_2?.Url_Image) {
      setFiles2([
        {
          Url_Image: `${data.form?.Image_2?.Url_Image}`,
          Name_Image: data.form?.Image_2?.Name_Image,
          Type_Image: data.form?.Image_2?.Type_Image,
          Size_Image: data.form?.Image_2?.Size_Image,
        },
      ])
    }
  }, [data]);

  const renderFilePreview = (file: any) => {
    if (file.Url_Image) {
      return <Image className='rounded' alt={file.Url_Image} src={file.Url_Image} width='100' height='100' />
    } else if (file.Type_Image && file.Type_Image.startsWith('image')) {
      return <Image className='rounded' alt={file.Url_Image} src={URL.createObjectURL(file)} width='100' height='100' />
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

  const fileList1 = files1.map((file: any, index: any) => (
    <>
      <ListGroupItem key={`${file.Name_Image}-${index}`} className='d-flex align-items-center justify-content-between'>
        <div className='file-details d-flex align-items-center'>
          <div className='file-preview me-1'>{renderFilePreview(file)}</div>
          <div>
            <p className='file-name mb-0'>{file.Name_Image}</p>
            <p className='file-size mb-0'>{renderFileSize((file.Size_Image) ? file.Size_Image : file.size)}</p>
          </div>
        </div>
        <Button color='danger' outline size='sm' className='btn-icon' onClick={() => handleRemoveFile1(file)}>
          <X size={14} color='red'/>
        </Button>
      </ListGroupItem>
      {
        inProgressImage1 ? (
          <div style={{ width: '100%' }} className='d-flex flex-column justify-content-center align-items-center mt-1'>
            <Label>{inProgressImage1.label}</Label>
            <Progress
              value={inProgressImage1.value}
              max={100}
              bar
              striped
              animated
            >
              {inProgressImage1.percentage}
            </Progress>
          </div>
        ) : (
          null
        )
      }
    </>
  ));

  const fileList2 = files2.map((file: any, index: any) => (
    <>
      <ListGroupItem key={`${file.Name_Image}-${index}`} className='d-flex align-items-center justify-content-between'>
        <div className='file-details d-flex align-items-center'>
          <div className='file-preview me-1'>{renderFilePreview(file)}</div>
          <div>
            <p className='file-name mb-0'>{file.Name_Image}</p>
            <p className='file-size mb-0'>{renderFileSize((file.Size_Image) ? file.Size_Image : file.size)}</p>
          </div>
        </div>
        <Button color='danger' outline size='sm' className='btn-icon' onClick={() => handleRemoveFile2(file)}>
          <X size={14} color='red'/>
        </Button>
      </ListGroupItem>
      {
        inProgressImage2 ? (
          <div style={{ width: '100%' }} className='d-flex flex-column justify-content-center align-items-center mt-1'>
            <Label>{inProgressImage2.label}</Label>
            <Progress
              value={inProgressImage2.value}
              max={100}
              bar
              striped
              animated
            >
              {inProgressImage2.percentage}
            </Progress>
          </div>
        ) : (
          null
        )
      }
    </>
  ));


  const { isDirty } = formState;
  // useWarnIfUnsavedChanges(isDirty, () => {
  //   return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  // })

  const { fields, append, remove, insert } = useFieldArray({
    name: 'resep',
    control,
  });

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

  useEffect(() => {
    if (showRetina) {
      setValue('retina_submit', '1');
    } else if (!showRetina) {
      setValue('retina_submit', '0');
    }
  }, [showRetina])

  const handleRetinaButtonClick = () => {
    setShowRetina(true);
  }

  const handleRetinaCollapse = () => {
    setShowRetina(false);
  }

  const showConfirm = (): boolean => {
    return confirm('Data Berhasil Tersimpan, Apakah Lanjut Membuat BPRJ?');
  }

  const storeToastPrescription = (response: any) => {
    if (response && response.data && response.data.prescription) {
      const presc = response.data.prescription;
      if (!presc.statusCode && presc.message && presc.message === 'socket not found') {
        toast.error(
          <PrescriptionToast error={true} message='Resep gagal terkirim ke SIMRS. Silahkan simpan ulang form!!!'/>,
          { transition: Slide, icon: false, hideProgressBar: true, autoClose: 7000, position: toast.POSITION.TOP_CENTER, className:'bg-danger' },
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

  const handleSubmitForm = (value: IUpdateDoctorPreliminaryStudyRequest) => {
    setSignatureErr({ error: false, message: '' })
    if (!treatment) {
      return;
    }
    if (value.reviewer_doctor_sign === '') {
      setSignatureErr({ error: true, message: 'tanda tangan harus diisi' });
      return;
    }
    setProcessing(true)
    setInProgress({ value: 10, label: 'Updating Pengkajian Awal', percentage: '10%' })
    const val: any = value as any;
    const resep = val.resep;
    const prescriptionModel = ArrayPrescription.createFromForm(resep, data?.aturan_pakai);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateDoctorPreliminaryStudyRequest.createFromJson({...value, ...appRequest, ...prescriptionModel});
    dispatch(handlePdf(undefined));
    DoctorPreliminaryStudyService().update(params)
      .then(() => {
        setInProgress({ value: 40, label: 'Update Pengkajian Awal Sukses...', percentage: '40%' })
        DoctorPreliminaryStudyService().show(appRequest)
          .then((resp: any) => {
            setInProgress({ value: 75, label: 'Generating PDF...', percentage: '75%' })
            const { form, formRO } = resp.data.data;
            const dataPdf = CreatePDFData.createPdfRequest(form, formRO, treatment);
            const params = CreatePDFRequest.createFromJson({
              emr_id: appRequest.emr_id,
              form_name: 'rawat-jalan_pengkajian-awal_v3',
              row_filter: '',
              preview: false,
              data: dataPdf,
            });
            DoctorPreliminaryStudyService().pdfNew(params)
              .then(() => {
                setInProgress({ value: 100, label: 'PDF Generated...', percentage: '100%' })
                setTimeout(() => {
                  if (treatment.Tipe_Pasien === 'BPJS') {
                    const condition = showConfirm();
                    if (!condition) {
                      setIsPdfGenerated(true);
                    }
                    if (condition) {
                      dispatch(handleAutoSign(true));
                      router.push('/rawat-jalan/bukti-pelayanan-rawat-jalan');
                    }
                  }
                  if (treatment.Tipe_Pasien === 'UMUM') {
                    setIsPdfGenerated(true);
                  }
                }, 500)
              })
              .catch((err) => {
                setProcessing(false);
              })
          })
      });
    if (data && data.form && data.form.CPPT_ID && data.form.CPPT_ID !== '') {
      const stringO = UpdateDoctorPreliminaryStudyRequest.createDataOtoString(value);
      const cpptUpdateParams = UpdatePreliminaryCppt.createFromJson({
        data_s: value.complaint,
        data_a: `${value.diagnose && value.diagnose !== '' ? `Diagnosa Utama: ${value.diagnose}\n` : ''}${value.diagnosa_keseragaman && value.diagnosa_keseragaman !== '' ? `Diagnosa Sekunder: ${value.diagnosa_keseragaman}` : ''}`,
        data_p: value.therapy && value.therapy !== '' ? `Terapi: ${value.therapy}` : '',
        data_o: stringO,
        data_a_text: '',
        anjuran: value.suggestion,
        data_o_json: value,
        ...appRequest,
        eye_submit: ((value.od_eye_image && value.od_eye_image !== '') || (value.os_eye_image && value.os_eye_image !== '') ? '1' : '0'),
        retina_submit: value.retina_submit,
        gambar_mata_od: value.od_eye_image,
        gambar_mata_os: value.os_eye_image,
        gambar_retina_od: value.od_retina_image,
        gambar_retina_os: value.os_retina_image,
        id_dokter_pengkaji: value.reviewer_doctor_id,
        instruksi_ppa: value.note_note,
        pediatric: value.pediatric,
        pediatric_submit: value.pediatric_submit,
        ttd_dokter_pengkaji: value.reviewer_doctor_sign,
        waktu: value.date,
        ...prescriptionModel,
        is_form_doctor: true,
        unit: 'RawatJalan',
        ID: data.form.CPPT_ID,
        is_create_from_preliminary: true,
        'picture-data-o': ImageModel.convertToCpptImage(value['image-1']),
        'image-2': value['image-2'],
      });
      DoctorPreliminaryStudyService().updateCppt(cpptUpdateParams)
        .then((response: any) => {
          storeToastPrescription(response)
          setInProgress({ value: 60, label: 'Update CPPT Sukses....', percentage: '60%' })
          setIsSubmitted(true)
        })
        .catch((err) => console.log(err));
    } else {
      const stringO = UpdateDoctorPreliminaryStudyRequest.createDataOtoString(value);
      const cpptUpdateParams = CreatePreliminaryCppt.createFromJson({
        data_s: value.complaint,
        data_a: `${value.diagnose && value.diagnose !== '' ? `Diagnosa Utama: ${value.diagnose}\n` : ''}${value.diagnosa_keseragaman && value.diagnosa_keseragaman !== '' ? `Diagnosa Sekunder: ${value.diagnosa_keseragaman}` : ''}`,
        data_p: value.therapy && value.therapy !== '' ? `Terapi: ${value.therapy}` : '',
        data_o: stringO,
        data_a_text: '',
        data_o_json: value,
        anjuran: value.suggestion,
        ...appRequest,
        eye_submit: ((value.od_eye_image && value.od_eye_image !== '') || (value.os_eye_image && value.os_eye_image !== '') ? '1' : '0'),
        retina_submit: value.retina_submit,
        gambar_mata_od: value.od_eye_image,
        gambar_mata_os: value.os_eye_image,
        gambar_retina_od: value.od_retina_image,
        gambar_retina_os: value.os_retina_image,
        id_dokter_pengkaji: value.reviewer_doctor_id,
        instruksi_ppa: value.note_note,
        pediatric: value.pediatric,
        pediatric_submit: value.pediatric_submit,
        ttd_dokter_pengkaji: value.reviewer_doctor_sign,
        waktu: value.date,
        ...prescriptionModel,
        is_form_doctor: true,
        unit: 'RawatJalan',
        is_create_from_preliminary: true,
        'picture-data-o': ImageModel.convertToCpptImage(value['image-1']),
        'image-2': value['image-2'],
      });
      DoctorPreliminaryStudyService().createCppt(cpptUpdateParams)
        .then((response: any) => {
          storeToastPrescription(response)
          setInProgress({ value: 60, label: 'Create CPPT Sukses....', percentage: '60%' })
          setIsSubmitted(true)
        })
        .catch((err) => console.log(err));
    }
  }

  const handleDoctorSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue('reviewer_doctor_sign', image.Signature);
      setValue('reviewer_doctor_id', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('reviewer_doctor_sign', image.Signature);
      setValue('reviewer_doctor_id', image.ID_Karyawan);
    }
  }

  const onError = (errors: any, e: any) => console.log(errors, e);

  const handleDeleteMed = (index: any) => {
    remove(index);
  }

  const handleAddMed = () => {
    append({ meds_name: '', total: '', how_to_use: '', notes: '', satuan: '' })
    setTimeout(() => document.getElementById(`total_${fields.length}`)?.blur(), 10);
  }

  const handleChangeMed = (val: any, i: number) => {
    fields[i].satuan = val.satuan;
    insert(i, fields[i]);
    remove(i);
  }

  const handleImageOD = (image: string) => {
    setValue('od_eye_image', image)
  }

  const handleImageOS = (image: string) => {
    setValue('os_eye_image', image)
  }

  const handleRetinaOD = (image: string) => {
    setValue('od_retina_image', image)
  }

  const handleRetinaOS = (image: string) => {
    setValue('os_retina_image', image)
  }

  const handleChangeFontSize = (e: any) => {
    dispatch(handleFontSizePAD(e.target.value));
  }

  const handleICare = () => {
    if (bpjsValidate && bpjsValidate.response && bpjsValidate.response.url) {
      setIsOpen(true);
      return;
    }
    if (
      userData &&
      userData.isDokter &&
      userData.id &&
      treatment &&
      treatment.Pasien &&
      treatment.Pasien.NIK &&
      companyCode &&
      treatment.Tipe_Pasien &&
      treatment.Tipe_Pasien === 'BPJS'
    ) {
      setICareProcessing(true);
      const params = BPJSValidateRequest.createFromJson({
        employee_id: userData.id,
        param: treatment.Pasien.NIK,
        branch_code: companyCode,
      });
      BPJSService().validate(params)
        .then((response) => {
          const { data } = response;
          dispatch(handleBPJSValidate(data));
          setIsOpen(true);
          setICareProcessing(false);
        })
        .catch((err) => {
          console.error(err);
          setIsOpen(false);
          setICareProcessing(false);
        })
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm, onError)}>
        {
          userData && userData.isDokter && treatment && treatment.Tipe_Pasien && treatment.Tipe_Pasien === 'BPJS' && isICare ? (
            <SpinnerButton
              label="i-Care"
              className='icare-btn text-white fw-bolder'
              spinnerStyle={{ width: '1rem', height: '1rem' }}
              spinnerColor='light'
              processing={iCareProcessing}
              onClick={() => handleICare()}
            />
          ) : (
            null
          )
        }
        <Input
          type='hidden'
          name='cppt_id'
          innerRef={register({ required: true })}
          invalid={errors.cppt_id && true}
        />
        <Input
          id="retina-submit"
          type="hidden"
          name="retina_submit"
          innerRef={register({ required: true })}
          invalid={errors.retina_submit && true} />
        <Input
          id="time"
          type="hidden"
          name="time"
          innerRef={register({ required: true })}
          invalid={errors.time && true} />
        <FormGroup className='form-group mb-2' row>
          <Col className='d-flex align-items-center justify-content-end'>
            <Label className='me-1' style={{ fontSize: fontSizePAD }}>Font Size</Label>
            <Input
              type='select'
              name='font-size'
              defaultValue={fontSizePAD ?? '13px'}
              style={{ width: '100px', fontSize: fontSizePAD }}
              onChange={(e) => handleChangeFontSize(e)}
            >
              {
                fontSizes.map((item: any, key: number) => (
                  <option key={key} value={item.css}>{item.label}</option>
                ))
              }
            </Input>
          </Col>
        </FormGroup>
        <FormGroup className="form-group mt-3" row>
          <DateTimeInput
            name='date'
            label={`Tanggal & Waktu`}
            defaultValue='date'
            md={2}
            {...{ register, errors }}
          />
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label for="complaint" md="2" sm="12" style={{ fontSize: fontSizePAD }}>Keluhan</Label>
          <Col>
            <Input
              type="textarea"
              id="complaint"
              name="complaint"
              style={{ fontSize: fontSizePAD }}
              innerRef={register({ required: true })}
              invalid={errors.complaint && true} />
          </Col>
          {errors && errors.complaint && <FormFeedback>{errors.complaint.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className='form-group' row>
          <Col>
            <Label style={{ fontSize: '13pt', marginTop: '30px' }}><b>Pemeriksaan Visus Dan Refraksi</b></Label>
          </Col>
        </FormGroup>
        <FormGroup className="form-group">
          <Col style={{ fontSize: fontSizePAD }}>
            <PreliminaryStudyDetail preliminaryStudy={{ form: data.formRO }} />
          </Col>
        </FormGroup>
        <FormGroup className='form-group' row>
          <Col>
            <Label style={{ fontSize: '13pt', marginTop: '30px' }}><b>Pemeriksaan Dokter Mata (Opthalmologist)</b></Label>
          </Col>
        </FormGroup>
        <FormGroup className='form-group'>
          <Table borderless style={{ width: '100%' }}>
            <thead>
              <tr style={{ textAlign: 'center' }} className="fw-bolder">
                <th style={{ width: '18%' }}></th>
                <th style={{ width: '41%' }}>
                  OD
                </th>
                <th style={{ width: '41%' }}>
                  OS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="fw-bold">
                <td></td>
                <td>
                  <EyeImage
                    initialImage={(data && data.form && data.form.Gambar_Mata_OD && data.form.Gambar_Mata_OD !== '') ? data.form.Gambar_Mata_OD : undefined}
                    formName='rawat-jalan/pengkajian-awal'
                    component='pengkajian_awal_dokter_eye_OD'
                    onSaved={(image: string) => handleImageOD(image)}
                  />
                  <Input
                    id="od-eye-image"
                    type="hidden"
                    name="od_eye_image"
                    innerRef={register({ required: true })}
                    invalid={errors.od_eye_image && true} />
                </td>
                <td>
                  <EyeImage
                    initialImage={(data && data.form && data.form.Gambar_Mata_OS && data.form.Gambar_Mata_OS !== '') ? data.form.Gambar_Mata_OS : undefined}
                    formName='rawat-jalan/pengkajian-awal'
                    component='pengkajian_awal_dokter_eye_OS'
                    onSaved={(image: string) => handleImageOS(image)}
                  />
                  <Input
                    id="os-eye-image"
                    type="hidden"
                    name="os_eye_image"
                    innerRef={register({ required: true })}
                    invalid={errors.os_eye_image && true} />
                </td>
              </tr>
              {
                !showRetina &&
                <tr style={{ textAlign: 'left' }}>
                  <td>
                    <Button color='primary' type='button' onClick={handleRetinaButtonClick}>
                      <Plus size={15}/>
                      <span className="align-middle ml-50" style={{ fontSize: '9pt' }}>Gambar Retina</span>
                    </Button>
                    <Input
                      id="od_retina_image"
                      type="hidden"
                      name="od_retina_image"
                      innerRef={register({ required: true })}
                      invalid={errors.od_retina_image && true} />
                    <Input
                      id="os-retina-image"
                      type="hidden"
                      name="os_retina_image"
                      innerRef={register({ required: true })}
                      invalid={errors.os_retina_image && true} />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              }
            </tbody>
            {
              showRetina &&
                <>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>
                        <RetinaImage
                          initialImage={(data && data.form && data.form.Gambar_Retina_OD && data.form.Gambar_Retina_OD !== '') ? data.form.Gambar_Retina_OD : undefined}
                          onSaved={(image: string) => handleRetinaOD(image)}
                          formName='rawat-jalan/pengkajian-awal'
                          component='pengkajian_awal_dokter_retina_OD'
                          type='right' />
                        <Input
                          id="od-retina-image-1"
                          type="hidden"
                          name="od_retina_image"
                          innerRef={register({ required: true })}
                          invalid={errors.od_retina_image && true} />
                      </td>
                      <td>
                        <RetinaImage
                          initialImage={(data && data.form && data.form.Gambar_Retina_OS && data.form.Gambar_Retina_OS !== '') ? data.form.Gambar_Retina_OS : undefined}
                          onSaved={(image: string) => handleRetinaOS(image)}
                          formName='rawat-jalan/pengkajian-awal'
                          component='pengkajian_awal_dokter_retina_OS'
                          type='left' />
                        <Input
                          id="os-retina-image-1"
                          type="hidden"
                          name="os_retina_image"
                          innerRef={register({ required: true })}
                          invalid={errors.os_retina_image && true} />
                      </td>
                    </tr><tr>
                      <td>
                        <Button color='danger' type='button' onClick={handleRetinaCollapse}>
                          <Minus size={15}/>
                          <span className="align-middle ml-50" style={{ fontSize: '9pt' }}>Gambar Retina</span>
                        </Button>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </>
            }
          </Table>
        </FormGroup>
        <FormGroup className='form-group' style={{ fontSize: fontSizePAD }}>
          <PediatricForm
            defaultSelected={showPediatric}
            data={data.form && data.form.Pediatrik ? data.form.Pediatrik : undefined}
            {...{ register, errors, setValue, getValues }}
          />
        </FormGroup>
        <FormGroup className='form-group'>
          <Table borderless style={{ width: '100%' }} className={fontSizePAD ? `font-${fontSizePAD.substring(0, 2)}` : ''}>
            <tbody>
              <tr>
                <td style={{ width: '24%' }}>
                  <b>Posisi</b>
                </td>
                <td style={{ width: '38%' }}>
                  <TextInput
                    name='od_position'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
                <td style={{ width: '38%' }}>
                  <TextInput
                    name='os_position'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Pergerakan</b>
                </td>
                <td>
                  <TextInput
                    name='od_movement'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
                <td>
                  <TextInput
                    name='os_movement'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ textAlignLast: 'left' }}>
                  <b>Palpebra Superior</b>
                </td>
                <td>
                  <TextInput
                    name='od_palpebra_superior'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
                <td>
                  <TextInput
                    name='os_palpebra_superior'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Palpebra Inferior</b>
                </td>
                <td>
                  <TextInput
                    name='od_palpebra_inferior'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
                <td>
                  <TextInput
                    name='os_palpebra_inferior'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Sclera</b>
                </td>
                <td>
                  <TextInput
                    name='sclera_od'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
                <td>
                  <TextInput
                    style={{ fontSize: fontSizePAD }}
                    name='sclera_os'
                    {...{ register, errors }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Conj. Tarsal Superior</b>
                </td>
                <td>
                  <TextInput
                    name='conj_tarsal_superior_od'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
                <td>
                  <TextInput
                    name='conj_tarsal_superior_os'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Conj. Tarsal Inferior</b>
                </td>
                <td>
                  <TextInput
                    name='conj_tarsal_inferior_od'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
                <td>
                  <TextInput
                    name='conj_tarsal_inferior_os'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Conj. Bulbi</b>
                </td>
                <td>
                  <TextInput
                    name='conj_bulbi_od'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
                <td>
                  <TextInput
                    name='conj_bulbi_os'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Canthal Medial</b>
                </td>
                <td>
                  <TextInput
                    name='canthal_medial_od'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
                <td>
                  <TextInput
                    style={{ fontSize: fontSizePAD }}
                    name='canthal_medial_os'
                    {...{ register, errors }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Canthal Lateral</b>
                </td>
                <td>
                  <TextInput
                    name='canthal_lateral_od'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
                <td>
                  <TextInput
                    style={{ fontSize: fontSizePAD }}
                    name='canthal_lateral_os'
                    {...{ register, errors }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Cornea</b>
                </td>
                <td>
                  <TextInput
                    name='cornea_od'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
                <td>
                  <TextInput
                    name='cornea_os'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>C.O.A</b>
                </td>
                <td>
                  <TextInput
                    name='coa_od'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
                <td>
                  <TextInput
                    name='coa_os'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Pupil</b>
                </td>
                <td>
                  <TextInput
                    name='od_pupil'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
                <td>
                  <TextInput
                    name='os_pupil'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Iris</b>
                </td>
                <td>
                  <TextInput
                    name='od_iris'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
                <td>
                  <TextInput
                    name='os_iris'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Lensa</b>
                </td>
                <td>
                  <TextInput
                    name='od_lens'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
                <td>
                  <TextInput
                    name='os_lens'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Vitreous</b>
                </td>
                <td>
                  <TextInput
                    name='od_vitreous'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
                <td>
                  <TextInput
                    name='os_vitreous'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Funduscopy</b>
                </td>
                <td>
                  <TextInput
                    name='funduscopy_od'
                    style={{ fontSize: fontSizePAD }}
                    {...{ register, errors }}
                  />
                </td>
                <td>
                  <TextInput
                    style={{ fontSize: fontSizePAD }}
                    name='funduscopy_os'
                    {...{ register, errors }}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </FormGroup>
        <FormGroup className='form-group' style={{ paddingRight: '20px' }}>
          <Table borderless style={{ width: '100%' }} className={`align-items-center font-${fontSizePAD ? fontSizePAD.substring(0, 2) : ''}`}>
            <tbody>
              <tr>
                <td style={{ width: '24%' }}>
                  <b>Data Objective Lainnya</b>
                </td>
                <td className='px-2'>
                  <Input
                    type='textarea'
                    className='mb-2 fw-bolder'
                    style={{ marginLeft: '13px', fontSize: fontSizePAD }}
                    name='data_objektif_lain'
                    innerRef={register({ required: true })}
                    invalid={errors['data_objektif_lain'] && true}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
          <Table className='w-full' borderless>
            <tr>
              <td style={{ width: '50%' }}>
                <tr>
                  <td style={{ width: '15%' }}></td>
                  <td style={{ width: '35%' }}>
                    <Row>
                      <Col>
                        <div {...getFilesProps1()} className="dropzone my-3">
                          <input name="logo" placeholder='Logo'  {...getInputFilesProps1()} />
                          <div className="d-flex align-items-center justify-content-center flex-column">
                            <DownloadCloud size="50" />
                            <h5>Upload Image I</h5>
                          </div>
                        </div>
                        {files1.length ? (
                          <Fragment>
                            <ListGroup className='my-2'>{fileList1[0]}</ListGroup>
                          </Fragment>
                        ) : null}
                      </Col>
                    </Row>
                  </td>
                </tr>
              </td>
              <td style={{ width: '50%' }}>
                <tr>
                  <td style={{ width: '15%' }}></td>
                  <td style={{ width: '35%' }}>
                    <Row>
                      <Col>
                        <div {...getFilesProps2()} className="dropzone my-3">
                          <input name="logo" placeholder='Logo'  {...getInputFilesProps2()} />
                          <div className="d-flex align-items-center justify-content-center flex-column">
                            <DownloadCloud size="50" />
                            <h5>Upload Image II</h5>
                          </div>
                        </div>
                        {files2.length ? (
                          <Fragment>
                            <ListGroup className='my-2'>{fileList2[0]}</ListGroup>
                          </Fragment>
                        ) : null}
                      </Col>
                    </Row>
                  </td>
                </tr>
              </td>
            </tr>
          </Table>

          <Input
            id="image-1.Url_Image"
            type="hidden"
            name="image-1.Url_Image"
            innerRef={register()}
          />
          <Input
            id="image-1.Name_Image"
            type="hidden"
            name="image-1.Name_Image"
            innerRef={register()}
          />
          <Input
            id="image-1.Type_Image"
            type="hidden"
            name="image-1.Type_Image"
            innerRef={register()}
          />
          <Input
            id="image-1.Size_Image"
            type="hidden"
            name="image-1.Size_Image"
            innerRef={register()}
          />

          <Input
            id="picture-data-o.Url_Image_Cppt_Data_O"
            type="hidden"
            name="picture-data-o.Url_Image_Cppt_Data_O"
            innerRef={register()}
          />
          <Input
            id="picture-data-o.Name_Image_Cppt_Data_O"
            type="hidden"
            name="picture-data-o.Name_Image_Cppt_Data_O"
            innerRef={register()}
          />
          <Input
            id="picture-data-o.Type_Image_Cppt_Data_O"
            type="hidden"
            name="picture-data-o.Type_Image_Cppt_Data_O"
            innerRef={register()}
          />
          <Input
            id="picture-data-o.Size_Image_Cppt_Data_O"
            type="hidden"
            name="picture-data-o.Size_Image_Cppt_Data_O"
            innerRef={register()}
          />

          <Input
            id="image-2.Url_Image"
            type="hidden"
            name="image-2.Url_Image"
            innerRef={register()}
          />
          <Input
            id="image-2.Name_Image"
            type="hidden"
            name="image-2.Name_Image"
            innerRef={register()}
          />
          <Input
            id="image-2.Type_Image"
            type="hidden"
            name="image-2.Type_Image"
            innerRef={register()}
          />
          <Input
            id="image-2.Size_Image"
            type="hidden"
            name="image-2.Size_Image"
            innerRef={register()}
          />

        </FormGroup>
        <FormGroup className='form-group' style={{ paddingRight: '20px' }}>
          <Table borderless style={{ width: '100%' }} className={`align-items-center font-${fontSizePAD ? fontSizePAD.substring(0, 2) : ''}`}>
            <tbody>
              <tr>
                <td style={{ width: '24%' }}>
                  <b>Diagnosa Utama</b>
                </td>
                <td className='px-2'>
                  <Input
                    type='textarea'
                    className='mb-2 fw-bolder'
                    style={{ marginLeft: '13px', fontSize: fontSizePAD }}
                    name='diagnose'
                    innerRef={register({ required: true })}
                    invalid={errors.diagnose && true}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ width: '24%' }} className='text-start justify-content-center'>
                  <b>{`Diagnosa Sekunder`}</b>
                </td>
                <td className='px-2'>
                  <Input
                    type='textarea'
                    className='mb-2 fw-bolder'
                    style={{ marginLeft: '13px', fontSize: fontSizePAD }}
                    name='diagnosa_keseragaman'
                    innerRef={register({ required: true })}
                    invalid={errors.diagnosa_keseragaman && true}
                  />
                </td>
              </tr>
              <tr>
                <td><b>Terapi/Tindakan</b></td>
                <td className='px-2'>
                  <Input
                    type='textarea'
                    className='mt-2 mb-2 fw-bolder'
                    style={{ marginLeft: '13px', fontSize: fontSizePAD }}
                    name='therapy'
                    innerRef={register({ required: true })}
                    invalid={errors.therapy && true}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  {
                    data && data.formFarmasi && data.formFarmasi.Status_Tebus && data.formFarmasi.Status_Tebus === '1' ? (
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
                                      name={`resep[${i}].meds_name`}
                                      defaultValue={{ label: rec.nama_obat, value: rec.meds_name }}
                                      render={({ onChange, name, ref }) => (
                                        <BaseSelect
                                          ref={ref}
                                          defaultValue={{ label: rec.nama_obat, value: rec.meds_name }}
                                          options={data && data.obat.map((med: Medicine) => ({ label: med.Nama_Inventory, value: med.Kode_Inventory, satuan: med.Nama_Satuan }))}
                                          name={name}
                                          onChange={(val) => {
                                            onChange(val);
                                            handleChangeMed(val, i);
                                          } }
                                          isDisabled />
                                      )} />
                                  </td>
                                  <td>
                                    {rec.satuan}
                                  </td>
                                  <td>
                                    <Input
                                      type='number'
                                      id={`total_tebus_${i}`}
                                      name={`resep[${i}].total`}
                                      defaultValue={rec.total}
                                      innerRef={register()}
                                      style={{ width: '50px' }}
                                      readOnly/>
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
                                          options={data && data.aturan_pakai && data.aturan_pakai.map((med: HowToUse) => ({ label: med.Kode, value: med.Kode, id: med.ID_AturanPakai }))}
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
                                      name={`resep[${i}].notes`}
                                      defaultValue={rec.notes}
                                      innerRef={register()}
                                      readOnly/>
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
                            <td className='pt-2' style={{ width: '35%' }}><b>Aturan Pakai</b></td>
                            <td className='pt-2'style={{ width: '20%' }}><b>Catatan</b></td>
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
                                      rules={{required: true}}
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
                                            options={data && data.obat.map((med: Medicine) => ({ label: med.Nama_Inventory, value: med.Kode_Inventory, satuan: med.Nama_Satuan }))}
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
                                      id={`total_${i}`}
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
                                            options={data && data.aturan_pakai.map((med: HowToUse) => ({ label: med.Kode, value: med.Kode, id: med.ID_AturanPakai }))}
                                          />
                                        </Fragment>
                                      )}
                                    />
                                  </td>
                                  <td className='pt-0' style={{ marginTop: 0 }}>
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
                </td>
              </tr>
              <tr>
                <td>
                  {
                    data && data.formFarmasi && data.formFarmasi.Status_Tebus && data.formFarmasi.Status_Tebus === '1' ? (
                      <>
                        <Button style={{ padding: '4px', marginTop: '8px' }} color='primary' className='me-1' type='button' disabled>
                          <Plus size={15} />
                          Tambah Obat
                        </Button>
                        <MedsPackage
                          disabled
                          data={data.paket_obat ? data.paket_obat : undefined}
                          allMeds={data.obat ? data.obat : undefined}
                          allHtu={data.aturan_pakai ? data.aturan_pakai : undefined}
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
                          data={data.paket_obat ? data.paket_obat : undefined}
                          allMeds={data.obat ? data.obat : undefined}
                          allHtu={data.aturan_pakai ? data.aturan_pakai : undefined}
                          onSelectPackage={(selected: any) => handleAddMedsFromPackage(selected)}
                        />
                      </>
                    )
                  }
                </td>
              </tr>
              {
                data && data.formFarmasi && data.formFarmasi.Status_Tebus && data.formFarmasi.Status_Tebus === '1' && (
                  <tr>
                    <td colSpan={2}>
                      <Label className='text-danger mt-3'>
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
                          {
                            data && data.formFarmasi && data.formFarmasi.Daftar_Tebus && Array.isArray(data.formFarmasi.Daftar_Tebus) && data.formFarmasi.Daftar_Tebus.length > 0 && data.formFarmasi.Daftar_Tebus.map((item: IDaftarTebus, key: number) => (
                              <tr key={key}>
                                <td>{`${key + 1}`}</td>
                                <td>{item.Nama_Obat}</td>
                                <td>{item.Nama_Satuan}</td>
                                <td>{item.Jumlah}</td>
                                <td>{item.Kode_AturanPakai}</td>
                                <td>{item.Catatan}</td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </Table>
                    </td>
                  </tr>
                )
              }
              <tr>
                <td><b>Anjuran</b></td>
                <td>
                  <Input
                    type='textarea'
                    className='mt-2 mb-2 fw-bolder'
                    style={{ width: '705px', marginLeft: '28px', fontSize: fontSizePAD }}
                    name='suggestion'
                    innerRef={register({ required: true })}
                    invalid={errors.suggestion && true}
                  />
                </td>
              </tr>
              <tr>
                <td><b>Note / Catatan</b></td>
                <td>
                  <Input
                    type='textarea'
                    className='mt-2 mb-2 fw-bolder'
                    style={{ width: '705px', marginLeft: '28px', fontSize: fontSizePAD }}
                    name='note_note'
                    innerRef={register({ required: true })}
                    invalid={errors.note_note && true}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </FormGroup>
        <FormGroup className='form-group align-items-center ms-1' row>
          <Col md='2' className='align-items-center'>
            <Label style={{ fontSize: fontSizePAD }}>Dokter Pengkajian Awal :</Label>
          </Col>
          <Col className='me-5'>
            <Signature
              label="Dokter"
              additionalLabel={(data && data.form && data.form.Nama_Dokter_Pengkaji !== '') ? data.form.Nama_Dokter_Pengkaji : undefined}
              type="picker"
              initialImage={(data && data.form && data.form.TTD_Dokter_Pengkaji && data.form.TTD_Dokter_Pengkaji !== '') ? data.form.TTD_Dokter_Pengkaji : undefined}
              persons={doctors}
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
              id="reviewer_doctor_sign"
              type="hidden"
              name="reviewer_doctor_sign"
              innerRef={register({ required: true })}
              invalid={errors.reviewer_doctor_sign && true}
            />
            <Input
              id="reviewer_doctor_id"
              type="hidden"
              name="reviewer_doctor_id"
              innerRef={register({ required: true })}
              invalid={errors.reviewer_doctor_id && true}
            />
            {
              signatureErr && signatureErr.error && (
                <p style={{ fontSize: '10pt', marginLeft: '560px' }} className='text-danger'>{signatureErr.message}</p>
              )
            }
          </Col>
        </FormGroup>
        <FormGroup className="form-group align-items-center ms-1 mt-1" row>
          <Col md='2'></Col>
          <Col className='d-flex align-items-center justify-content-center me-5'>
            <SubmitButton
              label="Simpan"
              buttonColor='primary'
              spinnerStyle={{ width: '1rem', height: '1rem' }}
              spinnerColor='light'
              processing={processing}
            />
            {
              pdfData && Array.isArray(pdfData) && pdfData.length > 0 ? (
                <a color='success' href={`${pdfData[0].URL}`} target="_blank" rel="noreferrer">
                  <Button className='me-1' color='success' type='button'>
                    Cetak
                  </Button>
                </a>
              ) : (
                <Button className='me-1' color='success' type='button' disabled>
                  Cetak
                </Button>
              )
            }
          </Col>
        </FormGroup>
        {
          inProgress ? (
            <FormGroup className='form-group ms-1' row>
              <Col md='2'></Col>
              <Col className='d-flex align-items-center justify-content-center me-5'>
                <div style={{ width: '30%' }} className='d-flex flex-column justify-content-center align-items-center'>
                  <Label>{inProgress.label}</Label>
                  <Progress
                    value={inProgress.value}
                    max={100}
                    bar
                    striped
                    animated
                  >
                    {inProgress.percentage}
                  </Progress>
                </div>
              </Col>
            </FormGroup>
          ) : (
            null
          )
        }
        <FormGroup className='form-group mt-1 ms-1' row>
          <Col md='2'></Col>
          <Col className='me-5'>
            <div className='d-flex justify-content-center align-items-center'>
              <Label style={{ fontSize: fontSizePAD }} className='me-1'>Terakhir Disimpan:</Label>
              <Label style={{ fontSize: fontSizePAD }}>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
            </div>
          </Col>
        </FormGroup>
      </Form>
      {
        bpjsValidate && bpjsValidate.response && bpjsValidate.response.url ? (
          <ICareModal
            {...{isOpen, setIsOpen}}
            url={bpjsValidate?.response?.url}
          />
        ) : (
          null
        )
      }
    </>
  )
}

export default DoctorPreliminaryStudyForm;
