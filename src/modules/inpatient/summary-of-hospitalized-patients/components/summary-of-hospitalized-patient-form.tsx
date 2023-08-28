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
import { SummaryOfHospitalizedPatientModel } from "../models/summary-of-hospitalized-patient-models";
import { IUpdateSummaryOfHospitalizedPatientRequest, UpdateSummaryOfHospitalizedPatientRequest } from "../requests";
import { SummaryOfHospitalizedPatientService } from "../services";
import { fetchSummaryOfHospitalizedPatient, fetchSummaryOfHospitalizedPatientPdf, handlePdf } from "../stores/summary-of-hospitalized-patient.store";
import { PdfSummaryOfHospitalizedPatientRequest } from "../requests/pdf-summary-of-hospitalized-patient-request";
import { DateTimeConverter } from "@src/shared/datetime-converter";

const SummaryOfHospitalizedPatient = (props: { data: SummaryOfHospitalizedPatientModel}) => {
  const { data } = props;
  const [processing, setProcessing] = useState(false);
  const dispatch = useAppDispatch();
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);

  const { pdf } = useAppSelector(state => state.summaryOfHospitalizedPatientStore);
  const [pdfData, setPdfData] = useState<any | undefined>(undefined);
  const { officers } = useAppSelector(state => state.officer);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchSummaryOfHospitalizedPatientPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_ringkasan-pasien-pulang' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  const namaObat = () => {
    if (data?.cppt_dokter?.Resep && Array.isArray(data?.cppt_dokter?.Resep)) {
      const obat = data.cppt_dokter.Resep.map((val: any) => {
        return `${val.Nama_Obat} - ${val.Kode_AturanPakai}`
      })
      const obatString = obat.join("\n");
      return obatString;
    } else {
      return '';
    }
  }

  const { register, handleSubmit, errors, setValue, reset, formState } = useForm<any>({
    mode: 'onChange',
    // resolver: yupResolver(UpdateSummaryOfHospitalizedPatientRequest.schema()),
    defaultValues: {
      // keluhan_rumah: data?.form?.Keluhan_Rumah ?? '',
      pasien_dirawat: data?.form?.Pasien_Dirawat ?? '',
      komorbiditas_1: data?.form?.Komorbiditas_1 ?? '',
      komorbiditas_2: data?.form?.Komorbiditas_2 ?? '',
      komorbiditas_3: data?.form?.Komorbiditas_3 ?? '',
      komorbiditas_4: data?.form?.Komorbiditas_4 ?? '',
      komorbiditas_5: data?.form?.Komorbiditas_5 ?? '',
      mata: data?.form?.Mata ?? '',
      posisi_khusus: data?.form?.Posisi_Khusus ?? '',
      tanggal_masuk: data?.form?.Tanggal_Masuk ?? '',
      tanggal_keluar: data?.form?.Tanggal_Keluar ?? '',
      diagnosa_masuk: data?.form?.Diagnosa_Masuk ?? data?.cppt_dokter?.Data_A ?? '',
      anamnesa: data?.form?.Anamnesa ?? '',
      pemeriksaan_fisik: data?.form?.Pemeriksaan_Fisik ?? `${data?.cppt_perawat?.Data_O.split('\n').join(', ') ?? ''}, VOD: ${data?.ro?.OD?.VA ?? ''}, VOS: ${data?.ro?.OS?.VA ?? ''}, KGD: ${data?.cppt_perawat?.KGD ?? ''} mg/dl, TD: ${data?.cppt_perawat?.TD ?? ''} mmHg`,
      pemeriksaan_penunjang: data?.form?.Pemeriksaan_Penunjang ?? '',
      diagnosa_utama: data?.form?.Diagnosa_Utama ?? data?.ok?.Diagnosa_Pra_Bedah ?? '',
      diagnosa_sekunder_1: data?.form?.Diagnosa_Sekunder_1 ?? '',
      diagnosa_sekunder_2: data?.form?.Diagnosa_Sekunder_2 ?? '',
      diagnosa_sekunder_3: data?.form?.Diagnosa_Sekunder_3 ?? '',
      diagnosa_sekunder_4: data?.form?.Diagnosa_Sekunder_4 ?? '',
      diagnosa_sekunder_5: data?.form?.Diagnosa_Sekunder_5 ?? '',
      obat_rs: data?.form?.Obat_Rs ?? namaObat(),
      tindakan: data?.form?.Tindakan ?? '',
      kondisi_pulang: data?.form?.Kondisi_Pulang ?? '',
      anjuran: data?.form?.Anjuran ?? '',
      obat_rumah: data?.form?.Obat_Rumah ?? '',
      tanggal: (data && data.form && data.form.Tanggal) ? data.form.Tanggal.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      tanda_tangan_pasien: data?.form?.Tanda_Tangan_Pasien ?? '',
      tanda_tangan_petugas: data?.form?.Tanda_Tangan_Petugas ?? '',
      id_ttd_petugas: data?.form?.ID_TTD_Petugas ?? '',
      ruang_rawat: data?.form?.Ruang_Rawat ?? '',
    },
  });

  const { isDirty } = formState;

  useWarnIfUnsavedChanges(isDirty, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  const handleDoctorSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue('tanda_tangan_petugas', image.Signature);
      setValue('id_ttd_petugas', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('tanda_tangan_petugas', image.Signature);
      setValue('id_ttd_petugas', image.ID_Karyawan);
    }
  }

  const handlePatientSigned = (image: string) => {
    setValue('tanda_tangan_pasien', image);
  }

  const handleProcessing = () => {
    setProcessing(true);
  }

  const handleSubmitForm = (value: IUpdateSummaryOfHospitalizedPatientRequest) => {
    if (!treatment) {
      return;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateSummaryOfHospitalizedPatientRequest.createFromJson({...value, ...appRequest});
    dispatch(handlePdf(undefined));
    SummaryOfHospitalizedPatientService().update(params)
      .then(() => {
        SummaryOfHospitalizedPatientService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            SummaryOfHospitalizedPatientService().pdfv3(PdfSummaryOfHospitalizedPatientRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
              .then(() => {
                setProcessing(false);
                dispatch(fetchSummaryOfHospitalizedPatientPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_ringkasan-pasien-pulang' })))
              })
          });
        setProcessing(false);
        dispatch(fetchSummaryOfHospitalizedPatient(appRequest));
      });
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormGroup className="form-group" row>
          <FormGroup>
            <div className="border-dark mt-2 p-1">
              <Row>
                <Col>
                  <Label>Ruang Rawat / Unit Kerja</Label>
                </Col>
                <Col md='9'>
                  <Input
                    id="ruang_rawat"
                    name="ruang_rawat"
                    type="textarea"
                    innerRef={register({ required: true })}
                    invalid={errors.ruang_rawat && true} 
                  />
                </Col>
              </Row>
              <Row className="mt-1">
                <Col>
                  <Label>Tanggal - Waktu Masuk RS</Label>
                </Col>
                <Col md='9'>
                  <DateTimeInput
                    name='tanggal_masuk'
                    defaultValue='date'
                    md={1}
                    style={{ marginTop:'-25px'}}
                    {...{ register, errors }}
                  />
                </Col>
              </Row>
              <Row className="mt-1">
                <Col>
                  <Label>Tanggal - Waktu Keluar RS</Label>
                </Col>
                <Col md='9'>
                  <DateTimeInput
                    name="tanggal_keluar"
                    defaultValue='date'
                    md={1}
                    style={{marginTop: '-25px'}}
                    {...{register, errors}}
                  />
                </Col>
              </Row>
            </div>
          </FormGroup>

          <FormGroup>
            <div className="border-dark mt-2 p-1">
              <h4>Diisi Oleh Dokter Yang Merawat</h4>
              <hr />
              <Row>
                <Col>
                  <Label>Indikasi Pasien Dirawat :</Label>
                </Col>
                <Col md='9'>
                  <Input
                    id="pasien_dirawat"
                    type="text"
                    name="pasien_dirawat"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row className="mt-1">
                <Col>
                  <Label>Diagnosa Masuk</Label>
                </Col>
                <Col md='9'>
                  <Input
                    id='diagnosa_masuk'
                    type="text"
                    name="diagnosa_masuk"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row className="mt-1">
                <Col>
                  <Label>Anamnesa</Label>
                </Col>
                <Col md='9'>
                  <Input
                    id="anamnesa"
                    type="text"
                    name="anamnesa"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row className="mt-1">
                <Col>
                  <Label>Pemeriksaan Fisik (Waktu Masuk)</Label>
                </Col>
                <Col md='9'>
                  <Input
                    id="pemeriksaan_fisik"
                    type="text"
                    name="pemeriksaan_fisik"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row className="mt-1">
                <Col>
                  <Label>Pemeriksaan Penunjang</Label>
                </Col>
                <Col md='9'>
                  <Input
                    id="pemeriksaan_penunjang"
                    type="text"
                    name="pemeriksaan_penunjang"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row className="mt-1">
                <Col>
                  <Label>Diagnosa Utama (ICD X)</Label>
                </Col>
                <Col md='9'>
                  <Input
                    id="diagnosa_utama"
                    type="text"
                    name="diagnosa_utama"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row className="mt-1">
                <Col>
                  <Label>Diagnosa Sekunder (ICD X)</Label>
                </Col>
                <Col md='9'>
                  <Input
                    id="diagnosa_sekunder_1"
                    type="text"
                    name="diagnosa_sekunder_1"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row className="mt-1">
                <Col></Col>
                <Col md='9'>
                  <Input
                    id="diagnosa_sekunder_2"
                    type="text"
                    name="diagnosa_sekunder_2"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row className="mt-1">
                <Col></Col>
                <Col md='9'>
                  <Input
                    id="diagnosa_sekunder_3"
                    type="text"
                    name="diagnosa_sekunder_3"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row className="mt-1">
                <Col></Col>
                <Col md='9'>
                  <Input
                    id="diagnosa_sekunder_4"
                    type="text"
                    name="diagnosa_sekunder_4"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row className="mt-1">
                <Col></Col>
                <Col md='9'>
                  <Input
                    id="diagnosa_sekunder_5"
                    type="text"
                    name="diagnosa_sekunder_5"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row className="mt-1">
                <Col>
                  <Label>Obat Selama Di Rumah Sakit</Label>
                </Col>
                <Col md='9'>
                  <Input
                    id="obat_rs"
                    type="textarea"
                    name="obat_rs"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row className="mt-1">
                <Col>
                  <Label>Tindakan Selama Di Rumah Sakit</Label>
                </Col>
                <Col md='9'>
                  <Input
                    id="tindakan"
                    type="text"
                    name="tindakan"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row className="mt-1">
                <Col>
                  <Label>Kondisi Pada Saat Pulang</Label>
                </Col>
                <Col>
                  <Input
                    id="kondisi_pulang_y"
                    type="radio"
                    name="kondisi_pulang"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Kondisi_Pulang === '1'}
                    innerRef={register('kondisi_pulang') as any}
                  />
                  <Label>Dapat Berobat Jalan</Label>
                </Col>
                <Col>
                  <Input
                    id="kondisi_pulang_t"
                    type="radio"
                    name="kondisi_pulang"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    value='2'
                    defaultChecked={data && data.form && data.form.Kondisi_Pulang === '2'}
                    innerRef={register('kondisi_pulang') as any}
                  />
                  <Label>Pindah RS Lain</Label>
                </Col>
                <Col>
                  <Input
                    id="kondisi_pulang_3"
                    type="radio"
                    name="kondisi_pulang"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    value='3'
                    defaultChecked={data && data.form && data.form.Kondisi_Pulang === '3'}
                    innerRef={register('kondisi_pulang') as any}
                  />
                  <Label>Sembuh</Label>
                </Col>
                <Col>
                  <Input
                    id="kondisi_pulang_4"
                    type="radio"
                    name="kondisi_pulang"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    value='4'
                    defaultChecked={data && data.form && data.form.Kondisi_Pulang === '4'}
                    innerRef={register('kondisi_pulang') as any}
                  />
                  <Label>Meninggal</Label>
                </Col>
              </Row>
              <Row>
                <Col></Col>
                <Col md='9'>
                  <Input
                    id="kondisi_pulang_5"
                    type="radio"
                    name="kondisi_pulang"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    value='5'
                    style={{marginLeft:'-60px'}}
                    defaultChecked={data && data.form && data.form.Kondisi_Pulang === '5'}
                    innerRef={register('kondisi_pulang') as any}
                  />
                  <Label>Pulang Atas Permintaan</Label>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col>
                  <Label>Instruksi / Tindak Lanjut / Kontrol Selanjutnya</Label>
                </Col>
                <Col md='9'>
                  <Input
                    id="anjuran"
                    type="text"
                    name="anjuran"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row className="mt-1">
                <Col>
                  <Label>Komorbiditas</Label>
                </Col>
                <Col>
                  <Input
                    id="komorbiditas_1"
                    type="checkbox"
                    name="komorbiditas_1"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komorbiditas_1 === '1'}
                    innerRef={register('komorbiditas_1') as any}
                  />
                  <Label>Sanam</Label>
                </Col>
                <Col>
                  <Input
                    id="komorbiditas_2"
                    type="checkbox"
                    name="komorbiditas_2"
                    className="me-1"
                    onChange={(e) =>  handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komorbiditas_2 === '1'}
                    innerRef={register('komorbiditas_2') as any}
                  />
                  <Label>Bonam</Label>
                </Col>
                <Col>
                  <Input
                    id="komorbiditas_3"
                    type="checkbox"
                    name="komorbiditas_3"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Kondisi_Pulang === '1'}
                    innerRef={register('komorbiditas_3') as any}
                  />
                  <Label>Dubia</Label>
                </Col>
                <Col>
                  <Input
                    id="komorbiditas_4"
                    type="checkbox"
                    name="komorbiditas_4"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komorbiditas_4 === '1'}
                    innerRef={register('komorbiditas_4')as any}
                  />
                  <Label>Dubia Ad Sanam</Label>
                </Col>
              </Row>
              <Row>
                <Col></Col>
                <Col md='9'>
                  <Input
                    id="komorbiditas_5"
                    type="checkbox"
                    name="komorbiditas_5"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komorbiditas_5 === '1'}
                    innerRef={register('komorbiditas_5')as any}
                    style={{marginLeft:'-60px'}}
                  />
                  <Label>Dubia Ad Malam</Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label>Obat Di Rumah</Label>
                </Col>
                <Col md='9'>
                  <Input
                    id="obat_rumah"
                    type="text"
                    name="obat_rumah"
                    innerRef={register()as any}
                  />
                </Col>
              </Row>
              <Row className="mt-1">
                <Col>
                  <Label>Perawatan Mata Di Rumah</Label>
                </Col>
                <Col md='9'>
                  <Input
                    id="mata"
                    type="text"
                    name="mata"
                    innerRef={register()as any}
                  />
                </Col>
              </Row>
              <Row className="mt-1">
                <Col>
                  <Label>Posisi Khusus Selama Dirumah:</Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input
                    id="posisi_khusus_1"
                    type="radio"
                    name="posisi_khusus"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Posisi_Khusus === '1'}
                    innerRef={register('posisi_khusus')as any}
                  />
                  <Label>Merunduk (Face Down)</Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input
                    id="posisi_khusus_2"
                    type="radio"
                    name="posisi_khusus"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    value='2'
                    defaultChecked={data && data.form && data.form.Posisi_Khusus === '2'}
                    innerRef={register('posisi_khusus') as any}
                  />
                  <Label>Setengah Duduk (Semi Fowler)</Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input
                    id="posisi_khusus_3"
                    type="radio"
                    name="posisi_khusus"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    value='3'
                    defaultChecked={data && data.form && data.form.Posisi_Khusus === '3'}
                    innerRef={register('posisi_khusus')as any}
                  />
                  <Label>Tidak Ada Posisi Khusus</Label>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col>
                  <Label>Tanggal</Label>
                </Col>
                <Col md='9'>
                  <DateTimeInput
                    name='tanggal'
                    defaultValue='date'
                    md={1}
                    style={{ marginTop:'-25px'}}
                    {...{ register, errors }}
                  />
                </Col>
              </Row>

              <Row className="mt-2">
                <Col>
                  <div className="mt-2 d-flex justify-content-around my-0">
                    <Signature
                      label="Dokter"
                      type="picker"
                      additionalLabel={(data && data.form && data.form.Nama_TTD_Petugas) ? data.form.Nama_TTD_Petugas : ''}
                      initialImage={(data && data.form && data.form.Tanda_Tangan_Petugas && data.form.Tanda_Tangan_Petugas !== '') ? data.form.Tanda_Tangan_Petugas : undefined}
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
                      name="tanda_tangan_petugas"
                      innerRef={register()}
                      invalid={errors.tanda_tangan_petugas && true}
                    />
                    <Input
                      type="hidden"
                      name="id_ttd_petugas"
                      innerRef={register()}
                      invalid={errors.id_ttd_petugas && true}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="mt-2 d-flex justify-content-around my-0">
                    <Signature
                      label="Pasien"
                      type="drawer"
                      formName='informasi/general-consent'
                      component='general_consent_sign_01'
                      initialImage={(data && data.form && data.form.Tanda_Tangan_Pasien && data.form.Tanda_Tangan_Pasien !== '') ? data.form.Tanda_Tangan_Pasien : undefined}
                      onSigned={(image: string) => handlePatientSigned(image)} />
                    <Input
                      type="hidden"
                      name="tanda_tangan_pasien"
                      innerRef={register()}
                      invalid={errors.tanda_tangan_pasien && true} />
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
export default SummaryOfHospitalizedPatient;
