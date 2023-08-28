import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import FluidNutritionResult from "./result-fluid-nutrition";
import FluidNutritionPlan from "./plan-fluid-nutrition";

const FluidNutritionMain = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const { data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [diagnosa1NcCheckAll, setDiagnosa1NcCheckAll] = useState<any>();
  const [diagnosa1Nc1Check, setDiagnosa1Nc1Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Nc_1_Check}`);
  const [diagnosa1Nc2Check, setDiagnosa1Nc2Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Nc_2_Check}`);
  const [diagnosa1Nc3Check, setDiagnosa1Nc3Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Nc_3_Check}`);

  const [diagnosa2NcCheckAll, setDiagnosa2NcCheckAll] = useState<any>();
  const [diagnosa2Nc1Check, setDiagnosa2Nc1Check] = useState<string | undefined>(`${data?.form?.Diagnosa2_Nc_1_Check}`);

  const [diagnosa3NcCheckAll, setDiagnosa3NcCheckAll] = useState<any>();
  const [diagnosa3Nc1Check, setDiagnosa3Nc1Check] = useState<string | undefined>(`${data?.form?.Diagnosa3_Nc_1_Check}`);
  const [diagnosa3Nc2Check, setDiagnosa3Nc2Check] = useState<string | undefined>(`${data?.form?.Diagnosa3_Nc_2_Check}`);
  const [diagnosa3Nc3Check, setDiagnosa3Nc3Check] = useState<string | undefined>(`${data?.form?.Diagnosa3_Nc_3_Check}`);
  const [diagnosa3Nc4Check, setDiagnosa3Nc4Check] = useState<string | undefined>(`${data?.form?.Diagnosa3_Nc_4_Check}`);
  const [diagnosa3Nc5Check, setDiagnosa3Nc5Check] = useState<string | undefined>(`${data?.form?.Diagnosa3_Nc_5_Check}`);

  const [diagnosa4NcCheckAll, setDiagnosa4NcCheckAll] = useState<any>();
  const [diagnosa4Nc1Check, setDiagnosa4Nc1Check] = useState<string | undefined>(`${data?.form?.Diagnosa4_Nc_1_Check}`);

  const [diagnosa5NcCheckAll, setDiagnosa5NcCheckAll] = useState<any>();
  const [diagnosa5Nc1Check, setDiagnosa5Nc1Check] = useState<string | undefined>(`${data?.form?.Diagnosa5_Nc_1_Check}`);
  const [diagnosa5Nc2Check, setDiagnosa5Nc2Check] = useState<string | undefined>(`${data?.form?.Diagnosa5_Nc_2_Check}`);

  useEffect(() => {
    if (diagnosa1NcCheckAll === '1') {
      setValue('diagnosa1_nc_1_check', '1');
      setValue('diagnosa1_nc_2_check', '1');
      setValue('diagnosa1_nc_3_check', '1');
      setDiagnosa1Nc1Check('1');
      setDiagnosa1Nc2Check('1');
      setDiagnosa1Nc3Check('1');
    } else if (diagnosa1NcCheckAll === '0') {
      setValue('diagnosa1_nc_1_check', undefined);
      setValue('diagnosa1_nc_2_check', undefined);
      setValue('diagnosa1_nc_3_check', undefined);
      setDiagnosa1Nc1Check(undefined);
      setDiagnosa1Nc2Check(undefined);
      setDiagnosa1Nc3Check(undefined);
    }
  }, [diagnosa1NcCheckAll]);

  useEffect(() => {
    if (diagnosa2NcCheckAll === '1') {
      setValue('diagnosa2_nc_1_check', '1');
      setDiagnosa2Nc1Check('1');
    } else if (diagnosa2NcCheckAll === '0') {
      setValue('diagnosa2_nc_1_check', undefined);
      setDiagnosa2Nc1Check(undefined);
    }
  }, [diagnosa2NcCheckAll]);

  useEffect(() => {
    if (diagnosa3NcCheckAll === '1') {
      setValue('diagnosa3_nc_1_check', '1');
      setValue('diagnosa3_nc_2_check', '1');
      setValue('diagnosa3_nc_3_check', '1');
      setValue('diagnosa3_nc_4_check', '1');
      setValue('diagnosa3_nc_5_check', '1');
      setDiagnosa3Nc1Check('1');
      setDiagnosa3Nc2Check('1');
      setDiagnosa3Nc3Check('1');
      setDiagnosa3Nc4Check('1');
      setDiagnosa3Nc5Check('1');
    } else if (diagnosa3NcCheckAll === '0') {
      setValue('diagnosa3_nc_1_check', undefined);
      setValue('diagnosa3_nc_2_check', undefined);
      setValue('diagnosa3_nc_3_check', undefined);
      setValue('diagnosa3_nc_4_check', undefined);
      setValue('diagnosa3_nc_5_check', undefined);
      setDiagnosa3Nc1Check(undefined);
      setDiagnosa3Nc2Check(undefined);
      setDiagnosa3Nc3Check(undefined);
      setDiagnosa3Nc4Check(undefined);
      setDiagnosa3Nc5Check(undefined);
    }
  }, [diagnosa3NcCheckAll]);

  useEffect(() => {
    if (diagnosa4NcCheckAll === '1') {
      setValue('diagnosa4_nc_1_check', '1');
      setDiagnosa4Nc1Check('1');
    } else if (diagnosa4NcCheckAll === '0') {
      setValue('diagnosa4_nc_1_check', undefined);
      setDiagnosa4Nc1Check(undefined);
    }
  }, [diagnosa4NcCheckAll]);

  useEffect(() => {
    if (diagnosa5NcCheckAll === '1') {
      setValue('diagnosa5_nc_1_check', '1');
      setValue('diagnosa5_nc_2_check', '1');
      setValue('diagnosa5_nc_3_check', '1');
      setDiagnosa5Nc1Check('1');
      setDiagnosa5Nc2Check('1');
    } else if (diagnosa5NcCheckAll === '0') {
      setValue('diagnosa5_nc_1_check', undefined);
      setValue('diagnosa5_nc_2_check', undefined);
      setDiagnosa5Nc1Check(undefined);
      setDiagnosa5Nc2Check(undefined);
    }
  }, [diagnosa5NcCheckAll]);


  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }


  return (<TabContent {...{ activeTab }}>
    <TabPane tabId='3'>
      <FormGroup className="form-group" row>

        <Row>
          <Col md='3'>Tanggal Nutrisi Cairan dan eliminasi</Col>
          <Col md='5'>
            <Input
              id="tanggal_nc"
              type="date"
              name="tanggal_nc"
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
                Kurang Volume Cairan Dan Elektrolit B.D.
                </Col>
                <Input
                  id="diagnosa1_nc_check"
                  type="checkbox"
                  name="diagnosa1_nc_check"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDiagnosa1NcCheckAll('1');
                    } else {
                      setDiagnosa1NcCheckAll('0');
                    }
                    handleCheckboxChange(e)
                  }}
                  defaultChecked={data && data.form?.Diagnosa1_Nc_Check === "1"}
                  innerRef={register("diagnosa1_nc_check") as any}
                />{' '}
                <Label>Pilih Semua</Label>
              </Col>
              <Col md='6'>
                <Col>
                  <Input
                    id="diagnosa1_nc_1_check"
                    type="checkbox"
                    name="diagnosa1_nc_1_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1Nc1Check('1');
                      } else {
                        setDiagnosa1Nc1Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_Nc_1_Check === "1"}
                    checked={diagnosa1Nc1Check === '1'}
                    innerRef={register("diagnosa1_nc_1_check") as any}
                  />{' '}
                  <Label>Kehilangan yang berlebih</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa1_nc_2_check"
                    type="checkbox"
                    name="diagnosa1_nc_2_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1Nc2Check('1');
                      } else {
                        setDiagnosa1Nc2Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_Nc_2_Check === "1"}
                    checked={ diagnosa1Nc2Check === '1'}
                    innerRef={register("diagnosa1_nc_2_check") as any}
                  />{' '}
                  <Label>Intake kurang</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa1_nc_3_check"
                    type="checkbox"
                    name="diagnosa1_nc_3_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1Nc3Check('1');
                      } else {
                        setDiagnosa1Nc3Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_Nc_3_Check === "1"}
                    checked={ diagnosa1Nc3Check === '1'}
                    innerRef={register("diagnosa1_nc_3_check") as any}
                  />{' '}
                  <Label>Kegagalan mekanisme pengaturan</Label>
                </Col>
              </Col>
            </Row>

            <Row style={{ borderTop: "2px dashed black" }}>
              <Col md='6'>
                <Col>
                Gangguan thermoregulasi  b.d.
                </Col>
                <Input
                  id="diagnosa2_nc_check"
                  type="checkbox"
                  name="diagnosa2_nc_check"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDiagnosa2NcCheckAll('1');
                    } else {
                      setDiagnosa2NcCheckAll('0');
                    }
                    handleCheckboxChange(e)
                  }}
                  defaultChecked={data && data.form?.Diagnosa2_Nc_Check === "1"}
                  innerRef={register("diagnosa2_nc_check") as any}
                />{' '}
                <Label>Pilih Semua</Label>
              </Col>
              <Col md='6'>
                <Col>
                  <Input
                    id="diagnosa2_nc_1_check"
                    type="checkbox"
                    name="diagnosa2_nc_1_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa2Nc1Check('1');
                      } else {
                        setDiagnosa2Nc1Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa2_Nc_1_Check === "1"}
                    checked={diagnosa2Nc1Check === '1'}
                    innerRef={register("diagnosa2_nc_1_check") as any}
                  />{' '}
                  <Label>Dehidrasi</Label>
                </Col>
              </Col>
            </Row>

            <Row style={{ borderTop: "2px dashed black" }}>
              <Col md='6'>
                <Col>
                Perubahan nutrisi kurang b.d.
                </Col>
                <Input
                  id="diagnosa3_nc_check"
                  type="checkbox"
                  name="diagnosa3_nc_check"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDiagnosa3NcCheckAll('1');
                    } else {
                      setDiagnosa3NcCheckAll('0');
                    }
                    handleCheckboxChange(e)
                  }}
                  defaultChecked={data && data.form?.Diagnosa3_Nc_Check === "1"}
                  innerRef={register("diagnosa3_nc_check") as any}
                />{' '}
                <Label>Pilih Semua</Label>
              </Col>
              <Col md='6'>
                <Col>
                  <Input
                    id="diagnosa3_nc_1_check"
                    type="checkbox"
                    name="diagnosa3_nc_1_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa3Nc1Check('1');
                      } else {
                        setDiagnosa3Nc1Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa3_Nc_1_Check === "1"}
                    checked={diagnosa3Nc1Check === '1'}
                    innerRef={register("diagnosa3_nc_1_check") as any}
                  />{' '}
                  <Label>Defisiensi insulin</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa3_nc_2_check"
                    type="checkbox"
                    name="diagnosa3_nc_2_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa3Nc2Check('1');
                      } else {
                        setDiagnosa3Nc2Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa3_Nc_2_Check === "1"}
                    checked={ diagnosa3Nc2Check === '1'}
                    innerRef={register("diagnosa3_nc_2_check") as any}
                  />{' '}
                  <Label>Status hipermetabolik</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa3_nc_3_check"
                    type="checkbox"
                    name="diagnosa3_nc_3_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa3Nc3Check('1');
                      } else {
                        setDiagnosa3Nc3Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa3_Nc_3_Check === "1"}
                    checked={ diagnosa3Nc3Check === '1'}
                    innerRef={register("diagnosa3_nc_3_check") as any}
                  />{' '}
                  <Label>Intake kurang</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa3_nc_4_check"
                    type="checkbox"
                    name="diagnosa3_nc_4_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa3Nc4Check('1');
                      } else {
                        setDiagnosa3Nc4Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa3_Nc_4_Check === "1"}
                    checked={ diagnosa3Nc4Check === '1'}
                    innerRef={register("diagnosa3_nc_4_check") as any}
                  />{' '}
                  <Label>Pengeluaran berlebih</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa3_nc_5_check"
                    type="checkbox"
                    name="diagnosa3_nc_5_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa3Nc5Check('1');
                      } else {
                        setDiagnosa3Nc5Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa3_Nc_5_Check === "1"}
                    checked={ diagnosa3Nc5Check === '1'}
                    innerRef={register("diagnosa3_nc_5_check") as any}
                  />{' '}
                  <Label>Lain-lain :</Label>

                  <Input
                    style={{ marginTop: '10px' }}
                    className="mb-1"
                    type="text"
                    id="diagnosa3_nc_5_text"
                    name="diagnosa3_nc_5_text"
                    innerRef={register({ required: false })}
                    invalid={errors.diagnosa3_nc_5_text && true}
                  />
                </Col>
              </Col>
            </Row>
            
             <Row style={{ borderTop: "2px dashed black" }}>
              <Col md='6'>
                <Col>
                Perubahan nutrisi lebih b.d.
                </Col>
                <Input
                  id="diagnosa4_nc_check"
                  type="checkbox"
                  name="diagnosa4_nc_check"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDiagnosa4NcCheckAll('1');
                    } else {
                      setDiagnosa4NcCheckAll('0');
                    }
                    handleCheckboxChange(e)
                  }}
                  defaultChecked={data && data.form?.Diagnosa4_Nc_Check === "1"}
                  innerRef={register("diagnosa4_nc_check") as any}
                />{' '}
                <Label>Pilih Semua</Label>
              </Col>
              <Col md='6'>
                <Col>
                  <Input
                    id="diagnosa4_nc_1_check"
                    type="checkbox"
                    name="diagnosa4_nc_1_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa4Nc1Check('1');
                      } else {
                        setDiagnosa4Nc1Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa4_Nc_1_Check === "1"}
                    checked={diagnosa4Nc1Check === '1'}
                    innerRef={register("diagnosa4_nc_1_check") as any}
                  />{' '}
                  <Label>Gangguan metabolisme</Label>
                </Col>
              </Col>
            </Row>
            
            <Row style={{ borderTop: "2px dashed black" }}>
              <Col md='6'>
                <Col>
                Perubahan eliminasi inkontinentia uri/alfi b.d.
                </Col>
                <Input
                  id="diagnosa5_nc_check"
                  type="checkbox"
                  name="diagnosa5_nc_check"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDiagnosa5NcCheckAll('1');
                    } else {
                      setDiagnosa5NcCheckAll('0');
                    }
                    handleCheckboxChange(e)
                  }}
                  defaultChecked={data && data.form?.Diagnosa5_Nc_Check === "1"}
                  innerRef={register("diagnosa5_nc_check") as any}
                />{' '}
                <Label>Pilih Semua</Label>
              </Col>
              <Col md='6'>
                <Col>
                  <Input
                    id="diagnosa5_nc_1_check"
                    type="checkbox"
                    name="diagnosa5_nc_1_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa5Nc1Check('1');
                      } else {
                        setDiagnosa5Nc1Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa5_Nc_1_Check === "1"}
                    checked={diagnosa5Nc1Check === '1'}
                    innerRef={register("diagnosa5_nc_1_check") as any}
                  />{' '}
                  <Label>Kerusakan otot yang dipersyarati</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa5_nc_2_check"
                    type="checkbox"
                    name="diagnosa5_nc_2_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa5Nc2Check('1');
                      } else {
                        setDiagnosa5Nc2Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa5_Nc_2_Check === "1"}
                    checked={diagnosa5Nc2Check === '1'}
                    innerRef={register("diagnosa5_nc_2_check") as any}
                  />{' '}
                  <Label>Infeksi saluran kemih</Label>
                </Col>
              </Col>
            </Row>

          </Col>
        </Row>

        <FluidNutritionResult
          data={data}
          {...{ register, activeTab, errors, processing, setValue }}
        />

        <FluidNutritionPlan
          data={data}
          {...{ register, activeTab, errors, processing, setValue }}
        />


      </FormGroup>
    </TabPane>
  </TabContent>)
}

export default FluidNutritionMain;
