import axios from 'axios';
import getConfig from 'next/config';

import { HttpService } from '@shared/http-request';

export interface GetLocationOption {
  service_type: string;
}

export interface GetPositionOption extends GetLocationOption {
  station_id: string;
}

export interface GetWaitingPatientsOption extends GetPositionOption {
  sort: string;
}
export interface GetAvailablePlacesOption extends GetPositionOption {}
export interface GetWaitingDoctorPatientsOption extends GetPositionOption {
  place_id: string;
  sort: string;
}
export interface GetDisplayOption extends GetPositionOption {
  place_id: string;
}
export interface CallPatientOption extends GetDisplayOption {
  status: string;
  prefix: string;
  login_id: string | undefined;
  queue_no: number;
  queue_date: string;
  visit: number;
}
export interface AddPlaylistOption {
  queue_no: string;
  queue_status: string;
  queue_place_id: string;
  queue_station_id: string;
}

export interface MoveNextOption {
  prefix: string;
  queue_no: number;
  queue_place_id: string;
  queue_station_id: string;
  prev_station: string;
  employee_id: string;
  tipe_pelayanan: string;
  queue_date: string;
  medical_record_no: string;
  patient_name: string;
  id_dokter: string;
}

export interface FinishQueueOption {
  prefix: string;
  queue_no: number;
  place_id: string;
  login_id: string | undefined;
  station_id: string;
  service_type: string;
}

export class QueueService extends HttpService {
  constructor(overridingConfig = {}) {
    const { publicRuntimeConfig } = getConfig();
    super({ apiHost: `${publicRuntimeConfig.env?.baseUrl}/api`, ...overridingConfig });
  }

  getLocation(option: GetLocationOption) {
    return axios.post('/antrean/pemanggil/stations_new', {
      company_code: this.companyCode,
      status: 2,
      ...option,
    });
  }

  getPosition(option: GetPositionOption) {
    return axios.post('/antrean/pemanggil/places', {
      company_code: this.companyCode,
      ...option,
    });
  }

  getWaitingDoctorPatients(option: GetWaitingDoctorPatientsOption) {
    return axios.post(`/antrean/pemanggil/${option.sort === 'wt_total' ? 'wait_list_place_total' : 'wait_list_place'}`, {
      company_code: this.companyCode,
      ...option,
    });
  }

  getWaitingPatients(option: GetWaitingPatientsOption) {
    return axios.post(`/antrean/pemanggil/${option.sort === 'wt_total' ? 'wait_list_all_total' : 'wait_list_all'}`, {
      company_code: this.companyCode,
      ...option,
    });
  }

  getAvailablePlaces(option: GetAvailablePlacesOption) {
    return axios.post('/antrean/pemanggil/places_available', {
      company_code: this.companyCode,
      ...option,
    });
  }

  getDisplay(option: GetDisplayOption) {
    return axios.post('/antrean/pemanggil/display', {
      company_code: this.companyCode,
      ...option,
    });
  }

  callPatient(option: CallPatientOption) {
    return axios.post('/antrean/pemanggil/call_number', {
      company_code: this.companyCode,
      ...option,
    });
  }

  addPlaylist(option: AddPlaylistOption) {
    return axios.post('/antrean/pemanggil/add_play_list', {
      company_code: this.companyCode,
      ...option,
    });
  }

  finishQueue(option: FinishQueueOption, moveNext: MoveNextOption) {
    return axios.post('/antrean/pemanggil/finish_queue', {
      company_code: this.companyCode,
      move_next: {
        ...moveNext,
        company_code: this.companyCode,
      },
      ...option,
    });
  }

  moveNext(option: MoveNextOption) {
    return axios.post('/antrean/pemanggil/move_next', {
      company_code: this.companyCode,
      ...option,
    });
  }

  static create(overridingConfig = {}) {
    return new QueueService(overridingConfig);
  }
}

