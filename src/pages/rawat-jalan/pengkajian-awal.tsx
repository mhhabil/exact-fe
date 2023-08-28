import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { PatientIdentityInfo } from '@modules/information/patient-identity/components';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useEffect } from 'react';
import { AppRequest } from '@src/shared/request';
import { fetchNursingInitialAssessment } from '@src/modules/outpatient/nursing-initial-assessment/stores/nursing-initial-assessment.store';
import getConfig from 'next/config';
import NursingInitialAssessment from '@src/modules/outpatient/nursing-initial-assessment/components/nursing-initial-assessment-form';

const HasilPemeriksaanBiometri = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { nursingInitialAssessment } = useAppSelector(state => state.nursingInitialAssessment)
  const dispatch = useAppDispatch();
  const { publicRuntimeConfig } = getConfig();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchNursingInitialAssessment(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch])
  return (
    <AuthorizedPage to="read" a="EMR.RawatJalan">
      <Card>
        <CardHeader>
          <PageTitleLabel> Pengkajian Awal Keperawatan Rawat Jalan  </PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="10" className="mb-1">
              {
                nursingInitialAssessment && treatment && (treatment.EMR_ID === nursingInitialAssessment.EMR_ID) && <NursingInitialAssessment data={nursingInitialAssessment} />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  )
}

export default HasilPemeriksaanBiometri;