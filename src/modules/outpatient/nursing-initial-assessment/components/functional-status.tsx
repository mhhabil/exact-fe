import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { DateTimeInput, SelectInput, TextInput } from "@src/shared/input";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { SubmitButton } from '@src/shared/button';
import falses from '@src/modules/ro/preliminary-study/consts/falses';
import description from '@src/modules/operating-room/surgery-report/const/local-phaco/description';
import agama from '../const/agama';
import { NursingInitialAssessmenttModel } from '../models/nursing-initial-assessment-model';

const FunctionalStatus = (props: {data: NursingInitialAssessmenttModel, setValue:any, register: any, errors: any}) => {
  const { data, setValue, register, errors } = props;

  // const [signaturePerson, setSignaturePerson] = useState(data?.form?.Tanda_Tangan === 'Wali' ? '2' : '1');
  // const [hasilTidakSeimbang, setHasilTidakSeimbang] = useState<boolean>(data && data.form && data.form.Berjalan_Tidak_Seimbang === 1);
  // const [hasilAlatBantu, setHasilAlatBantu] = useState<boolean>(data && data.form && data.form.Berjalan_Alat_Bantu === 1);
  // const [hasilMenopang, setHasilMenopang] = useState<boolean>(data && data.form && data.form.Menopang === 1);

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  return (
    <FormGroup className="form-group" row>
      <h4 className="mt-2">5. Status Fungsional </h4>
      <hr />
      <tr>
        <td>
          <Row>
            <Col>
              <Row className="mb-1">
                <Col>
                  <Input
                    id="status_functional_1"
                    type="radio"
                    name="status_functional"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Status_Fungsional === '1'}
                    value="1"
                    innerRef={register("status_functional")}
                  />{' '}
                  <Label>Mandiri</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <Input
                    id="status_functional_2"
                    type="radio"
                    name="status_functional"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Status_Fungsional === '2'}
                    value="2"
                    innerRef={register("status_functional")}
                  />{' '}
                  <Label>Ketergantungan Total</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <Input
                    id="status_functional_3"
                    type="radio"
                    name="status_functional"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Status_Fungsional === '3'}
                    value="3"
                    innerRef={register("status_functional")}
                  />{' '}
                  <Label>Perlu bantuan, sebutkan</Label>
                </Col>
                <Col>
                  <Input
                    type="text"
                    id="status_functional_description"
                    name="status_functional_description"
                    innerRef={register()}
                    style={{marginLeft: '6px', width: '200%'}}
                    invalid={errors.status_functional_description && true}
                  />
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <Label>Diberitahukan ke dokter pukul</Label>
                </Col>
                <Col>
                  <Input
                    id="status_functional_notified_at"
                    type="time"
                    name="status_functional_notified_at"
                    defaultValue={(data && data.form && data.form.Status_Fungsional_Diberitahukan_Pukul) ? data.form.Status_Fungsional_Diberitahukan_Pukul : ''}
                    innerRef={register()}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </td>
      </tr>
      
      <h4 className="mt-2">6. Kebutuhan Komunikasi / Pendidikan dan Pengajaran</h4>
      <hr/>
      <tr className='mt-2'>
        <td>
          <Row>
            <Col>
              <Label>Bicara</Label>
            </Col>
          </Row>
        </td>
        <td>
          <Row>
            <Col>
              <Row className="mb-1">
                <Col style={{marginLeft: '200px'}}>
                  <Input
                    id="talk_1"
                    type="radio"
                    name="talk"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Bicara === '1'}
                    value="1"
                    innerRef={register("talk")}
                  />{' '}
                  <Label>Normal</Label>
                </Col>
              </Row>
              <Row className="mb-1" style={{width: '108%'}}>
                <Col style={{marginLeft: '200px'}}>
                  <Input
                    id="talk_0"
                    type="radio"
                    name="talk"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Bicara === '0'}
                    value="0"
                    innerRef={register("talk")}
                  />{' '}
                  <Label>Gangguan Bicara, Jelaskan</Label>
                </Col>
                <Col>
                  <Input
                    type="text"
                    id="talk_text"
                    name="talk_text"
                    innerRef={register()}
                    style={{width: '200%'}}
                    invalid={errors.talk_text && true}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </td>
      </tr>
      <tr>
        <td>
          <Row>
            <Col>
              <Label>Perlu Penerjemah</Label>
            </Col>
          </Row>
        </td>
        <td>
          <Row>
            <Col>
              <Row className="mb-1">
                <Col style={{marginLeft: '125px'}}>
                  <Input
                    id="need_translator_1"
                    type="radio"
                    name="need_translator"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Perlu_Penerjemah === '1'}
                    value="1"
                    innerRef={register("need_translator")}
                  />{' '}
                  <Label>Tidak</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '125px'}}>
                  <Input
                    id="need_translator_0"
                    type="radio"
                    name="need_translator"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Perlu_Penerjemah === '0'}
                    value="0"
                    innerRef={register("need_translator")}
                  />{' '}
                  <Label>Ya, Bahasa</Label>
                </Col>
                <Col>
                  <Input
                    type="text"
                    id="need_translator_text"
                    name="need_translator_text"
                    innerRef={register()}
                    style={{width: '300%', marginLeft: '-40px'}}
                    invalid={errors.need_translator_text && true}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </td>
      </tr>
      <tr>
        <td>
          <Row>
            <Col>
              <Label>Bahasa Isyarat</Label>
            </Col>
          </Row>
        </td>
        <td>
          <Row>
            <Col>
              <Row className="mb-1">
                <Col style={{marginLeft: '148px'}}>
                  <Input
                    id="sign_language_1"
                    type="radio"
                    name="sign_language"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Bahasa_Isyarat === '1'}
                    value="1"
                    innerRef={register("sign_language")}
                  />{' '}
                  <Label>Tidak</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '148px'}}>
                  <Input
                    id="sign_language"
                    type="radio"
                    name="sign_language"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Bahasa_Isyarat === '0'}
                    value="0"
                    innerRef={register("sign_language")}
                  />{' '}
                  <Label>Ya</Label>
                </Col>
              </Row>
            </Col>
          </Row>
        </td>
      </tr>
      <tr className='mt-1'>
        <td>
          <Row>
            <Col>
              <Label>Hambatan Belajar</Label>
            </Col>
          </Row>
        </td>
        <td>
          <Row>
            <Col>
              <Row className="mb-1">
                <Col style={{marginLeft: '125px'}}>
                  <Input
                    id="barrier_learning_1"
                    type="radio"
                    name="barrier_learning"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Hambatan_Belajar === '1'}
                    value="1"
                    innerRef={register("barrier_learning")}
                  />{' '}
                  <Label>Tidak</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '125px'}}>
                  <Input
                    id="barrier_learning_0"
                    type="radio"
                    name="barrier_learning"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Hambatan_Belajar === '0'}
                    value="0"
                    innerRef={register("barrier_learning")}
                  />{' '}
                  <Label>Ya, Bahasa</Label>
                </Col>
                <Col>
                  <Input
                    type="text"
                    id="barriers_learning_text"
                    name="barriers_learning_text"
                    innerRef={register()}
                    style={{width: '300%', marginLeft: '-40px'}}
                    invalid={errors.barriers_learning_text && true}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </td>
      </tr>
      <tr>
        <td>
          <Row>
            <Col>
              <Label>Tingkat Pendidikan</Label>
            </Col>
          </Row>
        </td>
        <td>
          <Row>
            <Col>
              <Row className="mb-1">
                <Col style={{marginLeft: '118px'}}>
                  <Input
                    id="level_of_education_1"
                    type="radio"
                    name="level_of_education"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Tingkatan_Pendidikan === '1'}
                    value="1"
                    innerRef={register("level_of_education")}
                  />{' '}
                  <Label>TK</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '118px'}}>
                  <Input
                    id="level_of_education_2"
                    type="radio"
                    name="level_of_education"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Tingkatan_Pendidikan === '2'}
                    value="2"
                    innerRef={register("level_of_education")}
                  />{' '}
                  <Label>SD</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '118px'}}>
                  <Input
                    id="level_of_education_3"
                    type="radio"
                    name="level_of_education"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Tingkatan_Pendidikan === '3'}
                    value="3"
                    innerRef={register("level_of_education")}
                  />{' '}
                  <Label>SMP</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '118px'}}>
                  <Input
                    id="level_of_education_4"
                    type="radio"
                    name="level_of_education"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Tingkatan_Pendidikan === '4'}
                    value="4"
                    innerRef={register("level_of_education")}
                  />{' '}
                  <Label>SMA</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '118px'}}>
                  <Input
                    id="level_of_education_5"
                    type="radio"
                    name="level_of_education"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Tingkatan_Pendidikan === '5'}
                    value="5"
                    innerRef={register("level_of_education")}
                  />{' '}
                  <Label>Akademi</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '118px'}}>
                  <Input
                    id="level_of_education_6"
                    type="radio"
                    name="level_of_education"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Tingkatan_Pendidikan === '6'}
                    value="6"
                    innerRef={register("level_of_education")}
                  />{' '}
                  <Label>Sarjana</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '118px'}}>
                  <Input
                    id="level_of_education_7"
                    type="radio"
                    name="level_of_education"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Tingkatan_Pendidikan === '7'}
                    value="7"
                    innerRef={register("level_of_education")}
                  />{' '}
                  <Label>Lain - Lain</Label>
                </Col>
                <Col>
                  <Input
                    type="text"
                    id="level_education_text"
                    name="level_education_text"
                    innerRef={register()}
                    style={{width: '300%', marginLeft: '-40px'}}
                    invalid={errors.level_education_text && true}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </td>
      </tr>

      <h4 className="mt-2">7. Status Ekonomi dan Sosial</h4>
      <hr/>
      <tr>
        <td>
          <Row>
            <Col>
              <Label>Status Ekonomi</Label>
            </Col>
          </Row>
        </td>
        <td>
          <Row>
            <Col>
              <Row className="mb-1">
                <Col style={{marginLeft: '145px'}}>
                  <Input
                    id="economic_status_1"
                    type="radio"
                    name="economic_status"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Status_Ekonomi === '1'}
                    value="1"
                    innerRef={register("economic_status")}
                  />{' '}
                  <Label>Biaya Sendiri</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '145px'}}>
                  <Input
                    id="economic_status_2"
                    type="radio"
                    name="economic_status"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Status_Ekonomi === '2'}
                    value="2"
                    innerRef={register("economic_status")}
                  />{' '}
                  <Label>Asuransi</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '145px'}}>
                  <Input
                    id="economic_status_3"
                    type="radio"
                    name="economic_status"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Status_Ekonomi === '3'}
                    value="3"
                    innerRef={register("economic_status")}
                  />{' '}
                  <Label>Perusahaan</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '145px'}}>
                  <Input
                    id="economic_status_4"
                    type="radio"
                    name="economic_status"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Status_Ekonomi === '4'}
                    value="4"
                    innerRef={register("economic_status")}
                  />{' '}
                  <Label>Lain - Lain</Label>
                </Col>
                <Col>
                  <Input
                    type="text"
                    id="status_economy_text"
                    name="status_economy_text"
                    innerRef={register()}
                    style={{width: '300%', marginLeft: '-40px'}}
                    invalid={errors.status_economy_text && true}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </td>
      </tr>
      <tr>
        <td>
          <Row>
            <Col>
              <Label>Status Sosial</Label>
            </Col>
          </Row>
        </td>
        <td>
          <Row>
            <Col>
              <Input
                type="text"
                id="social_status"
                name="social_status"
                innerRef={register()}
                style={{width: '175%', marginLeft: '200px'}}
                invalid={errors.social_status && true}
              />
            </Col>
          </Row>
        </td>
      </tr>

      <h4 className="mt-2">8. Riwayat Psikologi dan Sosial</h4>
      <hr/>
      <tr>
        <td>
          <Row>
            <Col>
              <Label>Status Psikologi</Label>
            </Col>
          </Row>
        </td>
        <td>
          <Row>
            <Col>
              <Row className="mb-1">
                <Col style={{marginLeft: '145px'}}>
                  <Input
                    id="status_psychology_1"
                    type="radio"
                    name="status_psychology"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Status_Psikologi === '1'}
                    value="1"
                    innerRef={register("status_psychology")}
                  />{' '}
                  <Label>Cemas</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '145px'}}>
                  <Input
                    id="status_psychology_2"
                    type="radio"
                    name="status_psychology"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Status_Psikologi === '2'}
                    value="2"
                    innerRef={register("status_psychology")}
                  />{' '}
                  <Label>Takut</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '145px'}}>
                  <Input
                    id="status_psychology_3"
                    type="radio"
                    name="status_psychology"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Status_Psikologi === '3'}
                    value="3"
                    innerRef={register("status_psychology")}
                  />{' '}
                  <Label>Marah</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '145px'}}>
                  <Input
                    id="status_psychology_4"
                    type="radio"
                    name="status_psychology"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Status_Psikologi === '4'}
                    value="4"
                    innerRef={register("status_psychology")}
                  />{' '}
                  <Label>Sedih</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '145px'}}>
                  <Input
                    id="status_psychology_5"
                    type="radio"
                    name="status_psychology"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Status_Psikologi === '5'}
                    value="5"
                    innerRef={register("status_psychology")}
                  />{' '}
                  <Label>Kecenderungan Bunuuh Diri</Label>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '145px'}}>
                  <Input
                    id="status_psychology_6"
                    type="radio"
                    name="status_psychology"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Status_Psikologi === '6'}
                    value="6"
                    innerRef={register("status_psychology")}
                  />{' '}
                  <Label>Lain - Lain</Label>
                </Col>
                <Col>
                  <Input
                    type="text"
                    id="status_psychology_text"
                    name="status_psychology_text"
                    innerRef={register()}
                    style={{width: '300%', marginLeft: '-40px'}}
                    invalid={errors.status_psychology_text && true}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </td>
      </tr>
      <tr>
        <td>
          <Row>
            <Col>
              <Label>Status Mental</Label>
            </Col>
          </Row>
        </td>
        <td>
          <Row>
            <Col>
              <Row className="mb-1">
                <Col style={{marginLeft: '160px'}}>
                  <Input
                    id="mental_state_1"
                    type="radio"
                    name="mental_state"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Status_Mental === '1'}
                    value="1"
                    innerRef={register("mental_state")}
                  />{' '}
                  <Label>Sadar dan Orientasi Baik</Label>
                </Col>
              </Row>
              <Row className="mb-1" style={{width: '150%'}}>
                <Col style={{marginLeft: '160px'}}>
                  <Input
                    id="mental_state_2"
                    type="radio"
                    name="mental_state"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Status_Mental === '2'}
                    value="2"
                    innerRef={register("mental_state")}
                  />{' '}
                  <Label>Ada Masalah Perilaku, Sebutkan </Label>
                </Col>
                <Col>
                  <Input
                    type="text"
                    id="status_mental_text"
                    name="status_mental_text"
                    innerRef={register()}
                    style={{width: '120%', marginLeft: '-80px'}}
                    invalid={errors.status_mental_text && true}
                  />
                </Col>
              </Row>
              <Row className="mb-1">
                <Col style={{marginLeft: '160px'}}>
                  <Input
                    id="mental_state_3"
                    type="radio"
                    name="mental_state"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Status_Mental === '3'}
                    value="3"
                    innerRef={register("mental_state")}
                  />{' '}
                  <Label>Perilaku kekerasan yang dialami pasien Sebelumnya</Label>
                </Col>
              </Row>
            </Col>
          </Row>
        </td>
      </tr>
      <tr>
        <td>
          <Row>
            <Col>
              <Label style={{width: '80%'}}>Hubungan pasien dengan anggota keluarga</Label>
            </Col>
          </Row>
        </td>
        <td>
          <Row>
            <Col>
              <Row className="mb-1">
                <Col style={{marginLeft: '-32px'}}>
                  <Input
                    id="relationship_patient_family_1"
                    type="radio"
                    name="relationship_patient_family"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Hubungan_Pasien_Keluarga === '1'}
                    value="1"
                    innerRef={register("relationship_patient_family")}
                  />{' '}
                  <Label>Baik</Label>
                </Col>
              </Row>
              <Row className="mb-1" style={{width: '200%'}}>
                <Col style={{marginLeft: '-32px'}}>
                  <Input
                    id="relationship_patient_family_2"
                    type="radio"
                    name="relationship_patient_family"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.form && data.form.Hubungan_Pasien_Keluarga === '2'}
                    value="2"
                    innerRef={register("relationship_patient_family")}
                  />{' '}
                  <Label>Tidak Baik</Label>
                </Col>
              </Row>
              <Row></Row>
            </Col>
          </Row>
        </td>
      </tr>
      <tr style={{marginTop: '-30px'}}>
        <td style={{ width: '15%'}}>
          <Label>Agama</Label>
        </td>
        <td style={{ width: '35%' }}>
          <Input
            className="mt-3"
            type="select"
            id='religion'
            name='religion'
            style={{marginLeft: '70px'}}
            innerRef={register()}
          >
            <option value="" disabled={false}>--</option>
            {
              agama && agama.map((item: any, key: number) => {
                return <option value={item} key={key}>{ item }</option>;
              })
            }
          </Input>
        </td>
      </tr>

      <h4 className="mt-2">9. Masalah dan Rencana Keperawatan</h4>
      <hr/>
      <tbody>
        <tr className='mt-4'>
          <td className='mt-4'>
            <Row>
              <b style={{ marginLeft: '160px' }}>Masalah Keperawatan</b>
              <b style={{ marginLeft: '58%', marginTop: '-20px' }}>Rencana Keperawatan</b>
            </Row>
            <Row style={{ marginTop: '15px' }}>
              <Table bordered>
                <tr>
                  <td>
                    <Row>
                      <Col sm='2'>
                        <Input
                          id="disturbance_table_1"
                          type="checkbox"
                          name="disturbance_table"
                          className="me-1"
                          onChange={(e) => handleCheckboxChange(e)}
                          defaultChecked={(data && data.form && data.form.Tabel_Gangguan === 1)}
                          value="1"
                          innerRef={register('disturbance_table')}
                        />{' '}
                      </Col>
                      <Col>
                        <Label>Gangguan Persepsi Sensori: Penglihatan</Label>
                      </Col>
                      <Col style={{width: '500px'}}>
                        <Label>Mengkaji Ketajaman Penglihatan (visus)</Label>
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Row>
                      <Col sm='2'>
                        <Input
                          id="table_pain"
                          type="checkbox"
                          name="table_pain"
                          className="me-1"
                          onChange={(e) => handleCheckboxChange(e)}
                          defaultChecked={(data && data.form && data.form.Tabel_Nyeri === 1)}
                          value="1"
                          innerRef={register('table_pain')}
                        />{' '}
                      </Col>
                      <Col>
                        <Label>Nyeri</Label>
                      </Col>
                      <Col>
                        <Label>Mengajarkan Teknik Relaksasi</Label>
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Row>
                      <Col sm='2'>
                        <Input
                          id="table_infection"
                          type="checkbox"
                          name="table_infection"
                          className="me-1"
                          onChange={(e) => handleCheckboxChange(e)}
                          defaultChecked={(data && data.form && data.form.Tabel_Infeksi === 1)}
                          value="1"
                          innerRef={register('table_infection')}
                        />{' '}
                      </Col>
                      <Col>
                        <Label>Resiko Infeksi</Label>
                      </Col>
                      <Col>
                        <Label>Perawatan Luka dan Edukasi Pasien</Label>
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Row>
                      <Col sm='2'>
                        <Input
                          id="table_fall"
                          type="checkbox"
                          name="table_fall"
                          className="me-1"
                          onChange={(e) => handleCheckboxChange(e)}
                          defaultChecked={(data && data.form && data.form.Tabel_Jatuh === 1)}
                          value="1"
                          innerRef={register('table_fall')}
                        />{' '}
                      </Col>
                      <Col>
                        <Label>Resiko Jatuh</Label>
                      </Col>
                      <Col>
                        <Label>Memberikan Penandaan Gelang</Label>
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Row>
                      <Col sm='2'>
                        <Input
                          id="tabel_tio"
                          type="checkbox"
                          name="tabel_tio"
                          className="me-1"
                          onChange={(e) => handleCheckboxChange(e)}
                          defaultChecked={(data && data.form && data.form.Tabel_Tio === 1)}
                          value="1"
                          innerRef={register('tabel_tio')}
                        />{' '}
                      </Col>
                      <Col>
                        <Label>Peningkatan Tekanan Intra Okuler (TIO)</Label>
                      </Col>
                      <Col>
                        <Label>Menganjurkan Untuk Kolaborasi Pemberian Obat</Label>
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Row>
                      <Col sm='2'>
                        <Input
                          id="table_less_knowledge"
                          type="checkbox"
                          name="table_less_knowledge"
                          className="me-1"
                          onChange={(e) => handleCheckboxChange(e)}
                          defaultChecked={(data && data.form && data.form.Tabel_Kurang_Pengetahuan === 1)}
                          value="1"
                          innerRef={register('table_less_knowledge')}
                        />{' '}
                      </Col>
                      <Col>
                        <Label>Kurang Pengetahuan</Label>
                      </Col>
                      <Col>
                        <Label>Pemberian Informasi Tentang Status Kesehatan</Label>
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Row>
                      <Col sm='2'>
                        <Input
                          id="other_table"
                          type="checkbox"
                          name="other_table"
                          className="me-1"
                          onChange={(e) => handleCheckboxChange(e)}
                          defaultChecked={(data && data.form && data.form.Tabel_Lainnya === 1)}
                          value="1"
                          innerRef={register('other_table')}
                        />{' '}
                      </Col>
                      <Col>
                        <Input
                          type="textarea"
                          id="table_other_problems"
                          name="table_other_problems"
                          innerRef={register()}
                          invalid={errors.table_other_problems && true}
                        />
                      </Col>
                      <Col>
                        <Input
                          type="textarea"
                          id="other_plan_table"
                          name="other_plan_table"
                          innerRef={register()}
                          invalid={errors.other_plan_table && true}
                        />
                      </Col>
                    </Row>
                  </td>
                </tr>
              </Table>
            </Row>
          </td>
        </tr>
      </tbody>
    </FormGroup>
  )
}
export default FunctionalStatus;