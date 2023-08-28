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


//FormAnestheticPremedikasi
const FormAnestheticPremedikasi = (props: { data: AnestheticStatus,  register: any,  errors: any, processing: boolean, setValue: any}) => {
  const {  data, register, errors, processing, setValue} = props;
  const dispatch = useAppDispatch();
  const { officers } = useAppSelector((state) => state.officer);

  return (
    <Row>
      <Card className="border-1">
        <Col md="12" sm="12" style={{paddingTop:'10px', paddingBottom:'10px'}}>
          <h4>Premedikasi</h4>
          <FormGroup className="form-group" row></FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="premedikasi_oral" label="Premedikasi Oral" md={3} {...{ register, errors }}  />
          </FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="premedikasi_im" label="Premedikasi I.M." md={3} {...{ register, errors }}  />
          </FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="premedikasi_iv" label="Premedikasi I.V." md={3} {...{ register, errors }} />
          </FormGroup>
        </Col>

      </Card>
    </Row>
  );
};

export default FormAnestheticPremedikasi;
