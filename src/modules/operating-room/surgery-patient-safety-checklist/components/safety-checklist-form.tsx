import { Button, Col, Form, FormGroup, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
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
import { SafetyChecklist } from "../models/safety-checklist.model";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { UpdateSafetyChecklistRequest } from "../request";
import SignInTab from "./sign-in-tab";
import TimeOutTab from "./time-out-tab";
import SignOutTab from "./sign-out-tab";
import { AppRequest } from "@src/shared/request";
import {fetchSafetyChecklist, fetchSafetyChecklistPdf, handlePdf} from "../stores/safety-checklist.store";
import { SafetyChecklistService } from "../services";
import { useWarnIfUnsavedChanges } from "@src/shared/alert";
import {fetchGeneralConsentPdf} from '@modules/information/general-consent/stores/general-consent.store';
import {FindPdfRequest, IPdfModel} from '@shared/pdf';
import {PdfSafetyChecklistRequest} from '@modules/operating-room/surgery-patient-safety-checklist/request/pdf-safety-checklist.request';
import { DateTimeConverter } from "@src/shared/datetime-converter";

const SafetyChecklistForm = (props: { data: SafetyChecklist }) => {
  const { data } = props;

  const dispatch = useAppDispatch();

  const { treatment } = useAppSelector(state => state.patient);
  const [defaultPattern, setDefaultPattern] = useState<any>();
  const [activeTab, setActiveTab] = useState<string>('1')
  const [processing, setProcessing] = useState(false);

  const { register, handleSubmit, setValue, getValues, errors, formState, reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(UpdateSafetyChecklistRequest.schema()),
    defaultValues: {
      sign_in_time: (data?.form?.Sign_In_Waktu) ? data.form.Sign_In_Waktu : '',
      sign_in_nurse_room: (data?.form?.Sign_In_Ruangan_Perawat) ? data.form.Sign_In_Ruangan_Perawat : '',
      sign_in_room_stylist: (data?.form?.Sign_In_Ruangan_Penata) ? data.form.Sign_In_Ruangan_Penata : '',
      sign_in_doctor_room: (data?.form?.Sign_In_Ruangan_Dokter) ? data.form.Sign_In_Ruangan_Dokter : '',
      sign_in_informed: data?.form?.Sign_In_Informed ?? '',
      sign_in_sign: data?.form?.Sign_In_Tanda ?? '',
      sign_in_complete: data?.form?.Sign_In_Lengkap ?? '',
      sign_in_implant: data?.form?.Sign_In_Implan ?? '',
      sign_in_pulse_oximetry: data?.form?.Sign_In_Pulse_Oksimetri ?? '',
      sign_in_allergy: data.form.Sign_In_Alergi ?? '',
      sign_in_breath: data.form.Sign_In_Pernafasan ?? '',
      sign_in_bleeding: data.form.Sign_In_Pendarahan ?? '',
      sign_in_signed_doctor: data.form.Sign_In_TTD_Dokter ?? '',
      sign_in_doctor: data.form.Sign_In_ID_Dokter ?? '',
      sign_in_signed_stylist: data.form.Sign_In_TTD_Penata ?? '',
      sign_in_id_stylist: data.form.Sign_In_ID_Penata ?? '',
      sign_in_signed_nurse: data.form.Sign_In_TTD_Perawat ?? '',
      sign_in_nurse: data.form.Sign_In_ID_Perawat ?? '',
      time_out_time: data?.form?.Time_Out_Waktu ?? '',
      time_out_nurse_room: data.form.Time_Out_Ruangan_Perawat ?? '',
      time_out_room_stylist: data.form.Time_Out_Ruangan_Penata ?? '',
      time_out_room_doctor: data.form.Time_Out_Ruangan_Dokter ?? '',
      time_out_room_surgical: data.form.Time_Out_Ruangan_Bedah ?? '',
      time_out_self_introduction: data.form.Time_Out_Perkenalan_Diri ?? '',
      time_out_reread: data.form.Time_Out_Baca_Ulang ?? '',
      time_out_prophylaxis_antibiotics: data.form.Time_Out_Profilaksis_Antibiotik ?? '',
      time_out_not_routine: data.form.Time_Out_Tidak_Rutin ?? '',
      time_out_not_routine_time: data.form.Time_Out_Tidak_Rutin_Waktu ?? '',
      time_out_bleeding: data.form.Time_Out_Pendarahan ?? '',
      time_out_special_anaesthesia: data.form.Time_Out_Anestesi_Khusus ?? '',
      time_out_sterile: data.form.Time_Out_Steril ?? '',
      time_out_equipment: data.form.Time_Out_Peralatan ?? '',
      time_out_problem: data.form.Time_Out_Masalah ?? '',
      time_out_result: data.form.Time_Out_Hasil ?? '',
      time_out_signed_doctor: data.form.Time_Out_TTD_Dokter ?? '',
      time_out_id_doctor: data.form.Time_Out_ID_Dokter ?? '',
      time_out_signed_stylist: data.form.Time_Out_TTD_Penata ?? '',
      time_out_id_stylist: data.form.Time_Out_ID_Penata ?? '',
      time_out_signed_nurse: data.form.Time_Out_TTD_Perawat ?? '',
      time_out_id_nurse: data.form.Time_Out_ID_Perawat ?? '',
      sign_out_time: data.form.Sign_Out_Waktu ?? '',
      sign_out_room_nurse: data.form.Sign_Out_Ruangan_Perawat ?? '',
      sign_out_room_stylist: data.form.Sign_Out_Ruangan_Penata ?? '',
      sign_out_room_doctor: data.form.Sign_Out_Ruangan_Dokter ?? '',
      sign_out_room_surgical: data.form.Sign_Out_Ruangan_Bedah ?? '',
      sign_out_name_action: data.form.Sign_Out_Nama_Tindakan ?? '',
      sign_out_equipment_tools: data.form.Sign_Out_Kelengkapan_Alat ?? '',
      sign_out_labeling_specimen: data.form.Sign_Out_Pelabelan_Spesimen ?? '',
      sign_out_equipment_problem: data.form.Sign_Out_Masalah_Peralatan ?? '',
      sign_out_special_notes: data.form.Sign_Out_Catatan_Khusus ?? '',
      sign_out_signed_eye: data.form.Sign_Out_TTD_Mata ?? '',
      sign_out_id_eye: data.form.Sign_Out_ID_Mata ?? '',
      sign_out_signed_doctor: data.form.Sign_In_TTD_Dokter ?? '',
      sign_out_id_doctor: data.form.Sign_Out_ID_Dokter ?? '',
      sign_out_signed_stylist: data.form.Sign_Out_TTD_Penata ?? '',
      sign_out_id_stylist: data.form.Sign_Out_ID_Penata ?? '',
      sign_out_signed_nurse: data.form.Sign_Out_TTD_Perawat ?? '',
      sign_out_id_nurse: data.form.Sign_Out_ID_Perawat ?? '',
      sign_out_signed_circular: data.form.Sign_Out_TTD_Sirkuler ?? '',
      sign_out_id_circular: data.form.Sign_Out_ID_Sirkuler ?? '',
    },
  });

  const { isDirty } = formState;

  useEffect(() => {
    if (treatment) {
      dispatch(fetchSafetyChecklistPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'ok_checklist-keselamatan_v3' })));
    }
  }, [treatment, dispatch]);

  useWarnIfUnsavedChanges(isDirty, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  const [files, setFiles] = useState<any>([])

  const toggle = (tab: string) => {
    if (activeTab && activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const handleSubmitForm = (value: any) => {
    if (!treatment) {
      return;
    }
    setProcessing(true);
    // reset(value);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateSafetyChecklistRequest.createFromJson({...value, ...appRequest});
    dispatch(handlePdf(undefined));
    SafetyChecklistService().update(params)
      .then(() => {
        SafetyChecklistService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            SafetyChecklistService().pdfv3(PdfSafetyChecklistRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
              .then(() => {
                setProcessing(false);
                dispatch(fetchSafetyChecklistPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'ok_checklist-keselamatan_v3' })));
              })
          });
        setProcessing(false);
        dispatch(fetchSafetyChecklist(appRequest));
      });
  }

  return (
    <div>
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
      <Nav tabs className="mt-2">
        <NavItem>
          <NavLink className={(activeTab && activeTab === '1') ? 'active' : ''} onClick={() => toggle('1')}>
            Sebelum Induksi Anestesi / Sign In
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={(activeTab && activeTab === '2') ? 'active' : ''} onClick={() => toggle('2')}>
            Sebelum Insisi / Time Out
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ fontSize: '9pt' }} className={(activeTab && activeTab === '3') ? 'active' : ''} onClick={() => toggle('3')}>
            Sebelum Pasien Meninggalkan Kamar Operasi / Sign Out
          </NavLink>
        </NavItem>
      </Nav>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        {/* pertama */}
        <SignInTab
          data={data}
          activeTab={activeTab}
          processing={processing}
          defaultPattern={defaultPattern}
          {...{ register, errors, setValue, getValues }}
        />
        {/* kedua */}
        <TimeOutTab
          data={data}
          activeTab={activeTab}
          processing={processing}
          defaultPattern={defaultPattern}
          {...{ register, errors, setValue, getValues }}
        />

        {/* KETIGA */}
        <SignOutTab
          data={data}
          activeTab={activeTab}
          processing={processing}
          defaultPattern={defaultPattern}
          {...{ register, errors, setValue, getValues }}
        />
      </Form>
      <FormGroup className="form-group mt-0" row>
        <div className="d-flex justify-content-center align-items-center">
          <Label className="me-1">Terakhir Disimpan: </Label>
          <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
        </div>
      </FormGroup>
    </div>
  );

}

export default SafetyChecklistForm;

