import { Button, Modal, ModalBody, ModalHeader, Row, Table } from 'reactstrap';
import { IPatientVisitModel, ITreatmentModel } from '@modules/site/patient-list/models';
import {
  fetchTreatments,
  handleSelectedPatient,
  handleSelectPatientModal,
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

const SelectTreatmentModal = (props: { isOpen: boolean, toggle: any }) => {

  const { isOpen, toggle } = props;
  const { treatments, treatment } = useAppSelector<{ selectedPatient: IPatientVisitModel, treatments: ITreatmentModel[], treatment: ITreatmentModel | undefined }>(state => state.patient);
  const dispatch = useAppDispatch();

  const router = useRouter();

  const { publicRuntimeConfig } = getConfig();

  useEffect(() => {
    if (treatment) {
      dispatch(fetchTreatments({
        kode_cabang: treatment.Kode_Cabang,
        nomor_mr: treatment.No_MR,
      }));
    }
  }, [treatment]);

  const handleSelectTreatment = (treatment: ITreatmentModel) => {
    dispatch(handleTreatment(treatment));
    dispatch(handlePatientIdentity(undefined));
    dispatch(handlePreliminaryStudy(undefined));
    toggle(!isOpen);
  }

  if (!treatment) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} className="modal-dialog-centered modal-xl">
      <ModalHeader toggle={() => {
        toggle(!isOpen);
      }}>
        { treatment.Pasien.Nama }
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
