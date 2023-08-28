import { Button, Col, Form, FormGroup, Input, Label, Row, Spinner } from 'reactstrap';
import { DateTimeInput, SelectInput, TextInput } from '@shared/input';
import { FindPdfRequest, IPdfModel } from '@shared/pdf';
import { IUpdateGeneralConsentRequest, UpdateGeneralConsentRequest } from '@modules/information/general-consent/requests';
import { fetchGeneralConsent, fetchGeneralConsentPdf, handlePdf } from '@modules/information/general-consent/stores/general-consent.store';
import { useEffect, useRef, useState } from 'react';
import AES from 'crypto-js/aes';
import { AppRequest } from '@shared/request';
import { ConfirmModal } from '@src/shared/modal';
import { GeneralConsentModel } from '@modules/information/general-consent/models/general-consent.model';
import { GeneralConsentService } from '@modules/information/general-consent/services';
import { Signature } from '@shared/signature/components';
import { SignatureModel } from '@shared/signature/models/signature.model';
import { SubmitButton } from '@src/shared/button';
import getConfig from 'next/config';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useWarnIfUnsavedChanges } from '@src/shared/alert';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { PdfGeneralConsentRequest } from '@modules/information/general-consent/requests/pdf-general-consent.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const GeneralConsentForm = (props: { data: GeneralConsentModel }) => {

  const { data } = props;
  const { publicRuntimeConfig } = getConfig();
  const router = useRouter();

  const dispatch = useAppDispatch();
  const { officers } = useAppSelector(state => state.officer);
  const { doctors } = useAppSelector(state => state.doctor);
  const { pdf } = useAppSelector(state => state.generalConsent);
  const { treatment } = useAppSelector(state => state.patient);
  const { userData } = useAppSelector(state => state.auth);
  const [signaturePerson, setSignaturePerson] = useState(data?.form?.Tanda_Tangan === 'Wali' ? '2' : '1');
  const [visitable, setVisitable] = useState(data?.form?.Bersedia_Dikunjung === 0 ? '2' : '1');
  const [forbiddenNames, setForbiddenNames] = useState<any>(data && data.form && data.form.Nama_Tidak_Diizinkan && Array.isArray(data.form.Nama_Tidak_Diizinkan) ? data.form.Nama_Tidak_Diizinkan : []);
  const [processing, setProcessing] = useState(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const [nameErr, setNameErr] = useState({ error: false, message: '' })
  const [phoneErr, setPhoneErr] = useState({ error: false, message: '' });
  const [addressErr, setAddressErr] = useState({ error: false, message: '' });
  const [forbiddenErr, setForbiddenErr] = useState({ error: false, message: '' });
  const [isOpen, setIsOpen] = useState<boolean>(false);


  const getForbiddenName = () => {
    if (data && data.form && Array.isArray(data.form.Nama_Tidak_Diizinkan)) {
      return data.form?.Nama_Tidak_Diizinkan;
    }
    return [];
  }

  useEffect(() => {
    if (treatment) {
      dispatch(fetchGeneralConsentPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'informasi_general-consent_v3' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  const { register, handleSubmit, setValue, getValues, errors, formState, reset } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: true,
    resolver: yupResolver(UpdateGeneralConsentRequest.schema()),
    defaultValues: {
      patient_name: (data && data.pasien) ? data.pasien.Nama : '',
      patient_no_mr: (data && data.nomor_mr) ? data.nomor_mr : '',
      // patient_bod: (data && data.pasien) ? data.pasien.Tgl_Lahir : '',
      patient_bod: `${DateTimeConverter.convertToNormalDate(data?.pasien?.Tgl_Lahir)}`,
      patient_address: (data && data.pasien) ? data.pasien.Alamat : '',
      signature_person: signaturePerson,
      signature_name: (data && data.form && data.form.Tanda_Tangan_Nama) ? data.form.Tanda_Tangan_Nama : (data && data.form && data.form.Tanda_Tangan === 'Wali') ? data.wali?.Nama : data.pasien?.Nama,
      signature_phone: (data && data.form && data.form.Tanda_Tangan_Telepon) ? data.form.Tanda_Tangan_Telepon : (data && data.form && data.form.Tanda_Tangan === 'Wali') ? data.wali?.No_Telepon : data.pasien?.No_Telepon,
      signature_address: (data && data.form && data.form.Tanda_Tangan_Alamat) ? data.form.Tanda_Tangan_Alamat : (data && data.form && data.form.Tanda_Tangan === 'Wali') ? data.wali?.Alamat : data.pasien?.Alamat,
      signature_date: (data && data.form && data.form.Tanggal_TTD) ? data.form.Tanggal_TTD.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      signature_patient: (data && data.form) ? data.form.TTD_Pasien : '/assets/default/ttd.png',
      signature_officer: (data && data.form) ? data.form.TTD_Saksi : '/assets/default/ttd.png',
      payment: (data && data.form) ? data.form.Tipe_Pembayaran : (data.tagihan) ? data.tagihan : '',
      doctor_on_duty: (data && data.form && data.form.ID_Dokter_Jaga) ? data.form.ID_Dokter_Jaga : (treatment && treatment.ID_Dokter) ? treatment.ID_Dokter : '',
      doctor_treatment: (data && data.form && data.form.ID_Dokter_Rawat) ? data.form.ID_Dokter_Rawat : (treatment && treatment.ID_Dokter) ? treatment.ID_Dokter : '',
      id_officer: (data && data.form) ? data.form.ID_Saksi : '',
      wali: (data && data.wali) ? data.wali.Nama : '',
      other: (data && data.form && data.form.Pelepasan_Lain) ? data.form.Pelepasan_Lain : '',
      visitable,
      forbidden_name: getForbiddenName(),
    },
  });

  const { isDirty } = formState;

  useWarnIfUnsavedChanges(isDirty, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  useEffect(() => {
    setValue('forbidden_name', forbiddenNames);
  }, [forbiddenNames]);

  const handleProcessing = () => {
    setProcessing(true);
  }

  const handleSubmitForm = (value: IUpdateGeneralConsentRequest) => {
    setAddressErr({ error: false, message: '' })
    setPhoneErr({ error: false, message: '' });
    setNameErr({ error: false, message: '' });
    setForbiddenErr({ error: false, message: '' });
    if (!treatment) {
      return;
    }
    if ((value.signature_address === '' || value.signature_name === '' || value.signature_phone === '') || (value.visitable === '2' && (!value.forbidden_name || (value.forbidden_name && Array.isArray(value.forbidden_name) && value.forbidden_name.length < 1)))) {
      if (value.signature_address === '') {
        setAddressErr({ error: true, message: 'alamat harus diisi' });
      }
      if (value.signature_name === '') {
        setNameErr({ error: true, message: 'nama harus diisi' });
      }
      if (value.signature_phone === '') {
        setPhoneErr({ error: true, message: 'no. hp harus diisi' });
      }
      if (value.visitable === '2' && (!value.forbidden_name || (value.forbidden_name && Array.isArray(value.forbidden_name) && value.forbidden_name.length < 1))) {
        setForbiddenErr({ error: true, message: 'minimal 1 nama harus diisi' });
      }
      return;
    }

    handleProcessing()
    reset(value);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateGeneralConsentRequest.createFromJson({...value, ...appRequest});
    dispatch(handlePdf(undefined));
    GeneralConsentService().update(params)
      .then(() => {
        GeneralConsentService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            GeneralConsentService().pdfv3(PdfGeneralConsentRequest.createPdfRequest(data, appRequest.emr_id))
              .then(() => {
                setProcessing(false);
                dispatch(fetchGeneralConsentPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'informasi_general-consent_v3' })));
              })
          })
        setProcessing(false);
        dispatch(fetchGeneralConsent(appRequest));
      });
  }

  const handleChangeSignaturePerson = (e: any) => {
    setSignaturePerson(e.target.value);
    if (e.target.value === '1') {
      setValue('signature_name', data?.pasien?.Nama);
      setValue('signature_phone', data?.pasien?.No_Telepon);
      setValue('signature_address', data?.pasien?.Alamat);
    } else {
      setValue('signature_name', data?.wali?.Nama);
      setValue('signature_phone', data?.wali?.No_Telepon);
      setValue('signature_address', data?.wali?.Alamat);
    }
  }

  const handleChangeVisitable = (e: any) => {
    setVisitable(e.target.value);
  }

  const handleAddForbiddenName = () => {
    const names = forbiddenNames.map((n: string, key: number) => {
      return getValues(`forbidden_name[${key}]`);
    });
    setForbiddenNames([...names, '']);
  }

  const handleDeleteForbiddenName = (index: number) => {
    const names = forbiddenNames.map((n: string, key: number) => {
      return getValues(`forbidden_name[${key}]`);
    });
    names.splice(index, 1);
    setForbiddenNames(names);
  }

  const handlePatientSigned = (image: string) => {
    setValue('signature_patient', image);
  }

  const handleOfficerSigned = (image: SignatureModel) => {
    setValue('signature_officer', image.Signature);
    setValue('id_officer', image.ID_Karyawan);
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <Row>
        <Col md="6" sm="12">
          <h4 className="mb-2">Identitas Pasien</h4>
          <hr />
          <FormGroup className="form-group" row>
            <TextInput name="patient_name" label="Nama" md={4} {...{ register, errors }} readOnly style={{ color: '#303030' }}/>
          </FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="patient_no_mr" label="Nomor MR" md={4} {...{ register, errors }} readOnly style={{ color: '#303030' }}/>
          </FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="patient_bod" label="Tanggal Lahir" md={4} {...{ register, errors }} readOnly style={{ color: '#303030' }}/>
          </FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="patient_address" label="Alamat" md={4} {...{ register, errors }} readOnly style={{ color: '#303030' }}/>
          </FormGroup>
          <Label>Yang bertanda tangan dibawah ini</Label>
          <Col className="d-flex">
            <div className="me-1">
              <Input
                id="signature-person-1"
                type="radio"
                name="signature_person"
                value="1"
                defaultChecked={signaturePerson === '1'}
                onChange={(e) => handleChangeSignaturePerson(e)}
                innerRef={register({ required: true })}
                invalid={errors.signature_person && true} />{' '}
              <Label>Pasien</Label>
            </div>
            <div>
              <Input
                id="signature-person-2"
                type="radio"
                name="signature_person"
                value="2"
                defaultChecked={signaturePerson === '2'}
                onChange={(e) => handleChangeSignaturePerson(e)}
                innerRef={register({ required: true })}
                invalid={errors.signature_person && true} />{' '}
              <Label>Wali</Label>
            </div>
          </Col>

          <FormGroup className="form-group" row>
            <TextInput name="signature_name" label="Nama" md={4} {...{ register, errors }} />
            {
              nameErr && nameErr.error && (
                <p style={{ fontSize: '9pt', marginLeft: '180px' }} className='text-danger'>{nameErr.message}</p>
              )
            }
          </FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="signature_phone" label="No. Telp / HP" md={4} {...{ register, errors }} />
            {
              phoneErr && phoneErr.error && (
                <p style={{ fontSize: '9pt', marginLeft: '180px' }} className='text-danger'>{phoneErr.message}</p>
              )
            }
          </FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="signature_address" label="Alamat" md={4} {...{ register, errors }} />
            {
              addressErr && addressErr.error && (
                <p style={{ fontSize: '9pt', marginLeft: '180px' }} className='text-danger'>{addressErr.message}</p>
              )
            }
          </FormGroup>

          <Label>Menyatakan setuju</Label>
          <Col className="d-flex">
            <div className="me-1">
              <Input
                id="service-type-rawat-inap"
                disabled
                type="radio"
                name="service_type"
                value="RawatInap"
                defaultChecked={data?.jenis_pelayanan === 'RawatInap'}
                innerRef={register({ required: true })} />{' '}
              <Label>Rawat Inap</Label>
            </div>
            <div>
              <Input
                id="service-type-rawat-jalan"
                disabled
                type="radio"
                name="service_type"
                value="RawatJalan"
                defaultChecked={data?.jenis_pelayanan === 'RawatJalan'}
                innerRef={register({ required: true })} />{' '}
              <Label>Rawat Jalan</Label>
            </div>
          </Col>

          <FormGroup className="form-group" row>
            <SelectInput
              name="doctor_treatment"
              label="Dokter Rawat"
              onChange={(event: any) => {
                console.log('Ganti');
              } }
              md={4}
              defaultValue={(data && data.form) ? data.form.ID_Dokter_Rawat : (data && data.id_dokter) ? data.id_dokter : ''}
              {...{ register, errors }}
            >
              {doctors && doctors.map((doctorObj: any, key: number) => {
                return <option key={key} value={doctorObj.ID_Karyawan}>{doctorObj.Nama}</option>;
              })}
            </SelectInput>
          </FormGroup>
          <FormGroup className="form-group" row>
            <SelectInput
              name="doctor_on_duty"
              label="Dokter Jaga"
              onChange={(event: any) => {
                console.log('Ganti');
              } }
              md={4}
              defaultValue={(data && data.form) ? data.form.ID_Dokter_Jaga : (data && data.id_dokter) ? data.id_dokter : ''}
              {...{ register, errors }}
            >
              {doctors && doctors.map((doctorObj: any, key: number) => {
                return <option key={key} value={doctorObj.ID_Karyawan}>{doctorObj.Nama}</option>;
              })}
            </SelectInput>
          </FormGroup>
        </Col>

        <Col md="6" sm="12">
          <h4 className="mb-2">Persetujuan Pelepasan Informasi</h4>
          <hr />
          <FormGroup className="form-group" row>
            <TextInput name="payment" label="Tipe Pembayaran" md={4} {...{ register, errors }} readOnly style={{ color: '#303030' }}/>
          </FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="wali" label="Nama Wali" md={4} {...{ register, errors }} />
          </FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="other" label="Lain-lain" md={4} {...{ register, errors }} />
          </FormGroup>

          <h4 className="mb-2">Privasi</h4>
          <hr />

          <Label>Pasien bersedia dijenguk</Label>
          <Col className="d-flex">
            <div className="me-1">
              <Input
                id="visitable-1"
                type="radio"
                name="visitable"
                value="1"
                defaultChecked={visitable === '1'}
                onChange={(e) => handleChangeVisitable(e)}
                innerRef={register({ required: true })}
                invalid={errors.visitable && true} />{' '}
              <Label>Izin</Label>
            </div>
            <div>
              <Input
                id="visitable-2"
                type="radio"
                name="visitable"
                value="2"
                defaultChecked={visitable === '2'}
                onChange={(e) => handleChangeVisitable(e)}
                innerRef={register({ required: true })}
                invalid={errors.visitable && true} />{' '}
              <Label>Tidak Izin</Label>
            </div>
          </Col>

          {visitable === '2' && (
            <FormGroup className="form-group">
              <Label md="12">Nama yang Tidak Diizinkan Menjenguk</Label>
              {forbiddenNames && forbiddenNames.map((name: string, key: number) => {
                return (
                  <div key={key} className="d-flex align-items-center mb-1">
                    <Input
                      className="me-1"
                      id={`forbidden_name_${key}`}
                      name={`forbidden_name[${key}]`}
                      innerRef={register({ required: true })}
                      placeholder="Isikan satu nama perkotak" />
                    <div className="text-danger cursor-pointer fw-bold" onClick={() => handleDeleteForbiddenName(key)}>Delete</div>
                  </div>
                );
              })}
              <span className="text-warning cursor-pointer" onClick={() => handleAddForbiddenName()}>+Tambah nama lain</span>
              {
                forbiddenErr && forbiddenErr.error && (
                  <p style={{ fontSize: '9pt' }} className='text-danger'>{forbiddenErr.message}</p>
                )
              }
            </FormGroup>
          )}
          <FormGroup className="form-group" row>
            <DateTimeInput
              name='signature_date'
              label='Tanggal Tanda Tangan'
              defaultValue='signature_date'
              md={4}
              {...{ register, errors }} />
          </FormGroup>
          <div className="d-flex justify-content-around my-1">
            <Signature
              label="Pasien/Wali"
              type="drawer"
              formName='informasi/general-consent'
              component='general_consent_sign_01'
              initialImage={(data && data.form && data.form.TTD_Pasien && data.form.TTD_Pasien !== '') ? data.form.TTD_Pasien : undefined}
              onSigned={(image: string) => handlePatientSigned(image)} />
            <Input
              type="hidden"
              name="signature_patient"
              innerRef={register({ required: true })}
              invalid={errors.signature_patient && true} />
            <Signature
              label="Petugas"
              additionalLabel={(data && data.form && data.form.Nama_Saksi !== '') ? data.form.Nama_Saksi : undefined}
              type="picker"
              defaultPerson={(userData && userData.id) ? userData.id : ''}
              initialImage={(data && data.form && data.form.TTD_Saksi && data.form.TTD_Saksi !== '') ? data.form.TTD_Saksi : undefined}
              persons={officers}

              onSigned={(assigner: SignatureModel) => handleOfficerSigned(assigner)} />
            <Input
              type="hidden"
              name="signature_officer"
              innerRef={register({ required: true })}
              invalid={errors.signature_officer && true} />
            <Input
              type="hidden"
              name="id_officer"
              innerRef={register({ required: true })}
              invalid={errors.id_officer && true} />
          </div>
          <FormGroup className="d-flex mb-0 justify-content-center">
            <SubmitButton
              label="Simpan"
              buttonColor='primary'
              spinnerStyle={{ width: '1rem', height: '1rem' }}
              spinnerColor='light'
              processing={processing} />
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
              <Label className='me-1'>Terakhir Disimpan:</Label>
              <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
            </div>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
}

export default GeneralConsentForm;
