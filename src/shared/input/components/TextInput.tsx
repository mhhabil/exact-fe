import { ErrorMessage } from '@hookform/error-message';
import { Col, FormFeedback, Input, Label } from 'reactstrap';

const TextInput = (props: {
  name: string,
  label?: string,
  register: any,
  errors: any,
  className?: string,
  onChange?: any,
  md?: any,
  readOnly?: boolean,
  style?: any,
  placeholder?: string,
  nolabel?: boolean,
}) => {
  const { name, label, register, errors, className, onChange, md, readOnly = false, placeholder, style, nolabel = false } = props;

  return <>
    {
      !nolabel && <Label for={name} md={md} sm={12} className="fw-bolder">{label}</Label>
    }
    <Col>
      <Input
        className={`fw-bold ${className}`}
        id={name}
        name={name}
        innerRef={register({
          required: {
            value: true,
            message: 'Harus Diisi',
          },
        })}
        invalid={errors[name] && true}
        onChange={onChange}
        readOnly={readOnly}
        placeholder={placeholder}
        style={style}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ messages }) => {
          return messages ? Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          )) : null;
        }}
      />
    </Col>
    {errors && errors[name] && <FormFeedback>{errors[name].message}</FormFeedback>}
  </>
}

export default TextInput;
