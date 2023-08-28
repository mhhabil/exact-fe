import { Col, Form, FormGroup, Input, Label } from "reactstrap";
import { CreateNursingEarlyWarningRequest, UpdateNursingEarlyWarningRequest } from "../requests";
import { ISignatureModel, SignatureModel } from "@src/shared/signature/models/signature.model";
import { fetchInpatientInitialNursingEarlyWarning, fetchInpatientInitialNursingEarlyWarningPdf, handlePdf } from "../stores/nursing-early-warning-scoring.store";
import {useEffect, useState} from "react";
import { AppRequest } from "@src/shared/request";
import { FindPdfRequest } from "@src/shared/pdf";
import { INursingEarlyWarning } from "../models/nursing-early-warning-scoring.model";
import InpatientInitialNursingEarlyWarningService from "../services";
import { PdfNursingEarlyWarningRequest } from "../requests/pdf-nursing-early-warning.request";
import SelectInput from "@src/shared/input/components/SelectInput";
import { Signature } from "@src/shared/signature/components";
import { SubmitButton } from "@src/shared/button";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useForm } from "react-hook-form";
import { useWarnIfUnsavedChanges } from '@src/shared/alert';


const NursingEarlyWarningScoringForm = (props:{ data: INursingEarlyWarning, defaultEws?: string, action: string, isFirst?: boolean, onCancel: any }) => {
  const { data, defaultEws, action, isFirst, onCancel } = props;
  const dispatch = useAppDispatch();
  const { treatment } = useAppSelector(state => state.patient);
  const { nurses } = useAppSelector(state => state.nurse);
  const [processing, setProcessing] = useState(false);
  const [ewsType, setEwsType] = useState<string | undefined>(data && data.Tipe_Ews ? data.Tipe_Ews : defaultEws);

  const handleProcessing = () => {
    setProcessing(true);
  }

  const { register, handleSubmit, setValue, getValues, errors, formState, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      tanggal_konsul: (data && data.Waktu_Pengkajian) ? data.Waktu_Pengkajian.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      rr: (data && data.Rr) ? data.Rr : '',
      score_rr: (data && data.Rr_Skor) ? data.Rr_Skor : '0',
      nadi: (data && data.Nadi) ? data.Nadi : '',
      score_nadi: (data && data.Nadi_Skor) ? data.Nadi_Skor : '0',
      td: (data && data.Td) ? data.Td : '',
      td_1: data?.Td_1 ?? '',
      score_td: (data && data.Td_Skor) ? data.Td_Skor : '0',
      suhu: (data && data.Suhu_Tubuh) ? data.Suhu_Tubuh : '',
      score_suhu: (data && data.Suhu_Tubuh_Skor) ? data.Suhu_Tubuh_Skor : '0',
      tk: (data && data.Tingkat_Kesadaran) ? data.Tingkat_Kesadaran : '',
      score_tk: (data && data.Tingkat_Kesadaran_Skor) ? data.Tingkat_Kesadaran_Skor : '0',
      perilaku: data?.Perilaku ?? '',
      score_perilaku: data?.Perilaku_Skor ?? '0',
      kardiovaskular: data?.Kardiovaskular ?? '',
      score_kardiovaskular: data?.Kardiovaskular_Skor ?? '0',
      total_skor: (data && data.Total_Skor) ? data.Total_Skor : undefined,
      keterangan: (data && data.Keterangan) ? data.Keterangan : undefined,
      tipe_ews: (data && data.Tipe_Ews) ? data.Tipe_Ews : '',
      ttd_perawat: data && data.TTD_Perawat ? data.TTD_Perawat : '',
      id_perawat: data && data.ID_Perawat ? data.ID_Perawat : '',
    },
  })

  useEffect(() => {
    if (ewsType && ewsType === '2') {
      const scoreRr = parseInt(data.Rr_Skor ?? '0');
      const scoreBehavior = parseInt(data?.Perilaku_Skor ?? '0');
      const scoreCardio = parseInt(data?.Kardiovaskular_Skor ?? '0');
      const total = scoreRr + scoreBehavior + scoreCardio;

      if (total >= 0 && total <= 2) {
        setValue('keterangan', 'Hijau');
      } else if (total >= 3 && total <= 4) {
        setValue('keterangan', 'Kuning');
      } else if (total === 5) {
        setValue('keterangan', 'Orange');
      } else if (total >= 6) {
        setValue('keterangan', 'Merah');
      }

      setValue('total_skor', total);
    } 

  }, [ewsType])

  const { isDirty } = formState;

  useWarnIfUnsavedChanges(isDirty, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  const totalScore = () => {
    const scoreRR = parseInt(getValues('score_rr') || '0');
    const scoreTK = parseInt(getValues('score_tk') || '0');
    const scoreNadi = parseInt(getValues('score_nadi') || '0');
    const scoreTD = parseInt(getValues('score_td') || '0');
    const scoreSuhu = parseInt(getValues('score_suhu') || '0');
    const total = scoreRR + scoreTK + scoreNadi + scoreTD + scoreSuhu;

    if (total >= 0 && total <= 1) {
      setValue('keterangan', 'Pasien dalam kondisi stabil, observasi 8-12 jam');
    } else if (total >= 2 && total <= 3) {
      setValue('keterangan', 'Pengkajian ulang harus dilakukan perawat pelaksana setiap 2-6 jam sekali');
    } else if (total >= 4 && total <= 5) {
      setValue('keterangan', 'Pengkajian ulang harus dilakukan perawat pelaksana setiap 1 jam dan diketahui oleh dokter jaga. Dokter jaga harus melaporkan ke DPJP dan memerikan instruksi tata laksana selanjutnya');
    } else if (total >= 6) {
      setValue('keterangan', 'Aktifkan Code Blue');
    }

    setValue('total_skor', total);
  }

  const totalScoreChildren = () => {
    const scoreRr = parseInt(getValues('score_rr'));
    const scoreBehavior = parseInt(getValues('score_perilaku'));
    const scoreCardio = parseInt(getValues('score_kardiovaskular'));
    const total = scoreRr + scoreBehavior + scoreCardio;

    if (total >= 0 && total <= 2) {
      setValue('keterangan', 'Hijau');
    } else if (total >= 3 && total <= 4) {
      setValue('keterangan', 'Kuning');
    } else if (total === 5) {
      setValue('keterangan', 'Orange');
    } else if (total >= 6) {
      setValue('keterangan', 'Merah');
    }

    setValue('total_skor', total);
  }


  const scoreRR = (value:number) => {
    if (value >= 8 && value <= 8) {
      setValue('score_rr', 1);
    } else {
      if (value >= 0 && value < 8) {
        setValue('score_rr', 2);
      } else if (value >= 9 && value <= 17) {
        setValue('score_rr', 0);
      } else if (value >= 18 && value <= 20) {
        setValue('score_rr', 1);
      } else if (value >= 21 && value <= 29) {
        setValue('score_rr', 2);
      } else {
        setValue('score_rr', 3);
      }
    }

    totalScore();
  }

  const scoreTK = (values: string) => {
    const value = parseInt(values);
    if (value === 1) {
      setValue('score_tk', 3);
    } else if (value === 2) {
      setValue('score_tk', 2);
    } else if (value === 3) {
      setValue('score_tk', 1);
    } else if (value === 4) {
      setValue('score_tk', 0);
    } else if (value  === 5) {
      setValue('score_tk', 1);
    } else if (value === 6) {
      setValue('score_tk', 2);
    }
    totalScore();
  }

  const scoreNadi = (value: number) => {
    if (value >= 0 && value < 40) {
      setValue('score_nadi', 2);
    } else if (value >= 40 && value <= 50) {
      setValue('score_nadi', 1);
    } else if (value >= 51 && value <= 100) {
      setValue('score_nadi', 0);
    } else if (value >= 101 && value <= 110) {
      setValue('score_nadi', 1);
    } else if (value >= 111 && value < 130) {
      setValue('score_nadi', 2);
    } else if (value >= 130) {
      setValue('score_nadi', 3);
    }
    totalScore();
  }

  const scoreTD = (value: number) => {
    if (value >= 0 && value < 70) {
      setValue('score_td', 3);
    } else  if (value >= 71 && value < 80) {
      setValue('score_td', 2);
    } else if (value >= 80 && value <= 100) {
      setValue('score_td', 1);
    } else if (value >= 101 && value <= 159) {
      setValue('score_td', 0);
    } else if (value >= 160 && value <= 199) {
      setValue('score_td', 1);
    } else if (value >= 200 && value <= 220) {
      setValue('score_td', 2);
    } else if (value >= 220) {
      setValue('score_td', 3);
    }
    totalScore();
  }

  const scoreSuhu = (value: number) => {
    if (value >= 0 && value < 35) {
      setValue('score_suhu', 2);
    } else if (value >= 35.5 && value <= 36) {
      setValue('score_suhu', 1);
    } else if (value >= 36.5 && value <= 38) {
      setValue('score_suhu', 0);
    } else if (value >= 38.05 && value < 38.5) {
      setValue('score_suhu', 1);
    } else if (value >= 38.5) {
      setValue('score_suhu', 2);
    }
    totalScore();
  }

  const handleNurseSigned = (assigner: ISignatureModel) => {
    setValue('ttd_perawat', assigner.Signature);
    setValue('id_perawat', assigner.ID_Karyawan);
  }

  const handleSubmitForm = (value: any) => {
    if (!treatment) {
      return;
    }
    handleProcessing()
    reset(value)
    const appRequest = AppRequest.createFromStore(treatment);
    dispatch(handlePdf(undefined));
    if (action === 'create') {
      const params = CreateNursingEarlyWarningRequest.createFromJson(
        {
          ...value,
          ...appRequest,
        },
      )
      InpatientInitialNursingEarlyWarningService().create(params).then(() => {
        InpatientInitialNursingEarlyWarningService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            InpatientInitialNursingEarlyWarningService().pdfv3(PdfNursingEarlyWarningRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
              .then(() => {
                setProcessing(false);
                dispatch(fetchInpatientInitialNursingEarlyWarningPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pengkajian-newss' })));
              })
          })
        onCancel();
        dispatch(fetchInpatientInitialNursingEarlyWarning(appRequest));
      });
    } else {
      const params = UpdateNursingEarlyWarningRequest.createFromJson(
        {
          ...value,
          ...appRequest,
          id: data.ID,
        },
      )
      InpatientInitialNursingEarlyWarningService().update(params).then(() => {
        InpatientInitialNursingEarlyWarningService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            InpatientInitialNursingEarlyWarningService().pdfv3(PdfNursingEarlyWarningRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
              .then(() => {
                setProcessing(false);
                dispatch(fetchInpatientInitialNursingEarlyWarningPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pengkajian-newss' })));
              })
          })
        onCancel();
        dispatch(fetchInpatientInitialNursingEarlyWarning(appRequest));
      });
    }
  }

  const handleEwsChange = (e: any) => {
    setEwsType(e.target.value);
  }

  const options = [
    {
      value: "",
      label: "Pilih",
    },
    {
      value: "1",
      label: "Coma",
    },
    {
      value: "2",
      label: "Sopor",
    },
    {
      value: "3",
      label: "Somnolen",
    },
    {
      value: "4",
      label: "Composmentis",
    },
    {
      value: "5",
      label: "Apatis",
    },
    {
      value: "6",
      label: "Delirium",
    },
  ];


  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        {
          action === 'create' && isFirst && (
            <FormGroup row className='app-form-check'>
              <Col md='3'>
                <Input
                  type="radio"
                  name="tipe_ews"
                  className="me-1"
                  onChange={(e) => handleEwsChange(e)}
                  defaultChecked={!!(defaultEws && defaultEws === '1')}
                  value="1"
                  required
                  innerRef={register({ required: true })}
                />{' '}
                <Label check>Dewasa</Label>
              </Col>
              <Col md='3'>
                <Input
                  type="radio"
                  name="tipe_ews"
                  className="me-1"
                  onChange={(e) => handleEwsChange(e)}
                  defaultChecked={!!(defaultEws && defaultEws === '2')}
                  value="2"
                  required
                  innerRef={register({ required: true })}
                />{' '}
                <Label check>Anak-anak</Label>
              </Col>
            </FormGroup>
          )
        }
        {
          ewsType && ewsType === '1' && (
            <>
              <FormGroup row className="align-items-center mt-2">
                <Col md='1' className="align-items-center">
                  <Label>Tanggal Periksa*</Label>
                </Col>
                <Col md='4'>
                  <Input
                    type="datetime-local"
                    id='tanggal_konsul'
                    name='tanggal_konsul'
                    innerRef={register({ required: true })}
                    invalid={errors['tanggal_konsul'] && true}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="align-items-center mt-2">
                <Col md='1' className="align-items-center">
                  <Label>RR (x/menit)</Label>
                </Col>
                <Col md='4'>
                  <Input
                    type="number"
                    id='RR_Menit'
                    name='rr'
                    innerRef={register({ required: true })}
                    invalid={errors['rr'] && true}
                    onChange={(e:any) => {
                      scoreRR(e.target.value)
                      totalScore()
                    }}
                  />
                </Col>
                <Col md='2' className="text-end">
                  <Label>Score</Label>
                </Col>
                <Col md='4'>
                  <Input
                    type="number"
                    readOnly
                    id='score_rr'
                    defaultValue='0'
                    name='score_rr'
                    innerRef={register({ required: true })}
                    invalid={errors['score_rr'] && true}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="align-items-center mt-2">
                <Col md='1' className="align-items-center">
                  <Label>Nadi (x/menit)</Label>
                </Col>
                <Col md='4'>
                  <Input
                    type="number"
                    id='nadi'
                    name='nadi'
                    innerRef={register({ required: true })}
                    invalid={errors['nadi'] && true}
                    onChange={(e:any) => scoreNadi(e.target.value)}
                  />
                </Col>
                <Col md='2' className="text-end">
                  <Label>Score</Label>
                </Col>
                <Col md='4'>
                  <Input
                    type="number"
                    readOnly
                    id='score_nadi'
                    defaultValue='0'
                    name='score_nadi'
                    innerRef={register({ required: true })}
                    invalid={errors['score_nadi'] && true}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="align-items-center mt-2">
                <Col md='1' className="align-items-center">
                  <Label>TD</Label>
                </Col>
                <Col md='1'>
                  <Input
                    type="number"
                    id='td'
                    name='td'
                    innerRef={register({ required: true })}
                    invalid={errors['td'] && true}
                    onChange={(e:any) => scoreTD(e.target.value)}
                  />
                </Col>/
                <Col md='1'>
                  <Input
                    type="number"
                    id='td-1'
                    name='td_1'
                    innerRef={register({ required: true })}
                    invalid={errors['td_1'] && true}
                  />
                </Col>
                <Col md='4' className="text-end" style={{ marginLeft: '-5px' }}>
                  <Label>Score</Label>
                </Col>
                <Col md='4'>
                  <Input
                    type="number"
                    readOnly
                    id='score_td'
                    defaultValue='0'
                    name='score_td'
                    innerRef={register({ required: true })}
                    invalid={errors['score_td'] && true}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="align-items-center mt-2">
                <Col md='1' className="align-items-center">
                  <Label>Suhu Tubuh</Label>
                </Col>
                <Col md='4'>
                  <Input
                    type="number"
                    id='suhu'
                    name='suhu'
                    placeholder="36.0" step="0.01" min="0" max="50"
                    innerRef={register({ required: true })}
                    invalid={errors['suhu'] && true}
                    onChange={(e:any) => scoreSuhu(e.target.value)}
                  />
                </Col>
                <Col md='2' className="text-end">
                  <Label>Score</Label>
                </Col>
                <Col md='4'>
                  <Input
                    type="number"
                    readOnly
                    id='score_suhu'
                    defaultValue='0'
                    name='score_suhu'
                    innerRef={register({ required: true })}
                    invalid={errors['score_suhu'] && true}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="align-items-center mt-2">
                <Col md='1' className="align-items-center">
                  <Label>Tk. Kesadaran</Label>
                </Col>
                <Col md='4'>
                  <SelectInput
                    name="tk"
                    onChange={(event: any) => scoreTK(event.target.value)}
                    defaultValue={getValues('tk')}
                    {...{ register, errors }}>
                    <option value="" disabled>--</option>
                    {options && options.map((option: any, key) => {
                      return <option key={key} value={option.value}>{option.label}</option>;
                    })}
                  </SelectInput>
                </Col>
                <Col md='2' className="text-end">
                  <Label>Score</Label>
                </Col>
                <Col md='4'>
                  <Input
                    type="text"
                    readOnly
                    id='score_tk'
                    defaultValue='0'
                    name='score_tk'
                    innerRef={register({ required: true })}
                    invalid={errors['score_tk'] && true}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="align-items-center mt-2">
                <Col md='1' className="align-items-center">
                  <Label>Total Skor</Label>
                </Col>
                <Col md='4'>
                  <Input
                    type="text"
                    readOnly
                    defaultValue={0}
                    id='total_skor'
                    name='total_skor'
                    innerRef={register({ required: true })}
                    invalid={errors['total_skor'] && true}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="d-flex mb-0 justify-content-center">
                <Input
                  type="textarea"
                  name="keterangan"
                  readOnly
                  id="Keterangan"
                  innerRef={register({ required: true })}
                  invalid={errors['total_skor'] && true}
                />
              </FormGroup>
              <FormGroup className="d-flex mb-0 justify-content-center">
                <Signature
                  label="Perawat"
                  additionalLabel={(data?.Nama_Perawat && data?.Nama_Perawat !== '') ? data?.Nama_Perawat : undefined}
                  type="picker"
                  initialImage={(data?.TTD_Perawat && data?.TTD_Perawat !== '' && !data?.TTD_Perawat.includes('null')) ? data?.TTD_Perawat : undefined}
                  persons={nurses}
                  onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)}
                />
                <Input
                  type="hidden"
                  name="ttd_perawat"
                  innerRef={register()}
                />
                <Input
                  type="hidden"
                  name="id_perawat"
                  innerRef={register()}
                />
              </FormGroup>
              <FormGroup className="d-flex mb-0 justify-content-center">
                <SubmitButton
                  buttonColor='primary'
                  spinnerColor='light'
                  processing={processing}
                  label="Simpan"
                  spinnerStyle={{ width: '1rem', height: '1rem' }}
                />
              </FormGroup>
            </>
          )
        }
        {
          ewsType && ewsType === '2' && (
            <>
              <FormGroup row className="align-items-center mt-2">
                <Col md='2' className="align-items-center">
                  <Label>Tanggal Periksa*</Label>
                </Col>
                <Col md='4'>
                  <Input
                    type="datetime-local"
                    id='tanggal_konsul'
                    name='tanggal_konsul'
                    innerRef={register({ required: true })}
                    invalid={errors['tanggal_konsul'] && true}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="align-items-center mt-2">
                <Col md='2' className="align-items-center">
                  <Label>Perilaku</Label>
                </Col>
                <Col md='4'>
                  <Input
                    type="text"
                    id='perilaku'
                    name='perilaku'
                    innerRef={register({ required: false })}
                    invalid={errors['perilaku'] && true}
                    onChange={(e: any) => {
                      //handleBehaviorChange(e)
                      //totalScoreChildren()
                    }}
                  >

                  </Input>
                </Col>
                <Col md='2' className="text-end">
                  <Label>Score</Label>
                </Col>
                <Col md='4'>
                  <Input
                    type="number"
                    id='score_perilaku'
                    name='score_perilaku'
                    innerRef={register({ required: true })}
                    invalid={errors['score_perilaku'] && true}
                    onChange={(e: any) => {
                      totalScoreChildren()
                    }}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="align-items-center mt-2">
                <Col md='2' className="align-items-center">
                  <Label>Kardiovaskuler</Label>
                </Col>
                <Col md='4'>
                  <Input
                    type="text"
                    id='kardiovaskular'
                    name='kardiovaskular'
                    innerRef={register({ required: false })}
                    invalid={errors['kardiovaskular'] && true}
                    onChange={(e: any) => {
                      //handleCardiovascularChange(e)
                      //totalScoreChildren()
                    }}
                  >
                  </Input>
                </Col>
                <Col md='2' className="text-end">
                  <Label>Score</Label>
                </Col>
                <Col md='4'>
                  <Input
                    type="number"
                    id='score_kardiovaskuler'
                    defaultValue='0'
                    name='score_kardiovaskular'
                    innerRef={register({ required: true })}
                    invalid={errors['score_kardiovaskular'] && true}
                    onChange={(e: any) => {
                      totalScoreChildren()
                    }}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="align-items-center mt-2">
                <Col md='2' className="align-items-center">
                  <Label>Respirasi</Label>
                </Col>
                <Col md='4'>
                  <Input
                    type="text"
                    id='respirasi'
                    name='rr'
                    innerRef={register({ required: false })}
                    invalid={errors['rr'] && true}
                    onChange={(e: any) => {
                      //handleRespirationChange(e)
                      //totalScoreChildren()
                    }}
                  >
                  </Input>
                </Col>
                <Col md='2' className="text-end">
                  <Label>Score</Label>
                </Col>
                <Col md='4'>
                  <Input
                    type="number"
                    id='score_rr'
                    name='score_rr'
                    innerRef={register({ required: true })}
                    invalid={errors['score_rr'] && true}
                    onChange={(e: any) => {
                      totalScoreChildren()
                    }}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="align-items-center mt-2">
                <Col md='2' className="align-items-center">
                  <Label>Total Skor</Label>
                </Col>
                <Col md='4'>
                  <Input
                    type="number"
                    defaultValue={0}
                    id='total_skor'
                    name='total_skor'
                    innerRef={register({ required: true })}
                    invalid={errors['total_skor'] && true}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="d-flex mb-0 justify-content-center">
                <Input
                  type="textarea"
                  name="keterangan"
                  readOnly
                  id="Keterangan"
                  innerRef={register({ required: true })}
                  invalid={errors['total_skor'] && true}
                />
              </FormGroup>
              <FormGroup className="d-flex mb-0 justify-content-center">
                <Signature
                  label="Perawat"
                  additionalLabel={(data?.Nama_Perawat && data?.Nama_Perawat !== '') ? data?.Nama_Perawat : undefined}
                  type="picker"
                  initialImage={(data?.TTD_Perawat && data?.TTD_Perawat !== '' && !data?.TTD_Perawat.includes('null')) ? data?.TTD_Perawat : undefined}
                  persons={nurses}
                  onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)}
                />
                <Input
                  type="hidden"
                  name="ttd_perawat"
                  innerRef={register()}
                />
                <Input
                  type="hidden"
                  name="id_perawat"
                  innerRef={register()}
                />
              </FormGroup>
              <FormGroup className="d-flex mb-0 justify-content-center">
                <SubmitButton
                  buttonColor='primary'
                  spinnerColor='light'
                  processing={processing}
                  label="Simpan"
                  spinnerStyle={{ width: '1rem', height: '1rem' }}
                />
              </FormGroup>
            </>
          )
        }
      </Form>

    </>)

}

export default NursingEarlyWarningScoringForm
