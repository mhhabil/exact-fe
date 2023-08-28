import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row, TabContent, TabPane, Table } from 'reactstrap';
import { Controller, useFieldArray } from 'react-hook-form';
import { DateTimeInput, TextInput } from "@src/shared/input";
import { DoctorPreliminaryStudyModel, HowToUse, IDaftarTebus, Medicine } from '@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';
import { Fragment, useEffect, useState } from "react";
import { Plus, Trash } from 'react-feather';
import { AssessmentUgdModel } from '../../models/assessment-ugd-models';
import BaseSelect from 'react-select';
import { EyeImage } from '@src/shared/eye-image/components';
import FixRequiredSelect from '@src/shared/input/components/FixRequiredSelect';
import { IPdfModel } from '@src/shared/pdf';
import Image from 'next/image';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { SubmitButton } from '@src/shared/button';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

const OphthalmologistExaminationForm = (props: { data: AssessmentUgdModel, register: any, errors: any, getValues: any, setValue: any, control: any, unregister: any, activeTab: string, processing: boolean, defaultPattern: string | undefined, pdfData: any })  => {
  const { data, register, errors, getValues, setValue, control, unregister, activeTab, processing, defaultPattern, pdfData } = props;
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  // const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);

  useEffect(() => {
    if (data && data.form && data.form.Resep && Array.isArray(data.form.Resep)) {
      for (let i = 0; i < data.form.Resep.length; i += 1) {
        append({ 'nama-obat': data.form.Resep[i].ID_Obat, jumlah: data.form.Resep[i].Jumlah, 'aturan-pakai': data.form.Resep[i].ID_AturanPakai, catatan: data.form.Resep[i].Catatan, nama_obat: data.form.Resep[i].Nama_Obat, aturan_pakai: data.form.Resep[i].Kode_AturanPakai, satuan: data.form.Resep[i].Nama_Satuan }, false)
      }
      for (let i = 0; i < data.form.Resep.length; i += 1) {
        unregister(`resep[${i}].value`);
      }
    }
  }, [])

  const { fields, append, remove, insert } = useFieldArray({ name: 'resep', control })

  const handleDoctorSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue('ttd-dokter-mata', image.Signature);
      setValue('dokter-mata-dokter', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('ttd-dokter-mata', image.Signature);
      setValue('dokter-mata-dokter', image.ID_Karyawan);
    }
  }

  const handleDeleteMed = (index: any) => {
    remove(index);
  }

  const handleAddMed = () => {
    append({ 'nama-obat': '', jumlah: '', 'aturan-pakai': '', catatan: '', satuan: '' })
  }

  const handleChangeMed = (val: any, i: number) => {
    fields[i].satuan = val.satuan;
    insert(i, fields[i]);
    remove(i);
  }

  const handleImageOD = (image: string) => {
    setValue("gambar-mata-od", image)
  }

  const handleImageOS = (image: string) => {
    setValue("gambar-mata-os", image)
  }

  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId='3'>
        <FormGroup className='form-group' row>
          <Col>
            <Label style={{ fontSize: '13pt', marginTop: '30px' }}><b>Pemeriksaan Dokter Mata (Opthalmologist)</b></Label>
          </Col>
        </FormGroup>
        <FormGroup className='form-group'>
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
                    initialImage={(data && data.form && data.form.Gambar_Mata_OD && data.form.Gambar_Mata_OD !== '') ? data.form.Gambar_Mata_OD : undefined}
                    formName='emergency-room/assessment-ugd'
                    component='assessmen_ugd_gambar_mata_od'
                    onSaved={(image: string) => handleImageOD(image)}
                  />
                  <Input
                    id="gambar-mata-od"
                    type="hidden"
                    name="gambar-mata-od"
                    innerRef={register()}
                    invalid={errors["gambar-mata-od"] && true}
                  />
                </td>
                <td>
                  <EyeImage
                    initialImage={(data && data.form && data.form.Gambar_Mata_OS && data.form.Gambar_Mata_OS !== '') ? data.form.Gambar_Mata_OS : undefined}
                    formName='ugd/assessment-ugd'
                    component='assessmen_ugd_gambar_mata_os'
                    onSaved={(image: string) => handleImageOS(image)}
                  />
                  <Input
                    id="gambar-mata-os"
                    type="hidden"
                    name="gambar-mata-os"
                    innerRef={register()}
                    invalid={errors["gambar-mata-os"] && true}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </FormGroup>
        <FormGroup className='form-group'>
          <Table borderless style={{ width: '100%' }}>
            <tr>
              <td style={{ width: '23%' }}>
                <b>Posisi</b>
              </td>
              <td style={{ width: '40%' }}>
                <TextInput
                  style={{ marginTop: '-20px' }}
                  name="dokter-mata-posisi-od"
                  {...{ register, errors }}
                />
              </td>
              <td style={{ width: '41%' }}>
                <TextInput
                  style={{ marginTop: '-20px', marginLeft: '-50px', width: '350px' }}
                  name="dokter-mata-posisi-os"
                  {...{ register, errors }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <b>Pergerakan</b>
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px' }}
                  name="dokter-mata-pergerakan-od"
                  {...{ register, errors }}
                />
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px', marginLeft: '-50px', width: '350px' }}
                  name="dokter-mata-pergerakan-os"
                  {...{ register, errors }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ textAlignLast: 'left' }}>
                <b>Palpebra Superior</b>
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px' }}
                  name="dokter-mata-palpebra-superior-od"
                  {...{ register, errors }}
                />
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px', marginLeft: '-50px', width: '350px' }}
                  name="dokter-mata-palpebra-superior-os"
                  {...{ register, errors }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ textAlignLast: 'left' }}>
                <b>Conj. Tarsal Superior</b>
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px' }}
                  name="dokter-mata-conj-tarsal-superior-od"
                  {...{ register, errors }}
                />
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px', marginLeft: '-50px', width: '350px'}}
                  name="dokter-mata-conj-tarsal-superior-os"
                  {...{ register, errors }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ textAlignLast: 'left' }}>
                <b>Conj. Tarsal Inferior</b>
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px' }}
                  name="dokter-mata-conj-tarsal-inferior-od"
                  {...{ register, errors }}
                />
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px', marginLeft: '-50px', width: '350px'}}
                  name="dokter-mata-conj-tarsal-inferior-os"
                  {...{ register, errors }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <b>Conj. Bulbi</b>
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px' }}
                  name="dokter-mata-conj-bulbi-od"
                  {...{ register, errors }}
                />
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px', marginLeft: '-50px', width: '350px' }}
                  name="dokter-mata-conj-bulbi-os"
                  {...{ register, errors }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <b>Cornea</b>
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px'}}
                  name="dokter-mata-cornea-od"
                  {...{ register, errors }}
                />
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px', marginLeft: '-50px', width: '350px'}}
                  name="dokter-mata-cornea-os"
                  {...{ register, errors }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <b>C.O.A</b>
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px'}}
                  name="dokter-mata-coa-od"
                  {...{ register, errors }}
                />
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px', marginLeft: '-50px', width: '350px'}}
                  name="dokter-mata-coa-os"
                  {...{ register, errors }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <b>Pupil</b>
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px'}}
                  name="dokter-mata-pupil-od"
                  {...{ register, errors }}
                />
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px', marginLeft: '-50px', width: '350px'}}
                  name="dokter-mata-pupil-os"
                  {...{ register, errors }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <b>Iris</b>
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px'}}
                  name="dokter-mata-iris-od"
                  {...{ register, errors }}
                />
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px', marginLeft: '-50px', width: '350px'}}
                  name="dokter-mata-iris-os"
                  {...{ register, errors }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <b>Lensa</b>
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px'}}
                  name="dokter-mata-lensa-od"
                  {...{ register, errors }}
                />
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px', marginLeft: '-50px', width: '350px'}}
                  name="dokter-mata-lensa-os"
                  {...{ register, errors }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <b>Vitreous</b>
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px'}}
                  name="dokter-mata-vitreous-od"
                  {...{ register, errors }}
                />
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px', marginLeft: '-50px', width: '350px'}}
                  name="dokter-mata-vitreous-os"
                  {...{ register, errors }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <b>Funduscopy</b>
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px'}}
                  name="dokter-mata-funduscopy-od"
                  {...{ register, errors }}
                />
              </td>
              <td>
                <TextInput
                  style={{ marginTop: '-20px', marginLeft: '-50px', width: '350px'}}
                  name="dokter-mata-funduscopy-os"
                  {...{ register, errors }}
                />
              </td>
            </tr>
          </Table>
        </FormGroup>
        <FormGroup className='form-group'>
          <Table borderless style={{ width: '100%' }} className='align-items-center'>
            <tr>
              <td>
                <b>Diagnosa</b>
              </td>
              <td style={{width:'77%'}}>
                <Row>
                  <Col>
                    <Input
                      id="dokter-mata-diagnosa"
                      type="text"
                      name="dokter-mata-diagnosa"
                      innerRef={register({ required: true }) as any}
                      invalid={errors.Dokter_Mata_Diagnosa && true}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td>
                <b>Terapi</b>
              </td>
              <td style={{width:'77%'}}>
                <Row>
                  <Col>
                    <Input
                      id="dokter-mata-terapi"
                      type="text"
                      name="dokter-mata-terapi"
                      innerRef={register({ required: true }) as any}
                      invalid={errors.Dokter_Mata_Terapi && true}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td>
                <b>Rencana Pengobatan</b>
              </td>
              <td style={{width:'77%'}}>
                <Row>
                  <Col>
                    <Input
                      id="dokter-mata-rencana-pengobatan"
                      type="text"
                      name="dokter-mata-rencana-pengobatan"
                      innerRef={register({ required: true }) as any}
                      invalid={errors.Dokter_Mata_Rencana_Pengobatan && true}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                {
                  data && data.formFarmasi && data.formFarmasi.Status_Tebus && data.formFarmasi.Status_Tebus === '1' ? (
                    <>
                      <Table bordered style={{ width: '50%' }}>
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
                                        options={data && data.obat.map((med: Medicine) => ({ label: med.Nama_Inventory, value: med.Kode_Inventory, satuan: med.Nama_Satuan }))}
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
                                    name={`resep[${i}].jumlah`}
                                    defaultValue={rec.jumlah}
                                    innerRef={register()}
                                    style={{ width: '100px' }}
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
                          <td className='pt-2' style={{ width: '25%' }}><b>Aturan Pakai</b></td>
                          <td className='pt-2'style={{ width: '30%' }}><b>Catatan</b></td>
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
                                          options={data && data.obat.map((med: Medicine) => ({ label: med.Nama_Inventory, value: med.Kode_Inventory, satuan: med.Nama_Satuan }))}
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
                                    name={`resep[${i}].jumlah`}
                                    defaultValue={rec.jumlah}
                                    innerRef={register()}
                                    style={{ width: '40px' }}
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
                                          options={data && data.aturan_pakai.map((med: HowToUse) => ({ label: med.Kode, value: med.Kode, id: med.ID_AturanPakai }))}
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
                    <Button style={{ padding: '4px', marginTop: '8px' }} color='primary' type='button' disabled>
                      <Plus size={15} />
                    Tambah Obat
                    </Button>
                  ) : (
                    <Button style={{ padding: '4px', marginTop: '8px' }} color='primary' type='button' onClick={() => handleAddMed()}>
                      <Plus size={15} />
                    Tambah Obat
                    </Button>
                  )
                }
              </td>
            </tr>
            {
              data && data.formFarmasi && data.formFarmasi.Status_Tebus && data.formFarmasi.Status_Tebus === '1' && (
                <tr>
                  <td colSpan={2}>
                    <Label className='text-danger mt-3'>
                    *Resep yang sudah ditebus
                    </Label>
                    <Table bordered style={{ width: '100%' }}>
                      <thead>
                        <tr style={{ textAlign: 'center' }}>
                          <td style={{ width: '5%' }}><b>No</b></td>
                          <td style={{ width: '30%' }}><b>{`Nama & Dosis`}</b></td>
                          <td style={{ width: '10%' }}><b>Satuan</b></td>
                          <td><b>Jumlah</b></td>
                          <td style={{ width: '35%' }}><b>Aturan Pakai</b></td>
                          <td style={{ width: '32%' }}><b>Catatan</b></td>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data && data.formFarmasi && data.formFarmasi.Daftar_Tebus && Array.isArray(data.formFarmasi.Daftar_Tebus) && data.formFarmasi.Daftar_Tebus.length > 0 && data.formFarmasi.Daftar_Tebus.map((item: IDaftarTebus, key: number) => (
                            <tr key={key}>
                              <td>{`${key + 1}`}</td>
                              <td>{item.Nama_Obat}</td>
                              <td>{item.Nama_Satuan}</td>
                              <td>{item.Jumlah}</td>
                              <td>{item.Kode_AturanPakai}</td>
                              <td>{item.Catatan}</td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </Table>
                  </td>
                </tr>
              )
            }
            <tr>
              <td>
                <b>Anjuran</b>
              </td>
              <td style={{width:'77%'}}>
                <Row>
                  <Col>
                    <Input
                      id="dokter-mata-anjuran"
                      type="text"
                      name="dokter-mata-anjuran"
                      innerRef={register({ required: true }) as any}
                      invalid={errors.Dokter_Mata_Anjuran && true}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
          </Table>
        </FormGroup>
        <FormGroup>
          <Row className="mt-2">
            <Col>
              <Signature
                label="Dokter Pemeriksa"
                type="picker"
                additionalLabel={(data && data.form && data.form.Nama_Dokter_Mata_Dokter && data.form.Nama_Dokter_Mata_Dokter !== '') ? data.form.Nama_Dokter_Mata_Dokter : undefined}
                initialImage={(data && data.form && data.form.TTD_Dokter_Mata && data.form.TTD_Dokter_Mata !== '') ? data.form.TTD_Dokter_Mata : undefined}
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
                type="hidden"
                name="dokter-mata-dokter"
                innerRef={register()}
                invalid={errors['pengkajian-dokter'] && true}
              />
              <Input
                type="hidden"
                name="ttd-dokter-mata"
                innerRef={register()}
                invalid={errors['ttd-dokter-mata'] && true}
              />
            </Col>
          </Row>
        </FormGroup>
      </TabPane>
    </TabContent>
  )
}

export default OphthalmologistExaminationForm;
