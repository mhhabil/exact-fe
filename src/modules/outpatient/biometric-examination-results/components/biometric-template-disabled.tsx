import { Col, FormFeedback, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { useEffect, useState } from 'react';
import item from '../const/item';

const BiometricTemplateDisabled = (props: { judul: string, data: any, defaultChecklistLeft: boolean, defaultChecklistRight: boolean, setValue: any, register: any, errors: any, name: string, treatmentNumber: string, getValues: any }) => {
  const { judul, data, defaultChecklistLeft, defaultChecklistRight, setValue, register, errors, name } = props;
  const [od, setOd] = useState(defaultChecklistLeft);
  const [os, setOs] = useState(defaultChecklistRight);

  const handleCheckboxChange = (val: any) => {
    setValue(`${val.target.name}`, (val.target.checked) ? '1' : '0')
  }

  return <>
    <FormGroup className='form-group'>
      <Table borderless style={{ width: '100%', marginTop: '-30px' }}>
        <tr>
          <td>
            <Row style={{ padding: '0px' }}>
              <Table>
                <tr>
                  <td>
                    <div className="me-1">
                      <Input
                        type="checkbox"
                        name={`check_od_${name.toLowerCase()}`}
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          setOd(e.target.checked)
                          handleCheckboxChange(e)
                        }}
                        defaultChecked={(data && data[`Check_Od_${name}`] && data[`Check_Od_${name}`] === '1') || defaultChecklistLeft}
                        innerRef={register(`check_od_${name.toLowerCase()}`)}
                        disabled
                      />{' '}
                      <Label>{judul}</Label>
                    </div>
                  </td>
                </tr>
              </Table>
            </Row>
          </td>
          <td>
            <Row style={{ padding: '0px' }}>
              <Table>
                <tr>
                  <td>
                    <div className="me-1">
                      <Input
                        type="checkbox"
                        name={`check_os_${name.toLowerCase()}`}
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          setOs(e.target.checked)
                          handleCheckboxChange(e)
                        }}
                        defaultChecked={(data && data[`Check_Os_${name}`] && data[`Check_Os_${name}`] === '1') || defaultChecklistRight}
                        innerRef={register(`check_os_${name.toLowerCase()}`)}
                        disabled
                      />{' '}
                      <Label>{judul}</Label>
                    </div>
                  </td>
                </tr>
              </Table>
            </Row>
          </td>
        </tr>
      </Table>
      <div className='d-flex'>
        {
          od && (
            <Table borderless style={{ width: '100%' }}>
              <tr>
                <td>
                  <Row style={{ marginTop: '-50px' }}>
                    <Table>
                      {
                        item && item.map((val: any, key: number) => (
                          <tr key={key}>
                            <td>
                              <div className="me-1">
                                <Label>{val.name}</Label>
                              </div>
                            </td>
                            <td>
                              <Row>
                                <Col>
                                  <Input
                                    type="text"
                                    style={{ width: '300px', marginLeft: '-80px' }}
                                    name={`od_${name.toLowerCase()}_${val.id}`}
                                    innerRef={register()}
                                    invalid={errors[`od_${name.toLowerCase()}_${val.id}`] && true}
                                    readOnly
                                  />
                                </Col>
                              </Row>
                            </td>
                          </tr>
                        ))
                      }
                    </Table>
                  </Row>
                </td>
              </tr>
            </Table>
          )
        }
        {
          !od && (
            <Table></Table>
          )
        }
        {
          os && (
            <Table borderless style={{ width: '100%' }}>
              <tr>
                <td>
                  <Row style={{ marginTop: '-50px' }}>
                    <Table>
                      {
                        item && item.map((val: any, key: number) => (
                          <tr key={key}>
                            <td>
                              <div className="me-1">
                                <Label style={{ marginLeft: '10px' }}>{val.name}</Label>
                              </div>
                            </td>
                            <td>
                              <Row>
                                <Col>
                                  <Input
                                    type="text"
                                    style={{ width: '300px', marginLeft: '-60px' }}
                                    name={`os_${name.toLowerCase()}_${val.id}`}
                                    innerRef={register()}
                                    invalid={errors[`os_${name.toLowerCase()}_${val.id}`] && true}
                                    readOnly
                                  />
                                </Col>
                              </Row>
                            </td>
                          </tr>
                        ))
                      }
                    </Table>
                  </Row>
                </td>
              </tr>
            </Table>
          )
        }
        {
          !os && (
            <Table></Table>
          )
        }
      </div>
    </FormGroup>
  </>
}

export default BiometricTemplateDisabled;
