import { IHttpErrorModel } from '../models/http-service-error.model';
import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  httpError: IHttpErrorModel | undefined,
} = {
  httpError: undefined,
}

export const HttpErrorSlice = createSlice({
  name: 'httpError',
  initialState,
  reducers: {
    handleHttpError: (state, action) => {
      state.httpError = action.payload
    },
  },
});

export const {
  handleHttpError,
} = HttpErrorSlice.actions;

export default HttpErrorSlice.reducer;
