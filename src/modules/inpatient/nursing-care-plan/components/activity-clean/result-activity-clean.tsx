import { Col, FormGroup, Input,  Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { NursingCarePlan } from "../../models/nursing-care-plan.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const ActivityCleanResult = (props: { data: NursingCarePlan,  register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const { data, register, activeTab, errors, processing, setValue} = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);

  const [tujuan1KdCheckAll, setTujuan1KdCheckAll] = useState<any>();
  const [tujuan1Kd1Check, setTujuan1Kd1Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Kd_1_Check}`);
  const [tujuan1Kd2Check, setTujuan1Kd2Check] = useState<string | undefined>(`${data?.form?.Tujuan1_Kd_2_Check}`);

  const [tujuan2KdCheckAll, setTujuan2KdCheckAll] = useState<any>();
  const [tujuan2Kd1Check, setTujuan2Kd1Check] = useState<string | undefined>(`${data?.form?.Tujuan2_Kd_1_Check}`);


  useEffect(() => {
    if (tujuan1KdCheckAll === '1') {
      setValue('tujuan1_kd_1_check', '1');
      setValue('tujuan1_kd_2_check', '1');
      setTujuan1Kd1Check('1');
      setTujuan1Kd2Check('1');

    } else if (tujuan1KdCheckAll === '0') {
      setValue('tujuan1_kd_1_check', undefined);
      setValue('tujuan1_kd_2_check', undefined);
      setTujuan1Kd1Check(undefined);
      setTujuan1Kd2Check(undefined);
    }
  }, [tujuan1KdCheckAll]);

  useEffect(() => {
    if (tujuan2KdCheckAll === '1') {
      setValue('tujuan2_kd_1_check', '1');
      setTujuan2Kd1Check('1');
    } else if (tujuan2KdCheckAll === '0') {
      setValue('tujuan2_kd_1_check', undefined);
      setTujuan2Kd1Check(undefined);
    }
  }, [tujuan2KdCheckAll]);


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
                Perawatan diri optimal setelah dilakukan asuhan  keperawatan
            </Col>
            <Col>
              <NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan1_kd_jam_1'
                {...{ register, errors }}
              />X<NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan1_kd_jam_2'
                {...{ register, errors }}
              />
            </Col>
            <Input
              id="tujuan1_kd_check"
              type="checkbox"
              name="tujuan1_kd_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setTujuan1KdCheckAll('1');
                } else {
                  setTujuan1KdCheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              defaultChecked={data && data.form?.Tujuan1_Kd_Check === "1"}
              innerRef={register("tujuan1_kd_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
          <Col md='6'>
            <Col>
              <Input
                id="tujuan1_kd_1_check"
                type="checkbox"
                name="tujuan1_kd_1_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan1Kd1Check('1');
                  } else {
                    setTujuan1Kd1Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan1_Kd_1_Check === "1"}
                checked={tujuan1Kd1Check === '1'}
                innerRef={register("tujuan1_kd_1_check") as any}
              />{' '}
              <Label>Peningkatan kemampuan perawatan diri</Label>
            </Col>
            <Col>
              <Input
                id="tujuan1_kd_2_check"
                type="checkbox"
                name="tujuan1_kd_2_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan1Kd2Check('1');
                  } else {
                    setTujuan1Kd2Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan1_Kd_2_Check === "1"}
                checked={ tujuan1Kd2Check === '1'}
                innerRef={register("tujuan1_kd_2_check") as any}
              />{' '}
              <Label>Berpartisipasi dalam perawatan diri</Label>
            </Col>
          </Col>
        </Row>

        <Row style={{ borderTop: "2px dashed black" }}>
          <Col md='6'>
            <Col>
                Dapat melakukan aktifitas hidup harian setelah dilakukan asuhan keperawatan
            </Col>
            <Col>
              <NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan2_kd_jam_1'
                {...{ register, errors }}
              />X<NumberInput
                label=''
                placeholder='0'
                step='1'
                name='tujuan2_kd_jam_2'
                {...{ register, errors }}
              />
            </Col>
            <Input
              id="tujuan2_kd_check"
              type="checkbox"
              name="tujuan2_kd_check"
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setTujuan2KdCheckAll('1');
                } else {
                  setTujuan2KdCheckAll('0');
                }
                handleCheckboxChange(e)
              }}
              defaultChecked={data && data.form?.Tujuan2_Kd_Check === "1"}
              innerRef={register("tujuan2_kd_check") as any}
            />{' '}
            <Label>Pilih Semua</Label>
          </Col>
          <Col md='6'>
            <Col>
              <Input
                id="tujuan2_kd_1_check"
                type="checkbox"
                name="tujuan2_kd_1_check"
                className="me-1"
                value="1"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTujuan2Kd1Check('1');
                  } else {
                    setTujuan2Kd1Check(undefined);
                  }
                  handleCheckboxChange(e)
                }}
                defaultChecked={data && data?.form?.Tujuan2_Kd_1_Check === "1"}
                checked={tujuan2Kd1Check === '1'}
                innerRef={register("tujuan2_kd_1_check") as any}
              />{' '}
              <Label>Lain - lain</Label>
              <Input
                style={{ marginTop: '10px' }}
                className="mb-1"
                type="text"
                id="tujuan2_kd_1_text"
                name="tujuan2_kd_1_text"
                innerRef={register({ required: false })}
                invalid={errors.tujuan2_kd_1_text && true}
              />

            </Col>

          </Col>
        </Row>


      </Col>
    </Row>)
}

export default ActivityCleanResult;
