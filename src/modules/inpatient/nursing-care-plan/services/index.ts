import { NursingCarePlanService as NUService } from "@modules/inpatient/nursing-care-plan/services/nursing-care-plan.service";

export function NursingCarePlanService() {
  return new NUService();
}