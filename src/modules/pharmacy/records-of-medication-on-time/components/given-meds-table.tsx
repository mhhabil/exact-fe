import { Button, Label, Modal, ModalBody, ModalHeader, Table } from "reactstrap";
import { Edit, Plus, Trash } from "react-feather";
import { Fragment, useState } from "react";
import { IHowToUse, IMedicine } from "@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model";
import { AppRequest } from "@src/shared/request";
import DeleteModal from "@src/shared/modal/components/DeleteModal";
import GivenMedsForm from "./given-meds-form";
import Image from 'next/image';
import { RecordsOfMedicationOnTimeService } from "../services";
import { fetchMeds } from "../stores/records-of-medication-on-time.store";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const GivenMedsTable = (props: { meds: any[], medsList: Array<IMedicine>, htuList: Array<IHowToUse> }) => {
  const { meds, medsList, htuList } = props;
  const { treatment } = useAppSelector(state => state.patient);
  const dispatch = useAppDispatch();

  const [createNew, setCreateNew] = useState<any>(undefined);
  const [editRow, setEditRow] = useState<any>(undefined);
  const [deleteRow, setDeleteRow] = useState<any>(undefined);

  const handleDeleteRow = (row: any) => {
    if (!treatment) {
      return;
    }
    const appRequest = AppRequest.createFromStore(treatment);
    const params = {emr_id: appRequest.emr_id, id: row.ID};
    RecordsOfMedicationOnTimeService()
      .deleteMeds(params)
      .then((resp) => {
        dispatch(fetchMeds(appRequest));
        setDeleteRow(undefined);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  return (
    <Fragment>
      <Label className="fs-4">Daftar Obat Yang Akan Diberikan</Label>
      <Table responsive bordered>
        <thead>
          <tr>
            <th className="fs-6">No</th>
            <th className="fs-6">Nama & Dosis</th>
            <th className="fs-6">Satuan</th>
            <th className="fs-6">Rute</th>
            <th className="fs-6">Aturan Pakai</th>
            <th className="fs-6">Catatan</th>
            <th className="fs-6">TTD Dokter</th>
            <th className="fs-6">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {
            meds && meds.map((item, key: number) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.Nama_Obat}</td>
                <td>{item.Nama_Satuan}</td>
                <td>{item.Rute}</td>
                <td>{item.Nama_AturanPakai}</td>
                <td>{item.Catatan}</td>
                <td>
                  {
                    item.TTD_Dokter ? (
                      <Image
                        alt={`image-${key}`}
                        src={item.TTD_Dokter ?? ''}
                        width='100rem'
                        height='100rem'
                        objectFit="contain"
                      />
                    ) : (
                      null
                    )
                  }
                </td>
                <td>
                  <Fragment>
                    <div className="d-flex justify-content-center">
                      <Button className="btn-icon rounded btn-sm btn-action-cppt me-1" color="warning" type="button" onClick={() => {
                        setEditRow(item);
                      }}>
                        <Edit size={16} />
                      </Button>
                      <Button className="btn-icon rounded btn-sm btn-action-cppt" color="danger" type="button" onClick={() => setDeleteRow(item)}>
                        <Trash size={16} />
                      </Button>
                    </div>
                  </Fragment>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <div className="d-flex align-items-center">
        <Button
          style={{ padding: '4px', marginTop: '8px' }}
          color='primary'
          type='button'
          className='me-1'
          onClick={() => setCreateNew(true)}
        >
          <Plus size={15} />
          Tambah Obat
        </Button>
      </div>
      <Modal isOpen={!!createNew} size="xl">
        <ModalHeader toggle={() => setCreateNew(undefined)}>Tambah Obat</ModalHeader>
        <ModalBody>
          <GivenMedsForm
            onCancel={() => setCreateNew(undefined)}
            {...{medsList, htuList}}
          />
        </ModalBody>
      </Modal>
      <Modal isOpen={!!editRow} size="xl">
        <ModalHeader toggle={() => setEditRow(undefined)}>Update Obat</ModalHeader>
        <ModalBody>
          <GivenMedsForm
            meds={editRow}
            onCancel={() => setEditRow(undefined)}
            {...{medsList, htuList}}
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

export default GivenMedsTable;
