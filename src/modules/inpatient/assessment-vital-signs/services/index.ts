import { AssessmentVitalSignsService as AssementService } from '@modules/inpatient/assessment-vital-signs/services/assessment-vital-signs.service';

export function AssessmentVitalSignsService() {
  return new AssementService();
}
