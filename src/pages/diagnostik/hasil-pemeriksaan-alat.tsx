import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { fetchDicom, fetchModality } from '@modules/diagnostic/tool-inspection-result/stores/tool-inspection-result.store';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { ToolInspectionForm } from '@src/modules/diagnostic/tool-inspection-result/components';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

const HasilPemeriksaanAlat = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { dicom, modality } = useAppSelector(state => state.dicom);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchDicom(AppRequest.createFromStore(treatment)));
      dispatch(fetchModality());
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.Diagnostik">
      <Card>
        <CardHeader>
          <PageTitleLabel>Unggah Pemeriksaan Alat</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="10" className="mb-1">
              {
                dicom && treatment && treatment.No_MR === dicom.No_MR &&  (
                  <ToolInspectionForm
                    data={dicom}
                    modality={modality}
                  />
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  )
}

export default HasilPemeriksaanAlat;
