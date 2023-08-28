import AES from 'crypto-js/aes';
import enc from 'crypto-js/enc-utf8';
import getConfig from 'next/config';

export class StorageService {
  secretKey: string | any = getConfig().publicRuntimeConfig.env?.secretKey;

  set(key: string, value: any) {
    if (typeof localStorage === 'undefined') {
      return;
    }
    return localStorage.setItem(key, AES.encrypt(value, this.secretKey).toString());
  }

  get(key: string) {
    if (typeof localStorage === 'undefined') {
      return;
    }
    const localStorageValue = localStorage.getItem(key);
    return (localStorageValue) ? (AES.decrypt(localStorageValue, this.secretKey)).toString(enc) : null;
  }

  destroy(key: string) {
    if (typeof localStorage === 'undefined') {
      return;
    }
    return localStorage.removeItem(key);
  }

  static create() {
    return new StorageService();
  }
}
