import { Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { InpatientMedicalNote } from "../models/inpatient-medical-note.model";
import { TextInput } from "@src/shared/input";
import { useState } from "react";

const EyesAssessment = (props: { data: InpatientMedicalNote, register: any, setValue: any, errors: any }) => {
  const { data, register, errors, setValue } = props

  const [isPosisi, setIsPosisi] = useState<any>((data && data.form && data.form.Pengkajian_Posisi) ? data.form.Pengkajian_Posisi : undefined)
  const [isPergerakan, setIsPergerakan] = useState<any>((data && data.form && data.form.Pengkajian_Pergerakan) ? data.form.Pengkajian_Pergerakan : undefined)
  const [isFunduscopy, setIsFunduscopy] = useState<any>((data && data.form && data.form.Pengkajian_Funduscopy) ? data.form.Pengkajian_Funduscopy : undefined)
  const [isCanthalM, setIsCanthalM] = useState<any>((data && data.form && data.form.Pengkajian_Canthal_Medial) ? data.form.Pengkajian_Canthal_Medial : undefined)
  const [isCanthalL, setIsCanthalL] = useState<any>((data && data.form && data.form.Pengkajian_Canthal_Lateral) ? data.form.Pengkajian_Canthal_Lateral : undefined)
  const [isSclera, setIsSclera] = useState<any>((data && data.form && data.form.Pengkajian_Sclera) ? data.form.Pengkajian_Sclera : undefined)
  const [isPalpebraSuperior, setIsPalpebraSuperior] = useState<any>((data && data.form && data.form.Pengkajian_Palpebra_Superior) ? data.form.Pengkajian_Palpebra_Superior : undefined);
  const [isPalpebraInferior, setIsPalpebraInferior] = useState<any>((data && data.form && data.form.Pengkajian_Palpebra_Inferior) ? data.form.Pengkajian_Palpebra_Inferior : undefined);
  const [isConjTarsalSuperior, setIsConjTarsalSuperior] = useState<any>((data && data.form && data.form.Pengkajian_Conj_Tarsal_Superior) ? data.form.Pengkajian_Conj_Tarsal_Superior : undefined);
  const [isConjTarsalInferior, setIsConjTarsalInferior] = useState<any>((data && data.form && data.form.Pengkajian_Conj_Tarsal_Inferior) ? data.form.Pengkajian_Conj_Tarsal_Inferior : undefined);
  const [isConjBulbi, setIsConjBulbi] = useState<any>((data && data.form && data.form.Pengkajian_Conj_Bulbi) ? data.form.Pengkajian_Conj_Bulbi : undefined);
  const [isCornea, setIsCornea] = useState<any>((data && data.form && data.form.Pengkajian_Cornea) ? data.form.Pengkajian_Cornea : undefined);
  const [isCoa, setIsCoa] = useState<any>((data && data.form && data.form.Pengkajian_Coa) ? data.form.Pengkajian_Coa : undefined);
  const [isPupil, setIsPupil] = useState<any>((data && data.form && data.form.Pengkajian_Pupil) ? data.form.Pengkajian_Pupil : undefined);
  const [isIris, setIsIris] = useState<any>((data && data.form && data.form.Pengkajian_Iris) ? data.form.Pengkajian_Iris : undefined);
  const [isVitreous, setIsVitreous] = useState<any>((data && data.form && data.form.Pengkajian_Vitreous) ? data.form.Pengkajian_Vitreous : undefined);
  const [isLensa, setIsLensa] = useState<any>((data && data.form && data.form.Pengkajian_Lensa) ? data.form.Pengkajian_Lensa : undefined);
  const [isRetina, setIsRetina] = useState<any>((data && data.form && data.form.Pengkajian_Retina) ? data.form.Pengkajian_Retina : undefined);

  const handleRadioPosisi = (e: any) => {
    setIsPosisi(e.target.value);
    setValue(e.target.name, e.target.value);
  }

  const handleRadioPergerakan = (e: any) => {
    setIsPergerakan(e.target.value);
    setValue(e.target.name, e.target.value);
  }

  const handleRadioFunduscopy = (e: any) => {
    setIsFunduscopy(e.target.value);
    setValue(e.target.name, e.target.value);
  }

  const handleRadioCanthalMedial = (e: any) => {
    setIsCanthalM(e.target.value);
    setValue(e.target.name, e.target.value);
  }

  const handleRadioCanthalLateral = (e: any) => {
    setIsCanthalL(e.target.value);
    setValue(e.target.name, e.target.value);
  }

  const handleRadioSclera = (e: any) => {
    setIsSclera(e.target.value);
    setValue(e.target.name, e.target.value);
  }

  const handleRadioPalpebraSuperior = (e: any) => {
    setIsPalpebraSuperior(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioPalpebraInferior = (e: any) => {
    setIsPalpebraInferior(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioConjTarsalSuperior = (e: any) => {
    setIsConjTarsalSuperior(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioConjTarsalInferior = (e: any) => {
    setIsConjTarsalInferior(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioConjBulbi = (e: any) => {
    setIsConjBulbi(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioCornea = (e: any) => {
    setIsCornea(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioCoa = (e: any) => {
    setIsCoa(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioPupil = (e: any) => {
    setIsPupil(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioIris = (e: any) => {
    setIsIris(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioVitreous = (e: any) => {
    setIsVitreous(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioLensa = (e: any) => {
    setIsLensa(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleRadioRetina = (e: any) => {
    setIsRetina(e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const handleDefault2 = (isFlag: any) => {

    if (isFlag === '0') {
      setIsPosisi('0');
      setIsPergerakan('0');
      setIsPalpebraSuperior('0');
      setIsPalpebraInferior('0');
      setIsConjTarsalSuperior('0');
      setIsConjTarsalInferior('0');
      setIsFunduscopy('0');
      setIsCanthalL('0');
      setIsCanthalM('0');
      setIsSclera('0');
      setIsConjBulbi('0');
      setIsCornea('0');
      setIsCoa('0');
      setIsPupil('0');
      setIsIris('0');
      setIsVitreous('0');
      setIsLensa('0');
      setIsRetina('0');
      setValue('pengkajian_posisi', '0');
      setValue('pengkajian_pergerakan', '0');
      setValue('pengkajian_palpebra_superior', '0');
      setValue('pengkajian_palpebra_inferior', '0');
      setValue('pengkajian_conj_tarsal_superior', '0');
      setValue('pengkajian_conj_tarsal_inferior', '0');
      setValue('pengkajian_funduscopy', '0');
      setValue('pengkajian_canthal_medial', '0');
      setValue('pengkajian_canthal_lateral', '0');
      setValue('pengkajian_sclera', '0');
      setValue('pengkajian_conj_bulbi', '0');
      setValue('pengkajian_cornea', '0');
      setValue('pengkajian_coa', '0');
      setValue('pengkajian_pupil', '0');
      setValue('pengkajian_iris', '0');
      setValue('pengkajian_vitreous', '0');
      setValue('pengkajian_lensa', '0');
      setValue('pengkajian_retina', '0');

    }
  }

  return (
    <Card className="border-1">
      <CardBody>
        <div className="col-form-label fw-bolder">Pengkajian Mata</div>
        <Row className="mt-2">
          <Col>
            <Input
              type="checkbox"
              className="me-1"
              onChange={(e) => {
                if (e.target.checked) {
                  handleDefault2('0');
                } else {
                  handleDefault2('1');
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
            <div className="col-form-label fw-bolder">Posisi</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_posisi"
                className="me-1"
                onChange={(e) => handleRadioPosisi(e)}
                defaultChecked={data?.form?.Pengkajian_Posisi === '0'}
                value="0"
                innerRef={register('pengkajian_posisi') as any}
                checked={isPosisi === '0'}
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
                    name="pengkajian_posisi"
                    className="me-1"
                    onChange={(e) => handleRadioPosisi(e)}
                    defaultChecked={data?.form?.Pengkajian_Posisi === '1'}
                    value="1"
                    innerRef={register('pengkajian_posisi') as any}
                    checked={isPosisi === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_posisi_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Pergerakan</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_pergerakan"
                className="me-1"
                onChange={(e) => handleRadioPergerakan(e)}
                defaultChecked={data?.form?.Pengkajian_Pergerakan === '0'}
                value="0"
                innerRef={register('pengkajian_pergerakan') as any}
                checked={isPergerakan === '0'}
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
                    name="pengkajian_pergerakan"
                    className="me-1"
                    onChange={(e) => handleRadioPergerakan(e)}
                    defaultChecked={data?.form?.Pengkajian_Pergerakan === '1'}
                    value="1"
                    innerRef={register('pengkajian_pergerakan') as any}
                    checked={isPergerakan === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_pergerakan_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Palpebra Superior</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_palpebra_superior"
                className="me-1"
                onChange={(e) => handleRadioPalpebraSuperior(e)}
                defaultChecked={data?.form?.Pengkajian_Palpebra_Superior === '0'}
                value="0"
                innerRef={register('pengkajian_palpebra_superior') as any}
                checked={isPalpebraSuperior === '0'}
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
                    name="pengkajian_palpebra_superior"
                    className="me-1"
                    onChange={(e) => handleRadioPalpebraSuperior(e)}
                    defaultChecked={data?.form?.Pengkajian_Palpebra_Superior === '1'}
                    value="1"
                    innerRef={register('pengkajian_palpebra_superior') as any}
                    checked={isPalpebraSuperior === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_palpebra_superior_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Palpebra Inferior</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_palpebra_inferior"
                className="me-1"
                onChange={(e) => handleRadioPalpebraInferior(e)}
                defaultChecked={data?.form?.Pengkajian_Palpebra_Inferior === '0'}
                value="0"
                innerRef={register('pengkajian_palpebra_inferior') as any}
                checked={isPalpebraInferior === '0'}
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
                    name="pengkajian_palpebra_inferior"
                    className="me-1"
                    onChange={(e) => handleRadioPalpebraInferior(e)}
                    defaultChecked={data?.form?.Pengkajian_Palpebra_Inferior === '1'}
                    value="1"
                    innerRef={register('pengkajian_palpebra_inferior') as any}
                    checked={isPalpebraInferior === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_palpebra_inferior_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Sclera</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_sclera"
                className="me-1"
                onChange={(e) => handleRadioSclera(e)}
                defaultChecked={data?.form?.Pengkajian_Sclera === '0'}
                value="0"
                innerRef={register('pengkajian_sclera') as any}
                checked={isSclera === '0'}
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
                    name="pengkajian_sclera"
                    className="me-1"
                    onChange={(e) => handleRadioSclera(e)}
                    defaultChecked={data?.form?.Pengkajian_Sclera === '1'}
                    value="1"
                    innerRef={register('pengkajian_sclera') as any}
                    checked={isSclera === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_sclera_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Conj. Tarsal Superior</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_conj_tarsal_superior"
                className="me-1"
                onChange={(e) => handleRadioConjTarsalSuperior(e)}
                defaultChecked={data?.form?.Pengkajian_Conj_Tarsal_Superior === '0'}
                value="0"
                innerRef={register('pengkajian_conj_tarsal_superior') as any}
                checked={isConjTarsalSuperior === '0'}
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
                    name="pengkajian_conj_tarsal_superior"
                    className="me-1"
                    onChange={(e) => handleRadioConjTarsalSuperior(e)}
                    defaultChecked={data?.form?.Pengkajian_Conj_Tarsal_Superior === '1'}
                    value="1"
                    innerRef={register('pengkajian_conj_tarsal_superior') as any}
                    checked={isConjTarsalSuperior === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_conj_tarsal_superior_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Conj. Tarsal Inferior</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_conj_tarsal_inferior"
                className="me-1"
                onChange={(e) => handleRadioConjTarsalInferior(e)}
                defaultChecked={data?.form?.Pengkajian_Conj_Tarsal_Inferior === '0'}
                value="0"
                innerRef={register('pengkajian_conj_tarsal_inferior') as any}
                checked={isConjTarsalInferior === '0'}
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
                    name="pengkajian_conj_tarsal_inferior"
                    className="me-1"
                    onChange={(e) => handleRadioConjTarsalInferior(e)}
                    defaultChecked={data?.form?.Pengkajian_Conj_Tarsal_Inferior === '1'}
                    value="1"
                    innerRef={register('pengkajian_conj_tarsal_inferior') as any}
                    checked={isConjTarsalInferior === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_conj_tarsal_inferior_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Conj. Bulbi</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_conj_bulbi"
                className="me-1"
                onChange={(e) => handleRadioConjBulbi(e)}
                defaultChecked={data?.form?.Pengkajian_Conj_Bulbi === '0'}
                value="0"
                innerRef={register('pengkajian_conj_bulbi') as any}
                checked={isConjBulbi === '0'}
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
                    name="pengkajian_conj_bulbi"
                    className="me-1"
                    onChange={(e) => handleRadioConjBulbi(e)}
                    defaultChecked={data?.form?.Pengkajian_Conj_Bulbi === '1'}
                    value="1"
                    innerRef={register('pengkajian_conj_bulbi') as any}
                    checked={isConjBulbi === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_conj_bulbi_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Canthal Medial</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_canthal_medial"
                className="me-1"
                onChange={(e) => handleRadioCanthalMedial(e)}
                defaultChecked={data?.form?.Pengkajian_Canthal_Medial === '0'}
                value="0"
                innerRef={register('pengkajian_canthal_medial') as any}
                checked={isCanthalM === '0'}
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
                    name="pengkajian_canthal_medial"
                    className="me-1"
                    onChange={(e) => handleRadioCanthalMedial(e)}
                    defaultChecked={data?.form?.Pengkajian_Canthal_Medial === '1'}
                    value="1"
                    innerRef={register('pengkajian_canthal_medial') as any}
                    checked={isCanthalM === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_canthal_medial_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Canthal Lateral</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_canthal_lateral"
                className="me-1"
                onChange={(e) => handleRadioCanthalLateral(e)}
                defaultChecked={data?.form?.Pengkajian_Canthal_Lateral === '0'}
                value="0"
                innerRef={register('pengkajian_canthal_lateral') as any}
                checked={isCanthalL === '0'}
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
                    name="pengkajian_canthal_lateral"
                    className="me-1"
                    onChange={(e) => handleRadioCanthalLateral(e)}
                    defaultChecked={data?.form?.Pengkajian_Canthal_Lateral === '1'}
                    value="1"
                    innerRef={register('pengkajian_canthal_lateral') as any}
                    checked={isCanthalL === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_canthal_lateral_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Cornea</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_cornea"
                className="me-1"
                onChange={(e) => handleRadioCornea(e)}
                defaultChecked={data?.form?.Pengkajian_Cornea === '0'}
                value="0"
                innerRef={register('pengkajian_cornea') as any}
                checked={isCornea === '0'}
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
                    name="pengkajian_cornea"
                    className="me-1"
                    onChange={(e) => handleRadioCornea(e)}
                    defaultChecked={data?.form?.Pengkajian_Cornea === '1'}
                    value="1"
                    innerRef={register('pengkajian_cornea') as any}
                    checked={isCornea === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_cornea_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">C.O.A</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_coa"
                className="me-1"
                onChange={(e) => handleRadioCoa(e)}
                defaultChecked={data?.form?.Pengkajian_Coa === '0'}
                value="0"
                innerRef={register('pengkajian_coa') as any}
                checked={isCoa === '0'}
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
                    name="pengkajian_coa"
                    className="me-1"
                    onChange={(e) => handleRadioCoa(e)}
                    defaultChecked={data?.form?.Pengkajian_Coa === '1'}
                    value="1"
                    innerRef={register('pengkajian_coa') as any}
                    checked={isCoa === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_coa_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Pupil</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_pupil"
                className="me-1"
                onChange={(e) => handleRadioPupil(e)}
                defaultChecked={data?.form?.Pengkajian_Pupil === '0'}
                value="0"
                innerRef={register('pengkajian_pupil') as any}
                checked={isPupil === '0'}
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
                    name="pengkajian_pupil"
                    className="me-1"
                    onChange={(e) => handleRadioPupil(e)}
                    defaultChecked={data?.form?.Pengkajian_Pupil === '1'}
                    value="1"
                    innerRef={register('pengkajian_pupil') as any}
                    checked={isPupil === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_pupil_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Iris</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_iris"
                className="me-1"
                onChange={(e) => handleRadioIris(e)}
                defaultChecked={data?.form?.Pengkajian_Iris === '0'}
                value="0"
                innerRef={register('pengkajian_iris') as any}
                checked={isIris === '0'}
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
                    name="pengkajian_iris"
                    className="me-1"
                    onChange={(e) => handleRadioIris(e)}
                    defaultChecked={data?.form?.Pengkajian_Iris === '1'}
                    value="1"
                    innerRef={register('pengkajian_iris') as any}
                    checked={isIris === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_iris_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Vitreos</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_vitreous"
                className="me-1"
                onChange={(e) => handleRadioVitreous(e)}
                defaultChecked={data?.form?.Pengkajian_Vitreous === '0'}
                value="0"
                innerRef={register('pengkajian_vitreous') as any}
                checked={isVitreous === '0'}
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
                    name="pengkajian_vitreous"
                    className="me-1"
                    onChange={(e) => handleRadioVitreous(e)}
                    defaultChecked={data?.form?.Pengkajian_Vitreous === '1'}
                    value="1"
                    innerRef={register('pengkajian_vitreous') as any}
                    checked={isVitreous === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_vitreous_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Lensa</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_lensa"
                className="me-1"
                onChange={(e) => handleRadioLensa(e)}
                defaultChecked={data?.form?.Pengkajian_Lensa === '0'}
                value="0"
                innerRef={register('pengkajian_lensa') as any}
                checked={isLensa === '0'}
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
                    name="pengkajian_lensa"
                    className="me-1"
                    onChange={(e) => handleRadioLensa(e)}
                    defaultChecked={data?.form?.Pengkajian_Lensa === '1'}
                    value="1"
                    innerRef={register('pengkajian_lensa') as any}
                    checked={isLensa === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_lensa_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Retina</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_retina"
                className="me-1"
                onChange={(e) => handleRadioRetina(e)}
                defaultChecked={data?.form?.Pengkajian_Retina === '0'}
                value="0"
                innerRef={register('pengkajian_retina') as any}
                checked={isRetina === '0'}
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
                    name="pengkajian_retina"
                    className="me-1"
                    onChange={(e) => handleRadioRetina(e)}
                    defaultChecked={data?.form?.Pengkajian_Retina === '1'}
                    value="1"
                    innerRef={register('pengkajian_retina') as any}
                    checked={isRetina === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_retina_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Funduscopy</div>
          </Col>
          <Col md="2">
            <FormGroup check className="app-form-check">
              <Input
                type="radio"
                name="pengkajian_funduscopy"
                className="me-1"
                onChange={(e) => handleRadioFunduscopy(e)}
                defaultChecked={data?.form?.Pengkajian_Funduscopy === '0'}
                value="0"
                innerRef={register('pengkajian_funduscopy') as any}
                checked={isFunduscopy === '0'}
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
                    name="pengkajian_funduscopy"
                    className="me-1"
                    onChange={(e) => handleRadioFunduscopy(e)}
                    defaultChecked={data?.form?.Pengkajian_Funduscopy === '1'}
                    value="1"
                    innerRef={register('pengkajian_funduscopy') as any}
                    checked={isFunduscopy === '1'}
                  />{' '}
                  <Label check>
                    Tidak Normal, Jelaskan
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className="form-group" row>
                  <TextInput name="pengkajian_funduscopy_keterangan" nolabel {...{ register, errors }} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            <div className="col-form-label fw-bolder">Data Objektif Lainnya</div>
          </Col>
          <Col md='5'>
            <FormGroup check className="app-form-check">
              <Input
                type='textarea'
                name='data_objektif_lain'
                innerRef={register()}
              />
            </FormGroup>
          </Col>
        </Row>

      </CardBody>
    </Card>
  )
}

export default EyesAssessment;
