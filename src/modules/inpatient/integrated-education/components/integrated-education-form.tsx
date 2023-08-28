import { Button, Card, Col, Form, FormGroup, Input, Label, ListGroup, ListGroupItem, Nav, NavItem, NavLink, Row, TabContent, TabPane, Table } from "reactstrap";
import { useEffect, useState } from "react";
import { AppRequest } from "@src/shared/request";
import { NurseModel } from "@src/shared/nurse/models/nurse.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { SubmitButton } from "@src/shared/button";
import TimeOut from "@src/modules/operating-room/operative-fairy-nursing-notes/components/time-out";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useWarnIfUnsavedChanges } from '@src/shared/alert';
import {FindPdfRequest, IPdfModel} from '@shared/pdf';
import {PdfOperativeFairyNursingNotesRequest} from '@modules/operating-room/operative-fairy-nursing-notes/requests/pdf-operative-fairy-nursing-notes.request';
import Dpjp from "./dpjp";
import ManajemenNyeri from "./manajemen-nyeri";
import Rohaniawan from "./rohaniawan";
import Keperawatan from "./keperawatan";
import InformasiLain from "./informasi-lain";
import { IntegratedEducationModel } from "../models/integrated-education.model";
import { IUpdateIntegratedEducationRequest, UpdateIntegratedEducationRequest } from "../requests";
import { fetchIntegratedEducation, fetchIntegratedEducationPdf, handlePdf } from "../stores/Integrated-education.store";
import { IntegratedEducationService } from "../services";
import { PdfIntegratedEducationRequest } from "../requests/pdf-integrated-education-request"
import PostOperasiForm from "./post-operasi-form";
import DokterSpesialisAnastesiForm from "./dokter-spesialis-anastesi-form";
import MencuciTanganForm from "./mencuci-tangan-form";
import PenggunaanPeralatanMedisForm from "./penggunaan-peralatan-medis-form";
import HakKewajibanPasienForm from "./hak-kewajiban-pasien-form";
import InputIntegratedEducation from "./input-integrated-education";
import { DateTimeConverter } from '@src/shared/datetime-converter';

