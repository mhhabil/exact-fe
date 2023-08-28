// import { BiometricExamDetail, BiometricExaminationResultsForm } from '../../../outpatient/biometric-examination-results/components';
import { Button, Col, Modal, ModalBody, ModalHeader, Row, Table } from 'reactstrap';
import { Edit, Eye, FileText, Trash } from 'react-feather';
import { Fragment, useEffect, useState } from 'react';
import { AppRequest } from '@shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';
import DeleteModal from '@shared/modal/components/DeleteModal';
import { FindPdfRequest } from '@shared/pdf';
import InspectionResultYagLaserAndLaserRetinaForm from './inspection-result-yag-laser-and-retina-form';
import { ToolInspectionModel } from '../../inspection-result/models/inspection-result.model';
// import { ToolInspectionService } from '../../inspection-result/services';
import { InspectionResultYagLaserAndRetinaService } from '../services';
// import { fetchInspectionResult } from '../../inspection-result/stores/inspection-result.store';
import { fetchInspectionResultYagLaserAndRetina } from '../stores/inspection-result-yag-laser-and-retina.store';
import getConfig from 'next/config';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
// import ReportYagLaserFormDetail from './detail/report-yag-laser-form-detail';
import ReportYagLaserFormDetail from './report-yag-laser-form-detail';
// import RetinaLaserActionReportFormDetail from './detail/retina-laser-action-report-form-detail';
import RetinaLaserActionReportFormDetail from './retina-laser-action-report-form-detail';
import inspectionYag from '../const/inspection-yag';

