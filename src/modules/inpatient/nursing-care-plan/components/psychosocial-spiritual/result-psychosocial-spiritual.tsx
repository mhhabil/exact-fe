import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const PsychosocialSpiritualResult = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const { data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [Tujuan1PsiCheckAll, setTujuan1PsiCheckAll] = useState<any>();
  const [Tujuan1Psi1Check, setTujuan1Psi1Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Psi_1_Check}`);
  const [Tujuan1Psi2Check, setTujuan1Psi2Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Psi_2_Check}`);
  const [Tujuan1Psi3Check, setTujuan1Psi3Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Psi_3_Check}`);
  const [Tujuan1Psi4Check, setTujuan1Psi4Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Psi_4_Check}`);

  const [tujuan2PsiCheckAll, setTujuan2PsiCheckAll] = useState<any>();
  const [tujuan2Psi1Check, setTujuan2Psi1Check] = useState<string | undefined>(`${data?.form?.Tujuan2_Psi_1_Check}`);
  const [tujuan2Psi2Check, setTujuan2Psi2Check] = useState<string | undefined>(`${data?.form?.Tujuan2_Psi_2_Check}`);

  const [tujuan3PsiCheckAll, setTujuan3PsiCheckAll] = useState<any>();
  const [tujuan3Psi1Check, setTujuan3Psi1Check] = useState<string | undefined>(`${data?.form?.Tujuan3_Psi_1_Check}`);
  const [tujuan3Psi2Check, setTujuan3Psi2Check] = useState<string | undefined>(`${data?.form?.Tujuan3_Psi_2_Check}`);
  const [tujuan3Psi3Check, setTujuan3Psi3Check] = useState<string | undefined>(`${data?.form?.Tujuan3_Psi_3_Check}`);


  useEffect(() => {
    if (Tujuan1PsiCheckAll === '1') {
      setValue('tujuan1_psi_1_check', '1');
      setValue('tujuan1_psi_2_check', '1');
      setValue('tujuan1_psi_3_check', '1');
      setValue('tujuan1_psi_4_check', '1');
      setTujuan1Psi1Check('1');
      setTujuan1Psi2Check('1');
      setTujuan1Psi3Check('1');
      setTujuan1Psi4Check('1');
    } else if (Tujuan1PsiCheckAll === '0') {
      setValue('tujuan1_psi_1_check', undefined);
      setValue('tujuan1_psi_2_check', undefined);
      setValue('tujuan1_psi_3_check', undefined);
      setValue('tujuan1_psi_4_check', undefined);
      setTujuan1Psi1Check(undefined);
      setTujuan1Psi2Check(undefined);
      setTujuan1Psi3Check(undefined);
      setTujuan1Psi4Check(undefined);
    }
  }, [Tujuan1PsiCheckAll]);

  useEffect(() => {
    if (tujuan2PsiCheckAll === '1') {
      setValue('tujuan2_psi_1_check', '1');
      setValue('tujuan2_psi_2_check', '1');
      setTujuan2Psi1Check('1');
      setTujuan2Psi2Check('1');
    } else if (tujuan2PsiCheckAll === '0') {
      setValue('tujuan2_psi_1_check', undefined);
      setValue('tujuan2_psi_2_check', undefined);
      setTujuan2Psi1Check(undefined);
      setTujuan2Psi2Check(undefined);
    }
  }, [tujuan2PsiCheckAll]);
  
  useEffect(() => {
    if (tujuan3PsiCheckAll === '1') {
      setValue('tujuan3_ps_1_check', '1');
      setValue('tujuan3_ps_2_check', '1');
      setValue('tujuan3_ps_3_check', '1');
      setValue('tujuan3_ps_4_check', '1');
      setTujuan3Psi1Check('1');
      setTujuan3Psi2Check('1');
      setTujuan3Psi3Check('1');
    } else if (tujuan3PsiCheckAll === '0') {
      setValue('tujuan3_ps_1_check', undefined);
      setValue('tujuan3_ps_2_check', undefined);
      setValue('tujuan3_ps_3_check', undefined);
      setValue('tujuan3_ps_4_check', undefined);
      setTujuan3Psi1Check(undefined);
      setTujuan3Psi2Check(undefined);
      setTujuan3Psi3Check(undefined);
    }
  }, [tujuan3PsiCheckAll]);


  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }


  return (
    <Row>
      <Col md='3'>3. Tujuan Dan Kriteria Hasil</Col>
      <Col md='9' style={{ borderTop: "2px dashed black" }}>
        <Row style={{ borderTop: "2px dashed black" }}>
          <Col md='6'>
            <Col>
               Cemas berkurang sampai dengan hilang setelah dilakukan asuhan keperawatan
            </Col>
            <Col>
              <NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan1_psi_jam_1'
                {...{ register, errors }}
              />X<NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan1_psi_jam_2'
                {...{ register, errors }}
              />
            </Col>
            <Input
              id="tujuan1_psi_check"
              type="checkbox"
              name="tujuan1_psi_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setTujuan1PsiCheckAll('1');
                } else {
                  setTujuan1PsiCheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              defaultChecked={data && data.form?.Tujuan1_Psi_Check === "1"}
              innerRef={register("tujuan1_psi_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
          <Col md='6'>
            <Col>
              <Input
                id="tujuan1_psi_1_check"
                type="checkbox"
                name="tujuan1_psi_1_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan1Psi1Check('1');
                  } else {
                    setTujuan1Psi1Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan1_Psi_1_Check === "1"}
                checked={Tujuan1Psi1Check === '1'}
                innerRef={register("tujuan1_psi_1_check") as any}
              />{' '}
              <Label>Mampu mengekspresikan perasaan secara verbal</Label>
            </Col>
            <Col>
              <Input
                id="tujuan1_psi_2_check"
                type="checkbox"
                name="tujuan1_psi_2_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan1Psi2Check('1');
                  } else {
                    setTujuan1Psi2Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan1_Psi_2_Check === "1"}
                checked={ Tujuan1Psi2Check === '1'}
                innerRef={register("tujuan1_psi_2_check") as any}
              />{' '}
              <Label>Ekspresi wajah rileks</Label>
            </Col>
            <Col>
              <Input
                id="tujuan1_psi_3_check"
                type="checkbox"
                name="tujuan1_psi_3_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan1Psi3Check('1');
                  } else {
                    setTujuan1Psi3Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan1_Psi_3_Check === "1"}
                checked={ Tujuan1Psi3Check === '1'}
                innerRef={register("tujuan1_psi_3_check") as any}
              />{' '}
              <Label>Optimis akan kesembuhan</Label>
            </Col>
            <Col>
              <Input
                id="tujuan1_psi_4_check"
                type="checkbox"
                name="tujuan1_psi_4_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan1Psi4Check('1');
                  } else {
                    setTujuan1Psi4Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan1_Psi_4_Check === "1"}
                checked={ Tujuan1Psi4Check === '1'}
                innerRef={register("tujuan1_psi_4_check") as any}
              />{' '}
              <Label>Mampu mengontrol cemas</Label>
            </Col>


          </Col>
        </Row>

        <Row style={{ borderTop: "2px dashed black" }}>
          <Col md='6'>
            <Col>
               Coping efektif setelah dilakukan asuhan keperawatan 
            </Col>
            <Col>
              <NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan2_psi_jam_1'
                {...{ register, errors }}
              />X<NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan2_psi_jam_2'
                {...{ register, errors }}
              />
            </Col>
            <Input
              id="tujuan2_psi_check"
              type="checkbox"
              name="tujuan2_psi_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setTujuan2PsiCheckAll('1');
                } else {
                  setTujuan2PsiCheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              defaultChecked={data && data.form?.Tujuan2_Psi_Check === "1"}
              innerRef={register("tujuan2_psi_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
          <Col md='6'>
            <Col>
              <Input
                id="tujuan2_psi_1_check"
                type="checkbox"
                name="tujuan2_psi_1_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan2Psi1Check('1');
                  } else {
                    setTujuan2Psi1Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan2_Psi_1_Check === "1"}
                checked={tujuan2Psi1Check === '1'}
                innerRef={register("tujuan2_psi_1_check") as any}
              />{' '}
              <Label>Mampu mengambil keputusan </Label>
            </Col>
            <Col>
              <Input
                id="tujuan2_psi_2_check"
                type="checkbox"
                name="tujuan2_psi_2_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan2Psi2Check('1');
                  } else {
                    setTujuan2Psi2Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan2_Psi_2_Check === "1"}
                checked={tujuan2Psi2Check === '1'}
                innerRef={register("tujuan2_psi_2_check") as any}
              />{' '}
              <Label>Mampu memanfaatkan sumber-sumber yang  tersedia</Label>
            </Col>

          </Col>
        </Row>
        
         <Row style={{ borderTop: "2px dashed black" }}>
          <Col md='6'>
            <Col>
               Harga diri meningkat setelah dilakukan asuhan keperawatan
            </Col>
            <Col>
              <NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan3_psi_jam_1'
                {...{ register, errors }}
              />X<NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan3_psi_jam_2'
                {...{ register, errors }}
              />
            </Col>
            <Input
              id="tujuan3_psi_check"
              type="checkbox"
              name="tujuan3_psi_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setTujuan3PsiCheckAll('1');
                } else {
                  setTujuan3PsiCheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              defaultChecked={data && data.form?.Tujuan3_Psi_Check === "1"}
              innerRef={register("tujuan3_psi_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
          <Col md='6'>
            <Col>
              <Input
                id="tujuan3_psi_1_check"
                type="checkbox"
                name="tujuan3_psi_1_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan3Psi1Check('1');
                  } else {
                    setTujuan3Psi1Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan3_Psi_1_Check === "1"}
                checked={tujuan3Psi1Check === '1'}
                innerRef={register("tujuan3_psi_1_check") as any}
              />{' '}
              <Label>Coping efektif</Label>
            </Col>
            <Col>
              <Input
                id="tujuan3_psi_2_check"
                type="checkbox"
                name="tujuan3_psi_2_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan3Psi2Check('1');
                  } else {
                    setTujuan3Psi2Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan3_Psi_2_Check === "1"}
                checked={tujuan3Psi2Check === '1'}
                innerRef={register("tujuan3_psi_2_check") as any}
              />{' '}
              <Label>Mampu mengungkapkan perasaan dan reaksi perubahan hidup</Label>
            </Col>
             <Col>
              <Input
                id="tujuan3_psi_3_check"
                type="checkbox"
                name="tujuan3_psi_3_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan3Psi3Check('1');
                  } else {
                    setTujuan3Psi3Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan3_Psi_3_Check === "1"}
                checked={tujuan3Psi3Check === '1'}
                innerRef={register("tujuan3_psi_3_check") as any}
              />{' '}
              <Label>Mampu menerima keadaan</Label>
            </Col>

          </Col>
        </Row>

      </Col>
    </Row>)
}

export default PsychosocialSpiritualResult;
