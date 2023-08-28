import { FormFeedback, Input, Label } from 'reactstrap';

const TextareaInput = (props: { name: string, label: string, register: any, errors: any, className?: string }) => {
  const { name, label, register, errors, className } = props;

  return <>
    <Label for={name}>{label}</Label>
    <Input
      type="textarea"
      className={className}
      id={name}
      name={name}
      innerRef={register({ required: true })}
      invalid={errors[name] && true}
    />
    {errors && errors[name] && <FormFeedback>{errors[name].message}</FormFeedback>}
  </>
}

export default TextareaInput;
