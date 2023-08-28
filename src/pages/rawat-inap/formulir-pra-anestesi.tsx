import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import PreAnesthesiaFormForm from '@modules/inpatient/pre-anesthesia-form/components/pre-anesthesia-form-form';
import { fetchPreAnesthesiaForm } from '@modules/inpatient/pre-anesthesia-form/stores/pre-anesthesia-form.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

const FormulirPraAnestesi = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { preAnesthesiaForm } = useAppSelector(state => state.preAnesthesiaForm);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPreAnesthesiaForm(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      <Card>
        <CardHeader>
          <PageTitleLabel>Formulir Pra Anestesi & Sedasi</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                (preAnesthesiaForm && treatment?.EMR_ID === preAnesthesiaForm.EMR_ID) &&  (
                  <PreAnesthesiaFormForm data={preAnesthesiaForm} />
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default FormulirPraAnestesi;
