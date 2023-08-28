import { ConsultationSheetService as CSService } from '@modules/outpatient/consultation-sheet/services/consultation-sheet.service';

export function ConsultationSheetService() {
  return new CSService();
}
