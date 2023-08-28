import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import CpptNutritionTable from '@src/modules/nutrition/cppt/components/cppt-nutrition-table';
import { PageTitleLabel } from '@shared/label';
import { fetchCpptNutrition } from '@src/modules/nutrition/cppt/stores/cppt-nutrition.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

const CpptGizi = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { cppt } = useAppSelector(state => state.cpptNutrition);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchCpptNutrition(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.Gizi">
      {/*<PatientIdentityInfo />*/}
      <Card>
        <CardHeader>
          <PageTitleLabel>Catatan Perkembangan Pasien Terintegrasi (CPPT)</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                cppt &&  <CpptNutritionTable data={cppt} />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default CpptGizi;
