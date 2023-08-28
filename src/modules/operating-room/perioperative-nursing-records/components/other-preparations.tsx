import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { DateTimeInput } from "@src/shared/input";
import { PerioperativeNursingRecordsModel } from '../models/perioperative-nursing-records.model';


const OtherPreparations = (props: { data: PerioperativeNursingRecordsModel, setValue:any, initialImage?: string, register: any, errors: any }) => {
  const { data, setValue, initialImage, register, errors } = props;

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  return (
    <FormGroup>
      <FormGroup className="mt-1 form-group" row>
        <Row>
          <Col>
            <Label>3.PERSIAPAN LAIN-LAIN</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'>
            <Label>Site Marking</Label>
          </Col>
          <Col>
            <Input
              id="lain_site_marking"
              type="radio"
              name="lain_site_marking"
              className="me-1"
              value="1"
              onChange={(e) => handleRadioChange(e)}
              style={{marginLeft:'-20px'}}
              defaultChecked={data && data.form && data.form.Lain_Site_Marking === 1}
              innerRef={register("lain_site_marking") as any}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="lain_site_marking_2"
              type="radio"
              name="lain_site_marking"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              style={{marginLeft:'-70px'}}
              defaultChecked={data && data.form && data.form.Lain_Site_Marking === 0}
              innerRef={register("lain_site_marking") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-1 form-group" row>
        <Row>
          <Col md='3'>
            <Label>Penjelasan Singkat oleh dokter bedah tentang prosedur yang akan dilakukan kepada klien</Label>
          </Col>
          <Col>
            <Input
              id="lain_penjelasan_singkat_1"
              type="radio"
              name="lain_penjelasan_singkat"
              className="me-1"
              value="1"
              onChange={(e) => handleRadioChange(e)}
              style={{marginLeft:'-20px'}}
              defaultChecked={data && data.form && data.form.Lain_Penjelasan_Singkat === 1}
              innerRef={register("lain_penjelasan_singkat") as any}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="lain_penjelasan_singkat_2"
              type="radio"
              name="lain_penjelasan_singkat"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              style={{marginLeft:'-70px'}}
              defaultChecked={data && data.form && data.form.Lain_Penjelasan_Singkat === 0}
              innerRef={register("lain_penjelasan_singkat") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </FormGroup>

      <FormGroup className="form-group" row>
        <Row>
          <Col>
            <Label>Tanggal</Label>
          </Col>
          <Col>
            <DateTimeInput
              name='tanggal'
              defaultValue='date'
              md={1}
              style={{marginTop: '-30px', marginLeft:'-280px'}}
              {...{ register, errors }}
            />
          </Col>
        </Row>
      </FormGroup>
    </FormGroup>
  )
}

export default OtherPreparations;
