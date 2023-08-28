import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Table } from "reactstrap";
import { CreateRecordsOfMedicationOnTime, UpdateRecordsOfMedicationOnTime } from "../requests/update-records-of-medication-on-time.request";
import { IGivenMedsFormModel, IRecordsOfMedicationOnTimeFormModel } from "../models/records-of-medication-on-time.model";
import { useEffect, useState } from "react";
import { AppRequest } from "@src/shared/request";
import { RecordsOfMedicationOnTimeService } from "../services";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { SubmitButton } from "@src/shared/button";
import { fetchRecordsOfMedicationOnTime } from "../stores/records-of-medication-on-time.store";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const RecordsOfMedicationModal = (props: { data?: IRecordsOfMedicationOnTimeFormModel, isOpen: boolean, setIsOpen: any }) => {
  const { data, isOpen, setIsOpen } = props;
  const dispatch = useAppDispatch();

  const randomNum = Math.floor((Math.random() * 10) + 1);

  const convertDatetimeToUTC = (date?: any) => {
    const d = date ? new Date(date) : new Date();
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}T${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }

  const getMedsFromModel = () => {
    if (data && data.Obat && Array.isArray(data.Obat)) {
      const newData = data.Obat.map((item) => {
        return {
          kode_obat: item.Kode,
          nama_obat: item.Nama,
          nama_satuan: item.Satuan,
          kode_aturanpakai: item.Aturan_Pakai,
          rute: item.Rute,
        }
      });
      return newData;
    } else {
      return [];
    }
  }

  const { treatment } = useAppSelector(state => state.patient);
  const { nurses } = useAppSelector(state => state.nurse);
  const { meds } = useAppSelector(state => state.recordsOfMedicationOnTime);

  const getInitialMeds = () => {
    if (meds && meds.records && Array.isArray(meds.records) && data && data.Obat && Array.isArray(data.Obat)) {
      const ids = data.Obat.map((item) => item.Kode);
      const filtered = meds.records.filter((item) => ids.includes(item.ID_Obat))
      return filtered;
    } else {
      return undefined;
    }
  }

  const [processing, setProcessing] = useState<boolean>(false);
  const [selectedRows, setSelectedRows] = useState<IGivenMedsFormModel[] | undefined>(getInitialMeds());
  const [waktu, setWaktu] = useState<string>(data?.Waktu_Pemberian ?? convertDatetimeToUTC());
  const [ttdPasien, setTtdPasien] = useState<string>(data?.Tanda_Tangan_Pasien ?? '');
  const [ttdPerawat, setTtdPerawat] = useState<string>(data?.Tanda_Tangan_Perawat ?? '');
  const [idPerawat, setIdPerawat] = useState<string>(data?.ID_Perawat ?? '');
  const [obat, setObat] = useState<any[]>(getMedsFromModel());

  useEffect(() => {
    if (selectedRows && Array.isArray(selectedRows)) {
      const newRows = selectedRows.map((item) => {
        return {
          kode_obat: item.ID_Obat,
          nama_obat: item.Nama_Obat,
          nama_satuan: item.Nama_Satuan,
          kode_aturanpakai: item.ID_AturanPakai,
          rute: item.Rute,
        }
      });
      setObat(newRows);
    }
  }, [selectedRows]);

  const handleSubmitForm = () => {
    if (!treatment) {
      return;
    }
    if (ttdPasien === '' || ttdPerawat === '') {
      if (ttdPasien === '') {
        alert('Tanda tangan pasien wajib diisi!!!');
        return;
      }
      if (ttdPerawat === '') {
        alert('Tanda tangan perawat wajib diisi!!!');
        return;
      }
    }
    setProcessing(true)
    const obj = {
      waktu,
      ttd_pasien: ttdPasien,
      ttd_perawat: ttdPerawat,
      id_perawat: idPerawat,
      obat,
    }
    const appRequest = AppRequest.createFromStore(treatment);
    if (!data) {
      const params = CreateRecordsOfMedicationOnTime.createFromJson({...obj, ...appRequest});
      RecordsOfMedicationOnTimeService()
        .create(params)
        .then(() => {
          dispatch(fetchRecordsOfMedicationOnTime(appRequest));
          setProcessing(false);
          setIsOpen(undefined);
        })
        .catch((err) => {
          console.error(err);
          setProcessing(false);
        })
    } else {
      const params = UpdateRecordsOfMedicationOnTime.createFromJson({...obj, ...appRequest, id: data.ID});
      RecordsOfMedicationOnTimeService()
        .update(params)
        .then(() => {
          dispatch(fetchRecordsOfMedicationOnTime(appRequest));
          setProcessing(false);
          setIsOpen(undefined);
        })
        .catch((err) => {
          console.error(err);
          setProcessing(false);
        })
    }
  }

  const getRowClass = (code: string) => {
    if (selectedRows && selectedRows.find(c => c.ID_Obat === code)) {
      return 'bg-primary cursor-pointer'
    }
    return 'cursor-pointer'
  }

  const handleClickList = (item: IGivenMedsFormModel) => {
    if (selectedRows) {
      const rows = selectedRows.map(c => c);
      if (rows.find(c => c.ID_Obat === item.ID_Obat) && rows.length > 0) {
        const duplicate = rows.findIndex(c => c.ID_Obat === item.ID_Obat);
        if (duplicate > -1) {
          rows.splice(duplicate, 1);
          setSelectedRows(rows);
        }
      } else {
        setSelectedRows([...selectedRows, item]);
      }
    } else {
      setSelectedRows([item]);
    }
  }

  const getDescString = (med: IGivenMedsFormModel) => {
    return `Aturan Pakai: ${med.Kode_AturanPakai}\nSatuan: ${med.Nama_Satuan}`;
  }

  const handlePatientSigned = (signature: string) => {
    setTtdPasien(signature);
  }

  const handleNurseSigned = (image: SignatureModel) => {
    setTtdPerawat(image.Signature);
    setIdPerawat(image.ID_Karyawan);
  }

  return (
    <Modal isOpen={isOpen} size="xl">
      <ModalHeader toggle={() => setIsOpen(undefined)}>{data ? 'Update Data' : 'Create Data'}</ModalHeader>
      <ModalBody>
        <FormGroup className="form-group" row>
          <Col md='1'>
            <Label className="fs-5">Waktu</Label>
          </Col>
          <Col md='2'>
            <Input
              type="datetime-local"
              id="waktu"
              defaultValue={data?.Waktu_Pemberian ?? convertDatetimeToUTC()}
              onChange={(e) => setWaktu(e.target.value)}
              name="waktu"
            />
          </Col>
        </FormGroup>
        <FormGroup className="form-group mt-2" row>
          <Col>
            <Table responsive bordered>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Obat</th>
                  <th>Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {
                  meds && meds.records && Array.isArray(meds.records) && meds.records.map((item, key: number) => (
                    <tr
                      key={key}
                      className={getRowClass(item.ID_Obat)}
                      onClick={() => handleClickList(item)}
                    >
                      <td>{key + 1}</td>
                      <td><pre className={getRowClass(item.ID_Obat)}>{`${item.Nama_Obat}\n${item.ID_Obat}`}</pre></td>
                      <td><pre className={getRowClass(item.ID_Obat)}>{getDescString(item)}</pre></td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Col>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Col>
            <Signature
              label="Pasien"
              type="drawer"
              formName='farmasi/cpotw'
              component={`cpotw_sign_${randomNum}`}
              initialImage={data && data.Tanda_Tangan_Pasien && data.Tanda_Tangan_Pasien !== '' ? data.Tanda_Tangan_Pasien : undefined}
              onSigned={(image: string) => handlePatientSigned(image)}
            />
          </Col>
          <Col>
            <Signature
              label="Perawat"
              type="picker"
              persons={nurses}
              initialImage={(data && data.Tanda_Tangan_Perawat && data.Tanda_Tangan_Perawat !== '') ? data.Tanda_Tangan_Perawat : undefined}
              additionalLabel={(data) ? data.Nama_Perawat : undefined}
              onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)}
            />
          </Col>
        </FormGroup>
        <div className="d-flex mb-0 justify-content-center">
          <SubmitButton
            buttonColor='primary'
            spinnerColor='light'
            processing={processing}
            label="Simpan"
            onClick={() => handleSubmitForm()}
            spinnerStyle={{ width: '1rem', height: '1rem' }}
          />
          <Button color="warning" type="button" onClick={() => {
            setIsOpen(undefined);
          }}>Cancel</Button>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default RecordsOfMedicationModal;
