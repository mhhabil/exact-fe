import {Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row} from 'reactstrap';
import { CPPTPDFRequest, RootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import { CreateCpptEmergencyRoomNurseRequest, ICreateCpptEmergencyRoomNurseRequest } from '../requests/create-cppt-emergency-room-nurse.request';
import { Fragment, useState } from 'react';
import { fetchCpptEmergencyRoomDayPdf, fetchCpptEmergencyRoomPdf, handlePdf, handlePdfAll } from '../stores/cppt-emergency-room.store';
import {AppRequest} from '@shared/request';
import { CpptEmergencyRoomService } from '../services';
import { DoctorPreliminaryStudyModel } from '@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';
import { ErrorMessage } from '@hookform/error-message';
import { FindPdfRequest } from '@src/shared/pdf';
import { Signature } from '@shared/signature/components';
import { SignatureModel } from '@shared/signature/models/signature.model';
import { SubmitButton } from '@shared/button';
import { UpdateCpptEmergencyRoomNurseRequest } from '../requests/update-cppt-emergency-room-nurse.request';
import {useAppDispatch} from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useWarnIfUnsavedChanges } from '@src/shared/alert';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

const aOptions = [
  'Gangguan persepsi sensori penglihatan',
  'Risiko tinggi infeksi',
  'Ansietas',
  'Gangguan rasa nyaman',
  'Kurang Pengetahuan',
  'Lain-lain',
];

