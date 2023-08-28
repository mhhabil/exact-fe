import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { AppRequest } from '@src/shared/request';
import { useEffect } from 'react';
import PreparationOfAnestheticEquipmentForm from '@src/modules/operating-room/preparation-of-anesthetic-equipment/components/preparation-of-anesthetic-equipment-form';
import { fetchPreparationOfAnestheticEquipment } from '@src/modules/operating-room/preparation-of-anesthetic-equipment/stores/preparation-of-anesthetic-equipment.store';

const PersiapanPeralatanAnestesi = () => {

  const {treatment} = useAppSelector(state => state.patient);
  const {preparationOfAnestheticEquipment} = useAppSelector(state => state.preparationOfAnestheticEquipmentStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPreparationOfAnestheticEquipment(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to='read' a='EMR.KamarBedah'>
      <Card>
        <CardHeader>
          <PageTitleLabel>Persiapan Peralatan Anestesi</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm='12' md='12' xxl='12' className='mb-1'>
              {/* <PreparationOfAnestheticEquipmentForm /> */}
              {
                preparationOfAnestheticEquipment && preparationOfAnestheticEquipment.EMR_ID === treatment?.EMR_ID && (
                  <PreparationOfAnestheticEquipmentForm data={preparationOfAnestheticEquipment}/>
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  )
}

export default PersiapanPeralatanAnestesi;
