import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@src/shared/request';
import MainAnestheticStatus from '@src/modules/operating-room/anesthetic-status/components/main-anesthetic-status';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { fetchAnestheticStatus } from '@src/modules/operating-room/anesthetic-status/stores/anesthetic-status.store';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useEffect } from 'react';

const AnestheticStatus = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const {anestheticStatus} = useAppSelector(state => state.anestheticStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchAnestheticStatus(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.KamarBedah">
      <Card>
        <CardHeader>
          <PageTitleLabel>Status Anestesi</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                anestheticStatus && anestheticStatus.EMR_ID === treatment?.EMR_ID && (
                  <MainAnestheticStatus data={anestheticStatus} register={undefined} errors={undefined} processing={false} setValue={undefined} control={undefined} unregister={undefined} />
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default AnestheticStatus;