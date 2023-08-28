import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import InpatientInitialNursingAssessmentChildrenForm
  from '@modules/inpatient/inpatient-initial-nursing-assessment-children/components/inpatient-initial-nursing-assessment-children-form';
import { PageTitleLabel } from '@shared/label';
import { fetchAssessmentUgd } from '@modules/emergency-room/assessment/stores/assessment-ugd.store';
import { fetchInpatientInitialNursingAssessmentChildren } from '@modules/inpatient/inpatient-initial-nursing-assessment-children/stores/inpatient-initial-nursing-assessment-children.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

const PengkajianAwalKeperawatanAnak = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { inpatientInitialNursingAssessmentChildren } = useAppSelector(state => state.inpatientInitialNursingAssessmentChildren);
  const { assessmentUgd } = useAppSelector(state => state.assessmentUgdStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchInpatientInitialNursingAssessmentChildren(AppRequest.createFromStore(treatment)));
      dispatch(fetchAssessmentUgd(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      {/*<PatientIdentityInfo />*/}
      <Card>
        <CardHeader>
          <PageTitleLabel>Pengkajian Awal Keperawatan Rawat Inap Anak</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                (inpatientInitialNursingAssessmentChildren && treatment?.EMR_ID === inpatientInitialNursingAssessmentChildren.EMR_ID && assessmentUgd && treatment?.EMR_ID === assessmentUgd.EMR_ID) &&  (
                  <InpatientInitialNursingAssessmentChildrenForm data={inpatientInitialNursingAssessmentChildren} assessmentUgd={assessmentUgd} />
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default PengkajianAwalKeperawatanAnak;
