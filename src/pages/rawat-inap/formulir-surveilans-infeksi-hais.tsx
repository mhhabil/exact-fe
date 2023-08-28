import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { fetchHaisSurveillanceInfectionForm, fetchHaisSurveillanceInfectionList } from '@src/modules/inpatient/hais-infection-surveillance/stores/hais-infection-surveillance.store';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import HaisInfectionSurveillance from '@src/modules/inpatient/hais-infection-surveillance/components/hais-infection-surveillance';
import { PageTitleLabel } from '@shared/label';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

const FormulirSurveilansInfeksiHais = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { haisSurveillanceForm, haisSurveillanceList } = useAppSelector(state => state.haisSurveillanceInfection);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchHaisSurveillanceInfectionForm(AppRequest.createFromStore(treatment)));
      dispatch(fetchHaisSurveillanceInfectionList(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      <Card>
        <CardHeader>
          <PageTitleLabel>Formulir Surveilans Infeksi HAIs</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                (haisSurveillanceList && haisSurveillanceForm && treatment?.EMR_ID === haisSurveillanceForm.EMR_ID && treatment?.EMR_ID === haisSurveillanceList.EMR_ID) &&  (
                  <HaisInfectionSurveillance
                    formData={haisSurveillanceForm}
                    listData={haisSurveillanceList}
                  />
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default FormulirSurveilansInfeksiHais;
