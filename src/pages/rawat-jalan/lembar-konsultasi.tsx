import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { ConsultationSheetTable } from '@src/modules/outpatient/consultation-sheet/components';
import { PageTitleLabel } from '@shared/label';
import { fetchConsultationSheet } from '@src/modules/outpatient/consultation-sheet/stores/consultation-sheet.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

const LembarKonsultasi = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { consultations } = useAppSelector(state => state.consultationSheet);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchConsultationSheet(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatJalan">
      <Card>
        <CardHeader>
          <PageTitleLabel>Lembar Konsultasi</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                consultations && <ConsultationSheetTable data={consultations}/>
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default LembarKonsultasi;
