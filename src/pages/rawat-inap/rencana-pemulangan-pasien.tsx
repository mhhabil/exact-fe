import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AuthorizedPage } from '@src/shared/guardian';
import { PageTitleLabel } from '@src/shared/label';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { AppRequest } from '@src/shared/request';
import { useEffect } from 'react';
import DischargePlanning from '@src/modules/inpatient/discharge-planning/components/discharge-planning-form';
import { fetchDischargePlanning } from '@src/modules/inpatient/discharge-planning/stores/discharge-planning.store';

const RencanaPemulanganPasien = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const {dischargePlanning} = useAppSelector(state => state.dischargePlanningStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchDischargePlanning(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to='read' a='EMR.RawatInap'>
      <Card>
        <CardHeader>
          <PageTitleLabel>Rencana Pemulangan Pasien</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm='12' md='12' xxl='12' className='mb-1'>
              {/* <DischargePlanning/> */}
              {
                dischargePlanning && dischargePlanning.EMR_ID === treatment?.EMR_ID && (
                  <DischargePlanning data={dischargePlanning}/>
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default RencanaPemulanganPasien;
