
import {PainMonitoringItemModel} from '@modules/inpatient/pain-monitoring/models/pain-monitoring.model';
import {useAppSelector} from '@hooks/useAppSelector';
import {useRouter} from 'next/router';
import {useAppDispatch} from '@hooks/useAppDispatch';
import Image from 'next/image';
import {Fragment, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import {SignatureModel} from '@shared/signature/models/signature.model';
import {AppRequest} from '@shared/request';
import {
  fetchPainMonitoring,
  fetchPainMonitoringItem,
  fetchPainMonitoringPdf,
  handlePainMonitoringItem,
  handlePdf,
} from '@modules/inpatient/pain-monitoring/stores/pain-monitoring.store';
import { FindPdfRequest } from '@shared/pdf';
import {
  CreatePainMonitoringRequest,
  ICreatePainMonitoringRequest,
} from '@modules/inpatient/pain-monitoring/requests/create-pain-monitoring.request';
import {PainMonitoringService} from '@modules/inpatient/pain-monitoring/services';
import {UpdatePainMonitoringRequest} from '@modules/inpatient/pain-monitoring/requests/update-pain-monitoring.request';
import {Col, Form, FormFeedback, FormGroup, Input, Label} from 'reactstrap';
import {Signature} from '@shared/signature/components';
import {SubmitButton} from '@shared/button';
import { ErrorMessage } from '@hookform/error-message';
import { PdfPainMonitoringRequest } from '@modules/inpatient/pain-monitoring/requests/pdf-pain-monitoring.request';
import dataLokasi from '../const/dataLokasi';
import dataTindakan from '../const/dataTindakan';
import { DateTimeConverter } from '@src/shared/datetime-converter';


const PainMonitoringForm = (props: { item?: PainMonitoringItemModel | undefined, onSuccessSubmit: any, unit: string }) => {

  const { officers } = useAppSelector(state => state.officer);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const { nurses } = useAppSelector(state => state.nurse);
  const { item, onSuccessSubmit, unit } = props;
  const [processing, setProcessing] = useState(false);
  const { treatment } = useAppSelector(state => state.patient);
  const getLokasi = (lokasi: string) => {
    if (dataLokasi && lokasi) {
      const selectedLokasi = dataLokasi.find((val: any) => val.id === lokasi)
      if (selectedLokasi) {
        return selectedLokasi.id;
      }
    } else {
      return '';
    }
  }
  const getTindakan = (tindakan: string) => {
    if (dataTindakan && tindakan) {
      const selectedTindakan = dataTindakan.find((val: any) => val.id === tindakan)
      if (selectedTindakan) {
        return selectedTindakan.id;
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
    resolver: yupResolver(CreatePainMonitoringRequest.scheme()),
    defaultValues: {
      waktu_monitor: item?.Waktu_Monitor ?? convertDatetimeToUTC(),
      temperatur  : item?.Temperatur ?? '',
      nadi : item?.Nadi ?? '',
      rr : item?.RR ?? '',
      tekanan_darah : item?.Tekanan_Darah ?? '',
      skala_nyeri : item?.Skala_Nyeri ?? '',
      lokasi_nyeri : item?.Lokasi_Nyeri ?? '',
      tindakan : item?.Tindakan  ?? '',
      ttd_perawat : item?.TTD_Perawat  ?? '',
      id_perawat : item?.ID_Perawat  ?? '',
    },
  });

  const handleTandaTangan = (image: SignatureModel) => {
    setValue("ttd_perawat", image.Signature);
    setValue("id_perawat", image.ID_Karyawan);
  };


  const handleSubmitForm = (value: ICreatePainMonitoringRequest) => {
    if (!treatment) {
      return false;
    }
    setProcessing(true)
    const appRequest = AppRequest.createFromStore(treatment);
    dispatch(handlePdf(undefined));
    if (!item) {
      const params = CreatePainMonitoringRequest.createFromJson({...value, ...appRequest, unit });
      PainMonitoringService().create(params)
        .then(() => {
          PainMonitoringService().show(appRequest)
            .then((resp) => {
              const { data } = resp.data;
              const params = PdfPainMonitoringRequest.createPdfRequest(data, appRequest.emr_id);
              PainMonitoringService().pdfv3(params)
                .then(() => {
                  if (onSuccessSubmit) {
                    onSuccessSubmit();
                    dispatch(fetchPainMonitoringPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_formulir-monitoring-nyeri' })));
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
      const params = UpdatePainMonitoringRequest.createFromJson({...value, ...appRequest, ID: item.ID, unit, emr_id: appRequest.emr_id });
      PainMonitoringService().update(params)
        .then(() => {
          PainMonitoringService().show(appRequest)
            .then((resp) => {
              const { data } = resp.data;
              const params = PdfPainMonitoringRequest.createPdfRequest(data, appRequest.emr_id);
              PainMonitoringService().pdfv3(params)
                .then(() => {
                  if (onSuccessSubmit) {
                    onSuccessSubmit();
                    dispatch(fetchPainMonitoringPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_formulir-monitoring-nyeri' })));
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
        <FormGroup className="form-group" row>
          <Label md="2">Waktu Monitor</Label>
          <Col>
            <Input
              type="datetime-local"
              id="waktu_monitor"
              name="waktu_monitor"
              innerRef={register({ required: true })}
              invalid={errors.waktu_monitor && true} />
          </Col>
          <Col>
            <Label></Label>
          </Col>
          {errors && errors.waktu_monitor && <FormFeedback>{errors.waktu_monitor.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">Tekanan Darah</Label>
          <Col>
            <Input
              style={{ marginTop: '20px' }}
              className="mb-1"
              type="text"
              id="tekanan_darah"
              name="tekanan_darah"
              innerRef={register({ required: true })}
              invalid={errors.tekanan_darah && true}
            >
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
            <Label style={{ marginTop: '20px' }}>mmHg</Label>
          </Col>
          {errors && errors.tekanan_darah && <FormFeedback>{errors.tekanan_darah.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label for="Lama" md="2" sm="12">
                Nadi
          </Label>
          <Col>
            <NumberInput
              label=''
              placeholder='0'
              step='1'
              name='nadi'
              {...{ register, errors }}
            />
          </Col>
          <Col>
            <Label style={{ marginTop: '20px' }}>x/menit</Label>
          </Col>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label for="temperatur" md="2" sm="12">
                Suhu
          </Label>
          <Col>
            <NumberInput
              label=''
              placeholder='0'
              step='1'
              name='temperatur'
              {...{ register, errors }}
            />
          </Col>
          <Col>
            <Label style={{ marginTop: '20px' }}>°C</Label>
          </Col>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label for="Rr" md="2" sm="12">
                Rr
          </Label>
          <Col>
            <NumberInput
              label=''
              placeholder='0'
              step='1'
              name='rr'
              {...{ register, errors }}
            />
          </Col>
          <Col>
            <Label style={{ marginTop: '20px' }}>x/menit</Label>
          </Col>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label for="skala_nyeri" md="2" sm="12">
                Skor Nyeri
          </Label>
          <Col>
            <NumberInput
              label=''
              placeholder='0'
              step='1'
              name='skala_nyeri'
              {...{ register, errors }}
            />
          </Col>
          <Col>
            <Label style={{ marginTop: '20px' }}></Label>
          </Col>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">Lokasi</Label>
          <Col>
            <Input
              style={{ marginTop: '20px' }}
              type="select"
              id= "lokasi_nyeri"
              name= "lokasi_nyeri"
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
          <Label md="2">Tindakan</Label>
          <Col>
            <Input
              style={{ marginTop: '20px' }}
              type="select"
              id= "tindakan"
              name= "tindakan"
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
            {/* <Label>{(item && item.Updated_At) ? item.Updated_At : ''}</Label> */}
            <Label>{ `${DateTimeConverter.convertToDateTimeSecond(item?.Updated_At)}` }</Label>
          </div>
        </FormGroup>
      </Form>
    </Fragment>
  )
}

export default PainMonitoringForm;

