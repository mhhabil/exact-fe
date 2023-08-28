import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { fetchMedicalSummary } from '@src/modules/outpatient/medical-summary/stores/medical-summary.store';
import { AppRequest } from '@src/shared/request';
import { useEffect } from 'react';
import MedicalSummaryForm from '@src/modules/outpatient/medical-summary/components/medical-summary-form';

const RingkasanMedisRawatJalan = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const {medicalSummary} = useAppSelector(state => state.medicalSummaryStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchMedicalSummary(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatJalan">
      <Card>
        <CardHeader>
          <PageTitleLabel>Ringkasan Medis Rawat Jalan</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {/* <MedicalSummaryForm /> */}
              {/* {
                medicalSummary && medicalSummary.EMR_ID === treatment?.EMR_ID && (
                  <MedicalSummaryForm data={medicalSummary}/>
                )
              } */}
              {
                medicalSummary && <MedicalSummaryForm data={medicalSummary}/>
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default RingkasanMedisRawatJalan;
