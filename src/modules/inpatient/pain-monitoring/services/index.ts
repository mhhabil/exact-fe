import { PainMonitoringService as PainMonitoring } from '@modules/inpatient/pain-monitoring/services/pain-monitoring.service';

export function PainMonitoringService() {
  return new PainMonitoring();
}
