import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { IUpdateGlassesPrescriptionRequest, UpdateGlassesPrescriptionRequest } from '@src/modules/optic/glasses-prescription/requests';
import { fetchGlassesPrescription, fetchGlassesPrescriptionPdf, handlePdf } from '@src/modules/optic/glasses-prescription/stores/glasses-prescription.store';
import { useEffect, useState } from "react";
import AES from 'crypto-js/aes';
import { AppRequest } from '@shared/request';
import { DateTimeInput } from '@shared/input';
import { FindPdfRequest, IPdfModel } from '@shared/pdf';
import { GlassesPrescriptionModel } from '@src/modules/optic/glasses-prescription/models/glasses-prescription.model';
import { GlassesPrescriptionService } from '@src/modules/optic/glasses-prescription/services';
import { PreliminaryStudyModel } from '@src/modules/ro/preliminary-study/models/preliminary-study.model';
import { Signature } from '@shared/signature/components';
import { SignatureModel } from '@shared/signature/models/signature.model';
import { SubmitButton } from '@src/shared/button';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { useWarnIfUnsavedChanges } from '@src/shared/alert';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import PreliminaryStudyDetail from '@src/modules/ro/preliminary-study/components/preliminary-study-detail';

import getConfig from 'next/config';
import RoPreliminaryStudyView from '@src/modules/outpatient/doctor-preliminary-study/components/ro-preliminary-study-view';
import {PdfGlassesPrescriptionRequest} from '@modules/optic/glasses-prescription/requests/pdf-glasses-prescription.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const GlassesPrescriptionForm = (props: { data?: GlassesPrescriptionModel | undefined, optic?: PreliminaryStudyModel | undefined }) => {

  const { data, optic } = props;
  const { publicRuntimeConfig } = getConfig();

  const dispatch = useAppDispatch();
  const { doctors } = useAppSelector(state => state.doctor);
  const { treatment } = useAppSelector(state => state.patient);
  const { pdf } = useAppSelector(state => state.glassesPrescription);
  const [dataHtml, setDataHtml] = useState<string | undefined>(undefined);
  const [pdfData, setPdfData] = useState<any | undefined>(undefined);
  const [processing, setProcessing] = useState<boolean | undefined>(false);
  const [signatureErr, setSignatureErr] = useState({ error: false, message: '' });

  const preliminaryList = [
    {
      id: 'Visus_Awal',
      value: 'Visus Awal',
    },
    {
      id: 'KML',
      value: 'KML',
    },
    {
      id: 'Koreksi_1',
      value: 'Koreksi 1',
    },
    {
      id: 'Koreksi_2',
      value: 'Koreksi 2',
    },
    {
      id: 'RPL_Ref_Subjektif',
      value: 'RPL Ref Subjektif',
    },
    {
      id: 'RPL_Streak_Retinoscopy',
      value: 'RPL Streak Retinoscopy',
    },
    {
      id: 'RPL_Ref_Subjektif_2',
      value: 'RPL Ref Subjektif 2',
    },
    {
      id: 'RPL_Streak_Retinoscopy_2',
      value: 'RPL Streak Retinascopy 2',
    },
  ]

  const preliminaryInput: any = optic && optic.toForm();

  const { register, handleSubmit, errors, setValue, formState, reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(UpdateGlassesPrescriptionRequest.schema()),
    defaultValues: {
      od_preliminary_study: (data && data.form && data.form.Pengkajian_Awal_Od) ? data.form.Pengkajian_Awal_Od : '',
      os_preliminary_study: (data && data.form && data.form.Pengkajian_Awal_Os) ? data.form.Pengkajian_Awal_Os : '',
      phone: (data && data.pasien && data.pasien.No_HP) ? data.pasien.No_HP : '',
      name: (data && data.pasien) ? data.pasien.Nama : '',
      flag_params: ((data && data.form && !data.form.Pengkajian_Awal_Od) || (data && data.form && !data.form.Pengkajian_Awal_Os)) ? 'tambah' : 'ubah',
      invoice_no: (data && data.form && data.form.ID_Resep && data.form.ID_Resep.No_Faktur) ? data.form.ID_Resep.No_Faktur : undefined,
      h_recipe: (data && data.form && data.form.ID_Resep && data.form.ID_Resep.ID_Resep_H) ? data.form.ID_Resep.ID_Resep_H : undefined,
      sph_right_distance: (data && data.form && data.form.Right && data.form.Right.Sph && data.form.Right.Sph.Distance) ? data.form.Right.Sph.Distance : 'PLANO',
      cyl_right_distance: (data && data.form && data.form.Right && data.form.Right.Cyl && data.form.Right.Cyl.Distance) ? data.form.Right.Cyl.Distance : '-',
      ax_right_distance: (data && data.form && data.form.Right && data.form.Right.Ax && data.form.Right.Ax.Distance) ? data.form.Right.Ax.Distance : '-',
      va_right_distance: (data && data.form && data.form.Right && data.form.Right.Va && data.form.Right.Va.Distance) ? data.form.Right.Va.Distance : '',
      sph_left_distance: (data && data.form && data.form.Left && data.form.Left.Sph && data.form.Left.Sph.Distance) ? data.form.Left.Sph.Distance : 'PLANO',
      cyl_left_distance: (data && data.form && data.form.Left && data.form.Left.Cyl && data.form.Left.Cyl.Distance) ? data.form.Left.Cyl.Distance : '-',
      ax_left_distance: (data && data.form && data.form.Left && data.form.Left.Ax && data.form.Left.Ax.Distance) ? data.form.Left.Ax.Distance : '-',
      va_left_distance: (data && data.form && data.form.Left && data.form.Left.Va && data.form.Left.Va.Distance) ? data.form.Left.Va.Distance : '',
      pd_distance: (data && data.form && data.form.PD && data.form.PD.Distance) ? data.form.PD.Distance : '',
      sph_right_reading: (data && data.form && data.form.Right && data.form.Right.Sph && data.form.Right.Sph.Reading) ? data.form.Right.Sph.Reading : 'PLANO',
      cyl_right_reading: (data && data.form && data.form.Right && data.form.Right.Cyl && data.form.Right.Cyl.Reading) ? data.form.Right.Cyl.Reading : '-',
      ax_right_reading: (data && data.form && data.form.Right && data.form.Right.Ax && data.form.Right.Ax.Reading) ? data.form.Right.Ax.Reading : '-',
      va_right_reading: (data && data.form && data.form.Right && data.form.Right.Va && data.form.Right.Va.Reading) ? data.form.Right.Va.Reading : '',
      sph_left_reading: (data && data.form && data.form.Left && data.form.Left.Sph && data.form.Left.Sph.Reading) ? data.form.Left.Sph.Reading : 'PLANO',
      cyl_left_reading: (data && data.form && data.form.Left && data.form.Left.Cyl && data.form.Left.Cyl.Reading) ? data.form.Left.Cyl.Reading : '-',
      ax_left_reading: (data && data.form && data.form.Left && data.form.Left.Ax && data.form.Left.Ax.Reading) ? data.form.Left.Ax.Reading : '-',
      va_left_reading: (data && data.form && data.form.Left && data.form.Left.Va && data.form.Left.Va.Reading) ? data.form.Left.Va.Reading : '',
      pd_reading: (data && data.form && data.form.PD && data.form.PD.Reading) ? data.form.PD.Reading : '',
      note: (data && data.form && data.form.Catatan_Lain) ? data.form.Catatan_Lain : '',
      prescription_date: (data && data.form && data.form.Tanggal_Resep) ? data.form.Tanggal_Resep.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      signature_doctor: (data && data.form && data.form.TTD_Dokter) ? data.form.TTD_Dokter : '/assets/default/ttd.png',
      doctor: (data && data.form && data.form.Dokter_Id) ? data.form.Dokter_Id : '',
    },
  });

  const { isDirty } = formState;

  useWarnIfUnsavedChanges(isDirty, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf]);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchGlassesPrescriptionPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'optik_resep-kacamata_v3' })));
    }
  }, [treatment, dispatch]);

  const handleSetOD = (value: any) => {
    if (value) {
      setValue('sph_right_distance', (value.Sph && value.Sph !== '') ? value.Sph : 'PLANO');
      setValue('cyl_right_distance', (value.Cyl && value.Cyl !== '') ? value.Cyl : '-');
      setValue('ax_right_distance', (value.Axis && value.Axis !== '') ? value.Axis : '-');
      setValue('va_right_distance', (value.VA && value.VA !== '') ? value.VA : '');
      setValue('sph_right_reading', (value.Add && value.Add !== '') ? value.Add : '');
      setValue('pd_distance', (value.Pd_Jauh && value.Pd_Jauh !== '') ? value.Pd_Jauh : '');
      setValue('pd_reading', (value.Pd_Dekat && value.Pd_Dekat !== '') ? value.Pd_Dekat : '');
    }
  }

  const handleSetOS = (value: any) => {
    if (value) {
      setValue('sph_left_distance', (value.Sph && value.Sph !== '') ? value.Sph : 'PLANO');
      setValue('cyl_left_distance', (value.Cyl && value.Cyl !== '') ? value.Cyl : '-');
      setValue('ax_left_distance', (value.Axis && value.Axis !== '') ? value.Axis : '-');
      setValue('va_left_distance', (value.VA && value.VA !== '') ? value.VA : '');
      setValue('sph_left_reading', (value.Add && value.Add !== '') ? value.Add : '');
      setValue('pd_distance', (value.Pd_Jauh && value.Pd_Jauh !== '') ? value.Pd_Jauh : '');
      setValue('pd_reading', (value.Pd_Dekat && value.Pd_Dekat !== '') ? value.Pd_Dekat : '');
    }
  }

  const handleDoctorSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue('signature_doctor', image.Signature);
      setValue('doctor', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('signature_doctor', image.Signature);
      setValue('doctor', image.ID_Karyawan);
    }
  }

  const handleSubmitForm = (value: IUpdateGlassesPrescriptionRequest) => {
    setSignatureErr({ error: false, message: '' });
    if (!treatment) {
      return;
    }
    if ((value.doctor === '')) {
      if (value.doctor === '') {
        setSignatureErr({ error: true, message: 'tanda tangan harus diisi' });
      }
      return;
    }
    setProcessing(true);
    reset(value as any);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateGlassesPrescriptionRequest.createFromJson({...value, ...appRequest});
    dispatch(handlePdf(undefined));
    GlassesPrescriptionService().update(params)
      .then(() => {
        GlassesPrescriptionService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            GlassesPrescriptionService().pdfv3(PdfGlassesPrescriptionRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
              .then(() => {
                setProcessing(false);
                dispatch(fetchGlassesPrescriptionPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'optik_resep-kacamata_v3' })));
              });
          });
        setProcessing(false);
        dispatch(fetchGlassesPrescription(appRequest));
      });
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <Row>
        <Col md="12">
          <FormGroup className='form-group' row>
            <Col>
              <Label style={{ fontSize: '13pt', marginTop: '30px' }}><b>Pemeriksaan Visus Dan Refraksi</b></Label>
            </Col>
          </FormGroup>
          <FormGroup className="form-group">
            <Col>
              <PreliminaryStudyDetail preliminaryStudy={{ form: data?.formRO }} />
            </Col>
          </FormGroup>
          <FormGroup className="form-group" row>
            <Label for="od_preliminary_study" md="2" sm="12">Pengkajian Awal RO (OD)</Label>
            <Col>
              <Input
                id="name"
                type="hidden"
                name="name"
                innerRef={register({ required: true })}
                invalid={errors.name && true} />
              <Input
                id="phone"
                type="hidden"
                name="phone"
                innerRef={register({ required: true })}
                invalid={errors.phone && true} />
              <Input
                id="flag_params"
                type="hidden"
                name="flag_params"
                innerRef={register({ required: true })}
                invalid={errors.flag_params && true} />
              <Input
                id="invoice_no"
                type="hidden"
                name="invoice_no"
                innerRef={register({ required: true })}
                invalid={errors.invoice_no && true} />
              <Input
                id="h_recipe"
                type="hidden"
                name="h_recipe"
                innerRef={register({ required: true })}
                invalid={errors.h_recipe && true} />
              <Input
                type="select"
                id="od_preliminary_study"
                name="od_preliminary_study"
                innerRef={register({ required: true })}
                invalid={errors.od_preliminary_study && true}
                onChange={(e) => {
                  handleSetOD(preliminaryInput.OD[e.target.value])
                }}>
                <option value="" disabled={true}>--</option>
                {
                  preliminaryList && preliminaryList.map((item, key) => {
                    return <option value={item.id} key={key}>{ item.value }</option>;
                  })
                }
              </Input>
            </Col>
            <Label for="os_preliminary_study" md="2" sm="12">Pengkajian Awal RO (OS)</Label>
            <Col>
              <Input
                type="select"
                id="os_preliminary_study"
                name="os_preliminary_study"
                innerRef={register({ required: true })}
                invalid={errors.os_preliminary_study && true}
                onChange={(e) => {
                  handleSetOS(preliminaryInput.OS[e.target.value])
                }}>
                <option value="" disabled={true}>--</option>
                {
                  preliminaryList && preliminaryList.map((item, key) => {
                    return <option value={item.id} key={key}>{ item.value }</option>;
                  })
                }
              </Input>
            </Col>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <FormGroup className="form-group" row>
            <Table bordered style={{ fontSize: '9pt' }}>
              <thead>
                <tr style={{ textAlign: 'center' }}>
                  <th rowSpan={2}></th>
                  <th colSpan={4}>
                    Right Eye
                  </th>
                  <th colSpan={4}>
                    Left Eye
                  </th>
                  <th rowSpan={2}>PD</th>
                </tr>
                <tr style={{ textAlign: 'center' }}>
                  <th>
                    Sph
                  </th>
                  <th>
                    Cyl
                  </th>
                  <th>
                    Ax
                  </th>
                  <th>
                    Va
                  </th>
                  <th>
                    Sph
                  </th>
                  <th>
                    Cyl
                  </th>
                  <th>
                    Ax
                  </th>
                  <th>
                    Va
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: '100px' }}>
                    Distance
                  </td>
                  <td style={{ width: '150px', padding: '5px' }}>
                    <Input
                      style={{ fontSize: '9pt' }}
                      size={1}
                      id={'sph_right_distance'}
                      name={'sph_right_distance'}
                      innerRef={register({ required: true })}
                      invalid={errors['sph_right_distance'] && true}
                    />
                  </td>
                  <td style={{ width: '150px', padding: '5px' }}>
                    <Input
                      style={{ fontSize: '9pt' }}
                      size={1}
                      id={'cyl_right_distance'}
                      name={'cyl_right_distance'}
                      innerRef={register({ required: true })}
                      invalid={errors['cyl_right_distance'] && true}
                    />
                  </td>
                  <td style={{ width: '150px', padding: '5px' }}>
                    <Input
                      style={{ fontSize: '9pt' }}
                      size={1}
                      id={'ax_right_distance'}
                      name={'ax_right_distance'}
                      innerRef={register({ required: true })}
                      invalid={errors['ax_right_distance'] && true}
                    />
                  </td>
                  <td style={{ width: '150px', padding: '5px' }}>
                    <Input
                      style={{ fontSize: '9pt' }}
                      size={1}
                      id={'va_right_distance'}
                      name={'va_right_distance'}
                      innerRef={register({ required: true })}
                      invalid={errors['va_right_distance'] && true}
                    />
                  </td>
                  <td style={{ width: '150px', padding: '5px' }}>
                    <Input
                      style={{ fontSize: '9pt' }}
                      size={1}
                      id={'sph_left_distance'}
                      name={'sph_left_distance'}
                      innerRef={register({ required: true })}
                      invalid={errors['sph_left_distance'] && true}
                    />
                  </td>
                  <td style={{ width: '150px', padding: '5px' }}>
                    <Input
                      style={{ fontSize: '9pt' }}
                      size={1}
                      id={'cyl_left_distance'}
                      name={'cyl_left_distance'}
                      innerRef={register({ required: true })}
                      invalid={errors['cyl_left_distance'] && true}
                    />
                  </td>
                  <td style={{ width: '150px', padding: '5px' }}>
                    <Input
                      style={{ fontSize: '9pt' }}
                      size={1}
                      id={'ax_left_distance'}
                      name={'ax_left_distance'}
                      innerRef={register({ required: true })}
                      invalid={errors['ax_left_distance'] && true}
                    />
                  </td>
                  <td style={{ width: '150px', padding: '5px' }}>
                    <Input
                      style={{ fontSize: '9pt' }}
                      size={1}
                      id={'va_left_distance'}
                      name={'va_left_distance'}
                      innerRef={register({ required: true })}
                      invalid={errors['va_left_distance'] && true}
                    />
                  </td>
                  <td style={{ width: '150px', padding: '5px' }}>
                    <Input
                      style={{ fontSize: '9pt' }}
                      size={1}
                      id={'pd_distance'}
                      name={'pd_distance'}
                      innerRef={register({ required: true })}
                      invalid={errors['pd_distance'] && true}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ width: '100px' }}>
                    Add
                  </td>
                  <td style={{ width: '150px', padding: '5px' }}>
                    <Input
                      style={{ fontSize: '9pt' }}
                      size={1}
                      id={'sph_right_reading'}
                      name={'sph_right_reading'}
                      innerRef={register({ required: true })}
                      invalid={errors['sph_right_reading'] && true}
                    />
                  </td>
                  <td style={{ width: '150px', padding: '5px' }}>
                    <Input
                      style={{ fontSize: '9pt' }}
                      size={1}
                      id={'cyl_right_reading'}
                      name={'cyl_right_reading'}
                      innerRef={register({ required: true })}
                      invalid={errors['cyl_right_reading'] && true}
                    />
                  </td>
                  <td style={{ width: '150px', padding: '5px' }}>
                    <Input
                      style={{ fontSize: '9pt' }}
                      size={1}
                      id={'ax_right_reading'}
                      name={'ax_right_reading'}
                      innerRef={register({ required: true })}
                      invalid={errors['ax_right_reading'] && true}
                    />
                  </td>
                  <td style={{ width: '150px', padding: '5px' }}>
                    <Input
                      style={{ fontSize: '9pt' }}
                      size={1}
                      id={'va_right_reading'}
                      name={'va_right_reading'}
                      innerRef={register({ required: true })}
                      invalid={errors['va_right_reading'] && true}
                    />
                  </td>
                  <td style={{ width: '150px', padding: '5px' }}>
                    <Input
                      style={{ fontSize: '9pt' }}
                      size={1}
                      id={'sph_left_reading'}
                      name={'sph_left_reading'}
                      innerRef={register({ required: true })}
                      invalid={errors['sph_left_reading'] && true}
                    />
                  </td>
                  <td style={{ width: '150px', padding: '5px' }}>
                    <Input
                      style={{ fontSize: '9pt' }}
                      size={1}
                      id={'cyl_left_reading'}
                      name={'cyl_left_reading'}
                      innerRef={register({ required: true })}
                      invalid={errors['cyl_left_reading'] && true}
                    />
                  </td>
                  <td style={{ width: '150px', padding: '5px' }}>
                    <Input
                      style={{ fontSize: '9pt' }}
                      size={1}
                      id={'ax_left_reading'}
                      name={'ax_left_reading'}
                      innerRef={register({ required: true })}
                      invalid={errors['ax_left_reading'] && true}
                    />
                  </td>
                  <td style={{ width: '150px', padding: '5px' }}>
                    <Input
                      style={{ fontSize: '9pt' }}
                      size={1}
                      id={'va_left_reading'}
                      name={'va_left_reading'}
                      innerRef={register({ required: true })}
                      invalid={errors['va_left_reading'] && true}
                    />
                  </td>
                  <td style={{ width: '10', padding: '5px' }}>
                    <Input
                      style={{ fontSize: '9pt' }}
                      size={1}
                      id={'pd_reading'}
                      name={'pd_reading'}
                      innerRef={register({ required: true })}
                      invalid={errors['pd_reading'] && true}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <FormGroup className="form-group" row>
            <Label for="note" md="2" sm="12">Catatan Lainnya</Label>
            <Col>
              <Input
                type="textarea"
                id="note"
                name="note"
                innerRef={register({ required: true })}
                invalid={errors.note && true} />
            </Col>
            {errors && errors.note && <FormFeedback>{errors.note.message}</FormFeedback>}
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <FormGroup className="form-group" row>
            <DateTimeInput
              name='prescription_date'
              label='Tanggal Resep'
              defaultValue='signature_date'
              md={2}
              {...{ register, errors }}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <FormGroup className='form-group'>
            <Table borderless style={{ width: '100%' }}>
              <tr>
                <td style={{ width: '20%' }}><b>Dokter Pengkajian Awal :</b></td>
                <td style={{ width: '60%' }}>
                  <Signature
                    label="Dokter"
                    additionalLabel={(data && data.form && data.form.Dokter_Nama && data.form.Dokter_Nama !== '') ? data.form.Dokter_Nama : undefined}
                    type="picker"
                    initialImage={(data && data.form && data.form.TTD_Dokter && data.form.TTD_Dokter !== '') ? data.form.TTD_Dokter : undefined}
                    persons={doctors}
                    unit='dokter'
                    onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                      if (isFormDoctor) {
                        handleDoctorSigned(assigner, isFormDoctor)
                      }
                      if (!isFormDoctor) {
                        handleDoctorSigned(assigner)
                      }
                    }} 
                  />
                  <Input
                    id="signature_doctor"
                    type="hidden"
                    name="signature_doctor"
                    innerRef={register({ required: true })}
                    invalid={errors.signature_doctor && true} 
                  />
                  <Input
                    id="doctor"
                    type="hidden"
                    name="doctor"
                    innerRef={register({ required: true })}
                    invalid={errors.doctor && true} 
                  />
                  {
                    signatureErr && signatureErr.error && (
                      <p style={{ fontSize: '10pt', marginLeft: '250px' }} className='text-danger'>{signatureErr.message}</p>
                    )
                  }
                </td>
                <td style={{ width: '20%' }}></td>
              </tr>
            </Table>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <FormGroup className="d-flex mb-0 justify-content-center">
            <SubmitButton
              label="Simpan"
              buttonColor='primary'
              spinnerStyle={{ width: '1rem', height: '1rem' }}
              spinnerColor='light'
              processing={processing}
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
              <Label className='me-1'>Terakhir Disimpan:</Label>
              <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
            </div>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  )

}
export default GlassesPrescriptionForm;
