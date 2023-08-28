import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import { useForm } from "react-hook-form";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { FindPdfRequest, IPdfModel } from "@shared/pdf";
import { useEffect, useState } from "react";
import { AppRequest } from "@shared/request";
import { Signature } from "@shared/signature/components";
import { SignatureModel } from "@shared/signature/models/signature.model";
import { SubmitButton } from "@shared/button";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
/*PDF*/
import {
  fetchNursingCarePlan,
  fetchNursingCarePlanPdf,
  handlePdf,
} from "@modules/inpatient/nursing-care-plan/stores/nursing-care-plan.store";
/*CRUD*/
import {
  IUpdateNursingCarePlanRequest,
  UpdateNursingCarePlanRequest,
} from "@modules/inpatient/nursing-care-plan/requests/update-nursing-care-plan.request";
import { NursingCarePlan } from "@modules/inpatient/nursing-care-plan/models/nursing-care-plan.model";
import { NursingCarePlanService} from "@modules/inpatient/nursing-care-plan/services";
import { PdfNursingCarePlanRequest } from '@modules/inpatient/nursing-care-plan/requests/pdf-nursing-care-plan.request';
import ImmuneSystemMain from "./immune-system/immune-system-main";
import PerceptionSensoryMain from "./perception-sensory/perception-sensory-main";
import FluidNutritionMain from "./fluid-nutrition/fluid-nutrition-main";
import ActivityCleanMain from "./activity-clean/activity-clean-main";
import RestSleepMain from "./rest-sleep/rest-sleep-main";
import PsychosocialSpiritualMain from "./psychosocial-spiritual/psychosocial-spiritual-main";
import PerceptionSensorySightMain from "./perception-sensory-sight/perception-sensory-sight-main";
import ImmuneSystem2Main from "./immune-system2/immune-system2-main";
import { DateTimeConverter } from "@src/shared/datetime-converter";

