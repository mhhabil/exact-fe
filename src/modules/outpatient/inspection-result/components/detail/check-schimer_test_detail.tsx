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
import { AppRequest } from '@src/shared/request';
import { ToolInspectionService } from '../../services';
import { PdfFundusPhotoExaminationRequest } from '@modules/outpatient/inspection-result/requests/pdf-fundus-photo-examination.request';
import { UpdateCheckScirmerTestRequest } from '../../requests/update-check-schirmer-test.request';
import { CreateCheckSchirmerTestRequest, ICreateCheckSchirmerTestRequest } from '../../requests/create-check-schirmer-test.request';

const CheckSchimerTestDetail = (props: {  data: any, item?: any | undefined  }) => {
  const { data, item } = props;

  const unit = 'Laporan_Hasil_Schirmer_Test'
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const [processing, setProcessing] = useState<boolean | undefined>(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);

  const { register, handleSubmit, errors, setValue, getValues, control } = useForm({
    mode: 'onChange',
    resolver: yupResolver(UpdateCheckScirmerTestRequest.schema()),
    defaultValues: {
      nama: data && data.Nama ? data.Nama : '',
      tanggal:(data && data && data.Tanggal) ? data.Tanggal.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      od: data && data.OD ? data.OD : '',
      os: data && data.OS ? data.OS : '',
      kesimpulan: data && data.Kesimpulan ? data.Kesimpulan : '',
      id_perawat: data && data.ID_Perawat ? data.ID_Perawat : '',
      id_dokter_pemeriksa: data && data.ID_Dokter_Pemeriksa ? data.ID_Dokter_Pemeriksa : '',
      ttd_perawat: data && data.TTD_Perawat ? data.TTD_Perawat : '',
      ttd_dokter_pemeriksa: data && data.TTD_Dokter_Pemeriksa ? data.TTD_Dokter_Pemeriksa : '',
    },
  })

  const handleDoctorSigned = (image: SignatureModel) => {
    setValue('ttd_dokter_pemeriksa', image.Signature);
    setValue('id_dokter_pemeriksa', image.ID_Karyawan);
  }

  const handleNurseSigned = (image: SignatureModel) => {
    setValue('ttd_perawat', image.Signature);
    setValue('id_perawat', image.ID_Karyawan);
  }

  const handleSubmitForm = (value: ICreateCheckSchirmerTestRequest) => {
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <FormGroup className="form-group" row>
        <Row className="my-1">
          <Col md="6" sm="12">
          </Col>
          <Col md="6" sm="12">
            <Row>
              <Col style={{marginTop:'30px',  marginLeft:'40px'}}>
                <Label>Tanggal *</Label>
              </Col>
              <Col>
                <DateTimeInput
                  name='tanggal'
                  defaultValue='date'
                  md={1}
                  style={{marginLeft: '-50px'}}
                  {...{ register, errors }}
                  readOnly
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>
      <Table borderless style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td>
              <Label>OD :</Label>
            </td>
            <td>
              <Row>
                <Col>
                  <Input
                    id='od'
                    type='text'
                    name='od'
                    innerRef={register()}
                    disabled
                  />
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>OS :</Label>
            </td>
            <td>
              <Row>
                <Col>
                  <Input
                    id='os'
                    type='text'
                    name='os'
                    innerRef={register()}
                    disabled
                  />
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>Kesimpulan</Label>
            </td>
            <td style={{width:'93%'}}>
              <Row>
                <Col>
                  <Input
                    id="kesimpulan"
                    type="textarea"
                    name="kesimpulan"
                    innerRef={register() as any}
                    disabled
                  />
                </Col>
              </Row>
            </td>
          </tr>
        </tbody>
      </Table>
      <Row>
        <Col>
          <div className="d-flex justify-content-around my-0">
            <Signature
              label="Perawat Rawat Jalan"
              type="picker"
              additionalLabel={(data && data.Nama_Perawat && data.Nama_Perawat !== '') ? data.Nama_Perawat : undefined}
              initialImage={(data && data.TTD_Perawat && data.TTD_Perawat !== '') ? data.TTD_Perawat : undefined}
              persons={nurses}
              onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)}
              disabled
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
          </div>
        </Col>
        <Col>
          <div className="d-flex justify-content-around my-0">
            <Signature
              label="Dokter Pemeriksa"
              type="picker"
              additionalLabel={(data && data.Nama_Dokter_Pemeriksa && data.Nama_Dokter_Pemeriksa !== '') ? data.Nama_Dokter_Pemeriksa : undefined}
              initialImage={(data && data.TTD_Dokter_Pemeriksa && data.TTD_Dokter_Pemeriksa !== '') ? data.TTD_Dokter_Pemeriksa : undefined}
              persons={doctors}
              onSigned={(assigner: SignatureModel) => handleDoctorSigned(assigner)}
              disabled
            />
            <Input
              type="hidden"
              name="id_dokter_pemeriksa"
              innerRef={register()}
              invalid={errors.id_dokter_pemeriksa && true}
            />
            <Input
              type="hidden"
              name="ttd_dokter_pemeriksa"
              innerRef={register()}
              invalid={errors.ttd_dokter_pemeriksa && true}
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
    </Form>
  )
}

export default CheckSchimerTestDetail;
