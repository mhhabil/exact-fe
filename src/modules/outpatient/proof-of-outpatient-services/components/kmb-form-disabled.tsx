import { Col, FormGroup, Input, Row } from 'reactstrap';
import { Fragment, useState } from 'react';
import { SelectInput } from '@shared/input';
import adds from '@src/modules/ro/preliminary-study/consts/adds';
import falses from '@src/modules/ro/preliminary-study/consts/falses';
import jaggers from '@src/modules/ro/preliminary-study/consts/jaggers';
import pd from '@src/modules/ro/preliminary-study/consts/pd';

import AxisSelector from '@src/modules/ro/preliminary-study/components/axis-selector';
import CylSelector from '@src/modules/ro/preliminary-study/components/cyl-selector';
import SphSelector from '@src/modules/ro/preliminary-study/components/sph-selector';

const KmbFormDisabled = (props: { register: any, errors: any, setValue: any, getValues: any, type: string, defaultChecked?: boolean, watch?: any }) => {

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
              innerRef={register({ required: false })}
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
                    <SphSelector disabled name={`${type}_kmb_sph`} label={`Sph KMB ${type.toUpperCase()}`} {...{ register, errors, setValue, getValues }} required={false}/>
                  </FormGroup>
                </Col>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <CylSelector disabled name={`${type}_kmb_cyl`} label={`Cyl KMB ${type.toUpperCase()}`} {...{ register, errors, setValue, getValues }} required={false}/>
                  </FormGroup>
                </Col>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <AxisSelector disabled name={`${type}_kmb_axis`} label={`Axis KMB ${type.toUpperCase()}`} {...{ register, errors, setValue, getValues }} required={false}/>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <SelectInput disabled name={`${type}_kmb_false`} label="False" {...{ register, errors }} required={false}>
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
                    <SelectInput disabled name={`${type}_kmb_add`} label="Add" {...{ register, errors }} required={false}>
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
                    <SelectInput disabled name={`${type}_kmb_jagger`} label="Jagger" {...{ register, errors }} required={false}>
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
                    <SelectInput disabled name={`${type}_kmb_pd_jauh`} label="PD Jauh" {...{ register, errors }} required={false}>
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
                    <SelectInput disabled name={`${type}_kmb_pd_dekat`} label="PD Dekat" {...{ register, errors }} required={false}>
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

export default KmbFormDisabled;
