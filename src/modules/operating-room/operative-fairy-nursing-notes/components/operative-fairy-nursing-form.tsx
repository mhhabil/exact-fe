import { Button, Card, Col, Form, FormGroup, Input, Label, ListGroup, ListGroupItem, Nav, NavItem, NavLink, Row, TabContent, TabPane, Table } from "reactstrap";
import { useEffect, useState } from "react";
import { AppRequest } from "@src/shared/request";
import LaserUsage from "./laser-usage";
import { NurseModel } from "@src/shared/nurse/models/nurse.model";
// import { OperativeFairyNursingNotesModel } from "../models/operative-fairy-nursing-notes.model";
import { OperativeFairyNursingNotesService } from "../services";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { SubmitButton } from "@src/shared/button";
import TimeOut from "./time-out";
import TypeOperation from "./type-operation";
import { UpdateOperativeFairyNursingNotesRequest } from "../requests";
import {fetchOperativeFairyNursingNotes, fetchOperativeFairyNursingNotesPdf, handlePdf} from "../stores/operative-fairy-nursing-notes.store";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useWarnIfUnsavedChanges } from '@src/shared/alert';
import {FindPdfRequest, IPdfModel} from '@shared/pdf';
import {fetchGeneralConsentPdf} from '@modules/information/general-consent/stores/general-consent.store';
import {PdfOperativeFairyNursingNotesRequest} from '@modules/operating-room/operative-fairy-nursing-notes/requests/pdf-operative-fairy-nursing-notes.request';
import BreathingPatternDisorders from "./diagnosa-intra-operatif/breathing-pattern-disorders";
import DiscomfortDisturbance from "./diagnosa-intra-operatif/discomfort-disturbance";
import { IOperativeFairyNursingNotesModel, OperativeFairyNursingNotesModel } from "../models";
import ImpairedSenseOfComfort from "./diagnosa-pasca-operatif/Impaired sense of comfort";
import RawatPascaOperasi from "./catatan-keperawatan-pasca-operatif/catatan-keperawatan-pasca-operatif";
import { DateTimeConverter } from "@src/shared/datetime-converter";


