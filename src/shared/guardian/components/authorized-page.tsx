import { Fragment, useContext } from 'react';

import { AbilityContext } from '@src/utility/context/Can';
import NotAuthorized from './not-authorized';

const AuthorizedPage = (props: { to: string, a: string, children: any }) => {

  const { to, a, children } = props;

  const ability = useContext(AbilityContext);
  // const role = 'super'; // useContext(RoleContext);

  const canAccessPage = ability.can(to, a); // || role === 'super';

  return (
    <Fragment>
      {
        canAccessPage ? children : <NotAuthorized />
      }
    </Fragment>
  )
};

export default AuthorizedPage;
