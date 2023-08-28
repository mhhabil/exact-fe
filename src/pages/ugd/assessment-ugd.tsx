import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useEffect } from 'react';
import { AppRequest } from '@src/shared/request';
import AssesmentUgdForm from '@src/modules/emergency-room/assessment/components/assessment-ugd-form';
import { fetchAssessmentUgd } from '@src/modules/emergency-room/assessment/stores/assessment-ugd.store';

const AssesmenUgd = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { assessmentUgd } = useAppSelector(state => state.assessmentUgdStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchAssessmentUgd(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.UGD">
      <Card>
        <CardHeader>
          <PageTitleLabel> Assesment UGD </PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {/* <AssesmentUgdForm /> */}
              {
                assessmentUgd && assessmentUgd.EMR_ID === treatment?.EMR_ID && (
                  <AssesmentUgdForm data={assessmentUgd}/>
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  )
}

export default AssesmenUgd;
