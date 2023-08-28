import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@src/shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { SurgeryReportForm } from '@src/modules/operating-room/surgery-report/components';
import { fetchSurgeryReport } from '@src/modules/operating-room/surgery-report/stores/surgery-report.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

const LaporanPembedahanAnestesi = () => {
  const { treatment } = useAppSelector(state => state.patient);
  const { surgeryReport } = useAppSelector(state => state.surgeryReport);
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchSurgeryReport(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch])

  return (
    <AuthorizedPage to="read" a="EMR.KamarBedah">
      <Card>
        <CardHeader>
          <PageTitleLabel>Laporan Pembedahan Anestesi</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                surgeryReport && treatment && (treatment.EMR_ID === surgeryReport.EMR_ID)
                  && Array.isArray(doctors) && doctors.length > 0
                  && Array.isArray(nurses) && nurses.length > 0
                  && <SurgeryReportForm data={surgeryReport} />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default LaporanPembedahanAnestesi;
