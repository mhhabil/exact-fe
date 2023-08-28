import { Button } from 'reactstrap';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

const FormButton = () => {

  const router = useRouter();

  return (
    <Fragment>
      <Button className='me-1' color='primary' type='submit'>
        Simpan
      </Button>
      <Button color='success' type='button' onClick={() => router.back()}>
        Cetak
      </Button>
    </Fragment>
  )
}

export default FormButton;
