import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import DpjpSheetForm from '@modules/inpatient/dpjp-sheet/components/dpjp-sheet-form';
import { PageTitleLabel } from '@shared/label';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

import { fetchDpjpSheet } from '@modules/inpatient/dpjp-sheet/stores/dpjp-sheet.store';


const DpjpSheet = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { dpjpSheet } = useAppSelector(state => state.dpjpSheet);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (treatment) {
      dispatch(fetchDpjpSheet(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      <Card>
        <CardHeader>
          <PageTitleLabel>Lembar Dpjp</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                dpjpSheet && treatment?.EMR_ID === dpjpSheet.EMR_ID &&  (
                  <DpjpSheetForm data={dpjpSheet} />
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default DpjpSheet;

