import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ChangePin } from '@modules/account/change-pin/models/change-pin.model';
import { ChangePinService } from '@modules/account/change-pin/services';
import { IAppRequest } from '@shared/request';

export const fetchChangePin = createAsyncThunk(
  'changePin/fetchChangePin',
  async (): Promise<any> => {
    const { data } = await ChangePinService().show();
    return data.data;
  },
);

const initialState: {
  changePin: ChangePin | undefined,
} = {
  changePin: undefined,
}

export const ChangePinSlice = createSlice({
  name: 'changePin',
  initialState,
  reducers: {
    handleChangePin: (state, action) => {
      state.changePin = new ChangePin(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChangePin.fulfilled, (state, action) => {
      state.changePin = new ChangePin(action.payload);
    });
  },
});

export const {
  handleChangePin,
} = ChangePinSlice.actions;

export default ChangePinSlice.reducer;
