import { Button, Col, FormFeedback, FormGroup, Input, Label, Row, TabContent, Table, TabPane } from 'reactstrap';
import { useForm } from 'react-hook-form';
import {useEffect, useState} from 'react';
import { DateTimeInput, TextInput } from '@src/shared/input';
import { IntegratedEducationModel } from '../models/integrated-education.model';
import { Signature } from '@src/shared/signature/components';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { Trash } from 'react-feather';

const InformasiLain = (props: { data: IntegratedEducationModel, register: any, activeTab: string, processing: boolean, errors: any, setValue: any, setDirty: any, getValues: any }) => {
  const { data, register, activeTab, errors, processing, setValue, setDirty, getValues } = props;

  const { doctors } = useAppSelector(state => state.doctor);
  const { officers } =  useAppSelector(state => state.officer);
  const [patientInformation, setPatientInformation] = useState<any>(data.form && data.form.Informasi_Lain_Pasien && Array.isArray(data.form.Informasi_Lain_Pasien) ? data.form.Informasi_Lain_Pasien : []);

  useEffect(() => {
    setValue('daftar_pasien_informasi_lain', patientInformation);
  }, [patientInformation])

  const handleDeleteMedHistory = (index: number) => {
    const histories = patientInformation.map((n: string, key: number) => {
      return getValues(`daftar_pasien_informasi_lain[${key}]`);
    });
    histories.splice(index, 1);
    setPatientInformation(histories);
  }

  const handleAddMedHistory = () => {
    const histories = patientInformation.map((n: string, key: number) => {
      return getValues(`daftar_pasien_informasi_lain[${key}]`);
    });
    setPatientInformation([...histories, '']);
  }

  const handleCheckboxChange = (val: any) => {
    setValue(`${val.target.name}`, (val.target.checked) ? '1' : '0')
    setDirty(true);
  }

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
    setDirty(true);
  }

  const handleDoctorSigned = (image: SignatureModel) => {
    setValue('ttd_edukator_informasi_lain', image.Signature);
    setValue('id_edukator_informasi_lain', image.ID_Karyawan);
  }

  const handlePatientSigned = (image: string) => {
    setValue('ttd_penerima_edukasi_informasi_lain', image);
  }

  return <>
    <TabContent activeTab={activeTab}>
      <TabPane tabId='5'>
        <FormGroup row className="form-group my-2 mb-2">
          <Table responsive bordered>
            <thead>
              <tr>
                <th className="text-center" colSpan={3}>Penjelasan Materi Yang Diberikan</th>
              </tr>
            </thead>
            <tbody>
              {
                patientInformation && patientInformation.map((item: string, key: number) => (
                  <tr key={key}>
                    <td>{`${key + 1}`}</td>
                    <td>
                      <Input
                        className="me-1"
                        id={`daftar_pasien_informasi_lain_${key}`}
                        type="text"
                        name={`daftar_pasien_informasi_lain[${key}]`}
                        innerRef={register({ required: true })}
                        required
                      />
                    </td>
                    <td className="text-center">
                      <Button style={{ padding: '4px' }} color='danger' type='button' onClick={ () => handleDeleteMedHistory(key)}>
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
            onClick={() => handleAddMedHistory()}
          >
            +Tambah Penjelasan Materi Yang DiBerikan
          </span>
        </FormGroup>

        <FormGroup className='form-group mt-3'>
          <Row>
            <Col md='3'>
              <Label>Metode Pembelajaran</Label>
            </Col>
            <Col>
              <Input
                id='informasi_lain_diskusi'
                type='checkbox'
                name='informasi_lain_diskusi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Informasi_Lain?.Metode_Pembelajaran?.Diskusi === 1}
                innerRef={register('informasi_lain_diskusi') as any}
              />
              <Label>Diskusi</Label>
            </Col>
            <Col>
              <Input
                id='informasi_lain_demonstrasi'
                type='checkbox'
                name='informasi_lain_demonstrasi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Informasi_Lain?.Metode_Pembelajaran?.Demonstrasi === 1}
                innerRef={register('informasi_lain_demonstrasi') as any}
              />
              <Label>Demonstrasi</Label>
            </Col>
            <Col>
              <Input
                id='informasi_lain_ceramah'
                type='checkbox'
                name='informasi_lain_ceramah'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Informasi_Lain?.Metode_Pembelajaran?.Ceramah === 1}
                innerRef={register('informasi_lain_ceramah') as any}
              />
              <Label>Ceramah</Label>
            </Col>
            <Col>
              <Input
                id='informasi_lain_solusi'
                type='checkbox'
                name='informasi_lain_solusi'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Informasi_Lain?.Metode_Pembelajaran?.Solusi === 1}
                innerRef={register('informasi_lain_solusi') as any}
              />
              <Label>Solusi</Label>
            </Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='informasi_lain_observatori'
                type='checkbox'
                name='informasi_lain_observatori'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Informasi_Lain?.Metode_Pembelajaran?.Observatori === 1}
                innerRef={register('informasi_lain_observatori') as any}
              />
              <Label>Observatori</Label>
            </Col>
            <Col>
              <Input
                id='informasi_lain_metode_pembelajaran_lain'
                type='checkbox'
                name='informasi_lain_metode_pembelajaran_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Informasi_Lain?.Metode_Pembelajaran?.Lain === 1}
                innerRef={register('informasi_lain_metode_pembelajaran_lain') as any}
              />
              <Label>Lain - Lain</Label>
            </Col>
            <Col>
              <Input
                id='informasi_lain_metode_pembelajaran_lain_teks'
                type='text'
                name='informasi_lain_metode_pembelajaran_lain_teks'
                innerRef={register() as any}
                // style={{width:'300px'}}
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
                id='informasi_lain_mampu_mengerti'
                type='checkbox'
                name='informasi_lain_mampu_mengerti'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Informasi_Lain?.Evaluasi_Pasien?.Mampu_Mengerti === 1}
                innerRef={register('informasi_lain_mampu_mengerti') as any}
              />
              <Label>Mampu Mengerti</Label>
            </Col>
            <Col>
              <Input
                id='informasi_lain_mampu_memahami'
                type='checkbox'
                name='informasi_lain_mampu_memahami'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Informasi_Lain?.Evaluasi_Pasien?.Mampu_Memahami === 1}
                innerRef={register('informasi_lain_mampu_memahami') as any}
              />
              <Label>Mampu Memahami</Label>
            </Col>
            <Col>
              <Input
                id='informasi_lain_evaluasi_pasien_lain'
                type='checkbox'
                name='informasi_lain_evaluasi_pasien_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Informasi_Lain?.Evaluasi_Pasien?.Lain === 1}
                innerRef={register('informasi_lain_evaluasi_pasien_lain') as any}
              />
              <Label>Lain - Lain</Label>
            </Col>
            <Col>
              <Input
                id='informasi_lain_evaluasi_pasien_lain_teks'
                type='text'
                name='informasi_lain_evaluasi_pasien_lain_teks'
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
                name='informasi_lain_waktu_edukasi'
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
                id='informasi_lain_durasi'
                type='text'
                name='informasi_lain_durasi'
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
                id='informasi_lain_pasien'
                type='checkbox'
                name='informasi_lain_pasien'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Informasi_Lain?.Penerima_Edukasi?.Pasien === 1}
                innerRef={register('informasi_lain_pasien') as any}
              />
              <Label>Pasien</Label>
            </Col>
            <Col md='3'>
              <Input
                id='informasi_lain_pasangan'
                type='checkbox'
                name='informasi_lain_pasangan'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                style={{marginLeft:'25px'}}
                defaultChecked={data?.form?.Informasi_Lain?.Penerima_Edukasi?.Pasangan === 1}
                innerRef={register('informasi_lain_pasangan') as any}
              />
              <Label>Pasangan (Suami / Istri)</Label>
            </Col>
            <Col>
              <Input
                id='informasi_lain_orang_tua'
                type='checkbox'
                name='informasi_lain_orang_tua'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Informasi_Lain?.Penerima_Edukasi?.Orang_Tua === 1}
                innerRef={register('informasi_lain_orang_tua') as any}
              />
              <Label>Orang Tua</Label>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='informasi_lain_saudara_kandung'
                type='checkbox'
                name='informasi_lain_saudara_kandung'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Informasi_Lain?.Penerima_Edukasi?.Saudara_Kandung === 1}
                innerRef={register('informasi_lain_saudara_kandung') as any}
              />
              <Label>Saudara Kandung</Label>
            </Col>
            <Col>
              <Input
                id='informasi_lain_penerima_edukasi_lain'
                type='checkbox'
                name='informasi_lain_penerima_edukasi_lain'
                className='me-1'
                onChange={(e) => handleCheckboxChange(e)}
                value='1'
                defaultChecked={data?.form?.Informasi_Lain?.Penerima_Edukasi?.Lain === 1}
                innerRef={register('informasi_lain_penerima_edukasi_lain') as any}
              />
              <Label>Lain - Lain</Label>
            </Col>
            <Col>
              <Input
                id='informasi_lain_penerima_edukasi_lain_teks'
                type='text'
                name='informasi_lain_penerima_edukasi_lain_teks'
                innerRef={register() as any}
                // style={{width:'300px'}}
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
                  initialImage={(data && data.form && data.form.TTD_Penerima_Edukasi_Informasi_Lain && data.form.TTD_Edukator_Informasi_Lain !== '') ? data.form.TTD_Edukator_Informasi_Lain : undefined}
                  onSigned={(image: string) => handlePatientSigned(image)} />
                <Input
                  type="hidden"
                  name='ttd_penerima_edukasi_informasi_lain'
                  innerRef={register()}
                  invalid={errors.ttd_penerima_edukasi_informasi_lain && true} />
              </div>
            </Col>
            <Col>
              <div className="mt-2 d-flex justify-content-around my-0">
                <Signature
                  label="Edukator"
                  type="picker"
                  additionalLabel={(data && data.form && data.form.Nama_Edukator_Informasi_Lain) ? data.form.Nama_Edukator_Informasi_Lain : ''}
                  initialImage={(data && data.form && data.form.TTD_Edukator_Informasi_Lain && data.form.TTD_Edukator_Informasi_Lain !== '') ? data.form.TTD_Edukator_Informasi_Lain : undefined}
                  persons={officers}
                  onSigned={(assigner: SignatureModel) => handleDoctorSigned(assigner)}
                />
                <Input
                  type="hidden"
                  name='ttd_edukator_informasi_lain'
                  innerRef={register()}
                  invalid={errors.ttd_edukator_informasi_lain && true}
                />
                <Input
                  type="hidden"
                  name='id_edukator_informasi_lain'
                  innerRef={register()}
                  invalid={errors.id_edukator_informasi_lain && true}
                />
              </div>
            </Col>
          </Row>
        </FormGroup>
      </TabPane>
    </TabContent>
  </>
}

export default InformasiLain;
