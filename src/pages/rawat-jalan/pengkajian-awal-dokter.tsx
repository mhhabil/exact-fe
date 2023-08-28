import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { DoctorPreliminaryStudyForm } from '@src/modules/outpatient/doctor-preliminary-study/components';
import { PageTitleLabel } from '@shared/label';
import { fetchDoctorPreliminaryStudy } from '@src/modules/outpatient/doctor-preliminary-study/stores/doctor-preliminary-study.store';
import getConfig from 'next/config';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

const PengkajianAwalDokter = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { doctorPreliminaryStudy } = useAppSelector(state => state.doctorPreliminaryStudy)
  const dispatch = useAppDispatch();
  const { publicRuntimeConfig } = getConfig();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchDoctorPreliminaryStudy(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch])
  return (
    <AuthorizedPage to="read" a="EMR.RawatJalan">
      <Card className='w-100'>
        <CardHeader>
          <PageTitleLabel>Pengkajian Awal Dokter</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col className="mb-1">
              {
                doctorPreliminaryStudy && treatment && (treatment.EMR_ID === doctorPreliminaryStudy.EMR_ID) && <DoctorPreliminaryStudyForm data={doctorPreliminaryStudy} />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default PengkajianAwalDokter;

