import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import {
  fetchFallRiskAssessementChildren,
  fetchFallRiskAssessementChildrenPdf,
} from '@modules/inpatient/fall-risk-assessment-children/stores/fall-risk-assessment-children.store';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import FallRiskAssessementChildrenTable from '@modules/inpatient/fall-risk-assessment-children/components/fall-risk-assessment-children-table';
import { FindPdfRequest } from '@shared/pdf';
import { PageTitleLabel } from '@shared/label';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

//FallRiskAssessementChildren
const FallRiskAssessementChildren = () => {
  const { treatment } = useAppSelector(state => state.patient);
  const { fallRiskAssessementChildren } = useAppSelector(state => state.fallRiskAssessementChildren);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchFallRiskAssessementChildren(AppRequest.createFromStore(treatment)));
      dispatch(fetchFallRiskAssessementChildrenPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pengkajian-risiko-jatuh-dewasa' })));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      <Card>
        <CardHeader>
          <PageTitleLabel>Pengkajian Risiko Jatuh Anak</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                fallRiskAssessementChildren && <FallRiskAssessementChildrenTable data={fallRiskAssessementChildren} unit="Rawat Inap" />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default FallRiskAssessementChildren;
