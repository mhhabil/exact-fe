import { CardTitle, Label } from 'reactstrap';
import Image from 'next/image';
import getConfig from 'next/config'

const LoginHeader = () => {

  const { publicRuntimeConfig } = getConfig();

  return (
    <CardTitle tag='h2' className='font-weight-bold mb-1'>
      <div className='mb-1'>
        <Image
          src='/assets/default/exact-logo-1.png'
          alt='exact'
          objectFit='contain'
          width={256}
          height={73}
        />
      </div>
      <Label className='fs-3'>
        {publicRuntimeConfig.env.appName}
      </Label>
    </CardTitle>
  );
};

LoginHeader.getInitialProps = () => {
  return {};
}

export default LoginHeader;
