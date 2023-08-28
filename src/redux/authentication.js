// ** Redux Imports
import { StorageService } from '@src/shared/local-storage';
import { createSlice } from '@reduxjs/toolkit';

// ** UseJWT import to get config
import useJwt from '@src/auth/jwt/useJwt';

const config = useJwt.jwtConfig;
const storageService = StorageService()

const initialUser = () => {
  const item = (typeof window !== 'undefined') ? storageService.get('userData') : undefined;
  //** Parse stored json or if none return initialValue
  return item ? JSON.parse(item) : {};
}

export const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    userData: initialUser(),
    tokenExpiresIn: undefined,
  },
  reducers: {
    handleLogin: (state, action) => {
      const expiredTime = (new Date(+(new Date()).getTime() + (action.payload.tokenExpiresIn * 1000))).getTime();
      state.tokenExpiresIn = expiredTime.toString();
      storageService.set('tokenExpiredTime', expiredTime.toString());

      state.userData = action.payload;
      state[config.storageTokenKeyName] = action.payload[config.storageTokenKeyName];
      state[config.storageRefreshTokenKeyName] = action.payload[config.storageRefreshTokenKeyName];
      storageService.set('userData', JSON.stringify(action.payload));
      storageService.set(config.storageTokenKeyName, JSON.stringify(action.payload.accessToken));
      storageService.set(config.storageRefreshTokenKeyName, JSON.stringify(action.payload.refreshToken));
      // localStorage.setItem(config.storageTokenKeyName, JSON.stringify(action.payload.accessToken));
      // localStorage.setItem(config.storageRefreshTokenKeyName, JSON.stringify(action.payload.refreshToken));
    },
    handleLogout: state => {
      state.tokenExpiresIn = undefined;
      storageService.destroy('tokenExpiredTime');

      state.userData = {};
      state[config.storageTokenKeyName] = null;
      state[config.storageRefreshTokenKeyName] = null;
      // ** Remove user, accessToken & refreshToken from localStorage
      storageService.destroy('treatment');
      storageService.destroy('userData');
      storageService.destroy('companyCode');
      storageService.destroy('companyName');
      storageService.destroy('fontSize');
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(config.storageTokenKeyName);
        localStorage.removeItem(config.storageRefreshTokenKeyName);
      }
    },
  },
})

export const { handleLogin, handleLogout } = authSlice.actions;

export default authSlice.reducer;
