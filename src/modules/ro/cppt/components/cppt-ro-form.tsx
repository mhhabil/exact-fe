import {Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row} from 'reactstrap';
import { CPPTPDFRequest, RootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import { CreateCpptRoRequest, ICreateCpptRoRequest } from '@modules/ro/cppt/requests';
import { Fragment, useEffect, useState } from 'react';
import { IPreliminaryStudyModel, PreliminaryStudyModel } from '@modules/ro/preliminary-study/models/preliminary-study.model';
import { fetchCpptRoDayPdf, fetchCpptRoPdf, handlePdf, handlePdfAll } from '@modules/ro/cppt/stores/cppt-ro.store';
import { AppRequest } from '@shared/request';
import { CpptRoModel } from '../models/cppt-ro.model';
import { CpptRoService } from '@modules/ro/cppt/services';
import { ErrorMessage } from '@hookform/error-message';
import PreliminaryStudyDetail from '@modules/ro/preliminary-study/components/preliminary-study-detail';
import { Signature } from '@shared/signature/components';
import { SignatureModel } from '@shared/signature/models/signature.model';
import { SubmitButton } from '@shared/button';
import { UpdateCpptRoRequest } from '@modules/ro/cppt/requests/update-cppt-ro.request';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useWarnIfUnsavedChanges } from '@src/shared/alert';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { FindPdfRequest } from '@src/shared/pdf';

const aOptions = [
  'Gangguan Penglihatan',
  'Gangguan Rasa Nyaman / Nyeri',
  'Risiko Infeksi',
  'Kurang Pengetahuan',
];

