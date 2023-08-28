import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@src/shared/request';
import AssesmenPraOperasiForm from '@src/modules/operating-room/assesmen-pra-operasi/components/assesmen-pra-operasi-form';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { fetchAssesmenPraoperasi } from '@src/modules/operating-room/assesmen-pra-operasi/stores/assesmen-pra-operasi.store';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useEffect } from 'react';

const AssesmenPraOperasi = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const {assesmenPraOperasi} = useAppSelector(state => state.assesmenPraOperasiStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchAssesmenPraoperasi(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      <Card>
        <CardHeader>
          <PageTitleLabel>Assesmen Pra Operasi</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                assesmenPraOperasi && assesmenPraOperasi.EMR_ID === treatment?.EMR_ID && (
                  <AssesmenPraOperasiForm data={assesmenPraOperasi}/>
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default AssesmenPraOperasi;