import { Col, FormFeedback, FormGroup, Input, Label, Row, TabContent, Table, TabPane } from 'reactstrap';
import { useForm } from 'react-hook-form';
import {useEffect, useState} from 'react';
import { DateTimeInput, TextInput } from '@src/shared/input';
import { IntegratedEducationModel } from '../models/integrated-education.model';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';

const PostOperasiForm = (props: { data: IntegratedEducationModel, register: any, activeTab: string, processing: boolean, errors: any, setValue: any, setDirty: any }) => {
  const { data, register, activeTab, errors, processing, setValue, setDirty } = props;

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
    setValue('ttd_edukator_post_op', image.Signature);
    setValue('id_edukator_post_op', image.ID_Karyawan);
  }

  const handlePatientSigned = (image: string) => {
    setValue('ttd_penerima_edukasi_post_op', image);
  }

  return <>
    <TabContent activeTab={activeTab}>
      <TabPane tabId='6'>
        <FormGroup className='form-group'>
          <Row>
            <Col md='3'>
              <Label>Penjelasan Materi Yang Diberikan</Label>
            </Col>
            <Col>
              <Input
                id='post_op_merunduk'
                type='checkbox'
                name='post_op_merunduk'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.Post_Operasi?.Merunduk === 1}
                innerRef={register('post_op_merunduk') as any}
              />
              <Label>Merunduk(Face Down)</Label>
            </Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='post_op_setengah_duduk'
                type='checkbox'
                name='post_op_setengah_duduk'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.Post_Operasi?.Setengah_Duduk === 1}
                innerRef={register('post_op_setengah_duduk') as  any}
              />
              <Label>Setengah Duduk (Semi Fowler)</Label>
            </Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='post_op_tidak_ada'
                type='checkbox'
                name='post_op_tidak_ada'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Materi_Edukasi_Penjelasan?.Post_Operasi?.Tidak_Ada === 1}
                innerRef={register('post_op_tidak_ada') as  any}
              />
              <Label>Tidak Ada Posisi Khusus</Label>
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
                id='post_op_diskusi'
                type='checkbox'
                name='post_op_diskusi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Post_Operasi?.Metode_Pembelajaran?.Diskusi === 1}
                innerRef={register('post_op_diskusi') as any}
              />
              <Label>Diskusi</Label>
            </Col>
            <Col>
              <Input
                id='post_op_demonstrasi'
                type='checkbox'
                name='post_op_demonstrasi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Post_Operasi?.Metode_Pembelajaran?.Demonstrasi === 1}
                innerRef={register('post_op_demonstrasi') as any}
              />
              <Label>Demonstrasi</Label>
            </Col>
            <Col>
              <Input
                id='post_op_ceramah'
                type='checkbox'
                name='post_op_ceramah'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Post_Operasi?.Metode_Pembelajaran?.Ceramah === 1}
                innerRef={register('post_op_ceramah') as any}
              />
              <Label>Ceramah</Label>
            </Col>
            <Col>
              <Input
                id='post_op_solusi'
                type='checkbox'
                name='post_op_solusi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Post_Operasi?.Metode_Pembelajaran?.Solusi === 1}
                innerRef={register('post_op_solusi') as any}
              />
              <Label>Solusi</Label>
            </Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='post_op_observatori'
                type='checkbox'
                name='post_op_observatori'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Post_Operasi?.Metode_Pembelajaran?.Observatori === 1}
                innerRef={register('post_op_observatori') as any}
              />
              <Label>Observatori</Label>
            </Col>
            <Col>
              <Input
                id='post_op_metode_pembelajaran_lain'
                type='checkbox'
                name='post_op_metode_pembelajaran_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Post_Operasi?.Metode_Pembelajaran?.Lain === 1}
                innerRef={register('post_op_metode_pembelajaran_lain') as any}
              />
              <Label>Lain - Lain</Label>
            </Col>
            <Col>
              <Input
                id='post_op_metode_pembelajaran_lain_teks'
                type='text'
                name='post_op_metode_pembelajaran_lain_teks'
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
                id='post_op_mampu_mengerti'
                type='checkbox'
                name='post_op_mampu_mengerti'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Post_Operasi?.Evaluasi_Pasien?.Mampu_Mengerti === 1}
                innerRef={register('post_op_mampu_mengerti') as any}
              />
              <Label>Mampu Mengerti</Label>
            </Col>
            <Col>
              <Input
                id='post_op_mampu_memahami'
                type='checkbox'
                name='post_op_mampu_memahami'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Post_Operasi?.Evaluasi_Pasien?.Mampu_Memahami === 1}
                innerRef={register('post_op_mampu_memahami') as any}
              />
              <Label>Mampu Memahami</Label>
            </Col>
            <Col>
              <Input
                id='post_op_evaluasi_pasien_lain'
                type='checkbox'
                name='post_op_evaluasi_pasien_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Post_Operasi?.Evaluasi_Pasien?.Lain === 1}
                innerRef={register('post_op_evaluasi_pasien_lain') as any}
              />
              <Label>Lain - Lain</Label>
            </Col>
            <Col>
              <Input
                id='post_op_evaluasi_pasien_lain_teks'
                type='text'
                name='post_op_evaluasi_pasien_lain_teks'
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
                name='post_op_waktu_edukasi'
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
                id='post_op_durasi'
                type='text'
                name='post_op_durasi'
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
                id='post_op_pasien'
                type='checkbox'
                name='post_op_pasien'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Post_Operasi?.Penerima_Edukasi?.Pasien === 1}
                innerRef={register('post_op_pasien') as any}
              />
              <Label>Pasien</Label>
            </Col>
            <Col md='3'>
              <Input
                id='post_op_pasangan'
                type='checkbox'
                name='post_op_pasangan'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                style={{marginLeft:'25px'}}
                defaultChecked={data?.form?.Post_Operasi?.Penerima_Edukasi?.Pasangan === 1}
                innerRef={register('post_op_pasangan') as any}
              />
              <Label>Pasangan (Suami / Istri)</Label>
            </Col>
            <Col>
              <Input
                id='post_op_orang_tua'
                type='checkbox'
                name='post_op_orang_tua'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Post_Operasi?.Penerima_Edukasi?.Orang_Tua === 1}
                innerRef={register('post_op_orang_tua') as any}
              />
              <Label>Orang Tua</Label>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='post_op_saudara_kandung'
                type='checkbox'
                name='post_op_saudara_kandung'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Post_Operasi?.Penerima_Edukasi?.Saudara_Kandung === 1}
                innerRef={register('post_op_saudara_kandung') as any}
              />
              <Label>Saudara Kandung</Label>
            </Col>
            <Col>
              <Input
                id='post_op_penerima_edukasi_lain'
                type='checkbox'
                name='post_op_penerima_edukasi_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Post_Operasi?.Penerima_Edukasi?.Lain === 1}
                innerRef={register('post_op_penerima_edukasi_lain') as any}
              />
              <Label>Lain - Lain</Label>
            </Col>
            <Col>
              <Input
                id='post_op_penerima_edukasi_lain_teks'
                type='text'
                name='post_op_penerima_edukasi_lain_teks'
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
                  formName='rawat-inap/edukasi-terintegrasi'
                  component='ttd_pasien_post_operasi'
                  initialImage={(data && data.form && data.form.TTD_Penerima_Edukasi_Post_Operasi && data.form.TTD_Penerima_Edukasi_Post_Operasi !== '') ? data.form.TTD_Penerima_Edukasi_Post_Operasi : undefined}
                  onSigned={(image: string) => handlePatientSigned(image)} />
                <Input
                  type="hidden"
                  name='ttd_penerima_edukasi_post_op'
                  innerRef={register()}
                  invalid={errors.ttd_penerima_edukasi_keperawatan && true} />
              </div>
            </Col>
            <Col>
              <div className="mt-2 d-flex justify-content-around my-0">
                <Signature
                  label="Edukator"
                  type="picker"
                  additionalLabel={(data && data.form && data.form.Nama_Edukator_Post_Operasi) ? data.form.Nama_Edukator_Post_Operasi : ''}
                  initialImage={(data && data.form && data.form.TTD_Edukator_Post_Operasi && data.form.TTD_Edukator_Post_Operasi !== '') ? data.form.TTD_Edukator_Post_Operasi : undefined}
                  persons={officers}
                  onSigned={(assigner: SignatureModel) => handleDoctorSigned(assigner)}
                />
                <Input
                  type="hidden"
                  name='ttd_edukator_post_op'
                  innerRef={register()}
                  invalid={errors.ttd_edukator_post_op && true}
                />
                <Input
                  type="hidden"
                  name='id_edukator_post_op'
                  innerRef={register()}
                  invalid={errors.id_edukator_post_op && true}
                />
              </div>
            </Col>
          </Row>
        </FormGroup>
      </TabPane>
    </TabContent>
  </>
}

export default PostOperasiForm;
