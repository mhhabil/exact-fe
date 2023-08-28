import Image from 'next/image';
import Link from 'next/link';

import { Button } from 'reactstrap';

import notAuthImg from '@src/assets/images/pages/not-authorized.svg';
import notAuthImgDark from '@src/assets/images/pages/not-authorized-dark.svg';
import { useSkin } from '@hooks/useSkin';

const NotAuthorized = () => {
  const { skin } = useSkin();
  const image = (skin === 'light') ? notAuthImg : notAuthImgDark;

  return (
    <div className='misc-wrapper'>
      <div className='misc-inner p-2 p-sm-3'>
        <div className='w-100 text-center'>
          <h2 className='mb-1'>You are not authorized! 🔐</h2>
          <div>
            <Link href="/">
              <a>
                <Button color='primary' className='btn-sm-block mb-1'>
                  Go to Home Page
                </Button>
              </a>
            </Link>
          </div>
          <Image className='img-fluid' src={image} alt='Not authorized page' />
        </div>
      </div>
    </div>
  )
}

export default NotAuthorized;
