import {DailyEducationItemModel} from '@modules/general/daily-education/models/daily-education.model';
import {useAppSelector} from '@hooks/useAppSelector';
import {useRouter} from 'next/router';
import {useAppDispatch} from '@hooks/useAppDispatch';
import {Fragment, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import {SignatureModel} from '@shared/signature/models/signature.model';
import {AppRequest} from '@shared/request';
import {handlePdf} from '@modules/operating-room/cppt/stores/cppt-ok.store';
import {
  CreateDailyEducationRequest,
  ICreateDailyEducationRequest,
} from '@modules/general/daily-education/requests/create-daily-education.request';
import {DailyEducationService} from '@modules/general/daily-education/services';
import {UpdateDailyEducationRequest} from '@modules/general/daily-education/requests/update-daily-education.request';
import {Col, Form, FormFeedback, FormGroup, Input, Label} from 'reactstrap';
import {Signature} from '@shared/signature/components';
import {SubmitButton} from '@shared/button';
import { ErrorMessage } from '@hookform/error-message';
import { PdfDailyEducationRequest } from '@modules/general/daily-education/requests/pdf-daily-education.request';

const DailyEducationForm = (props: { item?: DailyEducationItemModel | undefined, onSuccessSubmit: any, unit: string }) => {

  const { officers } = useAppSelector(state => state.officer);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const { item, onSuccessSubmit, unit } = props;
  const [processing, setProcessing] = useState(false);
  const { treatment } = useAppSelector(state => state.patient);
  const [defaultPattern, setDefaultPattern] = useState<any>();

  const convertDatetimeToUTC = (date?: any) => {
    const d = date ? new Date(date) : new Date();
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}T${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }

  useEffect(() => {
    if (defaultPattern === '1') {
      setValue('uraian', 'General Consent / Persetujuan Umum');
    }
  })

  const { register, handleSubmit, errors, getValues, setValue } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: yupResolver(CreateDailyEducationRequest.scheme()),
    defaultValues: {
      waktu: item?.Waktu ?? convertDatetimeToUTC(),
      nama: item?.Nama ? item?.Nama : treatment ? treatment.Pasien.Nama : '',
      telepon: item?.Telepon ? item?.Telepon : treatment ? treatment.Pasien.No_Telepon : '',
      alamat: item?.Alamat ? item?.Alamat : treatment ? treatment.Pasien.Alamat : '',
      uraian: item?.Uraian ?? '',
      id_pemberi_edukasi: item?.ID_Pemberi_Edukasi ?? '',
      ttd_pemberi_edukasi: item?.TTD_Pemberi_Edukasi ?? '',
      tanda_tangan: item?.Tanda_Tangan ?? '',
      pendengar_radio: (item && item.Pendengar && item.Pendengar === 'Wali') ? '2' : '1',
      // id_dokter_pengkaji: '',
      // ttd_dokter_pengkaji: '',
    },
  });

  const handleOfficerSigned = (image: SignatureModel) => {
    setValue('id_pemberi_edukasi', image.ID_Karyawan);
    setValue('ttd_pemberi_edukasi', image.Signature);
  }

  const handlePatientSigned = (image: string) => {
    setValue('tanda_tangan', image);
  }

  const handleChangeRadioListener = (e: any) => {
    if (e.target.value === '1') {
      setValue('nama', treatment?.Pasien?.Nama);
      setValue('telepon', treatment?.Pasien?.No_Telepon);
      setValue('alamat', treatment?.Pasien?.Alamat);
    } else {
      setValue('nama', treatment?.Wali?.Nama);
      setValue('telepon', treatment?.Wali?.No_Telepon);
      setValue('alamat', treatment?.Wali?.Alamat);
    }
  }

  const handleSubmitForm = (value: ICreateDailyEducationRequest) => {
    if (!treatment) {
      return false;
    }
    setProcessing(true)
    const appRequest = AppRequest.createFromStore(treatment);
    dispatch(handlePdf(undefined));
    if (!item) {
      const params = CreateDailyEducationRequest.createFromJson({...value, ...appRequest, unit });
      DailyEducationService().create(params)
        .then(() => {
          DailyEducationService().show(appRequest)
            .then((resp) => {
              const { data } = resp.data;
              const params = PdfDailyEducationRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id);
              DailyEducationService().pdfv3(params)
                .then(() => {
                  if (onSuccessSubmit) {
                    onSuccessSubmit();
                    return true;
                  }
                });
            });
          if (onSuccessSubmit) {
            onSuccessSubmit();
          }
        });
    } else {
      const params = UpdateDailyEducationRequest.createFromJson({...value, ...appRequest, ID: item.ID, unit, emr_id: item.EMR_ID });
      DailyEducationService().update(params)
        .then(() => {
          DailyEducationService().show(appRequest)
            .then((resp) => {
              const { data } = resp.data;
              const params = PdfDailyEducationRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id);
              DailyEducationService().pdfv3(params)
                .then(() => {
                  if (onSuccessSubmit) {
                    onSuccessSubmit();
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
        <FormGroup className="form-group" row>
          <Label md="2">Pendengar Informasi</Label>
          <Col>
            <Input
              className="mb-1 me-1"
              type="radio"
              id="pendengar_radio_1"
              name="pendengar_radio"
              value="1"
              onChange={(e) => handleChangeRadioListener(e)}
              innerRef={register({ required: true })}
              invalid={errors.pendengar_radio && true}>
            </Input>
            <Label className="me-2">Pasien</Label>
            <Input
              className="mb-1 me-1"
              type="radio"
              id="pendengar_radio_2"
              name="pendengar_radio"
              value="2"
              onChange={(e) => handleChangeRadioListener(e)}
              innerRef={register({ required: true })}
              invalid={errors.pendengar_radio && true}>
            </Input>
            <Label className="me-2">Keluarga / Wali</Label>
          </Col>
          {errors && errors.pendengar_radio && <FormFeedback>{errors.pendengar_radio.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">Nama</Label>
          <Col>
            <Input
              className="mb-1"
              type="text"
              id="nama"
              name="nama"
              innerRef={register({ required: true })}
              invalid={errors.nama && true}>
            </Input>
            <ErrorMessage
              errors={errors}
              name='nama'
              render={({ messages }) => {
                return messages ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                )) : null;
              }}
            />
          </Col>
          {errors && errors.nama && <FormFeedback>{errors.nama.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">Telepon</Label>
          <Col>
            <Input
              type="text"
              id="telepon"
              name="telepon"
              innerRef={register({ required: true })}
              invalid={errors.telepon && true} />
            <ErrorMessage
              errors={errors}
              name='telepon'
              render={({ messages }) => {
                return messages ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                )) : null;
              }}
            />
          </Col>
          {errors && errors.telepon && <FormFeedback>{errors.telepon.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">Alamat</Label>
          <Col>
            <Input
              className="mb-1"
              type="textarea"
              id="alamat"
              name="alamat"
              innerRef={register({ required: true })}
              invalid={errors.alamat && true}>
            </Input>
            <ErrorMessage
              errors={errors}
              name='alamat'
              render={({ messages }) => {
                return messages ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                )) : null;
              }}
            />
          </Col>
          {errors && errors.alamat && <FormFeedback>{errors.alamat.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-group" row>
          <Col>
            <Input
              type="checkbox"
              name="selectAll"
              id="select-all"
              onChange={(e) => {
                if (e.target.checked) {
                  setDefaultPattern('1');
                } else {
                  setDefaultPattern('0');
                }
              }}
              className="me-1"
            />
            <Label>Checklist Default</Label>
          </Col>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">Uraian Penjelasan / Isi Komunikasi</Label>
          <Col>
            <Input
              type="textarea"
              id="uraian"
              name="uraian"
              innerRef={register({ required: true })}
              invalid={errors.uraian && true} />
          </Col>
          {errors && errors.uraian && <FormFeedback>{errors.uraian.message}</FormFeedback>}
        </FormGroup>
        <div className="d-flex justify-content-around my-1">
          <Signature
            label="Pasien/Wali"
            type="drawer"
            formName='informasi/general-consent'
            component='general_consent_sign_01'
            initialImage={(item && item.Tanda_Tangan && item.Tanda_Tangan !== '') ? item.Tanda_Tangan : undefined}
            onSigned={(image: string) => handlePatientSigned(image)} />
          <Input
            type="hidden"
            name="tanda_tangan"
            innerRef={register({ required: true })}
            invalid={errors.tanda_tangan && true} />

          <Signature
            label="Pemberi Edukasi"
            type="picker"
            persons={officers}
            initialImage={(item && item.TTD_Pemberi_Edukasi && item.TTD_Pemberi_Edukasi !== '') ? item.TTD_Pemberi_Edukasi : undefined}
            additionalLabel={(item) ? item.Nama_Pemberi_Edukasi : undefined}
            onSigned={(assigner: SignatureModel) => handleOfficerSigned(assigner)} />
          <Input
            type="hidden"
            name="id_pemberi_edukasi"
            innerRef={register({ required: true })}
            invalid={errors.id_pemberi_edukasi && true} />
          <Input
            type="hidden"
            name="ttd_pemberi_edukasi"
            innerRef={register({ required: true })}
            invalid={errors.ttd_pemberi_edukasi && true} />
        </div>
        <FormGroup className="d-flex mb-0 justify-content-center">
          <SubmitButton
            buttonColor='primary'
            spinnerColor='light'
            processing={processing}
            label="Simpan"
            spinnerStyle={{ width: '1rem', height: '1rem' }}
          />
        </FormGroup>
      </Form>
    </Fragment>
  )
}

export default DailyEducationForm;
