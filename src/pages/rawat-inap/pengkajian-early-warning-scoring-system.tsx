import { AppRequest } from "@src/shared/request";
import { AuthorizedPage } from '@shared/guardian';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { fetchInpatientInitialNursingEarlyWarning } from "@src/modules/inpatient/nursing-early-warning-scoring-table/stores/nursing-early-warning-scoring.store";
import { PageTitleLabel } from '@shared/label';
import { PatientIdentityInfo } from '@modules/information/patient-identity/components';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useEffect } from "react";
import NursingEarlyWarningScoringTable from "@src/modules/inpatient/nursing-early-warning-scoring-table/components/nursing-early-warning-scoring-table";

const PengkajianEarlyWarningScoringSystem = () => {
  const { treatment } = useAppSelector(state => state.patient);
  const { nursingEarlyWarning } = useAppSelector(state => state.InpatientInitialNursingEarlyWarning);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchInpatientInitialNursingEarlyWarning(AppRequest.createFromStore(treatment)));
      // dispatch(fetchDailyEducationPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'Edukasi_Harian' })));
    }
  }, [treatment, dispatch]);

  return (
    <AuthorizedPage to="read" a="EMR.RawatInap">
      <Card>
        <CardHeader>
          <PageTitleLabel> PENGKAJIAN NURSING EARLY WARNING SCORING SYSTEM
          </PageTitleLabel>
        </CardHeader>
        <CardBody>
          {nursingEarlyWarning && treatment?.EMR_ID === nursingEarlyWarning.EMR_ID && (<NursingEarlyWarningScoringTable data={nursingEarlyWarning}/>) }
        </CardBody>
      </Card>
    </AuthorizedPage>

  )
};

export default PengkajianEarlyWarningScoringSystem;
