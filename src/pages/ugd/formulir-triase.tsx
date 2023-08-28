import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { TriageForm } from '@modules/emergency-room/triage-form/components';
import { fetchTriageForm } from '@modules/emergency-room/triage-form/stores/triage-form.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

const FormulirTriase = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { triageForm } = useAppSelector(state => state.triageForm);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchTriageForm(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.UGD">
      <Card>
        <CardHeader>
          <PageTitleLabel>Formulir Triase</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="10" className="mb-1">
              {
                triageForm && treatment?.EMR_ID === triageForm.EMR_ID &&  (
                  <TriageForm data={triageForm} />
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  )
}

export default FormulirTriase;
