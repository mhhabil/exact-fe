// ** Store Imports
import { useDispatch, useSelector } from 'react-redux';
import { handleNavbarType } from '@store/layout';

export const useNavbarType = () => {
  // ** Hooks
  const dispatch = useDispatch();
  const store = useSelector(state => state.layout);

  const setNavbarType = type => {
    dispatch(handleNavbarType(type));
  }

  return { navbarType: store.navbarType, setNavbarType };
}
