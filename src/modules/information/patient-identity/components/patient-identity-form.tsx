import { Button, Col, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import {
  IUpdatePatientIdentityRequest,
  UpdatePatientIdentityRequest,
} from '@modules/information/patient-identity/requests';
import { fetchPatientIdentity, fetchPatientIdentityPdf, handlePdf } from '@modules/information/patient-identity/stores/patient-identity.store';
import { useEffect, useState } from 'react';
import AES from 'crypto-js/aes';
import { AppRequest } from '@shared/request';
import { FindPdfRequest } from '@shared/pdf';
import { PatientIdentityModel } from '@modules/information/patient-identity/models/patient-identity.model';
import { PatientIdentityService } from '@modules/information/patient-identity/services';
import { Signature } from '@shared/signature/components';
import { SignatureModel } from '@shared/signature/models/signature.model';
import { SubmitButton } from '@src/shared/button';
import { TextInput } from '@shared/input';
import getConfig from 'next/config';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { useWarnIfUnsavedChanges } from '@src/shared/alert';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { PdfPatientIdentityRequest } from '@modules/information/patient-identity/requests/pdf-patient-identity.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const PatientIdentityForm = (props: { data?: PatientIdentityModel | undefined }) => {

  const { data } = props;
  const { publicRuntimeConfig } = getConfig();

  const dispatch = useAppDispatch();
  const { officers } = useAppSelector(state => state.officer);
  const { treatment } = useAppSelector(state => state.patient);
  const { pdf } = useAppSelector(state => state.patientIdentity);
  const { userData } = useAppSelector(state => state.auth);

  const [processing, setProcessing] = useState(false);
  const [signaturePerson, setSignaturePerson] = useState(data?.form?.Tanda_Tangan_Radio ?? '1');
  const [pdfData, setPdfData] = useState<any | undefined>(undefined);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPatientIdentityPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'informasi_identitas-pasien_v3' })));
    }
  }, [treatment, dispatch]);
  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  const { register, handleSubmit, setValue, formState, reset, errors } = useForm({
    mode: 'onChange',
    resolver: yupResolver(UpdatePatientIdentityRequest.schema()),
    defaultValues: {
      name: (data) ? data.pasien?.Nama : '',
      // bod_and_age: (data) ? data.pasien?.Tgl_Lahir : '',
      bod_and_age: `${DateTimeConverter.convertToNormalDate(data?.pasien?.Tgl_Lahir)}`,
      gender: (data && data.pasien && data.pasien.Jenis_Kelamin && data.pasien.Jenis_Kelamin === 'Perempuan') ? '2' : '1',
      address: (data) ? data.pasien?.Alamat : '',
      city: (data) ? data.pasien?.Kabupaten : '',
      identity_number: (data) ? data.pasien?.NIK : '',
      phone: (data) ? data.pasien?.No_Telepon : '',
      religion: (data) ? data.pasien?.Agama : '',
      job: (data) ? data.pasien?.Pekerjaan : '',
      marital_status: (data) ? data.pasien?.Status_Nikah : '',
      bpjs_no: (data) ? data.pasien?.No_BPJS : '',
      family_name: (data) ? data.wali?.Nama : '',
      family_relation: (data) ? data.wali?.Hubungan : '',
      family_address: (data) ? data.wali?.Alamat : '',
      family_phone: (data) ? data.wali?.No_Telepon : '',
      family_nation: (data) ? data.wali?.Suku : '',
      signature_person: (data && data.form) ? data.form.Tanda_Tangan_Radio : '1',
      signature_patient: (data && data.form) ? data.form.Tanda_Tangan_Pasien : null,
      signature_wali: (data && data.form) ? data.form.Tanda_Tangan_Wali : null,
      signature_officer: (data && data.form) ? data.form.Tanda_Tangan_Petugas : null,
      id_officer: (data && data.form) ? data.form.ID_Petugas : '',
    },
  });

  const { isDirty } = formState;

  useWarnIfUnsavedChanges(isDirty, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  const handleProcessing = () => {
    setProcessing(true);
  }

  const handleSubmitForm = (value: IUpdatePatientIdentityRequest) => {
    if (!treatment) {
      return;
    }
    handleProcessing()
    reset(value);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdatePatientIdentityRequest.createFromJson({...value, ...appRequest});
    dispatch(handlePdf(undefined));
    PatientIdentityService().update(params)
      .then(() => {
        PatientIdentityService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            PatientIdentityService().pdfv3(PdfPatientIdentityRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
              .then(() => {
                setProcessing(false);
                dispatch(fetchPatientIdentityPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'informasi_identitas-pasien_v3' })));
              })
          })
        // PatientIdentityService().pdfNew(appRequest).then(() => {
        //   setProcessing(false);
        // });
        setProcessing(false);
        dispatch(fetchPatientIdentity(appRequest));
      })
      .catch((err) => {
        console.error(err);
        setProcessing(false);
      })
  }

  const handlePatientSigned = (image: string) => {
    setValue('signature_patient', image);
  }

  const handleWaliSigned = (image: string) => {
    setValue('signature_wali', image);
  }

  const handleOfficerSigned = (image: SignatureModel) => {
    setValue('signature_officer', image.Signature);
    setValue('id_officer', image.ID_Karyawan);
  }

  const handleChangeSignaturePerson = (e: any) => {
    setSignaturePerson(e.target.value);
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <h4 className="mb-2">Data Pasien</h4>
      <hr />
      <FormGroup className="form-group" row>
        <TextInput name="name" label="Nama" md={4} {...{ register, errors }} readOnly style={{ color: '#303030' }}/>
      </FormGroup>
      <FormGroup className="form-group" row>
        <TextInput name="bod_and_age" label="Tgl Lahir / Umur" md={4} {...{ register, errors }} readOnly style={{ color: '#303030' }}/>
      </FormGroup>
      <FormGroup className="form-group" row>
        <Label for='' md={4} sm={12} className="fw-bolder">Jenis Kelamin</Label>
        <Col sm={2}>
          <Input
            type='radio'
            className={`fw-bold me-1`}
            id='gender-1'
            name='gender'
            defaultChecked={!!(data?.pasien?.Jenis_Kelamin === 'Laki-Laki')}
            value='1'
            innerRef={register('gender') as any}
            invalid={errors.gender && true}
            disabled
          />
          <Label>Laki-Laki</Label>
        </Col>
        <Col sm={2}>
          <Input
            type='radio'
            className={`fw-bold me-1`}
            id='gender-2'
            name='gender'
            defaultChecked={!!(data?.pasien?.Jenis_Kelamin === 'Perempuan')}
            value='2'
            innerRef={register('gender') as any}
            invalid={errors.gender && true}
            disabled
          />
          <Label>Perempuan</Label>
        </Col>
        {errors && errors.gender && <FormFeedback>{errors.gender.message}</FormFeedback>}
      </FormGroup>
      <FormGroup className="form-group" row>
        <TextInput name="address" label="Alamat" md={4} {...{ register, errors }} readOnly style={{ color: '#303030' }}/>
      </FormGroup>
      <FormGroup className="form-group" row>
        <TextInput name="city" label="Kota / Kabupaten" md={4} {...{ register, errors }} readOnly style={{ color: '#303030' }}/>
      </FormGroup>
      <FormGroup className="form-group" row>
        <TextInput name="identity_number" label="NIK" md={4} {...{ register, errors }} readOnly style={{ color: '#303030' }}/>
      </FormGroup>
      <FormGroup className="form-group" row>
        <TextInput name="phone" label="Telp / HP" md={4} {...{ register, errors }} readOnly style={{ color: '#303030' }}/>
      </FormGroup>
      <FormGroup className="form-group" row>
        <TextInput name="religion" label="Agama" md={4} {...{ register, errors }} readOnly style={{ color: '#303030' }}/>
      </FormGroup>
      <FormGroup className="form-group" row>
        <TextInput name="job" label="Pekerjaan" md={4} {...{ register, errors }} readOnly style={{ color: '#303030' }}/>
      </FormGroup>
      <FormGroup className="form-group" row>
        <TextInput name="marital_status" label="Status Perkawinan" md={4} {...{ register, errors }} readOnly style={{ color: '#303030' }}/>
      </FormGroup>
      <FormGroup className="form-group" row>
        <TextInput name="bpjs_no" label="No BPJS" md={4} {...{ register, errors }} readOnly style={{ color: '#303030' }}/>
      </FormGroup>
      <h4 className="mt-4">Data Keluarga</h4>
      <hr />
      <FormGroup className="form-group" row>
        <TextInput name="family_name" label="Nama Keluarga Pasien" md={4} {...{ register, errors }} readOnly style={{ color: '#303030' }}/>
      </FormGroup>
      <FormGroup className="form-group" row>
        <TextInput name="family_relation" label="Hubungan dengan pasien" md={4} {...{ register, errors }} readOnly style={{ color: '#303030' }}/>
      </FormGroup>
      <FormGroup className="form-group" row>
        <TextInput name="family_address" label="Alamat" md={4} {...{ register, errors }} readOnly style={{ color: '#303030' }}/>
      </FormGroup>
      <FormGroup className="form-group" row>
        <TextInput name="family_phone" label="Telp / HP" md={4} {...{ register, errors }} readOnly style={{ color: '#303030' }}/>
      </FormGroup>
      <FormGroup className="form-group" row>
        <TextInput name="family_nation" label="Suku /Bangsa" md={4} {...{ register, errors }} readOnly style={{ color: '#303030' }}/>
      </FormGroup>
      <FormGroup className="form-group" row>
        <Label for="signature_person" md={4} sm={12}>Yang Tanda Tangan</Label>
        <Col className="d-flex">
          <div className="me-1">
            <Input
              id='signature-person-1'
              type="radio"
              name="signature_person"
              value="1"
              defaultChecked={signaturePerson === '1'}
              onChange={(e) => handleChangeSignaturePerson(e)}
              innerRef={register({ required: true })}
              invalid={errors.signature_patient && true} />{' '}
            <Label>Pasien</Label>
          </div>
          <div>
            <Input
              id='signature-person-2'
              type="radio"
              name="signature_person"
              value="2"
              defaultChecked={signaturePerson === '2'}
              onChange={(e) => handleChangeSignaturePerson(e)}
              innerRef={register({ required: true })}
              invalid={errors.signature_patient && true} />{' '}
            <Label>Wali</Label>
          </div>
        </Col>
      </FormGroup>
      <div className="d-flex justify-content-around my-1">
        {
          signaturePerson === '1' && (
            <Signature
              label="Pasien"
              type="drawer"
              formName='informasi/identitas-pasien'
              component='identitas_pasien_sign_01'
              initialImage={(data && data.form && data.form.Tanda_Tangan_Pasien && data.form.Tanda_Tangan_Pasien !== '' && !data.form.Tanda_Tangan_Pasien.includes('null')) ? data.form.Tanda_Tangan_Pasien : undefined}
              // initialImage={undefined}
              onSigned={(image: string) => handlePatientSigned(image)}/>
          )
        }
        <Input
          id="signature-patient"
          type="hidden"
          name="signature_patient"
          innerRef={register({ required: true })}
          invalid={errors.signature_patient && true} />
        {
          signaturePerson === '2' && (
            <Signature
              label="Wali"
              type="drawer"
              formName='informasi/identitas-pasien'
              component='identitas_pasien_sign_01'
              // initialImage={undefined}
              initialImage={(data && data.form && data.form.Tanda_Tangan_Wali && data.form.Tanda_Tangan_Wali !== '' && !data.form.Tanda_Tangan_Wali.includes('null')) ? data.form.Tanda_Tangan_Wali : undefined}
              onSigned={(image: string) => handleWaliSigned(image)}/>
          )
        }
        <Input
          id="signature-wali"
          type="hidden"
          name="signature_wali"
          innerRef={register({ required: true })}
          invalid={errors.signature_wali && true} />
        <Signature
          label="Petugas"
          additionalLabel={(data && data.form && data.form.Nama_Petugas && data.form.Nama_Petugas !== '') ? data.form.Nama_Petugas : undefined}
          type="picker"
          initialImage={(data && data.form && data.form.Tanda_Tangan_Petugas && data.form.Tanda_Tangan_Petugas !== '' && !data.form.Tanda_Tangan_Petugas.includes('null')) ? data.form.Tanda_Tangan_Petugas : undefined}
          defaultPerson={(userData && userData.id) ? userData.id : ''}
          persons={officers}
          onSigned={(assigner: SignatureModel) => handleOfficerSigned(assigner)} />
        <Input
          id="signature-officer"
          type="hidden"
          name="signature_officer"
          innerRef={register({ required: true })}
          invalid={errors.signature_officer && true} />
        <Input
          id="id-officer"
          type="hidden"
          name="id_officer"
          innerRef={register({ required: true })}
          invalid={errors.id_officer && true} />
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
      <FormGroup className='form-group mt-0' row>
        <div className='d-flex justify-content-center align-items-center'>
          <Label className='me-1'>Terakhir disimpan: </Label>
          {/* <Label>{(data && data.form && data.form.Updated_At) ? data.form.Updated_At : ''}</Label> */}
          <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
        </div>
      </FormGroup>
    </Form>
  );
}

export default PatientIdentityForm;
