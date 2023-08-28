import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from "reactstrap";
import { fetchTriageForm, fetchTriageFormPdf, handlePdf } from "@modules/emergency-room/triage-form/stores/triage-form.store";
import {useEffect, useState} from "react";
import { AppRequest } from "@src/shared/request";
import { DateTimeConverter } from "@src/shared/datetime-converter";
import { FindPdfRequest } from '@shared/pdf';
import { ITriageForm } from "@modules/emergency-room/triage-form/models/triage-form.model";
import InspectionSection from '@modules/emergency-room/triage-form/components/inspection-section';
import { PdfTriageFormRequest } from '@modules/emergency-room/triage-form/requests/pdf-triage-form.request';
import { SubmitButton } from "@src/shared/button";
import { TriageFormService } from "@modules/emergency-room/triage-form/services";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useForm } from "react-hook-form";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";

const TriageForm = (props: { data: ITriageForm }) => {
  const { data } = props;
  const dispatch = useAppDispatch();
  const { treatment } = useAppSelector(state => state.patient);
  const [processing, setProcessing] = useState(false);
  const [pdfData, setPdfData] = useState<any>(undefined);
  const { pdf } = useAppSelector(state => state.triageForm);
  const { nurses } = useAppSelector(state => state.nurse);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchTriageFormPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'formulir-triase' })));
    }
  }, [treatment, dispatch])

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  const { register, handleSubmit, getValues, setValue, errors } = useForm({
    mode: 'onChange',
    defaultValues: {
      'waktu-kedatangan': (data && data.form && data.form.Waktu_Kedatangan) ? data.form.Waktu_Kedatangan.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      'cara-datang': data.form.Cara_Datang ?? '',
      'jenis-kasus-trauma': data.form.Jenis_Kasus_Trauma ?? '',
      'kesadaran-kategori': data.form.Kesadaran_Kategori ?? '',
      'jalan-nafas-kategori': data.form.Jalan_Nafas_Kategori ?? '',
      'pernafasan-kategori': data.form.Pernafasan_Kategori ?? '',
      'sirkulasi-kategori': data.form.Sirkulasi_Kategori ?? '',
      'tanda-lain-kategori': data.form.Tanda_Lain_Kategori ?? '',
      'respon-time': data.form.Respon_Time ?? '',
      'jenis-emergency': data.form.Jenis_Emergency ?? '',
      'warna-triase': data.form.Warna_Triase ?? '',
      'kesadaran-1-gcs-9': data.form.Kesadaran_1_GCS_9 ?? '',
      'kesadaran-1-kejang': data.form.Kesadaran_1_Kejang ?? '',
      'kesadaran-1-tidak-ada-respon': data.form.Kesadaran_1_Tidak_Ada_Respon ?? '',
      'jalan-nafas-1-sumbatan': data.form.Jalan_Nafas_1_Sumbatan ?? '',
      'pernafasan-1-hipoventilasi': data.form.Pernafasan_1_Hipoventilasi ?? '',
      'pernafasan-1-bradipnoe': data.form.Pernafasan_1_Bradipnoe ?? '',
      'pernafasan-1-sianosis': data.form.Pernafasan_1_Sianosis ?? '',
      'sirkulasi-1-henti-jantung': data.form.Sirkulasi_1_Henti_Jantung ?? '',
      'sirkulasi-1-nadi-tidak-teraba': data.form.Sirkulasi_1_Nadi_Tidak_Teraba ?? '',
      'sirkulasi-1-akral-dingin': data.form.Sirkulasi_1_Akral_Dingin ?? '',
      'tanda-lain-1-threatening': data.form.Tanda_Lain_1_Threatening ?? '',
      'kesadaran-2-gcs-9-12': data.form.Kesadaran_2_GCS_9_12 ?? '',
      'kesadaran-2-hemiparesis': data.form.Kesadaran_2_Hemiparesis ?? '',
      'kesadaran-2-gelisah': data.form.Kesadaran_2_Gelisah ?? '',
      'kesadaran-2-nyeri-dada': data.form.Kesadaran_2_Nyeri_Dada ?? '',
      'jalan-nafas-2-bebas': data.form.Jalan_Nafas_2_Bebas ?? '',
      'jalan-nafas-2-ancaman': data.form.Jalan_Nafas_2_Ancaman ?? '',
      'pernafasan-2-takipnoe': data.form.Pernafasan_2_Takipnoe ?? '',
      'pernafasan-2-mengi': data.form.Pernafasan_2_Mengi ?? '',
      'sirkulasi-2-nadi-teraba-lemah': data.form.Sirkulasi_2_Nadi_Teraba_Lemah ?? '',
      'sirkulasi-2-bradikardi': data.form.Sirkulasi_2_Bradikardi ?? '',
      'sirkulasi-2-takikardi': data.form.Sirkulasi_2_Takikardi ?? '',
      'sirkulasi-2-pucat': data.form.Sirkulasi_2_Pucat ?? '',
      'sirkulasi-2-akral-dingin': data.form.Sirkulasi_2_Akral_Dingin ?? '',
      'sirkulasi-2-crt-2-detik': data.form.Sirkulasi_2_CRT_2_Detik ?? '',
      'tanda-lain-2-trauma-tembus': data.form.Tanda_Lain_2_Trauma_Tembus ?? '',
      'tanda-lain-2-trauma-kimia': data.form.Tanda_Lain_2_Trauma_Kimia ?? '',
      'tanda-lain-2-penurunan-visus': data.form.Tanda_Lain_2_Penurunan_Visus ?? '',
      'tanda-lain-2-nyeri-mendadak': data.form.Tanda_Lain_2_Nyeri_Mendadak ?? '',
      'kesadaran-3-gcs-12-15': data.form.Kesadaran_3_GCS_12_15 ?? '',
      'kesadaran-3-apatis': data.form.Kesadaran_3_Apatis ?? '',
      'kesadaran-3-samnolen': data.form.Kesadaran_3_Samnolen ?? '',
      'kesadaran-3-bebas': data.form.Kesadaran_3_Bebas ?? '',
      'jalan-nafas-3-bebas': data.form.Jalan_Nafas_3_Bebas ?? '',
      'pernafasan-3-normal': data.form.Pernafasan_3_Normal ?? '',
      'pernafasan-3-mengi': data.form.Pernafasan_3_Mengi ?? '',
      'pernafasan-3-sesak': data.form.Pernafasan_3_Sesak ?? '',
      'sirkulasi-3-nadi-kuat': data.form.Sirkulasi_3_Nadi_Kuat ?? '',
      'sirkulasi-3-takikardia': data.form.Sirkulasi_3_Takikardia ?? '',
      'sirkulasi-3-tds-160': data.form.Sirkulasi_3_TDS_160 ?? '',
      'sirkulasi-3-tdd-100': data.form.Sirkulasi_3_TDD_100 ?? '',
      'tanda-lain-3-visus-abnormal': data.form.Tanda_Lain_3_Visus_Abnormal ?? '',
      'tanda-lain-3-nyeri-sedang': data.form.Tanda_Lain_3_Nyeri_Sedang ?? '',
      'kesadaran-4-gcs-15': data.form.Kesadaran_4_GCS_15 ?? '',
      'jalan-nafas-4-bebas': data.form.Jalan_Nafas_4_Bebas ?? '',
      'pernafasan-4-normal': data.form.Pernafasan_4_Normal,
      'sirkulasi-4-nadi-kuat': data.form.Sirkulasi_4_Nadi_Kuat ?? '',
      'sirkulasi-4-nadi-normal': data.form.Sirkulasi_4_Nadi_Normal ?? '',
      'sirkulasi-4-tds-100-120': data.form.Sirkulasi_4_TDS_100_120 ?? '',
      'sirkulasi-4-tdd-70-90': data.form.Sirkulasi_4_TDD_70_90 ?? '',
      'tanda-lain-4-visus-normal': data.form.Tanda_Lain_4_Visus_Normal ?? '',
      'tanda-lain-4-nyeri-mata': data.form.Tanda_Lain_4_Nyeri_Mata ?? '',
      'kesadaran-5-gcs-15': data.form.Kesadaran_5_GCS_15 ?? '',
      'jalan-nafas-5-bebas': data.form.Jalan_Nafas_5_Bebas ?? '',
      'pernafasan-5-normal': data.form.Pernafasan_5_Normal ?? '',
      'sirkulasi-5-nadi-kuat': data.form.Sirkulasi_5_Nadi_Kuat ?? '',
      'sirkulasi-5-nadi-normal': data.form.Sirkulasi_5_Nadi_Normal ?? '',
      'sirkulasi-5-tds-100-120': data.form.Sirkulasi_5_TDS_100_120 ?? '',
      'sirkulasi-5-tdd-70-90': data.form.Sirkulasi_5_TDD_70_90 ?? '',
      'tanda-lain-5-visus-normal': data.form.Tanda_Lain_5_Visus_Normal ?? '',
      'tanda-lain-5-tidak-ada-nyeri': data.form.Tanda_Lain_5_Tidak_Ada_Nyeri ?? '',
      'kesadaran-6-gcs-0': data.form.Kesadaran_6_GCS_0 ?? '',
      'kesadaran-6-tanda-kehidupan': data.form.Kesadaran_6_Tanda_Kehidupan ?? '',
      'jalan-nafas-6-tidak-ada': data.form.Jalan_Nafas_6_Tidak_Ada ?? '',
      'pernafasan-6-minus': data.form.Pernafasan_6_Minus ?? '',
      'sirkulasi-6-nadi-minus': data.form.Sirkulasi_6_Nadi_Minus ?? '',
      'sirkulasi-6-frekuensi-nadi-minus': data.form.Sirkulasi_6_Frekuensi_Nadi_Minus ?? '',
      'sirkulasi-6-tds-minus': data.form.Sirkulasi_6_TDS_Minus ?? '',
      'tanda-lain-6-visus-minus': data.form.Tanda_Lain_6_Visus_Minus ?? '',
      ttd_perawat: data.form.TTD_Perawat ?? '',
      id_perawat: data.form.ID_Perawat ?? '',
    },
  });

  const handleDoctorSigned = (image: SignatureModel) => {
    setValue('ttd_perawat', image.Signature);
    setValue('id_perawat', image.ID_Karyawan);
  }

  const handleSubmitForm = (value: any) => {
    if (!treatment) {
      return;
    }
    setProcessing(true)
    const appRequest = AppRequest.createFromStore(treatment);
    TriageFormService().update({ ...appRequest, ...value, 'waktu-kedatangan': DateTimeConverter.convertToNormalDatetime(value['waktu-kedatangan']) })
      .then(() => {
        TriageFormService().show(appRequest).then((response) => {
          if (response && response.data && response.data.data) {
            dispatch(handlePdf(undefined));
            TriageFormService().pdfv3(PdfTriageFormRequest.createPdfRequest({...response.data.data, nomor_mr: appRequest.nomor_mr, umur_lengkap: treatment?.Pasien?.Umur_Lengkap}, appRequest.emr_id))
              .then(() => {
                setProcessing(false);
                dispatch(fetchTriageFormPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'formulir-triase' })));
                return true;
              })
          }
        })
        dispatch(fetchTriageForm(appRequest));
        setProcessing(false);
      })
      .catch((err) => console.log(err));
  }
  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <FormGroup row className="align-items-center mt-2">
        <Col md='2' className="align-items-center">
          <Label>Tanggal & Jam Kedatangan*</Label>
        </Col>
        <Col md='4'>
          <Input
            type="datetime-local"
            id='waktu-kedatangan'
            defaultValue='waktu-kedatangan'
            name='waktu-kedatangan'
            innerRef={register({ required: true })}
            invalid={errors['waktu-kedatangan'] && true}
          />
        </Col>
      </FormGroup>
      <FormGroup row className="align-items-center">
        <Col md='2'>
          <Label>Cara Datang*</Label>
        </Col>
        <Col>
          <Input
            type="radio"
            className="me-1"
            name="cara-datang"
            defaultChecked={data?.form?.Cara_Datang === 'Sendiri'}
            value='Sendiri'
            innerRef={register({ required: true })}
          />
          <Label>Sendiri</Label>
        </Col>
        <Col>
          <Input
            type="radio"
            className="me-1"
            name="cara-datang"
            value='Diantar keluarga / teman'
            defaultChecked={data?.form?.Cara_Datang === 'Diantar keluarga / teman'}
            innerRef={register({ required: true })}
          />
          <Label>Diantar Keluarga / Teman</Label>
        </Col>
        <Col>
          <Input
            type="radio"
            className="me-1"
            name="cara-datang"
            value='Diantar polisi'
            defaultChecked={data?.form?.Cara_Datang === 'Diantar polisi'}
            innerRef={register({ required: true })}
          />
          <Label>Diantar Polisi</Label>
        </Col>
        <Col>
          <Input
            type="radio"
            className="me-1"
            name="cara-datang"
            value='Diantar masyarakat'
            defaultChecked={data?.form?.Cara_Datang === 'Diantar masyarakat'}
            innerRef={register({ required: true })}
          />
          <Label>Diantar Masyarakat</Label>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md='2'>
          <Label>Jenis Kasus*</Label>
        </Col>
        <Col>
          <Input
            type="radio"
            className="me-1"
            name="jenis-kasus-trauma"
            value='Non Trauma'
            defaultChecked={data?.form?.Jenis_Kasus_Trauma === 'Non Trauma'}
            innerRef={register({ required: true })}
          />
          <Label>Non Trauma</Label>
        </Col>
        <Col>
          <Input
            type="radio"
            className="me-1"
            name="jenis-kasus-trauma"
            value='Trauma'
            defaultChecked={data?.form?.Jenis_Kasus_Trauma === 'Trauma'}
            innerRef={register({ required: true })}
          />
          <Label>Trauma</Label>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md='2'></Col>
        <Col>
          <Input
            type="radio"
            className="me-1"
            name="jenis-kasus-kecelakaan"
            value='Kecelakaan Air'
            defaultChecked={data?.form?.Jenis_Kasus_Kecelakaan === 'Kecelakaan Air'}
            innerRef={register({ required: true })}
          />
          <Label>Kecelakaan Air</Label>
        </Col>
        <Col>
          <Input
            type="radio"
            className="me-1"
            name="jenis-kasus-kecelakaan"
            value='Kecelakaan Kerja'
            defaultChecked={data?.form?.Jenis_Kasus_Kecelakaan === 'Kecelakaan Kerja'}
            innerRef={register({ required: true })}
          />
          <Label>Kecelakaan Kerja</Label>
        </Col>
        <Col>
          <Input
            type="radio"
            className="me-1"
            name="jenis-kasus-kecelakaan"
            value='Kecelakaan Lalu Lintas'
            defaultChecked={data?.form?.Jenis_Kasus_Kecelakaan === 'Kecelakaan Lalu Lintas'}
            innerRef={register({ required: true })}
          />
          <Label>Kecelakaan Lalu Lintas</Label>
        </Col>
        <Col>
          <Input
            type="radio"
            className="me-1"
            name="jenis-kasus-kecelakaan"
            value='Kecelakaan Rumah Tangga'
            defaultChecked={data?.form?.Jenis_Kasus_Kecelakaan === 'Kecelakaan Rumah Tangga'}
            innerRef={register({ required: true })}
          />
          <Label>Kecelakaan Rumah Tangga</Label>
        </Col>
      </FormGroup>
      <InspectionSection
        {...{ data, register, setValue, getValues, errors }}
      />
      <FormGroup>
        <Row className="mt-2">
          <Col>
            <Signature
              label="Perawat"
              type="picker"
              additionalLabel={(data && data.form && data.form.Nama_Perawat && data.form.Nama_Perawat !== '') ? data.form.Nama_Perawat : undefined}
              initialImage={(data && data.form && data.form.TTD_Perawat && data.form.TTD_Perawat !== '') ? data.form.TTD_Perawat : undefined}
              persons={nurses}
              onSigned={(assigner: SignatureModel) => handleDoctorSigned(assigner)}
            />
            <Input
              type="hidden"
              name="id_perawat"
              innerRef={register()}
              invalid={errors.id_perawat && true}
            />
            <Input
              type="hidden"
              name="ttd_perawat"
              innerRef={register()}
              invalid={errors.ttd_perawat && true}
            />
          </Col>
        </Row>
      </FormGroup>
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
      <FormGroup className='form-group mt-0' row>
        <div className='d-flex justify-content-center align-items-center'>
          <Label className='me-1'>Terakhir Disimpan:</Label>
          {/* <Label>{(data && data.form && data.form.Updated_At) ? data.form.Updated_At : '' }</Label> */}
          <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
        </div>
      </FormGroup>
    </Form>
  )
}

export default TriageForm;
