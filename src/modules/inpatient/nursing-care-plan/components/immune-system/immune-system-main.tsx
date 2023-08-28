import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import ImmuneSystemResult from "./result-immune-system";
import ImmuneSystemPlan from "./plan-immune-system";

const ImmuneSystemMain = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const { data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [diagnosa1SiCheckAll, setDiagnosa1SiCheckAll] = useState<any>();
  const [diagnosa1Si1Check, setDiagnosa1Si1Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Si_1_Check}`);
  const [diagnosa1Si2Check, setDiagnosa1Si2Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Si_2_Check}`);
  const [diagnosa1Si3Check, setDiagnosa1Si3Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Si_3_Check}`);

  const [diagnosa2SiCheckAll, setDiagnosa2SiCheckAll] = useState<any>();
  const [diagnosa2Si1Check, setDiagnosa2Si1Check] = useState<string | undefined>(`${data?.form?.Diagnosa2_Si_1_Check}`);
  const [diagnosa2Si2Check, setDiagnosa2Si2Check] = useState<string | undefined>(`${data?.form?.Diagnosa2_Si_2_Check}`);
  const [diagnosa2Si3Check, setDiagnosa2Si3Check] = useState<string | undefined>(`${data?.form?.Diagnosa2_Si_3_Check}`);

  const [diagnosa3SiCheckAll, setDiagnosa3SiCheckAll] = useState<any>();
  const [diagnosa3Si1Check, setDiagnosa3Si1Check] = useState<string | undefined>(`${data?.form?.Diagnosa3_Si_1_Check}`);
  const [diagnosa3Si2Check, setDiagnosa3Si2Check] = useState<string | undefined>(`${data?.form?.Diagnosa3_Si_2_Check}`);

  useEffect(() => {
    if (diagnosa1SiCheckAll === '1') {
      setValue('diagnosa1_si_1_check', '1');
      setValue('diagnosa1_si_2_check', '1');
      setValue('diagnosa1_si_3_check', '1');
      setDiagnosa1Si1Check('1');
      setDiagnosa1Si2Check('1');
      setDiagnosa1Si3Check('1');
    } else if (diagnosa1SiCheckAll === '0') {
      setValue('diagnosa1_si_1_check', undefined);
      setValue('diagnosa1_si_2_check', undefined);
      setValue('diagnosa1_si_3_check', undefined);
      setDiagnosa1Si1Check(undefined);
      setDiagnosa1Si2Check(undefined);
      setDiagnosa1Si3Check(undefined);
    }
  }, [diagnosa1SiCheckAll]);

  useEffect(() => {
    if (diagnosa2SiCheckAll === '1') {
      setValue('diagnosa2_si_1_check', '1');
      setValue('diagnosa2_si_2_check', '1');
      setValue('diagnosa2_si_3_check', '1');
      setDiagnosa2Si1Check('1');
      setDiagnosa2Si2Check('1');
      setDiagnosa2Si3Check('1');
    } else if (diagnosa2SiCheckAll === '0') {
      setValue('diagnosa2_si_1_check', undefined);
      setValue('diagnosa2_si_2_check', undefined);
      setValue('diagnosa2_si_3_check', undefined);
      setDiagnosa2Si1Check(undefined);
      setDiagnosa2Si2Check(undefined);
      setDiagnosa2Si3Check(undefined);
    }
  }, [diagnosa2SiCheckAll]);
  
  useEffect(() => {
    if (diagnosa3SiCheckAll === '1') {
      setValue('diagnosa3_si_1_check', '1');
      setValue('diagnosa3_si_2_check', '1');
      setDiagnosa3Si1Check('1');
      setDiagnosa3Si2Check('1');
    } else if (diagnosa3SiCheckAll === '0') {
      setValue('diagnosa3_si_1_check', undefined);
      setValue('diagnosa3_si_2_check', undefined);
      setDiagnosa3Si1Check(undefined);
      setDiagnosa3Si2Check(undefined);
    }
  }, [diagnosa3SiCheckAll]);

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }


  return (<TabContent {...{ activeTab }}>
    <TabPane tabId='1'>
      <FormGroup className="form-group" row>

        <Row>
          <Col md='3'>1. Tanggal Rencana Asuhan Keperawatan</Col>
          <Col md='5'>
            <Input
              id="tanggal_si"
              type="date"
              name="tanggal_si"
              innerRef={register()}
              invalid={errors.tanggal_si && true}
            />
          </Col>
          <Col md='4'></Col>
        </Row>

        <Row>
          <Col md='3'>2. Diagnosa Keperawatan</Col>
          <Col md='7' style={{ borderTop: "2px dashed black" }}>
            <Row>
              <Col md='6'>
                <Col>
                Resiko infeksi b.d
                </Col>
                <Input
                  id="diagnosa1_si_check"
                  type="checkbox"
                  name="diagnosa1_si_check"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDiagnosa1SiCheckAll('1');
                    } else {
                      setDiagnosa1SiCheckAll('0');
                    }
                    handleCheckboxChange(e)
                  }}
                  defaultChecked={data && data.form?.Diagnosa1_Si_Check === "1"}
                  innerRef={register("diagnosa1_si_check") as any}
                />{' '}
                <Label>Pilih Semua</Label>
              </Col>
              <Col md='6'>
                <Col>
                  <Input
                    id="diagnosa1_si_1_check"
                    type="checkbox"
                    name="diagnosa1_si_1_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1Si1Check('1');
                      } else {
                        setDiagnosa1Si1Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_Si_1_Check === "1"}
                    checked={diagnosa1Si1Check === '1'}
                    innerRef={register("diagnosa1_si_1_check") as any}
                  />{' '}
                  <Label>Sistem imun tidak adekuat</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa1_si_2_check"
                    type="checkbox"
                    name="diagnosa1_si_2_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1Si2Check('1');
                      } else {
                        setDiagnosa1Si2Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_Si_2_Check === "1"}
                    checked={ diagnosa1Si2Check === '1'}
                    innerRef={register("diagnosa1_si_2_check") as any}
                  />{' '}
                  <Label>Adanya luka</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa1_si_3_check"
                    type="checkbox"
                    name="diagnosa1_si_3_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1Si3Check('1');
                      } else {
                        setDiagnosa1Si3Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_Si_3_Check === "1"}
                    checked={ diagnosa1Si3Check === '1'}
                    innerRef={register("diagnosa1_si_3_check") as any}
                  />{' '}
                  <Label>Prosedur invasive</Label>
                </Col>
              </Col>
            </Row>
          </Col>
          <Col md='2'></Col>
        </Row>

        <Row>
          <Col md='3'></Col>
          <Col md='7' style={{ borderTop: "2px dashed black" }}>
            <Row>
              <Col md='6'>
                <Col>
                Hiperthermia b.d
                </Col>
                <Input
                  id="diagnosa2_si_check"
                  type="checkbox"
                  name="diagnosa2_si_check"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDiagnosa2SiCheckAll('1');
                    } else {
                      setDiagnosa2SiCheckAll('0');
                    }
                    handleCheckboxChange(e)
                  }}
                  defaultChecked={data && data.form?.Diagnosa2_Si_Check === "1"}
                  innerRef={register("diagnosa2_si_check") as any}
                />{' '}
                <Label>Pilih Semua</Label>
              </Col>
              <Col md='6'>
                <Col>
                  <Input
                    id="diagnosa2_si_1_check"
                    type="checkbox"
                    name="diagnosa2_si_1_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa2Si1Check('1');
                      } else {
                        setDiagnosa2Si1Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa2_Si_1_Check === "1"}
                    checked={ diagnosa2Si1Check === '1'}
                    innerRef={register("diagnosa2_si_1_check") as any}
                  />{' '}
                  <Label>Adanya trauma</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa2_si_2_check"
                    type="checkbox"
                    name="diagnosa2_si_2_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa2Si2Check('1');
                      } else {
                        setDiagnosa2Si2Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa2_Si_2_Check === "1"}
                    checked={ diagnosa2Si2Check === '1'}
                    innerRef={register("diagnosa2_si_2_check") as any}
                  />{' '}
                  <Label>Adanya dehidrasi</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa2_si_3_check"
                    type="checkbox"
                    name="diagnosa2_si_3_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa2Si3Check('1');
                      } else {
                        setDiagnosa2Si3Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa2_Si_3_Check === "1"}
                    checked={ diagnosa2Si3Check === '1'}
                    innerRef={register("diagnosa2_si_3_check") as any}
                  />{' '}
                  <Label>Peningkatan metabolisme</Label>
                </Col>
              </Col>
            </Row>
          </Col>
          <Col md='2'></Col>
        </Row>

        <Row>
          <Col md='3'></Col>
          <Col md='7' style={{ borderTop: "2px dashed black" }}>
            <Row>
              <Col md='6'>
                <Col>
                Hiporthermia b.d
                </Col>
                <Input
                  id="diagnosa3_si_check"
                  type="checkbox"
                  name="diagnosa3_si_check"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDiagnosa3SiCheckAll('1');
                    } else {
                      setDiagnosa3SiCheckAll('0');
                    }
                    handleCheckboxChange(e)
                  }}
                  defaultChecked={data && data.form?.Diagnosa3_Si_Check === "1"}
                  innerRef={register("diagnosa3_si_check") as any}
                />{' '}
                <Label>Pilih Semua</Label>
              </Col>
              <Col md='6'>
                <Col>
                  <Input
                    id="diagnosa3_si_1_check"
                    type="checkbox"
                    name="diagnosa3_si_1_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa3Si1Check('1');
                      } else {
                        setDiagnosa3Si1Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa3_Si_1_Check === "1"}
                    checked={  diagnosa3Si1Check === '1'}
                    innerRef={register("diagnosa3_si_1_check") as any}
                  />{' '}
                  <Label>Terpapar lingkungan dingin</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa3_si_2_check"
                    type="checkbox"
                    name="diagnosa3_si_2_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa3Si2Check('1');
                      } else {
                        setDiagnosa3Si2Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa3_Si_2_Check === "1"}
                    checked={  diagnosa3Si2Check === '1'}
                    innerRef={register("diagnosa3_si_2_check") as any}
                  />{' '}
                  <Label>Malnutrisi</Label>
                </Col>
              </Col>
            </Row>
          </Col>
          <Col md='2'></Col>
        </Row>

        <ImmuneSystemResult
          data={data}
          {...{ register, activeTab, errors, processing, setValue }}
        />

        <ImmuneSystemPlan
          data={data}
          {...{ register, activeTab, errors, processing, setValue }}
        />

      </FormGroup>
    </TabPane>
  </TabContent>)
}

export default ImmuneSystemMain;
