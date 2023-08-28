import { Col, Label } from 'reactstrap';

import { useSkin } from '@hooks/useSkin';

import Image from 'next/image';

const LoginImage = () => {
  const { skin, setSkin } = useSkin();

  // const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
  //   source = require(`../../../assets/images/pages/${illustration}`).default;
  const source = '/assets/default/bg-image-exact.png'

  return (
    <Col className='d-none d-md-flex align-items-center ps-0' lg='8' sm='12'>
      <div className='w-100 d-lg-flex align-items-center justify-content-start'>
        <Image
          src={source}
          alt='Login V2'
          width={2736}
          height={2160}
        />
        <div className='d-flex login-bg-exact align-items-center'>
          <Image
            src='/assets/default/exact-logo-2.png'
            alt='logo exact'
            width={256}
            height={73}
            objectFit='contain'
          />
          <Label className='text-white me-1' style={{ fontSize: '40pt' }}>|</Label>
          <Label className='text-white' style={{ fontSize: '15pt' }}>
            Cepat, tepat, dan akurat untuk mengetahui<br/>
            riwayat kesehatan Anda dan keluarga
          </Label>
        </div>
      </div>
    </Col>
  );
};

export default LoginImage;
