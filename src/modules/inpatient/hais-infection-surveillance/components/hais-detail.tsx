import { Col, Input, Label, Row } from "reactstrap";
import { Fragment } from "react";
import { IHaisSurveillanceInfectionListDetail } from "../models/hais-infection-surveillance-list.model";
import Image from "next/image";

const HaisDetail = (props: { data: IHaisSurveillanceInfectionListDetail }) => {
  const { data } = props;

  return (
    <Fragment>
      <div className="border p-1 my-1">
        <Row>
          <Col sm='2'>
            <Label>{`Hari ke - ${data?.Hari}`}</Label>
          </Col>
        </Row>
      </div>
      <div className="d-flex justify-content-center">
        <div className="border p-1 mx-1 my-1" style={{ width: '30%' }}>
          <Row className="mb-1">
            <Col>
              <Label className="fs-4 fw-bolder">Ruang Perawatan</Label>
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>KRS</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.KRS && data?.KRS === 1)}
                name='krs'
                disabled
              />
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>Kontrol</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.Kontrol && data?.Kontrol === 1)}
                name='kontrol'
                disabled
              />
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>Pelindung (Kasa)</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.Pelindung_Kasa && data?.Pelindung_Kasa === 1)}
                name='pelindung_kasa'
                disabled
              />
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>Pelindung (Eyeshield)</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.Pelindung_Eyeshield && data?.Pelindung_Eyeshield === 1)}
                name='pelindung_eyeshield'
                disabled
              />
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>Antibiotik Topikal</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.Antibiotik_Topikal && data?.Antibiotik_Topikal === 1)}
                name='antibiotik_topikal'
                disabled
              />
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>Antibiotik Oral</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.Antibiotik_Oral && data?.Antibiotik_Oral === 1)}
                name='antibiotik_oral'
                disabled
              />
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>Mata Kena Air</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.Mata_Air && data?.Mata_Air === 1)}
                name='mata_air'
                disabled
              />
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>Mata Kena Asap</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.Mata_Asap && data?.Mata_Asap === 1)}
                name='mata_asap'
                disabled
              />
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>Mata Kena Debu</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.Mata_Debu && data?.Mata_Debu === 1)}
                name='mata_debu'
                disabled
              />
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>{`GDA > 200`}</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.GDA && data?.GDA === 1)}
                name='gda'
                disabled
              />
            </Col>
          </Row>
        </div>
        <div className="border p-1 mx-1 my-1" style={{ width: '30%' }}>
          <Row className="mb-1">
            <Col>
              <Label className="fs-4 fw-bolder">Identifikasi IDO</Label>
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>Kabur / Visus</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.IDO_Kabur && data?.IDO_Kabur === 1)}
                name='ido_kabur'
                disabled
              />
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>Mata Merah</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.IDO_Merah && data?.IDO_Merah === 1)}
                name='ido_merah'
                disabled
              />
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>Nyeri</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.IDO_Nyeri && data?.IDO_Nyeri === 1)}
                name='ido_nyeri'
                disabled
              />
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>TIO</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.IDO_TIO && data?.IDO_TIO === 1)}
                name='ido_tio'
                disabled
              />
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>Odem Kornea</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.IDO_Odem_Kornea && data?.IDO_Odem_Kornea === 1)}
                name='ido_odem_kornea'
                disabled
              />
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>Flare / Cell</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.IDO_Flare && data?.IDO_Flare === 1)}
                name='ido_flare'
                disabled
              />
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>Hiporpion</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.IDO_Hiporpion && data?.IDO_Hiporpion === 1)}
                name='ido_hiporpion'
                disabled
              />
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>Membran</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.IDO_Membran && data?.IDO_Membran === 1)}
                name='ido_membran'
                disabled
              />
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>Pupil Tidak Bulat</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.IDO_Pupil && data?.IDO_Pupil === 1)}
                name='ido_pupil'
                disabled
              />
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>Kekeruhan Vitreus / USG</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.IDO_Kekeruhan && data?.IDO_Kekeruhan === 1)}
                name='ido_kekeruhan'
                disabled
              />
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>Kultur</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.IDO_Kultur && data?.IDO_Kultur === 1)}
                name='ido_kultur'
                disabled
              />
            </Col>
          </Row>
          <Row className="ms-1 mb-1">
            <Col>
              <Label>Dx Endoflaknitis</Label>
            </Col>
            <Col>
              <Input
                type="checkbox"
                checked={!!(data?.IDO_Dx && data?.IDO_Dx === 1)}
                name='ido_dx'
                disabled
              />
            </Col>
          </Row>
        </div>
      </div>
      <div className="border p-1 my-1">
        <Row>
          <Col sm='2'>
            <Label>Keterangan</Label>
          </Col>
          <Col>
            {data?.Keterangan ?? ''}
          </Col>
        </Row>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <div className="text-center">
          {
            data && data.TTD_Pegawai && data.TTD_Pegawai !== '' && (
              <Image
                src={data.TTD_Pegawai}
                alt='ttd-pegawai'
                width='100rem'
                height='100rem'
                className="mt-1"
              />
            )
          }
        </div>
        <div className="text-center">
          <Label className="text-center">{data?.Nama_Pegawai ?? ''}</Label>
        </div>
      </div>
    </Fragment>
  )
}

export default HaisDetail;
