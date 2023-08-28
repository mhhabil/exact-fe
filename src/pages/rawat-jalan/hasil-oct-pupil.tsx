import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { PatientIdentityInfo } from '@modules/information/patient-identity/components';
import { PupilOCTResultForm } from '@src/modules/outpatient/pupil-oct-result/components';
import { fetchPupilOCTResult } from '@src/modules/outpatient/pupil-oct-result/stores/pupil-oct-result.store';
import getConfig from 'next/config';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

const HasilOCTPupil = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { pupilOCTResult } = useAppSelector(state => state.pupilOCTResult)
  const dispatch = useAppDispatch();
  const { publicRuntimeConfig } = getConfig();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPupilOCTResult(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch])
  return (
    <AuthorizedPage to="read" a="EMR.RawatJalan">
      <PatientIdentityInfo />
      <Card>
        <CardHeader>
          <PageTitleLabel>Hasil Pemeriksaan OCT Pupil</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="10" className="mb-1">
              {
                pupilOCTResult && treatment && (treatment.No_MR === pupilOCTResult.nomor_mr) && <PupilOCTResultForm data={pupilOCTResult} />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default HasilOCTPupil;

