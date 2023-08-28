import { Button, Modal, ModalBody, ModalHeader, Row, Table } from 'reactstrap';
import { IPatientVisitModel, ITreatmentModel } from '@modules/site/patient-list/models';
import {
  fetchTreatments,
  handleFilter,
  handleSelectPatientModal,
  handleSelectedPatient,
  handleTreatment,
} from '@modules/site/patient-list/stores/patient.store';
import { AppRequest } from '@src/shared/request';
import getConfig from 'next/config';
import { handlePatientIdentity } from '@modules/information/patient-identity/stores/patient-identity.store';
import { handlePreliminaryStudy } from '@modules/ro/preliminary-study/stores/preliminary-study.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { IPatientFilterRequest, PatientFilterRequest } from '../requests';

const SelectTreatmentModal = () => {

  const { selectedPatient, treatments, filter } = useAppSelector<{ selectedPatient: IPatientVisitModel, treatments: ITreatmentModel[], filter: IPatientFilterRequest }>(state => state.patient);
  const dispatch = useAppDispatch();

  const router = useRouter();

  const { publicRuntimeConfig } = getConfig();

  useEffect(() => {
    if (selectedPatient) {
      dispatch(fetchTreatments({
        kode_cabang: selectedPatient.Kode_Cabang,
        nomor_mr: selectedPatient.No_MR,
      }));
    }
  }, [selectedPatient]);

  const handleSelectTreatment = (treatment: ITreatmentModel) => {
    dispatch(handleTreatment(treatment));
    dispatch(handlePatientIdentity(undefined));
    dispatch(handlePreliminaryStudy(undefined));
    dispatch(handleSelectPatientModal(false));
    const paramFilter = PatientFilterRequest.createFromJson({ ...filter, search: undefined });
    dispatch(handleFilter(paramFilter));
    // router.push('/dashboard/home');
  }

  if (!selectedPatient) {
    return null;
  }

  return (
    <Modal isOpen={!!selectedPatient} className="modal-dialog-centered modal-xl">
      <ModalHeader toggle={() => dispatch(handleSelectedPatient(undefined))}>
        { selectedPatient.Pasien.Nama }
      </ModalHeader>
      <ModalBody>
        <Row>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Waktu Berobat</th>
                <th>Jenis Pelayanan</th>
                <th>Penanganan</th>
                <th>Nama Dokter</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {
                treatments && treatments.map((treatment: ITreatmentModel, key: number) => {
                  return (
                    <tr key={key} style={treatment.isCpptDokter ? { backgroundColor: '#98f542' } : {}}>
                      <td>{ key + 1 }</td>
                      <td>{ treatment.Tgl_Jam_Berobat }</td>
                      <td>
                        { `${(treatment.Jenis_Pelayanan === 'RawatJalan') ? 'Rawat Jalan' : 'Rawat Inap'} (${treatment.Tipe_Pasien})` }
                      </td>
                      <td>{ treatment.Penanganan }</td>
                      <td>{ treatment.Nama_Dokter }</td>
                      <td><Button color="primary" onClick={() => handleSelectTreatment(treatment)}>Pilih</Button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </Row>
      </ModalBody>
    </Modal>
  )
}

export default SelectTreatmentModal;
