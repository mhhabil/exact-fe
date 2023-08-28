import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import { CPPTPDFRequest, RootPDFRequest } from "@src/shared/request/requests/cppt-pdf.request";
import { CreateCpptInpatientNurseRequest, ICreateCpptInpatientNurseRequest, UpdateCpptInpatientNurseRequest } from "../requests";
import { Fragment, useEffect, useState } from "react";
import { fetchCpptInpatientDayPdf, fetchCpptInpatientPdf, handlePdf, handlePdfAll } from "../stores/cppt-inpatient.store";
import { AppRequest } from "@src/shared/request";
import { CpptInpatientService } from "../services";
import { DoctorPreliminaryStudyModel } from "@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model";
import { ErrorMessage } from "@hookform/error-message";
import { FindPdfRequest } from "@src/shared/pdf";
import { IDoctorVisit } from "../models/cppt-inpatient.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { SubmitButton } from "@src/shared/button";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useForm } from "react-hook-form";
import { useWarnIfUnsavedChanges } from "@src/shared/alert";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

const CpptInpatientFormNurse = (props: { doctorPreliminaryStudy: DoctorPreliminaryStudyModel | any, cpptRanap?: any, onSuccessSubmit?: any, onCancel?: any, action?: any, anamnesa: any, visits: Array<IDoctorVisit> }) => {
  const aOptions = [
    'Gangguan persepsi sensori penglihatan',
    'Risiko tinggi infeksi',
    'Ansietas',
    'Gangguan rasa nyaman',
    'Kurang Pengetahuan',
    'Lain-lain',
  ];
  const { nurses } = useAppSelector(state => state.nurse);
  const dispatch = useAppDispatch();

  const { doctorPreliminaryStudy, cpptRanap, onSuccessSubmit, onCancel, action, anamnesa, visits } = props;
  const [processing, setProcessing] = useState(false);
  const { treatment } = useAppSelector(state => state.patient);
  const [signatureErr, setSignatureErr] = useState({ error: false, message: '' });
  const [datasErr, setDatasErr] = useState({ error: false, message: '' });
  const [dataoErr, setDataoErr] = useState({ error: false, message: '' });
  const [data_AErr, setData_AErr] = useState({ error: false, message: '' });
  const [timeErr, setTimeErr] = useState({ error: false, message: '' });
  const [allowFill, setAllowFill] = useState<boolean>(!!(cpptRanap && cpptRanap.ID_Berobat && cpptRanap.ID_Berobat !== ''))

  const convertDatetimeToUTC = (date?: any) => {
    const d = date ? new Date(date) : new Date();
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}T${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }

  const checkDataS = () => {
    if (cpptRanap) {
      const selected = anamnesa.find((item: any) => item.Nama === cpptRanap.Data_S)
      return selected ? selected.Nama : 'Lain-lain';
    }
  }

  const { register, handleSubmit, errors, setValue, watch, formState, reset } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: true,
    resolver: yupResolver(CreateCpptInpatientNurseRequest.scheme()),
    defaultValues: {
      id_berobat: cpptRanap?.ID_Berobat ?? '',
      data_s: (cpptRanap && cpptRanap.Data_S) ? checkDataS() : doctorPreliminaryStudy?.formRO?.ID_Keluhan === 'Lain-lain' ? 'Lain-lain' : doctorPreliminaryStudy?.formRO?.Keluhan ? doctorPreliminaryStudy?.formRO?.Keluhan : '',
      data_s_lain_text: (cpptRanap && cpptRanap.Data_S_Lain_Text) ? cpptRanap.Data_S_Lain_Text : (doctorPreliminaryStudy && doctorPreliminaryStudy.formRO && doctorPreliminaryStudy.formRO.Keluhan_Lain) ? doctorPreliminaryStudy.formRO.Keluhan_Lain : '',
      data_o: cpptRanap?.Data_O ?? `TOD: ${doctorPreliminaryStudy?.formRO?.OD?.Non_Contact ?? ''} mmHg\nTOS: ${doctorPreliminaryStudy?.formRO?.OS?.Non_Contact ?? ''} mmHg`,
      data_a: cpptRanap?.Data_A ?? 'Gangguan rasa nyaman',
      data_a_lain_text: cpptRanap?.Data_A_Lain_Text ?? '',
      data_p: cpptRanap?.Data_P ?? 'Kolaborasi dengan Dokter',
      instruksi_ppa: cpptRanap?.Instruksi_PPA ?? '',
      waktu: cpptRanap?.Waktu ?? convertDatetimeToUTC(),
      id_perawat_cppt: cpptRanap?.Id_Perawat_Cppt ?? '',
      ttd_perawat_cppt: cpptRanap?.TTD_Perawat_Cppt ?? '',
      td: cpptRanap?.TD ?? '120/80',
      kgd: cpptRanap?.KGD ?? '',
    },
  });

  const { isDirty } = formState;

  useWarnIfUnsavedChanges(isDirty, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  const dataS = watch('data_s');
  const dataA = watch('data_a');

  const handleOfficerSigned = (image: SignatureModel) => {
    setValue('id_perawat_cppt', image.ID_Karyawan);
    setValue('ttd_perawat_cppt', image.Signature);
  }

  useEffect(() => {
    if (cpptRanap && cpptRanap.ID_Berobat && cpptRanap.ID_Berobat !== '' && action && action === 'update') {
      setValue('id_berobat', cpptRanap.ID_Berobat);
    }
  }, [cpptRanap])

  const handleVisitChange = (e: any) => {
    if (e.target.value !== '') {
      setAllowFill(true);
    } else {
      setAllowFill(false);
    }
  }

  const handleSubmitForm = (value: ICreateCpptInpatientNurseRequest) => {
    setSignatureErr({ error: false, message: '' });
    setDatasErr({ error: false, message: '' });
    setDataoErr({ error: false, message: '' });
    setData_AErr({ error: false, message: '' });
    setTimeErr({ error: false, message: '' });
    if (!treatment) {
      return false;
    }
    if ((value.ttd_perawat_cppt === '' || value.data_s === '' || value.data_o === '' || value.data_a === '' || value.waktu === '')) {
      if (value.waktu === '') {
        setTimeErr({ error: true, message: 'Waktu harus diisi' });
        document.getElementById('waktu')?.focus()
      }
      if (value.ttd_perawat_cppt === '') {
        setSignatureErr({ error: true, message: 'Tanda tangan harus diisi' });
      }
      if (value.data_s === '') {
        setDatasErr({ error: true, message: 'S harus diisi' });
        document.getElementById('data_s')?.focus()
      }
      if (value.data_o === '') {
        setDataoErr({ error: true, message: 'O harus diisi' });
        document.getElementById('data_o')?.focus()
      }
      if (value.data_a === '') {
        setData_AErr({ error: true, message: 'A harus diisi' });
        document.getElementById('data_a')?.focus()
      }
      return;
    }
    setProcessing(true);
    reset(value)
    const appRequest = AppRequest.createFromStore(treatment);
    if (!cpptRanap || (action && action === 'create')) {
      const params = CreateCpptInpatientNurseRequest.createFromJson({...value, ...appRequest });
      CpptInpatientService().createNurse(params)
        .then(() => {
          dispatch(handlePdf(undefined));
          dispatch(handlePdfAll(undefined));
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
      const params = UpdateCpptInpatientNurseRequest.createFromJson({...value, ...appRequest, ID: cpptRanap.ID, emr_id: cpptRanap.EMR_ID });
      CpptInpatientService().updateNurse(params)
        .then(() => {
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
        <>
          <FormGroup className="form-group" row>
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
                className="mb-1"
                type="select"
                id="data_s"
                name="data_s"
                innerRef={register({ required: true })}
                invalid={errors.data_s && true}>
                {
                  anamnesa && Array.isArray(anamnesa) && anamnesa.map((option, key) => {
                    return <option value={option.Nama} key={key}>{ option.Nama }</option>;
                  })
                }
                <option value="Lain-lain">Lain-lain</option>
              </Input>
              {
                datasErr && datasErr.error && (
                  <p style={{ fontSize: '10pt' }} className='text-danger'>{datasErr.message}</p>
                )
              }
              {
                dataS && dataS === 'Lain-lain' ? (
                  <Input
                    type="text"
                    id="data_s_lain_text"
                    className='mb-1'
                    name="data_s_lain_text"
                    innerRef={register({ required: true })}
                    invalid={errors.data_s_lain_text && true} />
                ) : (
                  null
                )
              }
            </Col>
            {errors && errors.data_s && <FormFeedback>{errors.data_s.message}</FormFeedback>}
          </FormGroup>
          <FormGroup className="form-group" row>
            <Label md="2">O</Label>
            <Col>
              <Input
                type="textarea"
                id="data_o"
                name="data_o"
                read
                innerRef={register({ required: true })}
                invalid={errors.data_o && true} />
              <ErrorMessage
                errors={errors}
                name="data_o"
                render={({ messages }) => {
                  return messages ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  )) : null;
                }}
              />
            </Col>
            {errors && errors.data_o && <FormFeedback>{errors.data_o.message}</FormFeedback>}
          </FormGroup>
          {
            dataoErr && dataoErr.error && (
              <Row>
                <Col md='2'></Col>
                <Col>
                  <p style={{ fontSize: '10pt' }} className='text-danger'>{dataoErr.message}</p>
                </Col>
              </Row>
            )
          }
          <FormGroup className='form-group mt-1 mb-2' row>
            <Col md='2'></Col>
            <Col className='d-flex align-items-center me-1'>
              <Label className='me-1'>KGD: </Label>
              <Input
                type='text'
                name='kgd'
                innerRef={register({ required: true })}
                invalid={errors.kgd && true}
              />
              <Label className='ms-1'>mg/dl</Label>
            </Col>
            <Col className='d-flex align-items-center'>
              <Label className='me-1'>TD: </Label>
              <Input
                type='text'
                name='td'
                innerRef={register({ required: true })}
                invalid={errors.td && true}
              />
              <Label className='ms-1'>mmHg</Label>
            </Col>
          </FormGroup>
          <FormGroup className="form-group mt-1" row>
            <Label md="2">A</Label>
            <Col>
              <Input
                className="mb-1"
                type="select"
                id="data_a"
                name="data_a"
                innerRef={register({ required: true })}
                invalid={errors.data_a && true}>
                {
                  aOptions.map((option, key) => {
                    return <option value={option} key={key}>{ option }</option>;
                  })
                }
              </Input>
              {
                data_AErr && data_AErr.error && (
                  <p style={{ fontSize: '10pt' }} className='text-danger'>{data_AErr.message}</p>
                )
              }
              {
                dataA && dataA === 'Lain-lain' && (
                  <Input
                    type="text"
                    id="data_a_lain_text"
                    name="data_a_lain_text"
                    innerRef={register({ required: true })}
                    invalid={errors.data_a_lain_text && true} />
                )
              }
            </Col>
            {errors && errors.data_a_lain_text && <FormFeedback>{errors.data_a_lain_text.message}</FormFeedback>}
          </FormGroup>
          <FormGroup className="form-group" row>
            <Label md="2">P</Label>
            <Col>
              <Input
                type="text"
                id="data_p"
                name="data_p"
                readOnly
                value="Kolaborasi dengan Dokter"
                innerRef={register({ required: true })}
                invalid={errors.data_p && true} />
            </Col>
            {errors && errors.data_p && <FormFeedback>{errors.data_p.message}</FormFeedback>}
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
              label="Perawat"
              type="picker"
              persons={nurses}
              initialImage={(cpptRanap) ? cpptRanap.TTD_Perawat_Cppt : undefined}
              additionalLabel={(cpptRanap) ? cpptRanap.Nama_Perawat_Cppt : undefined}
              onSigned={(assigner: SignatureModel) => handleOfficerSigned(assigner)} />
            <Input
              type="hidden"
              name="id_perawat_cppt"
              innerRef={register({ required: true })}
              invalid={errors.id_perawat_cppt && true} />
            <Input
              type="hidden"
              name="ttd_perawat_cppt"
              innerRef={register({ required: true })}
              invalid={errors.ttd_perawat_cppt && true} />
          </div>
          {
            signatureErr && signatureErr.error && (
              <p style={{ fontSize: '10pt' }} className='text-danger text-center'>{signatureErr.message}</p>
            )
          }
        </>
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

export default CpptInpatientFormNurse;
