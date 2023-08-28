import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { ChangePinForm, NewPinForm } from '@src/modules/account/change-pin/components';
import { Fragment, useEffect } from 'react';
import { PageTitleLabel } from '@shared/label';
import { fetchChangePin } from '@src/modules/account/change-pin/stores/change-pin.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';

const ChangePin = () => {

  const { changePin } = useAppSelector(state => state.changePin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchChangePin())
  }, []);

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <PageTitleLabel>Ganti PIN & Tanda Tangan</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="10" className="mb-1">
              {
                changePin && changePin.ID_Karyawan &&  (
                  <ChangePinForm data={changePin} />
                )
              }
              {
                changePin && !changePin.ID_Karyawan && (
                  <NewPinForm/>
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default ChangePin;
