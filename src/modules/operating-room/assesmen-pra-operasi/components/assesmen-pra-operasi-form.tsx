import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useEffect, useState } from 'react';
import { DateTimeInput } from '@src/shared/input';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useForm } from 'react-hook-form';
import { SubmitButton } from '@src/shared/button';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { Signature } from '@src/shared/signature/components';
import { AssesmenPraOperasiModel } from '../models/assesmen-pra-operasi-models';
import { AppRequest } from '@src/shared/request';
import { IUpdateAssesmenPraOperasi, UpdateAssesmenPraOperasi } from '../requests';
import { fetchAssesmenPraoperasi, fetchAssesmenPraOperasiPdf, handlePdf } from '../stores/assesmen-pra-operasi.store';
import { AssesmentPraOperasiService } from '../services';
import { FindPdfRequest } from '@src/shared/pdf';
import { PdfAsesmenPraOperasi } from '../requests/pdf-asesmen-pra-operasi';
import { DateTimeConverter } from '@src/shared/datetime-converter';


const AssesmenPraOperasiForm = (props: { data: AssesmenPraOperasiModel}) => {
  const { data } = props;

  const getPenyakitPenyerta = () => {
    const penyakit: Array<string> = [];
    if (data && data?.form && data?.form?.Penyakit_Peserta) {
      const helpingTools = data?.form?.Penyakit_Peserta;
      if (helpingTools.Diabetes_Melitus) {
        penyakit.push('1')
      }
      if (helpingTools.Hipertensi) {
        penyakit.push('2')
      }
      if (helpingTools.Dekompensasi) {
        penyakit.push('3')
      }
      if (helpingTools.Jantung) {
        penyakit.push('4')
      }
      if (helpingTools.Koroner) {
        penyakit.push('5')
      }
      if (helpingTools.Pembekuan_Darah) {
        penyakit.push('6')
      }
      if (helpingTools.Hepar) {
        penyakit.push('7')
      }
      if (helpingTools.Ginjal) {
        penyakit.push('8')
      }
      if (helpingTools.Lain_lain) {
        penyakit.push('9')
      }
    }
    return penyakit;
  }

  const getPengobatanSaatIni = () => {
    const pengobatan: Array<string> = [];
    if (data && data.form && data.form.Pengobatan_Saat_Ini) {
      const help = data.form.Pengobatan_Saat_Ini;
      if (help.Tidak_Ada) {
        pengobatan.push('1')
      }
      if (help.Obat_Hipertensi) {
        pengobatan.push('2')
      }
      if (help.Sedatine) {
        pengobatan.push('3')
      }
      if (help.Obat_Dm) {
        pengobatan.push('4')
      }
      if (help.Corticosteroid) {
        pengobatan.push('5')
      }
      if (help.Lain_lain) {
        pengobatan.push('6')
      }
    }
    return pengobatan;
  }

  const [processing, setProcessing] = useState(false);
  const dispatch = useAppDispatch();
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const [defaultPattern, setDefaultPattern] = useState<any>();

  const [alergi, setAlergi] = useState<any>(`${data?.form?.Alergi}`);
  const [penyakitPeserta, setPenyakitPeserta] = useState<any>(`${data?.form?.Penyakit_Peserta}`);
  const [pengobatanSaatIni, setPengobatanSaatIni] = useState<any>(`${data?.form?.Pengobatan_Saat_Ini}`);

  const [persediaanDarah, setPersediaanDarah] = useState<any>(`${data?.form?.Persediaan_Darah}`);
  const [pemberianDarah, setPemberianDarah] = useState<any>(`${data?.form?.Persetujuan}`);
  const [anestesi, setAnestesi] = useState<any>(`${data?.form?.Anestesi}`);
  const [bersih, setBersih] = useState<any>(`${data?.form?.Jenis_Kasus}`);

  const { pdf } = useAppSelector(state => state.assesmenPraOperasiStore);
  const [pdfData, setPdfData] = useState<any | undefined>(undefined);

  //const [penyakitPenyerta, setPenyakitPenyerta] = useState<Array<string>>(getPenyakitPenyerta())
  //const [pengobatanSaatIni, setPengobatanSaatIni] = useState<Array<string>>(getPengobatanSaatIni())

  const { patientDetail, meds } = useAppSelector(state => state.patientDetail);

  const getAllergyText = () => {
    if (!patientDetail) {
      return '';
    }
    if (!patientDetail.Pengkajian_Keperawatan) {
      return patientDetail.Alergi;
    }
    if (patientDetail.Pengkajian_Keperawatan?.Alergi_Radio === '1') {
      return `${patientDetail.Pengkajian_Keperawatan.Alergi ?? patientDetail.Alergi ?? ''}\n`
    } else {
      return '';
    }
  }

  const getRptText = () => {
    if (!patientDetail) {
      return '';
    }
    if (patientDetail.Pengkajian_Keperawatan && patientDetail.Pengkajian_Keperawatan.RPT_Radio === '1') {
      return `${patientDetail.Pengkajian_Keperawatan.RPT ?? ''}\n`
    } else {
      return '';
    }
  }

  const getRpoText = () => {
    if (!patientDetail) {
      return '';
    }
    if (patientDetail.Pengkajian_Keperawatan && patientDetail.Pengkajian_Keperawatan.RPO_Radio === '1') {
      return `${patientDetail.Pengkajian_Keperawatan.RPO ?? ''}\n`
    } else {
      return '';
    }
  }

  const [allergy, setAllergy] = useState<string | undefined>(getAllergyText());


  useEffect(() => {
    if (treatment) {
      dispatch(fetchAssesmenPraOperasiPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'ok_asesmen-pra-operasi' })))
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  useEffect(() => {
    if (defaultPattern === '1') {
      setValue('alergi', '0');
      setAlergi('0');
      setValue('persediaan_darah', '1');
      setPersediaanDarah('1');
      setValue('persetujuan', '0');
      setPemberianDarah('0');
      setValue('anestesi', '3');
      setAnestesi('3');
      setValue('jenis_kasus', '1');
      setBersih('1');
    } else if (defaultPattern === '0') {
      setValue('alergi', undefined);
      setAlergi(undefined);
      setValue('persediaan_darah', undefined);
      setPersediaanDarah(undefined);
      setValue('persetujuan', undefined);
      setPemberianDarah(undefined);
      setValue('anestesi', undefined);
      setAnestesi(undefined);
      setValue('jenis_kasus', undefined);
      setBersih(undefined);
    }
  }, [defaultPattern]);

  const getKesimpulan = () => {
    if (data?.inform_consent?.Diagnosis === 'custom') {
      return data?.inform_consent?.Diagnosis_Custom;
    } else {
      return data?.inform_consent?.Diagnosis;
    }
  }

  const { register, handleSubmit, errors, setValue, reset, formState } = useForm<any>({
    mode: 'onChange',
    // resolver: yupResolver(UpdatePostoperativeInstructionsRequest.schema()),
    defaultValues: {
      td: data && data.form && data.form.Td && data.form.Td !== '' ? data.form.Td : data?.tanda_vital?.Td !== '' ? data?.tanda_vital?.Td : data?.asesmen?.Vital_Tekanan_Darah !== '' ? data?.asesmen?.Vital_Tekanan_Darah : data?.ews?.Td !== '' ? data?.ews?.Td : '',
      nadi: data && data.form && data.form.Nadi && data.form.Nadi !== '' ? data.form.Nadi : data?.tanda_vital?.Nadi !== '' ? data?.tanda_vital?.Nadi : data?.asesmen?.Vital_Denyut_Nadi !== '' ? data?.asesmen?.Vital_Denyut_Nadi : data?.ews?.Nadi !== '' ? data?.ews?.Nadi : '',
      rr: data && data.form && data.form.Rr && data.form.Rr !== '' ? data.form.Rr : data?.tanda_vital?.Rr !== '' ? data?.tanda_vital?.Rr : data?.asesmen?.Vital_Respiratory_Rate !== '' ? data?.asesmen?.Vital_Respiratory_Rate : data?.ews?.Rr !== '' ? data?.ews?.Rr : '',
      suhu: data && data.form && data.form.Suhu && data.form.Suhu !== '' ? data.form.Suhu : data?.tanda_vital?.Suhu !== '' ? data?.tanda_vital?.Suhu : data?.asesmen?.Vital_Suhu !== '' ? data?.asesmen?.Vital_Suhu : data?.ews?.Suhu_Tubuh !== '' ? data?.ews?.Suhu_Tubuh : '',
      skala_nyeri: data?.form?.Skala_Nyeri ?? '',
      alergi: data?.form?.Alergi ?? '',
      alergi_keterangan: data?.form?.Alergi_Keterangan ?? '',
      penyakit_peserta: data?.form?.Penyakit_Peserta ?? '',
      penyakit_peserta_keterangan: data?.form?.Penyakit_Peserta_Keterangan ?? '',
      pengobatan_saat_ini: data?.form?.Pengobatan_Saat_Ini ?? '',
      pengobatan_saat_ini_lain: data?.form?.Pengobatan_Saat_Ini_Lain ?? '',
      tonometri: data?.form?.Tonometri ?? 'TOD: mmHg,  TOS: mmHg',
      biometri: data?.form?.Biometri ?? '',
      usg_mata: data?.form?.Usg_Mata ?? '',
      foto_fundus: data?.form?.Foto_Fundus ?? '',
      oct_makula: data?.form?.Oct_Makula ?? '',
      dll: data?.form?.Dll ?? '',
      hasil_konsultasi: data?.form?.Hasil_Konsultasi ?? '',
      persediaan_darah: data?.form?.Persediaan_Darah ?? '',
      persetujuan: data?.form?.Persetujuan ?? '',
      anestesi: data?.form?.Anestesi ?? '',
      jenis_kasus: data?.form?.Jenis_Kasus ?? '',
      diagnosa: data?.form?.Diagnosa || getKesimpulan(),
      rencana_operasi: data?.form?.Rencana_Operasi ?? '',
      tanggal_operasi: data?.form?.Tanggal_Operasi ??  '',
      ahli_bedah: data?.form?.Ahli_Bedah ?? '',
      tanggal: data?.form?.Tanggal ?? '',
      ttd_dokter: data?.form?.TTD_Dokter ?? '',
      id_dokter_ttd: data?.form?.ID_Dokter ?? '',
    },
  });

  useEffect(() => {
    if (!patientDetail) {
      return;
    }
    setValue('alergi_keterangan', getAllergyText());
    if (patientDetail.Pengkajian_Keperawatan?.Alergi_Radio === '1') {
      setValue('alergi', '2');
      setAlergi('2');
    } else if (patientDetail.Pengkajian_Keperawatan?.Alergi_Radio === '0') {
      setValue('alergi', '0');
      setAlergi('0');
    } else {
      setAlergi(undefined);
    }

    setValue('penyakit_peserta_keterangan', getRptText());
    if (patientDetail.Pengkajian_Keperawatan?.RPT_Radio === '1') {
      setValue('penyakit_peserta', '2');
      setPenyakitPeserta('2')
    } else if (patientDetail.Pengkajian_Keperawatan?.RPT_Radio === '0') {
      setValue('penyakit_peserta', '0');
      setPenyakitPeserta('0')
    } else {
      setPenyakitPeserta(undefined)
    }

    setValue('pengobatan_saat_ini_lain', getRpoText());
    if (patientDetail.Pengkajian_Keperawatan?.RPO_Radio === '1') {
      setValue('pengobatan_saat_ini', '2');
      setPengobatanSaatIni('2')
    } else if (patientDetail.Pengkajian_Keperawatan?.RPO_Radio === '0') {
      setValue('pengobatan_saat_ini', '0');
      setPengobatanSaatIni('0')
    } else {
      setPengobatanSaatIni(undefined)
    }

  }, [patientDetail])

  const { isDirty } = formState;

  //   useWarnIfUnsavedChanges(isDirty, () => {
  //     return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  //   })

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleDokterOperator = (image: SignatureModel, isFormDokter?: boolean) => {
    if (isFormDokter) {
      setValue('ttd_dokter', image.Signature);
      setValue('id_dokter_ttd', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDokter) {
      setValue('ttd_dokter', image.Signature);
      setValue('id_dokter_ttd', image.ID_Karyawan);
    }
  }

  const handleProcessing = () => {
    setProcessing(true);
  }

  const handleSubmitForm = (value: IUpdateAssesmenPraOperasi) => {
    if (!treatment) {
      return;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateAssesmenPraOperasi.createFromJson({...value, ...appRequest});
    dispatch(handlePdf(undefined));
    AssesmentPraOperasiService().update(params)
      .then(() => {
        AssesmentPraOperasiService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            AssesmentPraOperasiService().pdfv3(PdfAsesmenPraOperasi.createPdfRequest(data, treatment))
              .then(() => {
                setProcessing(false);
                dispatch(fetchAssesmenPraOperasiPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'ok_asesmen-pra-operasi' })))
              })
          });
        setProcessing(false);
        dispatch(fetchAssesmenPraoperasi(appRequest));
      });
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <FormGroup>
        <div className="border-dark mt-2 p-1">
          <FormGroup className="form-group" row>
            <h4>Data Medis</h4>
            <hr />
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
            <Row>
              <Col md='2'>
                <Label style={{marginTop:'5px'}}>Tekanan Darah</Label>
              </Col>
              <Col>
                <Input
                  id="td"
                  type="text"
                  name="td"
                  style={{marginLeft:'-60px', width:'150px'}}
                  innerRef={register() as any}
                />
              </Col>
              <Col>
                <Label style={{marginTop:'5px'}}>Nadi</Label>
              </Col>
              <Col>
                <Input
                  id="nadi"
                  type="text"
                  name="nadi"
                  style={{marginLeft:'-60px', width:'150px'}}
                  innerRef={register() as any}
                />
              </Col>
              <Col>
                <Label style={{marginTop:'5px'}}>RR</Label>
              </Col>
              <Col>
                <Input
                  id="rr"
                  type="text"
                  name="rr"
                  style={{marginLeft:'-60px', width:'150px'}}
                  innerRef={register() as any}
                />
              </Col>
              <Col>
                <Label style={{marginTop:'5px'}}>Suhu</Label>
              </Col>
              <Col>
                <Input
                  id="suhu"
                  type="text"
                  name="suhu"
                  style={{marginLeft:'-40px', width:'140px'}}
                  innerRef={register() as any}
                />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup className="form-group" row>
            <Row className='mt-1'>
              <Col md='2'>
                <Label style={{marginTop:'5px'}}>Skala Nyeri</Label>
              </Col>
              <Col>
                <Input
                  id='skala_nyeri_0'
                  type='radio'
                  name='skala_nyeri_0'
                  className='me-1'
                  onChange={(e) => handleRadioChange(e)}
                  value='0'
                  defaultChecked={data && data.form && data.form.Skala_Nyeri === '0'}
                  innerRef={register('skala_nyeri_1')as any}
                />{' '}
                <Label>0</Label>
              </Col>
              <Col>
                <Input
                  id="skala_nyeri_1"
                  type="radio"
                  name="skala_nyeri"
                  className="me-1"
                  onChange={(e) => handleRadioChange(e)}
                  value="1"
                  defaultChecked={data && data.form && data.form.Skala_Nyeri === '1'}
                  innerRef={register("skala_nyeri") as any}
                />{' '}
                <Label>1</Label>
              </Col>
              <Col>
                <Input
                  id="skala_nyeri_2"
                  type="radio"
                  name="skala_nyeri"
                  className="me-1"
                  onChange={(e) => handleRadioChange(e)}
                  value="2"
                  defaultChecked={data && data.form && data.form.Skala_Nyeri === '2'}
                  innerRef={register("skala_nyeri") as any}
                />{' '}
                <Label>2</Label>
              </Col>
              <Col>
                <Input
                  id="skala_nyeri_3"
                  type="radio"
                  name="skala_nyeri"
                  className="me-1"
                  onChange={(e) => handleRadioChange(e)}
                  value="3"
                  defaultChecked={data && data.form && data.form.Skala_Nyeri === '3'}
                  innerRef={register("skala_nyeri") as any}
                />{' '}
                <Label>3</Label>
              </Col>
              <Col>
                <Input
                  id="skala_nyeri_4"
                  type="radio"
                  name="skala_nyeri"
                  className="me-1"
                  onChange={(e) => handleRadioChange(e)}
                  value="4"
                  defaultChecked={data && data.form && data.form.Skala_Nyeri === '4'}
                  innerRef={register("skala_nyeri") as any}
                />{' '}
                <Label>4</Label>
              </Col>
              <Col>
                <Input
                  id="skala_nyeri_5"
                  type="radio"
                  name="skala_nyeri"
                  className="me-1"
                  onChange={(e) => handleRadioChange(e)}
                  value="5"
                  defaultChecked={data && data.form && data.form.Skala_Nyeri === '5'}
                  innerRef={register("skala_nyeri") as any}
                />{' '}
                <Label>5</Label>
              </Col>
              <Col>
                <Input
                  id="skala_nyeri_6"
                  type="radio"
                  name="skala_nyeri"
                  className="me-1"
                  onChange={(e) => handleRadioChange(e)}
                  value="6"
                  defaultChecked={data && data.form && data.form.Skala_Nyeri === '6'}
                  innerRef={register("skala_nyeri") as any}
                />{' '}
                <Label>6</Label>
              </Col>
              <Col>
                <Input
                  id="skala_nyeri_7"
                  type="radio"
                  name="skala_nyeri"
                  className="me-1"
                  onChange={(e) => handleRadioChange(e)}
                  value="7"
                  defaultChecked={data && data.form && data.form.Skala_Nyeri === '7'}
                  innerRef={register("skala_nyeri") as any}
                />{' '}
                <Label>7</Label>
              </Col>
              <Col>
                <Input
                  id="skala_nyeri_8"
                  type="radio"
                  name="skala_nyeri"
                  className="me-1"
                  onChange={(e) => handleRadioChange(e)}
                  value="8"
                  defaultChecked={data && data.form && data.form.Skala_Nyeri === '8'}
                  innerRef={register("skala_nyeri") as any}
                />{' '}
                <Label>8</Label>
              </Col>
              <Col>
                <Input
                  id="skala_nyeri_9"
                  type="radio"
                  name="skala_nyeri"
                  className="me-1"
                  onChange={(e) => handleRadioChange(e)}
                  value="9"
                  defaultChecked={data && data.form && data.form.Skala_Nyeri === '9'}
                  innerRef={register("skala_nyeri") as any}
                />{' '}
                <Label>9</Label>
              </Col>
              <Col>
                <Input
                  id="skala_nyeri_10"
                  type="radio"
                  name="skala_nyeri"
                  className="me-1"
                  onChange={(e) => handleRadioChange(e)}
                  value="10"
                  defaultChecked={data && data.form && data.form.Skala_Nyeri === '10'}
                  innerRef={register("skala_nyeri") as any}
                />{' '}
                <Label>10</Label>
              </Col>
            </Row>
          </FormGroup>

          <FormGroup className="form-group" row>
            <Row className='mt-1'>
              <Col md='2'>
                <Label style={{marginTop:'5px'}}>Alergi</Label>
              </Col>
              <Col>
                <Input
                  id="alergi"
                  type="radio"
                  name="alergi"
                  className="me-1 disabled-div"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setAlergi('0');
                  }}
                  value="0"
                  checked={alergi === '0'}
                  innerRef={register("alergi") as any}
                />{' '}
                <Label>Tidak Ada</Label>
              </Col>
              <Col>
                <Input
                  id="alergi_2"
                  type="radio"
                  name="alergi"
                  className="me-1 disabled-div"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setAlergi('2');
                  }}
                  value="2"
                  checked={alergi === '2'}
                  innerRef={register("alergi") as any}
                />{' '}
                <Label>Ada</Label>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md='2'></Col>
              <Col></Col>
              <Col md='9'>
                <Input
                  id="alergi_keterangan"
                  type="textarea"
                  name="alergi_keterangan"
                  innerRef={register() as any}
                />{' '}
              </Col>
            </Row>


            <Row className='mt-1'>
              <Col md='2'>
                <Label style={{marginTop:'5px'}}>Penyakit Penyerta</Label>
              </Col>
              <Col>
                <Input
                  id="penyakit_peserta_1"
                  type="radio"
                  name="penyakit_peserta"
                  className="me-1 disabled-div"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPenyakitPeserta('0');
                  }}
                  value="0"
                  checked={penyakitPeserta === '0'}
                  innerRef={register("penyakit_peserta") as any}
                />{' '}
                <Label>Tidak Ada</Label>
              </Col>
              <Col>
                <Input
                  id="penyakit_peserta_2"
                  type="radio"
                  name="penyakit_peserta"
                  className="me-1 disabled-div"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPenyakitPeserta('2');
                  }}
                  value="2"
                  checked={penyakitPeserta === '2'}
                  innerRef={register("penyakit_peserta") as any}
                />{' '}
                <Label>Ada</Label>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md='2'></Col>
              <Col></Col>
              <Col md='9'>
                <Input
                  id="penyakit_peserta_keterangan"
                  type="textarea"
                  name="penyakit_peserta_keterangan"
                  innerRef={register() as any}
                />{' '}
              </Col>
            </Row>

            <Row className='mt-1'>
              <Col md='2'>
                <Label style={{marginTop:'5px'}}>Pengobatan Saat Ini</Label>
              </Col>
              <Col>
                <Input
                  id="pengobatan_saat_ini_1"
                  type="radio"
                  name="pengobatan_saat_ini"
                  className="me-1 disabled-div"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPengobatanSaatIni('0');
                  }}
                  value="0"
                  checked={pengobatanSaatIni === '0'}
                  innerRef={register("pengobatan_saat_ini") as any}
                />{' '}
                <Label>Tidak Ada</Label>
              </Col>
              <Col>
                <Input
                  id="pengobatan_saat_ini_2"
                  type="radio"
                  name="pengobatan_saat_ini"
                  className="me-1 disabled-div"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPengobatanSaatIni('2');
                  }}
                  value="2"
                  checked={pengobatanSaatIni === '2'}
                  innerRef={register("pengobatan_saat_ini") as any}
                />{' '}
                <Label>Ada</Label>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md='2'></Col>
              <Col></Col>
              <Col md='9'>
                <Input
                  id="pengobatan_saat_ini_lain"
                  type="textarea"
                  name="pengobatan_saat_ini_lain"
                  innerRef={register() as any}
                />{' '}
              </Col>
            </Row>


            <Row className='mt-1'>
              <Col>
                <Label>Pemeriksaan Penunjang</Label>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md='3'>
                <Label>Tonometri</Label>
              </Col>
              <Col md='9'>
                <Input
                  style={{width:'40%'}}
                  id="tonometri"
                  type="text"
                  name="tonometri"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md='3'>
                <Label>Biometri</Label>
              </Col>
              <Col md='9'>
                <Input
                  style={{width:'40%'}}
                  id="biometri"
                  type="text"
                  name="biometri"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md='3'>
                <Label>USG Mata</Label>
              </Col>
              <Col md='9'>
                <Input
                  style={{width:'40%'}}
                  id="usg_mata"
                  type="text"
                  name="usg_mata"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md='3'>
                <Label>Foto Fundus</Label>
              </Col>
              <Col md='9'>
                <Input
                  style={{width:'40%'}}
                  id="foto_fundus"
                  type="text"
                  name="foto_fundus"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md='3'>
                <Label>OCT Makula / Papil</Label>
              </Col>
              <Col md='9'>
                <Input
                  style={{width:'40%'}}
                  id="oct_makula"
                  type="text"
                  name="oct_makula"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md='3'>
                <Label>Dll</Label>
              </Col>
              <Col md='9'>
                <Input
                  style={{width:'40%'}}
                  id="dll"
                  type="text"
                  name="dll"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md='3'>
                <Label>Hasil Konsultasi</Label>
              </Col>
              <Col md='9'>
                <Input
                  id='hasil_konsultasi'
                  type='textarea'
                  name='hasil_konsultasi'
                  innerRef={register() as any}
                />
              </Col>
            </Row>

            <Row className='mt-1'>
              <Col md='3'>
                <Label style={{marginTop:'5px'}}>Persediaan Darah</Label>
              </Col>
              <Col>
                <Input
                  id="persediaan_darah"
                  type="radio"
                  name="persediaan_darah"
                  className="me-1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPersediaanDarah('0');
                  }}
                  value="0"
                  checked={persediaanDarah === '0'}
                  innerRef={register("persediaan_darah") as any}
                />{' '}
                <Label>Ada</Label>
              </Col>
              <Col>
                <Input
                  id="persediaan_darah_1"
                  type="radio"
                  name="persediaan_darah"
                  className="me-1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPersediaanDarah('1');
                  }}
                  value="1"
                  checked={persediaanDarah === '1'}
                  innerRef={register("persediaan_darah") as any}
                />{' '}
                <Label>Tidak</Label>
              </Col><Col>
              </Col><Col>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md='3'>
                <Label>Persetujuan Pemberian Darah dan Produk Darah</Label>
              </Col>
              <Col>
                <Input
                  id='persetujuan'
                  type='radio'
                  name='persetujuan'
                  className='me-1'
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPemberianDarah('1');
                  }}
                  value='1'
                  checked={pemberianDarah === '1'}
                  innerRef={register('persetujuan') as any}
                />
                <Label>Ada</Label>
              </Col>
              <Col>
                <Input
                  id='persetujuan'
                  type='radio'
                  name='persetujuan'
                  className='me-1'
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPemberianDarah('0');
                  }}
                  value='0'
                  checked={pemberianDarah === '0'}
                  innerRef={register('persetujuan') as any}
                />
                <Label>Belum Ada</Label>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='3'>
                <Label>Anestesi Yang Digunakan</Label>
              </Col>
              <Col>
                <Input
                  id='anestesi_1'
                  type='radio'
                  name='anestesi'
                  className='me-1'
                  onChange={(e) => {
                    handleRadioChange(e);
                    setAnestesi('1');
                  }}
                  value='1'
                  checked={anestesi === '1'}
                  innerRef={register("anestesi") as any}
                />
                <Label>Umum</Label>
              </Col>
              <Col>
                <Input
                  id='anestesi_2'
                  type='radio'
                  name='anestesi'
                  className='me-1'
                  onChange={(e) => {
                    handleRadioChange(e);
                    setAnestesi('2');
                  }}
                  value='2'
                  checked={anestesi === '2'}
                  innerRef={register("anestesi") as any}
                />
                <Label>Sedasi</Label>
              </Col>
              <Col>
                <Input
                  id='anestesi_3'
                  type='radio'
                  name='anestesi'
                  className='me-1'
                  onChange={(e) => {
                    handleRadioChange(e);
                    setAnestesi('3');
                  }}
                  value='3'
                  checked={anestesi === '3'}
                  innerRef={register("anestesi") as any}
                />
                <Label>Lokal</Label>
              </Col>
              <Col>
                <Input
                  id='anestesi_4'
                  type='radio'
                  name='anestesi'
                  className='me-1'
                  onChange={(e) => {
                    handleRadioChange(e);
                    setAnestesi('4');
                  }}
                  value='4'
                  checked={anestesi === '4'}
                  innerRef={register("anestesi") as any}
                />
                <Label>Topikal</Label>
              </Col>
            </Row>

            <Row className='mt-1'>
              <Col md='3'>
                <Label>Jenis Kasus</Label>
              </Col>
              <Col>
                <Input
                  id='jenis_kasus_1'
                  type='radio'
                  name='jenis_kasus'
                  className='me-1'
                  onChange={(e) => {
                    handleRadioChange(e);
                    setBersih('1');
                  }}
                  value='1'
                  checked={bersih === '1'}
                  innerRef={register('jenis_kasus') as any}
                />
                <Label>Bersih</Label>
              </Col>
              <Col>
                <Input
                  id='jenis_kasus_2'
                  type='radio'
                  name='jenis_kasus'
                  className='me-1'
                  onChange={(e) => {
                    handleRadioChange(e);
                    setBersih('2');
                  }}
                  value='2'
                  checked={bersih === '2'}
                  innerRef={register('jenis_kasus') as any}
                />
                <Label>Bersih Tercemar</Label>
              </Col>
              <Col>
                <Input
                  id='jenis_kasus_3'
                  type='radio'
                  name='jenis_kasus'
                  className='me-1'
                  onChange={(e) => {
                    handleRadioChange(e);
                    setBersih('3');
                  }}
                  value='3'
                  checked={bersih === '3'}
                  innerRef={register('jenis_kasus') as any}
                />
                <Label>Tercemar</Label>
              </Col>
              <Col>
                <Input
                  id='jenis_kasus_4'
                  type='radio'
                  name='jenis_kasus'
                  className='me-1'
                  onChange={(e) => {
                    handleRadioChange(e);
                    setBersih('4');
                  }}
                  value='4'
                  checked={bersih === '4'}
                  innerRef={register('jenis_kasus') as any}
                />
                <Label>Kotor</Label>
              </Col>
            </Row>

            <Row className='mt-1'>
              <Col>
                <Label>Diagnosa</Label>
              </Col>
              <Col md='9'>
                <Input
                  id='diagnosa'
                  type='textarea'
                  name='diagnosa'
                  innerRef={register() as any}
                />
              </Col>
            </Row>

            <Row className='mt-1'>
              <Col md='3'>
                <Label>Rencana Operasi</Label>
              </Col>
              <Col>
                <Input
                  id='rencana_operasi'
                  type='textarea'
                  name='rencana_operasi'
                  style={{width:'300px'}}
                  innerRef={register() as any}
                />
              </Col>
              <Col>
                <Label>Tanggal Operasi</Label>
              </Col>
              <Col>
                <DateTimeInput
                  name='tanggal_operasi'
                  defaultValue='date'
                  md={0}
                  style={{ width:'200px', marginTop:'-26px'}}
                  {...{ register, errors }}
                />
              </Col>
              <Col></Col>
            </Row>

            <Row className='mt-1'>
              <Col>
                <Label>Ahli Bedah</Label>
              </Col>
              <Col md='9'>
                <Input
                  id='ahli_bedah'
                  type='textarea'
                  name='ahli_bedah'
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row>
              <Col md='3' className="mt-1">
                <Label>Tanggal</Label>
              </Col>
              <Col md='9' className="mt-1">
                <DateTimeInput
                  name='tanggal'
                  defaultValue='date'
                  md={1}
                  style={{marginTop: '-30px'}}
                  {...{ register, errors }}
                />
              </Col>
            </Row>

            <Row className="mt-2">
              <Col>
                <Signature
                  label="Dokter Operator"
                  type="picker"
                  additionalLabel={(data && data.form && data.form.Nama_Dokter) ? data.form.Nama_Dokter : ''}
                  initialImage={(data && data.form && data.form.TTD_Dokter && data.form.TTD_Dokter !== '') ? data.form.TTD_Dokter : undefined}
                  persons={doctors}
                  unit='dokter'
                  onSigned={(assigner: SignatureModel, isFormDokter?: boolean) => {
                    if (isFormDokter) {
                      handleDokterOperator(assigner, isFormDokter)
                    }
                    if (!isFormDokter) {
                      handleDokterOperator(assigner)
                    }
                  }}
                />
                <Input
                  type="hidden"
                  name="ttd_dokter"
                  innerRef={register()}
                  invalid={errors.ttd_dokter && true}
                />
                <Input
                  type="hidden"
                  name="id_dokter_ttd"
                  innerRef={register()}
                  invalid={errors.id_dokter_ttd && true}
                />
              </Col>
            </Row>
            <FormGroup className="d-flex mb-0 justify-content-center mt-2">
              <SubmitButton
                label="Simpan"
                buttonColor='primary'
                spinnerStyle={{ width: '1rem', height: '1rem' }}
                spinnerColor='light'
                processing={processing}
              />
              {
                pdfData && Array.isArray(pdfData) && pdfData.length > 0 && (
                  <a color='success' href={`${pdfData[0].URL}`} target="_blank" rel="noreferrer">
                    <Button className='me-1' color='success' type='button'>
                  Cetak
                    </Button>
                  </a>
                )
              }
              {
                (!pdfData || (pdfData && Array.isArray(pdfData) && pdfData.length === 0)) && (
                  <Button className='me-1' color='success' type='button' disabled>
                Cetak
                  </Button>
                )
              }
            </FormGroup>
            <FormGroup className="form-group mt-0" row>
              <div className="d-flex justify-content-center align-items-center">
                <Label className="me-1">Terakhir Disimpan: </Label>
                <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
              </div>
            </FormGroup>
          </FormGroup>
        </div>
      </FormGroup>
    </Form>
  )
}

export default AssesmenPraOperasiForm;
