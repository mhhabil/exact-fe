import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { fetchInspectionResult, fetchInspectionResultPdf } from '@src/modules/outpatient/inspection-result/stores/inspection-result.store';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { FindPdfRequest } from '@shared/pdf';
import InspectionResultTable from '@src/modules/outpatient/inspection-result/components/inspection-result-table';
import { PageTitleLabel } from '@shared/label';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

const HasilPemeriksaanBiometri = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { inspectionResult } = useAppSelector(state => state.inspectionResult);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchInspectionResult(AppRequest.createFromStore(treatment)));
      // dispatch(fetchInspectionResultPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-jalan_pemeriksaan-biometri' })));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatJalan">
      <Card>
        <CardHeader>
          <PageTitleLabel>Hasil Pemeriksaan Alat</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                inspectionResult && <InspectionResultTable data={inspectionResult}/>
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default HasilPemeriksaanBiometri;
