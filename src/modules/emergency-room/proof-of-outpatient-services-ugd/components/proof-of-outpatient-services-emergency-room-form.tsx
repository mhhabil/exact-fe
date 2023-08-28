import { Button, Col, Form, FormGroup, Input, Label, Progress, Row, Table } from 'reactstrap';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { DateTimeInput, TextInput } from "@src/shared/input";
import { Fragment, useEffect, useState } from "react";
import { HowToUse, IPrescription, IProofOfOutpatientServicesEmergencyRoomModel, Medicine } from '../models/proof-of-outpatient-services-emergency-room.model';
import { IUpdateProofOfOutpatientServicesEmergencyRoomRequest, UpdateProofOfOutpatientServicesEmergencyRoomRequest } from '../requests';
import { fetchProofOfOutpatientServicesEmergencyRoom, fetchProofOfOutpatientServicesEmergencyRoomPdf, handleAutoSign, handlePdf } from '../stores/proof-of-outpatient-services-emergency-room.stores';

import { Minus, Plus, Trash } from 'react-feather';
import { AppRequest } from '@src/shared/request';
import { ArrayPrescriptionUGD, BPRJUGDPdfRequest } from '../requests/proof-of-outpatient-services-emergency-room.request';
import BaseSelect from 'react-select';
import { DateTimeConverter } from "@src/shared/datetime-converter";
import { EyeImage } from '@src/shared/eye-image/components';
import { FindPdfRequest } from '@src/shared/pdf';
import FixRequiredSelect from '@shared/input/components/FixRequiredSelect';
import { IDoctorModel } from '@src/shared/doctor';
import Image from 'next/image';
import OdOsBottomFormEmergencyRoomDisabled from './od-os-bottom-form-emergency-room-disabled';
import OdOsTopFormEmergencyRoomDisabled from './od-os-top-form-emergency-room-disabled';
import { ProofOfOutpatientServicesEmergencyRoom } from '../services';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { SubmitButton } from '@src/shared/button';
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

