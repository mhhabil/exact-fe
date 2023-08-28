import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Fragment, useContext, useEffect, useState } from 'react';
import { Slide, toast } from 'react-toastify'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import { getHomeRouteForLoggedInUser, isObjEmpty } from '@utils';
import { AbilityContext } from '@src/utility/context/Can';
// import { HandleLogin } from '../../../redux/actions/auth';

// import Avatar from '../../../@core/components/avatar';
import InputPasswordToggle from '@core/components/input-password-toggle';

import { AuthService } from '../services';
import Link from 'next/link';
import { LoginRequest } from '../requests';
import { handleAuthorizedCompany } from '@src/modules/select-company/stores/select-company.store';
import { handleLogin } from '@store/authentication';

const modulesToAbilities = (modules: Array<any>) => {
  let abilities: Array<any> = [];
  for (const value of modules) {
    if (value.tcreate) {
      abilities = [...abilities, {action: 'create', subject: value.module_code}];
    }
    if (value.tread) {
      abilities = [...abilities, {action: 'read', subject: value.module_code}];
    }
    if (value.tupdate) {
      abilities = [...abilities, {action: 'update', subject: value.module_code}];
    }
    if (value.tdelete) {
      abilities = [...abilities, {action: 'delete', subject: value.module_code}];
    }
  }
  return abilities;
}

const ToastContent = (props: { name: string, role: string }) => {
  const { name, role } = props;

  return (
    <Fragment>
      <div className='toastify-header'>
        <div className='title-wrapper'>
          {/*<Avatar {...avatarAttributes} />*/}
          <h6 className='toast-title font-weight-bold'>Welcome, {name}</h6>
        </div>
      </div>
      <div className='toastify-body'>
        <span>You have successfully logged in as {role} . Now you can start to explore. Enjoy!</span>
      </div>
    </Fragment>
  )
};

const LoginForm = () => {

  const { handleSubmit, formState: { errors } } = useForm();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const ability = useContext(AbilityContext);
  const router = useRouter();

  const onSubmit = () => {

    const loginRequest: LoginRequest = new LoginRequest({ username, password });

    if (isObjEmpty(errors)) {
      AuthService()
        .login(loginRequest)
        .then((response: any) => {
          const { data, status } = response;
          if (status === 200) {
            const isRM = !!((data && data.access && data.access.divisi_list && data.access.divisi_list.length > 0 && (data.access.divisi_list.includes('23'))))
            const isRO = !!((data && data.access && data.access.divisi_list && data.access.divisi_list.length > 0 && (data.access.divisi_list.includes('3'))))
            const isNurse = !!((data && data.access && data.access.divisi_list && data.access.divisi_list.length > 0 && (data.access.divisi_list.includes('4'))))
            const userData = {
              id: data.user_id,
              fullName: data.profile.nama,
              username: data.profile.nama,
              nik: data.profile.nik,
              isRM,
              isRO,
              isNurse,
              companyList: data.access.company_list,
            }

            const modules = (data.access && data.access.modules) ? data.access.modules : [];
            const isAllAccess = modules.find((item: any) => item.module_code === 'EMR.AllAccess');
            const abilities = modulesToAbilities(modules);

            const localStorageData = {
              ...userData,
              isAllAccess: !!isAllAccess,
              accessToken: data.token,
              refreshToken: data.refresh_token,
              role: data.access.role,
              ability: abilities,
              tokenExpiresIn: data.expires_in,
            };
            dispatch(handleAuthorizedCompany(data.access.company_list));
            dispatch(handleLogin(localStorageData));
            AuthService()
              .detail({ employee_id: data.user_id })
              .then((response: any) => {
                const detail = response.data.detail;
                const isDokter = !!(detail.division_id && detail.division_id === 14);
                const storageData = {
                  ...localStorageData,
                  isDokter,
                };
                dispatch(handleLogin(storageData));
              })
              .catch((err: any) => console.log(err));
            ability.update(abilities);
            const { to } = router.query;
            if (to) {
              router.push(to.toString()).then(undefined);
            } else {
              router.push(getHomeRouteForLoggedInUser(localStorageData.role)).then(undefined);
            }
            toast.success(
              <ToastContent name={localStorageData.fullName || localStorageData.username || 'User'} role={localStorageData.role || 'normal user'} />,
              { transition: Slide, hideProgressBar: true, autoClose: 5000 },
            );
          }
        })
        .catch((err: any) => console.log(err));
    }
  };

  return (
    <>
      <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
        <FormGroup className="form-group">
          <Label className='form-label' for='login-username'>
            Email
          </Label>
          <Input
            type='text'
            id='login-username'
            placeholder='john@example.com'
            value={username}
            onChange={(e: any) => setUsername(e.target.value)}
            autoFocus />
        </FormGroup>
        <FormGroup className="form-group">
          <div className='d-flex justify-content-between'>
            <Label className='form-label' for='login-password'>
              Password
            </Label>
          </div>
          <InputPasswordToggle
            className='input-group-merge'
            value={password}
            onChange={(e: any) => setPassword(e.target.value)} />
        </FormGroup>
        {/*<FormGroup>*/}
        {/*    <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Remember Me' />*/}
        {/*</FormGroup>*/}
        <Button type="submit" color='primary' block >
          Sign in
        </Button>
      </Form>
      <p style={{ position: 'absolute', marginTop: '10%' }}>
        {`${new Date().getFullYear()} `} Copyrights &copy; <Link href='https://gic-indonesia.com'><a className='text-primary'>Global Inovasi Cahaya</a></Link>
      </p>
    </>
  );
};

export default LoginForm;
