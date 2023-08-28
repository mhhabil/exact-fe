import { AnestheticStatusService as Service } from '@modules/operating-room/anesthetic-status/services/anesthetic-status.service';

export default function AnestheticStatus() {
  return new Service();
}
