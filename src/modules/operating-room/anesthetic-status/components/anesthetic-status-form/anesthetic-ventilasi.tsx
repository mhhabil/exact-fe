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


//FormAnestheticVentilasi
const FormAnestheticVentilasi = (props: { data: AnestheticStatus,  register: any,  errors: any, processing: boolean, setValue: any}) => {
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
              <Label>Ventilasi</Label>
            </td>
            <td>
              <Row>
                <Col>

                  <Row>
                    <Col>
                      <Input
                        id="ventilasi_spontan"
                        type="checkbox"
                        name="ventilasi_spontan"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.form && data.form.Ventilasi_Spontan === "1"}
                        value="1"
                        innerRef={register("ventilasi_spontan") as any}
                      />{' '}
                      <Label>Spontan</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="ventilasi_kendali"
                        type="checkbox"
                        name="ventilasi_kendali"
                        className="me-1"
                        onChange={(e) => {
                          handleCheckboxChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Ventilasi_Kendali === "1"}
                        value="1"
                        innerRef={register("ventilasi_kendali") as any}
                      />{' '}
                      <Label> Kendali</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="ventilasi_ventilator"
                        type="checkbox"
                        name="ventilasi_ventilator"
                        className="me-1"
                        onChange={(e) => {
                          handleCheckboxChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Ventilasi_Ventilator === "1"}
                        value="1"
                        innerRef={register("ventilasi_ventilator") as any}
                      />{' '}
                      <Label>Ventilator</Label>
                    </Col>
                    <Col md={12} style={{paddingTop:'10px', paddingBottom:'10px', paddingLeft:'10%'}} >
                      <Label >TV</Label>
                      <Input
                        id="ventilasi_ventilator_tv"
                        type="text"
                        placeholder='Ketikan'
                        name="ventilasi_ventilator_tv"
                        innerRef={register()}
                      />
                    </Col>
                    <Col md={12} style={{paddingTop:'10px', paddingBottom:'10px', paddingLeft:'10%'}} >
                      <Label>RR</Label>
                       <Input
                        id="ventilasi_ventilator_rr"
                        type="text"
                        placeholder='Ketikan'
                        name="ventilasi_ventilator_rr"
                        innerRef={register()}
                      />
                    </Col>
                    <Col md={12} style={{paddingTop:'10px', paddingBottom:'10px', paddingLeft:'10%'}} >
                      <Label>PEEP</Label>
                       <Input
                        id="ventilasi_ventilator_peep"
                        type="text"
                        placeholder='Ketikan'
                        name="ventilasi_ventilator_peep"
                        innerRef={register()}
                      />
                    </Col>

                  </Row>

                  <Row>
                    <Col>
                      <Input
                        id="ventilasi_lainnya"
                        type="checkbox"
                        name="ventilasi_lainnya"
                        className="me-1"
                        onChange={(e) => {
                          handleCheckboxChange(e);
                        }}
                        defaultChecked={data && data.form && data.form.Ventilasi_Lainnya === "1"}
                        value="1"
                        innerRef={register("ventilasi_lainnya") as any}
                      />{' '}
                      <Label>Lain</Label>
                       <Input
                        id="ventilasi_lainnya_teks"
                        type="text"
                        placeholder='Ketikan'
                        name="ventilasi_lainnya_teks"
                        innerRef={register()}
                      />
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

export default FormAnestheticVentilasi;
