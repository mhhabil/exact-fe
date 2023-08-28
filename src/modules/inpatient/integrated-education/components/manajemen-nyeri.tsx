import { Col, FormFeedback, FormGroup, Input, Label, Row, TabContent, Table, TabPane } from 'reactstrap';
import { useForm } from 'react-hook-form';
import {useEffect, useState} from 'react';
import { DateTimeInput, TextInput } from '@src/shared/input';
import { IntegratedEducationModel } from '../models/integrated-education.model';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';

const ManajemenNyeri = (props: { data: IntegratedEducationModel, register: any, activeTab: string, processing: boolean, errors: any, setValue: any, setDirty: any }) => {
  const { data, register, activeTab, errors, processing, setValue, setDirty } = props;

  const { doctors } = useAppSelector(state => state.doctor);
  const { officers } =  useAppSelector(state => state.officer);

  const handleCheckboxChange = (val: any) => {
    setValue(`${val.target.name}`, (val.target.checked) ? '1' : '0')
    setDirty(true);
  }

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
    setDirty(true);
  }

  const handleDoctorSigned = (image: SignatureModel) => {
    setValue('ttd_edukator_manajemen_nyeri', image.Signature);
    setValue('id_edukator_manajemen_nyeri', image.ID_Karyawan);
  }

  const handlePatientSigned = (image: string) => {
    setValue('ttd_penerima_edukasi_manajemen_nyeri', image);
  }

  return <>
    <TabContent activeTab={activeTab}>
      <TabPane tabId='2'>
        <FormGroup className='form-group'>
          <Row>
            <Col md='3'>
              <Label>Penjelasan Materi Yang Diberikan</Label>
            </Col>
            <Col>
              <Input
                id='manajemen_nyeri_farmakologi'
                type='checkbox'
                name='manajemen_nyeri_farmakologi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.Manajemen_Nyeri?.Farmakologi === 1}
                innerRef={register('manajemen_nyeri_farmakologi') as any}
              />
              <Label>Farmakologi</Label>
            </Col>
            <Col>
              <Input
                id='manajemen_nyeri_non_farmakologi'
                type='checkbox'
                name='manajemen_nyeri_non_farmakologi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.Manajemen_Nyeri?.Non_Farmakologi === 1}
                innerRef={register('manajemen_nyeri_non_farmakologi') as any}
              />
              <Label>Non Farmakologi</Label>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </FormGroup>

        <FormGroup className='form-group mt-1'>
          <Row>
            <Col md='3'>
              <Label>Metode Pembelajaran</Label>
            </Col>
            <Col>
              <Input
                id='manajemen_nyeri_diskusi'
                type='checkbox'
                name='manajemen_nyeri_diskusi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Manajemen_Nyeri?.Metode_Pembelajaran?.Diskusi === 1}
                innerRef={register('manajemen_nyeri_diskusi') as any}
              />
              <Label>Diskusi</Label>
            </Col>
            <Col>
              <Input
                id='manajemen_nyeri_demonstrasi'
                type='checkbox'
                name='manajemen_nyeri_demonstrasi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Manajemen_Nyeri?.Metode_Pembelajaran?.Demonstrasi === 1}
                innerRef={register('manajemen_nyeri_demonstrasi') as any}
              />
              <Label>Demonstrasi</Label>
            </Col>
            <Col>
              <Input
                id='manajemen_nyeri_ceramah'
                type='checkbox'
                name='manajemen_nyeri_ceramah'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Manajemen_Nyeri?.Metode_Pembelajaran?.Ceramah === 1}
                innerRef={register('manajemen_nyeri_ceramah') as any}
              />
              <Label>Ceramah</Label>
            </Col>
            <Col>
              <Input
                id='manajemen_nyeri_solusi'
                type='checkbox'
                name='manajemen_nyeri_solusi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Manajemen_Nyeri?.Metode_Pembelajaran?.Solusi === 1}
                innerRef={register('manajemen_nyeri_solusi') as any}
              />
              <Label>Solusi</Label>
            </Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='manajemen_nyeri_observatori'
                type='checkbox'
                name='manajemen_nyeri_observatori'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Manajemen_Nyeri?.Metode_Pembelajaran?.Observatori === 1}
                innerRef={register('manajemen_nyeri_observatori') as any}
              />
              <Label>Observatori</Label>
            </Col>
            <Col>
              <Input
                id='manajemen_nyeri_metode_pembelajaran_lain'
                type='checkbox'
                name='manajemen_nyeri_metode_pembelajaran_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Manajemen_Nyeri?.Metode_Pembelajaran?.Lain === 1}
                innerRef={register('manajemen_nyeri_metode_pembelajaran_lain') as any}
              />
              <Label>Lain - Lain</Label>
            </Col>
            <Col>
              <Input
                id='manajemen_nyeri_metode_pembelajaran_lain_teks'
                type='text'
                name='manajemen_nyeri_metode_pembelajaran_lain_teks'
                innerRef={register() as any}
              />
            </Col>
            <Col></Col>
          </Row>
        </FormGroup>

        <FormGroup className='form-group mt-1'>
          <Row>
            <Col md='3'>
              <Label>Evaluasi Pasien / Keluarga</Label>
            </Col>
            <Col>
              <Input
                id='manajemen_nyeri_mampu_mengerti'
                type='checkbox'
                name='manajemen_nyeri_mampu_mengerti'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Manajemen_Nyeri?.Evaluasi_Pasien?.Mampu_Mengerti === 1}
                innerRef={register('manajemen_nyeri_mampu_mengerti') as any}
              />
              <Label>Mampu Mengerti</Label>
            </Col>
            <Col>
              <Input
                id='manajemen_nyeri_mampu_memahami'
                type='checkbox'
                name='manajemen_nyeri_mampu_memahami'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Manajemen_Nyeri?.Evaluasi_Pasien?.Mampu_Memahami === 1}
                innerRef={register('manajemen_nyeri_mampu_memahami') as any}
              />
              <Label>Mampu Memahami</Label>
            </Col>
            <Col>
              <Input
                id='manajemen_nyeri_evaluasi_pasien_lain'
                type='checkbox'
                name='manajemen_nyeri_evaluasi_pasien_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Manajemen_Nyeri?.Evaluasi_Pasien?.Lain === 1}
                innerRef={register('manajemen_nyeri_evaluasi_pasien_lain') as any}
              />
              <Label>Lain - Lain</Label>
            </Col>
            <Col>
              <Input
                id='manajemen_nyeri_evaluasi_pasien_lain_teks'
                type='text'
                name='manajemen_nyeri_evaluasi_pasien_lain_teks'
                innerRef={register() as any}
              />
            </Col>
          </Row>
        </FormGroup>

        <FormGroup className='form-group mt-1'>
          <Row>
            <Col md='3'>
              <Label>Waktu Edukasi</Label>
            </Col>
            <Col>
              <DateTimeInput
                name='manajemen_nyeri_waktu_edukasi'
                defaultValue='date'
                md={1}
                style={{marginTop: '-30px'}}
                {...{ register, errors }}
              />
            </Col>
            <Col>
              <Label>Durasi (Dalam Menit)</Label>
            </Col>
            <Col>
              <Input
                id='manajemen_nyeri_durasi'
                type='text'
                name='manajemen_nyeri_durasi'
                style={{marginLeft:'-100px'}}
                innerRef={register()as any}
              />
            </Col>
          </Row>
        </FormGroup>

        <FormGroup className='form-group mt-1'>
          <Row>
            <Col md='3'>
              <Label>Paraf / Nama Penerima Edukasi</Label>
            </Col>
            <Col>
              <Input
                id='manajemen_nyeri_pasien'
                type='checkbox'
                name='manajemen_nyeri_pasien'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Manajemen_Nyeri?.Penerima_Edukasi?.Pasien === 1}
                innerRef={register('manajemen_nyeri_pasien') as any}
              />
              <Label>Pasien</Label>
            </Col>
            <Col md='3'>
              <Input
                id='manajemen_nyeri_pasangan'
                type='checkbox'
                name='manajemen_nyeri_pasangan'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                style={{marginLeft:'25px'}}
                defaultChecked={data?.form?.Manajemen_Nyeri?.Penerima_Edukasi?.Pasangan === 1}
                innerRef={register('manajemen_nyeri_pasangan') as any}
              />
              <Label>Pasangan (Suami / Istri)</Label>
            </Col>
            <Col>
              <Input
                id='manajemen_nyeri_orang_tua'
                type='checkbox'
                name='manajemen_nyeri_orang_tua'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Manajemen_Nyeri?.Penerima_Edukasi?.Orang_Tua === 1}
                innerRef={register('manajemen_nyeri_orang_tua') as any}
              />
              <Label>Orang Tua</Label>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='manajemen_nyeri_saudara_kandung'
                type='checkbox'
                name='manajemen_nyeri_saudara_kandung'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Manajemen_Nyeri?.Penerima_Edukasi?.Saudara_Kandung === 1}
                innerRef={register('manajemen_nyeri_saudara_kandung') as any}
              />
              <Label>Saudara Kandung</Label>
            </Col>
            <Col>
              <Input
                id='manajemen_nyeri_penerima_edukasi_lain'
                type='checkbox'
                name='manajemen_nyeri_penerima_edukasi_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Manajemen_Nyeri?.Penerima_Edukasi?.Lain === 1}
                innerRef={register('manajemen_nyeri_penerima_edukasi_lain') as any}
              />
              <Label>Lain - Lain</Label>
            </Col>
            <Col>
              <Input
                id='manajemen_nyeri_penerima_edukasi_lain_teks'
                type='text'
                name='manajemen_nyeri_penerima_edukasi_lain_teks'
                innerRef={register() as any}
              />
            </Col>
            <Col></Col>
          </Row>

          <Row className="mt-2">
            <Col>
              <div className="mt-2 d-flex justify-content-around my-0">
                <Signature
                  label="Pasien/Wali"
                  type="drawer"
                  formName='informasi/general-consent'
                  component='general_consent_sign_01'
                  initialImage={(data && data.form && data.form.TTD_Penerima_Edukasi_Manajemen_Nyeri && data.form.TTD_Penerima_Edukasi_Manajemen_Nyeri !== '') ? data.form.TTD_Penerima_Edukasi_Manajemen_Nyeri : undefined}
                  onSigned={(image: string) => handlePatientSigned(image)} />
                <Input
                  type="hidden"
                  name='ttd_penerima_edukasi_manajemen_nyeri'
                  innerRef={register()}
                  invalid={errors.ttd_penerima_edukasi_manajemen_nyeri && true} />
              </div>
            </Col>
            <Col>
              <div className="mt-2 d-flex justify-content-around my-0">
                <Signature
                  label="Edukator"
                  type="picker"
                  additionalLabel={(data && data.form && data.form.Nama_Edukator_Manajemen_Nyeri) ? data.form.Nama_Edukator_Manajemen_Nyeri : ''}
                  initialImage={(data && data.form && data.form.TTD_Edukator_Manajemen_Nyeri && data.form.TTD_Edukator_Manajemen_Nyeri !== '') ? data.form.TTD_Edukator_Manajemen_Nyeri : undefined}
                  persons={officers}
                  onSigned={(assigner: SignatureModel) => handleDoctorSigned(assigner)}
                />
                <Input
                  type="hidden"
                  name='ttd_edukator_manajemen_nyeri'
                  innerRef={register()}
                  invalid={errors.ttd_edukator_manajemen_nyeri && true}
                />
                <Input
                  type="hidden"
                  name='id_edukator_manajemen_nyeri'
                  innerRef={register()}
                  invalid={errors.id_edukator_manajemen_nyeri && true}
                />
              </div>
            </Col>
          </Row>
        </FormGroup>
      </TabPane>
    </TabContent>
  </>
}

export default ManajemenNyeri;
