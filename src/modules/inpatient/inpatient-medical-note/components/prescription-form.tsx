import { Button, Col, Input, Label, Row, Table } from 'reactstrap';
import { Controller, useFieldArray } from 'react-hook-form';
import { Fragment, useEffect, useState } from "react";
import { HowToUse, IDaftarTebus, IPrescription, Medicine } from '@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';
import { Plus, Trash } from 'react-feather'
import BaseSelect from 'react-select';
import FixRequiredSelect from '@shared/input/components/FixRequiredSelect';
import { InpatientMedicalNote } from '../models/inpatient-medical-note.model';
import { MedsPackage } from '@src/shared/meds-package/components';

const PrescriptionForm = (props: { data: InpatientMedicalNote, register: any, setValue: any, control: any }) => {
  const { data, register, setValue, control } = props;
  const [recipe, setRecipe] = useState<any>(data && data.form && data.form.Resep ? data.form.Resep : [])

  const { fields, append, remove, insert } = useFieldArray({
    name: 'resep',
    control,
  });

  useEffect(() => {
    if (recipe && Array.isArray(recipe)) {
      const destructured = recipe.map((item: IPrescription) => {
        return {
          meds_name: item.ID_Obat,
          total: item.Jumlah,
          how_to_use: item.ID_AturanPakai,
          notes: item.Catatan,
          nama_obat: item.Nama_Obat,
          aturan_pakai: item.Kode_AturanPakai,
          satuan: item.Nama_Satuan,
        }
      })
      append(destructured, false);
    }
  }, [recipe])

  const handleAddMedsFromPackage = (items: Array<IPrescription>) => {
    const newRecipe = items.map((item: IPrescription) => {
      return {
        meds_name: item.ID_Obat,
        total: item.Jumlah,
        how_to_use: item.ID_AturanPakai,
        notes: item.Catatan,
        nama_obat: item.Nama_Obat,
        aturan_pakai: item.Kode_AturanPakai,
        satuan: item.Nama_Satuan,
      }
    })
    append(newRecipe);
  }

  const handleDeleteMed = (index: any) => {
    remove(index);
  }

  const handleAddMed = () => {
    append({ meds_name: '', total: '', how_to_use: '', notes: '', satuan: '' })
    setTimeout(() => document.getElementById(`total_${fields.length}`)?.blur(), 10);
  }

  const handleChangeMed = (val: any, i: number) => {
    fields[i].satuan = val.satuan;
    insert(i, fields[i]);
    remove(i);
  }

  return (
    <Row className='my-2'>
      {
        data && data.pharmacy && data.pharmacy.Status_Tebus && data.pharmacy.Status_Tebus === '1' ? (
          <>
            <Table bordered style={{ width: '100%' }}>
              <thead>
                <tr style={{ textAlign: 'center' }}>
                  <td className='pt-0' style={{ width: '5%' }}><b>No</b></td>
                  <td className='pt-2' style={{ width: '40%' }}><b>{`Nama & Dosis`}</b></td>
                  <td className='pt-0'><b>Satuan</b></td>
                  <td className='pt-0' style={{ width: '50px' }}><b>Jumlah</b></td>
                  <td className='pt-2' style={{ width: '25%' }}><b>Aturan Pakai</b></td>
                  <td className='pt-2'style={{ width: '30%' }}><b>Catatan</b></td>
                  <td className='pt-0' style={{ width: '5%' }}></td>
                </tr>
              </thead>
              <tbody>
                {fields && fields.map((rec, i: number) => {
                  return (
                    <tr key={rec.id}>
                      <td>{`${i + 1}`}</td>
                      <td>
                        <Controller
                          control={control}
                          name={`resep[${i}].meds_name`}
                          defaultValue={{ label: rec.nama_obat, value: rec.meds_name }}
                          render={({ onChange, name, ref }) => (
                            <BaseSelect
                              ref={ref}
                              defaultValue={{ label: rec.nama_obat, value: rec.meds_name }}
                              options={data && data.obat.map((med: Medicine) => ({ label: med.Nama_Inventory, value: med.Kode_Inventory, satuan: med.Nama_Satuan }))}
                              name={name}
                              onChange={(val) => {
                                onChange(val);
                                handleChangeMed(val, i);
                              } }
                              isDisabled />
                          )} />
                      </td>
                      <td>
                        {rec.satuan}
                      </td>
                      <td>
                        <Input
                          type='number'
                          id={`total_tebus_${i}`}
                          name={`resep[${i}].total`}
                          defaultValue={rec.total}
                          innerRef={register()}
                          style={{ width: '50px' }}
                          readOnly/>
                      </td>
                      <td>
                        <Controller
                          control={control}
                          name={`resep[${i}].how_to_use` as const}
                          defaultValue={{ label: rec.aturan_pakai, value: rec.aturan_pakai, id: rec.how_to_use }}
                          render={({ onChange, name, ref }) => (
                            <BaseSelect
                              ref={ref}
                              defaultValue={{ label: rec.aturan_pakai, value: rec.aturan_pakai, id: rec.how_to_use }}
                              options={data && data.aturan_pakai && data.aturan_pakai.map((med: HowToUse) => ({ label: med.Kode, value: med.Kode, id: med.ID_AturanPakai }))}
                              name={name}
                              isDisabled
                              onChange={(val: any) => {
                                onChange(val);
                              } } />
                          )} />
                      </td>
                      <td>
                        <Input
                          type='text'
                          name={`resep[${i}].notes`}
                          defaultValue={rec.notes}
                          innerRef={register()}
                          readOnly/>
                      </td>
                      <td>
                        <Button style={{ padding: '4px' }} color='danger' type='button' disabled>
                          <Trash size={15} />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table></>
        ) : (
          <Table bordered style={{ width: '100%' }}>
            <thead>
              <tr style={{ textAlign: 'center' }}>
                <td className='pt-0' style={{ width: '5%' }}><b>No</b></td>
                <td className='pt-2' style={{ width: '40%' }}><b>{`Nama & Dosis`}</b></td>
                <td className='pt-0'><b>Satuan</b></td>
                <td className='pt-0' style={{ width: '50px' }}><b>Jumlah</b></td>
                <td className='pt-2' style={{ width: '35%' }}><b>Aturan Pakai</b></td>
                <td className='pt-2'style={{ width: '20%' }}><b>Catatan</b></td>
                <td className='pt-0' style={{ width: '5%' }}></td>
              </tr>
            </thead>
            <tbody>
              {
                fields && fields.map((rec, i: number) => {
                  return (
                    <tr key={rec.id}>
                      <td className='pt-0'>{`${i + 1}`}</td>
                      <td className='pt-2'>
                        <Controller
                          control={control}
                          name={`resep[${i}].meds_name`}
                          defaultValue={{ label: rec.nama_obat, value: rec.meds_name }}
                          rules={{required: true}}
                          render={({ onChange, name, ref }) => (
                            <Fragment>
                              <FixRequiredSelect
                                {...props}
                                required={true}
                                name={name}
                                defaultValue={{ label: rec.nama_obat, value: rec.meds_name }}
                                onChange={(val: any) => {
                                  onChange(val);
                                  handleChangeMed(val, i);
                                }}
                                SelectComponent={BaseSelect}
                                options={data && data.obat.map((med: Medicine) => ({ label: med.Nama_Inventory, value: med.Kode_Inventory, satuan: med.Nama_Satuan }))}
                              />
                            </Fragment>
                          )}
                        />
                      </td>
                      <td className='pt-0'>
                        {
                          rec.satuan
                        }
                      </td>
                      <td className='pt-0'>
                        <Input
                          type='number'
                          id={`total_${i}`}
                          name={`resep[${i}].total`}
                          defaultValue={rec.total}
                          innerRef={register()}
                          style={{ width: '50px' }}
                          required
                        />
                      </td>
                      <td className='pt-2'>
                        <Controller
                          control={control}
                          name={`resep[${i}].how_to_use`}
                          defaultValue={{ label: rec.aturan_pakai, value: rec.aturan_pakai, id: rec.how_to_use }}
                          render={({ onChange, name, ref }) => (
                            <Fragment>
                              <FixRequiredSelect
                                {...props}
                                required={true}
                                name={name}
                                defaultValue={{ label: rec.aturan_pakai, value: rec.aturan_pakai, id: rec.how_to_use }}
                                onChange={(val: any) => {
                                  onChange(val);
                                }}
                                SelectComponent={BaseSelect}
                                options={data && data.aturan_pakai.map((med: HowToUse) => ({ label: med.Kode, value: med.Kode, id: med.ID_AturanPakai }))}
                              />
                            </Fragment>
                          )}
                        />
                      </td>
                      <td className='pt-0' style={{ marginTop: 0 }}>
                        <Input
                          type='text'
                          name={`resep[${i}].notes`}
                          defaultValue={rec.notes}
                          innerRef={register()}
                        />
                      </td>
                      <td>
                        <Button style={{ padding: '4px' }} color='danger' type='button' onClick={ () => handleDeleteMed(i)}>
                          <Trash size={15} />
                        </Button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        )
      }
      {
        data && data.pharmacy && data.pharmacy.Status_Tebus && data.pharmacy.Status_Tebus === '1' ? (
          <Row>
            <Col>
              <Button style={{ padding: '4px', marginTop: '8px' }} color='primary' className='me-1' type='button' disabled>
                <Plus size={15} />
                Tambah Obat
              </Button>
              <MedsPackage
                disabled
                data={data.paket_obat ? data.paket_obat : undefined}
                allMeds={data.obat ? data.obat : undefined}
                allHtu={data.aturan_pakai ? data.aturan_pakai : undefined}
                onSelectPackage={(selected: any) => handleAddMedsFromPackage(selected)}
              />
            </Col>
          </Row>
        ) : (
          <>
            <Row>
              <Col>
                <Button style={{ padding: '4px', marginTop: '8px' }} color='primary' type='button' className='me-1' onClick={() => handleAddMed()}>
                  <Plus size={15} />
                  Tambah Obat
                </Button>
                <MedsPackage
                  data={data.paket_obat ? data.paket_obat : undefined}
                  allMeds={data.obat ? data.obat : undefined}
                  allHtu={data.aturan_pakai ? data.aturan_pakai : undefined}
                  onSelectPackage={(selected: any) => handleAddMedsFromPackage(selected)}
                />
              </Col>
            </Row>
          </>
        )
      }
      {
        data && data.pharmacy && data.pharmacy.Status_Tebus && data.pharmacy.Status_Tebus === '1' && (
          <tr>
            <td colSpan={2}>
              <Label className='text-danger mt-3'>
                *Resep yang sudah ditebus
              </Label>
              <Table bordered style={{ width: '100%' }}>
                <thead>
                  <tr style={{ textAlign: 'center' }}>
                    <td className='pt-0' style={{ width: '5%' }}><b>No</b></td>
                    <td className='pt-2' style={{ width: '40%' }}><b>{`Nama & Dosis`}</b></td>
                    <td className='pt-0'><b>Satuan</b></td>
                    <td className='pt-0' style={{ width: '50px' }}><b>Jumlah</b></td>
                    <td className='pt-2' style={{ width: '25%' }}><b>Aturan Pakai</b></td>
                    <td className='pt-2'style={{ width: '30%' }}><b>Catatan</b></td>
                  </tr>
                </thead>
                <tbody>
                  {
                    data && data.pharmacy && data.pharmacy.Daftar_Tebus && Array.isArray(data.pharmacy.Daftar_Tebus) && data.pharmacy.Daftar_Tebus.length > 0 && data.pharmacy.Daftar_Tebus.map((item: IDaftarTebus, key: number) => (
                      <tr key={key}>
                        <td>{`${key + 1}`}</td>
                        <td>{item.Nama_Obat}</td>
                        <td>{item.Nama_Satuan}</td>
                        <td>{item.Jumlah}</td>
                        <td>{item.Kode_AturanPakai}</td>
                        <td>{item.Catatan}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
            </td>
          </tr>
        )
      }
    </Row>
  )
}

export default PrescriptionForm;
