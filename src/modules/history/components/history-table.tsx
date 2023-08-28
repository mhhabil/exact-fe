import { Button, Modal, ModalBody, ModalHeader, Row, Table } from 'reactstrap';
import { HistoryCPPTRequest, HistoryRequest } from '@modules/history/requests';
import { fetchHistories, handleFilter, handleHistories } from '@modules/history/stores/history.store';
import { useEffect, useState } from 'react';
import CpptModal from './cppt-modal';
import { HistoryService } from '../services';
import HistoryTableLimit from './history-table-limit';
import getConfig from 'next/config';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';

import AppPagination from '@shared/pagination/components';
import { Data } from '../models/history.model';
import { HistoryCPPTModel } from '../models/history-cppt.model';

const HistoryTable = () => {

  const { publicRuntimeConfig } = getConfig();
  const { filter, histories } = useAppSelector(state => state.histories);
  const { userData } = useAppSelector(state => state.auth);
  const { companyCode } = useAppSelector(state => state.selectCompany);
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [dataModal, setDataModal] = useState<HistoryCPPTModel | undefined>(undefined)

  useEffect(() => {
    if (userData && userData.isDokter) {
      const params = HistoryRequest.createFromJson({ ...filter, id_dokter: userData.id });
      dispatch(fetchHistories(params));
    } else {
      dispatch(fetchHistories(filter));
    }
  }, [filter, userData]);

  const handleShowCppt = (mr: string) => {
    const params = HistoryCPPTRequest.createFromJson({ nomor_mr: mr, kode_cabang: companyCode ? companyCode : '' })
    HistoryService().getCppt(params)
      .then((res) => {
        setDataModal(res.data.data);
        setIsOpen(true);
      })
  }

  if (!histories) {
    return null;
  }
  return (
    <><>
      <Row>
        <HistoryTableLimit />
      </Row>
      <Row>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Nomor MR</th>
              <th>Nama</th>
              <th>Tanggal Lahir</th>
              <th>Alamat</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {histories && histories.data.map((history: Data, key: number) => {
              return (
                <tr key={key}>
                  <td>{key + 1 + (filter.offset)}</td>
                  <td>{history.No_MR}</td>
                  <td>{history.Nama}</td>
                  <td>{history.Tgl_Lahir}</td>
                  <td>{history.Alamat}</td>
                  <td>
                    <Button
                      onClick={() => handleShowCppt(history.No_MR)}
                      color="primary"
                    >
                      Lihat CPPT
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
      <Row>
        <AppPagination
          currentPage={histories.currentPage}
          totalPages={histories.totalPage}
          itemsPerPage={filter.limit}
          totalItems={histories.data.length}
          onChangePage={(page: number) => {
            dispatch(handleFilter(HistoryRequest.createFromJson({ ...filter, offset: ((+page * +filter.limit) - +(filter.limit)) })));
          } } />
      </Row>
    </>
    <CpptModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      data={dataModal}
    />
    </>
  );
}

export default HistoryTable;
