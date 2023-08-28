import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const ImmuneSystem2Result = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const { data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [tujuan1Si1_CheckAll, setTujuan1Si1_CheckAll] = useState<any>();
  const [tujuan1Si1_1Check, setTujuan1Si1_1Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Si1_1_Check}`);
  const [tujuan1Si1_2Check, setTujuan1Si1_2Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Si1_2_Check}`);
  const [tujuan1Si1_3Check, setTujuan1Si1_3Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Si1_3_Check}`);

  useEffect(() => {
    if (tujuan1Si1_CheckAll === '1') {
      setValue('tujuan1_si1_1_check', '1');
      setValue('tujuan1_si1_2_check', '1');
      setValue('tujuan1_si1_3_check', '1');

      setTujuan1Si1_1Check('1');
      setTujuan1Si1_2Check('1');
      setTujuan1Si1_3Check('1');

    } else if (tujuan1Si1_CheckAll === '0') {
      setValue('tujuan1_si1_1_check', undefined);
      setValue('tujuan1_si1_2_check', undefined);
      setValue('tujuan1_si1_3_check', undefined);

      setTujuan1Si1_1Check(undefined);
      setTujuan1Si1_2Check(undefined);
      setTujuan1Si1_3Check(undefined);

    }
  }, [tujuan1Si1_CheckAll]);


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
                Infeksi menurun setelah dilakukan asuhan keperawatan
            </Col>
            <Col>
              <NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan1_si1_jam_1'
                {...{ register, errors }}
              />X<NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan1_si1_jam_2'
                {...{ register, errors }}
              />
            </Col>
            <Input
              id="tujuan1_si1_check"
              type="checkbox"
              name="tujuan1_si1_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setTujuan1Si1_CheckAll('1');
                } else {
                  setTujuan1Si1_CheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              defaultChecked={data && data.form?.Tujuan1_Si1_Check === "1"}
              innerRef={register("tujuan1_si1_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
          <Col md='6'>
            <Col>
              <Input
                id="tujuan1_si1_1_check"
                type="checkbox"
                name="tujuan1_si1_1_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan1Si1_1Check('1');
                  } else {
                    setTujuan1Si1_1Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan1_Si1_1_Check === "1"}
                checked={tujuan1Si1_1Check === '1'}
                innerRef={register("tujuan1_si1_1_check") as any}
              />{' '}
              <Label>Tanda-tanda infeksi menurun</Label>
            </Col>
            <Col>
              <Input
                id="tujuan1_si1_2_check"
                type="checkbox"
                name="tujuan1_si1_2_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan1Si1_2Check('1');
                  } else {
                    setTujuan1Si1_2Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan1_Si1_2_Check === "1"}
                checked={ tujuan1Si1_2Check === '1'}
                innerRef={register("tujuan1_si1_2_check") as any}
              />{' '}
              <Label>Vital sign dalam batas normal</Label>
            </Col>
            <Col>
              <Input
                id="tujuan1_si1_3_check"
                type="checkbox"
                name="tujuan1_si1_3_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan1Si1_3Check('1');
                  } else {
                    setTujuan1Si1_3Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan1_Si1_3_Check === "1"}
                checked={ tujuan1Si1_3Check === '1'}
                innerRef={register("tujuan1_si1_3_check") as any}
              />{' '}
              <Label>Lain-lain</Label>
              <Input
                style={{ marginTop: '10px' }}
                className="mb-1"
                type="text"
                id="tujuan1_si1_3_text"
                name="tujuan1_si1_3_text"
                innerRef={register({ required: false })}
                invalid={errors.tujuan1_si1_3_text && true}
              />
            </Col>

          </Col>
        </Row>


      </Col>
    </Row>)
}

export default ImmuneSystem2Result;
