import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import PerceptionSensoryResult from "./result-perception-sensory";
import PerceptionSensoryPlan from "./plan-perception-sensory";

const PerceptionSensoryMain = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const { data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [diagnosa1PsCheckAll, setDiagnosa1PsCheckAll] = useState<any>();
  const [diagnosa1Ps1Check, setDiagnosa1Ps1Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Ps_1_Check}`);
  const [diagnosa1Ps2Check, setDiagnosa1Ps2Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Ps_2_Check}`);
  const [diagnosa1Ps3Check, setDiagnosa1Ps3Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Ps_3_Check}`);
  const [diagnosa1Ps4Check, setDiagnosa1Ps4Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Ps_4_Check}`);
  const [diagnosa1Ps5Check, setDiagnosa1Ps5Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Ps_5_Check}`);
  const [diagnosa1Ps6Check, setDiagnosa1Ps6Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Ps_6_Check}`);

  useEffect(() => {
    if (diagnosa1PsCheckAll === '1') {
      setValue('diagnosa1_ps_1_check', '1');
      setValue('diagnosa1_ps_2_check', '1');
      setValue('diagnosa1_ps_3_check', '1');
      setValue('diagnosa1_ps_4_check', '1');
      setValue('diagnosa1_ps_5_check', '1');
      setValue('diagnosa1_ps_6_check', '1');
      setDiagnosa1Ps1Check('1');
      setDiagnosa1Ps2Check('1');
      setDiagnosa1Ps3Check('1');
      setDiagnosa1Ps4Check('1');
      setDiagnosa1Ps5Check('1');
      setDiagnosa1Ps6Check('1');
    } else if (diagnosa1PsCheckAll === '0') {
      setValue('diagnosa1_ps_1_check', undefined);
      setValue('diagnosa1_ps_2_check', undefined);
      setValue('diagnosa1_ps_3_check', undefined);
      setValue('diagnosa1_ps_4_check', undefined);
      setValue('diagnosa1_ps_5_check', undefined);
      setValue('diagnosa1_ps_6_check', undefined);
      setDiagnosa1Ps1Check(undefined);
      setDiagnosa1Ps2Check(undefined);
      setDiagnosa1Ps3Check(undefined);
      setDiagnosa1Ps4Check(undefined);
      setDiagnosa1Ps5Check(undefined);
      setDiagnosa1Ps6Check(undefined);
    }
  }, [diagnosa1PsCheckAll]);


  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }


  return (<TabContent {...{ activeTab }}>
    <TabPane tabId='2'>
      <FormGroup className="form-group" row>

        <Row>
          <Col md='3'>Tanggal Persepsi  Sensori</Col>
          <Col md='5'>
            <Input
              id="tanggal_ps"
              type="date"
              name="tanggal_ps"
              innerRef={register()}
              invalid={errors.tanggal_si && true}
            />
          </Col>
          <Col md='4'></Col>
        </Row>

        <Row>
          <Col md='3'>2. Diagnosa Keperawatan</Col>
          <Col md='3'>
            <Col>
              <Label>2. Persepsi - Sensori</Label>
            </Col>
            <Col>
              <Label>Nyeri b.d.</Label>
            </Col>
            <Input
              id="diagnosa1_ps_check"
              type="checkbox"
              name="diagnosa1_ps_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setDiagnosa1PsCheckAll('1');
                } else {
                  setDiagnosa1PsCheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              defaultChecked={data && data.form?.Diagnosa1_Ps_Check === "1"}
              innerRef={register("diagnosa1_ps_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>

          <Col md='6'>
            <Col>
              <Input
                id="diagnosa1_ps_1_check"
                type="checkbox"
                name="diagnosa1_ps_1_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setDiagnosa1Ps1Check('1');
                  } else {
                    setDiagnosa1Ps1Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Diagnosa1_Ps_1_Check === "1"}
                checked={diagnosa1Ps1Check === '1'}
                innerRef={register("diagnosa1_ps_1_check") as any}
              />{' '}
              <Label>Post operasi</Label>
              <Input
                style={{ marginTop: '10px' }}
                className="mb-1"
                type="text"
                id="diagnosa1_ps_1_text"
                name="diagnosa1_ps_1_text"
                innerRef={register({ required: false })}
                invalid={errors.diagnosa1_ps_1_text && true}
              />
            </Col>
            <Col>
              <Input
                id="diagnosa1_ps_2_check"
                type="checkbox"
                name="diagnosa1_ps_2_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setDiagnosa1Ps2Check('1');
                  } else {
                    setDiagnosa1Ps2Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Diagnosa1_Ps_2_Check === "1"}
                checked={ diagnosa1Ps2Check === '1'}
                innerRef={register("diagnosa1_ps_2_check") as any}
              />{' '}
              <Label>Infeksi</Label>
              <Input
                style={{ marginTop: '10px' }}
                className="mb-1"
                type="text"
                id="diagnosa1_ps_2_text"
                name="diagnosa1_ps_2_text"
                innerRef={register({ required: false })}
                invalid={errors.diagnosa1_ps_2_text && true}
              />
            </Col>
            <Col>
              <Input
                id="diagnosa1_ps_3_check"
                type="checkbox"
                name="diagnosa1_ps_3_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setDiagnosa1Ps3Check('1');
                  } else {
                    setDiagnosa1Ps3Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Diagnosa1_Ps_3_Check === "1"}
                checked={ diagnosa1Ps3Check === '1'}
                innerRef={register("diagnosa1_ps_3_check") as any}
              />{' '}
              <Label>TIO</Label>
              <Input
                style={{ marginTop: '10px' }}
                className="mb-1"
                type="text"
                id="diagnosa1_ps_3_text"
                name="diagnosa1_ps_3_text"
                innerRef={register({ required: false })}
                invalid={errors.diagnosa1_ps_3_text && true}
              />
            </Col>
            <Col>
              <Input
                id="diagnosa1_ps_4_check"
                type="checkbox"
                name="diagnosa1_ps_4_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setDiagnosa1Ps4Check('1');
                  } else {
                    setDiagnosa1Ps4Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Diagnosa1_Ps_4_Check === "1"}
                checked={ diagnosa1Ps4Check === '1'}
                innerRef={register("diagnosa1_ps_4_check") as any}
              />{' '}
              <Label>Ulkus kornea</Label>
            </Col>
            <Col>
              <Input
                id="diagnosa1_ps_5_check"
                type="checkbox"
                name="diagnosa1_ps_5_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setDiagnosa1Ps5Check('1');
                  } else {
                    setDiagnosa1Ps5Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Diagnosa1_Ps_5_Check === "1"}
                checked={ diagnosa1Ps5Check === '1'}
                innerRef={register("diagnosa1_ps_5_check") as any}
              />{' '}
              <Label>Post injeksi intravitreal</Label>
            </Col>
            <Col>
              <Input
                id="diagnosa1_ps_6_check"
                type="checkbox"
                name="diagnosa1_ps_6_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setDiagnosa1Ps6Check('1');
                  } else {
                    setDiagnosa1Ps6Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Diagnosa1_Ps_6_Check === "1"}
                checked={ diagnosa1Ps6Check === '1'}
                innerRef={register("diagnosa1_ps_6_check") as any}
              />{' '}
              <Label>Tindakan general anastesi</Label>
            </Col>
          </Col>
        </Row>

        <PerceptionSensoryResult
          data={data}
          {...{ register, activeTab, errors, processing, setValue }}
        />

        <PerceptionSensoryPlan
          data={data}
          {...{ register, activeTab, errors, processing, setValue }}
        />


      </FormGroup>
    </TabPane>
  </TabContent>)
}

export default PerceptionSensoryMain;
