import {
  Button,
  DropdownMenu,
  DropdownToggle,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  UncontrolledButtonDropdown,
} from 'reactstrap';

const DropdownModal = (props: { toggle?: any, isOpen?: any, header?: string, body?: string, onButtonClick?: any, color?: any, item: any[], selected: string, onChange: any }) => {
  const { toggle, isOpen, header, body, onButtonClick, color, onChange, item, selected } = props;

  return (
    <Modal centered isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {header}
      </ModalHeader>
      <ModalBody>
        {body}
        <Input
          type='select'
          name='dokters'
          onChange={(e) => onChange(e.target.value)}
          defaultValue={selected}
        >
          <option value="" disabled>--Pilih Dokter--</option>
          {
            item.map((val: any, key: number) => (
              <option value={val.QueuePlaceId} key={key}>{val.QueuePlaceName}</option>
            ))
          }
        </Input>
      </ModalBody>
      <ModalFooter>
        <Button color='primary' onClick={() => {
          onButtonClick();
        }}>
                    Pilih Dokter
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default DropdownModal;