const InspectionResultYagLaserAndLaserRetinaTable = (props: { data: ToolInspectionModel }) => {

  const { data } = props;

  const { treatment } = useAppSelector(state => state.patient);
  const { pdf, inspectionResultItem } = useAppSelector(state => state.inspectionResult);
  const [pdfData, setPdfData] = useState<any | undefined>(undefined);
  const dispatch = useAppDispatch();
  const { publicRuntimeConfig } = getConfig();

  const [detailRow, setDetailRow] = useState<any>();
  const [deleteRow, setDeleteRow] = useState<any>();
  const [editRow, setEditRow] = useState<any>();
  const [createNew, setCreateNew] = useState<any>();

  const [createIsDirty, setCreateIsDirty] = useState<boolean>(false);
  const [updateIsDirty, setUpdateIsDirty] = useState<boolean>(false);
  //const [showDicom, setShowDicom] = useState<string>(data && data.dicoms ? data.dicoms : dicom);

  // useEffect(() => {
  //   if (treatment) {
  //     dispatch(fetchInspectionResultPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-jalan_pemeriksaan-biometri' })));
  //   }
  // }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
    }
    setPdfData(pdf);
  }, [pdf])

  useEffect(() => {
    if (createNew) {
      if (editRow) {
        setEditRow(false);
      }
    }
  }, [createNew]);

  useEffect(() => {
    if (editRow) {
      if (createNew) {
        setCreateNew(false);
      }
    }
  }, [editRow])

  const handleDeleteRow = (row: any) => {
    if (!treatment) {
      return;
    }
    let params: any = AppRequest.createFromStore(treatment);
    params = {...params, item_id: row.ID, emr_id: row.EMR_ID};
    InspectionResultYagLaserAndRetinaService().delete(params).then(() => {
      const appRequest = AppRequest.createFromStore(treatment);
      dispatch(fetchInspectionResultYagLaserAndRetina(appRequest));
      setDeleteRow(undefined);
    });
  }

  const getInspectionName = (id: string) => {
    const selectedInspection = inspectionYag.find((val: any) => val.form_name === id);
    if (selectedInspection) {
      return selectedInspection.value;
    } else {
      return '';
    }
  }

  const handleToggleCreate = () => {
    if (createIsDirty) {
      const a = confirm('Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?')
      if (a) {
        setCreateNew(undefined);
      } else {
        return;
      }
    }
    if (!createIsDirty) {
      setCreateNew(undefined);
    }
  }

  const handleToggleUpdate = () => {
    if (updateIsDirty) {
      const a = confirm('Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?')
      if (a) {
        setEditRow(undefined);
      } else {
        return;
      }
    }
    if (!updateIsDirty) {
      setEditRow(undefined);
    }
  }

  return (
    <Fragment>
      <Row className="mb-2">
        <Col md="12">
          <div className='d-flex justify-content-end align-items-center'>
            <div>
              <Button color="secondary" type="button" onClick={() => setCreateNew(true)}>Input Data Baru</Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Table responsive>
            <thead>
              <tr className="fw-bolder">
                <td className="text-center">Waktu</td>
                <td className="text-center">Nama Petugas</td>
                <td className="text-center">Jenis Tindakan</td>
                <td className="text-center">Aksi</td>
              </tr>
            </thead>
            <tbody>
              {
                data && data.records && Array.isArray(data.records) && (
                  data.records.map((row, key) => {
                    return (
                      <tr key={key} className="fw-bold text-center">
                        {/* <td>{ row.Updated_At }</td> */}
                        <td>{ `${DateTimeConverter.convertToDateTime(row.Updated_At)}` }</td>
                        <td>{ row.Nama_Petugas }</td>
                        <td>{ getInspectionName(row.Nama) }</td>
                        <td className="d-flex justify-content-center align-items-center">
                          <Button className="btn-icon rounded-circle me-1" color="info" type="button" onClick={() => setDetailRow(row)} >
                            <Eye size={16} />
                          </Button>
                          {
                            row.Nama && (
                              <Fragment>
                                <Button className="btn-icon rounded-circle me-1" color="warning" type="button" onClick={() => setEditRow(row)} >
                                  <Edit size={16} />
                                </Button>
                                <a rel="noreferrer" className={row.PDF ? 'btn btn-primary btn-sm btn-icon rounded-circle me-1' : 'btn btn-secondary btn-sm btn-icon rounded-circle me-1'} target={row.PDF ? '_blank' : '_self'} href={row.PDF ?? 'javascript:void(0)'}>
                                  <FileText size={16}/>
                                </a>
                                <Button className="btn-icon rounded-circle me-1" color="danger" type="button" onClick={() => setDeleteRow(row)} >
                                  <Trash size={16} />
                                </Button>
                              </Fragment>
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
          {
            detailRow && detailRow.Nama && detailRow.Nama === 'Tindakan_Yag_Laser' && (
              <ReportYagLaserFormDetail data={detailRow} />
            )
          }
          {
            detailRow && detailRow.Nama && detailRow.Nama === 'Tindakan_Laser_Retina' && (
              <RetinaLaserActionReportFormDetail data={detailRow} />
            )
          }
        </ModalBody>
      </Modal>

      <Modal isOpen={!!editRow} size="xl">
        <ModalHeader toggle={() => handleToggleUpdate()}>Edit Data</ModalHeader>
        <ModalBody>
          <InspectionResultYagLaserAndLaserRetinaForm
            data={editRow}
            dicom={data.dicoms}
            onSuccessSubmit={() => {
              setEditRow(undefined);
              if (treatment) {
                dispatch(fetchInspectionResultYagLaserAndRetina(AppRequest.createFromStore(treatment)));
              }
            }}
            onCancel={() => handleToggleUpdate()}
          />
        </ModalBody>
      </Modal>

      <Modal isOpen={!!createNew} size="xl">
        <ModalHeader toggle={() => handleToggleCreate()}>Create Data</ModalHeader>
        <ModalBody>
          <InspectionResultYagLaserAndLaserRetinaForm
            data={undefined}
            dicom={data.dicoms}
            onSuccessSubmit={() => {
              setCreateNew(undefined);
              if (treatment) {
                dispatch(fetchInspectionResultYagLaserAndRetina(AppRequest.createFromStore(treatment)));
              }
            }}
            onCancel={() => handleToggleCreate()}
          />
        </ModalBody>
      </Modal>

      <DeleteModal
        isShow={(!!deleteRow)}
        setIsShow={() => setDeleteRow(undefined)}
        onDeleteClick={() => handleDeleteRow(deleteRow)} />
    </Fragment>
  )
}

export default InspectionResultYagLaserAndLaserRetinaTable;
