import { Slide, toast } from 'react-toastify';
import HttpService from './http.service';
import axios from 'axios';

class ActionService extends HttpService {
  constructor(overridingConfig: any) {

    super(overridingConfig);

    // ** Response Interceptor
    this.axiosResponseInterceptor = axios.interceptors.response.use(
      response => {

        const { status, config, data } = response;
        const toastConfig = { transition: Slide, hideProgressBar: true, autoClose: 2000, className: 'bg-success' };

        if ((status === 200 || status === 201) && data.showMessage) {
          switch (config.method) {
          case 'post':
            toast.success(<div className="text-light">Data Berhasil Disimpan</div>, toastConfig);
            break;
          case 'put' || 'patch':
            toast.success(<div className="text-light">Data Berhasil Diubah</div>, toastConfig);
            break;
          case 'delete':
            toast.success(<div className="text-light">Data Berhasil Dihapus</div>, toastConfig);
            break;
          }
        }

        axios.interceptors.response.eject(this.axiosResponseInterceptor);
        return response;
      },
      error => {
        return Promise.reject(null);
      },
    )
  }
}

export default ActionService;
