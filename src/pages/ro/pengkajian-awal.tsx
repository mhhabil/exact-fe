import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import Link from 'next/link';
import { PageTitleLabel } from '@shared/label';
import { PreliminaryStudyForm } from '@modules/ro/preliminary-study/components';
import { fetchPreliminaryStudy } from '@modules/ro/preliminary-study/stores/preliminary-study.store';
import getConfig from 'next/config'
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

const PengkajianAwal = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { preliminaryStudy } = useAppSelector(state => state.preliminaryStudy);
  const dispatch = useAppDispatch();
  const { publicRuntimeConfig } = getConfig();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPreliminaryStudy(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RO">
      <Card>
        <CardHeader>
          <PageTitleLabel>Pengkajian Awal <Link href={`${publicRuntimeConfig.env.baseUrl}/optik/resep-kacamata`}><a>(Link Pembuatan Resep)</a></Link></PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                preliminaryStudy && treatment && (treatment.EMR_ID === preliminaryStudy.EMR_ID) && <PreliminaryStudyForm data={preliminaryStudy} />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default PengkajianAwal;