const NursingCarePlanForm = (props: { data: NursingCarePlan }) => {
  const { data } = props;
  const dispatch = useAppDispatch();
  const { doctors } = useAppSelector((state) => state.doctor);
  const [processing, setProcessing] = useState(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const { treatment } = useAppSelector((state) => state.patient);
  const { pdf } = useAppSelector((state) => state.nursingCarePlan);
  const { nurses } = useAppSelector(state => state.nurse);
  const [activeTab, setActiveTab] = useState<string>('1');
  const [perawatId, setPerawatId] = useState<string | undefined>(`${data?.form?.Perawat_Id}`);
  const [kamarId, setKamarId] = useState<string | undefined>(`${data?.form?.Kamar_Id}`);
  const arrKamar  = data.kamar;


  useEffect(() => {
    if (perawatId)  {
      setValue('perawat_id', perawatId);
      getKaryawan(perawatId);
    }
  }, [perawatId]);

  useEffect(() => {
    if (kamarId)  {
      setValue('kamar_id', kamarId);
      getKamar(kamarId);
    }
  }, [kamarId]);

  const getKaryawan = (idnurses: string) => {
    if (nurses) {
      const selectedKaryawan = nurses.find((val: any) => val.ID_Karyawan === idnurses)
      if (selectedKaryawan) {
        return selectedKaryawan.Nama;
      }
    } else {
      return '';
    }
  }

  const getKamar = (kamar: string) => {
    if (data.kamar) {
      const selectedKamar = data.kamar.find((val: any) => val.ID_Kamar === parseInt(kamar))
      if (selectedKamar) {
        return selectedKamar.Nama_Kamar;
      }
    } else {
      return '';
    }
  }

  useEffect(() => {
    if (treatment) {
      dispatch(fetchNursingCarePlanPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_rencana-asuhan-keperawatan' })));
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
    } else {
      return data?.inform_consent?.Diagnosis;
    }
  }

  const { register, handleSubmit, setValue, formState, reset, errors } =
    useForm({
      mode: "onChange",
      criteriaMode: "all",
      shouldFocusError: true,
      resolver: yupResolver(UpdateNursingCarePlanRequest.schema()),
      defaultValues: {

        diagnosa_medis   :  data?.form?.Diagnosa_Medis || getKesimpulan(),
        kamar_id   :  data?.form?.Kamar_Id,
        perawat_id   :  data?.form?.Perawat_Id,
        nama_perawat   :  data?.form?.Nama_Perawat,

        tanggal_si   :  data?.form?.Tanggal_Si,
        diagnosa1_si_check   :  data?.form?.Diagnosa1_Si_Check,
        diagnosa1_si_1_check   :  data?.form?.Diagnosa1_Si_1_Check,
        diagnosa1_si_2_check   :  data?.form?.Diagnosa1_Si_2_Check,
        diagnosa1_si_3_check   :  data?.form?.Diagnosa1_Si_3_Check,

        diagnosa2_si_check   :  data?.form?.Diagnosa2_Si_Check,
        diagnosa2_si_1_check   :  data?.form?.Diagnosa2_Si_1_Check,
        diagnosa2_si_2_check   :  data?.form?.Diagnosa2_Si_2_Check,
        diagnosa2_si_3_check   :  data?.form?.Diagnosa2_Si_3_Check,

        diagnosa3_si_check   :  data?.form?.Diagnosa3_Si_Check,
        diagnosa3_si_1_check   :  data?.form?.Diagnosa3_Si_1_Check,
        diagnosa3_si_2_check   :  data?.form?.Diagnosa3_Si_2_Check,

        tujuan1_si_check   :  data?.form?.Tujuan1_Si_Check,
        tujuan1_si_jam_1   :  data?.form?.Tujuan1_Si_Jam_1,
        tujuan1_si_jam_2   :  data?.form?.Tujuan1_Si_Jam_2,
        tujuan1_si_1_check   :  data?.form?.Tujuan1_Si_1_Check,
        tujuan1_si_2_check   :  data?.form?.Tujuan1_Si_2_Check,
        tujuan1_si_3_check   :  data?.form?.Tujuan1_Si_3_Check,
        tujuan1_si_3_text   :  data?.form?.Tujuan1_Si_3_Text,
        tujuan2_si_check   :  data?.form?.Tujuan2_Si_Check,
        tujuan2_si_jam_1   :  data?.form?.Tujuan2_Si_Jam_1,
        tujuan2_si_jam_2   :  data?.form?.Tujuan2_Si_Jam_2,
        tujuan2_si_1_check   :  data?.form?.Tujuan2_Si_1_Check,
        tujuan2_si_2_check   :  data?.form?.Tujuan2_Si_2_Check,
        tujuan2_si_3_check   :  data?.form?.Tujuan2_Si_3_Check,
        tujuan2_si_4_check   :  data?.form?.Tujuan2_Si_4_Check,
        tujuan2_si_5_Check :  "",
        tujuan3_si_check   :  data?.form?.Tujuan3_Si_Check,
        tujuan3_si_text   :  data?.form?.Tujuan3_Si_Text,

        rencana1_si_check :  "",
        rencana1_si_1_check   :  data?.form?.Rencana1_Si_1_Check,
        rencana1_si_2_check   :  data?.form?.Rencana1_Si_2_Check,
        rencana1_si_3_check   :  data?.form?.Rencana1_Si_3_Check,
        rencana1_si_4_check   :  data?.form?.Rencana1_Si_4_Check,
        rencana1_si_5_check   :  data?.form?.Rencana1_Si_5_Check,
        rencana1_si_6_check   :  data?.form?.Rencana1_Si_6_Check,
        rencana1_si_7_check   :  data?.form?.Rencana1_Si_7_Check,
        rencana1_si_8_check   :  data?.form?.Rencana1_Si_8_Check,
        rencana2_si_check :  "",
        rencana2_si_1_check   :  data?.form?.Rencana2_Si_1_Check,
        rencana2_si_1_text   :  data?.form?.Rencana2_Si_1_Text,
        rencana2_si_2_check   :  data?.form?.Rencana2_Si_2_Check,
        rencana2_si_2_text   :  data?.form?.Rencana2_Si_2_Text,
        rencana2_si_3_check   :  data?.form?.Rencana2_Si_3_Check,
        rencana2_si_3_text   :  data?.form?.Rencana2_Si_3_Text,

        tanggal_ps  :  data?.form?.Tanggal_Ps,
        diagnosa1_ps_check  :  data?.form?.Diagnosa1_Ps_Check,
        diagnosa1_ps_1_check   :  data?.form?.Diagnosa1_Ps_1_Check,
        diagnosa1_ps_1_text  :  data?.form?.Diagnosa1_Ps_1_Text,
        diagnosa1_ps_2_check   :  data?.form?.Diagnosa1_Ps_2_Check,
        diagnosa1_ps_2_text  :  data?.form?.Diagnosa1_Ps_2_Text,
        diagnosa1_ps_3_check  :  data?.form?.Diagnosa1_Ps_3_Check,
        diagnosa1_ps_3_text  :  data?.form?.Diagnosa1_Ps_3_Text,
        diagnosa1_ps_4_check  :  data?.form?.Diagnosa1_Ps_4_Check,
        diagnosa1_ps_5_check  :  data?.form?.Diagnosa1_Ps_5_Check,
        diagnosa1_ps_6_check  :  data?.form?.Diagnosa1_Ps_6_Check,
        tujuan1_ps_check  :  data?.form?.Tujuan1_Ps_Check,
        tujuan1_ps_jam_1  :  data?.form?.Tujuan1_Ps_Jam_1,
        tujuan1_ps_jam_2  :  data?.form?.Tujuan1_Ps_Jam_2,
        tujuan1_ps_1_check  :  data?.form?.Tujuan1_Ps_1_Check,
        tujuan1_ps_2_check  :  data?.form?.Tujuan1_Ps_2_Check,
        tujuan1_ps_3_check  :  data?.form?.Tujuan1_Ps_3_Check,
        tujuan1_ps_4_check  :  data?.form?.Tujuan1_Ps_4_Check,
        rencana1_ps_1_check  :  data?.form?.Rencana1_Ps_1_Check,
        rencana1_ps_2_check  :  data?.form?.Rencana1_Ps_2_Check,
        rencana1_ps_3_check  :  data?.form?.Rencana1_Ps_3_Check,
        rencana1_ps_4_check  :  data?.form?.Rencana1_Ps_4_Check,
        rencana1_ps_5_check  :  data?.form?.Rencana1_Ps_5_Check,
        rencana1_ps_6_check  :  data?.form?.Rencana1_Ps_6_Check,
        rencana1_ps_7_check  :  data?.form?.Rencana1_Ps_7_Check,
        rencana2_ps_1_check  :  data?.form?.Rencana2_Ps_1_Check,
        rencana2_ps_1_text  :  data?.form?.Rencana2_Ps_1_Text,
        rencana2_ps_2_check  :  data?.form?.Rencana2_Ps_2_Check,
        rencana2_ps_2_text  :  data?.form?.Rencana2_Ps_2_Text,
        rencana2_ps_3_check  :  data?.form?.Rencana2_Ps_3_Check,
        rencana2_ps_3_text  :  data?.form?.Rencana2_Ps_3_Text,

        tanggal_nc  :  data?.form?.Tanggal_Nc,
        diagnosa1_nc_check  :  data?.form?.Diagnosa1_Nc_Check,
        diagnosa1_nc_1_check  :  data?.form?.Diagnosa1_Nc_1_Check,
        diagnosa1_nc_2_check  :  data?.form?.Diagnosa1_Nc_2_Check,
        diagnosa1_nc_3_check  :  data?.form?.Diagnosa1_Nc_3_Check,
        diagnosa2_nc_check  :  data?.form?.Diagnosa2_Nc_Check,
        diagnosa2_nc_1_check  :  data?.form?.Diagnosa2_Nc_1_Check,
        diagnosa3_nc_check  :  data?.form?.Diagnosa3_Nc_Check,
        diagnosa3_nc_1_check  :  data?.form?.Diagnosa3_Nc_1_Check,
        diagnosa3_nc_2_check  :  data?.form?.Diagnosa3_Nc_2_Check,
        diagnosa3_nc_3_check  :  data?.form?.Diagnosa3_Nc_3_Check,
        diagnosa3_nc_4_check  :  data?.form?.Diagnosa3_Nc_4_Check,
        diagnosa3_nc_5_check  :  data?.form?.Diagnosa3_Nc_5_Check,
        diagnosa3_nc_5_text  :  data?.form?.Diagnosa3_Nc_5_Text,
        diagnosa4_nc_check  :  data?.form?.Diagnosa4_Nc_Check,
        diagnosa4_nc_1_check  :  data?.form?.Diagnosa4_Nc_1_Check,
        diagnosa5_nc_check  :  data?.form?.Diagnosa5_Nc_Check,
        diagnosa5_nc_1_check  :  data?.form?.Diagnosa5_Nc_1_Check,
        diagnosa5_nc_2_check  :  data?.form?.Diagnosa5_Nc_2_Check,
        tujuan1_nc_check  :  data?.form?.Tujuan1_Nc_Check,
        tujuan1_nc_jam_1  :  data?.form?.Tujuan1_Nc_Jam_1,
        tujuan1_nc_jam_2  :  data?.form?.Tujuan1_Nc_Jam_2,
        tujuan1_nc_1_check  :  data?.form?.Tujuan1_Nc_1_Check,
        tujuan1_nc_2_check  :  data?.form?.Tujuan1_Nc_2_Check,
        tujuan1_nc_3_check  :  data?.form?.Tujuan1_Nc_3_Check,
        tujuan1_nc_4_check  :  data?.form?.Tujuan1_Nc_4_Check,
        tujuan1_nc_5_check  :  data?.form?.Tujuan1_Nc_5_Check,
        tujuan1_nc_6_check  :  data?.form?.Tujuan1_Nc_6_Check,
        tujuan1_nc_6_text  :  data?.form?.Tujuan1_Nc_6_Text,
        tujuan2_nc_check  :  data?.form?.Tujuan2_Nc_Check,
        tujuan2_nc_jam_1  :  data?.form?.Tujuan2_Nc_Jam_1,
        tujuan2_nc_jam_2  :  data?.form?.Tujuan2_Nc_Jam_2,
        tujuan2_nc_1_check  :  data?.form?.Tujuan2_Nc_1_Check,
        tujuan2_nc_2_check  :  data?.form?.Tujuan2_Nc_2_Check,
        tujuan2_nc_3_check  :  data?.form?.Tujuan2_Nc_3_Check,
        tujuan2_nc_4_check  :  data?.form?.Tujuan2_Nc_4_Check,
        tujuan3_nc_check  :  data?.form?.Tujuan3_Nc_Check,
        tujuan3_nc_jam_1  :  data?.form?.Tujuan3_Nc_Jam_1,
        tujuan3_nc_jam_2  :  data?.form?.Tujuan3_Nc_Jam_2,
        tujuan3_nc_1_check  :  data?.form?.Tujuan3_Nc_1_Check,
        tujuan3_nc_2_check  :  data?.form?.Tujuan3_Nc_2_Check,
        tujuan3_nc_3_check  :  data?.form?.Tujuan3_Nc_3_Check,
        tujuan3_nc_3_text  :  data?.form?.Tujuan3_Nc_3_Text,
        tujuan4_nc_check  :  data?.form?.Tujuan4_Nc_Check,
        rencana1_nc_1_check  :  data?.form?.Rencana1_Nc_1_Check,
        rencana1_nc_2_check  :  data?.form?.Rencana1_Nc_2_Check,
        rencana1_nc_3_check  :  data?.form?.Rencana1_Nc_3_Check,
        rencana1_nc_3_text  :  data?.form?.Rencana1_Nc_3_Text,
        rencana1_nc_4_check  :  data?.form?.Rencana1_Nc_4_Check,
        rencana1_nc_5_check  :  data?.form?.Rencana1_Nc_5_Check,
        rencana1_nc_6_check  :  data?.form?.Rencana1_Nc_6_Check,
        rencana1_nc_7_check  :  data?.form?.Rencana1_Nc_7_Check,
        rencana1_nc_8_check  :  data?.form?.Rencana1_Nc_8_Check,
        rencana1_nc_9_check  :  data?.form?.Rencana1_Nc_9_Check,
        rencana1_nc_10_check  :  data?.form?.Rencana1_Nc_10_Check,
        rencana1_nc_11_check  :  data?.form?.Rencana1_Nc_11_Check,
        rencana1_nc_12_check  :  data?.form?.Rencana1_Nc_12_Check,
        rencana1_nc_12_text  :  data?.form?.Rencana1_Nc_12_Text,
        rencana2_nc_1_check  :  data?.form?.Rencana2_Nc_1_Check,
        rencana2_nc_2_check  :  data?.form?.Rencana2_Nc_2_Check,
        rencana2_nc_3_check  :  data?.form?.Rencana2_Nc_3_Check,
        rencana2_nc_3_text  :  data?.form?.Rencana2_Nc_3_Text,

        tanggal_kd  :  data?.form?.Tanggal_Kd,
        diagnosa1_kd_check  :  data?.form?.Diagnosa1_Kd_Check,
        diagnosa1_kd_1_check  :  data?.form?.Diagnosa1_Kd_1_Check,
        diagnosa1_kd_2_check  :  data?.form?.Diagnosa1_Kd_2_Check,
        diagnosa1_kd_3_check  :  data?.form?.Diagnosa1_Kd_3_Check,
        diagnosa1_kd_4_check  :  data?.form?.Diagnosa1_Kd_4_Check,
        diagnosa2_kd_check  :  data?.form?.Diagnosa2_Kd_Check,
        diagnosa2_kd_text  :  data?.form?.Diagnosa2_Kd_Text,
        tujuan1_kd_check  :  data?.form?.Tujuan1_Kd_Check,
        tujuan1_kd_jam_1  :  data?.form?.Tujuan1_Kd_Jam_1,
        tujuan1_kd_jam_2  :  data?.form?.Tujuan1_Kd_Jam_2,
        tujuan1_kd_1_check  :  data?.form?.Tujuan1_Kd_1_Check,
        tujuan1_kd_2_check  :  data?.form?.Tujuan1_Kd_2_Check,
        tujuan2_kd_check  :  data?.form?.Tujuan2_Kd_Check,
        tujuan2_kd_jam_1  :  data?.form?.Tujuan2_Kd_Jam_1,
        tujuan2_kd_jam_2  :  data?.form?.Tujuan2_Kd_Jam_2,
        tujuan2_kd_1_check  :  data?.form?.Tujuan2_Kd_1_Check,
        tujuan2_kd_1_text  :  data?.form?.Tujuan2_Kd_1_Text,
        rencana1_kd_1_check  :  data?.form?.Rencana1_Kd_1_Check,
        rencana1_kd_2_check  :  data?.form?.Rencana1_Kd_2_Check,
        rencana1_kd_3_check  :  data?.form?.Rencana1_Kd_3_Check,
        rencana1_kd_4_check  :  data?.form?.Rencana1_Kd_4_Check,
        rencana1_kd_5_check  :  data?.form?.Rencana1_Kd_5_Check,
        rencana1_kd_6_check  :  data?.form?.Rencana1_Kd_6_Check,
        rencana1_kd_7_check  :  data?.form?.Rencana1_Kd_7_Check,
        rencana1_kd_7_text  :  data?.form?.Rencana1_Kd_7_Text,
        rencana2_kd_1_check  :  data?.form?.Rencana2_Kd_1_Check,
        rencana2_kd_1_text  :  data?.form?.Rencana2_Kd_1_Text,

        tanggal_it :  data?.form?.Tanggal_It,
        diagnosa1_it_check :  data?.form?.Diagnosa1_It_Check,
        diagnosa1_it_1_check :  data?.form?.Diagnosa1_It_1_Check,
        diagnosa1_it_2_check :  data?.form?.Diagnosa1_It_2_Check,
        diagnosa2_it_check :  data?.form?.Diagnosa2_It_Check,
        diagnosa2_it_1_check :  data?.form?.Diagnosa2_It_1_Check,
        diagnosa2_it_2_check :  data?.form?.Diagnosa2_It_2_Check,
        diagnosa2_it_3_check :  data?.form?.Diagnosa2_It_3_Check,
        diagnosa3_it_check :  data?.form?.Diagnosa3_It_Check,
        diagnosa3_it_text :  data?.form?.Diagnosa3_It_Text,
        tujuan1_it_check :  data?.form?.Tujuan1_It_Check,
        tujuan1_it_jam_1 :  data?.form?.Tujuan1_It_Jam_1,
        tujuan1_it_jam_2 :  data?.form?.Tujuan1_It_Jam_2,
        tujuan1_it_1_check :  data?.form?.Tujuan1_It_1_Check,
        tujuan1_it_2_check :  data?.form?.Tujuan1_It_2_Check,
        tujuan1_it_3_check :  data?.form?.Tujuan1_It_3_Check,
        tujuan1_it_4_check :  data?.form?.Tujuan1_It_4_Check,
        tujuan2_it_check :  data?.form?.Tujuan2_It_Check,
        tujuan2_it_jam_1 :  data?.form?.Tujuan2_It_Jam_1,
        tujuan2_it_jam_2 :  data?.form?.Tujuan2_It_Jam_2,
        tujuan2_it_1_check :  data?.form?.Tujuan2_It_1_Check,
        tujuan2_it_2_check :  data?.form?.Tujuan2_It_2_Check,
        tujuan2_it_2_text :  data?.form?.Tujuan2_It_2_Text,
        rencana1_it_1_check :  data?.form?.Rencana1_It_1_Check,
        rencana1_it_2_check :  data?.form?.Rencana1_It_2_Check,
        rencana1_it_3_check :  data?.form?.Rencana1_It_3_Check,
        rencana1_it_4_check :  data?.form?.Rencana1_It_4_Check,
        rencana1_it_5_check :  data?.form?.Rencana1_It_5_Check,
        rencana1_it_6_check :  data?.form?.Rencana1_It_6_Check,
        rencana1_it_7_check :  data?.form?.Rencana1_It_7_Check,
        rencana1_it_8_check :  data?.form?.Rencana1_It_8_Check,
        rencana1_it_9_check :  data?.form?.Rencana1_It_9_Check,
        rencana1_it_10_check :  data?.form?.Rencana1_It_10_Check,
        rencana1_it_10_text :  data?.form?.Rencana1_It_10_Text,
        rencana2_it_1_check :  data?.form?.Rencana2_It_1_Check,
        rencana2_it_1_text :  data?.form?.Rencana2_It_1_Check,
        rencana2_it_2_check :  data?.form?.Rencana2_It_2_Check,
        rencana2_it_2_text :  data?.form?.Rencana2_It_2_Text,

        tanggal_psi  :  data?.form?.Tanggal_Psi,
        diagnosa1_psi_check  :  data?.form?.Diagnosa1_Psi_Check,
        diagnosa1_psi_1_check  :  data?.form?.Diagnosa1_Psi_1_Check,
        diagnosa1_psi_2_check  :  data?.form?.Diagnosa1_Psi_2_Check,
        diagnosa1_psi_3_check  :  data?.form?.Diagnosa1_Psi_3_Check,
        diagnosa1_psi_4_check  :  data?.form?.Diagnosa1_Psi_4_Check,
        diagnosa1_psi_5_check  :  data?.form?.Diagnosa1_Psi_5_Check,
        diagnosa2_psi_check  :  data?.form?.Diagnosa2_Psi_Check,
        diagnosa2_psi_1_check  :  data?.form?.Diagnosa2_Psi_1_Check,
        diagnosa2_psi_2_check  :  data?.form?.Diagnosa2_Psi_2_Check,
        diagnosa2_psi_3_check  :  data?.form?.Diagnosa2_Psi_3_Check,
        diagnosa3_psi_check  :  data?.form?.Diagnosa3_Psi_Check,
        diagnosa3_psi_1_check  :  data?.form?.Diagnosa3_Psi_1_Check,
        diagnosa3_psi_2_check  :  data?.form?.Diagnosa3_Psi_2_Check,
        diagnosa3_psi_3_check  :  data?.form?.Diagnosa3_Psi_3_Check,
        tujuan1_psi_check  :  data?.form?.Tujuan1_Psi_Check,
        tujuan1_psi_jam_1  :  data?.form?.Tujuan1_Psi_Jam_1,
        tujuan1_psi_jam_2  :  data?.form?.Tujuan1_Psi_Jam_2,
        tujuan1_psi_1_check  :  data?.form?.Tujuan1_Psi_1_Check,
        tujuan1_psi_2_check  :  data?.form?.Tujuan1_Psi_2_Check,
        tujuan1_psi_3_check  :  data?.form?.Tujuan1_Psi_3_Check,
        tujuan1_psi_4_check  :  data?.form?.Tujuan1_Psi_4_Check,
        tujuan2_psi_check  :  data?.form?.Tujuan2_Psi_Check,
        tujuan2_psi_jam_1  :  data?.form?.Tujuan2_Psi_Jam_1,
        tujuan2_psi_jam_2  :  data?.form?.Tujuan2_Psi_Jam_2,
        tujuan2_psi_1_check  :  data?.form?.Tujuan2_Psi_1_Check,
        tujuan2_psi_2_check  :  data?.form?.Tujuan2_Psi_2_Check,
        tujuan3_psi_check  :  data?.form?.Tujuan3_Psi_Check,
        tujuan3_psi_jam_1  :  data?.form?.Tujuan3_Psi_Jam_1,
        tujuan3_psi_jam_2  :  data?.form?.Tujuan3_Psi_Jam_2,
        tujuan3_psi_1_check  :  data?.form?.Tujuan3_Psi_1_Check,
        tujuan3_psi_2_check  :  data?.form?.Tujuan3_Psi_2_Check,
        tujuan3_psi_3_check  :  data?.form?.Tujuan3_Psi_3_Check,
        rencana1_psi_1_check  :  data?.form?.Rencana1_Psi_1_Check,
        rencana1_psi_2_check  :  data?.form?.Rencana1_Psi_2_Check,
        rencana1_psi_3_check  :  data?.form?.Rencana1_Psi_3_Check,
        rencana1_psi_4_check  :  data?.form?.Rencana1_Psi_4_Check,
        rencana1_psi_5_check  :  data?.form?.Rencana1_Psi_4_Check,
        rencana1_psi_6_check  :  data?.form?.Rencana1_Psi_6_Check,
        rencana1_psi_7_check  :  data?.form?.Rencana1_Psi_7_Check,
        rencana1_psi_8_check  :  data?.form?.Rencana1_Psi_8_Check,
        rencana1_psi_9_check  :  data?.form?.Rencana1_Psi_9_Check,
        rencana1_psi_10_check  :  data?.form?.Rencana1_Psi_10_Check,
        rencana1_psi_11_check  :  data?.form?.Rencana1_Psi_11_Check,
        rencana2_psi_1_check  :  data?.form?.Rencana2_Psi_1_Check,
        rencana2_psi_2_check  :  data?.form?.Rencana2_Psi_2_Check,
        rencana2_psi_2_text  :  data?.form?.Rencana2_Psi_2_Text,
        rencana2_psi_3_check  :  data?.form?.Rencana2_Psi_3_Check,
        rencana2_psi_3_text  :  data?.form?.Rencana2_Psi_3_Text,

        tanggal_ps1  :  data?.form?.Tanggal_Ps1,
        diagnosa1_ps1_check  :  data?.form?.Diagnosa1_Ps1_Check,
        diagnosa1_ps1_1_check  :  data?.form?.Diagnosa1_Ps1_1_Check,
        diagnosa1_ps1_1_text  :  data?.form?.Diagnosa1_Ps1_1_Text,
        diagnosa1_ps1_2_check  :  data?.form?.Diagnosa1_Ps1_2_Check,
        diagnosa1_ps1_2_text  :  data?.form?.Diagnosa1_Ps1_2_Text,
        diagnosa1_ps1_3_check  :  data?.form?.Diagnosa1_Ps1_3_Check,
        diagnosa1_ps1_3_text  :  data?.form?.Diagnosa1_Ps1_3_Text,
        diagnosa1_ps1_4_check  :  data?.form?.Diagnosa1_Ps1_4_Check,
        diagnosa1_ps1_5_check  :  data?.form?.Diagnosa1_Ps1_5_Check,
        tujuan1_ps1_check  :  data?.form?.Tujuan1_Ps1_Check,
        tujuan1_ps1_1_check  :  data?.form?.Tujuan1_Ps1_1_Check,
        tujuan1_ps1_2_check  :  data?.form?.Tujuan1_Ps1_2_Check,
        rencana1_ps1_1_check  :  data?.form?.Rencana1_Ps1_1_Check,
        rencana1_ps1_2_check  :  data?.form?.Rencana1_Ps1_2_Check,
        rencana1_ps1_3_check  :  data?.form?.Rencana1_Ps1_3_Check,
        rencana1_ps1_4_check  :  data?.form?.Rencana1_Ps1_4_Check,
        rencana1_ps1_5_check  :  data?.form?.Rencana1_Ps1_5_Check,
        rencana2_ps1_1_check  :  data?.form?.Rencana2_Ps1_1_Check,
        rencana2_ps1_2_check  :  data?.form?.Rencana2_Ps1_2_Check,
        rencana2_ps1_2_text  :  data?.form?.Rencana2_Ps1_2_Text,

        tanggal_si1  :  data?.form?.Tanggal_Si1,
        diagnosa1_si1_check  :  data?.form?.Diagnosa1_Si1_Check,
        diagnosa1_si1_1_check  :  data?.form?.Diagnosa1_Si1_1_Check,
        diagnosa1_si1_2_check  :  data?.form?.Diagnosa1_Si1_2_Check,
        diagnosa1_si1_3_check  :  data?.form?.Diagnosa1_Si1_3_Check,
        diagnosa1_si1_4_check  :  data?.form?.Diagnosa1_Si1_4_Check,
        diagnosa1_si1_5_check  :  data?.form?.Diagnosa1_Si1_5_Check,
        tujuan1_si1_check  :  data?.form?.Tujuan1_Si1_Check,
        tujuan1_si1_jam_1  :  data?.form?.Tujuan1_Si1_Jam_1,
        tujuan1_si1_jam_2  :  data?.form?.Tujuan1_Si1_Jam_2,
        tujuan1_si1_1_check  :  data?.form?.Tujuan1_Si1_1_Check,
        tujuan1_si1_2_check  :  data?.form?.Tujuan1_Si1_2_Check,
        tujuan1_si1_3_check  :  data?.form?.Tujuan1_Si1_3_Check,
        tujuan1_si1_3_text  :  data?.form?.Tujuan1_Si1_3_Text,
        rencana1_si1_1_check  :  data?.form?.Rencana1_Si1_1_Check,
        rencana1_si1_2_check  :  data?.form?.Rencana1_Si1_2_Check,
        rencana1_si1_3_check  :  data?.form?.Rencana1_Si1_3_Check,
        rencana1_si1_4_check  :  data?.form?.Rencana1_Si1_4_Check,
        rencana1_si1_5_check  :  data?.form?.Rencana1_Si1_5_Check,
        rencana1_si1_6_check  :  data?.form?.Rencana1_Si1_6_Check,
        rencana1_si1_7_check  :  data?.form?.Rencana1_Si1_7_Check,
        rencana1_si1_8_check  :  data?.form?.Rencana1_Si1_8_Check,
        rencana2_si1_1_check  :  data?.form?.Rencana2_Si1_1_Check,
        rencana2_si1_1_text  :  data?.form?.Rencana2_Si1_1_Text,
        rencana2_si1_2_check  :  data?.form?.Rencana2_Si1_2_Check,
        rencana2_si1_2_text  :  data?.form?.Rencana2_Si1_2_Text,
        rencana2_si1_3_check  :  data?.form?.Rencana2_Si1_3_Check,
        rencana2_si1_3_text :  data?.form?.Rencana2_Si1_3_Text,

      },
    });

  const handleProcessing = () => {
    setProcessing(true);
  };

  const toggle = (tab: string) => {
    if (activeTab && activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const handleSubmitForm = (value: IUpdateNursingCarePlanRequest) => {
    if (!treatment) {
      return;
    }
    handleProcessing();
    reset(value);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateNursingCarePlanRequest.createFromJson({
      ...value,
      ...appRequest,
    });
    dispatch(handlePdf(undefined));
    NursingCarePlanService()
      .update(params)
      .then((resp) => {
        const { data} = resp.data;
        const namaKamar = getKamar(data.form.Kamar_Id);
        NursingCarePlanService().pdfv3(PdfNursingCarePlanRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest, namaKamar))
          .then(() => {
            setProcessing(false);
            dispatch(fetchNursingCarePlanPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_rencana-asuhan-keperawatan' })));
          })
        setProcessing(false);
        dispatch(fetchNursingCarePlan(appRequest));
      })
      .catch((err) => {
        console.error(err);
        setProcessing(false);
      });
  };


  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <Card className="border-1">
        <CardBody>
          <Col md="12">
            <FormGroup className="form-group" row>
              <Label for="diagnosa_medis" md="2" sm="12">
                Diagnosis Medis
              </Label>
              <Col>
                <Input
                  type="textarea"
                  id="diagnosa_medis"
                  name="diagnosa_medis"
                  innerRef={register()}
                />
              </Col>
            </FormGroup>
            <FormGroup className="form-group" row>
              <Label for="perawat_id" md="2" sm="12">
                Nama Perawat
              </Label>
              <Col>
                <Input
                  className="mt-1"
                  type="select"
                  id="perawat_id"
                  name="perawat_id"
                  innerRef={register()}
                  onChange={(e) => {
                    setPerawatId(e.target.value);
                    if (e.target.value !== '') {
                      getKaryawan(e.target.value)
                    }
                  }}
                >
                  <option value="" disabled={false}>Pilih...</option>
                  {
                    nurses && nurses.map((item: any, key: number) => {
                      return <option value={item.ID_Karyawan} key={key}>{ item.Nama }</option>;
                    })
                  }
                </Input>
              </Col>
            </FormGroup>
            <FormGroup className="form-group" row>
              <Label for="kamar_id" md="2" sm="12">
                Kamar
              </Label>
              <Col>
                <Input
                  className="mt-1"
                  type="select"
                  id="kamar_id"
                  name="kamar_id"
                  innerRef={register()}
                  onChange={(e) => {
                    setKamarId(e.target.value);
                    if (e.target.value !== '') {
                      getKamar(e.target.value)
                    }
                  }}
                >
                  <option value="" disabled={false}>Pilih...</option>
                  {
                    data.kamar && data.kamar.map((item: any, key: number) => {
                      return <option value={item.ID_Kamar} key={key}>{ item.Nama_Kamar }</option>;
                    })
                  }
                </Input>
              </Col>
            </FormGroup>
          </Col>
        </CardBody>
      </Card>

      <Card className="border-1">
        <CardBody>
          <Nav tabs className="mt-2">
            <NavItem>
              <NavLink className={(activeTab && activeTab === '1') ? 'active' : ''} onClick={() => toggle('1')}>
            Sistem Imunitas
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={(activeTab && activeTab === '2') ? 'active' : ''} onClick={() => toggle('2')}>
            Persepsi-Sensori
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={(activeTab && activeTab === '3') ? 'active' : ''} onClick={() => toggle('3')}>
            Nutrisi Cairan Dan Eliminasi
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={(activeTab && activeTab === '4') ? 'active' : ''} onClick={() => toggle('4')}>
            Kebersihan diri dan aktivitas
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={(activeTab && activeTab === '5') ? 'active' : ''} onClick={() => toggle('5')}>
            Istirahat Dan Tidur
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={(activeTab && activeTab === '6') ? 'active' : ''} onClick={() => toggle('6')}>
            Psikososial Dan Spritual
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={(activeTab && activeTab === '7') ? 'active' : ''} onClick={() => toggle('7')}>
            Persepsi – Sensori : Penglihatan
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={(activeTab && activeTab === '8') ? 'active' : ''} onClick={() => toggle('8')}>
            Sistem imunitas
              </NavLink>
            </NavItem>
          </Nav>
          {/* pertama */}
          <ImmuneSystemMain
            data={data}
            {...{ register, activeTab, errors, processing, setValue }}
          />
          {/* kedua */}
          <PerceptionSensoryMain
            data={data}
            {...{ register, activeTab, errors, processing, setValue }}
          />
          {/* ketiga */}
          <FluidNutritionMain
            data={data}
            {...{ register, activeTab, errors, processing, setValue }}
          />
          {/* keempat */}
          <ActivityCleanMain
            data={data}
            {...{ register, activeTab, errors, processing, setValue }}
          />
          {/* kelima */}
          <RestSleepMain
            data={data}
            {...{ register, activeTab, errors, processing, setValue }}
          />
          {/* keenam */}
          <PsychosocialSpiritualMain
            data={data}
            {...{ register, activeTab, errors, processing, setValue }}
          />
          {/* ketujuh */}
          <PerceptionSensorySightMain
            data={data}
            {...{ register, activeTab, errors, processing, setValue }}
          />
          {/* kedelepan */}
          <ImmuneSystem2Main
            data={data}
            {...{ register, activeTab, errors, processing, setValue }}
          />

        </CardBody>
      </Card>

      <Card className="border-1">
        <CardBody>
          <Row className="mb-2"></Row>
          <Row>
            <Col>
              <FormGroup className="d-flex mb-0 justify-content-center">
                <SubmitButton
                  label="Simpan"
                  buttonColor="primary"
                  spinnerStyle={{ width: "1rem", height: "1rem" }}
                  spinnerColor="light"
                  processing={processing}
                />
                {pdfData && Array.isArray(pdfData) && pdfData.length > 0 && (
                  <a
                    color="success"
                    href={`${pdfData[0].URL}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="me-1" color="success" type="button">
                      Cetak
                    </Button>
                  </a>
                )}
                {(!pdfData ||
                  (pdfData &&
                    Array.isArray(pdfData) &&
                    pdfData.length === 0)) && (
                  <Button
                    className="me-1"
                    color="success"
                    type="button"
                    disabled
                  >
                    Cetak
                  </Button>
                )}
              </FormGroup>
              <FormGroup className="form-group mt-0" row>
                <div className="d-flex justify-content-center align-items-center">
                  <Label className="me-1">Terakhir Disimpan: </Label>
                  <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
                </div>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>

    </Form>
  );
};

export default NursingCarePlanForm;
