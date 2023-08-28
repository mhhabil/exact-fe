// ** React Imports
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

// ** Utils
import { isCompanyCodeSelected, isUserLoggedIn } from "@utils";
import { AbilityContext } from '@src/utility/context/Can';
import useJwt from '@src/auth/jwt/useJwt';
import { useLayout } from '@hooks/useLayout';
import { useRouterTransition } from '@hooks/useRouterTransition';

// ** Custom Components
import LayoutWrapper from '../../@core/layouts/components/layout-wrapper';
import PilihCabang from '@src/pages/pilih-cabang';

// ** Layouts
import BlankLayout from '../layouts/BlankLayout';
import HorizontalLayout from '../layouts/HorizontalLayout';
import VerticalLayout from '../layouts/VerticalLayout';

import { PatientFilterRequest } from '@src/modules/site/patient-list/requests';
import { Socket } from '@src/socket/socket';
import {StorageService} from '@shared/local-storage';
import appConfig from '@configs/appConfig';
import { handleFilter } from '@src/modules/site/patient-list/stores/patient.store';
import { handleLogout } from '@store/authentication';
import { handlePatientDetail } from '@src/shared/header/stores/patient-detail.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';

import { Doctor } from '@src/shared/doctor';
import IsICare from '@src/shared/bpjs/components/IsICare';
import { NewOfficer } from '@src/shared/new-officer';
import { Nurse } from '@src/shared/nurse';
import { Officer } from '@shared/officer';
import { Treatment } from '@shared/treatment';

const Main = ({ children }) => {

  const router = useRouter();
  const { asPath } = useRouter();

  const blockAccess = (!isUserLoggedIn() && !asPath.includes(appConfig.loginUrl));

  const blockNoCompany = !!(isUserLoggedIn() !== null && !asPath.includes('/pilih-cabang') && !isCompanyCodeSelected() && !asPath.includes('/auth/change-password'));

  const { userData } = useSelector(state => state);
  const { companyCode } = useAppSelector(state => state.selectCompany);
  const { treatment } = useAppSelector(state => state.patient);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (companyCode) {
      const socket = new Socket(true, companyCode);
      socket.start(companyCode);
    }
  }, [companyCode])

  useEffect(() => {
    if (treatment?.Jenis_Pelayanan === 'RawatJalan' && asPath.includes('rawat-inap')) {
      if (asPath.includes('cppt')) {
        router.push('/rawat-jalan/cppt').then(undefined);
      } else {
        router.push('/dashboard/home').then(undefined);
      }
    }
    if (treatment?.Jenis_Pelayanan === 'RawatInap' && asPath.includes('rawat-jalan')) {
      if (asPath.includes('cppt')) {
        router.push('/rawat-inap/cppt').then(undefined);
      } else {
        router.push('/dashboard/home').then(undefined);
      }
    }
  }, [treatment])

  useEffect(() => {
    if (blockAccess) {
      const query = (router.route !== appConfig.loginUrl) ? { to: '/pilih-cabang' } : {};
      router.push({ pathname: appConfig.loginUrl, query });
    }
    if (blockNoCompany) {
      router.push('/pilih-cabang');
    }
  }, [blockAccess, router, userData, blockNoCompany]);

  // ** Hooks
  const { layout, setLayout } = useLayout();
  const { transition, setTransition } = useRouterTransition();

  // ** ACL Ability Context
  const ability = useContext(AbilityContext);

  // ** Default Layout
  const DefaultLayout = layout === 'horizontal' ? 'HorizontalLayout' : 'VerticalLayout';

  // ** All of the available layouts
  const Layouts = { BlankLayout, VerticalLayout, HorizontalLayout };

  // ** Current Active Item
  const currentActiveItem = asPath;

  const PageLayout = (asPath.includes(appConfig.loginUrl)) ? Layouts.BlankLayout : Layouts.VerticalLayout;

  useEffect(() => {
    const strUserData = StorageService().get('userData');
    const userData = (strUserData) ? JSON.parse(strUserData) : undefined;
    if (userData && userData.ability) {
      ability.update(userData.ability);
    }
  }, []);

  // if (
  //     (!isUserLoggedIn() && route.meta === undefined) ||
  //     (!isUserLoggedIn() && route.meta && ! route.meta.authRoute && !route.meta.publicRoute)
  // ) {
  //     /**
  //      ** If user is not Logged in & route meta is undefined
  //      ** OR
  //      ** If user is not Logged in & route.meta.authRoute, !route.meta.publicRoute are undefined
  //      ** Then redirect user to login
  //      */
  //
  //     router.push(appConfig.loginUrl);
  // } else if (route.meta && route.meta.authRoute && isUserLoggedIn()) {
  //     // ** If route has meta and authRole and user is Logged in then redirect user to home page (DefaultRoute)
  //     router.push('/');
  // } else if (isUserLoggedIn() && !ability.can(action || 'read', resource)) {
  //     // ** If user is Logged in and doesn't have ability to visit the page redirect the user to Not Authorized
  //     router.push('/error/403');
  // }

  if (blockAccess) {
    return null;
  }

  if (useJwt.isTokenExpired() && !asPath.includes(appConfig.loginUrl)) {
    dispatch(handleLogout());
    dispatch(handlePatientDetail(undefined))
    dispatch(handleFilter(PatientFilterRequest.createFromJson({})));
    return null;
  }

  return (
    <>
      <IsICare>
        <Treatment>
          <Officer>
            <Doctor>
              <Nurse>
                <NewOfficer>
                  {
                    !(useJwt.isTokenExpired() && !asPath.includes(appConfig.loginUrl)) && !asPath.includes('/pilih-cabang') && (
                      <PageLayout currentActiveItem={currentActiveItem}>
                        <LayoutWrapper
                          layout={DefaultLayout}
                          transition={transition}
                          setTransition={setTransition}>
                          { children }
                        </LayoutWrapper>
                      </PageLayout>
                    )
                  }
                  {
                    !useJwt.isTokenExpired() && asPath.includes('/pilih-cabang') && (
                      <PilihCabang/>
                    )
                  }
                </NewOfficer>
              </Nurse>
            </Doctor>
          </Officer>
        </Treatment>
      </IsICare>
    </>
  )
};

export default Main;