const ProofOfOutpatientEmergencyRoomForm = (props: { data: IProofOfOutpatientServicesEmergencyRoomModel }) => {
  const { data } = props;

  const dispatch = useAppDispatch();
  // const [signaturePerson, setSignaturePerson] = useState(data?.form?.Tanda_Tangan === 'Wali' ? '2' : '1');
  const { doctors } = useAppSelector(state => state.doctor);
  const { autoSign } = useAppSelector(state => state.proofOfOutpatientServicesEmergencyRoomStores)
  const [processing, setProcessing] = useState<boolean | undefined>(false);
  const { treatment } = useAppSelector(state => state.patient);
  const { pdf } = useAppSelector(state => state.proofOfOutpatientServicesEmergencyRoomStores);
  const [signaturePerson, setSignaturePerson] = useState(data?.form?.Tanda_Tangan_Radio ?? '1');
  const { userData } = useAppSelector(state => state.auth);
  const [sip, setSip] = useState<string>(data && data.form && data.form.SIP_Dokter ? data.form.SIP_Dokter : '')
  const [pdfData, setPdfData] = useState<any | undefined>(undefined);
  const [inProgress, setInProgress] = useState<any>(undefined);
  const [recipe, setRecipe] = useState<any>(data && data.form && data.form.Resep ? data.form.Resep : []);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchProofOfOutpatientServicesEmergencyRoomPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'ugd_bukti-pelayanan-rawat-jalan' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf]);

  useEffect(() => {
    if (autoSign && userData && userData.isDokter) {
      window?.scrollTo({ top: 2000, behavior: 'smooth' });
      document.getElementById('signature-div')?.click();
      setTimeout(() => {
        document.getElementById('button-save-signature')?.click();
      }, 1000)
      dispatch(handleAutoSign(false));
    }
  }, [autoSign])

  const { register, handleSubmit, errors, reset, unregister, setValue, control, getValues, watch } = useForm({
    mode: 'onChange',
    // resolver: yupResolver(UpdateNursingInitialAssessmentRequest.schema()),
    defaultValues: {
      keluhan: data?.form?.Keluhan ?? '',
      od_false: (data && data.form && data.form.OD && data.form.OD.False) ? data.form.OD.False : '',
      od_va: (data && data.form && data.form.OD && data.form.OD.VA) ? data.form.OD.VA : '',
      od_ph: (data && data.form && data.form.OD && data.form.OD.PH) ? data.form.OD.PH : '',
      od_add: (data && data.form && data.form.OD && data.form.OD.Add) ? data.form.OD.Add : '',
      od_jagger: (data && data.form && data.form.OD && data.form.OD.Jagger) ? data.form.OD.Jagger : '',
      od_non_contact: (data && data.form && data.form.OD && data.form.OD.Non_Contact) ? data.form.OD.Non_Contact : '',
      od_schiotz: (data && data.form && data.form.OD && data.form.OD.Schiotz) ? data.form.OD.Schiotz : '',
      od_tanam_lensa: (data && data.form && data.form.OD && data.form.OD.Tanam_Lensa) ? data.form.OD.Tanam_Lensa : '',
      od_keterangan_tono: (data && data.form && data.form.OD && data.form.OD.Keterangan_Tono) ? data.form.OD.Keterangan_Tono : '',
      od_eye_image: (data && data.form && data.form.OD?.Eye_Image) ? data.form.OD?.Eye_Image : '',
      os_eye_image: (data && data.form && data.form.OS?.Eye_Image) ? data.form.OS?.Eye_Image : '',
      os_va: (data && data.form && data.form.OS && data.form.OS.VA) ? data.form.OS.VA : '',
      os_false: (data && data.form && data.form.OS && data.form.OS.False) ? data.form.OS.False : '',
      os_ph: (data && data.form && data.form.OS && data.form.OS.PH) ? data.form.OS.PH : '',
      os_add: (data && data.form && data.form.OS && data.form.OS.Add) ? data.form.OS.Add : '',
      os_jagger: (data && data.form && data.form.OS && data.form.OS.Jagger) ? data.form.OS.Jagger : '',
      os_non_contact: (data && data.form && data.form.OS && data.form.OS.Non_Contact) ? data.form.OS.Non_Contact : '',
      os_schiotz: (data && data.form && data.form.OS && data.form.OS.Schiotz) ? data.form.OS.Schiotz : '',
      os_tanam_lensa: (data && data.form && data.form.OS && data.form.OS.Tanam_Lensa) ? data.form.OS.Tanam_Lensa : '',
      os_keterangan_tono: (data && data.form && data.form.OS && data.form.OS.Keterangan_Tono) ? data.form.OS.Keterangan_Tono : '',
      kgd: (data && data.form && data.form.KGD) ? data.form.KGD : '',
      td: (data && data.form && data.form.TD) ? data.form.TD : '',
      diagnosa: (data && data.form && data.form.Diagnosa) ? data.form.Diagnosa : '',
      terapi: (data && data.form && data.form.Terapi) ? data.form.Terapi : '',
      anjuran: (data && data.form && data.form.Anjuran) ? data.form.Anjuran : '',
      tanda_tangan_radio: data?.form?.Tanda_Tangan_Radio ?? '1',
      tanggal_ttd: (data && data.form && data.form.Tanggal_TTD) ? data.form.Tanggal_TTD.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      tanda_tangan_pasien: data?.form?.Tanda_Tangan_Pasien ?? '/assets/default/ttd.png',
      tanda_tangan_wali: data?.form?.Tanda_Tangan_Wali ?? '/assets/default/ttd.png',
      ttd_dokter: data?.form?.TTD_Dokter ?? '/assets/default/ttd.png',
      doctor_id: data?.form?.ID_Dokter ?? '',
      doctor_sip: data?.form?.SIP_Dokter ?? '',
    },
  })

  const { fields, append, remove, insert } = useFieldArray({
    name: 'resep',
    control,
  });

  useEffect(() => {
    if (recipe && Array.isArray(recipe)) {
      const destructured = recipe.map((item: IPrescription) => {
        return {
          'nama-obat': item.ID_Obat,
          jumlah: item.Jumlah,
          'aturan-pakai': item.ID_AturanPakai,
          catatan: item.Catatan,
          nama_obat: item.Nama_Obat,
          aturan_pakai: item.Kode_AturanPakai,
          satuan: item.Nama_Satuan,
        }
      })
      append(destructured, false);
    }
  }, [recipe])

  const handleProcessing = () => {
    setProcessing(true);
  }

  const getSIP = (id: string) => {
    if (doctors) {
      const selected = doctors.find((val: IDoctorModel) => val.ID_Karyawan === id);
      if (selected && selected.SIP && selected.SIP !== null) {
        return selected.SIP;
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  const handlePatientSigned = (image: string) => {
    setValue('tanda_tangan_pasien', image);
  }

  const handleChangeSignaturePerson = (e: any) => {
    setSignaturePerson(e.target.value);
  }

  const handleWaliSigned = (image: string) => {
    setValue('tanda_tangan_wali', image);
  }

  const handleOfficerSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    setValue('ttd_dokter', image.Signature);
    setValue('doctor_id', image.ID_Karyawan);
    setValue('doctor_sip', getSIP(image.ID_Karyawan));
    setSip(getSIP(image.ID_Karyawan));
    dispatch(handleAutoSign(undefined));
    if (isFormDoctor) {
      document.getElementById('submit-button')?.click();
    }
  }

  const handleSubmitForm = (value: IUpdateProofOfOutpatientServicesEmergencyRoomRequest) => {
    if (!treatment) {
      return;
    }
    setProcessing(true);
    const val: any = value as any;
    const resep = val.resep;
    const prescriptionModel = ArrayPrescriptionUGD.createFromForm(resep, data?.aturan_pakai);
    // reset(value);
    setInProgress({ value: 10, label: 'Updating BPRJ', percentage: '10%' })
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateProofOfOutpatientServicesEmergencyRoomRequest.createFromJson({...value, ...appRequest, ...prescriptionModel});
    dispatch(handlePdf(undefined));
    ProofOfOutpatientServicesEmergencyRoom().update(params)
      .then(() => {
        setInProgress({ value: 40, label: 'Update BPRJ Sukses...', percentage: '40%' })
        ProofOfOutpatientServicesEmergencyRoom().show(appRequest).then((resp: any) => {
          setInProgress({ value: 75, label: 'Generating PDF...', percentage: '75%' })
          const dataToPdf = resp.data.data;
          const params = BPRJUGDPdfRequest.createPdfRequest(dataToPdf, treatment)
          ProofOfOutpatientServicesEmergencyRoom().pdfNew(params).then(() => {
            setInProgress({ value: 100, label: 'PDF Generated...', percentage: '100%' })
            setProcessing(false);
            window.location.reload();
          }).catch((err) => {
            setProcessing(false);
          })
        })
        dispatch(fetchProofOfOutpatientServicesEmergencyRoom(appRequest));
        // window.location.reload();
        setProcessing(false);
      });
  }

  const handleDeleteMed = (index: any) => {
    remove(index);
  }

  const handleAddMed = () => {
    append({ 'nama-obat': '', jumlah: '', 'aturan-pakai': '', catatan: '', satuan: '' })
    setTimeout(() => document.getElementById(`jumlah_${fields.length}`)?.blur(), 10);
  }

  const handleChangeMed = (val: any, i: number) => {
    fields[i].satuan = val.satuan;
    insert(i, fields[i]);
    remove(i);
  }

  const handleImageOD = (image: string) => {
    setValue('od_eye_image', image)
  }

  const handleImageOS = (image: string) => {
    setValue('os_eye_image', image)
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <Row>
          <Col md="12">
            <FormGroup className="form-group" row>
              <Label for="complaint" md="2" sm="12">Keluhan</Label>
              <Col>
                <Input
                  type="textarea"
                  id="keluhan"
                  name="keluhan"
                  innerRef={register()}
                />
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup className="form-group" row>
          <Row className="my-2">
            <Col md="6" sm="12">
              <Row>
                <Col md="12" className="d-flex justify-content-center">
                  <h5>OD</h5>
                </Col>
              </Row>
              <hr />
              <OdOsTopFormEmergencyRoomDisabled type="od" {...{ register, errors }} />
              <hr />
              <OdOsBottomFormEmergencyRoomDisabled type="od" {...{ register, errors }} />
              <hr />
            </Col>
            <Col md="6" sm="12">
              <Row>
                <Col md="12" className="d-flex justify-content-center">
                  <h5>OS</h5>
                </Col>
              </Row>
              <hr />
              <OdOsTopFormEmergencyRoomDisabled type="os" {...{ register, errors }} />
              <hr />
              <OdOsBottomFormEmergencyRoomDisabled type="os" {...{ register, errors }} />
              <hr />
            </Col>
          </Row>
        </FormGroup>

        <FormGroup style={{marginTop: '-30px'}}>
          <Table>
            <tr>
              <td>
                <div>
                  <Label style={{marginLeft: '-25px'}}>KGD</Label>
                </div>
              </td>
              <td>
                <Row>
                  <Col>
                    <Input
                      type="text"
                      style={{ width: '300px', marginLeft: '-50px' }}
                      id="kgd"
                      name="kgd"
                      innerRef={register()}
                    />
                  </Col>
                  <Col>
                    <Label>mg / dl</Label>
                  </Col>
                </Row>
              </td>
              <td>
                <div>
                  <Label style={{marginLeft: '-35px'}}>TD</Label>
                </div>
              </td>
              <td>
                <Row>
                  <Col>
                    <Input
                      type="text"
                      style={{ width: '300px', marginLeft: '-80px' }}
                      id="td"
                      name="td"
                      innerRef={register()}
                    />
                  </Col>
                  <Col>
                    <Label>mmHg</Label>
                  </Col>
                </Row>
              </td>
            </tr>
          </Table>
        </FormGroup>

        <FormGroup className='form-group' style={{marginTop: '-30px'}}>
          <Table borderless style={{ width: '100%' }}>
            <thead>
              <tr style={{ textAlign: 'center' }} className="fw-bolder">
                <th style={{ width: '18%' }}></th>
                <th style={{ width: '41%' }}>
                OD
                </th>
                <th style={{ width: '41%' }}>
                OS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="fw-bold">
                <td></td>
                <td>
                  <EyeImage
                    initialImage={(data && data.form && data.form.OD?.Eye_Image && data.form.OD?.Eye_Image !== '') ? data.form.OD?.Eye_Image : undefined}
                    formName='ugd/bprj'
                    component='bprj_ugd_eye_OD'
                    onSaved={(image: string) => handleImageOD(image)}
                  />
                  <Input
                    id="od-eye-image"
                    type="hidden"
                    name="od_eye_image"
                    innerRef={register({ required: false })}
                    invalid={errors.od_eye_image && true} />
                </td>
                <td>
                  <EyeImage
                    initialImage={(data && data.form && data.form.OS?.Eye_Image && data.form.OS?.Eye_Image !== '') ? data.form.OS?.Eye_Image : undefined}
                    formName='ugd/bprj'
                    component='bprj_ugd_eye_OS'
                    onSaved={(image: string) => handleImageOS(image)}
                  />
                  <Input
                    id="os-eye-image"
                    type="hidden"
                    name="os_eye_image"
                    innerRef={register({ required: false })}
                    invalid={errors.os_eye_image && true} />
                </td>
              </tr>
            </tbody>
          </Table>
        </FormGroup>

        <FormGroup className='form-group'>
          <Table borderless style={{ width: '100%' }} className='align-items-center'>
            <tr>
              <td style={{ width: '22%' }}>
                <b>Diagnosa</b>
              </td>
              <td>
                <Input
                  type='textarea'
                  className='mb-1'
                  style={{ width: '673px', marginLeft: '35px' }}
                  name='diagnosa'
                  innerRef={register()}
                  invalid={errors.diagnosa && true}
                />
              </td>
            </tr>
            <tr>
              <td><b>Terapi</b></td>
              <td>
                <Input
                  type='textarea'
                  style={{ width: '673px', marginLeft: '35px' }}
                  name='terapi'
                  innerRef={register()}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                {
                  data && data.formFarmasi && data.formFarmasi.Status_Tebus && data.formFarmasi.Status_Tebus === '1' ? (
                    <>
                      <Table bordered style={{ width: '100%' }}>
                        <thead>
                          <tr style={{ textAlign: 'center' }}>
                            <td className='pt-0' style={{ width: '5%' }}><b>No</b></td>
                            <td className='pt-2' style={{ width: '40%' }}><b>{`Nama & Dosis`}</b></td>
                            <td className='pt-0'><b>Satuan</b></td>
                            <td className='pt-0' style={{ width: '50px' }}><b>Jumlah</b></td>
                            <td className='pt-2' style={{ width: '25%' }}><b>Aturan Pakai</b></td>
                            <td className='pt-2'style={{ width: '30%' }}><b>Catatan</b></td>
                            <td className='pt-0' style={{ width: '5%' }}></td>
                          </tr>
                        </thead>
                        <tbody>
                          {fields && fields.map((rec, i: number) => {
                            return (
                              <tr key={rec.id}>
                                <td>{`${i + 1}`}</td>
                                <td>
                                  <Controller
                                    control={control}
                                    name={`resep[${i}].nama-obat`}
                                    defaultValue={{ label: rec.nama_obat, value: rec['nama-obat'] }}
                                    render={({ onChange, name, ref }) => (
                                      <BaseSelect
                                        ref={ref}
                                        defaultValue={{ label: rec.nama_obat, value: rec['nama-obat'] }}
                                        options={data && data.obat?.map((med: Medicine) => ({ label: med.Nama_Inventory, value: med.Kode_Inventory, satuan: med.Nama_Satuan }))}
                                        name={name}
                                        onChange={(val) => {
                                          onChange(val);
                                          handleChangeMed(val, i);
                                        } }
                                        isDisabled />
                                    )} />
                                </td>
                                <td>
                                  {rec.satuan}
                                </td>
                                <td>
                                  <Input
                                    type='number'
                                    id={`total_tebus_${i}`}
                                    name={`resep[${i}].jumlah`}
                                    defaultValue={rec.jumlah}
                                    innerRef={register()}
                                    style={{ width: '50px' }}
                                    readOnly/>
                                </td>
                                <td>
                                  <Controller
                                    control={control}
                                    name={`resep[${i}].aturan-pakai` as const}
                                    defaultValue={{ label: rec.aturan_pakai, value: rec.aturan_pakai, id: rec['aturan-pakai'] }}
                                    render={({ onChange, name, ref }) => (
                                      <BaseSelect
                                        ref={ref}
                                        defaultValue={{ label: rec.aturan_pakai, value: rec.aturan_pakai, id: rec['aturan-pakai'] }}
                                        options={data && data.aturan_pakai && data.aturan_pakai.map((med: HowToUse) => ({ label: med.Kode, value: med.Kode, id: med.ID_AturanPakai }))}
                                        name={name}
                                        isDisabled
                                        onChange={(val: any) => {
                                          onChange(val);
                                        } } />
                                    )} />
                                </td>
                                <td>
                                  <Input
                                    type='text'
                                    name={`resep[${i}].catatan`}
                                    defaultValue={rec.catatan}
                                    innerRef={register()}
                                    readOnly/>
                                </td>
                                <td>
                                  <Button style={{ padding: '4px' }} color='danger' type='button' disabled>
                                    <Trash size={15} />
                                  </Button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table></>
                  ) : (
                    <Table bordered style={{ width: '100%' }}>
                      <thead>
                        <tr style={{ textAlign: 'center' }}>
                          <td className='pt-0' style={{ width: '5%' }}><b>No</b></td>
                          <td className='pt-2' style={{ width: '40%' }}><b>{`Nama & Dosis`}</b></td>
                          <td className='pt-0'><b>Satuan</b></td>
                          <td className='pt-0' style={{ width: '50px' }}><b>Jumlah</b></td>
                          <td className='pt-2' style={{ width: '35%' }}><b>Aturan Pakai</b></td>
                          <td className='pt-2'style={{ width: '20%' }}><b>Catatan</b></td>
                          <td className='pt-0' style={{ width: '5%' }}></td>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          fields && fields.map((rec, i: number) => {
                            return (
                              <tr key={rec.id}>
                                <td className='pt-0'>{`${i + 1}`}</td>
                                <td className='pt-2'>
                                  <Controller
                                    control={control}
                                    name={`resep[${i}].nama-obat`}
                                    defaultValue={{ label: rec.nama_obat, value: rec['nama-obat'] }}
                                    rules={{required: true}}
                                    render={({ onChange, name, ref }) => (
                                      <Fragment>
                                        <FixRequiredSelect
                                          {...props}
                                          required={true}
                                          name={name}
                                          defaultValue={{ label: rec.nama_obat, value: rec['nama-obat'] }}
                                          onChange={(val: any) => {
                                            onChange(val);
                                            handleChangeMed(val, i);
                                          }}
                                          SelectComponent={BaseSelect}
                                          options={data && data.obat?.map((med: Medicine) => ({ label: med.Nama_Inventory, value: med.Kode_Inventory, satuan: med.Nama_Satuan }))}
                                        />
                                      </Fragment>
                                    )}
                                  />
                                </td>
                                <td className='pt-0'>
                                  {
                                    rec.satuan
                                  }
                                </td>
                                <td className='pt-0'>
                                  <Input
                                    type='number'
                                    id={`total_${i}`}
                                    name={`resep[${i}].jumlah`}
                                    defaultValue={rec.jumlah}
                                    innerRef={register()}
                                    style={{ width: '50px' }}
                                    required
                                  />
                                </td>
                                <td className='pt-2'>
                                  <Controller
                                    control={control}
                                    name={`resep[${i}].aturan-pakai`}
                                    defaultValue={{ label: rec.aturan_pakai, value: rec.aturan_pakai, id: rec['aturan-pakai'] }}
                                    render={({ onChange, name, ref }) => (
                                      <Fragment>
                                        <FixRequiredSelect
                                          {...props}
                                          required={true}
                                          name={name}
                                          defaultValue={{ label: rec.aturan_pakai, value: rec.aturan_pakai, id: rec['aturan-pakai'] }}
                                          onChange={(val: any) => {
                                            onChange(val);
                                          }}
                                          SelectComponent={BaseSelect}
                                          options={data && data.aturan_pakai?.map((med: HowToUse) => ({ label: med.Kode, value: med.Kode, id: med.ID_AturanPakai }))}
                                        />
                                      </Fragment>
                                    )}
                                  />
                                </td>
                                <td className='pt-0' style={{ marginTop: 0 }}>
                                  <Input
                                    type='text'
                                    name={`resep[${i}].catatan`}
                                    defaultValue={rec.catatan}
                                    innerRef={register()}
                                  />
                                </td>
                                <td>
                                  <Button style={{ padding: '4px' }} color='danger' type='button' onClick={ () => handleDeleteMed(i)}>
                                    <Trash size={15} />
                                  </Button>
                                </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </Table>
                  )
                }
              </td>
            </tr>
            <tr>
              <td>
                {
                  data && data.formFarmasi && data.formFarmasi.Status_Tebus && data.formFarmasi.Status_Tebus === '1' ? (
                    <>
                      <Button style={{ padding: '4px', marginTop: '8px' }} color='primary' className='me-1' type='button' disabled>
                        <Plus size={15} />
                        Tambah Obat
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button style={{ padding: '4px', marginTop: '8px' }} color='primary' type='button' className='me-1' onClick={() => handleAddMed()}>
                        <Plus size={15} />
                        Tambah Obat
                      </Button>
                    </>
                  )
                }
              </td>
            </tr>
            <tr>
              <td><b>Anjuran</b></td>
              <td>
                <Input
                  type='textarea'
                  className='mt-1 mb-1'
                  style={{ width: '705px', marginLeft: '28px' }}
                  name='anjuran'
                  innerRef={register()}
                />
              </td>
            </tr>
          </Table>
        </FormGroup>
        <FormGroup className="form-group" row>
          <DateTimeInput
            name='tanggal_ttd'
            label={`Tanggal & Waktu`}
            defaultValue='tanggal_ttd'
            md={2}
            required={false}
            {...{ register, errors }}
          />
        </FormGroup>

        <FormGroup className="form-group" row>
          <Label for="tanda_tangan_radio" md={2} sm={12}>Yang Tanda Tangan</Label>
          <Col className="d-flex">
            <div className="me-1">
              <Input
                id='signature-person-1'
                type="radio"
                name="tanda_tangan_radio"
                value="1"
                defaultChecked={signaturePerson === '1'}
                onChange={(e) => handleChangeSignaturePerson(e)}
                innerRef={register()}
              />{' '}
              <Label>Pasien</Label>
            </div>
            <div>
              <Input
                id='signature-person-2'
                type="radio"
                name="tanda_tangan_radio"
                value="2"
                defaultChecked={signaturePerson === '2'}
                onChange={(e) => handleChangeSignaturePerson(e)}
                innerRef={register()}
              />{' '}
              <Label>Keluarga/Wali</Label>
            </div>
          </Col>
        </FormGroup>
        <div className="d-flex justify-content-around my-1">
          {
            signaturePerson === '1' && (
              <Signature
                label="Pasien"
                type="drawer"
                formName='rawat-jalan/bprj'
                component='ttd_pasien'
                initialImage={(data && data.form && data.form.Tanda_Tangan_Pasien && data.form.Tanda_Tangan_Pasien !== '' && !data.form.Tanda_Tangan_Pasien.includes('null')) ? data.form.Tanda_Tangan_Pasien : undefined}
                onSigned={(image: string) => handlePatientSigned(image)}/>
            )
          }
          <Input
            id="signature-patient"
            type="hidden"
            name="tanda_tangan_pasien"
            innerRef={register()}
          />
          {
            signaturePerson === '2' && (
              <Signature
                label="Wali"
                type="drawer"
                formName='rawat-jalan/bprj'
                component='ttd_wali'
                initialImage={(data && data.form && data.form.Tanda_Tangan_Wali && data.form.Tanda_Tangan_Wali !== '' && !data.form.Tanda_Tangan_Wali.includes('null')) ? data.form.Tanda_Tangan_Wali : undefined}
                onSigned={(image: string) => handleWaliSigned(image)}/>
            )
          }
          <Input
            id="tanda_tangan_wali"
            type="hidden"
            name="tanda_tangan_wali"
            innerRef={register()}
          />
          <div>
            <Signature
              label="Dokter"
              id='signature-div'
              additionalLabel={(data && data.form && data.form.Nama_Dokter && data.form.Nama_Dokter !== '') ? data.form.Nama_Dokter : undefined}
              type="picker"
              initialImage={(data && data.form && data.form.TTD_Dokter && data.form.TTD_Dokter !== '' && !data.form.TTD_Dokter.includes('null')) ? data.form.TTD_Dokter : undefined}
              defaultPerson={(userData && userData.id) ? userData.id : ''}
              persons={doctors}
              unit='dokter'
              onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                if (isFormDoctor) {
                  handleOfficerSigned(assigner, isFormDoctor)
                }
                if (!isFormDoctor) {
                  handleOfficerSigned(assigner)
                }
              }}
            />
            <Label>{sip && sip !== '' ? `SIP: ${sip}` : ''}</Label>
          </div>
          <Input
            id="signature-officer"
            type="hidden"
            name="ttd_dokter"
            innerRef={register()}
          />
          <Input
            id="id-officer"
            type="hidden"
            name="doctor_id"
            innerRef={register()}
          />
          <Input
            id='sip-doctor'
            type='hidden'
            name='doctor_sip'
            innerRef={register()}
          />
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
        {/* {
          inProgress ? (
            <FormGroup className='form-group justify-content-center align-items-center mt-0' row>
              <div style={{ width: '30%' }} className='d-flex flex-column justify-content-center align-items-center mt-0'>
                <Label>{inProgress.label}</Label>
                <Progress
                  value={inProgress.value}
                  max={100}
                  className='mt-0'
                  bar
                  striped
                  animated
                >
                  {inProgress.percentage}
                </Progress>
              </div>
            </FormGroup>
          ) : (
            null
          )
        } */}
        <FormGroup className='form-group mt-0' row>
          <div className='d-flex justify-content-center align-items-center'>
            <Label className='me-1'>Terakhir disimpan: </Label>
            <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
          </div>
        </FormGroup>
      </Form>
    </>
  );
}
export default ProofOfOutpatientEmergencyRoomForm;
