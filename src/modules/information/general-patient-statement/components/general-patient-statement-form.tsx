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
import { GeneralPatientStatementModel } from "../models/general-patient-statement.model";
import { IUpdateGeneralPatientStatementRequest, UpdateGeneralPatientStatementRequest } from "../requests/update-general-patient-statement.request";
import { GeneralPatientStatementService } from "../services";
import { fetchGeneralPatientStatement, fetchGeneralPatientStatementPdf } from "../stores/general-patient-statement.store";
import { PdfGeneralPatientStatementRequest } from "../requests/pdf-general-patient-statement-request";
import { DateTimeConverter } from "@src/shared/datetime-converter";

const GeneralPatientStatementForm = (props: { data: GeneralPatientStatementModel  }) => {
  const { data } =  props;

  const [processing, setProcessing] = useState(false);
  const dispatch = useAppDispatch();
  const {treatment} = useAppSelector(state => state.patient);
  const {doctors} = useAppSelector(state => state.doctor);
  const {nurses} = useAppSelector(state => state.nurse);
  const {officers} = useAppSelector(state => state.officer);
  const {pdf} = useAppSelector(state => state.generalPatientStatementStore);
  const [pdfData, setPdfData] = useState<any | undefined>(undefined);

  useEffect (() => {
    if (treatment) {
      dispatch(fetchGeneralPatientStatementPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'informasi_surat-pernyataan-umum'})));
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
      pasien_nama: treatment?.Pasien.Nama,
      pasien_umur: treatment?.Pasien.Umur,
      pasien_kelamin: treatment?.Pasien.Jenis_Kelamin,
      pasien_alamat: treatment?.Pasien.Alamat,
      tanggal_ttd: (data && data.form.Tanggal_TTD && data.form.Tanggal_TTD) ? data.form.Tanggal_TTD.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      id_ttd_petugas: data?.form?.ID_TTD_Petugas ?? '',
      id_ttd_saksi: data?.form?.ID_TTD_Saksi ?? '',
      ttd_pasien: data?.form?.TTD_Pasien ?? '',
      nik: data && data.form && data.form.NIK ? data.form?.NIK : treatment?.Pasien?.NIK,
      ttd_wali: data?.form?.TTD_Wali ?? '',
      ttd_petugas: data?.form?.TTD_Petugas ?? '',
      ttd_saksi: data?.form?.TTD_Saksi ?? '',
    },
  });

  const {isDirty} = formState;

  const handlePetugas = (image: SignatureModel) => {
    setValue('ttd_petugas', image.Signature);
    setValue('id_ttd_petugas', image.ID_Karyawan);
  }

  const handlePetugassaksi = (image: SignatureModel) => {
    setValue('ttd_saksi', image.Signature);
    setValue('id_ttd_saksi', image.ID_Karyawan);
  }

  const handlePatientSigned = (image: string) => {
    setValue('ttd_pasien', image);
  }

  const handleWaliSigned = (image: string) => {
    setValue('ttd_wali', image);
  }

  const handleProcessing = ()  => {
    setProcessing(true);
  }

  const handleSubmitForm = (value: IUpdateGeneralPatientStatementRequest) => {
    if (!treatment) {
      return;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateGeneralPatientStatementRequest.createFromJson({...value, ...appRequest});
    dispatch(handlePdf(undefined));
    GeneralPatientStatementService().update(params)
      .then(() => {
        GeneralPatientStatementService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            GeneralPatientStatementService().pdfv3(PdfGeneralPatientStatementRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, treatment))
              .then(() => {
                setProcessing(false);
                dispatch(fetchGeneralPatientStatementPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'informasi_surat-pernyataan-umum' })))
              })
          });
        setProcessing(false);
        dispatch(fetchGeneralPatientStatement(appRequest));
      });
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <Row>
          <Col>
            <Card className="border-1">
              <CardBody>
                <FormGroup>
                  <Row>
                    <Col>
                      <Label>Saya Yang Bertanda Tanda Tangan Dibawah Ini</Label>
                    </Col>
                  </Row>
                  <Row className="mt-1">
                    <Col md='3'>
                      <Label>Nama *</Label>
                    </Col>
                    <Col>
                      <Input
                        id='pasien_nama'
                        name="pasien_nama"
                        type="text"
                        innerRef={register() as any}
                        readOnly
                      />
                    </Col>
                  </Row>
                  <Row className="mt-1">
                    <Col md='3'>
                      <Label>Umur / Jenis Kelamin</Label>
                    </Col>
                    <Col>
                      <Input
                        id="pasien_umur"
                        name="pasien_umur"
                        type="text"
                        innerRef={register() as any}
                        readOnly
                      />
                    </Col>
                    <Col md='1'>
                      <Label>Tahun / </Label>
                    </Col>
                    <Col>
                      <Input
                        id="pasien_kelamin"
                        name="pasien_kelamin"
                        type="text"
                        // style={{width:'100px'}}
                        innerRef={register() as any}
                        readOnly
                      />
                    </Col>
                    <Col></Col>
                  </Row>
                  <Row className="mt-1">
                    <Col md='3'>
                      <Label>No. KTP / SIM / Identitas</Label>
                    </Col>
                    <Col>
                      <Input
                        id="nik"
                        name="nik"
                        type="text"
                        innerRef={register() as any}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-1">
                    <Col md='3'>
                      <Label>Alamat *</Label>
                    </Col>
                    <Col>
                      <Input
                        id="pasien_alamat"
                        name="pasien_alamat"
                        type="text"
                        readOnly
                        innerRef={register() as any}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-2" md='1'>
                    <Col>
                      <Label className="fw-bold">Dengan ini menyatakan dengan sesungguhnya bahwa saya adalah <b>Pasien Umum</b> bukan peserta BPJS Kesehatan / ASKES / KIS / JAMKESMAS. Seluruh biaya Pemeriksaaan maupun tindakan operasi 
                akan menjadi beban dan tanggung jawab saya / keluarga. Apabila dikemudian hari saya menunjukan kartu BPJS Kesehatan / ASKES / KIS / JAMKESMAS untuk pengembalian biaya pemeriksaan / tindakan operasi
                , maka hal tersebut tidak berlaku dan saya tidak akan menuntut Rumah Sakit Khusus Mata Smec</Label>
                      <Label className="mt-1 fw-bold">Demikian surat pernyataan ini saya buat dengan sebenar-benarnya dan saya tanda tangani secara sadar tanpa ada unsur paksaan dari pihak manapun.</Label>
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
                        formName='informasi/surat-pernyataan-pasien-umum'
                        component='surat-pernyataan-pasien-umum'
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
                        onSigned={(assigner: SignatureModel) => handlePetugassaksi(assigner)}
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
                        formName='informasi/surat-pernyataan-pasien-umum'
                        component='surat-pernyataan-pasien-umum-wali'
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
          </Col>
        </Row>
      </Form>
    </>
  )

}
export default GeneralPatientStatementForm;