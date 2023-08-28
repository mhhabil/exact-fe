import { FormFeedback, Input, Label } from 'reactstrap';

const NumberInput = (props: { name: string, disabled?: boolean, label?: string, register: any, errors: any, className?: string, placeholder?: string, step?: string, required?: boolean }) => {
  const { name, disabled, label, register, errors, className, placeholder, step, required = true } = props;

  return <>
    <Label for={name}>{label}</Label>
    <Input
      type="number"
      className={className}
      id={name}
      name={name}
      placeholder={placeholder}
      step={step}
      disabled={disabled}
      innerRef={register({ required })}
      invalid={errors[name] && true}
    />
    {errors && errors[name] && <FormFeedback>{errors[name].message}</FormFeedback>}
  </>
}

export default NumberInput;
