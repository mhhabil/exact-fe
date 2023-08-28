import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { DateTimeInput, TextInput } from "@src/shared/input";
import { PupilOCTResultModel, TreatmentNumber } from '../../models/pupil-oct-result-model';
import { useEffect, useState } from "react";
import ToolInspection from "@src/shared/tool-inspection/tool-inspection";
import { UpdatePupilOCTResultRequest } from '../../requests/update-pupil-oct-result-request';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { SubmitButton } from '@src/shared/button';
import { IPdfModel } from '@src/shared/pdf';
import { AppRequest } from '@src/shared/request';
import { CreatePupilOCTResultRequest, ICreatePupilOCTResultRequest } from '../../requests/create-pupil-oct-result-request';
import { ToolInspectionService } from '../../services';
import DicomForm from '../../components/form/dicom-form';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const PupilOCTResultFormDetail = (props: { data: any, item?: any | undefined }) => {
  const { data, item } = props;
  const kesimpulan = [
    'ODS DBN',
    'RNFL Menipis',
    'CDR  Melebar',
    'Lain-lain',
  ];

  const unit = 'Pemeriksaan_Oct_Glaukoma'
  const [defaultPattern, setDefaultPattern] = useState<any>();
  const [treatmentNumber, setTreatmentNumber] = useState<TreatmentNumber | undefined>(undefined)
  const { treatment } = useAppSelector(state => state.patient);
  // const treatment = (data && data.no_berobat && data.no_berobat[0] && data.no_berobat[0].ID_Berobat) ? data.no_berobat[0].ID_Berobat : '';
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const [processing, setProcessing] = useState<boolean | undefined>(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const [number, setNumber] = useState<string>()
  const [odRnfl, setOdRnfl] = useState<string | undefined>((data && data.Od_Rnfl) ? data.Od_Rnfl : undefined)
  const [osRnfl, setOsRnfl] = useState<string | undefined>((data && data.Os_Rnfl) ? data.Os_Rnfl : undefined)
  const [odVertical, setOdVertical] = useState<string | undefined>((data && data.Od_Cd_Vertical) ? data.Od_Cd_Vertical : undefined)
  const [osVertical, setOsVertical] = useState<string | undefined>((data && data.Os_Cd_Vertical) ? data.Os_Cd_Vertical : undefined)
  const [kesimpulanDefault, setKesimpulanDefault] = useState<any>(!!((data && data.Kesimpulan !== '') || (data && data.Kesimpulan_Opt === 'Lain-lain')))

  // useEffect(() => {
  //   setNumber(treatment);
  // }, [data])

  useEffect(() => {
    if (data && data.form) {
      setOdRnfl(`${data?.Od_Rnfl}`);
      setOsRnfl(`${data?.Os_Rnfl}`);
      setOdVertical(`${data?.Od_Cd_Vertical}`);
      setOsVertical(`${data?.Os_Cd_Vertical}`);
    }
  }, [data])

  useEffect(() => {
    if (defaultPattern === '1') {
      setValue('od_rnfl', '1');
      setOdRnfl('1');
      setValue('os_rnfl', '1');
      setOsRnfl('1');
      setValue('od_cd_vertical', '1');
      setOdVertical('1');
      setValue('os_cd_vertical', '1');
      setOsVertical('1');
      setValue('kesimpulan', 'ODS DBN RNFL Menipis')
      // setValue('kesimpulan', 'RNFL Menipis')
      // setValue('kesimpulan', 'CDR Melebar DBN')
    } else if (defaultPattern === '0') {
      setValue('od_rnfl', undefined);
      setOdRnfl(undefined);
      setValue('os_rnfl', undefined);
      setOsRnfl(undefined);
      setValue('od_cd_vertical', undefined);
      setOdVertical(undefined);
      setValue('os_cd_vertical', undefined);
      setOsVertical(undefined);
      setValue('kesimpulan', undefined);
    }
  }, [defaultPattern]);

  const { register, handleSubmit, errors, setValue, getValues, control } = useForm({
    mode: 'onChange',
    resolver: yupResolver(UpdatePupilOCTResultRequest.schema()),
    defaultValues: {
      treatment_number_list: (data && data.no_berobat && data.no_berobat[0] && data.no_berobat[0].ID_Berobat) ? data.no_berobat[0].ID_Berobat : '',
      od_rnfl_normal_text: (data && data.Od_Rnfl_Normal_Text) ? data.Od_Rnfl_Normal_Text : '',
      od_rnfl_menipis_text: (data && data.Od_Rnfl_Menipis_Text) ? data.Od_Rnfl_Menipis_Text : '',
      od_rnfl: (data &&  data.Od_Rnfl) ? data.Od_Rnfl : '',
      od_rnfl_menebal_text: (data && data.Od_Rnfl_Menebal_Text) ? data.Od_Rnfl_Menebal_Text : '',
      od_cd_vertical_normal_text: (data && data.Od_Cd_Vertical_Normal_Text) ? data.Od_Cd_Vertical_Normal_Text : '',
      od_cd_vertical: (data && data.Od_Cd_Vertical) ? data.Od_Cd_Vertical : '',
      od_cd_vertical_upnormal_text: (data && data.Od_Cd_Vertical_Upnormal_Text) ? data.Od_Cd_Vertical_Upnormal_Text : '',
      os_rnfl_normal_text: (data && data.Os_Rnfl_Normal_Text) ? data.Os_Rnfl_Normal_Text : '',
      os_rnfl_menipis_text: (data && data.Os_Rnfl_Menipis_Text) ? data.Os_Rnfl_Menipis_Text : '',
      os_rnfl: (data && data.Os_Rnfl) ? data.Os_Rnfl : '',
      os_rnfl_menebal_text: (data && data.Os_Rnfl_Menebal_Text) ? data.Os_Rnfl_Menebal_Text : '',
      os_cd_vertical_normal_text: (data && data.Os_Cd_Vertical_Normal_Text) ? data.Os_Cd_Vertical_Normal_Text : '',
      os_cd_vertical: (data && data.Os_Cd_Vertical) ? data.Os_Cd_Vertical : '',
      os_cd_vertical_upnormal_text: (data && data.Os_Cd_Vertical_Upnormal_Text) ? data.Os_Cd_Vertical_Upnormal_Text : '',
      kesimpulan: (data && data.Kesimpulan) ? data.Kesimpulan : '',
      'ttd-tanggal': (data && data && data.TTD_Tanggal) ? data.TTD_Tanggal.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      'ttd-dokter-pemeriksa': data && data.TTD_Dokter_Pemeriksa ? data.TTD_Dokter_Pemeriksa : '',
      dokter_pemeriksa: data && data.Dokter_Pemeriksa_Id ? data.Dokter_Pemeriksa_Id : '',
      'ttd-perawat-pemeriksa': data && data.TTD_Perawat_Pemeriksa ? data.TTD_Perawat_Pemeriksa : '',
      perawat_pemeriksa: data && data.Perawat_Pemeriksa_Id ? data.Perawat_Pemeriksa_Id : '',
      kesimpulan_opt: data && data.Kesimpulan_Opt ? data.Kesimpulan_Opt : data && data.Kesimpulan && data.Kesimpulan !== '' ? 'Lain-lain' : 'ODS DBN',
    },
  })

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleNurseSigned = (image: SignatureModel) => {
    setValue('ttd-perawat-pemeriksa', image.Signature);
    setValue('perawat_pemeriksa', image.ID_Karyawan);
  }

  const handleChangeKesimpulanOd = (e: any) => {
    if (e.target.value === 'Lain-lain') {
      setKesimpulanDefault(true);
    } else {
      setKesimpulanDefault(false);
    }
  }


  const handleChangeOdRnfl = (e: any) => {
    if (e.target.value === '1') {
      setValue('od_rnfl_menipis_text', '');
      setValue('od_rnfl_menebal_text', '');
    }
    if (e.target.value === '2') {
      setValue('od_rnfl_normal_text', '');
      setValue('od_rnfl_menebal_text', '');
    }
    if (e.target.value === '3') {
      setValue('od_rnfl_normal_text', '');
      setValue('od_rnfl_menipis_text', '');
    }
    setOdRnfl(e.target.value)
    setValue('od_rnfl', e.target.value)
  }
  const handleChangeOsRnfl = (e: any) => {
    if (e.target.value === '1') {
      setValue('os_rnfl_menipis_text', '');
      setValue('os_rnfl_menebal_text', '');
    }
    if (e.target.value === '2') {
      setValue('os_rnfl_normal_text', '');
      setValue('os_rnfl_menebal_text', '');
    }
    if (e.target.value === '3') {
      setValue('os_rnfl_normal_text', '');
      setValue('os_rnfl_menipis_text', '');
    }
    setOsRnfl(e.target.value)
    setValue('os_rnfl', e.target.value)
  }

  const handleDoctorSigned = (image: SignatureModel) => {
    setValue('ttd-dokter-pemeriksa', image.Signature);
    setValue('dokter_pemeriksa', image.ID_Karyawan);
  }

  const handleChangeOdVertical = (e: any) => {
    if (e.target.value === '1') {
      setValue('od_cd_vertical_upnormal_text', '');
    }
    if (e.target.value === '2') {
      setValue('od_cd_vertical_normal_text', '');
    }
    setOdVertical(e.target.value)
    setValue('od_cd_vertical', e.target.value)
  }
  const handleChangeOsVertical = (e: any) => {
    if (e.target.value === '1') {
      setValue('os_cd_vertical_upnormal_text', '');
    }
    if (e.target.value === '2') {
      setValue('os_cd_vertical_normal_text', '');
    }
    setOsVertical(e.target.value)
    setValue('os_cd_vertical', e.target.value)
  }

  const handleSubmitForm = (value: ICreatePupilOCTResultRequest) => {
    // if (!treatment) {
    //   return false;
    // }
    // setProcessing(true);
    // const appRequest = AppRequest.createFromStore(treatment);
    // if (!data) {
    //   const params = CreatePupilOCTResultRequest.createFromJson({...value, ...appRequest, unit });
    //   ToolInspectionService().create(params)
    //     .then((response) => {
    //       if (response && response.data && response.data.data) {
    //         const params2 = {...appRequest, ID: response.data.data.item_id, itemId: response.data.data.item_id, unit, emr_id: response.data.data.EMR_ID};
    //         ToolInspectionService().view(params2)
    //           .then((resp) => {
    //             const { data } = resp.data;
    //             ToolInspectionService().pdfv3(PdfPupilOctResultRequest.createPdfRequest({ ...data, nomor_mr: appRequest.nomor_mr, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
    //               .then((res) => {
    //                 const { data } = res.data;
    //                 ToolInspectionService().addPdf({
    //                   emr_id: appRequest.emr_id,
    //                   item_id: params2.ID,
    //                   pdf_url: data?.url ?? '',
    //                 }).then(() => {
    //                   if (onSuccessSubmit) {
    //                     onSuccessSubmit();
    //                     return true;
    //                   }
    //                 });
    //               });
    //           })
    //       }
    //     });
    // } else {
    //   const emrId = data.EMR_ID
    //   const params = UpdatePupilOCTResultRequest.createFromJson({...value, ...appRequest, ID: data.ID, unit, emr_id: data.EMR_ID });
    //   ToolInspectionService().update(params)
    //     .then(() => {
    //       const params3 = {...appRequest, ID: data.ID, itemId: data.ID, unit, emr_id: data.EMR_ID};
    //       ToolInspectionService().view(params3)
    //         .then((resp) => {
    //           const { data } = resp.data;
    //           ToolInspectionService().pdfv3(PdfPupilOctResultRequest.createPdfRequest({...data, nomor_mr: appRequest.nomor_mr, umur_lengkap: treatment?.Pasien?.Umur_Lengkap}, appRequest.emr_id))
    //             .then((res) => {
    //               const { data } = res.data;
    //               ToolInspectionService().addPdf({
    //                 emr_id: emrId,
    //                 item_id: params3.ID,
    //                 pdf_url: data?.url ?? '',
    //               }).then(() => {
    //                 if (onSuccessSubmit) {
    //                   onSuccessSubmit();
    //                   return true;
    //                 }
    //               });
    //             })
    //         })
    //     });
    // }
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      {/* <ToolInspection
        name='treatment_number_list'
        data={(data && data.no_berobat && data.no_berobat[0]) ? data.no_berobat[0] : undefined}
        {...{register, errors}}
      /> */}
      <FormGroup className="form-group" row>
        <h4 className="mt-1">Hasil Pemeriksaan Alat</h4>
        <DicomForm
          dicom={data.dicoms} modality={"OCT"}
        />
        <h4 className="mt-2">Form Hasil Pemeriksaan Alat Oct Glaukoma</h4>
        <Row>
          <Col md="6" sm="12">
            <Row className='mt-1'>
              <Col md="12" className="d-flex justify-content-center">
                <h5>OD</h5>
              </Col>
              <Col md="12">
                <h5>RNFL(Retinal Nerve Fiber Layer)</h5>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <Input
                  id="od-rnfl"
                  type="radio"
                  name="od_rnfl"
                  value="1"
                  defaultChecked={(data && data.form && data.form[`${number}`] && data.form[`${number}`].Od_Rnfl && data.form[`${number}`].Od_Rnfl === '1') ? data.form[`${number}`].Od_Rnfl === '1' : false}
                  onChange={(e) => handleChangeOdRnfl(e)}
                  innerRef={register({ required: true })}
                  invalid={errors.od_rnfl && true}
                  disabled
                />
                <Label className='ms-1'>Normal</Label>
              </Col>
              <Col>
                <Input
                  id="od-rnfl-normal-text"
                  type="text"
                  name="od_rnfl_normal_text"
                  innerRef={register({ required: true })}
                  invalid={errors.od_rnfl_normal_text && true}
                  readOnly={(odRnfl) ? odRnfl !== '1' : undefined}
                  disabled
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md={3}>
                <Input
                  id="od-rnfl-2"
                  type="radio"
                  name="od_rnfl"
                  value="2"
                  defaultChecked={(data && data.form && data.form[`${number}`] && data.form[`${number}`].Od_Rnfl && data.form[`${number}`].Od_Rnfl === '2') ? data.form[`${number}`].Od_Rnfl === '2' : false}
                  onChange={(e) => handleChangeOdRnfl(e)}
                  innerRef={register({ required: true })}
                  invalid={errors.od_rnfl && true}
                  disabled
                />
                <Label className='ms-1'>Menipis</Label>
              </Col>
              <Col>
                <Input
                  id="od-rnfl-menipis-text"
                  type="text"
                  name="od_rnfl_menipis_text"
                  innerRef={register({ required: true })}
                  invalid={errors.od_rnfl_menipis_text && true}
                  readOnly={(odRnfl) ? odRnfl !== '2' : undefined}
                  disabled
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md={3}>
                <Input
                  id="od-rnfl-3"
                  type="radio"
                  name="od_rnfl"
                  value="3"
                  defaultChecked={(data && data.form && data.form[`${number}`] && data.form[`${number}`].Od_Rnfl && data.form[`${number}`].Od_Rnfl === '3') ? data.form[`${number}`].Od_Rnfl === '3' : false}
                  onChange={(e) => handleChangeOdRnfl(e)}
                  innerRef={register({ required: true })}
                  invalid={errors.od_rnfl && true}
                  disabled
                />
                <Label className='ms-1'>Menebal</Label>
              </Col>
              <Col>
                <Input
                  id="od-rnfl-menebal-text"
                  type="text"
                  name="od_rnfl_menebal_text"
                  innerRef={register({ required: true })}
                  invalid={errors.od_rnfl_menebal_text && true}
                  readOnly={(odRnfl) ? odRnfl !== '3' : undefined}
                  disabled
                />
              </Col>
            </Row>

            <Row className='mt-2'>
              <Col md="12" className="ms-2">
                <h5>C/D Vertical</h5>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <Input
                  id="od-cd-vertical"
                  type="radio"
                  name="od_cd_vertical"
                  value="1"
                  defaultChecked={(data && data.form && data.form[`${number}`] && data.form[`${number}`].Od_Cd_Vertical && data.form[`${number}`].Od_Cd_Vertical === '1') ? data.form[`${number}`].Od_Cd_Vertical === '1' : false}
                  onChange={(e) => handleChangeOdVertical(e)}
                  innerRef={register({ required: true })}
                  invalid={errors.od_cd_vertical && true}
                  disabled
                />
                <Label className='ms-1'>Normal</Label>
              </Col>
              <Col>
                <Input
                  type="text"
                  id="od-cd-vertical-normal-text"
                  name="od_cd_vertical_normal_text"
                  innerRef={register({ required: true })}
                  invalid={errors.od_cd_vertical_normal_text && true}
                  readOnly={(odVertical) ? odVertical !== '1' : undefined}
                  disabled
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md={3}>
                <Input
                  id="od-cd-vertical-2"
                  type="radio"
                  name="od_cd_vertical"
                  value="2"
                  defaultChecked={(data && data.form && data.form[`${number}`] && data.form[`${number}`].Od_Cd_Vertical && data.form[`${number}`].Od_Cd_Vertical === '2') ? data.form[`${number}`].Od_Cd_Vertical === '2' : false}
                  onChange={(e) => handleChangeOdVertical(e)}
                  innerRef={register({ required: true })}
                  invalid={errors.od_cd_vertical && true}
                  disabled
                />
                <Label style={{ marginLeft: '10px' }}>{`> Dari Normal`}</Label>
              </Col>
              <Col>
                <Input
                  id="od-cd-vertical-upnormal-text"
                  type="text"
                  name="od_cd_vertical_upnormal_text"
                  innerRef={register({ required: true })}
                  invalid={errors.od_cd_vertical_upnormal_text && true}
                  readOnly={(odVertical) ? odVertical !== '2' : undefined}
                  disabled
                />
              </Col>
            </Row>
          </Col>

          <Col>
            <Row className='mt-1'>
              <Col md="12" className="d-flex justify-content-center">
                <h5>OS</h5>
              </Col>
              <Col>
                <h5>RNFL(Retinal Nerve Fiber Layer)</h5>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <Input
                  id="os-rnfl"
                  type="radio"
                  name="os_rnfl"
                  value="1"
                  defaultChecked={(data && data.form && data.form[`${number}`] && data.form[`${number}`].Os_Rnfl && data.form[`${number}`].Os_Rnfl === '1') ? data.form[`${number}`].Os_Rnfl === '1' : false}
                  onChange={(e) => handleChangeOsRnfl(e)}
                  innerRef={register({ required: true })}
                  invalid={errors.os_rnfl && true}
                  disabled
                />
                <Label className='ms-1'>Normal</Label>
              </Col>
              <Col>
                <Input
                  id="os-rnfl-normal-text"
                  type="text"
                  name="os_rnfl_normal_text"
                  innerRef={register({ required: true })}
                  invalid={errors.os_rnfl_normal_text && true}
                  readOnly={(osRnfl) ? osRnfl !== '1' : undefined}
                  disabled
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md={3}>
                <Input
                  id="os-rnfl-2"
                  type="radio"
                  name="os_rnfl"
                  value="2"
                  defaultChecked={(data && data.form && data.form[`${number}`] && data.form[`${number}`].Os_Rnfl && data.form[`${number}`].Os_Rnfl === '2') ? data.form[`${number}`].Os_Rnfl === '2' : false}
                  onChange={(e) => handleChangeOsRnfl(e)}
                  innerRef={register({ required: true })}
                  invalid={errors.os_rnfl && true}
                  disabled
                />
                <Label className='ms-1'>Menipis</Label>
              </Col>
              <Col>
                <Input
                  id="os-rnfl-menipis-text"
                  type="text"
                  name="os_rnfl_menipis_text"
                  innerRef={register({ required: true })}
                  invalid={errors.os_rnfl_menipis_text && true}
                  readOnly={(osRnfl) ? osRnfl !== '2' : undefined}
                  disabled
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md={3}>
                <Input
                  id="os-rnfl-3"
                  type="radio"
                  name="os_rnfl"
                  value="3"
                  defaultChecked={(data && data.form && data.form[`${number}`] && data.form[`${number}`].Os_Rnfl && data.form[`${number}`].Os_Rnfl === '3') ? data.form[`${number}`].Os_Rnfl === '3' : false}
                  onChange={(e) => handleChangeOsRnfl(e)}
                  innerRef={register({ required: true })}
                  invalid={errors.os_rnfl && true}
                  disabled
                />
                <Label className='ms-1'>Menebal</Label>
              </Col>
              <Col>
                <Input
                  id="os-rnfl-menebal-text"
                  type="text"
                  name="os_rnfl_menebal_text"
                  innerRef={register({ required: true })}
                  invalid={errors.os_rnfl_menebal_text && true}
                  readOnly={(osRnfl) ? osRnfl !== '3' : undefined}
                  disabled
                />
              </Col>
            </Row>
            <Row className='mt-2'>
              <Col md="12">
                <h5>C/D Vertical</h5>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <Input
                  id="os-cd-vertical-1"
                  type="radio"
                  name="os_cd_vertical"
                  value="1"
                  defaultChecked={(data && data.form && data.form[`${number}`] && data.form[`${number}`].Os_Cd_Vertical && data.form[`${number}`].Os_Cd_Vertical === '1') ? data.form[`${number}`].Os_Cd_Vertical === '1' : false}
                  onChange={(e) => handleChangeOsVertical(e)}
                  innerRef={register({ required: true })}
                  invalid={errors.os_cd_vertical && true}
                  disabled
                />
                <Label className='ms-1'>Normal</Label>
              </Col>
              <Col>
                <Input
                  id="os-cd-vertical-normal-text"
                  type="text"
                  name="os_cd_vertical_normal_text"
                  innerRef={register({ required: true })}
                  invalid={errors.os_cd_vertical_normal_text && true}
                  readOnly={(osVertical) ? osVertical !== '1' : undefined}
                  disabled
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md={3}>
                <Input
                  id="os-cd-vertical-2"
                  type="radio"
                  name="os_cd_vertical"
                  value="2"
                  defaultChecked={(data && data.form && data.form[`${number}`] && data.form[`${number}`].Os_Cd_Vertical && data.form[`${number}`].Os_Cd_Vertical === '2') ? data.form[`${number}`].Os_Cd_Vertical === '2' : false}
                  onChange={(e) => handleChangeOsVertical(e)}
                  innerRef={register({ required: true })}
                  invalid={errors.os_cd_vertical && true}
                  disabled
                />
                <Label className='ms-1'>{`> Dari Normal`}</Label>
              </Col>
              <Col>
                <Input
                  id="os-cd-vertical-upnormal-text"
                  type="text"
                  name="os_cd_vertical_upnormal_text"
                  innerRef={register({ required: true })}
                  invalid={errors.os_cd_vertical_upnormal_text && true}
                  readOnly={(osVertical) ? osVertical !== '2' : undefined}
                  disabled
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
                    innerRef={register({ required: true }) as any}
                    disabled
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
                        disabled
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
                    readOnly
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
          <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.Updated_At)}` }</Label>
        </div>
      </FormGroup>
    </Form>
  )
}

export default PupilOCTResultFormDetail;
