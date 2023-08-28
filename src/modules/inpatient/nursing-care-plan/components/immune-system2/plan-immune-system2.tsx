import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const ImmuneSystem2Plan = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const {  data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [Rencana1Si1_CheckAll, setRencana1Si1_CheckAll] = useState<any>();
  const [Rencana1Si1_1Check, setRencana1Si1_1Check] = useState<string | undefined>(`${data?.form?.Rencana1_Si1_1_Check}`);
  const [Rencana1Si1_2Check, setRencana1Si1_2Check] = useState<string | undefined>(`${data?.form?.Rencana1_Si1_2_Check}`);
  const [Rencana1Si1_3Check, setRencana1Si1_3Check] = useState<string | undefined>(`${data?.form?.Rencana1_Si1_3_Check}`);
  const [Rencana1Si1_4Check, setRencana1Si1_4Check] = useState<string | undefined>(`${data?.form?.Rencana1_Si1_4_Check}`);
  const [Rencana1Si1_5Check, setRencana1Si1_5Check] = useState<string | undefined>(`${data?.form?.Rencana1_Si1_5_Check}`);
  const [Rencana1Si1_6Check, setRencana1Si1_6Check] = useState<string | undefined>(`${data?.form?.Rencana1_Si1_6_Check}`);
  const [Rencana1Si1_7Check, setRencana1Si1_7Check] = useState<string | undefined>(`${data?.form?.Rencana1_Si1_7_Check}`);
  const [Rencana1Si1_8Check, setRencana1Si1_8Check] = useState<string | undefined>(`${data?.form?.Rencana1_Si1_8_Check}`);


  useEffect(() => {
    if (Rencana1Si1_CheckAll === '1') {
      setValue('rencana1_si1_check', '1');
      setValue('rencana1_si1_2_check', '1');
      setValue('rencana1_si1_3_check', '1');
      setValue('rencana1_si1_4_check', '1');
      setValue('rencana1_si1_5_check', '1');
      setValue('rencana1_si1_6_check', '1');
      setValue('rencana1_si1_7_check', '1');
      setValue('rencana1_si1_8_check', '1');

      setRencana1Si1_1Check('1');
      setRencana1Si1_2Check('1');
      setRencana1Si1_3Check('1');
      setRencana1Si1_4Check('1');
      setRencana1Si1_5Check('1');
      setRencana1Si1_6Check('1');
      setRencana1Si1_7Check('1');
      setRencana1Si1_8Check('1');

    } else if (Rencana1Si1_CheckAll === '0') {
      setValue('rencana1_si1_check', undefined);
      setValue('rencana1_si1_2_check', undefined);
      setValue('rencana1_si1_3_check', undefined);
      setValue('rencana1_si1_4_check', undefined);
      setValue('rencana1_si1_5_check', undefined);
      setValue('rencana1_si1_6_check', undefined);
      setValue('rencana1_si1_7_check', undefined);
      setValue('rencana1_si1_8_check', undefined);

      setRencana1Si1_1Check(undefined);
      setRencana1Si1_2Check(undefined);
      setRencana1Si1_3Check(undefined);
      setRencana1Si1_4Check(undefined);
      setRencana1Si1_5Check(undefined);
      setRencana1Si1_6Check(undefined);
      setRencana1Si1_7Check(undefined);
      setRencana1Si1_8Check(undefined);

    }
  }, [Rencana1Si1_CheckAll]);


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
              id="rencana1_si1_check"
              type="checkbox"
              name="rencana1_si1_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setRencana1Si1_CheckAll('1');
                } else {
                  setRencana1Si1_CheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              //defaultChecked={data && data.form?.Rencana1_Si1_Check === "1"}
              innerRef={register("rencana1_si1_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
        </Row>
      </Col>
      <Col md='6' style={{ marginTop: '40px' }}>
        <Col>
          <Input
            id="rencana1_si1_1_check"
            type="checkbox"
            name="rencana1_si1_1_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Si1_1Check('1');
              } else {
                setRencana1Si1_1Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Si1_1_Check === "1"}
            checked={Rencana1Si1_1Check === '1'}
            innerRef={register("rencana1_si1_1_check") as any}
          />{' '}
          <Label>Kaji tanda-tanda infeksi / sepsis</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_si1_2_check"
            type="checkbox"
            name="rencana1_si1_2_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Si1_2Check('1');
              } else {
                setRencana1Si1_2Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Si1_2_Check === "1"}
            checked={Rencana1Si1_2Check === '1'}
            innerRef={register("rencana1_si1_2_check") as any}
          />{' '}
          <Label>Monitor vital sign</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_si1_3_check"
            type="checkbox"
            name="rencana1_si1_3_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Si1_3Check('1');
              } else {
                setRencana1Si1_3Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Si1_3_Check === "1"}
            checked={ Rencana1Si1_3Check === '1'}
            innerRef={register("rencana1_si1_3_check") as any}
          />{' '}
          <Label>Lakukan tehnik aseptik - antiseptik</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_si1_4_check"
            type="checkbox"
            name="rencana1_si1_4_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Si1_4Check('1');
              } else {
                setRencana1Si1_4Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Si1_4_Check === "1"}
            checked={ Rencana1Si1_4Check === '1'}
            innerRef={register("rencana1_si1_4_check") as any}
          />{' '}
          <Label>Manajemen nutrisi, cairan dan elektrolit</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_si1_5_check"
            type="checkbox"
            name="rencana1_si1_5_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Si1_5Check('1');
              } else {
                setRencana1Si1_5Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Si1_5_Check === "1"}
            checked={Rencana1Si1_5Check === '1'}
            innerRef={register("rencana1_si1_5_check") as any}
          />{' '}
          <Label>Jaga personal higiene</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_si1_6_check"
            type="checkbox"
            name="rencana1_si1_6_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Si1_6Check('1');
              } else {
                setRencana1Si1_6Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Si1_6_Check === "1"}
            checked={ Rencana1Si1_6Check === '1'}
            innerRef={register("rencana1_si1_6_check") as any}
          />{' '}
          <Label>Manajemen lingkungan</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_si1_7_check"
            type="checkbox"
            name="rencana1_si1_7_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Si1_7Check('1');
              } else {
                setRencana1Si1_7Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Si1_7_Check === "1"}
            checked={Rencana1Si1_7Check === '1'}
            innerRef={register("rencana1_si1_7_check") as any}
          />{' '}
          <Label>Manajemen obat</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_si1_8_check"
            type="checkbox"
            name="rencana1_si1_8_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Si1_8Check('1');
              } else {
                setRencana1Si1_8Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Si1_8_Check === "1"}
            checked={Rencana1Si1_8Check === '1'}
            innerRef={register("rencana1_si1_8_check") as any}
          />{' '}
          <Label>Berikan pendidikan kesehatan</Label>
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
            id="rencana2_si1_1_check"
            type="checkbox"
            name="rencana2_si1_1_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              handleCheckboxChange(e)
            }}
            defaultChecked={ (data && data?.form?.Rencana2_Si1_1_Check === "1") }
            innerRef={register("rencana2_si1_1_check") as any}
          />{' '}
          <Input
            style={{ marginTop: '10px' }}
            className="mb-1"
            type="text"
            id="rencana2_si1_1_text"
            name="rencana2_si1_1_text"
            innerRef={register({ required: false })}
            invalid={errors.rencana2_it_1_text && true}
          />
        </Col>
        <Col>
          <Input
            id="rencana2_si1_2_check"
            type="checkbox"
            name="rencana2_si1_2_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              handleCheckboxChange(e)
            }}
            defaultChecked={ (data && data?.form?.Rencana2_Si1_2_Check === "1") }
            innerRef={register("rencana2_si1_2_check") as any}
          />{' '}
          <Input
            style={{ marginTop: '10px' }}
            className="mb-1"
            type="text"
            id="rencana2_si1_2_text"
            name="rencana2_si1_2_text"
            innerRef={register({ required: false })}
            invalid={errors.rencana2_it_2_text && true}
          />
        </Col>
         <Col>
          <Input
            id="rencana2_si1_3_check"
            type="checkbox"
            name="rencana2_si1_3_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              handleCheckboxChange(e)
            }}
            defaultChecked={ (data && data?.form?.Rencana2_Si1_3_Check === "1") }
            innerRef={register("rencana2_si1_3_check") as any}
          />{' '}
          <Input
            style={{ marginTop: '10px' }}
            className="mb-1"
            type="text"
            id="rencana2_si1_3_text"
            name="rencana2_si1_3_text"
            innerRef={register({ required: false })}
            invalid={errors.rencana2_it_3_text && true}
          />
        </Col>
      </Col>
    </Row>)
}

export default ImmuneSystem2Plan;
