import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { AuthorizedPage } from "@src/shared/guardian";
import { PageTitleLabel } from "@src/shared/label";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useEffect } from "react";
import { AppRequest } from "@src/shared/request";
import PerioperativeNursingRecordsForm from "@src/modules/operating-room/perioperative-nursing-records/components/perioperative-nursing-records-form";
import { fetchPerioperativeNursingRecord } from "@src/modules/operating-room/perioperative-nursing-records/stores/perioperative-nursing-records.store";
import PerioperativeNursingRecordsRajalForm from "@src/modules/outpatient/perioperative-nursing-records/components/perioperative-nursing-records-rajal-form";
import { fetchPerioperativeNursingRecordRajal } from "@src/modules/outpatient/perioperative-nursing-records/stores/perioperative-nursing-records-rajal.store";

const CatatanKeperawatanPascaOperatif = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const {perioperativeNursingRecordRajal} = useAppSelector(state => state.perioperativeNursingRecordsRajalStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPerioperativeNursingRecordRajal(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatJalan">
      <Card>
        <CardHeader>
          <PageTitleLabel>CATATAN KEPERAWATAN PRA OPERASI</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                perioperativeNursingRecordRajal && perioperativeNursingRecordRajal.EMR_ID === treatment?.EMR_ID && (
                  <PerioperativeNursingRecordsRajalForm data={perioperativeNursingRecordRajal} />
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  )
}

export default CatatanKeperawatanPascaOperatif;
