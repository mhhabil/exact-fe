
import {FallRiskAssessementAdultItemModel} from '@modules/inpatient/fall-risk-assessement-adult/models/fall-risk-assessement-adult.model';
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
  fetchFallRiskAssessementAdult,
  fetchFallRiskAssessementAdultItem,
  fetchFallRiskAssessementAdultPdf,
  handleFallRiskAssessementAdultItem,
  handlePdf,
} from '@modules/inpatient/fall-risk-assessement-adult/stores/fall-risk-assessement-adult.store';
import { FindPdfRequest } from '@shared/pdf';
import {
  CreateFallRiskAssessementAdultRequest,
  ICreateFallRiskAssessementAdultRequest,
} from '@modules/inpatient/fall-risk-assessement-adult/requests/create-fall-risk-assessement-adult.request';
import {FallRiskAssessementAdultService} from '@modules/inpatient/fall-risk-assessement-adult/services';
import {UpdateFallRiskAssessementAdultRequest} from '@modules/inpatient/fall-risk-assessement-adult/requests/update-fall-risk-assessement-adult.request';
import {Col, Form, FormFeedback, FormGroup, Input, Label} from 'reactstrap';
import {Signature} from '@shared/signature/components';
import {SubmitButton} from '@shared/button';
import { ErrorMessage } from '@hookform/error-message';
import { PdfFallRiskAssessementAdultRequest } from '@modules/inpatient/fall-risk-assessement-adult/requests/pdf-fall-risk-assessement-adult.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';
import dataTimeAssessement from '../const/dataTimeAssessement';


