import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { PatientIdentityInfo } from '@modules/information/patient-identity/components';
import { SafetyChecklistForm } from '@src/modules/operating-room/surgery-patient-safety-checklist/components';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useEffect } from 'react';
import { AppRequest } from '@src/shared/request';
import { fetchSafetyChecklist } from '@src/modules/operating-room/surgery-patient-safety-checklist/stores/safety-checklist.store';


const ChecklistKeselamatanPasienOperasi = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { safetyChecklist } = useAppSelector(state => state.safetyChecklist);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchSafetyChecklist(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.KamarBedah">
      <Card>
        <CardHeader>
          <PageTitleLabel> Checklist Keselamatan Pasien Operasi (CKPO)</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="10" className="mb-1">
              {
                safetyChecklist && safetyChecklist.EMR_ID === treatment?.EMR_ID && (
                  <SafetyChecklistForm data={safetyChecklist}/>
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default ChecklistKeselamatanPasienOperasi;
