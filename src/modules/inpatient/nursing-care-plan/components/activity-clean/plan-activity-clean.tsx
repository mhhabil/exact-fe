import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const ActivityCleanResult = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const {  data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [rencana1KdCheckAll, setRencana1KdCheckAll] = useState<any>();
  const [rencana1Kd1Check, setRencana1Kd1Check] = useState<string | undefined>(`${data?.form?.Rencana1_Kd_1_Check}`);
  const [rencana1Kd2Check, setRencana1Kd2Check] = useState<string | undefined>(`${data?.form?.Rencana1_Kd_2_Check}`);
  const [rencana1Kd3Check, setRencana1Kd3Check] = useState<string | undefined>(`${data?.form?.Rencana1_Kd_3_Check}`);
  const [rencana1Kd4Check, setRencana1Kd4Check] = useState<string | undefined>(`${data?.form?.Rencana1_Kd_4_Check}`);
  const [rencana1Kd5Check, setRencana1Kd5Check] = useState<string | undefined>(`${data?.form?.Rencana1_Kd_5_Check}`);
  const [rencana1Kd6Check, setRencana1Kd6Check] = useState<string | undefined>(`${data?.form?.Rencana1_Kd_6_Check}`);
  const [rencana1Kd7Check, setRencana1Kd7Check] = useState<string | undefined>(`${data?.form?.Rencana1_Kd_7_Check}`);


  useEffect(() => {
    if (rencana1KdCheckAll === '1') {
      setValue('rencana1_kd_1_check', '1');
      setValue('rencana1_kd_2_check', '1');
      setValue('rencana1_kd_3_check', '1');
      setValue('rencana1_kd_4_check', '1');
      setValue('rencana1_kd_5_check', '1');
      setValue('rencana1_kd_6_check', '1');
      setValue('rencana1_kd_7_check', '1');
      setRencana1Kd1Check('1');
      setRencana1Kd2Check('1');
      setRencana1Kd3Check('1');
      setRencana1Kd4Check('1');
      setRencana1Kd5Check('1');
      setRencana1Kd6Check('1');
      setRencana1Kd7Check('1');
    } else if (rencana1KdCheckAll === '0') {
      setValue('rencana1_kd_1_check', undefined);
      setValue('rencana1_kd_2_check', undefined);
      setValue('rencana1_kd_3_check', undefined);
      setValue('rencana1_kd_4_check', undefined);
      setValue('rencana1_kd_5_check', undefined);
      setValue('rencana1_kd_6_check', undefined);
      setValue('rencana1_kd_7_check', undefined);
      setRencana1Kd1Check(undefined);
      setRencana1Kd2Check(undefined);
      setRencana1Kd3Check(undefined);
      setRencana1Kd4Check(undefined);
      setRencana1Kd5Check(undefined);
      setRencana1Kd6Check(undefined);
      setRencana1Kd7Check(undefined);

    }
  }, [rencana1KdCheckAll]);


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
              id="rencana1_kd_check"
              type="checkbox"
              name="rencana1_kd_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setRencana1KdCheckAll('1');
                } else {
                  setRencana1KdCheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              //defaultChecked={data && data.form?.Rencana1_Kd_Check === "1"}
              innerRef={register("rencana1_kd_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
        </Row>
      </Col>
      <Col md='6' style={{ marginTop: '40px' }}>
        <Col>
          <Input
            id="rencana1_kd_1_check"
            type="checkbox"
            name="rencana1_kd_1_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Kd1Check('1');
              } else {
                setRencana1Kd1Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Kd_1_Check === "1"}
            checked={rencana1Kd1Check === '1'}
            innerRef={register("rencana1_kd_1_check") as any}
          />{' '}
          <Label>Kaji derajat ketidakmampuan</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_kd_2_check"
            type="checkbox"
            name="rencana1_kd_2_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Kd2Check('1');
              } else {
                setRencana1Kd2Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Kd_2_Check === "1"}
            checked={rencana1Kd2Check === '1'}
            innerRef={register("rencana1_kd_2_check") as any}
          />{' '}
          <Label>Dekatkan alat-alat yang dibutuhkan pasien</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_kd_3_check"
            type="checkbox"
            name="rencana1_kd_3_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Kd3Check('1');
              } else {
                setRencana1Kd3Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Kd_3_Check === "1"}
            checked={ rencana1Kd3Check === '1'}
            innerRef={register("rencana1_kd_3_check") as any}
          />{' '}
          <Label>Bantu pasien saat bergerak</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_kd_4_check"
            type="checkbox"
            name="rencana1_kd_4_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Kd4Check('1');
              } else {
                setRencana1Kd4Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Kd_4_Check === "1"}
            checked={ rencana1Kd4Check === '1'}
            innerRef={register("rencana1_kd_4_check") as any}
          />{' '}
          <Label>Libatkan keluarga dalam pemenuhan kebutuhan</Label>
        </Col>
        <Col>
          <Input
            id="rencana1_kd_5_check"
            type="checkbox"
            name="rencana1_kd_5_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Kd5Check('1');
              } else {
                setRencana1Kd5Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Kd_5_Check === "1"}
            checked={rencana1Kd5Check === '1'}
            innerRef={register("rencana1_kd_5_check") as any}
          />{' '}
          <Label>Pendidikan kesehatan</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_kd_6_check"
            type="checkbox"
            name="rencana1_kd_6_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Kd6Check('1');
              } else {
                setRencana1Kd6Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Kd_6_Check === "1"}
            checked={ rencana1Kd6Check === '1'}
            innerRef={register("rencana1_kd_6_check") as any}
          />{' '}
          <Label>Optimalkan tingkat kemandirian klien</Label>
        </Col>

        <Col>
          <Input
            id="rencana1_kd_7_check"
            type="checkbox"
            name="rencana1_kd_7_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setRencana1Kd7Check('1');
              } else {
                setRencana1Kd7Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Rencana1_Kd_7_Check === "1"}
            checked={rencana1Kd7Check === '1'}
            innerRef={register("rencana1_kd_7_check") as any}
          />{' '}
          <Label>Lain -lain</Label>
          <Input
            style={{ marginTop: '10px' }}
            className="mb-1"
            type="text"
            id="rencana1_kd_7_text"
            name="rencana1_kd_7_text"
            innerRef={register({ required: false })}
            invalid={errors.rencana1_kd_7_text && true}
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
            id="rencana2_kd_1_check"
            type="checkbox"
            name="rencana2_kd_1_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              handleCheckboxChange(e)
            }}
            defaultChecked={ (data && data?.form?.Rencana2_Kd_1_Check === "1") }
            innerRef={register("rencana2_kd_1_check") as any}
          />{' '}
          <Label>Lain lain</Label>
        </Col>

        <Input
          style={{ marginTop: '10px' }}
          className="mb-1"
          type="text"
          id="rencana2_kd_1_text"
          name="rencana2_kd_1_text"
          innerRef={register({ required: false })}
          invalid={errors.rencana2_kd_1_text && true}
        />
      </Col>
    </Row>)
}

export default ActivityCleanResult;
