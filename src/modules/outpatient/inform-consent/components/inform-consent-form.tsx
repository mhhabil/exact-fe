import { Button, Form, FormGroup, Label, Nav, NavItem, NavLink } from "reactstrap";
import { Fragment, useEffect, useState } from "react";
import { fetchInformConsent, fetchInformConsentPdf, handlePdf } from "../stores/inform-consent.store";
import { AppRequest } from "@src/shared/request";
import DoctorsConsentTab from "./doctors-consent-tab";
import { FindPdfRequest } from "@src/shared/pdf";
import { IUpdateInformConsentRequest } from "../requests";
import { InformConsentModel } from "../models/inform-consent.model";
import { InformConsentService } from "../services";
import { PdfInformConsentRequest } from "../requests/pdf-inform-consent.request";
import ProvisionOfInformationTab from "./provision-of-information-tab";
import { SubmitButton } from "@src/shared/button";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useForm } from "react-hook-form";
import { DateTimeConverter } from "@src/shared/datetime-converter";

const InformConsentForm = (props: { data: InformConsentModel }) => {
  const { data } = props;
  const dispatch = useAppDispatch();
  const { treatment } = useAppSelector(state => state.patient);
  const { pdf } = useAppSelector(state => state.informConsent);
  const [activeTab, setActiveTab] = useState('1')
  const [processing, setProcessing] = useState(false);
  const [pdfData, setPdfData] = useState<any | undefined>(undefined);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchInformConsentPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'inform-consent' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf]);

  const { register, setValue, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      'dokter-pelaksana': data.information_provision && data.information_provision.ID_Dokter_Pelaksana ? data.information_provision.ID_Dokter_Pelaksana : '',
      'pemberi-informasi': data.information_provision && data.information_provision.ID_Pemberi_Informasi ? data.information_provision.ID_Pemberi_Informasi : '',
      'penerima-informasi': data.information_provision && data.information_provision.Penerima_Informasi && data.information_provision.Penerima_Informasi === 'Pasien' ? '1' : data.information_provision && data.information_provision.Penerima_Informasi && data.information_provision.Penerima_Informasi === 'Wali' ? '2' : '',
      diagnosis: data.information_provision?.Diagnosis ?? '',
      'diagnosis-custom': data.information_provision?.Diagnosis_Custom ?? '',
      'diagnosis-check': data.information_provision && data.information_provision.Diagnosis_Check ? data.information_provision.Diagnosis_Check : '',
      'dasar-diagnosis': data.information_provision?.Dasar_Diagnosis ?? '',
      'dasar-diagnosis-check': data.information_provision && data.information_provision.Dasar_Diagnosis_Check ? data.information_provision.Dasar_Diagnosis_Check : '',
      'tindakan-kedokteran': data.information_provision?.Tindakan_Kedokteran ?? '',
      'tindakan-kedokteran-check': data.information_provision && data.information_provision.Tindakan_Kedokteran_Check ? data.information_provision.Tindakan_Kedokteran_Check : '',
      'indikasi-tindakan': data.information_provision?.Indikasi_Tindakan ?? '',
      'indikasi-tindakan-check': data.information_provision && data.information_provision.Indikasi_Tindakan_Check ? data.information_provision.Indikasi_Tindakan_Check : '',
      'tata-cara-tipe-sedasi': data.information_provision && data.information_provision.Tata_Cara_Tipe_Sedasi ? data.information_provision.Tata_Cara_Tipe_Sedasi : '',
      'tata-cara-uraian-singkat': data.information_provision && data.information_provision.Tata_Cara_Uraian_Singkat ? data.information_provision.Tata_Cara_Uraian_Singkat : '',
      'tata-cara': data.information_provision?.Tata_Cara ?? '',
      'tata-cara-check': data.information_provision && data.information_provision.Tata_Cara_Check ? data.information_provision.Tata_Cara_Check : '',
      tujuan: data.information_provision?.Tujuan ?? '',
      'tujuan-check': data.information_provision && data.information_provision.Tujuan_Check ? data.information_provision.Tujuan_Check : '',
      risiko: data.information_provision?.Risiko ?? '',
      'risiko-check': data.information_provision && data.information_provision.Risiko_Check ? data.information_provision.Risiko_Check : '',
      komplikasi: data.information_provision?.Komplikasi ?? '',
      'komplikasi-check': data.information_provision && data.information_provision.Komplikasi_Check ? data.information_provision.Komplikasi_Check : '',
      prognosis: data.information_provision?.Prognosis ?? '',
      'prognosis-check': data.information_provision && data.information_provision.Prognosis_Check ? data.information_provision.Prognosis_Check : '',
      'alternatif-risiko-pilihan-pengobatan': data.information_provision && data.information_provision.Alternatif_Risiko_Pilihan_Pengobatan ? data.information_provision.Alternatif_Risiko_Pilihan_Pengobatan : '',
      'alternatif-risiko': data.information_provision?.Alternatif_Risiko ?? '',
      'alternatif-resiko-check': data.information_provision && data.information_provision.Alternatif_Resiko_Check ? data.information_provision.Alternatif_Resiko_Check : '',
      'hal-lain-perluasan-tindakan': data.information_provision && data.information_provision.Hal_Lain_Perluasan_Tindakan ? data.information_provision.Hal_Lain_Perluasan_Tindakan : '',
      'hal-lain-konsultasi': data.information_provision && data.information_provision.Hal_Lain_Konsultasi ? data.information_provision.Hal_Lain_Konsultasi : '',
      'hal-lain': data.information_provision?.Hal_Lain ?? '',
      'hal-lain-check': data.information_provision && data.information_provision.Hal_Lain_Check ? data.information_provision.Hal_Lain_Check : '',
      'ttd-pasien': data.information_provision?.TTD_Pasien ?? '',
      'ttd-dokter-pelaksana': data.information_provision?.TTD_Dokter_Pelaksana ?? '',
      dokter_pelaksana_informasi: data.information_provision?.Dokter_Pelaksana ?? '',
      'pasien-kota': data.doctors_consent?.Pasien_Kota ?? '',
      'pasien-nomorMR': treatment?.No_MR ?? '',
      'pasien-alamat': treatment?.Pasien.Alamat ?? '',
      'pasien-nama': treatment?.Pasien?.Nama ?? '',
      'pasien-tglLahir': treatment?.Pasien?.Tgl_Lahir ?? '',
      'pasien-jk': treatment?.Pasien.Jenis_Kelamin ?? '',
      'pasien-tindakanOperasi': data.doctors_consent && data.doctors_consent.Tindakan_Operasi ? data.doctors_consent.Tindakan_Operasi : data.rawat_jalan && data.rawat_jalan.Nama_Paket_Operasi ? data.rawat_jalan.Nama_Paket_Operasi : '',
      pernyataan: data.doctors_consent?.Pernyataan_Id ?? '',
      'tandaTangan-radio': data.doctors_consent && data.doctors_consent.Tanda_Tangan && data.doctors_consent.Tanda_Tangan === 'Pasien' ? '1' : data.doctors_consent && data.doctors_consent.Tanda_Tangan && data.doctors_consent.Tanda_Tangan === 'Wali' ? '2' : '1',
      'tandaTangan-nama': (data.doctors_consent && data.doctors_consent.Tanda_Tangan_Nama) || (data.doctors_consent?.Tanda_Tangan_Nama === '') ? data.doctors_consent.Tanda_Tangan_Nama : treatment?.Pasien?.Nama,
      'tandaTangan-tglLahir': (data.doctors_consent && data.doctors_consent.Tanda_Tangan_TglLahir) || (data.doctors_consent?.Tanda_Tangan_TglLahir === '') ? data.doctors_consent.Tanda_Tangan_TglLahir : treatment?.Pasien?.Tgl_Lahir,
      'tandaTangan-jk': (data.doctors_consent && data.doctors_consent.Tanda_Tangan_JK) || (data.doctors_consent?.Tanda_Tangan_JK === '') ? data.doctors_consent.Tanda_Tangan_JK : treatment?.Pasien?.Jenis_Kelamin,
      'tandaTangan-telp': (data.doctors_consent && data.doctors_consent.Tanda_Tangan_Telp) || (data.doctors_consent?.Tanda_Tangan_Telp === '') ? data.doctors_consent.Tanda_Tangan_Telp : treatment?.Pasien?.No_Telepon,
      'tandaTangan-alamat': (data.doctors_consent && data.doctors_consent.Tanda_Tangan_Alamat) || (data.doctors_consent?.Tanda_Tangan_Alamat === '') ? data.doctors_consent.Tanda_Tangan_Alamat : treatment?.Pasien?.Alamat,
      'tandaTangan-hubungan': data.doctors_consent && data.doctors_consent.Tanda_Tangan_Hubungan ? data.doctors_consent.Tanda_Tangan_Hubungan : '',
      'pasien-tanggal': (data && data.doctors_consent && data.doctors_consent.Pasien_Tanggal) ? data.doctors_consent.Pasien_Tanggal.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      // 'tanggal-tanda-tangan':  (data && data.doctors_consent && data.doctors_consent.Tanggal_Tanda_Tangan) ? data.doctors_consent.Tanggal_Tanda_Tangan.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      'nama-saksi-keluarga': data.doctors_consent?.Nama_Saksi_Keluarga ?? '',
      'tanda-tangan-pasien': data.doctors_consent?.Tanda_Tangan_Pasien ?? '',
      'tanda-tangan-saksi-2': data.doctors_consent?.Tanda_Tangan_Saksi_2 ?? '',
      'tanda-tangan-saksi': data.doctors_consent?.Tanda_Tangan_Saksi ?? '',
      'id-saksi': data.doctors_consent?.ID_Saksi ?? '',
      dokter_pelaksana: data.doctors_consent?.Dokter_Pelaksana ?? '',
      nama_wali: data.information_provision?.Nama_Wali ?? treatment?.Wali.Nama,
      tanggal_ttd: (data && data.doctors_consent && data.doctors_consent.Tanggal_TTD) ? data.doctors_consent.Tanggal_TTD.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      nama_template: data.information_provision?.Nama_Template ?? '',
    },
  })

  const toggle = (tab: string) => {
    if (activeTab && activeTab !== tab) {
      setActiveTab(tab);
    }
  }

  const handleSubmitForm = (value: IUpdateInformConsentRequest) => {
    if (!treatment) {
      return;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = { ...appRequest, ...value }
    dispatch(handlePdf(undefined));
    InformConsentService().update(params)
      .then((resp: any) => {
        const { data } = resp.data;
        const provision = data.information_provision;
        const consent = data.doctors_consent;
        InformConsentService().pdfNew(PdfInformConsentRequest.createPdfRequest(provision, consent, treatment))
          .then(() => {
            dispatch(fetchInformConsentPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'inform-consent' })));
          })
          .catch((err) => {
            setProcessing(false);
          })
        dispatch(fetchInformConsent(appRequest));
        setProcessing(false);
      })
  }
  return (
    <Fragment>
      <Nav tabs className="mt-2">
        <NavItem>
          <NavLink className={(activeTab && activeTab === '1') ? 'active' : ''} onClick={() => toggle('1')}>
            Formulir Pemberian Informasi
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={(activeTab && activeTab === '2') ? 'active' : ''} onClick={() => toggle('2')}>
            Persetujuan Tindakan Dokter
          </NavLink>
        </NavItem>
      </Nav>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        {
          data.information_provision && (
            <ProvisionOfInformationTab
              data={data.information_provision}
              {...{ register, setValue, activeTab }}
            />
          )
        }
        {
          data.doctors_consent && (
            <DoctorsConsentTab
              data={data.doctors_consent}
              {...{ register, setValue, activeTab }}
            />
          )
        }
        <FormGroup className="d-flex mb-0 mt-2 justify-content-center">
          <SubmitButton
            label="Simpan"
            buttonColor='primary'
            spinnerColor='light'
            processing={processing}
            spinnerStyle={{ width: '1rem', height: '1rem' }}
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
        <FormGroup className='form-group mt-0' row>
          <div className='d-flex justify-content-center align-items-center'>
            <Label className='me-1'>Terakhir disimpan: </Label>
            <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.doctors_consent?.Updated_At)}` }</Label>
          </div>
        </FormGroup>
      </Form>
    </Fragment>
  )
}

export default InformConsentForm;
