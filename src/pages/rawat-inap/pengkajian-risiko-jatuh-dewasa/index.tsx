import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import {
  fetchFallRiskAssessementAdult,
  fetchFallRiskAssessementAdultPdf,
} from '@modules/inpatient/fall-risk-assessement-adult/stores/fall-risk-assessement-adult.store';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import FallRiskAssessementAdultTable from '@modules/inpatient/fall-risk-assessement-adult/components/fall-risk-assessement-adult-table';
import { FindPdfRequest } from '@shared/pdf';
import { PageTitleLabel } from '@shared/label';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

//FallRiskAssessementAdult
const FallRiskAssessementAdult = () => {
  const { treatment } = useAppSelector(state => state.patient);
  const { fallRiskAssessementAdult } = useAppSelector(state => state.fallRiskAssessementAdult);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchFallRiskAssessementAdult(AppRequest.createFromStore(treatment)));
      dispatch(fetchFallRiskAssessementAdultPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pengkajian-risiko-jatuh-dewasa' })));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      <Card>
        <CardHeader>
          <PageTitleLabel>Pengkajian Risiko Jatuh Dewasa</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                fallRiskAssessementAdult && <FallRiskAssessementAdultTable data={fallRiskAssessementAdult} unit="Rawat Inap" />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default FallRiskAssessementAdult;
