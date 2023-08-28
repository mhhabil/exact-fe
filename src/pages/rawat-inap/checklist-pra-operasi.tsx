import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@src/shared/request';
import { AuthorizedPage } from '@shared/guardian';
import ChecklistPraOperasiForm from '@src/modules/outpatient/checklist-pra-operasi/components/checklist-pra-operasi-form';
import { PageTitleLabel } from '@shared/label';
import { fetchChecklistPraOperasi } from '@src/modules/outpatient/checklist-pra-operasi/stores/checklist-pra-operasi.store';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
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
    <AuthorizedPage to="read" a="EMR.RawatInap">
      <Card>
        <CardHeader>
          <PageTitleLabel> Check List Pra Operasi</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
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
