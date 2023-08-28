import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AuthorizedPage } from '@shared/guardian';
import { PageTitleLabel } from '@shared/label';
import { PatientIdentityForm } from '@modules/information/patient-identity/components';
import { fetchPatientIdentity } from '@modules/information/patient-identity/stores/patient-identity.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

export default function InformasiEdukasiIdentitasPasien() {

  const { treatment } = useAppSelector(state => state.patient);
  const { patientIdentity } = useAppSelector(state => state.patientIdentity);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPatientIdentity({
        emr_id: treatment.EMR_ID,
        id_dokter: treatment.ID_Dokter,
        id_pelayanan: treatment.ID_Pelayanan,
        jenis_pelayanan: treatment.Jenis_Pelayanan,
        kode_cabang: treatment.Kode_Cabang,
        no_sep: '',
        nomor_mr: treatment.No_MR,
        tipe_pasien: treatment.Tipe_Pasien,
      }));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.Pendaftaran">
      <Card>
        <CardHeader>
          <PageTitleLabel>Identitas Pasien</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="10" className="mb-1">
              {
                patientIdentity && treatment?.EMR_ID === patientIdentity.EMR_ID && (
                  <PatientIdentityForm data={patientIdentity} />
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </AuthorizedPage>
  )
}