const FallRiskAssessementAdultForm = (props: { item?: FallRiskAssessementAdultItemModel | undefined, itemButton: any, onSuccessSubmit: any, unit: string }) => {

  const { officers } = useAppSelector(state => state.officer);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const { nurses } = useAppSelector(state => state.nurse);
  const { item, itemButton, onSuccessSubmit, unit } = props;
  const [processing, setProcessing] = useState(false);
  const { treatment } = useAppSelector(state => state.patient);
  const [showRiwayatJatuh, setShowRiwayatJatuh] = useState<any>((item &&  item.Riwayat_Jatuh_Radio) ? item.Riwayat_Jatuh_Radio : '');
  const [showDiagnosaSekunder, setShowDiagnosaSekunder] = useState<any>((item &&  item.Diagnosa_Sekunder_Radio) ? item.Diagnosa_Sekunder_Radio : '');
  const [showAlatBantuJalan, setShowAlatBantuJalan] = useState<any>((item &&  item.Alat_Bantu_Jalan_Radio) ? item.Alat_Bantu_Jalan_Radio : '');
  const [showPasienDiinfus, setShowPasienDiinfus] = useState<any>((item &&  item.Pasien_Diinfus_Radio) ? item.Pasien_Diinfus_Radio : '');
  const [showCaraBerjalan, setShowCaraBerjalan] = useState<any>((item &&  item.Cara_Berjalan_Radio) ? item.Cara_Berjalan_Radio : '');
  const [showKondisiMental, setShowKondisiMental] = useState<any>((item &&  item.Kondisi_Mental_Radio) ? item.Kondisi_Mental_Radio : '');
  

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

    let totalRiwayat = 0;
    let totalDiagonsaSekunder = 0;
    let totalAlatBantu = 0;
    let totalPasienDiinfus = 0;
    let totalCaraBerjalan = 0;
    let totalKondisiMental = 0;
    let totalScore = 0;

    if (showRiwayatJatuh !== "") {
      if (showRiwayatJatuh === "ya") {
        setValue('riwayat_jatuh', '25');
        totalRiwayat = 25;
      } else if (showRiwayatJatuh === "tidak") {
        setValue('riwayat_jatuh', '0');
      }
    }

    if (showDiagnosaSekunder !== "") {
      if (showDiagnosaSekunder === "ya") {
        setValue('diagnosa_sekunder', '15');
        totalDiagonsaSekunder = 15;
      } else if (showDiagnosaSekunder === "tidak") {
        setValue('diagnosa_sekunder', '0');
      }
    }

    if (showAlatBantuJalan !== "") {
      if (showAlatBantuJalan === "alat_khusus") {
        setValue('alat_bantu_jalan', '30');
        totalAlatBantu = 30;
      } else if (showAlatBantuJalan === "tongkat") {
        setValue('alat_bantu_jalan', '15');
        totalAlatBantu = 15;
      } else if (showAlatBantuJalan === "tidak") {
        setValue('alat_bantu_jalan', '0');
      }
    }

    if (showPasienDiinfus !== "") {
      if (showPasienDiinfus === "ya") {
        setValue('pasien_diinfus', '20');
        totalPasienDiinfus = 20;
      } else if (showPasienDiinfus === "tidak") {
        setValue('pasien_diinfus', '0');
      }
    }

    if (showCaraBerjalan !== "") {
      if (showCaraBerjalan === "terganggu") {
        setValue('cara_berjalan', '20');
        totalCaraBerjalan = 20;
      } else if (showCaraBerjalan === "lemah") {
        setValue('cara_berjalan', '10');
        totalCaraBerjalan = 10;
      } else if (showCaraBerjalan === "normal") {
        setValue('cara_berjalan', '0');
      }
    }

    if (showKondisiMental !== "") {
      if (showKondisiMental === "terbatas") {
        setValue('kondisi_mental', '15');
        totalKondisiMental = 15;
      } else if (showKondisiMental === "normal") {
        setValue('kondisi_mental', '0');
      }
    }

    totalScore = totalRiwayat + totalDiagonsaSekunder + totalAlatBantu + totalPasienDiinfus + totalCaraBerjalan + totalKondisiMental;
    setValue('total_skor', totalScore);

    if (totalScore <= 24) {
      const strText = "1. Pastikan rem tempat tidur terkunci \r\n" +
                "2. Pastikan semua kebutuhan dalam jangkauan \r\n" +
                "3. Tempatkan meja, kursi, dan lainnya dengan baik agar tidak menghalangi \r\n" +
                "4. Pasang palang tempat tidur";

      setValue('resiko_jatuh', 'Resiko Rendah');
      setValue('resiko_jatuh_keterangan', strText);

    } else if (totalScore > 24 && totalScore <= 44) {
      const strText = "1. Pastikan rem tempat tidur terkunci \r\n" +
                "2. Pastikan semua kebutuhan dalam jangkauan \r\n" +
                "3. Tempatkan meja, kursi, dan lainnya dengan baik agar tidak menghalangi \r\n" +
                "4. Pasang palang tempat tidur \r\n" +
                "5. Pasang penanda resiko jatuh dengan memakai gelang berwarna kuning \r\n" +
                "6. Libatkan keluarga / penunggu pasien untuk mendampingi pasien di samping tempat tidur selama perawatan";

      setValue('resiko_jatuh', 'Resiko Sedang');
      setValue('resiko_jatuh_keterangan', strText);

    } else {
      const strText = "1. Pastikan rem tempat tidur terkunci \r\n" +
                "2. Pastikan semua kebutuhan dalam jangkauan \r\n" +
                "3. Tempatkan meja, kursi, dan lainnya dengan baik agar tidak menghalangi \r\n" +
                "4. Pasang palang tempat tidur \r\n" +
                "5. Pasang penanda resiko jatuh dengan memakai gelang berwarna kuning \r\n" +
                "6. Libatkan keluarga / penunggu pasien untuk mendampingi pasien di samping tempat tidur selama perawatan \r\n" +
                "7. Cepat menanggapi bel atau keluhan pasien";

      setValue('resiko_jatuh', 'Resiko Tinggi');
      setValue('resiko_jatuh_keterangan', strText);

    }

  }, [showRiwayatJatuh, showDiagnosaSekunder, showAlatBantuJalan, showPasienDiinfus, showCaraBerjalan, showKondisiMental])


  const convertDatetimeToUTC = (date?: any) => {
    const d = date ? new Date(date) : new Date();
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}T${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }

  const { register, handleSubmit, errors, getValues, setValue } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: yupResolver(CreateFallRiskAssessementAdultRequest.scheme()),
    defaultValues: {
      waktu_pengkajian : item?.Waktu_Pengkajian ? DateTimeConverter.convertToNormalDatetime(item?.Waktu_Pengkajian) : convertDatetimeToUTC(),
      riwayat_jatuh:  item?.Riwayat_Jatuh,
      riwayat_jatuh_radio:  item?.Riwayat_Jatuh_Radio,
      diagnosa_sekunder:  item?.Diagnosa_Sekunder,
      diagnosa_sekunder_radio:  item?.Diagnosa_Sekunder_Radio,
      alat_bantu_jalan:  item?.Alat_Bantu_Jalan,
      alat_bantu_jalan_radio:  item?.Alat_Bantu_Jalan_Radio,
      pasien_diinfus:  item?.Pasien_Diinfus,
      pasien_diinfus_radio:  item?.Pasien_Diinfus_Radio,
      cara_berjalan:  item?.Cara_Berjalan,
      cara_berjalan_radio:  item?.Cara_Berjalan_Radio,
      kondisi_mental:  item?.Kondisi_Mental,
      kondisi_mental_radio:  item?.Kondisi_Mental_Radio,
      keterangan_waktu_pengkajian:  item?.Keterangan_Waktu_Pengkajian_Id,
      total_skor:  item?.Total_Skor,
      resiko_jatuh:  item?.Resiko_Jatuh,
      resiko_jatuh_keterangan:  item?.Resiko_Jatuh_Keterangan,
      lembar:  item?.Lembar,
      ruangan:  item?.Ruangan,
      id_perawat:  item?.ID_Perawat,
      ttd_perawat:  item?.TTD_Perawat,
      unit_pengkaji: item?.Unit_Pengkaji,
      implementasi_resiko_jatuh : '',
    },
  });

  const handleTandaTangan = (image: SignatureModel) => {
    setValue("ttd_perawat", image.Signature);
    setValue("id_perawat", image.ID_Karyawan);
  };


  const handleSubmitForm = (value: ICreateFallRiskAssessementAdultRequest) => {
    if (!treatment) {
      return false;
    }
    setProcessing(true)
    const appRequest = AppRequest.createFromStore(treatment);
    dispatch(handlePdf(undefined));
    if (!item) {
      const params = CreateFallRiskAssessementAdultRequest.createFromJson({...value, ...appRequest, unit });
      FallRiskAssessementAdultService().create(params)
        .then(() => {
          setProcessing(false);
          FallRiskAssessementAdultService().show(appRequest)
            .then((resp) => {
              const { data } = resp.data;
              const params = PdfFallRiskAssessementAdultRequest.createPdfRequest(data, appRequest.emr_id, treatment);
              FallRiskAssessementAdultService().pdfv3(params)
                .then(() => {
                  if (onSuccessSubmit) {
                    onSuccessSubmit();
                    dispatch(fetchFallRiskAssessementAdultPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pengkajian-risiko-jatuh-dewasa' })));
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
      const params = UpdateFallRiskAssessementAdultRequest.createFromJson({...value, ...appRequest, ID: item.ID, unit, emr_id: appRequest.emr_id });
      FallRiskAssessementAdultService().update(params)
        .then(() => {
          setProcessing(false);
          FallRiskAssessementAdultService().show(appRequest)
            .then((resp) => {
              const { data } = resp.data;
              const params = PdfFallRiskAssessementAdultRequest.createPdfRequest(data, appRequest.emr_id, treatment);
              FallRiskAssessementAdultService().pdfv3(params)
                .then(() => {
                  if (onSuccessSubmit) {
                    onSuccessSubmit();
                    dispatch(fetchFallRiskAssessementAdultPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pengkajian-risiko-jatuh-dewasa' })));
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
                1. Riwayat Jatuh  :
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="riwayat_jatuh_radio"
                value='ya'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowRiwayatJatuh('ya');
                  }
                }}
                defaultChecked={!!(item && item?.Riwayat_Jatuh_Radio  === 'ya')}
                innerRef={register({ required: false })}
              />
              <Label>Ya [Skor 25]</Label>
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="riwayat_jatuh_radio"
                value='tidak'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowRiwayatJatuh('tidak');
                  }
                }}
                defaultChecked={!!(item && item?.Riwayat_Jatuh_Radio  === 'tidak')}
                innerRef={register({ required: false })}
              />
              <Label>Tidak [Skor 0]</Label>
            </Col>
          </Col>
          <Col md="3">
          Skor :
            <Input
              style={{ marginTop: '10px' }}
              className="mb-1"
              type="text"
              id="riwayat_jatuh"
              name="riwayat_jatuh"
              innerRef={register({ required: false })}
              invalid={errors.resiko_jatuh && true}
              readOnly
            />
          </Col>
        </FormGroup>
        <hr style={{ borderTop: "2px dashed black" }} />

        <FormGroup className="form-group" row>
          <Col md="9">
            <Col md="4">
                2. Diagnosa Sekunder :
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="diagnosa_sekunder_radio"
                value='ya'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowDiagnosaSekunder('ya');
                  }
                }}
                defaultChecked={!!(item && item?.Diagnosa_Sekunder_Radio  === 'ya')}
                innerRef={register({ required: false })}
              />
              <Label>Ya [Skor 15]</Label>
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="diagnosa_sekunder_radio"
                value='tidak'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowDiagnosaSekunder('tidak');
                  }
                }}
                defaultChecked={!!(item && item?.Diagnosa_Sekunder_Radio  === 'tidak')}
                innerRef={register({ required: false })}
              />
              <Label>Tidak [Skor 0]</Label>
            </Col>
          </Col>
          <Col md="3">
          Skor :
            <Input
              style={{ marginTop: '10px' }}
              className="mb-1"
              type="text"
              id="diagnosa_sekunder"
              name="diagnosa_sekunder"
              innerRef={register({ required: false })}
              invalid={errors.diagnosa_sekunder && true}
              readOnly
            />
          </Col>
        </FormGroup>
        <hr style={{ borderTop: "2px dashed black" }} />

        <FormGroup className="form-group" row>
          <Col md="9">
            <Col md="4">
                3. Alat Bantu Jalan  :
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="alat_bantu_jalan_radio"
                value='alat_khusus'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowAlatBantuJalan('alat_khusus');
                  }
                }}
                defaultChecked={!!(item && item?.Diagnosa_Sekunder_Radio  === 'alat_khusus')}
                innerRef={register({ required: false })}
              />
              <Label>Peralatan Khusus [Skor 30]</Label>
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="alat_bantu_jalan_radio"
                value='tongkat'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowAlatBantuJalan('tongkat');
                  }
                }}
                defaultChecked={!!(item && item?.Diagnosa_Sekunder_Radio  === 'tongkat')}
                innerRef={register({ required: false })}
              />
              <Label>Tongkat / Walker [Skor 15]</Label>
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="alat_bantu_jalan_radio"
                value='tidak'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowAlatBantuJalan('tidak');
                  }
                }}
                defaultChecked={!!(item && item?.Diagnosa_Sekunder_Radio  === 'tidak')}
                innerRef={register({ required: false })}
              />
              <Label>Tidak menggunakan alat bantu [Skor 0]</Label>
            </Col>
          </Col>
          <Col md="3">
          Skor :
            <Input
              style={{ marginTop: '10px' }}
              className="mb-1"
              type="text"
              id="alat_bantu_jalan"
              name="alat_bantu_jalan"
              innerRef={register({ required: false })}
              invalid={errors.alat_bantu_jalan && true}
              readOnly
            />
          </Col>
        </FormGroup>
        <hr style={{ borderTop: "2px dashed black" }} />

        <FormGroup className="form-group" row>
          <Col md="9">
            <Col md="4">
                4. Pasien Di Infus :
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="pasien_diinfus_radio"
                value='ya'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowPasienDiinfus('ya');
                  }
                }}
                defaultChecked={!!(item && item?.Pasien_Diinfus_Radio  === 'ya')}
                innerRef={register({ required: false })}
              />
              <Label>Ya [Skor 20]</Label>
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="pasien_diinfus_radio"
                value='tidak'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowPasienDiinfus('tidak');
                  }
                }}
                defaultChecked={!!(item && item?.Pasien_Diinfus_Radio  === 'tidak')}
                innerRef={register({ required: false })}
              />
              <Label>Tidak [Skor 0]</Label>
            </Col>
          </Col>
          <Col md="3">
          Skor :
            <Input
              style={{ marginTop: '10px' }}
              className="mb-1"
              type="text"
              id="pasien_diinfus"
              name="pasien_diinfus"
              innerRef={register({ required: false })}
              invalid={errors.pasien_diinfus && true}
              readOnly
            />
          </Col>
        </FormGroup>
        <hr style={{ borderTop: "2px dashed black" }} />


        <FormGroup className="form-group" row>
          <Col md="9">
            <Col md="4">
                5. Cara Berjalan  :
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="cara_berjalan_radio"
                value='terganggu'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowCaraBerjalan('terganggu');
                  }
                }}
                defaultChecked={!!(item && item?.Cara_Berjalan_Radio  === 'terganggu')}
                innerRef={register({ required: false })}
              />
              <Label>Terganggu [Skor 20]</Label>
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="cara_berjalan_radio"
                value='lemah'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowCaraBerjalan('lemah');
                  }
                }}
                defaultChecked={!!(item && item?.Cara_Berjalan_Radio  === 'lemah')}
                innerRef={register({ required: false })}
              />
              <Label>Lemah [Skor 10]</Label>
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="cara_berjalan_radio"
                value='normal'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowCaraBerjalan('normal');
                  }
                }}
                defaultChecked={!!(item && item?.Cara_Berjalan_Radio  === 'normal')}
                innerRef={register({ required: false })}
              />
              <Label>Normal [Skor 0]</Label>
            </Col>
          </Col>
          <Col md="3">
          Skor :
            <Input
              style={{ marginTop: '10px' }}
              className="mb-1"
              type="text"
              id="cara_berjalan"
              name="cara_berjalan"
              innerRef={register({ required: false })}
              invalid={errors.cara_berjalan && true}
              readOnly
            />
          </Col>
        </FormGroup>
        <hr style={{ borderTop: "2px dashed black" }} />

        <FormGroup className="form-group" row>
          <Col md="9">
            <Col md="4">
                6. Kondisi Mental :
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="kondisi_mental_radio"
                value='terbatas'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowKondisiMental('terbatas');
                  }
                }}
                defaultChecked={!!(item && item?.Kondisi_Mental_Radio  === 'terbatas')}
                innerRef={register({ required: false })}
              />
              <Label>Keterbatasan Daya Ingat [Skor 15]</Label>
            </Col>
            <Col md="4">
              <Input
                type="radio"
                className="me-1"
                name="kondisi_mental_radio"
                value='normal'
                disabled={(itemButton === "view")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowKondisiMental('normal');
                  }
                }}
                defaultChecked={!!(item && item?.Kondisi_Mental_Radio  === 'normal')}
                innerRef={register({ required: false })}
              />
              <Label>Normal [Skor 0]</Label>
            </Col>
          </Col>
          <Col md="3">
          Skor :
            <Input
              style={{ marginTop: '10px' }}
              className="mb-1"
              type="text"
              id="kondisi_mental"
              name="kondisi_mental"
              innerRef={register({ required: false })}
              invalid={errors.kondisi_mental && true}
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
            additionalLabel={ item && item.Nama_Perawat ? item.Nama_Perawat : ""}
            initialImage={item && item.TTD_Perawat && item.TTD_Perawat !== "" ? item.TTD_Perawat : undefined}
            persons={nurses}
            onSigned={(assigner: SignatureModel) => handleTandaTangan(assigner)}
            disabled={(itemButton === "view")}
          />
          <Input
            type="hidden"
            name="ttd_perawat"
            innerRef={register({ required: true })}
            invalid={errors["ttd_perawat"] && true}
          />
          <Input
            type="hidden"
            name="id_perawat"
            innerRef={register({ required: true })}
            invalid={errors["id_perawat"] && true}
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
            <Label>{ `${DateTimeConverter.convertToDateTimeSecond(item?.Updated_At)}` }</Label>
          </div>
        </FormGroup>
      </Form>
    </Fragment>
  )
}

export default FallRiskAssessementAdultForm;

