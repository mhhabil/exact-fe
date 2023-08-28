import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import  MainDrugSideEffects  from '@modules/pharmacy/drug-side-effects/components/main-drug-side-effects';
import { PageTitleLabel } from '@shared/label';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';
import { fetchDrugSideEffects } from '@modules/pharmacy/drug-side-effects/stores/drug-side-effects.store';


const DrugSideEffects = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { drugSideEffects } = useAppSelector(state => state.drugSideEffects);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (treatment) {
      dispatch(fetchDrugSideEffects(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.Farmasi">
      <Card>
        <CardHeader>
          <PageTitleLabel>Monitoring Efek Samping Obat</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                drugSideEffects && treatment?.EMR_ID === drugSideEffects.EMR_ID &&  (
                  <MainDrugSideEffects data={drugSideEffects} register={undefined} errors={undefined} processing={false} setValue={undefined} control={undefined} unregister={undefined} />
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default DrugSideEffects;

