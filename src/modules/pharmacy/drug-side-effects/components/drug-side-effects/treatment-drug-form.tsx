import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row, TabContent, TabPane, Table } from 'reactstrap';
import { DateTimeInput, TextInput } from "@src/shared/input";
import { Fragment, useEffect, useState } from "react";
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { SubmitButton } from '@src/shared/button';
import { IPdfModel } from '@src/shared/pdf';
import Image from 'next/image';
import { EyeImage } from '@src/shared/eye-image/components';
import BaseSelect from 'react-select';
import { DoctorPreliminaryStudyModel, HowToUse, IDaftarTebus, Medicine } from '@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';
import { Plus, Trash } from 'react-feather';
import FixRequiredSelect from '@src/shared/input/components/FixRequiredSelect';
import { DrugSideEffects } from "@modules/pharmacy/drug-side-effects/models/drug-side-effects.model";
import DrugSideEffectsService from "@modules/pharmacy/drug-side-effects/services";

const TreatmentDrugForm = (props: { data: DrugSideEffects,  register: any,  errors: any, processing: boolean, setValue: any, control: any, unregister: any}) => {
  const {  data, register, errors, processing, setValue, control, unregister} = props;
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}_check`, (e.target.checked) ? '1' : '0');
  }


  useEffect(() => {
    if (data && data.form && data.form.Obat_Diterima && Array.isArray(data.form.Obat_Diterima)) {
      for (let i = 0; i < data.form.Obat_Diterima.length; i += 1) {
        append({ nama_obat: data.form.Obat_Diterima[i].Nama_Obat, satuan: data.form.Obat_Diterima[i].Satuan, no_bets: data.form.Obat_Diterima[i].No_Bets, aturan_pakai: data.form.Obat_Diterima[i].Aturan_Pakai, tanggal_mulai: data.form.Obat_Diterima[i].Tanggal_Mulai, tanggal_selesai: data.form.Obat_Diterima[i].Tanggal_Selesai, obat_dicurigai_check: data.form.Obat_Diterima[i].Obat_Dicurigai_Check }, false)
      }
      for (let i = 0; i < data.form.Obat_Diterima.length; i += 1) {
        unregister(`obat_diterima[${i}].value`);
      }
    }
  }, [data])

  const { fields, append, remove, insert } = useFieldArray({ name: 'arrObatDiterima', control })
  const handleDeleteMed = (index: any) => {
    remove(index);
  }

  const handleAddMed = () => {
    append({ nama_obat: '', satuan: '', no_bets: '', aturan_pakai: '', tanggal_mulai: '', tanggal_selesai: '', obat_dicurigai_check: '' })
  }


  return (
    <FormGroup className='form-group'>
      <Table borderless style={{ width: '100%' }} className='align-items-center'>
        <tr>
          <td colSpan={2}>
            <Table bordered style={{ width: '100%' }}>
              <thead>
                <tr style={{ textAlign: 'center' }}>
                  <td style={{ width: '2%' }}><b>No</b></td>
                  <td style={{ width: '50%' }}><b>{`Nama & Dosis`}</b></td>
                  <td style={{ width: '11%' }}><b>Bentuk Sediaan</b></td>
                  <td style={{ width: '5%' }}><b>No. Bets</b></td>
                  <td style={{ width: '15%' }}><b>Aturan Pakai</b></td>
                  <td style={{ width: '15%' }}><b>Tanggal Mulai</b></td>
                  <td style={{ width: '15%' }}><b>Tanggal Selesai</b></td>
                  <td style={{ width: '2%' }}><b>Beri Tanda (X) Untuk Obat Yang Dicurigai</b></td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {
                  fields && fields.map((rec, i: number) => {
                    return (
                      <tr key={rec.id}>
                        <td style={{ width: '2%' }}>{`${i + 1}`}</td>
                        <td style={{ width: '50%' }}>
                          <Input
                            type='text'
                            name={`obat_diterima[${i}].nama_obat`}
                            defaultValue={rec.nama_obat}
                            innerRef={register()}
                          />
                        </td>
                        <td style={{ width: '10%' }}>
                          <Input
                            type='text'
                            name={`obat_diterima[${i}].satuan`}
                            defaultValue={rec.satuan}
                            innerRef={register()}
                          />
                        </td>
                        <td style={{ width: '10%' }}>
                          <Input
                            type='text'
                            name={`obat_diterima[${i}].no_bets`}
                            defaultValue={rec.no_bets}
                            innerRef={register()}
                          />
                        </td>
                        <td style={{ width: '15%' }}>
                          <Input
                            type='text'
                            name={`obat_diterima[${i}].aturan_pakai`}
                            defaultValue={rec.aturan_pakai}
                            innerRef={register()}
                          />
                        </td>
                        <td style={{ width: '15%' }} >
                          <Input
                            type='date'
                            name={`obat_diterima[${i}].tanggal_mulai`}
                            defaultValue={rec.tanggal_mulai}
                            innerRef={register()}
                          />
                        </td>
                        <td style={{ width: '15%' }}>
                          <Input
                            type='date'
                            name={`obat_diterima[${i}].tanggal_selesai`}
                            defaultValue={rec.tanggal_selesai}
                            innerRef={register()}
                          />
                        </td>
                        <td style={{ width: '3%' }}>
                          <Input
                            id={`obat_diterima[${i}].obat_dicurigai`}
                            type='checkbox'
                            name={`obat_diterima[${i}].obat_dicurigai`}
                            value="1"
                            className="me-1"
                            onChange={(e) => {
                              handleCheckboxChange(e);
                            }}
                            defaultChecked={rec && rec.obat_dicurigai_check === "1"}
                            //innerRef={register(`obat_diterima[${i}].obat_dicurigai_check`) as any}
                          />
                          <Input
                            type="hidden"
                            name={`obat_diterima[${i}].obat_dicurigai_check`}
                            defaultValue={rec.obat_dicurigai_check}
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
          </td>
        </tr>
        <tr>
          <td>
            <Button style={{ padding: '4px', marginTop: '8px' }} color='primary' type='button' onClick={() => handleAddMed()}>
              <Plus size={15} />
                    Tambah Obat
            </Button>
          </td>
        </tr>

      </Table>

      <FormGroup className="form-group" row>
        <Label for="keterangan_tambahan" md="3" sm="12">
                Keterangan Tambahan
        </Label>
        <Col>
          <Input
            type="textarea"
            id="keterangan_tambahan"
            name="keterangan_tambahan"
            innerRef={register()}
          />
        </Col>
      </FormGroup>
    </FormGroup>
  )
}

export default TreatmentDrugForm;
