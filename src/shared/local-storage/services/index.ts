import { StorageService as SService } from './storage.service';

export function StorageService() {
  return SService.create();
}
