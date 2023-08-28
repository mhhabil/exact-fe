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


//FormAnestheticNafas
const FormAnestheticNafas = (props: { data: AnestheticStatus,  register: any,  errors: any, processing: boolean, setValue: any}) => {
  const {  data, register, errors, processing, setValue} = props;
  const dispatch = useAppDispatch();
  const { officers } = useAppSelector((state) => state.officer);

  return (
    <Row>
      <Card className="border-1">
        <Col md="12" sm="12" style={{paddingTop:'10px', paddingBottom:'10px'}}>
          <h4>Tata Laksana Jalan Nafas</h4>
          <FormGroup className="form-group" row></FormGroup>

          <FormGroup className="form-group" row>
            <Label md={2}>Face Mask</Label>
            <TextInput name="face_mask_no" label="No." md={1} {...{ register, errors }}  />
          </FormGroup>
          <FormGroup className="form-group" row>
            <Label md={2}>Oro / Nasopharing</Label>
            <TextInput name="oro_no" label="No." md={1} {...{ register, errors }}  />
          </FormGroup>

          <FormGroup className="form-group" row>
            <Label md={2}>ETT</Label>
            <TextInput name="ett_no" label="No." md={1} {...{ register, errors }}  />
          </FormGroup>
          <FormGroup className="form-group" row>
            <Label md={2}></Label>
            <TextInput name="ett_jenis" label="Jenis" md={1} {...{ register, errors }}  />
          </FormGroup>
          <FormGroup className="form-group" row>
            <Label md={2}></Label>
            <TextInput name="ett_fiksasi" label="Fiksasi" md={1} {...{ register, errors }}  />
            <Label md={1}>CM</Label>
          </FormGroup>
          <FormGroup className="form-group" row>
            <Label md={2}>LMA</Label>
            <TextInput name="lma_no" label="No." md={1} {...{ register, errors }}  />
          </FormGroup>
          <FormGroup className="form-group" row>
            <Label md={2}></Label>
            <TextInput name="lma_jenis" label="Jenis" md={1} {...{ register, errors }}  />
          </FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="trakhesotomi" label="Trankhesotomi" md={3} {...{ register, errors }}  />
          </FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="bronkoskopi_fiber" label="Bronkoskopi" md={3} {...{ register, errors }}  />
          </FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="glidescope" label="Glidescope" md={3} {...{ register, errors }}  />
          </FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="tata_laksana_lainnya" label="Lain-lain" md={3} {...{ register, errors }}  />
          </FormGroup>
        </Col>

      </Card>
    </Row>
  );
};

export default FormAnestheticNafas;
