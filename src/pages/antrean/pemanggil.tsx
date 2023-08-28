import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { Fragment } from 'react';

import { QueueDisplay, QueueForm, QueueWaitingPatientsTable } from '@modules/queue/components';
import { PageTitleLabel } from '@shared/label';

export default function Queue() {

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <PageTitleLabel>Pemanggil Antrean</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="6" sm="12" className="mb-1">
              <QueueForm />
            </Col>
            <Col md="6" sm="12" className="mb-1">
              <Row className="justify-content-center">
                <Col md="8" sm="12">
                  <QueueDisplay />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <QueueWaitingPatientsTable />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  )
}
