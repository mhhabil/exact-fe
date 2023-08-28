import { StorageService } from '@shared/local-storage';

export class FontSizeService {
  set(value: string) {
    return StorageService().set('fontSize', value);
  }

  get(): string | undefined {
    const fontSize = StorageService().get('fontSize');
    if (!fontSize) {
      return undefined;
    }
    return fontSize;
  }

  destroy() {
    StorageService().destroy('fontSize');
  }
}

export class FontSizePAD {
  set(value: string) {
    return StorageService().set('fontSizePAD', value);
  }

  get(): string | undefined {
    const fontSize = StorageService().get('fontSizePAD');
    if (!fontSize) {
      return undefined;
    }
    return fontSize;
  }

  destroy() {
    StorageService().destroy('fontSizePAD');
  }
}
