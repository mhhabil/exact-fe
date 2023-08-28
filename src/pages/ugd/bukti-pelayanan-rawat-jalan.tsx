import { Card, CardBody, CardHeader, Col, Label, Row } from 'reactstrap';
import { AppRequest } from '@src/shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import ProofOfOutpatientEmergencyRoomForm from '@src/modules/emergency-room/proof-of-outpatient-services-ugd/components/proof-of-outpatient-services-emergency-room-form';
import { fetchProofOfOutpatientServicesEmergencyRoom } from '@src/modules/emergency-room/proof-of-outpatient-services-ugd/stores/proof-of-outpatient-services-emergency-room.stores';
import getConfig from 'next/config';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useEffect } from 'react';

const BuktiPemeriksaanRawatJalanUgd = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { proofOfOutpatientServicesEmergencyRoom } = useAppSelector(state => state.proofOfOutpatientServicesEmergencyRoomStores)
  const dispatch = useAppDispatch();
  const { publicRuntimeConfig } = getConfig();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchProofOfOutpatientServicesEmergencyRoom(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch])
  return (
    <AuthorizedPage to="read" a="EMR.UGD">
      {/* <PatientIdentityInfo /> */}
      <Card>
        <CardHeader>
          <div>
            <PageTitleLabel> Bukti Pelayanan Rawat Jalan UGD </PageTitleLabel>
          </div>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="10" className="mb-1">
              {
                proofOfOutpatientServicesEmergencyRoom && treatment && (treatment.EMR_ID === proofOfOutpatientServicesEmergencyRoom.EMR_ID) && <ProofOfOutpatientEmergencyRoomForm data={proofOfOutpatientServicesEmergencyRoom} />
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  )
}

export default BuktiPemeriksaanRawatJalanUgd;
