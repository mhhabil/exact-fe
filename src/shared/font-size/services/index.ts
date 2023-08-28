import { FontSizePAD as FPService, FontSizeService as TService } from '@shared/font-size/services/font-size.service';

export function FontSizeService() {
  return new TService();
}

export function FontSizePADService() {
  return new FPService();
}
