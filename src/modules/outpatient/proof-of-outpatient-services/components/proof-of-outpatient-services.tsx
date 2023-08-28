import { Button, Col, Form, FormGroup, Input, Label, Progress, Row, Table } from 'reactstrap';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { DateTimeInput, TextInput } from "@src/shared/input";
import { Fragment, useEffect, useState } from "react";
import ToolInspection from "@src/shared/tool-inspection/tool-inspection";
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { SubmitButton } from '@src/shared/button';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { AppRequest } from '@src/shared/request';
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { Plus, Trash } from 'react-feather';
import FixRequiredSelect from '@src/shared/input/components/FixRequiredSelect';
import BaseSelect from 'react-select';
import Image from 'next/image';
import { HowToUse, IPrescription, Medicine } from '../../doctor-preliminary-study/models/doctor-preliminary-study.model';
import KmbFormDisabled from './kmb-form-disabled';
import OdOsTopFormDisabled from './od-os-top-form-disabled';
import KmlFormDisabled from './kml-form-disabled';
import Koreksi1FormDisabled from './koreksi-1-form-disabled';
import Koreksi2FormDisabled from './koreksi-2-form-disabled';
import RplFormDisabled from './rpl-form-disabled';
import OdOsBottomFormDisabled from './od-os-bottom-form-disabled';
import { IProofOfOutpatientServicesModel, IResepObat } from '../models/proof-of-outpatient-services.model';
import { BPRJPdfRequest, UpdateProofOfOutpatientServicesRequest } from '../requests';
import { ProofOfOutpatientService } from '../services';
import { fetchProofOfOutpatientService, fetchProofOfOutpatientServicePdf, handleAutoSign, handlePdf } from '../stores/proof-of-outpatient-services.stores';
import { IDoctorModel } from '@src/shared/doctor';
import { FindPdfRequest } from '@src/shared/pdf';
import Rpl2FormDisabled from './rpl-2-form-disabled';
import { DateTimeConverter } from "@src/shared/datetime-converter";

