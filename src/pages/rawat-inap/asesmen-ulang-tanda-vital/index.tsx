import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import {
  fetchAssessmentVitalSigns,
  fetchAssessmentVitalSignsPdf,
} from '@modules/inpatient/assessment-vital-signs/stores/assessment-vital-signs.store';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import AssessmentVitalSignsTable from '@modules/inpatient/assessment-vital-signs/components/assessment-vital-signs-table';
import { FindPdfRequest } from '@shared/pdf';
import { PageTitleLabel } from '@shared/label';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

//AssessmentVitalSigns
const AsesmenTandaVital = () => {
  const { treatment } = useAppSelector(state => state.patient);
  const { assessmentVitalSigns } = useAppSelector(state => state.assessmentVitalSigns);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchAssessmentVitalSigns(AppRequest.createFromStore(treatment)));
      // dispatch(fetchAssessmentVitalSignsPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'Edukasi_Harian' })));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      <Card>
        <CardHeader>
          <PageTitleLabel>ASESMEN ULANG TANDA - TANDA VITAL</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                assessmentVitalSigns && <AssessmentVitalSignsTable data={assessmentVitalSigns} unit="Rawat Inap" />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default AsesmenTandaVital;
