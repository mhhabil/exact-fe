import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';
import CpptEmergencyRoomTable from '@src/modules/emergency-room/cppt/components/cppt-emergency-room-table';
// import {fetchCpptOk, fetchCpptOkPdf} from '@modules/operating-room/cppt/stores/cppt-ok.store';
import { fetchCpptEmergencyRoom, fetchCpptEmergencyRoomPdf } from '@src/modules/emergency-room/cppt/stores/cppt-emergency-room.store';

const CpptUgd = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { cppt } = useAppSelector(state => state.cpptEmergencyRoomStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchCpptEmergencyRoom(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.UGD">
      {/*<PatientIdentityInfo />*/}
      <Card>
        <CardHeader>
          <PageTitleLabel>Catatan Perkembangan Pasien Terintegrasi (CPPT)</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                cppt && <CpptEmergencyRoomTable data={cppt} />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default CpptUgd;
