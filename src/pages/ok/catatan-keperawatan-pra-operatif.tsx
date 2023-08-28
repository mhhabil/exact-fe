import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { AppRequest } from "@src/shared/request";
import { AuthorizedPage } from "@src/shared/guardian";
import { PageTitleLabel } from "@src/shared/label";
import PerioperativeNursingRecordsForm from "@src/modules/operating-room/perioperative-nursing-records/components/perioperative-nursing-records-form";
import { fetchPerioperativeNursingRecord } from "@src/modules/operating-room/perioperative-nursing-records/stores/perioperative-nursing-records.store";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useEffect } from "react";

const CatatanKeperawatanPraOperatif = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { perioperativeNursingRecord } = useAppSelector(state => state.perioperativeNursingRecordsStore)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPerioperativeNursingRecord(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);
  return (
    <AuthorizedPage to="read" a="EMR.KamarBedah">
      <Card>
        <CardHeader>
          <PageTitleLabel> Catatan Keperawatan Peri Operatif (Pra Operasi)</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                perioperativeNursingRecord && perioperativeNursingRecord.EMR_ID === treatment?.EMR_ID && (
                  <PerioperativeNursingRecordsForm data={perioperativeNursingRecord} />
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  )
}

export default CatatanKeperawatanPraOperatif;
