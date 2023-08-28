import { Button, Card, CardBody, Col, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap';
import { FindPdfRequest, IPdfModel } from '@shared/pdf';
import { ISignatureModel, SignatureModel } from '@src/shared/signature/models/signature.model';
import {
  IUpdateInitialNutritionalAssessmentRequest,
  UpdateInitialNutritionalAssessmentRequest,
} from '@modules/inpatient/initial-nutritional-assessment/requests/update-initial-nutritional-assessment.request';
import {
  fetchInitialNutritionalAssessment,
  fetchInitialNutritionalAssessmentPdf,
  handlePdf,
} from '@modules/inpatient/initial-nutritional-assessment/stores/initial-nutritional-assessment.store';
import { useEffect, useState } from 'react';
import { AppRequest } from '@shared/request';
import { InitialNutritionalAssessment } from '../models/initial-nutritional-assessment.model';
import InitialNutritionalAssessmentService from '@modules/inpatient/initial-nutritional-assessment/services';
import { PdfInitialNutritionalAssessmentRequest } from '@modules/inpatient/initial-nutritional-assessment/requests/pdf-initial-nutritional-assessment.request';
import { Signature } from '@src/shared/signature/components';
import { SubmitButton } from '@shared/button';
import { NumberInput, TextInput } from '@shared/input';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import dietawal from '../const/dietawal';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const InitialNutritionalAssessmentForm = (props: { data: InitialNutritionalAssessment }) => {

  const { data } = props;

  const [processing, setProcessing] = useState(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);

  const { treatment } = useAppSelector(state => state.patient);
  const { officers } = useAppSelector(state => state.officer);
  const { pdf } = useAppSelector(state => state.initialNutritionalAssessment);
  const dispatch = useAppDispatch();

  const [showBbAnak, setShowBbAnak] = useState<any>((data.form &&  data.form.Bb_Anak) ? data.form.Bb_Anak : '');
  const [showTbAnak, setShowTbAnak] = useState<any>((data.form &&  data.form.Tb_Anak) ? data.form.Tb_Anak : '');
  const [showBbDewasa, setShowBbDewasa] = useState<any>((data.form &&  data.form.Bb_Dewasa) ? data.form.Bb_Dewasa : '');
  const [showTbDewasa, setShowTbDewasa] = useState<any>((data.form &&  data.form.Tb_Dewasa) ? data.form.Tb_Dewasa : '');
  const [showStatusGizi, setShowStatusGizi] = useState<any>((data.form &&  data.form.Status_Gizi) ? data.form.Status_Gizi : '');

  useEffect(() => {
    const monthDiff = treatment && treatment.Pasien && treatment.Pasien.Umur_Lengkap && treatment.Pasien.Umur_Lengkap.Bulan ? parseInt(treatment.Pasien.Umur_Lengkap.Bulan) : undefined;
    const yearDiff = treatment?.Pasien?.Umur.toString() ?? undefined;

    const bb = parseInt(showBbAnak);

    if (yearDiff && yearDiff === '0') {
      if (monthDiff && monthDiff <= 11) {
        const beratIdealRaw = (monthDiff * 0.5) + 4;
        const beratIdeal = beratIdealRaw.toFixed(2);
        const beratIdealPersen = (bb / beratIdealRaw) * 100;
        setValue('bb_0_12_anak', beratIdeal);
        setValue('bb_1_13_anak', '0');
        setValue('bb_ideal_anak', beratIdealPersen);
      }
    } else if (yearDiff && parseInt(yearDiff) > 0 && parseInt(yearDiff) < 13) {
      const beratIdealRaw = (parseInt(yearDiff) * 2) + 8;
      const beratIdeal = beratIdealRaw.toFixed(2);
      const beratIdealPersen = (bb / beratIdealRaw) * 100;
      setValue('bb_0_12_anak', '0');
      setValue('bb_1_13_anak', beratIdeal);
      setValue('bb_ideal_anak', beratIdealPersen);
    } else {
      setValue('bb_0_12_anak', '0');
      setValue('bb_1_13_anak', '0');
      setValue('bb_ideal_anak', '0');
    }

  }, [showBbAnak, showTbAnak])

  useEffect(() => {

    const yearDiff = treatment?.Pasien?.Umur.toString() ?? undefined;
    const tb = parseInt(showTbDewasa);
    const bb = parseInt(showBbDewasa);

    if (yearDiff && parseInt(yearDiff) > 13) {
      const idealWeight = ((parseInt(showTbDewasa) - 100) * 0.9).toFixed(2);
      const idealFloat = Math.round(parseFloat(idealWeight));
      setValue('bb_ideal_dewasa', idealFloat);
    }

    const imt = bb && tb ? bb / Math.pow(tb / 100.0, 2) : undefined;
    setValue('imt', imt ? imt.toFixed(2) : '');

    if (imt && !isNaN(imt)) {
      if (imt < 17) {
        const statusGizi = 'Buruk (IMT < 17 Kg/m2)';
        setValue('status_gizi_kurang', statusGizi);
        setValue('status_gizi', '1');
        setShowStatusGizi('1');
      } else if (imt >= 17 && imt < 18.5) {
        const statusGizi = 'Kurang (IMT >= 17 Kg/m2 & IMT < 18.5 Kg/m2)';
        setValue('status_gizi_kurang', statusGizi);
        setValue('status_gizi', '2');
        setShowStatusGizi('2');
      } else if (imt >= 18.5 && imt < 25) {
        const statusGizi = 'Baik (IMT >= 18.5 Kg/m2 & IMT < 25 Kg/m2)';
        setValue('status_gizi_kurang', statusGizi);
        setValue('status_gizi', '3');
        setShowStatusGizi('3');
      } else if (imt >= 25 && imt < 27) {
        const statusGizi = 'Lebih (IMT >= 25 Kg/m2 & IMT < 27 Kg/m2)';
        setValue('status_gizi_kurang', statusGizi);
        setValue('status_gizi', '4');
        setShowStatusGizi('4');
      } else if (imt >= 27) {
        const statusGizi = 'Obesitas (IMT >= 27 Kg/m2)';
        setValue('status_gizi_kurang', statusGizi);
        setValue('status_gizi', '5');
        setShowStatusGizi('5');
      }
    }
  }, [showBbDewasa, showTbDewasa])

  useEffect(() => {
    if (data) {
      setShowBbAnak(data?.form?.Bb_Anak ?? '');
      setShowBbDewasa(data?.form?.Bb_Dewasa ?? '');
      setShowTbAnak(data?.form?.Tb_Anak ?? '');
      setShowTbDewasa(data?.form?.Tb_Dewasa ?? '');
    }
  }, [data])


  useEffect(() => {
    if (treatment) {
      dispatch(fetchInitialNutritionalAssessmentPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pengkajian-awal-gizi' })));
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

  const { handleSubmit, register, reset, errors, setValue, watch } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: true,
    resolver: yupResolver(UpdateInitialNutritionalAssessmentRequest.schema()),
    defaultValues: {
      tanggal: data?.form?.Tanggal ?? convertDatetimeToUTC(),
      diagnosa_masuk: data?.form?.Diagnosa_Masuk ?? '',
      diet_awal: data?.form?.Diet_Awal ?? '',
      bb_anak: data?.form?.Bb_Anak ?? '',
      tb_anak: data?.form?.Tb_Anak ?? '',
      bb_0_12_anak: data?.form?.Bb_0_12_Anak ?? '',
      bb_1_13_anak: data?.form?.Bb_1_13_Anak ?? '',
      bb_ideal_anak: data?.form?.Bb_Ideal_Anak ?? '',
      z_score: data?.form?.Z_Score ?? '',
      bb_dewasa: data?.form?.Bb_Dewasa ?? '',
      tb_dewasa: data?.form?.Tb_Dewasa ?? '',
      bb_ideal_dewasa: data?.form?.Bb_Ideal_Dewasa ?? '',
      imt: data?.form?.IMT ?? '',
      status_gizi: data?.form?.Status_Gizi ?? '',
      status_gizi_buruk: data?.form?.Status_Gizi_Buruk ?? '',
      status_gizi_kurang: data?.form?.Status_Gizi_Kurang ?? '',
      status_gizi_baik: data?.form?.Status_Gizi_Baik ?? '',
      status_gizi_lebih: data?.form?.Status_Gizi_Lebih ?? '',
      status_gizi_obesitas: data?.form?.Status_Gizi_Obesitas ?? '',
      gangguan_gastro: data?.form?.Gangguan_Gastro ?? '',
      gangguan_gastro_ada_mual: data?.form?.Gangguan_Gastro_Ada?.mual ?? '',
      gangguan_gastro_ada_muntah: data?.form?.Gangguan_Gastro_Ada?.muntah ?? '',
      gangguan_gastro_ada_diare: data?.form?.Gangguan_Gastro_Ada?.diare ?? '',
      gangguan_gastro_ada_konstipasi: data?.form?.Gangguan_Gastro_Ada?.konstipasi ?? '',
      gangguan_gastro_ada_anoreksia: data?.form?.Gangguan_Gastro_Ada?.anoreksia ?? '',
      faktor_resiko: data?.form?.Faktor_Resiko ?? '',
      perubahan_asupan: data?.form?.Perubahan_Asupan ?? '',
      perubahan_asupan_ada: data?.form?.Perubahan_Asupan_Ada ?? '',
      keterangan_gizi: data?.form?.Keterangan_Gizi ?? '',
      resiko_diabetes: data?.form?.Resiko_Diabetes ?? '',
      resiko_hipertensi: data?.form?.Resiko_Hipertensi ?? '',
      resiko_luka_bakar: data?.form?.Resiko_Luka_Bakar ?? '',
      resiko_kanker: data?.form?.Resiko_Kanker ?? '',
      resiko_dislipidemia: data?.form?.Resiko_Dislipidemia ?? '',
      resiko_gangguan_ginjal: data?.form?.Resiko_Gangguan_Ginjal ?? '',
      resiko_gangguan_lain: data?.form?.Resiko_Gangguan_Lain ?? '',
      resiko_gangguan_lain_teks: data?.form?.Resiko_Gangguan_Lain_Teks ?? '',
      resiko_gangguan_jantung: data?.form?.Resiko_Gangguan_Jantung ?? '',
      resiko_stroke: data?.form?.Resiko_Stroke ?? '',
      resiko_gastritis: data?.form?.Resiko_Gastritis ?? '',
      resiko_thyphoid: data?.form?.Resiko_Thyphoid ?? '',
      resiko_lainnya: data?.form?.Resiko_Lainnya ?? '',
      resiko_lainnya_teks: data?.form?.Resiko_Lainnya_Teks ?? '',
      diagnosa_gizi: data?.form?.Diagnosa_Gizi ?? '',
      intervensi: data?.form?.Intervensi ?? '',
      monitoring: data?.form?.Monitoring ?? '',
      evaluasi: data?.form?.Evaluasi ?? '',
      nama_petugas_gizi: data?.form?.Nama_Petugas_Gizi ?? '',
      id_petugas_gizi: data?.form?.ID_Petugas_Gizi ?? '',
      ttd_petugas_gizi: data?.form?.TTD_Petugas_Gizi ?? '',
    },
  });

  const watchGG = watch('gangguan_gastro');
  const watchFR = watch('faktor_resiko');
  const watchPA = watch('perubahan_asupan_ada');

  const handleDietitianSigned = (signature: ISignatureModel) => {
    setValue('ttd_petugas_gizi', signature.Signature);
    setValue('id_petugas_gizi', signature.ID_Karyawan);
  }

  const handleRadioChange = (e: any) => {
    setValue(e.target.name, e.target.value);
  }

  const handleRadioStatus = (e: any) => {
    setShowStatusGizi(e.target.value);
    setValue(e.target.name, e.target.value);
  }

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  const handleDefaultGastro = (isFlag: any) => {
    if (isFlag === '0') {
      setValue('gangguan_gastro_ada_mual', undefined);
      setValue('gangguan_gastro_ada_muntah', undefined);
      setValue('gangguan_gastro_ada_diare', undefined);
      setValue('gangguan_gastro_ada_konstipasi', undefined);
      setValue('gangguan_gastro_ada_anoreksia', undefined);
    }
  }

  const handleDefaultAsupan = (isFlag: any) => {
    if (isFlag === '0') {
      setValue('resiko_diabetes', undefined);
      setValue('resiko_luka_bakar', undefined);
      setValue('resiko_dislipidemia', undefined);
      setValue('resiko_stroke', undefined);
      setValue('resiko_thyphoid', undefined);
      setValue('resiko_hipertensi', undefined);
      setValue('resiko_kanker', undefined);
      setValue('resiko_gangguan_ginjal', undefined);
      setValue('resiko_gangguan_jantung', undefined);
      setValue('resiko_gastritis', undefined);
      setValue('resiko_lainnya', undefined);
    }
  }

  const handleDefaultResiko = (isFlag: any) => {
    if (isFlag === '0') {
      setValue('perubahan_asupan', undefined);
    }
  }

  const handleSubmitForm = (value: IUpdateInitialNutritionalAssessmentRequest) => {
    if (!treatment) {
      return;
    }
    value.gangguan_gastro_ada = {
      mual: value.gangguan_gastro_ada_mual,
      muntah: value.gangguan_gastro_ada_muntah,
      diare: value.gangguan_gastro_ada_diare,
      konstipasi: value.gangguan_gastro_ada_konstipasi,
      anoreksia: value.gangguan_gastro_ada_anoreksia,
    }
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateInitialNutritionalAssessmentRequest.createFromJson({
      ...value,
      ...appRequest,
    });
    setProcessing(true);
    dispatch(handlePdf(undefined));
    reset(value);
    InitialNutritionalAssessmentService().update(params)
      .then(() => {
        InitialNutritionalAssessmentService().show(appRequest)
          .then((response) => {
            if (response && response.data && response.data.data) {
              InitialNutritionalAssessmentService().pdfv3(PdfInitialNutritionalAssessmentRequest.createPdfRequest({ ...response.data.data }, appRequest.emr_id))
                .then(() => {
                  setProcessing(false);
                  dispatch(fetchInitialNutritionalAssessmentPdf(FindPdfRequest.createFromJson({
                    emr_id: treatment.EMR_ID,
                    form_name: 'rawat-inap_pengkajian-awal-gizi',
                  })));
                  dispatch(fetchInitialNutritionalAssessment(appRequest));
                  return true;
                }).finally(() => {
                  setProcessing(false);
                })
            }
          })
      });
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <Card className="border-1">
        <CardBody>
          <FormGroup>
            <div className="border p-1">
              <Row>
                <Col md='2' className="mt-1">
                  <div>
                    <Label>Waktu</Label>
                  </div>
                  <div className='mt-2'>
                    <Label>Diet Awal</Label>
                  </div>
                </Col>
                <Col className="mt-1">
                  <div>
                    <Input
                      type="datetime-local"
                      id="tanggal"
                      name="tanggal"
                      innerRef={register()}
                      invalid={errors.tanggal && true}
                    />
                  </div>
                  <div className='mt-2'>
                    <Input
                      type="select"
                      id="diet_awal"
                      name="diet_awal"
                      innerRef={register()}
                    >
                      <option value="" disabled={false}>--</option>
                      {
                        dietawal && dietawal.map((item: any, key: number) => {
                          return <option value={item.value} key={key}>{ item.name }</option>;
                        })
                      }
                    </Input>
                  </div>
                </Col>
                <Col md='1' className="mt-1">
                  <Label>Diagnosa</Label>
                </Col>
                <Col className="mt-1">
                  <Input
                    id="diagnosa_masuk"
                    type="textarea"
                    name="diagnosa_masuk"
                    innerRef={register() as any}
                  />
                </Col>
              </Row>
            </div>
          </FormGroup>
        </CardBody>
      </Card>

      <div className="d-flex justify-content-center mb-2">PENGKAJIAN DIISI OLEH DIETISIEN</div>

      <Card className="border-1">
        <CardBody>
          <div className="col-form-label fw-bolder">Antropometri</div>
          <div className="col-form-label fw-bolder">Pasien usia kurang dari 13 Tahun</div>
          <Row className="mt-1">
            <Col md='4' className="mt-2">
              <Label>Berat Badan Anak (BB)</Label>
            </Col>
            <Col md='4' className="mt-2">
              <Input
                type="number"
                id="bb_anak"
                name="bb_anak"
                onChange={(e) => {
                  setShowBbAnak(e.target.value)
                }}
                innerRef={register({ required: false })}
                invalid={errors.bb_anak && true}
              />
            </Col>
            <Col md='1'>
              <Label className='mt-2'>Kg</Label>
            </Col>
          </Row>

          <Row className="mt-1">
            <Col md='4' className="mt-2">
              <Label>Panjang / Tinggi Badan (TB)</Label>
            </Col>
            <Col md='4' className="mt-2">
              <Input
                type="number"
                id="tb_anak"
                name="tb_anak"
                onChange={(e) => {
                  setShowTbAnak(e.target.value)
                }}
                innerRef={register({ required: false })}
                invalid={errors.tb_anak && true}
              />
            </Col>
            <Col md='1'>
              <Label className='mt-2'>CM</Label>
            </Col>
          </Row>

          <Row className="mt-1">
            <Col md='4' className="mt-2">
              <Label>BB Ideal 0-11 Bulan (0,5 x umur dlm bulan + 4)</Label>
            </Col>
            <Col md='4' className="mt-2">
              <Input
                type="number"
                id="bb_0_12_anak"
                name="bb_0_12_anak"
                innerRef={register({ required: false })}
                invalid={errors.bb_0_12_anak && true}
                className='disabled-div'
              />
            </Col>
            <Col md='1'>
              <Label className='mt-2'>Kg</Label>
            </Col>
          </Row>

          <Row className="mt-1">
            <Col md='4' className="mt-2">
              <Label>BB Ideal 1-13 tahun (2 x umur dlm tahun + 8)</Label>
            </Col>
            <Col md='4' className="mt-2">
              <Input
                type="number"
                id="bb_1_13_anak"
                name="bb_1_13_anak"
                innerRef={register({ required: false })}
                invalid={errors.bb_1_13_anak && true}
                className='disabled-div'
              />
            </Col>
            <Col md='1'>
              <Label className='mt-2'>Kg</Label>
            </Col>
          </Row>

          <Row className="mt-1">
            <Col md='4' className="mt-2">
              <Label>% BB ideal (BB/BB ideal x 100%)</Label>
            </Col>
            <Col md='4' className="mt-2">
              <Input
                type="number"
                id="bb_ideal_anak"
                name="bb_ideal_anak"
                innerRef={register({ required: false })}
                invalid={errors.bb_ideal_anak && true}
                className='disabled-div'
              />
            </Col>
            <Col md='1'>
              <Label className='mt-2'>%</Label>
            </Col>
          </Row>

          <Row className="mt-1">
            <Col md='4' className="mt-2">
              <Label>Nilai Z-Score</Label>
            </Col>
            <Col md='4' className="mt-2">
              <Input
                type="number"
                id="z_score"
                name="z_score"
                innerRef={register({ required: false })}
                invalid={errors.z_score && true}
              />
            </Col>
            <Col md='1'>
              <Label className='mt-2'></Label>
            </Col>
          </Row>

        </CardBody>
      </Card>

      <Card className="border-1">
        <CardBody>
          <div className="col-form-label fw-bolder">Antropometri</div>
          <div className="col-form-label fw-bolder">Pasien usia lebih dari 13 Tahun</div>
          <Row className="mt-1">
            <Col md='4' className="mt-2">
              <Label>Berat Badan (BB)</Label>
            </Col>
            <Col md='4' className="mt-2">
              <Input
                type="number"
                id="bb_dewasa"
                name="bb_dewasa"
                onChange={(e) => {
                  setShowBbDewasa(e.target.value)
                }}
                innerRef={register({ required: false })}
                invalid={errors.bb_dewasa && true}
              />
            </Col>
            <Col md='1'>
              <Label className='mt-2'>KG</Label>
            </Col>
          </Row>


          <Row>
            <Col md='4' className="mt-2">
              <Label>Panjang / Tinggi Badan (TB)</Label>
            </Col>
            <Col  md='4' className="mt-2">
              <Input
                type="number"
                id="tb_dewasa"
                name="tb_dewasa"
                onChange={(e) => {
                  setShowTbDewasa(e.target.value)
                }}
                innerRef={register({ required: false })}
                invalid={errors.tb_dewasa && true}
              />
            </Col>
            <Col md='1'>
              <Label className='mt-2'>CM</Label>
            </Col>
          </Row>
          <Row>
            <Col md='4' className="mt-2">
              <Label>Berat Badan Ideal(TB - 100) x 0.9</Label>
            </Col>
            <Col  md='4' className="mt-2">
              <Input
                type="number"
                id="bb_ideal_dewasa"
                name="bb_ideal_dewasa"
                innerRef={register({ required: false })}
                invalid={errors.bb_ideal_dewasa && true}
                // className='disabled-div'
                readOnly
              />
            </Col>
            <Col md='1'>
              <Label className='mt-2'>Kg</Label>
            </Col>
          </Row>
          <Row>
            <Col md='4' className="mt-2">
              <Label>Penilaian Status Gizi (IMT)Indeks Massa Tubuh</Label>
            </Col>
            <Col  md='4' className="mt-2">
              <Input
                type="number"
                id="imt"
                name="imt"
                innerRef={register({ required: false })}
                invalid={errors.imt && true}
                // className='disabled-div'
                readOnly
              />
            </Col>
            <Col md='1'>
              <Label className='mt-2'>Kg/m2</Label>
            </Col>
          </Row>

        </CardBody>
      </Card>

      <Card className="border-1">
        <CardBody>

          <Row className='mt-2'>
            <Col>
              <Label>Status Gizi</Label>
            </Col>
            <Col>
              <Input
                id="status_gizi_buruk"
                type="radio"
                name="status_gizi"
                className="me-1"
                onChange={(e) => handleRadioStatus(e)}
                value="1"
                checked={showStatusGizi === '1'}
                innerRef={register("status_gizi") as any}
              />{' '}
              <Label>Buruk</Label>
            </Col>
            <Col>
              <Input
                id="status_gizi_kurang"
                type="radio"
                name="status_gizi"
                className="me-1"
                onChange={(e) => handleRadioStatus(e)}
                value="2"
                checked={showStatusGizi === '2'}
                innerRef={register("status_gizi") as any}
              />{' '}
              <Label>Kurang</Label>
            </Col>
            <Col>
              <Input
                id="status_gizi_baik"
                type="radio"
                name="status_gizi"
                className="me-1"
                onChange={(e) => handleRadioStatus(e)}
                value="3"
                checked={showStatusGizi === '3'}
                innerRef={register("status_gizi") as any}
              />{' '}
              <Label>Baik</Label>
            </Col>
            <Col>
              <Input
                id="status_gizi_lebih"
                type="radio"
                name="status_gizi"
                className="me-1"
                onChange={(e) => handleRadioStatus(e)}
                value="4"
                checked={showStatusGizi === '4'}
                innerRef={register("status_gizi") as any}
              />{' '}
              <Label>Lebih</Label>
            </Col>
            <Col>
              <Input
                id="status_gizi_obesitas"
                type="radio"
                name="status_gizi"
                className="me-1"
                onChange={(e) => handleRadioStatus(e)}
                value="5"
                checked={showStatusGizi === '5'}
                innerRef={register("status_gizi") as any}
              />{' '}
              <Label>Obesitas</Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup className="form-group" row>
                <TextInput name="keterangan_gizi" md={4} label="Keterangan Gizi" {...{ register, errors }} />
              </FormGroup>
            </Col>
            <Col md={1}>
            </Col>
          </Row>
        </CardBody>
      </Card>


      <Card className="border-1">
        <CardBody>

          <Row>
            <Col md={4}>
              <div className="col-form-label fw-bolder">Gangguan Gastrointestinal</div>
            </Col>
            <Col md={2}>
              <FormGroup check className="app-form-check">
                <Input
                  type="radio"
                  name="gangguan_gastro"
                  className="me-1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      handleDefaultGastro('0');
                    } else {
                      handleDefaultGastro('1');
                    }
                    handleRadioChange(e)
                  }}
                  defaultChecked={data?.form?.Gangguan_Gastro === '0'}
                  value="0"
                  innerRef={register('gangguan_gastro') as any}
                />{' '}
                <Label check>
                  Tidak Ada
                </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check className="app-form-check">
                <Input
                  type="radio"
                  name="gangguan_gastro"
                  className="me-1"
                  onChange={(e) => {
                    handleRadioChange(e)
                  }}
                  defaultChecked={data?.form?.Gangguan_Gastro === '1'}
                  value="1"
                  innerRef={register('gangguan_gastro') as any}
                />{' '}
                <Label check>
                  Ada, &lt; 2 minggu dengan gejala
                </Label>
              </FormGroup>
              {
                watchGG === '1' && (
                  <>

                    <FormGroup check className="app-form-check">
                      <Input
                        type="checkbox"
                        name="gangguan_gastro_ada_mual"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data?.form?.Gangguan_Gastro_Ada?.mual === '1'}
                        value="1"
                        innerRef={register('gangguan_gastro_ada_mual') as any}
                      />{' '}
                      <Label check>
                        Mual
                      </Label>
                    </FormGroup>

                    <FormGroup check className="app-form-check">
                      <Input
                        type="checkbox"
                        name="gangguan_gastro_ada_muntah"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data?.form?.Gangguan_Gastro_Ada?.muntah === '1'}
                        value="1"
                        innerRef={register('gangguan_gastro_ada_muntah') as any}
                      />{' '}
                      <Label check>
                        Muntah
                      </Label>
                    </FormGroup>

                    <FormGroup check className="app-form-check">
                      <Input
                        type="checkbox"
                        name="gangguan_gastro_ada_diare"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data?.form?.Gangguan_Gastro_Ada?.diare === '1'}
                        value="1"
                        innerRef={register('gangguan_gastro_ada_diare') as any}
                      />{' '}
                      <Label check>
                        Diare
                      </Label>
                    </FormGroup>

                    <FormGroup check className="app-form-check">
                      <Input
                        type="checkbox"
                        name="gangguan_gastro_ada_konstipasi"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data?.form?.Gangguan_Gastro_Ada?.konstipasi === '1'}
                        value="1"
                        innerRef={register('gangguan_gastro_ada_konstipasi') as any}
                      />{' '}
                      <Label check>
                        Konstipasi
                      </Label>
                    </FormGroup>

                    <FormGroup check className="app-form-check">
                      <Input
                        type="checkbox"
                        name="gangguan_gastro_ada_anoreksia"
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data?.form?.Gangguan_Gastro_Ada?.anoreksia === '1'}
                        value="1"
                        innerRef={register('gangguan_gastro_ada_anoreksia') as any}
                      />{' '}
                      <Label check>
                        Anoreksia
                      </Label>
                    </FormGroup>
                  </>
                )
              }
            </Col>
          </Row>


          <Row>
            <Col md={4}>
              <div className="col-form-label fw-bolder">Perubahan Asupan Makan</div>
            </Col>
            <Col md={2}>
              <FormGroup check className="app-form-check">
                <Input
                  type="radio"
                  name="perubahan_asupan_ada"
                  className="me-1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      handleDefaultAsupan('0');
                    } else {
                      handleDefaultAsupan('1');
                    }
                    handleRadioChange(e)
                  }}
                  defaultChecked={data?.form?.Perubahan_Asupan_Ada === '0'}
                  value="0"
                  innerRef={register('perubahan_asupan_ada') as any}
                />{' '}
                <Label check>
                  Tidak Ada
                </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check className="app-form-check">
                <Input
                  type="radio"
                  name="perubahan_asupan_ada"
                  className="me-1"
                  onChange={(e) => {
                    handleRadioChange(e)
                  }}
                  defaultChecked={data?.form?.Perubahan_Asupan_Ada === '1'}
                  value="1"
                  innerRef={register('perubahan_asupan_ada') as any}
                />{' '}
                <Label check>
                  Ada,
                </Label>
              </FormGroup>
              {
                watchPA === '1' && (
                  <>

                    <FormGroup check className="app-form-check">
                      <Input
                        type="radio"
                        name="perubahan_asupan"
                        className="me-1"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data?.form?.Perubahan_Asupan === '0'}
                        value="0"
                        innerRef={register('perubahan_asupan') as any}
                      />{' '}
                      <Label check>
                        &lt;= 5 hari, asupan makanan berkurang &gt; 60%
                      </Label>
                    </FormGroup>

                    <FormGroup check className="app-form-check">
                      <Input
                        type="radio"
                        name="perubahan_asupan"
                        className="me-1"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data?.form?.Perubahan_Asupan === '1'}
                        value="1"
                        innerRef={register('perubahan_asupan') as any}
                      />{' '}
                      <Label check>
                         &gt; 5 hari, asupan makanan berkurang &gt; 60%
                      </Label>
                    </FormGroup>

                  </>
                )
              }
            </Col>
          </Row>
          
          <Row>
            <Col md={4}>
              <div className="col-form-label fw-bolder">Mempunyai faktor resiko</div>
            </Col>
            <Col md={2}>
              <FormGroup check className="app-form-check">
                <Input
                  type="radio"
                  name="faktor_resiko"
                  className="me-1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      handleDefaultResiko('0');
                    } else {
                      handleDefaultResiko('1');
                    }
                    handleRadioChange(e)
                  }}
                  defaultChecked={data?.form?.Faktor_Resiko === '0'}
                  value="0"
                  innerRef={register('faktor_resiko') as any}
                />{' '}
                <Label check>
                  Tidak Ada
                </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check className="app-form-check">
                <Input
                  type="radio"
                  name="faktor_resiko"
                  className="me-1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data?.form?.Faktor_Resiko === '1'}
                  value="1"
                  innerRef={register('faktor_resiko') as any}
                />{' '}
                <Label check>
                  Ada
                </Label>
              </FormGroup>

              {
                watchFR === '1' && (
                  <>
                    <Row>
                      <Col>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="checkbox"
                            name="resiko_diabetes"
                            className="me-1"
                            onChange={(e) => handleCheckboxChange(e)}
                            defaultChecked={data?.form?.Resiko_Diabetes === '1'}
                            value="1"
                            innerRef={register('resiko_diabetes') as any}
                          />{' '}
                          <Label check>
                            Diabetes
                          </Label>
                        </FormGroup>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="checkbox"
                            name="resiko_luka_bakar"
                            className="me-1"
                            onChange={(e) => handleCheckboxChange(e)}
                            defaultChecked={data?.form?.Resiko_Luka_Bakar === '1'}
                            value="1"
                            innerRef={register('resiko_luka_bakar') as any}
                          />{' '}
                          <Label check>
                            Luka Bakar
                          </Label>
                        </FormGroup>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="checkbox"
                            name="resiko_dislipidemia"
                            className="me-1"
                            onChange={(e) => handleCheckboxChange(e)}
                            defaultChecked={data?.form?.Resiko_Dislipidemia === '1'}
                            value="1"
                            innerRef={register('resiko_dislipidemia') as any}
                          />{' '}
                          <Label check>
                            Dislipidemia
                          </Label>
                        </FormGroup>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="checkbox"
                            name="resiko_gangguan_lain"
                            className="me-1"
                            onChange={(e) => handleCheckboxChange(e)}
                            defaultChecked={data?.form?.Resiko_Gangguan_Lain === '1'}
                            value="1"
                            innerRef={register('resiko_gangguan_lain') as any}
                          />{' '}
                          <Label check>
                            Ganggu
                          </Label>
                        </FormGroup>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="checkbox"
                            name="resiko_stroke"
                            className="me-1"
                            onChange={(e) => handleCheckboxChange(e)}
                            defaultChecked={data?.form?.Resiko_Stroke === '1'}
                            value="1"
                            innerRef={register('resiko_stroke') as any}
                          />{' '}
                          <Label check>
                            Stroke
                          </Label>
                        </FormGroup>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="checkbox"
                            name="resiko_thyphoid"
                            className="me-1"
                            onChange={(e) => handleCheckboxChange(e)}
                            defaultChecked={data?.form?.Resiko_Thyphoid === '1'}
                            value="1"
                            innerRef={register('resiko_thyphoid') as any}
                          />{' '}
                          <Label check>
                            Thypoid
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="checkbox"
                            name="resiko_hipertensi"
                            className="me-1"
                            onChange={(e) => handleCheckboxChange(e)}
                            defaultChecked={data?.form?.Resiko_Hipertensi === '1'}
                            value="1"
                            innerRef={register('resiko_hipertensi') as any}
                          />{' '}
                          <Label check>
                            Hipertensi
                          </Label>
                        </FormGroup>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="checkbox"
                            name="resiko_kanker"
                            className="me-1"
                            onChange={(e) => handleCheckboxChange(e)}
                            defaultChecked={data?.form?.Resiko_Kanker === '1'}
                            value="1"
                            innerRef={register('resiko_kanker') as any}
                          />{' '}
                          <Label check>
                            Kanker
                          </Label>
                        </FormGroup>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="checkbox"
                            name="resiko_gangguan_ginjal"
                            className="me-1"
                            onChange={(e) => handleCheckboxChange(e)}
                            defaultChecked={data?.form?.Resiko_Gangguan_Ginjal === '1'}
                            value="1"
                            innerRef={register('resiko_gangguan_ginjal') as any}
                          />{' '}
                          <Label check>
                            Gangguan Ginjal
                          </Label>
                        </FormGroup>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="checkbox"
                            name="resiko_gangguan_jantung"
                            className="me-1"
                            onChange={(e) => handleCheckboxChange(e)}
                            defaultChecked={data?.form?.Resiko_Gangguan_Jantung === '1'}
                            value="1"
                            innerRef={register('resiko_gangguan_jantung') as any}
                          />{' '}
                          <Label check>
                            Gangguan Jantung
                          </Label>
                        </FormGroup>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="checkbox"
                            name="resiko_gastritis"
                            className="me-1"
                            onChange={(e) => handleCheckboxChange(e)}
                            defaultChecked={data?.form?.Resiko_Gastritis === '1'}
                            value="1"
                            innerRef={register('resiko_gastritis') as any}
                          />{' '}
                          <Label check>
                            Gasritis
                          </Label>
                        </FormGroup>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="checkbox"
                            name="resiko_lainnya"
                            className="me-1"
                            onChange={(e) => handleCheckboxChange(e)}
                            defaultChecked={data?.form?.Resiko_Lainnya === '1'}
                            value="1"
                            innerRef={register('resiko_lainnya') as any}
                          />{' '}
                          <Label check>
                            Lainnya
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </>
                )
              }

            </Col>
          </Row>

        </CardBody>
      </Card>

      <Card className="border-1">
        <CardBody>
          <FormGroup className="form-group">
            <TextInput name="diagnosa_gizi" label="Diagnosa Gizi" {...{ register, errors }} />
          </FormGroup>
          <FormGroup className="form-group">
            <TextInput name="intervensi" label="Intervensi" {...{ register, errors }} />
          </FormGroup>
          <FormGroup className="form-group">
            <TextInput name="monitoring" label="Monitoring" {...{ register, errors }} />
          </FormGroup>
          <FormGroup className="form-group">
            <TextInput name="evaluasi" label="Evaluasi" {...{ register, errors }} />
          </FormGroup>
        </CardBody>
      </Card>
      <Row>
        <Col>
          <div className="d-flex justify-content-around my-1">
            <Signature
              label="Nutrition"
              type="picker"
              persons={officers}
              initialImage={(data && data.form && data.form.TTD_Petugas_Gizi && data.form.TTD_Petugas_Gizi !== '') ? data.form.TTD_Petugas_Gizi : undefined}
              additionalLabel={(data.form && data.form.Nama_Petugas_Gizi) ? data.form.Nama_Petugas_Gizi : undefined}
              onSigned={(assigner: SignatureModel) => {
                handleDietitianSigned(assigner)
              }} />
            <Input
              type="hidden"
              name="id_petugas_gizi"
              innerRef={register({ required: true })}
              invalid={errors.id_petugas_gizi && true} />
            <Input
              type="hidden"
              name="ttd_petugas_gizi"
              innerRef={register({ required: true })}
              invalid={errors.ttd_petugas_gizi && true} />
          </div>
          <FormGroup className="d-flex mb-0 justify-content-center">
            <SubmitButton
              label="Simpan"
              buttonColor='primary'
              spinnerStyle={{ width: '1rem', height: '1rem' }}
              spinnerColor='light'
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
          <FormGroup className='form-group mt-0' row>
            <div className='d-flex justify-content-center align-items-center'>
              <Label className='me-1'>Terakhir Disimpan: </Label>
              <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
            </div>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  )
}

export default InitialNutritionalAssessmentForm;

