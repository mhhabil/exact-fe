import {AssessmentVitalSignsItemModel} from '@modules/inpatient/assessment-vital-signs/models/assessment-vital-signs.model';
import {useAppSelector} from '@hooks/useAppSelector';
import {useRouter} from 'next/router';
import {useAppDispatch} from '@hooks/useAppDispatch';
import Image from 'next/image';
import {Fragment, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import {SignatureModel} from '@shared/signature/models/signature.model';
import {AppRequest} from '@shared/request';
import {
  fetchAssessmentVitalSignsPdf,
  handlePdf,
} from '@modules/inpatient/assessment-vital-signs/stores/assessment-vital-signs.store';
import { FindPdfRequest } from '@shared/pdf';
import {
  CreateAssessmentVitalSignsRequest,
  ICreateAssessmentVitalSignsRequest,
} from '@modules/inpatient/assessment-vital-signs/requests/create-assessment-vital-signs.request';
import {AssessmentVitalSignsService} from '@modules/inpatient/assessment-vital-signs/services';
import {UpdateAssessmentVitalSignsRequest} from '@modules/inpatient/assessment-vital-signs/requests/update-assessment-vital-signs.request';
import {Col, Form, FormFeedback, FormGroup, Input, Label} from 'reactstrap';
import {Signature} from '@shared/signature/components';
import {SubmitButton} from '@shared/button';
import { ErrorMessage } from '@hookform/error-message';
import {
  PdfAssessmentVitalSignsRequest,
} from '@modules/inpatient/assessment-vital-signs/requests/pdf-assessment-vital-signs.request';
import dataLokasi from '../const/dataLokasi';
import dataKualitas from '../const/dataKualitas';
import dataTindakan from '../const/dataTindakan';
import dataFrekuensi from '../const/dataFrekuensi';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const AssessmentVitalSignsForm = (props: { item?: AssessmentVitalSignsItemModel | undefined, onSuccessSubmit: any, unit: string }) => {

  const { officers } = useAppSelector(state => state.officer);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const { item, onSuccessSubmit, unit } = props;
  const [processing, setProcessing] = useState(false);
  const { treatment } = useAppSelector(state => state.patient);
  const { nurses } = useAppSelector(state => state.nurse);

  const handleTandaTangan = (image: SignatureModel) => {
    setValue("ttd_perawat", image.Signature);
    setValue("id_perawat", image.ID_Karyawan);
  };

  const handleDefault = (isFlag: any) => {
    if (isFlag === '0') {
      setValue('suhu', '36.0');
      setValue('nadi', '80');
      setValue('pernafasan', '120');
      setValue('tekanan_darah', '120/80');
      setValue('skala_nyeri', '0');
    }
  }


  const getLokasi = (lokasi: string) => {
    if (dataLokasi && lokasi) {
      const selectedLokasi = dataLokasi.find((val: any) => val.nama === lokasi)
      if (selectedLokasi) {
        return selectedLokasi.id;
      }
    } else {
      return '';
    }
  }
  const getTindakan = (tindakan: string) => {
    if (dataTindakan && tindakan) {
      const selectedTindakan = dataTindakan.find((val: any) => val.nama === tindakan)
      if (selectedTindakan) {
        return selectedTindakan.id;
      }
    } else {
      return '';
    }
  }
  const getKualitas = (kualitas: string) => {
    if (dataKualitas && kualitas) {
      const selectedKualitas = dataKualitas.find((val: any) => val.nama === kualitas)
      if (selectedKualitas) {
        return selectedKualitas.id;
      }
    } else {
      return '';
    }
  }
  const getFrekuensi = (frekuensi: string) => {
    if (dataFrekuensi && frekuensi) {
      const selectedFrekuensi = dataFrekuensi.find((val: any) => val.nama === frekuensi)
      if (selectedFrekuensi) {
        return selectedFrekuensi.id;
      }
    } else {
      return '';
    }
  }

  const convertDatetimeToUTC = (date?: any) => {
    const d = date ? new Date(date) : new Date();
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}T${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }

  const { register, handleSubmit, errors, getValues, setValue } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: yupResolver(CreateAssessmentVitalSignsRequest.scheme()),
    defaultValues: {
      waktu_asesmen: item?.Waktu_Asesmen ?? convertDatetimeToUTC(),
      suhu : item?.Suhu ?? '',
      nadi : item?.Nadi ?? '',
      pernafasan : item?.Pernafasan ?? '',
      tekanan_darah : item?.Tekanan_Darah ?? '',
      oxygen_saturation : item?.Oxygen_Saturation ?? '',
      th : item?.Th ?? '',
      skala_nyeri : item?.Skala_Nyeri ?? '',
      lokasi_id : item?.Lokasi_Id ?? '',
      kualitas_id : item?.Kualitas_Id  ?? '',
      frekuensi_id : item?.Frekuensi_Id  ?? '',
      tindakan_id : item?.Tindakan_Id  ?? '',
      ttd_perawat : item?.TTD_Perawat  ?? '',
      id_perawat : item?.ID_Perawat  ?? '',
    },
  });

  const handleSubmitForm = (value: ICreateAssessmentVitalSignsRequest) => {
    if (!treatment) {
      return false;
    }
    setProcessing(true)
    const appRequest = AppRequest.createFromStore(treatment);
    dispatch(handlePdf(undefined));
    if (!item) {
      const params = CreateAssessmentVitalSignsRequest.createFromJson({...value, ...appRequest, unit });
      AssessmentVitalSignsService().create(params)
        .then(() => {
          AssessmentVitalSignsService().show(appRequest)
            .then((resp) => {
              const { data } = resp.data;
              const params = PdfAssessmentVitalSignsRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id);
              AssessmentVitalSignsService().pdfv3(params)
                .then(() => {
                  if (onSuccessSubmit) {
                    onSuccessSubmit();
                    dispatch(fetchAssessmentVitalSignsPdf(FindPdfRequest.createFromJson({ emr_id: appRequest.emr_id, form_name: 'rawat-inap_asesmen-ulang-tanda-vital' })));
                    setProcessing(false);
                    return true;
                  }
                });
            });
          if (onSuccessSubmit) {
            onSuccessSubmit();
          }
        });
    } else {
      const params = UpdateAssessmentVitalSignsRequest.createFromJson({...value, ...appRequest, ID: item.ID, unit, emr_id: appRequest.emr_id });
      AssessmentVitalSignsService().update(params)
        .then(() => {
          AssessmentVitalSignsService().show(appRequest)
            .then((resp) => {
              const { data } = resp.data;
              const params = PdfAssessmentVitalSignsRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id);
              AssessmentVitalSignsService().pdfv3(params)
                .then(() => {
                  if (onSuccessSubmit) {
                    onSuccessSubmit();
                    dispatch(fetchAssessmentVitalSignsPdf(FindPdfRequest.createFromJson({ emr_id: appRequest.emr_id, form_name: 'rawat-inap_asesmen-ulang-tanda-vital' })));
                    setProcessing(false);
                    return true;
                  }
                });
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
        <hr style={{ borderTop: "2px dashed black" }} />

        <FormGroup className="form-group" row>
          <Label md="2">Waktu Assesment</Label>
          <Col>
            <Input
              type="datetime-local"
              id="waktu_asesmen"
              name="waktu_asesmen"
              innerRef={register({ required: true })}
              invalid={errors.waktu_asesmen && true} />
          </Col>
          <Col>
            <Label></Label>
          </Col>
          {errors && errors.waktu_asesmen && <FormFeedback>{errors.waktu_asesmen.message}</FormFeedback>}
        </FormGroup>
        <h4>Asesmen Tanda - Tanda Vital</h4>
        <hr style={{ borderTop: "2px dashed black" }} />
        <Col>
          <Input
            type="checkbox"
            className="me-1"
            onChange={(e) => {
              if (e.target.checked) {
                handleDefault('0');
              } else {
                handleDefault('1');
              }
            }}
          />
          <label>Pilih Default</label>
        </Col>

        <Col>
          <hr style={{ borderTop: '2px dashed blue' }}/>
        </Col>
        <FormGroup className="form-group" row>
          <Label md="2">T</Label>
          <Col>
            <Input
              type="text"
              id="suhu"
              name="suhu"
              innerRef={register({ required: true })}
              invalid={errors.suhu && true}>
            </Input>
            <ErrorMessage
              errors={errors}
              name='suhu'
              render={({ messages }) => {
                return messages ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                )) : null;
              }}
            />
          </Col>
          <Col>
            <Label>°C</Label>
          </Col>
          {errors && errors.suhu && <FormFeedback>{errors.suhu.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">HR</Label>
          <Col>
            <Input
              className="mb-1"
              type="text"
              id="nadi"
              name="nadi"
              innerRef={register({ required: true })}
              invalid={errors.nadi && true}>
            </Input>
            <ErrorMessage
              errors={errors}
              name='nadi'
              render={({ messages }) => {
                return messages ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                )) : null;
              }}
            />
          </Col>
          <Col>
            <Label>x/menit</Label>
          </Col>
          {errors && errors.nadi && <FormFeedback>{errors.nadi.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">Pernafasan</Label>
          <Col>
            <Input
              className="mb-1"
              type="text"
              id="pernafasan"
              name="pernafasan"
              innerRef={register({ required: true })}
              invalid={errors.nadi && true}>
            </Input>
            <ErrorMessage
              errors={errors}
              name='pernafasan'
              render={({ messages }) => {
                return messages ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                )) : null;
              }}
            />
          </Col>
          <Col>
            <Label>x/menit</Label>
          </Col>
          {errors && errors.pernafasan && <FormFeedback>{errors.pernafasan.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">TD</Label>
          <Col>
            <Input
              className="mb-1"
              type="text"
              id="tekanan_darah"
              name="tekanan_darah"
              innerRef={register({ required: true })}
              invalid={errors.tekanan_darah && true}>
            </Input>
            <ErrorMessage
              errors={errors}
              name='tekanan_darah'
              render={({ messages }) => {
                return messages ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                )) : null;
              }}
            />
          </Col>
          <Col>
            <Label>mmHg</Label>
          </Col>
          {errors && errors.tekanan_darah && <FormFeedback>{errors.tekanan_darah.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">O2Sat</Label>
          <Col>
            <Input
              className="mb-1"
              type="text"
              id="oxygen_saturation"
              name="oxygen_saturation"
              innerRef={register({ required: true })}
              invalid={errors.oxygen_saturation && true}>
            </Input>
            <ErrorMessage
              errors={errors}
              name='oxygen_saturation'
              render={({ messages }) => {
                return messages ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                )) : null;
              }}
            />
          </Col>
          <Col>
            <Label>%</Label>
          </Col>
          {errors && errors.oxygen_saturation && <FormFeedback>{errors.oxygen_saturation.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">Th / O2</Label>
          <Col>
            <Input
              className="mb-1"
              type="text"
              id="th"
              name="th"
              innerRef={register({ required: true })}
              invalid={errors.th && true}>
            </Input>
            <ErrorMessage
              errors={errors}
              name='th'
              render={({ messages }) => {
                return messages ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                )) : null;
              }}
            />
          </Col>
          <Col>
            <Label>liter/menit</Label>
          </Col>
          {errors && errors.th && <FormFeedback>{errors.th.message}</FormFeedback>}
        </FormGroup>
        <h4>Asesmen Nyeri</h4>
        <hr style={{ borderTop: "2px dashed black" }} />
        <FormGroup className="form-group" row>
          <Label md="2">Skala Nyeri</Label>
          <Col md='10' className='align-items-center justify-content-center text-center'>
            <div className='d-flex'>
              <div>
                <Input
                  id="skala_nyeri-1"
                  type="radio"
                  style={{marginLeft:'15px'}}
                  className="me-1"
                  name="skala_nyeri"
                  value='0'
                  defaultChecked={item && item.Skala_Nyeri === '0'}
                  innerRef={register({ required: true })}
                />
                <Label>0</Label>
              </div>
              <div>
                <Input
                  id="skala_nyeri-1"
                  type="radio"
                  style={{marginLeft:'15px'}}
                  className="me-1"
                  name="skala_nyeri"
                  value='1'
                  defaultChecked={item && item.Skala_Nyeri === '1'}
                  innerRef={register({ required: true })}
                />
                <Label>1</Label>
              </div>
              <div>
                <Input
                  id="skala_nyeri-2"
                  type="radio"
                  style={{marginLeft:'15px'}}
                  className="me-1"
                  name="skala_nyeri"
                  value='2'
                  defaultChecked={item && item.Skala_Nyeri === '2'}
                  innerRef={register({ required: true })}
                />
                <Label>2</Label>
              </div>
              <div>
                <Input
                  id="skala_nyeri-3"
                  type="radio"
                  style={{marginLeft:'15px'}}
                  className="me-1"
                  name="skala_nyeri"
                  value='3'
                  defaultChecked={item && item.Skala_Nyeri === '3'}
                  innerRef={register({ required: true })}
                />
                <Label>3</Label>
              </div>
              <div>
                <Input
                  id="skala_nyeri-4"
                  type="radio"
                  style={{marginLeft:'15px'}}
                  className="me-1"
                  name="skala_nyeri"
                  value='4'
                  defaultChecked={item && item.Skala_Nyeri === '4'}
                  innerRef={register({ required: true })}
                />
                <Label>4</Label>
              </div>
              <div>
                <Input
                  id="skala_nyeri-5"
                  type="radio"
                  style={{marginLeft:'15px'}}
                  className="me-1"
                  name="skala_nyeri"
                  value='5'
                  defaultChecked={item && item.Skala_Nyeri === '5'}
                  innerRef={register({ required: true })}
                />
                <Label>5</Label>
              </div>
              <div>
                <Input
                  id="skala_nyeri-6"
                  type="radio"
                  style={{marginLeft:'15px'}}
                  className="me-1"
                  name="skala_nyeri"
                  value='6'
                  defaultChecked={item && item.Skala_Nyeri === '6'}
                  innerRef={register({ required: true })}
                />
                <Label>6</Label>
              </div>
              <div>
                <Input
                  id="skala_nyeri-7"
                  type="radio"
                  style={{marginLeft:'15px'}}
                  className="me-1"
                  name="skala_nyeri"
                  value='7'
                  defaultChecked={item && item.Skala_Nyeri === '7'}
                  innerRef={register({ required: true })}
                />
                <Label>7</Label>
              </div>
              <div>
                <Input
                  id="skala_nyeri-8"
                  type="radio"
                  style={{marginLeft:'25px'}}
                  className="me-1"
                  name="skala_nyeri"
                  value='8'
                  defaultChecked={item && item.Skala_Nyeri === '8'}
                  innerRef={register({ required: true })}
                />
                <Label>8</Label>
              </div>
              <div>
                <Input
                  id="skala_nyeri-9"
                  type="radio"
                  style={{marginLeft:'15px'}}
                  className="me-1"
                  name="skala_nyeri"
                  value='9'
                  defaultChecked={item && item.Skala_Nyeri === '9'}
                  innerRef={register({ required: true })}
                />
                <Label>9</Label>
              </div>
              <div>
                <Input
                  id="skala_nyeri-10"
                  type="radio"
                  style={{marginLeft:'15px'}}
                  className="me-1"
                  name="skala_nyeri"
                  value='10'
                  defaultChecked={item && item.Skala_Nyeri === '10'}
                  innerRef={register({ required: true })}
                />
                <Label>10</Label>
              </div>
            </div>
          </Col>
          <Col>
            <Image
              src='/assets/default/skala-nyeri.png'
              width='1150rem'
              height='150rem'
              objectFit='contain'
            />
          </Col>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">Lokasi</Label>
          <Col>
            <Input
              type="select"
              id= "lokasi_id"
              name= "lokasi_id"
              innerRef={register()}
              onChange={(e) => {
                if (e.target.value !== '') {
                  getLokasi(e.target.value)
                }
              }}
            >
              <option value="" disabled={false}>Pilih...</option>
              {
                dataLokasi.map((item: any, key: number) => {
                  return <option value={item.id} key={key}>{ item.nama }</option>;
                })
              }
            </Input>
          </Col>
          <Col>
            <Label></Label>
          </Col>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">Kualitas</Label>
          <Col>
            <Input
              type="select"
              id= "kualitas_id"
              name= "kualitas_id"
              innerRef={register()}
              onChange={(e) => {
                if (e.target.value !== '') {
                  getKualitas(e.target.value)
                }
              }}
            >
              <option value="" disabled={false}>Pilih...</option>
              {
                dataKualitas.map((item: any, key: number) => {
                  return <option value={item.id} key={key}>{ item.nama }</option>;
                })
              }
            </Input>
          </Col>
          <Col>
            <Label></Label>
          </Col>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">Frekuensi</Label>
          <Col>
            <Input
              type="select"
              id= "frekuensi_id"
              name= "frekuensi_id"
              innerRef={register()}
              onChange={(e) => {
                if (e.target.value !== '') {
                  getFrekuensi(e.target.value)
                }
              }}
            >
              <option value="" disabled={false}>Pilih...</option>
              {
                dataFrekuensi.map((item: any, key: number) => {
                  return <option value={item.id} key={key}>{ item.nama }</option>;
                })
              }
            </Input>
          </Col>
          <Col>
            <Label></Label>
          </Col>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">Tindakan</Label>
          <Col>
            <Input
              type="select"
              id= "tindakan_id"
              name= "tindakan_id"
              innerRef={register()}
              onChange={(e) => {
                if (e.target.value !== '') {
                  getTindakan(e.target.value)
                }
              }}
            >
              <option value="" disabled={false}>Pilih...</option>
              {
                dataTindakan.map((item: any, key: number) => {
                  return <option value={item.id} key={key}>{ item.nama }</option>;
                })
              }
            </Input>
          </Col>
          <Col>
            <Label></Label>
          </Col>
        </FormGroup>
        <FormGroup style={{ marginTop: '20px' }} className="d-flex mb-0 justify-content-center">
          <Signature
            label="Perawat "
            type="picker"
            additionalLabel={ item && item.Nama_Perawat ? item.Nama_Perawat : ""}
            initialImage={item && item.TTD_Perawat && item.TTD_Perawat !== "" ? item.TTD_Perawat : undefined}
            persons={nurses}
            onSigned={(assigner: SignatureModel) => handleTandaTangan(assigner)}
          />
          <Input
            type="hidden"
            name="ttd_perawat"
            innerRef={register({ required: true })}
            invalid={errors["ttd_perawat"] && true}
          />
          <Input
            type="hidden"
            name="id_perawat"
            innerRef={register({ required: true })}
            invalid={errors["id_perawat"] && true}
          />
        </FormGroup>
        <FormGroup className="d-flex mb-0 justify-content-center">
          <SubmitButton
            buttonColor='primary'
            spinnerColor='light'
            processing={processing}
            label="Simpan"
            spinnerStyle={{ width: '1rem', height: '1rem' }}
          />
        </FormGroup>
        <FormGroup className='form-group mt-0' row>
          <div className='d-flex justify-content-center align-items-center'>
            <Label className='me-1'>Terakhir Disimpan: </Label>
            { `${DateTimeConverter.convertToDateTimeSecond(item?.Updated_At)}` }
          </div>
        </FormGroup>
      </Form>
    </Fragment>
  )
}

export default AssessmentVitalSignsForm;
