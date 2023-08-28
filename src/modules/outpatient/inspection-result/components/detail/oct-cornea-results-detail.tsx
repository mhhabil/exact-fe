import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { DateTimeInput, TextInput } from "@src/shared/input";
// import { PupilOCTResultModel, TreatmentNumber } from "../models/pupil-oct-result.model";
import { useEffect, useState } from "react";
import ToolInspection from "@src/shared/tool-inspection/tool-inspection";
// import { UpdatePupilOCTResultRequest } from '../requests';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { SubmitButton } from '@src/shared/button';
import { IPdfModel } from '@src/shared/pdf';
import { UpdateFundusPhotoExaminationRequest } from '../../requests/update-fundus-photo-examination.request';
import { CreateFundusPhotoExaminationRequest, ICreateFundusPhotoExaminationRequest } from '../../requests/create-fundus-photo-examination.request';
import { AppRequest } from '@src/shared/request';
import { ToolInspectionService } from '../../services';
import { PdfFundusPhotoExaminationRequest } from '@modules/outpatient/inspection-result/requests/pdf-fundus-photo-examination.request';
import { UpdateOctCorneaResultsRequest } from '../../requests/update-oct-cornea-results.request';
import { CreateOctCorneaResultsRequest, ICreateOctCorneaResultsRequest } from '../../requests/create-oct-cornea-results.request';
import DicomForm from '../../components/form/dicom-form';

