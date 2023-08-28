import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import ActivityCleanResult from "./result-activity-clean";
import ActivityCleanPlan from "./plan-activity-clean";

const ActivityCleanMain = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const { data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [diagnosa1KdCheckAll, setDiagnosa1KdCheckAll] = useState<any>();
  const [diagnosa1Kd1Check, setDiagnosa1Kd1Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Kd_1_Check}`);
  const [diagnosa1Kd2Check, setDiagnosa1Kd2Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Kd_2_Check}`);
  const [diagnosa1Kd3Check, setDiagnosa1Kd3Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Kd_3_Check}`);
  const [diagnosa1Kd4Check, setDiagnosa1Kd4Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Kd_4_Check}`);


  useEffect(() => {
    if (diagnosa1KdCheckAll === '1') {
      setValue('diagnosa1_kd_1_check', '1');
      setValue('diagnosa1_kd_2_check', '1');
      setValue('diagnosa1_kd_3_check', '1');
      setValue('diagnosa1_kd_4_check', '1');
      setDiagnosa1Kd1Check('1');
      setDiagnosa1Kd2Check('1');
      setDiagnosa1Kd3Check('1');
      setDiagnosa1Kd4Check('1');
    } else if (diagnosa1KdCheckAll === '0') {
      setValue('diagnosa1_kd_1_check', undefined);
      setValue('diagnosa1_kd_2_check', undefined);
      setValue('diagnosa1_kd_3_check', undefined);
      setValue('diagnosa1_kd_4_check', undefined);
      setDiagnosa1Kd1Check(undefined);
      setDiagnosa1Kd2Check(undefined);
      setDiagnosa1Kd3Check(undefined);
      setDiagnosa1Kd4Check(undefined);
    }
  }, [diagnosa1KdCheckAll]);


  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }


  return (<TabContent {...{ activeTab }}>
    <TabPane tabId='4'>
      <FormGroup className="form-group" row>

        <Row>
          <Col md='3'>Tanggal Kebersihan diri dan aktivitas</Col>
          <Col md='5'>
            <Input
              id="tanggal_kd"
              type="date"
              name="tanggal_kd"
              innerRef={register()}
              invalid={errors.tanggal_si && true}
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
                Kurang perawatan diri b.d.
                </Col>
                <Input
                  id="diagnosa1_kd_check"
                  type="checkbox"
                  name="diagnosa1_kd_check"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDiagnosa1KdCheckAll('1');
                    } else {
                      setDiagnosa1KdCheckAll('0');
                    }
                    handleCheckboxChange(e)
                  }}
                  defaultChecked={data && data.form?.Diagnosa1_Kd_Check === "1"}
                  innerRef={register("diagnosa1_kd_check") as any}
                />{' '}
                <Label>Pilih Semua</Label>
              </Col>
              <Col md='6'>
                <Col>
                  <Input
                    id="diagnosa1_kd_1_check"
                    type="checkbox"
                    name="diagnosa1_kd_1_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1Kd1Check('1');
                      } else {
                        setDiagnosa1Kd1Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_Kd_1_Check === "1"}
                    checked={diagnosa1Kd1Check === '1'}
                    innerRef={register("diagnosa1_kd_1_check") as any}
                  />{' '}
                  <Label>Keterbatasan aktifitas</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa1_kd_2_check"
                    type="checkbox"
                    name="diagnosa1_kd_2_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1Kd2Check('1');
                      } else {
                        setDiagnosa1Kd2Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_Kd_2_Check === "1"}
                    checked={ diagnosa1Kd2Check === '1'}
                    innerRef={register("diagnosa1_kd_2_check") as any}
                  />{' '}
                  <Label>Kelemahan</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa1_kd_3_check"
                    type="checkbox"
                    name="diagnosa1_kd_3_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1Kd3Check('1');
                      } else {
                        setDiagnosa1Kd3Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_Kd_3_Check === "1"}
                    checked={ diagnosa1Kd3Check === '1'}
                    innerRef={register("diagnosa1_kd_3_check") as any}
                  />{' '}
                  <Label>Penurunan penglihatan</Label>
                </Col>

                <Col>
                  <Input
                    id="diagnosa1_kd_4_check"
                    type="checkbox"
                    name="diagnosa1_kd_4_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1Kd4Check('1');
                      } else {
                        setDiagnosa1Kd4Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_Kd_4_Check === "1"}
                    checked={ diagnosa1Kd4Check === '1'}
                    innerRef={register("diagnosa1_kd_4_check") as any}
                  />{' '}
                  <Label>Penurunan Kesadaran</Label>
                </Col>
              </Col>
            </Row>

            <Row style={{ borderTop: "2px dashed black" }}>
              <Col md='6'>
                <Input
                  id="diagnosa2_kd_check"
                  type="checkbox"
                  name="diagnosa2_kd_check"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    handleCheckboxChange(e)
                  }}
                  defaultChecked={data && data.form?.Diagnosa2_Kd_Check === "1"}
                  innerRef={register("diagnosa2_kd_check") as any}
                />{' '}
                <Label>Lain lain :</Label>
                <Col>
                  <Input
                    style={{ marginTop: '10px' }}
                    className="mb-1"
                    type="text"
                    id="diagnosa2_kd_text"
                    name="diagnosa2_kd_text"
                    innerRef={register({ required: false })}
                    invalid={errors.diagnosa2_kd_text && true}
                  />
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>

        <ActivityCleanResult
          data={data}
          {...{ register, activeTab, errors, processing, setValue }}
        />

        <ActivityCleanPlan
          data={data}
          {...{ register, activeTab, errors, processing, setValue }}
        />

      </FormGroup>
    </TabPane>
  </TabContent>)
}

export default ActivityCleanMain;
