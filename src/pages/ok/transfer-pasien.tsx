import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppRequest } from '@shared/request';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import PatientTransferTable from '@src/modules/outpatient/patient-transfers/components/patient-transfer-table';
import { fetchPatientTransfer } from '@src/modules/outpatient/patient-transfers/stores/patient-transfer.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

const TransferPasien = () => {

  const { treatment } = useAppSelector(state => state.patient);
  const {patientTransfer} = useAppSelector(state => state.patientTransferStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPatientTransfer(AppRequest.createFromStore(treatment)));
      // dispatch(fetchPatientTransferPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-jalan_pemeriksaan-biometri' })));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.KamarBedah">
      <Card>
        <CardHeader>
          <PageTitleLabel>Transfer Pasien</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              {
                patientTransfer && <PatientTransferTable data={patientTransfer} unit="KamarBedah"/>
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  );
}

export default TransferPasien;
