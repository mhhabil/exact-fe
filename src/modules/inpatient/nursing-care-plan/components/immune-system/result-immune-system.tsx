import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const ImmuneSystemResult = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const { data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [tujuan1SiCheckAll, setTujuan1SiCheckAll] = useState<any>();
  const [tujuan1Si1Check, setTujuan1Si1Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Si_1_Check}`);
  const [tujuan1Si2Check, setTujuan1Si2Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Si_2_Check}`);
  const [tujuan1Si3Check, setTujuan1Si3Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Si_3_Check}`);

  const [tujuan2SiCheckAll, setTujuan2SiCheckAll] = useState<any>();
  const [tujuan2Si1Check, setTujuan2Si1Check] = useState<string | undefined>(`${data?.form?.Tujuan2_Si_1_Check}`);
  const [tujuan2Si2Check, setTujuan2Si2Check] = useState<string | undefined>(`${data?.form?.Tujuan2_Si_2_Check}`);
  const [tujuan2Si3Check, setTujuan2Si3Check] = useState<string | undefined>(`${data?.form?.Tujuan2_Si_3_Check}`);
  const [tujuan2Si4Check, setTujuan2Si4Check] = useState<string | undefined>(`${data?.form?.Tujuan2_Si_4_Check}`);


  useEffect(() => {
    if (tujuan1SiCheckAll === '1') {
      setValue('tujuan1_si_1_check', '1');
      setValue('tujuan1_si_2_check', '1');
      setValue('tujuan1_si_3_check', '1');
      setTujuan1Si1Check('1');
      setTujuan1Si2Check('1');
      setTujuan1Si3Check('1');
    } else if (tujuan1SiCheckAll === '0') {
      setValue('tujuan1_si_1_check', undefined);
      setValue('tujuan1_si_2_check', undefined);
      setValue('tujuan1_si_3_check', undefined);
      setTujuan1Si1Check(undefined);
      setTujuan1Si2Check(undefined);
      setTujuan1Si3Check(undefined);
    }
  }, [tujuan1SiCheckAll]);

  useEffect(() => {
    if (tujuan2SiCheckAll === '1') {
      setValue('tujuan2_si_1_check', '1');
      setValue('tujuan2_si_2_check', '1');
      setValue('tujuan2_si_3_check', '1');
      setValue('tujuan2_si_4_check', '1');
      setTujuan2Si1Check('1');
      setTujuan2Si2Check('1');
      setTujuan2Si3Check('1');
      setTujuan2Si4Check('1');
    } else if (tujuan2SiCheckAll === '0') {
      setValue('tujuan2_si_1_check', undefined);
      setValue('tujuan2_si_2_check', undefined);
      setValue('tujuan2_si_3_check', undefined);
      setValue('tujuan2_si_4_check', undefined);
      setTujuan2Si1Check(undefined);
      setTujuan2Si2Check(undefined);
      setTujuan2Si3Check(undefined);
      setTujuan2Si4Check(undefined);
    }
  }, [tujuan2SiCheckAll]);


  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }


  return (
    <Row>
      <Col md='3'>3. Tujuan Dan Kriteria Hasil</Col>
      <Col md='3'>
        <Row>
          <Col md='12'>
            <Col>
                Infeksi tidak terjadi setelah dilakukan asuhan keperawatan
            </Col>
            <Col>
              <NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan1_si_jam_1'
                {...{ register, errors }}
              />X<NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan1_si_jam_2'
                {...{ register, errors }}
              />
            </Col>
            <Input
              id="tujuan1_si_check"
              type="checkbox"
              name="tujuan1_si_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setTujuan1SiCheckAll('1');
                } else {
                  setTujuan1SiCheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              defaultChecked={data && data.form?.Tujuan1_Si_Check === "1"}
              innerRef={register("tujuan1_si_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
        </Row>
      </Col>
      <Col md='6' style={{ marginTop: '40px' }}>
        <Col>
          <Input
            id="tujuan1_si_1_check"
            type="checkbox"
            name="tujuan1_si_1_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setTujuan1Si1Check('1');
              } else {
                setTujuan1Si1Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Tujuan1_Si_1_Check === "1"}
            checked={ tujuan1Si1Check === '1'}
            innerRef={register("tujuan1_si_1_check") as any}
          />{' '}
          <Label>Tidak ada tanda-tanda infeksi</Label>
        </Col>
        <Col>
          <Input
            id="tujuan1_si_2_check"
            type="checkbox"
            name="tujuan1_si_2_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setTujuan1Si2Check('1');
              } else {
                setTujuan1Si2Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Tujuan1_Si_2_Check === "1"}
            checked={ tujuan1Si2Check === '1'}
            innerRef={register("tujuan1_si_2_check") as any}
          />{' '}
          <Label>Vital sign dalam batas normal</Label>
        </Col>
        <Col>
          <Input
            id="tujuan1_si_3_check"
            type="checkbox"
            name="tujuan1_si_3_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setTujuan1Si3Check('1');
              } else {
                setTujuan1Si3Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Tujuan1_Si_3_Check === "1"}
            checked={tujuan1Si3Check === '1'}
            innerRef={register("tujuan1_si_3_check") as any}
          />{' '}
          <Label>Lain-lain :</Label>
        </Col>
        <Col>
          <Input
            style={{ marginTop: '10px' }}
            className="mb-1"
            type="text"
            id="tujuan1_si_3_text"
            name="tujuan1_si_3_text"
            innerRef={register()}
            invalid={errors.tujuan1_si_3_text && true}
          >
          </Input>
        </Col>
      </Col>

      <Col md='3'></Col>
      <Col md='3'>
        <Row>
          <Col md='12'>
            <Col>
               Mempertahankan normothermia setelah dilakukan asuhan keperawatan
            </Col>
            <Col>
              <NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan2_si_jam_1'
                {...{ register, errors }}
              />X<NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan2_si_jam_2'
                {...{ register, errors }}
              />
            </Col>
            <Input
              id="tujuan2_si_check"
              type="checkbox"
              name="tujuan2_si_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setTujuan2SiCheckAll('1');
                } else {
                  setTujuan2SiCheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              defaultChecked={data && data.form?.Tujuan2_Si_Check === "1"}
              innerRef={register("tujuan2_si_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
          <Col>
            <Input
              id="tujuan3_si_check"
              type="checkbox"
              name="tujuan3_si_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                handleCheckboxChange(e)
              }}
              defaultChecked={data && data?.form?.Tujuan3_Si_Check === "1"}
              innerRef={register("tujuan3_si_check") as any}
            />{' '}

            <Input
              className="mb-1"
              type="text"
              id="tujuan3_si_text"
              name="tujuan3_si_text"
              innerRef={register({ required: false })}
              invalid={errors.tujuan3_si_text && true}
            >
            </Input>
          </Col>
        </Row>
      </Col>
      <Col md='6' style={{ marginTop: '40px' }}>
        <Col>
          <Input
            id="tujuan2_si_1_check"
            type="checkbox"
            name="tujuan2_si_1_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setTujuan2Si1Check('1');
              } else {
                setTujuan2Si1Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Tujuan2_Si_1_Check === "1"}
            checked={tujuan2Si1Check === '1'}
            innerRef={register("tujuan2_si_1_check") as any}
          />{' '}
          <Label>Suhu 36-37 C</Label>
        </Col>
        <Col>
          <Input
            id="tujuan2_si_2_check"
            type="checkbox"
            name="tujuan2_si_2_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setTujuan2Si2Check('1');
              } else {
                setTujuan2Si2Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Tujuan2_Si_2_Check === "1"}
            checked={ tujuan2Si2Check === '1'}
            innerRef={register("tujuan2_si_2_check") as any}
          />{' '}
          <Label>Vital sign dalam batas normal</Label>
        </Col>
        <Col>
          <Input
            id="tujuan2_si_3_check"
            type="checkbox"
            name="tujuan2_si_3_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setTujuan2Si3Check('1');
              } else {
                setTujuan2Si3Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Tujuan2_Si_3_Check === "1"}
            checked={tujuan2Si3Check === '1'}
            innerRef={register("tujuan2_si_3_check") as any}
          />{' '}
          <Label>Tidak mengggigil</Label>
        </Col>

        <Col>
          <Input
            id="tujuan2_si_4_check"
            type="checkbox"
            name="tujuan2_si_4_check"
            className="me-1"
            value="1"
            onChange={(e) => {
              if (e.target.checked) {
                setTujuan2Si4Check('1');
              } else {
                setTujuan2Si4Check(undefined);
              }
              handleCheckboxChange(e)
            }}
            defaultChecked={data && data?.form?.Tujuan2_Si_4_Check === "1"}
            checked={tujuan2Si4Check === '1'}
            innerRef={register("tujuan2_si_4_check") as any}
          />{' '}
          <Label>Tidak Kejang</Label>
        </Col>

      </Col>
    </Row>)
}

export default ImmuneSystemResult;
