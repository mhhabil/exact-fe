import { Alert } from "reactstrap";

const ConfirmModal = (props: {isOpen: any, toggle: any, color: string, body: string}) => {
  const { toggle, color, body, isOpen } = props;

  return (
    <Alert
      isOpen={isOpen}
      color={color}
      toggle={toggle}
      fade
    >
      {body}
    </Alert>
  )
}

export default ConfirmModal;
