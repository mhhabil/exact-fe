import { Button, Col, Form, FormGroup, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import { Slide, toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import Image from 'next/image';
import { SubmitButton } from "@src/shared/button";
import { useForm } from "react-hook-form";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { ChartImageService } from "@src/shared/grid-chart/services";
import { useDropzone } from "react-dropzone";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { AppRequest } from "@src/shared/request";
import { useWarnIfUnsavedChanges } from "@src/shared/alert";
import {fetchGeneralConsentPdf} from '@modules/information/general-consent/stores/general-consent.store';
import {FindPdfRequest, IPdfModel} from '@shared/pdf';
import NursingAssessment from "./form-pengkajian-keperawatan/nursing-assessment-form";
import Nursing from "./form-pengkajian-keperawatan/nursing-form";
import ContactableRelativesForm from "./form-pengkajian-keperawatan/contactable-relatives-form";
import OphthalmologistExaminationForm from "./form-pemeriksaan-dokter-mata/ophthalmologist-examination-form";
import DoctorMedicalExamination from "./form-pengkajian-medis-dokter/doctor-medical-examination";
import { AssessmentUgdModel } from "../models/assessment-ugd-models";
import { IUpdateAssessmentUgdRequest, UpdateAssessmentUgdRequest } from "../requests";
import { fetchAssessmentUgd, fetchAssessmentUgdPdf, handlePdf } from "../stores/assessment-ugd.store";
import { AssessmentUgdService } from "../services";
import triaseSekunder from "../const/triase-sekunder";
// import { ArrayPrescription } from "@src/modules/outpatient/doctor-preliminary-study/requests/update-doctor-preliminary-study.request";
import { ArrayPrescription, ArrayPrescriptionUmum } from "../requests/update-assessment-ugd.request";
import {PdfAssesmentUgd} from '@modules/emergency-room/assessment/requests/pdf-assement-ugd.request';
import { PrescriptionToast } from "@src/shared/alert/components";
import { DateTimeConverter } from "@src/shared/datetime-converter";


const AssesmentUgdForm = (props: { data: AssessmentUgdModel }) => {
  const { data } = props;

  const dispatch = useAppDispatch();

  const { treatment } = useAppSelector(state => state.patient);
  const [defaultPattern, setDefaultPattern] = useState<any>();
  const [activeTab, setActiveTab] = useState<string>('1')
  const [processing, setProcessing] = useState(false);
  const { companyCode, companies } = useAppSelector(state => state.selectCompany);
  const { pdf } = useAppSelector(state => state.assessmentUgdStore);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);

  const getTriage = (warna: string) => {
    if (triaseSekunder && warna) {
      const selectedTriage = triaseSekunder.find((val: any) => val.name === warna)
      if (selectedTriage) {
        return selectedTriage.id;
      }
    } else {
      return '';
    }
  }

  useEffect(() => {
    if (treatment) {
      dispatch(fetchAssessmentUgdPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'asessmen-ugd' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  const { register, handleSubmit, setValue, getValues, control, unregister, errors, formState, reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(UpdateAssessmentUgdRequest.schema()),
    defaultValues: {
      "triase-radio": getTriage(data?.form?.Triase_Sekunder),
      "kesadaran-radio": (data && data.form && data.form.Kesadaran_Value) ? data.form.Kesadaran_Value : '',
      "pernafasan-radio": (data && data.form && data.form.Pernafasan_Value) ? data.form.Pernafasan_Value : '',
      "sirkulasi-radio": data?.form?.Sirkulasi_Value ?? '',
      "pertolongan-pertama": data?.form?.Pertolongan_Pertama ?? '',
      "tindakan-resusitasi": data?.form?.Tindakan_Resusitasi ?? '',
      "jalanNafas-radio": data?.form?.Jalan_Nafas_Value ?? '',
      "bantuanNafas-radio": data?.form?.Bantuan_Nafas_Value ?? '',
      "sirkulasiResusitasi-radio": data?.form?.Sirkulasi_Resusitasi_Value ?? '',
      "gcs-e": data?.form?.GCS_E ?? '',
      "gcs-e-text": data?.form?.GCS_E_Teks ?? '',
      "gcs-m": data?.form?.GCS_M ?? '',
      "gcs-m-text": data?.form?.GCS_M_Teks ?? '',
      "gcs-v": data?.form?.GCS_V ??  '',
      "gcs-v-text": data?.form?.GCS_V_Teks ?? '',
      "gcs-score": data?.form?.GCS_Score ?? '',
      "vital-respiratory-rate": data?.form?.Vital_Respiratory_Rate ?? '',
      "vital-denyut-nadi": data?.form?.Vital_Denyut_Nadi ?? '',
      "vital-tekanan-darah": data?.form?.Vital_Tekanan_Darah ?? '',
      "vital-kesadaran": data?.form?.Vital_Kesadaran ?? '',
      "vital-suhu": data?.form?.Vital_Suhu ?? '',
      "skala-nyeri": data?.form?.Skala_Nyeri ?? '',
      "alergi-makanan": data?.form?.Alergi_Makanan ?? '',
      "alergi-obat": data?.form?.Alergi_Obat ?? '',
      "alergi-lainnya": data?.form?.Alergi_Lainnya ?? '',
      "kedatangan-pasien": data?.form?.Kedatangan_Pasien ?? '',
      "asal-informasi-radio": data?.form?.Asal_Informasi ?? '',
      "asal-informasi-hubungan": data?.form?.Asal_Informasi_Hubungan ?? '',
      "penyakit-terdahulu": data?.form?.Penyakit_Terdahulu ?? '',
      "pengobatan-terdahulu": data?.form?.Pengobatan_Terdahulu ?? '',
      "pengkajian-fungsi-radio": data?.form?.Pengkajian_Fungsi ?? '',
      "penilaian-risiko-jatuh-radio": data?.form?.Penilaian_Risiko_Jatuh ?? '',
      "risiko-jatuh-ibu-hamil": data?.form?.Risiko_Jatuh_Ibu_Hamil ?? '',
      "risiko-jatuh-lanjut-usia": data?.form?.Risiko_Jatuh_Lanjut_Usia ?? '',
      "risiko-jatuh-alat-bantu": data?.form?.Risiko_Jatuh_Alat_Bantu ?? '',
      "status-kehamilan-radio": data?.form?.Status_Kehamilan ?? '',
      "status-kehamilan-gravida": data?.form?.Status_Kehamilan_Gravida ?? '',
      "status-kehamilan-para": data?.form?.Status_Kehamilan_Para ?? '',
      "status-kehamilan-abortus": data?.form?.Status_Kehamilan_Abortus ?? '',
      "status-kehamilan-hpht": data?.form?.Status_Kehamilan_HPHT ?? '',
      "nutrisi-tinggi": data?.form?.Nutrisi_Tinggi ?? '',
      "nutrisi-berat": data?.form?.Nutrisi_Berat ?? '',
      "penurunan-berat-badan-radio": data?.form?.Penurunan_Berat_Badan ?? '',
      "penurunan-berat-badan-nilai-radio":  data?.form?.Penurunan_Berat_Badan_Nilai ?? '',
      "penurunan-nafsu-makan-radio": data?.form?.Penurunan_Nafsu_Makan ?? '',
      "nutrisi-diagnosa-khusus": data?.form?.Nutrisi_Diagnosa_Khusus ?? '',
      "nutrisi-diagnosa-khusus-keterangan": data?.form?.Nutrisi_Diagnosa_Khusus_Keterangan ?? '',
      "nutrisi-total-skor": data?.form?.Nutrisi_Total_Skor ?? '',
      "nutrisi-lebih-lanjut": data?.form?.Nutrisi_Lebih_Lanjut ?? '',
      "psikologis-cemas": data?.form?.Psikologis_Cemas ?? '',
      "psikologis-takut": data?.form?.Psikologis_Takut ?? '',
      "psikologis-marah": data?.form?.Psikologis_Marah ?? '',
      "psikologis-sedih": data?.form?.Psikologis_Sedih ?? '',
      "psikologis-kecenderungan-bunuh-diri":  data?.form?.Psikologis_Kecenderungan_Bunuh_Diri ?? '',
      "psikologis-lain-lain": data?.form?.Psikologis_Lain_Lain ?? '',
      "psikologis-lain-lain-keterangan": data?.form?.Psikologis_Lain_Lain_Keterangan ?? '',
      "mental-sadar": data?.form?.Mental_Sadar ??  '',
      "mental-perilaku": data?.form?.Mental_Perilaku ?? '',
      "mental-perilaku-keterangan": data?.form?.Mental_Perilaku_Keterangan ?? '',
      "mental-kekerasan": data?.form?.Mental_Kekerasan ?? '',
      "mental-kekerasan-keterangan": data?.form?.Mental_Kekerasan_Keterangan ?? '',
      "kerabat-nama": data && data.form && data.form.Kerabat_Nama ? treatment?.Wali?.Nama : treatment?.Wali?.Nama,
      "kerabat-hubungan": data && data.form && data.form.Kerabat_Hubungan ? treatment?.Wali?.Hubungan : treatment?.Wali?.Hubungan,
      "kerabat-telepon": data && data.form && data.form.Kerabat_Telepon ? treatment?.Wali?.No_Telepon : treatment?.Wali?.No_Telepon,
      "spiritual-agama": data?.form?.Spiritual_Agama ?? '',
      "keperawatan-diagnosa-0": data?.form?.Keperawatan_Diagnosa_0 ?? '',
      "keperawatan-rencana-0": data?.form?.Keperawatan_Rencana_0 ?? '',
      "keperawatan-diagnosa-1": data?.form?.Keperawatan_Diagnosa_1 ?? '',
      "keperawatan-rencana-1": data?.form?.Keperawatan_Rencana_1 ?? '',
      "keperawatan-diagnosa-2": data?.form?.Keperawatan_Diagnosa_2 ?? '',
      "keperawatan-rencana-2": data?.form?.Keperawatan_Rencana_2 ?? '',
      "keperawatan-diagnosa-3": data?.form?.Keperawatan_Diagnosa_3 ?? '',
      "keperawatan-rencana-3": data?.form?.Keperawatan_Rencana_3 ?? '',
      "keperawatan-diagnosa-4": data?.form?.Keperawatan_Diagnosa_4 ?? '',
      "keperawatan-rencana-4": data?.form?.Keperawatan_Rencana_4 ?? '',
      "keperawatan-diagnosa-5": data?.form?.Keperawatan_Diagnosa_5 ?? '',
      "keperawatan-rencana-5": data?.form?.Keperawatan_Rencana_5 ?? '',
      "keperawatan-diagnosa-6": data?.form?.Keperawatan_Diagnosa_6 ?? '',
      "keperawatan-rencana-6": data?.form?.Keperawatan_Rencana_6 ?? '',
      "keperawatan-diagnosa-7": data?.form?.Keperawatan_Diagnosa_7 ?? '',
      "keperawatan-rencana-7": data?.form?.Keperawatan_Rencana_7 ?? '',
      "keperawatan-diagnosa-lainnya": data?.form?.Keperawatan_Diagnosa_Lainnya ?? '',
      "keperawatan-rencana-lainnya": data?.form?.Keperawatan_Rencana_Lainnya ??  '',
      "pengkajian-subjektif": (data && data.form && data.form.Pengkajian_Subjektif) ? data.form.Pengkajian_Subjektif : '',
      "pengkajian-kepala": (data && data.form && data.form.Pengkajian_Kepala) ? data.form.Pengkajian_Kepala : '',
      "pengkajian-mata": data?.form?.Pengkajian_Mata ?? '',
      "pengkajian-od-va": data?.form?.Pengkajian_OD_VA ?? '',
      "pengkajian-os-va": data?.form?.Pengkajian_OS_VA ?? '',
      "pengkajian-od-tonometri": data?.form?.Pengkajian_OD_Tonometri ??  '',
      "pengkajian-os-tonometri": data?.form?.Pengkajian_OS_Tonometri ?? '',
      "pengkajian-telinga": data?.form?.Pengkajian_Telinga ?? '',
      "pengkajian-hidung": data?.form?.Pengkajian_Hidung ?? '',
      "pengkajian-gigi": data?.form?.Pengkajian_Gigi ?? '',
      "pengkajian-tenggorokan": data?.form?.Pengkajian_Tenggorokan ?? '',
      "pengkajian-leher": data?.form?.Pengkajian_Leher ?? '',
      "pengkajian-dada": data?.form?.Pengkajian_Dada ?? '',
      "pengkajian-jantung": data?.form?.Pengkajian_Jantung ?? '',
      "pengkajian-paru": data?.form?.Pengkajian_Paru ?? '',
      "pengkajian-abdomen": data?.form?.Pengkajian_Abdomen ?? '',
      "pengkajian-genitalia": data?.form?.Pengkajian_Genitalia ?? '',
      "pengkajian-kandungan": data?.form?.Pengkajian_Kandungan ?? '',
      "pengkajian-eks-atas": data?.form?.Pengkajian_Eks_Atas ?? '',
      "pengkajian-eks-bawah": data?.form?.Pengkajian_Eks_Bawah ?? '',
      "pengkajian-pemeriksaan-penunjang": data?.form?.Pengkajian_Pemeriksaan_Penunjang ?? '',
      "pengkajian-assesmen": data?.form?.Pengkajian_Assesmen ?? '',
      "pengkajian-terapi-penatalaksaan": data?.form?.Pengkajian_Terapi_Penatalaksaan ??  '',
      "pengkajian-anjuran": data?.form?.Pengkajian_Anjuran ?? '',
      "ttd-dokter-pengkaji": data?.form?.TTD_Dokter_Pengkaji ?? '',
      "pengkajian-dokter": data?.form?.ID_Pengkajian_Dokter ?? '',
      "gambar-mata-od": data?.form?.Gambar_Mata_OD ?? '',
      "gambar-mata-os": data?.form?.Gambar_Mata_OS ?? '',
      "dokter-mata-posisi-od": data.form && data.form.Dokter_Mata_Posisi_OD ? data.form.Dokter_Mata_Posisi_OD : data.isDefault ? 'Ortho' : '',
      "dokter-mata-posisi-os": data.form && data.form.Dokter_Mata_Posisi_OS ? data.form.Dokter_Mata_Posisi_OS : data.isDefault ? 'Ortho' : '',
      "dokter-mata-pergerakan-od": data.form && data.form.Dokter_Mata_Pergerakan_OD ? data.form.Dokter_Mata_Pergerakan_OD : data.isDefault ? 'Baik kesemua arah' : '',
      "dokter-mata-pergerakan-os": data.form && data.form.Dokter_Mata_Pergerakan_OS ? data.form.Dokter_Mata_Pergerakan_OS : data.isDefault ? 'Baik kesemua arah' : '',
      "dokter-mata-palpebra-superior-od": data.form && data.form.Dokter_Mata_Palpebra_Superior_OD ? data.form.Dokter_Mata_Palpebra_Superior_OD : data.isDefault ? 'DBN' : '',
      "dokter-mata-palpebra-superior-os": data.form && data.form.Dokter_Mata_Palpebra_Superior_OS ? data.form.Dokter_Mata_Palpebra_Superior_OS : data.isDefault ? 'DBN' : '',
      "dokter-mata-conj-tarsal-superior-od": data.form && data.form.Dokter_Mata_Conj_Tarsal_Superior_OD ? data.form.Dokter_Mata_Conj_Tarsal_Superior_OD : data.isDefault ? 'DBN' : '',
      "dokter-mata-conj-tarsal-superior-os": data.form && data.form.Dokter_Mata_Conj_Tarsal_Superior_OS ? data.form.Dokter_Mata_Conj_Tarsal_Superior_OS : data.isDefault ? 'DBN' : '',
      "dokter-mata-conj-tarsal-inferior-od": data.form && data.form.Dokter_Mata_Conj_Tarsal_Inferior_OD ? data.form.Dokter_Mata_Conj_Tarsal_Inferior_OD : data.isDefault ? 'DBN' : '',
      "dokter-mata-conj-tarsal-inferior-os": data.form && data.form.Dokter_Mata_Conj_Tarsal_Inferior_OS ? data.form.Dokter_Mata_Conj_Tarsal_Inferior_OS : data.isDefault ? 'DBN' : '',
      "dokter-mata-conj-bulbi-od": data.form && data.form.Dokter_Mata_Conj_Bulbi_OD ? data.form.Dokter_Mata_Conj_Bulbi_OD : data.isDefault ? 'DBN' : '',
      "dokter-mata-conj-bulbi-os": data.form && data.form.Dokter_Mata_Conj_Bulbi_OS ? data.form.Dokter_Mata_Conj_Bulbi_OS : data.isDefault ? 'DBN' : '',
      "dokter-mata-cornea-od": data.form && data.form.Dokter_Mata_Cornea_OD ? data.form.Dokter_Mata_Cornea_OD : data.isDefault ? 'Jernih' : '',
      "dokter-mata-cornea-os": data.form && data.form.Dokter_Mata_Cornea_OS ? data.form.Dokter_Mata_Cornea_OS : data.isDefault ? 'Jernih' : '',
      "dokter-mata-coa-od": data.form && data.form.Dokter_Mata_COA_OD ? data.form.Dokter_Mata_COA_OD : data.isDefault ? 'DBN' : '',
      "dokter-mata-coa-os": data.form && data.form.Dokter_Mata_COA_OS ? data.form.Dokter_Mata_COA_OS : data.isDefault ? 'DBN' : '',
      "dokter-mata-pupil-od": data.form && data.form.Dokter_Mata_Pupil_OD ? data.form.Dokter_Mata_Pupil_OD : data.isDefault ? 'Bulat, Regular, RC +' : '',
      "dokter-mata-pupil-os": data.form && data.form.Dokter_Mata_Pupil_OS ? data.form.Dokter_Mata_Pupil_OS : data.isDefault ? 'Bulat, Regular, RC +' : '',
      "dokter-mata-iris-od": data.form && data.form.Dokter_Mata_Iris_OD ? data.form.Dokter_Mata_Iris_OD : data.isDefault ? 'DBN' : '',
      "dokter-mata-iris-os": data.form && data.form.Dokter_Mata_Iris_OS ? data.form.Dokter_Mata_Iris_OS : data.isDefault ? 'DBN' : '',
      "dokter-mata-lensa-od": data.form && data.form.Dokter_Mata_Lensa_OD ? data.form.Dokter_Mata_Lensa_OD : data.isDefault ? 'Jernih' : '',
      "dokter-mata-lensa-os": data.form && data.form.Dokter_Mata_Lensa_OS ? data.form.Dokter_Mata_Lensa_OS : data.isDefault ? 'Jernih' : '',
      "dokter-mata-vitreous-od": data.form && data.form.Dokter_Mata_Vitreous_OD ? data.form.Dokter_Mata_Vitreous_OD : data.isDefault ? 'DBN' : '',
      "dokter-mata-vitreous-os": data.form && data.form.Dokter_Mata_Vitreous_OS ? data.form.Dokter_Mata_Vitreous_OS : data.isDefault ? 'DBN' : '',
      "dokter-mata-funduscopy-od": data.form && data.form.Dokter_Mata_Funduscopy_OD ? data.form.Dokter_Mata_Funduscopy_OD : data.isDefault ? 'DBN' : '',
      "dokter-mata-funduscopy-os": data.form && data.form.Dokter_Mata_Funduscopy_OS ? data.form.Dokter_Mata_Funduscopy_OS : data.isDefault ? 'DBN' : '',
      "dokter-mata-diagnosa": data?.form?.Dokter_Mata_Diagnosa ?? '',
      "dokter-mata-terapi": data?.form?.Dokter_Mata_Terapi ?? '',
      "dokter-mata-rencana-pengobatan": data?.form?.Dokter_Mata_Rencana_Pengobatan ?? '',
      "dokter-mata-anjuran": data?.form?.Dokter_Mata_Anjuran ?? '',
      "ttd-dokter-mata": data?.form?.TTD_Dokter_Mata ?? '',
      "dokter-mata-dokter": data?.form?.ID_Dokter_Mata_Dokter ?? '',
      ttd_perawat: data?.form?.TTD_Perawat ?? '',
      id_perawat: data?.form?.ID_Perawat ?? '',
    },
  });

  const { isDirty } = formState;

  useWarnIfUnsavedChanges(isDirty, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  const [files, setFiles] = useState<any>([])

  const toggle = (tab: string) => {
    if (activeTab && activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const storeToastPrescription = (response: any) => {
    if (response && response.data && response.data.prescription) {
      const presc = response.data.prescription;
      if (!presc.statusCode && presc.message && presc.message === 'socket not found') {
        toast.error(
          <PrescriptionToast error={true} message='Resep gagal terkirim ke SIMRS. Silahkan simpan ulang form!!!'/>,
          { transition: Slide, icon: false, hideProgressBar: true, autoClose: 7000, position: toast.POSITION.TOP_CENTER, className:'bg-danger' },
        )
      }
      if (presc.statusCode && presc.statusCode === 400) {
        toast.warning(
          <PrescriptionToast error={true} message='Resep gagal terkirim ke SIMRS. Resep sudah ditebus.'/>,
          { transition: Slide, icon: false, hideProgressBar: true, autoClose: 7000, position: toast.POSITION.TOP_CENTER, className: 'bg-warning' },
        )
      }
      if (presc.statusCode && presc.statusCode === 200) {
        toast.success(
          <PrescriptionToast error={false} message='Resep berhasil terkirim ke SIMRS.'/>,
          { transition: Slide, icon: false, hideProgressBar: true, autoClose: 7000, position: toast.POSITION.TOP_CENTER, className: 'bg-success' },
        )
      }
    }
  }
  
  const storeToastPrescriptionUmum = (response: any) => {
    if (response && response.data && response.data.prescription) {
      const presc = response.data.prescription;
      if (!presc.statusCode && presc.message && presc.message === 'socket not found') {
        toast.error(
          <PrescriptionToast error={true} message='Resep Umum gagal terkirim ke SIMRS. Silahkan simpan ulang form!!!'/>,
          { transition: Slide, hideProgressBar: true, autoClose: 7000 },
        )
      }
      if (presc.statusCode && presc.statusCode === 400) {
        toast.warning(
          <PrescriptionToast error={true} message='Resep Umum gagal terkirim ke SIMRS. Resep sudah ditebus.'/>,
          { transition: Slide, hideProgressBar: true, autoClose: 7000 },
        )
      }
      if (presc.statusCode && presc.statusCode === 200) {
        toast.success(
          <PrescriptionToast error={false} message='Resep Umum berhasil terkirim ke SIMRS.'/>,
          { transition: Slide, hideProgressBar: true, autoClose: 7000 },
        )
      }
    }
  }

  const handleSubmitForm = (value: IUpdateAssessmentUgdRequest) => {
    if (!treatment) {
      return;
    }
    setProcessing(true);
    const val: any = value as any;
    const resep = val.resep;
    const resepUmum = val.resepUmum;
    // reset(value);
    const prescriptionModel = ArrayPrescription.createFromForm(resep, data?.aturan_pakai);
    const prescriptionModelUmum = ArrayPrescriptionUmum.createFromForm(resepUmum, data?.aturan_pakai);

    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateAssessmentUgdRequest.createFromJson({...value, ...appRequest,  ...prescriptionModel,  ...prescriptionModelUmum});

    dispatch(handlePdf(undefined));
    AssessmentUgdService().update(params)
      .then((response: any) => {
        storeToastPrescription(response);
        AssessmentUgdService().show(appRequest).then((response) => {
          if (response && response.data && response.data.data) {
            AssessmentUgdService().pdfv3(PdfAssesmentUgd.createPdfRequest({...response.data.data, nomor_mr: appRequest.nomor_mr, umur_lengkap: treatment.Pasien?.Umur_Lengkap}, appRequest.emr_id))
              .then(() => {
                setProcessing(false);
                dispatch(fetchAssessmentUgdPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'asessmen-ugd' })));
                return true;
              })
          }
        });
        dispatch(fetchAssessmentUgd(appRequest));
        setProcessing(false);
      });
  }

  return (
    <div>
      <Nav tabs className="mt-2">
        <NavItem>
          <NavLink className={(activeTab && activeTab === '1') ? 'active' : ''} onClick={() => toggle('1')}>
            Pengkajian Keperawatan
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={(activeTab && activeTab === '2') ? 'active' : ''} onClick={() => toggle('2')}>
            Pengkajian Medis Dokter
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={(activeTab && activeTab === '3') ? 'active' : ''} onClick={() => toggle('3')}>
            Pemeriksaan Dokter Mata
          </NavLink>
        </NavItem>
      </Nav>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        {/* pertama */}
        <NursingAssessment
          data={data}
          activeTab={activeTab}
          processing={processing}
          defaultPattern={defaultPattern}
          {...{ register, errors, setValue, getValues }}
        />
        <Nursing
          data={data}
          activeTab={activeTab}
          processing={processing}
          defaultPattern={defaultPattern}
          {...{ register, errors, setValue, getValues }}
        />
        <ContactableRelativesForm
          data={data}
          activeTab={activeTab}
          processing={processing}
          defaultPattern={defaultPattern}
          {...{ register, errors, setValue, getValues }}
        />
        {/* kedua */}
        <DoctorMedicalExamination
          data={data}
          activeTab={activeTab}
          processing={processing}
          defaultPattern={defaultPattern}
          {...{ register, errors, setValue, getValues, control, unregister }}
        />
        {/* KETIGA */}
        <OphthalmologistExaminationForm
          data={data}
          activeTab={activeTab}
          processing={processing}
          defaultPattern={defaultPattern}
          pdfData={pdfData}
          {...{ register, errors, setValue, getValues, control, unregister }}
        />

        <FormGroup className="d-flex mb-0 justify-content-center mt-2">
          <SubmitButton
            label="Simpan"
            buttonColor='primary'
            spinnerStyle={{ width: '1rem', height: '1rem' }}
            spinnerColor='light'
            processing={processing}
          />
          {
            pdfData && Array.isArray(pdfData) && pdfData.length > 0 && (
              <a color='success' href={`${pdfData[0]?.URL}`} target="_blank" rel="noreferrer">
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
            {/* <Label>{(data && data.form && data.form.Updated_At) ? data.form.Updated_At : ''}</Label> */}
            <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
          </div>
        </FormGroup>
      </Form>
    </div>
  );

}

export default AssesmentUgdForm;

