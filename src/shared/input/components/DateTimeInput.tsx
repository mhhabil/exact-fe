import { Col, FormFeedback, Input, Label } from 'reactstrap';

const DateTimeInput = (props: { name: string, label?: string, register: any, errors: any, className?: string, md?: any, defaultValue?: any, readOnly?: boolean, required?: boolean, style?: any }) => {
  const { defaultValue, name, label, register, errors, className, md, readOnly, style, required = true } = props;

  return <>
    <Label for={name} md={md} sm={12}>{label}</Label>
    <Col>
      <Input
        type="datetime-local"
        className={className}
        id={name}
        defaultValue={defaultValue}
        name={name}
        innerRef={register()}
        invalid={errors[name] && true}
        readOnly={readOnly}
        style={style}
      />
    </Col>
    {errors && errors[name] && <FormFeedback>{errors[name].message}</FormFeedback>}
  </>
}

export default DateTimeInput;
