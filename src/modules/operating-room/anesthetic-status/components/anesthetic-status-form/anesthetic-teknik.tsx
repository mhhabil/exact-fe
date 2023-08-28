import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
import { useForm } from "react-hook-form";
import { DateTimeInput, TextInput } from "@shared/input";
import { FindPdfRequest, IPdfModel } from "@shared/pdf";
import { useEffect, useState } from "react";
import { AppRequest } from "@shared/request";
import { Signature } from "@shared/signature/components";
import { SignatureModel } from "@shared/signature/models/signature.model";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { AnestheticStatus } from "@modules/operating-room/anesthetic-status/models/anesthetic-status.model";
import AnestheticStatusService from "@modules/operating-room/anesthetic-status/services";


//FormAnestheticTeknik
const FormAnestheticTeknik = (props: { data: AnestheticStatus,  register: any,  errors: any, processing: boolean, setValue: any}) => {
  const {  data, register, errors, processing, setValue} = props;
  const dispatch = useAppDispatch();
  const { officers } = useAppSelector((state) => state.officer);

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  return (
    <Row>
      <Card className="border-1">
        <Table borderless style={{ width: '100%' }}>

          <tr>
            <td>
              <Label>Teknik Anestesi</Label>
            </td>
            <td style={{width:'81%'}}>
              <Row>
                <Col>
                  <Input
                    id="teknik_anestesi-1"
                    type="radio"
                    name="teknik_anestesi"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Teknik_Anestesi === '1'}
                    value="1"
                    innerRef={register("teknik_anestesi")}
                  />{' '}
                  <Label>Anestesi Regional</Label>
                </Col>
                <Col>
                  <Input
                    id="teknik_anestesi-2"
                    type="radio"
                    name="teknik_anestesi"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form  && data.form.Teknik_Anestesi === '2'}
                    value="2"
                    innerRef={register("teknik_anestesi")}
                  />{' '}
                  <Label>Anestesi Umum</Label>
                </Col>
                <Col>
                  <Input
                    id="teknik_anestesi-3"
                    type="radio"
                    name="teknik_anestesi"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Teknik_Anestesi === '3'}
                    value="3"
                    innerRef={register("teknik_anestesi")}
                  />{' '}
                  <Label>Lain-lain</Label>
                </Col>
                <Col>
                  <Input
                    id="teknik_anestesi_lainnya"
                    type="text"
                    placeholder='Lainnya...'
                    name="teknik_anestesi_lainnya"
                    innerRef={register()}
                  />
                </Col>
              </Row>
            </td>
          </tr>

          <tr>
            <td>
              <Label>Teknik & Alat Khusus</Label>
            </td>
            <td>
              <Row>
                <Col>

                  <Row>
                    <Col>
                      <Input
                        id="teknik_khusus_hipotensi"
                        type="checkbox"
                        name="teknik_khusus_hipotensi"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.form && data.form.Teknik_Khusus_Hipotensi === "1"}
                        value="1"
                        innerRef={register("teknik_khusus_hipotensi") as any}
                      />{' '}
                      <Label>Hipotensi</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="teknik_khusus_bronkoskopi"
                        type="checkbox"
                        name="teknik_khusus_bronkoskopi"
                        className="me-1"
                        onChange={(e) => {
                          handleCheckboxChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Teknik_Khusus_Bronkoskopi === "1"}
                        value="1"
                        innerRef={register("teknik_khusus_bronkoskopi") as any}
                      />{' '}
                      <Label>Bronkoskopi</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="teknik_khusus_lainnya"
                        type="checkbox"
                        name="teknik_khusus_lainnya"
                        className="me-1"
                        onChange={(e) => {
                          handleCheckboxChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Teknik_Khusus_Lainnya === "1"}
                        value="1"
                        innerRef={register("teknik_khusus_lainnya") as any}
                      />{' '}
                      <Label>Lain-lain</Label>
                    </Col>
                  </Row>

                </Col>
                <Col>

                  <Row>
                    <Col>
                      <Input
                        id="teknik_khusus_tci"
                        type="checkbox"
                        name="teknik_khusus_tci"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.form && data.form.Teknik_Khusus_TCI === "1"}
                        value="1"
                        innerRef={register("teknik_khusus_tci") as any}
                      />{' '}
                      <Label> TCI</Label>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Input
                        id="teknik_khusus_glidescope"
                        type="checkbox"
                        name="teknik_khusus_glidescope"
                        className="me-1"
                        onChange={(e) => {
                          handleCheckboxChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Teknik_Khusus_Glidescope === "1"}
                        value="1"
                        innerRef={register("teknik_khusus_glidescope") as any}
                      />{' '}
                      <Label>Glidescope</Label>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Input
                        id="teknik_khusus_lainnya_teks"
                        type="text"
                        placeholder='Lainnya...'
                        name="teknik_khusus_lainnya_teks"
                        innerRef={register()}
                      />
                    </Col>
                  </Row>

                </Col>
                <Col>

                  <Row>
                    <Col>
                      <Input
                        id="teknik_khusus_cpb"
                        type="checkbox"
                        name="teknik_khusus_cpb"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.form && data.form.Teknik_Khusus_CPB === "1"}
                        value="1"
                        innerRef={register("teknik_khusus_cpb") as any}
                      />{' '}
                      <Label> CPB</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="teknik_khusus_usg"
                        type="checkbox"
                        name="teknik_khusus_usg"
                        className="me-1"
                        onChange={(e) => {
                          handleCheckboxChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Teknik_Khusus_USG === "1"}
                        value="1"
                        innerRef={register("teknik_khusus_usg") as any}
                      />{' '}
                      <Label>USG</Label>
                    </Col>
                  </Row>

                </Col>
                <Col>

                  <Row>
                    <Col>
                      <Input
                        id="teknik_khusus_ventilasi"
                        type="checkbox"
                        name="teknik_khusus_ventilasi"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.form && data.form.Teknik_Khusus_Ventilasi === "1"}
                        value="1"
                        innerRef={register("teknik_khusus_ventilasi") as any}
                      />{' '}
                      <Label> Ventilasi Satu Paru</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="teknik_khusus_stimulator"
                        type="checkbox"
                        name="teknik_khusus_stimulator"
                        className="me-1"
                        onChange={(e) => {
                          handleCheckboxChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Teknik_Khusus_Stimulator === "1"}
                        value="1"
                        innerRef={register("teknik_khusus_stimulator") as any}
                      />{' '}
                      <Label> Stimulator Saraf</Label>
                    </Col>
                  </Row>

                </Col>
              </Row>
            </td>
          </tr>

          <tr>
            <td>
              <Label>Monitoring</Label>
            </td>
            <td>
              <Row>
                <Col>

                  <Row>
                    <Col>
                      <Input
                        id="monitoring_ekg"
                        type="checkbox"
                        name="monitoring_ekg"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.form && data.form.Monitoring_EKG === "1"}
                        value="1"
                        innerRef={register("monitoring_ekg") as any}
                      />{' '}
                      <Label>EKG Lead</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="monitoring_ekg_teks"
                        type="text"
                        placeholder='EKG Lead Text'
                        name="monitoring_ekg_teks"
                        innerRef={register()}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="monitoring_nibp"
                        type="checkbox"
                        name="monitoring_nibp"
                        className="me-1"
                        onChange={(e) => {
                          handleCheckboxChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Monitoring_NIBP === "1"}
                        value="1"
                        innerRef={register("monitoring_nibp") as any}
                      />{' '}
                      <Label> NIBP</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="monitoring_cath"
                        type="checkbox"
                        name="monitoring_cath"
                        className="me-1"
                        onChange={(e) => {
                          handleCheckboxChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Monitoring_Cath === "1"}
                        value="1"
                        innerRef={register("monitoring_cath") as any}
                      />{' '}
                      <Label> Cath A Pulmo</Label>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Input
                        id="monitoring_lainnya"
                        type="checkbox"
                        name="monitoring_lainnya"
                        className="me-1"
                        onChange={(e) => {
                          handleCheckboxChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Monitoring_Lainnya === "1"}
                        value="1"
                        innerRef={register("monitoring_lainnya") as any}
                      />{' '}
                      <Label>  Lain-lain</Label>
                    </Col>
                  </Row>

                </Col>
                <Col>

                  <Row>
                    <Col>
                      <Input
                        id="monitoring_arteri"
                        type="checkbox"
                        name="monitoring_arteri"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.form && data.form.Monitoring_Arteri === "1"}
                        value="1"
                        innerRef={register("monitoring_arteri") as any}
                      />{' '}
                      <Label> Arteri Line</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="monitoring_arteri_teks"
                        type="text"
                        placeholder='Arteri Line Text'
                        name="monitoring_arteri_teks"
                        innerRef={register()}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="monitoring_ngt"
                        type="checkbox"
                        name="monitoring_ngt"
                        className="me-1"
                        onChange={(e) => {
                          handleCheckboxChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Monitoring_NGT === "1"}
                        value="1"
                        innerRef={register("monitoring_ngt") as any}
                      />{' '}
                      <Label> NGT</Label>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Input
                        id="monitoring_spo2"
                        type="checkbox"
                        name="monitoring_spo2"
                        className="me-1"
                        onChange={(e) => {
                          handleCheckboxChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Monitoring_SpO2 === "1"}
                        value="1"
                        innerRef={register("monitoring_spo2") as any}
                      />{' '}
                      <Label> SpO2</Label>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Input
                        id="monitoring_lainnya_teks"
                        type="text"
                        placeholder='Lainnya...'
                        name="monitoring_lainnya_teks"
                        innerRef={register()}
                      />
                    </Col>
                  </Row>

                </Col>
                <Col>

                  <Row>
                    <Col>
                      <Input
                        id="monitoring_etco2"
                        type="checkbox"
                        name="monitoring_etco2"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.form && data.form.Monitoring_EtCO2 === "1"}
                        value="1"
                        innerRef={register("monitoring_etco2") as any}
                      />{' '}
                      <Label> EtCO2</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="monitoring_bis"
                        type="checkbox"
                        name="monitoring_bis"
                        className="me-1"
                        onChange={(e) => {
                          handleCheckboxChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Monitoring_BIS === "1"}
                        value="1"
                        innerRef={register("monitoring_bis") as any}
                      />{' '}
                      <Label>BIS</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="monitoring_katerer"
                        type="checkbox"
                        name="monitoring_katerer"
                        className="me-1"
                        onChange={(e) => {
                          handleCheckboxChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Monitoring_Katerer === "1"}
                        value="1"
                        innerRef={register("monitoring_katerer") as any}
                      />{' '}
                      <Label>Katerer Urine</Label>
                    </Col>
                  </Row>

                </Col>
                <Col>

                  <Row>
                    <Col>
                      <Input
                        id="monitoring_stetoskop"
                        type="checkbox"
                        name="monitoring_stetoskop"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.form && data.form.Monitoring_Stetoskop === "1"}
                        value="1"
                        innerRef={register("monitoring_stetoskop") as any}
                      />{' '}
                      <Label>  Stetoskop</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="monitoring_cvp"
                        type="checkbox"
                        name="monitoring_cvp"
                        className="me-1"
                        onChange={(e) => {
                          handleCheckboxChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Monitoring_CVP === "1"}
                        value="1"
                        innerRef={register("monitoring_cvp") as any}
                      />{' '}
                      <Label>  CVP</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="monitoring_cvp_teks"
                        type="text"
                        placeholder='CVP Text'
                        name="monitoring_cvp_teks"
                        innerRef={register()}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="monitoring_temp"
                        type="checkbox"
                        name="monitoring_temp"
                        className="me-1"
                        onChange={(e) => {
                          handleCheckboxChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Monitoring_Temp === "1"}
                        value="1"
                        innerRef={register("monitoring_temp") as any}
                      />{' '}
                      <Label>   Temp</Label>
                    </Col>
                  </Row>

                </Col>
              </Row>
            </td>
          </tr>


          <tr>
            <td>
              <Label>Status Fisik</Label>
            </td>
            <td>

              <Row>
                <Col>
                  <Input
                    id="asa-1"
                    type="radio"
                    name="asa"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.ASA === 'ASA'}
                    value="ASA"
                    innerRef={register("asa")}
                  />{' '}
                  <Label>ASA</Label>
                </Col>
                <Col>
                  <Input
                    id="asa-1"
                    type="radio"
                    name="asa"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.ASA === '1'}
                    value="1"
                    innerRef={register("asa")}
                  />{' '}
                  <Label>1</Label>
                </Col>
                <Col>
                  <Input
                    id="asa-2"
                    type="radio"
                    name="asa"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form  && data.form.ASA === '2'}
                    value="2"
                    innerRef={register("asa")}
                  />{' '}
                  <Label>2</Label>
                </Col>
                <Col>
                  <Input
                    id="asa-3"
                    type="radio"
                    name="asa"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.ASA === '3'}
                    value="3"
                    innerRef={register("asa")}
                  />{' '}
                  <Label>3</Label>
                </Col>
                <Col>
                  <Input
                    id="asa-4"
                    type="radio"
                    name="asa"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.ASA === '4'}
                    value="4"
                    innerRef={register("asa")}
                  />{' '}
                  <Label>4</Label>
                </Col>
                <Col>
                  <Input
                    id="asa-5"
                    type="radio"
                    name="asa"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Teknik_Anestesi === '5'}
                    value="5"
                    innerRef={register("asa")}
                  />{' '}
                  <Label>5</Label>
                </Col>
                <Col>
                  <Input
                    id="asa-e"
                    type="radio"
                    name="asa"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Teknik_Anestesi === 'E'}
                    value="E"
                    innerRef={register("asa")}
                  />{' '}
                  <Label>E</Label>
                </Col>
              </Row>
            </td>
          </tr>

          <tr>
            <td>
              <Label>Alergi</Label>
            </td>
            <td style={{width:'81%'}}>
              <Row>
                <Col>
                  <Input
                    id="alergi-1"
                    type="radio"
                    name="alergi"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Alergi === 'YA'}
                    value="YA"
                    innerRef={register("alergi")}
                  />{' '}
                  <Label>Ya</Label>
                </Col>
                <Col>
                  <Input
                    id="alergi-2"
                    type="radio"
                    name="alergi"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form  && data.form.Alergi === 'TIDAK'}
                    value="TIDAK"
                    innerRef={register("alergi")}
                  />{' '}
                  <Label>Tidak</Label>
                </Col>

                <Col>
                  <Input
                    id="alergi_keterangan"
                    type="text"
                    placeholder='Keterangan'
                    name="alergi_keterangan"
                    innerRef={register()}
                  />
                </Col>
              </Row>
            </td>
          </tr>

          <tr>
            <td>
              <Label>Penyulit Pra Anestesi</Label>
            </td>
            <td style={{width:'81%'}}>
              <Input
                id='penyulit_pra_anestesi'
                type='textarea'
                name='penyulit_pra_anestesi'
                innerRef={register()}
              />
            </td>
          </tr>

          <tr>
            <td>
              <Label></Label>
            </td>
            <td>
              <Label></Label>
            </td>
          </tr>


        </Table>
      </Card>
      <Card className="border-1">
        <Table borderless style={{ width: '100%' }}>

          <tr>
            <td>
              <Label>Ceklist Persiapan Anestesi</Label>
            </td>
            <td>
              <Row>
                <Col>

                  <Row>
                    <Col>
                      <Input
                        id="checklist_inform_consent"
                        type="checkbox"
                        name="checklist_inform_consent"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.form && data.form.Checklist_Inform_Consent === "1"}
                        value="1"
                        innerRef={register("checklist_inform_consent") as any}
                      />{' '}
                      <Label>Informed consent</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="checklist_monitoring"
                        type="checkbox"
                        name="checklist_monitoring"
                        className="me-1"
                        onChange={(e) => {
                          handleCheckboxChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Checklist_Monitoring === "1"}
                        value="1"
                        innerRef={register("checklist_monitoring") as any}
                      />{' '}
                      <Label> Monitoring</Label>
                    </Col>
                  </Row>


                </Col>
                <Col>

                  <Row>
                    <Col>
                      <Input
                        id="checklist_obat_anestesi"
                        type="checkbox"
                        name="checklist_obat_anestesi"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.form && data.form.Checklist_Obat_Anestesi === "1"}
                        value="1"
                        innerRef={register("checklist_obat_anestesi") as any}
                      />{' '}
                      <Label>Obat-obatan Anestesi</Label>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Input
                        id="checklist_obat_emergensi"
                        type="checkbox"
                        name="checklist_obat_emergensi"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.form && data.form.Checklist_Obat_Emergensi === "1"}
                        value="1"
                        innerRef={register("checklist_obat_emergensi") as any}
                      />{' '}
                      <Label>Obat-obatan Emergensi</Label>
                    </Col>
                  </Row>

                </Col>
                <Col>

                  <Row>
                    <Col>
                      <Input
                        id="checklist_tatalaksana"
                        type="checkbox"
                        name="checklist_tatalaksana"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.form && data.form.Checklist_Tatalaksana === "1"}
                        value="1"
                        innerRef={register("checklist_tatalaksana") as any}
                      />{' '}
                      <Label>Tatalaksana Jalan Nafas</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="checklist_suction"
                        type="checkbox"
                        name="checklist_suction"
                        className="me-1"
                        onChange={(e) => {
                          handleCheckboxChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Checklist_Suction === "1"}
                        value="1"
                        innerRef={register("checklist_suction") as any}
                      />{' '}
                      <Label>Suction Apparatus</Label>
                    </Col>
                  </Row>

                </Col>
                <Col>

                  <Row>
                    <Col>
                      <Input
                        id="checklist_mesin"
                        type="checkbox"
                        name="checklist_mesin"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.form && data.form.Checklist_Mesin === "1"}
                        value="1"
                        innerRef={register("checklist_mesin") as any}
                      />{' '}
                      <Label> Mesin Anestesi</Label>
                    </Col>
                  </Row>

                </Col>
              </Row>
            </td>
          </tr>

        </Table>
      </Card>
    </Row>
  );
};

export default FormAnestheticTeknik;
