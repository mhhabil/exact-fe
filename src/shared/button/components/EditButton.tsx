import { Button } from 'reactstrap';
import { Edit } from 'react-feather';
import Link from 'next/link';

const EditButton = (props: { url: string }) => {

  const { url } = props;

  return (
    <Link href={url}>
      <a>
        <Button className='btn-icon rounded-circle mr-1' color='success'>
          <Edit size={16} />
        </Button>
      </a>
    </Link>
  );
};

export default EditButton;
