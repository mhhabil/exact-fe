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


//FormAnestheticPasca
const FormAnestheticPasca = (props: { data: AnestheticStatus,  register: any,  errors: any, processing: boolean, setValue: any}) => {
  const {  data, register, errors, processing, setValue} = props;
  const dispatch = useAppDispatch();
  const { officers } = useAppSelector((state) => state.officer);

  return (
    <Row>
      <Card className="border-1">
        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
          <Col md="3" sm="12" >
          Pengelolaan Nyeri
          </Col>
          <Col md="9" sm="12" >
            <Input
              id="ipa_pengelolaan_nyeri"
              type="text"
              placeholder=''
              name="ipa_pengelolaan_nyeri"
              innerRef={register()}
            />
          </Col>
        </Row>
        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
          <Col md="3" sm="12" >
          Penanganan Mual / Muntah
          </Col>
          <Col md="9" sm="12" >
            <Input
              id="ipa_penanganan_mual"
              type="text"
              placeholder=''
              name="ipa_penanganan_mual"
              innerRef={register()}
            />
          </Col>
        </Row>
        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
          <Col md="3" sm="12" >
          Antibiotika
          </Col>
          <Col md="9" sm="12" >
            <Input
              id="ipa_antibiotik"
              type="text"
              placeholder=''
              name="ipa_antibiotik"
              innerRef={register()}
            />
          </Col>
        </Row>
        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
          <Col md="3" sm="12" >
          Obat-obatan lain
          </Col>
          <Col md="9" sm="12" >
            <Input
              id="ipa_obat"
              type="text"
              placeholder=''
              name="ipa_obat"
              innerRef={register()}
            />
          </Col>
        </Row>
        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
          <Col md="3" sm="12" >
          Infus
          </Col>
          <Col md="9" sm="12" >
            <Input
              id="ipa_infus"
              type="text"
              placeholder=''
              name="ipa_infus"
              innerRef={register()}
            />
          </Col>
        </Row>
        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
          <Col md="3" sm="12" >
          Diet & Nutrisi
          </Col>
          <Col md="9" sm="12" >
            <Input
              id="ipa_diet"
              type="text"
              placeholder=''
              name="ipa_diet"
              innerRef={register()}
            />
          </Col>
        </Row>

        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
          <Col md="3" sm="12" >
          Pemantauan tensi, nadi & nafas
          </Col>
          <Col md="2" sm="12" >
          Setiap
          </Col>
          <Col md="2" sm="12" >
            <Input
              id="ipa_tensi_setiap"
              type="text"
              placeholder=''
              name="ipa_tensi_setiap"
              innerRef={register()}
            />
          </Col>
          <Col md="2" sm="12" >
          Selama
          </Col>
          <Col md="2" sm="12" >
            <Input
              id="ipa_tensi_selama"
              type="text"
              placeholder=''
              name="ipa_tensi_selama"
              innerRef={register()}
            />
          </Col>
        </Row>
        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
          <Col md="3" sm="12" >
          Lain-lain
          </Col>
          <Col md="9" sm="12" >
            <Input
              id="ipa_lainnya"
              type="text"
              placeholder=''
              name="ipa_lainnya"
              innerRef={register()}
            />
          </Col>
        </Row>
      </Card>
    </Row>
  );
};

export default FormAnestheticPasca;
