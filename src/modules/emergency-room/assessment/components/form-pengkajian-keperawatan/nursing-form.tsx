import { Col, Input, Label, Row, TabContent, Table, TabPane } from 'reactstrap';
import { DateTimeInput } from "@src/shared/input";
import { useEffect, useState } from "react";
import { IPdfModel } from '@src/shared/pdf';
import diagnosaKhusus from '../../const/diagnosa-khusus';
import { AssessmentUgdModel } from '../../models/assessment-ugd-models';

const Nursing = (props: { data: AssessmentUgdModel, register: any, errors: any, getValues: any, setValue: any, activeTab: string, processing: boolean, defaultPattern: string | undefined })  => {
  const { data, register, errors, getValues, setValue, activeTab, processing, defaultPattern } = props;
  const [total, setTotal] = useState(0);
  const [totalSkor, setTotalSkor] = useState<string>();
  const [weight, setWeight] = useState(data && data.form && data.form.Penurunan_Nafsu_Makan ? (data.form.Penurunan_Nafsu_Makan) : 0);
  const [weightBody, setWeightBody] = useState<number>(data.form && data.form.Penurunan_Berat_Badan ? data.form.Penurunan_Berat_Badan : 0)
  const [weightLoss, setWeightLoss] = useState(data && data.form && data.form.Penurunan_Berat_Badan_Nilai ? (data.form.Penurunan_Berat_Badan_Nilai) : 0);
  const [alloanamnese, setAlloanamnese] = useState((data && data.form && data.form.Asal_Informasi) ? !!(data.form.Asal_Informasi === '2') : false);
  const [risikoJatuh, setRisikoJatuh] = useState((data && data.form && data.form.Penilaian_Risiko_Jatuh) ? !!(data.form.Penilaian_Risiko_Jatuh === 1) : false);
  const [lainLain, setLainLain] = useState((data && data.form && data.form.Psikologis_Lain_Lain) ? !!(data.form.Psikologis_Lain_Lain) : false);
  const [masalahPerilaku, setMasalahPerilaku] = useState((data && data.form && data.form.Mental_Perilaku) ? !!(data.form.Mental_Perilaku) : false);
  const [kekerasanPasien, setKekerasanPasien] = useState((data && data.form && data.form.Mental_Kekerasan) ? !!(data.form.Mental_Kekerasan) : false);
  const [beratBadan, setBeratBadan] = useState((data && data.form && data.form.Penurunan_Berat_Badan) ? !!(data.form.Penurunan_Berat_Badan === 3) : false);
  const [status_kehamilan, setStatusKehamilan] = useState((data && data.form && data.form.Status_Kehamilan) ? !!(data.form.Status_Kehamilan === 2) : false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);

  const handleRadioWeight = (e: any) => {
    setWeight(parseInt(e.target.value));
  }

  const handleRadioWeightBody = (e: any) => {
    setWeightBody(parseInt(e.target.value));
  }

  const handleRadioWeightLoss = (e: any) => {
    setWeightLoss(Math.abs(parseInt(e.target.value)));
  }

  useEffect(() => {
    const sum = weight + Math.abs(weightLoss) + weightBody;
    setTotal(sum);
    setValue('total_score', sum)
  }, [weight, weightLoss, weightBody])

  useEffect(() => {
    if (total >= 2) {
      setTotalSkor('Ya');
    } else {
      setTotalSkor('Tidak');
    }
  }, [total])

  useEffect(() => {
    if (!beratBadan) {
      setWeightLoss(0)
    }
  }, [beratBadan])

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId='1'>
        <h4 className='mt-2'>Informasi Pasien</h4>
        <hr />
        <Table borderless style={{ width: '100%' }}>
          <tr>
            <td>
              <Label>1. Informasi Kedatangan Pasien</Label>
            </td>
            <td style={{width:'76%'}}>
              <Row className="my-1">
                <Col>
                  <Input
                    id="kedatangan-pasien"
                    type="textarea"
                    name="kedatangan-pasien"
                    innerRef={register({ required: true })}
                  />
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>2. Informasi didapat dari </Label>
            </td>
            <td>
              <Row>
                <Col>
                  <Input
                    id="asal-informasi-radio-1"
                    type="radio"
                    name="asal-informasi-radio"
                    className="me-1"
                    // onChange={(e) => {
                    //   setAlloanamnese(false)
                    //   handleRadioChange(e);
                    // }}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setAlloanamnese(false);
                      }
                      handleRadioChange(e)
                    }}
                    defaultChecked={data && data.form && data.form.Asal_Informasi === '1'}
                    value="1"
                    innerRef={register("asal-informasi-radio") as any}
                  />{' '}
                  <Label>Autoanamnese</Label>
                </Col>
                <Col>
                  <Input
                    id="asal-informasi-radio-2"
                    type="radio"
                    name="asal-informasi-radio"
                    className="me-1"
                    onChange={(e) => {
                      setAlloanamnese(e.target.checked)
                      handleRadioChange(e);
                    }}
                    defaultChecked={data && data.form && data.form.Asal_Informasi === '2'}
                    value="2"
                    innerRef={register("asal-informasi-radio") as any}
                  />{' '}
                  <Label>Alloanamnese</Label>
                </Col>
                <Col></Col>
              </Row>
            </td>
          </tr>
          {
            alloanamnese && (
              <>
                <tr>
                  <td>
                    <Label>Hubungan</Label>
                  </td>
                  <td>
                    <Row>
                      <Col>
                        <Input
                          id="asal-informasi-hubungan"
                          type="text"
                          name="asal-informasi-hubungan"
                          innerRef={register()}
                        />
                      </Col>
                    </Row>
                  </td>
                </tr>
              </>
            )
          }
          <tr>
            <td>
              <Label>3. Riwayat Penyakit Terdahulu</Label>
            </td>
            <td>
              <Row>
                <Col>
                  <Input
                    id="penyakit-terdahulu"
                    type="textarea"
                    name="penyakit-terdahulu"
                    innerRef={register()}
                  />
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>4. Riwayat Pengobatan Terdahulu</Label>
            </td>
            <td>
              <Row>
                <Col>
                  <Input
                    id="pengobatan-terdahulu"
                    type="textarea"
                    name="pengobatan-terdahulu"
                    innerRef={register()}
                  />
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>5. Pengkajian Fungsi </Label>
            </td>
            <td>
              <Row>
                <Col>
                  <Input
                    id="pengkajian-fungsi-radio"
                    type="radio"
                    name="pengkajian-fungsi-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Pengkajian_Fungsi === '1'}
                    value="1"
                    innerRef={register("pengkajian-fungsi-radio") as any}
                  />{' '}
                  <Label>Kegiatan sehari-hari</Label>
                </Col>
                <Col>
                  <Input
                    id="pengkajian-fungsi-radio-2"
                    type="radio"
                    name="pengkajian-fungsi-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form  && data.form.Pengkajian_Fungsi === '2'}
                    value="2"
                    innerRef={register("pengkajian-fungsi-radio") as any}
                  />{' '}
                  <Label>Mandiri</Label>
                </Col>
                <Col>
                  <Input
                    id="pengkajian-fungsi-radio"
                    type="radio"
                    name="pengkajian-fungsi-radio"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Pengkajian_Fungsi === '3'}
                    value="3"
                    innerRef={register("pengkajian-fungsi-radio") as any}
                  />{' '}
                  <Label>Dengan Bantuan</Label>
                </Col>
                <Col></Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>6. Penilaian Risiko Jatuh</Label>
            </td>
            <td>
              <Row>
                <Col>
                  <Input
                    id="penilaian-risiko-jatuh-radio"
                    type="radio"
                    name="penilaian-risiko-jatuh-radio"
                    className="me-1"
                    onChange={(e) => {
                      setRisikoJatuh(e.target.checked)
                      handleRadioChange(e);
                    }}
                    defaultChecked={data && data.form && data.form.Penilaian_Risiko_Jatuh === 1}
                    value="1"
                    innerRef={register("penilaian-risiko-jatuh-radio") as any}
                  />{' '}
                  <Label>Ya</Label>
                </Col>
                <Col>
                  <Input
                    id="penilaian-risiko-jatuh-radio"
                    type="radio"
                    name="penilaian-risiko-jatuh-radio"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setRisikoJatuh(false);
                      }
                      handleRadioChange(e)
                    }}
                    defaultChecked={data && data.form && data.form.Penilaian_Risiko_Jatuh === 2}
                    value="2"
                    innerRef={register("penilaian-risiko-jatuh-radio") as any}
                  />{' '}
                  <Label>Tidak</Label>
                </Col>
                <Col></Col>
                <Col></Col>
              </Row>
            </td>
          </tr>
          {
            risikoJatuh && (
              <>
                <tr>
                  <td>
                    <Row>
                      <Col>
                        {/* <Label>Terhadap</Label> */}
                      </Col>
                    </Row>
                  </td>
                  <td>
                    <Row>
                      <Col>
                        <Input
                          id="risiko-jatuh-ibu-hamil"
                          type="checkbox"
                          name="risiko-jatuh-ibu-hamil"
                          className="me-1"
                          onChange={(e) => handleCheckboxChange(e)}
                          defaultChecked={data && data.form && data.form.Risiko_Jatuh_Ibu_Hamil === 1}
                          value="1"
                          innerRef={register("risiko-jatuh-ibu-hamil")}
                        />{' '}
                        <Label>Ibu Hamil</Label>
                      </Col>
                      <Col style={{marginLeft: '-210px'}}>
                        <Input
                          id="risiko-jatuh-lanjut-usia"
                          type="checkbox"
                          name="risiko-jatuh-lanjut-usia"
                          className="me-1"
                          onChange={(e) => handleCheckboxChange(e)}
                          defaultChecked={data && data.form && data.form.Risiko_Jatuh_Lanjut_Usia === 1}
                          value="1"
                          innerRef={register("risiko-jatuh-lanjut-usia")}
                        />{' '}
                        <Label>Lanjut Usia</Label>
                      </Col>
                      <Col style={{ marginLeft: '-210px'}}>
                        <Input
                          id= "risiko-jatuh-alat-bantu"
                          type="checkbox"
                          name= "risiko-jatuh-alat-bantu"
                          className="me-1"
                          onChange={(e) => handleCheckboxChange(e)}
                          defaultChecked={data && data.form && data.form.Risiko_Jatuh_Alat_Bantu === 1}
                          value="1"
                          innerRef={register("risiko-jatuh-alat-bantu")}
                        />{' '}
                        <Label>Alat Bantu (Kursi Roda / Tongkat)</Label>
                      </Col>
                    </Row>
                  </td>
                </tr>
              </>
            )
          }
          <tr>
            <td>
              <Label>7. Status Kehamilan</Label>
            </td>
            <td>
              <Row>
                <Col>
                  <Input
                    id="status-kehamilan-radio"
                    type="radio"
                    name="status-kehamilan-radio"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setStatusKehamilan(false);
                      }
                      handleRadioChange(e)
                    }}
                    defaultChecked={data && data.form && data.form.Status_Kehamilan === 1}
                    value="1"
                    innerRef={register("status-kehamilan-radio") as any}
                  />{' '}
                  <Label>Tidak Hamil</Label>
                </Col>
                <Col>
                  <Input
                    id="status-kehamilan-radio"
                    type="radio"
                    name="status-kehamilan-radio"
                    className="me-1"
                    onChange={(e) => {
                      setStatusKehamilan(e.target.checked)
                      handleRadioChange(e);
                    }}
                    defaultChecked={data && data.form && data.form.Status_Kehamilan === 2}
                    value="2"
                    innerRef={register("status-kehamilan-radio") as any}
                  />{' '}
                  <Label>Hamil</Label>
                </Col>
                <Col></Col>
                <Col></Col>
              </Row>
            </td>
          </tr>
          {
            status_kehamilan && (
              <>
                <tr>
                  <td></td>
                  <td>
                    <Row>
                      <Col>
                        <Label>Gravida</Label>
                      </Col>
                      <Col>
                        <Input
                          id="status-kehamilan-gravida"
                          type="text"
                          style={{marginLeft:'-300px'}}
                          name="status-kehamilan-gravida"
                          innerRef={register()}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Label>Para</Label>
                      </Col>
                      <Col>
                        <Input
                          id="status-kehamilan-para"
                          type="text"
                          style={{marginLeft:'-300px'}}
                          name="status-kehamilan-para"
                          innerRef={register()}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Label>Abortus</Label>
                      </Col>
                      <Col>
                        <Input
                          id="status-kehamilan-abortus"
                          type="text"
                          style={{marginLeft:'-300px'}}
                          md='1'
                          name="status-kehamilan-abortus"
                          innerRef={register()}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Label>HPHT</Label>
                      </Col>
                      <Col>
                        <DateTimeInput
                          name="status-kehamilan-hpht"
                          defaultValue='date'
                          md={1}
                          style={{marginTop: '-30px', marginLeft: '-71%'}}
                          {...{ register, errors }}
                        />
                      </Col>
                    </Row>
                  </td>
                </tr>
              </>
            )
          }
        </Table>
        <h4 className='mt-2'>Nutrisi</h4>
        <hr />
        <Table borderless style={{ width: '100%' }}>
          <tr>
            <td>
              <Label>Tinggi Badan</Label>
            </td>
            <td style={{width:'76%'}}>
              <Row>
                <Col>
                  <Input
                    id="nutrisi-tinggi"
                    type="text"
                    name="nutrisi-tinggi"
                    innerRef={register()}
                  />
                </Col>
                <Col>
                  <Label>cm</Label>
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>Berat Badan</Label>
            </td>
            <td style={{width:'76%'}}>
              <Row>
                <Col>
                  <Input
                    id="nutrisi-berat"
                    type="text"
                    name="nutrisi-berat"
                    innerRef={register()}
                  />
                </Col>
                <Col>
                  <Label>cm</Label>
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>1. Penurunan Berat Badan </Label>
            </td>
            <td>
              <Row style={{width: '125%'}}>
                <Col>
                  <Input
                    id="penurunan-berat-badan-radio-1"
                    type="radio"
                    name="penurunan-berat-badan-radio"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setBeratBadan(false);
                      }
                      handleRadioWeightBody(e)
                      handleRadioChange(e)
                    }}
                    defaultChecked={data && data.form && data.form.Penurunan_Berat_Badan === 0}
                    value="0"
                    innerRef={register("penurunan-berat-badan-radio") as any}
                  />{' '}
                  <Label>Tidak (skor 0)</Label>
                </Col>
                <Col style={{marginLeft:  '-130px'}}>
                  <Input
                    id="penurunan-berat-badan-radio-2"
                    type="radio"
                    name="penurunan-berat-badan-radio"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setBeratBadan(false);
                      }
                      handleRadioWeightBody(e)
                      handleRadioChange(e)
                    }}
                    defaultChecked={data && data.form && data.form.Penurunan_Berat_Badan === 2}
                    value="2"
                    innerRef={register("penurunan-berat-badan-radio") as any}
                  />{' '}
                  <Label>Tidak Yakin / Terasa baju  lebih longgar (skor 2)</Label>
                </Col>
                <Col>
                  <Input
                    id="penurunan-berat-badan-radio-3"
                    type="radio"
                    name="penurunan-berat-badan-radio"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setBeratBadan(true);
                      }
                      setWeightBody(0);
                      handleRadioChange(e)
                    }}
                    defaultChecked={data && data.form && data.form.Penurunan_Berat_Badan === 3}
                    value="3"
                    innerRef={register("penurunan-berat-badan-radio") as any}
                  />{' '}
                  <Label>Ya</Label>
                </Col>
              </Row>
            </td>
          </tr>
          {
            beratBadan && (
              <>
                <tr>
                  <td>
                    <Row>
                      <Col></Col>
                    </Row>
                  </td>
                  <td>
                    <Row>
                      <Col>
                        <Input
                          id="penurunan-berat-badan-nilai-radio"
                          type="radio"
                          name="penurunan-berat-badan-nilai-radio"
                          className="me-1"
                          onChange={(e) => {
                            handleRadioChange(e)
                            handleRadioWeightLoss(e)
                          }}
                          defaultChecked={data && data.form && data.form.Penurunan_Berat_Badan_Nilai === 1}
                          value="1"
                          innerRef={register("penurunan-berat-badan-nilai-radio") as any}
                        />{' '}
                        <Label>1-5 kg (Skor 1)</Label>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Input
                          id="penurunan-berat-badan-nilai-radio-2"
                          type="radio"
                          name="penurunan-berat-badan-nilai-radio"
                          className="me-1"
                          onChange={(e) => {
                            handleRadioChange(e)
                            handleRadioWeightLoss(e)
                          }}
                          defaultChecked={data && data.form && data.form.Penurunan_Berat_Badan_Nilai === 2}
                          value="2"
                          innerRef={register("penurunan-berat-badan-nilai-radio") as any}
                        />{' '}
                        <Label>6-10 kg (Skor 2)</Label>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Input
                          id="penurunan-berat-badan-nilai-radio-3"
                          type="radio"
                          name="penurunan-berat-badan-nilai-radio"
                          className="me-1"
                          onChange={(e) => {
                            handleRadioChange(e)
                            handleRadioWeightLoss(e)
                          }}
                          defaultChecked={data && data.form && data.form.Penurunan_Berat_Badan_Nilai === 3}
                          value="3"
                          innerRef={register("penurunan-berat-badan-nilai-radio") as any}
                        />{' '}
                        <Label>11-15 kg (Skor 3)</Label>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Input
                          id="penurunan-berat-badan-nilai-radio-4"
                          type="radio"
                          name="penurunan-berat-badan-nilai-radio"
                          className="me-1"
                          onChange={(e) => {
                            handleRadioChange(e)
                            handleRadioWeightLoss(e)
                          }}
                          defaultChecked={data && data.form && data.form.Penurunan_Berat_Badan_Nilai === 4}
                          value="4"
                          innerRef={register("penurunan-berat-badan-nilai-radio") as any}
                        />{' '}
                        <Label>{'>'}15 kg (Skor 4)</Label>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Input
                          id="penurunan-berat-badan-nilai-radio-5"
                          type="radio"
                          name="penurunan-berat-badan-nilai-radio"
                          className="me-1"
                          onChange={(e) => {
                            handleRadioChange(e)
                            handleRadioWeightLoss(e)
                          }}
                          defaultChecked={data && data.form && data.form.Penurunan_Berat_Badan_Nilai === -2}
                          value="-2"
                          innerRef={register("penurunan-berat-badan-nilai-radio") as any}
                        />{' '}
                        <Label>Tidak yakin penurunannya (Skor 2)</Label>
                      </Col>
                    </Row>
                  </td>
                </tr>
              </>
            )
          }
          <tr>
            <td>
              <Label>2. Penurunan Nafsu Makan </Label>
            </td>
            <td>
              <Row style={{width: '125%'}}>
                <Col>
                  <Input
                    id="penurunan-nafsu-makan-radio"
                    type="radio"
                    name="penurunan-nafsu-makan-radio"
                    className="me-1"
                    onChange={(e) => {
                      handleRadioChange(e)
                      handleRadioWeight(e)
                    }}
                    defaultChecked={data && data.form && data.form.Penurunan_Nafsu_Makan === 1}
                    value="1"
                    innerRef={register("penurunan-nafsu-makan-radio") as any}
                  />{' '}
                  <Label>Ya (Skor 1)</Label>
                </Col>
                <Col style={{marginLeft:  '-130px'}}>
                  <Input
                    id="penurunan-nafsu-makan-radio"
                    type="radio"
                    name="penurunan-nafsu-makan-radio"
                    className="me-1"
                    onChange={(e) => {
                      handleRadioChange(e)
                      handleRadioWeight(e)
                    }}
                    defaultChecked={data && data.form  && data.form.Penurunan_Nafsu_Makan === 0}
                    value="0"
                    innerRef={register("penurunan-nafsu-makan-radio") as any}
                  />{' '}
                  <Label>Tidak (Skor 0)</Label>
                </Col>
                <Col></Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Row>
                <Col style={{marginTop: '-50px'}}>
                  <Label>3. Diagnosa Khusus </Label>
                </Col>
              </Row>
            </td>
            <td>
              <Row style={{width: '100%'}}>
                <Col>
                  <Input
                    type="select"
                    id="nutrisi-diagnosa-khusus"
                    name="nutrisi-diagnosa-khusus"
                    innerRef={register()}
                    onChange={(e) => {
                      if (e.target.value !== '') {
                        setTotalSkor('Ya')
                      }
                    }}
                  >
                    <option value="" disabled={false}>Tidak</option>
                    {
                      diagnosaKhusus && diagnosaKhusus.map((item: any, key: number) => {
                        return <option value={item} key={key}>{ item }</option>;
                      })
                    }
                  </Input>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input
                    id="nutrisi-diagnosa-khusus-keterangan"
                    type="textarea"
                    placeholder='Keterangan Diagnosa Khusus'
                    style={{marginTop: '-15px'}}
                    name="nutrisi-diagnosa-khusus-keterangan"
                    innerRef={register()}
                  />
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>Total Skor</Label>
            </td>
            <td className='fw-bolder'>{total}</td>
          </tr>
          <tr>
            <td>
              <Row>
                <Col>
                  <Label>Pengkajian Lebih Lanjut</Label>
                </Col>
              </Row>
            </td>
            <td className='fw-bolder'>{totalSkor}</td>
          </tr>
        </Table>
        <h4 className='mt-2'>Riwayat Psikologis dan Spiritualutrisi</h4>
        <hr />
        <Table borderless style={{ width: '100%' }}>
          <tr>
            <td>
              <Row>
                <Col style={{marginTop: '-30px'}}>
                  <Label>Status Psikologis</Label>
                </Col>
              </Row>
            </td>
            <td>
              <Row>
                <Col>
                  <Input
                    id="psikologis-cemas"
                    type="checkbox"
                    name="psikologis-cemas"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    defaultChecked={data && data.form  && data.form.Psikologis_Cemas === 1}
                    value="1"
                    innerRef={register("psikologis-cemas") as any}
                  />{' '}
                  <Label>Cemas</Label>
                </Col>
                <Col>
                  <Input
                    id="psikologis-takut"
                    type="checkbox"
                    name="psikologis-takut"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    defaultChecked={data && data.form && data.form.Psikologis_Takut === 1}
                    value="1"
                    innerRef={register("psikologis-takut") as any}
                  />{' '}
                  <Label>Takut</Label>
                </Col>
                <Col>
                  <Input
                    id="psikologis-marah"
                    type="checkbox"
                    name="psikologis-marah"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    defaultChecked={data && data.form && data.form.Psikologis_Marah === 1}
                    value="1"
                    innerRef={register("psikologis-marah") as any}
                  />{' '}
                  <Label>Marah</Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input
                    id="psikologis-sedih"
                    type="checkbox"
                    name="psikologis-sedih"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    defaultChecked={data && data.form && data.form.Psikologis_Sedih === 1}
                    value="1"
                    innerRef={register("psikologis-sedih") as any}
                  />{' '}
                  <Label>Sedih</Label>
                </Col>
                <Col>
                  <Input
                    id="psikologis-kecenderungan-bunuh-diri"
                    type="checkbox"
                    name="psikologis-kecenderungan-bunuh-diri"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    defaultChecked={data && data.form && data.form.Psikologis_Kecenderungan_Bunuh_Diri === 1}
                    value="1"
                    innerRef={register("psikologis-kecenderungan-bunuh-diri") as any}
                  />{' '}
                  <Label>Kecenderungan Bunuh Diri</Label>
                </Col>
                <Col>
                  <Input
                    id="psikologis-lain-lain"
                    type="checkbox"
                    name="psikologis-lain-lain"
                    className="me-1"
                    onChange={(e) => {
                      setLainLain(e.target.checked)
                      handleCheckboxChange(e);
                    }}
                    defaultChecked={data && data.form && data.form.Psikologis_Lain_Lain === 1}
                    value="1"
                    innerRef={register("psikologis-lain-lain") as any}
                  />{' '}
                  <Label>Lain Lain</Label>
                </Col>
              </Row>
            </td>
          </tr>
          {
            lainLain && (
              <>
                <tr>
                  <td></td>
                  <td>
                    <Row>
                      <Col>
                        <Input
                          id="psikologis-lain-lain-keterangan"
                          type="text"
                          placeholder='Sebutkan..'
                          name="psikologis-lain-lain-keterangan"
                          innerRef={register()}
                        />
                      </Col>
                    </Row>
                  </td>
                </tr>
              </>
            )
          }
          <tr>
            <td>
              <Row>
                <Col style={{marginTop: '-50px'}}>
                  <Label>Status Mental</Label>
                </Col>
              </Row>
            </td>
            <td>
              <Row>
                <Col>
                  <Input
                    id="mental-sadar"
                    type="checkbox"
                    name="mental-sadar"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    defaultChecked={data && data.form && data.form.Mental_Sadar === 1}
                    value="1"
                    innerRef={register("mental-sadar") as any}
                  />{' '}
                  <Label>Sadar dan Orientasi Baik</Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input
                    id="mental-perilaku"
                    type="checkbox"
                    name="mental-perilaku"
                    className="me-1"
                    onChange={(e) => {
                      setMasalahPerilaku(e.target.checked)
                      handleCheckboxChange(e);
                    }}
                    defaultChecked={data && data.form && data.form.Mental_Perilaku === 1}
                    value="1"
                    innerRef={register("mental-perilaku") as any}
                  />{' '}
                  <Label>Ada Masalah Perilaku</Label>
                </Col>
              </Row>
              {
                masalahPerilaku && (
                  <>
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <Row>
                              <Col>
                                <Input
                                  id="mental-perilaku-keterangan"
                                  type="text"
                                  placeholder='Sebutkan..'
                                  name="mental-perilaku-keterangan"
                                  innerRef={register()}
                                  style={{width:'300px'}}
                                />
                              </Col>
                            </Row>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </>
                )
              }
              <Row>
                <Col>
                  <Input
                    id="mental-kekerasan"
                    type="checkbox"
                    name="mental-kekerasan"
                    className="me-1"
                    onChange={(e) => {
                      setKekerasanPasien(e.target.checked)
                      handleCheckboxChange(e);
                    }}
                    defaultChecked={data && data.form && data.form.Mental_Kekerasan === 1}
                    value="1"
                    innerRef={register("mental-kekerasan") as any}
                  />{' '}
                  <Label>Kekerasan yang dialami pasien sebelumnya</Label>
                </Col>
              </Row>
              {
                kekerasanPasien && (
                  <>
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <Row>
                              <Col>
                                <Input
                                  id="mental-kekerasan-keterangan"
                                  type="text"
                                  placeholder='Sebutkan..'
                                  name="mental-kekerasan-keterangan"
                                  innerRef={register()}
                                  style={{width:'300px'}}
                                />
                              </Col>
                            </Row>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </>
                )
              }
            </td>
          </tr>
        </Table>
      </TabPane>
    </TabContent>
  )
}

export default Nursing;
