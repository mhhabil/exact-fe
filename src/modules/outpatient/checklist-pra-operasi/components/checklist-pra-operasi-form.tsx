import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { useEffect, useState } from "react";
import ToolInspection from "@src/shared/tool-inspection/tool-inspection";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { SubmitButton } from '@src/shared/button';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { AppRequest } from '@src/shared/request';
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import {FindPdfRequest, IPdfModel} from '@shared/pdf';
import InformConsentBedah from './inform-consent-bedah';
import BloodPreparation from './blood-preparation';
// import { ChecklistPraOperasiModel } from '../../../operating-room/checklist-pra-operasi/models/checklist-pra-operasi-models';
import { ChecklistPraOperasiModel } from '../models/checklist-pra-operasi-models';
import { fetchChecklistPraOperasi, fetchChecklistPraOperasiPdf, handlePdf } from '../stores/checklist-pra-operasi.store';
import { IUpdateChecklistPraOperasi, UpdateChecklistPraOperasi } from '../requests';
import { ChecklistPraOperasiService } from '../services';
import { PdfChecklistPraOperasiRequest } from '../requests/pdf-checklist-pra-operasi';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const ChecklistPraOperasi = (props: {data:ChecklistPraOperasiModel}) => {
  const { data } = props;

  const dispatch = useAppDispatch();
  // const [signaturePerson, setSignaturePerson] = useState(data?.form?.Tanda_Tangan === 'Wali' ? '2' : '1');
  const { nurses } = useAppSelector(state => state.nurse);
  const { doctors } = useAppSelector(state => state.doctor);
  const { officers } = useAppSelector(state => state.officer);
  const [processing, setProcessing] = useState<boolean | undefined>(false);
  const { treatment } = useAppSelector(state => state.patient);
  const [defaultPattern, setDefaultPattern] = useState<any>();
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const { pdf } = useAppSelector(state => state.checklistPraOperasiStore);
  const [izinSterilisasi, setIzinSterilisasi] = useState<string>(data && data.form && data.form.Izin_Sterilisasi ? data.form.Izin_Sterilisasi : '1')
  const [gelangPengenal, setGelangPengenal] = useState<string>(data && data.form && data.form.Gelang_Pengenal ? data.form.Gelang_Pengenal : '1')

  useEffect(() => {
    if (treatment) {
      dispatch(fetchChecklistPraOperasiPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-jalan_checklist-pra-operasi' })))
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  const handlePerawatPengantar = (image: SignatureModel) => {
    setValue("tanda-tangan-perawat-pengantar", image.Signature);
    setValue("id-tanda-tangan-perawat-pengantar", image.ID_Karyawan);
  }

  const handlePerawatPenerima = (image: SignatureModel) => {
    setValue("tanda-tangan-perawat-penerima", image.Signature);
    setValue("id-tanda-tangan-perawat-penerima", image.ID_Karyawan);
  }

  const handleOfficerSigned = (image: SignatureModel) => {
    setValue("tanda-tangan-kepala-bedah", image.Signature);
    setValue("id-tanda-tangan-kepala-bedah", image.ID_Karyawan);
  }

  useEffect(() => {
    if (doctors) {
      setValue('dokter_id', data.form.Dokter_Anestesi_Id ? data.form.Dokter_Anestesi_Id : '')
    }
  }, [doctors])

  const { register, handleSubmit, errors, reset, setValue, control } = useForm({
    mode: 'onChange',
    // resolver: yupResolver(UpdateNursingInitialAssessmentRequest.schema()),
    defaultValues: {
      bb: data && data.form && data.form.Bb && data.form.Bb !== '' ? data.form.Bb : data?.tanda_vital?.Bb !== '' ? data?.tanda_vital?.Bb : '',
      tb: data && data.form && data.form.Tb && data.form.Tb !== '' ? data.form.Tb : data?.tanda_vital?.Tb !== '' ? data?.tanda_vital?.Tb : '',
      td: data && data.form && data.form.Td && data.form.Td !== '' ? data.form.Td : data?.tanda_vital?.Td !== '' ? data?.tanda_vital?.Td : data?.asesmen?.Vital_Tekanan_Darah !== '' ? data?.asesmen?.Vital_Tekanan_Darah : data?.ews?.Td !== '' ? data?.ews?.Td : '',
      nadi: data && data.form && data.form.Nadi && data.form.Nadi !== '' ? data.form.Nadi : data?.tanda_vital?.Nadi !== '' ? data?.tanda_vital?.Nadi : data?.asesmen?.Vital_Denyut_Nadi !== '' ? data?.asesmen?.Vital_Denyut_Nadi : data?.ews?.Nadi !== '' ? data?.ews?.Nadi : '',
      rr: data && data.form && data.form.Rr && data.form.Rr !== '' ? data.form.Rr : data?.tanda_vital?.Rr !== '' ? data?.tanda_vital?.Rr : data?.asesmen?.Vital_Respiratory_Rate !== '' ? data?.asesmen?.Vital_Respiratory_Rate : data?.ews?.Rr !== '' ? data?.ews?.Rr : '',
      t: data && data.form && data.form.T && data.form.T !== '' ? data.form.T : data?.tanda_vital?.Suhu !== '' ? data?.tanda_vital?.Suhu : data?.asesmen?.Vital_Suhu !== '' ? data?.asesmen?.Vital_Suhu : data?.ews?.Suhu_Tubuh !== '' ? data?.ews?.Suhu_Tubuh : '',
      sat: data?.form?.Sat ?? '',
      inform_consent_bedah: data?.form?.Inform_Consent_Bedah ?? '',
      inform_consent: data?.form?.Inform_Consent ?? '',
      hamil: data?.form?.Hamil ?? '',
      izin_sterilisasi: data?.form?.Izin_Sterilisasi ?? '',
      gelang_pengenal: data?.form?.Gelang_Pengenal ??  '',
      gelang_alergi: data?.form?.Gelang_Alergi ?? '',
      implant: data?.form?.Implant ?? '',
      ekg: data?.form?.Ekg ?? '',
      foto_fundus: data?.form?.Foto_Fundus ?? '',
      usg_mata: data?.form?.Usg_Mata ?? '',
      biometri: data?.form?.Biometri ?? '',
      makula: data?.form?.Makula ?? '',
      laboratorium: data?.form?.Laboratorium ?? '',
      radiologi: data?.form?.Radiologi ?? '',
      resiko_jatuh: data?.form?.Resiko_Jatuh ?? '',
      jenis_pasien: data?.form?.Jenis_Pasien ?? '',
      puasa: data?.form?.Puasa ?? '',
      puasa_keterangan: data?.form?.Puasa_Keterangan ?? '',
      anestesi: data?.form?.Anestesi ?? '',
      dokter_id: data?.form?.Dokter_Anestesi_Id ?? '',
      alergi: data?.form?.Alergi ?? '',
      alergi_keterangan: data?.form?.Alergi_Keterangan ?? '',
      pre_medikasi: data?.form?.Pre_Medikasi ?? '',
      gigi_palsu: data?.form?.Gigi_Palsu ?? '',
      lensa: data?.form?.Lensa ?? '',
      perhiasan: data?.form?.Perhiasan ?? '',
      rambut: data?.form?.Rambut ?? '',
      kosmetik: data?.form?.Kosmetik ?? '',
      kandung_kemih: data?.form?.Kandung_Kemih ?? '',
      gliserin: data?.form?.Gliserin ?? '',
      pembedahan: data?.form?.Pembedahan ?? '',
      persiapan_darah: data?.form?.Persiapan_Darah ?? '',
      persiapan_darah_keterangan: data?.form?.Persiapan_Darah_Keterangan ?? '',
      golongan_darah: data?.form?.Golongan_Darah ?? '',
      rhesus_fektor: data?.form?.Rhesus_Fektor ?? '',
      kondisi_kulit_id: data?.form?.Kondisi_Kulit_Id ?? '',
      jenis_cairan: data?.form?.Jenis_Cairan ?? '',
      cairan_masuk: data?.form?.Cairan_Masuk ?? '',
      jam_mulai: data?.form?.Jam_Mulai ?? '',
      needle_no: data?.form?.Needle_No ?? '',
      lokasi: data?.form?.Lokasi ?? '',
      infus_dipasang: data?.form?.Infus_Dipasang ?? '',
      pemeriksaan_lainnya: data?.form?.Pemeriksaan_Lainnya ?? '',
      catatan_perawat: data?.form?.Catatan_Perawat ?? '',
      tanggal: data?.form?.Tanggal ??  '',
      "tanda-tangan-perawat-pengantar": data?.form?.Tanda_Tangan_Perawat_Pengantar ?? '',
      "id-tanda-tangan-perawat-pengantar": data?.form?.ID_Tanda_Tangan_Perawat_Pengantar ?? '',
      "tanda-tangan-perawat-penerima": data?.form?.Tanda_Tangan_Perawat_Penerima ?? '',
      "id-tanda-tangan-perawat-penerima": data?.form?.ID_Tanda_Tangan_Perawat_Penerima ?? '',
      "tanda-tangan-kepala-bedah": data?.form?.Tanda_Tangan_Kepala_Bedah ?? '',
      "id-tanda-tangan-kepala-bedah": data?.form?.ID_Tanda_Tangan_Kepala_Bedah ?? '',
    },
  })

  const handleProcessing = () => {
    setProcessing(true);
  }

  const handleSubmitForm = (value: IUpdateChecklistPraOperasi) => {
    if (!treatment) {
      return;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateChecklistPraOperasi.createFromJson({...value, ...appRequest});
    dispatch(handlePdf(undefined));
    ChecklistPraOperasiService().update(params)
      .then(() => {
        ChecklistPraOperasiService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            ChecklistPraOperasiService().pdfv3(PdfChecklistPraOperasiRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
              .then(() => {
                setProcessing(false);
                dispatch(fetchChecklistPraOperasiPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-jalan_checklist-pra-operasi' })))
              })
          });
        setProcessing(false);
        dispatch(fetchChecklistPraOperasi(appRequest));
      });
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        {/*yang bertanda tangan dibawah ini sampai nomor 1*/}
        <Row className="mt-2">
          <Col>
            <Input
              type="checkbox"
              name="selectAll"
              id="select-all"
              onChange={(e) => {
                if (e.target.checked) {
                  setDefaultPattern('1');
                } else {
                  setDefaultPattern('0');
                }
              }}
              className="me-1"
            />
            <Label>Checklist Default</Label>
          </Col>
        </Row>
        <InformConsentBedah
          data={data}
          defaultPattern={defaultPattern}
          {...{ register, errors, setValue }}
        />

        <BloodPreparation
          data={data}
          {...{ register, errors, setValue }}
        />

        <Row className="mt-2">
          <Col>
            <div className="d-flex justify-content-around my-0">
              <Signature
                label="Perawat Pengantar"
                type="picker"
                additionalLabel={(data && data.form && data.form.Nama_Perawat_Pengantar) ? data.form.Nama_Perawat_Pengantar : ''}
                initialImage={(data && data.form && data.form.Tanda_Tangan_Perawat_Pengantar && data.form.Tanda_Tangan_Perawat_Pengantar !== '') ? data.form.Tanda_Tangan_Perawat_Pengantar : undefined}
                persons={nurses}
                onSigned={(assigner: SignatureModel) => handlePerawatPengantar(assigner)}
              />
              <Input
                type="hidden"
                name="tanda-tangan-perawat-pengantar"
                innerRef={register()}
                invalid={errors['tanda-tangan-perawat-pengantar'] && true}
              />
              <Input
                type="hidden"
                name="id-tanda-tangan-perawat-pengantar"
                innerRef={register()}
                invalid={errors['id-tanda-tangan-perawat-pengantar'] && true}
              />
            </div>
          </Col>

          <Col>
            <div className="d-flex justify-content-around my-0">
              <Signature
                label="Perawat Penerima"
                type="picker"
                additionalLabel={(data && data.form && data.form.Nama_Perawat_Penerima) ? data.form.Nama_Perawat_Penerima : ''}
                initialImage={(data && data.form && data.form.Tanda_Tangan_Perawat_Penerima && data.form.Tanda_Tangan_Perawat_Penerima !== '') ? data.form.Tanda_Tangan_Perawat_Penerima : undefined}
                persons={nurses}
                onSigned={(assigner: SignatureModel) => handlePerawatPenerima(assigner)}
              />
              <Input
                type="hidden"
                name="tanda-tangan-perawat-penerima"
                innerRef={register()}
                invalid={errors['tanda-tangan-perawat-penerima'] && true}
              />
              <Input
                type="hidden"
                name="id-tanda-tangan-perawat-penerima"
                innerRef={register()}
                invalid={errors['id-tanda-tangan-perawat-penerima'] && true}
              />
            </div>
          </Col>

          <Col>
            <div className="d-flex justify-content-around my-0">
              <Signature
                label="Kepala Kamar Bedah"
                type="picker"
                additionalLabel={(data && data.form && data.form.Nama_Kepala_Bedah) ? data.form.Nama_Kepala_Bedah : ''}
                initialImage={(data && data.form && data.form.Tanda_Tangan_Kepala_Bedah && data.form.Tanda_Tangan_Kepala_Bedah !== '') ? data.form.Tanda_Tangan_Kepala_Bedah : undefined}
                persons={nurses}
                onSigned={(assigner: SignatureModel) => handleOfficerSigned(assigner)}
              />
              <Input
                type="hidden"
                name="tanda-tangan-kepala-bedah"
                innerRef={register()}
                invalid={errors['tanda-tangan-kepala-bedah'] && true}
              />
              <Input
                type="hidden"
                name="id-tanda-tangan-kepala-bedah"
                innerRef={register()}
                invalid={errors['id-tanda-tangan-kepala-bedah'] && true}
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
      </Form>
    </>
  );
}
export default ChecklistPraOperasi;
