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
import { UpdateCheckScirmerTestRequest } from '../../requests/update-check-schirmer-test.request';
import { CreateCheckSchirmerTestRequest, ICreateCheckSchirmerTestRequest } from '../../requests/create-check-schirmer-test.request';
import { PdfCheckSchirmerTestRequest } from '../../requests/pdf-check-shirmer-test';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const CheckSchimerTest = (props: { data: any, onSuccessSubmit: any, onCancel: any }) => {
  const { data, onSuccessSubmit, onCancel } = props;

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

  const handleDoctorSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue('ttd_dokter_pemeriksa', image.Signature);
      setValue('id_dokter_pemeriksa', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('ttd_dokter_pemeriksa', image.Signature);
      setValue('id_dokter_pemeriksa', image.ID_Karyawan);
    }
  }

  const handleNurseSigned = (image: SignatureModel) => {
    setValue('ttd_perawat', image.Signature);
    setValue('id_perawat', image.ID_Karyawan);
  }

  const handleSubmitForm = (value: ICreateCheckSchirmerTestRequest) => {
    if (!treatment) {
      return false;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    if (!data) {
      const params = CreateCheckSchirmerTestRequest.createFromJson({...value, ...appRequest, unit });
      ToolInspectionService().create(params)
        .then((response) => {
          if (response && response.data && response.data.data) {
            const params2 = {...appRequest, ID: response.data.data.item_id, itemId: response.data.data.item_id, unit, emr_id: response.data.data.EMR_ID};
            ToolInspectionService().view(params2)
              .then((resp) => {
                const { data } = resp.data;
                ToolInspectionService().pdfv3(PdfCheckSchirmerTestRequest.createPdfRequest({ ...data, nomor_mr: appRequest.nomor_mr, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
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
      const emrId = data.EMR_ID
      const params = UpdateCheckScirmerTestRequest.createFromJson({...value, ...appRequest, ID: data.ID, unit, emr_id: data.EMR_ID });
      ToolInspectionService().update(params)
        .then(() => {
          const params3 = {...appRequest, ID: data.ID, itemId: data.ID, unit, emr_id: data.EMR_ID};
          ToolInspectionService().view(params3)
            .then((resp) => {
              const { data } = resp.data;
              ToolInspectionService().pdfv3(PdfCheckSchirmerTestRequest.createPdfRequest({...data, nomor_mr: appRequest.nomor_mr, umur_lengkap: treatment?.Pasien?.Umur_Lengkap}, appRequest.emr_id))
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
    </Form>
  )
}

export default CheckSchimerTest;
