import { Card, CardBody, CardHeader, Col, Label, Row } from 'reactstrap';
import { AppRequest } from '@src/shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { MedsReconciliationForm } from '@src/modules/pharmacy/meds-reconciliation/components';
import { PageTitleLabel } from '@shared/label';
import { fetchMedsReconciliation } from '@src/modules/pharmacy/meds-reconciliation/stores/meds-reconciliation.store';
import getConfig from 'next/config';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useEffect } from 'react';

const RekonsiliasiObat = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { medsReconciliation } = useAppSelector(state => state.medsReconciliation)
  const dispatch = useAppDispatch();
  const { publicRuntimeConfig } = getConfig();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchMedsReconciliation(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch])
  return (
    <AuthorizedPage to="read" a="EMR.Farmasi">
      <Card>
        <CardHeader>
          <PageTitleLabel>Rekonsiliasi Obat</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col className="mb-1">
              {
                medsReconciliation && treatment && (treatment.EMR_ID === medsReconciliation.EMR_ID) && <MedsReconciliationForm data={medsReconciliation} />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  )
}

export default RekonsiliasiObat;
