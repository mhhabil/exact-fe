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


//FormAnestheticPerifer
const FormAnestheticPerifer = (props: { data: AnestheticStatus,  register: any,  errors: any, processing: boolean, setValue: any}) => {
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
        <Col md="12" sm="12">
          <h4></h4>
          <FormGroup className="form-group" row></FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="infus_perifer_1" label="Infus Perifer: Tempat & Ukuran" md={3} {...{ register, errors }}  />
          </FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="infus_perifer_2" label="" md={3} {...{ register, errors }}  />
          </FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="infus_perifer_3" label="" md={3} {...{ register, errors }} />
          </FormGroup>
        </Col>
        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
          <Col md="3" sm="12" >
          Posisi
          </Col>
          <Col md="9" sm="12" >
            <Col>
              <Input
                id="posisi-1"
                type="radio"
                name="posisi"
                className="me-1"
                onChange={(e) => handleRadioChange(e)}
                defaultChecked={data && data.form && data.form.Posisi === 'Telentang'}
                value="Telentang"
                innerRef={register("posisi")}
              />{' '}
              <Label>Telentang</Label>
            </Col>
            <Col>
              <Input
                id="posisi-2"
                type="radio"
                name="posisi"
                className="me-1"
                onChange={(e) => handleRadioChange(e)}
                defaultChecked={data && data.form  && data.form.Posisi === 'Lithotomi'}
                value="Lithotomi"
                innerRef={register("posisi")}
              />{' '}
              <Label>Lithotomi</Label>
            </Col>
            <Col>
              <Input
                id="posisi-3"
                type="radio"
                name="posisi"
                className="me-1"
                onChange={(e) => handleRadioChange(e)}
                defaultChecked={data && data.form  && data.form.Posisi === 'Prone'}
                value="Prone"
                innerRef={register("posisi")}
              />{' '}
              <Label>Prone</Label>
            </Col>
            <Col>
              <Input
                id="posisi-4"
                type="radio"
                name="posisi"
                className="me-1"
                onChange={(e) => handleRadioChange(e)}
                defaultChecked={data && data.form  && data.form.Posisi === 'Lateral Kiri'}
                value="Lateral Kiri"
                innerRef={register("posisi")}
              />{' '}
              <Label>Lateral Kiri</Label>
            </Col>
            <Col>
              <Input
                id="posisi-5"
                type="radio"
                name="posisi"
                className="me-1"
                onChange={(e) => handleRadioChange(e)}
                defaultChecked={data && data.form  && data.form.Posisi === 'Lateral Kanan'}
                value="Lateral Kanan"
                innerRef={register("posisi")}
              />{' '}
              <Label>Lateral Kanan</Label>
            </Col>
            <Col>
              <Input
                id="posisi-6"
                type="radio"
                name="posisi"
                className="me-1"
                onChange={(e) => handleRadioChange(e)}
                defaultChecked={data && data.form  && data.form.Posisi === 'Lain-lain'}
                value="Lain-lain"
                innerRef={register("posisi")}
              />{' '}
              <Label>Lain-lain</Label>
            </Col>
            <Col>
              <Input
                id="posisi_lainnya"
                type="text"
                placeholder='lainya'
                name="posisi_lainnya"
                innerRef={register()}
              />
            </Col>
          </Col>
        </Row>
      </Card>
    </Row>
  );
};

export default FormAnestheticPerifer;
