import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { OperativeFairyNursingNotesForm } from '@src/modules/operating-room/operative-fairy-nursing-notes/components';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useEffect } from 'react';
import { AppRequest } from '@src/shared/request';
import { fetchOperativeFairyNursingNotes } from '@src/modules/operating-room/operative-fairy-nursing-notes/stores/operative-fairy-nursing-notes.store';


const CatatanKeperawatanIntraOperasi = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { operativeFairyNursingNotes } = useAppSelector(state => state.operativeFairyNursingNotes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchOperativeFairyNursingNotes(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.KamarBedah">
      <Card>
        <CardHeader>
          <PageTitleLabel>Catatan Keperawatan Peri Operatif (Intra dan Pasca Operatif)</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                operativeFairyNursingNotes && operativeFairyNursingNotes.EMR_ID === treatment?.EMR_ID && (
                  <OperativeFairyNursingNotesForm data={operativeFairyNursingNotes}/>
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default CatatanKeperawatanIntraOperasi;
