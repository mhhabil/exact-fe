import classnames from 'classnames';

import { useContext, useEffect, useState } from 'react';
import { Navbar as ReactstrapNavbar } from 'reactstrap';
import { useRouter } from 'next/router';

import HorizontalMenu from './HorizontalMenu';
import { SkinColorContext } from '@hooks/useSkin';
import { useNavbarColor } from '@hooks/useNavbarColor';
import { useNavbarType } from '@hooks/useNavbarType';

export const Navbar = (props: { navigations: any }) => {
  const { navigations } = props;

  const { asPath } = useRouter();

  const { skinColor } = useContext(SkinColorContext);

  const [isMounted, setIsMounted] = useState(false);

  const { navbarColor } = useNavbarColor();
  const { navbarType } = useNavbarType();
  const bgColorCondition = navbarColor !== '' && navbarColor !== 'light' && navbarColor !== 'white';

  const navbarClasses: any = {
    floating: 'floating-nav',
    sticky: 'fixed-top',
    static: 'navbar-static-top',
    hidden: 'd-none',
  }

  //** ComponentDidMount
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, [])

  if (!isMounted) {
      return null;
  }
  return (
    <div className='horizontal-menu-wrapper'>
      <ReactstrapNavbar
        tag='div'
        expand='sm'
        light={skinColor !== 'dark'}
        dark={skinColor === 'dark' || bgColorCondition}
        className={classnames(`header-navbar navbar-horizontal navbar-shadow menu-border mt-0`, {
            [navbarClasses['floating']]: navbarType !== 'static',
            'floating-nav': (!navbarClasses['floating'] && navbarType !== 'static') || navbarType === 'floating',
        })}
      >
        <HorizontalMenu routerProps={[]} currentActiveItem={asPath} navigations={navigations} />
      </ReactstrapNavbar>
    </div>
  )
}
