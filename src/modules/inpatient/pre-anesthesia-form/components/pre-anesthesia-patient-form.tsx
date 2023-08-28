import { Card, CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { TextInput } from '@shared/input';

import PreAnesthesiaFormConstant from '../constants/pre-anesthesia-form.constant';
import {PreAnesthesiaFormModel} from '@modules/inpatient/pre-anesthesia-form/models/pre-anesthesia-form.model';
import { Signature } from '@src/shared/signature/components';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';

const PreAnesthesiaPatientForm = (props: { register: any, errors: any, setValue: any, data?: any }) => {
  const { register, errors, setValue, data } = props;
  const { treatment } = useAppSelector(state => state.patient);

  const handleRadioChange = (e: any) => {
    setValue(e.target.name, e.target.value);
  }

  const handlePatientSigned = (image: string) => {
    setValue('tanda_tangan_pasien', image);
  }

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  return (
    <>
      <Card className="border-1">
        <CardBody>
          <h5>Social</h5>
          <Row>
            <Col>
              <FormGroup className="form-group" row>
                <Row>
                  <Col>
                    <Label>Status Perkawinan</Label>
                  </Col>
                  <Col md='8'>
                    <Input
                      name='status_perkawinan'
                      type='text'
                      value={treatment?.Pasien?.Status_Nikah ?? ''}
                      innerRef={register()}
                      readOnly
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="form-group" row>
                <Row>
                  <Col>
                    <Label>Pekerjaan</Label>
                  </Col>
                  <Col md='9'>
                    <Input
                      name='pekerjaan'
                      type='text'
                      value={treatment?.Pasien?.Pekerjaan ?? ''}
                      innerRef={register()}
                      readOnly
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card className="border-1">
        <CardBody>
          <h5>Kebiasaan</h5>
          <Row>
            <Col>
              {
                PreAnesthesiaFormConstant && PreAnesthesiaFormConstant.kebiasaan[0].map((kebiasaan: any, key) => {
                  return (
                    <Row key={key}>
                      <Col>
                        <div className="col-form-label fw-bolder">{ kebiasaan.label }</div>
                      </Col>
                      <Col>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="radio"
                            name={kebiasaan.name}
                            className="me-1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={(kebiasaan?.defaultChecked) ? data?.form[kebiasaan?.defaultChecked] === 0 : false}
                            value="0"
                            innerRef={register(kebiasaan.name) as any}
                          />{' '}
                          <Label check>
                            Tidak
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup check className="app-form-check" key={key}>
                          <Input
                            type="radio"
                            name={kebiasaan.name}
                            className="me-1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={(kebiasaan?.defaultChecked) ? data?.form[kebiasaan?.defaultChecked] === 1 : false}
                            value="1"
                            innerRef={register(kebiasaan.name) as any}
                          />{' '}
                          <Label check>
                            Ya
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col>
                        <TextInput name={kebiasaan.text_name} nolabel {...{ register, errors }} />
                      </Col>
                    </Row>
                  )
                })
              }
            </Col>
            <Col>
              {
                PreAnesthesiaFormConstant && PreAnesthesiaFormConstant.kebiasaan[1].map((kebiasaan: any, key) => {
                  return (
                    <Row key={key}>
                      <Col>
                        <div className="col-form-label fw-bolder">{ kebiasaan.label }</div>
                      </Col>
                      <Col>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="radio"
                            name={kebiasaan.name}
                            className="me-1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={(kebiasaan?.defaultChecked) ? data?.form[kebiasaan?.defaultChecked] === 0 : false}
                            value="0"
                            innerRef={register(kebiasaan.name) as any}
                          />{' '}
                          <Label check>
                            Tidak
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup check className="app-form-check" key={key}>
                          <Input
                            type="radio"
                            name={kebiasaan.name}
                            className="me-1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={(kebiasaan?.defaultChecked) ? data?.form[kebiasaan?.defaultChecked] === 1 : false}
                            value="1"
                            innerRef={register(kebiasaan.name) as any}
                          />{' '}
                          <Label check>
                            Ya
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col>
                        <TextInput name={kebiasaan.text_name} nolabel {...{ register, errors }} />
                      </Col>
                    </Row>
                  )
                })
              }
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card className="border-1">
        <CardBody>
          <h5>Pengebotan (Sebutkan Dosis Per Hari Dan Lama Konsumsi)</h5>
          <Row>
            <Col>
              <FormGroup className="form-group" row>
                <TextInput name="obat_resep" label="Obat Resep" md="3" {...{ register, errors }} />
              </FormGroup>
              {
                PreAnesthesiaFormConstant && PreAnesthesiaFormConstant.obat.map((obat: any, key) => {
                  return (
                    <Row key={key}>
                      <Col>
                        <div className="col-form-label fw-bolder">{ obat.label }</div>
                      </Col>
                      <Col>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="radio"
                            name={obat.name}
                            className="me-1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={(obat?.defaultChecked) ? data?.form[obat?.defaultChecked] === 0 : false}
                            value="0"
                            innerRef={register(obat.name) as any}
                          />{' '}
                          <Label check>
                            Tidak
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup check className="app-form-check" key={key}>
                          <Input
                            type="radio"
                            name={obat.name}
                            className="me-1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={(obat?.defaultChecked) ? data?.form[obat?.defaultChecked] === 1 : false}
                            value="1"
                            innerRef={register(obat.name) as any}
                          />{' '}
                          <Label check>
                            Ya
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col>
                        <TextInput name={obat.text_name} nolabel {...{ register, errors }} />
                      </Col>
                    </Row>
                  )
                })
              }
            </Col>
            <Col>
              <FormGroup className="form-group" row>
                <TextInput name="obat_bebas" label="Obat Bebas" md="3" {...{ register, errors }} />
              </FormGroup>
              <FormGroup className="form-group" row>
                <TextInput name="alergi_obat" label="Alergi Obat" md="3" {...{ register, errors }} />
              </FormGroup>
              <FormGroup className="form-group" row>
                <Row className='mt-1'>
                  <Col>
                    <Label>Alergi Makanan</Label>
                  </Col>
                  <Col>
                    <Input
                      id='alergi_makanan'
                      name='alergi_makanan'
                      type='radio'
                      className='me-1'
                      onChange={(e) => handleRadioChange(e)}
                      value='1'
                      defaultChecked={data && data.form && data.form.Alergi_Makanan === '1'}
                      innerRef={register('alergi_makanan') as any}
                    />
                    <Label>Ya</Label>
                  </Col>
                  <Col>
                    <Input
                      id='alergi_makanan'
                      name='alergi_makanan'
                      type='radio'
                      className='me-1'
                      onChange={(e) => handleRadioChange(e)}
                      value='2'
                      defaultChecked={data && data.form && data.form.Alergi_Makanan === '2'}
                      innerRef={register('alergi_makanan') as any}
                    />
                    <Label>Tidak</Label>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card className="border-1">
        <CardBody>
          <h5>Riwayat Keluarga</h5>
          <Row>
            <Col>
              {
                PreAnesthesiaFormConstant && PreAnesthesiaFormConstant.riwayat_keluarga[0].map((riwayat_keluarga: any, key) => {
                  return (
                    <Row key={key}>
                      <Col md="6">
                        <div className="col-form-label fw-bolder">{ riwayat_keluarga.label }</div>
                      </Col>
                      <Col>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="radio"
                            name={riwayat_keluarga.name}
                            className="me-1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={(riwayat_keluarga?.defaultChecked) ? data?.form[riwayat_keluarga?.defaultChecked] === 0 : false}
                            value="0"
                            innerRef={register(riwayat_keluarga.name) as any}
                          />{' '}
                          <Label check>
                            Tidak
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup check className="app-form-check" key={key}>
                          <Input
                            type="radio"
                            name={riwayat_keluarga.name}
                            className="me-1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={(riwayat_keluarga?.defaultChecked) ? data?.form[riwayat_keluarga?.defaultChecked] === 1 : false}
                            value="1"
                            innerRef={register(riwayat_keluarga.name) as any}
                          />{' '}
                          <Label check>
                            Ya
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  )
                })
              }
            </Col>
            <Col>
              {
                PreAnesthesiaFormConstant && PreAnesthesiaFormConstant.riwayat_keluarga[1].map((riwayat_keluarga: any, key) => {
                  return (
                    <Row key={key}>
                      <Col md="6">
                        <div className="col-form-label fw-bolder">{ riwayat_keluarga.label }</div>
                      </Col>
                      <Col>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="radio"
                            name={riwayat_keluarga.name}
                            className="me-1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={(riwayat_keluarga?.defaultChecked) ? data?.form[riwayat_keluarga?.defaultChecked] === 0 : false}
                            value="0"
                            innerRef={register(riwayat_keluarga.name) as any}
                          />{' '}
                          <Label check>
                            Tidak
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup check className="app-form-check" key={key}>
                          <Input
                            type="radio"
                            name={riwayat_keluarga.name}
                            className="me-1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={(riwayat_keluarga?.defaultChecked) ? data?.form[riwayat_keluarga?.defaultChecked] === 1 : false}
                            value="1"
                            innerRef={register(riwayat_keluarga.name) as any}
                          />{' '}
                          <Label check>
                            Ya
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  )
                })
              }
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup className="form-group" row>
                <TextInput name="keluarga_teks" label='Jelaskan penyakit keluarga yang dijawab "ya"' md="4" {...{ register, errors }} />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card className="border-1">
        <CardBody>
          <h5>Riwayat Penyakit Pasien</h5>
          <Row>
            <Col>
              {
                PreAnesthesiaFormConstant && PreAnesthesiaFormConstant.riwayat_penyakit_pasien[0].map((riwayat_penyakit_pasien: any, key) => {
                  return (
                    <Row key={key}>
                      <Col md="6">
                        <div className="col-form-label fw-bolder">{ riwayat_penyakit_pasien.label }</div>
                      </Col>
                      <Col>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="radio"
                            name={riwayat_penyakit_pasien.name}
                            className="me-1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={(riwayat_penyakit_pasien?.defaultChecked) ? data?.form[riwayat_penyakit_pasien?.defaultChecked] === 0 : false}
                            value="0"
                            innerRef={register(riwayat_penyakit_pasien.name) as any}
                          />{' '}
                          <Label check>
                            Tidak
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup check className="app-form-check" key={key}>
                          <Input
                            type="radio"
                            name={riwayat_penyakit_pasien.name}
                            className="me-1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={(riwayat_penyakit_pasien?.defaultChecked) ? data?.form[riwayat_penyakit_pasien?.defaultChecked] === 1 : false}
                            value="1"
                            innerRef={register(riwayat_penyakit_pasien.name) as any}
                          />{' '}
                          <Label check>
                            Ya
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  )
                })
              }
            </Col>
            <Col>
              {
                PreAnesthesiaFormConstant && PreAnesthesiaFormConstant.riwayat_penyakit_pasien[1].map((riwayat_penyakit_pasien: any, key) => {
                  return (
                    <Row key={key}>
                      <Col md="6">
                        <div className="col-form-label fw-bolder">{ riwayat_penyakit_pasien.label }</div>
                      </Col>
                      <Col>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="radio"
                            name={riwayat_penyakit_pasien.name}
                            className="me-1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={(riwayat_penyakit_pasien?.defaultChecked) ? data?.form[riwayat_penyakit_pasien?.defaultChecked] === 0 : false}
                            value="0"
                            innerRef={register(riwayat_penyakit_pasien.name) as any}
                          />{' '}
                          <Label check>
                            Tidak
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup check className="app-form-check" key={key}>
                          <Input
                            type="radio"
                            name={riwayat_penyakit_pasien.name}
                            className="me-1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={(riwayat_penyakit_pasien?.defaultChecked) ? data?.form[riwayat_penyakit_pasien?.defaultChecked] === 1 : false}
                            value="1"
                            innerRef={register(riwayat_penyakit_pasien.name) as any}
                          />{' '}
                          <Label check>
                            Ya
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  )
                })
              }
              <Row>
                <div className="col-form-label fw-bolder text-decoration-underline">Khusus Pasien Anak</div>
                {
                  PreAnesthesiaFormConstant && PreAnesthesiaFormConstant.riwayat_penyakit_pasien[2].map((riwayat_penyakit_pasien: any, key) => {
                    return (
                      <Row key={key}>
                        <Col md="6">
                          <div className="col-form-label fw-bolder">{ riwayat_penyakit_pasien.label }</div>
                        </Col>
                        <Col>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="radio"
                              name={riwayat_penyakit_pasien.name}
                              className="me-1"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={(riwayat_penyakit_pasien?.defaultChecked) ? data?.form[riwayat_penyakit_pasien?.defaultChecked] === 0 : false}
                              value="0"
                              innerRef={register(riwayat_penyakit_pasien.name) as any}
                            />{' '}
                            <Label check>
                              Tidak
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup check className="app-form-check" key={key}>
                            <Input
                              type="radio"
                              name={riwayat_penyakit_pasien.name}
                              className="me-1"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={(riwayat_penyakit_pasien?.defaultChecked) ? data?.form[riwayat_penyakit_pasien?.defaultChecked] === 1 : false}
                              value="1"
                              innerRef={register(riwayat_penyakit_pasien.name) as any}
                            />{' '}
                            <Label check>
                              Ya
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    )
                  })
                }
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup className="form-group" row>
                <TextInput name="pasien_teks" label='Jelaskan penyakit keluarga yang dijawab "ya"' md="4" {...{ register, errors }} />
              </FormGroup>
            </Col>
          </Row>
          {
            PreAnesthesiaFormConstant && PreAnesthesiaFormConstant.riwayat_penyakit_pasien[3].map((riwayat_penyakit_pasien: any, key) => {
              return (
                <Row key={key}>
                  <Col md="6">
                    <div className="col-form-label fw-bolder">{ riwayat_penyakit_pasien.label }</div>
                  </Col>
                  <Col>
                    <FormGroup check className="app-form-check">
                      <Input
                        type="radio"
                        name={riwayat_penyakit_pasien.name}
                        className="me-1"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={(riwayat_penyakit_pasien?.defaultChecked) ? data?.form[riwayat_penyakit_pasien?.defaultChecked] === 0 : false}
                        value="0"
                        innerRef={register(riwayat_penyakit_pasien.name) as any}
                      />{' '}
                      <Label check>
                        Tidak
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup check className="app-form-check" key={key}>
                      <Input
                        type="radio"
                        name={riwayat_penyakit_pasien.name}
                        className="me-1"
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={(riwayat_penyakit_pasien?.defaultChecked) ? data?.form[riwayat_penyakit_pasien?.defaultChecked] === 1 : false}
                        value="1"
                        innerRef={register(riwayat_penyakit_pasien.name) as any}
                      />{' '}
                      <Label check>
                        Ya
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col>
                    <TextInput name={riwayat_penyakit_pasien.text_name} nolabel placeholder={riwayat_penyakit_pasien.placeholder} {...{ register, errors }} />
                  </Col>
                </Row>
              )
            })
          }
          <Row>
            <Col md="6" />
            <Col>
              <FormGroup check className="app-form-check">
                <Input
                  type="radio"
                  name="pasien_diagnosis_hiv_hasil"
                  className="me-1"
                  onChange={(e) => handleRadioChange(e)}
                  value="0"
                  defaultChecked={ data?.form?.Pasien_Diagnosis_HIV_Hasil === '0' }
                  innerRef={register("pasien_diagnosis_hiv_hasil") as any}
                />{' '}
                <Label check>
                  Positif
                </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check className="app-form-check">
                <Input
                  type="radio"
                  name="pasien_diagnosis_hiv_hasil"
                  className="me-1"
                  onChange={(e) => handleRadioChange(e)}
                  value="1"
                  defaultChecked={ data?.form?.Pasien_Diagnosis_HIV_Hasil === '1' }
                  innerRef={register("pasien_diagnosis_hiv_hasil") as any}
                />{' '}
                <Label check>
                  Negatif
                </Label>
              </FormGroup>
            </Col>
            <Col />
          </Row>
          <Row>
            <Col md="4">
              <div className="col-form-label fw-bolder">Apakah Pasien Memakai</div>
            </Col>
            <Col>
              {
                PreAnesthesiaFormConstant && PreAnesthesiaFormConstant.pasien_memakai.map((pasien_memakai, key) => {
                  return (
                    <Row key={key}>
                      <Col>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="checkbox"
                            name={pasien_memakai.name}
                            className="me-1"
                            onChange={(e) => handleCheckboxChange(e)}
                            defaultChecked={(pasien_memakai?.defaultChecked) ? data?.form[pasien_memakai?.defaultChecked] === 1 : false}
                            value="1"
                            innerRef={register(pasien_memakai.name) as any}
                          />{' '}
                          <Label check>
                            {pasien_memakai.label}
                          </Label>
                        </FormGroup>
                      </Col>
                      {
                        pasien_memakai.text_name && (
                          <TextInput name={pasien_memakai.text_name} nolabel {...{ register, errors }} />
                        )
                      }
                    </Row>
                  )
                })
              }
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup className="form-group" row>
                <TextInput name="riwayat_operasi" label="Riwayat Operasi (Tahun dan Jenis Operasi)" md="4" {...{ register, errors }} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="col-form-label fw-lighter">Jenis anestesi yang digunakan dan sebutkan keluhan / reaksi yang dialami</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup className="form-group" row>
                <TextInput name="anestesi_lokal" label="Anestesi Lokal - Keluhan / Reaksi" md="4" {...{ register, errors }} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup className="form-group" row>
                <TextInput name="anestesi_regional" label="Anestesi Regional - Keluhan / Reaksi" md="4" {...{ register, errors }} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup className="form-group" row>
                <TextInput name="anestesi_umum" label="Anestesi Umum (Sedasi) - Keluhan / Reaksi" md="4" {...{ register, errors }} />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="mt-2 d-flex justify-content-around my-0">
                <Signature
                  label="Pasien"
                  type="drawer"
                  formName='informasi/general-consent'
                  component='general_consent_sign_01'
                  initialImage={(data && data.form && data.form.Tanda_Tangan_Pasien && data.form.Tanda_Tangan_Pasien !== '') ? data.form.Tanda_Tangan_Pasien : undefined}
                  onSigned={(image: string) => handlePatientSigned(image)} />
                <Input
                  type="hidden"
                  name="tanda_tangan_pasien"
                  innerRef={register()}
                  invalid={errors.tanda_tangan_pasien && true} />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  )
}

export default PreAnesthesiaPatientForm;
