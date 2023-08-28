import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { GlassesPrescriptionForm } from '@src/modules/optic/glasses-prescription/components';
import Link from 'next/link';
import { PageTitleLabel } from '@shared/label';
import { fetchGlassesPrescription } from '@src/modules/optic/glasses-prescription/stores/glasses-prescription.store';
import { fetchPreliminaryStudy } from '@modules/ro/preliminary-study/stores/preliminary-study.store';
import getConfig from 'next/config';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

const ResepKacamata = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { glassesPrescription } = useAppSelector(state => state.glassesPrescription)
  const { preliminaryStudy } = useAppSelector(state => state.preliminaryStudy)
  const dispatch = useAppDispatch();
  const { publicRuntimeConfig } = getConfig();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchGlassesPrescription(AppRequest.createFromStore(treatment)));
      dispatch(fetchPreliminaryStudy(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatJalan">
      <Card>
        <CardHeader>
          <PageTitleLabel>Resep Kacamata <Link href={`${publicRuntimeConfig.env.baseUrl}/ro/pengkajian-awal`}><a>(Visit Pengkajian Awal RO)</a></Link></PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="10" className="mb-1">
              {
                glassesPrescription && treatment && (treatment.EMR_ID === glassesPrescription.EMR_ID) && <GlassesPrescriptionForm data={glassesPrescription} optic={preliminaryStudy} />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default ResepKacamata;
