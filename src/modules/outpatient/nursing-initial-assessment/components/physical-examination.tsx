import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { DateTimeInput, TextInput } from "@src/shared/input";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { SubmitButton } from '@src/shared/button';
import { NursingInitialAssessmenttModel } from '../models/nursing-initial-assessment-model';
import agama from '../const/agama';
import hubungan from '../const/hubungan';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';

const PhysicalExamination = (props: {data: NursingInitialAssessmenttModel, setValue:any, initialImage?: string, register: any, errors: any}) => {
  const { data, setValue, register, errors, initialImage = '/assets/default/skala-nyeri.png' } = props;

  // const [personResponsible, setPersonResponsible] = useState(data?.form?.Tanda_Tangan === 'Wali' ? '2' : '1');
  const { treatment } = useAppSelector(state => state.patient);
  const [penanggungJawab, setPenanggungJawab] = useState<string>(data && data.form && data.form.Penanggung_Jawab ? data.form.Penanggung_Jawab : 'Pasien');
  // const [signaturePerson, setSignaturePerson] = useState(data?.form?.Tanda_Tangan === 'Wali' ? '2' : '1');
  const [total, setTotal] = useState(0);
  const [painScale, setPainScale] = useState<string>('Tidak Nyeri')
  const [face, setFace] = useState(data && data.form && data.form.Tabel_Wajah ? parseInt(data.form.Tabel_Wajah) : 0);
  const [foot, setFoot] = useState(data && data.form && data.form.Tabel_Kaki ? parseInt(data.form.Tabel_Kaki) : 0);
  const [activity, setActivity] = useState(data && data.form && data.form.Tabel_Aktifitas ? parseInt(data.form.Tabel_Aktifitas) : 0);
  const [cry, setCry] = useState(data && data.form && data.form.Tabel_Menangis ? parseInt(data.form.Tabel_Menangis) : 0);
  const [comfy, setComfy] = useState(data && data.form && data.form.Tabel_Kenyamanan ? parseInt(data.form.Tabel_Kenyamanan) : 0);
  const [nyeri, setNyeri] = useState((data && data.form && data.form.Nyeri) ? !!(data.form.Nyeri) : false);
  const [nyeriDewasa, setNyeriDewasa] = useState((data && data.form && data.form.Status_Nyeri === '0') ? !!(data.form.Status_Nyeri === '0') : false);
  const [nyeriAnak, setNyeriAnak] = useState((data && data.form && data.form.Status_Nyeri === '1') ? !!(data.form.Status_Nyeri === '1') : false);

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleRadioFace = (e: any) => {
    setFace(parseInt(e.target.value))
  }

  const handleRadioFoot = (e: any) => {
    setFoot(parseInt(e.target.value));
  }

  const handleRadioActivity = (e: any) => {
    setActivity(parseInt(e.target.value));
  }

  const handleRadioCry = (e: any) => {
    setCry(parseInt(e.target.value));
  }

  const handleRadioComfy = (e: any) => {
    setComfy(parseInt(e.target.value));
  }

  useEffect(() => {
    const sum = face + foot + activity + cry + comfy;
    setTotal(sum);
    setValue('total_score', sum)
  }, [face, foot, activity, cry, comfy])

  useEffect(() => {
    if (total) {
      if (total === 0) {
        setPainScale('Tidak Nyeri')
      } else if (total >= 1 && total <= 3) {
        setPainScale('Nyeri Ringan')
      } else if (total >= 4 && total <= 6) {
        setPainScale('Nyeri Sedang')
      } else if (total >= 7) {
        setPainScale('Nyeri Berat')
      }
    }
  }, [total])

  const handleChangeResponsiblePerson = (e: any) => {
    if (e.target.value === '1') {
      setValue('person_in_charge_name', treatment?.Pasien?.Nama ?? '');
      setValue('person_in_charge_address', treatment?.Pasien?.Alamat ?? '');
    } else {
      setValue('person_in_charge_name', treatment?.Wali?.Nama ?? '');
      setValue('person_in_charge_address', treatment?.Wali?.Alamat ?? '');
    }
  }

  return (
    <FormGroup className="form-group" row>

      <Col className="d-flex">
        <div className="me-1">
          <Input
            id="signature-person-1"
            type="radio"
            name="person_responsible"
            value="1"
            defaultChecked={penanggungJawab === '1'}
            onChange={(e) => {
              if (e.target.checked) {
                setPenanggungJawab('Pasien')
              }
              handleChangeResponsiblePerson(e)
              handleRadioChange(e);
            }}
            innerRef={register({ required: true })}
            invalid={errors.person_responsible && true} />{' '}
          <Label>Pasien</Label>
        </div>
        <div>
          <Input
            id="signature-person-2"
            type="radio"
            name="person_responsible"
            value="2"
            defaultChecked={penanggungJawab === '2'}
            onChange={(e) => {
              if (e.target.checked) {
                setPenanggungJawab('Wali')
              }
              handleChangeResponsiblePerson(e)
              handleRadioChange(e)
            }}
            innerRef={register({ required: true })}
            invalid={errors.person_responsible && true} />{' '}
          <Label>Wali</Label>
        </div>
      </Col>

      <FormGroup className="form-group" row>
        <TextInput readOnly={!!(penanggungJawab && penanggungJawab === 'Pasien')} name="person_in_charge_name" label="Nama" md={3} {...{ register, errors }} />
      </FormGroup>
      <FormGroup className="form-group" row>
        <TextInput readOnly={!!(penanggungJawab && penanggungJawab === 'Pasien')} name="person_in_charge_address" label="Alamat" md={3} {...{ register, errors }} />
      </FormGroup>
      {
        penanggungJawab && penanggungJawab === 'Wali' && (
          <>
            <FormGroup className="form-group" row>
              <tr style={{marginTop: '-30px'}}>
                <td>
                  <Row>
                    <Col>
                      <Label>Hubungan dengan Pasien</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>
                      <Input
                        className="mt-3"
                        type="select"
                        id='responsible_relationship'
                        name='responsible_relationship'
                        style={{marginLeft: '72px'}}
                        innerRef={register()}
                      >
                        <option value="" disabled={false}>--</option>
                        {
                          hubungan && hubungan.map((item: any, key: number) => {
                            return <option value={item} key={key}>{ item }</option>;
                          })
                        }
                      </Input>
                    </Col>
                  </Row>
                </td>
              </tr>
            </FormGroup>
          </>
        )
      }
          
      {/* <Row>
        <Col>
          <Label>Hubungan dengan Pasien</Label>
          <Col className="d-flex">
            <div className='me-2'>
              <Input
                id="person_responsible_1"
                type="radio"
                name="person_responsible"
                onChange={(e) => {
                  if (e.target.checked) {
                    setPenanggungJawab('Pasien')
                  }
                  handleChangeResponsiblePerson(e)
                  handleRadioChange(e);
                }}
                defaultChecked={penanggungJawab === '1'}
                value="1"
                innerRef={register("person_responsible")}
              />{' '}
              <Label>Pasien</Label>
            </div>
            <div>
              <Input
                id="person_responsible_2"
                type="radio"
                name="person_responsible"
                onChange={(e) => {
                  if (e.target.checked) {
                    setPenanggungJawab('Wali')
                  }
                  handleChangeResponsiblePerson(e)
                  handleRadioChange(e)
                }}
                defaultChecked={penanggungJawab === '2'}
                value="2"
                innerRef={register("person_responsible")}
              />{' '}
              <Label>Wali</Label>
            </div>
          </Col>
        </Col>
      </Row>
      {
        penanggungJawab && penanggungJawab === 'Pasien' && (
          <>
            <tr className='mt-1'>
              <td>
                <TextInput name="person_in_charge_name" md={4} {...{ register, errors }} />
              </td>
            </tr>
            <tr className='mt-1'>
              <td>
                <Row>
                  <Col>
                    <Label>Alamat</Label>
                  </Col>
                </Row>
              </td>
              <td>
                <Row>
                  <Col style={{marginLeft: '93px'}}>
                    <Input
                      readOnly
                      type='textarea'
                      id='person_in_charge_address_1'
                      name='person_in_charge_address'
                      innerRef={register('person_in_charge_address')}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
          </>
        )
      }
      {
        penanggungJawab && penanggungJawab === 'Wali' && (
          <>
            <tr className='mt-1'>
              <td>
                <Row>
                  <Col>
                    <Label>Nama</Label>
                  </Col>
                </Row>
              </td>
              <td>
                <Row>
                  <Col>
                    <TextInput name="person_in_charge_name" md={4} {...{ register, errors }} />
                  </Col>
                </Row>
              </td>
            </tr>
            <tr className='mt-1'>
              <td>
                <Row>
                  <Col>
                    <Label>Alamat</Label>
                  </Col>
                </Row>
              </td>
              <td>
                <Row>
                  <Col>
                    <Input
                      type="text"
                      id="person_in_charge_address_2"
                      name="person_in_charge_address"
                      innerRef={register('person_in_charge_address')}
                      style={{marginLeft: '230px', width: '155%'}}
                      invalid={errors.person_in_charge_address && true}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
            <tr style={{marginTop: '-30px'}}>
              <td>
                <Row>
                  <Col>
                    <Label>Hubungan dengan Pasien</Label>
                  </Col>
                </Row>
              </td>
              <td>
                <Row>
                  <Col>
                    <Input
                      className="mt-3"
                      type="select"
                      id='responsible_relationship'
                      name='responsible_relationship'
                      style={{marginLeft: '110px', width: '260%'}}
                      innerRef={register()}
                    >
                      <option value="" disabled={false}>--</option>
                      {
                        hubungan && hubungan.map((item: any, key: number) => {
                          return <option value={item} key={key}>{ item }</option>;
                        })
                      }
                    </Input>
                  </Col>
                </Row>
              </td>
            </tr>
          </>
        )
      } */}
      <h4 className="mt-2">1. Pemeriksaan Fisik </h4>
      <hr />
      <tbody>
        <tr>
          <td>
            <Row>
              <td>
                <div className='me-1'>
                  <Row>
                    <Col md='2'>
                      <Label>Keluhan Utama</Label>
                    </Col>
                    <Col>
                      <Input
                        type="textarea"
                        name="main_complaint"
                        innerRef={register()}
                        invalid={errors.td && true}
                      />
                    </Col>
                  </Row>
                </div>
              </td>
            </Row>
            <Row style={{ marginTop: '15px' }}>
              <Table>
                <tr>
                  <td>
                    <div className="me-1">
                      <Label>TD</Label>
                    </div>
                  </td>
                  <td>
                    <Row>
                      <Col>
                        <Input
                          type="text"
                          style={{ width: '100%' }}
                          name="td"
                          innerRef={register()}
                          invalid={errors.td && true}
                          // readOnly={(td) ? td !== '1' : undefined}
                        />
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <div className="me-1">
                      <Label>BB</Label>
                    </div>
                  </td>
                  <td>
                    <Row>
                      <Col>
                        <Input
                          type="text"
                          style={{ width: '100%' }}
                          name="bb"
                          innerRef={register()}
                          invalid={errors.bb && true}
                          // readOnly={(odRnfl) ? odRnfl !== '1' : undefined}
                        />
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <div className="me-1">
                      <Label>P</Label>
                    </div>
                  </td>
                  <td>
                    <Row>
                      <Col>
                        <Input
                          type="text"
                          style={{ width: '100%'}}
                          name="p"
                          innerRef={register()}
                          invalid={errors.p && true}
                          // readOnly={(odRnfl) ? odRnfl !== '1' : undefined}
                        />
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="me-1">
                      <Label>HR</Label>
                    </div>
                  </td>
                  <td>
                    <Row>
                      <Col>
                        <Input
                          type="text"
                          style={{ width: '100%' }}
                          name="pulse"
                          innerRef={register()}
                          invalid={errors.pulse && true}
                          // readOnly={(odRnfl) ? odRnfl !== '1' : undefined}
                        />
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <div className="me-1">
                      <Label>TB</Label>
                    </div>
                  </td>
                  <td>
                    <Row>
                      <Col>
                        <Input
                          type="text"
                          style={{ width: '100%' }}
                          name="tb"
                          innerRef={register()}
                          invalid={errors.tb && true}
                          // readOnly={(odRnfl) ? odRnfl !== '1' : undefined}
                        />
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <div className="me-1">
                      <Label>T</Label>
                    </div>
                  </td>
                  <td>
                    <Row>
                      <Col>
                        <Input
                          type="text"
                          style={{ width: '100%' }}
                          name="temperature"
                          innerRef={register()}
                          invalid={errors.temperature && true}
                          // readOnly={(odRnfl) ? odRnfl !== '1' : undefined}
                        />
                      </Col>
                    </Row>
                  </td>
                </tr>
              </Table>
            </Row>
          </td>
        </tr>
      </tbody>

      <tr>
        <td style={{ width: '20%' }}>
          <Row className="mt-1 me-5">
            <Col>
              <Label>Kesadaran</Label>
            </Col>
          </Row>
        </td>
        <td>
          <Row>
            <Col>
              <Row className="mb-1">
                <Col style={{marginLeft: '100px'}}>
                  <Input
                    id="awareness_1"
                    type="radio"
                    name="awareness"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Kesadaran === '1'}
                    value="1"
                    innerRef={register("awareness")}
                  />{' '}
                  <Label>CM</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '100px'}}>
                  <Input
                    id="awareness_2"
                    type="radio"
                    name="awareness"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Kesadaran === '2'}
                    value="0"
                    innerRef={register("awareness")}
                  />{' '}
                  <Label>Apatis</Label>
                </Col>
              </Row>
              <Row className='mb-1'>
                <Col style={{marginLeft: '100px'}}>
                  <Input
                    id="awareness_3"
                    type="radio"
                    name="awareness"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Kesadaran === '3'}
                    value="2"
                    innerRef={register("awareness")}
                  />{' '}
                  <Label>Somnolent</Label>
                </Col>
              </Row>
              <Row className='mb-1'>
                <Col style={{marginLeft: '100px'}}>
                  <Input
                    id="awareness_4"
                    type="radio"
                    name="awareness"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Kesadaran === '4'}
                    value="2"
                    innerRef={register("awareness")}
                  />{' '}
                  <Label>Soporocoma</Label>
                </Col>
              </Row>
              <Row>
                <Col style={{marginLeft: '100px'}}>
                  <Input
                    id="awareness_5"
                    type="radio"
                    name="awareness"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Kesadaran === '5'}
                    value="2"
                    innerRef={register("awareness")}
                  />{' '}
                  <Label>Koma</Label>
                </Col>
              </Row>
            </Col>
          </Row>
        </td>
      </tr>
      <tr className='mt-2'>
        <td>
          <Row>
            <Col>
              <Label>Nyeri / Tidak Nyaman</Label>
            </Col>
          </Row>
        </td>
        <td>
          <Row>
            <Col>
              <Row className="mb-1" style={{width: '150%'}}>
                <Col style={{marginLeft: '100px'}}>
                  <Input
                    id="painful_1"
                    type="radio"
                    name="painful"
                    className="me-1"
                    onChange={(e) => {
                      setNyeri(e.target.checked)
                      handleRadioChange(e);
                    }}
                    defaultChecked={data && data.form && data.form.Nyeri === '1'}
                    value="1"
                    innerRef={register("painful")}
                  />{' '}
                  <Label> Ya </Label>

                </Col>
                <Col style={{marginLeft: '-40px'}}>
                  <Input
                    id="painful_0"
                    type="radio"
                    name="painful"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setNyeri(false);
                      } if (e.target.checked) {
                        setNyeriDewasa(false);
                      } if (e.target.checked) {
                        setNyeriAnak(false);
                      }
                      handleRadioChange(e)
                    }}
                    defaultChecked={data && data.form && data.form.Nyeri === '0'}
                    value="0"
                    innerRef={register("painful")}
                  />{' '}
                  <Label>Tidak</Label>
                </Col>
              </Row>
              {/* <Row className="mb-1">
                
              </Row> */}
            </Col>
          </Row>
        </td>
      </tr>
      {
        nyeri && (
          <>
            <tr>
              {/* <td>
                  <Row>
                    <Col>
                      <Label>Terhadap</Label>
                    </Col>
                  </Row>
                </td> */}
              <td>
                <Row style={{ width: '120%'}}>
                  <Col style={{marginLeft: '237px'}}>
                    <Input
                      id="pain_status_0"
                      type="radio"
                      name="pain_status"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setNyeriDewasa(true);
                        } if (e.target.checked) {
                          setNyeriAnak(false);
                        }
                        handleRadioChange(e)
                      }}
                      defaultChecked={data && data.form && data.form.Status_Nyeri === '0'}
                      value="0"
                      innerRef={register("pain_status")}
                    />{' '}
                    <Label>Pengkajian Nyeri Dewasa</Label>
                  </Col>
                  <Col>
                    <Input
                      id="pain_status_1"
                      type="radio"
                      name="pain_status"
                      className="me-1"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setNyeriAnak(true);
                        } if (e.target.checked) {
                          setNyeriDewasa(false);
                        }
                        handleRadioChange(e)
                      }}
                      defaultChecked={data && data.form && data.form.Status_Nyeri === '1'}
                      value="1"
                      innerRef={register("pain_status")}
                    />{' '}
                    <Label>Pengkajian Nyeri Anak</Label>
                  </Col>
                </Row>
              </td>
            </tr>
          </>
        )
      }

      {
        nyeriDewasa && (
          <>
            <Row className='mt-2'>
              <Col md='2'>
                <Label>Skala Nyeri</Label>
              </Col>
              <Col md='10' className='align-items-center justify-content-center text-center'>
                <div className='d-flex justify-content-center'>
                  <div className='me-2'>
                    <Input
                      id="pain_scale"
                      type="radio"
                      name="pain_scale"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Skala_Nyeri === '0'}
                      value="0"
                      innerRef={register("pain_scale")}
                    />{' '}
                    <Label>0</Label>
                  </div>
                  <div className='me-2'>
                    <Input
                      id="pain_scale_1"
                      type="radio"
                      name="pain_scale"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Skala_Nyeri === '1'}
                      value="1"
                      innerRef={register("pain_scale")}
                    />{' '}
                    <Label>1</Label>
                  </div>
                  <div className='me-2'>
                    <Input
                      id="pain_scale_2"
                      type="radio"
                      name="pain_scale"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Skala_Nyeri === '2'}
                      value="2"
                      innerRef={register("pain_scale")}
                    />{' '}
                    <Label>2</Label>
                  </div>
                  <div className='me-2'>
                    <Input
                      id="pain_scale_3"
                      type="radio"
                      name="pain_scale"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Skala_Nyeri === '3'}
                      value="3"
                      innerRef={register("pain_scale")}
                    />{' '}
                    <Label>3</Label>
                  </div>
                  <div className='me-2'>
                    <Input
                      id="pain_scale_4"
                      type="radio"
                      name="pain_scale"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Skala_Nyeri === '4'}
                      value="4"
                      innerRef={register("pain_scale")}
                    />{' '}
                    <Label>4</Label>
                  </div>
                  <div className='me-2'>
                    <Input
                      id="pain_scale_5"
                      type="radio"
                      name="pain_scale"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Skala_Nyeri === '5'}
                      value="5"
                      innerRef={register("pain_scale")}
                    />{' '}
                    <Label>5</Label>
                  </div>
                  <div className='me-2'>
                    <Input
                      id="pain_scale_6"
                      type="radio"
                      name="pain_scale"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Skala_Nyeri === '6'}
                      value="6"
                      innerRef={register("pain_scale")}
                    />{' '}
                    <Label>6</Label>
                  </div>
                  <div className='me-2'>
                    <Input
                      id="pain_scale_7"
                      type="radio"
                      name="pain_scale"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Skala_Nyeri === '7'}
                      value="7"
                      innerRef={register("pain_scale")}
                    />{' '}
                    <Label>7</Label>
                  </div>
                  <div className='me-2'>
                    <Input
                      id="pain_scale_8"
                      type="radio"
                      name="pain_scale"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Skala_Nyeri === '8'}
                      value="8"
                      innerRef={register("pain_scale")}
                    />{' '}
                    <Label>8</Label>
                  </div>
                  <div className='me-2'>
                    <Input
                      id="pain_scale_9"
                      type="radio"
                      name="pain_scale"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Skala_Nyeri === '9'}
                      value="9"
                      innerRef={register("pain_scale")}
                    />{' '}
                    <Label>9</Label>
                  </div>
                  <div>
                    <Input
                      id="pain_scale_10"
                      type="radio"
                      name="pain_scale"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Skala_Nyeri === '10'}
                      value="10"
                      innerRef={register("pain_scale")}
                    />{' '}
                    <Label>10</Label>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md='2'></Col>
              <Col md='10' className='text-center'>
                <Image
                  src='/assets/default/skala-nyeri.png'
                  width='700rem'
                  height='150rem'
                  objectFit='contain'
                />
              </Col>
            </Row>

            <Row className='mt-1'>
              <Col>
                <Label>Skrining Nyeri</Label>
              </Col>
              <Col md='9'>
                <div>
                  <Input
                    id="pain_screening_1"
                    type="radio"
                    name="pain_screening"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Skrining_Nyeri === '1'}
                    value="1"
                    innerRef={register("pain_screening")}
                  />{' '}
                  <Label>Tidak Ada</Label>
                </div>
                <div>
                  <Input
                    id="pain_screening_2"
                    type="radio"
                    name="pain_screening"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Skrining_Nyeri === '2'}
                    value="2"
                    innerRef={register("pain_screening")}
                  />{' '}
                  <Label>Nyeri Kronis</Label>
                </div>
                <div>
                  <Input
                    id="pain_screening_3"
                    type="radio"
                    name="pain_screening"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Skrining_Nyeri === '3'}
                    value="3"
                    innerRef={register("pain_screening")}
                  />{' '}
                  <Label>Nyeri Akut</Label>
                </div>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col>
                <Label>Lokasi Nyeri</Label>
              </Col>
              <Col md='9'>
                <Input
                  type="text"
                  name="pain_location"
                  innerRef={register()}
                  invalid={errors.pain_location && true}
                  // readOnly={(odRnfl) ? odRnfl !== '1' : undefined}
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col>
                <Label>Durasi Nyeri</Label>
              </Col>
              <Col md='9'>
                <Input
                  type="text"
                  name="pain_duration"
                  innerRef={register()}
                  invalid={errors.pain_duration && true}
                  // readOnly={(odRnfl) ? odRnfl !== '1' : undefined}
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col>
                <Label>Frekwensi Nyeri</Label>
              </Col>
              <Col md='9'>
                <Input
                  type="text"
                  name="frequency_pain"
                  innerRef={register()}
                  invalid={errors.frequency_pain && true}
                  // readOnly={(odRnfl) ? odRnfl !== '1' : undefined}
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col>
                <Label>Nyeri Hilang Bila</Label>
              </Col>
              <Col md='9'>
                <div>
                  <Input
                    id="pain_lost_1"
                    type="radio"
                    name="pain_lost"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Nyeri_Hilang === '1'}
                    value="1"
                    innerRef={register("pain_lost")}
                  />{' '}
                  <Label>Minum Obat</Label>
                </div>
                <div>
                  <Input
                    id="pain_lost_2"
                    type="radio"
                    name="pain_lost"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Nyeri_Hilang === '2'}
                    value="2"
                    innerRef={register("pain_lost")}
                  />{' '}
                  <Label>Mendengar Musik</Label>
                </div>
                <div>
                  <Input
                    id="pain_lost_3"
                    type="radio"
                    name="pain_lost"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Nyeri_Hilang === '3'}
                    value="3"
                    innerRef={register("pain_lost")}
                  />{' '}
                  <Label>Istirahat</Label>
                </div>
                <div>
                  <Input
                    id="pain_lost_4"
                    type="radio"
                    name="pain_lost"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Nyeri_Hilang === '4'}
                    value="4"
                    innerRef={register("pain_lost")}
                  />{' '}
                  <Label>Merubah Posisi</Label>
                </div>
                <div>
                  <Col>
                    <Input
                      id="pain_lost_5"
                      type="radio"
                      name="pain_lost"
                      className="me-1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Nyeri_Hilang === '5'}
                      value="5"
                      innerRef={register("pain_lost")}
                    />{' '}
                    <Label>Lain-lain, sebutkan</Label>
                  </Col>
                  <Col>
                    <Input
                      type="text"
                      name="pain_missing_other_text"
                      innerRef={register()}
                      invalid={errors.pain_missing_other_text && true}
                    // readOnly={(odRnfl) ? odRnfl !== '1' : undefined}
                    />
                  </Col>
                </div>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col>
                <Label>Diberitahukan ke Dokter </Label>
              </Col>
              <Col md='9'>
                <Input
                  id="tell_doctor_physical_examination_1"
                  type="radio"
                  name="tell_doctor_physical_examination"
                  className="me-1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.form && data.form.Beritahu_Dokter_Pemeriksaan_Fisik === '1'}
                  value="1"
                  innerRef={register("tell_doctor_physical_examination")}
                />{' '}
                <Label>Tidak</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='2'>
                <Input
                  id="tell_doctor_physical_examination_2"
                  type="radio"
                  name="tell_doctor_physical_examination"
                  className="me-1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.form && data.form.Beritahu_Dokter_Pemeriksaan_Fisik === '2'}
                  value="2"
                  innerRef={register("tell_doctor_physical_examination")}
                />{' '}
                <Label>Ya, Pukul</Label>
              </Col>
              <Col md='7'>
                <Input
                  type="datetime-local"
                  id='notify_doctor_physical_examination_at'
                  name='notify_doctor_physical_examination_at'
                  innerRef={register()}
                  invalid={errors.notify_doctor_physical_examination_at && true}
                />
              </Col>
            </Row>
          </>
        )
      }
      {
        nyeriAnak && (
          <>
            <Table className='mt-2' bordered>
              <tr>
                <th>Kategori</th>
                <th>Parameter</th>
                <th>Skor</th>
                <th></th>
              </tr>
              <tr>
                <th rowSpan={3}>Wajah</th>
                <th>Rileks, ada kontak mata atau senyum</th>
                <td className='fw-bolder'>0</td>
                <td>
                  <Row>
                    <Col style={{marginTop: '-5px'}}>
                      <Input
                        id="face_table_1"
                        type="radio"
                        name="face_table"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioFace(e)
                          handleRadioChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Tabel_Wajah === '0'}
                        value="0"
                        innerRef={register("face_table")}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <th>Sesekali meringis atau mengerutkan kening</th>
                <td className='fw-bolder'>1</td>
                <td>
                  <Row>
                    <Col style={{marginTop: '-5px'}}>
                      <Input
                        id="face_table_2"
                        type="radio"
                        name="face_table"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioFace(e)
                          handleRadioChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Tabel_Wajah === '1'}
                        value="1"
                        innerRef={register("face_table")}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <th>Sering Cemberut, mata tertutup, mulut terbuka</th>
                <td className='fw-bolder'>2</td>
                <td>
                  <Row>
                    <Col style={{marginTop: '-5px'}}>
                      <Input
                        id="face_table_3"
                        type="radio"
                        name="face_table"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioFace(e)
                          handleRadioChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Tabel_Wajah === '2'}
                        value="2"
                        innerRef={register("face_table")}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <th scope='row' rowSpan={3}>Kaki</th>
                <th>Posisi normal atau santai</th>
                <td className='fw-bolder'>0</td>
                <td>
                  <Row>
                    <Col style={{marginTop: '-5px'}}>
                      <Input
                        id="foot_table_1"
                        type="radio"
                        name="foot_table"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e)
                          handleRadioFoot(e)
                        }}
                        defaultChecked={data && data.form && data.form.Tabel_Kaki === '0'}
                        value="0"
                        innerRef={register("foot_table")}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <th>Tidak nyaman, gelisah, tegang</th>
                <td className='fw-bolder'>1</td>
                <td>
                  <Row>
                    <Col style={{marginTop: '-5px'}}>
                      <Input
                        id="foot_table_2"
                        type="radio"
                        name="foot_table"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e)
                          handleRadioFoot(e)
                        }}
                        defaultChecked={data && data.form && data.form.Tabel_Kaki === '1'}
                        value="1"
                        innerRef={register("foot_table")}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <th>Menendang atau kaki disusun</th>
                <td className='fw-bolder'>2</td>
                <td>
                  <Row>
                    <Col style={{marginTop: '-5px'}}>
                      <Input
                        id="foot_table_3"
                        type="radio"
                        name="foot_table"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e)
                          handleRadioFoot(e)
                        }}
                        defaultChecked={data && data.form && data.form.Tabel_Kaki === '2'}
                        value="2"
                        innerRef={register("foot_table")}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <th scope='row' rowSpan={3}>Aktivitas</th>
                <th>Aktivitas normal, bergerak dengan mudah</th>
                <td className='fw-bolder'>0</td>
                <td>
                  <Row>
                    <Col style={{marginTop: '-5px'}}>
                      <Input
                        id="activity_table_1"
                        type="radio"
                        name="activity_table"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e)
                          handleRadioActivity(e)
                        }}
                        defaultChecked={data && data.form && data.form.Tabel_Aktifitas === '0'}
                        value="0"
                        innerRef={register("activity_table")}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <th>Menggeliat, menggeser, maju mundur, tegang</th>
                <td className='fw-bolder'>1</td>
                <td>
                  <Row>
                    <Col style={{marginTop: '-5px'}}>
                      <Input
                        id="activity_table_2"
                        type="radio"
                        name="activity_table"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e)
                          handleRadioActivity(e)
                        }}
                        defaultChecked={data && data.form && data.form.Tabel_Aktifitas === '1'}
                        value="1"
                        innerRef={register("activity_table")}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <th>Melengkung, kaku</th>
                <td className='fw-bolder'>2</td>
                <td>
                  <Row>
                    <Col style={{marginTop: '-5px'}}>
                      <Input
                        id="activity_table_3"
                        type="radio"
                        name="activity_table"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e)
                          handleRadioActivity(e)
                        }}
                        defaultChecked={data && data.form && data.form.Tabel_Aktifitas === '2'}
                        value="2"
                        innerRef={register("activity_table")}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <th scope='row' rowSpan={3}>Menangis</th>
                <th>Tidak menangis (terjaga atau tertidur)</th>
                <td className='fw-bolder'>0</td>
                <td>
                  <Row>
                    <Col style={{marginTop: '-5px'}}>
                      <Input
                        id="crying_table_1"
                        type="radio"
                        name="crying_table"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e)
                          handleRadioCry(e)
                        }}
                        defaultChecked={data && data.form && data.form.Tabel_Menangis === '0'}
                        value="0"
                        innerRef={register("crying_table")}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <th>Erangan atau rengekan, keluhan sesekali</th>
                <td className='fw-bolder'>1</td>
                <td>
                  <Row>
                    <Col style={{marginTop: '-5px'}}>
                      <Input
                        id="crying_table_2"
                        type="radio"
                        name="crying_table"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e)
                          handleRadioCry(e)
                        }}
                        defaultChecked={data && data.form && data.form.Tabel_Menangis === '1'}
                        value="1"
                        innerRef={register("crying_table")}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <th>Menangis terus, teriakan atau isak tangis</th>
                <td className='fw-bolder'>2</td>
                <td>
                  <Row>
                    <Col style={{marginTop: '-5px'}}>
                      <Input
                        id="crying_table_3"
                        type="radio"
                        name="crying_table"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e)
                          handleRadioCry(e)
                        }}
                        defaultChecked={data && data.form && data.form.Tabel_Menangis === '2'}
                        value="2"
                        innerRef={register("crying_table")}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <th scope='row'>Kenyamanan</th>
                <th>Tenang atau santai</th>
                <td className='fw-bolder'>0</td>
                <td>
                  <Row>
                    <Col style={{marginTop: '-5px'}}>
                      <Input
                        id="convenience_table_1"
                        type="radio"
                        name="convenience_table"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e)
                          handleRadioComfy(e)
                        }}
                        defaultChecked={data && data.form && data.form.Tabel_Kenyamanan === '0'}
                        value="0"
                        innerRef={register("convenience_table")}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <th></th>
                <th>Nyaman ketika disentuh</th>
                <td className='fw-bolder'>1</td>
                <td>
                  <Row>
                    <Col style={{marginTop: '-5px'}}>
                      <Input
                        id="convenience_table_2"
                        type="radio"
                        name="convenience_table"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e)
                          handleRadioComfy(e)
                        }}
                        defaultChecked={data && data.form && data.form.Tabel_Kenyamanan === '1'}
                        value="1"
                        innerRef={register("convenience_table")}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <th></th>
                <th>Sulit nyaman walaupun sudah disentuh atau dipeluk</th>
                <td className='fw-bolder'>2</td>
                <td>
                  <Row>
                    <Col style={{marginTop: '-5px'}}>
                      <Input
                        id="convenience_table_3"
                        type="radio"
                        name="convenience_table"
                        className="me-1"
                        onChange={(e) => {
                          handleRadioChange(e)
                          handleRadioComfy(e)
                        }}
                        defaultChecked={data && data.form && data.form.Tabel_Kenyamanan === '2'}
                        value="2"
                        innerRef={register("convenience_table")}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td></td>
                <th className='fw-bolder fs-5'>Total</th>
                <td className='fw-bolder fs-5'>{total}</td>
              </tr>
              <tr>
                <td></td>
                <td><Label className='fw-bolder fs-5'>{painScale}</Label></td>
                <td></td>
              </tr>
            </Table>
          </>
        )
      }
    </FormGroup>
  )
}
export default PhysicalExamination;