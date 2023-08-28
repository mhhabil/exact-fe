import { PatientService as PService } from './patient.service';

export function PatientService() {
  return new PService();
}
