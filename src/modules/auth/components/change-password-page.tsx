import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { ChangePassword } from '@src/modules/auth/components';
import { Fragment } from 'react';
import { PageTitleLabel } from '@shared/label';

const ChangePasswordPage = () => {

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <PageTitleLabel>Ubah Password</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="10" className="mb-1">
              <ChangePassword/>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default ChangePasswordPage;
