import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const PerceptionSensorySightResult = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const { data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [tujuan1Ps1_CheckAll, setTujuan1Ps1_CheckAll] = useState<any>();
  const [tujuan1Ps1_1Check, setTujuan1Ps1_1Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Ps1_1_Check}`);
  const [tujuan1Ps1_2Check, setTujuan1Ps1_2Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Ps1_2_Check}`);


  useEffect(() => {
    if (tujuan1Ps1_CheckAll === '1') {
      setValue('tujuan1_ps1_1_check', '1');
      setValue('tujuan1_ps1_2_check', '1');
      setTujuan1Ps1_1Check('1');
      setTujuan1Ps1_2Check('1');

    } else if (tujuan1Ps1_CheckAll === '0') {
      setValue('tujuan1_ps1_1_check', undefined);
      setValue('tujuan1_ps1_2_check', undefined);
      setTujuan1Ps1_1Check(undefined);
      setTujuan1Ps1_2Check(undefined);

    }
  }, [tujuan1Ps1_CheckAll]);


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
                Penglihatan kembali dengan dilakukan tindakan
            </Col>
            
            <Input
              id="tujuan1_ps1_check"
              type="checkbox"
              name="tujuan1_ps1_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setTujuan1Ps1_CheckAll('1');
                } else {
                  setTujuan1Ps1_CheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              defaultChecked={data && data.form?.Tujuan1_Ps1_Check === "1"}
              innerRef={register("tujuan1_ps1_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
        </Row>
      </Col>
      <Col md='6' style={{ marginTop: '40px' }}>
        <Col>
          <Input
            id="tujuan1_ps1_1_check"
            type="checkbox"
            name="tujuan1_ps1_1_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setTujuan1Ps1_1Check('1');
              } else {
                setTujuan1Ps1_1Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Tujuan1_Ps1_1_Check === "1"}
            checked={ tujuan1Ps1_1Check === '1'}
            innerRef={register("tujuan1_ps1_1_check") as any}
          />{' '}
          <Label>Fakoemulsifikasi</Label>
        </Col>
        <Col>
          <Input
            id="tujuan1_ps1_2_check"
            type="checkbox"
            name="tujuan1_ps1_2_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setTujuan1Ps1_2Check('1');
              } else {
                setTujuan1Ps1_2Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Tujuan1_Ps1_2_Check === "1"}
            checked={ tujuan1Ps1_2Check === '1'}
            innerRef={register("tujuan1_ps1_2_check") as any}
          />{' '}
          <Label>Bedah refaktif</Label>
        </Col>
       
      </Col>
    </Row>)
}

export default PerceptionSensorySightResult;
