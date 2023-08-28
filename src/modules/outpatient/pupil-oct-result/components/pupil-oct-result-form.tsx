import { Button, Col, Form, Input, Label, Row, Table } from 'reactstrap';
import { DateTimeInput, TextInput } from "@src/shared/input";
import { PupilOCTResultModel, TreatmentNumber } from "../models/pupil-oct-result.model";
import { useEffect, useState } from "react";
import ToolInspection from "@src/shared/tool-inspection/tool-inspection";
import { UpdatePupilOCTResultRequest } from '../requests';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';

const PupilOCTResultForm = (props: { data: PupilOCTResultModel }) => {
  const { data } = props;
  const [treatmentNumber, setTreatmentNumber] = useState<TreatmentNumber | undefined>(undefined)
  const treatment = (data && data.no_berobat && data.no_berobat[0] && data.no_berobat[0].ID_Berobat) ? data.no_berobat[0].ID_Berobat : '';
  const [number, setNumber] = useState<string>(treatment)
  const [odRnfl, setOdRnfl] = useState<string | undefined>((data && data.form && data.form[`${number}`] && data.form[`${number}`].Od_Rnfl) ? data.form[`${number}`].Od_Rnfl : undefined)
  const [osRnfl, setOsRnfl] = useState<string | undefined>((data && data.form && data.form[`${number}`] && data.form[`${number}`].Os_Rnfl) ? data.form[`${number}`].Os_Rnfl : undefined)
  const [odVertical, setOdVertical] = useState<string | undefined>((data && data.form && data.form[`${number}`] && data.form[`${number}`].Od_Cd_Vertical) ? data.form[`${number}`].Od_Cd_Vertical : undefined)
  const [osVertical, setOsVertical] = useState<string | undefined>((data && data.form && data.form[`${number}`] && data.form[`${number}`].Os_Cd_Vertical) ? data.form[`${number}`].Os_Cd_Vertical : undefined)

  useEffect(() => {
    setNumber(treatment);
  }, [data])

  const { register, handleSubmit, errors, setValue, getValues, control } = useForm({
    mode: 'onChange',
    resolver: yupResolver(UpdatePupilOCTResultRequest.schema()),
    defaultValues: {
      treatment_number_list: (data && data.no_berobat && data.no_berobat[0] && data.no_berobat[0].ID_Berobat) ? data.no_berobat[0].ID_Berobat : '',
      od_rnfl_normal_text: (data && number && data.form && data.form[`${number}`] && data.form[`${number}`].Od_Rnfl_Normal_Text) ? data.form[`${number}`].Od_Rnfl_Normal_Text : '',
      od_rnfl_menipis_text: (data && number && data.form && data.form[`${number}`] && data.form[`${number}`].Od_Rnfl_Menipis_Text) ? data.form[`${number}`].Od_Rnfl_Menipis_Text : '',
      od_rnfl: (data && number && data.form && data.form[`${number}`] && data.form[`${number}`].Od_Rnfl) ? data.form[`${number}`].Od_Rnfl : '',
      od_rnfl_menebal_text: (data && number && data.form && data.form[`${number}`] && data.form[`${number}`].Od_Rnfl_Menebal_Text) ? data.form[`${number}`].Od_Rnfl_Menebal_Text : '',
      od_cd_vertical_normal_text: (data && number && data.form && data.form[`${number}`] && data.form[`${number}`].Od_Cd_Vertical_Normal_Text) ? data.form[`${number}`].Od_Cd_Vertical_Normal_Text : '',
      od_cd_vertical: (data && number && data.form && data.form[`${number}`] && data.form[`${number}`].Od_Cd_Vertical) ? data.form[`${number}`].Od_Cd_Vertical : '',
      od_cd_vertical_upnormal_text: (data && number && data.form && data.form[`${number}`] && data.form[`${number}`].Od_Cd_Vertical_Upnormal_Text) ? data.form[`${number}`].Od_Cd_Vertical_Upnormal_Text : '',
      os_rnfl_normal_text: (data && number && data.form && data.form[`${number}`] && data.form[`${number}`].Os_Rnfl_Normal_Text) ? data.form[`${number}`].Os_Rnfl_Normal_Text : '',
      os_rnfl_menipis_text: (data && number && data.form && data.form[`${number}`] && data.form[`${number}`].Os_Rnfl_Menipis_Text) ? data.form[`${number}`].Os_Rnfl_Menipis_Text : '',
      os_rnfl: (data && number && data.form && data.form[`${number}`] && data.form[`${number}`].Os_Rnfl) ? data.form[`${number}`].Os_Rnfl : '',
      os_rnfl_menebal_text: (data && number && data.form && data.form[`${number}`] && data.form[`${number}`].Os_Rnfl_Menebal_Text) ? data.form[`${number}`].Os_Rnfl_Menebal_Text : '',
      os_cd_vertical_normal_text: (data && number && data.form && data.form[`${number}`] && data.form[`${number}`].Os_Cd_Vertical_Normal_Text) ? data.form[`${number}`].Os_Cd_Vertical_Normal_Text : '',
      os_cd_vertical: (data && number && data.form && data.form[`${number}`] && data.form[`${number}`].Os_Cd_Vertical) ? data.form[`${number}`].Os_Cd_Vertical : '',
      os_cd_vertical_upnormal_text: (data && number && data.form && data.form[`${number}`] && data.form[`${number}`].Os_Cd_Vertical_Upnormal_Text) ? data.form[`${number}`].Os_Cd_Vertical_Upnormal_Text : '',
      summary: (data && number && data.form && data.form[`${number}`] && data.form[`${number}`].Kesimpulan) ? data.form[`${number}`].Kesimpulan : '',
      signature_date: (data && number && data.form && data.form[`${number}`] && data.form[`${number}`].TTD_Tanggal) ? data.form[`${number}`].TTD_Tanggal : '',
    },
  })

  const handleChangeOdRnfl = (e: any) => {
    setOdRnfl(e.target.value)
    setValue('od_rnfl', e.target.value)
  }
  const handleChangeOsRnfl = (e: any) => {
    setOsRnfl(e.target.value)
    setValue('os_rnfl', e.target.value)
  }

  const handleChangeOdVertical = (e: any) => {
    setOdVertical(e.target.value)
    setValue('od_cd_vertical', e.target.value)
  }
  const handleChangeOsVertical = (e: any) => {
    setOsVertical(e.target.value)
    setValue('os_cd_vertical', e.target.value)
  }

  const handleSubmitForm = () => {
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <ToolInspection
        name='treatment_number_list'
        data={(data && data.no_berobat && data.no_berobat[0]) ? data.no_berobat[0] : undefined}
        {...{register, errors}}
      />
      <Table borderless style={{ width: '100%' }}>
        <thead>
          <tr style={{ textAlign: 'center' }}>
            <td>
              <b>OD</b>
            </td>
            <td>
              <b>OS</b>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Row>
                <b>RNFL (Retinal Nerve Fiber Layer)</b>
              </Row>
              <Row style={{ marginTop: '15px' }}>
                <Table>
                  <tr>
                    <td>
                      <div className="me-1">
                        <Input
                          id="od-rnfl"
                          type="radio"
                          name="od_rnfl"
                          value="1"
                          defaultChecked={(data && data.form && data.form[`${number}`] && data.form[`${number}`].Od_Rnfl && data.form[`${number}`].Od_Rnfl === '1') ? data.form[`${number}`].Od_Rnfl === '1' : false}
                          onChange={(e) => handleChangeOdRnfl(e)}
                          innerRef={register({ required: true })}
                          invalid={errors.od_rnfl && true}
                        />
                        <Label style={{ marginLeft: '10px' }}>Normal</Label>
                      </div>
                    </td>
                    <td>
                      <Row>
                        <Col>
                          <Input
                            id="od-rnfl-normal-text"
                            type="text"
                            style={{ width: '300px' }}
                            name="od_rnfl_normal_text"
                            innerRef={register({ required: true })}
                            invalid={errors.od_rnfl_normal_text && true}
                            readOnly={(odRnfl) ? odRnfl !== '1' : undefined}
                          />
                        </Col>
                        <Col>
                          <Label>(%)</Label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="me-1">
                        <Input
                          id="od-rnfl-2"
                          type="radio"
                          name="od_rnfl"
                          value="2"
                          defaultChecked={(data && data.form && data.form[`${number}`] && data.form[`${number}`].Od_Rnfl && data.form[`${number}`].Od_Rnfl === '2') ? data.form[`${number}`].Od_Rnfl === '2' : false}
                          onChange={(e) => handleChangeOdRnfl(e)}
                          innerRef={register({ required: true })}
                          invalid={errors.od_rnfl && true}
                        />
                        <Label style={{ marginLeft: '10px' }}>Menipis</Label>
                      </div>
                    </td>
                    <td>
                      <Row>
                        <Col>
                          <Input
                            id="od-rnfl-menipis-text"
                            type="text"
                            style={{ width: '300px' }}
                            name="od_rnfl_menipis_text"
                            innerRef={register({ required: true })}
                            invalid={errors.od_rnfl_menipis_text && true}
                            readOnly={(odRnfl) ? odRnfl !== '2' : undefined}
                          />
                        </Col>
                        <Col>
                          <Label>(%)</Label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="me-1">
                        <Input
                          id="od-rnfl-3"
                          type="radio"
                          name="od_rnfl"
                          value="3"
                          defaultChecked={(data && data.form && data.form[`${number}`] && data.form[`${number}`].Od_Rnfl && data.form[`${number}`].Od_Rnfl === '3') ? data.form[`${number}`].Od_Rnfl === '3' : false}
                          onChange={(e) => handleChangeOdRnfl(e)}
                          innerRef={register({ required: true })}
                          invalid={errors.od_rnfl && true}
                        />
                        <Label style={{ marginLeft: '10px' }}>Menebal</Label>
                      </div>
                    </td>
                    <td>
                      <Row>
                        <Col>
                          <Input
                            id="od-rnfl-menebal-text"
                            type="text"
                            style={{ width: '300px' }}
                            name="od_rnfl_menebal_text"
                            innerRef={register({ required: true })}
                            invalid={errors.od_rnfl_menebal_text && true}
                            readOnly={(odRnfl) ? odRnfl !== '3' : undefined}
                          />
                        </Col>
                        <Col>
                          <Label>(%)</Label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </Table>
              </Row>
            </td>
            <td>
              <Row>
                <b>RNFL (Retinal Nerve Fiber Layer)</b>
              </Row>
              <Row style={{ marginTop: '15px' }}>
                <Table>
                  <tr>
                    <td>
                      <div className="me-1">
                        <Input
                          id="os-rnfl"
                          type="radio"
                          name="os_rnfl"
                          value="1"
                          defaultChecked={(data && data.form && data.form[`${number}`] && data.form[`${number}`].Os_Rnfl && data.form[`${number}`].Os_Rnfl === '1') ? data.form[`${number}`].Os_Rnfl === '1' : false}
                          onChange={(e) => handleChangeOsRnfl(e)}
                          innerRef={register({ required: true })}
                          invalid={errors.os_rnfl && true}
                        />
                        <Label style={{ marginLeft: '10px' }}>Normal</Label>
                      </div>
                    </td>
                    <td>
                      <Row>
                        <Col>
                          <Input
                            id="os-rnfl-normal-text"
                            type="text"
                            style={{ width: '300px' }}
                            name="os_rnfl_normal_text"
                            innerRef={register({ required: true })}
                            invalid={errors.os_rnfl_normal_text && true}
                            readOnly={(osRnfl) ? osRnfl !== '1' : undefined}
                          />
                        </Col>
                        <Col>
                          <Label>(%)</Label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="me-1">
                        <Input
                          id="os-rnfl-2"
                          type="radio"
                          name="os_rnfl"
                          value="2"
                          defaultChecked={(data && data.form && data.form[`${number}`] && data.form[`${number}`].Os_Rnfl && data.form[`${number}`].Os_Rnfl === '2') ? data.form[`${number}`].Os_Rnfl === '2' : false}
                          onChange={(e) => handleChangeOsRnfl(e)}
                          innerRef={register({ required: true })}
                          invalid={errors.os_rnfl && true}
                        />
                        <Label style={{ marginLeft: '10px' }}>Menipis</Label>
                      </div>
                    </td>
                    <td>
                      <Row>
                        <Col>
                          <Input
                            id="os-rnfl-menipis-text"
                            type="text"
                            style={{ width: '300px' }}
                            name="os_rnfl_menipis_text"
                            innerRef={register({ required: true })}
                            invalid={errors.os_rnfl_menipis_text && true}
                            readOnly={(osRnfl) ? osRnfl !== '2' : undefined}
                          />
                        </Col>
                        <Col>
                          <Label>(%)</Label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="me-1">
                        <Input
                          id="os-rnfl-3"
                          type="radio"
                          name="os_rnfl"
                          value="3"
                          defaultChecked={(data && data.form && data.form[`${number}`] && data.form[`${number}`].Os_Rnfl && data.form[`${number}`].Os_Rnfl === '3') ? data.form[`${number}`].Os_Rnfl === '3' : false}
                          onChange={(e) => handleChangeOsRnfl(e)}
                          innerRef={register({ required: true })}
                          invalid={errors.os_rnfl && true}
                        />
                        <Label style={{ marginLeft: '10px' }}>Menebal</Label>
                      </div>
                    </td>
                    <td>
                      <Row>
                        <Col>
                          <Input
                            id="os-rnfl-menebal-text"
                            type="text"
                            style={{ width: '300px' }}
                            name="os_rnfl_menebal_text"
                            innerRef={register({ required: true })}
                            invalid={errors.os_rnfl_menebal_text && true}
                            readOnly={(osRnfl) ? osRnfl !== '3' : undefined}
                          />
                        </Col>
                        <Col>
                          <Label>(%)</Label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </Table>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Row>
                <b>C/D Vertical</b>
              </Row>
              <Row style={{ marginTop: '15px' }}>
                <Table>
                  <tr>
                    <td>
                      <div className="me-1">
                        <Input
                          id="od-cd-vertical"
                          type="radio"
                          name="od_cd_vertical"
                          value="1"
                          defaultChecked={(data && data.form && data.form[`${number}`] && data.form[`${number}`].Od_Cd_Vertical && data.form[`${number}`].Od_Cd_Vertical === '1') ? data.form[`${number}`].Od_Cd_Vertical === '1' : false}
                          onChange={(e) => handleChangeOdVertical(e)}
                          innerRef={register({ required: true })}
                          invalid={errors.od_cd_vertical && true}
                        />
                        <Label style={{ marginLeft: '10px' }}>Normal</Label>
                      </div>
                    </td>
                    <td>
                      <Row>
                        <Col>
                          <Input
                            type="text"
                            id="od-cd-vertical-normal-text"
                            style={{ width: '300px' }}
                            name="od_cd_vertical_normal_text"
                            innerRef={register({ required: true })}
                            invalid={errors.od_cd_vertical_normal_text && true}
                            readOnly={(odVertical) ? odVertical !== '1' : undefined}
                          />
                        </Col>
                        <Col>
                          <Label>(%)</Label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="me-1">
                        <Input
                          id="od-cd-vertical-2"
                          type="radio"
                          name="od_cd_vertical"
                          value="2"
                          defaultChecked={(data && data.form && data.form[`${number}`] && data.form[`${number}`].Od_Cd_Vertical && data.form[`${number}`].Od_Cd_Vertical === '2') ? data.form[`${number}`].Od_Cd_Vertical === '2' : false}
                          onChange={(e) => handleChangeOdVertical(e)}
                          innerRef={register({ required: true })}
                          invalid={errors.od_cd_vertical && true}
                        />
                        <Label style={{ marginLeft: '10px' }}>{`> Dari Normal`}</Label>
                      </div>
                    </td>
                    <td>
                      <Row>
                        <Col>
                          <Input
                            id="od-cd-vertical-upnormal-text"
                            type="text"
                            style={{ width: '300px' }}
                            name="od_cd_vertical_upnormal_text"
                            innerRef={register({ required: true })}
                            invalid={errors.od_cd_vertical_upnormal_text && true}
                            readOnly={(odVertical) ? odVertical !== '2' : undefined}
                          />
                        </Col>
                        <Col>
                          <Label>(%)</Label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </Table>
              </Row>
            </td>
            <td>
              <Row>
                <b>C/D Vertical</b>
              </Row>
              <Row style={{ marginTop: '15px' }}>
                <Table>
                  <tr>
                    <td>
                      <div className="me-1">
                        <Input
                          id="os-cd-vertical-1"
                          type="radio"
                          name="os_cd_vertical"
                          value="1"
                          defaultChecked={(data && data.form && data.form[`${number}`] && data.form[`${number}`].Os_Cd_Vertical && data.form[`${number}`].Os_Cd_Vertical === '1') ? data.form[`${number}`].Os_Cd_Vertical === '1' : false}
                          onChange={(e) => handleChangeOsVertical(e)}
                          innerRef={register({ required: true })}
                          invalid={errors.os_cd_vertical && true}
                        />
                        <Label style={{ marginLeft: '10px' }}>Normal</Label>
                      </div>
                    </td>
                    <td>
                      <Row>
                        <Col>
                          <Input
                            id="os-cd-vertical-normal-text"
                            type="text"
                            style={{ width: '300px' }}
                            name="os_cd_vertical_normal_text"
                            innerRef={register({ required: true })}
                            invalid={errors.os_cd_vertical_normal_text && true}
                            readOnly={(osVertical) ? osVertical !== '1' : undefined}
                          />
                        </Col>
                        <Col>
                          <Label>(%)</Label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="me-1">
                        <Input
                          id="os-cd-vertical-2"
                          type="radio"
                          name="os_cd_vertical"
                          value="2"
                          defaultChecked={(data && data.form && data.form[`${number}`] && data.form[`${number}`].Os_Cd_Vertical && data.form[`${number}`].Os_Cd_Vertical === '2') ? data.form[`${number}`].Os_Cd_Vertical === '2' : false}
                          onChange={(e) => handleChangeOsVertical(e)}
                          innerRef={register({ required: true })}
                          invalid={errors.os_cd_vertical && true}
                        />
                        <Label style={{ marginLeft: '10px' }}>{`> Dari Normal`}</Label>
                      </div>
                    </td>
                    <td>
                      <Row>
                        <Col>
                          <Input
                            id="os-cd-vertical-upnormal-text"
                            type="text"
                            style={{ width: '300px' }}
                            name="os_cd_vertical_upnormal_text"
                            innerRef={register({ required: true })}
                            invalid={errors.os_cd_vertical_upnormal_text && true}
                            readOnly={(osVertical) ? osVertical !== '2' : undefined}
                          />
                        </Col>
                        <Col>
                          <Label>(%)</Label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </Table>
              </Row>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table>
        <tr>
          <td style={{ width: '18%' }}>
            <b>Kesimpulan</b>
          </td>
          <td>
            <Row>
              <Input
                type="textarea"
                style={{ width: '600px' }}
                id="summary"
                name="summary"
                innerRef={register({ required: true })}
                invalid={errors.summary && true} />
            </Row>
          </td>
        </tr>
        <tr>
          <td>
            <b>Tanggal*</b>
          </td>
          <td>
            <Row>
              <Input
                type="datetime-local"
                id='signature_date'
                name="signature_date"
                innerRef={register({ required: true })}
                invalid={errors.signature_date && true}
              />
            </Row>
          </td>
        </tr>
        <tr>
          <td>
            <Row>
              <b>Dokter Pemeriksa</b>
            </Row>
          </td>
          <td>
            
          </td>
        </tr>
      </Table>
    </Form>
  )
}

export default PupilOCTResultForm;
