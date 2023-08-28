import { StorageService } from '@src/shared/local-storage';
import axios from 'axios';
import jwtDefaultConfig from './jwtDefaultConfig';
import getConfig from 'next/config';

export default class JwtService {
  // ** jwtConfig <= Will be used by this service
  jwtConfig = { ...jwtDefaultConfig }

  // ** For Refreshing Token
  isAlreadyFetchingAccessToken = false;

  // ** For Refreshing Token
  subscribers = [];

  constructor(jwtOverrideConfig) {
    this.jwtConfig = { ...this.jwtConfig, ...jwtOverrideConfig }
    const { publicRuntimeConfig } = getConfig();

    // ** Request Interceptor
    axios.interceptors.request.use(
      config => {
        // ** Get token from localStorage
        const accessToken = this.getToken();

        // ** If token is present add it to request's Authorization Header
        if (accessToken) {
          // ** eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
        }
        return config;
      },
      error => Promise.reject(error),
    )

    // ** Add request/response interceptor
    axios.interceptors.response.use(
      response => response,
      error => {
        // ** const { config, response: { status } } = error
        const { config, response } = error;
        const originalRequest = config;

        // ** if (status === 401) {
        if (response && response.status === 401 && config?.url !== `${publicRuntimeConfig.env?.simrsUrl}/user/loginPortalNew`) {
          if (!this.isAlreadyFetchingAccessToken) {
            this.isAlreadyFetchingAccessToken = true;
            this.refreshToken().then(r => {
              this.isAlreadyFetchingAccessToken = false;

              // ** Update accessToken in localStorage
              this.setToken(r.data.accessToken);
              this.setRefreshToken(r.data.refreshToken);

              this.onAccessTokenFetched(r.data.accessToken);
            })
          }
          const retryOriginalRequest = new Promise(resolve => {
            this.addSubscriber(accessToken => {
              // ** Make sure to assign accessToken according to your response.
              // ** Check: https://pixinvent.ticksy.com/ticket/2413870
              // ** Change Authorization header
              originalRequest.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
              resolve(this.axios(originalRequest));
            })
          })
          return retryOriginalRequest;
        }
        return Promise.reject(error);
      },
    )
  }

  onAccessTokenFetched(accessToken) {
    this.subscribers = this.subscribers.filter(callback => callback(accessToken));
  }

  addSubscriber(callback) {
    this.subscribers.push(callback);
  }

  getToken() {
    return (typeof localStorage !== 'undefined') ? StorageService().get('accessToken') : undefined;
  }

  getRefreshToken() {
    return (typeof localStorage !== 'undefined') ? localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName) : undefined;
  }

  setToken(value) {
    return (typeof localStorage !== 'undefined') ? localStorage.setItem(this.jwtConfig.storageTokenKeyName, value) : undefined;
  }

  setRefreshToken(value) {
    return (typeof localStorage !== 'undefined') ? localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName, value) : undefined;
  }

  login(...args) {
    return axios.post(this.jwtConfig.loginEndpoint, ...args);
  }

  register(...args) {
    return axios.post(this.jwtConfig.registerEndpoint, ...args);
  }

  refreshToken() {
    return axios.post(this.jwtConfig.refreshEndpoint, {
      refreshToken: this.getRefreshToken(),
    })
  }

  isTokenExpired() {
    const expiredTime = StorageService().get('tokenExpiredTime');
    return !expiredTime || +expiredTime < (new Date()).getTime();
  }
}
