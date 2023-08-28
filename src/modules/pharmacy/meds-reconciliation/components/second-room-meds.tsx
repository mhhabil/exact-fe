import { Button, Col, FormGroup, Input, Label, Table } from "reactstrap";
import { Fragment, useEffect, useState } from "react";
import { IOfficerModel } from "@src/shared/officer";
import { MedsReconciliationModel } from "../models/meds-reconciliation.model";
import { RoomMedsReq } from "../requests/update-meds-reconciliation.request";
import { SelectInput } from "@src/shared/input";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { Trash } from "react-feather";
import followUp from "../const/follow-up.room";
import route from "../const/route";
import unit from "../const/unit";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const SecondRoomMeds = (props: { data: MedsReconciliationModel, register: any, setValue: any, errors: any, getValues: any }) => {
  const { data, register, setValue, errors, getValues } = props;
  const { officers } = useAppSelector(state => state.officer);
  const { nurses } = useAppSelector(state => state.nurse);
  const { doctors } = useAppSelector(state => state.doctor);
  const [medsRoom2, setMedsRoom2] = useState<any>(data.form && data.form.Obat_Ruangan_2 && Array.isArray(data.form.Obat_Ruangan_2) ? data.form.Obat_Ruangan_2.map(item => RoomMedsReq.createFromModel(item)) : []);

  useEffect(() => {
    if (officers) {
      setValue('id_ka_unit_ruangan_2', data.form && data.form.ID_Ka_Unit_Ruangan_2 ? data.form.ID_Ka_Unit_Ruangan_2 : '')
    }
  }, [officers])

  useEffect(() => {
    setValue('obat_ruangan_2', medsRoom2)
  }, [medsRoom2])

  const handleAddMedsRoom = () => {
    const inMeds = medsRoom2.map((n: any, key: number) => {
      return getValues(`obat_ruangan_2[${key}]`);
    });
    setMedsRoom2([...inMeds, { nama_obat: '', jumlah: '', rute: '', aturan_pakai: '', tindak_lanjut: '', perubahan_aturan_pakai: '' }]);
  }

  const handleDeleteMedsRoom = (index: number) => {
    const inMeds = medsRoom2.map((n: any, key: number) => {
      return new RoomMedsReq({
        nama_obat: getValues(`obat_ruangan_2[${key}].nama_obat`) ?? '',
        jumlah: getValues(`obat_ruangan_2[${key}].jumlah`) ?? '',
        rute: getValues(`obat_ruangan_2[${key}].rute`) ?? '',
        aturan_pakai: getValues(`obat_ruangan_2[${key}].aturan_pakai`) ?? '',
        tindak_lanjut: getValues(`obat_ruangan_2[${key}].tindak_lanjut`) ?? '',
        perubahan_aturan_pakai: getValues(`obat_ruangan_2[${key}].perubahan_aturan_pakai`) ?? '',
      });
    });
    inMeds.splice(index, 1);
    setMedsRoom2(inMeds);
  }

  const handleNurseSigned = (assigner: SignatureModel) => {
    setValue('ttd_perawat_ruangan_2', assigner.Signature);
    setValue('id_perawat_ruangan_2', assigner.ID_Karyawan);
  }

  const handlePatientSigned = (image: string) => {
    setValue('ttd_pasien_ruangan_2', image);
  }

  const handleDoctorSigned = (assigner: SignatureModel, isFormDoctor?:  boolean) => {
    if (isFormDoctor) {
      setValue('ttd_dokter_ruangan_2', assigner.Signature);
      setValue('id_dokter_ruangan_2', assigner.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('ttd_dokter_ruangan_2', assigner.Signature);
      setValue('id_dokter_ruangan_2', assigner.ID_Karyawan);
    }
  }

  const handlePharmacistSigned = (assigner: SignatureModel) => {
    setValue('ttd_apoteker_ruangan_2', assigner.Signature);
    setValue('id_apoteker_ruangan_2', assigner.ID_Karyawan);
  }
  return (
    <Fragment>
      <div className="ms-2 my-2">
        <FormGroup className="form-group align-items-center my-1" row>
          <Col md='2'>
            <Label>Unit</Label>
          </Col>
          <SelectInput
            name="unit_ruangan_2"
            mdInput='8'
            required={false}
            {...{ register, errors }}
          >
            <option value="" disabled>---</option>
            {
              unit && unit.map((item: string, key: number) => (
                <option value={item} key={key}>{item}</option>
              ))
            }
          </SelectInput>
        </FormGroup>
        <FormGroup className="form-group align-items-center my-1" row>
          <Col md='2'>
            <Label>Kepala Unit</Label>
          </Col>
          <SelectInput
            name="id_ka_unit_ruangan_2"
            mdInput='8'
            required={false}
            {...{ register, errors }}
          >
            <option value="" disabled>---</option>
            {
              officers && officers.map((item: IOfficerModel, key: number) => (
                <option value={item.ID_Karyawan} key={key}>{item.Nama}</option>
              ))
            }
          </SelectInput>
        </FormGroup>
        <FormGroup className="form-group align-items-center my-1" row>
          <Col md='2'>
            <Label>Waktu</Label>
          </Col>
          <Col md='8'>
            <Input
              type="datetime-local"
              id='waktu_ruangan_2'
              name='waktu_ruangan_2'
              innerRef={register()}
              invalid={errors['waktu_ruangan_2'] && true}
            />
          </Col>
        </FormGroup>
        <FormGroup className="form-group align-items-center my-1" row>
          <Col>
            <Table responsive bordered>
              <thead>
                <tr>
                  <th className="text-center">Nama & Kekuatan Obat</th>
                  <th className="text-center">Jumlah</th>
                  <th className="text-center">Aturan Pakai</th>
                  <th className="text-center">Rute</th>
                  <th className="text-center">Tindak Lanjut</th>
                  <th className="text-center">Perubahan Aturan Pakai</th>
                  <th className="text-center"></th>
                </tr>
              </thead>
              <tbody>
                {
                  medsRoom2 && Array.isArray(medsRoom2) && medsRoom2.map((item: RoomMedsReq, key: number) => (
                    <tr key={key}>
                      <td>
                        <Input
                          className="me-1"
                          id={`obat_ruangan_2_nama_${key}`}
                          type="text"
                          name={`obat_ruangan_2[${key}].nama_obat`}
                          innerRef={register({ required: true })}
                          required
                        />
                      </td>
                      <td>
                        <Input
                          className="me-1"
                          id={`obat_ruangan_2_jumlah_${key}`}
                          type="text"
                          name={`obat_ruangan_2[${key}].jumlah`}
                          innerRef={register({ required: true })}
                          required
                        />
                      </td>
                      <td>
                        <Input
                          className="me-1"
                          id={`obat_ruangan_2_aturan_pakai_${key}`}
                          type="text"
                          name={`obat_ruangan_2[${key}].aturan_pakai`}
                          innerRef={register({ required: true })}
                          required
                        />
                      </td>
                      <td>
                        <SelectInput
                          name={`obat_ruangan_2[${key}].rute`}
                          inputRequired
                          required
                          {...{ register, errors }}
                        >
                          <option value="">---</option>
                          {
                            route && route.map((item: string, key: number) => (
                              <option value={item} key={key}>{item}</option>
                            ))
                          }
                        </SelectInput>
                      </td>
                      <td>
                        <SelectInput
                          name={`obat_ruangan_2[${key}].tindak_lanjut`}
                          inputRequired
                          required
                          {...{ register, errors }}
                        >
                          <option value="">---</option>
                          {
                            followUp && followUp.map((item, key: number) => (
                              <option value={item.id} key={key}>{item.label}</option>
                            ))
                          }
                        </SelectInput>
                      </td>
                      <td>
                        <Input
                          className="me-1"
                          id={`obat_ruangan_2_perubahan_aturan_${key}`}
                          type="text"
                          name={`obat_ruangan_2[${key}].perubahan_aturan_pakai`}
                          innerRef={register({ required: true })}
                          required
                        />
                      </td>
                      <td className="text-center">
                        <Button style={{ padding: '4px' }} color='danger' type='button' onClick={ () => handleDeleteMedsRoom(key)}>
                          <Trash size={15} />
                        </Button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            <span
              className="text-warning cursor-pointer"
              onClick={() => handleAddMedsRoom()}
            >
              +Tambah Obat
            </span>
          </Col>
        </FormGroup>
        <FormGroup className="form-group align-items-center mt-3" row>
          <Col>
            <Signature
              label="Perawat Ruangan"
              additionalLabel={(data.form && data.form.Nama_Perawat_Ruangan_2 && data.form.Nama_Perawat_Ruangan_2 !== '') ? data.form.Nama_Perawat_Ruangan_2 : undefined}
              type="picker"
              initialImage={(data.form && data.form.TTD_Perawat_Ruangan_2 && data.form.TTD_Perawat_Ruangan_2 !== '' && !data.form.TTD_Perawat_Ruangan_2.includes('null')) ? data.form.TTD_Perawat_Ruangan_2 : undefined}
              persons={nurses}
              onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)}
            />
            <Input
              type="hidden"
              name="ttd_perawat_ruangan_2"
              innerRef={register()}
            />
            <Input
              type="hidden"
              name="id_perawat_ruangan_2"
              innerRef={register()}
            />
          </Col>
          <Col>
            <Signature
              label="Pasien"
              type="drawer"
              formName='farmasi/rekonsiliasi-obat'
              component='ttd_pasien_ruangan_2'
              initialImage={(data.form && data.form.TTD_Pasien_Ruangan_2 && data.form.TTD_Pasien_Ruangan_2 !== '' && !data.form.TTD_Pasien_Ruangan_2.includes('null')) ? data.form.TTD_Pasien_Ruangan_2 : undefined}
              onSigned={(image: string) => handlePatientSigned(image)}
            />
            <Input
              type="hidden"
              name="ttd_pasien_ruangan_2"
              innerRef={register()}
            />
          </Col>
          <Col>
            <Signature
              label="Dokter"
              additionalLabel={(data.form && data.form.Nama_Dokter_Ruangan_2 && data.form.Nama_Dokter_Ruangan_2 !== '') ? data.form.Nama_Dokter_Ruangan_2 : undefined}
              type="picker"
              initialImage={(data.form && data.form.TTD_Dokter_Ruangan_2 && data.form.TTD_Dokter_Ruangan_2 !== '' && !data.form.TTD_Dokter_Ruangan_2.includes('null')) ? data.form.TTD_Dokter_Ruangan_2 : undefined}
              persons={doctors}
              unit="dokter"
              onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                if (isFormDoctor) {
                  handleDoctorSigned(assigner, isFormDoctor)
                }
                if (!isFormDoctor) {
                  handleDoctorSigned(assigner)
                }
              }}
            />
            <Input
              type="hidden"
              name="ttd_dokter_ruangan_2"
              innerRef={register()}
            />
            <Input
              type="hidden"
              name="id_dokter_ruangan_2"
              innerRef={register()}
            />
          </Col>
          <Col>
            <Signature
              label="Apoteker"
              additionalLabel={(data.form && data.form.Nama_Apoteker_Ruangan_2 && data.form.Nama_Apoteker_Ruangan_2 !== '') ? data.form.Nama_Apoteker_Ruangan_2 : undefined}
              type="picker"
              initialImage={(data.form && data.form.TTD_Apoteker_Ruangan_2 && data.form.TTD_Apoteker_Ruangan_2 !== '' && !data.form.TTD_Apoteker_Ruangan_2.includes('null')) ? data.form.TTD_Apoteker_Ruangan_2 : undefined}
              persons={officers}
              onSigned={(assigner: SignatureModel) => handlePharmacistSigned(assigner)}
            />
            <Input
              type="hidden"
              name="ttd_apoteker_ruangan_2"
              innerRef={register()}
            />
            <Input
              type="hidden"
              name="id_apoteker_ruangan_2"
              innerRef={register()}
            />
          </Col>
        </FormGroup>
      </div>
    </Fragment>
  )
}

export default SecondRoomMeds;
