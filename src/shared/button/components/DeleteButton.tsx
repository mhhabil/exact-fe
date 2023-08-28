import { Button } from 'reactstrap';
import { Trash } from 'react-feather';

const DeleteButton = (props: { onButtonClick: any }) => {

  const { onButtonClick } = props;

  return (
    <Button className='btn-icon rounded-circle' color='danger' onClick={() => onButtonClick()}>
      <Trash size={16} />
    </Button>
  );
};

export default DeleteButton;
