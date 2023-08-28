import { Button, Col, Modal, ModalBody, ModalHeader, Row, Table } from 'reactstrap';
import { Edit, Eye, Trash } from 'react-feather';
import { Fragment, useEffect, useState } from 'react';
import {
  fetchDailyEducation,
  fetchDailyEducationItem,
  fetchDailyEducationPdf,
  handleDailyEducationItem,
} from '@modules/general/daily-education/stores/daily-education.store';
import { AppRequest } from '@shared/request';
import DailyEducationDetail from '@modules/general/daily-education/components/daily-education-detail';
import DailyEducationForm from '@modules/general/daily-education/components/daily-education-form';
import {
  DailyEducationModel,
} from '@modules/general/daily-education/models/daily-education.model';
import { DailyEducationService} from '@modules/general/daily-education/services';
import DeleteModal from '@shared/modal/components/DeleteModal';
import { FindPdfRequest } from '@shared/pdf';
import { PdfDailyEducationRequest } from '@modules/general/daily-education/requests/pdf-daily-education.request';
import getConfig from 'next/config';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const DailyEducationTable = (props: { data: DailyEducationModel, unit: string }) => {

  const { data, unit } = props;

  const { treatment } = useAppSelector(state => state.patient);
  const { pdf, dailyEducationItem } = useAppSelector(state => state.dailyEducation);
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
      dispatch(fetchDailyEducationPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'informasi_edukasi-harian_v3' })));
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
      dispatch(fetchDailyEducationItem({...appRequest, itemId: editRow?.ID ?? deleteRow?.ID ?? validateRow?.ID ?? detailRow?.ID}));
    } else {
      dispatch(handleDailyEducationItem(undefined));
    }
  }, [editRow, deleteRow, validateRow, detailRow]);

  const handleDeleteRow = (row: any) => {
    if (!treatment) {
      return;
    }
    let params: any = AppRequest.createFromStore(treatment);
    params = {...params, item_id: row.ID, emr_id: row.EMR_ID};
    DailyEducationService().delete(params).then(() => {
      const appRequest = AppRequest.createFromStore(treatment);
      dispatch(fetchDailyEducation(appRequest));
      setDeleteRow(undefined);

      DailyEducationService().show(appRequest)
        .then((resp) => {
          const { data } = resp.data;
          const params = PdfDailyEducationRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id);
          DailyEducationService().pdfv3(params)
            .then(() => {
              dispatch(fetchDailyEducationPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'informasi_edukasi-harian_v3' })));
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
                <td className="text-center">Waktu</td>
                <td className="text-center">Pemberi Edukasi</td>
                <td className="text-center">Unit</td>
                <td className="text-center">Aksi</td>
              </tr>
            </thead>
            <tbody>
              {
                data && data.records && Array.isArray(data.records) && (
                  data.records.map((row, key) => {
                    return (
                      <tr key={key} className="fw-bold text-center">
                        <td>{ `${DateTimeConverter.convertToDateTime(row.Waktu)}` }</td>
                        <td>{ row.Nama_Pemberi_Edukasi }</td>
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

      <Modal isOpen={!!dailyEducationItem && !!detailRow} size="xl">
        <ModalHeader toggle={() => setDetailRow(undefined)}>Lihat Data</ModalHeader>
        <ModalBody>
          <DailyEducationDetail item={dailyEducationItem} />
        </ModalBody>
      </Modal>

      <Modal isOpen={!!dailyEducationItem && !!editRow} size="xl">
        <ModalHeader toggle={() => setEditRow(undefined)}>Edit Data</ModalHeader>
        <ModalBody>
          <DailyEducationForm item={dailyEducationItem} onSuccessSubmit={() => {
            setEditRow(undefined);
            if (treatment) {
              dispatch(fetchDailyEducation(AppRequest.createFromStore(treatment)));
              dispatch(fetchDailyEducationPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'informasi_edukasi-harian_v3' })));
            }
          }} unit={unit}/>
        </ModalBody>
      </Modal>

      <Modal isOpen={!!createNew} size="xl">
        <ModalHeader toggle={() => setCreateNew(undefined)}>Create Data</ModalHeader>
        <ModalBody>
          <DailyEducationForm unit={unit} onSuccessSubmit={() => {
            setCreateNew(undefined);
            if (treatment) {
              dispatch(fetchDailyEducation(AppRequest.createFromStore(treatment)));
              dispatch(fetchDailyEducationPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'informasi_edukasi-harian_v3' })));
            }
          }} />
        </ModalBody>
      </Modal>

      <DeleteModal
        isShow={(!!dailyEducationItem && !!deleteRow)}
        setIsShow={() => setDeleteRow(undefined)}
        onDeleteClick={() => handleDeleteRow(deleteRow)} />
    </Fragment>
  )
}

export default DailyEducationTable;
