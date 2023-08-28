import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const PerceptionSensoryResult = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const { data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [tujuan1PsCheckAll, setTujuan1PsCheckAll] = useState<any>();
  const [tujuan1Ps1Check, setTujuan1Ps1Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Ps_1_Check}`);
  const [tujuan1Ps2Check, setTujuan1Ps2Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Ps_2_Check}`);
  const [tujuan1Ps3Check, setTujuan1Ps3Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Ps_3_Check}`);
  const [tujuan1Ps4Check, setTujuan1Ps4Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Ps_4_Check}`);

  useEffect(() => {
    if (tujuan1PsCheckAll === '1') {
      setValue('tujuan1_ps_1_check', '1');
      setValue('tujuan1_ps_2_check', '1');
      setValue('tujuan1_ps_3_check', '1');
      setValue('tujuan1_ps_4_check', '1');
      setTujuan1Ps1Check('1');
      setTujuan1Ps2Check('1');
      setTujuan1Ps3Check('1');
      setTujuan1Ps4Check('1');
    } else if (tujuan1PsCheckAll === '0') {
      setValue('tujuan1_ps_1_check', undefined);
      setValue('tujuan1_ps_2_check', undefined);
      setValue('tujuan1_ps_3_check', undefined);
      setValue('tujuan1_ps_4_check', undefined);
      setTujuan1Ps1Check(undefined);
      setTujuan1Ps2Check(undefined);
      setTujuan1Ps3Check(undefined);
      setTujuan1Ps4Check(undefined);
    }
  }, [tujuan1PsCheckAll]);


  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }


  return (
    <Row>
      <Col md='3'>3. Tujuan Dan Kriteria Hasil</Col>
      <Col md='3'>
        <Row>
          <Col md='12'>
            <Col>
                Nyeri berkurang sampai dengan hilang setelah dilakukan asuhan keperawatan
            </Col>
            <Col>
              <NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan1_ps_jam_1'
                {...{ register, errors }}
              />X<NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan1_ps_jam_2'
                {...{ register, errors }}
              />
            </Col>
            <Input
              id="tujuan1_ps_check"
              type="checkbox"
              name="tujuan1_ps_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setTujuan1PsCheckAll('1');
                } else {
                  setTujuan1PsCheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              defaultChecked={data && data.form?.Tujuan1_Ps_Check === "1"}
              innerRef={register("tujuan1_ps_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
        </Row>
      </Col>
      <Col md='6' style={{ marginTop: '40px' }}>
        <Col>
          <Input
            id="tujuan1_ps_1_check"
            type="checkbox"
            name="tujuan1_ps_1_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setTujuan1Ps1Check('1');
              } else {
                setTujuan1Ps1Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Tujuan1_Ps_1_Check === "1"}
            checked={ tujuan1Ps1Check === '1'}
            innerRef={register("tujuan1_ps_1_check") as any}
          />{' '}
          <Label>Ekspresi wajah rileks</Label>
        </Col>
        <Col>
          <Input
            id="tujuan1_ps_2_check"
            type="checkbox"
            name="tujuan1_ps_2_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setTujuan1Ps2Check('1');
              } else {
                setTujuan1Ps2Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Tujuan1_Ps_2_Check === "1"}
            checked={ tujuan1Ps2Check === '1'}
            innerRef={register("tujuan1_ps_2_check") as any}
          />{' '}
          <Label>Menyatakan nyeri berkurang atau hilang</Label>
        </Col>
        <Col>
          <Input
            id="tujuan1_ps_3_check"
            type="checkbox"
            name="tujuan1_ps_3_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setTujuan1Ps3Check('1');
              } else {
                setTujuan1Ps3Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Tujuan1_Ps_3_Check === "1"}
            checked={tujuan1Ps3Check === '1'}
            innerRef={register("tujuan1_ps_3_check") as any}
          />{' '}
          <Label>Skala nyeri batas normal</Label>
        </Col>
        <Col>
          <Input
            id="tujuan1_ps_4_check"
            type="checkbox"
            name="tujuan1_ps_4_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setTujuan1Ps4Check('1');
              } else {
                setTujuan1Ps4Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Tujuan1_Ps_4_Check === "1"}
            checked={tujuan1Ps4Check === '1'}
            innerRef={register("tujuan1_ps_4_check") as any}
          />{' '}
          <Label>Tanda-tanda vital dalam batas normal</Label>
        </Col>
      </Col>
    </Row>)
}

export default PerceptionSensoryResult;
