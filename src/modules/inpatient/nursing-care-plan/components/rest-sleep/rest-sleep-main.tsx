import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import RestSleepResult from "./result-rest-sleep";
import RestSleepPlan from "./plan-rest-sleep";

const RestSleepMain = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const { data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [diagnosa1ItCheckAll, setDiagnosa1ItCheckAll] = useState<any>();
  const [diagnosa1It1Check, setDiagnosa1It1Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_It_1_Check}`);
  const [diagnosa1It2Check, setDiagnosa1It2Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_It_2_Check}`);


  const [diagnosa2ItCheckAll, setDiagnosa2ItCheckAll] = useState<any>();
  const [diagnosa2It1Check, setDiagnosa2It1Check] = useState<string | undefined>(`${data?.form?.Diagnosa2_It_1_Check}`);
  const [diagnosa2It2Check, setDiagnosa2It2Check] = useState<string | undefined>(`${data?.form?.Diagnosa2_It_2_Check}`);
  const [diagnosa2It3Check, setDiagnosa2It3Check] = useState<string | undefined>(`${data?.form?.Diagnosa2_It_3_Check}`);

  useEffect(() => {
    if (diagnosa1ItCheckAll === '1') {
      setValue('diagnosa1_it_1_check', '1');
      setValue('diagnosa1_it_2_check', '1');
      setDiagnosa1It1Check('1');
      setDiagnosa1It2Check('1');
    } else if (diagnosa1ItCheckAll === '0') {
      setValue('diagnosa1_it_1_check', undefined);
      setValue('diagnosa1_it_2_check', undefined);
      setDiagnosa1It1Check(undefined);
      setDiagnosa1It2Check(undefined);
    }
  }, [diagnosa1ItCheckAll]);

  useEffect(() => {
    if (diagnosa2ItCheckAll === '1') {
      setValue('diagnosa2_it_1_check', '1');
      setValue('diagnosa2_it_2_check', '1');
      setValue('diagnosa2_it_3_check', '1');
      setDiagnosa2It1Check('1');
      setDiagnosa2It2Check('1');
      setDiagnosa2It3Check('1');
    } else if (diagnosa2ItCheckAll === '0') {
      setValue('diagnosa2_it_1_check', undefined);
      setValue('diagnosa2_it_2_check', undefined);
      setValue('diagnosa2_it_3_check', undefined);
      setDiagnosa2It1Check(undefined);
      setDiagnosa2It2Check(undefined);
      setDiagnosa2It3Check(undefined);
    }
  }, [diagnosa2ItCheckAll]);


  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }


  return (<TabContent {...{ activeTab }}>
    <TabPane tabId='5'>
      <FormGroup className="form-group" row>

        <Row>
          <Col md='3'>Istirahat Dan Tidur</Col>
          <Col md='5'>
            <Input
              id="tanggal_it"
              type="date"
              name="tanggal_it"
              innerRef={register()}
              invalid={errors.tanggal_it && true}
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
                Gangguan pola tidur b.d.
                </Col>
                <Input
                  id="diagnosa1_it_check"
                  type="checkbox"
                  name="diagnosa1_it_check"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDiagnosa1ItCheckAll('1');
                    } else {
                      setDiagnosa1ItCheckAll('0');
                    }
                    handleCheckboxChange(e)
                  }}
                  defaultChecked={data && data.form?.Diagnosa1_It_Check === "1"}
                  innerRef={register("diagnosa1_it_check") as any}
                />{' '}
                <Label>Pilih Semua</Label>
              </Col>
              <Col md='6'>
                <Col>
                  <Input
                    id="diagnosa1_it_1_check"
                    type="checkbox"
                    name="diagnosa1_it_1_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1It1Check('1');
                      } else {
                        setDiagnosa1It1Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_It_1_Check === "1"}
                    checked={diagnosa1It1Check === '1'}
                    innerRef={register("diagnosa1_it_1_check") as any}
                  />{' '}
                  <Label>Perubahan lingkungan</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa1_it_2_check"
                    type="checkbox"
                    name="diagnosa1_it_2_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1It2Check('1');
                      } else {
                        setDiagnosa1It2Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_It_2_Check === "1"}
                    checked={ diagnosa1It2Check === '1'}
                    innerRef={register("diagnosa1_it_2_check") as any}
                  />{' '}
                  <Label>Faktor psikologis</Label>
                </Col>

              </Col>
            </Row>

            <Row style={{ borderTop: "2px dashed black" }}>
              <Col md='6'>
                <Col>
                Kurang tidur b.d.
                </Col>
                <Input
                  id="diagnosa2_it_check"
                  type="checkbox"
                  name="diagnosa2_it_check"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDiagnosa2ItCheckAll('1');
                    } else {
                      setDiagnosa2ItCheckAll('0');
                    }
                    handleCheckboxChange(e)
                  }}
                  defaultChecked={data && data.form?.Diagnosa2_It_Check === "1"}
                  innerRef={register("diagnosa2_it_check") as any}
                />{' '}
                <Label>Pilih Semua</Label>
              </Col>
              <Col md='6'>
                <Col>
                  <Input
                    id="diagnosa2_it_1_check"
                    type="checkbox"
                    name="diagnosa2_it_1_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa2It1Check('1');
                      } else {
                        setDiagnosa2It1Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa2_It_1_Check === "1"}
                    checked={diagnosa2It1Check === '1'}
                    innerRef={register("diagnosa2_it_1_check") as any}
                  />{' '}
                  <Label>Ketidaknyamanan fisik</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa2_it_2_check"
                    type="checkbox"
                    name="diagnosa2_it_2_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa2It2Check('1');
                      } else {
                        setDiagnosa2It2Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa2_It_2_Check === "1"}
                    checked={diagnosa2It2Check === '1'}
                    innerRef={register("diagnosa2_it_2_check") as any}
                  />{' '}
                  <Label>Penggunaan obat</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa2_it_3_check"
                    type="checkbox"
                    name="diagnosa2_it_3_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa2It3Check('1');
                      } else {
                        setDiagnosa2It3Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa2_It_3_Check === "1"}
                    checked={diagnosa2It3Check === '1'}
                    innerRef={register("diagnosa2_it_3_check") as any}
                  />{' '}
                  <Label>Perubahan lingkungan</Label>
                </Col>
              </Col>
            </Row>

            <Row style={{ borderTop: "2px dashed black" }}>
              <Col md='6'>
                <Col>
                Lain - lain
                </Col>
                <Input
                  id="diagnosa3_it_check"
                  type="checkbox"
                  name="diagnosa3_it_check"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    handleCheckboxChange(e)
                  }}
                  defaultChecked={data && data.form?.Diagnosa3_It_Check === "1"}
                  innerRef={register("diagnosa3_it_check") as any}
                />{' '}
                <Label>Pilih Semua</Label>
                <Input
                  style={{ marginTop: '10px' }}
                  className="mb-1"
                  type="text"
                  id="diagnosa3_it_text"
                  name="diagnosa3_it_text"
                  innerRef={register({ required: false })}
                  invalid={errors.diagnosa3_it_text && true}
                />
              </Col>
              <Col md='6'>
              </Col>
            </Row>

          </Col>
        </Row>

        <RestSleepResult
          data={data}
          {...{ register, activeTab, errors, processing, setValue }}
        />

        <RestSleepPlan
          data={data}
          {...{ register, activeTab, errors, processing, setValue }}
        />

      </FormGroup>
    </TabPane>
  </TabContent>)
}

export default RestSleepMain;
