import Alert from '@core/components/alert';

const LoginAccount = () => {
  return (
    <Alert color='primary'>
      <div className='alert-body font-small-2'>
        <p>
          <small className='mr-50'>
            <span className='font-weight-bold'>Admin:</span> admin@demo.com | admin
          </small>
        </p>
        <p>
          <small className='mr-50'>
            <span className='font-weight-bold'>SPV:</span> spv@demo.com | spv
          </small>
        </p>
        <p>
          <small className='mr-50'>
            <span className='font-weight-bold'>Staff:</span> staff@demo.com | staff
          </small>
        </p>
      </div>
    </Alert>
  )
};

export default LoginAccount;
