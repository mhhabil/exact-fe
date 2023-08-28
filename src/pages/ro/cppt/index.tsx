import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { CpptRoTable } from '@modules/ro/cppt/components';
import { PageTitleLabel } from '@shared/label';
import { fetchCpptRo, fetchCpptRoPdf } from '@modules/ro/cppt/stores/cppt-ro.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';
import { FindPdfRequest } from '@shared/pdf';
import {fetchCpptOutPatientPdf} from '@modules/outpatient/cppt/stores/cppt-out-patient.store';

const CpptRO = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { cppt } = useAppSelector(state => state.cpptRo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchCpptRo(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RO">
      {/*<PatientIdentityInfo />*/}
      <Card>
        <CardHeader>
          <PageTitleLabel>Catatan Perkembangan Pasien Terintegrasi (CPPT)</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                cppt && <CpptRoTable data={cppt} />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default CpptRO;
