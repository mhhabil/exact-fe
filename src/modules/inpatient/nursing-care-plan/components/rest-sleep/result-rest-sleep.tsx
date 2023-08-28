import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const RestSleepResult = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const { data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [Tujuan1ItCheckAll, setTujuan1ItCheckAll] = useState<any>();
  const [Tujuan1It1Check, setTujuan1It1Check] = useState<string | undefined>(`${data?.form?.Tujuan1_It_1_Check}`);
  const [Tujuan1It2Check, setTujuan1It2Check] = useState<string | undefined>(`${data?.form?.Tujuan1_It_2_Check}`);
  const [Tujuan1It3Check, setTujuan1It3Check] = useState<string | undefined>(`${data?.form?.Tujuan1_It_3_Check}`);
  const [Tujuan1It4Check, setTujuan1It4Check] = useState<string | undefined>(`${data?.form?.Tujuan1_It_4_Check}`);

  const [tujuan2NcCheckAll, setTujuan2NcCheckAll] = useState<any>();
  const [tujuan2Nc1Check, setTujuan2Nc1Check] = useState<string | undefined>(`${data?.form?.Tujuan2_It_1_Check}`);
  const [tujuan2Nc2Check, setTujuan2Nc2Check] = useState<string | undefined>(`${data?.form?.Tujuan2_It_2_Check}`);

  useEffect(() => {
    if (Tujuan1ItCheckAll === '1') {
      setValue('tujuan1_it_1_check', '1');
      setValue('tujuan1_it_2_check', '1');
      setValue('tujuan1_it_3_check', '1');
      setValue('tujuan1_it_4_check', '1');
      setTujuan1It1Check('1');
      setTujuan1It2Check('1');
      setTujuan1It3Check('1');
      setTujuan1It4Check('1');
    } else if (Tujuan1ItCheckAll === '0') {
      setValue('tujuan1_it_1_check', undefined);
      setValue('tujuan1_it_2_check', undefined);
      setValue('tujuan1_it_3_check', undefined);
      setValue('tujuan1_it_4_check', undefined);
      setTujuan1It1Check(undefined);
      setTujuan1It2Check(undefined);
      setTujuan1It3Check(undefined);
      setTujuan1It4Check(undefined);
    }
  }, [Tujuan1ItCheckAll]);

  useEffect(() => {
    if (tujuan2NcCheckAll === '1') {
      setValue('tujuan2_it_1_check', '1');
      setValue('tujuan2_it_2_check', '1');
      setTujuan2Nc1Check('1');
      setTujuan2Nc2Check('1');
    } else if (tujuan2NcCheckAll === '0') {
      setValue('tujuan2_it_1_check', undefined);
      setValue('tujuan2_it_2_check', undefined);
      setTujuan2Nc1Check(undefined);
      setTujuan2Nc2Check(undefined);
    }
  }, [tujuan2NcCheckAll]);


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
                Pola tidur optimal setelah dilakukan asuhan keperawatan
            </Col>
            <Col>
              <NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan1_it_jam_1'
                {...{ register, errors }}
              />X<NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan1_it_jam_2'
                {...{ register, errors }}
              />
            </Col>
            <Input
              id="tujuan1_it_check"
              type="checkbox"
              name="tujuan1_it_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setTujuan1ItCheckAll('1');
                } else {
                  setTujuan1ItCheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              defaultChecked={data && data.form?.Tujuan1_It_Check === "1"}
              innerRef={register("tujuan1_it_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
          <Col md='6'>
            <Col>
              <Input
                id="tujuan1_it_1_check"
                type="checkbox"
                name="tujuan1_it_1_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan1It1Check('1');
                  } else {
                    setTujuan1It1Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan1_It_1_Check === "1"}
                checked={Tujuan1It1Check === '1'}
                innerRef={register("tujuan1_it_1_check") as any}
              />{' '}
              <Label>Jumlah jam tidur 6 – 8 jam/24 jam</Label>
            </Col>
            <Col>
              <Input
                id="tujuan1_it_2_check"
                type="checkbox"
                name="tujuan1_it_2_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan1It2Check('1');
                  } else {
                    setTujuan1It2Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan1_It_2_Check === "1"}
                checked={ Tujuan1It2Check === '1'}
                innerRef={register("tujuan1_it_2_check") as any}
              />{' '}
              <Label>Klien mudah memulai tidur</Label>
            </Col>
            <Col>
              <Input
                id="tujuan1_it_3_check"
                type="checkbox"
                name="tujuan1_it_3_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan1It3Check('1');
                  } else {
                    setTujuan1It3Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan1_It_3_Check === "1"}
                checked={ Tujuan1It3Check === '1'}
                innerRef={register("tujuan1_it_3_check") as any}
              />{' '}
              <Label>Tidak sering terbangun saat tidur</Label>
            </Col>
            <Col>
              <Input
                id="tujuan1_it_4_check"
                type="checkbox"
                name="tujuan1_it_4_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan1It4Check('1');
                  } else {
                    setTujuan1It4Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan1_It_4_Check === "1"}
                checked={ Tujuan1It4Check === '1'}
                innerRef={register("tujuan1_it_4_check") as any}
              />{' '}
              <Label>Bangun tidur terasa segar</Label>
            </Col>


          </Col>
        </Row>

        <Row style={{ borderTop: "2px dashed black" }}>
          <Col md='6'>
            <Col>
               Tidur cukup setelah dilakukan asuhan keperawatan
            </Col>
            <Col>
              <NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan2_it_jam_1'
                {...{ register, errors }}
              />X<NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan2_it_jam_2'
                {...{ register, errors }}
              />
            </Col>
            <Input
              id="tujuan2_it_check"
              type="checkbox"
              name="tujuan2_it_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setTujuan2NcCheckAll('1');
                } else {
                  setTujuan2NcCheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              defaultChecked={data && data.form?.Tujuan2_It_Check === "1"}
              innerRef={register("tujuan2_it_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
          <Col md='6'>
            <Col>
              <Input
                id="tujuan2_it_1_check"
                type="checkbox"
                name="tujuan2_it_1_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan2Nc1Check('1');
                  } else {
                    setTujuan2Nc1Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan2_It_1_Check === "1"}
                checked={tujuan2Nc1Check === '1'}
                innerRef={register("tujuan2_it_1_check") as any}
              />{' '}
              <Label>Jumlah jam tidur 6 – 8 jam / 24 jam </Label>
            </Col>
            <Col>
              <Input
                id="tujuan2_it_2_check"
                type="checkbox"
                name="tujuan2_it_2_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan2Nc2Check('1');
                  } else {
                    setTujuan2Nc2Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan2_It_2_Check === "1"}
                checked={tujuan2Nc2Check === '1'}
                innerRef={register("tujuan2_it_2_check") as any}
              />{' '}
              <Label>Lain - lain</Label>
              <Input
                style={{ marginTop: '10px' }}
                className="mb-1"
                type="text"
                id="tujuan2_it_2_text"
                name="tujuan2_it_2_text"
                innerRef={register({ required: false })}
                invalid={errors.tujuan2_it_2_text && true}
              />
            </Col>

          </Col>
        </Row>


      </Col>
    </Row>)
}

export default RestSleepResult;
