import { Col, FormFeedback, Input, Label } from 'reactstrap';

const SelectInput = (props: { name: string, label?: string, register: any, errors?: any, className?: string, children: any, onChange?: any, defaultValue?: any, md?: any, style?: any, disabled?: boolean, required?: boolean, mdInput?: any, inputRequired?: boolean }) => {
  const { name, label, register, errors, className, children, onChange, defaultValue, md, style, disabled, required = true, mdInput, inputRequired } = props;

  return <>
    {label ? <Label for={name} md={md} sm={12}>{label}</Label> : null}
    <Col md={mdInput}>
      <Input
        className={className}
        id={name}
        name={name}
        type="select"
        style={style}
        defaultValue={defaultValue}
        required={inputRequired}
        innerRef={register({ required })}
        invalid={errors[name] && true}
        onChange={onChange}
        disabled={disabled}
      >
        {children}
      </Input>
    </Col>
    {errors && errors[name] && <FormFeedback>{errors[name].message}</FormFeedback>}
  </>
}

export default SelectInput;
