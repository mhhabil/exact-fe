import { Col, Input, Label, Row, Table } from "reactstrap";
import { GivenMedsModel, RecordsOfMedicationOnTimeModel } from "../models/records-of-medication-on-time.model";
import { Fragment } from "react";
import GivenMedsTable from "./given-meds-table";
import RecordsOfMedicationTable from "./records-of-medication-table";

const RecordsOfMedicationOnTimeForm = (props: { data: RecordsOfMedicationOnTimeModel, meds: GivenMedsModel }) => {
  const { data, meds } = props;
  return (
    <Fragment>
      <Row className="mt-1">
        <Col sm='1'>
          <Label>Diagnosis:</Label>
        </Col>
        <Col md='3'>
          <Input
            readOnly
            type="textarea"
            value={data?.rawat_inap?.Diagnosa ?? ''}
          />
        </Col>
        <Col md='1'>
          <Label>RPT:</Label>
        </Col>
        <Col md='3'>
          <Input
            readOnly
            type="textarea"
            value={data?.pengkajian_keperawatan?.Pengkajian_Keperawatan?.RPT ?? ''}
          />
        </Col>
        <Col md='1'>
          <Label>Ruangan:</Label>
        </Col>
        <Col md='3'>
          <Input
            readOnly
            type="text"
            value={data.rawat_inap?.Nama_Kamar ?? ''}
          />
        </Col>
      </Row>
      <Row className="mt-1">
        <Col md='1'>
          <Label>RPO:</Label>
        </Col>
        <Col md='3'>
          <Input
            readOnly
            type="textarea"
            value={data?.pengkajian_keperawatan?.Pengkajian_Keperawatan?.RPO ?? ''}
          />
        </Col>
        <Col md='1'>
          <Label>Alergi:</Label>
        </Col>
        <Col md='3'>
          <Input
            readOnly
            type="textarea"
            value={data.pengkajian_keperawatan && data.pengkajian_keperawatan.Pengkajian_Keperawatan && data.pengkajian_keperawatan.Pengkajian_Keperawatan.Alergi ? data.pengkajian_keperawatan.Pengkajian_Keperawatan.Alergi : data.pengkajian_keperawatan && data.pengkajian_keperawatan.Alergi ? data.pengkajian_keperawatan.Alergi : ''}
          />
        </Col>
        <Col md='1'>
          <Label>Bed:</Label>
        </Col>
        <Col md='3'>
          <Input
            readOnly
            type="text"
            value={data.rawat_inap?.Nama_Tempat_Tidur ?? ''}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          {
            data.form && (
              <RecordsOfMedicationTable
                grouped={data.form_grouped}
                data={data.form}
              />
            )
          }
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <GivenMedsTable
            medsList={meds.obat}
            htuList={meds.aturan_pakai}
            {...{meds: meds.records}}
          />
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <Label className="fs-4">Daftar Obat Yang Sudah Ditebus</Label>
          <Table responsive bordered>
            <thead>
              <tr>
                <th className="fs-6">No</th>
                <th className="fs-6">Nama & Dosis Obat</th>
                <th className="fs-6">Satuan</th>
                <th className="fs-6">Aturan Pakai</th>
              </tr>
            </thead>
            <tbody>
              {
                data && data.obat_tebus && Array.isArray(data.obat_tebus) && data.obat_tebus.map((item: any, key: number) => (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td><pre>{`${item.Nama_Obat}\n${item.Kode_Obat}`}</pre></td>
                    <td>{item.Nama_Satuan}</td>
                    <td>{item.Kode_AturanPakai}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Col>
      </Row>
    </Fragment>
  )
}

export default RecordsOfMedicationOnTimeForm;
