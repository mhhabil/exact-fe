import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import InitialNutritionalAssessmentForm
  from '@modules/inpatient/initial-nutritional-assessment/components/initial-nutritional-assessment-form';
import { PageTitleLabel } from '@shared/label';
import { fetchInitialNutritionalAssessment } from '@modules/inpatient/initial-nutritional-assessment/stores/initial-nutritional-assessment.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

const PengkajianAwalGizi = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { initialNutritionalAssessment } = useAppSelector(state => state.initialNutritionalAssessment);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchInitialNutritionalAssessment(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      <Card>
        <CardHeader>
          <PageTitleLabel>Pengkajian Awal Gizi Rawat Inap</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                (initialNutritionalAssessment && treatment?.EMR_ID === initialNutritionalAssessment.EMR_ID) && (
                  <InitialNutritionalAssessmentForm data={initialNutritionalAssessment} />
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default PengkajianAwalGizi;
