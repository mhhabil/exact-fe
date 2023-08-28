import { Button, Col, Form, FormGroup, Input, Label, Table } from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import { CreateGivenMeds, UpdateGivenMeds } from "../requests";
import { Fragment, useState } from "react";
import { HowToUse, IHowToUse, IMedicine, Medicine } from "@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model";
import { ISignatureModel, SignatureModel } from "@src/shared/signature/models/signature.model";
import { AppRequest } from "@src/shared/request";
import BaseSelect from 'react-select';
import FixRequiredSelect from "@src/shared/input/components/FixRequiredSelect";
import { RecordsOfMedicationOnTimeService } from "../services";
import { Signature } from "@src/shared/signature/components";
import { SubmitButton } from "@src/shared/button";
import { fetchMeds } from "../stores/records-of-medication-on-time.store";
import routes from "../consts/routes";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const GivenMedsForm = (props: { meds?: any, medsList: Array<IMedicine>, htuList: Array<IHowToUse>, onCancel: any }) => {
  const { meds, medsList, htuList, onCancel } = props;
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const dispatch = useAppDispatch();

  const [satuanName, setSatuanName] = useState<string>(meds?.Nama_Satuan ?? '');
  const [processing, setProcessing] = useState<boolean>(false);

  const { register, control, handleSubmit, setValue } = useForm({
    mode: 'onChange',
    defaultValues: {
      meds_name: meds?.ID_Obat ?? '',
      route: meds?.Rute ?? '',
      how_to_use: meds?.ID_AturanPakai ?? '',
      notes: meds?.Catatan ?? '',
      nama_obat: meds?.Nama_Obat ?? '',
      aturan_pakai: meds?.Kode_AturanPakai ?? '',
      satuan: meds?.Nama_Satuan ?? '',
      ttd_dokter: meds?.TTD_Dokter ?? '',
      id_dokter_obat: meds?.ID_Dokter ?? '',
    },
  })

  const handleDoctorSigned = (signature: ISignatureModel) => {
    setValue('ttd_dokter', signature.Signature);
    setValue('id_dokter_obat', signature.ID_Karyawan);
  }

  const handleSubmitMeds = (value: any) => {
    if (!treatment) {
      return;
    }
    setProcessing(true)
    const appRequest = AppRequest.createFromStore(treatment);
    const objForm = CreateGivenMeds.createParams(value);
    if (!meds) {
      const params = CreateGivenMeds.createFromJson({ ...appRequest, ...objForm });
      RecordsOfMedicationOnTimeService()
        .createMeds(params)
        .then(() => {
          dispatch(fetchMeds(appRequest));
          setProcessing(false);
          onCancel()
        })
        .catch((err) => {
          console.error(err);
          setProcessing(false);
          onCancel()
        })
    } else {
      const params = UpdateGivenMeds.createFromJson({ ...appRequest, ...objForm, id: meds.ID });
      RecordsOfMedicationOnTimeService()
        .updateMeds(params)
        .then(() => {
          dispatch(fetchMeds(appRequest));
          setProcessing(false);
          onCancel()
        })
        .catch((err) => {
          console.error(err);
          setProcessing(false);
          onCancel()
        })
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitMeds)}>
      <Label className="fs-4">Daftar Obat Yang Akan Diberikan</Label>
      <Table style={{ width: '100%' }} bordered>
        <thead>
          <tr style={{ textAlign: 'center' }}>
            <th style={{ width: '40%' }}><b>{`Nama & Dosis`}</b></th>
            <th><b>Satuan</b></th>
            <th style={{ width: '50px' }}><b>Rute</b></th>
            <th style={{ width: '35%' }}><b>Aturan Pakai</b></th>
            <th style={{ width: '20%' }}><b>Catatan</b></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='pt-2'>
              <Controller
                control={control}
                name={`meds_name`}
                defaultValue={{ label: meds?.Nama_Obat, value: meds?.ID_Obat }}
                rules={{required: true}}
                render={({ onChange, name, ref }) => (
                  <Fragment>
                    <FixRequiredSelect
                      {...props}
                      required={true}
                      name={name}
                      defaultValue={{ label: meds?.Nama_Obat, value: meds?.ID_Obat }}
                      onChange={(val: any) => {
                        onChange(val);
                        setSatuanName(val.satuan);
                      }}
                      SelectComponent={BaseSelect}
                      options={medsList && medsList.map((med: Medicine) => ({ label: med.Nama_Inventory, value: med.Kode_Inventory, satuan: med.Nama_Satuan }))}
                    />
                  </Fragment>
                )}
              />
            </td>
            <td className='pt-0'>
              {
                satuanName
              }
            </td>
            <td className='pt-0'>
              <Input
                type="select"
                id="route"
                name="route"
                defaultValue={meds?.Rute}
                innerRef={register()}
                style={{ width: '100px' }}
                required
              >
                <option value="">--</option>
                {
                  routes.map((item, key: number) => (
                    <option key={key} value={item}>{item}</option>
                  ))
                }
              </Input>
            </td>
            <td className='pt-2'>
              <Controller
                control={control}
                name={`how_to_use`}
                defaultValue={{ label: meds?.Kode_AturanPakai, value: meds?.Kode_AturanPakai, id: meds?.ID_AturanPakai }}
                render={({ onChange, name, ref }) => (
                  <Fragment>
                    <FixRequiredSelect
                      {...props}
                      required={true}
                      name={name}
                      defaultValue={{ label: meds?.Kode_AturanPakai, value: meds?.Kode_AturanPakai, id: meds?.ID_AturanPakai }}
                      onChange={(val: any) => {
                        onChange(val);
                      }}
                      SelectComponent={BaseSelect}
                      options={htuList && htuList.map((med: HowToUse) => ({ label: med.Kode, value: med.Kode, id: med.ID_AturanPakai }))}
                    />
                  </Fragment>
                )}
              />
            </td>
            <td className='pt-0' style={{ marginTop: 0 }}>
              <Input
                type='text'
                name={`notes`}
                defaultValue={meds?.Catatan ?? ''}
                innerRef={register()}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <FormGroup>
        <Col>
          <Signature
            label="Dokter"
            type="picker"
            persons={doctors}
            initialImage={(meds && meds.TTD_Dokter && meds.TTD_Dokter !== '') ? meds.TTD_Dokter : undefined}
            additionalLabel={(meds) ? meds.Nama_Dokter : undefined}
            onSigned={(assigner: SignatureModel) => handleDoctorSigned(assigner)}
          />
          <Input
            type="hidden"
            name="id_dokter_obat"
            innerRef={register()}
          />
          <Input
            type="hidden"
            name="ttd_dokter"
            innerRef={register()}
          />
        </Col>
      </FormGroup>
      <div className="d-flex mb-0 justify-content-center">
        <SubmitButton
          buttonColor='primary'
          spinnerColor='light'
          processing={processing}
          label="Simpan"
          spinnerStyle={{ width: '1rem', height: '1rem' }}
        />
        <Button color="warning" type="button" onClick={() => {
          if (onCancel) {
            onCancel()
          }
        }}>Cancel</Button>
      </div>
    </Form>
  )
}

export default GivenMedsForm;
