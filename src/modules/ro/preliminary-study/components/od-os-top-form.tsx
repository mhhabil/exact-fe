import { Col, FormGroup, Row } from 'reactstrap';
import { SelectInput } from '@shared/input';
import adds from '../consts/adds';
import falses from '../consts/falses';
import jaggers from '../consts/jaggers';
import ph from '../consts/ph';
import visualAquilities from '../consts/visual-aquilities';

const OdOsTopForm = (props: { register: any, errors: any, type: string }) => {

  const { register, errors, type } = props;

  return (
    <Row>
      <Col md="12">
        <Row>
          <Col md="4" sm="12">
            <FormGroup className="form-group">
              <SelectInput name={`${type}_va`} label="Visual Aquity" {...{ register, errors }}>
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
              <SelectInput name={`${type}_false`} label="False" {...{ register, errors }}>
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
              <SelectInput name={`${type}_ph`} label="PH" {...{ register, errors }}>
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
              <SelectInput name={`${type}_add`} label="Add" {...{ register, errors }}>
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
              <SelectInput name={`${type}_jagger`} label="Jagger" {...{ register, errors }}>
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

export default OdOsTopForm;

