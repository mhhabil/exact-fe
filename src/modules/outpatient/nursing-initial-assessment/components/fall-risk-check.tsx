import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { DateTimeInput, TextInput } from "@src/shared/input";
import { useEffect, useState } from "react";
import ToolInspection from "@src/shared/tool-inspection/tool-inspection";
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { SubmitButton } from '@src/shared/button';
import { NursingInitialAssessmenttModel } from '../models/nursing-initial-assessment-model';

const FallRiskCheck = (props: {data: NursingInitialAssessmenttModel, setValue:any, initialImage?: string, register: any, errors: any}) => {
  const { data, setValue, register, errors, initialImage = '/assets/default/skala-nyeri.png' } = props;

  const getDependenceValue = () => {
    const toolValue: Array<string> = [];
    if (data && data.form && data.form.Ketergantungan_Terhadap) {
      const helpingTools = data.form.Ketergantungan_Terhadap;
      if (helpingTools.Obat_obatan) {
        toolValue.push('1')
      }
      if (helpingTools.Rokok) {
        toolValue.push('2')
      }
      if (helpingTools.Alkohol) {
        toolValue.push('3')
      }
      if (helpingTools.Lain_lain) {
        toolValue.push('4')
      }
    }
    return toolValue;
  }

  const getTypeOfDiseases = () => {
    const toolValue: Array<string> = [];
    if (data && data.form && data.form.Jenis_Penyakit) {
      const helpingTools = data.form.Jenis_Penyakit;
      if (helpingTools.Dm) {
        toolValue.push('1')
      }
      if (helpingTools.Ginjal) {
        toolValue.push('2')
      }
      if (helpingTools.Hati) {
        toolValue.push('3')
      }
      if (helpingTools.Jantung) {
        toolValue.push('4')
      }
      if (helpingTools.Paru) {
        toolValue.push('5')
      }
      if (helpingTools.Stroke) {
        toolValue.push('6')
      }
      if (helpingTools.Kanker) {
        toolValue.push('7')
      }
      if (helpingTools.Penurunan_Imunitas_Geriatri) {
        toolValue.push('8')
      }
      if (helpingTools.Lain_lain) {
        toolValue.push('9')
      }
    }
    return toolValue;
  }

  const [overall, setOverall] = useState<number>(1)
  const [ketergantungan, setUnitKetergantungan] = useState((data && data.form && data.form.Mempunyai_Ketergantungan) ? !!(data.form.Mempunyai_Ketergantungan) : false);
  const [diagnosa, setDiagnosa] = useState(!!((data && data.form && data.form.Diagnosa_Khusus && data.form.Diagnosa_Khusus === '1')));
  // const [nyeri, setNyeri] = useState((data && data.form && data.form.Unit_Pemanas) ? !!(data.form.Unit_Pemanas) : false);
  // const [nyeriDewasa, setNyeriDewasa] = useState((data && data.form && data.form.Unit_Pemanas) ? !!(data.form.Unit_Pemanas) : false);
  // const [nyeriAnak, setNyeriAnak] = useState((data && data.form && data.form.Unit_Pemanas) ? !!(data.form.Unit_Pemanas) : false);
  const [image, setImage] = useState<string | SignatureModel>(initialImage);
  const [hasilTidakSeimbang, setHasilTidakSeimbang] = useState<boolean>(data && data.form && data.form.Cara_Berjalan === '1');
  // const [hasilAlatBantu, setHasilAlatBantu] = useState<boolean>(data && data.form && data.form.Memegang_Penopang === 1);
  const [hasilMenopang, setHasilMenopang] = useState<boolean>(data && data.form && data.form.Memegang_Penopang === '1');
  const [dependenceLists, setDependenceLists] = useState<Array<string>>(getDependenceValue())
  const [diseaseLists, setDiseaseLists] = useState<Array<string>>(getTypeOfDiseases())

  useEffect(() => {
    const hasilTidakSeimbang = data && data.form && data.form.Cara_Berjalan === '1'
    // const hasilAlatBantu = data && data.form && data.form.Berjalan_Alat_Bantu === 1
    const hasilMenopang = data && data.form && data.form.Memegang_Penopang === '1'

    const hasilA = hasilTidakSeimbang;
    const hasilB = hasilMenopang;
    if (hasilA && hasilB) {
      setOverall(3);
    } else if (hasilA || hasilB) {
      setOverall(2)
    } else {
      setOverall(1)
    }
  }, [data])

  useEffect(() => {
    if (overall) {
      setValue('result_value', overall.toString());
      if (overall === 1) {
        setValue('result_text', 'Tidak Berisiko')
      } else if (overall === 2) {
        setValue('result_text', 'Risiko Rendah')
      } else if (overall === 3) {
        setValue('result_text', 'Risiko Tinggi')
      }
    }
  }, [overall])

  const handleDependenceListCheckbox = (e: any) => {
    if (e.target.checked) {
      if (dependenceLists && dependenceLists.includes(e.target.value)) {
        return;
      } else {
        setDependenceLists([...dependenceLists, e.target.value])
      }
    }
    if (!e.target.checked) {
      if (dependenceLists && dependenceLists.includes(e.target.value)) {
        const newLists = dependenceLists.filter((val: string) => val !== e.target.value)
        setDependenceLists(newLists);
      } else {
        return 0;
      }
    }
  }

  const handleDiseasesListCheckbox = (e: any) => {
    if (e.target.checked) {
      if (diseaseLists && diseaseLists.includes(e.target.value)) {
        return;
      } else {
        setDiseaseLists([...diseaseLists, e.target.value])
      }
    }
    if (!e.target.checked) {
      if (diseaseLists && diseaseLists.includes(e.target.value)) {
        const newLists = diseaseLists.filter((val: string) => val !== e.target.value)
        setDiseaseLists(newLists);
      } else {
        return 0;
      }
    }
  }

  useEffect(() => {
    setValue('dependence_on', dependenceLists);
  }, [dependenceLists])

  useEffect(() => {
    setValue('types_of_diseases', diseaseLists);
  }, [diseaseLists])

  const handleRadioSelect = (e: any) => {
    if (e.target.name === 'how_to_walk') {
      setHasilTidakSeimbang(e.target.value === '1');
    }

    // if (e.target.name === 'auxiliary_radio') {
    //   setHasilAlatBantu(e.target.value === '1');
    // }

    if (e.target.name === 'holding_support') {
      setHasilMenopang(e.target.value === '1');
    }
  }

  useEffect(() => {
    const hasilA = hasilTidakSeimbang;
    const hasilB = hasilMenopang;
    if (hasilA && hasilB) {
      setOverall(3);
    } else if (hasilA || hasilB) {
      setOverall(2)
    } else {
      setOverall(1)
    }
  }, [hasilMenopang, hasilTidakSeimbang]);

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  return (
    <FormGroup className="form-group" row>
      <h4 className="mt-2">2. Pemeriksaan Risiko Cedera / Jatuh </h4>
      <hr />
      <tr className='mt-2'>
        <td>
          <Input
            type='hidden'
            name='result_text'
            innerRef={register('result_text')}
          />
          <Input
            type='hidden'
            name='result_value'
            innerRef={register('result_value')}
          />
          <Row>
            <Col>
              <Label>A. Perhatikan cara berjalan pasien saat akan duduk dikursi. Apakah pasien tampak tidak seimbang (sempoyongan / limbung) ?</Label>
            </Col>
          </Row>
        </td>
      </tr>
      <tr>
        <td>
          <Row>
            <Col>
              <Row className="mb-1">
                <Col>
                  <Input
                    id="how_to_walk_1"
                    type="radio"
                    name="how_to_walk"
                    className="me-1"
                    onChange={(e) => {
                      handleRadioSelect(e)
                      handleRadioChange(e);
                    }}
                    defaultChecked={data && data.form && data.form.Cara_Berjalan === '1'}
                    value="1"
                    innerRef={register("how_to_walk")}
                  />{' '}
                  <Label>Ya</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <Input
                    id="how_to_walk_0"
                    type="radio"
                    name="how_to_walk"
                    className="me-1"
                    onChange={(e) => {
                      handleRadioSelect(e)
                      handleRadioChange(e);
                    }}
                    defaultChecked={data && data.form && data.form.Cara_Berjalan === '0'}
                    value="0"
                    innerRef={register("how_to_walk")}
                  />{' '}
                  <Label>Tidak</Label>
                </Col>
              </Row>
            </Col>
          </Row>
        </td>
      </tr>
      <tr className='mt-2'>
        <td>
          <Row >
            <Col style={{marginTop: '-4%'}}>
              <Label>B. Apakah pasien memegang pinggiran kursi atau meja atau benda lain sebagai penopang saat akan duduk ?</Label>
            </Col>
          </Row>
        </td>
      </tr>
      <tr>
        <td>
          <Row>
            <Col>
              <Row className="mb-1">
                <Col>
                  <Input
                    id="holding_support_1"
                    type="radio"
                    name="holding_support"
                    className="me-1"
                    onChange={(e) => {
                      handleRadioSelect(e)
                      handleRadioChange(e);
                    }}
                    defaultChecked={data && data.form && data.form.Memegang_Penopang === '1'}
                    value="1"
                    innerRef={register("holding_support")}
                  />{' '}
                  <Label>Ya</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <Input
                    id="holding_support_0"
                    type="radio"
                    name="holding_support"
                    className="me-1"
                    onChange={(e) => {
                      handleRadioSelect(e)
                      handleRadioChange(e);
                    }}
                    defaultChecked={data && data.form && data.form.Memegang_Penopang === '0'}
                    value="0"
                    innerRef={register("holding_support")}
                  />{' '}
                  <Label>Tidak</Label>
                </Col>
              </Row>
            </Col>
          </Row>
        </td>
      </tr>

      <Label for="result_description" md="2" sm="12">Hasil</Label>
      <Col>
        {
          overall && overall === 3 && (
            <Label md="2" sm="12" className="fw-bold"><b>Risiko Tinggi</b></Label>
          )
        }
        {
          overall && overall === 1 && (
            <Label md="2" sm="12" className="fw-bold"><b>Tidak Berisiko</b></Label>
          )
        }
        {
          overall && overall === 2 && (
            <Label md="2" sm="12" className="fw-bold"><b>Risiko Rendah</b></Label>
          )
        }
      </Col>


      <tr className='mt-2'>
        <td>
          <Row>
            <Col>
              <Label>Diberitahukan ke Dokter </Label>
            </Col>
          </Row>
        </td>
        <td>
          <Row>
            <Col>
              <Row className="mb-1">
                <Col style={{marginLeft: '80px'}}>
                  <Input
                    id="tell_doctor_risk_injury_1"
                    type="radio"
                    name="tell_doctor_risk_injury"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Beritahu_Dokter_Risiko_Cedera === '1'}
                    value="1"
                    innerRef={register("tell_doctor_risk_injury")}
                  />{' '}
                  <Label>Tidak</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '80px'}}>
                  <Input
                    id="tell_doctor_risk_injury_0"
                    type="radio"
                    name="tell_doctor_risk_injury"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Beritahu_Dokter_Risiko_Cedera === '0'}
                    value="0"
                    innerRef={register("tell_doctor_risk_injury")}
                  />{' '}
                  <Label>Ya, Pukul</Label>
                </Col>
                <Col style={{marginTop: '-30px', marginLeft: '0px'}}>
                  <DateTimeInput
                    name='tell_doctor_risk_injury_punch'
                    defaultValue='tell_doctor_risk_injury_punch'
                    md={2}
                    {...{ register, errors }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </td>
      </tr>

      <h4 className="mt-2">3. Riwayat Kesehatan</h4>
      <hr/>
      <Row>
        <Label for="result_description" md="4" sm="1">Jenis operasi yang pernah dialami</Label>
        <Col style={{marginLeft: '-40px'}}>
          <Input
            type="text"
            // style={{ width: '340px' }}
            name="type_operation_experienced"
            innerRef={register()}
            invalid={errors.type_operation_experienced && true}
            // readOnly={(odRnfl) ? odRnfl !== '1' : undefined}
          />
        </Col>
      </Row>
      <Row>
        <Label for="result_description" md="4" sm="1">Kapan operasi dilakukan</Label>
        <Col style={{marginLeft: '-40px'}}>
          <Input
            type="datetime-local"
            id='operating_time'
            name='operating_time'
            defaultValue='operating_time'
            innerRef={register()}
          />
        </Col>
      </Row>
      <Row>
        <Label for="result_description" md="4" sm="1">komplikasi yang ada</Label>
        <Col style={{marginLeft: '-40px'}}>
          <Input
            type="text"
            // style={{ width: '340px' }}
            name="complications"
            innerRef={register()}
            invalid={errors.complications && true}
            // readOnly={(odRnfl) ? odRnfl !== '1' : undefined}
          />
        </Col>
      </Row>
      <Row>
        <Label for="result_description" md="4" sm="1">Riwayat penyakit dalam keluarga saat ini</Label>
        <Col style={{marginLeft: '-40px'}}>
          <Input
            type="text"
            // style={{ width: '340px' }}
            name="history_disease_family"
            innerRef={register()}
            invalid={errors.history_disease_family && true}
            // readOnly={(odRnfl) ? odRnfl !== '1' : undefined}
          />
        </Col>
      </Row>

      <tr className='mt-2'>
        <td>
          <Row>
            <Col>
              <Label>Mempunyai Ketergantungan</Label>
            </Col>
          </Row>
        </td>
        <td>
          <Row>
            <Col>
              <Row className="mb-1">
                <Col style={{marginLeft: '60px'}}>
                  <Input
                    id="have_dependency_1"
                    type="radio"
                    name="have_dependency"
                    className="me-1"
                    onChange={(e) => {
                      setUnitKetergantungan(e.target.checked)
                      handleRadioChange(e);
                    }}
                    defaultChecked={data && data.form && data.form.Mempunyai_Ketergantungan === '1'}
                    value="1"
                    innerRef={register("have_dependency")}
                  />{' '}
                  <Label>Ya</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '60px'}}>
                  <Input
                    id="have_dependency_0"
                    type="radio"
                    name="have_dependency"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setUnitKetergantungan(false);
                      }
                      handleRadioChange(e)
                    }}
                    defaultChecked={data && data.form && data.form.Mempunyai_Ketergantungan === '0'}
                    value="0"
                    innerRef={register("have_dependency")}
                  />{' '}
                  <Label>Tidak</Label>
                </Col>
              </Row>
            </Col>
          </Row>
        </td>
      </tr>
      {
        ketergantungan && (
          <>
            <tr>
              <td>
                <Row>
                  <Col>
                    <Label>Terhadap</Label>
                  </Col>
                </Row>
              </td>
              <td>
                <Row>
                  <Col style={{marginLeft: '-40px'}}>
                    <Input
                      id="dependence_on_1"
                      type="checkbox"
                      name="dependence_on[]"
                      className="me-1"
                      style={{ marginLeft: '225px'}}
                      onChange={(e) => handleDependenceListCheckbox(e)}
                      defaultChecked={getDependenceValue() && getDependenceValue().length > 0  && getDependenceValue().includes('1')}
                      value="1"
                      innerRef={register("dependence_on") as any}
                    />{' '}
                  </Col>
                  <Col>
                    <Label style={{marginLeft: '-25px'}}>Obat - Obatan</Label>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col style={{marginLeft: '-40px'}}>
                    <Input
                      id="ketergantungan_terhadap_2"
                      type="checkbox"
                      name="dependence_on[]"
                      className="me-1"
                      style={{ marginLeft: '225px'}}
                      onChange={(e) => handleDependenceListCheckbox(e)}
                      defaultChecked={getDependenceValue() && getDependenceValue().length > 0  && getDependenceValue().includes('2')}
                      value="2"
                      innerRef={register("dependence_on") as any}
                    />{' '}
                  </Col>
                  <Col>
                    <Label style={{marginLeft: '-25px'}}>Rokok</Label>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col style={{marginLeft: '-40px'}}>
                    <Input
                      id="ketergantungan_terhadap_3"
                      type="checkbox"
                      name="dependence_on[]"
                      className="me-1"
                      style={{ marginLeft: '225px'}}
                      onChange={(e) => handleDependenceListCheckbox(e)}
                      defaultChecked={getDependenceValue() && getDependenceValue().length > 0  && getDependenceValue().includes('3')}
                      value="3"
                      innerRef={register("dependence_on") as any}
                    />{' '}
                  </Col>
                  <Col>
                    <Label style={{marginLeft: '-25px'}}>Alkohol</Label>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col style={{marginLeft: '-7%'}}>
                    <Input
                      id="ketergantungan_terhadap_4"
                      type="checkbox"
                      name="dependence_on[]"
                      className="me-1"
                      style={{ marginLeft: '225px'}}
                      onChange={(e) => handleDependenceListCheckbox(e)}
                      defaultChecked={getDependenceValue() && getDependenceValue().length > 0  && getDependenceValue().includes('4')}
                      value="4"
                      innerRef={register("dependence_on") as any}
                    />{' '}
                  </Col>
                  <Col>
                    <Label style={{marginLeft: '-25px'}}>Lain - Lain</Label>
                  </Col>
                  <Col style={{ marginLeft: '-40%'}}>
                    <Input
                      type="text"
                      id="ketergantungan_terhadap_keterangan"
                      name="dependence_on_description"
                      innerRef={register()}
                      style={{width: '130%'}}
                      invalid={errors.dependence_on_description && true}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
            <tr className='mt-1'>
              <td>
                <Row>
                  <Col>
                    <Label>Jelaskan</Label>
                  </Col>
                </Row>
              </td>
              <td>
                <Row>
                  <Col>
                    <Input
                      type="text"
                      id="dependence_on_explanation"
                      name="dependence_on_explanation"
                      innerRef={register()}
                      style={{marginLeft: '230px'}}
                      invalid={errors.dependence_on_explanation && true}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
          </>
        )
      }
      <tr className='mt-2'>
        <td>
          <Row>
            <Col>
              <Label>Riwayat Alergi</Label>
            </Col>
          </Row>
        </td>
        <td>
          <Row>
            <Col>
              <Row className="mb-1">
                <Col style={{marginLeft: '155px'}}>
                  <Input
                    id="allergy_history_1"
                    type="radio"
                    name="allergy_history"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Riwayat_Alergi === '1'}
                    value="1"
                    innerRef={register("allergy_history")}
                  />{' '}
                  <Label>Tidak</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '155px'}}>
                  <Input
                    id="allergy_history_0"
                    type="radio"
                    name="allergy_history"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Riwayat_Alergi === '0'}
                    value="0"
                    innerRef={register("allergy_history")}
                  />{' '}
                  <Label>Ya, Jelaskan</Label>
                </Col>
                <Col style={{marginLeft: '-50px'}}>
                  <Input
                    type="text"
                    id="history_allergy_description"
                    name="history_allergy_description"
                    innerRef={register()}
                    style={{width: '200%'}}
                    invalid={errors.history_allergy_description && true}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </td>
      </tr>

      <h4 className="mt-2">4. Nutrisi </h4>
      <hr />
      <tr className='mt-2'>
        <td>
          <Row>
            <Col>
              <Label>1. Apakah pasien mengalami penurunan berat badan yang tidak diinginkan dalam 6 bulan terakhir</Label>
            </Col>
          </Row>
        </td>
      </tr>
      <tr>
        <td>
          <Row>
            <Col>
              <Row className="mb-1">
                <Col>
                  <Input
                    id="nutrition_down_bb_1"
                    type="radio"
                    name="nutrition_down_bb"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Nutrisi_Turun_Bb === '1'}
                    value="1"
                    innerRef={register("nutrition_down_bb")}
                  />{' '}
                  <Label>Tidak Ada</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <Input
                    id="nutrition_down_bb_2"
                    type="radio"
                    name="nutrition_down_bb"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Nutrisi_Turun_Bb === '2'}
                    value="2"
                    innerRef={register("nutrition_down_bb")}
                  />{' '}
                  <Label>Tidak Yakin / Tidak Tahu / Baju Terasa Lebih Longgar</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <Input
                    id="nutrition_down_bb_3"
                    type="radio"
                    name="nutrition_down_bb"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Nutrisi_Turun_Bb === '3'}
                    value="3"
                    innerRef={register("nutrition_down_bb")}
                  />{' '}
                  <Label>Ya, Sekitar 1 - 5 Kg</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <Input
                    id="nutrition_down_bb_4"
                    type="radio"
                    name="nutrition_down_bb"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Nutrisi_Turun_Bb === '4'}
                    value="4"
                    innerRef={register("nutrition_down_bb")}
                  />{' '}
                  <Label>Ya, Sekitar 6 - 10 Kg</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <Input
                    id="nutrition_down_bb_5"
                    type="radio"
                    name="nutrition_down_bb"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Nutrisi_Turun_Bb === '5'}
                    value="5"
                    innerRef={register("nutrition_down_bb")}
                  />{' '}
                  <Label>Ya, Sekitar 11 - 15 Kg</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <Input
                    id="nutrition_down_bb_6"
                    type="radio"
                    name="nutrition_down_bb"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Nutrisi_Turun_Bb === '6'}
                    value="6"
                    innerRef={register("nutrition_down_bb")}
                  />{' '}
                  <Label>Ya, Lebih Dari 15 Kg</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <Input
                    id="nutrition_down_bb_7"
                    type="radio"
                    name="nutrition_down_bb"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Nutrisi_Turun_Bb === '7'}
                    value="7"
                    innerRef={register("nutrition_down_bb")}
                  />{' '}
                  <Label>Ya, tidak yakin penurunannya</Label>
                </Col>
              </Row>
            </Col>
          </Row>
        </td>
      </tr>
      <tr className='mt-2'>
        <td>
          <Row >
            <Col style={{marginTop: '-4%'}}>
              <Label>2. Apakah Asupan Makan Berkurang Karena Berkurangnya Nafsu Makan</Label>
            </Col>
          </Row>
        </td>
      </tr>
      <tr>
        <td>
          <Row>
            <Col>
              <Row className="mb-1">
                <Col>
                  <Input
                    id="food_intake_1"
                    type="radio"
                    name="food_intake"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Asupan_Makan === '1'}
                    value="1"
                    innerRef={register("food_intake")}
                  />{' '}
                  <Label>Tidak</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <Input
                    id="food_intake_0"
                    type="radio"
                    name="food_intake"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Asupan_Makan === '0'}
                    value="0"
                    innerRef={register("food_intake")}
                  />{' '}
                  <Label>Ya</Label>
                </Col>
              </Row>
            </Col>
          </Row>
        </td>
      </tr>
      <tr className='mt-2'>
        <td>
          <Row >
            <Col style={{marginTop: '-4%'}}>
              <Label>3. Pasien Dengan Diagnosa Khusus ?</Label>
            </Col>
          </Row>
        </td>
      </tr>
      <tr>
        <td>
          <Row>
            <Col>
              <Row className="mb-1">
                <Col>
                  <Input
                    id="diagnostic_special_1"
                    type="radio"
                    name="diagnostic_special"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa(false);
                      }
                      handleRadioChange(e)
                    }}
                    defaultChecked={data && data.form && data.form.Diagnosa_Khusus === '0'}
                    value="0"
                    innerRef={register("diagnostic_special")}
                  />{' '}
                  <Label>Tidak</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <Input
                    id="diagnostic_special_0"
                    type="radio"
                    name="diagnostic_special"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa(true)
                      }
                      handleRadioChange(e);
                    }}
                    defaultChecked={data && data.form && data.form.Diagnosa_Khusus === '1'}
                    value="1"
                    innerRef={register("diagnostic_special")}
                  />{' '}
                  <Label>Ya</Label>
                </Col>
              </Row>
            </Col>
          </Row>
        </td>
      </tr>
      {
        diagnosa && (
          <>
            <tr>
              <td>
                <Row>
                  <Col>
                    <Label>Jenis Penyakit</Label>
                  </Col>
                </Row>
              </td>
              <td>
                <Row>
                  <Col style={{marginLeft: '-200px'}}>
                    <Input
                      id="types_of_diseases_1"
                      type="checkbox"
                      name="types_of_diseases[]"
                      className="me-1"
                      style={{ marginLeft: '225px'}}
                      onChange={(e) => handleDiseasesListCheckbox(e)}
                      defaultChecked={getTypeOfDiseases() && getTypeOfDiseases().length > 0  && getTypeOfDiseases().includes('1')}
                      value="1"
                      innerRef={register("types_of_diseases") as any}
                    />{' '}
                  </Col>
                  <Col>
                    <Label style={{marginLeft: '-25px', width: '100px'}}>DM</Label>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col style={{marginLeft: '-200px'}}>
                    <Input
                      id="types_of_diseases_2"
                      type="checkbox"
                      name="types_of_diseases[]"
                      className="me-1"
                      style={{ marginLeft: '225px'}}
                      onChange={(e) => handleDiseasesListCheckbox(e)}
                      defaultChecked={getTypeOfDiseases() && getTypeOfDiseases().length > 0  && getTypeOfDiseases().includes('2')}
                      value="2"
                      innerRef={register("types_of_diseases")}
                    />{' '}
                  </Col>
                  <Col>
                    <Label style={{marginLeft: '-25px'}}>Ginjal</Label>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col style={{marginLeft: '-200px'}}>
                    <Input
                      id="types_of_diseases_3"
                      type="checkbox"
                      name="types_of_diseases[]"
                      className="me-1"
                      style={{ marginLeft: '225px'}}
                      onChange={(e) => handleDiseasesListCheckbox(e)}
                      defaultChecked={getTypeOfDiseases() && getTypeOfDiseases().length > 0  && getTypeOfDiseases().includes('3')}
                      value="3"
                      innerRef={register("types_of_diseases")}
                    />{' '}
                  </Col>
                  <Col>
                    <Label style={{marginLeft: '-25px'}}>Hati</Label>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col style={{marginLeft: '-200px'}}>
                    <Input
                      id="types_of_diseases_4"
                      type="checkbox"
                      name="types_of_diseases[]"
                      className="me-1"
                      style={{ marginLeft: '225px'}}
                      onChange={(e) => handleDiseasesListCheckbox(e)}
                      defaultChecked={getTypeOfDiseases() && getTypeOfDiseases().length > 0  && getTypeOfDiseases().includes('4')}
                      value="4"
                      innerRef={register("types_of_diseases")}
                    />{' '}
                  </Col>
                  <Col>
                    <Label style={{marginLeft: '-25px'}}>Jantung</Label>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col style={{marginLeft: '-200px'}}>
                    <Input
                      id="types_of_diseases_5"
                      type="checkbox"
                      name="types_of_diseases[]"
                      className="me-1"
                      style={{ marginLeft: '225px'}}
                      onChange={(e) => handleDiseasesListCheckbox(e)}
                      defaultChecked={getTypeOfDiseases() && getTypeOfDiseases().length > 0  && getTypeOfDiseases().includes('5')}
                      value="5"
                      innerRef={register("types_of_diseases")}
                    />{' '}
                  </Col>
                  <Col>
                    <Label style={{marginLeft: '-25px'}}>Paru</Label>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col style={{marginLeft: '-200px'}}>
                    <Input
                      id="types_of_diseases_6"
                      type="checkbox"
                      name="types_of_diseases[]"
                      className="me-1"
                      style={{ marginLeft: '225px'}}
                      onChange={(e) => handleDiseasesListCheckbox(e)}
                      defaultChecked={getTypeOfDiseases() && getTypeOfDiseases().length > 0  && getTypeOfDiseases().includes('6')}
                      value="6"
                      innerRef={register("types_of_diseases")}
                    />{' '}
                  </Col>
                  <Col>
                    <Label style={{marginLeft: '-25px'}}>Stroke</Label>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col style={{marginLeft: '-200px'}}>
                    <Input
                      id="types_of_diseases_7"
                      type="checkbox"
                      name="types_of_diseases[]"
                      className="me-1"
                      style={{ marginLeft: '225px'}}
                      onChange={(e) => handleDiseasesListCheckbox(e)}
                      defaultChecked={getTypeOfDiseases() && getTypeOfDiseases().length > 0  && getTypeOfDiseases().includes('7')}
                      value="7"
                      innerRef={register("types_of_diseases")}
                    />{' '}
                  </Col>
                  <Col>
                    <Label style={{marginLeft: '-25px'}}>Kanker</Label>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col style={{marginLeft: '-200px'}}>
                    <Input
                      id="types_of_diseases_8"
                      type="checkbox"
                      name="types_of_diseases[]"
                      className="me-1"
                      style={{ marginLeft: '225px'}}
                      onChange={(e) => handleDiseasesListCheckbox(e)}
                      defaultChecked={getTypeOfDiseases() && getTypeOfDiseases().length > 0  && getTypeOfDiseases().includes('8')}
                      value="8"
                      innerRef={register("types_of_diseases")}
                    />{' '}
                  </Col>
                  <Col>
                    <Label style={{marginLeft: '-25px', width: '280px'}}>Penurunan Imunitas Geriatri</Label>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col style={{marginLeft: '-200px'}}>
                    <Input
                      id="types_of_diseases_9"
                      type="checkbox"
                      name="types_of_diseases[]"
                      className="me-1"
                      style={{ marginLeft: '225px'}}
                      onChange={(e) => handleDiseasesListCheckbox(e)}
                      defaultChecked={getTypeOfDiseases() && getTypeOfDiseases().length > 0  && getTypeOfDiseases().includes('9')}
                      value="9"
                      innerRef={register("types_of_diseases")}
                    />{' '}
                  </Col>
                  <Col>
                    <Label style={{marginLeft: '-25px', width: '100px'}}>Lain - Lain</Label>
                  </Col>
                  <Col style={{ marginLeft: '-30%'}}>
                    <Input
                      type="text"
                      id="type_disease_description"
                      name="type_disease_description"
                      innerRef={register()}
                      style={{width: '130%'}}
                      invalid={errors.type_disease_description && true}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
          </>
        )
      }
    </FormGroup>
  )
}
export default FallRiskCheck;