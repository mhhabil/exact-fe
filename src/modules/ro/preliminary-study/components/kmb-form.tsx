import { Col, FormGroup, Input, Row } from 'reactstrap';
import { Fragment, useState } from 'react';
import { SelectInput } from '@shared/input';
import adds from '../consts/adds';
import falses from '../consts/falses';
import jaggers from '../consts/jaggers';
import pd from '../consts/pd';

import AxisSelector from './axis-selector';
import CylSelector from './cyl-selector';
import SphSelector from './sph-selector';

const KmbForm = (props: { register: any, errors: any, setValue: any, getValues: any, type: string, defaultChecked?: boolean, watch?: any }) => {

  const {register, errors, setValue, getValues, type, defaultChecked = false, watch} = props;

  const [showForm, setShowForm] = useState(defaultChecked);

  const handleCheckboxChange = (e: any) => {
    setShowForm(e.target.checked);
  }

  return (
    <Row>
      <Col md="12">
        <Row>
          <FormGroup className="form-group">
            <Input
              name={`${type}_kmb_select`}
              type="checkbox"
              className="me-1"
              defaultChecked={defaultChecked}
              innerRef={register({ required: true })}
              onChange={(e) => handleCheckboxChange(e)} />
            <label>KMB</label>
          </FormGroup>
        </Row>
        {
          showForm && (
            <Fragment>
              <Row>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <SphSelector name={`${type}_kmb_sph`} label={`Sph KMB ${type.toUpperCase()}`} {...{ register, errors, setValue, getValues }} />
                  </FormGroup>
                </Col>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <CylSelector name={`${type}_kmb_cyl`} label={`Cyl KMB ${type.toUpperCase()}`} {...{ register, errors, setValue, getValues }} />
                  </FormGroup>
                </Col>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <AxisSelector name={`${type}_kmb_axis`} label={`Axis KMB ${type.toUpperCase()}`} {...{ register, errors, setValue, getValues }} />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <SelectInput name={`${type}_kmb_false`} label="False" {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {/* <option disabled={!!watch(`${type}_kmb_false`)}>--</option> */}
                      {
                        falses && falses.map((fa, key) => {
                          return <option value={fa} key={key}>{ fa }</option>;
                        })
                      }
                    </SelectInput>
                  </FormGroup>
                </Col>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <SelectInput name={`${type}_kmb_add`} label="Add" {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {/* <option disabled={!!watch(`${type}_kmb_add`)}>--</option> */}
                      {
                        adds && adds.map((add, key) => {
                          return <option value={add} key={key}>{ add }</option>;
                        })
                      }
                    </SelectInput>
                  </FormGroup>
                </Col>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <SelectInput name={`${type}_kmb_jagger`} label="Jagger" {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {/* <option disabled={!!watch(`${type}_kmb_jagger`)}>--</option> */}
                      {
                        jaggers && jaggers.map((jagger, key) => {
                          return <option value={jagger} key={key}>{ jagger }</option>;
                        })
                      }
                    </SelectInput>
                  </FormGroup>
                </Col>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <SelectInput name={`${type}_kmb_pd_jauh`} label="PD Jauh" {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {/* <option disabled={!!watch(`${type}_kmb_pd_jauh`)}>--</option> */}
                      {
                        pd && pd.map((p, key) => {
                          return <option value={p} key={key}>{ p }</option>;
                        })
                      }
                    </SelectInput>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <SelectInput name={`${type}_kmb_pd_dekat`} label="PD Dekat" {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {/* <option disabled={!!watch(`${type}_kmb_pd_dekat`)}>--</option> */}
                      {
                        pd && pd.map((p, key) => {
                          return <option value={p} key={key}>{ p }</option>;
                        })
                      }
                    </SelectInput>
                  </FormGroup>
                </Col>
              </Row>
            </Fragment>
          )
        }
      </Col>
    </Row>
  );
}

export default KmbForm;
