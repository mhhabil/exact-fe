import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import {
  fetchPainMonitoring,
  fetchPainMonitoringPdf,
} from '@modules/inpatient/pain-monitoring/stores/pain-monitoring.store';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import PainMonitoringTable from '@modules/inpatient/pain-monitoring/components/pain-monitoring-table';
import { FindPdfRequest } from '@shared/pdf';
import { PageTitleLabel } from '@shared/label';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

//PainMonitoring
const PainMonitoring = () => {
  const { treatment } = useAppSelector(state => state.patient);
  const { painMonitoring } = useAppSelector(state => state.painMonitoring);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPainMonitoring(AppRequest.createFromStore(treatment)));
      // dispatch(fetchPainMonitoringPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'Edukasi_Harian' })));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      <Card>
        <CardHeader>
          <PageTitleLabel>Formulir Monitoring Skala Nyeri</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                painMonitoring && <PainMonitoringTable data={painMonitoring} unit="Rawat Inap" />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default PainMonitoring;
