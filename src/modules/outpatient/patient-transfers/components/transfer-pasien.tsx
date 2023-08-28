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
import { INursingEarlyWarning } from '@src/modules/inpatient/nursing-early-warning-scoring-table/models/nursing-early-warning-scoring.model';
import nilai from '../const/nilai';
import score from '../const/score';
import unit from '@src/modules/outpatient/cppt/const/unit';
import { UpdatePatientTransferRequest } from '../requests/update-patient-transfer-request';
import { CreatePatientTransferRequest, ICreatePatientTransferRequest } from '../requests/create-patient-transfer-request';
import { PatientTransferService } from '../services';
import { fetchPatientTransfer, handlePdf } from '../stores/patient-transfer.store';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import {PdfPatientTransfer} from '@modules/outpatient/patient-transfers/requests/pdf-patient-transfer.request';
import { IPreliminaryStudyForm, PreliminaryStudyForm } from '@src/modules/ro/preliminary-study/models/preliminary-study.model';
import { IAssessmentUgdFormModel } from '@src/modules/emergency-room/assessment/models/assessment-ugd-models';

const TransferPasienFormCoba = (props: { data?: any | undefined, onSuccessSubmit: any, onCancel: any, unit: string, pasien?: any, ro?: PreliminaryStudyForm | undefined, ews: INursingEarlyWarning, asesmen: IAssessmentUgdFormModel }) => {
  const { data, onSuccessSubmit, onCancel, unit, pasien, ro, ews, asesmen } = props;

  const dispatch = useAppDispatch();
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const [processing, setProcessing] = useState<boolean | undefined>(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const [alderette, setAlderette] = useState<boolean>((data && data.Alderette) ? !!(data.Alderette === 'Tidak Dikaji') : false);
  const [steward, setSteward] = useState<boolean>((data && data.Steward) ? !!(data.Steward === 'Tidak Dikaji') : false);
  const [nilaiAktivitas, setNilaiAktivitas] = useState(data && data.Alderette_Aktivitas ? parseInt(data.Alderette_Aktivitas) : 0);
  const [nilaiSirkulasi, setNilaiSirkulasi] = useState(data && data.Alderette_Sirkulasi ? parseInt(data.Alderette_Sirkulasi) : 0);
  const [nilaiPernafasan, setNilaiPernafasan] = useState(data && data.Alderette_Pernafasan ? parseInt(data.Alderette_Pernafasan) : 0);
  const [nilaiPernafasanSteward, setNilaiPernafasanSteward] = useState(data && data.Steward_Pernafasan ? parseInt(data.Steward_Pernafasan) : 0);
  const [nilaiKesadaran, setNilaiKesadaran] = useState(data && data.Alderette_Kesadaran ? parseInt(data.Alderette_Kesadaran) : 0);
  const [nilaiKesadaranSteward, setNilaiKesadaranSteward] = useState(data && data.Steward_Kesadaran ? parseInt(data.Steward_Kesadaran) : 'Tidak Dikaji');
  const [nilaiMotorik, setNilaiMotorik] = useState(data && data.Steward_Motorik ? parseInt(data.Steward_Motorik) : 'Tidak Dikaji');
  const [nilaiWarnaKulit, setNilaiWarnaKulit] = useState(data && data.Alderette_Warna_Kulit ? parseInt(data.Alderette_Warna_Kulit) : 0);
  const [total, setTotal] = useState(0);
  const [totalSteward, setTotalSteward] = useState(0);
  const [laboratorium, setLaboratorium] = useState((data && data.Pemeriksaan_Alat_Laboratorium_Text) ? !!(data.Pemeriksaan_Alat_Laboratorium_Text) : false);
  const [lain, setLain] = useState((data && data.Pemeriksaan_Alat_Lain_Text) ? !!(data.Pemeriksaan_Alat_Lain_Text) : false);
  const [waktuPuasa, setWaktuPuasa] = useState((data && data.Puasa) ? !!(data.Puasa === 'puasa_ya') : false);
  const [signatureErr, setSignatureErr] = useState({ error: false, message: '' });

  const getKesimpulan = () => {
    if (data?.inform_consent?.Diagnosis === 'custom') {
      return data?.inform_consent?.Diagnosis_Custom ?? '';
    } else {
      return data?.inform_consent?.Diagnosis ?? '';
    }
  }

  const { register, handleSubmit, errors, setValue, getValues, control, watch } = useForm({
    mode: 'onChange',
    resolver: yupResolver(UpdatePatientTransferRequest.schema()),
    defaultValues: {
      id: data && data.ID ? data.ID : '',
      id_dokter_dpjp: data && data.ID_Dokter_Dpjp ? data.ID_Dokter_Dpjp :  '',
      id_dokter_operator: data && data.ID_Dokter_Operator ? data.ID_Dokter_Operator : '',
      tanggal_transfer: (data && data.Tanggal_Transfer) ? data.Tanggal_Transfer.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      indikasi_transfer: data && data.Indikasi_Transfer ? data.Indikasi_Transfer : '',
      pengantar: data && data.Pengantar ? data.Pengantar : '',
      penerima: data && data.Penerima ? data.Penerima : '',
      tanggal_masuk_rs: data && data.Tanggal_Masuk_Rs && data.Tanggal_Masuk_Rs && data.Tanggal_Masuk_Rs !== '' ? data.Tanggal_Masuk_Rs : treatment?.Tgl_Berobat !== '' ? treatment?.Tgl_Berobat : '',
      // tanggal_masuk_rs: data && data.Tanggal_Transfer ? data.Tanggal_Transfer : '',
      diagnosa: data?.Diagnosa || getKesimpulan(),
      kesadaran: data && data.Kesadaran ? data.Kesadaran : '',
      vital_td: data?.Vital_TD ?? asesmen?.Vital_Tekanan_Darah ?? ews?.Td ?? '',
      vital_n: data?.Vital_N ?? asesmen?.Vital_Denyut_Nadi ?? ews?.Nadi,
      vital_p: data?.Vital_P ?? asesmen?.Vital_Respiratory_Rate ?? ews?.Rr,
      vital_t: data?.Vital_T ?? asesmen?.Vital_Suhu ?? ews?.Suhu_Tubuh,
      vital_sat_o2: data && data.Vital_Sat_O2 ? data.Vital_Sat_O2 : '',
      visus_od: data && data.Visus_OD && data.Visus_OD && data.Visus_OD !== '' ? data.Visus_OD : ro?.OD?.VA !== '' ? ro?.OD?.VA : '',
      visus_os: data && data.Visus_OS && data.Visus_OS && data.Visus_OS !== '' ? data.Visus_OS : ro?.OS?.VA !== '' ? ro?.OS?.VA : '',
      tonometer_od: data && data.Tonometer_OD && data.Tonometer_OD && data.Tonometer_OD !== '' ? data.Tonometer_OD : ro?.OD?.Non_Contact !== '' ? ro?.OD?.Non_Contact : '',
      tonometer_os: data && data.Tonometer_OS && data.Tonometer_OS && data.Tonometer_OS !== '' ? data.Tonometer_OS : ro?.OS?.Non_Contact !== '' ? ro?.OS?.Non_Contact : '',
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

  const handleSubmitForm = (value: ICreatePatientTransferRequest) => {
    setSignatureErr({ error: false, message: '' });
    if (!treatment) {
      return;
    }
    if ((value.tanda_tangan_perawat_pengantar === '')) {
      if (value.tanda_tangan_perawat_pengantar === '') {
        setSignatureErr({ error: true, message: 'tanda tangan harus diisi' });
      }
      return;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    if (!data) {
      const params = CreatePatientTransferRequest.createFromJson({...value, ...appRequest, unit});
      PatientTransferService().create(params)
        .then((response) => {
          if (response && response.data && response.data.data) {
            const { data } = response.data;
            const params3 = PdfPatientTransfer.createPdfRequest({...data, pasien, ...appRequest, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id);
            PatientTransferService().pdf({ ...params3, id: data.ID }).then(() => {
              if (onSuccessSubmit) {
                onSuccessSubmit();
                return true;
              }
            }).catch(() => {
              setProcessing(false);
            })
            if (onSuccessSubmit) {
              onSuccessSubmit();
            }
          }
          if (onSuccessSubmit) {
            onSuccessSubmit();
          }
        });
    } else {
      const params = UpdatePatientTransferRequest.createFromJson({...value, ...appRequest, id: data.ID, unit});
      PatientTransferService().update(params)
        .then((response) => {
          if (response && response.data && response.data.data) {
            const { data } = response.data;
            const params3 = PdfPatientTransfer.createPdfRequest({...data, pasien, ...appRequest, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id);
            PatientTransferService().pdf({ ...params3, id: data.ID }).then(() => {
              if (onSuccessSubmit) {
                onSuccessSubmit();
                return true;
              }
            }).catch(() => {
              setProcessing(false);
            })
            if (onSuccessSubmit) {
              onSuccessSubmit();
            }
          }
          if (onSuccessSubmit) {
            onSuccessSubmit();
          }
        });
    }
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
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label style={{marginLeft:'30px', width:'100%'}} className='mt-2'>Tanggal Masuk RS</Label>
                </Col>
                <Col md='9'>
                  {/* <DateTimeInput
                    name='tanggal_masuk_rs'
                    defaultValue='date'
                    md={1}
                    style={{marginTop: '-10px'}}
                    {...{ register, errors }}
                  /> */}
                  <Input
                    className='mt-1'
                    type="date"
                    id="tanggal_masuk_rs"
                    name="tanggal_masuk_rs"
                    innerRef={register({ required: true })}
                    invalid={errors.tanggal_masuk_rs && true} />
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
                      innerRef={register({ required: true })}
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
                      innerRef={register({ required: true })}
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
                      innerRef={register({ required: true })}
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
                      innerRef={register({ required: true })}
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
                        innerRef={register({ required: true })}
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
                        innerRef={register({ required: true })}
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
                        innerRef={register({ required: true })}
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
                defaultChecked={data && data.Kesadaran === 'apatis'}
                innerRef={register("kesadaran") as any}
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
                defaultChecked={data && data.Kesadaran === 'koma'}
                innerRef={register("kesadaran") as any}
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
                    value="0"
                    innerRef={register("skala_nyeri") as any}
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
                  setWaktuPuasa(e.target.checked)
                  handleRadioChange(e);
                }}
                defaultChecked={ data && data.Puasa === 'puasa_ya'}
                value='puasa_ya'
                innerRef={register('puasa')as any}
              />
              <Label>Ya</Label>
            </Col>
            <Col>
              {
                waktuPuasa && (
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
                    setWaktuPuasa(false);
                  }
                  handleRadioChange(e)
                }}
                defaultChecked={ data && data.Puasa === 'puasa_tidak'}
                value='puasa_tidak'
                innerRef={register('puasa')as any}
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
                        className={alderette ? 'disabled-div' : ''}
                        innerRef={register({ required: true })}
                      >
                        <option value="" disabled={true}>---</option>
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
                        className={alderette ? 'disabled-div' : ''}
                        innerRef={register({ required: true })}
                      >
                        <option value="" disabled={true}>---</option>
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
                        className={alderette ? 'disabled-div' : ''}
                        innerRef={register({ required: true })}
                      >
                        <option value="" disabled={true}>---</option>
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
                        className={alderette ? 'disabled-div' : ''}
                        innerRef={register({ required: true })}
                      >
                        <option value="" disabled={true}>---</option>
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
                        className={alderette ? 'disabled-div' : ''}
                        innerRef={register({ required: true })}
                      >
                        <option value="" disabled={true}>---</option>
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
                        readOnly
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
                        className={steward ? 'disabled-div' : ''}
                        innerRef={register({ required: true })}
                      >
                        <option value="" disabled={true}>---</option>
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
                        className={steward ? 'disabled-div' : ''}
                        innerRef={register({ required: true })}
                      >
                        <option value="" disabled={true}>---</option>
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
                        className={steward ? 'disabled-div' : ''}
                        innerRef={register({ required: true })}
                      >
                        <option value="" disabled={true}>---</option>
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
                        readOnly
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
          <div className='align-items-center justify-content-center'>
            {
              signatureErr && signatureErr.error && (
                <p style={{ fontSize: '10pt' }} className='fw-bold text-danger text-center'>{signatureErr.message}</p>
              )
            }
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

export default TransferPasienFormCoba;
