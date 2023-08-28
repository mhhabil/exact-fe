import { Button, Label, Row, Table } from 'reactstrap';
import {
  fetchApprovalHistories,
  fetchPendingRequests,
} from '@modules/account/request-mr/stores/request-mr.store';
import { ApproveMRActionRequest } from '@modules/account/request-mr/requests';
import { RequestMRService } from '@modules/account/request-mr/services';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';
import { DateTimeConverter } from '@src/shared/datetime-converter';


const PendingRequestTable = () => {

  const { filterApproval, filterPending, pendingRequest } = useAppSelector(state => state.requestMr);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (filterPending) {
      dispatch(fetchPendingRequests(filterPending));
    }
  }, [filterPending]);

  const handleApproveRequest = (id: string) => {
    const params = ApproveMRActionRequest.createFromJson({
      id,
      action: '1',
    });
    RequestMRService().approve(params)
      .then(() => {
        dispatch(fetchPendingRequests(filterPending));
        dispatch(fetchApprovalHistories(filterApproval));
      })
      .catch(err => console.error(err))
  }

  const handleRejectRequest = (id: string) => {
    const params = ApproveMRActionRequest.createFromJson({
      id,
      action: '0',
    });
    RequestMRService().approve(params)
      .then(() => {
        dispatch(fetchPendingRequests(filterPending));
        dispatch(fetchApprovalHistories(filterApproval));
      })
      .catch(err => console.error(err))
  }

  if (!pendingRequest) {
    return null;
  }
  return (
    <>
      <Row className='my-2'>
        <Label className='fs-4 mb-1'>Waiting Approval Requests</Label>
        <Table responsive className='mb-3'>
          <thead>
            <tr className='text-center'>
              <th>#</th>
              <th>No Request</th>
              <th>Tanggal Request</th>
              <th>Nomor MR</th>
              <th>Tujuan</th>
              <th>Expired Date</th>
              <th>Request By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              pendingRequest && pendingRequest.records.map((pending, key) => {
                return (
                  <tr key={key}>
                    <td className='text-center'>{ key + 1 }</td>
                    <td className='text-center'>{ pending.Request_ID }</td>
                    <td>{ `${DateTimeConverter.convertToDateTime(pending.Requested_At)}` }</td>
                    <td className='text-center'><pre>{ pending.MR_List.join('\n') }</pre></td>
                    <td className='text-center'>{ pending.Purpose }</td>
                    <td>{ `${DateTimeConverter.convertToDateTime(pending.Expired_At)}` }</td>
                    <td className='text-center'>{ pending.Requested_By_Name }</td>
                    <td className='text-center'>
                      <div className='mb-1'>
                        <Button
                          className='text-success'
                          type='button'
                          color='success'
                          size='sm'
                          onClick={() => handleApproveRequest(pending.id)}
                        >
                          Approve
                        </Button>
                      </div>
                      <div>
                        <Button
                          className='text-danger'
                          type='button'
                          color='danger'
                          size='sm'
                          onClick={() => handleRejectRequest(pending.id)}
                        >
                          Reject
                        </Button>
                      </div>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Row>
    </>
  );
}

export default PendingRequestTable;
