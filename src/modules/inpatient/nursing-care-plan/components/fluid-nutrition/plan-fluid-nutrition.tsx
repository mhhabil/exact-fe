import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const FluidNutritionPlan = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const {  data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [rencana1NcCheckAll, setRencana1NcCheckAll] = useState<any>();
  const [rencana1Nc1Check, setRencana1Nc1Check] = useState<string | undefined>(`${data?.form?.Rencana1_Nc_1_Check}`);
  const [rencana1Nc2Check, setRencana1Nc2Check] = useState<string | undefined>(`${data?.form?.Rencana1_Nc_2_Check}`);
  const [rencana1Nc3Check, setRencana1Nc3Check] = useState<string | undefined>(`${data?.form?.Rencana1_Nc_3_Check}`);
  const [rencana1Nc4Check, setRencana1Nc4Check] = useState<string | undefined>(`${data?.form?.Rencana1_Nc_4_Check}`);
  const [rencana1Nc5Check, setRencana1Nc5Check] = useState<string | undefined>(`${data?.form?.Rencana1_Nc_5_Check}`);
  const [rencana1Nc6Check, setRencana1Nc6Check] = useState<string | undefined>(`${data?.form?.Rencana1_Nc_6_Check}`);
  const [rencana1Nc7Check, setRencana1Nc7Check] = useState<string | undefined>(`${data?.form?.Rencana1_Nc_7_Check}`);
  const [rencana1Nc8Check, setRencana1Nc8Check] = useState<string | undefined>(`${data?.form?.Rencana1_Nc_8_Check}`);
  const [rencana1Nc9Check, setRencana1Nc9Check] = useState<string | undefined>(`${data?.form?.Rencana1_Nc_9_Check}`);
  const [rencana1Nc10Check, setRencana1Nc10Check] = useState<string | undefined>(`${data?.form?.Rencana1_Nc_10_Check}`);
  const [rencana1Nc11Check, setRencana1Nc11Check] = useState<string | undefined>(`${data?.form?.Rencana1_Nc_11_Check}`);
  const [rencana1Nc12Check, setRencana1Nc12Check] = useState<string | undefined>(`${data?.form?.Rencana1_Nc_12_Check}`);


  useEffect(() => {
    if (rencana1NcCheckAll === '1') {
      setValue('rencana1_nc_1_check', '1');
      setValue('rencana1_nc_2_check', '1');
      setValue('rencana1_nc_3_check', '1');
      setValue('rencana1_nc_4_check', '1');
      setValue('rencana1_nc_5_check', '1');
      setValue('rencana1_nc_6_check', '1');
      setValue('rencana1_nc_7_check', '1');
      setValue('rencana1_nc_8_check', '1');
      setValue('rencana1_nc_9_check', '1');
      setValue('rencana1_nc_10_check', '1');
      setValue('rencana1_nc_11_check', '1');
      setValue('rencana1_nc_12_check', '1');
      setRencana1Nc1Check('1');
      setRencana1Nc2Check('1');
      setRencana1Nc3Check('1');
      setRencana1Nc4Check('1');
      setRencana1Nc5Check('1');
      setRencana1Nc6Check('1');
      setRencana1Nc7Check('1');
      setRencana1Nc8Check('1');
      setRencana1Nc9Check('1');
      setRencana1Nc10Check('1');
      setRencana1Nc11Check('1');
      setRencana1Nc12Check('1');
    } else if (rencana1NcCheckAll === '0') {
      setValue('rencana1_nc_1_check', undefined);
      setValue('rencana1_nc_2_check', undefined);
      setValue('rencana1_nc_3_check', undefined);
      setValue('rencana1_nc_4_check', undefined);
      setValue('rencana1_nc_5_check', undefined);
      setValue('rencana1_nc_6_check', undefined);
      setValue('rencana1_nc_7_check', undefined);
      setValue('rencana1_nc_8_check', undefined);
      setValue('rencana1_nc_9_check', undefined);
      setValue('rencana1_nc_10_check', undefined);
      setValue('rencana1_nc_11_check', undefined);
      setValue('rencana1_nc_12_check', undefined);
      setRencana1Nc1Check(undefined);
      setRencana1Nc2Check(undefined);
      setRencana1Nc3Check(undefined);
      setRencana1Nc4Check(undefined);
      setRencana1Nc5Check(undefined);
      setRencana1Nc6Check(undefined);
      setRencana1Nc7Check(undefined);
      setRencana1Nc8Check(undefined);
      setRencana1Nc9Check(undefined);
      setRencana1Nc10Check(undefined);
      setRencana1Nc11Check(undefined);
      setRencana1Nc12Check(undefined);
    }
  }, [rencana1NcCheckAll]);


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
              id="rencana1_nc_check"
              type="checkbox"
              name="rencana1_nc_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setRencana1NcCheckAll('1');
                } else {
                  setRencana1NcCheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              //defaultChecked={data && data.form?.Rencana1_Nc_Check === "1"}
              innerRef={register("rencana1_nc_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
        </Row>
      </Col>
      <Col md='6' style={{ marginTop: '40px' }}>
        <Col>
          <Input
            id="rencana1_nc_1_check"
            type="checkbox"
            name="rencana1_nc_1_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Nc1Check('1');
              } else {
                setRencana1Nc1Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Nc_1_Check === "1"}
            checked={rencana1Nc1Check === '1'}
            innerRef={register("rencana1_nc_1_check") as any}
          />{' '}
          <Label>Kaji ulang status hidrasi</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_nc_2_check"
            type="checkbox"
            name="rencana1_nc_2_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Nc2Check('1');
              } else {
                setRencana1Nc2Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Nc_2_Check === "1"}
            checked={rencana1Nc2Check === '1'}
            innerRef={register("rencana1_nc_2_check") as any}
          />{' '}
          <Label>Lakukan manajemen nutrisi</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_nc_3_check"
            type="checkbox"
            name="rencana1_nc_3_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Nc3Check('1');
              } else {
                setRencana1Nc3Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Nc_3_Check === "1"}
            checked={ rencana1Nc3Check === '1'}
            innerRef={register("rencana1_nc_3_check") as any}
          />{' '}
          <Label>Berikan makan sesuai diet </Label>
          <Input
            style={{ marginTop: '10px' }}
            className="mb-1"
            type="text"
            id="rencana1_nc_3_text"
            name="rencana1_nc_3_text"
            innerRef={register({ required: false })}
            invalid={errors.rencana1_nc_3_text && true}
          />
        </Col>
        <Col>
          <Input
            id="rencana1_nc_4_check"
            type="checkbox"
            name="rencana1_nc_4_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Nc4Check('1');
              } else {
                setRencana1Nc4Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Nc_4_Check === "1"}
            checked={ rencana1Nc4Check === '1'}
            innerRef={register("rencana1_nc_4_check") as any}
          />{' '}
          <Label>Timbang BB / hr </Label>
        </Col>
        <Col>
          <Input
            id="rencana1_nc_5_check"
            type="checkbox"
            name="rencana1_nc_5_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Nc5Check('1');
              } else {
                setRencana1Nc5Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Nc_5_Check === "1"}
            checked={rencana1Nc5Check === '1'}
            innerRef={register("rencana1_nc_5_check") as any}
          />{' '}
          <Label>Hindari makanan yang merangsang</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_nc_6_check"
            type="checkbox"
            name="rencana1_nc_6_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Nc6Check('1');
              } else {
                setRencana1Nc6Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Nc_6_Check === "1"}
            checked={ rencana1Nc6Check === '1'}
            innerRef={register("rencana1_nc_6_check") as any}
          />{' '}
          <Label>Beri makan porsi kecil dan sering</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_nc_7_check"
            type="checkbox"
            name="rencana1_nc_7_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Nc7Check('1');
              } else {
                setRencana1Nc7Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Nc_7_Check === "1"}
            checked={rencana1Nc7Check === '1'}
            innerRef={register("rencana1_nc_7_check") as any}
          />{' '}
          <Label>Lakukan oral hygiene</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_nc_8_check"
            type="checkbox"
            name="rencana1_nc_8_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Nc8Check('1');
              } else {
                setRencana1Nc8Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Nc_8_Check === "1"}
            checked={rencana1Nc8Check === '1'}
            innerRef={register("rencana1_nc_8_check") as any}
          />{' '}
          <Label>Observasi muntah</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_nc_9_check"
            type="checkbox"
            name="rencana1_nc_9_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Nc9Check('1');
              } else {
                setRencana1Nc9Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Nc_9_Check === "1"}
            checked={rencana1Nc9Check === '1'}
            innerRef={register("rencana1_nc_9_check") as any}
          />{' '}
          <Label>Berikan cairan 2000 – 3000 cc/hr</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_nc_10_check"
            type="checkbox"
            name="rencana1_nc_10_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Nc10Check('1');
              } else {
                setRencana1Nc10Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Nc_10_Check === "1"}
            checked={rencana1Nc10Check === '1'}
            innerRef={register("rencana1_nc_10_check") as any}
          />{' '}
          <Label>Berikan kompres hangat / dingin</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_nc_11_check"
            type="checkbox"
            name="rencana1_nc_11_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Nc11Check('1');
              } else {
                setRencana1Nc11Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Nc_11_Check === "1"}
            checked={rencana1Nc11Check === '1'}
            innerRef={register("rencana1_nc_11_check") as any}
          />{' '}
          <Label>Monitor tetesan infus</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_nc_12_check"
            type="checkbox"
            name="rencana1_nc_12_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Nc12Check('1');
              } else {
                setRencana1Nc12Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Nc_12_Check === "1"}
            checked={rencana1Nc12Check === '1'}
            innerRef={register("rencana1_nc_12_check") as any}
          />{' '}
        </Col>
        <Col>
          <Input
            id='rencana1_nc_12_text'
            name='rencana1_nc_12_text'
            type='text'
            innerRef={register()}
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
            id="rencana2_nc_1_check"
            type="checkbox"
            name="rencana2_nc_1_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              handleCheckboxChange(e)
            }}
            defaultChecked={ (data && data?.form?.Rencana2_Nc_1_Check === "1") }
            innerRef={register("rencana2_nc_1_check") as any}
          />{' '}
          <Label>Pasang IVFD</Label>
        </Col>
        <Col>
          <Input
            id="rencana2_nc_2_check"
            type="checkbox"
            name="rencana2_nc_2_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              handleCheckboxChange(e)
            }}
            defaultChecked={ (data && data?.form?.Rencana2_Nc_1_Check === "1") }
            innerRef={register("rencana2_nc_2_check") as any}
          />{' '}
          <Label>Ahli Gizi</Label>
        </Col>
        <Input
          id="rencana2_nc_3_check"
          type="checkbox"
          name="rencana2_nc_3_check"
          className="me-1"
          value="1"
          onChange={(e) => {
            handleCheckboxChange(e)
          }}
          defaultChecked={ (data && data?.form?.Rencana2_Nc_3_Check === "1") }
          innerRef={register("rencana2_nc_3_check") as any}
        />{' '}
        <Input
          style={{ marginTop: '10px' }}
          className="mb-1"
          type="text"
          id="rencana2_nc_3_text"
          name="rencana2_nc_3_text"
          innerRef={register({ required: false })}
          invalid={errors.rencana2_nc_3_text && true}
        />
      </Col>
    </Row>)
}

export default FluidNutritionPlan;
