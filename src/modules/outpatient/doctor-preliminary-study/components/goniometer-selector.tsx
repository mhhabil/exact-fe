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
import goniometer from '../consts/goniometer';

const GonioMeterSelector = (props: { name: string, register: any, errors: any, setValue: any, getValues: any, label?: string }) => {

  const { name, register, errors, setValue, getValues, label = 'Goniometer' } = props;

  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [leftActiveList, setLeftActiveList] = useState<string>();
  const [rightActiveList, setRightActiveList] = useState<string>();

  const handleSelectLeftList = (value: string) => {
    setRightActiveList('');
    setLeftActiveList(value);
  }

  const handleSelectRightList = (value: string) => {
    setValue(name, value);
    setRightActiveList(value);
    setShowPicker(false);
  }

  const defaultValue = getValues(name);

  useEffect(() => {
    if (defaultValue && !leftActiveList) {
      let right;
      const left = goniometer.find(s => {
        right = s.items.find(i => {
          return i.value === defaultValue;
        });
        if (right) {
          setRightActiveList(right.value);
        }
        return right;
      });
      if (left) {
        setLeftActiveList(left.value);
      }
    }
  }, [defaultValue, leftActiveList]);

  return (
    <Fragment>
      <Label for={name} sm="12"></Label>
      <Col>
        <Input
          id={name}
          name={name}
          innerRef={register({ required: true })}
          invalid={errors[name] && true}
          placeholder="Pilih"
          onClick={() => setShowPicker(true)}
        />
      </Col>
      {errors && errors[name] && <FormFeedback>{errors[name].message}</FormFeedback>}
      <Modal isOpen={showPicker} className="modal-dialog modal-xl">
        <ModalHeader toggle={() => setShowPicker(false)}>{label}</ModalHeader>
        <ModalBody>
          <Row>
            <Col md="6" sm="12" className="mb-1">
              <ListGroup tag="div">
                {
                  goniometer && goniometer.map((d, key) => {
                    return (
                      <ListGroupItem
                        key={key}
                        action
                        className={classnames('cursor-pointer', { active: leftActiveList === d.value })}
                        onClick={() => handleSelectLeftList(d.value)}>
                        <div className="d-flex justify-content-center">{d.label}</div>
                      </ListGroupItem>
                    )
                  })
                }
              </ListGroup>
            </Col>
            <Col md="6" sm="12" className="mb-1">
              {
                goniometer && goniometer.map((d, key) => {
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
                                  className={classnames('cursor-pointer', { active: rightActiveList === item.value })}
                                  onClick={() => handleSelectRightList(item.value)}>
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
          </Row>
        </ModalBody>
      </Modal>
    </Fragment>
  );
}

export default GonioMeterSelector;
