import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
import { useForm } from "react-hook-form";
import { DateTimeInput, TextInput } from "@shared/input";
import { FindPdfRequest, IPdfModel } from "@shared/pdf";
import { useEffect, useState } from "react";
import { AppRequest } from "@shared/request";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { DrugSideEffects } from "@modules/pharmacy/drug-side-effects/models/drug-side-effects.model";
import DrugSideEffectsService from "@modules/pharmacy/drug-side-effects/services";
import AlgoritmaNarajoForm from "@modules/pharmacy/drug-side-effects/components/drug-side-effects/algoritma-narajo-form";
import  TreatmentDrugForm from "@modules/pharmacy/drug-side-effects/components/drug-side-effects/treatment-drug-form";

const DrugSideEffectsForm = (props: { data: DrugSideEffects,  register: any,  errors: any, processing: boolean, setValue: any, control: any, unregister: any}) => {
  const {  data, register, errors, processing, setValue, control, unregister} = props;
  const dispatch = useAppDispatch();
  const [showJenisKelamin, setShowJenisKelamin] = useState<any>((data && data.form && data.form.Jenis_Kelamin) ? data.form.Jenis_Kelamin : '');

 
  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }


  return (
    <Row>
      <Card className="border-1">
        <CardBody>
          <Col md="4">
            <Row>
              <Col md="12">Informasi Pasien : </Col>
              <Col md="12">
                <Row>
                  <Col md="4">
                Jenis Kelamin  :
                  </Col>
                  <Col md="4">
                    <Input
                      type="radio"
                      className="me-1"
                      name="jenis_kelamin"
                      value='Laki-Laki'
                      onChange={(e) => {
                        if (e.target.checked) {
                          setShowJenisKelamin('Laki-Laki');
                        }
                      }}
                      defaultChecked={!!(data && data?.form?.Jenis_Kelamin && data?.form?.Jenis_Kelamin === 'Laki-Laki')}
                      innerRef={register({ required: false })}
                    />
                    <Label>Pria</Label>
                  </Col>
                  <Col md="4">
                    <Input
                      type="radio"
                      className="me-1"
                      name="jenis_kelamin"
                      value='Perempuan'
                      onChange={(e) => {
                        if (e.target.checked) {
                          setShowJenisKelamin('Perempuan');
                        }
                      }}
                      defaultChecked={!!(data && data?.form?.Jenis_Kelamin && data?.form?.Jenis_Kelamin === 'Perempuan')}
                      innerRef={register({ required: false })}
                    />
                    <Label>Wanita</Label>
                  </Col>
                </Row>
              </Col>
              {
                showJenisKelamin && showJenisKelamin === 'Perempuan' && (
                  <Col md="12">
                    <Row>
                      <Col md="5">
                 Status Hamil :
                      </Col>
                      <Col md="3">
                        <Input
                          type="radio"
                          className="me-1"
                          name="status_hamil"
                          value='1'
                          defaultChecked={!!(data && data?.form?.Status_Hamil && data?.form?.Status_Hamil === '1')}
                          innerRef={register({ required: false })}
                        />
                        <Label>Ya</Label>
                      </Col>
                      <Col md="4">
                        <Input
                          type="radio"
                          className="me-1"
                          name="status_hamil"
                          value='0'
                          defaultChecked={!!(data && data?.form?.Status_Hamil && data?.form?.Status_Hamil === '0')}
                          innerRef={register({ required: false })}
                        />
                        <Label>Tidak</Label>
                      </Col>
                    </Row>
                  </Col>
                )}

              <Col md="12">
                <Row>
                  <Col md="4">
                    <Input
                      id="suku_check"
                      type="checkbox"
                      name="suku_check"
                      className="me-1"
                      value="1"
                      onChange={(e) => {
                        handleCheckboxChange(e)
                      }}
                      defaultChecked={data && data?.form?.Suku_Check === "1"}
                      innerRef={register({ required: false })}
                    />{' '}
                    <Label>Suku</Label>
                  </Col>
                  <Col md="8">
                    <Input
                      className="mb-1"
                      type="text"
                      id="nama_suku"
                      name="nama_suku"
                      innerRef={register({ required: false })}
                      invalid={errors.nama_suku && true}
                    />
                  </Col>
                </Row>
              </Col>

              <Col md="12">
                <Row>
                  <Col md="7">
                    <Input
                      id="berat_badan_check"
                      type="checkbox"
                      name="berat_badan_check"
                      className="me-1"
                      value="1"
                      onChange={(e) => {
                        handleCheckboxChange(e)
                      }}
                      defaultChecked={data && data?.form?.Berat_Badan_Check === "1"}
                      innerRef={register({ required: false })}
                    />{' '}
                    <Label>Berat Badan</Label>
                  </Col>
                  <Col md="3">
                    <Input
                      className="mb-1"
                      type="number"
                      id="berat_badan"
                      name="berat_badan"
                      innerRef={register({ required: false })}
                      invalid={errors.berat_badan && true}
                    />
                  </Col>
                  <Col md="2">Kg</Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col md="4">
            <Row>
              <Col md="12">Riwayat Penyakit Lainnya :</Col>
              <Col md="12">
                <Input
                  id="riwayat_hati_check"
                  type="checkbox"
                  name="riwayat_hati_check"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    handleCheckboxChange(e)
                  }}
                  defaultChecked={data && data?.form?.Riwayat_Hati_Check === "1"}
                  innerRef={register({ required: false })}
                />{' '}
                <Label>Gangguan Hati</Label>
              </Col>

              <Col md="12">
                <Input
                  id="riwayat_ginjal_check"
                  type="checkbox"
                  name="riwayat_ginjal_check"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    handleCheckboxChange(e)
                  }}
                  defaultChecked={data && data?.form?.Riwayat_Ginjal_Check === "1"}
                  innerRef={register({ required: false })}
                />{' '}
                <Label>Gangguan Ginjal</Label>
              </Col>

              <Col md="12">
                <Input
                  id="riwayat_lain_check"
                  type="checkbox"
                  name="riwayat_lain_check"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    handleCheckboxChange(e)
                  }}
                  defaultChecked={data && data?.form?.Riwayat_Lain_Check === "1"}
                  innerRef={register({ required: false })}
                />{' '}
                <Label>Kondisi Medis Lainnya,</Label>
              </Col>

              <Col md="12">
                <Input
                  style={{ marginTop: '10px' }}
                  className="mb-1"
                  type="text"
                  id="riwayat_lain_text"
                  name="riwayat_lain_text"
                  innerRef={register({ required: false })}
                  invalid={errors.riwayat_lain_text && true}
                />
              </Col>
            </Row>
          </Col>
          <Col md="4">
            <Row>
              <Col md="12">Kesudahan Penyakit Utama :</Col>
              <Col md="12">
                <Input
                  type="radio"
                  className="me-1"
                  name="kesudahan_penyakit_utama"
                  value='1'
                  defaultChecked={!!(data && data?.form?.Kesudahan_Penyakit_Utama && data?.form?.Kesudahan_Penyakit_Utama === '1')}
                  innerRef={register({ required: false })}
                />
                <Label>Sembuh</Label>
              </Col>
              <Col md="12">
                <Input
                  type="radio"
                  className="me-1"
                  name="kesudahan_penyakit_utama"
                  value='2'
                  defaultChecked={!!(data && data?.form?.Kesudahan_Penyakit_Utama && data?.form?.Kesudahan_Penyakit_Utama === '2')}
                  innerRef={register({ required: false })}
                />
                <Label>Meninggal</Label>
              </Col>
              <Col md="12">
                <Input
                  type="radio"
                  className="me-1"
                  name="kesudahan_penyakit_utama"
                  value='3'
                  defaultChecked={!!(data && data?.form?.Kesudahan_Penyakit_Utama && data?.form?.Kesudahan_Penyakit_Utama === '3')}
                  innerRef={register({ required: false })}
                />
                <Label>Sembuh dengan gejala sisa</Label>
              </Col>
              <Col md="12">
                <Input
                  type="radio"
                  className="me-1"
                  name="kesudahan_penyakit_utama"
                  value='4'
                  defaultChecked={!!(data && data?.form?.Kesudahan_Penyakit_Utama && data?.form?.Kesudahan_Penyakit_Utama === '4')}
                  innerRef={register({ required: false })}
                />
                <Label>Belum sembuh</Label>
              </Col>
              <Col md="12">
                <Input
                  type="radio"
                  className="me-1"
                  name="kesudahan_penyakit_utama"
                  value='5'
                  defaultChecked={!!(data && data?.form?.Kesudahan_Penyakit_Utama && data?.form?.Kesudahan_Penyakit_Utama === '5')}
                  innerRef={register({ required: false })}
                />
                <Label>Tidak tahu</Label>
              </Col>
            </Row>
          </Col>
          <Col md="12">
            <Row>
              <Col md="8">
                <FormGroup className="form-group" row>
                  <Label for="diagnosa_utama" md="4" sm="12">
                Diagnosis Medis
                  </Label>
                  <Col>
                    <Input
                      type="textarea"
                      id="diagnosa_utama"
                      name="diagnosa_utama"
                      innerRef={register()}
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md="4">
              </Col>
            </Row>
          </Col>

        </CardBody>
      </Card>

      <Card className="border-1">
        <CardBody>
          <Col md="12">
            <Row>
              <Col md="8">
                <FormGroup className="form-group" row>
                  <Label for="bentuk_manifestasi_eso" md="4" sm="12">
                Bentuk manfiestasi E.S.O yang terjadi :
                  </Label>
                  <Col>
                    <Input
                      type="textarea"
                      id="bentuk_manifestasi_eso"
                      name="bentuk_manifestasi_eso"
                      innerRef={register()}
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md="4">
              </Col>
            </Row>
          </Col>
          <Col md="12">
            <Row>
              <Col md="8">
                <FormGroup className="form-group" row>
                  <Label for="tanggal_mula_terjadi" md="4" sm="12">
                Tanggal mula terjadi :
                  </Label>
                  <Col>
                    <DateTimeInput
                      name="tanggal_mula_terjadi"
                      defaultValue="date"
                      {...{ register, errors }}
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md="4">
              </Col>
            </Row>
          </Col>

          <Col md="12">
            <Row>
              <Col md="12"> Kesudahan E.S.O : </Col>
                            <Col md="3"></Col>
              <Col md="9">

                <Col md="12">
                  <Input
                    type="radio"
                    className="me-1"
                    name="kesudahan_eso"
                    value='1'
                    defaultChecked={!!(data && data?.form?.Kesudahan_ESO && data?.form?.Kesudahan_ESO === '1')}
                    innerRef={register({ required: false })}
                  />
                  <Label>Sembuh</Label>
                </Col>
                <Col md="12">
                  <Input
                    type="radio"
                    className="me-1"
                    name="kesudahan_eso"
                    value='2'
                    defaultChecked={!!(data && data?.form?.Kesudahan_ESO && data?.form?.Kesudahan_ESO === '2')}
                    innerRef={register({ required: false })}
                  />
                  <Label>Meninggal</Label>
                </Col>
                <Col md="12">
                  <Input
                    type="radio"
                    className="me-1"
                    name="kesudahan_eso"
                    value='3'
                    defaultChecked={!!(data && data?.form?.Kesudahan_ESO && data?.form?.Kesudahan_ESO === '3')}
                    innerRef={register({ required: false })}
                  />
                  <Label>Sembuh dengan gejala sisa</Label>
                </Col>
                <Col md="12">
                  <Input
                    type="radio"
                    className="me-1"
                    name="kesudahan_eso"
                    value='4'
                    defaultChecked={!!(data && data?.form?.Kesudahan_ESO && data?.form?.Kesudahan_ESO === '4')}
                    innerRef={register({ required: false })}
                  />
                  <Label>Belum sembuh</Label>
                </Col>
                <Col md="12">
                  <Input
                    type="radio"
                    className="me-1"
                    name="kesudahan_eso"
                    value='5'
                    defaultChecked={!!(data && data?.form?.Kesudahan_ESO && data?.form?.Kesudahan_ESO === '5')}
                    innerRef={register({ required: false })}
                  />
                  <Label>Tidak tahu</Label>
                </Col>
              </Col>
              
              <Col md="8">
                <FormGroup className="form-group" row>
                  <Label for="tanggal_kesudahan" md="4" sm="12">
                Tanggal sesudah
                  </Label>
                  <Col>
                    <DateTimeInput
                      name="tanggal_kesudahan"
                      defaultValue="date"
                      {...{ register, errors }}
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md="4"></Col>


              <Col md="12">
                <Row>
                  <Col md="8">
                    <FormGroup className="form-group" row>
                      <Label for="riwayat_eso_sebelum" md="4" sm="12">
                Riwayat E.S.O. yang pernah dialami sebelumnya :
                      </Label>
                      <Col>
                        <Input
                          type="textarea"
                          id="riwayat_eso_sebelum"
                          name="riwayat_eso_sebelum"
                          innerRef={register()}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col md="4">
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </CardBody>
      </Card>
      
      <TreatmentDrugForm
        data={data}
        {...{ register, errors, processing, setValue, control, unregister}}
      />
      
      <AlgoritmaNarajoForm
        data={data}
        {...{ register, errors, processing, setValue}}
      />
    </Row>

  );
};

export default DrugSideEffectsForm;
