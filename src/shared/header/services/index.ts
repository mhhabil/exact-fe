import { PatientInformationService as GCService } from './patient-information.service';

export function PatientInformationService() {
  return new GCService();
}
