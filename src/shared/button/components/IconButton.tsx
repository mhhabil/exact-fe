import { Button } from 'reactstrap';

const IconButton = (props: { onButtonClick?: any, icon: any, label: string, color?: string, className?: string, disabled?: boolean }) => {

  const { onButtonClick = () => {}, icon, label, color = 'primary', className = '', disabled = false } = props;

  const IconTag = icon;

  return (
    <Button color={color} onClick={() => onButtonClick()} {...{ className, disabled }}>
      <IconTag />
      <span className="align-middle ml-50">{label}</span>
    </Button>
  );
};

export default IconButton;
