import { Button, Col, Label, Modal, ModalBody, ModalHeader, Row } from "reactstrap";

const ICareModal = (props: { isOpen: boolean, setIsOpen: any, url: string }) => {
  const { isOpen, setIsOpen, url } = props;

  return (
    <Modal isOpen={isOpen} size="xxl" className='modal-fullscreen'>
      <ModalHeader toggle={() => setIsOpen(undefined)}>i-Care</ModalHeader>
      <ModalBody className='align-items-center justify-content-center text-center'>
        <iframe src={url} width='90%' height='90%'/>
      </ModalBody>
    </Modal>
  )
}

export default ICareModal;
