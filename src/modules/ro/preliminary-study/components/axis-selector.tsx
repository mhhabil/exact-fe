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
import axis from '../consts/axis';
import classnames from 'classnames';

const AxisSelector = (props: { name: string, disabled?: boolean, register: any, errors: any, setValue: any, getValues: any, label?: string, required?: boolean }) => {

  const { name, disabled, register, errors, setValue, getValues, label = 'Axis', required = true } = props;

  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [leftActiveList, setLeftActiveList] = useState<string>('1');
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
    if (defaultValue) {
      let right;
      const left = axis.find(s => {
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
  }, [defaultValue]);

  return (
    <Fragment>
      <Label for={name} sm="12">Axis</Label>
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
            <Col md="6" sm="12" className="mb-1">
              <ListGroup tag="div">
                {
                  axis && axis.map((d, key) => {
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
                axis && axis.map((d, key) => {
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

export default AxisSelector;
