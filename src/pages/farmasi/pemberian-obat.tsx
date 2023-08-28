import { Card, CardBody, CardHeader, Col, Label, Row } from 'reactstrap';
import { fetchMeds, fetchRecordsOfMedicationOnTime } from '@src/modules/pharmacy/records-of-medication-on-time/stores/records-of-medication-on-time.store';
import { AppRequest } from '@src/shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { RecordsOfMedicationOnTimeForm } from '@src/modules/pharmacy/records-of-medication-on-time/components';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useEffect } from 'react';

const RekonsiliasiObat = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { recordsOfMedicationOnTime, meds } = useAppSelector(state => state.recordsOfMedicationOnTime)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchRecordsOfMedicationOnTime(AppRequest.createFromStore(treatment)));
      dispatch(fetchMeds(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch])
  return (
    <AuthorizedPage to="read" a="EMR.Farmasi">
      <Card>
        <CardHeader>
          <PageTitleLabel>Catatan Pemberian Obat Tepat Waktu</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col className="mb-1">
              {
                meds && recordsOfMedicationOnTime && treatment && (treatment.EMR_ID === recordsOfMedicationOnTime.EMR_ID) && <RecordsOfMedicationOnTimeForm data={recordsOfMedicationOnTime} {...{meds}} />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  )
}

export default RekonsiliasiObat;
