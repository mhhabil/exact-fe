import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { DateTimeInput, TextInput } from "@src/shared/input";
import {FindPdfRequest, IPdfModel} from '@shared/pdf';
import { fetchPerioperativeNursingRecordRajal, fetchPerioperativeNursingRecordRajalPdf, handlePdf } from '../stores/perioperative-nursing-records-rajal.store';
import { useEffect, useState } from "react";
import { AppRequest } from '@src/shared/request';
import PatientVerificationRajal from './patient-verification-rajal';
import {PdfNursingInitialAssessmentRequest} from '@modules/outpatient/nursing-initial-assessment/requests/pdf-nursing-initial-assessment.request';
import { PerioperativeNursingRecordRajalsModel } from '../models/perioperative-nursing-records-rajal-model';
import { PerioperativeNursingRecordsRajalService } from '../services';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { SubmitButton } from '@src/shared/button';
import { IUpdatePerioperativeNursingRecordsRajalRequest, UpdatePerioperativeNursingRecordsRajalRequest } from '../requests';
import VitalSignRajal from './vital-sign-rajal';
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { PdfPerioperativeNursingRecordRajalRequest } from '../requests/pdf-perioperative-nursing-record-rajal-request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const PerioperativeNursingRecordsRajalForm = (props: {data:PerioperativeNursingRecordRajalsModel}) => {
  const { data } = props;

  const dispatch = useAppDispatch();
  const { nurses } = useAppSelector(state => state.nurse);
  const { pdf } = useAppSelector(state => state.perioperativeNursingRecordsRajalStore);
  const { treatment } = useAppSelector(state => state.patient);
  const [processing, setProcessing] = useState<boolean | undefined>(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const [defaultPattern, setDefaultPattern] = useState<any>();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPerioperativeNursingRecordRajalPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-jalan_catatan-keperawatan-peri-operatif-pra-operasi' })))
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  const { register, handleSubmit, errors, reset, setValue, control } = useForm({
    mode: 'onChange',
    // resolver: yupResolver(UpdatePerioperativeNursingRecordsRajalRequest.schema()),
    defaultValues: {
      suhu: data?.form?.Suhu ?? data?.asesmen?.Vital_Suhu ?? data?.ews?.Suhu_Tubuh ?? '',
      nadi: data?.form?.Nadi ?? data?.asesmen?.Vital_Denyut_Nadi ?? data?.ews?.Nadi ?? '',
      rr: data?.form?.Rr ?? data?.asesmen?.Vital_Respiratory_Rate ?? data?.ews?.Rr ?? '',
      // td: data?.form?.Td ?? data?.asesmen?.Vital_Tekanan_Darah ?? data?.ews?.Td ?? '',
      td: data && data.form && data.form.Td && data.form.Td !== '' ? data.form.Td : data?.cppt?.TD !== '' ? data?.cppt?.TD : '',
      kgd: data && data.form && data.form.Kgd && data.form.Kgd !== '' ? data.form.Kgd : data?.cppt?.KGD !== '' ? data?.cppt?.KGD : '',
      tb: data?.form?.Tb ?? '',
      bb: data?.form?.Bb ?? '',
      skala_nyeri: data?.form?.Skala_Nyeri ?? '',
      status_mental: data?.form?.Status_Mental ?? '',
      riwayat_penyakit: data?.form?.Riwayat_Penyakit ?? '',
      riwayat_penyakit_keterangan: data?.form?.Riwayat_Penyakit_Keterangan ?? '',
      pengobatan_saat_ini: data?.form?.Pengobatan_Saat_Ini ?? '',
      pengobatan_saat_ini_keterangan: data?.form?.Pengobatan_Saat_Ini_Keterangan ?? '',
      alat_bantu: data?.form?.Alat_Bantu ?? '',
      alat_bantu_keterangan: data?.form?.Alat_Bantu_Keterangan ?? '',
      operasi_sebelumnya: data?.form?.Operasi_Sebelumnya ?? '',
      operasi_sebelumnya_keterangan: data?.form?.Operasi_Sebelumnya_Keterangan ?? '',
      operasi_sebelumnya_tanggal: data?.form?.Operasi_Sebelumnya_Tanggal ?? '',
      operasi_sebelumnya_di: data?.form?.Operasi_Sebelumnya_Di ?? '',
      alergi: data?.form?.Alergi ?? '',
      alergi_keterangan: data?.form?.Alergi_Keterangan ?? '',
      pemeriksaan_penunjang: data?.form?.Pemeriksaan_Penunjang ??  '',
      pemeriksaan_penunjang_keterangan: data?.form?.Pemeriksaan_Penunjang_Keterangan ?? '',
      verifikasi_periksa_identitas:  data.form.Verifikasi_Periksa_Identitas === 1 ? '1' : data.form.Verifikasi_Periksa_Identitas === 0 ? '0' :  '',
      verifikasi_periksa_identitas_keterangan:  data?.form?.Verifikasi_Periksa_Identitas_Keterangan ?? '',
      verifikasi_periksa_gelang: data.form.Verifikasi_Periksa_Gelang === 1 ? '1' : data.form.Verifikasi_Periksa_Gelang === 0 ? '0' :  '',
      verifikasi_periksa_gelang_keterangan: data?.form?.Verifikasi_Periksa_Gelang_Keterangan ?? '',
      verifikasi_surat_pengantar_operasi: data.form.Verifikasi_Surat_Pengantar_Operasi === 1 ? '1' : data.form.Verifikasi_Surat_Pengantar_Operasi === 0 ? '0' :  '',
      verifikasi_surat_pengantar_operasi_keterangan: data?.form?.Verifikasi_Surat_Pengantar_Operasi_Keterangan ?? '',
      verifikasi_jenis_lokasi_operasi: data.form.Verifikasi_Jenis_Lokasi_Operasi === 1 ? '1' : data.form.Verifikasi_Jenis_Lokasi_Operasi === 0 ? '0' :  '',
      verifikasi_jenis_lokasi_operasi_keterangan: data?.form?.Verifikasi_Jenis_Lokasi_Operasi_Keterangan ?? '',
      verifikasi_masalah_bahasa_komunikasi: data.form.Verifikasi_Masalah_Bahasa_Komunikasi === 1 ? '1' : data.form.Verifikasi_Masalah_Bahasa_Komunikasi === 0 ? '0' :  '',
      verifikasi_masalah_bahasa_komunikasi_keterangan: data?.form?.Verifikasi_Masalah_Bahasa_Komunikasi_Keterangan ?? '',
      verifikasi_surat_izin_operasi: data.form.Verifikasi_Surat_Izin_Operasi === 1 ? '1' : data.form.Verifikasi_Surat_Izin_Operasi === 0 ? '0' :  '',
      verifikasi_surat_izin_operasi_keterangan: data?.form?.Verifikasi_Surat_Izin_Operasi_Keterangan ?? '',
      verifikasi_persetujuan_anestesi:  data.form.Verifikasi_Persetujuan_Anestesi === 1 ? '1' : data.form.Verifikasi_Persetujuan_Anestesi === 0 ? '0' :  '',
      verifikasi_persetujuan_anestesi_keterangan: data?.form?.Verifikasi_Persetujuan_Anestesi_Keterangan ?? '',
      verifikasi_kelengkapan_resume_medis: data.form.Verifikasi_Kelengkapan_Resume_Medis === 1 ? '1' : data.form.Verifikasi_Kelengkapan_Resume_Medis === 0 ? '0' :  '',
      verifikasi_kelengkapan_resume_medis_keterangan: data?.form?.Verifikasi_Kelengkapan_Resume_Medis_Keterangan ?? '',
      verifikasi_kelengkapan_x_ray: data.form.Verifikasi_Kelengkapan_X_Ray === 1 ? '1' : data.form.Verifikasi_Kelengkapan_X_Ray === 0 ? '0' :  '',
      verifikasi_kelengkapan_x_ray_keterangan: data?.form?.Verifikasi_Kelengkapan_X_Ray_Keterangan ?? '',

      persiapan_puasa: data.form.Persiapan_Puasa === 1 ? '1' : data.form.Persiapan_Puasa === 0 ? '0' :  '',
      persiapan_puasa_keterangan: data?.form?.Persiapan_Puasa_Keterangan ?? '',
      persiapan_prothese_luar: data.form.Persiapan_Prothese_Luar === 1 ? '1' : data.form.Persiapan_Prothese_Luar === 0 ? '0' :  '',
      persiapan_prothese_luar_keterangan: data?.form?.Persiapan_Prothese_Luar_Keterangan ??  '',
      persiapan_prothese_dalam: data.form.Persiapan_Prothese_Dalam === 1 ? '1' : data.form.Persiapan_Prothese_Dalam === 0 ? '0' :  '',
      persiapan_prothese_dalam_keterangan: data?.form?.Persiapan_Prothese_Dalam_Keterangan ?? '',
      persiapan_penjepit_rambut: data.form.Persiapan_Penjepit_Rambut === 1 ? '1' : data.form.Persiapan_Penjepit_Rambut === 0 ? '0' :  '',
      persiapan_penjepit_rambut_keterangan: data?.form?.Persiapan_Penjepit_Rambut_Keterangan ?? '',
      persiapan_kulit: data.form.Persiapan_Kulit === 1 ? '1' : data.form.Persiapan_Kulit === 0 ? '0' :  '',
      persiapan_kulit_keterangan: data?.form?.Persiapan_Kulit_Keterangan ?? '',
      persiapan_alat_bantu: data.form.Persiapan_Alat_Bantu === 1 ? '1' : data.form.Persiapan_Alat_Bantu === 0 ? '0' :  '',
      persiapan_alat_bantu_keterangan: data?.form?.Persiapan_Alat_Bantu_Keterangan ?? '',
      persiapan_obat_disertakan: data.form.Persiapan_Obat_Disertakan === 1 ? '1' : data.form.Persiapan_Obat_Disertakan === 0 ? '0' :  '',
      persiapan_obat_disertakan_keterangan: data?.form?.Persiapan_Obat_Disertakan_Keterangan ?? '',
      persiapan_obat_terakhir_diberikan: data.form.Persiapan_Obat_Terakhir_Diberikan === 1 ? '1' : data.form.Persiapan_Obat_Terakhir_Diberikan === 0 ? '0' :  '',
      persiapan_obat_terakhir_diberikan_keterangan: data?.form?.Persiapan_Obat_Terakhir_Diberikan_Keterangan ??  '',
      persiapan_vaskuler_akses: data.form.Persiapan_Vaskuler_Akses === 1 ? '1' : data.form.Persiapan_Vaskuler_Akses === 0 ? '0' :  '',
      persiapan_vaskuler_akses_keterangan: data?.form?.Persiapan_Vaskuler_Akses_Keterangan ?? '',
      lain_site_marking: data?.form?.Lain_Site_Marking ?? '',
      lain_penjelasan_singkat: data?.form?.Lain_Penjelasan_Singkat ?? '',
      tanggal: data?.form?.Tanggal ?? '',
      site_marking: data.form.Site_Marking === 1 ? '1' : data.form.Site_Marking === 0 ? '0' :  '',
      site_marking_keterangan: data?.form?.Site_Marking_Keterangan ?? '',
      penjelasan_singkat: data.form.Penjelasan_Singkat === 1 ? '1' : data.form.Penjelasan_Singkat === 0 ? '0' :  '',
      penjelasan_singkat_keterangan: data?.form?.Penjelasan_Singkat_Keterangan ?? '',
      "ttd-perawat-ruangan": data?.form?.TTD_Perawat_Ruangan ?? '',
      "id-perawat-ruangan": data?.form?.ID_Perawat_Ruangan ?? '',
      "ttd-perawat-penerima": data?.form?.TTD_Perawat_Penerima ?? '',
      "id-perawat-penerima":  data?.form?.ID_Perawat_Penerima ?? '',
    },
  })

  const handleNurseSigned = (image: SignatureModel) => {
    setValue('ttd-perawat-ruangan', image.Signature);
    setValue('id-perawat-ruangan', image.ID_Karyawan);
  }

  // const handleNursePenerima = (image: SignatureModel) => {
  //   setValue('ttd-perawat-penerima', image.Signature);
  //   setValue('id-perawat-penerima', image.ID_Karyawan);
  // }

  const handleProcessing = () => {
    setProcessing(true);
  }

  const handleSubmitForm = (value: IUpdatePerioperativeNursingRecordsRajalRequest) => {
    if (!treatment) {
      return;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdatePerioperativeNursingRecordsRajalRequest.createFromJson({...value, ...appRequest});
    dispatch(handlePdf(undefined));
    PerioperativeNursingRecordsRajalService().update(params)
      .then(() => {
        PerioperativeNursingRecordsRajalService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            PerioperativeNursingRecordsRajalService().pdfv3(PdfPerioperativeNursingRecordRajalRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
              .then(() => {
                setProcessing(false);
                dispatch(fetchPerioperativeNursingRecordRajalPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-jalan_catatan-keperawatan-peri-operatif-pra-operasi' })))
              })
          });
        setProcessing(false);
        dispatch(fetchPerioperativeNursingRecordRajal(appRequest));
      });
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        {/*yang bertanda tangan dibawah ini sampai nomor 1*/}
        <FormGroup className='form-group' row>
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
            <label>Checklist Default</label>
          </Col>
        </FormGroup>
        <VitalSignRajal
          {...{ register, errors, setValue, data, defaultPattern }}
        />

        <PatientVerificationRajal
          data={data}
          {...{ register, errors, setValue, defaultPattern }}
        />

        <Row>
          <Col>
            <div className="mt-2 d-flex justify-content-around my-0">
              <Signature
                label="Perawat Pengantar"
                type="picker"
                additionalLabel={(data && data.form.Nama_Perawat_Ruangan && data.form.Nama_Perawat_Ruangan !== '') ? data.form.Nama_Perawat_Ruangan : undefined}
                initialImage={(data && data.form.TTD_Perawat_Ruangan && data.form.TTD_Perawat_Ruangan !== '') ? data.form.TTD_Perawat_Ruangan : undefined}
                persons={nurses}
                onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)}
              />
              <Input
                type="hidden"
                name="id-perawat-ruangan"
                innerRef={register()}
                invalid={errors['id-perawat-ruangan'] && true}
              />
              <Input
                type="hidden"
                name='ttd-perawat-ruangan'
                innerRef={register()}
                invalid={errors['ttd-perawat-ruangan'] && true}
              />
            </div>
          </Col>
          {/* <Col>
            <div className="mt-2 d-flex justify-content-around my-0">
              <Signature
                label="Perawat Penerima"
                type="picker"
                additionalLabel={(data && data.form.Nama_Perawat_Penerima && data.form.Nama_Perawat_Penerima !== '') ? data.form.Nama_Perawat_Penerima : undefined}
                initialImage={(data && data.form.TTD_Perawat_Penerima && data.form.TTD_Perawat_Penerima !== '') ? data.form.TTD_Perawat_Penerima : undefined}
                persons={nurses}
                onSigned={(assigner: SignatureModel) => handleNursePenerima(assigner)}
              />
              <Input
                type="hidden"
                name="id-perawat-penerima"
                innerRef={register()}
                invalid={errors['id-perawat-penerima'] && true}
              />
              <Input
                type="hidden"
                name='ttd-perawat-penerima'
                innerRef={register()}
                invalid={errors['ttd-perawat-penerima'] && true}
              />
            </div>
          </Col> */}
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
export default PerioperativeNursingRecordsRajalForm;
