import { AppRequest } from "@src/shared/request";
import { Button, Col, Container, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row, Table } from "reactstrap";
import DeleteModal from "@src/shared/modal/components/DeleteModal";
import { FindPdfRequest } from "@src/shared/pdf";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useEffect, useState } from "react";
import { Edit, Eye, FileText, Trash } from "react-feather";
import { NursingEarlyWarningModel } from "../models/nursing-early-warning-scoring.model";
import { useDispatch } from "react-redux";
import InpatientInitialNursingEarlyWarningervice from "../services";
import { fetchInpatientInitialNursingEarlyWarning, fetchInpatientInitialNursingEarlyWarningPdf } from "../stores/nursing-early-warning-scoring.store";
import NursingEarlyWarningScoringDetail from "./nursing-early-warning-scoring-detail";
import NursingEarlyWarningScoringForm from "./nursing-early-warning-scoring-form";
import { TextInput } from "@src/shared/input";
import { errors } from "formidable";
import { useForm } from "react-hook-form";
import unit from "@src/modules/outpatient/cppt/const/unit";
import { SubmitButton } from "@src/shared/button/components";
import { PdfNursingEarlyWarningRequest } from "../requests/pdf-nursing-early-warning.request";
import { DateTimeConverter } from "@src/shared/datetime-converter";


const NursingEarlyWarningScoringTable = (props: {data: NursingEarlyWarningModel}) => {
  const {data} = props;

  const { treatment } = useAppSelector(state => state.patient);
  const [processing, setProcessing] = useState(false);
  const { pdf } = useAppSelector(state => state.InpatientInitialNursingEarlyWarning);
  const [pdfData, setPdfData] = useState<any>(undefined);
  const [createNew, setCreateNew] = useState<any>();
  const [detailRow, setDetailRow] = useState<any>();
  const [deleteRow, setDeleteRow] = useState<any>();
  const [editRow, setEditRow] = useState<any>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchInpatientInitialNursingEarlyWarningPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pengkajian-newss' })))
    }
  }, [treatment, dispatch])

  const getUnitName = (u: string) => {
    const selectedUnit = unit.find((val: any) => val.id === u);
    if (selectedUnit) {
      return selectedUnit.name;
    } else {
      return '';
    }
  }

  const handleDeleteRow = (row: any) => {
    if (!treatment) {
      return;
    }
    let params: any = AppRequest.createFromStore(treatment);
    params = {...params, item_id: row.ID, emr_id: treatment.EMR_ID};
    InpatientInitialNursingEarlyWarningervice().delete(params).then(() => {
      const appRequest = AppRequest.createFromStore(treatment);
      dispatch(fetchInpatientInitialNursingEarlyWarning(appRequest));
      setDeleteRow(undefined);

      InpatientInitialNursingEarlyWarningervice().show(appRequest)
        .then((resp) => {
          const { data } = resp.data;
          const params = PdfNursingEarlyWarningRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id);
          InpatientInitialNursingEarlyWarningervice().pdfv3(params)
            .then(() => {
              dispatch(fetchInpatientInitialNursingEarlyWarningPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pengkajian-newss' })));
            });
        });
    });
  }

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  const setCreateNewForm = () => {
    if (data?.records?.length === 16) {
      alert('Data sudah melebihi batas maksimal');
      return false;
    } else {
      setCreateNew(true);
    }
  }

  return (<>
    <Row className="mb-3" >
    </Row>
    <Row className="mb-1">
      <div className="d-flex justify-content-between align-items-center">
        <div>
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
        </div>
        <div>
          <Button color="secondary" type="button" onClick={() => setCreateNewForm()}>Input Data Baru</Button>
        </div>
      </div>
    </Row>
    <Row>
      <Col md="12">
        <Table responsive>
          <thead>
            <tr className="fw-bolder">
              <td className="text-center">Waktu Pengkajian</td>
              <td className="text-center">Pengkaji</td>
              <td className="text-center">Unit Pengkaji</td>
              <td className="text-center">Total Skor</td>
              <td className="text-center">Aksi</td>
            </tr>
          </thead>
          <tbody>
            {
              data && data.records && Array.isArray(data.records) && (
                data.records.map((row, key) => {
                  return (
                    <tr key={key} className="fw-bold text-center">
                      <td>{ `${DateTimeConverter.convertToDateTime(row.Waktu_Pengkajian)}` }</td>
                      <td>{ row.Pengkaji }</td>
                      <td>{ getUnitName(row.Unit_Pengkaji) }</td>
                      <td>{ row.Total_Skor }</td>
                      <td className="d-flex justify-content-center">
                        <Button className="btn-icon rounded-circle me-1" color="info" type="button" onClick={() => setDetailRow(row)} >
                          <Eye size={16} />
                        </Button>
                        {
                          !!row.Unit_Pengkaji && (
                            <>
                              <Button className="btn-icon rounded-circle me-1" color="warning" type="button" onClick={() => setEditRow(row)} >
                                <Edit size={16} />
                              </Button>
                              <Button className="btn-icon rounded-circle me-1" color="danger" type="button" onClick={() => setDeleteRow(row)} >
                                <Trash size={16} />
                              </Button>
                            </>
                          )
                        }
                      </td>
                    </tr>
                  )
                })
              )
            }
          </tbody>
        </Table>
      </Col>
    </Row>

    <Modal isOpen={!!detailRow} size="xl">
      <ModalHeader toggle={() => setDetailRow(undefined)}>Lihat Data</ModalHeader>
      <ModalBody>
        {!!detailRow && <NursingEarlyWarningScoringDetail item={detailRow} /> }
      </ModalBody>
    </Modal>

    <Modal isOpen={!!createNew} size="xl">
      <ModalHeader toggle={() => setCreateNew(undefined)}>Input Data</ModalHeader>
      <ModalBody>
        <NursingEarlyWarningScoringForm
          data={createNew}
          defaultEws={data && data.records && data.records[0] && data.records[0].Tipe_Ews ? data.records[0].Tipe_Ews : undefined}
          action='create'
          isFirst={!!(data && data.records && Array.isArray(data.records) && data.records.length === 0)}
          onCancel={() => setCreateNew(undefined)}
        />
      </ModalBody>
    </Modal>

    <Modal isOpen={!!editRow} size="xl">
      <ModalHeader toggle={() => setEditRow(undefined)}>Edit Data</ModalHeader>
      <ModalBody>
        <NursingEarlyWarningScoringForm
          data={editRow}
          defaultEws={data && data.records && data.records[0] && data.records[0].Tipe_Ews ? data.records[0].Tipe_Ews : undefined}
          action='update'
          onCancel={() => setEditRow(undefined)}
        />
      </ModalBody>
    </Modal>

    <DeleteModal
      isShow={(!!deleteRow)}
      setIsShow={() => setDeleteRow(undefined)}
      onDeleteClick={() => handleDeleteRow(deleteRow)} />
  </>);
};

export default NursingEarlyWarningScoringTable;
