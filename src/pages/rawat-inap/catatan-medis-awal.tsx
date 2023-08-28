import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import InitialMedicalNoteForm from '@modules/inpatient/inpatient-medical-note/components/inpatient-medical-note-form';
import { PageTitleLabel } from '@shared/label';
import { PatientIdentityInfo } from '@modules/information/patient-identity/components';
import { fetchInpatientMedicalNote } from '@modules/inpatient/inpatient-medical-note/stores/inpatient-medical-note.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

const CatatanMedisAwal = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { inpatientMedicalNote } = useAppSelector(state => state.inpatientMedicalNote);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchInpatientMedicalNote(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      {/*<PatientIdentityInfo />*/}
      <Card>
        <CardHeader>
          <PageTitleLabel>Catatan Medis Awal Rawat Inap</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                (inpatientMedicalNote && treatment?.EMR_ID === inpatientMedicalNote.EMR_ID) &&  (
                  <InitialMedicalNoteForm data={inpatientMedicalNote} />
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default CatatanMedisAwal;
