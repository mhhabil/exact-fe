import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from "reactstrap";
import { IUpdatePatientHandoverFormRequest, UpdatePatientHandoverFormRequest } from "../requests";
import { fetchPatientHandoverForm, fetchPatientHandoverFormPdf, handlePdf } from "../stores/patient-handover-form.store";
import { useEffect, useState } from "react";
import { AppRequest } from "@src/shared/request";
import { DateTimeConverter } from "@src/shared/datetime-converter";
import { DateTimeInput } from "@src/shared/input";
import { FindPdfRequest } from "@src/shared/pdf";
import { PatientHandoverFormService } from "../services";
import { PatientHandoverModel } from "../models/patient-handover-form-model";
import { PdfPatientHandoverFormRequest } from "../requests/pdf-patient-handover-form-request";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { SubmitButton } from "@src/shared/button";
import nilai from "../const/nilai";
import nilaie from "@src/modules/emergency-room/assessment/const/nilaie";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useForm } from "react-hook-form";
import { useWarnIfUnsavedChanges } from "@src/shared/alert";

const PatientHandoverForm = (props: { data: PatientHandoverModel}) => {
  const { data } = props;

  const [processing, setProcessing] = useState(false);
  const dispatch = useAppDispatch();
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);

  const { pdf } = useAppSelector(state => state.patientHandoverFormStore);
  const [pdfData, setPdfData] = useState<any | undefined>(undefined);
  const [nilaiAktivitas, setNilaiAktivitas] = useState(data && data.form && data.form.Alderette_Aktivitas ? parseInt(data.form.Alderette_Aktivitas) : 0);
  const [nilaiSirkulasi, setNilaiSirkulasi] = useState(data && data.form && data.form.Alderette_Sirkulasi ? parseInt(data.form.Alderette_Sirkulasi) : 0);
  const [nilaiPernafasan, setNilaiPernafasan] = useState(data && data.form && data.form.Alderette_Pernafasan ? parseInt(data.form.Alderette_Pernafasan) : 0);
  const [nilaiPernafasanSteward, setNilaiPernafasanSteward] = useState(data && data.form && data.form.Steward_Pernafasan ? parseInt(data.form.Steward_Pernafasan) : 0);
  const [nilaiKesadaran, setNilaiKesadaran] = useState(data && data.form && data.form.Alderette_Kesadaran ? parseInt(data.form.Alderette_Kesadaran) : 0);
  const [nilaiKesadaranSteward, setNilaiKesadaranSteward] = useState(data && data.form && data.form.Steward_Kesadaran ? parseInt(data.form.Steward_Kesadaran) : 0);
  const [nilaiMotorik, setNilaiMotorik] = useState(data && data.form && data.form.Steward_Motorik ? parseInt(data.form.Steward_Motorik) : 0);
  const [nilaiWarnaKulit, setNilaiWarnaKulit] = useState(data && data.form && data.form.Alderette_Warna_Kulit ? parseInt(data.form.Alderette_Warna_Kulit) : 0);
  const [total, setTotal] = useState(0);
  const [totalSteward, setTotalSteward] = useState(0);
  const [penanggungJawab, setPenanggungJawab] = useState<string | undefined>((data && data.form && data.form.Penanggungjawab) ? data.form.Penanggungjawab : '5')

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPatientHandoverFormPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-jalan_serah-terima-pasien' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  const { register, handleSubmit, errors, setValue, reset, formState, watch } = useForm<any>({
    mode: 'onChange',
    // resolver: yupResolver(UpdatePostoperativeInstructionsRequest.schema()),
    defaultValues: {
      penanggungjawab: data?.form?.Penanggungjawab ?? '',
      penanggungjawab_lain: data?.form?.Penanggungjawab_Lain ?? '',
      kesadaran: data?.form?.Kesadaran ?? '',
      luka_operasi: data?.form?.Luka_Operasi ?? '',
      luka_lain: data?.form?.Luka_Lain ?? '',
      // td: data?.form?.Td ?? data?.asesmen?.Vital_Tekanan_Darah ?? data?.ews?.Td ?? '',
      td: data && data.form && data.form.Td && data.form.Td !== '' ? data.form.Td : data?.tanda_vital?.Td !== '' ? data?.tanda_vital?.Td : data?.asesmen?.Vital_Tekanan_Darah !== '' ? data?.asesmen?.Vital_Tekanan_Darah : data?.ews?.Td !== '' ? data?.ews?.Td : '',
      // rr: data?.form?.Rr ?? data?.asesmen?.Vital_Respiratory_Rate ?? data?.ews?.Rr ?? '',
      rr: data && data.form && data.form.Rr && data.form.Rr !== '' ? data.form.Rr : data?.tanda_vital?.Rr !== '' ? data?.tanda_vital?.Rr : data?.asesmen?.Vital_Respiratory_Rate !== '' ? data?.asesmen?.Vital_Respiratory_Rate : data?.ews?.Rr !== '' ? data?.ews?.Rr : '',
      // n: data?.form?.N ?? data?.asesmen?.Vital_Denyut_Nadi ?? data?.ews?.Nadi ?? '',
      n: data && data.form && data.form.N && data.form.N !== '' ? data.form.N : data?.tanda_vital?.Nadi !== '' ? data?.tanda_vital?.Nadi : data?.asesmen?.Vital_Denyut_Nadi !== '' ? data?.asesmen?.Vital_Denyut_Nadi : data?.ews?.Nadi !== '' ? data?.ews?.Nadi : '',
      // t: data?.form?.T ?? data?.asesmen?.Vital_Suhu ?? data?.ews?.Suhu_Tubuh ?? '',
      t: data && data.form && data.form.T && data.form.T !== '' ? data.form.T : data?.tanda_vital?.Suhu !== '' ? data?.tanda_vital?.Suhu : data?.asesmen?.Vital_Suhu !== '' ? data?.asesmen?.Vital_Suhu : data?.ews?.Suhu_Tubuh !== '' ? data?.ews?.Suhu_Tubuh : '',
      anestesi: data?.form?.Anestesi ?? '',
      alderette_aktivitas: data?.form?.Alderette_Aktivitas ?? '',
      alderette_aktivitas_keterangan: data?.form?.Alderette_Aktivitas_Keterangan ?? '',
      alderette_sirkulasi: data?.form?.Alderette_Sirkulasi ?? '',
      alderette_sirkulasi_keterangan: data?.form?.Alderette_Sirkulasi_Keterangan ?? '',
      alderette_pernafasan: data?.form?.Alderette_Pernafasan ?? '',
      alderette_pernafasan_keterangan: data?.form?.Alderette_Pernafasan_Keterangan ?? '',
      alderette_kesadaran: data?.form?.Alderette_Kesadaran ??  '',
      alderette_kesadaran_keterangan: data?.form?.Alderette_Kesadaran_Keterangan ??  '',
      alderette_warna_kulit: data?.form?.Alderette_Warna_Kulit ?? '',
      alderette_warna_kulit_keterangan: data?.form?.Alderette_Warna_Kulit_Keterangan ?? '',
      alderette_score: data?.form?.Alderette_Score ?? '',
      steward_kesadaran: data?.form?.Steward_Kesadaran ?? '',
      steward_kesadaran_keterangan: data?.form?.Steward_Kesadaran_Keterangan ?? '',
      steward_pernafasan: data?.form?.Steward_Pernafasan ?? '',
      steward_pernafasan_keterangan: data?.form?.Steward_Pernafasan_Keterangan ?? '',
      steward_motorik: data?.form?.Steward_Motorik ?? '',
      steward_motorik_keterangan: data?.form?.Steward_Motorik_Keterangan ?? '',
      steward_score: data?.form?.Steward_Score ?? '',
      kesakitan: data?.form?.Kesakitan ?? '',
      mual: data?.form?.Mual ?? '',
      antibiotik: data?.form?.Antibiotik ?? '',
      tetes_mata: data?.form?.Tetes_Mata ?? '',
      obat_lain: data?.form?.Obat_Lain ?? '',
      infus: data?.form?.Infus ?? '',
      minum: data?.form?.Minum ?? '',
      lain_lain: data?.form?.Lain_lain ?? '',
      monitoring_setiap: data?.form?.Monitoring_Setiap ?? '',
      monitoring_selama: data?.form?.Monitoring_Selama ?? '',
      pa: data?.form?.Pa ?? '',
      waktu_verifikasi: (data && data.form && data.form.Waktu_Verifikasi) ? data.form.Waktu_Verifikasi.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      ttd_perawat_ranap_rajal: data?.form?.TTD_Perawat_Ranap_Rajal ?? '',
      id_perawat_ranap_rajal: data?.form?.ID_Perawat_Ranap_Rajal ?? '',
      ttd_perawat_kamar_bedah: data?.form?.TTD_Perawat_Kamar_Bedah ?? '',
      id_perawat_kamar_bedah: data?.form?.ID_Perawat_Kamar_Bedah ?? '',
    },
  });

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

  const { isDirty } = formState;

  useWarnIfUnsavedChanges(isDirty, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleChangePenanggung = (e: any) => {
    if (e.target.value === '1') {
      setValue('penanggungjawab_lain', '');
    }
    if (e.target.value === '2') {
      setValue('penanggungjawab_lain', '');
    }
    if (e.target.value === '3') {
      setValue('penanggungjawab_lain', '');
    }
    if (e.target.value === '4') {
      setValue('penanggungjawab_lain', '');
    }
    setPenanggungJawab(e.target.value)
    setValue('penanggungjawab',  e.target.value)
  }

  const handlePerawatRanap = (image: SignatureModel) => {
    setValue("ttd_perawat_ranap_rajal", image.Signature);
    setValue("id_perawat_ranap_rajal", image.ID_Karyawan);
  }

  const handlePerawatKamarBedah = (image: SignatureModel) => {
    setValue("ttd_perawat_kamar_bedah", image.Signature);
    setValue("id_perawat_kamar_bedah", image.ID_Karyawan);
  }

  const handleProcessing = () => {
    setProcessing(true);
  }

  const handleSubmitForm = (value: IUpdatePatientHandoverFormRequest) => {
    if (!treatment) {
      return;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdatePatientHandoverFormRequest.createFromJson({...value, ...appRequest});
    dispatch(handlePdf(undefined));
    PatientHandoverFormService().update(params)
      .then(() => {
        PatientHandoverFormService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            PatientHandoverFormService().pdfv3(PdfPatientHandoverFormRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
              .then(() => {
                setProcessing(false);
                dispatch(fetchPatientHandoverFormPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-jalan_serah-terima-pasien' })))
              })
          });
        setProcessing(false);
        dispatch(fetchPatientHandoverForm(appRequest));
      });
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormGroup className="form-group" row>
          <FormGroup>
            <div className="border-dark mt-2 p-1">
              <Row>
                <Col md='2' className="mt-1">
                  <Label>Penanggung Jawab</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="penanggungjawab"
                    type="radio"
                    name="penanggungjawab"
                    className="me-1"
                    onChange={(e) => handleChangePenanggung(e)}
                    value="1"
                    defaultChecked={data && data.form && data.form.Penanggungjawab === '1'}
                    innerRef={register("penanggungjawab") as any}
                  />{' '}
                  <Label>Pribadi</Label>
                </Col>
              </Row>
              <Row>
                <Col md='2' className="mt-1"></Col>
                <Col className="mt-1">
                  <Input
                    id="penanggungjawab_2"
                    type="radio"
                    name="penanggungjawab"
                    className="me-1"
                    onChange={(e) => handleChangePenanggung(e)}
                    value="2"
                    defaultChecked={data && data.form && data.form.Penanggungjawab === '2'}
                    innerRef={register("penanggungjawab") as any}
                  />{' '}
                  <Label>Perusahaan</Label>
                </Col>
              </Row>
              <Row>
                <Col md='2' className="mt-1"></Col>
                <Col className="mt-1">
                  <Input
                    id="penanggungjawab_3"
                    type="radio"
                    name="penanggungjawab"
                    className="me-1"
                    onChange={(e) => handleChangePenanggung(e)}
                    value="3"
                    defaultChecked={data && data.form && data.form.Penanggungjawab === '3'}
                    innerRef={register("penanggungjawab") as any}
                  />{' '}
                  <Label>BPJS Kesehatan</Label>
                </Col>
              </Row>
              <Row>
                <Col md='2' className="mt-1"></Col>
                <Col className="mt-1">
                  <Input
                    id="penanggungjawab_4"
                    type="radio"
                    name="penanggungjawab"
                    className="me-1"
                    onChange={(e) => handleChangePenanggung(e)}
                    value="4"
                    defaultChecked={data && data.form && data.form.Penanggungjawab === '4'}
                    innerRef={register("penanggungjawab") as any}
                  />{' '}
                  <Label>Asuransi</Label>
                </Col>
              </Row>
              <Row>
                <Col md='2' className="mt-1"></Col>
                <Col className="mt-1">
                  <Input
                    id="penanggungjawab_5"
                    type="radio"
                    name="penanggungjawab"
                    className="me-1"
                    onChange={(e) => handleChangePenanggung(e)}
                    value="5"
                    defaultChecked={data && data.form && data.form.Penanggungjawab === '5'}
                    innerRef={register("penanggungjawab") as any}
                  />{' '}
                  <Label>Lain-Lain</Label>
                </Col>
                <Col>
                  <Input
                    className="mt-1"
                    style={{marginLeft:'-260px'}}
                    id="penanggungjawab_lain"
                    type="text"
                    name="penanggungjawab_lain"
                    innerRef={register() as any}
                    readOnly={(penanggungJawab) ? penanggungJawab !== '5' : undefined}
                  />
                </Col>
              </Row>
            </div>
          </FormGroup>

          <FormGroup>
            <div className="border-dark p-1">
              <h4>Tanda-Tanda Vital Pasien</h4>
              <hr />
              <Row>
                <Col md='2' className="mt-1">
                  <Label>Kesadaran</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="kesadaran_1"
                    type="radio"
                    name="kesadaran"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    value="1"
                    defaultChecked={data && data.form && data.form.Kesadaran === '1'}
                    innerRef={register("kesadaran") as any}
                  />{' '}
                  <Label>CM</Label>
                </Col>
              </Row>
              <Row>
                <Col md='2' className="mt-1"></Col>
                <Col className="mt-1">
                  <Input
                    id="kesadaran_2"
                    type="radio"
                    name="kesadaran"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    value="2"
                    defaultChecked={data && data.form && data.form.Kesadaran === '2'}
                    innerRef={register("kesadaran") as any}
                  />{' '}
                  <Label>Somnolen</Label>
                </Col>
              </Row>
              <Row>
                <Col md='2' className="mt-1"></Col>
                <Col className="mt-1">
                  <Input
                    id="kesadaran_3"
                    type="radio"
                    name="kesadaran"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    value="3"
                    defaultChecked={data && data.form && data.form.Kesadaran === '3'}
                    innerRef={register("kesadaran") as any}
                  />{' '}
                  <Label>Sopor</Label>
                </Col>
              </Row>
              <Row>
                <Col md='2' className="mt-1"></Col>
                <Col className="mt-1">
                  <Input
                    id="kesadaran_4"
                    type="radio"
                    name="kesadaran"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    value="4"
                    defaultChecked={data && data.form && data.form.Kesadaran === '4'}
                    innerRef={register("kesadaran") as any}
                  />{' '}
                  <Label>Koma</Label>
                </Col>
              </Row>

              <Row className="mt-1">
                <Col md='2' className="mt-1">
                  <Label>Luka Operasi</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="luka_operasi_1"
                    type="radio"
                    name="luka_operasi"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    value="1"
                    defaultChecked={data && data.form && data.form.Luka_Operasi === '1'}
                    innerRef={register("luka_operasi") as any}
                  />{' '}
                  <Label>Baik</Label>
                </Col>
              </Row>
              <Row>
                <Col md='2' className="mt-1"></Col>
                <Col className="mt-1">
                  <Input
                    id="luka_operasi_2"
                    type="radio"
                    name="luka_operasi"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    value="2"
                    defaultChecked={data && data.form && data.form.Luka_Operasi === '2'}
                    innerRef={register("luka_operasi") as any}
                  />{' '}
                  <Label>Ada Pendarahan</Label>
                </Col>
              </Row>

              <Row className="mt-1">
                <Col md='2' className="mt-1">
                  <Label>Luka Lain</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="luka_lain_1"
                    type="radio"
                    name="luka_lain"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    value="1"
                    defaultChecked={data && data.form && data.form.Luka_Lain === '1'}
                    innerRef={register("luka_lain") as any}
                  />{' '}
                  <Label>Bekas Jatuh</Label>
                </Col>
              </Row>
              <Row>
                <Col md='2' className="mt-1"></Col>
                <Col className="mt-1">
                  <Input
                    id="luka_lain_2"
                    type="radio"
                    name="luka_lain"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    value="2"
                    defaultChecked={data && data.form && data.form.Luka_Lain === '2'}
                    innerRef={register("luka_lain") as any}
                  />{' '}
                  <Label>Luka Lainnya</Label>
                </Col>
              </Row>

              <Row>
                <Col md='2' className="mt-1">
                  <Label>TD</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    style={{width:'300px'}}
                    id="td"
                    type="text"
                    name="td"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row>
                <Col md='2' className="mt-1">
                  <Label>RR</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    style={{width:'300px'}}
                    id="rr"
                    type="text"
                    name="rr"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row>
                <Col md='2' className="mt-1">
                  <Label>N</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    style={{width:'300px'}}
                    id="n"
                    type="text"
                    name="n"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row>
                <Col md='2' className="mt-1">
                  <Label>T</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    style={{width:'300px'}}
                    id="t"
                    type="text"
                    name="t"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
            </div>
          </FormGroup>

          <FormGroup>
            <div className="border-dark p-1">
              <h4>Anestesi</h4>
              <hr />
              <Row className="mt-1">
                <Col md='2' className="mt-1">
                  <Label>Luka Operasi</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="anestesi_1"
                    type="radio"
                    name="anestesi"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    value="1"
                    defaultChecked={data && data.form && data.form.Anestesi === '1'}
                    innerRef={register("anestesi") as any}
                  />{' '}
                  <Label>General Anestesi</Label>
                </Col>
              </Row>
              <Row>
                <Col md='2' className="mt-1"></Col>
                <Col className="mt-1">
                  <Input
                    id="anestesi_2"
                    type="radio"
                    name="anestesi"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    value="2"
                    defaultChecked={data && data.form && data.form.Anestesi === '2'}
                    innerRef={register("anestesi") as any}
                  />{' '}
                  <Label>Local Anestesi</Label>
                </Col>
              </Row>

              <Row className="mt-1">
                <Col md='3' className="mt-1">
                  <Label>Alderete Score (Dewasa)</Label>
                </Col>
                <Col md='2' className="mt-1">
                  <Label>Aktivitas</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    type="select"
                    id= "alderette_aktivitas"
                    name= "alderette_aktivitas"
                    innerRef={register()}
                  >
                    <option value="" disabled={true}>---</option>
                    {
                      nilai && nilai.map((item: any, key: number) => {
                        return <option value={item.value} key={key}>{ item.name }</option>;
                      })
                    }
                  </Input>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="alderette_aktivitas_keterangan"
                    type="text"
                    name="alderette_aktivitas_keterangan"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row>
                <Col md='3' className="mt-1"></Col>
                <Col md='2' className="mt-1">
                  <Label>Sirkulasi</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    type="select"
                    id= "alderette_sirkulasi"
                    name= "alderette_sirkulasi"
                    innerRef={register({ required: false })}
                  >
                    <option value="" disabled={true}>---</option>
                    {
                      nilai && nilai.map((item: any, key: number) => {
                        return <option value={item.value} key={key}>{ item.name }</option>;
                      })
                    }
                  </Input>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="alderette_sirkulasi_keterangan"
                    type="text"
                    name="alderette_sirkulasi_keterangan"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>

              <Row>
                <Col md='3' className="mt-1"></Col>
                <Col md='2' className="mt-1">
                  <Label>Pernafasan</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    type="select"
                    id= "alderette_pernafasan"
                    name= "alderette_pernafasan"
                    innerRef={register({ required: false })}
                  >
                    <option value="" disabled={true}>---</option>
                    {
                      nilai && nilai.map((item: any, key: number) => {
                        return <option value={item.value} key={key}>{ item.name }</option>;
                      })
                    }
                  </Input>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="alderette_pernafasan_keterangan"
                    type="text"
                    name="alderette_pernafasan_keterangan"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>

              <Row>
                <Col md='3' className="mt-1"></Col>
                <Col md='2' className="mt-1">
                  <Label>Kesadaran</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    type="select"
                    id= "alderette_kesadaran"
                    name= "alderette_kesadaran"
                    innerRef={register({ required: false })}
                  >
                    <option value="" disabled={true}>---</option>
                    {
                      nilai && nilai.map((item: any, key: number) => {
                        return <option value={item.value} key={key}>{ item.name }</option>;
                      })
                    }
                  </Input>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="alderette_kesadaran_keterangan"
                    type="text"
                    name="alderette_kesadaran_keterangan"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>

              <Row>
                <Col md='3' className="mt-1"></Col>
                <Col md='2' className="mt-1">
                  <Label>Warna Kulit</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    type="select"
                    id= "alderette_warna_kulit"
                    name= "alderette_warna_kulit"
                    innerRef={register({ required: false })}
                  >
                    <option value="" disabled={true}>---</option>
                    {
                      nilai && nilai.map((item: any, key: number) => {
                        return <option value={item.value} key={key}>{ item.name }</option>;
                      })
                    }
                  </Input>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="alderette_warna_kulit_keterangan"
                    type="text"
                    name="alderette_warna_kulit_keterangan"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>

              <Row>
                <Col md='3' className="mt-1"></Col>
                <Col md='2' className="mt-1">
                  <Label>Total Skor</Label>
                </Col>
                <Col>
                  <Input
                    style={{width:'250px'}}
                    type="number"
                    id="alderette_score"
                    name="alderette_score"
                    innerRef={register()}
                    className='mt-1 disabled-div'
                  >
                  </Input>
                </Col>
                <Col className="mt-1">
                  <Label className='text-danger'> Keterangan:</Label>
                  <Label className='text-danger'>Tekanan darah normal berkisar 90/50-160/100</Label>
                  <Label className='text-danger'>Pasin dapat di pindah ke rawat inap, jika score {'>'} 8</Label>
                </Col>
              </Row>

              <Row className="mt-1">
                <Col md='3' className="mt-1">
                  <Label>Steward Score (Anak-anak)</Label>
                </Col>
                <Col md='2' className="mt-1">
                  <Label>Kesadaran</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    type="select"
                    id= "steward_kesadaran"
                    name= "steward_kesadaran"
                    innerRef={register()}
                  >
                    <option value="" disabled={true}>---</option>
                    {
                      nilai && nilai.map((item: any, key: number) => {
                        return <option value={item.value} key={key}>{ item.name }</option>;
                      })
                    }
                  </Input>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="steward_kesadaran_keterangan"
                    type="text"
                    name="steward_kesadaran_keterangan"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row>
                <Col md='3' className="mt-1"></Col>
                <Col md='2' className="mt-1">
                  <Label>Pernafasan</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    type="select"
                    id= "steward_pernafasan"
                    name= "steward_pernafasan"
                    innerRef={register()}
                  >
                    <option value="" disabled={false}>---</option>
                    {
                      nilai && nilai.map((item: any, key: number) => {
                        return <option value={item.value} key={key}>{ item.name }</option>;
                      })
                    }
                  </Input>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="steward_pernafasan_keterangan"
                    type="text"
                    name="steward_pernafasan_keterangan"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row>
                <Col md='3' className="mt-1"></Col>
                <Col md='2' className="mt-1">
                  <Label>Motorik</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    type="select"
                    id= "steward_motorik"
                    name= "steward_motorik"
                    innerRef={register()}
                  >
                    <option value="" disabled={true}>---</option>
                    {
                      nilai && nilai.map((item: any, key: number) => {
                        return <option value={item.value} key={key}>{ item.name }</option>;
                      })
                    }
                  </Input>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="steward_motorik_keterangan"
                    type="text"
                    name="steward_motorik_keterangan"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row>
                <Col md='3' className="mt-1"></Col>
                <Col md='2' className="mt-1">
                  <Label>Total Skor</Label>
                </Col>
                <Col>
                  <Input
                    style={{width:'250px'}}
                    type="number"
                    id="steward_score"
                    name="steward_score"
                    innerRef={register()}
                    className='mt-1 disabled-div'
                    value={totalSteward}
                  >
                  </Input>
                </Col>
                <Col className="mt-1">
                  <Label className='text-danger'> Keterangan:</Label>
                  <Label className='text-danger'>Jika jumlah {'>'} 5, pasien dapat di pindahkan ke rawat inap</Label>
                </Col>
              </Row>
            </div>
          </FormGroup>

          <FormGroup>
            <div className="border-dark p-1">
              <h4>Terapi Yang Diberikan</h4>
              <hr />
              <Row>
                <Col md='3' className="mt-1">
                  <Label>Bila Kesakitan</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="kesakitan"
                    type="text"
                    name="kesakitan"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row>
                <Col md='3' className="mt-1">
                  <Label>Bila Mual / Muntah</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="mual"
                    type="text"
                    name="mual"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row>
                <Col md='3' className="mt-1">
                  <Label>Antibiotik</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="antibiotik"
                    type="text"
                    name="antibiotik"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row>
                <Col md='3' className="mt-1">
                  <Label>Tetes Mata</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="tetes_mata"
                    type="text"
                    name="tetes_mata"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row>
                <Col md='3' className="mt-1">
                  <Label>Obat Lain</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="obat_lain"
                    type="text"
                    name="obat_lain"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row>
                <Col md='3' className="mt-1">
                  <Label>Infus</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="infus"
                    type="text"
                    name="infus"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row>
                <Col md='3' className="mt-1">
                  <Label>Minum</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="minum"
                    type="text"
                    name="minum"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row>
                <Col md='3' className="mt-1">
                  <Label>Lain-Lain</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="lain_lain"
                    type="text"
                    name="lain_lain"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row>
                <Col md='3' className="mt-1">
                  <Label>Monitoring Tanda Vital Setiap</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="monitoring_setiap"
                    type="text"
                    name="monitoring_setiap"
                    innerRef={register() as any}
                  />
                </Col>
                <Col className="mt-1">
                  <Label>Selama</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    style={{marginLeft:'-170px'}}
                    id="monitoring_selama"
                    type="text"
                    name="monitoring_selama"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
              <Row>
                <Col md='3' className="mt-1">
                  <Label>PA</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="pa"
                    type="radio"
                    name="pa"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    value="1"
                    defaultChecked={data && data.form && data.form.Pa === '1'}
                    innerRef={register("pa") as any}
                  />{' '}
                  <Label>Ada</Label>
                </Col>
              </Row>
              <Row>
                <Col md='3' className="mt-1"></Col>
                <Col className="mt-1">
                  <Input
                    id="pa"
                    type="radio"
                    name="pa"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    value="2"
                    defaultChecked={data && data.form && data.form.Pa === '2'}
                    innerRef={register("pa") as any}
                  />{' '}
                  <Label>Tidak</Label>
                </Col>
              </Row>
              <Row>
                <Col md='3' className='mt-1'>
                  <Label>Tanggal</Label>
                </Col>
                <Col className='mt-1'>
                  <DateTimeInput
                    name='waktu_verifikasi'
                    defaultValue='date'
                    md={1}
                    style={{ marginTop:'-25px'}}
                    {...{ register, errors }}
                  />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <div className="d-flex justify-content-around my-0">
                    <Signature
                      label="Perawat Ranap/Rajal"
                      type="picker"
                      additionalLabel={(data && data.form && data.form.Nama_Perawat_Ranap_Rajal) ? data.form.Nama_Perawat_Ranap_Rajal : ''}
                      initialImage={(data && data.form && data.form.TTD_Perawat_Ranap_Rajal && data.form.TTD_Perawat_Ranap_Rajal !== '') ? data.form.TTD_Perawat_Ranap_Rajal : undefined}
                      persons={nurses}
                      onSigned={(assigner: SignatureModel) => handlePerawatRanap(assigner)}
                    />
                    <Input
                      type="hidden"
                      name="ttd_perawat_ranap_rajal"
                      innerRef={register()}
                      invalid={errors.ttd_perawat_ranap_rajal && true}
                    />
                    <Input
                      type="hidden"
                      name="id_perawat_ranap_rajal"
                      innerRef={register()}
                      invalid={errors.id_perawat_ranap_rajal && true}
                    />
                  </div>
                </Col>

                <Col>
                  <div className="d-flex justify-content-around my-0">
                    <Signature
                      label="Perawat Kamar Bedah"
                      type="picker"
                      additionalLabel={(data && data.form && data.form.Nama_Perawat_Kamar_Bedah) ? data.form.Nama_Perawat_Kamar_Bedah : ''}
                      initialImage={(data && data.form && data.form.TTD_Perawat_Kamar_Bedah && data.form.TTD_Perawat_Kamar_Bedah !== '') ? data.form.TTD_Perawat_Kamar_Bedah : undefined}
                      persons={nurses}
                      onSigned={(assigner: SignatureModel) => handlePerawatKamarBedah(assigner)}
                    />
                    <Input
                      type="hidden"
                      name="ttd_perawat_kamar_bedah"
                      innerRef={register()}
                      invalid={errors.ttd_perawat_kamar_bedah && true}
                    />
                    <Input
                      type="hidden"
                      name="id_perawat_kamar_bedah"
                      innerRef={register()}
                      invalid={errors.id_perawat_kamar_bedah && true}
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
export default PatientHandoverForm;
