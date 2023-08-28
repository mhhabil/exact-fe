import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { Fragment } from 'react';
import { PageTitleLabel } from '@shared/label';
import { PatientDetail } from '@modules/site/patient-list/components';

export default function DashboardHome() {

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <PageTitleLabel>Home</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="12">
              <PatientDetail />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  )
}
