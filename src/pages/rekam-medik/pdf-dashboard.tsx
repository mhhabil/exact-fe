import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { PDFDashboardTable, SearchPDFForm } from '@src/modules/medical-record/pdf-dashboard/components';
import { fetchPDFDashboard, handleFilter } from '@src/modules/medical-record/pdf-dashboard/stores/pdf-dashboard.store';
import { AuthorizedPage } from '@shared/guardian';
import { PDFDashFilter } from '@src/modules/medical-record/pdf-dashboard/requests';
import { PageTitleLabel } from '@shared/label';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useEffect } from 'react';

const PDFDashboard = () => {
  const { filter, pdfDashboard } = useAppSelector(state => state.pdfDashboard);
  const { treatment } = useAppSelector(state => state.patient);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (filter) {
      dispatch(fetchPDFDashboard(filter));
    }
  }, [filter, dispatch])

  useEffect(() => {
    if (treatment) {
      dispatch(handleFilter({ emr_id: treatment.EMR_ID }))
    }
  }, [dispatch, treatment])

  return (
    <AuthorizedPage to="read" a="EMR.PDF">
      <Card>
        <CardHeader>
          <PageTitleLabel>PDF Dashboard</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              <SearchPDFForm/>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                pdfDashboard && pdfDashboard.EMR_ID === treatment?.EMR_ID && (
                  <PDFDashboardTable data={pdfDashboard}/>
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  )
}

export default PDFDashboard;
