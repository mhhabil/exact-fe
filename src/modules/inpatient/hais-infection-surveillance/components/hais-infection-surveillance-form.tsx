import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from "reactstrap";
import { Fragment, useEffect, useState } from "react";
import { HaisSurveillanceInfectionFormRequest, IHaisSurveillanceInfectionFormRequest } from "../requests";
import { ISignatureModel, SignatureModel } from "@src/shared/signature/models/signature.model";
import { fetchHaisSurveillanceInfectionForm, fetchHaisSurveillanceInfectionPdf, handlePdf } from "../stores/hais-infection-surveillance.store";
import { AppRequest } from "@src/shared/request";
import { DateTimeConverter } from "@src/shared/datetime-converter";
import { FindPdfRequest } from "@src/shared/pdf";
import HaisInfectionSurveillanceService from "../services";
import { HaisSurveillanceInfectionForm } from "../models/hais-infection-surveillance-form.model";
import { Signature } from "@src/shared/signature/components";
import { SubmitButton } from "@src/shared/button";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useForm } from "react-hook-form";
import { PdfHaisInfectionSurveillanceRequest } from "../requests/pdf-hais-infection-surveillance.request";

const HaisInfectionSurveillanceForm = (props: { data: HaisSurveillanceInfectionForm }) => {
  const { data } = props;
  const dispatch = useAppDispatch();

  const { userData } = useAppSelector(state => state.auth);
  const { pdf } = useAppSelector(state =>  state.haisSurveillanceInfection);
  const { treatment } = useAppSelector(state => state.patient);
  const { nurses } = useAppSelector(state => state.nurse);

  const [processing, setProcessing] = useState(false);
  const [pdfData, setPdfData] = useState<any | undefined>(undefined);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchHaisSurveillanceInfectionPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_formulir-surveilans-infeksi-hais' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf]);

  const { register, setValue, handleSubmit, errors } = useForm({
    mode: 'onChange',
    defaultValues: {
      ruangan_hais: data.form?.Ruangan_Hais ?? '',
      tanggal_berobat: data.form?.Tanggal_Berobat ?? '',
      diagnosa_masuk: data.form?.Diagnosa_Masuk ?? '',
      asal_masuk: data.form?.Asal_Masuk ?? '',
      vena_sentral_check: data.form?.Vena_Sentral_Check ?? '',
      vena_perifer_check: data.form?.Vena_Perifer_Check ?? '',
      lokasi_vs: data.form?.Lokasi_VS ?? '',
      mulai_vs: data.form && data.form.Mulai_VS ? DateTimeConverter.convertDatetimeToUTC(data.form.Mulai_VS) : DateTimeConverter.convertDatetimeToUTC(),
      selesai_vs: data.form && data.form.Selesai_VS ? DateTimeConverter.convertDatetimeToUTC(data.form.Selesai_VS) : DateTimeConverter.convertDatetimeToUTC(),
      total_hari_vs: data.form?.Total_Hari_VS ?? '',
      tanggal_infeksi_vs: data.form && data.form.Tanggal_Infeksi_VS ? DateTimeConverter.convertDatetimeToUTC(data.form.Tanggal_Infeksi_VS) : DateTimeConverter.convertDatetimeToUTC(),
      catatan_vs: data.form?.Catatan_VS ?? '',
      lokasi_vp: data.form?.Lokasi_VP ?? '',
      mulai_vp: data.form && data.form.Mulai_VP ? DateTimeConverter.convertDatetimeToUTC(data.form.Mulai_VP) : DateTimeConverter.convertDatetimeToUTC(),
      selesai_vp: data.form && data.form.Selesai_VP ? DateTimeConverter.convertDatetimeToUTC(data.form.Selesai_VP) : DateTimeConverter.convertDatetimeToUTC(),
      total_hari_vp: data.form?.Total_Hari_VP ?? '',
      tanggal_infeksi_vp: data.form && data.form.Tanggal_Infeksi_VP ? DateTimeConverter.convertDatetimeToUTC(data.form.Tanggal_Infeksi_VP) : DateTimeConverter.convertDatetimeToUTC(),
      catatan_vp: data.form?.Catatan_VP ?? '',
      tindakan_alkes_lain: data.form?.Tindakan_Alkes_Lain ?? '',
      lokasi_lain: data.form?.Lokasi_Lain ?? '',
      mulai_lain: data.form && data.form.Mulai_Lain ? DateTimeConverter.convertDatetimeToUTC(data.form.Mulai_Lain) : DateTimeConverter.convertDatetimeToUTC(),
      selesai_lain: data.form && data.form.Selesai_Lain ? DateTimeConverter.convertDatetimeToUTC(data.form.Selesai_Lain) : DateTimeConverter.convertDatetimeToUTC(),
      total_hari_lain: data.form?.Total_Hari_Lain ?? '',
      tanggal_infeksi_lain: data.form && data.form.Tanggal_Infeksi_Lain ? DateTimeConverter.convertDatetimeToUTC(data.form.Tanggal_Infeksi_Lain) : DateTimeConverter.convertDatetimeToUTC(),
      catatan_lain: data.form?.Catatan_Lain ?? '',
      hbs_ag: data.form?.HBS_Ag ?? '',
      anti_hcv: data.form?.Anti_HCV ?? '',
      anti_hiv: data.form?.Anti_HIV ?? '',
      faktor_penyakit_lain: data.form?.Faktor_Penyakit_Lain ?? '',
      lab_leukocyt: data.form?.Lab_Leukocyt ?? '',
      lab_led: data.form?.Lab_LED ?? '',
      lab_lain: data.form?.Lab_Lain ?? '',
      hasil_radiologi: data.form?.Hasil_Radiologi ?? '',
      merokok: data.form?.Merokok ?? '',
      steroid_jangka_panjang: data.form?.Steroid_Jangka_Panjang ?? '',
      mandi_sebelum_operasi: data.form?.Mandi_Sebelum_Operasi ?? '',
      operasi_karena_trauma: data.form?.Operasi_Karena_Trauma ?? '',
      obat_pengencer_darah: data.form?.Obat_Pengencer_Darah ?? '',
      memakai_make_up: data.form?.Memakai_Make_Up ?? '',
      gula_darah: data.form?.Gula_Darah ?? '',
      suhu_pasien: data.form?.Suhu_Pasien ?? '',
      infeksi_mata_check: data.form?.Infeksi_Mata_Check ?? '',
      infeksi_tht_check: data.form?.Infeksi_THT_Check ?? '',
      infeksi_mulut_check: data.form?.Infeksi_Mulut_Check ?? '',
      infeksi_paru_check: data.form?.Infeksi_Paru_Check ?? '',
      infeksi_kulit_check: data.form?.Infeksi_Kulit_Check ?? '',
      infeksi_gi_check: data.form?.Infeksi_GI_Check ?? '',
      infeksi_lainnya_check: data.form?.Infeksi_Lainnya_Check ?? '',
      infeksi_lainnya_text: data.form?.Infeksi_Lainnya_Text ?? '',
      penyakit_dm_check: data.form?.Penyakit_DM_Check ?? '',
      penyakit_hipertensi_check: data.form?.Penyakit_Hipertensi_Check ?? '',
      penyakit_ggk_check: data.form?.Penyakit_GGK_Check ?? '',
      penyakit_sepsis_check: data.form?.Penyakit_Sepsis_Check ?? '',
      riwayat_pasien_sekarang: data.form?.Riwayat_Pasien_Sekarang ?? '',
      jenis_operasi: data.form?.Jenis_Operasi ?? '',
      asa_score: data.form?.ASA_Score ?? '',
      jenis_anestesi: data.form?.Jenis_Anestesi ?? '',
      operator_anestesi: data.form?.Operator_Anestesi ?? '',
      kelembapan_udara: data.form?.Kelembapan_Udara ?? '',
      suhu_ruangan: data.form?.Suhu_Ruangan ?? '',
      komplikasi_saat_operasi: data.form?.Komplikasi_Saat_Operasi ?? '',
      profilaksis: data.form?.Profilaksis ?? '',
      obat_profilaksis: data.form?.Obat_Profilaksis ?? '',
      antibiotik_tambahan: data.form?.Antibiotik_Tambahan ?? '',
      obat_antibiotik: data.form?.Obat_Antibiotik ?? '',
      dosis_antibiotik: data.form?.Dosis_Antibiotik ?? '',
      jam_diberikan_antibiotik: data.form?.Jam_Diberikan_Antibiotik ?? '',
      probe_laser: data.form?.Probe_Laser ?? '',
      tubing_vitrectomy: data.form?.Tubing_Vitrectomy ?? '',
      chlorhexidine_check: data.form?.Chlorhexidine_Check ?? '',
      povidone_iodine_check: data.form?.Povidone_Iodine_Check ?? '',
      alkohol_70_check: data.form?.Alkohol_70_Check ?? '',
      jahitan: data.form?.Jahitan ?? '',
      indikator_instrumen: data.form?.Indikator_Instrumen ?? '',
      sterilisasi_cssd: data.form?.Sterilisasi_CSSD ?? '',
      inisial_dr: data.form?.Inisial_Dr ?? '',
      asisten_op: data.form?.Asisten_Op ?? '',
      urutan_op: data.form?.Urutan_Op ?? '',
      implant: data.form?.Implant ?? '',
      lama_op: data.form?.Lama_Op ?? '',
      ruang_operasi: data.form?.Ruang_Operasi ?? '',
      klasifikasi_luka: data.form?.Klasifikasi_Luka ?? '',
      prosedur_op: data.form?.Prosedur_Op ?? '',
      kualifikasi_dokter_bedah: data.form?.Kualifikasi_Dokter_Bedah ?? '',
      jumlah_staf: data.form?.Jumlah_Staf ?? '',
      diagnosa_akhir: data.form?.Diagnosa_Akhir ?? '',
      tanggal_pasien_keluar: data.form && data.form.Tanggal_Pasien_Keluar ? DateTimeConverter.convertDatetimeToUTC(data.form.Tanggal_Pasien_Keluar) : DateTimeConverter.convertDatetimeToUTC(),
      cara_pasien_keluar: data.form?.Cara_Pasien_Keluar ?? '',
      nama_pindah_faskes: data.form?.Nama_Pindah_Faskes ?? '',
      id_perawat: data.form?.ID_Perawat ?? '',
      ttd_perawat: data.form?.TTD_Perawat ?? '',
      id_perawat_ipcn: data.form?.ID_Perawat_IPCN ?? '',
      ttd_perawat_ipcn: data.form?.TTD_Perawat_IPCN ?? '',
    } as any,
  });

  const handleNurseSigned = (signature: ISignatureModel) => {
    setValue('id_perawat', signature.ID_Karyawan);
    setValue('ttd_perawat', signature.Signature);
  }

  const handleIpcnSigned = (signature: ISignatureModel) => {
    setValue('id_perawat_ipcn', signature.ID_Karyawan);
    setValue("ttd_perawat_ipcn", signature.Signature);
  }

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.value === '1') ? '1' : '0');
  }

  const handleSubmitForm = (value: IHaisSurveillanceInfectionFormRequest) => {
    if (!treatment) {
      return;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = HaisSurveillanceInfectionFormRequest.createFromJson({ ...appRequest, ...value });
    dispatch(handlePdf(undefined));
    HaisInfectionSurveillanceService().updateForm(params)
      .then((resp) => {
        const paramsForm = resp.data.data;
        HaisInfectionSurveillanceService().showList(appRequest)
          .then((response) => {
            const paramsList = response.data.data.records;
            const paramsPdf = PdfHaisInfectionSurveillanceRequest.createPdfRequest(paramsForm, paramsList, appRequest, treatment);
            HaisInfectionSurveillanceService().pdfv3(paramsPdf)
              .then(() => {
                dispatch(fetchHaisSurveillanceInfectionPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_formulir-surveilans-infeksi-hais' })))
                setProcessing(false);
              })
          })
        dispatch(fetchHaisSurveillanceInfectionForm(appRequest));
      })
      .catch((err) => {
        setProcessing(false);
      })
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="border p-1 my-1">
          <Row className="mt-1">
            <Col>
              <Label className="fw-bolder fs-4">Riwayat Masuk</Label>
              <hr/>
            </Col>
          </Row>
          <FormGroup row className="my-1">
            <Col sm='2'>
              <Label>Ruangan</Label>
            </Col>
            <Col sm='2'>
              <Input
                type="text"
                name="ruangan_hais"
                innerRef={register({ required: false })}
              />
            </Col>
          </FormGroup>
          <FormGroup row className="my-1">
            <Col sm='2'>
              <Label>Tanggal Masuk RS/Jam</Label>
            </Col>
            <Col sm='2'>
              <Input
                type="datetime-local"
                id='tanggal_berobat'
                defaultValue='tanggal_berobat'
                name='tanggal_berobat'
                innerRef={register({ required: false })}
              />
            </Col>
          </FormGroup>
          <FormGroup row className="my-1">
            <Col sm='2'>
              <Label>Diagnosa Waktu Masuk</Label>
            </Col>
            <Col sm='2'>
              <Input
                type="textarea"
                name="diagnosa_masuk"
                innerRef={register({ required: false })}
              />
            </Col>
          </FormGroup>
          <FormGroup row className="my-1">
            <Col sm='2'>
              <Label>Asal Masuk</Label>
            </Col>
            <Col sm='2'>
              <div className="mb-1">
                <Input
                  type="radio"
                  className="me-1"
                  name="asal_masuk"
                  value='1'
                  defaultChecked={!!(data.form && data.form.Asal_Masuk && data.form.Asal_Masuk === '1')}
                  innerRef={register({ required: false })}
                />
                <Label>Dari Rumah</Label>
              </div>
              <div>
                <Input
                  type="radio"
                  className="me-1"
                  name="asal_masuk"
                  value='2'
                  defaultChecked={!!(data.form && data.form.Asal_Masuk && data.form.Asal_Masuk === '2')}
                  innerRef={register({ required: false })}
                />
                <Label>Rujukan</Label>
              </div>
            </Col>
          </FormGroup>
        </div>
        <div className="border p-1 my-1">
          <Row className="mt-1">
            <Col>
              <Label className="fw-bolder fs-4">Faktor Resiko Selama Dirawat</Label>
              <hr/>
            </Col>
          </Row>
          <FormGroup row className="my-1">
            <Table responsive bordered>
              <thead className="text-center">
                <tr>
                  <th rowSpan={2}>No.</th>
                  <th rowSpan={2}>Jenis Tindakan Alkes</th>
                  <th rowSpan={2}>Lokasi</th>
                  <th colSpan={2}>Tanggal Pemasangan</th>
                  <th rowSpan={2}>Total Hari</th>
                  <th rowSpan={2}>Tanggal Infeksi</th>
                  <th rowSpan={2}>Catatan</th>
                </tr>
                <tr>
                  <th>Mulai</th>
                  <th>Selesai</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Intra Vena Line</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td rowSpan={2}></td>
                  <td>
                    <Input
                      type="checkbox"
                      name="vena_sentral_check"
                      className="me-1"
                      onChange={(e) => handleCheckboxChange(e)}
                      value='1'
                      defaultChecked={!!(data.form?.Vena_Sentral_Check === '1')}
                      innerRef={register('vena_sentral_check') as any}
                    />
                    <Label>Vena Sentral</Label>
                  </td>
                  <td>
                    <Input
                      type="text"
                      name="lokasi_vs"
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="datetime-local"
                      id='mulai_vs'
                      defaultValue='mulai_vs'
                      name='mulai_vs'
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="datetime-local"
                      id='selesai_vs'
                      defaultValue='selesai_vs'
                      name='selesai_vs'
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="text"
                      name='total_hari_vs'
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="datetime-local"
                      id='tanggal_infeksi_vs'
                      defaultValue='tanggal_infeksi_vs'
                      name='tanggal_infeksi_vs'
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="text"
                      name='catatan_vs'
                      innerRef={register({ required: false })}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Input
                      type="checkbox"
                      name="vena_perifer_check"
                      className="me-1"
                      onChange={(e) => handleCheckboxChange(e)}
                      value='1'
                      defaultChecked={!!(data.form?.Vena_Perifer_Check === '1')}
                      innerRef={register('vena_perifer_check') as any}
                    />
                    <Label>Vena Perifer</Label>
                  </td>
                  <td>
                    <Input
                      type="text"
                      name="lokasi_vp"
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="datetime-local"
                      id='mulai_vp'
                      defaultValue='mulai_vp'
                      name='mulai_vp'
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="datetime-local"
                      id='selesai_vp'
                      defaultValue='selesai_vp'
                      name='selesai_vp'
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="text"
                      name='total_hari_vp'
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="datetime-local"
                      id='tanggal_infeksi_vp'
                      defaultValue='tanggal_infeksi_vp'
                      name='tanggal_infeksi_vp'
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="text"
                      name='catatan_vp'
                      innerRef={register({ required: false })}
                    />
                  </td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>
                    {`Lainnya\n`}
                    <Input
                      type="text"
                      name='tindakan_alkes_lain'
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="text"
                      name="lokasi_lain"
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="datetime-local"
                      id='mulai_lain'
                      defaultValue='mulai_lain'
                      name='mulai_lain'
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="datetime-local"
                      id='selesai_lain'
                      defaultValue='selesai_lain'
                      name='selesai_lain'
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="text"
                      name='total_hari_lain'
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="datetime-local"
                      id='tanggal_infeksi_lain'
                      defaultValue='tanggal_infeksi_lain'
                      name='tanggal_infeksi_lain'
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="text"
                      name='catatan_lain'
                      innerRef={register({ required: false })}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </FormGroup>
        </div>
        <div className="border p-1 my-1">
          <Row className="mt-1">
            <Col>
              <Label className="fw-bolder fs-4">Pemeriksaan Penunjang</Label>
              <hr/>
            </Col>
          </Row>
          <FormGroup row className="my-1">
            <Table responsive bordered>
              <thead className="text-center">
                <tr>
                  <th colSpan={4}>Faktor Penyakit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">HBS Ag</td>
                  <td className="text-center">Anti HCV</td>
                  <td className="text-center">Anti HIV</td>
                  <td className="text-center">Lain-lain</td>
                </tr>
                <tr>
                  <td>
                    <Input
                      type="radio"
                      className="me-1"
                      name="hbs_ag"
                      value='1'
                      defaultChecked={!!(data.form && data.form.HBS_Ag && data.form.HBS_Ag === '1')}
                      innerRef={register({ required: false })}
                    />
                    <Label>Positif</Label>
                  </td>
                  <td>
                    <Input
                      type="radio"
                      className="me-1"
                      name="anti_hcv"
                      value='1'
                      defaultChecked={!!(data.form && data.form.Anti_HCV && data.form.Anti_HCV === '1')}
                      innerRef={register({ required: false })}
                    />
                    <Label>Positif</Label>
                  </td>
                  <td>
                    <Input
                      type="radio"
                      className="me-1"
                      name="anti_hiv"
                      value='1'
                      defaultChecked={!!(data.form && data.form.Anti_HIV && data.form.Anti_HIV === '1')}
                      innerRef={register({ required: false })}
                    />
                    <Label>Positif</Label>
                  </td>
                  <td rowSpan={3}>
                    <Input
                      type="textarea"
                      name='faktor_penyakit_lain'
                      innerRef={register({ required: false })}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Input
                      type="radio"
                      className="me-1"
                      name="hbs_ag"
                      value='2'
                      defaultChecked={!!(data.form && data.form.HBS_Ag && data.form.HBS_Ag === '2')}
                      innerRef={register({ required: false })}
                    />
                    <Label>Negatif</Label>
                  </td>
                  <td>
                    <Input
                      type="radio"
                      className="me-1"
                      name="anti_hcv"
                      value='2'
                      defaultChecked={!!(data.form && data.form.Anti_HCV && data.form.Anti_HCV === '2')}
                      innerRef={register({ required: false })}
                    />
                    <Label>Negatif</Label>
                  </td>
                  <td>
                    <Input
                      type="radio"
                      className="me-1"
                      name="anti_hiv"
                      value='2'
                      defaultChecked={!!(data.form && data.form.Anti_HIV && data.form.Anti_HIV === '2')}
                      innerRef={register({ required: false })}
                    />
                    <Label>Negatif</Label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Input
                      type="radio"
                      className="me-1"
                      name="hbs_ag"
                      value='3'
                      defaultChecked={!!(data.form && data.form.HBS_Ag && data.form.HBS_Ag === '3')}
                      innerRef={register({ required: false })}
                    />
                    <Label>Tidak Diperiksa</Label>
                  </td>
                  <td>
                    <Input
                      type="radio"
                      className="me-1"
                      name="anti_hcv"
                      value='3'
                      defaultChecked={!!(data.form && data.form.Anti_HCV && data.form.Anti_HCV === '3')}
                      innerRef={register({ required: false })}
                    />
                    <Label>Tidak Diperiksa</Label>
                  </td>
                  <td>
                    <Input
                      type="radio"
                      className="me-1"
                      name="anti_hiv"
                      value='3'
                      defaultChecked={!!(data.form && data.form.Anti_HIV && data.form.Anti_HIV === '3')}
                      innerRef={register({ required: false })}
                    />
                    <Label>Tidak Diperiksa</Label>
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} className='text-center'>Hasil Laboratorium</td>
                  <td className="text-center">Hasil Radiologi</td>
                </tr>
                <tr>
                  <td className="text-center">Leukocyt</td>
                  <td className="text-center">Laju Endap Darah (LED)</td>
                  <td className="text-center">Lain-lain</td>
                  <td rowSpan={2}>
                    <Input
                      type="text"
                      name="hasil_radiologi"
                      innerRef={register({ required: false })}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Input
                      type="text"
                      name="lab_leukocyt"
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="text"
                      name="lab_led"
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="text"
                      name="lab_lain"
                      innerRef={register({ required: false })}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </FormGroup>
        </div>
        <div className="border p-1 my-1">
          <Row className="mt-1">
            <Col>
              <Label className="fw-bolder fs-4">Tindakan / Operasi</Label>
              <hr/>
            </Col>
          </Row>
          <FormGroup row className="my-1">
            <Table responsive bordered>
              <thead>
                <tr>
                  <td colSpan={5}>Pre Op di Ruangan</td>
                </tr>
                <tr>
                  <td colSpan={2}>Tgl Operasi: </td>
                  <td colSpan={3}>Diagnosa: </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">Merokok</td>
                  <td className="text-center">Operasi Karena Trauma</td>
                  <td className="text-center">Gula Darah</td>
                  <td className="text-center">Berat Badan</td>
                  <td className="text-center">Tinggi Badan</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <div className="me-1">
                        <Input
                          type="radio"
                          className="me-1"
                          name="merokok"
                          value='1'
                          defaultChecked={!!(data.form && data.form.Merokok && data.form.Merokok === '1')}
                          innerRef={register({ required: false })}
                        />
                        <Label>Ya</Label>
                      </div>
                      <div className="ms-1">
                        <Input
                          type="radio"
                          className="me-1"
                          name="merokok"
                          value='2'
                          defaultChecked={!!(data.form && data.form.Merokok && data.form.Merokok === '2')}
                          innerRef={register({ required: false })}
                        />
                        <Label>Tidak</Label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex">
                      <div className="me-1">
                        <Input
                          type="radio"
                          className="me-1"
                          name="operasi_karena_trauma"
                          value='1'
                          defaultChecked={!!(data.form && data.form.Operasi_Karena_Trauma && data.form.Operasi_Karena_Trauma === '1')}
                          innerRef={register({ required: false })}
                        />
                        <Label>Ya</Label>
                      </div>
                      <div className="ms-1">
                        <Input
                          type="radio"
                          className="me-1"
                          name="operasi_karena_trauma"
                          value='2'
                          defaultChecked={!!(data.form && data.form.Operasi_Karena_Trauma && data.form.Operasi_Karena_Trauma === '2')}
                          innerRef={register({ required: false })}
                        />
                        <Label>Tidak</Label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex">
                      <div className="me-1">
                        <Input
                          type="radio"
                          className="me-1"
                          name="gula_darah"
                          value='1'
                          defaultChecked={!!(data.form && data.form.Gula_Darah && data.form.Gula_Darah === '1')}
                          innerRef={register({ required: false })}
                        />
                        <Label>{`>200`}</Label>
                      </div>
                      <div className="ms-1">
                        <Input
                          type="radio"
                          className="me-1"
                          name="gula_darah"
                          value='2'
                          defaultChecked={!!(data.form && data.form.Gula_Darah && data.form.Gula_Darah === '2')}
                          innerRef={register({ required: false })}
                        />
                        <Label>{`<200`}</Label>
                      </div>
                    </div>
                  </td>
                  <td rowSpan={3}></td>
                  <td rowSpan={3}></td>
                </tr>
                <tr>
                  <td className="text-center">Steroid Jangka Panjang</td>
                  <td className="text-center">Obat Pengencer Darah</td>
                  <td className="text-center">Suhu Pasien</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <div className="me-1">
                        <Input
                          type="radio"
                          className="me-1"
                          name="steroid_jangka_panjang"
                          value='1'
                          defaultChecked={!!(data.form && data.form.Steroid_Jangka_Panjang && data.form.Steroid_Jangka_Panjang === '1')}
                          innerRef={register({ required: false })}
                        />
                        <Label>Ya</Label>
                      </div>
                      <div className="ms-1">
                        <Input
                          type="radio"
                          className="me-1"
                          name="steroid_jangka_panjang"
                          value='2'
                          defaultChecked={!!(data.form && data.form.Steroid_Jangka_Panjang && data.form.Steroid_Jangka_Panjang === '2')}
                          innerRef={register({ required: false })}
                        />
                        <Label>Tidak</Label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex">
                      <div className="me-1">
                        <Input
                          type="radio"
                          className="me-1"
                          name="obat_pengencer_darah"
                          value='1'
                          defaultChecked={!!(data.form && data.form.Obat_Pengencer_Darah && data.form.Obat_Pengencer_Darah === '1')}
                          innerRef={register({ required: false })}
                        />
                        <Label>Ya</Label>
                      </div>
                      <div className="ms-1">
                        <Input
                          type="radio"
                          className="me-1"
                          name="obat_pengencer_darah"
                          value='2'
                          defaultChecked={!!(data.form && data.form.Obat_Pengencer_Darah && data.form.Obat_Pengencer_Darah === '2')}
                          innerRef={register({ required: false })}
                        />
                        <Label>Tidak</Label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex">
                      <div className="me-1">
                        <Input
                          type="radio"
                          className="me-1"
                          name="suhu_pasien"
                          value='1'
                          defaultChecked={!!(data.form && data.form.Suhu_Pasien && data.form.Suhu_Pasien === '1')}
                          innerRef={register({ required: false })}
                        />
                        <Label>{`>38`}&#8451;</Label>
                      </div>
                      <div className="ms-1">
                        <Input
                          type="radio"
                          className="me-1"
                          name="suhu_pasien"
                          value='2'
                          defaultChecked={!!(data.form && data.form.Suhu_Pasien && data.form.Suhu_Pasien === '2')}
                          innerRef={register({ required: false })}
                        />
                        <Label>{`<38`}&#8451;</Label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">Mandi Sebelum Operasi</td>
                  <td className="text-center">Memakai Make-Up</td>
                  <td colSpan={3} className='text-center'>Penyakit Infeksi Lain</td>
                </tr>
                <tr>
                  <td rowSpan={3}>
                    <div className="d-flex">
                      <div className="me-1">
                        <Input
                          type="radio"
                          className="me-1"
                          name="mandi_sebelum_operasi"
                          value='1'
                          defaultChecked={!!(data.form && data.form.Mandi_Sebelum_Operasi && data.form.Mandi_Sebelum_Operasi === '1')}
                          innerRef={register({ required: false })}
                        />
                        <Label>Ya</Label>
                      </div>
                      <div className="ms-1">
                        <Input
                          type="radio"
                          className="me-1"
                          name="mandi_sebelum_operasi"
                          value='2'
                          defaultChecked={!!(data.form && data.form.Mandi_Sebelum_Operasi && data.form.Mandi_Sebelum_Operasi === '2')}
                          innerRef={register({ required: false })}
                        />
                        <Label>Tidak</Label>
                      </div>
                    </div>
                  </td>
                  <td rowSpan={3}>
                    <div className="d-flex">
                      <div className="me-1">
                        <Input
                          type="radio"
                          className="me-1"
                          name="memakai_make_up"
                          value='1'
                          defaultChecked={!!(data.form && data.form.Memakai_Make_Up && data.form.Memakai_Make_Up === '1')}
                          innerRef={register({ required: false })}
                        />
                        <Label>Ya</Label>
                      </div>
                      <div className="ms-1">
                        <Input
                          type="radio"
                          className="me-1"
                          name="memakai_make_up"
                          value='2'
                          defaultChecked={!!(data.form && data.form.Memakai_Make_Up && data.form.Memakai_Make_Up === '2')}
                          innerRef={register({ required: false })}
                        />
                        <Label>Tidak</Label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Input
                      type="checkbox"
                      name="infeksi_mata_check"
                      className="me-1"
                      value='1'
                      onChange={(e) => handleCheckboxChange(e)}
                      defaultChecked={!!(data.form?.Infeksi_Mata_Check === '1')}
                      innerRef={register('infeksi_mata_check') as any}
                    />
                    <Label>Infeksi Mata</Label>
                  </td>
                  <td>
                    <Input
                      type="checkbox"
                      name="infeksi_paru_check"
                      className="me-1"
                      value='1'
                      onChange={(e) => handleCheckboxChange(e)}
                      defaultChecked={!!(data.form?.Infeksi_Paru_Check === '1')}
                      innerRef={register('infeksi_paru_check') as any}
                    />
                    <Label>Infeksi Paru</Label>
                  </td>
                  <td rowSpan={3}>
                    <div className="d-flex p-1 align-items-center">
                      <Input
                        type="checkbox"
                        name="infeksi_lainnya_check"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        value='1'
                        defaultChecked={!!(data.form?.Infeksi_Lainnya_Check === '1')}
                        innerRef={register('infeksi_lainnya_check') as any}
                      />
                      <Input
                        type="text"
                        style={{ width: '20rem' }}
                        name="infeksi_lainnya_text"
                        innerRef={register({ required: false })}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Input
                      type="checkbox"
                      name="infeksi_tht_check"
                      className="me-1"
                      onChange={(e) => handleCheckboxChange(e)}
                      value='1'
                      defaultChecked={!!(data.form?.Infeksi_THT_Check === '1')}
                      innerRef={register('infeksi_tht_check') as any}
                    />
                    <Label>Infeksi THT</Label>
                  </td>
                  <td>
                    <Input
                      type="checkbox"
                      name="infeksi_kulit_check"
                      className="me-1"
                      onChange={(e) => handleCheckboxChange(e)}
                      value='1'
                      defaultChecked={!!(data.form?.Infeksi_Kulit_Check === '1')}
                      innerRef={register('infeksi_kulit_check') as any}
                    />
                    <Label>Infeksi Kulit</Label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Input
                      type="checkbox"
                      name="infeksi_mulut_check"
                      className="me-1"
                      onChange={(e) => handleCheckboxChange(e)}
                      value='1'
                      defaultChecked={!!(data.form?.Infeksi_Mulut_Check === '1')}
                      innerRef={register('infeksi_mulut_check') as any}
                    />
                    <Label>Infeksi Mulut/Gigi</Label>
                  </td>
                  <td>
                    <Input
                      type="checkbox"
                      name="infeksi_gi_check"
                      className="me-1"
                      onChange={(e) => handleCheckboxChange(e)}
                      value='1'
                      defaultChecked={!!(data.form?.Infeksi_GI_Check === '1')}
                      innerRef={register('infeksi_gi_check') as any}
                    />
                    <Label>Infeksi GI Track</Label>
                  </td>
                </tr>
                <tr>
                  <td className="text-center" colSpan={2}>Penyakit Saat Ini</td>
                  <td className="text-center" colSpan={3}>Riwayat Pasien Sekarang</td>
                </tr>
                <tr>
                  <td>
                    <Input
                      type="checkbox"
                      name="penyakit_dm_check"
                      className="me-1"
                      onChange={(e) => handleCheckboxChange(e)}
                      value='1'
                      defaultChecked={!!(data.form?.Penyakit_DM_Check === '1')}
                      innerRef={register('penyakit_dm_check') as any}
                    />
                    <Label>DM</Label>
                  </td>
                  <td rowSpan={3}>
                    <Input
                      type="checkbox"
                      name="penyakit_sepsis_check"
                      onChange={(e) => handleCheckboxChange(e)}
                      className="me-1"
                      value='1'
                      defaultChecked={!!(data.form?.Penyakit_Sepsis_Check === '1')}
                      innerRef={register('penyakit_sepsis_check') as any}
                    />
                    <Label>Sepsis</Label>
                  </td>
                  <td rowSpan={3} colSpan={3}>
                    <Input
                      type="textarea"
                      name="riwayat_pasien_sekarang"
                      innerRef={register({ required: false })}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Input
                      type="checkbox"
                      onChange={(e) => handleCheckboxChange(e)}
                      name="penyakit_hipertensi_check"
                      className="me-1"
                      value='1'
                      defaultChecked={!!(data.form?.Penyakit_Hipertensi_Check === '1')}
                      innerRef={register('penyakit_hipertensi_check') as any}
                    />
                    <Label>Hipertensi</Label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Input
                      type="checkbox"
                      name="penyakit_ggk_check"
                      className="me-1"
                      value='1'
                      onChange={(e) => handleCheckboxChange(e)}
                      defaultChecked={!!(data.form?.Penyakit_GGK_Check === '1')}
                      innerRef={register('penyakit_ggk_check') as any}
                    />
                    <Label>GGK</Label>
                  </td>
                </tr>
              </tbody>
            </Table>
          </FormGroup>
        </div>
        <div className="border p-1 my-1">
          <FormGroup row className="my-1">
            <Table responsive bordered>
              <thead>
                <tr>
                  <th colSpan={5}>Pre Operasi Di Anestesi</th>
                </tr>
                <tr className="text-center">
                  <th>Jenis Operasi</th>
                  <th>ASA Score*</th>
                  <th>Jenis Anestesi</th>
                  <th colSpan={2}>Operator Anestesi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>
                      <Input
                        type="radio"
                        className="me-1"
                        name="jenis_operasi"
                        value='1'
                        defaultChecked={!!(data.form && data.form.Jenis_Operasi && data.form.Jenis_Operasi === '1')}
                        innerRef={register({ required: false })}
                      />
                      <Label>Elektif</Label>
                    </div>
                    <div>
                      <Input
                        type="radio"
                        className="me-1"
                        name="jenis_operasi"
                        value='2'
                        defaultChecked={!!(data.form && data.form.Jenis_Operasi && data.form.Jenis_Operasi === '2')}
                        innerRef={register({ required: false })}
                      />
                      <Label>Cito</Label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex">
                      <div className="me-4">
                        <div>
                          <Input
                            type="radio"
                            className="me-1"
                            name="asa_score"
                            value='1'
                            defaultChecked={!!(data.form && data.form.ASA_Score && data.form.ASA_Score === '1')}
                            innerRef={register({ required: false })}
                          />
                          <Label>1</Label>
                        </div>
                        <div>
                          <Input
                            type="radio"
                            className="me-1"
                            name="asa_score"
                            value='2'
                            defaultChecked={!!(data.form && data.form.ASA_Score && data.form.ASA_Score === '2')}
                            innerRef={register({ required: false })}
                          />
                          <Label>2</Label>
                        </div>
                        <div>
                          <Input
                            type="radio"
                            className="me-1"
                            name="asa_score"
                            value='3'
                            defaultChecked={!!(data.form && data.form.ASA_Score && data.form.ASA_Score === '3')}
                            innerRef={register({ required: false })}
                          />
                          <Label>3</Label>
                        </div>
                      </div>
                      <div>
                        <div>
                          <Input
                            type="radio"
                            className="me-1"
                            name="asa_score"
                            value='4'
                            defaultChecked={!!(data.form && data.form.ASA_Score && data.form.ASA_Score === '4')}
                            innerRef={register({ required: false })}
                          />
                          <Label>4</Label>
                        </div>
                        <div>
                          <Input
                            type="radio"
                            className="me-1"
                            name="asa_score"
                            value='5'
                            defaultChecked={!!(data.form && data.form.ASA_Score && data.form.ASA_Score === '5')}
                            innerRef={register({ required: false })}
                          />
                          <Label>5</Label>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <Input
                        type="radio"
                        className="me-1"
                        name="jenis_anestesi"
                        value='1'
                        defaultChecked={!!(data.form && data.form.Jenis_Anestesi && data.form.Jenis_Anestesi === '1')}
                        innerRef={register({ required: false })}
                      />
                      <Label>GA</Label>
                    </div>
                    <div>
                      <Input
                        type="radio"
                        className="me-1"
                        name="jenis_anestesi"
                        value='2'
                        defaultChecked={!!(data.form && data.form.Jenis_Anestesi && data.form.Jenis_Anestesi === '2')}
                        innerRef={register({ required: false })}
                      />
                      <Label>Lokal</Label>
                    </div>
                  </td>
                  <td colSpan={2}>
                    <Input
                      type="text"
                      name="operator_anestesi"
                      innerRef={register({ required: false })}
                    />
                  </td>
                </tr>
                <tr>
                  <th colSpan={5}>Durante Operasi</th>
                </tr>
                <tr className="text-center">
                  <td>Kelembapan Udara</td>
                  <td>Suhu Ruangan</td>
                  <td>Komplikasi Saat Operasi</td>
                  <td>Profilaksis</td>
                  <td>{`Antibiotik Tambahan\nSaat Op (Intra Kameral)`}</td>
                </tr>
                <tr>
                  <td>
                    <Input
                      type="text"
                      name="kelembapan_udara"
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="text"
                      name="suhu_ruangan"
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <div>
                      <Input
                        type="radio"
                        className="me-1"
                        name="komplikasi_saat_operasi"
                        value='1'
                        defaultChecked={!!(data.form && data.form.Komplikasi_Saat_Operasi && data.form.Komplikasi_Saat_Operasi === '1')}
                        innerRef={register({ required: false })}
                      />
                      <Label>Ya</Label>
                    </div>
                    <div>
                      <Input
                        type="radio"
                        className="me-1"
                        name="komplikasi_saat_operasi"
                        value='2'
                        defaultChecked={!!(data.form && data.form.Komplikasi_Saat_Operasi && data.form.Komplikasi_Saat_Operasi === '2')}
                        innerRef={register({ required: false })}
                      />
                      <Label>Tidak</Label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex">
                      <div className="me-1">
                        <Input
                          type="radio"
                          className="me-1"
                          name="profilaksis"
                          value='1'
                          defaultChecked={!!(data.form && data.form.Profilaksis && data.form.Profilaksis === '1')}
                          innerRef={register({ required: false })}
                        />
                        <Label>Ya</Label>
                      </div>
                      <div className="ms-1">
                        <Input
                          type="radio"
                          className="me-1"
                          name="profilaksis"
                          value='2'
                          defaultChecked={!!(data.form && data.form.Profilaksis && data.form.Profilaksis === '2')}
                          innerRef={register({ required: false })}
                        />
                        <Label>Tidak</Label>
                      </div>
                    </div>
                    <div>
                      <Input
                        className="mt-1"
                        type="text"
                        placeholder="Obat Profilaksis"
                        name="obat_profilaksis"
                        innerRef={register({ required: false })}
                      />
                    </div>
                  </td>
                  <td rowSpan={4}>
                    <div className="d-flex">
                      <div className="me-1">
                        <Input
                          type="radio"
                          className="me-1"
                          name="antibiotik_tambahan"
                          value='1'
                          defaultChecked={!!(data.form && data.form.Antibiotik_Tambahan && data.form.Antibiotik_Tambahan === '1')}
                          innerRef={register({ required: false })}
                        />
                        <Label>Ya</Label>
                      </div>
                      <div className="ms-1">
                        <Input
                          type="radio"
                          className="me-1"
                          name="antibiotik_tambahan"
                          value='2'
                          defaultChecked={!!(data.form && data.form.Antibiotik_Tambahan && data.form.Antibiotik_Tambahan === '2')}
                          innerRef={register({ required: false })}
                        />
                        <Label>Tidak</Label>
                      </div>
                    </div>
                    <div>
                      <Input
                        type="text"
                        className="mt-1"
                        name="obat_antibiotik"
                        placeholder="Obat Antibiotik"
                        innerRef={register({ required: false })}
                      />
                      <Input
                        type="text"
                        className="my-1"
                        placeholder="Dosis Antibiotik"
                        name="dosis_antibiotik"
                        innerRef={register({ required: false })}
                      />
                      <Input
                        type="time"
                        className="my-1"
                        name="jam_diberikan_antibiotik"
                        innerRef={register({ required: false })}
                      />
                    </div>
                  </td>
                </tr>
                <tr className="text-center">
                  <td colSpan={2}>Penggunaan Alat Reuse</td>
                  <td>Desinfeksi Kulit</td>
                  <td>Jahitan</td>
                </tr>
                <tr>
                  <td>Penggunaan Probe Laser</td>
                  <td>
                    <Input
                      type="text"
                      name="probe_laser"
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td rowSpan={2}>
                    <div>
                      <Input
                        type="checkbox"
                        name="chlorhexidine_check"
                        className="me-1"
                        value='1'
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={!!(data.form?.Chlorhexidine_Check === '1')}
                        innerRef={register('chlorhexidine_check') as any}
                      />
                      <Label>Chlorhexidine</Label>
                    </div>
                    <div>
                      <Input
                        type="checkbox"
                        name="povidone_iodine_check"
                        className="me-1"
                        value='1'
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={!!(data.form?.Povidone_Iodine_Check === '1')}
                        innerRef={register('povidone_iodine_check') as any}
                      />
                      <Label>Povidone Iodine</Label>
                    </div>
                    <div>
                      <Input
                        type="checkbox"
                        name="alkohol_70_check"
                        className="me-1"
                        value='1'
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={!!(data.form?.Alkohol_70_Check === '1')}
                        innerRef={register('alkohol_70_check') as any}
                      />
                      <Label>Alkohol 70%</Label>
                    </div>
                  </td>
                  <td rowSpan={2}>
                    <div>
                      <Input
                        type="radio"
                        className="me-1"
                        name="jahitan"
                        value='1'
                        defaultChecked={!!(data.form && data.form.Jahitan && data.form.Jahitan === '1')}
                        innerRef={register({ required: false })}
                      />
                      <Label>Ya</Label>
                    </div>
                    <div>
                      <Input
                        type="radio"
                        className="me-1"
                        name="jahitan"
                        value='2'
                        defaultChecked={!!(data.form && data.form.Jahitan && data.form.Jahitan === '2')}
                        innerRef={register({ required: false })}
                      />
                      <Label>Tidak</Label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Penggunaan Tubing Vitrectomy</td>
                  <td>
                    <Input
                      type="text"
                      name="tubing_vitrectomy"
                      innerRef={register({ required: false })}
                    />
                  </td>
                </tr>
                <tr className="text-center">
                  <td>Indikator Instrumen/Alat Steril</td>
                  <td>Sterilisasi CSSD</td>
                  <td>Inisial Dr</td>
                  <td>Asisten Op</td>
                  <td>Urutan Op</td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <Input
                        type="radio"
                        className="me-1"
                        name="indikator_instrumen"
                        value='1'
                        defaultChecked={!!(data.form && data.form.Indikator_Instrumen && data.form.Indikator_Instrumen === '1')}
                        innerRef={register({ required: false })}
                      />
                      <Label>Luar</Label>
                    </div>
                    <div>
                      <Input
                        type="radio"
                        className="me-1"
                        name="indikator_instrumen"
                        value='2'
                        defaultChecked={!!(data.form && data.form.Indikator_Instrumen && data.form.Indikator_Instrumen === '2')}
                        innerRef={register({ required: false })}
                      />
                      <Label>Dalam</Label>
                    </div>
                    <div>
                      <Input
                        type="radio"
                        className="me-1"
                        name="indikator_instrumen"
                        value='3'
                        defaultChecked={!!(data.form && data.form.Indikator_Instrumen && data.form.Indikator_Instrumen === '3')}
                        innerRef={register({ required: false })}
                      />
                      <Label>Tidak Ada</Label>
                    </div>
                  </td>
                  <td>
                    <div>
                      <Input
                        type="radio"
                        className="me-1"
                        name="sterilisasi_cssd"
                        value='1'
                        defaultChecked={!!(data.form && data.form.Sterilisasi_CSSD && data.form.Sterilisasi_CSSD === '1')}
                        innerRef={register({ required: false })}
                      />
                      <Label>Ya</Label>
                    </div>
                    <div>
                      <Input
                        type="radio"
                        className="me-1"
                        name="sterilisasi_cssd"
                        value='2'
                        defaultChecked={!!(data.form && data.form.Sterilisasi_CSSD && data.form.Sterilisasi_CSSD === '2')}
                        innerRef={register({ required: false })}
                      />
                      <Label>Tidak</Label>
                    </div>
                  </td>
                  <td>
                    <Input
                      type="text"
                      name="inisial_dr"
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="text"
                      name="asisten_op"
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="text"
                      name="urutan_op"
                      innerRef={register({ required: false })}
                    />
                  </td>
                </tr>
                <tr className="text-center">
                  <td>Implant</td>
                  <td>Lama Op (Jam/Mnt)</td>
                  <td>Ruang Op</td>
                  <td>Klasifikasi Luka</td>
                  <td>Prosedur Op</td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <Input
                        type="radio"
                        className="me-1"
                        name="implant"
                        value='1'
                        defaultChecked={!!(data.form && data.form.Implant && data.form.Implant === '1')}
                        innerRef={register({ required: false })}
                      />
                      <Label>Ya</Label>
                    </div>
                    <div>
                      <Input
                        type="radio"
                        className="me-1"
                        name="implant"
                        value='2'
                        defaultChecked={!!(data.form && data.form.Implant && data.form.Implant === '2')}
                        innerRef={register({ required: false })}
                      />
                      <Label>Tidak</Label>
                    </div>
                  </td>
                  <td>
                    <Input
                      type="text"
                      name="lama_op"
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <div className="d-flex">
                      <div className="mx-1">
                        <div>
                          <Input
                            type="radio"
                            className="me-1"
                            name="ruang_operasi"
                            value='1'
                            defaultChecked={!!(data.form && data.form.Ruang_Operasi && data.form.Ruang_Operasi === '1')}
                            innerRef={register({ required: false })}
                          />
                          <Label>1</Label>
                        </div>
                        <div>
                          <Input
                            type="radio"
                            className="me-1"
                            name="ruang_operasi"
                            value='2'
                            defaultChecked={!!(data.form && data.form.Ruang_Operasi && data.form.Ruang_Operasi === '2')}
                            innerRef={register({ required: false })}
                          />
                          <Label>2</Label>
                        </div>
                      </div>
                      <div className="mx-1">
                        <div>
                          <Input
                            type="radio"
                            className="me-1"
                            name="ruang_operasi"
                            value='3'
                            defaultChecked={!!(data.form && data.form.Ruang_Operasi && data.form.Ruang_Operasi === '3')}
                            innerRef={register({ required: false })}
                          />
                          <Label>3</Label>
                        </div>
                        <div>
                          <Input
                            type="radio"
                            className="me-1"
                            name="ruang_operasi"
                            value='4'
                            defaultChecked={!!(data.form && data.form.Ruang_Operasi && data.form.Ruang_Operasi === '4')}
                            innerRef={register({ required: false })}
                          />
                          <Label>4</Label>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex">
                      <div className="mx-1">
                        <div>
                          <Input
                            type="radio"
                            className="me-1"
                            name="klasifikasi_luka"
                            value='1'
                            defaultChecked={!!(data.form && data.form.Klasifikasi_Luka && data.form.Klasifikasi_Luka === '1')}
                            innerRef={register({ required: false })}
                          />
                          <Label>Bersih</Label>
                        </div>
                        <div>
                          <Input
                            type="radio"
                            className="me-1"
                            name="klasifikasi_luka"
                            value='2'
                            defaultChecked={!!(data.form && data.form.Klasifikasi_Luka && data.form.Klasifikasi_Luka === '2')}
                            innerRef={register({ required: false })}
                          />
                          <Label>Bersih Terkontaminasi</Label>
                        </div>
                      </div>
                      <div className="mx-1">
                        <div>
                          <Input
                            type="radio"
                            className="me-1"
                            name="klasifikasi_luka"
                            value='3'
                            defaultChecked={!!(data.form && data.form.Klasifikasi_Luka && data.form.Klasifikasi_Luka === '3')}
                            innerRef={register({ required: false })}
                          />
                          <Label>Terkontaminasi</Label>
                        </div>
                        <div>
                          <Input
                            type="radio"
                            className="me-1"
                            name="klasifikasi_luka"
                            value='4'
                            defaultChecked={!!(data.form && data.form.Klasifikasi_Luka && data.form.Klasifikasi_Luka === '4')}
                            innerRef={register({ required: false })}
                          />
                          <Label>Kotor</Label>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Input
                      type="text"
                      name="prosedur_op"
                      innerRef={register({ required: false })}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Kualifikasi Dokter Bedah</td>
                  <td>Jumlah Staf</td>
                </tr>
                <tr>
                  <td>
                    <Input
                      type="text"
                      name="kualifikasi_dokter_bedah"
                      innerRef={register({ required: false })}
                    />
                  </td>
                  <td>
                    <Input
                      type="text"
                      name="jumlah_staf"
                      innerRef={register({ required: false })}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </FormGroup>
        </div>
        <div className="border p-1 my-1">
          <Row className="mt-1">
            <Col>
              <Label className="fw-bolder fs-4">Diagnosa Akhir</Label>
              <hr/>
            </Col>
          </Row>
          <FormGroup row className="my-1 align-items-center mx-1">
            <Col sm='2'>
              <Label>Diagnosa Akhir</Label>
            </Col>
            <Col sm='2'>
              <Input
                type="text"
                name="diagnosa_akhir"
                innerRef={register({ required: false })}
              />
            </Col>
          </FormGroup>
          <FormGroup row className="my-1 align-items-center mx-1">
            <Col sm='2'>
              <Label>Tanggal Pasien Keluar RS/Klinik</Label>
            </Col>
            <Col sm='2'>
              <Input
                type="datetime-local"
                name="tanggal_pasien_keluar"
                defaultValue='tanggal_pasien_keluar'
                innerRef={register({ required: false })}
                invalid={errors.tanggal_pasien_keluar && true}
              />
            </Col>
          </FormGroup>
          <FormGroup row className="my-1 align-items-center mx-1">
            <Col sm='2'>
              <Label>Cara Pasien Keluar RS/Klinik</Label>
            </Col>
            <Col sm='2'>
              <div>
                <Input
                  type="radio"
                  className="me-1"
                  name="cara_pasien_keluar"
                  value='1'
                  defaultChecked={!!(data.form && data.form.Cara_Pasien_Keluar && data.form.Cara_Pasien_Keluar === '1')}
                  innerRef={register({ required: false })}
                />
                <Label>Pulang</Label>
              </div>
              <div>
                <Input
                  type="radio"
                  className="me-1"
                  name="cara_pasien_keluar"
                  value='2'
                  defaultChecked={!!(data.form && data.form.Cara_Pasien_Keluar && data.form.Cara_Pasien_Keluar === '2')}
                  innerRef={register({ required: false })}
                />
                <Label>Meninggal</Label>
              </div>
              <div>
                <Input
                  type="radio"
                  className="me-1"
                  name="cara_pasien_keluar"
                  value='3'
                  defaultChecked={!!(data.form && data.form.Cara_Pasien_Keluar && data.form.Cara_Pasien_Keluar === '3')}
                  innerRef={register({ required: false })}
                />
                <Label>Pindah ke Klinik/RS</Label>
                <Input
                  type="text"
                  innerRef={register({ required: false })}
                  name='nama_pindah_faskes'
                />
              </div>
            </Col>
          </FormGroup>
        </div>
        <Row className="form-group align-items-center mt-4" row>
          <Col>
            <div className="d-flex justify-content-around my-0">
              <Signature
                label="Perawat Penanggung Jawab"
                additionalLabel={(data.form && data.form.Nama_Perawat && data.form.Nama_Perawat !== '') ? data.form.Nama_Perawat : undefined}
                type="picker"
                initialImage={(data.form && data.form.TTD_Perawat && data.form.TTD_Perawat !== '' && !data.form.TTD_Perawat.includes('null')) ? data.form.TTD_Perawat : undefined}
                defaultPerson={(userData && userData.id) ? userData.id : ''}
                persons={nurses}
                onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)}
              />
              <Input
                type="hidden"
                name="id_perawat"
                innerRef={register()}
              />
              <Input
                type="hidden"
                name="ttd_perawat"
                innerRef={register()}
              />
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-around my-0">
              <Signature
                label="IPCN"
                additionalLabel={(data.form && data.form.Nama_Perawat_IPCN && data.form.Nama_Perawat_IPCN !== '') ? data.form.Nama_Perawat_IPCN : undefined}
                type="picker"
                initialImage={(data.form && data.form.TTD_Perawat_IPCN && data.form.TTD_Perawat_IPCN !== '' && !data.form.TTD_Perawat_IPCN.includes('null')) ? data.form.TTD_Perawat_IPCN : undefined}
                defaultPerson={(userData && userData.id) ? userData.id : ''}
                persons={nurses}
                onSigned={(assigner: SignatureModel) => handleIpcnSigned(assigner)}
              />
              <Input
                type="hidden"
                name="id_perawat_ipcn"
                innerRef={register()}
              />
              <Input
                type="hidden"
                name="ttd_perawat_ipcn"
                innerRef={register()}
              />
            </div>
          </Col>
        </Row>
        <FormGroup className="d-flex mb-0 mt-2 justify-content-center">
          <SubmitButton
            label="Simpan"
            buttonColor='primary'
            spinnerColor='light'
            processing={processing}
            spinnerStyle={{ width: '1rem', height: '1rem' }}
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
            <Label className='me-1'>Terakhir disimpan: </Label>
            <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
          </div>
        </FormGroup>
      </Form>
    </Fragment>
  )
}

export default HaisInfectionSurveillanceForm;
