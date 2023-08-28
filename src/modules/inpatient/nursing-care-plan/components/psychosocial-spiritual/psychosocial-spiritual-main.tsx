import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import PsychosocialSpiritualResult from "./result-psychosocial-spiritual";
import PsychosocialSpiritualPlan from "./plan-psychosocial-spiritual";

const PsychosocialSpiritualMain = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const { data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [diagnosa1PsiCheckAll, setDiagnosa1PsiCheckAll] = useState<any>();
  const [diagnosa1Psi1Check, setDiagnosa1Psi1Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Psi_1_Check}`);
  const [diagnosa1Psi2Check, setDiagnosa1Psi2Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Psi_2_Check}`);
  const [diagnosa1Psi3Check, setDiagnosa1Psi3Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Psi_3_Check}`);
  const [diagnosa1Psi4Check, setDiagnosa1Psi4Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Psi_4_Check}`);
  const [diagnosa1Psi5Check, setDiagnosa1Psi5Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Psi_5_Check}`);

  const [diagnosa2PsiCheckAll, setDiagnosa2PsiCheckAll] = useState<any>();
  const [diagnosa2Psi1Check, setDiagnosa2Psi1Check] = useState<string | undefined>(`${data?.form?.Diagnosa2_Psi_1_Check}`);
  const [diagnosa2Psi2Check, setDiagnosa2Psi2Check] = useState<string | undefined>(`${data?.form?.Diagnosa2_Psi_2_Check}`);
  const [diagnosa2Psi3Check, setDiagnosa2Psi3Check] = useState<string | undefined>(`${data?.form?.Diagnosa2_Psi_3_Check}`);

  const [diagnosa3PsiCheckAll, setDiagnosa3PsiCheckAll] = useState<any>();
  const [diagnosa3Psi1Check, setDiagnosa3Psi1Check] = useState<string | undefined>(`${data?.form?.Diagnosa3_Psi_1_Check}`);
  const [diagnosa3Psi2Check, setDiagnosa3Psi2Check] = useState<string | undefined>(`${data?.form?.Diagnosa3_Psi_2_Check}`);
  const [diagnosa3Psi3Check, setDiagnosa3Psi3Check] = useState<string | undefined>(`${data?.form?.Diagnosa3_Psi_3_Check}`);

  useEffect(() => {
    if (diagnosa1PsiCheckAll === '1') {
      setValue('diagnosa1_psi_1_check', '1');
      setValue('diagnosa1_psi_2_check', '1');
      setValue('diagnosa1_psi_3_check', '1');
      setValue('diagnosa1_psi_4_check', '1');
      setValue('diagnosa1_psi_5_check', '1');
      setDiagnosa1Psi1Check('1');
      setDiagnosa1Psi2Check('1');
      setDiagnosa1Psi3Check('1');
      setDiagnosa1Psi4Check('1');
      setDiagnosa1Psi5Check('1');
    } else if (diagnosa1PsiCheckAll === '0') {
      setValue('diagnosa1_psi_1_check', undefined);
      setValue('diagnosa1_psi_2_check', undefined);
      setValue('diagnosa1_psi_3_check', undefined);
      setValue('diagnosa1_psi_4_check', undefined);
      setValue('diagnosa1_psi_5_check', undefined);
      setDiagnosa1Psi1Check(undefined);
      setDiagnosa1Psi2Check(undefined);
      setDiagnosa1Psi3Check(undefined);
      setDiagnosa1Psi4Check(undefined);
      setDiagnosa1Psi5Check(undefined);
    }
  }, [diagnosa1PsiCheckAll]);

  useEffect(() => {
    if (diagnosa2PsiCheckAll === '1') {
      setValue('diagnosa2_psi_1_check', '1');
      setValue('diagnosa2_psi_2_check', '1');
      setValue('diagnosa2_psi_3_check', '1');
      setDiagnosa2Psi1Check('1');
      setDiagnosa2Psi2Check('1');
      setDiagnosa2Psi3Check('1');
    } else if (diagnosa2PsiCheckAll === '0') {
      setValue('diagnosa2_psi_1_check', undefined);
      setValue('diagnosa2_psi_2_check', undefined);
      setValue('diagnosa2_psi_3_check', undefined);
      setDiagnosa2Psi1Check(undefined);
      setDiagnosa2Psi2Check(undefined);
      setDiagnosa2Psi3Check(undefined);
    }
  }, [diagnosa2PsiCheckAll]);

  useEffect(() => {
    if (diagnosa3PsiCheckAll === '1') {
      setValue('diagnosa3_psi_1_check', '1');
      setValue('diagnosa3_psi_2_check', '1');
      setValue('diagnosa3_psi_3_check', '1');
      setDiagnosa3Psi1Check('1');
      setDiagnosa3Psi2Check('1');
      setDiagnosa3Psi3Check('1');
    } else if (diagnosa3PsiCheckAll === '0') {
      setValue('diagnosa3_psi_1_check', undefined);
      setValue('diagnosa3_psi_2_check', undefined);
      setValue('diagnosa3_psi_3_check', undefined);
      setDiagnosa3Psi1Check(undefined);
      setDiagnosa3Psi2Check(undefined);
      setDiagnosa3Psi3Check(undefined);
    }
  }, [diagnosa3PsiCheckAll]);

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }


  return (<TabContent {...{ activeTab }}>
    <TabPane tabId='6'>
      <FormGroup className="form-group" row>

        <Row>
          <Col md='3'>Psikososial dan spritual</Col>
          <Col md='5'>
            <Input
              id="tanggal_psi"
              type="date"
              name="tanggal_psi"
              innerRef={register()}
              invalid={errors.tanggal_psi && true}
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
                Cemas b.d.
                </Col>
                <Input
                  id="diagnosa1_psi_check"
                  type="checkbox"
                  name="diagnosa1_psi_check"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDiagnosa1PsiCheckAll('1');
                    } else {
                      setDiagnosa1PsiCheckAll('0');
                    }
                    handleCheckboxChange(e)
                  }}
                  defaultChecked={data && data.form?.Diagnosa1_Psi_Check === "1"}
                  innerRef={register("diagnosa1_psi_check") as any}
                />{' '}
                <Label>Pilih Semua</Label>
              </Col>
              <Col md='6'>
                <Col>
                  <Input
                    id="diagnosa1_psi_1_check"
                    type="checkbox"
                    name="diagnosa1_psi_1_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1Psi1Check('1');
                      } else {
                        setDiagnosa1Psi1Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_Psi_1_Check === "1"}
                    checked={diagnosa1Psi1Check === '1'}
                    innerRef={register("diagnosa1_psi_1_check") as any}
                  />{' '}
                  <Label>Perubahan status kesehatan</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa1_psi_2_check"
                    type="checkbox"
                    name="diagnosa1_psi_2_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1Psi2Check('1');
                      } else {
                        setDiagnosa1Psi2Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_Psi_2_Check === "1"}
                    checked={ diagnosa1Psi2Check === '1'}
                    innerRef={register("diagnosa1_psi_2_check") as any}
                  />{' '}
                  <Label>Stress</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa1_psi_3_check"
                    type="checkbox"
                    name="diagnosa1_psi_3_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1Psi3Check('1');
                      } else {
                        setDiagnosa1Psi3Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_Psi_3_Check === "1"}
                    checked={ diagnosa1Psi3Check === '1'}
                    innerRef={register("diagnosa1_psi_3_check") as any}
                  />{' '}
                  <Label>Situasional</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa1_psi_4_check"
                    type="checkbox"
                    name="diagnosa1_psi_4_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1Psi4Check('1');
                      } else {
                        setDiagnosa1Psi4Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_Psi_4_Check === "1"}
                    checked={ diagnosa1Psi4Check === '1'}
                    innerRef={register("diagnosa1_psi_4_check") as any}
                  />{' '}
                  <Label>kemungkinan kehilangan penglihatan</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa1_psi_5_check"
                    type="checkbox"
                    name="diagnosa1_psi_5_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa1Psi5Check('1');
                      } else {
                        setDiagnosa1Psi5Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa1_Psi_5_Check === "1"}
                    checked={ diagnosa1Psi5Check === '1'}
                    innerRef={register("diagnosa1_psi_5_check") as any}
                  />{' '}
                  <Label>Perubahan pada kelopak mata</Label>
                </Col>

              </Col>
            </Row>

            <Row style={{ borderTop: "2px dashed black" }}>
              <Col md='6'>
                <Col>
                Coping tidak efektif b.d.
                </Col>
                <Input
                  id="diagnosa2_psi_check"
                  type="checkbox"
                  name="diagnosa2_psi_check"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDiagnosa2PsiCheckAll('1');
                    } else {
                      setDiagnosa2PsiCheckAll('0');
                    }
                    handleCheckboxChange(e)
                  }}
                  defaultChecked={data && data.form?.Diagnosa2_Psi_Check === "1"}
                  innerRef={register("diagnosa2_psi_check") as any}
                />{' '}
                <Label>Pilih Semua</Label>
              </Col>
              <Col md='6'>
                <Col>
                  <Input
                    id="diagnosa2_psi_1_check"
                    type="checkbox"
                    name="diagnosa2_psi_1_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa2Psi1Check('1');
                      } else {
                        setDiagnosa2Psi1Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa2_Psi_1_Check === "1"}
                    checked={diagnosa2Psi1Check === '1'}
                    innerRef={register("diagnosa2_psi_1_check") as any}
                  />{' '}
                  <Label>Situasional</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa2_psi_2_check"
                    type="checkbox"
                    name="diagnosa2_psi_2_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa2Psi2Check('1');
                      } else {
                        setDiagnosa2Psi2Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa2_Psi_2_Check === "1"}
                    checked={diagnosa2Psi2Check === '1'}
                    innerRef={register("diagnosa2_psi_2_check") as any}
                  />{' '}
                  <Label>Support sosial tidak adekuat</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa2_psi_3_check"
                    type="checkbox"
                    name="diagnosa2_psi_3_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa2Psi3Check('1');
                      } else {
                        setDiagnosa2Psi3Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa2_Psi_3_Check === "1"}
                    checked={diagnosa2Psi3Check === '1'}
                    innerRef={register("diagnosa2_psi_3_check") as any}
                  />{' '}
                  <Label>Sumber-sumber yang tersedia tidak adekuat</Label>
                </Col>
              </Col>
            </Row>

            <Row style={{ borderTop: "2px dashed black" }}>
              <Col md='6'>
                <Col>
                Harga diri rendah b.d.
                </Col>
                <Input
                  id="diagnosa3_psi_check"
                  type="checkbox"
                  name="diagnosa3_psi_check"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDiagnosa3PsiCheckAll('1');
                    } else {
                      setDiagnosa3PsiCheckAll('0');
                    }
                    handleCheckboxChange(e)
                  }}
                  defaultChecked={data && data.form?.Diagnosa3_Psi_Check === "1"}
                  innerRef={register("diagnosa3_psi_check") as any}
                />{' '}
                <Label>Pilih Semua</Label>
              </Col>
              <Col md='6'>
                <Col>
                  <Input
                    id="diagnosa3_psi_1_check"
                    type="checkbox"
                    name="diagnosa3_psi_1_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa3Psi1Check('1');
                      } else {
                        setDiagnosa3Psi1Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa3_Psi_1_Check === "1"}
                    checked={diagnosa3Psi1Check === '1'}
                    innerRef={register("diagnosa3_psi_1_check") as any}
                  />{' '}
                  <Label>Perubahan peran</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa3_psi_2_check"
                    type="checkbox"
                    name="diagnosa3_psi_2_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa3Psi2Check('1');
                      } else {
                        setDiagnosa3Psi2Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa3_Psi_2_Check === "1"}
                    checked={diagnosa3Psi2Check === '1'}
                    innerRef={register("diagnosa3_psi_2_check") as any}
                  />{' '}
                  <Label>Perubahan status kesehatan</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosa3_psi_3_check"
                    type="checkbox"
                    name="diagnosa3_psi_3_check"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiagnosa3Psi3Check('1');
                      } else {
                        setDiagnosa3Psi3Check(undefined);
                      }
                      handleCheckboxChange(e)
                    }}
                    defaultChecked={data && data?.form?.Diagnosa3_Psi_3_Check === "1"}
                    checked={diagnosa3Psi3Check === '1'}
                    innerRef={register("diagnosa3_psi_3_check") as any}
                  />{' '}
                  <Label>Perubahan gambaran diri</Label>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>

        <PsychosocialSpiritualResult
          data={data}
          {...{ register, activeTab, errors, processing, setValue }}
        />

        <PsychosocialSpiritualPlan
          data={data}
          {...{ register, activeTab, errors, processing, setValue }}
        />

      </FormGroup>
    </TabPane>
  </TabContent>)
}

export default PsychosocialSpiritualMain;