const CpptRoForm = (props: { preliminaryStudy: PreliminaryStudyModel | any, cpptRo?: CpptRoModel, onSuccessSubmit?: any, onCancel?: any, action?: string, dataOJson?: any }) => {

  const { nurses } = useAppSelector(state => state.nurse);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const { preliminaryStudy, cpptRo, onSuccessSubmit, onCancel, action, dataOJson } = props;
  const [processing, setProcessing] = useState(false);
  const { treatment } = useAppSelector(state => state.patient);
  const [signatureErr, setSignatureErr] = useState({ error: false, message: '' });
  const [datasErr, setDatasErr] = useState({ error: false, message: '' });
  const [dataoErr, setDataoErr] = useState({ error: false, message: '' });
  const [dataAErr, setDataAErr] = useState({ error: false, message: '' });
  const [timeErr, setTimeErr] = useState({ error: false, message: '' });
  const [dataO, setDataO] = useState(cpptRo && cpptRo.Cmb_Data_O && cpptRo.Cmb_Data_O === 1 ? '1' : cpptRo && cpptRo.Cmb_Data_O && cpptRo.Cmb_Data_O === 2 ? '2' : '1');
  const [detailDataO, setDetailDataO] = useState((action && action === 'create') ? preliminaryStudy : dataOJson ? dataOJson : undefined);

  const convertDatetimeToUTC = (date?: any) => {
    const d = date ? new Date(date) : new Date();
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}T${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }

  const { register, handleSubmit, errors, setValue, formState, reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(CreateCpptRoRequest.scheme()),
    defaultValues: {
      data_s: preliminaryStudy?.form?.ID_Keluhan === 'Lain-lain' ? preliminaryStudy?.form?.Keluhan_Lain : preliminaryStudy?.form?.Keluhan ? preliminaryStudy?.form?.Keluhan : '',
      data_o: cpptRo?.Data_O ?? '',
      data_a: cpptRo?.Data_A ?? '',
      data_a_text: cpptRo?.Data_A_Text ?? '',
      data_p: cpptRo?.Data_P ?? 'Kolaborasi dengan dokter',
      instruksi_ppa: cpptRo?.Instruksi_PPA ?? '',
      waktu: cpptRo?.Waktu ?? convertDatetimeToUTC(),
      id_perawat_cppt: cpptRo?.Id_Perawat_Cppt ?? '',
      ttd_perawat_cppt: cpptRo?.TTD_Perawat_Cppt ?? '',
      cmb_data_o: (cpptRo && cpptRo.Cmb_Data_O && cpptRo.Cmb_Data_O === 1) ? '1' : cpptRo && cpptRo.Cmb_Data_O && cpptRo.Cmb_Data_O === 2 ? '2' : '1',
      // id_dokter_pengkaji: '',
      // ttd_dokter_pengkaji: '',
    },
  });

  const { isDirty } = formState;

  useWarnIfUnsavedChanges(isDirty, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  const handleOfficerSigned = (image: SignatureModel) => {
    setValue('id_perawat_cppt', image.ID_Karyawan);
    setValue('ttd_perawat_cppt', image.Signature);
  }

  const handleChangeO = (e: any) => {
    setDataO(e.target.value);
    if (e.target.value === '1') {
      setDetailDataO(preliminaryStudy);
    }
  }

  const handleSubmitForm = (value: ICreateCpptRoRequest) => {
    setSignatureErr({ error: false, message: '' });
    setDatasErr({ error: false, message: '' });
    setDataoErr({ error: false, message: '' });
    setDataAErr({ error: false, message: '' });
    setTimeErr({ error: false, message: '' });
    if (!treatment) {
      return;
    }
    if ((value.ttd_perawat_cppt === '' || value.data_s === '' || value.data_o === '' || value.data_a === '' || value.waktu === '')) {
      if (value.waktu === '') {
        document.getElementById('waktu')?.focus()
        setTimeErr({ error: true, message: 'Waktu harus diisi' })
      }
      if (value.ttd_perawat_cppt === '') {
        setSignatureErr({ error: true, message: 'Tanda Tangan harus diisi' });
      }
      if (value.data_s === '') {
        setDatasErr({ error: true, message: 'S harus diisi' });
      }
      if (value.data_o === '' && dataO && dataO === '2') {
        setDataoErr({ error: true, message: 'O harus diisi' });
      }
      if (value.data_a === '') {
        setDataAErr({ error: true, message: 'A harus diisi' });
      }
      alert('Data SOAP tidak lengkap');
      return;
    }
    setProcessing(true);
    reset(value);
    const appRequest = AppRequest.createFromStore(treatment);
    dispatch(handlePdfAll(undefined));
    dispatch(handlePdf(undefined));
    if (!cpptRo || (action && action === 'create')) {
      const params = CreateCpptRoRequest.createFromJson({...value, ...appRequest, data_o_json: preliminaryStudy.form });
      CpptRoService().create(params)
        .then(() => {
          CpptRoService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
            CpptRoService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptRoPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'cppt_v3' })));
            }).catch(() => {
              setProcessing(false);
            })
          });
          CpptRoService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
            CpptRoService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptRoDayPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'cppt_day_v3' })))
            }).catch(() => {
              setProcessing(false);
            })
          })
          if (onSuccessSubmit) {
            onSuccessSubmit();
          }
          // window.location.reload();
        });
    } else {
      const data_o_json = detailDataO.form;
      const params = UpdateCpptRoRequest.createFromJson({...value, ...appRequest, data_o_json, ID: cpptRo.ID, emr_id: cpptRo.EMR_ID });
      CpptRoService().update(params)
        .then(() => {
          if (cpptRo.EMR_ID === treatment.EMR_ID) {
            CpptRoService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
              const { records } = resp.data.data;
              const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
              const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
              CpptRoService().pdfNew(pdfParams).then(() => {
                dispatch(fetchCpptRoDayPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'cppt_day_v3' })))
              }).catch(() => {
                setProcessing(false);
              })
            })
          }
          CpptRoService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
            CpptRoService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptRoPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'cppt_v3' })));
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
              type="textarea"
              id="data_s"
              name="data_s"
              innerRef={register({ required: true })}
              invalid={errors.data_s && true} />
            {
              datasErr && datasErr.error && (
                <p style={{ fontSize: '10pt' }} className='text-danger fw-bold text-start mt-1'>{datasErr.message}</p>
              )
            }
          </Col>
          {errors && errors.data_s && <FormFeedback>{errors.data_s.message}</FormFeedback>}
        </FormGroup>
        <Row>
          <Col md="2">
            O
          </Col>
          <Col md="10">
            <Row className="mb-1">
              <Col md="12">
                <Input
                  type='select'
                  name='cmb_data_o'
                  onChange={(e) => handleChangeO(e)}
                  innerRef={register({ required: true })}
                >
                  <option value='1'>Pemeriksaan Dari Pengkajian Awal</option>
                  <option value='2'>Lain-lain</option>
                </Input>
                {
                  dataO && dataO === '1' && detailDataO && detailDataO.form && (
                    <PreliminaryStudyDetail preliminaryStudy={detailDataO} />
                  )
                }
                {
                  dataO && dataO === '2' && (
                    <Input
                      type='textarea'
                      name='data_o'
                      className='mt-1'
                      innerRef={register({ required: true})}
                      invalid={errors.data_o && true}
                    />
                  )
                }
                {
                  dataO && dataO === '2' && dataoErr && dataoErr.error && (
                    <p style={{ fontSize: '10pt' }} className='fw-bold text-danger text-start mt-1'>{dataoErr.message}</p>
                  )
                }
              </Col>
            </Row>
          </Col>
        </Row>
        <FormGroup className="form-group" row>
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
                <p style={{ fontSize: '10pt' }} className='fw-bold text-danger text-start mt-1'>{dataAErr.message}</p>
              )
            }
          </Col>
          {errors && errors.data_a_text && <FormFeedback>{errors.data_a_text.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">P</Label>
          <Col>
            <Input
              type="text"
              id="data_p"
              name="data_p"
              readOnly
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
            initialImage={(cpptRo && cpptRo.TTD_Perawat_Cppt && cpptRo.TTD_Perawat_Cppt !== '') ? cpptRo.TTD_Perawat_Cppt : undefined}
            additionalLabel={(cpptRo) ? cpptRo.Nama_Perawat_Cppt : undefined}
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
        <div className='align-items-center justify-content-center'>
          {
            signatureErr && signatureErr.error && (
              <p style={{ fontSize: '10pt' }} className='fw-bold text-danger text-center'>{signatureErr.message}</p>
            )
          }
        </div>
        <div className="d-flex mb-0 justify-content-center">
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
        </div>
      </Form>
    </Fragment>
  )
}

export default CpptRoForm;
