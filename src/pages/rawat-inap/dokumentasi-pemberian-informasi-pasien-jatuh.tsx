import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { AppRequest } from '@src/shared/request';
import { useEffect } from 'react';
import SummaryOfHospitalizedPatient from '@src/modules/inpatient/summary-of-hospitalized-patients/components/summary-of-hospitalized-patient-form';
import { fetchSummaryOfHospitalizedPatient } from '@src/modules/inpatient/summary-of-hospitalized-patients/stores/summary-of-hospitalized-patient.store';
import IntegratedEducationForm from '@src/modules/inpatient/integrated-education/components/integrated-education-form';
import { fetchIntegratedEducation } from '@src/modules/inpatient/integrated-education/stores/Integrated-education.store';
import DocumentationOfFallRiskPatient from '@src/modules/inpatient/documentation-of-fall-risk-patient/components/documentation-of-fall-risk-patient';
import { fetchDocumentationOfFallRiskPatient } from '@src/modules/inpatient/documentation-of-fall-risk-patient/stores/documentation-of-fall-risk-patient-store';

const DokumentasiPemberianInformasiPasienJatuh = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const {documentationOfFallRiskPatient} = useAppSelector(state => state.documentationOfFallRiskPatientStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchDocumentationOfFallRiskPatient(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      <Card>
        <CardHeader>
          <PageTitleLabel>Dokumentasi Pemberian Informasi Risiko Pasien Jatuh</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {/* <DocumentationOfFallRiskPatient /> */}
              {
                documentationOfFallRiskPatient && documentationOfFallRiskPatient.EMR_ID === treatment?.EMR_ID && (
                  <DocumentationOfFallRiskPatient data={documentationOfFallRiskPatient}/>
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default DokumentasiPemberianInformasiPasienJatuh;
