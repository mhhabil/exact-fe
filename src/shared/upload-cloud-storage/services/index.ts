import { UploadImageCloudService as SService } from './upload-to-cloud-storage.service';

export function UploadToCloudService() {
  return new SService();
}
