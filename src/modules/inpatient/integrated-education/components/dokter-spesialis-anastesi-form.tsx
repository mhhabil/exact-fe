import { Col, FormFeedback, FormGroup, Input, Label, Row, TabContent, Table, TabPane } from 'reactstrap';
import { useForm } from 'react-hook-form';
import {useEffect, useState} from 'react';
import { DateTimeInput, TextInput } from '@src/shared/input';
import { IntegratedEducationModel } from '../models/integrated-education.model';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';

const DokterSpesialisAnastesiForm = (props: { data: IntegratedEducationModel, register: any, activeTab: string, processing: boolean, errors: any, setValue: any, setDirty: any }) => {
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
    setValue('ttd_edukator_dokter', image.Signature);
    setValue('id_edukator_dokter', image.ID_Karyawan);
  }

  const handlePatientSigned = (image: string) => {
    setValue('ttd_penerima_edukasi_dokter', image);
  }

  return <>
    <TabContent activeTab={activeTab}>
      <TabPane tabId='7'>
        <FormGroup className='form-group'>
          <Row>
            <Col md='3'>
              <Label>Penjelasan Materi Yang Diberikan</Label>
            </Col>
            <Col>
              <Input
                id='dokter_kondisi_pasien'
                type='checkbox'
                name='dokter_kondisi_pasien'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.Dokter?.Kondisi_Pasien === 1}
                innerRef={register('dokter_kondisi_pasien') as any}
              />
              <Label>Kondisi Pasien</Label>
            </Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='dokter_hasil_pemeriksaan'
                type='checkbox'
                name='dokter_hasil_pemeriksaan'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.Dokter?.Hasil_Pemeriksaan === 1}
                innerRef={register('dokter_hasil_pemeriksaan') as  any}
              />
              <Label>Hasil Pemeriksaan</Label>
            </Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='dokter_teknik_anestesi'
                type='checkbox'
                name='dokter_teknik_anestesi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.Dokter?.Teknik_Anestesi === 1}
                innerRef={register('dokter_teknik_anestesi') as  any}
              />
              <Label>Teknik Anastesi Yang Akan Dilakukan</Label>
            </Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='dokter_nyeri_pasca'
                type='checkbox'
                name='dokter_nyeri_pasca'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.Dokter?.Nyeri_Pasca === 1}
                innerRef={register('dokter_nyeri_pasca') as any}
              />
              <Label>Nyeri Pasca Anestesi</Label>
            </Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='dokter_nyeri_analgesi'
                type='checkbox'
                name='dokter_nyeri_analgesi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.Dokter?.Analgesi_Pasca === 1}
                innerRef={register('dokter_nyeri_analgesi') as any}
              />
              <Label>Analgesi Pasca Anestesi</Label>
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
                id='dokter_diskusi'
                type='checkbox'
                name='dokter_diskusi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Dokter?.Metode_Pembelajaran?.Diskusi === 1}
                innerRef={register('dokter_diskusi') as any}
              />
              <Label>Diskusi</Label>
            </Col>
            <Col>
              <Input
                id='dokter_demonstrasi'
                type='checkbox'
                name='dokter_demonstrasi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Dokter?.Metode_Pembelajaran?.Demonstrasi === 1}
                innerRef={register('dokter_demonstrasi') as any}
              />
              <Label>Demonstrasi</Label>
            </Col>
            <Col>
              <Input
                id='dokter_ceramah'
                type='checkbox'
                name='dokter_ceramah'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Dokter?.Metode_Pembelajaran?.Ceramah === 1}
                innerRef={register('dokter_ceramah') as any}
              />
              <Label>Ceramah</Label>
            </Col>
            <Col>
              <Input
                id='dokter_solusi'
                type='checkbox'
                name='dokter_solusi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Dokter?.Metode_Pembelajaran?.Solusi === 1}
                innerRef={register('dokter_solusi') as any}
              />
              <Label>Solusi</Label>
            </Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='dokter_observatori'
                type='checkbox'
                name='dokter_observatori'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Dokter?.Metode_Pembelajaran?.Observatori === 1}
                innerRef={register('dokter_observatori') as any}
              />
              <Label>Observatori</Label>
            </Col>
            <Col>
              <Input
                id='dokter_metode_pembelajaran_lain'
                type='checkbox'
                name='dokter_metode_pembelajaran_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Dokter?.Metode_Pembelajaran?.Lain === 1}
                innerRef={register('dokter_metode_pembelajaran_lain') as any}
              />
              <Label>Lain - Lain</Label>
            </Col>
            <Col>
              <Input
                id='dokter_metode_pembelajaran_lain_teks'
                type='text'
                name='dokter_metode_pembelajaran_lain_teks'
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
                id='dokter_mampu_mengerti'
                type='checkbox'
                name='dokter_mampu_mengerti'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Dokter?.Evaluasi_Pasien?.Mampu_Mengerti === 1}
                innerRef={register('dokter_mampu_mengerti') as any}
              />
              <Label>Mampu Mengerti</Label>
            </Col>
            <Col>
              <Input
                id='dokter_mampu_memahami'
                type='checkbox'
                name='dokter_mampu_memahami'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Dokter?.Evaluasi_Pasien?.Mampu_Memahami === 1}
                innerRef={register('dokter_mampu_memahami') as any}
              />
              <Label>Mampu Memahami</Label>
            </Col>
            <Col>
              <Input
                id='dokter_evaluasi_pasien_lain'
                type='checkbox'
                name='dokter_evaluasi_pasien_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Dokter?.Evaluasi_Pasien?.Lain === 1}
                innerRef={register('dokter_evaluasi_pasien_lain') as any}
              />
              <Label>Lain - Lain</Label>
            </Col>
            <Col>
              <Input
                id='dokter_evaluasi_pasien_lain_teks'
                type='text'
                name='dokter_evaluasi_pasien_lain_teks'
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
                name='dokter_waktu_edukasi'
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
                id='dokter_durasi'
                type='text'
                name='dokter_durasi'
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
                id='dokter_pasien'
                type='checkbox'
                name='dokter_pasien'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Dokter?.Penerima_Edukasi?.Pasien === 1}
                innerRef={register('dokter_pasien') as any}
              />
              <Label>Pasien</Label>
            </Col>
            <Col md='3'>
              <Input
                id='dokter_pasangan'
                type='checkbox'
                name='dokter_pasangan'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                style={{marginLeft:'25px'}}
                defaultChecked={data?.form?.Dokter?.Penerima_Edukasi?.Pasangan === 1}
                innerRef={register('dokter_pasangan') as any}
              />
              <Label>Pasangan (Suami / Istri)</Label>
            </Col>
            <Col>
              <Input
                id='dokter_orang_tua'
                type='checkbox'
                name='dokter_orang_tua'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Dokter?.Penerima_Edukasi?.Orang_Tua === 1}
                innerRef={register('dokter_orang_tua') as any}
              />
              <Label>Orang Tua</Label>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='dokter_saudara_kandung'
                type='checkbox'
                name='dokter_saudara_kandung'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Dokter?.Penerima_Edukasi?.Saudara_Kandung === 1}
                innerRef={register('dokter_saudara_kandung') as any}
              />
              <Label>Saudara Kandung</Label>
            </Col>
            <Col>
              <Input
                id='dokter_penerima_edukasi_lain'
                type='checkbox'
                name='dokter_penerima_edukasi_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Dokter?.Penerima_Edukasi?.Lain === 1}
                innerRef={register('dokter_penerima_edukasi_lain') as any}
              />
              <Label>Lain - Lain</Label>
            </Col>
            <Col>
              <Input
                id='dokter_penerima_edukasi_lain_teks'
                type='text'
                name='dokter_penerima_edukasi_lain_teks'
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
                  initialImage={(data && data.form && data.form.TTD_Penerima_Edukasi_Dokter && data.form.TTD_Penerima_Edukasi_Dokter !== '') ? data.form.TTD_Penerima_Edukasi_Dokter : undefined}
                  onSigned={(image: string) => handlePatientSigned(image)} />
                <Input
                  type="hidden"
                  name='ttd_penerima_edukasi_dokter'
                  innerRef={register()}
                  invalid={errors.ttd_penerima_edukasi_dokter && true} />
              </div>
            </Col>
            <Col>
              <div className="mt-2 d-flex justify-content-around my-0">
                <Signature
                  label="Edukator"
                  type="picker"
                  additionalLabel={(data && data.form && data.form.Nama_Edukator_Dokter) ? data.form.Nama_Edukator_Dokter : ''}
                  initialImage={(data && data.form && data.form.TTD_Edukator_Dokter && data.form.TTD_Edukator_Dokter !== '') ? data.form.TTD_Edukator_Dokter : undefined}
                  persons={officers}
                  onSigned={(assigner: SignatureModel) => handleDoctorSigned(assigner)}
                />
                <Input
                  type="hidden"
                  name='ttd_edukator_dokter'
                  innerRef={register()}
                  invalid={errors.ttd_edukator_dokter && true}
                />
                <Input
                  type="hidden"
                  name='id_edukator_dokter'
                  innerRef={register()}
                  invalid={errors.id_edukator_dokter && true}
                />
              </div>
            </Col>
          </Row>
        </FormGroup>
      </TabPane>
    </TabContent>
  </>
}

export default DokterSpesialisAnastesiForm;