const OperativeFairyNursingNotesForm = (props: { data: OperativeFairyNursingNotesModel }) => {
  const { data } = props;

  const dispatch = useAppDispatch();
  const { nurses } = useAppSelector(state => state.nurse);

  const [processing, setProcessing] = useState(false);
  const [files, setFiles] = useState<any>([]);
  const [allCheck, setAllCheck] = useState(false);
  const [defaultPattern, setDefaultPattern] = useState<any>();
  const [activeTab, setActiveTab] = useState<string>('1')

  const { treatment } = useAppSelector(state => state.patient);
  const { pdf } = useAppSelector(state => state.operativeFairyNursingNotes);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const [isKotor, setIsKotor] = useState<boolean>(false)

  useEffect(() => {
    if (treatment) {
      dispatch(fetchOperativeFairyNursingNotesPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'ok_catatan-keperawatan-intra-pasca_v3' })));
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

  const getTimeProblem = () => {
    if (data.ck_pasca_operasi && data.ck_pasca_operasi.Aktual && Array.isArray(data.ck_pasca_operasi.Aktual)) {
      return data.ck_pasca_operasi.Aktual.map((item) => {
        return item.Time_Masalah_Aktual ?? '';
      })
    } else {
      return [];
    }
  }

  const getTextProblem = () => {
    if (data.ck_pasca_operasi && data.ck_pasca_operasi.Aktual && Array.isArray(data.ck_pasca_operasi.Aktual)) {
      return data.ck_pasca_operasi.Aktual.map((item) => {
        return item.Masalah_Aktual_Teks ?? '';
      })
    } else {
      return [];
    }
  }

  const getInstructionProblem = () => {
    if (data.ck_pasca_operasi && data.ck_pasca_operasi.Aktual && Array.isArray(data.ck_pasca_operasi.Aktual)) {
      return data.ck_pasca_operasi.Aktual.map((item) => {
        return item.Masalah_Aktual_Instruksi_Teks ?? '';
      })
    } else {
      return [];
    }
  }

  const getActionProblem = () => {
    if (data.ck_pasca_operasi && data.ck_pasca_operasi.Aktual && Array.isArray(data.ck_pasca_operasi.Aktual)) {
      return data.ck_pasca_operasi.Aktual.map((item) => {
        return item.Masalah_Aktual_Tindakan_Teks ?? '';
      })
    } else {
      return [];
    }
  }

  const getActuals = () => {
    if (data.ck_pasca_operasi && data.ck_pasca_operasi.Aktual && Array.isArray(data.ck_pasca_operasi.Aktual)) {
      return data.ck_pasca_operasi.Aktual.map((item) => {
        return {
          time_masalah_aktual: item.Time_Masalah_Aktual ?? '',
          masalah_aktual_teks: item.Masalah_Aktual_Teks ?? '',
          masalah_aktual_intruksi_teks: item.Masalah_Aktual_Instruksi_Teks ?? '',
          masalah_aktual_tindakan_teks: item.Masalah_Aktual_Tindakan_Teks ?? '',
        }
      });
    } else {
      return [];
    }
  }

  const { register, handleSubmit, errors, getValues, setValue, control, reset, formState } = useForm<any>({
    mode: 'onChange',
    resolver: yupResolver(UpdateOperativeFairyNursingNotesRequest.schema()),
    defaultValues: {
      time_out: (data && data.ck_intra_operasi && data.ck_intra_operasi.Time_Out) ? data.ck_intra_operasi.Time_Out : '',
      time_out_time: (data && data.ck_intra_operasi && data.ck_intra_operasi.Time_Out_Waktu) ? data.ck_intra_operasi.Time_Out_Waktu : '',
      instrument_availability: (data && data.ck_intra_operasi && data.ck_intra_operasi.Ketersediaan_Instrumen) ? data.ck_intra_operasi.Ketersediaan_Instrumen : '',
      availability_instrument_time: (data && data.ck_intra_operasi && data.ck_intra_operasi.Ketersediaan_Instrumen_Waktu) ? data.ck_intra_operasi.Ketersediaan_Instrumen_Waktu : '',
      availability_prothesis: (data && data.ck_intra_operasi && data.ck_intra_operasi.Ketersediaan_Prothese) ? data.ck_intra_operasi.Ketersediaan_Prothese : '',
      availability_prothesis_time: (data && data.ck_intra_operasi && data.ck_intra_operasi.Ketersediaan_Prothese_Waktu) ? data.ck_intra_operasi.Ketersediaan_Prothese_Waktu : '',
      start_time:(data && data.ck_intra_operasi && data.ck_intra_operasi.Mulai_Waktu) ? data.ck_intra_operasi.Mulai_Waktu : '',
      // finished_time:(data && data.ck_intra_operasi.Selesai_Waktu) ? data.ck_intra_operasi.Selesai_Waktu : '',
      finished_time: data?.ck_intra_operasi?.Selesai_Waktu ?? '',
      operation_jenis: data?.ck_intra_operasi?.Jenis_Operasi ?? '',
      operation_type: (data && data.ck_intra_operasi && data.ck_intra_operasi.Tipe_Operasi) ? data.ck_intra_operasi.Tipe_Operasi : '',
      anesthetic_type: (data && data.ck_intra_operasi && data.ck_intra_operasi.Tipe_Pembiusan) ? data.ck_intra_operasi.Tipe_Pembiusan : '',
      // level_consciousness: (data && data.ck_intra_operasi.Tingkat_Kesadaran) ? data.ck_intra_operasi.Tingkat_Kesadaran : '',
      level_consciousness: data?.ck_intra_operasi?.Tingkat_Kesadaran ?? '',
      other_awareness_level_text: data?.ck_intra_operasi?.Tingkat_Kesadaran_Lain_Teks ?? '',
      state_emotion: data?.ck_intra_operasi?.Status_Emosi ?? '',
      cannula_position: data?.ck_intra_operasi?.Posisi_Kanula ?? '',
      cannula_position_1: data?.ck_intra_operasi?.Posisi_Kanula_1 ?? '',
      cannula_position_2: data?.ck_intra_operasi?.Posisi_Kanula_2 ?? '',
      cannula_position_3: data?.ck_intra_operasi?.Posisi_Kanula_3 ?? '',
      cannula_position_4: data?.ck_intra_operasi?.Posisi_Kanula_4 ?? '',
      cannula_position_5: data?.ck_intra_operasi?.Posisi_Kanula_5 ?? '',
      cannula_position_6: data?.ck_intra_operasi?.Posisi_Kanula_6 ?? '',
      cannula_position_7: data?.ck_intra_operasi?.Posisi_Kanula_7 ?? '',
      cannula_position_8: data?.ck_intra_operasi?.Posisi_Kanula_8 ?? '',
      position_cannula_other_text: data?.ck_intra_operasi?.Posisi_Kanula_Lain_Teks ?? '',
      operating_position: data?.ck_intra_operasi?.Posisi_Operasi ?? '',
      operating_position_1: data?.ck_intra_operasi?.Posisi_Operasi_1 ?? '',
      operating_position_2: data?.ck_intra_operasi?.Posisi_Operasi_2 ?? '',
      operating_position_3: data?.ck_intra_operasi?.Posisi_Operasi_3 ?? '',
      operating_position_4: data?.ck_intra_operasi?.Posisi_Operasi_4 ?? '',
      operating_position_5: data?.ck_intra_operasi?.Posisi_Operasi_5 ?? '',
      position_operation_other_text: data?.ck_intra_operasi?.Posisi_Operasi_Lain_Teks ?? '',
      id_position_operating_supervised: (data && data.ck_intra_operasi && data.ck_intra_operasi.ID_Posisi_Operasi_Diawasi) ? data.ck_intra_operasi.ID_Posisi_Operasi_Diawasi : '',
      arm_position: data?.ck_intra_operasi?.Posisi_Lengan ?? '',
      arm_position_1: data?.ck_intra_operasi?.Posisi_Lengan_1 ?? '',
      arm_position_2: data?.ck_intra_operasi?.Posisi_Lengan_2 ?? '',
      arm_position_3: data?.ck_intra_operasi?.Posisi_Lengan_3 ?? '',
      arm_position_4: data?.ck_intra_operasi?.Posisi_Lengan_4 ?? '',
      arm_position_5: data?.ck_intra_operasi?.Posisi_Lengan_5 ?? '',
      other_arm_position_text: data?.ck_intra_operasi?.Posisi_Lengan_Lain_Teks ?? '',
      position_tool: data?.ck_intra_operasi?.Posisi_Alat ?? '',
      position_other_text_tools: data?.ck_intra_operasi?.Posisi_Alat_Lain_Teks ?? '',
      catheter_urine: data?.ck_intra_operasi?.Kateter_Urine ?? '',
      skin_prep: data?.ck_intra_operasi?.Persiapan_Kulit ?? '',
      other_skin_prep_text: data?.ck_intra_operasi?.Persiapan_Kulit_Lain_Teks ?? '',
      discharging_diathermy: data?.ck_intra_operasi?.Pemakaian_Diathermy ?? '',
      discharging_diathermy_1: data?.ck_intra_operasi?.Pemakaian_Diathermy_1 ?? '',
      discharging_diathermy_2: data?.ck_intra_operasi?.Pemakaian_Diathermy_2 ?? '',
      discharging_diathermy_3: data?.ck_intra_operasi?.Pemakaian_Diathermy_3 ?? '',
      location_electrode: data?.ck_intra_operasi?.Lokasi_Elektrode ?? '',
      location_electrode_1: data?.ck_intra_operasi?.Lokasi_Elektrode_1 ?? '',
      location_electrode_2: data?.ck_intra_operasi?.Lokasi_Elektrode_2 ?? '',
      location_electrode_3: data?.ck_intra_operasi?.Lokasi_Elektrode_3 ?? '',
      location_electrode_4: data?.ck_intra_operasi?.Lokasi_Elektrode_4 ?? '',
      location_electrode_5: data?.ck_intra_operasi?.Lokasi_Elektrode_5 ?? '',
      other_electrode_location_text: data?.ck_intra_operasi?.Lokasi_Elektrode_Lain_Teks ?? '',
      condition_before: data?.ck_intra_operasi?.Kondisi_Sebelum ?? '',
      condition_before_1: data?.ck_intra_operasi?.Kondisi_Sebelum_1 ?? '',
      condition_before_2: data?.ck_intra_operasi?.Kondisi_Sebelum_2 ?? '',
      condition_before_3: data?.ck_intra_operasi?.Kondisi_Sebelum_3 ?? '',
      condition_before_other_text: data?.ck_intra_operasi?.Kondisi_Sebelum_Lain_Teks ?? '',
      after_condition: data?.ck_intra_operasi?.Kondisi_Sesudah ?? '',
      after_condition_1: data?.ck_intra_operasi?.Kondisi_Sesudah_1 ?? '',
      after_condition_2: data?.ck_intra_operasi?.Kondisi_Sesudah_2 ?? '',
      after_condition_3: data?.ck_intra_operasi?.Kondisi_Sesudah_3 ?? '',
      condition_after_other_text: data?.ck_intra_operasi?.Kondisi_Sesudah_Lain_Teks ?? '',
      code_electrosurgical_unit: data?.ck_intra_operasi?.Kode_Unit_Elektrosurgikal ?? '',
      heating_unit: data?.ck_intra_operasi?.Unit_Pemanas ?? '',
      heater_setting_temperature: data?.ck_intra_operasi?.Pemanas_Pengaturan_Temperatur ?? '',
      heater_start_time: data?.ck_intra_operasi?.Pemanas_Mulai_Waktu ?? '',
      heater_finished_time: data?.ck_intra_operasi?.Pemanas_Selesai_Waktu ?? '',
      heater_code_unit: data?.ck_intra_operasi?.Pemanas_Kode_Unit ?? '',
      unit_cooling: data?.ck_intra_operasi?.Unit_Pendingin ?? '',
      cooler_setting_temperature: data?.ck_intra_operasi?.Pendingin_Pengaturan_Temperatur ?? '',
      cooler_start_time: data?.ck_intra_operasi?.Pendingin_Mulai_Waktu ?? '',
      cooler_finished_time: data?.ck_intra_operasi?.Pendingin_Selesai_Waktu ?? '',
      cooler_code_unit: data?.ck_intra_operasi?.Pendingin_Kode_Unit ?? '',
      laser_use: data?.ck_intra_operasi?.Pemakaian_Laser ?? '',
      laser_power: data?.ck_intra_operasi?.Laser_Power ?? '',
      laser_duration: data?.ck_intra_operasi?.Laser_Durasi ?? '',
      laser_interval: data?.ck_intra_operasi?.Laser_Interval ?? '',
      laser_number_shoot: data?.ck_intra_operasi?.Laser_Jumlah_Tembak ?? '',
      laser_code_model: data?.ck_intra_operasi?.Laser_Kode_Model ?? '',
      laser_date: data?.ck_intra_operasi?.Laser_Tanggal ?? '',
      id_laser_supervised_1: data?.ck_intra_operasi?.ID_Laser_Diawasi_1 ?? '',
      id_laser_supervised_2: data?.ck_intra_operasi?.ID_Laser_Diawasi_2 ?? '',
      id_laser_supervised_3: data?.ck_intra_operasi?.ID_Laser_Diawasi_3 ?? '',
      use_implant: data?.ck_intra_operasi?.Pemakaian_Implant ?? '',
      implant_factory: data?.ck_intra_operasi?.Implant_Pabrik ?? '',
      implant_type: data?.ck_intra_operasi?.Implant_Type ?? '',
      implant_size: data?.ck_intra_operasi?.Implant_Size ?? '',
      implant_seri: data?.ck_intra_operasi?.Implant_Seri ?? '',
      url_image_sticker: data?.ck_intra_operasi?.Url_Image_Stiker ?? '',
      name_image_sticker: data?.ck_intra_operasi?.Name_Image_Stiker ?? '',
      type_image_sticker: data?.ck_intra_operasi?.Type_Image_Stiker ?? '',
      size_image_sticker: data?.ck_intra_operasi?.Size_Image_Stiker ?? '',
      irrigation_wound: data?.ck_intra_operasi?.Irigasi_Luka ?? '',
      irrigation_wound_other_text: data?.ck_intra_operasi?.Irigasi_Luka_Lain_Teks ?? '',
      use_liquid_water_text: data?.ck_intra_operasi?.Pemakaian_Cairan_Air_Teks ?? '',
      use_other_liquid_text: data?.ck_intra_operasi?.Pemakaian_Cairan_Lain_Teks ?? '',
      discharging_fluid: data?.ck_intra_operasi?.Pemakaian_Cairan ?? '',
      use_liquid_sodium_text: data?.ck_intra_operasi?.Pemakaian_Cairan_Sodium_Teks ?? '',
      balutan_cairan: data?.ck_intra_operasi?.Balutan_Cairan ?? '',
      spesimen_cairan: data?.ck_intra_operasi?.Spesimen_Cairan ?? '',
      use_fluid_histology_text: data?.ck_intra_operasi?.Pemakaian_Cairan_Histologi_Teks ?? '',
      use_fluid_cytology_text: data?.ck_intra_operasi?.Pemakaian_Cairan_Sitologi_Teks ?? '',
      use_fluid_culture_text: data?.ck_intra_operasi?.Pemakaian_Cairan_Kultur_Teks ?? '',
      specimen_liquid_examination: data?.ck_intra_operasi?.Spesimen_Cairan_Pemeriksaan ?? '',
      specimen_type_tissue: data?.ck_intra_operasi?.Spesimen_Jenis_Jaringan ?? '',
      specimen_number_tissue: data?.ck_intra_operasi?.Spesimen_Jumlah_Jaringan ?? '',
      specimen_description: data?.ck_intra_operasi?.Spesimen_Keterangan ?? '',
      signed_nurse_instruments: data?.ck_intra_operasi?.TTD_Perawat_Instrumen ?? '',
      id_nurse_instrument: data?.ck_intra_operasi?.ID_Perawat_Instrumen ?? '',
      signed_nurse_circular: data?.ck_intra_operasi?.TTD_Perawat_Sirkuler ?? '',
      id_nurse_circular: data?.ck_intra_operasi?.ID_Perawat_Sirkuler ?? '',
      jenis_balutan: data?.ck_intra_operasi?.Jenis_Balutan ?? '',
      jenis_spesimen: data?.ck_intra_operasi?.Jenis_Spesimen ?? '',
      lain_spesimen: data?.ck_intra_operasi?.Lain_Spesimen ?? '',
      tanggal_kadaluarsa: data?.ck_intra_operasi?.Tanggal_Kadaluarsa ?? '',

      // Diagnosa Intra Operatif
      // gangguan_pola_nafas_diagnosa_neuromuskular: data?.intra_operatif?.Gangguan_Pola_Nafas_Diagnosa_Neuromuskular ?? '',
      gangguan_pola_nafas_diagnosa_neuromuskular: data?.intra_operatif?.Gangguan_Pola_Nafas_Diagnosa_Neuromuskular === 1 ? '1' : data?.intra_operatif?.Gangguan_Pola_Nafas_Diagnosa_Neuromuskular === 0 ? '0' : '',
      gangguan_pola_nafas_diagnosa_sekret: data?.intra_operatif?.Gangguan_Pola_Nafas_Diagnosa_Sekret ?? '',
      gangguan_pola_nafas_intervensi_miringkan_kepala: data?.intra_operatif?.Gangguan_Pola_Nafas_Intervensi_Miringkan_Kepala ?? '',
      gangguan_pola_nafas_intervensi_rahang: data?.intra_operatif?.Gangguan_Pola_Nafas_Intervensi_Rahang ?? '',
      gangguan_pola_nafas_intervensi_observasi: data?.intra_operatif?.Gangguan_Pola_Nafas_Intervensi_Observasi ?? '',
      gangguan_pola_nafas_intervensi_ttv: data?.intra_operatif?.Gangguan_Pola_Nafas_Intervensi_TTV ?? '',
      gangguan_pola_nafas_intervensi_suction: data?.intra_operatif?.Gangguan_Pola_Nafas_Intervensi_Suction ?? '',
      gangguan_pola_nafas_intervensi_o2: data?.intra_operatif?.Gangguan_Pola_Nafas_Intervensi_O2 ?? '',
      gangguan_pola_nafas_intervensi_obat: data?.intra_operatif?.Gangguan_Pola_Nafas_Intervensi_Obat ?? '',
      gangguan_pola_nafas_evaluasi_ttv: data?.intra_operatif?.Gangguan_Pola_Nafas_Evaluasi_TTV ?? '',
      gangguan_pola_nafas_evaluasi_nafas_spontan: data?.intra_operatif?.Gangguan_Pola_Nafas_Evaluasi_Nafas_Spontan ?? '',
      gangguan_pola_nafas_evaluasi_sianosis: data?.intra_operatif?.Gangguan_Pola_Nafas_Evaluasi_Sianosis ?? '',
      gangguan_pola_nafas_evaluasi_o2: data?.intra_operatif?.Gangguan_Pola_Nafas_Evaluasi_O2 ?? '',
      gangguan_pola_nafas_evaluasi_o2_teks: data?.intra_operatif?.Gangguan_Pola_Nafas_Evaluasi_O2_Teks ?? '',
      gangguan_pola_nafas_evaluasi_observasi: data?.intra_operatif?.Gangguan_Pola_Nafas_Evaluasi_Observasi ?? '',
      ttd_perawat_gangguan_pola_nafas: data?.intra_operatif?.TTD_Perawat_Gangguan_Pola_Nafas ?? '',
      id_perawat_gangguan_pola_nafas: data?.intra_operatif?.ID_Perawat_Gangguan_Pola_Nafas ?? '',
      tanggal_perawat_gangguan_pola_nafas: data?.intra_operatif?.Tanggal_Perawat_Gangguan_Pola_Nafas ?? '',
      kekurangan_cairan_diagnosa_intake: data?.intra_operatif?.Kekurangan_Cairan_Diagnosa_Intake ?? '',
      kekurangan_cairan_diagnosa_abnormal: data?.intra_operatif?.Kekurangan_Cairan_Diagnosa_Abnormal ?? '',
      kekurangan_cairan_diagnosa_integritas: data?.intra_operatif?.Kekurangan_Cairan_Diagnosa_Integritas ?? '',
      kekurangan_cairan_diagnosa_puasa: data?.intra_operatif?.Kekurangan_Cairan_Diagnosa_Puasa ?? '',
      kekurangan_cairan_intervensi_ukur: data?.intra_operatif?.Kekurangan_Cairan_Intervensi_Ukur ?? '',
      kekurangan_cairan_intervensi_ttv: data?.intra_operatif?.Kekurangan_Cairan_Intervensi_TTV ?? '',
      kekurangan_cairan_intervensi_mual_muntah: data?.intra_operatif?.Kekurangan_Cairan_Intervensi_Mual_Muntah ?? '',
      kekurangan_cairan_intervensi_pembalut_luka: data?.intra_operatif?.Kekurangan_Cairan_Intervensi_Pembalut_Luka ?? '',
      kekurangan_cairan_intervensi_suhu_tubuh: data?.intra_operatif?.Kekurangan_Cairan_Intervensi_Suhu_Tubuh ?? '',
      kekurangan_cairan_evaluasi_ttv: data?.intra_operatif?.Kekurangan_Cairan_Evaluasi_TTV ?? '',
      kekurangan_cairan_evaluasi_input: data?.intra_operatif?.Kekurangan_Cairan_Evaluasi_Input ?? '',
      kekurangan_cairan_evaluasi_input_teks: data?.intra_operatif?.Kekurangan_Cairan_Evaluasi_Input_Teks ?? '',
      kekurangan_cairan_evaluasi_output: data?.intra_operatif?.Kekurangan_Cairan_Evaluasi_Output ?? '',
      kekurangan_cairan_evaluasi_output_teks: data?.intra_operatif?.Kekurangan_Cairan_Evaluasi_Output_Teks ?? '',
      kekurangan_cairan_evaluasi_mukosa: data?.intra_operatif?.Kekurangan_Cairan_Evaluasi_Mukosa ?? '',
      kekurangan_cairan_evaluasi_turgor: data?.intra_operatif?.Kekurangan_Cairan_Evaluasi_Turgor ?? '',
      ttd_perawat_kekurangan_cairan: data?.intra_operatif?.TTD_Perawat_Kekurangan_Cairan ?? '',
      id_perawat_kekurangan_cairan: data?.intra_operatif?.ID_Perawat_Kekurangan_Cairan ?? '',
      tanggal_perawat_kekurangan_cairan: data?.intra_operatif?.Tanggal_Perawat_Kekurangan_Cairan ?? '',
      tinggi_cedera_diagnosa_pemajanan: data?.intra_operatif?.Tinggi_Cedera_Diagnosa_Pemajanan  ?? '',
      tinggi_cedera_diagnosa_hipoksia: data?.intra_operatif?.Tinggi_Cedera_Diagnosa_Hipoksia ?? '',
      tinggi_cedera_intervensi_lepas_gigi: data?.intra_operatif?.Tinggi_Cedera_Intervensi_Lepas_Gigi ?? '',
      tinggi_cedera_intervensi_periksa_identitas: data?.intra_operatif?.Tinggi_Cedera_Intervensi_Periksa_Identitas ?? '',
      tinggi_cedera_intervensi_terkunci: data?.intra_operatif?.Tinggi_Cedera_Intervensi_Terkunci ?? '',
      tinggi_cedera_intervensi_sabuk_pengaman: data?.intra_operatif?.Tinggi_Cedera_Intervensi_Sabuk_Pengaman ?? '',
      tinggi_cedera_intervensi_posisi: data?.intra_operatif?.Tinggi_Cedera_Intervensi_Posisi ?? '',
      tinggi_cedera_intervensi_elektrikal: data?.intra_operatif?.Tinggi_Cedera_Intervensi_Elektrikal ?? '',
      tinggi_cedera_intervensi_plate_diatermi: data?.intra_operatif?.Tinggi_Cedera_Intervensi_Plate_Diatermi ?? '',
      tinggi_cedera_intervensi_cairan:  data?.intra_operatif?.Tinggi_Cedera_Intervensi_Elektrikal ?? '',
      tinggi_cedera_intervensi_jumlah_pemakaian: data?.intra_operatif?.Tinggi_Cedera_Intervensi_Jumlah_Pemakaian ?? '',
      tinggi_cedera_evaluasi_posisi: data?.intra_operatif?.Tinggi_Cedera_Evaluasi_Posisi ?? '',
      tinggi_cedera_evaluasi_prosedur: data?.intra_operatif?.Tinggi_Cedera_Evaluasi_Prosedur ?? '',
      tinggi_cedera_evaluasi_jumlah: data?.intra_operatif?.Tinggi_Cedera_Evaluasi_Jumlah ?? '',
      ttd_perawat_tinggi_cedera: data?.intra_operatif?.TTD_Perawat_Tinggi_Cedera ?? '',
      id_perawat_tinggi_cedera: data?.intra_operatif?.ID_Perawat_Tinggi_Cedera ?? '',
      tanggal_perawat_tinggi_cedera: data?.intra_operatif?.Tanggal_Perawat_Tinggi_Cedera ?? '',
      infeksi_diagnosa_trauma: data?.intra_operatif?.Infeksi_Diagnosa_Trauma ?? '',
      infeksi_diagnosa_lingkungan: data?.intra_operatif?.Infeksi_Diagnosa_Lingkungan ?? '',
      infeksi_diagnosa_peralatan: data?.intra_operatif?.Infeksi_Diagnosa_Peralatan ?? '',
      infeksi_intervensi_cuci_tangan: data?.intra_operatif?.Infeksi_Intervensi_Cuci_Tangan ?? '',
      infeksi_intervensi_disinfeksi: data?.intra_operatif?.Infeksi_Intervensi_Disinfeksi ?? '',
      infeksi_intervensi_kadaluarsa: data?.intra_operatif?.Infeksi_Intervensi_Kadaluarsa ?? '',
      infeksi_intervensi_sterilitas: data?.intra_operatif?.Infeksi_Intervensi_Sterilitas ??  '',
      infeksi_intervensi_penutup: data?.intra_operatif?.Infeksi_Intervensi_Penutup ?? '',
      infeksi_evaluasi_pertahankan: data?.intra_operatif?.Infeksi_Evaluasi_Pertahankan ?? '',
      ttd_perawat_infeksi: data?.intra_operatif?.TTD_Perawat_Infeksi ?? '',
      id_perawat_infeksi: data?.intra_operatif?.ID_Perawat_Infeksi ?? '',
      tanggal_perawat_infeksi: data?.intra_operatif?.Tanggal_Perawat_Infeksi ?? '',
      nyeri_diagnosa_luka: data?.intra_operatif?.Nyeri_Diagnosa_Luka ?? '',
      nyeri_diagnosa_pemasangan_alat: data?.intra_operatif?.Nyeri_Diagnosa_Pemasangan_Alat ?? '',
      nyeri_intervensi_skala_nyeri: data?.intra_operatif?.Nyeri_Intervensi_Skala_Nyeri ?? '',
      nyeri_intervensi_teknik_relaksasi: data?.intra_operatif?.Nyeri_Intervensi_Teknik_Relaksasi ?? '',
      nyeri_intervensi_posisi_nyaman: data?.intra_operatif?.Nyeri_Intervensi_Posisi_Nyaman ?? '',
      nyeri_intervensi_teknik_distraksi: data?.intra_operatif?.Nyeri_Intervensi_Teknik_Distraksi ?? '',
      nyeri_intervensi_kolaborasi: data?.intra_operatif?.Nyeri_Intervensi_Kolaborasi ?? '',
      nyeri_evaluasi_berkurang: data?.intra_operatif?.Nyeri_Evaluasi_Berkurang ?? '',
      nyeri_evaluasi_teknik: data?.intra_operatif?.Nyeri_Evaluasi_Teknik ?? '',
      ttd_perawat_nyeri: data?.intra_operatif?.TTD_Perawat_Nyeri ?? '',
      id_perawat_nyeri: data?.intra_operatif?.ID_Perawat_Nyeri ?? '',
      tanggal_perawat_nyeri: data?.intra_operatif?.Tanggal_Perawat_Nyeri ?? '',
      penglihatan_diagnosa_penurunan: data?.intra_operatif?.Penglihatan_Diagnosa_Penurunan ?? '',
      penglihatan_diagnosa_perlindungan: data?.intra_operatif?.Penglihatan_Diagnosa_Perlindungan ?? '',
      penglihatan_intervensi_ketajaman: data?.intra_operatif?.Penglihatan_Intervensi_Ketajaman ?? '',
      penglihatan_intervensi_orientasi: data?.intra_operatif?.Penglihatan_Intervensi_Orientasi ?? '',
      penglihatan_intervensi_alternative: data?.intra_operatif?.Penglihatan_Intervensi_Alternative ?? '',
      penglihatan_intervensi_cegah_sinar: data?.intra_operatif?.Penglihatan_Intervensi_Cegah_Sinar ?? '',
      penglihatan_intervensi_optimal_lingkungan: data?.intra_operatif?.Penglihatan_Intervensi_Optimal_Lingkungan ?? '',
      penglihatan_evaluasi_kemampuan: data?.intra_operatif?.Penglihatan_Evaluasi_Kemampuan ?? '',
      penglihatan_evaluasi_perubahan: data?.intra_operatif?.Penglihatan_Evaluasi_Perubahan ?? '',
      ttd_perawat_penglihatan: data?.intra_operatif?.TTD_Perawat_Penglihatan ?? '',
      id_perawat_penglihatan: data?.intra_operatif?.ID_Perawat_Penglihatan ?? '',
      tanggal_perawat_penglihatan: data?.intra_operatif?.Tanggal_Perawat_Penglihatan ?? '',
      kecemasan_diagnosa_prosedur: data?.intra_operatif?.Kecemasan_Diagnosa_Prosedur ?? '',
      kecemasan_diagnosa_kurang_pengetahuan: data?.intra_operatif?.Kecemasan_Diagnosa_Kurang_Pengetahuan ?? '',
      kecemasan_intervensi_gambaran: data?.intra_operatif?.Kecemasan_Intervensi_Gambaran ?? '',
      kecemasan_intervensi_beri_waktu: data?.intra_operatif?.Kecemasan_Intervensi_Beri_Waktu ?? '',
      kecemasan_intervensi_informasi: data?.intra_operatif?.Kecemasan_Intervensi_Informasi ?? '',
      kecemasan_intervensi_kesempatan: data?.intra_operatif?.Kecemasan_Intervensi_Kesempatan ?? '',
      kecemasan_evaluasi_berkurang: data?.intra_operatif?.Kecemasan_Evaluasi_Berkurang ?? '',
      kecemasan_evaluasi_tenang: data?.intra_operatif?.Kecemasan_Evaluasi_Tenang ?? '',
      ttd_perawat_kecemasan: data?.intra_operatif?.TTD_Perawat_Kecemasan ?? '',
      id_perawat_kecemasan: data?.intra_operatif?.ID_Perawat_Kecemasan ?? '',
      tanggal_perawat_kecemasan: data?.intra_operatif?.Tanggal_Perawat_Kecemasan ?? '',

      // Diagnosa Pasca Operatif
      nyeri_diagnosa_luka_pasca: data?.pasca_operatif?.Nyeri_Diagnosa_Luka ?? '',
      nyeri_diagnosa_gaangguan_kulit: data?.pasca_operatif?.Nyeri_Diagnosa_Gaangguan_Kulit ??  '',
      nyeri_intervensi_kaji_lokasi: data?.pasca_operatif?.Nyeri_Intervensi_Kaji_Lokasi ?? '',
      nyeri_intervensi_kaji_ttv: data?.pasca_operatif?.Nyeri_Intervensi_Kaji_Ttv ?? '',
      nyeri_intervensi_teknik_relaksaksi: data?.pasca_operatif?.Nyeri_Intervensi_Teknik_Relaksaksi ?? '',
      nyeri_intervensi_posisi_nyaman_pasca: data?.pasca_operatif?.Nyeri_Intervensi_Posisi_Nyaman ?? '',
      nyeri_intervensi_teknik_distraksi_pasca: data?.pasca_operatif?.Nyeri_Intervensi_Teknik_Distraksi ?? '',
      nyeri_intervensi_pemeberian_analgesi: data?.pasca_operatif?.Nyeri_Intervensi_Pemeberian_Analgesi ?? '',
      nyeri_evaluasi_ttv: data?.pasca_operatif?.Nyeri_Evaluasi_Ttv ?? '',
      nyeri_evaluasi_nyeri_terkontrol: data?.pasca_operatif?.Nyeri_Evaluasi_Nyeri_Terkontrol ?? '',
      nyeri_evaluasi_nyeri_berkurang: data?.pasca_operatif?.Nyeri_Evaluasi_Nyeri_Berkurang ?? '',
      nyeri_evaluasi_diobservasi: data?.pasca_operatif?.Nyeri_Evaluasi_Diobservasi ?? '',
      ttd_perawat_nyeri_pasca: data?.pasca_operatif?.TTD_Perawat_Nyeri ?? '',
      id_perawat_nyeri_pasca: data?.pasca_operatif?.ID_Perawat_Nyeri ?? '',
      tanggal_perawat_nyeri_pasca: data?.pasca_operatif?.Tanggal_Perawat_Nyeri ?? '',
      infeksi_diagnosa_trauma_pasca: data?.pasca_operatif?.Infeksi_Diagnosa_Trauma ?? '',
      infeksi_diagnosa_lingkungan_pasca: data?.pasca_operatif?.Infeksi_Diagnosa_Lingkungan ?? '',
      infeksi_diagnosa_peralatan_pasca: data?.pasca_operatif?.Infeksi_Diagnosa_Peralatan ?? '',
      infeksi_intervensi_cuci_tangan_pasca: data?.pasca_operatif?.Infeksi_Intervensi_Cuci_Tangan ?? '',
      infeksi_intervensi_disinfeksi_pasca: data?.pasca_operatif?.Infeksi_Intervensi_Disinfeksi ?? '',
      infeksi_intervensi_kadaluarsa_pasca: data?.pasca_operatif?.Infeksi_Intervensi_Kadaluarsa ?? '',
      infeksi_intervensi_sterilitas_pasca: data?.pasca_operatif?.Infeksi_Intervensi_Sterilitas ?? '',
      infeksi_intervensi_penutup_pasca: data?.pasca_operatif?.Infeksi_Intervensi_Penutup ?? '',
      infeksi_evaluasi_pertahankan_pasca: data?.pasca_operatif?.Infeksi_Evaluasi_Pertahankan ?? '',
      ttd_perawat_infeksi_pasca: data?.pasca_operatif?.TTD_Perawat_Infeksi ?? '',
      id_perawat_infeksi_pasca: data?.pasca_operatif?.ID_Perawat_Infeksi ?? '',
      tanggal_perawat_infeksi_pasca: data?.pasca_operatif?.Tanggal_Perawat_Infeksi ?? '',
      perubahan_diagnosa_suhu: data?.pasca_operatif?.Perubahan_Diagnosa_Suhu ?? '',
      perubahan_diagnosa_obat: data?.pasca_operatif?.Perubahan_Diagnosa_Obat ?? '',
      perubahan_diagnosa_dehidrasi: data?.pasca_operatif?.Perubahan_Diagnosa_Dehidrasi ?? '',
      perubahan_intervensi_catatan_suhu: data?.pasca_operatif?.Perubahan_Intervensi_Catatan_Suhu ?? '',
      perubahan_intervensi_kaji_suhu: data?.pasca_operatif?.Perubahan_Intervensi_Kaji_Suhu ?? '',
      perubahan_intervensi_kolaborasi: data?.pasca_operatif?.Perubahan_Intervensi_Kolaborasi ?? '',
      perubahan_evaluasi_pasien_dingin: data?.pasca_operatif?.Perubahan_Evaluasi_Pasien_Dingin ?? '',
      perubahan_evaluasi_pasien_menggigil: data?.pasca_operatif?.Perubahan_Evaluasi_Pasien_Menggigil ?? '',
      perubahan_evaluasi_suhu_ruangan: data?.pasca_operatif?.Perubahan_Evaluasi_Suhu_Ruangan ?? '',
      evaluasi_suhu_ruangan_teks: data?.pasca_operatif?.Evaluasi_Suhu_Ruangan_Teks ??  '',
      ttd_perawat_perubahan: data?.pasca_operatif?.TTD_Perawat_Perubahan ?? '',
      id_perawat_perubahan: data?.pasca_operatif?.ID_Perawat_Perubahan ?? '',
      tanggal_perawat_perubahan: data?.pasca_operatif?.Tanggal_Perawat_Perubahan ?? '',
      kecemasan_pasca_operatif_diagnosa_perawatan_luka: data?.pasca_operatif?.Kecemasan_Pasca_Operatif_Diagnosa_Perawatan_Luka ?? '',
      kecemasan_pasca_operatif_intervensi_gambar_luka: data?.pasca_operatif?.Kecemasan_Pasca_Operatif_Intervensi_Gambar_Luka ?? '',
      kecemasan_pasca_operatif_intervensi_waktu_perasaan: data?.pasca_operatif?.Kecemasan_Pasca_Operatif_Intervensi_Waktu_Perasaan ?? '',
      kecemasan_pasca_operatif_intervensi_beri_informasi: data?.pasca_operatif?.Kecemasan_Pasca_Operatif_Intervensi_Beri_Informasi ?? '',
      kecemasan_pasca_operatif_intervensi_perbaikan_pengelihatan:  data?.pasca_operatif?.Kecemasan_Pasca_Operatif_Intervensi_Perbaikan_Pengelihatan ?? '',
      kecemasan_pasca_operatif_intervensi_perasaan_klien: data?.pasca_operatif?.Kecemasan_Pasca_Operatif_Intervensi_Perasaan_Klien ?? '',
      kecemasan_pasca_operatif_intervensi_kesempatan_bertanya: data?.pasca_operatif?.Kecemasan_Pasca_Operatif_Intervensi_Kesempatan_Bertanya ?? '',
      kecemasan_pasca_operatif_intervensi_nomor_pasien: data?.pasca_operatif?.Kecemasan_Pasca_Operatif_Intervensi_Nomor_Pasien ?? '',
      kecemasan_pasca_operatif_evaluasi_kecemasan: data?.pasca_operatif?.Kecemasan_Pasca_Operatif_Evaluasi_Kecemasan ?? '',
      kecemasan_pasca_operatif_evaluasi_tenang_selama: data?.pasca_operatif?.Kecemasan_Pasca_Operatif_Evaluasi_Tenang_Selama ?? '',
      ttd_perawat_kecemasan_pasca: data?.pasca_operatif?.TTD_Perawat_Kecemasan_Pasca ?? '',
      id_perawat_kecemasan_pasca: data?.pasca_operatif?.ID_Perawat_Kecemasan_Pasca ??  '',
      tanggal_perawat_kecemasan_pasca:  data?.pasca_operatif?.Tanggal_Perawat_Kecemasan ?? '',

      // Catatan Keperawatan Pasca Operasi
      rawat_pasca: data?.ck_pasca_operasi?.Rawat_Pasca ?? '',
      transport: data?.ck_pasca_operasi?.Transport ?? '',
      time_out_waktu_ckpo:  data?.ck_pasca_operasi?.Time_Out_Waktu ?? '',
      keadaan_umum: data?.ck_pasca_operasi?.Keadaan_Umum ?? '',
      tingkat_kesadaran_ckpo: data?.ck_pasca_operasi?.Tingkat_Kesadaran ?? '',
      jalan_nafas: data?.ck_pasca_operasi?.Jalan_Nafas ?? '',
      pernafasan: data?.ck_pasca_operasi?.Pernafasan ?? '',
      terapi_oksigen: data?.ck_pasca_operasi?.Terapi_Oksigen ?? '',
      terapi_oksigen_lain_teks: data?.ck_pasca_operasi?.Terapi_Oksigen_Lain_Teks ?? '',
      kulit_datang_kering: data?.ck_pasca_operasi?.Kulit_Datang_Kering ?? '',
      kulit_datang_lembab: data?.ck_pasca_operasi?.Kulit_Datang_Lembab ?? '',
      kulit_datang_merah_muda: data?.ck_pasca_operasi?.Kulit_Datang_Merah_Muda ?? '',
      kulit_datang_biru: data?.ck_pasca_operasi?.Kulit_Datang_Biru ?? '',
      kulit_datang_hangat: data?.ck_pasca_operasi?.Kulit_Datang_Hangat ?? '',
      kulit_datang_dingin: data?.ck_pasca_operasi?.Kulit_Datang_Dingin ?? '',
      kulit_datang_lain: data?.ck_pasca_operasi?.Kulit_Datang_Lain ?? '',
      kulit_datang_lain_teks: data?.ck_pasca_operasi?.Kulit_Datang_Lain_Teks ?? '',
      kulit_keluar_kering: data?.ck_pasca_operasi?.Kulit_Keluar_Kering ?? '',
      kulit_keluar_lembab: data?.ck_pasca_operasi?.Kulit_Keluar_Lembab ?? '',
      kulit_keluar_merah_muda: data?.ck_pasca_operasi?.Kulit_Keluar_Merah_Muda ?? '',
      kulit_keluar_biru: data?.ck_pasca_operasi?.Kulit_Keluar_Biru ?? '',
      kulit_keluar_hangat: data?.ck_pasca_operasi?.Kulit_Keluar_Hangat ?? '',
      kulit_keluar_dingin: data?.ck_pasca_operasi?.Kulit_Keluar_Dingin ?? '',
      kulit_keluar_lain: data?.ck_pasca_operasi?.Kulit_Keluar_Lain ?? '',
      kulit_keluar_lain_teks: data?.ck_pasca_operasi?.Kulit_Keluar_Lain_Teks ?? '',
      sirkulasi: data?.ck_pasca_operasi?.Sirkulasi ?? '',
      posisi_pasien: data?.ck_pasca_operasi?.Posisi_Pasien ?? '',
      posisi_pasien_lain_teks: data?.ck_pasca_operasi?.Posisi_Pasien_Lain_Teks ?? '',
      la_ga: data?.ck_pasca_operasi?.LA_GA ?? '',
      skor: data?.ck_pasca_operasi?.Skor ?? '',
      aldrette_aktivitas: data?.ck_pasca_operasi?.Aldrette_Aktivitas ?? '',
      aldrette_pernafasan: data?.ck_pasca_operasi?.Aldrette_Pernafasan ?? '',
      aldrette_sirkulasi: data?.ck_pasca_operasi?.Aldrette_Sirkulasi ?? '',
      aldrette_kesadaran: data?.ck_pasca_operasi?.Aldrette_Kesadaran ?? '',
      aldrette_saturasi: data?.ck_pasca_operasi?.Aldrette_Saturasi ?? '',
      steward_pergerakan: data?.ck_pasca_operasi?.Steward_Pergerakan ?? '',
      steward_pernafasan: data?.ck_pasca_operasi?.Steward_Pernafasan ?? '',
      steward_kesadaran: data?.ck_pasca_operasi?.Steward_Kesadaran ?? '',
      tanggal_pasca_operasi: data?.ck_pasca_operasi?.Tanggal_Pasca_Operasi ?? '',
      skala_anestesi: data?.ck_pasca_operasi?.Skala_Anestesi ?? '',
      grid_chart_img: data?.ck_pasca_operasi?.Grid_Chart_Img ?? '',
      grid_chart_data: data?.ck_pasca_operasi?.Grid_Chart_Data ?? '',
      time_nadi_teratur_masuk: data?.ck_pasca_operasi?.Time_Nadi_Teratur_Masuk ?? '',
      time_nadi_teratur_keluar: data?.ck_pasca_operasi?.Time_Nadi_Teratur_Keluar ?? '',
      time_nadi_tidakteratur_masuk: data?.ck_pasca_operasi?.Time_Nadi_Tidakteratur_Masuk ?? '',
      time_nadi_tidakteratur_keluar: data?.ck_pasca_operasi?.Time_Nadi_Tidakteratur_Keluar ?? '',
      time_nadi_lemah_masuk: data?.ck_pasca_operasi?.Time_Nadi_Lemah_Masuk ?? '',
      time_nadi_lemah_keluar: data?.ck_pasca_operasi?.Time_Nadi_Lemah_Keluar ?? '',
      time_nadi_kuat_masuk: data?.ck_pasca_operasi?.Time_Nadi_Kuat_Masuk ?? '',
      time_nadi_kuat_keluar: data?.ck_pasca_operasi?.Time_Nadi_Kuat_Keluar ?? '',
      time_napas_teratur_masuk: data?.ck_pasca_operasi?.Time_Napas_Teratur_Masuk ?? '',
      time_napas_teratur_keluar: data?.ck_pasca_operasi?.Time_Napas_Teratur_Keluar ?? '',
      time_napas_tidakteratur_masuk: data?.ck_pasca_operasi?.Time_Napas_Tidakteratur_Masuk ?? '',
      time_napas_tidakteratur_keluar: data?.ck_pasca_operasi?.Time_Napas_Tidakteratur_Keluar ?? '',
      time_napas_dangkal_masuk: data?.ck_pasca_operasi?.Time_Napas_Dangkal_Masuk ?? '',
      time_napas_dangkal_keluar: data?.ck_pasca_operasi?.Time_Napas_Dangkal_Keluar ?? '',
      time_napas_dalam_masuk: data?.ck_pasca_operasi?.Time_Napas_Dalam_Masuk ?? '',
      time_napas_dalam_keluar: data?.ck_pasca_operasi?.Time_Napas_Dalam_Keluar ?? '',
      time_napas_sukar_masuk: data?.ck_pasca_operasi?.Time_Napas_Sukar_Masuk ?? '',
      time_napas_sukar_keluar: data?.ck_pasca_operasi?.Time_Napas_Sukar_Keluar ?? '',
      time_napas_terapi_masuk: data?.ck_pasca_operasi?.Time_Napas_Terapi_Masuk ?? '',
      time_napas_terapi_keluar: data?.ck_pasca_operasi?.Time_Napas_Terapi_Keluar ?? '',
      time_spo_masuk: data?.ck_pasca_operasi?.Time_Spo_Masuk ?? '',
      time_spo_keluar: data?.ck_pasca_operasi?.Time_Spo_Keluar ?? '',
      actual: getActuals(),
      time_masalah_aktual: getTimeProblem(),
      masalah_aktual_teks: getTextProblem(),
      masalah_aktual_intruksi_teks: getInstructionProblem(),
      masalah_aktual_tindakan_teks: getActionProblem(),
      time_urine_satu: data?.ck_pasca_operasi?.Time_Urine_Satu ?? '',
      time_urine_dua: data?.ck_pasca_operasi?.Time_Urine_Dua ?? '',
      time_urine_tiga: data?.ck_pasca_operasi?.Time_Urine_Tiga ?? '',
      time_urine_empat: data?.ck_pasca_operasi?.Time_Urine_Empat ?? '',
      time_urine_total: data?.ck_pasca_operasi?.Time_Urine_Total ??  '',
      time_pemberitahu_ruang: data?.ck_pasca_operasi?.Time_Pemberitahu_Ruang ?? '',
      time_perawat_ruang: data?.ck_pasca_operasi?.Time_Perawat_Ruang ?? '',
      id_perawat_dokter: data?.ck_pasca_operasi?.ID_Perawat_Dokter ?? '',
      ttd_perawat: data?.ck_pasca_operasi?.TTD_Perawat ?? '',
      id_perawat: data?.ck_pasca_operasi?.ID_Perawat ?? '',
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

  const handleProcessing = () => {
    setProcessing(true);
  }

  const toggle = (tab: string) => {
    if (activeTab && activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const handleSubmitForm = (value: any) => {
    if (!treatment) {
      return;
    }
    handleProcessing()
    reset(value);
    setIsKotor(false);
    const appRequest = AppRequest.createFromStore(treatment);
    const actuals = value.actual;
    const params = UpdateOperativeFairyNursingNotesRequest.createFromJson({...value, ...appRequest});
    const destructuredAcs = UpdateOperativeFairyNursingNotesRequest.createActualParams(actuals);
    dispatch(handlePdf(undefined));
    OperativeFairyNursingNotesService().update({...params, ...destructuredAcs})
      .then(() => {
        OperativeFairyNursingNotesService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            OperativeFairyNursingNotesService().pdfv3(PdfOperativeFairyNursingNotesRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
              .then(() => {
                setProcessing(false);
                dispatch(fetchOperativeFairyNursingNotesPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'ok_catatan-keperawatan-intra-pasca_v3' })));
              });
          });
        setProcessing(false);
        dispatch(fetchOperativeFairyNursingNotes(appRequest));
      });
  }

  return (
    <>
      <Row className="mt-2">
        <Col>
          <Input
            type="checkbox"
            name="selectAll"
            id="select-all"
            onChange={(e) => {
              if (e.target.checked) {
                setDefaultPattern('1');
              } else {
                setDefaultPattern('0');
              }
            }}
            className="me-1"
          />
          <label>Checklist Default</label>
        </Col>
        <Nav tabs className="mt-2">
          <NavItem>
            <NavLink className={(activeTab && activeTab === '1') ? 'active' : ''} onClick={() => toggle('1')}>
              Intra Operatif
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={(activeTab && activeTab === '2') ? 'active' : ''} onClick={() => toggle('2')}>
              Diagnosa, Intervensi, Evaluasi Intra
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={(activeTab && activeTab === '3') ? 'active' : ''} onClick={() => toggle('3')}>
            Pasca Operatif
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={(activeTab && activeTab === '4') ? 'active' : ''} onClick={() => toggle('4')}>
              Diagnosa, Intervensi, Evaluasi Pasca
            </NavLink>
          </NavItem>
        </Nav>
      </Row>

      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        {/*nomor 1. sampai selesai jam*/}
        <TimeOut
          data={data}
          defaultPattern={defaultPattern}
          activeTab={activeTab}
          processing={processing}
          setDirty={(param: boolean) => setIsKotor(param)}
          {...{ register, errors, setValue }}
        />

        {/*/!* jenis operasi sampai nomor unit pendingin *!/*/}
        <TypeOperation
          defaultPattern={defaultPattern}
          data={data}
          activeTab={activeTab}
          processing={processing}
          setDirty={(param: boolean) => setIsKotor(param)}
          {...{ register, errors, setValue }}
        />

        {/* nomor 14 sampai keterangan */}
        <LaserUsage
          defaultPattern={defaultPattern}
          data={data}
          activeTab={activeTab}
          processing={processing}
          setDirty={(param: boolean) => setIsKotor(param)}
          {...{ register, errors, setValue }}
        />

        {/* Diagnosa intra operasi  */}
        <BreathingPatternDisorders
          data={data}
          activeTab={activeTab}
          processing={processing}
          {...{ register, errors, setValue }}
        />

        {/* Diagnosa intra operasi  */}
        <DiscomfortDisturbance
          data={data}
          activeTab={activeTab}
          processing={processing}
          {...{ register, errors, setValue, defaultPattern }}
        />

        {/* catatan keperawatan pasca operasi  */}
        <RawatPascaOperasi
          data={data}
          activeTab={activeTab}
          processing={processing}
          {...{ register, errors, setValue, getValues, defaultPattern }}
        />

        {/* Diagnosa Pasca Operatif  */}
        <ImpairedSenseOfComfort
          data={data}
          activeTab={activeTab}
          processing={processing}
          {...{ register, errors, setValue, defaultPattern }}
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
            <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.ck_pasca_operasi?.Updated_At)}` }</Label>
          </div>
        </FormGroup>

      </Form>
    </>
  );
}

export default OperativeFairyNursingNotesForm;