const CpptEmergencyRoomFormNurse = (props: { doctorPreliminaryStudy: DoctorPreliminaryStudyModel | any, cpptUgd?: any, onSuccessSubmit?: any, onCancel?: any, action?: any, anamnesa: any }) => {

  const { nurses } = useAppSelector(state => state.nurse);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const { doctorPreliminaryStudy, cpptUgd, onSuccessSubmit, onCancel, action, anamnesa } = props;
  const [processing, setProcessing] = useState(false);
  const { treatment } = useAppSelector(state => state.patient);
  const [signatureErr, setSignatureErr] = useState({ error: false, message: '' });
  const [dataSErr, setDataSErr] = useState({ error: false, message: '' });
  const [dataOErr, setDataOErr] = useState({ error: false, message: '' });
  const [dataAErr, setDataAErr] = useState({ error: false, message: '' });
  const [timeErr, setTimeErr] = useState({ error: false, message: '' });

  const convertDatetimeToUTC = (date?: any) => {
    const d = date ? new Date(date) : new Date();
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}T${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }

  const checkDataS = () => {
    if (cpptUgd) {
      const selected = anamnesa.find((item: any) => item.Nama === cpptUgd.Data_S)
      return selected ? selected.Nama : 'Lain-lain';
    }
  }

  const { register, handleSubmit, errors, setValue, watch, formState, reset } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: true,
    resolver: yupResolver(CreateCpptEmergencyRoomNurseRequest.scheme()),
    defaultValues: {
      // data_s: (cpptUgd && cpptUgd.Data_S) ? checkDataS() : doctorPreliminaryStudy?.formRO?.ID_Keluhan === 'Lain-lain' ? 'Lain-lain' : doctorPreliminaryStudy?.formRO?.Keluhan ? doctorPreliminaryStudy?.formRO?.Keluhan : '',
      // data_s_lain_text: (cpptUgd && cpptUgd.Data_S_Lain_Text) ? cpptUgd.Data_S_Lain_Text : (doctorPreliminaryStudy && doctorPreliminaryStudy.formRO && doctorPreliminaryStudy.formRO.Keluhan_Lain) ? doctorPreliminaryStudy.formRO.Keluhan_Lain : '',
      data_s: cpptUgd?.Data_S ?? '',
      data_s_lain_text: cpptUgd?.Data_S_Lain_Text ?? '',
      // data_o: cpptUgd?.Data_O ?? `TOD: ${doctorPreliminaryStudy?.formRO?.OD?.Non_Contact ?? ''} mmHg\nTOS: ${doctorPreliminaryStudy?.formRO?.OS?.Non_Contact ?? ''} mmHg`,
      data_o: cpptUgd?.Data_O ?? '',
      data_a: cpptUgd?.Data_A ?? '',
      data_a_lain_text: cpptUgd?.Data_A_Lain_Text ?? '',
      data_p: cpptUgd?.Data_P ?? 'Kolaborasi dengan Dokter',
      instruksi_ppa: cpptUgd?.Instruksi_PPA ?? '',
      waktu: cpptUgd?.Waktu ?? convertDatetimeToUTC(),
      id_perawat_cppt: cpptUgd?.Id_Perawat_Cppt ?? '',
      ttd_perawat_cppt: cpptUgd?.TTD_Perawat_Cppt ?? '',
      td: cpptUgd?.TD ?? '',
      kgd: cpptUgd?.KGD ?? '',
      // id_dokter_pengkaji: '',
      // ttd_dokter_pengkaji: '',
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

  const handleSubmitForm = (value: ICreateCpptEmergencyRoomNurseRequest) => {
    setSignatureErr({ error: false, message: '' });
    setDataSErr({ error: false, message: '' });
    setDataOErr({ error: false, message: '' });
    setDataAErr({ error: false, message: '' });
    setTimeErr({ error: false, message: '' });
    if (!treatment) {
      return false;
    }
    if ((value.ttd_perawat_cppt === '' || value.data_s === '' || value.data_o === '' || value.data_a === '' || value.waktu === '')) {
      if (value.waktu === '') {
        setTimeErr({ error: true, message: 'Waktu harus diisi' })
      }
      if (value.ttd_perawat_cppt === '') {
        setSignatureErr({ error: true, message: 'Tanda Tangan harus diisi' });
      }
      if (value.data_s === '') {
        setDataSErr({ error: true, message: 'S harus diisi' });
      }
      if (value.data_o === '') {
        setDataOErr({ error: true, message: 'O harus diisi' });
      }
      if (value.data_a === '') {
        setDataAErr({ error: true, message: 'A harus diisi' });
      }
      return;
    }
    setProcessing(true);
    reset(value)
    const appRequest = AppRequest.createFromStore(treatment);
    if (!cpptUgd || (action && action === 'create')) {
      const params = CreateCpptEmergencyRoomNurseRequest.createFromJson({...value, ...appRequest });
      CpptEmergencyRoomService().createNurse(params)
        .then(() => {
          dispatch(handlePdf(undefined));
          dispatch(handlePdfAll(undefined));
          CpptEmergencyRoomService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
            CpptEmergencyRoomService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptEmergencyRoomPdf(FindPdfRequest.createFromJson({
                emr_id: treatment.EMR_ID,
                form_name: 'cppt_v3',
              })))
            }).catch(() => {
              setProcessing(false);
            })
          });
          CpptEmergencyRoomService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
            CpptEmergencyRoomService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptEmergencyRoomDayPdf(FindPdfRequest.createFromJson({
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
      const params = UpdateCpptEmergencyRoomNurseRequest.createFromJson({...value, ...appRequest, ID: cpptUgd.ID, emr_id: cpptUgd.EMR_ID });
      CpptEmergencyRoomService().updateNurse(params)
        .then(() => {
          dispatch(handlePdfAll(undefined));
          if (cpptUgd.EMR_ID === treatment.EMR_ID) {
            dispatch(handlePdf(undefined));
            CpptEmergencyRoomService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
              const { records } = resp.data.data;
              const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
              const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
              CpptEmergencyRoomService().pdfNew(pdfParams).then(() => {
                dispatch(fetchCpptEmergencyRoomDayPdf(FindPdfRequest.createFromJson({
                  emr_id: treatment.EMR_ID,
                  form_name: 'cppt_day_v3',
                })))
              }).catch(() => {
                setProcessing(false);
              })
            });
          }
          CpptEmergencyRoomService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
            CpptEmergencyRoomService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptEmergencyRoomPdf(FindPdfRequest.createFromJson({
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
              dataSErr && dataSErr.error && (
                <p style={{ fontSize: '10pt', marginLeft: '0px' }} className='text-danger'>{dataSErr.message}</p>
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
            {
              dataOErr && dataOErr.error && (
                <p style={{ fontSize: '10pt', marginLeft: '260px' }} className='text-danger'>{dataOErr.message}</p>
              )
            }
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
              dataAErr && dataAErr.error && (
                <p style={{ fontSize: '10pt', marginLeft: '0px' }} className='text-danger'>{dataAErr.message}</p>
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
            initialImage={(cpptUgd) ? cpptUgd.TTD_Perawat_Cppt : undefined}
            additionalLabel={(cpptUgd) ? cpptUgd.Nama_Perawat_Cppt : undefined}
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
            <div className='text-center align-items-center justify-content-center'>
              <p style={{ fontSize: '10pt' }} className='text-danger'>{signatureErr.message}</p>
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

export default CpptEmergencyRoomFormNurse;
