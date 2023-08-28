import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';

const PdfDash = () => {
  return (
    <AuthorizedPage to="read" a="EMR.PDF">
      <Card>
        <CardHeader>
          <PageTitleLabel>Dashboard PDF</PageTitleLabel>
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

export default PdfDash;
