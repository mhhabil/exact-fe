import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { AppRequest } from '@src/shared/request';
import { useEffect } from 'react';
import SummaryOfHospitalizedPatient from '@src/modules/inpatient/summary-of-hospitalized-patients/components/summary-of-hospitalized-patient-form';
import { fetchSummaryOfHospitalizedPatient } from '@src/modules/inpatient/summary-of-hospitalized-patients/stores/summary-of-hospitalized-patient.store';

const RingkasanPasienPulangRawatInap = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const {summaryOfHospitalizedPatient} = useAppSelector(state => state.summaryOfHospitalizedPatientStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchSummaryOfHospitalizedPatient(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      <Card>
        <CardHeader>
          <PageTitleLabel>Ringkasan Pasien Pulang Rawat Inap</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {/* <SummaryOfHospitalizedPatient /> */}
              {
                summaryOfHospitalizedPatient && summaryOfHospitalizedPatient.EMR_ID === treatment?.EMR_ID && (
                  <SummaryOfHospitalizedPatient data={summaryOfHospitalizedPatient}/>
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default RingkasanPasienPulangRawatInap;
