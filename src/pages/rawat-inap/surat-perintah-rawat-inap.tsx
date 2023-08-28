import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import HospitalizationLetterForm from '@modules/inpatient/hospitalization-letter/components/hospitalization-letter-form';
import { PageTitleLabel } from '@shared/label';
import { PatientIdentityInfo } from '@modules/information/patient-identity/components';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

import { fetchHospitalizationLetter } from '@modules/inpatient/hospitalization-letter/stores/hospitalization-letter.store';


const HospitalizationLetter = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { hospitalizationLetter } = useAppSelector(state => state.hospitalizationLetter);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (treatment) {
      dispatch(fetchHospitalizationLetter(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      <Card>
        <CardHeader>
          <PageTitleLabel>Surat Perintah Rawat Inap</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                hospitalizationLetter && treatment?.EMR_ID === hospitalizationLetter.EMR_ID &&  (<HospitalizationLetterForm data={hospitalizationLetter} />)
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default HospitalizationLetter;

