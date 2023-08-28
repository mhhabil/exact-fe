import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Progress, Row } from 'reactstrap';
import { FindPdfRequest, IPdfModel } from '@shared/pdf';
import { IUpdatePreliminaryStudyRequest, UpdatePreliminaryStudyRequest } from '@modules/ro/preliminary-study/requests';
import { fetchPreliminaryStudyPdf, handlePdf } from '@modules/ro/preliminary-study/stores/preliminary-study.store';
import { useEffect, useState } from 'react';
import AES from 'crypto-js/aes';
import { PreliminaryStudyModel } from '@modules/ro/preliminary-study/models/preliminary-study.model';
import { Signature } from '@shared/signature/components';
import { SignatureModel } from '@shared/signature/models/signature.model';
import { SubmitButton } from '@src/shared/button';
import getConfig from 'next/config';
import router from 'next/router';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { useWarnIfUnsavedChanges } from '@src/shared/alert';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { AppRequest } from '@shared/request';
import KmbForm from '@modules/ro/preliminary-study/components/kmb-form';
import KmlForm from '@modules/ro/preliminary-study/components/kml-form';
import Koreksi1Form from '@modules/ro/preliminary-study/components/koreksi-1-form';
import Koreksi2Form from '@modules/ro/preliminary-study/components/koreksi-2-form';
import OdOsBottomForm from '@modules/ro/preliminary-study/components/od-os-bottom-form';
import OdOsTopForm from '@modules/ro/preliminary-study/components/od-os-top-form';
import { PreliminaryStudyService } from '@modules/ro/preliminary-study/services';
import RplForm from '@modules/ro/preliminary-study/components/rpl-form';
import { CreatePDFData } from '../requests/update-preliminary-study.request';
import { CreatePDFRequest } from '@src/shared/pdf/requests/create-pdf.request';
import Rpl2Form from './rpl2-form';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const PreliminaryStudyForm = (props: { data: PreliminaryStudyModel }) => {

  const { data } = props;
  const { publicRuntimeConfig } = getConfig();

  const dispatch = useAppDispatch();
  const { treatment } = useAppSelector(state => state.patient);
  const { nurses } = useAppSelector(state => state.nurse);
  const { pdf } = useAppSelector(state => state.preliminaryStudy);

  const [showComplaintOther, setShowComplaintOther] = useState(data.form.ID_Keluhan === 'Lain-lain')
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const [processing, setProcessing] = useState<boolean | undefined>(false)
  const [isPdfGenerated, setIsPdfGenerated] = useState<boolean>(false);
  const [inProgress, setInProgress] = useState<any>(undefined);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPreliminaryStudyPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'ro_pengkajian-awal_v3' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf)
  }, [pdf])

  const { register, handleSubmit, errors, formState, setValue, getValues, watch } = useForm({
    mode: 'onChange',
    resolver: yupResolver(UpdatePreliminaryStudyRequest.scheme()),
    defaultValues: {
      complaint: (data && data.form && data.form.ID_Keluhan) ? data.form.ID_Keluhan : '',
      other_complaint: data.form?.Keluhan_Lain,
      note: data.form?.Catatan_Lain,
      signature_ro_officer: data.form?.TTD_Petugas_RO,
      ro_officer_id: data.form?.ID_Petugas_RO,

      od_va: (data && data.form && data.form.OD && data.form.OD.VA) ? data.form.OD.VA : '',
      od_false: (data && data.form && data.form.OD && data.form.OD.False) ? data.form.OD.False : '',
      od_ph: (data && data.form && data.form.OD && data.form.OD.PH) ? data.form.OD.PH : '',
      od_add: (data && data.form && data.form.OD && data.form.OD.Add) ? data.form.OD.Add : '',
      od_jagger: (data && data.form && data.form.OD && data.form.OD.Jagger) ? data.form.OD.Jagger : '',

      od_kml_select: data.form?.OD?.KML?.Select,
      od_kml_sph: data.form?.OD?.KML?.Sph,
      od_kml_cyl: data.form?.OD?.KML?.Cyl,
      od_kml_axis: data.form?.OD?.KML?.Axis,
      od_kml_va: data.form?.OD?.KML?.VA ? data.form?.OD?.KML?.VA : data.form?.OD?.KML?.Va ? data.form?.OD?.KML?.Va : '',
      od_kml_false: data.form?.OD?.KML?.False,
      od_kml_add: data.form?.OD?.KML?.Add,
      od_kml_jagger: data.form?.OD?.KML?.Jagger,
      od_kml_pd_jauh: data.form?.OD?.KML?.Pd_Jauh,
      od_kml_pd_dekat: data.form?.OD?.KML?.Pd_Dekat,

      od_kmb_select: data.form?.OD?.KMB?.Select,
      od_kmb_sph: data.form?.OD?.KMB?.Sph,
      od_kmb_cyl: data.form?.OD?.KMB?.Cyl,
      od_kmb_axis: data.form?.OD?.KMB?.Axis,
      od_kmb_false: data.form?.OD?.KMB?.False,
      od_kmb_add: data.form?.OD?.KMB?.Add,
      od_kmb_jagger: data.form?.OD?.KMB?.Jagger,
      od_kmb_pd_jauh: data.form?.OD?.KMB?.Pd_Jauh,
      od_kmb_pd_dekat: data.form?.OD?.KMB?.Pd_Dekat,

      od_koreksi_1_select: data.form?.OD?.Koreksi_1?.Select,
      od_koreksi_1_sph: data.form?.OD?.Koreksi_1?.Sph,
      od_koreksi_1_cyl: data.form?.OD?.Koreksi_1?.Cyl,
      od_koreksi_1_axis: data.form?.OD?.Koreksi_1?.Axis,
      od_koreksi_1_va: data.form?.OD?.Koreksi_1?.VA ? data.form?.OD?.Koreksi_1?.VA : data.form?.OD?.Koreksi_1?.Va ? data.form?.OD?.Koreksi_1?.Va : '',
      od_koreksi_1_false: data.form?.OD?.Koreksi_1?.False,
      od_koreksi_1_add: data.form?.OD?.Koreksi_1?.Add,
      od_koreksi_1_jagger: data.form?.OD?.Koreksi_1?.Jagger,
      od_koreksi_1_pd_jauh: data.form?.OD?.Koreksi_1?.Pd_Jauh,
      od_koreksi_1_pd_dekat: data.form?.OD?.Koreksi_1?.Pd_Dekat,
      od_koreksi_1_adaptasi: data.form?.OD?.Koreksi_1?.Adaptasi,

      od_koreksi_2_select: data.form?.OD?.Koreksi_2?.Select,
      od_koreksi_2_sph: data.form?.OD?.Koreksi_2?.Sph,
      od_koreksi_2_cyl: data.form?.OD?.Koreksi_2?.Cyl,
      od_koreksi_2_axis: data.form?.OD?.Koreksi_2?.Axis,
      od_koreksi_2_va: data.form?.OD?.Koreksi_2?.VA ? data.form?.OD?.Koreksi_2?.VA : data.form?.OD?.Koreksi_2?.Va ? data.form?.OD?.Koreksi_2?.Va : '',
      od_koreksi_2_false: data.form?.OD?.Koreksi_2?.False,
      od_koreksi_2_add: data.form?.OD?.Koreksi_2?.Add,
      od_koreksi_2_jagger: data.form?.OD?.Koreksi_2?.Jagger,
      od_koreksi_2_pd_jauh: data.form?.OD?.Koreksi_2?.Pd_Jauh,
      od_koreksi_2_pd_dekat: data.form?.OD?.Koreksi_2?.Pd_Dekat,
      od_koreksi_2_adaptasi: data.form?.OD?.Koreksi_2?.Adaptasi,

      od_rpl_select: data.form?.OD?.RPL?.Select,
      od_rpl_sph: data.form?.OD?.RPL?.Sph,
      od_rpl_va_aquity: data.form?.OD?.RPL?.Va_Aquity,
      od_rpl_cyl: data.form?.OD?.RPL?.Cyl,
      od_rpl_axis: data.form?.OD?.RPL?.Axis,
      od_rpl_va: data.form?.OD?.RPL?.VA ? data.form?.OD?.RPL?.VA : data.form?.OD?.RPL?.Va ? data.form?.OD?.RPL?.Va : '',
      od_rpl_false: data.form?.OD?.RPL?.False,
      od_rpl_pd_jauh: data.form?.OD?.RPL?.Pd_Jauh,
      od_rpl_adaptasi: data.form?.OD?.RPL?.Adaptasi,
      od_rpl_ph: data.form?.OD?.RPL?.PH,

      od_rpl_2_select: data.form?.OD?.RPL_2?.Select,
      od_rpl_2_sph: data.form?.OD?.RPL_2?.Sph,
      od_rpl_2_va_aquity: data.form?.OD?.RPL_2?.Va_Aquity,
      od_rpl_2_cyl: data.form?.OD?.RPL_2?.Cyl,
      od_rpl_2_axis: data.form?.OD?.RPL_2?.Axis,
      od_rpl_2_va: data.form?.OD?.RPL_2?.VA ? data.form?.OD?.RPL_2?.VA : data.form?.OD?.RPL_2?.Va ? data.form?.OD?.RPL_2?.Va : '',
      od_rpl_2_false: data.form?.OD?.RPL_2?.False,
      od_rpl_2_pd_jauh: data.form?.OD?.RPL_2?.Pd_Jauh,
      od_rpl_2_adaptasi: data.form?.OD?.RPL_2?.Adaptasi,
      od_rpl_2_ph: data.form?.OD?.RPL_2?.PH,

      od_rpl_streak_select: data.form?.OD?.RPL_Streak?.Select,
      od_rpl_streak_va_aquity: data.form?.OD?.RPL_Streak?.Va_Aquity,
      od_rpl_streak_sph: data.form?.OD?.RPL_Streak?.Sph,
      od_rpl_streak_cyl: data.form?.OD?.RPL_Streak?.Cyl,
      od_rpl_streak_axis: data.form?.OD?.RPL_Streak?.Axis,
      od_rpl_streak_va: data.form?.OD?.RPL_Streak?.VA ? data.form?.OD?.RPL_Streak?.VA : data.form?.OD?.RPL_Streak?.Va ? data.form?.OD?.RPL_Streak?.Va : '',
      od_rpl_streak_false: data.form?.OD?.RPL_Streak?.False,
      od_rpl_streak_pd_jauh: data.form?.OD?.RPL_Streak?.Pd_Jauh,
      od_rpl_streak_adaptasi: data.form?.OD?.RPL_Streak?.Adaptasi,
      od_rpl_streak_ph: data.form?.OD?.RPL_Streak?.PH,

      od_rpl_2_streak_select: data.form?.OD?.RPL_Streak_2?.Select,
      od_rpl_2_streak_va_aquity: data.form?.OD?.RPL_Streak_2?.Va_Aquity,
      od_rpl_2_streak_sph: data.form?.OD?.RPL_Streak_2?.Sph,
      od_rpl_2_streak_cyl: data.form?.OD?.RPL_Streak_2?.Cyl,
      od_rpl_2_streak_axis: data.form?.OD?.RPL_Streak_2?.Axis,
      od_rpl_2_streak_va: data.form?.OD?.RPL_Streak_2?.VA ? data.form?.OD?.RPL_Streak_2?.VA : data.form?.OD?.RPL_Streak_2?.Va ? data.form?.OD?.RPL_Streak_2?.Va : '',
      od_rpl_2_streak_false: data.form?.OD?.RPL_Streak_2?.False,
      od_rpl_2_streak_pd_jauh: data.form?.OD?.RPL_Streak_2?.Pd_Jauh,
      od_rpl_2_streak_adaptasi: data.form?.OD?.RPL_Streak_2?.Adaptasi,
      od_rpl_2_streak_ph: data.form?.OD?.RPL_Streak_2?.PH,

      od_non_contact: data.form?.OD?.Non_Contact,
      od_tanam_lensa: (data && data.form && data.form.OD && data.form.OD.Tanam_Lensa) ? data.form.OD.Tanam_Lensa : '',
      od_schiotz: data.form?.OD?.Schiotz,
      od_keterangan_tono: data.form?.OD?.Keterangan_Tono,

      os_va: (data && data.form && data.form.OS && data.form.OS.VA) ? data.form.OS.VA : '',
      os_false: (data && data.form && data.form.OS && data.form.OS.False) ? data.form.OS.False : '',
      os_ph: (data && data.form && data.form.OS && data.form.OS.PH) ? data.form.OS.PH : '',
      os_add: (data && data.form && data.form.OS && data.form.OS.Add) ? data.form.OS.Add : '',
      os_jagger: (data && data.form && data.form.OS && data.form.OS.Jagger) ? data.form.OS.Jagger : '',

      os_kml_select: data.form?.OS?.KML?.Select,
      os_kml_sph: data.form?.OS?.KML?.Sph,
      os_kml_cyl: data.form?.OS?.KML?.Cyl,
      os_kml_axis: data.form?.OS?.KML?.Axis,
      os_kml_va: data.form?.OS?.KML?.VA ? data.form?.OS?.KML?.VA : data.form?.OS?.KML?.Va ? data.form?.OS?.KML?.Va : '',
      os_kml_false: data.form?.OS?.KML?.False,
      os_kml_add: data.form?.OS?.KML?.Add,
      os_kml_jagger: data.form?.OS?.KML?.Jagger,
      os_kml_pd_jauh: data.form?.OS?.KML?.Pd_Jauh,
      os_kml_pd_dekat: data.form?.OS?.KML?.Pd_Dekat,

      os_kmb_select: data.form?.OS?.KMB?.Select,
      os_kmb_sph: data.form?.OS?.KMB?.Sph,
      os_kmb_cyl: data.form?.OS?.KMB?.Cyl,
      os_kmb_axis: data.form?.OS?.KMB?.Axis,
      os_kmb_false: data.form?.OS?.KMB?.False,
      os_kmb_add: data.form?.OS?.KMB?.Add,
      os_kmb_jagger: data.form?.OS?.KMB?.Jagger,
      os_kmb_pd_jauh: data.form?.OS?.KMB?.Pd_Jauh,
      os_kmb_pd_dekat: data.form?.OS?.KMB?.Pd_Dekat,

      os_koreksi_1_select: data.form?.OS?.Koreksi_1?.Select,
      os_koreksi_1_sph: data.form?.OS?.Koreksi_1?.Sph,
      os_koreksi_1_cyl: data.form?.OS?.Koreksi_1?.Cyl,
      os_koreksi_1_axis: data.form?.OS?.Koreksi_1?.Axis,
      os_koreksi_1_va: data.form?.OS?.Koreksi_1?.VA ? data.form?.OS?.Koreksi_1?.VA : data.form?.OS?.Koreksi_1?.Va ? data.form?.OS?.Koreksi_1?.Va : '',
      os_koreksi_1_false: data.form?.OS?.Koreksi_1?.False,
      os_koreksi_1_add: data.form?.OS?.Koreksi_1?.Add,
      os_koreksi_1_jagger: data.form?.OS?.Koreksi_1?.Jagger,
      os_koreksi_1_pd_jauh: data.form?.OS?.Koreksi_1?.Pd_Jauh,
      os_koreksi_1_pd_dekat: data.form?.OS?.Koreksi_1?.Pd_Dekat,
      os_koreksi_1_adaptasi: data.form?.OS?.Koreksi_1?.Adaptasi,

      os_koreksi_2_select: data.form?.OS?.Koreksi_2?.Select,
      os_koreksi_2_sph: data.form?.OS?.Koreksi_2?.Sph,
      os_koreksi_2_cyl: data.form?.OS?.Koreksi_2?.Cyl,
      os_koreksi_2_axis: data.form?.OS?.Koreksi_2?.Axis,
      os_koreksi_2_va: data.form?.OS?.Koreksi_2?.VA ? data.form?.OS?.Koreksi_2?.VA : data.form?.OS?.Koreksi_2?.Va ? data.form?.OS?.Koreksi_2?.Va : '',
      os_koreksi_2_false: data.form?.OS?.Koreksi_2?.False,
      os_koreksi_2_add: data.form?.OS?.Koreksi_2?.Add,
      os_koreksi_2_jagger: data.form?.OS?.Koreksi_2?.Jagger,
      os_koreksi_2_pd_jauh: data.form?.OS?.Koreksi_2?.Pd_Jauh,
      os_koreksi_2_pd_dekat: data.form?.OS?.Koreksi_2?.Pd_Dekat,
      os_koreksi_2_adaptasi: data.form?.OS?.Koreksi_2?.Adaptasi,

      os_rpl_select: data.form?.OS?.RPL?.Select,
      os_rpl_va_aquity: data.form?.OS?.RPL?.Va_Aquity,
      os_rpl_sph: data.form?.OS?.RPL?.Sph,
      os_rpl_cyl: data.form?.OS?.RPL?.Cyl,
      os_rpl_axis: data.form?.OS?.RPL?.Axis,
      os_rpl_va: data.form?.OS?.RPL?.VA ? data.form?.OS?.RPL?.VA : data.form?.OS?.RPL?.Va ? data.form?.OS?.RPL?.Va : '',
      os_rpl_false: data.form?.OS?.RPL?.False,
      os_rpl_pd_jauh: data.form?.OS?.RPL?.Pd_Jauh,
      os_rpl_adaptasi: data.form?.OS?.RPL?.Adaptasi,
      os_rpl_ph: data.form?.OS?.RPL?.PH,

      os_rpl_2_select: data.form?.OS?.RPL_2?.Select,
      os_rpl_2_va_aquity: data.form?.OS?.RPL_2?.Va_Aquity,
      os_rpl_2_sph: data.form?.OS?.RPL_2?.Sph,
      os_rpl_2_cyl: data.form?.OS?.RPL_2?.Cyl,
      os_rpl_2_axis: data.form?.OS?.RPL_2?.Axis,
      os_rpl_2_va: data.form?.OS?.RPL_2?.VA ? data.form?.OS?.RPL_2?.VA : data.form?.OS?.RPL_2?.Va ? data.form?.OS?.RPL_2?.Va : '',
      os_rpl_2_false: data.form?.OS?.RPL_2?.False,
      os_rpl_2_pd_jauh: data.form?.OS?.RPL_2?.Pd_Jauh,
      os_rpl_2_adaptasi: data.form?.OS?.RPL_2?.Adaptasi,
      os_rpl_2_ph: data.form?.OS?.RPL_2?.PH,

      os_rpl_streak_select: data.form?.OS?.RPL_Streak?.Select,
      os_rpl_streak_va_aquity: data.form?.OS?.RPL_Streak?.Va_Aquity,
      os_rpl_streak_sph: data.form?.OS?.RPL_Streak?.Sph,
      os_rpl_streak_cyl: data.form?.OS?.RPL_Streak?.Cyl,
      os_rpl_streak_axis: data.form?.OS?.RPL_Streak?.Axis,
      os_rpl_streak_va: data.form?.OS?.RPL_Streak?.VA ? data.form?.OS?.RPL_Streak?.VA : data.form?.OS?.RPL_Streak?.Va ? data.form?.OS?.RPL_Streak?.Va : '',
      os_rpl_streak_false: data.form?.OS?.RPL_Streak?.False,
      os_rpl_streak_pd_jauh: data.form?.OS?.RPL_Streak?.Pd_Jauh,
      os_rpl_streak_adaptasi: data.form?.OS?.RPL_Streak?.Adaptasi,
      os_rpl_streak_ph: data.form?.OS?.RPL_Streak?.PH,

      os_rpl_2_streak_select: data.form?.OS?.RPL_Streak_2?.Select,
      os_rpl_2_streak_va_aquity: data.form?.OS?.RPL_Streak_2?.Va_Aquity,
      os_rpl_2_streak_sph: data.form?.OS?.RPL_Streak_2?.Sph,
      os_rpl_2_streak_cyl: data.form?.OS?.RPL_Streak_2?.Cyl,
      os_rpl_2_streak_axis: data.form?.OS?.RPL_Streak_2?.Axis,
      os_rpl_2_streak_va: data.form?.OS?.RPL_Streak_2?.VA ? data.form?.OS?.RPL_Streak_2?.VA : data.form?.OS?.RPL_Streak_2?.Va ? data.form?.OS?.RPL_Streak_2?.Va : '',
      os_rpl_2_streak_false: data.form?.OS?.RPL_Streak_2?.False,
      os_rpl_2_streak_pd_jauh: data.form?.OS?.RPL_Streak_2?.Pd_Jauh,
      os_rpl_2_streak_adaptasi: data.form?.OS?.RPL_Streak_2?.Adaptasi,
      os_rpl_2_streak_ph: data.form?.OS?.RPL_Streak_2?.PH,

      os_non_contact: data.form?.OS?.Non_Contact,
      os_tanam_lensa: (data && data.form && data.form.OS && data.form.OS.Tanam_Lensa) ? data.form.OS.Tanam_Lensa : '',
      os_keterangan_tono: data.form?.OS?.Keterangan_Tono,
      os_schiotz: data.form?.OS?.Schiotz,
    },
  });

  useEffect(() => {
    if (isPdfGenerated) {
      window.location.reload();
    }
  }, [isPdfGenerated])
  const { isDirty } = formState;

  useWarnIfUnsavedChanges(isDirty, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  const handleChangeComplaint = (e: any) => {
    if (e.target.value === 'Lain-lain') {
      setShowComplaintOther(true);
    } else {
      setShowComplaintOther(false);
    }
  }

  const handleSubmitForm = (value: IUpdatePreliminaryStudyRequest) => {
    if (!treatment) {
      return;
    }
    setProcessing(true);
    // reset(value);
    setInProgress({ value: 10, label: 'Updating Pengkajian Awal', percentage: '10%' })
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdatePreliminaryStudyRequest.createFromJson({ ...value, ...appRequest });
    dispatch(handlePdf(undefined));
    PreliminaryStudyService().update(params)
      .then(() => {
        setInProgress({ value: 40, label: 'Update Pengkajian Awal Sukses...', percentage: '40%' })
        PreliminaryStudyService().show(appRequest)
          .then((resp: any) => {
            setInProgress({ value: 75, label: 'Generating PDF...', percentage: '75%' })
            const { form } = resp.data.data
            const dataPdf = CreatePDFData.createPdfRequest(form, treatment);
            const params = CreatePDFRequest.createFromJson({
              emr_id: appRequest.emr_id,
              form_name: 'ro_pengkajian-awal_v3',
              row_filter: '',
              preview: false,
              data: dataPdf,
            });
            PreliminaryStudyService().pdfNew(params).then(() => {
              setInProgress({ value: 100, label: 'PDF Generated...', percentage: '100%' })
              setIsPdfGenerated(true)
            }).catch((err) => {
              setIsPdfGenerated(false);
              setProcessing(false);
            });
          })
      });
  }

  const handleOfficerSigned = (assigner: SignatureModel) => {
    setValue('signature_ro_officer', assigner.Signature);
    setValue('ro_officer_id', assigner.ID_Karyawan);
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <Row>
        <Col md="12">
          <FormGroup className="form-group" row>
            <Label for="complaint" md="3" sm="12">Keluhan Pasien</Label>
            <Col>
              <Input
                type="select"
                id="complaint"
                name="complaint"
                innerRef={register({ required: true })}
                onChange={(e) => handleChangeComplaint(e)}
                invalid={errors.complaint && true}>
                <option value="" disabled={false}>--</option>
                {
                  data && data.anamnesa && data.anamnesa.map((anamnesa, key) => {
                    return <option value={anamnesa.ID_Anamnesa} key={key}>{ anamnesa.Nama }</option>;
                  })
                }
                <option value="Lain-lain">Lain-lain</option>
              </Input>
            </Col>
            {errors && errors.complaint && <FormFeedback>{errors.complaint.message}</FormFeedback>}
          </FormGroup>
          {
            showComplaintOther && (
              <FormGroup className="form-group" row>
                <Label for="other_complaint" md="3" sm="12" />
                <Col>
                  <Input
                    id="other_complaint"
                    name="other_complaint"
                    innerRef={register({ required: true })}
                    invalid={errors.other_complaint && true} />
                </Col>
                {errors && errors.other_complaint && <FormFeedback>{errors.other_complaint.message}</FormFeedback>}
              </FormGroup>
            )
          }
        </Col>
      </Row>
      <Row className="my-2">
        <Col md="6" sm="12">
          <Row>
            <Col md="12" className="d-flex justify-content-center">
              <h5>OD</h5>
            </Col>
          </Row>
          <hr />
          <OdOsTopForm type="od" {...{ register, errors }} />
          <hr />
          <KmlForm type="od" defaultChecked={!!(data.form?.OD?.KML?.Select)} {...{ register, errors, setValue, getValues, watch }} />
          <hr />
          <Koreksi1Form type="od" defaultChecked={!!(data.form?.OD?.Koreksi_1?.Select)} {...{ register, errors, setValue, getValues, watch }} />
          <hr />
          <Koreksi2Form type="od" defaultChecked={!!(data.form?.OD?.Koreksi_2?.Select)} {...{ register, errors, setValue, getValues, watch }} />
          <hr />
          <KmbForm type="od" defaultChecked={!!(data.form?.OD?.KMB?.Select)} {...{ register, errors, setValue, getValues, watch }} />
          <hr />
          <RplForm type="od" defaultChecked={!!(data.form?.OD?.RPL?.Select)} {...{ register, errors, setValue, getValues, watch }} />
          <hr />
          <Rpl2Form type="od" defaultChecked={!!(data.form?.OD?.RPL_2?.Select)} {...{ register, errors, setValue, getValues, watch }} />
          <hr />
          <OdOsBottomForm type="od" {...{ register, errors }} />
          <hr />
        </Col>
        <Col md="6" sm="12">
          <Row>
            <Col md="12" className="d-flex justify-content-center">
              <h5>OS</h5>
            </Col>
          </Row>
          <hr />
          <OdOsTopForm type="os" {...{ register, errors }} />
          <hr />
          <KmlForm type="os" defaultChecked={!!(data.form?.OS?.KML?.Select)} {...{ register, errors, setValue, getValues, watch }} />
          <hr />
          <Koreksi1Form type="os" defaultChecked={!!(data.form?.OS?.Koreksi_1?.Select)} {...{ register, errors, setValue, getValues, watch }} />
          <hr />
          <Koreksi2Form type="os" defaultChecked={!!(data.form?.OS?.Koreksi_2?.Select)} {...{ register, errors, setValue, getValues, watch }} />
          <hr />
          <KmbForm type="os" defaultChecked={!!(data.form?.OS?.KMB?.Select)} {...{ register, errors, setValue, getValues, watch }} />
          <hr />
          <RplForm type="os" defaultChecked={!!(data.form?.OS?.RPL?.Select)} {...{ register, errors, setValue, getValues, watch }} />
          <hr />
          <Rpl2Form type="os" defaultChecked={!!(data.form?.OS?.RPL_2?.Select)} {...{ register, errors, setValue, getValues, watch }} />
          <hr />
          <OdOsBottomForm type="os" {...{ register, errors }} />
          <hr />
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <FormGroup className="form-group" row>
            <Label for="note" md="3" sm="12">Catatan Lainnya</Label>
            <Col>
              <Input
                type="textarea"
                id="note"
                name="note"
                innerRef={register({ required: true })}
                invalid={errors.note && true} />
            </Col>
            {errors && errors.note && <FormFeedback>{errors.note.message}</FormFeedback>}
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <div className="d-flex justify-content-center mb-2">
            <Signature
              label="Petugas RO"
              type="picker"
              persons={nurses}
              initialImage={(data && data.form && data.form.TTD_Petugas_RO && data.form.TTD_Petugas_RO !== '') ? data.form.TTD_Petugas_RO : undefined}
              additionalLabel={(data && data.form && data.form.Nama_Petugas_RO !== '') ? data.form.Nama_Petugas_RO : undefined}
              onSigned={(assigner: SignatureModel) => handleOfficerSigned(assigner)} />
          </div>
          <Input
            type="hidden"
            name="signature_ro_officer"
            innerRef={register({ required: true })}
            invalid={errors.signature_ro_officer && true} />
          <Input
            type="hidden"
            name="ro_officer_id"
            innerRef={register({ required: true })}
            invalid={errors.ro_officer_id && true} />
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <FormGroup className="d-flex mb-0 justify-content-center">
            <SubmitButton
              label="Simpan"
              buttonColor='primary'
              spinnerColor='light'
              spinnerStyle={{ width: '1rem', height: '1rem' }}
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
          </FormGroup>
          {
            inProgress ? (
              <FormGroup className='form-group mb-2' row>
                <Col className='d-flex align-items-center justify-content-center'>
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
          <FormGroup className='form-group mt-2' row>
            <div className='d-flex justify-content-center align-items-center'>
              <Label className='me-1'>Terakhir Disimpan: </Label>
              <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
            </div>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
}

export default PreliminaryStudyForm;
