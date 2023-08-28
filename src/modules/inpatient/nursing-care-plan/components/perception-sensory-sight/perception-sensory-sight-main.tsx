import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import PerceptionSensorySightResult from "./result-perception-sensory-sight";
import PerceptionSensorySightPlan from "./plan-perception-sensory-sight";

const PerceptionSensorySightMain = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const { data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [diagnosa1Ps1_CheckAll, setDiagnosa1Ps1_CheckAll] = useState<any>();
  const [diagnosa1Ps1_1Check, setDiagnosa1Ps1_1Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Ps1_1_Check}`);
  const [diagnosa1Ps1_2Check, setDiagnosa1Ps1_2Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Ps1_2_Check}`);
  const [diagnosa1Ps1_3Check, setDiagnosa1Ps1_3Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Ps1_3_Check}`);
  const [diagnosa1Ps1_4Check, setDiagnosa1Ps1_4Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Ps1_4_Check}`);
  const [diagnosa1Ps1_5Check, setDiagnosa1Ps1_5Check] = useState<string | undefined>(`${data?.form?.Diagnosa1_Ps1_5_Check}`);
  

  useEffect(() => {
    if (diagnosa1Ps1_CheckAll === '1') {
      setValue('diagnosa1_ps1_1_check', '1');
      setValue('diagnosa1_ps1_2_check', '1');
      setValue('diagnosa1_ps1_3_check', '1');
      setValue('diagnosa1_ps1_4_check', '1');
      setValue('diagnosa1_ps1_5_check', '1');
      
      setDiagnosa1Ps1_1Check('1');
      setDiagnosa1Ps1_2Check('1');
      setDiagnosa1Ps1_3Check('1');
      setDiagnosa1Ps1_4Check('1');
      setDiagnosa1Ps1_5Check('1');
      
    } else if (diagnosa1Ps1_CheckAll === '0') {
      setValue('diagnosa1_ps1_1_check', undefined);
      setValue('diagnosa1_ps1_2_check', undefined);
      setValue('diagnosa1_ps1_3_check', undefined);
      setValue('diagnosa1_ps1_4_check', undefined);
      setValue('diagnosa1_ps1_5_check', undefined);
      
      setDiagnosa1Ps1_1Check(undefined);
      setDiagnosa1Ps1_2Check(undefined);
      setDiagnosa1Ps1_3Check(undefined);
      setDiagnosa1Ps1_4Check(undefined);
      setDiagnosa1Ps1_5Check(undefined);
      
    }
  }, [diagnosa1Ps1_CheckAll]);


  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }


  return (<TabContent {...{ activeTab }}>
    <TabPane tabId='7'>
      <FormGroup className="form-group" row>

        <Row>
          <Col md='3'>Tanggal Persepsi  Sensori</Col>
          <Col md='5'>
            <Input
              id="tanggal_ps1"
              type="date"
              name="tanggal_ps1"
              innerRef={register()}
              invalid={errors.tanggal_ps1 && true}
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
              <Label>Gangguan Penglihatan b.d.</Label>
            </Col>
            <Input
              id="diagnosa1_ps1_check"
              type="checkbox"
              name="diagnosa1_ps1_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setDiagnosa1Ps1_CheckAll('1');
                } else {
                  setDiagnosa1Ps1_CheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              defaultChecked={data && data.form?.Diagnosa1_Ps1_Check === "1"}
              innerRef={register("diagnosa1_ps1_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>

          <Col md='6'>
            <Col>
              <Input
                id="diagnosa1_ps1_1_check"
                type="checkbox"
                name="diagnosa1_ps1_1_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setDiagnosa1Ps1_1Check('1');
                  } else {
                    setDiagnosa1Ps1_1Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Diagnosa1_Ps1_1_Check === "1"}
                checked={diagnosa1Ps1_1Check === '1'}
                innerRef={register("diagnosa1_ps1_1_check") as any}
              />{' '}
              <Label>Post operasi</Label>
              <Input
                style={{ marginTop: '10px' }}
                className="mb-1"
                type="text"
                id="diagnosa1_ps1_1_text"
                name="diagnosa1_ps1_1_text"
                innerRef={register({ required: false })}
                invalid={errors.Diagnosa1_Ps1_1_text && true}
              />
            </Col>
            <Col>
              <Input
                id="diagnosa1_ps1_2_check"
                type="checkbox"
                name="diagnosa1_ps1_2_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setDiagnosa1Ps1_2Check('1');
                  } else {
                    setDiagnosa1Ps1_2Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Diagnosa1_Ps1_2_Check === "1"}
                checked={ diagnosa1Ps1_2Check === '1'}
                innerRef={register("diagnosa1_ps1_2_check") as any}
              />{' '}
              <Label>Infeksi</Label>
              <Input
                style={{ marginTop: '10px' }}
                className="mb-1"
                type="text"
                id="diagnosa1_ps1_2_text"
                name="diagnosa1_ps1_2_text"
                innerRef={register({ required: false })}
                invalid={errors.Diagnosa1_Ps1_2_text && true}
              />
            </Col>
            <Col>
              <Input
                id="diagnosa1_ps1_3_check"
                type="checkbox"
                name="diagnosa1_ps1_3_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setDiagnosa1Ps1_3Check('1');
                  } else {
                    setDiagnosa1Ps1_3Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Diagnosa1_Ps1_3_Check === "1"}
                checked={ diagnosa1Ps1_3Check === '1'}
                innerRef={register("diagnosa1_ps1_3_check") as any}
              />{' '}
              <Label>TIO</Label>
              <Input
                style={{ marginTop: '10px' }}
                className="mb-1"
                type="text"
                id="diagnosa1_ps1_3_text"
                name="diagnosa1_ps1_3_text"
                innerRef={register({ required: false })}
                invalid={errors.Diagnosa1_Ps1_3_text && true}
              />
            </Col>
            <Col>
              <Input
                id="diagnosa1_ps1_4_check"
                type="checkbox"
                name="diagnosa1_ps1_4_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setDiagnosa1Ps1_4Check('1');
                  } else {
                    setDiagnosa1Ps1_4Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Diagnosa1_Ps1_4_Check === "1"}
                checked={ diagnosa1Ps1_4Check === '1'}
                innerRef={register("diagnosa1_ps1_4_check") as any}
              />{' '}
              <Label>Penurunan kemampuan penglihatan yang di sebabkan Katarak</Label>
            </Col>
            <Col>
              <Input
                id="diagnosa1_ps1_5_check"
                type="checkbox"
                name="diagnosa1_ps1_5_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setDiagnosa1Ps1_5Check('1');
                  } else {
                    setDiagnosa1Ps1_5Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Diagnosa1_Ps1_5_Check === "1"}
                checked={ diagnosa1Ps1_5Check === '1'}
                innerRef={register("diagnosa1_ps1_5_check") as any}
              />{' '}
              <Label>Komplikasi penyakit degeneratif</Label>
            </Col>
           
          </Col>
        </Row>

        <PerceptionSensorySightResult
          data={data}
          {...{ register, activeTab, errors, processing, setValue }}
        />

        <PerceptionSensorySightPlan
          data={data}
          {...{ register, activeTab, errors, processing, setValue }}
        />


      </FormGroup>
    </TabPane>
  </TabContent>)
}

export default PerceptionSensorySightMain;
