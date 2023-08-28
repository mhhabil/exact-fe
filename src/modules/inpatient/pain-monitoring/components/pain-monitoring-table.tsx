import { Button, Col, Modal, ModalBody, ModalHeader, Row, Table } from 'reactstrap';
import { Edit, Eye, Trash } from 'react-feather';
import { Fragment, useEffect, useState } from 'react';
import {
  fetchPainMonitoring,
  fetchPainMonitoringItem,
  fetchPainMonitoringPdf,
  handlePainMonitoringItem,
} from '@modules/inpatient/pain-monitoring/stores/pain-monitoring.store';

import { AppRequest } from '@shared/request';
//import PainMonitoringDetail from '@modules/inpatient/assessment-vital-signs/components/assessment-vital-signs-detail';
import PainMonitoringForm from '@modules/inpatient/pain-monitoring/components/pain-monitoring';
import {
  PainMonitoringModel,
} from '@modules/inpatient/pain-monitoring/models/pain-monitoring.model';
import { PainMonitoringService} from '@modules/inpatient/pain-monitoring/services';
import DeleteModal from '@shared/modal/components/DeleteModal';
import { FindPdfRequest } from '@shared/pdf';
import { PdfPainMonitoringRequest } from '@modules/inpatient/pain-monitoring/requests/pdf-pain-monitoring.request';
import getConfig from 'next/config';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import PainMonitoringFormDetail from './pain-monitoring-form';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const PainMonitoringTable = (props: { data: PainMonitoringModel, unit: string }) => {

  const { data, unit } = props;
  const { treatment } = useAppSelector(state => state.patient);
  const { pdf, painMonitoringItem } = useAppSelector(state => state.painMonitoring);
  const [pdfData, setPdfData] = useState<any | undefined>(undefined);
  const dispatch = useAppDispatch();
  const { publicRuntimeConfig } = getConfig();

  const [detailRow, setDetailRow] = useState<any>();
  const [deleteRow, setDeleteRow] = useState<any>();
  const [editRow, setEditRow] = useState<any>();
  const [validateRow, setValidateRow] = useState<any>();
  const [createNew, setCreateNew] = useState<any>();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPainMonitoringPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_formulir-monitoring-nyeri' })));
    }
  }, [treatment, dispatch]);

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
    params = {...params, item_id: row.ID, emr_id: treatment.EMR_ID};
    PainMonitoringService().delete(params).then(() => {
      const appRequest = AppRequest.createFromStore(treatment);
      dispatch(fetchPainMonitoring(appRequest));
      setDeleteRow(undefined);
      PainMonitoringService().show(appRequest)
        .then((resp) => {
          const { data } = resp.data;
          const params = PdfPainMonitoringRequest.createPdfRequest(data, appRequest.emr_id);
          PainMonitoringService().pdfv3(params)
            .then(() => {
              dispatch(fetchPainMonitoringPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_formulir-monitoring-nyeri' })));
            });
        });
    });
  }

  return (
    <Fragment>
      <Row className="mb-2">
        <Col md="12">
          <div className="d-flex justify-content-between">
            <div>
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
                <td className="text-center">Waktu Monitor</td>
                <td className="text-center">Nama Pemonitor</td>
                <td className="text-center">Unit Pemonitor</td>
                <td className="text-center">Aksi</td>
              </tr>
            </thead>
            <tbody>
              {
                data && data.records && Array.isArray(data.records) && (
                  data.records.map((row, key) => {
                    return (
                      <tr key={key} className="fw-bold text-center">
                        {/* <td>{ row.Waktu_Monitor }</td> */}
                        <td>{ `${DateTimeConverter.convertToDateTime(row.Waktu_Monitor)}` }</td>
                        <td>{ row.Nama_Perawat }</td>
                        <td>{ row.Unit }</td>
                        <td className="d-flex justify-content-center">
                          <Button className="btn-icon rounded-circle me-1" color="info" type="button" onClick={() => setDetailRow(row)} >
                            <Eye size={16} />
                          </Button>
                          {
                            unit && unit === row.Unit && (
                              <Fragment>
                                <Button className="btn-icon rounded-circle me-1" color="warning" type="button" onClick={() => setEditRow(row)} >
                                  <Edit size={16} />
                                </Button>
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
        <ModalHeader toggle={() => setDetailRow(undefined)}>Detail Data</ModalHeader>
        <ModalBody>
          {
            detailRow && detailRow.Unit && detailRow.Unit === 'Rawat Inap' && (
              <PainMonitoringFormDetail  item={detailRow} onSuccessSubmit={() => {
                if (treatment) {
                  dispatch(fetchPainMonitoring(AppRequest.createFromStore(treatment)));
                  dispatch(fetchPainMonitoringPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_formulir-monitoring-nyeri' })));
                }
              }} unit={detailRow.Unit}/>
            )
          }
        </ModalBody>
      </Modal>

      <Modal isOpen={!!editRow} size="xl">
        <ModalHeader toggle={() => setEditRow(undefined)}>Lihat Data</ModalHeader>
        <ModalBody>
          {
            editRow && editRow.Unit && editRow.Unit === 'Rawat Inap' && (
              <PainMonitoringForm  item={editRow} onSuccessSubmit={() => {
                if (treatment) {
                  dispatch(fetchPainMonitoring(AppRequest.createFromStore(treatment)));
                  dispatch(fetchPainMonitoringPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_formulir-monitoring-nyeri' })));
                }
              }} unit={editRow.Unit}/>
            )
          }
        </ModalBody>
      </Modal>

      <Modal isOpen={!!createNew} size="xl">
        <ModalHeader toggle={() => setCreateNew(undefined)}>Input Data Formulir Monitoring Skala Nyeri</ModalHeader>
        <ModalBody>
          <PainMonitoringForm unit={unit} onSuccessSubmit={() => {
            setCreateNew(undefined);
            if (treatment) {
              dispatch(fetchPainMonitoring(AppRequest.createFromStore(treatment)));
              dispatch(fetchPainMonitoringPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_formulir-monitoring-nyeri' })));
            }
          }} />
        </ModalBody>
      </Modal>

      <DeleteModal
        isShow={(!!deleteRow)}
        setIsShow={() => setDeleteRow(undefined)}
        onDeleteClick={() => handleDeleteRow(deleteRow)} />
    </Fragment>
  )
}

export default PainMonitoringTable;
