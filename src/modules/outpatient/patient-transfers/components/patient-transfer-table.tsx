// import { BiometricExamDetail, BiometricExaminationResultsForm } from '../../biometric-examination-results/components';
import { Button, Col, Modal, ModalBody, ModalHeader, Row, Table } from 'reactstrap';
import { Edit, Eye, FileText, Trash } from 'react-feather';
import { Fragment, useEffect, useState } from 'react';
// import { fetchInspectionResult, fetchInspectionResultItem, fetchInspectionResultPdf, handleInspectionResult, handleInspectionResultItem } from '../stores/inspection-result.store';
import { AppRequest } from '@shared/request';
import DeleteModal from '@shared/modal/components/DeleteModal';
import { FindPdfRequest } from '@shared/pdf';
// import { IBiometricModel, ToolInspectionModel } from '../models/inspection-result.model';
import getConfig from 'next/config';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import TransferPasienFormCoba from './transfer-pasien';
import { PatientTransferService } from '../services';
import {fetchPatientTransfer, fetchPatientTransferPdf} from '../stores/patient-transfer.store';
import { PatientTransferModel } from '../models/patient-transfer-model';
import TransferPasienDetail from './transfer-pasien-detail';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const PatientTransferTable = (props: { data: PatientTransferModel, unit?: string }) => {

  const { data, unit = 'RawatJalan' } = props;

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
    params = {...params};
    PatientTransferService().delete(params).then(() => {
      const appRequest = AppRequest.createFromStore(treatment);
      dispatch(fetchPatientTransfer(appRequest));
      setDeleteRow(undefined);
    });
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

  const isEditable = (row: any) => {
    return row.Unit === unit;
  }

  const isDeleteable = (row: any) => {
    return row.Unit === unit;
  }

  return (
    <Fragment>
      <Row className="mb-2">
        <Col md="12">
          <div className="d-flex justify-content-between">
            <div>
              {/* {
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
              } */}
            </div>
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
                <td className="text-center">Pengantar</td>
                <td className="text-center">Penerima</td>
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
                        <td>{ `${DateTimeConverter.convertToDateTimeSecond(row.Updated_At)}` }</td>
                        <td>{ row.Pengantar }</td>
                        <td>{ row.Penerima }</td>
                        <td className="d-flex justify-content-center align-items-center">
                          <Button className="btn-icon rounded-circle me-1" color="info" type="button" onClick={() => setDetailRow(row)} >
                            <Eye size={16} />
                          </Button>
                          <Fragment>
                            {
                              isEditable(row) && (
                                <Button className="btn-icon rounded-circle me-1" color="warning" type="button" onClick={() => setEditRow(row)} >
                                  <Edit size={16} />
                                </Button>
                              )
                            }
                            <a rel="noreferrer" className={row.PDF ? 'btn btn-primary btn-sm btn-icon rounded-circle me-1' : 'btn btn-secondary btn-sm btn-icon rounded-circle me-1'} target={row.PDF ? '_blank' : '_self'} href={row.PDF ?? 'javascript:void(0)'}>
                              <FileText size={16}/>
                            </a>
                            {
                              isDeleteable(row) && (
                                <Button className="btn-icon rounded-circle me-1" color="danger" type="button" onClick={() => setDeleteRow(row)} >
                                  <Trash size={16} />
                                </Button>
                              )
                            }
                          </Fragment>

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
          <TransferPasienDetail data={detailRow} />
        </ModalBody>
      </Modal>

      <Modal isOpen={!!editRow} size="xl">
        <ModalHeader toggle={() => handleToggleUpdate()}>Edit Data</ModalHeader>
        <ModalBody>
          <TransferPasienFormCoba
            unit={unit}
            data={editRow}
            pasien={data?.pasien ?? {}}
            ews={data?.ews}
            asesmen={data?.asesmen}
            onSuccessSubmit={() => {
              setEditRow(undefined);
              if (treatment) {
                dispatch(fetchPatientTransfer(AppRequest.createFromStore(treatment)));
              }
            }}
            onCancel={() => handleToggleUpdate()}
          />
        </ModalBody>
      </Modal>

      <Modal isOpen={!!createNew} size="xl">
        <ModalHeader toggle={() => handleToggleCreate()}>Create Data Transfer Pasien Baru</ModalHeader>
        <ModalBody>
          <TransferPasienFormCoba
            ro={data.ro}
            unit={unit}
            pasien={data?.pasien ?? {}}
            ews={data?.ews}
            asesmen={data?.asesmen}
            onSuccessSubmit={() => {
              setCreateNew(undefined);
              if (treatment) {
                dispatch(fetchPatientTransfer(AppRequest.createFromStore(treatment)))
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

export default PatientTransferTable;
