import { QueueService as QService } from '@modules/queue/services/queue.service';

export function QueueService(overridingConfig = {}) {
  return QService.create(overridingConfig);
}
