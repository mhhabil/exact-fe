import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { PatientIdentityInfo } from '@modules/information/patient-identity/components';

const DaftarVisitDokter = () => {
  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      <PatientIdentityInfo />
      <Card>
        <CardHeader>
          <PageTitleLabel>Daftar Visit Dokter</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="10" className="mb-1">

            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default DaftarVisitDokter;
