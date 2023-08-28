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
import { PdfFundusPhotoExaminationRequest } from '@modules/outpatient/inspection-result/requests/pdf-fundus-photo-examination.request';
import nilai from '../const/nilai';
import score from '../const/score';
import unit from '@src/modules/outpatient/cppt/const/unit';
import { UpdatePatientTransferRequest } from '../requests/update-patient-transfer-request';
import { CreatePatientTransferRequest } from '../requests/create-patient-transfer-request';
import { PatientTransferService } from '../services';
import { fetchPatientTransfer, handlePdf } from '../stores/patient-transfer.store';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';

const TransferPasienDetail = (props: { data?: any | undefined}) => {
  const { data } = props;

  const dispatch = useAppDispatch();
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const [processing, setProcessing] = useState<boolean | undefined>(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const [alderette, setAlderette] = useState<boolean>((data && data.Alderette) ? !!(data.Alderette) : false);
  const [steward, setSteward] = useState<boolean>((data && data.Steward) ? !!(data.Steward) : false);
  const [nilaiAktivitas, setNilaiAktivitas] = useState(data && data.Alderette_Aktivitas ? parseInt(data.Alderette_Aktivitas) : 0);
  const [nilaiSirkulasi, setNilaiSirkulasi] = useState(data && data.Alderette_Sirkulasi ? parseInt(data.Alderette_Sirkulasi) : 0);
  const [nilaiPernafasan, setNilaiPernafasan] = useState(data && data.Alderette_Pernafasan ? parseInt(data.Alderette_Pernafasan) : 0);
  const [nilaiPernafasanSteward, setNilaiPernafasanSteward] = useState(data && data.Steward_Pernafasan ? parseInt(data.Steward_Pernafasan) : 0);
  const [nilaiKesadaran, setNilaiKesadaran] = useState(data && data.Alderette_Kesadaran ? parseInt(data.Alderette_Kesadaran) : 0);
  const [nilaiKesadaranSteward, setNilaiKesadaranSteward] = useState(data && data.Steward_Kesadaran ? parseInt(data.Steward_Kesadaran) : 0);
  const [nilaiMotorik, setNilaiMotorik] = useState(data && data.Steward_Motorik ? parseInt(data.Steward_Motorik) : 0);
  const [nilaiWarnaKulit, setNilaiWarnaKulit] = useState(data && data.Alderette_Warna_Kulit ? parseInt(data.Alderette_Warna_Kulit) : 0);
  const [total, setTotal] = useState(0);
  const [totalSteward, setTotalSteward] = useState(0);
  const [laboratorium, setLaboratorium] = useState((data && data.Pemeriksaan_Alat_Laboratorium_Text) ? !!(data.Pemeriksaan_Alat_Laboratorium_Text) : false);
  const [lain, setLain] = useState((data && data.Pemeriksaan_Alat_Lain_Text) ? !!(data.Pemeriksaan_Alat_Lain_Text) : false);
  const [Ga, setGa] = useState((data && data.Puasa) ? !!(data.Puasa) : false);


  useEffect(() => {
    const sum = nilaiAktivitas + nilaiSirkulasi + nilaiPernafasan + nilaiKesadaran + nilaiWarnaKulit;
    setTotal(sum);
    setValue('total_score', sum)
  }, [nilaiAktivitas, nilaiSirkulasi, nilaiPernafasan, nilaiKesadaran, nilaiWarnaKulit])


  const { register, handleSubmit, errors, setValue, getValues, control, watch } = useForm({
    mode: 'onChange',
    resolver: yupResolver(UpdatePatientTransferRequest.schema()),
    defaultValues: {
      // nama: data && data.Nama ? data.Nama : '',
      // tanggal:(data && data && data.Tanggal) ? data.Tanggal.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      id: data && data.ID ? data.ID : '',
      id_dokter_dpjp: data && data.ID_Dokter_Dpjp ? data.ID_Dokter_Dpjp :  '',
      id_dokter_operator: data && data.ID_Dokter_Operator ? data.ID_Dokter_Operator : '',
      tanggal_transfer: data && data.Tanggal_Transfer ? data.Tanggal_Transfer : '',
      indikasi_transfer: data && data.Indikasi_Transfer ? data.Indikasi_Transfer : '',
      pengantar: data && data.Pengantar ? data.Pengantar : '',
      penerima: data && data.Penerima ? data.Penerima : '',
      tanggal_masuk_rs: data && data.Tanggal_Masuk_Rs ? data.Tanggal_Masuk_Rs : '',
      diagnosa: data && data.Diagnosa ? data.Diagnosa :  '',
      kesadaran: data && data.Kesadaran ? data.Kesadaran : '',
      vital_td: data && data.Vital_TD ? data.Vital_TD : '',
      vital_n: data && data.Vital_N ? data.Vital_N : '',
      vital_p: data && data.Vital_P ? data.Vital_P : '',
      vital_t: data && data.Vital_T ? data.Vital_T : '',
      vital_sat_o2: data && data.Vital_Sat_O2 ? data.Vital_Sat_O2 : '',
      visus_od: data && data.Visus_OD ? data.Visus_OD : '',
      visus_os: data && data.Visus_OS ? data.Visus_OS : '',
      tonometer_od: data && data.Tonometer_OD ? data.Tonometer_OD : '',
      tonometer_os: data && data.Tonometer_OS ? data.Tonometer_OS : '',
      skala_nyeri: data && data.Skala_Nyeri ? data.Skala_Nyeri : '',
      puasa: data && data.Puasa ? data.Puasa : '',
      waktu_puasa: data && data.Waktu_Puasa ? data.Waktu_Puasa : '',
      keluhan: data && data.Keluhan ? data.Keluhan : '',
      alderette: data && data.Alderette ? data.Alderette : '',
      alderette_aktivitas: data && data.Alderette_Aktivitas ? data.Alderette_Aktivitas : '',
      alderette_sirkulasi: data && data.Alderette_Sirkulasi ? data.Alderette_Sirkulasi : '',
      alderette_pernafasan: data && data.Alderette_Pernafasan ? data.Alderette_Pernafasan : '',
      alderette_kesadaran: data && data.Alderette_Kesadaran ? data.Alderette_Kesadaran : '',
      alderette_warna_kulit: data && data.Alderette_Warna_Kulit ? data.Alderette_Warna_Kulit : '',
      alderette_score: data && data.Alderette_Score ?  data.Alderette_Score : '',
      steward: data && data.Steward ? data.Steward : '',
      steward_kesadaran: data && data.Steward_Kesadaran ? data.Steward_Kesadaran : '',
      steward_pernafasan: data && data.Steward_Pernafasan ? data.Steward_Pernafasan : '',
      steward_motorik: data && data.Steward_Motorik ? data.Steward_Motorik : '',
      steward_score: data && data.Steward_Score ? data.Steward_Score : '',
      pemeriksaan_alat_ekg: data && data.Pemeriksaan_Alat_Ekg ? data.Pemeriksaan_Alat_Ekg : '',
      pemeriksaan_alat_laboratorium: data && data.Pemeriksaan_Alat_Laboratorium ? data.Pemeriksaan_Alat_Laboratorium : '',
      pemeriksaan_alat_laboratorium_text: data && data.Pemeriksaan_Alat_Laboratorium_Text ? data.Pemeriksaan_Alat_Laboratorium_Text : '',
      pemeriksaan_alat_usg: data && data.Pemeriksaan_Alat_Usg ? data.Pemeriksaan_Alat_Usg : '',
      pemeriksaan_alat_biometri: data && data.Pemeriksaan_Alat_Biometri ? data.Pemeriksaan_Alat_Biometri : '',
      pemeriksaan_alat_oct_macula: data && data.Pemeriksaan_Alat_Oct_Macula ? data.Pemeriksaan_Alat_Oct_Macula : '',
      pemeriksaan_alat_thorax_foto: data && data.Pemeriksaan_Alat_Thorax_Foto ? data.Pemeriksaan_Alat_Thorax_Foto : '',
      pemeriksaan_alat_ct_scan: data && data.Pemeriksaan_Alat_Ct_Scan ?  data.Pemeriksaan_Alat_Ct_Scan : '',
      pemeriksaan_alat_foto_fundus: data && data.Pemeriksaan_Alat_Foto_Fundus ? data.Pemeriksaan_Alat_Foto_Fundus : '',
      pemeriksaan_alat_oct_papil: data && data.Pemeriksaan_Alat_Oct_Papil ? data.Pemeriksaan_Alat_Oct_Papil : '',
      pemeriksaan_alat_lain_lain: data && data.Pemeriksaan_Alat_Lain_Lain ? data.Pemeriksaan_Alat_Lain_Lain : '',
      pemeriksaan_alat_lain_text: data && data.Pemeriksaan_Alat_Lain_Text ? data.Pemeriksaan_Alat_Lain_Text : '',
      terapi: data && data.Terapi ? data.Terapi : '',
      rencana: data && data.Rencana ? data.Rencana : '',
      diet: data && data.Diet ? data.Diet : '',
      tanda_tangan_perawat_pengantar: data && data.Tanda_Tangan_Perawat_Pengantar ? data.Tanda_Tangan_Perawat_Pengantar : '',
      id_tanda_tangan_perawat_pengantar: data && data.Id_Tanda_Tangan_Perawat_Pengantar ? data.Id_Tanda_Tangan_Perawat_Pengantar : '',
      tanda_tangan_perawat_penerima: data && data.Tanda_Tangan_Perawat_Penerima ? data.Tanda_Tangan_Perawat_Penerima : '',
      id_tanda_tangan_perawat_penerima: data && data.Id_Tanda_Tangan_Perawat_Penerima ? data.Id_Tanda_Tangan_Perawat_Penerima : '',
    },
  })

  const stewardKesadaran = watch('steward_kesadaran');
  const stewardPernafasan = watch('steward_pernafasan');
  const stewardMotorik = watch('steward_motorik');

  useEffect(() => {
    const score = parseInt(stewardKesadaran) + parseInt(stewardMotorik) + parseInt(stewardPernafasan);
    setValue('steward_score', score);
  }, [stewardKesadaran, stewardMotorik, stewardPernafasan])

  const alderetteAktivitas = watch('alderette_aktivitas');
  const alderettekesadaran = watch('alderette_kesadaran');
  const alderetteSirkulasi = watch('alderette_sirkulasi');
  const alderettePernafasan = watch('alderette_pernafasan');
  const alderetteWarnaKulit = watch('alderette_warna_kulit');

  useEffect(() => {
    const score = parseInt(alderetteAktivitas) +  parseInt(alderettekesadaran) + parseInt(alderetteSirkulasi) +  parseInt(alderettePernafasan) + parseInt(alderetteWarnaKulit);
    setValue('alderette_score', score)
  }, [alderetteAktivitas, alderettekesadaran, alderetteSirkulasi, alderettePernafasan, alderetteWarnaKulit])

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handlePerawatPenerima = (image: SignatureModel) => {
    setValue('tanda_tangan_perawat_penerima', image.Signature);
    setValue('id_tanda_tangan_perawat_penerima', image.ID_Karyawan);
  }

  const handlePerawatPengantar = (image: SignatureModel) => {
    setValue('tanda_tangan_perawat_pengantar', image.Signature);
    setValue('id_tanda_tangan_perawat_pengantar', image.ID_Karyawan);
  }

  const handleSubmitForm = (value: any) => {
    // if (!treatment) {
    //   return;
    // }
    // setProcessing(true);
    // const appRequest = AppRequest.createFromStore(treatment);
    // if (!data) {
    //   const params = CreatePatientTransferRequest.createFromJson({...value, ...appRequest});
    //   PatientTransferService().create(params)
    //     .then((response) => {
    //       if (response && response.data && response.data.data) {
    //         // const params2 = {...appRequest};
    //       // PatientTransferService().pdfNew(params2).then(() => {
    //       //   if (onSuccessSubmit) {
    //       //     onSuccessSubmit();
    //       //     return true;
    //       //   }
    //       // }).catch(() => {
    //       //   setProcessing(false);
    //       // })
    //       }
    //       if (onSuccessSubmit) {
    //         onSuccessSubmit();
    //       }
    //     });
    // } else {
    //   const params = UpdatePatientTransferRequest.createFromJson({...value, ...appRequest, id: data.ID});
    //   PatientTransferService().update(params)
    //     .then(() => {
    //       // const params3 = {...appRequest};
    //       // PatientTransferService().pdfNew(params3).then(() => {
    //       //   if (onSuccessSubmit) {
    //       //     onSuccessSubmit();
    //       //     return true;
    //       //   }
    //       // }).catch(() => {
    //       //   setProcessing(false);
    //       // })
    //       if (onSuccessSubmit) {
    //         onSuccessSubmit();
    //       }
    //     });
    // }
  }

  const handleChangeAlderette = (e: any) => {
    if (e.target.value === 'Tidak Dikaji') {
      setAlderette(true);
      setValue('alderette_aktivitas', '0')
      setValue('alderette_sirkulasi', '0')
      setValue('alderette_pernafasan', '0')
      setValue('alderette_kesadaran', '0')
      setValue('alderette_warna_kulit', '0')
      setValue('alderette_score', '0')
    } else {
      setAlderette(false);
      setValue('alderette_aktivitas', '1')
      setValue('alderette_sirkulasi', '1')
      setValue('alderette_pernafasan', '1')
      setValue('alderette_kesadaran', '1')
      setValue('alderette_warna_kulit', '1')
    }
  }

  const handleChangeSteward = (e: any) => {
    if (e.target.value === 'Tidak Dikaji') {
      setSteward(true);
      setValue('steward_kesadaran', '0')
      setValue('steward_pernafasan', '0')
      setValue('steward_motorik', '0')
    } else {
      setSteward(false);
      setValue('steward_kesadaran', '1')
      setValue('steward_pernafasan', '1')
      setValue('steward_motorik', '1')
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <h4>Transfer Pasien Intra Rumah Sakit</h4>
      <div className="border-dark mt-2 p-1">
        <FormGroup className="form-group" row>
          <Row className='mt-1'>
            <Col md="6" sm="12">
              <Row>
                <Col>
                  <Label style={{marginLeft:'30px'}} className='mt-2'>Dokter DPJP</Label>
                </Col>
                <Col md='9'>
                  <Input
                    className="mt-1"
                    type="select"
                    id="id_dokter_dpjp"
                    name="id_dokter_dpjp"
                    innerRef={register()}
                    disabled
                  >
                    <option value="" disabled={false}>Pilih Salah Satu</option>
                    {
                      doctors && Array.isArray(doctors) && doctors.map((item: any, key: number) => {
                        return <option value={item.ID_Karyawan} key={key}>{ item.Nama }</option>;
                      })
                    }
                  </Input>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label style={{marginLeft:'30px', width:'100%'}} className='mt-2'>Dokter Operator</Label>
                </Col>
                <Col md='9'>
                  <Input
                    className="mt-1"
                    type="select"
                    id="id_dokter_operator"
                    name="id_dokter_operator"
                    innerRef={register()}
                    disabled
                  >
                    <option value="" disabled={false}>Pilih Salah Satu</option>
                    {
                      doctors && Array.isArray(doctors) && doctors.map((item: any, key: number) => {
                        return <option value={item.ID_Karyawan} key={key}>{ item.Nama }</option>;
                      })
                    }
                  </Input>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label style={{marginLeft:'30px', width:'100%'}} className='mt-2'>Tanggal & Pukul</Label>
                </Col>
                <Col md='9'>
                  <DateTimeInput
                    name='tanggal_transfer'
                    defaultValue='date'
                    md={1}
                    style={{marginTop: '-10px'}}
                    {...{ register, errors }}
                    readOnly
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label style={{marginLeft:'30px', width:'100%'}} className='mt-2'> Indikasi Transfer</Label>
                </Col>
                <Col md='9' className='mt-1'>
                  <Input
                    id='indikasi_transfer'
                    type='textarea'
                    name='indikasi_transfer'
                    innerRef={register()}
                    disabled
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label style={{marginLeft:'30px', width:'100%'}} className='mt-2'>Tanggal Masuk RS</Label>
                </Col>
                <Col md='9'>
                  <DateTimeInput
                    name='tanggal_masuk_rs'
                    defaultValue='date'
                    md={1}
                    style={{marginTop: '-10px'}}
                    {...{ register, errors }}
                    readOnly
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label style={{marginLeft:'30px', width:'100%'}} className='mt-2'> Diagnosa Medis</Label>
                </Col>
                <Col md='9' className='mt-1'>
                  <Input
                    id='diagnosa'
                    type='textarea'
                    name='diagnosa'
                    innerRef={register()}
                    disabled
                  />
                </Col>
              </Row>
            </Col>
            <div className="border-dark ms-2" style={{width:'250px'}}>
              <Col>
                <Row>
                  <Col>
                    <Label style={{marginLeft:'30px'}} className='mt-2'>Pengantar</Label>
                  </Col>
                </Row>
                <Row>
                  <Col className='ms-2'>
                    <Input
                      id='pengantar'
                      type='radio'
                      name='pengantar'
                      className='me-1'
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.Pengantar === 'UGD'}
                      value='UGD'
                      innerRef={register('pengantar') as any}
                      disabled
                    />
                    <Label>Ugd</Label>
                  </Col>
                </Row>
                <Row>
                  <Col className='ms-2'>
                    <Input
                      id='pengantar'
                      type='radio'
                      name='pengantar'
                      className='me-1'
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.Pengantar === 'Rawat Jalan'}
                      value='Rawat Jalan'
                      innerRef={register('pengantar') as any}
                      disabled
                    />
                    <Label>Rawat Jalan</Label>
                  </Col>
                </Row>
                <Row>
                  <Col className='ms-2'>
                    <Input
                      id='pengantar'
                      type='radio'
                      name='pengantar'
                      className='me-1'
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.Pengantar === 'Rawat Inap'}
                      value='Rawat Inap'
                      innerRef={register('pengantar') as any}
                      disabled
                    />
                    <Label>Rawat Inap</Label>
                  </Col>
                </Row>
                <Row>
                  <Col className='ms-2'>
                    <Input
                      id='pengantar'
                      type='radio'
                      name='pengantar'
                      className='me-1'
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.Pengantar === 'Kamar Bedah'}
                      value='Kamar Bedah'
                      innerRef={register('pengantar') as any}
                      disabled
                    />
                    <Label>Kamar Bedah</Label>
                  </Col>
                </Row>
              </Col>
            </div>
            <div className="border-dark ms-5" style={{width:'250px'}}>
              <Col>
                <Col>
                  <Row>
                    <Col>
                      <Label style={{marginLeft:'30px'}} className='mt-2'>Penerima</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col className='ms-2'>
                      <Input
                        id='penerima'
                        type='radio'
                        name='penerima'
                        className='me-1'
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.Penerima === 'Rawat Jalan'}
                        value='Rawat Jalan'
                        innerRef={register('penerima') as any}
                        disabled
                      />
                      <Label>Rawat Jalan</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col className='ms-2'>
                      <Input
                        id='penerima_ranap'
                        type='radio'
                        name='penerima'
                        className='me-1'
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.Penerima === 'Rawat Inap'}
                        value='Rawat Inap'
                        innerRef={register('penerima') as any}
                        disabled
                      />
                      <Label>Rawat Inap</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col className='ms-2'>
                      <Input
                        id='penerima_kamar_bedah'
                        type='radio'
                        name='penerima'
                        className='me-1'
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.Penerima === 'Kamar Bedah'}
                        value='Kamar Bedah'
                        innerRef={register('penerima') as any}
                        disabled
                      />
                      <Label>Kamar Bedah</Label>
                    </Col>
                  </Row>
                </Col>
              </Col>
            </div>
          </Row>
        </FormGroup>
      </div>
      <div className="border-dark mt-2 p-1">
        <FormGroup className="mt-1 form-group" row>
          <Row>
            <Col md='3'>
              <Label>1. Pemeriksaan Fisik</Label>
            </Col>
          </Row>
          <Row>
            <Col md='3'>
              <Label>Kesadaran</Label>
            </Col>
            <Col>
              <Input
                id="kesadaran"
                type="radio"
                name="kesadaran"
                className="me-1"
                value="compos"
                onChange={(e) => handleRadioChange(e)}
                defaultChecked={data && data.Kesadaran === 'compos'}
                innerRef={register("kesadaran") as any}
                disabled
              />{' '}
              <Label>Compose Mentis</Label>
            </Col>
            <Col>
              <Input
                id="kesadaran_somnolen"
                type="radio"
                name="kesadaran"
                className="me-1"
                value="somnolen"
                onChange={(e) => handleRadioChange(e)}
                defaultChecked={data && data.Kesadaran === 'somnolen'}
                innerRef={register("kesadaran") as any}
                disabled
              />{' '}
              <Label>Somnolen</Label>
            </Col>
            <Col>
              <Input
                id="kesadaran_sopor"
                type="radio"
                name="kesadaran"
                className="me-1"
                value="sopor"
                onChange={(e) => handleRadioChange(e)}
                defaultChecked={data && data.Kesadaran === 'sopor'}
                innerRef={register("kesadaran") as any}
                disabled
              />{' '}
              <Label>Sopor</Label>
            </Col>
            <Col>
              <Input
                id="kesadaran_apatis"
                type="radio"
                name="kesadaran"
                className="me-1"
                value="apatis"
                onChange={(e) => handleRadioChange(e)}
                defaultChecked={data && data.Apatis === 'apatis'}
                innerRef={register("kesadaran") as any}
                disabled
              />{' '}
              <Label>Apatis</Label>
            </Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id="kesadaran_delirium"
                type="radio"
                name="kesadaran"
                className="me-1"
                value="delirium"
                onChange={(e) => handleRadioChange(e)}
                defaultChecked={data && data.Kesadaran === 'delirium'}
                innerRef={register("kesadaran") as any}
                disabled
              />{' '}
              <Label>Delirium</Label>
            </Col>
            <Col>
              <Input
                id="kesadaran_koma"
                type="radio"
                name="kesadaran"
                className="me-1"
                value="koma"
                onChange={(e) => handleRadioChange(e)}
                defaultChecked={data && data.Koma === 'koma'}
                innerRef={register("kesadaran") as any}
                disabled
              />{' '}
              <Label>Koma</Label>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Row md="8">
            <Col style={{width: '100%'}}>
              <Label>Tanda-tanda Vital</Label>
            </Col>
            <Col>
              <Label>TD</Label>
            </Col>
            <Col>
              <Input
                id="vital_td"
                type="text"
                name="vital_td"
                style={{marginLeft:'-60px', width:'150px'}}
                innerRef={register() as any}
                disabled
              />
            </Col>
            <Col>
              <Label>HR</Label>
            </Col>
            <Col>
              <Input
                id="vital_n"
                type="text"
                name="vital_n"
                style={{marginLeft:'-60px', width:'150px'}}
                innerRef={register() as any}
                disabled
              />
            </Col>
            <Col>
              <Label>Pernafasan</Label>
            </Col>
            <Col>
              <Input
                id="vital_p"
                type="text"
                name="vital_p"
                style={{marginLeft:'-60px', width:'150px'}}
                innerRef={register() as any}
                disabled
              />
            </Col>
          </Row>

          <Row md="8" className='mt-1'>
            <Col>
            </Col>
            <Col>
              <Label>Temperatur</Label>
            </Col>
            <Col>
              <Input
                id="vital_t"
                type="text"
                name="vital_t"
                style={{marginLeft:'-60px', width:'150px'}}
                innerRef={register() as any}
                disabled
              />
            </Col>
            <Col>
              <Label>SP02</Label>
            </Col>
            <Col>
              <Input
                id="vital_sat_o2"
                type="text"
                name="vital_sat_o2"
                style={{marginLeft:'-60px', width:'150px'}}
                innerRef={register() as any}
                disabled
              />
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Row md="8" className='mt-1'>
            <Col>
              <Label>Visus</Label>
            </Col>
            <Col>
              <Label>VOD</Label>
            </Col>
            <Col>
              <Input
                id="visus_od"
                type="text"
                name="visus_od"
                style={{marginLeft:'-60px', width:'150px'}}
                innerRef={register() as any}
                disabled
              />
            </Col>
            <Col>
              <Label>VOS</Label>
            </Col>
            <Col>
              <Input
                id="visus_os"
                type="text"
                name="visus_os"
                style={{marginLeft:'-60px', width:'150px'}}
                innerRef={register() as any}
                disabled
              />
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Row md="8" className='mt-1'>
            <Col>
              <Label>Tonometer</Label>
            </Col>
            <Col>
              <Label>TOD</Label>
            </Col>
            <Col>
              <Input
                id="tonometer_od"
                type="text"
                name="tonometer_od"
                style={{marginLeft:'-60px', width:'150px'}}
                innerRef={register() as any}
                disabled
              />
            </Col>
            <Col>
              <Label style={{marginLeft:'-70px'}}>mmHg</Label>
            </Col>
            <Col>
              <Label style={{marginLeft:'-90%'}}>TOS</Label>
            </Col>
            <Col>
              <Input
                id="tonometer_os"
                type="text"
                name="tonometer_os"
                style={{marginLeft:'-260px', width:'150px'}}
                innerRef={register() as any}
                disabled
              />
            </Col>
            <Col>
              <Label style={{marginLeft:'-260px'}}>mmHg</Label>
            </Col>
          </Row>
          <Row className='mt-1'>
            <Col md='2'>
              <Label>Skala Nyeri</Label>
            </Col>
            <Col md='10' style={{marginLeft:'-80px'}} className='align-items-center justify-content-center text-center'>
              <div className='d-flex'>
                <div>
                  <Input
                    id="skala_nyeri_0"
                    type="radio"
                    name="skala_nyeri"
                    style={{marginLeft:'40px'}}
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.Skala_Nyeri === '0'}
                    value="1"
                    innerRef={register("skala_nyeri") as any}
                    disabled
                  />{' '}
                  <Label>0</Label>
                </div>
                <div>
                  <Input
                    id="skala_nyeri_1"
                    type="radio"
                    name="skala_nyeri"
                    style={{marginLeft:'40px'}}
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.Skala_Nyeri === '1'}
                    value="1"
                    innerRef={register("skala_nyeri") as any}
                    disabled
                  />{' '}
                  <Label>1</Label>
                </div>
                <div>
                  <Input
                    id="skala_nyeri_2"
                    type="radio"
                    name="skala_nyeri"
                    style={{marginLeft:'35px'}}
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.Skala_Nyeri === '2'}
                    value="2"
                    innerRef={register("skala_nyeri")as any}
                    disabled
                  />{' '}
                  <Label>2</Label>
                </div>
                <div>
                  <Input
                    id="skala_nyeri_3"
                    type="radio"
                    name="skala_nyeri"
                    style={{marginLeft:'35px'}}
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.Skala_Nyeri === '3'}
                    value="3"
                    innerRef={register("skala_nyeri") as any}
                    disabled
                  />{' '}
                  <Label>3</Label>
                </div>
                <div>
                  <Input
                    id="skala_nyeri_4"
                    type="radio"
                    name="skala_nyeri"
                    style={{marginLeft:'35px'}}
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.Skala_Nyeri === '4'}
                    value="4"
                    innerRef={register("skala_nyeri") as any}
                    disabled
                  />{' '}
                  <Label>4</Label>
                </div>
                <div>
                  <Input
                    id="skala_nyeri_5"
                    type="radio"
                    name="skala_nyeri"
                    style={{marginLeft:'35px'}}
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.Skala_Nyeri === '5'}
                    value="5"
                    innerRef={register("skala_nyeri") as any}
                    disabled
                  />{' '}
                  <Label>5</Label>
                </div>
                <div>
                  <Input
                    id="skala_nyeri_6"
                    type="radio"
                    name="skala_nyeri"
                    style={{marginLeft:'35px'}}
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.Skala_Nyeri === '6'}
                    value="6"
                    innerRef={register("skala_nyeri") as any}
                    disabled
                  />{' '}
                  <Label>6</Label>
                </div>
                <div>
                  <Input
                    id="skala_nyeri_7"
                    type="radio"
                    name="skala_nyeri"
                    style={{marginLeft:'35px'}}
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.Skala_Nyeri === '7'}
                    value="7"
                    innerRef={register("skala_nyeri") as any}
                    disabled
                  />{' '}
                  <Label>7</Label>
                </div>
                <div>
                  <Input
                    id="skala_nyeri_8"
                    type="radio"
                    name="skala_nyeri"
                    style={{marginLeft:'35px'}}
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.Skala_Nyeri === '8'}
                    value="8"
                    innerRef={register("skala_nyeri") as any}
                    disabled
                  />{' '}
                  <Label>8</Label>
                </div>
                <div>
                  <Input
                    id="skala_nyeri_9"
                    type="radio"
                    name="skala_nyeri"
                    style={{marginLeft:'35px'}}
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.Skala_Nyeri === '9'}
                    value="9"
                    innerRef={register("skala_nyeri")as any}
                    disabled
                  />{' '}
                  <Label>9</Label>
                </div>
                <div>
                  <Input
                    id="skala_nyeri10"
                    type="radio"
                    name="skala_nyeri"
                    style={{marginLeft:'35px'}}
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.Skala_Nyeri === '10'}
                    value="10"
                    innerRef={register("skala_nyeri") as any}
                    disabled
                  />{' '}
                  <Label>10</Label>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='mt-1'>
            <Col>
              <Label>Puasa</Label>
            </Col>
            <Col style={{marginLeft:'-110px'}}>
              <Input
                id='puasa'
                type='radio'
                name='puasa'
                className='me-1'
                onChange={(e) => {
                  setGa(e.target.checked)
                  handleRadioChange(e);
                }}
                defaultChecked={ data && data.Puasa === 'puasa_ya'}
                value='puasa_ya'
                innerRef={register('puasa')as any}
                disabled
              />
              <Label>Ya</Label>
            </Col>
            <Col>
              {
                Ga && (
                  <>
                    <Row className='mt-1'>
                      <Col>
                        <Input
                          id="waktu_puasa"
                          type="time"
                          name="waktu_puasa"
                          defaultValue={(data && data.Waktu_Puasa) ? data.Waktu_Puasa : ''}
                          innerRef={register()}
                          style={{marginLeft:'-50px', marginTop:'-20px'}}
                          disabled
                        />
                      </Col>
                    </Row>
                  </>
                )
              }
            </Col>
            <Col>
              <Input
                id='puasa'
                type='radio'
                name='puasa'
                className='me-1'
                onChange={(e) => {
                  if (e.target.checked) {
                    setGa(false);
                  }
                  handleRadioChange(e)
                }}
                defaultChecked={ data && data.Puasa === 'puasa_tidak'}
                value='puasa_tidak'
                innerRef={register('puasa')as any}
                disabled
              />
              <Label>Tidak</Label>
            </Col>
            <Col></Col>
          </Row>
          <Row className='mt-1'>
            <Col>
              <Label>Keluhan Saat Ini</Label>
            </Col>
            <Col md='10'>
              <Input
                id='keluhan'
                type='textarea'
                name='keluhan'
                style={{marginLeft:'-40px'}}
                innerRef={register()}
                disabled
              />
            </Col>
          </Row>
        </FormGroup>
        
        <FormGroup className="form-group mt-2" row>
          <Row>
            <Col>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>
                      <Label>Aldrette Score (Dewasa)</Label>
                    </th>
                    <th>
                      <Input
                        type="select"
                        id= "alderette"
                        name= "alderette"
                        innerRef={register()}
                        onChange={(e) => handleChangeAlderette(e)}
                        disabled
                      >
                        <option value="" disabled={true}>---</option>
                        {
                          score && score.map((item: any, key: number) => {
                            return <option value={item.value} key={key}>{ item.name }</option>;
                          })
                        }
                      </Input>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Label>Aktivitas</Label>
                    </td>
                    <td className="d-flex justify-content-center">
                      <Input
                        type="select"
                        id= "alderette_aktivitas"
                        name= "alderette_aktivitas"
                        innerRef={register()}
                        // disabled={alderette}
                        disabled
                      >
                        <option value="" disabled={false}>---</option>
                        {
                          nilai && nilai.map((item: any, key: number) => {
                            return <option value={item.value} key={key}>{ item.name }</option>;
                          })
                        }
                      </Input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label>Sirkulasi</Label>
                    </td>
                    <td className="d-flex justify-content-center">
                      <Input
                        type="select"
                        id= "alderette_sirkulasi"
                        name= "alderette_sirkulasi"
                        innerRef={register()}
                        // disabled={alderette}
                        disabled
                      >
                        <option value="" disabled={false}>---</option>
                        {
                          nilai && nilai.map((item: any, key: number) => {
                            return <option value={item.value} key={key}>{ item.name }</option>;
                          })
                        }
                      </Input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label>Pernafasan</Label>
                    </td>
                    <td className="d-flex justify-content-center">
                      <Input
                        type="select"
                        id= "alderette_pernafasan"
                        name= "alderette_pernafasan"
                        innerRef={register()}
                        // disabled={alderette}
                        disabled
                      >
                        <option value="" disabled={false}>---</option>
                        {
                          nilai && nilai.map((item: any, key: number) => {
                            return <option value={item.value} key={key}>{ item.name }</option>;
                          })
                        }
                      </Input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label>Kesadaran</Label>
                    </td>
                    <td className="d-flex justify-content-center">
                      <Input
                        type="select"
                        id= "alderette_kesadaran"
                        name= "alderette_kesadaran"
                        innerRef={register()}
                        // disabled={alderette}
                        disabled
                      >
                        <option value="" disabled={false}>---</option>
                        {
                          nilai && nilai.map((item: any, key: number) => {
                            return <option value={item.value} key={key}>{ item.name }</option>;
                          })
                        }
                      </Input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label>Warna Kulit</Label>
                    </td>
                    <td className="d-flex justify-content-center">
                      <Input
                        type="select"
                        id= "alderette_warna_kulit"
                        name= "alderette_warna_kulit"
                        innerRef={register()}
                        // disabled={alderette}
                        disabled
                      >
                        <option value="" disabled={false}>---</option>
                        {
                          nilai && nilai.map((item: any, key: number) => {
                            return <option value={item.value} key={key}>{ item.name }</option>;
                          })
                        }
                      </Input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label>Total Skor</Label>
                    </td>
                    <td className="d-flex justify-content-center">
                      <Input
                        className="mt-1"
                        style={{width:'205px'}}
                        type="number"
                        id="alderette_score"
                        name="alderette_score"
                        innerRef={register()}
                        disabled
                      >
                      </Input>
                    </td>
                  </tr>
                  <Row>
                    <Col>
                      <Label className='text-danger'> Keterangan</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col className='text-danger'>
                      <Label className='text-danger'>Tekanan darah normal berkisar 90/50-160/100</Label>
                      <Label className='text-danger'>Pasin dapat di pindah ke rawat inap, jika score {'>'} 8</Label> 
                    </Col>
                  </Row>
                </tbody>
              </table>
            </Col>

            <Col>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>
                      <Label>Steward Score (Anak-anak)</Label>
                    </th>
                    <th>
                      <Input
                        type="select"
                        id= "steward"
                        name= "steward"
                        innerRef={register()}
                        onChange={(e) => handleChangeSteward(e)}
                        disabled
                      >
                        <option value="" disabled={true}>---</option>
                        {
                          score && score.map((item: any, key: number) => {
                            return <option value={item.value} key={key}>{ item.name }</option>;
                          })
                        }
                      </Input>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Label>Kesadaran</Label>
                    </td>
                    <td>
                      <Input
                        type="select"
                        id= "steward_kesadaran"
                        name= "steward_kesadaran"
                        innerRef={register()}
                        // disabled={steward}
                        disabled
                      >
                        {/* <option value="" disabled={true}>---</option> */}
                        {
                          nilai && nilai.map((item: any, key: number) => {
                            return <option value={item.value} key={key}>{ item.name }</option>;
                          })
                        }
                      </Input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label>Pernafasan</Label>
                    </td>
                    <td>
                      <Input
                        type="select"
                        id= "steward_pernafasan"
                        name= "steward_pernafasan"
                        innerRef={register()}
                        // disabled={steward}
                        disabled
                      >
                        {/* <option value="" disabled={true}>---</option> */}
                        {
                          nilai && nilai.map((item: any, key: number) => {
                            return <option value={item.value} key={key}>{ item.name }</option>;
                          })
                        }
                      </Input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label>Motorik</Label>
                    </td>
                    <td>
                      <Input
                        type="select"
                        id= "steward_motorik"
                        name= "steward_motorik"
                        // disabled={steward}
                        innerRef={register()}
                        disabled
                      >
                        {/* <option value="" disabled={true}>---</option> */}
                        {
                          nilai && nilai.map((item: any, key: number) => {
                            return <option value={item.value} key={key}>{ item.name }</option>;
                          })
                        }
                      </Input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label>Total Skor</Label>
                    </td>
                    <td>
                      <Input
                        className="mt-1"
                        style={{width:'205px'}}
                        type="number"
                        id="steward_score"
                        name="steward_score"
                        innerRef={register()}
                        disabled
                        value={totalSteward}
                      >
                      </Input>
                    </td>
                  </tr>
                  <Row>
                    <Col className="mt-1">
                      <Label className='text-danger'> Keterangan</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Label className='text-danger'>Jika jumlah {'>'} 5, pasien dapat di pindahkan ke rawat inap</Label></Col>
                  </Row>
                </tbody>
              </table>
            </Col>
          </Row>


        </FormGroup>
      </div>
      <div className="border-dark mt-2 p-1">
        <FormGroup className="mt-1 form-group" row>
          <Row>
            <Col md='3'>
              <Label>2. Pemeriksaan Fisik</Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                id="pemeriksaan_alat_ekg"
                type="checkbox"
                name="pemeriksaan_alat_ekg"
                className="me-1"
                value="1"
                onChange={(e) => handleCheckboxChange(e)}
                defaultChecked={data && data.Pemeriksaan_Alat_Ekg === '1'}
                innerRef={register("pemeriksaan_alat_ekg") as any}
                disabled
              />{' '}
              <Label>Ekg</Label>
            </Col>
            <Col>
              <Input
                id="pemeriksaan_alat_usg"
                type="checkbox"
                name="pemeriksaan_alat_usg"
                className="me-1"
                value="1"
                onChange={(e) => handleCheckboxChange(e)}
                defaultChecked={data && data.Pemeriksaan_Alat_Usg === '1'}
                innerRef={register("pemeriksaan_alat_usg") as any}
                disabled
              />{' '}
              <Label>USG Mata</Label>
            </Col>
            <Col>
              <Input
                id="pemeriksaan_alat_oct_macula"
                type="checkbox"
                name="pemeriksaan_alat_oct_macula"
                className="me-1"
                value="1"
                onChange={(e) => handleCheckboxChange(e)}
                defaultChecked={data && data.Pemeriksaan_Alat_Oct_Macula === '1'}
                innerRef={register("pemeriksaan_alat_oct_macula") as any}
                disabled
              />{' '}
              <Label>Oct Macula</Label>
            </Col>
            <Col>
              <Input
                id="pemeriksaan_alat_ct_scan"
                type="checkbox"
                name="pemeriksaan_alat_ct_scan"
                className="me-1"
                value="1"
                onChange={(e) => handleCheckboxChange(e)}
                defaultChecked={data && data.Pemeriksaan_Alat_Ct_Scan === '1'}
                innerRef={register("pemeriksaan_alat_ct_scan") as any}
                disabled
              />{' '}
              <Label>Ct Scan</Label>
            </Col>
            <Col>
              <Input
                id="pemeriksaan_alat_oct_papil"
                type="checkbox"
                name="pemeriksaan_alat_oct_papil"
                className="me-1"
                value="1"
                onChange={(e) => handleCheckboxChange(e)}
                defaultChecked={data && data.Pemeriksaan_Alat_Oct_Papil === '1'}
                innerRef={register("pemeriksaan_alat_oct_papil") as any}
                disabled
              />{' '}
              <Label>Oct Papil</Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                id="pemeriksaan_alat_laboratorium"
                type="checkbox"
                name="pemeriksaan_alat_laboratorium"
                className="me-1"
                value="1"
                onChange={(e) => {
                  setLaboratorium(e.target.checked)
                  handleCheckboxChange(e);
                }}
                defaultChecked={data && data.Pemeriksaan_Alat_Laboratorium === '1'}
                innerRef={register("pemeriksaan_alat_laboratorium") as any}
                disabled
              />{' '}
              <Label>Laboratoirum</Label>
            </Col>
            <Col>
              <Input
                id="pemeriksaan_alat_biometri"
                type="checkbox"
                name="pemeriksaan_alat_biometri"
                className="me-1"
                value="1"
                onChange={(e) => handleCheckboxChange(e)}
                defaultChecked={data && data.Pemeriksaan_Alat_Biometri === '1'}
                innerRef={register("pemeriksaan_alat_biometri") as any}
                disabled
              />{' '}
              <Label>Biometri</Label>
            </Col>
            <Col>
              <Input
                id="pemeriksaan_alat_thorax_foto"
                type="checkbox"
                name="pemeriksaan_alat_thorax_foto"
                className="me-1"
                value="1"
                onChange={(e) => handleCheckboxChange(e)}
                defaultChecked={data && data.Pemeriksaan_Alat_Thorax_Foto === '1'}
                innerRef={register("pemeriksaan_alat_thorax_foto") as any}
                disabled
              />{' '}
              <Label>Thorax Foto</Label>
            </Col>
            <Col>
              <Input
                id="pemeriksaan_alat_foto_fundus"
                type="checkbox"
                name="pemeriksaan_alat_foto_fundus"
                className="me-1"
                value="1"
                onChange={(e) => handleCheckboxChange(e)}
                defaultChecked={data && data.Pemeriksaan_Alat_Foto_Fundus === '1'}
                innerRef={register("pemeriksaan_alat_foto_fundus") as any}
                disabled
              />{' '}
              <Label>Foto Fundus</Label>
            </Col>
            <Col>
              <Input
                id="pemeriksaan_alat_lain_lain"
                type="checkbox"
                name="pemeriksaan_alat_lain_lain"
                className="me-1"
                value="1"
                onChange={(e) => {
                  setLain(e.target.checked)
                  handleCheckboxChange(e);
                }}
                defaultChecked={data && data.Pemeriksaan_Alat_Lain_Lain === '1'}
                innerRef={register("pemeriksaan_alat_lain_lain") as any}
                disabled
              />{' '}
              <Label>Lain Lain</Label>
            </Col>
          </Row>
          <Row>
            <Col>
              {
                laboratorium && (
                  <>
                    <Row>
                      <Col>
                        <Input
                          id="pemeriksaan_alat_laboratorium_text"
                          type="text"
                          placeholder='Sebutkan..'
                          name="pemeriksaan_alat_laboratorium_text"
                          innerRef={register()}
                          style={{width:'300px'}}
                          disabled
                        />
                      </Col>
                    </Row>
                  </>
                )
              }
            </Col>
            <Col>
              {
                lain && (
                  <>
                    <Row>
                      <Col>
                        <Input
                          id="pemeriksaan_alat_lain_text"
                          type="text"
                          placeholder='Sebutkan..'
                          name="pemeriksaan_alat_lain_text"
                          innerRef={register()}
                          style={{width:'300px', marginLeft:'62%'}}
                          disabled
                        />
                      </Col>
                    </Row>
                  </>
                )
              }
            </Col>
          </Row>
        </FormGroup>
      </div>
      <div className="border-dark mt-2 p-1">
        <FormGroup className="form-group" row>
          <Row className='mt-1'>
            <Col>
              <Label>3. Terapi Yang Sudah Diberikan</Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                id='terapi'
                type='textarea'
                name='terapi'
                innerRef={register()}
                disabled
              />
            </Col>
          </Row>
        </FormGroup>
      </div>
      <div className="border-dark mt-2 p-1">
        <FormGroup className="form-group" row>
          <Row className='mt-1'>
            <Col>
              <Label>1. Rencana Pengobatan / Tindakan / Perawat / Pemeriksaan</Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                id='rencana'
                type='textarea'
                name='rencana'
                innerRef={register()}
                disabled
              />
            </Col>
          </Row>
        </FormGroup>
      </div>
      <div className="border-dark mt-2 p-1">
        <FormGroup className="form-group" row>
          <Row className='mt-1'>
            <Col>
              <Label>2. Diet</Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                id='diet'
                type='textarea'
                name='diet'
                innerRef={register()}
                disabled
              />
            </Col>
          </Row>
        </FormGroup>
      </div>
      <Row className='mt-1'>
        <Col>
          <div className="d-flex justify-content-around my-0">
            <Signature
              label="Perawat Pengantar"
              type="picker"
              additionalLabel={(data && data.Nama_Perawat_Pengantar && data.Nama_Perawat_Pengantar !== '') ? data.Nama_Perawat_Pengantar : undefined}
              initialImage={(data && data.Tanda_Tangan_Perawat_Pengantar && data.Tanda_Tangan_Perawat_Pengantar !== '') ? data.Tanda_Tangan_Perawat_Pengantar : undefined}
              persons={nurses}
              onSigned={(assigner: SignatureModel) => handlePerawatPengantar(assigner)}
              disabled
            />
            <Input
              type="hidden"
              name="id_tanda_tangan_perawat_pengantar"
              innerRef={register()}
              invalid={errors.id_tanda_tangan_perawat_pengantar && true}
            />
            <Input
              type="hidden"
              name="tanda_tangan_perawat_pengantar"
              innerRef={register()}
              invalid={errors.tanda_tangan_perawat_pengantar && true}
            />
          </div>
        </Col>
        <Col>
          <div className="d-flex justify-content-around my-0">
            <Signature
              label="Perawat Penerima"
              type="picker"
              additionalLabel={(data && data.Nama_Perawat_Penerima && data.Nama_Perawat_Penerima !== '') ? data.Nama_Perawat_Penerima : undefined}
              initialImage={(data && data.Tanda_Tangan_Perawat_Penerima && data.Tanda_Tangan_Perawat_Penerima !== '') ? data.Tanda_Tangan_Perawat_Penerima : undefined}
              persons={nurses}
              onSigned={(assigner: SignatureModel) => handlePerawatPenerima(assigner)}
              disabled
            />
            <Input
              type="hidden"
              name="id_tanda_tangan_perawat_penerima"
              innerRef={register()}
              invalid={errors.id_tanda_tangan_perawat_penerima && true}
            />
            <Input
              type="hidden"
              name="tanda_tangan_perawat_penerima"
              innerRef={register()}
              invalid={errors.tanda_tangan_perawat_penerima && true}
            />
          </div>
        </Col>
      </Row>
      {/* <FormGroup  className="d-flex mb-0 justify-content-center" style={{ marginLeft: '0px'}}>

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
      </FormGroup> */}
    </Form>
  )
}

export default TransferPasienDetail;
