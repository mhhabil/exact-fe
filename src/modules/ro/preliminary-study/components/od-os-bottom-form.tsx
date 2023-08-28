import { Col, FormGroup, Input, Row } from 'reactstrap';
import { NumberInput, SelectInput, TextInput } from '@shared/input';
import tanamLensa from '../consts/tanam-lensa';
import keterangan from '../consts/keterangan';

const OdOsBottomForm = (props: { register: any, errors: any, type: string }) => {

  const { register, errors, type } = props;

  return (
    <Row>
      <Col md="12">
        <Row>
          <Col md="12">Tonometri</Col>
        </Row>
        <Row>
          <Col md="6" sm="12">
            <FormGroup className="form-group">
              <NumberInput
                name={`${type}_non_contact`}
                label='Non-contact'
                placeholder='0.00'
                step='.01'
                {...{ register, errors }}
              />
            </FormGroup>
          </Col>
          <Col md="6" sm="12">
            <FormGroup className="form-group" style={{marginTop: '-12px'}}>
              <SelectInput name={`${type}_tanam_lensa`} label="Keterangan Tanam Lensa" {...{ register, errors }}>
                <option value="">--</option>
                {
                  tanamLensa && tanamLensa.map((tl, key) => {
                    return <option value={tl} key={key}>{ tl }</option>;
                  })
                }
              </SelectInput>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="6" sm="12">
            <FormGroup className="form-group">
              {/* <TextInput name={`${type}_schiotz`} label="Schiotz" {...{ register, errors }} /> */}
              <NumberInput
                name={`${type}_schiotz`}
                label='Schiotz'
                placeholder='0.00'
                step='.01'
                {...{ register, errors }}
              />
            </FormGroup>
          </Col>
          <Col md="6" sm="12">
            <FormGroup className="form-group" style={{marginTop: '-12px'}}>
              <SelectInput name={`${type}_keterangan_tono`} label="Keterangan Tono" {...{ register, errors }}>
                <option value="">--</option>
                {
                  keterangan && keterangan.map((tl, key) => {
                    return <option value={tl} key={key}>{ tl }</option>;
                  })
                }
              </SelectInput>
            </FormGroup>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default OdOsBottomForm;

