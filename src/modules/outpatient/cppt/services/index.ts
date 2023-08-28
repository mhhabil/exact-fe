import { CpptOutPatientService as COPService } from '@modules/outpatient/cppt/services/cppt-out-patient.service';

export function CpptOutPatientService() {
  return new COPService();
}
