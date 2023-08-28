import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import ImmuneSystem2Result from "./result-immune-system2";
import ImmuneSystem2Plan from "./plan-immune-system2";

const ImmuneSystem2Main = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const { data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [diagnosa1Si1_CheckAll, setDiagnosa1Si1_CheckAll] = useState<any>();
  const [diagnosa1Si1_1Check, setDiagnosa1Si1_1Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Si1_1_Check}`);
  const [diagnosa1Si1_2Check, setDiagnosa1Si1_2Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Si1_2_Check}`);
  const [diagnosa1Si1_3Check, setDiagnosa1Si1_3Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Si1_3_Check}`);
  const [diagnosa1Si1_4Check, setDiagnosa1Si1_4Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Si1_4_Check}`);
  const [diagnosa1Si1_5Check, setDiagnosa1Si1_5Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Si1_5_Check}`);
  

  useEffect(() => {
    if (diagnosa1Si1_CheckAll === '1') {
      setValue('diagnosa1_si1_1_check', '1');
      setValue('diagnosa1_si1_2_check', '1');
      setValue('diagnosa1_si1_3_check', '1');
      setValue('diagnosa1_si1_4_check', '1');
      setValue('diagnosa1_si1_5_check', '1');
      setDiagnosa1Si1_1Check('1');
      setDiagnosa1Si1_2Check('1');
      setDiagnosa1Si1_3Check('1');
      setDiagnosa1Si1_4Check('1');
      setDiagnosa1Si1_5Check('1');
    } else if (diagnosa1Si1_CheckAll === '0') {
      setValue('diagnosa1_si1_1_check', undefined);
      setValue('diagnosa1_si1_2_check', undefined);
      setValue('diagnosa1_si1_3_check', undefined);
      setValue('diagnosa1_si1_4_check', undefined);
      setValue('diagnosa1_si1_4_check', undefined);
      setDiagnosa1Si1_1Check(undefined);
      setDiagnosa1Si1_2Check(undefined);
      setDiagnosa1Si1_3Check(undefined);
      setDiagnosa1Si1_4Check(undefined);
      setDiagnosa1Si1_5Check(undefined);
    }
  }, [diagnosa1Si1_CheckAll]);
 

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }


  return (<TabContent {...{ activeTab }}>
    <TabPane tabId='8'>
      <FormGroup className="form-group" row>

        <Row>
          <Col md='3'>Tanggal Nutrisi Cairan dan eliminasi</Col>
          <Col md='5'>
            <Input
              id="tanggal_si1"
              type="date"
              name="tanggal_si1"
              innerRef={register()}
              invalid={errors.tanggal_si1 && true}
            />
          </Col>
          <Col md='4'></Col>
        </Row>

        <Row>
          <Col md='3'>2. Diagnosa Keperawatan</Col>
          <Col md='9' style={{ borderTop: "2px dashed black" }}>
            <Row style={{ borderTop: "2px dashed black" }}>
              <Col md='6'>
                <Col>
                Infeksi b.d.
                </Col>
                <Input
                  id="diagnosa1_si1_check"
                  type="checkbox"
                  name="diagnosa1_si1_check"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDiagnosa1Si1_CheckAll('1');
                    } else {
                      setDiagnosa1Si1_CheckAll('0');
                    }
                    handleCheckboxChange(e)
                  }}
                  defaultChecked={data && data.form?.Diagnosa1_Si1_Check === "1"}
                  innerRef={register("diagnosa1_si1_check") as any}
                />{' '}
                <Label>Pilih Semua</Label>
              </Col>
              <Col md='6'>
                <Col>
                  <Input
                    id="diagnosa1_si1_1_check"
                    type="checkbox"
                    name="diagnosa1_si1_1_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1Si1_1Check('1');
                      } else {
                        setDiagnosa1Si1_1Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_Si1_1_Check === "1"}
                    checked={diagnosa1Si1_1Check === '1'}
                    innerRef={register("diagnosa1_si1_1_check") as any}
                  />{' '}
                  <Label>Ulkus Kornea</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa1_si1_2_check"
                    type="checkbox"
                    name="diagnosa1_si1_2_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1Si1_2Check('1');
                      } else {
                        setDiagnosa1Si1_2Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_Si1_2_Check === "1"}
                    checked={ diagnosa1Si1_2Check === '1'}
                    innerRef={register("diagnosa1_si1_2_check") as any}
                  />{' '}
                  <Label>Adanya luka</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa1_si1_3_check"
                    type="checkbox"
                    name="diagnosa1_si1_3_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1Si1_3Check('1');
                      } else {
                        setDiagnosa1Si1_3Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_Si1_3_Check === "1"}
                    checked={ diagnosa1Si1_3Check === '1'}
                    innerRef={register("diagnosa1_si1_3_check") as any}
                  />{' '}
                  <Label>Konjungtivitis</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa1_si1_4_check"
                    type="checkbox"
                    name="diagnosa1_si1_4_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1Si1_4Check('1');
                      } else {
                        setDiagnosa1Si1_4Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_Si1_4_Check === "1"}
                    checked={ diagnosa1Si1_4Check === '1'}
                    innerRef={register("diagnosa1_si1_4_check") as any}
                  />{' '}
                  <Label>Keratitis</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa1_si1_5_check"
                    type="checkbox"
                    name="diagnosa1_si1_5_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1Si1_5Check('1');
                      } else {
                        setDiagnosa1Si1_5Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_Si1_5_Check === "1"}
                    checked={ diagnosa1Si1_5Check === '1'}
                    innerRef={register("diagnosa1_si1_5_check") as any}
                  />{' '}
                  <Label>Optik Neuritis</Label>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>

        <ImmuneSystem2Result
          data={data}
          {...{ register, activeTab, errors, processing, setValue }}
        />

        <ImmuneSystem2Plan
          data={data}
          {...{ register, activeTab, errors, processing, setValue }}
        />

      </FormGroup>
    </TabPane>
  </TabContent>)
}

export default ImmuneSystem2Main;
