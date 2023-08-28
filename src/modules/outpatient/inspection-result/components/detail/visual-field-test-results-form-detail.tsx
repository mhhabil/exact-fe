import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { DateTimeInput, TextInput } from "@src/shared/input";
import { useEffect, useState } from "react";
import ToolInspection from "@src/shared/tool-inspection/tool-inspection";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { SubmitButton } from '@src/shared/button';
import { IPdfModel } from '@src/shared/pdf';
import { CreateVisualFieldResultsRequest, ICreateVisualFieldResultsRequest } from '../../requests/create-visual-field-test-results-request';
import { AppRequest } from '@src/shared/request';
import { ToolInspectionService } from '../../services';
import { UpdateVisualFieldResultsRequest } from '../../requests/update-visual-field-test-results-request';
// import { UpdateVisualFieldResultsRequest } from '../../requests/create-visual-field-test-results-request';
import DicomForm from '../../components/form/dicom-form';

const VisualFieldResultFormDetail = (props: { data: any, item?: any | undefined }) => {
  const { data, item } = props;
  const unit = 'Pemeriksaan_Lapangan_Pandang'
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const [processing, setProcessing] = useState<boolean | undefined>(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);

  const { register, handleSubmit, errors, setValue, getValues, control } = useForm({
    mode: 'onChange',
    // resolver: yupResolver(UpdatePupilOCTResultRequest.schema()),
    defaultValues: {
      od_parameter: data && data.Od_Parameter ? data.Od_Parameter : '',
      od_reliabilitas: data && data.Od_Reliabilitas ? data.Od_Reliabilitas : '',
      od_defek : data && data.Od_Defek ? data.Od_Defek : '',
      od_tendensi_defek: data && data.Od_Tendensi_Defek ? data.Od_Tendensi_Defek : '',
      od_severitas_defek: data && data.Od_Severitas_Defek ? data.Od_Severitas_Defek : '',
      os_parameter: data && data.Os_Parameter ? data.Os_Parameter : '',
      os_reliabilitas: data && data.Os_Reliabilitas ? data.Os_Reliabilitas : '',
      os_defek: data && data.Os_Defek ? data.Os_Defek : '',
      os_tendensi_defek: data && data.Os_Tendensi_Defek ? data.Os_Tendensi_Defek : '',
      os_severitas_defek: data && data.Os_Severitas_Defek ? data.Os_Severitas_Defek : '',
      kesimpulan: data && data.Kesimpulan ? data.Kesimpulan : '',
      anjuran: data && data.Anjuran ? data.Anjuran : '',
      pemeriksaan_rutin: data && data.Pemeriksaan_Rutin ? data.Pemeriksaan_Rutin : '',
      'ttd-tanggal': data && data.TTD_Tanggal ? data.TTD_Tanggal : '',
      'ttd-dokter-pemeriksa': data && data.TTD_Dokter_Pemeriksa ? data.TTD_Dokter_Pemeriksa : '',
      dokter_pemeriksa : data && data.Dokter_Pemeriksa_Id ? data.Dokter_Pemeriksa_Id : '',
      'ttd-perawat-pemeriksa': data && data.TTD_Perawat_Pemeriksa ? data.TTD_Perawat_Pemeriksa : '',
      perawat_pemeriksa: data && data.Perawat_Pemeriksa_Id ? data.Perawat_Pemeriksa_Id : '',
    },
  })

  const handleDoctorSigned = (image: SignatureModel) => {
    setValue('ttd-dokter-pemeriksa', image.Signature);
    setValue('dokter_pemeriksa', image.ID_Karyawan);
  }
  
  const handleNurseSigned = (image: SignatureModel) => {
    setValue('ttd-perawat-pemeriksa', image.Signature);
    setValue('perawat_pemeriksa', image.ID_Karyawan);
  }


  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleSubmitForm = (value: ICreateVisualFieldResultsRequest) => {
    
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      {/* <ToolInspection
        name='treatment_number_list'
        data={(data && data.no_berobat && data.no_berobat[0]) ? data.no_berobat[0] : undefined}
        {...{register, errors}}
      /> */}
      {/* <Table style={{ width: '100%' }}>
        <tr>
          <td style={{ width: '70%', textAlign: 'right' }}><b>No Berobat</b></td>
          <td style={{ width: '30%' }}>
            <Input
              type="text"
              name='list_treatment'
              style={{ width: '500px', color: '#303030'}}
              value={`${(data && data.ID_Berobat) ? data.ID_Berobat : ''} (${(data && data.Dokter_Nama) ? data.Dokter_Nama : ''}, ${(data && data.Waktu_Visit) ? data.Waktu_Visit : ''})`}
              innerRef={register({ required: true })}
              // invalid={errors[`${name}`] && true}
              readOnly
            />
          </td>
        </tr>
      </Table> */}
      <h4 className="mt-1">Hasil Pemeriksaan Alat</h4>
      <DicomForm
        dicom={data.dicoms} modality={"OPV"}
      />
      <h4 className="mt-2">Form Hasil Pemeriksaan Lapangan Pandang</h4>
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
              <Row style={{ marginTop: '15px' }}>
                <Table borderless style={{ width: '100%' }}>
                  <tr>
                    <td>
                      <Row>
                        <Col style={{marginLeft:'-15px', marginTop: '-40px'}}>
                          <Label>Parameter</Label>
                        </Col>
                      </Row>
                    </td>
                    <td style={{ width: '65%' }}>
                      <Row>
                        <Col style={{marginLeft:'14px', marginTop:'-30px'}}>
                          <Input
                            id="od_parameter_1"
                            type="radio"
                            name="od_parameter"
                            className="me-1"
                            value="1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Od_Parameter === '1'}
                            innerRef={register("od_parameter") as any}
                            disabled
                          />{' '}
                          <Label>Sesuai</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{marginLeft:'14px', marginTop:'-25px'}}>
                          <Input
                            id="od_parameter_2"
                            type="radio"
                            name="od_parameter"
                            className="me-1"
                            value="2"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Od_Parameter === '2'}
                            innerRef={register("od_parameter") as any}
                            disabled
                          />{' '}
                          <Label>Tidak Sesuai</Label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </Table>
              </Row>
              <Row style={{ marginTop: '15px' }}>
                <Table borderless style={{ width: '100%' }}>
                  <tr>
                    <td>
                      <Row>
                        <Col style={{marginLeft:'-15px', marginTop: '-40px'}}>
                          <Label>Reliabilitas</Label>
                        </Col>
                      </Row>
                    </td>
                    <td style={{ width: '65%' }}>
                      <Row>
                        <Col style={{marginLeft:'14px', marginTop:'-30px'}}>
                          <Input
                            id="od_reliabilitas"
                            type="radio"
                            name="od_reliabilitas"
                            className="me-1"
                            value="1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Od_Reliabilitas === '1'}
                            innerRef={register("od_reliabilitas") as any}
                            disabled
                          />{' '}
                          <Label>Reliabel</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{marginLeft:'14px', marginTop:'-25px'}}>
                          <Input
                            id="od_reliabilitas_2"
                            type="radio"
                            name="od_reliabilitas"
                            className="me-1"
                            value="2"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Od_Reliabilitas === '2'}
                            innerRef={register("od_reliabilitas") as any}
                            disabled
                          />{' '}
                          <Label>Tidak Reliabel</Label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </Table>
              </Row>
              <Row style={{ marginTop: '15px' }}>
                <Table borderless style={{ width: '100%' }}>
                  <tr>
                    <td>
                      <Row>
                        <Col style={{marginLeft:'-15px', marginTop: '-70px'}}>
                          <Label>Defek</Label>
                        </Col>
                      </Row>
                    </td>
                    <td style={{ width: '65%' }}>
                      <Row>
                        <Col style={{marginLeft:'14px', marginTop:'-30px'}}>
                          <Input
                            id="od_defek"
                            type="radio"
                            name="od_defek"
                            className="me-1"
                            value="1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Od_Defek === '1'}
                            innerRef={register("od_defek") as any}
                            disabled
                          />{' '}
                          <Label>Diffus (General)</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{marginLeft:'14px', marginTop:'-25px'}}>
                          <Input
                            id="od_defek_1"
                            type="radio"
                            name="od_defek"
                            className="me-1"
                            value="2"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Od_Defek === '2'}
                            innerRef={register("od_defek") as any}
                            disabled
                          />{' '}
                          <Label>Lokal</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{marginLeft:'14px', marginTop:'-18px'}}>
                          <Input
                            id="od_defek_2"
                            type="radio"
                            name="od_defek"
                            className="me-1"
                            value="3"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Od_Defek === '3'}
                            innerRef={register("od_defek") as any}
                            disabled
                          />{' '}
                          <Label>Diffus (General) + Lokal</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{marginLeft:'14px', marginTop:'-18px'}}>
                          <Input
                            id="od_defek_3"
                            type="radio"
                            name="od_defek"
                            className="me-1"
                            value="4"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Od_Defek === '4'}
                            innerRef={register("od_defek") as any}
                            disabled
                          />{' '}
                          <Label>Negatif</Label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </Table>
              </Row>
              <Row style={{ marginTop: '15px' }}>
                <Table borderless style={{ width: '100%' }}>
                  <tr>
                    <td>
                      <Row>
                        <Col style={{marginLeft:'-20px', marginTop: '-55px'}}>
                          <Label>Tendensi Defek</Label>
                        </Col>
                      </Row>
                    </td>
                    <td style={{ width: '65%' }}>
                      <Row>
                        <Col style={{marginLeft:'14px', marginTop:'-30px'}}>
                          <Input
                            id="od_tendensi_defek"
                            type="radio"
                            name="od_tendensi_defek"
                            className="me-1"
                            value="1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Od_Tendensi_Defek === '1'}
                            innerRef={register("od_tendensi_defek") as any}
                            disabled
                          />{' '}
                          <Label>Glaukoma</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{marginLeft:'14px',  marginTop:'-20px'}}>
                          <Input
                            id="od_tendensi_defek_1"
                            type="radio"
                            name="od_tendensi_defek"
                            className="me-1"
                            value="2"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Od_Tendensi_Defek === '2'}
                            innerRef={register("od_tendensi_defek") as any}
                            disabled
                          />{' '}
                          <Label>Non Glaukoma</Label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </Table>
              </Row>
              <Row style={{ marginTop: '15px' }}>
                <Table borderless style={{ width: '100%' }}>
                  <tr>
                    <td>
                      <Row>
                        <Col style={{marginLeft:'-20px',  marginTop: '-48px'}}>
                          <Label>Severitas Defek</Label>
                        </Col>
                      </Row>
                    </td>
                    <td style={{ width: '65%' }}>
                      <Row>
                        <Col style={{marginLeft:'14px',  marginTop:'-20px'}}>
                          <Input
                            id="od_severitas_defek"
                            type="radio"
                            name="od_severitas_defek"
                            className="me-1"
                            value="1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Od_Severitas_Defek === '1'}
                            innerRef={register("od_severitas_defek") as any}
                            disabled
                          />{' '}
                          <Label>Ringan</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{marginLeft:'14px',  marginTop:'-20px'}}>
                          <Input
                            id="od_severitas_defek"
                            type="radio"
                            name="od_severitas_defek"
                            className="me-1"
                            value="2"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Od_Severitas_Defek === '2'}
                            innerRef={register("od_severitas_defek") as any}
                            disabled
                          />{' '}
                          <Label>Sedang</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{marginLeft:'14px',  marginTop:'-20px'}}>
                          <Input
                            id="od_severitas_defek"
                            type="radio"
                            name="od_severitas_defek"
                            className="me-1"
                            value="3"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Od_Severitas_Defek === '3'}
                            innerRef={register("od_severitas_defek") as any}
                            disabled
                          />{' '}
                          <Label>Tinggi</Label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </Table>
              </Row>
            </td>

            <td>
              <Row style={{ marginTop: '15px' }}>
                <Table borderless style={{ width: '100%' }}>
                  <tr>
                    <td>
                      <Row>
                        <Col style={{marginLeft:'-15px', marginTop: '-40px'}}>
                          <Label>Parameter</Label>
                        </Col>
                      </Row>
                    </td>
                    <td style={{ width: '65%' }}>
                      <Row>
                        <Col style={{marginLeft:'14px', marginTop:'-30px'}}>
                          <Input
                            id="os_parameter_1"
                            type="radio"
                            name="os_parameter"
                            className="me-1"
                            value="1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Os_Parameter === '1'}
                            innerRef={register("os_parameter") as any}
                            disabled
                          />{' '}
                          <Label>Sesuai</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{marginLeft:'14px', marginTop:'-25px'}}>
                          <Input
                            id="os_parameter_2"
                            type="radio"
                            name="os_parameter"
                            className="me-1"
                            value="2"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Os_Parameter === '2'}
                            innerRef={register("os_parameter") as any}
                            disabled
                          />{' '}
                          <Label>Tidak Sesuai</Label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </Table>
              </Row>
              <Row style={{ marginTop: '15px' }}>
                <Table borderless style={{ width: '100%' }}>
                  <tr>
                    <td>
                      <Row>
                        <Col style={{marginLeft:'-15px', marginTop: '-40px'}}>
                          <Label>Reliabilitas</Label>
                        </Col>
                      </Row>
                    </td>
                    <td style={{ width: '65%' }}>
                      <Row>
                        <Col style={{marginLeft:'14px', marginTop:'-30px'}}>
                          <Input
                            id="os_reliabilitas"
                            type="radio"
                            name="os_reliabilitas"
                            className="me-1"
                            value="1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Os_Reliabilitas === '1'}
                            innerRef={register("os_reliabilitas") as any}
                            disabled
                          />{' '}
                          <Label>Reliabel</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{marginLeft:'14px', marginTop:'-25px'}}>
                          <Input
                            id="os_reliabilitas_2"
                            type="radio"
                            name="os_reliabilitas"
                            className="me-1"
                            value="2"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Os_Reliabilitas === '2'}
                            innerRef={register("os_reliabilitas") as any}
                            disabled
                          />{' '}
                          <Label>Tidak Reliabel</Label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </Table>
              </Row>
              <Row style={{ marginTop: '15px' }}>
                <Table borderless style={{ width: '100%' }}>
                  <tr>
                    <td>
                      <Row>
                        <Col style={{marginLeft:'-15px', marginTop: '-70px'}}>
                          <Label>Defek</Label>
                        </Col>
                      </Row>
                    </td>
                    <td style={{ width: '65%' }}>
                      <Row>
                        <Col style={{marginLeft:'14px', marginTop:'-30px'}}>
                          <Input
                            id="os_defek"
                            type="radio"
                            name="os_defek"
                            className="me-1"
                            value="1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Os_Defek === '1'}
                            innerRef={register("os_defek") as any}
                            disabled
                          />{' '}
                          <Label>Diffus (General)</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{marginLeft:'14px', marginTop:'-25px'}}>
                          <Input
                            id="os_defek_1"
                            type="radio"
                            name="os_defek"
                            className="me-1"
                            value="2"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Os_Defek === '2'}
                            innerRef={register("os_defek") as any}
                            disabled
                          />{' '}
                          <Label>Lokal</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{marginLeft:'14px', marginTop:'-18px'}}>
                          <Input
                            id="os_defek_2"
                            type="radio"
                            name="os_defek"
                            className="me-1"
                            value="3"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Os_Defek === '3'}
                            innerRef={register("os_defek") as any}
                            disabled
                          />{' '}
                          <Label>Diffus (General) + Lokal</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{marginLeft:'14px', marginTop:'-18px'}}>
                          <Input
                            id="os_defek_3"
                            type="radio"
                            name="os_defek"
                            className="me-1"
                            value="4"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Operasi_Ke === '4'}
                            innerRef={register("os_defek") as any}
                            disabled
                          />{' '}
                          <Label>Negatif</Label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </Table>
              </Row>
              <Row style={{ marginTop: '15px' }}>
                <Table borderless style={{ width: '100%' }}>
                  <tr>
                    <td>
                      <Row>
                        <Col style={{marginLeft:'-20px', marginTop: '-55px'}}>
                          <Label style={{width: '100px'}}>Tendensi Defek</Label>
                        </Col>
                      </Row>
                    </td>
                    <td style={{ width: '65%' }}>
                      <Row>
                        <Col style={{marginLeft:'14px', marginTop:'-30px'}}>
                          <Input
                            id="os_tendensi_defek"
                            type="radio"
                            name="os_tendensi_defek"
                            className="me-1"
                            value="1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Os_Tendensi_Defek === '1'}
                            innerRef={register("os_tendensi_defek") as any}
                            disabled
                          />{' '}
                          <Label>Glaukoma</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{marginLeft:'14px',  marginTop:'-20px'}}>
                          <Input
                            id="os_tendensi_defek"
                            type="radio"
                            name="os_tendensi_defek"
                            className="me-1"
                            value="2"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Os_Tendensi_Defek === '2'}
                            innerRef={register("os_tendensi_defek") as any}
                            disabled
                          />{' '}
                          <Label>Non Glaukoma</Label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </Table>
              </Row>
              <Row style={{ marginTop: '15px' }}>
                <Table borderless style={{ width: '100%' }}>
                  <tr>
                    <td>
                      <Row>
                        <Col style={{marginLeft:'-20px',  marginTop: '-48px'}}>
                          <Label style={{width: '100px'}}>Severitas Defek</Label>
                        </Col>
                      </Row>
                    </td>
                    <td style={{ width: '65%' }}>
                      <Row>
                        <Col style={{marginLeft:'14px',  marginTop:'-20px'}}>
                          <Input
                            id="os_severitas_defek_1"
                            type="radio"
                            name="os_severitas_defek"
                            className="me-1"
                            value="1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Os_Severitas_Defek === '1'}
                            innerRef={register("os_severitas_defek") as any}
                            disabled
                          />{' '}
                          <Label>Ringan</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{marginLeft:'14px',  marginTop:'-20px'}}>
                          <Input
                            id="os_severitas_defek_2"
                            type="radio"
                            name="os_severitas_defek"
                            className="me-1"
                            value="2"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Os_Severitas_Defek === '2'}
                            innerRef={register("os_severitas_defek") as any}
                            disabled
                          />{' '}
                          <Label>Sedang</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{marginLeft:'14px',  marginTop:'-20px'}}>
                          <Input
                            id="os_severitas_defek_3"
                            type="radio"
                            name="os_severitas_defek"
                            className="me-1"
                            value="3"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Os_Severitas_Defek === '3'}
                            innerRef={register("os_severitas_defek") as any}
                            disabled
                          />{' '}
                          <Label>Tinggi</Label>
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
                <Table borderless style={{ width: '100%' }}>
                  <tr>
                    <td>
                      <Row>
                        <Col style={{marginLeft:'-15px', marginTop:'-45px'}}>
                          <Label>Kesimpulan</Label>
                        </Col>
                      </Row>
                    </td>
                    <td>
                      <Row>
                        <Col>
                          <Input
                            id="kesimpulan"
                            type="textarea"
                            name="kesimpulan"
                            className="me-1"
                            style={{width:'200%', marginTop:'-40px'}}
                            innerRef={register()}
                            disabled
                          />{' '}
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </Table>
              </Row>
              <Row style={{ marginTop: '-15px' }}>
                <Table borderless style={{ width: '100%' }}>
                  <tr>
                    <td>
                      <Row>
                        <Col style={{marginLeft:'-15px', marginTop:'-25px'}}>
                          <Label>Anjuran</Label>
                        </Col>
                      </Row>
                    </td>
                    <td>
                      <Row>
                        <Col style={{marginLeft: '60px'}}>
                          <Input
                            id="anjuran"
                            type="textarea"
                            name="anjuran"
                            className="me-1"
                            style={{width:'200%'}}
                            innerRef={register()}
                            disabled
                          />{' '}
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </Table>
              </Row>
              <Row style={{ marginTop: '15px' }}>
                <Table borderless style={{ width: '100%' }}>
                  <tr>
                    <td>
                      <Row>
                        <Col style={{marginLeft:'-20px',  marginTop: '-48px'}}>
                          <Label>Pemeriksaan Rutin</Label>
                        </Col>
                      </Row>
                    </td>
                    <td style={{ width: '65%' }}>
                      <Row>
                        <Col style={{marginLeft:'14px',  marginTop:'-20px'}}>
                          <Input
                            id="pemeriksaan_rutin_1"
                            type="radio"
                            name="pemeriksaan_rutin"
                            className="me-1"
                            value="1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Pemeriksaan_Rutin === '1'}
                            innerRef={register("pemeriksaan_rutin") as any}
                            disabled
                          />{' '}
                          <Label>3 Bulan</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{marginLeft:'14px',  marginTop:'-20px'}}>
                          <Input
                            id="pemeriksaan_rutin_2"
                            type="radio"
                            name="pemeriksaan_rutin"
                            className="me-1"
                            value="2"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Pemeriksaan_Rutin === '2'}
                            innerRef={register("pemeriksaan_rutin") as any}
                            disabled
                          />{' '}
                          <Label>6 Bulan</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{marginLeft:'14px',  marginTop:'-20px'}}>
                          <Input
                            id="pemeriksaan_rutin_3"
                            type="radio"
                            name="pemeriksaan_rutin"
                            className="me-1"
                            value="3"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={data && data.Pemeriksaan_Rutin === '3'}
                            innerRef={register("pemeriksaan_rutin") as any}
                            disabled
                          />{' '}
                          <Label>1 Tahun</Label>
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
              <Row style={{ marginTop: '-15px', marginLeft:'-25px' }}>
                <Table>
                  <tr>
                    <td>
                      <Row>
                        <Col style={{marginTop: '-50px', marginLeft:'-10px'}}>
                          <Label>Tanggal *</Label>
                        </Col>
                      </Row>
                    </td>
                    <td style={{width:'68%'}}>
                      <Row className="my-1">
                        <Col>
                          <DateTimeInput
                            name='ttd-tanggal'
                            defaultValue='date'
                            md={1}
                            style={{marginTop: '-70px'}}
                            {...{ register, errors }}
                            readOnly
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
      <Row className="mt-2">
        <Col>
          <div className="d-flex justify-content-around my-0">
            <Signature
              label="Perawat Pemeriksa"
              type="picker"
              additionalLabel={(data && data.Perawat_Pemeriksa_Nama && data.Perawat_Pemeriksa_Nama !== '') ? data.Perawat_Pemeriksa_Nama : undefined}
              initialImage={(data && data.TTD_Perawat_Pemeriksa && data.TTD_Perawat_Pemeriksa !== '') ? data.TTD_Perawat_Pemeriksa : undefined}
              persons={nurses}
              onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)}
              disabled
            />
            <Input
              type="hidden"
              name="perawat_pemeriksa"
              innerRef={register()}
              invalid={errors['perawat_pemeriksa'] && true}
            />
            <Input
              type="hidden"
              name="ttd-perawat-pemeriksa"
              innerRef={register()}
              invalid={errors['ttd-perawat-pemeriksa'] && true}
            />
          </div>
        </Col>
        <Col>
          <div className="d-flex justify-content-around my-0">
            <Signature
              label="Dokter Pemeriksa"
              type="picker"
              additionalLabel={(data && data.Dokter_Pemeriksa_Nama && data.Dokter_Pemeriksa_Nama !== '') ? data.Dokter_Pemeriksa_Nama : undefined}
              initialImage={(data && data.TTD_Dokter_Pemeriksa && data.TTD_Dokter_Pemeriksa !== '') ? data.TTD_Dokter_Pemeriksa : undefined}
              persons={doctors}
              onSigned={(assigner: SignatureModel) => handleDoctorSigned(assigner)}
              disabled
            />
            <Input
              type="hidden"
              name="dokter_pemeriksa"
              innerRef={register()}
              invalid={errors['dokter_pemeriksa'] && true}
            />
            <Input
              type="hidden"
              name="ttd-dokter-pemeriksa"
              innerRef={register()}
              invalid={errors['ttd-dokter-pemeriksa'] && true}
            />
          </div>
        </Col>
      </Row>

      <FormGroup className='form-group mt-0' row>
        <div className='d-flex justify-content-center align-items-center'>
          <Label className='me-1'>Terakhir Disimpan: </Label>
          <Label>{(data && data.Updated_At) ? data.Updated_At : ''}</Label>
        </div>
      </FormGroup>
      {/* <FormGroup  className="d-flex mb-0 justify-content-center" style={{ marginLeft: '0px'}}>

        <SubmitButton
          label="Simpan"
          buttonColor='primary'
          spinnerStyle={{ width: '1rem', height: '1rem' }}
          spinnerColor='light'
          processing={processing}
        />
        {
          pdfData && Array.isArray(pdfData) && pdfData.length > 0 && (
            <a color='success' href={`${pdfData[0].URL}`} target="_blank" rel="noreferrer">
              <Button className='me-1' color='success' type='button'>
                Cetak
              </Button>
            </a>
          )
        }
        {
          (!pdfData || (pdfData && Array.isArray(pdfData) && pdfData.length === 0)) && (
            <Button className='me-1' color='success' type='button' disabled>
              Cetak
            </Button>
          )
        }
      </FormGroup>
      <FormGroup className='form-group mt-0' row>
        <div className='d-flex justify-content-center align-items-center'>
          <Label className='me-1'>Terakhir Disimpan:</Label>
          <Label>{(data && data.form && data.form.Updated_At) ? data.form.Updated_At : '' }</Label>
        </div>
      </FormGroup> */}
    </Form>
  )
}

export default VisualFieldResultFormDetail;
