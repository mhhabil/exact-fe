import { Card, CardBody, CardHeader, Col, Label, Row } from 'reactstrap';
import { AppRequest } from '@src/shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { SurgicalAreaMarkingForm } from '@src/modules/outpatient/surgical-area-marking/components';
import { fetchSurgicalAreaMarking } from '@src/modules/outpatient/surgical-area-marking/stores/surgical-area-marking.store';
import getConfig from 'next/config';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useEffect } from 'react';

const PenandaanAreaPembedahan = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const { surgicalAreaMarking } = useAppSelector(state => state.surgicalAreaMarking)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchSurgicalAreaMarking(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch])
  return (
    <AuthorizedPage to="read" a="EMR.KamarBedah">
      <Card>
        <CardHeader>
          <PageTitleLabel>FORMULIR PENANDAAN AREA PEMBEDAHAN</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="10" className="mb-1">
              {
                surgicalAreaMarking && treatment && (treatment.EMR_ID === surgicalAreaMarking.EMR_ID) && <SurgicalAreaMarkingForm data={surgicalAreaMarking} />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  )
}

export default PenandaanAreaPembedahan;
