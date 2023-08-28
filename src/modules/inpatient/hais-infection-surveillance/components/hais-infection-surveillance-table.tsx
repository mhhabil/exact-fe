import { Button, Col, Modal, ModalBody, ModalHeader, Row, Table } from "reactstrap";
import { Edit, Eye, Trash } from "react-feather";
import { Fragment, useEffect, useState } from "react";
import { AppRequest } from "@src/shared/request";
import DeleteModal from "@src/shared/modal/components/DeleteModal";
import HaisDetail from "./hais-detail";
import HaisForm from "./hais-form";
import HaisInfectionSurveillanceService from "../services";
import { IHaisSurveillanceInfectionList } from "../models/hais-infection-surveillance-list.model";
import { fetchHaisSurveillanceInfectionList } from "../stores/hais-infection-surveillance.store";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { DateTimeConverter } from "@src/shared/datetime-converter";

const HaisInfectionSurveillanceTable = (props: { data: IHaisSurveillanceInfectionList }) => {
  const { data } = props;
  const { treatment } = useAppSelector(state => state.patient);
  const { pdf } = useAppSelector(state => state.haisSurveillanceInfection);
  const { fontSize } = useAppSelector(state => state.fontSize);
  const { userData } = useAppSelector(state => state.auth);
  const [pdfData, setPdfData] = useState<any>(undefined);
  const dispatch = useAppDispatch();

  const [detailRow, setDetailRow] = useState<any>();
  const [deleteRow, setDeleteRow] = useState<any>();
  const [editRow, setEditRow] = useState<any>();
  const [showCreateForm, setShowCreateForm] = useState<any>();
  const [sort, setSort] = useState<string>('DESC');

  const getDay = (): string => {
    const length = data.records && Array.isArray(data.records) ? data.records.length : 0;
    return `${length}`;
  }

  const handleDeleteRow = (row: any) => {
    if (!treatment) {
      return;
    }
    const params = AppRequest.createFromStore(treatment);
    HaisInfectionSurveillanceService().deleteList({ ...params, id: row.ID })
      .then(() => {
        dispatch(fetchHaisSurveillanceInfectionList(params));
        setDeleteRow(undefined)
      })
      .catch((err) => {
        console.error(err)
        dispatch(fetchHaisSurveillanceInfectionList(params));
        setDeleteRow(undefined)
      });
  }

  return (
    <Fragment>
      <Row id="form" className="mb-2">
        <Col md='12'>
          <div className="d-flex justify-content-end">
            <div>
              <Button className="me-1" color="secondary" type="button" onClick={() => {
                setShowCreateForm(true);
                window?.scrollTo({ top: 0, behavior: 'smooth' });
              }}>Input Data</Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md='12'>
          <Table responsive className="table-cppt">
            <thead>
              <tr className="fw-bolder text-center">
                <td>Hari</td>
                <td>Waktu</td>
                <td>Nama Petugas</td>
                <td>Aksi</td>
              </tr>
            </thead>
            <tbody>
              {
                data && data.records && Array.isArray(data.records) && data.records.map((row, key) => (
                  <tr key={key} className='text-center'>
                    <td>{row.Hari ?? ''}</td>
                    <td>{ `${DateTimeConverter.convertToDateTime(row.Waktu)}` }</td>
                    <td>{row.Nama_Pegawai ?? ''}</td>
                    <td>
                      <div className="justify-content-center">
                        <Button className="btn-icon rounded btn-sm me-1" color="info" type="button" onClick={() => setDetailRow(row)} >
                          <Eye size={16} />
                        </Button>
                        <Button className="btn-icon rounded btn-sm me-1" color="warning" type="button" onClick={() => {
                          setEditRow(row);
                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                        }} >
                          <Edit size={16} />
                        </Button>
                        <Button className="btn-icon rounded btn-sm" color="danger" type="button" onClick={() => setDeleteRow(row)} >
                          <Trash size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Col>
      </Row>
      <Modal isOpen={!!detailRow} size="xl">
        <ModalHeader toggle={() => setDetailRow(undefined)}>Lihat Data</ModalHeader>
        <ModalBody>
          <HaisDetail
            data={detailRow}
          />
        </ModalBody>
      </Modal>
      <Modal isOpen={!!editRow} size="xl">
        <ModalHeader toggle={() => setEditRow(undefined)}>Ubah Data</ModalHeader>
        <ModalBody>
          <HaisForm
            data={editRow}
            action='edit'
            onCancel={() => {
              setEditRow(undefined);
            }}
          />
        </ModalBody>
      </Modal>
      <Modal isOpen={!!showCreateForm} size="xl">
        <ModalHeader toggle={() => setShowCreateForm(undefined)}>Tambah Data</ModalHeader>
        <ModalBody>
          <HaisForm
            action='create'
            day={getDay()}
            onCancel={() => {
              setShowCreateForm(undefined);
            }}
          />
        </ModalBody>
      </Modal>
      <DeleteModal
        isShow={(!!deleteRow)}
        setIsShow={() => setDeleteRow(undefined)}
        onDeleteClick={() => handleDeleteRow(deleteRow)}
      />
    </Fragment>
  )
}

export default HaisInfectionSurveillanceTable;
