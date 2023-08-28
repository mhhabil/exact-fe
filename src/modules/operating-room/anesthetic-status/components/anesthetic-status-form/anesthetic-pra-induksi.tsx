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


//FormAnestheticPraInduksi
const FormAnestheticPraInduksi = (props: { data: AnestheticStatus,  register: any,  errors: any, processing: boolean, setValue: any}) => {
  const {  data, register, errors, processing, setValue} = props;
  const dispatch = useAppDispatch();
  const { officers } = useAppSelector((state) => state.officer);

  return (
    <Row>
      <Card className="border-1">
        <Row>
          <Col md="6" sm="12">
            <h4>Penilaian Pra Induksi</h4>
            <FormGroup className="form-group" row></FormGroup>
            <FormGroup className="form-group" row>
              <TextInput name="jam_pra_induksi" label="Jam Pra Induksi" md={4} {...{ register, errors }}  />
            </FormGroup>
            <FormGroup className="form-group" row>
              <TextInput name="pra_induksi_kesadaran" label="Kesadaran" md={4} {...{ register, errors }}  />
            </FormGroup>
            <FormGroup className="form-group" row>
              <TextInput name="pra_induksi_tekanan_darah" label="Tekanan Darah" md={4} {...{ register, errors }}  />
            </FormGroup>
            <FormGroup className="form-group" row>
              <TextInput name="pra_induksi_denyut_nadi" label="Denyut Nadi" md={4} {...{ register, errors }} />
            </FormGroup>
            <FormGroup className="form-group" row>
              <TextInput name="pra_induksi_rr" label="RR" md={4} {...{ register, errors }}  />
            </FormGroup>
            <FormGroup className="form-group" row>
              <TextInput name="pra_induksi_suhu" label="Suhu" md={4} {...{ register, errors }}  />
            </FormGroup>
            <FormGroup className="form-group" row>
              <TextInput name="pra_induksi_saturasi" label="Saturasi O2" md={4} {...{ register, errors }} />
            </FormGroup>
            <FormGroup className="form-group" row>
              <TextInput name="pra_induksi_lainnya" label="Lain Lain" md={4} {...{ register, errors }} />
            </FormGroup>

          </Col>
          <Col md="6" sm="12">

          </Col>
        </Row>
      </Card>

      <Card className="border-1">
        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
          <Col md="2" sm="12" >
          Catatan
          </Col>
          <Col md="10" sm="12" >
            <Input
              id='catatan'
              type='textarea'
              name='catatan'
              innerRef={register()}
            />
          </Col>
        </Row>

      </Card>
    </Row>
  );
};

export default FormAnestheticPraInduksi;
