import { Button, Spinner } from 'reactstrap';

const SubmitButton = (props: { buttonColor: string, spinnerColor: string, spinnerStyle: any, processing: boolean | undefined, label: string, onClick?: any, disabled?: boolean, style?: any }) => {

  const { buttonColor, disabled, spinnerColor, processing, spinnerStyle, label, onClick, style } = props;

  if (processing) {
    return (<Button className='me-1' color={buttonColor} type='button' style={style} disabled>
      {
        'Processing '
      }
      {
        <Spinner
          style={spinnerStyle}
          color={spinnerColor}
        />
      }
    </Button>)
  } else {
    return (
      <Button disabled={disabled} id='submit-button' className='mx-1' onClick={onClick} color={buttonColor} style={style} type='submit'>
        {label}
      </Button>
    )
  }
};
export default SubmitButton;
