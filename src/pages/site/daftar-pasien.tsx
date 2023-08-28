import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { PatientTable, SearchPatientForm, SelectServiceForm } from '@modules/site/patient-list/components';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';

const DaftarPasien = () => {
  return (
    <AuthorizedPage to="read" a="EMR.Pendaftaran">
      <Card>
        <CardHeader>
          <PageTitleLabel>Pilih Pasien</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="8" className="mb-1">
              <SearchPatientForm />
            </Col>
            <Col sm="12" md="12" xxl="4" className="mb-1">
              <SelectServiceForm />
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              <PatientTable />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  )
}

export default DaftarPasien;
