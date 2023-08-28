import { Button, Col, Modal, ModalBody, ModalHeader, Row, Table } from 'reactstrap';
import { Edit, Eye, Trash } from 'react-feather';
import { Fragment, useEffect, useState } from 'react';
import {
  fetchAssessmentVitalSigns,
  fetchAssessmentVitalSignsItem,
  fetchAssessmentVitalSignsPdf,
  handleAssessmentVitalSignsItem,
} from '@modules/inpatient/assessment-vital-signs/stores/assessment-vital-signs.store';
import {
  PdfAssessmentVitalSignsRequest,
} from '@modules/inpatient/assessment-vital-signs/requests/pdf-assessment-vital-signs.request';
import { AppRequest } from '@shared/request';
import AssessmentVitalSignsForm from '@modules/inpatient/assessment-vital-signs/components/assessment-vital-signs-form';
import {
  AssessmentVitalSignsModel,
} from '@modules/inpatient/assessment-vital-signs/models/assessment-vital-signs.model';
import { AssessmentVitalSignsService} from '@modules/inpatient/assessment-vital-signs/services';
import DeleteModal from '@shared/modal/components/DeleteModal';
import { FindPdfRequest } from '@shared/pdf';
import getConfig from 'next/config';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import AssessmentVitalSignsFormDetail from './assessment-vital-signs-form-detail';

const AssessmentVitalSignsTable = (props: { data: AssessmentVitalSignsModel, unit: string }) => {

  const { data, unit } = props;
  const { treatment } = useAppSelector(state => state.patient);
  const { pdf, assessmentVitalSignsItem } = useAppSelector(state => state.assessmentVitalSigns);
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
      dispatch(fetchAssessmentVitalSignsPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_asesmen-ulang-tanda-vital' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
    }
    setPdfData(pdf);
  }, [pdf])

  const handleDeleteRow = (row: any) => {
    if (!treatment) {
      return;
    }
    let params: any = AppRequest.createFromStore(treatment);
    params = {...params, item_id: row.ID, emr_id: treatment.EMR_ID};
    AssessmentVitalSignsService().delete(params).then(() => {
      const appRequest = AppRequest.createFromStore(treatment);
      dispatch(fetchAssessmentVitalSigns(appRequest));
      setDeleteRow(undefined);
      AssessmentVitalSignsService().show(appRequest)
        .then((resp) => {
          const { data } = resp.data;
          const params = PdfAssessmentVitalSignsRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id);
          AssessmentVitalSignsService().pdfv3(params)
            .then(() => {
              dispatch(fetchAssessmentVitalSignsPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_asesmen-ulang-tanda-vital' })));
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
                <td className="text-center">Waktu Asesmen</td>
                <td className="text-center">Nama Perawat</td>
                <td className="text-center">Unit Perawat</td>
                <td className="text-center">Aksi</td>
              </tr>
            </thead>
            <tbody>
              {
                data && data.records && Array.isArray(data.records) && (
                  data.records.map((row, key) => {
                    return (
                      <tr key={key} className="fw-bold text-center">
                        <td>{ row.Waktu_Asesmen }</td>
                        <td>{ row.Nama_Petugas }</td>
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

      <Modal isOpen={!!editRow} size="xl">
        <ModalHeader toggle={() => setEditRow(undefined)}>Lihat Data</ModalHeader>
        <ModalBody>
          {
            editRow && editRow.Unit && editRow.Unit === 'Rawat Inap' && (
              <AssessmentVitalSignsForm  item={editRow} onSuccessSubmit={() => {
                if (treatment) {
                  dispatch(fetchAssessmentVitalSigns(AppRequest.createFromStore(treatment)));
                  dispatch(fetchAssessmentVitalSignsPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_asesmen-ulang-tanda-vital' })));
                }
              }} unit={editRow.Unit}/>
            )
          }
        </ModalBody>
      </Modal>

      <Modal isOpen={!!detailRow} size="xl">
        <ModalHeader toggle={() => setDetailRow(undefined)}>Detail Data</ModalHeader>
        <ModalBody>
          {
            detailRow && detailRow.Unit && detailRow.Unit === 'Rawat Inap' && (
              <AssessmentVitalSignsFormDetail item={detailRow} onSuccessSubmit={() => {
                if (treatment) {
                  dispatch(fetchAssessmentVitalSigns(AppRequest.createFromStore(treatment)));
                  dispatch(fetchAssessmentVitalSignsPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_asesmen-ulang-tanda-vital' })));
                }
              }} unit={detailRow.Unit}/>
            )
          }
        </ModalBody>
      </Modal>

      <Modal isOpen={!!createNew} size="xl">
        <ModalHeader toggle={() => setCreateNew(undefined)}>Input Data Asesmen Tanda Tanda Vital</ModalHeader>
        <ModalBody>
          <AssessmentVitalSignsForm unit={unit} onSuccessSubmit={() => {
            setCreateNew(undefined);
            if (treatment) {
              dispatch(fetchAssessmentVitalSigns(AppRequest.createFromStore(treatment)));
              dispatch(fetchAssessmentVitalSignsPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_asesmen-ulang-tanda-vital' })));
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

export default AssessmentVitalSignsTable;
