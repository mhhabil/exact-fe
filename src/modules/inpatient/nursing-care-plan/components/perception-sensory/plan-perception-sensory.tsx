import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const PerceptionSensoryPlan = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const {  data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [rencana1PsCheckAll, setRencana1PsCheckAll] = useState<any>();
  const [rencana1Ps1Check, setRencana1Ps1Check] = useState<string | undefined>(`${data?.form?.Rencana1_Ps_1_Check}`);
  const [rencana1Ps2Check, setRencana1Ps2Check] = useState<string | undefined>(`${data?.form?.Rencana1_Ps_2_Check}`);
  const [rencana1Ps3Check, setRencana1Ps3Check] = useState<string | undefined>(`${data?.form?.Rencana1_Ps_3_Check}`);
  const [rencana1Ps4Check, setRencana1Ps4Check] = useState<string | undefined>(`${data?.form?.Rencana1_Ps_4_Check}`);
  const [rencana1Ps5Check, setRencana1Ps5Check] = useState<string | undefined>(`${data?.form?.Rencana1_Ps_5_Check}`);
  const [rencana1Ps6Check, setRencana1Ps6Check] = useState<string | undefined>(`${data?.form?.Rencana1_Ps_6_Check}`);
  const [rencana1Ps7Check, setRencana1Ps7Check] = useState<string | undefined>(`${data?.form?.Rencana1_Ps_7_Check}`);


  useEffect(() => {
    if (rencana1PsCheckAll === '1') {
      setValue('rencana1_ps_1_check', '1');
      setValue('rencana1_ps_2_check', '1');
      setValue('rencana1_ps_3_check', '1');
      setValue('rencana1_ps_4_check', '1');
      setValue('rencana1_ps_5_check', '1');
      setValue('rencana1_ps_6_check', '1');
      setValue('rencana1_ps_7_check', '1');
      setValue('rencana1_ps_8_check', '1');
      setRencana1Ps1Check('1');
      setRencana1Ps2Check('1');
      setRencana1Ps3Check('1');
      setRencana1Ps4Check('1');
      setRencana1Ps5Check('1');
      setRencana1Ps6Check('1');
      setRencana1Ps7Check('1');
    } else if (rencana1PsCheckAll === '0') {
      setValue('rencana1_ps_1_check', undefined);
      setValue('rencana1_ps_2_check', undefined);
      setValue('rencana1_ps_3_check', undefined);
      setValue('rencana1_ps_4_check', undefined);
      setValue('rencana1_ps_5_check', undefined);
      setValue('rencana1_ps_6_check', undefined);
      setValue('rencana1_ps_7_check', undefined);
      setValue('rencana1_ps_8_check', undefined);
      setRencana1Ps1Check(undefined);
      setRencana1Ps2Check(undefined);
      setRencana1Ps3Check(undefined);
      setRencana1Ps4Check(undefined);
      setRencana1Ps5Check(undefined);
      setRencana1Ps6Check(undefined);
      setRencana1Ps7Check(undefined);
    }
  }, [rencana1PsCheckAll]);


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
              id="rencana1_ps_check"
              type="checkbox"
              name="rencana1_ps_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setRencana1PsCheckAll('1');
                } else {
                  setRencana1PsCheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              //defaultChecked={data && data.form?.Rencana1_Ps_Check === "1"}
              innerRef={register("rencana1_ps_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
        </Row>
      </Col>
      <Col md='6' style={{ marginTop: '40px' }}>
        <Col>
          <Input
            id="rencana1_ps_1_check"
            type="checkbox"
            name="rencana1_ps_1_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Ps1Check('1');
              } else {
                setRencana1Ps1Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Ps_1_Check === "1"}
            checked={rencana1Ps1Check === '1'}
            innerRef={register("rencana1_ps_1_check") as any}
          />{' '}
          <Label>Kaji Nyeri</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_ps_2_check"
            type="checkbox"
            name="rencana1_ps_2_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Ps2Check('1');
              } else {
                setRencana1Ps2Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Ps_2_Check === "1"}
            checked={rencana1Ps2Check === '1'}
            innerRef={register("rencana1_ps_2_check") as any}
          />{' '}
          <Label>Monitor vital sign</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_ps_3_check"
            type="checkbox"
            name="rencana1_ps_3_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Ps3Check('1');
              } else {
                setRencana1Ps3Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Ps_3_Check === "1"}
            checked={ rencana1Ps3Check === '1'}
            innerRef={register("rencana1_ps_3_check") as any}
          />{' '}
          <Label>Ajarkan teknik relaksasi</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_ps_4_check"
            type="checkbox"
            name="rencana1_ps_4_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Ps4Check('1');
              } else {
                setRencana1Ps4Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Ps_4_Check === "1"}
            checked={ rencana1Ps4Check === '1'}
            innerRef={register("rencana1_ps_4_check") as any}
          />{' '}
          <Label>Atur posisi tidur</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_ps_5_check"
            type="checkbox"
            name="rencana1_ps_5_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Ps5Check('1');
              } else {
                setRencana1Ps5Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Ps_5_Check === "1"}
            checked={rencana1Ps5Check === '1'}
            innerRef={register("rencana1_ps_5_check") as any}
          />{' '}
          <Label>Batasi pengunjung</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_ps_6_check"
            type="checkbox"
            name="rencana1_ps_6_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Ps6Check('1');
              } else {
                setRencana1Ps6Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Ps_6_Check === "1"}
            checked={ rencana1Ps6Check === '1'}
            innerRef={register("rencana1_ps_6_check") as any}
          />{' '}
          <Label>Kompres panas - dingin</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_ps_7_check"
            type="checkbox"
            name="rencana1_ps_7_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Ps7Check('1');
              } else {
                setRencana1Ps7Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Ps_7_Check === "1"}
            checked={rencana1Ps7Check === '1'}
            innerRef={register("rencana1_ps_7_check") as any}
          />{' '}
          <Label>Berikan pendidikan kesehatan</Label>
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
        <Input
          id="rencana2_ps_1_check"
          type="checkbox"
          name="rencana2_ps_1_check"
          className="me-1"
          value="1"
          onChange={(e) => {
            handleCheckboxChange(e)
          }}
          defaultChecked={ (data && data?.form?.Rencana2_Ps_1_Check === "1") }
          innerRef={register("rencana2_ps_1_check") as any}
        />{' '}
        <Input
          style={{ marginTop: '10px' }}
          className="mb-1"
          type="text"
          id="rencana2_ps_1_text"
          name="rencana2_ps_1_text"
          innerRef={register({ required: false })}
          invalid={errors.rencana2_ps_1_text && true}
        />
        <Input
          id="rencana2_ps_2_check"
          type="checkbox"
          name="rencana2_ps_2_check"
          className="me-1"
          value="1"
          onChange={(e) => {
            handleCheckboxChange(e)
          }}
          defaultChecked={ (data && data?.form?.Rencana2_Ps_1_Check === "1") }
          innerRef={register("rencana2_ps_2_check") as any}
        />{' '}
        <Input
          style={{ marginTop: '10px' }}
          className="mb-1"
          type="text"
          id="rencana2_ps_2_text"
          name="rencana2_ps_2_text"
          innerRef={register({ required: false })}
          invalid={errors.rencana2_ps_2_text && true}
        />
        <Input
          id="rencana2_ps_3_check"
          type="checkbox"
          name="rencana2_ps_3_check"
          className="me-1"
          value="1"
          onChange={(e) => {
            handleCheckboxChange(e)
          }}
          defaultChecked={ (data && data?.form?.Rencana2_Ps_3_Check === "1") }
          innerRef={register("rencana2_ps_3_check") as any}
        />{' '}
        <Input
          style={{ marginTop: '10px' }}
          className="mb-1"
          type="text"
          id="rencana2_ps_3_text"
          name="rencana2_ps_3_text"
          innerRef={register({ required: false })}
          invalid={errors.rencana2_ps_3_text && true}
        />
      </Col>
    </Row>)
}

export default PerceptionSensoryPlan;
