import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { AuthorizedPage } from "@src/shared/guardian";
import { PageTitleLabel } from "@src/shared/label";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { AppRequest } from "@src/shared/request";
import { useEffect } from "react";
import GeneralPatientStatementForm from "@src/modules/information/general-patient-statement/components/general-patient-statement-form";
import { fetchGeneralPatientStatement } from "@src/modules/information/general-patient-statement/stores/general-patient-statement.store";

const SuratPernyataanPasienUmum = () => {
  const { treatment } = useAppSelector(state => state.patient);
  const {generalPatientStatement} = useAppSelector(state => state.generalPatientStatementStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchGeneralPatientStatement(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.Pendaftaran">
      <Card>
        <CardHeader>
          {/* {
            treatment && treatment.Tipe_Pasien && treatment.Tipe_Pasien === 'UMUM' ? (
              <PageTitleLabel>Surat Pernyataan Pasien UMUM</PageTitleLabel>
            ) : (
              <PageTitleLabel>Surat Pernyataan Pasien BPJS</PageTitleLabel>
            )
          } */}
          <PageTitleLabel>Surat Pernyataan Pasien UMUM</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm='12' md='12' xxl='12' className="mb-1">
              {
                generalPatientStatement && <GeneralPatientStatementForm data={generalPatientStatement}/>
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  )
}

export default SuratPernyataanPasienUmum;
