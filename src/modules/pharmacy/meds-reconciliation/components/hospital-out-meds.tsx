import { Button, Col, FormGroup, Input, Label, Table } from "reactstrap";
import { Fragment, useEffect, useState } from "react";
import { IOfficerModel } from "@src/shared/officer";
import { MedsReconciliationModel } from "../models/meds-reconciliation.model";
import { OutMedsReq } from "../requests/update-meds-reconciliation.request";
import { SelectInput } from "@src/shared/input";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { Trash } from "react-feather";
import followUp from "../const/follow-up.out";
import route from "../const/route";
import unit from "../const/unit";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const HospitalOutMeds = (props: { data: MedsReconciliationModel, register: any, setValue: any, errors: any, getValues: any }) => {
  const { data, register, setValue, errors, getValues } = props;
  const { officers } = useAppSelector(state => state.officer);
  const { nurses } = useAppSelector(state => state.nurse);
  const { doctors } = useAppSelector(state => state.doctor);
  const [medsOut, setMedsOut] = useState<any>(data.form && data.form.Obat_Keluar && Array.isArray(data.form.Obat_Keluar) ? data.form.Obat_Keluar.map(item => OutMedsReq.createFromModel(item)) : []);

  useEffect(() => {
    if (officers) {
      setValue('id_ka_unit_keluar', data.form && data.form.ID_Ka_Unit_Keluar ? data.form.ID_Ka_Unit_Keluar : '')
    }
  }, [officers])

  useEffect(() => {
    setValue('obat_keluar', medsOut)
  }, [medsOut])

  const handleAddMedsOut = () => {
    const inMeds = medsOut.map((n: any, key: number) => {
      return getValues(`obat_keluar[${key}]`);
    });
    setMedsOut([...inMeds, { nama_obat: '', jumlah: '', rute: '', aturan_pakai: '', tindak_lanjut: '', perubahan_aturan_pakai: '', kategori: '' }]);
  }

  const handleDeleteMedsOut = (index: number) => {
    const inMeds = medsOut.map((n: any, key: number) => {
      return new OutMedsReq({
        nama_obat: getValues(`obat_keluar[${key}].nama_obat`) ?? '',
        jumlah: getValues(`obat_keluar[${key}].jumlah`) ?? '',
        rute: getValues(`obat_keluar[${key}].rute`) ?? '',
        aturan_pakai: getValues(`obat_keluar[${key}].aturan_pakai`) ?? '',
        tindak_lanjut: getValues(`obat_keluar[${key}].tindak_lanjut`) ?? '',
        perubahan_aturan_pakai: getValues(`obat_keluar[${key}].perubahan_aturan_pakai`) ?? '',
        kategori: getValues(`obat_keluar[${key}].kategori`) ?? '',
      });
    });
    inMeds.splice(index, 1);
    setMedsOut(inMeds);
  }

  const handleNurseSigned = (assigner: SignatureModel) => {
    setValue('ttd_perawat_keluar', assigner.Signature);
    setValue('id_perawat_keluar', assigner.ID_Karyawan);
  }

  const handlePatientSigned = (image: string) => {
    setValue('ttd_pasien_keluar', image);
  }
  const handleDoctorSigned = (assigner: SignatureModel, isFormDoctor?:  boolean) => {
    if (isFormDoctor) {
      setValue('ttd_dokter_keluar', assigner.Signature);
      setValue('id_dokter_keluar', assigner.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('ttd_dokter_keluar', assigner.Signature);
      setValue('id_dokter_keluar', assigner.ID_Karyawan);
    }
  }

  const handlePharmacistSigned = (assigner: SignatureModel) => {
    setValue('ttd_apoteker_keluar', assigner.Signature);
    setValue('id_apoteker_keluar', assigner.ID_Karyawan);
  }
  return (
    <Fragment>
      <div className="ms-2 my-2">
        <FormGroup className="form-group align-items-center my-1" row>
          <Col md='2'>
            <Label>Unit</Label>
          </Col>
          <SelectInput
            name="unit_keluar"
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
            <Label>Waktu</Label>
          </Col>
          <Col md='8'>
            <Input
              type="datetime-local"
              id='waktu_keluar'
              name='waktu_keluar'
              innerRef={register()}
              invalid={errors['waktu_keluar'] && true}
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
                  <th className="text-center">Kategori</th>
                  <th className="text-center"></th>
                </tr>
              </thead>
              <tbody>
                {
                  medsOut && Array.isArray(medsOut) && medsOut.map((item: OutMedsReq, key: number) => (
                    <tr key={key}>
                      <td>
                        <Input
                          className="me-1"
                          id={`obat_keluar_nama_${key}`}
                          type="text"
                          name={`obat_keluar[${key}].nama_obat`}
                          innerRef={register({ required: true })}
                          required
                        />
                      </td>
                      <td>
                        <Input
                          className="me-1"
                          id={`obat_keluar_jumlah_${key}`}
                          type="text"
                          name={`obat_keluar[${key}].jumlah`}
                          innerRef={register({ required: true })}
                          required
                        />
                      </td>
                      <td>
                        <Input
                          className="me-1"
                          id={`obat_keluar_aturan_pakai_${key}`}
                          type="text"
                          name={`obat_keluar[${key}].aturan_pakai`}
                          innerRef={register({ required: true })}
                          required
                        />
                      </td>
                      <td>
                        <SelectInput
                          name={`obat_keluar[${key}].rute`}
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
                          name={`obat_keluar[${key}].tindak_lanjut`}
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
                          id={`obat_keluar_perubahan_aturan_${key}`}
                          type="text"
                          name={`obat_keluar[${key}].perubahan_aturan_pakai`}
                          innerRef={register({ required: true })}
                          required
                        />
                      </td>
                      <td>
                        <div>
                          <Input
                            type="radio"
                            id={`obat_keluar_kategori_karantina_${key}`}
                            name={`obat_keluar[${key}].kategori`}
                            className='me-1'
                            value='1'
                            defaultChecked={!!(item && item.kategori && item.kategori === '1')}
                            innerRef={register({ required: true })}
                            autoComplete="off"
                          />
                          <Label>Obat Karantina</Label>
                        </div>
                        <div>
                          <Input
                            type="radio"
                            id={`obat_keluar_kategori_karantina_${key}`}
                            name={`obat_keluar[${key}].kategori`}
                            className='me-1'
                            value='2'
                            defaultChecked={!!(item && item.kategori && item.kategori === '2')}
                            innerRef={register({ required: true })}
                            autoComplete="off"
                          />
                          <Label>Obat Berobat Jalan</Label>
                        </div>
                      </td>
                      <td className="text-center">
                        <Button style={{ padding: '4px' }} color='danger' type='button' onClick={ () => handleDeleteMedsOut(key)}>
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
              onClick={() => handleAddMedsOut()}
            >
              +Tambah Obat
            </span>
          </Col>
        </FormGroup>
        <FormGroup className="form-group align-items-center mt-3" row>
          <Col>
            <Signature
              label="Perawat Ruangan"
              additionalLabel={(data.form && data.form.Nama_Perawat_Keluar && data.form.Nama_Perawat_Keluar !== '') ? data.form.Nama_Perawat_Keluar : undefined}
              type="picker"
              initialImage={(data.form && data.form.TTD_Perawat_Keluar && data.form.TTD_Perawat_Keluar !== '' && !data.form.TTD_Perawat_Keluar.includes('null')) ? data.form.TTD_Perawat_Keluar : undefined}
              persons={nurses}
              onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)}
            />
            <Input
              type="hidden"
              name="ttd_perawat_keluar"
              innerRef={register()}
            />
            <Input
              type="hidden"
              name="id_perawat_keluar"
              innerRef={register()}
            />
          </Col>
          <Col>
            <Signature
              label="Pasien"
              type="drawer"
              formName='farmasi/rekonsiliasi-obat'
              component='ttd_pasien_keluar'
              initialImage={(data.form && data.form.TTD_Pasien_Keluar && data.form.TTD_Pasien_Keluar !== '' && !data.form.TTD_Pasien_Keluar.includes('null')) ? data.form.TTD_Pasien_Keluar : undefined}
              onSigned={(image: string) => handlePatientSigned(image)}
            />
            <Input
              type="hidden"
              name="ttd_pasien_keluar"
              innerRef={register()}
            />
          </Col>
          <Col>
            <Signature
              label="Dokter"
              additionalLabel={(data.form && data.form.Nama_Dokter_Keluar && data.form.Nama_Dokter_Keluar !== '') ? data.form.Nama_Dokter_Keluar : undefined}
              type="picker"
              initialImage={(data.form && data.form.TTD_Dokter_Keluar && data.form.TTD_Dokter_Keluar !== '' && !data.form.TTD_Dokter_Keluar.includes('null')) ? data.form.TTD_Dokter_Keluar : undefined}
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
              name="ttd_dokter_keluar"
              innerRef={register()}
            />
            <Input
              type="hidden"
              name="id_dokter_keluar"
              innerRef={register()}
            />
          </Col>
          <Col>
            <Signature
              label="Apoteker"
              additionalLabel={(data.form && data.form.Nama_Apoteker_Keluar && data.form.Nama_Apoteker_Keluar !== '') ? data.form.Nama_Apoteker_Keluar : undefined}
              type="picker"
              initialImage={(data.form && data.form.TTD_Apoteker_Keluar && data.form.TTD_Apoteker_Keluar !== '' && !data.form.TTD_Apoteker_Keluar.includes('null')) ? data.form.TTD_Apoteker_Keluar : undefined}
              persons={officers}
              onSigned={(assigner: SignatureModel) => handlePharmacistSigned(assigner)}
            />
            <Input
              type="hidden"
              name="ttd_apoteker_keluar"
              innerRef={register()}
            />
            <Input
              type="hidden"
              name="id_apoteker_keluar"
              innerRef={register()}
            />
          </Col>
        </FormGroup>
      </div>
    </Fragment>
  )
}

export default HospitalOutMeds;
