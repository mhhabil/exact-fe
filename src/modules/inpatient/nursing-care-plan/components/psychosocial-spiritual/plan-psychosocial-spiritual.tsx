import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const PsychosocialSpiritualPlan = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const {  data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [Rencana1PsiCheckAll, setRencana1PsiCheckAll] = useState<any>();
  const [Rencana1Psi1Check, setRencana1Psi1Check] = useState<string | undefined>(`${data?.form?.Rencana1_Psi_1_Check}`);
  const [Rencana1Psi2Check, setRencana1Psi2Check] = useState<string | undefined>(`${data?.form?.Rencana1_Psi_2_Check}`);
  const [Rencana1Psi3Check, setRencana1Psi3Check] = useState<string | undefined>(`${data?.form?.Rencana1_Psi_3_Check}`);
  const [Rencana1Psi4Check, setRencana1Psi4Check] = useState<string | undefined>(`${data?.form?.Rencana1_Psi_4_Check}`);
  const [Rencana1Psi5Check, setRencana1Psi5Check] = useState<string | undefined>(`${data?.form?.Rencana1_Psi_5_Check}`);
  const [Rencana1Psi6Check, setRencana1Psi6Check] = useState<string | undefined>(`${data?.form?.Rencana1_Psi_6_Check}`);
  const [Rencana1Psi7Check, setRencana1Psi7Check] = useState<string | undefined>(`${data?.form?.Rencana1_Psi_7_Check}`);
  const [Rencana1Psi8Check, setRencana1Psi8Check] = useState<string | undefined>(`${data?.form?.Rencana1_Psi_8_Check}`);
  const [Rencana1Psi9Check, setRencana1Psi9Check] = useState<string | undefined>(`${data?.form?.Rencana1_Psi_9_Check}`);
  const [Rencana1Psi10Check, setRencana1Psi10Check] = useState<string | undefined>(`${data?.form?.Rencana1_Psi_10_Check}`);
  const [Rencana1Psi11Check, setRencana1Psi11Check] = useState<string | undefined>(`${data?.form?.Rencana1_Psi_11_Check}`);


  useEffect(() => {
    if (Rencana1PsiCheckAll === '1') {
      setValue('rencana1_psi_1_check', '1');
      setValue('rencana1_psi_2_check', '1');
      setValue('rencana1_psi_3_check', '1');
      setValue('rencana1_psi_4_check', '1');
      setValue('rencana1_psi_5_check', '1');
      setValue('rencana1_psi_6_check', '1');
      setValue('rencana1_psi_7_check', '1');
      setValue('rencana1_psi_8_check', '1');
      setValue('rencana1_psi_9_check', '1');
      setValue('rencana1_psi_10_check', '1');
      setValue('rencana1_psi_11_check', '1');
      setRencana1Psi1Check('1');
      setRencana1Psi2Check('1');
      setRencana1Psi3Check('1');
      setRencana1Psi4Check('1');
      setRencana1Psi5Check('1');
      setRencana1Psi6Check('1');
      setRencana1Psi7Check('1');
      setRencana1Psi8Check('1');
      setRencana1Psi9Check('1');
      setRencana1Psi10Check('1');
      setRencana1Psi11Check('1');
    } else if (Rencana1PsiCheckAll === '0') {
      setValue('rencana1_psi_1_check', undefined);
      setValue('rencana1_psi_2_check', undefined);
      setValue('rencana1_psi_3_check', undefined);
      setValue('rencana1_psi_4_check', undefined);
      setValue('rencana1_psi_5_check', undefined);
      setValue('rencana1_psi_6_check', undefined);
      setValue('rencana1_psi_7_check', undefined);
      setValue('rencana1_psi_8_check', undefined);
      setValue('rencana1_psi_9_check', undefined);
      setValue('rencana1_psi_10_check', undefined);
      setValue('rencana1_psi_11_check', undefined);
      setRencana1Psi1Check(undefined);
      setRencana1Psi2Check(undefined);
      setRencana1Psi3Check(undefined);
      setRencana1Psi4Check(undefined);
      setRencana1Psi5Check(undefined);
      setRencana1Psi6Check(undefined);
      setRencana1Psi7Check(undefined);
      setRencana1Psi8Check(undefined);
      setRencana1Psi9Check(undefined);
      setRencana1Psi10Check(undefined);
      setRencana1Psi11Check(undefined);
    }
  }, [Rencana1PsiCheckAll]);


  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }


  return (
    <Row>
      <Col md='3'>4. Rencana Keperawatan</Col>
      <Col md='3'>
        <Row>
          <Col md='12'>
            <Col>
                Mandiri
            </Col>
            <Input
              id="rencana1_psi_check"
              type="checkbox"
              name="rencana1_psi_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setRencana1PsiCheckAll('1');
                } else {
                  setRencana1PsiCheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              //defaultChecked={data && data.form?.Rencana1_Psi_Check === "1"}
              innerRef={register("rencana1_psi_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
        </Row>
      </Col>
      <Col md='6' style={{ marginTop: '40px' }}>
        <Col>
          <Input
            id="rencana1_psi_1_check"
            type="checkbox"
            name="rencana1_psi_1_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Psi1Check('1');
              } else {
                setRencana1Psi1Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Psi_1_Check === "1"}
            checked={Rencana1Psi1Check === '1'}
            innerRef={register("rencana1_psi_1_check") as any}
          />{' '}
          <Label>Kaji ulang status psikososial dan spritual</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_psi_2_check"
            type="checkbox"
            name="rencana1_psi_2_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Psi2Check('1');
              } else {
                setRencana1Psi2Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Psi_2_Check === "1"}
            checked={Rencana1Psi2Check === '1'}
            innerRef={register("rencana1_psi_2_check") as any}
          />{' '}
          <Label>Komunikasi terapeutik</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_psi_3_check"
            type="checkbox"
            name="rencana1_psi_3_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Psi3Check('1');
              } else {
                setRencana1Psi3Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Psi_3_Check === "1"}
            checked={ Rencana1Psi3Check === '1'}
            innerRef={register("rencana1_psi_3_check") as any}
          />{' '}
          <Label>Observasi ekspresi wajah dan tingkah laku</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_psi_4_check"
            type="checkbox"
            name="rencana1_psi_4_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Psi4Check('1');
              } else {
                setRencana1Psi4Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Psi_4_Check === "1"}
            checked={ Rencana1Psi4Check === '1'}
            innerRef={register("rencana1_psi_4_check") as any}
          />{' '}
          <Label>Dorong klien untuk mengungkapkan perasaannya </Label>
        </Col>
        <Col>
          <Input
            id="rencana1_psi_5_check"
            type="checkbox"
            name="rencana1_psi_5_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Psi5Check('1');
              } else {
                setRencana1Psi5Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Psi_5_Check === "1"}
            checked={Rencana1Psi5Check === '1'}
            innerRef={register("rencana1_psi_5_check") as any}
          />{' '}
          <Label>Ajarkan teknik relaksasi</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_psi_6_check"
            type="checkbox"
            name="rencana1_psi_6_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Psi6Check('1');
              } else {
                setRencana1Psi6Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Psi_6_Check === "1"}
            checked={ Rencana1Psi6Check === '1'}
            innerRef={register("rencana1_psi_6_check") as any}
          />{' '}
          <Label>Bantu klien dalam memecahkan masalahnya</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_psi_7_check"
            type="checkbox"
            name="rencana1_psi_7_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Psi7Check('1');
              } else {
                setRencana1Psi7Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Psi_7_Check === "1"}
            checked={Rencana1Psi7Check === '1'}
            innerRef={register("rencana1_psi_7_check") as any}
          />{' '}
          <Label>Ciptakan lingkungan tenang, aman, nyaman</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_psi_8_check"
            type="checkbox"
            name="rencana1_psi_8_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Psi8Check('1');
              } else {
                setRencana1Psi8Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Psi_8_Check === "1"}
            checked={Rencana1Psi8Check === '1'}
            innerRef={register("rencana1_psi_8_check") as any}
          />{' '}
          <Label>Dorong klien untuk tetap berdoa dan beribadah</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_psi_9_check"
            type="checkbox"
            name="rencana1_psi_9_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Psi9Check('1');
              } else {
                setRencana1Psi9Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Psi_9_Check === "1"}
            checked={Rencana1Psi9Check === '1'}
            innerRef={register("rencana1_psi_9_check") as any}
          />{' '}
          <Label>Beri informasi sederhana tentang prosedur yang akan dilakukan</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_psi_10_check"
            type="checkbox"
            name="rencana1_psi_10_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Psi10Check('1');
              } else {
                setRencana1Psi10Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Psi_10_Check === "1"}
            checked={Rencana1Psi10Check === '1'}
            innerRef={register("rencana1_psi_10_check") as any}
          />{' '}
          <Label>Tunjukan sikap empati</Label>
        </Col>
        
         <Col>
          <Input
            id="rencana1_psi_11_check"
            type="checkbox"
            name="rencana1_psi_11_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Psi11Check('1');
              } else {
                setRencana1Psi11Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Psi_11_Check === "1"}
            checked={Rencana1Psi11Check === '1'}
            innerRef={register("rencana1_psi_11_check") as any}
          />{' '}
          <Label>Libatkan keluarga dalam perawatan</Label>
         
        </Col>

      </Col>

      <Col md='3'></Col>
      <Col md='3'>
        <Row>
          <Col md='12'>
            <Col>
                Kolaborasi
            </Col>

          </Col>
        </Row>
      </Col>
      <Col md='6' style={{ marginTop: '40px' }}>
        <Col>
          <Input
            id="rencana2_psi_1_check"
            type="checkbox"
            name="rencana2_psi_1_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              handleCheckboxChange(e)
            }}
            defaultChecked={ (data && data?.form?.Rencana2_Psi_1_Check === "1") }
            innerRef={register("rencana2_psi_1_check") as any}
          />{' '}
           <Label>Kerohanian</Label>
        </Col>
        <Col>
          <Input
            id="rencana2_psi_2_check"
            type="checkbox"
            name="rencana2_psi_2_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              handleCheckboxChange(e)
            }}
            defaultChecked={ (data && data?.form?.Rencana2_Psi_2_Check === "1") }
            innerRef={register("rencana2_psi_2_check") as any}
          />{' '}
          <Input
            style={{ marginTop: '10px' }}
            className="mb-1"
            type="text"
            id="rencana2_psi_2_text"
            name="rencana2_psi_2_text"
            innerRef={register({ required: false })}
            invalid={errors.rencana2_psi_2_text && true}
          />
        </Col>
        <Col>
          <Input
            id="rencana2_psi_3_check"
            type="checkbox"
            name="rencana2_psi_3_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              handleCheckboxChange(e)
            }}
            defaultChecked={ (data && data?.form?.Rencana2_Psi_3_Check === "1") }
            innerRef={register("rencana2_psi_3_check") as any}
          />{' '}
          <Input
            style={{ marginTop: '10px' }}
            className="mb-1"
            type="text"
            id="rencana2_psi_3_text"
            name="rencana2_psi_3_text"
            innerRef={register({ required: false })}
            invalid={errors.rencana2_psi_3_text && true}
          />
        </Col>
      </Col>
    </Row>)
}

export default PsychosocialSpiritualPlan;
