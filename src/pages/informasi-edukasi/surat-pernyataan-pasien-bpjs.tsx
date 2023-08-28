import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { AuthorizedPage } from "@src/shared/guardian";
import { PageTitleLabel } from "@src/shared/label";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { AppRequest } from "@src/shared/request";
import { useEffect } from "react";
import PatientBpjsStatementForm from "@src/modules/information/patient-bpjs-statement/components/patient-bpjs-statement-form";
import { fetchPatientBpjsStatement } from "@src/modules/information/patient-bpjs-statement/stores/patient-bpjs-statement.store";

const SuratPernyataanPasienBpjs = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const {patientBpjsStatement} = useAppSelector(state => state.patientBpjsStatementStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPatientBpjsStatement(AppRequest.createFromStore(treatment)));
      // dispatch(fetchPatientTransferPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-jalan_pemeriksaan-biometri' })));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.Pendaftaran">
      <Card>
        <CardHeader>
          <PageTitleLabel>Surat Pernyataan Pasien BPJS</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm='12' md='12' xxl='12' className="mb-1">
              {/* <PatientBpjsStatementForm/> */}
              {
                patientBpjsStatement && <PatientBpjsStatementForm data={patientBpjsStatement}/>
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  )
}

export default SuratPernyataanPasienBpjs;
