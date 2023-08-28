// ** Store Imports
import { useDispatch, useSelector } from 'react-redux';
import { handleRouterTransition } from '@store/layout';

export const useRouterTransition = () => {
  // ** Hooks
  const dispatch = useDispatch();
  const store = useSelector(state => state.layout);

  const setTransition = type => {
    dispatch(handleRouterTransition(type));
  }

  return { transition: store.routerTransition, setTransition };
}
