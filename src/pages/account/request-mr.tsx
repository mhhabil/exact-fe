import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { Fragment, useEffect } from 'react';
import MedicalRecordDashboard from '@src/modules/account/request-mr/components/medical-record-role/medical-record-dashboard';
import { PageTitleLabel } from '@shared/label';
import UserDashboard from '@src/modules/account/request-mr/components/user-role/user-dashboard';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';

const RequestMR = () => {

  const { userData } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <PageTitleLabel>Formulir Persetujuan Rekam Medis</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="10" className="mb-1">
              {
                userData && userData.isRM ? (
                  <MedicalRecordDashboard/>
                ) : (
                  <UserDashboard/>
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default RequestMR;
