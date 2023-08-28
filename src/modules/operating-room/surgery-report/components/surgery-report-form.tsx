import { Button, Col, Form, FormGroup, Input, Label, Nav, NavItem, NavLink, Row, TabContent, Table, TabPane } from "reactstrap";
import { GridChartRequest, IGridChartRequest, ISurgeryReportPdfRequestTov3, SurgeryReportPdfRequest, SurgeryReportPdfRequestTov3 } from "../requests/surgery-report-general.request";
import { useEffect, useState } from "react";
import { AES } from "crypto-js";
import { AppRequest } from "@src/shared/request";
import { FindPdfRequest, IPdfModel } from "@src/shared/pdf";
import GeneralChalazionForm from "./general-chalazion-form";
import GeneralCustomForm from "./general-custom-form";
import GeneralHordeolumForm from "./general-hordeolum-form";
import GeneralPhacoForm from "./general-phaco-form";
import LocalChalazionForm from "./local-chalazion-form";
import LocalCustomForm from "./local-custom-form";
import LocalHordeolumForm from "./local-hordeolum-form";
import LocalIntravitrealInjectionForm from "./local-intravitreal-injection-form";
import LocalPhacoForm from "./local-phaco-form";
import LocalPterygiumForm from "./lokal-pterygium-form";
import { SurgeryReportModel } from "../models/surgery-report.model";
import { SurgeryReportService } from "../services";
import { fetchSurgeryReport, fetchSurgeryReportPdf } from "../stores/surgery-report.store";
import getConfig from 'next/config';
import { handlePdf } from '@modules/operating-room/surgery-report/stores/surgery-report.store'
import surgeryList from "../const/surgeryList";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useWarnIfUnsavedChanges } from "@src/shared/alert";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { SubmitButton } from "@src/shared/button";
import { fetchCpptOk } from '@modules/operating-room/cppt/stores/cppt-ok.store';
import { PdfSurgeryReportLocalPhacoRequest } from '@modules/operating-room/surgery-report/requests/pdf-surgery-report-local-phaco.request';
import { PdfSurgeryReportLocalChalazionRequest } from '@modules/operating-room/surgery-report/requests/pdf-surgery-report-local-chalazion.request';
import { PdfSurgeryReportLocalPterygiumRequest } from '@modules/operating-room/surgery-report/requests/pdf-surgery-report-local-pterygium.request';
import { PdfSurgeryReportLocalCustomRequest } from '@modules/operating-room/surgery-report/requests/pdf-surgery-report-local-custom.request';
import { PdfSurgeryReportUmumPhacoRequest } from '@modules/operating-room/surgery-report/requests/pdf-surgery-report-umum-phaco.request';
import { PdfSurgeryReportUmumCustomRequest } from '@modules/operating-room/surgery-report/requests/pdf-surgery-report-umum-custom.request';
import { PdfSurgeryReportUmumChalazionRequest } from '@modules/operating-room/surgery-report/requests/pdf-surgery-report-umum-chalazion.request';
import { PdfSurgeryReportLocalHordeolumRequest } from '@modules/operating-room/surgery-report/requests/pdf-surgery-report-local-hordeolum.request';
import { PdfSurgeryReportUmumHordeolumRequest } from '@modules/operating-room/surgery-report/requests/pdf-surgery-report-umum-hordeolum.request';
import { DateTimeConverter } from "@src/shared/datetime-converter";

