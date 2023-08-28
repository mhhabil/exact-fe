import { Card, CardBody, CardHeader, Col, Label, Row } from 'reactstrap';
import { AppRequest } from '@src/shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { InformConsentForm } from '@src/modules/outpatient/inform-consent/components';
import { PageTitleLabel } from '@shared/label';
import { fetchInformConsent } from '@src/modules/outpatient/inform-consent/stores/inform-consent.store';
import getConfig from 'next/config';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useEffect } from 'react';

const InformConsent = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { informConsent } = useAppSelector(state => state.informConsent)
  const dispatch = useAppDispatch();
  const { publicRuntimeConfig } = getConfig();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchInformConsent(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch])
  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      <Card>
        <CardHeader>
          <PageTitleLabel> Formulir Persetujuan Tindakan Kedokteran </PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="10" className="mb-1">
              {
                informConsent && treatment && (treatment.EMR_ID === informConsent.EMR_ID) && <InformConsentForm data={informConsent} />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  )
}

export default InformConsent;
