import {
  fetchAvailablePlaces,
  fetchDisplay,
  fetchWaitingDoctorPatients,
  fetchWaitingPatients,
  handleSocket,
  handleSocketConnected,
} from '@modules/queue/stores/queue.store';
import { fetchCpptInpatient, handleAutoRefresh as handleRefreshInpatient } from '@src/modules/inpatient/cppt/stores/cppt-inpatient.store';
import { fetchCpptOk, handleAutoRefresh as handleRefreshOk } from '@src/modules/operating-room/cppt/stores/cppt-ok.store';
import { fetchCpptOutPatient, handleAutoRefresh as handleRefreshOutpatient } from '@src/modules/outpatient/cppt/stores/cppt-out-patient.store';
import { AppRequest } from '@src/shared/request';
import { fetchDoctorPreliminaryStudy } from '@src/modules/outpatient/doctor-preliminary-study/stores/doctor-preliminary-study.store';
import getConfig from 'next/config';
import { io } from 'socket.io-client';
import { store } from '@store/store';

class Socket {
  socket: any;


  constructor(createNew = false, companyCode: string) {
    const s = store.getState();
    if (s.queue && s.queue.socket && !createNew) {
      this.socket = s.queue.socket;
    } else {
      const { publicRuntimeConfig } = getConfig();
      const socketUrl = (publicRuntimeConfig.env && publicRuntimeConfig.env.socketUrl) ? publicRuntimeConfig.env.socketUrl : '';
      this.socket = io(socketUrl, {
        transports: ['websocket'],
        reconnectionDelayMax: 10,
        reconnection: true,
        forceNew: true,
        query: {
          room: `SOCKET-${companyCode}`,
        },
        auth: {
          serviceName: publicRuntimeConfig?.env?.socketServiceName,
          serviceSecret: publicRuntimeConfig?.env?.socketServiceSecret,
        },
      });
      store.dispatch(handleSocket(this.socket));
    }
  }

  start(room: string) {
    this.socket.on('connect', () => {
      console.log(`SocketIO: Connected ID: ${this.socket.id} on room ${room} at ${new Date().getTime()}`);
      store.dispatch(handleSocketConnected(this.socket.connected));
    });

    this.socket.on('queue-started', (payload: any) => {
      console.log(`[queue-started] message Received:`, payload);
      this.updateQueue();
    });

    this.socket.on('queue-called', (payload: any) => {
      console.log(`[queue-called] message Received:`, payload);
      this.updateQueue(payload);
    });

    this.socket.on('queue-skipped', (payload: any) => {
      console.log(`[queue-skipped] message Received:`, payload);
      this.updateQueue();
    });

    this.socket.on('queue-moved', (payload: any) => {
      console.log(`[queue-moved] message Received:`, payload);
      this.updateQueue(payload);
    });

    this.socket.on('queue-finished', (payload: any) => {
      console.log(`[queue-finished] message Received:`, payload);
      this.updateQueue();
    });

    this.socket.on('tebus-obat', (payload: any) => {
      console.log(`[tebus-obat] message Received:`, payload);
      const { patient } = store.getState()
      const { treatment } = patient;
      if (
        treatment
        &&
        payload
        &&
        treatment.EMR_ID === payload.emr_id
      ) {
        const pathName = window.location.pathname;
        const appRequest = AppRequest.createFromStore(treatment);
        if (pathName === '/rawat-jalan/cppt') {
          store.dispatch(fetchCpptOutPatient(appRequest));
          store.dispatch(handleRefreshOutpatient(true));

        }
        if (pathName === '/rawat-inap/cppt') {
          store.dispatch(fetchCpptInpatient(appRequest));
          store.dispatch(handleRefreshInpatient(true));
        }
        if (pathName === '/ok/cppt') {
          store.dispatch(fetchCpptOk(appRequest));
          store.dispatch(handleRefreshOk(true));
        }
        if (pathName === '/rawat-jalan/pengkajian-awal-dokter') {
          store.dispatch(fetchDoctorPreliminaryStudy(appRequest));
        }
      }
    })

    this.socket.on('disconnect', (reason: any) => {
      console.log(`SocketIO: Disconnected with ${reason} at ${new Date().getTime()}`);
      store.dispatch(handleSocketConnected(this.socket.connected));
    });

    this.socket.on('connect_error', () => {
      console.log('SocketIO: Connect Error');
    });

    this.socket.on('connect_failed', () => {
      console.log('SocketIO: Connect Failed');
    });
  }

  updateQueue(payload?: any) {
    const { queue } = store.getState();
    const { form, sortOption } = queue;
    if (form && form.location && form.service) {
      if (
        payload &&
        (
          (payload.station_id && payload.station_id.toLowerCase().includes('dokter')) ||
          (payload.prev_station && payload.prev_station.toLowerCase().includes('dokter'))
        )
        && form.location.toLowerCase().includes('dokter') && form.position
      ) {
        store.dispatch(fetchWaitingDoctorPatients({
          service_type: form.service,
          station_id: form.location,
          place_id: form.position,
          sort: sortOption,
        }));
      } else {
        const isDoctor = form.location.toLowerCase().includes('dokter');
        if (!isDoctor) {
          store.dispatch(fetchWaitingPatients({
            service_type: form.service,
            station_id: form.location,
            sort: sortOption,
          }));
        }
      }
      store.dispatch(fetchAvailablePlaces({
        service_type: form.service,
        station_id: form.location,
      }));
      if (form.position) {
        store.dispatch(fetchDisplay({
          service_type: form.service,
          place_id: form.position,
          station_id: form.location,
        }));
      }
    }
  }

  emit(event: string, payload: any) {
    this.socket.emit(event, payload);
  }
}

export { Socket };
