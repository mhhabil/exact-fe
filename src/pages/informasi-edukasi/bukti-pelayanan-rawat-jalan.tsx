import { Card, CardBody, CardHeader, Col, Label, Row } from 'reactstrap';
import { AppRequest } from '@src/shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import ProofOfOutpatient from '@src/modules/outpatient/proof-of-outpatient-services/components/proof-of-outpatient-services';
import { fetchProofOfOutpatientService } from '@src/modules/outpatient/proof-of-outpatient-services/stores/proof-of-outpatient-services.stores';
import getConfig from 'next/config';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useEffect } from 'react';
const BuktiPemeriksaanRawatJalan = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const { proofOfOutpatientService } = useAppSelector(state => state.proofOfOutpatientServicesStores)
  const dispatch = useAppDispatch();
  const { publicRuntimeConfig } = getConfig();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchProofOfOutpatientService(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch])
  return (
    <AuthorizedPage to="read" a="EMR.Pendaftaran">
      {/* <PatientIdentityInfo /> */}
      <Card>
        <CardHeader>
          <div>
            <Label className='text-danger'>Refresh halaman jika data BPRJ tidak terupdate!!!</Label>
            <PageTitleLabel> Bukti Pelayanan Rawat Jalan </PageTitleLabel>
          </div>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="10" className="mb-1">
              {
                proofOfOutpatientService && treatment && (treatment.EMR_ID === proofOfOutpatientService.EMR_ID) && <ProofOfOutpatient data={proofOfOutpatientService} />
              }
              {/* <NursingInitialAssessment/> */}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  )
}

export default BuktiPemeriksaanRawatJalan;
