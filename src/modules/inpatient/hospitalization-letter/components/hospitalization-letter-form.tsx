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
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import { FindPdfRequest, IPdfModel } from "@shared/pdf";
import { useEffect, useState } from "react";
import { AppRequest } from "@shared/request";
import { Signature } from "@shared/signature/components";
import { SignatureModel } from "@shared/signature/models/signature.model";
import { SubmitButton } from "@shared/button";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import lamaSatuan from '../const/dataLamaSatuan';
import { Slide, toast } from 'react-toastify';
import { DateTimeConverter } from '@src/shared/datetime-converter';
/*PDF*/
import {
  fetchHospitalizationLetter,
  fetchHospitalizationLetterPdf,
  handlePdf,
} from "@modules/inpatient/hospitalization-letter/stores/hospitalization-letter.store";
/*CRUD*/
import {
  IUpdateHospitalizationLetterRequest,
  UpdateHospitalizationLetterRequest,
} from "@modules/inpatient/hospitalization-letter/requests/update-hospitalization-letter.request";
import { HospitalizationLetter } from "@modules/inpatient/hospitalization-letter/models/hospitalization-letter.model";
import HospitalizationLetterService from "@modules/inpatient/hospitalization-letter/services";
import { PdfHospitalizationLetterRequest } from '@modules/inpatient/hospitalization-letter/requests/pdf-hospitalization-letter.request';

