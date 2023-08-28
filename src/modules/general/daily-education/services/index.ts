import { DailyEducationService as DEService } from '@modules/general/daily-education/services/daily-education.service';

export function DailyEducationService() {
  return new DEService();
}
