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


//FormAnestheticDpjp
const FormAnestheticDpjp = (props: { data: AnestheticStatus,  register: any,  errors: any, processing: boolean, setValue: any}) => {
  const {  data, register, errors, processing, setValue} = props;
  const dispatch = useAppDispatch();
  const { officers } = useAppSelector((state) => state.officer);


  return (
    <Row>
      <Card className="border-1">
        <Row>
          <Col md="6" sm="12">

            <FormGroup className="form-group" row> </FormGroup>
            <FormGroup className="form-group" row>
              <TextInput name="id_dpjp_anestesi" label="DPJP Anestesi" md={4} {...{ register, errors }}  style={{ color: '#303030' }}/>
            </FormGroup>
            <FormGroup className="form-group" row>
              <TextInput name="id_asisten_anestesi" label="Asisten Anestesi" md={4} {...{ register, errors }}  style={{ color: '#303030' }}/>
            </FormGroup>
            <FormGroup className="form-group" row>
              <TextInput name="id_dpjp_bedah" label="DPJP Bedah" md={4} {...{ register, errors }}  style={{ color: '#303030' }}/>
            </FormGroup>

          </Col>
          <Col md="6" sm="12">
            <FormGroup className="form-group" row> </FormGroup>
            <FormGroup className="form-group" row>
              <TextInput name="diagnosa_pra_bedah" label="Diagnosis Pra Bedah" md={4} {...{ register, errors }}  style={{ color: '#303030' }}/>
            </FormGroup>
            <FormGroup className="form-group" row>
              <TextInput name="jenis_pembedahan" label="Jenis Pembedahan" md={4} {...{ register, errors }}  style={{ color: '#303030' }}/>
            </FormGroup>
            <FormGroup className="form-group" row>
              <TextInput name="diagnosis_pasca_bedah" label="Diagnosis Pasca Bedah" md={4} {...{ register, errors }}  style={{ color: '#303030' }}/>
            </FormGroup>
          </Col>
        </Row>
      </Card>
    </Row>
  );
};

export default FormAnestheticDpjp;

