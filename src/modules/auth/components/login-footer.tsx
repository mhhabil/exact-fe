import { Button } from 'reactstrap';
import { Facebook, GitHub, Mail, Twitter } from 'react-feather';
import { Fragment } from 'react';

const LoginFooter = () => {
  return (
    <Fragment>
      <p className='text-center mt-2'>
        <span className='mr-25'>New on our platform?</span>
      </p>
      <div className='divider my-2'>
        <div className='divider-text'>or</div>
      </div>
      <div className='auth-footer-btn d-flex justify-content-center'>
        <Button color='facebook'>
          <Facebook size={14} />
        </Button>
        <Button color='twitter'>
          <Twitter size={14} />
        </Button>
        <Button color='google'>
          <Mail size={14} />
        </Button>
        <Button className='mr-0' color='github'>
          <GitHub size={14} />
        </Button>
      </div>
    </Fragment>
  )
};

export default LoginFooter;
