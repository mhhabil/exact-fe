import { Button, Row, Table } from 'reactstrap';
import {
  fetchConsultationPatients,
  fetchLastTreatment,
  fetchPatients,
  handleFilter,
  handleSelectPatientModal,
  handleSelectedPatient,
} from '@modules/site/patient-list/stores/patient.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';

import AppPagination from '@shared/pagination/components';
import { PatientFilterRequest } from '@modules/site/patient-list/requests';
import PatientTableLimit from '@modules/site/patient-list/components/patient-table-limit';
import SelectTreatmentModal from '@modules/site/patient-list/components/select-treatment-modal';
import { handlePatientIdentity } from '@src/modules/information/patient-identity/stores/patient-identity.store';
import { handlePreliminaryStudy } from '@src/modules/ro/preliminary-study/stores/preliminary-study.store';

const PatientTable = () => {

  const { filter, patients } = useAppSelector(state => state.patient);
  const { userData } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const normalDate = () => {
    const d = new Date();
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`
    return dateFormat;
  }

  useEffect(() => {
    if (userData) {
      if (userData.isAllAccess) {
        dispatch(fetchPatients(filter));
      } else if (userData.isDokter && !userData.isRM) {
        const params = PatientFilterRequest.createFromJson({ ...filter, isDokter: 1, isRM: 0, isOther: 0 });
        dispatch(fetchPatients(params));
      } else if (userData.isDokter && userData.isRM) {
        const params = PatientFilterRequest.createFromJson({ ...filter, isDokter: 1, isRM: 0, isOther: 0 });
        dispatch(fetchPatients(params));
      } else if (userData && userData.isRM) {
        dispatch(fetchPatients(filter));
      } else {
        dispatch(fetchPatients(filter));
      }
    }
  }, [filter, userData]);

  const handleSelectTodayPatient = (patient: any) => {
    if (patient) {
      dispatch(fetchLastTreatment({
        kode_cabang: patient.Kode_Cabang,
        nomor_mr: patient.No_MR,
      }));
      const paramFilter = PatientFilterRequest.createFromJson({ ...filter, search: undefined });
      dispatch(handlePatientIdentity(undefined));
      dispatch(handlePreliminaryStudy(undefined));
      dispatch(handleSelectPatientModal(false));
      dispatch(handleFilter(paramFilter));
    }
  }

  if (!patients) {
    return null;
  }
  return (
    <>
      <Row>
        <PatientTableLimit />
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
                  <tr key={key} style={patient.isCpptDokter ? { backgroundColor: '#98f542' } : {}}>
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
                            <Button size='sm' style={{ fontSize: '7pt' }} color="primary" onClick={() => handleSelectTodayPatient(patient)}>Pilih Tgl. Hari Ini</Button>
                          )
                        }
                        {
                          patient.Tgl_Berobat && patient.Tgl_Berobat !== normalDate() && (
                            <Button size='sm' style={{ fontSize: '7pt' }} disabled color="primary">Pilih Tgl. Hari Ini</Button>
                          )
                        }
                        <Button size='sm' style={{ fontSize: '7pt', marginLeft: '10px' }} color="warning" onClick={() => {
                          dispatch(handleSelectedPatient(patient))
                          const paramFilter = PatientFilterRequest.createFromJson({ ...filter });
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
              dispatch(handleFilter(PatientFilterRequest.createFromJson({ ...filter, offset: ((+page * +filter.limit) - +(filter.limit)) })));
            }
          } />
      </Row>
      <SelectTreatmentModal />
    </>
  );
}

export default PatientTable;
