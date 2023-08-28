import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HeaderPdfConfigModel } from '../models/header-pdf-config.model';
import { HeaderPdfConfigService } from '../services';

export const fetchHeaderPdfConfig = createAsyncThunk(
  'headerPdfConfig/fetchHeaderPdfConfig',
  async (option: string): Promise<any> => {
    const { data } = await HeaderPdfConfigService().get(option);
    return data.data;
  },
);

const initialState: {
  headerPdfConfig: HeaderPdfConfigModel | undefined,
} = {
  headerPdfConfig: undefined,
}

export const HeaderPdfConfigSlice = createSlice({
  name: 'headerPdfConfig',
  initialState,
  reducers: {
    handleHeaderPdfConfig: (state, action) => {
      state.headerPdfConfig = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHeaderPdfConfig.fulfilled, (state, action) => {
      state.headerPdfConfig = new HeaderPdfConfigModel(action.payload);
    });
  },
});

export const {
  handleHeaderPdfConfig,
} = HeaderPdfConfigSlice.actions;

export default HeaderPdfConfigSlice.reducer;

