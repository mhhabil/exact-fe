import { Col, Row } from 'reactstrap';

import {
  LoginForm,
  LoginHeader,
  LoginImage,
  LoginSubheader,
  // LoginAccount,
  // LoginFooter,
} from '@modules/auth/components';
import { AuthService } from '@src/modules/auth/services';
import { GuestPage } from '@shared/guardian';
import { useEffect } from 'react';

const Login = () => {
  const success = (test: any) => {
    console.log('Allowed:', test);
    console.log('Navigator:', navigator)
  }

  const error = (test: any) => {
    console.log('Denied:', test);
    console.log('Navigator:', navigator)
  }
  useEffect(() => {
    // if (navigator.geolocation) {
    //   navigator.permissions.query({name:'geolocation'}).then(permissionStatus => {
    //     if (permissionStatus.state === 'denied') {
    //       alert('Please allow location access.');
    //       window.location.href = "app-settings:location";
    //     } else {
    //       navigator.geolocation.getCurrentPosition(success, error);
    //     }
    //   });
    // } else {
    //   alert('Geolocation is not supported in your browser.');
    // }
    AuthService().getIpAddress()
      .then((response) => {
        const ip = response.data && response.data.data ? response.data.data.ip : null;
        console.log(`IP Address: ${ip}`);
      })
      .catch((err) => {
        console.log(`Error GET IP Address`);
        console.error(err);
      })
  }, [])
  return (
    <GuestPage>
      <div className='auth-wrapper auth-v2'>
        <Row className='auth-inner m-0'>

          <LoginImage />

          <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
            <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>

              <LoginHeader />

              <LoginSubheader />

              {/*<LoginAccount />*/}

              <LoginForm />

              {/*<LoginFooter />*/}

            </Col>
          </Col>
        </Row>
      </div>
    </GuestPage>
  );
};

export default Login
