import { Button, Col, Form, FormGroup, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane, Table } from "reactstrap";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { CreateConsultationSheetRequest, PdfConsultationSheetRequest, UpdateConsultationSheetRequest } from "../requests";
import { DoctorPreliminaryStudyModel, HowToUse, IPrescription, Medicine } from "../../doctor-preliminary-study/models/doctor-preliminary-study.model";
import { Fragment, useEffect, useState } from "react";
import { ISignatureModel, SignatureModel } from "@src/shared/signature/models/signature.model";
import { Plus, Trash } from "react-feather";
import { AppRequest } from "@src/shared/request";
import { ArrayPrescription } from "../requests/create-consultation-sheet.request";
import BaseSelect from 'react-select';
import { ConsultationSheetService } from "../services";
import FixRequiredSelect from "@src/shared/input/components/FixRequiredSelect";
import { IConsultationSheetForm } from "../models/consultation-sheet.model";
import { IDoctorModel } from "@src/shared/doctor";
import { MedsPackage } from "@src/shared/meds-package/components";
import { Signature } from "@src/shared/signature/components";
import { SubmitButton } from "@src/shared/button";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const ConsultationSheetForm = (props: { action: 'create' | 'update', mode: 'new' | 'reply', data?: IConsultationSheetForm, preliminary: DoctorPreliminaryStudyModel, onCancel: any, onSuccessSubmit: any }) => {
  const { data, action, mode, preliminary, onCancel, onSuccessSubmit } = props;
  const { treatment } = useAppSelector(state => state.patient);
  const { userData } = useAppSelector(state => state.auth);
  const { doctors } = useAppSelector(state => state.doctor);
  const { cpptData } = useAppSelector(state => state.consultationSheet);
  const [activeTab, setActiveTab] = useState<string>('1');
  const [processing, setProcessing] = useState<boolean>(false);
  const [recipe, setRecipe] = useState(data && data.Balas_Resep && Array.isArray(data.Balas_Resep) ? data.Balas_Resep : [])
  const [eksternal, setEksternal] = useState<boolean>(!!(data && data.Rumah_Sakit_Tujuan && data.Rumah_Sakit_Tujuan === 'eksternal'))

  const convertDatetimeToUTC = (date?: any) => {
    const d = date ? new Date(date) : new Date();
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}T${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }

  const toggle = (tab: string) => {
    if (activeTab && activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const { register, errors, setValue, handleSubmit, control } = useForm({
    mode: 'onChange',
    defaultValues: {
      tab: data && data.Tab ? data.Tab : '1',
      rumah_sakit_tujuan: data && data.Rumah_Sakit_Tujuan ? data.Rumah_Sakit_Tujuan : '',
      dokter_konsul_eksternal: data && data.Dokter_Konsul_Nama_Eksternal ? data.Dokter_Konsul_Nama_Eksternal : '',
      tanggal_konsul: data && data.Tanggal_Konsul ? data.Tanggal_Konsul : convertDatetimeToUTC(),
      diagnosa: data && data.Diagnosa ? data.Diagnosa : cpptData && cpptData.Data_A ? cpptData.Data_A : '',
      terapi: data && data.Terapi ? data.Terapi : cpptData && cpptData.Data_P ? cpptData.Data_P : '',
      yth_dokter_konsul_id: data && data.Yth_Dokter_Konsul_Id ? data.Yth_Dokter_Konsul_Id : '',
      status_konsultasi: data && data.Status_Konsultasi ? data.Status_Konsultasi : '',
      ttd_dokter_konsultasi: data && data.TTD_Dokter_Konsultasi ? data.TTD_Dokter_Konsultasi : '',
      id_dokter_konsultasi: data && data.ID_Dokter_Konsultasi ? data.ID_Dokter_Konsultasi : '',
      cppt_id: cpptData && cpptData?.ID ? cpptData.ID : '',
      tanggal_balas: data && data.Tanggal_Balas ? data.Tanggal_Balas : mode === 'reply' ? convertDatetimeToUTC() : '',
      anjuran: data && data.Anjuran ? data.Anjuran : '',
      yth_dokter_balas_id: data && data.Yth_Dokter_Balas_Id ? data.Yth_Dokter_Balas_Id : data && data.ID_Dokter_Konsultasi && mode === 'reply' ? data.ID_Dokter_Konsultasi : '',
      ttd_dokter_balas_konsultasi: data && data.TTD_Dokter_Balas_Konsultasi ? data.TTD_Dokter_Balas_Konsultasi : '',
      id_dokter_balas_konsultasi: data && data.ID_Dokter_Balas_Konsultasi ? data.ID_Dokter_Balas_Konsultasi : '',
    },
  });

  const { fields, append, remove, insert } = useFieldArray({ name: 'resep', control })

  useEffect(() => {
    if (recipe && Array.isArray(recipe)) {
      const destructured = recipe.map((item: IPrescription) => {
        return {
          meds_name: item.ID_Obat,
          total: item.Jumlah,
          how_to_use: item.ID_AturanPakai,
          notes: item.Catatan,
          nama_obat: item.Nama_Obat,
          aturan_pakai: item.Kode_AturanPakai,
          satuan: item.Nama_Satuan,
        }
      })
      append(destructured, false);
    }
  }, [recipe])

  const handleAddMedsFromPackage = (items: Array<IPrescription>) => {
    const newRecipe = items.map((item: IPrescription) => {
      return {
        meds_name: item.ID_Obat,
        total: item.Jumlah,
        how_to_use: item.ID_AturanPakai,
        notes: item.Catatan,
        nama_obat: item.Nama_Obat,
        aturan_pakai: item.Kode_AturanPakai,
        satuan: item.Nama_Satuan,
      }
    })
    append(newRecipe);
  }

  const handleDeleteMed = (index: any) => {
    remove(index);
  }

  const handleAddMed = () => {
    append({ meds_name: '', total: '', how_to_use: '', notes: '', satuan: '' })
  }

  const handleChangeMed = (val: any, i: number) => {
    fields[i].satuan = val.satuan;
    insert(i, fields[i]);
    remove(i);
  }

  const handleNewConsultSigned = (assigner: ISignatureModel, isFormDoctor?: boolean) => {
    setValue('ttd_dokter_konsultasi', assigner.Signature);
    setValue('id_dokter_konsultasi', assigner.ID_Karyawan);
    if (isFormDoctor) {
      document.getElementById('submit-button')?.click();
    }
  }

  const handleReplyConsultSigned = (assigner: ISignatureModel, isFormDoctor?: boolean) => {
    setValue('ttd_dokter_balas_konsultasi', assigner.Signature);
    setValue('id_dokter_balas_konsultasi', assigner.ID_Karyawan);
    if (isFormDoctor) {
      document.getElementById('submit-button')?.click();
    }
  }

  const handleChangeHospital = (e: any) => {
    if (e.target.value === 'internal') {
      setEksternal(false);
    }
    if (e.target.value === 'eksternal') {
      setEksternal(true);
    }
  }

  const handleSubmitForm = (value: any) => {
    if (!treatment) {
      return;
    }
    setProcessing(true)
    const resep = value.resep;
    const prescriptionModel = ArrayPrescription.createFromForm(resep);
    const appRequest = AppRequest.createFromStore(treatment);
    if (!data || (action === 'create')) {
      const params = CreateConsultationSheetRequest.createFromJson({ ...value, ...appRequest, ...prescriptionModel })
      ConsultationSheetService().create(params)
        .then((resp: any) => {
          const data = resp.data.data;
          const paramsPdf = PdfConsultationSheetRequest.createPdfRequest({ ...data, pasien: treatment.Pasien, nomor_mr: treatment.No_MR }, data.EMR_ID);
          ConsultationSheetService().pdfNew(paramsPdf)
            .then(() => {
              setProcessing(false)
              onSuccessSubmit()
            })
        })
    } else {
      const params = UpdateConsultationSheetRequest.createFromJson({ ...value, ...appRequest, ...prescriptionModel, id: data.ID, emr_id: data.EMR_ID })
      ConsultationSheetService().update(params)
        .then((resp: any) => {
          const data = resp.data.data;
          const paramsPdf = PdfConsultationSheetRequest.createPdfRequest({ ...data, pasien: treatment.Pasien, nomor_mr: treatment.No_MR }, data.EMR_ID);
          ConsultationSheetService().pdfNew(paramsPdf)
            .then(() => {
              setProcessing(false)
              onSuccessSubmit()
            })
        })
    }
  }


  return (
    <Fragment>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={(activeTab && activeTab === '1') ? 'active' : ''}
              onClick={() => toggle('1')}
            >
              Lembar Konsultasi
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink
              className={(activeTab && activeTab === '2') ? 'active' : ''}
              onClick={() => toggle('2')}
            >
              Unggah Lembar Rujukan Dari Eksternal
            </NavLink>
          </NavItem> */}
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId='1'>
            <div className={`border align-items-center my-1 ${mode === 'reply' ? 'disabled-div' : ''}`}>
              <Row className="mt-1">
                <Col className="text-center">
                  <Label className="text-center fw-bolder fs-4">Konsultasi</Label>
                  <hr/>
                </Col>
              </Row>
              <FormGroup row className="align-items-center ms-2 mt-1">
                <Col sm='2'>
                  <Label>Tanggal Konsul</Label>
                </Col>
                <Col sm='3'>
                  <Input
                    type="datetime-local"
                    id="tanggal_konsul"
                    name="tanggal_konsul"
                    innerRef={register({ required: true })}
                    invalid={errors.tanggal_konsul && true}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="align-items-center ms-2">
                <Col sm='2'>
                  <Label>Rumah Sakit Tujuan</Label>
                </Col>
                <Col sm='2'>
                  <Input
                    type="radio"
                    name="rumah_sakit_tujuan"
                    className="me-1"
                    defaultChecked={!!(data && data.Rumah_Sakit_Tujuan && data.Rumah_Sakit_Tujuan === 'internal')}
                    onChange={(e) => handleChangeHospital(e)}
                    value='internal'
                    innerRef={register({ required: true })}
                  />
                  <Label>Internal</Label>
                </Col>
                <Col sm='2'>
                  <Input
                    type="radio"
                    className="me-1"
                    name="rumah_sakit_tujuan"
                    defaultChecked={!!(data && data.Rumah_Sakit_Tujuan && data.Rumah_Sakit_Tujuan === 'eksternal')}
                    onChange={(e) => handleChangeHospital(e)}
                    value='eksternal'
                    innerRef={register({ required: true })}
                  />
                  <Label>Eksternal</Label>
                </Col>
              </FormGroup>
              <FormGroup row className="align-items-center ms-2">
                <Col sm='2'>
                  <Label>Kepada Yth.</Label>
                </Col>
                <Col sm='4'>
                  {
                    !eksternal && (
                      <Input
                        type="select"
                        name="yth_dokter_konsul_id"
                        innerRef={register()}
                      >
                        <option value="" disabled>--</option>
                        {
                          doctors && Array.isArray(doctors) && doctors.map((item: IDoctorModel, key: number) => (
                            <option value={item.ID_Karyawan} key={key}>{item.Nama}</option>
                          ))
                        }
                      </Input>
                    )
                  }
                  {
                    eksternal && (
                      <Input
                        type="text"
                        name="dokter_konsul_eksternal"
                        innerRef={register({ required: false })}
                      />
                    )
                  }
                </Col>
                <Col>
                  <Input
                    name="cppt_id"
                    type='hidden'
                    innerRef={register('cppt_id')as any}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="align-items-center ms-2">
                <Col>
                  <Label>Dengan Hormat,<br/>Mohon Konsultasi / Penanganan Dibidang Teman Sejawat Terhadap Pasien Tersebut Di Atas,</Label>
                </Col>
              </FormGroup>
              <FormGroup row className="align-items-center ms-2">
                <Col sm='2'>
                  <Label>Diagnosa</Label>
                </Col>
                <Col sm='5'>
                  <Input
                    type="textarea"
                    name="diagnosa"
                    innerRef={register({ required: true })}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="align-items-center ms-2">
                <Col sm='2'>
                  <Label>Terapi</Label>
                </Col>
                <Col sm='5'>
                  <Input
                    type="textarea"
                    name="terapi"
                    style={{ height: '8rem' }}
                    innerRef={register({ required: true })}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="align-items-center ms-2">
                <Col sm='2'>
                  <Label>Tanda Tangan Dokter</Label>
                </Col>
                <Col sm='3'>
                  <Signature
                    unit="dokter"
                    label="Dokter Konsultasi"
                    additionalLabel={(data && data.Nama_TTD_Dokter_Konsultasi && data.Nama_TTD_Dokter_Konsultasi !== '') ? data.Nama_TTD_Dokter_Konsultasi : undefined}
                    type="picker"
                    initialImage={(data && data.TTD_Dokter_Konsultasi && data.TTD_Dokter_Konsultasi !== '' && !data.TTD_Dokter_Konsultasi.includes('null')) ? data.TTD_Dokter_Konsultasi : undefined}
                    defaultPerson={(userData && userData.id) ? userData.id : ''}
                    persons={doctors}
                    onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                      if (isFormDoctor) {
                        handleNewConsultSigned(assigner, isFormDoctor);
                      }
                      if (!isFormDoctor) {
                        handleNewConsultSigned(assigner);
                      }
                    }}
                  />
                  <Input
                    type="hidden"
                    name="ttd_dokter_konsultasi"
                    innerRef={register()}
                  />
                  <Input
                    type="hidden"
                    name="id_dokter_konsultasi"
                    innerRef={register()}
                  />
                </Col>
              </FormGroup>
            </div>
            <div className="border align-items-center my-1 pt-3">
              <FormGroup row className="align-items-center ms-2">
                <Col sm='2'>
                  <Label>Status Konsultasi</Label>
                </Col>
                <Col sm='2' className="align-items-center">
                  <Input
                    type="radio"
                    className="me-1"
                    name="status_konsultasi"
                    defaultChecked={!!(data && data.Status_Konsultasi && data.Status_Konsultasi === '1')}
                    value='1'
                    innerRef={register({ required: false })}
                  />
                  <Label>Ambil Alih</Label>
                </Col>
                <Col sm='2' className="align-items-center">
                  <Input
                    type="radio"
                    className="me-1"
                    name="status_konsultasi"
                    defaultChecked={!!(data && data.Status_Konsultasi && data.Status_Konsultasi === '2')}
                    value='2'
                    innerRef={register({ required: false })}
                  />
                  <Label>Konsul Saja</Label>
                </Col>
                <Col sm='2' className="align-items-center">
                  <Input
                    type="radio"
                    className="me-1"
                    name="status_konsultasi"
                    defaultChecked={!!(data && data.Status_Konsultasi && data.Status_Konsultasi === '3')}
                    value='3'
                    innerRef={register({ required: false })}
                  />
                  <Label>Rawat Bersama</Label>
                </Col>
              </FormGroup>
            </div>
            <div className={`border align-items-center my-1 ${mode === 'new' ? 'disabled-div' : ''}`}>
              <Row className="mt-1">
                <Col className="text-center">
                  <Label className="text-center fw-bolder fs-4">Balasan Konsultasi</Label>
                  <hr/>
                </Col>
              </Row>
              <FormGroup row className="align-items-center ms-2">
                <Col sm='2'>
                  <Label>Tanggal Balas</Label>
                </Col>
                <Col sm='3'>
                  <Input
                    type="datetime-local"
                    id="tanggal_balas"
                    name="tanggal_balas"
                    innerRef={register({ required: false })}
                    invalid={errors.tanggal_balas && true}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="align-items-center ms-2">
                <Col sm='2'>
                  <Label>Kepada Yth.</Label>
                </Col>
                <Col sm='4'>
                  <Input
                    type="select"
                    name="yth_dokter_balas_id"
                    innerRef={register()}
                  >
                    <option value="" disabled>--</option>
                    {
                      doctors && Array.isArray(doctors) && doctors.map((item: IDoctorModel, key: number) => (
                        <option value={item.ID_Karyawan} key={key}>{item.Nama}</option>
                      ))
                    }
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row className="align-items-center ms-2">
                <Col>
                  <Label>Dengan Hormat,<br/>Mengenai Pasien Yang Dikonsulkan, Pada Pemeriksaan Pasien Didapati,</Label>
                </Col>
              </FormGroup>
              <FormGroup row className="align-items-center ms-2">
                <Col sm='2'>
                  <Label>Anjuran</Label>
                </Col>
                <Col sm='5'>
                  <Input
                    type="textarea"
                    name="anjuran"
                    innerRef={register({ required: false })}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="mx-2">
                <Table bordered style={{ width: '100%' }}>
                  <thead>
                    <tr style={{ textAlign: 'center' }}>
                      <td style={{ width: '5%' }}><b>No</b></td>
                      <td style={{ width: '35%' }}><b>{`Nama & Dosis`}</b></td>
                      <td><b>Satuan</b></td>
                      <td><b>Jumlah</b></td>
                      <td style={{ width: '22%' }}><b>Aturan Pakai</b></td>
                      <td style={{ width: '30%' }}><b>Catatan</b></td>
                      <td style={{ width: '5%' }}></td>
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
                                name={`resep[${i}].meds_name`}
                                defaultValue={{ label: rec.nama_obat, value: rec.meds_name }}
                                render={({ onChange, name, ref }) => (
                                  <Fragment>
                                    <FixRequiredSelect
                                      {...props}
                                      required={true}
                                      name={name}
                                      defaultValue={{ label: rec.nama_obat, value: rec.meds_name }}
                                      onChange={(val: any) => {
                                        onChange(val);
                                        handleChangeMed(val, i);
                                      }}
                                      SelectComponent={BaseSelect}
                                      options={preliminary && preliminary?.obat.map((med: Medicine) => ({ label: med.Nama_Inventory, value: med.Kode_Inventory, satuan: med.Nama_Satuan }))}
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
                                name={`resep[${i}].total`}
                                defaultValue={rec.total}
                                innerRef={register()}
                                style={{ width: '40px', marginLeft: '20%' }}
                                required
                              />
                            </td>
                            <td className='pt-2'>
                              <Controller
                                control={control}
                                name={`resep[${i}].how_to_use`}
                                defaultValue={{ label: rec.aturan_pakai, value: rec.aturan_pakai, id: rec.how_to_use }}
                                render={({ onChange, name, ref }) => (
                                  <Fragment>
                                    <FixRequiredSelect
                                      {...props}
                                      required={true}
                                      name={name}
                                      defaultValue={{ label: rec.aturan_pakai, value: rec.aturan_pakai, id: rec.how_to_use }}
                                      onChange={(val: any) => {
                                        onChange(val);
                                      }}
                                      SelectComponent={BaseSelect}
                                      options={preliminary && preliminary.aturan_pakai.map((med: HowToUse) => ({ label: med.Kode, value: med.Kode, id: med.ID_AturanPakai }))}
                                    />
                                  </Fragment>
                                )}
                              />
                            </td>
                            <td className='pt-0'>
                              <Input
                                type='text'
                                name={`resep[${i}].notes`}
                                defaultValue={rec.notes}
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
              </FormGroup>
              <FormGroup className="mx-2">
                <Button style={{ padding: '4px', marginTop: '8px' }} color='primary' type='button' className='me-1' onClick={() => handleAddMed()}>
                  <Plus size={15} />
                  Tambah Obat
                </Button>
                <MedsPackage
                  data={preliminary.paket_obat ? preliminary.paket_obat : undefined}
                  allMeds={preliminary.obat ? preliminary.obat : undefined}
                  allHtu={preliminary.aturan_pakai ? preliminary.aturan_pakai : undefined}
                  onSelectPackage={(selected: any) => handleAddMedsFromPackage(selected)}
                />
              </FormGroup>
              <FormGroup row className="align-items-center ms-2">
                <Col sm='2'>
                  <Label>Tanda Tangan Dokter</Label>
                </Col>
                <Col sm='3'>
                  <Signature
                    unit='dokter'
                    label="Dokter Balas Konsultasi"
                    additionalLabel={(data && data.Nama_TTD_Dokter_Balas_Konsultasi && data.Nama_TTD_Dokter_Balas_Konsultasi !== '') ? data.Nama_TTD_Dokter_Balas_Konsultasi : undefined}
                    type="picker"
                    initialImage={(data && data.TTD_Dokter_Balas_Konsultasi && data.TTD_Dokter_Balas_Konsultasi !== '' && !data.TTD_Dokter_Balas_Konsultasi.includes('null')) ? data.TTD_Dokter_Balas_Konsultasi : undefined}
                    defaultPerson={(userData && userData.id) ? userData.id : ''}
                    persons={doctors}
                    onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                      if (isFormDoctor) {
                        handleReplyConsultSigned(assigner, isFormDoctor)
                      }
                      if (!isFormDoctor) {
                        handleReplyConsultSigned(assigner)
                      }
                    }}
                  />
                  <Input
                    type="hidden"
                    name="ttd_dokter_balas_konsultasi"
                    innerRef={register()}
                  />
                  <Input
                    type="hidden"
                    name="id_dokter_balas_konsultasi"
                    innerRef={register()}
                  />
                </Col>
              </FormGroup>
            </div>
            <FormGroup className="d-flex mb-0 justify-content-center">
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
          </TabPane>
          {/* <TabPane tabId='2'>

          </TabPane> */}
        </TabContent>
      </Form>
    </Fragment>
  )
}

export default ConsultationSheetForm;
