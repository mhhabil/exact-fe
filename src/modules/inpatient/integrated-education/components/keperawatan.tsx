import { Col, FormFeedback, FormGroup, Input, Label, Row, TabContent, Table, TabPane } from 'reactstrap';
import { useForm } from 'react-hook-form';
import {useEffect, useState} from 'react';
import { DateTimeInput, TextInput } from '@src/shared/input';
import { IntegratedEducationModel } from '../models/integrated-education.model';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';

const Keperawatan = (props: { data: IntegratedEducationModel, register: any, activeTab: string, processing: boolean, errors: any, setValue: any, setDirty: any }) => {
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
    setValue('ttd_edukator_keperawatan', image.Signature);
    setValue('id_edukator_keperawatan', image.ID_Karyawan);
  }

  const handlePatientSigned = (image: string) => {
    setValue('ttd_penerima_edukasi_keperawatan', image);
  }

  return <>
    <TabContent activeTab={activeTab}>
      <TabPane tabId='4'>
        <FormGroup className='form-group'>
          <Row>
            <Col md='3'>
              <Label>Penjelasan Materi Yang Diberikan</Label>
            </Col>
            <Col>
              <Input
                id='keperawatan_mobilisasi'
                type='checkbox'
                name='keperawatan_mobilisasi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.Keperawatan?.Mobilisasi === 1}
                innerRef={register('keperawatan_mobilisasi') as any}
              />
              <Label>Mobilisasi</Label>
            </Col>
            <Col>
              <Input
                id='keperawatan_perawatan_luka'
                type='checkbox'
                name='keperawatan_perawatan_luka'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.Keperawatan?.Perawatan_Luka === 1}
                innerRef={register('keperawatan_perawatan_luka') as any}
              />
              <Label>Perawatan Luka</Label>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='keperawatan_perawatan_peralatan'
                type='checkbox'
                name='keperawatan_perawatan_peralatan'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.Keperawatan?.Perawatan_Peralatan_Medis === 1}
                innerRef={register('keperawatan_perawatan_peralatan') as  any}
              />
              <Label>Perawatan Peralatan Medis Seperti Kateter Dan NGT</Label>
            </Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='keperawatan_pemberian_makan'
                type='checkbox'
                name='keperawatan_pemberian_makan'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.Keperawatan?.Pemberian_Makan === 1}
                innerRef={register('keperawatan_pemberian_makan') as  any}
              />
              <Label>Cara Pemberian Makan Lewat NGT Bila Dirawat Di Rumah</Label>
            </Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='keperawatan_membuang_urine'
                type='checkbox'
                name='keperawatan_membuang_urine'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.Keperawatan?.Membuang_Urine === 1}
                innerRef={register('keperawatan_membuang_urine') as  any}
              />
              <Label>Cara Membuang Urine Bila Pasien Membawa Kateter Ke Rumah</Label>
            </Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='keperawatan_lain_lain'
                type='checkbox'
                name='keperawatan_lain_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.Keperawatan?.Lain_Lain === 1}
                innerRef={register('keperawatan_lain_lain') as  any}
              />
              <Label>keperawatan_lain_lain</Label>
            </Col>
            <Col>
              <Input
                id='keperawatan_lain_lain_teks'
                type='text'
                name='keperawatan_lain_lain_teks'
                innerRef={register()as any}
                style={{marginLeft:'-50%'}}
              />
            </Col>
          </Row>
        </FormGroup>

        <FormGroup className='form-group mt-1'>
          <Row>
            <Col md='3'>
              <Label>Metode Pembelajaran</Label>
            </Col>
            <Col>
              <Input
                id='keperawatan_diskusi'
                type='checkbox'
                name='keperawatan_diskusi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Keperawatan?.Metode_Pembelajaran?.Diskusi === 1}
                innerRef={register('keperawatan_diskusi') as any}
              />
              <Label>Diskusi</Label>
            </Col>
            <Col>
              <Input
                id='keperawatan_demonstrasi'
                type='checkbox'
                name='keperawatan_demonstrasi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Keperawatan?.Metode_Pembelajaran?.Demonstrasi === 1}
                innerRef={register('keperawatan_demonstrasi') as any}
              />
              <Label>Demonstrasi</Label>
            </Col>
            <Col>
              <Input
                id='keperawatan_ceramah'
                type='checkbox'
                name='keperawatan_ceramah'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Keperawatan?.Metode_Pembelajaran?.Ceramah === 1}
                innerRef={register('keperawatan_ceramah') as any}
              />
              <Label>Ceramah</Label>
            </Col>
            <Col>
              <Input
                id='keperawatan_solusi'
                type='checkbox'
                name='keperawatan_solusi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Keperawatan?.Metode_Pembelajaran?.Solusi === 1}
                innerRef={register('keperawatan_solusi') as any}
              />
              <Label>Solusi</Label>
            </Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='keperawatan_observatori'
                type='checkbox'
                name='keperawatan_observatori'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Keperawatan?.Metode_Pembelajaran?.Observatori === 1}
                innerRef={register('keperawatan_observatori') as any}
              />
              <Label>Observatori</Label>
            </Col>
            <Col>
              <Input
                id='keperawatan_metode_pembelajaran_lain'
                type='checkbox'
                name='keperawatan_metode_pembelajaran_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Keperawatan?.Metode_Pembelajaran?.Lain === 1}
                innerRef={register('keperawatan_metode_pembelajaran_lain') as any}
              />
              <Label>Lain - Lain</Label>
            </Col>
            <Col>
              <Input
                id='keperawatan_metode_pembelajaran_lain_teks'
                type='text'
                name='keperawatan_metode_pembelajaran_lain_teks'
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
                id='keperawatan_mampu_mengerti'
                type='checkbox'
                name='keperawatan_mampu_mengerti'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Keperawatan?.Evaluasi_Pasien?.Mampu_Mengerti === 1}
                innerRef={register('keperawatan_mampu_mengerti') as any}
              />
              <Label>Mampu Mengerti</Label>
            </Col>
            <Col>
              <Input
                id='keperawatan_mampu_memahami'
                type='checkbox'
                name='keperawatan_mampu_memahami'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Keperawatan?.Evaluasi_Pasien?.Mampu_Memahami === 1}
                innerRef={register('keperawatan_mampu_memahami') as any}
              />
              <Label>Mampu Memahami</Label>
            </Col>
            <Col>
              <Input
                id='keperawatan_evaluasi_pasien_lain'
                type='checkbox'
                name='keperawatan_evaluasi_pasien_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Keperawatan?.Evaluasi_Pasien?.Lain === 1}
                innerRef={register('keperawatan_evaluasi_pasien_lain') as any}
              />
              <Label>Lain - Lain</Label>
            </Col>
            <Col>
              <Input
                id='keperawatan_evaluasi_pasien_lain_teks'
                type='text'
                name='keperawatan_evaluasi_pasien_lain_teks'
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
                name='keperawatan_waktu_edukasi'
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
                id='keperawatan_durasi'
                type='text'
                name='keperawatan_durasi'
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
                id='keperawatan_pasien'
                type='checkbox'
                name='keperawatan_pasien'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Keperawatan?.Penerima_Edukasi?.Pasien === 1}
                innerRef={register('keperawatan_pasien') as any}
              />
              <Label>Pasien</Label>
            </Col>
            <Col md='3'>
              <Input
                id='keperawatan_pasangan'
                type='checkbox'
                name='keperawatan_pasangan'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                style={{marginLeft:'25px'}}
                defaultChecked={data?.form?.Keperawatan?.Penerima_Edukasi?.Pasangan === 1}
                innerRef={register('keperawatan_pasangan') as any}
              />
              <Label>Pasangan (Suami / Istri)</Label>
            </Col>
            <Col>
              <Input
                id='keperawatan_orang_tua'
                type='checkbox'
                name='keperawatan_orang_tua'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Keperawatan?.Penerima_Edukasi?.Orang_Tua === 1}
                innerRef={register('keperawatan_orang_tua') as any}
              />
              <Label>Orang Tua</Label>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='keperawatan_saudara_kandung'
                type='checkbox'
                name='keperawatan_saudara_kandung'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Keperawatan?.Penerima_Edukasi?.Saudara_Kandung === 1}
                innerRef={register('keperawatan_saudara_kandung') as any}
              />
              <Label>Saudara Kandung</Label>
            </Col>
            <Col>
              <Input
                id='keperawatan_penerima_edukasi_lain'
                type='checkbox'
                name='keperawatan_penerima_edukasi_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Keperawatan?.Penerima_Edukasi?.Lain === 1}
                innerRef={register('keperawatan_penerima_edukasi_lain') as any}
              />
              <Label>Lain - Lain</Label>
            </Col>
            <Col>
              <Input
                id='keperawatan_penerima_edukasi_lain_teks'
                type='text'
                name='keperawatan_penerima_edukasi_lain_teks'
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
                  initialImage={(data && data.form && data.form.TTD_Penerima_Edukasi_Keperawatan && data.form.TTD_Penerima_Edukasi_Keperawatan !== '') ? data.form.TTD_Penerima_Edukasi_Keperawatan : undefined}
                  onSigned={(image: string) => handlePatientSigned(image)} />
                <Input
                  type="hidden"
                  name='ttd_penerima_edukasi_keperawatan'
                  innerRef={register()}
                  invalid={errors.ttd_penerima_edukasi_keperawatan && true} />
              </div>
            </Col>
            <Col>
              <div className="mt-2 d-flex justify-content-around my-0">
                <Signature
                  label="Edukator"
                  type="picker"
                  additionalLabel={(data && data.form && data.form.Nama_Edukator_Informasi_Lain) ? data.form.Nama_Edukator_Informasi_Lain : ''}
                  initialImage={(data && data.form && data.form.TTD_Edukator_Keperawatan && data.form.TTD_Edukator_Keperawatan !== '') ? data.form.TTD_Edukator_Keperawatan : undefined}
                  persons={officers}
                  onSigned={(assigner: SignatureModel) => handleDoctorSigned(assigner)}
                />
                <Input
                  type="hidden"
                  name='ttd_edukator_keperawatan'
                  innerRef={register()}
                  invalid={errors.ttd_edukator_keperawatan && true}
                />
                <Input
                  type="hidden"
                  name='id_edukator_keperawatan'
                  innerRef={register()}
                  invalid={errors.id_edukator_keperawatan && true}
                />
              </div>
            </Col>
          </Row>
        </FormGroup>
      </TabPane>
    </TabContent>
  </>
}

export default Keperawatan;
