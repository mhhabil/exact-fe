import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from "reactstrap";
import { IUpdateFallRiskAssessmentRequest, UpdateFallRiskAssessmentRequest } from "../requests";
import { fetchFallRiskAssessment, fetchFallRiskAssessmentPdf, handlePdf } from "../stores/fall-risk-assessment.store";
import { useEffect, useState } from "react";
import { AppRequest } from "@src/shared/request";
import { DateTimeInput } from "@src/shared/input";
import { FallRiskAssessmentModel } from "../models/fall-risk-assessment.model";
import { FallRiskAssessmentService } from "../services";
import { FindPdfRequest } from "@src/shared/pdf";
import { PdfFallRiskAssessmentRequest } from '@modules/outpatient/fall-risk-assessment/requests/pdf-fall-risk-assessment.request';
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { SubmitButton } from "@src/shared/button";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useForm } from "react-hook-form";
import { useWarnIfUnsavedChanges } from "@src/shared/alert";
import { DateTimeConverter } from "@src/shared/datetime-converter";

const FallRiskAssessmentForm = (props: { data: FallRiskAssessmentModel}) => {
  const { data } = props;

  const getToolValue = () => {
    const toolValue: Array<string> = [];
    if (data && data.form && data.form.Berjalan_Alat_Bantu_Data) {
      const helpingTools = data.form.Berjalan_Alat_Bantu_Data;
      if (helpingTools.Kruk) {
        toolValue.push('1')
      }
      if (helpingTools.Tripot) {
        toolValue.push('2')
      }
      if (helpingTools.Kursi_Roda) {
        toolValue.push('3')
      }
      if (helpingTools.Orang_Lain) {
        toolValue.push('4')
      }
    }
    return toolValue;
  }

  const [processing, setProcessing] = useState(false);
  const dispatch = useAppDispatch();
  const { treatment } = useAppSelector(state => state.patient);
  const [alatBantu, setAlatBantu] = useState(false);
  const [toolLists, setToolLists] = useState<Array<string>>(getToolValue())
  const [overall, setOverall] = useState<number>(1)
  const [hasilTidakSeimbang, setHasilTidakSeimbang] = useState<boolean>(data && data.form && data.form.Berjalan_Tidak_Seimbang === 1);
  const [hasilAlatBantu, setHasilAlatBantu] = useState<boolean>(data && data.form && data.form.Berjalan_Alat_Bantu === 1);
  const [hasilMenopang, setHasilMenopang] = useState<boolean>(data && data.form && data.form.Menopang === 1);
  const { officers } = useAppSelector(state => state.officer);
  const [isKotor, setIsKotor] = useState<boolean>(false)

  const { pdf } = useAppSelector(state => state.fallRiskAssessment);
  const [pdfData, setPdfData] = useState<any | undefined>(undefined);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchFallRiskAssessmentPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'informasi_risiko-jatuh_v3' })));
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
    const hasilTidakSeimbang = data && data.form && data.form.Berjalan_Tidak_Seimbang === 1
    const hasilAlatBantu = data && data.form && data.form.Berjalan_Alat_Bantu === 1
    const hasilMenopang = data && data.form && data.form.Menopang === 1

    const hasilA = hasilTidakSeimbang || hasilAlatBantu;
    const hasilB = hasilMenopang;
    if (hasilA && hasilB) {
      setOverall(3);
    } else if (hasilA || hasilB) {
      setOverall(2)
    } else {
      setOverall(1)
    }
  }, [data])

  const handleToolListCheckbox = (e: any) => {
    if (e.target.checked) {
      if (toolLists && toolLists.includes(e.target.value)) {
        return;
      } else {
        setToolLists([...toolLists, e.target.value])
      }
    }
    if (!e.target.checked) {
      if (toolLists && toolLists.includes(e.target.value)) {
        const newLists = toolLists.filter((val: string) => val !== e.target.value)
        setToolLists(newLists);
      } else {
        return 0;
      }
    }
  }

  useEffect(() => {
    setValue('tool_value', toolLists)
  }, [toolLists])

  useEffect(() => {
    if (data && data.form.Berjalan_Alat_Bantu && data.form.Berjalan_Alat_Bantu === 1) {
      setAlatBantu(true);
    }
  }, [data])

  const { register, handleSubmit, errors, setValue, reset, formState } = useForm<any>({
    mode: 'onChange',
    // resolver: yupResolver(UpdateFallRiskAssessmentRequest.schema()),
    defaultValues: {
      preliminary_date: (data && data.form && data.form.Tanggal_Pengkaji) ? data.form.Tanggal_Pengkaji.replace(' ', 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      unbalanced_radio: (data && data.form && data.form.Berjalan_Tidak_Seimbang) ? data.form.Berjalan_Tidak_Seimbang : '',
      auxiliary_radio: (data && data.form && data.form.Berjalan_Alat_Bantu) ? data.form.Berjalan_Alat_Bantu : '',
      tool_value: getToolValue(),
      support_radio: (data && data.form && data.form.Menopang) ? data.form.Menopang : '',
      result_date: (data && data.form && data.form.Tanggal_Hasil) ? data.form.Tanggal_Hasil.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      action_date: (data && data.form && data.form.Tanggal_Tindakan) ? data.form.Tanggal_Tindakan.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      result_value: overall ? `${overall}` : '',
      result_text: (data && data.form && data.form.Hasil_Teks) ? data.form.Hasil_Teks : '',
      result_description: (data && data.form && data.form.Keterangan_Hasil) ? data.form.Keterangan_Hasil : '',
      signature: data?.form?.Tanda_Tangan ?? '',
      high_sticker_radio:(data && data.form && data.form.Tindakan_Tinggi_Pasang_Stiker) ? data.form.Tindakan_Tinggi_Pasang_Stiker : '',
      high_yellow_radio:(data && data.form.Tindakan_Tinggi_Kuning) ? data.form.Tindakan_Tinggi_Kuning : '',
      high_education_radio:(data && data.form.Tindakan_Tinggi_Edukasi) ? data.form.Tindakan_Tinggi_Edukasi : '',
      no_risk_radio: (data && data.form && data.form.Tindakan_Tidak_Ada_Berisiko) ? data.form.Tindakan_Tidak_Ada_Berisiko : '',
      low_education_radio: (data && data.form && data.form.Tindakan_Rendah_Edukasi) ? data.form.Tindakan_Rendah_Edukasi : '',
      id_sign: (data && data.form && data.form.ID_Tanda_Tangan) ? data.form.ID_Tanda_Tangan : '',
    },
  });


  const { isDirty } = formState;

  useWarnIfUnsavedChanges(isDirty || isKotor, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
    setIsKotor(true);
  }

  const handleOfficerSigned = (assigner: SignatureModel) => {
    setValue('signature', assigner.Signature);
    setValue('id_sign', assigner.ID_Karyawan);
  }

  const handleProcessing = () => {
    setProcessing(true);
  }

  const handleSubmitForm = (value: IUpdateFallRiskAssessmentRequest) => {
    if (!treatment) {
      return;
    }
    handleProcessing()
    reset(value);
    setIsKotor(false);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateFallRiskAssessmentRequest.createFromJson({ ...value, ...appRequest });
    dispatch(handlePdf(undefined));
    FallRiskAssessmentService().update(params)
      .then(() => {
        FallRiskAssessmentService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            FallRiskAssessmentService().pdfv3(PdfFallRiskAssessmentRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
              .then(() => {
                setProcessing(false);
                dispatch(fetchFallRiskAssessmentPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'informasi_risiko-jatuh_v3' })))
              })
          });
        setProcessing(false);
        dispatch(fetchFallRiskAssessment(AppRequest.createFromStore(treatment)));
      });
  }

  const handleRadioSelect = (e: any) => {
    if (e.target.name === 'unbalanced_radio') {
      setHasilTidakSeimbang(e.target.value === '1');
    }

    if (e.target.name === 'auxiliary_radio') {
      setHasilAlatBantu(e.target.value === '1');
    }

    if (e.target.name === 'support_radio') {
      setHasilMenopang(e.target.value === '1');
    }
  }

  useEffect(() => {
    const hasilA = hasilTidakSeimbang || hasilAlatBantu;
    const hasilB = hasilMenopang;
    if (hasilA && hasilB) {
      setOverall(3);
    } else if (hasilA || hasilB) {
      setOverall(2)
    } else {
      setOverall(1)
    }
  }, [hasilAlatBantu, hasilMenopang, hasilTidakSeimbang]);

  useEffect(() => {
    if (overall) {
      setValue('result_value', `${overall}`)
      if (overall === 1) {
        setValue('result_text', 'Tidak Berisiko');
      }
      if (overall === 2) {
        setValue('result_text', 'Risiko Rendah');
      }
      if (overall === 3) {
        setValue('result_text', 'Risiko Tinggi');
      }
    }
  }, [overall])

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <Input
          id="result-text"
          type="hidden"
          name="result_text"
          innerRef={register()}
          invalid={errors.result_text && true}
        />
        <Input
          id="result-value"
          type="hidden"
          name="result_value"
          innerRef={register()}
          invalid={errors.result_value && true}
        />
        <h4 className="mt-2">1. PENGKAJIAN</h4>
        <hr />
        <h4 className="mt-4">A. Cara Berjalan Pasien</h4>
        <hr />
        <FormGroup className="form-group" row>
          <DateTimeInput
            name='preliminary_date'
            label={`Tanggal`}
            md={1}
            {...{ register, errors }}
          />
        </FormGroup>
        <FormGroup className="form-group">
          <tr>
            <td>
              <Row className="mt-2">
                <Col>
                  <Label>Tidak Seimbang / Sempoyongan / Limbung</Label>
                </Col>
              </Row>
            </td>
            <td style={{ width: '50%' }}>
              <Row className="mt-2">
                <Col className="d-flex justify-content-center align-items-center">
                  <Input
                    id="unbalanced-radio-1"
                    type="radio"
                    name="unbalanced_radio"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      handleRadioSelect(e)
                      handleRadioChange(e);
                    }}
                    defaultChecked={data && data.form && data.form.Berjalan_Tidak_Seimbang === 1}
                    innerRef={register('unbalanced_radio') as any}
                  />{' '}
                  <Label>Ya</Label>
                </Col>
                <Col>
                  <Input
                    id="unbalanced-radio"
                    type="radio"
                    name="unbalanced_radio"
                    className="me-1"
                    value='0'
                    onChange={(e) => {
                      handleRadioSelect(e)
                      handleRadioChange(e);
                    }}
                    defaultChecked={data && data.form && data.form.Berjalan_Tidak_Seimbang === 0}
                    innerRef={register('unbalanced_radio') as any}
                  />{' '}
                  <Label>Tidak</Label>
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Row className="mt-2">
                <Col>
                  <Label>Jalan Menggunakan Alat Bantu</Label>
                </Col>
              </Row>
            </td>
            <td style={{ width: '65%' }}>
              <Row className="mt-2">
                <Col className="d-flex justify-content-center">
                  <Input
                    id="auxiliary-radio-1"
                    type="radio"
                    name="auxiliary_radio"
                    className="me-1"
                    value="1"
                    onChange={(e) => {
                      setAlatBantu(e.target.checked)
                      handleRadioSelect(e)
                      handleRadioChange(e)
                    }}
                    defaultChecked={!!(data && data.form && data.form.Berjalan_Alat_Bantu === 1)}
                    innerRef={register('auxiliary_radio') as any}
                  />{' '}
                  <Label>Ya</Label>
                </Col>
                <Col>
                  <Input
                    id="auxiliary-radio"
                    type="radio"
                    name="auxiliary_radio"
                    className="me-1"
                    value="0"
                    onChange={(e) => {
                      setAlatBantu(false)
                      handleRadioSelect(e)
                      handleRadioChange(e)
                    }}
                    defaultChecked={data && data.form && data.form.Berjalan_Alat_Bantu === 0 }
                    innerRef={register('auxiliary_radio') as any}
                  />{' '}
                  <Label>Tidak</Label>
                </Col>
              </Row>
            </td>
          </tr>
          {
            alatBantu && (
              <>
                <tr>
                  <td>

                  </td>
                  <td style={{ width: '65%' }}>
                    <Row className="mt-2" style={{ border: 'solid black 1px', borderRadius: '0.75rem' }}>
                      <Col className="d-flex justify-content-center">
                        <Input
                          id="tool-value-1"
                          type="checkbox"
                          name="tool_value[]"
                          className="me-1 mt-1"
                          value="1"
                          onChange={(e) => handleToolListCheckbox(e)}
                          defaultChecked={getToolValue() && getToolValue().length > 0 && getToolValue().includes('1')}
                          innerRef={register('tool_value') as any}
                        />{' '}
                        <Label className="mt-1">Kruk  </Label>
                      </Col>
                      <Col className="d-flex justify-content-center">
                        <Input
                          id="tool-value-2"
                          type="checkbox"
                          name="tool_value[]"
                          className="me-1 mt-1"
                          value="2"
                          onChange={(e) => handleToolListCheckbox(e)}
                          defaultChecked={getToolValue() && getToolValue().length > 0  && getToolValue().includes('2')}
                          innerRef={register('tool_value') as any}
                        />{' '}
                        <Label className="mt-1">Tripot</Label>
                      </Col>
                      <Col className="d-flex justify-content-center">
                        <Input
                          id="tool-value-3"
                          type="checkbox"
                          name="tool_value[]"
                          className="me-1 mt-1"
                          value="3"
                          onChange={(e) => handleToolListCheckbox(e)}
                          defaultChecked={getToolValue() && getToolValue().length > 0 && getToolValue().includes('3')}
                          innerRef={register('tool_value') as any}
                        />{' '}
                        <Label className="mt-1">Kursi Roda</Label>
                      </Col>
                      <Col className="d-flex justify-content-center">
                        <Input
                          id="tool-value-4"
                          type="checkbox"
                          name="tool_value[]"
                          className="me-1 mt-1"
                          value="4"
                          onChange={(e) => handleToolListCheckbox(e)}
                          defaultChecked={getToolValue() && getToolValue().length > 0 && getToolValue().includes('4')}
                          innerRef={register('tool_value') as any}
                        />{' '}
                        <Label className="mt-1">Orang Lain</Label>
                      </Col>
                    </Row>
                  </td>
                </tr>
              </>
            )
          }
        </FormGroup>

        {/* kedua */}

        <h4 className="mt-4">B. Menopang Saat Akan Duduk</h4>
        <hr />
        <FormGroup className="form-group align-items-center mt-1" row>
          <Label md="3" sm="2">Tampak Memegang Pinggiran Kursi atau Meja atau Benda Lain, Sebagai Penopang Saat Akan Duduk</Label>
          <Col sm="2">
            <Input
              style={{ marginLeft: '25%' }}
              id="support-radio-1"
              type="radio"
              name="support_radio"
              className="me-1"
              value="1"
              onChange={(e) => {
                handleRadioSelect(e)
                handleRadioChange(e)
              }}
              defaultChecked={data && data.form && data.form.Menopang === 1}
              innerRef={register('support_radio') as any}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="support-radio"
              type="radio"
              name="support_radio"
              className="me-1"
              value="0"
              onChange={(e) => {
                handleRadioSelect(e)
                handleRadioChange(e)
              }}
              defaultChecked={data && data.form && data.form.Menopang === 0}
              innerRef={register('support_radio') as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
        </FormGroup>

        <h4 className="mt-4">2. Hasil</h4>
        <hr />
        <FormGroup className="form-group" row>
          <DateTimeInput
            name='result_date'
            label={`Tanggal & Waktu`}
            md={2}
            {...{ register, errors }}
          />
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label for="result_description" md="2" sm="12">Hasil</Label>
          <Col>
            {
              overall && overall === 3 && (
                <Label md="2" sm="12" className="fw-bold"><b>Risiko Tinggi</b></Label>
              )
            }
            {
              overall && overall === 1 && (
                <Label md="2" sm="12" className="fw-bold"><b>Tidak Berisiko</b></Label>
              )
            }
            {
              overall && overall === 2 && (
                <Label md="2" sm="12" className="fw-bold"><b>Risiko Rendah</b></Label>
              )
            }
          </Col>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label for="result_description" md="2" sm="12">Keterangan</Label>
          <Col>
            <Input
              type="textarea"
              id="result_description"
              name="result_description"
              innerRef={register()}
              invalid={errors.result_description && true}
            />
          </Col>
        </FormGroup>

        {/* KETIGA */}

        <h4 className="mt-4">3. TINDAKAN</h4>
        <hr />
        <FormGroup className="form-group" row>
          <DateTimeInput
            name='action_date'
            label={`Tanggal & Waktu`}
            md={2}
            {...{ register, errors }}
          />
        </FormGroup>
        {
          overall && overall === 3 && (
            <>
              <FormGroup className="form-group align-items-center mt-2" row>
                <Label for="high_sticker_radio" md="2" sm="12">Pasang Stiker Kuning</Label>
                <Col sm="2">
                  <Input
                    id="high-sticker-radio-1"
                    type="radio"
                    name="high_sticker_radio"
                    className="me-1"
                    value="1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Tindakan_Tinggi_Pasang_Stiker === 1}
                    innerRef={register('high_sticker_radio') as any} />{' '}
                  <Label>Ya</Label>
                </Col>
                <Col>
                  <Input
                    id="high-sticker-radio"
                    type="radio"
                    name="high_sticker_radio"
                    className="me-1"
                    value="0"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Tindakan_Tinggi_Pasang_Stiker === 0}
                    innerRef={register('high_sticker_radio') as any} />{' '}
                  <Label>Tidak</Label>
                </Col>
              </FormGroup>
              <FormGroup className="form-group align-items-center mt-1" row>
                <Label for="high_sticker_radio" md="2" sm="12">Edukasi</Label>
                <Col sm="2">
                  <Input
                    id="high-education-radio-1"
                    type="radio"
                    name="high_education_radio"
                    className="me-1"
                    value="1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Tindakan_Tinggi_Edukasi === 1}
                    innerRef={register('high_education_radio') as any} />{' '}
                  <Label>Ya</Label>
                </Col>
                <Col>
                  <Input
                    id="high-education-radio"
                    type="radio"
                    name="high_education_radio"
                    className="me-1"
                    value="0"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Tindakan_Tinggi_Edukasi === 0}
                    innerRef={register('high_education_radio') as any} />{' '}
                  <Label>Tidak</Label>
                </Col>
              </FormGroup>
            </>
          )
        }
        {
          overall && overall === 2 && (
            <FormGroup className="form-group align-items-center mt-1" row>
              <Label for="low_education_radio" md="2" sm="12">Edukasi</Label>
              <Col sm="2">
                <Input
                  id="low-education-radio-1"
                  type="radio"
                  name="low_education_radio"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.form && data.form.Tindakan_Rendah_Edukasi === 1}
                  innerRef={register('low_education_radio') as any}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col>
                <Input
                  id="low-education-radio"
                  type="radio"
                  name="low_education_radio"
                  className="me-1"
                  value="0"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.form && data.form.Tindakan_Rendah_Edukasi === 0}
                  innerRef={register('low_education_radio') as any}
                />{' '}
                <Label>Tidak</Label>
              </Col>
            </FormGroup>
          )
        }
        {
          overall && overall === 1 && (
            <FormGroup className="form-group align-items-center mt-1" row>
              <Label for="no_risk_radio" md="2" sm="12">Tidak Ada Berisiko</Label>
              <Col sm="2">
                <Input
                  id="no-risk-radio-1"
                  type="radio"
                  name="no_risk_radio"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.form && data.form.Tindakan_Tidak_Ada_Berisiko === 1 }
                  innerRef={register('no_risk_radio') as any}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col>
                <Input
                  id="no-risk-radio"
                  type="radio"
                  name="no_risk_radio"
                  className="me-1"
                  value="0"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.form && data.form.Tindakan_Tidak_Ada_Berisiko === 0 }
                  innerRef={register('no_risk_radio') as any}
                />{' '}
                <Label>Tidak</Label>
              </Col>
            </FormGroup>
          )
        }
        <Row>
          <Col md="12">
            <div className="d-flex justify-content-center mb-2">
              <Signature
                label="Petugas"
                type="picker"
                persons={officers}
                initialImage={(data && data.form && data.form.Tanda_Tangan && data.form.Tanda_Tangan !== '') ? data.form.Tanda_Tangan : undefined}
                additionalLabel={(data && data.form && data.form.Nama_Tanda_Tangan !== '') ? data.form.Nama_Tanda_Tangan : undefined}
                onSigned={(assigner: SignatureModel) => handleOfficerSigned(assigner)} />
            </div>
            <Input
              id="signature"
              type="hidden"
              name="signature"
              innerRef={register()}
              invalid={errors.signature && true}
            />
            <Input
              id="id_sign"
              type="hidden"
              name="id_sign"
              innerRef={register()}
              invalid={errors.id_sign && true}
            />
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormGroup className="d-flex mb-0 justify-content-center">
              <SubmitButton
                label="Simpan"
                buttonColor='primary'
                spinnerColor='light'
                spinnerStyle={{ width: '1rem', height: '1rem' }}
                processing={processing} />
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
          </Col>
        </Row>
      </Form>
    </>
  );
}
export default FallRiskAssessmentForm;
