import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
import { useForm } from "react-hook-form";
import { DateTimeInput, TextInput } from "@shared/input";
import { FindPdfRequest, IPdfModel } from "@shared/pdf";
import { useEffect, useState } from "react";
import { AppRequest } from "@shared/request";
import { Signature } from "@shared/signature/components";
import { SignatureModel } from "@shared/signature/models/signature.model";
import { SubmitButton } from "@shared/button";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
/*PDF*/
import {
  fetchAnestheticStatus,
  fetchAnestheticStatusPdf,
  handlePdf,
} from "@modules/operating-room/anesthetic-status/stores/anesthetic-status.store";
/*CRUD*/
import {
  IUpdateAnestheticStatusRequest,
  UpdateAnestheticStatusRequest,
} from "@modules/operating-room/anesthetic-status/requests/update-anesthetic-status.request";
import { AnestheticStatus } from "@modules/operating-room/anesthetic-status/models/anesthetic-status.model";
import AnestheticStatusService from "@modules/operating-room/anesthetic-status/services";
import { PdfAnestheticStatusRequest } from '@modules/operating-room/anesthetic-status/requests/pdf-anesthetic-status.request';
import FormAnestheticDpjp from "@modules/operating-room/anesthetic-status/components/anesthetic-status-form/anesthetic-dpjp";
import FormAnestheticTeknik from "@modules/operating-room/anesthetic-status/components/anesthetic-status-form/anesthetic-teknik";
import FormAnestheticPraInduksi from "@modules/operating-room/anesthetic-status/components/anesthetic-status-form/anesthetic-pra-induksi";
import FormAnestheticPerifer from "@modules/operating-room/anesthetic-status/components/anesthetic-status-form/anesthetic-perifer";
import FormAnestheticPremedikasi from "@modules/operating-room/anesthetic-status/components/anesthetic-status-form/anesthetic-premedikasi";
import FormAnestheticInduksi from "@modules/operating-room/anesthetic-status/components/anesthetic-status-form/anesthetic-induksi";
import FormAnestheticNafas from "@modules/operating-room/anesthetic-status/components/anesthetic-status-form/anesthetic-nafas";
import FormAnestheticIntubasi from "@modules/operating-room/anesthetic-status/components/anesthetic-status-form/anesthetic-intubasi";
import FormAnestheticVentilasi from "@modules/operating-room/anesthetic-status/components/anesthetic-status-form/anesthetic-ventilasi";
import FormAnestheticPemulihan from "@modules/operating-room/anesthetic-status/components/anesthetic-status-form/anesthetic-pemulihan";
import FormAnestheticPasca from "@modules/operating-room/anesthetic-status/components/anesthetic-status-form/anesthetic-pasca";
import { DateTimeConverter } from "@src/shared/datetime-converter";
import { AnestesiImage1 } from '@src/shared/anestesi-image-1/components';
import { AnestesiImage2 } from '@src/shared/anestesi-image-2/components';
import { AnestesiImage3 } from '@src/shared/anestesi-image-3/components';


