import { Signature } from "@src/shared/signature/components";
import { useEffect, useState } from "react";
import {Button, Col, FormGroup, Input, Label, Row, TabContent, Table, TabPane} from "reactstrap";
import { SafetyChecklist } from "../models/safety-checklist.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { SubmitButton } from "@src/shared/button";
import {IPdfModel} from '@shared/pdf';

const SignInTab = (props: { data: SafetyChecklist, register: any, errors: any, getValues: any, setValue: any, activeTab: string, processing: boolean, defaultPattern: string | undefined }) => {
  const { data, register, errors, getValues, setValue, activeTab, processing, defaultPattern } = props;

  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const { pdf } = useAppSelector(state => state.safetyChecklist);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);

  const [signInInformed, setSignInInformed] = useState<any>(`${data?.form?.Sign_In_Informed}`);
  const [signInTanda, setSignInTanda] = useState<string | undefined>(`${data?.form?.Sign_In_Tanda}`);
  const [signInAlergi, setSignInAlergi] = useState<string | undefined>(`${data?.form?.Sign_In_Alergi}`);
  const [signInPernafasan, setSignInPernafasan] = useState<string | undefined>(`${data?.form?.Sign_In_Pernafasan}`);
  const [signInPendarahan, setSignInPendarahan] = useState<string | undefined>(`${data?.form?.Sign_In_Pendarahan}`);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  useEffect(() => {
    if (data && data.form) {
      setSignInInformed(`${data?.form?.Sign_In_Informed}`);
      setSignInTanda(`${data?.form?.Sign_In_Tanda}`);
      setSignInAlergi(`${data?.form?.Sign_In_Alergi}`);
      setSignInPernafasan(`${data?.form?.Sign_In_Pernafasan}`);
      setSignInPendarahan(`${data?.form?.Sign_In_Pendarahan}`);
    }
  }, [data]);

  useEffect(() => {
    if (defaultPattern === '1') {
      setValue('sign_in_informed', '1');
      setSignInInformed('1');
      setValue('sign_in_sign', '1');
      setSignInTanda('1');
      setValue('sign_in_allergy', '0');
      setSignInAlergi('0');
      setValue('sign_in_breath', '0');
      setSignInPernafasan('0');
      setValue('sign_in_bleeding', '0');
      setSignInPendarahan('0');
    } else if (defaultPattern === '0') {
      setValue('sign_in_informed', undefined);
      setSignInInformed(undefined);
      setValue('sign_in_sign', undefined);
      setSignInTanda(undefined);
      setValue('sign_in_allergy', undefined);
      setSignInAlergi(undefined);
      setValue('sign_in_breath', undefined);
      setSignInPernafasan(undefined);
      setValue('sign_in_bleeding', undefined);
      setSignInPendarahan(undefined);
    }
  }, [defaultPattern]);

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  const handleRadioChange = (e: any) => {
    setValue(`${e.currentTarget.name}`, e.currentTarget.value);
  }

  const handleDoctorSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue('sign_in_signed_doctor', image.Signature);
      setValue('sign_in_doctor', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('sign_in_signed_doctor', image.Signature);
      setValue('sign_in_doctor', image.ID_Karyawan);
    }
  }

  const handleNurseSigned = (image: SignatureModel) => {
    setValue('sign_in_signed_nurse', image.Signature);
    setValue('sign_in_nurse', image.ID_Karyawan);
  }

  const handleAnesthesiaSigned = (image: SignatureModel) => {
    setValue('sign_in_signed_stylist', image.Signature);
    setValue('sign_in_id_stylist', image.ID_Karyawan);
  }

  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId='1'>
        <Row className="align-items-center">
          <Col sm='2'>
            <Label for="sign_in_time">
              Waktu
            </Label>
          </Col>
          <Col sm='3'>
            <Input
              id="sign_in_time"
              type="time"
              name="sign_in_time"
              defaultValue={(data && data.form && data.form.Sign_In_Waktu) ? data.form.Sign_In_Waktu : ''}
              innerRef={register({ required: true})}
            />
          </Col>
        </Row>
        <Row className='align-items-center justify-content-center mt-2'>
          <Table style={{ width: '100%' }}>
            <tbody>
              <tr className="mt-2">
                <td style={{ width: '35%' }}>
                  <Row className="mt-1 me-5">
                    <Col>
                      <Label>Di Dalam Ruangan</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '85%' }}>
                  <Row>
                    <Col sm='4'>
                      <Input
                        id="sign-in-nurse-room"
                        type="checkbox"
                        name="sign_in_nurse_room"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.form && data.form.Sign_In_Ruangan_Perawat === 1)}
                        value="1"
                        innerRef={register('sign_in_nurse_room')}
                      />{' '}
                      <Label>Perawat</Label>
                    </Col>
                    <Col sm='4'>
                      <Input
                        id="sign-in-stylist-room"
                        type="checkbox"
                        name="sign_in_stylist_room"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.form && data.form.Sign_In_Ruangan_Penata === 1)}
                        value="2"
                        innerRef={register('sign_in_stylist_room')}
                      />{' '}
                      <Label>Perawat Anestesi</Label>
                    </Col>
                    <Col sm='4'>
                      <Input
                        id="sign-in-doctor-room"
                        type="checkbox"
                        name="sign_in_doctor_room"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.form && data.form.Sign_In_Ruangan_Dokter === 1)}
                        value="2"
                        innerRef={register('sign_in_doctor_room')}
                      />{' '}
                      <Label>Dokter Anestesi</Label>
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr className="mt-2">
                <td style={{ width: '20%' }}>
                  <Row className="mt-1 me-5">
                    <Col>
                      <Label>Apakah Pasien Sudah informed Consent ?</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '80%' }}>
                  <Row>
                    <Col sm='2'>
                      <Input
                        type="radio"
                        name="sign_in_informed"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setSignInInformed('1');
                        }}
                        checked={(signInInformed === '1')}
                        value="1"
                        innerRef={register("sign_in_informed")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col>
                      <Input
                        type="radio"
                        name="sign_in_informed"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setSignInInformed('0');
                        }}
                        checked={signInInformed === '0'}
                        value="0"
                        innerRef={register("sign_in_informed")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr className="mt-2">
                <td style={{ width: '20%' }}>
                  <Row className="mt-1 me-5">
                    <Col>
                      <Label>Apakah Area yang Akan Dioperasi Sudah Diberi Tanda?</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '80%' }}>
                  <Row>
                    <Col sm='2'>
                      <Input
                        id="sign-in-sign-1"
                        type="radio"
                        name="sign_in_sign"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setSignInTanda('1');
                        }}
                        // defaultChecked={data && data.form && data.form.Sign_In_Tanda === 1}
                        checked={(signInTanda === '1')}
                        value="1"
                        innerRef={register("sign_in_sign")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col>
                      <Input
                        id="sign-in-sign-2"
                        type="radio"
                        name="sign_in_sign"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setSignInTanda('0');
                        }}
                        checked={signInTanda === '0'}
                        value="0"
                        innerRef={register("sign_in_sign")}
                      />{' '}
                      <Label>Tidak Diperlukan</Label>
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr className="mt-2">
                <td style={{ width: '20%' }}>
                  <Row className="mt-1 me-5">
                    <Col>
                      <Label>Apakah Mesin Anestesi dan Obat-Obatan Sudah Lengkap ?</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '80%' }}>
                  <Row>
                    <Col sm='2'>
                      <Input
                        id="sign-in-complete-1"
                        type="radio"
                        name="sign_in_complete"
                        className="me-1"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Sign_In_Lengkap === 1}
                        value="1"
                        innerRef={register("sign_in_complete")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col>
                      <Input
                        id="sign-in-complete-2"
                        type="radio"
                        name="sign_in_complete"
                        className="me-1"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Sign_In_Lengkap === 0}
                        value="0"
                        innerRef={register("sign_in_complete")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr className="mt-2">
                <td style={{ width: '20%' }}>
                  <Row className="mt-1 me-5">
                    <Col>
                      <Label>Apakah Sudah Tersedia Implan ?</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '80%' }}>
                  <Row className="mt-2">
                    <Col>
                      <Row className="mb-1">
                        <Col>
                          <Input
                            id="sign-in-implant-1"
                            type="radio"
                            name="sign_in_implant"
                            className="me-1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.form && data.form.Sign_In_Implan === 1}
                            value="1"
                            innerRef={register("sign_in_implant")}
                          />{' '}
                          <Label>Ya</Label>
                        </Col>
                      </Row>
                      <Row className="mb-1">
                        <Col>
                          <Input
                            id="sign-in-implant-0"
                            type="radio"
                            name="sign_in_implant"
                            className="me-1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.form && data.form.Sign_In_Implan === 0}
                            value="0"
                            innerRef={register("sign_in_implant")}
                          />{' '}
                          <Label>Tidak</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Input
                            id="sign-in-implant-2"
                            type="radio"
                            name="sign_in_implant"
                            className="me-1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.form && data.form.Sign_In_Implan === 2}
                            value="2"
                            innerRef={register("sign_in_implant")}
                          />{' '}
                          <Label>Tidak Diperlukan</Label>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr className="mt-2">
                <td style={{ width: '20%' }}>
                  <Row className="mt-1 me-5">
                    <Col>
                      <Label>Apakah Sudah Terpasang Pulse Oksimetri dan Berfungsi dengan Baik ?</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '80%' }}>
                  <Row>
                    <Col sm='2'>
                      <Input
                        id="sign-in-pulse-oximetry-1"
                        type="radio"
                        name="sign_in_pulse_oximetry"
                        className="me-1"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Sign_In_Pulse_Oksimetri === 1}
                        value="1"
                        innerRef={register("sign_in_pulse_oximetry")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col>
                      <Input
                        id="sign-in-pulse-oximetry-0"
                        type="radio"
                        name="sign_in_pulse_oximetry"
                        className="me-1"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Sign_In_Pulse_Oksimetri === 0}
                        value="0"
                        innerRef={register("sign_in_pulse_oximetry")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr className="mt-2">
                <td style={{ width: '20%' }}>
                  <Row className="mt-1 me-5">
                    <Col>
                      <Label>Apakah Pasien Memiliki Riwayat Alergi</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '80%' }}>
                  <Row>
                    <Col sm='2'>
                      <Input
                        id="sign-in-allergy-1"
                        type="radio"
                        name="sign_in_allergy"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setSignInAlergi('1');
                        }}
                        checked={signInAlergi === '1'}
                        value="1"
                        innerRef={register("sign_in_allergy")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col>
                      <Input
                        id="sign-in-allergy-0"
                        type="radio"
                        name="sign_in_allergy"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setSignInAlergi('0');
                        }}
                        // defaultChecked={data && data.form && data.form.Sign_In_Alergi === 0}
                        checked={(signInAlergi === '0')}
                        value="0"
                        innerRef={register("sign_in_allergy")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr className="mt-3">
                <td style={{ width: '20%', verticalAlign: 'middle' }}>
                  <Row className="me-5">
                    <Col>
                      <Label>Apakah Pasien Memiliki Gangguan Pernafasan</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '80%' }}>
                  <Row>
                    <Col>
                      <Row className="mb-1">
                        <Col>
                          <Input
                            id="sign-in-breath-2"
                            type="radio"
                            name="sign_in_breath"
                            className="me-1"
                            onChange={(e) => {
                              handleRadioChange(e);
                              setSignInPernafasan('2');
                            }}
                            checked={signInPernafasan === '2'}
                            value="2"
                            innerRef={register("sign_in_breath")}
                          />{' '}
                          <Label>Ya, dan alat / bantuan sudah tersedia</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Input
                            id="sign-in-breath-0"
                            type="radio"
                            name="sign_in_breath"
                            className="me-1"
                            onChange={(e) => {
                              handleRadioChange(e);
                              setSignInPernafasan('0');
                            }}
                            // defaultChecked={data && data.form && data.form.Sign_In_Pernafasan === 0}
                            checked={(signInPernafasan === '0')}
                            value="0"
                            innerRef={register("sign_in_breath")}
                          />{' '}
                          <Label>Tidak</Label>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr className="mt-3">
                <td style={{ width: '20%', verticalAlign: 'middle' }}>
                  <Row className="mt-1 me-5">
                    <Col>
                      <Label>Resiko Pendarahan {'>'} 500ml(7ml.kg bagi anak-anak)</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '80%' }}>
                  <Row className="mb-1">
                    <Col>
                      <Input
                        id="sign-in-bleeding-2"
                        type="radio"
                        name="sign_in_bleeding"
                        className="me-2"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setSignInPendarahan('2');
                        }}
                        checked={signInPendarahan === '2'}
                        value="2"
                        innerRef={register("sign_in_bleeding")}
                      />{' '}
                      <Label style={{ marginLeft: '35px', marginTop: '-56px'}}>Ya, dan sudah direncanakan pemasangan infus 2 line dan tersedia cairan-cairan yang akan diberikan </Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="sign-in-bleeding-3"
                        type="radio"
                        name="sign_in_bleeding"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setSignInPendarahan('0');
                        }}
                        // defaultChecked={data && data.form && data.form.Sign_In_Pendarahan === 0}
                        checked={(signInPendarahan === '0')}
                        value="0"
                        innerRef={register("sign_in_bleeding")}
                      />{' '}
                      <Label> Tidak</Label>
                    </Col>
                  </Row>
                </td>
              </tr>
            </tbody>
          </Table>
          <Row className="mt-2">
            <Col>
              <Signature
                label="Dokter Anestesi"
                type="picker"
                additionalLabel={(data && data.form && data.form.Sign_In_Nama_Dokter) ? data.form.Sign_In_Nama_Dokter : ''}
                initialImage={(data && data.form && data.form.Sign_In_TTD_Dokter && data.form.Sign_In_TTD_Dokter !== '') ? data.form.Sign_In_TTD_Dokter : undefined}
                persons={doctors}
                unit="dokter"
                onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                  if (isFormDoctor) {
                    handleDoctorSigned(assigner,  isFormDoctor)
                  }
                  if (!isFormDoctor) {
                    handleDoctorSigned(assigner)
                  }
                }}
              />
              <Input
                type="hidden"
                name="sign_in_signed_doctor"
                innerRef={register()}
                invalid={errors.sign_in_signed_doctor && true}
              />
              <Input
                type="hidden"
                name="sign_in_doctor"
                innerRef={register()}
                invalid={errors.sign_in_doctor && true}
              />
            </Col>
            <Col>
              <Signature
                label="Perawat Anestesi"
                type="picker"
                additionalLabel={(data && data.form && data.form.Sign_In_Nama_Penata) ? data.form.Sign_In_Nama_Penata : ''}
                initialImage={(data && data.form && data.form.Sign_In_TTD_Penata && data.form.Sign_In_TTD_Penata !== '') ? data.form.Sign_In_TTD_Penata : undefined}
                persons={nurses}
                onSigned={(assigner: SignatureModel) => handleAnesthesiaSigned(assigner)}
              />
              <Input
                type="hidden"
                name="sign_in_signed_stylist"
                innerRef={register()}
                invalid={errors.sign_in_signed_stylist && true}
              />
              <Input
                type="hidden"
                name="sign_in_id_stylist"
                innerRef={register()}
                invalid={errors.sign_in_id_stylist && true}
              />
            </Col>
            <Col>
              <Signature
                label="Perawat"
                type="picker"
                additionalLabel={(data && data.form && data.form.Sign_In_Nama_Perawat) ? data.form.Sign_In_Nama_Perawat : ''}
                initialImage={(data && data.form && data.form.Sign_In_TTD_Perawat && data.form.Sign_In_TTD_Perawat !== '') ? data.form.Sign_In_TTD_Perawat : undefined}
                persons={nurses}
                onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)}
              />
              <Input
                type="hidden"
                name="sign_in_signed_nurse"
                innerRef={register()}
                invalid={errors.sign_in_signed_nurse && true}
              />
              <Input
                type="hidden"
                name="sign_in_nurse"
                innerRef={register()}
                invalid={errors.sign_in_nurse && true}
              />
            </Col>
          </Row>
          <FormGroup className="d-flex mb-0 justify-content-center mt-2">
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
  );
}

export default SignInTab