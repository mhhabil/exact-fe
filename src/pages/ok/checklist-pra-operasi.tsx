import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { PatientIdentityInfo } from '@modules/information/patient-identity/components';
import { SafetyChecklistForm } from '@src/modules/operating-room/surgery-patient-safety-checklist/components';
import ChecklistPraOperasiForm from '@src/modules/outpatient/checklist-pra-operasi/components/checklist-pra-operasi-form';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { fetchChecklistPraOperasi } from '@src/modules/outpatient/checklist-pra-operasi/stores/checklist-pra-operasi.store';
import { AppRequest } from '@src/shared/request';
import { useEffect } from 'react';

const ChecklistPraOperasi = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const {checklistPraOperasi} = useAppSelector(state => state.checklistPraOperasiStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchChecklistPraOperasi(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.KamarBedah">
      <Card>
        <CardHeader>
          <PageTitleLabel> Check List Pra Operasi</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {/* <ChecklistPraOperasiForm /> */}
              {
                checklistPraOperasi && checklistPraOperasi.EMR_ID === treatment?.EMR_ID && (
                  <ChecklistPraOperasiForm data={checklistPraOperasi}/>
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default ChecklistPraOperasi;
