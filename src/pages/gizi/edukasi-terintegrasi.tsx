import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { AppRequest } from '@src/shared/request';
import { useEffect } from 'react';
import IntegratedEducationNutritionForm from '@src/modules/nutrition/integrated-education-nutrition/components/integrated-education-nutrion-form';
import { fetchIntegratedEducation } from '@src/modules/inpatient/integrated-education/stores/Integrated-education.store';

const EdukasiTerintegrasiGizi = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const {integratedEducation} = useAppSelector(state => state.IntegratedEducationStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchIntegratedEducation(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.Gizi">
      <Card>
        <CardHeader>
          <PageTitleLabel>Edukasi Terintegrasi</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {/* <IntegratedEducationNutritionForm /> */}
              {
                integratedEducation && integratedEducation.EMR_ID === treatment?.EMR_ID && (
                  <IntegratedEducationNutritionForm data={integratedEducation}/>
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default EdukasiTerintegrasiGizi;
