import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const ImmuneSystemResult = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const {  data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [rencana1SiCheckAll, setRencana1SiCheckAll] = useState<any>();
  const [rencana1Si1Check, setRencana1Si1Check] = useState<string | undefined>(`${data?.form?.Rencana1_Si_1_Check}`);
  const [rencana1Si2Check, setRencana1Si2Check] = useState<string | undefined>(`${data?.form?.Rencana1_Si_2_Check}`);
  const [rencana1Si3Check, setRencana1Si3Check] = useState<string | undefined>(`${data?.form?.Rencana1_Si_3_Check}`);
  const [rencana1Si4Check, setRencana1Si4Check] = useState<string | undefined>(`${data?.form?.Rencana1_Si_4_Check}`);
  const [rencana1Si5Check, setRencana1Si5Check] = useState<string | undefined>(`${data?.form?.Rencana1_Si_5_Check}`);
  const [rencana1Si6Check, setRencana1Si6Check] = useState<string | undefined>(`${data?.form?.Rencana1_Si_6_Check}`);
  const [rencana1Si7Check, setRencana1Si7Check] = useState<string | undefined>(`${data?.form?.Rencana1_Si_7_Check}`);
  const [rencana1Si8Check, setRencana1Si8Check] = useState<string | undefined>(`${data?.form?.Rencana1_Si_8_Check}`);


  useEffect(() => {
    if (rencana1SiCheckAll === '1') {
      setValue('rencana1_si_1_check', '1');
      setValue('rencana1_si_2_check', '1');
      setValue('rencana1_si_3_check', '1');
      setValue('rencana1_si_4_check', '1');
      setValue('rencana1_si_5_check', '1');
      setValue('rencana1_si_6_check', '1');
      setValue('rencana1_si_7_check', '1');
      setValue('rencana1_si_8_check', '1');
      setRencana1Si1Check('1');
      setRencana1Si2Check('1');
      setRencana1Si3Check('1');
      setRencana1Si4Check('1');
      setRencana1Si5Check('1');
      setRencana1Si6Check('1');
      setRencana1Si7Check('1');
      setRencana1Si8Check('1');
    } else if (rencana1SiCheckAll === '0') {
      setValue('rencana1_si_1_check', undefined);
      setValue('rencana1_si_2_check', undefined);
      setValue('rencana1_si_3_check', undefined);
      setValue('rencana1_si_4_check', undefined);
      setValue('rencana1_si_5_check', undefined);
      setValue('rencana1_si_6_check', undefined);
      setValue('rencana1_si_7_check', undefined);
      setValue('rencana1_si_8_check', undefined);
      setRencana1Si1Check(undefined);
      setRencana1Si2Check(undefined);
      setRencana1Si3Check(undefined);
      setRencana1Si4Check(undefined);
      setRencana1Si5Check(undefined);
      setRencana1Si6Check(undefined);
      setRencana1Si7Check(undefined);
      setRencana1Si8Check(undefined);
    }
  }, [rencana1SiCheckAll]);


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
              id="rencana1_si_check"
              type="checkbox"
              name="rencana1_si_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setRencana1SiCheckAll('1');
                } else {
                  setRencana1SiCheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              defaultChecked={data && data.form?.Rencana1_Si_Check === "1"}
              innerRef={register("rencana1_si_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
        </Row>
      </Col>
      <Col md='6' style={{ marginTop: '40px' }}>
        <Col>
          <Input
            id="rencana1_si_1_check"
            type="checkbox"
            name="rencana1_si_1_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Si1Check('1');
              } else {
                setRencana1Si1Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Si_1_Check === "1"}
            checked={rencana1Si1Check === '1'}
            innerRef={register("rencana1_si_1_check") as any}
          />{' '}
          <Label>Kaji Tanda Tanda Infeksi / sepsis</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_si_2_check"
            type="checkbox"
            name="rencana1_si_2_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Si2Check('1');
              } else {
                setRencana1Si2Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Si_2_Check === "1"}
            checked={rencana1Si2Check === '1'}
            innerRef={register("rencana1_si_2_check") as any}
          />{' '}
          <Label>Monitor vital sign</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_si_3_check"
            type="checkbox"
            name="rencana1_si_3_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Si3Check('1');
              } else {
                setRencana1Si3Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Si_3_Check === "1"}
            checked={ rencana1Si3Check === '1'}
            innerRef={register("rencana1_si_3_check") as any}
          />{' '}
          <Label>Lakukan tehnik aseptik - antiseptik</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_si_4_check"
            type="checkbox"
            name="rencana1_si_4_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Si4Check('1');
              } else {
                setRencana1Si4Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Si_4_Check === "1"}
            checked={ rencana1Si4Check === '1'}
            innerRef={register("rencana1_si_4_check") as any}
          />{' '}
          <Label>Manajemen Nutrisi Cairan Dan Elektrolit</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_si_5_check"
            type="checkbox"
            name="rencana1_si_5_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Si5Check('1');
              } else {
                setRencana1Si5Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Si_5_Check === "1"}
            checked={rencana1Si5Check === '1'}
            innerRef={register("rencana1_si_5_check") as any}
          />{' '}
          <Label>Jaga personal higiene</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_si_6_check"
            type="checkbox"
            name="rencana1_si_6_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Si6Check('1');
              } else {
                setRencana1Si6Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Si_6_Check === "1"}
            checked={ rencana1Si6Check === '1'}
            innerRef={register("rencana1_si_6_check") as any}
          />{' '}
          <Label>Manajemen lingkungan</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_si_7_check"
            type="checkbox"
            name="rencana1_si_7_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Si7Check('1');
              } else {
                setRencana1Si7Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Si_7_Check === "1"}
            checked={rencana1Si7Check === '1'}
            innerRef={register("rencana1_si_7_check") as any}
          />{' '}
          <Label>Manajemen obat</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_si_8_check"
            type="checkbox"
            name="rencana1_si_8_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Si8Check('1');
              } else {
                setRencana1Si8Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Si_8_Check === "1"}
            checked={rencana1Si8Check === '1'}
            innerRef={register("rencana1_si_8_check") as any}
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
        <Input
          id="rencana2_si_1_check"
          type="checkbox"
          name="rencana2_si_1_check"
          className="me-1"
          value="1"
          onChange={(e) => handleCheckboxChange(e)}
          defaultChecked={ (data && data?.form?.Rencana2_Si_1_Check === "1") }
          innerRef={register("rencana2_si_1_check") as any}
        />{' '}
        <Input
          style={{ marginTop: '10px' }}
          className="mb-1"
          type="text"
          id="rencana2_si_1_text"
          name="rencana2_si_1_text"
          innerRef={register({ required: false })}
          invalid={errors.rencana2_si_1_text && true}
        />
        <Input
          id="rencana2_si_2_check"
          type="checkbox"
          name="rencana2_si_2_check"
          className="me-1"
          value="1"
          onChange={(e) => {
            handleCheckboxChange(e)
          }}
          defaultChecked={ (data && data?.form?.Rencana2_Si_1_Check === "1") }
          innerRef={register("rencana2_si_2_check") as any}
        />{' '}
        <Input
          style={{ marginTop: '10px' }}
          className="mb-1"
          type="text"
          id="rencana2_si_2_text"
          name="rencana2_si_2_text"
          innerRef={register({ required: false })}
          invalid={errors.rencana2_si_2_text && true}
        />
        <Input
          id="rencana2_si_3_check"
          type="checkbox"
          name="rencana2_si_3_check"
          className="me-1"
          value="1"
          onChange={(e) => {
            handleCheckboxChange(e)
          }}
          defaultChecked={ (data && data?.form?.Rencana2_Si_3_Check === "1") }
          innerRef={register("rencana2_si_3_check") as any}
        />{' '}
        <Input
          style={{ marginTop: '10px' }}
          className="mb-1"
          type="text"
          id="rencana2_si_3_text"
          name="rencana2_si_3_text"
          innerRef={register({ required: false })}
          invalid={errors.rencana2_si_3_text && true}
        />
      </Col>
    </Row>)
}

export default ImmuneSystemResult;
