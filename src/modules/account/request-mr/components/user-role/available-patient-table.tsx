import { Button, Col, Input, Label, Row, Table } from 'reactstrap';
import {
  fetchAvailablePatients,
  handleFilter,
} from '@modules/account/request-mr/stores/request-mr.store';
import {
  fetchLastTreatment,
  handleSelectedPatient,
} from '@modules/site/patient-list/stores/patient.store'
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useRouter } from 'next/router';

import AppPagination from '@shared/pagination/components';
import RequestMRPatientLimit from '@modules/account/request-mr/components/user-role/request-mr-patient-limit';
import { RequestMRPatientRequest } from '@modules/account/request-mr/requests';
import SelectTreatmentModal from '@modules/site/patient-list/components/select-treatment-modal';
import { handlePatientIdentity } from '@src/modules/information/patient-identity/stores/patient-identity.store';

const RequestMRPatient = () => {

  const { filter, patients } = useAppSelector(state => state.requestMr);
  const [search, setSearch] = useState<string>('')
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (filter) {
      dispatch(fetchAvailablePatients(filter));
    }
  }, [filter]);

  const normalDate = () => {
    const d = new Date();
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`
    return dateFormat;
  }

  const handleChangeParams = (e: any) => {
    setSearch(e.target.value);
  }

  const handleSearch = () => {
    if (filter) {
      dispatch(fetchAvailablePatients(RequestMRPatientRequest.createFromJson({ ...filter, search })));
    }
  }

  const handleSelectTodayPatient = (patient: any) => {
    if (patient) {
      dispatch(fetchLastTreatment({
        kode_cabang: patient.Kode_Cabang,
        nomor_mr: patient.No_MR,
      }));
      const paramFilter = RequestMRPatientRequest.createFromJson({ ...filter, search: undefined });
      dispatch(handlePatientIdentity(undefined));
      dispatch(handleFilter(paramFilter));
    }
  }

  if (!patients) {
    return null;
  }
  return (
    <>
      <Row className="my-2">
        <Col md='2' className="align-items-center">
          <Label>Pencarian</Label>
        </Col>
        <Col className="align-items-center">
          <Input
            placeholder="Masukkan Nama"
            id="name"
            name="name"
            onChange={(e) => handleChangeParams(e)}
          />
        </Col>
        <Col className="align-items-center">
          <Button
            type="button"
            color="primary"
            onClick={() => handleSearch()}
          >
            Cari
          </Button>
        </Col>
      </Row>
      <Row>
        <RequestMRPatientLimit />
      </Row>
      <Row>
        <Table responsive>
          <thead>
            <tr className='text-center'>
              <th>#</th>
              <th>Nomor MR</th>
              <th>Nama</th>
              <th>Tanggal Lahir</th>
              <th>Alamat</th>
              <th>Tgl Berobat Terakhir</th>
              <th>Tipe Pasien</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {
              patients && patients.records.map((patient, key) => {
                return (
                  <tr key={key}>
                    <td className='text-center'>{ key + 1 + (filter.offset) }</td>
                    <td className='text-center'>{ patient.No_MR }</td>
                    <td>{ patient.Pasien.Nama }</td>
                    <td className='text-center'>{ patient.Pasien.Tgl_Lahir }</td>
                    <td>{ patient.Pasien.Alamat }</td>
                    <td className='text-center'>{ `${patient.Tgl_Berobat} ${patient.Jam_Kunjungan}` }</td>
                    <td className='text-center'>{ patient.Tipe_Pasien }</td>
                    <td>
                      <div className='d-flex'>
                        {
                          patient.Tgl_Berobat && patient.Tgl_Berobat === normalDate() && (
                            <Button size='sm' style={{ fontSize: '7pt' }} color="primary" onClick={() => {
                              handleSelectTodayPatient(patient)
                              router.push('/dashboard/home').then(undefined)
                            }}>Pilih Tgl. Hari Ini</Button>
                          )
                        }
                        {
                          patient.Tgl_Berobat && patient.Tgl_Berobat !== normalDate() && (
                            <Button size='sm' style={{ fontSize: '7pt' }} disabled color="primary">Pilih Tgl. Hari Ini</Button>
                          )
                        }
                        <Button size='sm' style={{ fontSize: '7pt', marginLeft: '10px' }} color="warning" onClick={() => {
                          dispatch(handleSelectedPatient(patient))
                          const paramFilter = RequestMRPatientRequest.createFromJson({ ...filter });
                          dispatch(handleFilter(paramFilter));
                        }}>Pilih Tgl. Lainnya</Button>
                      </div>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Row>
      <Row>
        <AppPagination
          currentPage={patients.currentPage}
          totalPages={patients.totalPage}
          itemsPerPage={filter.limit}
          totalItems={patients.total}
          onChangePage={
            (page: number) => {
              dispatch(handleFilter(RequestMRPatientRequest.createFromJson({ ...filter, offset: ((+page * +filter.limit) - +(filter.limit)) })));
            }
          } />
      </Row>
      <SelectTreatmentModal />
    </>
  );
}

export default RequestMRPatient;
