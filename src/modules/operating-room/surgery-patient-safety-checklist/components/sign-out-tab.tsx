import { Signature } from "@src/shared/signature/components";
import { useEffect, useState } from "react";
import {Button, Col, FormGroup, Input, Label, Row, TabContent, Table, TabPane} from "reactstrap";
import { SafetyChecklist } from "../models/safety-checklist.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { SubmitButton } from "@src/shared/button";
import {IPdfModel} from '@shared/pdf';

const SignOutTab = (props: { data: SafetyChecklist, register: any, errors: any, getValues: any, setValue: any, activeTab: string, processing: boolean, defaultPattern: string | undefined }) => {
  const { data, register, errors, getValues, setValue, activeTab, processing, defaultPattern } = props;

  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);

  const { pdf } = useAppSelector(state => state.safetyChecklist);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);

  const [signOutNamaTindakan, setSignOutNamaTindakan] = useState<string | undefined>(`${data?.form?.Sign_Out_Nama_Tindakan}`);
  const [signOutKelengkapanAlat, setSignOutKelengkapanAlat] = useState<string | undefined>(`${data?.form?.Sign_Out_Kelengkapan_Alat}`);
  const [signOutPelabelanSpesimen, setSignOutPelabelanSpesimen] = useState<string | undefined>(`${data?.form?.Sign_Out_Pelabelan_Spesimen}`);
  const [signOutMasalahPeralatan, setSignOutMasalahPeralatan] = useState<string | undefined>(`${data?.form?.Sign_Out_Masalah_Peralatan}`);
  const [signOutCatatanKhusus, setSignOutCatatanKhusus] = useState<string | undefined>(`${data?.form?.Sign_Out_Catatan_Khusus}`);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  useEffect(() => {
    setSignOutNamaTindakan(`${data?.form?.Sign_Out_Nama_Tindakan}`);
    setSignOutKelengkapanAlat(`${data?.form?.Sign_Out_Kelengkapan_Alat}`);
    setSignOutPelabelanSpesimen(`${data?.form?.Sign_Out_Pelabelan_Spesimen}`);
    setSignOutMasalahPeralatan(`${data?.form?.Sign_Out_Masalah_Peralatan}`);
    setSignOutCatatanKhusus(`${data?.form?.Sign_Out_Catatan_Khusus}`);
  }, [data]);

  useEffect(() => {
    if (defaultPattern === '1') {
      setValue('sign_out_name_action', '1');
      setSignOutNamaTindakan('1');
      setValue('sign_out_equipment_tools', '1');
      setSignOutKelengkapanAlat('1');
      setValue('sign_out_labeling_specimen', '1');
      setSignOutPelabelanSpesimen('1');
      setValue('sign_out_equipment_problem', '0');
      setSignOutMasalahPeralatan('0');
      setValue('sign_out_special_notes', '0');
      setSignOutCatatanKhusus('0');
    } else if (defaultPattern === '0') {
      setValue('sign_out_name_action', undefined);
      setSignOutNamaTindakan(undefined);
      setValue('sign_out_equipment_tools', undefined);
      setSignOutKelengkapanAlat(undefined);
      setValue('sign_out_labeling_specimen', undefined);
      setSignOutPelabelanSpesimen(undefined);
      setValue('sign_out_equipment_problem', undefined);
      setSignOutMasalahPeralatan(undefined);
      setValue('sign_out_special_notes', undefined);
      setSignOutCatatanKhusus(undefined);
    }
  }, [defaultPattern])

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleEyeDoctorSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue('sign_out_signed_eye', image.Signature);
      setValue('sign_out_id_eye', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('sign_out_signed_eye', image.Signature);
      setValue('sign_out_id_eye', image.ID_Karyawan);
    }
  }

  const handleDoctorSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue('sign_out_signed_doctor', image.Signature);
      setValue('sign_out_id_doctor', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('sign_out_signed_doctor', image.Signature);
      setValue('sign_out_id_doctor', image.ID_Karyawan);
    }
  }

  const handleAnesthesiaSigned = (image: SignatureModel) => {
    setValue('sign_out_signed_stylist', image.Signature);
    setValue('sign_out_id_stylist', image.ID_Karyawan);
  }

  const handleNurseSigned = (image: SignatureModel) => {
    setValue('sign_out_signed_nurse', image.Signature);
    setValue('sign_out_id_nurse', image.ID_Karyawan);
  }

  const handleCircularSigned = (image: SignatureModel) => {
    setValue('sign_out_signed_circular', image.Signature);
    setValue('sign_out_id_circular', image.ID_Karyawan);
  }
  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId='3'>
        <Row className="align-items-center">
          <Col sm='2'>
            <Label for="sign_out_time">
              Waktu
            </Label>
          </Col>
          <Col sm='3'>
            <Input
              id="sign_out_time"
              type="time"
              name="sign_out_time"
              defaultValue={(data && data.form && data.form.Sign_Out_Waktu) ? data.form.Sign_Out_Waktu : ''}
              innerRef={register({ required: true })}
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Table>
            <tbody>
              <tr>
                <td style={{ width: '35%' }}>
                  <Row>
                    <Col>
                      <Label>Di Dalam Ruangan</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '65%' }}>
                  <Row>
                    <Col style={{ marginLeft: '-90px'}}>
                      <Input
                        id="sign-out-room-nurse"
                        type="checkbox"
                        name="sign_out_room_nurse"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.form && data.form.Sign_Out_Ruangan_Perawat === 1)}
                        value="1"
                        innerRef={register('sign_out_room_nurse')}
                      />{' '}
                      <Label>Perawat</Label>
                    </Col>
                    <Col>
                      <Input
                        id="sign-out-room-stylist"
                        type="checkbox"
                        name="sign_out_room_stylist"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.form && data.form.Sign_Out_Ruangan_Penata === 1)}
                        value="1"
                        innerRef={register('sign_out_room_stylist')}
                      />{' '}
                      <Label>Perawat Anestesi</Label>
                    </Col>
                    <Col>
                      <Input
                        id="sign-out-room-doctor"
                        type="checkbox"
                        name="sign_out_room_doctor"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.form && data.form.Sign_Out_Ruangan_Dokter === 1)}
                        value="1"
                        innerRef={register('sign_out_room_doctor')}
                      />{' '}
                      <Label>Dokter Anestesi</Label>
                    </Col>
                    <Col>
                      <Input
                        id="sign-out-room-surgical"
                        type="checkbox"
                        name="sign_out_room_surgical"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.form && data.form.Sign_Out_Ruangan_Bedah === 1)}
                        value="1"
                        innerRef={register('sign_out_room_surgical')}
                      />{' '}
                      <Label>Dokter Bedah</Label>
                    </Col>
                  </Row>
                </td>
              </tr>

              <tr>
                <td style={{ width: '15%' }}>
                  <Row className="mt-1">
                    <Col>
                      <Label>Secara Verbal Perawat Memastikan Nama Tindakan</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '65%' }}>
                  <Row>
                    <Col sm='3'>
                      <Input
                        id="sign-out-name-action-1"
                        type="radio"
                        name="sign_out_name_action"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setSignOutNamaTindakan('1');
                        }}
                        // defaultChecked={data && data.form && data.form.Sign_Out_Nama_Tindakan === 1}
                        checked={(signOutNamaTindakan === '1')}
                        value="1"
                        innerRef={register("sign_out_name_action")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col>
                      <Input
                        type="radio"
                        name="sign_out_name_action"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setSignOutNamaTindakan('0');
                        }}
                        checked={(signOutNamaTindakan === '0')}
                        value="0"
                        innerRef={register("sign_out_name_action")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td style={{ width: '15%' }}>
                  <Row className="mt-1">
                    <Col>
                      <Label>Kelengkapan Alat, Jumlah Kasa dan Jarum</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '65%' }}>
                  <Row>
                    <Col sm='3'>
                      <Input
                        type="radio"
                        name="sign_out_equipment_tools"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setSignOutKelengkapanAlat('1');
                        }}
                        // defaultChecked={data && data.form && data.form.Sign_Out_Kelengkapan_Alat === 1}
                        checked={(signOutKelengkapanAlat === '1')}
                        value="1"
                        innerRef={register("sign_out_equipment_tools")}
                      />{' '}
                      <Label>Lengkap</Label>
                    </Col>
                    <Col>
                      <Input
                        type="radio"
                        name="sign_out_equipment_tools"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setSignOutKelengkapanAlat('0');
                        }}
                        checked={(signOutKelengkapanAlat === '0')}
                        value="0"
                        innerRef={register("sign_out_equipment_tools")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td style={{ width: '15%' }}>
                  <Row className="mt-1">
                    <Col>
                      <Label>Pelabelan Spesimen (Baca Label Spesimen dan Nama Pasien Dengan Keras)</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '65%' }}>
                  <Row>
                    <Col sm='3'>
                      <Input
                        type="radio"
                        name="sign_out_labeling_specimen"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setSignOutPelabelanSpesimen('1');
                        }}
                        // defaultChecked={data && data.form && data.form.Sign_Out_Pelabelan_Spesimen === 1}
                        checked={(signOutPelabelanSpesimen === '1')}
                        value="1"
                        innerRef={register("sign_out_labeling_specimen")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col>
                      <Input
                        type="radio"
                        name="sign_out_labeling_specimen"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setSignOutPelabelanSpesimen('0');
                        }}
                        checked={(signOutPelabelanSpesimen === '0')}
                        value="0"
                        innerRef={register("sign_out_labeling_specimen")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td style={{ width: '15%' }}>
                  <Row className="mt-1">
                    <Col>
                      <Label>Apakah Ada Masalah Peralatan Yang Perlu Disampaikan ?</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '65%' }}>
                  <Row>
                    <Col sm='3'>
                      <Input
                        type="radio"
                        name="sign_out_equipment_problem"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setSignOutMasalahPeralatan('1');
                        }}
                        checked={(signOutMasalahPeralatan === '1')}
                        value="1"
                        innerRef={register("sign_out_equipment_problem")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col>
                      <Input
                        type="radio"
                        name="sign_out_equipment_problem"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setSignOutMasalahPeralatan('0');
                        }}
                        // defaultChecked={data && data.form && data.form.Sign_Out_Masalah_Peralatan === 0}
                        checked={(signOutMasalahPeralatan === '0')}
                        value="0"
                        innerRef={register("sign_out_equipment_problem")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                  </Row>
                </td>
              </tr>
              <h4 className="mt-2">Untuk Dokter Bedah, Dokter Anestesi dan Perawat</h4>
              <tr>
                <td style={{ width: '15%' }}>
                  <Row>
                    <Col>
                      <Label>Apakah Ada Catatan Khusus Untuk Proses Recovery dan Penanganan Perawatan Pasien Ini ?</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '65%' }}>
                  <Row>
                    <Col sm='3'>
                      <Input
                        type="radio"
                        name="sign_out_special_notes"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setSignOutCatatanKhusus('1');
                        }}
                        checked={(signOutCatatanKhusus === '1')}
                        value="1"
                        innerRef={register("sign_out_special_notes")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>

                    <Col>
                      <Input
                        type="radio"
                        name="sign_out_special_notes"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setSignOutCatatanKhusus('0');
                        }}
                        // defaultChecked={data && data.form && data.form.Sign_Out_Catatan_Khusus === 0}
                        checked={(signOutCatatanKhusus === '0')}
                        value="0"
                        innerRef={register("sign_out_special_notes")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                  </Row>
                </td>
              </tr>
            </tbody>
          </Table>

          <Row className="mt-2">
            <Col>
              <Signature
                label="Dokter Spesialis Mata"
                type="picker"
                additionalLabel={(data && data.form && data.form.Sign_Out_Nama_Mata) ? data.form.Sign_Out_Nama_Mata : ''}
                initialImage={(data && data.form && data.form.Sign_Out_TTD_Mata && data.form.Sign_Out_TTD_Mata !== '') ? data.form.Sign_Out_TTD_Mata : undefined}
                persons={doctors}
                unit="dokter"
                onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                  if (isFormDoctor) {
                    handleEyeDoctorSigned(assigner, isFormDoctor)
                  }
                  if (!isFormDoctor) {
                    handleEyeDoctorSigned(assigner)
                  }
                }}
              />
              <Input
                type="hidden"
                name="sign_out_signed_eye"
                innerRef={register()}
                invalid={errors.sign_out_signed_eye && true}
              />
              <Input
                type="hidden"
                name="sign_out_id_eye"
                innerRef={register()}
                invalid={errors.sign_out_id_eye && true}
              />
            </Col>
            <Col>
              <Signature
                label="Dokter Anestesi"
                type="picker"
                additionalLabel={(data && data.form && data.form.Sign_Out_Nama_Dokter) ? data.form.Sign_Out_Nama_Dokter : ''}
                initialImage={(data && data.form && data.form.Sign_Out_TTD_Dokter && data.form.Sign_Out_TTD_Dokter !== '') ? data.form.Sign_Out_TTD_Dokter : undefined}
                persons={doctors}
                unit="dokter"
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
                name="sign_out_signed_doctor"
                innerRef={register()}
                invalid={errors.sign_out_signed_doctor && true}
              />
              <Input
                type="hidden"
                name="sign_out_id_doctor"
                innerRef={register()}
                invalid={errors.sign_out_id_doctor && true}
              />
            </Col>
            <Col>
              <Signature
                label="Perawat Anestesi"
                type="picker"
                additionalLabel={(data && data.form && data.form.Sign_Out_Nama_Penata) ? data.form.Sign_Out_Nama_Penata : ''}
                initialImage={(data && data.form && data.form.Sign_Out_TTD_Penata && data.form.Sign_Out_TTD_Penata !== '') ? data.form.Sign_Out_TTD_Penata : undefined}
                persons={nurses}
                onSigned={(assigner: SignatureModel) => handleAnesthesiaSigned(assigner)}
              />
              <Input
                type="hidden"
                name="sign_out_signed_stylist"
                innerRef={register()}
                invalid={errors.sign_out_signed_stylist && true}
              />
              <Input
                type="hidden"
                name="sign_out_id_stylist"
                innerRef={register()}
                invalid={errors.sign_out_id_stylist && true}
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Signature
                label="Perawat Instrumen"
                type="picker"
                additionalLabel={(data && data.form && data.form.Sign_Out_Nama_Perawat) ? data.form.Sign_Out_Nama_Perawat : ''}
                initialImage={(data && data.form && data.form.Sign_Out_TTD_Perawat && data.form.Sign_Out_TTD_Perawat !== '') ? data.form.Sign_Out_TTD_Perawat : undefined}
                persons={nurses}
                onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)}
              />
              <Input
                type="hidden"
                name="sign_out_signed_nurse"
                innerRef={register()}
                invalid={errors.sign_out_signed_nurse && true}
              />
              <Input
                type="hidden"
                name="sign_out_id_nurse"
                innerRef={register()}
                invalid={errors.sign_out_id_nurse && true}
              />
            </Col>
            <Col>
              <Signature
                label="Perawat Sirkuler"
                type="picker"
                additionalLabel={(data && data.form && data.form.Sign_Out_Nama_Sirkuler) ? data.form.Sign_Out_Nama_Sirkuler : ''}
                initialImage={(data && data.form && data.form.Sign_Out_TTD_Sirkuler && data.form.Sign_Out_TTD_Sirkuler !== '') ? data.form.Sign_Out_TTD_Sirkuler : undefined}
                persons={nurses}
                onSigned={(assigner: SignatureModel) => handleCircularSigned(assigner)}
              />
              <Input
                type="hidden"
                name="sign_out_signed_circular"
                innerRef={register()}
                invalid={errors.sign_out_signed_circular && true}
              />
              <Input
                type="hidden"
                name="sign_out_id_circular"
                innerRef={register()}
                invalid={errors.sign_out_id_circular && true}
              />
            </Col>
          </Row>
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
        </Row>
      </TabPane>
    </TabContent>
  )
}

export default SignOutTab