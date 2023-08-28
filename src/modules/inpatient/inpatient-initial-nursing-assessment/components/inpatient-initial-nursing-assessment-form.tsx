import { AssessmentUgdModel } from '@modules/emergency-room/assessment/models/assessment-ugd-models';
import Image from 'next/image';

import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { DateTimeInput, SelectInput, TextInput } from '@shared/input';
import { FindPdfRequest, IPdfModel } from '@shared/pdf';
import {
  IUpdateInpatientInitialNursingAssessmentRequest,
  UpdateInpatientInitialNursingAssessmentRequest,
} from '@modules/inpatient/inpatient-initial-nursing-assessment/requests/update-inpatient-initial-nursing-assessment.request';
import {
  fetchInpatientInitialNursingAssessmentPdf,
  handlePdf,
} from '@modules/inpatient/inpatient-initial-nursing-assessment/stores/inpatient-initial-nursing-assessment.store';
import { useEffect, useState } from 'react';
import { AppRequest } from '@shared/request';
import { EyeImage } from '@shared/eye-image/components';
import { InpatientInitialNursingAssessment } from '@modules/inpatient/inpatient-initial-nursing-assessment/models/inpatient-initial-nursing-assessment.model';
import InpatientInitialNursingAssessmentService from '@modules/inpatient/inpatient-initial-nursing-assessment/services';
import { PdfInpatientInitialNursingAssessmentRequest } from '@modules/inpatient/inpatient-initial-nursing-assessment/requests/pdf-inpatient-initial-nursing-assessment.request';
import { Signature } from '@shared/signature/components';
import { SignatureModel } from '@shared/signature/models/signature.model';
import { SubmitButton } from '@shared/button';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import nilai from '@src/modules/outpatient/patient-handover-form/const/nilai';
import sampaisatu from '../const/sampaisatu';
import sampaidua from '../const/sampaidua';
import sampaitiga from '../const/sampaitiga';
import { DateTimeConverter } from "@src/shared/datetime-converter";

