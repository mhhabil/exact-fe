import { Button, Spinner } from 'reactstrap';

const SpinnerButton = (props: { spinnerColor: string, spinnerStyle: any, processing: boolean | undefined, label: string, onClick?: any, disabled?: boolean, style?: any, className?: string }) => {

  const { disabled, spinnerColor, processing, spinnerStyle, label, onClick, style, className = '' } = props;

  if (processing) {
    return (
      <button
        className={`me-1 ${className}`}
        type='button'
        style={style}
        disabled
      >
        {
          'Processing '
        }
        {
          <Spinner
            style={spinnerStyle}
            color={spinnerColor}
          />
        }
      </button>)
  } else {
    return (
      <button
        disabled={disabled}
        id='spinner-button'
        className={`me-1 ${className}`}
        onClick={onClick}
        style={style}
        type='button'
      >
        {label}
      </button>
    )
  }
};
export default SpinnerButton;
