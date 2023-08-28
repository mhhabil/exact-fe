import { Button } from 'reactstrap';
import { Eye } from 'react-feather';
import Link from 'next/link';

const ViewButton = (props: { url: string, color?: string, Icon?: any }) => {

  const { url, color = 'warning', Icon = Eye } = props;

  return (
    <Link href={url}>
      <a>
        <Button className="btn-icon rounded-circle mr-1" color={color} >
          <Icon size={16} />
        </Button>
      </a>
    </Link>
  );
};

export default ViewButton;
