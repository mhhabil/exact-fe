import { AuthService as AService } from './auth.service';

export function AuthService(overridingConfig = {}) {
  return AService.create(overridingConfig);
}
