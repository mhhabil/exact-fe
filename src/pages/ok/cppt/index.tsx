import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';
import { FindPdfRequest } from '@shared/pdf';
import CpptOkTable from '@modules/operating-room/cppt/components/cppt-ok-table';
import {fetchCpptOk, fetchCpptOkPdf} from '@modules/operating-room/cppt/stores/cppt-ok.store';

const CpptOk = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { cppt } = useAppSelector(state => state.cpptOk);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchCpptOk(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.KamarBedah">
      {/*<PatientIdentityInfo />*/}
      <Card>
        <CardHeader>
          <PageTitleLabel>Catatan Perkembangan Pasien Terintegrasi (CPPT)</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                cppt && <CpptOkTable data={cppt} />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default CpptOk;
