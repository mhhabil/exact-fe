import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const FluidNutritionResult = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const { data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [tujuan1NcCheckAll, setTujuan1NcCheckAll] = useState<any>();
  const [tujuan1Nc1Check, setTujuan1Nc1Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Nc_1_Check}`);
  const [tujuan1Nc2Check, setTujuan1Nc2Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Nc_2_Check}`);
  const [tujuan1Nc3Check, setTujuan1Nc3Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Nc_3_Check}`);
  const [tujuan1Nc4Check, setTujuan1Nc4Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Nc_4_Check}`);
  const [tujuan1Nc5Check, setTujuan1Nc5Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Nc_5_Check}`);
  const [tujuan1Nc6Check, setTujuan1Nc6Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Nc_6_Check}`);

  const [tujuan2NcCheckAll, setTujuan2NcCheckAll] = useState<any>();
  const [tujuan2Nc1Check, setTujuan2Nc1Check] = useState<string | undefined>(`${data?.form?.Tujuan2_Nc_1_Check}`);
  const [tujuan2Nc2Check, setTujuan2Nc2Check] = useState<string | undefined>(`${data?.form?.Tujuan2_Nc_2_Check}`);
  const [tujuan2Nc3Check, setTujuan2Nc3Check] = useState<string | undefined>(`${data?.form?.Tujuan2_Nc_3_Check}`);
  const [tujuan2Nc4Check, setTujuan2Nc4Check] = useState<string | undefined>(`${data?.form?.Tujuan2_Nc_4_Check}`);

  const [tujuan3NcCheckAll, setTujuan3NcCheckAll] = useState<any>();
  const [tujuan3Nc1Check, setTujuan3Nc1Check] = useState<string | undefined>(`${data?.form?.Tujuan3_Nc_1_Check}`);
  const [tujuan3Nc2Check, setTujuan3Nc2Check] = useState<string | undefined>(`${data?.form?.Tujuan3_Nc_2_Check}`);
  const [tujuan3Nc3Check, setTujuan3Nc3Check] = useState<string | undefined>(`${data?.form?.Tujuan3_Nc_3_Check}`);


  useEffect(() => {
    if (tujuan1NcCheckAll === '1') {
      setValue('tujuan1_nc_1_check', '1');
      setValue('tujuan1_nc_2_check', '1');
      setValue('tujuan1_nc_3_check', '1');
      setValue('tujuan1_nc_4_check', '1');
      setValue('tujuan1_nc_5_check', '1');
      setValue('tujuan1_nc_6_check', '1');
      setTujuan1Nc1Check('1');
      setTujuan1Nc2Check('1');
      setTujuan1Nc3Check('1');
      setTujuan1Nc4Check('1');
      setTujuan1Nc5Check('1');
      setTujuan1Nc6Check('1');
    } else if (tujuan1NcCheckAll === '0') {
      setValue('tujuan1_nc_1_check', undefined);
      setValue('tujuan1_nc_2_check', undefined);
      setValue('tujuan1_nc_3_check', undefined);
      setValue('tujuan1_nc_4_check', undefined);
      setValue('tujuan1_nc_5_check', undefined);
      setValue('tujuan1_nc_6_check', undefined);
      setTujuan1Nc1Check(undefined);
      setTujuan1Nc2Check(undefined);
      setTujuan1Nc3Check(undefined);
      setTujuan1Nc4Check(undefined);
      setTujuan1Nc5Check(undefined);
      setTujuan1Nc6Check(undefined);
    }
  }, [tujuan1NcCheckAll]);

  useEffect(() => {
    if (tujuan2NcCheckAll === '1') {
      setValue('tujuan2_nc_1_check', '1');
      setValue('tujuan2_nc_2_check', '1');
      setValue('tujuan2_nc_3_check', '1');
      setValue('tujuan2_nc_4_check', '1');
      setTujuan2Nc1Check('1');
      setTujuan2Nc2Check('1');
      setTujuan2Nc3Check('1');
      setTujuan2Nc4Check('1');
    } else if (tujuan2NcCheckAll === '0') {
      setValue('tujuan2_nc_1_check', undefined);
      setValue('tujuan2_nc_2_check', undefined);
      setValue('tujuan2_nc_3_check', undefined);
      setValue('tujuan2_nc_4_check', undefined);
      setTujuan2Nc1Check(undefined);
      setTujuan2Nc2Check(undefined);
      setTujuan2Nc3Check(undefined);
      setTujuan2Nc4Check(undefined);
    }
  }, [tujuan2NcCheckAll]);

  useEffect(() => {
    if (tujuan3NcCheckAll === '1') {
      setValue('tujuan3_nc_1_check', '1');
      setValue('tujuan3_nc_2_check', '1');
      setValue('tujuan3_nc_3_check', '1');
      setTujuan3Nc1Check('1');
      setTujuan3Nc2Check('1');
      setTujuan3Nc3Check('1');
    } else if (tujuan3NcCheckAll === '0') {
      setValue('tujuan3_nc_1_check', undefined);
      setValue('tujuan3_nc_2_check', undefined);
      setValue('tujuan3_nc_3_check', undefined);
      setTujuan3Nc1Check(undefined);
      setTujuan3Nc2Check(undefined);
      setTujuan3Nc3Check(undefined);
    }
  }, [tujuan3NcCheckAll]);

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
                Mempertahankan keseimbangan elektrolit dan volume cairan adekuat setelah dilakukan asuhan keperawatan
            </Col>
            <Col>
              <NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan1_nc_jam_1'
                {...{ register, errors }}
              />X<NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan1_nc_jam_2'
                {...{ register, errors }}
              />
            </Col>
            <Input
              id="tujuan1_nc_check"
              type="checkbox"
              name="tujuan1_nc_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setTujuan1NcCheckAll('1');
                } else {
                  setTujuan1NcCheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              defaultChecked={data && data.form?.Tujuan1_Nc_Check === "1"}
              innerRef={register("tujuan1_nc_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
          <Col md='6'>
            <Col>
              <Input
                id="tujuan1_nc_1_check"
                type="checkbox"
                name="tujuan1_nc_1_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan1Nc1Check('1');
                  } else {
                    setTujuan1Nc1Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan1_Nc_1_Check === "1"}
                checked={tujuan1Nc1Check === '1'}
                innerRef={register("tujuan1_nc_1_check") as any}
              />{' '}
              <Label>Vital sign dalam batas normal</Label>
            </Col>
            <Col>
              <Input
                id="tujuan1_nc_2_check"
                type="checkbox"
                name="tujuan1_nc_2_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan1Nc2Check('1');
                  } else {
                    setTujuan1Nc2Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan1_Nc_2_Check === "1"}
                checked={ tujuan1Nc2Check === '1'}
                innerRef={register("tujuan1_nc_2_check") as any}
              />{' '}
              <Label>Balance cairan seimbang</Label>
            </Col>
            <Col>
              <Input
                id="tujuan1_nc_3_check"
                type="checkbox"
                name="tujuan1_nc_3_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan1Nc3Check('1');
                  } else {
                    setTujuan1Nc3Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan1_Nc_3_Check === "1"}
                checked={ tujuan1Nc3Check === '1'}
                innerRef={register("tujuan1_nc_3_check") as any}
              />{' '}
              <Label>Turgor kulit baik</Label>
            </Col>
            <Col>
              <Input
                id="tujuan1_nc_4_check"
                type="checkbox"
                name="tujuan1_nc_4_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan1Nc4Check('1');
                  } else {
                    setTujuan1Nc4Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan1_Nc_4_Check === "1"}
                checked={ tujuan1Nc4Check === '1'}
                innerRef={register("tujuan1_nc_4_check") as any}
              />{' '}
              <Label>Membran mukosa lembab</Label>
            </Col>
            <Col>
              <Input
                id="tujuan1_nc_5_check"
                type="checkbox"
                name="tujuan1_nc_5_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan1Nc5Check('1');
                  } else {
                    setTujuan1Nc5Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan1_Nc_3_Check === "1"}
                checked={ tujuan1Nc5Check === '1'}
                innerRef={register("tujuan1_nc_5_check") as any}
              />{' '}
              <Label>Kadar elektrolit normal</Label>
            </Col>

            <Col>
              <Input
                id="tujuan1_nc_6_check"
                type="checkbox"
                name="tujuan1_nc_6_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan1Nc6Check('1');
                  } else {
                    setTujuan1Nc6Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan3_Nc_3_Check === "1"}
                checked={ tujuan1Nc6Check === '1'}
                innerRef={register("tujuan1_nc_6_check") as any}
              />{' '}
              <Label>Lain-lain</Label>
              <Input
                style={{ marginTop: '10px' }}
                className="mb-1"
                type="text"
                id="tujuan1_nc_6_text"
                name="tujuan1_nc_6_text"
                innerRef={register({ required: false })}
                invalid={errors.Tujuan1_Nc_6_text && true}
              />
            </Col>

          </Col>
        </Row>

        <Row style={{ borderTop: "2px dashed black" }}>
          <Col md='6'>
            <Col>
                Mempertahankan normothermia setelah dilakukan  asuhan keperawatan
            </Col>
            <Col>
              <NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan2_nc_jam_1'
                {...{ register, errors }}
              />X<NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan2_nc_jam_2'
                {...{ register, errors }}
              />
            </Col>
            <Input
              id="tujuan2_nc_check"
              type="checkbox"
              name="tujuan2_nc_check"
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
              defaultChecked={data && data.form?.Tujuan2_Nc_Check === "1"}
              innerRef={register("tujuan2_nc_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
          <Col md='6'>
            <Col>
              <Input
                id="tujuan2_nc_1_check"
                type="checkbox"
                name="tujuan2_nc_1_check"
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
                defaultChecked={data && data?.form?.Tujuan2_Nc_1_Check === "1"}
                checked={tujuan2Nc1Check === '1'}
                innerRef={register("tujuan2_nc_1_check") as any}
              />{' '}
              <Label>Suhu tubuh normal</Label>
            </Col>
            <Col>
              <Input
                id="tujuan2_nc_2_check"
                type="checkbox"
                name="tujuan2_nc_2_check"
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
                defaultChecked={data && data?.form?.Tujuan2_Nc_2_Check === "1"}
                checked={tujuan2Nc2Check === '1'}
                innerRef={register("tujuan2_nc_2_check") as any}
              />{' '}
              <Label>Vital sign dalam batas normal</Label>
            </Col>
            <Col>
              <Input
                id="tujuan2_nc_3_check"
                type="checkbox"
                name="tujuan2_nc_3_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan2Nc3Check('1');
                  } else {
                    setTujuan2Nc3Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan2_Nc_3_Check === "1"}
                checked={tujuan2Nc3Check === '1'}
                innerRef={register("tujuan2_nc_3_check") as any}
              />{' '}
              <Label>Tidak ada tanda hypothermia / hiperthemia</Label>
            </Col>
            <Col>
              <Input
                id="tujuan2_nc_4_check"
                type="checkbox"
                name="tujuan2_nc_4_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan2Nc4Check('1');
                  } else {
                    setTujuan2Nc4Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan2_Nc_4_Check === "1"}
                checked={tujuan2Nc4Check === '1'}
                innerRef={register("tujuan2_nc_4_check") as any}
              />{' '}
              <Label>Balance cairan seimbang</Label>
            </Col>
          </Col>
        </Row>

        <Row style={{ borderTop: "2px dashed black" }}>
          <Col md='6'>
            <Col>
                Kebutuhan nutrisi terpenuhi setelah dilakukan asuhan keperawatan
            </Col>

            <Col>
              <NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan3_nc_jam_1'
                {...{ register, errors }}
              />X<NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan3_nc_jam_2'
                {...{ register, errors }}
              />
            </Col>

            <Input
              id="tujuan3_nc_check"
              type="checkbox"
              name="tujuan3_nc_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setTujuan3NcCheckAll('1');
                } else {
                  setTujuan3NcCheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              defaultChecked={data && data.form?.Tujuan3_Nc_Check === "1"}
              innerRef={register("tujuan3_nc_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
          <Col md='6'>
            <Col>
              <Input
                id="tujuan3_nc_1_check"
                type="checkbox"
                name="tujuan3_nc_1_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan3Nc1Check('1');
                  } else {
                    setTujuan3Nc1Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan3_Nc_1_Check === "1"}
                checked={tujuan3Nc1Check === '1'}
                innerRef={register("tujuan3_nc_1_check") as any}
              />{' '}
              <Label>Asupan nutrisi adekuat</Label>
            </Col>
            <Col>
              <Input
                id="tujuan3_nc_2_check"
                type="checkbox"
                name="tujuan3_nc_2_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan3Nc2Check('1');
                  } else {
                    setTujuan3Nc2Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan3_Nc_2_Check === "1"}
                checked={ tujuan3Nc2Check === '1'}
                innerRef={register("tujuan3_nc_2_check") as any}
              />{' '}
              <Label>Berat badan meningkat</Label>
            </Col>
            <Col>
              <Input
                id="tujuan3_nc_3_check"
                type="checkbox"
                name="tujuan3_nc_3_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan3Nc3Check('1');
                  } else {
                    setTujuan3Nc3Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan3_Nc_3_Check === "1"}
                checked={ tujuan3Nc3Check === '1'}
                innerRef={register("tujuan3_nc_3_check") as any}
              />{' '}
              <Label>Lain-lain</Label>
              <Input
                style={{ marginTop: '10px' }}
                className="mb-1"
                type="text"
                id="tujuan3_nc_3_text"
                name="tujuan3_nc_3_text"
                innerRef={register({ required: false })}
                invalid={errors.tujuan3_nc_3_text && true}
              />
            </Col>
          </Col>
        </Row>

        <Row style={{ borderTop: "2px dashed black" }}>
          <Col md='6'>
            <Input
              id="tujuan4_nc_check"
              type="checkbox"
              name="tujuan4_nc_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                handleCheckboxChange(e)
              }}
              defaultChecked={data && data?.form?.Tujuan4_Nc_Check === "1"}
              innerRef={register("tujuan4_nc_check") as any}
            />{' '}
            <Col>
                Mencapai status nutrisi yang optimal setelah
            </Col>
          </Col>
        </Row>


      </Col>
    </Row>)
}

export default FluidNutritionResult;
