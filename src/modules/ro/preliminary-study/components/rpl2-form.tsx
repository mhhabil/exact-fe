import { Col, FormGroup, Input, Row } from 'reactstrap';
import { Fragment, useState } from 'react';
import { SelectInput } from '@shared/input';
import adds from '../consts/adds';
import falses from '../consts/falses';
import jaggers from '../consts/jaggers';
import pd from '../consts/pd';
import visualAquilities from '../consts/visual-aquilities';

import AxisSelector from './axis-selector';
import CylSelector from './cyl-selector';
import SphSelector from './sph-selector';
import adaptasi from '@modules/ro/preliminary-study/consts/adaptasi';
import ph from '../consts/ph';

const Rpl2Form = (props: { register: any, errors: any, setValue: any, getValues: any, type: string, defaultChecked?: boolean, watch?: any }) => {

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
              name={`${type}_rpl_2_select`}
              type="checkbox"
              className="me-1"
              defaultChecked={defaultChecked}
              innerRef={register({ required: true })}
              onChange={(e) => handleCheckboxChange(e)} />
            <label>RPL-2</label>
          </FormGroup>
        </Row>
        {
          showForm && (
            <Fragment>
              <Row>
                <Col md="12">RPL Streak Retinascopy</Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup className="form-group">
                    <SelectInput name={`${type}_rpl_2_streak_va_aquity`} label="Visual Aquity" {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {/* <option disabled={!!watch(`${type}_rpl_streak_va_aquity`)}>--</option> */}
                      {
                        visualAquilities && visualAquilities.map((visus, key) => {
                          return <option value={visus} key={key}>{ visus }</option>;
                        })
                      }
                    </SelectInput>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <SphSelector name={`${type}_rpl_2_streak_sph`} label={`Sph RPL ${type.toUpperCase()}`} {...{ register, errors, setValue, getValues }} />
                  </FormGroup>
                </Col>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <CylSelector name={`${type}_rpl_2_streak_cyl`} label={`Cyl RPL ${type.toUpperCase()}`} {...{ register, errors, setValue, getValues }} />
                  </FormGroup>
                </Col>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <AxisSelector name={`${type}_rpl_2_streak_axis`} label={`Axis RPL ${type.toUpperCase()}`} {...{ register, errors, setValue, getValues }} />
                  </FormGroup>
                </Col>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <SelectInput name={`${type}_rpl_2_streak_va`} label="Visus Akhir" {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {/* <option disabled={!!watch(`${type}_rpl_streak_va`)}>--</option> */}
                      {
                        visualAquilities && visualAquilities.map((va, key) => {
                          return <option value={va} key={key}>{ va }</option>;
                        })
                      }
                    </SelectInput>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <SelectInput name={`${type}_rpl_2_streak_false`} label="False" {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {/* <option disabled={!!watch(`${type}_rpl_streak_false`)}>--</option> */}
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
                    <SelectInput name={`${type}_rpl_2_streak_pd_jauh`} label="PD Jauh" {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {/* <option disabled={!!watch(`${type}_rpl_streak_pd_jauh`)}>--</option> */}
                      {
                        pd && pd.map((p, key) => {
                          return <option value={p} key={key}>{ p }</option>;
                        })
                      }
                    </SelectInput>
                  </FormGroup>
                </Col>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <SelectInput name={`${type}_rpl_2_streak_adaptasi`} label="Adaptasi" {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {/* <option disabled={!!watch(`${type}_rpl_streak_adaptasi`)}>--</option> */}
                      {
                        adaptasi && adaptasi.map((p, key) => {
                          return <option value={p} key={key}>{ p }</option>;
                        })
                      }
                    </SelectInput>
                  </FormGroup>
                </Col>
                <Col md='3' sm='12'>
                  <FormGroup className="form-group">
                    <SelectInput name={`${type}_rpl_2_streak_ph`} label="PH" {...{ register, errors }}>
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
                <Col md="12">RPL Ref Subjektif</Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup className="form-group">
                    <SelectInput name={`${type}_rpl_2_va_aquity`} label="Visual Aquity" {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {/* <option disabled={!!watch(`${type}_rpl_va_aquity`)}>--</option> */}
                      {
                        visualAquilities && visualAquilities.map((visus, key) => {
                          return <option value={visus} key={key}>{ visus }</option>;
                        })
                      }
                    </SelectInput>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <SphSelector name={`${type}_rpl_2_sph`} label={`Sph RPL ${type.toUpperCase()}`} {...{ register, errors, setValue, getValues }} />
                  </FormGroup>
                </Col>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <CylSelector name={`${type}_rpl_2_cyl`} label={`Cyl RPL ${type.toUpperCase()}`} {...{ register, errors, setValue, getValues }} />
                  </FormGroup>
                </Col>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <AxisSelector name={`${type}_rpl_2_axis`} label={`Axis RPL ${type.toUpperCase()}`} {...{ register, errors, setValue, getValues }} />
                  </FormGroup>
                </Col>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <SelectInput name={`${type}_rpl_2_va`} label="Visus Akhir" {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {/* <option disabled={!!watch(`${type}_rpl_va`)}>--</option> */}
                      {
                        visualAquilities && visualAquilities.map((va, key) => {
                          return <option value={va} key={key}>{ va }</option>;
                        })
                      }
                    </SelectInput>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <SelectInput name={`${type}_rpl_2_false`} label="False" {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {/* <option disabled={!!watch(`${type}_rpl_false`)}>--</option> */}
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
                    <SelectInput name={`${type}_rpl_2_pd_jauh`} label="PD Jauh" {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {/* <option disabled={!!watch(`${type}_rpl_pd_jauh`)}>--</option> */}
                      {
                        pd && pd.map((p, key) => {
                          return <option value={p} key={key}>{ p }</option>;
                        })
                      }
                    </SelectInput>
                  </FormGroup>
                </Col>
                <Col md="3" sm="12">
                  <FormGroup className="form-group">
                    <SelectInput name={`${type}_rpl_2_adaptasi`} label="Adaptasi" {...{ register, errors }}>
                      <option value="" disabled={false}>--</option>
                      {/* <option disabled={!!watch(`${type}_rpl_adaptasi`)}>--</option> */}
                      {
                        adaptasi && adaptasi.map((p, key) => {
                          return <option value={p} key={key}>{ p }</option>;
                        })
                      }
                    </SelectInput>
                  </FormGroup>
                </Col>
                <Col md='3' sm='12'>
                  <FormGroup className="form-group">
                    <SelectInput name={`${type}_rpl_2_ph`} label="PH" {...{ register, errors }}>
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
            </Fragment>
          )
        }
      </Col>
    </Row>
  );
}

export default Rpl2Form;
