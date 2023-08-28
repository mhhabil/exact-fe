import { useEffect, useState } from 'react';
import { fetchNewOfficer } from '@shared/new-officer/stores/new-officer.store';
import { isUserLoggedIn } from '@utils';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';

const NewOfficer = (props: { children: any }) => {
  const { children } = props;

  const { treatment } = useAppSelector(state => state.patient);
  const [isFetched, setIsFetched] = useState(false);

  const dispatch = useAppDispatch();

  const isLogin = isUserLoggedIn();

  useEffect(() => {
    if (treatment && isLogin) {
      dispatch(fetchNewOfficer({
        emr_id: treatment.EMR_ID,
        id_dokter: treatment.ID_Dokter,
        id_pelayanan: treatment.ID_Pelayanan,
        jenis_pelayanan: treatment.Jenis_Pelayanan,
        kode_cabang: treatment.Kode_Cabang,
        no_sep: '',
        nomor_mr: treatment.No_MR,
        tipe_pasien: treatment.Tipe_Pasien,
      }));
    }
  }, [isLogin, treatment]);

  return children;
}

export default NewOfficer;
