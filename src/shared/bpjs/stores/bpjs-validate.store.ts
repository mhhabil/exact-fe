import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BPJSService } from '../services';
import { BPJSValidateModel } from '../models/bpjs-validate.model';

export const fetchIsICare = createAsyncThunk(
  'bpjsValidate/fetchIsICare',
  async(option: string): Promise<any> => {
    const { data } = await BPJSService().getCompanyStatus(option);
    return data;
  },
)

const initialState: {
  bpjsValidate: BPJSValidateModel | undefined;
  isICare: boolean;
} = {
  bpjsValidate: undefined,
  isICare: false,
}

export const BPJSValidateSlice = createSlice({
  name: 'bpjsValidate',
  initialState,
  reducers: {
    handleBPJSValidate: (state, action) => {
      state.bpjsValidate = action.payload ? new BPJSValidateModel(action.payload) : undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIsICare.fulfilled, (state, action) => {
      state.isICare = action.payload.isICare
    });
  },
});

export const {
  handleBPJSValidate,
} = BPJSValidateSlice.actions;

export default BPJSValidateSlice.reducer;
