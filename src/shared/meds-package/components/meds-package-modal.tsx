import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row, Spinner, Table } from "reactstrap";
import { IDetails, IMedsPackage } from "../models/meds-package.model";
import { IHowToUse, IMedicine } from "@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface IExtraDetails extends IDetails {
  Nama_Obat: string;
  Satuan: string;
  ID_Obat: string;
  ID_AturanPakai: any;
  Kode_AturanPakai: string;
  Nama_Satuan: string;
}

const MedsPackageModal = (props: { data: Array<IMedsPackage>, isOpen: boolean, onClose: any, allMeds: Array<IMedicine>, allHtu: Array<IHowToUse>, onSelect: any }) => {
  const { data, isOpen, onClose, allMeds, allHtu, onSelect } = props;

  const [processing, setProcessing] = useState<boolean>(false)
  const [meds, setMeds] = useState<IExtraDetails[] | undefined>(undefined);
  const [selectedRow, setSelectedRow] = useState<number | undefined>(undefined)
  const [packageData, setPackageData] = useState<Array<IMedsPackage>>(data);

  const { register, handleSubmit } = useForm({
    mode: 'onChange',
  })

  const handleClickPackage = (details: IDetails[], index: number) => {
    setSelectedRow(index);
    const extraDetails: Array<IExtraDetails> = details.map((item: IDetails) => {
      const selectedMed = allMeds.find((medicine: IMedicine) => medicine.Kode_Inventory === item.Kode_Obat);
      const selectedHtu = allHtu.find((htu: IHowToUse) => htu.Nama === item.Aturan_Pakai)
      return {
        Jumlah: item.Jumlah,
        Kode_Obat: item.Kode_Obat,
        Nama_Obat: selectedMed ? selectedMed.Nama_Inventory : '',
        Satuan: selectedMed ? selectedMed.Nama_Satuan : '',
        ID_Obat: selectedMed ? selectedMed.Kode_Inventory : '',
        Nama_Satuan: selectedMed ? selectedMed.Nama_Satuan : '',
        ID_AturanPakai: selectedHtu ? selectedHtu.ID_AturanPakai : '',
        Kode_AturanPakai: selectedHtu ? selectedHtu.Kode : '',
        Aturan_Pakai: item.Aturan_Pakai,
      }
    })
    setMeds(extraDetails);
  }

  const getRowClass = (index: number) => {
    if (index === selectedRow) {
      return 'bg-primary'
    }
    return 'cursor-pointer'
  }

  const handleSearchForm = (e: any) => {
    const packageName = e.target.form[0].value;
    if (packageName && packageName !== '') {
      setProcessing(true)
      const searchQuery = packageName.toLowerCase()
      const filtered = data.filter((item: IMedsPackage) => item.Nama_Paket.toLowerCase().indexOf(searchQuery) >= 0);
      setPackageData(filtered);
      setProcessing(false);
    } else {
      setPackageData(data);
    }
    setSelectedRow(undefined);
    setMeds(undefined)
  }

  return (
    <Modal isOpen={isOpen} className='modal-dialog modal-fullscreen'>
      <ModalHeader toggle={() => onClose()}>Paket Obat</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit(handleSearchForm)}>
          <FormGroup className="form-group align-items-center" row>
            <Col className="d-flex align-items-center">
              <Label>Nama Paket/Keterangan</Label>
              <Input
                type="text"
                name="package_name"
                innerRef={register({ required: true })}
              />
            </Col>
            <Col>
              {
                processing ? (
                  <Button size="sm" type="button" disabled color="info">
                    { 'Processing' }
                    {
                      <Spinner
                        color="light"
                        style={{ width: '1rem', height: '1rem' }}
                      />
                    }
                  </Button>
                ) : (
                  <Button size="sm" type="button" color="info" onClick={(e: any) => handleSearchForm(e)}>Cari</Button>
                )
              }
            </Col>
          </FormGroup>
          <FormGroup className="form-group mt-2" row>
            <Label>Daftar Paket</Label>
            <Table bordered>
              <thead>
                <tr>
                  <th className="text-center">Nama Paket</th>
                  <th className="text-center">Keterangan</th>
                </tr>
              </thead>
            </Table>
            <div style={{ maxHeight: '300px', overflowY: 'auto', marginTop: '-14px' }}>
              <Table bordered>
                <tbody>
                  {
                    packageData && packageData.map((item: IMedsPackage, key: number) => (
                      <tr
                        key={key}
                        className={getRowClass(key)}
                        onClick={() => handleClickPackage(item.Detil, key)}
                      >
                        <td style={{ width: '49.75%' }}>{item.Nama_Paket}</td>
                        <td style={{ width: '50.25%' }}>{item.Keterangan}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
            </div>
          </FormGroup>
          <FormGroup className="form-group mt-2" row>
            <Label>Daftar Obat</Label>
            <Table responsive>
              <thead>
                <tr>
                  <th>Kode Obat</th>
                  <th>Nama Obat</th>
                  <th>Satuan</th>
                  <th>Jumlah</th>
                  <th>Aturan Pakai</th>
                </tr>
              </thead>
              <tbody>
                {
                  meds && Array.isArray(meds) && meds.map((item: IExtraDetails, key: number) => (
                    <tr key={key}>
                      <td>{item.Kode_Obat}</td>
                      <td>{item.Nama_Obat}</td>
                      <td>{item.Satuan}</td>
                      <td>{item.Jumlah}</td>
                      <td>{item.Aturan_Pakai}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </FormGroup>
          <FormGroup className="d-flex mb-0 justify-content-center">
            {
              meds ? (
                <Button
                  type="button"
                  color="success"
                  className="me-2"
                  onClick={() => {
                    onSelect(meds)
                    onClose()
                  }}
                >
                  Pilih
                </Button>
              ) : (
                <Button
                  type="button"
                  color="success"
                  className="me-2"
                  disabled
                >
                  Pilih
                </Button>
              )
            }
            <Button
              type="button"
              color="danger"
              onClick={() => onClose()}
            >
              Batal
            </Button>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default MedsPackageModal;
