import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { FallRiskAssessmentForm } from '@src/modules/outpatient/fall-risk-assessment/components';
import Link from 'next/link';
import { PageTitleLabel } from '@shared/label';
import { fetchFallRiskAssessment } from '@src/modules/outpatient/fall-risk-assessment/stores/fall-risk-assessment.store';
import getConfig from 'next/config';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

const RisikoJatuh = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { fallRiskAssessment } = useAppSelector(state => state.fallRiskAssessment)
  const dispatch = useAppDispatch();
  const { publicRuntimeConfig } = getConfig();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchFallRiskAssessment(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.Pendaftaran">
      <Card>
        <CardHeader>
          <PageTitleLabel>Risiko Jatuh pada Pasien Rawat Jalan (Skala Up And Go)</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="10" className="mb-1">
              {
                fallRiskAssessment && treatment && (treatment.EMR_ID === fallRiskAssessment.EMR_ID) && <FallRiskAssessmentForm data={fallRiskAssessment} />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default RisikoJatuh;