const IntegratedEducationForm = (props: { data: IntegratedEducationModel }) => {
  const { data } = props;

  const getAsesmen = () => {
    const toolValue: Array<string> = [];
    if (data?.form?.Asesmen) {
      const helpingTools = data?.form?.Asesmen;
      if (helpingTools.Tidak_Ada) {
        toolValue.push('1')
      }
      if (helpingTools.Penglihatan_Terganggu) {
        toolValue.push('2')
      }
      if (helpingTools.Pendengaran_Kurang) {
        toolValue.push('3')
      }
      if (helpingTools.Tidak_Berbahasa_Indonesia) {
        toolValue.push('4')
      }
      if (helpingTools.Keyakinan) {
        toolValue.push('5')
      }
      if (helpingTools.Agama) {
        toolValue.push('6')
      }
      if (helpingTools.Kongnisi_Terbatas) {
        toolValue.push('7')
      }
      if (helpingTools.Hambatan_Emosi) {
        toolValue.push('8')
      }
      if (helpingTools.Pertimbangan_Budaya) {
        toolValue.push('9')
      }
      if (helpingTools.Tingkat_Pendidikan) {
        toolValue.push('10')
      }
      if (helpingTools.Nilai_Nilai) {
        toolValue.push('11')
      }
    }
    return toolValue;
  }

  const dispatch = useAppDispatch();
  const { nurses } = useAppSelector(state => state.nurse);
  const { doctors } = useAppSelector(state => state.doctor);

  const [processing, setProcessing] = useState(false);
  const [files, setFiles] = useState<any>([]);
  const [allCheck, setAllCheck] = useState(false);
  // const [defaultPattern, setDefaultPattern] = useState<any>();
  const [activeTab, setActiveTab] = useState<string>('1')

  const { treatment } = useAppSelector(state => state.patient);
  const { pdf } = useAppSelector(state => state.IntegratedEducationStore);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const [isKotor, setIsKotor] = useState<boolean>(false)
  const [asesmen, setAsesmen] = useState<Array<string>>(getAsesmen())

  useEffect(() => {
    if (treatment) {
      dispatch(fetchIntegratedEducationPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'edukasi-terintegrasi' })));
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
    const a = getValues('id_position_operating_supervised');
    const nurse = nurses.find((val: NurseModel) => val.ID_Karyawan === a);
  }, [data])

  const { register, handleSubmit, errors, getValues, setValue, control, reset, formState } = useForm<any>({
    mode: 'onChange',
    // resolver: yupResolver(UpdateIntegratedEducationRequest.schema()),
    defaultValues: {
      // dpjp: data?.form?.DPJP.ID_DPJP ?? '',
      asesmen: getAsesmen(),
      dpjp_kondisi_pasien: data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Kondisi_Pasien === 1 ? '1' : '',
      dpjp_hasil_pemeriksaan: data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Hasil_Pemeriksaan === 1 ? '1' : '',
      dpjp_pengobatan: data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Pengobatan === 1 ? '1' :  '',
      dpjp_manfaat: data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Manfaat === 1 ? '1' : '',
      dpjp_alternatif: data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Alternatif === 1 ? '1' : '',
      dpjp_keberhasilan: data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Keberhasilan === 1 ? '1' : '',
      dpjp_pemulihan: data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Pemulihan === 1 ? '1' : '',
      dpjp_diagnosa: data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Diagnosa === 1 ? '1' : '',
      dpjp_diagnosa_teks: data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Diagnosa_Teks ?? '',
      dpjp_diagnosa_teks_1: data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Diagnosa_Teks_1 ?? '',
      dpjp_diagnosa_teks_2: data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Diagnosa_Teks_2 ?? '',
      dpjp_hasil_asuhan: data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Hasil_Asuhan === 1 ? '1' : '',
      dpjp_hasil_asuhan_teks: data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Hasil_Asuhan_Teks ?? '',
      dpjp_hasil_asuhan_teks_2: data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Hasil_Asuhan_Teks_2 ?? '',
      dpjp_diskusi: data?.form?.DPJP?.Metode_Pembelajaran.Diskusi === 1 ? '1' : '',
      dpjp_demonstrasi: data?.form?.DPJP?.Metode_Pembelajaran.Demonstrasi === 1 ? '1' : '',
      dpjp_ceramah: data?.form?.DPJP?.Metode_Pembelajaran?.Ceramah === 1 ? '1' : '',
      dpjp_solusi: data?.form?.DPJP?.Metode_Pembelajaran?.Solusi === 1 ? '1' : '',
      dpjp_observatori: data?.form?.DPJP?.Metode_Pembelajaran?.Observatori === 1 ? '1' : '',
      dpjp_metode_pembelajaran_lain: data?.form?.DPJP?.Metode_Pembelajaran.Lain === 1 ? '1' : '',
      dpjp_metode_pembelajaran_lain_teks: data?.form?.DPJP?.Metode_Pembelajaran?.Lain_Teks ?? '',
      dpjp_mampu_mengerti: data?.form?.DPJP?.Evaluasi_Pasien?.Mampu_Mengerti === 1 ? '1' : '',
      dpjp_mampu_memahami: data?.form?.DPJP?.Evaluasi_Pasien?.Mampu_Memahami === 1 ? '1' : '',
      dpjp_evaluasi_pasien_lain: data?.form?.DPJP?.Evaluasi_Pasien?.Lain === 1 ? '1' : '',
      dpjp_evaluasi_pasien_lain_teks: data?.form?.DPJP?.Evaluasi_Pasien?.Lain_Teks ?? '',
      dpjp_waktu_edukasi: data?.form?.DPJP?.Waktu_Edukasi ?? '',
      dpjp_durasi: data?.form?.DPJP?.Durasi ?? '',
      dpjp_pasien: data?.form?.DPJP?.Penerima_Edukasi?.Pasien === 1 ? '1' : '',
      dpjp_pasangan: data?.form?.DPJP?.Penerima_Edukasi?.Pasangan === 1 ? '1' : '',
      dpjp_orang_tua: data?.form?.DPJP?.Penerima_Edukasi?.Orang_Tua === 1 ? '1' : '',
      dpjp_saudara_kandung: data?.form?.DPJP?.Penerima_Edukasi?.Saudara_Kandung === 1 ? '1' : '',
      dpjp_penerima_edukasi_lain: data?.form?.DPJP?.Penerima_Edukasi?.Lain === 1 ? '1' : '',
      dpjp_penerima_edukasi_lain_teks: data?.form?.DPJP?.Penerima_Edukasi?.Lain_Teks ?? '',
      ttd_penerima_edukasi_dpjp: data?.form?.TTD_Penerima_Edukasi_DPJP ?? '',
      ttd_edukator_dpjp: data?.form?.TTD_Edukator_DPJP ?? '',
      id_edukator_dpjp: data?.form?.ID_Edukator_DPJP ?? '',

      // gizi
      gizi_status_gizi: data?.form?.Materi_Edukasi_Penjelasan?.Gizi?.Status_Gizi === 1 ? '1' : '',
      gizi_selama_perawatan: data?.form?.Materi_Edukasi_Penjelasan?.Gizi?.Selama_Perawatan === 1 ? '1' : '',
      gizi_untuk_dirumah: data?.form?.Materi_Edukasi_Penjelasan?.Gizi?.Untuk_Dirumah === 1 ? '1' : '',
      gizi_diluar_rs: data?.form?.Materi_Edukasi_Penjelasan?.Gizi?.Diluar_RS === 1 ? '1' : '',
      gizi_lain_lain: data?.form?.Materi_Edukasi_Penjelasan?.Gizi?.Lain_Lain === 1 ? '1' : '',
      gizi_lain_lain_teks: data?.form?.Materi_Edukasi_Penjelasan?.Gizi?.Lain_Lain_Teks ?? '',
      gizi_diskusi: data?.form?.Gizi?.Metode_Pembelajaran?.Diskusi === 1 ? '1' : '',
      gizi_demonstrasi: data?.form?.Gizi?.Metode_Pembelajaran?.Demonstrasi === 1 ? '1' : '',
      gizi_ceramah: data?.form?.Gizi?.Metode_Pembelajaran?.Ceramah === 1 ? '1' : '',
      gizi_solusi: data?.form?.Gizi?.Metode_Pembelajaran?.Solusi === 1 ? '1' : '',
      gizi_observatori: data?.form?.Gizi?.Metode_Pembelajaran?.Observatori === 1 ? '1' : '',
      gizi_metode_pembelajaran_lain: data?.form?.Gizi?.Metode_Pembelajaran?.Lain === 1 ? '1' : '',
      gizi_metode_pembelajaran_lain_teks: data?.form?.Gizi?.Metode_Pembelajaran?.Lain_Teks ?? '',
      gizi_mampu_mengerti: data?.form?.Gizi?.Evaluasi_Pasien?.Mampu_Mengerti === 1 ? '1' : '',
      gizi_mampu_memahami: data?.form?.Gizi?.Evaluasi_Pasien?.Mampu_Memahami === 1 ? '1' : '',
      gizi_evaluasi_pasien_lain: data?.form?.Gizi?.Evaluasi_Pasien?.Lain === 1 ? '1' : '',
      gizi_evaluasi_pasien_lain_teks: data?.form?.Gizi?.Evaluasi_Pasien?.Lain_Teks ?? '',
      gizi_waktu_edukasi: data?.form?.Gizi?.Waktu_Edukasi ?? '',
      gizi_durasi: data?.form?.Gizi?.Durasi ?? '',
      gizi_pasien: data?.form?.Gizi?.Penerima_Edukasi?.Pasien === 1 ? '1' : '',
      gizi_pasangan: data?.form?.Gizi?.Penerima_Edukasi?.Pasangan === 1 ? '1' : '',
      gizi_orang_tua: data?.form?.Gizi?.Penerima_Edukasi?.Orang_Tua === 1 ? '1' : '',
      gizi_saudara_kandung: data?.form?.Gizi?.Penerima_Edukasi?.Saudara_Kandung === 1 ? '1' : '',
      gizi_penerima_edukasi_lain: data?.form?.Gizi?.Penerima_Edukasi?.Lain === 1 ? '1' : '',
      gizi_penerima_edukasi_lain_teks: data?.form?.Gizi?.Penerima_Edukasi?.Lain_Teks ?? '',
      ttd_penerima_edukasi_gizi: data?.form?.TTD_Penerima_Edukasi_Gizi ?? '',
      ttd_edukator_gizi: data?.form?.TTD_Edukator_Gizi ?? '',
      id_edukator_gizi: data?.form?.ID_Edukator_Gizi ?? '',

      // farmasi
      farmasi_penggunaan_obat: data?.form?.Materi_Edukasi_Penjelasan?.Farmasi?.Penggunaan_Obat === 1 ? '1' : '',
      farmasi_efek_samping: data?.form?.Materi_Edukasi_Penjelasan?.Farmasi?.Efek_Samping === 1 ? '1' : '',
      farmasi_mencegah_interaksi: data?.form?.Materi_Edukasi_Penjelasan?.Farmasi?.Mencegah_Interaksi === 1 ? '1' : '',
      farmasi_lain_lain: data?.form?.Materi_Edukasi_Penjelasan?.Farmasi?.Lain_Lain === 1 ? '1' : '',
      farmasi_lain_lain_teks: data?.form?.Materi_Edukasi_Penjelasan?.Farmasi?.Lain_Lain_Teks ?? '',
      farmasi_diskusi: data?.form?.Farmasi?.Metode_Pembelajaran?.Diskusi === 1 ? '1' : '',
      farmasi_demonstrasi: data?.form?.Farmasi?.Metode_Pembelajaran?.Demonstrasi === 1 ? '1' : '',
      farmasi_ceramah: data?.form?.Farmasi?.Metode_Pembelajaran?.Ceramah === 1 ? '1' : '',
      farmasi_solusi: data?.form?.Farmasi?.Metode_Pembelajaran?.Solusi === 1 ? '1' : '',
      farmasi_observatori: data?.form?.Farmasi?.Metode_Pembelajaran?.Observatori === 1 ? '1' : '',
      farmasi_metode_pembelajaran_lain: data?.form?.Farmasi?.Metode_Pembelajaran?.Lain === 1 ? '1' : '',
      farmasi_metode_pembelajaran_lain_teks: data?.form?.Farmasi?.Metode_Pembelajaran?.Lain_Teks ?? '',
      farmasi_mampu_memahami: data?.form?.Farmasi?.Evaluasi_Pasien?.Mampu_Memahami === 1 ? '1' : '',
      farmasi_mampu_mengerti: data?.form?.Farmasi?.Evaluasi_Pasien?.Mampu_Mengerti === 1 ? '1' : '',
      farmasi_evaluasi_pasien_lain: data?.form?.Farmasi?.Evaluasi_Pasien?.Lain === 1 ? '1' : '',
      farmasi_evaluasi_pasien_lain_teks: data?.form?.Farmasi?.Evaluasi_Pasien?.Lain_Teks ?? '',
      farmasi_waktu_edukasi: data?.form?.Farmasi?.Waktu_Edukasi ?? '',
      farmasi_durasi: data?.form?.Farmasi?.Durasi ?? '',
      farmasi_pasien: data?.form?.Farmasi?.Penerima_Edukasi?.Pasien === 1 ? '1' : '',
      farmasi_pasangan: data?.form?.Farmasi?.Penerima_Edukasi?.Pasangan === 1 ? '1' : '',
      farmasi_orang_tua: data?.form?.Farmasi?.Penerima_Edukasi?.Orang_Tua === 1 ? '1' : '',
      farmasi_saudara_kandung: data?.form?.Farmasi?.Penerima_Edukasi?.Saudara_Kandung === 1 ? '1' : '',
      farmasi_penerima_edukasi_lain: data?.form?.Farmasi?.Penerima_Edukasi?.Lain === 1 ? '1' : '',
      farmasi_penerima_edukasi_lain_teks: data?.form?.Farmasi?.Penerima_Edukasi?.Lain_Teks ?? '',
      ttd_penerima_edukasi_farmasi: data?.form?.TTD_Penerima_Edukasi_Farmasi ?? '',
      ttd_edukator_farmasi: data?.form?.TTD_Edukator_Farmasi ?? '',
      id_edukator_farmasi: data?.form?.ID_Edukator_Farmasi ?? '',

      // Manajemen Nyeri
      manajemen_nyeri_farmakologi: data?.form?.Materi_Edukasi_Penjelasan?.Manajemen_Nyeri?.Farmakologi === 1 ? '1' : '',
      manajemen_nyeri_non_farmakologi: data?.form?.Materi_Edukasi_Penjelasan?.Manajemen_Nyeri?.Non_Farmakologi === 1 ? '1' : '',
      manajemen_nyeri_diskusi: data?.form?.Manajemen_Nyeri?.Metode_Pembelajaran?.Diskusi === 1 ? '1' : '',
      manajemen_nyeri_demonstrasi: data?.form?.Manajemen_Nyeri?.Metode_Pembelajaran?.Demonstrasi === 1 ? '1' : '',
      manajemen_nyeri_ceramah: data?.form?.Manajemen_Nyeri?.Metode_Pembelajaran?.Ceramah === 1 ? '1' : '',
      manajemen_nyeri_solusi: data?.form?.Manajemen_Nyeri?.Metode_Pembelajaran?.Solusi === 1 ? '1' : '',
      manajemen_nyeri_observatori: data?.form?.Manajemen_Nyeri?.Metode_Pembelajaran?.Observatori === 1 ? '1' : '',
      manajemen_nyeri_metode_pembelajaran_lain: data?.form?.Manajemen_Nyeri?.Metode_Pembelajaran?.Lain === 1 ? '1' : '',
      manajemen_nyeri_metode_pembelajaran_lain_teks: data?.form?.Manajemen_Nyeri?.Metode_Pembelajaran?.Lain_Teks ?? '',
      manajemen_nyeri_mampu_mengerti: data?.form?.Manajemen_Nyeri?.Evaluasi_Pasien?.Mampu_Mengerti === 1 ? '1' : '',
      manajemen_nyeri_mampu_memahami: data?.form?.Manajemen_Nyeri?.Evaluasi_Pasien?.Mampu_Memahami === 1 ? '1' : '',
      manajemen_nyeri_evaluasi_pasien_lain: data?.form?.Manajemen_Nyeri?.Evaluasi_Pasien?.Lain === 1 ? '1' : '',
      manajemen_nyeri_evaluasi_pasien_lain_teks: data?.form?.Manajemen_Nyeri?.Evaluasi_Pasien?.Lain_Teks ?? '',
      manajemen_nyeri_waktu_edukasi: data?.form?.Manajemen_Nyeri?.Waktu_Edukasi ?? '',
      manajemen_nyeri_durasi: data?.form?.Manajemen_Nyeri?.Durasi ?? '',
      manajemen_nyeri_pasien: data?.form?.Manajemen_Nyeri?.Penerima_Edukasi?.Pasien === 1 ? '1' : '',
      manajemen_nyeri_pasangan: data?.form?.Manajemen_Nyeri?.Penerima_Edukasi?.Pasangan === 1 ? '1' : '',
      manajemen_nyeri_orang_tua: data?.form?.Manajemen_Nyeri?.Penerima_Edukasi?.Orang_Tua === 1 ? '1' : '',
      manajemen_nyeri_saudara_kandung: data?.form?.Manajemen_Nyeri?.Penerima_Edukasi?.Saudara_Kandung === 1 ? '1' : '',
      manajemen_nyeri_penerima_edukasi_lain: data?.form?.Manajemen_Nyeri?.Penerima_Edukasi?.Lain === 1 ? '1' : '',
      manajemen_nyeri_penerima_edukasi_lain_teks: data?.form?.Manajemen_Nyeri?.Penerima_Edukasi?.Lain_Teks ?? '',
      ttd_penerima_edukasi_manajemen_nyeri: data?.form?.TTD_Penerima_Edukasi_Manajemen_Nyeri ?? '',
      ttd_edukator_manajemen_nyeri: data?.form?.TTD_Edukator_Manajemen_Nyeri ?? '',
      id_edukator_manajemen_nyeri: data?.form?.ID_Edukator_Manajemen_Nyeri ?? '',

      // Rohaniawan
      rohaniawan_bimbingan: data?.form?.Materi_Edukasi_Penjelasan?.Rohaniawan?.Bimbingan === 1 ? '1' : '',
      rohaniawan_konseling: data?.form?.Materi_Edukasi_Penjelasan?.Rohaniawan?.Konseling === 1 ? '1' : '',
      rohaniawan_diskusi: data?.form?.Rohaniawan?.Metode_Pembelajaran?.Diskusi === 1 ? '1' : '',
      rohaniawan_demonstrasi: data?.form?.Rohaniawan?.Metode_Pembelajaran?.Demonstrasi === 1 ? '1' : '',
      rohaniawan_ceramah: data?.form?.Rohaniawan?.Metode_Pembelajaran?.Ceramah === 1 ? '1' : '',
      rohaniawan_solusi: data?.form?.Rohaniawan?.Metode_Pembelajaran?.Solusi === 1 ? '1' : '',
      rohaniawan_observatori: data?.form?.Rohaniawan?.Metode_Pembelajaran?.Observatori === 1 ? '1' : '',
      rohaniawan_metode_pembelajaran_lain: data?.form?.Rohaniawan?.Metode_Pembelajaran?.Lain === 1 ? '1' : '',
      rohaniawan_metode_pembelajaran_lain_teks: data?.form?.Rohaniawan?.Metode_Pembelajaran?.Lain_Teks ?? '',
      rohaniawan_mampu_mengerti: data?.form?.Rohaniawan?.Evaluasi_Pasien?.Mampu_Mengerti === 1 ? '1' : '',
      rohaniawan_mampu_memahami: data?.form?.Rohaniawan?.Evaluasi_Pasien?.Mampu_Memahami === 1 ? '1' : '',
      rohaniawan_evaluasi_pasien_lain: data?.form?.Rohaniawan?.Evaluasi_Pasien?.Lain === 1 ? '1' : '',
      rohaniawan_evaluasi_pasien_lain_teks: data?.form?.Rohaniawan?.Evaluasi_Pasien?.Lain_Teks ?? '',
      rohaniawan_waktu_edukasi: data?.form?.Rohaniawan?.Waktu_Edukasi ?? '',
      rohaniawan_durasi: data?.form?.Rohaniawan?.Durasi ?? '',
      rohaniawan_pasien: data?.form?.Rohaniawan?.Penerima_Edukasi?.Pasien === 1 ? '1' : '',
      rohaniawan_pasangan: data?.form?.Rohaniawan?.Penerima_Edukasi?.Pasangan === 1 ? '1' : '',
      rohaniawan_orang_tua: data?.form?.Rohaniawan?.Penerima_Edukasi?.Orang_Tua === 1 ? '1' : '',
      rohaniawan_saudara_kandung: data?.form?.Rohaniawan?.Penerima_Edukasi?.Saudara_Kandung === 1 ? '1' : '',
      rohaniawan_penerima_edukasi_lain: data?.form?.Rohaniawan?.Penerima_Edukasi?.Lain === 1 ? '1' : '',
      rohaniawan_penerima_edukasi_lain_teks: data?.form?.Rohaniawan?.Penerima_Edukasi?.Lain_Teks ?? '',
      ttd_penerima_edukasi_rohaniawan: data?.form?.TTD_Penerima_Edukasi_Rohaniawan ?? '',
      ttd_edukator_rohaniawan: data?.form?.ID_Edukator_Rohaniawan ?? '',
      id_edukator_rohaniawan:  data?.form?.ID_Edukator_Rohaniawan ?? '',

      // Keperawatan
      keperawatan_mobilisasi: data?.form?.Materi_Edukasi_Penjelasan?.Keperawatan?.Mobilisasi === 1 ? '1' : '',
      keperawatan_perawatan_luka: data?.form?.Materi_Edukasi_Penjelasan?.Keperawatan?.Perawatan_Luka === 1 ? '1' : '',
      keperawatan_perawatan_peralatan: data?.form?.Materi_Edukasi_Penjelasan?.Keperawatan?.Perawatan_Peralatan_Medis === 1 ? '1' : '',
      keperawatan_pemberian_makan: data?.form?.Materi_Edukasi_Penjelasan?.Keperawatan?.Pemberian_Makan === 1 ? '1' : '',
      keperawatan_membuang_urine: data?.form?.Materi_Edukasi_Penjelasan?.Keperawatan?.Membuang_Urine === 1 ? '1' : '',
      keperawatan_lain_lain: data?.form?.Materi_Edukasi_Penjelasan?.Keperawatan?.Lain_Lain === 1 ? '1' : '',
      keperawatan_lain_lain_teks: data?.form?.Materi_Edukasi_Penjelasan?.Keperawatan?.Lain_Lain_Teks ?? '',
      keperawatan_diskusi: data?.form?.Keperawatan?.Metode_Pembelajaran?.Diskusi === 1 ? '1' : '',
      keperawatan_demonstrasi: data?.form?.Keperawatan?.Metode_Pembelajaran?.Demonstrasi === 1 ? '1' : '',
      keperawatan_ceramah: data?.form?.Keperawatan?.Metode_Pembelajaran?.Ceramah === 1 ? '1' : '',
      keperawatan_solusi: data?.form?.Keperawatan?.Metode_Pembelajaran?.Solusi === 1 ? '1' : '',
      keperawatan_observatori: data?.form?.Keperawatan?.Metode_Pembelajaran?.Observatori === 1 ? '1' : '',
      keperawatan_metode_pembelajaran_lain: data?.form?.Keperawatan?.Metode_Pembelajaran?.Lain === 1 ? '1' : '',
      keperawatan_metode_pembelajaran_lain_teks: data?.form?.Keperawatan?.Metode_Pembelajaran?.Lain_Teks ?? '',
      keperawatan_mampu_mengerti: data?.form?.Keperawatan?.Evaluasi_Pasien?.Mampu_Mengerti === 1 ? '1' : '',
      keperawatan_mampu_memahami: data?.form?.Keperawatan?.Evaluasi_Pasien?.Mampu_Memahami === 1 ? '1' : '',
      keperawatan_evaluasi_pasien_lain: data?.form?.Keperawatan?.Evaluasi_Pasien?.Lain === 1 ? '1' : '',
      keperawatan_evaluasi_pasien_lain_teks: data?.form?.Keperawatan?.Evaluasi_Pasien?.Lain_Teks ?? '',
      keperawatan_waktu_edukasi: data?.form?.Keperawatan?.Waktu_Edukasi ?? '',
      keperawatan_durasi: data?.form?.Keperawatan?.Durasi ?? '',
      keperawatan_pasien: data?.form?.Keperawatan?.Penerima_Edukasi?.Pasien === 1 ? '1' : '',
      keperawatan_pasangan: data?.form?.Keperawatan?.Penerima_Edukasi?.Pasangan === 1 ? '1' : '',
      keperawatan_orang_tua: data?.form?.Keperawatan?.Penerima_Edukasi?.Orang_Tua === 1 ? '1' : '',
      keperawatan_saudara_kandung: data?.form?.Keperawatan?.Penerima_Edukasi?.Saudara_Kandung === 1 ? '1' : '',
      keperawatan_penerima_edukasi_lain: data?.form?.Keperawatan?.Penerima_Edukasi?.Lain === 1 ? '1' : '',
      keperawatan_penerima_edukasi_lain_teks: data?.form?.Keperawatan?.Penerima_Edukasi?.Lain_Teks ?? '',
      ttd_penerima_edukasi_keperawatan: data?.form?.TTD_Penerima_Edukasi_Keperawatan ?? '',
      ttd_edukator_keperawatan: data?.form?.TTD_Edukator_Keperawatan ?? '',
      id_edukator_keperawatan: data?.form?.ID_Edukator_Keperawatan ?? '',

      // Informasi Lain
      daftar_pasien_informasi_lain: data.form && data.form.Informasi_Lain_Pasien && Array.isArray(data.form.Informasi_Lain_Pasien) ? data.form.Informasi_Lain_Pasien : [],
      informasi_lain_diskusi: data?.form?.Informasi_Lain?.Metode_Pembelajaran?.Diskusi === 1 ? '1' : '',
      informasi_lain_demonstrasi: data?.form?.Informasi_Lain?.Metode_Pembelajaran?.Demonstrasi === 1 ? '1' : '',
      informasi_lain_ceramah: data?.form?.Informasi_Lain?.Metode_Pembelajaran?.Ceramah === 1 ? '1' : '',
      informasi_lain_solusi: data?.form?.Informasi_Lain?.Metode_Pembelajaran?.Solusi === 1 ? '1' : '',
      informasi_lain_observatori: data?.form?.Informasi_Lain?.Metode_Pembelajaran?.Observatori === 1 ? '1' : '',
      informasi_lain_metode_pembelajaran_lain: data?.form?.Informasi_Lain?.Metode_Pembelajaran?.Lain === 1 ? '1' : '',
      informasi_lain_metode_pembelajaran_lain_teks: data?.form?.Informasi_Lain?.Metode_Pembelajaran?.Lain_Teks ?? '',
      informasi_lain_mampu_mengerti: data?.form?.Informasi_Lain?.Evaluasi_Pasien?.Mampu_Mengerti === 1 ? '1' : '',
      informasi_lain_mampu_memahami: data?.form?.Informasi_Lain?.Evaluasi_Pasien?.Mampu_Memahami === 1 ? '1' : '',
      informasi_lain_evaluasi_pasien_lain: data?.form?.Informasi_Lain?.Evaluasi_Pasien?.Lain === 1 ? '1' : '',
      informasi_lain_evaluasi_pasien_lain_teks: data?.form?.Informasi_Lain?.Evaluasi_Pasien?.Lain_Teks ?? '',
      informasi_lain_waktu_edukasi: data?.form?.Informasi_Lain?.Waktu_Edukasi ?? '',
      informasi_lain_durasi: data?.form?.Informasi_Lain?.Durasi ?? '',
      // informasi_lain_pasien: data?.form?.Informasi_Lain?.Penerima_Edukasi?.Pasien === 1 ? '1' : '',
      informasi_lain_pasangan: data?.form?.Informasi_Lain?.Penerima_Edukasi?.Pasangan === 1 ? '1' : '',
      informasi_lain_orang_tua: data?.form?.Informasi_Lain?.Penerima_Edukasi?.Orang_Tua === 1 ? '1' : '',
      informasi_lain_saudara_kandung: data?.form?.Informasi_Lain?.Penerima_Edukasi?.Saudara_Kandung === 1 ? '1' : '',
      informasi_lain_penerima_edukasi_lain: data?.form?.Informasi_Lain?.Penerima_Edukasi?.Lain === 1 ? '1' : '',
      informasi_lain_penerima_edukasi_lain_teks:data?.form?.Informasi_Lain?.Penerima_Edukasi?.Lain_Teks ?? '',
      ttd_penerima_edukasi_informasi_lain: data?.form?.TTD_Penerima_Edukasi_Informasi_Lain ?? '',
      ttd_edukator_informasi_lain: data?.form?.TTD_Edukator_Informasi_Lain ?? '',
      id_edukator_informasi_lain: data?.form?.ID_Edukator_Informasi_Lain ?? '',

      // Post Operasi
      post_op_merunduk: data?.form?.Materi_Edukasi_Penjelasan?.Post_Operasi?.Merunduk === 1 ? '1' : '',
      post_op_setengah_duduk: data?.form?.Materi_Edukasi_Penjelasan?.Post_Operasi?.Setengah_Duduk === 1 ? '1' : '',
      post_op_tidak_ada: data?.form?.Materi_Edukasi_Penjelasan?.Post_Operasi?.Tidak_Ada === 1 ? '1' : '',
      post_op_diskusi: data?.form?.Post_Operasi?.Metode_Pembelajaran?.Diskusi === 1 ? '1' : '',
      post_op_demonstrasi: data?.form?.Post_Operasi?.Metode_Pembelajaran?.Demonstrasi === 1 ? '1' : '',
      post_op_ceramah: data?.form?.Post_Operasi?.Metode_Pembelajaran?.Ceramah === 1 ? '1' : '',
      post_op_solusi: data?.form?.Post_Operasi?.Metode_Pembelajaran?.Solusi === 1 ? '1' : '',
      post_op_observatori: data?.form?.Post_Operasi?.Metode_Pembelajaran?.Observatori === 1 ? '1' : '',
      post_op_metode_pembelajaran_lain: data?.form?.Post_Operasi?.Metode_Pembelajaran?.Lain === 1 ? '1' : '',
      post_op_metode_pembelajaran_lain_teks: data?.form?.Post_Operasi?.Metode_Pembelajaran?.Lain_Teks ?? '',
      post_op_mampu_mengerti: data?.form?.Post_Operasi?.Evaluasi_Pasien?.Mampu_Mengerti === 1 ? '1' : '',
      post_op_mampu_memahami: data?.form?.Post_Operasi?.Evaluasi_Pasien?.Mampu_Memahami === 1 ? '1' : '',
      post_op_evaluasi_pasien_lain: data?.form?.Post_Operasi?.Evaluasi_Pasien?.Lain === 1 ? '1' : '',
      post_op_evaluasi_pasien_lain_teks: data?.form?.Post_Operasi?.Evaluasi_Pasien?.Lain_Teks ?? '',
      post_op_waktu_edukasi: data?.form?.Post_Operasi?.Waktu_Edukasi ?? '',
      post_op_durasi: data?.form?.Post_Operasi?.Durasi ?? '',
      post_op_pasien: data?.form?.Post_Operasi?.Penerima_Edukasi?.Pasien === 1 ? '1' : '',
      post_op_pasangan: data?.form?.Post_Operasi?.Penerima_Edukasi?.Pasangan === 1 ? '1' : '',
      post_op_orang_tua: data?.form?.Post_Operasi?.Penerima_Edukasi?.Orang_Tua === 1 ? '1' : '',
      post_op_saudara_kandung: data?.form?.Post_Operasi?.Penerima_Edukasi?.Saudara_Kandung === 1 ? '1' : '',
      post_op_penerima_edukasi_lain: data?.form?.Post_Operasi?.Penerima_Edukasi?.Lain === 1 ? '1' : '',
      post_op_penerima_edukasi_lain_teks: data?.form?.Post_Operasi?.Penerima_Edukasi?.Lain_Teks ?? '',
      ttd_penerima_edukasi_post_op: data?.form?.TTD_Penerima_Edukasi_Post_Operasi ?? '',
      ttd_edukator_post_op: data?.form?.TTD_Edukator_Post_Operasi ?? '',
      id_edukator_post_op: data?.form?.ID_Edukator_Post_Operasi ?? '',

      // Dokter Spesialis Anastesi
      dokter_kondisi_pasien: data?.form?.Materi_Edukasi_Penjelasan?.Dokter?.Kondisi_Pasien === 1 ? '1' : '',
      dokter_hasil_pemeriksaan: data?.form?.Materi_Edukasi_Penjelasan?.Dokter?.Hasil_Pemeriksaan === 1 ? '1' : '',
      dokter_teknik_anestesi: data?.form?.Materi_Edukasi_Penjelasan?.Dokter?.Teknik_Anestesi === 1 ? '1' : '',
      dokter_manfaat_kekurangan: data?.form?.Materi_Edukasi_Penjelasan?.Dokter?.Manfaat === 1 ? '1' : '',
      dokter_nyeri_pasca: data?.form?.Materi_Edukasi_Penjelasan?.Dokter?.Nyeri_Pasca === 1 ? '1' : '',
      dokter_nyeri_analgesi: data?.form?.Materi_Edukasi_Penjelasan?.Dokter?.Analgesi_Pasca === 1 ? '1' : '',
      dokter_diskusi: data?.form?.Dokter?.Metode_Pembelajaran?.Diskusi === 1 ? '1' : '',
      dokter_demonstrasi: data?.form?.Dokter?.Metode_Pembelajaran?.Demonstrasi === 1 ? '1' : '',
      dokter_ceramah: data?.form?.Dokter?.Metode_Pembelajaran?.Ceramah === 1 ? '1' : '',
      dokter_solusi: data?.form?.Dokter?.Metode_Pembelajaran?.Solusi === 1 ? '1' : '',
      dokter_observatori: data?.form?.Dokter?.Metode_Pembelajaran?.Observatori === 1 ? '1' : '',
      dokter_metode_pembelajaran_lain: data?.form?.Dokter?.Metode_Pembelajaran?.Lain === 1 ? '1' : '',
      dokter_metode_pembelajaran_lain_teks: data?.form?.Dokter?.Metode_Pembelajaran?.Lain_Teks ?? '',
      dokter_mampu_mengerti: data?.form?.Dokter?.Evaluasi_Pasien?.Mampu_Mengerti === 1 ? '1' : '',
      dokter_mampu_memahami: data?.form?.Dokter?.Evaluasi_Pasien?.Mampu_Memahami === 1 ? '1' : '',
      dokter_evaluasi_pasien_lain: data?.form?.Dokter?.Evaluasi_Pasien?.Lain === 1 ? '1' : '',
      dokter_evaluasi_pasien_lain_teks: data?.form?.Dokter?.Evaluasi_Pasien?.Lain_Teks ?? '',
      dokter_waktu_edukasi: data?.form?.Dokter?.Waktu_Edukasi ?? '',
      dokter_durasi: data?.form?.Dokter?.Durasi ?? '',
      dokter_pasien:  data?.form?.Dokter?.Penerima_Edukasi?.Pasien === 1 ? '1' : '',
      dokter_pasangan: data?.form?.Dokter?.Penerima_Edukasi?.Pasangan === 1 ? '1' : '',
      dokter_orang_tua: data?.form?.Dokter?.Penerima_Edukasi?.Orang_Tua === 1 ? '1' : '',
      dokter_saudara_kandung: data?.form?.Dokter?.Penerima_Edukasi?.Saudara_Kandung === 1 ? '1' : '',
      dokter_penerima_edukasi_lain: data?.form?.Dokter?.Penerima_Edukasi?.Lain === 1 ? '1' : '',
      dokter_penerima_edukasi_lain_teks: data?.form?.Dokter?.Penerima_Edukasi?.Lain_Teks ?? '',
      ttd_penerima_edukasi_dokter: data?.form?.TTD_Penerima_Edukasi_Dokter ?? '',
      ttd_edukator_dokter: data?.form?.TTD_Edukator_Dokter ?? '',
      id_edukator_dokter: data?.form?.ID_Edukator_Dokter ?? '',

      // Mencuci Tangan
      mencuci_tangan_handwash: data?.form?.Materi_Edukasi_Penjelasan?.Mencuci_Tangan?.Handwash_4060 === 1 ? '1' : '',
      mencuci_tangan_handrub: data?.form?.Materi_Edukasi_Penjelasan?.Mencuci_Tangan?.Handrub_2030 === 1 ? '1' : '',
      mencuci_tangan_diskusi: data?.form?.Mencuci_Tangan?.Metode_Pembelajaran?.Diskusi === 1 ? '1' : '',
      mencuci_tangan_demonstrasi: data?.form?.Mencuci_Tangan?.Metode_Pembelajaran?.Demonstrasi === 1 ? '1' : '',
      mencuci_tangan_ceramah: data?.form?.Mencuci_Tangan?.Metode_Pembelajaran?.Ceramah === 1 ? '1' : '',
      mencuci_tangan_solusi: data?.form?.Mencuci_Tangan?.Metode_Pembelajaran?.Solusi === 1 ? '' : '',
      mencuci_tangan_observatori: data?.form?.Mencuci_Tangan?.Metode_Pembelajaran?.Observatori === 1 ? '1' : '',
      mencuci_tangan_metode_pembelajaran_lain: data?.form?.Mencuci_Tangan?.Metode_Pembelajaran?.Lain === 1 ? '1' : '',
      mencuci_tangan_metode_pembelajaran_lain_teks: data?.form?.Mencuci_Tangan?.Metode_Pembelajaran?.Lain_Teks ?? '',
      mencuci_tangan_mampu_mengerti: data?.form?.Mencuci_Tangan?.Evaluasi_Pasien?.Mampu_Mengerti === 1 ? '1' : '',
      mencuci_tangan_mampu_memahami: data?.form?.Mencuci_Tangan?.Evaluasi_Pasien?.Mampu_Memahami === 1 ? '1' : '',
      mencuci_tangan_evaluasi_pasien_lain: data?.form?.Mencuci_Tangan?.Evaluasi_Pasien?.Lain === 1 ? '1' : '',
      mencuci_tangan_evaluasi_pasien_lain_teks: data?.form?.Mencuci_Tangan?.Evaluasi_Pasien?.Lain_Teks ?? '',
      mencuci_tangan_waktu_edukasi: data?.form?.Mencuci_Tangan?.Waktu_Edukasi ?? '',
      mencuci_tangan_durasi: data?.form?.Mencuci_Tangan?.Durasi ?? '',
      mencuci_tangan_pasien: data?.form?.Mencuci_Tangan?.Penerima_Edukasi?.Pasien === 1 ? '1' : '',
      mencuci_tangan_pasangan: data?.form?.Mencuci_Tangan?.Penerima_Edukasi?.Pasangan === 1 ? '1' : '',
      mencuci_tangan_orang_tua: data?.form?.Mencuci_Tangan?.Penerima_Edukasi?.Orang_Tua === 1 ? '1' : '',
      mencuci_tangan_saudara_kandung: data?.form?.Mencuci_Tangan?.Penerima_Edukasi?.Saudara_Kandung === 1 ? '1' : '',
      mencuci_tangan_penerima_edukasi_lain: data?.form?.Mencuci_Tangan?.Penerima_Edukasi?.Lain === 1 ? '1' : '',
      mencuci_tangan_penerima_edukasi_lain_teks: data?.form?.Mencuci_Tangan?.Penerima_Edukasi?.Lain_Teks ?? '',
      ttd_penerima_edukasi_mencuci_tangan: data?.form?.TTD_Penerima_Edukasi_Mencuci_Tangan ?? '',
      ttd_edukator_mencuci_tangan: data?.form?.TTD_Edukator_Mencuci_Tangan ?? '',
      id_edukator_mencuci_tangan: data?.form?.ID_Edukator_Mencuci_Tangan ?? '',

      // Penggunaan Peralatan Medis
      penggunaan_peralatan_infus: data?.form?.Materi_Edukasi_Penjelasan?.Penggunaan_Peralatan?.Infus === 1 ? '1' : '',
      penggunaan_peralatan_oksigen: data?.form?.Materi_Edukasi_Penjelasan?.Penggunaan_Peralatan?.Oksigen === 1 ? '1' : '',
      penggunaan_peralatan_nebulizer: data?.form?.Materi_Edukasi_Penjelasan?.Penggunaan_Peralatan?.Nebulizer === 1 ? '1' : '',
      penggunaan_peralatan_lain: data?.form?.Materi_Edukasi_Penjelasan?.Penggunaan_Peralatan?.Lain_Lain === 1 ? '1' : '',
      penggunaan_peralatan_lain_teks: data?.form?.Materi_Edukasi_Penjelasan?.Penggunaan_Peralatan?.Lain_Lain_Teks ?? '',
      penggunaan_peralatan_diskusi: data?.form?.Penggunaan_Peralatan?.Metode_Pembelajaran?.Diskusi === 1 ? '1' : '',
      penggunaan_peralatan_demonstrasi: data?.form?.Penggunaan_Peralatan?.Metode_Pembelajaran?.Demonstrasi === 1 ? '1' : '',
      penggunaan_peralatan_ceramah: data?.form?.Penggunaan_Peralatan?.Metode_Pembelajaran?.Ceramah === 1 ? '1' : '',
      penggunaan_peralatan_solusi: data?.form?.Penggunaan_Peralatan?.Metode_Pembelajaran?.Solusi === 1 ? '1' : '',
      penggunaan_peralatan_observatori: data?.form?.Penggunaan_Peralatan?.Metode_Pembelajaran?.Observatori === 1 ? '1' : '',
      penggunaan_peralatan_metode_pembelajaran_lain: data?.form?.Penggunaan_Peralatan?.Metode_Pembelajaran?.Lain === 1 ? '1' : '',
      penggunaan_peralatan_metode_pembelajaran_lain_teks: data?.form?.Penggunaan_Peralatan?.Metode_Pembelajaran?.Lain_Teks ?? '',
      penggunaan_peralatan_mampu_mengerti: data?.form?.Penggunaan_Peralatan?.Evaluasi_Pasien?.Mampu_Mengerti === 1 ? '1' : '',
      penggunaan_peralatan_mampu_memahami: data?.form?.Penggunaan_Peralatan?.Evaluasi_Pasien?.Mampu_Memahami === 1 ? '1' : '',
      penggunaan_peralatan_evaluasi_pasien_lain: data?.form?.Penggunaan_Peralatan?.Evaluasi_Pasien?.Lain === 1 ? '1' : '',
      penggunaan_peralatan_evaluasi_pasien_lain_teks: data?.form?.Penggunaan_Peralatan?.Evaluasi_Pasien?.Lain_Teks ?? '',
      penggunaan_peralatan_waktu_edukasi: data?.form?.Penggunaan_Peralatan?.Waktu_Edukasi ?? '',
      penggunaan_peralatan_durasi: data?.form?.Penggunaan_Peralatan?.Durasi ?? '',
      penggunaan_peralatan_pasien: data?.form?.Penggunaan_Peralatan?.Penerima_Edukasi?.Pasien === 1 ? '1' : '',
      penggunaan_peralatan_pasangan: data?.form?.Penggunaan_Peralatan?.Penerima_Edukasi?.Pasangan === 1 ? '1' : '',
      penggunaan_peralatan_orang_tua: data?.form?.Penggunaan_Peralatan?.Penerima_Edukasi?.Orang_Tua === 1 ? '1' : '',
      penggunaan_peralatan_saudara_kandung: data?.form?.Penggunaan_Peralatan?.Penerima_Edukasi?.Saudara_Kandung === 1 ? '1' : '',
      penggunaan_peralatan_penerima_edukasi_lain: data?.form?.Penggunaan_Peralatan?.Penerima_Edukasi?.Lain === 1 ? '1' : '',
      penggunaan_peralatan_penerima_edukasi_lain_teks: data?.form?.Penggunaan_Peralatan?.Penerima_Edukasi?.Lain_Teks ?? '',
      ttd_penerima_edukasi_penggunaan_peralatan: data?.form?.TTD_Penerima_Edukasi_Penggunaan_Peralatan ?? '',
      ttd_edukator_penggunaan_peralatan:  data?.form?.TTD_Edukator_Penggunaan_Peralatan ?? '',
      id_edukator_penggunaan_peralatan: data?.form?.ID_Edukator_Penggunaan_Peralatan ?? '',

      // Hak Kewajiban Pasien
      hak_kewajiban_hak_pasien: data?.form?.Materi_Edukasi_Penjelasan?.Hak_Kewajiban?.Hak_Pasien === 1 ? '1' : '',
      hak_kewajiban_kewajiban_pasien: data?.form?.Materi_Edukasi_Penjelasan?.Hak_Kewajiban?.Kewajiban_Pasien === 1 ? '1' : '',
      hak_kewajiban_diskusi: data?.form?.Hak_Kewajiban?.Metode_Pembelajaran?.Diskusi === 1 ? '1' : '',
      hak_kewajiban_demonstrasi: data?.form?.Hak_Kewajiban?.Metode_Pembelajaran?.Demonstrasi === 1 ? '1' : '',
      hak_kewajiban_ceramah: data?.form?.Hak_Kewajiban?.Metode_Pembelajaran?.Ceramah === 1 ? '1' : '',
      hak_kewajiban_solusi: data?.form?.Hak_Kewajiban?.Metode_Pembelajaran?.Solusi === 1 ? '1' : '',
      hak_kewajiban_observatori: data?.form?.Hak_Kewajiban?.Metode_Pembelajaran?.Observatori === 1 ? '1' : '',
      hak_kewajiban_metode_pembelajaran_lain: data?.form?.Hak_Kewajiban?.Metode_Pembelajaran?.Lain === 1 ? '1' : '',
      hak_kewajiban_metode_pembelajaran_lain_teks: data?.form?.Hak_Kewajiban?.Metode_Pembelajaran?.Lain_Teks ?? '',
      hak_kewajiban_mampu_mengerti: data?.form?.Hak_Kewajiban?.Evaluasi_Pasien?.Mampu_Mengerti === 1 ? '1' : '',
      hak_kewajiban_mampu_memahami: data?.form?.Hak_Kewajiban?.Evaluasi_Pasien?.Mampu_Memahami === 1 ? '1' : '',
      hak_kewajiban_evaluasi_pasien_lain: data?.form?.Hak_Kewajiban?.Evaluasi_Pasien?.Lain === 1 ? '1' : '',
      hak_kewajiban_evaluasi_pasien_lain_teks: data?.form?.Hak_Kewajiban?.Evaluasi_Pasien?.Lain_Teks ?? '',
      hak_kewajiban_waktu_edukasi: data?.form?.Hak_Kewajiban?.Waktu_Edukasi ?? '',
      hak_kewajiban_durasi: data?.form?.Hak_Kewajiban?.Durasi ?? '',
      hak_kewajiban_pasien: data?.form?.Hak_Kewajiban?.Penerima_Edukasi?.Pasien === 1 ? '1' : '',
      hak_kewajiban_pasangan: data?.form?.Hak_Kewajiban?.Penerima_Edukasi?.Pasangan === 1 ? '1' : '',
      hak_kewajiban_orang_tua: data?.form?.Hak_Kewajiban?.Penerima_Edukasi?.Orang_Tua === 1 ? '1' : '',
      hak_kewajiban_saudara_kandung: data?.form?.Hak_Kewajiban?.Penerima_Edukasi?.Saudara_Kandung === 1 ? '1' : '',
      hak_kewajiban_penerima_edukasi_lain: data?.form?.Hak_Kewajiban?.Penerima_Edukasi?.Lain === 1 ? '1' : '',
      hak_kewajiban_penerima_edukasi_lain_teks: data?.form?.Hak_Kewajiban?.Penerima_Edukasi?.Lain_Teks ?? '',
      ttd_penerima_edukasi_hak_kewajiban: data?.form?.TTD_Penerima_Edukasi_Hak_Kewajiban ?? '',
      ttd_edukator_hak_kewajiban: data?.form?.TTD_Edukator_Hak_Kewajiban ?? '',
      id_edukator_hak_kewajiban: data?.form?.ID_Edukator_Hak_Kewajiban ?? '',
    },
  });

  const { isDirty } = formState;

  useWarnIfUnsavedChanges(isDirty || isKotor, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  useEffect(() => {
    const a = getValues('id_position_operating_supervised');
    const nurse = nurses.find((val: NurseModel) => val.ID_Karyawan === a);
  }, [data])

  const handleCheckboxChange = (val: any) => {
    setValue(`${val.target.name}`, (val.target.checked) ? '1' : '0')
  }

  const handleProcessing = () => {
    setProcessing(true);
  }

  const handleAsesmenCheckbox = (e: any) => {
    if (e.target.checked) {
      if (asesmen && asesmen.includes(e.target.value)) {
        return;
      } else {
        setAsesmen([...asesmen, e.target.value])
      }
    }
    if (!e.target.checked) {
      if (asesmen && asesmen.includes(e.target.value)) {
        const newLists = asesmen.filter((val: string) => val !== e.target.value)
        setAsesmen(newLists);
      } else {
        return 0;
      }
    }
  }

  useEffect(() => {
    setValue('asesmen', asesmen)
  }, [asesmen])

  const handleDoctorSigned = (image: SignatureModel) => {
    setValue('ttd_dpjp', image.Signature);
    setValue('id_dpjp', image.ID_Karyawan);
  }

  const handlePatientSigned = (image: string) => {
    setValue('ttd_pasien', image);
  }

  const toggle = (tab: string) => {
    if (activeTab && activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const handleSubmitForm = (value: IUpdateIntegratedEducationRequest) => {
    if (!treatment) {
      return;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateIntegratedEducationRequest.createFromJson({...value, ...appRequest});
    dispatch(handlePdf(undefined));
    IntegratedEducationService().update(params)
      .then(() => {
        IntegratedEducationService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            IntegratedEducationService().pdfv3(PdfIntegratedEducationRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, treatment))
              .then(() => {
                setProcessing(false);
                dispatch(fetchIntegratedEducationPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'edukasi-terintegrasi' })))
              })
          });
        setProcessing(false);
        dispatch(fetchIntegratedEducation(appRequest));
      });
  }

  return (
    <>
      <div className="border-dark p-1">
        <FormGroup className="mt-2">
          <InputIntegratedEducation
            data={data}
            {...{ register, errors, setValue }}
          />
          {/* <Row>
            <Col>
              <Label>DPJP</Label>
            </Col>
            <Col md='11' style={{marginTop: '-15px'}}>
              <Input
                className="mt-1"
                type="select"
                id="dpjp"
                name="dpjp"
                innerRef={register()}
              >
                <option value="" disabled={false}>Pilih Salah Satu</option>
                {
                  doctors && Array.isArray(doctors) && doctors.map((item: any, key: number) => {
                    return <option value={item.ID_Karyawan} key={key}>{ item.Nama }</option>;
                  })
                }
              </Input>
            </Col>
          </Row> */}
          <Row className="mt-1">
            <Col>
              <Label>Assesmen Kebutuhan Edukasi Pada Pasien Dan Keluarga</Label>
            </Col>
            <Col>
              <Input
                id="asesmen"
                type="checkbox"
                name="asesmen"
                className="me-1"
                onChange={(e) => handleAsesmenCheckbox(e)}
                value='1'
                defaultChecked={getAsesmen() && getAsesmen().length > 0 && getAsesmen().includes('1')}
                innerRef={register('asesmen')as any}
              />
              <Label>Ya / Tidak</Label>
            </Col>
            <Col>
              <Input
                id="asesmen"
                type="checkbox"
                name="asesmen"
                className="me-1"
                onChange={(e) => handleAsesmenCheckbox(e)}
                value='2'
                defaultChecked={getAsesmen() && getAsesmen().length > 0 && getAsesmen().includes('2')}
                innerRef={register('asesmen')as any}
              />
              <Label>Penglihatan Terganggu</Label>
            </Col>
            <Col>
              <Input
                id="asesmen"
                type="checkbox"
                name="asesmen"
                className="me-1"
                onChange={(e) => handleAsesmenCheckbox(e)}
                value='3'
                defaultChecked={getAsesmen() && getAsesmen().length > 0 && getAsesmen().includes('3')}
                innerRef={register('asesmen') as any}
              />
              <Label>Pendengaran Kurang</Label>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <Input
                id="asesmen"
                type="checkbox"
                name="asesmen"
                className="me-1"
                onChange={(e) => handleAsesmenCheckbox(e)}
                value='4'
                defaultChecked={getAsesmen() && getAsesmen().length > 0 && getAsesmen().includes('4')}
                innerRef={register('asesmen')as any}
              />
              <Label>Tidak Bisa Berbahasa Indonesia</Label>
            </Col>
            <Col>
              <Input
                id="asesmen"
                type="checkbox"
                name="asesmen"
                className="me-1"
                onChange={(e) => handleAsesmenCheckbox(e)}
                value='5'
                defaultChecked={getAsesmen() && getAsesmen().length > 0 && getAsesmen().includes('5')}
                innerRef={register('asesmen')as any}
              />
              <Label>Keyakinan</Label>
            </Col>
            <Col>
              <Input
                id="asesmen"
                type="checkbox"
                name="asesmen"
                className="me-1"
                onChange={(e) => handleAsesmenCheckbox(e)}
                value='6'
                defaultChecked={getAsesmen() && getAsesmen().length > 0 && getAsesmen().includes('6')}
                innerRef={register('asesmen')as any}
              />
              <Label>Agama</Label>
            </Col>
          </Row>
          <Row className="mt-1">
            <Col></Col>
            <Col>
              <Input
                id="asesmen"
                type="checkbox"
                name="asesmen"
                className="me-1"
                onChange={(e) => handleAsesmenCheckbox(e)}
                value='7'
                defaultChecked={getAsesmen() && getAsesmen().length > 0 && getAsesmen().includes('7')}
                innerRef={register('asesmen')as any}
              />
              <Label>Hambatan Pengetahuan</Label>
            </Col>
            <Col>
              <Input
                id="asesmen"
                type="checkbox"
                name="asesmen"
                className="me-1"
                onChange={(e) => handleAsesmenCheckbox(e)}
                value='8'
                defaultChecked={getAsesmen() && getAsesmen().length > 0 && getAsesmen().includes('8')}
                innerRef={register('asesmen') as any}
              />
              <Label>Hambatan Emosi</Label>
            </Col>
            <Col>
              <Input
                id="asesmen"
                type="checkbox"
                name="asesmen"
                className="me-1"
                onChange={(e) => handleAsesmenCheckbox(e)}
                value='10'
                defaultChecked={getAsesmen() && getAsesmen().length > 0 && getAsesmen().includes('10')}
                innerRef={register('asessmen') as any}
              />
              <Label>Tingkat Pendidikan</Label>
            </Col>
          </Row>
          <Row className="mt-1">
            <Col></Col>
            <Col>
              <Input
                id="asesmen"
                type="checkbox"
                name="asesmen"
                className="me-1"
                onChange={(e) => handleAsesmenCheckbox(e)}
                value='9'
                style={{marginLeft:'-103px'}}
                defaultChecked={getAsesmen() && getAsesmen().length > 0 && getAsesmen().includes('9')}
                innerRef={register('asesmen')as any}
              />
              <Label>Pertimbangan Budaya Dalam Rawatan</Label>
            </Col>
            <Col>
              <Input
                id="asesmen"
                type="checkbox"
                name="asesmen"
                className="me-1"
                onChange={(e) => handleAsesmenCheckbox(e)}
                value='11'
                style={{marginLeft: '103px'}}
                defaultChecked={getAsesmen() && getAsesmen().length > 0 && getAsesmen().includes('11')}
                innerRef={register('asesmen')as any}
              />
              <Label>Nilai - Nilai</Label>
            </Col>
          </Row>
        </FormGroup>
        <Row className="mt-2">
          <Nav tabs className="mt-2">
            <NavItem>
              <NavLink className={(activeTab && activeTab === '1') ? 'active' : ''} onClick={() => toggle('1')}>
              DPJP
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={(activeTab && activeTab === '2') ? 'active' : ''} onClick={() => toggle('2')}>
              Manajemen Nyeri
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink className={(activeTab && activeTab === '3') ? 'active' : ''} onClick={() => toggle('3')}>
              Rohaniawan
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink className={(activeTab && activeTab === '4') ? 'active' : ''} onClick={() => toggle('4')}>
              Keperawatan
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={(activeTab && activeTab === '5') ? 'active' : ''} onClick={() => toggle('5')}>
              Informasi Lain
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={(activeTab && activeTab === '6') ? 'active' : ''} onClick={() => toggle('6')}>
              Posisi Khusus Post Operasi
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={(activeTab && activeTab === '7') ? 'active' : ''} onClick={() => toggle('7')}>
              Dokter Spesialis Anastesi
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={(activeTab && activeTab === '8') ? 'active' : ''} onClick={() => toggle('8')}>
              Mencuci Tangan
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={(activeTab && activeTab === '9') ? 'active' : ''} onClick={() => toggle('9')}>
              Penggunaan Peralatan Medis
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={(activeTab && activeTab === '10') ? 'active' : ''} onClick={() => toggle('10')}>
              Hak Dan Kewajiban Pasien
              </NavLink>
            </NavItem>
          </Nav>
        </Row>

        <Form onSubmit={handleSubmit(handleSubmitForm)}>

          <Dpjp
            data={data}
            activeTab={activeTab}
            processing={processing}
            setDirty={(param: boolean) => setIsKotor(param)}
            {...{ register, errors, setValue }}
          />

          <ManajemenNyeri
            data={data}
            activeTab={activeTab}
            processing={processing}
            setDirty={(param: boolean) => setIsKotor(param)}
            {...{ register, errors, setValue }}
          />

          {/* <Rohaniawan
            data={data}
            activeTab={activeTab}
            processing={processing}
            setDirty={(param: boolean) => setIsKotor(param)}
            {...{ register, errors, setValue }}
          /> */}

          <Keperawatan
            data={data}
            activeTab={activeTab}
            processing={processing}
            setDirty={(param: boolean) => setIsKotor(param)}
            {...{ register, errors, setValue }}
          />

          <InformasiLain
            data={data}
            activeTab={activeTab}
            processing={processing}
            setDirty={(param: boolean) => setIsKotor(param)}
            {...{ register, errors, setValue, getValues }}
          />

          <PostOperasiForm
            data={data}
            activeTab={activeTab}
            processing={processing}
            setDirty={(param: boolean) => setIsKotor(param)}
            {...{ register, errors, setValue }}
          />

          <DokterSpesialisAnastesiForm
            data={data}
            activeTab={activeTab}
            processing={processing}
            setDirty={(param: boolean) => setIsKotor(param)}
            {...{ register, errors, setValue }}
          />

          <MencuciTanganForm
            data={data}
            activeTab={activeTab}
            processing={processing}
            setDirty={(param: boolean) => setIsKotor(param)}
            {...{ register, errors, setValue }}
          />

          <PenggunaanPeralatanMedisForm
            data={data}
            activeTab={activeTab}
            processing={processing}
            setDirty={(param: boolean) => setIsKotor(param)}
            {...{ register, errors, setValue }}
          />

          <HakKewajibanPasienForm
            data={data}
            activeTab={activeTab}
            processing={processing}
            setDirty={(param: boolean) => setIsKotor(param)}
            {...{ register, errors, setValue }}
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
        </Form>
      </div>
    </>
  );
}

export default IntegratedEducationForm;
