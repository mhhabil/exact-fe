import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const DeleteModal = (props: { isShow: any, setIsShow: any, onDeleteClick: any }) => {

  const { isShow, setIsShow, onDeleteClick } = props;

  return (
    <Modal isOpen={isShow}>
      <ModalHeader toggle={setIsShow}>Konfirmasi</ModalHeader>
      <ModalBody>
        Apakah anda yakin akan menghapus data ini?
      </ModalBody>
      <ModalFooter>
        <Button color="danger" type="button" onClick={onDeleteClick}>Delete</Button>
        <Button color="secondary" type="button" onClick={setIsShow}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

export default DeleteModal;
