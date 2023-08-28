import { Button, Form, FormGroup, Label, Nav, NavItem, NavLink } from "reactstrap";
import { Fragment, useEffect, useState } from "react";
// import { fetchInformConsent, fetchInformConsentPdf, handlePdf } from "../stores/inform-consent.store";
import { AppRequest } from "@src/shared/request";
import { ApprovalOrRefusalOfAnestheticActionModel } from "../models/approval-or-refusal-of-anesthetic-action-model";
import { ApprovalOrRefusalOfAnestheticActionService } from "../services";
import { SubmitButton } from "@src/shared/button";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useForm } from "react-hook-form";
import DoctorsConsentInPatient from "./doctor-consent-tab";
import { fetchApprovalOrRefusalOfAnestheticAction, fetchApprovalOrRefusalOfAnestheticActionPdf, handlePdf } from "../stores/approval-or-refusal-of-anesthetic-action.store";
import { IUpdateApprovalOrRefusalOfAnestheticActionRequest, UpdateApprovalOrRefusalOfAnestheticActionRequest } from "../requests/approval-or-refusal-of-anesthetic-action-request";
import ProvisionOfInformationTabInPatient from "./provision-of-information-tab";
import { FindPdfRequest } from "@src/shared/pdf";
import { PdfApprovalOrRefusalOfAnestheticActionRequest } from "../requests/pdf-approval-or-refusal-of-anesthetic-action-request";
import { DateTimeConverter } from "@src/shared/datetime-converter";

