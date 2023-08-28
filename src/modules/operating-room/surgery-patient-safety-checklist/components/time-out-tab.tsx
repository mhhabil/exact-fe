import { Signature } from "@src/shared/signature/components";
import { useEffect, useState } from "react";
import {Button, Col, FormGroup, Input, Label, Row, TabContent, Table, TabPane} from "reactstrap";
import { SafetyChecklist } from "../models/safety-checklist.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { SubmitButton } from "@src/shared/button";
import {IPdfModel} from '@shared/pdf';

const TimeOutTab = (props: { data: SafetyChecklist, register: any, errors: any, getValues: any, setValue: any, activeTab: string, processing: boolean, defaultPattern: string | undefined }) => {
  const { data, register, errors, getValues, setValue, activeTab, processing, defaultPattern } = props;

  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const [notRoutineTime, setNotRoutineTime] = useState((data && data.form && data.form.Time_Out_Tidak_Rutin && data.form.Time_Out_Tidak_Rutin === 1))

  const { pdf } = useAppSelector(state => state.safetyChecklist);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);

  const [timeoutPerkenalanDiri, setTimeoutPerkenalanDiri] = useState<string | undefined>(`${data?.form?.Time_Out_Perkenalan_Diri}`);
  const [timeoutBacaUlang, setTimeoutBacaUlang] = useState<string | undefined>(`${data?.form?.Time_Out_Baca_Ulang}`);
  const [timeoutTidakRutin, setTimeoutTidakRutin] = useState<string | undefined>(`${data?.form?.Time_Out_Tidak_Rutin}`);
  const [timeoutPendarahan, setTimeoutPendarahan] = useState<string | undefined>(`${data?.form?.Time_Out_Pendarahan}`);
  const [timeoutAnestesiKhusus, setTimeoutAnestesiKhusus] = useState<string | undefined>(`${data?.form?.Time_Out_Anestesi_Khusus}`);
  const [timeoutSteril, setTimeoutSteril] = useState<string | undefined>(`${data?.form?.Time_Out_Steril}`);
  const [timeoutHasil, setTimeoutHasil] = useState<string | undefined>(`${data?.form?.Time_Out_Hasil}`);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  useEffect(() => {
    if (data && data.form) {
      setTimeoutPerkenalanDiri(`${data?.form?.Time_Out_Perkenalan_Diri}`);
      setTimeoutBacaUlang(`${data?.form?.Time_Out_Baca_Ulang}`);
      setTimeoutTidakRutin(`${data?.form?.Time_Out_Tidak_Rutin}`);
      setTimeoutPendarahan(`${data?.form?.Time_Out_Pendarahan}`);
      setTimeoutAnestesiKhusus(`${data?.form?.Time_Out_Anestesi_Khusus}`);
      setTimeoutSteril(`${data?.form?.Time_Out_Steril}`);
      setTimeoutHasil(`${data?.form?.Time_Out_Hasil}`);
    }
  }, [data]);

  useEffect(() => {
    if (defaultPattern === '1') {
      setValue('time_out_self_introduction', '1');
      setTimeoutPerkenalanDiri('1');
      setValue('time_out_reread', '1');
      setTimeoutBacaUlang('1');
      setValue('time_out_not_routine', '0');
      setTimeoutTidakRutin('0');
      setValue('time_out_bleeding', '1');
      setTimeoutPendarahan('1');
      setValue('time_out_special_anaesthesia', '0');
      setTimeoutAnestesiKhusus('0');
      setValue('time_out_sterile', '1');
      setTimeoutSteril('1');
      setValue('time_out_result', '1');
      setTimeoutHasil('1');
    } else if (defaultPattern === '0') {
      setValue('time_out_self_introduction', undefined);
      setTimeoutPerkenalanDiri(undefined);
      setValue('time_out_reread', undefined);
      setTimeoutBacaUlang(undefined);
      setValue('time_out_not_routine', undefined);
      setTimeoutTidakRutin(undefined);
      setValue('time_out_bleeding', undefined);
      setTimeoutPendarahan(undefined);
      setValue('time_out_special_anaesthesia', undefined);
      setTimeoutAnestesiKhusus(undefined);
      setValue('time_out_sterile', undefined);
      setTimeoutSteril(undefined);
      setValue('time_out_result', undefined);
      setTimeoutHasil(undefined);
    }
  }, [defaultPattern]);

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleDoctorSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue('time_out_signed_doctor', image.Signature);
      setValue('time_out_id_doctor', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('time_out_signed_doctor', image.Signature);
      setValue('time_out_id_doctor', image.ID_Karyawan);
    }
  }

  const handleNurseSigned = (image: SignatureModel) => {
    setValue('time_out_signed_nurse', image.Signature);
    setValue('time_out_id_nurse', image.ID_Karyawan);
  }

  const handleAnesthesiaSigned = (image: SignatureModel) => {
    setValue('time_out_signed_stylist', image.Signature);
    setValue('time_out_id_stylist', image.ID_Karyawan);
  }

  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId='2'>
        <Row className="align-items-center">
          <Col sm='2'>
            <Label for="time_out_time">
              Waktu
            </Label>
          </Col>
          <Col sm='3'>
            <Input
              id="time-out-time"
              type="time"
              name="time_out_time"
              defaultValue={(data && data.form && data.form.Time_Out_Waktu) ? data.form.Time_Out_Waktu : ''}
              innerRef={register({ required: true })}
            />
          </Col>
        </Row>
        <Row className="align-items-center mt-2">
          <Table>
            <tbody>
              <tr>
                <td style={{ width: '35%' }}>
                  <Row className="mt-1">
                    <Col>
                      <Label>Di Dalam Ruangan</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '80%' }}>
                  <Row>
                    <Col style={{ marginLeft: '-90px'}}>
                      <Input
                        id="time-out-nurse-room"
                        type="checkbox"
                        name="time_out_nurse_room"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.form && data.form.Time_Out_Ruangan_Perawat === 1)}
                        value="1"
                        innerRef={register('time_out_nurse_room')}
                      />{' '}
                      <Label>Perawat</Label>
                    </Col>
                    <Col>
                      <Input
                        id="time-out-room-stylist"
                        type="checkbox"
                        name="time_out_room_stylist"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.form && data.form.Time_Out_Ruangan_Penata === 1)}
                        value="1"
                        innerRef={register('time_out_room_stylist')}
                      />{' '}
                      <Label>Perawat Anestesi</Label>
                    </Col>
                    <Col>
                      <Input
                        id="time-out-room-doctor"
                        type="checkbox"
                        name="time_out_room_doctor"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.form && data.form.Time_Out_Ruangan_Dokter === 1)}
                        value="1"
                        innerRef={register('time_out_room_doctor')}
                      />{' '}
                      <Label>Dokter Anestesi</Label>
                    </Col>
                    <Col>
                      <Input
                        id="time-out-room-surgical"
                        type="checkbox"
                        name="time_out_room_surgical"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.form && data.form.Time_Out_Ruangan_Bedah === 1)}
                        value="1"
                        innerRef={register('time_out_room_surgical')}
                      />{' '}
                      <Label>Dokter Bedah</Label>
                    </Col>
                  </Row>
                </td>
              </tr>

              <tr className="mt-2">
                <td style={{ width: '20%' }}>
                  <Row className="mt-1">
                    <Col>
                      <Label>Memastikan Bahwa Semua Anggota Tim Medis Sudah Memperkenalkan Diri</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '80%' }}>
                  <Row>
                    <Col sm='2'>
                      <Input
                        id="time-out-self-introduction-1"
                        type="radio"
                        name="time_out_self_introduction"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTimeoutPerkenalanDiri('1');
                        }}
                        // defaultChecked={data && data.form && data.form.Time_Out_Perkenalan_Diri === 1}
                        checked={(timeoutPerkenalanDiri === '1')}
                        value="1"
                        innerRef={register("time_out_self_introduction")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col>
                      <Input
                        id="time-out-self-introduction-0"
                        type="radio"
                        name="time_out_self_introduction"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTimeoutPerkenalanDiri('0');
                        }}
                        checked={(timeoutPerkenalanDiri === '0')}
                        value="0"
                        innerRef={register("time_out_self_introduction")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td style={{ width: '20%' }}>
                  <Row className="mt-1">
                    <Col>
                      <Label>Memastikan dan Baca ulang nama pasien, tindakan medis, dan area yang akan di isi</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '80%' }}>
                  <Row>
                    <Col sm='2'>
                      <Input
                        id="time-out-reread-1"
                        type="radio"
                        name="time_out_reread"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTimeoutBacaUlang('1');
                        }}
                        // defaultChecked={data && data.form && data.form.Time_Out_Baca_Ulang === 1}
                        checked={(timeoutBacaUlang === '1')}
                        value="1"
                        innerRef={register("time_out_reread")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col>
                      <Input
                        id="time-out-reread-0"
                        type="radio"
                        name="time_out_reread"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTimeoutBacaUlang('0');
                        }}
                        checked={(timeoutBacaUlang === '0')}
                        value="0"
                        innerRef={register("time_out_reread")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td style={{ width: '20%' }}>
                  <Row className="mt-1">
                    <Col>
                      <Label>Apakah Profilaksis Antibotik Sudah Diberikan 1 jam Sebelumnya</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '80%' }}>
                  <Row>
                    <Col sm='2'>
                      <Input
                        id="time-out-prophylaxis-antibiotics-1"
                        type="radio"
                        name="time_out_prophylaxis_antibiotics"
                        className="me-1"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Time_Out_Profilaksis_Antibiotik === 1}
                        value="1"
                        innerRef={register("time_out_prophylaxis_antibiotics")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col>
                      <Input
                        id="time-out-prophylaxis-antibiotics-0"
                        type="radio"
                        name="time_out_prophylaxis_antibiotics"
                        className="me-1"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Time_Out_Profilaksis_Antibiotik === 0}
                        value="0"
                        innerRef={register("time_out_prophylaxis_antibiotics")}
                      />{' '}
                      <Label>Tidak Perlu</Label>
                    </Col>
                  </Row>
                </td>
              </tr>
              <h4 className="mt-2">Dokter Bedah</h4>
              {/* <hr style={{width: '287%'}}/> */}
              <tr>
                <td style={{ width: '20%' }}>
                  <Row className="mt-1">
                    <Col>
                      <Label>Apakah Tindakan Berisiko atau Tindakan Tidak Rutin Yang Akan Dilakukan</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '80%' }}>
                  <Row>
                    <Col sm='2'>
                      <Input
                        id="time-out-not-routine-1"
                        type="radio"
                        name="time_out_not_routine"
                        className="me-1"
                        onChange={(e) => {
                          setNotRoutineTime(e.target.checked);
                          handleRadioChange(e);
                          setTimeoutTidakRutin('1');
                        }}
                        checked={(timeoutTidakRutin === '1')}
                        value="1"
                        innerRef={register("time_out_not_routine")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>

                    <Col>
                      <Input
                        id="time-out-not-routine-2"
                        type="radio"
                        name="time_out_not_routine"
                        className="me-1"
                        onChange={(e) => {
                          setNotRoutineTime(!e.target.checked);
                          handleRadioChange(e);
                          setTimeoutTidakRutin('0');
                        }}
                        // defaultChecked={data && data.form && data.form.Time_Out_Tidak_Rutin === 0}
                        checked={(timeoutTidakRutin === '0')}
                        value="0"
                        innerRef={register("time_out_not_routine")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                  </Row>
                  {
                    notRoutineTime && (
                      <Row className="align-items-center mt-2">
                        <Col sm='3'>
                          <Label>Berapa lama tindakan ini dikerjakan?</Label>
                        </Col>
                        <Col sm='2'>
                          <Input
                            id="time-out-not-routine-time"
                            type="text"
                            name="time_out_not_routine_time"
                            innerRef={register({ required: true })}
                            invalid={errors.time_out_not_routine_time && true}
                          />
                        </Col>
                      </Row>
                    )
                  }
                </td>
              </tr>
              <tr>
                <td style={{ width: '20%' }}>
                  <Row className="mt-1">
                    <Col>
                      <Label>Apakah Sudah Antisipasi Pendarahan ?</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '80%' }}>
                  <Row>
                    <Col sm='2'>
                      <Input
                        id="time-out-bleeding-1"
                        type="radio"
                        name="time_out_bleeding"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTimeoutPendarahan('1');
                        }}
                        // defaultChecked={data && data.form && data.form.Time_Out_Pendarahan === 1}
                        checked={(timeoutPendarahan === '1')}
                        value="1"
                        innerRef={register("time_out_bleeding")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col>
                      <Input
                        id="time-out-bleeding-0"
                        type="radio"
                        name="time_out_bleeding"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTimeoutPendarahan('0');
                        }}
                        checked={(timeoutPendarahan === '0')}
                        value="0"
                        innerRef={register("time_out_bleeding")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                  </Row>
                </td>
              </tr>
              <h4 className="mt-2"> Dokter Anestesi</h4>
              <tr>
                <td style={{ width: '20%' }}>
                  <Row>
                    <Col>
                      <Label>Apakah Ada Hal Khusus Untuk Pasien Ini ?</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '80%' }}>
                  <Row>
                    <Col sm='2'>
                      <Input
                        id="time-out-special-anaesthesia-1"
                        type="radio"
                        name="time_out_special_anaesthesia"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTimeoutAnestesiKhusus('1');
                        }}
                        checked={(timeoutAnestesiKhusus === '1')}
                        value="1"
                        innerRef={register("time_out_special_anaesthesia")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col>
                      <Input
                        id="time-out-special-anaesthesia-0"
                        type="radio"
                        name="time_out_special_anaesthesia"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTimeoutAnestesiKhusus('0');
                        }}
                        // defaultChecked={data && data.form && data.form.Time_Out_Anestesi_Khusus === 0}
                        checked={(timeoutAnestesiKhusus === '0')}
                        value="0"
                        innerRef={register("time_out_special_anaesthesia")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                  </Row>
                </td>
              </tr>
              <h4 className="mt-2">Tim Perawat</h4>
              <tr>
                <td style={{ width: '20%' }}>
                  <Row>
                    <Col>
                      <Label>Apakah sudah dipastikan kesterilan peralatan ?</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '80%' }}>
                  <Row>
                    <Col sm='2'>
                      <Input
                        id="time-out-sterile-1"
                        type="radio"
                        name="time_out_sterile"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTimeoutSteril('1');
                        }}
                        // defaultChecked={data && data.form && data.form.Time_Out_Steril === 1}
                        checked={(timeoutSteril === '1')}
                        value="1"
                        innerRef={register("time_out_sterile")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col>
                      <Input
                        id="time-out-sterile-0"
                        type="radio"
                        name="time_out_sterile"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTimeoutSteril('0');
                        }}
                        checked={(timeoutSteril === '0')}
                        value="0"
                        innerRef={register("time_out_sterile")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td style={{ width: '20%' }}>
                  <Row className="mt-1">
                    <Col>
                      <Label>Apakah ada masalah dengan peralatan ?</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '80%' }}>
                  <Row>
                    <Col sm='2'>
                      <Input
                        id="time-out-equipment-1"
                        type="radio"
                        name="time_out_equipment"
                        className="me-1"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Time_Out_Peralatan === 1}
                        value="1"
                        innerRef={register("time_out_equipment")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col>
                      <Input
                        id="time-out-equipment-0"
                        type="radio"
                        name="time_out_equipment"
                        className="me-1"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Time_Out_Peralatan === 0}
                        value="0"
                        innerRef={register("time_out_equipment")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                  </Row>
                </td>
              </tr>

              <tr>
                <td>
                  <Row>
                    <Col>
                      <Label>Masalah yang dikhawatirkan</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '80%' }}>
                  <Row className="my-1">
                    <Col>
                      <Input
                        id="time-out-problem"
                        type="textarea"
                        name="time_out_problem"
                        innerRef={register({ required: true })}
                        invalid={errors.time_out_problem && true}
                      />
                    </Col>
                  </Row>
                </td>
              </tr>

              <tr>
                <td style={{ width: '20%' }}>
                  <Row>
                    <Col>
                      <Label>Apakah hasil biometri, USG Mata, Foto Fondus, OCT Makula/Papil, Laboratorium, Radiologi, EKG, Echo, Cardiografi, dll yang diperlukan sudah ada?</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '80%' }}>
                  <Row>
                    <Col sm='2'>
                      <Input
                        id="time-out-result-1"
                        type="radio"
                        name="time_out_result"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTimeoutHasil('1');
                        }}
                        // defaultChecked={data && data.form && data.form.Time_Out_Hasil === 1}
                        checked={(timeoutHasil === '1')}
                        value="1"
                        innerRef={register("time_out_result")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col>
                      <Input
                        id="time-out-result-0"
                        type="radio"
                        name="time_out_result"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTimeoutHasil('0');
                        }}
                        checked={(timeoutHasil === '0')}
                        value="0"
                        innerRef={register("time_out_result")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                  </Row>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <Row className="mt-2">
          <Col>
            <Signature
              label="Dokter Anestesi"
              type="picker"
              additionalLabel={(data && data.form && data.form.Time_Out_Nama_Dokter) ? data.form.Time_Out_Nama_Dokter : ''}
              initialImage={(data && data.form && data.form.Time_Out_TTD_Dokter && data.form.Time_Out_TTD_Dokter !== '') ? data.form.Time_Out_TTD_Dokter : undefined}
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
              name="time_out_signed_doctor"
              innerRef={register()}
              invalid={errors.time_out_signed_doctor && true}
            />
            <Input
              type="hidden"
              name="time_out_id_doctor"
              innerRef={register()}
              invalid={errors.time_out_id_doctor && true}
            />
          </Col>
          <Col>
            <Signature
              label="Perawat Anestesi"
              type="picker"
              additionalLabel={(data && data.form && data.form.Time_Out_Nama_Penata) ? data.form.Time_Out_Nama_Penata : ''}
              initialImage={(data && data.form && data.form.Time_Out_TTD_Penata && data.form.Time_Out_TTD_Penata !== '') ? data.form.Time_Out_TTD_Penata : undefined}
              persons={nurses}
              onSigned={(assigner: SignatureModel) => handleAnesthesiaSigned(assigner)}
            />
            <Input
              type="hidden"
              name="time_out_signed_stylist"
              innerRef={register()}
              invalid={errors.time_out_signed_stylist && true}
            />
            <Input
              type="hidden"
              name="time_out_id_stylist"
              innerRef={register()}
              invalid={errors.time_out_id_stylist && true}
            />
          </Col>
          <Col>
            <Signature
              label="Perawat"
              type="picker"
              additionalLabel={(data && data.form && data.form.Time_Out_Nama_Perawat) ? data.form.Time_Out_Nama_Perawat : ''}
              initialImage={(data && data.form && data.form.Time_Out_TTD_Perawat && data.form.Time_Out_TTD_Perawat !== '') ? data.form.Time_Out_TTD_Perawat : undefined}
              persons={nurses}
              onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)}
            />
            <Input
              type="hidden"
              name="time_out_signed_nurse"
              innerRef={register()}
              invalid={errors.time_out_signed_nurse && true}
            />
            <Input
              type="hidden"
              name="time_out_id_nurse"
              innerRef={register()}
              invalid={errors.time_out_id_nurse && true}
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
      </TabPane>
    </TabContent>
  )
}

export default TimeOutTab;