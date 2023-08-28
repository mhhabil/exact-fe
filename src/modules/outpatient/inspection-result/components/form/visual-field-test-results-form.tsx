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
import { PdfVisualFieldResultRequest } from '@modules/outpatient/inspection-result/requests/pdf-visual-field-result.request';
import DicomForm from '../../components/form/dicom-form';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const VisualFieldResultForm = (props: { data: any, dicom?: any | undefined, onSuccessSubmit: any, onCancel: any }) => {
  const { data, dicom, onSuccessSubmit, onCancel } = props;
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
      'ttd-tanggal': (data && data && data.TTD_Tanggal) ? data.TTD_Tanggal.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      'ttd-dokter-pemeriksa': data && data.TTD_Dokter_Pemeriksa ? data.TTD_Dokter_Pemeriksa : '',
      dokter_pemeriksa : data && data.Dokter_Pemeriksa_Id ? data.Dokter_Pemeriksa_Id : '',
      'ttd-perawat-pemeriksa': data && data.TTD_Perawat_Pemeriksa ? data.TTD_Perawat_Pemeriksa : '',
      perawat_pemeriksa: data && data.Perawat_Pemeriksa_Id ? data.Perawat_Pemeriksa_Id : '',
    },
  })

  const handleDoctorSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue('ttd-dokter-pemeriksa', image.Signature);
      setValue('dokter_pemeriksa', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('ttd-dokter-pemeriksa', image.Signature);
      setValue('dokter_pemeriksa', image.ID_Karyawan);
    }
  }

  const handleNurseSigned = (image: SignatureModel) => {
    setValue('ttd-perawat-pemeriksa', image.Signature);
    setValue('perawat_pemeriksa', image.ID_Karyawan);
  }


  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleSubmitForm = (value: ICreateVisualFieldResultsRequest) => {
    if (!treatment) {
      return false;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    if (!data) {
      const params = CreateVisualFieldResultsRequest.createFromJson({...value, ...appRequest, unit });
      ToolInspectionService().create(params)
        .then((response) => {
          if (response && response.data && response.data.data) {
            const params2 = {...appRequest, ID: response.data.data.item_id, itemId: response.data.data.item_id, unit, emr_id: response.data.data.EMR_ID};
            ToolInspectionService().view(params2)
              .then((resp) => {
                const { data } = resp.data;
                ToolInspectionService().pdfv3(PdfVisualFieldResultRequest.createPdfRequest({ ...data, nomor_mr: appRequest.nomor_mr, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
                  .then((res) => {
                    const { data } = res.data;
                    ToolInspectionService().addPdf({
                      emr_id: appRequest.emr_id,
                      item_id: params2.ID,
                      pdf_url: data?.url ?? '',
                    }).then(() => {
                      if (onSuccessSubmit) {
                        onSuccessSubmit();
                        return true;
                      }
                    });
                  });
              })
          }
        });
    } else {
      const emrId = data.EMR_ID;
      const params = UpdateVisualFieldResultsRequest.createFromJson({...value, ...appRequest, ID: data.ID, unit, emr_id: data.EMR_ID });
      ToolInspectionService().update(params)
        .then(() => {
          const params3 = {...appRequest, ID: data.ID, itemId: data.ID, unit, emr_id: data.EMR_ID};
          ToolInspectionService().view(params3)
            .then((resp) => {
              const { data } = resp.data;
              ToolInspectionService().pdfv3(PdfVisualFieldResultRequest.createPdfRequest({...data, nomor_mr: appRequest.nomor_mr, umur_lengkap: treatment?.Pasien?.Umur_Lengkap}, appRequest.emr_id))
                .then((res) => {
                  const { data } = res.data;
                  ToolInspectionService().addPdf({
                    emr_id: emrId,
                    item_id: params3.ID,
                    pdf_url: data?.url ?? '',
                  }).then(() => {
                    if (onSuccessSubmit) {
                      onSuccessSubmit();
                      return true;
                    }
                  });
                })
            })
        });
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <DicomForm
        dicom={dicom} modality={"OPV"}
      />
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
                <Table borderless style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td>
                        <Label style={{marginLeft:'-20px'}}>Parameter</Label>
                      </td>
                      <td style={{ width: '65%' }}>
                        <Row>
                          <Col>
                            <Input
                              id="od_parameter_1"
                              type="radio"
                              name="od_parameter"
                              className="me-1"
                              value="1"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Od_Parameter === '1'}
                              innerRef={register("od_parameter") as any}
                            />{' '}
                            <Label>Sesuai</Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              id="od_parameter_2"
                              type="radio"
                              name="od_parameter"
                              className="me-1"
                              value="2"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Od_Parameter === '2'}
                              innerRef={register("od_parameter") as any}
                            />{' '}
                            <Label>Tidak Sesuai</Label>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
              <Row style={{ marginTop: '-25px' }}>
                <Table borderless style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td>
                        <Label style={{marginLeft:'-20px'}}>Reliabilitas</Label>
                      </td>
                      <td style={{ width: '65%' }}>
                        <Row>
                          <Col>
                            <Input
                              id="od_reliabilitas"
                              type="radio"
                              name="od_reliabilitas"
                              className="me-1"
                              value="1"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Od_Reliabilitas === '1'}
                              innerRef={register("od_reliabilitas") as any}
                            />{' '}
                            <Label>Reliabel</Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              id="od_reliabilitas_2"
                              type="radio"
                              name="od_reliabilitas"
                              className="me-1"
                              value="2"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Od_Reliabilitas === '2'}
                              innerRef={register("od_reliabilitas") as any}
                            />{' '}
                            <Label>Tidak Reliabel</Label>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
              <Row style={{marginTop:'-25px'}}>
                <Table borderless style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td>
                        <Row>
                          <Col style={{marginTop:'-45px'}}>
                            <Label style={{marginLeft:'-20px'}}>Defek</Label>
                          </Col>
                        </Row>
                      </td>
                      <td style={{ width: '65%' }}>
                        <Row>
                          <Col>
                            <Input
                              id="od_defek"
                              type="radio"
                              name="od_defek"
                              className="me-1"
                              value="1"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Od_Defek === '1'}
                              innerRef={register("od_defek") as any}
                            />{' '}
                            <Label>Diffus (General)</Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              id="od_defek_1"
                              type="radio"
                              name="od_defek"
                              className="me-1"
                              value="2"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Od_Defek === '2'}
                              innerRef={register("od_defek") as any}
                            />{' '}
                            <Label>Lokal</Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              id="od_defek_2"
                              type="radio"
                              name="od_defek"
                              className="me-1"
                              value="3"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Od_Defek === '3'}
                              innerRef={register("od_defek") as any}
                            />{' '}
                            <Label>Diffus (General) + Lokal</Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              id="od_defek_3"
                              type="radio"
                              name="od_defek"
                              className="me-1"
                              value="4"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Od_Defek === '4'}
                              innerRef={register("od_defek") as any}
                            />{' '}
                            <Label>Negatif</Label>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
              <Row style={{marginTop:'-25px'}}>
                <Table borderless style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td>
                        <Label className='mb-2' style={{marginLeft:'-20px'}}>Tendensi Defek</Label>
                      </td>
                      <td style={{ width: '65%' }}>
                        <Row>
                          <Col>
                            <Input
                              id="od_tendensi_defek"
                              type="radio"
                              name="od_tendensi_defek"
                              className="me-1"
                              value="1"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Od_Tendensi_Defek === '1'}
                              innerRef={register("od_tendensi_defek") as any}
                            />{' '}
                            <Label>Glaukoma</Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              id="od_tendensi_defek_1"
                              type="radio"
                              name="od_tendensi_defek"
                              className="me-1"
                              value="2"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Od_Tendensi_Defek === '2'}
                              innerRef={register("od_tendensi_defek") as any}
                            />{' '}
                            <Label>Non Glaukoma</Label>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
              <Row style={{marginTop:'-25px'}}>
                <Table borderless style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td>
                        <Label className='mb-4' style={{marginLeft:'-20px'}}>Severitas Defek</Label>
                      </td>
                      <td style={{ width: '65%' }}>
                        <Row>
                          <Col>
                            <Input
                              id="od_severitas_defek"
                              type="radio"
                              name="od_severitas_defek"
                              className="me-1"
                              value="1"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Od_Severitas_Defek === '1'}
                              innerRef={register("od_severitas_defek") as any}
                            />{' '}
                            <Label>Ringan</Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              id="od_severitas_defek"
                              type="radio"
                              name="od_severitas_defek"
                              className="me-1"
                              value="2"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Od_Severitas_Defek === '2'}
                              innerRef={register("od_severitas_defek") as any}
                            />{' '}
                            <Label>Sedang</Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              id="od_severitas_defek"
                              type="radio"
                              name="od_severitas_defek"
                              className="me-1"
                              value="3"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Od_Severitas_Defek === '3'}
                              innerRef={register("od_severitas_defek") as any}
                            />{' '}
                            <Label>Tinggi</Label>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </td>

            <td>
              <Row>
                <Table borderless style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td>
                        <Label>Parameter</Label>
                      </td>
                      <td style={{ width: '65%' }}>
                        <Row>
                          <Col>
                            <Input
                              id="os_parameter_1"
                              type="radio"
                              name="os_parameter"
                              className="me-1"
                              value="1"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Os_Parameter === '1'}
                              innerRef={register("os_parameter") as any}
                            />{' '}
                            <Label>Sesuai</Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              id="os_parameter_2"
                              type="radio"
                              name="os_parameter"
                              className="me-1"
                              value="2"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Os_Parameter === '2'}
                              innerRef={register("os_parameter") as any}
                            />{' '}
                            <Label>Tidak Sesuai</Label>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
              <Row style={{ marginTop: '-25px' }}>
                <Table borderless style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td>
                        <Label>Reliabilitas</Label>
                      </td>
                      <td style={{ width: '65%' }}>
                        <Row>
                          <Col>
                            <Input
                              id="os_reliabilitas"
                              type="radio"
                              name="os_reliabilitas"
                              className="me-1"
                              value="1"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Os_Reliabilitas === '1'}
                              innerRef={register("os_reliabilitas") as any}
                            />{' '}
                            <Label>Reliabel</Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              id="os_reliabilitas_2"
                              type="radio"
                              name="os_reliabilitas"
                              className="me-1"
                              value="2"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Os_Reliabilitas === '2'}
                              innerRef={register("os_reliabilitas") as any}
                            />{' '}
                            <Label>Tidak Reliabel</Label>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
              <Row style={{marginTop:'-25px'}}>
                <Table borderless style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td>
                        <Row>
                          <Col style={{marginTop:'-45px'}}>
                            <Label>Defek</Label>
                          </Col>
                        </Row>
                      </td>
                      <td style={{ width: '65%' }}>
                        <Row>
                          <Col>
                            <Input
                              id="os_defek"
                              type="radio"
                              name="os_defek"
                              className="me-1"
                              value="1"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Os_Defek === '1'}
                              innerRef={register("os_defek") as any}
                            />{' '}
                            <Label>Diffus (General)</Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              id="os_defek_1"
                              type="radio"
                              name="os_defek"
                              className="me-1"
                              value="2"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Os_Defek === '2'}
                              innerRef={register("os_defek") as any}
                            />{' '}
                            <Label>Lokal</Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              id="os_defek_2"
                              type="radio"
                              name="os_defek"
                              className="me-1"
                              value="3"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Os_Defek === '3'}
                              innerRef={register("os_defek") as any}
                            />{' '}
                            <Label>Diffus (General) + Lokal</Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              id="os_defek_3"
                              type="radio"
                              name="os_defek"
                              className="me-1"
                              value="4"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Operasi_Ke === '4'}
                              innerRef={register("os_defek") as any}
                            />{' '}
                            <Label>Negatif</Label>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
              <Row style={{marginTop:'-25px'}}>
                <Table borderless style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td>
                        <Label className='mb-2'>Tendensi Defek</Label>
                      </td>
                      <td style={{ width: '65%' }}>
                        <Row>
                          <Col>
                            <Input
                              id="os_tendensi_defek"
                              type="radio"
                              name="os_tendensi_defek"
                              className="me-1"
                              value="1"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Os_Tendensi_Defek === '1'}
                              innerRef={register("os_tendensi_defek") as any}
                            />{' '}
                            <Label>Glaukoma</Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              id="os_tendensi_defek"
                              type="radio"
                              name="os_tendensi_defek"
                              className="me-1"
                              value="2"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Os_Tendensi_Defek === '2'}
                              innerRef={register("os_tendensi_defek") as any}
                            />{' '}
                            <Label>Non Glaukoma</Label>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
              <Row style={{marginTop:'-25px'}}>
                <Table borderless style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td>
                        <Label className='mb-4'>Severitas Defek</Label>
                      </td>
                      <td style={{ width: '65%' }}>
                        <Row>
                          <Col>
                            <Input
                              id="os_severitas_defek_1"
                              type="radio"
                              name="os_severitas_defek"
                              className="me-1"
                              value="1"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Os_Severitas_Defek === '1'}
                              innerRef={register("os_severitas_defek") as any}
                            />{' '}
                            <Label>Ringan</Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              id="os_severitas_defek_2"
                              type="radio"
                              name="os_severitas_defek"
                              className="me-1"
                              value="2"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Os_Severitas_Defek === '2'}
                              innerRef={register("os_severitas_defek") as any}
                            />{' '}
                            <Label>Sedang</Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              id="os_severitas_defek_3"
                              type="radio"
                              name="os_severitas_defek"
                              className="me-1"
                              value="3"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.Os_Severitas_Defek === '3'}
                              innerRef={register("os_severitas_defek") as any}
                            />{' '}
                            <Label>Tinggi</Label>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table borderless style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td>
              <Row>
                <Col style={{marginTop:'-40px'}}>
                  <Label>Kesimpulan</Label>
                </Col>
              </Row>
            </td>
            <td style={{width:'83%'}}>
              <Row>
                <Col>
                  <Input
                    id="kesimpulan"
                    type="textarea"
                    style={{marginTop: '-40px'}}
                    name="kesimpulan"
                    innerRef={register({ required: true }) as any}
                  />
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label className='mb-3'>Anjuran</Label>
            </td>
            <td style={{width:'83%'}}>
              <Row>
                <Col>
                  <Input
                    id="anjuran"
                    type="textarea"
                    style={{marginTop: '-20px'}}
                    name="anjuran"
                    innerRef={register({ required: true }) as any}
                  />
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Row>
                <Col className='mb-3'>
                  <Label>Pemeriksaan Rutin</Label>
                </Col>
              </Row>
            </td>
            <td style={{ width: '65%' }}>
              <Row>
                <Col>
                  <Input
                    id="pemeriksaan_rutin_1"
                    type="radio"
                    name="pemeriksaan_rutin"
                    className="me-1"
                    value="1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.Pemeriksaan_Rutin === '1'}
                    innerRef={register("pemeriksaan_rutin") as any}
                  />{' '}
                  <Label>3 Bulan</Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input
                    id="pemeriksaan_rutin_2"
                    type="radio"
                    name="pemeriksaan_rutin"
                    className="me-1"
                    value="2"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.Pemeriksaan_Rutin === '2'}
                    innerRef={register("pemeriksaan_rutin") as any}
                  />{' '}
                  <Label>6 Bulan</Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input
                    id="pemeriksaan_rutin_3"
                    type="radio"
                    name="pemeriksaan_rutin"
                    className="me-1"
                    value="3"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.Pemeriksaan_Rutin === '3'}
                    innerRef={register("pemeriksaan_rutin") as any}
                  />{' '}
                  <Label>1 Tahun</Label>
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Row>
                <Col style={{marginTop: '-20px'}}>
                  <Label>Tanggal *</Label>
                </Col>
              </Row>
            </td>
            <td style={{width:'68%'}}>
              <Row>
                <Col>
                  <DateTimeInput
                    name='ttd-tanggal'
                    defaultValue='date'
                    md={1}
                    style={{marginTop: '-30px'}}
                    {...{ register, errors }}
                  />
                </Col>
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
              unit='dokter'
              onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                if (isFormDoctor) {
                  handleDoctorSigned(assigner, isFormDoctor)
                }
                if (!isFormDoctor) {
                  handleDoctorSigned(assigner)
                }
              }}
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
          <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.Updated_At)}` }</Label>
        </div>
      </FormGroup>
      <FormGroup  className="d-flex mb-0 justify-content-center" style={{ marginLeft: '0px'}}>

        <SubmitButton
          label="Simpan"
          buttonColor='primary'
          spinnerStyle={{ width: '1rem', height: '1rem' }}
          spinnerColor='light'
          processing={processing}
        />
        <Button color='warning' onClick={() => {
          if (onCancel) {
            onCancel();
          }
        }}>Batal</Button>
      </FormGroup>
      {/* <FormGroup className='form-group mt-0' row>
        <div className='d-flex justify-content-center align-items-center'>
          <Label className='me-1'>Terakhir Disimpan:</Label>
          <Label>{(data && data.form && data.form.Updated_At) ? data.form.Updated_At : '' }</Label>
        </div>
      </FormGroup> */}
    </Form>
  )
}

export default VisualFieldResultForm;
