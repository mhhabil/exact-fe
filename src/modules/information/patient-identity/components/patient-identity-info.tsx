import { Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { useAppSelector } from '@hooks/useAppSelector';

const PatientIdentityInfo = () => {

  const { treatment } = useAppSelector(state => state.patient);

  if (!treatment) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <h4>Identitas Pasien</h4>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col sm="12" md="6">
              <FormGroup className="form-group" row>
                <Label md="4">Nama</Label>
                <Col>
                  <Input id="nama" type="text" value={ treatment.Pasien?.Nama } readOnly />
                </Col>
              </FormGroup>
              <FormGroup className="form-group" row>
                <Label md="4">Nomor MR</Label>
                <Col>
                  <Input id="nomor-mr" type="text" value={ treatment.No_MR } readOnly />
                </Col>
              </FormGroup>
              <FormGroup className="form-group" row>
                <Label md="4">Tanggal Lahir / Umur</Label>
                <Col>
                  <Input id='tanggal-lahir' type="text" value={`${treatment.Pasien?.Tgl_Lahir} / ${treatment.Pasien.Umur}`} readOnly />
                </Col>
              </FormGroup>
              <FormGroup className="form-group" row>
                <Label md="4">Jenis Kelamin</Label>
                <Col>
                  <Input id="jenis-kelamin" type="text" value={ treatment.Pasien?.Jenis_Kelamin } readOnly />
                </Col>
              </FormGroup>
            </Col>
            <Col sm="12" md="6">
              <FormGroup className="form-group" row>
                <Label md="4">No. Telepon</Label>
                <Col>
                  <Input id="no-telepon" type="text" value={ treatment.Pasien?.No_Telepon } readOnly />
                </Col>
              </FormGroup>
              <FormGroup className="form-group" row>
                <Label md="4">Alamat</Label>
                <Col>
                  <Input id="alamat" type="textarea" value={ treatment.Pasien?.Alamat } readOnly />
                </Col>
              </FormGroup>
              <FormGroup className="form-group" row>
                <Label md="4">No. SEP</Label>
                <Col>
                  <Input id='no-sep' type="text" value={ '' } readOnly />
                </Col>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
}

export default PatientIdentityInfo;
