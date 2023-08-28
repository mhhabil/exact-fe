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
  fetchDrugSideEffects,
  fetchDrugSideEffectsPdf,
  handlePdf,
} from "@modules/pharmacy/drug-side-effects/stores/drug-side-effects.store";
/*CRUD*/
import {
  IUpdateDrugSideEffectsRequest,
  UpdateDrugSideEffectsRequest,
} from "@modules/pharmacy/drug-side-effects/requests/update-drug-side-effects.request";
import { DrugSideEffects } from "@modules/pharmacy/drug-side-effects/models/drug-side-effects.model";
import DrugSideEffectsService from "@modules/pharmacy/drug-side-effects/services";
import { PdfDrugSideEffectsRequest } from '@modules/pharmacy/drug-side-effects/requests/pdf-drug-side-effects.request';
import FormDrugSideEffects from "@modules/pharmacy/drug-side-effects/components/drug-side-effects/drug-side-effects-form";
import { DateTimeConverter } from "@src/shared/datetime-converter";


const MainDrugSideEffects = (props: { data: DrugSideEffects, register: any, errors: any, processing: boolean, setValue: any, control: any, unregister: any}) => {

  const { data } = props;
  const dispatch = useAppDispatch();
  const { doctors } = useAppSelector((state) => state.doctor);
  const [processing, setProcessing] = useState(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const { treatment } = useAppSelector((state) => state.patient);
  const { pdf } = useAppSelector((state) => state.drugSideEffects);
  const [showEso, setShowEso] = useState<any>((data && data.form && data.form.Terjadi_Efek_Samping_Obat) ? data.form.Terjadi_Efek_Samping_Obat : '');

  useEffect(() => {
    if (treatment) {
      dispatch(fetchDrugSideEffectsPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'farmasi_pelaporan-efek-samping-obat' })));
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
      resolver: yupResolver(UpdateDrugSideEffectsRequest.schema()),
      defaultValues: {

        terjadi_efek_samping_obat  :  data?.form?.Terjadi_Efek_Samping_Obat,
        jenis_kelamin  :  data?.form?.Jenis_Kelamin,
        status_hamil  :  data?.form?.Status_Hamil,
        suku_check  :  data?.form?.Suku_Check,
        nama_suku  :  data?.form?.Nama_Suku,
        berat_badan_check  :  data?.form?.Berat_Badan_Check,
        berat_badan  :  data?.form?.Berat_Badan,
        diagnosa_utama  :  data?.form?.Diagnosa_Utama,
        kesudahan_penyakit_utama  :  data?.form?.Kesudahan_Penyakit_Utama,
        riwayat_hati_check  :  data?.form?.Riwayat_Hati_Check,
        riwayat_ginjal_check  :  data?.form?.Riwayat_Ginjal_Check,
        riwayat_lain_check  :  data?.form?.Riwayat_Lain_Check,
        riwayat_lain_text  :  data?.form?.Riwayat_Lain_Text,
        bentuk_manifestasi_eso  :  data?.form?.Bentuk_Manifestasi_ESO,
        tanggal_mula_terjadi  :  data?.form?.Tanggal_Mula_Terjadi,
        tanggal_kesudahan  :  data?.form?.Tanggal_Kesudahan,
        kesudahan_eso  :  data?.form?.Kesudahan_ESO,
        riwayat_eso_sebelum  :  data?.form?.Riwayat_ESO_Sebelum,

        keterangan_tambahan : data?.form?.Keterangan_Tambahan,
        algoritma_naranjo_1 : data?.form?.Algoritma_Naranjo_1,
        algoritma_naranjo_2 : data?.form?.Algoritma_Naranjo_2,
        algoritma_naranjo_3 : data?.form?.Algoritma_Naranjo_3,
        algoritma_naranjo_4 : data?.form?.Algoritma_Naranjo_4,
        algoritma_naranjo_5 : data?.form?.Algoritma_Naranjo_5,
        algoritma_naranjo_6 : data?.form?.Algoritma_Naranjo_6,
        algoritma_naranjo_7 : data?.form?.Algoritma_Naranjo_7,
        algoritma_naranjo_8 : data?.form?.Algoritma_Naranjo_8,
        algoritma_naranjo_9 : data?.form?.Algoritma_Naranjo_9,
        algoritma_naranjo_10 : data?.form?.Algoritma_Naranjo_10,
        total_skor : data?.form?.Total_Skor,
        id_pelapor : data?.form?.ID_Pelapor,
        ttd_pelapor : data?.form?.TTD_Pelapor,
        nama_pelapor : data?.form?.Nama_Pelapor,

        waktu  :  data?.form?.Waktu,

      },
    });

  const handleProcessing = () => {
    setProcessing(true);
  };

  const handleReset = (value: IUpdateDrugSideEffectsRequest) => {
    reset();
  };


  const handleSubmitForm = (value: IUpdateDrugSideEffectsRequest) => {

    if (!treatment) {
      return;
    }
    handleProcessing();
    reset(value);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateDrugSideEffectsRequest.createFromJson({
      ...value,
      ...appRequest,
    });
    dispatch(handlePdf(undefined));
    DrugSideEffectsService()
      .update(params)
      .then((resp) => {
        const { data} = resp.data;
        DrugSideEffectsService().pdfv3(PdfDrugSideEffectsRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest))
          .then(() => {
            setProcessing(false);
            dispatch(fetchDrugSideEffectsPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'farmasi_pelaporan-efek-samping-obat' })));
          })
        setProcessing(false);
        dispatch(fetchDrugSideEffects(appRequest));
      })
      .catch((err) => {
        console.error(err);
        setProcessing(false);
      });
  };

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <Card className="border-1">
        <CardBody>
          <Row>
            <Col md="4">
              <Label for="terjadi_efek_samping_obat">
                Terjadi Efek Samping Obat?
              </Label>
            </Col>
            <Col md="2">
              <Input
                type="radio"
                className="me-1"
                name="terjadi_efek_samping_obat"
                value='1'
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowEso('1');
                  }
                }}
                defaultChecked={!!(data && data?.form?.Terjadi_Efek_Samping_Obat && data?.form?.Terjadi_Efek_Samping_Obat === '1')}
                innerRef={register({ required: true })}
              />
              <Label>Ya</Label>
            </Col>
            <Col md="2">
              <Input
                type="radio"
                className="me-1"
                name="terjadi_efek_samping_obat"
                value='0'
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowEso('0');
                    handleSubmit(handleReset);
                  }
                }}
                defaultChecked={!!(data && data?.form?.Terjadi_Efek_Samping_Obat && data?.form?.Terjadi_Efek_Samping_Obat === '0')}
                innerRef={register({ required: true })}
              />
              <Label>Tidak</Label>
            </Col>
            <Col md="4"></Col>
          </Row>
          {
            showEso && showEso === '1' && (
              <FormDrugSideEffects
                data={data}
                {...{ register, errors, processing, setValue, control, unregister }}
              />
            )
          }

        </CardBody>
      </Card>
      <Card className="border-1">
        <CardBody>
          <Row className="mb-2"></Row>
          <Row>
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

export default MainDrugSideEffects;
