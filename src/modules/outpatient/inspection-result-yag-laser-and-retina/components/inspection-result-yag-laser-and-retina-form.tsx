import { Button, Col, Form, FormGroup, Input, Label, Nav, NavItem, NavLink, Row, TabContent, Table, TabPane } from "reactstrap";
// import { GridChartRequest, IGridChartRequest, ISurgeryReportPdfRequestTov3, SurgeryReportPdfRequest, SurgeryReportPdfRequestTov3 } from "../requests/surgery-report-general.request";
import { useEffect, useState } from "react";
import { AES } from "crypto-js";
import { AppRequest } from "@src/shared/request";
import { FindPdfRequest, IPdfModel } from "@src/shared/pdf";
// import ReportYagLaserForm from "./form/report-yag-laser-form";
import ReportYagLaserForm from "./report-yag-laser-form";
import RetinaLaserActionReportForm from "./retina-laser-action-report-form";
import getConfig from 'next/config';
import { handlePdf } from '@modules/operating-room/surgery-report/stores/surgery-report.store'
import inspectionYag from "../const/inspection-yag";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const InspectionResultYagLaserAndLaserRetinaForm = (props: { data: any, dicom: any, onSuccessSubmit: any, onCancel: any }) => {
  const { data, dicom, onSuccessSubmit, onCancel } = props;

  const dispatch = useAppDispatch();
  const { treatment } = useAppSelector(state => state.patient);
  const [showTool, setShowTool] = useState<string>(data && data.Nama ? data.Nama : '');
  const [showDicom, setShowDicom] = useState<string>(data && data.dicoms ? data.dicoms : dicom);

  const handleChangeOperation = (val: any) => {
    setShowTool(val.target.value);
  };

  const getInspectionName = (id: string) => {
    const selectedInspection = inspectionYag.find((val: any) => val.form_name === id);
    if (selectedInspection) {
      return selectedInspection.value;
    } else {
      return '';
    }
  }

  return (
    <div>
      <div>
        <Label for="jenis_operasi" md="2" sm="12">Hasil Tindakan Laser</Label>
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
                  inspectionYag && inspectionYag.map((item: any, key: number) => {
                    return <option value={item.form_name} key={key}>{ item.value }</option>;
                  })
                }
              </Input>
            )
          }
        </Col>
      </div>
      {
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
      }
    </div>
  )
}

export default InspectionResultYagLaserAndLaserRetinaForm;
