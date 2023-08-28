import { Form, FormGroup } from 'reactstrap';
import { Fragment, useEffect, useState } from 'react';
import { Slide, toast } from 'react-toastify';
import { Mic } from 'react-feather';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import {
  AvailablePlaceModel,
  DisplayModel,
  IAvailablePlaceModel,
  IWaitingPatientModel,
  WaitingPatientModel,
} from '@modules/queue/models';
import { CallQueueRequest, ICallQueueRequest } from '@modules/queue/requests/call-queue.request';
import {
  handleAvailablePlaces,
  handleCurrentPatient,
  handleDisplay,
  handleForm,
  handleLocations,
  handlePositions,
  handleSelectedPatient,
  handleServices,
  handleWaitingPatients,
} from '@modules/queue/stores/queue.store';
import { IconButton } from '@shared/button';
import { QueueService } from '@modules/queue/services';
import { SelectInput } from '@shared/input';
import { StorageService } from '@src/shared/local-storage';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';

import {Socket} from '@src/socket/socket';
import serviceJson from '@data/json/services';

const QueueForm = () => {

  const { services, locations, positions, form, selectedPatient, currentPatient, display, waitingPatients, socketConnected, sortOption } = useAppSelector<{
    services: any[],
    locations: any[],
    positions: any[],
    form: {
      service: any,
      location: any,
      position: any,
    },
    waitingPatients: WaitingPatientModel[] | [],
    selectedPatient: WaitingPatientModel | undefined,
    currentPatient: WaitingPatientModel | undefined,
    display: DisplayModel| undefined,
    socketConnected: boolean,
    sortOption: string,
  }>((state) => state.queue);

  const dispatch = useAppDispatch();
  const localStorage = StorageService().get('userData');

  useEffect(() => {
    if (Array.isArray(services) && services.length === 0) {
      dispatch(handleServices(serviceJson));
    }
  }, []);

  useEffect(() => {
    const patient = waitingPatients.find((waitingPatient) => {
      return waitingPatient.MedicalRecordNo === display?.MedicalRecordNo
    })
    if (patient) {
      dispatch(handleSelectedPatient(patient))
    }
  }, [waitingPatients, form.position])

  const isCallAble = () => {
    return selectedPatient && display && display.isCallAble();
  }

  const isRecallAble = () => {
    return display && display.isRecallAble();
  }

  const { register, handleSubmit, setValue, errors } = useForm({
    mode: 'onChange',
    resolver: yupResolver(CallQueueRequest.schema()),
    defaultValues: {
      service: (form && form.service) ? form.service : '',
      location: (form && form.location) ? form.location : '',
      position: (form && form.position) ? form.position : '',
    },
  });

  const ToastContent = (props: { mrNumber: string }) => {
    const { mrNumber } = props;
    return (
      <Fragment>
        <div className='toastify-header'>
          <div className='title-wrapper'>
            {/*<Avatar {...avatarAttributes} />*/}
            <h6 className='toast-title font-weight-bold'>Warning</h6>
          </div>
        </div>
        <div className='toastify-body'>
          <span>Pasien dengan nomor MR {mrNumber} sudah dipanggil di lokasi lain</span>
        </div>
      </Fragment>
    )
  };

  const handleChangeService = async (service: string) => {
    if (service && service !== '') {
      setValue('location', undefined);
      setValue('position', undefined);
      const response = await QueueService().getLocation({
        service_type: service,
      });
      if (response && Array.isArray(response.data)) {
        dispatch(handleLocations(response.data));
      }
      dispatch(handleForm({ service }));
    }
  }

  const handleChangeLocation = async (location: any) => {
    if (location && location !== '' && form.service) {
      setValue('position', undefined);
      dispatch(handleForm({ location }));

      const getPosition = await QueueService().getPosition({
        service_type: form.service,
        station_id: location,
      });
      if (getPosition && getPosition.data) {
        dispatch(handlePositions(getPosition.data));
      }

      const isDoctor = location.toLowerCase().includes('dokter');
      if (!isDoctor) {
        const getWaitingPatients = await QueueService().getWaitingPatients({
          service_type: form.service,
          station_id: location,
          sort: sortOption,
        });
        if (getWaitingPatients && getWaitingPatients.data && Array.isArray(getWaitingPatients.data)) {
          const waitingPatients = getWaitingPatients.data
            .map((waitingPatient: IWaitingPatientModel) => {
              return WaitingPatientModel.createFromJson(waitingPatient);
            });
          dispatch(handleWaitingPatients(waitingPatients));
        }
      } else {
        dispatch(handleWaitingPatients([]));
      }

      const getAvailablePlaces = await QueueService().getAvailablePlaces({
        service_type: form.service,
        station_id: location,
      });
      if (getAvailablePlaces && getAvailablePlaces.data && Array.isArray(getAvailablePlaces.data)) {
        const availablePlaces = getAvailablePlaces.data
          .map((availablePlace: IAvailablePlaceModel) => {
            return new AvailablePlaceModel(availablePlace);
          })
        dispatch(handleAvailablePlaces(availablePlaces));
      }
    }
  }

  const handleChangePosition = async (position: any) => {
    if (position && position !== '' && form.location && form.service) {
      dispatch(handleForm({ position }));
      const location = form.location.toLowerCase().includes('dokter');
      if (location) {
        const getWaitingDoctorPatients = await QueueService().getWaitingDoctorPatients({
          service_type: form.service,
          place_id: position,
          station_id: form.location,
          sort: sortOption,
        });

        if (getWaitingDoctorPatients && getWaitingDoctorPatients.data && Array.isArray(getWaitingDoctorPatients.data)) {
          const waitingPatients = getWaitingDoctorPatients.data
            .map((waitingPatient: IWaitingPatientModel) => {
              return WaitingPatientModel.createFromJson(waitingPatient);
            });
          dispatch(handleWaitingPatients(waitingPatients));
        }
      }
      const getDisplay = await QueueService().getDisplay({
        station_id: form.location,
        place_id: position,
        service_type: form.service,
      });
      if (getDisplay && getDisplay.data && typeof getDisplay.data === 'object') {
        dispatch(handleDisplay(new DisplayModel(getDisplay.data)));
      } else {
        dispatch(handleDisplay(undefined));
      }
    }
  }

  const handleSubmitForm = (data: ICallQueueRequest) => {
    // console.log(data);
  }

  const handleCallPatient = async (patient: WaitingPatientModel) => {
    const queueNo = patient.CallQueueNo.split(' ');
    if (!localStorage) {
      return;
    }
    const option = {
      station_id: form.location,
      place_id: form.position,
      service_type: form.service,
      status: 'CALL',
      prefix: queueNo[0],
      login_id: JSON.parse(localStorage).id,
      queue_no: +queueNo[1],
      queue_date: (new Date()).toISOString().split('T')[0],
      visit: 0,
    }
    await QueueService().callPatient(option);
    const addPlaylistOption = {
      queue_no: patient.CallQueueNo,
      queue_status: 'CALL',
      queue_station_id: form.location,
      queue_place_id: form.position,
    }
    const addPlaylist = await QueueService().addPlaylist(addPlaylistOption);
    if (addPlaylist && addPlaylist.data) {
      // socket.emit('queue-call', { position: form.position })
    }
    dispatch(handleSelectedPatient(patient))
  }
  const handleRecallPatient = async (patient: WaitingPatientModel) => {
    const queueNo = patient.CallQueueNo.split(' ');
    if (!localStorage) {
      return;
    }
    if (!display?.QueueStatus) {
      return;
    }
    const queueStatus = (display.QueueStatus === 'CALL') ? 'RECALL-1' : `RECALL-${parseInt(display.QueueStatus.split('-')[1]) + 1}`;
    const option = {
      station_id: form.location,
      place_id: form.position,
      service_type: form.service,
      status: queueStatus,
      prefix: queueNo[0],
      login_id: JSON.parse(localStorage).id,
      queue_no: +queueNo[1],
      queue_date: (new Date()).toISOString().split('T')[0],
      visit: 0,
    }
    await QueueService().callPatient(option);
    const addPlaylistOption = {
      queue_no: patient.CallQueueNo,
      queue_status: queueStatus,
      queue_station_id: form.location,
      queue_place_id: form.position,
    }
    const addPlaylist = await QueueService().addPlaylist(addPlaylistOption);
    if (addPlaylist && addPlaylist.data) {
      // socket.emit('queue-call', { position: form.position })
    }
  }

  const CallButton = () => {
    if (selectedPatient && display && display.isRecallAble() && display.MedicalRecordNo !== selectedPatient.MedicalRecordNo) {
      return <IconButton icon={Mic} label="Call" color="secondary" disabled />
    }
    if (
      form.position &&
      socketConnected &&
      selectedPatient &&
      (selectedPatient.isCallAble() || selectedPatient.isRecallAble()) &&
      (selectedPatient.QueuePlaceId === '' || (
        form.position === selectedPatient.QueuePlaceId ||
        (form.position !== selectedPatient.QueuePlaceId && selectedPatient.isFreeToCall())
      ))) {
      return <IconButton onButtonClick={() => {
        if (isRecallAble() && selectedPatient && selectedPatient.QueuePlaceId && selectedPatient.QueuePlaceId !== form.position) {
          toast.warning(
            <ToastContent mrNumber={selectedPatient.MedicalRecordNo}/>,
            { transition: Slide, hideProgressBar: true, autoClose: 5000 },
          );
        } else if (isRecallAble() && selectedPatient) {
          handleRecallPatient(selectedPatient).then(_ => {});
        } else {
          handleCallPatient(selectedPatient).then(_ => {});
        }

      }} icon={Mic} label="Call" color="primary" />
    } else {
      return <IconButton icon={Mic} label="Call" color="secondary" disabled />
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <FormGroup className="form-group">
        <SelectInput
          name="service"
          label="Pelayanan"
          onChange={(event: any) => handleChangeService(event.target.value)}
          {...{ register, errors }}>
          <option value="" disabled={true}>--</option>
          {services && services.map((service: any, key) => {
            return <option key={key} value={service.name}>{service.name}</option>;
          })}
        </SelectInput>
      </FormGroup>
      <FormGroup className="form-group">
        <SelectInput
          name="location"
          label="Lokasi"
          onChange={(event: any) => handleChangeLocation(event.target.value)}
          {...{ register, errors }}>
          <option value="" disabled={true}>--</option>
          {locations && locations.map((location: any, key: number) => {
            return <option key={key} value={location.QueueStationId}>{location.QueueStationName}</option>;
          })}
        </SelectInput>
      </FormGroup>
      <FormGroup className="form-group">
        <SelectInput
          name="position"
          label="Posisi"
          onChange={(event: any) => handleChangePosition(event.target.value)}
          {...{ register, errors }}>
          <option value="" disabled={true}>--</option>
          {positions && positions.map((position: any, key: number) => {
            return <option key={key} value={position.QueuePlaceId}>{position.QueuePlaceName}</option>;
          })}
        </SelectInput>
      </FormGroup>
      <div className="d-flex justify-content-center">
        <CallButton />
      </div>
    </Form>
  );
}

export default QueueForm;
