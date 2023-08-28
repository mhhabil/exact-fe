import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { AppRequest } from '@src/shared/request';
import { useEffect } from 'react';
import InformConsentFormInPatient from '@src/modules/inpatient/inform-consent/components/inform-consent-form';
import { fetchApprovalOrRefusalOfAnestheticAction } from '@src/modules/inpatient/inform-consent/stores/approval-or-refusal-of-anesthetic-action.store';

const InformConsent = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const {approvalOrRefusalOfAnestheticAction} = useAppSelector(state => state.approvalOrRefusalOfAnestheticActionStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchApprovalOrRefusalOfAnestheticAction(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.KamarBedah">
      <Card>
        <CardHeader>
          <PageTitleLabel>Formulir Surat Izin Anestesi</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {/* <InformConsentFormInPatient /> */}
              {
                approvalOrRefusalOfAnestheticAction && approvalOrRefusalOfAnestheticAction.EMR_ID === treatment?.EMR_ID && (
                  <InformConsentFormInPatient data={approvalOrRefusalOfAnestheticAction}/>
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default InformConsent;