const InpatientInitialNursingAssessmentForm = (props: { data: InpatientInitialNursingAssessment, assessmentUgd: AssessmentUgdModel}) => {

  const { data, assessmentUgd } = props;

  const { pdf } = useAppSelector(state => state.inpatientInitialNursingAssessment);
  const { treatment } = useAppSelector(state => state.patient);
  const { officers } = useAppSelector(state => state.officer);

  const [processing, setProcessing] = useState(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const dispatch = useAppDispatch();

  const [jenisPenyakit, setJenisPenyakit] = useState<Array<any>>([]);
  const [nyeriHilang, setNyeriHilang] = useState<Array<any>>([]);
  const [jenisHambatan, setJenisHambatan] = useState<Array<any>>([]);
  const [topikPembelajaran, setTopikPembelajaran] = useState<Array<any>>([]);
  const [waktuPenilaian, setWaktuPenilaian] = useState(false);
  const [defaultPattern, setDefaultPattern] = useState<any>();
  const [riwayatAlergi, setRiwayatAlergi] = useState<any>(`${data?.form?.Riwayat_Alergi_Tidak_Check}`);
  const [pernahDirawat, setPernahDirawat] = useState<any>(`${data?.form?.Pernah_Dirawat}`);
  const [implantTerpasang, setImplantTerpasang] = useState<any>(`${data?.form?.Implant_Terpasang}`);
  const [psikologis, setPsikologis] = useState<any>(`${data?.form?.Status_Psikologis}`)
  const [mental, setMental] = useState<any>(`${data?.form?.Status_Mental}`);
  const [hubunganBaik, setHubunganBaik] = useState<any>(`${data?.form?.Hubungan_Pasien_Keluarga}`);
  const [tempatTinggal, setTempatTinggal] = useState<any>(`${data?.form?.Tempat_Tinggal}`);
  const [skalaNyeri, setSkalaNyeri] = useState<any>(`${data?.form?.Skala_Nyeri}`);
  const [jenis, setJenis] = useState<boolean>(!!(data?.form?.Jenis_Hambatan?.Penglihatan === 2));
  const [diagnosis, setDiagnosis] = useState<boolean>(!!(data?.form?.Topik_Pembelajaran?.Diagnosis_Manajemen_Penyakit === 1));
  const [obat, setObat] = useState<boolean>(!!(data?.form?.Topik_Pembelajaran?.Obat === 2));
  const [diet, setDiet] = useState<boolean>(!!(data?.form?.Topik_Pembelajaran?.Diet_Nutrisi === 3));
  const [tindakanKeperawatan, setTindakanKeperawatan] = useState<boolean>(!!(data?.form?.Topik_Pembelajaran?.Keperawatan === 4));
  const [manajemenNyeri, setManajemenNyeri] = useState<boolean>(!!(data?.form?.Topik_Pembelajaran?.Manajemen_Nyeri === 6));

  useEffect(() => {
    if (treatment) {
      dispatch(fetchInpatientInitialNursingAssessmentPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pengkajian-awal-keperawatan-dewasa' })));
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
    if (data && data.form) {
      setRiwayatAlergi(`${data?.form?.Riwayat_Alergi_Tidak_Check}`);
      setJenis(!!(data?.form?.Jenis_Hambatan?.Penglihatan === 2));
      setDiagnosis(!!(data?.form?.Topik_Pembelajaran?.Diagnosis_Manajemen_Penyakit === 1));
      setObat(!!(data?.form?.Topik_Pembelajaran?.Obat === 2));
      setDiet(!!(data?.form?.Topik_Pembelajaran?.Diet_Nutrisi === 3));
      setTindakanKeperawatan(!!(data?.form?.Topik_Pembelajaran?.Keperawatan === 4));
      setManajemenNyeri(!!(data?.form?.Topik_Pembelajaran?.Manajemen_Nyeri === 6));
    }
  }, [data])

  useEffect(() => {
    if (defaultPattern === '1') {
      const e = {
        target: {
          value: '1',
          checked: true,
        },
      }
      setValue('riwayat_alergi_tidak_check', '1');
      setRiwayatAlergi('1');
      setValue('pernah_dirawat', '0');
      setPernahDirawat('0');
      setValue('implant_terpasang', '0');
      setImplantTerpasang('0');
      setValue('psikologis', '5');
      setPsikologis('5');
      setValue('mental', '2');
      setMental('2');
      setValue('hubungan_pasien_keluarga', '0');
      setHubunganBaik('0');
      setValue('skala_nyeri', '0');
      setSkalaNyeri('0');
      handleJenisHambatan(e);
      setJenis(true);
      handleTopikPembelajaran(e);
      setDiagnosis(true);
      handleTopikPembelajaran(e);
      setObat(true);
      handleTopikPembelajaran(e);
      setDiet(true);
      handleTopikPembelajaran(e);
      setTindakanKeperawatan(true);
      handleTopikPembelajaran(e);
      setManajemenNyeri(true);
    } else if (defaultPattern === '0') {
      const e = {
        target: {
          value: '1',
          checked: false,
        },
      }
      setValue('riwayat_alergi_tidak_check', undefined);
      setRiwayatAlergi(undefined);
      setValue('pernah_dirawat', undefined);
      setPernahDirawat(undefined);
      setValue('implant_terpasang', undefined);
      setImplantTerpasang(undefined);
      setValue('psikologis', undefined);
      setPsikologis(undefined);
      setValue('mental', undefined);
      setMental(undefined);
      setValue('hubungan_pasien_keluarga', undefined);
      setHubunganBaik(undefined);
      setValue('tempat_tinggal', undefined);
      setTempatTinggal(undefined);
      setValue('skala_nyeri', undefined);
      setSkalaNyeri(undefined);
      handleJenisHambatan(e);
      setJenis(false);
      handleTopikPembelajaran(e);
      setDiagnosis(false);
      handleTopikPembelajaran(e);
      setObat(false);
      handleTopikPembelajaran(e);
      setDiet(false);
      handleTopikPembelajaran(e);
      setTindakanKeperawatan(false);
      handleTopikPembelajaran(e);
      setManajemenNyeri(false);
    }
  }, [defaultPattern]);

  useEffect(() => {
    if (treatment) {
      if (data?.form?.Waktu_Penilaian_Id && data?.form?.Waktu_Penilaian_Id !== '') {
        setWaktuPenilaian(true);
      }
      if (data?.form?.Penyakit) {
        let jp: any = [];
        if (data?.form?.Penyakit?.Dm === 1) {
          jp = [...jp, '1'];
        }
        if (data?.form?.Penyakit?.Ginjal === 1) {
          jp = [...jp, '2'];
        }
        if (data?.form?.Penyakit?.Hati === 1) {
          jp = [...jp, '3'];
        }
        if (data?.form?.Penyakit?.Jantung === 1) {
          jp = [...jp, '4'];
        }
        if (data?.form?.Penyakit?.Paru === 1) {
          jp = [...jp, '5'];
        }
        if (data?.form?.Penyakit?.Stroke === 1) {
          jp = [...jp, '6'];
        }
        if (data?.form?.Penyakit?.Kanker === 1) {
          jp = [...jp, '7'];
        }
        if (data?.form?.Penyakit?.Geriatri === 1) {
          jp = [...jp, '8'];
        }
        if (data?.form?.Penyakit?.Lain === 1) {
          jp = [...jp, '9'];
        }
        setJenisPenyakit(jp);
      }

      if (data.form?.Nyeri_Hilang) {
        let nh: any = [];
        if (data.form?.Nyeri_Hilang?.Minum_Obat) {
          nh = [...nh, '1'];
        }
        if (data.form?.Nyeri_Hilang?.Istirahat) {
          nh = [...nh, '2'];
        }
        if (data.form?.Nyeri_Hilang?.Mendengar_Musik) {
          nh = [...nh, '3'];
        }
        if (data.form?.Nyeri_Hilang?.Posisi_Tidur) {
          nh = [...nh, '4'];
        }
        setNyeriHilang(nh);
      }
      if (data.form?.Jenis_Hambatan) {
        let jh: any = [];
        if (data.form?.Jenis_Hambatan?.Pendengaran) {
          jh = [...jh, '1'];
        }
        if (data.form?.Jenis_Hambatan?.Penglihatan) {
          jh = [...jh, '2'];
        }
        if (data.form?.Jenis_Hambatan?.Kognitif) {
          jh = [...jh, '3'];
        }
        if (data.form?.Jenis_Hambatan?.Fisik) {
          jh = [...jh, '4'];
        }
        if (data.form?.Jenis_Hambatan?.Budaya) {
          jh = [...jh, '5'];
        }
        if (data.form?.Jenis_Hambatan?.Agama) {
          jh = [...jh, '6'];
        }
        if (data.form?.Jenis_Hambatan?.Emosi) {
          jh = [...jh, '7'];
        }
        if (data.form?.Jenis_Hambatan?.Bahasa) {
          jh = [...jh, '8'];
        }
        if (data.form?.Jenis_Hambatan?.Lain) {
          jh = [...jh, '9'];
        }
        setJenisHambatan(jh);
      }
      if (data.form?.Topik_Pembelajaran) {
        let tp: any = [];
        if (data.form?.Topik_Pembelajaran?.Diagnosis_Manajemen_Penyakit) {
          tp = [...tp, '1'];
        }
        if (data.form?.Topik_Pembelajaran?.Obat) {
          tp = [...tp, '2'];
        }
        if (data.form?.Topik_Pembelajaran?.Diet_Nutrisi) {
          tp = [...tp, '3'];
        }
        if (data.form?.Topik_Pembelajaran?.Keperawatan) {
          tp = [...tp, '4'];
        }
        if (data.form?.Topik_Pembelajaran?.Rehabilitasi) {
          tp = [...tp, '5'];
        }
        if (data.form?.Topik_Pembelajaran?.Manajemen_Nyeri) {
          tp = [...tp, '6'];
        }
        if (data.form?.Topik_Pembelajaran?.Lain) {
          tp = [...tp, '7'];
        }
        setTopikPembelajaran(tp);
      }
    }
  }, [treatment, data]);

  const handleJenisPenyakit = (e: any) => {
    const exist = jenisPenyakit?.includes(e.target.value);
    if (e.target.checked && !exist) {
      setJenisPenyakit([...jenisPenyakit, e.target.value]);
    } else if (!e.target.checked && exist) {
      setJenisPenyakit(jenisPenyakit.filter(j => j !== e.target.value));
    }
  }

  const handleNyeriHilang = (e: any) => {
    const exist = nyeriHilang?.includes(e.target.value);
    if (e.target.checked && !exist) {
      setNyeriHilang([...nyeriHilang, e.target.value]);
    } else if (!e.target.checked && exist) {
      setNyeriHilang(nyeriHilang.filter(j => j !== e.target.value));
    }
  }

  const handleJenisHambatan = (e: any) => {
    const exist = jenisHambatan?.includes(e.target.value);
    if (e.target.checked && !exist) {
      setJenisHambatan([...jenisHambatan, e.target.value]);
    } else if (!e.target.checked && exist) {
      setJenisHambatan(jenisHambatan.filter(j => j !== e.target.value));
    }
  }

  const handleTopikPembelajaran = (e: any) => {
    const exist = topikPembelajaran?.includes(e.target.value);
    if (e.target.checked && !exist) {
      setTopikPembelajaran([...topikPembelajaran, e.target.value]);
    } else if (!e.target.checked && exist) {
      setTopikPembelajaran(topikPembelajaran.filter(j => j !== e.target.value));
    }
  }

  const { register, handleSubmit, setValue, getValues, errors, formState, reset, watch } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: true,
    resolver: yupResolver(UpdateInpatientInitialNursingAssessmentRequest.schema()),
    defaultValues: {
      skrining_nyeri: data?.form?.Skrining_Nyeri ?? '',
      provocating: data?.form?.Provocating ?? '',
      quality: data?.form?.Quality ?? '',
      region: data?.form?.Region ?? '',
      severity: data?.form?.Severity ?? '',
      time: data?.form?.Time ?? '',
      tanggal_masuk_rawat_inap: data.form && data.form.Tanggal_Masuk_Rawat_Inap ? data.form.Tanggal_Masuk_Rawat_Inap.replace(/\s/g, 'T') : data.rawat_inap && data.rawat_inap.Tgl_Masuk && data.rawat_inap.Jam_Masuk ? `${data.rawat_inap.Tgl_Masuk}T${data.rawat_inap.Jam_Masuk}` : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      riwayat_alergi_tidak_check: data?.form?.Riwayat_Alergi_Tidak_Check ?? '',
      riwayat_alergi_obat_check: data?.form?.Riwayat_Alergi_Obat_Check ?? '',
      riwayat_alergi_makanan_check: data?.form?.Riwayat_Alergi_Makanan_Check ?? '',
      riwayat_alergi_lainnya_check: data?.form?.Riwayat_Alergi_Lainnya_Check ?? '',
      riwayat_alergi_klip_tanda_check: data?.form?.Riwayat_Alergi_Klip_Tanda_Check ?? '',
      riwayat_alergi_tidak_diketahui_check: data?.form?.Riwayat_Alergi_Tidak_Diketahui_Check ?? '',
      riwayat_alergi_obat_keterangan: data?.form?.Riwayat_Alergi_Obat_Keterangan,
      riwayat_alergi_obat_reaksi: data?.form?.Riwayat_Alergi_Obat_Reaksi,
      riwayat_alergi_makanan_keterangan: data?.form?.Riwayat_Alergi_Makanan_Keterangan,
      riwayat_alergi_makanan_reaksi: data?.form?.Riwayat_Alergi_Makanan_Reaksi,
      riwayat_alergi_lainnya_keterangan: data?.form?.Riwayat_Alergi_Lainnya_Keterangan,
      riwayat_alergi_lainnya_reaksi: data?.form?.Riwayat_Alergi_Lainnya_Reaksi,
      keperawatan_1_check: data?.form?.Keperawatan_1_Check ?? '',
      keperawatan_2_check: data?.form?.Keperawatan_2_Check ?? '',
      keperawatan_3_check: data?.form?.Keperawatan_3_Check ?? '',
      keperawatan_4_check: data?.form?.Keperawatan_4_Check ?? '',
      keperawatan_5_check: data?.form?.Keperawatan_5_Check ?? '',
      keperawatan_6_check: data?.form?.Keperawatan_6_Check ?? '',
      keperawatan_7_check: data?.form?.Keperawatan_7_Check ?? '',
      keperawatan_8_check: data?.form?.Keperawatan_8_Check ?? '',
      keperawatan_9_check: data?.form?.Keperawatan_9_Check ?? '',
      masalah_keperawatan_lainnya_text: data?.form?.Masalah_Keperawatan_Lainnya_Text ?? '',
      rencana_keperawatan_lainnya_text: data?.form?.Rencana_Keperawatan_Lainnya_Text ?? '',
      keluhan_utama: data?.form?.Keluhan_Utama,
      riwayat_pengobatan_sebelumnya: data?.form?.Riwayat_Pengobatan_Sebelumnya,
      pernah_dirawat: data?.form?.Pernah_Dirawat,
      pernah_dirawat_keterangan: data?.form?.Pernah_Dirawat_Keterangan,
      implant_terpasang: data?.form?.Implant_Terpasang,
      implant_terpasang_keterangan: data?.form?.Implant_Terpasang_Keterangan,
      psikologis: data?.form?.Status_Psikologis,
      psikologis_lain_keterangan: data?.form?.Status_Psikologis_Keterangan,
      mental: data?.form?.Status_Mental,
      mental_lain_keterangan: data?.form?.Status_Mental_Lain_Keterangan,
      mental_kekerasan_keterangan: data?.form?.Status_Mental_Kekerasan_Keterangan,
      hubungan_pasien_keluarga: data?.form?.Hubungan_Pasien_Keluarga,
      tempat_tinggal: data?.form?.Tempat_Tinggal,
      tempat_tinggal_keterangan: data?.form?.Tempat_Tinggal_Keterangan,
      kerabat_nama: data?.form?.Kerabat_Nama !== '' ? data.form?.Kerabat_Nama : treatment?.Wali?.Nama,
      kerabat_hubungan: data?.form?.Kerabat_Hubungan !== '' ? data?.form?.Kerabat_Hubungan : treatment?.Wali?.Hubungan,
      kerabat_telepon: data?.form?.Kerabat_No_Telepon !== '' ? data?.form?.Kerabat_No_Telepon : treatment?.Wali?.No_Telepon,
      nyeri_hilang_lainnya_text: data?.form?.Nyeri_Hilang_Lainnya_Text ?? '',
      agama: data?.form?.Agama_Id,
      spiritual_nilai_nilai: data?.form?.Nilai_Nilai ?? '',
      spiritual_keyakinan: data?.form?.Keyakinan ?? '',
      spiritual_kegiatan_perawatan: data?.form?.Kegiatan_Spiritual ?? '',
      td: data?.form?.Pemeriksaan_Fisik?.Tekanan_Darah ?? assessmentUgd?.form?.Vital_Tekanan_Darah ?? data?.ews?.Td ?? 0,
      bb: data?.form?.Pemeriksaan_Fisik?.Berat_Badan ?? assessmentUgd?.form?.Nutrisi_Berat ?? 0,
      p: data?.form?.Pemeriksaan_Fisik?.Pernafasan ?? assessmentUgd?.form?.Pernafasan_Teks ?? data?.ews?.Rr ?? 0,
      nadi: data?.form?.Pemeriksaan_Fisik?.Nadi ?? assessmentUgd?.form?.Vital_Denyut_Nadi ?? data?.ews?.Nadi ?? 0,
      tb: data?.form?.Pemeriksaan_Fisik?.Tinggi_Badan ?? assessmentUgd?.form?.Nutrisi_Tinggi ?? 0,
      suhu: data?.form?.Pemeriksaan_Fisik?.Suhu ?? assessmentUgd?.form?.Vital_Suhu ?? data?.ews?.Suhu_Tubuh ?? 0,
      rpt: data?.form?.RPT,
      rpo: data?.form?.RPO,
      'gambar-mata-od': data?.form?.Gambar_Mata_OD,
      'gambar-mata-os': data?.form?.Gambar_Mata_OS,
      nutrisi_turun_bb: data?.form?.Nutrisi_Turun_Bb,
      asupan_makan: data?.form?.Asupan_Makan,
      diagnosa_khusus: data?.form?.Diagnosa_Khusus,
      diagnosa: data?.form?.Diagnosa,
      jenis_penyakit_keterangan: data?.form?.Penyakit_Lain_Keterangan,
      nutrisionis: data?.form?.Nutrisionis,
      nutrisionis_tanggal: data.form && data.form.Nutrisionis_Tanggal ? data.form.Nutrisionis_Tanggal.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      risiko_jatuh: data?.form?.Risiko_Jatuh,
      status_fungsional: data?.form?.Status_Fungsional,
      status_fungsional_keterangan: data?.form?.Status_Fungsional_Keterangan,
      alat_bantu_jalan: data?.form?.Alat_Bantu_Jalan_Id,
      skala_nyeri: data?.form?.Skala_Nyeri,
      lokasi_nyeri: data?.form?.Lokasi_Nyeri_Id,
      intensitas_istirahat: data?.form?.Intensitas_Istirahat_Id,
      jenis_nyeri: data?.form?.Jenis_Nyeri,
      intensitas_aktivitas: data?.form?.Intensitas_Aktivitas_Id,
      hambatan: data?.form?.Hambatan,
      jenis_hambatan_lain_keterangan: data?.form?.Jenis_Hambatan_Lain_Keterangan,
      topik_pembelajaran_lain_keterangan: data?.form?.Topik_Pembelajaran,
      waktu_penilaian: data?.form?.Waktu_Penilaian_Id,
      rangsang_defeksi: data?.form?.Rangsang_Defeksi,
      rangsang_berkemih: data?.form?.Rangsang_Berkemih,
      bersih_diri: data?.form?.Bersih_Diri,
      penggunaan_jamban: data?.form?.Penggunaan_Jamban,
      makan: data?.form?.Makan,
      perawatan_diri: data?.form?.Perawatan_Diri ?? '',
      berpakaian: data?.form?.Berpakaian ?? '',
      naik_turun_tangga: data?.form?.Naik_Turun_Tangga ?? '',
      sikap_berbaring_duduk: data?.form?.Sikap_Berbaring_Duduk,
      berpindah_berjalan: data?.form?.Berpindah_Berjalan,
      tanggal_pengkajian_masuk: data?.form?.Tanggal_Masuk_Rawat_Inap,
      tanggal_pengkajian_keluar: '',
      'ttd-perawat-pengkajian-masuk': data?.form?.TTD_Perawat_Pengkajian_Masuk,
      'id-perawat-pengkajian-masuk': data?.form?.ID_Perawat_Pengkajian_Masuk,
      'ttd-perawat-pengkajian-keluar': data?.form?.TTD_Perawat_Pengkajian_Keluar,
      'id-perawat-pengkajian-keluar': data?.form?.ID_Perawat_Pengkajian_Keluar,

      jenis_penyakit: [],
      nyeri_hilang: data?.form?.Nyeri_Hilang,
      jenis_hambatan: data?.form?.Jenis_Hambatan,
      topik_pembelajaran: data?.form?.Topik_Pembelajaran,
      sebelum_sakit_makan: data?.form?.Sebelum_Sakit?.Makan ?? '',
      sebelum_sakit_mandi: data?.form?.Sebelum_Sakit?.Mandi ?? '',
      sebelum_sakit_perawatan_diri: data?.form?.Sebelum_Sakit?.Perawatan_Diri ?? '',
      sebelum_sakit_berpakaian: data?.form?.Sebelum_Sakit?.Berpakaian ?? '',
      sebelum_sakit_bak: data?.form?.Sebelum_Sakit?.BAK ?? '',
      sebelum_sakit_bab: data?.form?.Sebelum_Sakit?.BAB ?? '',
      sebelum_sakit_penggunaan_toilet: data?.form?.Sebelum_Sakit?.Penggunaan_Toilet ?? '',
      sebelum_sakit_transfer: data?.form?.Sebelum_Sakit?.Transfer ?? '',
      sebelum_sakit_mobilitas: data?.form?.Sebelum_Sakit?.Mobilitas ?? '',
      sebelum_sakit_naik_turun_tangga: data?.form?.Sebelum_Sakit?.Naik_Turun_Tangga ?? '',
      saat_masuk_makan: data?.form?.Saat_Masuk_RS?.Makan ?? '',
      saat_masuk_mandi: data?.form?.Saat_Masuk_RS?.Mandi ?? '',
      saat_masuk_perawatan_diri: data?.form?.Saat_Masuk_RS?.Perawatan_Diri ?? '',
      saat_masuk_berpakaian: data?.form?.Saat_Masuk_RS?.Berpakaian ?? '',
      saat_masuk_bak: data?.form?.Saat_Masuk_RS?.BAK ?? '',
      saat_masuk_bab: data?.form?.Saat_Masuk_RS?.BAB ?? '',
      saat_masuk_penggunaan_toilet: data?.form?.Saat_Masuk_RS?.Penggunaan_Toilet ?? '',
      saat_masuk_transfer: data?.form?.Saat_Masuk_RS?.Transfer ?? '',
      saat_masuk_mobilitas:  data?.form?.Saat_Masuk_RS?.Mobilitas ?? '',
      saat_masuk_naik_turun_tangga: data?.form?.Saat_Masuk_RS?.Naik_Turun_Tangga ?? '',
      minggu_2_makan: data?.form?.Minggu_2_RS?.Makan ?? '',
      minggu_2_mandi: data?.form?.Minggu_2_RS?.Mandi ?? '',
      minggu_2_perawatan_diri: data?.form?.Minggu_2_RS?.Perawatan_Diri ?? '',
      minggu_2_berpakaian: data?.form?.Minggu_2_RS?.Berpakaian ?? '',
      minggu_2_bak: data?.form?.Minggu_2_RS?.BAK ?? '',
      minggu_2_bab: data?.form?.Minggu_2_RS?.BAB ?? '',
      minggu_2_penggunaan_toilet: data?.form?.Minggu_2_RS?.Penggunaan_Toilet ?? '',
      minggu_2_transfer: data?.form?.Minggu_2_RS?.Transfer ?? '',
      minggu_2_mobilitas: data?.form?.Minggu_2_RS?.Mobilitas ?? '',
      minggu_2_naik_turun_tangga: data?.form?.Minggu_2_RS?.Naik_Turun_Tangga ?? '',
      minggu_3_makan: data?.form?.Minggu_3_RS?.Makan ?? '',
      minggu_3_mandi: data?.form?.Minggu_3_RS?.Mandi ?? '',
      minggu_3_perawatan_diri: data?.form?.Minggu_3_RS?.Perawatan_Diri ?? '',
      minggu_3_berpakaian: data?.form?.Minggu_3_RS?.Berpakaian ?? '',
      minggu_3_bak: data?.form?.Minggu_3_RS?.BAK ?? '',
      minggu_3_bab: data?.form?.Minggu_3_RS?.BAB ?? '',
      minggu_3_penggunaan_toilet: data?.form?.Minggu_3_RS?.Penggunaan_Toilet ?? '',
      minggu_3_transfer: data?.form?.Minggu_3_RS?.Transfer ?? '',
      minggu_3_mobilitas: data?.form?.Minggu_3_RS?.Mobilitas ?? '',
      minggu_3_naik_turun_tangga: data?.form?.Minggu_3_RS?.Naik_Turun_Tangga ?? '',
      minggu_4_makan: data?.form?.Minggu_4_RS?.Makan ?? '',
      minggu_4_mandi: data?.form?.Minggu_4_RS?.Mandi ?? '',
      minggu_4_perawatan_diri: data?.form?.Minggu_4_RS?.Perawatan_Diri ?? '',
      minggu_4_berpakaian: data?.form?.Minggu_4_RS?.Berpakaian ?? '',
      minggu_4_bak: data?.form?.Minggu_4_RS?.BAK ?? '',
      minggu_4_bab: data?.form?.Minggu_4_RS?.BAB ?? '',
      minggu_4_penggunaan_toilet: data?.form?.Minggu_4_RS?.Penggunaan_Toilet ?? '',
      minggu_4_transfer: data?.form?.Minggu_4_RS?.Transfer ?? '',
      minggu_4_mobilitas: data?.form?.Minggu_4_RS?.Mobilitas ?? '',
      minggu_4_naik_turun_tangga: data?.form?.Minggu_4_RS?.Naik_Turun_Tangga ?? '',
      saat_pulang_makan: data?.form?.Saat_Pulang?.Makan ?? '',
      saat_pulang_mandi: data?.form?.Saat_Pulang?.Mandi ?? '',
      saat_pulang_perawatan_diri: data?.form?.Saat_Pulang?.Perawatan_Diri ?? '',
      saat_pulang_berpakaian: data?.form?.Saat_Pulang?.Berpakaian ?? '',
      saat_pulang_bak: data?.form?.Saat_Pulang?.BAK ?? '',
      saat_pulang_bab:  data?.form?.Saat_Pulang?.BAB ?? '',
      saat_pulang_penggunaan_toilet: data?.form?.Saat_Pulang?.Penggunaan_Toilet ?? '',
      saat_pulang_transfer: data?.form?.Saat_Pulang?.Transfer ?? '',
      saat_pulang_mobilitas: data?.form?.Saat_Pulang?.Mobilitas ?? '',
      saat_pulang_naik_turun_tangga: data?.form?.Saat_Pulang?.Naik_Turun_Tangga ?? '',
      sebelum_sakit_total: data?.form?.Sebelum_Sakit_Total ?? '',
      saat_masuk_total: data?.form?.Saat_Masuk_Total ?? '',
      saat_pulang_total:  data?.form?.Saat_Pulang_Total ?? '',
      minggu_2_total: data?.form?.Minggu_2_Total ?? '',
      minggu_3_total: data?.form?.Minggu_3_Total ?? '',
      minggu_4_total: data?.form?.Minggu_4_Total ?? '',
    },
  });

  const sebelumSakitMakan = watch('sebelum_sakit_makan');
  const sebelumSakitMandi = watch('sebelum_sakit_mandi');
  const sebelumSakitPerawatanDiri = watch('sebelum_sakit_perawatan_diri');
  const sebelumSakitBerpakaian = watch('sebelum_sakit_berpakaian');
  const sebelumSakitBak = watch('sebelum_sakit_bak');
  const sebelumSakitBab = watch('sebelum_sakit_bab');
  const sebelumSakitPenggunaanToilet = watch('sebelum_sakit_penggunaan_toilet');
  const sebelumSakitTransfer = watch('sebelum_sakit_transfer');
  const sebelumSakitMobilitas = watch('sebelum_sakit_mobilitas');
  const sebelumSakitNaikTurunTangga = watch('sebelum_sakit_naik_turun_tangga');

  useEffect(() => {
    const score = parseInt(sebelumSakitMakan) + parseInt(sebelumSakitMandi) + parseInt(sebelumSakitPerawatanDiri) +  parseInt(sebelumSakitBerpakaian) + parseInt(sebelumSakitBak) + parseInt(sebelumSakitBab) + parseInt(sebelumSakitPenggunaanToilet) + parseInt(sebelumSakitTransfer) + parseInt(sebelumSakitMobilitas) + parseInt(sebelumSakitNaikTurunTangga);
    setValue('sebelum_sakit_total', score);
  }, [sebelumSakitMakan, sebelumSakitMandi, sebelumSakitPerawatanDiri, sebelumSakitBak, sebelumSakitBerpakaian, sebelumSakitBak, sebelumSakitBab, sebelumSakitPenggunaanToilet, sebelumSakitTransfer, sebelumSakitMobilitas, sebelumSakitNaikTurunTangga])

  const saatMasukMakan = watch('saat_masuk_makan');
  const saatMasukMandi = watch('saat_masuk_mandi');
  const saatMasukPerawatanDiri = watch('saat_masuk_perawatan_diri');
  const saatMasukBerpakaian = watch('saat_masuk_berpakaian');
  const saatMasukBak = watch('saat_masuk_bak');
  const saatMasukBab = watch('saat_masuk_bab');
  const saatMasukPenggunaanToilet = watch('saat_masuk_penggunaan_toilet');
  const saatMasukTransfer = watch('saat_masuk_transfer');
  const saatMasukMobilitas = watch('saat_masuk_mobilitas');
  const saatMasukNaikTangga = watch('saat_masuk_naik_turun_tangga');

  useEffect(() => {
    const score = parseInt(saatMasukMakan) + parseInt(saatMasukMandi) + parseInt(saatMasukPerawatanDiri) +  parseInt(saatMasukBerpakaian) + parseInt(saatMasukBak) + parseInt(saatMasukBab) + parseInt(saatMasukPenggunaanToilet) + parseInt(saatMasukTransfer) + parseInt(saatMasukMobilitas) + parseInt(saatMasukNaikTangga);
    setValue('saat_masuk_total', score);
  }, [saatMasukMakan, saatMasukMandi, saatMasukPerawatanDiri, sebelumSakitBak, saatMasukBerpakaian, saatMasukBak, saatMasukBab, saatMasukPenggunaanToilet, saatMasukTransfer, saatMasukMobilitas, saatMasukNaikTangga])

  const minggu2Makan = watch('minggu_2_makan');
  const minggu2Mandi = watch('minggu_2_mandi');
  const minggu2PerawatanDiri = watch('minggu_2_perawatan_diri');
  const minggu2Berpakaian = watch('minggu_2_berpakaian');
  const minggu2Bak = watch('minggu_2_bak');
  const minggu2Bab = watch('minggu_2_bab');
  const minggu2PenggunaanToilet = watch('minggu_2_penggunaan_toilet');
  const minggu2Transfer = watch('minggu_2_transfer');
  const minggu2Mobilitas = watch('minggu_2_mobilitas');
  const minggu2Tangga = watch('minggu_2_naik_turun_tangga');

  useEffect(() => {
    const Score = parseInt(minggu2Makan) + parseInt(minggu2Mandi) + parseInt(minggu2PerawatanDiri) + parseInt(minggu2Berpakaian) + parseInt(minggu2Bak) + parseInt(minggu2Bab) + parseInt(minggu2PenggunaanToilet) + parseInt(minggu2Transfer) + parseInt(minggu2Mobilitas) + parseInt(minggu2Tangga);
    setValue('minggu_2_total', Score);
  }, [minggu2Makan, minggu2Mandi, minggu2PerawatanDiri, minggu2Berpakaian, minggu2Bak, minggu2Bab, minggu2PenggunaanToilet, minggu2Transfer, minggu2Mobilitas, minggu2Tangga])
  
  const minggu3Makan = watch('minggu_3_makan');
  const minggu3Mandi = watch('minggu_3_mandi');
  const minggu3PerawatanDiri = watch('minggu_3_perawatan_diri');
  const minggu3Berpakaian = watch('minggu_3_berpakaian');
  const minggu3Bak = watch('minggu_3_bak');
  const minggu3Bab = watch('minggu_3_bab');
  const minggu3PenggunaanToilet = watch('minggu_3_penggunaan_toilet');
  const minggu3Transfer = watch('minggu_3_transfer');
  const minggu3Mobilitas = watch('minggu_3_mobilitas');
  const minggu3Tangga = watch('minggu_3_naik_turun_tangga');

  useEffect(() => {
    const Score = parseInt(minggu3Makan) + parseInt(minggu3Mandi) + parseInt(minggu3PerawatanDiri) + parseInt(minggu3Berpakaian) + parseInt(minggu3Bak) + parseInt(minggu3Bab) + parseInt(minggu3PenggunaanToilet) + parseInt(minggu3Transfer) + parseInt(minggu3Mobilitas) + parseInt(minggu3Tangga);
    setValue('minggu_3_total', Score);
  }, [minggu3Makan, minggu3Mandi, minggu3PerawatanDiri, minggu3Berpakaian, minggu3Bak, minggu3Bab, minggu3PenggunaanToilet, minggu3Transfer, minggu3Mobilitas, minggu3Tangga])

  const minggu4Makan = watch('minggu_4_makan');
  const minggu4Mandi = watch('minggu_4_mandi');
  const minggu4PerawatanDiri = watch('minggu_4_perawatan_diri');
  const minggu4Berpakaian = watch('minggu_4_berpakaian');
  const minggu4Bak = watch('minggu_4_bak');
  const minggu4Bab = watch('minggu_4_bab');
  const minggu4PenggunaanToilet = watch('minggu_4_penggunaan_toilet');
  const minggu4Transfer = watch('minggu_4_transfer');
  const minggu4Mobilitas = watch('minggu_4_mobilitas');
  const minggu4Tangga = watch('minggu_4_naik_turun_tangga');

  useEffect(() => {
    const Score = parseInt(minggu4Makan) + parseInt(minggu4Mandi) + parseInt(minggu4PerawatanDiri) + parseInt(minggu4Berpakaian) + parseInt(minggu4Bak) + parseInt(minggu4Bab) + parseInt(minggu4PenggunaanToilet) + parseInt(minggu4Transfer) + parseInt(minggu4Mobilitas) + parseInt(minggu4Tangga);
    setValue('minggu_4_total', Score);
  }, [minggu4Makan, minggu4Mandi, minggu4PerawatanDiri, minggu4Berpakaian, minggu4Bak, minggu4Bab, minggu4PenggunaanToilet, minggu4Transfer, minggu4Mobilitas, minggu4Tangga])

  const saatPulangMakan = watch('saat_pulang_makan');
  const saatPulangMandi = watch('saat_pulang_mandi');
  const saatPulangPerawatan = watch('saat_pulang_perawatan_diri');
  const saatPulangBerpakaian = watch('saat_pulang_berpakaian');
  const saatPulangBak = watch('saat_pulang_bak');
  const saatPulangBab = watch('saat_pulang_bab');
  const saatPulangToilet = watch('saat_pulang_penggunaan_toilet');
  const saatPulangTransfer = watch('saat_pulang_transfer');
  const saatPulangMobilitas = watch('saat_pulang_mobilitas');
  const saatPulangTangga = watch('saat_pulang_naik_turun_tangga');

  useEffect(() => {
    const Score = parseInt(saatPulangMakan) + parseInt(saatPulangMandi) + parseInt(saatPulangPerawatan) + parseInt(saatPulangBerpakaian) + parseInt(saatPulangBak) + parseInt(saatPulangBab) + parseInt(saatPulangToilet) + parseInt(saatPulangTransfer) + parseInt(saatPulangMobilitas) + parseInt(saatPulangTangga);
    setValue('saat_pulang_total', Score);
  }, [saatPulangMakan, saatPulangMandi, saatPulangPerawatan, saatPulangBerpakaian, saatPulangBak, saatPulangBab, saatPulangToilet, saatPulangTransfer, saatPulangMobilitas, saatPulangTangga])

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  const handleImageOD = (image: string) => {
    setValue("gambar-mata-od", image)
  }

  const handleImageOS = (image: string) => {
    setValue("gambar-mata-os", image)
  }

  const handleSubmitForm = (value: IUpdateInpatientInitialNursingAssessmentRequest) => {
    if (!treatment) {
      return;
    }
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateInpatientInitialNursingAssessmentRequest.createFromJson({
      ...value,
      ...appRequest,
      jenis_penyakit: jenisPenyakit,
      nyeri_hilang: nyeriHilang,
      jenis_hambatan: jenisHambatan,
      topik_pembelajaran: topikPembelajaran,
    });
    setProcessing(true);
    dispatch(handlePdf(undefined));
    InpatientInitialNursingAssessmentService().update(params)
      .then(() => {
        InpatientInitialNursingAssessmentService().show(appRequest)
          .then((response) => {
            if (response && response.data && response.data.data) {
              InpatientInitialNursingAssessmentService().pdfv3(PdfInpatientInitialNursingAssessmentRequest.createPdfRequest({ ...response.data.data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
                .then(() => {
                  setProcessing(false);
                  dispatch(fetchInpatientInitialNursingAssessmentPdf(FindPdfRequest.createFromJson({
                    emr_id: treatment.EMR_ID,
                    form_name: 'rawat-inap_pengkajian-awal-keperawatan-dewasa',
                  })));
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
      <Row>
        <Col>
          <Card className="border-1">
            <CardBody>
              <Row>
                <Col md="8">
                  <FormGroup className="form-group" row>
                    <DateTimeInput name="tanggal_masuk_rawat_inap" label="Tanggal Masuk Rawat Inap" md={4} {...{ register, errors }}/>
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          {/*Riwayat Alergi / Reaksi*/}
          <Card className="border-1">
            <CardBody>
              <div className="d-flex">
                <Input
                  className="me-1"
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDefaultPattern('1');
                    } else {
                      setDefaultPattern('0');
                    }
                  }}
                />
                <p><b>Checklist Default</b></p>
              </div>
              <div className="col-form-label fw-bolder">Riwayat Alergi / Reaksi</div>
              <div style={{ paddingLeft: "1rem" }}>
                <Row>
                  <Col md="auto">
                    <FormGroup row className="form-group">
                      <Col>
                        <FormGroup check className="app-form-check">
                          <Input
                            id="riwayat_alergi_tidak_check"
                            type="checkbox"
                            name="riwayat_alergi_tidak_check"
                            className="me-1"
                            onChange={(e) => {
                              if (e.target.checked) {
                                setRiwayatAlergi('1');
                              } else {
                                setRiwayatAlergi(undefined);
                              }
                              handleCheckboxChange(e);
                            }}
                            checked={(riwayatAlergi === '1')}
                            value="1"
                            innerRef={register("riwayat_alergi_tidak_check") as any}
                          />{' '}
                          <Label check>
                            Tidak Ada Alergi
                          </Label>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Row>
                      <Col md="5">
                        <FormGroup row className="form-group">
                          <Col>
                            <FormGroup check className="app-form-check">
                              <Input
                                id="riwayat_alergi_obat_check"
                                type="checkbox"
                                name="riwayat_alergi_obat_check"
                                className="me-1"
                                onChange={(e) => handleCheckboxChange(e)}
                                value="1"
                                innerRef={register("riwayat_alergi_obat_check") as any}
                              />{' '}
                              <Label check>
                                Alergi obat, sebutkan
                              </Label>
                            </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col md="7">
                        <FormGroup className="form-group" row>
                          <TextInput name="riwayat_alergi_obat_keterangan" label="" md={1} {...{ register, errors }}/>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <FormGroup className="form-group" row>
                      <TextInput name="riwayat_alergi_obat_reaksi" label="Reaksi yang terjadi" md={6} {...{ register, errors }}/>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Row>
                      <Col md="5">
                        <FormGroup row className="form-group">
                          <Col>
                            <FormGroup check className="app-form-check">
                              <Input
                                id="riwayat_alergi_makanan_check"
                                type="checkbox"
                                name="riwayat_alergi_makanan_check"
                                className="me-1"
                                onChange={(e) => handleCheckboxChange(e)}
                                value="1"
                                innerRef={register("riwayat_alergi_makanan_check") as any}
                              />{' '}
                              <Label check>
                                Alergi makanan, sebutkan
                              </Label>
                            </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col md="7">
                        <FormGroup className="form-group" row>
                          <TextInput name="riwayat_alergi_makanan_keterangan" label="" md={1} {...{ register, errors }}/>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <FormGroup className="form-group" row>
                      <TextInput name="riwayat_alergi_makanan_reaksi" label="Reaksi yang terjadi" md={6} {...{ register, errors }}/>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Row>
                      <Col md="5">
                        <FormGroup row className="form-group">
                          <Col>
                            <FormGroup check className="app-form-check">
                              <Input
                                id="riwayat_alergi_lainnya_check"
                                type="checkbox"
                                name="riwayat_alergi_lainnya_check"
                                className="me-1"
                                onChange={(e) => handleCheckboxChange(e)}
                                value="1"
                                innerRef={register("riwayat_alergi_lainnya_check") as any}
                              />{' '}
                              <Label check>
                                Alergi lainnya, sebutkan
                              </Label>
                            </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col md="7">
                        <FormGroup className="form-group" row>
                          <TextInput name="riwayat_alergi_lainnya_keterangan" label="" md={1} {...{ register, errors }}/>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <FormGroup className="form-group" row>
                      <TextInput name="riwayat_alergi_lainnya_reaksi" label="Reaksi yang terjadi" md={6} {...{ register, errors }}/>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md="auto">
                    <FormGroup row className="form-group">
                      <Col>
                        <FormGroup check className="app-form-check">
                          <Input
                            id="riwayat_alergi_klip_tanda_check"
                            type="checkbox"
                            name="riwayat_alergi_klip_tanda_check"
                            className="me-1"
                            onChange={(e) => handleCheckboxChange(e)}
                            defaultChecked={data && data.form && data.form.Riwayat_Alergi_Klip_Tanda_Check === '1'}
                            value="1"
                            innerRef={register("riwayat_alergi_klip_tanda_check") as any}
                          />{' '}
                          <Label check>
                            Klip tanda alergi dipasang
                          </Label>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md="auto">
                    <FormGroup row className="form-group">
                      <Col>
                        <FormGroup check className="app-form-check">
                          <Input
                            id="riwayat_alergi_tidak_diketahui_check"
                            type="checkbox"
                            name="riwayat_alergi_tidak_diketahui_check"
                            className="me-1"
                            onChange={(e) => handleCheckboxChange(e)}
                            defaultChecked={data && data.form && data.form.Riwayat_Alergi_Tidak_Diketahui_Check === '1'}
                            value="1"
                            innerRef={register("riwayat_alergi_tidak_diketahui_check") as any}
                          />{' '}
                          <Label check>
                            Tidak Diketahui
                          </Label>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </div>

              <div className="col-form-label fw-bolder">Kajian awal</div>
              <div style={{ paddingLeft: "1rem" }}>
                <FormGroup className="form-group" row>
                  <TextInput name="keluhan_utama" label="Keluhan utama saat masuk" md={4} {...{ register, errors }}/>
                </FormGroup>

                <FormGroup className="form-group" row>
                  <TextInput name="riwayat_pengobatan_sebelumnya" label="Riwayat kesehatan / pengobatan perawatan sebelumnya" md={4} {...{ register, errors }}/>
                </FormGroup>

                <div className="col-form-label fw-bolder">Pernah dirawat</div>
                <div style={{ paddingLeft: "1rem" }}>
                  <Row>
                    <Col md="4">
                      <Row>
                        <Col md="6">
                          <FormGroup row className="form-group">
                            <Col>
                              <FormGroup check className="app-form-check">
                                <Input
                                  type="radio"
                                  name="pernah_dirawat"
                                  className="me-1"
                                  onChange={(e) => {
                                    handleRadioChange(e);
                                    setPernahDirawat('0');
                                  }}
                                  // defaultChecked={data && data.form && data.form.Pernah_Dirawat === '0'}
                                  checked={(pernahDirawat === '0')}
                                  value="0"
                                  innerRef={register("pernah_dirawat") as any}
                                />{' '}
                                <Label check>
                                  Tidak
                                </Label>
                              </FormGroup>
                            </Col>
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup row className="form-group">
                            <Col>
                              <FormGroup check className="app-form-check">
                                <Input
                                  type="radio"
                                  name="pernah_dirawat"
                                  className="me-1"
                                  onChange={(e) => handleRadioChange(e)}
                                  defaultChecked={data && data.form && data.form.Pernah_Dirawat === '1'}
                                  value="1"
                                  innerRef={register("pernah_dirawat") as any}
                                />{' '}
                                <Label check>
                                  Ya, Kapan
                                </Label>
                              </FormGroup>
                            </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <FormGroup className="form-group" row>
                        <TextInput nolabel name="pernah_dirawat_keterangan" {...{ register, errors }}/>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>

                <div className="col-form-label fw-bolder">Punya alat implant terpasang</div>
                <div style={{ paddingLeft: "1rem" }}>
                  <Row>
                    <Col md="4">
                      <Row>
                        <Col md="6">
                          <FormGroup row className="form-group">
                            <Col>
                              <FormGroup check className="app-form-check">
                                <Input
                                  type="radio"
                                  name="implant_terpasang"
                                  className="me-1"
                                  onChange={(e) => {
                                    handleRadioChange(e)
                                    setImplantTerpasang('0')
                                  }}
                                  // defaultChecked={data && data.form && data.form.Implant_Terpasang === '0'}
                                  checked={(implantTerpasang === '0')}
                                  value="0"
                                  innerRef={register("implant_terpasang") as any}
                                />{' '}
                                <Label check>
                                  Tidak
                                </Label>
                              </FormGroup>
                            </Col>
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup row className="form-group">
                            <Col>
                              <FormGroup check className="app-form-check">
                                <Input
                                  type="radio"
                                  name="implant_terpasang"
                                  className="me-1"
                                  onChange={(e) => handleRadioChange(e)}
                                  defaultChecked={data && data.form && data.form.Implant_Terpasang === '1'}
                                  value="1"
                                  innerRef={register("implant_terpasang") as any}
                                />{' '}
                                <Label check>
                                  Ya
                                </Label>
                              </FormGroup>
                            </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <FormGroup className="form-group" row>
                        <TextInput nolabel name="implant_terpasang_keterangan" {...{ register, errors }}/>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>

                <div className="col-form-label fw-bolder">Status Psikologi</div>
                <div style={{ paddingLeft: "1rem" }}>
                  <Row>
                    <Col>
                      <FormGroup row className="form-group">
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="radio"
                              name="psikologis"
                              className="me-1"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.form && data.form.Status_Psikologis === '0'}
                              value="0"
                              innerRef={register("psikologis") as any}
                            />{' '}
                            <Label check>
                              Cemas
                            </Label>
                          </FormGroup>
                        </Col>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup row className="form-group">
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="radio"
                              name="psikologis"
                              className="me-1"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.form && data.form.Status_Psikologis === '1'}
                              value="1"
                              innerRef={register("psikologis") as any}
                            />{' '}
                            <Label check>
                              Takut
                            </Label>
                          </FormGroup>
                        </Col>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup row className="form-group">
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="radio"
                              name="psikologis"
                              className="me-1"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.form && data.form.Status_Psikologis === '2'}
                              value="2"
                              innerRef={register("psikologis") as any}
                            />{' '}
                            <Label check>
                              Marah
                            </Label>
                          </FormGroup>
                        </Col>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup row className="form-group">
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="radio"
                              name="psikologis"
                              className="me-1"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.form && data.form.Status_Psikologis === '3'}
                              value="3"
                              innerRef={register("psikologis") as any}
                            />{' '}
                            <Label check>
                              Sedih
                            </Label>
                          </FormGroup>
                        </Col>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup row className="form-group">
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="radio"
                              name="psikologis"
                              className="me-1"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.form && data.form.Status_Psikologis === '4'}
                              value="4"
                              innerRef={register("psikologis") as any}
                            />{' '}
                            <Label check>
                              Kecenderungan bunuh diri
                            </Label>
                          </FormGroup>
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <FormGroup row className="form-group">
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="radio"
                              name="psikologis"
                              className="me-1"
                              onChange={(e) => {
                                handleRadioChange(e)
                                setPsikologis('5')
                              }}
                              // defaultChecked={data && data.form && data.form.Status_Psikologis === '5'}
                              checked={(psikologis === '5')}
                              value="5"
                              innerRef={register("psikologis") as any}
                            />{' '}
                            <Label check>
                              Lain lain, sebutkan
                            </Label>
                          </FormGroup>
                        </Col>
                      </FormGroup>
                    </Col>
                    <Col>
                      <TextInput nolabel name="psikologis_lain_keterangan" {...{ register, errors }}/>
                    </Col>
                  </Row>
                </div>

                <div className="col-form-label fw-bolder">Status Mental</div>
                <div style={{ paddingLeft: "1rem" }}>
                  <Row>
                    <Col>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="mental"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data && data.form && data.form.Status_Mental === '0'}
                          value="1"
                          innerRef={register("mental") as any}
                        />{' '}
                        <Label check>
                          Sadar dan orientasi baik
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="mental"
                          className="me-1"
                          onChange={(e) => {
                            handleRadioChange(e)
                            setMental('2');
                          }}
                          // defaultChecked={data && data.form && data.form.Status_Mental === '1'}
                          checked={(mental === '2')}
                          value="2"
                          innerRef={register("mental") as any}
                        />{' '}
                        <Label check>
                          Ada masalah perilaku, Sebutkan
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col>
                      <TextInput nolabel name="mental_lain_keterangan" {...{ register, errors }}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col md='4'>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="mental"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data && data.form && data.form.Status_Mental === '3'}
                          value="3"
                          innerRef={register("mental") as any}
                        />{' '}
                        <Label check>
                          Perilaku kekerasan yang dialami pasien sebelumnya
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col>
                      <TextInput nolabel name="mental_kekerasan_keterangan" {...{ register, errors }}/>
                    </Col>
                  </Row>
                </div>

                <div className="col-form-label fw-bolder">Hubungan pasien dengan anggota keluarga</div>
                <div style={{ paddingLeft: "1rem" }}>
                  <Row>
                    <Col md="4">
                      <Row>
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="radio"
                              name="hubungan_pasien_keluarga"
                              className="me-1"
                              onChange={(e) => {
                                handleRadioChange(e)
                                setHubunganBaik('0');
                              }}
                              // defaultChecked={data && data.form && data.form.Hubungan_Pasien_Keluarga === '0'}
                              checked={(hubunganBaik === '0')}
                              value="0"
                              innerRef={register("hubungan_pasien_keluarga") as any}
                            />{' '}
                            <Label check>
                              Baik
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="radio"
                              name="hubungan_pasien_keluarga"
                              className="me-1"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.form && data.form.Hubungan_Pasien_Keluarga === '1'}
                              value="1"
                              innerRef={register("hubungan_pasien_keluarga") as any}
                            />{' '}
                            <Label check>
                              Tidak baik
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>

                <div className="col-form-label fw-bolder">Tempat tinggal</div>
                <div style={{ paddingLeft: "1rem" }}>
                  <Row>
                    <Col>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="tempat_tinggal"
                          className="me-1"
                          onChange={(e) => {
                            handleRadioChange(e)
                            setTempatTinggal('0');
                          }}
                          // defaultChecked={data && data.form && data.form.Tempat_Tinggal === '0'}
                          checked={!!(tempatTinggal === '0')}
                          value="0"
                          innerRef={register("tempat_tinggal") as any}
                        />{' '}
                        <Label check>
                          Rumah
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="tempat_tinggal"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data && data.form && data.form.Tempat_Tinggal === '1'}
                          value="1"
                          innerRef={register("tempat_tinggal") as any}
                        />{' '}
                        <Label check>
                          Apartemen
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="tempat_tinggal"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data && data.form && data.form.Tempat_Tinggal === '2'}
                          value="2"
                          innerRef={register("tempat_tinggal") as any}
                        />{' '}
                        <Label check>
                          Panti
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <Row>
                        <Col md="auto">
                          <FormGroup check className="app-form-check">
                            <Input
                              type="radio"
                              name="tempat_tinggal"
                              className="me-1"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.form && data.form.Tempat_Tinggal === '3'}
                              value="3"
                              innerRef={register("tempat_tinggal") as any}
                            />{' '}
                            <Label check>
                              Lainnya
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col>
                          <TextInput nolabel name="tempat_tinggal_keterangan" {...{ register, errors }}/>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>

                <div className="col-form-label fw-bolder">Kerabat yang bisa dihubungi</div>
                <div style={{ paddingLeft: "1rem" }}>
                  <FormGroup className="form-group" row>
                    <TextInput name="kerabat_nama" label="Nama" md={4} {...{ register, errors }}/>
                  </FormGroup>
                  <FormGroup className="form-group" row>
                    <TextInput name="kerabat_hubungan" label="Hubungan" md={4} {...{ register, errors }}/>
                  </FormGroup>
                  <FormGroup className="form-group" row>
                    <TextInput name="kerabat_telepon" label="Telepon" md={4} {...{ register, errors }}/>
                  </FormGroup>
                </div>

                <div className="col-form-label fw-bolder">Status Spiritual</div>
                <div style={{ paddingLeft: "1rem" }}>
                  <FormGroup className="form-group" row>
                    {/*<TextInput name="agama" label="Agama" md={4} {...{ register, errors }}/>*/}
                    <SelectInput md="4" name={`agama`} label="Agama" {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      <option value="I">Islam</option>
                      <option value="P">Protestan</option>
                      <option value="K">Katolik</option>
                      <option value="H">Hindu</option>
                      <option value="B">Budha</option>
                      <option value="C">Kong Hu Chu</option>
                      <option value="T">Kristen</option>
                    </SelectInput>
                  </FormGroup>
                  <FormGroup className='form-group' row>
                    <TextInput name="spiritual_keyakinan" label="Keyakinan" md={4} {...{ register, errors }}/>
                  </FormGroup>
                  <FormGroup className="form-group" row>
                    <TextInput name="spiritual_nilai_nilai" label="Nilai-nilai kepercayaan" md={4} {...{ register, errors }}/>
                  </FormGroup>
                  <FormGroup className="form-group" row>
                    <TextInput name="spiritual_kegiatan_perawatan" label="Kegiatan Spiritual Yang Dibutuhkan Selama Perawatan" md={4} {...{ register, errors }}/>
                  </FormGroup>
                </div>

                <div className="col-form-label fw-bolder">Pemeriksaan Fisik</div>
                <div style={{ paddingLeft: "1rem" }}>
                  <Row>
                    <Col>
                      <FormGroup className="form-group" row>
                        <TextInput name="td" label="TD" md={2} {...{ register, errors }}/>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup className="form-group" row>
                        <TextInput name="bb" label="BB" md={2} {...{ register, errors }}/>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup className="form-group" row>
                        <TextInput name="p" label="P" md={2} {...{ register, errors }}/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="form-group" row>
                        <TextInput name="nadi" label="HR" md={2} {...{ register, errors }}/>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup className="form-group" row>
                        <TextInput name="tb" label="TB" md={2} {...{ register, errors }}/>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup className="form-group" row>
                        <TextInput name="suhu" label="T" md={2} {...{ register, errors }}/>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </div>
            </CardBody>
          </Card>

          {/*Lokasi*/}
          <Card className="border-1">
            <CardBody>
              <div className="col-form-label fw-bolder">Lokasi</div>
              <FormGroup className='form-group'>
                <Table borderless style={{ width: '100%' }}>
                  <thead>
                    <tr style={{ textAlign: 'center' }} className="fw-bolder">
                      <th style={{ width: '18%' }}></th>
                      <th style={{ width: '41%' }}>
                        OD
                      </th>
                      <th style={{ width: '41%' }}>
                        OS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="fw-bold">
                      <td></td>
                      <td>
                        <EyeImage
                          initialImage={(data && data.form && data.form.Gambar_Mata_OD && data.form.Gambar_Mata_OD !== '') ? data.form.Gambar_Mata_OD : undefined}
                          formName='inpatient/inpatient-initial-nursing-assessment'
                          component='gambar_mata_od'
                          onSaved={(image: string) => handleImageOD(image)}
                        />
                        <Input
                          id="gambar-mata-od"
                          type="hidden"
                          name="gambar-mata-od"
                          innerRef={register()}
                          invalid={errors["gambar-mata-od"] && true}
                        />
                      </td>
                      <td>
                        <EyeImage
                          initialImage={(data && data.form && data.form.Gambar_Mata_OS && data.form.Gambar_Mata_OS !== '') ? data.form.Gambar_Mata_OS : undefined}
                          formName='inpatient/inpatient-initial-nursing-assessment'
                          component='gambar_mata_os'
                          onSaved={(image: string) => handleImageOS(image)}
                        />
                        <Input
                          id="gambar-mata-os"
                          type="hidden"
                          name="gambar-mata-os"
                          innerRef={register()}
                          invalid={errors["gambar-mata-os"] && true}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </FormGroup>
            </CardBody>
          </Card>

          {/*Nutrisi*/}
          <Card className="border-1">
            <CardBody>
              <div className="col-form-label fw-bolder">Nutrisi</div>
              <div style={{ paddingLeft: "1rem" }}>
                <div className="col-form-label fw-bolder">1. Apakah Pasien Mengalami Penurunan Berat Badan Yang Tidak Diinginkan Dalam 6 Bulan Terakhir</div>
                <div style={{ paddingLeft: "1rem" }}>
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="nutrisi_turun_bb"
                      className="me-1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Nutrisi_Turun_Bb === '0'}
                      value="0"
                      innerRef={register("nutrisi_turun_bb") as any}
                    />{' '}
                    <Label check>
                      Tidak Ada
                    </Label>
                  </FormGroup>
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="nutrisi_turun_bb"
                      className="me-1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Nutrisi_Turun_Bb === '1'}
                      value="1"
                      innerRef={register("nutrisi_turun_bb") as any}
                    />{' '}
                    <Label check>
                      Tidak Yakin / Tidak Tahu / Baju Terasa Lebih Longgar
                    </Label>
                  </FormGroup>
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="nutrisi_turun_bb"
                      className="me-1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Nutrisi_Turun_Bb === '2'}
                      value="2"
                      innerRef={register("nutrisi_turun_bb") as any}
                    />{' '}
                    <Label check>
                      Ya, Sekitar 1 - 5 Kg
                    </Label>
                  </FormGroup>
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="nutrisi_turun_bb"
                      className="me-1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Nutrisi_Turun_Bb === '3'}
                      value="3"
                      innerRef={register("nutrisi_turun_bb") as any}
                    />{' '}
                    <Label check>
                      Ya, Sekitar 6 - 10 Kg
                    </Label>
                  </FormGroup>
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="nutrisi_turun_bb"
                      className="me-1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Nutrisi_Turun_Bb === '4'}
                      value="4"
                      innerRef={register("nutrisi_turun_bb") as any}
                    />{' '}
                    <Label check>
                      Ya, Sekitar 11 - 15 Kg
                    </Label>
                  </FormGroup>
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="nutrisi_turun_bb"
                      className="me-1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Nutrisi_Turun_Bb === '5'}
                      value="5"
                      innerRef={register("nutrisi_turun_bb") as any}
                    />{' '}
                    <Label check>
                      Ya, Lebih Dari 15 Kg
                    </Label>
                  </FormGroup>
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="nutrisi_turun_bb"
                      className="me-1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Nutrisi_Turun_Bb === '6'}
                      value="6"
                      innerRef={register("nutrisi_turun_bb") as any}
                    />{' '}
                    <Label check>
                      Tidak yakin penurunannya
                    </Label>
                  </FormGroup>
                </div>

                <div className="col-form-label fw-bolder">2. Apakah Asupan Makan Berkurang Karena Berkurangnya Nafsu Makan</div>
                <div style={{ paddingLeft: "1rem" }}>
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="asupan_makan"
                      className="me-1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Asupan_Makan === '0'}
                      value="0"
                      innerRef={register("asupan_makan") as any}
                    />{' '}
                    <Label check>
                      Tidak
                    </Label>
                  </FormGroup>
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="asupan_makan"
                      className="me-1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Asupan_Makan === '1'}
                      value="1"
                      innerRef={register("asupan_makan") as any}
                    />{' '}
                    <Label check>
                      Ya
                    </Label>
                  </FormGroup>
                </div>

                <div className="col-form-label fw-bolder">3. Pasien Dengan Diagnosa Khusus?</div>
                <div style={{ paddingLeft: "1rem" }}>
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="diagnosa_khusus"
                      className="me-1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Diagnosa_Khusus === '0'}
                      value="0"
                      innerRef={register("diagnosa_khusus") as any}
                    />{' '}
                    <Label check>
                      Tidak
                    </Label>
                  </FormGroup>
                  <Row>
                    <Col md="2">
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="diagnosa_khusus"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data && data.form && data.form.Diagnosa_Khusus === '1'}
                          value="1"
                          innerRef={register("diagnosa_khusus") as any}
                        />{' '}
                        <Label check>
                          Ya
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup className="form-group" row>
                        <TextInput name="diagnosa" nolabel {...{ register, errors }}/>
                      </FormGroup>
                    </Col>
                  </Row>

                  <div className="col-form-label fw-bolder">Jenis Penyakit</div>
                  <div style={{ paddingLeft: "1rem" }}>
                    <Row>
                      <Col md="2">
                        <FormGroup check className="app-form-check">
                          <Input
                            type="checkbox"
                            name="jenis_penyakit[]"
                            className="me-1"
                            onChange={(e) => handleJenisPenyakit(e)}
                            defaultChecked={data && data.form && data.form.Penyakit?.Dm === 1}
                            value="1"
                            innerRef={register("jenis_penyakit[]") as any}
                          />{' '}
                          <Label check>
                            DM
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col md="2">
                        <FormGroup check className="app-form-check">
                          <Input
                            type="checkbox"
                            name="jenis_penyakit[]"
                            className="me-1"
                            onChange={(e) => handleJenisPenyakit(e)}
                            defaultChecked={data && data.form && data.form.Penyakit?.Ginjal === 1}
                            value="2"
                            innerRef={register("jenis_penyakit[]") as any}
                          />{' '}
                          <Label check>
                            Ginjal
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col md="2">
                        <FormGroup check className="app-form-check">
                          <Input
                            type="checkbox"
                            name="jenis_penyakit[]"
                            className="me-1"
                            onChange={(e) => handleJenisPenyakit(e)}
                            defaultChecked={data && data.form && data.form.Penyakit?.Hati === 1}
                            value="3"
                            innerRef={register("jenis_penyakit[]") as any}
                          />{' '}
                          <Label check>
                            Hati
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col md="2">
                        <FormGroup check className="app-form-check">
                          <Input
                            type="checkbox"
                            name="jenis_penyakit[]"
                            className="me-1"
                            onChange={(e) => handleJenisPenyakit(e)}
                            defaultChecked={data && data.form && data.form.Penyakit?.Jantung === 1}
                            value="4"
                            innerRef={register("jenis_penyakit[]") as any}
                          />{' '}
                          <Label check>
                            Jantung
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col md="2">
                        <FormGroup check className="app-form-check">
                          <Input
                            type="checkbox"
                            name="jenis_penyakit[]"
                            className="me-1"
                            onChange={(e) => handleJenisPenyakit(e)}
                            defaultChecked={data && data.form && data.form.Penyakit?.Paru === 1}
                            value="5"
                            innerRef={register("jenis_penyakit[]") as any}
                          />{' '}
                          <Label check>
                            Paru
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="2">
                        <FormGroup check className="app-form-check">
                          <Input
                            type="checkbox"
                            name="jenis_penyakit[]"
                            className="me-1"
                            onChange={(e) => handleJenisPenyakit(e)}
                            defaultChecked={data && data.form && data.form.Penyakit?.Stroke === 1}
                            value="6"
                            innerRef={register("jenis_penyakit[]") as any}
                          />{' '}
                          <Label check>
                            Stroke
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col md="2">
                        <FormGroup check className="app-form-check">
                          <Input
                            type="checkbox"
                            name="jenis_penyakit[]"
                            className="me-1"
                            onChange={(e) => handleJenisPenyakit(e)}
                            defaultChecked={data && data.form && data.form.Penyakit?.Kanker === 1}
                            value="7"
                            innerRef={register("jenis_penyakit[]") as any}
                          />{' '}
                          <Label check>
                            Kanker
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col md="2">
                        <FormGroup check className="app-form-check">
                          <Input
                            type="checkbox"
                            name="jenis_penyakit[]"
                            className="me-1"
                            onChange={(e) => handleJenisPenyakit(e)}
                            defaultChecked={data && data.form && data.form.Penyakit?.Geriatri === 1}
                            value="8"
                            innerRef={register("jenis_penyakit[]") as any}
                          />{' '}
                          <Label check>
                            Penurunan Imunitas Geriatri
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col>
                        <Row>
                          <Col md="2">
                            <FormGroup check className="app-form-check">
                              <Input
                                type="checkbox"
                                name="jenis_penyakit[]"
                                className="me-1"
                                onChange={(e) => handleJenisPenyakit(e)}
                                defaultChecked={data && data.form && data.form.Penyakit?.Lain === 1}
                                value="9"
                                innerRef={register("jenis_penyakit[]") as any}
                              />{' '}
                              <Label check>
                                Lain-lain
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col md='4'>
                            <FormGroup className="form-group" row>
                              <TextInput name="jenis_penyakit_keterangan" nolabel {...{ register, errors }}/>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>

                </div>

                <div className="col-form-label fw-bolder">4. Diketahui Oleh Nutrisionis?</div>
                <div style={{ paddingLeft: "1rem" }}>
                  <Row>
                    <Col>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="nutrisionis"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data && data.form && data.form.Nutrisionis === '0'}
                          value="0"
                          innerRef={register("nutrisionis") as any}
                        />{' '}
                        <Label check>
                          Tidak
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="2">
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="nutrisionis"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data && data.form && data.form.Nutrisionis === '1'}
                          value="1"
                          innerRef={register("nutrisionis") as any}
                        />{' '}
                        <Label check>
                          Ya, Tanggal & Jam
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup className="form-group" row>
                        <DateTimeInput name="nutrisionis_tanggal" label="" {...{ register, errors }}/>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>

                <div className="col-form-label fw-bolder">5. Resiko Cedera / Jatuh</div>
                <div style={{ paddingLeft: "1rem" }}>
                  <Row>
                    <Col>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="risiko_jatuh"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data && data.form && data.form.Risiko_Jatuh === '0'}
                          value="0"
                          innerRef={register("risiko_jatuh") as any}
                        />{' '}
                        <Label check>
                          Tidak
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="risiko_jatuh"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data && data.form && data.form.Risiko_Jatuh === '1'}
                          value="1"
                          innerRef={register("risiko_jatuh") as any}
                        />{' '}
                        <Label check>
                          Ya
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="col-form-label fw-bolder">* Bila Ya Isi Form Monitoring Pencegahan Jatuh dan Pasang Gelang Resiko Jatuh Warna Kuning</div>
                </div>

                <div className="col-form-label fw-bolder">6. Status Fungsional</div>
                <div style={{ paddingLeft: "1rem" }}>
                  <Row>
                    <Col>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="status_fungsional"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data && data.form && data.form.Status_Fungsional === '0'}
                          value="0"
                          innerRef={register("status_fungsional") as any}
                        />{' '}
                        <Label check>
                          Mandiri
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="2">
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="status_fungsional"
                          className="me-1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data && data.form && data.form.Status_Fungsional === '1'}
                          value="1"
                          innerRef={register("status_fungsional") as any}
                        />{' '}
                        <Label check>
                          Perlu Bantuan
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup className="form-group" row>
                        <TextInput name="status_fungsional_keterangan" nolabel {...{ register, errors }}/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup className="form-group" row>
                    <SelectInput name="alat_bantu_jalan" label="Alat Bantu Jalan" md="2" {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      <option value="Kursi Roda">Kursi Roda</option>;
                      <option value="Kruk">Kruk</option>;
                      <option value="Tripod">Tripod</option>;
                      <option value="Orang Lain">Orang Lain</option>;
                    </SelectInput>
                  </FormGroup>
                </div>

              </div>
            </CardBody>
          </Card>

          {/*Skala Nyeri*/}
          <Card className="border-1">
            <CardBody>
              <Row>
                <Col md='2'>
                  <Label>Skala Nyeri</Label>
                </Col>
                <Col md='10' className='align-items-center justify-content-center text-center'>
                  <div className='d-flex'>
                    <div className='ms-2'>
                      <Input
                        id="skala-nyeri-1"
                        type="radio"
                        name="skala_nyeri"
                        onChange={(e) => {
                          handleRadioChange(e)
                          setSkalaNyeri('0');
                        }}
                        checked={!!(skalaNyeri === '0')}
                        value="0"
                        innerRef={register({ required: true })}
                      />{' '}
                      <Label>0</Label>
                    </div>
                    <div className='ms-2'>
                      <Input
                        id="skala-nyeri-1"
                        type="radio"
                        name="skala_nyeri"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Skala_Nyeri === '1'}
                        value="1"
                        innerRef={register({ required: true })}
                      />{' '}
                      <Label>1</Label>
                    </div>
                    <div className='ms-2'>
                      <Input
                        id="skala-nyeri-2"
                        type="radio"
                        name="skala_nyeri"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Skala_Nyeri === '2'}
                        value="2"
                        innerRef={register({ required: true })}
                      />{' '}
                      <Label>2</Label>
                    </div>
                    <div className='ms-2'>
                      <Input
                        id="skala-nyeri-3"
                        type="radio"
                        name="skala_nyeri"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Skala_Nyeri === '3'}
                        value="3"
                        innerRef={register({ required: true })}
                      />{' '}
                      <Label>3</Label>
                    </div>
                    <div className='ms-2'>
                      <Input
                        id="skala-nyeri-4"
                        type="radio"
                        name="skala_nyeri"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Skala_Nyeri === '4'}
                        value="4"
                        innerRef={register({ required: true })}
                      />{' '}
                      <Label>4</Label>
                    </div>
                    <div className='ms-2'>
                      <Input
                        id="skala-nyeri-5"
                        type="radio"
                        name="skala_nyeri"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Skala_Nyeri === '5'}
                        value="5"
                        innerRef={register({ required: true })}
                      />{' '}
                      <Label>5</Label>
                    </div>
                    <div className='ms-2'>
                      <Input
                        id="skala-nyeri-6"
                        type="radio"
                        name="skala_nyeri"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Skala_Nyeri === '6'}
                        value="6"
                        innerRef={register({ required: true })}
                      />{' '}
                      <Label>6</Label>
                    </div>
                    <div className='ms-2'>
                      <Input
                        id="skala-nyeri-7"
                        type="radio"
                        name="skala_nyeri"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Skala_Nyeri === '7'}
                        value="7"
                        innerRef={register({ required: true })}
                      />{' '}
                      <Label>7</Label>
                    </div>
                    <div className='ms-2'>
                      <Input
                        id="skala-nyeri-8"
                        type="radio"
                        name="skala_nyeri"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Skala_Nyeri === '8'}
                        value="8"
                        innerRef={register({ required: true })}
                      />{' '}
                      <Label>8</Label>
                    </div>
                    <div className='ms-2'>
                      <Input
                        id="skala-nyeri-9"
                        type="radio"
                        name="skala_nyeri"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Skala_Nyeri === '9'}
                        value="9"
                        innerRef={register({ required: true })}
                      />{' '}
                      <Label>9</Label>
                    </div>
                    <div className='ms-2'>
                      <Input
                        id="skala-nyeri-10"
                        type="radio"
                        name="skala_nyeri"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data && data.form && data.form.Skala_Nyeri === '10'}
                        value="10"
                        innerRef={register({ required: true })}
                      />{' '}
                      <Label>10</Label>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className='ms-3'>
                  <Image
                    src='/assets/default/skala-nyeri.png'
                    width='1000rem'
                    height='150rem'
                    objectFit='contain'
                  />
                </Col>
              </Row>
              <FormGroup className='form-group' row>
                <Col md='2'>
                  <Label>Skrining Nyeri</Label>
                </Col>
                <Col md='2'>
                  <Input
                    type='radio'
                    name="skrining_nyeri"
                    className="me-1"
                    defaultChecked={!!(data && data.form && data.form.Skrining_Nyeri === '0')}
                    value="0"
                    innerRef={register('skrining_nyeri') as any}
                  />
                  <Label>
                    Tidak
                  </Label>
                </Col>
                <Col md='2'>
                  <Input
                    type='radio'
                    name="skrining_nyeri"
                    className="me-1"
                    defaultChecked={!!(data && data.form && data.form.Skrining_Nyeri === '1')}
                    value="1"
                    innerRef={register('skrining_nyeri') as any}
                  />
                  <Label>
                    Ya
                  </Label>
                </Col>
              </FormGroup>
              <FormGroup className='form-group mt-2' row>
                <Col md='2'>
                  <Label>Provocating (Penyebab / Pemicu)</Label>
                </Col>
                <Col md='3'>
                  <Input
                    type='text'
                    name="provocating"
                    className="me-1"
                    innerRef={register({ required: false })}
                  />
                </Col>
              </FormGroup>
              <FormGroup className='form-group mt-2' row>
                <Col md='2'>
                  <Label>Quality (Kualitas Nyeri)</Label>
                </Col>
                <Col md='3'>
                  <Input
                    type='text'
                    name="quality"
                    className="me-1"
                    innerRef={register({ required: false })}
                  />
                </Col>
              </FormGroup>
              <FormGroup className='form-group mt-2' row>
                <Col md='2'>
                  <Label>Region (Lokasi)</Label>
                </Col>
                <Col md='3'>
                  <Input
                    type='text'
                    name="region"
                    className="me-1"
                    innerRef={register({ required: false })}
                  />
                </Col>
              </FormGroup>
              <FormGroup className='form-group mt-2' row>
                <Col md='2'>
                  <Label>Severity (Skala Nyeri)</Label>
                </Col>
                <Col md='3'>
                  <Input
                    type='text'
                    name="severity"
                    className="me-1"
                    innerRef={register({ required: false })}
                  />
                </Col>
              </FormGroup>
              <FormGroup className='form-group mt-2' row>
                <Col md='2'>
                  <Label>Time (Durasi, Frekuensi)</Label>
                </Col>
                <Col md='3'>
                  <Input
                    type='text'
                    name="time"
                    className="me-1"
                    innerRef={register({ required: false })}
                  />
                </Col>
              </FormGroup>
            </CardBody>
          </Card>

          <Card className="border-1">
            <CardBody>
              <div className="col-form-label fw-bolder">Nyeri Hilang</div>
              <div style={{ paddingLeft: "1rem" }}>
                <Row>
                  <Col>
                    <FormGroup check className="app-form-check">
                      <Input
                        type="checkbox"
                        name="nyeri_hilang[]"
                        className="me-1"
                        onChange={(e) => handleNyeriHilang(e)}
                        defaultChecked={data && data.form && data.form.Nyeri_Hilang?.Minum_Obat === 1}
                        value="1"
                        innerRef={register("nyeri_hilang[]") as any}
                      />{' '}
                      <Label check>
                        Minum Obat
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup check className="app-form-check">
                      <Input
                        type="checkbox"
                        name="nyeri_hilang[]"
                        className="me-1"
                        onChange={(e) => handleNyeriHilang(e)}
                        defaultChecked={data && data.form && data.form.Nyeri_Hilang?.Istirahat === 1}
                        value="2"
                        innerRef={register("nyeri_hilang[]") as any}
                      />{' '}
                      <Label check>
                        Istirahat
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup check className="app-form-check">
                      <Input
                        type="checkbox"
                        name="nyeri_hilang[]"
                        className="me-1"
                        onChange={(e) => handleNyeriHilang(e)}
                        defaultChecked={data && data.form && data.form.Nyeri_Hilang?.Mendengar_Musik === 1}
                        value="3"
                        innerRef={register("nyeri_hilang[]") as any}
                      />{' '}
                      <Label check>
                        Mendengar Musik
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup check className="app-form-check">
                      <Input
                        type="checkbox"
                        name="nyeri_hilang[]"
                        className="me-1"
                        onChange={(e) => handleNyeriHilang(e)}
                        defaultChecked={data && data.form && data.form.Nyeri_Hilang?.Posisi_Tidur === 1}
                        value="4"
                        innerRef={register("nyeri_hilang[]") as any}
                      />{' '}
                      <Label check>
                        Berubah Posisi Tidur
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup check className="app-form-check">
                      <Input
                        type="checkbox"
                        name="nyeri_hilang[]"
                        className="me-1"
                        onChange={(e) => handleNyeriHilang(e)}
                        defaultChecked={data && data.form && data.form.Nyeri_Hilang?.Lainnya === 1}
                        value="5"
                        innerRef={register("nyeri_hilang[]") as any}
                      />{' '}
                      <Label check>
                        Lainnya
                      </Label>{' '}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col>
                    <Input
                      type='text'
                      name='nyeri_hilang_lainnya_text'
                      innerRef={register({ required: false })}
                    />
                  </Col>
                </Row>
              </div>

              <div className="col-form-label fw-bolder">Kebutuhan Edukasi</div>
              <div style={{ paddingLeft: "1rem" }}>
                <div className="col-form-label fw-bolder">Hambatan dalam Pembelajaran</div>
                <div style={{ paddingLeft: "1rem" }}>
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="hambatan"
                      className="me-1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Hambatan === '0'}
                      value="1"
                      innerRef={register("hambatan") as any}
                    />{' '}
                    <Label check>
                      Ya
                    </Label>
                  </FormGroup>
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="hambatan"
                      className="me-1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Hambatan === '1'}
                      value="0"
                      innerRef={register("hambatan") as any}
                    />{' '}
                    <Label check>
                      Tidak
                    </Label>
                  </FormGroup>
                </div>

                <div className="col-form-label fw-bolder">Jenis Hambatan</div>
                <div style={{ paddingLeft: "1rem" }}>
                  <Row>
                    <Col md="6">
                      <Row>
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="checkbox"
                              name="jenis_hambatan[]"
                              className="me-1"
                              onChange={(e) => handleJenisHambatan(e)}
                              defaultChecked={data && data.form && data.form.Jenis_Hambatan?.Pendengaran === 1}
                              value="1"
                              innerRef={register("jenis_hambatan[]") as any}
                            />{' '}
                            <Label check>
                              Pendengaran
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="checkbox"
                              name="jenis_hambatan[]"
                              className="me-1"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setJenis(true);
                                } else {
                                  setJenis(false);
                                }
                                handleJenisHambatan(e);
                              }}
                              checked={jenis}
                              value="2"
                              innerRef={register("jenis_hambatan[]") as any}
                            />{' '}
                            <Label check>
                              Penglihatan
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="checkbox"
                              name="jenis_hambatan[]"
                              className="me-1"
                              onChange={(e) => handleJenisHambatan(e)}
                              defaultChecked={data && data.form && data.form.Jenis_Hambatan?.Kognitif === 1}
                              value="3"
                              innerRef={register("jenis_hambatan[]") as any}
                            />{' '}
                            <Label check>
                              Kognitif
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Col>
                    <Col md="6">
                      <Row>
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="checkbox"
                              name="jenis_hambatan[]"
                              className="me-1"
                              onChange={(e) => handleJenisHambatan(e)}
                              defaultChecked={data && data.form && data.form.Jenis_Hambatan?.Fisik === 1}
                              value="4"
                              innerRef={register("jenis_hambatan[]") as any}
                            />{' '}
                            <Label check>
                              Fisik
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="checkbox"
                              name="jenis_hambatan[]"
                              className="me-1"
                              onChange={(e) => handleJenisHambatan(e)}
                              defaultChecked={data && data.form && data.form.Jenis_Hambatan?.Budaya === 1}
                              value="5"
                              innerRef={register("jenis_hambatan[]") as any}
                            />{' '}
                            <Label check>
                              Budaya
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="checkbox"
                              name="jenis_hambatan[]"
                              className="me-1"
                              onChange={(e) => handleJenisHambatan(e)}
                              defaultChecked={data && data.form && data.form.Jenis_Hambatan?.Agama === 1}
                              value="6"
                              innerRef={register("jenis_hambatan[]") as any}
                            />{' '}
                            <Label check>
                              Agama
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <Row>
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="checkbox"
                              name="jenis_hambatan[]"
                              className="me-1"
                              onChange={(e) => handleJenisHambatan(e)}
                              defaultChecked={data && data.form && data.form.Jenis_Hambatan?.Emosi === 1}
                              value="7"
                              innerRef={register("jenis_hambatan[]") as any}
                            />{' '}
                            <Label check>
                              Emosi
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="checkbox"
                              name="jenis_hambatan[]"
                              className="me-1"
                              onChange={(e) => handleJenisHambatan(e)}
                              defaultChecked={data && data.form && data.form.Jenis_Hambatan?.Bahasa === 1}
                              value="8"
                              innerRef={register("jenis_hambatan[]") as any}
                            />{' '}
                            <Label check>
                              Bahasa
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="checkbox"
                              name="jenis_hambatan[]"
                              className="me-1"
                              onChange={(e) => handleJenisHambatan(e)}
                              defaultChecked={data && data.form && data.form.Jenis_Hambatan?.Lain === 1}
                              value="9"
                              innerRef={register("jenis_hambatan[]") as any}
                            />{' '}
                            <Label check>
                              Lainnya
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Col>
                    <Col md="6">
                      <FormGroup className="form-group" row>
                        <TextInput name="jenis_hambatan_lain_keterangan" nolabel {...{ register, errors }}/>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>

                <div className="col-form-label fw-bolder">Topik Pembelajaran Pasien</div>
                <div style={{ paddingLeft: "1rem" }}>
                  <Row>
                    <Col md="6">
                      <Row>
                        <Col md="8">
                          <FormGroup check className="app-form-check">
                            <Input
                              type="checkbox"
                              name="topik_pembelajaran[]"
                              className="me-1"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setDiagnosis(true);
                                } else {
                                  setDiagnosis(false);
                                }
                                handleTopikPembelajaran(e);
                              }}
                              // defaultChecked={data && data.form && data.form.Topik_Pembelajaran?.Diagnosis_Manajemen_Penyakit === 1}
                              checked={diagnosis}
                              value="1"
                              innerRef={register("topik_pembelajaran[]") as any}
                            />{' '}
                            <Label check>
                              Diagnosis & Manajemen Penyakit
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="checkbox"
                              name="topik_pembelajaran[]"
                              className="me-1"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setObat(true);
                                } else {
                                  setObat(false);
                                }
                                handleTopikPembelajaran(e);
                              }}
                              // defaultChecked={data && data.form && data.form.Topik_Pembelajaran?.Obat === 1}
                              value="2"
                              checked={obat}
                              innerRef={register("topik_pembelajaran[]") as any}
                            />{' '}
                            <Label check>
                              Obat - obatan
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Col>
                    <Col md="6">
                      <Row>
                        <Col md="4">
                          <FormGroup check className="app-form-check">
                            <Input
                              type="checkbox"
                              name="topik_pembelajaran[]"
                              className="me-1"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setDiet(true);
                                } else {
                                  setDiet(false);
                                }
                                handleTopikPembelajaran(e);
                              }}
                              // defaultChecked={data && data.form && data.form.Topik_Pembelajaran?.Diet_Nutrisi === 1}
                              value="3"
                              checked={diet}
                              innerRef={register("topik_pembelajaran[]") as any}
                            />{' '}
                            <Label check>
                              Diet dan Nutrisi
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="checkbox"
                              name="topik_pembelajaran[]"
                              className="me-1"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setTindakanKeperawatan(true);
                                } else {
                                  setTindakanKeperawatan(false);
                                }
                                handleTopikPembelajaran(e);
                              }}
                              // defaultChecked={data && data.form && data.form.Topik_Pembelajaran?.Keperawatan === 1}
                              value="4"
                              checked={tindakanKeperawatan}
                              innerRef={register("topik_pembelajaran[]") as any}
                            />{' '}
                            <Label check>
                              Tindakan Keperawatan
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <Row>
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="checkbox"
                              name="topik_pembelajaran[]"
                              className="me-1"
                              onChange={(e) => handleTopikPembelajaran(e)}
                              defaultChecked={data && data.form && data.form.Topik_Pembelajaran?.Rehabilitasi === 1}
                              value="5"
                              innerRef={register("topik_pembelajaran[]") as any}
                            />{' '}
                            <Label check>
                              Rehabilitasi
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="checkbox"
                              name="topik_pembelajaran[]"
                              className="me-1"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setManajemenNyeri(true);
                                } else {
                                  setManajemenNyeri(false);
                                }
                                handleTopikPembelajaran(e);
                              }}
                              // defaultChecked={data && data.form && data.form.Topik_Pembelajaran?.Manajemen_Nyeri === 1}
                              value="6"
                              checked={manajemenNyeri}
                              innerRef={register("topik_pembelajaran[]") as any}
                            />{' '}
                            <Label check>
                              Manajemen Nyeri
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="checkbox"
                              name="topik_pembelajaran[]"
                              className="me-1"
                              onChange={(e) => handleTopikPembelajaran(e)}
                              defaultChecked={data && data.form && data.form.Topik_Pembelajaran?.Lain === 1}
                              value="7"
                              innerRef={register("topik_pembelajaran[]") as any}
                            />{' '}
                            <Label check>
                              Lain - lain
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Col>
                    <Col md="6">
                      <FormGroup className="form-group" row>
                        <TextInput name="jenis_hambatan_lain_keterangan" nolabel {...{ register, errors }}/>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>

              </div>

              <div style={{ paddingLeft: "1rem" }} className='mt-3'>
                <Label>Status Fungsional (Berdasarkan Penilaian Barthel Index Diatas 60 Tahun)</Label>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th rowSpan={2}>No</th>
                      <th rowSpan={2}>Aktivitas</th>
                      <th rowSpan={2}>Penilaian</th>
                      <th colSpan={6} className='text-center'>Nilai</th>
                    </tr>
                    <tr>
                      <th>Sebelum Sakit</th>
                      <th>Saat Masuk Rs</th>
                      <th>Hari II Di RS</th>
                      <th>Hari III Di RS</th>
                      <th>Hari IV Di RS</th>
                      <th>Saat Pulang</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Makan</td>
                      <td>
                        <div>
                          <Label>0 = Tidak mampu</Label>
                        </div>
                        <div>
                          <Label>1 = Butuh bantuan memotong,mengoles mentega dll</Label>
                        </div>
                        <div>
                          <Label>2 = Mandiri</Label>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "sebelum_sakit_makan"
                            name= "sebelum_sakit_makan"
                            style={{ width: '50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_masuk_makan"
                            name= "saat_masuk_makan"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_2_makan"
                            name= "minggu_2_makan"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_3_makan"
                            name= "minggu_3_makan"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_4_makan"
                            name= "minggu_4_makan"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_pulang_makan"
                            name= "saat_pulang_makan"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Mandi</td>
                      <td>
                        <div>
                          <Label>0 = Tergantung Orang Lain</Label>
                        </div>
                        <div>
                          <Label>1 = Mandiri</Label>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "sebelum_sakit_mandi"
                            name= "sebelum_sakit_mandi"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_masuk_mandi"
                            name= "saat_masuk_mandi"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_2_mandi"
                            name= "minggu_2_mandi"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_3_mandi"
                            name= "minggu_3_mandi"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_4_mandi"
                            name= "minggu_4_mandi"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_pulang_mandi"
                            name= "saat_pulang_mandi"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Perawatan Diri</td>
                      <td>
                        <div>
                          <Label>0 = Membutuhkan Bantuan Orang Lain</Label>
                        </div>
                        <div>
                          <Label>1 = Mandiri Dalam Perawatan Muka, Rambut, Gigi Dan Bercukur</Label>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "sebelum_sakit_perawatan_diri"
                            name= "sebelum_sakit_perawatan_diri"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_masuk_perawatan_diri"
                            name= "saat_masuk_perawatan_diri"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_2_perawatan_diri"
                            name= "minggu_2_perawatan_diri"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_3_perawatan_diri"
                            name= "minggu_3_perawatan_diri"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_4_perawatan_diri"
                            name= "minggu_4_perawatan_diri"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_pulang_perawatan_diri"
                            name= "saat_pulang_perawatan_diri"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Berpakaian</td>
                      <td>
                        <div>
                          <Label>0 = Tergantung Orang Lain</Label>
                        </div>
                        <div>
                          <Label>1 = Sebagian Dibantu(Misal Mengancing Baju)</Label>
                        </div>
                        <div>
                          <Label>2 = Mandiri</Label>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "sebelum_sakit_berpakaian"
                            name= "sebelum_sakit_berpakaian"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_masuk_berpakaian"
                            name= "saat_masuk_berpakaian"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_2_berpakaian"
                            name= "minggu_2_berpakaian"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_3_berpakaian"
                            name= "minggu_3_berpakaian"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_4_berpakaian"
                            name= "minggu_4_berpakaian"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_pulang_berpakaian"
                            name= "saat_pulang_berpakaian"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Buang Air Kecil (BAK)</td>
                      <td>
                        <div>
                          <Label>0 = Inkontinensia (Tidak Teratur atau Perlu Enema)</Label>
                        </div>
                        <div>
                          <Label>1 = Kadang Inkontinensia (Maks. 1x24 Jam)</Label>
                        </div>
                        <div>
                          <Label>2 = Kontinensia (Teratur)</Label>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "sebelum_sakit_bak"
                            name= "sebelum_sakit_bak"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_masuk_bak"
                            name= "saat_masuk_bak"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_2_bak"
                            name= "minggu_2_bak"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_3_bak"
                            name= "minggu_3_bak"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_4_bak"
                            name= "minggu_4_bak"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_pulang_bak"
                            name= "saat_pulang_bak"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Buang Air Besar (BAB)</td>
                      <td>
                        <div>
                          <Label>0 = Inkontinensia (Tidak Teratur atau Perlu Enema)</Label>
                        </div>
                        <div>
                          <Label>1 = Kadang Inkontinensia (Sekali Seminggu)</Label>
                        </div>
                        <div>
                          <Label>2 = Kontinensia (Teratur)</Label>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "sebelum_sakit_bab"
                            name= "sebelum_sakit_bab"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_masuk_bab"
                            name= "saat_masuk_bab"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_2_bab"
                            name= "minggu_2_bab"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_3_bab"
                            name= "minggu_3_bab"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_4_bab"
                            name= "minggu_4_bab"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_pulang_bab"
                            name= "saat_pulang_bab"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Penggunaan Toilet</td>
                      <td>
                        <div>
                          <Label>0 = Tergantung Bantuan Orang Lain</Label>
                        </div>
                        <div>
                          <Label>1 = Membutuhkan Bantuan, Tapi dapat Melakukan Beberapa Hal Sendiri</Label>
                        </div>
                        <div>
                          <Label>2 = Mandiri</Label>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "sebelum_sakit_penggunaan_toilet"
                            name= "sebelum_sakit_penggunaan_toilet"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_masuk_penggunaan_toilet"
                            name= "saat_masuk_penggunaan_toilet"
                            style={{width:'50px'}}
                            innerRef={register({ required: true })}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_2_penggunaan_toilet"
                            name= "minggu_2_penggunaan_toilet"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_3_penggunaan_toilet"
                            name= "minggu_3_penggunaan_toilet"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_4_penggunaan_toilet"
                            name= "minggu_4_penggunaan_toilet"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_pulang_penggunaan_toilet"
                            name= "saat_pulang_penggunaan_toilet"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Transfer</td>
                      <td>
                        <div>
                          <Label>0 = Tidak Mampu</Label>
                        </div>
                        <div>
                          <Label>1 = Butuh Bantuan Untuk Bisa Duduk (2 Orang)</Label>
                        </div>
                        <div>
                          <Label>2 = Bantuan Kecil (1 Orang)</Label>
                        </div>
                        <div>
                          <Label>3 = Mandiri</Label>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "sebelum_sakit_transfer"
                            name= "sebelum_sakit_transfer"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_masuk_transfer"
                            name= "saat_masuk_transfer"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_2_transfer"
                            name= "minggu_2_transfer"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_3_transfer"
                            name= "minggu_3_transfer"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_4_transfer"
                            name= "minggu_4_transfer"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_pulang_transfer"
                            name= "saat_pulang_transfer"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Mobilitas</td>
                      <td>
                        <div>
                          <Label>0 = Immobile(Tidak Mampu)</Label>
                        </div>
                        <div>
                          <Label>1 = Menggunakan Kursi Roda</Label>
                        </div>
                        <div>
                          <Label>2 = Berjalan Dengan Bantuan Satu Orang</Label>
                        </div>
                        <div>
                          <Label>3 = Mandiri (Meskipun Menggunakan Alat Bantu Seperti Tongkat)</Label>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "sebelum_sakit_mobilitas"
                            name= "sebelum_sakit_mobilitas"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_masuk_mobilitas"
                            name= "saat_masuk_mobilitas"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_2_mobilitas"
                            name= "minggu_2_mobilitas"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_3_mobilitas"
                            name= "minggu_3_mobilitas"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_4_mobilitas"
                            name= "minggu_4_mobilitas"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_pulang_mobilitas"
                            name= "saat_pulang_mobilitas"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Naik Turun Tangga</td>
                      <td>
                        <div>
                          <Label>0 = Tidak Mampu</Label>
                        </div>
                        <div>
                          <Label>1 = Membutuhkan Bantuan (Alat Bantu)</Label>
                        </div>
                        <div>
                          <Label>2 = Mandiri</Label>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "sebelum_sakit_naik_turun_tangga"
                            name= "sebelum_sakit_naik_turun_tangga"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_masuk_naik_turun_tangga"
                            name= "saat_masuk_naik_turun_tangga"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_2_naik_turun_tangga"
                            name= "minggu_2_naik_turun_tangga"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_3_naik_turun_tangga"
                            name= "minggu_3_naik_turun_tangga"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_4_naik_turun_tangga"
                            name= "minggu_4_naik_turun_tangga"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_pulang_naik_turun_tangga"
                            name= "saat_pulang_naik_turun_tangga"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} className='text-center'>Total</td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            id='sebelum_sakit_total'
                            name='sebelum_sakit_total'
                            type="number"
                            style={{width:'50px'}}
                            innerRef={register()}
                            readOnly
                          />
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            id='saat_masuk_total'
                            name='saat_masuk_total'
                            type="number"
                            style={{width:'50px'}}
                            innerRef={register()}
                            readOnly
                          />
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            id='minggu_2_total'
                            name='minggu_2_total'
                            type='number'
                            style={{width:'50px'}}
                            innerRef={register()}
                            readOnly
                          />
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            id='minggu_3_total'
                            name='minggu_3_total'
                            type='number'
                            style={{width:'50px'}}
                            innerRef={register()}
                            readOnly
                          />
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            id='minggu_4_total'
                            name='minggu_4_total'
                            type='number'
                            style={{width:'50px'}}
                            innerRef={register()}
                            readOnly
                          />
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                              id='saat_pulang_total'
                              name='saat_pulang_total'
                              type='number'
                              style={{width:'50px'}}
                              innerRef={register()}
                              readOnly
                            />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div style={{ paddingLeft: "1rem" }} className='mt-3'>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th colSpan={2} className='text-center'>MASALAH KEPERAWATAN</th>
                      <th className='text-center'>RENCANA KEPERAWATAN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='fs-6'>
                      <td className='text-center'>
                        <Input
                          type='checkbox'
                          id='keperawatan_1_check'
                          name='keperawatan_1_check'
                          value='1'
                          onChange={(e) => handleCheckboxChange(e)}
                          defaultChecked={!!(data.form && data.form.Keperawatan_1_Check && data.form.Keperawatan_1_Check === '1')}
                          innerRef={register('keperawatan_1_check') as any}
                        />
                      </td>
                      <td>Gangguan Persepsi Sensori :  Penglihatan</td>
                      <td>Mengkaji Ketajaman Penglihatan (Visus)</td>
                    </tr>
                    <tr>
                      <td className='text-center'>
                        <Input
                          type='checkbox'
                          id='keperawatan_2_check'
                          name='keperawatan_2_check'
                          value='1'
                          onChange={(e) => handleCheckboxChange(e)}
                          defaultChecked={!!(data.form && data.form.Keperawatan_2_Check && data.form.Keperawatan_2_Check === '1')}
                          innerRef={register('keperawatan_2_check') as any}
                        />
                      </td>
                      <td>Penurunan Kesadaran</td>
                      <td>Mengecek Tanda Vital,  Membebaskan Jalan Nafas</td>
                    </tr>
                    <tr>
                      <td className='text-center'>
                        <Input
                          type='checkbox'
                          id='keperawatan_3_check'
                          name='keperawatan_3_check'
                          value='1'
                          onChange={(e) => handleCheckboxChange(e)}
                          defaultChecked={!!(data.form && data.form.Keperawatan_3_Check && data.form.Keperawatan_3_Check === '1')}
                          innerRef={register('keperawatan_3_check') as any}
                        />
                      </td>
                      <td>Nyeri</td>
                      <td>Mengajarkan Teknik Relaksasi</td>
                    </tr>
                    <tr>
                      <td className='text-center'>
                        <Input
                          type='checkbox'
                          id='keperawatan_4_check'
                          name='keperawatan_4_check'
                          value='1'
                          onChange={(e) => handleCheckboxChange(e)}
                          defaultChecked={!!(data.form && data.form.Keperawatan_4_Check && data.form.Keperawatan_4_Check === '1')}
                          innerRef={register('keperawatan_4_check') as any}
                        />
                      </td>
                      <td>Resiko Infeksi</td>
                      <td>Perawatan Luka dan Edukasi Pasien</td>
                    </tr>
                    <tr>
                      <td className='text-center'>
                        <Input
                          type='checkbox'
                          id='keperawatan_5_check'
                          name='keperawatan_5_check'
                          value='1'
                          onChange={(e) => handleCheckboxChange(e)}
                          defaultChecked={!!(data.form && data.form.Keperawatan_5_Check && data.form.Keperawatan_5_Check === '1')}
                          innerRef={register('keperawatan_5_check') as any}
                        />
                      </td>
                      <td>Gangguan Intake dan Output Cairan</td>
                      <td>Memberikan Terapi Cairan</td>
                    </tr>
                    <tr>
                      <td className='text-center'>
                        <Input
                          type='checkbox'
                          id='keperawatan_6_check'
                          name='keperawatan_6_check'
                          value='1'
                          onChange={(e) => handleCheckboxChange(e)}
                          defaultChecked={!!(data.form && data.form.Keperawatan_6_Check && data.form.Keperawatan_6_Check === '1')}
                          innerRef={register('keperawatan_6_check') as any}
                        />
                      </td>
                      <td>Resiko Jatuh</td>
                      <td>Memberikan Penandaan Gelang</td>
                    </tr>
                    <tr>
                      <td className='text-center'>
                        <Input
                          type='checkbox'
                          id='keperawatan_7_check'
                          name='keperawatan_7_check'
                          value='1'
                          onChange={(e) => handleCheckboxChange(e)}
                          defaultChecked={!!(data.form && data.form.Keperawatan_7_Check && data.form.Keperawatan_7_Check === '1')}
                          innerRef={register('keperawatan_7_check') as any}
                        />
                      </td>
                      <td>Hiperthermia</td>
                      <td>Melakukan Kompres Hangat</td>
                    </tr>
                    <tr>
                      <td className='text-center'>
                        <Input
                          type='checkbox'
                          id='keperawatan_8_check'
                          name='keperawatan_8_check'
                          value='1'
                          onChange={(e) => handleCheckboxChange(e)}
                          defaultChecked={!!(data.form && data.form.Keperawatan_8_Check && data.form.Keperawatan_8_Check === '1')}
                          innerRef={register('keperawatan_8_check') as any}
                        />
                      </td>
                      <td>Peningkatan Tekanan Intra Okuler (TIO)</td>
                      <td>Menganjurkan untuk Kolaborasi Pemberian Obat</td>
                    </tr>
                    <tr>
                      <td className='text-center'>
                        <Input
                          type='checkbox'
                          id='keperawatan_9_check'
                          name='keperawatan_9_check'
                          value='1'
                          onChange={(e) => handleCheckboxChange(e)}
                          defaultChecked={!!(data.form && data.form.Keperawatan_9_Check && data.form.Keperawatan_9_Check === '1')}
                          innerRef={register('keperawatan_9_check') as any}
                        />
                      </td>
                      <td>
                        <div className='d-flex align-items-center'>
                          <Label className='fs-6'>Lainnya</Label>
                          <Input
                            type='text'
                            className='ms-1'
                            name='masalah_keperawatan_lainnya_text'
                            innerRef={register({ required: false })}
                          />
                        </div>
                      </td>
                      <td>
                        <div className='d-flex align-items-center'>
                          <Label className='fs-6'>Lainnya</Label>
                          <Input
                            type='text'
                            className='ms-1'
                            name='rencana_keperawatan_lainnya_text'
                            innerRef={register({ required: false })}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>

          {/*Signature*/}
          <Card className="border-1">
            <CardBody>
              <FormGroup className="form-group" row>
                <DateTimeInput name="tanggal_pengkajian_masuk" label="Tanggal Pengkajian" md={4} {...{ register, errors }}/>
              </FormGroup>
              <div className="d-flex justify-content-around my-1">
                <Signature
                  label="Perawat Pengkajian Masuk"
                  type="picker"
                  defaultPerson={data?.form?.Nama_Perawat_Pengkajian_Masuk ?? ''}
                  initialImage={(data.form && data.form.TTD_Perawat_Pengkajian_Masuk && data.form.TTD_Perawat_Pengkajian_Masuk !== '' && data.form.TTD_Perawat_Pengkajian_Masuk !== null) ? data?.form?.TTD_Perawat_Pengkajian_Masuk : undefined}
                  persons={officers}
                  additionalLabel={(data?.form?.Nama_Perawat_Pengkajian_Masuk && data?.form?.Nama_Perawat_Pengkajian_Masuk !== '') ? data?.form?.Nama_Perawat_Pengkajian_Masuk : undefined}
                  onSigned={(assigner: SignatureModel) => {
                    setValue('id-perawat-pengkajian-masuk', assigner.ID_Karyawan);
                    setValue('ttd-perawat-pengkajian-masuk', assigner.Signature);
                  }} />
                <Input
                  type="hidden"
                  name="id-perawat-pengkajian-masuk"
                  innerRef={register({ required: true })}
                  invalid={errors['id-perawat-pengkajian-masuk'] && true} />
                <Input
                  type="hidden"
                  name="ttd-perawat-pengkajian-masuk"
                  innerRef={register({ required: true })}
                  invalid={errors['ttd-perawat-pengkajian-masuk'] && true} />
              </div>
            </CardBody>
          </Card>

          {/*Button*/}
          <Row>
            <Col>
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
              <FormGroup className="form-group mt-0" row>
                <div className="d-flex justify-content-center align-items-center">
                  <Label className="me-1">Terakhir Disimpan: </Label>
                  <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
                </div>
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  )
}

export default InpatientInitialNursingAssessmentForm;
