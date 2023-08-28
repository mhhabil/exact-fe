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
import { CreateRetinaOCTResultRequest, ICreateRetinaOCTResultRequest } from '../../requests/create-retina-oct-result-request';
import { AppRequest } from '@src/shared/request';
import { ToolInspectionService } from '../../services';
import { UpdateRetinaOCTResultRequest } from '../../requests/update-retina-oct-result-request';
import { PdfRetinaOctResultRequest } from '@modules/outpatient/inspection-result/requests/pdf-retina-oct-result.request';
import DicomForm from '../../components/form/dicom-form';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const RetinaOctResultForm = (props: { data: any, dicom?: any | undefined, onSuccessSubmit: any, onCancel: any }) => {
  const kesimpulan = [
    'ODS DBN',
    'Lain-lain',
  ];

  const { data, dicom, onSuccessSubmit, onCancel } = props;
  const unit = 'Pemeriksaan_Oct_Retina'
  const [defaultPattern, setDefaultPattern] = useState<any>();
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const [processing, setProcessing] = useState<boolean | undefined>(false);
  const [vitreoretinalOd, setVitreoretinalOd] = useState<any>(`${data?.Od_Vitreoretinal}`);
  const [fovealOd, setFovealOd] = useState<any>(`${data?.Od_Foveal}`);
  const [intraretinalOd, setIntraretinalOd] = useState<any>(`${data?.Od_Intraretinal}`);
  const [rpeOd, setRpeOd] = useState<any>(`${data?.Od_Rpe}`);
  const [vitreoretinalOs, setVitreoretinalOs] = useState<any>(`${data?.Os_Vitreoretinal}`);
  const [fovealOs, setFovealOs] = useState<any>(`${data?.Os_Foveal}`);
  const [intraretinalOs, setIntraretinalOs] = useState<any>(`${data?.Os_Intraretinal}`);
  const [rpeOs, setRpeOs] = useState<any>(`${data?.Os_Rpe}`);
  const [kesimpulanDefault, setKesimpulanDefault] = useState<any>(!!((data && data.Kesimpulan !== '') || (data && data.Kesimpulan_Opt === 'Lain-lain')))

  useEffect(() => {
    if (data && data.form) {
      setKesimpulanDefault(`${data?.Kesimpulan}`);
    }
  }, [data])

  useEffect(() => {
    if (defaultPattern === '1') {
      setValue('od_vitreoretinal', '1');
      setVitreoretinalOd('1');
      setValue('od_foveal', '1');
      setFovealOd('1');
      setValue('od_intraretinal', '5');
      setIntraretinalOd('5');
      setValue('od_intraretinal_text', 'Normal');
      setValue('od_choroid', 'Normal');
      setValue('od_central_macular', '250-300');
      setValue('os_intraretinal_text', 'Normal');
      setValue('os_choroid', 'Normal');
      setValue('od_rpe', '1');
      setValue('os_central_macular', '250-300');
      setRpeOd('1');
      setValue('os_vitreoretinal', '1');
      setVitreoretinalOs('1');
      setValue('os_foveal', '1');
      setFovealOs('1');
      setValue('os_intraretinal', '5');
      setIntraretinalOs('5');
      setValue('os_rpe', '1');
      setRpeOs('1');
    } else if (defaultPattern === '0') {
      setValue('od_vitreoretinal', undefined);
      setVitreoretinalOd(undefined);
      setValue('od_foveal', undefined);
      setFovealOd(undefined);
      setValue('od_intraretinal', undefined);
      setIntraretinalOd(undefined);
      setValue('od_intraretinal_text', undefined);
      setValue('od_choroid', undefined);
      setValue('od_central_macular', undefined);
      setValue('os_intraretinal_text', undefined);
      setValue('os_choroid', undefined);
      setValue('od_rpe', undefined);
      setValue('os_central_macular', undefined);
      setRpeOd(undefined);
      setValue('os_vitreoretinal', undefined);
      setVitreoretinalOs(undefined);
      setValue('os_foveal', undefined);
      setFovealOs(undefined);
      setValue('os_intraretinal', undefined);
      setIntraretinalOs(undefined);
      setValue('os_rpe', undefined);
      setRpeOs(undefined);
    }
  }, [defaultPattern])

  const { register, handleSubmit, errors, setValue, getValues, control } = useForm({
    mode: 'onChange',
    // resolver: yupResolver(CreateRetinaOCTResultRequest.schema()),
    defaultValues: {
      'ttd-tanggal': (data && data && data.TTD_Tanggal) ? data.TTD_Tanggal.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      od_vitreoretinal: data && data.Od_Vitreoretinal ? data.Od_Vitreoretinal : '',
      od_foveal: data && data.Od_Foveal ? data.Od_Foveal : '',
      od_intraretinal: data && data.Od_Intraretinal ? data.Od_Intraretinal : '',
      od_intraretinal_text: data && data.Od_Intraretinal_Text ? data.Od_Intraretinal_Text : '',
      od_rpe: data && data.Od_Rpe ? data.Od_Rpe : '',
      od_choroid: data && data.Od_Choroid ? data.Od_Choroid : '',
      od_central_macular: data && data.Od_Central_Macular ? data.Od_Central_Macular : '',
      od_lain_lain: data && data.Od_Lain_Lain ? data.Od_Lain_Lain : '',
      os_vitreoretinal: data && data.Os_Vitreoretinal ? data.Os_Vitreoretinal : '',
      os_foveal: data && data.Os_Foveal ? data.Os_Foveal : '',
      os_intraretinal: data && data.Os_Intraretinal ? data.Os_Intraretinal : '',
      os_intraretinal_text: data && data.Os_Intraretinal_Text ? data.Os_Intraretinal_Text : '',
      os_rpe: data && data.Os_Rpe ? data.Os_Rpe : '',
      os_choroid: data && data.Os_Choroid ? data.Os_Choroid : '',
      os_central_macular: data && data.Os_Central_Macular ? data.Os_Central_Macular : '',
      os_lain_lain: data && data.Os_Lain_Lain ? data.Os_Lain_Lain : '',
      kesimpulan: data && data.Kesimpulan ? data.Kesimpulan : '',
      'ttd-perawat-pemeriksa': data && data.TTD_Perawat_Pemeriksa ? data.TTD_Perawat_Pemeriksa : '',
      'ttd-dokter-pemeriksa': data && data.TTD_Dokter_Pemeriksa ? data.TTD_Dokter_Pemeriksa : '',
      dokter_pemeriksa: data && data.Dokter_Pemeriksa_Id ? data.Dokter_Pemeriksa_Id : '',
      perawat_pemeriksa: data && data.Perawat_Pemeriksa_Id ? data.Perawat_Pemeriksa_Id : '',
      kesimpulan_opt: data && data.Kesimpulan_Opt ? data.Kesimpulan_Opt : data && data.Kesimpulan && data.Kesimpulan !== '' ? 'Lain-lain' : 'ODS DBN',
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

  const handleChangeKesimpulanOd = (e: any) => {
    if (e.target.value === 'Lain-lain') {
      setKesimpulanDefault(true);
    } else {
      setKesimpulanDefault(false);
    }
  }

  const handleNurseSigned = (image: SignatureModel) => {
    setValue('ttd-perawat-pemeriksa', image.Signature);
    setValue('perawat_pemeriksa', image.ID_Karyawan);
  }

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleSubmitForm = (value: ICreateRetinaOCTResultRequest) => {
    if (!treatment) {
      return false;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    if (!data) {
      const params = CreateRetinaOCTResultRequest.createFromJson({...value, ...appRequest, unit });
      ToolInspectionService().create(params)
        .then((response) => {
          if (response && response.data && response.data.data) {
            const params2 = {...appRequest, ID: response.data.data.item_id, itemId: response.data.data.item_id, unit, emr_id: response.data.data.EMR_ID};
            ToolInspectionService().view(params2)
              .then((resp) => {
                const { data } = resp.data;
                ToolInspectionService().pdfv3(PdfRetinaOctResultRequest.createPdfRequest({ ...data, nomor_mr: appRequest.nomor_mr, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
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
      const params = UpdateRetinaOCTResultRequest.createFromJson({...value, ...appRequest, ID: data.ID, unit, emr_id: data.EMR_ID });
      ToolInspectionService().update(params)
        .then(() => {
          const params3 = {...appRequest, ID: data.ID, itemId: data.ID, unit, emr_id: data.EMR_ID};
          ToolInspectionService().view(params3)
            .then((resp) => {
              const { data } = resp.data;
              ToolInspectionService().pdfv3(PdfRetinaOctResultRequest.createPdfRequest({...data, nomor_mr: appRequest.nomor_mr, umur_lengkap: treatment?.Pasien?.Umur_Lengkap}, appRequest.emr_id))
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
        dicom={dicom} modality={"OCT"}
      />
      <FormGroup className="form-group" row>
        <Row className="my-1">
          <Col md="6" sm="12">
            <Row>
              <Col style={{marginLeft:'30px'}}>
              </Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </Col>
          <Col md="6" sm="12">
            <Row>
              <Col style={{marginTop:'30px',  marginLeft:'40px'}}>
                <Label>Tanggal *</Label>
              </Col>
              <Col>
                <DateTimeInput
                  name='ttd-tanggal'
                  defaultValue='date'
                  md={1}
                  style={{marginLeft: '-50px'}}
                  {...{ register, errors }}
                />
              </Col>
              {/* <Col></Col> */}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              className="me-1"
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  setDefaultPattern('1');
                } else {
                  setDefaultPattern('0');
                }
              }}
            />
            <Label>Checklist Default</Label>
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
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>Vitreoretinal Interface </Label>
              </Col>
              <Col md='7'>
                <Input
                  id='od_vitreoretinal_1'
                  type='radio'
                  name='od_vitreoretinal'
                  className='me-1'
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={ vitreoretinalOd === '1'}
                  value='1'
                  innerRef={register({required: false})}
                />
                <Label>Normal</Label>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}></Col>
              <Col md='7'>
                <Input
                  id='od_vitreoretinal_2'
                  type='radio'
                  name='od_vitreoretinal'
                  className='me-1'
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={ vitreoretinalOd === '2'}
                  value='2'
                  innerRef={register({required: false})}
                />
                <Label>Hiperrefleksi Membran</Label>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>Foveal Depression</Label>
              </Col>
              <Col md='7'>
                <Input
                  id='od_foveal_1'
                  type='radio'
                  name='od_foveal'
                  className='me-1'
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={ fovealOd === '1'}
                  value='1'
                  innerRef={register({required: false})}
                />
                <Label>Positif (+)</Label>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}></Col>
              <Col md='7'>
                <Input
                  id='od_foveal_2'
                  type='radio'
                  name='od_foveal'
                  className='me-1'
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={ fovealOd === '2'}
                  value='2'
                  innerRef={register({required: false})}
                />
                <Label>Negatif (-)</Label>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>Intraretinal</Label>
              </Col>
              <Col md='7'>
                <Input
                  id='od_intraretinal_1'
                  type='radio'
                  name='od_intraretinal'
                  className='me-1'
                  value='1'
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={ intraretinalOd === '1'}
                  innerRef={register({required: false})}
                />
                <Label>Hiperrevlektivitas</Label>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}></Col>
              <Col md='7'>
                <Input
                  id='od_intraretinal_2'
                  type='radio'
                  name='od_intraretinal'
                  className='me-1'
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={ intraretinalOd === '2'}
                  value='2'
                  innerRef={register({required: false})}
                />
                <Label>Hiporreflektivitas</Label>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}></Col>
              <Col md='7'>
                <Input
                  id='od_intraretinal_3'
                  type='radio'
                  name='od_intraretinal'
                  className='me-1'
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={ intraretinalOd === '3'}
                  value='3'
                  innerRef={register({required: false})}
                />
                <Label>Continue</Label>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}></Col>
              <Col md='7'>
                <Input
                  id='od_intraretinal_4'
                  type='radio'
                  name='od_intraretinal'
                  className='me-1'
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={ intraretinalOd === '4'}
                  value='4'
                  innerRef={register({required: false})}
                />
                <Label>Discontinue</Label>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}></Col>
              <Col md='7'>
                <Input
                  id='od_intraretinal_5'
                  type='radio'
                  name='od_intraretinal'
                  className='me-1'
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={ intraretinalOd === '5'}
                  value='5'
                  innerRef={register({required: false})}
                />
                <Label>Lain-lain</Label>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}></Col>
              <Col md='7'>
                <Input
                  id="od_intraretinal_text"
                  type="text"
                  name="od_intraretinal_text"
                  className="me-1"
                  innerRef={register()}
                />{' '}
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>RPE</Label>
              </Col>
              <Col md='7'>
                <Input
                  id="od_rpe_1"
                  type="radio"
                  name="od_rpe"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={rpeOd === '1'}
                  innerRef={register({required: false})}
                />{' '}
                <Label>Reguler</Label>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}></Col>
              <Col md='7'>
                <Input
                  id="od_rpe_2"
                  type="radio"
                  name="od_rpe"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={rpeOd === '2'}
                  innerRef={register({required: false})}
                />{' '}
                <Label>Irreguler</Label>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}></Col>
              <Col md='7'>
                <Input
                  id="od_rpe_3"
                  type="radio"
                  name="od_rpe"
                  className="me-1"
                  value="3"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={rpeOd === '3'}
                  innerRef={register({required: false})}
                />{' '}
                <Label>Penebalan</Label>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>Choroid</Label>
              </Col>
              <Col md='7'>
                <Input
                  id="od_choroid"
                  type="textarea"
                  name="od_choroid"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>Central Macular Thickness</Label>
              </Col>
              <Col md='7'>
                <Input
                  id="od_central_macular"
                  type="textarea"
                  name="od_central_macular"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>Lain-Lain</Label>
              </Col>
              <Col md='7'>
                <Input
                  id="od_lain_lain"
                  type="textarea"
                  name="od_lain_lain"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
          </Col>
          <Col md="6" sm="12">
            <Row>
              <Col md="12" className="d-flex justify-content-center">
                <h5>OS</h5>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col>
                <Label style={{marginLeft:'30px'}}>Vitreoretinal Interface</Label>
              </Col>
              <Col md='7'>
                <Input
                  id='os_vitreoretinal_1'
                  type='radio'
                  name='os_vitreoretinal'
                  className='me-1'
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={ vitreoretinalOs === '1'}
                  value='1'
                  innerRef={register({required: false})}
                />
                <Label>Normal</Label>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md='7'>
                <Input
                  id='os_vitreoretinal_2'
                  type='radio'
                  name='os_vitreoretinal'
                  className='me-1'
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={vitreoretinalOs === '2'}
                  value='2'
                  innerRef={register({required: false})}
                />
                <Label>Hiperrefleksi Membran</Label>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>Foveal Depression</Label>
              </Col>
              <Col md='7'>
                <Input
                  id='os_foveal_1'
                  type='radio'
                  name='os_foveal'
                  className='me-1'
                  onChange={(e) => handleRadioChange(e)}
                  value='1'
                  defaultChecked={ fovealOs === '1'}
                  innerRef={register({required: false})}
                />
                <Label>Positif (+)</Label>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}></Col>
              <Col md='7'>
                <Input
                  id='os_foveal_2'
                  type='radio'
                  name='os_foveal'
                  className='me-1'
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={ fovealOs === '2'}
                  value='2'
                  innerRef={register({required: false})}
                />
                <Label>Negatif (-)</Label>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>Intraretinal</Label>
              </Col>
              <Col md='7'>
                <Input
                  id='os_intraretinal_1'
                  type='radio'
                  name='os_intraretinal'
                  className='me-1'
                  onChange={(e) => handleRadioChange(e)}
                  value='1'
                  defaultChecked={ intraretinalOs === '1'}
                  innerRef={register({required: false})}
                />
                <Label>Hiperrevlektivitas</Label>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}></Col>
              <Col md='7'>
                <Input
                  id='os_intraretinal_2'
                  type='radio'
                  name='os_intraretinal'
                  className='me-1'
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={ intraretinalOs === '2'}
                  value='2'
                  innerRef={register({required: false})}
                />
                <Label>Hiporreflektivitas</Label>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}></Col>
              <Col md='7'>
                <Input
                  id='os_intraretinal_3'
                  type='radio'
                  name='os_intraretinal'
                  className='me-1'
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={ intraretinalOs === '3'}
                  value='3'
                  innerRef={register({required: false})}
                />
                <Label>Continue</Label>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}></Col>
              <Col md='7'>
                <Input
                  id='os_intraretinal_4'
                  type='radio'
                  name='os_intraretinal'
                  className='me-1'
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={ intraretinalOs === '4'}
                  value='4'
                  innerRef={register({required: false})}
                />
                <Label>Discontinue</Label>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}></Col>
              <Col md='7'>
                <Input
                  id='os_intraretinal_5'
                  type='radio'
                  name='os_intraretinal'
                  className='me-1'
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={ intraretinalOs === '5'}
                  value='5'
                  innerRef={register({required: false})}
                />
                <Label>Lain-lain</Label>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}></Col>
              <Col md='7'>
                <Input
                  id="os_intraretinal_text"
                  type="text"
                  name="os_intraretinal_text"
                  className="me-1"
                  innerRef={register()}
                />{' '}
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>RPE</Label>
              </Col>
              <Col md='7'>
                <Input
                  id="os_rpe_1"
                  type="radio"
                  name="os_rpe"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={rpeOs === '1'}
                  innerRef={register({required: false})}
                />{' '}
                <Label>Reguler</Label>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}></Col>
              <Col md='7'>
                <Input
                  id="os_rpe_2"
                  type="radio"
                  name="os_rpe"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={rpeOs === '2'}
                  innerRef={register({required: false})}
                />{' '}
                <Label>Irreguler</Label>
              </Col>
            </Row>
            <Row>
              <Col style={{marginLeft:'30px'}}></Col>
              <Col md='7'>
                <Input
                  id="os_rpe_3"
                  type="radio"
                  name="os_rpe"
                  className="me-1"
                  value="3"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={rpeOs === '3'}
                  innerRef={register({required: false})}
                />{' '}
                <Label>Penebalan</Label>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>Choroid</Label>
              </Col>
              <Col md='7'>
                <Input
                  id="os_choroid"
                  type="textarea"
                  name="os_choroid"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>Central Macular Thickness</Label>
              </Col>
              <Col md='7'>
                <Input
                  id="os_central_macular"
                  type="textarea"
                  name="os_central_macular"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>Lain-Lain</Label>
              </Col>
              <Col md='7'>
                <Input
                  id="os_lain_lain"
                  type="textarea"
                  name="os_lain_lain"
                  innerRef={register() as any}
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
              <Label>Kesimpulan</Label>
            </td>
            <td style={{width:'93%'}}>
              <Row>
                <Col>
                  <Input
                    id="kesimpulan_opt"
                    type="select"
                    name="kesimpulan_opt"
                    onChange={(e) => handleChangeKesimpulanOd(e)}
                    invalid={errors.kesimpulan_opt && true}
                    innerRef={register({ required: false }) as any}
                  >
                    {
                      kesimpulan.map((option, key) => {
                        return <option value={option} key={key}>{ option }</option>;
                      })
                    }
                  </Input>
                  {
                    kesimpulanDefault && (
                      <Input
                        type="text"
                        className='mt-1'
                        id="kesimpulan"
                        name="kesimpulan"
                        innerRef={register({ required: true })}
                      // invalid={errors.kesimpulan && true}
                      />
                    )
                  }
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
              invalid={errors.perawat_pemeriksa && true}
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
              invalid={errors.dokter_pemeriksa && true}
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
    </Form>
  )
}

export default RetinaOctResultForm;
