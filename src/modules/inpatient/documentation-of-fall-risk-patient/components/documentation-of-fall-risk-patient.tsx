import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from "reactstrap";
import { useEffect, useState } from "react";
import { AppRequest } from "@src/shared/request";
import { DateTimeInput } from "@src/shared/input";
import { FindPdfRequest } from "@src/shared/pdf";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { SubmitButton } from "@src/shared/button";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useForm } from "react-hook-form";
import { useWarnIfUnsavedChanges } from "@src/shared/alert";
import { DocumentationOfFallRiskPatientModel } from "../models/documentation-of-fall-risk-patient-model";
import { IUpdateDocumentationOfFallRiskPatientRequest, UpdateDocumentationOfFallRiskPatientRequest } from "../requests";
import { fetchDocumentationOfFallRiskPatient, fetchDocumentationOfFallRiskPatientPdf, handlePdf } from "../stores/documentation-of-fall-risk-patient-store";
import { DocumentationOfFallRiskPatientService } from "../services";
import { PdfDocumentationOfFallRiskPatient } from "../requests/pdf-documentation-of-fall-risk-patient-request";
import { DateTimeConverter } from "@src/shared/datetime-converter";

const DocumentationOfFallRiskPatient = (props: { data: DocumentationOfFallRiskPatientModel}) => {
  const { data } = props;

  const [processing, setProcessing] = useState(false);
  const dispatch = useAppDispatch();
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const { officers } = useAppSelector(state => state.officer);
  const { nurses } = useAppSelector(state => state.nurse);

  const { pdf } = useAppSelector(state => state.documentationOfFallRiskPatientStore);
  const [pdfData, setPdfData] = useState<any | undefined>(undefined);
  const [waliName, setWaliName] = useState(!!(data?.form?.Penerima_Informasi && data?.form?.Penerima_Informasi === 'Wali'))
  const [defaultPattern, setDefaultPattern] = useState<any>();
  const [tindakanRem, setTindakanRem] = useState<string | undefined>(`${data?.form?.Tindakan_Rem_Tempat_Tidur_Check}`);
  const [kebutuhanPasien, setKebutuhanPasien] = useState<string | undefined>(`${data?.form?.Tindakan_Kebutuhan_Pasien_Check}`);
  const [tempatkanMeja, setTempatkanMeja] = useState<string | undefined>(`${data?.form?.Tindakan_Tempatkan_Meja_Check}`);
  const [pasangPalang, setPasangPalang] = useState<string | undefined>(`${data?.form?.Tindakan_Pasang_Palang_Check}`);
  const [pasangPenanda, setPasangPenanda] = useState<string | undefined>(`${data?.form?.Tindakan_Pasang_Penanda_Check}`);
  const [tingkatanRendah, setTingkatanRendah] = useState<any>(`${data?.form?.Tingkatan_Rendah}`);
  const [libatkanKeluarga, setLibatkanKeluarga] = useState<string | undefined>(`${data?.form?.Tindakan_Libatkan_Keluarga_Check}`);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchDocumentationOfFallRiskPatientPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pemberian-informasi-resiko-pasien-jatuh' })));
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
    if (data && data.form) {
      setTindakanRem(`${data?.form?.Tindakan_Rem_Tempat_Tidur_Check}`);
      setKebutuhanPasien(`${data?.form?.Tindakan_Kebutuhan_Pasien_Check}`);
      setTempatkanMeja(`${data?.form?.Tindakan_Tempatkan_Meja_Check}`);
      setPasangPalang(`${data?.form?.Tindakan_Pasang_Palang_Check}`);
      setPasangPenanda(`${data?.form?.Tindakan_Pasang_Penanda_Check}`);
      setLibatkanKeluarga(`${data?.form?.Tindakan_Libatkan_Keluarga_Check}`);
    }
  }, [data])

  useEffect(() => {
    if (defaultPattern === '1') {
      setValue('tindakan_rem_tempat_tidur_check', '1');
      setTindakanRem('1');
      setValue('tindakan_kebutuhan_pasien_check', '1');
      setKebutuhanPasien('1');
      setValue('tindakan_tempatkan_meja_check', '1');
      setTempatkanMeja('1');
      setValue('tindakan_pasang_palang_check', '1');
      setPasangPalang('1');
      setValue('tindakan_pasang_penanda_check', '1');
      setPasangPenanda('1')
      setValue('Tingkatan_Rendah', '1');
      setTingkatanRendah('1');
      setValue('tindakan_libatkan_keluarga_check', '1');
      setLibatkanKeluarga('1');
    } else if (defaultPattern === '0') {
      setValue('tindakan_rem_tempat_tidur_check', undefined);
      setTindakanRem(undefined);
      setValue('tindakan_kebutuhan_pasien_check', undefined);
      setKebutuhanPasien(undefined);
      setValue('tindakan_tempatkan_meja_check', undefined);
      setTempatkanMeja(undefined);
      setValue('tindakan_pasang_palang_check', undefined);
      setPasangPalang(undefined);
      setValue('tindakan_pasang_penanda_check', undefined);
      setPasangPenanda(undefined);
      setValue('Tingkatan_Rendah', undefined);
      setTingkatanRendah(undefined);
      setValue('tindakan_libatkan_keluarga_check', undefined);
      setLibatkanKeluarga(undefined);
    }
  }, [defaultPattern]);

  if (!treatment) {
    return null;
  }

  useEffect(() => {
    if (doctors) {
      setValue('id_pemberi_informasi', data.form.ID_Pemberi_Informasi ? data.form.ID_Pemberi_Informasi : '')
      setValue('tindakan_libatkan_keluarga_check', data.form.Tindakan_Libatkan_Keluarga_Check ? data.form.Tindakan_Libatkan_Keluarga_Check : '')
      setValue('penerima_informasi', data.form && data.form.Penerima_Informasi && data.form.Penerima_Informasi === 'Pasien' ? '1' : data.form && data.form.Penerima_Informasi && data.form.Penerima_Informasi === 'Wali' ? '2' : '')
    }
  }, [doctors])

  const { register, handleSubmit, errors, setValue, reset, formState } = useForm<any>({
    mode: 'onChange',
    // resolver: yupResolver(UpdateDocumentationOfFallRiskPatientRequest.schema()),
    defaultValues: {
      id_pemberi_informasi: data?.form?.ID_Pemberi_Informasi ?? '',
      penerima_informasi: data.form && data.form.Penerima_Informasi && data.form.Penerima_Informasi === 'Pasien' ? '1' : data.form && data.form.Penerima_Informasi && data.form.Penerima_Informasi === 'Wali' ? '2' : '',
      faktor_usia_check: data?.form?.Faktor_Usia_Check ?? '',
      faktor_riwayat_jatuh_check: data?.form?.Faktor_Riwayat_Jatuh_Check ?? '',
      faktor_penyakit_check: data?.form?.Faktor_Penyakit_Check ?? '',
      faktor_penggunaan_alat_check: data?.form?.Faktor_Penggunaan_Alat_Check ?? '',
      faktor_terpasang_infus_check: data?.form?.Faktor_Terpasang_Infus_Check ?? '',
      faktor_kondisi_mental_check: data?.form?.Faktor_Kondisi_Mental_Check ?? '',
      faktor_mobilisasi_check: data?.form?.Faktor_Mobilisasi_Check ?? '',
      faktor_mobilisasi_text: data?.form?.Faktor_Mobilisasi_Text ?? '',
      faktor_post_operasi_check: data?.form?.Faktor_Post_Operasi_Check ?? '',
      faktor_post_operasi_text: data?.form?.Faktor_Post_Operasi_Text ?? '',
      faktor_respon_obat_check: data?.form?.Faktor_Respon_Obat_Check ?? '',
      respon_obat_sedatif: data?.form?.Respon_Obat_Sedatif ?? '',
      respon_obat_hipnotik: data?.form?.Respon_Obat_Hipnotik ?? '',
      respon_obat_antidepresan: data?.form?.Respon_Obat_Antidepresan ?? '',
      respon_obat_laxatives: data?.form?.Respon_Obat_Laxatives ?? '',
      respon_obat_diuretika: data?.form?.Respon_Obat_Diuretika ?? '',
      respon_obat_narkotika: data?.form?.Respon_Obat_Narkotika ?? '',
      faktor_riwayat_check: data?.form?.Faktor_Riwayat_Check ?? '',
      riwayat_kejang: data?.form?.Riwayat_Kejang ?? '',
      riwayat_vertigo: data?.form?.Riwayat_Vertigo ?? '',
      riwayat_depresi: data?.form?.Riwayat_Depresi ?? '',
      riwayat_pingsan: data?.form?.Riwayat_Pingsan ?? '',
      riwayat_pusing: data?.form?.Riwayat_Pusing ?? '',
      riwayat_delirium: data?.form?.Riwayat_Delirium ?? '',
      riwayat_disorientasi: data?.form?.Riwayat_Disorientasi ?? '',
      faktor_lain_check: data?.form?.Faktor_Lain_Check ?? '',
      faktor_lain_text: data?.form?.Faktor_Lain_Text ?? '',
      tingkatan_check: data?.form?.Tingkatan_Check ?? '',
      tingkatan_rendah: data?.form?.Tingkatan_Rendah ?? '',
      // tingkatan_sedang: data?.form?.Tingkatan_Sedang ?? '',
      // tingkatan_tinggi: data?.form?.Tingkatan_Tinggi ?? '',
      tindakan_rem_tempat_tidur_check: data?.form?.Tindakan_Rem_Tempat_Tidur_Check ?? '',
      tindakan_kebutuhan_pasien_check: data?.form?.Tindakan_Kebutuhan_Pasien_Check ?? '',
      tindakan_tempatkan_meja_check: data?.form?.Tindakan_Tempatkan_Meja_Check ?? '',
      tindakan_pasang_palang_check: data?.form?.Tindakan_Pasang_Palang_Check ?? '',
      tindakan_pasang_penanda_check: data?.form?.Tindakan_Pasang_Penanda_Check ?? '',
      tindakan_libatkan_keluarga_check: data?.form?.Tindakan_Libatkan_Keluarga_Check ?? '',
      tindakan_cepat_menanggapi_check: data?.form?.Tindakan_Cepat_Menanggapi_Check ?? '',
      tujuan_pasien_aman_check: data?.form?.Tujuan_Pasien_Aman_Check ?? '',
      akibat_timbulnya_cedera_check: data?.form?.Akibat_Timbulnya_Cedera_Check ?? '',
      lainnya_check: data?.form?.Lainnya_Check ??  '',
      lainnya_text: data?.form?.Lainnya_Text ?? '',
      id_ttd_pemberi_informasi: data?.form?.ID_TTD_Pemberi_Informasi ?? '',
      ttd_pemberi_informasi: data?.form?.TTD_Pemberi_Informasi ?? '',
      id_ttd_penerima_informasi: data?.form?.ID_TTD_Penerima_Informasi ?? '',
      ttd_penerima_informasi: data?.form?.TTD_Penerima_Informasi ?? '',
      nama_wali: data?.form?.Nama_Wali ?? treatment?.Wali.Nama,
    },
  });

  const { isDirty } = formState;

  useWarnIfUnsavedChanges(isDirty, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleCheckboxChange = (val: any) => {
    setValue(`${val.target.name}`, (val.target.checked) ? '1' : '0')
  }

  const handleDoctorSigned = (image: SignatureModel) => {
    setValue('ttd_pemberi_informasi', image.Signature);
    setValue('id_ttd_pemberi_informasi', image.ID_Karyawan);
  }

  const handlePatientSigned = (image: string) => {
    setValue('ttd_penerima_informasi', image);
  }

  const handleWaliName = (e: any) => {
    if (e.target.value === '2') {
      setWaliName(true);
    } else {
      setWaliName(false);
    }
  }

  const handleProcessing = () => {
    setProcessing(true);
  }

  const handleSubmitForm = (value: IUpdateDocumentationOfFallRiskPatientRequest) => {
    if (!treatment) {
      return;
    }
    handleProcessing()
    reset(value);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateDocumentationOfFallRiskPatientRequest.createFromJson({ ...value, ...appRequest });
    dispatch(handlePdf(undefined));
    DocumentationOfFallRiskPatientService().update(params)
      .then(() => {
        DocumentationOfFallRiskPatientService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            DocumentationOfFallRiskPatientService().pdfv3(PdfDocumentationOfFallRiskPatient.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, treatment))
              .then(() => {
                setProcessing(false);
                dispatch(fetchDocumentationOfFallRiskPatientPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pemberian-informasi-resiko-pasien-jatuh' })))
              })
          });
        setProcessing(false);
        dispatch(fetchDocumentationOfFallRiskPatient(AppRequest.createFromStore(treatment)));
      });
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormGroup className="form-group" row>
          <FormGroup>
            <div className="border-dark p-1">
              <Row>
                <Col md='3' className='mt-1'>
                  <Label>Pemberi Informasi</Label>
                </Col>
                <Col md='9' className='mt-1'>
                  <Input
                    type="select"
                    id="id_pemberi_informasi"
                    name="id_pemberi_informasi"
                    innerRef={register()}
                  >
                    <option value="" disabled={false}>Pilih Salah Satu</option>
                    {
                      officers && Array.isArray(officers) && officers.map((item: any, key: number) => {
                        return <option value={item.ID_Karyawan} key={key}>{ item.Nama }</option>;
                      })
                    }
                  </Input>
                </Col>
              </Row>
              <Row>
                <Col md='3' className='mt-1'>
                  <Label>Penerima Informasi / Pemberi Persetujuan</Label>
                </Col>
                <Col sm='2' className="mt-1">
                  <Input
                    type="radio"
                    className="me-1"
                    name="penerima_informasi"
                    onChange={(e) => handleWaliName(e)}
                    defaultChecked={data?.form?.Penerima_Informasi === 'Pasien'}
                    value='1'
                    innerRef={register({ required: true })}
                  />
                  <Label>Pasien</Label>
                </Col>
                <Col sm='2' className="mt-1">
                  <Input
                    type="radio"
                    className="me-1"
                    name="penerima_informasi"
                    onChange={(e) => handleWaliName(e)}
                    defaultChecked={data?.form?.Penerima_Informasi === 'Wali'}
                    value='2'
                    innerRef={register({ required: true })}
                  />
                  <Label>Wali</Label>
                </Col>
                {
                  waliName && (
                    <Col sm='3' className="mt-1">
                      <Input
                        type="text"
                        placeholder="Nama Wali"
                        name="nama_wali"
                        innerRef={register({ required: false })}
                      />
                    </Col>
                  )
                }
              </Row>
            </div>
          </FormGroup>
          <FormGroup>
            <div className="border-dark p-1">
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
                <Col md='3'>
                  <Label>1.Faktor Risiko Pasien Jatuh</Label>
                </Col>
                <Col>
                  <Label>Usia</Label>
                </Col>
                <Col sm='3'>
                  <Input id='tanggal-lahir' type="text" value={`${treatment.Pasien.Umur}`} disabled />
                </Col>
                <Col>
                  <Label>tahun</Label>
                </Col>
                <Col></Col>
                <Col md='3'>
                  <Input
                    id="faktor_usia_check"
                    type="checkbox"
                    name="faktor_usia_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Faktor_Usia_Check === '1'}
                    innerRef={register('faktor_usia_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row  className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Label>Riwayat Jatuh Dalam 30 Hari</Label>
                </Col>
                <Col>
                  <Input
                    id="faktor_riwayat_jatuh_check"
                    type="checkbox"
                    name="faktor_riwayat_jatuh_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Faktor_Riwayat_Jatuh_Check === '1'}
                    innerRef={register('faktor_riwayat_jatuh_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Label>Penyakit / Diagnosa Pasien</Label>
                </Col>
                <Col>
                  <Input
                    id="faktor_penyakit_check"
                    type="checkbox"
                    name="faktor_penyakit_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Faktor_Penyakit_Check === '1'}
                    innerRef={register('faktor_penyakit_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Label>Penggunaan Alat Bantu Jalan</Label>
                </Col>
                <Col>
                  <Input
                    id="faktor_penggunaan_alat_check"
                    type="checkbox"
                    name="faktor_penggunaan_alat_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Faktor_Penggunaan_Alat_Check === '1'}
                    innerRef={register('faktor_penggunaan_alat_check') as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Label>Terpasang Infus / CVP</Label>
                </Col>
                <Col>
                  <Input
                    id="faktor_terpasang_infus_check"
                    type="checkbox"
                    name="faktor_terpasang_infus_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Faktor_Terpasang_Infus_Check === '1'}
                    innerRef={register('faktor_terpasang_infus_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Label>Kondisi Mental / Gangguan Kognitif</Label>
                </Col>
                <Col>
                  <Input
                    id="faktor_kondisi_mental_check"
                    type="checkbox"
                    name="faktor_kondisi_mental_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Faktor_Kondisi_Mental_Check === '1'}
                    innerRef={register('faktor_kondisi_mental_check') as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col></Col>
                <Col>
                  <Label>Mobilisasi</Label>
                </Col>
                <Col>
                  <Input
                    id='faktor_mobilisasi_text'
                    name="faktor_mobilisasi_text"
                    type="text"
                    innerRef={register() as any}
                    style={{width:'400px',  marginLeft:'-180px'}}
                  />
                </Col>
                <Col>
                  <Input
                    id="faktor_mobilisasi_check"
                    name="faktor_mobilisasi_check"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Faktor_Mobilisasi_Check === '1'}
                    innerRef={register('faktor_mobilisasi_check') as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col></Col>
                <Col>
                  <Label>Post Operasi</Label>
                </Col>
                <Col>
                  <Input
                    id='faktor_post_operasi_text'
                    name="faktor_post_operasi_text"
                    type="text"
                    innerRef={register() as any}
                    style={{width:'400px',  marginLeft:'-180px'}}
                  />
                </Col>
                <Col>
                  <Input
                    id="faktor_post_operasi_check"
                    name="faktor_post_operasi_check"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Faktor_Post_Operasi_Check === '1'}
                    innerRef={register('faktor_post_operasi_check') as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Label>Respon Terhadap Obat-Obatan</Label>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col></Col>
                <Col md='2'>
                  <Input
                    id="respon_obat_sedatif"
                    type="checkbox"
                    name="respon_obat_sedatif"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Respon_Obat_Sedatif === '1'}
                    innerRef={register('respon_obat_sedatif') as any}
                  />
                  <Label>Sedatif</Label>
                </Col>
                <Col md='2'>
                  <Input
                    id="respon_obat_hipnotik"
                    type="checkbox"
                    name="respon_obat_hipnotik"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Respon_Obat_Hipnotik === '1'}
                    innerRef={register('respon_obat_hipnotik') as any}
                  />
                  <Label>Hipnotik</Label>
                </Col>
                <Col md='2'>
                  <Input
                    id="respon_obat_antidepresan"
                    type="checkbox"
                    name="respon_obat_antidepresan"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Respon_Obat_Antidepresan === '1'}
                    innerRef={register('respon_obat_antidepresan') as any}
                  />
                  <Label>Antidepresan</Label>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col></Col>
                <Col md='2'>
                  <Input
                    id="respon_obat_laxatives"
                    type="checkbox"
                    name="respon_obat_laxatives"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Respon_Obat_Laxatives === '1'}
                    innerRef={register('respon_obat_laxatives') as any}
                  />
                  <Label>Laxatives</Label>
                </Col>
                <Col md='2'>
                  <Input
                    id="respon_obat_diuretika"
                    type="checkbox"
                    name="respon_obat_diuretika"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Respon_Obat_Diuretika === '1'}
                    innerRef={register('respon_obat_diuretika') as any}
                  />
                  <Label>Diuretika</Label>
                </Col>
                <Col md='2'>
                  <Input
                    id="respon_obat_narkotika"
                    type="checkbox"
                    name="respon_obat_narkotika"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Respon_Obat_Narkotika === '1'}
                    innerRef={register('respon_obat_narkotika') as any}
                  />
                  <Label>Narkotika</Label>
                </Col>
                <Col style={{marginTop:'-10px'}}>
                  <Input
                    id="faktor_respon_obat_check"
                    type="checkbox"
                    name="faktor_respon_obat_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Faktor_Respon_Obat_Check === '1'}
                    innerRef={register('faktor_respon_obat_check') as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Label>Riwayat</Label>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col></Col>
                <Col>
                  <Input
                    id="riwayat_kejang"
                    type="checkbox"
                    name="riwayat_kejang"
                    className="me-1 ms-5"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Riwayat_Kejang === '1'}
                    innerRef={register('riwayat_kejang') as any}
                  />
                  <Label>Kejang</Label>
                </Col>
                <Col>
                  <Input
                    id="riwayat_vertigo"
                    type="checkbox"
                    name="riwayat_vertigo"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Riwayat_Vertigo === '1'}
                    innerRef={register('riwayat_vertigo') as any}
                  />
                  <Label>Vertigo</Label>
                </Col>
                <Col>
                  <Input
                    id="riwayat_depresi"
                    type="checkbox"
                    name="riwayat_depresi"
                    className="me-1"
                    style={{marginLeft:'-100px'}}
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Riwayat_Depresi === '1'}
                    innerRef={register('riwayat_depresi') as any}
                  />
                  <Label>Depresi</Label>
                </Col>
                <Col>
                  <Input
                    id="riwayat_pingsan"
                    type="checkbox"
                    name="riwayat_pingsan"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Riwayat_Pingsan === '1'}
                    innerRef={register('riwayat_pingsan') as any}
                    style={{marginLeft:'-220px'}}
                  />
                  <Label>pingsan</Label>
                </Col>
              </Row>
              <Row>
                <Col></Col>
                <Col md='2'>
                  <Input
                    id="riwayat_pusing"
                    type="checkbox"
                    name="riwayat_pusing"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    style={{marginLeft:'-27px'}}
                    defaultChecked={data && data.form && data.form.Riwayat_Pusing === '1'}
                    innerRef={register('riwayat_pusing') as any}
                  />
                  <Label>Pusing</Label>
                </Col>
                <Col md='2' style={{marginLeft:'-50px'}}>
                  <Input
                    id="riwayat_delirium"
                    type="checkbox"
                    name="riwayat_delirium"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Riwayat_Delirium === '1'}
                    innerRef={register('riwayat_delirium') as any}
                  />
                  <Label>Delirium</Label>
                </Col>
                <Col md='2' style={{width:'250px', marginLeft:'-60px'}}>
                  <Input
                    id="riwayat_disorientasi"
                    type="checkbox"
                    name="riwayat_disorientasi"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Riwayat_Disorientasi === '1'}
                    innerRef={register('riwayat_disorientasi') as any}
                  />
                  <Label>Disorientasi_Lingkungan</Label>
                </Col>
                <Col style={{marginTop:'-15px'}}>
                  <Input
                    id="faktor_riwayat_check"
                    type="checkbox"
                    name="faktor_riwayat_check"
                    className="me-1"
                    style={{marginLeft:'30px'}}
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Faktor_Riwayat_Check === '1'}
                    innerRef={register('faktor_riwayat_check') as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Label>Lain - Lain</Label>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col></Col>
                <Col md='6'>
                  <Input
                    id="faktor_lain_text"
                    type="textarea"
                    name="faktor_lain_text"
                    innerRef={register()as any}
                  />
                </Col>
                <Col>
                  <Input
                    id="faktor_lain_check"
                    type="checkbox"
                    name="faktor_lain_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Faktor_Lain_Check === '1'}
                    innerRef={register('faktor_lain_check') as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col>
                  <Label>2. Tingkatan Risiko Jatuh</Label>
                </Col>
                <Col md='2'>
                  <Input
                    id="tingkatan_rendah"
                    type="radio"
                    name="tingkatan_rendah"
                    className="me-1"
                    onChange={(e) => {
                      handleRadioChange(e);
                      setTingkatanRendah('1');
                    }}
                    value='1'
                    checked={!!(tingkatanRendah === '1')}
                    innerRef={register({ required: false })}
                  />
                  <Label>Rendah</Label>
                </Col>
                <Col md='2'>
                  <Input
                    id="tingkatan_rendah"
                    type="radio"
                    name="tingkatan_rendah"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    value='2'
                    defaultChecked={!!(data && data.form && data.form.Tingkatan_Rendah === '2')}
                    innerRef={register({ required: false })}
                  />
                  <Label>Sedang</Label>
                </Col>
                <Col md='2'>
                  <Input
                    id="tingkatan_rendah"
                    type="radio"
                    name="tingkatan_rendah"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    value='3'
                    defaultChecked={!!(data && data.form && data.form.Tingkatan_Rendah === '3')}
                    innerRef={register({ required: false })}
                  />
                  <Label>Tinggi</Label>
                </Col>
                <Col>
                  <Input
                    id="tingkatan_check"
                    type="checkbox"
                    name="tingkatan_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Tingkatan_Check === '1'}
                    innerRef={register('tingkatan_check') as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>

              <Row  className="mt-2">
                <Col>
                  <Label>3. Tindakan Pencegahan Risiko Jatuh</Label>
                </Col>
                <Col md='6'>
                  <Label>Patikan Rem Tempat Tidur Terkunci</Label>
                </Col>
                <Col>
                  <Input
                    id="tindakan_rem_tempat_tidur_check"
                    type="checkbox"
                    name="tindakan_rem_tempat_tidur_check"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setTindakanRem('1');
                      } else {
                        setTindakanRem(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={tindakanRem === '1'}
                    innerRef={register('tindakan_rem_tempat_tidur_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row  className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Label>Pastikan Semua Kebutuhan Pasien Dalam Jangkauan</Label>
                </Col>
                <Col>
                  <Input
                    id="tindakan_kebutuhan_pasien_check"
                    type="checkbox"
                    name="tindakan_kebutuhan_pasien_check"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setKebutuhanPasien('1');
                      } else {
                        setKebutuhanPasien(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={kebutuhanPasien === '1'}
                    innerRef={register('tindakan_kebutuhan_pasien_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row  className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Label>Tempatkan Meja, Kursi Dan Lainnya Dengan Baik Agar Tidak Menghalangi</Label>
                </Col>
                <Col>
                  <Input
                    id="tindakan_tempatkan_meja_check"
                    type="checkbox"
                    name="tindakan_tempatkan_meja_check"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setTempatkanMeja('1');
                      } else {
                        setTempatkanMeja(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={tempatkanMeja === '1'}
                    innerRef={register('tindakan_tempatkan_meja_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row  className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Label>Pasang Palang Tempat Tidur</Label>
                </Col>
                <Col>
                  <Input
                    id="tindakan_pasang_palang_check"
                    type="checkbox"
                    name="tindakan_pasang_palang_check"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setPasangPalang('1');
                      } else {
                        setPasangPalang(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={pasangPalang === '1'}
                    innerRef={register('tindakan_pasang_palang_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row  className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Label>Pasang Penanda Risiko Jatuh Dengan Memakai Gelang Berwarna Kuning</Label>
                </Col>
                <Col>
                  <Input
                    id="tindakan_pasang_penanda_check"
                    type="checkbox"
                    name="tindakan_pasang_penanda_check"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setPasangPenanda('1');
                      } else {
                        setPasangPenanda(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={pasangPenanda === '1'}
                    innerRef={register('tindakan_pasang_penanda_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row  className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Label>Libatkan keluarga / penunggu pasien untuk mendampingi pasien di samping tempat tidur selama perawatan</Label>
                </Col>
                <Col>
                  <Input
                    id="tindakan_libatkan_keluarga_check"
                    type="checkbox"
                    name="tindakan_libatkan_keluarga_check"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setLibatkanKeluarga('1');
                      } else {
                        setLibatkanKeluarga(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={libatkanKeluarga === '1'}
                    innerRef={register('tindakan_libatkan_keluarga_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row  className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Label>Cepat Menanggapi Keluhan Pasien</Label>
                </Col>
                <Col>
                  <Input
                    id="tindakan_cepat_menanggapi_check"
                    type="checkbox"
                    name="tindakan_cepat_menanggapi_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Tindakan_Cepat_Menanggapi_Check === '1'}
                    innerRef={register('tindakan_cepat_menanggapi_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row  className="mt-2">
                <Col>
                  <Label>4. Tujuan Tindakan Pencegahan Risiko Jatuh</Label>
                </Col>
                <Col md='6'>
                  <Label>Pasien Aman Dari Risiko Jatuh Selama Menjalani Perawatan Dirumah Sakit</Label>
                </Col>
                <Col>
                  <Input
                    id="tujuan_pasien_aman_check"
                    type="checkbox"
                    name="tujuan_pasien_aman_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Tujuan_Pasien_Aman_Check === '1'}
                    innerRef={register('tujuan_pasien_aman_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row  className="mt-2">
                <Col>
                  <Label>5. Akibat Dari Risiko Jatuh</Label>
                </Col>
                <Col md='6'>
                  <Label>Timbulnya Cidera</Label>
                </Col>
                <Col>
                  <Input
                    id="akibat_timbulnya_cedera_check"
                    type="checkbox"
                    name="akibat_timbulnya_cedera_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Akibat_Timbulnya_Cedera_Check === '1'}
                    innerRef={register('akibat_timbulnya_cedera_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row  className="mt-2">
                <Col>
                  <Label>6. Lain - Lain</Label>
                </Col>
                <Col md='6'>
                  <Input
                    id="lainnya_text"
                    name="lainnya_text"
                    type="text"
                    innerRef={register()as any}
                  />
                </Col>
                <Col>
                  <Input
                    id="lainnya_check"
                    type="checkbox"
                    name="lainnya_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Lainnya_Check === '1'}
                    innerRef={register('lainnya_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <div className="mt-2 d-flex justify-content-around my-0">
                    <Signature
                      label="Pemberi Informasi"
                      type="picker"
                      additionalLabel={(data && data.form && data.form.Nama_TTD_Pemberi_Informasi) ? data.form.Nama_TTD_Pemberi_Informasi : ''}
                      initialImage={(data && data.form && data.form.TTD_Pemberi_Informasi && data.form.TTD_Pemberi_Informasi !== '') ? data.form.TTD_Pemberi_Informasi : undefined}
                      persons={officers}
                      onSigned={(assigner: SignatureModel) => handleDoctorSigned(assigner)}
                    />
                    <Input
                      type="hidden"
                      name='ttd_pemberi_informasi'
                      innerRef={register()}
                      invalid={errors.ttd_pemberi_informasi && true}
                    />
                    <Input
                      type="hidden"
                      name='id_ttd_pemberi_informasi'
                      innerRef={register()}
                      invalid={errors.id_ttd_pemberi_informasi && true}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="mt-2 d-flex justify-content-around my-0">
                    <Signature
                      label="Pasien"
                      type="drawer"
                      formName='rawat-jalan/pemberian-informasi'
                      component='ttd_pasien'
                      initialImage={(data && data.form && data.form.TTD_Penerima_Informasi && data.form.TTD_Penerima_Informasi !== '') ? data.form.TTD_Penerima_Informasi : undefined}
                      onSigned={(image: string) => handlePatientSigned(image)}
                    />
                    <Input
                      type="hidden"
                      name="ttd_penerima_informasi"
                      innerRef={register()}
                    />
                  </div>
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
            </div>
          </FormGroup>
        </FormGroup>
      </Form>
    </>
  );
}
export default DocumentationOfFallRiskPatient;
