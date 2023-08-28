import { Button, Col, FormGroup, Input, Label, Table } from "reactstrap";
import { Fragment, useEffect, useState } from "react";
import { IOfficerModel } from "@src/shared/officer";
import { InMedsReq } from "../requests/update-meds-reconciliation.request";
import { MedsReconciliationModel } from "../models/meds-reconciliation.model";
import { SelectInput } from "@src/shared/input";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { Trash } from "react-feather";
import followUp from "../const/follow-up.in";
import route from "../const/route";
import unit from "../const/unit";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const HospitalInMeds = (props: { data: MedsReconciliationModel, register: any, setValue: any, errors: any, getValues: any }) => {
  const { data, register, setValue, errors, getValues } = props;
  const { officers } = useAppSelector(state => state.officer);
  const { nurses } = useAppSelector(state => state.nurse);
  const { doctors } = useAppSelector(state => state.doctor);
  const [medsIn, setMedsIn] = useState<any>(data.form && data.form.Obat_Saat_Masuk_RS && Array.isArray(data.form.Obat_Saat_Masuk_RS) ? data.form.Obat_Saat_Masuk_RS.map(item => InMedsReq.createFromModel(item)) : []);

  useEffect(() => {
    if (officers) {
      setValue('id_ka_unit_masuk_rs', data.form && data.form.ID_Ka_Unit_Masuk_RS ? data.form.ID_Ka_Unit_Masuk_RS : '')
    }
  }, [officers])

  useEffect(() => {
    setValue('obat_saat_masuk_rs', medsIn)
  }, [medsIn])

  const handleAddMedsIn = () => {
    const inMeds = medsIn.map((n: any, key: number) => {
      return getValues(`obat_saat_masuk_rs[${key}]`);
    });
    setMedsIn([...inMeds, { nama_obat: '', jumlah: '', rute: '', aturan_pakai: '', tindak_lanjut: '', perubahan_aturan_pakai: '', obat_milik_pasien: '' }]);
  }

  const handleDeleteMedsIn = (index: number) => {
    const inMeds = medsIn.map((n: any, key: number) => {
      return new InMedsReq({
        nama_obat: getValues(`obat_saat_masuk_rs[${key}].nama_obat`) ?? '',
        jumlah: getValues(`obat_saat_masuk_rs[${key}].jumlah`) ?? '',
        rute: getValues(`obat_saat_masuk_rs[${key}].rute`) ?? '',
        aturan_pakai: getValues(`obat_saat_masuk_rs[${key}].aturan_pakai`) ?? '',
        tindak_lanjut: getValues(`obat_saat_masuk_rs[${key}].tindak_lanjut`) ?? '',
        perubahan_aturan_pakai: getValues(`obat_saat_masuk_rs[${key}].perubahan_aturan_pakai`) ?? '',
        obat_milik_pasien: getValues(`obat_saat_masuk_rs[${key}].obat_milik_pasien`) ?? '',
      });
    });
    inMeds.splice(index, 1);
    setMedsIn(inMeds);
  }

  const handleNurseSigned = (assigner: SignatureModel) => {
    setValue('ttd_perawat_masuk_rs', assigner.Signature);
    setValue('id_perawat_masuk_rs', assigner.ID_Karyawan);
  }

  const handlePatientSigned = (image: string) => {
    setValue('ttd_pasien_masuk_rs', image);
  }

  const handleDoctorSigned = (assigner: SignatureModel, isFormDoctor?:  boolean) => {
    if (isFormDoctor) {
      setValue('ttd_dokter_masuk_rs', assigner.Signature);
      setValue('id_dokter_masuk_rs', assigner.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('ttd_dokter_masuk_rs', assigner.Signature);
      setValue('id_dokter_masuk_rs', assigner.ID_Karyawan);
    }
  }

  const handlePharmacistSigned = (assigner: SignatureModel) => {
    setValue('ttd_apoteker_masuk_rs', assigner.Signature);
    setValue('id_apoteker_masuk_rs', assigner.ID_Karyawan);
  }

  return (
    <Fragment>
      <div className="ms-2 my-2">
        <FormGroup className="form-group align-items-center my-1" row>
          <Col md='2'>
            <Label>Unit</Label>
          </Col>
          <SelectInput
            name="unit_masuk_rs"
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
            name="id_ka_unit_masuk_rs"
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
              id='waktu_masuk_rs'
              name='waktu_masuk_rs'
              innerRef={register()}
              invalid={errors['waktu_masuk_rs'] && true}
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
                  <th className="text-center">Obat Milik Pasien?</th>
                  <th className="text-center"></th>
                </tr>
              </thead>
              <tbody>
                {
                  medsIn && Array.isArray(medsIn) && medsIn.map((item: InMedsReq, key: number) => (
                    <tr key={key}>
                      <td>
                        <Input
                          className="me-1"
                          id={`obat_saat_masuk_rs_nama_${key}`}
                          type="text"
                          name={`obat_saat_masuk_rs[${key}].nama_obat`}
                          innerRef={register({ required: true })}
                          required
                        />
                      </td>
                      <td>
                        <Input
                          className="me-1"
                          id={`obat_saat_masuk_rs_jumlah_${key}`}
                          type="text"
                          name={`obat_saat_masuk_rs[${key}].jumlah`}
                          innerRef={register({ required: true })}
                          required
                        />
                      </td>
                      <td>
                        <Input
                          className="me-1"
                          id={`obat_saat_masuk_rs_aturan_pakai_${key}`}
                          type="text"
                          name={`obat_saat_masuk_rs[${key}].aturan_pakai`}
                          innerRef={register({ required: true })}
                          required
                        />
                      </td>
                      <td>
                        <SelectInput
                          name={`obat_saat_masuk_rs[${key}].rute`}
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
                          name={`obat_saat_masuk_rs[${key}].tindak_lanjut`}
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
                          id={`obat_saat_masuk_rs_perubahan_aturan_${key}`}
                          type="text"
                          name={`obat_saat_masuk_rs[${key}].perubahan_aturan_pakai`}
                          innerRef={register({ required: true })}
                          required
                        />
                      </td>
                      <td>
                        <div>
                          <Input
                            type="radio"
                            id={`obat_saat_masuk_rs_obat_milik_ya_${key}`}
                            name={`obat_saat_masuk_rs[${key}].obat_milik_pasien`}
                            className='me-1'
                            value='1'
                            defaultChecked={!!(item && item.obat_milik_pasien && item.obat_milik_pasien === '1')}
                            innerRef={register({ required: true })}
                            autoComplete="off"
                          />
                          <Label>Ya</Label>
                        </div>
                        <div>
                          <Input
                            type="radio"
                            id={`obat_saat_masuk_rs_obat_milik_tidak_${key}`}
                            name={`obat_saat_masuk_rs[${key}].obat_milik_pasien`}
                            className='me-1'
                            value='0'
                            defaultChecked={!!(item && item.obat_milik_pasien && item.obat_milik_pasien === '0')}
                            innerRef={register({ required: true })}
                            autoComplete="off"
                          />
                          <Label>Tidak</Label>
                        </div>
                      </td>
                      <td className="text-center">
                        <Button style={{ padding: '4px' }} color='danger' type='button' onClick={ () => handleDeleteMedsIn(key)}>
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
              onClick={() => handleAddMedsIn()}
            >
              +Tambah Obat
            </span>
          </Col>
        </FormGroup>
        <FormGroup className="form-group align-items-center mt-3" row>
          <Col>
            <Signature
              label="Perawat Ruangan"
              additionalLabel={(data.form && data.form.Nama_Perawat_Masuk_RS !== '') ? data.form.Nama_Perawat_Masuk_RS : undefined}
              type="picker"
              initialImage={(data.form && data.form.TTD_Perawat_Masuk_RS && data.form.TTD_Perawat_Masuk_RS !== '' && !data.form.TTD_Perawat_Masuk_RS.includes('null')) ? data.form.TTD_Perawat_Masuk_RS : undefined}
              persons={nurses}
              onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)}
            />
            <Input
              type="hidden"
              name="ttd_perawat_masuk_rs"
              innerRef={register()}
            />
            <Input
              type="hidden"
              name="id_perawat_masuk_rs"
              innerRef={register()}
            />
          </Col>
          <Col>
            <Signature
              label="Pasien"
              type="drawer"
              formName='farmasi/rekonsiliasi-obat'
              component='ttd_pasien_masuk_rs'
              initialImage={(data.form && data.form.TTD_Pasien_Masuk_RS && data.form.TTD_Pasien_Masuk_RS !== '' && !data.form.TTD_Pasien_Masuk_RS.includes('null')) ? data.form.TTD_Pasien_Masuk_RS : undefined}
              onSigned={(image: string) => handlePatientSigned(image)}
            />
            <Input
              type="hidden"
              name="ttd_pasien_masuk_rs"
              innerRef={register()}
            />
          </Col>
          <Col>
            <Signature
              label="Dokter"
              additionalLabel={(data.form && data.form.Nama_Dokter_Masuk_RS && data.form.Nama_Dokter_Masuk_RS !== '') ? data.form.Nama_Dokter_Masuk_RS : undefined}
              type="picker"
              initialImage={(data.form && data.form.TTD_Dokter_Masuk_RS && data.form.TTD_Dokter_Masuk_RS !== '' && !data.form.TTD_Dokter_Masuk_RS.includes('null')) ? data.form.TTD_Dokter_Masuk_RS : undefined}
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
              name="ttd_dokter_masuk_rs"
              innerRef={register()}
            />
            <Input
              type="hidden"
              name="id_dokter_masuk_rs"
              innerRef={register()}
            />
          </Col>
          <Col>
            <Signature
              label="Apoteker"
              additionalLabel={(data.form && data.form.Nama_Apoteker_Masuk_RS && data.form.Nama_Apoteker_Masuk_RS !== '') ? data.form.Nama_Apoteker_Masuk_RS : undefined}
              type="picker"
              initialImage={(data.form && data.form.TTD_Apoteker_Masuk_RS && data.form.TTD_Apoteker_Masuk_RS !== '' && !data.form.TTD_Apoteker_Masuk_RS.includes('null')) ? data.form.TTD_Apoteker_Masuk_RS : undefined}
              persons={officers}
              onSigned={(assigner: SignatureModel) => handlePharmacistSigned(assigner)}
            />
            <Input
              type="hidden"
              name="ttd_apoteker_masuk_rs"
              innerRef={register()}
            />
            <Input
              type="hidden"
              name="id_apoteker_masuk_rs"
              innerRef={register()}
            />
          </Col>
        </FormGroup>
      </div>
    </Fragment>
  )
}

export default HospitalInMeds;
