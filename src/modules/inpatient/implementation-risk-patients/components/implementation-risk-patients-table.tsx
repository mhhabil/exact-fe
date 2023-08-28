import { Button, Col, Modal, ModalBody, ModalHeader, Row, Table } from 'reactstrap';
import { Edit, Eye, Trash } from 'react-feather';
import { Fragment, useEffect, useState } from 'react';
import {
  fetchImplementationRiskPatients,
  fetchImplementationRiskPatientsItem,
  fetchImplementationRiskPatientsPdf,
  handleImplementationRiskPatientsItem,
  handlePdf,
} from '@modules/inpatient/implementation-risk-patients/stores/implementation-risk-patients.store';

import { AppRequest } from '@shared/request';
//import ImplementationRiskPatientsDetail from '@modules/inpatient/assessment-vital-signs/components/assessment-vital-signs-detail';
import ImplementationRiskPatientsForm from '@modules/inpatient/implementation-risk-patients/components/implementation-risk-patients-form';
import {
  ImplementationRiskPatientsModel,
} from '@modules/inpatient/implementation-risk-patients/models/implementation-risk-patients.model';
import { ImplementationRiskPatientsService} from '@modules/inpatient/implementation-risk-patients/services';
import DeleteModal from '@shared/modal/components/DeleteModal';
import { FindPdfRequest } from '@shared/pdf';
import { PdfImplementationRiskPatientsRequest } from '@modules/inpatient/implementation-risk-patients/requests/pdf-implementation-risk-patients.request';
import getConfig from 'next/config';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const ImplementationRiskPatientsTable = (props: { data: ImplementationRiskPatientsModel, unit: string }) => {

  const { data, unit } = props;
  const { treatment } = useAppSelector(state => state.patient);
  const { pdf, implementationRiskPatientsItem } = useAppSelector(state => state.implementationRiskPatients);
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
      dispatch(fetchImplementationRiskPatientsPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_implementasi-pasien-risiko-jatuh' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
    }
    setPdfData(pdf);
  }, [pdf])
 
  useEffect(() => {
    if (editRow || deleteRow || validateRow || detailRow) {
      if (!treatment) {
        return;
      }
      const appRequest = AppRequest.createFromStore(treatment);
      dispatch(fetchImplementationRiskPatientsItem({...appRequest, itemId: editRow?.ID ?? deleteRow?.ID ?? validateRow?.ID ?? detailRow?.ID}));
    } else {
      dispatch(handleImplementationRiskPatientsItem(undefined));
    }
  }, [editRow, deleteRow, validateRow, detailRow]);
  
  const handleDeleteRow = (row: any) => {
    if (!treatment) {
      return;
    }
    let params: any = AppRequest.createFromStore(treatment);
    params = {...params, item_id: row.ID, emr_id: treatment.EMR_ID};
    ImplementationRiskPatientsService().delete(params).then(() => {
      const appRequest = AppRequest.createFromStore(treatment);
      dispatch(fetchImplementationRiskPatients(appRequest));
      setDeleteRow(undefined);
      ImplementationRiskPatientsService().show(appRequest)
        .then((resp) => {
          const { data } = resp.data;
          const params = PdfImplementationRiskPatientsRequest.createPdfRequest(data, appRequest.emr_id, treatment);
          ImplementationRiskPatientsService().pdfv3(params)
            .then(() => {
              dispatch(fetchImplementationRiskPatientsPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_implementasi-pasien-risiko-jatuh' })));
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
                <td className="text-center">Waktu Pengimplementasi</td>
                <td className="text-center">Pengimplementasi</td>
                <td className="text-center">Unit Pengimplementasi</td>
                <td className="text-center">Aksi</td>
              </tr>
            </thead>
            <tbody>
              {
                data && data.records && Array.isArray(data.records) && (
                  data.records.map((row, key) => {
                    return (
                      <tr key={key} className="fw-bold text-center">
                        <td>{ `${DateTimeConverter.convertToDateTime(row.Waktu_Implementasi)}` }</td>
                        <td>{ row.Nama_Perawat }</td>
                        <td>{ row.Unit_Pengimplementasi }</td>
                        <td className="d-flex justify-content-center">
                          <Button className="btn-icon rounded-circle me-1" color="info" type="button" onClick={() => setEditRow(row)} >
                            <Eye size={16} />
                          </Button>
                          {
                            unit && unit === row.Unit_Pengimplementasi && (
                              <Fragment>
                                <Button className="btn-icon rounded-circle me-1" color="warning" type="button" onClick={() => setDetailRow(row)} >
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
      
      <Modal isOpen={!!editRow} size="xl">
        <ModalHeader toggle={() => setEditRow(undefined)}>View</ModalHeader>
        <ModalBody>
          {
            editRow && editRow.Unit_Pengimplementasi && editRow.Unit_Pengimplementasi === 'Rawat Inap' && (
              <ImplementationRiskPatientsForm itemButton='view'  item={editRow}  onSuccessSubmit={(status:boolean) => {
                if (treatment) {
                  dispatch(fetchImplementationRiskPatients(AppRequest.createFromStore(treatment)));
                  dispatch(fetchImplementationRiskPatientsPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_implementasi-pasien-risiko-jatuh' })));
                }
              }} unit={editRow.Unit}/>
            )
          }
        </ModalBody>
      </Modal>

      <Modal isOpen={!!detailRow} size="xl">
        <ModalHeader toggle={() => setDetailRow(undefined)}>Lihat Data</ModalHeader>
        <ModalBody>
          {
            detailRow && detailRow.Unit_Pengimplementasi && detailRow.Unit_Pengimplementasi === 'Rawat Inap' && (
              <ImplementationRiskPatientsForm itemButton='edit'  item={detailRow} onSuccessSubmit={(status:boolean) => {
                if (treatment) {
                  dispatch(fetchImplementationRiskPatients(AppRequest.createFromStore(treatment)));
                  dispatch(fetchImplementationRiskPatientsPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_implementasi-pasien-risiko-jatuh' })));
                  setDetailRow(status);
                }
              }} unit={detailRow.Unit}/>
            )
          }
        </ModalBody>
      </Modal>

      <Modal isOpen={!!createNew} size="xl">
        <ModalHeader toggle={() => setCreateNew(undefined)}>IMPLEMENTASI PASIEN RESIKO JATUH</ModalHeader>
        <ModalBody>
          <ImplementationRiskPatientsForm itemButton='create' unit={unit} onSuccessSubmit={(status:boolean) => {
            setCreateNew(undefined);
            if (treatment) {
              dispatch(fetchImplementationRiskPatients(AppRequest.createFromStore(treatment)));
              dispatch(fetchImplementationRiskPatientsPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_implementasi-pasien-risiko-jatuh' })));
              setDetailRow(status);
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

export default ImplementationRiskPatientsTable;
