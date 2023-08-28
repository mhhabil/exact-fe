import { Col, FormGroup, Input, Label, Row, TabContent, Table, TabPane } from 'reactstrap';
import { useEffect, useState } from "react";
import { SubmitButton } from '@src/shared/button';
import { IPdfModel } from '@src/shared/pdf';
import Image from 'next/image';
import agama from '@src/modules/outpatient/nursing-initial-assessment/const/agama';
import { AssessmentUgdModel } from '../../models/assessment-ugd-models';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';

const ContactableRelativesForm = (props: { data: AssessmentUgdModel, register: any, errors: any, getValues: any, setValue: any, activeTab: string, processing: boolean, defaultPattern: string | undefined })  => {
  const { data, register, errors, getValues, setValue, activeTab, processing, defaultPattern } = props;
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const { nurses } = useAppSelector(state => state.nurse);

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  const handleDoctorSigned = (image: SignatureModel) => {
    setValue('ttd_perawat', image.Signature);
    setValue('id_perawat', image.ID_Karyawan);
  }

  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId='1'>
        <h5 className='mt-2'>Kerabat yang dapat dihubungi</h5>
        <hr />
        <Table borderless style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td>
                <Label>Nama</Label>
              </td>
              <td style={{width:'76%'}}>
                <Col>
                  <Input
                    id="kerabat-nama"
                    type="text"
                    name="kerabat-nama"
                    innerRef={register()}
                    invalid={errors["kerabat-nama"] && true}
                  />
                </Col>
              </td>
            </tr>
            <tr>
              <td>
                <Label>Hubungan</Label>
              </td>
              <td style={{width:'76%'}}>
                <Row>
                  <Col>
                    <Input
                      id="kerabat-hubungan"
                      type="text"
                      name="kerabat-hubungan"
                      innerRef={register()}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td>
                <Label>Telepon</Label>
              </td>
              <td style={{width:'76%'}}>
                <Row>
                  <Col>
                    <Input
                      id="kerabat-telepon"
                      type="text"
                      name="kerabat-telepon"
                      innerRef={register()}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
          </tbody>
        </Table>
        <h5 className='mt-2'>Status Spiritual</h5>
        <hr />
        <Table borderless style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td>
                <Label>Agama</Label>
              </td>
              <td>
                <Input
                  type="select"
                  id="spiritual-agama"
                  name="spiritual-agama"
                  style={{marginLeft:  '-5%'}}
                  innerRef={register()}
                >
                  <option value="" disabled={false}>--</option>
                  {
                    agama && agama.map((item: any, key: number) => {
                      return <option value={item} key={key}>{ item }</option>;
                    })
                  }
                </Input>
              </td>
            </tr>
          </tbody>
        </Table>
        <h4 className="mt-2">Diagnosa Keperawatan dan Rencana</h4>
        <hr/>
        <Table borderless style={{ width: '100%' }}>
          <tbody>
            <tr className='mt-4'>
              <td className='mt-4'>
                <Row>
                  <b style={{ marginLeft: '160px' }}>Diagnosa Keperawatan</b>
                  <b style={{ marginLeft: '58%', marginTop: '-20px' }}>Rencana Keperawatan</b>
                </Row>
                <Row style={{ marginTop: '15px' }}>
                  <Table bordered>
                    <tr>
                      <td>
                        <Row>
                          <Col sm='1'>
                            <Input
                              id="keperawatan-diagnosa-0"
                              type="checkbox"
                              name="keperawatan-diagnosa-0"
                              className="me-1"
                              onChange={(e) => handleCheckboxChange(e)}
                              defaultChecked={(data && data.form && data.form.Keperawatan_Diagnosa_0 === 1)}
                              value="1"
                              innerRef={register("keperawatan-diagnosa-0")}
                            />{' '}
                          </Col>
                          <Col style={{marginLeft: '-50px'}}>
                            <Label>Gangguan Pola Nafas</Label>
                          </Col>
                          <Col sm='1'>
                            <Input
                              id="keperawatan-rencana-0"
                              type="checkbox"
                              name="keperawatan-rencana-0"
                              className="me-1"
                              onChange={(e) => handleCheckboxChange(e)}
                              defaultChecked={(data && data.form && data.form.Keperawatan_Rencana_0 === 1)}
                              value="1"
                              innerRef={register("keperawatan-rencana-0")}
                            />{' '}
                          </Col>
                          <Col style={{width: '750px', marginLeft:'-50px'}}>
                            <Label>Membebaskan alur nafas, atur nafas, dan pemberian oksigen</Label>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col sm='1'>
                            <Input
                              id="keperawatan-diagnosa-1"
                              type="checkbox"
                              name="keperawatan-diagnosa-1"
                              className="me-1"
                              onChange={(e) => handleCheckboxChange(e)}
                              defaultChecked={(data && data.form && data.form.Keperawatan_Diagnosa_1 === 1)}
                              value="1"
                              innerRef={register("keperawatan-diagnosa-1")}
                            />{' '}
                          </Col>
                          <Col style={{marginLeft: '-50px'}}>
                            <Label>Penurunan  Kesadaran</Label>
                          </Col>
                          <Col sm='1'>
                            <Input
                              id="keperawatan-rencana-1"
                              type="checkbox"
                              name="keperawatan-rencana-1"
                              className="me-1"
                              onChange={(e) => handleCheckboxChange(e)}
                              defaultChecked={(data && data.form && data.form.Keperawatan_Rencana_1 === 1)}
                              value="1"
                              innerRef={register("keperawatan-rencana-1")}
                            />{' '}
                          </Col>
                          <Col style={{width: '750px', marginLeft:'-50px'}}>
                            <Label>Cek tanda vital  dan jalan nafas</Label>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col sm='1'>
                            <Input
                              id="keperawatan-diagnosa-2"
                              type="checkbox"
                              name="keperawatan-diagnosa-2"
                              className="me-1"
                              onChange={(e) => handleCheckboxChange(e)}
                              defaultChecked={(data && data.form && data.form.Keperawatan_Diagnosa_2 === 1)}
                              value="1"
                              innerRef={register("keperawatan-diagnosa-2")}
                            />{' '}
                          </Col>
                          <Col style={{marginLeft: '-50px'}}>
                            <Label>Gangguan rasa nyaman</Label>
                          </Col>
                          <Col sm='1'>
                            <Input
                              id="keperawatan-rencana-2"
                              type="checkbox"
                              name="keperawatan-rencana-2"
                              className="me-1"
                              onChange={(e) => handleCheckboxChange(e)}
                              defaultChecked={(data && data.form && data.form.Keperawatan_Rencana_2 === 1)}
                              value="1"
                              innerRef={register("keperawatan-rencana-2")}
                            />{' '}
                          </Col>
                          <Col style={{width: '750px', marginLeft:'-50px'}}>
                            <Label>Anjurkan tarik nafas</Label>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col sm='1'>
                            <Input
                              id="keperawatan-diagnosa-3"
                              type="checkbox"
                              name="keperawatan-diagnosa-3"
                              className="me-1"
                              onChange={(e) => handleCheckboxChange(e)}
                              defaultChecked={(data && data.form && data.form.Keperawatan_Diagnosa_3 === 1)}
                              value="1"
                              innerRef={register("keperawatan-diagnosa-3")}
                            />{' '}
                          </Col>
                          <Col style={{marginLeft: '-50px'}}>
                            <Label>Risiko Infeksi</Label>
                          </Col>
                          <Col sm='1'>
                            <Input
                              id="keperawatan-rencana-3"
                              type="checkbox"
                              name="keperawatan-rencana-3"
                              className="me-1"
                              onChange={(e) => handleCheckboxChange(e)}
                              defaultChecked={(data && data.form && data.form.Keperawatan_Rencana_3 === 1)}
                              value="1"
                              innerRef={register("keperawatan-rencana-3")}
                            />{' '}
                          </Col>
                          <Col style={{width: '750px', marginLeft:'-50px'}}>
                            <Label>Rawat Luka dan edukasi pasien</Label>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col sm='1'>
                            <Input
                              id="keperawatan-diagnosa-4"
                              type="checkbox"
                              name="keperawatan-diagnosa-4"
                              className="me-1"
                              onChange={(e) => handleCheckboxChange(e)}
                              defaultChecked={(data && data.form && data.form.Keperawatan_Diagnosa_4 === 1)}
                              value="1"
                              innerRef={register("keperawatan-diagnosa-4")}
                            />{' '}
                          </Col>
                          <Col style={{marginLeft: '-50px'}}>
                            <Label>Gangguan intake dan Output Cairan</Label>
                          </Col>
                          <Col sm='1'>
                            <Input
                              id= "keperawatan-rencana-4"
                              type="checkbox"
                              name= "keperawatan-rencana-4"
                              className="me-1"
                              onChange={(e) => handleCheckboxChange(e)}
                              defaultChecked={(data && data.form && data.form.Keperawatan_Rencana_4 === 1)}
                              value="1"
                              innerRef={register("keperawatan-rencana-4")}
                            />{' '}
                          </Col>
                          <Col style={{width: '750px', marginLeft:'-50px'}}>
                            <Label>Terapi Cairan</Label>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col sm='1'>
                            <Input
                              id="keperawatan-diagnosa-5"
                              type="checkbox"
                              name="keperawatan-diagnosa-5"
                              className="me-1"
                              onChange={(e) => handleCheckboxChange(e)}
                              defaultChecked={(data && data.form && data.form.Keperawatan_Diagnosa_5 === 1)}
                              value="1"
                              innerRef={register("keperawatan-diagnosa-5")}
                            />{' '}
                          </Col>
                          <Col style={{marginLeft: '-50px'}}>
                            <Label>Risiko Jatuh</Label>
                          </Col>
                          <Col sm='1'>
                            <Input
                              id="keperawatan-rencana-5"
                              type="checkbox"
                              name="keperawatan-rencana-5"
                              className="me-1"
                              onChange={(e) => handleCheckboxChange(e)}
                              defaultChecked={(data && data.form && data.form.Keperawatan_Rencana_5 === 1)}
                              value="1"
                              innerRef={register("keperawatan-rencana-5")}
                            />{' '}
                          </Col>
                          <Col style={{width: '750px', marginLeft:'-50px'}}>
                            <Label>Penandaan Gelang</Label>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col sm='1'>
                            <Input
                              id="keperawatan-diagnosa-6"
                              type="checkbox"
                              name="keperawatan-diagnosa-6"
                              className="me-1"
                              onChange={(e) => handleCheckboxChange(e)}
                              defaultChecked={(data && data.form && data.form.Keperawatan_Diagnosa_6 === 1)}
                              value="1"
                              innerRef={register("keperawatan-diagnosa-6")}
                            />{' '}
                          </Col>
                          <Col style={{marginLeft: '-50px'}}>
                            <Label>Peningkatan Suhu Tubuh</Label>
                          </Col>
                          <Col sm='1'>
                            <Input
                              id="keperawatan-rencana-6"
                              type="checkbox"
                              name="keperawatan-rencana-6"
                              className="me-1"
                              onChange={(e) => handleCheckboxChange(e)}
                              defaultChecked={(data && data.form && data.form.Keperawatan_Rencana_6 === 1)}
                              value="1"
                              innerRef={register("keperawatan-rencana-6")}
                            />{' '}
                          </Col>
                          <Col style={{width: '750px', marginLeft:'-50px'}}>
                            <Label>Kompres hangat</Label>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col sm='1'>
                            <Input
                              id="keperawatan-diagnosa-7"
                              type="checkbox"
                              name="keperawatan-diagnosa-7"
                              className="me-1"
                              onChange={(e) => handleCheckboxChange(e)}
                              defaultChecked={(data && data.form && data.form.Keperawatan_Diagnosa_7 === 1)}
                              value="1"
                              innerRef={register("keperawatan-diagnosa-7")}
                            />{' '}
                          </Col>
                          <Col style={{marginLeft: '-50px'}}>
                            <Label>Peningkatan TIO</Label>
                          </Col>
                          <Col sm='1'>
                            <Input
                              id="keperawatan-rencana-7"
                              type="checkbox"
                              name="keperawatan-rencana-7"
                              className="me-1"
                              onChange={(e) => handleCheckboxChange(e)}
                              defaultChecked={(data && data.form && data.form.Keperawatan_Rencana_7 === 1)}
                              value="1"
                              innerRef={register("keperawatan-rencana-7")}
                            />{' '}
                          </Col>
                          <Col style={{width: '750px', marginLeft:'-50px'}}>
                            <Label>Anjurkan kolaborasi pemberian obat</Label>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col>
                            <Input
                              id="keperawatan-diagnosa-lainnya"
                              type="text"
                              placeholder='Lainnya...'
                              name="keperawatan-diagnosa-lainnya"
                              innerRef={register()}
                            />
                          </Col>
                          <Col>
                            <Input
                              id="keperawatan-rencana-lainnya"
                              type="text"
                              placeholder='Lainnya...'
                              name="keperawatan-rencana-lainnya"
                              innerRef={register()}
                            />
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
        <FormGroup>
          <Row className="mt-2">
            <Col>
              <Signature
                label="Perawat"
                type="picker"
                additionalLabel={(data && data.form && data.form.Nama_Perawat && data.form.Nama_Perawat !== '') ? data.form.Nama_Perawat : undefined}
                initialImage={(data && data.form && data.form.TTD_Perawat && data.form.TTD_Perawat !== '') ? data.form.TTD_Perawat : undefined}
                persons={nurses}
                onSigned={(assigner: SignatureModel) => handleDoctorSigned(assigner)}
              />
              <Input
                type="hidden"
                name="id_perawat"
                innerRef={register()}
                invalid={errors.id_perawat && true}
              />
              <Input
                type="hidden"
                name="ttd_perawat"
                innerRef={register()}
                invalid={errors.ttd_perawat && true}
              />
            </Col>
          </Row>
        </FormGroup>
      </TabPane>
    </TabContent>
  )
}

export default ContactableRelativesForm;
