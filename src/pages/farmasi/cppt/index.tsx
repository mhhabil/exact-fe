import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import CpptFarmasiTable from '@src/modules/pharmacy/cppt/components/cppt-pharmacy-table';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useEffect } from 'react';
import { fetchCpptPharmacy, fetchCpptPharmacyPdf } from '@src/modules/pharmacy/cppt/stores/cppt-pharmacy.store';
import { AppRequest } from '@src/shared/request';
import { FindPdfRequest } from '@src/shared/pdf';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';

const CpptFarmasi = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { cppt } = useAppSelector(state => state.cpptPharmacyStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchCpptPharmacy(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.Farmasi">
      <Card>
        <CardHeader>
          <PageTitleLabel>Catatan Perkembangan Pasien Terintegrasi (CPPT)</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                cppt && <CpptFarmasiTable data={cppt} />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default CpptFarmasi;