const HospitalizationLetterForm = (props: { data: any }) => {
  const { data } = props;
  const dispatch = useAppDispatch();
  const { doctors } = useAppSelector((state) => state.doctor);
  const [processing, setProcessing] = useState(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const { treatment } = useAppSelector((state) => state.patient);
  /*
  const [showPreventif, setShowPreventif] = useState<any>((data && data?.form && data?.form?.Preventif_Check) ? data?.form?.Preventif_Check : '0');
  useEffect(() => {
    setValue('preventif_check', showPreventif);
    console.log("preventif_check", showPreventif);
  }, [showPreventif]);
  */
 
  const getSatuan = (satuan: string) => {
    if (lamaSatuan && satuan) {
      const selectedSatuan = lamaSatuan.find((val: any) => val === satuan)
      if (selectedSatuan) {
        return selectedSatuan;
      }
    } else {
      return '';
    }
  }
  const { pdf } = useAppSelector((state) => state.hospitalizationLetter);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchHospitalizationLetterPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_surat-perintah-rawat-inap' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])
  
  const convertDatetimeToUTC = (date?: any) => {
    const d = date ? new Date(date) : new Date();
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}T${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }

  const getKesimpulan = () => {
    if (data.inform_consent.Diagnosis === 'custom') {
      return data.inform_consent.Diagnosis_Custom;
    } else {
      return data.inform_consent.Diagnosis;
    }
  }

  const { register, handleSubmit, setValue, formState, reset, errors } =
    useForm({
      mode: "onChange",
      criteriaMode: "all",
      shouldFocusError: true,
      resolver: yupResolver(UpdateHospitalizationLetterRequest.schema()),
      defaultValues: {
        id_dokter_rawat_inap : data?.form?.ID_Dokter_Rawat_Inap,
        tanggal_tanda_tangan : data?.form?.Tanggal_Tanda_Tangan ? DateTimeConverter.convertToNormalDatetime(data?.form?.Tanggal_Tanda_Tangan) : convertDatetimeToUTC(),
        indikasi_opname : data?.form?.Indikasi_Opname,
        anjuran_opname : data?.form?.Anjuran_Opname,
        diagnosa : data?.form?.Diagnosa || getKesimpulan(),
        // diagnosa: data?.form?.Diagnosa,
        lama_opname : data?.form?.Lama_Opname,
        lama_satuan : data?.form?.Lama_Satuan,
        ttd_dokter : data?.form?.TTD_Dokter,
        nama_dokter : data?.form?.Nama_Dokter_Rawat_Inap,
        preventif_check: data?.form?.Preventif_Check,
        paliatif_check: data?.form?.Paliatif_Check,
        kuratif_check: data?.form?.Kuratif_Check,
        rehabilitatif_check: data?.form?.Rehabilitatif_Check,
      },
    });

  const handleProcessing = () => {
    setProcessing(true);
  };

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  const handleTandaTangan = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue("ttd_dokter", image.Signature);
      setValue("id_dokter_rawat_inap", image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue("ttd_dokter", image.Signature);
      setValue("id_dokter_rawat_inap", image.ID_Karyawan);
    }
  }

  const handleSubmitForm = (value: IUpdateHospitalizationLetterRequest) => {
    if (!treatment) {
      return;
    }
    handleProcessing();
    reset(value);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateHospitalizationLetterRequest.createFromJson({
      ...value,
      ...appRequest,
    });
    const valKuratif = parseInt(params.kuratif_check) || 0;
    const valPaliatif = parseInt(params.paliatif_check) || 0;
    const valPreventif = parseInt(params.preventif_check) || 0;
    const valRehabilitatif = parseInt(params.rehabilitatif_check) || 0;
    const totalJenis = valKuratif + valPaliatif + valPreventif + valRehabilitatif;
    dispatch(handlePdf(undefined));
    if (totalJenis > 0) {
      HospitalizationLetterService()
        .update(params)
        .then((resp) => {
          const { data} = resp.data;
          HospitalizationLetterService().pdfv3(PdfHospitalizationLetterRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest))
            .then(() => {
              setProcessing(false);
              dispatch(fetchHospitalizationLetterPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_surat-perintah-rawat-inap' })));
            })
          setProcessing(false);
          dispatch(fetchHospitalizationLetter(appRequest));
        })
        .catch((err) => {
          console.error(err);
          setProcessing(false);
        });
    } else {
      setProcessing(false);
      toast.info('Pilih Jenis Pelayanan', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>


      <Card className="border-1">
        <CardBody>
          <Col md="12">
            <FormGroup className="form-group" row>
              <Label for="diagnosa" md="2" sm="12">
                Diagnosa
              </Label>
              <Col>
                <Input
                  type="textarea"
                  id="diagnosa"
                  name="diagnosa"
                  innerRef={register()}
                />
              </Col>
            </FormGroup>
          </Col>
          {/* <Col md="12">
            <FormGroup className="form-group" row>
              <Label for="anjuran" md="2" sm="12">
                Anjuran
              </Label>
              <Col>
                <Input
                  type="textarea"
                  id="anjuran_opname"
                  name="anjuran_opname"
                  innerRef={register()}
                />
              </Col>
            </FormGroup>
          </Col> */}
          <Col md="12">
            <FormGroup className="form-group" row>
              <Label for="indikasi_opname" md="2" sm="12">
                Indikasi Opname
              </Label>
              <Col>
                <Input
                  type="textarea"
                  id="indikasi_opname"
                  name="indikasi_opname"
                  innerRef={register()}
                />
              </Col>
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup className="form-group" row>
              <Label for="Lama" md="2" sm="12">
                Lama Anjuran Opname
              </Label>
              <Col>
                <NumberInput
                  label=''
                  placeholder='0'
                  step='1'
                  name='lama_opname'
                  {...{ register, errors }}
                />
              </Col>
              <Col>
                <Input
                  style={{ marginTop: '20px' }}
                  type="select"
                  id= "lama_satuan"
                  name= "lama_satuan"
                  innerRef={register()}
                  onChange={(e) => {
                    if (e.target.value !== '') {
                      getSatuan(e.target.value)
                    }
                  }}
                >
                  <option value="" disabled={false}>Pilih...</option>
                  {
                    lamaSatuan && lamaSatuan.map((p, key) => {
                      return <option value={p} key={key}>{ p }</option>;
                    })
                  }
                </Input>
              </Col>
            </FormGroup>
          </Col>
          <Row className="mt-2">
            <Col md='2'>
              <Label>Jenis Pelayanan</Label>
            </Col>
            <Col>
              <Input
                id='preventif_check'
                type='checkbox'
                name='preventif_check'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e) }
                value='1'
                defaultChecked={ data && data.form && data.form.Preventif_Check === '1'}
                innerRef={register('preventif_check') as any}
              />
              <Label>Preventif</Label>
              <div className="mt-1">
                <Input
                  id='paliatif_check'
                  type='checkbox'
                  name='paliatif_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e) }
                  value='1'
                  defaultChecked={ data && data.form && data.form.Paliatif_Check === '1'}
                  innerRef={register('paliatif_check') as any}
                />
                <Label>Paliatif</Label>
              </div>
              <div className="mt-1">
                <Input
                  id='kuratif_check'
                  type='checkbox'
                  name='kuratif_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  defaultChecked={ data && data.form && data.form.Kuratif_Check === '1'}
                  innerRef={register('kuratif_check') as any}
                />
                <Label>Kuratif</Label>
              </div>
              <div className="mt-1">
                <Input
                  id='rehabilitatif_check'
                  type='checkbox'
                  name='rehabilitatif_check'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  defaultChecked={ data && data.form && data.form.Rehabilitatif_Check === '1'}
                  innerRef={register('rehabilitatif_check') as any}
                />
                <Label>Rehabilitatif</Label>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card className="border-1">
        <CardBody>
          <Col md="12">
            <FormGroup className="form-group" row>
              <Label for="tanggal_tanda_tangan" md="3" sm="12">
                      Tanggal *
              </Label>
              <Col>
                <DateTimeInput
                  name="tanggal_tanda_tangan"
                  defaultValue="date"
                  md={1}
                  style={{ width: "100%" }}
                  {...{ register, errors }}
                />
              </Col>

            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup className="form-group" row>
              <Signature
                label="Dokter"
                type="picker"
                additionalLabel={ data && data.form && data.form.Nama_Dokter_Rawat_Inap ? data.form.Nama_Dokter_Rawat_Inap : ""}
                initialImage={ data && data.form && data.form.TTD_Dokter && data.form.TTD_Dokter !== "" ? data.form.TTD_Dokter : undefined}
                persons={doctors}
                unit='dokter'
                onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                  if (isFormDoctor) {
                    handleTandaTangan(assigner, isFormDoctor)
                  }
                  if (!isFormDoctor) {
                    handleTandaTangan(assigner)
                  }
                }}
              />
              <Input
                type="hidden"
                name="ttd_dokter"
                innerRef={register({ required: true })}
                invalid={errors["ttd_dokter"] && true}
              />
              <Input
                type="hidden"
                name="id_dokter_rawat_inap"
                innerRef={register({ required: true })}
                invalid={errors["id_dokter_rawat_inap"] && true}
              />
            </FormGroup>
          </Col>
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

export default HospitalizationLetterForm;
