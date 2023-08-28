import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledButtonDropdown,
} from 'reactstrap';
import { Check, CornerUpRight, X } from 'react-feather';
import { useEffect, useState } from 'react';
import { QueueService } from '@modules/queue/services';
import { Socket } from '@src/socket/socket';
import { StorageService } from '@src/shared/local-storage';

import { AvailablePlaceModel, DisplayModel, IDoctorStation } from '@modules/queue/models';
import { ConfirmModal, DropdownModal } from '@shared/modal';
import { IconButton } from '@shared/button';
import { useAppSelector } from '@hooks/useAppSelector';

const QueueDisplay = () => {

  const { display, availablePlaces, form, socketConnected } = useAppSelector<{
    display: DisplayModel | undefined,
    availablePlaces: AvailablePlaceModel[] | never[],
    form: {
      service: any,
      location: any,
      position: any,
    },
    socketConnected: boolean,
  }>((state) => state.queue);

  const doctorPlace = availablePlaces && availablePlaces.filter((val: AvailablePlaceModel) => val.is_dokter === true)

  const docStations = doctorPlace && doctorPlace.map((val: any) => {
    return val.DoctorStations;
  });

  const doctors = [].concat.apply([], docStations);
  const idDokter = (display) ? display.IdDokter : '';
  const doctorObject = doctors.find((val: any) => val.QueuePlaceId.includes(idDokter))
  const [showModal, setShowModal] = useState(false);
  const [defaultDoctor, setDefaultDoctor] = useState<any>(doctorObject)
  const [dropdownModal, setDropdownModal] = useState(false);
  const [selectedStation, setSelectedStation] = useState('');
  const [doctorStations, setDoctorStations] = useState<any[]>([]);

  const toggleOpen = (station: string) => {
    setSelectedStation(station);
    setShowModal(!showModal);
  }

  useEffect(() => {
    setDefaultDoctor(doctorObject);
  }, [doctorObject])

  const toggleDropdownModal = (station: string, doctorStation: any[]) => {
    const foundDoctor = doctorStation.find((val: any) => val.QueuePlaceId.includes(idDokter))
    if (foundDoctor) {
      if (station.toLowerCase().includes('umum')) {
        setDefaultDoctor({ ...foundDoctor, QueuePlaceId: `UMUM-${idDokter}` })
      } else if (station.toLowerCase().includes('bpjs')) {
        setDefaultDoctor({ ...foundDoctor, QueuePlaceId: `BPJS-${idDokter}` })
      }
    } else {
      setDefaultDoctor(undefined);
    }
    setDoctorStations(doctorStation);
    setSelectedStation(station)
    setDropdownModal(!dropdownModal)
  }

  const toggleClose = () => setShowModal(!showModal);

  const closeDropdownModal = () => {
    setDropdownModal(!dropdownModal)
  }

  const localStorage = (StorageService().get('userData'))

  const handleSkipPatient = async (patient: DisplayModel) => {
    const queueNo = patient.CallQueueNo.split(' ');
    if (!localStorage) {
      return;
    }
    const option = {
      station_id: form.location,
      place_id: form.position,
      service_type: form.service,
      status: 'SKIP',
      prefix: queueNo[0],
      login_id: JSON.parse(localStorage).id,
      queue_no: +queueNo[1],
      queue_date: (new Date()).toISOString().split('T')[0],
      visit: 0,
    }
    await QueueService().callPatient(option);
    const addPlaylistOption = {
      queue_no: patient.CallQueueNo,
      queue_status: 'SKIP',
      queue_station_id: form.location,
      queue_place_id: form.position,
    }
    const addPlaylist = await QueueService().addPlaylist(addPlaylistOption);
    if (addPlaylist && addPlaylist.data) {
      // socket.emit('queue-skip', { position: form.position })
    }
  }


  const handleMovePatient = async (nextStation: string, patient: DisplayModel) => {
    const queueNo = patient.CallQueueNo.split(' ');
    if (!localStorage) {
      return;
    }
    const placeId = (nextStation.toLowerCase().includes('dokter') && defaultDoctor) ? defaultDoctor.QueuePlaceId : '';

    const moveNextOption = {
      prefix: queueNo[0],
      queue_no: +queueNo[1],
      queue_place_id: placeId,
      queue_station_id: nextStation,
      prev_station: form.location,
      employee_id: JSON.parse(localStorage).id,
      tipe_pelayanan: form.service,
      queue_date: (new Date()).toISOString().split('T')[0],
      medical_record_no: patient.MedicalRecordNo,
      patient_name: patient.PatientName,
      id_dokter: patient.IdDokter,
    }
    const option = {
      prefix: queueNo[0],
      queue_no: +queueNo[1],
      place_id: form.position,
      login_id: JSON.parse(localStorage).id,
      station_id: form.location,
      service_type: form.service,
    }
    await QueueService().finishQueue(option, moveNextOption);

  }

  const isSkipAble = () => {
    return display && display.isSkipAble();
  }

  const isFinishAble = () => {
    return display && display.isFinishAble();
  }

  const isTemporaryDisplay = () => {
    return display && display.isTemporaryDisplay();
  }

  const SkipButton = () => {
    if (isSkipAble() && display && socketConnected && isTemporaryDisplay() === false && isFinishAble() === true) {
      return <IconButton onButtonClick={() => handleSkipPatient(display)} icon={CornerUpRight} label="Lewati" color="warning" />
    }
    if ((isTemporaryDisplay() && display) || (isFinishAble() === false)) {
      return <IconButton icon={CornerUpRight} label="Lewati" color="warning" disabled />
    }
    return <IconButton icon={CornerUpRight} label="Lewati" color="warning" disabled />
  }

  const FinishButton = () => {
    if (isFinishAble() && socketConnected && display && isTemporaryDisplay() === false && isSkipAble() === true) {
      return <DropdownToggle color='success' caret >
      Selesai
      </DropdownToggle>
    }
    if ((isTemporaryDisplay() && display) || (isSkipAble() === false)) {
      return <DropdownToggle color='success' caret disabled>
      Selesai
      </DropdownToggle>
    }
    return <DropdownToggle color='success' caret disabled>
      Selesai
    </DropdownToggle>
  }

  // const handleSelected = () => {
  //   if (doctorStations && defaultDoctor) {
  //     const selected = doctorStations.find((item: any) => item.QueuePlaceId.includes(idDokter));
  //     return selected ? selected.QueuePlaceName : 'Pilih Dokter';
  //   }
  // }

  const handleChangeDoctor = (id: any) => {
    if (doctorStations) {
      const def = doctorStations.find((item: any) => item.QueuePlaceId === id)
      if (def) {
        setDefaultDoctor(def);
      }
    }
  }

  return (
    <Card className="border-primary">
      <CardHeader className="bg-primary text-white">
        <CardTitle>Antrean saat ini</CardTitle>
      </CardHeader>
      {
        !display && (
          <>
            <CardBody>
              <Col>
                <Row className="justify-content-center pt-1 d-flex"><h1 className="display-3">-</h1></Row>
              </Col>
              <Col className="p-1">
                <Row>No.MR : -</Row>
                <Row>Nama : -</Row>
              </Col>
            </CardBody>
            <CardFooter>
              <Row className="justify-content-around d-flex">
                <IconButton icon={CornerUpRight} label="Lewati" color="secondary" disabled />
                <IconButton icon={Check} label="Selesai" color="secondary" disabled />
              </Row>
            </CardFooter>
          </>
        )
      }
      {
        display && (
          <>
            <CardBody>
              <Col>
                <Row className="justify-content-center pt-1 d-flex"><h1 className="display-3">{display.CallQueueNo}</h1></Row>
                <Row className="justify-content-center">{display.QueueStatus}</Row>
              </Col>
              <Col className="p-1">
                <Row>No.MR : {display.MedicalRecordNo}</Row>
                <Row>Nama : {display.PatientName}</Row>
              </Col>
            </CardBody>
            <CardFooter>
              <Row className="justify-content-around d-flex">
                <SkipButton/>
                <UncontrolledButtonDropdown>
                  <FinishButton/>
                  <DropdownMenu style={{ maxHeight: '350px', overflow: 'scroll' }}>
                    {
                      availablePlaces && availablePlaces.map((availablePlace: AvailablePlaceModel, key: number) => {
                        return (<DropdownItem onClick={() => {
                          if (availablePlace.DoctorStations && availablePlace.is_dokter) {
                            toggleDropdownModal(availablePlace.QueueStationNext, availablePlace.DoctorStations)
                          } else {
                            toggleOpen(availablePlace.QueueStationNext)
                          }
                        }} tag='a' key={key}>{availablePlace.QueueStationName}</DropdownItem>)
                      })
                    }
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </Row>
            </CardFooter>
            <ConfirmModal  isOpen={showModal} toggle={toggleClose} header='Antrian' onButtonClose={() => {
              toggleClose();
            }} onButtonClick={() => {
              handleMovePatient(selectedStation, display);
              toggleClose();
            } } body={`Apakah anda yakin ingin memindahkan pasien ke ${(selectedStation.toLowerCase().includes('dokter') && defaultDoctor) ? defaultDoctor.QueuePlaceName : selectedStation} ?`} />
            <DropdownModal
              isOpen={dropdownModal}
              toggle={closeDropdownModal}
              header='Pilih Dokter'
              color='success'
              item={doctorStations}
              onChange={(id: any) => handleChangeDoctor(id)}
              selected={(defaultDoctor) ? defaultDoctor.QueuePlaceId : ''}
              onButtonClick={() => {
                if (!defaultDoctor || (defaultDoctor && defaultDoctor === '')) {
                  return;
                }
                toggleOpen(selectedStation);
                closeDropdownModal();
              }}
            />
          </>
        )
      }
    </Card>
  );
}

export default QueueDisplay;
