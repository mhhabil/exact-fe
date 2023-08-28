// ** React Imports
import { createContext, useEffect, useState } from 'react';

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux';
import { handleSkin } from '@store/layout';

export const useSkin = () => {
  // ** Hooks
  const dispatch = useDispatch();
  const store = useSelector(state => state.layout);

  const setSkin = type => {
    dispatch(handleSkin(type));
  }

  useEffect(() => {
    // ** Get Body Tag
    const element = window.document.body;

    // ** Define classnames for skins
    const classNames = {
      dark: 'dark-layout',
      bordered: 'bordered-layout',
      'semi-dark': 'semi-dark-layout',
    }

    // ** Remove all classes from Body on mount
    element.classList.remove(...element.classList);

    // ** If skin is not light add skin class
    if (store.skin !== 'light') {
      element.classList.add(classNames[store.skin]);
    }
  }, [store.skin])

  return { skin: store.skin, setSkin };
}

export const SkinColorContext = createContext({skinColor: undefined, setSkinColor: undefined});

export const SkinContext = ({ children }) => {
  const [skinColor, setSkinColor] = useState();

  return <SkinColorContext.Provider value={{skinColor, setSkinColor}}>{children}</SkinColorContext.Provider>
}
