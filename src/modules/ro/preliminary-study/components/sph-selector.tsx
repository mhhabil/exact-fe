import {
  Col,
  FormFeedback,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';
import { Fragment, useEffect, useState } from 'react';
import classnames from 'classnames';
import sph from '../consts/sph';

const SphSelector = (props: { name: string, disabled?: boolean, register: any, errors: any, setValue: any, getValues: any, label?: string, required?: boolean }) => {

  const { name, disabled, register, errors, setValue, getValues, label = 'Sph', required = true } = props;

  const defaultValue = getValues(name);
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [leftActiveList, setLeftActiveList] = useState<string>('-');
  const [centerActiveList, setCenterActiveList] = useState<string>('-1');
  const [rightActiveList, setRightActiveList] = useState<string>();

  const handleSelectLeftList = (value: string) => {
    setRightActiveList('');
    setCenterActiveList('');
    setLeftActiveList(value);
  }

  const handleSelectRightList = (value: string) => {
    setRightActiveList(value);
    setValue(name, value);
    setShowPicker(false);
  }

  useEffect(() => {
    if (defaultValue && (!leftActiveList || leftActiveList === '-')) {
      let center, right;
      const left = sph.find(s => {
        center = s.items.find(i => {
          right = i.items.find(d => {
            return d.value === defaultValue;
          });
          if (right) {
            setRightActiveList(right.value);
          }
          return right;
        });
        if (center) {
          setCenterActiveList(center.value);
        }
        return center;
      });
      if (left) {
        setLeftActiveList(left.value);
      }
    }
  }, [defaultValue]);

  return (
    <Fragment>
      <Label for={name} sm="12">Sph</Label>
      <Col>
        <Input
          id={name}
          name={name}
          innerRef={register({ required })}
          invalid={errors[name] && true}
          placeholder="Pilih"
          inputMode='none'
          disabled={disabled}
          onClick={() => setShowPicker(true)}
        />
      </Col>
      {errors && errors[name] && <FormFeedback>{errors[name].message}</FormFeedback>}
      <Modal isOpen={showPicker} className="modal-dialog modal-xl">
        <ModalHeader toggle={() => setShowPicker(false)}>{label}</ModalHeader>
        <ModalBody>
          <Row>
            <Col md="3" sm="12" className="mb-1">
              <ListGroup tag="div">
                {
                  sph && sph.map((d, key) => {
                    return (
                      <ListGroupItem
                        key={key}
                        action
                        className={classnames('cursor-pointer', { active: leftActiveList === d.value })}
                        onClick={() => handleSelectLeftList(d.value)}>
                        <div className="d-flex justify-content-center display-6 fw-bold">{d.label}</div>
                      </ListGroupItem>
                    )
                  })
                }
              </ListGroup>
            </Col>
            <Col md="4" sm="12" className="mb-1">
              {
                sph && sph.map((d, key) => {
                  return (
                    <TabContent key={key} activeTab={leftActiveList}>
                      <TabPane tabId={d.value}>
                        <ListGroup tag="div">
                          {
                            d.items && Array.isArray(d.items) && d.items.map((item, key) => {
                              return (
                                <ListGroupItem
                                  key={key}
                                  action
                                  className={classnames('cursor-pointer', { active: centerActiveList === item.value })}
                                  onClick={() => setCenterActiveList(item.value)}>
                                  <div className="d-flex justify-content-center">{item.label}</div>
                                </ListGroupItem>
                              )
                            })
                          }
                        </ListGroup>
                      </TabPane>
                    </TabContent>
                  )
                })
              }
            </Col>
            <Col md="5" sm="12">
              {
                sph && sph.map((d) => {
                  return  d.items && Array.isArray(d.items) && d.items.map((item, key) => {
                    return (
                      <TabContent activeTab={centerActiveList} key={key}>
                        <TabPane tabId={item.value}>
                          <ListGroup tag="div">
                            {
                              item.items && Array.isArray(item.items) && item.items.map((i, k) => {
                                return (
                                  <ListGroupItem
                                    key={k}
                                    action
                                    className={classnames('cursor-pointer', { active: rightActiveList === i.value })}
                                    onClick={() => handleSelectRightList(i.value)}>
                                    <div className="d-flex justify-content-center">{i.label}</div>
                                  </ListGroupItem>
                                )
                              })
                            }
                          </ListGroup>
                        </TabPane>
                      </TabContent>
                    )
                  })
                })
              }
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Fragment>
  );
}

export default SphSelector;
