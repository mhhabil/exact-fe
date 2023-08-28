import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useEffect, useState } from "react";
import { AppRequest } from "@src/shared/request";
import { FindPdfRequest } from "@src/shared/pdf";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { SubmitButton } from "@src/shared/button";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useForm } from "react-hook-form";
import { fetchIntegratedEducation, fetchIntegratedEducationPdf, handlePdf } from "@src/modules/inpatient/integrated-education/stores/Integrated-education.store";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { UpdateIntegratedEducationRequest } from "@src/modules/inpatient/integrated-education/requests";
import { PatientBpjsStatementModel } from "../models/patient-bpjs-statement.model";
import { IUpdatePatientBpjsStatementRequest, UpdatePatientBpjsStatementRequest } from "../requests/update-patient-bpjs-statement.request";
import { PatientBpjsStatementService } from "../services";
import { fetchPatientBpjsStatement, fetchPatientBpjsStatementPdf } from "../stores/patient-bpjs-statement.store";
import { PdfPatientBpjsStatementRequest } from "../requests/pdf-patient-bpjs-statement.request";
import { DateTimeConverter } from "@src/shared/datetime-converter";

const PatientBpjsStatementForm = (props: { data: PatientBpjsStatementModel  }) => {
  const { data } =  props;

  const [processing, setProcessing] = useState(false);
  const dispatch = useAppDispatch();
  const [defaultPattern, setDefaultPattern] = useState<any>();
  const {treatment} = useAppSelector(state => state.patient);
  const {doctors} = useAppSelector(state => state.doctor);
  const {nurses} = useAppSelector(state => state.nurse);
  const {officers} = useAppSelector(state => state.officer);
  const [penanggungJawab, setPenanggungJawab] = useState(data?.form?.Penanggung_Jawab === '2' ? '2' : '1');
  const {pdf} = useAppSelector(state => state.patientBpjsStatementStore);
  const [pdfData, setPdfData] = useState<any | undefined>(undefined);
  const [toggleReadOnly, setToggleReadOnly] = useState(!!((data.form.Penanggung_Jawab && data.form.Penanggung_Jawab === '1')))

  useEffect (() => {
    if (treatment) {
      dispatch(fetchIntegratedEducationPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'informasi_surat-pernyataan-bpjs'})));
    }
  }, [treatment, dispatch]);

  useEffect (() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  const {register, handleSubmit, errors, setValue, reset, formState } = useForm<any>({
    mode: 'onChange',
    resolver: yupResolver(UpdateIntegratedEducationRequest.schema()),
    defaultValues: {
      penanggung_jawab: data?.form?.Penanggung_Jawab ?? '1',
      tanggal_ttd: (data && data.form.Tanggal_TTD && data.form.Tanggal_TTD) ? data.form.Tanggal_TTD.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      id_ttd_petugas: data?.form?.ID_TTD_Petugas ?? '',
      id_ttd_saksi: data?.form?.ID_TTD_Saksi ?? '',
      ttd_pasien: data?.form?.TTD_Pasien ?? '',
      ttd_wali: data?.form?.TTD_Wali ?? '',
      ttd_petugas: data?.form?.TTD_Petugas ?? '',
      ttd_saksi: data?.form?.TTD_Saksi ?? '',
      nama_wali: data?.form?.Nama_Wali ?? '',
      umur_wali: data?.form?.Umur_Wali ?? '',
      jenis_kelamin_wali: data?.form?.Jenis_Kelamin_Wali ?? '',
      alamat_wali: data?.form?.Alamat_Wali ?? '',
      hubungan_wali: data.form?.Hubungan_Wali ?? '',
    },
  });

  useEffect(() => {
    if (data.form.Penanggung_Jawab) {
      if (data.form.Penanggung_Jawab === '1') {
        setToggleReadOnly(true);
        // setValue('nama_wali', treatment?.Pasien?.Nama);
        // setValue('umur_wali', treatment?.Pasien?.Umur);
        // setValue('jenis_kelamin_wali', treatment?.Pasien?.Jenis_Kelamin);
        // setValue('alamat_wali', treatment?.Pasien?.Alamat);
        // setValue('hubungan_wali', treatment?.Pasien?.No_BPJS);
      }
      if (data.form.Penanggung_Jawab === '2') {
        setToggleReadOnly(false);
        // setValue('nama_wali', treatment?.Wali?.Nama);
        // setValue('umur_wali', data?.form?.Umur_Wali);
        // setValue('jenis_kelamin_wali', data?.form?.Jenis_Kelamin_Wali);
        // setValue('alamat_wali', treatment?.Wali?.Alamat);
        // setValue('hubungan_wali', treatment?.Wali?.Hubungan)
      } 
    } else {
      setValue('nama_wali', treatment?.Pasien?.Nama);
      setValue('umur_wali', treatment?.Pasien?.Umur);
      setValue('jenis_kelamin_wali', treatment?.Pasien?.Jenis_Kelamin);
      setValue('alamat_wali', treatment?.Pasien?.Alamat);
      setValue('hubungan_wali', treatment?.Pasien?.No_BPJS);
      setToggleReadOnly(true)
    }
  }, [data])

  const {isDirty} = formState;

  const handlePetugas = (image: SignatureModel) => {
    setValue('ttd_petugas', image.Signature);
    setValue('id_ttd_petugas', image.ID_Karyawan);
  }

  const handlePatientSigned = (image: string) => {
    setValue('ttd_pasien', image);
  }

  const handleWaliSigned = (image: string) => {
    setValue('ttd_wali', image);
  }

  const handlePetugasSaksi = (image: SignatureModel) => {
    setValue('ttd_saksi', image.Signature);
    setValue('id_ttd_saksi', image.ID_Karyawan);
  }

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleSignRadio = (e: any) => {
    setPenanggungJawab(e.target.value);
    if (e.target.value === '2') {
      setToggleReadOnly(false)
      setValue('nama_wali', treatment?.Wali?.Nama);
      setValue('umur_wali', data?.form?.Umur_Wali);
      setValue('jenis_kelamin_wali', data?.form?.Jenis_Kelamin_Wali);
      setValue('alamat_wali', treatment?.Wali?.Alamat);
      setValue('hubungan_wali', treatment?.Wali?.Hubungan);
    } else {
      setToggleReadOnly(true);
      setValue('nama_wali', treatment?.Pasien?.Nama);
      setValue('umur_wali', treatment?.Pasien?.Umur);
      setValue('jenis_kelamin_wali', treatment?.Pasien?.Jenis_Kelamin);
      setValue('alamat_wali', treatment?.Pasien?.Alamat);
      setValue('hubungan_wali', treatment?.Pasien?.No_BPJS);
    }
  }

  const handleProcessing = ()  => {
    setProcessing(true);
  }

  const handleSubmitForm = (value: IUpdatePatientBpjsStatementRequest) => {
    if (!treatment) {
      return;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdatePatientBpjsStatementRequest.createFromJson({...value, ...appRequest});
    dispatch(handlePdf(undefined));
    PatientBpjsStatementService().update(params)
      .then(() => {
        PatientBpjsStatementService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            PatientBpjsStatementService().pdfv3(PdfPatientBpjsStatementRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, treatment))
              .then(() => {
                setProcessing(false);
                dispatch(fetchPatientBpjsStatementPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'informasi_surat-pernyataan-bpjs' })))
              })
          });
        setProcessing(false);
        dispatch(fetchPatientBpjsStatement(appRequest));
      });
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <Card className="border-1">
          <CardBody>
            <FormGroup>
              {
                penanggungJawab && (
                  <>
                    <Row>
                      <Col>
                        <Label>Saya Yang Bertanda Tanda Tangan Dibawah Ini</Label>
                      </Col>
                    </Row>
                    <Row>
                      <Col md='2'>
                        <Input
                          id="penanggung_jawab"
                          name="penanggung_jawab"
                          type="radio"
                          value='1'
                          onChange={(e) => handleSignRadio(e)}
                          innerRef={register({ required: true })}
                          defaultChecked={!!(data.form.Penanggung_Jawab && data.form.Penanggung_Jawab === '1')}
                        />{' '}
                        <Label>Pasien</Label>
                      </Col>
                      <Col>
                        <Input
                          id="penanggung_jawab"
                          name="penanggung_jawab"
                          type="radio"
                          value='2'
                          onChange={(e) => handleSignRadio(e)}
                          innerRef={register({ required: true })}
                          defaultChecked={!!(data.form.Penanggung_Jawab && data.form.Penanggung_Jawab === '2')}
                        />{' '}
                        <Label>Wali</Label>
                      </Col>
                    </Row>
                    <Row className="mt-1">
                      <Col md='3'>
                        <Label>Nama</Label>
                      </Col>
                      <Col>
                        <Input
                          id="nama_wali"
                          name="nama_wali"
                          type="text"
                          innerRef={register() as any}
                          readOnly={toggleReadOnly}
                        />
                      </Col>
                    </Row>
                    <Row className="mt-1">
                      <Col md='3'>
                        <Label>Umur / Jenis Kelamin</Label>
                      </Col>
                      <Col>
                        <Input
                          id="umur_wali"
                          name="umur_wali"
                          type="text"
                          innerRef={register() as any}
                          readOnly={toggleReadOnly}
                        />
                      </Col>
                      <Col md='1'>
                        <Label>Tahun  / </Label>
                      </Col>
                      <Col>
                        <Input
                          id="jenis_kelamin_wali"
                          name="jenis_kelamin_wali"
                          type="text"
                          innerRef={register() as any}
                          readOnly={toggleReadOnly}
                        />
                      </Col>
                    </Row>
                    <Row className="mt-1">
                      <Col md='3'>
                        <Label>Alamat</Label>
                      </Col>
                      <Col>
                        <Input
                          id="alamat_wali"
                          name="alamat_wali"
                          type="text"
                          innerRef={register() as any}
                          readOnly={toggleReadOnly}
                        />
                      </Col>
                    </Row>
                    <Row className="mt-1">
                      <Col md='3'>
                        <Label>{toggleReadOnly ? 'No. Kartu BPJS' : 'Hubungan'}</Label>
                      </Col>
                      <Col>
                        <Input
                          id="hubungan_wali"
                          name="hubungan_wali"
                          type="text"
                          innerRef={register() as any}
                          readOnly={toggleReadOnly}
                        />
                      </Col>
                    </Row>
                  </>
                )
              }
              <Row className="mt-1">
                <Col>
                  <Label>Kepada saya telah dijelaskan bawah :</Label>
                  <Label>1. Rumah Sakit Mata SMEC, melayani pemeriksaan / perawatan / pengobatan tindakan operasi bagi
                        peserta BPJS Kesehatan. Jam operasional pelayanan BPJS Kesehatan yaitu: 
                  <br />- SENIN s.d JUMAT : 08:00 WIB - 13.00 WIB
                  <br />- SABTU: 08:00 WIB - 12:00 WIB
                  <br />2. Kartu BPJS Kesehatan dapat digunakan diluar jam operasional, Apabila dalam kondisi Emergensi
                        dan Kartu kartu kepersertaan BPJS Kesehatan masih aktif.
                  <br />3. Kondisi Emergensi dapat dibuktikan setelah dilakukan pemeriksaan fisik dan dinyatakan Emergensi 
                        Oleh Dokter.
                  <br />4. Apabila setelah dilakukan pemeriksaan fisik dan dinyatakan bukan termasuk dalam kategori emergensi,
                      maka seluruh biaya pemeriksaan / pengobatan akan menjadi beban dan tanggung jawab saya / keluarga saya dan
                      segala biaya yang telah dikeluarkan tidak dapat di klaim ke pihak BPJS Kesehatan.
                  </Label>
                  <Label>Demikian Surat pernyataan ini saya buat dengan sebenar benarnya dan saya tanda tangani secara sadar 
                        tanpa ada unsur paksaan dari pihak manapun.
                  </Label>
                </Col>
              </Row>
            </FormGroup>
          </CardBody>
        </Card>
        <Card className="border-1">
          <CardBody>
            <Row>
              <Col md='3'>
                <Label>Tanggal Tanda Tangan *</Label>
              </Col>
              <Col>
                <Input
                  id="tanggal_ttd"
                  name="tanggal_ttd"
                  type="datetime-local"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card className="border-1">
          <CardBody>
            <Row>
              <Col>
                <div className="mt-2 d-flex justify-content-around my-0">
                  <Signature
                    label="Perawat Yang Bertugas"
                    type="picker"
                    additionalLabel={(data && data.form && data.form.Nama_TTD_Petugas) ? data.form.Nama_TTD_Petugas : ''}
                    initialImage={(data && data.form && data.form.TTD_Petugas && data.form.TTD_Petugas !== '') ? data.form.TTD_Petugas : undefined}
                    persons={officers}
                    onSigned={(assigner: SignatureModel) => handlePetugas(assigner)}
                  />
                  <Input
                    type="hidden"
                    name='ttd_petugas'
                    innerRef={register()}
                    invalid={errors.ttd_petugas && true}
                  />
                  <Input
                    type="hidden"
                    name='id_ttd_petugas'
                    innerRef={register()}
                    invalid={errors.id_ttd_petugas && true}
                  />
                </div>
              </Col>
              <Col>
                <div className="mt-2 d-flex justify-content-around my-0">
                  <Signature
                    label="Yang Membuat Pernyataan"
                    type="drawer"
                    formName='informasi/surat-pernyataan-pasien-bpjs'
                    component='surat_pernyataan_pasien_bpjs_pasien'
                    initialImage={(data && data.form && data.form.TTD_Pasien && data.form.TTD_Pasien !== '') ? data.form.TTD_Pasien : undefined}
                    onSigned={(image: string) => handlePatientSigned(image)} />
                  <Input
                    type="hidden"
                    name="ttd_pasien"
                    innerRef={register()}
                    invalid={errors.ttd_pasien && true} />
                </div>
              </Col>
            </Row>
            <Row className="mt-1">
              <Col>
                <Label className="mt-2 d-flex justify-content-around my-0">Diketahui Oleh</Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="mt-2 d-flex justify-content-around my-0">
                  <Signature
                    label="Saksi Dari Rumah Sakit"
                    type="picker"
                    additionalLabel={(data && data.form && data.form.Nama_TTD_Saksi) ? data.form.Nama_TTD_Saksi : ''}
                    initialImage={(data && data.form && data.form.TTD_Saksi && data.form.TTD_Saksi !== '') ? data.form.TTD_Saksi : undefined}
                    persons={officers}
                    onSigned={(assigner: SignatureModel) => handlePetugasSaksi(assigner)}
                  />
                  <Input
                    type="hidden"
                    name='ttd_saksi'
                    innerRef={register()}
                    invalid={errors.ttd_saksi && true}
                  />
                  <Input
                    type="hidden"
                    name='id_ttd_saksi'
                    innerRef={register()}
                    invalid={errors.id_ttd_saksi && true}
                  />
                </div>
              </Col>
              <Col>
                <div className="mt-2 d-flex justify-content-around my-0">
                  <Signature
                    label="Saksi Dari Keluarga Pasien"
                    type="drawer"
                    formName='informasi/surat-pernyataan-pasien-bpjs'
                    component='surat_pernyataan_pasien_bpjs_wali'
                    initialImage={(data && data.form && data.form.TTD_Wali && data.form.TTD_Wali !== '') ? data.form.TTD_Wali : undefined}
                    onSigned={(image: string) => handleWaliSigned(image)} />
                  <Input
                    type="hidden"
                    name="ttd_wali"
                    innerRef={register()}
                    invalid={errors.ttd_wali && true} />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card className="border-1">
          <CardBody>
            <FormGroup className="d-flex mb-0 justify-content-center">
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
          </CardBody>
        </Card>
      </Form>
    </>
  )

}
export default PatientBpjsStatementForm;