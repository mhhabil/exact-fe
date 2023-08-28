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
import { PreparationOfAnestheticEquipmentModel } from "../models/preparation-of-anesthetic-equipment-model";
import { IUpdatePreparationOfAnestheticEquipmentRequest, UpdatePreparationOfAnestheticEquipmentRequest } from "../requests";
import { fetchPreparationOfAnestheticEquipment, fetchPreparationOfAnestheticEquipmentPdf, handlePdf } from "../stores/preparation-of-anesthetic-equipment.store";
import { PreparationOfAnestheticEquipmentService } from "../services";
import { PdfPreparationOfAnestheticEquipmentRequest } from "../requests/pdf-preparation-of-anesthetic-equipment";
import { DateTimeConverter } from "@src/shared/datetime-converter";

const PreparationOfAnestheticEquipmentForm = (props: { data: PreparationOfAnestheticEquipmentModel}) => {
  const { data } = props;

  const [processing, setProcessing] = useState(false);
  const dispatch = useAppDispatch();
  const [defaultPattern, setDefaultPattern] = useState<any>();
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const [listrik_1, setListrik_1] = useState<any>(`${data?.form?.Listrik_1}`);
  const [listrik_2, setListrik_2] = useState<any>(`${data?.form?.Listrik_2}`);
  const [listrik_3, setListrik_3] = useState<any>(`${data?.form?.Listrik_3}`);
  const [gasMedis_1, setGasMedis_1] = useState<any>(`${data?.form?.Gas_1}`);
  const [gasMedis_2, setGasMedis_2] = useState<any>(`${data?.form?.Gas_2}`);
  const [gasMedis_3, setGasMedis_3] = useState<any>(`${data?.form?.Gas_3}`);
  const [gasMedis_4, setGasMedis_4] = useState<any>(`${data?.form?.Gas_4}`);
  const [gasMedis_5, setGasMedis_5] = useState<any>(`${data?.form?.Gas_5}`);
  const [gasMedis_6, setGasMedis_6] = useState<any>(`${data?.form?.Gas_6}`);
  const [Mesin_1, setMesin_1] = useState<any>(`${data?.form?.Mesin_Anestesi_1}`);
  const [Mesin_2, setMesin_2] = useState<any>(`${data?.form?.Mesin_Anestesi_2}`);
  const [Mesin_3, setMesin_3] = useState<any>(`${data?.form?.Mesin_Anestesi_3}`);
  const [Mesin_4, setMesin_4] = useState<any>(`${data?.form?.Mesin_Anestesi_4}`);
  const [Mesin_5, setMesin_5] = useState<any>(`${data?.form?.Mesin_Anestesi_5}`);
  const [manajemen_1, setManajemen_1] = useState<any>(`${data?.form?.Manajemen_Nafas_1}`);
  const [manajemen_2, setManajemen_2] = useState<any>(`${data?.form?.Manajemen_Nafas_2}`);
  const [manajemen_3, setManajemen_3] = useState<any>(`${data?.form?.Manajemen_Nafas_3}`);
  const [manajemen_4, setManajemen_4] = useState<any>(`${data?.form?.Manajemen_Nafas_4}`);
  const [manajemen_5, setManajemen_5] = useState<any>(`${data?.form?.Manajemen_Nafas_5}`);
  const [manajemen_6, setManajemen_6] = useState<any>(`${data?.form?.Manajemen_Nafas_6}`);
  const [manajemen_7, setManajemen_7] = useState<any>(`${data?.form?.Manajemen_Nafas_7}`);
  const [manajemen_8, setManajemen_8] = useState<any>(`${data?.form?.Manajemen_Nafas_8}`);
  const [manajemen_9, setManajemen_9] = useState<any>(`${data?.form?.Manajemen_Nafas_9}`);
  const [pantau_1, setPantau_1] = useState<any>(`${data?.form?.Pemantauan_1}`);
  const [pantau_2, setPantau_2] = useState<any>(`${data?.form?.Pemantauan_2}`);
  const [pantau_3, setPantau_3] = useState<any>(`${data?.form?.Pemantauan_3}`);
  const [pantau_4, setPantau_4] = useState<any>(`${data?.form?.Pemantauan_4}`);
  const [pantau_5, setPantau_5] = useState<any>(`${data?.form?.Pemantauan_5}`);
  const [pantau_6, setPantau_6] = useState<any>(`${data?.form?.Pemantauan_6}`);
  const [lain_1, setlain_1] = useState<any>(`${data?.form?.Lainnya_1}`);
  const [lain_2, setlain_2] = useState<any>(`${data?.form?.Lainnya_2}`);
  const [lain_3, setlain_3] = useState<any>(`${data?.form?.Lainnya_3}`);
  const [lain_4, setlain_4] = useState<any>(`${data?.form?.Lainnya_4}`);
  const [lain_5, setlain_5] = useState<any>(`${data?.form?.Lainnya_5}`);
  const [lain_6, setlain_6] = useState<any>(`${data?.form?.Lainnya_6}`);
  const [lain_7, setlain_7] = useState<any>(`${data?.form?.Lainnya_7}`);
  const [obatObat_1, setObatObat_1] = useState<any>(`${data?.form?.Obat_1}`);
  const [obatObat_2, setObatObat_2] = useState<any>(`${data?.form?.Obat_2}`);
  const [obatObat_3, setObatObat_3] = useState<any>(`${data?.form?.Obat_3}`);
  const [obatObat_4, setObatObat_4] = useState<any>(`${data?.form?.Obat_4}`);
  const [obatObat_5, setObatObat_5] = useState<any>(`${data?.form?.Obat_5}`);
  const [obatObat_6, setObatObat_6] = useState<any>(`${data?.form?.Obat_6}`);
  const [obatObat_7, setObatObat_7] = useState<any>(`${data?.form?.Obat_7}`);

  const { pdf } = useAppSelector(state => state.preparationOfAnestheticEquipmentStore);
  const [pdfData, setPdfData] = useState<any | undefined>(undefined);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPreparationOfAnestheticEquipmentPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'ok_persiapan-peralatan' })));
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
      setListrik_1(`${data?.form?.Listrik_1}`);
      setListrik_2(`${data?.form?.Listrik_2}`);
      setListrik_3(`${data?.form?.Listrik_3}`);
      setGasMedis_1(`${data?.form?.Gas_1}`);
      setGasMedis_2(`${data?.form?.Gas_2}`);
      setGasMedis_3(`${data?.form?.Gas_3}`);
      setGasMedis_4(`${data?.form?.Gas_4}`);
      setGasMedis_5(`${data?.form?.Gas_5}`);
      setGasMedis_6(`${data?.form?.Gas_6}`);
      setMesin_1(`${data?.form?.Mesin_Anestesi_1}`);
      setMesin_2(`${data?.form?.Mesin_Anestesi_2}`);
      setMesin_3(`${data?.form?.Mesin_Anestesi_3}`);
      setMesin_4(`${data?.form?.Mesin_Anestesi_4}`);
      setMesin_5(`${data?.form?.Mesin_Anestesi_5}`);
      setManajemen_1(`${data?.form?.Manajemen_Nafas_1}`);
      setManajemen_2(`${data?.form?.Manajemen_Nafas_2}`);
      setManajemen_3(`${data?.form?.Manajemen_Nafas_3}`);
      setManajemen_4(`${data?.form?.Manajemen_Nafas_4}`);
      setManajemen_5(`${data?.form?.Manajemen_Nafas_5}`);
      setManajemen_6(`${data?.form?.Manajemen_Nafas_6}`);
      setManajemen_7(`${data?.form?.Manajemen_Nafas_7}`);
      setManajemen_8(`${data?.form?.Manajemen_Nafas_8}`);
      setManajemen_9(`${data?.form?.Manajemen_Nafas_9}`);
      setPantau_1(`${data?.form?.Pemantauan_1}`);
      setPantau_2(`${data?.form?.Pemantauan_2}`);
      setPantau_3(`${data?.form?.Pemantauan_3}`);
      setPantau_4(`${data?.form?.Pemantauan_4}`);
      setPantau_5(`${data?.form?.Pemantauan_5}`);
      setPantau_6(`${data?.form?.Pemantauan_6}`);
      setlain_1(`${data?.form?.Lainnya_1}`);
      setlain_2(`${data?.form?.Lainnya_2}`);
      setlain_3(`${data?.form?.Lainnya_3}`);
      setlain_4(`${data?.form?.Lainnya_4}`);
      setlain_5(`${data?.form?.Lainnya_5}`);
      setlain_6(`${data?.form?.Lainnya_6}`);
      setlain_7(`${data?.form?.Lainnya_7}`);
      setObatObat_1(`${data?.form?.Obat_1}`);
      setObatObat_2(`${data?.form?.Obat_2}`);
      setObatObat_3(`${data?.form?.Obat_3}`);
      setObatObat_4(`${data?.form?.Obat_4}`);
      setObatObat_5(`${data?.form?.Obat_5}`);
      setObatObat_6(`${data?.form?.Obat_6}`);
      setObatObat_7(`${data?.form?.Obat_7}`);
    }
  }, [data])

  useEffect(() => {
    if (defaultPattern === '1') {
      setValue('listrik_1', '1');
      setListrik_1('1');
      setValue('listrik_2', '1');
      setListrik_2('1');
      setValue('listrik_3', '1');
      setListrik_3('1');
      setValue('gas_1', '1');
      setGasMedis_1('1');
      setValue('gas_2', '1');
      setGasMedis_2('1');
      setValue('gas_3', '1');
      setGasMedis_3('1');
      setValue('gas_4', '1');
      setGasMedis_4('1');
      setValue('gas_5', '1');
      setGasMedis_5('1');
      setValue('gas_6', '1');
      setGasMedis_6('1');
      setValue('mesin_anestesi_1', '1');
      setMesin_1('1');
      setValue('mesin_anestesi_2', '1');
      setMesin_2('1');
      setValue('mesin_anestesi_3', '1');
      setMesin_3('1');
      setValue('mesin_anestesi_4', '1');
      setMesin_4('1');
      setValue('mesin_anestesi_5', '1');
      setMesin_5('1');
      setValue('manajemen_nafas_1', '1');
      setManajemen_1('1');
      setValue('manajemen_nafas_2', '1');
      setManajemen_2('1');
      setValue('manajemen_nafas_3', '1');
      setManajemen_3('1');
      setValue('manajemen_nafas_4', '1');
      setManajemen_4('1');
      setValue('manajemen_nafas_5', '1');
      setManajemen_5('1');
      setValue('manajemen_nafas_6', '1');
      setManajemen_6('1');
      setValue('manajemen_nafas_7', '1');
      setManajemen_7('1');
      setValue('manajemen_nafas_8', '1');
      setManajemen_8('1');
      setValue('manajemen_nafas_9', '1');
      setManajemen_9('1');
      setValue('pemantauan_1', '1');
      setPantau_1('1');
      setValue('pemantauan_2', '1');
      setPantau_2('1');
      setValue('pemantauan_3', '1');
      setPantau_3('1');
      setValue('pemantauan_4', '1');
      setPantau_4('1');
      setValue('pemantauan_5', '1');
      setPantau_5('1');
      setValue('pemantauan_6', '1');
      setPantau_6('1');
      setValue('lainnya_1', '1');
      setlain_1('1');
      setValue('lainnya_2', '1');
      setlain_2('1');
      setValue('lainnya_3', '1');
      setlain_3('1');
      setValue('lainnya_4', '1');
      setlain_4('1');
      setValue('lainnya_5', '1');
      setlain_5('1');
      setValue('lainnya_6', '1');
      setlain_6('1');
      setValue('lainnya_7', '1');
      setlain_7('1');
      setValue('obat_1', '1');
      setObatObat_1('1');
      setValue('obat_2', '1');
      setObatObat_2('1');
      setValue('obat_3', '1');
      setObatObat_3('1');
      setValue('obat_4', '1');
      setObatObat_4('1');
      setValue('obat_5', '1');
      setObatObat_5('1');
      setValue('obat_6', '1');
      setObatObat_6('1');
      setValue('obat_7', '1');
      setObatObat_7('1');
    } else if (defaultPattern === '0') {
      setValue('listrik_1', undefined);
      setListrik_1(undefined);
      setValue('listrik_2', undefined);
      setListrik_2(undefined);
      setValue('listrik_3', undefined);
      setListrik_3(undefined);
      setValue('gas_1', undefined);
      setGasMedis_1(undefined);
      setValue('gas_2', undefined);
      setGasMedis_2(undefined);
      setValue('gas_3', undefined);
      setGasMedis_3(undefined);
      setValue('gas_4', undefined);
      setGasMedis_4(undefined);
      setValue('gas_5', undefined);
      setGasMedis_5(undefined);
      setValue('gas_6', undefined);
      setGasMedis_6(undefined);
      setValue('mesin_anestesi_1', undefined);
      setMesin_1(undefined);
      setValue('mesin_anestesi_2', undefined);
      setMesin_2(undefined);
      setValue('mesin_anestesi_3', undefined);
      setMesin_3(undefined);
      setValue('mesin_anestesi_4', undefined);
      setMesin_4(undefined);
      setValue('mesin_anestesi_5', undefined);
      setMesin_5(undefined);
      setValue('manajemen_nafas_1', undefined);
      setManajemen_1(undefined);
      setValue('manajemen_nafas_2', undefined);
      setManajemen_2(undefined);
      setValue('manajemen_nafas_3', undefined);
      setManajemen_3(undefined);
      setValue('manajemen_nafas_4', undefined);
      setManajemen_4(undefined);
      setValue('manajemen_nafas_5', undefined);
      setManajemen_5(undefined);
      setValue('manajemen_nafas_6', undefined);
      setManajemen_6(undefined);
      setValue('manajemen_nafas_7', undefined);
      setManajemen_7(undefined);
      setValue('manajemen_nafas_8', undefined);
      setManajemen_8(undefined);
      setValue('manajemen_nafas_9', undefined);
      setManajemen_9(undefined);
      setValue('pemantauan_1', undefined);
      setPantau_1(undefined);
      setValue('pemantauan_2', undefined);
      setPantau_2(undefined);
      setValue('pemantauan_3', undefined);
      setPantau_3(undefined);
      setValue('pemantauan_4', undefined);
      setPantau_4(undefined);
      setValue('pemantauan_5', undefined);
      setPantau_5(undefined);
      setValue('pemantauan_6', undefined);
      setPantau_6(undefined);
      setValue('lainnya_1', undefined);
      setlain_1(undefined);
      setValue('lainnya_2', undefined);
      setlain_2(undefined);
      setValue('lainnya_3', undefined);
      setlain_3(undefined);
      setValue('lainnya_4', undefined);
      setlain_4(undefined);
      setValue('lainnya_5', undefined);
      setlain_5(undefined);
      setValue('lainnya_6', undefined);
      setlain_6(undefined);
      setValue('lainnya_7', undefined);
      setlain_7(undefined);
      setValue('obat_1', undefined);
      setObatObat_1(undefined);
      setValue('obat_2', undefined);
      setObatObat_2(undefined);
      setValue('obat_3', undefined);
      setObatObat_3(undefined);
      setValue('obat_4', undefined);
      setObatObat_4(undefined);
      setValue('obat_5', undefined);
      setObatObat_5(undefined);
      setValue('obat_6', undefined);
      setObatObat_6(undefined);
      setValue('obat_7', undefined);
      setObatObat_7(undefined);
    }
  }, [defaultPattern]);

  const { register, handleSubmit, errors, setValue, reset, formState } = useForm<any>({
    mode: 'onChange',
    // resolver: yupResolver(UpdatePreparationOfAnestheticEquipmentRequest.schema()),
    defaultValues: {
      unit: data?.form?.Unit ?? 'OK',
      tanggal_tindakan: data?.form?.Tanggal_Tindakan ?? '',
      jenis_operasi: data?.form?.Jenis_Operasi ?? '',
      teknik_anestesi: data?.form?.Teknik_Anestesi ?? '',
      listrik_1: data?.form?.Listrik_1 ?? '',
      listrik_2: data?.form?.Listrik_2 ?? '',
      listrik_3: data?.form?.Listrik_3 ?? '',
      gas_1: data?.form?.Gas_1 ?? '',
      gas_2: data?.form?.Gas_2 ?? '',
      gas_3: data?.form?.Gas_3 ?? '',
      gas_4: data?.form?.Gas_4 ?? '',
      gas_5: data?.form?.Gas_5 ?? '',
      gas_6: data?.form?.Gas_6 ?? '',
      mesin_anestesi_1: data?.form?.Mesin_Anestesi_1 ?? '',
      mesin_anestesi_2: data?.form?.Mesin_Anestesi_2 ?? '',
      mesin_anestesi_3: data?.form?.Mesin_Anestesi_3 ?? '',
      mesin_anestesi_4: data?.form?.Mesin_Anestesi_4 ?? '',
      mesin_anestesi_5: data?.form?.Mesin_Anestesi_5 ?? '',
      manajemen_nafas_1: data?.form?.Manajemen_Nafas_1 ?? '',
      manajemen_nafas_2: data?.form?.Manajemen_Nafas_2 ?? '',
      manajemen_nafas_3: data?.form?.Manajemen_Nafas_3 ?? '',
      manajemen_nafas_4: data?.form?.Manajemen_Nafas_4 ?? '',
      manajemen_nafas_5: data?.form?.Manajemen_Nafas_5 ?? '',
      manajemen_nafas_6: data?.form?.Manajemen_Nafas_6 ?? '',
      manajemen_nafas_7: data?.form?.Manajemen_Nafas_7 ?? '',
      manajemen_nafas_8: data?.form?.Manajemen_Nafas_8 ?? '',
      manajemen_nafas_9: data?.form?.Manajemen_Nafas_9 ?? '',
      pemantauan_1: data?.form?.Pemantauan_1 ?? '',
      pemantauan_2: data?.form?.Pemantauan_2 ?? '',
      pemantauan_3: data?.form?.Pemantauan_3 ?? '',
      pemantauan_4: data?.form?.Pemantauan_4 ?? '',
      pemantauan_5: data?.form?.Pemantauan_5 ?? '',
      pemantauan_6: data?.form?.Pemantauan_6 ?? '',
      lainnya_1: data?.form?.Lainnya_1 ?? '',
      lainnya_2: data?.form?.Lainnya_2 ?? '',
      lainnya_3: data?.form?.Lainnya_3 ?? '',
      lainnya_4: data?.form?.Lainnya_4 ?? '',
      lainnya_5: data?.form?.Lainnya_5 ?? '',
      lainnya_6: data?.form?.Lainnya_6 ?? '',
      lainnya_7: data?.form?.Lainnya_7 ?? '',
      obat_1: data?.form?.Obat_1 ?? '',
      obat_2: data?.form?.Obat_2 ?? '',
      obat_3: data?.form?.Obat_3 ?? '',
      obat_4: data?.form?.Obat_4 ?? '',
      obat_5: data?.form?.Obat_5 ?? '',
      obat_6: data?.form?.Obat_6 ?? '',
      obat_7: data?.form?.Obat_7 ?? '',
      obat_7_teks: data?.form?.Obat_7_Teks ?? '',
      id_penata_anestesi: data?.form?.ID_Penata_Anestesi ?? '',
      id_dokter_anestesi: data?.form?.ID_Dokter_Anestesi ?? '',
      ttd_penata_anestesi: data?.form?.TTD_Penata_Anestesi ?? '',
      ttd_dokter_anestesi: data?.form?.TTD_Dokter_Anestesi ?? '',
    },
  });

  const { isDirty } = formState;

  // useWarnIfUnsavedChanges(isDirty, () => {
  //   return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  // })

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  const handleDoctorSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue('ttd_dokter_anestesi', image.Signature);
      setValue('id_dokter_anestesi', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('ttd_dokter_anestesi', image.Signature);
      setValue('id_dokter_anestesi', image.ID_Karyawan);
    }
  }

  const handlePerawatPengkaji = (image: SignatureModel) => {
    setValue('ttd_penata_anestesi', image.Signature);
    setValue('id_penata_anestesi', image.ID_Karyawan);
  }

  const handleProcessing = () => {
    setProcessing(true);
  }

  const handleSubmitForm = (value: IUpdatePreparationOfAnestheticEquipmentRequest) => {
    if (!treatment) {
      return;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdatePreparationOfAnestheticEquipmentRequest.createFromJson({...value, ...appRequest});
    dispatch(handlePdf(undefined));
    PreparationOfAnestheticEquipmentService().update(params)
      .then(() => {
        PreparationOfAnestheticEquipmentService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            PreparationOfAnestheticEquipmentService().pdfv3(PdfPreparationOfAnestheticEquipmentRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
              .then(() => {
                setProcessing(false);
                dispatch(fetchPreparationOfAnestheticEquipmentPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'ok_persiapan-peralatan' })))
              })
          });
        setProcessing(false);
        dispatch(fetchPreparationOfAnestheticEquipment(appRequest));
      });
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormGroup className="form-group" row>
          <FormGroup>
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
                <Label>Unit</Label>
              </Col>
              <Col>
                <Input
                  id="unit"
                  name="unit"
                  type="text"
                  disabled
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row className="mt-1">
              <Col md='3'>
                <Label>Tanggal / Jam Tindakan </Label>
              </Col>
              <Col>
                <Input
                  id="tanggal_tindakan"
                  name="tanggal_tindakan"
                  type="datetime-local"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row className="mt-1">
              <Col md='3'>
                <Label>Jenis Operasi</Label>
              </Col>
              <Col>
                <Input
                  id="jenis_operasi"
                  name="jenis_operasi"
                  type="text"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row className="mt-1">
              <Col md='3'>
                <Label>Teknik Anestesia</Label>
              </Col>
              <Col>
                <Input
                  id="teknik_anestesi"
                  name="teknik_anestesi"
                  type="text"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <hr />
            <Row className="mt-1">
              <Col>
                <Label>Listrik</Label>
              </Col>
              <div>
                <Col>
                  <Input
                    id="listrik_1"
                    name="listrik_1"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setListrik_1('1');
                      } else {
                        setListrik_1(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={listrik_1 === '1'}
                    innerRef={register('listrik_1') as any}
                  />
                  <Label>Mesin Anestesia Terhubung Dengan Sumber Listrik, Indikator(+) Menyala</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="listrik_2"
                    name="listrik_2"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setListrik_2('1');
                      } else {
                        setListrik_2(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={listrik_2 === '1'}
                    innerRef={register('listrik_2') as any}
                  />
                  <Label>Layar Pemantauan Terhubung Dengan Sumber Listrik, Indikator (+)</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="listrik_3"
                    name='listrik_3'
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setListrik_3('1');
                      } else {
                        setListrik_3(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={listrik_3 === '1'}
                    innerRef={register('listrik_3') as any}
                  />
                  <Label>Defibrilator Terhubung Dengan Sumber Listrik, Indikator(+)</Label>
                </Col>
              </div>
            </Row>
            <hr />
            <Row>
              <Col>
                <Label>Gas Medis</Label>
              </Col>
              <div>
                <Col>
                  <Input
                    id= 'gas_1'
                    name="gas_1"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setGasMedis_1('1');
                      } else {
                        setGasMedis_1(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={gasMedis_1 === '1'}
                    innerRef={register('gas_1') as any}
                  />
                  <Label>Selang Oksigen Terhubung Antara Sumber Gas Dengan Mesin Anestesia</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="gas_2"
                    name="gas_2"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setGasMedis_2('1');
                      } else {
                        setGasMedis_2(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={gasMedis_2 === '1'}
                    innerRef={register('gas_2') as any}
                  />
                  <Label>Flow Mesin O<sub>2</sub> DiMesin Anestesia Berfungsi Aliran Gas Keluar Dari Mesin Dapat Dirasakan</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="gas_3"
                    name="gas_3"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setGasMedis_3('1');
                      } else {
                        setGasMedis_3(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={gasMedis_3 === '1'}
                    innerRef={register('gas_3') as any}
                  />
                  <Label>Compressed Air Terhubung Antara Sumber Gas Dengan Mesin Anestesia</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="gas_4"
                    name="gas_4"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setGasMedis_4('1');
                      } else {
                        setGasMedis_4(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={gasMedis_4 === '1'}
                    innerRef={register('gas_4')as any}
                  />
                  <Label>Flow Meter {'Air'} Dimesin Anestesia Berfungsi, Aliran Gas Keluar Mesin Dapat Dirasakan </Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="gas_5"
                    name="gas_5"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setGasMedis_5('1');
                      } else {
                        setGasMedis_5(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={gasMedis_5 === '1'}
                    innerRef={register('gas_5')as any}
                  />
                  <Label>N<sub>2</sub>O Terhubung Antara Sumber Gas Dengan Mesin Anestesia</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="gas_6"
                    name="gas_6"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setGasMedis_6('1');
                      } else {
                        setGasMedis_6(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={gasMedis_6 === '1'}
                    innerRef={register('gas_6')as any}
                  />
                  <Label>Flow Meter N<sub>2</sub>O Dimesin Anestesia Berfungsi Aliran Gas Keluar Mesin Dapat Dirasakan</Label>
                </Col>
              </div>
            </Row>
            <hr />
            <Row>
              <Col>
                <Label>Mesin Anestesia</Label>
              </Col>
              <div>
                <Col>
                  <Input
                    id="mesin_anestesi_1"
                    name="mesin_anestesi_1"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setMesin_1('1');
                      } else {
                        setMesin_1(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={Mesin_1 === '1'}
                    innerRef={register('mesin_anestesi_1')as any}
                  />
                  <Label><i>Power ON</i></Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="mesin_anestesi_2"
                    name="mesin_anestesi_2"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setMesin_2('1');
                      } else {
                        setMesin_2(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={Mesin_2 === '1'}
                    innerRef={register('mesin_anestesi_2')as any}
                  />
                  <Label><i>Self Callibration DONE</i></Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="mesin_anestesi_3"
                    name="mesin_anestesi_3"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setMesin_3('1');
                      } else {
                        setMesin_3(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={Mesin_3 === '1'}
                    innerRef={register('mesin_anestesi_3')as any}
                  />
                  <Label>Tidak Ada Kebocoran Sirkuit Nafas</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="mesin_anestesi_4"
                    name="mesin_anestesi_4"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setMesin_4('1');
                      } else {
                        setMesin_4(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={Mesin_4 === '1'}
                    innerRef={register('mesin_anestesi_4') as any}
                  />
                  <Label>Zat Volatil Terisi</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="mesin_anestesi_5"
                    name="mesin_anestesi_5"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setMesin_5('1');
                      } else {
                        setMesin_5(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={Mesin_5 === '1'}
                    innerRef={register('mesin_anestesi_5')as any}
                  />
                  <Label>Absorber CO<sub>2</sub> Dalam Kondisi Baik</Label>
                </Col>
              </div>
            </Row>
            <hr />
            <Row>
              <Col>
                <Label>Manajemen Jalan Nafas</Label>
              </Col>
              <div>
                <Col>
                  <Input
                    id="manajemen_nafas_1"
                    name="manajemen_nafas_1"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setManajemen_1('1');
                      } else {
                        setManajemen_1(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={manajemen_1 === '1'}
                    innerRef={register('manajemen_nafas_1')as any}
                  />
                  <Label>Sungkup Muka Dalam Ukuran Yang Benar</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="manajemen_nafas_2"
                    name="manajemen_nafas_2"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setManajemen_2('1');
                      } else {
                        setManajemen_2(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={manajemen_2 === '1'}
                    innerRef={register('manajemen_nafas_2')as any}
                  />
                  <Label><i>Oropharyngeal airway</i> (guedel) Dalam Ukuran Yang Benar</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="manajemen_nafas_3"
                    name="manajemen_nafas_3"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setManajemen_3('1');
                      } else {
                        setManajemen_3(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={manajemen_3 === '1'}
                    innerRef={register('manajemen_nafas_3')as any}
                  />
                  <Label>Batang Laringoskop Berisi Baterai</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="manajemen_nafas_4"
                    name="manajemen_nafas_4"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setManajemen_4('1');
                      } else {
                        setManajemen_4(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={manajemen_4 === '1'}
                    innerRef={register('manajemen_nafas_4')as any}
                  />
                  <Label>Bilah Laringoskop Dalam Ukuran Yang Benar</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="manajemen_nafas_5"
                    name="manajemen_nafas_5"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setManajemen_5('1');
                      } else {
                        setManajemen_5(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={manajemen_5 === '1'}
                    innerRef={register('manajemen_nafas_5')as any}
                  />
                  <Label>Gagang Dan Bilah Laringoskop Berfungsi Baik</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="manajemen_nafas_6"
                    name="manajemen_nafas_6"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setManajemen_6('1');
                      } else {
                        setManajemen_6(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={manajemen_6 === '1'}
                    innerRef={register('manajemen_nafas_6')as any}
                  />
                  <Label>ETT Dan LMA Dalam Ukuran Yang Benar, Tidak Bocor</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="manajemen_nafas_7"
                    name="manajemen_nafas_7"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setManajemen_7('1');
                      } else {
                        setManajemen_7(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={manajemen_7 === '1'}
                    innerRef={register('manajemen_nafas_7')as any}
                  />
                  <Label>Stilet <i>(Introduser)</i></Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="manajemen_nafas_8"
                    name="manajemen_nafas_8"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setManajemen_8('1');
                      } else {
                        setManajemen_8(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={manajemen_8 === '1'}
                    innerRef={register('manajemen_nafas_8')as any}
                  />
                  <Label>Semprit Untuk Mengembangkan <i>cuff</i></Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="manajemen_nafas_9"
                    name="manajemen_nafas_9"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setManajemen_9('1');
                      } else {
                        setManajemen_9(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={manajemen_9 === '1'}
                    innerRef={register('manajemen_nafas_9')as any}
                  />
                  <Label><i>forceps</i> Magill</Label>
                </Col>
              </div>
            </Row>
            <hr />
            <Row>
              <Col>
                <Label>Pemantauan</Label>
              </Col>
              <div>
                <Col>
                  <Input
                    id="pemantauan_1"
                    name="pemantauan_1"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setPantau_1('1');
                      } else {
                        setPantau_1(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={pantau_1 === '1'}
                    innerRef={register('pemantauan_1')as any}
                  />
                  <Label>Kabel EKG Terhubung Dengan Layar Pemantau</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="pemantauan_2"
                    name="pemantauan_2"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setPantau_2('1');
                      } else {
                        setPantau_2(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={pantau_2 === '1'}
                    innerRef={register('pemantauan_2')as any}
                  />
                  <Label>Elektroda EKG Dalam Jumlah Dan Ukuran Sesuai</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="pemantauan_3"
                    name="pemantauan_3"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setPantau_3('1');
                      } else {
                        setPantau_3(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={pantau_3 === '1'}
                    innerRef={register('pemantauan_3')as any}
                  />
                  <Label>NIBP Terhubung Dengan Layar Pantau, Ukuran Manset Sesuai</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="pemantauan_4"
                    name="pemantauan_4"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setPantau_4('1');
                      } else {
                        setPantau_4(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={pantau_4 === '1'}
                    innerRef={register('pemantauan_4')as any}
                  />
                  <Label>SpO<sub>2</sub> Terhubung Dengan Layar Pantau, Berfunngsi Baik</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="pemantauan_5"
                    name="pemantauan_5"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setPantau_5('1');
                      } else {
                        setPantau_5(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={pantau_5 === '1'}
                    innerRef={register('pemantauan_5')as any}
                  />
                  <Label>Kapnografi Terhubung Dengan Layar Pantau, Berfungsi Baik</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="pemantauan_6"
                    name="pemantauan_6"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setPantau_6('1');
                      } else {
                        setPantau_6(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={pantau_6 === '1'}
                    innerRef={register('pemantauan_6')as any}
                  />
                  <Label>Pemantau Suhu Terhubung Dengan Layar Pantau</Label>
                </Col>
              </div>
            </Row>
            <hr />
            <Row>
              <Col>
                <Label>Lain-Lain</Label>
              </Col>
              <div>
                <Col>
                  <Input
                    id="lainnya_1"
                    name="lainnya_1"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setlain_1('1');
                      } else {
                        setlain_1(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={lain_1 === '1'}
                    innerRef={register('lainnya_1')as any}
                  />
                  <Label>Stetoskop Tersedia</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="lainnya_2"
                    name="lainnya_2"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setlain_2('1');
                      } else {
                        setlain_2(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={lain_2 === '1'}
                    innerRef={register('lainnya_2')as any}
                  />
                  <Label><i>Suction</i> Berfungsi Baik</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="lainnya_3"
                    name="lainnya_3"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setlain_3('1');
                      } else {
                        setlain_3(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={lain_3 === '1'}
                    innerRef={register('lainnya_3')as any}
                  />
                  <Label>Selang <i>Suction</i> Terhubung, kateter <i>Suction</i> Dalam Ukuran Yang Benar</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="lainnya_4"
                    name="lainnya_4"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setlain_4('1');
                      } else {
                        setlain_4(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={lain_4 === '1'}
                    innerRef={register('lainnya_4')as any}
                  />
                  <Label>Plester Untuk Fiksasi</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="lainnya_5"
                    name="lainnya_5"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setlain_5('1');
                      } else {
                        setlain_5(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={lain_5 === '1'}
                    innerRef={register('lainnya_5')as any}
                  />
                  <Label><i>Blanket Roll / Hemotherm / Radiant Heater</i> Terhubung Sumber Listrik, Berfungsi Baik</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="lainnya_6"
                    name="lainnya_6"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setlain_6('1');
                      } else {
                        setlain_6(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={lain_6 === '1'}
                    innerRef={register('lainnya_6')as any}
                  />
                  <Label><i>Blanket Roll</i> Dilapisi Alat</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="lainnya_7"
                    name="lainnya_7"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setlain_7('1');
                      } else {
                        setlain_7(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={lain_7 === '1'}
                    innerRef={register('lainnya_7')as any}
                  />
                  <Label><i>xylocaine {'2%'} Jelly</i></Label>
                </Col>
              </div>
            </Row>
            <hr />
            <Row>
              <Col>
                <Label>Obat-Obat</Label>
              </Col>
              <div>
                <Col>
                  <Input
                    id="obat_1"
                    name="obat_1"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setObatObat_1('1');
                      } else {
                        setObatObat_1(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={obatObat_1 === '1'}
                    innerRef={register('obat_1')as any}
                  />
                  <Label>Epinefrin</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="obat_2"
                    name="obat_2"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setObatObat_2('1');
                      } else {
                        setObatObat_2(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={obatObat_2 === '1'}
                    innerRef={register('obat_2')as any}
                  />
                  <Label>Atropin</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="obat_3"
                    name="obat_3"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setObatObat_3('1');
                      } else {
                        setObatObat_3(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={obatObat_3 === '1'}
                    innerRef={register('obat_3')as any}
                  />
                  <Label>Sedatif(Midazolam / Propofol / Etomidat / Ketamine / Thiopental)</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="obat_4"
                    name="obat_4"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setObatObat_4('1');
                      } else {
                        setObatObat_4(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={obatObat_4 === '1'}
                    innerRef={register('obat_4')as any}
                  />
                  <Label>Opiat / Opioid</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="obat_5"
                    name="obat_5"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setObatObat_5('1');
                      } else {
                        setObatObat_5(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={obatObat_5 === '1'}
                    innerRef={register('obat_5')as any}
                  />
                  <Label>Pelumpuh Obat</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="obat_6"
                    name="obat_6"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setObatObat_6('1');
                      } else {
                        setObatObat_6(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={obatObat_6 === '1'}
                    innerRef={register('obat_6')as any}
                  />
                  <Label>Antibiotika</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="obat_7"
                    name="obat_7"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setObatObat_7('1');
                      } else {
                        setObatObat_7(undefined);
                      }
                      handleCheckboxChange(e);
                    }}
                    value='1'
                    checked={obatObat_7 === '1'}
                    innerRef={register('obat_7')as any}
                  />
                  <Label>Lain-Lain</Label>
                </Col>
              </div>
              <div>
                <Col>
                  <Input
                    id="obat_7_teks"
                    name="obat_7_teks"
                    type="textarea"
                    innerRef={register()}
                  />
                </Col>
              </div>
            </Row>
            <Row className="mt-2">
              <Col>
                <div className="mt-2 d-flex justify-content-around my-0">
                  <Signature
                    label="Penata Anestesi / Perawat Kamar Bedah"
                    type="picker"
                    additionalLabel={(data && data.form && data.form.Nama_Penata_Anestesi) ? data.form.Nama_Penata_Anestesi : ''}
                    initialImage={(data && data.form && data.form.TTD_Penata_Anestesi && data.form.TTD_Penata_Anestesi !== '') ? data.form.TTD_Penata_Anestesi : undefined}
                    persons={nurses}
                    onSigned={(assigner: SignatureModel) => handlePerawatPengkaji(assigner)}
                  />
                  <Input
                    type="hidden"
                    name='ttd_penata_anestesi'
                    innerRef={register()}
                    invalid={errors.ttd_penata_anestesi && true}
                  />
                  <Input
                    type="hidden"
                    name='id_penata_anestesi'
                    innerRef={register()}
                    invalid={errors.id_penata_anestesi && true}
                  />
                </div>
              </Col>
              <Col>
                <div className="d-flex justify-content-around my-0">
                  <Signature
                    label="Dokter PJ Anestesi"
                    type="picker"
                    additionalLabel={(data && data.form && data.form.Nama_Dokter_Anestesi) ? data.form.Nama_Dokter_Anestesi : ''}
                    initialImage={(data && data.form && data.form.TTD_Dokter_Anestesi && data.form.TTD_Dokter_Anestesi !== '') ? data.form.TTD_Dokter_Anestesi : undefined}
                    persons={doctors}
                    unit="dokter"
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
                    name='ttd_dokter_anestesi'
                    innerRef={register()}
                    invalid={errors.ttd_dokter_anestesi && true}
                  />
                  <Input
                    type="hidden"
                    name='id_dokter_anestesi'
                    innerRef={register()}
                    invalid={errors.id_dokter_anestesi && true}
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
          </FormGroup>
        </FormGroup>
      </Form>
    </>
  );
}
export default PreparationOfAnestheticEquipmentForm;
