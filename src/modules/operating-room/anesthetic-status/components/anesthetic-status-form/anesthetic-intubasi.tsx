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


//FormAnestheticIntubasi
const FormAnestheticIntubasi = (props: { data: AnestheticStatus,  register: any,  errors: any, processing: boolean, setValue: any}) => {
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
        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
          <Col md="3" sm="12" >
          Intubasi
          </Col>
          <Col md="9" sm="12" >
            <Col>
              <Input
                id="intubasi_sesudah_tidur"
                type="checkbox"
                name="intubasi_sesudah_tidur"
                className="me-1"
                onChange={(e) => {
                  handleCheckboxChange(e);
                }}
                defaultChecked={data && data.form && data.form.Intubasi_Sesudah_Tidur === "1"}
                value="1"
                innerRef={register("intubasi_sesudah_tidur") as any}
              />{' '}
              <Label> Sesudah Tidur</Label>
            </Col>
            <Col>
              <Input
                id="intubasi_blind"
                type="checkbox"
                name="intubasi_blind"
                className="me-1"
                onChange={(e) => {
                  handleCheckboxChange(e);
                }}
                defaultChecked={data && data.form && data.form.Intubasi_Blind === "1"}
                value="1"
                innerRef={register("intubasi_blind") as any}
              />{' '}
              <Label>  Blind</Label>
            </Col>
            <Col>
              <Input
                id="intubasi_oral"
                type="checkbox"
                name="intubasi_oral"
                className="me-1"
                onChange={(e) => {
                  handleCheckboxChange(e);
                }}
                defaultChecked={data && data.form && data.form.Intubasi_Oral === "1"}
                value="1"
                innerRef={register("intubasi_oral") as any}
              />{' '}
              <Label> Oral</Label>
            </Col>
            <Col>
              <Input
                id="intubasi_nasal"
                type="checkbox"
                name="intubasi_nasal"
                className="me-1"
                onChange={(e) => {
                  handleCheckboxChange(e);
                }}
                defaultChecked={data && data.form && data.form.Intubasi_Nasal === "1"}
                value="1"
                innerRef={register("intubasi_nasal") as any}
              />{' '}
              <Label> Nasal</Label>
            </Col>
            <Col>
              <Input
                id="intubasi_kanan"
                type="checkbox"
                name="intubasi_kanan"
                className="me-1"
                onChange={(e) => {
                  handleCheckboxChange(e);
                }}
                defaultChecked={data && data.form && data.form.Intubasi_Kanan === "1"}
                value="1"
                innerRef={register("intubasi_kanan") as any}
              />{' '}
              <Label>  Kanan</Label>
            </Col>
            <Col>
              <Input
                id="intubasi_kiri"
                type="checkbox"
                name="intubasi_kiri"
                className="me-1"
                onChange={(e) => {
                  handleCheckboxChange(e);
                }}
                defaultChecked={data && data.form && data.form.Intubasi_Kiri === "1"}
                value="1"
                innerRef={register("intubasi_kiri") as any}
              />{' '}
              <Label> Kiri</Label>
            </Col>
            <Col>
              <Input
                id="intubasi_trakheostomi"
                type="checkbox"
                name="intubasi_trakheostomi"
                className="me-1"
                onChange={(e) => {
                  handleCheckboxChange(e);
                }}
                defaultChecked={data && data.form && data.form.Intubasi_Trakheostomi === "1"}
                value="1"
                innerRef={register("intubasi_trakheostomi") as any}
              />{' '}
              <Label> Trakheostomi</Label>
            </Col>
            <Col>
              <Input
                id="intubasi_sulit_ventilasi"
                type="checkbox"
                name="intubasi_sulit_ventilasi"
                className="me-1"
                onChange={(e) => {
                  handleCheckboxChange(e);
                }}
                defaultChecked={data && data.form && data.form.Intubasi_Sulit_Ventilasi === "1"}
                value="1"
                innerRef={register("intubasi_sulit_ventilasi") as any}
              />{' '}
              <Label> Sulit Ventilasi</Label>
              <Input
                id="intubasi_sulit_ventilasi_teks"
                type="text"
                placeholder='Ketikan'
                name="intubasi_sulit_ventilasi_teks"
                innerRef={register()}
              />
            </Col>
            <Col>
              <Input
                id="intubasi_sulit_intubasi"
                type="checkbox"
                name="intubasi_sulit_intubasi"
                className="me-1"
                onChange={(e) => {
                  handleCheckboxChange(e);
                }}
                defaultChecked={data && data.form && data.form.Intubasi_Sulit_Intubasi === "1"}
                value="1"
                innerRef={register("intubasi_sulit_intubasi") as any}
              />{' '}
              <Label> Sulit Intubasi</Label>
              <Input
                id="intubasi_sulit_intubasi_teks"
                type="text"
                placeholder='Ketikan'
                name="intubasi_sulit_intubasi_teks"
                innerRef={register()}
              />
            </Col>
            <Col>
              <Input
                id="intubasi_dengan_stilet"
                type="checkbox"
                name="intubasi_dengan_stilet"
                className="me-1"
                onChange={(e) => {
                  handleCheckboxChange(e);
                }}
                defaultChecked={data && data.form && data.form.Intubasi_Dengan_Stilet === "1"}
                value="1"
                innerRef={register("intubasi_dengan_stilet") as any}
              />{' '}
              <Label> Dengan stilet</Label>
              <Input
                id="intubasi_dengan_stilet_teks"
                type="text"
                placeholder='Ketikan'
                name="intubasi_dengan_stilet_teks"
                innerRef={register()}
              />
            </Col>
            <Col>
              <Input
                id="intubasi_cuff"
                type="checkbox"
                name="intubasi_cuff"
                className="me-1"
                onChange={(e) => {
                  handleCheckboxChange(e);
                }}
                defaultChecked={data && data.form && data.form.Intubasi_Cuff === "1"}
                value="1"
                innerRef={register("intubasi_cuff") as any}
              />{' '}
              <Label>  Cuff</Label>
            </Col>
            <Col>
              <Input
                id="intubasi_level_ett"
                type="checkbox"
                name="intubasi_level_ett"
                className="me-1"
                onChange={(e) => {
                  handleCheckboxChange(e);
                }}
                defaultChecked={data && data.form && data.form.Intubasi_Level_ETT === "1"}
                value="1"
                innerRef={register("intubasi_level_ett") as any}
              />{' '}
              <Label> Level ETT</Label>
            </Col>
            <Col>
              <Input
                id="intubasi_pack"
                type="checkbox"
                name="intubasi_pack"
                className="me-1"
                onChange={(e) => {
                  handleCheckboxChange(e);
                }}
                defaultChecked={data && data.form && data.form.Intubasi_Pack === "1"}
                value="1"
                innerRef={register("intubasi_pack") as any}
              />{' '}
              <Label> Pack</Label>
            </Col>

          </Col>
        </Row>
      </Card>
    </Row>
  );
};

export default FormAnestheticIntubasi;
