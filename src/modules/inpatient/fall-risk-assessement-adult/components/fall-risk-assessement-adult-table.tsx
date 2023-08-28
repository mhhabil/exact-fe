import { Button, Col, Modal, ModalBody, ModalHeader, Row, Table } from 'reactstrap';
import { Edit, Eye, Trash } from 'react-feather';
import { Fragment, useEffect, useState } from 'react';
import {
  fetchFallRiskAssessementAdult,
  fetchFallRiskAssessementAdultItem,
  fetchFallRiskAssessementAdultPdf,
  handleFallRiskAssessementAdultItem,
} from '@modules/inpatient/fall-risk-assessement-adult/stores/fall-risk-assessement-adult.store';

import { AppRequest } from '@shared/request';
import FallRiskAssessementAdultForm from '@modules/inpatient/fall-risk-assessement-adult/components/fall-risk-assessement-adult';
import {
  FallRiskAssessementAdultModel,
} from '@modules/inpatient/fall-risk-assessement-adult/models/fall-risk-assessement-adult.model';
import { FallRiskAssessementAdultService} from '@modules/inpatient/fall-risk-assessement-adult/services';
import DeleteModal from '@shared/modal/components/DeleteModal';
import { FindPdfRequest } from '@shared/pdf';
import { PdfFallRiskAssessementAdultRequest } from '@modules/inpatient/fall-risk-assessement-adult/requests/pdf-fall-risk-assessement-adult.request';
import getConfig from 'next/config';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const FallRiskAssessementAdultTable = (props: { data: FallRiskAssessementAdultModel, unit: string }) => {

  const { data, unit } = props;
  const { treatment } = useAppSelector(state => state.patient);
  const { pdf, fallRiskAssessementAdultItem } = useAppSelector(state => state.fallRiskAssessementAdult);
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
      dispatch(fetchFallRiskAssessementAdultPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pengkajian-risiko-jatuh-dewasa' })));
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
      dispatch(fetchFallRiskAssessementAdultItem({...appRequest, itemId: editRow?.ID ?? deleteRow?.ID ?? validateRow?.ID ?? detailRow?.ID}));
    } else {
      dispatch(handleFallRiskAssessementAdultItem(undefined));
    }
  }, [editRow, deleteRow, validateRow, detailRow]);

  const handleDeleteRow = (row: any) => {
    if (!treatment) {
      return;
    }
    let params: any = AppRequest.createFromStore(treatment);
    params = {...params, item_id: row.ID, emr_id: treatment.EMR_ID};
    FallRiskAssessementAdultService().delete(params).then(() => {
      const appRequest = AppRequest.createFromStore(treatment);
      dispatch(fetchFallRiskAssessementAdult(appRequest));
      setDeleteRow(undefined);
      FallRiskAssessementAdultService().show(appRequest)
        .then((resp) => {
          const { data } = resp.data;
          const params = PdfFallRiskAssessementAdultRequest.createPdfRequest(data, appRequest.emr_id, treatment);
          FallRiskAssessementAdultService().pdfv3(params)
            .then(() => {
              dispatch(fetchFallRiskAssessementAdultPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pengkajian-risiko-jatuh-dewasa' })));
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
                <td className="text-center">Waktu Pengkajian</td>
                <td className="text-center">Pengkaji</td>
                <td className="text-center">Unit Pengkaji</td>
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
                        <td>{ row.Nama_Perawat }</td>
                        <td>{ row.Unit_Pengkaji }</td>
                        <td className="d-flex justify-content-center">
                          <Button className="btn-icon rounded-circle me-1" color="info" type="button" onClick={() => setEditRow(row)} >
                            <Eye size={16} />
                          </Button>
                          {
                            unit && unit === row.Unit_Pengkaji && (
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

      <Modal isOpen={!!detailRow} size="xl">
        <ModalHeader toggle={() => setDetailRow(undefined)}>Edit Data Pengkajian Risiko Jatuh Dewasa</ModalHeader>
        <ModalBody>
          {
            detailRow && detailRow.Unit_Pengkaji && detailRow.Unit_Pengkaji === 'Rawat Inap' && (
              <FallRiskAssessementAdultForm  item={detailRow} itemButton='edit' onSuccessSubmit={() => {
                if (treatment) {
                  dispatch(fetchFallRiskAssessementAdult(AppRequest.createFromStore(treatment)));
                  dispatch(fetchFallRiskAssessementAdultPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pengkajian-risiko-jatuh-dewasa' })));
                }
              }} unit={detailRow.Unit_Pengkaji}/>
            )
          }
        </ModalBody>
      </Modal>


      <Modal isOpen={!!editRow} size="xl">
        <ModalHeader toggle={() => setEditRow(undefined)}>Edit Data Pengkajian Risiko Jatuh Dewasa</ModalHeader>
        <ModalBody>
          {
            editRow && editRow.Unit_Pengkaji && editRow.Unit_Pengkaji === 'Rawat Inap' && (
              <FallRiskAssessementAdultForm  item={editRow} itemButton='view' onSuccessSubmit={() => {
                if (treatment) {
                  dispatch(fetchFallRiskAssessementAdult(AppRequest.createFromStore(treatment)));
                  dispatch(fetchFallRiskAssessementAdultPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pengkajian-risiko-jatuh-dewasa' })));
                }
              }} unit={editRow.Unit_Pengkaji}/>
            )
          }
        </ModalBody>
      </Modal>


      <Modal isOpen={!!createNew} size="xl">
        <ModalHeader toggle={() => setCreateNew(undefined)}>Input Data Pengkajian Risiko Jatuh Dewasa</ModalHeader>
        <ModalBody>
          <FallRiskAssessementAdultForm itemButton='create' unit={unit} onSuccessSubmit={() => {
            setCreateNew(undefined);
            if (treatment) {
              dispatch(fetchFallRiskAssessementAdult(AppRequest.createFromStore(treatment)));
              dispatch(fetchFallRiskAssessementAdultPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pengkajian-risiko-jatuh-dewasa' })));
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

export default FallRiskAssessementAdultTable;
