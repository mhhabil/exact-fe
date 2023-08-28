import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { SelectInput } from '@shared/input';
import adds from '@src/modules/ro/preliminary-study/consts/adds';
import falses from '@src/modules/ro/preliminary-study/consts/falses';
import jaggers from '@src/modules/ro/preliminary-study/consts/jaggers';
import ph from '@src/modules/ro/preliminary-study/consts/ph';
import visualAquilities from '@src/modules/ro/preliminary-study/consts/visual-aquilities';

const OdOsTopFormDisabled = (props: { register: any, errors: any, type: string }) => {

  const { register, errors, type } = props;

  return (
    <Row>
      <Col md="12">
        <Row>
          <Col className='d-flex align-items-center'>
            <Label className='me-1'>Resep Kacamata: </Label>
            <Input
              type='text'
              disabled
              name={`kacamata_${type}`}
              innerRef={register({ required: false })}
              invalid={errors[`kacamata_${type}`] && true}
            />
          </Col>
        </Row>
        <Row>
          <Col md="4" sm="12">
            <FormGroup className="form-group">
              <SelectInput disabled name={`${type}_va`} label="Visual Aquity" {...{ register, errors }} required={false}>
                <option value="" disabled={false}>--</option>
                {
                  visualAquilities && visualAquilities.map((visus, key) => {
                    return <option value={visus} key={key}>{ visus }</option>;
                  })
                }
              </SelectInput>
            </FormGroup>
          </Col>
          <Col md="4" sm="12">
            <FormGroup className="form-group">
              <SelectInput disabled name={`${type}_false`} label="False" {...{ register, errors }} required={false}>
                <option value="" disabled={false}>--</option>
                {
                  falses && falses.map((fals, key) => {
                    return <option value={fals} key={key}>{ fals }</option>;
                  })
                }
              </SelectInput>
            </FormGroup>
          </Col>
          <Col md="4" sm="12">
            <FormGroup className="form-group">
              <SelectInput disabled name={`${type}_ph`} label="PH" {...{ register, errors }} required={false}>
                <option value="" disabled={false}>--</option>
                {
                  ph && ph.map((p, key) => {
                    return <option value={p} key={key}>{ p }</option>;
                  })
                }
              </SelectInput>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="4" sm="12">
            <FormGroup className="form-group">
              <SelectInput disabled name={`${type}_add`} label="Add" {...{ register, errors }} required={false}>
                <option value="" disabled={false}>--</option>
                {
                  adds && adds.map((add, key) => {
                    return <option value={add} key={key}>{ add }</option>;
                  })
                }
              </SelectInput>
            </FormGroup>
          </Col>
          <Col md="4" sm="12">
            <FormGroup className="form-group">
              <SelectInput disabled name={`${type}_jagger`} label="Jagger" {...{ register, errors }} required={false}>
                <option value="" disabled={false}>--</option>
                {
                  jaggers && jaggers.map((jagger, key) => {
                    return <option value={jagger} key={key}>{ jagger }</option>;
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

export default OdOsTopFormDisabled;

