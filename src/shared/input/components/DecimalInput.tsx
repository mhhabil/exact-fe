import { Label, Input, FormFeedback, Row, Col, Button } from "reactstrap";
import { useState } from "react";

const DecimalInput = (props: { name: string, label: string, register: any, errors: any, className?: string }) => {
  const { name, label, register, errors, className } = props;

  const [number, setNumber] = useState<number>(0)

  const handleIncreaseNumber = () => {
    setNumber(number + 1)
  }

  const handleDecreaseNumber = () => {
    setNumber(number - 1)
  }

  return (
    <>
      <Label for={name}>{label}</Label>
      <Row className="align-items-center">
        <Col className="d-flex flex-column" sm={2}>
          <Button size="sm" type="button" className="text-start" color="warning" style={{ width: '30px' }} onClick={() => handleDecreaseNumber()}>-</Button>
        </Col>
        <Col sm={4}>
          <Input
            type="number"
            className={className}
            id={name}
            name={name}
            defaultValue={number}
            innerRef={register({ required: true })}
            invalid={errors[name] && true}
          />
          { errors && errors[name] && <FormFeedback>{errors[name].message}</FormFeedback> }
        </Col>
        <Col className="d-flex flex-column" sm={2}>
          <Button size="sm" type="button" color="success" style={{ width: '30px' }} onClick={() => handleIncreaseNumber()}>+</Button>
        </Col>
      </Row>
    </>
  )
}

export default DecimalInput;
