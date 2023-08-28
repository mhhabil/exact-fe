import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';

const ConfirmModal = (props: {toggle?: any, isOpen?: any, header?: string, body?: string, onButtonClick?: any, onButtonClose?: any }) => {
  const { toggle, isOpen, header, body, onButtonClick = () => {}, onButtonClose = () => {} } = props;

  return (
    <Modal centered isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {header}
      </ModalHeader>
      <ModalBody>
        {body}
      </ModalBody>
      <ModalFooter>
        <Button color='primary' onClick={() => {
          onButtonClick();
        }}>
                  Ya
        </Button>
        {' '}
        <Button color='danger' onClick={() => {
          onButtonClose();
        }}>
                  Tidak
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ConfirmModal;
