import {Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row} from 'reactstrap';
import { CPPTPDFRequest, RootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import { CreateCpptPharmacyRequest, ICreateCpptPharmacyRequest } from '../requests/create-cppt-pharmacy.request';
import { Fragment, useEffect, useState } from 'react';
import { fetchCpptPharmacyDayPdf, fetchCpptPharmacyPdf, handlePdf, handlePdfAll } from '@modules/pharmacy/cppt/stores/cppt-pharmacy.store';
import { AppRequest } from '@shared/request';
import { CpptPharmacyService } from '../services';
import { CreateCpptRoRequest } from '@modules/ro/cppt/requests';
import { FindPdfRequest } from '@src/shared/pdf';
import { Signature } from '@shared/signature/components';
import { SignatureModel } from '@shared/signature/models/signature.model';
import { SubmitButton } from '@shared/button';
import { UpdateCpptPharmacyRequest } from '../requests/update-cppt-pharmacy.request';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useWarnIfUnsavedChanges } from '@src/shared/alert';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

const CpptFarmasiForm = (props: { data?: any, cpptFarmasi?: any, onSuccessSubmit?: any, onCancel?: any, action?: string }) => {

  const { officers } = useAppSelector(state => state.officer);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const { data, cpptFarmasi, onSuccessSubmit, onCancel, action } = props;
  const [processing, setProcessing] = useState(false);
  const { treatment } = useAppSelector(state => state.patient);
  const [signatureErr, setSignatureErr] = useState({ error: false, message: '' });
  const [datasErr, setDatasErr] = useState({ error: false, message: '' });
  const [dataoErr, setDataoErr] = useState({ error: false, message: '' });
  const [timeErr, setTimeErr] = useState({ error: false, message: '' });
  const [terkaitobat, setTerkaitObat] = useState(!!(cpptFarmasi && cpptFarmasi.Masalah_Obat_Radio && cpptFarmasi.Masalah_Obat_Radio === '2'));
  const [efekObatText, setEfekObatText] = useState(!!(cpptFarmasi && cpptFarmasi.Efek_Samping_Obat_Radio && cpptFarmasi.Efek_Samping_Obat_Radio === '2') || (cpptFarmasi && cpptFarmasi.Efek_Samping_Obat !== ''));
  const [interaksiObatText, setInteraksiObatText] = useState(!!(cpptFarmasi && cpptFarmasi.Interaksi_Obat_Radio && cpptFarmasi.Interaksi_Obat_Radio === '2') || (cpptFarmasi && cpptFarmasi.Interaksi_Obat !== ''));

  const convertDatetimeToUTC = (date?: any) => {
    const d = date ? new Date(date) : new Date();
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}T${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }

  const getEfekSampingObatRadio = () => {
    if (cpptFarmasi) {
      if (cpptFarmasi.Efek_Samping_Obat_Radio && cpptFarmasi.Efek_Samping_Obat_Radio !== '') {
        return cpptFarmasi.Efek_Samping_Obat_Radio;
      } else if (!cpptFarmasi.Efek_Samping_Obat_Radio) {
        if (cpptFarmasi.Efek_Samping_Obat && cpptFarmasi.Efek_Samping_Obat === '') {
          return '1';
        }
        if (cpptFarmasi.Efek_Samping_Obat && cpptFarmasi.Efek_Samping_Obat !== '') {
          return '2';
        }
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  const getInteraksiObatRadio = () => {
    if (cpptFarmasi) {
      if (cpptFarmasi.Interaksi_Obat_Radio && cpptFarmasi.Interaksi_Obat_Radio !== '') {
        return cpptFarmasi.Interaksi_Obat_Radio;
      } else if (!cpptFarmasi.Interaksi_Obat_Radio) {
        if (cpptFarmasi.Interaksi_Obat && cpptFarmasi.Interaksi_Obat === '') {
          return '1';
        }
        if (cpptFarmasi.Interaksi_Obat && cpptFarmasi.Interaksi_Obat !== '') {
          return '2';
        }
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  const { register, handleSubmit, errors, setValue, formState, reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(CreateCpptRoRequest.scheme()),
    defaultValues: {
      data_s: cpptFarmasi?.Data_S ?? '',
      data_o: cpptFarmasi?.Data_O ?? '',
      data_a: cpptFarmasi?.Data_A ?? '',
      data_p: cpptFarmasi?.Data_P ?? '',
      waktu: cpptFarmasi?.Waktu ?? convertDatetimeToUTC(),
      masalah_obat_radio: cpptFarmasi?.Masalah_Obat_Radio ?? '',
      masalah_obat_teks: cpptFarmasi?.Masalah_Obat_Teks ?? '',
      efek_samping_obat_radio: getEfekSampingObatRadio(),
      efek_samping_obat: cpptFarmasi?.Efek_Samping_Obat ?? '',
      interaksi_obat_radio: getInteraksiObatRadio(),
      interaksi_obat: cpptFarmasi?.Interaksi_Obat ?? '',
      monitor_terapi: cpptFarmasi?.Monitor_Terapi ?? '',
      monitor_efek_samping: cpptFarmasi?.Monitor_Efek_Samping ?? '',
      anjuran_dokter: cpptFarmasi?.Anjuran_Dokter ?? '',
      anjuran_perawat: cpptFarmasi?.Anjuran_Perawat ?? '',
      id_perawat_cppt: cpptFarmasi?.Id_Perawat_Cppt ?? '',
      ttd_perawat_cppt: cpptFarmasi?.TTD_Perawat_Cppt ?? '',
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

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleSubmitForm = (value: ICreateCpptPharmacyRequest) => {
    setSignatureErr({ error: false, message: '' });
    setDatasErr({ error: false, message: '' });
    setDataoErr({ error: false, message: '' });
    setTimeErr({ error: false, message: '' });
    if (!treatment) {
      return;
    }
    if ((value.id_perawat_cppt === '' || value.data_s === '' || value.data_o === '' || value.waktu === '')) {
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
      if (value.id_perawat_cppt === '') {
        setSignatureErr({ error: true, message: 'Tanda tangan harus diisi' });
        alert('Data SOAP tidak lengkap');
        return;
      }
    }
    setProcessing(true);
    reset(value)
    const appRequest = AppRequest.createFromStore(treatment);
    if (!cpptFarmasi) {
      const params = CreateCpptPharmacyRequest.createFromJson({...value, ...appRequest});
      CpptPharmacyService().create(params)
        .then(() => {
          dispatch(handlePdfAll(undefined));
          dispatch(handlePdf(undefined));
          CpptPharmacyService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
            CpptPharmacyService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptPharmacyPdf(FindPdfRequest.createFromJson({
                emr_id: treatment.EMR_ID,
                form_name: 'cppt_v3',
              })))
            }).catch(() => {
              setProcessing(false);
            })
          });
          CpptPharmacyService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
            CpptPharmacyService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptPharmacyDayPdf(FindPdfRequest.createFromJson({
                emr_id: treatment.EMR_ID,
                form_name: 'cppt_day_v3',
              })))
            }).catch(() => {
              setProcessing(false);
            })
          })
          if (onSuccessSubmit) {
            onSuccessSubmit();
          }
        });
    } else {
      const params = UpdateCpptPharmacyRequest.createFromJson({...value, ...appRequest, ID: cpptFarmasi.ID, emr_id: cpptFarmasi.EMR_ID, is_form_doctor: true });
      CpptPharmacyService().update(params)
        .then(() => {
          dispatch(handlePdfAll(undefined));
          if (cpptFarmasi.EMR_ID === treatment.EMR_ID) {
            dispatch(handlePdf(undefined));
            CpptPharmacyService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
              const { records } = resp.data.data;
              const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
              const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
              CpptPharmacyService().pdfNew(pdfParams).then(() => {
                dispatch(fetchCpptPharmacyDayPdf(FindPdfRequest.createFromJson({
                  emr_id: treatment.EMR_ID,
                  form_name: 'cppt_day_v3',
                })))
              }).catch(() => {
                setProcessing(false);
              })
            })
          }
          CpptPharmacyService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
            CpptPharmacyService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptPharmacyPdf(FindPdfRequest.createFromJson({
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
              invalid={errors.waktu && true}
            />
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
              invalid={errors.data_s && true}
            />
          </Col>
          {
            datasErr && datasErr.error && (
              <Row>
                <Col md='2'></Col>
                <Col>
                  <p style={{ fontSize: '10pt' }} className='text-danger'>{datasErr.message}</p>
                </Col>
              </Row>
            )
          }
          {errors && errors.data_s && <FormFeedback>{errors.data_s.message}</FormFeedback>}
        </FormGroup>
        <Row>
          <Col md="2">
            <Label md="2">O</Label>
          </Col>
          <Col md="10">
            <Row className="mb-1">
              <Col md="12">
                <Input
                  type="textarea"
                  id="data_o"
                  name="data_o"
                  innerRef={register({ required: true })}
                  invalid={errors.data_s && true}
                />
              </Col>
              {
                dataoErr && dataoErr.error && (
                  <p style={{ fontSize: '10pt' }} className='text-danger'>{dataoErr.message}</p>
                )
              }
            </Row>
          </Col>
        </Row>

        <FormGroup className="form-group" row>
          <Row>
            <Label md="2">A</Label>
            <Col>
              <Label>1. Masalah Terkait Obat</Label>
            </Col>
            <Col md="2"  >
              <Input
                id="masalah_obat_radio_1"
                type="radio"
                name="masalah_obat_radio"
                className="me-1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTerkaitObat(false);
                  }
                  handleRadioChange(e)
                }}
                defaultChecked={cpptFarmasi?.Masalah_Obat_Radio === '1'}
                value="1"
                innerRef={register("masalah_obat_radio") as any}
              />{' '}
              <Label>Tidak</Label>
            </Col>
            <Col>
              <Input
                id="masalah_obat_radio_2"
                type="radio"
                name="masalah_obat_radio"
                className="me-1"
                onChange={(e) => {
                  setTerkaitObat(e.target.checked)
                  handleRadioChange(e);
                }}
                defaultChecked={cpptFarmasi?.Masalah_Obat_Radio === '2'}
                value="2"
                innerRef={register("masalah_obat_radio") as any }
              />{' '}
              <Label>Ya</Label>
            </Col>
          </Row>
          {
            terkaitobat && (
              <>
                <Row className='mt-1'>
                  <Col md="2"></Col>
                  <Col></Col>
                  <Col>
                    <Input
                      md="1"
                      placeholder='Jelaskan...'
                      type="textarea"
                      id="masalah_obat_teks"
                      name="masalah_obat_teks"
                      innerRef={register({ required: true })}
                      invalid={errors.masalah_obat_teks && true}
                    />
                  </Col>
                </Row>
              </>
            )
          }
          <Row>
            <Col md='2'></Col>
            <Col>
              <Label>2. Efek Samping Obat</Label>
            </Col>
            <Col md='2'>
              <Input
                id='efek_samping_obat_radio_1'
                name='efek_samping_obat_radio'
                type='radio'
                className='me-1'
                onChange={(e) => {
                  if (e.target.checked) {
                    setEfekObatText(false);
                  }
                  handleRadioChange(e)
                }}
                defaultChecked={!!(getEfekSampingObatRadio() === '1')}
                value='1'
                innerRef={register("efek_samping_obat_radio") as any}
              />{' '}
              <Label>Tidak</Label>
            </Col>
            <Col>
              <Input
                id='efek_samping_obat_radio'
                name='efek_samping_obat_radio'
                type='radio'
                className='me-1'
                onChange={(e) => {
                  setEfekObatText(e.target.checked)
                  handleRadioChange(e);
                }}
                defaultChecked={!!(getEfekSampingObatRadio() === '2')}
                value='2'
                innerRef={register("efek_samping_obat_radio") as any}
              />{' '}
              <Label>Ya</Label>
            </Col>
          </Row>
          {
            efekObatText && (
              <>
                <Row className='mt-1'>
                  <Col md="2"></Col>
                  <Col></Col>
                  <Col>
                    <Input
                      md="1"
                      placeholder='Jelaskan...'
                      type="textarea"
                      id="efek_samping_obat"
                      name="efek_samping_obat"
                      innerRef={register({ required: true })}
                      invalid={errors.efek_samping_obat && true}
                    />
                  </Col>
                </Row>
              </>
            )
          }
          <Row className='mt-1'>
            <Col md="2"></Col>
            <Col>
              <Label>3. Interaksi Obat</Label>
            </Col>
            <Col md='2'>
              <Input
                id='interaksi_obat_radio_1'
                name='interaksi_obat_radio'
                type='radio'
                className='me-1'
                onChange={(e) => {
                  if (e.target.checked) {
                    setInteraksiObatText(false)
                  }
                  handleRadioChange(e)
                }}
                defaultChecked={!!(getInteraksiObatRadio() === '1')}
                value='1'
                innerRef={register('interaksi_obat_radio')as any}
              />{' '}
              <Label>Tidak</Label>
            </Col>
            <Col>
              <Input
                id='interaksi_obat_radio'
                name='interaksi_obat_radio'
                type='radio'
                className='me-1'
                onChange={(e) => {
                  setInteraksiObatText(e.target.checked)
                  handleRadioChange(e);
                }}
                defaultChecked={!!(getInteraksiObatRadio() === '2')}
                value='2'
                innerRef={register('interaksi_obat_radio')as any}
              />{' '}
              <Label>Ya</Label>
            </Col>
          </Row>
          {
            interaksiObatText && (
              <>
                <Row className='mt-1'>
                  <Col md="2"></Col>
                  <Col></Col>
                  <Col>
                    <Input
                      md="1"
                      type="textarea"
                      id="interaksi_obat"
                      name="interaksi_obat"
                      innerRef={register({ required: true })}
                      invalid={errors.interaksi_obat && true}
                    />
                  </Col>
                </Row>
              </>
            )
          }
        </FormGroup>

        <FormGroup className="form-group" row>
          <Row>
            <Label md="2">P</Label>
            <Col>
              <Label className='mt-2'>1. Monitor Terapi Lanjutan</Label>
            </Col>
            <Col className='mt-1'>
              <Input
                md="1"
                type="textarea"
                id="monitor_terapi"
                name="monitor_terapi"
                innerRef={register({ required: true })}
                invalid={errors.monitor_terapi && true}
              />
            </Col>
          </Row>
          <Row className='mt-1'>
            <Col md="2"></Col>
            <Col>
              <Label>2. Monitor Efek Samping Obat dan Edukasi Interfensi</Label>
            </Col>
            <Col>
              <Input
                md="1"
                type="textarea"
                id="monitor_efek_samping"
                name="monitor_efek_samping"
                innerRef={register({ required: true })}
                invalid={errors.monitor_efek_samping && true}
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">Anjuran Untuk Dokter</Label>
          <Col>
            <Input
              type="textarea"
              id="anjuran_dokter"
              name="anjuran_dokter"
              innerRef={register({ required: true })}
              invalid={errors.anjuran_dokter && true}
            />
          </Col>
          {errors && errors.anjuran_dokter && <FormFeedback>{errors.anjuran_dokter.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">Anjuran Untuk Perawat</Label>
          <Col>
            <Input
              type="textarea"
              id="anjuran_perawat"
              name="anjuran_perawat"
              innerRef={register({ required: true })}
              invalid={errors.anjuran_perawat && true}
            />
          </Col>
          {errors && errors.anjuran_perawat && <FormFeedback>{errors.anjuran_perawat.message}</FormFeedback>}
        </FormGroup>
        <div className="d-flex justify-content-around my-1">
          <Signature
            label="Petugas"
            type="picker"
            persons={officers}
            initialImage={(cpptFarmasi && cpptFarmasi.TTD_Perawat_Cppt && cpptFarmasi.TTD_Perawat_Cppt !== '') ? cpptFarmasi.TTD_Perawat_Cppt : undefined}
            additionalLabel={(cpptFarmasi) ? cpptFarmasi.Nama_Perawat_Cppt : undefined}
            onSigned={(assigner: SignatureModel) => handleOfficerSigned(assigner)} />
          <Input
            type="hidden"
            name="id_perawat_cppt"
            innerRef={register({ required: true })}
            // invalid={errors.id_perawat_cppt && true}
          />
          <Input
            type="hidden"
            name="ttd_perawat_cppt"
            innerRef={register({ required: true })}
            invalid={errors.ttd_perawat_cppt && true}
          />
        </div>
        {
          signatureErr && signatureErr.error && (
            <div className='text-center align-items-center justify-content-center'>
              <p style={{ fontSize: '10pt' }} className='text-danger'>{signatureErr.message}</p>
            </div>
          )
        }
        <div className='align-items-center justify-content-center'>
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

export default CpptFarmasiForm;
