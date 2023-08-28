// ** Store Imports
import { useDispatch, useSelector } from 'react-redux';
import { handleFooterType } from '@store/layout';

export const useFooterType = () => {
  // ** Hooks
  const dispatch = useDispatch();
  const store = useSelector(state => state.layout);

  const setFooterType = type => {
    dispatch(handleFooterType(type));
  }

  return {
    setFooterType,
    footerType: store.footerType,
  }
}
