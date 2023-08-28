import { NurseModel } from '@src/shared/nurse/models/nurse.model';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import { Col, FormFeedback, FormGroup, Input, Label, Row, TabContent, Table, TabPane } from 'reactstrap';
import { OperativeFairyNursingNotesModel } from '../models';

const TypeOperation = (props: { data: OperativeFairyNursingNotesModel, register: any, activeTab: string, processing: boolean, errors: any, setValue: any, defaultPattern: string | undefined, setDirty: any }) => {
  const { data, register, activeTab, errors, processing, setValue, defaultPattern, setDirty } = props;
  const [unitPanas, setUnitPanas] = useState((data && data.ck_intra_operasi && data.ck_intra_operasi.Unit_Pemanas) ? !!(data.ck_intra_operasi.Unit_Pemanas) : false);
  const [dingin, setDingin] = useState((data && data.ck_intra_operasi && data.ck_intra_operasi.Unit_Pendingin) ? !!(data.ck_intra_operasi.Unit_Pendingin) : false);
  const { nurses } = useAppSelector(state => state.nurse);

  const [tipeOperasi, setTipeOperasi] = useState<string | undefined>(`${data?.ck_intra_operasi?.Tipe_Operasi}`);
  const [tipePembiusan, setTipePembiusan] = useState<string | undefined>(`${data?.ck_intra_operasi?.Tipe_Pembiusan}`);
  const [tingkatKesadaran, setTingkatKesadaran] = useState<string | undefined>(`${data?.ck_intra_operasi?.Tingkat_Kesadaran}`);
  const [statusEmosi, setStatusEmosi] = useState<string | undefined>(`${data?.ck_intra_operasi?.Status_Emosi}`);
  const [posisiKranula1, setPosisiKranula1] = useState<string | undefined>(`${data?.ck_intra_operasi?.Posisi_Kanula_1}`);
  const [posisiKranula4, setPosisiKranula4] = useState<string | undefined>(`${data?.ck_intra_operasi?.Posisi_Kanula_4}`);
  const [posisiKranula7, setPosisiKranula7] = useState<string | undefined>(`${data?.ck_intra_operasi?.Posisi_Kanula_7}`);
  const [posisiOperasi1, setPosisiOperasi1] = useState<string | undefined>();
  const [posisiLengan1, setPosisiLengan1] = useState<string | undefined>();
  const [posisiAlat, setPosisiAlat] = useState<string | undefined>(`${data?.ck_intra_operasi?.Posisi_Alat}`);
  const [kateterUrine, setKateterUrine] = useState<string | undefined>(`${data?.ck_intra_operasi?.Kateter_Urine}`);
  const [persiapanKulit, setPersiapanKulit] = useState<string | undefined>(`${data?.ck_intra_operasi?.Persiapan_Kulit}`);
  const [pemakaianDiathermy1, setPemakaianDiathermy1] = useState<string | undefined>();
  const [unitPemanasInput, setUnitPemanasInput] = useState<string | undefined>(`${data?.ck_intra_operasi?.Unit_Pemanas}`);
  const [unitPendinginInput, setUnitPendinginInput] = useState<string | undefined>(`${data?.ck_intra_operasi?.Unit_Pendingin}`);

  useEffect(() => {
    if (data && data.ck_intra_operasi) {
      setTipeOperasi(`${data?.ck_intra_operasi?.Tipe_Operasi}`);
      setTipePembiusan(`${data?.ck_intra_operasi?.Tipe_Pembiusan}`);
      setTingkatKesadaran(`${data?.ck_intra_operasi?.Tingkat_Kesadaran}`);
      setStatusEmosi(`${data?.ck_intra_operasi?.Status_Emosi}`);
      setPosisiAlat(`${data?.ck_intra_operasi?.Posisi_Alat}`);
      setKateterUrine(`${data?.ck_intra_operasi?.Kateter_Urine}`);
      setPersiapanKulit(`${data?.ck_intra_operasi?.Persiapan_Kulit}`);
      setUnitPemanasInput(`${data?.ck_intra_operasi?.Unit_Pemanas}`);
      setUnitPendinginInput(`${data?.ck_intra_operasi?.Unit_Pendingin}`);
      setPosisiKranula1(`${data?.ck_intra_operasi?.Posisi_Kanula_1}`);
      setPosisiKranula4(`${data?.ck_intra_operasi?.Posisi_Kanula_4}`);
      setPosisiKranula7(`${data?.ck_intra_operasi?.Posisi_Kanula_7}`);
    }
  }, [data]);

  useEffect(() => {
    if (nurses) {
      setValue('id_position_operating_supervised', data.ck_intra_operasi.ID_Posisi_Operasi_Diawasi ? data.ck_intra_operasi.ID_Posisi_Operasi_Diawasi : '')
    }
  }, [nurses])

  useEffect(() => {
    if (defaultPattern === '1') {
      setValue('operation_type', '1');
      setTipeOperasi('1');
      setValue('anesthetic_type', '0');
      setTipePembiusan('0');
      setValue('level_consciousness', '1');
      setTingkatKesadaran('1');
      setValue('state_emotion', '1');
      setStatusEmosi('1');
      setValue('cannula_position_1', '1');
      setPosisiKranula1('1');
      setValue('cannula_position_4', '1');
      setPosisiKranula4('1');
      setValue('cannula_position_7', '1');
      setPosisiKranula7('1');
      setValue('operating_position_1', '1');
      setPosisiOperasi1('1');
      setValue('arm_position_1', '1');
      setPosisiLengan1('1');
      setValue('position_tool', '1');
      setPosisiAlat('1');
      setValue('catheter_urine', '1');
      setKateterUrine('1');
      setValue('skin_prep', '3');
      setPersiapanKulit('3');
      setValue('discharging_diathermy_1', '1');
      setPemakaianDiathermy1('1');
      setValue('heating_unit', '0');
      setUnitPemanasInput('0');
      setValue('unit_cooling', '0');
      setUnitPendinginInput('0');
    } else if (defaultPattern === '0') {
      setValue('operation_type', undefined);
      setTipeOperasi(undefined);
      setValue('anesthetic_type', undefined);
      setTipePembiusan(undefined);
      setValue('level_consciousness', undefined);
      setTingkatKesadaran(undefined);
      setValue('state_emotion', undefined);
      setStatusEmosi(undefined);
      setValue('cannula_position_1', undefined);
      setPosisiKranula1(undefined);
      setValue('cannula_position_4', undefined);
      setPosisiKranula4(undefined);
      setValue('cannula_position_7', undefined);
      setPosisiKranula7(undefined);
      setValue('operating_position_1', undefined);
      setPosisiOperasi1(undefined);
      setValue('arm_position_1', undefined);
      setPosisiLengan1(undefined);
      setValue('position_tool', undefined);
      setPosisiAlat(undefined);
      setValue('catheter_urine', undefined);
      setKateterUrine(undefined);
      setValue('skin_prep', undefined);
      setPersiapanKulit(undefined);
      setValue('discharging_diathermy_1', undefined);
      setPemakaianDiathermy1(undefined);
      setValue('heating_unit', undefined);
      setUnitPemanasInput(undefined);
      setValue('unit_cooling', undefined);
      setUnitPendinginInput(undefined);
    }
  }, [defaultPattern]);

  const handleCheckboxChange = (val: any) => {
    setValue(`${val.target.name}`, (val.target.checked) ? '1' : '0')
    setDirty(true);
  }

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
    setDirty(true);
  }

  return <>
    <TabContent activeTab={activeTab}>
      <TabPane tabId='1'>
        <FormGroup className='form-group'>
          <Row>
            <Table style={{ width: '100%' }} className='mt-1' borderless>
              <tr>
                <td>
                  <Row>
                    <Col className="mt-4">
                      <Label>Jenis Operasi</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col className="mt-4">
                      <Input
                        id="operation_jenis"
                        type="text"
                        placeholder="Ketikkan Jenis Operasi"
                        name="operation_jenis"
                        innerRef={register({ required: true })}
                        invalid={errors.operation_jenis && true}
                        // className="me-1"
                        // value="2"
                        // onChange={(e) => handleCheckboxChange(e)}
                        // defaultChecked={data && data.form && data.form.Jenis_Pembedahan === '2'}
                        // // innerRef={mainRegister('jenis-pembedahan')}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row>
                    <Col>
                      <Label>Tipe Operasi</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '73%' }}>
                  <Row>
                    <Col>
                      <Input
                        id="operation-type-1"
                        type="radio"
                        name="operation_type"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTipeOperasi('1');
                        }}
                        checked={tipeOperasi === '1'}
                        innerRef={register("operation_type")}
                      />{' '}
                      <Label>Elektif</Label>
                    </Col>
                    <Col>
                      <Input
                        id="operation-type-0"
                        type="radio"
                        name="operation_type"
                        className="me-1"
                        value="0"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTipeOperasi('0');
                        }}
                        checked={tipeOperasi === '0'}
                        innerRef={register("operation_type")}
                      />{' '}
                      <Label>Darurat</Label>
                    </Col>
                    <Col>
                      <Input
                        id="operation-type-2"
                        type="radio"
                        name="operation_type"
                        className="me-1"
                        value="2"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTipeOperasi('2');
                        }}
                        checked={tipeOperasi === '2'}
                        innerRef={register("operation_type")}
                      />{' '}
                      <Label>Bedah Minor</Label>
                    </Col>
                    <Col></Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row>
                    <Col className='mt-1'>
                      <Label>3. Tipe Pembiusan</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col className='mt-1'>
                      <Input
                        id="anesthetic-type-1"
                        type="radio"
                        name="anesthetic_type"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTipePembiusan('1');
                        }}
                        checked={tipePembiusan === '1'}
                        innerRef={register("anesthetic_type")}
                      />{' '}
                      <Label>Umum</Label>
                    </Col>
                    <Col className='mt-1'>
                      <Input
                        id="anesthetic-type-2"
                        type="radio"
                        name="anesthetic_type"
                        className="me-1"
                        value="0"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTipePembiusan('0');
                        }}
                        checked={tipePembiusan === '0'}
                        innerRef={register("anesthetic_type")}
                      />{' '}
                      <Label>Lokal</Label>
                    </Col>
                    <Col className='mt-1'>
                      <Input
                        id="anesthetic-type-4"
                        type="radio"
                        name="anesthetic_type"
                        className="me-1"
                        value="3"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTipePembiusan('3');
                        }}
                        checked={tipePembiusan === '3'}
                        innerRef={register("anesthetic_type")}
                      />{' '}
                      <Label>Regional</Label>
                    </Col>
                    <Col className='mt-1'>
                      <Input
                        id="anesthetic-type-3"
                        type="radio"
                        name="anesthetic_type"
                        className="me-1"
                        value="2"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTipePembiusan('2');
                        }}
                        checked={tipePembiusan === '2'}
                        innerRef={register("anesthetic_type")}
                      />{' '}
                      <Label>Sedasi</Label>
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row>
                    <Col className="mb-4">
                      <Label>4. Tingkat Kesadaran Waktu Masuk Kamar</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col className='mt-1'>
                      <Input
                        id="level-consciousness-1"
                        type="radio"
                        name="level_consciousness"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTingkatKesadaran('1');
                        }}
                        checked={tingkatKesadaran === '1'}
                        innerRef={register("level_consciousness")}
                      />{' '}
                      <Label>Terjaga</Label>
                    </Col>
                    <Col className='mt-1'>
                      <Input
                        style={{ marginLeft: '-60px'}}
                        id="level-consciousness-2"
                        type="radio"
                        name="level_consciousness"
                        value="2"
                        className='me-1'
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTingkatKesadaran('2');
                        }}
                        // defaultChecked={(data && data.form && data.form.Tingkat_Kesadaran === 2)}
                        checked={tingkatKesadaran === '2'}
                        innerRef={register("level_consciousness")}
                      />{' '}
                      <Label>Mudah Dibangungkan</Label>
                    </Col>
                    <Col className='mt-1'>
                      <Input
                        style={{ marginLeft: '-100px'}}
                        id="level-consciousness-3"
                        type="radio"
                        name="level_consciousness"
                        className="me-1"
                        value="3"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTingkatKesadaran('3');
                        }}
                        checked={tingkatKesadaran === '3'}
                        innerRef={register("level_consciousness")}
                      />{' '}
                      <Label>Lain-lain</Label>
                    </Col>
                    {/* <Col></Col> */}
                  </Row>
                  <Col>
                    <Input
                      id="other-awareness-level-text"
                      type="text"
                      placeholder="Ketikkaan"
                      name="other_awareness_level_text"
                      className="me-1"
                      innerRef={register({ required: true })}
                      invalid={errors.other_awareness_level_text && true}
                    />{' '}
                  </Col>
                </td>
              </tr>
              <tr>
                <td>
                  <Row>
                    <Col className='mt-1'>
                      <Label>5. Status Emosi Waktu Masuk Kamar Operasi</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col className='mt-1'>
                      <Input
                        id="state-emotion-1"
                        type="radio"
                        name="state_emotion"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setStatusEmosi('1');
                        }}
                        checked={statusEmosi === '1'}
                        innerRef={register("state_emotion")}
                      />{' '}
                      <Label>Rileks</Label>
                    </Col>
                    <Col className='mt-1'>
                      <Input
                        id="state-emotion-2"
                        type="radio"
                        name="state_emotion"
                        className="me-1"
                        value="2"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setStatusEmosi('2');
                        }}
                        // defaultChecked={(data && data.form && data.form.Status_Emosi === 2)}
                        checked={statusEmosi === '2'}
                        innerRef={register("state_emotion")}
                      />{' '}
                      <Label>Gelisah</Label>
                    </Col>
                    <Col className='mt-1'>
                      <Input
                        id="state-emotion-3"
                        type="radio"
                        name="state_emotion"
                        className="me-2"
                        value="3"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setStatusEmosi('3');
                        }}
                        checked={statusEmosi === '3'}
                        innerRef={register("state_emotion")}
                      />{' '}
                      <Label style={{ marginLeft: '-15px'}}>Tidak Ada Respon</Label>
                    </Col>
                    <Col></Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row className="mb-3">
                    <Col className="mb-3">
                      <Label>6. Posisi Kanula Intra Vena</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col className='mt-2'>
                      <Input
                        id="cannula-position-1"
                        type="checkbox"
                        name="cannula_position_1"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPosisiKranula1('1');
                          } else {
                            setPosisiKranula1(undefined);
                          }
                          handleCheckboxChange(e);
                        }}
                        checked={posisiKranula1 === '1'}
                        innerRef={register("cannula_position_1")}
                      />{' '}
                      <Label>Tidak Ada</Label>
                    </Col>
                    <Col className='mt-2'>
                      <Input
                        id="cannula-position-2"
                        type="checkbox"
                        name="cannula_position_2"
                        className="me-1"
                        value="1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Posisi_Kanula_2 === "1")}
                        innerRef={register("cannula_position_2")}
                      />{' '}
                      <Label>Tangan Kanan</Label>
                    </Col>
                    <Col className='mt-2'>
                      <Input
                        id="cannula-position-3"
                        type="checkbox"
                        name="cannula_position_3"
                        className="me-1"
                        value="1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Posisi_Kanula_3 === "1")}
                        innerRef={register("cannula_position_3")}
                      />{' '}
                      <Label>Tangan Kiri</Label>
                    </Col>
                    <Col className='mt-2'>
                      <Input
                        id="cannula-position-4"
                        type="checkbox"
                        name="cannula_position_4"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPosisiKranula4('1');
                          } else {
                            setPosisiKranula4(undefined);
                          }
                          handleCheckboxChange(e);
                        }}
                        checked={posisiKranula4 === '1'}
                        innerRef={register("cannula_position_4")}
                      />{' '}
                      <Label>Kaki Kanan</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="cannula-position-5"
                        type="checkbox"
                        name="cannula_position_5"
                        className="me-1"
                        value="1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Posisi_Kanula_5 === "1")}
                        innerRef={register("cannula_position_5")}
                      />{' '}
                      <Label>Kaki Kiri</Label>
                    </Col>
                    <Col>
                      <Input
                        id="cannula-position-6"
                        type="checkbox"
                        name="cannula_position_6"
                        className="me-1"
                        value="1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Posisi_Kanula_6 === "1")}
                        innerRef={register("cannula_position_6")}
                      />{' '}
                      <Label>Arteri Line</Label>
                    </Col>
                    <Col>
                      <Input
                        id="cannula-position-7"
                        type="checkbox"
                        name="cannula_position_7"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPosisiKranula7('1');
                          } else {
                            setPosisiKranula7(undefined);
                          }
                          handleCheckboxChange(e);
                        }}
                        checked={posisiKranula7 === '1'}
                        innerRef={register("cannula_position_7")}
                      />{' '}
                      <Label>CVP</Label>
                    </Col>
                    <Col>
                      <Input
                        id="cannula-position-8"
                        type="checkbox"
                        name="cannula_position_8"
                        className="me-1"
                        value="1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Posisi_Kanula_8 === "1")}
                        innerRef={register("cannula_position_8")}
                      />{' '}
                      <Label>Lain-Lain</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        type="text"
                        placeholder="Ketikkaan"
                        id="position-cannula-other-text"
                        name="position_cannula_other_text"
                        innerRef={register({ required: true })}
                        invalid={errors.position_cannula_other_text && true}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row className="mb-3">
                    <Col className="mb-3">
                      <Label>7. Posisi Operasi</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col className='mt-3'>
                      <Input
                        id="operating-position-1"
                        type="checkbox"
                        name="operating_position_1"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPosisiOperasi1('1');
                          } else {
                            setPosisiOperasi1(undefined);
                          }
                          handleCheckboxChange(e)
                        }}
                        checked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Posisi_Operasi_1 === "1") || posisiOperasi1 === '1'}
                        innerRef={register("operating_position_1")}
                      />{' '}
                      <Label>Telentang</Label>
                    </Col>
                    <Col className='mt-3'>
                      <Input
                        id="operating-position-2"
                        type="checkbox"
                        name="operating_position_2"
                        className="me-1"
                        value="2"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Posisi_Operasi_2 === "1")}
                        innerRef={register("operating_position_2")}
                      />{' '}
                      <Label>Tengkurep</Label>
                    </Col>
                    <Col className='mt-3'>
                      <Input
                        id="operating-position-3"
                        type="checkbox"
                        name="operating_position_3"
                        className="me-1"
                        value="3"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Posisi_Operasi_3 === "1")}
                        innerRef={register("operating_position_3")}
                      />{' '}
                      <Label>Lateral Kanan</Label>
                    </Col>
                    <Col className='mt-3'>
                      <Input
                        id="operating-position-4"
                        type="checkbox"
                        name="operating_position_4"
                        className="me-1"
                        value="4"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Posisi_Operasi_4 === "1")}
                        innerRef={register("operating_position_4")}
                      />{' '}
                      <Label>Lateral Kiri</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="operating-position-5"
                        type="checkbox"
                        name="operating_position_5"
                        className="me-1"
                        value="5"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Posisi_Operasi_5 === "1")}
                        innerRef={register("operating_position_5")}
                      />{' '}
                      <Label>Lain-Lain</Label>
                    </Col>
                    <Row>
                      <Col>
                        <Input
                          className='mt-1'
                          type="text"
                          placeholder="Ketikkaan"
                          id="position_operation_other_text"
                          name="position_operation_other_text"
                          innerRef={register({ required: true })}
                          invalid={errors.position_operation_other_text && true}
                        />{' '}
                      </Col>
                    </Row>
                  </Row>
                  <Row>
                    <Col>
                      <Label className='mt-2'>Di Awasi Oleh</Label>
                    </Col>
                    <Col>
                      <Input
                        style={{ marginLeft: '-73%' }}
                        className="mt-1"
                        type="select"
                        id="id-position-operating-supervised"
                        name="id_position_operating_supervised"
                        innerRef={register() as any}
                      >
                        <option value="" disabled={true}>--</option>
                        {
                          nurses && Array.isArray(nurses) && nurses.map((item: any, key: number) => {
                            return <option value={item.ID_Karyawan} key={key}>{ item.Nama }</option>;
                          })
                        }
                      </Input>
                    </Col>
                  </Row>
                </td>
              </tr>

              <tr>
                <td>
                  <Row className="mb-0">
                    <Col className="mb-0">
                      <Label>8. Posisi Lengan</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col className='mt-3'>
                      <Input
                        style={{ marginLeft: '-3px'}}
                        id="arm-position-1"
                        type="checkbox"
                        name="arm_position_1"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPosisiLengan1('1');
                          } else {
                            setPosisiLengan1(undefined);
                          }
                          handleCheckboxChange(e);
                        }}
                        checked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Posisi_Lengan_1 === "1") || posisiLengan1 === '1'}
                        innerRef={register("arm_position_1")}
                      />{' '}
                      <Label >Terentang Kanan</Label>
                    </Col>
                    <Col className='mt-3'>
                      <Input
                    
                        id="arm-position-2"
                        type="checkbox"
                        name="arm_position_2"
                        className="me-1"
                        value="2"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Posisi_Lengan_2 === "1")}
                        innerRef={register("arm_position_2")}
                      />{' '}
                      <Label>Terentang Kiri</Label>
                    </Col>
                    <Col className="mt-3">
                      <Input
                        id="arm-position-3"
                        type="checkbox"
                        name="arm_position_3"
                        className="me-1"
                        value="3"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Posisi_Lengan_3 === "1")}
                        innerRef={register("arm_position_3")}
                      />{' '}
                      <Label>Terlipat Kanan</Label>
                    </Col>
                    <Col className='mt-3'>
                      <Input
                        id="arm-position-4"
                        type="checkbox"
                        name="arm_position_4"
                        className="me-1"
                        value="4"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Posisi_Lengan_4 === "1")}
                        innerRef={register("arm_position_4")}
                      />{' '}
                      <Label>Terlipat Kiri</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="arm-position-5"
                        type="checkbox"
                        name="arm_position_5"
                        className="me-1"
                        value="5"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Posisi_Lengan_5 === "1")}
                        innerRef={register("arm_position_5")}
                      />{' '}
                      <Label>Lain-Lain</Label>
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        placeholder="Ketikkaan"
                        id="other_arm_position_text"
                        name="other_arm_position_text"
                        innerRef={register({ required: true })}
                        invalid={errors.other_arm_position_text && true}
                      />{' '}
                    </Col>
                    <Col></Col>
                    <Col></Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row>
                    <Col className='mt-2'>
                      <Label>9. Posisi Alat Bantu Yang Digunakan</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col className='mt-2'>
                      <Input
                        style={{ marginLeft: '-8px'}}
                        id="position-tool-1"
                        type="radio"
                        name="position_tool"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setPosisiAlat('1');
                        }}
                        checked={posisiAlat === '1'}
                        innerRef={register("position_tool")}
                      />{' '}
                      <Label>Papan lengan penyanggah</Label>
                    </Col>
                    <Col className='mt-2'>
                      <Input
                        // style={{ marginLeft: '28px'}}
                        id="position-tool-2"
                        type="radio"
                        name="position_tool"
                        className="me-1"
                        value="2"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setPosisiAlat('2');
                        }}
                        // defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Posisi_Alat === 2)}
                        checked={posisiAlat === '2'}
                        innerRef={register("position_tool")}
                      />{' '}
                      <Label>Lain-lain</Label>
                    </Col>
                    <Col className='mt-2'>
                      <Input
                        style={{ marginLeft: '-110px'}}
                        type="text"
                        className='mb-5'
                        placeholder="Ketikkaan"
                        id="position_other_text_tools"
                        name="position_other_text_tools"
                        innerRef={register({ required: true })}
                        invalid={errors.position_other_text_tools && true}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row>
                    <Col className='mt-2'>
                      <Label>10. Memakai Kateter Urine</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col className='mt-2'>
                      <Input
                        id="catheter_urine-1"
                        type="radio"
                        name="catheter_urine"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setKateterUrine('1');
                        }}
                        checked={kateterUrine === '1'}
                        innerRef={register("catheter_urine")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                    <Col className='mt-2'>
                      <Input
                        style={{ marginLeft: '-29px'}}
                        id="catheter_urine-2"
                        type="radio"
                        name="catheter_urine"
                        className="me-1"
                        value="2"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setKateterUrine('2');
                        }}
                        // defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Kateter_Urine === 2)}
                        checked={kateterUrine === '2'}
                        innerRef={register("catheter_urine")}
                      />{' '}
                      <Label>Dalam kamar operasi</Label>
                    </Col>
                    <Col className='mt-2'>
                      <Input
                        style={{ marginLeft: '-2px'}}
                        id="catheter_urine-3"
                        type="radio"
                        name="catheter_urine"
                        className="me-1"
                        value="3"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setKateterUrine('3');
                        }}
                        checked={kateterUrine === '3'}
                        innerRef={register("catheter_urine")}
                      />{' '}
                      <Label>Di Ruangan</Label>
                    </Col>
                    <Col></Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row className="mb-0">
                    <Col className="mb-0">
                      <Label>11. Persiapan Kulit</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col className='mt-3'>
                      <Input
                        style={{ marginLeft: '-5px'}}
                        id="skin-prep-1"
                        type="radio"
                        name="skin_prep"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setPersiapanKulit('1');
                        }}
                        // defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Persiapan_Kulit === 1)}
                        checked={persiapanKulit === '1'}
                        innerRef={register("skin_prep")}
                      />{' '}
                      <Label style={{ marginRight: '-15px'}}>Chlorhexidine / 70%</Label>
                    </Col>
                    <Col className='mt-3'>
                      <Input
                        id="skin-prep-2"
                        type="radio"
                        name="skin_prep"
                        className="me-1"
                        value="2"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setPersiapanKulit('2');
                        }}
                        checked={persiapanKulit === '2'}
                        innerRef={register("skin_prep")}
                      />{' '}
                      <Label>Hibiscrub</Label>
                    </Col>
                    <Col className='mt-3'>
                      <Input
                        id="skin-prep-3"
                        type="radio"
                        name="skin_prep"
                        className="me-1"
                        value="3"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setPersiapanKulit('3');
                        }}
                        checked={persiapanKulit === '3'}
                        innerRef={register("skin_prep")}
                      />{' '}
                      <Label>Povidone-Iodine</Label>
                    </Col>
                    <Col className='mt-3'>
                      <Input
                        id="skin-prep-4"
                        type="radio"
                        name="skin_prep"
                        className="me-1"
                        value="4"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setPersiapanKulit('4');
                        }}
                        checked={persiapanKulit === '4'}
                        innerRef={register("skin_prep")}
                      />{' '}
                      <Label>Tidak ada</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="skin-prep-5"
                        type="radio"
                        name="skin_prep"
                        className="me-1"
                        value="5"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setPersiapanKulit('5');
                        }}
                        checked={persiapanKulit === '5'}
                        innerRef={register("skin_prep")}
                      />{' '}
                      <Label>Lain-Lain</Label>
                    </Col>
                    <Col>
                      <Input
                        style={{ marginLeft: '-50px'}}
                        type="text"
                        placeholder="Ketikkaan"
                        id="other_skin_prep_text"
                        name="other_skin_prep_text"
                        innerRef={register({ required: true })}
                        invalid={errors.other_skin_prep_text && true}
                      />{' '}
                    </Col>
                    <Col></Col>
                    <Col></Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row>
                    <Col className='mt-3'>
                      <Label>12. Pemakaian Diathermy</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col className='mt-3'>
                      <Input
                        id="discharging-diathermy-1"
                        type="checkbox"
                        name="discharging_diathermy_1"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          handleCheckboxChange(e);
                          if (e.target.checked) {
                            setPemakaianDiathermy1('1');
                          } else {
                            setPemakaianDiathermy1(undefined);
                          }
                        }}
                        checked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Pemakaian_Diathermy_1 === "1") || pemakaianDiathermy1 === '1'}
                        innerRef={register("discharging_diathermy_1")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                    <Col className='mt-3'>
                      <Input
                        id="discharging-diathermy-2"
                        type="checkbox"
                        name="discharging_diathermy_2"
                        className="me-1"
                        value="2"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Pemakaian_Diathermy_2 === "1")}
                        innerRef={register("discharging_diathermy_2")}
                      />{' '}
                      <Label>Monopar</Label>
                    </Col>
                    <Col className="mt-3">
                      <Input
                        id="discharging-diathermy-3"
                        type="checkbox"
                        name="discharging_diathermy_3"
                        className="me-1"
                        value="3"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Pemakaian_Diathermy_3 === "1")}
                        innerRef={register("discharging_diathermy_3")}
                      />{' '}
                      <Label>Bipolar</Label>
                    </Col>
                    <Col></Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row className="mb-5">
                    <Col className=" mb-5 d-flex justify-content-center">
                      <Label className="mr-2">Lokasi dari Dipersive Elektrode</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>
                      <Input
                        id="location-electrode-1"
                        type="checkbox"
                        name="location_electrode_1"
                        className="me-1"
                        value="1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Lokasi_Elektrode_1 === "1")}
                        innerRef={register("location_electrode_1")}
                      />{' '}
                      <Label>Kaki Kanan</Label>
                    </Col>
                    <Col>
                      <Input
                        id="location-electrode-2"
                        type="checkbox"
                        name="location_electrode_2"
                        className="me-1"
                        value="2"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Lokasi_Elektrode_2 === "1")}
                        innerRef={register("location_electrode_2")}
                      />{' '}
                      <Label>Kaki Kiri</Label>
                    </Col>
                    <Col className="ms-1">
                      <Input
                        id="location-electrode-3"
                        type="checkbox"
                        name="location_electrode_3"
                        className="me-1"
                        value="3"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Lokasi_Elektrode_3 === "1")}
                        innerRef={register("location_electrode_3")}
                      />{' '}
                      <Label>Paha Kanan</Label>
                    </Col>
                    <Col>
                      <Input
                        id="location-electrode-4"
                        type="checkbox"
                        name="location_electrode_4"
                        className="me-1"
                        value="4"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Lokasi_Elektrode_4 === "1")}
                        innerRef={register("location_electrode_4")}
                      />{' '}
                      <Label>Paha Kiri</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="location-electrode-5"
                        type="checkbox"
                        name="location_electrode_5"
                        className="me-1"
                        value="5"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Lokasi_Elektrode_5 === "1")}
                        innerRef={register("location_electrode_5")}
                      />{' '}
                      <Label>Lain-Lain</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        type="text"
                        placeholder="Ketikkaan"
                        id="other_electrode_location_text"
                        name="other_electrode_location_text"
                        innerRef={register({ required: true })}
                        invalid={errors.other_electrode_location_text && true}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>

              <tr>
                <td>
                  <Row>
                    <Col className="d-flex justify-content-center">
                      <Label>Pemeriksaan Kondisi Kulit Sebelum Operasi</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>
                      <Input
                        id="condition-before-1"
                        type="checkbox"
                        name="condition_before_1"
                        className="me-1"
                        value="1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Kondisi_Sebelum_1 === "1")}
                        innerRef={register("condition_before_1")}
                      />{' '}
                      <Label>Utuh</Label>
                    </Col>
                    <Col>
                      <Input
                        style={{ marginLeft: '-5%' }}
                        id="condition-before-2"
                        type="checkbox"
                        name="condition_before_2"
                        className="me-1"
                        value="2"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_intra_operasi && data.ck_intra_operasi.Kondisi_Sebelum_2 === "1"}
                        innerRef={register("condition_before_2")}
                      />{' '}
                      <Label>Menggelembung</Label>
                    </Col>
                    <Col className="ms-1">
                      <Input
                        id="condition-before-2"
                        type="checkbox"
                        name="condition_before_3"
                        className="me-1"
                        value="3"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_intra_operasi && data.ck_intra_operasi.Kondisi_Sebelum_3 === "1"}
                        innerRef={register("condition_before_3")}
                      />{' '}
                      <Label>Lain-Lain</Label>
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        placeholder="Ketikkaan"
                        id="condition_before_other_text"
                        name="condition_before_other_text"
                        innerRef={register({ required: true })}
                        invalid={errors.condition_before_other_text && true}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>

              <tr>
                <td>
                  <Row>
                    <Col className="d-flex justify-content-center">
                      <Label>Pemeriksaan Kondisi Kulit Sesudah Operasi</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>
                      <Input
                        id="after-condition-1"
                        type="checkbox"
                        name="after_condition_1"
                        className="me-1"
                        value="1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_intra_operasi && data.ck_intra_operasi.Kondisi_Sesudah_1 === "1"}
                        innerRef={register("after_condition_1")}
                      />{' '}
                      <Label>Utuh</Label>
                    </Col>
                    <Col>
                      <Input
                        style={{ marginLeft: '-5%'}}
                        id="after-condition-2"
                        type="checkbox"
                        name="after_condition_2"
                        className="me-1"
                        value="2"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_intra_operasi && data.ck_intra_operasi.Kondisi_Sesudah_2 === "1"}
                        innerRef={register("after_condition_2")}
                      />{' '}
                      <Label>Menggelembung</Label>
                    </Col>
                    <Col className="ms-1">
                      <Input
                        id="after-condition-3"
                        type="checkbox"
                        name="after_condition_3"
                        className="me-1"
                        value="3"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_intra_operasi && data.ck_intra_operasi.Kondisi_Sesudah_3 === "1"}
                        innerRef={register("after_condition_3")}
                      />{' '}
                      <Label>Lain-Lain</Label>
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        placeholder="Ketikkaan"
                        id="condition_after_other_text"
                        name="condition_after_other_text"
                        innerRef={register({ required: true })}
                        invalid={errors.condition_after_other_text && true}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>

              <tr>
                <td>
                  <Row>
                    <Col className="d-flex justify-content-center">
                      <Label>Kode Unit Elektrosurgikal</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>
                      <Input
                        type="text"
                        id="code_electrosurgical_unit"
                        name="code_electrosurgical_unit"
                        innerRef={register({ required: true })}
                        invalid={errors.code_electrosurgical_unit && true}
                      />{' '}
                    </Col>
                    <Col></Col>
                  </Row>
                </td>
              </tr>

              <tr>
                <td>
                  <Row>
                    <Col className='mt-3'>
                      <Label>13. Unit Pemanas</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '65%' }}>
                  <Row>
                    <Col className='mt-3'>
                      <Input
                        id="heating-unit-0"
                        type="radio"
                        name="heating_unit"
                        className="me-1"
                        value="0"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setUnitPanas(false);
                          }
                          setUnitPemanasInput('0');
                          handleRadioChange(e)
                        }}
                        checked={unitPemanasInput === '0'}
                        innerRef={register("heating_unit")}
                      />{' '}
                      <Label>Tidak Ada</Label>
                    </Col>
                    <Col className='mt-3'>
                      <Input
                        id="heating-unit-1"
                        type="radio"
                        name="heating_unit"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          setUnitPanas(e.target.checked)
                          handleRadioChange(e);
                          setUnitPemanasInput('1');
                        }}
                        // defaultChecked={data && data.ck_intra_operasi && data.ck_intra_operasi.Unit_Pemanas === 1}
                        checked={unitPemanasInput === '1'}
                        innerRef={register("heating_unit")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                  </Row>
                </td>
              </tr>

              {
                unitPanas && (
                  <>
                    <tr>
                      <td>
                        <Row>
                          <Col className="d-flex justify-content-center">
                            <Label>Pengaturan Temperature</Label>
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            <Input
                              type="text"
                              id="heater_setting_temperature"
                              name="heater_setting_temperature"
                              innerRef={register({ required: true })}
                              invalid={errors.heater_setting_temperature && true}
                            />{' '}
                          </Col>
                          <Col className='mt-1'>
                            <Label>Celcius</Label>
                          </Col>
                          <Col></Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col className="d-flex justify-content-center">
                            <Label>Mulai Jam</Label>
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            <Input
                              id="heater-start-time"
                              type="time"
                              name="heater_start_time"
                              defaultValue={(data && data.ck_intra_operasi && data.ck_intra_operasi.Pemanas_Mulai_Waktu) ? data.ck_intra_operasi.Pemanas_Mulai_Waktu : ''}
                              innerRef={register({ required: true})}
                            />
                          </Col>
                          <Col className="mt-1">
                            <Label>WIB</Label>
                          </Col>
                          <Col></Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col className="d-flex justify-content-center">
                            <Label>Selesai Jam</Label>
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            <Input
                              id="heater-finished-time"
                              type="time"
                              name="heater_finished_time"
                              defaultValue={(data && data.ck_intra_operasi && data.ck_intra_operasi.Pemanas_Selesai_Waktu) ? data.ck_intra_operasi.Pemanas_Selesai_Waktu : ''}
                              innerRef={register({ required: true})}
                            />
                          </Col>
                          <Col className="mt-1">
                            <Label>WIB</Label>
                          </Col>
                          <Col></Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col className="d-flex justify-content-center">
                            <Label>Kode Unit</Label>
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            <Input
                              type="text"
                              id="heater-code-unit"
                              name="heater_code_unit"
                              innerRef={register({ required: true })}
                              invalid={errors.heater_code_unit && true}
                            />{' '}
                          </Col>
                          <Col></Col>
                          <Col></Col>
                        </Row>
                      </td>
                    </tr>
                  </>
                )
              }

              <tr>
                <td>
                  <Row>
                    <Col className='mt-3'>
                      <Label>Unit Pendingin</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '65%' }}>
                  <Row>
                    <Col className='mt-3'>
                      <Input
                        id="unit-cooling-0"
                        type="radio"
                        name="unit_cooling"
                        className="me-1"
                        value="0"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setDingin(false);
                          }
                          setUnitPendinginInput('0');
                          handleRadioChange(e);
                        }}
                        checked={unitPendinginInput === '0'}
                        innerRef={register("unit_cooling")}
                      />{' '}
                      <Label>Tidak Ada</Label>
                    </Col>
                    <Col className='mt-3'>
                      <Input
                        id="unit-cooling-1"
                        type="radio"
                        name="unit_cooling"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          setDingin(e.target.checked)
                          handleRadioChange(e);
                          setUnitPendinginInput('1');
                        }}
                        // defaultChecked={data && data.ck_intra_operasi && data.ck_intra_operasi.Unit_Pendingin === 1}
                        checked={unitPendinginInput === '1'}
                        innerRef={register("unit_cooling")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                  </Row>
                </td>
              </tr>

              {
                dingin && (
                  <>
                    <tr>
                      <td>
                        <Row>
                          <Col className="d-flex justify-content-center">
                            <Label>Pengaturan Temperature</Label>
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            <Input
                              type="text"
                              id="cooler_setting_temperature"
                              name="cooler_setting_temperature"
                              innerRef={register({ required: true })}
                              invalid={errors.cooler_setting_temperature && true}
                            />{' '}
                          </Col>
                          <Col className='mt-1'>
                            <Label>Celcius</Label>
                          </Col>
                          <Col></Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col className="d-flex justify-content-center">
                            <Label>Mulai Jam</Label>
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            <Input
                              id="cooler-start-time"
                              type="time"
                              name="cooler_start_time"
                              defaultValue={(data && data.ck_intra_operasi && data.ck_intra_operasi.Pendingin_Mulai_Waktu) ? data.ck_intra_operasi.Pendingin_Mulai_Waktu : ''}
                              innerRef={register({ required: true})}
                            />
                          </Col>
                          <Col className="mt-1">
                            <Label>WIB</Label>
                          </Col>
                          <Col></Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col className="d-flex justify-content-center">
                            <Label>Selesai Jam</Label>
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            <Input
                              id="cooler-finished-time"
                              type="time"
                              name="cooler_finished_time"
                              defaultValue={(data && data.ck_intra_operasi && data.ck_intra_operasi.Pendingin_Selesai_Waktu) ? data.ck_intra_operasi.Pendingin_Selesai_Waktu : ''}
                              innerRef={register({ required: true})}
                            />
                          </Col>
                          <Col className='mt-1'>
                            <Label>WIB</Label>
                          </Col>
                          <Col></Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col className="d-flex justify-content-center">
                            <Label>Kode Unit</Label>
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            <Input
                              type="text"
                              id="cooler_code_unit"
                              name="cooler_code_unit"
                              innerRef={register({ required: true })}
                              invalid={errors.cooler_code_unit && true}
                            />{' '}
                          </Col>
                          <Col></Col>
                          <Col></Col>
                        </Row>
                      </td>
                    </tr>
                  </>
                )
              }
            </Table>
          </Row>
        </FormGroup>
      </TabPane>
    </TabContent>
  </>
}

export default TypeOperation;
