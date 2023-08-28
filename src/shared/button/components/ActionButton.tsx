import { Button } from 'reactstrap';
import { Eye } from 'react-feather';
import { useState } from 'react';

const ActionButton = (props: { children: any }) => {

  const { children } = props;

  const [active, setActive] = useState(false);

  return (
    <div className="action--button-container">
      <div className="action--button-content">
        <div className="action--button-main">
          <Button
            className="btn-icon rounded-circle btn-option-toggle"
            onClick={() => setActive(!active)}
            color="success">
            <Eye size={16} />
          </Button>
        </div>

        <div className={(active) ? 'action--button-list active' : 'action--button-list'}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default ActionButton;
