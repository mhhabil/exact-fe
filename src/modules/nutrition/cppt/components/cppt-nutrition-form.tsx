import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, ListGroup, ListGroupItem, Row, Table } from "reactstrap";
import { CPPTPDFRequest, RootPDFRequest } from "@src/shared/request/requests/cppt-pdf.request";
import { CreateCpptNutritionRequest, ICreateCpptNutritionRequest, UpdateCpptNutritionRequest } from "../requests";
import { fetchCpptNutritionPdf, fetchCpptNutritionDayPdf, handlePdf, handlePdfAll } from "../stores/cppt-nutrition.store";
import { AppRequest } from "@src/shared/request";
import { CpptNutritionService } from "../services";
import { CreateCpptRoRequest } from "@src/modules/ro/cppt/requests";
import { FindPdfRequest } from "@src/shared/pdf";
import Image from 'next/image';
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { SubmitButton } from "@src/shared/button";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useForm } from "react-hook-form";
import { Fragment, useState } from "react";
import { useWarnIfUnsavedChanges } from "@src/shared/alert";
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

const CpptNutritionForm = (props: { cpptGizi?: any, onSuccessSubmit?: any, onCancel?: any, action?: any, copy?: boolean }) => {
  const { cpptGizi, onCancel, onSuccessSubmit, action, copy } = props;
  const dispatch = useAppDispatch();
  const [processing, setProcessing] = useState(false);
  const { officers } = useAppSelector(state => state.officer);
  const { treatment } = useAppSelector(state => state.patient);

  const [signatureErr, setSignatureErr] = useState({ error: false, message: '' });
  const [dataAErr, setDataAErr] = useState({ error: false, message: '' });
  const [dataDErr, setDataDErr] = useState({ error: false, message: '' });
  const [dataIErr, setDataIErr] = useState({ error: false, message: '' });
  const [dataMErr, setDataMErr] = useState({ error: false, message: '' });
  const [dataEErr, setDataEErr] = useState({ error: false, message: '' });
  const [timeErr, setTimeErr] = useState({ error: false, message: '' });

  const convertDatetimeToUTC = (date?: any) => {
    const d = date ? new Date(date) : new Date();
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}T${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }

  const { register, handleSubmit, errors, setValue, getValues, control, formState, reset } = useForm({
    mode: 'onChange',
    // resolver: yupResolver(CreateCpptRoRequest.scheme()),
    defaultValues: {
      data_a: cpptGizi?.Data_A ?? '',
      data_d: cpptGizi?.Data_D ?? '',
      data_i: cpptGizi?.Data_I ?? '',
      data_m: cpptGizi?.Data_M ?? '',
      data_e: cpptGizi?.Data_E ?? '',
      instruksi_ppa: cpptGizi?.Instruksi_PPA ?? '',
      waktu: copy ? convertDatetimeToUTC() : cpptGizi && cpptGizi.Waktu ? cpptGizi.Waktu : convertDatetimeToUTC(),
      id_perawat_cppt: cpptGizi?.Id_Perawat_Cppt ?? '',
      ttd_perawat_cppt: cpptGizi?.TTD_Perawat_Cppt ?? '',
    },
  });

  const { isDirty } = formState;

  useWarnIfUnsavedChanges(isDirty, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  const handleNurseSigned = (image: SignatureModel) => {
    setValue('ttd_perawat_cppt', image.Signature);
    setValue('id_perawat_cppt', image.ID_Karyawan);
  }

  const handleSubmitForm = (value: ICreateCpptNutritionRequest) => {
    setSignatureErr({ error: false, message: '' });
    setDataAErr({ error: false, message: '' });
    setDataDErr({ error: false, message: '' });
    setDataIErr({ error: false, message: '' });
    setDataMErr({ error: false, message: '' });
    setDataEErr({ error: false, message: '' });
    setTimeErr({ error: false, message: '' });
    if (!treatment) {
      return;
    }
    if (value.ttd_perawat_cppt === '' || value.data_a === '' || value.data_d === '' || value.data_i === '' || value.data_m === '' || value.data_e === '' || value.waktu === '') {
      if (value.waktu === '') {
        setTimeErr({ error: true, message: 'Waktu harus diisi' })
        document.getElementById('waktu')?.focus()
        return;
      }
      if (value.ttd_perawat_cppt === '') {
        setSignatureErr({ error: true, message: 'Tanda tangan harus diisi' });
        alert('Data ADIME tidak lengkap');
        return;
      }
      if (value.data_a === '') {
        setDataAErr({ error: true, message: 'Data A harus diisi' });
        alert('Data ADIME tidak lengkap');
        return;
      }
      if (value.data_d === '') {
        setDataDErr({ error: true, message: 'Data D harus diisi' });
        alert('Data ADIME tidak lengkap');
        return;
      }
      if (value.data_i === '') {
        setDataIErr({ error: true, message: 'Data I harus diisi' });
        alert('Data ADIME tidak lengkap');
        return;
      }
      if (value.data_m === '') {
        setDataMErr({ error: true, message: 'Data M harus diisi' });
        alert('Data ADIME tidak lengkap');
        return;
      }
      if (value.data_e === '') {
        setDataEErr({ error: true, message: 'Data E harus diisi' });
        alert('Data ADIME tidak lengkap');
        return;
      }
    }
    setProcessing(true);
    reset(value);
    const appRequest = AppRequest.createFromStore(treatment);
    dispatch(handlePdfAll(undefined));
    dispatch(handlePdf(undefined));
    if (!cpptGizi || (action && action === 'create')) {
      const params = CreateCpptNutritionRequest.createFromJson({ ...value, ...appRequest });
      CpptNutritionService().create(params)
        .then(() => {
          CpptNutritionService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
            CpptNutritionService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptNutritionPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'cppt_v3' })));
            }).catch(() => {
              setProcessing(false);
            })
          });
          CpptNutritionService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
            CpptNutritionService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptNutritionDayPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'cppt_day_v3' })))
            }).catch(() => {
              setProcessing(false);
            })
          })
          if (onSuccessSubmit) {
            onSuccessSubmit();
          }
        });
    } else {
      const params = UpdateCpptNutritionRequest.createFromJson({...value, ...appRequest, ID: cpptGizi.ID, emr_id: cpptGizi.EMR_ID });
      CpptNutritionService().update(params)
        .then(() => {
          dispatch(handlePdfAll(undefined));
          if (cpptGizi.EMR_ID === treatment.EMR_ID) {
            dispatch(handlePdf(undefined));
            CpptNutritionService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
              const { records } = resp.data.data;
              const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
              const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
              CpptNutritionService().pdfNew(pdfParams).then(() => {
                dispatch(fetchCpptNutritionDayPdf(FindPdfRequest.createFromJson({
                  emr_id: treatment.EMR_ID,
                  form_name: 'cppt_day_v3',
                })))
              }).catch(() => {
                setProcessing(false);
              })
            });
          }
          CpptNutritionService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
            CpptNutritionService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptNutritionPdf(FindPdfRequest.createFromJson({
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
          <Label md="2">A</Label>
          <Col>
            <Input
              type="textarea"
              id="data_a"
              name="data_a"
              innerRef={register({ required: true })}
              invalid={errors.data_a && true} />
            <Row>
              <div>
                {
                  dataAErr && dataAErr.error && (
                    <p style={{ fontSize: '10pt' }} className='text-danger fw-bold text-start mt-1'>{dataAErr.message}</p>
                  )
                }
              </div>
            </Row>
          </Col>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">D</Label>
          <Col>
            <Input
              type="textarea"
              id="data_d"
              name="data_d"
              innerRef={register({ required: true })}
              invalid={errors.data_d && true} />
            <Row>
              <div>
                {
                  dataDErr && dataDErr.error && (
                    <p style={{ fontSize: '10pt' }} className='text-danger fw-bold text-start mt-1'>{dataDErr.message}</p>
                  )
                }
              </div>
            </Row>
          </Col>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">I</Label>
          <Col>
            <Input
              type="textarea"
              id="data_i"
              name="data_i"
              innerRef={register({ required: true })}
              invalid={errors.data_i && true} />
            <Row>
              <div>
                {
                  dataIErr && dataIErr.error && (
                    <p style={{ fontSize: '10pt' }} className='text-danger fw-bold text-start mt-1'>{dataIErr.message}</p>
                  )
                }
              </div>
            </Row>
          </Col>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">M</Label>
          <Col>
            <Input
              type="textarea"
              id="data_m"
              name="data_m"
              innerRef={register({ required: true })}
              invalid={errors.data_m && true} />
            <Row>
              <div>
                {
                  dataMErr && dataMErr.error && (
                    <p style={{ fontSize: '10pt' }} className='text-danger fw-bold text-start mt-1'>{dataMErr.message}</p>
                  )
                }
              </div>
            </Row>
          </Col>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">E</Label>
          <Col>
            <Input
              type="textarea"
              id="data_e"
              name="data_e"
              innerRef={register({ required: true })}
              invalid={errors.data_e && true} />
            <Row>
              <div>
                {
                  dataEErr && dataEErr.error && (
                    <p style={{ fontSize: '10pt' }} className='text-danger fw-bold text-start mt-1'>{dataEErr.message}</p>
                  )
                }
              </div>
            </Row>
          </Col>
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
            label="Dietisien"
            type="picker"
            persons={officers}
            initialImage={(cpptGizi && cpptGizi.TTD_Perawat_Cppt && cpptGizi.TTD_Dokter_Pengkaji !== '') ? cpptGizi.TTD_Perawat_Cppt : undefined}
            additionalLabel={(cpptGizi) ? cpptGizi.Nama_Perawat_Cppt : undefined}
            onSigned={(assigner: SignatureModel) => {
              handleNurseSigned(assigner);
            }} />
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
            <p style={{ fontSize: '10pt' }} className='text-danger fw-bold text-center'>{signatureErr.message}</p>
          )
        }
        <FormGroup className="d-flex me-1 mb-0 justify-content-center">
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

export default CpptNutritionForm;
