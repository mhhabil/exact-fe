import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row, TabContent, Table, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { IPdfModel } from '@src/shared/pdf';
import Image from 'next/image';
import nilaie from '../../const/nilaie';
import nilaim from '../../const/nilaim';
import nilaiv from '../../const/nilaiv';
import { AssessmentUgdModel } from '../../models/assessment-ugd-models';
import { DateTimeInput } from '@src/shared/input';

const NursingAssessment = (props: { data: AssessmentUgdModel, register: any, errors: any, getValues: any, setValue: any, activeTab: string, processing: boolean, defaultPattern: string | undefined })  => {
  const { data, register, errors, getValues, setValue, activeTab, processing, defaultPattern } = props;
  const [nilaiE, setNilaiE] = useState(data && data.form && data.form.GCS_E ? parseInt(data.form.GCS_E) : 0);
  const [nilaiM, setNilaiM] = useState(data && data.form && data.form.GCS_M ? parseInt(data.form.GCS_M) : 0);
  const [nilaiV, setNilaiV] = useState(data && data.form && data.form.GCS_V ? parseInt(data.form.GCS_V) : 0);
  const [total, setTotal] = useState(0);
  const [kesadaran, setKesadaran] = useState<string>();
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);

  useEffect(() => {
    const sum = nilaiE + nilaiM + nilaiV;
    setTotal(sum);
    setValue('total_score', sum)
  }, [nilaiE, nilaiM, nilaiV])

  useEffect(() => {
    if (total) {
      if (total >= 1 && total <= 1) {
        setKesadaran('Coma')
      } else if (total >= 4 && total <= 4) {
        setKesadaran('Stupor')
      } else if (total >= 7 && total <= 7) {
        setKesadaran('Somnolen')
      } else if (total >= 10 && total <= 10) {
        setKesadaran('Delirium')
      } else if (total >= 12 && total <= 12) {
        setKesadaran('Apatis')
      } else if (total >= 14) {
        setKesadaran('Composmentis')
      }
    }
  }, [total])

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId='1'>
        <Table borderless style={{ width: '100%' }}>
          <tr>
            <td>
              <Label>Pengkajian Keperawatan</Label>
            </td>
          </tr>
          <tr>
            <td>
              <Label>Jika Cedera / Kecelakaan, Jelaskan juga mekanisme cedera / kecelakaannya</Label>
            </td>
          </tr>
        </Table>
        <Table borderless style={{ width: '100%' }}>
          <tr>
            <td>
              <Label>Triase Sekunder</Label>
            </td>
            <td>
              <Row>
                <Col>
                  <Input
                    id="triase-radio-merah"
                    type="radio"
                    name="triase-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Triase_Sekunder === 'Merah'}
                    value="1"
                    innerRef={register("triase-radio") as any}
                  />{' '}
                  <Label>Merah</Label>
                </Col>
                <Col className="py-1 px-1 rounded" style={{ width: '450px', backgroundColor: 'red' }}></Col>
                <Col>
                  <Input
                    id="triase-radio-kuning"
                    type="radio"
                    name="triase-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Triase_Sekunder === 'Kuning'}
                    value="2"
                    innerRef={register("triase-radio") as any}
                  />{' '}
                  <Label>Kuning</Label>
                </Col>
                <Col className="py-1 px-1 rounded" style={{ width: '150px', backgroundColor: 'yellow' }}></Col>
                <Col>
                  <Input
                    id="triase-radio-hijau"
                    type="radio"
                    name="triase-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Triase_Sekunder === 'Hijau'}
                    value="3"
                    innerRef={register("triase-radio") as any}
                  />{' '}
                  <Label>Hijau</Label>
                </Col>
                <Col className="py-1 px-1 rounded" style={{ width: '150px', backgroundColor: '#1EDD00'}}></Col>
                <Col>
                  <Input
                    id="triase-radio-hitam"
                    type="radio"
                    name="triase-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Triase_Sekunder === 'Hitam'}
                    value="4"
                    innerRef={register("triase-radio") as any}
                  />{' '}
                  <Label>Hitam</Label>
                </Col>
                <Col className="py-1 px-1 rounded" style={{ backgroundColor: 'black' }}></Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>1. Kesadaran</Label>
            </td>
            <td style={{width:'81%'}}>
              <Row>
                <Col>
                  <Input
                    id="kesadaran-radio-1"
                    type="radio"
                    name="kesadaran-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Kesadaran_Value === '1'}
                    value="1"
                    innerRef={register("kesadaran-radio")}
                  />{' '}
                  <Label>Sadar</Label>
                </Col>
                <Col>
                  <Input
                    id="kesadaran-radio-2"
                    type="radio"
                    name="kesadaran-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form  && data.form.Kesadaran_Value === '2'}
                    value="2"
                    innerRef={register("kesadaran-radio")}
                  />{' '}
                  <Label>Kesadaran Menurun</Label>
                </Col>
                <Col>
                  <Input
                    id="kesadaran-radio-3"
                    type="radio"
                    name="kesadaran-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Kesadaran_Value === '3'}
                    value="3"
                    innerRef={register("kesadaran-radio")}
                  />{' '}
                  <Label>Tidak Sadar</Label>
                </Col>
                <Col>
                  <Input
                    id="kesadaran-radio-4"
                    type="radio"
                    name="kesadaran-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form  && data.form.Kesadaran_Value === '4'}
                    value="4"
                    innerRef={register("kesadaran-radio")}
                  />{' '}
                  <Label>Gelisah</Label>
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>2. Pernafasan</Label>
            </td>
            <td>
              <Row>
                <Col>
                  <Input
                    id="pernafasan-radio-1"
                    type="radio"
                    name="pernafasan-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form  && data.form.Pernafasan_Value === '1'}
                    value="1"
                    innerRef={register("pernafasan-radio")}
                  />{' '}
                  <Label>Normal</Label>
                </Col>
                <Col>
                  <Input
                    id="pernafasan-radio-2"
                    type="radio"
                    name="pernafasan-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Pernafasan_Value === '2'}
                    value="2"
                    innerRef={register("pernafasan-radio")}
                  />{' '}
                  <Label>Sesak</Label>
                </Col>
                <Col>
                  <Input
                    id="pernafasan-radio-3"
                    type="radio"
                    name="pernafasan-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form  && data.form.Pernafasan_Value === '3'}
                    value="3"
                    innerRef={register("pernafasan-radio")}
                  />{' '}
                  <Label>Sumbatan Jalan Nafas</Label>
                </Col>
                <Col>
                  <Input
                    id="pernafasan-radio-4"
                    type="radio"
                    name="pernafasan-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form  && data.form.Pernafasan_Value === '4'}
                    value="4"
                    innerRef={register("pernafasan-radio") as any}
                  />{' '}
                  <Label>Tidak Bernafas</Label>
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>3. Sirkulasi</Label>
            </td>
            <td>
              <Row>
                <Col>
                  <Input
                    id="sirkulasi-radio"
                    type="radio"
                    name="sirkulasi-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Sirkulasi_Value === '1'}
                    value="1"
                    innerRef={register("sirkulasi-radio") as any}
                  />{' '}
                  <Label>Nadi Normal</Label>
                </Col>
                <Col>
                  <Input
                    id="sirkulasi-radio-2"
                    type="radio"
                    name="sirkulasi-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form  && data.form.Sirkulasi_Value === '2'}
                    value="2"
                    innerRef={register("sirkulasi-radio") as any}
                  />{' '}
                  <Label>Aritmia</Label>
                </Col>
                <Col>
                  <Input
                    id="sirkulasi-radio-3"
                    type="radio"
                    name="sirkulasi-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Sirkulasi_Value === '3'}
                    value="3"
                    innerRef={register("sirkulasi-radio") as any}
                  />{' '}
                  <Label>Henti Jantung</Label>
                </Col>
                <Col>
                  <Input
                    id="sirkulasi-radio-4"
                    type="radio"
                    name="sirkulasi-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Sirkulasi_Value === '4'}
                    value="4"
                    innerRef={register("sirkulasi-radio") as any}
                  />{' '}
                  <Label>Perdarahan</Label>
                </Col>
              </Row>
            </td>
          </tr>
        </Table>
        <Table borderless style={{ width: '100%' }}>
          <tr>
            <td>
              <Row>
                <Col>
                  <Label>Pertolongan Pertama Pada</Label>
                </Col>
                <Col>
                  <DateTimeInput
                    name='pertolongan-pertama'
                    defaultValue='date'
                    md={1}
                    style={{marginLeft: '-120px', marginTop:'-30px'}}
                    {...{ register, errors }}
                  />
                </Col>
                <Col>
                  <Label style={{marginLeft: '-120px'}}></Label>
                </Col>
              </Row>
            </td>
          </tr>
        </Table>
        <Table borderless style={{ width: '100%' }}>
          <tr>
            <td>
              <Label>Tindakan Resusitasi</Label>
            </td>
            <td style={{width:'81%'}}>
              <Row className="my-1">
                <Col>
                  <Input
                    id="tindakan-resusitasi"
                    type="textarea"
                    name="tindakan-resusitasi"
                    innerRef={register()}
                  />
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>1. Jalan Nafas (airway) </Label>
            </td>
            <td>
              <Row>
                <Col>
                  <Input
                    id="jalanNafas-radio"
                    type="radio"
                    name="jalanNafas-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form  && data.form.Jalan_Nafas_Value === '1'}
                    value="1"
                    innerRef={register("jalanNafas-radio") as any}
                  />{' '}
                  <Label>Hiperektensi</Label>
                </Col>
                <Col>
                  <Input
                    id="jalanNafas-radio"
                    type="radio"
                    name="jalanNafas-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Jalan_Nafas_Value === '2'}
                    value="2"
                    innerRef={register("jalanNafas-radio") as any}
                  />{' '}
                  <Label>Bersihkan Jalan Nafas</Label>
                </Col>
                <Col>
                  <Input
                    id="jalanNafas-radio"
                    type="radio"
                    name="jalanNafas-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form  && data.form.Jalan_Nafas_Value === '3'}
                    value="3"
                    innerRef={register("jalanNafas-radio") as any}
                  />{' '}
                  <Label>Intubasi</Label>
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td style={{width: '21%'}}>
              <Label>2. Bantuan Nafas (breathing) </Label>
            </td>
            <td>
              <Row>
                <Col>
                  <Input
                    id="bantuanNafas-radio"
                    type="radio"
                    name="bantuanNafas-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form &&  data.form.Bantuan_Nafas_Value === '1'}
                    value="1"
                    innerRef={register("bantuanNafas-radio") as any}
                  />{' '}
                  <Label>Mulut ke mulut</Label>
                </Col>
                <Col>
                  <Input
                    id="bantuanNafas-radio-2"
                    type="radio"
                    name="bantuanNafas-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Bantuan_Nafas_Value === '2'}
                    value="2"
                    innerRef={register("bantuanNafas-radio") as any}
                  />{' '}
                  <Label>Bag and mask</Label>
                </Col>
                <Col>
                  <Input
                    id="bantuanNafas-radio"
                    type="radio"
                    name="bantuanNafas-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Bantuan_Nafas_Value === '3'}
                    value="3"
                    innerRef={register("bantuanNafas-radio") as any}
                  />{' '}
                  <Label> bag and tube</Label>
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>3. Sirkulasi</Label>
            </td>
            <td>
              <Row>
                <Col>
                  <Input
                    id="sirkulasiResusitasi-radio"
                    type="radio"
                    name="sirkulasiResusitasi-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Sirkulasi_Resusitasi_Value === '1'}
                    value="1"
                    innerRef={register("sirkulasiResusitasi-radio") as any}
                  />{' '}
                  <Label>Message jantung luar</Label>
                </Col>
                <Col>
                  <Input
                    id="sirkulasiResusitasi-radio-2"
                    type="radio"
                    name="sirkulasiResusitasi-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form  && data.form.Sirkulasi_Resusitasi_Value === '2'}
                    value="2"
                    innerRef={register("sirkulasiResusitasi-radio") as any}
                  />{' '}
                  <Label>Balut tekan</Label>
                </Col>
                <Col>
                  <Input
                    id="sirkulasiResusitasi-radio-3"
                    type="radio"
                    name="sirkulasiResusitasi-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Sirkulasi_Resusitasi_Value === '3'}
                    value="3"
                    innerRef={register("sirkulasiResusitasi-radio") as any}
                  />{' '}
                  <Label>Operasi</Label>
                </Col>
              </Row>
            </td>
          </tr>
        </Table>
        <h4 className="mt-2">Tanda Vital</h4>
        <hr/>
        <Table borderless style={{ width: '100%' }}>
          <tr>
            <td>
              <Label>Skala GCS</Label>
            </td>
            <td style={{width:'80%'}}>
              <Row>
                <Col>
                  <Label>Nilai E</Label>
                  <Input
                    type="select"
                    id= "gcs-e"
                    name= "gcs-e"
                    innerRef={register()}
                    onChange={(e) => {
                      if (e.target.value !== '') {
                        setNilaiE(parseInt((e.target.value).split('.')[0]))
                      } else {
                        setNilaiE(0)
                      }
                    }}
                  >
                    <option value="" disabled={false}>Pilih...</option>
                    {
                      nilaie && nilaie.map((item: any, key: number) => {
                        return <option value={item} key={key}>{ item }</option>;
                      })
                    }
                  </Input>
                </Col>
                <Col>
                  <Label>Nilai M</Label>
                  <Input
                    type="select"
                    id="gcs-m"
                    name="gcs-m"
                    innerRef={register()}
                    onChange={(e) => {
                      if (e.target.value !== '') {
                        setNilaiM(parseInt((e.target.value).split('.')[0]))
                      } else {
                        setNilaiM(0)
                      }
                    }}
                  >
                    <option value="" disabled={false}>Pilih...</option>
                    {
                      nilaim && nilaim.map((item: any, key: number) => {
                        return <option value={item} key={key}>{ item }</option>;
                      })
                    }
                  </Input>
                </Col>
                <Col>
                  <Label>Nilai V</Label>
                  <Input
                    type="select"
                    id="gcs-v"
                    name="gcs-v"
                    innerRef={register()}
                    onChange={(e) => {
                      if (e.target.value !== '') {
                        setNilaiV(parseInt((e.target.value).split('.')[0]))
                      } else {
                        setNilaiV(0)
                      }
                    }}
                  >
                    <option value="" disabled={false}>Pilih...</option>
                    {
                      nilaiv && nilaiv.map((item: any, key: number) => {
                        return <option value={item} key={key}>{ item }</option>;
                      })
                    }
                  </Input>
                </Col>
                <Col>
                  <Label>Score</Label>
                  <Input
                    type="number"
                    id="gcs-score"
                    name="gcs-score"
                    innerRef={register()}
                    disabled
                    value={total}
                  >
                  </Input>
                </Col>
              </Row>
            </td>
          </tr>
        </Table>
        <Table borderless style={{ width: '100%' }}>
          <tr>
            <td>
              <Label>Respiratory Rate</Label>
            </td>
            <td style={{width:'80%'}}>
              <Row>
                <Col>
                  <Input
                    id= "vital-respiratory-rate"
                    type="text"
                    name= "vital-respiratory-rate"
                    innerRef={register()}
                  />
                </Col>
                <Col>
                  <Label>X / Menit</Label>
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>Denyut Nadi</Label>
            </td>
            <td style={{width:'80%'}}>
              <Row>
                <Col>
                  <Input
                    id="vital-denyut-nadi"
                    type="text"
                    name="vital-denyut-nadi"
                    innerRef={register()}
                  />
                </Col>
                <Col>
                  <Label>X / Menit</Label>
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>Tekanan Darah</Label>
            </td>
            <td style={{width:'80%'}}>
              <Row>
                <Col>
                  <Input
                    id="vital-tekanan-darah"
                    type="text"
                    name="vital-tekanan-darah"
                    innerRef={register()}
                  />
                </Col>
                <Col>
                  <Label>X / Menit</Label>
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>Kesadaran</Label>
            </td>
            <td style={{width:'80%'}}>
              <Row>
                <Col>
                  <Input
                    id="vital-kesadaran"
                    type="text"
                    name="vital-kesadaran"
                    innerRef={register()}
                    value={kesadaran}
                    disabled
                  />
                </Col>
                <Col>
                  {/* <Label>X / Menit</Label> */}
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>Suhu</Label>
            </td>
            <td style={{width:'80%'}}>
              <Row>
                <Col>
                  <Input
                    id= "vital-suhu"
                    type="text"
                    name= "vital-suhu"
                    innerRef={register()}
                  />
                </Col>
                <Col></Col>
              </Row>
            </td>
          </tr>
        </Table>
        <Table borderless style={{ width: '100%' }}>
          <tr>
            <td>
              <Row>
                <Col md='2'>
                  <Label>Skala Nyeri</Label>
                </Col>
                <Col md='10' className='align-items-center justify-content-center text-center'>
                  <div className='d-flex'>
                    <div>
                      <Input
                        id="skala-nyeri-1"
                        type="radio"
                        name="skala-nyeri"
                        style={{marginLeft:'40px'}}
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Skala_Nyeri === '1'}
                        value="1"
                        innerRef={register("skala-nyeri")}
                      />{' '}
                      <Label>1</Label>
                    </div>
                    <div>
                      <Input
                        id="skala-nyeri-2"
                        type="radio"
                        name="skala-nyeri"
                        style={{marginLeft:'35px'}}
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Skala_Nyeri === '2'}
                        value="2"
                        innerRef={register("skala-nyeri")}
                      />{' '}
                      <Label>2</Label>
                    </div>
                    <div>
                      <Input
                        id="skala-nyeri-3"
                        type="radio"
                        name="skala-nyeri"
                        style={{marginLeft:'35px'}}
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Skala_Nyeri === '3'}
                        value="3"
                        innerRef={register("skala-nyeri")}
                      />{' '}
                      <Label>3</Label>
                    </div>
                    <div>
                      <Input
                        id="skala-nyeri-4"
                        type="radio"
                        name="skala-nyeri"
                        style={{marginLeft:'35px'}}
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Skala_Nyeri === '4'}
                        value="4"
                        innerRef={register("skala-nyeri")}
                      />{' '}
                      <Label>4</Label>
                    </div>
                    <div>
                      <Input
                        id="skala-nyeri-5"
                        type="radio"
                        name="skala-nyeri"
                        style={{marginLeft:'35px'}}
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Skala_Nyeri === '5'}
                        value="5"
                        innerRef={register("skala-nyeri")}
                      />{' '}
                      <Label>5</Label>
                    </div>
                    <div>
                      <Input
                        id="skala-nyeri-6"
                        type="radio"
                        name="skala-nyeri"
                        style={{marginLeft:'35px'}}
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Skala_Nyeri === '6'}
                        value="6"
                        innerRef={register("skala-nyeri")}
                      />{' '}
                      <Label>6</Label>
                    </div>
                    <div>
                      <Input
                        id="skala-nyeri-7"
                        type="radio"
                        name="skala-nyeri"
                        style={{marginLeft:'35px'}}
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Skala_Nyeri === '7'}
                        value="7"
                        innerRef={register("skala-nyeri")}
                      />{' '}
                      <Label>7</Label>
                    </div>
                    <div>
                      <Input
                        id="skala-nyeri-8"
                        type="radio"
                        name="skala-nyeri"
                        style={{marginLeft:'35px'}}
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Skala_Nyeri === '8'}
                        value="8"
                        innerRef={register("skala-nyeri")}
                      />{' '}
                      <Label>8</Label>
                    </div>
                    <div>
                      <Input
                        id="skala-nyeri-9"
                        type="radio"
                        name="skala-nyeri"
                        style={{marginLeft:'35px'}}
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Skala_Nyeri === '9'}
                        value="9"
                        innerRef={register("skala-nyeri")}
                      />{' '}
                      <Label>9</Label>
                    </div>
                    <div>
                      <Input
                        id="skala-nyeri-10"
                        type="radio"
                        name="skala-nyeri"
                        style={{marginLeft:'35px'}}
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Skala_Nyeri === '10'}
                        value="10"
                        innerRef={register("skala-nyeri")}
                      />{' '}
                      <Label>10</Label>
                    </div>
                  </div>
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Row>
                <Col>
                  <Image
                    src='/assets/default/skala-nyeri.png'
                    width='1100rem'
                    height='150rem'
                    objectFit='contain'
                  />
                </Col>
              </Row>
            </td>
          </tr>
        </Table>
        <h4>Riwayat Alergi</h4>
        <hr />
        <Table borderless style={{ width: '100%' }}>
          <tr>
            <td>
              <Label>Makanan</Label>
            </td>
            <td style={{width:'76%'}}>
              <Row>
                <Col>
                  <Input
                    id="alergi-makanan"
                    type="textarea"
                    placeholder='Jika ada, tuliskan..'
                    name="alergi-makanan"
                    innerRef={register()}
                  />
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>Obat-obatan</Label>
            </td>
            <td style={{width:'76%'}}>
              <Row>
                <Col>
                  <Input
                    id="alergi-obat"
                    type="textarea"
                    placeholder='Jika ada, tuliskan..'
                    name="alergi-obat"
                    innerRef={register()}
                  />
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>Lainnya</Label>
            </td>
            <td style={{width:'76%'}}>
              <Row>
                <Col>
                  <Input
                    id="alergi-lainnya"
                    type="textarea"
                    placeholder='jika ada, tuliskan...'
                    name="alergi-lainnya"
                    innerRef={register()}
                  />
                </Col>
              </Row>
            </td>
          </tr>
        </Table>
      </TabPane>
    </TabContent>
  )
}

export default NursingAssessment;
