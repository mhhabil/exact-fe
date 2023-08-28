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
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { ToolInspectionService } from '../../services';
import { CreateResultUsgRequest, ICreateResultUsgRequest, UpdateResultUsgRequest } from '../../requests';
import { PdfResultUsgRequest } from '@modules/outpatient/inspection-result/requests/pdf-result-usg.request';
import DicomForm from '../../components/form/dicom-form';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const ResultUsgFormDetail = (props: { data: any, item?: any | undefined }) => {
  const kesimpulan = [
    'ODS DBN',
    'Lain-lain',
  ];
  const { data, item } = props;

  const unit = 'Pemeriksaan_Usg'
  const dispatch = useAppDispatch();
  // const [treatmentNumber, setTreatmentNumber] = useState<TreatmentNumber | undefined>(undefined)
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const [defaultPattern, setDefaultPattern] = useState<any>();
  const { nurses } = useAppSelector(state => state.nurse);
  const [processing, setProcessing] = useState<boolean | undefined>(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  // const [number, setNumber] = useState<string>(treatment)
  const [bentukKelainanOd, setBentukKelainanOd] = useState<any>(`${data?.Od_Bentuk_Kelainan}`);
  const [lokasiOd, setLokasiOd] = useState<any>(`${data?.Od_Lokasi}`);
  const [perlekatanOd, setPerlekatanOd] = useState<any>(`${data?.Od_Perlekatan}`);
  const [afterOd, setAfterOd] = useState<any>(`${data?.Od_After_Movement}`);
  const [spikeOd, setSpikeOd] = useState<any>(`${data?.Od_Spike}`);
  const [bentukKelainanOs, setBentukKelainanOs] = useState<any>(`${data?.Os_Bentuk_Kelainan}`);
  const [lokasiOs, setLokasiOs] = useState<any>(`${data?.Os_Lokasi}`);
  const [perlekatanOs, setPerlekatanOs] =  useState<any>(`${data?.Os_Perlekatan}`);
  const [afterOs, setAfterOs] = useState<any>(`${data?.Os_After_Movement}`);
  const [spikeOs, setSpikeOs] = useState<any>(`${data?.Os_Spike}`);
  const [kesimpulanDefault, setKesimpulanDefault] = useState<any>(!!((data && data.Kesimpulan !== '') || (data && data.Kesimpulan_Opt === 'Lain-lain')))

  // useEffect(() => {
  //   setNumber(treatment);
  // }, [data])

  useEffect(() => {
    if (data && data.form) {
      setBentukKelainanOd(`${data?.Od_Bentuk_Kelainan}`);
      setLokasiOd(`${data?.Od_Lokasi}`)
      setPerlekatanOd(`${data?.Od_Perlekatan}`);
      setAfterOd(`${data?.Od_After_Movement}`);
      setSpikeOd(`${data?.Od_Spike}`);
      setBentukKelainanOs(`${data?.Os_Bentuk_Kelainan}`);
      setLokasiOs(`${data?.Os_Lokasi}`);
      setPerlekatanOs(`${data?.Os_Perlekatan}`);
      setAfterOs(`${data?.Os_After_Movement}`);
      setSpikeOs(`${data?.Os_Spike}`);
    }
  }, [data])

  useEffect(() => {
    if (defaultPattern === '1') {
      setValue('od_bentuk_kelainan', '4');
      setBentukKelainanOd('4');
      setValue('od_lokasi', '1');
      setLokasiOd('1');
      setValue('od_perlekatan', '2');
      setPerlekatanOd('2');
      setValue('od_after_movement', '2');
      setAfterOd('2');
      setValue('od_spike', '1');
      setSpikeOd('1');
      setValue('os_bentuk_kelainan', '4');
      setBentukKelainanOs('4');
      setValue('os_lokasi', '1');
      setLokasiOs('1');
      setValue('os_perlekatan', '2');
      setPerlekatanOs('2');
      setValue('os_after_movement', '2');
      setAfterOs('2');
      setValue('os_spike', '1');
      setSpikeOs('1');
    } else if (defaultPattern === '0') {
      setValue('od_bentuk_kelainan', undefined);
      setBentukKelainanOd(undefined)
      setValue('od_lokasi', undefined);
      setLokasiOd(undefined)
      setValue('od_perlekatan', undefined);
      setPerlekatanOd(undefined);
      setValue('od_after_movement', undefined);
      setAfterOd(undefined);
      setValue('od_spike', undefined);
      setSpikeOd(undefined);
      setValue('os_bentuk_kelainan', undefined);
      setBentukKelainanOs(undefined);
      setValue('os_lokasi', undefined);
      setLokasiOs(undefined);
      setValue('os_perlekatan', undefined);
      setPerlekatanOs(undefined);
      setValue('os_after_movement', undefined);
      setAfterOs(undefined);
      setValue('os_spike', undefined);
      setSpikeOs(undefined);
    }
  }, [defaultPattern])

  const { register, handleSubmit, errors, setValue, getValues, control, reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(UpdateResultUsgRequest.schema()),
    defaultValues: {
      // od_vitreoretinal: data && data.Od_Vitreoretinal ? data.Od_Vitreoretinal : '',
      'list-no-berobat': data && data.No_Berobat ? data.No_Berobat : '',
      od_gain: data && data.Od_Gain ? data.Od_Gain : '',
      od_axl: data && data.Od_Axl ? data.Od_Axl : '',
      od_struktur_bola_mata: data && data.Od_Struktur_Bola_Mata ? data.Od_Struktur_Bola_Mata : '',
      od_bentuk_kelainan: data && data.Od_Bentuk_Kelainan ? data.Od_Bentuk_Kelainan : '',
      od_lokasi: data && data.Od_Lokasi ? data.Od_Lokasi : '',
      od_perlekatan: data && data.Od_Perlekatan ? data.Od_Perlekatan : '',
      od_after_movement : data && data.Od_After_Movement ? data.Od_After_Movement : '',
      od_spike: data && data.Od_Spike ? data.Od_Spike : '',
      od_lain_lain: data && data.Od_Lain_Lain ? data.Od_Lain_Lain : '',
      os_gain: data && data.Os_Gain ? data.Os_Gain : '',
      os_axl: data && data.Os_Axl ? data.Os_Axl : '',
      os_struktur_bola_mata: data && data.Os_Struktur_Bola_Mata ? data.Os_Struktur_Bola_Mata : '',
      os_bentuk_kelainan: data && data.Os_Bentuk_Kelainan ? data.Os_Bentuk_Kelainan : '',
      os_lokasi: data && data.Os_Lokasi ? data.Os_Lokasi : '',
      os_perlekatan: data && data.Os_Perlekatan ? data.Os_Perlekatan : '',
      os_after_movement: data && data.Os_After_Movement ? data.Os_After_Movement : '',
      os_spike: data && data.Os_Spike ? data.Os_Spike : '',
      os_lain_lain: data && data.Os_Lain_Lain ? data.Os_Lain_Lain : '',
      kesimpulan: data && data.Kesimpulan ? data.Kesimpulan : '',
      kesimpulan_opt: data && data.Kesimpulan_Opt ? data.Kesimpulan_Opt : data && data.Kesimpulan && data.Kesimpulan !== '' ? 'Lain-lain' : 'ODS DBN',
      'ttd-tanggal': (data && data && data.TTD_Tanggal) ? data.TTD_Tanggal.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      // 'ttd-tanggal': data && data.TTD_Tanggal ? data.TTD_Tanggal : '',
      'ttd-perawat-pemeriksa': data && data.TTD_Perawat_Pemeriksa ? data.TTD_Perawat_Pemeriksa : '',
      perawat_pemeriksa: data && data.Perawat_Pemeriksa_Id ? data.Perawat_Pemeriksa_Id : '',
      'ttd-dokter-pemeriksa': data && data.TTD_Dokter_Pemeriksa ? data.TTD_Dokter_Pemeriksa : '',
      dokter_pemeriksa: data && data.Dokter_Pemeriksa_Id ? data.Dokter_Pemeriksa_Id : '',
    },
  })

  const handleDoctorSigned = (image: SignatureModel) => {
    setValue('ttd-dokter-pemeriksa', image.Signature);
    setValue('dokter_pemeriksa', image.ID_Karyawan);
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

  const handleSubmitForm = (value: ICreateResultUsgRequest) => {
    // if (!treatment) {
    //   return false;
    // }
    // setProcessing(true);
    // const appRequest = AppRequest.createFromStore(treatment);
    // if (!data) {
    //   const params = CreateResultUsgRequest.createFromJson({...value, ...appRequest, unit });
    //   ToolInspectionService().create(params)
    //     .then((response) => {
    //       if (response && response.data && response.data.data) {
    //         const params2 = {...appRequest, ID: response.data.data.item_id, itemId: response.data.data.item_id, unit, emr_id: response.data.data.EMR_ID};
    //         ToolInspectionService().view(params2)
    //           .then((resp) => {
    //             const { data } = resp.data;
    //             ToolInspectionService().pdfv3(PdfResultUsgRequest.createPdfRequest({ ...data, nomor_mr: appRequest.nomor_mr, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
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
    //   const params = UpdateResultUsgRequest.createFromJson({...value, ...appRequest, ID: data.ID, unit, emr_id: data.EMR_ID });
    //   ToolInspectionService().update(params)
    //     .then(() => {
    //       const params3 = {...appRequest, ID: data.ID, itemId: data.ID, unit, emr_id: data.EMR_ID};
    //       ToolInspectionService().view(params3)
    //         .then((resp) => {
    //           const { data } = resp.data;
    //           ToolInspectionService().pdfv3(PdfResultUsgRequest.createPdfRequest({...data, nomor_mr: appRequest.nomor_mr, umur_lengkap: treatment?.Pasien?.Umur_Lengkap}, appRequest.emr_id))
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
      <h4 className="mt-1">Hasil Pemeriksaan Alat</h4>
      <DicomForm
        dicom={data.dicoms} modality={"US"}
      />
      <FormGroup className="form-group" row>
        <h4 className="mt-2">Form Hasil Pemeriksaan Alat Usg</h4>
        <Row>
          <Col md="6" sm="12">
            <Row>
              <Col md="12" className="d-flex justify-content-center">
                <h5>OD</h5>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>Gain</Label>
              </Col>
              <Col md='8'>
                <Input
                  id="od_gain"
                  type="text"
                  name="od_gain"
                  innerRef={register() as any}
                  disabled
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>AXL</Label>
              </Col>
              <Col md='8'>
                <Input
                  id="od_axl"
                  type="text"
                  name="od_axl"
                  innerRef={register() as any}
                  disabled
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>Struktur Bola Mata</Label>
              </Col>
              <Col md='8'>
                <Input
                  id="od_struktur_bola_mata"
                  type="text"
                  name="od_struktur_bola_mata"
                  innerRef={register() as any}
                  disabled
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
                <Label style={{marginLeft:'30px'}}>Gain</Label>
              </Col>
              <Col md='8'>
                <Input
                  id="os_gain"
                  type="text"
                  name="os_gain"
                  innerRef={register() as any}
                  disabled
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col>
                <Label style={{marginLeft:'30px'}}>AXL</Label>
              </Col>
              <Col md='8'>
                <Input
                  id="os_axl"
                  type="text"
                  name="os_axl"
                  innerRef={register() as any}
                  disabled
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>Struktur Bola Mata</Label>
              </Col>
              <Col md='8'>
                <Input
                  id="os_struktur_bola_mata"
                  type="text"
                  name="os_struktur_bola_mata"
                  innerRef={register() as any}
                  disabled
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className="form-group" row>
        <Row>
          <Col md="6" sm="12">
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>Bentuk Kelainan</Label>
              </Col>
              <Col md='8'>
                <div>
                  <Input
                    id="od_bentuk_kelainan_1"
                    type="radio"
                    name="od_bentuk_kelainan"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setBentukKelainanOd('1');
                    }}
                    checked={bentukKelainanOd === '1'}
                    innerRef={register("od_bentuk_kelainan") as any}
                    disabled
                  />{' '}
                  <Label>Selaput</Label>
                </div>
                <div>
                  <Input
                    id="od_bentuk_kelainan_1"
                    type="radio"
                    name="od_bentuk_kelainan"
                    className="me-1"
                    value="2"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setBentukKelainanOd('2');
                    }}
                    checked={bentukKelainanOd === '2'}
                    innerRef={register("od_bentuk_kelainan") as any}
                    disabled
                  />{' '}
                  <Label>Bercak</Label>
                </div>
                <div>
                  <Input
                    id="od_bentuk_kelainan_1"
                    type="radio"
                    name="od_bentuk_kelainan"
                    className="me-1"
                    value="3"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setBentukKelainanOd('3');
                    }}
                    checked={bentukKelainanOd === '3'}
                    innerRef={register("od_bentuk_kelainan") as any}
                    disabled
                  />{' '}
                  <Label>Massa</Label>
                </div>
                <div>
                  <Input
                    id="od_bentuk_kelainan_1"
                    type="radio"
                    name="od_bentuk_kelainan"
                    className="me-1"
                    value="4"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setBentukKelainanOd('4');
                    }}
                    checked={bentukKelainanOd === '4'}
                    innerRef={register("od_bentuk_kelainan") as any}
                    disabled
                  />{' '}
                  <Label>Tidak Ada</Label>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md="6" sm="12">
            <Row className='mt-1'>
              <Col>
                <Label style={{marginLeft:'30px'}}>Bentuk Kelainan</Label>
              </Col>
              <Col md='8'>
                <div>
                  <Input
                    id="os_bentuk_kelainan_1"
                    type="radio"
                    name="os_bentuk_kelainan"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setBentukKelainanOs('1');
                    }}
                    checked={bentukKelainanOs === '1'}
                    innerRef={register("os_bentuk_kelainan") as any}
                    disabled
                  />{' '}
                  <Label>Selaput</Label>
                </div>
                <div>
                  <Input
                    id="os_bentuk_kelainan_2"
                    type="radio"
                    name="os_bentuk_kelainan"
                    className="me-1"
                    value="2"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setBentukKelainanOs('2');
                    }}
                    checked={bentukKelainanOs === '2'}
                    innerRef={register("os_bentuk_kelainan") as any}
                    disabled
                  />{' '}
                  <Label>Bercak</Label>
                </div>
                <div>
                  <Input
                    id="os_bentuk_kelainan_3"
                    type="radio"
                    name="os_bentuk_kelainan"
                    className="me-1"
                    value="3"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setBentukKelainanOs('3');
                    }}
                    checked={bentukKelainanOs === '3'}
                    innerRef={register("os_bentuk_kelainan") as any}
                    disabled
                  />{' '}
                  <Label>Massa</Label>
                </div>
                <div>
                  <Input
                    id="os_bentuk_kelainan_4"
                    type="radio"
                    name="os_bentuk_kelainan"
                    className="me-1"
                    value="4"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setBentukKelainanOs('4');
                    }}
                    checked={bentukKelainanOs === '4'}
                    innerRef={register("os_bentuk_kelainan") as any}
                    disabled
                  />{' '}
                  <Label>Tidak Ada</Label>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className="form-group" row>
        <Row>
          <Col md="6" sm="12">
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>Lokasi</Label>
              </Col>
              <Col md='8'>
                <div>
                  <Input
                    id="od_lokasi_1"
                    type="radio"
                    name="od_lokasi"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setLokasiOd('1');
                    }}
                    checked={lokasiOd === '1'}
                    innerRef={register("od_lokasi") as any}
                    disabled
                  />{' '}
                  <Label>Vitreous</Label>
                </div>
                <div>
                  <Input
                    id="od_lokasi_2"
                    type="radio"
                    name="od_lokasi"
                    className="me-1"
                    value="2"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setLokasiOd('2');
                    }}
                    checked={lokasiOd === '2'}
                    innerRef={register("od_lokasi") as any}
                    disabled
                  />{' '}
                  <Label>RCS Komplek</Label>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md="6" sm="12">
            <Row className='mt-1'>
              <Col>
                <Label style={{marginLeft:'30px'}}>Lokasi</Label>
              </Col>
              <Col md='8'>
                <div>
                  <Input
                    id="os_lokasi_1"
                    type="radio"
                    name="os_lokasi"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setLokasiOs('1');
                    }}
                    checked={lokasiOs === '1'}
                    innerRef={register("os_lokasi") as any}
                    disabled
                  />{' '}
                  <Label>Vitreous</Label>
                </div>
                <div>
                  <Input
                    id="os_lokasi_2"
                    type="radio"
                    name="os_lokasi"
                    className="me-1"
                    value="2"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setLokasiOs('2');
                    }}
                    checked={lokasiOs === '2'}
                    innerRef={register("os_lokasi") as any}
                    disabled
                  />{' '}
                  <Label>RCS Komplek</Label>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className="form-group" row>
        <Row>
          <Col md="6" sm="12">
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>Perlekatan N.II</Label>
              </Col>
              <Col md='8'>
                <div>
                  <Input
                    id="od_perlekatan_1"
                    type="radio"
                    name="od_perlekatan"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setPerlekatanOd('1');
                    }}
                    checked={perlekatanOd === '1'}
                    innerRef={register("od_perlekatan") as any}
                    disabled
                  />{' '}
                  <Label>Ya</Label>
                </div>
                <div>
                  <Input
                    id="od_perlekatan_2"
                    type="radio"
                    name="od_perlekatan"
                    className="me-1"
                    value="2"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setPerlekatanOd('2');
                    }}
                    checked={perlekatanOd === '2'}
                    innerRef={register("od_perlekatan") as any}
                    disabled
                  />{' '}
                  <Label>Tidak</Label>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md="6" sm="12">
            <Row className='mt-1'>
              <Col>
                <Label style={{marginLeft:'30px'}}>Perlekatan N.II</Label>
              </Col>
              <Col md='8'>
                <div>
                  <Input
                    id="os_perlekatan_1"
                    type="radio"
                    name="os_perlekatan"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setPerlekatanOs('1');
                    }}
                    checked={perlekatanOs === '1'}
                    innerRef={register("os_perlekatan") as any}
                    disabled
                  />{' '}
                  <Label>Ya</Label>
                </div>
                <div>
                  <Input
                    id="os_perlekatan_2"
                    type="radio"
                    name="os_perlekatan"
                    className="me-1"
                    value="2"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setPerlekatanOs('2');
                    }}
                    checked={perlekatanOs === '2'}
                    innerRef={register("os_perlekatan") as any}
                    disabled
                  />{' '}
                  <Label>Tidak</Label>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className="form-group" row>
        <Row>
          <Col md="6" sm="12">
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>After Movement</Label>
              </Col>
              <Col md='8'>
                <div>
                  <Input
                    id="od_after_movement_1"
                    type="radio"
                    name="od_after_movement"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setAfterOd('1');
                    }}
                    checked={afterOd === '1'}
                    innerRef={register("od_after_movement") as any}
                    disabled
                  />{' '}
                  <Label>Ya</Label>
                </div>
                <div>
                  <Input
                    id="od_after_movement_2"
                    type="radio"
                    name="od_after_movement"
                    className="me-1"
                    value="2"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setAfterOd('2');
                    }}
                    checked={afterOd === '2'}
                    innerRef={register("od_after_movement") as any}
                    disabled
                  />{' '}
                  <Label>Tidak</Label>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md="6" sm="12">
            <Row className='mt-1'>
              <Col>
                <Label style={{marginLeft:'30px'}}>After Movement</Label>
              </Col>
              <Col md='8'>
                <div>
                  <Input
                    id="os_after_movement_1"
                    type="radio"
                    name="os_after_movement"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setAfterOs('1');
                    }}
                    checked={afterOs === '1'}
                    innerRef={register("os_after_movement") as any}
                    disabled
                  />{' '}
                  <Label>Ya</Label>
                </div>
                <div>
                  <Input
                    id="os_after_movement_2"
                    type="radio"
                    name="os_after_movement"
                    className="me-1"
                    value="2"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setAfterOs('2');
                    }}
                    checked={afterOs === '2'}
                    innerRef={register("os_after_movement") as any}
                    disabled
                  />{' '}
                  <Label>Tidak</Label>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className="form-group" row>
        <Row>
          <Col md="6" sm="12">
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>Spike</Label>
              </Col>
              <Col md='8'>
                <div>
                  <Input
                    id="od_spike_1"
                    type="radio"
                    name="od_spike"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setSpikeOd('1');
                    }}
                    checked={spikeOd === '1'}
                    innerRef={register("od_spike") as any}
                    disabled
                  />{' '}
                  <Label>Rendah (0-30%)</Label>
                </div>
                <div>
                  <Input
                    id="od_spike_2"
                    type="radio"
                    name="od_spike"
                    className="me-1"
                    value="2"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setSpikeOd('2');
                    }}
                    checked={spikeOd === '2'}
                    innerRef={register("od_spike") as any}
                    disabled
                  />{' '}
                  <Label>Sedang (34-66%)</Label>
                </div>
                <div>
                  <Input
                    id="od_spike_3"
                    type="radio"
                    name="od_spike"
                    className="me-1"
                    value="3"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setSpikeOd('3');
                    }}
                    checked={spikeOd === '3'}
                    innerRef={register("od_spike") as any}
                    disabled
                  />{' '}
                  <Label>Tinggi (67-100%)</Label>
                </div>
                <div>
                  <Input
                    id="od_spike_4"
                    type="radio"
                    name="od_spike"
                    className="me-1"
                    value="4"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setSpikeOd('4');
                    }}
                    checked={spikeOd === '4'}
                    innerRef={register("od_spike") as any}
                    disabled
                  />{' '}
                  <Label>{`>100%`}</Label>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md="6" sm="12">
            <Row className='mt-1'>
              <Col>
                <Label style={{marginLeft:'30px'}}>Spike</Label>
              </Col>
              <Col md='8'>
                <div>
                  <Input
                    id="os_spike_1"
                    type="radio"
                    name="os_spike"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setSpikeOs('1');
                    }}
                    checked={spikeOs === '1'}
                    innerRef={register("os_spike") as any}
                    disabled
                  />{' '}
                  <Label>Rendah (0-30%)</Label>
                </div>
                <div>
                  <Input
                    id="os_spike_2"
                    type="radio"
                    name="os_spike"
                    className="me-1"
                    value="2"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setSpikeOs('2');
                    }}
                    checked={spikeOs === '2'}
                    innerRef={register("os_spike") as any}
                    disabled
                  />{' '}
                  <Label>Sedang (34-66%)</Label>
                </div>
                <div>
                  <Input
                    id="os_spike_3"
                    type="radio"
                    name="os_spike"
                    className="me-1"
                    value="3"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setSpikeOs('3');
                    }}
                    checked={spikeOs === '3'}
                    innerRef={register("os_spike") as any}
                    disabled
                  />{' '}
                  <Label>Tinggi (67-100)</Label>
                </div>
                <div>
                  <Input
                    id="os_spike_4"
                    type="radio"
                    name="os_spike"
                    className="me-1"
                    value="4"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setSpikeOs('4');
                    }}
                    checked={spikeOs === '4'}
                    innerRef={register("os_spike") as any}
                    disabled
                  />{' '}
                  <Label>{`>100%`}</Label>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className="form-group" row>
        <Row>
          <Col md="6" sm="12">
            <Row className='mt-1'>
              <Col style={{marginLeft:'30px'}}>
                <Label>Lain-Lain</Label>
              </Col>
              <Col md='8'>
                <div>
                  <Input
                    id="od_lain_lain"
                    type="textarea"
                    name="od_lain_lain"
                    innerRef={register() as any}
                    disabled
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col md="6" sm="12">
            <Row className='mt-1'>
              <Col>
                <Label style={{marginLeft:'30px'}}>Lain-Lain</Label>
              </Col>
              <Col md='8'>
                <div>
                  <Input
                    id="os_lain_lain"
                    type="textarea"
                    name="os_lain_lain"
                    innerRef={register() as any}
                    disabled
                  />
                </div>
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
            <td style={{width:'86%'}}>
              <Row>
                <Col>
                  <Input
                    id="kesimpulan_opt"
                    type="select"
                    name="kesimpulan_opt"
                    onChange={(e) => handleChangeKesimpulanOd(e)}
                    invalid={errors.kesimpulan_opt && true}
                    innerRef={register({ required: false }) as any}
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
                        disabled
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
              <Label>Tanggal</Label>
            </td>
            <td style={{width:'86%'}}>
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
              disabled
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
              onSigned={(assigner: SignatureModel) => handleDoctorSigned(assigner)}
              disabled
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
    </Form>
  )
}

export default ResultUsgFormDetail;
