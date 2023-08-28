import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import {
  fetchImplementationRiskPatients,
  fetchImplementationRiskPatientsPdf,
} from '@modules/inpatient/implementation-risk-patients/stores/implementation-risk-patients.store';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import ImplementationRiskPatientsTable from '@modules/inpatient/implementation-risk-patients/components/implementation-risk-patients-table';
import { FindPdfRequest } from '@shared/pdf';
import { PageTitleLabel } from '@shared/label';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

//ImplementationRiskPatients
const ImplementationRiskPatients = () => {
  const { treatment } = useAppSelector(state => state.patient);
  const { implementationRiskPatients } = useAppSelector(state => state.implementationRiskPatients);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchImplementationRiskPatients(AppRequest.createFromStore(treatment)));
      // dispatch(fetchImplementationRiskPatientsPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'Edukasi_Harian' })));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      <Card>
        <CardHeader>
          <PageTitleLabel>IMPLEMENTASI PASIEN RESIKO JATUH</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                implementationRiskPatients && <ImplementationRiskPatientsTable data={implementationRiskPatients} unit="Rawat Inap" />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default ImplementationRiskPatients;
