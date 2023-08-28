import { Col, FormFeedback, FormGroup, Input, Label, Row, TabContent, Table, TabPane } from 'reactstrap';
import { useForm } from 'react-hook-form';
import {useEffect, useState} from 'react';
import { DateTimeInput, TextInput } from '@src/shared/input';
import { IntegratedEducationModel } from '../models/integrated-education.model';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';

const PenggunaanPeralatanMedisForm = (props: { data: IntegratedEducationModel, register: any, activeTab: string, processing: boolean, errors: any, setValue: any, setDirty: any }) => {
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
    setValue('ttd_edukator_penggunaan_peralatan', image.Signature);
    setValue('id_edukator_penggunaan_peralatan', image.ID_Karyawan);
  }

  const handlePatientSigned = (image: string) => {
    setValue('ttd_penerima_edukasi_penggunaan_peralatan', image);
  }

  return <>
    <TabContent activeTab={activeTab}>
      <TabPane tabId='9'>
        <FormGroup className='form-group'>
          <Row>
            <Col md='3'>
              <Label>Penjelasan Materi Yang Diberikan</Label>
            </Col>
            <Col>
              <Input
                id='penggunaan_peralatan_infus'
                type='checkbox'
                name='penggunaan_peralatan_infus'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.Penggunaan_Peralatan?.Infus === 1}
                innerRef={register('penggunaan_peralatan_infus') as any}
              />
              <Label>Infus</Label>
              <div>
                <Input
                  id='penggunaan_peralatan_oksigen'
                  type='checkbox'
                  name='penggunaan_peralatan_oksigen'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.Penggunaan_Peralatan?.Oksigen === 1}
                  innerRef={register('penggunaan_peralatan_oksigen') as  any}
                />
                <Label>Oksigen</Label>
              </div>
              <div>
                <Input
                  id='penggunaan_peralatan_nebulizer'
                  type='checkbox'
                  name='penggunaan_peralatan_nebulizer'
                  className='me-1'
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.Penggunaan_Peralatan?.Nebulizer === 1}
                  innerRef={register('penggunaan_peralatan_nebulizer') as  any}
                />
                <Label>Nebulizer</Label>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='penggunaan_peralatan_lain'
                type='checkbox'
                name='penggunaan_peralatan_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.Penggunaan_Peralatan?.Lain_Lain === 1}
                innerRef={register('penggunaan_peralatan_lain') as  any}
              />
              <Label>Lain-Lain</Label>
            </Col>
            <Col md='7'>
              <Input
                id='penggunaan_peralatan_lain_teks'
                type='text'
                name='penggunaan_peralatan_lain_teks'
                innerRef={register()}
              />
            </Col>
          </Row>
        </FormGroup>

        <FormGroup className='form-group mt-2'>
          <Row>
            <Col md='3'>
              <Label>Metode Pembelajaran</Label>
            </Col>
            <Col>
              <Input
                id='penggunaan_peralatan_diskusi'
                type='checkbox'
                name='penggunaan_peralatan_diskusi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Penggunaan_Peralatan?.Metode_Pembelajaran?.Diskusi === 1}
                innerRef={register('penggunaan_peralatan_diskusi') as any}
              />
              <Label>Diskusi</Label>
            </Col>
            <Col>
              <Input
                id='penggunaan_peralatan_demonstrasi'
                type='checkbox'
                name='penggunaan_peralatan_demonstrasi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Penggunaan_Peralatan?.Metode_Pembelajaran?.Demonstrasi === 1}
                innerRef={register('penggunaan_peralatan_demonstrasi') as any}
              />
              <Label>Demonstrasi</Label>
            </Col>
            <Col>
              <Input
                id='penggunaan_peralatan_ceramah'
                type='checkbox'
                name='penggunaan_peralatan_ceramah'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Penggunaan_Peralatan?.Metode_Pembelajaran?.Ceramah === 1}
                innerRef={register('penggunaan_peralatan_ceramah') as any}
              />
              <Label>Ceramah</Label>
            </Col>
            <Col>
              <Input
                id='penggunaan_peralatan_solusi'
                type='checkbox'
                name='penggunaan_peralatan_solusi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Penggunaan_Peralatan?.Metode_Pembelajaran?.Solusi === 1}
                innerRef={register('penggunaan_peralatan_solusi') as any}
              />
              <Label>Solusi</Label>
            </Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='penggunaan_peralatan_observatori'
                type='checkbox'
                name='penggunaan_peralatan_observatori'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Penggunaan_Peralatan?.Metode_Pembelajaran?.Observatori === 1}
                innerRef={register('penggunaan_peralatan_observatori') as any}
              />
              <Label>Observatori</Label>
            </Col>
            <Col>
              <Input
                id='penggunaan_peralatan_metode_pembelajaran_lain'
                type='checkbox'
                name='penggunaan_peralatan_metode_pembelajaran_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Penggunaan_Peralatan?.Metode_Pembelajaran?.Lain === 1}
                innerRef={register('penggunaan_peralatan_metode_pembelajaran_lain') as any}
              />
              <Label>Lain - Lain</Label>
            </Col>
            <Col>
              <Input
                id='penggunaan_peralatan_metode_pembelajaran_lain_teks'
                type='text'
                name='penggunaan_peralatan_metode_pembelajaran_lain_teks'
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
                id='penggunaan_peralatan_mampu_mengerti'
                type='checkbox'
                name='penggunaan_peralatan_mampu_mengerti'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Penggunaan_Peralatan?.Evaluasi_Pasien?.Mampu_Mengerti === 1}
                innerRef={register('penggunaan_peralatan_mampu_mengerti') as any}
              />
              <Label>Mampu Mengerti</Label>
            </Col>
            <Col>
              <Input
                id='penggunaan_peralatan_mampu_memahami'
                type='checkbox'
                name='penggunaan_peralatan_mampu_memahami'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Penggunaan_Peralatan?.Evaluasi_Pasien?.Mampu_Memahami === 1}
                innerRef={register('penggunaan_peralatan_mampu_memahami') as any}
              />
              <Label>Mampu Memahami</Label>
            </Col>
            <Col>
              <Input
                id='penggunaan_peralatan_evaluasi_pasien_lain'
                type='checkbox'
                name='penggunaan_peralatan_evaluasi_pasien_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Penggunaan_Peralatan?.Evaluasi_Pasien?.Lain === 1}
                innerRef={register('penggunaan_peralatan_evaluasi_pasien_lain') as any}
              />
              <Label>Lain - Lain</Label>
            </Col>
            <Col>
              <Input
                id='penggunaan_peralatan_evaluasi_pasien_lain_teks'
                type='text'
                name='penggunaan_peralatan_evaluasi_pasien_lain_teks'
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
                name='penggunaan_peralatan_waktu_edukasi'
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
                id='penggunaan_peralatan_durasi'
                type='text'
                name='penggunaan_peralatan_durasi'
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
                id='penggunaan_peralatan_pasien'
                type='checkbox'
                name='penggunaan_peralatan_pasien'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Penggunaan_Peralatan?.Penerima_Edukasi?.Pasien === 1}
                innerRef={register('penggunaan_peralatan_pasien') as any}
              />
              <Label>Pasien</Label>
            </Col>
            <Col md='3'>
              <Input
                id='penggunaan_peralatan_pasangan'
                type='checkbox'
                name='penggunaan_peralatan_pasangan'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                style={{marginLeft:'25px'}}
                defaultChecked={data?.form?.Penggunaan_Peralatan?.Penerima_Edukasi?.Pasangan === 1}
                innerRef={register('penggunaan_peralatan_pasangan') as any}
              />
              <Label>Pasangan (Suami / Istri)</Label>
            </Col>
            <Col>
              <Input
                id='penggunaan_peralatan_orang_tua'
                type='checkbox'
                name='penggunaan_peralatan_orang_tua'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Penggunaan_Peralatan?.Penerima_Edukasi?.Orang_Tua === 1}
                innerRef={register('penggunaan_peralatan_orang_tua') as any}
              />
              <Label>Orang Tua</Label>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='penggunaan_peralatan_saudara_kandung'
                type='checkbox'
                name='penggunaan_peralatan_saudara_kandung'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Penggunaan_Peralatan?.Penerima_Edukasi?.Saudara_Kandung === 1}
                innerRef={register('penggunaan_peralatan_saudara_kandung') as any}
              />
              <Label>Saudara Kandung</Label>
            </Col>
            <Col>
              <Input
                id='penggunaan_peralatan_penerima_edukasi_lain'
                type='checkbox'
                name='penggunaan_peralatan_penerima_edukasi_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Penggunaan_Peralatan?.Penerima_Edukasi?.Lain === 1}
                innerRef={register('penggunaan_peralatan_penerima_edukasi_lain') as any}
              />
              <Label>Lain - Lain</Label>
            </Col>
            <Col>
              <Input
                id='penggunaan_peralatan_penerima_edukasi_lain_teks'
                type='text'
                name='penggunaan_peralatan_penerima_edukasi_lain_teks'
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
                  initialImage={(data && data.form && data.form.TTD_Penerima_Edukasi_Penggunaan_Peralatan && data.form.TTD_Penerima_Edukasi_Penggunaan_Peralatan !== '') ? data.form.TTD_Penerima_Edukasi_Penggunaan_Peralatan : undefined}
                  onSigned={(image: string) => handlePatientSigned(image)} />
                <Input
                  type="hidden"
                  name='ttd_penerima_edukasi_penggunaan_peralatan'
                  innerRef={register()}
                  invalid={errors.ttd_penerima_edukasi_penggunaan_peralatan && true} />
              </div>
            </Col>
            <Col>
              <div className="mt-2 d-flex justify-content-around my-0">
                <Signature
                  label="Edukator"
                  type="picker"
                  additionalLabel={(data && data.form && data.form.Nama_Edukator_Penggunaan_Peralatan) ? data.form.Nama_Edukator_Penggunaan_Peralatan : ''}
                  initialImage={(data && data.form && data.form.TTD_Edukator_Penggunaan_Peralatan && data.form.TTD_Edukator_Penggunaan_Peralatan !== '') ? data.form.TTD_Edukator_Penggunaan_Peralatan : undefined}
                  persons={officers}
                  onSigned={(assigner: SignatureModel) => handleDoctorSigned(assigner)}
                />
                <Input
                  type="hidden"
                  name='ttd_edukator_penggunaan_peralatan'
                  innerRef={register()}
                  invalid={errors.ttd_edukator_penggunaan_peralatan && true}
                />
                <Input
                  type="hidden"
                  name='id_edukator_penggunaan_peralatan'
                  innerRef={register()}
                  invalid={errors.id_edukator_penggunaan_peralatan && true}
                />
              </div>
            </Col>
          </Row>
        </FormGroup>
      </TabPane>
    </TabContent>
  </>
}

export default PenggunaanPeralatanMedisForm;
