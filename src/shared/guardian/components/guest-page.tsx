import { Fragment } from 'react';

import AccessGuestPage from './access-guest-page';
import { isUserLoggedIn } from '@utils';

const GuestPage = (props: { children: any }) => {

  const { children } = props;

  return (
    <Fragment>
      {
        !isUserLoggedIn() ? children : <AccessGuestPage />
      }
    </Fragment>
  )
};

export default GuestPage;
