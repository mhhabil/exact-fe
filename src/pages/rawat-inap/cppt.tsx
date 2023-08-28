import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { fetchCpptInpatient, fetchInpatientVisits } from '@src/modules/inpatient/cppt/stores/cppt-inpatient.store';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import CpptInpatientTable from '@src/modules/inpatient/cppt/components/cppt-inpatient-table';
import { PageTitleLabel } from '@shared/label';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

const CpptRawatInap = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { cppt, visits } = useAppSelector(state => state.cpptInpatient);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchCpptInpatient(AppRequest.createFromStore(treatment)));
      dispatch(fetchInpatientVisits(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      {/*<PatientIdentityInfo />*/}
      <Card>
        <CardHeader>
          <PageTitleLabel>Catatan Perkembangan Pasien Terintegrasi (CPPT)</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                cppt && visits && <CpptInpatientTable data={cppt} visits={visits} />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default CpptRawatInap;