const MainAnestheticStatus = (props: { data: AnestheticStatus, register: any, errors: any, processing: boolean, setValue: any, control: any, unregister: any}) => {

  const { data } = props;
  const dispatch = useAppDispatch();
  const { doctors } = useAppSelector((state) => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const [processing, setProcessing] = useState(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const { treatment } = useAppSelector((state) => state.patient);
  const { pdf } = useAppSelector((state) => state.anestheticStatus);

  const handleTandaTanganPenata = (image: SignatureModel) => {
    setValue("ttd_penata_anestesi", image.Signature);
    setValue("id_penata_anestesi", image.ID_Karyawan);
  };

  const handleTandaTanganDokter = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue("ttd_dokter_anestesi", image.Signature);
      setValue("id_dokter_anestesi", image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue("ttd_dokter_anestesi", image.Signature);
      setValue("id_dokter_anestesi", image.ID_Karyawan);
    }
  };

  const handleImageAnestesi_1 = (image: string) => {
    setValue("image_1", image);
  }

  const handleImageAnestesi_2 = (image: string) => {
    setValue("image_2", image);
  }

  const handleImageAnestesi_3 = (image: string) => {
    setValue("image_3", image);
  }

  useEffect(() => {
    if (treatment) {
      dispatch(fetchAnestheticStatusPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'ok_status-anestesi' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  const { register, handleSubmit, setValue, formState, reset, errors, control, unregister} =
    useForm({
      mode: "onChange",
      criteriaMode: "all",
      shouldFocusError: true,
      resolver: yupResolver(UpdateAnestheticStatusRequest.schema()),
      defaultValues: {

        id_dpjp_anestesi  :  data?.form?.ID_DPJP_Anestesi,
        id_dpjp_bedah  :  data?.form?.ID_DPJP_Bedah,
        id_asisten_anestesi  :  data?.form?.ID_Asisten_Anestesi,
        diagnosa_pra_bedah  :  data?.form?.Diagnosa_Pra_Bedah,
        diagnosis_pasca_bedah  :  data?.form?.Diagnosis_Pasca_Bedah,
        jenis_pembedahan  :  data?.form?.Jenis_Pembedahan,
        teknik_anestesi  :  data?.form?.Teknik_Anestesi,
        teknik_anestesi_lainnya  :  data?.form?.Teknik_Anestesi_Lainnya,
        teknik_khusus_hipotensi  :  data?.form?.Teknik_Khusus_Hipotensi,
        teknik_khusus_bronkoskopi  :  data?.form?.Teknik_Khusus_Bronkoskopi,
        teknik_khusus_tci  :  data?.form?.Teknik_Khusus_TCI,
        teknik_khusus_glidescope  :  data?.form?.Teknik_Khusus_Glidescope,
        teknik_khusus_cpb  :  data?.form?.Teknik_Khusus_CPB,
        teknik_khusus_usg  :  data?.form?.Teknik_Khusus_USG,
        teknik_khusus_ventilasi  :  data?.form?.Teknik_Khusus_Ventilasi,
        teknik_khusus_stimulator  :  data?.form?.Teknik_Khusus_Stimulator,
        teknik_khusus_lainnya  :  data?.form?.Teknik_Khusus_Lainnya,
        teknik_khusus_lainnya_teks  :  data?.form?.Teknik_Khusus_Lainnya_Teks,
        monitoring_ekg  :  data?.form?.Monitoring_EKG,
        monitoring_nibp  :  data?.form?.Monitoring_NIBP,
        monitoring_cath  :  data?.form?.Monitoring_Cath,
        monitoring_arteri  :  data?.form?.Monitoring_Arteri,
        monitoring_ngt  :  data?.form?.Monitoring_NGT,
        monitoring_spo2  :  data?.form?.Monitoring_SpO2,
        monitoring_etco2  :  data?.form?.Monitoring_EtCO2,
        monitoring_bis  :  data?.form?.Monitoring_BIS,
        monitoring_katerer  :  data?.form?.Monitoring_Katerer,
        monitoring_stetoskop  :  data?.form?.Monitoring_Stetoskop,
        monitoring_cvp  :  data?.form?.Monitoring_CVP,
        monitoring_temp  :  data?.form?.Monitoring_Temp,
        monitoring_lainnya  :  data?.form?.Monitoring_Lainnya,
        monitoring_lainnya_teks  :  data?.form?.Monitoring_Lainnya_Teks,
        monitoring_ekg_teks  :  data?.form?.Monitoring_EKG_Teks,
        monitoring_arteri_teks  :  data?.form?.Monitoring_Arteri_Teks,
        monitoring_cvp_teks  :  data?.form?.Monitoring_CVP_Teks,
        asa  :  data?.form?.ASA,
        alergi  :  data?.form?.Alergi,
        alergi_keterangan  :  data?.form?.Alergi_Keterangan,
        penyulit_pra_anestesi  :  data?.form?.Penyulit_Pra_Anestesi,
        checklist_inform_consent  :  data?.form?.Checklist_Inform_Consent,
        checklist_monitoring  :  data?.form?.Checklist_Monitoring,
        checklist_obat_anestesi  :  data?.form?.Checklist_Obat_Anestesi,
        checklist_obat_emergensi  :  data?.form?.Checklist_Obat_Emergensi,
        checklist_tatalaksana  :  data?.form?.Checklist_Tatalaksana,
        checklist_mesin  :  data?.form?.Checklist_Mesin,
        checklist_suction  :  data?.form?.Checklist_Suction,
        pra_induksi_kesadaran  :  data?.form?.Pra_Induksi_Kesadaran,
        pra_induksi_denyut_nadi  :  data?.form?.Pra_Induksi_Denyut_Nadi,
        pra_induksi_lainnya  :  data?.form?.Pra_Induksi_Lainnya,
        pra_induksi_rr  :  data?.form?.Pra_Induksi_RR,
        pra_induksi_saturasi  :  data?.form?.Pra_Induksi_Saturasi,
        pra_induksi_suhu  :  data?.form?.Pra_Induksi_Suhu,
        pra_induksi_tekanan_darah  :  data?.form?.Pra_Induksi_Tekanan_Darah,
        jam_pra_induksi  :  data?.form?.Jam_Pra_Induksi,
        catatan  :  data?.form?.Catatan,
        infus_perifer_1  :  data?.form?.Infus_Perifer_1,
        infus_perifer_2  :  data?.form?.Infus_Perifer_2,
        infus_perifer_3  :  data?.form?.Infus_Perifer_3,
        posisi  :  data?.form?.Posisi,
        posisi_lainnya  :  data?.form?.Posisi_Lainnya,
        premedikasi_im  :  data?.form?.Premedikasi_IM,
        premedikasi_iv  :  data?.form?.Premedikasi_IV,
        premedikasi_oral  :  data?.form?.Premedikasi_Oral,
        induksi_intravena  :  data?.form?.Induksi_Intravena,
        induksi_inhalasi  :  data?.form?.Induksi_Inhalasi,
        face_mask_no  :  data?.form?.Face_Mask_No,
        oro_no  :  data?.form?.Oro_No,
        ett_no  :  data?.form?.ETT_No,
        ett_fiksasi  :  data?.form?.ETT_Fiksasi,
        ett_jenis  :  data?.form?.ETT_Jenis,
        lma_jenis  :  data?.form?.LMA_Jenis,
        lma_no  :  data?.form?.LMA_No,
        trakhesotomi  :  data?.form?.Trakhesotomi,
        bronkoskopi_fiber  :  data?.form?.Bronkoskopi_Fiber,
        glidescope  :  data?.form?.Glidescope,
        tata_laksana_lainnya  :  data?.form?.Tata_Laksana_Lainnya,
        intubasi_sesudah_tidur  :  data?.form?.Intubasi_Sesudah_Tidur,
        intubasi_blind  :  data?.form?.Intubasi_Blind,
        intubasi_cuff  :  data?.form?.Intubasi_Cuff,
        intubasi_dengan_stilet  :  data?.form?.Intubasi_Dengan_Stilet,
        intubasi_kanan  :  data?.form?.Intubasi_Kanan,
        intubasi_kiri  :  data?.form?.Intubasi_Kiri,
        intubasi_level_ett  :  data?.form?.Intubasi_Level_ETT,
        intubasi_nasal  :  data?.form?.Intubasi_Nasal,
        intubasi_oral  :  data?.form?.Intubasi_Oral,
        intubasi_pack  :  data?.form?.Intubasi_Pack,
        intubasi_sulit_intubasi  :  data?.form?.Intubasi_Sulit_Intubasi,
        intubasi_sulit_intubasi_teks  :  data?.form?.Intubasi_Sulit_Intubasi_Teks,
        intubasi_sulit_ventilasi  :  data?.form?.Intubasi_Sulit_Ventilasi,
        intubasi_sulit_ventilasi_teks  :  data?.form?.Intubasi_Sulit_Ventilasi_Teks,
        intubasi_trakheostomi  :  data?.form?.Intubasi_Trakheostomi,
        intubasi_dengan_stilet_teks  :  data?.form?.Intubasi_Dengan_Stilet_Teks,
        ventilasi_kendali  :  data?.form?.Ventilasi_Kendali,
        ventilasi_lainnya  :  data?.form?.Ventilasi_Lainnya,
        ventilasi_lainnya_teks  :  data?.form?.Ventilasi_Lainnya_Teks,
        ventilasi_spontan  :  data?.form?.Ventilasi_Spontan,
        ventilasi_ventilator  :  data?.form?.Ventilasi_Ventilator,
        ventilasi_ventilator_peep  :  data?.form?.Ventilasi_Ventilator_PEEP,
        ventilasi_ventilator_rr  :  data?.form?.Ventilasi_Ventilator_RR,
        ventilasi_ventilator_tv  :  data?.form?.Ventilasi_Ventilator_TV,
        ckp_jam_masuk  :  data?.form?.CKP_Jam_Masuk,
        ckp_tekanan_darah  :  data?.form?.CKP_Tekanan_Darah,
        ckp_denyut_nadi  :  data?.form?.CKP_Denyut_Nadi,
        ckp_instruksi_khusus  :  data?.form?.CKP_Instruksi_Khusus,
        ckp_kesadaran  :  data?.form?.CKP_Kesadaran,
        ckp_penyulit_intra_operatif  :  data?.form?.CKP_Penyulit_Intra_Operatif,
        ckp_pernafasan  :  data?.form?.CKP_Pernafasan,
        ckp_rr  :  data?.form?.CKP_RR,
        ckp_suhu  :  data?.form?.CKP_Suhu,
        vas  :  data?.form?.VAS,
        vas_pulih  :  data?.form?.VAS_Pulih,
        jam_keluar_pulih  :  data?.form?.Jam_Keluar_Pulih,
        aldrette_aktivitas  :  data?.form?.Aldrette_Aktivitas,
        aldrette_kesadaran  :  data?.form?.Aldrette_Kesadaran,
        aldrette_pernafasan  :  data?.form?.Aldrette_Pernafasan,
        aldrette_sirkulasi  :  data?.form?.Aldrette_Sirkulasi,
        aldrette_skor_vas  :  data?.form?.Aldrette_Skor_VAS,
        aldrette_total  :  data?.form?.Aldrette_Total,
        aldrette_warna_kulit  :  data?.form?.Aldrette_Warna_Kulit,
        steward_kesadaran  :  data?.form?.Steward_Kesadaran,
        steward_motorik  :  data?.form?.Steward_Motorik,
        steward_pernafasan  :  data?.form?.Steward_Pernafasan,
        steward_skor_vas  :  data?.form?.Steward_Skor_VAS,
        steward_total  :  data?.form?.Steward_Total,
        pindah_ke  :  data?.form?.Pindah_Ke,
        pindah_ke_lainnya  :  data?.form?.Pindah_Ke_Lainnya,
        grid_chart_data  :  data?.form?.Grid_Chart_Data,
        grid_chart_img  :  data?.form?.Grid_Chart_Img,
        catatan_khusus_ruang_pemulihan  :  data?.form?.Catatan_Khusus_Ruang_Pemulihan,
        ipa_antibiotik  :  data?.form?.IPA_Antibiotik,
        ipa_diet  :  data?.form?.IPA_Diet,
        ipa_infus  :  data?.form?.IPA_Infus,
        ipa_lainnya  :  data?.form?.IPA_Lainnya,
        ipa_obat  :  data?.form?.IPA_Obat,
        ipa_penanganan_mual  :  data?.form?.IPA_Penanganan_Mual,
        ipa_pengelolaan_nyeri  :  data?.form?.IPA_Pengelolaan_Nyeri,
        ipa_tensi_selama  :  data?.form?.IPA_Tensi_Selama,
        ipa_tensi_setiap  :  data?.form?.IPA_Tensi_Setiap,
        ttd_dokter_anestesi  :  data?.form?.TTD_Dokter_Anestesi,
        id_dokter_anestesi  :  data?.form?.ID_Dokter_Anestesi,
        ttd_penata_anestesi  :  data?.form?.TTD_Penata_Anestesi,
        id_penata_anestesi  :  data?.form?.ID_Penata_Anestesi,
        url_image_chart  :  data?.form?.Url_Image_Chart,
        name_image_chart  :  data?.form?.Name_Image_Chart,
        size_image_chart  :  data?.form?.Size_Image_Chart,
        type_image_chart  :  data?.form?.Type_Image_Chart,
        json_image_chart  :  data?.form?.Json_Image_Chart,
        skala_anestesi  :  data?.form?.Skala_Anestesi,
        image_1  :  data?.form?.Image_1,
        image_2 :  data?.form?.Image_2,
        image_3 :  data?.form?.Image_3,
      },
    });

  const handleProcessing = () => {
    setProcessing(true);
  };

  const handleReset = (value: IUpdateAnestheticStatusRequest) => {
    reset();
  };


  const handleSubmitForm = (value: IUpdateAnestheticStatusRequest) => {

    if (!treatment) {
      return;
    }
    handleProcessing();
    reset(value);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateAnestheticStatusRequest.createFromJson({
      ...value,
      ...appRequest,
    });
    dispatch(handlePdf(undefined));
    AnestheticStatusService()
      .update(params)
      .then((resp) => {
        const { data } = resp;
        AnestheticStatusService().pdfv3(PdfAnestheticStatusRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest))
          .then(() => {
            setProcessing(false);
            dispatch(fetchAnestheticStatusPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'ok_status-anestesi' })));
          })
        setProcessing(false);
        dispatch(fetchAnestheticStatus(appRequest));
      })
      .catch((err) => {
        console.error(err);
        setProcessing(false);
      });
  };

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>

      <FormAnestheticDpjp
        data={data}
        {...{ register, errors, processing, setValue, control, unregister }}
      />

      <FormAnestheticTeknik
        data={data}
        {...{ register, errors, processing, setValue, control, unregister }}
      />

      <FormAnestheticPraInduksi
        data={data}
        {...{ register, errors, processing, setValue, control, unregister }}
      />

      <FormAnestheticPerifer
        data={data}
        {...{ register, errors, processing, setValue, control, unregister }}
      />

      <FormAnestheticPremedikasi
        data={data}
        {...{ register, errors, processing, setValue, control, unregister }}
      />


      <FormAnestheticInduksi
        data={data}
        {...{ register, errors, processing, setValue, control, unregister }}
      />

      <FormAnestheticNafas
        data={data}
        {...{ register, errors, processing, setValue, control, unregister }}
      />

      <FormAnestheticIntubasi
        data={data}
        {...{ register, errors, processing, setValue, control, unregister }}
      />

      <FormAnestheticVentilasi
        data={data}
        {...{ register, errors, processing, setValue, control, unregister }}
      />

      <FormAnestheticPemulihan
        data={data}
        {...{ register, errors, processing, setValue, control, unregister }}
      />


      <FormAnestheticPasca
        data={data}
        {...{ register, errors, processing, setValue, control, unregister }}
      />

      <Card className="border-1">
        <CardBody>

          <Col>
            <AnestesiImage1
              initialImage={(data && data.form && data.form.Image_1 && data.form.Image_1 !== '') ? data.form.Image_1 : undefined}
              formName='ok/status-anestesi'
              component='anestesi_status_1'
              onSaved={(image: string) => handleImageAnestesi_1(image)}
            />
            <Input
              type="hidden"
              name="image_1"
              innerRef={register()}
            />
          </Col>
          <Col>
            <AnestesiImage2
              initialImage={(data && data.form && data.form.Image_2 && data.form.Image_2 !== '') ? data.form.Image_2 : undefined}
              formName='ok/status-anestesi'
              component='anestesi_status_2'
              onSaved={(image: string) => handleImageAnestesi_2(image)}
            />
            <Input
              type="hidden"
              name="image_2"
              innerRef={register()}
            />
          </Col>
          <Col>
            <AnestesiImage3
              initialImage={(data && data.form && data.form.Image_3 && data.form.Image_3 !== '') ? data.form.Image_3 : undefined}
              formName='ok/status-anestesi'
              component='anestesi_status_3'
              onSaved={(image: string) => handleImageAnestesi_3(image)}
            />
            <Input
              type="hidden"
              name="image_3"
              innerRef={register()}
            />
          </Col>

        </CardBody>
      </Card>

      <Card className="border-1">
        <CardBody>
          <Row className="mb-2"></Row>
          <Row className="mt-2">
            <Col>
              <Signature
                label="Dokter Anestesi"
                type="picker"
                additionalLabel={data && data.form && data.form.Nama_Dokter_Anestesi ? data.form.Nama_Dokter_Anestesi : ""}
                initialImage= { data && data.form && data.form.TTD_Dokter_Anestesi && data.form.TTD_Dokter_Anestesi !== "" ? data.form.TTD_Dokter_Anestesi : undefined}
                persons={doctors}
                unit="dokter"
                onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                  if (isFormDoctor) {
                    handleTandaTanganDokter(assigner, isFormDoctor)
                  }
                  if (!isFormDoctor) {
                    handleTandaTanganDokter(assigner)
                  }
                }}
              />
              <Input
                type="hidden"
                name="ttd_dokter_anestesi"
                innerRef={register({ required: true })}
                invalid={errors["ttd_dokter_anestesi"] && true}
              />
              <Input
                type="hidden"
                name="id_dokter_anestesi"
                innerRef={register({ required: true })}
                invalid={errors["id_dokter_anestesi"] && true}
              />
            </Col>
            <Col>
              <Signature
                label="Penata Anestesi"
                type="picker"
                additionalLabel={data && data.form && data.form.Nama_Penata_Anestesi ? data.form.Nama_Penata_Anestesi : ""}
                initialImage= { data && data.form && data.form.TTD_Penata_Anestesi && data.form.TTD_Penata_Anestesi !== "" ? data.form.TTD_Penata_Anestesi : undefined}
                persons={nurses}
                onSigned={(assigner: SignatureModel) => handleTandaTanganPenata(assigner)}
              />
              <Input
                type="hidden"
                name="ttd_penata_anestesi"
                innerRef={register({ required: true })}
                invalid={errors["ttd_penata_anestesi"] && true}
              />
              <Input
                type="hidden"
                name="id_penata_anestesi"
                innerRef={register({ required: true })}
                invalid={errors["id_penata_anestesi"] && true}
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <FormGroup className="d-flex mb-0 justify-content-center">

                <SubmitButton
                  label="Simpan"
                  buttonColor="primary"
                  spinnerStyle={{ width: "1rem", height: "1rem" }}
                  spinnerColor="light"
                  processing={processing}
                />
                {pdfData && Array.isArray(pdfData) && pdfData.length > 0 && (
                  <a
                    color="success"
                    href={`${pdfData[0].URL}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="me-1" color="success" type="button">
                      Cetak
                    </Button>
                  </a>
                )}
                {(!pdfData ||
                  (pdfData &&
                    Array.isArray(pdfData) &&
                    pdfData.length === 0)) && (
                  <Button
                    className="me-1"
                    color="success"
                    type="button"
                    disabled
                  >
                    Cetak
                  </Button>
                )}
              </FormGroup>
              <FormGroup className='form-group mt-0' row>
                <div className='d-flex justify-content-center align-items-center'>
                  <Label className='me-1'>Terakhir Disimpan: </Label>
                  <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
                </div>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Form>
  );

};

export default MainAnestheticStatus;
