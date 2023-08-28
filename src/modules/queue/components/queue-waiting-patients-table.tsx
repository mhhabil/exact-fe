import { Col, Input, Label, Row, Table } from 'reactstrap';
import QueueWaitingTime from './queue-waiting-time';
import QueueWaitingTimeTotal from './queue-waiting-time-total';

import { DisplayModel, WaitingPatientModel } from '@modules/queue/models';
import { fetchWaitingDoctorPatients, fetchWaitingPatients, handleSelectedPatient, handleSortOption } from '@modules/queue/stores/queue.store';
import sortOptions from '../const/sort-options';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

const QueueWaitingPatientsTable = () => {
  const { waitingPatients, display, selectedPatient, form, sortOption } = useAppSelector<
    {
      waitingPatients: WaitingPatientModel[] | never[],
      display: DisplayModel | undefined,
      form: {
        service: any,
        location: any,
        position: any,
      },
      selectedPatient: WaitingPatientModel | undefined,
      sortOption: string,
    }>((state) => state.queue);

  const dispatch = useAppDispatch();

  const isCallAble = () => {
    // console.log(display);
    return !display || (display && display.isCallAble());
  }

  const isRecallAble = () => {
    return display && display.isRecallAble()
  }

  const getRowClass = (selected: WaitingPatientModel): string => {
    if (!form.position) {
      return 'bg-secondary';
    }
    if (selected.QueuePlaceId && form.position !== selected.QueuePlaceId) {
      if (selected && selected.isRecallAble()) {
        return 'bg-secondary';
      }
      if (display && display.isRecallAble()) {
        return 'bg-secondary';
      }
    } else {
      if (display && display.isRecallAble()) {
        if (selected && selected.CallQueueNo !== display.CallQueueNo) {
          return 'bg-secondary';
        }
      }
    }
    if (selectedPatient && (selectedPatient.MedicalRecordNo === selected.MedicalRecordNo)) {
      return 'bg-primary cursor-pointer';
    }
    return 'cursor-pointer';
  }

  const handleSortBy = (e: any) => {
    dispatch(handleSortOption(e.target.value));
    if (form.location.toLowerCase().includes('dokter')) {
      dispatch(fetchWaitingDoctorPatients({
        service_type: form.service,
        station_id: form.location,
        place_id: form.position,
        sort: e.target.value,
      }))
    } else {
      dispatch(fetchWaitingPatients({
        service_type: form.service,
        station_id: form.location,
        sort: e.target.value,
      }))
    }
  }

  return (
    <>
      <Row className='my-1'>
        <Col>
          <div className='d-flex justify-content-end align-items-center'>
            <Label className='fs-6 me-2'>Sort By</Label>
            <Input
              style={{ width: '300px' }}
              type='select'
              name='sort_by'
              onChange={(e) => handleSortBy(e)}
              defaultValue={sortOption}
              disabled={!!(waitingPatients && waitingPatients.length === 0)}
            >
              {
                sortOptions.map((item: any, key: number) => (
                  <option key={key} value={item.id}>{item.label}</option>
                ))
              }
            </Input>
          </div>
        </Col>
      </Row>
      <Table>
        <thead>
          <tr>
            <th>No.</th>
            <th>MR</th>
            <th>Nama</th>
            <th>Posisi Panggil</th>
            <th>Status</th>
            <th>Waktu Tunggu</th>
            {
              sortOption && sortOption === 'wt_total' && (
                <th>Waktu Tunggu Total</th>
              )
            }
            <th>Prioritas</th>
          </tr>
        </thead>
        <tbody>
          {
            waitingPatients && waitingPatients.map((waitingPatient: WaitingPatientModel, key) => {
              return (
                <tr key={key} className={getRowClass(waitingPatient)} onClick={() => {
                  const data = {
                    CallQueueNo: waitingPatient.CallQueueNo,
                    Code: waitingPatient.Code,
                    CreatedDate: waitingPatient.CreatedDate,
                    IdDokter: waitingPatient.IdDokter,
                    MedicalRecordNo: waitingPatient.MedicalRecordNo,
                    PatientName: waitingPatient.PatientName,
                    QueueStatus: waitingPatient.LastQueueStatus,
                    QueuePlaceName: waitingPatient.QueuePlaceName,
                    Visit: waitingPatient.Visit,
                  }

                  // if (isCallAble()) {
                  dispatch(handleSelectedPatient(waitingPatient));
                  // dispatch(handleDisplay(new DisplayModel(data)));
                  // }
                }}>
                  <td>{ waitingPatient.CallQueueNo }</td>
                  <td scope="row">{ waitingPatient.MedicalRecordNo }</td>
                  <td>{ waitingPatient.PatientName }</td>
                  <td>{ waitingPatient.QueuePlaceName }</td>
                  <td>{ (waitingPatient.LastQueueStatus === 'START') ? 'WAITING' : waitingPatient.LastQueueStatus }</td>
                  <td><QueueWaitingTime startDate={ waitingPatient.CreatedDate }/></td>
                  {
                    sortOption && sortOption === 'wt_total' && (
                      <td><QueueWaitingTimeTotal startTime={ waitingPatient.StartDate }/></td>
                    )
                  }
                  <td>
                    {
                      waitingPatient.Visit > 0 ? 2 : waitingPatient.Priority
                    }
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </>
  )
}

export default QueueWaitingPatientsTable;
