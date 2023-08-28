import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const RestSleepPlan = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const {  data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [Rencana1ItCheckAll, setRencana1ItCheckAll] = useState<any>();
  const [Rencana1It1Check, setRencana1It1Check] = useState<string | undefined>(`${data?.form?.Rencana1_It_1_Check}`);
  const [Rencana1It2Check, setRencana1It2Check] = useState<string | undefined>(`${data?.form?.Rencana1_It_2_Check}`);
  const [Rencana1It3Check, setRencana1It3Check] = useState<string | undefined>(`${data?.form?.Rencana1_It_3_Check}`);
  const [Rencana1It4Check, setRencana1It4Check] = useState<string | undefined>(`${data?.form?.Rencana1_It_4_Check}`);
  const [Rencana1It5Check, setRencana1It5Check] = useState<string | undefined>(`${data?.form?.Rencana1_It_5_Check}`);
  const [Rencana1It6Check, setRencana1It6Check] = useState<string | undefined>(`${data?.form?.Rencana1_It_6_Check}`);
  const [Rencana1It7Check, setRencana1It7Check] = useState<string | undefined>(`${data?.form?.Rencana1_It_7_Check}`);
  const [Rencana1It8Check, setRencana1It8Check] = useState<string | undefined>(`${data?.form?.Rencana1_It_8_Check}`);
  const [Rencana1It9Check, setRencana1It9Check] = useState<string | undefined>(`${data?.form?.Rencana1_It_9_Check}`);
  const [Rencana1It10Check, setRencana1It10Check] = useState<string | undefined>(`${data?.form?.Rencana1_It_10_Check}`);


  useEffect(() => {
    if (Rencana1ItCheckAll === '1') {
      setValue('rencana1_it_1_check', '1');
      setValue('rencana1_it_2_check', '1');
      setValue('rencana1_it_3_check', '1');
      setValue('rencana1_it_4_check', '1');
      setValue('rencana1_it_5_check', '1');
      setValue('rencana1_it_6_check', '1');
      setValue('rencana1_it_7_check', '1');
      setValue('rencana1_it_8_check', '1');
      setValue('rencana1_it_9_check', '1');
      setValue('rencana1_it_10_check', '1');
      setValue('rencana1_it_11_check', '1');
      setValue('rencana1_it_12_check', '1');
      setRencana1It1Check('1');
      setRencana1It2Check('1');
      setRencana1It3Check('1');
      setRencana1It4Check('1');
      setRencana1It5Check('1');
      setRencana1It6Check('1');
      setRencana1It7Check('1');
      setRencana1It8Check('1');
      setRencana1It9Check('1');
      setRencana1It10Check('1');
    } else if (Rencana1ItCheckAll === '0') {
      setValue('rencana1_it_1_check', undefined);
      setValue('rencana1_it_2_check', undefined);
      setValue('rencana1_it_3_check', undefined);
      setValue('rencana1_it_4_check', undefined);
      setValue('rencana1_it_5_check', undefined);
      setValue('rencana1_it_6_check', undefined);
      setValue('rencana1_it_7_check', undefined);
      setValue('rencana1_it_8_check', undefined);
      setValue('rencana1_it_9_check', undefined);
      setValue('rencana1_it_10_check', undefined);
      setRencana1It1Check(undefined);
      setRencana1It2Check(undefined);
      setRencana1It3Check(undefined);
      setRencana1It4Check(undefined);
      setRencana1It5Check(undefined);
      setRencana1It6Check(undefined);
      setRencana1It7Check(undefined);
      setRencana1It8Check(undefined);
      setRencana1It9Check(undefined);
      setRencana1It10Check(undefined);
    }
  }, [Rencana1ItCheckAll]);


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
              id="rencana1_it_check"
              type="checkbox"
              name="rencana1_it_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setRencana1ItCheckAll('1');
                } else {
                  setRencana1ItCheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              //defaultChecked={data && data.form?.Rencana1_It_Check === "1"}
              innerRef={register("rencana1_it_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
        </Row>
      </Col>
      <Col md='6' style={{ marginTop: '40px' }}>
        <Col>
          <Input
            id="rencana1_it_1_check"
            type="checkbox"
            name="rencana1_it_1_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1It1Check('1');
              } else {
                setRencana1It1Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_It_1_Check === "1"}
            checked={Rencana1It1Check === '1'}
            innerRef={register("rencana1_it_1_check") as any}
          />{' '}
          <Label>Kaji ulang pola tidur klien</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_it_2_check"
            type="checkbox"
            name="rencana1_it_2_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1It2Check('1');
              } else {
                setRencana1It2Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_It_2_Check === "1"}
            checked={Rencana1It2Check === '1'}
            innerRef={register("rencana1_it_2_check") as any}
          />{' '}
          <Label>Identifikasi faktor penyebab</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_it_3_check"
            type="checkbox"
            name="rencana1_it_3_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1It3Check('1');
              } else {
                setRencana1It3Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_It_3_Check === "1"}
            checked={ Rencana1It3Check === '1'}
            innerRef={register("rencana1_it_3_check") as any}
          />{' '}
          <Label>Ciptakan lingkungan yang tenang dan nyaman</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_it_4_check"
            type="checkbox"
            name="rencana1_it_4_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1It4Check('1');
              } else {
                setRencana1It4Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_It_4_Check === "1"}
            checked={ Rencana1It4Check === '1'}
            innerRef={register("rencana1_it_4_check") as any}
          />{' '}
          <Label>Hindari tindakan pada saat istirahat</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_it_5_check"
            type="checkbox"
            name="rencana1_it_5_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1It5Check('1');
              } else {
                setRencana1It5Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_It_5_Check === "1"}
            checked={Rencana1It5Check === '1'}
            innerRef={register("rencana1_it_5_check") as any}
          />{' '}
          <Label>Berikan susu hangat sebelum tidur</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_it_6_check"
            type="checkbox"
            name="rencana1_it_6_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1It6Check('1');
              } else {
                setRencana1It6Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_It_6_Check === "1"}
            checked={ Rencana1It6Check === '1'}
            innerRef={register("rencana1_it_6_check") as any}
          />{' '}
          <Label>Ajarkan teknik relaksasi</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_it_7_check"
            type="checkbox"
            name="rencana1_it_7_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1It7Check('1');
              } else {
                setRencana1It7Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_It_7_Check === "1"}
            checked={Rencana1It7Check === '1'}
            innerRef={register("rencana1_it_7_check") as any}
          />{' '}
          <Label>Pendidikan Kesehatan</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_it_8_check"
            type="checkbox"
            name="rencana1_it_8_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1It8Check('1');
              } else {
                setRencana1It8Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_It_8_Check === "1"}
            checked={Rencana1It8Check === '1'}
            innerRef={register("rencana1_it_8_check") as any}
          />{' '}
          <Label>Bunyikan musik yang lembut</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_it_9_check"
            type="checkbox"
            name="rencana1_it_9_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1It9Check('1');
              } else {
                setRencana1It9Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_It_9_Check === "1"}
            checked={Rencana1It9Check === '1'}
            innerRef={register("rencana1_it_9_check") as any}
          />{' '}
          <Label>Anjurkan berdoa sebelum tidur</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_it_10_check"
            type="checkbox"
            name="rencana1_it_10_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1It10Check('1');
              } else {
                setRencana1It10Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_It_10_Check === "1"}
            checked={Rencana1It10Check === '1'}
            innerRef={register("rencana1_it_10_check") as any}
          />{' '}
          <Label>Intervensi lain</Label>
          <Input
            style={{ marginTop: '10px' }}
            className="mb-1"
            type="text"
            id="rencana1_it_10_text"
            name="rencana1_it_10_text"
            innerRef={register({ required: false })}
            invalid={errors.rencana1_it_10_ && true}
          />
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
            id="rencana2_it_1_check"
            type="checkbox"
            name="rencana2_it_1_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              handleCheckboxChange(e)
            }}
            defaultChecked={ (data && data?.form?.Rencana2_It_1_Check === "1") }
            innerRef={register("rencana2_it_1_check") as any}
          />{' '}
          <Input
            style={{ marginTop: '10px' }}
            className="mb-1"
            type="text"
            id="rencana2_it_1_text"
            name="rencana2_it_1_text"
            innerRef={register({ required: false })}
            invalid={errors.rencana2_it_3_text && true}
          />
        </Col>
        <Col>
          <Input
            id="rencana2_it_2_check"
            type="checkbox"
            name="rencana2_it_2_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              handleCheckboxChange(e)
            }}
            defaultChecked={ (data && data?.form?.Rencana2_It_2_Check === "1") }
            innerRef={register("rencana2_it_2_check") as any}
          />{' '}
          <Input
            style={{ marginTop: '10px' }}
            className="mb-1"
            type="text"
            id="rencana2_it_2_text"
            name="rencana2_it_2_text"
            innerRef={register({ required: false })}
            invalid={errors.rencana2_it_2_text && true}
          />
        </Col>
      </Col>
    </Row>)
}

export default RestSleepPlan;
