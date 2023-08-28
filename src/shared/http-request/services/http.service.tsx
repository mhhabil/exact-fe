import axios from 'axios';
import getConfig from 'next/config';
import { handleHttpError } from '../stores/http-request.store';
import httpConfig from '@configs/httpConfig';
import { store } from '@store/store';

import { Slide, ToastOptions, toast } from 'react-toastify';
class HttpService {

  config = { ...httpConfig };

  axiosRequestInterceptor: any = null;
  axiosResponseInterceptor: any = null;

  companyCode = '';

  constructor(overridingConfig = {}) {
    const { publicRuntimeConfig } = getConfig();
    this.companyCode = store.getState().selectCompany.companyCode ?? '';
    this.config = { ...this.config, ...overridingConfig };

    // ** Request Interceptor
    this.axiosRequestInterceptor = axios.interceptors.request.use(
      configuration => {

        if (this.config.apiHost) {
          configuration.baseURL = this.config.apiHost;
        }
        return configuration;
      },
      error => {
        Promise.reject(error);
      },
    );

    // ** Response Interceptor
    this.axiosResponseInterceptor = axios.interceptors.response.use(
      response => {
        axios.interceptors.request.eject(this.axiosRequestInterceptor);
        axios.interceptors.response.eject(this.axiosResponseInterceptor);
        return response;
      },
      error => {
        const { httpError } = store.getState().httpError;
        const { response } = error;
        const { statusText, data } = response;
        const textError = data.error;
        const toastConfig: ToastOptions = { transition: Slide, autoClose: 2000, className: 'bg-danger text-light' };
        const toastContent = <div className="text-light">{textError ? textError : statusText}</div>;

        if (httpError && httpError.datetime) {
          const substract = new Date().getTime() - httpError.datetime.getTime()
          if (substract && substract < 60000) {
            axios.interceptors.request.eject(this.axiosRequestInterceptor);
            axios.interceptors.response.eject(this.axiosResponseInterceptor);
            return Promise.reject(null);
          } else {
            store.dispatch(handleHttpError({
              datetime: new Date(),
              message: statusText,
            }))
            toast.error(toastContent, toastConfig);

            axios.interceptors.request.eject(this.axiosRequestInterceptor);
            axios.interceptors.response.eject(this.axiosResponseInterceptor);
            return Promise.reject(null);
          }
        }

        if (!httpError) {
          store.dispatch(handleHttpError({
            datetime: new Date(),
            message: statusText,
          }))
          toast.error(toastContent, toastConfig);

          axios.interceptors.request.eject(this.axiosRequestInterceptor);
          axios.interceptors.response.eject(this.axiosResponseInterceptor);
          return Promise.reject(null);
        }
      },
    )
  }

  sendApiErrorResponse() {
    const toastConfig: ToastOptions = { transition: Slide, autoClose: false, className: 'bg-danger text-light' };
    const toastContent = <div className="text-light">Cannot get response on server</div>;

    toast.error(toastContent, toastConfig);
  }

}

export default HttpService;
