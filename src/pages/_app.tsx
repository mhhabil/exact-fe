import '../../styles/globals.css';
import { AppProps } from 'next/app';
import getConfig from 'next/config';
import { useEffect } from 'react';

// ** Redux Imports
import { Provider } from 'react-redux';
// import { store } from '../redux/storeConfig/store';
import { store } from '@store/store';

// ** Toast & ThemeColors Context
import { ToastContainer } from 'react-toastify';

import { ThemeContext } from '../utility/context/ThemeColors';

// ** Ability Context
import { AbilityContext } from "@src/utility/context/Can";
import ability from '@configs/acl/ability';
// import role from '@configs/acl/role';

// ** Spinner (Splash Screen)
// import Spinner from '../@core/components/spinner/Fallback-spinner'

// ** Ripple Button
import '@components/ripple-button';

// ** PrismJS
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-jsx.min';

// ** React Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';

// ** Plugin styles
import '@styles/react/libs/toastify/toastify.scss';
import '@styles/react/libs/flatpickr/flatpickr.scss'

// ** Core styles
import '@assets/fonts/feather/iconfont.css';
import '@styles/core.scss';
import '@src/assets/scss/style.scss';

// ** BS Stepper
import 'bs-stepper/dist/css/bs-stepper.min.css';

// ** Component styles
import '@components/ripple-button/ripple-button.scss';
import '@styles/base/pages/page-auth.scss';
import '@styles/base/core/menu/menu-types/vertical-menu.scss';
import '@styles/base/core/menu/menu-types/horizontal-menu.scss';
import '@styles/base/core/menu/menu-types/vertical-overlay-menu.scss';
import '@styles/base/plugins/forms/form-wizard.scss';

// ** Service Worker
// import * as serviceWorker from '../serviceWorker'

import Head from 'next/head';
import Main from '@core/layouts/Main';
import { SkinContext } from '@hooks/useSkin';
// import { useAppSelector } from '@src/utility/hooks/useAppSelector';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    // ** Get HTML Tag
    const element = document.getElementsByTagName('html')[0];

    element.setAttribute('dir', 'ltr');

  }, []);

  const { publicRuntimeConfig } = getConfig();
  const appName = publicRuntimeConfig.env?.appName;

  return <>
    <Head>
      <title>{ appName }</title>
      <meta name="viewport" content='width=1500'/>
      <link rel="shortcut icon" href="/assets/default/exact-logo.png" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600"
      />
    </Head>
    <Provider store={store}>
      <AbilityContext.Provider value={ability}>
        {/*<RoleContext.Provider value={role}>*/}
        <ThemeContext>
          <SkinContext>
            <ToastContainer newestOnTop />
            <Main>
              <Component {...pageProps} />
            </Main>
          </SkinContext>
        </ThemeContext>
        {/*</RoleContext.Provider>*/}
      </AbilityContext.Provider>
    </Provider>
  </>
}

MyApp.getInitialProps = () => {
  return {};
}

export default MyApp;
