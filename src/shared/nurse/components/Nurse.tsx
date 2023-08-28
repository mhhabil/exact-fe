import { useEffect, useState } from 'react';
import { fetchNurse } from '@shared/nurse/stores/nurse.store';
import getConfig from 'next/config';
import { isUserLoggedIn } from '@utils';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';

const Nurse = (props: { children: any }) => {
  const { children } = props;

  const { publicRuntimeConfig } = getConfig();

  const { treatment } = useAppSelector(state => state.patient);

  const { companyCode } = useAppSelector(state => state.selectCompany);

  const [isFetched, setIsFetched] = useState(false);

  const dispatch = useAppDispatch();

  const isLogin = isUserLoggedIn();

  useEffect(() => {
    if (isLogin && treatment && companyCode) {
      dispatch(fetchNurse({
        kode_cabang: companyCode,
        tipe_pasien: treatment.Tipe_Pasien,
      }));
    }
  }, [isLogin, treatment]);

  return children;
}

export default Nurse;
