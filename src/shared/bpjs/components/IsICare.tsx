import { fetchIsICare } from '../stores/bpjs-validate.store';
import { isUserLoggedIn } from '@utils';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useEffect } from 'react';

const IsICare = (props: { children: any }) => {
  const { children } = props;

  const { companyCode } = useAppSelector(state => state.selectCompany);

  const dispatch = useAppDispatch();

  const isLogin = isUserLoggedIn();

  useEffect(() => {
    if (isLogin && companyCode) {
      dispatch(fetchIsICare(companyCode));
    }
  }, [isLogin, companyCode]);

  return children;
}

export default IsICare;
