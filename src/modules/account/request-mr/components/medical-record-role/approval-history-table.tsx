import { Label, Row, Table } from 'reactstrap';
import {
  fetchApprovalHistories, handleFilterApproval,
} from '@modules/account/request-mr/stores/request-mr.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

import AppPagination from '@shared/pagination/components';
import ApprovalLimit from '@modules/account/request-mr/components/medical-record-role/approval-limit';
import { BaseRecordRequest } from '@modules/account/request-mr/requests';

const ApprovalHistoryTable = () => {

  const { filterApproval, approvalHistories } = useAppSelector(state => state.requestMr);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (filterApproval) {
      dispatch(fetchApprovalHistories(filterApproval));
    }
  }, [filterApproval]);

  if (!approvalHistories) {
    return null;
  }
  return (
    <>
      <Row>
        <Label className='fs-4 mb-1'>Approval History</Label>
        <ApprovalLimit />
      </Row>
      <Row>
        <Table responsive>
          <thead>
            <tr className='text-center'>
              <th>#</th>
              <th>No Request</th>
              <th>Nomor MR</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {
              approvalHistories && approvalHistories.records.map((approval, key) => {
                return (
                  <tr key={key}>
                    <td className='text-center'>{ key + 1 + (filterApproval.offset) }</td>
                    <td className='text-center'>{ approval.Request_ID }</td>
                    <td>{ approval.MR_List.join() }</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Row>
      <Row>
        <AppPagination
          currentPage={approvalHistories.currentPage}
          totalPages={approvalHistories.totalPage}
          itemsPerPage={filterApproval.limit}
          totalItems={approvalHistories.total}
          onChangePage={
            (page: number) => {
              dispatch(handleFilterApproval(BaseRecordRequest.createFromJson({ ...filterApproval, offset: ((+page * +filterApproval.limit) - +(filterApproval.limit)) })));
            }
          } />
      </Row>
    </>
  );
}

export default ApprovalHistoryTable;
