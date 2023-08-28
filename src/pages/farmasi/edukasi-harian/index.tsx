import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import {
  fetchDailyEducation,
  fetchDailyEducationPdf,
} from '@modules/general/daily-education/stores/daily-education.store';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import DailyEducationTable from '@modules/general/daily-education/components/daily-education-table';
import { FindPdfRequest } from '@shared/pdf';
import { PageTitleLabel } from '@shared/label';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

const EdukasiHarian = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { dailyEducation } = useAppSelector(state => state.dailyEducation);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchDailyEducation(AppRequest.createFromStore(treatment)));
      // dispatch(fetchDailyEducationPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'Edukasi_Harian' })));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.Farmasi">
      <Card>
        <CardHeader>
          <PageTitleLabel>Formulir Komunikasi - Edukasi Harian</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                dailyEducation && <DailyEducationTable data={dailyEducation} unit="Farmasi" />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default EdukasiHarian;
