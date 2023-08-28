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
import DicomForm from '../../components/form/dicom-form';

const FundusPhotoExaminationDetail = (props: { data: any, item?: any | undefined }) => {
  const { data, item } = props;

  const unit = 'Pemeriksaan_Foto_Fundus'
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const [processing, setProcessing] = useState<boolean | undefined>(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);

  const { register, handleSubmit, errors, setValue, getValues, control } = useForm({
    mode: 'onChange',
    resolver: yupResolver(UpdateFundusPhotoExaminationRequest.schema()),
    defaultValues: {
      od_gain: data && data.Od_Gain ? data.Od_Gain : '',
      od_batas: data && data.Od_Batas ? data.Od_Batas : '',
      od_warna: data && data.Od_Warna ? data.Od_Warna : '',
      od_cupping: data && data.Od_Cupping ? data.Od_Cupping :  '',
      od_retina: data && data.Od_Retina ? data.Od_Retina : '',
      od_break: data && data.Od_Break ? data.Od_Break : '',
      od_pendarahan: data && data.Od_Pendarahan ? data.Od_Pendarahan : '',
      od_av_crossing: data && data.Od_Av_Crossing ? data.Od_Av_Crossing : '',
      od_tortovsity: data && data.Od_Tortovsity ? data.Od_Tortovsity : '',
      od_obstruksi: data && data.Od_Obstruksi ? data.Od_Obstruksi : '',
      od_vitreous: data && data.Od_Vitreous ? data.Od_Vitreous : '',
      od_vitreous_pendarahan: data && data.Od_Vitreous_Pendarahan ? data.Od_Vitreous_Pendarahan : '',
      od_pvd: data && data.Od_Pvd ? data.Od_Pvd : '',
      os_batas: data && data.Os_Batas ? data.Os_Batas : '',
      os_warna: data && data.Os_Warna ? data.Os_Warna : '',
      os_cupping: data && data.Os_Cupping ? data.Os_Cupping : '',
      os_retina: data && data.Os_Retina ? data.Os_Retina : '',
      os_break: data && data.Os_Break ? data.Os_Break : '',
      os_pendarahan: data && data.Os_Pendarahan ? data.Os_Pendarahan : '',
      os_av_crossing: data && data.Os_Av_Crossing ? data.Os_Av_Crossing : '',
      os_tortovsity: data && data.Os_Tortovsity ? data.Os_Tortovsity : '',
      os_obstruksi: data && data.Os_Obstruksi ? data.Os_Obstruksi :  '',
      os_vitreous: data && data.Os_Vitreous ? data.Os_Vitreous : '',
      os_vitreous_pendarahan: data && data.Os_Vitreous_Pendarahan ?  data.Os_Vitreous_Pendarahan : '',
      os_pvd: data && data.Os_Pvd ? data.Os_Pvd : '',
      kesimpulan: data && data.Kesimpulan ? data.Kesimpulan : '',
      'ttd-tanggal': (data && data && data.TTD_Tanggal) ? data.TTD_Tanggal.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      'ttd-perawat-pemeriksa': data && data.TTD_Perawat_Pemeriksa ? data.TTD_Perawat_Pemeriksa : '',
      perawat_rawat_jalan: data && data.Perawat_Pemeriksa_Id ? data.Perawat_Pemeriksa_Id : '',
      // undefined: data && data.
      'ttd-dokter-pemeriksa': data && data.TTD_Dokter_Pemeriksa ? data.TTD_Dokter_Pemeriksa : '',
      dokter: data && data.Dokter_Pemeriksa_Id ? data.Dokter_Pemeriksa_Id : '',
    },
  })

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleDoctorSigned = (image: SignatureModel) => {
    setValue('ttd-dokter-pemeriksa', image.Signature);
    setValue('dokter_pemeriksa', image.ID_Karyawan);
  }

  const handleNurseSigned = (image: SignatureModel) => {
    setValue('ttd-perawat-pemeriksa', image.Signature);
    setValue('perawat_pemeriksa', image.ID_Karyawan);
  }

  const handleSubmitForm = (value: ICreateFundusPhotoExaminationRequest) => {
    
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
     <h4 className="mt-1">Hasil Pemeriksaan Alat</h4>
      <DicomForm
        dicom={data.dicoms} modality={"FS"}
      />
      <h4 className="mt-2">Form Hasil Pemeriksaan Foto Fundus</h4>
      <FormGroup className="form-group" row>
        <Row className="my-2">
          <Col md="6" sm="12">
            <Row>
              <Col md="12" className="d-flex justify-content-center">
                <h5>OD</h5>
              </Col>
              <Col md="12" className="d-flex justify-content-center">
                <h5>PAPIL N.II</h5>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>Batas</Label>
              </Col>
              <Col>
                <Input
                  id="od_batas_1"
                  type="radio"
                  name="od_batas"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Batas === '1'}
                  innerRef={register("od_batas") as any}
                  disabled
                />{' '}
                <Label>Tegas</Label>
              </Col>
              <Col>
                <Input
                  id="od_batas_2"
                  type="radio"
                  name="od_batas"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Batas === '2'}
                  innerRef={register("od_batas") as any}
                  disabled
                />{' '}
                <Label>Kabur</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>Warna</Label>
              </Col>
              <Col>
                <Input
                  id="od_warna_1"
                  type="radio"
                  name="od_warna"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Warna === '1'}
                  innerRef={register("od_warna") as any}
                  disabled
                />{' '}
                <Label>Normal</Label>
              </Col>
              <Col>
                <Input
                  id="od_warna_2"
                  type="radio"
                  name="od_warna"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Warna === '2'}
                  innerRef={register("od_warna") as any}
                  disabled
                />{' '}
                <Label>Hipermi</Label>
              </Col>
              <Col>
                <Input
                  id="od_warna_3"
                  type="radio"
                  name="od_warna"
                  className="me-1"
                  style={{marginLeft:'-30px'}}
                  value="3"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Warna === '3'}
                  innerRef={register("od_warna") as any}
                  disabled
                />{' '}
                <Label>Pucat</Label>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>Cupping</Label>
              </Col>
              <Col>
                <Input
                  id="od_cupping_1"
                  type="radio"
                  name="od_cupping"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Cupping === '1'}
                  innerRef={register("od_cupping") as any}
                  disabled
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col>
                <Input
                  id="od_cupping_2"
                  type="radio"
                  name="od_cupping"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Cupping === '2'}
                  innerRef={register("od_cupping") as any}
                  disabled
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
          </Col>
          <Col md="6" sm="12">
            <Row>
              <Col md="12" className="d-flex justify-content-center">
                <h5>OS</h5>
              </Col>
              <Col md="12" className="d-flex justify-content-center">
                <h5>PAPIL N.II</h5>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>Batas</Label>
              </Col>
              <Col>
                <Input
                  id="os_batas_1"
                  type="radio"
                  name="os_batas"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Batas === '1'}
                  innerRef={register("os_batas") as any}
                  disabled
                />{' '}
                <Label>Tegas</Label>
              </Col>
              <Col>
                <Input
                  id="os_batas_2"
                  type="radio"
                  name="os_batas"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Batas === '2'}
                  innerRef={register("os_batas") as any}
                  disabled
                />{' '}
                <Label>Kabur</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>Warna</Label>
              </Col>
              <Col>
                <Input
                  id="os_warna_1"
                  type="radio"
                  name="os_warna"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Warna === '1'}
                  innerRef={register("os_warna") as any}
                  disabled
                />{' '}
                <Label>Normal</Label>
              </Col>
              <Col>
                <Input
                  id="os_warna_2"
                  type="radio"
                  name="os_warna"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Warna === '2'}
                  innerRef={register("os_warna") as any}
                  disabled
                />{' '}
                <Label>Hipermi</Label>
              </Col>
              <Col>
                <Input
                  id="os_warna_3"
                  type="radio"
                  name="os_warna"
                  className="me-1"
                  style={{marginLeft:'-30px'}}
                  value="3"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Warna === '3'}
                  innerRef={register("os_warna") as any}
                  disabled
                />{' '}
                <Label>Pucat</Label>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>Cupping</Label>
              </Col>
              <Col>
                <Input
                  id="os_cupping_1"
                  type="radio"
                  name="os_cupping"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Cupping === '1'}
                  innerRef={register("os_cupping") as any}
                  disabled
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col>
                <Input
                  id="os_cupping"
                  type="radio"
                  name="os_cupping"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Cupping === '2'}
                  innerRef={register("os_cupping") as any}
                  disabled
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className="form-group" row>
        <Row>
          <Col md="6" sm="12">
            <Row>
              <Col md="12" className="d-flex justify-content-center">
                <h5>RETINA</h5>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>Retina</Label>
              </Col>
              <Col>
                <Input
                  id="od_retina_1"
                  type="radio"
                  name="od_retina"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Retina === '1'}
                  innerRef={register("od_retina") as any}
                  disabled
                />{' '}
                <Label>Attach</Label>
              </Col>
              <Col>
                <Input
                  id="od_retina_2"
                  type="radio"
                  name="od_retina"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Retina === '2'}
                  innerRef={register("od_retina") as any}
                  disabled
                />{' '}
                <Label>Detach</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>Break</Label>
              </Col>
              <Col>
                <Input
                  id="od_break_1"
                  type="radio"
                  name="od_break"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Break === '1'}
                  innerRef={register("od_break") as any}
                  disabled
                />{' '}
                <Label>Positif(+)</Label>
              </Col>
              <Col>
                <Input
                  id="od_break_2"
                  type="radio"
                  name="od_break"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Break === '2'}
                  innerRef={register("od_break") as any}
                  disabled
                />{' '}
                <Label>Negatif(-)</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>Pendarahan</Label>
              </Col>
              <Col>
                <Input
                  id="od_pendarahan_1"
                  type="radio"
                  name="od_pendarahan"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Pendarahan === '1'}
                  innerRef={register("od_pendarahan") as any}
                  disabled
                />{' '}
                <Label>Positif(+)</Label>
              </Col>
              <Col>
                <Input
                  id="od_pendarahan_2"
                  type="radio"
                  name="od_pendarahan"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Pendarahan === '2'}
                  innerRef={register("od_pendarahan") as any}
                  disabled
                />{' '}
                <Label>Negatif(-)</Label>
              </Col>
              <Col></Col>
            </Row>
          </Col>
          <Col md="6" sm="12">
            <Row>
              <Col md="12" className="d-flex justify-content-center">
                <h5>RETINA</h5>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>Retina</Label>
              </Col>
              <Col>
                <Input
                  id="os_retina"
                  type="radio"
                  name="os_retina"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Retina === '1'}
                  innerRef={register("os_retina") as any}
                  disabled
                />{' '}
                <Label>Tegas</Label>
              </Col>
              <Col>
                <Input
                  id="os_retina_2"
                  type="radio"
                  name="os_retina"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Retina === '2'}
                  innerRef={register("os_retina") as any}
                  disabled
                />{' '}
                <Label>Kabur</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>Break</Label>
              </Col>
              <Col>
                <Input
                  id="os_break"
                  type="radio"
                  name="os_break"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Break === '1'}
                  innerRef={register("os_break") as any}
                  disabled
                />{' '}
                <Label>Positif(+)</Label>
              </Col>
              <Col>
                <Input
                  id="os_break_2"
                  type="radio"
                  name="os_break"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Break === '2'}
                  innerRef={register("os_break") as any}
                  disabled
                />{' '}
                <Label>Negatif(-)</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>Pendarahan</Label>
              </Col>
              <Col>
                <Input
                  id="Os_Pendarahan"
                  type="radio"
                  name="Os_Pendarahan"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Cupping === '1'}
                  innerRef={register("Os_Pendarahan") as any}
                  disabled
                />{' '}
                <Label>Positif(+)</Label>
              </Col>
              <Col>
                <Input
                  id="Os_Pendarahan_2"
                  type="radio"
                  name="Os_Pendarahan"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Cupping === '2'}
                  innerRef={register("Os_Pendarahan") as any}
                  disabled
                />{' '}
                <Label>Negatif(-)</Label>
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className="form-group" row>
        <Row className="my-1">
          <Col md="6" sm="12">
            <Row>
              <Col md="12" className="d-flex justify-content-center">
                <h5>PEMBULUH DARAH</h5>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>AV Crossing</Label>
              </Col>
              <Col>
                <Input
                  id="od_av_crossing"
                  type="radio"
                  name="od_av_crossing"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Retina === '1'}
                  innerRef={register("od_av_crossing") as any}
                  disabled
                />{' '}
                <Label>Positif(+)</Label>
              </Col>
              <Col>
                <Input
                  id="od_av_crossing_2"
                  type="radio"
                  name="od_av_crossing"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Retina === '2'}
                  innerRef={register("od_av_crossing") as any}
                  disabled
                />{' '}
                <Label>Negatif(-)</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>Tortovsity</Label>
              </Col>
              <Col>
                <Input
                  id="od_tortovsity_1"
                  type="radio"
                  name="od_tortovsity"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Tortovsity === '1'}
                  innerRef={register("od_tortovsity") as any}
                  disabled
                />{' '}
                <Label>Positif(+)</Label>
              </Col>
              <Col>
                <Input
                  id="od_tortovsity_2"
                  type="radio"
                  name="od_tortovsity"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Tortovsity === '2'}
                  innerRef={register("od_tortovsity") as any}
                  disabled
                />{' '}
                <Label>Negatif(-)</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>Obstruksi</Label>
              </Col>
              <Col>
                <Input
                  id="od_obstruksi_1"
                  type="radio"
                  name="od_obstruksi"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Obstruksi === '1'}
                  innerRef={register("od_obstruksi") as any}
                  disabled
                />{' '}
                <Label>Positif(+)</Label>
              </Col>
              <Col>
                <Input
                  id="od_obstruksi_2"
                  type="radio"
                  name="od_obstruksi"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Obstruksi === '2'}
                  innerRef={register("od_obstruksi") as any}
                  disabled
                />{' '}
                <Label>Negatif(-)</Label>
              </Col>
              <Col></Col>
            </Row>
          </Col>
          <Col md="6" sm="12">
            <Row>
              <Col md="12" className="d-flex justify-content-center">
                <h5>PEMBULUH DARAH</h5>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>AV Crossing</Label>
              </Col>
              <Col>
                <Input
                  id="os_av_crossing"
                  type="radio"
                  name="os_av_crossing"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Retina === '1'}
                  innerRef={register("os_av_crossing") as any}
                  disabled
                />{' '}
                <Label>Positif(+)</Label>
              </Col>
              <Col>
                <Input
                  id="os_av_crossing_2"
                  type="radio"
                  name="os_av_crossing"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Retina === '2'}
                  innerRef={register("os_av_crossing") as any}
                  disabled
                />{' '}
                <Label>Negatif(-)</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>Tortovsity</Label>
              </Col>
              <Col>
                <Input
                  id="os_tortovsity_1"
                  type="radio"
                  name="os_tortovsity"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Tortovsity === '1'}
                  innerRef={register("os_tortovsity") as any}
                  disabled
                />{' '}
                <Label>Positif(+)</Label>
              </Col>
              <Col>
                <Input
                  id="os_tortovsity_2"
                  type="radio"
                  name="os_tortovsity"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Tortovsity === '2'}
                  innerRef={register("os_tortovsity") as any}
                  disabled
                />{' '}
                <Label>Negatif(-)</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>Obstruksi</Label>
              </Col>
              <Col>
                <Input
                  id="os_obstruksi_1"
                  type="radio"
                  name="os_obstruksi"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Obstruksi === '1'}
                  innerRef={register("os_obstruksi") as any}
                  disabled
                />{' '}
                <Label>Positif(+)</Label>
              </Col>
              <Col>
                <Input
                  id="os_obstruksi_2"
                  type="radio"
                  name="os_obstruksi"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Obstruksi === '2'}
                  innerRef={register("os_obstruksi") as any}
                  disabled
                />{' '}
                <Label>Negatif(-)</Label>
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className="form-group" row>
        <Row>
          <Col md="6" sm="12">
            <Row>
              <Col md="12" className="d-flex justify-content-center">
                <h5>Vitreous</h5>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>Vitreous</Label>
              </Col>
              <Col>
                <Input
                  id="od_vitreous"
                  type="radio"
                  name="od_vitreous"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Vitreous === '1'}
                  innerRef={register("od_vitreous") as any}
                  disabled
                />{' '}
                <Label>Keruh</Label>
              </Col>
              <Col>
                <Input
                  id="od_vitreous_2"
                  type="radio"
                  name="od_vitreous"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Vitreous === '2'}
                  innerRef={register("od_vitreous") as any}
                  disabled
                />{' '}
                <Label>Jernih</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>Pendarahan</Label>
              </Col>
              <Col>
                <Input
                  id="od_vitreous_pendarahan"
                  type="radio"
                  name="od_vitreous_pendarahan"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Vitreous_Pendarahan === '1'}
                  innerRef={register("od_vitreous_pendarahan") as any}
                  disabled
                />{' '}
                <Label>Positif(+)</Label>
              </Col>
              <Col>
                <Input
                  id="od_vitreous_pendarahan_2"
                  type="radio"
                  name="od_vitreous_pendarahan"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Vitreous_Pendarahan === '2'}
                  innerRef={register("od_vitreous_pendarahan") as any}
                  disabled
                />{' '}
                <Label>Negatif(-)</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>PVD</Label>
              </Col>
              <Col>
                <Input
                  id="od_pvd_1"
                  type="radio"
                  name="od_pvd"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Pvd === '1'}
                  innerRef={register("od_pvd") as any}
                  disabled
                />{' '}
                <Label>Positif(+)</Label>
              </Col>
              <Col>
                <Input
                  id="od_pvd_2"
                  type="radio"
                  name="od_pvd"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Od_Pvd === '2'}
                  innerRef={register("od_pvd") as any}
                  disabled
                />{' '}
                <Label>Negatif(-)</Label>
              </Col>
              <Col></Col>
            </Row>
          </Col>
          <Col md="6" sm="12">
            <Row>
              <Col md="12" className="d-flex justify-content-center">
                <h5>Vitreous</h5>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>Vitreous</Label>
              </Col>
              <Col>
                <Input
                  id="os_vitreous"
                  type="radio"
                  name="os_vitreous"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Vitreous === '1'}
                  innerRef={register("os_vitreous") as any}
                  disabled
                />{' '}
                <Label>Keruh</Label>
              </Col>
              <Col>
                <Input
                  id="os_vitreous_2"
                  type="radio"
                  name="os_vitreous"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Vitreous === '2'}
                  innerRef={register("os_vitreous") as any}
                  disabled
                />{' '}
                <Label>Jernih</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>Pendarahan</Label>
              </Col>
              <Col>
                <Input
                  id="os_vitreous_pendarahan"
                  type="radio"
                  name="os_vitreous_pendarahan"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Vitreous_Pendarahan === '1'}
                  innerRef={register("os_vitreous_pendarahan") as any}
                  disabled
                />{' '}
                <Label>Positif(+)</Label>
              </Col>
              <Col>
                <Input
                  id="os_vitreous_pendarahan_2"
                  type="radio"
                  name="os_vitreous_pendarahan"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Vitreous_Pendarahan === '2'}
                  innerRef={register("os_vitreous_pendarahan") as any}
                  disabled
                />{' '}
                <Label>Negatif(-)</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}>
                <Label>PVD</Label>
              </Col>
              <Col>
                <Input
                  id="os_pvd_1"
                  type="radio"
                  name="os_pvd"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Pvd === '1'}
                  innerRef={register("os_pvd") as any}
                  disabled
                />{' '}
                <Label>Positif(+)</Label>
              </Col>
              <Col>
                <Input
                  id="os_pvd_2"
                  type="radio"
                  name="os_pvd"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.Os_Pvd === '2'}
                  innerRef={register("os_pvd") as any}
                  disabled
                />{' '}
                <Label>Negatif(-)</Label>
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>

      {/* <FormGroup className="form-group" row>
        <Row>
          <Col style={{marginLeft:'30px'}}>
            <Label>Kesimpulan</Label>
          </Col>
          <Col>
            <Input
              id="kesimpulan"
              type="textarea"
              style={{marginLeft: '-82%', width: '160%'}}
              name="kesimpulan"
              innerRef={register({ required: true }) as any}
            />
          </Col>
        </Row>
      </FormGroup> */}

      <Table borderless style={{ width: '100%' }}>
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
                  // style={{marginTop: '-50px'}}
                  name="kesimpulan"
                  innerRef={register({ required: true }) as any}
                  disabled
                />
              </Col>
            </Row>
          </td>
        </tr>
        <tr>
          <td>
            <Label style={{marginTop: '-50px'}}>Tanggal *</Label>
          </td>
          <td style={{width:'83%'}}>
            <Row>
              <Col>
                <DateTimeInput
                  name='ttd-tanggal'
                  defaultValue='date'
                  md={1}
                  style={{marginTop: '-30px'}}
                  {...{ register, errors }}
                  readOnly
                />
              </Col>
            </Row>
          </td>
        </tr>
      </Table>
      <Row className="mt-2">
        <Col>
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
            name="perawat_rawat_jalan"
            innerRef={register()}
            invalid={errors.perawat_rawat_jalan && true}
          />
          <Input
            type="hidden"
            name="ttd-perawat-pemeriksa"
            innerRef={register()}
            invalid={errors['ttd-perawat-pemeriksa'] && true}
          />
        </Col>
        <Col>
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
            // invalid={errors.dokter_pemeriksa && true}
          />
          <Input
            type="hidden"
            name="ttd-dokter-pemeriksa"
            innerRef={register()}
            // invalid={errors['ttd-dokter-pemeriksa'] && true}
          />
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

export default FundusPhotoExaminationDetail;