const InformConsentFormInPatient = (props: { data: ApprovalOrRefusalOfAnestheticActionModel }) => {
  const { data } = props;
  const dispatch = useAppDispatch();
  const { treatment } = useAppSelector(state => state.patient);
  const { pdf } = useAppSelector(state => state.approvalOrRefusalOfAnestheticActionStore);
  const [activeTab, setActiveTab] = useState('1')
  const [processing, setProcessing] = useState(false);
  const [pdfData, setPdfData] = useState<any | undefined>(undefined);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchApprovalOrRefusalOfAnestheticActionPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_persetujuan-tindakan-anestesi' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf]);

  const { register, setValue, reset, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      id_dokter_pelaksana: data?.form?.ID_Dokter_Pelaksana ?? '',
      id_pemberi_informasi: data?.form?.ID_Pemberi_Informasi ?? '',
      penerima_informasi: data?.form && data?.form?.Penerima_Informasi && data?.form?.Penerima_Informasi === 'Pasien' ? '1' : data?.form && data?.form?.Penerima_Informasi && data?.form?.Penerima_Informasi === 'Wali' ? '2' : '',
      diagnosis_check: data?.form?.Diagnosis_Check ?? '',
      dasar_diagnosis_check: data?.form?.Dasar_Diagnosis_Check ?? '',
      dasar_klinis: data?.form?.Dasar_Klinis ?? '',
      dasar_radiologi: data?.form?.Dasar_Radiologi ?? '',
      dasar_ekg: data?.form?.Dasar_EKG ?? '',
      dasar_laboratorium: data?.form?.Dasar_Laboratorium ?? '',
      tindakan_kedokteran_check: data?.form?.Tindakan_Kedokteran_Check ?? '',
      anestesi_umum_intubasi_check: data?.form?.Anestesi_Umum_Intubasi_Check ?? '',
      anestesi_umum_lma_check: data?.form?.Anestesi_Umum_LMA_Check ?? '',
      anestesi_umum_fm_check: data?.form?.Anestesi_Umum_FM_Check ?? '',
      anestesi_umum_tiva_check: data?.form?.Anestesi_Umum_TIVA_Check ?? '',
      anestesi_regional_spinal_check: data?.form?.Anestesi_Regional_Spinal_Check ?? '',
      anestesi_regional_epidural_check: data?.form?.Anestesi_Regional_Epidural_Check ?? '',
      anestesi_regional_perifer_check: data?.form?.Anestesi_Regional_Perifer_Check ?? '',
      indikasi_tindakan_tujuan_check: data?.form?.Indikasi_Tindakan_Tujuan_Check ?? '',
      tata_cara_tindakan_check: data?.form?.Tata_Cara_Tindakan_Check ?? '',
      tata_cara_tindakan: data?.form?.Tata_Cara_Tindakan ?? '',
      risiko_check: data?.form?.Risiko_Check ?? '',
      shock_check: data?.form?.Shock_Check ?? '',
      henti_jantung_check: data?.form?.Henti_Jantung_Check ?? '',
      meninggal_check: data?.form?.Meninggal_Check ?? '',
      tujuan_check: data?.form?.Tujuan_Check ?? '',
      tujuan: data?.form?.Tujuan ?? '',
      komplikasi_check:  data?.form?.Komplikasi_Check ?? '',
      komplikasi_umum_1: data?.form?.Komplikasi_Umum_1 ?? '',
      komplikasi_umum_2: data?.form?.Komplikasi_Umum_2 ?? '',
      komplikasi_umum_3: data?.form?.Komplikasi_Umum_3 ?? '',
      komplikasi_umum_4: data?.form?.Komplikasi_Umum_4 ?? '',
      komplikasi_umum_5: data?.form?.Komplikasi_Umum_5 ?? '',
      komplikasi_umum_6: data?.form?.Komplikasi_Umum_6 ?? '',
      komplikasi_umum_7: data?.form?.Komplikasi_Umum_7 ?? '',
      komplikasi_umum_8: data?.form?.Komplikasi_Umum_8 ?? '',
      komplikasi_umum_9: data?.form?.Komplikasi_Umum_9 ?? '',
      komplikasi_umum_10: data?.form?.Komplikasi_Umum_10 ?? '',
      komplikasi_regional_1: data?.form?.Komplikasi_Regional_1 ?? '',
      komplikasi_regional_2: data?.form?.Komplikasi_Regional_2 ?? '',
      komplikasi_regional_3: data?.form?.Komplikasi_Regional_3 ?? '',
      komplikasi_regional_4: data?.form?.Komplikasi_Regional_4 ?? '',
      komplikasi_regional_5: data?.form?.Komplikasi_Regional_5 ?? '',
      komplikasi_regional_6: data?.form?.Komplikasi_Regional_6 ?? '',
      komplikasi_regional_7: data?.form?.Komplikasi_Regional_7 ?? '',
      komplikasi_regional_8: data?.form?.Komplikasi_Regional_8 ?? '',
      komplikasi_regional_9: data?.form?.Komplikasi_Regional_9 ?? '',
      komplikasi_regional_10: data?.form?.Komplikasi_Regional_10 ?? '',
      komplikasi_regional_11: data?.form?.Komplikasi_Regional_11 ?? '',
      komplikasi_regional_12: data?.form?.Komplikasi_Regional_12 ?? '',
      prognosis_check: data?.form?.Prognosis_Check ?? '',
      prognosis: data?.form?.Prognosis ?? '',
      alternatif_tindakan_check: data?.form?.Alternatif_Tindakan_Check ?? '',
      alternatif_tindakan: data?.form?.Alternatif_Tindakan ?? '',
      lain_lain_check: data?.form?.Lain_Lain_Check ?? '',
      lain_lain: data?.form?.Lain_Lain ?? '',
      id_dokter_pelaksana_ttd: data?.form?.ID_Dokter_Pelaksana_TTD ?? '',
      ttd_dokter_pelaksana: data?.form?.TTD_Dokter_Pelaksana ?? '',
      ttd_penerima_informasi: data?.form?.TTD_Penerima_Informasi ?? '',

      pasien_nomor_mr: treatment?.No_MR ?? '',
      pasien_nama: treatment?.Pasien?.Nama ?? '',
      pasien_tgl_lahir: treatment?.Pasien?.Tgl_Lahir ?? '',
      pasien_jk: treatment?.Pasien.Jenis_Kelamin ?? '',
      tindakan_operasi: data?.form && data.form?.Tindakan_Operasi ? data?.form?.Tindakan_Operasi : data?.rawat_inap && data?.rawat_inap?.Nama_Paket_Operasi ? data?.rawat_inap?.Nama_Paket_Operasi : '',
      pernyataan:data?.form?.Pernyataan_Id ?? '',
      tanda_tangan_radio:data?.form && data?.form?.Tanda_Tangan && data?.form?.Tanda_Tangan === 'Pasien' ? '1' : data?.form && data?.form?.Tanda_Tangan && data?.form?.Tanda_Tangan === 'Wali' ? '2' : '1',
      tanda_tangan_nama: (data?.form && data?.form?.Tanda_Tangan_Nama) || (data?.form?.Tanda_Tangan_Nama === '') ? data.form?.Tanda_Tangan_Nama : treatment?.Pasien?.Nama,
      tanda_tangan_tgl_lahir: (data?.form && data?.form?.Tanda_Tangan_Tgl_Lahir) || (data?.form?.Tanda_Tangan_Tgl_Lahir === '') ? data?.form?.Tanda_Tangan_Tgl_Lahir : treatment?.Pasien?.Tgl_Lahir,
      tanda_tangan_jk: (data?.form && data?.form?.Tanda_Tangan_JK) || (data?.form?.Tanda_Tangan_JK === '') ? data?.form?.Tanda_Tangan_JK : treatment?.Pasien?.Jenis_Kelamin,
      tanda_tangan_telp: (data?.form && data?.form?.Tanda_Tangan_Telp) || (data?.form?.Tanda_Tangan_Telp === '') ? data?.form?.Tanda_Tangan_Telp : treatment?.Pasien?.No_Telepon,
      tanda_tangan_alamat: (data?.form && data?.form?.Tanda_Tangan_Alamat) || (data?.form?.Tanda_Tangan_Alamat === '') ? data?.form?.Tanda_Tangan_Alamat : treatment?.Pasien?.Alamat,
      tanda_tangan_hubungan: data.form && data.form.Tanda_Tangan_Hubungan ? data.form.Tanda_Tangan_Hubungan : '',
      // pasien_kota:
      pasien_tanggal: (data && data?.form && data?.form?.Pasien_Tanggal) ? data?.form?.Pasien_Tanggal.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      tanda_tangan_pasien: data?.form?.Tanda_Tangan_Pasien ?? '',
      tanda_tangan_saksi: data?.form?.Tanda_Tangan_Saksi ?? '',
      tanda_tangan_saksi_2: data?.form?.Tanda_Tangan_Saksi_2 ?? '',
      id_saksi: data?.form?.ID_Saksi ?? '',
      nama_saksi_keluarga: data.form?.Nama_Saksi_Keluarga ?? '',
    },
  })

  const toggle = (tab: string) => {
    if (activeTab && activeTab !== tab) {
      setActiveTab(tab);
    }
  }

  const handleSubmitForm = (value: IUpdateApprovalOrRefusalOfAnestheticActionRequest) => {
    if (!treatment) {
      return;
    }
    setProcessing(true)
    reset(value);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateApprovalOrRefusalOfAnestheticActionRequest.createFromJson({ ...value, ...appRequest });
    dispatch(handlePdf(undefined));
    ApprovalOrRefusalOfAnestheticActionService().update(params)
      .then(() => {
        ApprovalOrRefusalOfAnestheticActionService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            ApprovalOrRefusalOfAnestheticActionService().pdfNew(PdfApprovalOrRefusalOfAnestheticActionRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, treatment))
              .then(() => {
                setProcessing(false);
                dispatch(fetchApprovalOrRefusalOfAnestheticActionPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_persetujuan-tindakan-anestesi' })))
              })
          });
        setProcessing(false);
        dispatch(fetchApprovalOrRefusalOfAnestheticAction(AppRequest.createFromStore(treatment)));
      });
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
        <ProvisionOfInformationTabInPatient
          data={data}
          {...{ register, setValue, activeTab }}
        />
        <DoctorsConsentInPatient
          data={data}
          {...{ register, setValue, activeTab }}
        />
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
            <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
          </div>
        </FormGroup>
      </Form>
    </Fragment>
  )
}

export default InformConsentFormInPatient;
