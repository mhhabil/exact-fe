import { ImplementationRiskPatientsService as ImplementationRiskPatients } from '@modules/inpatient/implementation-risk-patients/services/implementation-risk-patients.service';

export function ImplementationRiskPatientsService() {
  return new ImplementationRiskPatients();
}
