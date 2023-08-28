import { Card, CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { TextInput } from '@shared/input';

import PreAnesthesiaFormConstant from '../constants/pre-anesthesia-form.constant';
import {DateTimeInput, TextareaInput} from '@shared/input/components';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';

const PreAnesthesiaDoctorForm = (props: { register: any, errors: any, setValue: any, data: any }) => {
  const { register, errors, setValue, data } = props;

  const { doctors } = useAppSelector(state => state.doctor);

  const handleRadioChange = (e: any) => {
    setValue(e.target.name, e.target.value);
  }

  const handleDoctorSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue('tanda_tangan_dokter', image.Signature);
      setValue('id_ttd_dokter', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('tanda_tangan_dokter', image.Signature);
      setValue('id_ttd_dokter', image.ID_Karyawan);
    }
  }

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  return (
    <>
      <Card className="border-1">
        <CardBody>
          <h5>Kajian Sistem</h5>
          <Row>
            <Col>
              {
                PreAnesthesiaFormConstant && PreAnesthesiaFormConstant.kajian_sistem[0].map((kajian_sistem: any, key) => {
                  return (
                    <Row key={key}>
                      <Col>
                        <div className="col-form-label fw-bolder">{ kajian_sistem.label }</div>
                      </Col>
                      <Col>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="radio"
                            name={kajian_sistem.name}
                            className="me-1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={(kajian_sistem?.defaultChecked) ? data?.form[kajian_sistem?.defaultChecked] === 0 : false}
                            value="0"
                            innerRef={register(kajian_sistem.name) as any}
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
                            name={kajian_sistem.name}
                            className="me-1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={(kajian_sistem?.defaultChecked) ? data?.form[kajian_sistem?.defaultChecked] === 1 : false}
                            value="1"
                            innerRef={register(kajian_sistem.name) as any}
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
                PreAnesthesiaFormConstant && PreAnesthesiaFormConstant.kajian_sistem[1].map((kajian_sistem: any, key) => {
                  return (
                    <Row key={key}>
                      <Col>
                        <div className="col-form-label fw-bolder">{ kajian_sistem.label }</div>
                      </Col>
                      <Col>
                        <FormGroup check className="app-form-check">
                          <Input
                            type="radio"
                            name={kajian_sistem.name}
                            className="me-1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={(kajian_sistem?.defaultChecked) ? data?.form[kajian_sistem?.defaultChecked] === 0 : false}
                            value="0"
                            innerRef={register(kajian_sistem.name) as any}
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
                            name={kajian_sistem.name}
                            className="me-1"
                            onChange={(e) => handleRadioChange(e)}
                            defaultChecked={(kajian_sistem?.defaultChecked) ? data?.form[kajian_sistem?.defaultChecked] === 1 : false}
                            value="1"
                            innerRef={register(kajian_sistem.name) as any}
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
            <FormGroup className="form-group" row>
              <TextInput name="sistem_teks" label="Keterangan" md="3" {...{ register, errors }} />
            </FormGroup>
          </Row>
        </CardBody>
      </Card>

      <Card className="border-1">
        <CardBody>
          <h5>Pemeriksaan Fisik</h5>
          <Row>
            <Col>
              <FormGroup className="form-group" row>
                <TextInput name="berat_badan" label="Berat Badan" md="4" {...{ register, errors }} />
              </FormGroup>
              <FormGroup className="form-group" row>
                <TextInput name="nadi" label="HR" md="4" {...{ register, errors }} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="form-group" row>
                <TextInput name="tinggi_badan" label="Tinggi Badan" md="4" {...{ register, errors }} />
              </FormGroup>
              <FormGroup className="form-group" row>
                <TextInput name="suhu" label="T" md="4" {...{ register, errors }} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="form-group" row>
                <TextInput name="tekanan_darah" label="TD" md="4" {...{ register, errors }} />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card className="border-1">
        <CardBody>
          <h5>Kajian Sistem</h5>
          {
            PreAnesthesiaFormConstant && PreAnesthesiaFormConstant.kajian_sistem_2.map((kajian_sistem, key) => {
              return (
                <FormGroup className="form-group" row key={key}>
                  <TextInput name={kajian_sistem.name} label={kajian_sistem.label} md="4" {...{ register, errors }} />
                </FormGroup>
              )
            })
          }
        </CardBody>
      </Card>

      <Card className="border-1">
        <CardBody>
          <h5>Laboratorium</h5>
          <Row>
            <Col>
              {
                PreAnesthesiaFormConstant && PreAnesthesiaFormConstant.laboratorium[0].map((laboratorium, key) => {
                  return (
                    <FormGroup className="form-group" row key={key}>
                      <TextInput name={laboratorium.name} label={laboratorium.label} md="4" {...{ register, errors }} />
                    </FormGroup>
                  )
                })
              }
            </Col>
            <Col>
              {
                PreAnesthesiaFormConstant && PreAnesthesiaFormConstant.laboratorium[1].map((laboratorium, key) => {
                  return (
                    <FormGroup className="form-group" row key={key}>
                      <TextInput name={laboratorium.name} label={laboratorium.label} md="4" {...{ register, errors }} />
                    </FormGroup>
                  )
                })
              }
            </Col>
          </Row>
          <FormGroup className="form-group" row>
            <TextInput name="laboratorium_teks" label="Keterangan" md="3" {...{ register, errors }} />
          </FormGroup>
        </CardBody>
      </Card>

      <Row>
        <Col>
          <Card className="border-1">
            <CardBody>
              <h5>Diagnosis ICD X <span>(bila ada)</span></h5>
              <TextareaInput name="diagnosis_icd_x" label="" {...{register, errors}} />
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="border-1">
            <CardBody>
              <h5>ASA Classification</h5>
              {
                PreAnesthesiaFormConstant && PreAnesthesiaFormConstant.asa.map((asa, key) => {
                  return (
                    <FormGroup check className="app-form-check" key={key}>
                      <Input
                        type="checkbox"
                        name={asa.name}
                        className="me-1"
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={(asa?.defaultChecked) ? data?.form[asa?.defaultChecked] === 1 : false}
                        value="1"
                        innerRef={register(asa.name) as any}
                      />{' '}
                      <Label check>
                        {asa.label}
                      </Label>
                    </FormGroup>
                  )
                })
              }
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="border-1">
            <CardBody>
              <h5>Penyulit anestesi</h5>
              <FormGroup check className="app-form-check">
                <Input
                  type="radio"
                  name="penyulit_lain_radio"
                  className="me-1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={ data?.form?.Penyulit_Lain_Radio === 0 }
                  value="0"
                  innerRef={register('penyulit_lain_radio') as any}
                />{' '}
                <Label check>
                  Tidak
                </Label>
              </FormGroup>
              <Row>
                <Col>
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="penyulit_lain_radio"
                      className="me-1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={ data?.form?.Penyulit_Lain_Radio === 1 }
                      value="1"
                      innerRef={register('penyulit_lain_radio') as any}
                    />{' '}
                    <Label check>
                      Ya
                    </Label>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup className="form-group" row>
                    <TextInput name="penyulit_lain_teks" nolabel {...{ register, errors }} />
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="border-1">
            <CardBody>
              <h5>Catatan tindak lanjut</h5>
              <TextareaInput name="catatan_tindak_lanjut" label="" {...{register, errors}} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Card className="border-1">
        <CardBody>
          <h5>Perencanaan Anestesi & Sedasi</h5>
          {
            PreAnesthesiaFormConstant && PreAnesthesiaFormConstant.perencanaan_anestesi.map((perencanaan_anestesi, key) => {
              return (
                <div key={key}>
                  <div className="col-form-label" key={key}>{ perencanaan_anestesi.label }</div>
                  <Row>
                    {
                      perencanaan_anestesi.item.map((item, key2) => {
                        return (
                          <Col key={key2}>
                            {
                              item.map((i, key3) => {
                                return (
                                  <Row key={key3}>
                                    <Col>
                                      <FormGroup check className="app-form-check">
                                        <Input
                                          type="checkbox"
                                          name={i.name}
                                          className="me-1"
                                          onChange={(e) => handleCheckboxChange(e)}
                                          defaultChecked={(i?.defaultChecked) ? data?.form[i?.defaultChecked] === 1 : false}
                                          value="1"
                                          innerRef={register(i.name) as any}
                                        />{' '}
                                        <Label check>
                                          {i.label}
                                        </Label>
                                      </FormGroup>
                                    </Col>
                                    {
                                      i.text_name && (
                                        <Col>
                                          <FormGroup className="form-group" row>
                                            <TextInput name={i.text_name} nolabel {...{ register, errors }} />
                                          </FormGroup>
                                        </Col>
                                      )
                                    }
                                  </Row>
                                )
                              })
                            }
                          </Col>
                        )
                      })
                    }
                  </Row>
                </div>
              )
            })
          }
          {
            PreAnesthesiaFormConstant && PreAnesthesiaFormConstant.persiapan_anestesi.map((persiapan_anestesi, key) => {
              return (
                <div key={key}>
                  <div className="col-form-label" key={key}>{ persiapan_anestesi.label }</div>
                  <Row>
                    {
                      persiapan_anestesi.item.map((item, key2) => {
                        return (
                          <Col key={key2}>
                            {
                              item.map((i, key3) => {
                                return (
                                  <Row key={key3}>
                                    <Col>
                                      <FormGroup check className="app-form-check">
                                        <Input
                                          type="checkbox"
                                          name={i.name}
                                          className="me-1"
                                          onChange={(e) => handleCheckboxChange(e)}
                                          defaultChecked={(i?.defaultChecked) ? data?.form[i?.defaultChecked] === 1 : false}
                                          value="1"
                                          innerRef={register(i.name) as any}
                                        />{' '}
                                        <Label check>
                                          {i.label}
                                        </Label>
                                      </FormGroup>
                                    </Col>
                                    {
                                      i.text_name && (
                                        <Col>
                                          <FormGroup className="form-group" row>
                                            <DateTimeInput
                                              name={i.text_name}
                                              defaultValue='date'
                                              md={1}
                                              {...{ register, errors }}
                                            />
                                            {/* <TextInput name={i.text_name} nolabel {...{ register, errors }} /> */}
                                          </FormGroup>
                                        </Col>
                                      )
                                    }
                                  </Row>
                                )
                              })
                            }
                          </Col>
                        )
                      })
                    }
                  </Row>
                </div>
              )
            })
          }
        </CardBody>
      </Card>
      <Card className="border-1">
        <CardBody>
          <h5>Catatan Persiapan Pra Anestesi</h5>
          <TextareaInput name="catatan_persiapan_text" label="" {...{register, errors}} />
        </CardBody>
      </Card>
      <Row>
        <Col>
          <div className=" d-flex justify-content-around my-0">
            <Signature
              label="Dokter PJ Anestesi"
              type="picker"
              additionalLabel={(data && data.form && data.form.Nama_TTD_Dokter) ? data.form.Nama_TTD_Dokter : ''}
              initialImage={(data && data.form && data.form.Tanda_Tangan_Dokter && data.form.Tanda_Tangan_Dokter !== '') ? data.form.Tanda_Tangan_Dokter : undefined}
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
              name="tanda_tangan_dokter"
              innerRef={register()}
              invalid={errors.tanda_tangan_dokter && true}
            />
            <Input
              type="hidden"
              name="id_ttd_dokter"
              innerRef={register()}
              invalid={errors.id_ttd_dokter && true}
            />
          </div>
        </Col>
      </Row>
    </>
  )
}

export default PreAnesthesiaDoctorForm;
