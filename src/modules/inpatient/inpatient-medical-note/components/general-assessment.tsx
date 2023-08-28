import { Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { InpatientMedicalNote } from "../models/inpatient-medical-note.model";
import { TextInput } from "@src/shared/input";
import { useState } from "react";

const GeneralAssessment = (props: { register: any, setValue: any, errors: any, data: InpatientMedicalNote }) => {
  const { register, errors, setValue, data } = props;

  const [isKepala, setIsKepala] = useState<any>((data && data.form && data.form.Pengkajian_Kepala) ? data.form.Pengkajian_Kepala : undefined);
  const [isMata, setIsMata] = useState<any>((data && data.form && data.form.Pengkajian_Mata) ? data.form.Pengkajian_Mata : undefined);
  const [isTht, setIsTht] = useState<any>((data && data.form && data.form.Pengkajian_Tht) ? data.form.Pengkajian_Tht : undefined);
  const [isOedem, setIsOedem] = useState<any>((data && data.form && data.form.Pengkajian_Oedem) ? data.form.Pengkajian_Oedem : undefined);
  const [isMulut, setIsMulut] = useState<any>((data && data.form && data.form.Pengkajian_Mulut) ? data.form.Pengkajian_Mulut : undefined);
  const [isLeher, setIsLeher] = useState<any>((data && data.form && data.form.Pengkajian_Leher) ? data.form.Pengkajian_Leher : undefined);
  const [isJantung, setIsJantung] = useState<any>((data && data.form && data.form.Pengkajian_Jantung) ? data.form.Pengkajian_Jantung : undefined);
  const [isParu, setIsParu] = useState<any>((data && data.form && data.form.Pengkajian_Paru) ? data.form.Pengkajian_Paru : undefined);
  const [isDada, setIsDada] = useState<any>((data && data.form && data.form.Pengkajian_Dada) ? data.form.Pengkajian_Dada : undefined);
  const [isPerut, setIsPerut] = useState<any>((data && data.form && data.form.Pengkajian_Perut) ? data.form.Pengkajian_Perut : undefined);
  const [isUrogenital, setIsUrogenital] = useState<any>((data && data.form && data.form.Pengkajian_Urogenital) ? data.form.Pengkajian_Urogenital : undefined);
  const [isAnggotaGerak, setIsAnggotaGerak] = useState<any>((data && data.form && data.form.Pengkajian_Anggota_Gerak) ? data.form.Pengkajian_Anggota_Gerak : undefined);
  const [isStatusNeurologis, setIsStatusNeurologis] = useState<any>((data && data.form && data.form.Pengkajian_Status_Neurologis) ? data.form.Pengkajian_Status_Neurologis : undefined);
  const [isMuskulosKeletal, setIsMuskulosKeletal] = useState<any>((data && data.form && data.form.Pengkajian_Muskulos_Keletal) ? data.form.Pengkajian_Muskulos_Keletal : undefined);

  const handleRadioKepala = (e: any) => {
    setIsKepala(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioMata = (e: any) => {
    setIsMata(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioTht = (e: any) => {
    setIsTht(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioOedem = (e: any) => {
    setIsOedem(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioMulut = (e: any) => {
    setIsMulut(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioLeher = (e: any) => {
    setIsLeher(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioJantung = (e: any) => {
    setIsJantung(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioParu = (e: any) => {
    setIsParu(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioDada = (e: any) => {
    setIsDada(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioPerut = (e: any) => {
    setIsPerut(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioUrogenital = (e: any) => {
    setIsUrogenital(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioAnggotaGerak = (e: any) => {
    setIsAnggotaGerak(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioStatusNeurologis = (e: any) => {
    setIsStatusNeurologis(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioMuskulosKeletal = (e: any) => {
    setIsMuskulosKeletal(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleDefault = (isFlag: any) => {
    if (isFlag === '0') {
      setIsKepala('0');
      setIsMata('1');
      setIsTht('0');
      setIsOedem('0');
      setIsMulut('0');
      setIsLeher('0');
      setIsJantung('0');
      setIsParu('0');
      setIsDada('0');
      setIsPerut('0');
      setIsUrogenital('0');
      setIsAnggotaGerak('0');
      setIsStatusNeurologis('0');
      setIsMuskulosKeletal('0');
      setValue('pengkajian_kepala', '0');
      setValue('pengkajian_mata', '1');
      setValue('pengkajian_tht', '0');
      setValue('pengkajian_oedem', '0');
      setValue('pengkajian_mulut', '0');
      setValue('pengkajian_leher', '0');
      setValue('pengkajian_jantung', '0');
      setValue('pengkajian_paru', '0');
      setValue('pengkajian_dada', '0');
      setValue('pengkajian_perut', '0');
      setValue('pengkajian_urogenital', '0');
      setValue('pengkajian_anggota_gerak', '0');
      setValue('pengkajian_status_neurologis', '0');
      setValue('pengkajian_muskulos_keletal', '0');

    }
  }


  return (
    <Card className="border-1">
      <CardBody>
        <div className="col-form-label fw-bolder">Pengkajian Umum</div>
        <Row className="mt-2">
          <Col>
            <Input
              type="checkbox"
              className="me-1"
              onChange={(e) => {
                if (e.target.checked) {
                  handleDefault('0');
                } else {
                  handleDefault('1');
                }
              }}
            />
            <label>Pilih Default</label>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr style={{ borderTop: '2px dashed blue' }}/>
          </Col>
        </Row>
        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Kepala</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_kepala"
                className="me-1"
                onChange={(e) => handleRadioKepala(e)}
                defaultChecked={data?.form?.Pengkajian_Kepala === '0'}
                value="0"
                innerRef={register('pengkajian_kepala') as any}
                checked={isKepala === '0'}
              />{' '}
              <Label check>
                Normal
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <Row>
              <Col md="auto">
                <FormGroup check className="app-form-check">
                  <Input
                    type="radio"
                    name="pengkajian_kepala"
                    className="me-1"
                    onChange={(e) => handleRadioKepala(e)}
                    defaultChecked={data?.form?.Pengkajian_Kepala === '1'}
                    value="1"
                    innerRef={register('pengkajian_kepala') as any}
                    checked={isKepala === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_kepala_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Mata</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_mata"
                className="me-1"
                onChange={(e) => handleRadioMata(e)}
                defaultChecked={data?.form?.Pengkajian_Mata === '0'}
                value="0"
                innerRef={register('pengkajian_mata') as any}
                checked={isMata === '0'}
              />{' '}
              <Label check>
                Normal
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <Row>
              <Col md="auto">
                <FormGroup check className="app-form-check">
                  <Input
                    type="radio"
                    name="pengkajian_mata"
                    className="me-1"
                    onChange={(e) => handleRadioMata(e)}
                    defaultChecked={data?.form?.Pengkajian_Mata === '1'}
                    value="1"
                    innerRef={register('pengkajian_mata') as any}
                    checked={isMata === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_mata_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">THT</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_tht"
                className="me-1"
                onChange={(e) => handleRadioTht(e)}
                defaultChecked={data?.form?.Pengkajian_Tht === '0'}
                value="0"
                innerRef={register('pengkajian_tht') as any}
                checked={isTht === '0'}
              />{' '}
              <Label check>
                Normal
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <Row>
              <Col md="auto">
                <FormGroup check className="app-form-check">
                  <Input
                    type="radio"
                    name="pengkajian_tht"
                    className="me-1"
                    onChange={(e) => handleRadioTht(e)}
                    defaultChecked={data?.form?.Pengkajian_Tht === '1'}
                    value="1"
                    innerRef={register('pengkajian_tht') as any}
                    checked={isTht === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_tht_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Oedem</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_oedem"
                className="me-1"
                onChange={(e) => handleRadioOedem(e)}
                defaultChecked={data?.form?.Pengkajian_Oedem === '0'}
                value="0"
                innerRef={register('pengkajian_oedem') as any}
                checked={isOedem === '0'}
              />{' '}
              <Label check>
                Normal
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <Row>
              <Col md="auto">
                <FormGroup check className="app-form-check">
                  <Input
                    type="radio"
                    name="pengkajian_oedem"
                    className="me-1"
                    onChange={(e) => handleRadioOedem(e)}
                    defaultChecked={data?.form?.Pengkajian_Oedem === '1'}
                    value="1"
                    innerRef={register('pengkajian_oedem') as any}
                    checked={isOedem === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_oedem_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Mulut</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_mulut"
                className="me-1"
                onChange={(e) => handleRadioMulut(e)}
                defaultChecked={data?.form?.Pengkajian_Mulut === '0'}
                value="0"
                innerRef={register('pengkajian_mulut') as any}
                checked={isMulut === '0'}
              />{' '}
              <Label check>
                Normal
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <Row>
              <Col md="auto">
                <FormGroup check className="app-form-check">
                  <Input
                    type="radio"
                    name="pengkajian_mulut"
                    className="me-1"
                    onChange={(e) => handleRadioMulut(e)}
                    defaultChecked={data?.form?.Pengkajian_Mulut === '1'}
                    value="1"
                    innerRef={register('pengkajian_mulut') as any}
                    checked={isMulut === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_mulut_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Leher</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_leher"
                className="me-1"
                onChange={(e) => handleRadioLeher(e)}
                defaultChecked={data?.form?.Pengkajian_Leher === '0'}
                value="0"
                innerRef={register('pengkajian_leher') as any}
                checked={isLeher === '0'}
              />{' '}
              <Label check>
                Normal
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <Row>
              <Col md="auto">
                <FormGroup check className="app-form-check">
                  <Input
                    type="radio"
                    name="pengkajian_leher"
                    className="me-1"
                    onChange={(e) => handleRadioLeher(e)}
                    defaultChecked={data?.form?.Pengkajian_Leher === '1'}
                    value="1"
                    innerRef={register('pengkajian_leher') as any}
                    checked={isLeher === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_leher_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Jantung</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_jantung"
                className="me-1"
                onChange={(e) => handleRadioJantung(e)}
                defaultChecked={data?.form?.Pengkajian_Jantung === '0'}
                value="0"
                innerRef={register('pengkajian_jantung') as any}
                checked={isJantung === '0'}
              />{' '}
              <Label check>
                Normal
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <Row>
              <Col md="auto">
                <FormGroup check className="app-form-check">
                  <Input
                    type="radio"
                    name="pengkajian_jantung"
                    className="me-1"
                    onChange={(e) => handleRadioJantung(e)}
                    defaultChecked={data?.form?.Pengkajian_Jantung === '1'}
                    value="1"
                    innerRef={register('pengkajian_jantung') as any}
                    checked={isJantung === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_jantung_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Paru</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_paru"
                className="me-1"
                onChange={(e) => handleRadioParu(e)}
                defaultChecked={data?.form?.Pengkajian_Paru === '0'}
                value="0"
                innerRef={register('pengkajian_paru') as any}
                checked={isParu === '0'}
              />{' '}
              <Label check>
                Normal
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <Row>
              <Col md="auto">
                <FormGroup check className="app-form-check">
                  <Input
                    type="radio"
                    name="pengkajian_paru"
                    className="me-1"
                    onChange={(e) => handleRadioParu(e)}
                    defaultChecked={data?.form?.Pengkajian_Paru === '1'}
                    value="1"
                    innerRef={register('pengkajian_paru') as any}
                    checked={isParu === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_paru_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Dada & Payudara</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_dada"
                className="me-1"
                onChange={(e) => handleRadioDada(e)}
                defaultChecked={data?.form?.Pengkajian_Dada === '0'}
                value="0"
                innerRef={register('pengkajian_dada') as any}
                checked={isDada === '0'}
              />{' '}
              <Label check>
                Normal
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <Row>
              <Col md="auto">
                <FormGroup check className="app-form-check">
                  <Input
                    type="radio"
                    name="pengkajian_dada"
                    className="me-1"
                    onChange={(e) => handleRadioDada(e)}
                    defaultChecked={data?.form?.Pengkajian_Dada === '1'}
                    value="1"
                    innerRef={register('pengkajian_dada') as any}
                    checked={isDada === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_dada_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Perut</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_perut"
                className="me-1"
                onChange={(e) => handleRadioPerut(e)}
                defaultChecked={data?.form?.Pengkajian_Perut === '0'}
                value="0"
                innerRef={register('pengkajian_perut') as any}
                checked={isPerut === '0'}
              />{' '}
              <Label check>
                Normal
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <Row>
              <Col md="auto">
                <FormGroup check className="app-form-check">
                  <Input
                    type="radio"
                    name="pengkajian_perut"
                    className="me-1"
                    onChange={(e) => handleRadioPerut(e)}
                    defaultChecked={data?.form?.Pengkajian_Perut === '1'}
                    value="1"
                    innerRef={register('pengkajian_perut') as any}
                    checked={isPerut === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_perut_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Urogenital</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_urogenital"
                className="me-1"
                onChange={(e) => handleRadioUrogenital(e)}
                defaultChecked={data?.form?.Pengkajian_Urogenital === '0'}
                value="0"
                innerRef={register('pengkajian_urogenital') as any}
                checked={isUrogenital === '0'}
              />{' '}
              <Label check>
                Normal
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <Row>
              <Col md="auto">
                <FormGroup check className="app-form-check">
                  <Input
                    type="radio"
                    name="pengkajian_urogenital"
                    className="me-1"
                    onChange={(e) => handleRadioUrogenital(e)}
                    defaultChecked={data?.form?.Pengkajian_Urogenital === '1'}
                    value="1"
                    innerRef={register('pengkajian_urogenital') as any}
                    checked={isUrogenital === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_urogenital_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Anggota Gerak</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_anggota_gerak"
                className="me-1"
                onChange={(e) => handleRadioAnggotaGerak(e)}
                defaultChecked={data?.form?.Pengkajian_Anggota_Gerak === '0'}
                value="0"
                innerRef={register('pengkajian_anggota_gerak') as any}
                checked={isAnggotaGerak === '0'}
              />{' '}
              <Label check>
                Normal
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <Row>
              <Col md="auto">
                <FormGroup check className="app-form-check">
                  <Input
                    type="radio"
                    name="pengkajian_anggota_gerak"
                    className="me-1"
                    onChange={(e) => handleRadioAnggotaGerak(e)}
                    defaultChecked={data?.form?.Pengkajian_Anggota_Gerak === '1'}
                    value="1"
                    innerRef={register('pengkajian_anggota_gerak') as any}
                    checked={isAnggotaGerak === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_anggota_gerak_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Status Neurologis</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_status_neurologis"
                className="me-1"
                onChange={(e) => handleRadioStatusNeurologis(e)}
                defaultChecked={data?.form?.Pengkajian_Status_Neurologis === '0'}
                value="0"
                innerRef={register('pengkajian_status_neurologis') as any}
                checked={isStatusNeurologis === '0'}
              />{' '}
              <Label check>
                Normal
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <Row>
              <Col md="auto">
                <FormGroup check className="app-form-check">
                  <Input
                    type="radio"
                    name="pengkajian_status_neurologis"
                    className="me-1"
                    onChange={(e) => handleRadioStatusNeurologis(e)}
                    defaultChecked={data?.form?.Pengkajian_Status_Neurologis === '1'}
                    value="1"
                    innerRef={register('pengkajian_status_neurologis') as any}
                    checked={isStatusNeurologis === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_status_neurologis_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Muskulos Keletal</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_muskulos_keletal"
                className="me-1"
                onChange={(e) => handleRadioMuskulosKeletal(e)}
                defaultChecked={data?.form?.Pengkajian_Muskulos_Keletal === '0'}
                value="0"
                innerRef={register('pengkajian_muskulos_keletal') as any}
                checked={isMuskulosKeletal === '0'}
              />{' '}
              <Label check>
                Normal
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <Row>
              <Col md="auto">
                <FormGroup check className="app-form-check">
                  <Input
                    type="radio"
                    name="pengkajian_muskulos_keletal"
                    className="me-1"
                    onChange={(e) => handleRadioMuskulosKeletal(e)}
                    defaultChecked={data?.form?.Pengkajian_Muskulos_Keletal === '1'}
                    value="1"
                    innerRef={register('pengkajian_muskulos_keletal') as any}
                    checked={isMuskulosKeletal === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_muskulos_keletal_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

      </CardBody>
    </Card>
  )
}

export default GeneralAssessment;
