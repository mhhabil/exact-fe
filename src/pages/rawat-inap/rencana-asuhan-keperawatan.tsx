import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { PatientIdentityInfo } from '@modules/information/patient-identity/components';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

import NursingCarePlanForm from '@modules/inpatient/nursing-care-plan/components/nursing-care-plan-form';
import { fetchNursingCarePlan } from '@modules/inpatient/nursing-care-plan/stores/nursing-care-plan.store';

const NursingCarePlan = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { nursingCarePlan } = useAppSelector(state => state.nursingCarePlan);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (treatment) {
      dispatch(fetchNursingCarePlan(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      <Card>
        <CardHeader>
          <PageTitleLabel>RENCANA ASUHAN KEPERAWATAN</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                nursingCarePlan && treatment?.EMR_ID === nursingCarePlan.EMR_ID &&  (
                  <NursingCarePlanForm data={nursingCarePlan} />
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default NursingCarePlan;

