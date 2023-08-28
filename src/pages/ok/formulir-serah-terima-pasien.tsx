import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { fetchPatientHandoverForm } from '@src/modules/outpatient/patient-handover-form/stores/patient-handover-form.store';
import { AppRequest } from '@src/shared/request';
import { useEffect } from 'react';
import PatientHandoverForm from '@src/modules/outpatient/patient-handover-form/components/patient-handover-form';

const FormulirSerahTerimaPasien = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const {patientHandoverForm} = useAppSelector(state => state.patientHandoverFormStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPatientHandoverForm(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.KamarBedah">
      <Card>
        <CardHeader>
          <PageTitleLabel>Formulir Serah Terima Pasien</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {/* <PatientHandoverForm /> */}
              {
                patientHandoverForm && patientHandoverForm.EMR_ID === treatment?.EMR_ID && (
                  <PatientHandoverForm data={patientHandoverForm}/>
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default FormulirSerahTerimaPasien;