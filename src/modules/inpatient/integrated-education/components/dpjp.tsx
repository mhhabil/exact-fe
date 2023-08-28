import { Col, FormFeedback, FormGroup, Input, Label, Row, TabContent, Table, TabPane } from 'reactstrap';
import { useForm } from 'react-hook-form';
import {useEffect, useState} from 'react';
import PreAnesthesiaFormConstant from '../../pre-anesthesia-form/constants/pre-anesthesia-form.constant';
import { DateTimeInput, TextInput } from '@src/shared/input';
import { IntegratedEducationModel } from '../models/integrated-education.model';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';

const Dpjp = (props: { data: IntegratedEducationModel, register: any, activeTab: string, processing: boolean, errors: any, setValue: any, setDirty: any }) => {
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
    setValue('ttd_edukator_dpjp', image.Signature);
    setValue('id_edukator_dpjp', image.ID_Karyawan);
  }

  const handlePatientSigned = (image: string) => {
    setValue('ttd_penerima_edukasi_dpjp', image);
  }

  return <>
    <TabContent activeTab={activeTab}>
      <TabPane tabId='1'>
        <FormGroup className='form-group'>
          <Row>
            <Col>
              <Label>Penjelasan Materi Yang Diberikan</Label>
            </Col>
            <Col>
              <Input
                id='dpjp_kondisi_pasien'
                type='checkbox'
                name='dpjp_kondisi_pasien'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Kondisi_Pasien === 1}
                innerRef={register('dpjp_kondisi_pasien') as any}
              />
              <Label>Kondisi Pasien</Label>
            </Col>
            <Col>
              <Input
                id='dpjp_hasil_pemeriksaan'
                type='checkbox'
                name='dpjp_hasil_pemeriksaan'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Hasil_Pemeriksaan === 1}
                innerRef={register('dpjp_hasil_pemeriksaan') as any}
              />
              <Label>Hasil Pemeriksaan</Label>
            </Col>
            <Col>
              <Input
                id='dpjp_pengobatan'
                type='checkbox'
                name='dpjp_pengobatan'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Pengobatan === 1}
                innerRef={register('dpjp_pengobatan') as any}
              />
              <Label>Penjelasan Tentang Pengobatan</Label>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <Input
                id='dpjp_manfaat'
                type='checkbox'
                name='dpjp_manfaat'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Manfaat === 1}
                innerRef={register('dpjp_manfaat') as any}
              />
              <Label>Manfaat Dan Kekurangannya</Label>
            </Col>
            <Col>
              <Input
                id='dpjp_alternatif'
                type='checkbox'
                name='dpjp_alternatif'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Alternatif === 1}
                innerRef={register('dpjp_alternatif') as any}
              />
              <Label>Kemungkinan Alternatif</Label>
            </Col>
            <Col>
              <Input
                id='dpjp_keberhasilan'
                type='checkbox'
                name='dpjp_keberhasilan'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Keberhasilan === 1}
                innerRef={register('dpjp_keberhasilan') as any}
              />
              <Label>Kemungkinan Keberhasilan</Label>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col md='9'>
              <Input
                id='dpjp_pemulihan'
                type='checkbox'
                name='dpjp_pemulihan'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Pemulihan === 1}
                innerRef={register('dpjp_pemulihan') as any}
              />
              <Label>Masalah Selama Pemulihan</Label>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <Input
                id='dpjp_diagnosa'
                type='checkbox'
                name='dpjp_diagnosa'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Diagnosa === 1}
                innerRef={register('dpjp_diagnosa') as any}
              />
              <Label>Diagnosa Saat Ini</Label>
            </Col>
            <Col>
              <div>
                <Input
                  id='dpjp_diagnosa_teks'
                  name='dpjp_diagnosa_teks'
                  type='text'
                  innerRef={register()as any}
                />
              </div>
              <div className='mt-1'>
                <Input
                  id='dpjp_diagnosa_teks_1'
                  name='dpjp_diagnosa_teks_1'
                  type='text'
                  innerRef={register()as any}
                />
              </div>
              <div className='mt-1'>
                <Input
                  id='dpjp_diagnosa_teks_2'
                  name='dpjp_diagnosa_teks_2'
                  type='text'
                  innerRef={register()as any}
                />
              </div>
            </Col>
            <Col></Col>
          </Row>
          <Row className='mt-1'>
            <Col></Col>
            <Col md='6'>
              <Input
                id='dpjp_hasil_asuhan'
                type='checkbox'
                name='dpjp_hasil_asuhan'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Hasil_Asuhan === 1}
                innerRef={register('dpjp_hasil_asuhan')as any}
              />
              <Label>Hasil Asuhan Dan Pengobatan Termasuk Kejadian Yang Tidak Diharapkan</Label>
            </Col>
            <Col>
              <div>
                <Input
                  id='dpjp_hasil_asuhan_teks'
                  name='dpjp_hasil_asuhan_teks'
                  type='text'
                  innerRef={register()as any}
                />
              </div>
              <div className='mt-1'>
                <Input
                  id='dpjp_hasil_asuhan_teks_2'
                  name='dpjp_hasil_asuhan_teks_2'
                  type='text'
                  innerRef={register()as any}
                />
              </div>
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
                id='dpjp_diskusi'
                type='checkbox'
                name='dpjp_diskusi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.DPJP?.Metode_Pembelajaran?.Diskusi === 1}
                innerRef={register('dpjp_diskusi') as any}
              />
              <Label>Diskusi</Label>
            </Col>
            <Col>
              <Input
                id='dpjp_demonstrasi'
                type='checkbox'
                name='dpjp_demonstrasi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.DPJP?.Metode_Pembelajaran?.Demonstrasi === 1}
                innerRef={register('dpjp_demonstrasi') as any}
              />
              <Label>Demonstrasi</Label>
            </Col>
            <Col>
              <Input
                id='dpjp_ceramah'
                type='checkbox'
                name='dpjp_ceramah'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.DPJP?.Metode_Pembelajaran?.Ceramah === 1}
                innerRef={register('dpjp_ceramah') as any}
              />
              <Label>Ceramah</Label>
            </Col>
            <Col>
              <Input
                id='dpjp_solusi'
                type='checkbox'
                name='dpjp_solusi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.DPJP?.Metode_Pembelajaran?.Solusi === 1}
                innerRef={register('dpjp_solusi') as any}
              />
              <Label>Solusi</Label>
            </Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='dpjp_observatori'
                type='checkbox'
                name='dpjp_observatori'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.DPJP?.Metode_Pembelajaran?.Observatori === 1}
                innerRef={register('dpjp_observatori') as any}
              />
              <Label>Observatori</Label>
            </Col>
            <Col>
              <Input
                id='dpjp_metode_pembelajaran_lain'
                type='checkbox'
                name='dpjp_metode_pembelajaran_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.DPJP?.Metode_Pembelajaran?.Lain === 1}
                innerRef={register('dpjp_metode_pembelajaran_lain') as any}
              />
              <Label>Lain - Lain</Label>
            </Col>
            <Col>
              <Input
                id='dpjp_metode_pembelajaran_lain_teks'
                type='text'
                name='dpjp_metode_pembelajaran_lain_teks'
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
                id='dpjp_mampu_mengerti'
                type='checkbox'
                name='dpjp_mampu_mengerti'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.DPJP?.Evaluasi_Pasien?.Mampu_Mengerti === 1}
                innerRef={register('dpjp_mampu_mengerti') as any}
              />
              <Label>Mampu Mengerti</Label>
            </Col>
            <Col>
              <Input
                id='dpjp_mampu_memahami'
                type='checkbox'
                name='dpjp_mampu_memahami'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.DPJP?.Evaluasi_Pasien?.Mampu_Memahami === 1}
                innerRef={register('dpjp_mampu_memahami') as any}
              />
              <Label>Mampu Memahami</Label>
            </Col>
            <Col>
              <Input
                id='dpjp_evaluasi_pasien_lain'
                type='checkbox'
                name='dpjp_evaluasi_pasien_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.DPJP?.Evaluasi_Pasien?.Lain === 1}
                innerRef={register('dpjp_evaluasi_pasien_lain') as any}
              />
              <Label>Lain - Lain</Label>
            </Col>
            <Col>
              <Input
                id='dpjp_evaluasi_pasien_lain_teks'
                type='text'
                name='dpjp_evaluasi_pasien_lain_teks'
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
                name='dpjp_waktu_edukasi'
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
                id='dpjp_durasi'
                type='text'
                name='dpjp_durasi'
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
                id='dpjp_pasien'
                type='checkbox'
                name='dpjp_pasien'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.DPJP?.Penerima_Edukasi?.Pasien === 1}
                innerRef={register('dpjp_pasien') as any}
              />
              <Label>Pasien</Label>
            </Col>
            <Col md='3'>
              <Input
                id='dpjp_pasangan'
                type='checkbox'
                name='dpjp_pasangan'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                style={{marginLeft:'25px'}}
                defaultChecked={data?.form?.DPJP?.Penerima_Edukasi?.Pasangan === 1}
                innerRef={register('dpjp_pasangan') as any}
              />
              <Label>Pasangan (Suami / Istri)</Label>
            </Col>
            <Col>
              <Input
                id='dpjp_orang_tua'
                type='checkbox'
                name='dpjp_orang_tua'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.DPJP?.Penerima_Edukasi?.Orang_Tua === 1}
                innerRef={register('dpjp_orang_tua') as any}
              />
              <Label>Orang Tua</Label>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='dpjp_saudara_kandung'
                type='checkbox'
                name='dpjp_saudara_kandung'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.DPJP?.Penerima_Edukasi?.Saudara_Kandung === 1}
                innerRef={register('dpjp_saudara_kandung') as any}
              />
              <Label>Saudara Kandung</Label>
            </Col>
            <Col>
              <Input
                id='dpjp_penerima_edukasi_lain'
                type='checkbox'
                name='dpjp_penerima_edukasi_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.DPJP?.Penerima_Edukasi?.Lain === 1}
                innerRef={register('dpjp_penerima_edukasi_lain') as any}
              />
              <Label>Lain - Lain</Label>
            </Col>
            <Col>
              <Input
                id='dpjp_penerima_edukasi_lain_teks'
                type='text'
                name='dpjp_penerima_edukasi_lain_teks'
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
                  initialImage={(data && data.form && data.form.TTD_Penerima_Edukasi_DPJP && data.form.TTD_Penerima_Edukasi_DPJP !== '') ? data.form.TTD_Penerima_Edukasi_DPJP : undefined}
                  onSigned={(image: string) => handlePatientSigned(image)} />
                <Input
                  type="hidden"
                  name='ttd_penerima_edukasi_dpjp'
                  innerRef={register()}
                  invalid={errors.ttd_pasien && true} />
              </div>
            </Col>
            <Col>
              <div className="mt-2 d-flex justify-content-around my-0">
                <Signature
                  label="Edukator"
                  type="picker"
                  additionalLabel={(data && data.form && data.form.Nama_Edukator_DPJP) ? data.form.Nama_Edukator_DPJP : ''}
                  initialImage={(data && data.form && data.form.TTD_Edukator_DPJP && data.form.TTD_Edukator_DPJP !== '') ? data.form.TTD_Edukator_DPJP : undefined}
                  persons={officers}
                  onSigned={(assigner: SignatureModel) => handleDoctorSigned(assigner)}
                />
                <Input
                  type="hidden"
                  name='ttd_edukator_dpjp'
                  innerRef={register()}
                  invalid={errors.ttd_edukator_dpjp && true}
                />
                <Input
                  type="hidden"
                  name='id_edukator_dpjp'
                  innerRef={register()}
                  invalid={errors.id_edukator_dpjp && true}
                />
              </div>
            </Col>
          </Row>
        </FormGroup>
      </TabPane>
    </TabContent>
  </>
}

export default Dpjp;
