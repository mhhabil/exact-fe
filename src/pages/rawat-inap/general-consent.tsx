import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { GeneralConsentForm } from '@modules/information/general-consent/components';
import { PageTitleLabel } from '@shared/label';
import { fetchGeneralConsent } from '@modules/information/general-consent/stores/general-consent.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

const GeneralConsent = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { generalConsent } = useAppSelector(state => state.generalConsent);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchGeneralConsent(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      <Card>
        <CardHeader>
          <PageTitleLabel>General Consent</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="10" className="mb-1">
              {
                generalConsent && treatment?.EMR_ID === generalConsent.EMR_ID &&  (
                  <GeneralConsentForm data={generalConsent} />
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  )
}

export default GeneralConsent;
