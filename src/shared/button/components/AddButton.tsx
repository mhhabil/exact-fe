import { Button } from 'reactstrap';
import Link from 'next/link';
import { Plus } from 'react-feather';

const AddButton = (props: { url: string, label?: string }) => {

  const { url, label = 'Add Record' } = props;

  return (
    <Link href={url}>
      <a>
        <Button className='ml-2' color='primary'>
          <Plus size={15} />
          <span className='align-middle ml-50'>{label}</span>
        </Button>
      </a>
    </Link>
  );
};

export default AddButton;