const SurgeryReportForm = (props: { data: SurgeryReportModel }) => {
  const { data } = props;
  const dispatch = useAppDispatch();
  const { treatment } = useAppSelector(state => state.patient);
  const { pdf } = useAppSelector(state => state.surgeryReport);
  const { publicRuntimeConfig } = getConfig();
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const [processing, setProcessing] = useState<boolean>(false);
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const { userData } = useAppSelector(state => state.auth);
  const [showTab, setShowTab] = useState<string>((data && data.form && data.form.Jenis_Operasi) ? data.form.Jenis_Operasi : '');
  const [imageErr, setImageErr] = useState({ error: false, message: '' });

  const getFormName = () => {
    if (data && data.form && data.form.Jenis_Operasi) {
      const surgeryType = surgeryList.find((val: any) => val.id === data.form.Jenis_Operasi);
      if (surgeryType) {
        return surgeryType.form_name;
      } else {
        return 'ok_laporan-pembedahan'
      }
    } else {
      return 'ok_laporan-pembedahan'
    }
  }

  useEffect(() => {
    if (treatment) {
      dispatch(fetchSurgeryReportPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: getFormName() })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf]);

  const { register: mainRegister, handleSubmit: mainHandleSubmit, errors: mainErrors, setValue: mainSetValue, getValues: mainGetValues, formState, errors } = useForm({
    mode: 'onChange',
    // resolver: yupResolver(GridChartRequest.schema()),
    defaultValues: {
      sedasi: (data && data.form && data.form.Sedasi) ? data.form.Sedasi : '',
      'general-anestesi': (data && data.form && data.form.General_Anestesi) ? data.form.General_Anestesi : '',
      'jenis-operasi': (data && data.form && data.form.Jenis_Operasi) ? data.form.Jenis_Operasi : '',
      'id-dokter-operator': (data && data.form && data.form.ID_Dokter_Operator) ? data.form.ID_Dokter_Operator : '',
      'id-dokter-anestesi': (data && data.form && data.form.Id_Dokter_Anestesi) ? data.form.Id_Dokter_Anestesi : '',
      'id-perawat-dokter': (data && data.form && data.form.ID_Perawat_Dokter) ? data.form.ID_Perawat_Dokter : '',
      'id-perawat-dokter-asisten-operator': (data && data.form && data.form.Id_Perawat_Dokter_Asisten_Operator) ? data.form.Id_Perawat_Dokter_Asisten_Operator : '',
      'id-perawat-sirkular': (data && data.form && data.form.Id_Perawat_Sirkular) ? data.form.Id_Perawat_Sirkular : '',
      'diagnosa-pra-bedah': (data && data.form && data.form.Diagnosa_Pra_Bedah) ? data.form.Diagnosa_Pra_Bedah : '',
      'cmb-tindakan-bedah': (data && data.form && data.form.Cmb_Tindakan_Bedah) ? data.form.Cmb_Tindakan_Bedah : '',
      'lokal-pterygium-0': (data && data.form && data.form.Lokal_Pterygium_0) ? data.form.Lokal_Pterygium_0 : '',
      'lokal-pterygium-1': (data && data.form && data.form.Lokal_Pterygium_1) ? data.form.Lokal_Pterygium_1 : '',
      'lokal-pterygium-2': (data && data.form && data.form.Lokal_Pterygium_2) ? data.form.Lokal_Pterygium_2 : '',
      'lokal-pterygium-3': (data && data.form && data.form.Lokal_Pterygium_3) ? data.form.Lokal_Pterygium_3 : '',
      'lokal-pterygium-4': (data && data.form && data.form.Lokal_Pterygium_4) ? data.form.Lokal_Pterygium_4 : '',
      'lokal-pterygium-5': (data && data.form && data.form.Lokal_Pterygium_5) ? data.form.Lokal_Pterygium_5 : '',
      'lokal-pterygium-6': (data && data.form && data.form.Lokal_Pterygium_6) ? data.form.Lokal_Pterygium_6 : '',
      'lokal-pterygium-7': (data && data.form && data.form.Lokal_Pterygium_7) ? data.form.Lokal_Pterygium_7 : '',
      'lokal-pterygium-8': (data && data.form && data.form.Lokal_Pterygium_8) ? data.form.Lokal_Pterygium_8 : '',
      'lokal-pterygium-9': (data && data.form && data.form.Lokal_Pterygium_9) ? data.form.Lokal_Pterygium_9 : '',
      'lokal-pterygium-injeksi': (data && data.form && data.form.Lokal_Pterygium_Injeksi) ? data.form.Lokal_Pterygium_Injeksi : '',
      'lokal-pterygium-diteteskan': (data && data.form && data.form.Lokal_Pterygium_Diteteskan) ? data.form.Lokal_Pterygium_Diteteskan : '',
      'lokal-pterygium-exicisi': (data && data.form && data.form.Lokal_Pterygium_Exicisi) ? data.form.Lokal_Pterygium_Exicisi : '',
      'lokal-pterygium-bara-sclera': (data && data.form && data.form.Lokal_Pterygium_Bara_Sclera) ? data.form.Lokal_Pterygium_Bara_Sclera : '',
      'lokal-pterygium-conjungtiva': (data && data.form && data.form.Lokal_Pterygium_Conjungtiva) ? data.form.Lokal_Pterygium_Conjungtiva : '',
      'lokal-pterygium-clg': (data && data.form && data.form.Lokal_Pterygium_Clg) ? data.form.Lokal_Pterygium_Clg : '',
      'lokal-pterygium-check-injeksi': (data && data.form && data.form.Lokal_Pterygium_Check_Injeksi) ? data.form.Lokal_Pterygium_Check_Injeksi : '',
      'cmb-diagnosa-pasca-bedah': (data && data.form && data.form.Cmb_Diagnosa_Pasca_Bedah) ? data.form.Cmb_Diagnosa_Pasca_Bedah : '',
      'diagnosa-pasca-bedah': (data && data.form && data.form.Diagnosa_Pasca_Bedah) ? data.form.Diagnosa_Pasca_Bedah : '',
      'tanggal-pembedahan': (data && data.form && data.form.Tanggal_Pembedahan) ? data.form.Tanggal_Pembedahan.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}`,
      'waktu-start-lama-pembedahan': (data && data.form && data.form.Lama_Pembedahan) ? data.form.Waktu_Start_Lama_Pembedahan : '',
      'waktu-end-lama-pembedahan': (data && data.form && data.form.Lama_Pembedahan) ? data.form.Waktu_End_Lama_Pembedahan : '',
      'lama-pembedahan': (data && data.form && data.form.Lama_Pembedahan) ? data.form.Lama_Pembedahan : '',
      'keterangan-pembedahan': (data && data.form && data.form.Keterangan_Pembedahan) ? data.form.Keterangan_Pembedahan : '',
      'pembedahan-opsi-kanan': (data && data.form && data.form.Pembedahan_Opsi_Kanan) ? data.form.Pembedahan_Opsi_Kanan : '',
      'pembedahan-opsi-kiri': (data && data.form && data.form.Pembedahan_Opsi_Kiri) ? data.form.Pembedahan_Opsi_Kiri : '',
      'pembedahan-opsi-elektif': (data && data.form && data.form.Pembedahan_Opsi_Elektif) ? data.form.Pembedahan_Opsi_Elektif : '',
      'pembedahan-opsi-emergency': (data && data.form && data.form.Pembedahan_Opsi_Emergency) ? data.form.Pembedahan_Opsi_Emergency : '',
      'tindakan-pembedahan': (data && data.form && data.form.Tindakan_Pembedahan) ? data.form.Tindakan_Pembedahan : '',
      'kode-inventory': (data && data.form && data.form.Kode_Inventory) ? data.form.Kode_Inventory : '',
      'url-image-stiker': (data && data.form && data.form.Url_Image_Stiker) ? data.form.Url_Image_Stiker : '',
      'name-image-stiker': (data && data.form && data.form.Name_Image_Stiker) ? data.form.Name_Image_Stiker : '',
      'type-image-stiker': (data && data.form && data.form.Type_Image_Stiker) ? data.form.Type_Image_Stiker : '',
      'size-image-stiker': (data && data.form && data.form.Size_Image_Stiker) ? data.form.Size_Image_Stiker : '',
      'pemakaian-implant': (data && data.form && data.form.Pemakaian_Implant) ? data.form.Pemakaian_Implant : '',
      'lokal-chalazion-0': (data && data.form && data.form.Lokal_Chalazion_0) ? data.form.Lokal_Chalazion_0 : '',
      'lokal-chalazion-1': (data && data.form && data.form.Lokal_Chalazion_1) ? data.form.Lokal_Chalazion_1 : '',
      'lokal-chalazion-2': (data && data.form && data.form.Lokal_Chalazion_2) ? data.form.Lokal_Chalazion_2 : '',
      'lokal-chalazion-3': (data && data.form && data.form.Lokal_Chalazion_3) ? data.form.Lokal_Chalazion_3 : '',
      'lokal-chalazion-4': (data && data.form && data.form.Lokal_Chalazion_4) ? data.form.Lokal_Chalazion_4 : '',
      'lokal-chalazion-5': (data && data.form && data.form.Lokal_Chalazion_5) ? data.form.Lokal_Chalazion_5 : '',
      'lokal-chalazion-6': (data && data.form && data.form.Lokal_Chalazion_6) ? data.form.Lokal_Chalazion_6 : '',
      'lokal-chalazion-7': (data && data.form && data.form.Lokal_Chalazion_7) ? data.form.Lokal_Chalazion_7 : '',
      'lokal-chalazion-8': (data && data.form && data.form.Lokal_Chalazion_8) ? data.form.Lokal_Chalazion_8 : '',
      'lokal-chalazion-diteteskan-1': (data && data.form && data.form.Lokal_Chalazion_Diteteskan_1) ? data.form.Lokal_Chalazion_Diteteskan_1 : '',
      'lokal-chalazion-diteteskan-2': (data && data.form && data.form.Lokal_Chalazion_Diteteskan_2) ? data.form.Lokal_Chalazion_Diteteskan_2 : '',
      'lokal-chalazion-diteteskan-4': (data && data.form && data.form.Lokal_Chalazion_Diteteskan_4) ? data.form.Lokal_Chalazion_Diteteskan_4 : '',
      'lokal-chalazion-bagian': (data && data.form && data.form.Lokal_Chalazion_Bagian) ? data.form.Lokal_Chalazion_Bagian : '',
      'lokal-chalazion-injeksi': (data && data.form && data.form.Lokal_Chalazion_Injeksi) ? data.form.Lokal_Chalazion_Injeksi : '',
      'lokal-phaco-0': (data && data.form && data.form.Lokal_Phaco_0) ? data.form.Lokal_Phaco_0 : '',
      'lokal-phaco-1': (data && data.form && data.form.Lokal_Phaco_1) ? data.form.Lokal_Phaco_1 : '',
      'lokal-phaco-2': (data && data.form && data.form.Lokal_Phaco_2) ? data.form.Lokal_Phaco_2 : '',
      'lokal-phaco-3': (data && data.form && data.form.Lokal_Phaco_3) ? data.form.Lokal_Phaco_3 : '',
      'lokal-phaco-4': (data && data.form && data.form.Lokal_Phaco_4) ? data.form.Lokal_Phaco_4 : '',
      'lokal-phaco-5': (data && data.form && data.form.Lokal_Phaco_5) ? data.form.Lokal_Phaco_5 : '',
      'lokal-phaco-6': (data && data.form && data.form.Lokal_Phaco_6) ? data.form.Lokal_Phaco_6 : '',
      'lokal-phaco-7': (data && data.form && data.form.Lokal_Phaco_7) ? data.form.Lokal_Phaco_7 : '',
      'lokal-phaco-8': (data && data.form && data.form.Lokal_Phaco_8) ? data.form.Lokal_Phaco_8 : '',
      'lokal-phaco-9': (data && data.form && data.form.Lokal_Phaco_9) ? data.form.Lokal_Phaco_9 : '',
      'lokal-phaco-10': (data && data.form && data.form.Lokal_Phaco_10) ? data.form.Lokal_Phaco_10 : '',
      'lokal-phaco-knife': (data && data.form && data.form.Lokal_Phaco_Knife) ? data.form.Lokal_Phaco_Knife : '',
      'lokal-phaco-11': (data && data.form && data.form.Lokal_Phaco_11) ? data.form.Lokal_Phaco_11 : '',
      'lokal-phaco-12': (data && data.form && data.form.Lokal_Phaco_12) ? data.form.Lokal_Phaco_12 : '',
      'lokal-phaco-13': (data && data.form && data.form.Lokal_Phaco_13) ? data.form.Lokal_Phaco_13 : '',
      'lokal-phaco-14': (data && data.form && data.form.Lokal_Phaco_14) ? data.form.Lokal_Phaco_14 : '',
      'lokal-phaco-15': (data && data.form && data.form.Lokal_Phaco_15) ? data.form.Lokal_Phaco_15 : '',
      'lokal-phaco-16': (data && data.form && data.form.Lokal_Phaco_16) ? data.form.Lokal_Phaco_16 : '',
      'lokal-phaco-17': (data && data.form && data.form.Lokal_Phaco_17) ? data.form.Lokal_Phaco_17 : '',
      'lokal-phaco-18': (data && data.form && data.form.Lokal_Phaco_18) ? data.form.Lokal_Phaco_18 : '',
      'lokal-phaco-19': (data && data.form && data.form.Lokal_Phaco_19) ? data.form.Lokal_Phaco_19 : '',
      'lokal-phaco-20': (data && data.form && data.form.Lokal_Phaco_20) ? data.form.Lokal_Phaco_20 : '',
      'umum-phaco-0': (data && data.form && data.form.Umum_Phaco_0) ? data.form.Umum_Phaco_0 : '',
      'umum-phaco-1': (data && data.form && data.form.Umum_Phaco_1) ? data.form.Umum_Phaco_1 : '',
      'umum-phaco-2': (data && data.form && data.form.Umum_Phaco_2) ? data.form.Umum_Phaco_2 : '',
      'umum-phaco-3': (data && data.form && data.form.Umum_Phaco_3) ? data.form.Umum_Phaco_3 : '',
      'umum-phaco-4': (data && data.form && data.form.Umum_Phaco_4) ? data.form.Umum_Phaco_4 : '',
      'umum-phaco-5': (data && data.form && data.form.Umum_Phaco_5) ? data.form.Umum_Phaco_5 : '',
      'umum-phaco-6': (data && data.form && data.form.Umum_Phaco_6) ? data.form.Umum_Phaco_6 : '',
      'umum-phaco-7': (data && data.form && data.form.Umum_Phaco_7) ? data.form.Umum_Phaco_7 : '',
      'umum-phaco-8': (data && data.form && data.form.Umum_Phaco_8) ? data.form.Umum_Phaco_8 : '',
      'umum-phaco-9': (data && data.form && data.form.Umum_Phaco_9) ? data.form.Umum_Phaco_9 : '',
      'umum-phaco-10': (data && data.form && data.form.Umum_Phaco_10) ? data.form.Umum_Phaco_10 : '',
      'umum-phaco-11': (data && data.form && data.form.Umum_Phaco_11) ? data.form.Umum_Phaco_11 : '',
      'umum-phaco-12': (data && data.form && data.form.Umum_Phaco_12) ? data.form.Umum_Phaco_12 : '',
      'umum-phaco-13': (data && data.form && data.form.Umum_Phaco_13) ? data.form.Umum_Phaco_13 : '',
      'umum-phaco-14': (data && data.form && data.form.Umum_Phaco_14) ? data.form.Umum_Phaco_14 : '',
      'umum-phaco-15': (data && data.form && data.form.Umum_Phaco_15) ? data.form.Umum_Phaco_15 : '',
      'umum-phaco-16': (data && data.form && data.form.Umum_Phaco_16) ? data.form.Umum_Phaco_16 : '',
      'umum-phaco-17': (data && data.form && data.form.Umum_Phaco_17) ? data.form.Umum_Phaco_17 : '',
      'umum-phaco-18': (data && data.form && data.form.Umum_Phaco_18) ? data.form.Umum_Phaco_18 : '',
      'umum-phaco-19': (data && data.form && data.form.Umum_Phaco_19) ? data.form.Umum_Phaco_19 : '',
      'umum-phaco-20': (data && data.form && data.form.Umum_Phaco_20) ? data.form.Umum_Phaco_20 : '',
      'umum-phaco-gambar-mata': (data && data.form && data.form.Umum_Phaco_Gambar_Mata) ? data.form.Umum_Phaco_Gambar_Mata : '',
      'jenis-pembedahan': (data && data.form && data.form.Jenis_Pembedahan) ? data.form.Jenis_Pembedahan : '',
      'operasi-ke': (data && data.form && data.form.Operasi_Ke) ? data.form.Operasi_Ke : '',
      profilaksis: (data && data.form && data.form.Profilaksis) ? data.form.Profilaksis : '',
      'profilaksis-ya-teks': (data && data.form && data.form.Profilaksis_Ya_Teks) ? data.form.Profilaksis_Ya_Teks : '',
      'antibiotik-jenis': (data && data.form && data.form.Antibiotik_Jenis) ? data.form.Antibiotik_Jenis : '',
      'antibiotik-waktu': (data && data.form && data.form.Antibiotik_Waktu) ? data.form.Antibiotik_Waktu : '',
      'skala-anestesi': (data && data.form && data.form.Skala_Anestesi) ? data.form.Skala_Anestesi : '',
      'grid-chart-img': (data && data.form && data.form.Grid_Chart_Img) ? data.form.Grid_Chart_Img : '',
      'grid-chart-data': (data && data.form && data.form.Grid_Chart_Data) ? data.form.Grid_Chart_Data : '',
      'anestesi-topikal': (data && data.form && data.form.Anestesi_Topikal) ? data.form.Anestesi_Topikal : '',
      'anestesi-infiltrasi': (data && data.form && data.form.Anestesi_Infiltrasi) ? data.form.Anestesi_Infiltrasi : '',
      'anestesi-infiltrasi-tipe': (data && data.form && data.form.Anestesi_Infiltrasi_Tipe) ? data.form.Anestesi_Infiltrasi_Tipe : '',
      'anestesi-field-block': (data && data.form && data.form.Anestesi_Field_Block) ? data.form.Anestesi_Field_Block : '',
      'anestesi-field-block-tipe': (data && data.form && data.form.Anestesi_Field_Block_Tipe) ? data.form.Anestesi_Field_Block_Tipe : '',
      'lokasi-od': (data && data.form && data.form.Lokasi_OD) ? data.form.Lokasi_OD : '',
      'lokasi-os': (data && data.form && data.form.Lokasi_OS) ? data.form.Lokasi_OS : '',
      'penyakit-komplikasi': (data && data.form && data.form.Penyakit_Komplikasi) ? data.form.Penyakit_Komplikasi : '',
      'penyakit-komplikasi-teks': (data && data.form && data.form.Penyakit_Komplikasi_Teks) ? data.form.Penyakit_Komplikasi_Teks : '',
      'konsultasi-intra-operatif': (data && data.form && data.form.Konsultasi_Intra_Operatif) ? data.form.Konsultasi_Intra_Operatif : '',
      'jaringan-pendarahan': (data && data.form && data.form.Jaringan_Pendarahan) ? data.form.Jaringan_Pendarahan : '',
      'jumlah-darah-hilang': (data && data.form && data.form.Jumlah_Darah_Hilang) ? data.form.Jumlah_Darah_Hilang : '',
      'jumlah-darah-masuk': (data && data.form && data.form.Jumlah_Darah_Masuk) ? data.form.Jumlah_Darah_Masuk : '',
      'jumlah-pendarahan': (data && data.form && data.form.Jumlah_Pendarahan) ? data.form.Jumlah_Pendarahan : '',
      responhipersensitivitas: (data && data.form && data.form.Responhipersensitivitas) ? data.form.Responhipersensitivitas : '',
      kejadiantoksikasi: (data && data.form && data.form.Kejadiantoksikasi) ? data.form.Kejadiantoksikasi : '',
      'responhipersensitivitas-ya-teks': (data && data.form && data.form.Responhipersensitivitas_Ya_Teks) ? data.form.Responhipersensitivitas_Ya_Teks : '',
      'kejadiantoksikasi-ya-teks': (data && data.form && data.form.Kejadiantoksikasi_Ya_Teks) ? data.form.Kejadiantoksikasi_Ya_Teks : '',
      'tanggal-jaringan-patologi': (data && data.form && data.form.Tanggal_Jaringan_Patologi) ? data.form.Tanggal_Jaringan_Patologi : '',
      'macam-jaringan': (data && data.form && data.form.Macam_Jaringan) ? data.form.Macam_Jaringan : '',
      'lokal-phaco-gambar-mata': (data && data.form && data.form.Lokal_Phaco_Gambar_Mata) ? data.form.Lokal_Phaco_Gambar_Mata : '',
      'us-absolute-1': (data && data.form && data.form.Us_Absolute_1) ? data.form.Us_Absolute_1 : '',
      'us-absolute-2': (data && data.form && data.form.Us_Absolute_2) ? data.form.Us_Absolute_2 : '',
      'us-absolute-3': (data && data.form && data.form.Us_Absolute_3) ? data.form.Us_Absolute_3 : '',
      'us-absolute-4': (data && data.form && data.form.Us_Absolute_4) ? data.form.Us_Absolute_4 : '',
      'us-absolute-5': (data && data.form && data.form.Us_Absolute_5) ? data.form.Us_Absolute_5 : '',
      'us-absolute-6': (data && data.form && data.form.Us_Absolute_6) ? data.form.Us_Absolute_6 : '',
      'us-elapsed-1': (data && data.form && data.form.Us_Elapsed_1) ? data.form.Us_Elapsed_1 : '',
      'us-elapsed-2': (data && data.form && data.form.Us_Elapsed_2) ? data.form.Us_Elapsed_2 : '',
      'us-elapsed-3': (data && data.form && data.form.Us_Elapsed_3) ? data.form.Us_Elapsed_3 : '',
      'us-elapsed-4': (data && data.form && data.form.Us_Elapsed_4) ? data.form.Us_Elapsed_4 : '',
      'us-elapsed-5': (data && data.form && data.form.Us_Elapsed_5) ? data.form.Us_Elapsed_5 : '',
      'us-elapsed-6': (data && data.form && data.form.Us_Elapsed_6) ? data.form.Us_Elapsed_6 : '',
      'lokal-injeksi-intravitreal-0': (data && data.form && data.form.Lokal_Injeksi_Intravitreal_0) ? data.form.Lokal_Injeksi_Intravitreal_0 : '',
      'lokal-injeksi-intravitreal-1': (data && data.form && data.form.Lokal_Injeksi_Intravitreal_1) ? data.form.Lokal_Injeksi_Intravitreal_1 : '',
      'lokal-injeksi-intravitreal-2': (data && data.form && data.form.Lokal_Injeksi_Intravitreal_2) ? data.form.Lokal_Injeksi_Intravitreal_2 : '',
      'lokal-injeksi-intravitreal-3': (data && data.form && data.form.Lokal_Injeksi_Intravitreal_3) ? data.form.Lokal_Injeksi_Intravitreal_3 : '',
      'lokal-injeksi-intravitreal-4': (data && data.form && data.form.Lokal_Injeksi_Intravitreal_4) ? data.form.Lokal_Injeksi_Intravitreal_4 : '',
      'lokal-injeksi-intravitreal-5': (data && data.form && data.form.Lokal_Injeksi_Intravitreal_5) ? data.form.Lokal_Injeksi_Intravitreal_5 : '',
      'lokal-injeksi-intravitreal-6': (data && data.form && data.form.Lokal_Injeksi_Intravitreal_6) ? data.form.Lokal_Injeksi_Intravitreal_6 : '',
      'lokal-injeksi-intravitreal-7': (data && data.form && data.form.Lokal_Injeksi_Intravitreal_7) ? data.form.Lokal_Injeksi_Intravitreal_7 : '',
      'lokal-injeksi-intravitreal-8': (data && data.form && data.form.Lokal_Injeksi_Intravitreal_8) ? data.form.Lokal_Injeksi_Intravitreal_8 : '',
      'lokal-injeksi-intravitreal-injeksi-lain-teks': (data && data.form && data.form.Lokal_Injeksi_Intravitreal_Injeksi_Lain_Teks) ? data.form.Lokal_Injeksi_Intravitreal_Injeksi_Lain_Teks : '',
      'lokal-injeksi-intravitreal-pengukuran': (data && data.form && data.form.Lokal_Injeksi_Intravitreal_Pengukuran) ? data.form.Lokal_Injeksi_Intravitreal_Pengukuran : '',
      'lokal-injeksi-intravitreal-injeksi-1': (data && data.form && data.form.Lokal_Injeksi_Intravitreal_Injeksi_1) ? data.form.Lokal_Injeksi_Intravitreal_Injeksi_1 : '',
      'lokal-injeksi-intravitreal-injeksi-2': (data && data.form && data.form.Lokal_Injeksi_Intravitreal_Injeksi_2) ? data.form.Lokal_Injeksi_Intravitreal_Injeksi_2 : '',
      'lokal-injeksi-intravitreal-injeksi-3': (data && data.form && data.form.Lokal_Injeksi_Intravitreal_Injeksi_3) ? data.form.Lokal_Injeksi_Intravitreal_Injeksi_3 : '',
      'lokal-injeksi-intravitreal-injeksi-4': (data && data.form && data.form.Lokal_Injeksi_Intravitreal_Injeksi_4) ? data.form.Lokal_Injeksi_Intravitreal_Injeksi_4 : '',
      'lokal-injeksi-intravitreal-injeksi-5': (data && data.form && data.form.Lokal_Injeksi_Intravitreal_Injeksi_5 && data.form.Lokal_Injeksi_Intravitreal_Injeksi_5 === '1') ? '1' : '0',
      'lokal-injeksi-intravitreal-injeksi-6': (data && data.form && data.form.Lokal_Injeksi_Intravitreal_Injeksi_6 && data.form.Lokal_Injeksi_Intravitreal_Injeksi_6 === '1') ? '1' : '0',
      'lokal-injeksi-intravitreal-diteteskan-1': (data && data.form && data.form.Lokal_Injeksi_Intravitreal_Diteteskan_1) ? data.form.Lokal_Injeksi_Intravitreal_Diteteskan_1 : '',
      'lokal-injeksi-intravitreal-diteteskan-2': (data && data.form && data.form.Lokal_Injeksi_Intravitreal_Diteteskan_2) ? data.form.Lokal_Injeksi_Intravitreal_Diteteskan_2 : '',
      'lokal-injeksi-intravitreal-diteteskan-3': (data && data.form && data.form.Lokal_Injeksi_Intravitreal_Diteteskan_3) ? data.form.Lokal_Injeksi_Intravitreal_Diteteskan_3 : '',
      'lokal-custom-keterangan': (data && data.form && data.form.Lokal_Custom_Keterangan) ? data.form.Lokal_Custom_Keterangan : '',
      'lokal-chalazion-gambar-pra': (data && data.form && data.form.Lokal_Chalazion_Gambar_Pra) ? data.form.Lokal_Chalazion_Gambar_Pra : '',
      'lokal-chalazion-gambar-pasca': (data && data.form && data.form.Lokal_Chalazion_Gambar_Pasca) ? data.form.Lokal_Chalazion_Gambar_Pasca : '',
      'lokal-hordeolum-gambar-pra': (data && data.form && data.form.Lokal_Hordeolum_Gambar_Pra) ? data.form.Lokal_Hordeolum_Gambar_Pra : '',
      'lokal-hordeolum-gambar-pasca': (data && data.form && data.form.Lokal_Hordeolum_Gambar_Pasca) ? data.form.Lokal_Hordeolum_Gambar_Pasca : '',
      'lokal-pterygium-gambar-pra': (data && data.form && data.form.Lokal_Pterygium_Gambar_Pra) ? data.form.Lokal_Pterygium_Gambar_Pra : '',
      'lokal-pterygium-gambar-pasca': (data && data.form && data.form.Lokal_Pterygium_Gambar_Pasca) ? data.form.Lokal_Pterygium_Gambar_Pasca : '',
      'umum-custom-keterangan': (data && data.form && data.form.Umum_Custom_Keterangan) ? data.form.Umum_Custom_Keterangan : '',
      'us-absolute-up-1': (data && data.form && data.form.Us_Absolute_UP_1) ? data.form.Us_Absolute_UP_1 : '',
      'us-absolute-up-2': (data && data.form && data.form.Us_Absolute_UP_2) ? data.form.Us_Absolute_UP_2 : '',
      'us-absolute-up-3': (data && data.form && data.form.Us_Absolute_UP_3) ? data.form.Us_Absolute_UP_3 : '',
      'us-absolute-up-4': (data && data.form && data.form.Us_Absolute_UP_4) ? data.form.Us_Absolute_UP_4 : '',
      'us-absolute-up-5': (data && data.form && data.form.Us_Absolute_UP_5) ? data.form.Us_Absolute_UP_5 : '',
      'us-absolute-up-6': (data && data.form && data.form.Us_Absolute_UP_6) ? data.form.Us_Absolute_UP_6 : '',
      'us-elapsed-up-1': (data && data.form && data.form.Us_Elapsed_UP_1) ? data.form.Us_Elapsed_UP_1 : '',
      'us-elapsed-up-2': (data && data.form && data.form.Us_Elapsed_UP_2) ? data.form.Us_Elapsed_UP_2 : '',
      'us-elapsed-up-3': (data && data.form && data.form.Us_Elapsed_UP_3) ? data.form.Us_Elapsed_UP_3 : '',
      'us-elapsed-up-4': (data && data.form && data.form.Us_Elapsed_UP_4) ? data.form.Us_Elapsed_UP_4 : '',
      'us-elapsed-up-5': (data && data.form && data.form.Us_Elapsed_UP_5) ? data.form.Us_Elapsed_UP_5 : '',
      'us-elapsed-up-6': (data && data.form && data.form.Us_Elapsed_UP_6) ? data.form.Us_Elapsed_UP_6 : '',
      'ttd-dokter': (data && data.form && data.form.TTD_Dokter) ? data.form.TTD_Dokter : '',
      'id-dokter': (data && data.form && data.form.ID_Dokter) ? data.form.ID_Dokter : '',
      'ttd-perawat': (data && data.form && data.form.TTD_Perawat) ? data.form.TTD_Perawat : '',
      'id-perawat': (data && data.form && data.form.ID_Perawat) ? data.form.ID_Perawat : '',
      'lokal-hordeolum-0': (data && data.form && data.form.Lokal_Hordeolum_0) ? data.form.Lokal_Hordeolum_0 : '',
      'lokal-hordeolum-1': (data && data.form && data.form.Lokal_Hordeolum_1) ? data.form.Lokal_Hordeolum_1 : '',
      'lokal-hordeolum-2': (data && data.form && data.form.Lokal_Hordeolum_2) ? data.form.Lokal_Hordeolum_2 : '',
      'lokal-hordeolum-3': (data && data.form && data.form.Lokal_Hordeolum_3) ? data.form.Lokal_Hordeolum_3 : '',
      'lokal-hordeolum-4': (data && data.form && data.form.Lokal_Hordeolum_4) ? data.form.Lokal_Hordeolum_4 : '',
      'lokal-hordeolum-5': (data && data.form && data.form.Lokal_Hordeolum_5) ? data.form.Lokal_Hordeolum_5 : '',
      'lokal-hordeolum-6': (data && data.form && data.form.Lokal_Hordeolum_6) ? data.form.Lokal_Hordeolum_6 : '',
      'lokal-hordeolum-7': (data && data.form && data.form.Lokal_Hordeolum_7) ? data.form.Lokal_Hordeolum_7 : '',
      'lokal-hordeolum-8': (data && data.form && data.form.Lokal_Hordeolum_8) ? data.form.Lokal_Hordeolum_8 : '',
      'lokal-hordeolum-diteteskan-1': (data && data.form && data.form.Lokal_Hordeolum_Diteteskan_1) ? data.form.Lokal_Hordeolum_Diteteskan_1 : '',
      'lokal-hordeolum-diteteskan-2': (data && data.form && data.form.Lokal_Hordeolum_Diteteskan_2) ? data.form.Lokal_Hordeolum_Diteteskan_2 : '',
      'lokal-hordeolum-diteteskan-3': (data && data.form && data.form.Lokal_Hordeolum_Diteteskan_3) ? data.form.Lokal_Hordeolum_Diteteskan_3 : '',
      'lokal-hordeolum-diteteskan-4': (data && data.form && data.form.Lokal_Hordeolum_Diteteskan_4) ? data.form.Lokal_Hordeolum_Diteteskan_4 : '',
    },
  })

  const { isDirty } = formState;

  useWarnIfUnsavedChanges(isDirty, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  useEffect(() => {
    if (data && data.form && data.form.Obat_Obat) {
      mainSetValue('obat-obat', data.form.Obat_Obat);
    } else {
      if (showTab === '1') {
        mainSetValue('obat-obat', 'Lidocaine 2%');
      } else {
        mainSetValue('obat-obat', 'Pantocain 0,5%');
      }
    }
  }, [data, showTab])


  const handleChangeOperation = (val: any) => {
    setShowTab(val.target.value);
  };

  const handleDoctorSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      mainSetValue('ttd-dokter', image.Signature);
      mainSetValue('id-dokter', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      mainSetValue('ttd-dokter', image.Signature);
      mainSetValue('id-dokter', image.ID_Karyawan);
    }
  }

  const handleNurseSigned = (image: SignatureModel) => {
    mainSetValue('ttd-perawat', image.Signature);
    mainSetValue('id-perawat', image.ID_Karyawan);
  }

  const generateRequest = (operationType: string, form: any, emrId: string, treatment: any) => {
    switch (operationType) {
    case '1':
      return {
        request: PdfSurgeryReportLocalPhacoRequest.createPdfRequest(form, emrId, treatment),
        formName: 'ok_laporan-pembedahan-lokal-phaco_v3',
      }
    case '2':
      return {
        request: SurgeryReportPdfRequestTov3.createPdfRequest(form, emrId, treatment),
        formName: 'ok_laporan-pembedahan-lokal-intravitreal_v3',
      }
    case '3':
      return {
        request: PdfSurgeryReportLocalChalazionRequest.createPdfRequest(form, emrId, treatment),
        formName: 'ok_laporan-pembedahan-lokal-chalazion_v3',
      }
    case '4':
      return {
        request: PdfSurgeryReportLocalPterygiumRequest.createPdfRequest(form, emrId, treatment),
        formName: 'ok_laporan-pembedahan-lokal-pterygium_v3',
      }
    case '5':
      return {
        request: PdfSurgeryReportLocalCustomRequest.createPdfRequest(form, emrId, treatment),
        formName: 'ok_laporan-pembedahan-lokal-custom_v3',
      }
    case '6':
      return {
        request: PdfSurgeryReportUmumPhacoRequest.createPdfRequest(form, emrId, treatment),
        formName: 'ok_laporan-pembedahan-umum-phaco_v3',
      }
    case '7':
      return {
        request: PdfSurgeryReportUmumCustomRequest.createPdfRequest(form, emrId, treatment),
        formName: 'ok_laporan-pembedahan-umum-custom_v3',
      }
    case '8':
      return {
        request: PdfSurgeryReportUmumChalazionRequest.createPdfRequest(form, emrId, treatment),
        formName: 'ok_laporan-pembedahan-umum-chalazion_v3',
      }
    case '9':
      return {
        request: PdfSurgeryReportLocalHordeolumRequest.createPdfRequest(form, emrId, treatment),
        formName: 'ok_laporan-pembedahan-lokal-hordeolum_v3',
      }
    case '10':
      return {
        request: PdfSurgeryReportUmumHordeolumRequest.createPdfRequest(form, emrId, treatment),
        formName: 'ok_laporan-pembedahan-umum-hordeolum_v3',
      }
    default:
      return {};
    }
  }

  const handleSubmitForm = (val: any) => {

   
    setProcessing(true);
    Object.entries(val).forEach(([key, value]: any) => {
      if (typeof value === 'number' || typeof value === 'undefined') {
        val[key] = value && value.toString();
      }
    })
    if (!treatment) {
      return;
    }
    
    setImageErr({ error: false, message: '' })
    if (val['pemakaian-implant'] === '1' && val["url-image-stiker"] === '') {
      setImageErr({ error: true, message: 'gambar stiker implant harus di upload' });
      setProcessing(false);
      return;
    }
    
    const appRequest = SurgeryReportPdfRequest.createFromStore({...treatment, jenis_operasi: val['jenis-operasi']});
    const params = {...val, ...AppRequest.createFromStore(treatment)}
    dispatch(handlePdf(undefined));
    SurgeryReportService().update(params)
      .then(() => {
        SurgeryReportService().show(appRequest)
          .then((resp) => {
            const { form } = resp.data.data;
            const { request, formName } = generateRequest(val['jenis-operasi'], { ...form, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id, treatment);
            if (request && formName) {
              SurgeryReportService().pdfv3(request).then(() => {
                setProcessing(false);
                dispatch(fetchSurgeryReportPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: formName })));
              }).catch(() => {
                setProcessing(false);
              })
            } else {
              SurgeryReportService().pdfNew(appRequest).then(() => {
                setProcessing(false);
              }).catch(() => {
                setProcessing(false);
              })
            }
          });
        setProcessing(false);
        dispatch(fetchSurgeryReport(AppRequest.createFromStore(treatment)));
      });

  }

  return (
    <Form onSubmit={mainHandleSubmit(handleSubmitForm)}>
      <FormGroup>
        <Label for="jenis_operasi" md="2" sm="12">Jenis Operasi</Label>
        <Col>
          <Input
            type="select"
            id="jenis-operasi"
            name="jenis-operasi"
            innerRef={mainRegister({ required: true })}
            onChange={(e) => handleChangeOperation(e)}>
            <option value="" disabled={true}>--</option>
            {
              surgeryList && surgeryList.map((item: any, key: number) => {
                return <option value={item.id} key={key}>{ item.value }</option>;
              })
            }
          </Input>
        </Col>
      </FormGroup>
      {
        showTab && showTab === '1' && (
          <LocalPhacoForm
            pdfData={pdfData}
            publicRuntimeConfig={publicRuntimeConfig}
            processing={processing}
            defaultSelected={true}
            data={data}
            {...{ mainRegister, mainErrors, mainSetValue, mainGetValues }}
          />
        )
      }
      {
        showTab && showTab === '2' && (
          <LocalIntravitrealInjectionForm
            pdfData={pdfData}
            publicRuntimeConfig={publicRuntimeConfig}
            processing={processing}
            defaultSelected={true}
            data={data}
            {...{ mainRegister, mainErrors, mainSetValue, mainGetValues }}
          />
        )
      }
      {
        showTab && showTab === '3' && (
          <LocalChalazionForm
            pdfData={pdfData}
            publicRuntimeConfig={publicRuntimeConfig}
            processing={processing}
            defaultSelected={true}
            data={data}
            {...{ mainRegister, mainErrors, mainSetValue, mainGetValues }}
          />
        )
      }
      {
        showTab && showTab === '4' && (
          <LocalPterygiumForm
            pdfData={pdfData}
            publicRuntimeConfig={publicRuntimeConfig}
            processing={processing}
            defaultSelected={true}
            data={data}
            {...{ mainRegister, mainErrors, mainSetValue, mainGetValues }}
          />
        )
      }
      {
        showTab && showTab === '5' && (
          <LocalCustomForm
            pdfData={pdfData}
            publicRuntimeConfig={publicRuntimeConfig}
            processing={processing}
            defaultSelected={true}
            data={data}
            {...{ mainRegister, mainErrors, mainSetValue, mainGetValues }}
          />
        )
      }
      {
        showTab && showTab === '6' && (
          <GeneralPhacoForm
            pdfData={pdfData}
            publicRuntimeConfig={publicRuntimeConfig}
            processing={processing}
            defaultSelected={true}
            data={data}
            {...{ mainRegister, mainErrors, mainSetValue, mainGetValues }}
          />
        )
      }
      {
        showTab && showTab === '7' && (
          <GeneralCustomForm
            pdfData={pdfData}
            publicRuntimeConfig={publicRuntimeConfig}
            processing={processing}
            defaultSelected={true}
            data={data}
            {...{ mainRegister, mainErrors, mainSetValue, mainGetValues }}
          />
        )
      }
      {
        showTab && showTab === '8' && (
          <GeneralChalazionForm
            pdfData={pdfData}
            publicRuntimeConfig={publicRuntimeConfig}
            processing={processing}
            defaultSelected={true}
            data={data}
            {...{ mainRegister, mainErrors, mainSetValue, mainGetValues }}
          />
        )
      }
      {
        showTab && showTab === '9' && (
          <LocalHordeolumForm
            pdfData={pdfData}
            publicRuntimeConfig={publicRuntimeConfig}
            processing={processing}
            defaultSelected={true}
            data={data}
            {...{ mainRegister, mainErrors, mainSetValue, mainGetValues }}
          />
        )
      }
      {
        showTab && showTab === '10' && (
          <GeneralHordeolumForm
            pdfData={pdfData}
            publicRuntimeConfig={publicRuntimeConfig}
            processing={processing}
            defaultSelected={true}
            data={data}
            {...{ mainRegister, mainErrors, mainSetValue, mainGetValues }}
          />
        )
      }
      {
        showTab && showTab !== '' && (
          <>
            <Row className="mt-2">
              <Col>
                <Signature
                  label="Dokter"
                  additionalLabel={data && data.form && data.form.Nama_Dokter ? data.form.Nama_Dokter : ''}
                  type="picker"
                  initialImage={(data && data.form && data.form.TTD_Dokter && data.form.TTD_Dokter !== '' && !data.form.TTD_Dokter.includes('null')) ? data.form.TTD_Dokter : undefined}
                  defaultPerson={(userData && userData.id) ? userData.id : ''}
                  persons={doctors}
                  unit="dokter"
                  onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                    if (isFormDoctor) {
                      handleDoctorSigned(assigner, isFormDoctor)
                    }
                    if (!isFormDoctor) {
                      handleDoctorSigned(assigner)
                    }
                  }} />
                <Input
                  id="ttd-dokter"
                  type="hidden"
                  name="ttd-dokter"
                  innerRef={mainRegister()}
                  invalid={errors["ttd-dokter"] && true} />
                <Input
                  id="id-dokter"
                  type="hidden"
                  name="id-dokter"
                  innerRef={mainRegister()}
                  invalid={errors['id-dokter'] && true} />
              </Col>
              <Col>
                <Signature
                  label="Perawat"
                  type="picker"
                  additionalLabel={data && data.form && data.form.Nama_Perawat ? data.form.Nama_Perawat : ''}
                  initialImage={(data && data.form && data.form.TTD_Perawat && data.form.TTD_Perawat !== '') ? data.form.TTD_Perawat : undefined}
                  persons={nurses}
                  onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)} />
                <Input
                  id="ttd-perawat"
                  type="hidden"
                  name="ttd-perawat"
                  innerRef={mainRegister()} />
                <Input
                  id="id-perawat"
                  type="hidden"
                  name="id-perawat"
                  innerRef={mainRegister()} />
              </Col>
            </Row>
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
            
            
            {
              imageErr && imageErr.error && (
                <FormGroup className="form-group mt-0" row>
                  <p style={{ fontSize: '10pt', marginLeft: '560px' }} className='text-danger'>{imageErr.message}</p>
                </FormGroup>
              )
            }
            
            
            <FormGroup className="form-group mt-0" row>
              <div className="d-flex justify-content-center align-items-center">
                <Label className="me-1">Terakhir Disimpan: </Label>
                <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
              </div>
            </FormGroup>
          </>
        )
      }
    </Form>
  )
}

export default SurgeryReportForm;
