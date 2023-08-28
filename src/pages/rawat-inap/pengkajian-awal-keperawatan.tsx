import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import InpatientInitialNursingAssessmentForm
  from '@modules/inpatient/inpatient-initial-nursing-assessment/components/inpatient-initial-nursing-assessment-form';
import { PageTitleLabel } from '@shared/label';
import { PatientIdentityInfo } from '@modules/information/patient-identity/components';
import { fetchInpatientInitialNursingAssessment } from '@modules/inpatient/inpatient-initial-nursing-assessment/stores/inpatient-initial-nursing-assessment.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';
import {fetchAssessmentUgd} from '@modules/emergency-room/assessment/stores/assessment-ugd.store';

const PengkajianAwalKeperawatan = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { inpatientInitialNursingAssessment } = useAppSelector(state => state.inpatientInitialNursingAssessment);
  const { assessmentUgd } = useAppSelector(state => state.assessmentUgdStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchInpatientInitialNursingAssessment(AppRequest.createFromStore(treatment)));
      dispatch(fetchAssessmentUgd(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      {/*<PatientIdentityInfo />*/}
      <Card>
        <CardHeader>
          <PageTitleLabel>Pengkajian Awal Keperawatan Rawat Inap</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                (inpatientInitialNursingAssessment && treatment?.EMR_ID === inpatientInitialNursingAssessment.EMR_ID && assessmentUgd && treatment?.EMR_ID === assessmentUgd.EMR_ID) &&  (
                  <InpatientInitialNursingAssessmentForm data={inpatientInitialNursingAssessment} assessmentUgd={assessmentUgd} />
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default PengkajianAwalKeperawatan;
