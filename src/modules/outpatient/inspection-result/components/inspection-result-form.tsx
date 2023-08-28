import { Button, Col, Form, FormGroup, Input, Label, Nav, NavItem, NavLink, Row, TabContent, Table, TabPane } from "reactstrap";
// import { GridChartRequest, IGridChartRequest, ISurgeryReportPdfRequestTov3, SurgeryReportPdfRequest, SurgeryReportPdfRequestTov3 } from "../requests/surgery-report-general.request";
import { useEffect, useState } from "react";
import { AES } from "crypto-js";
import { AppRequest } from "@src/shared/request";
import { FindPdfRequest, IPdfModel } from "@src/shared/pdf";
import PupilOCTResultForm from "./form/pupil-oct-result-form";
import ReportYagLaserForm from "../../inspection-result-yag-laser-and-retina/components/report-yag-laser-form";
import ResultUsgForm from "./form/result-usg-form";
import RetinaLaserActionReportForm from "../../inspection-result-yag-laser-and-retina/components/retina-laser-action-report-form";
import RetinaOctResultForm from "./form/retina-oct-result-form";
import VisualFieldResultForm from "./form/visual-field-test-results-form";
import FundusPhotoExamination from "./form/fundus-photo-examination";
// import { SurgeryReportModel } from "../models/surgery-report.model";
// import { SurgeryReportService } from "../services";
// import { fetchSurgeryReport, fetchSurgeryReportPdf } from "../stores/surgery-report.store";
import getConfig from 'next/config';
import { handlePdf } from '@modules/operating-room/surgery-report/stores/surgery-report.store'
// import surgeryList from "../const/surgeryList";
import inspections from "../const/inspections";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import BiometricExaminationResultsForm from "./form/biometric-examination-results-form";
import OctCorneaResults from "./form/oct-cornea-results";
import CheckSchimerTest from "./form/check_schimer_test";
import CheckSchimerTestDetail from "./detail/check-schimer_test_detail";
// import { BiometricExaminationResultsForm } from "../../../outpatient/biometric-examination-results/components";

const InspectionResultForm = (props: { data: any, dicom: any, onSuccessSubmit: any, onCancel: any }) => {
  const { data, dicom, onSuccessSubmit, onCancel } = props;

  const dispatch = useAppDispatch();
  const { treatment } = useAppSelector(state => state.patient);
  const [showTool, setShowTool] = useState<string>(data && data.Nama ? data.Nama : '');
  const [showDicom, setShowDicom] = useState<string>(data && data.dicoms ? data.dicoms : dicom);

  const handleChangeOperation = (val: any) => {
    setShowTool(val.target.value);
  };

  const getInspectionName = (id: string) => {
    const selectedInspection = inspections.find((val: any) => val.form_name === id);
    if (selectedInspection) {
      return selectedInspection.value;
    } else {
      return '';
    }
  }

  return (
    <div>
      <div>
        <Label for="jenis_operasi" md="2" sm="12">Hasil Pemeriksaan Alat</Label>
        <Col>
          {
            data && data.Nama ? (
              <Label>{getInspectionName(data.Nama)}</Label>
            ) : (
              <Input
                type="select"
                id="jenis-operasi"
                name="jenis-operasi"
                defaultValue={showTool}
                onChange={(e) => handleChangeOperation(e)}>
                <option value="" disabled={false}>--</option>
                {
                  inspections && inspections.map((item: any, key: number) => {
                    return <option value={item.form_name} key={key}>{ item.value }</option>;
                  })
                }
              </Input>
            )
          }
        </Col>
      </div>
      {
        showTool && showTool === 'Pemeriksaan_Biometri' && (
          <BiometricExaminationResultsForm
            item={data}
            dicom={showDicom}
            onSuccessSubmit={onSuccessSubmit}
            onCancel={onCancel}
          />
        )
      }
      {
        showTool && showTool === 'Pemeriksaan_Oct_Retina' && (
          <RetinaOctResultForm
            data={data}
            dicom={showDicom}
            onSuccessSubmit={onSuccessSubmit}
            onCancel={onCancel}
          />
        )
      }
      {
        showTool && showTool === 'Pemeriksaan_Oct_Glaukoma' && (
          <PupilOCTResultForm
            data={data}
            dicom={showDicom}
            onSuccessSubmit={onSuccessSubmit}
            onCancel={onCancel}
          />
        )
      }
      {
        showTool && showTool === 'Pemeriksaan_Lapangan_Pandang' && (
          <VisualFieldResultForm
            data={data}
            dicom={showDicom}
            onSuccessSubmit={onSuccessSubmit}
            onCancel={onCancel}
          />
        )
      }
      {
        showTool && showTool === 'Pemeriksaan_Foto_Fundus' && (
          <FundusPhotoExamination
            data={data}
            dicom={showDicom}
            onSuccessSubmit={onSuccessSubmit}
            onCancel={onCancel}
          />
        )
      }
      {
        showTool && showTool === 'Pemeriksaan_Usg' && (
          <ResultUsgForm
            data={data}
            dicom={showDicom}
            onSuccessSubmit={onSuccessSubmit}
            onCancel={onCancel}
          />
        )
      }
      {/* {
        showTool && showTool === 'Tindakan_Yag_Laser' && (
          <ReportYagLaserForm
            data={data}
            dicom={showDicom}
            onSuccessSubmit={onSuccessSubmit}
            onCancel={onCancel}
          />
        )
      }
      {
        showTool && showTool === 'Tindakan_Laser_Retina' && (
          <RetinaLaserActionReportForm
            data={data}
            onSuccessSubmit={onSuccessSubmit}
            onCancel={onCancel}
          />
        )
      } */}
      {
        showTool && showTool === 'Pemeriksaan_Oct_Cornea' && (
          <OctCorneaResults
            data={data}
            dicom={showDicom}
            onSuccessSubmit={onSuccessSubmit}
            onCancel={onCancel}
          />
        )
      }
      {
        showTool && showTool === 'Laporan_Hasil_Schirmer_Test' && (
          <CheckSchimerTest
            data={data}
            onSuccessSubmit={onSuccessSubmit}
            onCancel={onCancel}
          />
        )
      }
    </div>
  )
}

export default InspectionResultForm;