const ProofOfOutpatient = (props: { data: IProofOfOutpatientServicesModel }) => {
  const { data } = props;

  const dispatch = useAppDispatch();
  // const [signaturePerson, setSignaturePerson] = useState(data?.form?.Tanda_Tangan === 'Wali' ? '2' : '1');
  const { doctors } = useAppSelector(state => state.doctor);
  const { autoSign } = useAppSelector(state => state.proofOfOutpatientServicesStores)
  const [processing, setProcessing] = useState<boolean | undefined>(false);
  const { treatment } = useAppSelector(state => state.patient);
  const { pdf } = useAppSelector(state => state.proofOfOutpatientServicesStores);
  const [signaturePerson, setSignaturePerson] = useState(data?.form?.Tanda_Tangan_Radio ?? '1');
  const { userData } = useAppSelector(state => state.auth);
  const [sip, setSip] = useState<string>(data && data.form && data.form.Sip_Dokter ? data.form.Sip_Dokter : '')
  const [pdfData, setPdfData] = useState<any | undefined>(undefined);
  const [inProgress, setInProgress] = useState<any>(undefined);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchProofOfOutpatientServicePdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-jalan_bukti-pelayanan-rawat-jalan' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf]);

  useEffect(() => {
    if (autoSign && userData && userData.isDokter) {
      window?.scrollTo({ top: 2000, behavior: 'smooth' });
      document.getElementById('signature-div')?.click();
      setTimeout(() => {
        document.getElementById('button-save-signature')?.click();
      }, 1000)
      dispatch(handleAutoSign(false));
    }
  }, [autoSign])

  const getPreliminaryStudyName = (id: string) => {
    const preliminaryList = [
      {
        id: 'Visus_Awal',
        value: 'Visus Awal',
      },
      {
        id: 'KML',
        value: 'KML',
      },
      {
        id: 'Koreksi_1',
        value: 'Koreksi 1',
      },
      {
        id: 'Koreksi_2',
        value: 'Koreksi 2',
      },
      {
        id: 'RPL_Ref_Subjektif',
        value: 'RPL Ref Subjektif',
      },
      {
        id: 'RPL_Streak_Retinoscopy',
        value: 'RPL Streak Retinoscopy',
      },
      {
        id: 'RPL_Streak_Retinoscopy_2',
        value: 'RPL Streak Retinascopy 2',
      },
      {
        id: 'RPL_Ref_Subjektif',
        value: 'RPL Ref Subjektif',
      },
    ]

    const selected = preliminaryList.find((val: any) => val.id === id);
    if (selected) {
      return selected.value;
    } else {
      return '';
    }
  }

  const getDiagnoseValue = () => {
    const diagnose = (data && data.pengkajian_awal && data.pengkajian_awal.Data_A) ? data.pengkajian_awal.Data_A : ''

    if (treatment && treatment.Penanganan && treatment.Penanganan === 'Operasi') {
      const condition = !!(data.laporan_pembedahan && data.laporan_pembedahan.Diagnosa_Pra_Bedah && data.laporan_pembedahan.Diagnosa_Pra_Bedah !== '')
      if (condition) {
        return data.laporan_pembedahan.Diagnosa_Pra_Bedah;
      } else {
        return diagnose;
      }
    } else {
      return diagnose;
    }
  }

  const { register, handleSubmit, errors, reset, unregister, setValue, control, getValues, watch } = useForm({
    mode: 'onChange',
    // resolver: yupResolver(UpdateNursingInitialAssessmentRequest.schema()),
    defaultValues: {
      complaint: ((data?.ro?.Keluhan ?? '') || (data?.ro?.Keluhan_Lain ?? '')),
      od_eye_image: (data && data.pengkajian_awal && data.pengkajian_awal.Gambar_Mata_OD) ? data.pengkajian_awal.Gambar_Mata_OD : '',
      os_eye_image: (data && data.pengkajian_awal && data.pengkajian_awal.Gambar_Mata_OS) ? data.pengkajian_awal.Gambar_Mata_OS : '',
      diagnose: getDiagnoseValue(),
      therapy: (data && data.pengkajian_awal && data.pengkajian_awal.Terapi) ? data.pengkajian_awal.Terapi : (data && data.pengkajian_awal && data.pengkajian_awal.Data_P) ? data.pengkajian_awal.Data_P : '',
      suggestion: (data && data.pengkajian_awal && data.pengkajian_awal.Anjuran) ? data.pengkajian_awal.Anjuran : '',

      kacamata_od: (data && data.resep_kacamata && data.resep_kacamata.Pengkajian_Awal_Od) ? getPreliminaryStudyName(data.resep_kacamata.Pengkajian_Awal_Od) : '',
      od_va: (data && data.ro && data.ro.OD && data.ro.OD.VA) ? data.ro.OD.VA : '',
      od_false: (data && data.ro && data.ro.OD && data.ro.OD.False) ? data.ro.OD.False : '',
      od_ph: (data && data.ro && data.ro.OD && data.ro.OD.PH) ? data.ro.OD.PH : '',
      od_add: (data && data.ro && data.ro.OD && data.ro.OD.Add) ? data.ro.OD.Add : '',
      od_jagger: (data && data.ro && data.ro.OD && data.ro.OD.Jagger) ? data.ro.OD.Jagger : '',

      od_kml_select: (data && data.form && data.form.OD && data.form.OD.KML) ? data.form.OD.KML.Select : data.ro?.OD?.KML?.Select,
      od_kml_sph: data.ro?.OD?.KML?.Sph,
      od_kml_cyl: data.ro?.OD?.KML?.Cyl,
      od_kml_axis: data.ro?.OD?.KML?.Axis,
      od_kml_va: data.ro?.OD?.KML?.VA ? data.ro?.OD?.KML?.VA : data.ro?.OD?.KML?.Va ? data.ro?.OD?.KML?.Va : '',
      od_kml_false: data.ro?.OD?.KML?.False,
      od_kml_add: data.ro?.OD?.KML?.Add,
      od_kml_jagger: data.ro?.OD?.KML?.Jagger,
      od_kml_pd_jauh: data.ro?.OD?.KML?.Pd_Jauh,
      od_kml_pd_dekat: data.ro?.OD?.KML?.Pd_Dekat,

      od_kmb_select: (data && data.form && data.form.OD && data.form.OD.KMB) ? data.form.OD.KMB.Select : data.ro?.OD?.KMB?.Select,
      od_kmb_sph: data.ro?.OD?.KMB?.Sph,
      od_kmb_cyl: data.ro?.OD?.KMB?.Cyl,
      od_kmb_axis: data.ro?.OD?.KMB?.Axis,
      od_kmb_false: data.ro?.OD?.KMB?.False,
      od_kmb_add: data.ro?.OD?.KMB?.Add,
      od_kmb_jagger: data.ro?.OD?.KMB?.Jagger,
      od_kmb_pd_jauh: data.ro?.OD?.KMB?.Pd_Jauh,
      od_kmb_pd_dekat: data.ro?.OD?.KMB?.Pd_Dekat,

      od_koreksi_1_select: (data && data.form && data.form.OD && data.form.OD.Koreksi_1) ? data.form.OD.Koreksi_1.Select : data.ro?.OD?.Koreksi_1?.Select,
      od_koreksi_1_sph: data.ro?.OD?.Koreksi_1?.Sph,
      od_koreksi_1_cyl: data.ro?.OD?.Koreksi_1?.Cyl,
      od_koreksi_1_axis: data.ro?.OD?.Koreksi_1?.Axis,
      od_koreksi_1_va: data.ro?.OD?.Koreksi_1?.VA ? data.ro?.OD?.Koreksi_1?.VA : data.ro?.OD?.Koreksi_1?.Va ? data.ro?.OD?.Koreksi_1?.Va : '',
      od_koreksi_1_false: data.ro?.OD?.Koreksi_1?.False,
      od_koreksi_1_add: data.ro?.OD?.Koreksi_1?.Add,
      od_koreksi_1_jagger: data.ro?.OD?.Koreksi_1?.Jagger,
      od_koreksi_1_pd_jauh: data.ro?.OD?.Koreksi_1?.Pd_Jauh,
      od_koreksi_1_pd_dekat: data.ro?.OD?.Koreksi_1?.Pd_Dekat,
      od_koreksi_1_adaptasi: data.ro?.OD?.Koreksi_1?.Adaptasi,

      od_koreksi_2_select: (data && data.form && data.form.OD && data.form.OD.Koreksi_2) ? data.form.OD.Koreksi_2.Select : data.ro?.OD?.Koreksi_2?.Select,
      od_koreksi_2_sph: data.ro?.OD?.Koreksi_2?.Sph,
      od_koreksi_2_cyl: data.ro?.OD?.Koreksi_2?.Cyl,
      od_koreksi_2_axis: data.ro?.OD?.Koreksi_2?.Axis,
      od_koreksi_2_va: data.ro?.OD?.Koreksi_2?.VA ? data.ro?.OD?.Koreksi_2?.VA : data.ro?.OD?.Koreksi_2?.Va ? data.ro?.OD?.Koreksi_2?.Va : '',
      od_koreksi_2_false: data.ro?.OD?.Koreksi_2?.False,
      od_koreksi_2_add: data.ro?.OD?.Koreksi_2?.Add,
      od_koreksi_2_jagger: data.ro?.OD?.Koreksi_2?.Jagger,
      od_koreksi_2_pd_jauh: data.ro?.OD?.Koreksi_2?.Pd_Jauh,
      od_koreksi_2_pd_dekat: data.ro?.OD?.Koreksi_2?.Pd_Dekat,
      od_koreksi_2_adaptasi: data.ro?.OD?.Koreksi_2?.Adaptasi,

      od_rpl_select: (data && data.form && data.form.OD && data.form.OD.RPL) ? data.form.OD.RPL.Select : data.ro?.OD?.RPL?.Select,
      od_rpl_sph: data.ro?.OD?.RPL?.Sph,
      od_rpl_va_aquity: data.ro?.OD?.RPL?.Va_Aquity,
      od_rpl_cyl: data.ro?.OD?.RPL?.Cyl,
      od_rpl_axis: data.ro?.OD?.RPL?.Axis,
      od_rpl_va: data.ro?.OD?.RPL?.VA ? data.ro?.OD?.RPL?.VA : data.ro?.OD?.RPL?.Va ? data.ro?.OD?.RPL?.Va : '',
      od_rpl_false: data.ro?.OD?.RPL?.False,
      od_rpl_pd_jauh: data.ro?.OD?.RPL?.Pd_Jauh,
      od_rpl_adaptasi: data.ro?.OD?.RPL?.Adaptasi,
      od_rpl_ph: data.ro?.OD?.RPL?.PH,

      od_rpl_2_select: (data && data.form && data.form.OD && data.form.OD.RPL2) ? data.form.OD.RPL2.Select : data.ro?.OD?.RPL_2?.Select,
      od_rpl_2_sph: data.ro?.OD?.RPL_2?.Sph,
      od_rpl_2_va_aquity: data.ro?.OD?.RPL_2?.Va_Aquity,
      od_rpl_2_cyl: data.ro?.OD?.RPL_2?.Cyl,
      od_rpl_2_axis: data.ro?.OD?.RPL_2?.Axis,
      od_rpl_2_va: data.ro?.OD?.RPL_2?.VA ? data.ro?.OD?.RPL_2?.VA : data.ro?.OD?.RPL_2?.Va ? data.ro?.OD?.RPL_2?.Va : '',
      od_rpl_2_false: data.ro?.OD?.RPL_2?.False,
      od_rpl_2_pd_jauh: data.ro?.OD?.RPL_2?.Pd_Jauh,
      od_rpl_2_adaptasi: data.ro?.OD?.RPL_2?.Adaptasi,
      od_rpl_2_ph: data.ro?.OD?.RPL_2?.PH,

      od_rpl_streak_select: (data && data.form && data.form.OD && data.form.OD.RPL_Streak) ? data.form.OD.RPL_Streak.Select : data.ro?.OD?.RPL_Streak?.Select,
      od_rpl_streak_va_aquity: data.ro?.OD?.RPL_Streak?.Va_Aquity,
      od_rpl_streak_sph: data.ro?.OD?.RPL_Streak?.Sph,
      od_rpl_streak_cyl: data.ro?.OD?.RPL_Streak?.Cyl,
      od_rpl_streak_axis: data.ro?.OD?.RPL_Streak?.Axis,
      od_rpl_streak_va: data.ro?.OD?.RPL_Streak?.VA ? data.ro?.OD?.RPL_Streak?.VA : data.ro?.OD?.RPL_Streak?.Va ? data.ro?.OD?.RPL_Streak?.Va : '',
      od_rpl_streak_false: data.ro?.OD?.RPL_Streak?.False,
      od_rpl_streak_pd_jauh: data.ro?.OD?.RPL_Streak?.Pd_Jauh,
      od_rpl_streak_adaptasi: data.ro?.OD?.RPL_Streak?.Adaptasi,
      od_rpl_streak_ph: data.ro?.OD?.RPL_Streak?.PH,

      od_rpl_2_streak_select: (data && data.form && data.form.OD && data.form.OD.RPL_Streak_2) ? data.form.OD.RPL_Streak_2.Select : data.ro?.OD?.RPL_Streak_2?.Select,
      od_rpl_2_streak_va_aquity: data?.ro?.OD?.RPL_Streak_2?.Va_Aquity,
      od_rpl_2_streak_sph: data?.ro?.OD?.RPL_Streak_2?.Sph,
      od_rpl_2_streak_cyl: data?.ro?.OD?.RPL_Streak_2?.Cyl,
      od_rpl_2_streak_axis: data?.ro?.OD?.RPL_Streak_2?.Axis,
      od_rpl_2_streak_va: data.ro?.OD?.RPL_Streak_2?.VA ? data.ro?.OD?.RPL_Streak_2?.VA : data?.ro?.OD?.RPL_Streak_2?.Va ? data.ro?.OD?.RPL_Streak_2?.Va : '',
      od_rpl_2_streak_false: data.ro?.OD?.RPL_Streak_2?.False,
      od_rpl_2_streak_pd_jauh: data?.ro?.OD?.RPL_Streak_2?.Pd_Jauh,
      od_rpl_2_streak_adaptasi: data?.ro?.OD?.RPL_Streak_2?.Adaptasi,
      od_rpl_2_streak_ph: data?.ro?.OD?.RPL_Streak_2?.PH,

      od_non_contact: data.ro?.OD?.Non_Contact,
      od_tanam_lensa: (data && data.ro && data.ro.OD && data.ro.OD.Tanam_Lensa) ? data.ro.OD.Tanam_Lensa : '',
      od_schiotz: data.ro?.OD?.Schiotz,
      od_keterangan_tono: data?.ro?.OD?.Keterangan_Tono,

      kacamata_os: (data && data.resep_kacamata && data.resep_kacamata.Pengkajian_Awal_Os) ? getPreliminaryStudyName(data.resep_kacamata.Pengkajian_Awal_Os) : '',
      os_va: (data && data.ro && data.ro.OS && data.ro.OS.VA) ? data.ro.OS.VA : '',
      os_false: (data && data.ro && data.ro.OS && data.ro.OS.False) ? data.ro.OS.False : '',
      os_ph: (data && data.ro && data.ro.OS && data.ro.OS.PH) ? data.ro.OS.PH : '',
      os_add: (data && data.ro && data.ro.OS && data.ro.OS.Add) ? data.ro.OS.Add : '',
      os_jagger: (data && data.ro && data.ro.OS && data.ro.OS.Jagger) ? data.ro.OS.Jagger : '',

      os_kml_select: (data && data.form && data.form.OS && data.form.OS.KML) ? data.form.OS.KML.Select : data.ro?.OS?.KML?.Select,
      os_kml_sph: data.ro?.OS?.KML?.Sph,
      os_kml_cyl: data.ro?.OS?.KML?.Cyl,
      os_kml_axis: data.ro?.OS?.KML?.Axis,
      os_kml_va: data.ro?.OS?.KML?.VA ? data.ro?.OS?.KML?.VA : data.ro?.OS?.KML?.Va ? data.ro?.OS?.KML?.Va : '',
      os_kml_false: data.ro?.OS?.KML?.False,
      os_kml_add: data.ro?.OS?.KML?.Add,
      os_kml_jagger: data.ro?.OS?.KML?.Jagger,
      os_kml_pd_jauh: data.ro?.OS?.KML?.Pd_Jauh,
      os_kml_pd_dekat: data.ro?.OS?.KML?.Pd_Dekat,

      os_kmb_select: (data && data.form && data.form.OS && data.form.OS.KMB) ? data.form.OS.KMB.Select : data.ro?.OS?.KMB?.Select,
      os_kmb_sph: data.ro?.OS?.KMB?.Sph,
      os_kmb_cyl: data.ro?.OS?.KMB?.Cyl,
      os_kmb_axis: data.ro?.OS?.KMB?.Axis,
      os_kmb_false: data.ro?.OS?.KMB?.False,
      os_kmb_add: data.ro?.OS?.KMB?.Add,
      os_kmb_jagger: data.ro?.OS?.KMB?.Jagger,
      os_kmb_pd_jauh: data.ro?.OS?.KMB?.Pd_Jauh,
      os_kmb_pd_dekat: data.ro?.OS?.KMB?.Pd_Dekat,

      os_koreksi_1_select: (data && data.form && data.form.OS && data.form.OS.Koreksi_1) ? data.form.OS.Koreksi_1.Select : data.ro?.OS?.Koreksi_1?.Select,
      os_koreksi_1_sph: data.ro?.OS?.Koreksi_1?.Sph,
      os_koreksi_1_cyl: data.ro?.OS?.Koreksi_1?.Cyl,
      os_koreksi_1_axis: data.ro?.OS?.Koreksi_1?.Axis,
      os_koreksi_1_va: data.ro?.OS?.Koreksi_1?.VA ? data.ro?.OS?.Koreksi_1?.VA : data.ro?.OS?.Koreksi_1?.Va ? data.ro?.OS?.Koreksi_1?.Va : '',
      os_koreksi_1_false: data.ro?.OS?.Koreksi_1?.False,
      os_koreksi_1_add: data.ro?.OS?.Koreksi_1?.Add,
      os_koreksi_1_jagger: data.ro?.OS?.Koreksi_1?.Jagger,
      os_koreksi_1_pd_jauh: data.ro?.OS?.Koreksi_1?.Pd_Jauh,
      os_koreksi_1_pd_dekat: data.ro?.OS?.Koreksi_1?.Pd_Dekat,
      os_koreksi_1_adaptasi: data.ro?.OS?.Koreksi_1?.Adaptasi,

      os_koreksi_2_select: (data && data.form && data.form.OS && data.form.OS.Koreksi_2) ? data.form.OS.Koreksi_2.Select : data.ro?.OS?.Koreksi_2?.Select,
      os_koreksi_2_sph: data.ro?.OS?.Koreksi_2?.Sph,
      os_koreksi_2_cyl: data.ro?.OS?.Koreksi_2?.Cyl,
      os_koreksi_2_axis: data.ro?.OS?.Koreksi_2?.Axis,
      os_koreksi_2_va: data.ro?.OS?.Koreksi_2?.VA ? data.ro?.OS?.Koreksi_2?.VA : data.ro?.OS?.Koreksi_2?.Va ? data.ro?.OS?.Koreksi_2?.Va : '',
      os_koreksi_2_false: data.ro?.OS?.Koreksi_2?.False,
      os_koreksi_2_add: data.ro?.OS?.Koreksi_2?.Add,
      os_koreksi_2_jagger: data.ro?.OS?.Koreksi_2?.Jagger,
      os_koreksi_2_pd_jauh: data.ro?.OS?.Koreksi_2?.Pd_Jauh,
      os_koreksi_2_pd_dekat: data.ro?.OS?.Koreksi_2?.Pd_Dekat,
      os_koreksi_2_adaptasi: data.ro?.OS?.Koreksi_2?.Adaptasi,

      os_rpl_select: (data && data.form && data.form.OS && data.form.OS.RPL) ? data.form.OS.RPL.Select : data.ro?.OS?.RPL?.Select,
      os_rpl_va_aquity: data.ro?.OS?.RPL?.Va_Aquity,
      os_rpl_sph: data.ro?.OS?.RPL?.Sph,
      os_rpl_cyl: data.ro?.OS?.RPL?.Cyl,
      os_rpl_axis: data.ro?.OS?.RPL?.Axis,
      os_rpl_va: data.ro?.OS?.RPL?.VA ? data.ro?.OS?.RPL?.VA : data.ro?.OS?.RPL?.Va ? data.ro?.OS?.RPL?.Va : '',
      os_rpl_false: data.ro?.OS?.RPL?.False,
      os_rpl_pd_jauh: data.ro?.OS?.RPL?.Pd_Jauh,
      os_rpl_adaptasi: data.ro?.OS?.RPL?.Adaptasi,
      os_rpl_ph: data.ro?.OS?.RPL?.PH,

      os_rpl_2_select: (data && data.form && data.form.OS && data.form.OS.RPL2) ? data.form.OS.RPL2.Select : data.ro?.OS?.RPL_2?.Select,
      os_rpl_2_va_aquity: data.ro?.OS?.RPL_2?.Va_Aquity,
      os_rpl_2_sph: data.ro?.OS?.RPL_2?.Sph,
      os_rpl_2_cyl: data.ro?.OS?.RPL_2?.Cyl,
      os_rpl_2_axis: data?.ro?.OS?.RPL_2?.Axis,
      os_rpl_2_va: data.ro?.OS?.RPL_2?.VA ? data.ro?.OS?.RPL_2?.VA : data.ro?.OS?.RPL_2?.Va ? data.ro?.OS?.RPL_2?.Va : '',
      os_rpl_2_false: data.ro?.OS?.RPL_2?.False,
      os_rpl_2_pd_jauh: data?.ro?.OS?.RPL_2?.Pd_Jauh,
      os_rpl_2_adaptasi: data?.ro?.OS?.RPL_2?.Adaptasi,
      os_rpl_2_ph: data?.ro?.OS?.RPL_2?.PH,

      os_rpl_streak_select: (data && data.form && data.form.OS && data.form.OS.RPL_Streak) ? data.form.OS.RPL_Streak.Select : data.ro?.OS?.RPL_Streak?.Select,
      os_rpl_streak_va_aquity: data.ro?.OS?.RPL_Streak?.Va_Aquity,
      os_rpl_streak_sph: data.ro?.OS?.RPL_Streak?.Sph,
      os_rpl_streak_cyl: data.ro?.OS?.RPL_Streak?.Cyl,
      os_rpl_streak_axis: data.ro?.OS?.RPL_Streak?.Axis,
      os_rpl_streak_va: data.ro?.OS?.RPL_Streak?.VA ? data.ro?.OS?.RPL_Streak?.VA : data.ro?.OS?.RPL_Streak?.Va ? data.ro?.OS?.RPL_Streak?.Va : '',
      os_rpl_streak_false: data.ro?.OS?.RPL_Streak?.False,
      os_rpl_streak_pd_jauh: data.ro?.OS?.RPL_Streak?.Pd_Jauh,
      os_rpl_streak_adaptasi: data.ro?.OS?.RPL_Streak?.Adaptasi,
      os_rpl_streak_ph: data.ro?.OS?.RPL_Streak?.PH,

      os_rpl_2_streak_select: (data && data.form && data.form.OS && data.form.OS.RPL_Streak_2) ? data.form.OS.RPL_Streak_2.Select : data.ro?.OS?.RPL_Streak_2?.Select,
      os_rpl_2_streak_va_aquity: data.ro?.OS?.RPL_Streak_2?.Va_Aquity,
      os_rpl_2_streak_sph: data.ro?.OS?.RPL_Streak_2?.Sph,
      os_rpl_2_streak_cyl: data.ro?.OS?.RPL_Streak_2?.Cyl,
      os_rpl_2_streak_axis: data.ro?.OS?.RPL_Streak_2?.Axis,
      os_rpl_2_streak_va: data.ro?.OS?.RPL_Streak_2?.VA ? data.ro?.OS?.RPL_Streak_2?.VA : data.ro?.OS?.RPL_Streak_2?.Va ? data.ro?.OS?.RPL_Streak_2?.Va : '',
      os_rpl_2_streak_false: data.ro?.OS?.RPL_Streak_2?.False,
      os_rpl_2_streak_pd_jauh: data.ro?.OS?.RPL_Streak_2?.Pd_Jauh,
      os_rpl_2_streak_adaptasi: data.ro?.OS?.RPL_Streak_2?.Adaptasi,
      os_rpl_2_streak_ph: data.ro?.OS?.RPL_Streak_2?.PH,

      os_non_contact: data.ro?.OS?.Non_Contact,
      os_tanam_lensa: (data && data.ro && data.ro.OS && data.ro.OS.Tanam_Lensa) ? data.ro.OS.Tanam_Lensa : '',
      os_schiotz: data.ro?.OS?.Schiotz,
      os_keterangan_tono: data.ro?.OS?.Keterangan_Tono,
      kgd: (data && data.form && data.form.KGD) ? data.form.KGD : (data && data.cppt_perawat && data.cppt_perawat.KGD) ? data.cppt_perawat.KGD : '',
      td: (data && data.form && data.form.TD) ? data.form.TD : (data && data.cppt_perawat && data.cppt_perawat.TD) ? data.cppt_perawat.TD : '',
      tanda_tangan_radio: data?.form?.Tanda_Tangan_Radio ?? '1',
      tanda_tangan_pasien: data?.form?.Tanda_Tangan_Pasien ?? '/assets/default/ttd.png',
      tanda_tangan_wali: data?.form?.Tanda_Tangan_Wali ?? '/assets/default/ttd.png',
      ttd_dokter: data?.form?.TTD_Dokter ?? '/assets/default/ttd.png',
      doctor_id: data?.form?.ID_Dokter ?? '',
      doctor_sip: data?.form?.Sip_Dokter ?? '',
      tanggal_ttd: (data && data.form && data.form.Tanggal_TTD) ? data.form.Tanggal_TTD.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
    },
  })

  useEffect(() => {
    if (data) {
      setValue('kacamata_od', data.resep_kacamata && data.resep_kacamata.Pengkajian_Awal_Od ? getPreliminaryStudyName(data.resep_kacamata.Pengkajian_Awal_Od) : '');
      setValue('kacamata_os', data.resep_kacamata && data.resep_kacamata.Pengkajian_Awal_Os ? getPreliminaryStudyName(data.resep_kacamata.Pengkajian_Awal_Os) : '');
      setValue('td', data.cppt_perawat && data.cppt_perawat.TD ? data.cppt_perawat.TD : '');
      setValue('kgd', data.cppt_perawat && data.cppt_perawat.KGD ? data.cppt_perawat.KGD : '');
    }
  }, [data])

  const handleProcessing = () => {
    setProcessing(true);
  }

  const getSIP = (id: string) => {
    if (doctors) {
      const selected = doctors.find((val: IDoctorModel) => val.ID_Karyawan === id);
      if (selected && selected.SIP && selected.SIP !== null) {
        return selected.SIP;
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  const handlePatientSigned = (image: string) => {
    setValue('tanda_tangan_pasien', image);
  }

  const handleChangeSignaturePerson = (e: any) => {
    setSignaturePerson(e.target.value);
  }

  const handleWaliSigned = (image: string) => {
    setValue('tanda_tangan_wali', image);
  }

  const handleOfficerSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    setValue('ttd_dokter', image.Signature);
    setValue('doctor_id', image.ID_Karyawan);
    setValue('doctor_sip', getSIP(image.ID_Karyawan));
    setSip(getSIP(image.ID_Karyawan));
    dispatch(handleAutoSign(undefined));
    if (isFormDoctor) {
      document.getElementById('submit-button')?.click();
    }
  }

  const handleSubmitForm = (value: any) => {
    if (!treatment) {
      return;
    }
    handleProcessing()
    reset(value);
    setInProgress({ value: 10, label: 'Updating BPRJ', percentage: '10%' })
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateProofOfOutpatientServicesRequest.createFromJson({...value, ...appRequest});
    dispatch(handlePdf(undefined));
    ProofOfOutpatientService().update(params)
      .then(() => {
        setInProgress({ value: 40, label: 'Update BPRJ Sukses...', percentage: '40%' })
        ProofOfOutpatientService().show(appRequest).then((resp: any) => {
          setInProgress({ value: 75, label: 'Generating PDF...', percentage: '75%' })
          const dataToPdf = resp.data.data;
          const params = BPRJPdfRequest.createPdfRequest(dataToPdf, treatment)
          ProofOfOutpatientService().pdfNew(params).then(() => {
            setInProgress({ value: 100, label: 'PDF Generated...', percentage: '100%' })
            setProcessing(false);
            window.location.reload();
          }).catch((err) => {
            setProcessing(false);
          })
        })
        dispatch(fetchProofOfOutpatientService(appRequest));
      });
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <Row>
          <Col md="12">
            <FormGroup className="form-group" row>
              <Label for="complaint" md="2" sm="12">Keluhan</Label>
              <Col>
                <Input
                  type="textarea"
                  id="complaint"
                  name="complaint"
                  innerRef={register()}
                  readOnly
                />
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup className="form-group" row>
          <Row className="my-2">
            <Col md="6" sm="12">
              <Row>
                <Col md="12" className="d-flex justify-content-center">
                  <h5>OD</h5>
                </Col>
              </Row>
              <hr />
              <OdOsTopFormDisabled type="od" {...{ register, errors }} />
              <hr />
              <KmlFormDisabled
                type="od"
                defaultChecked={(data && data.form && data.form.OD && data.form.OD.KML) ? !!(data.form.OD.KML.Select === 'on') : !!(data?.ro?.OD?.KML?.Select)}
                {...{ register, errors, setValue, getValues, watch }}
              />
              <hr />
              <Koreksi1FormDisabled
                type="od"
                defaultChecked={(data && data.form && data.form.OD && data.form.OD.Koreksi_1) ? !!(data.form.OD.Koreksi_1.Select === 'on') : !!(data?.ro?.OD?.Koreksi_1?.Select)}
                {...{ register, errors, setValue, getValues, watch }}
              />
              <hr />
              <Koreksi2FormDisabled
                type="od"
                defaultChecked={(data && data.form && data.form.OD && data.form.OD.Koreksi_2) ? !!(data.form.OD.Koreksi_2.Select === 'on') : !!(data?.ro?.OD?.Koreksi_2?.Select)}
                {...{ register, errors, setValue, getValues, watch }}
              />
              <hr />
              <KmbFormDisabled
                type="od"
                defaultChecked={(data && data.form && data.form.OD && data.form.OD.KMB) ? !!(data.form.OD.KMB.Select === 'on') : !!(data?.ro?.OD?.KMB?.Select)}
                {...{ register, errors, setValue, getValues, watch }}
              />
              <hr />
              <RplFormDisabled
                type="od"
                defaultChecked={(data && data.form && data.form.OD && data.form.OD.RPL) ? !!(data.form.OD.RPL.Select === 'on') : !!(data?.ro?.OD?.RPL?.Select)}
                {...{ register, errors, setValue, getValues, watch }}
              />
              <hr />
              <Rpl2FormDisabled
                type="od"
                defaultChecked={(data && data.form && data.form.OD && data.form.OD.RPL2) ? !!(data.form.OD.RPL2.Select === 'on') : !!(data?.ro?.OD?.RPL_2?.Select)}
                {...{ register, errors, setValue, getValues, watch }}
              />
              <hr />
              <OdOsBottomFormDisabled type="od" {...{ register, errors }} />
              <hr />
            </Col>
            <Col md="6" sm="12">
              <Row>
                <Col md="12" className="d-flex justify-content-center">
                  <h5>OS</h5>
                </Col>
              </Row>
              <hr />
              <OdOsTopFormDisabled type="os" {...{ register, errors }} />
              <hr />
              <KmlFormDisabled
                type="os"
                defaultChecked={(data && data.form && data.form.OS && data.form.OS.KML) ? !!(data.form.OS.KML.Select === 'on') : !!(data?.ro?.OS?.KML?.Select)}
                {...{ register, errors, setValue, getValues, watch }}
              />
              <hr />
              <Koreksi1FormDisabled
                type="os"
                defaultChecked={(data && data.form && data.form.OS && data.form.OS.Koreksi_1) ? !!(data.form.OS.Koreksi_1.Select === 'on') : !!(data?.ro?.OS?.Koreksi_1?.Select)}
                {...{ register, errors, setValue, getValues, watch }}
              />
              <hr />
              <Koreksi2FormDisabled
                type="os"
                defaultChecked={(data && data.form && data.form.OS && data.form.OS.Koreksi_2) ? !!(data.form.OS.Koreksi_2.Select === 'on') : !!(data?.ro?.OS?.Koreksi_2?.Select)}
                {...{ register, errors, setValue, getValues, watch }}
              />
              <hr />
              <KmbFormDisabled
                type="os"
                defaultChecked={(data && data.form && data.form.OS && data.form.OS.KMB) ? !!(data.form.OS.KMB.Select === 'on') : !!(data?.ro?.OS?.KMB?.Select)}
                {...{ register, errors, setValue, getValues, watch, readOnly: true }}
              />
              <hr />
              <RplFormDisabled
                type="os"
                defaultChecked={(data && data.form && data.form.OS && data.form.OS.RPL) ? !!(data.form.OS.RPL.Select === 'on') : !!(data?.ro?.OS?.RPL?.Select)}
                {...{ register, errors, setValue, getValues, watch }}
              />
              <hr />
              <Rpl2FormDisabled
                type="os"
                defaultChecked={(data && data.form && data.form.OS && data.form.OS.RPL2) ? !!(data.form.OS.RPL2.Select === 'on') : !!(data?.ro?.OS?.RPL_2?.Select)}
                {...{ register, errors, setValue, getValues, watch }}
              />
              <hr />
              <OdOsBottomFormDisabled type="os" {...{ register, errors }} />
              <hr />
            </Col>
          </Row>
        </FormGroup>

        <FormGroup style={{marginTop: '-30px'}}>
          <Table>
            <tr>
              <td>
                <div>
                  <Label style={{marginLeft: '-25px'}}>KGD</Label>
                </div>
              </td>
              <td>
                <Row>
                  <Col>
                    <Input
                      type="text"
                      style={{ width: '300px', marginLeft: '-50px' }}
                      id="kgd"
                      name="kgd"
                      innerRef={register()}
                    />
                  </Col>
                  <Col>
                    <Label>mg / dl</Label>
                  </Col>
                </Row>
              </td>
              <td>
                <div>
                  <Label style={{marginLeft: '-35px'}}>TD</Label>
                </div>
              </td>
              <td>
                <Row>
                  <Col>
                    <Input
                      type="text"
                      style={{ width: '300px', marginLeft: '-80px' }}
                      id="td"
                      name="td"
                      innerRef={register()}
                    />
                  </Col>
                  <Col>
                    <Label>mmHg</Label>
                  </Col>
                </Row>
              </td>
            </tr>
          </Table>
        </FormGroup>

        <FormGroup className='form-group' style={{marginTop: '-30px'}}>
          <Table borderless style={{ width: '100%' }}>
            <thead>
              <tr style={{ textAlign: 'center' }} className="fw-bolder">
                <th style={{ width: '50%' }}>
                OD
                </th>
                <th style={{ width: '50%' }}>
                OS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="fw-bold text-center">
                <td>
                  <Image src={data.pengkajian_awal.Gambar_Mata_OD && data.pengkajian_awal.Gambar_Mata_OD !== '' ? data.pengkajian_awal.Gambar_Mata_OD : '/assets/default/eye-clean.jpg'} alt='' width='300rem' height='300rem'/>
                </td>
                <td>
                  <Image src={data.pengkajian_awal.Gambar_Mata_OS && data.pengkajian_awal.Gambar_Mata_OS !== '' ? data.pengkajian_awal.Gambar_Mata_OS : '/assets/default/eye-clean.jpg'} alt='' width='300rem' height='300rem'/>
                </td>
              </tr>
            </tbody>
          </Table>
        </FormGroup>

        <FormGroup className='form-group' style={{marginTop: '-50px'}}>
          <Table borderless style={{ width: '100%' }} className='align-items-center'>
            <tr>
              <td style={{ width: '22%' }}>
                <b>Diagnosa</b>
              </td>
              <td>
                <Input
                  type='textarea'
                  className='mb-1'
                  style={{ width: '673px', marginLeft: '35px' }}
                  name='diagnose'
                  innerRef={register()}
                  invalid={errors.diagnose && true}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td><b>Terapi</b></td>
              <td>
                <Input
                  type='textarea'
                  // className='mt-1 mb-1'
                  style={{ width: '673px', marginLeft: '35px' }}
                  name='therapy'
                  innerRef={register()}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <Table className='mt-1 mb-1'>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Nama & Dosis</th>
                      <th>Satuan</th>
                      <th>Jumlah</th>
                      <th>Aturan Pakai</th>
                      <th>Catatan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data && data.tebus_obat && data.tebus_obat.Status_Tebus && data.tebus_obat.Status_Tebus === '1' && data.tebus_obat.Daftar_Tebus && data.tebus_obat.Daftar_Tebus.map((val: IResepObat, key: number) => (
                        <tr key={key}>
                          <td>
                            {`${key + 1}`}
                          </td>
                          <td>
                            {val.Nama_Obat}
                          </td>
                          <td>
                            {val.Nama_Satuan}
                          </td>
                          <td>
                            {val.Jumlah}
                          </td>
                          <td>
                            {val.Nama_AturanPakai}
                          </td>
                          <td>
                            {val.Catatan}
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </Table>
              </td>
            </tr>
            <tr>
              <td><b>Anjuran</b></td>
              <td>
                <Input
                  type='textarea'
                  className='mt-1 mb-1'
                  style={{ width: '705px', marginLeft: '28px' }}
                  name='suggestion'
                  innerRef={register()}
                  readOnly
                />
              </td>
            </tr>
          </Table>
        </FormGroup>
        <FormGroup className="form-group" row>
          <DateTimeInput
            name='tanggal_ttd'
            label={`Tanggal & Waktu`}
            defaultValue='tanggal_ttd'
            md={2}
            required={false}
            {...{ register, errors }}
          />
        </FormGroup>

        <FormGroup className="form-group" row>
          <Label for="tanda_tangan_radio" md={2} sm={12}>Yang Tanda Tangan</Label>
          <Col className="d-flex">
            <div className="me-1">
              <Input
                id='signature-person-1'
                type="radio"
                name="tanda_tangan_radio"
                value="1"
                defaultChecked={signaturePerson === '1'}
                onChange={(e) => handleChangeSignaturePerson(e)}
                innerRef={register()}
              />{' '}
              <Label>Pasien</Label>
            </div>
            <div>
              <Input
                id='signature-person-2'
                type="radio"
                name="tanda_tangan_radio"
                value="2"
                defaultChecked={signaturePerson === '2'}
                onChange={(e) => handleChangeSignaturePerson(e)}
                innerRef={register()}
              />{' '}
              <Label>Keluarga/Wali</Label>
            </div>
          </Col>
        </FormGroup>
        <div className="d-flex justify-content-around my-1">
          {
            signaturePerson === '1' && (
              <Signature
                label="Pasien"
                type="drawer"
                formName='rawat-jalan/bprj'
                component='ttd_pasien'
                initialImage={(data && data.form && data.form.Tanda_Tangan_Pasien && data.form.Tanda_Tangan_Pasien !== '' && !data.form.Tanda_Tangan_Pasien.includes('null')) ? data.form.Tanda_Tangan_Pasien : undefined}
                onSigned={(image: string) => handlePatientSigned(image)}/>
            )
          }
          <Input
            id="signature-patient"
            type="hidden"
            name="tanda_tangan_pasien"
            innerRef={register()}
          />
          {
            signaturePerson === '2' && (
              <Signature
                label="Wali"
                type="drawer"
                formName='rawat-jalan/bprj'
                component='ttd_wali'
                initialImage={(data && data.form && data.form.Tanda_Tangan_Wali && data.form.Tanda_Tangan_Wali !== '' && !data.form.Tanda_Tangan_Wali.includes('null')) ? data.form.Tanda_Tangan_Wali : undefined}
                onSigned={(image: string) => handleWaliSigned(image)}/>
            )
          }
          <Input
            id="signature-wali"
            type="hidden"
            name="tanda_tangan_wali"
            innerRef={register()}
          />
          <div>
            <Signature
              label="Dokter"
              id='signature-div'
              additionalLabel={(data && data.form && data.form.Nama_Dokter && data.form.Nama_Dokter !== '') ? data.form.Nama_Dokter : undefined}
              type="picker"
              initialImage={(data && data.form && data.form.TTD_Dokter && data.form.TTD_Dokter !== '' && !data.form.TTD_Dokter.includes('null')) ? data.form.TTD_Dokter : undefined}
              defaultPerson={(userData && userData.id) ? userData.id : ''}
              persons={doctors}
              unit='dokter'
              onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                if (isFormDoctor) {
                  handleOfficerSigned(assigner, isFormDoctor)
                }
                if (!isFormDoctor) {
                  handleOfficerSigned(assigner)
                }
              }}
            />
            <Label>{sip && sip !== '' ? `SIP: ${sip}` : ''}</Label>
          </div>
          <Input
            id="signature-officer"
            type="hidden"
            name="ttd_dokter"
            innerRef={register()}
          />
          <Input
            id="id-officer"
            type="hidden"
            name="doctor_id"
            innerRef={register()}
          />
          <Input
            id='sip-doctor'
            type='hidden'
            name='doctor_sip'
            innerRef={register()}
          />
        </div>
        <FormGroup className="d-flex mb-0 justify-content-center">
          <SubmitButton
            label="Simpan"
            buttonColor='primary'
            spinnerColor='light'
            processing={processing}
            spinnerStyle={{ width: '1rem', height: '1rem' }}
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
        {
          inProgress ? (
            <FormGroup className='form-group justify-content-center align-items-center mt-0' row>
              <div style={{ width: '30%' }} className='d-flex flex-column justify-content-center align-items-center mt-0'>
                <Label>{inProgress.label}</Label>
                <Progress
                  value={inProgress.value}
                  max={100}
                  className='mt-0'
                  bar
                  striped
                  animated
                >
                  {inProgress.percentage}
                </Progress>
              </div>
            </FormGroup>
          ) : (
            null
          )
        }
        <FormGroup className='form-group mt-0' row>
          <div className='d-flex justify-content-center align-items-center'>
            <Label className='me-1'>Terakhir disimpan: </Label>
            <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
          </div>
        </FormGroup>
      </Form>
    </>
  );
}
export default ProofOfOutpatient;
