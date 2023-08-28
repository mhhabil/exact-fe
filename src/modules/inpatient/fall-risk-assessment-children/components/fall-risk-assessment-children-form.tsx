import {FallRiskAssessementChildrenItemModel} from '@modules/inpatient/fall-risk-assessment-children/models/fall-risk-assessment-children-model';
import {useAppSelector} from '@hooks/useAppSelector';
import {useRouter} from 'next/router';
import {useAppDispatch} from '@hooks/useAppDispatch';
import Image from 'next/image';
import {Fragment, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import {SignatureModel} from '@shared/signature/models/signature.model';
import {AppRequest} from '@shared/request';
import {
  fetchFallRiskAssessementChildren,
  fetchFallRiskAssessementChildrenItem,
  fetchFallRiskAssessementChildrenPdf,
  handleFallRiskAssessementChildrenItem,
  handlePdf,
} from '@modules/inpatient/fall-risk-assessment-children/stores/fall-risk-assessment-children.store';
import { FindPdfRequest } from '@shared/pdf';
import {
  CreateFallRiskAssessementChildrenRequest,
  ICreateFallRiskAssessementChildrenRequest,
} from '@modules/inpatient/fall-risk-assessment-children/requests/create-fall-risk-assessement-children.request';
import FallRiskAssessementChildrenService from '@modules/inpatient/fall-risk-assessment-children/services';
import {UpdateFallRiskAssessementChildrenRequest} from '@modules/inpatient/fall-risk-assessment-children/requests/update-fall-risk-assessement-children.request';
import {Col, Form, FormFeedback, FormGroup, Input, Label} from 'reactstrap';
import {Signature} from '@shared/signature/components';
import {SubmitButton} from '@shared/button';
import { ErrorMessage } from '@hookform/error-message';
import { PdfFallRiskAssessementChildrenRequest } from '@modules/inpatient/fall-risk-assessment-children/requests/pdf-fall-risk-assessement-children.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';
import dataTimeAssessement from '../const/dataTimeAssessement';


const FallRiskAssessementChildrenForm = (props: { item?: FallRiskAssessementChildrenItemModel | undefined, itemButton: any, onSuccessSubmit: any, unit: string }) => {

  const { officers } = useAppSelector(state => state.officer);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const { nurses } = useAppSelector(state => state.nurse);
  const { item, itemButton, onSuccessSubmit, unit } = props;
  const [processing, setProcessing] = useState(false);
  const { treatment } = useAppSelector(state => state.patient);


  const [showUsia, setShowUsia] = useState<any>((item &&  item.Usia_Radio) ? item.Usia_Radio : '');
  const [showJenisKelamin, setShowJenisKelamin] = useState<any>((item &&  item.Jenis_Kelamin_Radio) ? item.Jenis_Kelamin_Radio : '');
  const [showDiagnosa, setShowDiagnosa] = useState<any>((item &&  item.Diagnosa_Radio) ? item.Diagnosa_Radio : '');
  const [showGangguanKognitif, setShowGangguanKognitif] = useState<any>((item &&  item.Gangguan_Kognitif_Radio) ? item.Gangguan_Kognitif_Radio : '');
  const [showFaktorLingkungan, setShowFaktorLingkungan] = useState<any>((item &&  item.Faktor_Lingkungan_Radio) ? item.Faktor_Lingkungan_Radio : '');
  const [showResponOperasi, setShowResponOperasi] = useState<any>((item &&  item.Respon_Operasi_Radio) ? item.Respon_Operasi_Radio : '');
  const [showPenggunaanObat, setShowPenggunaanObat] = useState<any>((item &&  item.Penggunaan_Obat_Radio) ? item.Penggunaan_Obat_Radio : '');


  const getTimes = (times: string) => {
    if (dataTimeAssessement && times) {
      const selectedTimes = dataTimeAssessement.find((val: any) => val.id === times)
      if (selectedTimes) {
        return selectedTimes.id;
      }
    } else {
      return '';
    }
  }

  useEffect(() => {

    let totalUsia = 0;
    let totalJenisKelamin = 0;
    let totalDiagnosa = 0;
    let totalGangguanKognitif = 0;
    let totalFaktorLingkungan = 0;
    let totalResponOperasi = 0;
    let totalPenggunaanObat = 0;

    let totalScore = 0;

    if (showUsia !== "") {
      if (showUsia === '4') {
        setValue('usia', '4');
        totalUsia = 4;
      } else if (showUsia === '3') {
        setValue('usia', '3');
        totalUsia = 3;
      } else if (showUsia === '2') {
        setValue('usia', '2');
        totalUsia = 2;
      } else if (showUsia === '1') {
        setValue('usia', '1');
        totalUsia = 1;
      }
    }

    if (showJenisKelamin !== "") {
      if (showJenisKelamin === '2') {
        setValue('jenis_kelamin', '2');
        totalJenisKelamin = 2;
      } else if (showJenisKelamin === '1') {
        setValue('jenis_kelamin', '1');
        totalJenisKelamin = 1;
      }
    }
    
 
    if (showDiagnosa !== "") {
      if (showDiagnosa === '4') {
        setValue('diagnosa', '4');
        totalDiagnosa = 4;
      } else if (showDiagnosa === '3') {
        setValue('diagnosa', '3');
        totalDiagnosa = 3;
      } else if (showDiagnosa === '2') {
        setValue('diagnosa', '2');
        totalDiagnosa = 2;
      } else if (showDiagnosa === '1') {
        setValue('diagnosa', '1');
        totalDiagnosa = 1;
      }
    }

    if (showGangguanKognitif !== "") {
      if (showGangguanKognitif === '3') {
        setValue('gangguan_kognitif', '3');
        totalGangguanKognitif = 3;
      } else if (showGangguanKognitif === '2') {
        setValue('gangguan_kognitif', '2');
        totalGangguanKognitif = 2;
      } else if (showGangguanKognitif === '1') {
        setValue('gangguan_kognitif', '1');
        totalGangguanKognitif = 1;
      }
    }

    if (showFaktorLingkungan !== "") {
      if (showFaktorLingkungan === '3') {
        setValue('faktor_lingkungan', '3');
        totalFaktorLingkungan = 3;
      } else if (showFaktorLingkungan === '2') {
        setValue('faktor_lingkungan', '2');
        totalFaktorLingkungan = 2;
      } else if (showFaktorLingkungan === '1') {
        setValue('faktor_lingkungan', '1');
        totalFaktorLingkungan = 1;
      }
    }
  
    if (showResponOperasi !== "") {
      if (showResponOperasi === '3') {
        setValue('respon_operasi', '3');
        totalResponOperasi = 3;
      } else if (showResponOperasi === '2') {
        setValue('respon_operasi', '2');
        totalResponOperasi = 2;
      } else if (showResponOperasi === '1') {
        setValue('respon_operasi', '1');
        totalResponOperasi = 1;
      }
    }

    if (showPenggunaanObat !== "") {
      if (showPenggunaanObat === '3') {
        setValue('penggunaan_obat', '3');
        totalPenggunaanObat = 3;
      } else if (showPenggunaanObat === '2') {
        setValue('penggunaan_obat', '2');
        totalPenggunaanObat = 2;
      } else if (showPenggunaanObat === '1') {
        setValue('penggunaan_obat', '1');
        totalPenggunaanObat = 1;
      }
    }


    totalScore = totalUsia + totalJenisKelamin + totalDiagnosa + totalGangguanKognitif + totalFaktorLingkungan + totalResponOperasi + totalPenggunaanObat;
    setValue('total_skor', totalScore);

    if (totalScore <= 11) {
      const strText = "1. Beritahukan kepada orang tua / penjaga pasien untuk tidak meninggalkan pasien sendirian \r\n" +
                "2. Pastikan rem tempat tidur terkunci \r\n" +
                "3. Pastikan palang tempat tidur terpasang pada semua sisi \r\n" +
                "4. Pastikan bel dan semua kebutuhan pasien terjangkau \r\n" +
                "5. Pasang penanda resiko jatuh dengan memakai gelang berwarna kuning";

      setValue('resiko_jatuh', 'Resiko Rendah');
      setValue('resiko_jatuh_keterangan', strText);

    } else  {
      const strText = "1. Beritahukan kepada orang tua / penjaga pasien untuk tidak meninggalkan pasien sendirian \r\n" +
                "2. Pastikan rem tempat tidur terkunci \r\n" +
                "3. Pastikan palang tempat tidur terpasang pada semua sisi \r\n" +
                "4. Pastikan bel dan semua kebutuhan pasien terjangkau \r\n" +
                "5. Pasang penanda resiko jatuh dengan memakai gelang berwarna kuning \r\n" +
                "6. Cepat menanggapi bel atau keluhan pasien";

      setValue('resiko_jatuh', 'Resiko Tinggi');
      setValue('resiko_jatuh_keterangan', strText);
    }

  }, [showUsia, showJenisKelamin, showDiagnosa, showGangguanKognitif, showFaktorLingkungan, showFaktorLingkungan, showResponOperasi, showPenggunaanObat])

  const convertDatetimeToUTC = (date?: any) => {
    const d = date ? new Date(date) : new Date();
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}T${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }

  const { register, handleSubmit, errors, getValues, setValue } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: yupResolver(CreateFallRiskAssessementChildrenRequest.scheme()),
    defaultValues: {
      waktu_pengkajian : item?.Waktu_Pengkajian ? DateTimeConverter.convertToNormalDatetime(item?.Waktu_Pengkajian) : convertDatetimeToUTC(),
      usia  :   item?.Usia,
      jenis_kelamin  :   item?.Jenis_Kelamin,
      diagnosa  :   item?.Diagnosa,
      gangguan_kognitif  :   item?.Gangguan_Kognitif,
      faktor_lingkungan  :   item?.Faktor_Lingkungan,
      respon_operasi  :   item?.Respon_Operasi,
      penggunaan_obat  :   item?.Penggunaan_Obat,
      keterangan_waktu_pengkajian  :   item?.Keterangan_Waktu_Pengkajian_Id,
      total_skor  :   item?.Total_Skor,
      resiko_jatuh  :   item?.Resiko_Jatuh,
      resiko_jatuh_keterangan  :   item?.Resiko_Jatuh_Keterangan,
      ttd_petugas  :   item?.TTD_Petugas,
      petugas  :   item?.ID_Petugas,
      unit_pengkaji  :   item?.Unit_Pengkaji,
      usia_radio  :   item?.Usia_Radio,
      jenis_kelamin_radio  :   item?.Jenis_Kelamin_Radio,
      diagnosa_radio  :   item?.Diagnosa_Radio,
      gangguan_kognitif_radio  :   item?.Gangguan_Kognitif_Radio,
      faktor_lingkungan_radio  :   item?.Faktor_Lingkungan_Radio,
      respon_operasi_radio  :   item?.Respon_Operasi_Radio,
      penggunaan_obat_radio  :   item?.Penggunaan_Obat_Radio,
      ruangan  :   item?.Ruangan,
      lembar :  item?.Lembar,
    },
  });

  const handleTandaTangan = (image: SignatureModel) => {
    setValue("ttd_petugas", image.Signature);
    setValue("petugas", image.ID_Karyawan);
  };


  const handleSubmitForm = (value: ICreateFallRiskAssessementChildrenRequest) => {
    if (!treatment) {
      return false;
    }
    setProcessing(true)
    const appRequest = AppRequest.createFromStore(treatment);
    dispatch(handlePdf(undefined));
    if (!item) {
      const params = CreateFallRiskAssessementChildrenRequest.createFromJson({...value, ...appRequest, unit });
      FallRiskAssessementChildrenService().create(params)
        .then(() => {
          setProcessing(false);
          FallRiskAssessementChildrenService().show(appRequest)
            .then((resp) => {
              const { data } = resp.data;
              const params = PdfFallRiskAssessementChildrenRequest.createPdfRequest(data, appRequest.emr_id, treatment);
              FallRiskAssessementChildrenService().pdfv3(params)
                .then(() => {
                  if (onSuccessSubmit) {
                    onSuccessSubmit();
                    dispatch(fetchFallRiskAssessementChildrenPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pengkajian-risiko-jatuh-anak' })));
                    setProcessing(false);
                    return true;
                  }
                });
            });
          if (onSuccessSubmit) {
            onSuccessSubmit();
          }
        });
    } else {
      const params = UpdateFallRiskAssessementChildrenRequest.createFromJson({...value, ...appRequest, ID: item.ID, unit, emr_id: appRequest.emr_id });
      FallRiskAssessementChildrenService().update(params)
        .then(() => {
          setProcessing(false);
          FallRiskAssessementChildrenService().show(appRequest)
            .then((resp) => {
              const { data } = resp.data;
              const params = PdfFallRiskAssessementChildrenRequest.createPdfRequest(data, appRequest.emr_id, treatment);
              FallRiskAssessementChildrenService().pdfv3(params)
                .then(() => {
                  if (onSuccessSubmit) {
                    onSuccessSubmit();
                    dispatch(fetchFallRiskAssessementChildrenPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pengkajian-risiko-jatuh-anak' })));
                    setProcessing(false);
                    return true;
                  }
                });
            });
          if (onSuccessSubmit) {
            onSuccessSubmit();
          }
        });
    }
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>

        <FormGroup className="form-group" row>
          <Label md="2">Waktu Pengkajian</Label>
          <Col>
            <Input
              type="datetime-local"
              id="waktu_pengkajian"
              name="waktu_pengkajian"
              innerRef={register({ required: true })}
              invalid={errors.waktu_pengkajian && true} 
              readOnly={(itemButton === "view")}/>
          </Col>
          <Col>
            <Label></Label>
          </Col>
          {errors && errors.waktu_pengkajian && <FormFeedback>{errors.waktu_pengkajian.message}</FormFeedback>}
        </FormGroup>

        <FormGroup className="form-group" row>
          <Label md="2">Ruangan</Label>
          <Col>
            <Input
              style={{ marginTop: '10px' }}
              className="mb-1"
              type="text"
              id="ruangan"
              name="ruangan"
              innerRef={register({ required: false })}
              invalid={errors.ruangan && true}
              readOnly={(itemButton === "view")}
            />
          </Col>
          <Col>
            <Label></Label>
          </Col>
          {errors && errors.ruangan && <FormFeedback>{errors.ruangan.message}</FormFeedback>}
        </FormGroup>

        <FormGroup className="form-group" row>
          <Label md="2">Lembar</Label>
          <Col>
            <Input
              style={{ marginTop: '10px' }}
              className="mb-1"
              type="text"
              id="lembar"
              name="lembar"
              innerRef={register({ required: false })}
              invalid={errors.lembar && true}
              readOnly={(itemButton === "view")}
            />
          </Col>
          <Col>
            <Label></Label>
          </Col>
          {errors && errors.lembar && <FormFeedback>{errors.lembar.message}</FormFeedback>}
        </FormGroup>


        <Col md="12">Item Penilaian : </Col>
        <hr style={{ borderTop: "2px dashed black" }} />
        <FormGroup className="form-group" row>
          <Col md="9">
            <Col md="4">
                1. Usia  :
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="usia_radio"
                value='4'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowUsia('4');
                  }
                }}
                defaultChecked={!!(item && item?.Usia_Radio  === '4')}
                innerRef={register({ required: false })}
              />
              <Label>Dibawah 3 Tahun</Label>
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="usia_radio"
                value='3'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowUsia('3');
                  }
                }}
                defaultChecked={!!(item && item?.Usia_Radio  === '3')}
                innerRef={register({ required: false })}
              />
              <Label>3 - 7 Tahun </Label>
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="usia_radio"
                value='2'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowUsia('2');
                  }
                }}
                defaultChecked={!!(item && item?.Usia_Radio  === '2')}
                innerRef={register({ required: false })}
              />
              <Label>7 - 13 Tahun </Label>
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="usia_radio"
                value='1'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowUsia('1');
                  }
                }}
                defaultChecked={!!(item && item?.Usia_Radio  === '1')}
                innerRef={register({ required: false })}
              />
              <Label> Diatas 18 Tahun </Label>
            </Col>
          </Col>
          <Col md="3">
          Skor :
            <Input
              style={{ marginTop: '10px' }}
              className="mb-1"
              type="text"
              id="usia"
              name="usia"
              innerRef={register({ required: false })}
              invalid={errors.usia && true}
              readOnly
            />
          </Col>
        </FormGroup>
        <hr style={{ borderTop: "2px dashed black" }} />

        <FormGroup className="form-group" row>
          <Col md="9">
            <Col md="4">
                2. Jenis Kelamin  :
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="jenis_kelamin_radio"
                value='2'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowJenisKelamin('2');
                  }
                }}
                defaultChecked={!!(item && item?.Jenis_Kelamin_Radio  === '2')}
                innerRef={register({ required: false })}
              />
              <Label>Laki-laki</Label>
            </Col>
            <Input
              type="radio"
              className="me-1"
              name="jenis_kelamin_radio"
              value='1'
              disabled={(itemButton === "view")}
              onChange={(e) => {
                if (e.target.checked) {
                  setShowJenisKelamin('1');
                }
              }}
              defaultChecked={!!(item && item?.Jenis_Kelamin_Radio  === '1')}
              innerRef={register({ required: false })}
            />
            <Label>Perempuan</Label>
          </Col>

          <Col md="3">
          Skor :
            <Input
              style={{ marginTop: '10px' }}
              className="mb-1"
              type="text"
              id="jenis_kelamin"
              name="jenis_kelamin"
              innerRef={register({ required: false })}
              invalid={errors.jenis_kelamin && true}
              readOnly
            />
          </Col>
        </FormGroup>
        <hr style={{ borderTop: "2px dashed black" }} />

        <FormGroup className="form-group" row>
          <Col md="9">
            <Col md="4">
                3. Diagnosa  :
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="diagnosa_radio"
                value='4'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowDiagnosa('4');
                  }
                }}
                defaultChecked={!!(item && item?.Diagnosa_Radio  === '4')}
                innerRef={register({ required: false })}
              />
              <Label>Kelainan Neurologi</Label>
            </Col>
            <Col md="12">
              <Input
                type="radio"
                className="me-1"
                name="diagnosa_radio"
                value='3'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowDiagnosa('3');
                  }
                }}
                defaultChecked={!!(item && item?.Diagnosa_Radio  === '3')}
                innerRef={register({ required: false })}
              />
              <Label>Perubahan Dalam Oksigenasi (masalah saluran nafas,dehidrasi,anemia,anoreksia,sinkop/pusing dll)</Label>
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="diagnosa_radio"
                value='2'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowDiagnosa('2');
                  }
                }}
                defaultChecked={!!(item && item?.Diagnosa_Radio  === '2')}
                innerRef={register({ required: false })}
              />
              <Label>Gangguan Psikis / Perilaku</Label>
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="diagnosa_radio"
                value='1'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowDiagnosa('1');
                  }
                }}
                defaultChecked={!!(item && item?.Diagnosa_Radio  === '1')}
                innerRef={register({ required: false })}
              />
              <Label>Diagnosis Lain</Label>
            </Col>
          </Col>
          <Col md="3">
          Skor :
            <Input
              style={{ marginTop: '10px' }}
              className="mb-1"
              type="text"
              id="diagnosa"
              name="diagnosa"
              innerRef={register({ required: false })}
              invalid={errors.diagnosa && true}
              readOnly
            />
          </Col>
        </FormGroup>
        <hr style={{ borderTop: "2px dashed black" }} />

        <FormGroup className="form-group" row>
          <Col md="9">
            <Col md="4">
                4. Gangguan Kognitif  :
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="gangguan_kognitif_radio"
                value='3'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowGangguanKognitif('3');
                  }
                }}
                defaultChecked={!!(item && item?.Gangguan_Kognitif_Radio  === '3')}
                innerRef={register({ required: false })}
              />
              <Label>Tidak Menyadari Keterbatasan</Label>
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="gangguan_kognitif_radio"
                value='2'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowGangguanKognitif('2');
                  }
                }}
                defaultChecked={!!(item && item?.Gangguan_Kognitif_Radio  === '2')}
                innerRef={register({ required: false })}
              />
              <Label>Lupa Keterbatasan</Label>
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="gangguan_kognitif_radio"
                value='1'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowGangguanKognitif('1');
                  }
                }}
                defaultChecked={!!(item && item?.Gangguan_Kognitif_Radio  === '1')}
                innerRef={register({ required: false })}
              />
              <Label>Mengetahui Kemampuan Diri</Label>
            </Col>
          </Col>
          <Col md="3">
          Skor :
            <Input
              style={{ marginTop: '10px' }}
              className="mb-1"
              type="text"
              id="gangguan_kognitif"
              name="gangguan_kognitif"
              innerRef={register({ required: false })}
              invalid={errors.gangguan_kognitif && true}
              readOnly
            />
          </Col>
        </FormGroup>
        <hr style={{ borderTop: "2px dashed black" }} />


        <FormGroup className="form-group" row>
          <Col md="9">
            <Col md="4">
                5.  Faktor Lingkungan  :
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="faktor_lingkungan_radio"
                value='3'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowFaktorLingkungan('3');
                  }
                }}
                defaultChecked={!!(item && item?.Faktor_Lingkungan_Radio  === '3')}
                innerRef={register({ required: false })}
              />
              <Label>Tidak Menyadari Keterbatasan</Label>
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="faktor_lingkungan_radio"
                value='2'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowFaktorLingkungan('2');
                  }
                }}
                defaultChecked={!!(item && item?.Faktor_Lingkungan_Radio  === '2')}
                innerRef={register({ required: false })}
              />
              <Label>Lupa Keterbatasan</Label>
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="faktor_lingkungan_radio"
                value='1'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowFaktorLingkungan('1');
                  }
                }}
                defaultChecked={!!(item && item?.Faktor_Lingkungan_Radio  === '1')}
                innerRef={register({ required: false })}
              />
              <Label>Mengetahui Kemampuan Diri</Label>
            </Col>
          </Col>
          <Col md="3">
          Skor :
            <Input
              style={{ marginTop: '10px' }}
              className="mb-1"
              type="text"
              id="faktor_lingkungan"
              name="faktor_lingkungan"
              innerRef={register({ required: false })}
              invalid={errors.faktor_lingkungan && true}
              readOnly
            />
          </Col>
        </FormGroup>
        <hr style={{ borderTop: "2px dashed black" }} />

        <FormGroup className="form-group" row>
          <Col md="9">
            <Col md="6">
                6.  Respon Terhadap Operasi / Obat Penenang / Efek Anestesi  :
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="respon_operasi_radio"
                value='3'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowResponOperasi('3');
                  }
                }}
                defaultChecked={!!(item && item?.Respon_Operasi_Radio  === '3')}
                innerRef={register({ required: false })}
              />
              <Label>Dalam 24 Jam</Label>
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="respon_operasi_radio"
                value='2'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowResponOperasi('2');
                  }
                }}
                defaultChecked={!!(item && item?.Respon_Operasi_Radio  === '2')}
                innerRef={register({ required: false })}
              />
              <Label>Dalam 48 Jam</Label>
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="respon_operasi_radio"
                value='1'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowResponOperasi('1');
                  }
                }}
                defaultChecked={!!(item && item?.Respon_Operasi_Radio  === '1')}
                innerRef={register({ required: false })}
              />
              <Label> Diatas 48 Jam atau Tidak Sama Sekali</Label>
            </Col>
          </Col>
          <Col md="3">
          Skor :
            <Input
              style={{ marginTop: '10px' }}
              className="mb-1"
              type="text"
              id="respon_operasi"
              name="respon_operasi"
              innerRef={register({ required: false })}
              invalid={errors.respon_operasi && true}
              readOnly
            />
          </Col>
        </FormGroup>
        <hr style={{ borderTop: "2px dashed black" }} />

        <FormGroup className="form-group" row>
          <Col md="9">
            <Col md="4">
                7.  Penggunaan Obat  :
            </Col>
            <Col md="12">
              <Input
                type="radio"
                className="me-1"
                name="penggunaan_obat_radio"
                value='3'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowPenggunaanObat('3');
                  }
                }}
                defaultChecked={!!(item && item?.Penggunaan_Obat_Radio  === '3')}
                innerRef={register({ required: false })}
              />
              <Label>Penggunaan 2 atau Lebih Obat, Sbb: Obat
                                Sedatif
                                (Kecuali Pakai ICU), Hipnotik, Barbiturat, Fenotiazin, Anti Depresan, Laxatives/
                                Diuretika,
                                dan
                                Narkotik</Label>
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="penggunaan_obat_radio"
                value='2'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowPenggunaanObat('2');
                  }
                }}
                defaultChecked={!!(item && item?.Penggunaan_Obat_Radio  === '2')}
                innerRef={register({ required: false })}
              />
              <Label>Salah Satu dari Pengobatan Di
                                Atas</Label>
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="penggunaan_obat_radio"
                value='1'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowPenggunaanObat('1');
                  }
                }}
                defaultChecked={!!(item && item?.Penggunaan_Obat_Radio  === '1')}
                innerRef={register({ required: false })}
              />
              <Label>Pengobatan Lain / Tidak</Label>
            </Col>
          </Col>
          <Col md="3">
          Skor :
            <Input
              style={{ marginTop: '10px' }}
              className="mb-1"
              type="text"
              id="penggunaan_obat"
              name="penggunaan_obat"
              innerRef={register({ required: false })}
              invalid={errors.penggunaan_obat && true}
              readOnly
            />
          </Col>
        </FormGroup>
        <hr style={{ borderTop: "2px dashed black" }} />


        <FormGroup className="form-group" row>
          <Label md="2">Keterangan Waktu Pengkajian</Label>
          <Col>
            <Input
              style={{ marginTop: '20px' }}
              type="select"
              id= "keterangan_waktu_pengkajian"
              name= "keterangan_waktu_pengkajian"
              innerRef={register()}
              onChange={(e) => {
                if (e.target.value !== '') {
                  getTimes(e.target.value)
                }
              }}
            >
              <option value="" disabled={(itemButton === "view")}>Pilih...</option>
              {
                dataTimeAssessement.map((item: any, key: number) => {
                  return <option value={item.id} key={key} disabled={(itemButton === "view")}>{ item.nama }</option>;
                })
              }
            </Input>

          </Col>
          <Col>
            <Label></Label>
          </Col>
          {errors && errors.keterangan_waktu_pengkajian && <FormFeedback>{errors.keterangan_waktu_pengkajian.message}</FormFeedback>}
        </FormGroup>

        <FormGroup className="form-group" row>
          <Label md="2">Total Skor</Label>
          <Col>
            <Input
              style={{ marginTop: '10px' }}
              className="mb-1"
              type="text"
              id="total_skor"
              name="total_skor"
              innerRef={register({ required: false })}
              invalid={errors.total_skor && true}
              readOnly
            />
          </Col>
          <Col>
            <Label></Label>
          </Col>
          {errors && errors.total_skor && <FormFeedback>{errors.total_skor.message}</FormFeedback>}
        </FormGroup>

        <FormGroup className="form-group" row>
          <Label md="2">Risiko Jatuh</Label>
          <Col>
            <Input
              style={{ marginTop: '10px' }}
              className="mb-1"
              type="text"
              id="resiko_jatuh"
              name="resiko_jatuh"
              innerRef={register({ required: false })}
              invalid={errors.resiko_jatuh && true}
              readOnly
            />
          </Col>
          <Col>
            <Label></Label>
          </Col>
          {errors && errors.resiko_jatuh && <FormFeedback>{errors.resiko_jatuh.message}</FormFeedback>}
        </FormGroup>

        <FormGroup className="form-group" row>
          <Label md="2">Implementasi Resiko Jatuh</Label>
          <Col>
            <Input
              style={{ marginTop: '10px', height: '200px' }}
              className="mb-1"
              type="textarea"
              id="resiko_jatuh_keterangan"
              name="resiko_jatuh_keterangan"
              innerRef={register({ required: false })}
              invalid={errors.resiko_jatuh_keterangan && true}
              readOnly
            />
          </Col>

        </FormGroup>

        <FormGroup style={{ marginTop: '20px' }} className="d-flex mb-0 justify-content-center">
          <Signature
            label="Perawat "
            type="picker"
            additionalLabel={ item && item.Nama_Petugas ? item.Nama_Petugas : ""}
            initialImage={item && item.TTD_Petugas && item.TTD_Petugas !== "" ? item.TTD_Petugas : undefined}
            persons={nurses}
            onSigned={(assigner: SignatureModel) => handleTandaTangan(assigner)}
            disabled={(itemButton === "view")}
          />
          <Input
            type="hidden"
            name="ttd_petugas"
            innerRef={register({ required: true })}
            invalid={errors["ttd_petugas"] && true}
          />
          <Input
            type="hidden"
            name="petugas"
            innerRef={register({ required: true })}
            invalid={errors["petugas"] && true}
          />
        </FormGroup>

        <FormGroup className="d-flex mb-0 justify-content-center">
           {
            (itemButton !== "view") && (
              <SubmitButton
                buttonColor='primary'
                spinnerColor='light'
                processing={processing}
                label="Simpan"
                spinnerStyle={{ width: '1rem', height: '1rem' }}
              />
            )
          }
        </FormGroup>
        <FormGroup className='form-group mt-0' row>
          <div className='d-flex justify-content-center align-items-center'>
            <Label className='me-1'>Terakhir Disimpan: </Label>
            <Label>{(item && item.Updated_At) ? item.Updated_At : ''}</Label>
          </div>
        </FormGroup>
      </Form>
    </Fragment>
  )
}

export default FallRiskAssessementChildrenForm;

