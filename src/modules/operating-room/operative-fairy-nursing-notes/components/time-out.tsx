import { Col, FormFeedback, FormGroup, Input, Label, Row, TabContent, Table, TabPane } from 'reactstrap';
import { useForm } from 'react-hook-form';
import {useEffect, useState} from 'react';
import { OperativeFairyNursingNotesModel } from '../models';

const TimeOut = (props: { data: OperativeFairyNursingNotesModel, register: any, activeTab: string, processing: boolean, errors: any, setValue: any, defaultPattern: string | undefined, setDirty: any }) => {
  const { data, register, activeTab, errors, processing, setValue, defaultPattern, setDirty } = props;

  const [timeout, setTimeoutInput] = useState<string | undefined>(`${data?.ck_intra_operasi?.Time_Out}`);
  const [ketersediaanIntrumen, setKetersediaanInstrumen] = useState<string | undefined>(`${data?.ck_intra_operasi?.Ketersediaan_Instrumen}`);
  const [ketersediaanProthese, setKetersediaanProthese] = useState<string | undefined>(`${data?.ck_intra_operasi?.Ketersediaan_Prothese}`);

  useEffect(() => {
    if (data && data.ck_intra_operasi) {
      setTimeoutInput(`${data?.ck_intra_operasi?.Time_Out}`);
      setKetersediaanInstrumen(`${data?.ck_intra_operasi?.Ketersediaan_Instrumen}`);
      setKetersediaanProthese(`${data?.ck_intra_operasi?.Ketersediaan_Prothese}`);
    }
  }, [data]);

  useEffect(() => {
    if (defaultPattern === '1') {
      setValue('time_out', '1');
      setTimeoutInput('1');
      setValue('instrument_availability', '1');
      setKetersediaanInstrumen('1');
      setValue('availability_prothesis', '1');
      setKetersediaanProthese('1');
    } else if (defaultPattern === '0') {
      setValue('time_out', undefined);
      setTimeoutInput(undefined);
      setValue('instrument_availability', undefined);
      setKetersediaanInstrumen(undefined);
      setValue('availability_prothesis', undefined);
      setKetersediaanProthese(undefined);
    }
  }, [defaultPattern]);

  const handleCheckboxChange = (val: any) => {
    setValue(`${val.target.name}`, (val.target.checked) ? '1' : '0')
  }

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
    setDirty(true);
  }

  return <>
    <TabContent activeTab={activeTab}>
      <TabPane tabId='1'>
        <FormGroup className='form-group'>
          <h4>Catatan Keperawatan Peri Operatif (Intra Dan Pasca Operatif)</h4>
          <Row>
            <Table style={{ width: '100%' }} borderless>
              <tr>
                <td>
                  <Row>
                    <Col>
                      <Label>1. Time Out</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '73%' }}>
                  <Row>
                    <Col className='mt-1'>
                      <Input
                        id='time-out-1'
                        type="radio"
                        name="time_out"
                        className="me-1"
                        value="0"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTimeoutInput('0');
                        }}
                        checked={timeout === '0'}
                        innerRef={register("time_out")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                    <Col className='mt-1'>
                      <Input
                        id='time-out-0'
                        type="radio"
                        name="time_out"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setTimeoutInput('1');
                        }}
                        checked={timeout === '1'}
                        innerRef={register("time_out")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col>
                      <Input
                        id="time-out-time"
                        type="time"
                        name="time_out_time"
                        defaultValue={(data && data.ck_intra_operasi && data.ck_intra_operasi.Time_Out_Waktu) ? data.ck_intra_operasi.Time_Out_Waktu : ''}
                        innerRef={register({ required: true})}
                      />
                    </Col>
                    <Col></Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row>
                    <Col>
                      <Label style={{ width: '200%' }}>2. Cek Ketersediaan Peralatan dan Fungsinya</Label>
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row>
                    <Col className="d-flex justify-content-center">
                      <Label>A. Instrumen</Label>
                    </Col>
                  </Row>
                </td>

                <td>
                  <Row>
                    <Col className="mt-1">
                      <Input
                        id="instrument-availability"
                        type="radio"
                        name="instrument_availability"
                        className="me-1"
                        value="0"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setKetersediaanInstrumen('0');
                        }}
                        checked={ketersediaanIntrumen === '0'}
                        innerRef={register("instrument_availability")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                    <Col className="mt-1">
                      <Input
                        id="instrument-availability-1"
                        type="radio"
                        name="instrument_availability"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setKetersediaanInstrumen('1');
                        }}
                        checked={ketersediaanIntrumen === '1'}
                        innerRef={register("instrument_availability")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col>
                      <Input
                        id="availability-instrument-time"
                        type="time"
                        name="availability_instrument_time"
                        defaultValue={(data && data.ck_intra_operasi && data.ck_intra_operasi.Ketersediaan_Instrumen_Waktu) ? data.ck_intra_operasi.Ketersediaan_Instrumen_Waktu : ''}
                        innerRef={register({ required: true})}
                      />
                    </Col>
                    <Col></Col>
                  </Row>
                </td>
              </tr>

              <tr>
                <td>
                  <Row>
                    <Col className="d-flex justify-content-center">
                      <Label>B. Prothese / Implant</Label>
                    </Col>
                  </Row>
                </td>

                <td>
                  <Row>
                    <Col className="mt-1">
                      <Input
                        id="availability_prothesis"
                        type="radio"
                        name="availability_prothesis"
                        className="me-1"
                        value="0"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setKetersediaanProthese('0');
                        }}
                        checked={ketersediaanProthese === '0'}
                        innerRef={register("availability_prothesis")}
                      />{' '}
                      <Label>Tidak</Label>
                    </Col>
                    <Col className="mt-1">
                      <Input
                        id="availability_prothesis-1"
                        type="radio"
                        name="availability_prothesis"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          handleRadioChange(e);
                          setKetersediaanProthese('1');
                        }}
                        checked={ketersediaanProthese === '1'}
                        innerRef={register("availability_prothesis")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col className="mt-0">
                      <Input
                        id="availability-prothesis-time"
                        type="time"
                        name="availability_prothesis_time"
                        defaultValue={(data && data.ck_intra_operasi && data.ck_intra_operasi.Ketersediaan_Prothese_Waktu) ? data.ck_intra_operasi.Ketersediaan_Prothese_Waktu : ''}
                        innerRef={register({ required: true})}
                      />
                    </Col>
                    <Col></Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row>
                    <Col className="mt-2">
                      <Label>Mulai Jam</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>
                      <Input
                        id="start-time"
                        type="time"
                        name="start_time"
                        defaultValue={(data && data.ck_intra_operasi && data.ck_intra_operasi.Mulai_Waktu) ? data.ck_intra_operasi.Mulai_Waktu : ''}
                        innerRef={register({ required: true})}
                      />
                    </Col>
                    <Col></Col>
                    <Col></Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row>
                    <Col className="mt-2">
                      <Label>Selasai Jam</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>
                      <Input
                        id="finished-time"
                        type="time"
                        name="finished_time"
                        defaultValue={(data && data.ck_intra_operasi && data.ck_intra_operasi.Selesai_Waktu) ? data.ck_intra_operasi.Selesai_Waktu : ''}
                        innerRef={register({ required: true})}
                      />
                    </Col>
                    <Col></Col>
                    <Col></Col>
                  </Row>
                </td>
              </tr>
            </Table>
          </Row>
        </FormGroup>
      </TabPane>
    </TabContent>
  </>
}

export default TimeOut;