const OctCorneaResults = (props: { data: any, item?: any | undefined }) => {
  const { data, item } = props;

  const unit = 'Pemeriksaan_Oct_Cornea'
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const [processing, setProcessing] = useState<boolean | undefined>(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);

  const { register, handleSubmit, errors, setValue, getValues, control } = useForm({
    mode: 'onChange',
    resolver: yupResolver(UpdateOctCorneaResultsRequest.schema()),
    defaultValues: {
      od_gain: data && data.Od_Gain ? data.Od_Gain : '',
      tanggal: (data && data && data.Tanggal) ? data.Tanggal.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      kornea: data && data.Kornea ? data.kornea : '',
      ketebalan: data && data.Ketebalan ? data.Ketebalan : '',
      od_epitel_detach_check: data && data.OD_Epitel_Detach_Check ? data.OD_Epitel_Detach_Check : '',
      od_erosi_check: data && data.OD_Erosi_Check ? data.OD_Erosi_Check : '',
      od_irregular_epitel_check: data && data.OD_Irregular_Epitel_Check ? data.OD_Irregular_Epitel_Check : '',
      od_epitel_thinning_check: data && data.OD_Epitel_Thinning_Check ? data.OD_Epitel_Thinning_Check : '',
      od_epitel_downgrowth_check: data && data.OD_Epitel_Downgrowth_Check ? data.OD_Epitel_Downgrowth_Check : '',
      od_epitel_lainnya_check: data && data.OD_Epitel_Lainnya_Check ? data.OD_Epitel_Lainnya_Check : '',
      os_epitel_detach_check: data && data.OS_Epitel_Detach_Check ? data.OS_Epitel_Detach_Check : '',
      os_erosi_check: data && data.OS_Erosi_Check ? data.OS_Erosi_Check : '',
      os_irregular_epitel_check: data && data.OS_Irregular_Epitel_Check ? data.OS_Irregular_Epitel_Check : '',
      os_epitel_thinning_check: data && data.OS_Epitel_Thinning_Check ? data.OS_Epitel_Thinning_Check : '',
      os_epitel_downgrowth_check: data && data.OS_Epitel_Downgrowth_Check ? data.OS_Epitel_Downgrowth_Check : '',
      os_epitel_lainnya_check: data && data.OS_Epitel_Lainnya_Check ? data.OS_Epitel_Lainnya_Check : '',
      od_irreguler_stroma_check: data && data.OD_Irreguler_Stroma_Check ? data.OD_Irreguler_Stroma_Check : '',
      od_stromal_thinning_check: data && data.OD_Stromal_Thinning_Check ? data.OD_Stromal_Thinning_Check :  '',
      od_stromal_melting_check: data && data.OD_Stromal_Melting_Check ? data.OD_Stromal_Melting_Check : '',
      od_stromal_lainnya_check: data && data.OD_Stromal_Lainnya_Check ? data.OD_Stromal_Lainnya_Check : '',
      os_irreguler_stroma_check: data && data.OS_Irreguler_Stroma_Check ? data.OS_Irreguler_Stroma_Check :  '',
      os_stromal_thinning_check: data && data.OS_Stromal_Thinning_Check ? data.OS_Stromal_Thinning_Check : '',
      os_stromal_melting_check: data  && data.OS_Stromal_Melting_Check ? data.OS_Stromal_Melting_Check : '',
      os_stromal_lainnya_check: data && data.OS_Stromal_Lainnya_Check ? data.OS_Stromal_Lainnya_Check : '',
      od_irreguler_endotel_check: data && data.OD_Irreguler_Endotel_Check ? data.OD_Irreguler_Endotel_Check : '',
      od_endotelial_detachment_check: data && data.OD_Endotelial_Detachment_Check ? data.OD_Endotelial_Detachment_Check : '',
      od_endotel_lainnya_check: data && data.OD_Endotel_Lainnya_Check ? data.OD_Endotel_Lainnya_Check : '',
      os_irreguler_endotel_check: data && data.OS_Irreguler_Endotel_Check ? data.OS_Irreguler_Endotel_Check : '',
      os_endotelial_detachment_check: data && data.OS_Endotelial_Detachment_Check ? data.OS_Endotelial_Detachment_Check : '',
      os_endotel_lainnya_check: data && data.OS_Endotel_Lainnya_Check ? data.OS_Endotel_Lainnya_Check : '',
      od_anterior_chamber_check: data && data.OD_Anterior_Chamber_Check ? data.OD_Anterior_Chamber_Check : '',
      od_anterior_chamber_depth: data && data.OD_Anterior_Chamber_Depth ? data.OD_Anterior_Chamber_Depth : '',
      od_bmd_mass_check: data && data.OD_BMD_Mass_Check ? data.OD_BMD_Mass_Check : '', 
      od_bmd_particle_check: data && data.OD_BMD_Particle_Check ? data.OD_BMD_Particle_Check : '',
      od_bmd_lainnya_check: data && data.OD_BMD_Lainnya_Check ? data.OD_BMD_Lainnya_Check : '',
      os_anterior_chamber_check: data && data.OS_Anterior_Chamber_Check ? data.OS_Anterior_Chamber_Check : '',
      os_anterior_chamber_depth: data && data.OS_Anterior_Chamber_Depth ? data.OS_Anterior_Chamber_Depth : '',
      os_bmd_mass_check: data && data.OS_BMD_Mass_Check ? data.OS_BMD_Mass_Check : '',
      os_bmd_particle_check: data && data.OS_BMD_Particle_Check ? data.OS_BMD_Particle_Check : '',
      os_bmd_lainnya_check: data && data.OS_BMD_Lainnya_Check ? data.OS_BMD_Lainnya_Check : '',
      od_scleral_spur_check: data && data.OD_Scleral_Spur_Check ? data.OD_Scleral_Spur_Check : '',
      od_scleral_spur_angle: data && data.OD_Scleral_Spur_Angle ? data.OD_Scleral_Spur_Angle : '',
      od_sudut_dangkal_check: data && data.OD_Sudut_Dangkal_Check ? data.OD_Sudut_Dangkal_Check : '',
      od_sudut_dalam_check: data && data.OD_Sudut_Dalam_Check ? data.OD_Sudut_Dalam_Check : '',
      os_scleral_spur_check: data && data.OS_Scleral_Spur_Check ? data.OS_Scleral_Spur_Check : '',
      os_scleral_spur_angle: data && data.OS_Scleral_Spur_Angle ? data.OS_Scleral_Spur_Angle : '',
      os_sudut_dangkal_check: data && data.OS_Sudut_Dangkal_Check ? data.OS_Sudut_Dangkal_Check :  '',
      os_sudut_dalam_check: data && data.OS_Sudut_Dalam_Check ? data.OS_Sudut_Dalam_Check : '',
      od_blok_pupil_check: data && data.OD_Blok_Pupil_Check ? data.OD_Blok_Pupil_Check :  '',
      od_plateau_check: data && data.OD_Plateau_Check ? data.OD_Plateau_Check : '',
      od_tumor_kista_check: data && data.OD_Tumor_Kista_Check ? data.OD_Tumor_Kista_Check : '',
      os_blok_pupil_check: data && data.OS_Blok_Pupil_Check ? data.OS_Blok_Pupil_Check : '',
      os_plateau_check: data && data.OS_Plateau_Check ? data.OS_Plateau_Check : '',
      os_tumor_kista_check: data && data.OS_Tumor_Kista_Check ? data.OS_Tumor_Kista_Check : '', 
      od_lens_vault_check: data && data.OD_Lens_Vault_Check ? data.OD_Lens_Vault_Check : '',
      od_lens_vault: data && data.OD_Lens_Vault ? data.OD_Lens_Vault : '',
      od_lens_thickness_check: data && data.OD_Lens_Thickness_Check ? data.OD_Lens_Thickness_Check : '',
      od_lens_thickness: data && data.OD_Lens_Thickness ? data.OD_Lens_Thickness : '',
      os_lens_vault_check: data && data.OS_Lens_Vault_Check ? data.OS_Lens_Vault_Check : '',
      os_lens_vault: data && data.OS_Lens_Vault ? data.OS_Lens_Vault : '',
      os_lens_thickness_check: data && data.OS_Lens_Thickness_Check ? data.OS_Lens_Thickness_Check : '',
      os_lens_thickness: data && data.OS_Lens_Thickness ? data.OS_Lens_Thickness : '',
      kesimpulan: data && data.Kesimpulan ? data.Kesimpulan : '',
      ttd_perawat: data && data.TTD_Perawat ? data.TTD_Perawat : '',
      id_perawat: data && data.ID_Perawat ? data.ID_Perawat : '',
      ttd_dokter_pemeriksaan: data && data.TTD_Dokter_Pemeriksaan ? data.TTD_Dokter_Pemeriksaan : '',
      id_dokter_pemeriksaan: data && data.ID_Dokter_Pemeriksaan ? data.ID_Dokter_Pemeriksaan : '',
    },
  })

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  const handleDoctorSigned = (image: SignatureModel) => {
    setValue('ttd_dokter_pemeriksaan', image.Signature);
    setValue('id_dokter_pemeriksaan', image.ID_Karyawan);
  }

  const handleNurseSigned = (image: SignatureModel) => {
    setValue('ttd_perawat', image.Signature);
    setValue('id_perawat', image.ID_Karyawan);
  }

  const handleSubmitForm = (value: ICreateOctCorneaResultsRequest) => {
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <h4 className="mt-1">Hasil Pemeriksaan Alat</h4>
      <DicomForm
        dicom={data.dicoms} modality={"OCT"}
      />
       <h4 className="mt-2">Form Hasil Pemeriksaan Alat Oct Cornea</h4>
      <FormGroup className="form-group" row>
        <Row className="my-1">
          <Col md="6" sm="12">
            <Row>
              <Col style={{marginLeft:'30px'}}>
              </Col>
            </Row>
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
                  readOnly
                  style={{marginLeft: '-50px'}}
                  {...{ register, errors }}
                />
              </Col>
              {/* <Col></Col> */}
            </Row>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className="form-group" row>
        <Row>
          <Col md="6" sm="12">
            <Row>
              <Col md="12" className="d-flex justify-content-center">
                <h5>OD</h5>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>Kornea</Label>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col>
                <Label style={{marginLeft:'30px', width:'80px'}}>Thickness</Label>
              </Col>
              <Col>
                <Input
                  id='ketebalan'
                  type='text'
                  name='ketebalan'
                  innerRef={register()}
                  style={{width:'300px'}}
                  disabled
                />
              </Col>
              <Col>
                <span style={{marginLeft:'-25px'}}>&#13211;</span>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>Epitel: </Label>
              </Col>
              <Col md='9'>
                <Input
                  id='od_epitel_detach_check'
                  type='checkbox'
                  name='od_epitel_detach_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={ data && data.OD_Epitel_Detach_Check === '1'}
                  innerRef={register('od_epitel_detach_check') as any}
                  disabled
                />
                <Label>Epitel Detachment</Label>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}></Col>
              <Col md='9'>
                <Input
                  id='od_erosi_check'
                  type='checkbox'
                  name='od_erosi_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={ data && data.OD_Erosi_Check === '1'}
                  value='1'
                  innerRef={register('od_erosi_check') as any}
                  disabled
                />
                <Label>Erosi</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='od_irregular_epitel_check'
                  type='checkbox'
                  name='od_irregular_epitel_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OD_Irregular_Epitel_Check}
                  value='1'
                  innerRef={register('od_irregular_epitel_check') as any}
                  disabled
                />
                <Label>Irregular Epitel</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='od_epitel_thinning_check'
                  type='checkbox'
                  name='od_epitel_thinning_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={ data && data.OD_Epitel_Thinning_Check === '1'}
                  value='1'
                  innerRef={register('od_epitel_thinning_check') as any}
                  disabled
                />
                <Label>Epitel  Thinning</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='od_epitel_downgrowth_check'
                  type='checkbox'
                  name='od_epitel_downgrowth_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={ data && data.OD_Epitel_Downgrowth_Check === '1'}
                  value='1'
                  innerRef={register('od_epitel_downgrowth_check') as any}
                  disabled
                />
                <Label>Epitel Downgrowth</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='od_epitel_lainnya_check'
                  type='checkbox'
                  name='od_epitel_lainnya_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={ data && data.OD_Epitel_Lainnya_Check === '1'}
                  value='1'
                  innerRef={register('od_epitel_lainnya_check') as any}
                  disabled
                />
                <Label>Lain-Lain</Label>
              </Col>
            </Row>
          </Col>
          <Col md="6" sm="12">
            <Row>
              <Col md="12" className="d-flex justify-content-center">
                <h5>OS</h5>
              </Col>
            </Row>
            <Row className='mt-3'>
              <Col>
                <Label style={{marginLeft:'30px', width:'80px'}}>Thickness</Label>
              </Col>
              <Col>
                <Input
                  id='ketebalan'
                  type='text'
                  name='ketebalan'
                  innerRef={register()}
                  style={{width:'300px'}}
                  disabled
                />
              </Col>
              <Col>
                <span style={{marginLeft:'-25px'}}>&#13211;</span>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col>
                <Label style={{marginLeft:'30px'}}>Epitel:</Label>
              </Col>
              <Col md='9'>
                <Input
                  id='os_epitel_detach_check'
                  type='checkbox'
                  name='os_epitel_detach_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={ data && data.OS_Epitel_Detach_Check === '1'}
                  value='1'
                  innerRef={register('os_epitel_detach_check') as any}
                  disabled
                />
                <Label>Epitel Detachment</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='os_erosi_check'
                  type='checkbox'
                  name='os_erosi_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OS_Erosi_Check === '1'}
                  value='1'
                  innerRef={register('os_erosi_check') as any}
                  disabled
                />
                <Label>Erosi</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='os_irregular_epitel_check'
                  type='checkbox'
                  name='os_irregular_epitel_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OS_Irregular_Epitel_Check === '1'}
                  value='1'
                  innerRef={register('os_irregular_epitel_check') as any}
                  disabled
                />
                <Label>Irreguler Strioma</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='os_epitel_thinning_check'
                  type='checkbox'
                  name='os_epitel_thinning_check'
                  className='me-1'
                  onChange={(e) =>  handleCheckboxChange(e)}
                  defaultChecked={data && data.OS_Epitel_Thinning_Check === '1'}
                  value='1'
                  innerRef={register('os_epitel_thinning_check') as any}
                  disabled
                />
                <Label>Epitel Thinning</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='os_epitel_downgrowth_check'
                  type='checkbox'
                  name='os_epitel_downgrowth_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OS_Epitel_Downgrowth_Check === '1'}
                  value='1'
                  innerRef={register('os_epitel_downgrowth_check') as any}
                  disabled
                />
                <Label>Epitel Downgrowth</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='os_epitel_lainnya_check'
                  type='checkbox'
                  name='os_epitel_lainnya_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OS_Epitel_Lainnya_Check === '1'}
                  value='1'
                  innerRef={register('os_epitel_lainnya_check') as any}
                  disabled
                />
                <Label>Lain-Lain</Label>
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className="form-group" row>
        <Row className='mt-1'>
          <Col md="6" sm="12">
            <Row>
              <Col>
                <Label style={{marginLeft:'30px'}}>Stroma:</Label>
              </Col>
              <Col md='9'>
                <Input
                  id='od_irreguler_stroma_check'
                  type='checkbox'
                  name='od_irreguler_stroma_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={ data && data.OD_Irreguler_Stroma_Check === '1'}
                  value='1'
                  innerRef={register('od_irreguler_stroma_check') as any}
                  disabled
                />
                <Label>Irregular Stroma</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='od_stromal_thinning_check'
                  type='checkbox'
                  name='od_stromal_thinning_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={ data && data.OD_Stromal_Thinning_Check === '1'}
                  value='1'
                  innerRef={register('od_stromal_thinning_check') as any}
                  disabled
                />
                <Label>Stromal Thinning</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='od_stromal_melting_check'
                  type='checkbox'
                  name='od_stromal_melting_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={ data && data.OD_Stromal_Melting_Check === '1'}
                  value='1'
                  innerRef={register('od_stromal_melting_check') as any}
                  disabled
                />
                <Label>Stromal Melting</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='od_stromal_lainnya_check'
                  type='checkbox'
                  name='od_stromal_lainnya_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OD_Stromal_Lainnya_Check === '1'}
                  value='1'
                  innerRef={register('od_stromal_lainnya_check') as any}
                  disabled
                />
                <Label>Lain-Lain</Label>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Label style={{marginLeft:'30px'}}>Stroma:</Label>
              </Col>
              <Col md='9'>
                <Input
                  id='os_irreguler_stroma_check'
                  type='checkbox'
                  name='os_irreguler_stroma_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={ data && data.OS_Irreguler_Stroma_Check === '1'}
                  value='1'
                  innerRef={register('os_irreguler_stroma_check') as any}
                  disabled
                />
                <Label>Irregular Stroma</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='os_stromal_thinning_check'
                  type='checkbox'
                  name='os_stromal_thinning_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={ data && data.OS_Stromal_Thinning_Check === '1'}
                  value='1'
                  innerRef={register('os_stromal_thinning_check') as any}
                  disabled
                />
                <Label>Stromal Thinning</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='os_stromal_melting_check'
                  type='checkbox'
                  name='os_stromal_melting_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OS_Stromal_Melting_Check === '1'}
                  value='1'
                  innerRef={register('os_stromal_melting_check') as any}
                  disabled
                />
                <Label>Stromal Melting</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='os_stromal_lainnya_check'
                  type='checkbox'
                  name='os_stromal_lainnya_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OS_Stromal_Lainnya_Check === '1'}
                  value='1'
                  innerRef={register('os_stromal_lainnya_check') as any}
                  disabled
                />
                <Label>Lain-Lain</Label>
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className='form-group' row>
        <Row className='mt-1'>
          <Col md='6' sm='12'>
            <Row>
              <Col>
                <Label style={{marginLeft:'30px'}}>Endotel</Label>
              </Col>
              <Col md='9'>
                <Input
                  id='od_irreguler_endotel_check'
                  type='checkbox'
                  name='od_irreguler_endotel_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OD_Irreguler_Endotel_Check}
                  value='1'
                  innerRef={register('od_irreguler_endotel_check') as any}
                  disabled
                />
                <Label>Irreguler Stroma</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='od_endotelial_detachment_check'
                  type='checkbox'
                  name='od_endotelial_detachment_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OD_Endotelial_Detachment_Check === '1'}
                  value='1'
                  innerRef={register('od_endotelial_detachment_check') as any}
                  disabled
                />
                <Label>Endotelial Detachment</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='od_endotel_lainnya_check'
                  type='checkbox'
                  name='od_endotel_lainnya_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OD_Endotel_Lainnya_Check === '1'}
                  value='1'
                  innerRef={register('od_endotel_lainnya_check') as any}
                  disabled
                />
                <Label>Lain-Lain</Label>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Label style={{marginLeft:'30px'}}> Endotel</Label>
              </Col>
              <Col md='9'>
                <Input
                  id='os_irreguler_endotel_check'
                  type='checkbox'
                  name='os_irreguler_endotel_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OS_Irreguler_Endotel_Check === '1'}
                  value='1'
                  innerRef={register('os_irreguler_endotel_check') as any}
                  disabled
                />
                <Label>Irreguler Endotel</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='os_endotelial_detachment_check'
                  type='checkbox'
                  name='os_endotelial_detachment_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OS_Endotelial_Detachment_Check === '1'}
                  value='1'
                  innerRef={register('os_endotelial_detachment_check') as any}
                  disabled
                />
                <Label>Endotelial Detachment</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='os_endotel_lainnya_check'
                  type='checkbox'
                  name='os_endotel_lainnya_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OS_Endotel_Lainnya_Check === '1'}
                  value='1'
                  innerRef={register('os_endotel_lainnya_check') as any}
                  disabled
                />
                <Label>Lain-Lain</Label>
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className='form-group' row>
        <Row className='mt-1'>
          <Col md='6' sm='12'>
            <Row>
              <Col>
                <Label style={{marginLeft: '30px'}}>BMD</Label>
              </Col>
              <Col md='5' style={{marginLeft:'58px'}}>
                <Input
                  id='od_anterior_chamber_check'
                  type='checkbox'
                  name='od_anterior_chamber_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data}
                  value='1'
                  innerRef={register('od_anterior_chamber_check') as any}
                  disabled
                />
                <Label>Anterior Chamber Depth :</Label>
              </Col>
              <Col>
                <Input
                  id='od_anterior_chamber_depth'
                  type='text'
                  name='od_anterior_chamber_depth'
                  innerRef={register()}
                  style={{width:'120px', marginLeft:'-40px'}}
                  disabled
                />
              </Col>
              <Col>
                <Label>mm</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='od_bmd_mass_check'
                  type='checkbox'
                  name='od_bmd_mass_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OD_BMD_Mass_Check === '1'}
                  value='1'
                  innerRef={register('od_bmd_mass_check') as any}
                  disabled
                />
                <Label>Mass</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='od_bmd_particle_check'
                  type='checkbox'
                  name='od_bmd_particle_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OD_BMD_Particle_Check === '1'}
                  value='1'
                  innerRef={register('od_bmd_particle_check') as any}
                  disabled
                />
                <Label>Particle</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='od_bmd_lainnya_check'
                  type='checkbox'
                  name='od_bmd_lainnya_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OD_BMD_Lainnya_Check === '1'}
                  value='1'
                  innerRef={register('od_bmd_lainnya_check') as any}
                  disabled
                />
                <Label>Lain-Lain</Label>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Label style={{marginLeft:'30px'}}>BMD</Label>
              </Col>
              <Col md='5' style={{marginLeft:'58px'}}>
                <Input
                  id='os_anterior_chamber_check'
                  type='checkbox'
                  name='os_anterior_chamber_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OS_Anterior_Chamber_Check === '1'}
                  value='1'
                  innerRef={register('os_anterior_chamber_check') as any}
                  disabled
                />
                <Label>Anterior Chamber Depth :</Label>
              </Col>
              <Col>
                <Input
                  id='os_anterior_chamber_depth'
                  type='text'
                  name='os_anterior_chamber_depth'
                  style={{width:'120px', marginLeft:'-40px'}}
                  innerRef={register()}
                  disabled
                />
              </Col>
              <Col>
                <Label>mm</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='os_bmd_mass_check'
                  type='checkbox'
                  name='os_bmd_mass_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OS_BMD_Mass_Check === '1'}
                  value='1'
                  innerRef={register('os_bmd_mass_check') as any}
                  disabled
                />
                <Label>Mass</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='os_bmd_particle_check'
                  type='checkbox'
                  name='os_bmd_particle_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OS_BMD_Particle_Check === '1'}
                  value='1'
                  innerRef={register('os_bmd_particle_check') as any}
                  disabled
                />
                <Label>Particle</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='os_bmd_lainnya_check'
                  type='checkbox'
                  name='os_bmd_lainnya_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OS_BMD_Lainnya_Check === '1'}
                  value='1'
                  innerRef={register('os_bmd_lainnya_check') as any}
                  disabled
                />
                <Label>Lain-Lain</Label>
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className='form-group' row>
        <Row className='mt-1'>
          <Col md='6' sm='12'>
            <Row>
              <Col>
                <Label style={{marginLeft:'30px', width:'80px'}}> AC / Angle:</Label>
              </Col>
              <Col md='4'style={{marginLeft:'20px'}}>
                <Input
                  id='od_scleral_spur_check'
                  type='checkbox'
                  name='od_scleral_spur_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OD_Scleral_Spur_Check === '1'}
                  value='1'
                  innerRef={register('od_scleral_spur_check') as any}
                  disabled
                />
                <Label>Scleral spur angle :</Label>
              </Col>
              <Col>
                <Input
                  id='od_scleral_spur_angle'
                  type='text'
                  name='od_scleral_spur_angle'
                  style={{width:'150px', marginLeft:'-40px'}}
                  innerRef={register()}
                  disabled
                />
              </Col>
              <Col>
                <span style={{marginLeft:'-25px'}}>&#176;</span>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='od_sudut_dangkal_check'
                  type='checkbox'
                  name='od_sudut_dangkal_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OD_Sudut_Dangkal_Check === '1'}
                  value='1'
                  innerRef={register('od_sudut_dangkal_check') as any}
                  disabled
                />
                <Label>Sudut Dangkal</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='od_sudut_dalam_check'
                  type='checkbox'
                  name='od_sudut_dalam_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OD_Sudut_Dalam_Check === '1'}
                  value='1'
                  innerRef={register('od_sudut_dalam_check') as any}
                  disabled
                />
                <Label>Sudut Dalam</Label>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Label style={{marginLeft:'30px', width:'80px'}}> AC / Angle:</Label>
              </Col>
              <Col md='4'style={{marginLeft:'20px'}}>
                <Input
                  id='os_scleral_spur_check'
                  type='checkbox'
                  name='os_scleral_spur_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={ data && data.OS_Scleral_Spur_Check === '1'}
                  value='1'
                  innerRef={register('os_scleral_spur_check') as any}
                  disabled
                />
                <Label>Scleral Spur Angle:</Label>
              </Col>
              <Col>
                <Input
                  id='os_scleral_spur_angle'
                  type='text'
                  name='os_scleral_spur_angle'
                  innerRef={register()}
                  style={{width:'150px', marginLeft:'-40px'}}
                  disabled
                />
              </Col>
              <Col>
                <span style={{marginLeft:'-25px'}}>&#176;</span>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='os_sudut_dangkal_check'
                  type='checkbox'
                  name='os_sudut_dangkal_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OS_Sudut_Dangkal_Check === '1'}
                  value='1'
                  innerRef={register('os_sudut_dangkal_check') as any}
                  disabled
                />
                <Label>Sudut Dangkal</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='os_sudut_dalam_check'
                  type='checkbox'
                  name='os_sudut_dalam_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OS_Sudut_Dalam_Check === '1'}
                  value='1'
                  innerRef={register('os_sudut_dalam_check')as any}
                  disabled
                />
                <Label>Sudut Dalam</Label>
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className='form-group' row>
        <Row className='mt-1'>
          <Col md='6' sm='12'>
            <Row>
              <Col>
                <Label style={{marginLeft:'30px'}}>Iris / Pupil</Label>
              </Col>
              <Col md='9'>
                <Input
                  id='od_blok_pupil_check'
                  type='checkbox'
                  name='od_blok_pupil_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OD_Blok_Pupil_Check === '1'}
                  value='1'
                  innerRef={register('od_blok_pupil_check') as any}
                  disabled
                />
                <Label>Blok Pupil</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='od_plateau_check'
                  type='checkbox'
                  name='od_plateau_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OD_Plateau_Check === '1'}
                  value='1'
                  innerRef={register('od_plateau_check') as any}
                  disabled
                />
                <Label>Plateau</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='od_tumor_kista_check'
                  type='checkbox'
                  name='od_tumor_kista_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OD_Tumor_Kista_Check === '1'}
                  value='1'
                  innerRef={register('od_tumor_kista_check') as any}
                  disabled
                />
                <Label>Tumor / Kista</Label>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Label style={{marginLeft:'30px'}}>Iris / Pupil</Label>
              </Col>
              <Col md='9'>
                <Input
                  id='os_blok_pupil_check'
                  type='checkbox'
                  name='os_blok_pupil_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OS_Blok_Pupil_Check === '1'}
                  value='1'
                  innerRef={register('os_blok_pupil_check') as any}
                  disabled
                />
                <Label>Blok Pupil</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='os_plateau_check'
                  type='checkbox'
                  name='os_plateau_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OS_Plateau_Check === '1'}
                  value='1'
                  innerRef={register('os_plateau_check') as any}
                  disabled
                />
                <Label>Planteau</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='9'>
                <Input
                  id='os_tumor_kista_check'
                  type='checkbox'
                  name='os_tumor_kista_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={ data && data.OS_Tumor_Kista_Check === '1'}
                  value='1'
                  innerRef={register('os_tumor_kista_check') as any}
                  disabled
                />
                <Label>Tumor / Kista</Label>
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className='form-group' row>
        <Row className='mt-1'>
          <Col md='6' sm='12'>
            <Row>
              <Col>
                <Label style={{marginLeft:'30px'}}>Lens</Label>
              </Col>
              <Col>
                <Input
                  id='od_lens_vault_check'
                  type='checkbox'
                  name='od_lens_vault_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OD_Lens_Vault_Check === '1'}
                  value='1'
                  innerRef={register('od_lens_vault_check') as any}
                  disabled
                />
                <Label>Lens Vault :</Label>
              </Col>
              <Col>
                <Input
                  id='od_lens_vault'
                  type='text'
                  name='od_lens_vault'
                  innerRef={register()}
                  disabled

                />
              </Col>
              <Col>
                <Label>mm</Label>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col></Col>
              <Col md='4'style={{marginLeft:'26px'}}>
                <Input
                  id='od_scleral_spur_check'
                  type='checkbox'
                  name='od_scleral_spur_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OD_Scleral_Spur_Check === '1'}
                  value='1'
                  innerRef={register('od_scleral_spur_check') as any}
                  disabled
                />
                <Label>Lens Thickness :</Label>
              </Col>
              <Col>
                <Input
                  id='od_scleral_spur_angle'
                  type='text'
                  name='od_scleral_spur_angle'
                  style={{width:'130px', marginLeft:'-53px'}}
                  innerRef={register()}
                  disabled
                />
              </Col>
              <Col>
                <Label style={{marginLeft:'-25px'}}>mm</Label>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Label style={{marginLeft:'30px'}}>Lens</Label>
              </Col>
              <Col>
                <Input
                  id='os_lens_vault_check'
                  type='checkbox'
                  name='os_lens_vault_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={ data && data.OS_Lens_Vault_Check === '1'}
                  value='1'
                  innerRef={register('os_lens_vault_check') as any}
                  disabled
                />
                <Label>Lens Vault :</Label>
              </Col>
              <Col>
                <Input
                  id='os_lens_vault'
                  type='text'
                  name='os_lens_vault'
                  innerRef={register()}
                  disabled
                />
              </Col>
              <Col>
                <Label>mm</Label>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col></Col>
              <Col md='4'style={{marginLeft:'26px'}}>
                <Input
                  id='os_lens_thickness_check'
                  type='checkbox'
                  name='os_lens_thickness_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.OS_Lens_Thickness_Check === '1'}
                  value='1'
                  innerRef={register('os_lens_thickness_check') as any}
                  disabled
                />
                <Label>Lens Thickness :</Label>
              </Col>
              <Col>
                <Input
                  id='os_lens_thickness'
                  type='text'
                  name='os_lens_thickness'
                  style={{width:'130px', marginLeft:'-53px'}}
                  innerRef={register()}
                  disabled
                />
              </Col>
              <Col>
                <Label style={{marginLeft:'-25px'}}>mm</Label>
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>

      <Table borderless style={{ width: '100%' }}>
        <tbody>
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
              // invalid={errors.id_perawat && true}
            />
            <Input
              type="hidden"
              name="ttd_perawat"
              innerRef={register()}
              // invalid={errors.ttd_perawat && true}
            />
          </div>
        </Col>
        <Col>
          <div className="d-flex justify-content-around my-0">
            <Signature
              label="Dokter Pemeriksa"
              type="picker"
              additionalLabel={(data && data.Nama_Dokter_Pemeriksaan && data.Nama_Dokter_Pemeriksaan !== '') ? data.Nama_Dokter_Pemeriksaan : undefined}
              initialImage={(data && data.TTD_Dokter_Pemeriksaan && data.TTD_Dokter_Pemeriksaan !== '') ? data.TTD_Dokter_Pemeriksaan : undefined}
              persons={doctors}
              onSigned={(assigner: SignatureModel) => handleDoctorSigned(assigner)}
              disabled
            />
            <Input
              type="hidden"
              name="id_dokter_pemeriksaan"
              innerRef={register()}
              // invalid={errors.id_dokter_pemeriksaan && true}
            />
            <Input
              type="hidden"
              name="ttd_dokter_pemeriksaan"
              innerRef={register()}
              // invalid={errors.ttd_dokter_pemeriksaan && true}
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

export default OctCorneaResults;
