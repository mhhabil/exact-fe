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
import DicomForm from '../../components/form/dicom-form';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const FundusPhotoExamination = (props: { data: any, dicom?: any | undefined, onSuccessSubmit: any, onCancel: any }) => {
  const kesimpulan = [
    'ODS DBN',
    'Lain-lain',
  ];
  const { data, dicom, onSuccessSubmit, onCancel } = props;

  const unit = 'Pemeriksaan_Foto_Fundus'
  const [defaultPattern, setDefaultPattern] = useState<any>();
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const [processing, setProcessing] = useState<boolean | undefined>(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const [batasOd, setBatasOd] = useState<string | undefined>(`${data?.Od_Batas}`);
  const [warnaOd, setWarnaOd] = useState<any>(`${data?.Od_Warna}`);
  const [cuppingOd, setCuppingOd] = useState<any>(`${data?.Od_Cupping}`);
  const [retinaOd, setRetinaOd] = useState<any>(`${data?.Od_Retina}`);
  const [breakOd, setBreakOd] = useState<any>(`${data?.Od_Break}`);
  const [pendarahanOd, setPendarahanOd] = useState<any>(`${data?.Od_Pendarahan}`);
  const [crossingOd, setCrossingOd] = useState<any>(`${data?.Od_Av_Crossing}`);
  const [tortovsityOd, setTortovsityOd] =  useState<any>(`${data?.Od_Tortovsity}`);
  const [obstruksiOd, setObstruksiOd] = useState<any>(`${data?.Od_Obstruksi}`);
  const [vitreousOd, setVitreousOd] = useState<any>(`${data?.Od_Vitreous}`);
  const [vitreousPendarahanOd, setVitreousPendarahanOd] = useState<any>(`${data?.Od_Vitreous_Pendarahan}`);
  const [pvdOd, setPvdOd] = useState<any>(`${data?.Od_Pvd}`);

  const [batasOs, setBatasOs] = useState<any>(`${data?.Os_Batas}`);
  const [warnaOs, setWarnaOs] = useState<any>(`${data?.Os_Warna}`);
  const [cuppingOs, setCuppingOs] = useState<any>(`${data?.Os_Cupping}`);
  const [retinaOs, setRetinaOs] = useState<any>(`${data?.Os_Retina}`);
  const [breakOs, setBreakOs] = useState<any>(`${data?.Os_Break}`);
  const [pendarahanOs, setPendarahanOs] = useState<any>(`${data?.Os_Pendarahan}`);
  const [crossingOs, setCrossingOs] = useState<any>(`${data?.Os_Av_Crossing}`);
  const [tortovsityOs, setTortovsityOs] = useState<any>(`${data?.Os_Tortovsity}`);
  const [obstruksiOs, setObstruksiOs] = useState<any>(`${data?.Os_Obstruksi}`);
  const [vitreousOS, setVitreousOs] = useState<any>(`${data?.Os_Vitreous}`);
  const [pvdOs, setPvdOs] = useState<any>(`${data?.Os_Pvd}`);
  const [vitreousPendarahanOs, setVitreousPendarahanOs] = useState<any>(`${data?.Os_Vitreous_Pendarahan}`);
  const [kesimpulanDefault, setKesimpulanDefault] = useState<any>(!!((data && data.Kesimpulan !== '') || (data && data.Kesimpulan_Opt === 'Lain-lain')))

  useEffect(() => {
    if (data && data.form) {
      setBatasOd(`${data?.Od_Batas}`);
      setWarnaOd(`${data?.Od_Warna}`);
      setCuppingOd(`${data?.Od_Cupping}`);
      setRetinaOd(`${data?.Od_Retina}`);
      setBreakOd(`${data?.Od_Break}`);
      setPendarahanOd(`${data?.Od_Pendarahan}`);
      setBatasOs(`${data?.Os_Batas}`);
      setWarnaOs(`${data?.Os_Warna}`);
      setCuppingOs(`${data?.Os_Cupping}`);
      setRetinaOs(`${data?.Os_Retina}`);
      setBreakOs(`${data?.Os_Break}`);
      setPendarahanOs(`${data?.Os_Pendarahan}`);
      setCrossingOd(`${data?.Od_Av_Crossing}`);
      setTortovsityOd(`${data?.Od_Tortovsity}`);
      setObstruksiOd(`${data?.Od_Obstruksi}`);
      setCrossingOs(`${data?.Os_Av_Crossing}`);
      setTortovsityOs(`${data?.Os_Tortovsity}`);
      setObstruksiOs(`${data?.Os_Obstruksi}`);
      setVitreousOd(`${data?.Od_Vitreous}`);
      setVitreousPendarahanOd(`${data?.Od_Vitreous_Pendarahan}`);
      setPvdOd(`${data?.Od_Pvd}`);
      setKesimpulanDefault(`${data?.Kesimpulan}`);
      setVitreousOs(`${data?.Os_Vitreous}`);
    }
  }, [data])

  useEffect(() => {
    if (defaultPattern === '1') {
      setValue('od_batas', '1');
      setBatasOd('1');
      setValue('od_warna', '1');
      setWarnaOd('1')
      setValue('od_cupping', '2');
      setCuppingOd('2');
      setValue('os_batas', '1');
      setBatasOs('1');
      setValue('os_warna', '1');
      setWarnaOs('1');
      setValue('os_cupping', '2');
      setCuppingOs('2');
      setValue('od_retina',  '1');
      setRetinaOd('1');
      setValue('od_break', '2');
      setBreakOd('2');
      setValue('od_pendarahan', '2');
      setPendarahanOd('2');
      setValue('od_av_crossing', '2');
      setCrossingOd('2');
      setValue('od_tortovsity', '2');
      setTortovsityOd('2');
      setValue('od_obstruksi', '2');
      setObstruksiOd('2');
      setValue('od_vitreous', '2');
      setVitreousOd('2');
      setValue('od_vitreous_pendarahan', '2');
      setVitreousPendarahanOd('2');
      setValue('od_pvd', '2');
      setPvdOd('2');
      
      setValue('os_retina', '1');
      setRetinaOs('1');
      setValue('os_break', '2');
      setBreakOs('2');
      setValue('os_pendarahan', '2');
      setPendarahanOs('2');
      setValue('os_av_crossing', '2');
      setCrossingOs('2')
      setValue('kesimpulan_opt', 'ODS DBN');
      setValue('os_tortovsity', '2');
      setTortovsityOs('2');
      setValue('os_obstruksi', '2');
      setObstruksiOs('2');
      setValue('os_vitreous', '2');
      setVitreousOs('2');
      setValue('os_vitreous_pendarahan', '2');
      setVitreousPendarahanOs('2');
      setValue('os_pvd', '2');
      setPvdOs('2');
    } else if (defaultPattern === '0') {
      setValue('od_batas', undefined);
      setBatasOd(undefined)
      setValue('od_warna', undefined);
      setWarnaOd(undefined);
      setValue('od_cupping', undefined);
      setCuppingOd(undefined);
      setValue('os_batas',  undefined);
      setBatasOs(undefined);
      setValue('os_warna', undefined);
      setWarnaOs(undefined);
      setValue('os_cupping', undefined);
      setCuppingOs(undefined);
      setValue('od_retina', undefined);
      setRetinaOd(undefined);
      setValue('od_break', undefined);
      setBreakOd(undefined);
      setValue('od_pendarahan', undefined);
      setPendarahanOd(undefined);
      setValue('od_av_crossing', undefined);
      setCrossingOd(undefined);
      setValue('od_tortovsity', undefined);
      setTortovsityOd(undefined);
      setValue('od_obstruksi', undefined);
      setObstruksiOd(undefined);
      setValue('od_vitreous', undefined);
      setVitreousOd(undefined);
      setValue('od_vitreous_pendarahan', undefined);
      setVitreousPendarahanOd(undefined);
      setValue('od_pvd', undefined);
      setPvdOd(undefined);
      
      setValue('os_retina', undefined);
      setRetinaOs(undefined)
      setValue('os_break', undefined);
      setBreakOs(undefined);
      setValue('os_pendarahan', undefined);
      setPendarahanOs(undefined);
      setValue('os_av_crossing', undefined);
      setCrossingOs(undefined);
      setValue('os_tortovsity', undefined);
      setTortovsityOs(undefined);
      setValue('kesimpulan_opt', undefined);
      setValue('os_obstruksi', undefined);
      setObstruksiOs(undefined);
      setValue('os_vitreous', undefined);
      setVitreousOs(undefined);
      setValue('os_vitreous_pendarahan', undefined);
      setVitreousPendarahanOs(undefined);
      setValue('os_pvd', undefined);
      setPvdOs(undefined);
    }
  }, [defaultPattern])

  const { register, handleSubmit, errors, setValue, watch, getValues, control } = useForm({
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
      kesimpulan_opt: data && data.Kesimpulan_Opt ? data.Kesimpulan_Opt : data && data.Kesimpulan && data.Kesimpulan !== '' ? 'Lain-lain' : 'ODS DBN',

      'ttd-tanggal': (data && data && data.TTD_Tanggal) ? data.TTD_Tanggal.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      'ttd-perawat-pemeriksa': data && data.TTD_Perawat_Pemeriksa ? data.TTD_Perawat_Pemeriksa : '',
      perawat_pemeriksa: data && data.Perawat_Pemeriksa_Id ? data.Perawat_Pemeriksa_Id : '',
      // undefined: data && data.
      'ttd-dokter-pemeriksa': data && data.TTD_Dokter_Pemeriksa ? data.TTD_Dokter_Pemeriksa : '',
      dokter_pemeriksa: data && data.Dokter_Pemeriksa_Id ? data.Dokter_Pemeriksa_Id : '',
    },
  })

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const dataKesimpulan = watch('kesimpulan_opt');

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

  const handleSubmitForm = (value: ICreateFundusPhotoExaminationRequest) => {
    if (!treatment) {
      return false;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    if (!data) {
      const params = CreateFundusPhotoExaminationRequest.createFromJson({...value, ...appRequest, unit });
      ToolInspectionService().create(params)
        .then((response) => {
          if (response && response.data && response.data.data) {
            const params2 = {...appRequest, ID: response.data.data.item_id, itemId: response.data.data.item_id, unit, emr_id: response.data.data.EMR_ID};
            ToolInspectionService().view(params2)
              .then((resp) => {
                const { data } = resp.data;
                ToolInspectionService().pdfv3(PdfFundusPhotoExaminationRequest.createPdfRequest({ ...data, nomor_mr: appRequest.nomor_mr, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
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
      const params = UpdateFundusPhotoExaminationRequest.createFromJson({...value, ...appRequest, ID: data.ID, unit, emr_id: data.EMR_ID });
      ToolInspectionService().update(params)
        .then(() => {
          const params3 = {...appRequest, ID: data.ID, itemId: data.ID, unit, emr_id: data.EMR_ID};
          ToolInspectionService().view(params3)
            .then((resp) => {
              const { data } = resp.data;
              ToolInspectionService().pdfv3(PdfFundusPhotoExaminationRequest.createPdfRequest({...data, nomor_mr: appRequest.nomor_mr, umur_lengkap: treatment?.Pasien?.Umur_Lengkap}, appRequest.emr_id))
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
        dicom={dicom} modality={"FS"}
      />
      <FormGroup className="form-group" row>
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setBatasOd('1');
                  }}
                  checked={batasOd === '1'}
                  innerRef={register('od_batas') as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setBatasOd('2');
                  }}
                  checked={batasOd === '2'}
                  innerRef={register('od_batas') as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setWarnaOd('1');
                  }}
                  checked={warnaOd === '1'}
                  innerRef={register('od_warna') as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setWarnaOd('2');
                  }}
                  checked={warnaOd === '2'}
                  innerRef={register('od_warna') as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setWarnaOd('3');
                  }}
                  checked={warnaOd === '3'}
                  innerRef={register('od_warna') as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setCuppingOd('1');
                  }}
                  checked={cuppingOd === '1'}
                  innerRef={register('od_cupping') as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setCuppingOd('2');
                  }}
                  checked={cuppingOd === '2'}
                  innerRef={register('od_cupping') as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setBatasOs('1');
                  }}
                  checked={batasOs === '1'}
                  innerRef={register('os_batas') as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setBatasOs('2');
                  }}
                  checked={batasOs === '2'}
                  innerRef={register('os_batas') as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setWarnaOs('1');
                  }}
                  checked={warnaOs === '1'}
                  innerRef={register('os_warna') as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setWarnaOs('2');
                  }}
                  checked={warnaOs === '2'}
                  innerRef={register('os_warna') as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setWarnaOs('3');
                  }}
                  checked={warnaOs === '3'}
                  innerRef={register('os_warna') as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setCuppingOs('1');
                  }}
                  checked={cuppingOs === '1'}
                  innerRef={register('os_cupping') as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setCuppingOs('2');
                  }}
                  checked={cuppingOs === '2'}
                  innerRef={register('os_cupping') as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setRetinaOd('1');
                  }}
                  checked={retinaOd === '1'}
                  innerRef={register('od_retina') as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setRetinaOd('2');
                  }}
                  defaultChecked={retinaOd === '2'}
                  innerRef={register('od_retina') as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setBreakOd('1');
                  }}
                  checked={breakOd === '1'}
                  innerRef={register('od_break')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setBreakOd('2');
                  }}
                  checked={breakOd === '2'}
                  innerRef={register('od_break')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPendarahanOd('1');
                  }}
                  checked={pendarahanOd === '1'}
                  innerRef={register('od_pendarahan')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPendarahanOd('2');
                  }}
                  defaultChecked={pendarahanOd === '2'}
                  innerRef={register('od_pendarahan')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setRetinaOs('1');
                  }}
                  checked={retinaOs === '1'}
                  innerRef={register('os_retina')as any}
                />{' '}
                <Label>Attach</Label>
              </Col>
              <Col>
                <Input
                  id="os_retina_2"
                  type="radio"
                  name="os_retina"
                  className="me-1"
                  value="2"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setRetinaOs('2');
                  }}
                  checked={retinaOs === '2'}
                  innerRef={register('os_retina')as any}
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
                  id="os_break"
                  type="radio"
                  name="os_break"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setBreakOs('1');
                  }}
                  checked={breakOs === '1'}
                  innerRef={register('os_break')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setBreakOs('2');
                  }}
                  checked={breakOs === '2'}
                  innerRef={register('os_break')as any}
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
                  id="os_pendarahan"
                  type="radio"
                  name="os_pendarahan"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPendarahanOs('1');
                  }}
                  checked={pendarahanOs === '1'}
                  innerRef={register('os_pendarahan')as any}
                />{' '}
                <Label>Positif(+)</Label>
              </Col>
              <Col>
                <Input
                  id="os_pendarahan_2"
                  type="radio"
                  name="os_pendarahan"
                  className="me-1"
                  value="2"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPendarahanOs('2');
                  }}
                  checked={pendarahanOs === '2'}
                  innerRef={register('os_pendarahan')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setCrossingOd('1');
                  }}
                  checked={crossingOd === '1'}
                  innerRef={register('od_av_crossing')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setCrossingOd('2');
                  }}
                  defaultChecked={crossingOd === '2'}
                  innerRef={register('od_av_crossing')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setTortovsityOd('1');
                  }}
                  checked={tortovsityOd === '1'}
                  innerRef={register('od_tortovsity')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setTortovsityOd('2');
                  }}
                  checked={tortovsityOd === '2'}
                  innerRef={register('od_tortovsity')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setObstruksiOd('1');
                  }}
                  checked={obstruksiOd === '1'}
                  innerRef={register('od_obstruksi')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setObstruksiOd('2');
                  }}
                  checked={obstruksiOd === '2'}
                  innerRef={register('od_obstruksi')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setCrossingOs('1');
                  }}
                  checked={crossingOs === '1'}
                  innerRef={register('os_av_crossing')as  any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setCrossingOs('2');
                  }}
                  checked={crossingOs === '2'}
                  innerRef={register('os_av_crossing')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setTortovsityOs('1');
                  }}
                  checked={tortovsityOs === '1'}
                  innerRef={register('os_tortovsity')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setTortovsityOs('2');
                  }}
                  checked={tortovsityOs === '2'}
                  innerRef={register('os_tortovsity')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setObstruksiOs('1');
                  }}
                  checked={obstruksiOs === '1'}
                  innerRef={register('os_obstruksi')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setObstruksiOs('2');
                  }}
                  checked={obstruksiOs === '2'}
                  innerRef={register('os_obstruksi')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setVitreousOd('1');
                  }}
                  checked={vitreousOd === '1'}
                  innerRef={register('od_vitreous')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setVitreousOd('2');
                  }}
                  checked={vitreousOd === '2'}
                  innerRef={register('od_vitreous')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setVitreousPendarahanOd('1');
                  }}
                  checked={vitreousPendarahanOd === '1'}
                  innerRef={register('od_vitreous_pendarahan')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setVitreousPendarahanOd('2');
                  }}
                  checked={vitreousPendarahanOd === '2'}
                  innerRef={register('od_vitreous_pendarahan')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPvdOd('1');
                  }}
                  checked={!!(pvdOd === '1')}
                  innerRef={register('od_pvd')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPvdOd('2');
                  }}
                  checked={!!(pvdOd === '2')}
                  innerRef={register('od_pvd')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setVitreousOs('1');
                  }}
                  checked={vitreousOS === '1'}
                  innerRef={register('os_vitreous')as  any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setVitreousOs('2');
                  }}
                  checked={vitreousOS === '2'}
                  innerRef={register('os_vitreous')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setVitreousPendarahanOs('1');
                  }}
                  checked={vitreousPendarahanOs === '1'}
                  innerRef={register('os_vitreous_pendarahan')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setVitreousPendarahanOs('2');
                  }}
                  checked={vitreousPendarahanOs === '2'}
                  innerRef={register('os_vitreous_pendarahan')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPvdOs('2');
                  }}
                  checked={pvdOs === '1'}
                  innerRef={register('os_pvd')as any}
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
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPvdOs('2');
                  }}
                  defaultChecked={pvdOs === '2'}
                  innerRef={register('os_pvd')as any}
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
                    innerRef={register({ required: true }) as any}
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

export default FundusPhotoExamination;
