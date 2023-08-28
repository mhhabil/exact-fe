import { Label, Row, Table } from 'reactstrap';
import {
  fetchRequestHistories, handleFilterRequest,
} from '@modules/account/request-mr/stores/request-mr.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

import AppPagination from '@shared/pagination/components';
import { BaseRecordRequest } from '@modules/account/request-mr/requests';
import RequestHistoryLimit from '@modules/account/request-mr/components/user-role/request-history-limit';

const status = [
  {
    id: '0',
    label: 'Ditolak',
  },
  {
    id: '1',
    label: 'Diajukan',
  },
  {
    id: '2',
    label: 'Disetujui',
  },
]

const RequestHistoryTable = () => {

  const { filterRequests, requestHistories } = useAppSelector(state => state.requestMr);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (filterRequests) {
      dispatch(fetchRequestHistories(filterRequests));
    }
  }, [filterRequests]);

  const getStatus = (id: string) => {
    const selected = status.find((c: any) => c.id === id);
    return selected ? selected.label : '';
  }

  if (!requestHistories) {
    return null;
  }
  return (
    <>
      <Row>
        <Label className='fs-4 mb-1'>Request History</Label>
        <RequestHistoryLimit />
      </Row>
      <Row>
        <Table responsive>
          <thead>
            <tr className='text-center'>
              <th>#</th>
              <th>No Request</th>
              <th>Tanggal Request</th>
              <th>Nomor MR</th>
              <th>Tujuan</th>
              <th>Status Approval</th>
              <th>Expired Date</th>
            </tr>
          </thead>
          <tbody>
            {
              requestHistories && requestHistories.records.map((request, key) => {
                return (
                  <tr key={key}>
                    <td className='text-center'>{ key + 1 + (filterRequests.offset) }</td>
                    <td className='text-center'>{ request.Request_ID }</td>
                    <td className='text-center'>{ request.Requested_At }</td>
                    <td><pre>{ request.MR_List.join('\n') }</pre></td>
                    <td className='text-center'>{ request.Purpose }</td>
                    <td className='text-center'>{ getStatus(request.Approval_Status) }</td>
                    <td className='text-center'>{ request.Expired_At }</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Row>
      <Row>
        <AppPagination
          currentPage={requestHistories.currentPage}
          totalPages={requestHistories.totalPage}
          itemsPerPage={filterRequests.limit}
          totalItems={requestHistories.total}
          onChangePage={
            (page: number) => {
              dispatch(handleFilterRequest(BaseRecordRequest.createFromJson({ ...filterRequests, offset: ((+page * +filterRequests.limit) - +(filterRequests.limit)) })));
            }
          } />
      </Row>
    </>
  );
}

export default RequestHistoryTable;
