import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row, TabContent, TabPane, Table } from 'reactstrap';
import { Fragment, useEffect, useState } from "react";
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import Image from 'next/image';
import { SubmitButton } from '@src/shared/button';
import { IPdfModel } from '@src/shared/pdf';
import visualAquilities from '@src/modules/ro/preliminary-study/consts/visual-aquilities';
import { AssessmentUgdModel } from '../../models/assessment-ugd-models';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import BaseSelect from 'react-select';
import { Plus, Trash } from 'react-feather';
import FixRequiredSelect from '@src/shared/input/components/FixRequiredSelect';
import { DoctorPreliminaryStudyModel, HowToUse, IDaftarTebus, Medicine } from '@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';

const DoctorMedicalExamination = (props: { data: AssessmentUgdModel, register: any, errors: any, getValues: any, setValue: any, control: any, unregister: any, activeTab: string, processing: boolean, defaultPattern: string | undefined })  => {
  const { data, register, errors, getValues, setValue, control, unregister, activeTab, processing, defaultPattern } = props;
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);

  useEffect(() => {
    if (data && data.form && data.form.Resep_Umum && Array.isArray(data.form.Resep_Umum)) {
      for (let i = 0; i < data.form.Resep_Umum.length; i += 1) {
        newAppend({ 'nama-obat-umum': data.form.Resep_Umum[i].ID_Obat, 'jumlah-umum': data.form.Resep_Umum[i].Jumlah, 'aturan-pakai-umum': data.form.Resep_Umum[i].ID_AturanPakai, 'catatan-umum': data.form.Resep_Umum[i].Catatan, nama_obat_umum: data.form.Resep_Umum[i].Nama_Obat, aturan_pakai_umum: data.form.Resep_Umum[i].Kode_AturanPakai, 'satuan-umum': data.form.Resep_Umum[i].Nama_Satuan}, false)
      }
      for (let i = 0; i < data.form.Resep_Umum.length; i += 1) {
        unregister(`resepUmum[${i}].value`);
      }
    }
  }, [])

  const { fields: newFields, append:newAppend, remove: newRemove, insert: newInsert } = useFieldArray({ name: 'resepUmum', control })

  const handleDeleteMedUmum = (index: any) => {
    newRemove(index);
  }

  const handleAddMedUmum = () => {
    newAppend({ 'nama-obat-umum': '', 'jumlah-umum': '', 'aturan-pakai-umum': '', 'catatan-umum': '', 'satuan-umum': '' })
  }

  const handleChangeMedUmum = (val: any, i: number) => {
    newFields[i]['satuan-umum'] = val.satuan;
    newInsert(i, newFields[i]);
    newRemove(i);
  }


  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  const handleDoctorSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue('ttd-dokter-pengkaji', image.Signature);
      setValue('pengkajian-dokter', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('ttd-dokter-pengkaji', image.Signature);
      setValue('pengkajian-dokter', image.ID_Karyawan);
    }
  }

  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId='2'>
        <h4 className="mt-2">Pengkajian Medis Dokter</h4>
        <h4 className="mt-2">Subjektif</h4>
        <hr/>
        <Table>
          <tr>
            <td>
              <Input
                id="pengkajian-subjektif"
                type="textarea"
                placeholder='Isikan...'
                name="pengkajian-subjektif"
                innerRef={register({ required: true })}
                invalid={errors.Pengkajian_Subjektif && true}
              />
            </td>
          </tr>
        </Table>
        <h4 className="mt-2">Objektif</h4>
        <hr/>
        <Table borderless>
          <tr className='mt-4'>
            <td className='mt-4'>
              <Row style={{ marginTop: '15px' }}>
                <Table>
                  <tr>
                    <td>
                      <Label style={{marginLeft:'-15px'}}>Kepala</Label>
                    </td>
                    <td>
                      <Row>
                        <Col style={{width: '400px'}}>
                          <Input
                            id="pengkajian-kepala"
                            type="text"
                            name="pengkajian-kepala"
                            innerRef={register({ required: true })}
                            invalid={errors.Pengkajian_Kepala && true}
                          />
                        </Col>
                      </Row>
                    </td>
                    <td>
                      <Label>Tenggorokan</Label>
                    </td>
                    <td>
                      <Row>
                        <Col style={{width: '400px'}}>
                          <Input
                            id="pengkajian-tenggorokan"
                            type="text"
                            name="pengkajian-tenggorokan"
                            innerRef={register({ required: true })}
                            invalid={errors.Pengkajian_Tenggorokan && true}
                          />
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label style={{marginLeft:'-15px'}}>Mata</Label>
                    </td>
                    <td>
                      <Row>
                        <Col style={{width: '400px'}}>
                          <Input
                            id="pengkajian-mata"
                            type="text"
                            name="pengkajian-mata"
                            innerRef={register({ required: true })}
                          />
                        </Col>
                      </Row>
                    </td>
                    <td>
                      <Label>Leher</Label>
                    </td>
                    <td>
                      <Row>
                        <Col style={{width: '400px'}}>
                          <Input
                            id="pengkajian-leher"
                            type="text"
                            name="pengkajian-leher"
                            innerRef={register({ required: true })}
                          />
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <Label style={{marginLeft:'50px'}}>OD</Label>
                    </td>
                    <td>
                      <Label style={{marginLeft:'-200px'}}>OS</Label>
                    </td>
                    <td>
                      <Label style={{marginLeft:'-150px'}}>Dada</Label>
                    </td>
                    <td>
                      <Row>
                        <Col style={{width: '400px'}}>
                          <Input
                            id="pengkajian-dada"
                            type="text"
                            style={{marginLeft:'-430px'}}
                            name="pengkajian-dada"
                            innerRef={register({ required: true })}
                          />
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label style={{marginLeft:'-15px'}}>VA</Label>
                    </td>
                    <td>
                      <Input
                        type="select"
                        id="pengkajian-od-va"
                        name="pengkajian-od-va"
                        style={{width: '150px', marginLeft:'25px'}}
                        innerRef={register()}
                      >
                        <option value="" disabled={false}>--</option>
                        {
                          visualAquilities && visualAquilities.map((item: any, key: number) => {
                            return <option value={item} key={key}>{ item }</option>;
                          })
                        }
                      </Input>
                    </td>
                    <td>
                      <Input
                        type="select"
                        id="pengkajian-os-va"
                        name="pengkajian-os-va"
                        style={{marginLeft:  '-150%', width:'150px'}}
                        innerRef={register()}
                      >
                        <option value="" disabled={false}>--</option>
                        {
                          visualAquilities && visualAquilities.map((item: any, key: number) => {
                            return <option value={item} key={key}>{ item }</option>;
                          })
                        }
                      </Input>
                    </td>
                    <td>
                      <Label style={{marginLeft:'-150px'}}>Jantung</Label>
                    </td>
                    <td>
                      <Row>
                        <Col style={{width: '400px'}}>
                          <Input
                            id="pengkajian-jantung"
                            type="text"
                            style={{marginLeft:'-430px'}}
                            name="pengkajian-jantung"
                            innerRef={register({ required: true })}
                          />
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label className='mb-2' style={{marginLeft:'-15px'}}>Tonometri</Label>
                    </td>
                    <td>
                      <Input
                        id="pengkajian-od-tonometri"
                        type="text"
                        style={{width: '150px', marginTop:'-20px', marginLeft:'25px'}}
                        placeholder='Isikan...'
                        name="pengkajian-od-tonometri"
                        innerRef={register({ required: true })}
                      />
                    </td>
                    <td>
                      <Input
                        id="pengkajian-os-tonometri"
                        type="text"
                        style={{width: '150px', marginTop:'-20px', marginLeft:'-150%'}}
                        placeholder='Isikan...'
                        name="pengkajian-os-tonometri"
                        innerRef={register({ required: true })}
                      />
                    </td>
                    <td>
                      <Label style={{marginLeft:'-150px'}}>Paru</Label>
                    </td>
                    <td>
                      <Row>
                        <Col style={{width: '400px'}}>
                          <Input
                            id="pengkajian-paru"
                            type="text"
                            style={{marginLeft:'-430px'}}
                            name="pengkajian-paru"
                            innerRef={register({ required: true })}
                          />
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label style={{marginLeft:'-15px'}}>Telinga</Label>
                    </td>
                    <td>
                      <Row>
                        <Col style={{width: '400px'}}>
                          <Input
                            id="pengkajian-telinga"
                            type="text"
                            name="pengkajian-telinga"
                            innerRef={register({ required: true })}
                          />
                        </Col>
                      </Row>
                    </td>
                    <td>
                      <Label style={{marginTop:'-1000px'}}>Abdomen</Label>
                    </td>
                    <td>
                      <Row>
                        <Col style={{width: '400px'}}>
                          <Input
                            id="pengkajian-abdomen"
                            type="text"
                            name="pengkajian-abdomen"
                            innerRef={register({ required: true })}
                          />
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label style={{marginLeft:'-15px'}}>Hidung</Label>
                    </td>
                    <td>
                      <Row>
                        <Col style={{width: '400px'}}>
                          <Input
                            id="pengkajian-hidung"
                            type="text"
                            name="pengkajian-hidung"
                            innerRef={register({ required: true })}
                          />
                        </Col>
                      </Row>
                    </td>
                    <td>
                      <Label>Genitalia</Label>
                    </td>
                    <td>
                      <Row>
                        <Col style={{width: '400px'}}>
                          <Input
                            id="pengkajian-genitalia"
                            type="text"
                            name="pengkajian-genitalia"
                            innerRef={register({ required: true })}
                          />
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label style={{marginLeft:'-15px'}}>Gigi</Label>
                    </td>
                    <td>
                      <Row>
                        <Col style={{width: '400px'}}>
                          <Input
                            id="pengkajian-gigi"
                            type="text"
                            name="pengkajian-gigi"
                            innerRef={register({ required: true })}
                          />
                        </Col>
                      </Row>
                    </td>
                    <td>
                      <Label>Kandungan</Label>
                    </td>
                    <td>
                      <Row>
                        <Col style={{width: '400px'}}>
                          <Input
                            id="pengkajian-kandungan"
                            type="text"
                            name="pengkajian-kandungan"
                            innerRef={register({ required: true })}
                          />
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    </td><td>
                    </td>
                    <td>
                      <Label>Eks.Atas</Label>
                    </td>
                    <td>
                      <Row>
                        <Col style={{width: '400px'}}>
                          <Input
                            id="pengkajian-eks-atas"
                            type="text"
                            name="pengkajian-eks-atas"
                            innerRef={register({ required: true })}
                          />
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    </td><td>
                    </td>
                    <td>
                      <Label>Eks.Bawah</Label>
                    </td>
                    <td>
                      <Row>
                        <Col style={{width: '400px'}}>
                          <Input
                            id="pengkajian-eks-bawah"
                            type="text"
                            name="pengkajian-eks-bawah"
                            innerRef={register({ required: true })}
                          />
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </Table>
              </Row>
            </td>
          </tr>
        </Table>

        <Table>
          <tr>
            <td>
              <Label>Pemeriksa penunjang</Label>
            </td>
            <td style={{width:'81%'}}>
              <Row>
                <Col>
                  <Input
                    id="pengkajian-pemeriksaan-penunjang"
                    type="text"
                    name="pengkajian-pemeriksaan-penunjang"
                    innerRef={register({ required: true })}
                  />
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>Assessmen</Label>
            </td>
            <td>
              <Row>
                <Col>
                  <Input
                    id="pengkajian-assesmen"
                    type="text"
                    name="pengkajian-assesmen"
                    innerRef={register({ required: true })}
                  />
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>Terapi Penatalaksanaan</Label>
            </td>
            <td style={{width:'81%'}}>
              <Row>
                <Col>
                  <Input
                    id="pengkajian-terapi-penatalaksaan"
                    type="text"
                    name="pengkajian-terapi-penatalaksaan"
                    innerRef={register({ required: true })}
                  />
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Label>Anjuran</Label>
            </td>
            <td style={{width:'81%'}}>
              <Row>
                <Col>
                  <Input
                    id="pengkajian-anjuran"
                    type="text"
                    name="pengkajian-anjuran"
                    innerRef={register({ required: true })}
                  />
                </Col>
              </Row>
            </td>
          </tr>
        </Table>

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
            {
              newFields && newFields.map((rec, i: number) => {
                return (
                  <tr key={rec.id}>
                    <td className='pt-0'>{`${i + 1}`}</td>
                    <td className='pt-2'>
                      <Controller
                        control={control}
                        name={`resepUmum[${i}].nama-obat-umum`}
                        defaultValue={{ label: rec.nama_obat_umum, value: rec['nama-obat-umum'] }}
                        rules={{required: true}}
                        render={({ onChange, name, ref }) => (
                          <Fragment>
                            <FixRequiredSelect
                              {...props}
                              required={true}
                              name={name}
                              defaultValue={{ label: rec.nama_obat_umum, value: rec['nama-obat-umum'] }}
                              onChange={(val: any) => {
                                onChange(val);
                                handleChangeMedUmum(val, i);
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
                        rec['satuan-umum']
                      }
                    </td>
                    <td className='pt-0'>
                      <Input
                        type='number'
                        name={`resepUmum[${i}].jumlah-umum`}
                        defaultValue={rec['jumlah-umum']}
                        innerRef={register()}
                        style={{ width: '65px' }}
                        required
                      />
                    </td>
                    <td className='pt-2'>
                      <Controller
                        control={control}
                        name={`resepUmum[${i}].aturan-pakai-umum`}
                        defaultValue={{ label: rec.aturan_pakai_umum, value: rec.aturan_pakai_umum, id: rec['aturan-pakai-umum'] }}
                        render={({ onChange, name, ref }) => (
                          <Fragment>
                            <FixRequiredSelect
                              {...props}
                              required={true}
                              name={name}
                              defaultValue={{ label: rec.aturan_pakai_umum, value: rec.aturan_pakai_umum, id: rec['aturan-pakai-umum'] }}
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
                        name={`resepUmum[${i}].catatan-umum`}
                        defaultValue={rec['catatan-umum']}
                        innerRef={register()}
                      />
                    </td>
                    <td>
                      <Button style={{ padding: '4px' }} color='danger' type='button' onClick={ () => handleDeleteMedUmum(i)}>
                        <Trash size={15} />
                      </Button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>

        <Button style={{ padding: '4px', marginTop: '8px' }} color='primary' type='button' onClick={() => handleAddMedUmum()}>
          <Plus size={15} />
                    Tambah Obat
        </Button>

        <Row className="mt-2">
          <Col>
            <Signature
              label="Dokter Pemeriksa"
              type="picker"
              additionalLabel={(data && data.form && data.form.Nama_Pengkajian_Dokter && data.form.Nama_Pengkajian_Dokter !== '') ? data.form.Nama_Pengkajian_Dokter : undefined}
              initialImage={(data && data.form && data.form.TTD_Dokter_Pengkaji && data.form.TTD_Dokter_Pengkaji !== '') ? data.form.TTD_Dokter_Pengkaji : undefined}
              persons={doctors}
              unit='dokter'
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
              name="pengkajian-dokter"
              innerRef={register()}
              invalid={errors['pengkajian-dokter'] && true}
            />
            <Input
              type="hidden"
              name="ttd-dokter-pengkaji"
              innerRef={register()}
              invalid={errors['ttd-dokter-pengkaji'] && true}
            />
          </Col>
        </Row>
      </TabPane>
    </TabContent>
  )
}

export default DoctorMedicalExamination;
