import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const PerceptionSensorySightPlan = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const {  data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [rencana1Ps1_CheckAll, setRencana1Ps1_CheckAll] = useState<any>();
  const [rencana1Ps1_1Check, setRencana1Ps1_1Check] = useState<string | undefined>(`${data?.form?.Rencana1_Ps1_1_Check}`);
  const [rencana1Ps1_2Check, setRencana1Ps1_2Check] = useState<string | undefined>(`${data?.form?.Rencana1_Ps1_2_Check}`);
  const [rencana1Ps1_3Check, setRencana1Ps1_3Check] = useState<string | undefined>(`${data?.form?.Rencana1_Ps1_3_Check}`);
  const [rencana1Ps1_4Check, setRencana1Ps1_4Check] = useState<string | undefined>(`${data?.form?.Rencana1_Ps1_4_Check}`);
  const [rencana1Ps1_5Check, setRencana1Ps1_5Check] = useState<string | undefined>(`${data?.form?.Rencana1_Ps1_5_Check}`);


  useEffect(() => {
    if (rencana1Ps1_CheckAll === '1') {
      setValue('rencana1_ps1_1_check', '1');
      setValue('rencana1_ps1_2_check', '1');
      setValue('rencana1_ps1_3_check', '1');
      setValue('rencana1_ps1_4_check', '1');
      setValue('rencana1_ps1_5_check', '1');
      setRencana1Ps1_1Check('1');
      setRencana1Ps1_2Check('1');
      setRencana1Ps1_3Check('1');
      setRencana1Ps1_4Check('1');
      setRencana1Ps1_5Check('1');

    } else if (rencana1Ps1_CheckAll === '0') {
      setValue('rencana1_ps1_1_check', undefined);
      setValue('rencana1_ps1_2_check', undefined);
      setValue('rencana1_ps1_3_check', undefined);
      setValue('rencana1_ps1_4_check', undefined);
      setValue('rencana1_ps1_5_check', undefined);
      setRencana1Ps1_1Check(undefined);
      setRencana1Ps1_2Check(undefined);
      setRencana1Ps1_3Check(undefined);
      setRencana1Ps1_4Check(undefined);
      setRencana1Ps1_5Check(undefined);
    }
  }, [rencana1Ps1_CheckAll]);


  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }


  return (
    <Row>
      <Col md='3'>4. Rencana Keperawatan</Col>
      <Col md='3'>
        <Row>
          <Col md='12'>
            <Col>
                Mandiri
            </Col>
            <Input
              id="rencana1_ps1_check"
              type="checkbox"
              name="rencana1_ps1_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setRencana1Ps1_CheckAll('1');
                } else {
                  setRencana1Ps1_CheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              //defaultChecked={data && data.form?.Rencana1_Ps1_Check === "1"}
              innerRef={register("rencana1_ps1_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
        </Row>
      </Col>
      <Col md='6' style={{ marginTop: '40px' }}>
        <Col>
          <Input
            id="rencana1_ps1_1_check"
            type="checkbox"
            name="rencana1_ps1_1_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Ps1_1Check('1');
              } else {
                setRencana1Ps1_1Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Ps1_1_Check === "1"}
            checked={rencana1Ps1_1Check === '1'}
            innerRef={register("rencana1_ps1_1_check") as any}
          />{' '}
          <Label>Kaji visus</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_ps1_2_check"
            type="checkbox"
            name="rencana1_ps1_2_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Ps1_2Check('1');
              } else {
                setRencana1Ps1_2Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Ps1_2_Check === "1"}
            checked={rencana1Ps1_2Check === '1'}
            innerRef={register("rencana1_ps1_2_check") as any}
          />{' '}
          <Label>Identifikasi faktor penyebab</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_ps1_3_check"
            type="checkbox"
            name="rencana1_ps1_3_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Ps1_3Check('1');
              } else {
                setRencana1Ps1_3Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Ps1_3_Check === "1"}
            checked={ rencana1Ps1_3Check === '1'}
            innerRef={register("rencana1_ps1_3_check") as any}
          />{' '}
          <Label>Sertakan keluarga untuk selalu mendampingi pasien</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_ps1_4_check"
            type="checkbox"
            name="rencana1_ps1_4_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Ps1_4Check('1');
              } else {
                setRencana1Ps1_4Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Ps1_4_Check === "1"}
            checked={ rencana1Ps1_4Check === '1'}
            innerRef={register("rencana1_ps1_4_check") as any}
          />{' '}
          <Label>Modifikasi ruangan agar aman</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_ps1_5_check"
            type="checkbox"
            name="rencana1_ps1_5_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Ps1_5Check('1');
              } else {
                setRencana1Ps1_5Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Ps1_5_Check === "1"}
            checked={rencana1Ps1_5Check === '1'}
            innerRef={register("rencana1_ps1_5_check") as any}
          />{' '}
          <Label>Informasikan kepada pasien bahwa kehilangan penglihatan tidak dapat di perbaiki namun terapi tersebut dapat mencegah kehilangan penglihatan lebih lanjut</Label>
        </Col>


      </Col>

      <Col md='3'></Col>
      <Col md='3'>
        <Row>
          <Col md='12'>
            <Col>
                Kolaborasi
            </Col>
          </Col>
        </Row>
      </Col>
      <Col md='6' style={{ marginTop: '40px' }}>
        <Col>
          <Input
            id="rencana2_ps1_1_check"
            type="checkbox"
            name="rencana2_ps1_1_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              handleCheckboxChange(e)
            }}
            defaultChecked={ (data && data?.form?.Rencana2_Ps1_1_Check === "1") }
            innerRef={register("rencana2_ps1_1_check") as any}
          />{' '}
          <Label>Tindakan Pembedahan</Label>
        </Col>
        
        <Input
          id="rencana2_ps1_2_check"
          type="checkbox"
          name="rencana2_ps1_2_check"
          className="me-1"
          value="1"
          onChange={(e) => {
            handleCheckboxChange(e)
          }}
          defaultChecked={ (data && data?.form?.Rencana2_Ps1_2_Check === "1") }
          innerRef={register("rencana2_ps1_2_check") as any}
        />{' '}
        <Input
          style={{ marginTop: '10px' }}
          className="mb-1"
          type="text"
          id="rencana2_ps1_2_text"
          name="rencana2_ps1_2_text"
          innerRef={register({ required: false })}
          invalid={errors.rencana2_ps_2_text && true}
        />
      </Col>
    </Row>)
}

export default PerceptionSensorySightPlan;
