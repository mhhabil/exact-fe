import { PdfService as PService } from '@shared/pdf/services/pdf.service';

export function PdfService() {
  return new PService();
}
