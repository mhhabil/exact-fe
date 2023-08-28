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
  fetchDpjpSheet,
  fetchDpjpSheetPdf,
  handlePdf,
} from "@modules/inpatient/dpjp-sheet/stores/dpjp-sheet.store";
/*CRUD*/
import {
  IUpdateDpjpSheetRequest,
  UpdateDpjpSheetRequest,
} from "@modules/inpatient/dpjp-sheet/requests/update-dpjp-sheet.request";
import { DpjpSheet } from "@modules/inpatient/dpjp-sheet/models/dpjp-sheet.model";
import DpjpSheetService from "@modules/inpatient/dpjp-sheet/services";
import { PdfDpjpSheetRequest } from '@modules/inpatient/dpjp-sheet/requests/pdf-dpjp-sheet.request';
import { DateTimeConverter } from "@src/shared/datetime-converter";

const DpjpSheetForm = (props: { data: DpjpSheet }) => {
  const { data } = props;
  const dispatch = useAppDispatch();
  const { doctors } = useAppSelector((state) => state.doctor);
  const [processing, setProcessing] = useState(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const { treatment } = useAppSelector((state) => state.patient);
  const { pdf } = useAppSelector((state) => state.dpjpSheet);
  useEffect(() => {
    if (treatment) {
      dispatch(fetchDpjpSheetPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_lembar-dpjp' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  const getKesimpulan = () => {
    if (data?.inform_consent?.Diagnosis === 'custom') {
      return data?.inform_consent?.Diagnosis_Custom;
    } else {
      return data?.inform_consent?.Diagnosis;
    }
  }

  const { register, handleSubmit, setValue, formState, reset, errors } =
    useForm({
      mode: "onChange",
      criteriaMode: "all",
      shouldFocusError: true,
      resolver: yupResolver(UpdateDpjpSheetRequest.schema()),
      defaultValues: {
        pasien_kategori: data?.form?.Pasien_Kategori || data?.tipe_tagihan?.name,
        pasien_diagnosis: data?.form?.Pasien_Diagnosis || data?.cppt?.Data_S || getKesimpulan(),
        ttd_dokter_utama: data?.form?.TTD_Dokter_Utama,
        ttd_dokter_ppds: data?.form?.TTD_Dokter_Ppds,
        ppds: data?.form?.Dokter_Ppds_Id,
        sip: data?.form?.Sip,
        ttd_dokter_ruangan: data?.form?.TTD_Dokter_Ruangan,
        tanggal_rawat_1: data?.form?.Tanggal_Rawat_1,
        ttd_dokter_dpjp_1: data?.form?.TTD_Dokter_Dpjp_1,
        tanggal_rawat_2: data?.form?.Tanggal_Rawat_2,
        ttd_dokter_dpjp_2: data?.form?.TTD_Dokter_Dpjp_2,
        tanggal_rawat_3: data?.form?.Tanggal_Rawat_3,
        ttd_dokter_dpjp_3: data?.form?.TTD_Dokter_Dpjp_3,
        tanggal_rawat_4: data?.form?.Tanggal_Rawat_4,
        ttd_dokter_dpjp_4: data?.form?.TTD_Dokter_Dpjp_4,
        tanggal_peralihan: data?.form?.Tanggal_Peralihan,
        alasan_peralihan: data?.form?.Alasan_Peralihan,
        peralihan_dpjp: data?.form?.Peralihan_Dpjp,
        ttd_dokter_peralihan: data?.form?.TTD_Dokter_Peralihan,
        dokter_dpjp_1_nama: data?.form?.Dokter_Dpjp_1_Nama,
        dokter_dpjp_2_nama: data?.form?.Dokter_Dpjp_2_Nama,
        dokter_dpjp_3_nama: data?.form?.Dokter_Dpjp_3_Nama,
        dokter_dpjp_4_nama: data?.form?.Dokter_Dpjp_4_Nama,
        dokter_dpjp_utama_nama: data?.form?.Dokter_Dpjp_Utama_Nama,
        dokter_dpjp_peralihan_nama: data?.form?.Dokter_Dpjp_Peralihan_Nama,
        dokter_ruangan_nama: data?.form?.Dokter_Ruangan_Nama,
        dokter_ppds_nama: data?.form?.Dokter_Ppds_Nama,
        dokter_dpjp_1: data?.form?.Dokter_Dpjp_1_Id,
        dokter_dpjp_2: data?.form?.Dokter_Dpjp_2_Id,
        dokter_dpjp_3: data?.form?.Dokter_Dpjp_3_Id,
        dokter_dpjp_4: data?.form?.Dokter_Dpjp_4_Id,
        dokter_utama: data?.form?.Dokter_Dpjp_Utama_Id,
        dokter_peralihan: data?.form?.Dokter_Dpjp_Peralihan_Id,
        dokter_ruangan: data?.form?.Dokter_Ruangan_Id,
        dokter_ppds: data?.form?.Dokter_Ppds_Id,
      },
    });

  const handleProcessing = () => {
    setProcessing(true);
  };

  const handleSubmitForm = (value: IUpdateDpjpSheetRequest) => {
    if (!treatment) {
      return;
    }
    handleProcessing();
    reset(value);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateDpjpSheetRequest.createFromJson({
      ...value,
      ...appRequest,
    });
    dispatch(handlePdf(undefined));
    DpjpSheetService()
      .update(params)
      .then((resp) => {
        const { data} = resp.data;
        DpjpSheetService().pdfv3(PdfDpjpSheetRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest))
          .then(() => {
            setProcessing(false);
            dispatch(fetchDpjpSheetPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_lembar-dpjp' })));
          })
        setProcessing(false);
        dispatch(fetchDpjpSheet(appRequest));
      })
      .catch((err) => {
        console.error(err);
        setProcessing(false);
      });
  };

  const handleDokterUtama = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue("ttd_dokter_utama", image.Signature);
      setValue("dokter_utama", image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue("ttd_dokter_utama", image.Signature);
      setValue("dokter_utama", image.ID_Karyawan);
    }
  }

  const handleDokterPpds = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue("ttd_dokter_ppds", image.Signature);
      setValue("ppds", image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue("ttd_dokter_ppds", image.Signature);
      setValue("ppds", image.ID_Karyawan);
    }
  }

  const handleDokterRuangan = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue("ttd_dokter_ruangan", image.Signature);
      setValue("dokter_ruangan", image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue("ttd_dokter_ruangan", image.Signature);
      setValue("dokter_ruangan", image.ID_Karyawan);
    }
  }

  const handleDpjp1 = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue("ttd_dokter_dpjp_1", image.Signature);
      setValue("dokter_dpjp_1", image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue("ttd_dokter_dpjp_1", image.Signature);
      setValue("dokter_dpjp_1", image.ID_Karyawan);
    }
  }

  const handleDpjp2 = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue("ttd_dokter_dpjp_2", image.Signature);
      setValue("dokter_dpjp_2", image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue("ttd_dokter_dpjp_2", image.Signature);
      setValue("dokter_dpjp_2", image.ID_Karyawan);
    }
  }

  const handleDpjp3 = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue("ttd_dokter_dpjp_3", image.Signature);
      setValue("dokter_dpjp_3", image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue("ttd_dokter_dpjp_3", image.Signature);
      setValue("dokter_dpjp_3", image.ID_Karyawan);
    }
  }

  const handleDpjp4 = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue("ttd_dokter_dpjp_4", image.Signature);
      setValue("dokter_dpjp_4", image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue("ttd_dokter_dpjp_4", image.Signature);
      setValue("dokter_dpjp_4", image.ID_Karyawan);
    }
  }

  const handlePeralihan = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue("ttd_dokter_peralihan", image.Signature);
      setValue("dokter_peralihan", image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue("ttd_dokter_peralihan", image.Signature);
      setValue("dokter_peralihan", image.ID_Karyawan);
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <Card className="border-1">
        <CardBody>
          <Col md="12">
            <FormGroup className="form-group" row>
              <Label for="pasien_kategori" md="2" sm="12">
                Kategori Pasien
              </Label>
              <Col>
                <Input
                  type="textarea"
                  id="pasien_kategori"
                  name="pasien_kategori"
                  innerRef={register()}
                />
              </Col>
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup className="form-group" row>
              <Label for="pasien_diagnosis" md="2" sm="12">
                Diagnosis Medis
              </Label>
              <Col>
                <Input
                  type="textarea"
                  id="pasien_diagnosis"
                  name="pasien_diagnosis"
                  innerRef={register()}
                />
              </Col>
            </FormGroup>
          </Col>
        </CardBody>
      </Card>
      <Card className="border-1">
        <CardBody>
          <Row>
            DPJP UTAMA & TIM DPJP
            <hr style={{ borderTop: "2px dashed black" }} />
          </Row>
          <Row className="mt-2">
            <Col>
              <Card className="border-1">
                <CardHeader
                  style={{
                    background: "#d3d3d3",
                    boxAlign: "center",
                    display: "block",
                  }}
                >
                  <p className="text-center">Dokter DPJP Utama</p>
                </CardHeader>
                <Signature
                  label="Dokter DPJP Utama"
                  type="picker"
                  additionalLabel={data && data.form && data.form.Dokter_Dpjp_Utama_Nama ? data.form.Dokter_Dpjp_Utama_Nama : ""}
                  initialImage= { data && data.form && data.form.TTD_Dokter_Utama && data.form.TTD_Dokter_Utama !== "" ? data.form.TTD_Dokter_Utama : undefined}
                  persons={doctors}
                  unit='dokter'
                  onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                    if (isFormDoctor) {
                      handleDokterUtama(assigner, isFormDoctor)
                    }
                    if (!isFormDoctor) {
                      handleDokterUtama(assigner)
                    }
                  }}
                />
                <Input
                  type="hidden"
                  name="ttd_dokter_utama"
                  innerRef={register({ required: true })}
                  invalid={errors["ttd_dokter_utama"] && true}
                />
                <Input
                  type="hidden"
                  name="dokter_utama"
                  innerRef={register({ required: true })}
                  invalid={errors["dokter_utama"] && true}
                />
              </Card>
            </Col>
            <Col>
              <Card className="border-1">
                <CardHeader
                  style={{
                    background: "#d3d3d3",
                    boxAlign: "center",
                    display: "block",
                  }}
                >
                  <p className="text-center">Dokter PPDS</p>
                </CardHeader>
                <Signature
                  label="Dokter PPDS"
                  type="picker"
                  additionalLabel={ data && data.form && data.form.Dokter_Ppds_Nama ? data.form.Dokter_Ppds_Nama : ""}
                  initialImage={ data && data.form && data.form.TTD_Dokter_Ppds && data.form.TTD_Dokter_Ppds !== "" ? data.form.TTD_Dokter_Ppds : undefined}
                  persons={doctors}
                  unit='dokter'
                  onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                    if (isFormDoctor) {
                      handleDokterPpds(assigner, isFormDoctor)
                    }
                    if (!isFormDoctor) {
                      handleDokterPpds(assigner)
                    }
                  }}
                />
                <Input
                  type="hidden"
                  name="ttd_dokter_ppds"
                  innerRef={register({ required: true })}
                  invalid={errors["ttd_dokter_ppds"] && true}
                />
                <Input
                  type="hidden"
                  name="ppds"
                  innerRef={register({ required: true })}
                  invalid={errors["ppds"] && true}
                />
              </Card>
            </Col>
            <Col>
              <Card className="border-1">
                <CardHeader
                  style={{
                    background: "#d3d3d3",
                    boxAlign: "center",
                    display: "block",
                  }}
                >
                  <p className="text-center">Dokter Ruangan</p>
                </CardHeader>
                <Signature
                  label="Dokter Ruangan"
                  type="picker"
                  additionalLabel={ data && data.form && data.form.Dokter_Ruangan_Nama ? data.form.Dokter_Ruangan_Nama : ""}
                  initialImage={ data && data.form && data.form.TTD_Dokter_Ruangan && data.form.TTD_Dokter_Ruangan !== "" ? data.form.TTD_Dokter_Ruangan : undefined}
                  persons={doctors}
                  unit='dokter'
                  onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                    if (isFormDoctor) {
                      handleDokterRuangan(assigner, isFormDoctor)
                    }
                    if (!isFormDoctor) {
                      handleDokterRuangan(assigner)
                    }
                  }}
                />
                <Input
                  type="hidden"
                  name="ttd_dokter_ruangan"
                  innerRef={register({ required: true })}
                  invalid={errors["ttd_dokter_ruangan"] && true}
                />
                <Input
                  type="hidden"
                  name="dokter_ruangan"
                  innerRef={register({ required: true })}
                  invalid={errors["dokter_ruangan"] && true}
                />
              </Card>
            </Col>
          </Row>
          <Card className="border-1">
            <CardHeader style={{ background: "#d3d3d3", boxAlign: "center" }}>
              <Label>RAWAT BERSAMA</Label>
            </CardHeader>
            <Table>
              <tr>
                <td>
                  <div>
                    <p className="text-center">--Dokter DPJP 1</p>
                  </div>
                  <Card
                    style={{ width: "100%", padding: "0px" }}
                    className="border-1"
                  >
                    <CardHeader>
                      <Col md="12" className="mt-1">
                        <Label>Tanggal Rawat :</Label>
                      </Col>
                      <Col className="mt-3">
                        <DateTimeInput
                          name="tanggal_rawat_1"
                          defaultValue="date"
                          style={{
                            width: "85%",
                            marginLeft: "3px",
                            marginTop: "-75px",
                          }}
                          {...{ register, errors }}
                        />
                      </Col>
                    </CardHeader>
                    <Signature
                      label="Dokter Dpjp 1"
                      type="picker"
                      additionalLabel={data && data.form && data.form.Dokter_Dpjp_1_Nama ? data.form.Dokter_Dpjp_1_Nama : ""}
                      initialImage={(data && data.form && data.form.TTD_Dokter_Dpjp_1 && data.form.TTD_Dokter_Dpjp_1 !== '') ? data.form.TTD_Dokter_Dpjp_1 : undefined}
                      persons={doctors}
                      unit='dokter'
                      onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                        if (isFormDoctor) {
                          handleDpjp1(assigner, isFormDoctor)
                        }
                        if (!isFormDoctor) {
                          handleDpjp1(assigner)
                        }
                      }}
                    />
                    <Input
                      type="hidden"
                      name="ttd_dokter_dpjp_1"
                      innerRef={register({ required: true })}
                      invalid={errors["ttd_dokter_dpjp_1"] && true}
                    />
                    <Input
                      type="hidden"
                      name="dokter_dpjp_1"
                      innerRef={register({ required: true })}
                      invalid={errors["dokter_dpjp_1"] && true}
                    />
                  </Card>
                </td>
                <td>
                  <div>
                    <p className="text-center">--Dokter DPJP 2</p>
                  </div>
                  <Card
                    style={{ width: "100%", padding: "0px" }}
                    className="border-1"
                  >
                    <CardHeader>
                      <Col md="12" className="mt-1">
                        <Label>Tanggal Rawat :</Label>
                      </Col>
                      <Col className="mt-3">
                        <DateTimeInput
                          name="tanggal_rawat_2"
                          defaultValue="date"
                          md={1}
                          style={{
                            width: "85%",
                            marginLeft: "3px",
                            marginTop: "-75px",
                          }}
                          {...{ register, errors }}
                        />
                      </Col>
                    </CardHeader>
                    <Signature
                      label="Dokter Dpjp 2"
                      type="picker"
                      additionalLabel={data && data.form && data.form.Dokter_Dpjp_2_Nama ? data.form.Dokter_Dpjp_2_Nama : ""}
                      initialImage={(data && data.form && data.form.TTD_Dokter_Dpjp_2 && data.form.TTD_Dokter_Dpjp_2 !== '') ? data.form.TTD_Dokter_Dpjp_2 : undefined}
                      persons={doctors}
                      unit='dokter'
                      onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                        if (isFormDoctor) {
                          handleDpjp2(assigner, isFormDoctor)
                        }
                        if (!isFormDoctor) {
                          handleDpjp2(assigner)
                        }
                      }}
                    />
                    <Input
                      type="hidden"
                      name="ttd_dokter_dpjp_2"
                      innerRef={register({ required: true })}
                      invalid={errors["ttd_dokter_dpjp_2"] && true}
                    />
                    <Input
                      type="hidden"
                      name="dokter_dpjp_2"
                      innerRef={register({ required: true })}
                      invalid={errors["dokter_dpjp_2"] && true}
                    />
                  </Card>
                </td>
                <td>
                  <div>
                    <p className="text-center">--Dokter DPJP 3</p>
                  </div>
                  <Card
                    style={{ width: "100%", padding: "0px" }}
                    className="border-1"
                  >
                    <CardHeader>
                      <Col md="12" className="mt-1">
                        <Label>Tanggal Rawat :</Label>
                      </Col>
                      <Col className="mt-3">
                        <DateTimeInput
                          name="tanggal_rawat_3"
                          defaultValue="date"
                          md={1}
                          style={{
                            width: "85%",
                            marginLeft: "3px",
                            marginTop: "-75px",
                          }}
                          {...{ register, errors }}
                        />
                      </Col>
                    </CardHeader>
                    <Signature
                      label="Dokter Dpjp 3"
                      type="picker"
                      additionalLabel={(data && data.form && data.form.Dokter_Dpjp_3_Nama) ? data.form.Dokter_Dpjp_3_Nama : ''}
                      initialImage={(data && data.form && data.form.TTD_Dokter_Dpjp_3 && data.form.TTD_Dokter_Dpjp_3 !== '') ? data.form.TTD_Dokter_Dpjp_3 : undefined}
                      persons={doctors}
                      unit='dokter'
                      onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                        if (isFormDoctor) {
                          handleDpjp3(assigner, isFormDoctor)
                        }
                        if (!isFormDoctor) {
                          handleDpjp3(assigner)
                        }
                      }}
                    />
                    <Input
                      type="hidden"
                      name="ttd_dokter_dpjp_3"
                      innerRef={register({ required: true })}
                      invalid={errors["ttd_dokter_dpjp_3"] && true}
                    />
                    <Input
                      type="hidden"
                      name="dokter_dpjp_3"
                      innerRef={register({ required: true })}
                      invalid={errors["dokter_dpjp_3"] && true}
                    />
                  </Card>
                </td>
                <td>
                  <div>
                    <p className="text-center">--Dokter DPJP 4</p>
                  </div>
                  <Card
                    style={{ width: "100%", padding: "0px" }}
                    className="border-1"
                  >
                    <CardHeader>
                      <Col md="12" className="mt-1">
                        <Label>Tanggal Rawat :</Label>
                      </Col>
                      <Col className="mt-3">
                        <DateTimeInput
                          name="tanggal_rawat_4"
                          defaultValue="date"
                          md={1}
                          style={{
                            width: "85%",
                            marginLeft: "3px",
                            marginTop: "-75px",
                          }}
                          {...{ register, errors }}
                        />
                      </Col>
                    </CardHeader>
                    <Signature
                      label="Dokter Dpjp 4"
                      type="picker"
                      additionalLabel={(data && data.form && data.form.Dokter_Dpjp_4_Nama) ? data.form.Dokter_Dpjp_4_Nama : ''}
                      initialImage={(data && data.form && data.form.TTD_Dokter_Dpjp_4 && data.form.TTD_Dokter_Dpjp_4 !== '') ? data.form.TTD_Dokter_Dpjp_4 : undefined}
                      persons={doctors}
                      unit='dokter'
                      onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                        if (isFormDoctor) {
                          handleDpjp4(assigner, isFormDoctor)
                        }
                        if (!isFormDoctor) {
                          handleDpjp4(assigner)
                        }
                      }}
                    />
                    <Input
                      type="hidden"
                      name="ttd_dokter_dpjp_4"
                      innerRef={register({ required: true })}
                      invalid={errors["ttd_dokter_dpjp_4"] && true}
                    />
                    <Input
                      type="hidden"
                      name="dokter_dpjp_4"
                      innerRef={register({ required: true })}
                      invalid={errors["dokter_dpjp_4"] && true}
                    />
                  </Card>
                </td>
              </tr>
            </Table>
          </Card>

          <Card className="border-1">
            <CardHeader style={{ background: "#d3d3d3", boxAlign: "center" }}>
              <Label>PERALIHAN DPJP UTAMA</Label>
            </CardHeader>
            <Table>
              <tr>
                <td>
                  <Signature
                    label="Dokter Perahlian"
                    type="picker"
                    additionalLabel={ data && data.form && data.form.Dokter_Dpjp_Peralihan_Nama ? data.form.Dokter_Dpjp_Peralihan_Nama : ""}
                    initialImage={(data && data.form && data.form.TTD_Dokter_Peralihan && data.form.TTD_Dokter_Peralihan !== '') ? data.form.TTD_Dokter_Peralihan : undefined}
                    persons={doctors}
                    unit='dokter'
                    onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                      if (isFormDoctor) {
                        handlePeralihan(assigner, isFormDoctor)
                      }
                      if (!isFormDoctor) {
                        handlePeralihan(assigner)
                      }
                    }}
                  />
                  <Input
                    type="hidden"
                    name="ttd_dokter_peralihan"
                    innerRef={register({ required: true })}
                    invalid={errors["ttd_dokter_peralihan"] && true}
                  />
                  <Input
                    type="hidden"
                    name="dokter_peralihan"
                    innerRef={register({ required: true })}
                    invalid={errors["dokter_peralihan"] && true}
                  />
                </td>
                <td>
                  <FormGroup className="form-group" row>
                    <Label for="tanggal_peralihan" md="3" sm="12">
                      Tanggal Peralihan
                    </Label>
                    <Col>
                      <DateTimeInput
                        name="tanggal_peralihan"
                        defaultValue="date"
                        md={1}
                        style={{ width: "100%" }}
                        {...{ register, errors }}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup className="form-group" row>
                    <Label for="alasan_peralihan" md="3" sm="12">
                      Alasan Peralihan
                    </Label>
                    <Col>
                      <Input
                        type="textarea"
                        id="alasan_peralihan"
                        name="alasan_peralihan"
                        innerRef={register()}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup className="form-group" row>
                    <Label for="peralihan_dpjp" md="3" sm="12">
                      Peralihan DPJP Utama
                    </Label>
                    <Col>
                      <Input
                        type="text"
                        style={{ width: "100%" }}
                        id="peralihan_dpjp"
                        name="peralihan_dpjp"
                        innerRef={register()}
                      />
                    </Col>
                  </FormGroup>
                </td>
              </tr>
            </Table>
          </Card>
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
                  {/* <Label>{(data && data.form && data.form.Updated_At) ? data.form.Updated_At : ''}</Label> */}
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

export default DpjpSheetForm;
